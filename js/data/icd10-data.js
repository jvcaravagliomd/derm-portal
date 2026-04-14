const ICD10_CODES = [
  // ===== INFLAMMATORY =====
  {
    code: "L20.9",
    description: "Atopic dermatitis, unspecified",
    category: "Inflammatory",
    commonName: "Atopic dermatitis",
    notes: "Most common form of eczema; often starts in childhood but can occur at any age"
  },
  {
    code: "L20.89",
    description: "Atopic dermatitis, other",
    category: "Inflammatory",
    commonName: "Atopic dermatitis, other type",
    notes: "Use for specific morphologies or locations not captured by L20.9"
  },
  {
    code: "L23.9",
    description: "Allergic contact dermatitis, unspecified",
    category: "Inflammatory",
    commonName: "Allergic contact dermatitis",
    notes: "IgE-mediated reaction; requires sensitization and re-exposure; patch testing helpful for diagnosis"
  },
  {
    code: "L24.9",
    description: "Irritant contact dermatitis, unspecified",
    category: "Inflammatory",
    commonName: "Irritant contact dermatitis",
    notes: "Non-allergic; can occur with first exposure; depends on irritant strength and duration"
  },
  {
    code: "L25.9",
    description: "Unspecified contact dermatitis",
    category: "Inflammatory",
    commonName: "Contact dermatitis",
    notes: "Use when type (allergic vs. irritant) is not determined; patch testing may help differentiate"
  },
  {
    code: "L28.0",
    description: "Lichen simplex chronicus",
    category: "Inflammatory",
    commonName: "Lichen simplex chronicus",
    notes: "Results from chronic scratching; creates a vicious itch-scratch cycle; localized or generalized forms"
  },
  {
    code: "L28.1",
    description: "Prurigo nodularis",
    category: "Inflammatory",
    commonName: "Prurigo nodularis",
    notes: "Chronic nodular lesions from intense scratching; very pruritic; may be associated with atopy or underlying systemic disease"
  },
  {
    code: "L29.9",
    description: "Pruritus, unspecified",
    category: "Inflammatory",
    commonName: "Itching/Pruritus",
    notes: "Symptom code for itching without other skin findings; consider underlying causes"
  },
  {
    code: "L30.1",
    description: "Dyshidrosis",
    category: "Inflammatory",
    commonName: "Dyshidrotic eczema/Pompholyx",
    notes: "Recurrent vesicles on palms and soles; intensely pruritic; may be triggered by stress or irritants"
  },
  {
    code: "L40.0",
    description: "Psoriasis vulgaris",
    category: "Inflammatory",
    commonName: "Psoriasis vulgaris",
    notes: "Most common form of psoriasis (90%); plaque-type with erythema and silvery scale"
  },
  {
    code: "L40.1",
    description: "Generalized pustular psoriasis",
    category: "Inflammatory",
    commonName: "Pustular psoriasis",
    notes: "Severe form; can be triggered by infection, pregnancy, or medication withdrawal; potentially life-threatening"
  },
  {
    code: "L40.4",
    description: "Guttate psoriasis",
    category: "Inflammatory",
    commonName: "Guttate psoriasis",
    notes: "Small teardrop-shaped plaques; often follows streptococcal pharyngitis; usually in younger patients"
  },
  {
    code: "L40.50",
    description: "Psoriatic arthropathy, unspecified",
    category: "Inflammatory",
    commonName: "Psoriatic arthritis",
    notes: "Joint involvement in psoriasis; affects 5-30% of psoriasis patients; check for arthralgia on history"
  },
  {
    code: "L40.54",
    description: "Psoriatic juvenile arthropathy",
    category: "Inflammatory",
    commonName: "Psoriatic arthritis (juvenile)",
    notes: "PsA in children; may present with asymmetric oligoarthritis or polyarthritis"
  },
  {
    code: "L43.9",
    description: "Lichen planus, unspecified",
    category: "Inflammatory",
    commonName: "Lichen planus",
    notes: "Violaceous, flat-topped papules; classic oral involvement; can affect skin, nails, and mucous membranes"
  },
  {
    code: "L50.0",
    description: "Allergic urticaria",
    category: "Inflammatory",
    commonName: "Allergic urticaria/Hives",
    notes: "IgE-mediated; common triggers: foods, medications, insect stings; often associated with angioedema"
  },
  {
    code: "L50.1",
    description: "Idiopathic urticaria",
    category: "Inflammatory",
    commonName: "Idiopathic urticaria",
    notes: "No identified trigger; chronic idiopathic urticaria (CIU) is common; auto-immune mechanisms may play a role"
  },
  {
    code: "L50.9",
    description: "Urticaria, unspecified",
    category: "Inflammatory",
    commonName: "Urticaria/Hives",
    notes: "Transient wheals lasting <24 hours per lesion; if >6 weeks = chronic urticaria"
  },
  {
    code: "L51.0",
    description: "Nonbullous erythema multiforme",
    category: "Inflammatory",
    commonName: "Erythema multiforme minor",
    notes: "Typically triggered by HSV; classic target lesions; self-limited; distinct from major form"
  },
  {
    code: "L51.1",
    description: "Stevens-Johnson syndrome",
    category: "Inflammatory",
    commonName: "Stevens-Johnson syndrome (SJS)",
    notes: "Severe form of erythema multiforme; involves mucous membranes; often medication-triggered; medical emergency"
  },
  {
    code: "L51.2",
    description: "Toxic epidermal necrolysis",
    category: "Inflammatory",
    commonName: "Toxic epidermal necrolysis (TEN)",
    notes: "Most severe form; >30% BSA involvement; high mortality; medical emergency requiring ICU care; usually drug-induced"
  },
  {
    code: "L57.0",
    description: "Actinic keratosis",
    category: "Inflammatory",
    commonName: "Actinic keratosis",
    notes: "Precancerous lesion from UV exposure; risk of progression to SCC ~0.6% per lesion per year; common in older adults"
  },
  {
    code: "L71.0",
    description: "Perioral dermatitis",
    category: "Inflammatory",
    commonName: "Perioral dermatitis",
    notes: "Papules and pustules around mouth; often related to topical steroid use; paradoxically worsens with steroids"
  },
  {
    code: "L71.9",
    description: "Rosacea, unspecified",
    category: "Inflammatory",
    commonName: "Rosacea",
    notes: "Chronic facial flushing and erythema; may progress to severe forms; triggers: spicy foods, alcohol, heat"
  },
  {
    code: "L71.1",
    description: "Rhinophyma",
    category: "Inflammatory",
    commonName: "Rhinophyma",
    notes: "Severe rosacea affecting nose; bulbous thickening; more common in males; previously called 'whiskey nose' (outdated)"
  },
  {
    code: "L90.0",
    description: "Lichen sclerosus",
    category: "Inflammatory",
    commonName: "Lichen sclerosus",
    notes: "White, porcelain-like papules; common on genital area and neck; may cause scarring and fusion of labia/foreskin; need malignancy surveillance"
  },
  {
    code: "L94.0",
    description: "Localized scleroderma (morphea)",
    category: "Inflammatory",
    commonName: "Morphea/Localized scleroderma",
    notes: "Circumscribed sclerotic patch; usually benign; does not progress to systemic sclerosis in most cases"
  },
  {
    code: "L98.1",
    description: "Factitial dermatitis",
    category: "Inflammatory",
    commonName: "Factitious dermatitis/Self-induced injury",
    notes: "Patient-induced trauma; may indicate underlying psychiatric condition; diagnosis requires careful history and observation"
  },
  {
    code: "L92.0",
    description: "Granuloma annulare",
    category: "Inflammatory",
    commonName: "Granuloma annulare",
    notes: "Benign; ring-shaped lesions; localized or generalized; usually self-limited; may take months to years to resolve"
  },

  // ===== ACNE =====
  {
    code: "L70.0",
    description: "Acne vulgaris",
    category: "Acne",
    commonName: "Acne vulgaris",
    notes: "Most common form; comedonal, papular, and cystic lesions; involves pilosebaceous unit dysfunction"
  },
  {
    code: "L70.1",
    description: "Acne conglobata",
    category: "Acne",
    commonName: "Acne conglobata",
    notes: "Severe form; large interconnecting nodules and abscesses; high risk of scarring; may require isotretinoin"
  },
  {
    code: "L70.3",
    description: "Acne tropica",
    category: "Acne",
    commonName: "Acne tropica",
    notes: "Acne-like eruption in tropical climates; related to heat, humidity, and occlusion; may improve with environmental change"
  },
  {
    code: "L70.4",
    description: "Infantile acne",
    category: "Acne",
    commonName: "Infantile acne",
    notes: "Appears in first 3 months of life; usually on face; often mild; consider maternal androgen exposure"
  },
  {
    code: "L70.5",
    description: "Acné excoriée",
    category: "Acne",
    commonName: "Acne excoriée des jeunes filles",
    notes: "Self-picking of acne lesions; predominantly in adolescent females; may indicate obsessive-compulsive features"
  },
  {
    code: "L73.0",
    description: "Acne keloidalis nuchae",
    category: "Acne",
    commonName: "Acne keloidalis/Folliculitis keloidalis",
    notes: "Chronic folliculitis on nape of neck; more common in men of color; prone to keloid formation; difficult to treat"
  },
  {
    code: "L73.2",
    description: "Hidradenitis suppurativa",
    category: "Acne",
    commonName: "Hidradenitis suppurativa (HS)",
    notes: "Chronic inflammatory disorder of apocrine glands; often axillae, groins, inframammary; can be disabling; associated with obesity, smoking, family history"
  },

  // ===== INFECTIONS - BACTERIAL =====
  {
    code: "L00",
    description: "Staphylococcal scalded skin syndrome",
    category: "Infections — Bacterial",
    commonName: "SSSS",
    notes: "Toxin-mediated blistering; usually in infants and children <5 years; caused by S. aureus strains producing exfoliative toxins"
  },
  {
    code: "L01.00",
    description: "Impetigo, unspecified",
    category: "Infections — Bacterial",
    commonName: "Impetigo",
    notes: "Highly contagious; non-bullous (majority) or bullous form; most common bacterial skin infection in children"
  },
  {
    code: "L01.01",
    description: "Impetigo contagiosa due to Staphylococcus aureus",
    category: "Infections — Bacterial",
    commonName: "Impetigo (Staph)",
    notes: "Non-bullous form caused by S. aureus; golden crusts; consider MRSA in recurrent cases"
  },
  {
    code: "L02.01",
    description: "Cutaneous abscess of face",
    category: "Infections — Bacterial",
    commonName: "Face abscess",
    notes: "Localized collection of pus on face; risk of deeper spread; may require drainage"
  },
  {
    code: "L02.11",
    description: "Cutaneous abscess of neck",
    category: "Infections — Bacterial",
    commonName: "Neck abscess",
    notes: "Can be serious due to proximity to vital structures; monitor for systemic signs"
  },
  {
    code: "L02.211",
    description: "Cutaneous abscess of abdominal wall",
    category: "Infections — Bacterial",
    commonName: "Abdominal wall abscess",
    notes: "Often from cysts or prior injury; may be deep and require imaging"
  },
  {
    code: "L02.31",
    description: "Cutaneous abscess of buttock",
    category: "Infections — Bacterial",
    commonName: "Buttock abscess",
    notes: "Common location for pilonidal cysts with infection"
  },
  {
    code: "L02.611",
    description: "Cutaneous abscess of foot",
    category: "Infections — Bacterial",
    commonName: "Foot abscess",
    notes: "Risk of serious infection in diabetics; ensure adequate assessment for deeper involvement"
  },
  {
    code: "L03.011",
    description: "Cellulitis of right finger",
    category: "Infections — Bacterial",
    commonName: "Finger cellulitis",
    notes: "Spreading inflammation; monitor for lymphangitis and regional lymphadenopathy"
  },
  {
    code: "L03.111",
    description: "Cellulitis of right toe",
    category: "Infections — Bacterial",
    commonName: "Toe cellulitis",
    notes: "In diabetics, be alert for deeper infection even if superficial findings mild"
  },
  {
    code: "L03.211",
    description: "Cellulitis of face",
    category: "Infections — Bacterial",
    commonName: "Facial cellulitis",
    notes: "High risk of serious complications; monitor vision, mental status; may require hospitalization"
  },
  {
    code: "L03.311",
    description: "Cellulitis of right axilla",
    category: "Infections — Bacterial",
    commonName: "Axillary cellulitis",
    notes: "Spreading infection in armpit area; may follow shaving or deodorant irritation"
  },
  {
    code: "L03.90",
    description: "Cellulitis, unspecified",
    category: "Infections — Bacterial",
    commonName: "Cellulitis",
    notes: "Acute spreading pyogenic infection; typically erysipelas (superficial) vs. cellulitis (deeper); treat empirically"
  },
  {
    code: "L05.01",
    description: "Pilonidal cyst with abscess",
    category: "Infections — Bacterial",
    commonName: "Infected pilonidal cyst",
    notes: "Cyst in natal cleft; becomes infected; may drain hair and debris; requires definitive treatment once infection cleared"
  },
  {
    code: "L08.0",
    description: "Pyoderma",
    category: "Infections — Bacterial",
    commonName: "Pyoderma",
    notes: "General term for pus-forming skin infection; may refer to various bacterial infections"
  },
  {
    code: "L08.9",
    description: "Local skin infection, unspecified",
    category: "Infections — Bacterial",
    commonName: "Unspecified local skin infection",
    notes: "Use when specific bacterial etiology or type not determined"
  },

  // ===== INFECTIONS - VIRAL =====
  {
    code: "B00.1",
    description: "Herpes simplex dermatitis of eyelid and periocular area",
    category: "Infections — Viral",
    commonName: "Ocular herpes simplex",
    notes: "HSV keratitis is serious complication; requires ophthalmology referral if cornea involved"
  },
  {
    code: "B00.9",
    description: "Herpes simplex, unspecified",
    category: "Infections — Viral",
    commonName: "Herpes simplex",
    notes: "Primary or recurrent; HSV-1 (oral/facial) or HSV-2 (genital); recurrence often preceded by prodrome"
  },
  {
    code: "B02.9",
    description: "Herpes zoster without complication",
    category: "Infections — Viral",
    commonName: "Shingles",
    notes: "Reactivation of VZV; dermatome distribution; post-herpetic neuralgia common in elderly; vaccine available"
  },
  {
    code: "B02.39",
    description: "Zoster ophthalmic with other complications",
    category: "Infections — Viral",
    commonName: "Ophthalmic zoster",
    notes: "VZV affecting V1 distribution; risk of keratitis and eye complications; ophthalmology referral important"
  },
  {
    code: "B07.0",
    description: "Plantar wart",
    category: "Infections — Viral",
    commonName: "Plantar wart",
    notes: "HPV on pressure-bearing surface; may be painful; can be stubborn to treat due to callus formation"
  },
  {
    code: "B07.8",
    description: "Other viral warts",
    category: "Infections — Viral",
    commonName: "Viral warts (other types)",
    notes: "Common warts, flat warts, filiform warts, etc.; HPV-mediated; may spontaneously regress over months to years"
  },
  {
    code: "B07.9",
    description: "Viral wart, unspecified",
    category: "Infections — Viral",
    commonName: "Viral wart",
    notes: "HPV infection; benign; some strains have low malignancy potential"
  },
  {
    code: "B08.1",
    description: "Molluscum contagiosum",
    category: "Infections — Viral",
    commonName: "Molluscum contagiosum",
    notes: "Poxvirus; flesh-colored papules with central dimple; contagious; self-limited over 6-24 months; may spread to surrounding skin"
  },
  {
    code: "B08.8",
    description: "Other specified viral infections of the skin and mucous membranes",
    category: "Infections — Viral",
    commonName: "Other viral skin infections",
    notes: "May include orf, milker's nodule, or other specific viral infections"
  },
  {
    code: "L98.0",
    description: "Pyogenic granuloma",
    category: "Infections — Viral",
    commonName: "Pyogenic granuloma",
    notes: "Despite name, NOT infectious or granulomatous; actually a vascular proliferation (lobular capillary hemangioma); bleeds easily; may recur if not fully removed"
  },

  // ===== INFECTIONS - FUNGAL =====
  {
    code: "B35.0",
    description: "Tinea barbae (fungal infection of beard)",
    category: "Infections — Fungal",
    commonName: "Fungal beard infection",
    notes: "Ringworm of beard; usually Trichophyton rubrum or Microsporum canis; may cause scarring alopecia if not treated"
  },
  {
    code: "B35.1",
    description: "Tinea capitis (fungal infection of scalp)",
    category: "Infections — Fungal",
    commonName: "Scalp ringworm",
    notes: "Most common dermatophyte infection in children; requires systemic antifungal; risk of scarring alopecia with certain species"
  },
  {
    code: "B35.2",
    description: "Tinea unguium (onychomycosis)",
    category: "Infections — Fungal",
    commonName: "Nail fungus/Onychomycosis",
    notes: "Fungal nail infection; dermatophytes most common; treatment often prolonged; recurrence common"
  },
  {
    code: "B35.3",
    description: "Tinea pedis (athlete's foot)",
    category: "Infections — Fungal",
    commonName: "Athlete's foot",
    notes: "Most common dermatophyte infection; web spaces commonly involved; warm moist environment promotes growth"
  },
  {
    code: "B35.4",
    description: "Tinea corporis (ringworm)",
    category: "Infections — Fungal",
    commonName: "Ringworm",
    notes: "Can be acquired from animals, humans, or soil; typically annular with raised border and central clearing"
  },
  {
    code: "B35.6",
    description: "Tinea inguinalis/Tinea cruris (jock itch)",
    category: "Infections — Fungal",
    commonName: "Jock itch",
    notes: "Fungal infection of groin; more common in males; warm moist environment; rarely involves scrotum (unlike bacterial/candidal)"
  },
  {
    code: "B36.0",
    description: "Tinea versicolor (pityriasis versicolor)",
    category: "Infections — Fungal",
    commonName: "Tinea versicolor",
    notes: "Caused by Malassezia; hypo- or hyperpigmented patches; common in warm climates; tends to recur; not truly contagious"
  },
  {
    code: "B37.2",
    description: "Cutaneous candidiasis",
    category: "Infections — Fungal",
    commonName: "Candidal skin infection",
    notes: "Usually in intertriginous areas; associated with moisture, occlusion, antibiotics, immunosuppression; satellite lesions common"
  },
  {
    code: "B37.3",
    description: "Candidal paronychia",
    category: "Infections — Fungal",
    commonName: "Candidal nail fold infection",
    notes: "Infection of nail fold; usually chronic; associated with water exposure; may impair nail growth"
  },

  // ===== INFECTIONS - PARASITIC =====
  {
    code: "B86",
    description: "Scabies",
    category: "Infections — Parasitic",
    commonName: "Scabies",
    notes: "Mite infestation; contagious; burrows and nodules characteristic; family members often affected"
  },
  {
    code: "B85.2",
    description: "Pediculosis, unspecified",
    category: "Infections — Parasitic",
    commonName: "Lice infestation",
    notes: "Head lice (P. capitis), body lice (P. humanus), or pubic lice (P. pubis); contagious; requires family treatment"
  },
  {
    code: "L30.3",
    description: "Infective dermatitis",
    category: "Infections — Parasitic",
    commonName: "Secondary infected eczema",
    notes: "Eczematous dermatitis with secondary bacterial infection; usually Staph aureus; treat both condition and infection"
  },

  // ===== SKIN CANCER - BASAL CELL CARCINOMA =====
  {
    code: "C44.011",
    description: "Basal cell carcinoma of skin of lip",
    category: "Skin Cancer",
    commonName: "BCC of lip",
    notes: "Aggressive location; higher risk of recurrence; consider Mohs surgery"
  },
  {
    code: "C44.01",
    description: "Basal cell carcinoma of skin of lip, unspecified",
    category: "Skin Cancer",
    commonName: "BCC of lip area",
    notes: "More detail may be required with laterality and H codes"
  },
  {
    code: "C44.111",
    description: "Basal cell carcinoma of skin of eyelid, including canthus",
    category: "Skin Cancer",
    commonName: "BCC of eyelid",
    notes: "Periocular location; often requires specialized closure; high risk of recurrence"
  },
  {
    code: "C44.211",
    description: "Basal cell carcinoma of skin of ear and external auricular canal",
    category: "Skin Cancer",
    commonName: "BCC of ear",
    notes: "Periauricular BCCs may be aggressive; consider Mohs for high-risk features"
  },
  {
    code: "C44.311",
    description: "Basal cell carcinoma of skin of face, unspecified",
    category: "Skin Cancer",
    commonName: "BCC of face",
    notes: "Most common site for BCC; including forehead, cheek, nose, chin; risk of deeper invasion on nose"
  },
  {
    code: "C44.41",
    description: "Basal cell carcinoma of skin of scalp and neck",
    category: "Skin Cancer",
    commonName: "BCC of scalp/neck",
    notes: "Scalp BCCs may be aggressive; neck may have subclinical spread"
  },
  {
    code: "C44.511",
    description: "Basal cell carcinoma of skin of trunk",
    category: "Skin Cancer",
    commonName: "BCC of trunk",
    notes: "Includes chest, back, abdomen; generally lower risk of recurrence than face/scalp"
  },
  {
    code: "C44.611",
    description: "Basal cell carcinoma of skin of upper limb, including shoulder",
    category: "Skin Cancer",
    commonName: "BCC of upper limb",
    notes: "Arms and shoulders; generally good prognosis"
  },
  {
    code: "C44.711",
    description: "Basal cell carcinoma of skin of lower limb, including hip",
    category: "Skin Cancer",
    commonName: "BCC of lower limb",
    notes: "Legs and hip area"
  },
  {
    code: "C44.91",
    description: "Basal cell carcinoma of unspecified part of skin",
    category: "Skin Cancer",
    commonName: "BCC, site unspecified",
    notes: "Use when location not specified; try to obtain more specific location"
  },

  // ===== SKIN CANCER - SQUAMOUS CELL CARCINOMA =====
  {
    code: "C44.121",
    description: "Squamous cell carcinoma of skin of eyelid, including canthus",
    category: "Skin Cancer",
    commonName: "SCC of eyelid",
    notes: "Periocular SCC; higher risk than BCC; requires careful management"
  },
  {
    code: "C44.221",
    description: "Squamous cell carcinoma of skin of ear and external auricular canal",
    category: "Skin Cancer",
    commonName: "SCC of ear",
    notes: "Aggressive location; higher risk of lymph node metastasis; consider Mohs"
  },
  {
    code: "C44.321",
    description: "Squamous cell carcinoma of skin of face",
    category: "Skin Cancer",
    commonName: "SCC of face",
    notes: "Higher risk than BCC; nose and lip have increased risk; consider perineural invasion on histology"
  },
  {
    code: "C44.421",
    description: "Squamous cell carcinoma of skin of scalp and neck",
    category: "Skin Cancer",
    commonName: "SCC of scalp/neck",
    notes: "Aggressive locations; higher risk of metastasis and recurrence; check regional lymph nodes"
  },
  {
    code: "C44.521",
    description: "Squamous cell carcinoma of skin of trunk",
    category: "Skin Cancer",
    commonName: "SCC of trunk",
    notes: "Generally lower risk than face/scalp locations"
  },
  {
    code: "C44.621",
    description: "Squamous cell carcinoma of skin of upper limb, including shoulder",
    category: "Skin Cancer",
    commonName: "SCC of upper limb",
    notes: "Including arm and shoulder; relatively good prognosis"
  },
  {
    code: "C44.721",
    description: "Squamous cell carcinoma of skin of lower limb, including hip",
    category: "Skin Cancer",
    commonName: "SCC of lower limb",
    notes: "Leg and hip area; assess for risk factors"
  },
  {
    code: "C44.92",
    description: "Squamous cell carcinoma of unspecified part of skin",
    category: "Skin Cancer",
    commonName: "SCC, site unspecified",
    notes: "Use when specific location not determined"
  },

  // ===== SKIN CANCER - OTHER TYPES =====
  {
    code: "C46.0",
    description: "Kaposi sarcoma of skin and subcutaneous tissue",
    category: "Skin Cancer",
    commonName: "Kaposi sarcoma",
    notes: "Usually in immunocompromised (HIV/AIDS, transplant); associated with HHV-8; may be multifocal; requires systemic evaluation"
  },
  {
    code: "C4A.9",
    description: "Merkel cell carcinoma of unspecified part of skin",
    category: "Skin Cancer",
    commonName: "Merkel cell carcinoma",
    notes: "Rare aggressive neuroendocrine tumor; associated with Merkel cell polyomavirus; typically scalp, face, or extremities"
  },

  // ===== PRECANCER & CARCINOMA IN SITU =====
  {
    code: "L57.0",
    description: "Actinic keratosis (senile keratosis)",
    category: "Precancer",
    commonName: "Actinic keratosis",
    notes: "Precancerous; risk ~0.6% per lesion per year; multiple lesions = higher risk; can present as erythroplasia (thin red form)"
  },
  {
    code: "D04.9",
    description: "Carcinoma in situ of skin, unspecified",
    category: "Precancer",
    commonName: "Carcinoma in situ",
    notes: "Malignant cells confined to epidermis; high risk of progression if not treated"
  },
  {
    code: "D04.30",
    description: "Carcinoma in situ of skin of face",
    category: "Precancer",
    commonName: "CIS of face/Bowen's disease",
    notes: "Bowen's disease = SCC in situ; well-demarcated scaly plaques; requires treatment"
  },

  // ===== MELANOMA & MELANOMA IN SITU =====
  {
    code: "D03.9",
    description: "Melanoma in situ, unspecified",
    category: "Melanoma",
    commonName: "Melanoma in situ",
    notes: "Atypical melanocytic lesion confined to epidermis; malignant but non-invasive; requires complete excision"
  },
  {
    code: "D03.30",
    description: "Melanoma in situ of unspecified part of face",
    category: "Melanoma",
    commonName: "Melanoma in situ of face",
    notes: "Facial location increases risk of solar lentige-type presentation"
  },
  {
    code: "C43.9",
    description: "Malignant melanoma of unspecified part of skin",
    category: "Melanoma",
    commonName: "Malignant melanoma",
    notes: "Most dangerous skin cancer; stage based on depth (Breslow), ulceration, mitotic rate; requires oncology referral"
  },
  {
    code: "C43.10",
    description: "Malignant melanoma of unspecified eyelid, including canthus",
    category: "Melanoma",
    commonName: "Melanoma of eyelid",
    notes: "High-risk location; requires specialized treatment"
  },
  {
    code: "C43.30",
    description: "Malignant melanoma of unspecified part of face",
    category: "Melanoma",
    commonName: "Melanoma of face",
    notes: "Face is higher-risk location; lentigo maligna melanoma common in sun-exposed elderly patients"
  },
  {
    code: "C43.4",
    description: "Malignant melanoma of scalp and neck",
    category: "Melanoma",
    commonName: "Melanoma of scalp/neck",
    notes: "High-risk location; higher mortality; may have subclinical spread"
  },
  {
    code: "C43.51",
    description: "Malignant melanoma of anal skin and perirectal skin",
    category: "Melanoma",
    commonName: "Melanoma of anal/perirectal area",
    notes: "Rare location; usually poor prognosis due to late detection"
  },
  {
    code: "C43.60",
    description: "Malignant melanoma of unspecified upper limb, including shoulder",
    category: "Melanoma",
    commonName: "Melanoma of upper limb",
    notes: "Generally has better prognosis than trunk or high-risk facial sites"
  },
  {
    code: "C43.70",
    description: "Malignant melanoma of unspecified lower limb, including hip",
    category: "Melanoma",
    commonName: "Melanoma of lower limb",
    notes: "Lower extremity melanomas in women may present later due to reduced sun exposure"
  },
  {
    code: "C43.8",
    description: "Malignant melanoma of overlapping sites of skin",
    category: "Melanoma",
    commonName: "Melanoma (overlapping sites)",
    notes: "Use when lesion spans multiple anatomic sites"
  },

  // ===== HAIR & NAILS =====
  {
    code: "L63.9",
    description: "Alopecia areata, unspecified",
    category: "Hair & Nails",
    commonName: "Alopecia areata",
    notes: "Autoimmune hair loss; patchy round bald spots; can progress to totalis or universalis; may spontaneously regrow"
  },
  {
    code: "L63.0",
    description: "Alopecia areata totalis",
    category: "Hair & Nails",
    commonName: "Alopecia totalis",
    notes: "Complete loss of scalp hair; may progress from patchy alopecia areata"
  },
  {
    code: "L63.1",
    description: "Alopecia areata universalis",
    category: "Hair & Nails",
    commonName: "Alopecia universalis",
    notes: "Total hair loss including body hair; most severe form of alopecia areata; may be psychologically devastating"
  },
  {
    code: "L64.9",
    description: "Androgenetic alopecia, unspecified",
    category: "Hair & Nails",
    commonName: "Male/female pattern baldness",
    notes: "Most common cause of hair loss; genetic and hormonal; responsive to minoxidil and finasteride in early stages"
  },
  {
    code: "L65.0",
    description: "Telogen effluvium",
    category: "Hair & Nails",
    commonName: "Telogen effluvium",
    notes: "Reversible hair loss from stress, illness, medication, pregnancy; increased shedding 2-3 months after trigger"
  },
  {
    code: "L65.8",
    description: "Other specified nonscarring hair loss",
    category: "Hair & Nails",
    commonName: "Other hair loss",
    notes: "Includes trichotillomania, anagen effluvium, other forms"
  },
  {
    code: "L66.1",
    description: "Lichen planopilaris",
    category: "Hair & Nails",
    commonName: "Lichen planopilaris",
    notes: "Scarring alopecia from lichen planus; lichen planus-like inflammation of scalp; progressive; may cause permanent hair loss"
  },
  {
    code: "L67.1",
    description: "Variations in hair color",
    category: "Hair & Nails",
    commonName: "Hair color variations",
    notes: "Includes poliosis (localized depigmentation), canities (gray hair)"
  },
  {
    code: "L60.0",
    description: "Ingrowing nail",
    category: "Hair & Nails",
    commonName: "Ingrown toenail",
    notes: "Nail edge penetrating nail fold; painful; risk of secondary infection; may require partial nail avulsion"
  },
  {
    code: "L60.3",
    description: "Nail dystrophy",
    category: "Hair & Nails",
    commonName: "Nail dystrophy",
    notes: "Abnormal nail appearance; many causes: psoriasis, lichen planus, trauma, fungal, systemic disease"
  },
  {
    code: "L60.4",
    description: "Beau's lines",
    category: "Hair & Nails",
    commonName: "Beau's lines",
    notes: "Horizontal groove in nail plate; indicates temporary disruption of nail matrix; often from systemic illness or severe stress"
  },
  {
    code: "Q84.6",
    description: "Congenital leukonychia",
    category: "Hair & Nails",
    commonName: "Hereditary white nails",
    notes: "Inherited condition; white opaque nails present from birth or early childhood"
  },

  // ===== PIGMENTATION =====
  {
    code: "L80",
    description: "Vitiligo",
    category: "Pigmentation",
    commonName: "Vitiligo",
    notes: "Autoimmune loss of melanocytes; depigmented patches; often symmetric; psychological impact significant; phototherapy and topical steroids helpful"
  },
  {
    code: "L81.0",
    description: "Post-inflammatory hyperpigmentation",
    category: "Pigmentation",
    commonName: "Post-inflammatory hyperpigmentation",
    notes: "Darkening of skin after inflammation; more common in darker skin tones; usually resolves over months to years"
  },
  {
    code: "L81.1",
    description: "Chloasma (melasma)",
    category: "Pigmentation",
    commonName: "Melasma",
    notes: "Symmetric brown patches on face; related to sun, hormones (pregnancy, OCP), genetics; difficult to treat; prevention key"
  },
  {
    code: "L81.2",
    description: "Freckles",
    category: "Pigmentation",
    commonName: "Freckles",
    notes: "Benign melanin hyperpigmentation; usually in light-skinned, sun-exposed individuals; may darken with sun"
  },
  {
    code: "L81.4",
    description: "Other melanin hyperpigmentation",
    category: "Pigmentation",
    commonName: "Other pigmentation excess",
    notes: "Includes café-au-lait spots, nevus of Ota, other hyperpigmented lesions"
  },
  {
    code: "L81.9",
    description: "Disorder of skin pigmentation, unspecified",
    category: "Pigmentation",
    commonName: "Pigmentation disorder",
    notes: "Use when specific type not determined"
  },
  {
    code: "Q82.1",
    description: "Xeroderma pigmentosum",
    category: "Pigmentation",
    commonName: "Xeroderma pigmentosum",
    notes: "Rare genetic disorder; defective DNA repair; extreme photosensitivity; high risk of skin cancer; requires strict sun avoidance"
  },

  // ===== BENIGN LESIONS =====
  {
    code: "D22.9",
    description: "Melanocytic nevi, unspecified",
    category: "Benign Lesions",
    commonName: "Moles/Nevi",
    notes: "Common benign skin growth; monitor for atypical changes using ABCDE criteria"
  },
  {
    code: "D22.30",
    description: "Melanocytic nevi of face",
    category: "Benign Lesions",
    commonName: "Facial nevi",
    notes: "Moles on face; monitor for changes; may be cosmetically concerning"
  },
  {
    code: "D23.9",
    description: "Other benign neoplasm of skin, unspecified",
    category: "Benign Lesions",
    commonName: "Other benign skin growth",
    notes: "Various benign tumors and lesions of skin"
  },
  {
    code: "L82.0",
    description: "Inflamed seborrheic keratosis",
    category: "Benign Lesions",
    commonName: "Inflamed seborrheic keratosis",
    notes: "Seborrheic keratosis with inflammation; may itch or appear red; benign but cosmetically bothersome"
  },
  {
    code: "L82.1",
    description: "Other seborrheic keratosis",
    category: "Benign Lesions",
    commonName: "Seborrheic keratosis",
    notes: "Common benign lesion in older adults; greasy warty appearance; easily traumatized; easily removed"
  },
  {
    code: "L91.0",
    description: "Hypertrophic scar",
    category: "Benign Lesions",
    commonName: "Hypertrophic scar/Keloid",
    notes: "Excessive scar tissue; hypertrophic scars stay within wound boundaries; keloids extend beyond; more common in darker skin tones"
  },
  {
    code: "L72.0",
    description: "Epidermoid cyst",
    category: "Benign Lesions",
    commonName: "Epidermoid cyst",
    notes: "Common benign cyst; keratin-filled; may rupture and become inflamed; safe removal requires entire capsule"
  },
  {
    code: "L72.11",
    description: "Pilar cyst",
    category: "Benign Lesions",
    commonName: "Pilar/Trichilemmal cyst",
    notes: "Common on scalp; hard, keratin-filled; may have family history"
  },
  {
    code: "L72.3",
    description: "Sebaceous cyst",
    category: "Benign Lesions",
    commonName: "Sebaceous/Steatocystoma",
    notes: "Oil-filled cyst; may drain oily material; benign"
  },
  {
    code: "D17.20",
    description: "Lipoma of skin and subcutaneous tissue of unspecified sites",
    category: "Benign Lesions",
    commonName: "Lipoma",
    notes: "Benign fatty tumor; usually painless; may enlarge over time; surgical excision if desired"
  },
  {
    code: "L98.8",
    description: "Other specified disorders of the skin and subcutaneous tissue",
    category: "Benign Lesions",
    commonName: "Dermatofibroma",
    notes: "Common benign tumor; firm nodule; may be pruritic or tender; often post-trauma; easily clinically diagnosed but biopsy confirms"
  },

  // ===== CONNECTIVE TISSUE & AUTOIMMUNE =====
  {
    code: "L10.0",
    description: "Pemphigus vulgaris",
    category: "Connective Tissue & Autoimmune",
    commonName: "Pemphigus vulgaris",
    notes: "Autoimmune disorder; IgG antibodies against desmoglein 3; severe mucosal involvement; blistering and erosions; requires immunosuppression"
  },
  {
    code: "L12.0",
    description: "Bullous pemphigoid",
    category: "Connective Tissue & Autoimmune",
    commonName: "Bullous pemphigoid",
    notes: "Autoimmune; IgG against hemidesmosomes; tense blisters on flexures; less severe oral involvement than pemphigus; responds to topical/systemic steroids"
  },
  {
    code: "L93.0",
    description: "Discoid lupus erythematosus",
    category: "Connective Tissue & Autoimmune",
    commonName: "Discoid lupus erythematosus",
    notes: "Localized form of cutaneous lupus; scaly erythematous plaques often on face and ears; may scar if untreated; ~5% develop systemic lupus"
  },
  {
    code: "L93.1",
    description: "Subacute cutaneous lupus erythematosus",
    category: "Connective Tissue & Autoimmune",
    commonName: "Subacute lupus",
    notes: "Intermediate between discoid and systemic lupus; annular or papulosquamous lesions; ~60% have systemic involvement"
  },
  {
    code: "M32.0",
    description: "Systemic lupus erythematosus with skin involvement",
    category: "Connective Tissue & Autoimmune",
    commonName: "SLE with skin involvement",
    notes: "Malar (butterfly) rash, photosensitivity; systemic manifestations; rheumatology referral indicated"
  },
  {
    code: "L94.1",
    description: "Linear scleroderma",
    category: "Connective Tissue & Autoimmune",
    commonName: "Linear scleroderma",
    notes: "Sclerotic band-like lesions, often on face or extremity; can cause functional impairment; localized form"
  },
  {
    code: "M34.9",
    description: "Systemic sclerosis, unspecified",
    category: "Connective Tissue & Autoimmune",
    commonName: "Systemic sclerosis/Scleroderma",
    notes: "Multi-system fibrotic disorder; skin thickening and tightness; significant morbidity; requires internal medicine/rheumatology care"
  },

  // ===== WOUNDS & PROCEDURES =====
  {
    code: "L89.00",
    description: "Pressure ulcer (decubitus ulcer) — range includes L89.00 to L89.90",
    category: "Wounds & Procedures",
    commonName: "Pressure ulcer/Bed sore",
    notes: "Tissue damage from prolonged pressure; staged 1-4 based on depth; prevention key; requires wound care team approach"
  },
  {
    code: "L97.909",
    description: "Non-pressure chronic ulcer of unspecified part of unspecified lower leg",
    category: "Wounds & Procedures",
    commonName: "Chronic leg ulcer",
    notes: "Venous, arterial, or mixed etiology; assess vascular status; may require compression, elevate, or vascular intervention"
  },
  {
    code: "S00.01XA",
    description: "Unspecified superficial injury of scalp",
    category: "Wounds & Procedures",
    commonName: "Scalp wound",
    notes: "Traumatic injury; monitor for underlying skull fracture or head injury"
  },
  {
    code: "T14.0",
    description: "Unspecified open wound of unspecified body region",
    category: "Wounds & Procedures",
    commonName: "Open wound",
    notes: "Traumatic wound of unspecified type; requires wound assessment and possible tetanus prophylaxis"
  },
  {
    code: "Z48.00",
    description: "Encounter for change or removal of nonsurgical wound dressing",
    category: "Wounds & Procedures",
    commonName: "Wound dressing change",
    notes: "Post-procedure or post-injury wound management; not a diagnosis but procedure code"
  },

  // ===== OTHER =====
  {
    code: "L98.4",
    description: "Chronic ulcer of skin, not elsewhere classified",
    category: "Other",
    commonName: "Chronic skin ulcer",
    notes: "Non-pressure, non-classification specific chronic ulcer"
  },
  {
    code: "L30.2",
    description: "Cutaneous autosensitization",
    category: "Other",
    commonName: "Autosensitization dermatitis",
    notes: "Dermatitis from hypersensitivity to endogenous antigens; often secondary to original skin lesion"
  },
  {
    code: "L57.4",
    description: "Cutis laxa (elastosis) due to ultraviolet radiation",
    category: "Other",
    commonName: "Solar elastosis",
    notes: "Sun damage causing loss of skin elasticity; leathery appearance; preventable with sun protection"
  },
  {
    code: "B99.9",
    description: "Unspecified infectious disease",
    category: "Other",
    commonName: "Unspecified infection",
    notes: "Use when infectious etiology suspected but not specified"
  },
  {
    code: "R21",
    description: "Rash and other nonspecific skin eruption",
    category: "Other",
    commonName: "Nonspecific rash",
    notes: "Symptom code for rash of unknown etiology; try to determine specific diagnosis"
  },
  {
    code: "Z85.828",
    description: "Personal history of other malignant neoplasm of skin",
    category: "Other",
    commonName: "History of skin cancer",
    notes: "Use for follow-up visits of patients with prior skin cancer; not the active cancer itself"
  },
  {
    code: "Z80.8",
    description: "Family history of other genetic and familial disorders",
    category: "Other",
    commonName: "Family history of melanoma",
    notes: "Use when documenting family history of skin cancer/melanoma; important for risk assessment"
  }
];
