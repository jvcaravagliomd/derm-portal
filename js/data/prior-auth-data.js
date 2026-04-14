// ════════════════════════════════════════════════════════════
//  PRIOR AUTHORIZATION GUIDE DATA
// ════════════════════════════════════════════════════════════

const PRIOR_AUTH_GUIDES = [

  {
    id: "dupilumab-ad",
    drug: "Dupilumab",
    brand: "Dupixent",
    indication: "Atopic Dermatitis",
    summary: "Most common derm biologic PA. Requires documentation of moderate-to-severe disease and failed conventional therapies.",
    codes: [
      { code: "L20.9", description: "Atopic dermatitis, unspecified" },
      { code: "L20.89", description: "Other atopic dermatitis" },
      { code: "L20.0", description: "Besnier's prurigo" },
    ],
    steps: [
      "Confirm diagnosis of moderate-to-severe atopic dermatitis. Document objective severity scores: EASI (score ≥16 = moderate-to-severe) or IGA (score ≥3 = moderate).",
      "Document failed topical therapies: typically 2–3 different topical steroids (mid-to-high potency) used for ≥4–8 weeks each, with inadequate response. Also document trial of topical calcineurin inhibitors (pimecrolimus or tacrolimus) if applicable.",
      "Some commercial insurers (especially Medicaid) require prior failure of a systemic agent such as cyclosporine or methotrexate. Check the specific plan's criteria.",
      "Obtain Dupixent START card or manufacturer enrollment. Complete the prior authorization form through the insurer's portal or fax line. Attach office notes documenting failed therapies.",
      "Include relevant labs if requested: there are no required pre-treatment labs for dupilumab, but some insurers ask for confirmation of non-infectious eczema.",
      "Submit PA. Most decisions are returned within 3–7 business days (72 hours for urgent). Track the fax confirmation.",
      "If denied: request the specific denial reason in writing. Common denials include 'step therapy not met' or 'not medically necessary.' Schedule a peer-to-peer call with the medical director — the physician should initiate this within 72 hours.",
      "If peer-to-peer fails: file a formal written appeal with additional chart documentation. If denied again, file an external independent review request or contact the state insurance commissioner."
    ],
    tips: [
      "Dupixent patient services (1-844-DUPIXENT) can assist with PA support and patient financial assistance.",
      "Mydermatologist portal and CoverMyMeds can streamline the PA submission process.",
      "For Medicaid patients: Dupixent is on formulary for most state Medicaid plans but PA criteria vary widely by state.",
      "Document EASI or IGA at each visit — this is often specifically requested in PA criteria."
    ],
    appeal: "If denied, peer-to-peer is highly effective for dupilumab. Emphasize failed prior therapies, documented severity, and quality of life impact. Dupixent manufacturer support can provide clinical literature to strengthen appeal."
  },

  {
    id: "dupilumab-csU",
    drug: "Dupilumab",
    brand: "Dupixent",
    indication: "Prurigo Nodularis",
    summary: "FDA approved for PN in adults. Requires documented moderate-to-severe disease and inadequate response to prior topicals.",
    codes: [
      { code: "L28.1", description: "Prurigo nodularis" },
    ],
    steps: [
      "Confirm diagnosis of prurigo nodularis (PN) with at least moderate severity. Helpful to include node count and itch NRS score (≥7 = severe).",
      "Document failed topical treatments: high-potency topical steroids under occlusion, topical calcineurin inhibitors, and/or topical clobetasol.",
      "Document any systemic agents tried (e.g., gabapentin, doxepin, naltrexone, thalidomide) if applicable — not always required but strengthens the case.",
      "Submit PA with diagnosis code L28.1, documenting duration, severity, and failed therapies.",
      "FDA approved dupilumab for PN in September 2022. Insurers may still require additional step therapy — verify plan-specific criteria.",
    ],
    tips: [
      "Itch NRS (0–10) documented at each visit strengthens the PA.",
      "Photos of nodules in the chart can be submitted with PA when allowed.",
    ],
    appeal: "Cite FDA approval for PN (2022). Emphasize chronic nature, failed therapies, and impact on sleep and quality of life."
  },

  {
    id: "secukinumab-pso",
    drug: "Secukinumab",
    brand: "Cosentyx",
    indication: "Plaque Psoriasis",
    summary: "IL-17A inhibitor for moderate-to-severe plaque psoriasis. Step therapy often requires trial of methotrexate or phototherapy.",
    codes: [
      { code: "L40.0", description: "Psoriasis vulgaris" },
      { code: "L40.50", description: "Arthropathic psoriasis, unspecified" },
    ],
    steps: [
      "Document moderate-to-severe plaque psoriasis: BSA ≥10% OR involvement of special areas (face, hands, feet, genitals, nails) OR PASI ≥12 OR DLQI ≥10.",
      "Document step therapy failure: most insurers require trial and failure of at least one conventional systemic therapy. Most common: methotrexate (adequate trial = ≥12 weeks at therapeutic dose), cyclosporine, or acitretin. Some insurers accept phototherapy (NBUVB ≥24 sessions).",
      "Ensure TB screening (QuantiFERON or PPD) is documented and updated within 12 months.",
      "Hepatitis B surface antigen and core antibody should be checked prior to initiation.",
      "Submit PA with diagnosis code, PASI or BSA score, documentation of step therapy failure, TB testing, and HBV results.",
      "Call fax line or submit via insurer portal. Cosentyx also has a manufacturer PA support line.",
      "For denial: peer-to-peer call, emphasizing severity score and failed therapy documentation."
    ],
    tips: [
      "PASI score at baseline visit is very helpful — document it.",
      "Cosentyx manufacturer (Novartis) has a patient assistance program called the CARE program.",
      "Psoriatic arthritis involvement strengthens PA and may be a separate approachable indication."
    ],
    appeal: "Stress the validated severity scoring (PASI, DLQI), impact on daily functioning, and prior systemic therapy failure with documentation."
  },

  {
    id: "adalimumab-pso",
    drug: "Adalimumab",
    brand: "Humira (+ biosimilars: Hadlima, Hyrimoz, Cyltezo, etc.)",
    indication: "Plaque Psoriasis",
    summary: "TNF-alpha inhibitor. Multiple biosimilars now available. Same PA criteria as other biologics — step therapy required.",
    codes: [
      { code: "L40.0", description: "Psoriasis vulgaris" },
    ],
    steps: [
      "Same step therapy and severity documentation as other psoriasis biologics: BSA ≥10%, PASI ≥12, or special area involvement.",
      "Confirm up-to-date TB screening and HBV labs.",
      "Check for any history of demyelinating disease, CHF, or active infection — these are contraindications.",
      "Note: many formularies now preferentially place adalimumab biosimilars over brand Humira. Be prepared to prescribe the preferred biosimilar.",
      "Submit PA. If step therapy criterion is listed, ensure documentation of trial with dates, doses, and response.",
    ],
    tips: [
      "With biosimilar availability, Humira PA criteria have become easier to meet for many plans.",
      "AbbVie's myAbbVie Assist program can help bridge costs while PA is pending.",
      "Always check the plan formulary first — preferred biologic may not be adalimumab."
    ],
    appeal: "Focus on clinical rationale if a specific agent (vs. biosimilar) is preferred — e.g., patient already stable on brand Humira."
  },

  {
    id: "risankizumab-pso",
    drug: "Risankizumab",
    brand: "Skyrizi",
    indication: "Plaque Psoriasis",
    summary: "IL-23 inhibitor. Excellent efficacy (PASI 90/100 rates very high). Similar PA requirements.",
    codes: [
      { code: "L40.0", description: "Psoriasis vulgaris" },
    ],
    steps: [
      "Document moderate-to-severe psoriasis with severity scoring.",
      "Document step therapy failure (MTX, phototherapy, or another systemic).",
      "Confirm TB and HBV screening.",
      "Dosing is every 12 weeks after two loading doses — convenient schedule can be highlighted.",
      "Submit PA via insurer portal or Skyrizi manufacturer PA support."
    ],
    tips: [
      "Skyrizi's Complete Support program assists with PA and copay support.",
      "Excellent for patients with a history of inadequate response to other IL-17 or TNF inhibitors."
    ],
    appeal: "Prior biologic failure (different mechanism) is a strong basis for appeal."
  },

  {
    id: "ixekizumab-pso",
    drug: "Ixekizumab",
    brand: "Taltz",
    indication: "Plaque Psoriasis",
    summary: "IL-17A inhibitor similar to secukinumab. Good for scalp and nail psoriasis data.",
    codes: [
      { code: "L40.0", description: "Psoriasis vulgaris" },
      { code: "L40.1", description: "Generalized pustular psoriasis" },
    ],
    steps: [
      "Same standard biologic PA process: severity documentation, step therapy failure, TB and HBV labs.",
      "Ixekizumab has approval for nail psoriasis specifically — document nail unit involvement if applicable (helpful for PA).",
      "Submit PA through insurer portal or via Taltz Together manufacturer support."
    ],
    tips: ["Taltz Together offers co-pay cards and PA assistance.", "Good option if secukinumab failed — both are IL-17A but different molecules."],
    appeal: "Failure of other IL-17 agents does not guarantee cross-class failure; different binding sites."
  },

  {
    id: "spironolactone-acne",
    drug: "Spironolactone",
    brand: "Aldactone (generic widely available)",
    indication: "Hormonal / Cystic Acne (females)",
    summary: "Usually a generic, low-cost medication — PA is rarely required but occasionally needed.",
    codes: [
      { code: "L70.0", description: "Acne vulgaris" },
      { code: "L70.1", description: "Acne conglobata" },
    ],
    steps: [
      "PA for spironolactone is uncommon since it is a generic. If required, document diagnosis and failed therapies (topicals, oral antibiotics).",
      "Indicate this is an off-label hormonal therapy for female acne — some insurers require formulary exception.",
      "Attach office note confirming female patient, hormonal pattern of acne (lower face/jaw distribution), and rationale.",
      "If formulary exception is needed, submit exception request with clinical notes."
    ],
    tips: [
      "Spironolactone is off-label for acne — label is for fluid retention/hypertension. Formulary exception request is more likely than PA.",
      "Labs needed: CMP (potassium) at baseline. Repeat if dose increased.",
      "Note: contraindicated in pregnancy — ensure patient is counseled."
    ],
    appeal: "Emphasize hormonal acne pattern, prior failed therapies, and rationale for hormonal approach."
  },

  {
    id: "isotretinoin-acne",
    drug: "Isotretinoin",
    brand: "Absorica, Claravis, Myorisan (generics available)",
    indication: "Severe/Nodular/Cystic Acne",
    summary: "Highly regulated through the iPLEDGE REMS program. PA almost always required. Strict prescribing rules apply.",
    codes: [
      { code: "L70.0", description: "Acne vulgaris" },
      { code: "L70.1", description: "Acne conglobata" },
      { code: "L70.2", description: "Acne scar" },
    ],
    steps: [
      "Confirm patient is enrolled in the iPLEDGE program (https://ipledgeprogram.com). Both prescriber and patient must be registered.",
      "For WOCBP: two pregnancy tests required before initiating (one in office, one at lab). Both must be negative. Monthly pregnancy tests required thereafter.",
      "WOCBP must use two effective forms of contraception during treatment and for 1 month after.",
      "Submit PA with acne diagnosis and documentation of failed prior therapies: typically 2–3 topical regimens and ≥1 oral antibiotic course.",
      "Isotretinoin prescriptions are limited to 30-day supply. Prescription must be authorized in iPLEDGE portal within a specific window (females: 7 days after pregnancy test).",
      "Monthly labs: CBC, CMP (liver enzymes, lipids). Review before each monthly visit.",
      "If PA is denied: most denials are for step therapy. Ensure antibiotic trial documentation is thorough."
    ],
    tips: [
      "iPLEDGE window is 7 days for WOCBP and 30 days for males/non-WOCBP — pharmacy will reject if outside window.",
      "Instruct patient not to donate blood during or for 30 days after treatment.",
      "Waxing and dermabrasion are contraindicated during and for 6 months after treatment.",
      "Document mental health baseline — rare risk of mood changes; patient should have contact info for any concerns.",
      "Accutane manufacturer's myAbbVie program may help with brand-name cost if generic not tolerated."
    ],
    appeal: "Cite severity (nodular/cystic/scarring acne), failed antibiotic trials with dates and doses, and the established efficacy of isotretinoin as the only curative therapy."
  },

  {
    id: "methotrexate-psoriasis",
    drug: "Methotrexate",
    brand: "Otrexup, Rasuvo (generic oral MTX widely available)",
    indication: "Plaque Psoriasis / Psoriatic Arthritis",
    summary: "Conventional systemic often used as step therapy before biologics. PA sometimes required for branded versions.",
    codes: [
      { code: "L40.0", description: "Psoriasis vulgaris" },
      { code: "L40.50", description: "Arthropathic psoriasis, unspecified" },
    ],
    steps: [
      "PA for generic MTX is rarely needed. Branded auto-injectors (Otrexup, Rasuvo) more commonly require PA.",
      "Document severity of psoriasis, baseline labs: CBC, CMP, hepatitis B/C serology.",
      "Folic acid supplementation should be co-prescribed (1 mg daily) — note this in submission.",
      "If PA required: attach office note, diagnosis, severity scoring, and reason for choosing MTX (e.g., cost, preference, bridge to biologic).",
      "Monitoring labs: CBC and LFTs every 4–8 weeks initially, then every 2–3 months once stable."
    ],
    tips: [
      "Generic oral MTX is extremely inexpensive — PA rarely an issue.",
      "Otrexup/Rasuvo PA typically requires documentation of GI intolerance to oral MTX.",
      "Avoid in patients with hepatic disease, active alcoholism, significant renal impairment, or pregnancy."
    ],
    appeal: "For branded injection: document documented GI intolerance (nausea, vomiting) or malabsorption with oral MTX."
  },

  {
    id: "mohs-surgery",
    drug: "Mohs Micrographic Surgery",
    brand: "N/A — Procedure",
    indication: "Basal Cell Carcinoma / Squamous Cell Carcinoma",
    summary: "PA often required by commercial plans. Criteria generally aligned with AAD/Mohs AUC guidelines.",
    codes: [
      { code: "C44.91", description: "Unspecified malignant neoplasm of skin, unspecified" },
      { code: "C44.011", description: "BCC of skin of lip" },
      { code: "C44.311", description: "BCC of skin of face, NEC" },
      { code: "C44.711", description: "BCC of skin of lower limb" },
      { code: "17311", description: "CPT: Mohs first stage, up to 5 specimens" },
      { code: "17312", description: "CPT: Mohs each additional stage, up to 5 specimens" },
    ],
    steps: [
      "Confirm the biopsy-proven diagnosis and obtain the specific pathology report.",
      "Document site, size, histologic subtype, and any high-risk features (perineural invasion, recurrence, morpheaform/infiltrative type, cosmetically sensitive area).",
      "Reference the Appropriate Use Criteria (AUC) for Mohs Surgery jointly developed by the AAD, ACMS, ASDSA, and ASDS — most insurers use these as their criteria.",
      "High-risk areas per AUC: central face (H-zone), eyelids, nose, ears, lips, genitalia, hands, feet. These typically meet criteria without question.",
      "Submit PA with biopsy report, office note, site/size/histology documentation, and CPT codes.",
      "Most PA decisions are returned within 3–5 business days. Many plans expedite for facial lesions.",
      "If denied: peer-to-peer with the plan's medical director is usually very effective; cite AUC guidelines directly."
    ],
    tips: [
      "Download the Mohs AUC PDF from the AAD website — useful reference to cite in appeals.",
      "Document the lesion's anatomical location precisely (e.g., 'medial canthus, right eye' not just 'face').",
      "For recurrent BCCs anywhere on the body, Mohs is generally medically necessary.",
      "Some plans cover standard excision but not Mohs — review plan policy before submitting."
    ],
    appeal: "Cite the AAD Mohs AUC guidelines. Document high-risk features: location in H-zone, recurrence, aggressive subtype, large size, or immunocompromised patient."
  },

  {
    id: "narrowband-uvb",
    drug: "Narrowband UVB Phototherapy",
    brand: "N/A — Procedure",
    indication: "Psoriasis / Atopic Dermatitis / Vitiligo / CTCL",
    summary: "PA required by most plans. Requires documentation of diagnosis and inadequate response to topical therapy.",
    codes: [
      { code: "L40.0", description: "Psoriasis vulgaris" },
      { code: "L20.9", description: "Atopic dermatitis, unspecified" },
      { code: "L80", description: "Vitiligo" },
      { code: "96900", description: "CPT: Actinotherapy (UV light)" },
    ],
    steps: [
      "Document diagnosis and severity (BSA, PASI, IGA, or affected vitiligo/CTCL body surface area).",
      "Document failed topical therapies: high-potency topical steroids ± calcineurin inhibitors for at least 4–8 weeks.",
      "Submit PA with diagnosis code, severity, failed therapy documentation, and frequency of treatment (typically 2–3x/week).",
      "Most plans approve for 12–24 weeks initially, with re-authorization if ongoing benefit demonstrated.",
      "Document response at each visit — this is needed for re-authorization."
    ],
    tips: [
      "For vitiligo: narrowband UVB is the gold standard. Document affected % BSA and location (face vs. extremities matters for QoL).",
      "Some plans require home phototherapy prior to in-office treatment — check plan policy.",
      "Phototherapy logs should document date, dose (mJ/cm²), body part treated, and any reactions."
    ],
    appeal: "For denied re-auths: submit treatment logs showing clinical response (percentage clearance, PASI improvement)."
  },

  // ─── NEW PRIOR AUTH GUIDES (8 additional) ────────────────────

  {
    id: "upadacitinib-ad",
    drug: "Upadacitinib",
    brand: "Rinvoq",
    indication: "Moderate-to-Severe Atopic Dermatitis",
    summary: "JAK1 inhibitor oral medication for moderate-to-severe AD. Step therapy through 2+ topical agents and dupilumab typically required. Baseline and periodic lab monitoring needed.",
    codes: [
      { code: "L20.9", description: "Atopic dermatitis, unspecified" },
      { code: "L20.91", description: "Unspecified atopic dermatitis with exacerbation" }
    ],
    steps: [
      "Document baseline severity: BSA affected, EASI or IGA score, and impact on quality of life.",
      "Clearly document failed therapies: at least 2 different topical agents (steroids and/or calcineurin inhibitors) at adequate strength/duration (minimum 4 weeks each).",
      "Document prior dupilumab use and reason for discontinuation, if applicable. This is often a required step.",
      "Obtain baseline labs: CBC (complete blood count), comprehensive metabolic panel (CMP), lipid panel.",
      "Screen for tuberculosis (TB) with chest X-ray and TB testing (QuantiFERON or similar); document result.",
      "Submit PA with diagnosis code, BSA/EASI/IGA, step therapy documentation, baseline labs, and TB screening results.",
      "Insurance typically approves for 12 weeks initially with requirement for ongoing clinical response documentation."
    ],
    tips: [
      "JAK inhibitors carry black box warnings for serious infections, malignancy, and thrombosis; emphasize baseline TB screening.",
      "Lab monitoring (CBC, lipids, liver function) is required at baseline, 4 weeks, then periodically.",
      "Patient education: report signs of infection (fever, cough, fatigue) immediately.",
      "Not recommended in patients with active infections or TB.",
      "Weight loss and GI upset are known side effects; monitor at follow-up visits."
    ],
    appeal: "For denial: provide clinical rationale (phototherapy failed, cost, patient preference over biologic), or note that dupilumab contraindicated due to documented intolerance."
  },

  {
    id: "abrocitinib-ad",
    drug: "Abrocitinib",
    brand: "Cibinqo",
    indication: "Moderate-to-Severe Atopic Dermatitis",
    summary: "JAK1 inhibitor oral medication for moderate-to-severe AD. Similar step therapy requirements as other JAK inhibitors. Lab monitoring required.",
    codes: [
      { code: "L20.9", description: "Atopic dermatitis, unspecified" },
      { code: "L20.91", description: "Unspecified atopic dermatitis with exacerbation" }
    ],
    steps: [
      "Document baseline severity (BSA, EASI/IGA), failed topical therapies (minimum 2 agents, 4+ weeks each at therapeutic dose).",
      "Document failed phototherapy or dupilumab if previously tried; explain reason for current medication choice.",
      "Obtain baseline labs: CBC, CMP, lipid panel, liver function tests.",
      "Perform TB screening: chest X-ray and QuantiFERON Gold or tuberculin skin test; document negative result.",
      "Confirm patient counseling on serious infection risks and monitoring requirements.",
      "Submit PA with all above documentation plus diagnosis code and EASI/IGA score.",
      "Plan for lab recheck at 4 weeks, then periodically per insurance requirements."
    ],
    tips: [
      "Black box warnings apply: serious infections, cancers, blood clots; baseline TB screening mandatory.",
      "Liver enzyme elevations possible — monitor LFTs closely.",
      "Hyperlipidemia can occur — baseline lipid panel and follow-up important.",
      "More expensive option — step therapy documentation should be thorough to support medical necessity.",
      "GI side effects (nausea, diarrhea) reported; counsel patient on timing and tolerability."
    ],
    appeal: "Document that phototherapy unavailable or failed, cost/access issues, or that patient intolerant of biologic therapy."
  },

  {
    id: "tralokinumab-ad",
    drug: "Tralokinumab",
    brand: "Adbry",
    indication: "Moderate-to-Severe Atopic Dermatitis",
    summary: "IL-13 antagonist monoclonal antibody for moderate-to-severe AD. Step therapy typically required. Monthly subcutaneous self-injection after loading dose.",
    codes: [
      { code: "L20.9", description: "Atopic dermatitis, unspecified" },
      { code: "L20.91", description: "Unspecified atopic dermatitis with exacerbation" }
    ],
    steps: [
      "Document baseline severity: affected BSA, EASI score, impact on QoL and sleep.",
      "Document failed topical therapies: at least 2 different agents (steroids, calcineurin inhibitors, or PDE4 inhibitors) for 4+ weeks each at adequate dose.",
      "Phototherapy failure or patient preference over phototherapy documented.",
      "Baseline labs not mandatory for IL-13 antagonist (unlike JAK inhibitors), but CBC baseline recommended.",
      "No TB screening required (unlike JAK inhibitors).",
      "Submit PA with diagnosis, severity documentation, and failed therapy list.",
      "Insurance typically approves for 12+ weeks; patient teaching on self-injection critical."
    ],
    tips: [
      "IL-13 antagonist — does NOT require TB screening (safer than JAK inhibitors in that regard).",
      "Loading dose: 600 mg at week 0, then 300 mg every 4 weeks thereafter.",
      "Injection site reactions (redness, swelling) are common but usually mild.",
      "No significant lab monitoring required vs. JAK inhibitors.",
      "Emphasize patient education: proper injection technique, storage, when to seek help."
    ],
    appeal: "Note IL-13 antagonist as alternative to JAK inhibitors for patients with comorbidities precluding JAK use; stress efficacy data."
  },

  {
    id: "lebrikizumab-ad",
    drug: "Lebrikizumab",
    brand: "Ebglyss",
    indication: "Moderate-to-Severe Atopic Dermatitis",
    summary: "IL-13 antagonist for moderate-to-severe AD. Step therapy usually required. Dosing: loading dose then every 2 weeks for 4 weeks, then monthly.",
    codes: [
      { code: "L20.9", description: "Atopic dermatitis, unspecified" },
      { code: "L20.91", description: "Unspecified atopic dermatitis with exacerbation" }
    ],
    steps: [
      "Document baseline severity: BSA percentage, EASI score, pruritus severity.",
      "Document failed topical steroid/calcineurin inhibitor therapy: minimum 2 agents, 4+ weeks at therapeutic dose each.",
      "Phototherapy failed or unavailable documented (or patient preference stated).",
      "Baseline labs: CBC is optional but recommended; no TB screening required.",
      "Submit PA with diagnosis code L20.9/L20.91, severity scores, and step therapy documentation.",
      "Approval typically for 12+ weeks of therapy; re-auth with EASI/IGA improvement documented."
    ],
    tips: [
      "IL-13 antagonist monoclonal antibody — safe profile without TB screening needs.",
      "Loading phase: weeks 0, 2, 4 (300 mg IV or SQ), then 300 mg every 4 weeks.",
      "Hypersensitivity and injection site reactions possible but uncommon.",
      "Effective for both Th2 and non-Th2 AD phenotypes.",
      "Patient education: loading schedule different from maintenance; set expectations."
    ],
    appeal: "Highlight IL-13 targeting as distinct mechanism; note adequate step therapy and symptom burden justifying biologic."
  },

  {
    id: "apremilast-pso",
    drug: "Apremilast",
    brand: "Otezla",
    indication: "Moderate-to-Severe Plaque Psoriasis / Psoriatic Arthritis",
    summary: "PDE4 inhibitor oral medication for moderate-to-severe psoriasis and psoriatic arthritis. No lab monitoring required. Weight loss is common side effect.",
    codes: [
      { code: "L40.0", description: "Psoriasis vulgaris" },
      { code: "L40.9", description: "Unspecified psoriasis" },
      { code: "M07.3", description: "Psoriatic arthritis, unspecified" }
    ],
    steps: [
      "Document baseline severity: BSA affected, PASI score (if available), impact on function.",
      "Document failed therapies: topical steroids, phototherapy, or previous systemic agent (methotrexate, other DMARD) if applicable.",
      "Note: apremilast can be first biologic/systemic — step therapy not always required by all insurers.",
      "Baseline labs NOT required (this is an advantage over many other systemics).",
      "Submit PA with diagnosis code, severity (BSA/PASI), and failed topical/light therapy documentation.",
      "Insurance usually approves for 12+ weeks; document response at follow-up for re-auth."
    ],
    tips: [
      "PDE4 inhibitor — oral, no injections or infusions needed.",
      "No baseline lab monitoring required — can start quickly.",
      "GI side effects (diarrhea, nausea) common in first 1–2 weeks; titrate dose up slowly (15 mg → 30 mg per day).",
      "Weight loss is a known side effect; counsel patient and monitor.",
      "Document in chart: patient counseled on GI effects and weight loss; address nutritional status if needed.",
      "Drug interactions minimal; safe with most other medications."
    ],
    appeal: "Emphasize lack of lab monitoring requirement and oral convenience; note cost-effectiveness for mild-moderate disease not responding to topicals."
  },

  {
    id: "guselkumab-pso",
    drug: "Guselkumab",
    brand: "Tremfya",
    indication: "Moderate-to-Severe Plaque Psoriasis / Psoriatic Arthritis",
    summary: "IL-23 antagonist monoclonal antibody for moderate-to-severe psoriasis. Step therapy through 2 topicals/phototherapy typical. Dosing Q8 weeks after loading.",
    codes: [
      { code: "L40.0", description: "Psoriasis vulgaris" },
      { code: "L40.9", description: "Unspecified psoriasis" },
      { code: "M07.3", description: "Psoriatic arthritis, unspecified" }
    ],
    steps: [
      "Document baseline severity: BSA, PASI score (if available), effect on QoL.",
      "Document failed topical therapy: high-potency steroids for 4+ weeks, documented response/failure.",
      "Document failed phototherapy OR patient ineligible/declined (time commitment, access).",
      "No baseline labs required; no TB screening (unlike JAK inhibitors).",
      "Submit PA with diagnosis, BSA/PASI, phototherapy documentation, and failed topical list.",
      "Approval typically for 12+ weeks; document PASI improvement at 8-16 weeks for re-auth.",
      "Maintenance dosing: 100 mg at weeks 0 and 4, then every 8 weeks."
    ],
    tips: [
      "IL-23 antagonist — highly selective mechanism; excellent efficacy for psoriasis.",
      "No TB screening or significant lab monitoring needed.",
      "Injection site reactions mild and transient.",
      "Q8 weeks dosing convenient; patient can receive injections in office or via home delivery.",
      "Effective for both skin and joint manifestations of psoriatic arthritis."
    ],
    appeal: "Note selectivity of IL-23 targeting, non-inferior efficacy vs. TNF inhibitors, and favorable safety profile."
  },

  {
    id: "deucravacitinib-pso",
    drug: "Deucravacitinib",
    brand: "Sotyktu",
    indication: "Moderate-to-Severe Plaque Psoriasis",
    summary: "First-in-class TYK2 inhibitor oral medication for moderate-to-severe psoriasis. Oral once-daily dosing. Step therapy typical. Limited lab monitoring.",
    codes: [
      { code: "L40.0", description: "Psoriasis vulgaris" },
      { code: "L40.9", description: "Unspecified psoriasis" }
    ],
    steps: [
      "Document baseline severity: BSA, PASI, effect on function and QoL.",
      "Document failed topical therapy: high-potency steroids, at least 4 weeks, documented trial.",
      "Document failed or declined phototherapy (document reason if declined).",
      "Baseline labs: CBC, CMP, lipid panel (more limited monitoring than JAK inhibitors).",
      "TB screening: consider baseline chest X-ray; not strictly required but recommended.",
      "Submit PA with diagnosis code L40.0/L40.9, BSA/PASI, step therapy, and baseline labs.",
      "Insurance typically approves for 12+ weeks; document clinical response for re-auth."
    ],
    tips: [
      "First TYK2 inhibitor approved for psoriasis — unique mechanism, strong efficacy data.",
      "Oral dosing once daily (6 mg) — convenient for compliance.",
      "Lab monitoring less intensive than JAK inhibitors (no TB screening mandatory).",
      "GI side effects possible; counsel on timing with food.",
      "Lipid elevations possible — baseline lipid panel and monitoring important.",
      "Weight loss/GI effects documented; nutritional counseling recommended."
    ],
    appeal: "Emphasize novel TYK2 mechanism, oral convenience, strong efficacy data, and lighter monitoring burden vs. JAK inhibitors."
  },

  {
    id: "spesolimab-gpp",
    drug: "Spesolimab",
    brand: "Spevigo",
    indication: "Generalized Pustular Psoriasis (GPP) Flares",
    summary: "IL-36R antagonist for acute GPP flares and maintenance. IV infusion for acute flare, then subcutaneous monthly maintenance. Highly specialized indication.",
    codes: [
      { code: "L40.1", description: "Generalized pustular psoriasis" },
      { code: "L40.82", description: "Flexural psoriasis" }
    ],
    steps: [
      "Confirm diagnosis: GPP is rare; require dermatology specialist documentation of generalized pustular rash, systemic symptoms (fever, malaise).",
      "Document acute flare vs. maintenance — acute flares require IV infusion (1500 mg); maintenance is SQ monthly (400 mg).",
      "Baseline labs: CBC, CMP, liver function tests.",
      "Specialist (dermatology or rheumatology) documentation of diagnosis and medical necessity is critical.",
      "Prior authorization from specialist — insurance usually requires direct specialist contact/documentation.",
      "Document failed prior therapies: standard biologics, systemic retinoids, acitretin if tried.",
      "Approval typically for acute flare (1 infusion) with option for monthly maintenance post-flare."
    ],
    tips: [
      "Very rare indication — GPP is uncommon; IL-36R antagonism is first-in-class specifically for GPP.",
      "Acute flare protocol: 1500 mg IV infusion (can repeat after 1 week if inadequate response).",
      "Maintenance: 400 mg SQ monthly for 12 months if flare controlled.",
      "Prior specialist documentation absolutely essential for insurance approval.",
      "Laboratory and clinical monitoring important — CBC/CMP at baseline and periodically.",
      "Patient education: recognize early flare signs (pustules, fever); early intervention can prevent hospitalization."
    ],
    appeal: "Provide specialist documentation of GPP diagnosis, severity, and failed prior therapies; emphasize rare indication and specialist recommendation."
  },

];

