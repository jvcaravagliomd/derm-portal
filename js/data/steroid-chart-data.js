const STEROID_CHART = [
  {
    classNum: 1,
    potency: "Super-High Potency (Class I)",
    color: "#dc2626",
    drugs: [
      {
        name: "Clobetasol propionate",
        brand: "Temovate, Clobex",
        vehicle: "Cream, ointment, shampoo, spray",
        notes: "0.05% potency; most potent topical steroid available"
      },
      {
        name: "Betamethasone dipropionate 0.05% (augmented)",
        brand: "Diprolene AF, Diprolene",
        vehicle: "Cream, ointment",
        notes: "Augmented formulation increases penetration"
      },
      {
        name: "Halobetasol propionate",
        brand: "Ultravate",
        vehicle: "Cream, ointment",
        notes: "0.05%; extremely potent for thick plaques"
      },
      {
        name: "Flurandrenolide",
        brand: "Cordran Tape",
        vehicle: "Tape (occlusive)",
        notes: "4 µg/cm²; excellent for small area hypertrophic lesions"
      },
      {
        name: "Diflorasone diacetate",
        brand: "Psorcon",
        vehicle: "Ointment",
        notes: "0.05%; for severe psoriasis and lichen planus"
      }
    ],
    uses: [
      "Severe psoriasis plaques",
      "Lichen planus",
      "Thick lichenified dermatitis",
      "Pityriasis rubra pilaris",
      "Severe seborrheic dermatitis",
      "Necrobiosis lipoidica"
    ],
    avoid: [
      "Face, neck, intertriginous areas",
      "Thin-skinned areas",
      "Long-term continuous use (risk of atrophy, HPA suppression)",
      "Children (use with extreme caution)",
      "Pregnancy",
      "Large body surface areas"
    ],
    maxDuration: "2 weeks continuous; reassess before extending"
  },

  {
    classNum: 2,
    potency: "High Potency (Class II)",
    color: "#ea580c",
    drugs: [
      {
        name: "Fluocinonide",
        brand: "Lidex",
        vehicle: "Cream, gel, ointment, solution",
        notes: "0.05%; excellent for scalp (solution) and body"
      },
      {
        name: "Desoximetasone",
        brand: "Topicort",
        vehicle: "Cream, ointment, gel",
        notes: "0.25%; potent for inflammatory dermatitis"
      },
      {
        name: "Betamethasone dipropionate 0.05%",
        brand: "Diprosone",
        vehicle: "Cream, ointment",
        notes: "Non-augmented form; standard potency"
      },
      {
        name: "Halcinonide",
        brand: "Halog",
        vehicle: "Cream, ointment, solution",
        notes: "0.1%; good penetration with cream vehicle"
      },
      {
        name: "Amcinonide",
        brand: "Cyclocort",
        vehicle: "Ointment, cream, lotion",
        notes: "0.1%; effective for scaling dermatitis"
      }
    ],
    uses: [
      "Moderate-to-severe eczema and dermatitis",
      "Psoriasis (non-facial)",
      "Lichen planus",
      "Severe seborrheic dermatitis",
      "Photosensitivity reactions",
      "Pityriasis rubra pilaris"
    ],
    avoid: [
      "Face, neck, axillae, groin for extended use",
      "Large body surface area for prolonged duration",
      "Thin-skinned areas",
      "Children (relative caution)"
    ],
    maxDuration: "3-4 weeks; reassess regularly"
  },

  {
    classNum: 3,
    potency: "High-Medium Potency (Class III)",
    color: "#d97706",
    drugs: [
      {
        name: "Triamcinolone acetonide",
        brand: "Kenalog, Triderm",
        vehicle: "Cream, ointment",
        notes: "0.5%; strong for body use"
      },
      {
        name: "Fluticasone propionate",
        brand: "Cutivate",
        vehicle: "Ointment",
        notes: "0.005%; excellent safety profile; good for face"
      },
      {
        name: "Betamethasone valerate",
        brand: "Valisone",
        vehicle: "Ointment, cream, lotion",
        notes: "0.1%; 0.1% ointment is Class III; cream is Class IV"
      },
      {
        name: "Mometasone furoate",
        brand: "Elocon",
        vehicle: "Ointment",
        notes: "0.1% ointment; 0.1% cream/lotion is weaker (Class IV)"
      }
    ],
    uses: [
      "Moderate dermatitis and eczema",
      "Psoriasis",
      "Nummular eczema",
      "Allergic contact dermatitis",
      "Lichen nitidus",
      "Mild-moderate seborrheic dermatitis"
    ],
    avoid: [
      "Prolonged use on face/neck (use cautiously)",
      "Large BSA for extended periods",
      "Sensitive skin areas without interruption"
    ],
    maxDuration: "3-4 weeks; break periods recommended"
  },

  {
    classNum: 4,
    potency: "Medium Potency (Class IV)",
    color: "#ca8a04",
    drugs: [
      {
        name: "Triamcinolone acetonide",
        brand: "Kenalog",
        vehicle: "Ointment, cream",
        notes: "0.1% ointment; 0.1% cream is Class V"
      },
      {
        name: "Mometasone furoate",
        brand: "Elocon",
        vehicle: "Cream, lotion",
        notes: "0.1%; excellent safety for body and some facial use"
      },
      {
        name: "Fluocinolone acetonide",
        brand: "Synalar",
        vehicle: "Ointment",
        notes: "0.025% ointment; cream is Class V"
      },
      {
        name: "Hydrocortisone valerate",
        brand: "Westcort",
        vehicle: "Ointment, cream, lotion",
        notes: "0.2% ointment; cream is Class V"
      },
      {
        name: "Desoximetasone",
        brand: "Topicort LP",
        vehicle: "Cream, emollient cream",
        notes: "0.05%; low-potency formulation"
      }
    ],
    uses: [
      "Mild-to-moderate eczema and dermatitis",
      "Seborrheic dermatitis",
      "Mild psoriasis",
      "Allergic and irritant contact dermatitis",
      "Pruritus ani/vulvae",
      "Mild photodermatitis"
    ],
    avoid: [
      "Not recommended for prolonged facial use without breaks",
      "Can be used on body safely for several weeks"
    ],
    maxDuration: "4-8 weeks with monitoring; face: 1-2 weeks max"
  },

  {
    classNum: 5,
    potency: "Medium-Low Potency (Class V)",
    color: "#65a30d",
    drugs: [
      {
        name: "Triamcinolone acetonide",
        brand: "Kenalog",
        vehicle: "Cream",
        notes: "0.1% cream; safer alternative to ointment"
      },
      {
        name: "Fluocinolone acetonide",
        brand: "Synalar",
        vehicle: "Cream, solution",
        notes: "0.025% cream; good for scalp (solution)"
      },
      {
        name: "Hydrocortisone butyrate",
        brand: "Locoid",
        vehicle: "Cream, ointment, solution, lipocream",
        notes: "0.1%; good safety profile; versatile vehicles"
      },
      {
        name: "Fluticasone propionate",
        brand: "Cutivate",
        vehicle: "Cream, lotion",
        notes: "0.05% cream; safe for face"
      },
      {
        name: "Betamethasone valerate",
        brand: "Valisone",
        vehicle: "Cream, lotion",
        notes: "0.1% cream; safe for general body use"
      },
      {
        name: "Hydrocortisone valerate",
        brand: "Westcort",
        vehicle: "Cream, lotion",
        notes: "0.2% cream; safe for sensitive areas"
      }
    ],
    uses: [
      "Mild dermatitis and eczema",
      "Seborrheic dermatitis (scalp and body)",
      "Mild psoriasis",
      "Allergic contact dermatitis",
      "Facial dermatitis (safe option)",
      "Intertrigo",
      "Diaper rash"
    ],
    avoid: [
      "Very few restrictions; safe for most body areas",
      "Avoid occlusion on large areas for extended periods"
    ],
    maxDuration: "Safe for 2-4 weeks; can extend with monitoring"
  },

  {
    classNum: 6,
    potency: "Low Potency (Class VI)",
    color: "#0891b2",
    drugs: [
      {
        name: "Desonide",
        brand: "DesOwen, Tridesilon",
        vehicle: "Cream, ointment, lotion",
        notes: "0.05%; excellent safety for face and children"
      },
      {
        name: "Alclometasone dipropionate",
        brand: "Aclovate",
        vehicle: "Cream, ointment",
        notes: "0.05%; one of the safest topical steroids"
      },
      {
        name: "Fluocinolone acetonide",
        brand: "Synalar 0.01%",
        vehicle: "Cream, solution",
        notes: "0.01%; safest of fluocinolone formulations"
      }
    ],
    uses: [
      "Mild eczema and dermatitis",
      "Facial dermatitis (first-line)",
      "Seborrheic dermatitis (including face/scalp)",
      "Mild allergic contact dermatitis",
      "Intertrigo and intertriginous dermatitis",
      "Pediatric dermatitis",
      "Perioral dermatitis (cautious use)"
    ],
    avoid: [
      "Minimal restrictions; safe for face, neck, intertriginous areas",
      "Still avoid prolonged occlusion"
    ],
    maxDuration: "Safe for 4+ weeks; minimal HPA axis risk"
  },

  {
    classNum: 7,
    potency: "Lowest Potency (Class VII)",
    color: "#6366f1",
    drugs: [
      {
        name: "Hydrocortisone",
        brand: "Hytone, Cortaid, Anusol-HC",
        vehicle: "Cream, ointment, lotion",
        notes: "0.5%, 1%, 2.5%; many OTC brands available"
      },
      {
        name: "Dexamethasone",
        brand: "Generic",
        vehicle: "Cream, ointment",
        notes: "0.1%; minimal absorption; very safe"
      }
    ],
    uses: [
      "Very mild dermatitis and eczema",
      "Facial dermatitis",
      "Seborrheic dermatitis (maintenance)",
      "Mild pruritus",
      "Mild intertrigo",
      "Maintenance therapy after stronger steroids",
      "Pediatric and elderly use",
      "Perianal and intertriginous areas"
    ],
    avoid: [
      "Minimal restrictions; safest topical steroids available",
      "No significant atrophy risk with long-term use"
    ],
    maxDuration: "Safe for extended use; no restriction"
  }
];

