const RENAL_QUESTIONS = {

  "Renal physiology": [
    {
      vignette: "A 25-year-old medical student volunteers for a renal physiology experiment. Inulin is infused intravenously at a constant rate until a steady-state plasma concentration of 1 mg/dL is achieved. Urine is collected over one hour, and the urine inulin concentration is measured at 125 mg/dL with a urine flow rate of 1 mL/min.",
      question: "What is this student's glomerular filtration rate (GFR)?",
      options: ["62.5 mL/min","100 mL/min","200 mL/min","150 mL/min","125 mL/min"],
      correctIndex: 4,
      explanation: "GFR is measured by inulin clearance because inulin is freely filtered and neither reabsorbed nor secreted. Clearance = (U × V) / P = (125 mg/dL × 1 mL/min) / 1 mg/dL = 125 mL/min.",
      optionExplanations: ["Incorrect: 62.5 mL/min would result from a calculation error, such as dividing by 2.","Incorrect: 100 mL/min is below the normal GFR calculated from the given values.","Incorrect: 200 mL/min exceeds the value calculated from the data provided.","Incorrect: 150 mL/min would require a higher urine concentration or flow rate.","Correct: Inulin clearance = (125 × 1) / 1 = 125 mL/min, which equals GFR."],
      highYieldPoint: "Inulin clearance = GFR because inulin is freely filtered, not reabsorbed, and not secreted."
    },
    {
      vignette: "A 58-year-old man with chronic kidney disease has a serum creatinine of 2.0 mg/dL. His physician uses creatinine clearance to estimate GFR and notes the result overestimates the true GFR measured by inulin clearance.",
      question: "Which property of creatinine handling by the kidney best explains this overestimation?",
      options: ["Creatinine is reabsorbed in the proximal tubule","Creatinine binds to plasma proteins and is not freely filtered","Creatinine is synthesized by the distal tubule","Creatinine is secreted by the proximal tubule","Creatinine is metabolized in the loop of Henle"],
      correctIndex: 3,
      explanation: "Creatinine is freely filtered at the glomerulus and also secreted by the proximal tubule. This additional secretion means more creatinine appears in the urine than from filtration alone, causing creatinine clearance to overestimate GFR.",
      optionExplanations: ["Incorrect: Creatinine is not significantly reabsorbed; reabsorption would cause underestimation of GFR.","Incorrect: Creatinine is a small molecule that is freely filtered; significant protein binding does not occur.","Incorrect: Creatinine is produced from muscle creatine phosphate, not synthesized in the nephron.","Correct: Proximal tubular secretion of creatinine adds extra creatinine to the urine, making clearance exceed true GFR.","Incorrect: Creatinine is not metabolized within the nephron."],
      highYieldPoint: "Creatinine clearance overestimates GFR because creatinine is secreted by the proximal tubule."
    },
    {
      vignette: "A 45-year-old woman with congestive heart failure is started on furosemide. After two weeks, she presents with muscle cramps and palpitations. Laboratory studies show serum potassium of 2.8 mEq/L, serum sodium of 134 mEq/L, and metabolic alkalosis.",
      question: "At which site in the nephron does this drug primarily act?",
      options: ["Proximal convoluted tubule","Cortical collecting duct principal cells","Distal convoluted tubule","Thick ascending limb of the loop of Henle","Cortical collecting duct intercalated cells"],
      correctIndex: 3,
      explanation: "Furosemide is a loop diuretic that inhibits the Na⁺/K⁺/2Cl⁻ cotransporter (NKCC2) in the thick ascending limb. This causes significant natriuresis and also increases potassium and hydrogen ion excretion, leading to hypokalemia and metabolic alkalosis.",
      optionExplanations: ["Incorrect: The proximal tubule is the site of action of carbonic anhydrase inhibitors like acetazolamide.","Incorrect: Principal cells of the collecting duct are targeted by potassium-sparing diuretics such as amiloride.","Incorrect: The distal convoluted tubule is the site of action of thiazide diuretics (NaCl cotransporter).","Correct: Loop diuretics inhibit NKCC2 in the thick ascending limb, causing natriuresis, kaliuresis, and alkalosis.","Incorrect: Intercalated cells regulate acid-base balance but are not the primary target of furosemide."],
      highYieldPoint: "Furosemide inhibits NKCC2 in the thick ascending limb → hypokalemia + metabolic alkalosis."
    },
    {
      vignette: "A 62-year-old man with hypertension is prescribed hydrochlorothiazide. He returns in 4 weeks with fatigue. Labs show serum Na⁺ 128 mEq/L, K⁺ 3.1 mEq/L, Ca²⁺ 10.8 mg/dL, and uric acid 9.2 mg/dL.",
      question: "Which transporter is directly inhibited by this medication?",
      options: ["Na⁺/K⁺/2Cl⁻ cotransporter","Aquaporin-2 channels","Epithelial sodium channel (ENaC)","Na⁺/H⁺ exchanger","Na⁺/Cl⁻ cotransporter"],
      correctIndex: 4,
      explanation: "Hydrochlorothiazide inhibits the NaCl cotransporter (NCC) in the distal convoluted tubule. This leads to hyponatremia, hypokalemia, hypercalcemia (increased proximal Ca²⁺ reabsorption), and hyperuricemia.",
      optionExplanations: ["Incorrect: The Na⁺/K⁺/2Cl⁻ cotransporter in the thick ascending limb is inhibited by loop diuretics.","Incorrect: Aquaporin-2 channels are regulated by ADH and targeted indirectly by drugs like lithium.","Incorrect: ENaC in the collecting duct is blocked by amiloride and triamterene.","Incorrect: The Na⁺/H⁺ exchanger in the proximal tubule is not the direct target of thiazides.","Correct: Thiazides block the NaCl cotransporter in the early distal convoluted tubule."],
      highYieldPoint: "Thiazides inhibit NCC in DCT → hyponatremia, hypokalemia, hypercalcemia, hyperuricemia."
    },
    {
      vignette: "A 34-year-old woman with resistant hypertension has a serum aldosterone-to-renin ratio of 45. CT imaging reveals a 2-cm right adrenal adenoma. She is started on spironolactone while awaiting surgery.",
      question: "What is the primary mechanism of action of spironolactone in the kidney?",
      options: ["Antagonism of mineralocorticoid receptors in the collecting duct","Inhibition of Na⁺/K⁺/2Cl⁻ cotransporter in the thick ascending limb","Blockade of epithelial sodium channels in the collecting duct","Inhibition of angiotensin-converting enzyme","Stimulation of prostaglandin synthesis in the afferent arteriole"],
      correctIndex: 0,
      explanation: "Spironolactone is an aldosterone receptor antagonist that blocks mineralocorticoid receptors in the principal cells of the cortical collecting duct. By preventing aldosterone-mediated upregulation of ENaC and Na⁺/K⁺-ATPase, it promotes sodium excretion and potassium retention.",
      optionExplanations: ["Correct: Spironolactone competitively blocks mineralocorticoid receptors, reducing ENaC expression and K⁺ secretion.","Incorrect: NKCC2 inhibition is the mechanism of loop diuretics (furosemide, bumetanide).","Incorrect: Direct ENaC blockade is the mechanism of amiloride and triamterene, not spironolactone.","Incorrect: ACE inhibition describes captopril/enalapril; spironolactone acts at the receptor level.","Incorrect: Prostaglandin-mediated afferent arteriole dilation is not the mechanism of spironolactone."],
      highYieldPoint: "Spironolactone = aldosterone receptor antagonist at collecting duct; causes K⁺-sparing diuresis."
    },
    {
      vignette: "A researcher is studying the countercurrent multiplication system. She measures the osmolarity at different segments of the nephron in a rat model. The highest interstitial osmolarity is found at the tip of the medullary papilla.",
      question: "Which of the following is most essential for generating the medullary osmotic gradient?",
      options: ["Reabsorption of NaCl in the thin ascending limb and urea recycling","Water permeability of the thick ascending limb","Secretion of potassium in the proximal tubule","Active sodium reabsorption in the thin descending limb","Chloride secretion in the collecting duct"],
      correctIndex: 0,
      explanation: "The medullary concentration gradient is established by NaCl reabsorption (passive in thin ascending limb, active in thick ascending limb) and urea recycling between the inner medullary collecting duct and thin ascending limb. This countercurrent multiplication creates the hypertonic medullary interstitium necessary for water reabsorption.",
      optionExplanations: ["Correct: NaCl reabsorption in the ascending limb and urea recycling together generate the medullary osmotic gradient.","Incorrect: The thick ascending limb is impermeable to water ('diluting segment'), which is critical precisely because it allows NaCl removal without water following.","Incorrect: Potassium secretion occurs primarily in the collecting duct, not the proximal tubule, and does not drive the gradient.","Incorrect: The thin descending limb is permeable to water (not sodium); it reabsorbs water passively, not sodium actively.","Incorrect: The collecting duct does not secrete chloride; it reabsorbs water and urea under ADH influence."],
      highYieldPoint: "Countercurrent multiplication: NaCl reabsorption (ascending limb) + urea recycling = medullary gradient."
    },
    {
      vignette: "A 50-year-old man with central diabetes insipidus is admitted for evaluation. He produces 12 liters of dilute urine per day. After administration of desmopressin (synthetic ADH), his urine osmolarity increases from 80 to 650 mOsm/kg.",
      question: "Which channel is inserted into the collecting duct membrane in response to desmopressin?",
      options: ["ROMK potassium channel","ENaC sodium channel","NKCC2 cotransporter","Aquaporin-2 water channel","Chloride channel (ClC-Kb)"],
      correctIndex: 3,
      explanation: "ADH (vasopressin) binds V2 receptors on the basolateral membrane of collecting duct principal cells, activating a cAMP cascade that triggers insertion of aquaporin-2 (AQP2) channels into the apical membrane. This allows water reabsorption from the tubular lumen into the hypertonic medullary interstitium.",
      optionExplanations: ["Incorrect: ROMK channels are constitutively present in the thick ascending limb and collecting duct for potassium recycling/secretion.","Incorrect: ENaC is regulated by aldosterone, not ADH.","Incorrect: NKCC2 is located in the thick ascending limb and is not regulated by ADH.","Correct: ADH triggers insertion of aquaporin-2 into the apical membrane of collecting duct cells, increasing water permeability.","Incorrect: ClC-Kb is a basolateral chloride channel in the thick ascending limb involved in NaCl reabsorption."],
      highYieldPoint: "ADH → V2 receptor → cAMP → aquaporin-2 insertion in collecting duct apical membrane."
    },
    {
      vignette: "A 28-year-old woman presents with tingling in her fingers and periodic muscle spasms. Her serum calcium is 7.2 mg/dL. Further workup reveals a genetic defect causing impaired calcium reabsorption in a specific nephron segment that normally reabsorbs about 60% of filtered calcium.",
      question: "In which nephron segment does the majority of calcium reabsorption occur?",
      options: ["Glomerulus","Inner medullary collecting duct","Thin descending limb of the loop of Henle","Distal convoluted tubule","Proximal convoluted tubule"],
      correctIndex: 4,
      explanation: "Approximately 60-70% of filtered calcium is reabsorbed in the proximal convoluted tubule, primarily via the paracellular pathway driven by solvent drag (linked to sodium and water reabsorption). Additional calcium reabsorption occurs in the thick ascending limb (~25%) and distal convoluted tubule (~8%, active transcellular).",
      optionExplanations: ["Incorrect: The glomerulus filters calcium; it does not reabsorb it.","Incorrect: The inner medullary collecting duct has negligible calcium reabsorption.","Incorrect: The thin descending limb plays a minimal role in calcium transport.","Incorrect: The DCT reabsorbs only ~8% of calcium, though this is actively regulated by PTH and vitamin D.","Correct: The PCT reabsorbs ~60-70% of filtered calcium passively via the paracellular route."],
      highYieldPoint: "Calcium reabsorption: PCT ~65% (passive, paracellular) > TAL ~25% > DCT ~8% (active, PTH-regulated)."
    },
    {
      vignette: "A 72-year-old man with a history of gout is prescribed probenecid. His physician explains that the drug works by altering the tubular handling of uric acid to increase its excretion.",
      question: "In which segment of the nephron does probenecid primarily exert its uricosuric effect?",
      options: ["Proximal convoluted tubule","Thick ascending limb of the loop of Henle","Distal convoluted tubule","Cortical collecting duct","Medullary collecting duct"],
      correctIndex: 0,
      explanation: "Uric acid is filtered at the glomerulus and then extensively reabsorbed and secreted in the proximal convoluted tubule. Probenecid inhibits the urate transporter URAT1 on the apical membrane of PCT cells, reducing uric acid reabsorption and increasing urinary excretion.",
      optionExplanations: ["Correct: The PCT is the primary site of uric acid reabsorption (via URAT1) and secretion; probenecid blocks reabsorption here.","Incorrect: The thick ascending limb does not play a significant role in uric acid handling.","Incorrect: The distal convoluted tubule has negligible involvement in uric acid transport.","Incorrect: The cortical collecting duct does not significantly handle uric acid.","Incorrect: The medullary collecting duct is involved in water and urea handling, not uric acid."],
      highYieldPoint: "Probenecid blocks URAT1 in the PCT → decreased uric acid reabsorption → uricosuric effect."
    },
    {
      vignette: "A 30-year-old woman undergoes renal artery angiography that reveals a fibromuscular dysplasia causing 70% stenosis of the right renal artery. Her blood pressure is 180/110 mmHg. The juxtaglomerular cells of the affected kidney are hyperplastic.",
      question: "What is the primary stimulus for renin release from juxtaglomerular cells in this patient?",
      options: ["Increased sodium delivery to the macula densa","Decreased renal perfusion pressure","Elevated serum potassium","Activation of atrial natriuretic peptide receptors","Increased sympathetic tone to the distal convoluted tubule"],
      correctIndex: 1,
      explanation: "Renal artery stenosis causes decreased perfusion pressure to the affected kidney. The juxtaglomerular (granular) cells are intrinsic baroreceptors that sense reduced stretch in the afferent arteriole and respond by releasing renin, activating the RAAS and causing hypertension.",
      optionExplanations: ["Incorrect: Increased sodium delivery to the macula densa inhibits renin release via tubuloglomerular feedback.","Correct: Reduced renal perfusion pressure is sensed by JG cell baroreceptors, stimulating renin secretion.","Incorrect: Hyperkalemia directly stimulates aldosterone release from the adrenal glands, not renin from JG cells.","Incorrect: ANP opposes the RAAS; it does not stimulate renin release.","Incorrect: Sympathetic stimulation (β1-adrenergic) does promote renin release, but it acts on JG cells of the afferent arteriole, not the DCT; moreover, the primary stimulus here is decreased perfusion."],
      highYieldPoint: "Renin release stimuli: ↓ renal perfusion pressure, ↓ NaCl at macula densa, ↑ sympathetic activity (β1)."
    },
    {
      vignette: "A 55-year-old man with nephrotic syndrome has a serum albumin of 1.8 g/dL. Despite severe edema, he develops acute kidney injury. His physician explains that the effective circulating volume is reduced.",
      question: "Which Starling force change at the peritubular capillaries most directly promotes sodium and water retention in this patient?",
      options: ["Increased peritubular capillary hydrostatic pressure","Decreased peritubular capillary oncotic pressure","Increased Bowman space hydrostatic pressure","Increased glomerular capillary oncotic pressure","Decreased interstitial hydrostatic pressure"],
      correctIndex: 1,
      explanation: "In nephrotic syndrome, severe hypoalbuminemia decreases the oncotic pressure throughout the vasculature, including peritubular capillaries. Lower peritubular capillary oncotic pressure reduces the driving force for reabsorption of fluid from the interstitium into the capillaries. However, the reduced effective circulating volume activates RAAS and sympathetic nervous system, promoting avid sodium reabsorption in the proximal tubule.",
      optionExplanations: ["Incorrect: Increased peritubular capillary hydrostatic pressure would oppose reabsorption but is not the primary Starling force change in hypoalbuminemia.","Correct: Low serum albumin → decreased peritubular capillary oncotic pressure; the underfill mechanism activates RAAS, promoting sodium retention.","Incorrect: Bowman space pressure changes do not directly affect peritubular capillary reabsorption.","Incorrect: Glomerular capillary oncotic pressure is decreased (not increased) in hypoalbuminemia.","Incorrect: Interstitial hydrostatic pressure changes are secondary; the primary force alteration is the decreased oncotic pressure."],
      highYieldPoint: "Nephrotic syndrome → ↓ albumin → ↓ oncotic pressure → underfill → RAAS activation → Na⁺/H₂O retention."
    },
    {
      vignette: "A 40-year-old man is evaluated for kidney stones. A 24-hour urine collection reveals a urine pH of 7.8. His physician suspects an infection with a urease-producing organism.",
      question: "Which type of kidney stone is most likely to form in this alkaline urinary environment?",
      options: ["Calcium oxalate","Uric acid","Magnesium ammonium phosphate (struvite)","Cystine","Calcium phosphate"],
      correctIndex: 2,
      explanation: "Urease-producing bacteria (e.g., Proteus mirabilis, Klebsiella) split urea into ammonia and CO₂, raising urine pH. The highly alkaline environment promotes precipitation of magnesium ammonium phosphate (struvite) crystals, which can form large staghorn calculi.",
      optionExplanations: ["Incorrect: Calcium oxalate stones are the most common overall but form regardless of pH and are not specifically associated with infection.","Incorrect: Uric acid stones form in acidic urine (pH < 5.5), not alkaline urine.","Correct: Struvite stones form in alkaline urine caused by urease-producing organisms; they can become large staghorn calculi.","Incorrect: Cystine stones form due to genetic defects in cystine transport and are radiopaque with hexagonal crystals.","Incorrect: Calcium phosphate stones can form in alkaline urine but are more associated with RTA type 1 than urease-producing infections."],
      highYieldPoint: "Struvite stones: urease-producing bacteria → alkaline urine → Mg-ammonium-phosphate staghorn calculi."
    },
    {
      vignette: "A 19-year-old college athlete collapses during a marathon. In the emergency department, he is confused and tachycardic. Labs show serum Na⁺ 118 mEq/L and urine osmolarity of 600 mOsm/kg. He had been drinking large amounts of water during the race.",
      question: "What is the most likely mechanism for this patient's hyponatremia?",
      options: ["Renal sodium wasting due to thiazide use","Psychogenic polydipsia with suppressed ADH","Exercise-associated inappropriate ADH secretion with excess free water intake","Adrenal insufficiency with cortisol deficiency","Osmotic diuresis from hyperglycemia"],
      correctIndex: 2,
      explanation: "Exercise-associated hyponatremia occurs when intense physical activity stimulates non-osmotic ADH release (via nausea, pain, and volume contraction from sweating), and the athlete simultaneously ingests excess hypotonic fluid. The elevated urine osmolarity confirms ADH activity, preventing free water excretion.",
      optionExplanations: ["Incorrect: There is no mention of thiazide use; exercise-associated hyponatremia does not require drug exposure.","Incorrect: In psychogenic polydipsia, ADH is appropriately suppressed and urine osmolarity would be very low (< 100 mOsm/kg).","Correct: Exercise triggers non-osmotic ADH release; combined with excess water intake, this produces dilutional hyponatremia with concentrated urine.","Incorrect: Adrenal insufficiency can cause hyponatremia but would present with hypotension, hyperkalemia, and hyperpigmentation.","Incorrect: Osmotic diuresis causes water loss and would tend to cause hypernatremia, not hyponatremia."],
      highYieldPoint: "Exercise-associated hyponatremia: non-osmotic ADH + excess free water → dilutional hyponatremia."
    },
    {
      vignette: "A physiologist is studying a substance that is freely filtered at the glomerulus, partially reabsorbed, and not secreted. The clearance of this substance is measured at 80 mL/min, while inulin clearance is 120 mL/min in the same subject.",
      question: "What is the fractional excretion of this substance?",
      options: ["0.33","0.50","0.67","0.80","1.50"],
      correctIndex: 2,
      explanation: "Fractional excretion (FE) = clearance of substance / GFR = 80/120 = 0.67. This means 67% of the filtered substance is excreted, and 33% is reabsorbed. Since FE < 1 and there is no secretion, the substance undergoes net reabsorption.",
      optionExplanations: ["Incorrect: 0.33 represents the fraction reabsorbed, not excreted.","Incorrect: 0.50 would require the clearance to be 60 mL/min.","Correct: FE = clearance/GFR = 80/120 = 0.67; 67% of the filtered substance is excreted.","Incorrect: 0.80 would require a clearance of 96 mL/min.","Incorrect: A fractional excretion >1.0 indicates net secretion, which is not the case here."],
      highYieldPoint: "Fractional excretion = clearance of X / GFR. FE < 1 = net reabsorption; FE > 1 = net secretion."
    },
    {
      vignette: "A 48-year-old woman with type 2 diabetes presents for a routine visit. She is found to have a blood pressure of 152/94 mmHg and urine albumin-to-creatinine ratio of 350 mg/g. Her physician starts an ACE inhibitor.",
      question: "What is the primary mechanism by which ACE inhibitors reduce proteinuria in diabetic nephropathy?",
      options: ["Constriction of the afferent arteriole","Dilation of the efferent arteriole","Increased glomerular permeability to albumin","Enhanced tubular reabsorption of protein","Direct stabilization of the podocyte slit diaphragm"],
      correctIndex: 1,
      explanation: "ACE inhibitors reduce angiotensin II production. Since angiotensin II preferentially constricts the efferent arteriole, its inhibition causes efferent arteriolar dilation. This reduces intraglomerular pressure (glomerular capillary hydrostatic pressure), decreasing hyperfiltration and proteinuria.",
      optionExplanations: ["Incorrect: ACE inhibitors do not constrict the afferent arteriole; this would reduce GFR excessively.","Correct: Efferent arteriolar dilation by blocking angiotensin II reduces glomerular capillary pressure and proteinuria.","Incorrect: ACE inhibitors decrease, not increase, glomerular permeability to proteins.","Incorrect: ACE inhibitors do not primarily enhance tubular protein reabsorption.","Incorrect: While ACE inhibitors may have indirect effects on podocytes, the primary mechanism is hemodynamic (efferent arteriolar dilation)."],
      highYieldPoint: "ACE inhibitors → efferent arteriolar dilation → ↓ intraglomerular pressure → ↓ proteinuria."
    }
  ],

  "Acid-base disorders": [
    {
      vignette: "A 22-year-old man with type 1 diabetes presents to the emergency department with Kussmaul respirations, fruity breath, and altered mental status. Labs show pH 7.12, pCO₂ 18 mmHg, HCO₃⁻ 6 mEq/L, Na⁺ 132 mEq/L, K⁺ 5.8 mEq/L, Cl⁻ 98 mEq/L, glucose 520 mg/dL, and serum ketones are strongly positive.",
      question: "What is the anion gap in this patient, and what is the primary acid-base disorder?",
      options: ["Anion gap 12, metabolic alkalosis","Anion gap 12, non-anion gap metabolic acidosis","Anion gap 28, respiratory acidosis","Anion gap 28, anion gap metabolic acidosis","Anion gap 20, mixed metabolic acidosis and alkalosis"],
      correctIndex: 3,
      explanation: "Anion gap = Na⁺ − (Cl⁻ + HCO₃⁻) = 132 − (98 + 6) = 28. This is an elevated anion gap metabolic acidosis caused by diabetic ketoacidosis (DKA). The unmeasured anions are beta-hydroxybutyrate and acetoacetate. Kussmaul respirations represent respiratory compensation.",
      optionExplanations: ["Incorrect: pH 7.12 and low HCO₃⁻ indicate acidosis, not alkalosis.","Incorrect: The anion gap is 28, not 12; this is not a non-anion gap acidosis.","Incorrect: While pCO₂ is low, this represents compensation for metabolic acidosis, not respiratory acidosis.","Correct: AG = 132 − 104 = 28; DKA causes anion gap metabolic acidosis from ketoacid accumulation.","Incorrect: The anion gap is 28, and the primary disorder is a simple anion gap metabolic acidosis with appropriate respiratory compensation."],
      highYieldPoint: "DKA: anion gap metabolic acidosis. AG = Na⁺ − (Cl⁻ + HCO₃⁻); normal ~12. MUDPILES mnemonic for causes."
    },
    {
      vignette: "A 67-year-old woman with COPD and chronic CO₂ retention is admitted for pneumonia. ABG shows pH 7.22, pCO₂ 72 mmHg, HCO₃⁻ 28 mEq/L. Her baseline ABG from 3 months ago showed pH 7.36, pCO₂ 55 mmHg, HCO₃⁻ 30 mEq/L.",
      question: "Which acid-base disorder best describes this patient's current status?",
      options: ["Acute respiratory acidosis superimposed on chronic respiratory acidosis","Simple chronic respiratory acidosis","Metabolic acidosis with respiratory compensation","Acute respiratory alkalosis","Mixed metabolic and respiratory alkalosis"],
      correctIndex: 0,
      explanation: "Her baseline shows chronic respiratory acidosis (elevated pCO₂ with near-normal pH due to renal compensation with elevated HCO₃⁻). The acute pneumonia has further elevated her pCO₂ to 72 mmHg, and the HCO₃⁻ has not risen proportionally (expected chronic compensation: HCO₃⁻ = 24 + 3.5 × [(72-40)/10] ≈ 35), indicating an acute-on-chronic process.",
      optionExplanations: ["Correct: Acute worsening of CO₂ retention from pneumonia superimposed on chronic compensated respiratory acidosis.","Incorrect: If this were simple chronic respiratory acidosis at pCO₂ 72, the HCO₃⁻ should be higher (~35 mEq/L) with a more normal pH.","Incorrect: The primary problem is CO₂ retention (respiratory), not a metabolic process.","Incorrect: Respiratory alkalosis would show low pCO₂; this patient has elevated pCO₂.","Incorrect: Both pH and pCO₂ indicate acidosis, not alkalosis."],
      highYieldPoint: "Acute-on-chronic respiratory acidosis: chronic renal compensation insufficient for acute pCO₂ rise."
    },
    {
      vignette: "A 35-year-old woman with severe bulimia nervosa presents with weakness. Labs show pH 7.52, pCO₂ 48 mmHg, HCO₃⁻ 38 mEq/L, K⁺ 2.6 mEq/L, Cl⁻ 86 mEq/L. Urine chloride is 8 mEq/L.",
      question: "What is the most likely cause of this patient's metabolic alkalosis?",
      options: ["Primary hyperaldosteronism","Loop diuretic use","Milk-alkali syndrome","Bartter syndrome","Self-induced vomiting with loss of gastric HCl"],
      correctIndex: 4,
      explanation: "Self-induced vomiting causes loss of gastric HCl, leading to metabolic alkalosis. The low urine chloride (< 20 mEq/L) indicates a chloride-responsive (saline-responsive) alkalosis, consistent with volume contraction from vomiting. Hypokalemia results from renal potassium wasting secondary to alkalosis and volume depletion.",
      optionExplanations: ["Incorrect: Primary hyperaldosteronism causes metabolic alkalosis but with urine chloride > 20 mEq/L (chloride-resistant).","Incorrect: Active loop diuretic use can cause alkalosis, but urine Cl⁻ would be elevated (> 20 mEq/L) during active diuresis.","Incorrect: Milk-alkali syndrome causes metabolic alkalosis with hypercalcemia from excessive calcium/antacid intake, not typically with this presentation.","Incorrect: Bartter syndrome mimics loop diuretic use with elevated urine chloride (chloride-resistant).","Correct: Vomiting → loss of HCl → metabolic alkalosis with low urine Cl⁻ (chloride-responsive)."],
      highYieldPoint: "Vomiting → contraction alkalosis; urine Cl⁻ < 20 = chloride-responsive; > 20 = chloride-resistant."
    },
    {
      vignette: "A 9-year-old boy presents with growth retardation and recurrent nephrolithiasis. Labs show pH 7.30, HCO₃⁻ 14 mEq/L, K⁺ 2.9 mEq/L, Cl⁻ 116 mEq/L. Urine pH is 6.8 despite systemic acidosis. Urine anion gap is positive.",
      question: "Which type of renal tubular acidosis does this patient most likely have?",
      options: ["Type 1 (distal) RTA","Type 2 (proximal) RTA","Type 3 (mixed) RTA","Type 4 (hyperkalemic) RTA","Urinary tract infection-related acidosis"],
      correctIndex: 0,
      explanation: "Type 1 (distal) RTA is characterized by inability to secrete H⁺ in the alpha-intercalated cells of the collecting duct, resulting in urine pH > 5.5 despite systemic metabolic acidosis. Features include non-anion gap metabolic acidosis, hypokalemia, nephrolithiasis (calcium phosphate stones from alkaline urine), and nephrocalcinosis.",
      optionExplanations: ["Correct: Distal RTA — inability to acidify urine (pH > 5.5), hypokalemia, nephrolithiasis, and non-anion gap metabolic acidosis.","Incorrect: Proximal (type 2) RTA involves defective HCO₃⁻ reabsorption in the PCT; urine pH can be < 5.5 once HCO₃⁻ falls below reabsorptive threshold.","Incorrect: Type 3 RTA is a rare combination of types 1 and 2, primarily seen in carbonic anhydrase II deficiency.","Incorrect: Type 4 RTA presents with hyperkalemia (not hypokalemia) due to aldosterone deficiency or resistance.","Incorrect: UTI-related acidosis is not a standard classification and does not explain the chronic findings."],
      highYieldPoint: "Type 1 (distal) RTA: urine pH > 5.5, hypokalemia, nephrolithiasis, non-anion gap metabolic acidosis."
    },
    {
      vignette: "A 58-year-old man with multiple myeloma develops renal insufficiency. Labs show pH 7.29, HCO₃⁻ 15 mEq/L, K⁺ 3.3 mEq/L, Cl⁻ 115 mEq/L. Urine pH is 5.2. He is started on alkali therapy but requires very large doses to maintain serum bicarbonate.",
      question: "Which type of renal tubular acidosis is most consistent with this presentation?",
      options: ["Type 1 (distal) RTA","Lactic acidosis","Type 4 RTA","Type 2 (proximal) RTA","Respiratory acidosis"],
      correctIndex: 3,
      explanation: "Type 2 (proximal) RTA is caused by defective HCO₃⁻ reabsorption in the proximal tubule. The kidney can acidify urine appropriately once serum HCO₃⁻ drops below the lowered reabsorptive threshold (hence urine pH < 5.5). It requires large amounts of alkali replacement because administered bicarbonate is promptly excreted. Multiple myeloma can cause proximal RTA through light chain deposition in the proximal tubule (Fanconi syndrome).",
      optionExplanations: ["Incorrect: Type 1 RTA has urine pH > 5.5 because the distal tubule cannot secrete H⁺; this patient can acidify urine.","Incorrect: Lactic acidosis causes anion gap metabolic acidosis; this is a non-anion gap acidosis (Cl⁻ elevated).","Incorrect: Type 4 RTA is characterized by hyperkalemia; this patient has hypokalemia.","Correct: Proximal RTA from myeloma (Fanconi syndrome) — low threshold for HCO₃⁻ reabsorption, urine pH < 5.5, large alkali requirement.","Incorrect: Respiratory acidosis would show elevated pCO₂ as the primary abnormality."],
      highYieldPoint: "Type 2 (proximal) RTA: defective PCT HCO₃⁻ reabsorption, urine pH < 5.5, Fanconi syndrome, requires large alkali doses."
    },
    {
      vignette: "A 72-year-old man with diabetic nephropathy and CKD stage 4 has persistent hyperkalemia (K⁺ 6.1 mEq/L) despite dietary restriction. Labs show pH 7.31, HCO₃⁻ 18 mEq/L, Cl⁻ 112 mEq/L. He takes no NSAIDs or potassium-sparing diuretics.",
      question: "What is the most likely mechanism of this patient's acid-base disorder?",
      options: ["Impaired NH₃ production in the proximal tubule due to hyperkalemia","Excessive bicarbonate wasting in the loop of Henle","Carbonic anhydrase deficiency in the distal tubule","Increased aldosterone secretion from the adrenal glands","Enhanced H⁺-ATPase activity in the collecting duct"],
      correctIndex: 0,
      explanation: "Type 4 RTA in diabetic nephropathy results from hypoaldosteronism (hyporeninemic hypoaldosteronism). Hyperkalemia impairs ammoniagenesis in the proximal tubule by favoring intracellular alkalinization, reducing NH₃/NH₄⁺ production. This decreases the kidney's ability to excrete acid as NH₄⁺, causing non-anion gap metabolic acidosis with hyperkalemia.",
      optionExplanations: ["Correct: Hyperkalemia suppresses proximal tubule NH₃ synthesis, impairing renal acid excretion — the hallmark of type 4 RTA.","Incorrect: Bicarbonate is primarily reabsorbed in the PCT, not wasted in the loop of Henle.","Incorrect: Carbonic anhydrase deficiency causes type 3 RTA, which is extremely rare.","Incorrect: Aldosterone is decreased (hyporeninemic hypoaldosteronism) in type 4 RTA, not increased.","Incorrect: H⁺-ATPase activity is reduced, not enhanced, due to the lack of aldosterone stimulation."],
      highYieldPoint: "Type 4 RTA: hyperkalemia + non-anion gap metabolic acidosis; usually from hypoaldosteronism in diabetic CKD."
    },
    {
      vignette: "A 45-year-old man is brought to the emergency department after ingesting an unknown substance. Labs show pH 7.18, pCO₂ 14 mmHg, HCO₃⁻ 5 mEq/L, Na⁺ 140 mEq/L, Cl⁻ 100 mEq/L, osmolal gap 28 mOsm/kg. Urinalysis reveals calcium oxalate crystals.",
      question: "Which substance was most likely ingested?",
      options: ["Methanol","Isopropyl alcohol","Salicylates","Ethylene glycol","Acetaminophen"],
      correctIndex: 3,
      explanation: "Ethylene glycol ingestion causes severe anion gap metabolic acidosis (AG = 140 − 105 = 35) with an elevated osmolal gap (from the parent compound). It is metabolized to glycolic acid and oxalic acid; oxalate combines with calcium to form calcium oxalate crystals in the urine, which is pathognomonic.",
      optionExplanations: ["Incorrect: Methanol causes anion gap metabolic acidosis and osmolal gap but produces formic acid (retinal toxicity, blindness), not calcium oxalate crystals.","Incorrect: Isopropyl alcohol causes an osmolal gap and ketosis but not metabolic acidosis (metabolized to acetone, not an acid).","Incorrect: Salicylates cause mixed respiratory alkalosis and anion gap metabolic acidosis but no osmolal gap or oxalate crystals.","Correct: Ethylene glycol → glycolic acid + oxalic acid → calcium oxalate crystals; elevated AG and osmolal gap.","Incorrect: Acetaminophen causes hepatotoxicity but does not produce this acid-base pattern or oxalate crystals."],
      highYieldPoint: "Ethylene glycol: AG metabolic acidosis + ↑ osmolal gap + calcium oxalate crystals. Treat with fomepizole."
    },
    {
      vignette: "A 30-year-old woman at 32 weeks gestation presents with severe nausea and hyperemesis. ABG shows pH 7.50, pCO₂ 30 mmHg, HCO₃⁻ 23 mEq/L. Serum chloride is 96 mEq/L.",
      question: "What is the primary acid-base disturbance in this patient?",
      options: ["Metabolic alkalosis","Metabolic acidosis","Mixed metabolic alkalosis and respiratory acidosis","Respiratory acidosis","Respiratory alkalosis"],
      correctIndex: 4,
      explanation: "The ABG shows alkalemia (pH 7.50) with a low pCO₂ (30 mmHg) and near-normal HCO₃⁻ (23 mEq/L). The primary disturbance is respiratory alkalosis. While vomiting can cause metabolic alkalosis, the normal HCO₃⁻ and low pCO₂ indicate the primary process is hyperventilation, which is common in pregnancy (progesterone-mediated stimulation of the respiratory center).",
      optionExplanations: ["Incorrect: Metabolic alkalosis would show elevated HCO₃⁻ as the primary change; HCO₃⁻ is normal here.","Incorrect: Metabolic acidosis would present with low pH and low HCO₃⁻.","Incorrect: This is a simple respiratory alkalosis; the HCO₃⁻ is appropriately compensated.","Incorrect: Respiratory acidosis would show elevated pCO₂ with decreased pH.","Correct: Low pCO₂ with alkalemic pH and normal HCO₃⁻ indicates primary respiratory alkalosis (common in pregnancy)."],
      highYieldPoint: "Pregnancy causes chronic respiratory alkalosis from progesterone-stimulated hyperventilation."
    },
    {
      vignette: "A 60-year-old man with small cell lung cancer develops confusion and lethargy. Labs show Na⁺ 118 mEq/L, serum osmolality 248 mOsm/kg, urine osmolality 550 mOsm/kg, urine Na⁺ 65 mEq/L. He is euvolemic on examination. ABG shows pH 7.38, pCO₂ 38 mmHg, HCO₃⁻ 22 mEq/L.",
      question: "What is the most appropriate initial treatment for this patient's hyponatremia?",
      options: ["Normal saline (0.9% NaCl) bolus","Fluid restriction to less than 800 mL/day","3% hypertonic saline infusion","Desmopressin (DDAVP) administration","Furosemide plus salt tablets"],
      correctIndex: 1,
      explanation: "This patient has SIADH (euvolemic hyponatremia with inappropriately concentrated urine and high urine sodium) from small cell lung cancer. For chronic, asymptomatic-to-mild SIADH, the first-line treatment is fluid restriction. Hypertonic saline is reserved for severe symptomatic hyponatremia (seizures, coma).",
      optionExplanations: ["Incorrect: Normal saline may worsen hyponatremia in SIADH because the kidneys excrete sodium while retaining water.","Correct: Fluid restriction is first-line for chronic SIADH to reduce free water intake and gradually correct sodium.","Incorrect: 3% saline is reserved for acute, severe symptomatic hyponatremia (seizures, obtundation) to prevent herniation.","Incorrect: DDAVP worsens water retention and would exacerbate hyponatremia; it is used to prevent overcorrection.","Incorrect: Furosemide with salt tablets may be used for SIADH refractory to fluid restriction but is not first-line."],
      highYieldPoint: "SIADH: euvolemic hyponatremia, urine Osm > serum Osm, high urine Na⁺. First-line: fluid restriction."
    },
    {
      vignette: "A 4-year-old boy with chronic diarrhea from celiac disease presents with weakness. Labs show pH 7.28, HCO₃⁻ 14 mEq/L, K⁺ 3.0 mEq/L, Cl⁻ 118 mEq/L, Na⁺ 140 mEq/L. Urine anion gap is negative (−15 mEq/L).",
      question: "What does the negative urine anion gap indicate about the kidney's response to this acidosis?",
      options: ["The kidney is failing to excrete ammonium appropriately","The kidney is appropriately increasing ammonium excretion","There is distal renal tubular acidosis","There is proximal renal tubular acidosis","The patient has type 4 renal tubular acidosis"],
      correctIndex: 1,
      explanation: "A negative urine anion gap (UAG = urine Na⁺ + K⁺ − Cl⁻) indicates high urinary NH₄⁺ excretion, because NH₄⁺ is excreted with Cl⁻ as the accompanying anion. This shows the kidneys are responding appropriately to the metabolic acidosis by increasing acid excretion. The cause of the non-anion gap metabolic acidosis is GI bicarbonate loss from chronic diarrhea.",
      optionExplanations: ["Incorrect: A positive urine anion gap would suggest inadequate NH₄⁺ excretion (renal cause); negative UAG indicates appropriate renal response.","Correct: Negative UAG reflects high urinary NH₄⁺ (matched by Cl⁻), confirming appropriate renal compensation for extrarenal acid loss.","Incorrect: Distal RTA would show a positive urine anion gap (inability to excrete NH₄⁺) and urine pH > 5.5.","Incorrect: Proximal RTA involves bicarbonate wasting, not decreased NH₄⁺ excretion; UAG is typically positive.","Incorrect: Type 4 RTA shows hyperkalemia (not hypokalemia) and positive UAG."],
      highYieldPoint: "Urine anion gap: negative = ↑ NH₄⁺ excretion (GI cause); positive = ↓ NH₄⁺ excretion (renal cause, RTA)."
    },
    {
      vignette: "A 55-year-old man with chronic alcoholism presents with rapid breathing and confusion. ABG shows pH 7.25, pCO₂ 20 mmHg, HCO₃⁻ 8 mEq/L. Serum lactate is 9 mmol/L. Na⁺ 138, Cl⁻ 100, glucose 70 mg/dL.",
      question: "What is the expected pCO₂ based on Winter's formula for this patient's metabolic acidosis?",
      options: ["10 mmHg","15 mmHg","35 mmHg","28 mmHg","20 mmHg"],
      correctIndex: 4,
      explanation: "Winter's formula calculates expected respiratory compensation for metabolic acidosis: Expected pCO₂ = 1.5 × [HCO₃⁻] + 8 (± 2) = 1.5 × 8 + 8 = 20 mmHg. The measured pCO₂ of 20 mmHg matches, indicating appropriate respiratory compensation for a simple metabolic acidosis.",
      optionExplanations: ["Incorrect: 10 mmHg is lower than predicted and would suggest a concurrent respiratory alkalosis.","Incorrect: 15 mmHg is below the expected range (18-22) and would suggest additional respiratory alkalosis.","Incorrect: 35 mmHg is near normal and would indicate a significant concurrent respiratory acidosis.","Incorrect: 28 mmHg exceeds the expected range and would indicate inadequate respiratory compensation (concurrent respiratory acidosis).","Correct: Winter's formula: 1.5(8) + 8 = 20 mmHg, matching the measured pCO₂ — appropriate compensation."],
      highYieldPoint: "Winter's formula: expected pCO₂ = 1.5 × [HCO₃⁻] + 8 ± 2 for metabolic acidosis compensation."
    },
    {
      vignette: "A 28-year-old woman presents with anxiety and paresthesias. She has been hyperventilating for the past hour due to a panic attack. ABG shows pH 7.56, pCO₂ 22 mmHg, HCO₃⁻ 19 mEq/L. Serum calcium is 9.0 mg/dL.",
      question: "What is the most likely cause of her paresthesias?",
      options: ["True hypocalcemia from renal calcium wasting","Decreased ionized calcium due to increased albumin binding in alkalemia","Hypomagnesemia from respiratory losses","Hyperkalemia from intracellular potassium shift","Direct neuronal excitation by elevated CO₂"],
      correctIndex: 1,
      explanation: "Alkalosis increases the negative charge on albumin, causing more calcium to bind to albumin and decreasing the free (ionized) calcium fraction. While total serum calcium may be normal, the physiologically active ionized calcium is reduced, leading to increased neuromuscular excitability manifesting as paresthesias, carpopedal spasm, and tetany.",
      optionExplanations: ["Incorrect: Total calcium is normal (9.0 mg/dL); the issue is redistribution of calcium between bound and ionized forms.","Correct: Alkalemia increases albumin's affinity for calcium → decreased ionized Ca²⁺ → neuromuscular irritability.","Incorrect: Magnesium is not lost through respiratory mechanisms during hyperventilation.","Incorrect: Alkalosis causes hypokalemia (K⁺ shifts intracellularly), not hyperkalemia.","Incorrect: CO₂ is decreased (pCO₂ 22), not elevated; low CO₂ does not directly cause paresthesias."],
      highYieldPoint: "Alkalosis → ↑ Ca²⁺ binding to albumin → ↓ ionized Ca²⁺ → tetany, paresthesias, perioral numbness."
    },
    {
      vignette: "A 70-year-old woman with severe COPD is found unresponsive. ABG shows pH 7.10, pCO₂ 90 mmHg, HCO₃⁻ 27 mEq/L. She is intubated and mechanically ventilated. The resident rapidly corrects her pCO₂ to 40 mmHg within 2 hours.",
      question: "What acid-base complication is most likely to develop from this rapid correction?",
      options: ["Respiratory acidosis","Metabolic acidosis from lactic acid production","Post-hypercapnic metabolic alkalosis","Hyperchloremic metabolic acidosis","Central pontine myelinolysis"],
      correctIndex: 2,
      explanation: "In chronic respiratory acidosis, the kidneys compensate by retaining HCO₃⁻. When mechanical ventilation rapidly lowers pCO₂, the elevated HCO₃⁻ remains (renal correction is slow, taking days), resulting in post-hypercapnic metabolic alkalosis. This can cause dangerous alkalemia, arrhythmias, and seizures.",
      optionExplanations: ["Incorrect: The ventilator is correcting the respiratory acidosis; the complication is alkalosis from the retained bicarbonate.","Incorrect: Lactic acidosis is not a direct consequence of correcting hypercapnia.","Correct: Rapid pCO₂ correction leaves behind the compensatory elevated HCO₃⁻, causing metabolic alkalosis.","Incorrect: Hyperchloremic acidosis is not caused by rapid pCO₂ correction.","Incorrect: Central pontine myelinolysis is caused by rapid correction of hyponatremia, not hypercapnia."],
      highYieldPoint: "Post-hypercapnic metabolic alkalosis: rapid pCO₂ correction in chronic respiratory acidosis leaves retained HCO₃⁻."
    },
    {
      vignette: "A 16-year-old girl is brought to the emergency department after intentionally ingesting a large amount of aspirin. Initial ABG shows pH 7.45, pCO₂ 20 mmHg, HCO₃⁻ 14 mEq/L. Na⁺ 140 mEq/L, Cl⁻ 102 mEq/L.",
      question: "Which acid-base pattern is characteristic of early salicylate toxicity?",
      options: ["Pure anion gap metabolic acidosis","Pure respiratory acidosis","Respiratory alkalosis with concurrent anion gap metabolic acidosis","Non-anion gap metabolic acidosis with respiratory alkalosis","Pure metabolic alkalosis"],
      correctIndex: 2,
      explanation: "Salicylates directly stimulate the medullary respiratory center, causing primary respiratory alkalosis (low pCO₂). Simultaneously, salicylates uncouple oxidative phosphorylation and generate organic acids, causing anion gap metabolic acidosis (AG = 140 − 116 = 24). This mixed pattern is characteristic of salicylate toxicity.",
      optionExplanations: ["Incorrect: While AG metabolic acidosis is present, there is a concurrent primary respiratory alkalosis (pH is alkalemic despite low HCO₃⁻).","Incorrect: pCO₂ is low, indicating hyperventilation, not respiratory acidosis.","Correct: Salicylates cause both central respiratory stimulation (respiratory alkalosis) and metabolic acid production (AG metabolic acidosis).","Incorrect: The anion gap is elevated (24), not normal; this is not a non-anion gap acidosis.","Incorrect: Metabolic alkalosis does not occur in salicylate poisoning."],
      highYieldPoint: "Salicylate toxicity: mixed respiratory alkalosis + anion gap metabolic acidosis (unique dual pattern)."
    },
    {
      vignette: "A 40-year-old man with HIV is started on tenofovir. After 8 months, he develops polyuria, glycosuria (normal serum glucose), aminoaciduria, and phosphaturia. Labs show pH 7.32, HCO₃⁻ 16 mEq/L, K⁺ 3.0 mEq/L.",
      question: "Which renal syndrome best explains this patient's constellation of findings?",
      options: ["Nephrotic syndrome","Nephritic syndrome","Fanconi syndrome","Liddle syndrome","Gitelman syndrome"],
      correctIndex: 2,
      explanation: "Fanconi syndrome involves generalized dysfunction of the proximal convoluted tubule, leading to impaired reabsorption of glucose, amino acids, phosphate, uric acid, and bicarbonate. Tenofovir is a known cause of acquired Fanconi syndrome. The type 2 (proximal) RTA component produces non-anion gap metabolic acidosis with hypokalemia.",
      optionExplanations: ["Incorrect: Nephrotic syndrome causes proteinuria > 3.5 g/day, edema, and hyperlipidemia — not tubular dysfunction.","Incorrect: Nephritic syndrome presents with hematuria, RBC casts, and hypertension from glomerular inflammation.","Correct: Fanconi syndrome — proximal tubular dysfunction causing glycosuria, aminoaciduria, phosphaturia, and type 2 RTA.","Incorrect: Liddle syndrome is a genetic disorder causing hyperactive ENaC channels with hypertension and hypokalemia.","Incorrect: Gitelman syndrome mimics thiazide use with hypocalciuria and hypomagnesemia, not generalized PCT dysfunction."],
      highYieldPoint: "Fanconi syndrome: generalized PCT dysfunction → glycosuria, aminoaciduria, phosphaturia, type 2 RTA. Causes: tenofovir, multiple myeloma, Wilson disease."
    }
  ],

  "Glomerular disease": [
    {
      vignette: "A 5-year-old boy presents with periorbital edema and frothy urine two weeks after an upper respiratory infection. Labs show serum albumin 1.5 g/dL, cholesterol 380 mg/dL, and 24-hour urine protein of 5.2 g. Serum complement levels are normal. Renal biopsy shows no changes on light microscopy and effacement of podocyte foot processes on electron microscopy.",
      question: "What is the most likely diagnosis?",
      options: ["Minimal change disease","Focal segmental glomerulosclerosis","Membranous nephropathy","IgA nephropathy","Membranoproliferative glomerulonephritis"],
      correctIndex: 0,
      explanation: "Minimal change disease is the most common cause of nephrotic syndrome in children. It shows no changes on light microscopy, negative immunofluorescence, and diffuse podocyte foot process effacement on electron microscopy. Complement levels are normal. It typically responds well to corticosteroids.",
      optionExplanations: ["Correct: MCD — normal LM, foot process effacement on EM, nephrotic syndrome in a child, normal complement.","Incorrect: FSGS shows segmental sclerosis on LM and is more common in adolescents/adults, African Americans, and HIV patients.","Incorrect: Membranous nephropathy shows thickened capillary walls with subepithelial deposits ('spike and dome') and is the most common cause of nephrotic syndrome in white adults.","Incorrect: IgA nephropathy causes nephritic syndrome (hematuria) with mesangial IgA deposits, not nephrotic syndrome.","Incorrect: MPGN shows 'tram-track' splitting of the basement membrane and often low complement levels."],
      highYieldPoint: "Minimal change disease: #1 nephrotic syndrome in children; normal LM, foot process effacement on EM; responds to steroids."
    },
    {
      vignette: "A 50-year-old woman with a 2-year history of hepatitis B presents with lower extremity edema and proteinuria of 6 g/day. Renal biopsy shows diffuse thickening of the glomerular basement membrane on light microscopy. Electron microscopy reveals subepithelial electron-dense deposits with intervening GBM spikes.",
      question: "What is the most likely diagnosis?",
      options: ["Minimal change disease","Diabetic nephropathy","Lupus nephritis class V","Post-streptococcal glomerulonephritis","Membranous nephropathy"],
      correctIndex: 4,
      explanation: "Membranous nephropathy is the most common cause of nephrotic syndrome in white adults. Light microscopy shows diffuse GBM thickening, and electron microscopy reveals subepithelial deposits with 'spike and dome' pattern. It is associated with hepatitis B, solid tumors, SLE, and drugs (gold, penicillamine). Primary cases are linked to anti-PLA2R antibodies.",
      optionExplanations: ["Incorrect: MCD shows no LM changes; GBM thickening with subepithelial deposits rules it out.","Incorrect: Diabetic nephropathy shows nodular glomerulosclerosis (Kimmelstiel-Wilson nodules), not subepithelial deposits.","Incorrect: Lupus nephritis class V (membranous) can mimic idiopathic membranous but would have positive ANA, anti-dsDNA, and low complement.","Incorrect: PSGN shows subepithelial 'humps' but with mesangial/endocapillary proliferation (nephritic pattern), and is associated with GAS, not HBV.","Correct: Membranous nephropathy — GBM thickening, subepithelial deposits, spike and dome pattern, associated with HBV."],
      highYieldPoint: "Membranous nephropathy: subepithelial deposits, 'spike and dome' on EM, anti-PLA2R antibodies; #1 adult nephrotic syndrome."
    },
    {
      vignette: "A 7-year-old boy develops periorbital edema, dark urine, and hypertension 10 days after recovering from pharyngitis. Labs show serum C3 is low, ASO titer is elevated, BUN 32 mg/dL, creatinine 1.8 mg/dL. Urinalysis shows RBC casts and 2+ protein.",
      question: "What is the expected electron microscopy finding in this patient's renal biopsy?",
      options: ["Subepithelial electron-dense deposits ('humps')","Subendothelial electron-dense deposits","Mesangial electron-dense deposits only","No electron-dense deposits, only foot process effacement","Fibrillary deposits in a Congo red-positive pattern"],
      correctIndex: 0,
      explanation: "Post-streptococcal glomerulonephritis presents as a nephritic syndrome following GAS pharyngitis or skin infection. EM characteristically shows subepithelial dome-shaped deposits ('humps'). LM shows diffuse proliferative GN, and IF shows a 'starry sky' pattern of granular IgG and C3 deposits. C3 is consumed (low), and ASO titer is elevated.",
      optionExplanations: ["Correct: Subepithelial humps are the hallmark EM finding of PSGN.","Incorrect: Subendothelial deposits are characteristic of lupus nephritis (class III/IV) and MPGN type I.","Incorrect: Mesangial deposits alone are seen in IgA nephropathy and early lupus nephritis (class II).","Incorrect: Isolated foot process effacement without deposits characterizes minimal change disease.","Incorrect: Fibrillary Congo red-positive deposits suggest amyloidosis, not PSGN."],
      highYieldPoint: "PSGN: subepithelial humps on EM, low C3, elevated ASO; nephritic syndrome 1-3 weeks after GAS infection."
    },
    {
      vignette: "A 22-year-old man presents with episodic gross hematuria that coincides with upper respiratory infections. Between episodes, he has persistent microscopic hematuria. Serum complement levels are normal. Renal biopsy immunofluorescence shows mesangial IgA deposits.",
      question: "What is the most common glomerulonephritis worldwide?",
      options: ["Post-streptococcal glomerulonephritis","Goodpasture syndrome","Membranoproliferative glomerulonephritis","IgA nephropathy (Berger disease)","Anti-GBM disease"],
      correctIndex: 3,
      explanation: "IgA nephropathy (Berger disease) is the most common glomerulonephritis worldwide. It presents with episodic gross hematuria occurring concurrently with (not weeks after) upper respiratory infections. Pathology shows mesangial IgA deposits on immunofluorescence and mesangial proliferation on LM. Complement levels are normal.",
      optionExplanations: ["Incorrect: PSGN is common but occurs weeks after infection; hematuria is not concurrent with URIs.","Incorrect: Goodpasture syndrome is rare and involves anti-GBM antibodies with linear IF staining.","Incorrect: MPGN is relatively rare and presents with low complement and tram-track GBM changes.","Correct: IgA nephropathy is the most common GN worldwide — synpharyngitic hematuria, mesangial IgA deposits, normal complement.","Incorrect: Anti-GBM disease (same as Goodpasture) is uncommon and shows linear IgG deposits on GBM."],
      highYieldPoint: "IgA nephropathy: most common GN worldwide; synpharyngitic hematuria, mesangial IgA, normal complement."
    },
    {
      vignette: "A 25-year-old man presents with hemoptysis and rapidly progressive renal failure. Labs show BUN 58 mg/dL, creatinine 5.2 mg/dL, and urinalysis shows RBC casts. Chest X-ray reveals bilateral pulmonary infiltrates. Serum anti-GBM antibodies are positive. Renal biopsy IF shows linear IgG staining along the glomerular basement membrane.",
      question: "What is the target antigen of the pathogenic antibodies in this condition?",
      options: ["Type IV collagen α3 chain (in GBM and alveolar BM)","Phospholipase A2 receptor on podocytes","IgA in the mesangium","Myeloperoxidase (MPO) in neutrophils","Double-stranded DNA in the nucleus"],
      correctIndex: 0,
      explanation: "Goodpasture syndrome (anti-GBM disease) is caused by antibodies against the non-collagenous (NC1) domain of the α3 chain of type IV collagen, which is found in both the glomerular basement membrane and the alveolar basement membrane. This explains the pulmonary-renal syndrome with hemoptysis and rapidly progressive glomerulonephritis.",
      optionExplanations: ["Correct: Anti-GBM antibodies target the α3 chain of type IV collagen in glomerular and alveolar basement membranes.","Incorrect: PLA2R is the target antigen in primary membranous nephropathy.","Incorrect: IgA deposits characterize IgA nephropathy, not anti-GBM disease.","Incorrect: Anti-MPO (p-ANCA) antibodies are associated with microscopic polyangiitis and eosinophilic granulomatosis with polyangiitis.","Incorrect: Anti-dsDNA antibodies are characteristic of systemic lupus erythematosus."],
      highYieldPoint: "Goodpasture syndrome: anti-GBM antibodies against α3 type IV collagen → linear IF, pulmonary-renal syndrome."
    },
    {
      vignette: "A 35-year-old woman with SLE presents with fatigue, facial rash, and peripheral edema. Labs show proteinuria of 4.8 g/day, serum creatinine 2.1 mg/dL, low C3 and C4, positive anti-dsDNA antibodies. Renal biopsy shows diffuse proliferative changes on LM with subendothelial deposits on EM and a 'wire loop' appearance.",
      question: "What class of lupus nephritis does this biopsy represent?",
      options: ["Class I — Minimal mesangial","Class II — Mesangial proliferative","Class III — Focal proliferative","Class IV — Diffuse proliferative","Class V — Membranous"],
      correctIndex: 3,
      explanation: "Class IV (diffuse proliferative) lupus nephritis is the most common and most severe form. It involves >50% of glomeruli with diffuse endocapillary proliferation, subendothelial immune complex deposits ('wire loop' lesions on LM), and often presents with nephrotic-range proteinuria, hematuria, hypertension, and renal insufficiency. Low complement and elevated anti-dsDNA are typical.",
      optionExplanations: ["Incorrect: Class I shows minimal mesangial deposits without clinical renal disease.","Incorrect: Class II has mesangial proliferation only with mild symptoms.","Incorrect: Class III affects < 50% of glomeruli; this biopsy shows diffuse involvement.","Correct: Class IV — diffuse proliferative with wire loop lesions, subendothelial deposits, and severe clinical nephritis.","Incorrect: Class V has membranous features with subepithelial deposits and primarily nephrotic-range proteinuria without the proliferative pattern."],
      highYieldPoint: "Lupus nephritis class IV: most common/severe; diffuse proliferative, subendothelial deposits, wire loops, low complement."
    },
    {
      vignette: "A 30-year-old African American man with HIV (CD4 count 85 cells/μL) presents with nephrotic-range proteinuria and rapidly declining renal function. Renal biopsy shows collapsing variant of focal segmental glomerulosclerosis. Kidney ultrasound reveals bilaterally enlarged, echogenic kidneys.",
      question: "Which feature most distinguishes HIV-associated nephropathy (HIVAN) from other causes of focal segmental glomerulosclerosis?",
      options: ["Presence of subepithelial immune deposits","Linear IgG staining along the GBM","Mesangial IgA deposition","Collapsing glomerulopathy with enlarged kidneys","Tram-track appearance of the basement membrane"],
      correctIndex: 3,
      explanation: "HIV-associated nephropathy (HIVAN) is characterized by the collapsing variant of FSGS with severely affected podocytes. Unlike other causes of nephrotic syndrome where kidneys are normal or small, HIVAN characteristically produces bilaterally enlarged, echogenic kidneys. It predominantly affects African Americans with advanced HIV and can progress rapidly to ESRD.",
      optionExplanations: ["Incorrect: Subepithelial deposits are seen in membranous nephropathy and PSGN, not HIVAN.","Incorrect: Linear IgG on GBM is the hallmark of anti-GBM (Goodpasture) disease.","Incorrect: Mesangial IgA is characteristic of IgA nephropathy.","Correct: Collapsing FSGS with bilaterally enlarged kidneys is the hallmark of HIVAN, distinguishing it from typical FSGS.","Incorrect: Tram-track GBM is seen in membranoproliferative glomerulonephritis."],
      highYieldPoint: "HIVAN: collapsing FSGS + enlarged echogenic kidneys in African Americans with low CD4; treat with ART."
    },
    {
      vignette: "A 60-year-old man with chronic hepatitis C presents with palpable purpura on the lower extremities, arthralgias, and renal insufficiency. Labs show cryoglobulins in the serum, low C3, and rheumatoid factor positivity. Renal biopsy shows a membranoproliferative pattern with subendothelial deposits and 'tram-track' double contours of the GBM.",
      question: "What is the underlying pathological mechanism of this patient's glomerulonephritis?",
      options: ["Anti-GBM antibody deposition","IgA immune complex deposition in the mesangium","Complement alternative pathway dysregulation","Anti-neutrophil cytoplasmic antibody-mediated vasculitis","Cryoglobulin-containing immune complex deposition"],
      correctIndex: 4,
      explanation: "Hepatitis C is associated with type II mixed cryoglobulinemia, where IgM-IgG immune complexes deposit in vessel walls and glomeruli. This causes a membranoproliferative glomerulonephritis (MPGN) pattern with subendothelial deposits, tram-track GBM splitting, hypocomplementemia, and systemic vasculitis (palpable purpura, arthralgias).",
      optionExplanations: ["Incorrect: Anti-GBM antibodies cause linear IF staining (Goodpasture), not MPGN.","Incorrect: Mesangial IgA deposition causes IgA nephropathy, not MPGN with tram-tracks.","Incorrect: Alternative pathway dysregulation causes C3 glomerulopathy (dense deposit disease/C3GN), not cryoglobulinemic MPGN.","Incorrect: ANCA-mediated vasculitis causes pauci-immune glomerulonephritis without significant immune complex deposits.","Correct: HCV-associated cryoglobulinemia → immune complex MPGN with subendothelial deposits and tram-track GBM."],
      highYieldPoint: "HCV → mixed cryoglobulinemia → MPGN (tram-track GBM, low C3, purpura, arthralgias)."
    },
    {
      vignette: "A 4-year-old girl develops edema, hypertension, and cola-colored urine two weeks after an episode of impetigo. Serum C3 is markedly reduced; C4 is normal. Urinalysis shows dysmorphic RBCs and RBC casts.",
      question: "Which complement pathway is primarily activated in this patient's condition?",
      options: ["Classical pathway only","Lectin pathway only","Alternative complement pathway","Terminal complement pathway (C5-C9) only","No complement pathway is involved"],
      correctIndex: 2,
      explanation: "Post-streptococcal glomerulonephritis activates the alternative complement pathway, which is reflected by low C3 with normal C4. The classical pathway (which uses C1, C2, C4) is not primarily involved, so C4 remains normal. Low C3 with normal C4 is a key lab finding that distinguishes PSGN from lupus nephritis (which has low C3 AND C4).",
      optionExplanations: ["Incorrect: Classical pathway activation would consume C4 as well; C4 is normal here.","Incorrect: Lectin pathway activation would also consume C4 through shared downstream components.","Correct: PSGN activates the alternative pathway → low C3, normal C4.","Incorrect: Terminal pathway activation alone would not reduce C3 levels.","Incorrect: Complement is clearly involved, as evidenced by the low C3."],
      highYieldPoint: "PSGN: ↓ C3, normal C4 (alternative pathway). Lupus nephritis: ↓ C3 AND ↓ C4 (classical pathway)."
    },
    {
      vignette: "A 45-year-old man with a history of IV drug use presents with fever, new-onset heart murmur, and hematuria. Blood cultures grow Staphylococcus aureus. Renal biopsy shows focal necrotizing glomerulonephritis with crescent formation.",
      question: "What is the mechanism of crescent formation in this patient's glomeruli?",
      options: ["Podocyte hypertrophy and fusion","Proliferation of parietal epithelial cells and macrophages in Bowman space","Deposition of amyloid fibrils in the glomerulus","Mesangial matrix expansion with nodule formation","Intimal fibrosis of the afferent arteriole"],
      correctIndex: 1,
      explanation: "Crescents form when severe glomerular injury (here from septic emboli/immune complex deposition in infective endocarditis) causes rupture of the glomerular capillary wall, allowing fibrin and inflammatory cells to leak into Bowman space. This stimulates proliferation of parietal epithelial cells and infiltrating macrophages/monocytes, forming cellular crescents that compress the glomerular tuft.",
      optionExplanations: ["Incorrect: Podocyte changes (foot process effacement) are seen in nephrotic syndrome, not crescent formation.","Correct: Crescents = parietal epithelial cell and macrophage proliferation in Bowman space, compressing the glomerular tuft.","Incorrect: Amyloid deposition causes nodular accumulation with apple-green birefringence under polarized light.","Incorrect: Mesangial matrix expansion with nodules (Kimmelstiel-Wilson) is characteristic of diabetic nephropathy.","Incorrect: Intimal fibrosis of the afferent arteriole is seen in hypertensive nephrosclerosis."],
      highYieldPoint: "Crescents = proliferation of parietal epithelial cells + macrophages in Bowman space; indicates rapidly progressive GN."
    },
    {
      vignette: "A 65-year-old man with long-standing type 2 diabetes presents with gradually worsening proteinuria over the past 3 years. Current 24-hour urine protein is 4.5 g. Renal biopsy shows nodular mesangial expansion (Kimmelstiel-Wilson nodules) and diffuse thickening of the GBM.",
      question: "What is the earliest histological change in diabetic nephropathy?",
      options: ["Kimmelstiel-Wilson nodular glomerulosclerosis","Thickening of the glomerular basement membrane","Crescent formation in Bowman space","Global glomerulosclerosis with hyaline arteriolosclerosis","Tubular atrophy with interstitial fibrosis"],
      correctIndex: 1,
      explanation: "The earliest histological change in diabetic nephropathy is thickening of the glomerular basement membrane, which can be detected on electron microscopy before any light microscopic changes appear. This is followed by mesangial matrix expansion, and eventually the pathognomonic Kimmelstiel-Wilson nodules develop in advanced disease.",
      optionExplanations: ["Incorrect: Kimmelstiel-Wilson nodules are a late, pathognomonic finding of advanced diabetic nephropathy, not the earliest change.","Correct: GBM thickening is the earliest detectable change in diabetic nephropathy, visible on EM before clinical symptoms.","Incorrect: Crescents indicate rapidly progressive GN, not typical diabetic nephropathy.","Incorrect: Global sclerosis and hyaline arteriolosclerosis are end-stage changes.","Incorrect: Tubular atrophy and interstitial fibrosis represent advanced chronic kidney disease from any cause."],
      highYieldPoint: "Diabetic nephropathy progression: GBM thickening → mesangial expansion → Kimmelstiel-Wilson nodules → global sclerosis."
    },
    {
      vignette: "A 55-year-old man with chronic kidney disease presents with fatigue and edema. Renal biopsy is performed and Congo red staining shows apple-green birefringence under polarized light. Electron microscopy reveals randomly arranged fibrils (8-12 nm diameter) in the mesangium and along capillary walls.",
      question: "What is the most likely composition of these deposits?",
      options: ["IgA immune complexes","Type IV collagen fragments","Amyloid light chain (AL) protein","Complement C3 deposits","Cryoglobulin aggregates"],
      correctIndex: 2,
      explanation: "Congo red positivity with apple-green birefringence under polarized light is pathognomonic for amyloidosis. The randomly arranged 8-12 nm fibrils on EM confirm amyloid deposition. In the setting of renal amyloidosis, AL amyloidosis (from immunoglobulin light chains, often in multiple myeloma or plasma cell dyscrasias) is the most common type causing renal involvement.",
      optionExplanations: ["Incorrect: IgA complexes in IgA nephropathy are detected by immunofluorescence, not Congo red staining.","Incorrect: Type IV collagen is a component of normal GBM, not amyloid fibrils.","Correct: AL amyloidosis — light chain-derived amyloid fibrils with Congo red positivity and apple-green birefringence.","Incorrect: C3 deposits characterize C3 glomerulopathy and do not show Congo red birefringence.","Incorrect: Cryoglobulins cause MPGN but are not Congo red positive."],
      highYieldPoint: "Amyloidosis: Congo red → apple-green birefringence; 8-12 nm fibrils on EM. AL (most common renal) vs AA."
    },
    {
      vignette: "A 40-year-old woman with granulomatosis with polyangiitis (GPA) presents with hemoptysis, sinusitis, and rapidly progressive renal failure. Serum c-ANCA (anti-PR3) is strongly positive. Renal biopsy shows crescentic glomerulonephritis with scant immune deposits on immunofluorescence.",
      question: "Which term best describes the immunofluorescence pattern in ANCA-associated glomerulonephritis?",
      options: ["Granular pattern","Linear pattern","Pauci-immune pattern","Full house pattern","Starry sky pattern"],
      correctIndex: 2,
      explanation: "ANCA-associated glomerulonephritis (seen in GPA, microscopic polyangiitis, and EGPA) is characterized by a pauci-immune pattern on immunofluorescence, meaning there are few or no immunoglobulin or complement deposits despite severe crescentic inflammation. The damage is mediated by ANCA-activated neutrophils rather than immune complex deposition.",
      optionExplanations: ["Incorrect: Granular IF pattern is seen in immune complex-mediated GN (PSGN, membranous, IgA nephropathy).","Incorrect: Linear IF pattern is characteristic of anti-GBM disease (Goodpasture syndrome).","Correct: Pauci-immune = scant/absent immune deposits; hallmark of ANCA-associated vasculitis/GN.","Incorrect: 'Full house' IF (IgG, IgA, IgM, C3, C1q) is characteristic of lupus nephritis.","Incorrect: Starry sky IF describes the granular pattern of PSGN."],
      highYieldPoint: "ANCA-associated GN: pauci-immune crescentic GN; c-ANCA/PR3 = GPA; p-ANCA/MPO = MPA."
    },
    {
      vignette: "A 10-year-old boy presents with abdominal pain, palpable purpura on the buttocks and lower extremities, arthralgias, and hematuria. Urinalysis shows RBCs and mild proteinuria. Serum complement levels are normal. Renal biopsy immunofluorescence reveals mesangial IgA deposits.",
      question: "What is the most likely diagnosis?",
      options: ["IgA nephropathy (Berger disease)","IgA vasculitis (Henoch-Schönlein purpura)","Post-streptococcal glomerulonephritis","Lupus nephritis","Thrombotic thrombocytopenic purpura"],
      correctIndex: 1,
      explanation: "IgA vasculitis (Henoch-Schönlein purpura) is a systemic small-vessel vasculitis with IgA-dominant immune deposits. The classic tetrad includes palpable purpura, arthritis/arthralgias, abdominal pain (GI vasculitis), and renal involvement (identical to IgA nephropathy histologically). It is the most common vasculitis in children and is distinguished from IgA nephropathy by the systemic symptoms.",
      optionExplanations: ["Incorrect: IgA nephropathy has identical renal pathology but presents as isolated renal disease without systemic vasculitis (purpura, arthritis, abdominal pain).","Correct: HSP/IgA vasculitis — palpable purpura, arthralgias, abdominal pain, and renal disease with mesangial IgA in a child.","Incorrect: PSGN would show low C3, elevated ASO, and occurs weeks after streptococcal infection.","Incorrect: Lupus nephritis shows low complement and 'full house' IF, not isolated IgA.","Incorrect: TTP presents with thrombocytopenia, microangiopathic hemolytic anemia, and neurologic symptoms — not purpura with mesangial IgA."],
      highYieldPoint: "IgA vasculitis (HSP): palpable purpura + arthralgias + abdominal pain + IgA nephropathy; most common childhood vasculitis."
    },
    {
      vignette: "A 48-year-old man with a history of chronic hepatitis B and membranous nephropathy is evaluated for worsening proteinuria despite antiviral therapy. His nephrologist discusses the risk of progression to end-stage renal disease. Renal biopsy shows diffuse GBM thickening with advanced subepithelial deposits and extensive foot process effacement.",
      question: "Which complication of nephrotic syndrome is this patient at greatest risk for due to loss of antithrombin III in the urine?",
      options: ["Pulmonary embolism","Disseminated intravascular coagulation","Hemorrhagic stroke","Immune thrombocytopenic purpura","Renal vein thrombosis"],
      correctIndex: 4,
      explanation: "Nephrotic syndrome causes a hypercoagulable state due to urinary loss of antithrombin III, protein C, and protein S. Renal vein thrombosis is a particularly characteristic complication of membranous nephropathy. Loss of antithrombin III is the key anticoagulant protein lost, as it normally inhibits thrombin and factors Xa, IXa, and XIa.",
      optionExplanations: ["Incorrect: PE can occur in nephrotic syndrome but renal vein thrombosis is the most characteristic venous thrombotic complication, especially with membranous nephropathy.","Incorrect: DIC involves consumption of clotting factors and is associated with sepsis, trauma, and malignancy, not nephrotic syndrome.","Incorrect: Hemorrhagic stroke involves bleeding, not thrombosis; nephrotic syndrome causes a prothrombotic state.","Incorrect: ITP is an autoimmune platelet destruction disorder unrelated to nephrotic syndrome.","Correct: Renal vein thrombosis is the classic thrombotic complication of membranous nephropathy due to urinary antithrombin III loss."],
      highYieldPoint: "Nephrotic syndrome → hypercoagulable state (loss of AT III, protein C/S); membranous nephropathy has highest risk of renal vein thrombosis."
    }
  ],

  "Tubulointerstitial disease": [
    {
      vignette: "A 32-year-old woman develops fever, maculopapular rash, and eosinophilia 10 days after starting ampicillin for a urinary tract infection. Labs show BUN 35 mg/dL, creatinine 2.8 mg/dL. Urinalysis reveals WBC casts, eosinophiluria, and mild proteinuria (< 1 g/day).",
      question: "What is the most likely diagnosis?",
      options: ["Acute interstitial nephritis (drug-induced)","Acute pyelonephritis","Acute tubular necrosis","Rapidly progressive glomerulonephritis","Renal papillary necrosis"],
      correctIndex: 0,
      explanation: "The classic triad of fever, rash, and eosinophilia developing after starting a new medication (commonly penicillins, cephalosporins, NSAIDs, sulfonamides, PPIs) strongly suggests acute allergic interstitial nephritis (AIN). WBC casts and eosinophiluria further support the diagnosis. This is a type IV hypersensitivity reaction against tubular antigens.",
      optionExplanations: ["Correct: Drug-induced AIN — fever, rash, eosinophilia, eosinophiluria, WBC casts after starting a new drug.","Incorrect: Pyelonephritis presents with flank pain, fever, and WBCs/bacteria in urine but not typically rash, eosinophilia, or eosinophiluria.","Incorrect: ATN shows muddy brown granular casts, not WBC casts and eosinophiluria, and lacks the allergic triad.","Incorrect: RPGN presents with RBC casts and rapidly progressive renal failure from glomerular crescents.","Incorrect: Papillary necrosis presents with hematuria and flank pain; causes include analgesic abuse, sickle cell disease, and diabetes."],
      highYieldPoint: "Acute interstitial nephritis: fever + rash + eosinophilia after drug exposure; WBC casts, eosinophiluria."
    },
    {
      vignette: "A 70-year-old man undergoes coronary artery bypass grafting. On postoperative day 2, his urine output drops to 10 mL/hr. Labs show BUN 48 mg/dL, creatinine 4.2 mg/dL (baseline 1.0), fractional excretion of sodium (FENa) 4.2%. Urinalysis reveals muddy brown granular casts.",
      question: "What is the most likely cause of this patient's acute kidney injury?",
      options: ["Acute tubular necrosis from ischemic injury","Prerenal azotemia from hypovolemia","Acute interstitial nephritis from anesthetics","Postrenal obstruction from urethral stricture","Cholesterol crystal embolization"],
      correctIndex: 0,
      explanation: "Ischemic acute tubular necrosis (ATN) is the most common cause of intrinsic renal AKI in hospitalized patients, particularly after major surgery with hemodynamic instability. Muddy brown granular casts are pathognomonic for ATN. FENa > 2% indicates intrinsic renal damage with impaired tubular sodium reabsorption.",
      optionExplanations: ["Correct: Ischemic ATN — muddy brown casts, FENa > 2%, post-surgical setting with hemodynamic compromise.","Incorrect: Prerenal azotemia would show FENa < 1% with concentrated urine and no casts (intact tubular function).","Incorrect: AIN would present with fever, rash, eosinophilia, and WBC casts, not muddy brown casts.","Incorrect: Postrenal obstruction would show hydronephrosis on imaging; casts are not typical.","Incorrect: Cholesterol crystal embolization typically occurs days to weeks post-procedure with livedo reticularis, blue toes, and eosinophilia."],
      highYieldPoint: "ATN: muddy brown granular casts, FENa > 2%, BUN/Cr ratio < 20. Prerenal: FENa < 1%, BUN/Cr > 20."
    },
    {
      vignette: "A 55-year-old woman with diabetes mellitus and recurrent urinary tract infections presents with acute flank pain, fever, and gross hematuria. CT scan without contrast shows a ring-shaped calcification surrounding the renal papilla on the right side. She passes tissue fragments in her urine.",
      question: "What is the most likely diagnosis?",
      options: ["Renal cell carcinoma","Acute pyelonephritis","Polycystic kidney disease","Renal papillary necrosis","Medullary sponge kidney"],
      correctIndex: 3,
      explanation: "Renal papillary necrosis involves ischemic necrosis of the renal papillae with sloughing of necrotic tissue into the renal pelvis. This patient has multiple risk factors (diabetes, chronic UTIs). The 'ring sign' on CT (calcification around the papilla) and tissue fragments in urine are characteristic. Causes are remembered by the mnemonic NSAIDS: NSAIDs, Sickle cell disease, Analgesic nephropathy, Infection (pyelonephritis), Diabetes, Systemic vasculitis.",
      optionExplanations: ["Incorrect: RCC presents with a renal mass, not papillary calcification and tissue sloughing.","Incorrect: Acute pyelonephritis causes fever and flank pain but not papillary calcification or tissue passage.","Incorrect: PKD presents with bilateral enlarged kidneys with multiple cysts, not papillary necrosis.","Correct: Papillary necrosis — ring sign on CT, tissue fragments in urine, in a patient with diabetes and recurrent UTIs.","Incorrect: Medullary sponge kidney causes medullary cysts and nephrocalcinosis but not acute papillary sloughing."],
      highYieldPoint: "Renal papillary necrosis: sloughed papillae in urine. Causes (NSAIDS): NSAIDs, Sickle cell, Analgesics, Infection, Diabetes, Systemic vasculitis."
    },
    {
      vignette: "A 65-year-old man with chronic low back pain has been taking ibuprofen daily for 8 years. He presents with chronic kidney disease (creatinine 3.5 mg/dL). Renal biopsy shows chronic tubulointerstitial nephritis with cortical scarring and medullary calcifications.",
      question: "What is the primary mechanism of NSAID-induced chronic tubulointerstitial nephritis?",
      options: ["Direct tubular toxicity from drug crystallization","Type I IgE-mediated hypersensitivity","Osmotic nephropathy from drug accumulation","Immune complex deposition in the interstitium","Chronic medullary ischemia from prostaglandin synthesis inhibition"],
      correctIndex: 4,
      explanation: "Chronic NSAID use inhibits prostaglandin synthesis in the renal medulla. Prostaglandins (PGE2, PGI2) normally maintain medullary blood flow by vasodilating the vasa recta. Their inhibition leads to chronic medullary ischemia, papillary necrosis, and progressive tubulointerstitial fibrosis with cortical scarring.",
      optionExplanations: ["Incorrect: NSAIDs do not cause nephrotoxicity through crystallization (unlike acyclovir or methotrexate).","Incorrect: IgE-mediated reactions are acute (anaphylaxis), not chronic tubulointerstitial disease.","Incorrect: Osmotic nephropathy is associated with IV immunoglobulin or mannitol, not NSAIDs.","Incorrect: Immune complex deposition causes glomerulonephritis, not the tubulointerstitial pattern seen here.","Correct: NSAIDs block prostaglandin-mediated vasodilation of vasa recta → chronic medullary ischemia → papillary necrosis → CKD."],
      highYieldPoint: "Analgesic nephropathy: chronic NSAID/acetaminophen use → prostaglandin inhibition → medullary ischemia → papillary necrosis."
    },
    {
      vignette: "A 28-year-old woman is admitted with severe sepsis from pneumonia. Despite fluid resuscitation, she requires vasopressors. On day 3, her creatinine rises from 0.9 to 3.8 mg/dL. Renal biopsy shows patchy necrosis of the proximal tubular epithelium with intact basement membrane.",
      question: "Which feature of ATN pathology best predicts the potential for renal recovery?",
      options: ["Severity of tubular cell necrosis","Number of inflammatory cells in the interstitium","Degree of interstitial edema","Preservation of the tubular basement membrane","Extent of cast formation in the lumen"],
      correctIndex: 3,
      explanation: "In ATN, the tubular basement membrane (TBM) typically remains intact despite severe tubular epithelial cell necrosis. This preserved scaffold allows surviving tubular cells to proliferate and migrate along the intact BM to regenerate the tubular epithelium. If the BM is disrupted, regeneration is impaired and fibrosis is more likely.",
      optionExplanations: ["Incorrect: While severity of necrosis matters, recovery depends more on the structural framework being available for regeneration.","Incorrect: Inflammatory cells contribute to injury but do not determine regenerative potential as directly as BM integrity.","Incorrect: Interstitial edema is common in many renal insults and is not the key determinant of recovery.","Correct: An intact tubular basement membrane serves as a scaffold for epithelial regeneration, enabling recovery from ATN.","Incorrect: Cast formation correlates with severity but does not directly predict the ability of tubular cells to regenerate."],
      highYieldPoint: "ATN recovery depends on intact tubular basement membrane serving as scaffold for tubular cell regeneration."
    },
    {
      vignette: "A 12-year-old boy with sickle cell disease presents with painless gross hematuria. Imaging shows a normal-appearing kidney with no stones or masses. His hematuria resolves spontaneously within 3 days.",
      question: "Which part of the kidney is most susceptible to ischemic injury in sickle cell disease?",
      options: ["Glomerulus","Proximal convoluted tubule","Cortical collecting duct","Renal medulla (vasa recta)","Juxtaglomerular apparatus"],
      correctIndex: 3,
      explanation: "The renal medulla is uniquely vulnerable to sickling because the vasa recta create a hypoxic, hypertonic, and acidotic environment — all conditions that promote HbS polymerization and sickling. This leads to microinfarctions, hematuria, papillary necrosis, and loss of concentrating ability (hyposthenuria) early in sickle cell disease.",
      optionExplanations: ["Incorrect: The glomerulus has adequate oxygenation and is not the primary site of sickling injury.","Incorrect: The PCT is located in the well-oxygenated cortex and is less susceptible to sickling.","Incorrect: The cortical collecting duct is in the cortex with sufficient oxygen tension.","Correct: The renal medulla (vasa recta) is hypoxic, hypertonic, and acidotic — ideal conditions for sickling → papillary necrosis and hematuria.","Incorrect: The JGA is in the cortex and is not a primary target of sickle cell damage."],
      highYieldPoint: "Sickle cell renal complications: medullary ischemia (vasa recta) → hyposthenuria, papillary necrosis, hematuria."
    },
    {
      vignette: "A 45-year-old man undergoing chemotherapy for lymphoma develops tumor lysis syndrome. Labs show uric acid 14 mg/dL, potassium 6.8 mEq/L, phosphorus 8.5 mg/dL, calcium 6.2 mg/dL, and creatinine 4.5 mg/dL. Urinalysis shows needle-shaped crystals.",
      question: "What is the mechanism of acute kidney injury in uric acid nephropathy?",
      options: ["Immune complex deposition in the glomerulus","Allergic interstitial nephritis","Direct podocyte toxicity","Afferent arteriolar vasoconstriction","Intratubular crystal precipitation and obstruction"],
      correctIndex: 4,
      explanation: "In tumor lysis syndrome, massive cell death releases purines that are metabolized to uric acid. When uric acid levels exceed solubility (particularly in acidic urine), uric acid crystals precipitate within the tubular lumen, causing intratubular obstruction and direct tubular injury. This is an intrarenal obstructive nephropathy.",
      optionExplanations: ["Incorrect: Uric acid nephropathy is not immune complex-mediated.","Incorrect: AIN involves an allergic reaction to drugs, not crystal deposition.","Incorrect: Podocyte damage causes proteinuria, not the acute obstructive pattern seen in uric acid nephropathy.","Incorrect: Afferent arteriolar constriction causes prerenal AKI, not the crystal nephropathy of TLS.","Correct: Uric acid precipitates as crystals in renal tubules, causing intraluminal obstruction and AKI."],
      highYieldPoint: "Tumor lysis syndrome: uric acid crystallization in tubules → obstructive AKI. Prevent with allopurinol/rasburicase + IV fluids."
    },
    {
      vignette: "A 38-year-old woman with recurrent urinary tract infections undergoes a voiding cystourethrogram that reveals bilateral vesicoureteral reflux (VUR). Her serum creatinine is 2.2 mg/dL. Renal biopsy shows chronic tubulointerstitial inflammation with tubular atrophy and 'thyroidization' of the renal parenchyma.",
      question: "What does 'thyroidization' of the kidney refer to?",
      options: ["Metastatic thyroid carcinoma deposits in the kidney","Tubules filled with eosinophilic proteinaceous casts resembling thyroid follicles","Granulomatous inflammation with Langhans giant cells","Proliferation of thyroid-like epithelium in the renal cortex","Colloid deposits in the glomerular mesangium"],
      correctIndex: 1,
      explanation: "'Thyroidization' is a histological term for end-stage chronic pyelonephritis/reflux nephropathy, where atrophic tubules become dilated and filled with eosinophilic, homogeneous proteinaceous casts. This appearance resembles thyroid follicles filled with colloid. It indicates chronic tubulointerstitial damage from recurrent infections and reflux.",
      optionExplanations: ["Incorrect: Thyroidization has nothing to do with thyroid carcinoma metastasis.","Correct: Thyroidization = dilated atrophic tubules with proteinaceous casts mimicking thyroid follicles — a marker of chronic pyelonephritis.","Incorrect: Granulomatous inflammation with giant cells suggests renal tuberculosis or sarcoidosis.","Incorrect: There is no actual thyroid epithelial proliferation; it is a morphological resemblance.","Incorrect: Colloid deposits in the mesangium are not a recognized pathological entity."],
      highYieldPoint: "Thyroidization of the kidney: dilated tubules with proteinaceous casts (resembling thyroid follicles) = chronic pyelonephritis."
    },
    {
      vignette: "A 50-year-old man with a kidney transplant is maintained on cyclosporine. He presents with gradually rising creatinine over 6 months. Biopsy shows striped interstitial fibrosis and tubular atrophy with arteriolar hyalinosis.",
      question: "What is the most likely cause of this patient's graft dysfunction?",
      options: ["Acute T-cell-mediated rejection","Antibody-mediated rejection","Recurrent glomerulonephritis in the allograft","BK virus nephropathy","Chronic calcineurin inhibitor nephrotoxicity"],
      correctIndex: 4,
      explanation: "Chronic calcineurin inhibitor (CNI) nephrotoxicity from cyclosporine or tacrolimus causes a characteristic pattern of striped cortical fibrosis, tubular atrophy, and arteriolar hyalinosis (often described as 'beaded' hyaline deposits in the arteriolar wall). This is a major cause of late allograft dysfunction and is dose-dependent.",
      optionExplanations: ["Incorrect: Acute T-cell rejection presents with tubulitis and interstitial inflammation, not the chronic fibrotic pattern.","Incorrect: Antibody-mediated rejection shows peritubular capillary C4d staining and microvascular inflammation.","Incorrect: Recurrent GN in the allograft would show glomerular pathology specific to the original disease.","Incorrect: BK virus nephropathy shows tubular viral inclusions ('decoy cells') and positive SV40 immunostaining.","Correct: Chronic CNI toxicity — striped fibrosis, tubular atrophy, arteriolar hyalinosis; a leading cause of late graft loss."],
      highYieldPoint: "Cyclosporine/tacrolimus nephrotoxicity: striped interstitial fibrosis + arteriolar hyalinosis; major cause of chronic graft loss."
    },
    {
      vignette: "A 60-year-old man with recently diagnosed multiple myeloma presents with renal failure. Urine dipstick is negative for protein, but a sulfosalicylic acid (SSA) test is strongly positive. Renal biopsy shows eosinophilic casts surrounded by multinucleated giant cells in the distal tubules and collecting ducts.",
      question: "What is the composition of these tubular casts?",
      options: ["Tamm-Horsfall protein aggregates","Myoglobin precipitates","Bence Jones protein (immunoglobulin light chains)","Hemoglobin casts from intravascular hemolysis","Calcium oxalate crystal casts"],
      correctIndex: 2,
      explanation: "Myeloma cast nephropathy ('myeloma kidney') occurs when excess free light chains (Bence Jones proteins) are filtered by the glomerulus and precipitate in the distal tubules, combining with Tamm-Horsfall protein to form obstructive casts. These casts elicit a giant cell reaction. The urine dipstick (which detects albumin) is negative, but SSA test (which detects all proteins) is positive — a classic discrepancy indicating light chain proteinuria.",
      optionExplanations: ["Incorrect: Tamm-Horsfall protein forms hyaline casts normally but does not cause the characteristic myeloma cast pattern.","Incorrect: Myoglobin precipitates cause rhabdomyolysis-associated AKI with pigmented casts, not giant cell reaction.","Correct: Bence Jones proteins (light chains) precipitate in tubules → obstructive casts with giant cell reaction = myeloma kidney.","Incorrect: Hemoglobin casts are pigmented and associated with intravascular hemolysis, not myeloma.","Incorrect: Calcium oxalate crystals are associated with ethylene glycol poisoning, not multiple myeloma."],
      highYieldPoint: "Myeloma kidney: light chain casts + giant cells in distal tubules; dipstick-negative, SSA-positive proteinuria."
    },
    {
      vignette: "A 3-year-old girl presents with bloody diarrhea followed by oliguria, pallor, and petechiae. Labs show hemoglobin 7 g/dL, platelets 45,000/μL, schistocytes on peripheral smear, BUN 55 mg/dL, creatinine 3.2 mg/dL, LDH 1200 U/L, and haptoglobin < 10 mg/dL. Stool culture grows E. coli O157:H7.",
      question: "What is the primary site of renal vascular injury in this condition?",
      options: ["Afferent arterioles with fibrinoid necrosis","Renal arteries with atherosclerotic plaque","Glomerular capillaries and arterioles with thrombotic microangiopathy","Renal veins with thrombosis","Interlobular arteries with giant cell arteritis"],
      correctIndex: 2,
      explanation: "Hemolytic uremic syndrome (HUS) from Shiga toxin-producing E. coli causes thrombotic microangiopathy primarily affecting the glomerular capillaries and arterioles. Shiga toxin damages endothelial cells, leading to platelet activation, fibrin deposition, and microthrombi formation in the renal microvasculature. This causes mechanical shearing of red blood cells (schistocytes) and consumptive thrombocytopenia.",
      optionExplanations: ["Incorrect: Fibrinoid necrosis of afferent arterioles is seen in malignant hypertension, not typical HUS.","Incorrect: Atherosclerotic plaque in renal arteries causes renovascular hypertension in older adults.","Correct: HUS = thrombotic microangiopathy in glomerular capillaries and arterioles → schistocytes, thrombocytopenia, renal failure.","Incorrect: Renal vein thrombosis is a complication of nephrotic syndrome, not HUS.","Incorrect: Giant cell arteritis affects temporal and large arteries, not renal microvasculature."],
      highYieldPoint: "HUS (Shiga toxin): thrombotic microangiopathy in renal glomeruli/arterioles → triad of MAHA + thrombocytopenia + AKI."
    },
    {
      vignette: "A 56-year-old woman with a history of chronic lithium use for bipolar disorder presents with polyuria (6 L/day) and polydipsia. Serum Na⁺ is 148 mEq/L, urine osmolality is 180 mOsm/kg. After desmopressin administration, urine osmolality remains at 195 mOsm/kg.",
      question: "What is the mechanism by which lithium causes this patient's polyuria?",
      options: ["Inhibition of ADH secretion from the posterior pituitary","Downregulation of aquaporin-2 channels in the collecting duct","Stimulation of the thirst center in the hypothalamus","Direct tubular necrosis in the proximal tubule","Osmotic diuresis from lithium excretion"],
      correctIndex: 1,
      explanation: "Chronic lithium use causes nephrogenic diabetes insipidus by entering principal cells of the collecting duct through ENaC channels and interfering with the ADH signaling cascade. Lithium inhibits adenylyl cyclase and glycogen synthase kinase-3β, preventing aquaporin-2 channel insertion into the apical membrane. The lack of response to desmopressin confirms nephrogenic (not central) diabetes insipidus.",
      optionExplanations: ["Incorrect: Central DI involves impaired ADH secretion; lithium causes nephrogenic DI with normal ADH production.","Correct: Lithium blocks aquaporin-2 expression/insertion in the collecting duct → nephrogenic DI, unresponsive to desmopressin.","Incorrect: Lithium does not primarily cause polydipsia through thirst center stimulation.","Incorrect: Proximal tubular necrosis would cause Fanconi syndrome features, not isolated concentrating defect.","Incorrect: Lithium itself does not cause significant osmotic diuresis."],
      highYieldPoint: "Lithium → nephrogenic DI: blocks AQP2 insertion in collecting duct; does not respond to desmopressin."
    },
    {
      vignette: "A 42-year-old man presents with recurrent calcium phosphate kidney stones. He has a normal serum calcium and a urine pH that is persistently > 6.5. He is diagnosed with incomplete distal renal tubular acidosis (type 1 RTA).",
      question: "Which cell type in the collecting duct is primarily dysfunctional in type 1 RTA?",
      options: ["Principal cells","Alpha-intercalated cells","Beta-intercalated cells","Macula densa cells","Juxtaglomerular granular cells"],
      correctIndex: 1,
      explanation: "Type 1 (distal) RTA results from dysfunction of alpha-intercalated cells in the collecting duct. These cells are responsible for acid secretion via the apical H⁺-ATPase and H⁺/K⁺-ATPase pumps. When dysfunctional, the collecting duct cannot acidify urine below pH 5.5, leading to systemic metabolic acidosis and alkaline urine that promotes calcium phosphate stone formation.",
      optionExplanations: ["Incorrect: Principal cells handle sodium reabsorption (ENaC) and potassium secretion (ROMK) under aldosterone influence.","Correct: Alpha-intercalated cells secrete H⁺ and generate new HCO₃⁻; their dysfunction causes type 1 RTA.","Incorrect: Beta-intercalated cells secrete HCO₃⁻ and are active during alkalosis, not acidosis.","Incorrect: Macula densa cells sense NaCl concentration for tubuloglomerular feedback, not acid secretion.","Incorrect: JG cells produce renin; they are not involved in distal acid secretion."],
      highYieldPoint: "Alpha-intercalated cells: apical H⁺-ATPase for acid secretion; dysfunction → type 1 (distal) RTA."
    },
    {
      vignette: "A 35-year-old woman undergoes an abdominal CT scan with iodinated contrast for evaluation of abdominal pain. Forty-eight hours later, her serum creatinine rises from 0.9 to 2.4 mg/dL. Urinalysis shows muddy brown granular casts.",
      question: "Which preventive strategy has the strongest evidence for reducing contrast-induced nephropathy?",
      options: ["Prophylactic hemodialysis after contrast administration","N-acetylcysteine 600 mg orally twice daily","Pre-procedural IV isotonic saline hydration","Forced alkaline diuresis with sodium bicarbonate and furosemide","Prophylactic low-dose dopamine infusion"],
      correctIndex: 2,
      explanation: "Pre-procedural intravenous isotonic saline hydration is the most evidence-supported strategy for preventing contrast-induced nephropathy (CIN). Volume expansion reduces contrast concentration in the tubules, maintains renal blood flow, and decreases the contact time between nephrotoxic contrast and tubular epithelium.",
      optionExplanations: ["Incorrect: Prophylactic hemodialysis has not been shown to reduce CIN rates despite removing contrast.","Incorrect: N-acetylcysteine has been extensively studied but results are inconsistent; it is not clearly beneficial.","Correct: IV isotonic saline hydration before and after contrast is the best-supported preventive measure for CIN.","Incorrect: Forced diuresis with furosemide can cause volume depletion and may worsen renal injury.","Incorrect: Low-dose dopamine has not demonstrated benefit in preventing CIN in controlled trials."],
      highYieldPoint: "Contrast-induced nephropathy prevention: IV isotonic saline hydration; use low-osmolar contrast; avoid in CKD/dehydration."
    },
    {
      vignette: "A 68-year-old woman with a history of recurrent urinary tract infections is found to have bilateral small, irregularly scarred kidneys on ultrasound. She has a serum creatinine of 4.5 mg/dL and proteinuria of 0.8 g/day. Renal biopsy shows chronic interstitial fibrosis, tubular atrophy, and periglomerular fibrosis with many sclerosed glomeruli.",
      question: "What is the most likely underlying etiology of this patient's chronic kidney disease?",
      options: ["Chronic pyelonephritis with reflux nephropathy","Diabetic nephropathy","IgA nephropathy","Hypertensive nephrosclerosis","Polycystic kidney disease"],
      correctIndex: 0,
      explanation: "Chronic pyelonephritis from recurrent UTIs (often associated with vesicoureteral reflux) causes irregular cortical scarring with underlying calyceal dilation. The scarring pattern is coarse and asymmetric, unlike the smooth, bilateral contraction seen in hypertensive or diabetic nephrosclerosis. Histology shows chronic tubulointerstitial inflammation, thyroidization, and periglomerular fibrosis.",
      optionExplanations: ["Correct: Chronic pyelonephritis — recurrent UTIs → coarse, irregular scarring → chronic tubulointerstitial nephritis → CKD.","Incorrect: Diabetic nephropathy causes bilateral smooth kidney enlargement initially, then contraction; histology shows Kimmelstiel-Wilson nodules.","Incorrect: IgA nephropathy is a glomerular disease with mesangial IgA deposits, not a primary tubulointerstitial process.","Incorrect: Hypertensive nephrosclerosis causes bilateral smooth, symmetrically contracted kidneys, not irregular scarring.","Incorrect: PKD causes bilateral enlarged kidneys with multiple cysts, not small scarred kidneys."],
      highYieldPoint: "Chronic pyelonephritis: coarse irregular cortical scars + blunted calyces; associated with VUR and recurrent UTIs."
    }
  ],

  "Renal tumors": [
    {
      vignette: "A 60-year-old man presents with painless gross hematuria and a 15-pound weight loss over 3 months. He has a new-onset left-sided varicocele that does not decompress when supine. CT scan reveals a 7-cm solid mass in the left kidney with extension into the left renal vein.",
      question: "What is the most likely diagnosis?",
      options: ["Renal cell carcinoma","Wilms tumor","Transitional cell carcinoma of the renal pelvis","Renal oncocytoma","Angiomyolipoma"],
      correctIndex: 0,
      explanation: "Renal cell carcinoma (RCC) is the most common primary renal malignancy in adults. The classic triad (seen in ~10% of cases) includes hematuria, flank pain, and a palpable mass. A left-sided varicocele that does not decompress supine suggests left renal vein obstruction by tumor thrombus. RCC characteristically invades the renal vein and may extend into the IVC.",
      optionExplanations: ["Correct: RCC — renal vein invasion, non-decompressing varicocele, hematuria, weight loss in an adult male.","Incorrect: Wilms tumor (nephroblastoma) is the most common renal malignancy in children, not adults.","Incorrect: TCC of the renal pelvis can cause hematuria but is urothelial in origin and does not typically form large solid masses invading the renal vein.","Incorrect: Renal oncocytoma is a benign tumor that presents as a well-circumscribed mass with a central scar; it does not invade veins.","Incorrect: Angiomyolipoma is a benign tumor containing fat, smooth muscle, and vessels; often associated with tuberous sclerosis."],
      highYieldPoint: "RCC: most common adult renal malignancy; invades renal vein/IVC; left varicocele = left renal vein obstruction."
    },
    {
      vignette: "A 55-year-old man with RCC is found to have a secondary polycythemia (hemoglobin 19 g/dL). Further workup reveals hypercalcemia and elevated erythropoietin levels.",
      question: "Which paraneoplastic syndrome is most commonly associated with renal cell carcinoma?",
      options: ["SIADH","Cushing syndrome from ectopic ACTH","Hypoglycemia from insulin-like growth factor","Polycythemia from ectopic erythropoietin","Lambert-Eaton myasthenic syndrome"],
      correctIndex: 3,
      explanation: "RCC is known for its diverse paraneoplastic manifestations. Ectopic erythropoietin production leading to secondary polycythemia is one of the most common paraneoplastic syndromes. Other associations include hypercalcemia (from PTHrP secretion), hypertension (from renin secretion), and Stauffer syndrome (hepatic dysfunction without metastases).",
      optionExplanations: ["Incorrect: SIADH is most commonly associated with small cell lung cancer, not RCC.","Incorrect: Ectopic ACTH (Cushing syndrome) is associated with small cell lung cancer and bronchial carcinoids.","Incorrect: IGF-mediated hypoglycemia is associated with fibrosarcomas and hepatocellular carcinoma.","Correct: RCC produces ectopic erythropoietin → polycythemia; also PTHrP → hypercalcemia.","Incorrect: Lambert-Eaton syndrome is associated with small cell lung cancer."],
      highYieldPoint: "RCC paraneoplastic syndromes: ectopic EPO (polycythemia), PTHrP (hypercalcemia), renin (HTN), Stauffer syndrome."
    },
    {
      vignette: "A 58-year-old man with a history of heavy smoking and occupational exposure to trichloroethylene undergoes CT for flank pain, revealing a 5-cm solid mass in the right kidney. Biopsy shows clear cells with abundant glycogen and lipid content arranged in nests with a rich vascular network.",
      question: "Which genetic alteration is most commonly associated with this histological subtype?",
      options: ["Deletion of chromosome 11p13 (WT1 gene)","Translocation t(X;17) involving TFE3","Activating mutation of MET proto-oncogene on chromosome 7","Loss of VHL tumor suppressor gene on chromosome 3p","Fusion of PRCC-TFE3 on chromosome Xp11"],
      correctIndex: 3,
      explanation: "Clear cell RCC is the most common subtype (~70-80%) and is characterized by loss of the VHL tumor suppressor gene on chromosome 3p25. VHL normally promotes degradation of HIF (hypoxia-inducible factor). Its loss leads to constitutive HIF activation, driving expression of VEGF, PDGF, and erythropoietin, promoting angiogenesis and tumor growth.",
      optionExplanations: ["Incorrect: Chromosome 11p13 deletion (WT1) is associated with Wilms tumor (WAGR syndrome), not RCC.","Incorrect: TFE3 translocations are associated with Xp11 translocation RCC, a rare subtype in young patients.","Incorrect: MET mutations on chromosome 7 are associated with papillary RCC type 1, not clear cell.","Correct: VHL loss on 3p → HIF accumulation → VEGF/PDGF/EPO upregulation → clear cell RCC.","Incorrect: PRCC-TFE3 fusion is associated with translocation RCC, a rare subtype."],
      highYieldPoint: "Clear cell RCC: VHL loss (chr 3p) → HIF activation → VEGF/EPO upregulation; most common RCC subtype."
    },
    {
      vignette: "A 3-year-old boy is brought by his parents after they noticed a large, painless abdominal mass. Physical examination reveals a smooth, firm flank mass that does not cross the midline. Ultrasound shows a large, well-circumscribed intrarenal mass. CT confirms no bilateral involvement.",
      question: "What is the most likely diagnosis?",
      options: ["Wilms tumor (nephroblastoma)","Neuroblastoma","Renal cell carcinoma","Hepatoblastoma","Mesoblastic nephroma"],
      correctIndex: 0,
      explanation: "Wilms tumor (nephroblastoma) is the most common renal malignancy in children, with peak incidence at 2-5 years. It presents as a large, unilateral, painless abdominal mass. Unlike neuroblastoma, Wilms tumor does not typically cross the midline and is intrarenal in origin. Treatment involves nephrectomy followed by chemotherapy/radiation.",
      optionExplanations: ["Correct: Wilms tumor — painless flank mass in a young child, intrarenal, does not cross midline.","Incorrect: Neuroblastoma arises from the adrenal medulla/sympathetic chain, often crosses the midline, and produces catecholamines (elevated VMA/HVA).","Incorrect: RCC is extremely rare in children; it is the most common renal malignancy in adults.","Incorrect: Hepatoblastoma is a hepatic tumor presenting as a right upper quadrant mass with elevated AFP.","Incorrect: Mesoblastic nephroma is a congenital renal tumor typically diagnosed in infancy (< 3 months), not at age 3."],
      highYieldPoint: "Wilms tumor: most common renal tumor in children (ages 2-5); painless flank mass; does not cross midline."
    },
    {
      vignette: "A 2-year-old girl is diagnosed with Wilms tumor. Genetic testing reveals a deletion at chromosome 11p13 involving the WT1 gene. She also has aniridia and genitourinary anomalies.",
      question: "Which syndrome is associated with this constellation of findings?",
      options: ["WAGR syndrome","Beckwith-Wiedemann syndrome","Denys-Drash syndrome","Li-Fraumeni syndrome","Von Hippel-Lindau syndrome"],
      correctIndex: 0,
      explanation: "WAGR syndrome is caused by a deletion at chromosome 11p13 that includes both the WT1 gene and the PAX6 gene. WAGR stands for Wilms tumor, Aniridia, Genitourinary anomalies (cryptorchidism, hypospadias), and mental Retardation. These children have a 33% risk of developing Wilms tumor.",
      optionExplanations: ["Correct: WAGR syndrome — 11p13 deletion (WT1 + PAX6) → Wilms tumor, Aniridia, GU anomalies, Retardation.","Incorrect: Beckwith-Wiedemann syndrome (chromosome 11p15.5) involves macrosomia, macroglossia, organomegaly, omphalocele, and hemihyperplasia with Wilms tumor risk.","Incorrect: Denys-Drash syndrome involves a WT1 missense mutation with diffuse mesangial sclerosis, male pseudohermaphroditism, and Wilms tumor.","Incorrect: Li-Fraumeni syndrome (TP53 mutation) predisposes to sarcomas, breast cancer, leukemia, and brain tumors.","Incorrect: VHL syndrome causes clear cell RCC (adults), hemangioblastomas, and pheochromocytomas."],
      highYieldPoint: "WAGR: 11p13 deletion → Wilms tumor + Aniridia + GU anomalies + Retardation. Denys-Drash: WT1 missense mutation."
    },
    {
      vignette: "A 45-year-old woman with tuberous sclerosis complex presents with acute flank pain. CT scan reveals a 6-cm heterogeneous renal mass containing areas of fat density (−20 Hounsfield units). She is hemodynamically stable.",
      question: "What is the most likely renal tumor in this patient?",
      options: ["Clear cell renal cell carcinoma","Angiomyolipoma","Wilms tumor","Oncocytoma","Chromophobe renal cell carcinoma"],
      correctIndex: 1,
      explanation: "Angiomyolipoma (AML) is a benign renal tumor composed of blood vessels, smooth muscle, and adipose tissue. The presence of macroscopic fat on CT (negative Hounsfield units) is virtually diagnostic. AML is strongly associated with tuberous sclerosis complex (TSC), where tumors are often bilateral and multiple. Large AMLs (> 4 cm) can rupture and hemorrhage.",
      optionExplanations: ["Incorrect: Clear cell RCC does not contain macroscopic fat on CT imaging.","Correct: Angiomyolipoma — fat-containing renal tumor associated with TSC; benign but risk of hemorrhage when > 4 cm.","Incorrect: Wilms tumor occurs in children and does not characteristically contain fat.","Incorrect: Oncocytoma is a benign tumor with a central scar on imaging but does not contain fat.","Incorrect: Chromophobe RCC is a malignant tumor that does not contain fat."],
      highYieldPoint: "Angiomyolipoma: fat-containing benign renal tumor; associated with tuberous sclerosis; hemorrhage risk if > 4 cm."
    },
    {
      vignette: "A 32-year-old man with von Hippel-Lindau (VHL) disease undergoes surveillance imaging. MRI reveals bilateral renal masses (3 lesions in the left kidney, 2 in the right), a cerebellar hemangioblastoma, and a pancreatic cyst.",
      question: "What type of renal malignancy is this patient at highest risk for developing?",
      options: ["Papillary renal cell carcinoma type 1","Chromophobe renal cell carcinoma","Medullary carcinoma of the kidney","Collecting duct carcinoma","Clear cell renal cell carcinoma"],
      correctIndex: 4,
      explanation: "Von Hippel-Lindau disease is an autosomal dominant syndrome caused by germline VHL gene mutations on chromosome 3p25. Patients develop bilateral, multifocal clear cell RCCs (often at a young age), cerebellar and retinal hemangioblastomas, pheochromocytomas, and pancreatic cysts/tumors. RCC is the leading cause of death in VHL patients.",
      optionExplanations: ["Incorrect: Papillary RCC type 1 is associated with MET mutations, not VHL.","Incorrect: Chromophobe RCC is associated with Birt-Hogg-Dubé syndrome, not VHL.","Incorrect: Medullary carcinoma is associated with sickle cell trait, not VHL.","Incorrect: Collecting duct carcinoma is a rare, aggressive tumor not associated with VHL.","Correct: VHL → bilateral clear cell RCC + hemangioblastomas + pheo + pancreatic cysts."],
      highYieldPoint: "VHL syndrome: bilateral clear cell RCC, cerebellar/retinal hemangioblastomas, pheochromocytoma; AD, chr 3p25."
    },
    {
      vignette: "A 68-year-old man presents with painless gross hematuria. Cystoscopy reveals a papillary mass in the bladder. Biopsy confirms high-grade urothelial (transitional cell) carcinoma. CT urogram also shows a filling defect in the right renal pelvis.",
      question: "What is the most important risk factor for transitional cell carcinoma of the urinary tract?",
      options: ["Obesity","Cigarette smoking","Chronic lithium use","High-protein diet","Polycystic kidney disease"],
      correctIndex: 1,
      explanation: "Cigarette smoking is the single most important risk factor for transitional cell carcinoma (urothelial carcinoma) of the bladder, ureter, and renal pelvis. Aromatic amines and other carcinogens in tobacco are excreted in the urine and cause chronic mucosal exposure. Other risk factors include occupational exposure to aniline dyes, cyclophosphamide, and phenacetin.",
      optionExplanations: ["Incorrect: Obesity is a risk factor for RCC but not the primary risk factor for TCC.","Correct: Smoking is the #1 risk factor for TCC; carcinogens are concentrated in urine and contact the urothelium.","Incorrect: Lithium causes nephrogenic DI and chronic tubulointerstitial disease, not TCC.","Incorrect: Diet is not a major risk factor for urothelial carcinoma.","Incorrect: PKD is not associated with increased TCC risk."],
      highYieldPoint: "TCC risk factors: smoking (#1), aniline dyes, cyclophosphamide, phenacetin. Presents with painless hematuria."
    },
    {
      vignette: "A 22-year-old African American man with sickle cell trait presents with gross hematuria and right flank pain. CT reveals an ill-defined, infiltrative mass centered in the renal medulla of the right kidney. Biopsy shows poorly differentiated carcinoma with a rhabdoid morphology.",
      question: "What is the most likely diagnosis?",
      options: ["Clear cell renal cell carcinoma","Wilms tumor","Papillary renal cell carcinoma","Angiomyolipoma","Renal medullary carcinoma"],
      correctIndex: 4,
      explanation: "Renal medullary carcinoma is a rare, highly aggressive tumor that occurs almost exclusively in young patients with sickle cell trait (or other sickle hemoglobinopathies). It arises from the collecting ducts of the renal medulla and has a characteristic rhabdoid morphology. Prognosis is extremely poor, with most patients presenting with metastatic disease.",
      optionExplanations: ["Incorrect: Clear cell RCC arises from the cortex, occurs in older adults, and is associated with VHL.","Incorrect: Wilms tumor occurs in children under 5 years and has blastemal/epithelial/stromal histology.","Incorrect: Papillary RCC arises from the cortex and shows papillary architecture, not rhabdoid morphology.","Incorrect: Angiomyolipoma is benign and contains fat; it is not associated with sickle cell trait.","Correct: Renal medullary carcinoma — young patient with sickle cell trait, medullary location, rhabdoid morphology, very aggressive."],
      highYieldPoint: "Renal medullary carcinoma: young patients with sickle cell trait; medullary origin; rhabdoid morphology; very poor prognosis."
    },
    {
      vignette: "A 40-year-old woman with Birt-Hogg-Dubé syndrome undergoes renal imaging that reveals bilateral renal tumors. Her dermatologist has been following her for multiple fibrofolliculomas on her face and neck.",
      question: "Which renal tumor subtype is most commonly associated with Birt-Hogg-Dubé syndrome?",
      options: ["Clear cell renal cell carcinoma","Papillary renal cell carcinoma","Angiomyolipoma","Collecting duct carcinoma","Chromophobe renal cell carcinoma and renal oncocytoma"],
      correctIndex: 4,
      explanation: "Birt-Hogg-Dubé syndrome is an autosomal dominant disorder caused by mutations in the folliculin (FLCN) gene. It is characterized by fibrofolliculomas (skin), pulmonary cysts with spontaneous pneumothorax, and renal tumors — most commonly chromophobe RCC and hybrid oncocytic tumors (oncocytoma). Tumors are often bilateral and multifocal.",
      optionExplanations: ["Incorrect: Clear cell RCC is associated with VHL syndrome, not BHD.","Incorrect: Papillary RCC is associated with hereditary papillary RCC (MET mutations).","Incorrect: Angiomyolipoma is associated with tuberous sclerosis complex, not BHD.","Incorrect: Collecting duct carcinoma is not associated with BHD syndrome.","Correct: BHD → chromophobe RCC and oncocytoma (hybrid tumors); also fibrofolliculomas and lung cysts."],
      highYieldPoint: "Birt-Hogg-Dubé: FLCN mutation → fibrofolliculomas + lung cysts + chromophobe RCC/oncocytoma."
    },
    {
      vignette: "A 4-year-old boy with Wilms tumor undergoes nephrectomy. Histopathology reveals a triphasic pattern with blastemal, epithelial, and stromal components. The surgical pathologist specifically comments on the presence of anaplasia.",
      question: "What is the prognostic significance of anaplasia in Wilms tumor?",
      options: ["Anaplasia indicates a benign variant with excellent prognosis","Anaplasia is associated with resistance to chemotherapy and worse prognosis","Anaplasia has no prognostic significance","Anaplasia indicates a higher likelihood of bilateral disease","Anaplasia suggests a WT2 gene mutation rather than WT1"],
      correctIndex: 1,
      explanation: "Anaplasia (defined by marked nuclear atypia, atypical mitotic figures, and hyperchromatic enlarged nuclei) in Wilms tumor is the most important adverse histological prognostic factor. It is associated with resistance to chemotherapy (particularly vincristine and actinomycin D) and significantly worse survival rates compared to favorable histology Wilms tumor.",
      optionExplanations: ["Incorrect: Anaplasia confers unfavorable histology and worsened prognosis.","Correct: Anaplastic Wilms tumor is chemoresistant and carries a significantly worse prognosis than favorable-histology tumors.","Incorrect: Anaplasia is the most important histological prognostic factor in Wilms tumor.","Incorrect: Bilateral disease is more associated with genetic predisposition syndromes, not anaplasia.","Incorrect: Anaplasia is defined histologically and is not specifically linked to WT1 vs WT2 mutations."],
      highYieldPoint: "Wilms tumor with anaplasia = unfavorable histology → chemoresistance, worse prognosis. Favorable histology = better outcomes."
    },
    {
      vignette: "A 50-year-old woman undergoes a CT scan for an unrelated condition, which incidentally reveals a well-circumscribed, homogeneous renal mass with a central stellate scar. The mass shows no evidence of necrosis, hemorrhage, or fat.",
      question: "What is the most likely diagnosis?",
      options: ["Renal cell carcinoma","Angiomyolipoma","Oncocytoma","Wilms tumor","Renal abscess"],
      correctIndex: 2,
      explanation: "Renal oncocytoma is a benign renal neoplasm composed of mitochondria-rich eosinophilic cells (oncocytes). It characteristically appears as a well-circumscribed, homogeneous mass with a central stellate (star-shaped) scar on imaging. It accounts for 3-7% of renal tumors and does not metastasize, distinguishing it from RCC.",
      optionExplanations: ["Incorrect: RCC is typically heterogeneous with necrosis and hemorrhage and lacks a central stellate scar.","Incorrect: Angiomyolipoma contains fat (negative HU on CT) and lacks a central scar.","Correct: Oncocytoma — well-circumscribed renal mass with central stellate scar; benign, no metastatic potential.","Incorrect: Wilms tumor occurs in children and does not have a central scar pattern.","Incorrect: A renal abscess would present with fever, flank pain, and a complex fluid collection, not a solid mass with a scar."],
      highYieldPoint: "Renal oncocytoma: benign, central stellate scar, eosinophilic cells rich in mitochondria; does not metastasize."
    },
    {
      vignette: "A 63-year-old man with a 40-pack-year smoking history presents with gross hematuria. Urine cytology shows malignant cells with high nuclear-to-cytoplasmic ratio. Cystoscopy reveals no bladder mass. CT urogram shows a filling defect in the left ureter.",
      question: "Which histological type of cancer most commonly arises in the ureter?",
      options: ["Squamous cell carcinoma","Adenocarcinoma","Urothelial (transitional cell) carcinoma","Small cell carcinoma","Sarcomatoid carcinoma"],
      correctIndex: 2,
      explanation: "The ureter, like the rest of the urinary tract (renal pelvis, bladder, proximal urethra), is lined by transitional epithelium (urothelium). Urothelial carcinoma (TCC) is by far the most common malignancy arising in the ureter. Upper tract TCC accounts for 5-10% of all urothelial cancers and shares the same risk factors as bladder TCC (smoking, aromatic amines).",
      optionExplanations: ["Incorrect: Squamous cell carcinoma of the urinary tract is associated with chronic irritation (Schistosoma in the bladder) but is rare in the ureter.","Incorrect: Adenocarcinoma is rare in the urinary tract and is associated with urachal remnants in the bladder.","Correct: TCC/urothelial carcinoma is the most common cancer of the ureter, renal pelvis, and bladder.","Incorrect: Small cell carcinoma of the ureter is exceedingly rare.","Incorrect: Sarcomatoid carcinoma is a rare, aggressive variant of RCC, not a common ureteral tumor."],
      highYieldPoint: "Urothelial (transitional cell) carcinoma: most common cancer of renal pelvis, ureter, and bladder; risk: smoking, aniline dyes."
    },
    {
      vignette: "A 70-year-old man with known metastatic clear cell RCC is being evaluated for targeted therapy. His oncologist explains that the tumor's dependence on angiogenesis makes it susceptible to certain agents.",
      question: "Which targeted therapy mechanism is most appropriate based on the molecular biology of clear cell RCC?",
      options: ["BRAF inhibition","HER2/neu receptor blockade","VEGF pathway inhibition (e.g., sunitinib)","BCR-ABL tyrosine kinase inhibition","Estrogen receptor antagonism"],
      correctIndex: 2,
      explanation: "Clear cell RCC with VHL loss has constitutive HIF activation, leading to overexpression of VEGF and other pro-angiogenic factors. VEGF pathway inhibitors (sunitinib, pazopanib, bevacizumab) and mTOR inhibitors (everolimus, temsirolimus) exploit this dependence on angiogenesis. Anti-VEGF therapy is a mainstay of metastatic RCC treatment.",
      optionExplanations: ["Incorrect: BRAF inhibition is used in melanoma with BRAF V600E mutations, not RCC.","Incorrect: HER2/neu blockade (trastuzumab) is used in HER2-positive breast cancer, not RCC.","Correct: VEGF pathway inhibitors target the angiogenic drive caused by VHL loss in clear cell RCC.","Incorrect: BCR-ABL inhibition (imatinib) is specific to CML with the Philadelphia chromosome.","Incorrect: Estrogen receptor antagonism is used in ER-positive breast cancer, not RCC."],
      highYieldPoint: "Clear cell RCC: VHL loss → VEGF overexpression → treat with anti-VEGF agents (sunitinib) + checkpoint inhibitors."
    },
    {
      vignette: "A 55-year-old man with a history of long-term dialysis for end-stage renal disease undergoes surveillance imaging. CT reveals bilateral solid renal masses arising in the setting of acquired cystic kidney disease. He underwent kidney transplantation 2 years ago but his native kidneys were left in situ.",
      question: "Which type of renal malignancy is most commonly associated with acquired cystic kidney disease in dialysis patients?",
      options: ["Wilms tumor","Transitional cell carcinoma","Angiomyolipoma","Renal cell carcinoma (papillary type)","Renal medullary carcinoma"],
      correctIndex: 3,
      explanation: "Patients on long-term dialysis frequently develop acquired cystic kidney disease (ACKD) in their native kidneys, which carries a significantly increased risk of developing renal cell carcinoma — most commonly the papillary subtype. The risk increases with duration of dialysis. Surveillance imaging of native kidneys is recommended in dialysis and transplant patients.",
      optionExplanations: ["Incorrect: Wilms tumor is a childhood malignancy not associated with dialysis-related cystic disease.","Incorrect: TCC arises from the urothelium of the collecting system, not from acquired renal cysts.","Incorrect: Angiomyolipoma is associated with tuberous sclerosis, not dialysis-related cystic disease.","Correct: Papillary RCC is the most common malignancy arising in acquired cystic kidney disease of dialysis patients.","Incorrect: Renal medullary carcinoma is associated with sickle cell trait, not dialysis-related cystic disease."],
      highYieldPoint: "Acquired cystic kidney disease (long-term dialysis) → increased risk of papillary RCC in native kidneys."
    }
  ],

  "Fluid & electrolyte disorders": [
    {
      vignette: "A 78-year-old woman in a nursing home is found obtunded. Labs show serum Na⁺ 168 mEq/L, serum osmolality 350 mOsm/kg, BUN 45 mg/dL, creatinine 1.8 mg/dL. She has dry mucous membranes and poor skin turgor. Staff report she has been refusing fluids for several days.",
      question: "What is the most appropriate initial treatment for this patient's hypernatremia?",
      options: ["Rapid IV bolus of D5W (5% dextrose in water)","Slow IV infusion of 0.45% normal saline (half-normal saline)","3% hypertonic saline infusion","Oral free water bolus via nasogastric tube","IV normal saline (0.9% NaCl) bolus followed by free water replacement"],
      correctIndex: 4,
      explanation: "This patient has hypervolemic dehydration with hypernatremia from inadequate water intake. The initial priority is hemodynamic stabilization with isotonic saline (0.9% NaCl) to restore intravascular volume, followed by gradual free water replacement to correct the hypernatremia. Sodium should be corrected at no more than 10-12 mEq/L per day to prevent cerebral edema.",
      optionExplanations: ["Incorrect: Rapid D5W bolus can cause dangerously fast sodium correction, leading to cerebral edema.","Incorrect: Half-normal saline provides some free water but should not be first-line when the patient is hemodynamically compromised.","Incorrect: Hypertonic saline would worsen hypernatremia and is contraindicated.","Incorrect: Oral free water alone does not address the acute volume depletion and hemodynamic instability.","Correct: Restore volume with NS first, then replace free water deficit gradually (≤ 10-12 mEq/L/day sodium correction)."],
      highYieldPoint: "Hypernatremia with volume depletion: NS bolus for hemodynamics → gradual free water replacement; correct Na⁺ ≤ 10-12 mEq/L/day."
    },
    {
      vignette: "A 45-year-old man with small cell lung cancer is admitted with confusion. Labs show Na⁺ 112 mEq/L, serum osmolality 238 mOsm/kg, urine osmolality 620 mOsm/kg, urine Na⁺ 55 mEq/L. He has a generalized seizure.",
      question: "What is the most appropriate immediate treatment?",
      options: ["Fluid restriction to 500 mL/day","Demeclocycline 300 mg twice daily","Tolvaptan 15 mg orally","3% hypertonic saline infusion","Loop diuretic with salt tablets"],
      correctIndex: 3,
      explanation: "This patient has severe symptomatic hyponatremia (seizures) from SIADH. Acute severe symptoms require emergent treatment with 3% hypertonic saline to raise serum sodium by 4-6 mEq/L in the first few hours and prevent brain herniation. Fluid restriction is appropriate for chronic, mild SIADH but is too slow for this emergency.",
      optionExplanations: ["Incorrect: Fluid restriction is first-line for chronic asymptomatic SIADH but insufficient for seizures.","Incorrect: Demeclocycline (ADH antagonist) has a slow onset and is used for chronic SIADH refractory to fluid restriction.","Incorrect: Tolvaptan (vasopressin receptor antagonist) should not be used in acute symptomatic hyponatremia due to unpredictable correction rate.","Correct: 3% hypertonic saline is indicated for acute symptomatic hyponatremia with seizures; aim to raise Na⁺ by 4-6 mEq/L in first hours.","Incorrect: Loop diuretics with salt tablets are adjunctive for chronic SIADH, not first-line for seizures."],
      highYieldPoint: "Severe symptomatic hyponatremia (seizures): 3% hypertonic saline. Limit correction to < 8 mEq/L in first 24h to prevent ODS."
    },
    {
      vignette: "A 62-year-old alcoholic man presents with tremors and weakness. Labs show K⁺ 2.4 mEq/L, Mg²⁺ 0.8 mg/dL. IV potassium replacement is started, but his potassium remains refractory to correction.",
      question: "What must be corrected before potassium can be effectively repleted?",
      options: ["Serum magnesium","Serum calcium","Serum phosphorus","Serum bicarbonate","Serum sodium"],
      correctIndex: 0,
      explanation: "Hypomagnesemia causes refractory hypokalemia because magnesium is needed to block ROMK channels in the collecting duct. When magnesium is low, ROMK channels remain open, causing persistent renal potassium wasting regardless of potassium supplementation. Magnesium must be repleted before potassium correction will be effective.",
      optionExplanations: ["Correct: Hypomagnesemia causes persistent ROMK channel-mediated K⁺ wasting; correct Mg²⁺ first for effective K⁺ repletion.","Incorrect: Hypocalcemia can coexist with hypomagnesemia but does not directly cause refractory hypokalemia.","Incorrect: Phosphorus abnormalities do not directly prevent potassium correction.","Incorrect: While alkalosis shifts K⁺ intracellularly, correcting bicarbonate alone does not address refractory renal K⁺ wasting.","Incorrect: Sodium disturbances do not cause refractory hypokalemia."],
      highYieldPoint: "Refractory hypokalemia → check and correct magnesium first (Mg²⁺ blocks ROMK; low Mg²⁺ = K⁺ wasting)."
    },
    {
      vignette: "A 50-year-old woman with end-stage renal disease on hemodialysis misses two sessions. She presents with muscle weakness and ECG shows peaked T waves, widened QRS complex, and loss of P waves. Labs show K⁺ 7.8 mEq/L.",
      question: "What is the most appropriate first step in managing this patient's hyperkalemia?",
      options: ["Oral sodium polystyrene sulfonate (Kayexalate)","IV insulin with dextrose","Emergent hemodialysis","IV calcium gluconate","Nebulized albuterol"],
      correctIndex: 3,
      explanation: "IV calcium gluconate is the first priority in hyperkalemia with ECG changes because it stabilizes the cardiac membrane and reduces the risk of fatal arrhythmias within minutes. It does not lower potassium levels but provides cardioprotection while other measures (insulin/dextrose, dialysis) are initiated to actually reduce serum potassium.",
      optionExplanations: ["Incorrect: Kayexalate removes potassium but takes hours to work and does not address the immediate cardiac risk.","Incorrect: Insulin/dextrose shifts K⁺ intracellularly and is important but should be given after cardiac stabilization with calcium.","Incorrect: Dialysis is the definitive treatment but takes time to arrange; cardiac stabilization must come first.","Correct: IV calcium gluconate stabilizes the myocardium immediately; it is the first step when ECG changes are present.","Incorrect: Albuterol shifts K⁺ intracellularly but does not provide immediate cardiac membrane stabilization."],
      highYieldPoint: "Hyperkalemia with ECG changes: 1st = IV calcium (cardiac stabilization) → insulin/dextrose → dialysis."
    },
    {
      vignette: "A 35-year-old woman post-thyroidectomy develops perioral numbness, carpopedal spasm, and a positive Chvostek sign. Labs show Ca²⁺ 6.4 mg/dL, phosphorus 6.8 mg/dL, PTH 5 pg/mL (low), albumin 4.0 g/dL.",
      question: "What is the most likely cause of this patient's hypocalcemia?",
      options: ["Hypoparathyroidism from surgical removal of parathyroid glands","Vitamin D deficiency","Pseudohypoparathyroidism","Chronic kidney disease with secondary hyperparathyroidism","Hungry bone syndrome"],
      correctIndex: 0,
      explanation: "Post-thyroidectomy hypocalcemia is most commonly caused by inadvertent removal or devascularization of the parathyroid glands during surgery. Low PTH confirms hypoparathyroidism. Without PTH, calcium reabsorption in the DCT decreases, phosphate excretion decreases (hyperphosphatemia), and 1,25-dihydroxyvitamin D production falls.",
      optionExplanations: ["Correct: Surgical hypoparathyroidism — low PTH, hypocalcemia, hyperphosphatemia post-thyroidectomy.","Incorrect: Vitamin D deficiency causes hypocalcemia but PTH would be elevated (secondary hyperparathyroidism), and phosphorus would be low.","Incorrect: Pseudohypoparathyroidism has high PTH (end-organ resistance), not low PTH.","Incorrect: CKD causes secondary hyperparathyroidism with high PTH, not low PTH.","Incorrect: Hungry bone syndrome can occur post-parathyroidectomy but PTH is typically low-normal and phosphorus is also low."],
      highYieldPoint: "Post-surgical hypoparathyroidism: low PTH → hypocalcemia + hyperphosphatemia. Treat with calcium + calcitriol."
    },
    {
      vignette: "A 55-year-old man with squamous cell carcinoma of the lung presents with confusion, polyuria, and constipation. Labs show Ca²⁺ 14.2 mg/dL, phosphorus 2.1 mg/dL, PTH < 5 pg/mL, PTHrP elevated.",
      question: "What is the mechanism of hypercalcemia in this patient?",
      options: ["Primary hyperparathyroidism from parathyroid adenoma","Ectopic PTH secretion by the tumor","Osteolytic bone metastases with local cytokine release","PTH-related peptide (PTHrP) secretion by squamous cell carcinoma","Excessive vitamin D production by the tumor"],
      correctIndex: 3,
      explanation: "Squamous cell carcinoma of the lung is the classic tumor that produces PTH-related peptide (PTHrP), causing humoral hypercalcemia of malignancy. PTHrP mimics PTH at the PTH1 receptor, increasing bone resorption and renal calcium reabsorption. Unlike primary hyperparathyroidism, PTH levels are suppressed because PTHrP provides negative feedback to the parathyroid glands.",
      optionExplanations: ["Incorrect: Primary hyperparathyroidism would show elevated PTH, not suppressed PTH.","Incorrect: Tumors secrete PTHrP, not PTH itself; ectopic PTH production is extremely rare.","Incorrect: Osteolytic metastases cause local (not humoral) hypercalcemia, more common with breast cancer and multiple myeloma.","Correct: Squamous cell cancers produce PTHrP → humoral hypercalcemia of malignancy with suppressed PTH.","Incorrect: Excess 1,25-vitamin D production is associated with lymphoma and granulomatous diseases (sarcoidosis), not squamous cell carcinoma."],
      highYieldPoint: "Humoral hypercalcemia of malignancy: PTHrP from squamous cell cancers → ↑ Ca²⁺, ↓ PTH, ↓ PO₄; treat with IV saline + bisphosphonates."
    },
    {
      vignette: "A 30-year-old woman with chronic alcoholism presents with generalized seizures. Labs show Mg²⁺ 0.6 mg/dL, Ca²⁺ 6.8 mg/dL, K⁺ 2.6 mEq/L. ECG shows prolonged QT interval.",
      question: "Which mechanism best explains the concurrent hypocalcemia in this patient?",
      options: ["Impaired PTH secretion due to hypomagnesemia","Direct calcium chelation by alcohol metabolites","Increased renal calcium excretion from magnesium deficiency","Vitamin D receptor downregulation by ethanol","Increased calcitonin release from hypomagnesemia"],
      correctIndex: 0,
      explanation: "Severe hypomagnesemia (< 1.0 mg/dL) impairs both PTH secretion and PTH end-organ responsiveness. Magnesium is required for adenylyl cyclase function in the parathyroid gland; without it, PTH release is blunted. Additionally, hypomagnesemia causes skeletal resistance to PTH action. This creates a functional hypoparathyroidism with resultant hypocalcemia.",
      optionExplanations: ["Correct: Hypomagnesemia impairs PTH secretion and peripheral PTH action → functional hypoparathyroidism → hypocalcemia.","Incorrect: Alcohol metabolites (acetaldehyde) are toxic but do not chelate calcium.","Incorrect: Magnesium deficiency does not directly increase renal calcium excretion.","Incorrect: Vitamin D receptor downregulation by ethanol is not a recognized mechanism.","Incorrect: Calcitonin is not significantly affected by magnesium levels."],
      highYieldPoint: "Severe hypomagnesemia → impaired PTH secretion + PTH resistance → hypocalcemia; correct Mg²⁺ first."
    },
    {
      vignette: "A 25-year-old woman is hospitalized for diabetic ketoacidosis. After 12 hours of insulin and IV fluid therapy, her glucose improves from 550 to 220 mg/dL. However, she develops severe muscle weakness. Labs show K⁺ 2.2 mEq/L, PO₄ 0.8 mg/dL.",
      question: "What is the primary mechanism for this patient's hypokalemia?",
      options: ["Renal potassium wasting from osmotic diuresis","Insulin-mediated intracellular shift of potassium","Gastrointestinal potassium losses from vomiting","Aldosterone excess from volume contraction","Dilutional effect from IV fluid administration"],
      correctIndex: 1,
      explanation: "During DKA treatment, insulin drives potassium into cells via stimulation of the Na⁺/K⁺-ATPase. Although patients in DKA often present with normal or elevated serum K⁺ (despite total body depletion from osmotic diuresis and vomiting), insulin therapy rapidly shifts K⁺ intracellularly, unmasking the total body deficit. Potassium must be monitored closely and replaced during DKA treatment.",
      optionExplanations: ["Incorrect: Osmotic diuresis contributes to total body potassium depletion before treatment but does not explain the acute drop during insulin therapy.","Correct: Insulin activates Na⁺/K⁺-ATPase → rapid K⁺ shift into cells, causing acute hypokalemia during DKA treatment.","Incorrect: GI losses contribute to pre-existing depletion but not the acute decline during treatment.","Incorrect: Volume contraction activates RAAS, which can worsen K⁺ loss, but insulin-mediated shift is the primary acute mechanism.","Incorrect: Dilution from IV fluids contributes minimally compared to the intracellular shift caused by insulin."],
      highYieldPoint: "DKA treatment: insulin shifts K⁺ into cells → hypokalemia. Replace K⁺ when < 5.3 mEq/L BEFORE starting insulin if < 3.3."
    },
    {
      vignette: "A 68-year-old man with heart failure is treated with aggressive IV furosemide. Three days later, he develops confusion and gait instability. Labs show Na⁺ 108 mEq/L. Hypertonic saline is started, and within 24 hours his sodium rises to 128 mEq/L.",
      question: "What neurological complication is this patient at highest risk for from this rate of sodium correction?",
      options: ["Cerebral edema with herniation","Wernicke encephalopathy","Normal pressure hydrocephalus","Subarachnoid hemorrhage","Osmotic demyelination syndrome (central pontine myelinolysis)"],
      correctIndex: 4,
      explanation: "Osmotic demyelination syndrome (ODS/central pontine myelinolysis) occurs when chronic hyponatremia is corrected too rapidly (> 8-10 mEq/L in 24 hours). Brain cells in chronic hyponatremia have adapted by losing organic osmolytes; rapid sodium correction causes water to shift out of neurons, causing demyelination — particularly in the pons. This patient's sodium rose 20 mEq/L in 24 hours, far exceeding safe correction rates.",
      optionExplanations: ["Incorrect: Cerebral edema occurs with acute hyponatremia, not from overly rapid correction.","Incorrect: Wernicke encephalopathy results from thiamine deficiency, not sodium correction.","Incorrect: NPH causes the triad of dementia, gait disturbance, and urinary incontinence and is unrelated to hyponatremia correction.","Incorrect: Subarachnoid hemorrhage is unrelated to sodium correction rates.","Correct: ODS from rapid Na⁺ correction (> 8-10 mEq/L/day) — demyelination of the pons; presents with dysarthria, dysphagia, quadriparesis."],
      highYieldPoint: "Osmotic demyelination syndrome: rapid Na⁺ correction in chronic hyponatremia; limit correction to < 8-10 mEq/L per 24 hours."
    },
    {
      vignette: "A 14-year-old girl with bulimia nervosa presents with weakness and palpitations. Labs show K⁺ 2.0 mEq/L, Cl⁻ 78 mEq/L, HCO₃⁻ 42 mEq/L. ECG shows flattened T waves, prominent U waves, and ST depression.",
      question: "Which ECG finding appears first as serum potassium decreases?",
      options: ["Peaked T waves","Widened QRS complex","Loss of P waves","Sine wave pattern","Flattened T waves and U waves"],
      correctIndex: 4,
      explanation: "Hypokalemia causes a characteristic progression of ECG changes. The earliest findings are T wave flattening and the appearance of U waves (small positive deflection after the T wave). As hypokalemia worsens, ST depression, prolonged QT interval, and eventually atrial/ventricular arrhythmias develop. Peaked T waves and widened QRS are features of hyperkalemia.",
      optionExplanations: ["Incorrect: Peaked T waves are the earliest sign of hyperkalemia, not hypokalemia.","Incorrect: Widened QRS occurs in severe hyperkalemia, not hypokalemia.","Incorrect: Loss of P waves occurs in severe hyperkalemia.","Incorrect: Sine wave pattern is a pre-terminal finding in severe hyperkalemia.","Correct: Flattened T waves and U waves are the earliest ECG manifestations of hypokalemia."],
      highYieldPoint: "Hypokalemia ECG: flattened T waves → U waves → ST depression → arrhythmias. Hyperkalemia: peaked T → wide QRS → sine wave."
    },
    {
      vignette: "A 55-year-old man with chronic kidney disease (eGFR 15 mL/min) has persistent hyperphosphatemia (PO₄ 8.5 mg/dL), hypocalcemia (Ca²⁺ 7.2 mg/dL), and markedly elevated PTH (850 pg/mL). He is started on calcitriol and sevelamer.",
      question: "What is the primary mechanism of hyperphosphatemia in chronic kidney disease?",
      options: ["Increased intestinal phosphate absorption","Increased bone resorption from PTH excess","Decreased renal phosphate excretion due to reduced GFR","Increased phosphate intake from diet","Rhabdomyolysis with phosphate release"],
      correctIndex: 2,
      explanation: "In CKD, the declining GFR reduces the kidney's ability to excrete phosphate, leading to phosphate retention and hyperphosphatemia. This triggers secondary hyperparathyroidism (elevated PTH) and decreased 1,25-dihydroxyvitamin D production (the kidney cannot hydroxylate 25-OH vitamin D). The result is hypocalcemia, hyperphosphatemia, and renal osteodystrophy.",
      optionExplanations: ["Incorrect: Intestinal phosphate absorption is actually decreased in CKD due to low calcitriol.","Incorrect: PTH-driven bone resorption releases some phosphate but the primary problem is reduced renal excretion.","Correct: Reduced GFR → impaired renal phosphate excretion → hyperphosphatemia, the initiating event in CKD-MBD.","Incorrect: Dietary phosphate contributes but is not the primary mechanism; even with normal intake, CKD kidneys cannot excrete it.","Incorrect: Rhabdomyolysis is an acute cause of hyperphosphatemia, unrelated to CKD."],
      highYieldPoint: "CKD-MBD: ↓ GFR → ↑ PO₄ + ↓ calcitriol → ↓ Ca²⁺ → 2° hyperparathyroidism → renal osteodystrophy."
    },
    {
      vignette: "A 40-year-old woman with sarcoidosis presents with polyuria, polydipsia, nausea, and confusion. Labs show Ca²⁺ 13.5 mg/dL, PO₄ 4.5 mg/dL, PTH 8 pg/mL (suppressed), and 1,25-dihydroxyvitamin D 95 pg/mL (elevated).",
      question: "What is the source of excess 1,25-dihydroxyvitamin D in this patient?",
      options: ["Overactive renal 1α-hydroxylase stimulated by PTH","Exogenous vitamin D supplementation","Ectopic 1α-hydroxylase activity in granulomatous macrophages","Parathyroid adenoma with autonomous PTH secretion","Increased 25-hydroxylation in the liver"],
      correctIndex: 2,
      explanation: "In granulomatous diseases (sarcoidosis, tuberculosis, fungal infections, lymphoma), activated macrophages within granulomas express 1α-hydroxylase, converting 25-hydroxyvitamin D to 1,25-dihydroxyvitamin D (calcitriol) independent of normal PTH regulation. This extra-renal calcitriol production causes hypercalcemia by increasing intestinal calcium absorption. PTH is appropriately suppressed.",
      optionExplanations: ["Incorrect: Renal 1α-hydroxylase is stimulated by PTH, which is suppressed here due to hypercalcemia.","Incorrect: Exogenous vitamin D would raise 25-OH vitamin D levels; the specifically elevated 1,25-OH₂D points to increased 1α-hydroxylase activity.","Correct: Granulomatous macrophages produce 1α-hydroxylase → unregulated calcitriol production → hypercalcemia in sarcoidosis.","Incorrect: PTH is suppressed (8 pg/mL), ruling out primary hyperparathyroidism.","Incorrect: Hepatic 25-hydroxylation is not the rate-limiting step and is not increased in sarcoidosis."],
      highYieldPoint: "Sarcoidosis hypercalcemia: macrophage 1α-hydroxylase → ↑ calcitriol → ↑ Ca²⁺; treat with steroids (suppress macrophages)."
    },
    {
      vignette: "A 28-year-old man is brought to the emergency department after a motorcycle accident with crush injury to both lower extremities. Labs show K⁺ 7.2 mEq/L, Ca²⁺ 6.5 mg/dL, PO₄ 9.0 mg/dL, uric acid 12 mg/dL, CK 45,000 U/L, creatinine 4.8 mg/dL. Urine is dark brown.",
      question: "What is the mechanism of acute kidney injury in rhabdomyolysis?",
      options: ["Immune complex deposition in glomeruli","Myoglobin-induced tubular obstruction and direct oxidative tubular injury","Calcium oxalate crystal formation in the tubules","Uric acid precipitation in the collecting ducts","Thrombotic microangiopathy in renal arterioles"],
      correctIndex: 1,
      explanation: "Rhabdomyolysis releases massive amounts of myoglobin from damaged skeletal muscle. Myoglobin is freely filtered at the glomerulus and precipitates in the acidic tubular lumen, forming obstructive casts (especially in the distal tubule). Additionally, myoglobin generates free radicals via its iron moiety (Fenton reaction), causing direct oxidative injury to tubular epithelial cells. Volume depletion from third-spacing worsens ischemic injury.",
      optionExplanations: ["Incorrect: Rhabdomyolysis-induced AKI is not immune complex-mediated.","Correct: Myoglobin causes tubular obstruction (cast formation) + direct oxidative injury (iron-mediated free radicals) → ATN.","Incorrect: Calcium oxalate crystals are associated with ethylene glycol toxicity, not rhabdomyolysis.","Incorrect: Uric acid elevation occurs but myoglobin is the primary nephrotoxin in rhabdomyolysis.","Incorrect: TMA affects the microvasculature and is not the mechanism of AKI in rhabdomyolysis."],
      highYieldPoint: "Rhabdomyolysis AKI: myoglobin → tubular obstruction + oxidative injury; ↑ K⁺, ↑ PO₄, ↑ CK, ↓ Ca²⁺. Treat with aggressive IV NS."
    },
    {
      vignette: "A 60-year-old man with diabetes insipidus accidentally receives an excessive dose of desmopressin. Over 48 hours, his serum Na⁺ drops from 142 to 118 mEq/L. On examination, he is euvolemic and neurologically intact.",
      question: "Why is this patient at lower risk for osmotic demyelination syndrome compared to a patient with chronic hyponatremia being corrected?",
      options: ["His kidneys can excrete excess free water autonomously","Acute hyponatremia means brain cells have not yet lost organic osmolytes","Desmopressin protects oligodendrocytes from demyelination","Diabetic insipidus patients have inherently resistant myelin","The euvolemic state prevents demyelination"],
      correctIndex: 1,
      explanation: "ODS risk is highest when chronic hyponatremia (> 48 hours duration) is rapidly corrected. In chronic hyponatremia, brain cells have adapted by extruding organic osmolytes (glutamate, taurine, myo-inositol) to prevent cerebral edema. Rapid correction then causes water to leave neurons that cannot quickly re-accumulate these osmolytes, resulting in demyelination. In acute hyponatremia (< 48 hours), the brain has not yet lost these osmolytes, so correction carries less risk of ODS.",
      optionExplanations: ["Incorrect: His DI is being treated with excess desmopressin, so free water excretion is impaired.","Correct: In acute hyponatremia, brain cells retain organic osmolytes, so rapid correction does not cause the osmotic stress that triggers demyelination.","Incorrect: Desmopressin has no direct neuroprotective effect on oligodendrocytes.","Incorrect: There is no inherent myelin resistance in DI patients.","Incorrect: Volume status does not directly determine ODS risk; the key factor is chronicity of hyponatremia."],
      highYieldPoint: "ODS risk: chronic (> 48h) hyponatremia + rapid correction. Brain adapts by losing osmolytes; can't reaccumulate quickly."
    },
    {
      vignette: "A 52-year-old woman with a history of gastric bypass surgery presents with fatigue and muscle cramps. Labs show Ca²⁺ 7.0 mg/dL, Mg²⁺ 1.0 mg/dL, PO₄ 2.0 mg/dL, 25-OH vitamin D 8 ng/mL, PTH 185 pg/mL, albumin 3.2 g/dL. She has been non-compliant with her vitamin and mineral supplements.",
      question: "What is the most likely primary cause of this patient's hypocalcemia?",
      options: ["Hypoparathyroidism","Pseudohypoparathyroidism","Vitamin D deficiency with secondary hyperparathyroidism","Primary hyperparathyroidism with hungry bone syndrome","Milk-alkali syndrome"],
      correctIndex: 2,
      explanation: "This patient has vitamin D deficiency (25-OH vitamin D of 8 ng/mL) from malabsorption after gastric bypass surgery. Low vitamin D decreases intestinal calcium absorption, causing hypocalcemia. The parathyroid glands respond appropriately with elevated PTH (secondary hyperparathyroidism), which increases bone resorption and renal calcium reabsorption. Phosphorus is low because elevated PTH promotes phosphaturia.",
      optionExplanations: ["Incorrect: PTH is elevated (185 pg/mL), not low; hypoparathyroidism would show low PTH with hyperphosphatemia.","Incorrect: Pseudohypoparathyroidism shows elevated PTH with end-organ resistance, but phosphorus is typically elevated, not low.","Correct: Vitamin D deficiency → ↓ Ca²⁺ absorption → ↓ Ca²⁺ → compensatory ↑ PTH (2° hyperparathyroidism) → ↓ PO₄.","Incorrect: Hungry bone syndrome occurs post-parathyroidectomy with low Ca²⁺ AND low PO₄ and low PTH, not elevated PTH.","Incorrect: Milk-alkali syndrome causes hypercalcemia and metabolic alkalosis from excess calcium/antacid intake."],
      highYieldPoint: "Vitamin D deficiency: ↓ Ca²⁺, ↓ PO₄, ↑ PTH (secondary hyperparathyroidism), ↑ ALP. Causes: malabsorption, poor intake, lack of sunlight."
    }
  ]

};

