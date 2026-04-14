const PROCEDURE_DATA = [
  {
    id: "mohs",
    name: "Mohs Micrographic Surgery",
    emoji: "🔪",
    category: "Surgery",
    duration: "2-4 hours (varies based on stages)",
    beforeTitle: "Before Your Mohs Micrographic Surgery",
    before: [
      "Arrive with clean skin (no lotions, makeup, or sunscreen on the treatment area)",
      "Eat a full meal before your appointment (procedure can take several hours)",
      "Bring a book, tablet, or other entertainment — wait times between stages can be lengthy",
      "Wear comfortable, loose-fitting clothing for easy access to the surgical area",
      "Do NOT take aspirin, ibuprofen, naproxen, or fish oil for 7 days prior (unless prescribed for a heart condition or blood clot — do not stop these medications without checking with your prescribing physician)",
      "Bring a complete list of all medications and supplements you take",
      "Arrange for someone to drive you home if the wound is large or located near your eyes",
      "Do NOT consume alcohol for 24 hours prior to surgery"
    ],
    afterTitle: "After Your Mohs Micrographic Surgery",
    after: [
      "Keep the wound covered and clean at all times",
      "Change the dressing once daily: gently wash with soap and water, apply Vaseline or Aquaphor, then re-cover",
      "Keep the wound moist — do not let it air dry completely until fully healed",
      "Do NOT soak in baths, pools, hot tubs, or other bodies of water until the wound is completely healed",
      "Limit strenuous activity and heavy lifting for 2 weeks (duration depends on wound location)",
      "Elevate the treated area if possible — especially important for face and scalp wounds (use an extra pillow when sleeping)",
      "Expect bruising and swelling — this is completely normal, especially around the eyes and face",
      "Take Tylenol (acetaminophen) for pain control — do NOT use ibuprofen or aspirin for the first 48 hours",
      "Do NOT consume alcohol for 48 hours after surgery (increases bleeding risk)",
      "Avoid touching, picking, or scratching the wound"
    ],
    healingTimeline: "Healing typically takes 2-6 weeks depending on the size and location of the wound. Larger wounds or those requiring flap or graft repair take longer to heal. The scar may appear red and raised initially but will improve significantly over 6-12 months.",
    callOffice: [
      "Increasing redness, warmth, or swelling beyond the edges of the wound",
      "Yellow, green, or foul-smelling discharge or pus",
      "Wound edges separating or opening up",
      "Sutures popping or coming loose",
      "Significant pain not controlled by Tylenol",
      "Fever over 100.4°F"
    ],
    goToER: [
      "Uncontrolled bleeding after 15-20 minutes of direct pressure",
      "High fever with rapidly spreading redness (may indicate serious infection)",
      "Severe allergic reaction (difficulty breathing, widespread rash)"
    ],
    maNote: "This is a lengthy procedure. Ensure the patient has entertainment and understands wait times between stages. Verify driver availability and medication list before the procedure."
  },
  {
    id: "excision",
    name: "Standard Excision",
    emoji: "✂️",
    category: "Surgery",
    duration: "30-60 minutes",
    beforeTitle: "Before Your Standard Excision",
    before: [
      "Arrive with clean skin (no lotions, makeup, or sunscreen on the treatment area)",
      "Do NOT take aspirin, ibuprofen, naproxen, or fish oil for 7 days prior (unless prescribed for a heart condition — do not stop without checking with your doctor)",
      "Do NOT consume alcohol for 24 hours prior",
      "Wear comfortable, loose-fitting clothing",
      "Arrange transportation if needed (most patients can drive afterward, but check with the physician if you feel dizzy)",
      "Eat a light to normal meal beforehand"
    ],
    afterTitle: "After Your Standard Excision",
    after: [
      "Keep the wound covered and clean",
      "Change the dressing once daily: gently wash with soap and water, apply Vaseline or Aquaphor, then re-cover",
      "Keep the wound moist — apply ointment continuously until healed",
      "Sutures will be removed in 7-21 days depending on location",
      "Do NOT soak in baths, pools, or hot tubs until fully healed",
      "Limit strenuous activity and heavy lifting for 1-2 weeks",
      "Take Tylenol for pain — do NOT use ibuprofen or aspirin for the first 48 hours",
      "Elevate the area if possible to reduce swelling",
      "Do NOT consume alcohol for 48 hours",
      "Avoid touching, picking, or scratching the wound"
    ],
    healingTimeline: "Initial wound closure takes 1-2 weeks. Sutures are typically removed in 7-21 days depending on body location. Complete healing and scar maturation can take 3-6 months.",
    callOffice: [
      "Signs of infection (increasing redness, warmth, pus, or foul odor)",
      "Wound opening or separating (wound dehiscence)",
      "Premature loss of sutures",
      "Significant pain not controlled by medication",
      "Fever over 100.4°F"
    ],
    goToER: [
      "Uncontrolled bleeding",
      "Signs of serious infection with fever"
    ],
    maNote: "Pathology results will be pending. Schedule suture removal appointment at time of procedure. Ensure patient knows when to return for pathology review."
  },
  {
    id: "shave-biopsy",
    name: "Shave Biopsy",
    emoji: "🔬",
    category: "Diagnostic",
    duration: "5-10 minutes",
    beforeTitle: "Before Your Shave Biopsy",
    before: [
      "Arrive with clean skin (no makeup, lotions, or sunscreen on the area to be biopsied)",
      "No special preparation required",
      "You may eat and drink normally before the procedure",
      "Wear comfortable clothing that allows easy access to the biopsy site"
    ],
    afterTitle: "After Your Shave Biopsy",
    after: [
      "Keep the area covered with a sterile bandage for the first 24 hours",
      "After 24 hours, apply Vaseline or Aquaphor and a fresh bandage daily until healed (usually 7-14 days)",
      "Some light bleeding or oozing during the first 24 hours is completely normal — apply gentle pressure if needed",
      "Avoid picking, scratching, or touching the biopsy site",
      "Use a waterproof bandage when showering to keep the area clean and dry",
      "Do NOT soak in baths or pools while healing",
      "No strenuous exercise or heavy sweating for 2-3 days",
      "Gentle cleaning with soap and water is fine"
    ],
    healingTimeline: "The biopsy site typically heals in 1-3 weeks and may leave a temporary pink or lighter colored spot. This discoloration usually fades over several months as the skin returns to normal color.",
    callOffice: [
      "Bleeding that won't stop after 20 minutes of gentle pressure",
      "Signs of infection (increasing redness, warmth, pus, or foul odor)",
      "Questions about biopsy results"
    ],
    goToER: [],
    maNote: "Pathology results will be pending. Provide the patient with information about when results will be available. This is a quick procedure with minimal aftercare."
  },
  {
    id: "punch-biopsy",
    name: "Punch Biopsy",
    emoji: "🔬",
    category: "Diagnostic",
    duration: "10-15 minutes",
    beforeTitle: "Before Your Punch Biopsy",
    before: [
      "Arrive with clean skin (no makeup, lotions, or sunscreen on the area to be biopsied)",
      "No special preparation required",
      "You may eat and drink normally",
      "Wear comfortable clothing that allows easy access to the biopsy site"
    ],
    afterTitle: "After Your Punch Biopsy",
    after: [
      "Keep the area covered with a sterile bandage for the first 24 hours",
      "After 24 hours, apply Vaseline or Aquaphor and a fresh bandage daily until healed",
      "Some light bleeding or oozing during the first 24 hours is normal — apply gentle pressure if needed",
      "Sutures (typically 1-2) will be removed in 7-21 days depending on location",
      "Avoid picking, scratching, or touching the biopsy site",
      "Use a waterproof bandage when showering",
      "Do NOT soak in baths or pools while healing",
      "No strenuous exercise for 2-3 days",
      "Gentle cleaning with soap and water is fine"
    ],
    healingTimeline: "The biopsy site heals in 2-3 weeks after suture removal. May leave a slightly raised or pink scar that fades over several months.",
    callOffice: [
      "Premature loss of sutures",
      "Bleeding that won't stop after gentle pressure",
      "Signs of infection",
      "Questions about results"
    ],
    goToER: [],
    maNote: "Schedule suture removal at the time of procedure. Pathology results pending — provide timeline for results review."
  },
  {
    id: "cryotherapy",
    name: "Cryotherapy / Liquid Nitrogen",
    emoji: "❄️",
    category: "Skin Cancer Treatment",
    duration: "5-15 minutes",
    beforeTitle: "Before Your Cryotherapy",
    before: [
      "No special preparation required",
      "Arrive with clean, dry skin",
      "You may eat and drink normally",
      "Wear comfortable clothing that allows access to the area being treated",
      "Be aware that you may experience a mild stinging or burning sensation during the procedure — this is normal and brief"
    ],
    afterTitle: "After Your Cryotherapy",
    after: [
      "Redness, swelling, and blistering are normal and expected in 24-48 hours — do NOT pop any blisters",
      "Leave blisters intact to protect the healing tissue underneath",
      "Apply Vaseline or Aquaphor and cover with a bandage daily",
      "The area may weep clear or slightly yellow fluid — this is normal and part of healing",
      "Gentle cleaning with soap and water is fine",
      "Do NOT soak in baths or pools while healing",
      "Avoid strenuous exercise and heavy sweating for 2-3 days",
      "The treated area may become lighter (hypopigmented) after healing, especially in darker skin tones — this usually improves over several months",
      "Expect temporary hyperpigmentation or hypopigmentation that will resolve"
    ],
    healingTimeline: "Healing typically takes 1-3 weeks. Some skin color changes may persist longer (up to several months) and are usually temporary.",
    callOffice: [
      "Very large or painful blisters causing significant discomfort",
      "Signs of infection (increasing redness, warmth, pus, or foul odor)",
      "Lesion does not resolve or improve after 4-6 weeks"
    ],
    goToER: [],
    maNote: "Cryotherapy can be uncomfortable but results are usually good for benign lesions and some precancerous lesions. Patient should expect temporary cosmetic changes that improve over time."
  },
  {
    id: "edc",
    name: "Electrodessication and Curettage (ED&C)",
    emoji: "⚡",
    category: "Skin Cancer Treatment",
    duration: "15-30 minutes",
    beforeTitle: "Before Your ED&C Procedure",
    before: [
      "Arrive with clean, dry skin",
      "No special preparation required",
      "You may eat and drink normally",
      "Wear comfortable clothing that allows access to the treatment area",
      "Be aware that you will smell a burning odor during the procedure — this is from the cautery device and is completely normal"
    ],
    afterTitle: "After Your ED&C Procedure",
    after: [
      "A dark scab will form over the treated area — this is protective and part of normal healing",
      "Apply Vaseline or Aquaphor daily and keep the area covered with a bandage",
      "Allow the scab to fall off naturally over 2-6 weeks — do NOT pick or scratch at it",
      "Gentle cleaning with soap and water is fine",
      "Do NOT soak in baths or pools while the scab is present",
      "Avoid strenuous exercise and heavy sweating for 2-3 days",
      "The healed area may leave a flat white or pink scar that gradually fades over time",
      "Protect the healing area from sun exposure"
    ],
    healingTimeline: "The scab typically falls off in 2-6 weeks. The resulting scar usually fades significantly over 3-6 months.",
    callOffice: [
      "Signs of infection (increasing redness, warmth, pus, or foul odor)",
      "Scab hasn't healed or fallen off after 8 weeks",
      "Significant bleeding under the scab"
    ],
    goToER: [
      "Uncontrolled bleeding"
    ],
    maNote: "The burning smell during ED&C is normal — reassure patients beforehand. This procedure is good for small to medium lesions."
  },
  {
    id: "pdt",
    name: "Photodynamic Therapy (PDT / Blue Light)",
    emoji: "💡",
    category: "Skin Cancer Treatment",
    duration: "1-3 hours (includes incubation and light treatment)",
    beforeTitle: "Before Your PDT Treatment",
    before: [
      "Arrive with completely clean skin — no makeup, sunscreen, or other products on the treatment area",
      "The total appointment time is 1-3 hours (1-1.5 hours for incubation plus light treatment)",
      "Do NOT drive yourself home if your face is being treated — you must avoid all light exposure during the drive",
      "Bring a wide-brimmed hat, opaque scarf, or other light-blocking covering for the drive home",
      "Do NOT take photosensitizing medications the morning of treatment (ask your doctor which medications to avoid)",
      "Arrange to spend the rest of the day indoors with minimal light exposure",
      "Plan for quiet, indoor activities after treatment",
      "Wear long sleeves and pants if possible to protect skin during the drive home"
    ],
    afterTitle: "After Your PDT Treatment",
    after: [
      "CRITICAL: Avoid ALL bright light for 48 hours after treatment — this includes direct sunlight AND bright indoor lights (computer screens, TV, bright office lights, smartphone screens)",
      "Even 10 minutes of sun exposure through a window can cause a severe burn — take this instruction very seriously",
      "Stay in a dim or darkened room for the first 48 hours",
      "After 48 hours: expect significant redness, swelling, and peeling — this is the inflammatory reaction and means the treatment is WORKING",
      "Apply cool compresses and a gentle fragrance-free moisturizer for comfort",
      "Use only gentle, fragrance-free cleansers during the healing period",
      "Expect healing over 5-10 days with gradual improvement",
      "After 48 hours, you may resume normal activities but continue sun protection with SPF 50+ for several weeks"
    ],
    healingTimeline: "Acute reaction lasts 5-10 days. Redness and swelling peak around day 2-3 and gradually improve. Full healing and desired cosmetic results appear over 4-6 weeks.",
    callOffice: [
      "Severe blistering or crusting beyond expected mild peeling",
      "Signs of infection after the initial reaction",
      "Patient accidentally exposed to bright light post-treatment (increased burn risk)"
    ],
    goToER: [
      "Severe chemical burn appearance after accidental light exposure (indicates photochemical injury)"
    ],
    maNote: "PDT light avoidance is CRITICAL for the first 48 hours — this is the most important instruction. Emphasize this multiple times before discharge. Photo documentation of pre-treatment can help assess results."
  },
  {
    id: "chemical-peel",
    name: "Chemical Peel (Light/Superficial)",
    emoji: "✨",
    category: "Cosmetic / Aesthetic",
    duration: "20-30 minutes",
    beforeTitle: "Before Your Chemical Peel",
    before: [
      "Stop using retinoids (tretinoin, adapalene, retinol) 5-7 days before the peel",
      "Stop waxing, laser hair removal, or electrolysis 2 weeks prior",
      "Do NOT have a sunburn — reschedule if sunburned",
      "Do NOT take photosensitizing antibiotics for 5 days before treatment",
      "Do NOT take aspirin or ibuprofen for 1 week prior (these thin the blood)",
      "Arrive with clean skin (no makeup, lotions, or sunscreen on the face)",
      "Wear comfortable clothing — the peel will be applied to your face"
    ],
    afterTitle: "After Your Chemical Peel",
    after: [
      "Your skin will feel tight and look pink or red for 24-48 hours",
      "Peeling begins around day 2-5 — do NOT peel, pick, or pull at the skin",
      "Use a gentle, fragrance-free cleanser and apply generous amounts of recommended moisturizer",
      "CRITICAL: Avoid all sun exposure for at least 1 week — use SPF 50+ every single day thereafter",
      "No makeup for the first 24 hours",
      "No strenuous exercise or activities that cause sweating for 24 hours",
      "Do NOT use retinoids for 5-7 days after the peel",
      "Do NOT swim, use saunas, or take steam baths for 1 week",
      "Avoid harsh or irritating skincare products during the healing period"
    ],
    healingTimeline: "The acute redness and peeling resolve in 5-7 days. Full healing and optimal results appear over 2-4 weeks.",
    callOffice: [
      "Severe blistering (beyond normal peeling)",
      "Signs of infection (spreading redness, pus, or fever)",
      "Redness persisting longer than 2 weeks",
      "Unexpected significant crusting"
    ],
    goToER: [],
    maNote: "Chemical peels are excellent for fine lines, sun damage, and mild texture issues. Sun protection post-peel is essential to prevent post-inflammatory hyperpigmentation."
  },
  {
    id: "laser-nonablative",
    name: "Laser Treatment (Non-Ablative)",
    emoji: "🔆",
    category: "Cosmetic / Aesthetic",
    duration: "20-40 minutes",
    beforeTitle: "Before Your Non-Ablative Laser Treatment",
    before: [
      "Avoid sun exposure and tanning for 4 weeks before treatment",
      "Arrive with clean skin (no makeup, lotions, or sunscreen)",
      "Shave the area if it has hair (do NOT wax or pluck)",
      "Stop using retinoids 5 days before treatment",
      "Do NOT take aspirin, ibuprofen, or fish oil for 1 week prior",
      "Do NOT apply spray tans — reschedule if you have a recent spray tan",
      "Wear comfortable clothing that allows access to the treatment area"
    ],
    afterTitle: "After Your Non-Ablative Laser Treatment",
    after: [
      "Redness and mild swelling are normal for 24-72 hours",
      "Apply a gentle recommended moisturizer and cool compresses for comfort",
      "Do NOT expose the treated area to sun for at least 2 weeks",
      "Apply SPF 50+ daily during the healing period",
      "Avoid heat (hot showers, saunas, hot yoga, strenuous exercise) for 24-48 hours",
      "Use only gentle skincare products",
      "Do NOT use makeup if skin is visibly damaged, but mineral sunscreen is OK",
      "Avoid swimming for 48 hours"
    ],
    healingTimeline: "Redness and swelling resolve in 24-72 hours. Results improve gradually over 2-4 weeks as collagen remodeling occurs. Multiple treatments (usually 3-6) may be recommended for optimal results.",
    callOffice: [
      "Blistering, scabbing, or significant crusting (indicates overly aggressive settings)",
      "Redness persisting longer than 2 weeks",
      "Signs of infection"
    ],
    goToER: [],
    maNote: "Non-ablative lasers work best on mild to moderate concerns (fine lines, texture, rosacea). Multiple treatments are typically needed. Good for patients who want quick recovery."
  },
  {
    id: "laser-ablative",
    name: "Laser Treatment (Ablative - Fractional CO2/Erbium)",
    emoji: "🔆",
    category: "Cosmetic / Aesthetic",
    duration: "30-90 minutes",
    beforeTitle: "Before Your Ablative Laser Treatment",
    before: [
      "Stop using retinoids 1-2 weeks before treatment",
      "Antiviral medications (e.g., valacyclovir) may be prescribed to start the day before if you have a history of cold sores",
      "Do NOT take aspirin, ibuprofen, or fish oil for 1 week prior",
      "Arrive with clean skin (no makeup, lotions, or other products)",
      "Arrange a reliable driver — you may feel uncomfortable driving after treatment",
      "Take off work for at least 1-2 days to allow initial healing",
      "Plan to be indoors for most of the first week"
    ],
    afterTitle: "After Your Ablative Laser Treatment",
    after: [
      "Your skin will weep serum and look very raw for the first 3-5 days — this is expected and part of healing",
      "Apply cool vinegar soaks or gentle compresses as specifically directed by your doctor",
      "Apply prescribed ointment continuously and frequently — do NOT let skin dry out completely",
      "Avoid all makeup until the skin has completely re-epithelialized (usually 7-10 days)",
      "STRICT sun avoidance for 3-6 months (not just days) — this is critical",
      "Use SPF 50+ with physical blockers (zinc oxide) mandatory during the entire healing period",
      "Take antiviral medications through the healing period if prescribed",
      "Sleep with your head elevated to minimize swelling",
      "Redness may persist for 1-3 months even after healing",
      "Avoid hot water, strenuous exercise, sweating, and heat exposure during the first 2 weeks"
    ],
    healingTimeline: "Re-epithelialization occurs in 7-10 days. However, redness and swelling can persist for 1-3 months or longer. Full scar revision and results take 3-6 months.",
    callOffice: [
      "Fever or signs of infection",
      "Prolonged weeping or crusting beyond 2 weeks",
      "Concerns about hyperpigmentation"
    ],
    goToER: [
      "Fever with confusion or signs of systemic infection",
      "Signs of serious infection"
    ],
    maNote: "Ablative lasers are powerful resurfacing tools with significant downtime. Ensure realistic expectations about redness duration and strict sun protection. Consider ice pack availability for the first few days."
  },
  {
    id: "botox",
    name: "Botox / Neuromodulator Injections",
    emoji: "💉",
    category: "Cosmetic / Aesthetic",
    duration: "10-15 minutes",
    beforeTitle: "Before Your Botox Injections",
    before: [
      "Avoid aspirin, ibuprofen, fish oil, and vitamin E for 1-2 weeks before treatment to minimize bruising",
      "Limit alcohol consumption for 24-48 hours prior",
      "Arrive with clean skin (no makeup preferred to easily identify injection sites)",
      "You may eat and drink normally",
      "Avoid strenuous exercise for 4 hours before the procedure"
    ],
    afterTitle: "After Your Botox Injections",
    after: [
      "Remain upright (do NOT lie down) for 4 hours after injections",
      "Do NOT rub, massage, press, or manipulate the treated areas for 24 hours",
      "Avoid facial massages, facials, and other facial pressure treatments for 2 weeks",
      "Avoid strenuous exercise for 24 hours",
      "Do NOT consume alcohol for 24 hours",
      "Avoid extreme heat (saunas, hot yoga, hot showers) for 24 hours",
      "Results begin to appear in 3-5 days",
      "Full effect is achieved at 10-14 days",
      "Avoid touching your face unnecessarily"
    ],
    healingTimeline: "Results begin in 3-5 days and reach maximum effect by day 10-14. Effects last 3-4 months, after which retreatment is needed.",
    callOffice: [
      "Drooping of the eyelid, eyebrow, or smile (uncommon complication that may develop over days)",
      "No results after 14 days (may indicate being a 'non-responder' — rare)",
      "Asymmetry concerns — can sometimes be addressed with touch-up injections",
      "Follow-up for touch-up at 2 weeks if desired"
    ],
    goToER: [],
    maNote: "Botox is quick with minimal downtime. The 4-hour upright time and 24-hour pressure-avoidance are key to proper placement. Most patients see minimal bruising if pre-treatment instructions are followed."
  },
  {
    id: "filler",
    name: "Filler Injections (Hyaluronic Acid)",
    emoji: "💉",
    category: "Cosmetic / Aesthetic",
    duration: "30-45 minutes",
    beforeTitle: "Before Your Filler Injections",
    before: [
      "Avoid aspirin, ibuprofen, fish oil, and vitamin E for 1-2 weeks prior to minimize bruising and swelling",
      "Limit alcohol for 24-48 hours before treatment",
      "Avoid dental procedures 2 weeks before your filler appointment",
      "Arrive with clean skin (no makeup preferred)",
      "You may eat and drink normally",
      "A numbing cream may be applied upon arrival — plan for 10-15 minutes extra time",
      "Avoid dental work for 2 weeks after the procedure"
    ],
    afterTitle: "After Your Filler Injections",
    after: [
      "Expect swelling, redness, and bruising at injection sites — this peaks at 24-48 hours",
      "Apply cool (not ice-cold) compresses gently — do NOT massage or press aggressively",
      "Sleep with your head elevated on the first night to minimize swelling",
      "No strenuous exercise for 24 hours",
      "Do NOT consume alcohol for 24 hours",
      "Avoid extreme heat (saunas, hot yoga) for 24 hours",
      "Avoid dental procedures for 2 weeks after injection",
      "Avoid facials, massages, and pressure on treated areas for 2 weeks",
      "Full results are visible after swelling subsides (usually 1-2 weeks)",
      "Do NOT massage the filler after injection unless specifically instructed"
    ],
    healingTimeline: "Swelling and bruising peak at 24-48 hours. Most initial swelling resolves in 3-7 days. Full results are visible at 1-2 weeks. Filler typically lasts 6-12 months depending on the product and injection site.",
    callOffice: [
      "Unusual firmness or nodule in the injected area",
      "Significant asymmetry or concerns about placement",
      "Swelling persisting beyond 2 weeks",
      "Skin color change (white blanching at or after injection) — CALL IMMEDIATELY (this indicates vascular occlusion)",
      "Any area becoming hard, tender, or discolored after 48 hours"
    ],
    goToER: [
      "Vision changes or eye pain",
      "Skin blanching turning dark or purplish (signs of vascular occlusion — this is a medical emergency requiring immediate evaluation and possible hyaluronidase injection)",
      "Severe swelling affecting vision or breathing"
    ],
    maNote: "Vascular occlusion is rare but serious — educate patients on white blanching as a warning sign. Verify no aspirin/NSAIDs were taken. Some practitioners keep hyaluronidase on hand for reversal if needed."
  },
  {
    id: "nbuvb",
    name: "Narrowband UVB Phototherapy (NB-UVB)",
    emoji: "☀️",
    category: "Phototherapy",
    duration: "15-30 minutes per session",
    beforeTitle: "Before Your NB-UVB Phototherapy Session",
    before: [
      "Undress completely or expose only the areas to be treated",
      "Wear a minimal covering — your provider will direct positioning",
      "Apply mineral oil or other prescribed pre-treatment to skin if directed by your doctor",
      "Protect the genitals and (for males) testes with the provided coverings",
      "Put on UV-protective goggles to protect your eyes (goggles are provided)",
      "Inform staff of any new medications — some are photosensitizing and may require dose adjustments",
      "Treatments are typically scheduled 2-3 times per week for maximal efficacy",
      "Each session duration increases gradually over the treatment course"
    ],
    afterTitle: "After Your NB-UVB Phototherapy Session",
    after: [
      "Mild pinkness or redness is normal for 2-6 hours after treatment",
      "If you experience significant burning or blistering, notify the office at your next visit before resuming treatment",
      "Moisturize skin well after each session",
      "Protect treated skin from additional sun exposure on treatment days",
      "Report any new medications to staff immediately — photosensitizing drugs may need dose adjustment",
      "Wear protective clothing or sunscreen (SPF 30+) if you go outside after treatment",
      "Avoid additional sun exposure for the rest of the day of treatment"
    ],
    healingTimeline: "Results vary widely depending on the condition being treated (psoriasis, vitiligo, eczema, etc.). Improvement typically appears after 8-12 weeks of regular treatment. Treatment courses may last several months.",
    callOffice: [
      "Significant blistering or burn from treatment (dose may be too high)",
      "New rash developing",
      "Symptoms of photoallergy",
      "Lack of improvement after 8 weeks of regular treatment"
    ],
    goToER: [
      "Severe blistering resembling a chemical burn"
    ],
    maNote: "Photosensitizing medications (doxycycline, certain antifungals, NSAIDs, antihistamines) can increase burn risk — verify medication list. Regular attendance is critical for success. Consider a treatment log to track frequency and response."
  },
  {
    id: "il-steroid",
    name: "Intralesional Steroid Injection",
    emoji: "💊",
    category: "Other",
    duration: "5-10 minutes",
    beforeTitle: "Before Your Intralesional Steroid Injection",
    before: [
      "No special preparation required",
      "The area to be injected will be cleansed with an antiseptic solution",
      "You may eat and drink normally",
      "A quick injection will be placed directly into the lesion (keloid, cyst, alopecia plaque, etc.)",
      "You may feel mild stinging or discomfort during the injection"
    ],
    afterTitle: "After Your Intralesional Steroid Injection",
    after: [
      "The injected area may be swollen and tender for 1-3 days",
      "Apply ice or a cool compress for comfort if needed",
      "The skin may temporarily indent (atrophy) at the injection site — this usually improves over time",
      "For keloids: you may need a series of injections spaced 4-6 weeks apart for optimal results",
      "Avoid touching or picking at the injection site",
      "You may apply moisturizer and resume normal activities",
      "No strenuous exercise restriction unless recommended by your doctor"
    ],
    healingTimeline: "Improvement may be seen within 2-4 weeks. Keloids typically require multiple injections spaced 4-6 weeks apart. Complete response may take 2-3 months or more.",
    callOffice: [
      "Significant skin atrophy or depigmentation at the injection site",
      "No improvement after 3 injections",
      "Signs of infection at the injection site",
      "Excessive pain or swelling"
    ],
    goToER: [],
    maNote: "Intralesional steroids work well for keloids, some cysts, and alopecia areata plaques. For keloids, multiple sessions are typically needed. Document the size and appearance before injection for follow-up comparison."
  },
  {
    id: "patch-testing",
    name: "Patch Testing",
    emoji: "🩹",
    category: "Diagnostic",
    duration: "3 office visits over 4-5 days (application, removal, reading)",
    beforeTitle: "Before Your Patch Testing",
    before: [
      "Stop all topical steroids, tacrolimus (Protopic), and other topical immunosuppressants on the upper back 1 week before testing",
      "Avoid systemic steroids for 1-2 weeks prior (they suppress allergic reactions)",
      "Wear loose, comfortable clothing — patches will be applied to your upper back",
      "The patches must stay on and remain completely dry for 48 hours",
      "Do NOT shower, bathe, or intentionally wet the patches",
      "Do NOT sweat, exercise, or do strenuous activities (sweating compromises patch adhesion)",
      "Plan for 3 office visits: Day 0 (patch application), Day 2 (patch removal), Day 4 (final reading)",
      "Bring entertainment or a book for the appointment"
    ],
    afterTitle: "After Your Patch Testing (Day 0-2: Patches On)",
    after: [
      "Keep the patches dry at all times — no showers, baths, swimming, or heavy sweating",
      "Do NOT exercise or engage in strenuous activity",
      "Do NOT remove, peel, or scratch the patches",
      "You may apply a plastic cover over the patches to protect them during necessary hygiene",
      "Return for patch removal on Day 2 exactly as scheduled",
      "On Day 2: patches will be removed and reactions observed",
      "On Day 4 (48 hours after removal): return for final reading (reactions can evolve after patch removal)"
    ],
    healingTimeline: "Reactions may continue to evolve for up to 1 week after patch removal. After the Day 4 reading, avoid scratching at strongly positive reaction sites. Your provider will review results and identify relevant allergens requiring avoidance.",
    callOffice: [
      "Patches fall off before Day 2 removal",
      "Severe local burning, blistering, or significant reaction under the patches",
      "Signs of systemic reaction (rare) — rash, difficulty breathing"
    ],
    goToER: [
      "Systemic allergic reaction with difficulty breathing or significant rash"
    ],
    maNote: "CRITICAL: This is the #1 compliance issue with patch testing — NO SHOWERS, NO EXERCISE, NO SWEATING from Day 0 to Day 2. Emphasize this multiple times. Patients who get patches wet will need to restart testing. Verify schedule for all 3 visits at time of initial application."
  }
];
