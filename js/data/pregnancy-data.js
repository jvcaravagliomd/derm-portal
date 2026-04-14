/**
 * Dermatology Medications: Safety in Pregnancy and Breastfeeding
 * Reference for Dermatology MA Portal
 * Based on FDA categories, clinical evidence, and NCCN/AAD guidelines
 *
 * Safety Ratings:
 * - "safe" = generally considered safe / compatible
 * - "caution" = limited data / use only if benefit outweighs risk
 * - "avoid" = should be avoided if possible / alternatives preferred
 * - "contraindicated" = absolute contraindication
 */

const PREGNANCY_DATA = [
  // ========== TOPICAL CORTICOSTEROIDS ==========
  {
    id: "tc-001",
    drug: "Hydrocortisone",
    brand: "Generic (OTC/Rx)",
    category: "Topical Corticosteroids",
    pregnancyT1: "safe",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "safe",
    pregnancyNotes: "Low-potency topical corticosteroid. Safe when used on limited body surface areas in all trimesters. Minimal systemic absorption.",
    breastfeedingNotes: "Safe for breastfeeding. Avoid application directly to nipple area.",
    keyWarning: null
  },
  {
    id: "tc-002",
    drug: "Triamcinolone acetonide 0.1%",
    brand: "Kenalog, Triderm",
    category: "Topical Corticosteroids",
    pregnancyT1: "caution",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "caution",
    pregnancyNotes: "Medium-potency. Use with caution in T1, especially on large surface areas. Generally safe T2/T3 for short courses (2-4 weeks). Limit to <20% BSA.",
    breastfeedingNotes: "Limited systemic absorption. Caution with widespread or prolonged use; minimal expected in breast milk.",
    keyWarning: null
  },
  {
    id: "tc-003",
    drug: "Clobetasol propionate 0.05%",
    brand: "Temovate, Clobex",
    category: "Topical Corticosteroids",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "caution",
    breastfeeding: "caution",
    pregnancyNotes: "High-potency corticosteroid. Use only on limited areas for short durations (5-7 days max). Avoid occlusive dressings. Risk of fetal growth restriction with extensive use.",
    breastfeedingNotes: "Caution with use. Avoid on nipple/areola. Minimal absorption but monitor for signs of neonatal hypercortisolism.",
    keyWarning: null
  },
  {
    id: "tc-004",
    drug: "Betamethasone dipropionate 0.05%",
    brand: "Diprolene, Alphatrex",
    category: "Topical Corticosteroids",
    pregnancyT1: "caution",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "caution",
    pregnancyNotes: "High-potency. Limit use in T1; safe T2/T3 for short courses on localized areas. Avoid large BSA coverage and occlusion.",
    breastfeedingNotes: "Minimal systemic absorption expected. Use on small areas only.",
    keyWarning: null
  },
  {
    id: "tc-005",
    drug: "Fluocinonide 0.05%",
    brand: "Lidex, Vanos",
    category: "Topical Corticosteroids",
    pregnancyT1: "caution",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "caution",
    pregnancyNotes: "High-potency. Caution T1 with large areas. Safe T2/T3 for limited duration/area. Potential for low birthweight if used extensively.",
    breastfeedingNotes: "Caution with extensive use. Minimal expected transfer.",
    keyWarning: null
  },

  // ========== TOPICAL NON-STEROIDAL ==========
  {
    id: "tns-001",
    drug: "Tacrolimus",
    brand: "Protopic",
    category: "Topical Non-Steroidal",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "caution",
    breastfeeding: "caution",
    pregnancyNotes: "Calcineurin inhibitor with limited human pregnancy data. Animal studies do not show developmental toxicity. Use only if benefit clearly exceeds risk and alternatives unavailable.",
    breastfeedingNotes: "Minimal systemic absorption expected from topical use. Caution with extensive application. Avoid large areas of body coverage.",
    keyWarning: null
  },
  {
    id: "tns-002",
    drug: "Pimecrolimus",
    brand: "Elidel",
    category: "Topical Non-Steroidal",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "caution",
    breastfeeding: "caution",
    pregnancyNotes: "Calcineurin inhibitor. Limited human pregnancy data. Animal studies reveal no clear teratogenicity. Reserve for cases where alternatives unsuitable.",
    breastfeedingNotes: "Minimal systemic absorption. Caution with widespread body coverage.",
    keyWarning: null
  },
  {
    id: "tns-003",
    drug: "Crisaborole",
    brand: "Eucrisa",
    category: "Topical Non-Steroidal",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "caution",
    breastfeeding: "caution",
    pregnancyNotes: "Phosphodiesterase 4 inhibitor. Very limited pregnancy exposure data. No known human teratogenicity, but insufficient evidence. Use with caution if benefit justifies.",
    breastfeedingNotes: "Limited data on breast milk transfer. Caution recommended.",
    keyWarning: null
  },
  {
    id: "tns-004",
    drug: "Ruxolitinib cream",
    brand: "Opzelura",
    category: "Topical Non-Steroidal",
    pregnancyT1: "avoid",
    pregnancyT2: "avoid",
    pregnancyT3: "avoid",
    breastfeeding: "avoid",
    pregnancyNotes: "JAK inhibitor with systemic absorption potential from topical use. Teratogenic in animal models. Avoid throughout pregnancy.",
    breastfeedingNotes: "Avoid. Insufficient safety data.",
    keyWarning: "JAK inhibitor. Possible systemic absorption. Animal teratogenicity data. Avoid throughout pregnancy and breastfeeding."
  },
  {
    id: "tns-005",
    drug: "Tapinarof",
    brand: "Vtama",
    category: "Topical Non-Steroidal",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "caution",
    breastfeeding: "avoid",
    pregnancyNotes: "Novel aryl hydrocarbon receptor (AhR) modulator. Limited pregnancy data. Use only if alternatives exhausted and benefit clear.",
    breastfeedingNotes: "Avoid breastfeeding. Insufficient safety data for neonatal exposure.",
    keyWarning: null
  },
  {
    id: "tns-006",
    drug: "Azelaic acid",
    brand: "Finacea, Azelex",
    category: "Topical Non-Steroidal",
    pregnancyT1: "safe",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "safe",
    pregnancyNotes: "FDA Category B. Well-tolerated in pregnancy. Minimal systemic absorption. Minimal animal data showing teratogenicity.",
    breastfeedingNotes: "Safe. Minimal transfer to breast milk expected.",
    keyWarning: null
  },
  {
    id: "tns-007",
    drug: "Benzoyl peroxide",
    brand: "Generic, Benzac, Clearasil",
    category: "Topical Non-Steroidal",
    pregnancyT1: "safe",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "safe",
    pregnancyNotes: "Minimal systemic absorption. Safe for use throughout pregnancy. Commonly used for pregnancy-related acne.",
    breastfeedingNotes: "Safe. No significant transfer to breast milk.",
    keyWarning: null
  },
  {
    id: "tns-008",
    drug: "Clindamycin topical",
    brand: "Cleocin T, ClindaMax",
    category: "Topical Non-Steroidal",
    pregnancyT1: "safe",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "safe",
    pregnancyNotes: "Minimal systemic absorption from topical formulation. Safe throughout pregnancy.",
    breastfeedingNotes: "Safe. Minimal transfer.",
    keyWarning: null
  },
  {
    id: "tns-009",
    drug: "Metronidazole topical",
    brand: "MetroGel, MetroLotion, MetroCream",
    category: "Topical Non-Steroidal",
    pregnancyT1: "caution",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "safe",
    pregnancyNotes: "Minimal systemic absorption from topical gel/solution form. Use with some caution T1 due to limited data, but topical formulation has very low bioavailability. Safe T2/T3.",
    breastfeedingNotes: "Safe. Negligible transfer from topical form.",
    keyWarning: null
  },
  {
    id: "tns-010",
    drug: "Ivermectin topical",
    brand: "Soolantra",
    category: "Topical Non-Steroidal",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "caution",
    breastfeeding: "avoid",
    pregnancyNotes: "Minimal systemic absorption from topical cream. Limited human pregnancy data. Use only if benefit clearly outweighs risk; alternatives preferred.",
    breastfeedingNotes: "Avoid. Insufficient data on breast milk safety.",
    keyWarning: null
  },

  // ========== RETINOIDS (TOPICAL) ==========
  {
    id: "ret-top-001",
    drug: "Tretinoin",
    brand: "Retin-A, Altreno, Renova",
    category: "Retinoids",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "caution",
    breastfeeding: "avoid",
    pregnancyNotes: "FDA Category C. Topical retinoid with minimal systemic absorption. Data from oral retinoids suggest teratogenic potential, but topical absorption is minimal. Conventionally avoided as precaution despite low teratogenic risk from topical formulation.",
    breastfeedingNotes: "Avoid breastfeeding due to unknown transfer.",
    keyWarning: null
  },
  {
    id: "ret-top-002",
    drug: "Adapalene",
    brand: "Differin",
    category: "Retinoids",
    pregnancyT1: "avoid",
    pregnancyT2: "avoid",
    pregnancyT3: "avoid",
    breastfeeding: "avoid",
    pregnancyNotes: "FDA Category C. Animal reproductive studies show concern. Although minimal systemic absorption expected from topical use, avoid throughout pregnancy due to retinoid class concerns and animal teratogenicity data.",
    breastfeedingNotes: "Avoid. Limited data on breast milk transfer.",
    keyWarning: null
  },
  {
    id: "ret-top-003",
    drug: "Tazarotene",
    brand: "Tazorac, Avage",
    category: "Retinoids",
    pregnancyT1: "contraindicated",
    pregnancyT2: "contraindicated",
    pregnancyT3: "contraindicated",
    breastfeeding: "contraindicated",
    pregnancyNotes: "FDA Category X. ABSOLUTE CONTRAINDICATION. Known teratogen. Causes CNS, cardiac, thymic, and skeletal malformations. Contraception mandatory if used in women of childbearing potential.",
    breastfeedingNotes: "Contraindicated.",
    keyWarning: "ABSOLUTE CONTRAINDICATION. FDA Category X. Known teratogen causing craniofacial, cardiac, CNS, and thymic defects. Avoid pregnancy entirely during and after use. Strict contraception required."
  },
  {
    id: "ret-top-004",
    drug: "Trifarotene",
    brand: "Aklief",
    category: "Retinoids",
    pregnancyT1: "avoid",
    pregnancyT2: "avoid",
    pregnancyT3: "avoid",
    breastfeeding: "avoid",
    pregnancyNotes: "Novel retinoid fourth-generation. Insufficient pregnancy data. Animal studies suggest developmental concerns. Avoid throughout pregnancy.",
    breastfeedingNotes: "Avoid. Insufficient safety data.",
    keyWarning: null
  },

  // ========== RETINOIDS (SYSTEMIC) ==========
  {
    id: "ret-sys-001",
    drug: "Isotretinoin",
    brand: "Absorica, Claravis, Accutane",
    category: "Retinoids",
    pregnancyT1: "contraindicated",
    pregnancyT2: "contraindicated",
    pregnancyT3: "contraindicated",
    breastfeeding: "contraindicated",
    pregnancyNotes: "FDA Category X. ABSOLUTE CONTRAINDICATION. Potent known human teratogen. Causes severe craniofacial defects (cleft palate, micrognathia), cardiac defects (Tetralogy of Fallot, transpositional arteries), CNS malformations, thymic defects.",
    breastfeedingNotes: "Contraindicated.",
    keyWarning: "ABSOLUTE CONTRAINDICATION. FDA Category X. Known human teratogen. iPLEDGE program mandated. Severe fetal malformations: craniofacial defects, heart defects (TOF, great artery transposition), CNS abnormalities, thymic hypoplasia. Monthly pregnancy tests required during use. Two forms of contraception mandatory."
  },
  {
    id: "ret-sys-002",
    drug: "Acitretin",
    brand: "Soriatane",
    category: "Retinoids",
    pregnancyT1: "contraindicated",
    pregnancyT2: "contraindicated",
    pregnancyT3: "contraindicated",
    breastfeeding: "contraindicated",
    pregnancyNotes: "FDA Category X. ABSOLUTE CONTRAINDICATION. Teratogenic. Metabolized to etretinate, which has extended half-life (>100 days). Teratogenic risk persists for 3 YEARS after discontinuation.",
    breastfeedingNotes: "Contraindicated.",
    keyWarning: "ABSOLUTE CONTRAINDICATION. FDA Category X. Teratogenic risk persists for 3 YEARS post-treatment due to conversion to etretinate. Causes fetal defects similar to isotretinoin. Strict contraception for 3 years after stopping. Avoid pregnancy entirely during this window."
  },

  // ========== ANTIBIOTICS (ORAL) ==========
  {
    id: "ab-001",
    drug: "Doxycycline",
    brand: "Vibramycin, Doxy, generic",
    category: "Antibiotics",
    pregnancyT1: "safe",
    pregnancyT2: "avoid",
    pregnancyT3: "avoid",
    breastfeeding: "avoid",
    pregnancyNotes: "Tetracycline antibiotic. Safe T1 with minimal exposure. AVOID T2 and T3: tetracyclines deposit in fetal teeth causing permanent brown/yellow discoloration and enamel hypoplasia. Also inhibits fetal bone growth. FDA warning against use in pregnancy.",
    breastfeedingNotes: "Avoid. Excreted in breast milk; causes neonatal dental staining.",
    keyWarning: null
  },
  {
    id: "ab-002",
    drug: "Minocycline",
    brand: "Minocin, Solodyn",
    category: "Antibiotics",
    pregnancyT1: "safe",
    pregnancyT2: "avoid",
    pregnancyT3: "avoid",
    breastfeeding: "avoid",
    pregnancyNotes: "Tetracycline derivative. Safe T1 only. AVOID T2/T3 for same reasons as doxycycline: tooth discoloration, enamel defects, bone growth inhibition.",
    breastfeedingNotes: "Avoid. Risk of neonatal dental discoloration.",
    keyWarning: null
  },
  {
    id: "ab-003",
    drug: "Tetracycline",
    brand: "Generic",
    category: "Antibiotics",
    pregnancyT1: "avoid",
    pregnancyT2: "avoid",
    pregnancyT3: "avoid",
    breastfeeding: "avoid",
    pregnancyNotes: "AVOID all trimesters. Tetracycline class risks: dental discoloration, enamel hypoplasia, bone growth inhibition.",
    breastfeedingNotes: "Avoid.",
    keyWarning: null
  },
  {
    id: "ab-004",
    drug: "Erythromycin",
    brand: "EES, Ery-Tab, generic",
    category: "Antibiotics",
    pregnancyT1: "safe",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "safe",
    pregnancyNotes: "Macrolide antibiotic. Safe throughout pregnancy. Often used as alternative to tetracyclines for acne in pregnancy. FDA Category B. Preferred oral antibiotic for many indications in pregnancy.",
    breastfeedingNotes: "Safe. Minimal transfer to breast milk.",
    keyWarning: null
  },
  {
    id: "ab-005",
    drug: "Azithromycin",
    brand: "Zithromax, Z-Pack",
    category: "Antibiotics",
    pregnancyT1: "caution",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "safe",
    pregnancyNotes: "Macrolide antibiotic. Conflicting data in T1 (earlier studies suggested risk of cardiovascular defects; more recent data reassuring). Safe T2/T3. Use with caution T1, preferring erythromycin if available.",
    breastfeedingNotes: "Safe. Minimal breast milk transfer.",
    keyWarning: null
  },
  {
    id: "ab-006",
    drug: "Cephalexin",
    brand: "Keflex, Rilexine",
    category: "Antibiotics",
    pregnancyT1: "safe",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "safe",
    pregnancyNotes: "First-generation cephalosporin. FDA Category B. Safe throughout pregnancy. Minimal cross-reactivity with penicillin allergy (use with caution if severe penicillin allergy history).",
    breastfeedingNotes: "Safe. Minimal transfer.",
    keyWarning: null
  },
  {
    id: "ab-007",
    drug: "Amoxicillin-clavulanate",
    brand: "Augmentin",
    category: "Antibiotics",
    pregnancyT1: "safe",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "safe",
    pregnancyNotes: "Beta-lactam with beta-lactamase inhibitor. FDA Category B. Safe throughout pregnancy. Standard antibiotic for many infections in pregnancy.",
    breastfeedingNotes: "Safe. Minimal transfer.",
    keyWarning: null
  },
  {
    id: "ab-008",
    drug: "Trimethoprim-sulfamethoxazole (TMP-SMX)",
    brand: "Bactrim, Septra, Cotrim",
    category: "Antibiotics",
    pregnancyT1: "avoid",
    pregnancyT2: "caution",
    pregnancyT3: "avoid",
    breastfeeding: "avoid",
    pregnancyNotes: "Folate antagonist combination. AVOID T1 (neural tube defect risk). CAUTION T2 only if absolutely necessary (limited alternatives). AVOID T3 (risk of neonatal jaundice, hemolytic anemia, kernicterus from sulfamethoxazole in G6PD-deficient neonates).",
    breastfeedingNotes: "Avoid breastfeeding, especially in T3. Risk of neonatal hemolytic anemia and kernicterus if infant G6PD-deficient.",
    keyWarning: "Avoid T1 and T3. AVOID all trimesters if alternatives available. Folate antagonist."
  },
  {
    id: "ab-009",
    drug: "Clindamycin (oral)",
    brand: "Cleocin, Dalacin",
    category: "Antibiotics",
    pregnancyT1: "safe",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "safe",
    pregnancyNotes: "Lincosamide antibiotic. FDA Category B. Safe throughout pregnancy. Often used for acne.",
    breastfeedingNotes: "Safe. Minimal breast milk transfer.",
    keyWarning: null
  },

  // ========== SYSTEMICS (NON-BIOLOGIC, NON-RETINOID) ==========
  {
    id: "sys-001",
    drug: "Methotrexate",
    brand: "Trexall, Otrexup, generic",
    category: "Systemics",
    pregnancyT1: "contraindicated",
    pregnancyT2: "contraindicated",
    pregnancyT3: "contraindicated",
    breastfeeding: "contraindicated",
    pregnancyNotes: "ABSOLUTE CONTRAINDICATION. Potent folate antagonist. Known abortifacient and teratogen. Causes spontaneous abortion, CNS malformations, limb defects, palatal clefts, skeletal abnormalities, and hypoplasia. Must discontinue ≥3 months before attempted conception.",
    breastfeedingNotes: "Contraindicated.",
    keyWarning: "ABSOLUTE CONTRAINDICATION. Potent teratogen and abortifacient. Folate antagonist. Severe fetal malformations: CNS defects, limb defects, cleft palate, skeletal hypoplasia. Must STOP ≥3 months before conception. Monthly pregnancy tests required during use in childbearing women."
  },
  {
    id: "sys-002",
    drug: "Cyclosporine",
    brand: "Sandimmune, Neoral, Gengraf",
    category: "Systemics",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "caution",
    breastfeeding: "caution",
    pregnancyNotes: "Calcineurin inhibitor. Data suggest it is relatively safe in pregnancy for severe/life-threatening dermatologic disease. Associated with lower birthweight and prematurity but no major congenital malformations reported. Reserve for severe, refractory conditions where benefit justifies risk.",
    breastfeedingNotes: "Present in breast milk. Neonatal immunosuppression theoretically possible. Use with caution; monitor infant.",
    keyWarning: null
  },
  {
    id: "sys-003",
    drug: "Spironolactone",
    brand: "Aldactone, generic",
    category: "Systemics",
    pregnancyT1: "contraindicated",
    pregnancyT2: "contraindicated",
    pregnancyT3: "avoid",
    breastfeeding: "avoid",
    pregnancyNotes: "Potassium-sparing diuretic and androgen antagonist. CONTRAINDICATED especially T1-T2: antiandrogen effects cause feminization of external genitalia in male fetuses (micropenis, hypospadias, undescended testes). AVOID T3. Must discontinue immediately if pregnancy confirmed.",
    breastfeedingNotes: "Avoid. Passes into breast milk; potential antiandrogen effects on male infants.",
    keyWarning: "CONTRAINDICATED in pregnancy. Antiandrogen effects cause feminization of male fetus external genitalia. Avoid all trimesters, especially T1-T2. Discontinue immediately upon pregnancy confirmation."
  },
  {
    id: "sys-004",
    drug: "Dapsone",
    brand: "Generic",
    category: "Systemics",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "avoid",
    breastfeeding: "caution",
    pregnancyNotes: "Sulfone antibiotic. CAUTION T1/T2. AVOID T3: sulfamethoxazole metabolite causes neonatal hemolytic anemia and hyperbilirubinemia (especially in G6PD-deficient infants). Limited human pregnancy data overall.",
    breastfeedingNotes: "Caution. Excreted in breast milk. Risk of hemolytic anemia in G6PD-deficient neonates.",
    keyWarning: null
  },
  {
    id: "sys-005",
    drug: "Colchicine",
    brand: "Generic, Colcrys",
    category: "Systemics",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "caution",
    breastfeeding: "caution",
    pregnancyNotes: "Microtubule inhibitor. Limited human pregnancy data. Not conclusively teratogenic in humans, but insufficient safety evidence. Use with caution; alternatives preferred when available.",
    breastfeedingNotes: "Limited data on breast milk. Caution advised.",
    keyWarning: null
  },

  // ========== BIOLOGICS (MONOCLONAL ANTIBODIES, CYTOKINE MODIFIERS) ==========
  {
    id: "bio-001",
    drug: "Dupilumab",
    brand: "Dupixent",
    category: "Biologics",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "caution",
    breastfeeding: "caution",
    pregnancyNotes: "Anti-IL-4 receptor monoclonal antibody (IgG4). IgG crosses placenta increasingly in T2/T3. Limited human pregnancy data. Pregnancy Registry (DUPIXENT Mother) established. Probably low risk based on biologic class, but insufficient robust data. Consider continuing if severe disease; discuss with patient.",
    breastfeedingNotes: "Caution. IgG transfer to breast milk possible; minimal expected neonatal absorption.",
    keyWarning: null
  },
  {
    id: "bio-002",
    drug: "Adalimumab",
    brand: "Humira",
    category: "Biologics",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "avoid",
    breastfeeding: "caution",
    pregnancyNotes: "Anti-TNF monoclonal antibody (IgG1). T1/T2 CAUTION: acceptable for serious disease based on clinical data. AVOID T3: IgG crosses placenta; neonatal immunosuppression and decreased response to live vaccines possible (do not give live vaccines to infant for 6 months postpartum).",
    breastfeedingNotes: "Minimal transfer expected. IgG antibodies present in breast milk but neonatal absorption limited.",
    keyWarning: null
  },
  {
    id: "bio-003",
    drug: "Secukinumab",
    brand: "Cosentyx",
    category: "Biologics",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "avoid",
    breastfeeding: "caution",
    pregnancyNotes: "Anti-IL-17A monoclonal antibody (IgG1). Similar biologic pregnancy guidance as adalimumab: CAUTION T1/T2 for serious disease; AVOID T3 due to placental IgG transfer and theoretical immunosuppression.",
    breastfeedingNotes: "Caution. Limited data on breast milk transfer.",
    keyWarning: null
  },
  {
    id: "bio-004",
    drug: "Risankizumab",
    brand: "Skyrizi",
    category: "Biologics",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "avoid",
    breastfeeding: "caution",
    pregnancyNotes: "Anti-IL-23 monoclonal antibody (IgG1). Similar biologic guidance: CAUTION T1/T2; AVOID T3 due to IgG placental transfer.",
    breastfeedingNotes: "Caution. Limited pregnancy/lactation data.",
    keyWarning: null
  },
  {
    id: "bio-005",
    drug: "Guselkumab",
    brand: "Tremfya",
    category: "Biologics",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "avoid",
    breastfeeding: "caution",
    pregnancyNotes: "Anti-IL-23 monoclonal antibody (IgG1). CAUTION T1/T2; AVOID T3 per biologic class considerations.",
    breastfeedingNotes: "Caution.",
    keyWarning: null
  },
  {
    id: "bio-006",
    drug: "Ixekizumab",
    brand: "Taltz",
    category: "Biologics",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "avoid",
    breastfeeding: "caution",
    pregnancyNotes: "Anti-IL-17A monoclonal antibody (IgG4). CAUTION T1/T2; AVOID T3 per biologic guidance.",
    breastfeedingNotes: "Caution.",
    keyWarning: null
  },
  {
    id: "bio-007",
    drug: "Omalizumab",
    brand: "Xolair",
    category: "Biologics",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "caution",
    breastfeeding: "safe",
    pregnancyNotes: "Anti-IgE monoclonal antibody (IgG1). Generally low risk based on clinical experience with asthma management in pregnancy. CAUTION all trimesters but data supportive of continued use for serious disease (e.g., severe asthma).",
    breastfeedingNotes: "Safe. Minimal transfer expected; IgG antibody not bioavailable to neonatal GI tract.",
    keyWarning: null
  },

  // ========== JAK INHIBITORS ==========
  {
    id: "jak-001",
    drug: "Upadacitinib",
    brand: "Rinvoq",
    category: "JAK Inhibitors",
    pregnancyT1: "contraindicated",
    pregnancyT2: "contraindicated",
    pregnancyT3: "contraindicated",
    breastfeeding: "contraindicated",
    pregnancyNotes: "JAK1/JAK2 inhibitor. ABSOLUTE CONTRAINDICATION. Teratogenic in animal studies. FDA warning. Effective contraception required. Must discontinue ≥4 weeks before planned conception.",
    breastfeedingNotes: "Contraindicated.",
    keyWarning: "CONTRAINDICATED. JAK inhibitor. Teratogenic in animal studies. Effective contraception mandatory. Stop ≥4 weeks before conception. Do not use in women of childbearing potential without robust contraception."
  },
  {
    id: "jak-002",
    drug: "Abrocitinib",
    brand: "Cibinqo",
    category: "JAK Inhibitors",
    pregnancyT1: "contraindicated",
    pregnancyT2: "contraindicated",
    pregnancyT3: "contraindicated",
    breastfeeding: "contraindicated",
    pregnancyNotes: "JAK1 inhibitor. ABSOLUTE CONTRAINDICATION. Teratogenic in animal studies. Contraception required.",
    breastfeedingNotes: "Contraindicated.",
    keyWarning: "CONTRAINDICATED. JAK inhibitor. Teratogenic in animal studies. Effective contraception required."
  },
  {
    id: "jak-003",
    drug: "Baricitinib",
    brand: "Olumiant",
    category: "JAK Inhibitors",
    pregnancyT1: "contraindicated",
    pregnancyT2: "contraindicated",
    pregnancyT3: "contraindicated",
    breastfeeding: "contraindicated",
    pregnancyNotes: "JAK1/JAK2 inhibitor. ABSOLUTE CONTRAINDICATION.",
    breastfeedingNotes: "Contraindicated.",
    keyWarning: "CONTRAINDICATED. JAK inhibitor. Teratogenic in animal studies."
  },
  {
    id: "jak-004",
    drug: "Ritlecitinib",
    brand: "Litfulo",
    category: "JAK Inhibitors",
    pregnancyT1: "contraindicated",
    pregnancyT2: "contraindicated",
    pregnancyT3: "contraindicated",
    breastfeeding: "contraindicated",
    pregnancyNotes: "JAK3/TEC family kinase inhibitor. ABSOLUTE CONTRAINDICATION. Teratogenic in animal studies.",
    breastfeedingNotes: "Contraindicated.",
    keyWarning: "CONTRAINDICATED. JAK inhibitor class. Teratogenic in animal studies."
  },

  // ========== ANTIPARASITIC / OTHER ==========
  {
    id: "other-001",
    drug: "Permethrin 5% cream",
    brand: "Elimite, Acticin",
    category: "Antiparasitic / Other",
    pregnancyT1: "safe",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "safe",
    pregnancyNotes: "FDA Category B. Minimal systemic absorption from topical application. Safe for scabies treatment in pregnancy.",
    breastfeedingNotes: "Safe. Minimal transfer.",
    keyWarning: null
  },
  {
    id: "other-002",
    drug: "Ivermectin (oral)",
    brand: "Stromectol, Ivermectin",
    category: "Antiparasitic / Other",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "caution",
    breastfeeding: "avoid",
    pregnancyNotes: "Antiparasitic agent. CAUTION all trimesters: limited human pregnancy data. Animal studies at high doses show teratogenicity. Avoid if possible; consider topical permethrin for scabies as alternative.",
    breastfeedingNotes: "Avoid. Passes into breast milk; insufficient neonatal safety data.",
    keyWarning: null
  },
  {
    id: "other-003",
    drug: "Sunscreen - Mineral (zinc oxide, titanium dioxide)",
    brand: "Various",
    category: "Antiparasitic / Other",
    pregnancyT1: "safe",
    pregnancyT2: "safe",
    pregnancyT3: "safe",
    breastfeeding: "safe",
    pregnancyNotes: "Physical/mineral sunscreen. Safe throughout pregnancy. No systemic absorption. Preferred over chemical sunscreens in pregnancy.",
    breastfeedingNotes: "Safe.",
    keyWarning: null
  },
  {
    id: "other-004",
    drug: "Sunscreen - Chemical (avobenzone, oxybenzone, octinoxate, etc.)",
    brand: "Various",
    category: "Antiparasitic / Other",
    pregnancyT1: "caution",
    pregnancyT2: "caution",
    pregnancyT3: "caution",
    breastfeeding: "caution",
    pregnancyNotes: "Chemical/organic sunscreen filters. Systemic absorption documented. Limited pregnancy safety data. Consider mineral/physical sunscreens (zinc oxide, titanium dioxide) as preferred alternative.",
    breastfeedingNotes: "Caution. May pass into breast milk. Mineral sunscreens preferred.",
    keyWarning: null
  }
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PREGNANCY_DATA;
}
