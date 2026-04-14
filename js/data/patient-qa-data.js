// ════════════════════════════════════════════════════════════
//  PATIENT Q&A DATA
//  Physician-reviewed scripts for medical assistant use.
// ════════════════════════════════════════════════════════════

const PATIENT_QA = [

  // ─── POST-PROCEDURE CARE ────────────────────────────────────

  {
    id: "biopsy-care",
    category: "Post-Procedure Care",
    question: "How do I take care of my biopsy site?",
    script: "Clean the area gently once a day with mild soap and water. After cleaning, apply a thin layer of petroleum jelly (like Vaseline or Aquaphor) and cover it with a bandage or non-stick dressing. Keep it moist and covered until it heals — this usually takes about 2 to 4 weeks depending on the location. Avoid picking at any scabs, as that can cause scarring or infection.",
    note: "Signs of infection to watch for: increasing redness, warmth, swelling, pus, or red streaking around the wound. If any of these occur, the patient should call the office."
  },
  {
    id: "biopsy-results-timing",
    category: "Post-Procedure Care",
    question: "When will my biopsy results be ready?",
    script: "Results typically take about 7 to 14 business days. The pathology lab processes the tissue and sends us a report. Once we receive it, someone from our office will contact you — usually by phone. If you haven't heard from us within 2 weeks, please don't hesitate to call us and we'll look it up for you right away.",
    note: "Do NOT release biopsy results to patients without physician review. Verify the report has been reviewed and a follow-up plan is in place before calling."
  },
  {
    id: "suture-care",
    category: "Post-Procedure Care",
    question: "How do I care for my stitches / sutures?",
    script: "Keep the area clean and dry for the first 24 hours. After that, you can gently clean it with soap and water and reapply Vaseline or Aquaphor twice a day. Keep it covered with a bandage until the stitches are removed. Avoid soaking the area — no swimming or long baths. Try to limit activity that might stretch or pull on the wound.",
    note: "Suture removal timing varies: face 5–7 days, trunk/arms 10–14 days, legs/back up to 14–21 days. Confirm with chart."
  },
  {
    id: "suture-removal",
    category: "Post-Procedure Care",
    question: "When do my stitches come out?",
    script: "The timing for suture removal depends on where the wound is located. For the face, stitches usually come out in about 5 to 7 days. For the body, arms, or legs, it can be 10 to 21 days. We will tell you the exact date at your procedure appointment, or check your visit summary for that information. You can also call our office to confirm.",
    note: "Always confirm in the chart. Some patients have absorbable sutures and do not need removal."
  },
  {
    id: "mohs-aftercare",
    category: "Post-Procedure Care",
    question: "What should I expect after Mohs surgery?",
    script: "Some swelling, bruising, and soreness around the surgical site is completely normal for the first few days. Keep the area elevated when possible to help reduce swelling — especially if the surgery was on your face. Follow the wound care instructions you received after surgery: keep it clean, apply Vaseline, and change the dressing as directed. Most patients can take Tylenol for discomfort. Avoid aspirin or ibuprofen for the first 48 hours unless directed otherwise.",
    note: "Patients with repair (flap, graft, sutures) may have more specific instructions. Refer to the post-op sheet given at time of procedure."
  },
  {
    id: "cryotherapy-care",
    category: "Post-Procedure Care",
    question: "What do I do after my freezing treatment (liquid nitrogen / cryotherapy)?",
    script: "After the freezing treatment, you may notice some redness, swelling, or a small blister over the next day or two — this is a normal part of the healing process. Leave any blisters intact; don't pop them. You can clean the area with soap and water and apply Vaseline. It usually takes 1 to 3 weeks to fully heal. A temporary dark or light spot in the skin is common, especially in darker skin tones.",
    note: "Patients with darker skin tones (Fitzpatrick III–VI) should be counseled specifically about post-inflammatory hypopigmentation risk."
  },
  {
    id: "electrodessication-care",
    category: "Post-Procedure Care",
    question: "What should I expect after electrodessication (ED&C / scraping and burning)?",
    script: "The treated area will form a scab over the next few days — this is expected and protective. Keep it clean and apply a thin layer of Vaseline daily. Let the scab fall off on its own; do not pick at it. The healing process usually takes 2 to 6 weeks depending on the size and location. You may notice a pink or lighter spot once it heals, which usually fades over time.",
    note: "ED&C is typically used for superficial BCCs or seborrheic keratoses. If used for AKs, it's usually combined with curettage."
  },
  {
    id: "photodynamic-therapy",
    category: "Post-Procedure Care",
    question: "What do I do after photodynamic therapy (PDT / blue light treatment)?",
    script: "After your blue light treatment, you will likely have redness, swelling, and peeling for about 5 to 7 days — this is completely expected and means the treatment is working. It's very important to stay out of bright sunlight and bright indoor light for the first 48 hours after the treatment, as your skin will be very photosensitive. Wear a hat and protective clothing if going outside. You can use a gentle moisturizer and cool compresses for comfort.",
    note: "Ensure patient was given strict light avoidance instructions at time of treatment. Some patients have significant reactions."
  },

  // ─── MEDICATIONS ────────────────────────────────────────────

  {
    id: "topical-steroid-use",
    category: "Medications",
    question: "How do I use my topical steroid cream/ointment?",
    script: "Apply a thin layer to the affected skin once or twice a day as directed by the doctor. You only need a small amount — a pea-sized amount can cover a large area. Rub it in gently and completely. Unless specifically told otherwise, avoid using it on your face, armpits, or groin without checking with us first. Don't use it under a bandage unless directed, and don't use it for longer than prescribed.",
    note: "Verify potency class and prescribed area. High-potency steroids on the face or skin folds can cause atrophy. Never extend the course without MD approval."
  },
  {
    id: "moisturizer-timing",
    category: "Medications",
    question: "Should I put on moisturizer before or after my cream?",
    script: "For most topical medications, the general rule is to apply the medication first to clean, slightly damp skin, then wait about 5 to 10 minutes and apply your moisturizer on top. However, the order can vary depending on what was prescribed — for example, with some treatments like phototherapy prep or certain acids, your doctor may have given specific instructions. If you're unsure, feel free to ask us and we can clarify for your specific medication.",
    note: "Exception: For calcineurin inhibitors (Elidel, Protopic), apply to affected skin and then moisturize over. For tretinoin, a wait period reduces irritation."
  },
  {
    id: "elidel-protopic",
    category: "Medications",
    question: "How do I use Elidel (pimecrolimus) or Protopic (tacrolimus)?",
    script: "Apply a thin layer of the cream or ointment to the affected areas twice daily. You may feel a burning or stinging sensation when you first start — this typically improves after the first week or two of use. Do not use these on infected skin. These medications are safe to use on sensitive areas like the face and eyelids. Avoid exposure to sunlight and UV rays while using them, and use sunscreen.",
    note: "Black box warning: potential lymphoma risk (largely theoretical based on animal data; FDA required warning). Do not alarm patient, but they should avoid prolonged UV exposure."
  },
  {
    id: "accutane-instructions",
    category: "Medications",
    question: "What do I need to know about taking Accutane (isotretinoin)?",
    script: "Isotretinoin requires monthly check-ins with our office — we need to see you each month for a blood draw and to renew your prescription. You can only get a 30-day supply at a time. It is very important to use two reliable forms of birth control if you are a woman of childbearing potential, as this medication can cause serious birth defects. Please avoid vitamin A supplements, waxing while on the medication, and blood donation during treatment and for one month after.",
    note: "Patient must be registered in the iPLEDGE program. Confirm pregnancy test timing and that activation of prescription matches the iPLEDGE portal window."
  },
  {
    id: "dupixent-instructions",
    category: "Medications",
    question: "How do I use Dupixent (dupilumab) and what should I expect?",
    script: "Dupixent is injected under the skin, typically every two weeks after the initial loading doses. Many patients use the auto-injector pen on their thigh or abdomen. The most common side effect is injection site reactions — mild redness or irritation at the injection spot. Eye symptoms like redness or irritation are also fairly common; let us know if that happens. It may take 4 to 16 weeks to see the full benefit, so be patient with it.",
    note: "Confirm injection schedule and whether patient had loading doses. Ocular side effects (conjunctivitis) should be evaluated by the physician."
  },
  {
    id: "steroid-taper",
    category: "Medications",
    question: "What is a steroid taper? How do I do it?",
    script: "A steroid taper means you gradually reduce how often or how much you use the steroid over time, rather than stopping all at once. This helps prevent rebound flaring of your skin condition. For example, you might use the cream twice a day for one week, then once a day for the next week, then every other day — your doctor will write out the specific schedule for you. Always follow the taper plan as prescribed.",
    note: "If no taper plan was specified in the chart, check with the MD before providing specific instructions."
  },
  {
    id: "antifungal-use",
    category: "Medications",
    question: "How do I use my antifungal cream?",
    script: "Apply a thin layer of the antifungal cream to the affected area and a small border of normal skin around it, usually once or twice a day. Keep using it for the full course prescribed — even if the rash clears up sooner — to make sure the infection is fully gone. Keep the area clean and dry, as fungal infections thrive in warm, moist environments. Wear loose, breathable clothing if the rash is in a skin fold.",
    note: "If tinea versicolor, selenium sulfide or ketoconazole shampoo may be used as a lotion. If tinea capitis, systemic antifungal required — topicals do not penetrate hair."
  },
  {
    id: "tretinoin-start",
    category: "Medications",
    question: "I just started tretinoin — why is my skin peeling and red?",
    script: "This is completely normal and very common when starting tretinoin, and it usually means the medication is working. The skin needs time to adjust — this 'retinization' phase typically lasts about 4 to 8 weeks. To help with irritation, you can use it every other night instead of every night at first, and always apply a good moisturizer after it absorbs. Make sure to use sunscreen every morning, as tretinoin makes your skin more sensitive to the sun.",
    note: "If patient has severe irritation or allergic reaction (not the expected initial retinization), escalate to physician."
  },
  {
    id: "antibiotic-course",
    category: "Medications",
    question: "How long do I take my antibiotic for acne?",
    script: "For acne treatment, oral antibiotics are usually prescribed for about 3 to 6 months. It is important to finish the full course as directed, even if your skin improves sooner. We typically pair antibiotics with a topical retinoid or benzoyl peroxide to reduce the chance of resistance. Long-term antibiotic use for acne is generally not recommended, so follow up with us at the scheduled appointment to reassess.",
    note: "Remind patients about sun sensitivity with doxycycline (take with a full glass of water, take with food, avoid lying down for 30 min)."
  },

  // ─── SUN & SKIN PROTECTION ──────────────────────────────────

  {
    id: "sunscreen-use",
    category: "Sun & Skin Protection",
    question: "What sunscreen should I use and how often?",
    script: "We recommend a broad-spectrum sunscreen with SPF 30 or higher. Apply it every morning as the last step of your skincare routine — about a teaspoon for your face and neck, and more for exposed body areas. Reapply every 2 hours when outdoors or after swimming or sweating. For sensitive or acne-prone skin, look for mineral sunscreens containing zinc oxide or titanium dioxide, which tend to be gentler.",
    note: "For patients with precancers or skin cancer history, emphasize daily year-round use regardless of weather or season."
  },
  {
    id: "sun-avoidance-post-procedure",
    category: "Sun & Skin Protection",
    question: "Can I go in the sun after my procedure or treatment?",
    script: "We recommend avoiding direct sun exposure on the treated area for at least 2 weeks after most procedures. If you need to be outside, cover the area with clothing or wear a hat, and apply sunscreen (SPF 30 or higher) around the wound — just don't put sunscreen directly on an open wound. Sun exposure can worsen scarring and cause uneven pigmentation in healing skin.",
    note: "After PDT, strict light avoidance for 48 hours. After laser procedures, sun avoidance duration may be longer — confirm with physician's specific instructions."
  },
  {
    id: "tanning-beds",
    category: "Sun & Skin Protection",
    question: "Is it okay to use a tanning bed?",
    script: "We strongly advise against tanning beds. They emit UV radiation that significantly increases the risk of developing skin cancer, including melanoma, as well as premature aging. This is especially important given that you have a history of [skin conditions/skin cancer — edit as appropriate]. If you want a sun-kissed look, we recommend a self-tanner, which is safe for the skin.",
    note: "Customize to patient history. For patients with active psoriasis treated with narrowband UVB — tanning beds are NOT equivalent; do not confuse them."
  },

  // ─── WHEN TO CALL / EMERGENCIES ─────────────────────────────

  {
    id: "when-to-call",
    category: "When to Call / Emergency",
    question: "When should I call the office versus go to the ER?",
    script: "Call our office if you notice: increasing redness, warmth, or discharge at a wound site; a new rash that is spreading quickly; or a medication side effect that is bothersome but not severe. Go to the ER or call 911 right away if you experience: difficulty breathing or swallowing, severe allergic reaction with throat swelling (angioedema), a rapidly spreading painful rash with fever (which could indicate a serious skin infection), or a wound that won't stop bleeding after 15 to 20 minutes of direct pressure.",
    note: "Always document the reason for the call and any advice given. If uncertain, always err toward having the patient call or come in."
  },
  {
    id: "signs-of-infection",
    category: "When to Call / Emergency",
    question: "How do I know if my wound or skin is infected?",
    script: "Warning signs of an infected wound include: increasing redness or warmth that is spreading beyond the wound edges, significant swelling, yellow or green discharge or pus, a bad smell from the wound, red streaking along the skin around or near the wound, or a fever. If you notice any of these, please contact us right away or, if the symptoms are severe and rapidly worsening, go to the emergency room.",
    note: "Cellulitis with red streaking (lymphangitis) or fever warrants urgent evaluation, possibly same-day."
  },
  {
    id: "allergic-reaction",
    category: "When to Call / Emergency",
    question: "What should I do if I think I'm having an allergic reaction to my medication?",
    script: "Stop taking or using the medication right away. If you have hives, itching, or a mild rash with no other symptoms, you can take an over-the-counter antihistamine like Benadryl (diphenhydramine) or Zyrtec (cetirizine) and call our office during business hours. If you experience any swelling of the lips, tongue, or throat, difficulty breathing, dizziness, or feel faint, call 911 immediately — this is a serious emergency.",
    note: "Anaphylaxis requires epinephrine and 911. Do not delay. Document the medication reaction in the chart."
  },
  {
    id: "mole-watch",
    category: "When to Call / Emergency",
    question: "How do I know if a mole is changing and I should come in?",
    script: "A helpful way to remember what to look for is the ABCDE guide: A for Asymmetry — one half doesn't match the other; B for Border — ragged, notched, or blurred edges; C for Color — multiple colors or an uneven color; D for Diameter — larger than a pencil eraser (about 6 mm); and E for Evolving — any mole that is changing in size, shape, color, or starts bleeding or itching. If you notice any of these, please call us to schedule an evaluation.",
    note: "Prompt referral for rapidly evolving or bleeding lesions. Do not have patient wait for routine appointment if there is high suspicion."
  },

  // ─── CONDITIONS ─────────────────────────────────────────────

  {
    id: "eczema-flare",
    category: "Conditions",
    question: "What do I do if my eczema is flaring up?",
    script: "Start by increasing your moisturizing routine — apply a thick cream or ointment like CeraVe, Vanicream, or Eucerin immediately after bathing while your skin is still damp. If the doctor prescribed a topical steroid or other anti-itch medication, use it as directed. Avoid known triggers like harsh soaps, fragrances, extreme temperatures, and scratching. Taking a short lukewarm bath with a small amount of fragrance-free bath oil can also soothe the skin. If the flare is not improving after a few days of treatment or is spreading, call us.",
    note: "Wet wrap therapy can be discussed for severe flares. Infected eczema (oozing, honey-crusted) may need antibiotics — escalate to physician."
  },
  {
    id: "psoriasis-flare",
    category: "Conditions",
    question: "What should I do if my psoriasis is getting worse?",
    script: "Continue using your prescribed medications — don't stop them on your own even if things get worse. Keeping your skin moisturized helps reduce irritation and scaling. Try to identify and avoid triggers, which can include stress, certain medications (like lithium or beta-blockers), alcohol, or skin injury. If the flare is significant or you notice new or different areas involved, please contact us so we can reassess your treatment plan.",
    note: "If patient is on a biologic and has an infection, counsel to contact physician before continuing injections."
  },
  {
    id: "rosacea-triggers",
    category: "Conditions",
    question: "What triggers rosacea and how do I avoid them?",
    script: "Common triggers for rosacea include sun exposure, hot beverages, spicy foods, alcohol (especially red wine), extreme temperature changes, exercise, stress, and certain skincare products with irritating ingredients. Everyone's triggers are a bit different, so keeping a diary to track flares alongside what you ate, did, or were exposed to can really help identify yours. Use gentle, fragrance-free skincare products and always wear sunscreen.",
    note: "Some patients may benefit from journaling. Prescription medications (metronidazole, azelaic acid, ivermectin, brimonidine) require adherence for best control."
  },
  {
    id: "acne-expectations",
    category: "Conditions",
    question: "Why isn't my acne getting better faster?",
    script: "Acne treatment takes patience — most medications need at least 8 to 12 weeks of consistent use before you see significant improvement. This is because the medications work by targeting the root causes of acne, which takes time to change. It's important to use the medications exactly as prescribed, every day, even on days when your skin looks better. Stopping and starting can actually make things worse. If you're not seeing any improvement after 8 to 12 weeks, let us know so we can reassess.",
    note: "Emphasize compliance. Many patients stop prematurely. If there's no improvement after 3 months on current regimen, flag for physician to re-evaluate."
  },
  {
    id: "hair-loss-process",
    category: "Conditions",
    question: "How long will my hair loss treatment take to work?",
    script: "Hair regrowth treatments take a significant amount of time to show results — typically at least 3 to 6 months of consistent use before any noticeable change, and up to 12 months for the full effect. It's common to see shedding early on with some treatments — this can actually be a sign that new hair is pushing through. Do not get discouraged and stop early; consistency is key. We will reassess your progress at your next follow-up visit.",
    note: "Minoxidil can cause initial shedding in months 1–3. This should be discussed to prevent premature discontinuation."
  },

  // ─── GENERAL ────────────────────────────────────────────────

  {
    id: "photos-for-office",
    category: "General",
    question: "Can I send a photo of my skin to the office?",
    script: "Yes, sending photos through our patient portal is a great way to share what you're seeing, especially for follow-up questions after a visit. Please use our secure portal to send images — avoid texting or emailing photos, as these are not secure. Photos of a rash, wound healing, or skin change can really help our team assess whether you need to come in sooner or if things look on track.",
    note: "Do not accept unsecured photos via personal cell phone. Direct patients to the HIPAA-compliant portal or secure messaging system."
  },
  {
    id: "skincare-routine",
    category: "General",
    question: "Can you recommend a basic skincare routine?",
    script: "A simple but effective routine includes three steps: cleanse, moisturize, and protect. In the morning, use a gentle fragrance-free cleanser, apply your prescribed medications if any, moisturize with a cream like CeraVe or Vanicream, and finish with a broad-spectrum SPF 30 or higher sunscreen. At night, cleanse again, apply any nighttime medications, and moisturize. Keep it simple — more products aren't always better and can cause irritation. We can talk about specific product recommendations for your skin type at your next visit.",
    note: "If the patient has specific products prescribed by the physician, refer to the chart for guidance before making generic recommendations."
  },

  // ─── NEW Q&A ENTRIES (16 additional) ─────────────────────────

  {
    id: "effudex-reaction",
    category: "Field Therapy",
    question: "My skin looks terrible — is this normal with the Effudex?",
    script: "Yes, what you're experiencing is actually a normal and expected part of how the Effudex works. The cream is irritating the precancerous cells, which is what we want. You'll likely see redness, scaling, peeling, and maybe even some crust or scabs forming over the next few days to weeks. This means the medication is doing its job. It can look and feel uncomfortable, but this is temporary and part of the healing process. If you notice signs of infection — like increasing warmth, pus, or spreading redness with swelling — call us right away. Otherwise, keep the area clean and moisturized while you finish the treatment.",
    note: "Common side effects in first 1-2 weeks; assure patient this is expected."
  },

  {
    id: "effudex-stop-early",
    category: "Field Therapy",
    question: "Can I stop the Effudex early because it's too uncomfortable?",
    script: "I understand it's uncomfortable — the medication can be quite irritating. However, stopping early significantly reduces how well it works, and you may have residual precancerous cells left behind. The full 14-day course is really important for the best results. That said, let's talk about making it more tolerable. You can reduce the frequency to once a day instead of twice, apply it in the evening when you're not exposing the skin to the sun, and use an extra moisturizer and sunscreen. If it's truly unbearable, please discuss with the doctor at your next visit — they may adjust the approach. But in general, finishing the full course is best for your outcome.",
    note: "Encourage compliance; explain consequence of stopping early."
  },

  {
    id: "kefanova-reaction",
    category: "Field Therapy",
    question: "The Kefanova cream is causing a really bad reaction — should I be worried?",
    script: "The Kefanova — which contains calcipotriene — tends to cause a stronger reaction than some other compounds because it's designed to activate the immune system in the skin. What you're experiencing is likely an intense expected response. You may see significant redness, scaling, and even blistering or oozing in the first week. This is not an allergic reaction; it's the medication doing what we want it to do. Here's how to manage it: use a thick moisturizer or healing ointment on top — this helps reduce the irritation while letting the medication work. Take cool (not cold) compresses if it's very uncomfortable. If after two weeks it hasn't calmed down at all, or if you develop signs of infection, call us. Otherwise, try to get through the full treatment course as prescribed.",
    note: "Calcipotriene has intensified irritation profile; reassure normal."
  },

  {
    id: "field-therapy-sun",
    category: "Field Therapy",
    question: "Can I go in the sun while using my field therapy cream?",
    script: "You should strongly avoid exposing the treated area to the sun while using the field therapy cream. These medications make the skin very sensitive to UV rays, and sun exposure can worsen the reaction and increase irritation. Use SPF 50 or higher sunscreen if you absolutely must be outside, and reapply every two hours. Even better: try to cover the area with clothing, a wide-brimmed hat, or keep it out of direct sunlight as much as possible during your treatment course. The sun exposure can also reduce the effectiveness of the medication, so protecting the area from UV helps the treatment work better.",
    note: "Photosensitivity during field therapy; emphasize sun protection."
  },

  {
    id: "biologic-injection-site",
    category: "Biologics",
    question: "I have redness and a lump where I injected my medication — is that normal?",
    script: "Yes, some redness, swelling, or a small lump at the injection site is common and usually not a cause for concern. This is an expected injection site reaction and typically improves within a few days. To help, you can apply a cool (not cold) compress and take over-the-counter pain medication if there's mild pain. Avoid scratching or irritating the area. However, watch for signs that might need medical attention: if the redness spreads beyond the immediate injection site, becomes very warm or hot, shows signs of pus or drainage, or if you develop a fever, call us. Those would suggest an infection, which is rare but does need prompt attention. If you continue to have severe reactions at injection sites, let us know — we can discuss strategies like rotating injection sites.",
    note: "Distinguish normal injection reaction from infection."
  },

  {
    id: "dupixent-eye-side-effects",
    category: "Biologics",
    question: "My eyes have been red and irritated since I started Dupixent — what should I do?",
    script: "Eye irritation and conjunctivitis are a known side effect of Dupixent in a small percentage of patients. Red, itchy, gritty eyes can develop even in patients who didn't have eye problems before starting the medication. The good news is that this is usually manageable. First, let the doctor know at your next visit so they can examine your eyes. In the meantime, artificial tear drops used frequently can help with dry, gritty eyes. Avoid touching or rubbing your eyes. Do not stop the Dupixent on your own — the eye irritation usually improves after a few weeks, and stopping the medication might worsen your skin condition. If you develop any vision changes, severe eye pain, or significant vision loss, call us immediately or see an eye doctor. The physician may refer you to ophthalmology if needed.",
    note: "Dupixent-associated conjunctivitis is known side effect; reassure."
  },

  {
    id: "biologic-sick-hold",
    category: "Biologics",
    question: "I have a cold/infection — should I still take my injection?",
    script: "Generally, you should hold off on your biologic injection while you have an active infection — whether it's a cold, flu, or any other illness. Since biologics work by suppressing part of the immune system, taking them while you're actively fighting an infection could make the infection worse or last longer. The best approach is to call the office before your injection is due and let us know you're sick. We can tell you when it's safe to restart. Once you've recovered and have been symptom-free for at least a day or two, you can resume your regular injection schedule. Don't try to make up missed doses — just resume the normal schedule. If you have any questions about whether you should hold or take your next dose, err on the side of caution and give us a call.",
    note: "Hold biologics during active infection; verify with physician."
  },

  {
    id: "ipledge-requirements",
    category: "Isotretinoin (Accutane)",
    question: "What is iPLEDGE and why do I have to do it every month?",
    script: "iPLEDGE is a federal safety program created by the FDA because isotretinoin (Accutane) can cause serious birth defects if taken during pregnancy. The program is strict to make sure the medication is used as safely as possible. Even if you're not planning to get pregnant, these requirements apply to all patients. Here's what iPLEDGE involves: every month, you'll need to answer a survey about contraception, pregnancy status, and side effects. If you can become pregnant, you also need a negative pregnancy test result before we can fill your prescription. You'll have one survey done in the office during your visit, and then you'll need to log into the iPLEDGE website to complete your monthly survey before picking up your medication from the pharmacy. It takes just a few minutes. Your pharmacy can't fill your prescription until the survey is done, so you need to do it within a certain window of your pickup date. It's mandatory, but we'll help you through it.",
    note: "Explain iPLEDGE enrollment and monthly requirements clearly."
  },

  {
    id: "wart-multiple-treatments",
    category: "Procedures",
    question: "Why isn't my wart going away after two treatments?",
    script: "Warts are caused by HPV, and unfortunately, getting rid of them requires patience. Most warts need 4 to 8 treatments, and sometimes even more, before they completely disappear. Each treatment helps — it's just that the wart needs multiple hits to fully clear the virus from the skin. The reason for this is that HPV lives deep in the skin, and it takes repeated treatments to finally clear it and allow your immune system to prevent the wart from coming back. After each treatment, you might see the wart look better — it might become smaller, darker, or look like it's drying up — but residual virus may still be present. The good news is that the treatments are working, even if you don't see it disappear yet. Stick with the treatment plan, and we should see improvement over the next few weeks. If you notice any changes between visits — the wart getting smaller, becoming darker, or showing signs of drying up — that's a good sign.",
    note: "Warts typically require 4-8+ treatments; manage expectations."
  },

  {
    id: "patch-test-instructions",
    category: "Procedures",
    question: "What do I need to know about my patch test appointment?",
    script: "A patch test is a way to identify what you might be allergic to — especially if you have contact dermatitis. Here's how it works: during your first visit, we'll apply small patches of potential allergens to your skin, usually on your back. You'll wear these patches for 48 hours — keep them dry, don't shower, don't exercise heavily or sweat. Come back at 48 hours and we'll remove the patches and read the results. Then you'll come back again at 96 hours for a final read, because some reactions appear later. If you have a severe reaction on the patches — like intense burning, blistering, or spreading rash — don't wait; call us and come in. Some redness under the patches after removal is normal. If you develop any new rash outside the patch area during the test period, let us know. Be prepared to give us a detailed history of what products you use and when your rash started.",
    note: "Three-visit process; emphasize keeping patches dry."
  },

  {
    id: "prior-auth-denied",
    category: "Insurance / Admin",
    question: "My insurance denied my medication — what happens now?",
    script: "I understand how frustrating insurance denials are. Here's the process: our office will file an appeal on your behalf. We'll send a letter of medical necessity from the doctor explaining why this medication is medically important for you — for example, what other treatments you've already tried that didn't work. The insurance company will review the appeal, and sometimes they ask the doctor to speak directly with their medical reviewer in a 'peer-to-peer' call. These conversations often result in approval. If the appeal is still denied, we can explore a few options: there may be alternative medications the insurance will cover, we can try a different insurance appeals route, or we may be able to enroll you in a patient assistance program through the drug manufacturer, which can provide the medication for free or at very low cost. The whole appeal process usually takes 1 to 3 weeks. We'll keep you updated and work with you to find a solution.",
    note: "Explain appeal process, timelines, and patient assistance options."
  },

  {
    id: "billing-cosmetic-vs-medical",
    category: "Insurance / Admin",
    question: "Why won't my insurance cover this — I thought it was medically necessary?",
    script: "That's a great question. The distinction between 'medical' and 'cosmetic' is actually determined by your insurance plan, not always by what seems medically necessary to you or even to us. For example, some insurance companies cover acne treatment but not rosacea redness, or they cover laser hair removal for ingrown hairs but not for appearance. Each insurance plan has its own list of what it considers medical versus cosmetic. To find out exactly what your plan covers, I'd recommend calling your insurance company directly with the specific procedure or medication name and diagnosis code. We can also check your benefits before you come in. If your plan doesn't cover it, we have options: some people choose to pay out of pocket, we can look for covered alternatives, or we can help you appeal if the diagnosis supports coverage. Let me connect you with our billing department — they specialize in understanding insurance coverage and can give you specifics for your plan.",
    note: "Vary by plan; refer to billing department for specifics."
  },

  {
    id: "mohs-reconstruction",
    category: "Procedures",
    question: "How long will I have a scar after my Mohs surgery?",
    script: "That's a great question. After Mohs surgery, you'll have a healing wound that will progress through several stages. Immediately after surgery, there will be a bandage and the area will be red. Over the next few weeks, a scab will form and then fall off. The underlying wound will be pink or red and may look a little raised — this is normal inflammation as the skin heals. The scar appearance continues to improve for a long time: at 3 months it will look better, at 6 months significantly better, but the final result isn't usually visible until 12 to 18 months. That's when the scar has fully matured — it becomes flatter, paler, and less noticeable. During that time, protect the scar from the sun with SPF 50+ sunscreen and protective clothing, because UV can make scars more visible. If after the scar is fully matured (past 18 months) you'd like to improve its appearance further, we have treatments like laser or topical treatments. But most people find the scar is much less noticeable than they feared once it's fully healed.",
    note: "Scar appearance improves significantly by 12-18 months."
  },

  {
    id: "post-procedure-gym",
    category: "Procedures",
    question: "When can I go back to the gym after my procedure?",
    script: "The timeline depends on what procedure you had and where it was. In general, you want to avoid strenuous activity that increases blood flow and sweating for a couple of days after most procedures. For minor procedures like biopsies or cryotherapy, you can usually resume light exercise — walking, gentle stretching — after 24 hours. Heavy exercise, sweating, and activities that could cause friction or trauma to the treated area should be avoided for at least 48 hours. For larger excisions or Mohs surgery, you should take 1 to 2 weeks off from heavy exercise, depending on the location and size of the wound. The concern is that increased heart rate, sweating, and sweat gland bacteria can increase the risk of bleeding, wound opening, or infection. We'll give you specific instructions before you leave. If you have any questions about your specific procedure, just ask the doctor or nurse before you go, and we'll give you written aftercare instructions.",
    note: "Activity restrictions vary by procedure; give written aftercare."
  },

  {
    id: "retinol-vs-tretinoin",
    category: "Skincare",
    question: "What's the difference between the retinol I can buy over the counter and the tretinoin you prescribed?",
    script: "Great question — the difference is significant. Tretinoin, which I prescribed, is prescription-strength retinoic acid — it's the active form that your skin uses directly. Retinol, which you buy over the counter, is a weaker precursor. Your skin has to convert retinol into retinoic acid first, which means it's much less potent. Tretinoin is 20 to 100 times stronger than OTC retinol, which is why it's prescription-only and requires more careful use. Because tretinoin is stronger, it's more effective for anti-aging and treating acne, but it's also more likely to cause irritation and sensitivity. Here's the important part: don't use OTC retinol at the same time as your tretinoin prescription. Using them together increases irritation without improving results. Stick with your prescribed tretinoin as directed. Once you're done with your treatment course or if you want a gentler option for maintenance, then OTC retinol could be a possibility, but not while on prescription tretinoin.",
    note: "Never layer prescription retinoid with OTC retinol."
  },

  // ─── CONDYLOMA / GENITAL WARTS ──────────────────────────────

  {
    id: "condyloma-contagious",
    category: "Condyloma / Genital Warts",
    question: "How contagious are genital warts? Can I spread them?",
    script: "Genital warts are caused by HPV, which is very contagious and spreads through skin-to-skin sexual contact — not through toilet seats, towels, or shaking hands. You can spread HPV even if you have no visible warts, because the virus can live in the skin without causing growths. Condoms do reduce the risk, but they don't fully eliminate it because HPV can be present on skin that a condom doesn't cover. During active treatment, we ask that you avoid sexual contact. Once your warts have cleared and the doctor gives the okay at your follow-up, using condoms consistently is strongly recommended.",
    note: "Document that patient was counseled on transmission. Do not make the patient feel shamed — HPV is one of the most common sexually transmitted infections."
  },
  {
    id: "condyloma-sex",
    category: "Condyloma / Genital Warts",
    question: "Can I have sex while I have genital warts / during treatment?",
    script: "We recommend avoiding sexual contact while your warts are being treated. This is for two important reasons: first, to protect your partner from HPV transmission; and second, because some of the treatments we use — like the imiquimod cream — can cause irritation, and sexual activity during treatment can interfere with healing. Once your treatment course is complete and the doctor evaluates you at follow-up and confirms the warts have cleared, you'll be able to discuss resuming sexual activity at that appointment. Going forward, consistent condom use is strongly recommended.",
    note: "If the patient pushes back, stay firm: 'The physician's recommendation is to hold off during treatment. We want to protect you and your partner and give the treatment the best chance to work.'"
  },
  {
    id: "condyloma-treatment-time",
    category: "Condyloma / Genital Warts",
    question: "How long does treatment for genital warts take? Will this take forever?",
    script: "Treatment takes time — typically anywhere from 6 to 16 weeks, and sometimes a bit longer depending on how many warts you have and how they respond. Most patients need a combination of in-office treatments — like the freezing we do here — along with a cream you apply at home. The cream, imiquimod, works by activating your immune system to fight the warts, and it needs to be used consistently over several weeks. It can feel slow, but staying consistent with both the at-home cream and your scheduled office visits gives you the best chance of clearing the warts. We'll check your progress at each visit and adjust the plan as needed.",
    note: "Imiquimod is typically applied at bedtime 3 times a week and washed off in the morning. Confirm the physician's specific instructions for this patient in the chart."
  },
  {
    id: "condyloma-come-back",
    category: "Condyloma / Genital Warts",
    question: "Will the warts come back after treatment? Can this be cured permanently?",
    script: "This is a really common and important question. The treatments we use are very effective at removing visible warts, but they don't eliminate the HPV virus from your body — the virus stays in the skin. Because of that, warts can come back, even after a successful course of treatment. Studies show that about 30 to 70 percent of people see some recurrence in the first year. If that happens, it doesn't mean something went wrong or that you were re-infected — it just means the virus was still present in the surrounding skin. The good news is that for many people, the immune system gradually suppresses the virus over time, and recurrences become less frequent. This is why your follow-up appointments are so important — we watch for any new warts early.",
    note: "Reassure the patient. Don't imply the treatment isn't working. Recurrence is expected and manageable."
  },
  {
    id: "condyloma-partner",
    category: "Condyloma / Genital Warts",
    question: "Do I need to tell my partner? How do I know who gave this to me?",
    script: "We do encourage you to let your sexual partner or partners know, so they can be checked by their own provider. That said, HPV is very common — most sexually active adults have been exposed to it at some point. What makes it tricky is that the incubation period — the time between exposure and developing warts — can range from a few weeks to several months, and sometimes even years. That means it's genuinely not possible to pinpoint exactly when or from whom you got it, and that's not the goal here. The goal is making sure both you and your partner get the care you need. Your partner should speak with their own doctor for an evaluation.",
    note: "Stay neutral and non-judgmental. Do not speculate about who gave it to whom. You cannot determine that from a dermatology visit."
  },
  {
    id: "condyloma-perianal-referral",
    category: "Condyloma / Genital Warts",
    question: "Why can't the dermatologist do surgery or laser on my warts near the anal area?",
    script: "That's a great question. For warts in the perianal area — the skin around the outside of the anal opening — Dr. Caravaglio treats them with topical creams and in-office freezing, which are very effective. However, surgical removal, laser, or excision in the perianal area is specialized work that falls under the expertise of a colorectal surgeon, not a dermatologist. This is because the anatomy in that region requires very specialized surgical training to do safely. If you need that type of procedure, Dr. Caravaglio will give you a referral to a colorectal surgeon who specializes in exactly that.",
    note: "Dr. Caravaglio does NOT perform shave removal, excision, or laser for perianal condyloma. Flag any patient requesting surgical removal in this area for a colorectal surgery referral."
  },
  {
    id: "condyloma-internal",
    category: "Condyloma / Genital Warts",
    question: "My doctor said I might have warts inside the anal canal. What does that mean?",
    script: "If there are warts located inside the anal canal — beyond the outside edge — that area is outside of what a dermatologist treats. Those internal warts require evaluation by a gastroenterologist or a colorectal surgeon, who can examine the inside of the anal canal with a specialized scope and provide the appropriate treatment. Dr. Caravaglio will make sure you have a referral to the right specialist. Warts on the outer perianal skin we can absolutely manage here, but anything inside needs that specialist evaluation.",
    note: "Any patient with symptoms suggesting internal warts (bleeding, pressure, sensation of a mass inside) needs a GI or colorectal surgery referral. Flag the chart for physician review."
  },
  {
    id: "condyloma-cancer",
    category: "Condyloma / Genital Warts",
    question: "Can genital warts turn into cancer? Am I at risk for cancer?",
    script: "This is a really understandable concern, and the answer is reassuring. Visible genital warts are caused by HPV types 6 and 11 — these are called low-risk types, and they do not cause cancer. The high-risk HPV types that cause cervical, anal, and other cancers — mainly types 16 and 18 — typically don't cause visible warts at all. So the fact that you have visible warts actually means you have a low-risk type. That said, it is possible to have both low-risk and high-risk HPV at the same time, which is why it's important for women to stay up to date on Pap smears, and for all patients to attend follow-up visits. If you have any questions about your specific cancer screening, please ask the doctor at your next visit.",
    note: "Women should be counseled to stay current on Pap smears and HPV co-testing. Men who have sex with men may need anal Pap screening — flag for physician guidance."
  },

  {
    id: "skincare-routine-order",
    category: "Skincare",
    question: "What order should I apply my skincare products in?",
    script: "The order matters because it affects how well each product works. Here's the general rule: apply products from thinnest to thickest consistency, and water-based before oil-based. In the morning, start with cleanser, then a toner (if you use one), then your prescription medications, then moisturizer, and finish with sunscreen. At night, cleanser, toner if using, prescription medications, and moisturizer — no sunscreen at night because you don't need it. If you're using multiple prescription medications, let the physician know; they can advise the best order for your specific meds. Allow each product a minute or two to absorb before applying the next — don't layer everything at once, or they can interfere with each other. And one important rule: don't mix active treatments unless your doctor says it's okay. For example, don't use retinoids and vitamin C at the same time, or retinoids and acids. The combination can be too irritating. Your doctor will guide you on what's safe to use together. Keep it simple — more isn't better — and your skin will thank you.",
    note: "General order: cleanser → toner → meds → moisturizer → SPF (AM)."
  },

];

