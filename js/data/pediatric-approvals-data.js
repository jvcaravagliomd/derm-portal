// ════════════════════════════════════════════════════════════
//  PEDIATRIC & AGE-RANGE APPROVALS
//  Novel topical therapies and biologic/JAK inhibitor
//  FDA-approved minimum ages for dermatologic indications.
//  Always verify current labeling — approvals expand regularly.
// ════════════════════════════════════════════════════════════

// ──────────────────────────────────────────────────────────────
//  NOVEL TOPICAL THERAPY AGE APPROVALS
// ──────────────────────────────────────────────────────────────
const TOPICAL_AGE_DATA = [

  // ─── JAK INHIBITORS (TOPICAL) ────────────────────────────────
  {
    id: 'ruxolitinib-cream',
    drug: 'Ruxolitinib 1.5% Cream',
    brand: 'Opzelura',
    mechanism: 'JAK1/JAK2 inhibitor',
    category: 'JAK Inhibitor (Topical)',
    indications: [
      { condition: 'Atopic dermatitis (mild-moderate)', minAge: '2 years', ageNote: 'Updated 2024; was 12+ previously' },
      { condition: 'Vitiligo (non-segmental)', minAge: '12 years', ageNote: '' }
    ],
    maxBSA: '20% BSA',
    maxDose: '60 g/week',
    frequency: 'Twice daily',
    keyNotes: 'First topical JAK inhibitor. AD approval expanded to 2 years in 2024. For vitiligo, repigmentation takes 6–12+ months — set expectations. Avoid on infected skin. Non-immunocompromised patients only.',
    rems: 'No',
    pregnancySafety: 'Avoid'
  },

  // ─── PDE4 INHIBITORS (TOPICAL) ───────────────────────────────
  {
    id: 'roflumilast-cream',
    drug: 'Roflumilast 0.15% Cream',
    brand: 'Zoryve Cream',
    mechanism: 'PDE4 inhibitor',
    category: 'PDE4 Inhibitor (Topical)',
    indications: [
      { condition: 'Atopic dermatitis (mild-moderate)', minAge: '6 years', ageNote: '' }
    ],
    maxBSA: 'No formal limit stated in PI; use minimum needed',
    maxDose: 'Apply a thin layer once daily',
    frequency: 'Once daily',
    keyNotes: 'Non-steroid, non-immunosuppressant. Well-tolerated. Once-daily dosing improves adherence. No burning/stinging associated with calcineurin inhibitors. Also available as 0.3% foam for scalp psoriasis (6+).',
    rems: 'No',
    pregnancySafety: 'Limited data; avoid'
  },
  {
    id: 'roflumilast-foam',
    drug: 'Roflumilast 0.3% Foam',
    brand: 'Zoryve Foam',
    mechanism: 'PDE4 inhibitor',
    category: 'PDE4 Inhibitor (Topical)',
    indications: [
      { condition: 'Plaque psoriasis (scalp/intertriginous)', minAge: '6 years', ageNote: 'Sebopsoriasis and intertriginous included' }
    ],
    maxBSA: 'Scalp and intertriginous areas',
    maxDose: 'Apply once daily to affected scalp/intertriginous areas',
    frequency: 'Once daily',
    keyNotes: 'Foam formulation for scalp and body fold psoriasis. Steroid-free — excellent for sensitive areas (groin, axillae, under breasts). Approved 6+ for pediatric plaque psoriasis.',
    rems: 'No',
    pregnancySafety: 'Limited data; avoid'
  },
  {
    id: 'crisaborole',
    drug: 'Crisaborole 2% Ointment',
    brand: 'Eucrisa',
    mechanism: 'PDE4 inhibitor',
    category: 'PDE4 Inhibitor (Topical)',
    indications: [
      { condition: 'Atopic dermatitis (mild-moderate)', minAge: '2 years', ageNote: 'Also studied in 3 months+ but labeled 2+' }
    ],
    maxBSA: 'No formal limit; apply to affected areas',
    maxDose: 'Apply thin layer to affected areas twice daily',
    frequency: 'Twice daily',
    keyNotes: 'Non-steroidal PDE4 inhibitor. Application site pain/burning is most common AE — warn patients and families. Approved for mild-moderate AD. Can be used on face and all body surfaces. Steroid-sparing option.',
    rems: 'No',
    pregnancySafety: 'Limited data; use with caution'
  },

  // ─── CALCINEURIN INHIBITORS (TOPICAL) ────────────────────────
  {
    id: 'tacrolimus',
    drug: 'Tacrolimus 0.03% / 0.1% Ointment',
    brand: 'Protopic',
    mechanism: 'Calcineurin inhibitor',
    category: 'Calcineurin Inhibitor (Topical)',
    indications: [
      { condition: 'Atopic dermatitis (moderate-severe)', minAge: '2 years (0.03% only in ages 2–15; 0.1% for 16+)', ageNote: 'Use 0.03% for children 2–15; 0.1% for adults' }
    ],
    maxBSA: 'No formal limit; use minimum needed',
    maxDose: 'Apply thin layer twice daily; re-evaluate after 6 weeks if no improvement',
    frequency: 'Twice daily',
    keyNotes: '⚠️ BLACK BOX: Rare risk of malignancy (lymphoma/skin cancer) — not for use in immunocompromised patients or as first-line therapy. Excellent for face, eyelids, intertriginous areas. Burning/stinging common initially — improves with use. Second-line steroid-sparing agent.',
    rems: 'No (but Black Box Warning)',
    pregnancySafety: 'Avoid; limited data (Category C)'
  },
  {
    id: 'pimecrolimus',
    drug: 'Pimecrolimus 1% Cream',
    brand: 'Elidel',
    mechanism: 'Calcineurin inhibitor',
    category: 'Calcineurin Inhibitor (Topical)',
    indications: [
      { condition: 'Atopic dermatitis (mild-moderate)', minAge: '2 years', ageNote: '' }
    ],
    maxBSA: 'No formal limit',
    maxDose: 'Apply thin layer twice daily',
    frequency: 'Twice daily',
    keyNotes: '⚠️ BLACK BOX: Same malignancy warning as tacrolimus. Milder than tacrolimus — preferred for mild AD and sensitive areas (face, eyelids, skin folds). Less burning on application than tacrolimus. Steroid-sparing. Second-line after failure of topical steroids.',
    rems: 'No (but Black Box Warning)',
    pregnancySafety: 'Avoid; limited data (Category C)'
  },

  // ─── AhR AGONISTS (TOPICAL) ──────────────────────────────────
  {
    id: 'tapinarof',
    drug: 'Tapinarof 1% Cream',
    brand: 'Vtama',
    mechanism: 'Aryl hydrocarbon receptor (AhR) agonist',
    category: 'AhR Agonist (Topical)',
    indications: [
      { condition: 'Plaque psoriasis', minAge: '18 years (psoriasis indication)', ageNote: '' },
      { condition: 'Atopic dermatitis', minAge: '2 years (AD indication, approved 2024)', ageNote: 'AD label approved with expanded peds age' }
    ],
    maxBSA: 'No formal limit stated',
    maxDose: 'Apply thin layer once daily to affected areas',
    frequency: 'Once daily',
    keyNotes: 'Novel mechanism — restores skin barrier and reduces inflammation via AhR pathway. Notable for "remittive effect" — some patients maintain improvement after stopping treatment. Folliculitis is the most common AE (~24%). Once-daily dosing. Steroid-free.',
    rems: 'No',
    pregnancySafety: 'Limited data; avoid'
  },

  // ─── RETINOIDS (TOPICAL) ─────────────────────────────────────
  {
    id: 'tretinoin-topical-age',
    drug: 'Tretinoin (various %)',
    brand: 'Retin-A, Atralin, Altreno, Tretin-X',
    mechanism: 'Retinoid (RAR agonist)',
    category: 'Retinoid (Topical)',
    indications: [
      { condition: 'Acne vulgaris', minAge: '9–12 years (product-specific; most labeled 12+)', ageNote: 'Atralin/Altreno: 9+; Retin-A Micro: 12+' },
      { condition: 'Photoaging', minAge: 'Adults 18+ (cosmetic indication)', ageNote: '' }
    ],
    maxBSA: 'Affected areas only',
    maxDose: 'Pea-sized amount; start low %, titrate up',
    frequency: 'Once nightly',
    keyNotes: 'Avoid in pregnancy. Sun protection essential. Retinoid dermatitis (redness, peeling) expected first 4–6 weeks. Start with lowest concentration and titrate. Altreno (0.05% lotion) is better tolerated for sensitive skin.',
    rems: 'No',
    pregnancySafety: 'Avoid (Category C; teratogenicity concern despite low systemic absorption)'
  },
  {
    id: 'tazarotene-topical',
    drug: 'Tazarotene 0.045% / 0.1% Lotion/Cream',
    brand: 'Tazorac, Arazlo',
    mechanism: 'Retinoid (RAR agonist)',
    category: 'Retinoid (Topical)',
    indications: [
      { condition: 'Plaque psoriasis', minAge: '18 years', ageNote: '' },
      { condition: 'Acne vulgaris (Arazlo 0.045%)', minAge: '9 years', ageNote: 'Arazlo lotion approved 9+' }
    ],
    maxBSA: '20% BSA for psoriasis',
    maxDose: 'Apply once daily',
    frequency: 'Once daily (evening)',
    keyNotes: 'Category X — contraindicated in pregnancy. Female patients must use contraception. Potent retinoid; irritation more common than tretinoin. Often used in combination with topical steroids for psoriasis to minimize irritation.',
    rems: 'No (but pregnancy warning)',
    pregnancySafety: 'CONTRAINDICATED (Category X)'
  },

  // ─── VITAMIN D ANALOGUES ─────────────────────────────────────
  {
    id: 'calcipotriene',
    drug: 'Calcipotriene 0.005%',
    brand: 'Dovonex, Sorilux Foam, Calcitrene',
    mechanism: 'Vitamin D3 analogue (VDR agonist)',
    category: 'Vitamin D Analogue (Topical)',
    indications: [
      { condition: 'Plaque psoriasis', minAge: '2 years (Sorilux foam)', ageNote: 'Dovonex cream: adults; Sorilux foam: 2+' }
    ],
    maxBSA: '30% BSA; max 100 g/week',
    maxDose: 'Apply once or twice daily; max 100 g/week to avoid hypercalcemia',
    frequency: 'Once to twice daily',
    keyNotes: 'Hypercalcemia risk with overuse — do not exceed 100 g/week. Do not use on face or skin folds. Often combined with betamethasone dipropionate (Taclonex/Enstilar) for superior efficacy. Monitor serum calcium if using large quantities long-term.',
    rems: 'No',
    pregnancySafety: 'Use with caution (Category C)'
  },
  {
    id: 'cal-beta-combo',
    drug: 'Calcipotriene + Betamethasone Dipropionate',
    brand: 'Taclonex (ointment/suspension), Enstilar (aerosol foam)',
    mechanism: 'Vitamin D analogue + corticosteroid (combination)',
    category: 'Vitamin D Analogue (Topical)',
    indications: [
      { condition: 'Plaque psoriasis (body)', minAge: '12 years (Taclonex); Enstilar: adults 18+', ageNote: 'Taclonex ointment: 12+; Enstilar foam: 18+' }
    ],
    maxBSA: '30% BSA; max 100 g/week',
    maxDose: 'Apply once daily; max 8 weeks continuous use',
    frequency: 'Once daily',
    keyNotes: 'More effective than either agent alone. Enstilar foam shows faster onset and better patient satisfaction. Limit to 4–8 weeks continuous use due to steroid component — then consider maintenance with calcipotriene alone or tapinarof.',
    rems: 'No',
    pregnancySafety: 'Use with caution; avoid prolonged use'
  }

];