const RENAL_SUMMARIES = {

  "Renal physiology": {
    sections: [
      {
        heading: "Glomerular Filtration & Clearance",
        bullets: [
          "GFR is best measured by inulin clearance (freely filtered, not reabsorbed or secreted)",
          "Creatinine clearance overestimates GFR due to proximal tubular secretion",
          "PAH clearance estimates renal plasma flow (RPF); filtered and secreted",
          "Filtration fraction = GFR / RPF (normal ~20%)",
          "Fractional excretion = clearance of substance / GFR; FE < 1 = net reabsorption, FE > 1 = net secretion"
        ]
      },
      {
        heading: "Nephron Segment Functions",
        bullets: [
          "PCT: reabsorbs 65-70% of Na⁺, water, glucose, amino acids, HCO₃⁻, PO₄; secretes organic acids/bases",
          "Thin descending limb: permeable to water, impermeable to solutes (concentrates tubular fluid)",
          "Thick ascending limb: NKCC2 reabsorbs Na⁺/K⁺/2Cl⁻; impermeable to water (diluting segment)",
          "DCT: NCC reabsorbs Na⁺/Cl⁻; active Ca²⁺ reabsorption (PTH-regulated); Mg²⁺ reabsorption",
          "Collecting duct: principal cells (ENaC, ROMK, AQP2 under ADH); α-intercalated cells (H⁺ secretion); β-intercalated cells (HCO₃⁻ secretion)"
        ]
      },
      {
        heading: "Diuretics & Their Targets",
        bullets: [
          "Carbonic anhydrase inhibitors (acetazolamide): PCT → bicarbonaturia, metabolic acidosis",
          "Loop diuretics (furosemide): thick ascending limb NKCC2 → hypokalemia, metabolic alkalosis, hypocalcemia",
          "Thiazides (HCTZ): DCT NCC → hypokalemia, metabolic alkalosis, hypercalcemia, hyperuricemia",
          "K⁺-sparing: amiloride (blocks ENaC), spironolactone (blocks aldosterone receptor) → hyperkalemia",
          "ADH antagonists (tolvaptan): V2 receptor → aquaresis (free water excretion)"
        ]
      },
      {
        heading: "Hormonal Regulation",
        bullets: [
          "ADH (vasopressin): V2 receptor → AQP2 insertion → water reabsorption in collecting duct",
          "Aldosterone: principal cells → ↑ ENaC, ↑ Na⁺/K⁺-ATPase → Na⁺ reabsorption, K⁺/H⁺ secretion",
          "PTH: DCT Ca²⁺ reabsorption ↑; PCT PO₄ reabsorption ↓; activates 1α-hydroxylase",
          "ANP: ↓ Na⁺ reabsorption, ↓ renin, ↓ aldosterone → natriuresis",
          "Renin release stimuli: ↓ perfusion pressure, ↓ NaCl at macula densa, β1-adrenergic stimulation"
        ]
      }
    ],
    table: {
      title: "Diuretic Comparison",
      headers: ["Diuretic","Site","Target","K⁺ Effect","Ca²⁺ Effect"],
      rows: [
        ["Acetazolamide","PCT","Carbonic anhydrase","↓ (mild)","No change"],
        ["Furosemide","TAL","NKCC2","↓↓","↓ (calciuria)"],
        ["HCTZ","DCT","NCC","↓↓","↑ (retention)"],
        ["Amiloride","CD","ENaC","↑","No change"],
        ["Spironolactone","CD","Aldosterone receptor","↑","No change"]
      ]
    },
    mnemonic: "Nephron segment transport — 'Please Send Cash To David': PCT (65% reabsorption) → S-shaped descending limb (water) → Counter-current ascending (NaCl, no water) → Thiazide-sensitive DCT → Distal collecting duct (ADH/Aldosterone)."
  },

  "Acid-base disorders": {
    sections: [
      {
        heading: "Approach to Acid-Base Problems",
        bullets: [
          "Step 1: Check pH — acidemia (< 7.35) vs alkalemia (> 7.45)",
          "Step 2: Identify primary disorder — metabolic (HCO₃⁻) vs respiratory (pCO₂)",
          "Step 3: Calculate expected compensation (Winter's formula for metabolic acidosis: pCO₂ = 1.5[HCO₃⁻] + 8 ± 2)",
          "Step 4: Calculate anion gap (AG = Na⁺ − Cl⁻ − HCO₃⁻; normal ~12)",
          "Step 5: If AG elevated, calculate delta-delta ratio to identify concurrent disorders"
        ]
      },
      {
        heading: "Anion Gap Metabolic Acidosis (MUDPILES)",
        bullets: [
          "Methanol → formic acid (blindness, optic disc edema)",
          "Uremia (chronic kidney disease) → retention of organic acids",
          "Diabetic ketoacidosis → β-hydroxybutyrate, acetoacetate",
          "Propylene glycol, Paraldehyde",
          "Iron, Isoniazid, Inborn errors of metabolism",
          "Lactic acidosis (type A = tissue hypoxia; type B = liver disease, metformin)",
          "Ethylene glycol → glycolic acid, oxalic acid (calcium oxalate crystals)",
          "Salicylates (aspirin) → mixed respiratory alkalosis + AG metabolic acidosis"
        ]
      },
      {
        heading: "Renal Tubular Acidosis (RTA) Comparison",
        bullets: [
          "Type 1 (distal): defective H⁺ secretion in α-intercalated cells; urine pH > 5.5; hypokalemia; nephrolithiasis/nephrocalcinosis",
          "Type 2 (proximal): defective HCO₃⁻ reabsorption in PCT; urine pH < 5.5 (once serum HCO₃⁻ below threshold); Fanconi syndrome associations",
          "Type 4 (hyperkalemic): hypoaldosteronism or aldosterone resistance; hyperkalemia impairs NH₃ production",
          "All RTAs cause non-anion gap (hyperchloremic) metabolic acidosis",
          "Urine anion gap: positive = renal cause (RTA); negative = extrarenal cause (diarrhea)"
        ]
      },
      {
        heading: "Metabolic Alkalosis",
        bullets: [
          "Chloride-responsive (urine Cl⁻ < 20): vomiting, NG suction, prior diuretic use → treat with saline",
          "Chloride-resistant (urine Cl⁻ > 20): hyperaldosteronism, Cushing, Bartter/Gitelman syndromes",
          "Contraction alkalosis: volume loss concentrates existing HCO₃⁻",
          "Post-hypercapnic alkalosis: rapid pCO₂ correction leaves retained HCO₃⁻"
        ]
      }
    ],
    table: {
      title: "RTA Types Comparison",
      headers: ["Feature","Type 1 (Distal)","Type 2 (Proximal)","Type 4"],
      rows: [
        ["Defect","H⁺ secretion (collecting duct)","HCO₃⁻ reabsorption (PCT)","Aldosterone deficiency/resistance"],
        ["Urine pH","> 5.5","< 5.5 (variable)","< 5.5"],
        ["Serum K⁺","Low","Low","High"],
        ["Stones","Yes (Ca-PO₄)","No","No"],
        ["Associations","Sjögren, SLE, amphotericin","Fanconi, myeloma, tenofovir","Diabetic CKD, ACEi/ARBs, heparin"]
      ]
    },
    mnemonic: "MUDPILES for AG metabolic acidosis: Methanol, Uremia, DKA, Propylene glycol, Iron/Isoniazid, Lactic acidosis, Ethylene glycol, Salicylates."
  },

  "Glomerular disease": {
    sections: [
      {
        heading: "Nephrotic vs Nephritic Syndrome",
        bullets: [
          "Nephrotic: proteinuria > 3.5 g/day, hypoalbuminemia, edema, hyperlipidemia, lipiduria (oval fat bodies, Maltese crosses)",
          "Nephritic: hematuria (RBC casts, dysmorphic RBCs), mild-moderate proteinuria, hypertension, oliguria, azotemia",
          "Nephrotic = podocyte/GBM damage → protein leak; Nephritic = endothelial/mesangial inflammation → blood leak",
          "Some diseases can have mixed nephrotic-nephritic features (e.g., MPGN, lupus nephritis, FSGS)"
        ]
      },
      {
        heading: "Nephrotic Syndrome Causes",
        bullets: [
          "Minimal change disease: #1 in children; normal LM, foot process effacement on EM; responds to steroids",
          "Focal segmental glomerulosclerosis (FSGS): #1 in African Americans; segmental sclerosis on LM; associated with HIV, obesity, heroin",
          "Membranous nephropathy: #1 in white adults; subepithelial deposits, spike-and-dome; anti-PLA2R; associated with HBV, SLE, solid tumors",
          "Diabetic nephropathy: GBM thickening → mesangial expansion → Kimmelstiel-Wilson nodules → global sclerosis",
          "Amyloidosis: Congo red → apple-green birefringence; 8-12 nm fibrils on EM"
        ]
      },
      {
        heading: "Nephritic Syndrome Causes",
        bullets: [
          "Post-streptococcal GN: 1-3 weeks post-GAS; subepithelial humps; low C3, normal C4; starry sky IF",
          "IgA nephropathy (Berger): most common GN worldwide; synpharyngitic hematuria; mesangial IgA; normal complement",
          "Goodpasture (anti-GBM): linear IgG on IF; anti-α3 type IV collagen; pulmonary-renal syndrome",
          "ANCA-associated: pauci-immune crescentic GN; c-ANCA/PR3 = GPA; p-ANCA/MPO = MPA",
          "Lupus nephritis: full house IF; class IV = most common/severe (wire loops, subendothelial deposits)"
        ]
      },
      {
        heading: "Complement Levels in Glomerular Disease",
        bullets: [
          "Low C3 only (normal C4): PSGN, MPGN type II (dense deposit disease), C3 glomerulopathy — alternative pathway",
          "Low C3 AND C4: SLE nephritis, cryoglobulinemic GN, MPGN type I — classical pathway",
          "Normal complement: IgA nephropathy, ANCA-associated GN, Goodpasture, minimal change, FSGS, membranous"
        ]
      }
    ],
    table: {
      title: "IF Patterns in Glomerular Disease",
      headers: ["Pattern","Disease","Deposit Location"],
      rows: [
        ["Granular (lumpy-bumpy)","PSGN","Subepithelial humps"],
        ["Granular","Membranous nephropathy","Subepithelial (spike and dome)"],
        ["Granular (mesangial)","IgA nephropathy","Mesangial"],
        ["Linear","Goodpasture (anti-GBM)","Along GBM"],
        ["Full house","Lupus nephritis","Variable by class"],
        ["Pauci-immune (neg/scant)","ANCA-associated GN","No significant deposits"],
        ["Negative","Minimal change disease","None (foot process effacement only)"]
      ]
    },
    mnemonic: "Nephrotic syndrome causes — 'MFD-AM': Minimal change, FSGS, Diabetic nephropathy, Amyloidosis, Membranous nephropathy."
  },

  "Tubulointerstitial disease": {
    sections: [
      {
        heading: "Acute Tubular Necrosis (ATN)",
        bullets: [
          "Most common cause of intrinsic renal AKI; ischemic (hypotension, surgery) or nephrotoxic (aminoglycosides, contrast, myoglobin)",
          "Pathognomonic finding: muddy brown granular casts in urine",
          "FENa > 2%, BUN/Cr ratio < 20 (vs prerenal: FENa < 1%, BUN/Cr > 20)",
          "Three phases: initiation (injury) → maintenance (oliguria, ↑ BUN/Cr) → recovery (polyuria, hypokalemia)",
          "Recovery possible because tubular basement membrane remains intact for epithelial regeneration"
        ]
      },
      {
        heading: "Acute Interstitial Nephritis (AIN)",
        bullets: [
          "Drug-induced allergic reaction (type IV hypersensitivity): penicillins, cephalosporins, NSAIDs, sulfonamides, PPIs",
          "Classic triad: fever + rash + eosinophilia (not always present)",
          "Urinalysis: WBC casts, eosinophiluria, sterile pyuria, mild proteinuria",
          "Treatment: discontinue offending drug; steroids if no improvement in 5-7 days"
        ]
      },
      {
        heading: "Renal Papillary Necrosis",
        bullets: [
          "Ischemic necrosis of renal papillae → tissue sloughing → flank pain, hematuria",
          "NSAIDS mnemonic: NSAIDs, Sickle cell disease, Analgesic abuse, Infection (pyelonephritis), Diabetes, Systemic vasculitis",
          "CT: ring sign (calcification around papilla); IVP: 'clubbed' calyces",
          "Urine may contain tissue fragments from sloughed papillae"
        ]
      },
      {
        heading: "Specific Tubulointerstitial Conditions",
        bullets: [
          "Myeloma cast nephropathy: light chain (Bence Jones) casts + giant cell reaction in distal tubules; dipstick-negative proteinuria",
          "Lithium nephrotoxicity: nephrogenic DI (blocks AQP2); chronic use causes interstitial fibrosis",
          "Calcineurin inhibitor toxicity (cyclosporine/tacrolimus): striped fibrosis + arteriolar hyalinosis",
          "Uric acid nephropathy (tumor lysis): crystal precipitation in tubules → obstruction; prevent with rasburicase/allopurinol",
          "HUS: thrombotic microangiopathy → MAHA + thrombocytopenia + AKI (E. coli O157:H7 in children)"
        ]
      }
    ],
    table: {
      title: "Prerenal vs Intrinsic Renal AKI",
      headers: ["Feature","Prerenal","ATN (Intrinsic)"],
      rows: [
        ["FENa","< 1%","> 2%"],
        ["BUN/Cr ratio","> 20","< 20"],
        ["Urine Na⁺","< 20 mEq/L","> 40 mEq/L"],
        ["Urine osmolality","> 500 mOsm/kg","< 350 mOsm/kg"],
        ["Urine sediment","Bland / hyaline casts","Muddy brown granular casts"],
        ["Response to fluids","Improves","No improvement"]
      ]
    },
    mnemonic: "Papillary necrosis causes — 'NSAIDS': NSAIDs, Sickle cell, Analgesic nephropathy, Infection, Diabetes, Systemic vasculitis."
  },

  "Renal tumors": {
    sections: [
      {
        heading: "Renal Cell Carcinoma (RCC)",
        bullets: [
          "Most common primary renal malignancy in adults; peak age 50-70 years; male predominance",
          "Classic triad (< 10%): hematuria, flank pain, palpable mass",
          "Clear cell RCC (70-80%): VHL gene loss (chr 3p) → HIF activation → VEGF, EPO overexpression",
          "Papillary RCC: MET mutations (type 1); trisomy 7 and 17",
          "Chromophobe RCC: associated with Birt-Hogg-Dubé syndrome (FLCN gene)",
          "Invades renal vein → IVC; left-sided varicocele (does not decompress supine) = left renal vein obstruction"
        ]
      },
      {
        heading: "RCC Paraneoplastic Syndromes",
        bullets: [
          "Ectopic EPO → polycythemia (secondary)",
          "PTHrP → hypercalcemia",
          "Renin secretion → hypertension",
          "Stauffer syndrome: hepatic dysfunction without liver metastases (elevated ALP, transaminases)",
          "ACTH or prolactin production (rare)"
        ]
      },
      {
        heading: "Wilms Tumor (Nephroblastoma)",
        bullets: [
          "Most common renal malignancy in children (peak 2-5 years)",
          "Painless abdominal/flank mass; does NOT cross midline (unlike neuroblastoma)",
          "Triphasic histology: blastemal, epithelial, stromal components",
          "Anaplasia = unfavorable histology → chemoresistance, worse prognosis",
          "WAGR syndrome: 11p13 deletion (WT1 + PAX6) → Wilms, Aniridia, GU anomalies, Retardation",
          "Denys-Drash: WT1 missense mutation → Wilms, diffuse mesangial sclerosis, male pseudohermaphroditism",
          "Beckwith-Wiedemann: 11p15.5 → Wilms, macrosomia, macroglossia, omphalocele, hemihyperplasia"
        ]
      },
      {
        heading: "Other Renal Tumors",
        bullets: [
          "Oncocytoma: benign; central stellate scar; eosinophilic cells rich in mitochondria; no metastatic potential",
          "Angiomyolipoma: benign; fat + smooth muscle + vessels; associated with tuberous sclerosis; hemorrhage risk if > 4 cm",
          "Transitional cell carcinoma: renal pelvis/ureter/bladder; risk factors: smoking (#1), aniline dyes, cyclophosphamide",
          "Renal medullary carcinoma: young patients with sickle cell trait; aggressive; rhabdoid morphology"
        ]
      }
    ],
    table: {
      title: "Hereditary Renal Tumor Syndromes",
      headers: ["Syndrome","Gene/Chromosome","Renal Tumor","Other Features"],
      rows: [
        ["VHL","VHL (3p25)","Bilateral clear cell RCC","Hemangioblastomas, pheo, pancreatic cysts"],
        ["WAGR","WT1+PAX6 (11p13 del)","Wilms tumor","Aniridia, GU anomalies, retardation"],
        ["Denys-Drash","WT1 missense (11p13)","Wilms tumor","Mesangial sclerosis, pseudohermaphroditism"],
        ["Beckwith-Wiedemann","11p15.5","Wilms tumor","Macrosomia, macroglossia, omphalocele"],
        ["Tuberous sclerosis","TSC1/TSC2","Angiomyolipoma","Seizures, ash-leaf spots, cardiac rhabdomyoma"],
        ["Birt-Hogg-Dubé","FLCN","Chromophobe RCC/oncocytoma","Fibrofolliculomas, lung cysts"]
      ]
    },
    mnemonic: "RCC paraneoplastic — 'EPO-CaRe-Stauffer': Erythropoietin (polycythemia), Calcium (PTHrP), Renin (HTN), Stauffer syndrome (liver dysfunction)."
  },

  "Fluid & electrolyte disorders": {
    sections: [
      {
        heading: "Sodium Disorders",
        bullets: [
          "Hyponatremia: assess volume status → hypovolemic (renal vs extrarenal losses), euvolemic (SIADH, hypothyroid), hypervolemic (CHF, cirrhosis, nephrotic)",
          "SIADH: euvolemic hyponatremia, urine Osm > serum Osm, urine Na⁺ > 20; causes: CNS disease, lung disease, drugs (carbamazepine, SSRIs, cyclophosphamide)",
          "Treatment of hyponatremia: chronic asymptomatic → fluid restriction; acute/severe symptomatic → 3% hypertonic saline",
          "Correction rate: max 8-10 mEq/L per 24 hours to prevent osmotic demyelination syndrome (ODS/central pontine myelinolysis)",
          "Hypernatremia: always reflects free water deficit; causes: inadequate intake, diabetes insipidus, osmotic diuresis"
        ]
      },
      {
        heading: "Potassium Disorders",
        bullets: [
          "Hypokalemia causes: diuretics, vomiting/diarrhea, hyperaldosteronism, insulin, alkalosis (H⁺/K⁺ exchange)",
          "ECG: flattened T waves → U waves → ST depression → arrhythmias",
          "Refractory hypokalemia → check magnesium (Mg²⁺ blocks ROMK; low Mg²⁺ = K⁺ wasting)",
          "Hyperkalemia causes: CKD, K⁺-sparing diuretics, ACEi/ARBs, acidosis, rhabdomyolysis, tumor lysis",
          "ECG progression: peaked T waves → loss of P waves → widened QRS → sine wave → asystole/VFib",
          "Hyperkalemia treatment: 1) IV calcium (cardiac stabilization) → 2) insulin + glucose (shift) → 3) dialysis (removal)"
        ]
      },
      {
        heading: "Calcium Disorders",
        bullets: [
          "Hypercalcemia: primary hyperparathyroidism (#1 outpatient), malignancy (#1 inpatient — PTHrP, osteolytic metastases, 1,25-vit D)",
          "Symptoms: 'Stones, bones, groans, psychiatric overtones' — nephrolithiasis, bone pain, abdominal pain, confusion",
          "Treatment: IV NS hydration → loop diuretics (calciuresis) → bisphosphonates (osteoclast inhibition) → calcitonin (acute)",
          "Hypocalcemia: hypoparathyroidism (post-surgical), vitamin D deficiency, CKD, pancreatitis, hypomagnesemia",
          "Signs: Chvostek (facial twitch on tapping CN VII), Trousseau (carpopedal spasm with BP cuff inflation)",
          "Alkalosis → ↑ Ca²⁺ binding to albumin → ↓ ionized Ca²⁺ → tetany/paresthesias"
        ]
      },
      {
        heading: "Other Electrolyte Disorders",
        bullets: [
          "Hyperphosphatemia: CKD (↓ excretion), tumor lysis, rhabdomyolysis; treat with phosphate binders (sevelamer, calcium acetate)",
          "Hypophosphatemia: refeeding syndrome, alcoholism, vitamin D deficiency, Fanconi syndrome, hyperparathyroidism",
          "Hypomagnesemia: alcoholism, loop/thiazide diuretics, aminoglycosides, diarrhea → causes refractory hypokalemia and hypocalcemia",
          "Rhabdomyolysis electrolyte pattern: ↑ K⁺, ↑ PO₄, ↑ uric acid, ↓ Ca²⁺, ↑ CK → treat with aggressive IV NS"
        ]
      }
    ],
    table: {
      title: "Hyponatremia Workup by Volume Status",
      headers: ["Volume Status","Urine Na⁺","Common Causes","Treatment"],
      rows: [
        ["Hypovolemic","< 20 (extrarenal)","Diarrhea, vomiting, burns","Normal saline"],
        ["Hypovolemic","> 20 (renal)","Diuretics, salt-wasting nephropathy, AI","Normal saline"],
        ["Euvolemic","> 20","SIADH, hypothyroidism, cortisol deficiency","Fluid restriction ± tolvaptan"],
        ["Hypervolemic","< 20","CHF, cirrhosis, nephrotic syndrome","Fluid + Na⁺ restriction, diuretics"],
        ["Hypervolemic","> 20","Advanced CKD","Dialysis"]
      ]
    },
    mnemonic: "Hyperkalemia ECG progression — 'Peaked-Prolonged-widened-sine-dead': Peaked T waves → Prolonged PR → Widened QRS → Sine wave → Death (asystole/VFib)."
  }

};
