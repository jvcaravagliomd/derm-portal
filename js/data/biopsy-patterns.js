// ════════════════════════════════════════════════════════════
//  BIOPSY REPORT PATTERN MATCHING DATA
//  Matches common pathology report terms to clinical guidance.
//  IMPORTANT: Always requires physician review before patient contact.
// ════════════════════════════════════════════════════════════

const BIOPSY_PATTERNS = [

  {
    id: "melanoma-invasive",
    keywords: ["melanoma", "malignant melanoma", "invasive melanoma", "breslow"],
    excludeKeywords: ["in situ", "in-situ", "lentigo maligna melanoma in situ"],
    urgency: "urgent",
    diagnosisLabel: "Invasive Melanoma",
    categoryLabel: "Skin Cancer",
    plainEnglish: "This biopsy has shown a melanoma — a type of skin cancer that arises from the pigment-producing cells (melanocytes) in the skin. The report indicates this melanoma has grown into the deeper layers of the skin (it is 'invasive'). The depth of growth (called Breslow thickness), measured in millimeters, is one of the most important factors in determining next steps.",
    keyFindings: [
      "Breslow thickness: look for a measurement in millimeters (e.g., '0.8 mm') — this indicates how deep the tumor grew.",
      "Ulceration: presence of ulceration is a negative prognostic factor.",
      "Mitotic rate: number of cell divisions per mm² — higher rates are less favorable.",
      "Margins: 'positive' or 'involved' margins mean cancer cells are at the edge of the removed tissue and further treatment is needed.",
      "Lymphovascular invasion: if present, increases risk of spread."
    ],
    nextSteps: [
      "🔴 The physician must speak with the patient directly about this diagnosis and the next steps.",
      "📋 A wide local excision (WLE) will typically be scheduled with specific margin widths determined by Breslow thickness.",
      "🏥 Referral to surgical oncology or medical oncology may be needed depending on staging.",
      "🔬 Sentinel lymph node biopsy (SLNB) is considered for melanomas ≥0.8 mm thick (or thinner with adverse features).",
      "📅 Urgency: staging and surgical planning should ideally be initiated within 2–4 weeks of diagnosis."
    ],
    patientScript: "I'm calling from Dr. [name]'s office. Dr. [name] has reviewed your biopsy results and would like to speak with you personally about them. The doctor wants to make sure they explain everything clearly and answer all your questions. Can we schedule a time for the doctor to call you, or would you prefer to come in for a visit?",
    doNotSay: [
      "Do NOT tell the patient the diagnosis over the phone without physician direction.",
      "Do NOT provide staging information.",
      "Do NOT say 'it's just a melanoma' or minimize the diagnosis.",
      "Do NOT give a prognosis."
    ],
    maNote: "STOP. For any melanoma diagnosis, the physician MUST personally contact the patient or be present. Your role is to schedule that contact. Document the call."
  },

  {
    id: "melanoma-in-situ",
    keywords: ["melanoma in situ", "in situ melanoma", "lentigo maligna melanoma in situ", "lentigo maligna in situ", "melanoma, in situ"],
    excludeKeywords: [],
    urgency: "soon",
    diagnosisLabel: "Melanoma In Situ",
    categoryLabel: "Skin Cancer",
    plainEnglish: "This biopsy has shown melanoma in situ — this means that melanoma cells are present, but they are confined to the outermost layer of the skin (the epidermis) and have not grown into the deeper layers. 'In situ' means 'in place.' This is the earliest stage of melanoma, and when treated appropriately, it has an excellent prognosis.",
    keyFindings: [
      "No invasion into the dermis (no Breslow thickness will be given — that applies only to invasive melanoma).",
      "Margins: the report may note whether the in situ melanoma extends to the biopsy edges — important for planning re-excision.",
      "Lentigo maligna type: often on chronically sun-damaged skin of the face in older patients."
    ],
    nextSteps: [
      "📋 Wide local excision (WLE) is required — typically 0.5–1 cm margins for melanoma in situ.",
      "✂️ Mohs surgery is an option, especially for lentigo maligna subtype on cosmetically sensitive areas (face).",
      "📅 Excision is typically scheduled within 4–8 weeks.",
      "🔵 No sentinel lymph node biopsy is needed for melanoma in situ.",
      "📞 Physician should speak with the patient about the diagnosis and treatment plan."
    ],
    patientScript: "I'm calling from Dr. [name]'s office. Dr. [name] has reviewed your biopsy results and would like to speak with you about them and schedule a follow-up procedure. Are you available for a phone consultation, or would you prefer to come in?",
    doNotSay: [
      "Do NOT relay diagnosis details without physician approval.",
      "Do NOT say 'it's fine — it's just the early kind' — while it is excellent news, the patient deserves a complete explanation."
    ],
    maNote: "Physician should contact the patient directly. Schedule either a phone consultation or an in-person visit for results and procedure scheduling."
  },

  {
    id: "scc-invasive",
    keywords: ["squamous cell carcinoma", "squamous cell carcinoma, invasive", "invasive squamous", "scc, invasive", "well differentiated squamous", "moderately differentiated squamous", "poorly differentiated squamous"],
    excludeKeywords: ["in situ", "in-situ", "bowen", "squamous cell carcinoma in situ"],
    urgency: "soon",
    diagnosisLabel: "Invasive Squamous Cell Carcinoma (SCC)",
    categoryLabel: "Skin Cancer",
    plainEnglish: "This biopsy has shown squamous cell carcinoma (SCC) — the second most common type of skin cancer. Unlike the most common type (basal cell carcinoma), SCC has a small but real chance of spreading to the lymph nodes or other parts of the body, particularly if it is large, deep, or located on high-risk areas like the ear, lip, or in patients who have a weakened immune system.",
    keyFindings: [
      "Differentiation: 'well differentiated' = better prognosis; 'poorly differentiated' = higher risk.",
      "Depth of invasion: greater depth increases risk of spread.",
      "Perineural invasion (PNI): cancer growing along nerves — significantly increases risk, requires wider excision.",
      "Lymphovascular invasion (LVI): cancer in blood/lymph vessels — higher risk of spread.",
      "Margins: 'positive' or 'involved' margins indicate cancer at the edge — more tissue removal needed."
    ],
    nextSteps: [
      "📋 Surgical excision is required — Mohs surgery may be recommended depending on size, location, and subtype.",
      "🔬 High-risk features (PNI, LVI, poor differentiation, >2 cm, immunocompromised) may warrant oncology referral.",
      "📅 Treatment should be scheduled promptly — within 4–6 weeks.",
      "🩺 Lymph node examination will be performed at follow-up.",
      "📞 Physician will discuss specifics and next steps with the patient."
    ],
    patientScript: "I'm calling from Dr. [name]'s office. Your biopsy results are back, and Dr. [name] would like to speak with you about them and arrange your next steps. Would you be available for a call with the doctor, or would you prefer to come in for an appointment?",
    doNotSay: [
      "Do NOT say 'it might spread' or frighten the patient with worst-case scenarios.",
      "Do NOT give margin or staging details without physician approval."
    ],
    maNote: "Check for high-risk features (PNI, LVI, poor differentiation) in the report and flag for physician. Prompt scheduling is important."
  },

  {
    id: "scc-in-situ",
    keywords: ["squamous cell carcinoma in situ", "bowen's disease", "bowen disease", "scc in situ", "intraepidermal carcinoma", "squamous cell carcinoma, in situ"],
    excludeKeywords: [],
    urgency: "routine",
    diagnosisLabel: "Squamous Cell Carcinoma In Situ (SCC-IS / Bowen's Disease)",
    categoryLabel: "Skin Cancer",
    plainEnglish: "This biopsy shows squamous cell carcinoma in situ — also known as Bowen's disease. 'In situ' means the abnormal cells are confined to the outermost layer of skin (the epidermis) and have not grown into the deeper layers. This is an early, pre-invasive form of squamous cell carcinoma. It has an excellent prognosis and is very curable with treatment.",
    keyFindings: [
      "No invasion into the dermis — excellent prognosis.",
      "Margins: may extend to biopsy edges — re-treatment of the whole field may be needed.",
      "Location: on the genitalia, SCC-IS (erythroplasia of Queyrat) may have higher risk of progression."
    ],
    nextSteps: [
      "📋 Treatment options include: excision, electrodessication and curettage (ED&C), cryotherapy, 5-FU cream, imiquimod, or photodynamic therapy (PDT) — physician will select based on size and location.",
      "📅 Non-urgent — typically scheduled within 4–8 weeks.",
      "📞 Physician or MA can call with the result depending on practice workflow."
    ],
    patientScript: "I'm calling from Dr. [name]'s office with your biopsy results. Your result showed an early type of skin change called squamous cell carcinoma in situ, which is a very early and very treatable finding. Dr. [name] wants to go over this with you and plan the best treatment. Can we schedule a time to come in?",
    doNotSay: [
      "Do NOT say 'you have skin cancer' without clarifying the in situ (early, non-invasive) nature.",
      "Do NOT discuss invasive SCC management — the in situ form has a very different prognosis."
    ],
    maNote: "Confirm with physician whether they want to make the call personally or if MA can relay this result with a scripted message. Both approaches are acceptable for in situ findings."
  },

  {
    id: "bcc",
    keywords: ["basal cell carcinoma", "bcc", "basaloid", "nodular bcc", "superficial bcc", "infiltrative bcc", "morpheaform", "micronodular bcc", "sclerosing bcc"],
    excludeKeywords: [],
    urgency: "routine",
    diagnosisLabel: "Basal Cell Carcinoma (BCC)",
    categoryLabel: "Skin Cancer",
    plainEnglish: "This biopsy shows basal cell carcinoma (BCC) — the most common type of skin cancer. BCC almost never spreads to other parts of the body. It grows slowly and locally. With treatment, outcomes are excellent. The subtype of BCC matters for treatment planning.",
    keyFindings: [
      "Subtype: nodular (most common, low-risk), superficial (low-risk, easily treated), morpheaform/sclerosing/infiltrative (high-risk — more aggressive local growth, harder to clear, Mohs recommended).",
      "Margins: 'positive' or 'involved' margins require re-treatment.",
      "Perineural invasion: rare in BCC but increases risk of recurrence."
    ],
    nextSteps: [
      "📋 Treatment depends on subtype and location:",
      "• Nodular/superficial BCC on low-risk areas: ED&C, excision, or cryotherapy may be appropriate.",
      "• Morpheaform/infiltrative or BCC on high-risk areas (face, ears, scalp): Mohs surgery recommended.",
      "• Superficial BCC: topical imiquimod or 5-FU may be appropriate alternatives.",
      "📅 Non-urgent but should be scheduled within 4–8 weeks.",
      "📞 MA can typically relay this result with a scripted message after physician review."
    ],
    patientScript: "Hi, I'm calling from Dr. [name]'s dermatology office with your biopsy results. Your result showed a basal cell carcinoma — this is the most common type of skin cancer, and the good news is that it very rarely spreads. We do need to remove it, and Dr. [name] has a plan for how to do that. Can we schedule you to come in to discuss the next steps?",
    doNotSay: [
      "Do NOT minimize by saying 'it's nothing' — while BCC is very treatable, it does require treatment.",
      "Do NOT share specific margin information without physician review."
    ],
    maNote: "Document subtype from the report. Morpheaform/infiltrative/sclerosing BCC should be flagged — these are higher risk and Mohs is strongly preferred. All results should be reviewed by physician before MA calls."
  },

  {
    id: "dysplastic-nevus-severe",
    keywords: ["dysplastic nevus, severe", "severely dysplastic nevus", "severely atypical nevus", "atypical nevus with severe dysplasia", "melanocytic nevus with severe atypia"],
    excludeKeywords: [],
    urgency: "soon",
    diagnosisLabel: "Severely Dysplastic (Atypical) Nevus",
    categoryLabel: "Moles / Nevi",
    plainEnglish: "This biopsy shows a severely atypical mole (severely dysplastic nevus). This is NOT melanoma, but it is considered a higher-risk mole that requires complete removal to ensure all abnormal cells are gone. The current evidence suggests that severely dysplastic nevi should be excised to clear margins.",
    keyFindings: [
      "Severely atypical: considered borderline for possible progression risk.",
      "Margins: if margins are involved or close, re-excision is typically recommended.",
      "Distinction from melanoma in situ: this distinction can sometimes be challenging histologically — will be determined by pathologist."
    ],
    nextSteps: [
      "📋 Re-excision with 2–5 mm margins is typically recommended for severe dysplasia.",
      "📅 Schedule within 4–8 weeks.",
      "📞 Physician should review before MA calls patient."
    ],
    patientScript: "I'm calling from Dr. [name]'s office with your biopsy result. The result showed a very atypical mole — it is not melanoma, but Dr. [name] recommends removing a small additional margin of skin to make sure it is completely removed. Can we schedule that procedure?",
    doNotSay: [
      "Do NOT say 'it's almost melanoma' — this is unnecessarily alarming.",
      "Do NOT say 'it's just an atypical mole, nothing to worry about' — severe dysplasia does warrant re-excision."
    ],
    maNote: "Severity matters: mild/moderate dysplasia = often observation or narrow excision; severe dysplasia = re-excision recommended. Confirm specific plan with physician before calling."
  },

  {
    id: "dysplastic-nevus-mild-moderate",
    keywords: ["dysplastic nevus, mild", "dysplastic nevus, moderate", "mildly dysplastic", "moderately dysplastic", "atypical nevus", "atypical melanocytic nevus", "compound dysplastic nevus", "junctional dysplastic nevus"],
    excludeKeywords: ["severe", "severely"],
    urgency: "routine",
    diagnosisLabel: "Mildly or Moderately Atypical Nevus (Dysplastic Nevus)",
    categoryLabel: "Moles / Nevi",
    plainEnglish: "This biopsy shows a mildly or moderately atypical mole (dysplastic nevus). This is NOT melanoma and is not considered pre-cancerous in the same urgent sense. Most mildly and moderately atypical nevi do not require re-excision as long as the biopsy margins are clear.",
    keyFindings: [
      "Mild/moderate atypia with clear margins: most dermatologists observe rather than re-excise.",
      "Mild/moderate atypia with involved margins: re-excision with narrow margins (1–2 mm) may be recommended — varies by physician preference and practice guidelines.",
      "Important: severity (mild/moderate/severe) determines management."
    ],
    nextSteps: [
      "📋 If margins are clear: routine follow-up; no re-excision typically needed.",
      "📋 If margins are involved: physician may recommend narrow re-excision.",
      "📅 Routine follow-up — annual skin exam.",
      "📞 MA can call with this result after physician review."
    ],
    patientScript: "I'm calling from Dr. [name]'s office with your biopsy results. The biopsy showed an atypical mole — the good news is that it is not melanoma. Dr. [name] has reviewed the results. Based on the margins [and physician's plan], [no further procedure is needed at this time / we would like to schedule a small touch-up removal]. We do recommend continuing your annual skin checks.",
    doNotSay: [
      "Do NOT over-alarm by calling it 'almost cancer.'",
      "Do NOT promise it is 'completely fine' without confirming margin status."
    ],
    maNote: "Check the margins in the report. Confirm the physician's plan (observe vs. re-excise) before calling. Document the call."
  },

  {
    id: "benign-nevus",
    keywords: ["benign nevus", "intradermal nevus", "compound nevus", "junctional nevus", "melanocytic nevus", "blue nevus", "spitz nevus"],
    excludeKeywords: ["atypical", "dysplastic", "melanoma", "atypia"],
    urgency: "routine",
    diagnosisLabel: "Benign Melanocytic Nevus (Mole)",
    categoryLabel: "Moles / Nevi",
    plainEnglish: "This biopsy shows a benign mole (melanocytic nevus). There is no evidence of cancer or atypical (abnormal) cells. This is a completely reassuring result.",
    keyFindings: [
      "Benign: no features of dysplasia, atypical cells, or malignancy.",
      "If margins are involved, no clinical concern — moles do not need to be completely excised unless cosmetically desired."
    ],
    nextSteps: [
      "✅ No further treatment is needed for benign nevi.",
      "📅 Continue routine annual skin surveillance.",
      "📞 MA can relay this result."
    ],
    patientScript: "Hi, I'm calling from Dr. [name]'s office with your biopsy results — great news! The biopsy showed that your mole was completely benign — that means completely normal, no signs of anything concerning. No further treatment is needed. We'll see you for your next routine skin check.",
    doNotSay: [],
    maNote: "Benign nevus is a routine, reassuring result. MA can relay directly per practice protocol."
  },

  {
    id: "actinic-keratosis",
    keywords: ["actinic keratosis", "actinic keratoses", "solar keratosis", "ak", "atypical keratinocyte proliferation", "lichenoid actinic keratosis"],
    excludeKeywords: ["squamous cell carcinoma", "carcinoma"],
    urgency: "routine",
    diagnosisLabel: "Actinic Keratosis (AK)",
    categoryLabel: "Precancer",
    plainEnglish: "This biopsy shows an actinic keratosis (AK) — a precancerous spot caused by years of UV/sun damage. Actinic keratoses are not skin cancer, but they can develop into squamous cell carcinoma if left untreated over time. They respond very well to treatment.",
    keyFindings: [
      "Precancerous — not yet cancer, but warrants treatment.",
      "May be graded as mild/moderate/severe — more severe lesions may be harder to distinguish from SCC in situ."
    ],
    nextSteps: [
      "📋 Treatment as discussed with the physician (cryotherapy, field therapy, PDT).",
      "📅 Routine — treatment during or after the current visit, or at the next scheduled appointment.",
      "🌞 Sun protection counseling is important.",
      "📞 MA can relay this result."
    ],
    patientScript: "I'm calling from Dr. [name]'s office with your biopsy result. Your result showed an actinic keratosis — this is a precancerous spot caused by sun damage. It is not skin cancer, but we do treat these to prevent them from potentially developing into skin cancer over time. Dr. [name] has already treated this / we'd like to schedule treatment at your next visit.",
    doNotSay: [],
    maNote: "Document whether the AK was already treated at the time of biopsy (shave + curettage) or if further treatment is planned."
  },

  {
    id: "seborrheic-keratosis",
    keywords: ["seborrheic keratosis", "sk", "seborrhoeic keratosis", "irritated seborrheic keratosis", "inflamed seborrheic keratosis"],
    excludeKeywords: [],
    urgency: "routine",
    diagnosisLabel: "Seborrheic Keratosis",
    categoryLabel: "Benign",
    plainEnglish: "This biopsy shows a seborrheic keratosis — a completely benign skin growth. Seborrheic keratoses are extremely common and have no potential to become cancerous. No further treatment is necessary.",
    keyFindings: [
      "Benign — no malignant potential whatsoever.",
      "Very common with aging.",
      "Irritated seborrheic keratoses may look alarming but are still benign."
    ],
    nextSteps: [
      "✅ No further treatment needed.",
      "📅 Routine annual skin check.",
      "📞 MA can relay this result."
    ],
    patientScript: "I'm calling from Dr. [name]'s office with your biopsy result — great news! The result showed a seborrheic keratosis, which is a completely harmless, benign skin growth. Very common. No further treatment is needed. We'll see you for your next skin check.",
    doNotSay: [],
    maNote: "Routine benign result. MA can relay per practice protocol."
  },

  {
    id: "dermatofibroma",
    keywords: ["dermatofibroma", "fibrous histiocytoma", "fibrous dermatofibroma"],
    excludeKeywords: ["dermatofibrosarcoma", "protuberans"],
    urgency: "routine",
    diagnosisLabel: "Dermatofibroma",
    categoryLabel: "Benign",
    plainEnglish: "This biopsy shows a dermatofibroma — a benign fibrous nodule in the skin. It is completely harmless, very common (especially on the legs), and has no potential to become cancerous. No further treatment is needed.",
    keyFindings: [
      "Benign — no malignant potential.",
      "Common on lower extremities, especially in women.",
      "May recur at the same site if incompletely removed, but this has no clinical consequence."
    ],
    nextSteps: [
      "✅ No further treatment needed unless patient requests removal for cosmetic reasons.",
      "📞 MA can relay this result."
    ],
    patientScript: "I'm calling from Dr. [name]'s office with your biopsy results. The biopsy showed a dermatofibroma — a completely harmless, benign lump in the skin. It's very common and nothing to worry about. No further treatment is needed.",
    doNotSay: [],
    maNote: "Completely benign. MA can relay per practice protocol."
  },

  {
    id: "dfsp",
    keywords: ["dermatofibrosarcoma protuberans", "dfsp"],
    excludeKeywords: [],
    urgency: "urgent",
    diagnosisLabel: "Dermatofibrosarcoma Protuberans (DFSP)",
    categoryLabel: "Sarcoma",
    plainEnglish: "This biopsy shows dermatofibrosarcoma protuberans (DFSP) — a rare, low-grade soft tissue sarcoma of the skin. DFSP grows slowly and locally and very rarely spreads to other organs. However, it has a high local recurrence rate if not completely removed with adequate margins. Mohs surgery or wide local excision is the treatment of choice.",
    keyFindings: [
      "CD34 positive on immunohistochemistry (diagnostic marker).",
      "Margins: must be checked carefully — tumor has finger-like projections that can extend far beyond the visible tumor.",
      "Fibrosarcomatous transformation: if present, increases risk of metastasis."
    ],
    nextSteps: [
      "🔴 Physician must speak with patient directly.",
      "📋 Referral to a surgeon experienced with DFSP (often Mohs surgeon or surgical oncologist).",
      "📅 Urgent scheduling — within 2–4 weeks.",
      "🔬 Imatinib (Gleevec): an oral targeted therapy approved for unresectable/metastatic DFSP."
    ],
    patientScript: "I'm calling from Dr. [name]'s office. Dr. [name] has reviewed your biopsy results and would like to speak with you personally about the findings and the next steps. Are you available for a call from the doctor?",
    doNotSay: [
      "Do NOT relay this result without physician direction.",
      "Do NOT use the word 'sarcoma' without the physician present."
    ],
    maNote: "Physician-directed call. DFSP is rare and requires specialized surgical management. Do not relay specifics without physician approval."
  },

  {
    id: "merkel-cell",
    keywords: ["merkel cell carcinoma", "merkel cell", "mcc", "neuroendocrine carcinoma of the skin"],
    excludeKeywords: [],
    urgency: "urgent",
    diagnosisLabel: "Merkel Cell Carcinoma",
    categoryLabel: "Skin Cancer",
    plainEnglish: "This biopsy shows Merkel cell carcinoma (MCC) — a rare but aggressive form of skin cancer that arises from neuroendocrine cells in the skin. MCC has a significant risk of spreading to the lymph nodes and other organs, and requires urgent multidisciplinary care.",
    keyFindings: [
      "CK20 positive on immunohistochemistry is characteristic.",
      "Immunocompromised patients (HIV, organ transplant) have higher incidence.",
      "Associated with Merkel cell polyomavirus (MCPyV).",
      "High risk of lymph node spread — sentinel lymph node biopsy typically required."
    ],
    nextSteps: [
      "🔴 Physician must contact patient immediately.",
      "📋 Urgent referral to surgical oncology, radiation oncology, and/or medical oncology.",
      "📅 Urgent — within 1–2 weeks.",
      "🏥 Multidisciplinary tumor board discussion may be indicated."
    ],
    patientScript: "I'm calling from Dr. [name]'s office. Dr. [name] has reviewed your biopsy results and needs to speak with you personally as soon as possible. Are you available for a call from the doctor today?",
    doNotSay: [
      "Do NOT relay this result without the physician.",
      "Do NOT minimize — MCC is a serious diagnosis."
    ],
    maNote: "URGENT — physician must call the patient immediately. Do not relay any specifics."
  },

  {
    id: "lichen-planus",
    keywords: ["lichen planus", "lichenoid interface dermatitis", "lichenoid tissue reaction"],
    excludeKeywords: [],
    urgency: "routine",
    diagnosisLabel: "Lichen Planus / Lichenoid Dermatitis",
    categoryLabel: "Inflammatory",
    plainEnglish: "This biopsy is consistent with lichen planus or a lichenoid (lichen planus-like) inflammatory reaction in the skin. Lichen planus is a non-contagious inflammatory condition that is autoimmune in nature. It is treatable and manageable.",
    keyFindings: [
      "Classic histology: band-like lymphocytic infiltrate at the dermal-epidermal junction, basal cell degeneration.",
      "May be drug-induced (lichenoid drug reaction) — check medications if clinical context suggests.",
      "Oral involvement: separate consideration from skin LP."
    ],
    nextSteps: [
      "📋 Treatment will be determined by the physician based on extent and location.",
      "📅 Routine follow-up.",
      "📞 MA can relay this result after physician review."
    ],
    patientScript: "I'm calling from Dr. [name]'s office with your biopsy result. The biopsy showed lichen planus — this is an inflammatory condition of the skin. It is not contagious and not cancerous. Dr. [name] will go over treatment options with you at your next visit.",
    doNotSay: [],
    maNote: "Confirm with physician if any specific treatment plan should be communicated. Also check patient's medication list for potential lichenoid drug triggers."
  },

  {
    id: "psoriasis-biopsy",
    keywords: ["psoriasiform", "psoriasis", "psoriasiform dermatitis", "parakeratosis, confluent", "neutrophilic exocytosis"],
    excludeKeywords: [],
    urgency: "routine",
    diagnosisLabel: "Psoriasiform Dermatitis / Psoriasis",
    categoryLabel: "Inflammatory",
    plainEnglish: "This biopsy is consistent with psoriasis or a psoriasiform (psoriasis-like) inflammatory pattern. Psoriasis is a chronic autoimmune skin condition that is very treatable. The biopsy confirms the clinical diagnosis and may help guide treatment decisions.",
    keyFindings: [
      "Classic psoriasis histology: epidermal hyperplasia, parakeratosis, neutrophilic exocytosis, vascular dilation.",
      "Psoriasiform dermatitis can sometimes represent a reaction pattern, not true psoriasis — clinical correlation is key."
    ],
    nextSteps: [
      "📋 Treatment plan will be discussed at follow-up.",
      "📅 Routine.",
      "📞 MA can relay after physician review."
    ],
    patientScript: "I'm calling from Dr. [name]'s office with your biopsy results. The biopsy is consistent with psoriasis — this confirms what Dr. [name] suspected clinically. We'll go over your treatment options at your next appointment.",
    doNotSay: [],
    maNote: "Routine inflammatory result. Confirm physician's plan before calling."
  },

  {
    id: "eczema-biopsy",
    keywords: ["spongiotic dermatitis", "eczematous dermatitis", "eczema", "subacute spongiotic", "acute spongiotic", "chronic spongiotic"],
    excludeKeywords: [],
    urgency: "routine",
    diagnosisLabel: "Spongiotic (Eczematous) Dermatitis",
    categoryLabel: "Inflammatory",
    plainEnglish: "This biopsy shows a spongiotic or eczematous pattern — this is the pathological hallmark of eczema (atopic dermatitis), contact dermatitis, or a related inflammatory condition. The biopsy supports the clinical diagnosis of an eczematous condition.",
    keyFindings: [
      "Spongiosis = fluid between skin cells, seen in eczematous conditions.",
      "Chronicity can be determined (acute, subacute, chronic) — helps guide treatment.",
      "Does not distinguish between types of eczema (e.g., atopic vs. contact) — clinical history is required."
    ],
    nextSteps: [
      "📋 Treatment as directed by physician.",
      "📅 Routine.",
      "📞 MA can relay after physician review."
    ],
    patientScript: "I'm calling from Dr. [name]'s office with your biopsy result. The biopsy showed an inflammatory pattern consistent with eczema or a similar condition — this is in line with what Dr. [name] was seeing clinically. Your treatment plan will continue as discussed.",
    doNotSay: [],
    maNote: "Routine inflammatory result. Confirm physician's plan before calling."
  },

  {
    id: "fungal-biopsy",
    keywords: ["fungal hyphae", "dermatophyte", "tinea", "periodic acid schiff positive", "pas positive hyphae", "candida", "fungal infection"],
    excludeKeywords: [],
    urgency: "routine",
    diagnosisLabel: "Fungal Infection (Tinea / Candida)",
    categoryLabel: "Infections",
    plainEnglish: "This biopsy shows evidence of a fungal infection — either a dermatophyte (tinea/ringworm type) or candida. The biopsy confirms the clinical diagnosis and may guide treatment selection.",
    keyFindings: [
      "PAS stain (Periodic Acid-Schiff) or GMS stain highlights fungal elements.",
      "Type of fungus (dermatophyte vs. candida) may be specified — dermatophytes require different treatment than candida."
    ],
    nextSteps: [
      "📋 Antifungal treatment as prescribed by physician.",
      "📅 Routine.",
      "📞 MA can relay after physician review."
    ],
    patientScript: "I'm calling from Dr. [name]'s office with your biopsy result. The biopsy confirmed a fungal infection — the antifungal medication Dr. [name] prescribed should treat this effectively. Make sure to complete the full course even if the rash clears early.",
    doNotSay: [],
    maNote: "Confirm whether treatment has already been prescribed or needs to be called in."
  },

  {
    id: "epidermoid-cyst",
    keywords: ["epidermoid cyst", "epidermal inclusion cyst", "infundibular cyst", "pilar cyst", "trichilemmal cyst"],
    excludeKeywords: [],
    urgency: "routine",
    diagnosisLabel: "Epidermoid / Epidermal Inclusion Cyst",
    categoryLabel: "Benign",
    plainEnglish: "This biopsy shows an epidermoid cyst (also called an epidermal inclusion cyst or 'sebaceous cyst' — though technically not related to sebaceous glands). These are completely benign and very common. No further treatment is needed unless the cyst recurs.",
    keyFindings: [
      "Benign — no malignant potential.",
      "If ruptured, may show a foreign body reaction (granulomatous inflammation) — benign finding.",
      "Pilar (trichilemmal) cysts: typically on the scalp, also benign."
    ],
    nextSteps: [
      "✅ No further treatment needed.",
      "📞 MA can relay this result."
    ],
    patientScript: "I'm calling from Dr. [name]'s office with your biopsy results — great news! The result showed a benign cyst. It is completely harmless. No further treatment is needed.",
    doNotSay: [],
    maNote: "Completely benign. MA can relay per practice protocol."
  },

  {
    id: "lipoma",
    keywords: ["lipoma", "angiolipoma"],
    excludeKeywords: ["liposarcoma", "atypical lipoma", "atypical lipomatous"],
    urgency: "routine",
    diagnosisLabel: "Lipoma",
    categoryLabel: "Benign",
    plainEnglish: "This biopsy shows a lipoma — a benign tumor made of fat cells. Lipomas are extremely common and have no malignant potential. No further treatment is needed unless the patient desires removal for cosmetic or comfort reasons.",
    keyFindings: [
      "Benign adipose tissue tumor — no malignant potential.",
      "Angiolipoma: contains blood vessels; often more tender than typical lipoma — still benign."
    ],
    nextSteps: [
      "✅ No further treatment needed.",
      "📞 MA can relay this result."
    ],
    patientScript: "I'm calling from Dr. [name]'s office with your biopsy results. The result showed a lipoma — a benign fatty growth. It is completely harmless and no further treatment is needed.",
    doNotSay: [],
    maNote: "Completely benign. MA can relay per practice protocol."
  },

];
