// ════════════════════════════════════════════════════════════
//  PATIENT HANDOUTS DATA
//  Each entry maps to a printable Word document in /handouts/
// ════════════════════════════════════════════════════════════

const HANDOUTS_DATA = [
  {
    id: 'ak-overview',
    title: 'Actinic Keratoses',
    subtitle: 'Condition Overview',
    category: 'AK & Field Therapy',
    icon: '☀️',
    desc: 'What AKs are, risk factors, why treatment matters, overview of all treatment options, and daily sun protection guidance.',
    keywords: ['actinic keratosis', 'ak', 'pre-cancer', 'sun damage', 'squamous cell'],
    file: 'handouts/01_Actinic_Keratoses_Overview.pdf'
  },
  {
    id: 'effudex',
    title: 'Effudex (5-Fluorouracil 5%)',
    subtitle: 'Field Therapy — BID × 2 Weeks',
    category: 'AK & Field Therapy',
    icon: '💊',
    desc: 'Full application instructions, week-by-week reaction timeline (days 1–14 + healing), comfort tips, warning signs, and sun avoidance.',
    keywords: ['effudex', '5-fluorouracil', '5fu', 'field therapy', 'actinic keratosis', 'ak treatment'],
    file: 'handouts/02_Effudex_5FU_Field_Therapy.pdf'
  },
  {
    id: 'kefanova',
    title: 'Kefanova (5-FU / Calcipotriene)',
    subtitle: 'Field Therapy — BID × 1 Week',
    category: 'AK & Field Therapy',
    icon: '🧪',
    desc: 'Dual mechanism explained, day-by-day reaction timeline, immune response that continues after stopping, comfort and aftercare guidance.',
    keywords: ['kefanova', '5-fu', 'calcipotriene', 'compound', 'field therapy', 'actinic keratosis', '1 week'],
    file: 'handouts/03_Kefanova_5FU_Calcipotriene_Field_Therapy.pdf'
  },
  {
    id: 'imiquimod',
    title: 'Imiquimod (Aldara / Zyclara)',
    subtitle: 'Immune Response Modifier',
    category: 'AK & Field Therapy',
    icon: '🛡️',
    desc: 'Fill-in dosing table, bedtime application protocol, gradual reaction timeline, systemic flu-like effects explained, and sun avoidance.',
    keywords: ['imiquimod', 'aldara', 'zyclara', 'immune modifier', 'field therapy', 'actinic keratosis'],
    file: 'handouts/04_Imiquimod_Aldara_Zyclara.pdf'
  },
  {
    id: 'pdt',
    title: 'Photodynamic Therapy (PDT)',
    subtitle: 'Light-Activated AK Treatment',
    category: 'AK & Field Therapy',
    icon: '💡',
    desc: 'Pre-procedure prep, step-by-step walkthrough of the visit, critical 48-hour light avoidance warning, and post-treatment healing timeline.',
    keywords: ['pdt', 'photodynamic therapy', 'blu-u', 'levulan', 'ameluz', 'ala', 'light therapy', 'actinic keratosis'],
    file: 'handouts/05_Photodynamic_Therapy_PDT.pdf'
  },
  {
    id: 'cryotherapy',
    title: 'Cryotherapy',
    subtitle: 'Liquid Nitrogen Treatment',
    category: 'Procedures',
    icon: '🧊',
    desc: 'What to expect before, during, and after freezing. Blister care, wound care instructions, healing timeline, and pigmentation note.',
    keywords: ['cryotherapy', 'liquid nitrogen', 'cryo', 'freeze', 'warts', 'ak', 'blister'],
    file: 'handouts/06_Cryotherapy_Liquid_Nitrogen.pdf'
  },
  {
    id: 'molluscum',
    title: 'Molluscum Contagiosum',
    subtitle: 'Viral Skin Infection',
    category: 'Viral Conditions',
    icon: '🔵',
    desc: 'Poxvirus overview, spread prevention, treatment options, detailed cantharidin blister aftercare instructions, and autoinoculation prevention.',
    keywords: ['molluscum', 'contagiosum', 'poxvirus', 'cantharidin', 'beetle juice', 'viral', 'children'],
    file: 'handouts/07_Molluscum_Contagiosum.pdf'
  },
  {
    id: 'warts',
    title: 'Warts (Verrucae)',
    subtitle: 'HPV Skin Growths',
    category: 'Viral Conditions',
    icon: '🦠',
    desc: 'All types of warts, in-office and at-home treatment options, salicylic acid home care protocol, and why multiple sessions are expected.',
    keywords: ['warts', 'verruca', 'hpv', 'plantar wart', 'common wart', 'flat wart', 'cantharidin', 'salicylic acid'],
    file: 'handouts/08_Warts_Verrucae.pdf'
  },
  {
    id: 'rosacea',
    title: 'Rosacea',
    subtitle: 'Chronic Inflammatory Condition',
    category: 'Inflammatory',
    icon: '🌹',
    desc: 'All 4 subtypes, trigger identification, topical and oral treatment options, steroid warning, gentle skincare routine, and sun protection.',
    keywords: ['rosacea', 'flushing', 'erythema', 'papulopustular', 'rhinophyma', 'ocular', 'ivermectin', 'metronidazole', 'brimonidine'],
    file: 'handouts/09_Rosacea.pdf'
  },
  {
    id: 'condyloma',
    title: 'Condyloma Acuminata (Genital Warts)',
    subtitle: 'HPV — Patient Q&A Guide',
    category: 'Viral Conditions',
    icon: '🦠',
    desc: 'Comprehensive patient Q&A covering transmission, sexual activity during treatment, all treatment options, timeline expectations, recurrence, partner notification, cancer risk, and specialist referrals for perianal/internal warts.',
    keywords: ['condyloma', 'genital warts', 'hpv', 'human papillomavirus', 'imiquimod', 'cryotherapy', 'perianal', 'warts', 'sexually transmitted'],
    file: 'handouts/10_Condyloma_Acuminata_Genital_Warts.pdf'
  }
];

// Category color map — matches portal's existing theme vars
const HANDOUT_CATEGORY_COLORS = {
  'AK & Field Therapy': { stripe: '#2563a8', badge: '#e8f4fd', badgeText: '#2563a8' },
  'Procedures':         { stripe: '#1a7f84', badge: '#ccf0f2', badgeText: '#1a7f84' },
  'Viral Conditions':   { stripe: '#6d28d9', badge: '#ede9fe', badgeText: '#6d28d9' },
  'Inflammatory':       { stripe: '#dc2626', badge: '#fee2e2', badgeText: '#dc2626' }
};
