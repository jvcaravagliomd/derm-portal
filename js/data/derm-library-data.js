// ════════════════════════════════════════════════════════════
//  DERMATOLOGY LIBRARY DATA
//  Plain-language condition summaries for MA reference.
// ════════════════════════════════════════════════════════════

const DERM_LIBRARY = [

  // ─── INFLAMMATORY CONDITIONS ────────────────────────────────

  {
    id: "atopic-dermatitis",
    emoji: "🌿",
    name: "Atopic Dermatitis (Eczema)",
    category: "Inflammatory",
    summary: "A chronic inflammatory skin condition causing itchy, dry, and inflamed skin. It often runs in families with allergies or asthma.",
    whatItIs: "Eczema is a chronic (long-term) condition where the skin barrier is weakened, making the skin easily irritated and prone to inflammation. It is not contagious.",
    keyFacts: [
      "Very common — affects ~10% of adults and up to 20% of children.",
      "Often flares and then improves (flare-remission cycle).",
      "Associated with food allergies, asthma, and allergic rhinitis ('atopic triad').",
      "Trigger avoidance, consistent moisturizing, and medications are the mainstays of control.",
      "Many children improve significantly as they get older."
    ],
    patientExplanation: "Eczema is a condition where the skin's natural protective barrier doesn't work as well as it should, so the skin gets dry, irritated, and itchy more easily than other people's skin. It is not contagious and it is not caused by poor hygiene. We manage it by keeping the skin well-moisturized, avoiding triggers, and using medication to calm flares.",
    maTalkingPoints: [
      "Reassure: it is not contagious and not caused by anything the patient did wrong.",
      "Moisturize immediately after bathing ('soak and smear') — apply within 3 minutes of getting out of the bath.",
      "Use fragrance-free, dye-free products (CeraVe, Vanicream, Eucerin).",
      "Avoid known triggers: certain fabrics (wool, synthetic), harsh soaps, sweat, stress, extreme temperatures.",
      "Use prescribed medications for flares as directed — do not stop on your own."
    ]
  },

  {
    id: "psoriasis",
    emoji: "🔴",
    name: "Plaque Psoriasis",
    category: "Inflammatory",
    summary: "An autoimmune condition causing rapid skin cell turnover, resulting in thick, scaly, silvery-white plaques on the skin.",
    whatItIs: "Psoriasis is caused by an overactive immune system that speeds up the skin cell growth cycle. Normally skin cells turn over every 28–30 days; in psoriasis this can happen in 3–5 days, causing a buildup of cells on the surface.",
    keyFacts: [
      "Affects ~2–3% of the population; autoimmune in origin.",
      "Common locations: elbows, knees, scalp, lower back.",
      "Can be associated with psoriatic arthritis (~30% of patients).",
      "Triggers include stress, illness, certain medications (lithium, beta-blockers), alcohol, and skin injury (Koebner phenomenon).",
      "Highly treatable with topicals, phototherapy, and biologics."
    ],
    patientExplanation: "Psoriasis is an autoimmune condition — it means your immune system is a bit overactive and accidentally causes your skin cells to grow too fast. The extra cells build up on the surface and create those thick, scaly patches. It is not contagious, and it is not caused by anything you did. We have very effective treatments today, including creams, light therapy, and medications that target the immune system directly.",
    maTalkingPoints: [
      "Not contagious — never spread by touching or being around someone.",
      "Psoriasis can affect joints — ask if the patient has any joint pain and document it.",
      "Flare triggers: stress, alcohol, smoking, certain medications, illness, and skin injury.",
      "Moisturizing daily helps control scaling between treatments.",
      "Biologics are very effective and safe for moderate-to-severe disease."
    ]
  },

  {
    id: "rosacea",
    emoji: "🌹",
    name: "Rosacea",
    category: "Inflammatory",
    summary: "A chronic facial skin condition causing persistent redness, visible blood vessels, and sometimes acne-like breakouts, primarily on the central face.",
    whatItIs: "Rosacea is a common chronic condition affecting the face — particularly the cheeks, nose, forehead, and chin. The exact cause is unknown but involves abnormal blood vessel reactivity and sometimes skin mite overgrowth (Demodex). It cannot be cured but is very manageable.",
    keyFacts: [
      "Most common in fair-skinned individuals aged 30–60.",
      "Subtypes: erythematotelangiectatic (ETR), papulopustular, phymatous, ocular.",
      "Triggers: sun, heat, exercise, spicy foods, alcohol, stress.",
      "Ocular rosacea affects the eyes — dry, red, gritty eyes.",
      "Rhinophyma (bulbous nose) is a phymatous subtype, more common in men."
    ],
    patientExplanation: "Rosacea is a chronic skin condition affecting the face that causes redness, visible small blood vessels, and sometimes acne-like bumps. It tends to flare with certain triggers — like sun, heat, or certain foods — and then calm down. It's not contagious and not caused by poor hygiene. While there's no cure, it's very manageable with the right treatments and trigger avoidance.",
    maTalkingPoints: [
      "Trigger journal can be very helpful — encourage patients to keep track of what causes flares.",
      "Sunscreen daily is essential — UV is one of the most common triggers.",
      "Gentle skincare only — no astringents, toners, or scrubs.",
      "Brief patients on common triggers: sun, hot beverages, spicy food, alcohol (especially red wine), exercise, wind.",
      "Eye involvement (redness, grittiness, sensitivity) should be flagged to the physician."
    ]
  },

  {
    id: "acne",
    emoji: "⭕",
    name: "Acne Vulgaris",
    category: "Inflammatory",
    summary: "A very common condition involving clogged pores, bacterial overgrowth, and inflammation, producing blackheads, whiteheads, papules, pustules, and nodules.",
    whatItIs: "Acne occurs when hair follicles become clogged with oil and dead skin cells, creating an environment where acne-causing bacteria (C. acnes) can overgrow and cause inflammation. Hormones play a major role, especially during adolescence.",
    keyFacts: [
      "Affects ~85% of people aged 12–24; can persist into adulthood.",
      "Types: comedonal (blackheads/whiteheads), papulopustular, nodulocystic.",
      "Hormonal acne in adult women: often jawline/lower face distribution.",
      "Scarring risk is highest with nodulocystic acne — early aggressive treatment is important.",
      "Treatment take 8–12 weeks minimum to show effect — compliance is key."
    ],
    patientExplanation: "Acne happens when pores get clogged with oil and dead skin cells. Bacteria that normally live on the skin can grow inside these clogged pores and cause inflammation — the redness, swelling, and pus you see. Hormones play a big role, which is why acne is so common in teenagers and in adult women around their period. With the right treatment plan and patience, most acne can be very well controlled.",
    maTalkingPoints: [
      "Patience is critical — treatments take 8–12 weeks. Reinforce this at every touchpoint.",
      "Do not pick, squeeze, or pop — this worsens scarring.",
      "Wash face twice daily with a gentle cleanser; do not over-wash (dries skin, worsens oil production).",
      "Non-comedogenic (won't clog pores) makeup and skincare products are recommended.",
      "Diet: high glycemic index foods and dairy may worsen acne in some patients — worth discussing if patient asks."
    ]
  },

  {
    id: "contact-dermatitis",
    emoji: "🤚",
    name: "Contact Dermatitis",
    category: "Inflammatory",
    summary: "A rash caused by skin contact with an irritant (irritant contact dermatitis) or an allergen (allergic contact dermatitis).",
    whatItIs: "Irritant contact dermatitis (ICD) results from direct damage to the skin by substances like soaps, bleach, or repeated water exposure. Allergic contact dermatitis (ACD) is a true immune reaction to a specific substance — common allergens include nickel, fragrance, rubber, and poison ivy.",
    keyFacts: [
      "ACD: delayed hypersensitivity reaction (Type IV) — appears 24–72 hours after exposure.",
      "Poison ivy/oak/sumac: most common cause of ACD in the US.",
      "Common ACD allergens: nickel (jewelry), fragrances, preservatives (methylisothiazolinone), rubber, neomycin.",
      "Patch testing is the gold standard for identifying allergens.",
      "ICD: hands are most commonly affected (frequent handwashing, healthcare workers)."
    ],
    patientExplanation: "Contact dermatitis is a rash that happens when the skin reacts to something it has touched. In allergic contact dermatitis, the immune system becomes sensitized to a specific substance — like nickel in jewelry or fragrance in lotion — and creates a rash when you come into contact with it again. The key is identifying and avoiding the trigger.",
    maTalkingPoints: [
      "Ask about new products (soap, lotion, laundry detergent), metals (jewelry, belt buckle), or plants.",
      "Poison ivy is contagious during the blister phase — reassure patient it is NOT (the rash cannot spread to others).",
      "The rash is not spreading because the poison ivy is spreading — the later-appearing areas just had less exposure initially.",
      "Avoidance is the most important treatment once the allergen is identified.",
      "Patch testing referral may be needed for recurrent or unidentified ACD."
    ]
  },

  {
    id: "lichen-planus",
    emoji: "🟣",
    name: "Lichen Planus",
    category: "Inflammatory",
    summary: "An inflammatory condition causing itchy, flat-topped, purple/violet papules on the skin, and lacy white patches inside the mouth.",
    whatItIs: "Lichen planus is an autoimmune-related inflammatory condition affecting the skin, mucous membranes, nails, and scalp. The exact cause is unknown. Skin lesions are characteristically described as the 'six P's': Pruritic, Planar (flat-topped), Purple, Polygonal, Papules, and Plaques.",
    keyFacts: [
      "Can affect skin, oral mucosa, nails, scalp (lichen planopilaris — causes scarring hair loss).",
      "Oral lichen planus: white lacy patches (Wickham striae) on buccal mucosa.",
      "May be associated with hepatitis C — screen if suspected.",
      "Usually self-limiting on skin (12–18 months); oral LP is more chronic.",
      "Erosive oral LP is premalignant — requires long-term monitoring."
    ],
    patientExplanation: "Lichen planus is an inflammatory condition where the immune system attacks the skin and sometimes the lining of the mouth. On the skin, it causes purple, flat, itchy bumps. In the mouth, it can appear as white lacy patches. It is not contagious. Most cases on the skin resolve on their own over 1 to 2 years, though the mouth can take longer.",
    maTalkingPoints: [
      "Skin LP is typically self-limiting in 12–18 months — reassure patient.",
      "Oral LP persists longer and should be monitored — direct patient to keep follow-up appointments.",
      "No cure, but medications (steroids, retinoids) can significantly reduce symptoms.",
      "Nail involvement can cause permanent nail changes if not treated promptly.",
      "Flag any mouth sores that bleed, are very painful, or have eroded areas — these need prompt physician review."
    ]
  },

  // ─── INFECTIONS ─────────────────────────────────────────────

  {
    id: "tinea",
    emoji: "🍄",
    name: "Tinea (Ringworm / Fungal Infection)",
    category: "Infections",
    summary: "Superficial fungal infections caused by dermatophytes, named by body area: tinea corporis (body), tinea pedis (foot/athlete's foot), tinea cruris (groin/jock itch), tinea versicolor.",
    whatItIs: "Tinea infections are caused by fungi called dermatophytes that live on keratin (the protein in skin, nails, and hair). Ringworm is a misleading name — there is no worm involved. It appears as a ring-shaped scaly patch. It is contagious via direct contact.",
    keyFacts: [
      "Very common; contagious via skin-to-skin or contact with contaminated surfaces (e.g., gym floors).",
      "Tinea capitis (scalp ringworm) requires oral antifungals — topicals don't penetrate hair follicle.",
      "Tinea versicolor: Malassezia yeast (not a dermatophyte) — causes hypo- or hyperpigmented patches, not ring-shaped.",
      "Tinea unguium (onychomycosis): nail fungus — requires prolonged oral treatment (terbinafine 6–12 weeks for fingernails, 12 weeks for toenails).",
      "High recurrence rate if treatment stopped early or source not eliminated."
    ],
    patientExplanation: "This is a fungal infection of the skin — despite being called 'ringworm,' it has nothing to do with worms. It's caused by a fungus that lives on the surface of the skin and thrives in warm, moist areas. It can be picked up from other people, pets, gym equipment, or locker room floors. With the right antifungal treatment, it should clear up, but it's important to complete the full course.",
    maTalkingPoints: [
      "Finish the full course of treatment even if the rash clears early.",
      "Keep the affected area clean and dry — fungus thrives in moisture.",
      "Wash towels and bedding frequently during treatment.",
      "Avoid sharing towels, clothing, or shoes.",
      "Pets can be a source — if treatment keeps failing, consider checking the family pet with a vet."
    ]
  },

  {
    id: "molluscum",
    emoji: "🔵",
    name: "Molluscum Contagiosum",
    category: "Infections",
    summary: "A viral skin infection causing small, flesh-colored, dome-shaped bumps with a central dimple (umbilication). Common in children.",
    whatItIs: "Molluscum contagiosum is caused by the molluscum contagiosum virus (MCV), a poxvirus. It spreads by direct skin contact or via contaminated surfaces. Each bump contains viral particles that can autoinoculate (spread to other areas of the same person's skin).",
    keyFacts: [
      "Very common in children; also spread sexually in adults.",
      "In immunocompromised patients (HIV), lesions can be very numerous and resistant.",
      "Lesions are self-limiting in immunocompetent individuals — resolve in 6–18 months without treatment.",
      "Treatments available: cantharidin ('beetle juice'), cryotherapy, curettage, imiquimod.",
      "Spreading to the eyelids is a concern — can cause chronic conjunctivitis."
    ],
    patientExplanation: "Molluscum contagiosum is a viral skin infection that causes small, smooth bumps with a tiny dimple in the center. It's caused by a virus and can spread by skin-to-skin contact or touching the same surfaces. In healthy children, these bumps usually go away on their own over 6 to 18 months, though there are treatments to speed things up. It's important to try not to scratch or pick the bumps, as this can spread them.",
    maTalkingPoints: [
      "Do not scratch or squeeze the bumps — this spreads the virus to nearby skin.",
      "Do not share towels, clothing, or bath sponges.",
      "Lesions near the eyes (eyelids) should be mentioned to the physician — can cause eye issues.",
      "Eczema patients may have more widespread molluscum (eczema molluscatum) — ensure this is flagged.",
      "Reassure parents: it is very common, not dangerous, and will resolve."
    ]
  },

  {
    id: "herpes-zoster",
    emoji: "⚡",
    name: "Herpes Zoster (Shingles)",
    category: "Infections",
    summary: "Reactivation of the varicella-zoster virus (chickenpox) lying dormant in nerve cells, causing a painful, blistering rash in a dermatomal distribution.",
    whatItIs: "After a person has chickenpox, the varicella-zoster virus stays dormant in the dorsal root ganglia. Decades later, it can reactivate — usually triggered by stress, illness, or immunosuppression — and travel down a nerve, causing a painful band of blisters on one side of the body.",
    keyFacts: [
      "Burning or stabbing pain often precedes the rash by 1–5 days (prodrome).",
      "Rash is unilateral, follows a dermatomal distribution — does not cross midline.",
      "Most contagious when blisters are active — can cause chickenpox in non-immune individuals.",
      "Postherpetic neuralgia (PHN): nerve pain that persists after rash resolves — most common complication.",
      "Shingrix vaccine (2-dose series) is highly effective (~97% in 50–69 age group) — recommended for adults 50+."
    ],
    patientExplanation: "Shingles is caused by the same virus that causes chickenpox. After you had chickenpox, the virus went to sleep in your nerves. Decades later, usually when the immune system is under stress, the virus can wake up and travel along a nerve to the skin — causing a painful, blistering rash. It is not the same as getting chickenpox again, but you can give chickenpox to someone who has never had it or the vaccine.",
    maTalkingPoints: [
      "Antiviral therapy (valacyclovir/acyclovir/famciclovir) is most effective if started within 72 hours of rash onset — urgency is important.",
      "Keep blisters covered when around non-immune individuals (especially pregnant women and immunocompromised people).",
      "Postherpetic neuralgia (persistent nerve pain) can occur — prompt treatment may reduce this risk.",
      "Discuss Shingrix vaccine with all patients 50 and older — even those who have had shingles.",
      "Ophthalmic zoster (near the eye/tip of nose) is an ophthalmology emergency — flag immediately for physician."
    ]
  },

  // ─── SKIN CANCER & PRECANCERS ───────────────────────────────

  {
    id: "bcc",
    emoji: "⬤",
    name: "Basal Cell Carcinoma (BCC)",
    category: "Skin Cancer",
    summary: "The most common skin cancer. Arises from basal cells in the deepest layer of the epidermis. Very rarely spreads.",
    whatItIs: "BCC is the most common form of skin cancer, caused by UV radiation damage over time. It usually appears as a shiny, pearly, or pink bump on sun-exposed areas. It grows slowly and very rarely spreads to other organs, but can cause significant local tissue destruction if left untreated.",
    keyFacts: [
      "Most common cancer in the US — >4 million cases per year.",
      "Subtypes: nodular (most common), superficial, morpheaform/sclerosing (most aggressive locally).",
      "Treatment options: Mohs surgery, standard excision, electrodessication and curettage (ED&C), radiation, vismodegib (advanced/metastatic).",
      "Very rarely metastasizes (<0.1%).",
      "High risk of developing additional BCCs after first diagnosis."
    ],
    patientExplanation: "Basal cell carcinoma is the most common type of skin cancer, and the good news is that it very rarely spreads to other parts of the body. It's caused by years of sun exposure and damage to the skin cells. If left untreated it can grow deeper into the skin, but when we catch and treat it early, outcomes are excellent.",
    maTalkingPoints: [
      "Reassure: BCC very rarely spreads — low mortality risk.",
      "Treatment is important to prevent local tissue damage.",
      "Sun protection is critical going forward — high risk of new BCCs.",
      "Annual skin exams are recommended — higher risk of developing additional skin cancers.",
      "Do not relay specific treatment or margin information without physician review."
    ]
  },

  {
    id: "scc",
    emoji: "🟠",
    name: "Squamous Cell Carcinoma (SCC)",
    category: "Skin Cancer",
    summary: "The second most common skin cancer. Can spread to lymph nodes and other organs if high-risk. Earlier treatment is key.",
    whatItIs: "SCC arises from squamous cells in the epidermis, typically in areas of chronic sun exposure. Unlike BCC, SCC has a real (though still relatively low) risk of metastasis, particularly when on the lip, ear, or in immunocompromised patients. Actinic keratoses are precursors.",
    keyFacts: [
      "Second most common skin cancer; ~1 million+ cases/year in the US.",
      "High-risk SCC features: diameter >2cm, depth >2mm, poorly differentiated, perineural invasion, lip, ear, immunocompromised host.",
      "Metastasis risk: ~2–5% overall, up to 30–50% in high-risk features.",
      "Often arises in actinic keratoses (AKs).",
      "Lymph node exam is important for high-risk SCC."
    ],
    patientExplanation: "Squamous cell carcinoma is a type of skin cancer that develops from cells on the surface of the skin, usually in areas that have had a lot of sun damage over the years. Most cases are curable when caught and treated early. Unlike the most common skin cancer (basal cell), squamous cell carcinoma can sometimes spread if it is large or in certain locations — so prompt treatment is important.",
    maTalkingPoints: [
      "Emphasize importance of prompt treatment — do not delay scheduling.",
      "Any talk of spread or staging must come from the physician, not the MA.",
      "Sun protection and skin surveillance going forward are critical.",
      "Patient may need sentinel lymph node discussion or referral for high-risk SCC — physician decision.",
      "Immunocompromised patients (transplant, HIV, chronic immunosuppression) have higher SCC risk — document medications."
    ]
  },

  {
    id: "melanoma",
    emoji: "⚫",
    name: "Melanoma",
    category: "Skin Cancer",
    summary: "The most serious skin cancer, arising from melanocytes. Early detection is critical — prognosis dramatically improves with early-stage diagnosis.",
    whatItIs: "Melanoma develops from melanocytes, the pigment-producing cells in the skin. It can arise in a pre-existing mole or de novo on normal skin. The ABCDE criteria help identify suspicious lesions. When caught early (in situ or thin), melanoma is highly curable; advanced melanoma is very serious.",
    keyFacts: [
      "~100,000 new cases/year in the US; ~8,000 deaths/year.",
      "5-year survival: >98% for Stage I, ~25% for Stage IV.",
      "Breslow thickness (depth in mm) is the most important prognostic factor.",
      "ABCDE: Asymmetry, Border, Color, Diameter >6mm, Evolving.",
      "Genetic risk factors: CDKN2A, MC1R, fair skin, red hair, many atypical nevi, family history."
    ],
    patientExplanation: "Melanoma is the most serious type of skin cancer. It starts in the cells that give skin its color (melanocytes). The reason we check moles and do regular skin exams is because when we catch melanoma early — before it has grown deep or spread — it is very often curable. The treatment and next steps depend on how deep it is, which the biopsy report tells us.",
    maTalkingPoints: [
      "Never relay melanoma results or staging information to a patient — physician must do this directly.",
      "Ensure follow-up is scheduled promptly after a melanoma diagnosis.",
      "Patient may need referral to surgical oncology or medical oncology — the physician will direct this.",
      "Encourage family members to also get skin checks — melanoma has genetic components.",
      "Sun protection and strict surveillance are critical after melanoma diagnosis."
    ]
  },

  {
    id: "actinic-keratosis",
    emoji: "🟡",
    name: "Actinic Keratosis (AK)",
    category: "Skin Cancer",
    summary: "Rough, scaly patches on sun-damaged skin caused by years of UV exposure. Precancerous — can develop into squamous cell carcinoma.",
    whatItIs: "Actinic keratoses (AKs) are pre-cancerous lesions that arise from abnormal keratinocytes in chronically sun-exposed skin. They represent a continuum that can progress to squamous cell carcinoma if untreated. They are very common in fair-skinned individuals with significant sun history.",
    keyFacts: [
      "Most common precancer — >58 million Americans have AKs.",
      "Appear as rough, scaly, flat or raised lesions on sun-exposed areas (face, scalp, ears, forearms, hands).",
      "~1 in 10 to 1 in 5 AKs can progress to SCC if untreated.",
      "Treatment options: cryotherapy (freezing), field therapy (5-FU cream, imiquimod, Picato, tirbanibulin), photodynamic therapy (PDT).",
      "Field cancerization: entire sun-exposed area has DNA damage — field therapy treats subclinical lesions."
    ],
    patientExplanation: "Actinic keratoses are rough, scaly spots caused by years of sun damage to the skin. They are not skin cancer yet, but they can turn into skin cancer if left untreated — which is why we treat them. The good news is that they respond very well to treatment, and being proactive about sun protection going forward can prevent new ones from forming.",
    maTalkingPoints: [
      "These are precancerous, not cancer — but treatment is important to prevent progression.",
      "Emphasize sun protection — SPF 30+ daily is essential, year-round.",
      "5-FU cream (Efudex): warn patient about the expected inflammatory reaction — it is supposed to get red and crusty. Reassure them this means it's working.",
      "PDT: strict light avoidance for 48 hours post-treatment is critical.",
      "Annual skin exams are recommended for patients with AKs."
    ]
  },

  // ─── HAIR & NAILS ───────────────────────────────────────────

  {
    id: "alopecia-areata",
    emoji: "👤",
    name: "Alopecia Areata",
    category: "Hair & Nails",
    summary: "An autoimmune condition causing patchy, non-scarring hair loss on the scalp or body.",
    whatItIs: "Alopecia areata is an autoimmune disease in which the immune system attacks hair follicles, causing hair to fall out in round or oval patches. The follicles are not destroyed, so regrowth is often possible. It is unpredictable — it can remain as a few patches or progress to total scalp (alopecia totalis) or body hair loss (alopecia universalis).",
    keyFacts: [
      "Affects ~2% of the population; can occur at any age.",
      "Often associated with other autoimmune conditions: thyroid disease, vitiligo, type 1 diabetes.",
      "Nail pitting is a common associated finding.",
      "Regrowth can occur spontaneously (50% within 1 year for localized disease).",
      "New FDA-approved treatments: baricitinib (Olumiant) and ritlecitinib (Litfulo) — JAK inhibitors."
    ],
    patientExplanation: "Alopecia areata is an autoimmune condition where the immune system mistakenly attacks the hair follicles, causing hair to fall out in patches. The follicles are not permanently damaged, so the hair can grow back — though the timing is unpredictable. There are now some very effective new treatments that can help.",
    maTalkingPoints: [
      "Hair follicles are not destroyed — regrowth is possible.",
      "Unpredictable course — be honest and empathetic about this.",
      "Emotional impact can be significant — listen and be compassionate.",
      "JAK inhibitors are a newer option — patients may ask about them. Defer details to physician.",
      "Nail pitting present? Document and mention to the physician."
    ]
  },

  {
    id: "androgenetic-alopecia",
    emoji: "💈",
    name: "Androgenetic Alopecia (Pattern Hair Loss)",
    category: "Hair & Nails",
    summary: "The most common form of hair loss in both men and women, caused by genetic and hormonal factors.",
    whatItIs: "Androgenetic alopecia (AGA) is genetically determined hair thinning caused by sensitivity of hair follicles to dihydrotestosterone (DHT). In men, it typically causes a receding hairline and crown thinning (Hamilton-Norwood pattern). In women, it causes diffuse thinning over the crown with preserved hairline (Ludwig pattern).",
    keyFacts: [
      "Affects ~50% of men by age 50 and ~50% of women by age 80.",
      "Treatments: minoxidil (topical/oral), finasteride (men), spironolactone (women), platelet-rich plasma (PRP), hair transplant.",
      "Results require 3–6 months minimum and are maintenance-dependent — stopping treatment leads to loss.",
      "Minoxidil: initial shedding in first 1–3 months is normal.",
      "Low-level laser therapy (LLLT) is an adjunct with modest evidence."
    ],
    patientExplanation: "This type of hair loss runs in families and is influenced by hormones — specifically how sensitive your hair follicles are to a hormone called DHT. It's very common and very treatable, though the treatments need to be used consistently over time. Most people need at least 3 to 6 months before noticing improvement.",
    maTalkingPoints: [
      "Treatments are maintenance, not a cure — stopping treatment leads to return of hair loss.",
      "Initial shedding with minoxidil is normal and temporary — warn patients upfront.",
      "Results take time — at least 3–6 months for noticeable improvement.",
      "Finasteride: for males only; discuss sexual side effects risk with physician present.",
      "Spironolactone: for females with hormonal pattern hair loss — discuss with physician."
    ]
  },

  // ─── PIGMENTATION ───────────────────────────────────────────

  {
    id: "vitiligo",
    emoji: "🤍",
    name: "Vitiligo",
    category: "Pigmentation",
    summary: "An autoimmune condition causing loss of melanocytes, resulting in white patches on the skin.",
    whatItIs: "Vitiligo occurs when the immune system attacks and destroys melanocytes (pigment-producing cells), leaving areas of skin without pigment. The patches are well-demarcated white macules and patches. It is not contagious and not harmful to general health, but can have significant psychosocial impact.",
    keyFacts: [
      "Affects 1–2% of the world population.",
      "Can occur at any age; often starts before age 30.",
      "Associated with autoimmune conditions: thyroid disease (Hashimoto's), type 1 diabetes, Addison's disease.",
      "Non-segmental (most common): bilateral, symmetric, often around eyes, mouth, hands.",
      "New FDA-approved treatment: ruxolitinib cream (Opzelura) — first and only approved vitiligo treatment.",
    ],
    patientExplanation: "Vitiligo is a condition where the immune system attacks the cells that produce skin color (melanocytes), leaving patches of skin without pigment. These white patches can appear anywhere on the body. It is not contagious, not caused by anything you did, and it doesn't affect your health — but we understand it can be emotionally difficult. There are now effective treatments to help restore color.",
    maTalkingPoints: [
      "Not contagious — ever, in any situation.",
      "Emotional impact is real and valid — validate the patient's feelings.",
      "Sun protection on depigmented skin is critical — no melanin means no natural UV protection.",
      "Opzelura (ruxolitinib cream) is FDA-approved and effective — doctor can discuss candidacy.",
      "Thyroid function should be checked periodically — increased risk of thyroid autoimmunity."
    ]
  },

  {
    id: "melasma",
    emoji: "🌑",
    name: "Melasma",
    category: "Pigmentation",
    summary: "A common hyperpigmentation condition causing brown or gray-brown patches, primarily on the face, often triggered by hormones and sun.",
    whatItIs: "Melasma is caused by overactive melanocytes that produce excess pigment, often triggered by hormones (pregnancy, OCPs), UV exposure, and genetics. It is more common in women and in people with Fitzpatrick skin types III–VI.",
    keyFacts: [
      "Classic locations: forehead, cheeks, upper lip, bridge of nose.",
      "Often called 'the mask of pregnancy' — worsens with pregnancy and hormonal contraceptives.",
      "UV is a major driver — even minimal sun exposure can undo weeks of treatment.",
      "Treatment: triple combination cream (hydroquinone, tretinoin, mild steroid), tranexamic acid, chemical peels, laser (cautiously).",
      "Requires long-term maintenance — it does not permanently resolve for most patients."
    ],
    patientExplanation: "Melasma causes brown or gray patches on the face, usually on the forehead, cheeks, and upper lip. It's triggered by a combination of sun exposure and hormones. It's very treatable, but it tends to come back — especially if you're not consistent with sun protection. Daily sunscreen and avoiding triggers are the most important parts of management.",
    maTalkingPoints: [
      "Daily SPF 50+ (with iron oxide if possible) is absolutely essential — most important single intervention.",
      "Sun avoidance: even brief sun exposure can worsen melasma significantly.",
      "Hormonal triggers: OCPs, HRT, pregnancy can worsen melasma — discuss alternatives with physician.",
      "Treatment takes weeks to months — patience is important.",
      "Tinted sunscreens with iron oxide offer additional protection from visible light."
    ]
  },

  // ─── BENIGN CONDITIONS ──────────────────────────────────────

  {
    id: "seborrheic-keratosis",
    emoji: "🟤",
    name: "Seborrheic Keratosis",
    category: "Benign",
    summary: "Extremely common benign skin growths that appear as waxy, 'stuck-on' brown or black lesions. No treatment required unless bothersome.",
    whatItIs: "Seborrheic keratoses (SKs) are benign epidermal tumors caused by the proliferation of keratinocytes. They are completely benign and have no malignant potential. They are extremely common, especially in older adults. Despite their sometimes alarming appearance, they require no treatment unless they are symptomatic or cosmetically undesirable.",
    keyFacts: [
      "One of the most common benign skin tumors — affects the vast majority of older adults.",
      "Appear as 'stuck-on,' waxy, brown to black, rough plaques.",
      "Can be easily confused with melanoma by patients (but characteristic features help differentiate).",
      "Sign of Leser-Trélat: sudden eruption of many SKs — may rarely indicate internal malignancy.",
      "Treatment if desired: cryotherapy, electrodessication, ESKATA (hydrogen peroxide topical)."
    ],
    patientExplanation: "Seborrheic keratoses are very common, completely benign growths that have no risk of turning into cancer. They tend to appear as we get older and look like brown or black waxy spots that appear 'stuck' to the skin. While they can look alarming, they are totally harmless. We only need to treat them if they are bothering you or causing symptoms like itching or irritation.",
    maTalkingPoints: [
      "Completely benign — no cancer risk. Very reassuring message for patients.",
      "Very common with aging — normal part of getting older.",
      "Treatment is cosmetic — not medically necessary.",
      "If a lesion is changing rapidly, bleeding, or not looking like a typical SK, it should be evaluated by the physician."
    ]
  },

  {
    id: "dermatofibroma",
    emoji: "🟫",
    name: "Dermatofibroma",
    category: "Benign",
    summary: "Common benign firm nodules in the dermis, often on the legs. Characteristic 'dimple sign' on pinching.",
    whatItIs: "Dermatofibromas are benign fibrous nodules that are very common, particularly on the lower legs of women. They may arise after minor trauma (insect bite, shaving nick). They are firm, usually brown or pink, and classically dimple inward when pinched (dimple sign). They are benign and treatment is not necessary.",
    keyFacts: [
      "More common in women; usually appear on lower legs.",
      "Firm, mobile nodule; dimple sign is pathognomonic.",
      "Multiple dermatofibromas may be associated with systemic conditions.",
      "Rarely need treatment; excision if symptomatic or diagnosis uncertain."
    ],
    patientExplanation: "A dermatofibroma is a small, firm, harmless lump in the skin — very common, especially on the legs. It is not cancerous and does not need to be removed unless it bothers you. Some people notice them after an insect bite or minor skin injury. They tend to stay the same size over time.",
    maTalkingPoints: [
      "Completely benign — no cancer risk.",
      "May be left alone; treatment only if symptomatic or diagnosis uncertain.",
      "Common finding on lower extremities — nothing to worry about."
    ]
  },

  {
    id: "hives",
    emoji: "🔴",
    name: "Urticaria (Hives)",
    category: "Inflammatory",
    summary: "Itchy, raised, red welts on the skin caused by histamine release. Individual hives typically resolve within 24 hours but new ones may continue to appear.",
    whatItIs: "Urticaria (hives) results from mast cell degranulation and histamine release, causing transient superficial swelling of the dermis. Individual wheals come and go — lasting ≤24 hours — but outbreaks can persist for weeks (acute) or >6 weeks (chronic). Chronic urticaria is most often idiopathic (no identifiable cause).",
    keyFacts: [
      "Acute urticaria (<6 weeks): common triggers include medications (penicillin, NSAIDs), foods, infections, insect stings.",
      "Chronic urticaria (>6 weeks): most cases are idiopathic; autoimmune in ~30–50%.",
      "Each individual hive lasts <24 hours — if lasting longer, consider urticarial vasculitis.",
      "Angioedema: deeper swelling affecting lips, eyelids, tongue — can accompany hives or occur alone.",
      "Omalizumab (Xolair) is approved for chronic spontaneous urticaria refractory to antihistamines."
    ],
    patientExplanation: "Hives are raised, itchy welts that appear and disappear on the skin. They're caused by the release of a chemical called histamine in the skin. Each individual hive typically lasts only a few hours, but new ones can keep appearing. Antihistamines are usually the first line of treatment. If hives are accompanied by throat tightness, difficulty breathing, or significant swelling, that is an emergency and you should call 911.",
    maTalkingPoints: [
      "Each individual hive lasts <24 hours — normal. The overall episode can last longer.",
      "Antihistamines are the first-line treatment — non-drowsy (cetirizine, loratadine, fexofenadine) preferred during the day.",
      "EMERGENCY: throat swelling, difficulty breathing, dizziness = anaphylaxis → 911 immediately.",
      "Keep a diary of potential triggers (foods, medications, exposures).",
      "If hives persist beyond 6 weeks, there are other treatment options — schedule follow-up."
    ]
  },

  // ─── NEW CONDITIONS (20 additional) ──────────────────────────

  {
    id: "seborrheic-dermatitis",
    emoji: "🤍",
    name: "Seborrheic Dermatitis",
    category: "Inflammatory",
    summary: "A common inflammatory condition causing scaling, redness, and itching on the scalp, face, and other areas. Often called 'dandruff' when on the scalp.",
    whatItIs: "Seborrheic dermatitis is an inflammatory condition involving overgrowth of Malassezia yeast and immune overresponse. It causes red, scaly patches typically in oily areas of the skin (scalp, face, chest, folds). It is not contagious and not caused by poor hygiene.",
    keyFacts: [
      "Affects ~5% of the general population; higher in men and in those with sebaceous skin.",
      "Common locations: scalp (dandruff), nasolabial folds, eyebrows, beard area, sternum, inframammary fold.",
      "Associated with Malassezia overgrowth and T-cell immune dysfunction.",
      "Chronic and often recurs despite treatment.",
      "Worse in winter, stress, and with poor scalp hygiene."
    ],
    patientExplanation: "Seborrheic dermatitis is a condition where the skin gets red, scaly, and itchy, usually in areas where there are natural oils — like the scalp, face, and chest. It involves a type of yeast that naturally lives on everyone's skin, but in seborrheic dermatitis, the skin is extra sensitive to it. It's not contagious and not caused by dirty hair or poor hygiene. We can manage it very well with antifungal and anti-inflammatory treatments.",
    maTalkingPoints: [
      "Not contagious and not caused by poor hygiene — this is a very common condition.",
      "Antifungal shampoos or creams are the first-line treatment.",
      "Regular treatment is needed — it tends to recur if you stop.",
      "Stress, winter weather, and skipping washes can trigger flares.",
      "Severe or facial involvement may need topical steroids or ketoconazole cream."
    ]
  },

  {
    id: "perioral-dermatitis",
    emoji: "👄",
    name: "Perioral Dermatitis",
    category: "Inflammatory",
    summary: "An inflammatory condition causing small papules and pustules around the mouth, often triggered by topical steroids or other irritants.",
    whatItIs: "Perioral dermatitis is a chronic inflammatory condition typically affecting the skin around the mouth (and sometimes nose and eyes). It is characterized by small erythematous papules and pustules. Common triggers include potent topical steroids, fluorinated toothpastes, cosmetics, and oral contraceptives.",
    keyFacts: [
      "More common in women aged 20–40.",
      "Often triggered by prolonged use of topical corticosteroids on the face.",
      "Can occur around the eyes (periocular) or nose (periroral) as well.",
      "Paradoxically may flare when steroids are withdrawn (steroid rebound).",
      "Treatment typically requires 6–12 weeks; antibiotics are often used."
    ],
    patientExplanation: "Perioral dermatitis is a condition causing small red bumps and sometimes pustules around the mouth. It often develops because the skin around the mouth is sensitive and can react to products like strong topical steroids, certain toothpastes, or cosmetics. The good news is that it responds well to treatment, though it may take a few weeks to improve.",
    maTalkingPoints: [
      "Often caused by overuse of topical steroids — avoid putting steroids near the mouth.",
      "If the patient was using a steroid cream here, explain that we will stop it and use gentler treatments instead.",
      "Temporarily avoiding all topical products except a bland moisturizer and cleanser can help.",
      "Oral antibiotics (like doxycycline) are often needed and very effective.",
      "Explain that discontinuing steroids may cause temporary worsening (rebound) before improvement."
    ]
  },

  {
    id: "hidradenitis-suppurativa",
    emoji: "💔",
    name: "Hidradenitis Suppurativa",
    category: "Inflammatory",
    summary: "A chronic inflammatory skin disorder causing recurrent painful nodules, abscesses, and draining sinuses in skin folds, particularly the armpits, groin, and buttocks.",
    whatItIs: "Hidradenitis suppurativa (HS) is a chronic, relapsing inflammatory disease of hair follicles and apocrine sweat glands, typically in intertriginous areas. It causes painful nodules, abscesses, sinus tracts, and scarring. The exact etiology is unclear but involves follicular occlusion, bacterial infection, and immune dysfunction.",
    keyFacts: [
      "Typically begins after puberty, peaking in 20s–40s.",
      "More common in women and in people of African descent.",
      "Common sites: axillae, inguinal/genital area, perineal region, inframammary folds.",
      "Often associated with obesity, smoking, polycystic ovary syndrome (PCOS), and inflammatory bowel disease.",
      "Biologic therapy (TNF-alpha inhibitors) has revolutionized treatment for moderate-severe HS."
    ],
    patientExplanation: "Hidradenitis suppurativa, or HS, is a chronic skin condition that causes painful nodules and infections in areas where skin rubs together — like the armpits, groin, and buttocks. These can rupture and drain. It is not caused by poor hygiene or infection you caught from someone else. It is an inflammatory condition and can be quite painful and bothersome. We have many treatment options available, from topical medications to oral antibiotics to biologic medications that target the immune system.",
    maTalkingPoints: [
      "This is NOT an infection you caught — it is a chronic inflammatory condition.",
      "It is NOT caused by poor hygiene — telling a patient this is harmful and inaccurate.",
      "Pain management is important — offer symptomatic relief (warm compresses, pain medication as appropriate).",
      "Avoid tight clothing and friction in affected areas.",
      "Smoking and obesity worsen HS — supportive conversations about lifestyle modifications can help.",
      "Refer to the physician for consideration of antibiotics, hormonal therapy, or biologics (TNF inhibitors)."
    ]
  },

  {
    id: "keratosis-pilaris",
    emoji: "❌",
    name: "Keratosis Pilaris",
    category: "Inflammatory",
    summary: "A very common, harmless condition causing small rough bumps on the skin, typically on the upper arms, shoulders, thighs, and buttocks.",
    whatItIs: "Keratosis pilaris (KP) is a benign follicular condition where keratin builds up around hair follicles, creating small, rough, often slightly red or pink bumps. It is not contagious, not harmful, and does not scar. The exact cause is unclear but involves a form of eczema and genetic predisposition.",
    keyFacts: [
      "Very common — affects ~10% of the population, more in children and young adults.",
      "Typical sites: upper outer arms, thighs, shoulders, buttocks.",
      "Often worse in winter (cold, dry air) and improves in summer.",
      "Associated with atopic dermatitis, asthma, and allergies.",
      "Purely cosmetic concern — no treatment is necessary, but hydration helps."
    ],
    patientExplanation: "Keratosis pilaris is a very common, harmless skin condition that causes small, rough bumps, usually on the upper arms and thighs. It happens because keratin (a protein in skin) builds up around hair follicles. It's not contagious, it doesn't hurt (unless irritated by picking), and it doesn't cause scars. Many people have it and don't even notice. If it bothers you cosmetically, we have things that can help smooth it out, though it tends to come back.",
    maTalkingPoints: [
      "Reassure: this is very common, harmless, and not contagious.",
      "Do not pick or scratch — this causes irritation and redness.",
      "Hydrating the skin helps — daily moisturizer, especially right after bathing.",
      "Often worse in winter; improves on its own in summer.",
      "Gentle exfoliation (loofa, washcloth) 2–3x/week can help texture.",
      "If bothersome, topical retinoids or AHAs/BHAs can improve appearance."
    ]
  },

  {
    id: "hand-eczema",
    emoji: "✋",
    name: "Hand Eczema",
    category: "Inflammatory",
    summary: "A common condition causing dry, irritated, and inflamed skin on the hands. Can be due to contact irritation, allergic contact dermatitis, or atopic predisposition.",
    whatItIs: "Hand eczema is a multifactorial condition where the hands become dry, red, itchy, and sometimes blistered. Types include irritant contact dermatitis (from frequent handwashing, chemicals, water exposure), allergic contact dermatitis (from nickel, preservatives, fragrances), and dyshidrotic eczema (small vesicles on palms and sides of fingers).",
    keyFacts: [
      "Common in healthcare workers, housekeepers, hairdressers, and people in wet occupations.",
      "Dyshidrotic eczema presents with itchy, burning vesicles on the palms and fingers; often seasonal.",
      "Irritant type is most common; allergic contact often related to specific allergen exposure.",
      "Flares can be triggered by frequent handwashing, harsh soaps, solvents, and allergen contact.",
      "Treatment requires both trigger avoidance and barrier repair."
    ],
    patientExplanation: "Hand eczema is a condition where the skin on your hands becomes dry, irritated, red, and itchy. Sometimes small blisters can form. It happens because the skin's protective barrier is weakened, making it vulnerable to irritants and allergens. Frequent handwashing, harsh soaps, and exposure to chemicals can trigger or worsen it. We manage it by protecting your hands from triggers, moisturizing frequently, and using medication to calm the inflammation.",
    maTalkingPoints: [
      "Avoid frequent handwashing if possible — use hand sanitizer when soap/water not needed.",
      "Use fragrance-free, gentle cleanser (CeraVe, Vanicream, Aveeno).",
      "Apply moisturizer within 3 minutes of washing — while skin is still slightly damp.",
      "Wear cotton-lined nitrile gloves when washing dishes or cleaning.",
      "Identify and avoid allergens — common ones: nickel, fragrances, preservatives, rubber.",
      "Dyshidrotic eczema often improves with stress management and topical steroids."
    ]
  },

  {
    id: "nummular-eczema",
    emoji: "◯",
    name: "Nummular Eczema",
    category: "Inflammatory",
    summary: "An inflammatory skin condition characterized by round, coin-shaped patches of eczema, often on the legs and arms.",
    whatItIs: "Nummular eczema is characterized by well-demarcated, coin-shaped (nummular = coin-like) patches of eczematous skin. It often appears suddenly and can be very itchy. The exact cause is unknown but may involve dry skin, irritant exposure, infection (bacterial or fungal), and genetic predisposition to eczema.",
    keyFacts: [
      "Common in men and in middle-aged adults; can occur at any age.",
      "Typical sites: extensor surfaces of limbs (shins, forearms), trunk.",
      "Often preceded by irritation, infection, or dry skin.",
      "Can be chronic and recurrent.",
      "Treatment involves hydration, topical steroids, and sometimes antibiotics if infected."
    ],
    patientExplanation: "Nummular eczema causes round or oval patches of itchy, inflamed, sometimes weepy skin — they look coin-shaped, which is where the name comes from. These patches can appear suddenly and be quite bothersome. We don't always know exactly what causes them, but they often appear after a minor skin injury or during dry weather. Good moisturizing and topical medications usually help control them.",
    maTalkingPoints: [
      "Reassure: these patches are not contagious and will improve with treatment.",
      "Keep nails trimmed and remind patient not to scratch — scratching spreads the rash.",
      "Frequent moisturizing is essential — the patches often start with dry skin.",
      "Avoid irritants: harsh soaps, detergents, fragrances.",
      "Topical steroids are effective for reducing itching and inflammation.",
      "If patches are weepy or show signs of infection, let the physician know."
    ]
  },

  {
    id: "stasis-dermatitis",
    emoji: "🩵",
    name: "Stasis Dermatitis",
    category: "Inflammatory",
    summary: "An inflammatory skin condition of the lower legs caused by poor venous circulation, resulting in red, scaly, sometimes weepy skin.",
    whatItIs: "Stasis dermatitis is an inflammatory condition that develops on the lower legs due to chronic venous insufficiency. Reduced blood flow leads to fluid accumulation (edema), inflammatory mediator buildup, and eczematous changes. Risk factors include varicose veins, deep vein thrombosis history, obesity, and prolonged standing.",
    keyFacts: [
      "Occurs on the lower legs, often on the inner ankle and medial lower leg.",
      "Associated with varicose veins, history of DVT or leg swelling.",
      "Can progress to atrophie blanche (shiny white scars) or venous ulcers if untreated.",
      "Management includes compression, leg elevation, topical treatments, and treating underlying venous disease.",
      "Venous ulcers are a serious complication requiring close monitoring."
    ],
    patientExplanation: "Stasis dermatitis is a skin condition on the lower legs caused by poor blood circulation. When blood flow in the veins isn't working well, fluid and inflammatory substances build up in the skin, causing redness, scaling, and sometimes oozing. It's not contagious. Treatment involves improving circulation by wearing compression stockings and elevating your legs when sitting. Topical medications also help calm the inflammation.",
    maTalkingPoints: [
      "Compression stockings are KEY — they improve circulation and are the cornerstone of treatment.",
      "Elevate legs above heart level for 20–30 minutes several times daily.",
      "Avoid standing for prolonged periods.",
      "Moisturize frequently to prevent cracking, which can lead to infection or ulceration.",
      "Watch for signs of ulceration (open weeping areas) — report to physician immediately if noted.",
      "Refer to vascular surgery if signs of severe venous insufficiency."
    ]
  },

  {
    id: "prurigo-nodularis",
    emoji: "🔴",
    name: "Prurigo Nodularis",
    category: "Inflammatory",
    summary: "A chronic condition characterized by intensely itchy, firm nodules that develop from a cycle of scratching and inflammation.",
    whatItIs: "Prurigo nodularis (PN) is a chronic inflammatory skin condition featuring 5–20 mm firm nodules caused by a scratch-itch cycle. The intense itching drives scratching, which causes inflammation and nodule formation. It is often associated with atopic dermatitis, anxiety, or lichen planus, but can be idiopathic.",
    keyFacts: [
      "Intensely pruritic — often described as unbearable itching.",
      "Typical sites: shins, forearms, dorsal hands, scalp, genitals.",
      "Can be severely disabling due to itch intensity and visible lesions.",
      "Often accompanied by significant psychological distress and sleep disruption.",
      "Treatment addresses both inflammation and itch; breaking the scratch cycle is essential."
    ],
    patientExplanation: "Prurigo nodularis is a condition where the intense itching causes you to scratch so much that firm, nodular bumps form. Once they start, they itch even more, creating a difficult cycle. The itching can be severe and affect sleep and quality of life. Treatment focuses on breaking this scratch cycle with strong anti-itch and anti-inflammatory medications, plus supportive care to help resist scratching.",
    maTalkingPoints: [
      "Empathize: the itch can be unbearably intense — validate the patient's experience.",
      "Breaking the scratch cycle is THE key to improvement.",
      "Keep nails very short and smooth; consider wearing gloves at night to prevent unconscious scratching.",
      "Stress management and adequate sleep are important — anxiety worsens pruritus.",
      "Strong topical treatments (potent steroids, calcineurin inhibitors) are often needed.",
      "Oral medications (antihistamines, antidepressants for itch) may be beneficial.",
      "Psychological support and dermatology-specific counseling can help."
    ]
  },

  {
    id: "pityriasis-rosea",
    emoji: "🎄",
    name: "Pityriasis Rosea",
    category: "Other",
    summary: "A self-limited inflammatory rash that typically presents with a herald patch followed by a widespread maculopapular eruption in a Christmas-tree distribution.",
    whatItIs: "Pityriasis rosea is an acute, self-limited exanthem of unknown etiology (possibly viral). It characteristically begins with a single 'herald patch' followed in 1–2 weeks by a widespread eruption of small macules and papules with a fine scale, distributed in a Christmas-tree pattern along skin tension lines.",
    keyFacts: [
      "Most common in people aged 10–35; rare in infants and elderly.",
      "Herald patch: 2–6 cm scaly patch, often on trunk, mimics tinea.",
      "Secondary rash: smaller lesions follow in 1–10 days, involving trunk and proximal extremities.",
      "Classic distribution: long axis of lesions follows Langer's lines (Christmas-tree pattern).",
      "Self-limited; resolves spontaneously in 6–8 weeks."
    ],
    patientExplanation: "Pityriasis rosea is a common rash that usually starts with one bigger patch (called a herald patch) and then spreads to cover much of the trunk and arms in a pattern that looks like a Christmas tree. It is not contagious. The rash is itchy but usually mild. The good news is it goes away on its own in about 6–8 weeks without any specific treatment — we just help manage the itching and irritation while it clears.",
    maTalkingPoints: [
      "Reassure: not contagious; not caused by an infection you caught from someone.",
      "It will go away on its own in weeks to months.",
      "The herald patch often mimics ringworm — the key is the pattern and timing of the secondary rash.",
      "Itching can be managed with topical moisturizers, mild steroids if needed, and antihistamines.",
      "Some patients benefit from phototherapy (UVB) if itching is severe.",
      "Pregnancy consideration: if patient is pregnant, discuss with physician (rare association with adverse outcomes)."
    ]
  },

  {
    id: "granuloma-annulare",
    emoji: "💍",
    name: "Granuloma Annulare",
    category: "Other",
    summary: "A benign inflammatory condition causing ring-shaped bumps on the skin, typically on hands and feet.",
    whatItIs: "Granuloma annulare is a benign, self-limited inflammatory dermatosis characterized by flesh-colored or slightly erythematous papules arranged in an annular (ring) configuration. The exact cause is unknown; it may be associated with diabetes or thyroid disease in some patients but is usually idiopathic.",
    keyFacts: [
      "Common in children and young adults; can occur at any age.",
      "Typical sites: dorsal hands and feet, elbows, knees.",
      "Lesions are typically asymptomatic (non-itchy, non-painful).",
      "Can be localized or generalized.",
      "Generalized form may be associated with underlying malignancy in older patients — screen as appropriate."
    ],
    patientExplanation: "Granuloma annulare is a benign skin condition that causes small bumps arranged in a ring shape, usually on the hands and feet. The bumps are not itchy or painful — they're a cosmetic concern mainly. It is not contagious and not related to an infection. It often goes away on its own, though it can take months. If it bothers you cosmetically, we have treatment options to improve it.",
    maTalkingPoints: [
      "Reassure: this is benign, not cancerous, not contagious.",
      "Many cases resolve spontaneously without treatment.",
      "Localized lesions are usually purely cosmetic; treatment is optional.",
      "Intralesional steroids can help flatten lesions if patient desires treatment.",
      "In generalized cases in older patients, screen for malignancy and diabetes per physician guidance.",
      "Topical steroids or retinoids may help appearance."
    ]
  },

  {
    id: "drug-eruption",
    emoji: "💊",
    name: "Drug Eruption",
    category: "Other",
    summary: "A skin reaction triggered by a medication, manifesting as various rash patterns including morbilliform, urticarial, or bullous reactions.",
    whatItIs: "Drug eruptions are cutaneous reactions to medications. Common types include: morbilliform (measles-like), urticarial (hives), bullous (blistering), exfoliative dermatitis, photosensitivity, and fixed drug eruption. Common culprits: antibiotics (PCN, sulfonamides), NSAIDs, anticonvulsants, and antiretrovirals.",
    keyFacts: [
      "Usually appear 7–14 days after starting medication but can occur anytime.",
      "Some drugs (penicillins) can cause immediate reactions.",
      "Morbilliform is most common type.",
      "Distinguishing true allergy from intolerance or photosensitivity is important.",
      "Most resolve 1–2 weeks after stopping the drug."
    ],
    patientExplanation: "A drug eruption is a rash or skin reaction caused by a medication you are taking. It can look like many different types of rashes — measles-like, hives, blisters, or just general redness and scaling. It usually appears days or weeks after starting a new medication. The rash will improve once the medication is stopped, though it can take 1–2 weeks to clear completely. We will help figure out which medication is causing it and work with the doctor to find an alternative.",
    maTalkingPoints: [
      "Ask about ALL new medications, supplements, and OTC products started in the past 2–3 weeks.",
      "Don't assume it's the most recent med — reactions can be delayed.",
      "Do NOT stop prescription medications without physician approval — discuss with MD which is safest to stop.",
      "Document exactly which med was started when; compare timing to rash onset.",
      "Some reactions (severe, blistering, fever, mucous membrane involvement) require urgent physician evaluation.",
      "Inform patient that allergic reactions can worsen with continued use."
    ]
  },

  {
    id: "erythema-multiforme",
    emoji: "🎯",
    name: "Erythema Multiforme",
    category: "Other",
    summary: "An acute inflammatory skin condition characterized by distinctive target lesions, often triggered by herpes simplex virus or medications.",
    whatItIs: "Erythema multiforme (EM) is an acute hypersensitivity reaction with characteristic 'target' or 'iris' lesions. Causes include HSV (most common), other infections, and medications (NSAIDs, antibiotics, anticonvulsants). Divided into minor (localized) and major (mucous membrane involvement) forms.",
    keyFacts: [
      "Classic target lesion: three concentric zones (red center, pale ring, red outer ring).",
      "HSV-triggered EM often recurrent, appearing days after HSV reactivation.",
      "Can involve mucous membranes (lips, oral, ocular) — EM major.",
      "Usually self-limited; resolves in 2–6 weeks.",
      "Severe cases may require systemic steroids or antivirals."
    ],
    patientExplanation: "Erythema multiforme is an acute rash that causes distinctive target-shaped lesions with a red center, white middle ring, and red outer ring — they look like a bullseye. It is often triggered by a herpes virus infection or certain medications. The rash usually appears on the hands and feet and sometimes spreads to other areas. It is not contagious. Most cases improve on their own in a few weeks, and we can manage symptoms while you heal.",
    maTalkingPoints: [
      "Document history of cold sores or oral herpes — strongly associated with recurrent EM.",
      "Identify timing — did EM appear days after an oral herpes outbreak?",
      "Review all recent medications — common triggers: antibiotics, NSAIDs, anticonvulsants.",
      "If mucous membranes involved (mouth, eyes, genitals), escalate to physician immediately.",
      "Most cases resolve without treatment; supportive care and treating trigger is key.",
      "If recurrent and HSV-related, suppressive antivirals may help prevent EM recurrences."
    ]
  },

  {
    id: "tinea-versicolor",
    emoji: "🌈",
    name: "Tinea Versicolor",
    category: "Viral",
    summary: "A fungal infection caused by Malassezia yeast, resulting in hypo- or hyperpigmented patches on the trunk and shoulders.",
    whatItIs: "Tinea versicolor (pityriasis versicolor) is a superficial fungal infection caused by Malassezia species. The yeast interferes with pigment production, causing hypo- or hyperpigmented patches (hence 'versicolor' = varied color). Risk factors include warm/humid climate, sweating, oily skin, and immunosuppression.",
    keyFacts: [
      "Very common in tropical and subtropical climates.",
      "More common in young to middle-aged adults.",
      "Typical distribution: upper back, chest, shoulders, neck.",
      "Not contagious.",
      "Tends to recur in predisposed individuals; maintenance therapy often needed."
    ],
    patientExplanation: "Tinea versicolor is a fungal infection caused by a yeast that naturally lives on everyone's skin. In some people, this yeast overgrows and causes patches of skin that are either lighter or darker than normal. These patches are usually on the chest, back, and shoulders. It is not contagious. It is easy to treat with antifungal medications, but it often comes back, especially in hot weather or after sweating a lot.",
    maTalkingPoints: [
      "Not contagious — cannot spread from person to person.",
      "Very common in warm, humid climates.",
      "Associated with excess sweating, oily skin, and warm weather.",
      "First-line treatment: topical antifungal creams or shampoos (selenium sulfide, ketoconazole, pyrithione zinc).",
      "Oral antifungals (fluconazole) used for widespread or recurrent cases.",
      "Maintenance therapy (monthly antifungal shampoo) reduces recurrence.",
      "Pigmentation returns gradually over weeks to months after treatment."
    ]
  },

  {
    id: "warts",
    emoji: "🌵",
    name: "Warts (Verruca)",
    category: "Viral",
    summary: "Common benign skin growths caused by human papillomavirus (HPV) infection, appearing on hands, feet, and other body areas.",
    whatItIs: "Warts are benign skin growths caused by human papillomavirus (HPV) infection. Types include: common warts (dorsal hands, fingers), plantar warts (foot soles, painful), flat warts (smooth, flat-topped), filiform warts (finger-like projections on face/neck), and genital warts.",
    keyFacts: [
      "Very common; ~10% of population has warts at any time.",
      "Contagious through direct contact or contaminated surfaces.",
      "Can persist for months to years; immune response eventually clears them.",
      "Plantar warts can be painful and often require treatment.",
      "Multiple treatment modalities available; recurrence is common."
    ],
    patientExplanation: "Warts are common skin growths caused by a virus called HPV. They are contagious through direct contact or touching contaminated surfaces. Warts are not dangerous, but they can be bothersome, especially if they're on the feet (where they can be painful) or on visible areas. Your immune system will eventually clear warts on its own, but treatment can speed things up. Treatment options include topical medications, freezing, burning, or other procedures.",
    maTalkingPoints: [
      "Reassure: warts are harmless; immune system will clear them eventually.",
      "Contagious — avoid picking and spreading to other areas or people.",
      "Do not pick or scratch warts; this spreads them.",
      "Plantar warts are often painful — patient may prefer treatment.",
      "Common warts on hands are cosmetic — treatment is optional.",
      "Multiple treatments often needed (4–8+ visits typical).",
      "Freezing (cryotherapy), topical medications, or laser are common options.",
      "After treatment, verruca may darken or blister before healing — normal."
    ]
  },

  {
    id: "bullous-pemphigoid",
    emoji: "🫧",
    name: "Bullous Pemphigoid",
    category: "Other",
    summary: "An autoimmune blistering disease causing large, fluid-filled blisters on the skin, most common in elderly patients.",
    whatItIs: "Bullous pemphigoid (BP) is an autoimmune condition where antibodies form against basement membrane proteins (BP180 and BP230), causing separation of the epidermis from dermis. This results in large, subepidermal blisters that are tense and don't rupture easily.",
    keyFacts: [
      "Most common autoimmune blistering disease in elderly (>60 years old).",
      "Characterized by large, tense blisters on flexural skin (lower abdomen, inner thighs, armpits).",
      "Intact blisters have clear or hemorrhagic fluid inside.",
      "Diagnosed by skin biopsy and indirect immunofluorescence.",
      "Treatment with topical or systemic corticosteroids; steroid-sparing agents for severe cases."
    ],
    patientExplanation: "Bullous pemphigoid is an autoimmune condition where your immune system accidentally creates antibodies that attack the skin in a way that causes large blisters to form. These blisters are usually on areas where skin rubs together — like inner thighs, armpits, and lower belly. The blisters contain clear or slightly bloody fluid. This is not contagious and not caused by anything you did. Treatment with steroid creams or pills usually controls it very well.",
    maTalkingPoints: [
      "Reassure: not contagious, not caused by infection or anything the patient did.",
      "Autoimmune = immune system is overreacting.",
      "Biopsy and blood tests help confirm the diagnosis.",
      "Topical steroids are first-line for localized disease.",
      "Systemic steroids are often needed for extensive involvement.",
      "Steroid-sparing agents (azathioprine, mycophenolate) reduce long-term steroid exposure.",
      "Wound care: keep blisters intact if possible (they provide natural dressing); if ruptured, treat as any blister."
    ]
  },

  {
    id: "pyoderma-gangrenosum",
    emoji: "🌀",
    name: "Pyoderma Gangrenosum",
    category: "Other",
    summary: "A rare, rapidly expanding painful ulcer, often associated with inflammatory bowel disease, rheumatoid arthritis, or other systemic conditions.",
    whatItIs: "Pyoderma gangrenosum (PG) is a rare, sterile neutrophilic inflammatory dermatosis characterized by rapidly enlarging, painful ulcers with a violaceous, undermined border. Despite the name, it is not infectious ('pyoderma' is a misnomer). Associated with IBD (~50%), RA, hematologic malignancy, and other systemic conditions.",
    keyFacts: [
      "Rare; incidence ~1–4 per million.",
      "Very painful ulcers that expand rapidly over days to weeks.",
      "Characteristic violaceous (purple-red) undermined borders.",
      "Often on lower extremities but can occur anywhere.",
      "Strong association with inflammatory bowel disease (UC > Crohn's)."
    ],
    patientExplanation: "Pyoderma gangrenosum is a rare condition that causes rapidly expanding, very painful ulcers with a distinctive purple-red edge. It is sterile — not caused by infection despite the name. It is often associated with inflammatory bowel disease, rheumatoid arthritis, or other inflammatory conditions. This is a serious condition that requires urgent evaluation and treatment by the physician, as it can cause significant scarring if not managed properly.",
    maTalkingPoints: [
      "This requires immediate physician evaluation — do not delay.",
      "Not caused by infection — cultures will be negative (sterile).",
      "Very painful; document pain level and impact on function.",
      "Ask about history of IBD, RA, or other autoimmune conditions.",
      "Rapid expansion is typical — track measurements of ulcer size at each visit.",
      "Treatment is systemic: high-dose steroids, often with steroid-sparing agents.",
      "Avoid aggressive debridement or surgery if possible — can worsen (pathergy).",
      "Refer to rheumatology if systemic disease not yet identified."
    ]
  },

  {
    id: "keloid-hypertrophic-scar",
    emoji: "💔",
    name: "Keloid and Hypertrophic Scar",
    category: "Benign Growths",
    summary: "Overgrowth of scar tissue following injury, with keloids extending beyond the original wound and hypertrophic scars staying within the original borders.",
    whatItIs: "Keloids and hypertrophic scars are both excessive scar tissue responses to injury. Keloids extend beyond the original wound borders and are difficult to treat; hypertrophic scars stay within original borders and often improve with time. Keloids are more common in darker-skinned individuals and in certain body locations (chest, shoulders, earlobes).",
    keyFacts: [
      "Keloids are genetically predisposed; more common in people of African, Hispanic, and Asian descent.",
      "Risk sites for keloid formation: chest, shoulders, earlobes, back.",
      "Hypertrophic scars typically improve over 12–24 months; keloids persist.",
      "Keloid treatment is difficult; multimodal approach often needed.",
      "Prevention through proper wound care and tension reduction is important."
    ],
    patientExplanation: "A keloid is thick, raised scar tissue that grows beyond the edges of the original wound. A hypertrophic scar is thick, raised scar tissue that stays within the original wound borders. Both form as part of the body's healing response, but they overshoot normal healing. Keloids are more common in people with darker skin and can form even from minor injuries (piercing, small cut). Hypertrophic scars often improve on their own over time, while keloids usually don't improve without treatment.",
    maTalkingPoints: [
      "Keloids are NOT preventable in predisposed individuals — even minor injury can trigger them.",
      "Risk sites: earlobes (piercing), chest, shoulders, upper back.",
      "Hypertrophic scars improve over 12–24 months — often no treatment needed.",
      "Keloid prevention: minimize tension on wounds with careful closure technique; intralesional steroids after surgery if high-risk patient.",
      "Keloid treatment: intralesional steroids, silicone gel, cryotherapy, laser, surgical excision (with risk of recurrence or larger keloid).",
      "Avoid surgical excision alone in keloid-prone patients unless combined with other treatments."
    ]
  },

  {
    id: "epidermal-inclusion-cyst",
    emoji: "⚫",
    name: "Epidermal Inclusion Cyst",
    category: "Benign Growths",
    summary: "A common, benign cyst filled with keratin, often with a characteristic central pore or 'blackhead'.",
    whatItIs: "Epidermal inclusion cysts (previously called epidermoid cysts) are benign, keratin-filled cysts arising from the epidermis. They are benign, non-cancerous, and do not become cancerous. They often have a central punctum (small pore) where keratin can express. Risk increased by trauma, acne, or family history.",
    keyFacts: [
      "Very common, especially on face, neck, trunk, and genitals.",
      "Often have a central pore; may expel cheesy keratin if squeezed.",
      "Can become inflamed if infected or rupture.",
      "Benign and do not require treatment unless bothersome, infected, or inflamed.",
      "Removal is simple if patient desires; recurrence is rare with proper technique."
    ],
    patientExplanation: "An epidermal inclusion cyst is a common, benign bump under the skin filled with keratin (a protein normally found in skin and hair). Often there's a small dark spot (blackhead-like pore) on top. The cyst is not dangerous and does not turn into cancer. If you squeeze it, a thick, yellowish keratin material comes out. If it becomes infected or bothers you, we can remove it with a simple procedure.",
    maTalkingPoints: [
      "Reassure: completely benign, not cancerous.",
      "Advise against squeezing — this can cause infection or rupture.",
      "If infected (red, warm, draining pus), may need antibiotics or drainage before removal.",
      "Simple procedure: small incision, expression of contents, complete capsule removal to prevent recurrence.",
      "Removal is optional unless bothersome or symptomatic.",
      "Recovery is quick; minimal scarring if excised properly."
    ]
  },

  {
    id: "lipoma",
    emoji: "🟡",
    name: "Lipoma",
    category: "Benign Growths",
    summary: "A common, benign fatty tumor that grows slowly under the skin, often on the back, neck, or shoulders.",
    whatItIs: "A lipoma is a benign, slow-growing tumor of mature fat cells (adipose tissue). It is encapsulated and does not infiltrate surrounding tissue. Lipomas are very common, especially in middle-aged and older adults. They are never cancerous and do not require treatment unless causing cosmetic concern or physical symptoms.",
    keyFacts: [
      "Very common — many people have multiple lipomas.",
      "Soft, mobile, painless bump under the skin.",
      "Grows very slowly over months to years.",
      "Never becomes cancerous.",
      "Removal is simple if desired; can be done under local anesthesia."
    ],
    patientExplanation: "A lipoma is a soft, slow-growing lump of fatty tissue under the skin. It is completely benign — not dangerous and will not turn into cancer. Lipomas are very common, especially as we get older. If it bothers you cosmetically or physically, we can remove it with a simple procedure under local anesthesia. If you leave it alone, it will just stay there or grow very slowly.",
    maTalkingPoints: [
      "Reassure: benign fatty tumor, never becomes cancer.",
      "No treatment needed unless patient desires removal.",
      "Simple office or operating room procedure: small incision, removal of fatty mass and capsule.",
      "Minimal scarring if done properly.",
      "Recurrence is rare if entire mass and capsule removed.",
      "Liposuction alone has high recurrence; excision of entire mass preferred."
    ]
  },

  {
    id: "condyloma-acuminata",
    emoji: "🦠",
    name: "Condyloma Acuminata (Genital Warts)",
    category: "Viral Conditions",
    summary: "Sexually transmitted growths caused by Human Papillomavirus (HPV), most commonly types 6 and 11. Appear on the genitals, perianal skin, or inner thighs. Treatable but HPV cannot be fully eliminated from the body.",
    whatItIs: "Condyloma acuminata are soft, flesh-colored or pink growths caused by HPV infection. They are one of the most common sexually transmitted infections. They are spread through skin-to-skin sexual contact — not through toilet seats, towels, or casual contact. Most people with HPV never develop visible warts; the virus can be present in the skin without any symptoms. Treatment targets visible warts but the virus itself remains in the body.",
    keyFacts: [
      "Caused by HPV types 6 and 11 (low-risk, non-cancer-causing types for visible warts).",
      "Spread by skin-to-skin sexual contact — condoms reduce but do not eliminate risk.",
      "Incubation period: weeks to months (sometimes years), making it difficult to pinpoint the source.",
      "Treatment options: imiquimod cream (home use), cryotherapy (in-office liquid nitrogen), or combination of both.",
      "Perianal warts: Dr. Caravaglio treats topically and with cryotherapy. Shave removal, excision, and laser are NOT performed in the perianal area by dermatology — those require colorectal surgery referral.",
      "Internal warts at or above the anal verge require gastroenterology or colorectal surgery evaluation.",
      "Recurrence is common — HPV stays in the skin and warts can return even after successful treatment.",
      "HPV vaccine (Gardasil 9) protects against types 6 and 11 (warts) and high-risk types."
    ],
    patientExplanation: "Genital warts are caused by a very common virus called HPV (Human Papillomavirus). They are spread through skin-to-skin sexual contact. We can treat and remove the visible warts, but the HPV virus stays in your body — this means the warts can sometimes come back after treatment. This does not mean the treatment failed; it just means the virus is still there. The good news is that the types of HPV that cause visible warts (types 6 and 11) are not the types that cause cancer. We will work with you on a treatment plan, and we will give you a handout that answers all your questions.",
    maTalkingPoints: [
      "Use a non-judgmental, matter-of-fact tone — patients are often embarrassed and anxious.",
      "Contagiousness: HPV is very contagious through sexual contact. Patients should avoid sexual contact during active treatment. Condoms reduce transmission risk but do not eliminate it because HPV can be on skin not covered by a condom.",
      "Sexual activity: 'The physician recommends avoiding sexual contact while the warts are being treated. Once the warts have cleared, you can discuss resuming activity at your follow-up visit, and condom use is strongly recommended going forward.'",
      "Treatment timeline: 'Treatment can take anywhere from 6 to 16 weeks, sometimes longer. Some patients need multiple in-office treatments and the at-home cream between visits. Staying consistent with treatment is very important.'",
      "Recurrence: 'Even after the warts clear, the HPV virus stays in the body, so warts can come back. About 30–70% of patients see some recurrence in the first year. This is normal and expected — we will monitor you at follow-up visits.'",
      "Perianal warts — Dr. Caravaglio's scope: topical therapy and cryotherapy are performed here. If a patient asks about surgery or laser in the perianal area, explain that for perianal lesions, excision and laser are done by a colorectal surgeon, not dermatology. Document and communicate this to the physician for the referral.",
      "Internal warts (anal verge / inside the anal canal): 'If warts are located inside the anal canal, that area requires a gastroenterologist or colorectal surgeon for evaluation and treatment. Dr. Caravaglio will refer you to the appropriate specialist.'",
      "Partner notification: 'HPV is very common and can be passed between partners without either person knowing. We recommend you let your sexual partner(s) know so they can be evaluated as well.'",
      "Cancer concern: reassure that types 6 and 11 (which cause visible warts) are low-risk for cancer. High-risk HPV types (16, 18) that cause cervical and other cancers do NOT typically cause visible warts. Women should be up to date on Pap smears.",
      "HPV vaccine: ask about vaccination status — Gardasil 9 is recommended through age 26, and can be discussed up to age 45 with the physician."
    ]
  },

  {
    id: "cutaneous-t-cell-lymphoma",
    emoji: "🔴",
    name: "Cutaneous T-Cell Lymphoma (Mycosis Fungoides)",
    category: "Skin Cancer",
    summary: "A rare lymphoma affecting the skin, presenting as patches, plaques, and tumors. Also called mycosis fungoides in early stages.",
    whatItIs: "Cutaneous T-cell lymphoma (CTCL) includes a spectrum of malignancies of skin-homing T lymphocytes. Mycosis fungoides (MF) is the most common form, characterized by progressive stages: patch (flat, thin lesions), plaque (thicker infiltrated lesions), and tumor (nodular disease). Sézary syndrome is an erythrodermic variant with blood involvement.",
    keyFacts: [
      "Rare; accounts for ~3–5% of all lymphomas.",
      "Slowly progressive disease; early patches may remain stable for years.",
      "Patch stage often misdiagnosed as dermatitis or psoriasis.",
      "Diagnosis: clinical history, biopsy, TCR clonality testing.",
      "Treatment: topical (steroids, retinoids), phototherapy (PUVA, NB-UVB), or systemic (oral medications, biologics)."
    ],
    patientExplanation: "Cutaneous T-cell lymphoma is a rare cancer of the lymphocytes (immune cells) in the skin. In early stages, it can look like patches of psoriasis or eczema — it's easy to miss. As it progresses, it forms thicker plaques and sometimes nodules. It usually grows slowly, so early stages may stay the same for years. Diagnosis requires a skin biopsy. Treatment depends on the stage and can include topical creams, light therapy, or systemic medications.",
    maTalkingPoints: [
      "Often misdiagnosed as eczema or psoriasis initially — maintain suspicion if rash doesn't respond to standard therapy.",
      "Key features: patches that don't improve with steroids, unusual distribution, or long history of treatment-resistant rash.",
      "Biopsy with TCR (T-cell receptor) clonality testing confirms diagnosis.",
      "Early-stage disease (patch/thin plaque) has excellent prognosis with appropriate treatment.",
      "Refer to oncology if CTCL suspected — specialized management important.",
      "Document stage carefully — affects prognosis and treatment urgency.",
      "Supportive care: emollients, sun protection, stress management."
    ]
  },

];

