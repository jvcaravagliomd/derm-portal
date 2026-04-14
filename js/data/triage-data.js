const TRIAGE_SCENARIOS = [
  // ==================== PROCEDURE & WOUND CONCERNS ====================
  {
    id: "wound-001",
    category: "Procedure & Wound Concerns",
    symptom: "Bleeding won't stop after 15-20 minutes of pressure",
    triageLevel: "er-soon",
    triageLabelShort: "🟡 ER / Urgent Care",
    script: "I understand you've been applying pressure for over 15 minutes and the bleeding hasn't slowed. You need to go to the emergency room or urgent care right now. Keep firm pressure with a clean cloth on the way. Do not remove the cloth to look at it. Go straight to the ER.",
    keyDetails: [
      "How long has bleeding been occurring?",
      "Is patient on any blood thinners (warfarin, apixaban, rivaroxaban, etc.)?",
      "Did they take aspirin or NSAIDs before or after the procedure?",
      "Is bleeding oozing or spurting?"
    ],
    note: "Possible bleeding disorder or medication interaction. ER evaluation needed for hemostasis assessment."
  },

  {
    id: "wound-002",
    category: "Procedure & Wound Concerns",
    symptom: "Suture popped open, no active bleeding",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "A popped suture is not an emergency if it's not bleeding. Gently clean the area with soap and water, pat dry, and cover with a clean bandage. Do not pull on the area. Call us first thing in the morning so we can evaluate whether the wound needs re-closure. Keep the area clean and dry until then.",
    keyDetails: [
      "How many sutures are out?",
      "How old is the wound (what procedure date)?",
      "Any gaping or drainage?",
      "Signs of infection (redness, warmth, pus)?"
    ],
    note: "If caught early enough, may be able to re-close in office. If wound edges are gaping and >24h old, risk of scarring increases."
  },

  {
    id: "wound-003",
    category: "Procedure & Wound Concerns",
    symptom: "Significant swelling and bruising after Mohs surgery on face",
    triageLevel: "home",
    triageLabelShort: "🟢 Home Management",
    script: "Swelling and bruising after Mohs surgery is completely normal and usually peaks around day 2-3. Here's what to do: Apply ice to the area for 15-20 minutes at a time, several times a day for the next 24-48 hours. Elevate your head as much as possible, even while sleeping—use 2-3 pillows. Take acetaminophen (Tylenol) for any discomfort. Avoid NSAIDs like ibuprofen as they increase swelling and bleeding. The swelling should improve over the next 5-7 days and bruising will fade over 2-3 weeks. Call us if you develop severe pain, fever, or any signs of infection.",
    keyDetails: [
      "When was the procedure?",
      "Is swelling symmetrical or asymmetrical?",
      "Any numbness or inability to move facial muscles?",
      "Temperature—any fever?"
    ],
    note: "Normal post-op course. Ice is key in first 48h; then switch to warm compresses. Reassure patient."
  },

  {
    id: "wound-004",
    category: "Procedure & Wound Concerns",
    symptom: "Wound has yellow/green pus with red streaking up the arm",
    triageLevel: "er-soon",
    triageLabelShort: "🟡 ER / Urgent Care",
    script: "The red streaking going up your arm indicates a serious infection spreading through lymphatic vessels. You need to go to the emergency room right away. Do not delay. Bring any records of your procedure with you. They will likely need to start IV antibiotics.",
    keyDetails: [
      "How high does the red streak extend?",
      "Is patient febrile? Take temperature.",
      "Any chills or body aches?",
      "Wound drainage amount—frank pus vs. serosanguineous?"
    ],
    note: "Lymphangitis with cellulitis—medical emergency. Requires IV antibiotics, possible culture/sensitivity. Risk of sepsis."
  },

  {
    id: "wound-005",
    category: "Procedure & Wound Concerns",
    symptom: "Mild redness and warmth around wound, no streaking or drainage",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "A little redness and warmth right around the wound edge is common in the first few days and often resolves on its own. In the meantime, keep the area clean with soap and water twice daily, apply an antibiotic ointment like Neosporin, and cover with a clean bandage. Avoid getting it wet in the shower. Call us in the morning so we can check it—it may or may not need treatment. Watch for spreading redness, increasing drainage, or fever, and call back immediately if you see those signs.",
    keyDetails: [
      "How many days post-procedure?",
      "Amount and color of any drainage?",
      "Patient temperature?",
      "Any pain or warmth beyond the immediate wound edge?"
    ],
    note: "Likely normal inflammatory response vs. early cellulitis. Clinical exam needed. If improves in 48h, reassure. If worsens, may need oral antibiotics."
  },

  {
    id: "wound-006",
    category: "Procedure & Wound Concerns",
    symptom: "Wound has pus and bad smell, no fever or red streaking",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "The foul odor and pus suggest an infection that needs to be evaluated urgently. Gently clean the area with soap and water and cover with a clean bandage. Do not use ointment over it yet—we need to see it. Call us first thing in the morning for an urgent same-day appointment. This likely needs antibiotic treatment. If you develop fever, spreading redness, or increasing pain, call back immediately.",
    keyDetails: [
      "Days post-procedure?",
      "Temperature?",
      "Is redness confined to wound only or spreading?",
      "Any wound separation or gaping?"
    ],
    note: "Localized infection—needs culture and likely oral or topical antibiotics. May need wound cleaning in office."
  },

  {
    id: "wound-007",
    category: "Procedure & Wound Concerns",
    symptom: "Fever over 101°F after Mohs surgery",
    triageLevel: "er-soon",
    triageLabelShort: "🟡 ER / Urgent Care",
    script: "A fever of over 101°F after surgery indicates a systemic infection and requires urgent evaluation. Go to the emergency room or urgent care right away. Bring your surgical record with you. They will likely want to check for infection and may need to start antibiotics.",
    keyDetails: [
      "Exact temperature and when taken?",
      "Days post-op?",
      "Any chills, body aches, or malaise?",
      "Any visible signs of infection at wound site?",
      "Is patient on any immunosuppressants?"
    ],
    note: "Fever post-op is concerning for serious infection. Needs ER evaluation, CBC, CMP, possible imaging."
  },

  {
    id: "wound-008",
    category: "Procedure & Wound Concerns",
    symptom: "Biopsy site won't heal after 6 or more weeks",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "A biopsy that hasn't healed after 6 weeks needs to be examined. Call us to schedule an appointment so we can evaluate the wound. It might be a slow-healing area, could have a small infection, or there might be stitches that need removal. We'll take a look and determine the best treatment.",
    keyDetails: [
      "Exact location of biopsy?",
      "Is there active drainage or just open wound?",
      "Any pain, redness, or swelling?",
      "Has patient been picking at it or keeping it moist?",
      "Any systemic issues (diabetes, immunosuppression)?"
    ],
    note: "Evaluate for infection, dehiscence, or granulation tissue. May need anesthesia and re-closure or local wound care."
  },

  {
    id: "wound-009",
    category: "Procedure & Wound Concerns",
    symptom: "Sutures are pulling and tearing skin before scheduled removal date",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "Sutures that are pulling and tearing the skin need to be evaluated. If they're causing significant pain or tearing, call us right away and we can remove them earlier than planned. Do not try to remove them yourself. If you can tolerate it until tomorrow, call first thing in the morning for an urgent visit.",
    keyDetails: [
      "How many days since placement?",
      "Is there actual tearing of skin or just tension?",
      "Signs of infection?",
      "Can wound support itself at this point (how strong are the skin edges)?"
    ],
    note: "Early removal may be necessary if causing additional trauma. Assess wound strength—if edges are well-approximated, early removal is safe."
  },

  {
    id: "wound-010",
    category: "Procedure & Wound Concerns",
    symptom: "Large blister formed after cryotherapy treatment",
    triageLevel: "home",
    triageLabelShort: "🟢 Home Management",
    script: "A large blister after cryotherapy is a normal part of the healing process. Leave it intact—do not pop it. The fluid inside is sterile and protects the healing tissue underneath. Cover it with a clean bandage to protect it from rubbing. Wash gently with soap and water once daily. Apply Vaseline around the edges to keep it moist. The blister should gradually reabsorb over 1-2 weeks. If it accidentally pops, keep it clean and dry. Call us if you see signs of infection like increasing redness, warmth, pus, or fever.",
    keyDetails: [
      "Size of blister?",
      "Is it intact or has it burst?",
      "Pain level?",
      "Any signs of infection?"
    ],
    note: "Expected reaction—bullae from intense tissue destruction. Reassure patient. Leave intact. Monitor for secondary infection."
  },

  // ==================== MEDICATION REACTIONS ====================
  {
    id: "medrx-001",
    category: "Medication Reactions",
    symptom: "Throat tightening and difficulty swallowing after starting new medication",
    triageLevel: "er-now",
    triageLabelShort: "🔴 ER NOW",
    script: "Stop taking the medication immediately. You're experiencing signs of anaphylaxis, which is a life-threatening allergic reaction. Call 911 or have someone drive you to the emergency room right now. If you have an EpiPen, use it. Do not wait—go immediately.",
    keyDetails: [
      "When did symptoms start after taking medication?",
      "Any other symptoms—hives, swelling of lips/tongue, difficulty breathing, chest pain?",
      "Does patient have access to EpiPen?",
      "Previous allergies to this medication or similar drugs?"
    ],
    note: "Anaphylaxis—true medical emergency. Do not delay. ER for epinephrine and monitoring."
  },

  {
    id: "medrx-002",
    category: "Medication Reactions",
    symptom: "Hives and facial swelling after starting new antibiotic",
    triageLevel: "er-now",
    triageLabelShort: "🔴 ER NOW",
    script: "Hives combined with facial swelling indicate a serious allergic reaction that needs immediate evaluation. Go to the emergency room right away or call 911. Stop taking the medication immediately. Facial swelling can progress to airway swelling, so do not delay.",
    keyDetails: [
      "Time of onset?",
      "Is swelling limited to face or spreading?",
      "Any respiratory symptoms—difficulty breathing, wheezing?",
      "Any throat tightness or difficulty swallowing?",
      "Known drug allergies?"
    ],
    note: "Risk of angioedema and airway compromise. ER evaluation essential."
  },

  {
    id: "medrx-003",
    category: "Medication Reactions",
    symptom: "Widespread blistering rash, fever, and mouth sores after starting new medication",
    triageLevel: "er-now",
    triageLabelShort: "🔴 ER NOW",
    script: "The combination of blistering rash, fever, and mouth sores could indicate a severe allergic reaction called Stevens-Johnson syndrome or TEN, which is a medical emergency. Stop the medication immediately and go to the emergency room right now. Do not wait. Bring the medication bottle with you.",
    keyDetails: [
      "When did rash start?",
      "Is rash blistering or just erythematous?",
      "Exact temperature?",
      "Any eye, genital, or GI involvement?",
      "Which medication started most recently?"
    ],
    note: "Possible SJS/TEN—immediately life-threatening. ER referral for ICU-level care, dermatology consult, stop offending agent."
  },

  {
    id: "medrx-004",
    category: "Medication Reactions",
    symptom: "Hives only, no other symptoms, appeared after new antibiotic",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "Hives without other systemic symptoms are an allergic reaction but not immediately dangerous. Take an over-the-counter antihistamine like Benadryl (diphenhydramine 25-50 mg) right now. Stop taking the antibiotic immediately. The hives should start improving within an hour. Call us in the morning. If the hives get worse, spread rapidly, or you develop any swelling of the face, lips, or throat, or difficulty breathing, hang up and call 911 immediately.",
    keyDetails: [
      "Time of onset?",
      "Coverage of hives—localized or widespread?",
      "Pruritus severity?",
      "Any respiratory symptoms at all?",
      "Has patient taken Benadryl already?"
    ],
    note: "IgE-mediated allergy to medication. Discontinue. Likely safe to continue treatment with alternative. Document allergy."
  },

  {
    id: "medrx-005",
    category: "Medication Reactions",
    symptom: "Skin peeling from 5-fluorouracil cream application",
    triageLevel: "home",
    triageLabelShort: "🟢 Home Management",
    script: "Skin peeling and erosion from 5-FU cream is completely expected—it means the medication is working. This is not an allergic reaction. Apply a thin layer of Vaseline or aquaphor over the treated area to reduce irritation and promote healing. Avoid sun exposure to the treated area. Wash gently with lukewarm water only—no soap. The peeling and redness will gradually improve once you finish the course. If you were not told this would happen, we can discuss the expected timeline. Call us if you develop signs of infection or excessive pain.",
    keyDetails: [
      "How long have you been using 5-FU?",
      "What's the treatment duration supposed to be?",
      "How much peeling/erosion?",
      "Pain level?",
      "Any signs of infection?"
    ],
    note: "Expected inflammatory/destructive phase of 5-FU therapy. Educate patient on normal course and timeline. Provide supportive care."
  },

  {
    id: "medrx-006",
    category: "Medication Reactions",
    symptom: "Severe headache and vision changes while on isotretinoin",
    triageLevel: "er-now",
    triageLabelShort: "🔴 ER NOW",
    script: "Severe headache with vision changes while taking isotretinoin (Accutane) is a medical emergency. You may have elevated intracranial pressure, a serious side effect called pseudotumor cerebri. Stop taking the medication immediately and go to the emergency room right now. Tell them you're on isotretinoin and experiencing these symptoms.",
    keyDetails: [
      "Exact timing of symptom onset?",
      "Headache severity and location?",
      "Vision changes—blurred, double vision, seeing spots?",
      "Any nausea or vomiting?",
      "How long on isotretinoin?",
      "Any papilledema noticed at last eye exam?"
    ],
    note: "Pseudotumor cerebri—medical emergency. ER for LP and imaging. Discontinue isotretinoin. Ophthalmology consult needed."
  },

  {
    id: "medrx-007",
    category: "Medication Reactions",
    symptom: "Joint pain while taking isotretinoin",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "Joint pain is a known side effect of isotretinoin. Call us in the morning and we can discuss your symptoms and whether we need to adjust your dose or add anti-inflammatory support. In the meantime, you can take acetaminophen (Tylenol) for pain relief. Do not take ibuprofen or other NSAIDs without talking to us first. Most joint pain improves with time, but we want to monitor it.",
    keyDetails: [
      "Which joints are affected?",
      "Severity of pain?",
      "When did it start in relation to starting isotretinoin?",
      "Any swelling or stiffness?",
      "Interfering with daily activities?"
    ],
    note: "Known side effect of isotretinoin—usually mild and self-limiting. Can continue treatment. Monitor closely. May need dose reduction if severe."
  },

  {
    id: "medrx-008",
    category: "Medication Reactions",
    symptom: "Mouth sores while taking methotrexate",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "Mouth sores can be a sign that you need to adjust your methotrexate or add folic acid supplementation. Call us in the morning for an urgent visit or at least a phone call with the doctor. In the meantime, rinse with salt water and take folic acid if you were prescribed it. Do not stop the methotrexate without calling us first.",
    keyDetails: [
      "When did sores start in relation to last methotrexate dose?",
      "Are you taking folic acid supplementation?",
      "Severity—just small sores or large ulcers?",
      "Difficulty eating or swallowing?",
      "Any other symptoms—fatigue, nausea, rash?",
      "Recent lab work—CBC normal?"
    ],
    note: "Possible mucositis from methotrexate. May indicate need for higher folic acid dose or dose reduction. Check labs. Phone encounter acceptable if mild."
  },

  {
    id: "medrx-009",
    category: "Medication Reactions",
    symptom: "Fever, chills, and severe fatigue in biologic patient",
    triageLevel: "er-soon",
    triageLabelShort: "🟡 ER / Urgent Care",
    script: "You're experiencing signs of a serious infection. Hold your biologic medication and go to the emergency room or urgent care for evaluation. Your biologic therapy suppresses your immune system, which increases your infection risk. They will likely want to do blood work and possibly imaging. Take any records of your biologic therapy with you.",
    keyDetails: [
      "When was last biologic injection/infusion?",
      "Exact temperature?",
      "Fatigue severity—can patient get out of bed?",
      "Any respiratory, GI, or urinary symptoms?",
      "Recent sick contacts?",
      "Which biologic agent (TNF-i, JAK-i, etc.)?"
    ],
    note: "Immunosuppressed patient with fever—urgent evaluation needed. Hold biologic until cleared. May need hospitalization."
  },

  {
    id: "medrx-010",
    category: "Medication Reactions",
    symptom: "Calf pain and swelling with shortness of breath in JAK inhibitor patient",
    triageLevel: "er-now",
    triageLabelShort: "🔴 ER NOW",
    script: "These symptoms could indicate a blood clot in your leg (DVT) or lungs (PE), which is a life-threatening emergency. JAK inhibitors increase this risk. Go to the emergency room immediately or call 911. Do not wait. Tell them you're on a JAK inhibitor.",
    keyDetails: [
      "Which JAK inhibitor (tofacitinib, baricitinib, etc.)?",
      "Calf swelling—one or both legs?",
      "Calf pain severity?",
      "Shortness of breath severity—at rest or with exertion?",
      "Any chest pain?",
      "Any recent immobility or long travel?"
    ],
    note: "Suspected VTE—ER imaging needed (ultrasound ± CTA). Stop JAK-i. High mortality if PE—do not delay."
  },

  {
    id: "medrx-011",
    category: "Medication Reactions",
    symptom: "Abdominal pain, nausea, and vomiting in acitretin or isotretinoin patient",
    triageLevel: "er-soon",
    triageLabelShort: "🟡 ER / Urgent Care",
    script: "These symptoms could indicate pancreatitis, a serious side effect of your medication. Go to the emergency room or urgent care right away. Stop taking the medication. Bring the medication bottle with you so they know what you're taking.",
    keyDetails: [
      "Which retinoid (isotretinoin vs. acitretin)?",
      "Severity of abdominal pain?",
      "Location of pain—epigastric?",
      "Any back pain?",
      "Recent alcohol use?",
      "Any jaundice or dark urine?"
    ],
    note: "Retinoid-induced pancreatitis—medical emergency. ER for lipase, amylase, imaging. Discontinue retinoid. Admit if severe."
  },

  // ==================== SKIN INFECTIONS ====================
  {
    id: "skinf-001",
    category: "Skin Infections",
    symptom: "Expanding red, hot, tender area around wound with fever",
    triageLevel: "er-soon",
    triageLabelShort: "🟡 ER / Urgent Care",
    script: "You have signs of cellulitis, a spreading skin infection. Go to the emergency room or urgent care right away. Do not wait until morning. Cellulitis requires urgent IV antibiotics if it's spreading. Bring any records of your procedure with you.",
    keyDetails: [
      "How much is the redness expanding—per hour?",
      "Exact temperature?",
      "Any streaking (red lines going up arm/leg)?",
      "Localized swelling/warmth only or systemic symptoms?",
      "Days since procedure?"
    ],
    note: "Cellulitis with systemic symptoms—urgent ER evaluation. May need IV antibiotics or admission."
  },

  {
    id: "skinf-002",
    category: "Skin Infections",
    symptom: "Small amount of redness at wound edge, no fever, no streaking",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "A small amount of redness right at the wound edge without spreading or fever is often just normal inflammation. Keep the area clean with soap and water, apply antibiotic ointment like Neosporin, and cover with a clean bandage. Call us in the morning so we can evaluate it. In the meantime, if the redness starts spreading, you develop fever, or it gets increasingly painful, call back immediately.",
    keyDetails: [
      "Days post-procedure?",
      "Is redness expanding or stable?",
      "Amount of drainage if any?",
      "Temperature?",
      "Pain level?"
    ],
    note: "Likely normal post-op inflammation. Reassure. Monitor. May not need antibiotics."
  },

  {
    id: "skinf-003",
    category: "Skin Infections",
    symptom: "Painful rash in a dermatomal distribution (shingles suspected)",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "Based on your description, you may have shingles (herpes zoster). Call us first thing in the morning for an urgent same-day appointment or evaluation. If we can see you and start antiviral medication within 72 hours of symptom onset, it significantly reduces your pain and speeds recovery. If you can't reach us by morning, you can go to urgent care. Do not delay—the first 72 hours are critical. In the meantime, keep the area clean and dry, and avoid touching it.",
    keyDetails: [
      "Exact onset date and time?",
      "Is rash strictly on one side of body?",
      "Vesicular (fluid-filled) or just erythematous?",
      "Pain severity?",
      "Any fever or constitutional symptoms?",
      "Age and vaccination status (Shingrix)?"
    ],
    note: "Suspected VZV reactivation—urgent antiviral therapy needed within 72h. Same-day or urgent care visit appropriate."
  },

  {
    id: "skinf-004",
    category: "Skin Infections",
    symptom: "Rapidly spreading painful red skin with fever and flu-like symptoms",
    triageLevel: "er-now",
    triageLabelShort: "🔴 ER NOW",
    script: "The rapid spread of painful red skin combined with fever and flu symptoms could indicate necrotizing fasciitis, a life-threatening infection that requires emergency surgery. Go to the emergency room immediately or call 911. Do not waste any time. This is a true emergency.",
    keyDetails: [
      "Speed of spread—can you trace it over hours?",
      "Pain severity—disproportionate to skin appearance?",
      "Temperature?",
      "Any blistering or skin discoloration?",
      "Swelling beyond the area of erythema?",
      "Recent procedure or trauma?"
    ],
    note: "Necrotizing fasciitis—life-threatening emergency. ER for imaging and urgent surgical exploration. High mortality."
  },

  {
    id: "skinf-005",
    category: "Skin Infections",
    symptom: "Honey-crusted lesions in child, spreading to other areas",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "Your child likely has impetigo, a contagious bacterial skin infection that needs treatment. Call us this morning for an urgent appointment or we can call in an antibiotic cream or oral antibiotic. In the meantime, gently wash the crusts with soap and water several times a day. Keep the affected area covered. Your child should stay home from school or daycare until we've started treatment. Other children and family members should avoid direct contact.",
    keyDetails: [
      "Age of child?",
      "How many lesions—localized or widespread?",
      "Rate of spread?",
      "Fever or systemic symptoms?",
      "Any recent trauma, eczema, or other breaks in skin?",
      "Recent sick contacts?"
    ],
    note: "Impetigo—contagious, needs treatment. Topical antibiotics for localized; oral if widespread. Notify daycare/school."
  },

  {
    id: "skinf-006",
    category: "Skin Infections",
    symptom: "Spreading painful rash around the eye area",
    triageLevel: "er-now",
    triageLabelShort: "🔴 ER NOW",
    script: "A spreading painful rash near the eye, especially if it's herpes zoster (shingles), is an emergency that needs immediate evaluation. There's a risk of eye infection and vision loss. Go to the emergency room right away and ask them to notify ophthalmology. Do not wait.",
    keyDetails: [
      "Is rash in V1 (forehead/upper eyelid) distribution?",
      "Touching the eye itself or around it?",
      "Any eye pain, redness, or vision changes?",
      "Vesicular or erythematous?",
      "Fever or systemic symptoms?"
    ],
    note: "Ophthalmic zoster or other periocular infection—ER for ophthalmology evaluation. Risk of keratitis, anterior uveitis, vision loss."
  },

  // ==================== ALLERGIC REACTIONS ====================
  {
    id: "allrx-001",
    category: "Allergic Reactions",
    symptom: "Hives all over body with throat feeling tight",
    triageLevel: "er-now",
    triageLabelShort: "🔴 ER NOW",
    script: "This is anaphylaxis, a severe allergic reaction that is life-threatening. Call 911 immediately. If you have an EpiPen, use it now while waiting for the ambulance. Do not drive yourself. This is an emergency.",
    keyDetails: [
      "When did hives start?",
      "Any other symptoms—swelling of lips/tongue, difficulty breathing, chest pain?",
      "What were you exposed to before symptoms started?",
      "Does patient have an EpiPen?",
      "History of anaphylaxis?"
    ],
    note: "Anaphylaxis—true emergency. 911 required. ER for epinephrine, monitoring, discharge education."
  },

  {
    id: "allrx-002",
    category: "Allergic Reactions",
    symptom: "Hives all over body with no other symptoms",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "You're having an allergic reaction. Take an over-the-counter antihistamine like Benadryl (diphenhydramine 25-50 mg) right now. The hives should start improving within 30 minutes to an hour. Call us in the morning so we can identify the trigger and discuss what to do. If the hives get worse, spread to your face or lips, or you develop any difficulty breathing or throat tightness, hang up and call 911 immediately.",
    keyDetails: [
      "When did hives start?",
      "What were you exposed to in the past 2 hours (food, topical, medication)?",
      "Itchy or painful?",
      "Any history of allergies?",
      "Has patient taken anything for it yet?"
    ],
    note: "Urticaria—likely IgE-mediated. Antihistamine first-line. Identify trigger. May need short course of oral steroid if severe."
  },

  {
    id: "allrx-003",
    category: "Allergic Reactions",
    symptom: "Severe rash to new topical medication with facial swelling",
    triageLevel: "er-now",
    triageLabelShort: "🔴 ER NOW",
    script: "Stop using the medication immediately. Facial swelling with rash indicates a serious allergic reaction. Go to the emergency room right away. Do not apply anything else to your face except plain water to rinse. Bring the medication bottle with you.",
    keyDetails: [
      "When did rash and swelling start after applying topical?",
      "Is swelling spreading or stable?",
      "Any difficulty breathing or throat tightness?",
      "Coverage of rash—face only or spreading?",
      "Was this a prescription or OTC product?"
    ],
    note: "Allergic contact dermatitis with angioedema—ER for monitoring and steroids. Risk of airway compromise."
  },

  {
    id: "allrx-004",
    category: "Allergic Reactions",
    symptom: "New rash to new topical, no swelling or systemic symptoms",
    triageLevel: "home",
    triageLabelShort: "🟢 Home Management",
    script: "Stop using the product immediately—your skin is reacting to it. Wash the area thoroughly with soap and water. Apply a moisturizer or plain Vaseline. Do not apply any other products to that area for at least 24 hours. You can take an antihistamine if it's itchy. Call us in the morning to discuss an alternative. Unless you develop swelling, difficulty breathing, or worsening rash, this can be managed at home.",
    keyDetails: [
      "When did rash start after first application?",
      "Localized to application area only?",
      "Itchy, burning, stinging?",
      "Any systemic symptoms?",
      "First time using this product or used before without issue?"
    ],
    note: "Allergic or irritant contact dermatitis—stop exposure. Discuss alternative products. Consider patch testing if recurrent."
  },

  // ==================== RASH & SKIN CONCERNS ====================
  {
    id: "rash-001",
    category: "Rash & Skin Concerns",
    symptom: "Sudden widespread painful blistering rash",
    triageLevel: "er-now",
    triageLabelShort: "🔴 ER NOW",
    script: "A sudden outbreak of painful blisters over a wide area is a medical emergency. Go to the emergency room right away. This could be a serious infection or allergic reaction. Bring a list of any medications you're taking and recent exposures.",
    keyDetails: [
      "How quickly did rash develop—hours or minutes?",
      "Fever or systemic symptoms?",
      "Vesicular or bullous?",
      "Itchy or painful?",
      "Any recent medication changes?",
      "Any contacts with infectious disease?"
    ],
    note: "Consider SJS/TEN, bullous pemphigoid, herpes simplex, severe varicella—urgent ER evaluation and possible dermatology consultation."
  },

  {
    id: "rash-002",
    category: "Rash & Skin Concerns",
    symptom: "Mole is bleeding or oozing spontaneously",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "A mole that bleeds on its own needs to be evaluated by a dermatologist. Call us first thing in the morning and mention that this is urgent—we'll fit you in for a same-day or next-day appointment. Do not pick at it or try to treat it yourself. Gently cover it with a clean bandage if needed. This likely needs to be biopsied.",
    keyDetails: [
      "Size of the mole?",
      "Is bleeding continuous or did it stop?",
      "Any recent trauma or itching?",
      "How long have you had this mole?",
      "Has it changed recently?",
      "Family history of melanoma?"
    ],
    note: "Spontaneous bleeding is concerning for melanoma. Schedule urgent biopsy. Refer to dermatology if lesion appears atypical."
  },

  {
    id: "rash-003",
    category: "Rash & Skin Concerns",
    symptom: "New rash, no pain, no fever",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "Call us to schedule a routine appointment to have this rash evaluated. It's not an emergency since you don't have pain or fever. Describe the rash over the phone so we can prioritize—we can usually fit you in within a few days. Avoid irritating the area in the meantime.",
    keyDetails: [
      "Where is the rash located?",
      "Appearance—flat, raised, blistering?",
      "Color?",
      "Size and distribution?",
      "Itchy or uncomfortable?",
      "Any recent exposures or triggers?",
      "How long has it been present?"
    ],
    note: "Likely benign, but needs clinical evaluation. Routine visit appropriate."
  },

  {
    id: "rash-004",
    category: "Rash & Skin Concerns",
    symptom: "Eczema severely flaring, weeping and infected-looking",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "Your eczema is severely flaring and may have a secondary infection. Call us this morning for an urgent same-day or next-day appointment. In the meantime, stop using any new products you've started recently. Gently wash affected areas with lukewarm water only—no soap. Apply a thick moisturizer like Vaseline or Aquaphor while skin is still slightly damp. Do not scratch. If you develop fever or the redness and warmth spread rapidly, call back immediately.",
    keyDetails: [
      "Recent triggers—stress, new product, environmental change?",
      "Signs of infection—pus, bad odor, red streaking?",
      "Fever?",
      "Severe itching interfering with sleep/function?",
      "Percent of body affected?",
      "Currently on any eczema treatments?"
    ],
    note: "Severe eczema flare ± secondary infection. Same-day visit for evaluation and possible topical/oral steroids and antibiotics."
  },

  {
    id: "rash-005",
    category: "Rash & Skin Concerns",
    symptom: "Psoriasis patient with new joint swelling and fever",
    triageLevel: "er-soon",
    triageLabelShort: "🟡 ER / Urgent Care",
    script: "Joint swelling combined with fever could indicate a serious complication. Go to the emergency room or urgent care for evaluation. They will want to rule out a septic joint or systemic infection. Bring any records of your psoriasis treatments with you.",
    keyDetails: [
      "Which joints are swollen?",
      "Fever temperature?",
      "Joint pain severity?",
      "Recent joint trauma or procedure?",
      "Currently on biologics or immunosuppressants?",
      "Any skin pustules (pustular psoriasis)?"
    ],
    note: "Possible psoriatic arthritis flare, septic arthritis, or systemic infection. ER for joint fluid analysis, imaging, labs."
  },

  // ==================== PAIN & DISCOMFORT ====================
  {
    id: "pain-001",
    category: "Pain & Discomfort",
    symptom: "After Mohs: severe pain not controlled by Tylenol",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "Pain that doesn't respond to Tylenol needs to be addressed. Call us this morning. We may have prescribed a stronger pain medication for you, or we need to make sure there's no complication like infection or a hematoma. Do not wait for the pain to become unbearable—call us early so we can help.",
    keyDetails: [
      "Pain severity on 1-10 scale?",
      "Location—at the wound site or elsewhere?",
      "What time of day is it worst?",
      "Have you taken the full dose of Tylenol (2-3 tablets, 650-1000mg) every 4-6 hours?",
      "Any signs of infection or bleeding?"
    ],
    note: "Severe post-op pain—assess for infection, hematoma, or insufficient analgesia. May need opioid or in-person evaluation."
  },

  {
    id: "pain-002",
    category: "Pain & Discomfort",
    symptom: "After procedure: numbness or tingling at wound site",
    triageLevel: "call-am",
    triageLabelShort: "🟠 Call Office AM",
    script: "Numbness and tingling after surgery can indicate nerve involvement, which is sometimes expected depending on where the procedure was done. Call us in the morning to discuss where your procedure was and whether nerve involvement is normal for that location. In most cases, sensation returns over weeks to months. This is not usually an emergency unless the numbness is expanding rapidly.",
    keyDetails: [
      "When did numbness start—right after procedure?",
      "Is it stable or expanding?",
      "Pain with the numbness or just lack of sensation?",
      "Which area is affected?",
      "Procedure location?"
    ],
    note: "Expected nerve involvement vs. nerve injury—depends on location and anatomy. Reassure if expected. Monitor."
  },

  {
    id: "pain-003",
    category: "Pain & Discomfort",
    symptom: "After procedure: patient wants to take Advil for pain",
    triageLevel: "home",
    triageLabelShort: "🟢 Home Management",
    script: "Do not take ibuprofen (Advil) or other NSAIDs for the next 48 hours after your procedure. NSAIDs increase bleeding and bruising risk. Stick with acetaminophen (Tylenol) instead—take 650-1000 mg every 4-6 hours as needed for pain. After 48 hours, if you still have significant pain, you can discuss NSAIDs with us. If pain is severe, call us—we may have prescribed a stronger medication for you.",
    keyDetails: [
      "Pain severity?",
      "Patient aware of NSAID precautions?",
      "Did we prescribe opioid pain medication?",
      "How many hours post-procedure?"
    ],
    note: "Standard post-op precaution—NSAIDs increase hemorrhage risk. Acetaminophen preferred first 48h."
  },

  {
    id: "pain-004",
    category: "Pain & Discomfort",
    symptom: "After cryotherapy: pain and burning sensation",
    triageLevel: "home",
    triageLabelShort: "🟢 Home Management",
    script: "Pain and burning after cryotherapy is completely normal and expected. It usually resolves within 24-48 hours. Apply a cool compress to the area for comfort—wrap ice in a thin cloth and apply for 10-15 minutes at a time, several times a day. You can take acetaminophen (Tylenol) for pain. Avoid NSAIDs. Keep the area clean and dry. The discomfort should gradually improve. Call us if pain persists beyond 48 hours or if you develop signs of infection.",
    keyDetails: [
      "Pain severity on 1-10 scale?",
      "How many hours post-procedure?",
      "What area was treated?",
      "Any blistering?",
      "Any redness or signs of infection?"
    ],
    note: "Expected post-cryo pain from tissue destruction. Cool compresses and acetaminophen standard. Reassure."
  }
];


