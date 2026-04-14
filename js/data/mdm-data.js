// ════════════════════════════════════════════════════════════
//  MDM PROBLEM COMPLEXITY — DERMATOLOGY REFERENCE
//  Based on 2021 AMA E/M Guidelines
//
//  MDM has 3 elements — this tool addresses Element 1:
//  "Number and Complexity of Problems Addressed"
//
//  PROBLEM COMPLEXITY LEVELS (AMA 2021):
//  ─────────────────────────────────────────────────────────
//  MINIMAL   → Self-limited or minor problem
//              → Contributes to: Straightforward MDM
//              → Visit level: 99202 / 99212
//
//  LOW       → Stable, chronic illness  OR
//              → Acute, uncomplicated illness or injury
//              → Contributes to: Low MDM
//              → Visit level: 99203 / 99213
//
//  MODERATE  → Chronic illness with exacerbation, progression, or side effects of tx  OR
//              → Undiagnosed new problem with uncertain prognosis  OR
//              → Acute illness with systemic symptoms  OR
//              → Acute, complicated injury
//              → Contributes to: Moderate MDM
//              → Visit level: 99204 / 99214
//
//  HIGH      → Chronic illness with severe exacerbation or progression  OR
//              → Acute or chronic illness posing threat to life or bodily function
//              → Contributes to: High MDM
//              → Visit level: 99205 / 99215
//
//  IMPORTANT: Full MDM level requires 2 of 3 elements (Problems, Data, Risk)
//  to meet the threshold. This tool addresses Problems only.
// ════════════════════════════════════════════════════════════

