/**
 * Melanoma Surveillance and Follow-up Guidelines
 * Reference for Dermatology MA Portal
 * Based on AJCC 8th edition staging and NCCN Clinical Practice Guidelines
 */

const MELANOMA_SURVEILLANCE = [
  // ========== STAGE 0: MELANOMA IN SITU / LENTIGO MALIGNA ==========
  {
    id: "stage-0",
    stage: "Stage 0 (Melanoma In Situ / Lentigo Maligna)",
    stageShort: "0",
    breslow: "No Breslow (confined to epidermis)",
    description: "Malignant melanocytes confined to epidermis. No invasion into dermis. Lentigo maligna is in situ melanoma on sun-exposed face/neck in older adults. Excellent prognosis with appropriate treatment.",
    color: "#16a34a",
    followUpSchedule: [
      {
        period: "Years 1-5",
        frequency: "Every 6-12 months",
        notes: "Regular full-body skin examination with attention to entire skin surface and lymph nodes"
      },
      {
        period: "Year 5+",
        frequency: "Annually lifelong",
        notes: "Lifelong annual surveillance recommended; recurrence can occur years later"
      }
    ],
    examAtVisit: [
      "Complete skin examination (face, scalp, ears, neck, trunk, extremities, hands, feet, nails, genitals, interdigital spaces)",
      "Palpate regional lymph nodes and evaluate for any lymphadenopathy",
      "Document size, location, and appearance of any new or changing lesions"
    ],
    imaging: "No routine imaging indicated for asymptomatic patients. Imaging only if symptoms or signs suggest metastasis.",
    labs: "No routine labs indicated. LDH not required for Stage 0.",
    sentinel: "Sentinel lymph node biopsy (SLNB) NOT recommended for melanoma in situ.",
    referral: "Refer to surgical oncology for re-excision if initial excision margins inadequate (<0.5 cm). Mohs micrographic surgery may be beneficial for lentigo maligna on face.",
    maActions: [
      "Schedule excision with appropriate margins (0.5-1.0 cm for most Stage 0 lesions; up to 1.5 cm for lentigo maligna on face)",
      "Document excision date and pathology results in chart",
      "Schedule first follow-up at 6 months post-excision",
      "Provide patient education on ABCDE rule and monthly self-skin examinations",
      "Educate on sun protection and UV avoidance; reinforce importance of lifelong surveillance",
      "Document patient counseling regarding recurrence risk (small but lifelong)"
    ]
  },

  // ========== STAGE IA: T1a MELANOMA ==========
  {
    id: "stage-ia",
    stage: "Stage IA (T1a — <0.8mm, non-ulcerated, <1 mitosis/mm²)",
    stageShort: "IA",
    breslow: "<0.8mm, no ulceration, mitotic rate <1/mm²",
    description: "Thin melanoma, <0.8mm in thickness, without ulceration and with low mitotic activity. Excellent prognosis; 5-year survival ~97%. Lowest-risk invasive melanoma category.",
    color: "#65a30d",
    followUpSchedule: [
      {
        period: "Years 1-5",
        frequency: "Every 6-12 months",
        notes: "Skin self-examination monthly by patient; physician exam every 6-12 months"
      },
      {
        period: "Year 5+",
        frequency: "Annually lifelong",
        notes: "Annual surveillance lifelong; recurrence rate is low but possible"
      }
    ],
    examAtVisit: [
      "Complete full-body skin examination including all cutaneous surfaces",
      "Palpate regional and distant lymph nodes; assess for any abnormalities",
      "Dermoscopic evaluation of any new or changing lesions",
      "Patient may perform total body photography for baseline and comparative purposes"
    ],
    imaging: "No routine imaging. Imaging only if clinical signs/symptoms of metastasis (e.g., palpable lymph nodes, symptoms of distant disease).",
    labs: "LDH and CBC optional at baseline and follow-up visits per physician discretion. Not required for Stage IA.",
    sentinel: "Sentinel lymph node biopsy (SLNB) generally NOT recommended for T1a melanoma. Consider SLNB only if high-grade features (ulceration, mitosis ≥1/mm²) are borderline.",
    referral: "Refer to surgical oncology for initial wide local excision if not already performed (1-2 cm margins). Routine oncology referral not needed for isolated Stage IA (no adjuvant therapy indicated).",
    maActions: [
      "Schedule wide local excision with 1-2 cm margins if not yet done",
      "Arrange pathology review to confirm stage (thickness, ulceration, mitotic rate)",
      "Schedule initial follow-up at 6-12 months post-excision",
      "Provide comprehensive patient education: ABCDE warning signs, monthly self-skin exams, daily sun protection (SPF 30+, UVA/UVB)",
      "Advise patient on family screening: first-degree relatives have 2-3x increased melanoma risk",
      "Document patient counseling regarding excellent prognosis and importance of ongoing surveillance"
    ]
  },

  // ========== STAGE IB: T1b AND T2a MELANOMA ==========
  {
    id: "stage-ib",
    stage: "Stage IB (T1b: <0.8mm + ulceration OR mitosis ≥1; OR T2a: 0.8-2.0mm, no ulceration)",
    stageShort: "IB",
    breslow: "<0.8mm with ulceration OR mitosis ≥1/mm²; OR 0.8-2.0mm without ulceration",
    description: "Thin to intermediate thickness melanoma. T1b has adverse features (ulceration or high mitosis); T2a is 0.8-2.0mm. 5-year survival ~92-95%. SLNB consideration appropriate.",
    color: "#ca8a04",
    followUpSchedule: [
      {
        period: "Years 1-3",
        frequency: "Every 3-6 months",
        notes: "Clinical examination every 3-6 months for first 3 years"
      },
      {
        period: "Years 3-5",
        frequency: "Every 6-12 months",
        notes: "Follow-up can transition to every 6-12 months after year 3"
      },
      {
        period: "Year 5+",
        frequency: "Annually lifelong",
        notes: "Annual lifelong surveillance"
      }
    ],
    examAtVisit: [
      "Complete full-body skin examination at every visit",
      "Palpate regional lymph node basin; assess for any nodal enlargement or abnormalities",
      "Dermoscopic evaluation of any new or atypical lesions",
      "Total body photography at baseline and periodically for comparison"
    ],
    imaging: "No routine imaging for asymptomatic patients (NCCN standard). Imaging (CT C/A/P ± brain MRI) only if clinical suspicion of metastasis (e.g., palpable nodes, systemic symptoms).",
    labs: "LDH at baseline and follow-up visits per physician preference. CBC/CMP optional. Not required but may be obtained for baseline reference.",
    sentinel: "SLNB: Consider and discuss with patient for T1b; STRONGLY RECOMMENDED for T2a. SLNB improves staging accuracy and identifies occult nodal disease in ~5-10% of cases.",
    referral: "Surgical oncology for wide local excision and SLNB planning (especially T2a). Medical oncology referral not routine for Stage IB without SLNB positivity (no standard adjuvant therapy for Stage IB).",
    maActions: [
      "Confirm SLNB has been discussed and scheduled if appropriate (especially for T2a)",
      "Arrange wide local excision (1-2 cm margins) if not previously done",
      "Schedule post-operative follow-up 2-4 weeks post-excision",
      "Schedule follow-up exam at 3-6 months after surgery, then every 3-6 months × 3 years",
      "Arrange pathology review for exact thickness, ulceration status, and mitotic rate to confirm stage",
      "Educate patient on signs/symptoms of nodal disease (palpable masses, swelling in regional node basins)",
      "Provide sun protection and self-monitoring education; emphasize monthly self-exams",
      "Counsel on family screening recommendations"
    ]
  },

  // ========== STAGE IIA: T2b AND T3a MELANOMA ==========
  {
    id: "stage-iia",
    stage: "Stage IIA (T2b: 0.8-2.0mm + ulceration; OR T3a: 2.01-4.0mm, no ulceration)",
    stageShort: "IIA",
    breslow: "0.8-2.0mm with ulceration; OR 2.01-4.0mm without ulceration",
    description: "Intermediate to moderately thick melanoma with higher risk features. 5-year survival ~87-89%. SLNB recommended. Adjuvant therapy may be considered if SLNB positive.",
    color: "#d97706",
    followUpSchedule: [
      {
        period: "Years 1-3",
        frequency: "Every 3-6 months",
        notes: "Close surveillance: every 3-6 months for first 3 years"
      },
      {
        period: "Years 3-5",
        frequency: "Every 6-12 months",
        notes: "Every 6-12 months in years 3-5"
      },
      {
        period: "Year 5+",
        frequency: "Annually lifelong",
        notes: "Annual surveillance ongoing"
      }
    ],
    examAtVisit: [
      "Full-body skin examination with attention to primary site and regional lymph node basin",
      "Palpate regional nodes; check for any enlargement, firmness, or fixation",
      "Examine distant lymph nodes (contralateral regional, inguinal, axillary, cervical)",
      "Dermoscopy of any new or changing lesions; total body photography if available"
    ],
    imaging: "Baseline CT chest/abdomen/pelvis ± brain MRI at diagnosis per physician judgment. NCCN notes imaging not required if asymptomatic and SLNB negative, but many centers obtain baseline CT. Annual CT may be considered at follow-up visits.",
    labs: "LDH, CBC/CMP at baseline. LDH at follow-up visits per physician preference.",
    sentinel: "SLNB: STRONGLY RECOMMENDED. Staging accuracy important. If SLNB positive, refer for adjuvant therapy evaluation.",
    referral: "Surgical oncology for wide local excision and SLNB. If SLNB positive, refer to medical oncology for adjuvant immunotherapy or systemic therapy discussion.",
    maActions: [
      "Schedule and confirm SLNB procedure with surgical oncology",
      "Arrange baseline labs (LDH, CBC/CMP) and imaging (CT C/A/P ± brain MRI) per physician protocol",
      "Schedule follow-up at 2-4 weeks post-excision and SLNB",
      "Schedule regular follow-up exams: every 3-6 months × 3 years, then every 6-12 months",
      "If SLNB positive: refer immediately to medical oncology for adjuvant therapy evaluation (pembrolizumab now standard for Stage IIA if SLNB+)",
      "Educate patient on signs of recurrence: new skin lesions, palpable nodes, weight loss, cough, dyspnea, focal neurologic symptoms",
      "Provide comprehensive counseling on sun avoidance, self-monitoring, and family screening"
    ]
  },

  // ========== STAGE IIB: T3b AND T4a MELANOMA ==========
  {
    id: "stage-iib",
    stage: "Stage IIB (T3b: 2.01-4.0mm + ulceration; OR T4a: >4.0mm, no ulceration)",
    stageShort: "IIB",
    breslow: "2.01-4.0mm with ulceration; OR >4.0mm without ulceration",
    description: "Thicker melanoma with high-risk features. 5-year survival ~76-86%. SLNB recommended. Adjuvant pembrolizumab indicated per NCCN.",
    color: "#ea580c",
    followUpSchedule: [
      {
        period: "Years 1-3",
        frequency: "Every 3-6 months",
        notes: "Frequent surveillance: every 3-6 months for first 3 years"
      },
      {
        period: "Years 3-5",
        frequency: "Every 6 months",
        notes: "Every 6 months in years 3-5"
      },
      {
        period: "Year 5+",
        frequency: "Annually lifelong",
        notes: "Annual surveillance ongoing"
      }
    ],
    examAtVisit: [
      "Complete full-body skin examination at each visit",
      "Detailed palpation of regional and distant lymph node basins",
      "Assessment of primary excision site for signs of recurrence",
      "Dermatoscopic evaluation of any concerning lesions; total body photography if available"
    ],
    imaging: "Baseline CT chest/abdomen/pelvis + brain MRI recommended. Annual CT chest/abdomen/pelvis at follow-up visits for first 3-5 years to monitor for metastasis.",
    labs: "LDH, CBC/CMP at baseline and follow-up intervals (q3-6 months initially, then q6-12 months).",
    sentinel: "SLNB: STRONGLY RECOMMENDED. Staging accuracy critical for adjuvant therapy decisions.",
    referral: "Surgical oncology for wide local excision and SLNB. Medical oncology referral REQUIRED: adjuvant pembrolizumab (Keytruda) is standard-of-care for Stage IIB to improve recurrence-free and overall survival.",
    maActions: [
      "Ensure SLNB is scheduled with surgical oncology",
      "Arrange baseline labs and imaging (CT C/A/P + brain MRI) before or shortly after surgical consultation",
      "Schedule immediate medical oncology referral for adjuvant therapy evaluation; emphasize urgency",
      "If adjuvant pembrolizumab initiated: coordinate with oncology on treatment schedule, monitoring, and management of immune-related adverse events",
      "Schedule regular follow-up: every 3-6 months × 3 years, then every 6 months × 2 years, then annually",
      "Educate patient on adjuvant therapy rationale: improved recurrence-free and overall survival",
      "Provide education on immune checkpoint inhibitor side effects (fatigue, rash, autoimmune phenomena)",
      "Counsel on strict sun avoidance, monthly self-skin exams, and importance of ongoing surveillance"
    ]
  },

  // ========== STAGE IIC: T4b MELANOMA ==========
  {
    id: "stage-iic",
    stage: "Stage IIC (T4b: >4.0mm with ulceration)",
    stageShort: "IIC",
    breslow: ">4.0mm with ulceration",
    description: "Thickest stage II melanoma with ulceration. Worst prognosis in Stage II; 5-year survival ~67-76%. Often higher recurrence risk than some Stage IIIA patients. Adjuvant immunotherapy recommended.",
    color: "#dc2626",
    followUpSchedule: [
      {
        period: "Years 1-3",
        frequency: "Every 3-6 months",
        notes: "Frequent surveillance: every 3-6 months for first 3 years"
      },
      {
        period: "Years 3-5",
        frequency: "Every 6 months",
        notes: "Every 6 months in years 3-5"
      },
      {
        period: "Year 5+",
        frequency: "Annually lifelong",
        notes: "Annual surveillance ongoing"
      }
    ],
    examAtVisit: [
      "Complete full-body skin examination at every visit",
      "Thorough palpation of regional lymph node basin and distant nodes",
      "Close assessment of primary excision site for any recurrence",
      "Evaluate for signs/symptoms of systemic disease (weight loss, night sweats, new masses)",
      "Total body photography at baseline and periodically"
    ],
    imaging: "Baseline CT chest/abdomen/pelvis + brain MRI. Annual imaging (CT C/A/P ± brain) recommended for 3-5 years given high recurrence risk.",
    labs: "LDH, CBC/CMP at baseline. LDH and CBC/CMP at follow-up visits; elevated LDH correlates with recurrence risk.",
    sentinel: "SLNB: STRONGLY RECOMMENDED. Mandatory for staging and adjuvant therapy decision-making.",
    referral: "Surgical oncology for wide local excision (2-3 cm margins) and SLNB. Medical oncology referral URGENT: adjuvant pembrolizumab is standard to improve outcomes.",
    maActions: [
      "PRIORITY: Schedule medical oncology and surgical oncology consultations",
      "Confirm SLNB is planned; coordinate with surgical team",
      "Arrange baseline labs (LDH, CBC/CMP) and imaging (CT C/A/P + brain MRI) urgently",
      "Ensure medical oncology consultation occurs before or shortly after surgery",
      "Discuss adjuvant pembrolizumab (standard-of-care); coordinate treatment initiation if planned",
      "Schedule post-operative follow-up at 2-4 weeks, then every 3-6 months × 3 years, then every 6 months × 2 years, then annually",
      "Coordinate care between dermatology and medical oncology; ensure clear communication on surveillance",
      "Educate patient on importance of adjuvant therapy and close monitoring",
      "Provide counseling on signs of recurrence and when to seek immediate attention"
    ]
  },

  // ========== STAGE IIIA-C: REGIONAL LYMPH NODE INVOLVEMENT ==========
  {
    id: "stage-iii",
    stage: "Stage IIIA-C (Regional Lymph Node Involvement)",
    stageShort: "IIIA-C",
    breslow: "Any thickness + regional nodal metastasis (N1, N2, N3)",
    description: "Melanoma with histologically confirmed regional lymph node involvement. IIIA: micrometastases (in transit metastasis, satellite, or single node ≤3cm); IIIB: macrometastases (nodes >3cm or multiple nodes or in-transit disease ≥4cm); IIIC: additional sites of in-transit disease or satellite lesions. 5-year survival 40-78% depending on subtype. Adjuvant therapy standard.",
    color: "#b91c1c",
    followUpSchedule: [
      {
        period: "Years 1-2",
        frequency: "Every 3-4 months",
        notes: "Close surveillance: every 3-4 months for first 2 years"
      },
      {
        period: "Years 2-5",
        frequency: "Every 6 months",
        notes: "Every 6 months in years 2-5"
      },
      {
        period: "Year 5+",
        frequency: "Annually lifelong",
        notes: "Annual surveillance ongoing"
      }
    ],
    examAtVisit: [
      "Complete full-body skin examination; assess for new cutaneous lesions or in-transit disease",
      "Meticulous palpation of involved and contralateral regional lymph node basins",
      "Examine for palpable nodes, assess for size, firmness, matting, fixation",
      "Assess distant lymph nodes (non-regional basins)",
      "Evaluate for signs of visceral metastasis (weight loss, lymphadenopathy, hepatomegaly, focal neurologic signs)"
    ],
    imaging: "Baseline and periodic CT chest/abdomen/pelvis + brain MRI. Repeat imaging every 6-12 months × 3-5 years per medical oncology protocol. PET-CT may be used at discretion.",
    labs: "LDH, CBC/CMP at baseline and every 3-6 months during first 2 years, then every 6-12 months.",
    sentinel: "SLNB already performed (regional node staging done).",
    referral: "Medical oncology referral MANDATORY: adjuvant immunotherapy (nivolumab ± ipilimumab) or targeted therapy if BRAF V600E/K positive (dabrafenib + trametinib). Surgical oncology for completion lymph node dissection if not already done. Radiation oncology consultation may be appropriate for nodal basin radiation if high-risk features or extranodal extension.",
    maActions: [
      "PRIORITY: Confirm medical oncology and surgical oncology are engaged",
      "Arrange baseline labs (LDH, CBC/CMP) and imaging (CT C/A/P + brain MRI) immediately",
      "Send pathology to confirm nodal staging (micrometastases vs. macrometastases, number of positive nodes)",
      "Coordinate BRAF/MEK mutation testing if not already done (guides targeted therapy eligibility)",
      "Ensure medical oncology leads adjuvant therapy decision (immunotherapy vs. targeted therapy vs. observation based on BRAF status and other factors)",
      "Coordinate scheduling of adjuvant therapy initiation (typically within 4-6 weeks of surgery)",
      "Schedule dermatology follow-up: every 3-4 months × 2 years, then every 6 months × 3 years, then annually",
      "Coordinate closely with oncology on surveillance imaging schedules and labs",
      "Educate patient: Stage III is high-risk; adjuvant therapy improves recurrence-free and overall survival",
      "Manage dermatology-specific issues: immunotherapy dermatitis, new lesions, in-transit disease progression",
      "Maintain clear communication between dermatology and medical oncology at every visit"
    ]
  },

  // ========== STAGE IV: DISTANT METASTATIC DISEASE ==========
  {
    id: "stage-iv",
    stage: "Stage IV (Distant Metastasis — M1)",
    stageShort: "IV",
    breslow: "Any primary thickness + distant metastasis (non-regional nodes, lung, liver, brain, other organs)",
    description: "Melanoma with distant metastatic disease. Medical oncology primary. 5-year survival 5-10% overall (varies widely by number and location of metastases, LDH level, and treatment response). Dermatology plays supportive role in skin surveillance and immunotherapy side effect management.",
    color: "#7f1d1d",
    followUpSchedule: [
      {
        period: "All years",
        frequency: "Per medical/surgical oncology protocol",
        notes: "Medical oncology determines follow-up frequency and intervals based on treatment plan and response"
      },
      {
        period: "Dermatology component",
        frequency: "Every 3-6 months or as clinically indicated",
        notes: "Dermatology continues skin surveillance and manages cutaneous manifestations and immunotherapy side effects"
      }
    ],
    examAtVisit: [
      "Full-body skin examination to monitor for new cutaneous metastases",
      "Assess primary site and regional nodal basin for local recurrence or nodal progression",
      "Monitor for immunotherapy-related cutaneous adverse events (lichenoid eruptions, bullous disease, psoriasiform dermatitis, etc.)",
      "Total body photography if available for comparison"
    ],
    imaging: "CT chest/abdomen/pelvis + brain MRI per medical oncology protocol. Frequency typically every 8-12 weeks during active treatment, then per response.",
    labs: "LDH (prognostic marker; elevated LDH = worse prognosis), CBC/CMP per medical oncology schedule.",
    sentinel: "SLNB not applicable; already metastatic.",
    referral: "Medical/surgical oncology PRIMARY. Dermatology continues as consultant for skin-directed issues. Pulmonology, neurology, or other specialists as needed based on metastatic sites.",
    maActions: [
      "Confirm medical oncology is primary care team; dermatology plays supportive role",
      "If patient not yet with oncology, refer URGENTLY to medical oncology",
      "Coordinate scheduling between dermatology and oncology to avoid redundant appointments",
      "Manage dermatologic issues: new lesions, cutaneous metastases, immunotherapy side effects",
      "Educate on immunotherapy-related skin reactions: when to contact dermatology vs. oncology",
      "Assist with photodocumentation of cutaneous metastases and treatment response",
      "Monitor adherence to sunscreen and sun protection despite metastatic disease (prevent new primary melanomas)",
      "Provide supportive care and counseling; address quality of life and palliative concerns as appropriate"
    ]
  }
];

