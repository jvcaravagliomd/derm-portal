// ════════════════════════════════════════════════════════════
//  LAB MONITORING DATA — SYSTEMIC DERMATOLOGY MEDICATIONS
//  Severity levels: "danger" = stop/do not start | "caution" = hold & reassess | "watch" = monitor closely
// ════════════════════════════════════════════════════════════

const LAB_MONITORING = [

  // ─── CONVENTIONAL SYSTEMICS ────────────────────────────────

  {
    id: "isotretinoin",
    drug: "Isotretinoin",
    brand: "Absorica, Claravis, Myorisan",
    type: "Retinoid",
    typeColor: "purple",
    indication: "Severe / Nodulocystic Acne",
    rems: "iPLEDGE REMS — mandatory enrollment",
    blackBox: true,
    blackBoxText: "Teratogenicity (Category X) — severe birth defects. Females must use two forms of contraception. Monthly pregnancy tests required for WOCBP.",
    baselineLabs: [
      { test: "CBC", reason: "Baseline WBC and platelet count" },
      { test: "CMP (LFTs)", reason: "AST, ALT, alkaline phosphatase — baseline liver function" },
      { test: "Fasting Lipid Panel", reason: "Triglycerides, LDL, HDL, total cholesterol — isotretinoin raises triglycerides significantly" },
      { test: "Pregnancy Test (urine or serum)", reason: "WOCBP only — must be negative before initiating. Required by iPLEDGE." },
      { test: "Glucose (fasting)", reason: "Part of CMP; isotretinoin may affect glucose tolerance" },
    ],
    ongoingLabs: [
      { test: "CBC + CMP (LFTs) + Fasting Lipid Panel", frequency: "Monthly", notes: "Required every 30 days for prescription renewal via iPLEDGE" },
      { test: "Pregnancy Test (urine or serum)", frequency: "Monthly — WOCBP only", notes: "Must be performed within the iPLEDGE window. Prescription cannot be dispensed without a negative result entered in the portal." },
    ],
    watchFor: [
      { test: "Triglycerides", threshold: "≥ 500 mg/dL", action: "STOP therapy — pancreatitis risk", severity: "danger", detail: "Fasting triglycerides ≥500 mg/dL require discontinuation. Pancreatitis risk is real and serious. May retry at lower dose after normalization." },
      { test: "Triglycerides", threshold: "300–499 mg/dL", action: "Hold / dose reduce — recheck in 2–4 weeks", severity: "caution", detail: "Dose reduction or temporary hold while dietary modification initiated. Recheck before continuing." },
      { test: "AST or ALT", threshold: "> 3× ULN", action: "Hold therapy — evaluate for drug-induced hepatotoxicity", severity: "caution", detail: "Discontinue or hold; recheck in 2–4 weeks. Rare but important to catch early." },
      { test: "Pregnancy Test", threshold: "Any POSITIVE result", action: "STOP immediately — contact physician and teratology hotline (1-800-526-9248)", severity: "danger", detail: "Isotretinoin is a known human teratogen. Immediate physician notification required. iPLEDGE must be updated." },
      { test: "WBC", threshold: "Significant drop below baseline", action: "Evaluate — notify physician", severity: "watch", detail: "Uncommon but leukopenia has been reported. Clinical significance varies; physician to assess." },
    ],
    notes: [
      "Prescriptions limited to 30-day supply. Pharmacy dispenses only within iPLEDGE activation window (7 days for WOCBP; 30 days for others).",
      "Co-prescribe folic acid equivalent — not required by label but reduces mucous membrane dryness symptoms.",
      "Blood donation prohibited during therapy and for 1 month after.",
      "Waxing and dermabrasion contraindicated during therapy and for 6 months after.",
      "Depression / mood changes: rare but documented. Document baseline mood and have patient report changes.",
    ]
  },

  {
    id: "spironolactone",
    drug: "Spironolactone",
    brand: "Aldactone (generic widely available)",
    type: "Antiandrogen",
    typeColor: "teal",
    indication: "Hormonal / Cystic Acne (adult females), Hidradenitis Suppurativa",
    rems: null,
    blackBox: false,
    baselineLabs: [
      { test: "BMP (Basic Metabolic Panel)", reason: "Potassium and creatinine — spironolactone is potassium-sparing; risk of hyperkalemia" },
      { test: "Pregnancy Test", reason: "Spironolactone is teratogenic — contraindicated in pregnancy. Confirm negative before starting." },
    ],
    ongoingLabs: [
      { test: "BMP (Potassium + Creatinine)", frequency: "At 4–6 weeks after initiation; after each dose increase; then every 6 months", notes: "Potassium monitoring is the primary concern. Reduce frequency once stable at therapeutic dose." },
      { test: "Pregnancy Test", frequency: "Per practice protocol if not on contraception", notes: "Strongly recommend reliable contraception while on spironolactone." },
    ],
    watchFor: [
      { test: "Potassium (K⁺)", threshold: "> 5.5 mEq/L", action: "HOLD therapy — evaluate and reduce dose", severity: "danger", detail: "Hyperkalemia risk, especially in patients with renal impairment, diabetes, or on ACE inhibitors/ARBs/NSAIDs. Hold and recheck after dietary modification." },
      { test: "Potassium (K⁺)", threshold: "5.0–5.5 mEq/L", action: "Dose reduction — recheck in 4 weeks", severity: "caution", detail: "Borderline hyperkalemia. Reduce dose, counsel on low-potassium diet, and recheck." },
      { test: "Creatinine / eGFR", threshold: "eGFR < 30 mL/min/1.73m²", action: "Do NOT use — contraindicated in significant renal impairment", severity: "danger", detail: "Risk of severe hyperkalemia and drug accumulation in renal failure." },
      { test: "Pregnancy Test", threshold: "Positive", action: "STOP immediately — notify physician", severity: "danger", detail: "Spironolactone is teratogenic (antiandrogen effects on male fetus). Immediate discontinuation required." },
    ],
    notes: [
      "Monthly periods may become irregular — reassure patient, especially early in treatment.",
      "Diuretic effect: patients may notice increased urination, especially at higher doses.",
      "Avoid concurrent use of high-potassium foods (bananas, oranges, potatoes) and potassium supplements.",
      "ACE inhibitors, ARBs, and NSAIDs increase hyperkalemia risk — review medication list.",
      "Typically started at 25–50 mg/day; titrated to 100–200 mg/day.",
    ]
  },

  {
    id: "methotrexate",
    drug: "Methotrexate",
    brand: "Otrexup, Rasuvo (generic oral widely available)",
    type: "Conventional Systemic",
    typeColor: "navy",
    indication: "Plaque Psoriasis, Psoriatic Arthritis, Atopic Dermatitis (off-label)",
    rems: null,
    blackBox: true,
    blackBoxText: "Hepatotoxicity (cumulative dose-dependent), embryo-fetal toxicity, immunosuppression, pulmonary toxicity. Requires close monitoring. Folic acid supplementation required.",
    baselineLabs: [
      { test: "CBC with differential", reason: "Baseline WBC, ANC, platelets — bone marrow suppression risk" },
      { test: "CMP (LFTs + Creatinine/BUN)", reason: "Hepatotoxicity risk; renally cleared — renal impairment increases toxicity risk" },
      { test: "Hepatitis B surface antigen (HBsAg) + core antibody (HBcAb)", reason: "MTX can reactivate HBV — screen before initiation" },
      { test: "Hepatitis C antibody", reason: "Active hepatitis C is a relative contraindication" },
      { test: "Pregnancy Test (WOCBP)", reason: "MTX is teratogenic and embryotoxic. Strict contraception required." },
      { test: "Chest X-ray", reason: "Baseline pulmonary assessment (especially if symptoms or risk factors)" },
    ],
    ongoingLabs: [
      { test: "CBC with differential", frequency: "Every 4–8 weeks × first 3 months, then every 1–3 months once stable", notes: "Critical to detect bone marrow suppression early." },
      { test: "CMP (LFTs + Creatinine)", frequency: "Every 4–8 weeks × first 3 months, then every 1–3 months", notes: "Cumulative hepatotoxicity is a long-term concern. LFT elevation warrants hold or dose reduction." },
      { test: "Folic acid supplementation", frequency: "Daily — co-prescribe 1 mg/day", notes: "Reduces mucositis and GI side effects. Should be taken on non-MTX days." },
    ],
    watchFor: [
      { test: "WBC", threshold: "< 3,500/mm³ (or ANC < 2,000)", action: "HOLD therapy — notify physician", severity: "danger", detail: "Risk of immunosuppression and serious infection. Hold until recovery; consider dose reduction on resumption." },
      { test: "Platelets", threshold: "< 100,000/mm³", action: "HOLD therapy — notify physician", severity: "danger", detail: "Thrombocytopenia; risk of bleeding. Hold until platelet recovery." },
      { test: "AST or ALT", threshold: "> 3× ULN", action: "HOLD therapy — reassess", severity: "caution", detail: "LFT elevation warrants hold. Recheck in 2–4 weeks. Consider biopsy if persistent elevation at cumulative dose ≥1.5 g." },
      { test: "AST or ALT", threshold: "2–3× ULN (persistent)", action: "Dose reduction — monitor closely", severity: "caution", detail: "Persistent mild-to-moderate elevation: dose reduction and recheck within 4 weeks." },
      { test: "Serum Creatinine", threshold: "Significant rise above baseline", action: "Hold / dose reduce — nephrology consult if needed", severity: "caution", detail: "MTX is renally cleared. Renal impairment causes drug accumulation and increased toxicity." },
      { test: "MCV (Mean Corpuscular Volume)", threshold: "Rising MCV above normal", action: "Monitor — possible folate deficiency", severity: "watch", detail: "Macrocytosis may indicate folate depletion. Ensure patient is taking folic acid daily." },
      { test: "Serum Albumin", threshold: "< 3.0 g/dL", action: "Hold — nutritional assessment + physician review", severity: "caution", detail: "Low albumin increases free MTX levels and toxicity risk due to reduced protein binding." },
    ],
    notes: [
      "Prescribe folic acid 1 mg daily on non-MTX days (or daily) — reduces side effects without significantly reducing efficacy.",
      "Avoid alcohol during MTX therapy — synergistic hepatotoxicity.",
      "Avoid NSAIDs and sulfonamides — increase MTX toxicity by reducing renal clearance.",
      "Cumulative dose tracking: liver biopsy was historically recommended at >1.5 g cumulative dose; newer guidelines use elastography (FibroScan) as a non-invasive alternative.",
      "Patients should not receive live vaccines while on MTX.",
    ]
  },

  {
    id: "cyclosporine",
    drug: "Cyclosporine",
    brand: "Neoral, Gengraf (generic)",
    type: "Conventional Systemic",
    typeColor: "navy",
    indication: "Severe Plaque Psoriasis, Atopic Dermatitis (short-term)",
    rems: null,
    blackBox: true,
    blackBoxText: "Nephrotoxicity (dose-dependent), hypertension, immunosuppression. Increased risk of malignancy (lymphoma, skin cancers). Not for long-term use (>1 year) in dermatology.",
    baselineLabs: [
      { test: "BMP (Creatinine, BUN, Electrolytes, K⁺, Mg²⁺)", reason: "Baseline renal function — cyclosporine is nephrotoxic" },
      { test: "CBC", reason: "Baseline blood count" },
      { test: "Fasting Lipid Panel", reason: "Cyclosporine can raise LDL/cholesterol" },
      { test: "Uric Acid", reason: "Can cause hyperuricemia/gout" },
      { test: "Urinalysis", reason: "Baseline renal assessment" },
      { test: "Blood Pressure (2 readings)", reason: "Hypertension is a major side effect — document baseline BP carefully" },
      { test: "Magnesium", reason: "Cyclosporine causes magnesium wasting" },
    ],
    ongoingLabs: [
      { test: "BMP (Creatinine + Electrolytes + K⁺ + Mg²⁺)", frequency: "Every 2 weeks × first 3 months, then monthly", notes: "Creatinine is the key monitoring parameter. Magnesium supplementation often needed." },
      { test: "CBC + Lipids + LFTs", frequency: "Every 1–3 months", notes: "Monitor for anemia, dyslipidemia, liver enzyme changes." },
      { test: "Blood Pressure", frequency: "Every visit (ideally every 2 weeks initially)", notes: "Hypertension is common and dose-dependent. Two readings, seated." },
      { test: "Uric Acid", frequency: "Every 3 months", notes: "Gout can be triggered or worsened." },
    ],
    watchFor: [
      { test: "Serum Creatinine", threshold: "> 25% above baseline", action: "Reduce dose by 25–50% — recheck in 2 weeks", severity: "caution", detail: "Early nephrotoxicity. Dose reduction usually reverses changes if caught early." },
      { test: "Serum Creatinine", threshold: "> 50% above baseline", action: "HOLD therapy — notify physician immediately", severity: "danger", detail: "Significant nephrotoxicity. Hold and reassess. May require nephrology consultation." },
      { test: "Blood Pressure", threshold: "SBP ≥ 140 or DBP ≥ 90 (confirmed)", action: "Dose reduction or antihypertensive therapy", severity: "caution", detail: "If BP remains elevated despite dose reduction, consider calcium channel blocker (amlodipine preferred — avoid verapamil/diltiazem which raise cyclosporine levels)." },
      { test: "Potassium (K⁺)", threshold: "> 5.5 mEq/L", action: "Dose reduction — avoid potassium-sparing agents", severity: "caution", detail: "Cyclosporine reduces renal potassium excretion. Avoid spironolactone, triamterene, ACE inhibitors if possible." },
      { test: "Duration of therapy", threshold: "> 12 months continuous", action: "Reassess — dermatology use limited to 1 year max", severity: "caution", detail: "Cumulative nephrotoxicity and malignancy risk increase with duration. Plan transition to alternative therapy." },
    ],
    notes: [
      "Must use the microemulsion formulation (Neoral/Gengraf) — NOT the older Sandimmune formulation (different bioavailability).",
      "Avoid grapefruit and grapefruit juice — increases cyclosporine blood levels significantly.",
      "Drug interactions are extensive: statins, fluoroquinolones, antifungals, NSAIDs — review full medication list.",
      "Sun protection is critical — immunosuppression increases risk of squamous cell carcinoma.",
      "Not recommended for patients with uncontrolled hypertension or renal impairment.",
    ]
  },

  {
    id: "acitretin",
    drug: "Acitretin",
    brand: "Soriatane",
    type: "Retinoid",
    typeColor: "purple",
    indication: "Plaque Psoriasis, Palmoplantar Psoriasis, Pustular Psoriasis, Ichthyoses",
    rems: null,
    blackBox: true,
    blackBoxText: "Teratogenicity — Category X. Contraindicated in pregnancy and women who intend to become pregnant within 3 years of stopping. UNIQUE WARNING: Alcohol converts acitretin to etretinate (half-life 168 days vs 49 hours), extending teratogenic risk. Absolute alcohol prohibition required.",
    baselineLabs: [
      { test: "CBC", reason: "Baseline blood count" },
      { test: "CMP (LFTs)", reason: "Hepatotoxicity risk — baseline AST, ALT, alkaline phosphatase" },
      { test: "Fasting Lipid Panel", reason: "Acitretin significantly raises triglycerides and LDL; lowers HDL" },
      { test: "Pregnancy Test (urine + serum)", reason: "WOCBP: two negative pregnancy tests required before starting (one at least 2 weeks before first dose)" },
      { test: "Glucose (fasting)", reason: "Retinoids can affect glycemic control" },
    ],
    ongoingLabs: [
      { test: "CBC + CMP (LFTs) + Fasting Lipid Panel", frequency: "At 4 weeks, then every 1–3 months", notes: "Lipid monitoring is critical — triglycerides commonly rise significantly." },
      { test: "Pregnancy Test", frequency: "Monthly — WOCBP only", notes: "Required throughout therapy AND for 3 years after stopping due to teratogenic risk from etretinate conversion." },
    ],
    watchFor: [
      { test: "Triglycerides", threshold: "≥ 500 mg/dL", action: "HOLD or STOP therapy — pancreatitis risk", severity: "danger", detail: "Pancreatitis can be fatal. Hold therapy. Dietary changes, omega-3 supplementation, or dose reduction may allow cautious retry." },
      { test: "Triglycerides", threshold: "300–499 mg/dL", action: "Dose reduce — dietary intervention + recheck", severity: "caution", detail: "Dietary low-fat intervention and dose reduction. Recheck in 4 weeks." },
      { test: "AST or ALT", threshold: "> 3× ULN", action: "HOLD therapy — evaluate for hepatotoxicity", severity: "danger", detail: "Hold and recheck in 2–4 weeks. Discontinue if elevation persists." },
      { test: "Pregnancy Test", threshold: "Positive — at ANY time", action: "STOP immediately — teratology consultation required", severity: "danger", detail: "Teratogenic risk extends 3 years post-therapy. Teratology hotline: 1-800-526-9248." },
    ],
    notes: [
      "ABSOLUTE alcohol prohibition — even small amounts convert acitretin to etretinate, which is stored in fat and has a 168-day half-life, dramatically extending teratogenic risk.",
      "Contraception required during therapy and for 3 years after stopping (much longer than isotretinoin).",
      "Must not donate blood during therapy or for 3 years after stopping.",
      "Mucocutaneous side effects (dry lips, cheilitis, hair thinning) are universal — manage proactively.",
      "Better tolerated than isotretinoin in older patients; does not cause the same liver toxicity profile.",
    ]
  },

  // ─── BIOLOGICS ──────────────────────────────────────────────

  {
    id: "dupilumab",
    drug: "Dupilumab",
    brand: "Dupixent",
    type: "Biologic (IL-4Rα inhibitor)",
    typeColor: "blue",
    indication: "Atopic Dermatitis, Prurigo Nodularis, Asthma, CRSwNP",
    rems: null,
    blackBox: false,
    baselineLabs: [
      { test: "No mandatory labs required by FDA label", reason: "Dupilumab has an excellent safety profile with no required pre-treatment labs." },
      { test: "Consider: CBC, CMP", reason: "Optional baseline per physician preference, especially in complex patients." },
      { test: "Consider: Eosinophil count", reason: "Eosinophil counts can transiently rise with dupilumab — useful baseline." },
    ],
    ongoingLabs: [
      { test: "No mandatory routine labs required", frequency: "No fixed schedule", notes: "No routine bloodwork required by the FDA label. Annual comprehensive labs may be ordered per physician preference." },
      { test: "Eosinophil count (optional)", frequency: "Periodically if elevated at baseline", notes: "Transient eosinophilia is common and usually clinically insignificant. Persistent or very high counts warrant evaluation." },
    ],
    watchFor: [
      { test: "Eosinophil count", threshold: "Markedly elevated (> 1500–5000/μL persistent)", action: "Monitor and evaluate — consult physician", severity: "watch", detail: "Transient mild-to-moderate eosinophilia is common with dupilumab and usually not clinically significant. Persistent marked eosinophilia should be evaluated for eosinophilic conditions." },
      { test: "Ocular symptoms", threshold: "Conjunctivitis, keratitis, dry eye (new or worsening)", action: "Document and notify physician — ophthalmology referral if severe", severity: "watch", detail: "The most common side effect of dupilumab. Usually mild but can be bothersome. Ophthalmology co-management often needed." },
    ],
    notes: [
      "One of the safest systemic medications in dermatology — no black box warning.",
      "No live vaccine restrictions per label; however, update vaccines prior to initiation if possible.",
      "Conjunctivitis is the most common adverse effect (~10% of patients with AD) — manage proactively with lubricating eye drops.",
      "Injection site reactions are common early on; typically improve after first few doses.",
    ]
  },

  {
    id: "adalimumab",
    drug: "Adalimumab",
    brand: "Humira (+ biosimilars)",
    type: "Biologic (TNF-α inhibitor)",
    typeColor: "blue",
    indication: "Plaque Psoriasis, Psoriatic Arthritis, Hidradenitis Suppurativa",
    rems: null,
    blackBox: true,
    blackBoxText: "Serious infections (including TB, invasive fungal), malignancy (including lymphoma). Reactivation of latent TB reported. Screen for TB and HBV before initiating.",
    baselineLabs: [
      { test: "TB Screening (QuantiFERON-TB Gold or TST)", reason: "Latent TB reactivation risk — screening is mandatory before initiation" },
      { test: "Hepatitis B surface antigen (HBsAg) + core antibody (HBcAb)", reason: "HBV reactivation can be severe or fatal. Prophylaxis or referral needed if positive." },
      { test: "Hepatitis C antibody", reason: "Relative contraindication — baseline assessment" },
      { test: "CBC with differential", reason: "Baseline — cytopenia is a potential adverse effect" },
      { test: "CMP (LFTs)", reason: "Baseline liver function" },
      { test: "Pregnancy Test (if applicable)", reason: "Discuss pregnancy planning; TNF inhibitors generally considered acceptable in first/second trimester but require discussion" },
    ],
    ongoingLabs: [
      { test: "CBC + CMP", frequency: "Every 6–12 months", notes: "No fixed mandatory schedule; annual labs are standard practice in most derm settings." },
      { test: "TB Screening update", frequency: "Annually (or if new risk factors develop)", notes: "Repeat testing if patient has new exposure risk." },
    ],
    watchFor: [
      { test: "Signs of TB / infection", threshold: "Fever, night sweats, cough, weight loss, new lymphadenopathy", action: "HOLD therapy — evaluate for TB or serious infection", severity: "danger", detail: "Discontinue and evaluate for active TB or other serious infection before restarting." },
      { test: "HBV serology (HBsAg)", threshold: "Positive result at baseline", action: "Do NOT initiate without hepatology consultation and prophylactic antiviral therapy", severity: "danger", detail: "HBV reactivation can cause fulminant hepatitis. Require HBV management plan before starting." },
      { test: "WBC / ANC", threshold: "ANC < 1,000/mm³", action: "Hold — notify physician", severity: "caution", detail: "Rare cytopenia with TNF inhibitors. Evaluate and restart when counts recover." },
      { test: "LFTs", threshold: "> 3× ULN", action: "Hold — evaluate for drug-induced hepatotoxicity", severity: "caution", detail: "TNF inhibitors have been associated with rare hepatotoxicity. Hold pending evaluation." },
    ],
    notes: [
      "Multiple biosimilars are now available (Hadlima, Hyrimoz, Cyltezo, Yusimry, etc.) — check formulary for preferred agent.",
      "Patients should not receive live vaccines while on TNF inhibitors.",
      "Demyelinating disease (MS), CHF, and lupus-like syndrome are rare but reported — discontinue if these develop.",
      "Injection site reactions are common; rotating sites helps.",
    ]
  },

  {
    id: "secukinumab",
    drug: "Secukinumab",
    brand: "Cosentyx",
    type: "Biologic (IL-17A inhibitor)",
    typeColor: "blue",
    indication: "Plaque Psoriasis, Psoriatic Arthritis, Ankylosing Spondylitis",
    rems: null,
    blackBox: false,
    baselineLabs: [
      { test: "TB Screening (QuantiFERON-TB Gold or TST)", reason: "Latent TB screening required before initiation" },
      { test: "Hepatitis B surface antigen (HBsAg) + core antibody (HBcAb)", reason: "HBV baseline assessment" },
      { test: "CBC + CMP (optional, per practice)", reason: "Baseline labs per physician preference" },
    ],
    ongoingLabs: [
      { test: "No mandatory routine labs required by label", frequency: "Per physician preference", notes: "Annual CBC/CMP is reasonable but not mandated. No fixed schedule per FDA label." },
      { test: "Screen for IBD symptoms", frequency: "Every visit", notes: "Ask about new or worsening abdominal pain, diarrhea, rectal bleeding. IL-17 inhibitors can trigger new-onset IBD." },
    ],
    watchFor: [
      { test: "IBD symptoms", threshold: "New abdominal pain, diarrhea, or rectal bleeding", action: "HOLD therapy — GI referral", severity: "caution", detail: "IL-17 inhibitors are contraindicated in active IBD. Cosentyx should be used with extreme caution in patients with IBD history. New IBD onset: discontinue." },
      { test: "Candida infections", threshold: "Recurrent or severe oral/esophageal candidiasis", action: "Treat infection; consider dose adjustment or discontinuation", severity: "watch", detail: "Mucocutaneous candidiasis (especially oral) is more frequent with IL-17 inhibitors. Usually mild and responds to antifungals." },
      { test: "Neutropenia", threshold: "ANC < 1,000/mm³", action: "Hold therapy — notify physician", severity: "caution", detail: "Rare but documented. Hold until neutrophil recovery." },
    ],
    notes: [
      "IL-17 inhibitors have no black box warning — generally very well tolerated.",
      "No live vaccines during therapy.",
      "IBD history is a relative contraindication — use with caution or avoid in Crohn's disease.",
      "Candida colonization of the gut plays a role — probiotics not contraindicated but no specific recommendation.",
    ]
  },

  {
    id: "ixekizumab",
    drug: "Ixekizumab",
    brand: "Taltz",
    type: "Biologic (IL-17A inhibitor)",
    typeColor: "blue",
    indication: "Plaque Psoriasis, Psoriatic Arthritis, Nail Psoriasis, Ankylosing Spondylitis",
    rems: null,
    blackBox: false,
    baselineLabs: [
      { test: "TB Screening (QuantiFERON-TB Gold or TST)", reason: "Mandatory TB screening before initiation" },
      { test: "Hepatitis B surface antigen (HBsAg) + core antibody (HBcAb)", reason: "HBV baseline assessment" },
      { test: "CBC + CMP (optional, per practice)", reason: "Baseline per physician preference" },
    ],
    ongoingLabs: [
      { test: "No mandatory routine labs required", frequency: "Per physician preference", notes: "Same profile as secukinumab. Annual labs reasonable but not mandated." },
    ],
    watchFor: [
      { test: "IBD symptoms", threshold: "New GI symptoms", action: "Hold — GI referral if IBD suspected", severity: "caution", detail: "Same IBD concern as secukinumab. Particularly caution with Crohn's disease." },
      { test: "Candida infections", threshold: "Recurrent mucocutaneous candidiasis", action: "Antifungal treatment; evaluate need for dose adjustment", severity: "watch", detail: "More common with IL-17 inhibitors than other biologics. Generally mild." },
      { test: "Neutropenia", threshold: "ANC < 1,000/mm³", action: "Hold — notify physician", severity: "caution", detail: "Hold until recovery. Uncommon but possible." },
    ],
    notes: [
      "No black box warning.",
      "Specifically approved for nail psoriasis — good data for this indication.",
      "No live vaccines.",
      "Similar IBD caution as secukinumab.",
    ]
  },

  {
    id: "bimekizumab",
    drug: "Bimekizumab",
    brand: "Bimzelx",
    type: "Biologic (IL-17A and IL-17F inhibitor)",
    typeColor: "blue",
    indication: "Plaque Psoriasis, Psoriatic Arthritis",
    rems: null,
    blackBox: false,
    baselineLabs: [
      { test: "TB Screening (QuantiFERON-TB Gold or TST)", reason: "Mandatory TB screening before initiation" },
      { test: "Hepatitis B surface antigen (HBsAg) + core antibody (HBcAb)", reason: "HBV baseline assessment" },
      { test: "CBC + CMP (optional)", reason: "Baseline per physician preference" },
    ],
    ongoingLabs: [
      { test: "No mandatory routine labs required", frequency: "Per physician preference", notes: "Annual labs are reasonable practice. No fixed mandatory monitoring schedule per FDA label." },
    ],
    watchFor: [
      { test: "Oral candidiasis", threshold: "Symptomatic oral candidiasis", action: "Antifungal treatment — rarely requires discontinuation", severity: "watch", detail: "Higher rate of oral candidiasis compared to IL-17A-only inhibitors (due to dual IL-17A/F blockade). Usually mild and responds to a single course of fluconazole." },
      { test: "IBD symptoms", threshold: "New GI symptoms", action: "Hold — GI evaluation", severity: "caution", detail: "Same IBD risk class as IL-17 inhibitors." },
    ],
    notes: [
      "Dual IL-17A and IL-17F blockade provides higher PASI 90/100 clearance rates than IL-17A-only agents.",
      "Higher oral candidiasis rate is the trade-off for superior efficacy — counsel patients upfront.",
      "No black box warning.",
      "No live vaccines.",
      "Approved in August 2023 for moderate-to-severe plaque psoriasis.",
    ]
  },

  {
    id: "guselkumab",
    drug: "Guselkumab",
    brand: "Tremfya",
    type: "Biologic (IL-23 inhibitor)",
    typeColor: "blue",
    indication: "Plaque Psoriasis, Psoriatic Arthritis",
    rems: null,
    blackBox: false,
    baselineLabs: [
      { test: "TB Screening (QuantiFERON-TB Gold or TST)", reason: "Mandatory TB screening" },
      { test: "Hepatitis B surface antigen (HBsAg) + core antibody (HBcAb)", reason: "HBV baseline assessment" },
      { test: "CBC + CMP (optional)", reason: "Baseline per physician preference" },
    ],
    ongoingLabs: [
      { test: "No mandatory routine labs", frequency: "Annual per practice preference", notes: "IL-23 inhibitors have a very favorable safety profile. No mandatory lab schedule." },
    ],
    watchFor: [
      { test: "Infections", threshold: "Any serious or unusual infection", action: "Hold therapy — evaluate and treat infection", severity: "caution", detail: "Serious infections are possible but less frequent than TNF inhibitors. Common infections (URI) generally do not require hold." },
    ],
    notes: [
      "Very clean safety profile — one of the safest biologics in dermatology.",
      "No black box warning.",
      "No live vaccines.",
      "Conveniently dosed: every 8 weeks after loading doses.",
      "No significant IBD or candidiasis concerns unlike IL-17 inhibitors.",
    ]
  },

  {
    id: "risankizumab",
    drug: "Risankizumab",
    brand: "Skyrizi",
    type: "Biologic (IL-23 inhibitor)",
    typeColor: "blue",
    indication: "Plaque Psoriasis, Psoriatic Arthritis, Crohn's Disease, Ulcerative Colitis",
    rems: null,
    blackBox: false,
    baselineLabs: [
      { test: "TB Screening (QuantiFERON-TB Gold or TST)", reason: "Mandatory TB screening" },
      { test: "Hepatitis B surface antigen (HBsAg) + core antibody (HBcAb)", reason: "HBV baseline assessment" },
      { test: "CBC + CMP (optional)", reason: "Baseline per physician preference" },
    ],
    ongoingLabs: [
      { test: "No mandatory routine labs", frequency: "Annual per practice preference", notes: "Very favorable safety profile. No mandatory periodic labs per label." },
    ],
    watchFor: [
      { test: "Infections", threshold: "Serious or unusual infection", action: "Hold — evaluate and treat", severity: "caution", detail: "As with all biologics, hold during serious active infections. Restart when resolved." },
    ],
    notes: [
      "Excellent efficacy — very high PASI 90 and PASI 100 rates.",
      "Convenient dosing: every 12 weeks after 2 loading doses.",
      "No black box warning. Very clean safety profile.",
      "Notably also approved for Crohn's disease — useful for patients with comorbid IBD.",
      "No live vaccines.",
    ]
  },

  // ─── JAK INHIBITORS ─────────────────────────────────────────

  {
    id: "upadacitinib",
    drug: "Upadacitinib",
    brand: "Rinvoq",
    type: "JAK Inhibitor (JAK1-selective)",
    typeColor: "orange",
    indication: "Atopic Dermatitis",
    rems: null,
    blackBox: true,
    blackBoxText: "Serious infections, mortality, MACE (Major Adverse Cardiovascular Events), malignancy (including lymphoma), thrombosis (DVT, PE, arterial). Use with caution in patients aged ≥50 with cardiovascular risk factors.",
    baselineLabs: [
      { test: "CBC with differential", reason: "Baseline hematologic status — cytopenias preclude initiation" },
      { test: "CMP (LFTs + Creatinine)", reason: "Baseline liver and renal function" },
      { test: "Fasting Lipid Panel", reason: "JAK inhibitors raise LDL and HDL; baseline essential" },
      { test: "TB Screening (QuantiFERON-TB Gold or TST)", reason: "Mandatory — risk of TB reactivation" },
      { test: "Hepatitis B surface antigen (HBsAg) + core antibody (HBcAb)", reason: "HBV reactivation risk" },
      { test: "Hepatitis C antibody", reason: "Baseline HCV assessment" },
      { test: "Pregnancy Test (WOCBP)", reason: "Contraindicated in pregnancy" },
    ],
    ongoingLabs: [
      { test: "CBC with differential", frequency: "At 4 weeks, then every 3 months", notes: "Monitor for anemia, lymphopenia, neutropenia — absolute thresholds determine continuation." },
      { test: "Fasting Lipid Panel", frequency: "At 12 weeks, then annually", notes: "LDL and total cholesterol commonly rise; manage per cardiovascular guidelines." },
      { test: "CMP (LFTs)", frequency: "Every 3–6 months", notes: "Hepatotoxicity is possible. Monitor LFTs periodically." },
      { test: "TB Screen update", frequency: "Annually or if new exposure risk", notes: "Annual re-screening in high-risk populations." },
    ],
    watchFor: [
      { test: "Hemoglobin (Hgb)", threshold: "< 8 g/dL", action: "Do NOT initiate / STOP therapy", severity: "danger", detail: "Significant anemia precludes initiation. If Hgb drops ≥2 g/dL below baseline AND falls below 8 g/dL during therapy, hold until recovery." },
      { test: "ANC (Absolute Neutrophil Count)", threshold: "< 1,000/mm³", action: "Do NOT initiate / HOLD therapy", severity: "danger", detail: "Risk of serious infection. Hold until ANC ≥ 1,000. If persistent, discontinue." },
      { test: "Absolute Lymphocyte Count (ALC)", threshold: "< 500/mm³", action: "Do NOT initiate / HOLD therapy", severity: "danger", detail: "Lymphopenia increases infection risk. Hold until ALC ≥ 500." },
      { test: "Platelets", threshold: "< 50,000/mm³", action: "Do NOT initiate / HOLD therapy", severity: "danger", detail: "Risk of bleeding. Hold until platelets recover above 50,000." },
      { test: "LDL Cholesterol", threshold: "Significantly elevated above baseline or ≥ 190 mg/dL", action: "Manage per cardiovascular guidelines — notify physician", severity: "caution", detail: "Lipid-lowering therapy may be indicated. Cardiovascular risk assessment with each significant rise." },
      { test: "LFTs (AST/ALT)", threshold: "> 3× ULN", action: "Hold — evaluate for drug-induced hepatotoxicity", severity: "caution", detail: "Hold and recheck. Discontinue if confirmed drug-induced liver injury." },
      { test: "DVT/PE symptoms", threshold: "Leg swelling, calf pain, chest pain, shortness of breath", action: "HOLD — emergency evaluation", severity: "danger", detail: "Class-wide JAK inhibitor risk. Patients should know to report these symptoms immediately. VTE is in the black box." },
    ],
    notes: [
      "JAK inhibitor class-wide black box warning: serious infections, MACE, malignancy (lymphoma, non-melanoma skin cancers), thrombosis.",
      "Use lowest effective dose. Avoid in patients with active serious infections.",
      "Avoid in patients with known malignancy unless benefit outweighs risk.",
      "Live vaccines contraindicated — update vaccines before initiation if possible.",
      "Herpes zoster reactivation risk — consider Shingrix vaccination prior to starting if age-appropriate.",
      "Do not use with other JAK inhibitors, biologics, or strong immunosuppressants concurrently.",
    ]
  },

  {
    id: "abrocitinib",
    drug: "Abrocitinib",
    brand: "Cibinqo",
    type: "JAK Inhibitor (JAK1-selective)",
    typeColor: "orange",
    indication: "Atopic Dermatitis (moderate-to-severe)",
    rems: null,
    blackBox: true,
    blackBoxText: "Same class-wide JAK inhibitor warning: serious infections, mortality, MACE, malignancy, thrombosis. Platelet monitoring is particularly important in the first 4 weeks.",
    baselineLabs: [
      { test: "CBC with differential (including Platelets)", reason: "Platelet count is especially critical — thrombocytopenia precludes initiation" },
      { test: "CMP (LFTs + Creatinine)", reason: "Baseline liver and renal function" },
      { test: "Fasting Lipid Panel", reason: "Baseline lipids — JAK inhibitors raise cholesterol" },
      { test: "TB Screening (QuantiFERON-TB Gold or TST)", reason: "Mandatory TB screening" },
      { test: "Hepatitis B (HBsAg + HBcAb) + Hepatitis C antibody", reason: "Viral hepatitis screen" },
      { test: "Pregnancy Test (WOCBP)", reason: "Contraindicated in pregnancy" },
    ],
    ongoingLabs: [
      { test: "CBC with differential (ESPECIALLY Platelets)", frequency: "At 4 weeks — MANDATORY. Then every 3 months.", notes: "Platelet drop in the first 4 weeks is the most important monitoring point for Cibinqo. This is the key differentiator from other JAK inhibitors." },
      { test: "Fasting Lipid Panel", frequency: "At 12 weeks, then annually", notes: "LDL commonly rises; manage per guidelines." },
      { test: "CMP (LFTs)", frequency: "Every 3–6 months", notes: "Liver function monitoring." },
    ],
    watchFor: [
      { test: "Platelets", threshold: "< 150,000/mm³ at baseline", action: "Do NOT initiate therapy", severity: "danger", detail: "Unique to Cibinqo among JAK inhibitors — do not start if baseline platelets below 150,000." },
      { test: "Platelets (during therapy)", threshold: "Confirmed < 100,000/mm³", action: "INTERRUPT therapy — notify physician", severity: "danger", detail: "Interrupt until platelets recover to ≥ 100,000. This is why the 4-week CBC check is mandatory." },
      { test: "Hemoglobin (Hgb)", threshold: "< 8 g/dL", action: "Do NOT initiate / HOLD therapy", severity: "danger", detail: "Same threshold as other JAK inhibitors. Hold until recovery." },
      { test: "ANC", threshold: "< 1,000/mm³", action: "Do NOT initiate / HOLD therapy", severity: "danger", detail: "Infection risk. Hold and reassess." },
      { test: "LDL / Total Cholesterol", threshold: "Significant elevation", action: "Manage per cardiovascular guidelines", severity: "caution", detail: "Lipid-lowering therapy may be needed." },
      { test: "DVT/PE symptoms", threshold: "Any symptoms of thrombosis", action: "HOLD — emergency evaluation", severity: "danger", detail: "Class-wide black box risk. Highest risk in patients aged ≥50 with CV risk factors." },
    ],
    notes: [
      "The 4-week CBC with platelets is MANDATORY and uniquely important for Cibinqo — do not skip this.",
      "Same class-wide JAK inhibitor black box as other agents.",
      "Available in 100 mg and 200 mg daily doses.",
      "Live vaccines contraindicated.",
      "Herpes zoster risk — consider Shingrix pre-treatment.",
    ]
  },

  {
    id: "ritlecitinib",
    drug: "Ritlecitinib",
    brand: "Litfulo",
    type: "JAK Inhibitor (JAK3 / TEC family)",
    typeColor: "orange",
    indication: "Alopecia Areata (age ≥12 years)",
    rems: null,
    blackBox: true,
    blackBoxText: "Class-wide JAK inhibitor warning: serious infections, mortality, MACE, malignancy, thrombosis. First JAK inhibitor approved for AA in adolescents ≥12.",
    baselineLabs: [
      { test: "CBC with differential", reason: "Baseline hematologic status — cytopenias preclude initiation" },
      { test: "CMP (LFTs + Creatinine)", reason: "Baseline liver and renal function" },
      { test: "Fasting Lipid Panel", reason: "Baseline lipids" },
      { test: "TB Screening (QuantiFERON-TB Gold or TST)", reason: "Mandatory TB screening" },
      { test: "Hepatitis B (HBsAg + HBcAb) + Hepatitis C antibody", reason: "Viral hepatitis screen" },
      { test: "Pregnancy Test (WOCBP)", reason: "Contraindicated in pregnancy" },
    ],
    ongoingLabs: [
      { test: "CBC with differential", frequency: "Periodically — every 3 months", notes: "Monitor for cytopenias as with other JAK inhibitors." },
      { test: "Fasting Lipid Panel", frequency: "At 12 weeks, then annually", notes: "Lipid monitoring standard for class." },
      { test: "CMP (LFTs)", frequency: "Every 3–6 months", notes: "Periodic liver function monitoring." },
    ],
    watchFor: [
      { test: "Hemoglobin (Hgb)", threshold: "< 8 g/dL", action: "Do NOT initiate / HOLD therapy", severity: "danger", detail: "Hold therapy and evaluate. Resume when Hgb ≥ 8 g/dL." },
      { test: "ANC", threshold: "< 1,000/mm³", action: "Do NOT initiate / HOLD therapy", severity: "danger", detail: "Infection risk. Hold and reassess." },
      { test: "ALC (lymphocytes)", threshold: "< 500/mm³", action: "Do NOT initiate / HOLD", severity: "danger", detail: "Lymphopenia. Hold and monitor." },
      { test: "Platelets", threshold: "< 50,000/mm³", action: "Do NOT initiate / HOLD", severity: "danger", detail: "Bleeding risk." },
      { test: "Herpes zoster", threshold: "Active herpes zoster infection", action: "Hold therapy — treat infection first", severity: "caution", detail: "Zoster reactivation is a recognized JAK inhibitor class effect. Shingrix vaccination recommended before starting if age-appropriate (≥50)." },
    ],
    notes: [
      "First approved treatment specifically for alopecia areata in patients as young as 12 years.",
      "Same class-wide JAK inhibitor black box warning.",
      "Live vaccines contraindicated.",
      "Hair regrowth typically seen at 6 months; full assessment at 12 months.",
      "Mechanism involves JAK3 and TEC kinases — slightly different selectivity profile than JAK1-selective agents.",
    ]
  },

  {
    id: "deuruxolitinib",
    drug: "Deuruxolitinib",
    brand: "Leqselvi",
    type: "JAK Inhibitor (JAK1/JAK2)",
    typeColor: "orange",
    indication: "Alopecia Areata (adults)",
    rems: null,
    blackBox: true,
    blackBoxText: "Class-wide JAK inhibitor warning: serious infections, mortality, MACE, malignancy, thrombosis. Approved June 2024.",
    baselineLabs: [
      { test: "CBC with differential", reason: "Baseline — cytopenias preclude initiation" },
      { test: "CMP (LFTs + Creatinine)", reason: "Baseline liver and renal function" },
      { test: "Fasting Lipid Panel", reason: "Baseline lipids — class effect of JAK inhibitors" },
      { test: "TB Screening (QuantiFERON-TB Gold or TST)", reason: "Mandatory TB screening" },
      { test: "Hepatitis B (HBsAg + HBcAb) + Hepatitis C antibody", reason: "Viral hepatitis screen" },
      { test: "Pregnancy Test (WOCBP)", reason: "Contraindicated in pregnancy" },
    ],
    ongoingLabs: [
      { test: "CBC with differential", frequency: "Every 3 months", notes: "Hematologic monitoring standard for class." },
      { test: "Fasting Lipid Panel", frequency: "At 12 weeks, then annually", notes: "Lipid management may be needed." },
      { test: "CMP (LFTs)", frequency: "Every 3–6 months", notes: "Liver function monitoring." },
    ],
    watchFor: [
      { test: "Hemoglobin (Hgb)", threshold: "< 8 g/dL", action: "Do NOT initiate / HOLD therapy", severity: "danger", detail: "Consistent threshold across JAK inhibitor class." },
      { test: "ANC", threshold: "< 1,000/mm³", action: "Do NOT initiate / HOLD", severity: "danger", detail: "Infection risk." },
      { test: "ALC", threshold: "< 500/mm³", action: "Do NOT initiate / HOLD", severity: "danger", detail: "Lymphopenia." },
      { test: "Platelets", threshold: "< 50,000/mm³", action: "Do NOT initiate / HOLD", severity: "danger", detail: "Bleeding risk." },
      { test: "LDL", threshold: "Significant elevation above baseline", action: "Manage per cardiovascular guidelines", severity: "caution", detail: "JAK inhibitor class lipid effect." },
    ],
    notes: [
      "FDA approved June 2024 for adults with alopecia areata.",
      "Available in 8 mg BID dosing.",
      "Same class-wide black box warning as all JAK inhibitors.",
      "Live vaccines contraindicated.",
      "Newer agent — long-term data still accumulating.",
    ]
  },

  {
    id: "baricitinib",
    drug: "Baricitinib",
    brand: "Olumiant",
    type: "JAK Inhibitor (JAK1/JAK2)",
    typeColor: "orange",
    indication: "Alopecia Areata (adults, ≥18 yrs)",
    rems: null,
    blackBox: true,
    blackBoxText: "Class-wide JAK inhibitor warning: serious infections, mortality, MACE, malignancy, thrombosis. The first JAK inhibitor FDA-approved for alopecia areata (June 2022).",
    baselineLabs: [
      { test: "CBC with differential", reason: "Baseline hematologic status" },
      { test: "CMP (LFTs + Creatinine)", reason: "Renal function is important — baricitinib is renally cleared; dose adjustment required for eGFR 30–60" },
      { test: "Fasting Lipid Panel", reason: "Baseline lipids" },
      { test: "TB Screening (QuantiFERON-TB Gold or TST)", reason: "Mandatory TB screening" },
      { test: "Hepatitis B (HBsAg + HBcAb) + Hepatitis C antibody", reason: "Viral hepatitis screen" },
      { test: "Pregnancy Test (WOCBP)", reason: "Contraindicated in pregnancy" },
    ],
    ongoingLabs: [
      { test: "CBC with differential", frequency: "At 4 weeks, then every 3 months", notes: "Key parameters: Hgb, ANC, ALC, platelets." },
      { test: "Fasting Lipid Panel", frequency: "At 12 weeks, then annually", notes: "LDL and HDL both rise — net cardiovascular effect requires assessment." },
      { test: "CMP (Creatinine/eGFR)", frequency: "Every 3–6 months", notes: "Dose adjustment required if eGFR drops to 30–60 mL/min. Avoid if eGFR < 30." },
    ],
    watchFor: [
      { test: "Hemoglobin (Hgb)", threshold: "< 8 g/dL", action: "Do NOT initiate / HOLD therapy", severity: "danger", detail: "Standard JAK inhibitor threshold. Hold until recovery." },
      { test: "ANC", threshold: "< 1,000/mm³", action: "Do NOT initiate / HOLD", severity: "danger", detail: "Infection risk." },
      { test: "ALC", threshold: "< 500/mm³", action: "Do NOT initiate / HOLD", severity: "danger", detail: "Lymphopenia." },
      { test: "Platelets", threshold: "< 50,000/mm³", action: "Do NOT initiate / HOLD", severity: "danger", detail: "Bleeding risk." },
      { test: "eGFR (Renal Function)", threshold: "eGFR 30–60 mL/min", action: "Dose reduce to 1 mg daily", severity: "caution", detail: "Baricitinib is renally cleared. Dose reduction required for moderate renal impairment." },
      { test: "eGFR (Renal Function)", threshold: "eGFR < 30 mL/min", action: "Do NOT use", severity: "danger", detail: "Contraindicated in severe renal impairment." },
      { test: "LDL", threshold: "Significant elevation", action: "Manage per cardiovascular guidelines", severity: "caution", detail: "Both LDL and HDL rise. Net effect: requires cardiovascular risk assessment." },
    ],
    notes: [
      "Renal dosing is unique to baricitinib among the derm JAK inhibitors — always check eGFR.",
      "For alopecia areata: dosed at 2 mg daily; dose can be increased to 4 mg for inadequate response.",
      "Same class-wide black box as all JAK inhibitors.",
      "Live vaccines contraindicated.",
      "Hair regrowth typically seen starting at 3–6 months of consistent therapy.",
    ]
  },

];
