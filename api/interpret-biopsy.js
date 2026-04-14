// ════════════════════════════════════════════════════════════
//  DERM MA PORTAL — Biopsy Interpreter API Endpoint
//  Vercel Serverless Function (Node.js)
//  Calls Claude (claude-sonnet-4-6) to interpret pathology reports
//  and return a structured JSON response for MAs.
//
//  Required environment variable: ANTHROPIC_API_KEY
//  Set this in Vercel dashboard → Project Settings → Environment Variables
// ════════════════════════════════════════════════════════════

const Anthropic = require('@anthropic-ai/sdk');

// ── System prompt — sets Claude's role and guardrails ────────
const SYSTEM_PROMPT = `You are a specialized clinical AI assistant for a dermatology medical office.
Your role is to help Medical Assistants (MAs) interpret dermatopathology biopsy and pathology reports.

Your expertise covers:
- Skin cancers: BCC (nodular, superficial, morpheaform, micronodular), SCC (in situ/Bowen's, invasive, well/poorly differentiated), melanoma (superficial spreading, nodular, lentigo maligna, acral lentiginous — all stages), Merkel cell carcinoma, DFSP, MF/CTCL, sebaceous carcinoma, angiosarcoma
- Pre-malignant: Actinic keratosis, SCC in situ (Bowen's), lentigo maligna, atypical melanocytic proliferation, dysplastic nevi (mild/moderate/severe)
- Inflammatory: Spongiotic dermatitis (acute/subacute/chronic), psoriasiform dermatitis, lichenoid dermatitis, interface dermatitis, granulomatous inflammation, panniculitis, vasculitis
- Infections: Verruca vulgaris/plantaris, molluscum contagiosum, tinea (hyphae), folliculitis, impetigo
- Melanocytic lesions: Compound/intradermal/junctional nevi, blue nevi, Spitz nevi, dysplastic nevi
- Blistering diseases: Pemphigus vulgaris/foliaceus, bullous pemphigoid, dermatitis herpetiformis, linear IgA
- Adnexal: Epidermoid cysts, pilar cysts, lipomas, sebaceous hyperplasia, syringoma, trichoepithelioma, cylindroma, hidradenoma
- Vascular: Pyogenic granuloma, hemangioma, angiokeratoma, Kaposi sarcoma

CRITICAL RULES:
- Always remind MAs that the physician must review results before patient contact
- Never suggest MAs share a specific diagnosis with patients — only use the provided patient scripts
- Flag urgency accurately — melanoma, DFSP, Merkel cell, MF, SCC with positive margins = urgent/expedited
- When margins are mentioned, always highlight margin status prominently
- For melanoma, always extract Breslow depth, Clark level, mitotic rate, and ulceration if present — these determine staging
- Your patient communication scripts should never mention the actual diagnosis by name`;

// ── User prompt template ──────────────────────────────────────
const buildPrompt = (biopsyText) => `Please interpret the following dermatopathology/biopsy report and return a JSON object with EXACTLY this structure. Respond with raw JSON only — no markdown, no code blocks, no text outside the JSON.

{
  "diagnosis": "Primary diagnosis in plain language (e.g., 'Nodular Basal Cell Carcinoma')",
  "diagnosisCode": "Most relevant ICD-10 code (e.g., 'C44.91') or null",
  "severity": "One of: 'Benign' | 'Pre-malignant' | 'Malignant in situ' | 'Invasive Malignant' | 'Inflammatory' | 'Infectious' | 'Unclear'",
  "urgency": "One of: 'routine' | 'expedited' | 'urgent'",
  "urgencyReason": "One-sentence reason for the urgency level",
  "maActionNote": "Specific action the MA should take right now (e.g., 'Flag chart for physician callback — positive margins on SCC' or 'Routine result — place in callback queue')",
  "plainSummary": "2-3 sentences explaining this diagnosis in plain English that a non-medical person can understand",
  "keyFindings": [
    "List every important finding extracted from THIS specific report",
    "Include: margin status, Breslow depth, Clark level, mitotic rate, ulceration, perineural invasion, lymphovascular invasion, subtype, differentiation grade, etc.",
    "Only include findings actually mentioned in the report — do not fabricate"
  ],
  "nextSteps": [
    "List the typical clinical next steps for this diagnosis",
    "e.g., 'Schedule wide local excision', 'Refer for Mohs surgery', 'Schedule sentinel lymph node biopsy consult', 'Annual full-body skin exam'"
  ],
  "patientScript": "A professional 3-5 sentence script the MA can read to the patient AFTER physician review. Write as if the MA is speaking. Do NOT name the specific diagnosis — say 'your biopsy results are back and the doctor has reviewed them.' Focus on next steps and reassurance.",
  "doNotSay": [
    "Things the MA should absolutely NOT say to the patient",
    "e.g., 'Do not say it is cancer', 'Do not discuss staging or prognosis'"
  ],
  "marginStatus": "One of: 'Clear' | 'Involved (positive margins)' | 'Close margins' | 'Not applicable' | 'Not mentioned in report'",
  "specialFindings": "Any additional high-priority clinical details: Breslow depth in mm, Clark level I-V, mitotic rate per mm², ulceration present/absent, perineural invasion, lymphovascular invasion, satellitosis — or null if not applicable"
}

PATHOLOGY REPORT TO INTERPRET:
${biopsyText}`;

// ── Main handler ──────────────────────────────────────────────
module.exports = async function handler(req, res) {
  // CORS headers for browser requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Validate input
  const { biopsyText } = req.body || {};
  if (!biopsyText || biopsyText.trim().length < 15) {
    return res.status(400).json({
      error: 'Please provide a complete biopsy report (minimum 15 characters).'
    });
  }

  // Check API key
  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({
      error: 'API key not configured. Set ANTHROPIC_API_KEY in Vercel Environment Variables.',
      setup: true
    });
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1800,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: buildPrompt(biopsyText.trim()) }]
    });

    const rawText = message.content[0].text.trim();

    // Strip any accidental markdown code fences
    const jsonText = rawText
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();

    const interpretation = JSON.parse(jsonText);
    return res.status(200).json({ success: true, interpretation });

  } catch (err) {
    console.error('Claude API error:', err.message);

    if (err instanceof SyntaxError) {
      return res.status(500).json({
        error: 'AI returned an unexpected format. Please try again.'
      });
    }
    if (err.status === 401) {
      return res.status(401).json({
        error: 'Invalid API key. Check your ANTHROPIC_API_KEY in Vercel settings.'
      });
    }
    if (err.status === 429) {
      return res.status(429).json({
        error: 'Rate limit reached. Please wait a moment and try again.'
      });
    }

    return res.status(500).json({
      error: `Interpretation failed: ${err.message}`
    });
  }
};