const FTU_GUIDE = [
  {
    area: "Face & neck",
    ftus: 2.5,
    bsa: "~5%",
    tip: "Use Class VI or VII only — thin skin, high absorption"
  },
  {
    area: "One hand (front + back)",
    ftus: 1,
    bsa: "~2%",
    tip: "Fingertip unit = tip of index finger to first crease (~0.5g)"
  },
  {
    area: "Both hands",
    ftus: 2,
    bsa: "~4%",
    tip: ""
  },
  {
    area: "One arm",
    ftus: 3,
    bsa: "~6%",
    tip: ""
  },
  {
    area: "Both arms",
    ftus: 6,
    bsa: "~12%",
    tip: ""
  },
  {
    area: "One foot",
    ftus: 2,
    bsa: "~4%",
    tip: ""
  },
  {
    area: "Both feet",
    ftus: 4,
    bsa: "~8%",
    tip: ""
  },
  {
    area: "One leg",
    ftus: 6,
    bsa: "~12%",
    tip: ""
  },
  {
    area: "Both legs",
    ftus: 12,
    bsa: "~24%",
    tip: ""
  },
  {
    area: "Trunk front",
    ftus: 7,
    bsa: "~14%",
    tip: ""
  },
  {
    area: "Trunk back + buttocks",
    ftus: 7,
    bsa: "~14%",
    tip: ""
  },
  {
    area: "Groin/genitalia",
    ftus: 1,
    bsa: "~1%",
    tip: "Use Class VI or VII only — very high absorption, atrophy risk"
  },
  {
    area: "Full body (adult)",
    ftus: 40,
    bsa: "100%",
    tip: "Roughly 20g per full body application"
  }
];

const VEHICLE_GUIDE = [
  {
    vehicle: "Ointment",
    penetration: "Highest",
    bestFor: "Thick plaques, dry/scaly skin, palms/soles",
    avoid: "Hairy areas, acne-prone skin, hot humid conditions"
  },
  {
    vehicle: "Cream",
    penetration: "Moderate",
    bestFor: "Most body areas, cosmetically elegant, moist environments",
    avoid: "Nothing major — most versatile"
  },
  {
    vehicle: "Gel/solution",
    penetration: "Moderate-High",
    bestFor: "Scalp, hairy areas",
    avoid: "Dry cracked skin (stings)"
  },
  {
    vehicle: "Lotion/foam",
    penetration: "Lower",
    bestFor: "Scalp, large body surface areas, hairy regions",
    avoid: ""
  },
  {
    vehicle: "Tape (Cordran)",
    penetration: "Very High",
    bestFor: "Thick plaques, lichen simplex chronicus, small areas",
    avoid: "Large areas, infected skin"
  },
  {
    vehicle: "Spray",
    penetration: "Moderate",
    bestFor: "Large areas, scalp",
    avoid: "Near eyes"
  }
];