// ──────────────────────────────────────────────────────────────
//  BIOLOGIC & JAK INHIBITOR PEDIATRIC APPROVALS TABLE
// ──────────────────────────────────────────────────────────────
const PEDS_BIOLOGIC_DATA = [

  // ─── ATOPIC DERMATITIS ───────────────────────────────────────
  {
    id: 'dup-ad',
    drug: 'Dupilumab',
    brand: 'Dupixent',
    drugClass: 'Biologic (anti-IL-4/IL-13)',
    condition: 'Atopic Dermatitis',
    minAge: '6 months',
    ageNote: 'Was 6+ when approved; later expanded to 6 months',
    route: 'SC injection',
    dosingNote: 'Weight-based dosing for peds < 60 kg; 300 mg q2w for ≥ 60 kg or adults',
    blackBox: false,
    notes: 'Most widely used biologic in pediatric AD. Generally well-tolerated. Conjunctivitis more common in AD vs asthma indication.'
  },
  {
    id: 'tralo-ad',
    drug: 'Tralokinumab',
    brand: 'Adbry',
    drugClass: 'Biologic (anti-IL-13)',
    condition: 'Atopic Dermatitis',
    minAge: '12 years',
    ageNote: '',
    route: 'SC injection',
    dosingNote: 'Same adult dosing in adolescents 12+ (≥ 60 kg)',
    blackBox: false,
    notes: 'FDA approved for adolescents 12+. Peds < 60 kg dosing being studied.'
  },
  {
    id: 'lebri-ad',
    drug: 'Lebrikizumab',
    brand: 'Ebglyss',
    drugClass: 'Biologic (anti-IL-13)',
    condition: 'Atopic Dermatitis',
    minAge: '12 years',
    ageNote: '',
    route: 'SC injection',
    dosingNote: 'Standard adult dose for adolescents 12+',
    blackBox: false,
    notes: 'FDA approved for adolescents 12+.'
  },
  {
    id: 'nemo-ad',
    drug: 'Nemolizumab',
    brand: 'Nemluvio',
    drugClass: 'Biologic (anti-IL-31RA)',
    condition: 'Atopic Dermatitis',
    minAge: '12 years',
    ageNote: '',
    route: 'SC injection',
    dosingNote: '360 mg q4w for adolescents 12+',
    blackBox: false,
    notes: 'Approved for adolescents 12+. Particularly effective for itch reduction.'
  },
  {
    id: 'upadac-ad',
    drug: 'Upadacitinib',
    brand: 'Rinvoq',
    drugClass: 'JAK1 Inhibitor (oral)',
    condition: 'Atopic Dermatitis',
    minAge: '12 years',
    ageNote: '',
    route: 'Oral',
    dosingNote: '15 mg or 30 mg once daily for adolescents 12+ (≥ 40 kg)',
    blackBox: true,
    notes: '⚠️ BLACK BOX (class-wide JAK): serious infections, malignancy, MACE, thrombosis. Use in adolescents when benefits outweigh risks. Monitor closely.'
  },
  {
    id: 'abroc-ad',
    drug: 'Abrocitinib',
    brand: 'Cibinqo',
    drugClass: 'JAK1 Inhibitor (oral)',
    condition: 'Atopic Dermatitis',
    minAge: '12 years',
    ageNote: '',
    route: 'Oral',
    dosingNote: '100 mg once daily (may increase to 200 mg) for adolescents 12+',
    blackBox: true,
    notes: '⚠️ BLACK BOX (JAK class). Platelet monitoring required. REMS enrollment.'
  },
  {
    id: 'ruxo-ad',
    drug: 'Ruxolitinib 1.5% Cream',
    brand: 'Opzelura',
    drugClass: 'JAK1/JAK2 Inhibitor (topical)',
    condition: 'Atopic Dermatitis',
    minAge: '2 years',
    ageNote: '📢 Expanded from 12+ to 2+ in 2024',
    route: 'Topical',
    dosingNote: 'Apply BID to affected areas; max 60 g/week; max 20% BSA',
    blackBox: false,
    notes: 'Major age expansion — now approved down to 2 years for AD. Steroid-free, non-calcineurin inhibitor option for young children. Minimal systemic absorption at recommended doses/BSA.'
  },

  // ─── VITILIGO ────────────────────────────────────────────────
  {
    id: 'ruxo-vitiligo',
    drug: 'Ruxolitinib 1.5% Cream',
    brand: 'Opzelura',
    drugClass: 'JAK1/JAK2 Inhibitor (topical)',
    condition: 'Non-segmental Vitiligo',
    minAge: '12 years',
    ageNote: '',
    route: 'Topical',
    dosingNote: 'Apply BID to depigmented areas; repigmentation takes 6–12+ months',
    blackBox: false,
    notes: 'First FDA-approved vitiligo treatment to restore pigmentation. Results are gradual — set realistic expectations. Face responds better than hands/feet.'
  },

  // ─── PSORIASIS ───────────────────────────────────────────────
  {
    id: 'secu-psoriasis',
    drug: 'Secukinumab',
    brand: 'Cosentyx',
    drugClass: 'Biologic (anti-IL-17A)',
    condition: 'Plaque Psoriasis',
    minAge: '6 years',
    ageNote: '',
    route: 'SC injection',
    dosingNote: 'Weight-based: < 25 kg: 75 mg; 25–50 kg: 75 mg or 150 mg; > 50 kg: 150 mg or 300 mg',
    blackBox: false,
    notes: 'Approved for pediatric plaque psoriasis 6+. Strong efficacy data. Caution in IBD patients.'
  },
  {
    id: 'ixeki-psoriasis',
    drug: 'Ixekizumab',
    brand: 'Taltz',
    drugClass: 'Biologic (anti-IL-17A)',
    condition: 'Plaque Psoriasis',
    minAge: '6 years',
    ageNote: '',
    route: 'SC injection',
    dosingNote: 'Weight-based: < 25 kg: 40 mg q4w; 25–50 kg: 80 mg; > 50 kg: 80 mg (adult dosing)',
    blackBox: false,
    notes: 'Approved for peds 6+. Autoinjector available. Caution in IBD.'
  },
  {
    id: 'gusel-psoriasis',
    drug: 'Guselkumab',
    brand: 'Tremfya',
    drugClass: 'Biologic (anti-IL-23)',
    condition: 'Plaque Psoriasis',
    minAge: '12 years',
    ageNote: '',
    route: 'SC injection',
    dosingNote: '100 mg SC at wks 0, 4, then q8w for adolescents 12+',
    blackBox: false,
    notes: 'Approved for adolescents 12+. Q8w maintenance. No IBD contraindication.'
  },
  {
    id: 'ustek-psoriasis',
    drug: 'Ustekinumab',
    brand: 'Stelara',
    drugClass: 'Biologic (anti-IL-12/23)',
    condition: 'Plaque Psoriasis',
    minAge: '6 years',
    ageNote: '',
    route: 'SC injection (weight-based)',
    dosingNote: '≤ 60 kg: 0.75 mg/kg; 60–100 kg: 45 mg; > 100 kg: 90 mg — at wks 0, 4, then q12w',
    blackBox: false,
    notes: 'Long safety record. Approved for peds 6+. Weight-based dosing — calculate carefully.'
  },
  {
    id: 'etha-psoriasis',
    drug: 'Etanercept',
    brand: 'Enbrel',
    drugClass: 'Biologic (anti-TNF)',
    condition: 'Plaque Psoriasis',
    minAge: '4 years',
    ageNote: 'Oldest biologic approval for peds psoriasis',
    route: 'SC injection',
    dosingNote: '0.8 mg/kg/week (max 50 mg/week) SC weekly',
    blackBox: true,
    notes: '⚠️ BLACK BOX: Serious infections including TB and opportunistic infections. Screen for TB, hepatitis B/C before starting. Oldest biologic for peds psoriasis (approved 4+). Less efficacy vs IL-17/IL-23 agents but long safety track record.'
  },
  {
    id: 'ruxo-plaque',
    drug: 'Roflumilast 0.3% Foam',
    brand: 'Zoryve Foam',
    drugClass: 'PDE4 Inhibitor (topical)',
    condition: 'Plaque Psoriasis (scalp/intertriginous)',
    minAge: '6 years',
    ageNote: '',
    route: 'Topical',
    dosingNote: 'Apply once daily to affected scalp/body fold areas',
    blackBox: false,
    notes: 'Steroid-free. Approved for peds 6+. Good for scalp and body fold psoriasis in children.'
  },

  // ─── ALOPECIA AREATA ─────────────────────────────────────────
  {
    id: 'baric-aa',
    drug: 'Baricitinib',
    brand: 'Olumiant',
    drugClass: 'JAK1/JAK2 Inhibitor (oral)',
    condition: 'Alopecia Areata',
    minAge: '18 years',
    ageNote: 'Adults only for AA indication',
    route: 'Oral',
    dosingNote: '2 mg or 4 mg once daily',
    blackBox: true,
    notes: '⚠️ BLACK BOX (JAK class). First FDA-approved systemic treatment for AA — adults only.'
  },
  {
    id: 'upadac-aa',
    drug: 'Upadacitinib',
    brand: 'Rinvoq',
    drugClass: 'JAK1 Inhibitor (oral)',
    condition: 'Alopecia Areata',
    minAge: '18 years',
    ageNote: 'Adults only for AA indication',
    route: 'Oral',
    dosingNote: '15 mg once daily for AA',
    blackBox: true,
    notes: '⚠️ BLACK BOX (JAK class). Adults only for AA. Approved for AD 12+.'
  },
  {
    id: 'ritlec-aa',
    drug: 'Ritlecitinib',
    brand: 'Litfulo',
    drugClass: 'JAK3/TEC Inhibitor (oral)',
    condition: 'Severe Alopecia Areata',
    minAge: '12 years',
    ageNote: '📢 Only JAK inhibitor for AA approved in adolescents',
    route: 'Oral',
    dosingNote: '50 mg once daily for adolescents 12+',
    blackBox: true,
    notes: '⚠️ BLACK BOX (JAK class). Only approved AA JAK inhibitor for patients 12+. Important option for adolescents with significant AA burden.'
  },

  // ─── CHRONIC URTICARIA ───────────────────────────────────────
  {
    id: 'omali-urticaria',
    drug: 'Omalizumab',
    brand: 'Xolair',
    drugClass: 'Biologic (anti-IgE)',
    condition: 'Chronic Spontaneous Urticaria (CSU)',
    minAge: '12 years',
    ageNote: 'Label is 12+ for CSU; some guidelines support use in younger children off-label',
    route: 'SC injection',
    dosingNote: '150 mg or 300 mg SC q4w (flat dosing, not weight/IgE based for CSU)',
    blackBox: false,
    notes: '⚠️ Anaphylaxis risk — must administer in office, observe 30 min (first 3 doses). Give patient EpiPen Rx. Most patients respond at 300 mg dose. IgE levels paradoxically rise during treatment — do not use to monitor response.'
  },

  // ─── PSORIATIC ARTHRITIS (PED) ───────────────────────────────
  {
    id: 'secu-psa',
    drug: 'Secukinumab',
    brand: 'Cosentyx',
    drugClass: 'Biologic (anti-IL-17A)',
    condition: 'Psoriatic Arthritis',
    minAge: '2 years',
    ageNote: 'Youngest biologic PsA approval',
    route: 'SC injection',
    dosingNote: 'Weight-based dosing per PI for peds PsA',
    blackBox: false,
    notes: 'Approved for pediatric PsA from 2 years of age. Youngest biologic approval for PsA.'
  }

];

// ──────────────────────────────────────────────────────────────
//  CATEGORY HELPERS
// ──────────────────────────────────────────────────────────────
const TOPICAL_CATEGORIES = [
  'JAK Inhibitor (Topical)',
  'PDE4 Inhibitor (Topical)',
  'Calcineurin Inhibitor (Topical)',
  'AhR Agonist (Topical)',
  'Retinoid (Topical)',
  'Vitamin D Analogue (Topical)'
];

const PEDS_CONDITIONS = [
  'Atopic Dermatitis',
  'Vitiligo',
  'Plaque Psoriasis',
  'Alopecia Areata',
  'Chronic Spontaneous Urticaria (CSU)',
  'Psoriatic Arthritis'
];