const MDM_DATA = [

  // ─── ACNE ───────────────────────────────────────────────────
  {
    id: 'acne-mild-new',
    condition: 'Acne Vulgaris — Mild (New Patient / New Presentation)',
    icd10: 'L70.0',
    category: 'Acne',
    complexityLevel: 'low',
    amaCategory: 'Acute, uncomplicated illness or injury',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'New presentation of mild comedonal or papulopustular acne without scarring or systemic symptoms. Diagnosis is clear; treatment is straightforward.',
    clinicalContext: 'If initiating isotretinoin, complexity increases to Moderate due to treatment risk and monitoring requirements.'
  },
  {
    id: 'acne-moderate-stable',
    condition: 'Acne Vulgaris — Moderate, Stable (Established, Responding to Treatment)',
    icd10: 'L70.0',
    category: 'Acne',
    complexityLevel: 'low',
    amaCategory: 'Stable, chronic illness',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Patient is established, currently on treatment, responding well, no new concerns. Routine follow-up.',
    clinicalContext: 'If the patient is not responding or progressing, upgrade to Moderate (chronic illness with exacerbation/progression).'
  },
  {
    id: 'acne-severe-scarring',
    condition: 'Acne Vulgaris — Severe / Nodular / Scarring, Not at Goal',
    icd10: 'L70.0',
    category: 'Acne',
    complexityLevel: 'moderate',
    amaCategory: 'Chronic illness with exacerbation, progression, or side effects of treatment',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Severe acne not responding to current treatment, active scarring, or initiating isotretinoin (high-risk medication with extensive monitoring).',
    clinicalContext: 'Isotretinoin initiation with iPLEDGE enrollment, risk counseling, and lab ordering supports Moderate MDM independently through data and risk elements.'
  },
  {
    id: 'acne-isotretinoin-fu',
    condition: 'Acne Vulgaris — On Isotretinoin (Routine Monthly Follow-up)',
    icd10: 'L70.0',
    category: 'Acne',
    complexityLevel: 'moderate',
    amaCategory: 'Chronic illness with side effects of treatment',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Monthly isotretinoin follow-up requires lab review (CBC, LFTs, lipids, pregnancy test), side effect assessment, iPLEDGE compliance, and dose adjustment.',
    clinicalContext: 'Review and order of labs + high-risk drug management independently supports Moderate via Data and Risk elements.'
  },

  // ─── ATOPIC DERMATITIS / ECZEMA ──────────────────────────────
  {
    id: 'atopic-dermatitis-mild-stable',
    condition: 'Atopic Dermatitis — Mild, Stable (At Treatment Goal)',
    icd10: 'L20.9',
    category: 'Atopic Dermatitis',
    complexityLevel: 'low',
    amaCategory: 'Stable, chronic illness',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Patient is at treatment goal — well-controlled with topical therapy or current regimen. Routine maintenance visit.',
    clinicalContext: 'Must document "at treatment goal" or "well controlled" to support stable chronic illness designation.'
  },
  {
    id: 'atopic-dermatitis-moderate-flare',
    condition: 'Atopic Dermatitis — Moderate/Severe, Flaring or Not at Treatment Goal',
    icd10: 'L20.9',
    category: 'Atopic Dermatitis',
    complexityLevel: 'moderate',
    amaCategory: 'Chronic illness with exacerbation, progression, or side effects of treatment',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Active flare, escalating therapy, step-up to dupilumab or JAK inhibitor, or inadequate control despite current treatment.',
    clinicalContext: 'Document extent of flare (BSA, IGA score), impact on quality of life, failed therapies, and treatment changes made.'
  },
  {
    id: 'atopic-dermatitis-biologic-fu',
    condition: 'Atopic Dermatitis — On Dupilumab / Biologic (Routine Follow-up)',
    icd10: 'L20.9',
    category: 'Atopic Dermatitis',
    complexityLevel: 'moderate',
    amaCategory: 'Chronic illness with side effects of treatment',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Follow-up for patient on dupilumab or JAK inhibitor. Assess response, side effects (conjunctivitis for dupilumab, labs for JAK inhibitors), and treatment adjustments.',
    clinicalContext: 'JAK inhibitor monitoring (CBC, lipids, creatinine) + risk management of high-risk medication supports Moderate through Data + Risk elements.'
  },

  // ─── PSORIASIS ───────────────────────────────────────────────
  {
    id: 'psoriasis-mild-stable',
    condition: 'Psoriasis — Mild, Stable (Topical Therapy, At Treatment Goal)',
    icd10: 'L40.0',
    category: 'Psoriasis',
    complexityLevel: 'low',
    amaCategory: 'Stable, chronic illness',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Patient on topical therapy, well-controlled, low BSA involvement, no joint symptoms. Routine follow-up.',
    clinicalContext: 'If patient has concurrent psoriatic arthritis (even if stable), the two stable chronic illnesses together can support Moderate MDM.'
  },
  {
    id: 'psoriasis-moderate-flare',
    condition: 'Psoriasis — Moderate/Severe, Flaring or Progressing',
    icd10: 'L40.0',
    category: 'Psoriasis',
    complexityLevel: 'moderate',
    amaCategory: 'Chronic illness with exacerbation, progression, or side effects of treatment',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Active worsening, inadequate response to current therapy, high BSA, initiating systemic therapy (biologics, MTX, cyclosporine).',
    clinicalContext: 'Biologic initiation or step-up therapy with risk counseling + ordering supports Moderate through all three MDM elements.'
  },
  {
    id: 'psoriasis-biologic-stable',
    condition: 'Psoriasis — On Biologic / Systemic, Stable (At Treatment Goal)',
    icd10: 'L40.0',
    category: 'Psoriasis',
    complexityLevel: 'moderate',
    amaCategory: 'Stable, chronic illness; chronic illness with side effects of treatment',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Even when stable, ongoing biologic therapy with lab monitoring, infection screening, and malignancy surveillance supports Moderate MDM.',
    clinicalContext: 'Document lab review, TB screening status, infection history, and any medication-related concerns at each visit.'
  },
  {
    id: 'psoriasis-psa',
    condition: 'Psoriasis + Psoriatic Arthritis (Both Stable)',
    icd10: 'L40.0 + M07.3',
    category: 'Psoriasis',
    complexityLevel: 'moderate',
    amaCategory: '2 or more stable, chronic illnesses',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Two separate stable chronic conditions (psoriasis + PsA) addressed in the same visit = Moderate MDM by problems alone.',
    clinicalContext: 'Must document both conditions are addressed, even if briefly. PsA joint assessment should be noted.'
  },

  // ─── ROSACEA ─────────────────────────────────────────────────
  {
    id: 'rosacea-stable',
    condition: 'Rosacea — Stable, Controlled (At Treatment Goal)',
    icd10: 'L71.9',
    category: 'Rosacea',
    complexityLevel: 'low',
    amaCategory: 'Stable, chronic illness',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Patient on topical or oral therapy, well controlled, no significant flaring or new symptoms.',
    clinicalContext: 'If adding oral doxycycline or ordering labs, data element may support Moderate independently.'
  },
  {
    id: 'rosacea-progressing',
    condition: 'Rosacea — Progressing or Not at Treatment Goal',
    icd10: 'L71.9',
    category: 'Rosacea',
    complexityLevel: 'moderate',
    amaCategory: 'Chronic illness with exacerbation or progression',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Worsening despite current therapy, stepping up treatment, rhinophyma development, new ocular involvement.',
    clinicalContext: 'Ocular rosacea with referral to ophthalmology adds coordination of care, supporting Moderate.'
  },

  // ─── CONTACT DERMATITIS ──────────────────────────────────────
  {
    id: 'allergic-contact-dermatitis',
    condition: 'Allergic Contact Dermatitis — Acute, Uncomplicated (Known or Suspected Allergen)',
    icd10: 'L23.9',
    category: 'Contact Dermatitis',
    complexityLevel: 'low',
    amaCategory: 'Acute, uncomplicated illness or injury',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Classic presentation with suspected or confirmed allergen, localized involvement, no systemic symptoms.',
    clinicalContext: 'Widespread ACD requiring systemic steroids, or with systemic symptoms, upgrades to Moderate.'
  },
  {
    id: 'allergic-contact-dermatitis-systemic',
    condition: 'Allergic Contact Dermatitis — Severe / Systemic Involvement',
    icd10: 'L23.9',
    category: 'Contact Dermatitis',
    complexityLevel: 'moderate',
    amaCategory: 'Acute illness with systemic symptoms',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Widespread involvement, significant edema (especially face/airway), or systemic symptoms requiring systemic corticosteroids.',
    clinicalContext: 'If airway involvement is present, this escalates to High (threat to bodily function). Document extent and systemic features carefully.'
  },
  {
    id: 'irritant-contact-dermatitis',
    condition: 'Irritant Contact Dermatitis — Acute or Chronic',
    icd10: 'L24.9',
    category: 'Contact Dermatitis',
    complexityLevel: 'low',
    amaCategory: 'Acute, uncomplicated illness OR stable, chronic illness',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Localized, clear precipitant. Barrier restoration, avoidance, and topical treatment.',
    clinicalContext: 'If patch testing is ordered and performed, data element may independently support Moderate MDM.'
  },

  // ─── URTICARIA ───────────────────────────────────────────────
  {
    id: 'urticaria-acute',
    condition: 'Urticaria — Acute (< 6 Weeks)',
    icd10: 'L50.9',
    category: 'Urticaria',
    complexityLevel: 'low',
    amaCategory: 'Acute, uncomplicated illness or injury',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Classic acute urticaria without angioedema, anaphylaxis history, or systemic symptoms. Self-limiting in most cases.',
    clinicalContext: 'If anaphylaxis occurred or airway threatened, this is High MDM. If prescribing epinephrine auto-injector, risk element supports Moderate.'
  },
  {
    id: 'urticaria-chronic-uncontrolled',
    condition: 'Chronic Urticaria — Uncontrolled or Progressing (> 6 Weeks)',
    icd10: 'L50.1',
    category: 'Urticaria',
    complexityLevel: 'moderate',
    amaCategory: 'Chronic illness with exacerbation, progression, or side effects of treatment',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Chronic urticaria inadequately controlled despite standard antihistamine therapy, initiating omalizumab or step-up therapy.',
    clinicalContext: 'Ordering workup (thyroid antibodies, ANA, CBC) adds Data element support for Moderate.'
  },
  {
    id: 'urticaria-chronic-stable',
    condition: 'Chronic Urticaria — Stable, Controlled (At Treatment Goal)',
    icd10: 'L50.1',
    category: 'Urticaria',
    complexityLevel: 'low',
    amaCategory: 'Stable, chronic illness',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Well-controlled on antihistamines or omalizumab. Routine follow-up visit.',
    clinicalContext: 'On omalizumab: managing prescription refill + injection monitoring may add Risk element support for Moderate.'
  },

  // ─── SKIN CANCER ─────────────────────────────────────────────
  {
    id: 'bcc-new-diagnosis',
    condition: 'Basal Cell Carcinoma — New Diagnosis',
    icd10: 'C44.91',
    category: 'Skin Cancer',
    complexityLevel: 'moderate',
    amaCategory: 'Undiagnosed new problem with uncertain prognosis',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Biopsy result review, staging discussion, treatment planning (Mohs vs. excision vs. ED&C), prognosis discussion.',
    clinicalContext: 'Reviewing and ordering pathology results (independent interpretation) independently supports Moderate via Data element.'
  },
  {
    id: 'bcc-follow-up-treated',
    condition: 'Basal Cell Carcinoma — Stable, Post-Treatment Surveillance',
    icd10: 'Z85.828',
    category: 'Skin Cancer',
    complexityLevel: 'low',
    amaCategory: 'Stable, chronic illness',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Routine skin surveillance after successfully treated BCC. No active disease. Document surveillance interval and findings.',
    clinicalContext: 'If a new suspicious lesion is biopsied at the same visit, complexity may increase based on new findings.'
  },
  {
    id: 'scc-new-diagnosis',
    condition: 'Squamous Cell Carcinoma — New Diagnosis',
    icd10: 'C44.92',
    category: 'Skin Cancer',
    complexityLevel: 'moderate',
    amaCategory: 'Undiagnosed new problem with uncertain prognosis',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Biopsy review, risk stratification (high vs. low risk), staging, treatment planning, lymph node assessment discussion.',
    clinicalContext: 'High-risk SCC features (PNI, depth, location, immunosuppression) may support High MDM if threat to bodily function is documented.'
  },
  {
    id: 'scc-high-risk',
    condition: 'Squamous Cell Carcinoma — High-Risk Features or Locally Advanced',
    icd10: 'C44.92',
    category: 'Skin Cancer',
    complexityLevel: 'high',
    amaCategory: 'Acute or chronic illness posing threat to life or bodily function',
    visitContribution: 'High MDM',
    suggestedVisitLevel: '99205 / 99215',
    notes: 'High-risk SCC with perineural invasion, deep invasion, immunosuppressed patient, large size, recurrence, lymph node involvement, or requiring multidisciplinary coordination.',
    clinicalContext: 'Document specific high-risk features explicitly. Referral for sentinel lymph node biopsy, imaging, or oncology coordination supports High MDM.'
  },
  {
    id: 'melanoma-new-diagnosis',
    condition: 'Melanoma — New Diagnosis / Biopsy Results Visit',
    icd10: 'C43.9',
    category: 'Skin Cancer',
    complexityLevel: 'high',
    amaCategory: 'Acute or chronic illness posing threat to life or bodily function',
    visitContribution: 'High MDM',
    suggestedVisitLevel: '99205 / 99215',
    notes: 'Melanoma diagnosis requires staging workup, surgical planning (WLE ± SLNB), oncology referral, and significant risk counseling. Clearly poses threat to life.',
    clinicalContext: 'Independent interpretation of pathology, ordering of staging studies, and coordination of surgical and oncologic care strongly support High MDM via all three elements.'
  },
  {
    id: 'melanoma-surveillance',
    condition: 'Melanoma — Stable, Post-Treatment Surveillance (Low Stage, NED)',
    icd10: 'Z85.820',
    category: 'Skin Cancer',
    complexityLevel: 'moderate',
    amaCategory: 'Stable, chronic illness',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Routine melanoma surveillance in remission. Full skin exam, lymph node palpation, review of any imaging/labs ordered.',
    clinicalContext: 'Review of outside imaging or lab results independently supports Moderate via Data element. Stage IV surveillance with active treatment management = High.'
  },
  {
    id: 'mcc-new',
    condition: 'Merkel Cell Carcinoma — New Diagnosis',
    icd10: 'C44.9',
    category: 'Skin Cancer',
    complexityLevel: 'high',
    amaCategory: 'Acute or chronic illness posing threat to life or bodily function',
    visitContribution: 'High MDM',
    suggestedVisitLevel: '99205 / 99215',
    notes: 'Rare, aggressive neuroendocrine carcinoma. Requires urgent staging, multidisciplinary team, oncology and radiation referrals. High mortality risk.',
    clinicalContext: 'Document urgency, referral coordination, staging workup ordered, and risk discussion to support High MDM fully.'
  },

  // ─── ACTINIC KERATOSES ───────────────────────────────────────
  {
    id: 'ak-few-cryotherapy',
    condition: 'Actinic Keratoses — Few Lesions, Cryotherapy Only',
    icd10: 'L57.0',
    category: 'Actinic Keratoses',
    complexityLevel: 'minimal',
    amaCategory: 'Self-limited or minor problem',
    visitContribution: 'Straightforward MDM (if isolated)',
    suggestedVisitLevel: '99202 / 99212',
    notes: 'Spot treatment of a few AKs with liquid nitrogen only. Clear diagnosis, low-risk treatment.',
    clinicalContext: 'If a full skin exam reveals new findings, additional problems addressed increase complexity. Field therapy visit adds complexity via treatment risk.'
  },
  {
    id: 'ak-field-therapy',
    condition: 'Actinic Keratoses — Field Therapy (5-FU, Imiquimod, Kefanova, PDT)',
    icd10: 'L57.0',
    category: 'Actinic Keratoses',
    complexityLevel: 'low',
    amaCategory: 'Acute, uncomplicated illness or injury',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Initiating or managing field therapy. Clear diagnosis, defined treatment plan, expectation counseling.',
    clinicalContext: 'If the patient is immunosuppressed (transplant patient) with AKs, the increased malignancy risk may justify Moderate. PDT may support Moderate via procedure risk element.'
  },

  // ─── ALOPECIA ────────────────────────────────────────────────
  {
    id: 'androgenetic-alopecia-stable',
    condition: 'Androgenetic Alopecia — Stable (At Treatment Goal)',
    icd10: 'L64.9',
    category: 'Alopecia',
    complexityLevel: 'low',
    amaCategory: 'Stable, chronic illness',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Patient on finasteride/minoxidil, stable, maintaining or improving. Routine follow-up.',
    clinicalContext: 'If finasteride is prescribed, documenting discussion of side effects (sexual dysfunction, post-finasteride syndrome) supports Risk element for Moderate.'
  },
  {
    id: 'alopecia-areata-new-limited',
    condition: 'Alopecia Areata — New Onset, Limited (< 50% Scalp)',
    icd10: 'L63.9',
    category: 'Alopecia',
    complexityLevel: 'low',
    amaCategory: 'Acute, uncomplicated illness or injury',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'New or limited alopecia areata without totalis/universalis. Initial management with intralesional triamcinolone or topicals.',
    clinicalContext: 'Labs ordered for thyroid, ANA etc. add Data element. Multiple IL-TAC injections at same visit add procedural considerations.'
  },
  {
    id: 'alopecia-areata-extensive',
    condition: 'Alopecia Areata — Extensive, Progressing, or Totalis/Universalis',
    icd10: 'L63.0',
    category: 'Alopecia',
    complexityLevel: 'moderate',
    amaCategory: 'Chronic illness with exacerbation or progression',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Rapidly expanding AA, totalis, universalis, or inadequate response — initiating JAK inhibitor (baricitinib/ritlecitinib) or systemic therapy.',
    clinicalContext: 'JAK inhibitor initiation (labs, TB screening, risk counseling, prescribing) fully supports Moderate through all three MDM elements.'
  },

  // ─── INFLAMMATORY (OTHERS) ───────────────────────────────────
  {
    id: 'seborrheic-dermatitis-stable',
    condition: 'Seborrheic Dermatitis — Stable, Controlled',
    icd10: 'L21.9',
    category: 'Inflammatory',
    complexityLevel: 'low',
    amaCategory: 'Stable, chronic illness',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Well-controlled with topical antifungals, medicated shampoos, low-potency topical steroids. Routine follow-up.',
    clinicalContext: 'If flaring or requiring systemic antifungal, upgrade to Low (acute uncomplicated) or Moderate if extensive.'
  },
  {
    id: 'hidradenitis-suppurativa-mild',
    condition: 'Hidradenitis Suppurativa — Mild (Hurley Stage I)',
    icd10: 'L73.2',
    category: 'Inflammatory',
    complexityLevel: 'low',
    amaCategory: 'Stable, chronic illness',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Isolated nodules without sinus tracts, controlled with topical therapy or low-dose antibiotics.',
    clinicalContext: 'Active abscesses requiring I&D or antibiotic change = Acute uncomplicated or Moderate depending on severity.'
  },
  {
    id: 'hidradenitis-suppurativa-moderate-severe',
    condition: 'Hidradenitis Suppurativa — Moderate/Severe (Hurley II–III)',
    icd10: 'L73.2',
    category: 'Inflammatory',
    complexityLevel: 'moderate',
    amaCategory: 'Chronic illness with exacerbation or progression',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Sinus tracts, scarring, recurrent flares, initiating adalimumab (Humira) or secukinumab (Cosentyx) biologic therapy.',
    clinicalContext: 'Biologic initiation with TB screening, risk counseling, and prior auth coordination supports Moderate through all three elements.'
  },
  {
    id: 'lichen-planus-limited',
    condition: 'Lichen Planus — Limited, Stable',
    icd10: 'L43.9',
    category: 'Inflammatory',
    complexityLevel: 'low',
    amaCategory: 'Stable, chronic illness',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Limited LP controlled with topical therapy. Stable and at treatment goal.',
    clinicalContext: 'Oral LP or LP involving nails/genitalia increases management complexity. Consider Moderate if extensive or requiring systemic therapy.'
  },
  {
    id: 'lichen-planus-extensive',
    condition: 'Lichen Planus — Extensive or Oral/Genital/Nail Involvement',
    icd10: 'L43.9',
    category: 'Inflammatory',
    complexityLevel: 'moderate',
    amaCategory: 'Chronic illness with exacerbation or progression',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Widespread LP, oral LP (risk of malignant transformation), or requiring systemic immunosuppression.',
    clinicalContext: 'Oral lichen planus with malignant transformation risk → document risk discussion and need for regular monitoring.'
  },
  {
    id: 'bullous-pemphigoid-stable',
    condition: 'Bullous Pemphigoid — Stable on Treatment',
    icd10: 'L12.0',
    category: 'Autoimmune Blistering',
    complexityLevel: 'moderate',
    amaCategory: 'Stable, chronic illness; chronic illness with side effects of treatment',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Even when stable, BP requires ongoing monitoring of systemic therapy (steroids, doxycycline, rituximab, immunosuppressants) and regular lab review.',
    clinicalContext: 'Lab review + management of multiple chronic medications supports Moderate through Data and Risk elements.'
  },
  {
    id: 'bullous-pemphigoid-flare',
    condition: 'Bullous Pemphigoid — Flaring or New Diagnosis',
    icd10: 'L12.0',
    category: 'Autoimmune Blistering',
    complexityLevel: 'high',
    amaCategory: 'Chronic illness with severe exacerbation or progression',
    visitContribution: 'High MDM',
    suggestedVisitLevel: '99205 / 99215',
    notes: 'Active widespread blistering, hospitalization risk, requiring IV steroids or rituximab infusion. Can pose threat to bodily function.',
    clinicalContext: 'Document extent of involvement (% BSA), functional impairment, hospitalization risk, and treatment decisions made.'
  },
  {
    id: 'pemphigus-vulgaris-stable',
    condition: 'Pemphigus Vulgaris — Stable on Immunosuppression',
    icd10: 'L10.0',
    category: 'Autoimmune Blistering',
    complexityLevel: 'moderate',
    amaCategory: 'Stable, chronic illness; side effects of treatment',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Stable PV on prednisone, rituximab, or mycophenolate. Requires lab monitoring, steroid taper decisions.',
    clinicalContext: 'Independent lab review + management of multiple immunosuppressants supports Moderate through all three elements.'
  },
  {
    id: 'pemphigus-vulgaris-active',
    condition: 'Pemphigus Vulgaris — Active Disease / Severe Flare',
    icd10: 'L10.0',
    category: 'Autoimmune Blistering',
    complexityLevel: 'high',
    amaCategory: 'Acute or chronic illness posing threat to life or bodily function',
    visitContribution: 'High MDM',
    suggestedVisitLevel: '99205 / 99215',
    notes: 'Active mucocutaneous blistering with risk of dehydration, secondary infection, sepsis. High morbidity and mortality.',
    clinicalContext: 'Document extent, systemic risk, hospitalization discussion, and urgent treatment escalation to support High MDM.'
  },
  {
    id: 'pyoderma-gangrenosum',
    condition: 'Pyoderma Gangrenosum — Active',
    icd10: 'L88',
    category: 'Inflammatory',
    complexityLevel: 'moderate',
    amaCategory: 'Undiagnosed new problem with uncertain prognosis OR chronic illness with exacerbation',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'New or active PG requiring diagnosis of exclusion, systemic therapy (steroids, cyclosporine, biologics), wound management, and workup for underlying systemic disease.',
    clinicalContext: 'Rapidly expanding PG with threat to tissue function = High MDM. Document wound measurements, systemic disease workup, and treatment decisions.'
  },

  // ─── INFECTIONS ──────────────────────────────────────────────
  {
    id: 'cellulitis-uncomplicated',
    condition: 'Cellulitis — Uncomplicated, No Systemic Symptoms',
    icd10: 'L03.90',
    category: 'Infections',
    complexityLevel: 'low',
    amaCategory: 'Acute, uncomplicated illness or injury',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Localized cellulitis without systemic symptoms (afebrile, hemodynamically stable, not rapidly spreading), treated outpatient with oral antibiotics.',
    clinicalContext: 'If fever, leukocytosis, rapidly spreading, or IV antibiotics required → Moderate (acute illness with systemic symptoms). Hospitalization required → High.'
  },
  {
    id: 'cellulitis-systemic',
    condition: 'Cellulitis — With Systemic Symptoms or Rapidly Spreading',
    icd10: 'L03.90',
    category: 'Infections',
    complexityLevel: 'moderate',
    amaCategory: 'Acute illness with systemic symptoms',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'Fever, chills, leukocytosis, lymphangitis, rapidly spreading, or requiring IV antibiotics/admission.',
    clinicalContext: 'Necrotizing fasciitis or sepsis = High MDM (threat to life). Ordering blood cultures, CBC, or imaging adds Data element support.'
  },
  {
    id: 'herpes-zoster-uncomplicated',
    condition: 'Herpes Zoster (Shingles) — Uncomplicated',
    icd10: 'B02.9',
    category: 'Infections',
    complexityLevel: 'low',
    amaCategory: 'Acute, uncomplicated illness or injury',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Classic dermatomal distribution, no ophthalmic involvement, no dissemination, no immunocompromised host. Treat with antivirals.',
    clinicalContext: 'Zoster ophthalmicus = Moderate-High (threat to vision). Disseminated zoster = High. Immunocompromised patient = Moderate minimum.'
  },
  {
    id: 'herpes-zoster-ophthalmicus',
    condition: 'Herpes Zoster Ophthalmicus — HZO',
    icd10: 'B02.30',
    category: 'Infections',
    complexityLevel: 'high',
    amaCategory: 'Acute or chronic illness posing threat to life or bodily function',
    visitContribution: 'High MDM',
    suggestedVisitLevel: '99205 / 99215',
    notes: 'Zoster involving V1 branch with ocular risk. Threat to vision (bodily function). Urgent ophthalmology referral required.',
    clinicalContext: 'Document urgent ophthalmology referral, antiviral prescription, and discussion of risk of keratitis, uveitis, and vision loss.'
  },
  {
    id: 'tinea-uncomplicated',
    condition: 'Tinea (Corporis / Pedis / Cruris) — Uncomplicated',
    icd10: 'B35.4',
    category: 'Infections',
    complexityLevel: 'minimal',
    amaCategory: 'Self-limited or minor problem (if treated topically)',
    visitContribution: 'Straightforward / Low MDM',
    suggestedVisitLevel: '99202 / 99212 or 99203 / 99213',
    notes: 'Classic ringworm or athlete\'s foot. Clear diagnosis, topical antifungal treatment. Self-limited if treated correctly.',
    clinicalContext: 'If requiring oral antifungal (extensive disease, tinea capitis, immunocompromised) → Low MDM at minimum.'
  },
  {
    id: 'warts-simple',
    condition: 'Warts — Common, Plantar, or Flat (Routine Treatment Visit)',
    icd10: 'B07.9',
    category: 'Infections',
    complexityLevel: 'minimal',
    amaCategory: 'Self-limited or minor problem',
    visitContribution: 'Straightforward MDM (if isolated)',
    suggestedVisitLevel: '99202 / 99212',
    notes: 'Routine wart treatment visit — cryotherapy or cantharidin. Clear diagnosis, minor procedure.',
    clinicalContext: 'Extensive warts in immunosuppressed patient, genital condyloma, or rapidly multiplying warts may warrant Low or Moderate MDM.'
  },
  {
    id: 'molluscum-simple',
    condition: 'Molluscum Contagiosum — Limited, Pediatric',
    icd10: 'B08.1',
    category: 'Infections',
    complexityLevel: 'minimal',
    amaCategory: 'Self-limited or minor problem',
    visitContribution: 'Straightforward MDM',
    suggestedVisitLevel: '99202 / 99212',
    notes: 'Common, self-limiting viral infection in children. Observation or cantharidin treatment. No systemic concerns.',
    clinicalContext: 'Adult with genital molluscum (STI workup needed) or immunocompromised host (extensive/recalcitrant) → Low or Moderate.'
  },

  // ─── DRUG REACTIONS ──────────────────────────────────────────
  {
    id: 'drug-eruption-morbilliform',
    condition: 'Drug Eruption — Morbilliform / Exanthematous (Benign)',
    icd10: 'L27.0',
    category: 'Drug Reactions',
    complexityLevel: 'low',
    amaCategory: 'Acute, uncomplicated illness or injury',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Classic drug rash without systemic involvement, mucous membrane involvement, or blistering. Drug stopped, supportive care.',
    clinicalContext: 'Mucosal involvement, blistering, fever, or eosinophilia → evaluate for SJS/TEN or DRESS (Moderate or High).'
  },
  {
    id: 'dress-syndrome',
    condition: 'DRESS Syndrome / Severe Cutaneous Adverse Reaction (SCAR)',
    icd10: 'L27.0',
    category: 'Drug Reactions',
    complexityLevel: 'high',
    amaCategory: 'Acute or chronic illness posing threat to life or bodily function',
    visitContribution: 'High MDM',
    suggestedVisitLevel: '99205 / 99215',
    notes: 'Life-threatening drug hypersensitivity with multi-organ involvement. Requires hospitalization, urgent labs, ID/hepatology/nephrology consultation.',
    clinicalContext: 'Full documentation of organ involvement, causative drug, hospitalization decision, and specialist coordination strongly supports High MDM.'
  },
  {
    id: 'sjs-ten',
    condition: 'Stevens-Johnson Syndrome / TEN',
    icd10: 'L51.1 / L51.2',
    category: 'Drug Reactions',
    complexityLevel: 'high',
    amaCategory: 'Acute or chronic illness posing threat to life or bodily function',
    visitContribution: 'High MDM',
    suggestedVisitLevel: '99205 / 99215',
    notes: 'Life-threatening blistering disorder with mucocutaneous involvement. Mortality risk. Emergency dermatology, burn unit consideration, immediate hospitalization.',
    clinicalContext: 'This is a medical emergency. Full High MDM. Document immediately and facilitate urgent care pathway.'
  },

  // ─── BENIGN LESIONS / MINOR ──────────────────────────────────
  {
    id: 'seborrheic-keratosis-removal',
    condition: 'Seborrheic Keratosis — Removal (No Malignancy Concern)',
    icd10: 'L82.1',
    category: 'Benign Lesions',
    complexityLevel: 'minimal',
    amaCategory: 'Self-limited or minor problem',
    visitContribution: 'Straightforward MDM',
    suggestedVisitLevel: '99202 / 99212',
    notes: 'Clear diagnosis, cosmetic or symptom-driven removal. Cryotherapy or shave excision.',
    clinicalContext: 'Sign of Leser-Trélat (sudden eruption of multiple SKs) warrants malignancy workup → Moderate or High MDM.'
  },
  {
    id: 'skin-tag-removal',
    condition: 'Acrochordon / Skin Tag — Removal',
    icd10: 'L91.8',
    category: 'Benign Lesions',
    complexityLevel: 'minimal',
    amaCategory: 'Self-limited or minor problem',
    visitContribution: 'Straightforward MDM',
    suggestedVisitLevel: '99202 / 99212',
    notes: 'Minor benign lesion. Simple removal procedure. Clear diagnosis.',
    clinicalContext: 'Note: Skin tag removal is often cosmetic and may not be billed as E/M. Confirm billing protocol with physician.'
  },
  {
    id: 'dermatofibroma',
    condition: 'Dermatofibroma — Evaluation or Removal',
    icd10: 'L98.0',
    category: 'Benign Lesions',
    complexityLevel: 'minimal',
    amaCategory: 'Self-limited or minor problem',
    visitContribution: 'Straightforward MDM',
    suggestedVisitLevel: '99202 / 99212',
    notes: 'Benign fibrous nodule. Classic presentation (dimple sign). Reassurance or shave/excision if desired.',
    clinicalContext: 'Multiple dermatofibromas in unusual distribution warrant evaluation for underlying systemic disease.'
  },
  {
    id: 'nevi-routine-eval',
    condition: 'Nevi (Moles) — Routine Surveillance or Benign Evaluation',
    icd10: 'D22.9',
    category: 'Benign Lesions',
    complexityLevel: 'low',
    amaCategory: 'Stable, chronic illness (multiple nevi) OR Acute uncomplicated (new lesion, reassurance)',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Routine nevus surveillance in patient with multiple nevi or history of dysplastic nevi. Full body skin exam, dermoscopy.',
    clinicalContext: 'Biopsy performed at same visit: adds procedural risk. Concerning lesion with uncertain diagnosis → Moderate (undiagnosed new problem).'
  },
  {
    id: 'nevi-suspicious',
    condition: 'Pigmented Lesion — Suspicious or Uncertain Diagnosis (Pre-Biopsy)',
    icd10: 'D48.5',
    category: 'Benign Lesions',
    complexityLevel: 'moderate',
    amaCategory: 'Undiagnosed new problem with uncertain prognosis',
    visitContribution: 'Moderate MDM',
    suggestedVisitLevel: '99204 / 99214',
    notes: 'New or changing lesion with atypical features, uncertain whether benign vs. malignant prior to biopsy. Biopsy ordered and/or performed.',
    clinicalContext: 'Document dermoscopy findings, clinical reasoning for biopsy, and risk discussed with patient to support Moderate MDM.'
  },

  // ─── PIGMENTATION / HAIR ─────────────────────────────────────
  {
    id: 'vitiligo-stable',
    condition: 'Vitiligo — Stable, Limited Involvement',
    icd10: 'L80',
    category: 'Pigmentation',
    complexityLevel: 'low',
    amaCategory: 'Stable, chronic illness',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Stable vitiligo on topical therapy (calcineurin inhibitors, steroids) or narrowband UVB. Routine follow-up.',
    clinicalContext: 'Initiation of oral ruxolitinib (Opzelura) — a JAK inhibitor — adds drug risk and lab monitoring, supporting Moderate.'
  },
  {
    id: 'melasma-stable',
    condition: 'Melasma — Stable, On Treatment',
    icd10: 'L81.1',
    category: 'Pigmentation',
    complexityLevel: 'low',
    amaCategory: 'Stable, chronic illness',
    visitContribution: 'Low MDM',
    suggestedVisitLevel: '99203 / 99213',
    notes: 'Melasma on topical regimen (hydroquinone, tretinoin, azelaic acid), stable or improving. Routine follow-up.',
    clinicalContext: 'Chemical peel planned at same visit adds procedural component.'
  }

];

// MDM level definitions for display
const MDM_LEVELS = {
  minimal: {
    label: 'Minimal / Straightforward',
    color: '#16a34a',
    bg: '#dcfce7',
    badge: 'Straightforward',
    visitRange: '99202 / 99212',
    description: 'Self-limited or minor problem'
  },
  low: {
    label: 'Low Complexity',
    color: '#2563a8',
    bg: '#e8f4fd',
    badge: 'Low',
    visitRange: '99203 / 99213',
    description: 'Stable chronic illness OR acute uncomplicated illness/injury'
  },
  moderate: {
    label: 'Moderate Complexity',
    color: '#d97706',
    bg: '#fef3c7',
    badge: 'Moderate',
    visitRange: '99204 / 99214',
    description: 'Chronic illness with exacerbation/progression OR undiagnosed new problem OR acute with systemic symptoms'
  },
  high: {
    label: 'High Complexity',
    color: '#dc2626',
    bg: '#fee2e2',
    badge: 'High',
    visitRange: '99205 / 99215',
    description: 'Chronic illness with severe exacerbation OR threat to life or bodily function'
  }
};