/**
 * General Clinical Notes and Principles for Melanoma Surveillance
 */
const MELANOMA_GENERAL_NOTES = [
  "All melanoma patients should be seen for a full-body skin exam at every follow-up visit — not just the excision site. Total skin examination is essential for early detection of recurrence and new primary melanomas.",
  "Educate all patients on the ABCDE rule (Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolution/change over time) and emphasize monthly self-skin examination.",
  "First-degree relatives of melanoma patients have 2x increased melanoma risk. Recommend they undergo baseline full-body skin examination and potentially enter enhanced surveillance.",
  "BRAF V600E/K mutation testing is performed on metastatic (M1) and Stage III melanomas to guide targeted therapy eligibility (dabrafenib + trametinib). Not routinely performed on Stage I/II primary tumors unless considering adjuvant therapy in specific cases.",
  "Breslow thickness (depth in millimeters) is the SINGLE MOST IMPORTANT prognostic factor for primary cutaneous melanoma. Thickness drives both SLNB recommendation and adjuvant therapy decisions.",
  "Sentinel lymph node biopsy (SLNB) is recommended for melanomas ≥0.8mm thickness, or thinner melanomas with adverse features (ulceration or mitotic rate ≥1/mm²). SLNB accuracy improves staging and identifies occult nodal disease in ~5-15% of cases.",
  "Elevated serum LDH in Stage IV melanoma is a negative prognostic marker. LDH should be obtained at baseline and followed periodically; rising LDH may indicate disease progression.",
  "Stage IIC patients have a worse prognosis than many Stage IIIA patients. Stage IIC (>4mm + ulceration) is now eligible for adjuvant pembrolizumab per NCCN guidelines.",
  "Dermatoscopy and total body photography (TBP) with digital storage are valuable tools for surveillance in high-risk patients and facilitate detection of subtle changes in existing lesions and new lesions.",
  "Document all surveillance visits thoroughly in the medical record. Recurrence can present clinically or radiologically years or even decades after initial diagnosis. Complete history and examination are essential for early detection.",
  "Adjuvant therapy indications have expanded: Stage IIB, IIC, and Stage III melanomas are now eligible for adjuvant pembrolizumab (anti-PD1) or, for BRAF-mutated tumors, targeted therapy with dabrafenib + trametinib.",
  "For Stage IIIA patients with micrometastatic disease: observation vs. adjuvant therapy is individualized; some patients receive adjuvant therapy, others are observed closely.",
  "Immune checkpoint inhibitors (pembrolizumab, nivolumab, ipilimumab) can cause immune-related adverse events (irAEs) including dermatitis, vitiligo, and other skin manifestations. Dermatologists play key role in recognizing and managing irAEs."
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MELANOMA_SURVEILLANCE, MELANOMA_GENERAL_NOTES };
}
