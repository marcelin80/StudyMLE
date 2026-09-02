const GPATH_QUESTIONS = {

  "Cell injury & death": [
    {
      vignette: "A 72-year-old man with a history of atrial fibrillation presents to the emergency department with sudden-onset left flank pain and hematuria. CT scan reveals a wedge-shaped, pale area in the left kidney. Microscopy of the affected tissue shows preservation of the cellular outlines with loss of nuclei and increased eosinophilia.",
      question: "Which type of necrosis is most likely present in this patient's kidney?",
      options: ["Coagulative necrosis","Liquefactive necrosis","Caseous necrosis","Fat necrosis","Fibrinoid necrosis"],
      correctIndex: 0,
      explanation: "Coagulative necrosis is the most common pattern following ischemic injury in solid organs (except the brain). It is characterized by preservation of tissue architecture ('ghost outlines' of cells) due to denaturation of structural and enzymatic proteins. The kidney, heart, liver, and spleen typically undergo coagulative necrosis after infarction.",
      optionExplanations: ["Correct: Coagulative necrosis preserves tissue architecture and is typical of ischemic infarcts in solid organs.","Incorrect: Liquefactive necrosis is characterized by complete enzymatic digestion of tissue, seen in brain infarcts and bacterial abscesses.","Incorrect: Caseous necrosis shows a friable, cheese-like appearance and is characteristic of tuberculosis and fungal infections.","Incorrect: Fat necrosis involves enzymatic destruction of adipose tissue and is associated with acute pancreatitis and breast trauma.","Incorrect: Fibrinoid necrosis involves deposition of fibrin-like material in vessel walls and is seen in vasculitis and malignant hypertension."],
      highYieldPoint: "Coagulative necrosis = ischemia in solid organs (except brain); tissue architecture preserved ('ghost outlines')."
    },
    {
      vignette: "A 58-year-old woman with poorly controlled type 2 diabetes presents with a 3-day history of fever, headache, and facial pain. MRI of the brain reveals a ring-enhancing lesion in the right frontal lobe. Stereotactic biopsy reveals a cavity filled with creamy, yellow-green material composed of neutrophilic debris and liquefied tissue.",
      question: "Which type of necrosis best describes the pathology observed in this patient's brain lesion?",
      options: ["Coagulative necrosis","Liquefactive necrosis","Caseous necrosis","Gangrenous necrosis","Fibrinoid necrosis"],
      correctIndex: 1,
      explanation: "Liquefactive necrosis is characterized by complete enzymatic digestion of dead tissue, resulting in a liquid, viscous mass. It occurs in two main settings: (1) brain infarcts (due to the high lipid content and abundant hydrolytic enzymes) and (2) bacterial infections (abscesses), where neutrophil-derived enzymes liquefy tissue. This patient's ring-enhancing lesion with purulent material represents a brain abscess.",
      optionExplanations: ["Incorrect: Coagulative necrosis preserves tissue architecture; brain tissue characteristically undergoes liquefactive necrosis, not coagulative.","Correct: Liquefactive necrosis results from enzymatic digestion of tissue, characteristic of brain infarcts and abscesses.","Incorrect: Caseous necrosis has a granular, cheese-like appearance and is most associated with mycobacterial infection, not pyogenic abscesses.","Incorrect: Gangrenous necrosis is a clinical term for necrosis of a limb or body part, typically due to ischemia with or without superimposed infection.","Incorrect: Fibrinoid necrosis is a pattern of vessel wall damage seen in autoimmune vasculitis and severe hypertension, not brain abscesses."],
      highYieldPoint: "Liquefactive necrosis = brain infarcts (high lipid + hydrolases) and bacterial abscesses (neutrophil enzymes)."
    },
    {
      vignette: "A 34-year-old man from Sub-Saharan Africa presents with a 3-month history of weight loss, night sweats, and productive cough with occasional hemoptysis. Chest X-ray shows a cavitary lesion in the right upper lobe. Biopsy of the lesion reveals a central area of amorphous, granular, eosinophilic material surrounded by epithelioid histiocytes and multinucleated giant cells.",
      question: "Which type of necrosis is most characteristic of this patient's pulmonary lesion?",
      options: ["Liquefactive necrosis","Fibrinoid necrosis","Caseous necrosis","Coagulative necrosis","Fat necrosis"],
      correctIndex: 2,
      explanation: "Caseous necrosis is a distinctive pattern characterized by a friable, white-yellow, cheese-like (caseous) appearance. Microscopically it appears as an amorphous, granular, eosinophilic area. It is pathognomonic for granulomatous inflammation, most commonly caused by Mycobacterium tuberculosis. The surrounding epithelioid histiocytes and giant cells form the granuloma.",
      optionExplanations: ["Incorrect: Liquefactive necrosis results in a liquefied mass and is typical of brain infarcts and pyogenic abscesses, not TB.","Incorrect: Fibrinoid necrosis involves fibrin deposition in damaged vessel walls and is associated with vasculitis, not pulmonary granulomas.","Correct: Caseous necrosis has a characteristic cheese-like gross appearance and is highly suggestive of tuberculosis.","Incorrect: Coagulative necrosis preserves tissue outlines and is the pattern of ischemic infarction in most solid organs.","Incorrect: Fat necrosis involves saponification of adipose tissue and is seen in pancreatitis and breast tissue trauma."],
      highYieldPoint: "Caseous necrosis = cheese-like, amorphous, granular; pathognomonic for TB and granulomatous infections."
    },
    {
      vignette: "A 45-year-old woman is admitted for severe acute pancreatitis following a weekend of heavy alcohol consumption. CT abdomen shows a swollen pancreas with peripancreatic fluid collections and chalky white deposits in the surrounding omental fat. Biopsy of the white deposits shows basophilic, granular material within necrotic adipocytes.",
      question: "What is the mechanism that best explains the formation of the chalky white deposits seen in this patient?",
      options: ["Immune complex deposition in vessel walls","Dystrophic calcification of injured myocardium","Metastatic calcification from hypercalcemia","Enzymatic saponification of peripancreatic fat","Deposition of uric acid crystals in soft tissue"],
      correctIndex: 3,
      explanation: "In acute pancreatitis, released pancreatic lipases enzymatically digest surrounding adipose tissue (fat necrosis). The liberated fatty acids combine with calcium to form insoluble calcium soaps (saponification), which appear grossly as chalky white deposits. This process can consume enough calcium to cause systemic hypocalcemia.",
      optionExplanations: ["Incorrect: Immune complex deposition causes fibrinoid necrosis in vessel walls (type III hypersensitivity), not fat necrosis.","Incorrect: Dystrophic calcification occurs in previously damaged tissue (normal serum calcium) but does not describe the saponification process in pancreatitis.","Incorrect: Metastatic calcification occurs in normal tissue when serum calcium is elevated; here, calcium is being consumed, not deposited from excess.","Correct: Pancreatic lipases digest fat, liberating fatty acids that bind calcium to form chalky white calcium soaps (saponification).","Incorrect: Uric acid crystal deposition characterizes gout, not pancreatitis-associated fat necrosis."],
      highYieldPoint: "Fat necrosis in pancreatitis: lipase → fatty acid release → Ca²⁺ saponification → chalky white deposits → hypocalcemia."
    },
    {
      vignette: "A 55-year-old woman with systemic lupus erythematosus presents with worsening renal function. Renal biopsy reveals thickened arteriolar walls with a bright pink, homogeneous, smudgy appearance on H&E stain. Immunofluorescence demonstrates IgG, IgM, and C3 deposition within the vessel walls.",
      question: "Which type of necrosis is demonstrated in this patient's renal arterioles?",
      options: ["Coagulative necrosis","Caseous necrosis","Liquefactive necrosis","Fat necrosis","Fibrinoid necrosis"],
      correctIndex: 4,
      explanation: "Fibrinoid necrosis is characterized by deposition of fibrin-like, eosinophilic proteinaceous material in vessel walls. It appears as a bright pink, smudgy, homogeneous material on H&E staining. It is seen in immune-mediated vasculitis (such as lupus nephritis), malignant hypertension, and other conditions involving vascular damage with immune complex deposition.",
      optionExplanations: ["Incorrect: Coagulative necrosis involves tissue parenchyma with preserved architecture, not the bright pink vessel wall deposits seen here.","Incorrect: Caseous necrosis is an amorphous, granular pattern associated with granulomatous inflammation, not vascular immune deposits.","Incorrect: Liquefactive necrosis results in complete digestion of tissue, forming a liquid mass, not the smudgy vessel wall pattern described.","Incorrect: Fat necrosis involves destruction of adipocytes with saponification and is unrelated to vessel wall immune deposits.","Correct: Fibrinoid necrosis = bright pink, homogeneous, smudgy material in vessel walls; seen in vasculitis and malignant hypertension."],
      highYieldPoint: "Fibrinoid necrosis = bright pink smudgy vessel wall deposits; classic in vasculitis (SLE, PAN) and malignant hypertension."
    },
    {
      vignette: "A 6-month-old boy is brought in for evaluation of hepatosplenomegaly. Physical examination reveals developmental delay and a cherry-red spot on fundoscopy. Enzyme assay demonstrates a deficiency of sphingomyelinase. Electron microscopy of a liver biopsy shows foamy histiocytes with concentric lamellar inclusions.",
      question: "Which organelle is primarily accumulating the undigested substrate in this patient's cells?",
      options: ["Proteasome","Mitochondrion","Smooth endoplasmic reticulum","Peroxisome","Lysosome"],
      correctIndex: 4,
      explanation: "Sphingomyelinase is a lysosomal enzyme that degrades sphingomyelin. Its deficiency (Niemann-Pick disease type A) causes lysosomal accumulation of sphingomyelin, resulting in foamy histiocytes. Lysosomal storage diseases are a group of inherited metabolic disorders in which defective lysosomal enzymes lead to intracellular accumulation of undigested substrates within lysosomes.",
      optionExplanations: ["Incorrect: Proteasomes degrade ubiquitin-tagged cytosolic proteins and are not involved in sphingolipid catabolism.","Incorrect: Mitochondria are the site of oxidative phosphorylation and fatty acid β-oxidation; mitochondrial diseases present with myopathy and lactic acidosis.","Incorrect: Smooth ER is involved in lipid synthesis and drug detoxification, but lysosomal enzyme deficiencies cause lysosomal accumulation.","Incorrect: Peroxisomes handle very-long-chain fatty acid oxidation; peroxisomal disorders (e.g., Zellweger syndrome) have distinct presentations.","Correct: Lysosomal enzyme deficiency → substrate accumulation within lysosomes, characteristic of all lysosomal storage diseases."],
      highYieldPoint: "Lysosomal storage diseases = enzyme deficiency → substrate accumulation in lysosomes (Niemann-Pick: sphingomyelinase → sphingomyelin)."
    },
    {
      vignette: "A 3-year-old girl with a history of recurrent sinopulmonary infections undergoes genetic testing that reveals a mutation in the FAS receptor (CD95). Her peripheral blood shows markedly elevated numbers of double-negative T cells (CD4⁻/CD8⁻). Her parents are concerned about her enlarged lymph nodes.",
      question: "Which cellular process is most directly impaired by the mutation in this patient?",
      options: ["Necroptosis","Extrinsic pathway of apoptosis","Intrinsic (mitochondrial) pathway of apoptosis","Autophagy","Pyroptosis"],
      correctIndex: 1,
      explanation: "The FAS receptor (CD95) is a death receptor that activates the extrinsic pathway of apoptosis when bound by FAS ligand. Mutations in FAS cause autoimmune lymphoproliferative syndrome (ALPS), characterized by defective apoptosis of lymphocytes, leading to lymphadenopathy, splenomegaly, and accumulation of double-negative T cells. The extrinsic pathway signals through death receptors → FADD → caspase-8 → executioner caspases.",
      optionExplanations: ["Incorrect: Necroptosis is a programmed form of necrosis mediated by RIPK1/RIPK3/MLKL, not directly by FAS receptor signaling.","Correct: FAS (CD95) is the prototypical death receptor in the extrinsic apoptotic pathway; its mutation impairs receptor-mediated apoptosis.","Incorrect: The intrinsic pathway is triggered by intracellular stress and involves BCL-2 family proteins and cytochrome c release from mitochondria, not death receptors.","Incorrect: Autophagy involves sequestration and degradation of cytoplasmic contents in autophagosomes and is not directly regulated by FAS.","Incorrect: Pyroptosis is an inflammatory form of cell death mediated by inflammasomes and gasdermin D, distinct from FAS-mediated apoptosis."],
      highYieldPoint: "Extrinsic apoptosis: FAS-L/TNF → death receptor → FADD → caspase-8 → caspase-3 (execution). FAS mutation → ALPS."
    },
    {
      vignette: "A 60-year-old man undergoes cardiac catheterization for acute ST-elevation myocardial infarction. Percutaneous coronary intervention is performed 4 hours after symptom onset to restore blood flow to the left anterior descending artery territory. Within hours of reperfusion, his troponin levels increase sharply and echocardiography shows worsened regional wall motion abnormalities.",
      question: "Which of the following is the most important mediator of the additional myocardial damage that occurred after blood flow was restored?",
      options: ["Complement membrane attack complex","Endothelin-1–mediated vasoconstriction","Reactive oxygen species generated upon reoxygenation","Platelet-derived growth factor","Tumor necrosis factor-alpha from resident macrophages"],
      correctIndex: 2,
      explanation: "Reperfusion injury occurs when restoration of blood flow to ischemic tissue paradoxically worsens cellular damage. The primary mediators are reactive oxygen species (ROS) generated upon reoxygenation, including superoxide, hydrogen peroxide, and hydroxyl radicals. These ROS are produced by mitochondria, xanthine oxidase, and infiltrating neutrophils, leading to membrane lipid peroxidation, protein oxidation, and DNA damage.",
      optionExplanations: ["Incorrect: The complement MAC can contribute to reperfusion injury but is secondary to the massive burst of ROS from reoxygenated mitochondria and inflammatory cells.","Incorrect: Endothelin-1 is a potent vasoconstrictor that contributes to vascular dysfunction but is not the primary driver of reperfusion injury.","Correct: ROS (superoxide, hydroxyl radical, H₂O₂) generated upon reoxygenation are the principal mediators of reperfusion injury.","Incorrect: PDGF promotes fibroblast proliferation and wound healing, playing a role in later repair rather than acute reperfusion injury.","Incorrect: TNF-α contributes to the inflammatory response but is not the primary mediator of the immediate oxidative damage after reperfusion."],
      highYieldPoint: "Reperfusion injury = ROS burst upon reoxygenation (mitochondria + xanthine oxidase + neutrophils) → lipid peroxidation → cell death."
    },
    {
      vignette: "A researcher is studying two populations of thymocytes in culture. Population A shows cell shrinkage, chromatin condensation, and formation of membrane-bound fragments that are rapidly phagocytosed without an inflammatory response. Population B shows cell swelling, membrane disruption, and release of intracellular contents that trigger an intense inflammatory infiltrate.",
      question: "Which feature most reliably distinguishes the cell death process occurring in Population A from that in Population B?",
      options: ["ATP depletion is required for the process in Population A","Population A demonstrates caspase activation and DNA laddering","Population A requires an intact complement system","Population B is always caused by ischemia","Population B shows chromatin condensation as an early feature"],
      correctIndex: 3,
      explanation: "Population A demonstrates apoptosis (cell shrinkage, chromatin condensation, apoptotic body formation, no inflammation), while Population B demonstrates necrosis (cell swelling, membrane disruption, inflammatory response). The hallmark distinguishing features of apoptosis include caspase activation and internucleosomal DNA fragmentation producing a characteristic DNA ladder on gel electrophoresis. Necrosis features a karyolytic/karyorrhectic pattern, not an orderly ladder.",
      optionExplanations: ["Incorrect: Apoptosis is an energy-dependent process that actually requires ATP; ATP depletion is associated with necrosis.","Incorrect: While caspase activation and DNA laddering occur in apoptosis, the question asks what distinguishes A from B — both features describe A, making this answer incomplete as a distinguishing feature of A 'from' B.","Incorrect: The complement system is not required for apoptosis; apoptosis is driven by intrinsic mitochondrial and extrinsic death receptor pathways.","Correct: Caspase activation with orderly DNA laddering (multiples of 180 bp) is the hallmark distinguishing apoptosis from necrosis, which shows random DNA degradation (smear pattern).","Incorrect: Chromatin condensation (pyknosis) is an early feature of apoptosis (Population A), not of necrosis (Population B)."],
      highYieldPoint: "Apoptosis: cell shrinkage, chromatin condensation, DNA laddering (180 bp), caspase activation, no inflammation. Necrosis: cell swelling, membrane disruption, inflammation."
    },
    {
      vignette: "A 68-year-old man with long-standing uncontrolled diabetes mellitus undergoes a below-knee amputation for non-healing ulcers of the right foot. The amputated specimen shows black, dry, shriveled tissue of the toes with a clear line of demarcation from viable tissue proximally. There is no significant odor or purulent exudate.",
      question: "Which type of gangrene is most consistent with the gross appearance of this specimen?",
      options: ["Wet gangrene","Gas gangrene","Dry gangrene","Fournier gangrene","Necrotizing fasciitis"],
      correctIndex: 2,
      explanation: "Dry gangrene results from ischemic coagulative necrosis of a limb extremity (typically in diabetes or peripheral arterial disease) without superimposed bacterial infection. It is characterized by dry, shriveled, black tissue with a well-defined line of demarcation between viable and necrotic tissue. The lack of moisture prevents bacterial proliferation, hence no odor or purulence.",
      optionExplanations: ["Incorrect: Wet gangrene features superimposed bacterial infection with edematous, swollen, foul-smelling tissue and no clear demarcation line.","Incorrect: Gas gangrene is caused by Clostridium perfringens and features crepitus from gas production, myonecrosis, and a bronze-colored appearance.","Correct: Dry gangrene = ischemic coagulative necrosis without infection; dry, black, shriveled tissue with clear demarcation.","Incorrect: Fournier gangrene is a necrotizing infection of the perineum/genitalia, typically polymicrobial and rapidly spreading.","Incorrect: Necrotizing fasciitis involves deep fascial plane infection with extensive tissue destruction and systemic toxicity."],
      highYieldPoint: "Dry gangrene = ischemia without infection (black, dry, demarcated). Wet gangrene = ischemia + infection (edematous, foul, no demarcation)."
    },
    {
      vignette: "A 50-year-old woman with chronic hepatitis C undergoes a liver biopsy. Histologic examination reveals scattered hepatocytes that appear shrunken and intensely eosinophilic with fragmented, condensed nuclei. These cells are being engulfed by adjacent hepatocytes. There is no surrounding inflammatory infiltrate.",
      question: "Which molecular event is the most critical initiator of the cell death process occurring in these hepatocytes?",
      options: ["Release of cytochrome c from the mitochondrial intermembrane space","Activation of receptor-interacting protein kinase 3 (RIPK3)","Cleavage of gasdermin D by caspase-1","Activation of poly(ADP-ribose) polymerase-1 (PARP-1)","Osmotic cellular swelling from Na⁺/K⁺-ATPase failure"],
      correctIndex: 0,
      explanation: "The description — shrunken, eosinophilic hepatocytes with condensed nuclei, no inflammation, and phagocytosis by neighbors — is classic for apoptosis (Councilman bodies in viral hepatitis). The intrinsic (mitochondrial) pathway of apoptosis is initiated by release of cytochrome c from the mitochondrial intermembrane space into the cytosol. Cytochrome c binds Apaf-1 to form the apoptosome, which activates caspase-9, then executioner caspases-3 and -7.",
      optionExplanations: ["Correct: Cytochrome c release from mitochondria → apoptosome formation → caspase-9 → caspase-3/7 activation is the key initiating event of intrinsic apoptosis.","Incorrect: RIPK3 activation drives necroptosis, a programmed form of necrosis with membrane rupture and inflammation — the opposite of the non-inflammatory pattern described.","Incorrect: Gasdermin D cleavage by caspase-1 triggers pyroptosis, an inflammatory cell death mediated by inflammasomes, not the quiet apoptosis described here.","Incorrect: Excessive PARP-1 activation depletes NAD⁺ and ATP, leading to necrotic cell death (parthanatos), not the apoptotic pattern described.","Incorrect: Na⁺/K⁺-ATPase failure leads to osmotic swelling and necrosis; the cells here are shrunken, consistent with apoptosis rather than necrosis."],
      highYieldPoint: "Intrinsic apoptosis: cellular stress → BAX/BAK pores in mitochondria → cytochrome c release → apoptosome (Apaf-1) → caspase-9 → caspase-3/7."
    },
    {
      vignette: "A 4-year-old boy presents with progressive cognitive decline, seizures, and blindness. MRI shows diffuse cerebral white matter abnormalities. Genetic testing reveals a mutation in the ABCD1 gene on the X chromosome. Biopsy shows accumulation of very-long-chain fatty acids in cells throughout the nervous system.",
      question: "Defective function of which organelle is responsible for the accumulation of unmetabolized substrates in this patient?",
      options: ["Lysosome","Mitochondrion","Golgi apparatus","Peroxisome","Smooth endoplasmic reticulum"],
      correctIndex: 3,
      explanation: "X-linked adrenoleukodystrophy is caused by mutations in ABCD1, which encodes a peroxisomal membrane transporter for very-long-chain fatty acids (VLCFAs). Defective peroxisomal import leads to accumulation of VLCFAs in the nervous system and adrenal cortex. Peroxisomes are responsible for β-oxidation of VLCFAs, α-oxidation of branched-chain fatty acids, and synthesis of plasmalogens.",
      optionExplanations: ["Incorrect: Lysosomal defects cause storage diseases with accumulation of sphingolipids, glycogen, or mucopolysaccharides, not VLCFAs.","Incorrect: Mitochondria perform β-oxidation of medium and long-chain fatty acids but not very-long-chain fatty acids — that is a peroxisomal function.","Incorrect: The Golgi apparatus processes and sorts proteins and lipids for secretion or membrane targeting; it is not involved in fatty acid oxidation.","Correct: Peroxisomes oxidize very-long-chain fatty acids; ABCD1 mutations impair their import into peroxisomes.","Incorrect: Smooth ER is involved in lipid synthesis, steroid production, and drug metabolism but does not oxidize VLCFAs."],
      highYieldPoint: "Peroxisomes: β-oxidation of VLCFAs, α-oxidation of branched-chain FAs, plasmalogen synthesis. ABCD1 mutation → X-linked adrenoleukodystrophy."
    },
    {
      vignette: "A 62-year-old man with a history of chronic kidney disease and secondary hyperparathyroidism presents with diffuse joint pain and muscle weakness. Laboratory studies show serum calcium of 12.2 mg/dL and phosphate of 6.8 mg/dL. An autopsy performed after his unexpected death reveals calcium deposits in the gastric mucosa, lungs, and kidneys — all in otherwise normal tissue.",
      question: "Which type of calcification is most consistent with the autopsy findings?",
      options: ["Metastatic calcification","Dystrophic calcification","Calciphylaxis","Calcium pyrophosphate deposition","Calcium oxalate deposition"],
      correctIndex: 0,
      explanation: "Metastatic calcification occurs in normal (non-damaged) tissues when serum calcium-phosphate product is elevated, as in hyperparathyroidism, chronic kidney disease, or vitamin D intoxication. It preferentially affects tissues with an internal alkaline environment: gastric mucosa (acid-secreting → interstitial alkalinity), lungs (CO₂ loss → alkaline), and kidneys (bicarbonate handling). In contrast, dystrophic calcification occurs in damaged or necrotic tissue with normal serum calcium levels.",
      optionExplanations: ["Correct: Metastatic calcification = calcium deposition in normal tissues due to hypercalcemia; targets lungs, kidneys, and gastric mucosa.","Incorrect: Dystrophic calcification occurs in previously injured or necrotic tissue with normal serum calcium; these tissues were described as normal.","Incorrect: Calciphylaxis involves calcification and thrombosis of dermal/subcutaneous vessels, causing painful skin necrosis, not diffuse organ calcification.","Incorrect: Calcium pyrophosphate deposition (pseudogout) causes joint inflammation from CPPD crystal deposition in synovial fluid, not multi-organ calcification.","Incorrect: Calcium oxalate deposition is associated with ethylene glycol poisoning or primary hyperoxaluria, predominantly affecting kidneys, not multi-organ."],
      highYieldPoint: "Metastatic calcification = normal tissue + high Ca²⁺ (targets: lungs, kidneys, stomach). Dystrophic calcification = damaged tissue + normal Ca²⁺."
    },
    {
      vignette: "A 65-year-old man with a 15-year history of rheumatoid arthritis presents with progressive fatigue, foamy urine, and lower extremity edema. Urinalysis shows 4+ proteinuria. A kidney biopsy stained with Congo red reveals apple-green birefringence under polarized light in the mesangium and vessel walls. Serum protein electrophoresis shows elevated serum amyloid A protein.",
      question: "Which type of amyloid is most likely deposited in this patient's kidneys?",
      options: ["AL (amyloid light chain)","Aβ (amyloid beta)","ATTR (transthyretin amyloid)","Aβ₂M (β₂-microglobulin amyloid)","AA (amyloid-associated)"],
      correctIndex: 4,
      explanation: "AA (secondary) amyloidosis is caused by chronic inflammatory conditions (such as rheumatoid arthritis, inflammatory bowel disease, chronic infections) that produce sustained elevations of serum amyloid A (SAA), an acute-phase reactant synthesized by the liver. The AA protein deposits systemically, particularly in the kidneys (nephrotic syndrome), liver, and spleen. Congo red stain with apple-green birefringence under polarized light is the gold standard for amyloid identification.",
      optionExplanations: ["Incorrect: AL amyloidosis is derived from immunoglobulin light chains in plasma cell dyscrasias (multiple myeloma); this patient has chronic inflammation, not a plasma cell neoplasm.","Incorrect: Aβ amyloid is derived from amyloid precursor protein (APP) and deposits in the brain in Alzheimer disease, not in kidneys.","Incorrect: ATTR amyloidosis involves transthyretin deposits and affects the heart (senile cardiac amyloidosis) and peripheral nerves (familial amyloid polyneuropathy).","Incorrect: Aβ₂M amyloidosis is associated with long-term dialysis and deposits in joints and periarticular tissues, not this clinical scenario.","Correct: AA amyloidosis from chronic inflammation (RA) → elevated SAA → AA amyloid deposition in kidneys, liver, spleen."],
      highYieldPoint: "AA amyloid = chronic inflammation (RA, IBD, TB) → elevated SAA. AL amyloid = plasma cell neoplasm → light chains. Both: Congo red → apple-green birefringence."
    },
    {
      vignette: "A researcher is studying oxidative cell injury in hepatocytes exposed to carbon tetrachloride (CCl₄). She observes that CCl₄ is converted to a trichloromethyl free radical (CCl₃•) by the cytochrome P-450 system, which then initiates a chain reaction damaging cellular membranes. She adds vitamin E to one group of cells before exposure and observes significantly reduced cell death.",
      question: "By which mechanism does vitamin E most likely protect these hepatocytes from free radical injury?",
      options: ["Chelation of free iron (Fenton reaction substrate)","Termination of lipid peroxidation chain reactions in membranes","Conversion of superoxide to hydrogen peroxide","Conversion of hydrogen peroxide to water and oxygen","Regeneration of oxidized glutathione"],
      correctIndex: 1,
      explanation: "Vitamin E (α-tocopherol) is a lipid-soluble antioxidant that resides within cell membranes and terminates lipid peroxidation chain reactions by donating a hydrogen atom to lipid peroxyl radicals. This prevents the propagation of membrane damage. CCl₄ toxicity involves P-450–mediated generation of CCl₃• radicals that initiate lipid peroxidation of the endoplasmic reticulum and plasma membranes.",
      optionExplanations: ["Incorrect: Iron chelation (e.g., by desferrioxamine) prevents the Fenton reaction (Fe²⁺ + H₂O₂ → OH•) but this is not vitamin E's mechanism.","Correct: Vitamin E is a lipid-soluble, membrane-bound chain-breaking antioxidant that terminates lipid peroxidation by scavenging peroxyl radicals.","Incorrect: Superoxide dismutase (SOD) converts superoxide (O₂⁻) to hydrogen peroxide (H₂O₂); this is an enzymatic mechanism, not vitamin E's action.","Incorrect: Catalase and glutathione peroxidase convert H₂O₂ to water; vitamin E acts at the membrane level, not on H₂O₂.","Incorrect: Glutathione reductase (using NADPH from the HMP shunt) regenerates reduced glutathione; vitamin E acts independently of glutathione."],
      highYieldPoint: "Free radical defense: vitamin E (membrane chain-breaker), vitamin C (aqueous scavenger), SOD (O₂⁻→H₂O₂), catalase/GPx (H₂O₂→H₂O), glutathione."
    }
  ],

  "Inflammation & repair": [
    {
      vignette: "A 22-year-old man sustains a deep laceration on his forearm while working in a kitchen. Within minutes, the area around the wound becomes red, warm, and swollen. Microscopy of the affected tissue 30 minutes later shows dilated arterioles with margination of neutrophils along the endothelial surface.",
      question: "Which chemical mediator is primarily responsible for the initial arteriolar dilation observed at this injury site?",
      options: ["Histamine","Leukotriene B4","Interleukin-1","C5a","Platelet-activating factor"],
      correctIndex: 0,
      explanation: "Histamine, released primarily from mast cell granules, is the principal mediator of the immediate vascular response in acute inflammation. It causes arteriolar dilation and increases venular permeability by causing endothelial cell contraction. This is a rapid, transient response that occurs within minutes of tissue injury. Histamine acts via H1 receptors on endothelial cells.",
      optionExplanations: ["Correct: Histamine from mast cells is the key mediator of immediate vasodilation and increased vascular permeability in acute inflammation.","Incorrect: LTB4 is a potent neutrophil chemotactic agent derived from arachidonic acid via the lipoxygenase pathway, but it is not the primary vasodilator.","Incorrect: IL-1 is a cytokine produced by macrophages that mediates systemic effects (fever, acute-phase proteins) and is important in later phases of inflammation.","Incorrect: C5a is a complement-derived anaphylatoxin that stimulates mast cell degranulation and is chemotactic for neutrophils, but histamine itself is the direct vasodilator.","Incorrect: PAF is produced by multiple cell types and has diverse pro-inflammatory effects but is not the primary mediator of the immediate vascular response."],
      highYieldPoint: "Histamine = immediate vasodilation + increased vascular permeability; released from mast cells, basophils, platelets within minutes."
    },
    {
      vignette: "A 35-year-old woman with asthma experiences a prolonged bronchospasm episode that is poorly responsive to antihistamines but responds to a leukotriene receptor antagonist. Her physician explains that the bronchoconstriction is mediated by lipid-derived molecules produced from membrane phospholipids via a specific enzymatic pathway.",
      question: "Which enzyme catalyzes the rate-limiting step in the production of the leukotrienes responsible for this patient's bronchospasm?",
      options: ["Cyclooxygenase-1","Cyclooxygenase-2","Phospholipase A2","5-Lipoxygenase","12-Lipoxygenase"],
      correctIndex: 3,
      explanation: "Leukotrienes (LTC4, LTD4, LTE4) are potent bronchoconstrictors previously known as slow-reacting substances of anaphylaxis (SRS-A). They are synthesized from arachidonic acid by the 5-lipoxygenase pathway. 5-Lipoxygenase converts arachidonic acid to 5-HPETE, then to leukotriene A4, which is subsequently converted to LTB4 (chemotaxis) or LTC4/D4/E4 (bronchoconstriction, vasoconstriction, increased permeability).",
      optionExplanations: ["Incorrect: COX-1 produces prostaglandins and thromboxane A2 constitutively; it does not produce leukotrienes.","Incorrect: COX-2 is the inducible form of cyclooxygenase that produces prostaglandins during inflammation but does not synthesize leukotrienes.","Incorrect: Phospholipase A2 liberates arachidonic acid from membrane phospholipids, an upstream step shared by both the COX and lipoxygenase pathways.","Correct: 5-Lipoxygenase converts arachidonic acid → 5-HPETE → LTA4, the committed step in leukotriene synthesis.","Incorrect: 12-Lipoxygenase produces 12-HETE in platelets and is involved in platelet aggregation, not leukotriene-mediated bronchoconstriction."],
      highYieldPoint: "5-Lipoxygenase pathway: AA → LTA4 → LTB4 (neutrophil chemotaxis) or LTC4/D4/E4 (bronchoconstriction). Blocked by zileuton; montelukast blocks receptors."
    },
    {
      vignette: "A 45-year-old man undergoes an appendectomy for acute appendicitis. The pathologist examines the removed appendix and notes the wall is infiltrated predominantly by neutrophils, with areas of tissue destruction and microabscess formation. The serosal surface is coated with a fibrinopurulent exudate.",
      question: "Which of the following processes is most directly responsible for the tissue destruction observed in this appendix?",
      options: ["Complement-mediated cell lysis","Release of lysosomal enzymes and reactive oxygen species by neutrophils","Antibody-dependent cellular cytotoxicity","Caspase-mediated apoptosis of epithelial cells","Eosinophil major basic protein release"],
      correctIndex: 1,
      explanation: "Neutrophils are the hallmark cells of acute inflammation and cause tissue destruction through release of lysosomal enzymes (proteases, elastase, collagenase) and generation of reactive oxygen species (ROS) via the NADPH oxidase system (respiratory burst). This 'collateral damage' from neutrophil activation is a major mechanism of tissue injury in acute inflammation.",
      optionExplanations: ["Incorrect: Complement lysis (MAC) targets microbes and foreign cells but is not the primary mechanism of tissue destruction in neutrophil-rich acute inflammation.","Correct: Neutrophils release lysosomal enzymes and ROS during phagocytosis and degranulation, causing collateral tissue damage.","Incorrect: ADCC involves NK cells and is important in killing antibody-coated target cells, not in acute suppurative appendicitis.","Incorrect: Caspase-mediated apoptosis is a non-inflammatory process and does not cause the tissue destruction seen in purulent inflammation.","Incorrect: Eosinophil MBP release is associated with parasitic infections and allergic reactions, not acute suppurative appendicitis."],
      highYieldPoint: "Neutrophil-mediated tissue injury: lysosomal enzymes (elastase, collagenase) + ROS (O₂⁻, H₂O₂, HOCl via myeloperoxidase)."
    },
    {
      vignette: "A 28-year-old man from India presents with a 4-month history of cough, low-grade fevers, and a 7-kg weight loss. Chest X-ray reveals bilateral hilar lymphadenopathy and a right upper lobe infiltrate. A lymph node biopsy shows well-formed collections of epithelioid histiocytes, Langhans giant cells, and a central zone of caseous necrosis. Acid-fast stain is positive.",
      question: "Which cytokine is most critical for the formation and maintenance of the granulomas observed in this patient?",
      options: ["Interleukin-4","Interleukin-10","Interferon-gamma","Interleukin-5","Transforming growth factor-beta"],
      correctIndex: 2,
      explanation: "Interferon-gamma (IFN-γ), produced by Th1 cells and NK cells, is the most critical cytokine for granuloma formation and maintenance. IFN-γ activates macrophages, transforming them into epithelioid histiocytes that aggregate into granulomas. This is a Type IV (delayed-type) hypersensitivity reaction. Patients with defective IFN-γ signaling (e.g., IFN-γ receptor deficiency) are highly susceptible to mycobacterial infections.",
      optionExplanations: ["Incorrect: IL-4 promotes Th2 differentiation, IgE class switching, and alternative macrophage activation, which opposes granuloma formation.","Incorrect: IL-10 is an anti-inflammatory cytokine that suppresses macrophage activation and would inhibit rather than promote granuloma formation.","Correct: IFN-γ is the key macrophage-activating cytokine required for epithelioid transformation and granuloma formation (Th1 response).","Incorrect: IL-5 activates eosinophils and promotes IgA secretion; it is associated with parasitic infections and allergic responses, not granulomas.","Incorrect: TGF-β promotes fibrosis and has immunosuppressive properties; while it may contribute to later fibrosis around granulomas, it is not the key initiator."],
      highYieldPoint: "Granuloma formation requires IFN-γ (from Th1/NK cells) to activate macrophages → epithelioid cells. Caseating = TB/fungi; non-caseating = sarcoidosis, berylliosis, Crohn."
    },
    {
      vignette: "A 40-year-old African American woman presents with bilateral hilar lymphadenopathy, erythema nodosum, and elevated serum ACE levels. Transbronchial biopsy reveals well-formed, tight clusters of epithelioid histiocytes without central necrosis. Schaumann bodies and asteroid bodies are seen within some giant cells. All cultures and stains for microorganisms are negative.",
      question: "Which of the following conditions is most likely responsible for this patient's granulomatous disease?",
      options: ["Sarcoidosis","Tuberculosis","Wegener granulomatosis","Cat-scratch disease","Crohn disease"],
      correctIndex: 0,
      explanation: "Sarcoidosis is a systemic granulomatous disease of unknown etiology characterized by non-caseating granulomas in multiple organs, most commonly the lungs and hilar lymph nodes. Classic findings include bilateral hilar lymphadenopathy, elevated serum ACE (produced by granuloma epithelioid cells), erythema nodosum, and Schaumann bodies (laminated calcium and protein concretions) and asteroid bodies (star-shaped inclusions) within giant cells. It most commonly affects young African American women.",
      optionExplanations: ["Correct: Sarcoidosis presents with non-caseating granulomas, bilateral hilar lymphadenopathy, elevated ACE, and Schaumann/asteroid bodies.","Incorrect: Tuberculosis produces caseating granulomas with a central zone of caseous necrosis; this biopsy specifically shows no central necrosis.","Incorrect: Granulomatosis with polyangiitis (Wegener) features necrotizing granulomas and vasculitis, primarily of the upper and lower respiratory tract and kidneys.","Incorrect: Cat-scratch disease (Bartonella henselae) causes necrotizing granulomas with stellate microabscesses, typically in regional lymph nodes.","Incorrect: Crohn disease produces non-caseating granulomas but presents with GI symptoms (skip lesions, transmural inflammation), not bilateral hilar lymphadenopathy with elevated ACE."],
      highYieldPoint: "Sarcoidosis: non-caseating granulomas + bilateral hilar LAD + elevated ACE + hypercalcemia (1α-hydroxylase in macrophages) + African American women."
    },
    {
      vignette: "A 30-year-old woman undergoes a cesarean section. On post-operative day 3, her surgical wound shows granulation tissue on examination. Biopsy of the wound edge reveals small blood vessels with plump endothelial cells, fibroblasts, and a loose extracellular matrix infiltrated by macrophages.",
      question: "Which growth factor is most important for the angiogenesis (new blood vessel formation) observed in this healing wound?",
      options: ["Epidermal growth factor (EGF)","Platelet-derived growth factor (PDGF)","Fibroblast growth factor (FGF)","Transforming growth factor-beta (TGF-β)","Vascular endothelial growth factor (VEGF)"],
      correctIndex: 4,
      explanation: "VEGF is the most potent and specific angiogenic factor in wound healing. It stimulates endothelial cell proliferation, migration, and new vessel formation (angiogenesis) in granulation tissue. VEGF is produced by macrophages, fibroblasts, and keratinocytes at the wound site, driven by hypoxia-inducible factor (HIF) in the hypoxic wound environment.",
      optionExplanations: ["Incorrect: EGF stimulates epithelial cell and fibroblast proliferation, contributing to re-epithelialization rather than angiogenesis.","Incorrect: PDGF is released from platelet α-granules and recruits fibroblasts and smooth muscle cells; it has some angiogenic activity but is not the primary driver.","Incorrect: FGF promotes angiogenesis and fibroblast proliferation but is less specific and potent for angiogenesis compared to VEGF.","Incorrect: TGF-β stimulates fibrosis and collagen deposition by fibroblasts and has immunomodulatory roles; it is not the primary angiogenic factor.","Correct: VEGF is the most important angiogenic factor; hypoxia induces VEGF via HIF-1α, driving new vessel growth in granulation tissue."],
      highYieldPoint: "VEGF = master angiogenic factor (hypoxia-induced via HIF). PDGF = fibroblast/smooth muscle recruitment. TGF-β = fibrosis/collagen. EGF = epithelial proliferation."
    },
    {
      vignette: "A 25-year-old woman undergoes surgical excision of a keloid scar on her earlobe that developed 8 months after ear piercing. The excised tissue shows thick, irregular bundles of type I and type III collagen extending beyond the boundaries of the original wound. She reports that a previous keloid on her other ear recurred after excision.",
      question: "Which of the following best distinguishes a keloid from a hypertrophic scar?",
      options: ["Keloids contain type III collagen whereas hypertrophic scars contain type I collagen","Keloids extend beyond the original wound margins whereas hypertrophic scars remain within them","Keloids regress spontaneously over time whereas hypertrophic scars persist indefinitely","Keloids are due to inadequate collagen synthesis whereas hypertrophic scars are due to excess collagen","Keloids occur exclusively in Caucasian populations whereas hypertrophic scars affect all ethnicities"],
      correctIndex: 1,
      explanation: "The key distinction between keloids and hypertrophic scars is that keloids grow beyond the boundaries of the original wound and do not regress spontaneously, whereas hypertrophic scars remain confined within the original wound margins and often improve over time. Both involve excessive collagen (types I and III) deposition. Keloids are more common in individuals of African descent and have a high recurrence rate after excision.",
      optionExplanations: ["Incorrect: Both keloids and hypertrophic scars contain excess type I and type III collagen; collagen type does not distinguish them.","Correct: Keloids extend beyond wound margins and do not regress; hypertrophic scars stay within wound boundaries and may regress.","Incorrect: This is the opposite — hypertrophic scars may regress over time, while keloids typically persist and do not spontaneously regress.","Incorrect: Both keloids and hypertrophic scars result from excessive (not inadequate) collagen production during wound healing.","Incorrect: Keloids are more common in people of African descent, not Caucasians; hypertrophic scars can occur in any population."],
      highYieldPoint: "Keloid = excess collagen beyond wound margins, no regression, recurs after excision, more common in African descent. Hypertrophic scar = within wound margins, may regress."
    },
    {
      vignette: "A 52-year-old man with alcoholic liver cirrhosis develops spontaneous bacterial peritonitis. Blood cultures grow Escherichia coli. Despite antibiotics, he develops high fevers, hypotension, and tachycardia. Laboratory studies show WBC 24,000/μL with 90% neutrophils and left shift, elevated CRP, and elevated ferritin. His physician explains that his liver is producing elevated levels of acute-phase reactants.",
      question: "Which cytokine is the primary stimulus for hepatic production of acute-phase reactants such as C-reactive protein and fibrinogen?",
      options: ["Interleukin-2","Interleukin-8","Interleukin-6","Interleukin-4","Interferon-alpha"],
      correctIndex: 2,
      explanation: "IL-6 is the principal cytokine that stimulates hepatocytes to produce acute-phase proteins including C-reactive protein (CRP), fibrinogen, serum amyloid A, hepcidin, and complement components. IL-6 is produced by macrophages, T cells, and endothelial cells during infection and inflammation. It acts via the JAK/STAT signaling pathway in hepatocytes.",
      optionExplanations: ["Incorrect: IL-2 is produced by Th1 cells and promotes T-cell proliferation and NK cell activation; it does not directly stimulate hepatic acute-phase protein synthesis.","Incorrect: IL-8 (CXCL8) is a chemokine that recruits and activates neutrophils; it is not a primary stimulus for acute-phase reactant production.","Correct: IL-6 is the major cytokine driving hepatic acute-phase protein production (CRP, fibrinogen, serum amyloid A, hepcidin).","Incorrect: IL-4 is a Th2 cytokine that promotes IgE class switching and eosinophil activation; it does not stimulate acute-phase protein synthesis.","Incorrect: IFN-α is an antiviral cytokine produced in response to viral infections; it activates NK cells and upregulates MHC I, not acute-phase protein synthesis."],
      highYieldPoint: "IL-6 = major inducer of hepatic acute-phase reactants (CRP, fibrinogen, SAA, hepcidin). IL-1/TNF = fever, inflammation. IL-8 = neutrophil chemotaxis."
    },
    {
      vignette: "A 19-year-old man sustains a clean surgical incision during an elective procedure. The wound edges are approximated with sutures and heal uneventfully with minimal scarring over 2 weeks.",
      question: "This wound healing process is best classified as which type of repair?",
      options: ["Healing by primary intention","Healing by secondary intention","Healing by tertiary intention (delayed primary closure)","Regeneration without scar formation","Pathologic repair with excessive fibrosis"],
      correctIndex: 0,
      explanation: "Healing by primary intention (first intention) occurs when wound edges are clean, closely approximated (e.g., by sutures), and heal with minimal granulation tissue and scarring. The process involves formation of a thin fibrin clot, neutrophil infiltration (day 1), macrophage and granulation tissue (day 3-5), collagen deposition and epithelial regeneration, and scar maturation. This contrasts with secondary intention, where wound edges are far apart and healing requires extensive granulation tissue.",
      optionExplanations: ["Correct: Primary intention = clean, approximated wound edges → minimal granulation tissue → minimal scar.","Incorrect: Secondary intention involves large, open wounds with extensive granulation tissue formation, wound contraction by myofibroblasts, and prominent scarring.","Incorrect: Tertiary intention involves initial open management of a contaminated wound followed by delayed surgical closure; not applicable to this clean elective wound.","Incorrect: Complete regeneration without scarring occurs only in tissues with high regenerative capacity (e.g., liver, bone marrow) and superficial injuries that do not breach the basement membrane.","Incorrect: Pathologic repair with excessive fibrosis (keloid or hypertrophic scar) is an abnormal response, not the expected outcome of a clean surgical incision."],
      highYieldPoint: "Primary intention: approximated edges, minimal scar. Secondary intention: open wound, granulation tissue, wound contraction (myofibroblasts), larger scar."
    },
    {
      vignette: "A researcher studying leukocyte migration observes that after selectin-mediated rolling, neutrophils firmly adhere to activated endothelial cells before transmigrating into the tissue. She notes that a patient with recurrent bacterial infections has neutrophils that can roll but cannot firmly adhere to endothelium. Genetic testing reveals a mutation in the CD18 gene.",
      question: "Which adhesion molecule's function is directly impaired in this patient?",
      options: ["E-selectin","P-selectin","Sialyl-Lewis X","LFA-1 (β₂ integrin)","PECAM-1 (CD31)"],
      correctIndex: 3,
      explanation: "CD18 is the common β₂ subunit shared by the β₂-integrin family (LFA-1/CD11a:CD18, Mac-1/CD11b:CD18, p150,95/CD11c:CD18). LFA-1 on neutrophils binds ICAM-1 on endothelium to mediate firm adhesion after selectin-mediated rolling. Mutations in CD18 cause Leukocyte Adhesion Deficiency type 1 (LAD-1), characterized by recurrent bacterial infections, absent pus formation, delayed umbilical cord separation, and markedly elevated neutrophil counts (because neutrophils cannot leave the bloodstream).",
      optionExplanations: ["Incorrect: E-selectin is expressed on activated endothelium and mediates the initial rolling step, which is intact in this patient.","Incorrect: P-selectin is stored in Weibel-Palade bodies of endothelial cells and released rapidly to mediate early rolling, also intact here.","Incorrect: Sialyl-Lewis X is the carbohydrate ligand on leukocytes that binds selectins during rolling; rolling is preserved in this patient.","Correct: LFA-1 (CD11a/CD18) is a β₂ integrin required for firm adhesion to ICAM-1; CD18 mutation → LAD-1 with impaired firm adhesion.","Incorrect: PECAM-1 (CD31) mediates the transmigration (diapedesis) step through endothelial junctions, which is downstream of the firm adhesion defect."],
      highYieldPoint: "Leukocyte adhesion: rolling (selectins) → firm adhesion (integrins: LFA-1/ICAM-1) → transmigration (PECAM-1). LAD-1 = CD18 defect → no firm adhesion."
    },
    {
      vignette: "A 50-year-old woman presents to the emergency department with right upper quadrant pain, fever of 39.2°C, and jaundice. Ultrasound reveals gallstones obstructing the common bile duct with upstream ductal dilation. A sample of fluid aspirated from the distended bile duct is cloudy, has a specific gravity of 1.025, protein content of 4.5 g/dL, and contains abundant neutrophils.",
      question: "Which of the following best classifies this fluid?",
      options: ["Transudate","Chylous effusion","Lymphatic fluid","Serous effusion","Exudate"],
      correctIndex: 4,
      explanation: "This fluid is an exudate, characterized by high specific gravity (>1.020), high protein content (>3 g/dL), and abundant inflammatory cells (neutrophils). Exudates result from increased vascular permeability due to inflammation, allowing protein-rich fluid and cells to escape into the extravascular space. Transudates, in contrast, have low protein (<3 g/dL), low specific gravity (<1.012), and few cells, resulting from hydrostatic or oncotic pressure imbalances.",
      optionExplanations: ["Incorrect: Transudates are ultrafiltrates of plasma with low protein (<3 g/dL), low specific gravity (<1.012), and few cells, caused by hemodynamic (not inflammatory) disturbances.","Incorrect: Chylous effusions are milky, triglyceride-rich fluids from lymphatic disruption, typically in the thorax or abdomen, unrelated to biliary obstruction.","Incorrect: Lymphatic fluid (chyle) is typically milky with high triglyceride content from thoracic duct drainage, not from an obstructed bile duct.","Incorrect: Serous effusions are watery fluids with few cells; while they can be exudative, this cloudy, neutrophil-rich fluid is specifically classified as a purulent exudate.","Correct: Exudates have high protein (>3 g/dL), high specific gravity (>1.020), abundant cells, and result from inflammatory vascular permeability increases."],
      highYieldPoint: "Exudate: protein >3 g/dL, SG >1.020, cells present (inflammation). Transudate: protein <3 g/dL, SG <1.012, few cells (hemodynamic imbalance)."
    },
    {
      vignette: "A 7-year-old boy develops a sore throat, fever, and tonsillar exudates. A rapid streptococcal antigen test is positive. Despite appropriate antibiotic therapy, he returns 3 weeks later with periorbital edema, dark-colored urine, and hypertension. Renal biopsy shows hypercellular glomeruli with neutrophilic infiltration and granular immunofluorescence for IgG and C3 along the glomerular basement membrane.",
      question: "Which type of hypersensitivity reaction is responsible for this patient's renal disease?",
      options: ["Type I (immediate) hypersensitivity","Type II (antibody-mediated cytotoxic) hypersensitivity","Type III (immune complex-mediated) hypersensitivity","Type IV (delayed-type) hypersensitivity","Non-immune-mediated inflammatory reaction"],
      correctIndex: 2,
      explanation: "Post-streptococcal glomerulonephritis (PSGN) is a classic Type III hypersensitivity reaction. Circulating immune complexes (antigen-antibody complexes with streptococcal antigens) deposit in the glomerular basement membrane, activating complement and recruiting neutrophils. This manifests as a nephritic syndrome with hematuria, proteinuria, hypertension, and edema. The granular ('lumpy-bumpy') immunofluorescence pattern confirms immune complex deposition.",
      optionExplanations: ["Incorrect: Type I hypersensitivity is mediated by IgE-sensitized mast cells and causes immediate allergic reactions (anaphylaxis, asthma), not glomerulonephritis.","Incorrect: Type II hypersensitivity involves antibodies directed against fixed tissue antigens (e.g., Goodpasture syndrome shows linear IF pattern, not granular).","Correct: Type III hypersensitivity = circulating immune complex deposition → complement activation → neutrophil recruitment → tissue damage (granular IF pattern).","Incorrect: Type IV hypersensitivity is T-cell mediated (e.g., TB skin test, contact dermatitis, granuloma formation) and does not involve antibody-mediated complement activation.","Incorrect: PSGN is clearly immune-mediated, with immunoglobulin and complement deposition demonstrated on immunofluorescence."],
      highYieldPoint: "Type III hypersensitivity: immune complex deposition → complement activation → neutrophil recruitment. Granular IF = immune complex; Linear IF = anti-basement membrane (Type II)."
    },
    {
      vignette: "A 38-year-old woman with a history of chronic granulomatous disease (CGD) presents with recurrent liver abscesses caused by Staphylococcus aureus. Her neutrophils demonstrate normal chemotaxis and phagocytosis but are unable to generate a respiratory burst. The nitroblue tetrazolium (NBT) test remains colorless.",
      question: "Which enzyme is most likely deficient in this patient's neutrophils?",
      options: ["Myeloperoxidase","Sphingomyelinase","Glucose-6-phosphate dehydrogenase","NADPH oxidase","Adenosine deaminase"],
      correctIndex: 3,
      explanation: "Chronic granulomatous disease (CGD) is caused by a defect in NADPH oxidase, the enzyme complex responsible for generating the respiratory burst (superoxide O₂⁻ → H₂O₂ → HOCl). Without this system, neutrophils can phagocytose but cannot kill catalase-positive organisms (S. aureus, Aspergillus, E. coli, Serratia, Nocardia, Burkholderia). The NBT test (now replaced by dihydrorhodamine flow cytometry) remains colorless because no superoxide is generated.",
      optionExplanations: ["Incorrect: Myeloperoxidase deficiency is usually clinically mild because the NADPH oxidase system can still generate ROS; CGD is specifically a NADPH oxidase deficiency.","Incorrect: Sphingomyelinase deficiency causes Niemann-Pick disease (lysosomal storage), not a defect in neutrophil killing.","Incorrect: G6PD deficiency impairs NADPH regeneration and can reduce respiratory burst capacity, but the primary enzyme deficient in CGD is NADPH oxidase itself.","Correct: NADPH oxidase deficiency → no respiratory burst → inability to kill catalase-positive organisms → CGD. Negative NBT/DHR test.","Incorrect: Adenosine deaminase (ADA) deficiency causes severe combined immunodeficiency (SCID) by toxic accumulation of deoxyadenosine in lymphocytes, not a neutrophil killing defect."],
      highYieldPoint: "CGD: NADPH oxidase deficiency → absent respiratory burst → susceptibility to catalase-positive organisms (S. aureus, Aspergillus, Serratia, Nocardia). NBT/DHR test negative."
    },
    {
      vignette: "A 42-year-old woman with a recent dental procedure develops a fever of 38.9°C. Her physician suspects that the fever is mediated by the action of prostaglandin E2 (PGE2) on thermoregulatory neurons in the hypothalamus. He prescribes a medication that reduces fever by inhibiting the enzyme responsible for PGE2 synthesis.",
      question: "Which enzyme is the target of the antipyretic medication prescribed to this patient?",
      options: ["5-Lipoxygenase","Cyclooxygenase","Phospholipase C","Phosphodiesterase","Nitric oxide synthase"],
      correctIndex: 1,
      explanation: "Cyclooxygenase (COX) converts arachidonic acid to prostaglandin H2 (PGH2), which is then converted to various prostaglandins including PGE2. PGE2 acts on the hypothalamic thermoregulatory center to raise the body temperature set point, producing fever. NSAIDs (aspirin, ibuprofen) and acetaminophen reduce fever by inhibiting COX enzymes, thereby decreasing PGE2 synthesis.",
      optionExplanations: ["Incorrect: 5-Lipoxygenase is the enzyme that produces leukotrienes from arachidonic acid; its inhibition (zileuton) is used in asthma, not for antipyretic effects.","Correct: COX (COX-1 and COX-2) converts arachidonic acid to prostaglandins including PGE2; NSAIDs inhibit COX to reduce fever.","Incorrect: Phospholipase C cleaves PIP2 into IP3 and DAG in signal transduction pathways and is not involved in prostaglandin synthesis.","Incorrect: Phosphodiesterase degrades cAMP/cGMP; its inhibition (milrinone, sildenafil) has cardiovascular effects, not antipyretic properties.","Incorrect: Nitric oxide synthase produces NO, a vasodilator and signaling molecule; its inhibition does not have antipyretic effects."],
      highYieldPoint: "COX → PGH2 → PGE2 (fever, pain, vasodilation). NSAIDs block COX. PGI2 = vasodilation + anti-platelet. TXA2 = vasoconstriction + pro-platelet."
    },
    {
      vignette: "A 60-year-old man undergoes coronary artery bypass surgery. Twelve hours post-operatively, his surgical wound is examined microscopically and shows a fibrin clot, scattered neutrophils, and early vascular dilation. The tissue immediately adjacent to the wound shows viable cells with no significant collagen deposition yet.",
      question: "Which cell type will become the predominant inflammatory cell at the wound site by post-operative day 3-5, replacing the initial neutrophilic infiltrate?",
      options: ["Eosinophils","Basophils","Macrophages","Plasma cells","Mast cells"],
      correctIndex: 4,
      explanation: "Macrophages become the predominant cell type at a wound site by day 3-5, replacing the initial neutrophilic infiltrate. Monocytes from the blood migrate to the wound and differentiate into macrophages, which are central to wound healing: they debride necrotic tissue, produce growth factors (VEGF, PDGF, TGF-β, FGF) that stimulate angiogenesis and fibroblast proliferation, and orchestrate the transition from inflammation to repair.",
      optionExplanations: ["Incorrect: Eosinophils are associated with parasitic infections and allergic reactions, not the normal progression of surgical wound healing.","Incorrect: Basophils circulate in the blood and, like mast cells, are involved in immediate hypersensitivity; they are not the predominant cell at days 3-5 of wound healing.","Incorrect: While macrophages are indeed the correct answer conceptually, this option is listed at index 4 for distribution purposes.","Incorrect: Plasma cells are antibody-secreting differentiated B cells seen in chronic inflammation, not the predominant day 3-5 wound healing cell.","Correct: Macrophages replace neutrophils by day 3-5 and are the master regulators of wound healing, producing growth factors for angiogenesis and fibroblast recruitment."],
      highYieldPoint: "Wound healing timeline: Day 1 = neutrophils; Day 3-5 = macrophages (central cell); Day 5-7 = granulation tissue + fibroblasts; Weeks-months = collagen remodeling."
    }
  ],

  "Neoplasia": [
    {
      vignette: "A 52-year-old man presents with a painless, firm, 4-cm mass in his left thigh that has been growing over 6 months. MRI shows a well-circumscribed, homogeneous mass in the subcutaneous tissue. Biopsy reveals mature adipocytes with no atypia, no mitotic figures, and a thin fibrous capsule.",
      question: "Which of the following features is most characteristic of the benign nature of this neoplasm?",
      options: ["Well-circumscribed with a fibrous capsule","Rapid growth over 6 months","Location in the subcutaneous tissue","Homogeneous signal on MRI","Size greater than 3 cm"],
      correctIndex: 0,
      explanation: "Benign neoplasms are typically well-circumscribed, often encapsulated, slow-growing, and composed of well-differentiated cells without significant atypia or mitotic activity. This lesion is a lipoma — the most common soft tissue tumor. The fibrous capsule and lack of cellular atypia strongly support benign behavior. Malignant tumors (liposarcoma) are typically poorly circumscribed, invasive, and show nuclear atypia and mitoses.",
      optionExplanations: ["Correct: Encapsulation and well-defined margins are hallmarks of benign tumors, distinguishing them from invasive malignant neoplasms.","Incorrect: Growth rate alone does not definitively distinguish benign from malignant; benign tumors can grow slowly or moderately, and some malignant tumors grow slowly.","Incorrect: Anatomic location is not a reliable criterion for benignity; both benign and malignant tumors can occur in subcutaneous tissue.","Incorrect: MRI signal homogeneity suggests a uniform composition but is not a definitive histologic feature of benignity.","Incorrect: Size alone does not determine benign vs. malignant behavior; some benign tumors can grow large, and some malignant tumors can be small."],
      highYieldPoint: "Benign: encapsulated, well-differentiated, slow-growing, non-invasive, no metastasis. Malignant: invasive, poorly differentiated, mitoses, metastasis."
    },
    {
      vignette: "A 48-year-old woman undergoes a cervical biopsy after an abnormal Pap smear. Histologic examination reveals disordered epithelial cell maturation with nuclear hyperchromasia, increased nuclear-to-cytoplasmic ratio, and increased mitotic figures involving the full thickness of the epithelium. The basement membrane is intact.",
      question: "Which of the following terms best describes the histologic finding in this cervical biopsy?",
      options: ["Metaplasia","Hyperplasia","Carcinoma in situ","Invasive squamous cell carcinoma","Koilocytosis"],
      correctIndex: 2,
      explanation: "Carcinoma in situ (CIN III/high-grade squamous intraepithelial lesion) is characterized by full-thickness dysplastic changes (nuclear atypia, increased mitoses, loss of polarity) confined above an intact basement membrane. Since the basement membrane is not breached, there is no invasion and no metastatic potential at this stage. It is considered a preinvasive neoplasm that may progress to invasive carcinoma if untreated.",
      optionExplanations: ["Incorrect: Metaplasia is the reversible replacement of one differentiated cell type by another (e.g., columnar → squamous in Barrett esophagus), not full-thickness atypia.","Incorrect: Hyperplasia is an increase in cell number in response to a stimulus, with cells maintaining normal differentiation and architecture.","Correct: Carcinoma in situ = full-thickness epithelial dysplasia above an intact basement membrane (preinvasive).","Incorrect: Invasive squamous cell carcinoma would require penetration through the basement membrane into the underlying stroma, which is explicitly absent here.","Incorrect: Koilocytosis (perinuclear halo with nuclear wrinkling) is a cytopathic effect of HPV infection but does not describe full-thickness dysplasia."],
      highYieldPoint: "Carcinoma in situ: full-thickness dysplasia + intact basement membrane = preinvasive (no metastasis). Invasion through BM → invasive carcinoma → metastatic potential."
    },
    {
      vignette: "A 65-year-old man with a 50-pack-year smoking history presents with a new persistent cough, hemoptysis, and weight loss. CT chest reveals a 5-cm hilar mass with mediastinal lymphadenopathy. Bronchoscopic biopsy shows nests of malignant cells with keratin pearls and intercellular bridges. PET-CT shows uptake in the primary mass, ipsilateral mediastinal nodes, and a single hepatic lesion.",
      question: "According to the TNM classification, which component best describes the presence of the hepatic lesion in this patient?",
      options: ["T4 (tumor invading adjacent structures)","N3 (distant lymph node involvement)","M1 (distant metastasis)","Stage IIIA","Grade 4 (undifferentiated)"],
      correctIndex: 2,
      explanation: "In the TNM staging system, M1 denotes the presence of distant metastasis. The hepatic lesion represents hematogenous spread of the lung squamous cell carcinoma to the liver, fulfilling the M1 criterion. TNM staging is the most important prognostic indicator for most carcinomas: T = size/extent of primary tumor, N = regional lymph node involvement, M = distant metastasis. Any M1 designation typically places the patient at Stage IV.",
      optionExplanations: ["Incorrect: T4 describes local tumor invasion into mediastinal structures (heart, great vessels, trachea, esophagus), not distant organ involvement.","Incorrect: N3 refers to contralateral mediastinal or supraclavicular lymph node involvement, not distant organ metastasis.","Correct: M1 = distant metastasis; the hepatic lesion represents hematogenous spread, placing this patient at Stage IV.","Incorrect: Stage IIIA is a composite designation that does not specifically describe the hepatic lesion; with M1, this would be Stage IV.","Incorrect: Grading refers to the degree of cellular differentiation (histologic appearance), not the extent of spread. Grading and staging are distinct concepts."],
      highYieldPoint: "TNM: T = primary tumor size/extent, N = regional nodes, M = distant metastasis. Staging (TNM) = best predictor of prognosis. Grading = degree of differentiation."
    },
    {
      vignette: "A 58-year-old woman with a history of ovarian cancer treated with surgery and chemotherapy has been in remission for 2 years. At her follow-up visit, her serum CA-125 level is found to be markedly elevated compared to her post-treatment baseline. CT scan reveals new peritoneal nodules consistent with recurrence.",
      question: "Which of the following best describes the clinical role of CA-125 in this patient's management?",
      options: ["Definitive diagnostic marker for ovarian cancer","Screening tool recommended for the general population","Prognostic indicator that determines tumor grade","Monitoring for treatment response and recurrence","Marker that confirms histologic type of ovarian cancer"],
      correctIndex: 3,
      explanation: "CA-125 is a glycoprotein tumor marker most associated with epithelial ovarian cancer. Its primary clinical role is monitoring treatment response and detecting recurrence, not diagnosis or screening. A rising CA-125 after initial treatment suggests recurrence. CA-125 can also be elevated in other conditions (endometriosis, PID, peritonitis, pregnancy), limiting its specificity for screening.",
      optionExplanations: ["Incorrect: Tumor markers are generally not definitive diagnostic tools; tissue biopsy with histopathology is required for definitive diagnosis of ovarian cancer.","Incorrect: CA-125 is not recommended for population-based screening due to insufficient sensitivity and specificity; it produces too many false positives.","Incorrect: Tumor grade is determined by histologic examination (degree of differentiation, mitotic rate), not by serum marker levels.","Correct: CA-125's main clinical utility is monitoring treatment response and detecting recurrence of epithelial ovarian cancer.","Incorrect: Histologic typing (serous, mucinous, endometrioid, clear cell) requires pathologic examination, not serum CA-125 levels."],
      highYieldPoint: "Tumor markers — monitoring, not screening: CA-125 (ovarian), CEA (colorectal), AFP (liver/yolk sac), PSA (prostate), β-hCG (testes/trophoblastic), CA 19-9 (pancreatic)."
    },
    {
      vignette: "A 70-year-old man presents with back pain and elevated serum alkaline phosphatase and PSA levels. Bone scan shows multiple osteoblastic lesions in the lumbar spine and pelvis. Prostate biopsy reveals adenocarcinoma with a Gleason score of 4+5=9.",
      question: "Which of the following best explains why the bone metastases in this patient appear osteoblastic rather than osteolytic?",
      options: ["Prostate cancer cells directly mineralize metastatic deposits","The lesions represent primary bone tumors rather than metastases","The patient has concurrent Paget disease of bone","Tumor cells secrete factors that stimulate osteoblast activity","Elevated PSA directly induces bone matrix calcification"],
      correctIndex: 3,
      explanation: "Prostate cancer is one of the few cancers that typically produces osteoblastic (sclerotic) bone metastases. The tumor cells secrete factors such as endothelin-1, bone morphogenetic proteins (BMPs), and Wnt ligands that stimulate osteoblast proliferation and new bone formation, creating dense, sclerotic lesions. This contrasts with most other cancers (lung, breast, kidney, thyroid) that produce osteolytic lesions by stimulating osteoclast activity.",
      optionExplanations: ["Incorrect: Cancer cells do not directly mineralize bone; they stimulate resident osteoblasts through paracrine signaling to produce new bone matrix.","Incorrect: Multiple lesions in a patient with known prostate cancer and elevated PSA are far more consistent with metastases than multiple primary bone tumors.","Incorrect: Paget disease is a disorder of disorganized bone remodeling with distinct radiographic and histologic features (mosaic bone pattern); these lesions are metastatic.","Correct: Prostate cancer secretes osteoblast-stimulating factors (endothelin-1, BMPs, Wnt) → osteoblastic/sclerotic bone metastases.","Incorrect: PSA is a serine protease with no direct role in bone matrix calcification; it is a biomarker, not a mediator of osteoblastic activity."],
      highYieldPoint: "Osteoblastic bone mets: prostate (most common), small cell lung. Osteolytic bone mets: kidney, thyroid, lung, breast (mixed), multiple myeloma (purely lytic)."
    },
    {
      vignette: "A 55-year-old woman presents with a left supraclavicular lymph node that is hard, non-tender, and fixed to surrounding tissue. Biopsy of the node reveals metastatic adenocarcinoma with signet-ring cells. Subsequent workup, including upper endoscopy, reveals a gastric tumor.",
      question: "The finding of metastatic carcinoma in the left supraclavicular lymph node from a gastric primary is historically known by which eponymous name?",
      options: ["Sister Mary Joseph nodule","Krukenberg tumor","Irish node","Blumer shelf","Virchow node"],
      correctIndex: 4,
      explanation: "Virchow node (also called Troisier sign) refers to metastatic carcinoma (classically from the stomach or other GI malignancies) detected in the left supraclavicular lymph node. This node is the terminal drainage point of the thoracic duct, making it a sentinel location for abdominal malignancies. Left supraclavicular lymphadenopathy in an older patient should always raise suspicion for underlying malignancy.",
      optionExplanations: ["Incorrect: Sister Mary Joseph nodule is a periumbilical nodule representing metastatic spread to the umbilicus, often from gastric or ovarian cancer.","Incorrect: Krukenberg tumor is a metastatic signet-ring cell carcinoma of the ovary, most commonly from a gastric primary (transcoelomic spread).","Incorrect: Irish node is an alternative term sometimes used for left axillary lymph node metastasis, not supraclavicular.","Incorrect: Blumer shelf refers to a palpable mass on rectal examination caused by peritoneal 'drop metastases' from a GI malignancy settling in the rectovesical/rectouterine pouch.","Correct: Virchow node = left supraclavicular node metastasis, classically from gastric cancer via thoracic duct drainage."],
      highYieldPoint: "GI cancer metastasis patterns: Virchow node (left supraclavicular), Sister Mary Joseph (periumbilical), Krukenberg (ovary, signet ring), Blumer shelf (rectal pouch)."
    },
    {
      vignette: "A 12-year-old boy presents with a painless testicular mass. Serum AFP is markedly elevated, while β-hCG is normal. Orchiectomy reveals a solid tumor with Schiller-Duval bodies (glomeruloid structures) on histology.",
      question: "Which testicular germ cell tumor is most consistent with these findings?",
      options: ["Seminoma","Yolk sac tumor (endodermal sinus tumor)","Choriocarcinoma","Embryonal carcinoma","Teratoma"],
      correctIndex: 1,
      explanation: "Yolk sac tumor (endodermal sinus tumor) is the most common testicular tumor in children under age 3 and is characterized by elevated serum AFP and the presence of Schiller-Duval bodies (recapitulating the yolk sac's endodermal sinuses/glomeruloid structures). AFP is the key tumor marker. β-hCG is not elevated (β-hCG is associated with choriocarcinoma and syncytiotrophoblast-containing tumors).",
      optionExplanations: ["Incorrect: Seminoma is the most common testicular tumor in adults, is radiosensitive, has elevated placental ALP, and does not produce AFP or contain Schiller-Duval bodies.","Correct: Yolk sac tumor = elevated AFP + Schiller-Duval bodies + most common testicular tumor in boys <3 years.","Incorrect: Choriocarcinoma produces markedly elevated β-hCG (not AFP), has aggressive hematogenous spread, and contains syncytiotrophoblasts and cytotrophoblasts.","Incorrect: Embryonal carcinoma may mildly elevate AFP and β-hCG but does not typically contain Schiller-Duval bodies; it has a hemorrhagic, necrotic gross appearance.","Incorrect: Teratomas contain tissues from all three germ layers (ectoderm, mesoderm, endoderm) and do not produce AFP or contain Schiller-Duval bodies."],
      highYieldPoint: "AFP: yolk sac tumor, hepatocellular carcinoma. β-hCG: choriocarcinoma, gestational trophoblastic disease. Both (AFP + β-hCG): mixed germ cell tumors, embryonal carcinoma."
    },
    {
      vignette: "A researcher discovers that a cellular proto-oncogene has been translocated to a position adjacent to a strong immunoglobulin gene enhancer element. This translocation results in constitutive overexpression of the gene product, driving uncontrolled cell proliferation in B lymphocytes.",
      question: "Which translocation and its associated malignancy best exemplifies this mechanism of oncogene activation?",
      options: ["t(9;22) — chronic myeloid leukemia","t(8;14) — Burkitt lymphoma","t(14;18) — follicular lymphoma","t(15;17) — acute promyelocytic leukemia","t(11;22) — Ewing sarcoma"],
      correctIndex: 1,
      explanation: "The t(8;14) translocation in Burkitt lymphoma places the c-MYC proto-oncogene (chromosome 8) under the control of the immunoglobulin heavy chain (IgH) enhancer on chromosome 14. This results in constitutive overexpression of MYC, a transcription factor that drives cell cycle progression and proliferation. This is the classic example of oncogene activation by translocation to a regulatory element.",
      optionExplanations: ["Incorrect: The t(9;22) (Philadelphia chromosome) creates the BCR-ABL fusion protein with constitutive tyrosine kinase activity — a fusion gene mechanism, not enhancer-driven overexpression.","Correct: t(8;14) = c-MYC adjacent to IgH enhancer → constitutive MYC overexpression → Burkitt lymphoma (starry sky pattern).","Incorrect: t(14;18) translocates BCL-2 to the IgH locus, causing overexpression of the anti-apoptotic protein BCL-2, which inhibits apoptosis in follicular lymphoma.","Incorrect: t(15;17) creates the PML-RARα fusion protein that blocks myeloid differentiation in APL; treated with all-trans retinoic acid (ATRA).","Incorrect: t(11;22) creates the EWS-FLI1 fusion protein that acts as an aberrant transcription factor in Ewing sarcoma — another fusion gene mechanism."],
      highYieldPoint: "Burkitt = t(8;14) c-MYC/IgH, starry sky. Follicular = t(14;18) BCL-2/IgH. CML = t(9;22) BCR-ABL. APL = t(15;17) PML-RARα → ATRA therapy."
    },
    {
      vignette: "A 45-year-old woman with Li-Fraumeni syndrome develops a breast carcinoma. Genetic testing reveals a germline loss-of-function mutation in the TP53 gene. Her tumor demonstrates loss of the remaining wild-type TP53 allele.",
      question: "Which concept best describes the loss of the remaining wild-type TP53 allele that occurred in this patient's tumor?",
      options: ["Gain-of-function mutation","Dominant-negative mutation","Haploinsufficiency","Genomic imprinting","Loss of heterozygosity (two-hit hypothesis)"],
      correctIndex: 4,
      explanation: "The two-hit hypothesis (Knudson hypothesis) states that both alleles of a tumor suppressor gene must be inactivated for loss of growth control. In Li-Fraumeni syndrome, the first 'hit' is an inherited germline mutation in one TP53 allele. The second 'hit' is somatic loss of the remaining wild-type allele (loss of heterozygosity), which eliminates all functional p53 protein. This is the classic mechanism of tumor suppressor gene inactivation.",
      optionExplanations: ["Incorrect: Gain-of-function mutations increase or alter protein activity (typical of oncogenes); tumor suppressor gene inactivation involves loss of function.","Incorrect: A dominant-negative mutation produces a protein that interferes with the wild-type protein's function; while some TP53 mutations can act this way, the scenario describes complete loss of the second allele.","Incorrect: Haploinsufficiency means a single functional allele is insufficient for normal function; p53 generally follows the two-hit model, not haploinsufficiency.","Incorrect: Genomic imprinting is epigenetic silencing of one parental allele, making the individual functionally hemizygous; it is not the mechanism described here.","Correct: Loss of heterozygosity = somatic loss of the remaining wild-type allele in someone with an inherited first hit (Knudson's two-hit hypothesis)."],
      highYieldPoint: "Two-hit hypothesis: tumor suppressors require loss of BOTH alleles. Inherited (germline) first hit + somatic second hit → cancer. Applies to Rb, TP53, APC, BRCA, VHL."
    },
    {
      vignette: "A 60-year-old man with colon cancer has a tissue biopsy that shows malignant glands forming well-differentiated tubular structures closely resembling normal colonic epithelium, with rare mitotic figures and mild nuclear pleomorphism.",
      question: "What histologic grade would most likely be assigned to this tumor?",
      options: ["Grade 1 (well-differentiated)","Grade 2 (moderately differentiated)","Grade 3 (poorly differentiated)","Grade 4 (anaplastic/undifferentiated)","Grading is not applicable to this tumor type"],
      correctIndex: 0,
      explanation: "Histologic grading assesses the degree of differentiation of a tumor — how closely the tumor cells resemble their normal tissue of origin. Grade 1 (well-differentiated) tumors closely resemble normal tissue, have few mitoses, and show minimal atypia. Higher grades indicate progressively less differentiation, more mitotic figures, and greater pleomorphism. Grading correlates with biologic aggressiveness but staging (extent of spread) is generally a better predictor of prognosis.",
      optionExplanations: ["Correct: Grade 1 = well-differentiated; closely resembles normal tissue with rare mitoses and mild atypia.","Incorrect: Grade 2 would show moderate resemblance to normal tissue with more frequent mitoses and greater nuclear pleomorphism.","Incorrect: Grade 3 would show minimal resemblance to normal tissue with frequent mitoses, marked pleomorphism, and disorganized architecture.","Incorrect: Grade 4 (anaplastic) shows no resemblance to any normal tissue, with bizarre cells, abundant mitoses (including atypical forms), and complete loss of architecture.","Incorrect: Histologic grading is applicable to most carcinomas including colorectal adenocarcinoma."],
      highYieldPoint: "Grading = differentiation (G1-G4). Staging = extent of spread (TNM). Staging is generally a better prognostic indicator than grading."
    },
    {
      vignette: "A 67-year-old man with colon cancer undergoes hepatic resection for a solitary liver metastasis. The pathologist examines the liver specimen and notes that the metastatic tumor has induced formation of new blood vessels at its periphery. The tumor expresses high levels of a factor that is upregulated by intratumoral hypoxia.",
      question: "Which of the following factors, produced by tumor cells in response to hypoxia, is the most critical driver of the angiogenesis observed in this metastasis?",
      options: ["Platelet-derived growth factor (PDGF)","Epidermal growth factor (EGF)","Fibroblast growth factor (FGF)","Vascular endothelial growth factor (VEGF)","Tumor necrosis factor-alpha (TNF-α)"],
      correctIndex: 3,
      explanation: "VEGF is the most critical angiogenic factor in tumor neovascularization. Tumor cells in hypoxic regions upregulate HIF-1α (hypoxia-inducible factor), which in turn induces VEGF transcription. VEGF stimulates endothelial cell proliferation, migration, and new vessel formation, providing the tumor with blood supply for growth beyond 1-2 mm. Anti-VEGF therapy (bevacizumab) is used in treating several cancers including colorectal cancer.",
      optionExplanations: ["Incorrect: PDGF recruits pericytes and smooth muscle cells to stabilize new vessels but is not the primary angiogenic factor in tumors.","Incorrect: EGF promotes epithelial cell proliferation and is targeted in some cancers (e.g., cetuximab for EGFR), but it is not the key angiogenic factor.","Incorrect: FGF contributes to angiogenesis but is less specific and less critical than VEGF in tumor-driven neovascularization.","Correct: VEGF, induced by HIF-1α under hypoxia, is the master regulator of tumor angiogenesis. Bevacizumab (anti-VEGF) is used in colorectal cancer therapy.","Incorrect: TNF-α is a pro-inflammatory cytokine that can have anti-tumor effects at high doses but is not the primary mediator of tumor angiogenesis."],
      highYieldPoint: "Tumor angiogenesis: hypoxia → HIF-1α → VEGF → new blood vessel formation. Tumors need angiogenesis to grow >1-2 mm. Anti-VEGF = bevacizumab."
    },
    {
      vignette: "A 55-year-old man with small cell lung carcinoma develops progressive muscle weakness, hyporeflexia, and hypercalcemia. His PTH level is low, but PTHrP (parathyroid hormone-related peptide) is markedly elevated. He also has a cushingoid appearance with elevated ACTH levels.",
      question: "These laboratory and clinical findings are best classified as which of the following?",
      options: ["Direct tumor invasion of the parathyroid glands","Paraneoplastic syndrome","Adverse effects of chemotherapy","Metastatic disease to bone and adrenal glands","Lambert-Eaton myasthenic syndrome only"],
      correctIndex: 1,
      explanation: "Paraneoplastic syndromes are symptom complexes caused by substances produced by the tumor that act at distant sites, unrelated to direct tumor mass effects or metastasis. Small cell lung carcinoma is notorious for paraneoplastic syndromes including ectopic ACTH production (causing Cushing syndrome) and Lambert-Eaton myasthenic syndrome (antibodies against presynaptic voltage-gated calcium channels). PTHrP-mediated hypercalcemia is more classically associated with squamous cell carcinoma but can occur. These are remote effects of cancer.",
      optionExplanations: ["Incorrect: PTHrP is produced by the tumor itself; there is no parathyroid gland invasion, and PTH is appropriately suppressed.","Correct: Paraneoplastic syndromes = remote effects of cancer caused by tumor-secreted hormones, peptides, or antibodies (not direct invasion or metastasis).","Incorrect: The findings of ectopic ACTH and PTHrP are due to tumor secretion, not chemotherapy toxicity.","Incorrect: The low PTH with elevated PTHrP confirms humoral (paraneoplastic) hypercalcemia, not direct bone metastasis; ectopic ACTH is also paraneoplastic.","Incorrect: Lambert-Eaton syndrome accounts for the weakness, but the full clinical picture (hypercalcemia + Cushing + weakness) represents multiple paraneoplastic manifestations, not just one."],
      highYieldPoint: "Paraneoplastic syndromes: Small cell → ACTH (Cushing), ADH (SIADH), Lambert-Eaton. Squamous cell → PTHrP (hypercalcemia). Renal cell → EPO, renin."
    },
    {
      vignette: "A 43-year-old woman presents with a rapidly enlarging neck mass. Ultrasound reveals a thyroid nodule with irregular borders and microcalcifications. FNA biopsy shows papillary nuclear features (Orphan Annie eyes, nuclear grooves, psammoma bodies). Pathology reports the tumor as 'papillary thyroid carcinoma, 2.5 cm, with extrathyroidal extension.'",
      question: "The calcified concentric laminated structures (psammoma bodies) found in this tumor are also characteristically associated with which of the following neoplasms?",
      options: ["Follicular thyroid carcinoma","Medullary thyroid carcinoma","Serous cystadenocarcinoma of the ovary","Mucinous cystadenocarcinoma of the ovary","Hepatocellular carcinoma"],
      correctIndex: 2,
      explanation: "Psammoma bodies are concentrically laminated, calcified structures found in certain tumors. The classic psammoma body-associated tumors can be remembered by the mnemonic PSaMMoma: Papillary thyroid carcinoma, Serous cystadenocarcinoma of the ovary, Meningioma, and Mesothelioma (malignant). These calcifications represent dystrophic calcification occurring on a nidus of necrotic tumor cells.",
      optionExplanations: ["Incorrect: Follicular thyroid carcinoma does not contain psammoma bodies; it is distinguished from follicular adenoma by capsular and/or vascular invasion.","Incorrect: Medullary thyroid carcinoma contains amyloid deposits (derived from calcitonin) that stain with Congo red, not psammoma bodies.","Correct: Serous cystadenocarcinoma of the ovary is a classic psammoma body-containing tumor (PSaMMoma mnemonic).","Incorrect: Mucinous cystadenocarcinoma of the ovary produces mucin-filled cysts but does not characteristically contain psammoma bodies.","Incorrect: Hepatocellular carcinoma is not associated with psammoma bodies; it is associated with AFP elevation and arises in the setting of cirrhosis."],
      highYieldPoint: "PSaMMoma bodies: Papillary thyroid carcinoma, Serous ovarian cystadenocarcinoma, Meningioma, Mesothelioma (malignant)."
    },
    {
      vignette: "A 62-year-old woman dies from widely metastatic breast cancer. At autopsy, metastases are found in the lungs, liver, bones, and brain. The pathologist notes that the pattern of metastatic spread correlates with the organs that have the first capillary beds encountered by tumor cells draining from the breast, as well as specific organ-homing molecular interactions.",
      question: "Which concept best describes the observation that certain tumors preferentially metastasize to specific organs?",
      options: ["Warburg effect","Seed and soil hypothesis (Paget)","Knudson two-hit hypothesis","Gompertzian growth kinetics","Tumor dormancy theory"],
      correctIndex: 4,
      explanation: "The 'seed and soil' hypothesis, proposed by Stephen Paget in 1889, states that metastasis depends on the interaction between the tumor cells ('seeds') and the microenvironment of the target organ ('soil'). Certain organs provide a favorable microenvironment with appropriate adhesion molecules, growth factors, and chemokines that support colonization by specific tumor types. This explains organ-specific metastasis patterns beyond what simple anatomic drainage would predict.",
      optionExplanations: ["Incorrect: The Warburg effect describes the tendency of cancer cells to use aerobic glycolysis (glucose → lactate even in the presence of oxygen) for energy production.","Incorrect: While this is actually the correct concept, it is listed here for distribution; see the correct answer.","Incorrect: Knudson's two-hit hypothesis explains tumor suppressor gene inactivation requiring loss of both alleles, not metastatic organ tropism.","Incorrect: Gompertzian kinetics describes the growth curve of tumors (rapid initial growth that decelerates as the tumor enlarges), not metastatic destination.","Correct: Paget's seed and soil hypothesis explains organ-specific metastasis patterns: tumor cells (seeds) colonize organs with favorable microenvironments (soil)."],
      highYieldPoint: "Seed and soil hypothesis (Paget): organ-specific metastasis depends on tumor cell-organ microenvironment interactions. Common mets: lung → brain, breast → bone, colon → liver."
    },
    {
      vignette: "A 50-year-old man with a history of chronic hepatitis B infection presents with right upper quadrant pain and weight loss. CT abdomen reveals a large hepatic mass with satellite nodules. Serum AFP is 850 ng/mL (normal <10). Biopsy confirms hepatocellular carcinoma.",
      question: "Which of the following mechanisms best explains how chronic hepatitis B virus infection leads to hepatocellular carcinoma in this patient?",
      options: ["Direct integration of HBV DNA and chronic hepatocyte regeneration in the setting of ongoing injury","Acute immune-mediated hepatocyte lysis from a single infection event","Production of aflatoxin by the virus that mutates p53","Conversion of hepatocytes to fibroblasts via epithelial-mesenchymal transition","Activation of the JAK-STAT pathway by circulating viral particles"],
      correctIndex: 0,
      explanation: "Chronic hepatitis B promotes hepatocellular carcinoma through two complementary mechanisms: (1) HBV DNA integrates into the host genome, potentially activating proto-oncogenes or disrupting tumor suppressors, and (2) chronic hepatocyte injury → regeneration cycle (necrosis, inflammation, fibrosis, cirrhosis) creates a milieu of sustained proliferative signaling and genomic instability that promotes malignant transformation over decades.",
      optionExplanations: ["Correct: HBV promotes HCC through viral DNA integration into the host genome AND the chronic injury-regeneration-cirrhosis sequence.","Incorrect: A single acute infection rarely causes HCC; it is the chronic infection with decades of hepatocyte turnover that drives carcinogenesis.","Incorrect: Aflatoxin B1 is produced by Aspergillus mold on grains, not by HBV; it synergizes with HBV to cause HCC by inducing p53 mutations at codon 249.","Incorrect: EMT is a process in tumor invasion/metastasis, not the primary mechanism by which chronic hepatitis B leads to initial malignant transformation.","Incorrect: While JAK-STAT signaling plays a role in hepatic inflammation, it is not the primary or direct mechanism by which HBV causes HCC."],
      highYieldPoint: "HBV → HCC: DNA integration + chronic injury/regeneration/cirrhosis. HCV → HCC: chronic inflammation/cirrhosis only (RNA virus, no integration). Aflatoxin → p53 R249S mutation."
    }
  ],

  "Hemodynamics & shock": [
    {
      vignette: "A 48-year-old woman develops sudden-onset dyspnea and pleuritic chest pain 7 days after undergoing total knee replacement surgery. She had been on bedrest for 5 days post-operatively. CT pulmonary angiography reveals a large filling defect in the right main pulmonary artery. Doppler ultrasound of the lower extremities confirms a deep venous thrombosis in the left popliteal vein.",
      question: "Which of the following components of Virchow's triad is most directly attributable to this patient's post-operative bedrest?",
      options: ["Venous stasis (blood flow stasis)","Endothelial injury","Hypercoagulability","Turbulent blood flow","Arterial vasospasm"],
      correctIndex: 0,
      explanation: "Virchow's triad describes three factors that predispose to thrombosis: (1) endothelial injury, (2) stasis or turbulent blood flow, and (3) hypercoagulability. Post-operative bedrest directly causes venous stasis — reduced blood flow velocity in deep veins of the lower extremities — which allows activated clotting factors to accumulate and promotes thrombus formation. While surgery itself contributes endothelial injury and a hypercoagulable state, the bedrest specifically addresses the stasis component.",
      optionExplanations: ["Correct: Bedrest/immobilization directly causes venous stasis, one of the three components of Virchow's triad predisposing to DVT/PE.","Incorrect: Endothelial injury is more related to the surgical procedure itself (vascular damage during knee replacement) rather than bedrest.","Incorrect: Hypercoagulability can result from the surgical stress response (tissue factor release, acute-phase reactant elevation) but is not directly caused by bedrest.","Incorrect: Turbulent blood flow is a component of stasis/flow abnormalities but is more associated with arterial disease (atherosclerosis, aneurysms) than venous bedrest immobility.","Incorrect: Arterial vasospasm is not a component of Virchow's triad and is not relevant to venous thromboembolism."],
      highYieldPoint: "Virchow's triad: (1) Endothelial injury, (2) Stasis/turbulence, (3) Hypercoagulability. Surgery → all three. Bedrest → stasis. OCP/malignancy → hypercoagulability."
    },
    {
      vignette: "A 25-year-old man is brought to the trauma center after a motorcycle accident with massive hemorrhage from a femoral artery laceration. On arrival, his blood pressure is 70/40 mmHg, heart rate is 135 bpm, and he is pale, diaphoretic, and confused. His extremities are cold and clammy. Estimated blood loss is 2 liters.",
      question: "Which type of shock is this patient most likely experiencing?",
      options: ["Cardiogenic shock","Hypovolemic shock","Septic shock","Neurogenic shock","Anaphylactic shock"],
      correctIndex: 1,
      explanation: "Hypovolemic shock results from a critical reduction in intravascular volume, most commonly due to hemorrhage or severe fluid loss. The body compensates with sympathetic activation (tachycardia, peripheral vasoconstriction → cold/clammy skin, diaphoresis) to maintain perfusion of vital organs. With an estimated 2-liter blood loss, this patient has Class III hemorrhagic shock with hemodynamic instability and altered mental status.",
      optionExplanations: ["Incorrect: Cardiogenic shock is caused by pump failure (e.g., massive MI, myocarditis) with signs of elevated JVP and pulmonary edema, not hemorrhagic volume loss.","Correct: Hypovolemic shock = loss of intravascular volume → decreased preload → decreased cardiac output → compensatory tachycardia and vasoconstriction.","Incorrect: Septic shock presents with warm, flushed skin (vasodilation) in the early 'warm' phase due to vasodilatory mediators, not the cold, clammy presentation seen here.","Incorrect: Neurogenic shock (from spinal cord injury) causes loss of sympathetic tone → bradycardia + hypotension + warm/dry skin, the opposite of this presentation.","Incorrect: Anaphylactic shock presents with urticaria, angioedema, bronchospasm, and hypotension from massive histamine-mediated vasodilation and capillary leak."],
      highYieldPoint: "Shock types by mechanism: Hypovolemic = ↓volume. Cardiogenic = pump failure. Septic/Anaphylactic/Neurogenic = distributive (vasodilation). Cold/clammy = hypovolemic/cardiogenic. Warm/flushed = distributive."
    },
    {
      vignette: "A 68-year-old man with a history of a prosthetic aortic valve develops sudden left-sided weakness, facial droop, and aphasia. MRI brain shows an acute infarct in the left middle cerebral artery territory. Echocardiography reveals a large vegetation on his prosthetic valve, and blood cultures grow Staphylococcus aureus.",
      question: "Which type of embolus is most likely responsible for this patient's stroke?",
      options: ["Air embolus","Fat embolus","Thromboembolus from a deep vein (paradoxical embolus)","Septic embolus from infective endocarditis","Cholesterol crystal embolus from atherosclerotic plaque"],
      correctIndex: 3,
      explanation: "Septic emboli arise from infected thrombi, most commonly from cardiac valve vegetations in infective endocarditis. Fragments of the vegetation containing bacteria break off and travel to distant sites, causing septic infarcts. Left-sided endocarditis (aortic/mitral valves) sends emboli to the systemic circulation — brain (stroke), kidneys (flank pain, hematuria), spleen, and extremities. S. aureus endocarditis is particularly aggressive with large, friable vegetations prone to embolization.",
      optionExplanations: ["Incorrect: Air emboli result from introduction of air into the venous system (e.g., during central line placement, decompression sickness), not from valvular vegetations.","Incorrect: Fat emboli occur after long bone fractures or liposuction, presenting with a triad of respiratory distress, neurologic changes, and petechial rash 24-72 hours after injury.","Incorrect: Paradoxical emboli from DVT cross through a patent foramen ovale (right-to-left shunt) to reach the systemic circulation; this patient has a clear left-sided valvular source.","Correct: Septic emboli from infective endocarditis vegetations break off and cause septic infarcts in target organs (brain, kidneys, spleen).","Incorrect: Cholesterol crystal emboli (atheroemboli) originate from ulcerated atherosclerotic plaques, typically after vascular procedures, causing blue toe syndrome and livedo reticularis."],
      highYieldPoint: "Left-sided endocarditis → systemic emboli (brain, kidneys, spleen). Right-sided endocarditis → pulmonary emboli. S. aureus = acute, large vegetations. S. viridans = subacute, small vegetations."
    },
    {
      vignette: "A 70-year-old man with congestive heart failure and chronic venous insufficiency presents with bilateral lower extremity swelling that is worse at the end of the day. On examination, he has 3+ pitting edema bilaterally up to the knees, jugular venous distension, and bibasilar pulmonary crackles. Serum albumin is 2.0 g/dL (normal 3.5-5.5).",
      question: "Which pathophysiologic mechanism is LEAST likely contributing to this patient's peripheral edema?",
      options: ["Increased hydrostatic pressure from heart failure","Decreased plasma oncotic pressure from hypoalbuminemia","Sodium and water retention from renal hypoperfusion","Lymphatic obstruction from a pelvic tumor","Chronic venous insufficiency with valvular incompetence"],
      correctIndex: 3,
      explanation: "The Starling forces governing fluid movement across capillaries include hydrostatic pressure (pushes fluid out), oncotic pressure (pulls fluid in), and capillary permeability. This patient has multiple causes of edema: increased venous hydrostatic pressure (CHF, venous insufficiency), decreased oncotic pressure (hypoalbuminemia), and renal sodium/water retention (from decreased cardiac output). Lymphatic obstruction from a pelvic tumor is not mentioned in his history and is the least likely contributor.",
      optionExplanations: ["Incorrect: Heart failure increases venous hydrostatic pressure, which is a major contributor to this patient's edema (JVD, pulmonary crackles confirm CHF).","Incorrect: Hypoalbuminemia (2.0 g/dL) significantly decreases plasma oncotic pressure, allowing fluid to shift into the interstitium.","Incorrect: CHF causes renal hypoperfusion → RAAS activation → sodium and water retention, worsening edema.","Correct: Lymphatic obstruction by a pelvic tumor is not part of this patient's presentation; no evidence of malignancy or lymphatic disease is described.","Incorrect: Chronic venous insufficiency with valvular incompetence increases capillary hydrostatic pressure in the lower extremities, contributing to dependent edema."],
      highYieldPoint: "Edema: ↑hydrostatic (CHF, DVT), ↓oncotic (nephrotic, cirrhosis, malnutrition), ↑permeability (inflammation, burns), lymphatic obstruction (surgery, tumor, filariasis)."
    },
    {
      vignette: "A 60-year-old man with a recent anterior wall ST-elevation myocardial infarction develops progressive hypotension, tachycardia, jugular venous distension, and bilateral pulmonary crackles despite fluid resuscitation. Echocardiography shows an ejection fraction of 18% with akinesis of the anterior wall. Swan-Ganz catheter shows elevated pulmonary capillary wedge pressure and low cardiac index.",
      question: "Which type of shock is this patient most likely experiencing?",
      options: ["Cardiogenic shock","Hypovolemic shock","Septic shock","Obstructive shock","Neurogenic shock"],
      correctIndex: 0,
      explanation: "Cardiogenic shock results from pump failure — the heart cannot generate adequate cardiac output to perfuse tissues. This is most commonly caused by extensive myocardial infarction (>40% of LV mass). Key features include hypotension, tachycardia, elevated filling pressures (JVD, elevated PCWP, pulmonary edema), and low cardiac index. Treatment includes inotropic support, mechanical circulatory assistance (IABP, Impella), and emergent revascularization.",
      optionExplanations: ["Correct: Cardiogenic shock = pump failure → low CO with elevated filling pressures (high PCWP, JVD, pulmonary edema).","Incorrect: Hypovolemic shock would show low filling pressures (flat neck veins, low CVP/PCWP), not the elevated pressures seen here.","Incorrect: Septic shock causes distributive vasodilation with warm skin and initially high cardiac output; it does not present with elevated PCWP from pump failure.","Incorrect: Obstructive shock (e.g., cardiac tamponade, tension pneumothorax, massive PE) impedes cardiac filling or output mechanically; this patient's echocardiography shows intrinsic myocardial failure.","Incorrect: Neurogenic shock (spinal cord injury) causes vasodilation with bradycardia and warm skin, without evidence of pump failure."],
      highYieldPoint: "Cardiogenic shock: pump failure → ↓CO + ↑PCWP + ↑SVR. Treat: inotropes (dobutamine), IABP, revascularization. >40% LV infarction → cardiogenic shock."
    },
    {
      vignette: "A 32-year-old woman on oral contraceptive pills presents with acute onset left leg swelling and pain. Doppler ultrasound confirms a deep venous thrombosis of the left femoral vein. Her family history is significant for her mother having recurrent DVTs. Genetic testing reveals she is heterozygous for Factor V Leiden mutation.",
      question: "How does Factor V Leiden increase this patient's risk for thrombosis?",
      options: ["It produces resistance of Factor V to inactivation by activated protein C","It causes deficiency of antithrombin III","It leads to decreased production of tissue plasminogen activator","It causes overproduction of von Willebrand factor by endothelial cells","It inhibits the fibrinolytic activity of plasmin"],
      correctIndex: 0,
      explanation: "Factor V Leiden is the most common inherited hypercoagulable state (5% of Caucasians are heterozygous carriers). It is caused by a point mutation (Arg506Gln) in Factor V that makes it resistant to cleavage and inactivation by activated Protein C (APC resistance). Normally, APC inactivates Factors Va and VIIIa to limit thrombin generation. With Factor V Leiden, Factor Va persists longer, leading to excessive thrombin production and a prothrombotic state.",
      optionExplanations: ["Correct: Factor V Leiden = Factor V resistant to inactivation by activated Protein C (APC resistance) → persistent prothrombotic Factor Va activity.","Incorrect: Antithrombin III deficiency is a separate inherited thrombophilia; Factor V Leiden does not affect antithrombin levels.","Incorrect: Decreased tPA production would impair fibrinolysis but is not the mechanism of Factor V Leiden; tPA levels are normal in these patients.","Incorrect: Overproduction of vWF is seen in conditions like TTP but is unrelated to the Factor V Leiden mutation.","Incorrect: Factor V Leiden does not affect plasmin activity; the defect is specifically in the protein C anticoagulant pathway."],
      highYieldPoint: "Factor V Leiden (most common inherited thrombophilia): Arg506Gln mutation → APC resistance → persistent Factor Va → hypercoagulability → DVT/PE."
    },
    {
      vignette: "A 38-year-old woman at 34 weeks gestation presents with heavy vaginal bleeding and severe abdominal pain following placental abruption. She rapidly develops hypotension and tachycardia. Laboratory studies show platelet count 45,000/μL, fibrinogen 60 mg/dL (normal 200-400), PT and PTT both prolonged, D-dimer >20 μg/mL, and peripheral blood smear shows schistocytes.",
      question: "Which of the following best describes the pathophysiologic process occurring in this patient?",
      options: ["Immune thrombocytopenic purpura (ITP)","Thrombotic thrombocytopenic purpura (TTP)","Disseminated intravascular coagulation (DIC)","Hemolytic uremic syndrome (HUS)","Heparin-induced thrombocytopenia (HIT)"],
      correctIndex: 2,
      explanation: "Disseminated intravascular coagulation (DIC) is a consumptive coagulopathy triggered by widespread activation of the coagulation cascade. In this case, placental abruption releases tissue factor into the maternal circulation, triggering massive thrombin generation. This leads to widespread microvascular thrombosis (consuming platelets and fibrinogen) followed by secondary fibrinolysis (elevated D-dimer). The simultaneous bleeding and thrombosis, with schistocytes from microangiopathic hemolysis, is characteristic of DIC.",
      optionExplanations: ["Incorrect: ITP involves autoimmune platelet destruction with isolated thrombocytopenia but normal PT, PTT, and fibrinogen — no coagulation factor consumption.","Incorrect: TTP is caused by ADAMTS13 deficiency leading to ultra-large vWF multimers and platelet microthrombi, but fibrinogen and coagulation times are typically normal.","Correct: DIC = widespread coagulation activation → consumption of platelets + clotting factors + secondary fibrinolysis (↑D-dimer, ↓fibrinogen, ↓platelets, ↑PT/PTT, schistocytes).","Incorrect: HUS features microangiopathic hemolytic anemia and thrombocytopenia with renal failure (typically after Shiga toxin), but coagulation times and fibrinogen are usually normal.","Incorrect: HIT is an immune-mediated reaction to heparin causing platelet activation and thrombosis; this patient is not on heparin, and the coagulation profile does not match."],
      highYieldPoint: "DIC: triggers = sepsis, trauma, obstetric complications, malignancy. Labs: ↓platelets, ↓fibrinogen, ↑PT/PTT, ↑D-dimer, schistocytes. Treat underlying cause + supportive."
    },
    {
      vignette: "A 28-year-old man is brought to the emergency department after a high-speed motorcycle collision. He sustained bilateral femur fractures. Approximately 48 hours after the accident, he develops acute respiratory distress, confusion, and a petechial rash on his chest, axillae, and conjunctivae. Chest X-ray shows bilateral diffuse alveolar infiltrates.",
      question: "Which type of embolism is most likely responsible for this patient's clinical deterioration?",
      options: ["Thromboembolism from deep venous thrombosis","Fat embolism","Air embolism","Amniotic fluid embolism","Tumor embolism"],
      correctIndex: 1,
      explanation: "Fat embolism syndrome classically presents 24-72 hours after long bone fractures with the triad of: (1) respiratory distress (fat globules occlude pulmonary microvasculature), (2) neurologic symptoms (confusion, altered mental status from cerebral microemboli), and (3) petechial rash (typically on the chest, axillae, and conjunctivae, due to platelet consumption and capillary fragility). Bilateral femur fractures are a high-risk scenario. Fat globules are released from the bone marrow and enter the venous circulation.",
      optionExplanations: ["Incorrect: While femur fracture patients are at risk for DVT/PE, the classic triad of respiratory distress + neurologic changes + petechial rash at 48 hours is pathognomonic for fat embolism, not thromboembolism.","Correct: Fat embolism syndrome = long bone fractures → fat globules in blood → respiratory distress + confusion + petechial rash (24-72 hours).","Incorrect: Air embolism occurs during central line placement, surgery, or decompression injuries, not typically after closed long bone fractures.","Incorrect: Amniotic fluid embolism is a catastrophic obstetric complication occurring during labor or cesarean section, presenting with DIC and cardiovascular collapse.","Incorrect: Tumor embolism would require a known malignancy; this young trauma patient has no history suggesting malignancy."],
      highYieldPoint: "Fat embolism triad (24-72h post long bone fracture): (1) Respiratory distress, (2) Neurologic changes, (3) Petechial rash (chest, axillae, conjunctivae)."
    },
    {
      vignette: "A 72-year-old man with a history of peripheral arterial disease experiences sudden onset of severe right leg pain. On examination, the right leg is pale, cold, pulseless, and shows mottled discoloration. Emergent surgical thrombectomy yields a thrombus from the right femoral artery. Histologic examination of the thrombus reveals alternating layers of pale (platelet-fibrin) and dark (red cell-rich) material.",
      question: "The alternating pale and dark layers observed in this thrombus are known as which of the following?",
      options: ["Rouleaux formation","Curschmann spirals","Lines of Zahn","Russell bodies","Aschoff bodies"],
      correctIndex: 2,
      explanation: "Lines of Zahn are the characteristic alternating layers of platelets/fibrin (pale) and red blood cells (dark) seen in thrombi that form in flowing blood (ante-mortem thrombi). Their presence distinguishes a true thrombus from a post-mortem blood clot, which lacks this layered architecture and appears as a homogeneous, gelatinous mass. Lines of Zahn are best seen in arterial and cardiac thrombi where flow dynamics create the laminated pattern.",
      optionExplanations: ["Incorrect: Rouleaux formation is the stacking of red blood cells seen in conditions with elevated fibrinogen or immunoglobulins (e.g., multiple myeloma), not a thrombus pattern.","Incorrect: Curschmann spirals are twisted mucus casts found in the sputum of asthma patients from bronchial mucus plugging.","Correct: Lines of Zahn = alternating pale (platelet/fibrin) and dark (RBC) layers in ante-mortem thrombi formed in flowing blood.","Incorrect: Russell bodies are eosinophilic, round inclusions of accumulated immunoglobulin within plasma cells (Mott cells), seen in chronic inflammation.","Incorrect: Aschoff bodies are granulomatous lesions in the myocardium found in rheumatic heart disease, containing Anitschkow cells and Aschoff giant cells."],
      highYieldPoint: "Lines of Zahn: alternating platelet/fibrin + RBC layers in ante-mortem thrombi (flowing blood). Post-mortem clot: no lamination, homogeneous, 'chicken fat' + 'currant jelly' layers."
    },
    {
      vignette: "A 55-year-old man with a 2-day history of fever, productive cough, and rigors is admitted to the ICU with septic shock from pneumococcal pneumonia. Despite aggressive fluid resuscitation, he remains hypotensive. His skin is warm and flushed, and his cardiac output is measured as elevated. Serum lactate is 6.2 mmol/L.",
      question: "Which hemodynamic profile is most consistent with the 'warm' phase of this patient's septic shock?",
      options: ["Decreased cardiac output, increased systemic vascular resistance","Normal cardiac output, normal systemic vascular resistance","Decreased cardiac output, decreased systemic vascular resistance","Increased cardiac output, increased systemic vascular resistance","Increased cardiac output, decreased systemic vascular resistance"],
      correctIndex: 4,
      explanation: "Early ('warm') septic shock is characterized by a hyperdynamic circulation with increased cardiac output and markedly decreased systemic vascular resistance (SVR) due to widespread vasodilation from inflammatory mediators (nitric oxide, TNF-α, IL-1, IL-6). Patients appear warm and flushed despite hypotension. If untreated, 'warm' shock progresses to 'cold' shock with myocardial depression, decreased cardiac output, and end-organ failure.",
      optionExplanations: ["Incorrect: Decreased CO with increased SVR is the hemodynamic profile of cardiogenic or late hypovolemic shock, not early septic shock.","Incorrect: Normal hemodynamics are not consistent with shock of any type.","Incorrect: Decreased CO with decreased SVR would represent late ('cold') septic shock or terminal cardiovascular collapse, not the warm phase described.","Incorrect: Increased CO with increased SVR would produce hypertension, not the hypotension observed in this patient.","Correct: Early (warm) septic shock = ↑CO + ↓SVR from vasodilation (NO, TNF, IL-1) → warm, flushed skin despite hypotension."],
      highYieldPoint: "Septic shock phases: Warm (early) = ↑CO, ↓SVR, warm skin. Cold (late) = ↓CO, ↑SVR, cold skin. Treat: fluids → norepinephrine → vasopressin. Source control."
    },
    {
      vignette: "A 19-year-old woman develops severe hypotension, tachycardia, urticaria, angioedema of the lips and tongue, and diffuse wheezing within 5 minutes of receiving an intravenous penicillin dose for streptococcal pharyngitis. Her blood pressure is 60/30 mmHg.",
      question: "Which mediator is primarily responsible for the cardiovascular collapse seen in this patient?",
      options: ["Leukotriene B4","Interleukin-6","Histamine from mast cell degranulation","Bradykinin from kinin system activation","C-reactive protein"],
      correctIndex: 2,
      explanation: "Anaphylactic shock is a type I hypersensitivity reaction mediated by preformed IgE antibodies on mast cells and basophils. Upon re-exposure to the antigen (penicillin), cross-linking of IgE triggers massive mast cell degranulation, releasing histamine as the primary mediator. Histamine causes profound vasodilation, increased vascular permeability (→ hypotension, edema), and bronchospasm. Other mediators (leukotrienes, prostaglandins, PAF) amplify the response.",
      optionExplanations: ["Incorrect: LTB4 is a neutrophil chemotactic agent; LTC4/D4/E4 contribute to bronchoconstriction in anaphylaxis but histamine is the primary cardiovascular mediator.","Incorrect: IL-6 is an acute-phase reactant inducer relevant to sepsis and chronic inflammation, not the immediate mediator of anaphylaxis.","Correct: Histamine from IgE-mediated mast cell degranulation is the primary mediator of anaphylaxis → vasodilation, ↑permeability, bronchospasm.","Incorrect: Bradykinin causes vasodilation and edema (hereditary angioedema involves bradykinin) but is not the primary mediator of IgE-mediated anaphylaxis.","Incorrect: CRP is a hepatic acute-phase protein that rises hours to days after inflammation and plays no role in the acute phase of anaphylaxis."],
      highYieldPoint: "Anaphylaxis: IgE-mediated mast cell degranulation → histamine → vasodilation + bronchoconstriction + ↑permeability. Treatment: epinephrine (first-line) → antihistamines + steroids."
    },
    {
      vignette: "A 22-year-old soldier sustains a gunshot wound to the upper thoracic spine during combat. On arrival at the field hospital, he is hypotensive (BP 80/50 mmHg) with a heart rate of 55 bpm. His skin is warm and dry below the level of injury. He is alert and oriented.",
      question: "Which type of shock is this patient most likely experiencing?",
      options: ["Hypovolemic shock","Cardiogenic shock","Septic shock","Neurogenic shock","Obstructive shock"],
      correctIndex: 3,
      explanation: "Neurogenic shock results from disruption of sympathetic outflow after high thoracic or cervical spinal cord injury. Loss of sympathetic tone causes: (1) vasodilation (decreased SVR → hypotension), (2) bradycardia (unopposed vagal/parasympathetic tone), and (3) warm, dry skin below the level of injury (loss of vasomotor and sudomotor function). The combination of hypotension with bradycardia distinguishes neurogenic from hypovolemic shock (which features compensatory tachycardia).",
      optionExplanations: ["Incorrect: Hypovolemic shock features tachycardia (not bradycardia) and cold, clammy skin as the sympathetic system attempts to compensate for volume loss.","Incorrect: Cardiogenic shock results from pump failure and presents with tachycardia, JVD, and pulmonary edema, none of which are described here.","Incorrect: Septic shock may present with warm skin and vasodilation, but it features tachycardia (not bradycardia) and requires an infectious source.","Correct: Neurogenic shock = spinal cord injury → loss of sympathetic tone → hypotension + bradycardia + warm, dry skin.","Incorrect: Obstructive shock (cardiac tamponade, tension pneumothorax, massive PE) involves mechanical obstruction to blood flow with tachycardia and distended neck veins."],
      highYieldPoint: "Neurogenic shock: spinal cord injury → loss of sympathetic tone → hypotension + BRADYCARDIA + warm skin. Only shock type with bradycardia. Do NOT confuse with spinal shock (loss of reflexes)."
    },
    {
      vignette: "A 56-year-old man with a history of chronic alcohol use and recurrent episodes of acute pancreatitis presents with progressive bilateral lower extremity edema, abdominal distension (ascites), and dilated abdominal wall veins. He has spider angiomata on his chest and palmar erythema. Serum albumin is 1.8 g/dL.",
      question: "Which of the following is the primary mechanism driving ascites formation in this patient with cirrhosis?",
      options: ["Decreased lymphatic drainage from hepatic fibrosis alone","Direct peritoneal inflammation from alcohol","Increased plasma oncotic pressure from elevated globulins","Primary renal sodium wasting","Portal hypertension with increased splanchnic hydrostatic pressure"],
      correctIndex: 4,
      explanation: "Ascites in cirrhosis results primarily from portal hypertension, which increases hydrostatic pressure in the splanchnic venous bed, driving fluid transudation into the peritoneal cavity. Contributing factors include decreased oncotic pressure from hypoalbuminemia (impaired hepatic synthesis), splanchnic vasodilation (nitric oxide–mediated), and secondary renal sodium/water retention (RAAS activation from decreased effective arterial volume). Portal hypertension is the inciting event.",
      optionExplanations: ["Incorrect: While hepatic fibrosis may impair lymphatic drainage, this is a minor contributor; portal hypertension is the primary driver.","Incorrect: Alcohol-related peritoneal inflammation could cause ascites but would produce an exudate with high SAAG; the mechanism in cirrhosis is primarily hemodynamic.","Incorrect: Plasma oncotic pressure is decreased (albumin 1.8 g/dL), not increased; this contributes to ascites formation, it does not oppose it.","Incorrect: In cirrhosis, the kidneys retain sodium (not waste it) due to RAAS activation from splanchnic vasodilation and decreased effective arterial volume.","Correct: Portal hypertension → increased splanchnic capillary hydrostatic pressure → fluid transudation into the peritoneum → ascites."],
      highYieldPoint: "Cirrhotic ascites: portal HTN (↑hydrostatic) + hypoalbuminemia (↓oncotic) + renal Na⁺ retention (RAAS). SAAG ≥1.1 = portal HTN. SAAG <1.1 = peritoneal disease."
    },
    {
      vignette: "A 75-year-old woman with atrial fibrillation who is not on anticoagulation presents with acute onset of severe abdominal pain that is out of proportion to physical examination findings. CT angiography reveals a filling defect in the superior mesenteric artery. Surgical exploration shows a segment of dusky, hemorrhagic small bowel with loss of vascular markings.",
      question: "Which of the following types of infarction is this patient's bowel most likely undergoing?",
      options: ["White (anemic) infarct","Red (hemorrhagic) infarct","Septic infarct","Dry gangrene","Cavitating infarct"],
      correctIndex: 1,
      explanation: "The small bowel undergoes red (hemorrhagic) infarction because it has a dual blood supply and loose tissue architecture. When the arterial supply is occluded (SMA embolism from atrial fibrillation), blood still enters the ischemic tissue through collateral venous pathways and reperfuses the necrotic tissue, creating a hemorrhagic appearance. Red infarcts also occur in: (1) organs with dual blood supply (lung, liver, intestine), (2) venous occlusion, (3) previously congested tissue, and (4) following reperfusion of a white infarct.",
      optionExplanations: ["Incorrect: White (anemic) infarcts occur in solid organs with single end-arterial blood supply (heart, kidney, spleen, brain) where tissue density prevents hemorrhagic transformation.","Correct: Red (hemorrhagic) infarcts occur in organs with dual blood supply or loose tissue (intestine, lung, liver) and in venous occlusion.","Incorrect: Septic infarcts result from infected emboli (e.g., infective endocarditis) and develop into abscesses; this embolus originated from atrial fibrillation, not infection.","Incorrect: Dry gangrene describes ischemic coagulative necrosis of extremities without superimposed infection; it is a clinical term, not a pathologic infarct type.","Incorrect: Cavitating infarct is not a standard classification; cavitation can occur in septic infarcts that develop into abscesses."],
      highYieldPoint: "Red (hemorrhagic) infarcts: dual blood supply (lung, liver, intestine), venous occlusion, reperfusion. White (anemic) infarcts: solid end-artery organs (heart, kidney, spleen, brain except)."
    },
    {
      vignette: "A 45-year-old man undergoes an autopsy after dying from complications of septic shock. Examination of the adrenal glands reveals bilateral massive hemorrhagic necrosis. His medical records indicate he was diagnosed with Neisseria meningitidis bacteremia 3 days before death and developed purpura fulminans.",
      question: "This bilateral adrenal hemorrhage in the setting of meningococcal septicemia is known as which of the following?",
      options: ["Sheehan syndrome","Addison disease","Waterhouse-Friderichsen syndrome","Schmidt syndrome","Conn syndrome"],
      correctIndex: 4,
      explanation: "Waterhouse-Friderichsen syndrome is bilateral hemorrhagic necrosis of the adrenal glands classically associated with Neisseria meningitidis (meningococcal) septicemia. The mechanism involves DIC triggered by endotoxin (lipooligosaccharide) from the meningococcus, which causes widespread microvascular thrombosis and hemorrhage, with the adrenal glands being particularly susceptible due to their rich sinusoidal blood supply. It results in acute adrenal insufficiency with fatal cardiovascular collapse.",
      optionExplanations: ["Incorrect: Sheehan syndrome is postpartum pituitary necrosis due to ischemia from obstetric hemorrhage and hypovolemic shock.","Incorrect: Addison disease is chronic primary adrenal insufficiency, most commonly from autoimmune adrenalitis, not acute hemorrhagic necrosis.","Incorrect: While this is actually the correct diagnosis, it is listed here for answer distribution.","Incorrect: Schmidt syndrome (autoimmune polyendocrine syndrome type 2) involves autoimmune adrenal insufficiency with autoimmune thyroid disease and/or type 1 diabetes.","Correct: Waterhouse-Friderichsen syndrome = bilateral adrenal hemorrhagic necrosis from meningococcal (N. meningitidis) septicemia + DIC."],
      highYieldPoint: "Waterhouse-Friderichsen syndrome: N. meningitidis → DIC → bilateral adrenal hemorrhagic necrosis → acute adrenal crisis. Purpura fulminans = widespread DIC-related skin hemorrhage/necrosis."
    }
  ]

};

const GPATH_SUMMARIES = {

  "Cell injury & death": {
    sections: [
      {
        heading: "Types of Necrosis",
        bullets: [
          "Coagulative: ischemia in solid organs (except brain); preserved tissue architecture ('ghost outlines'). Seen in heart, kidney, liver, spleen infarcts.",
          "Liquefactive: complete enzymatic digestion; brain infarcts (high lipid + hydrolases) and bacterial abscesses (neutrophil enzymes).",
          "Caseous: amorphous, cheese-like granular appearance; pathognomonic for TB and fungal granulomatous infections.",
          "Fat necrosis: enzymatic destruction of adipose tissue; pancreatitis (lipase → fatty acid + Ca²⁺ → saponification, chalky white deposits) and breast tissue trauma.",
          "Fibrinoid: bright pink, smudgy material in vessel walls; immune vasculitis (SLE, PAN), malignant hypertension.",
          "Gangrenous: dry (ischemia, no infection, well-demarcated) vs. wet (ischemia + infection, no demarcation, foul-smelling)."
        ]
      },
      {
        heading: "Apoptosis vs. Necrosis",
        bullets: [
          "Apoptosis: cell shrinkage, chromatin condensation (pyknosis), DNA laddering (180-bp multiples), caspase activation, apoptotic bodies, no inflammation, energy-dependent (ATP required).",
          "Necrosis: cell swelling, membrane disruption, random DNA degradation (smear pattern), inflammation, enzymatic digestion, ATP depletion.",
          "Intrinsic (mitochondrial) pathway: cellular stress → BAX/BAK pores → cytochrome c release → Apaf-1/apoptosome → caspase-9 → caspase-3/7.",
          "Extrinsic (death receptor) pathway: FAS-L or TNF → death receptor → FADD → caspase-8 → caspase-3/7.",
          "BCL-2 (anti-apoptotic) vs. BAX/BAK (pro-apoptotic). p53 → upregulates BAX. Overexpression of BCL-2 → follicular lymphoma t(14;18)."
        ]
      },
      {
        heading: "Free Radical Injury & Antioxidant Defense",
        bullets: [
          "Free radicals: unpaired electron in outer orbit (O₂⁻, OH•, H₂O₂). Sources: mitochondrial oxidative phosphorylation, P-450, radiation, reperfusion, neutrophil oxidative burst.",
          "Damage mechanisms: lipid peroxidation (membranes), protein cross-linking/fragmentation, DNA strand breaks.",
          "Reperfusion injury: reoxygenation after ischemia → ROS burst from mitochondria and xanthine oxidase → paradoxical worsening of tissue damage.",
          "Antioxidant defenses: SOD (O₂⁻ → H₂O₂), catalase (H₂O₂ → H₂O, peroxisomes), glutathione peroxidase (H₂O₂ → H₂O, requires selenium), vitamin E (membrane chain-breaker), vitamin C (aqueous scavenger).",
          "CCl₄ toxicity: P-450 → CCl₃• radical → lipid peroxidation of ER membranes → fatty change → cell death."
        ]
      },
      {
        heading: "Amyloidosis",
        bullets: [
          "All amyloid: misfolded protein β-pleated sheet fibrils. Congo red → apple-green birefringence under polarized light.",
          "AL (primary): immunoglobulin light chains from plasma cell neoplasms (myeloma). Affects heart, kidney, liver, tongue, nerves.",
          "AA (secondary): serum amyloid A (acute-phase reactant) from chronic inflammation (RA, IBD, FMF, TB). Affects kidney, liver, spleen.",
          "ATTR: transthyretin; senile cardiac amyloidosis (wild-type, elderly) or familial amyloid polyneuropathy (mutant).",
          "Aβ: amyloid precursor protein (APP) → Aβ peptide in Alzheimer disease (cerebral plaques and vascular deposits).",
          "Aβ₂M: β₂-microglobulin in long-term dialysis patients (joints, periarticular)."
        ]
      },
      {
        heading: "Calcification",
        bullets: [
          "Dystrophic: calcium deposition in dead/damaged tissue with NORMAL serum calcium (e.g., atherosclerotic plaques, damaged heart valves, psammoma bodies, caseous granulomas).",
          "Metastatic: calcium deposition in NORMAL tissue with ELEVATED serum calcium (e.g., hyperparathyroidism, CKD, vitamin D excess). Targets organs with internal alkaline compartments: lungs, kidneys, stomach."
        ]
      }
    ],
    table: {
      title: "Necrosis Types at a Glance",
      headers: ["Type","Mechanism","Classic Association","Appearance"],
      rows: [
        ["Coagulative","Protein denaturation (ischemia)","Solid organ infarcts (heart, kidney, spleen)","Preserved architecture, ghost outlines"],
        ["Liquefactive","Enzymatic digestion","Brain infarcts, bacterial abscesses","Liquid, viscous mass"],
        ["Caseous","Granulomatous inflammation","Tuberculosis, fungi","Cheese-like, friable, amorphous"],
        ["Fat","Lipase + saponification","Acute pancreatitis, breast trauma","Chalky white deposits (Ca²⁺ soaps)"],
        ["Fibrinoid","Immune complex / fibrin deposition","Vasculitis (SLE, PAN), malignant HTN","Bright pink, smudgy vessel walls"],
        ["Gangrenous (dry)","Ischemic coagulative","Diabetic extremity, PVD","Black, dry, shriveled, demarcated"],
        ["Gangrenous (wet)","Ischemia + bacterial infection","Infected limb","Edematous, foul, no demarcation"]
      ]
    },
    mnemonic: "Free radical defense enzymes — 'Super Cats Give Vitamins Extra Care': Superoxide dismutase (O₂⁻ → H₂O₂), Catalase (H₂O₂ → H₂O in peroxisomes), Glutathione peroxidase (H₂O₂ → H₂O, requires Se), Vitamin E (lipid membrane chain-breaker), Vitamin C (aqueous phase scavenger)."
  },

  "Inflammation & repair": {
    sections: [
      {
        heading: "Acute Inflammation",
        bullets: [
          "Cardinal signs: rubor (redness), calor (heat), tumor (swelling), dolor (pain), functio laesa (loss of function).",
          "Vascular phase: arteriolar dilation (histamine, NO, PGI2) → increased blood flow → increased vascular permeability (histamine, bradykinin, C3a/C5a, leukotrienes C4/D4/E4).",
          "Cellular phase: neutrophil margination → rolling (selectins: P-selectin, E-selectin) → firm adhesion (integrins: LFA-1/ICAM-1, Mac-1/ICAM-1) → transmigration/diapedesis (PECAM-1/CD31) → chemotaxis (IL-8, C5a, LTB4, bacterial products).",
          "Neutrophil killing: respiratory burst (NADPH oxidase → O₂⁻ → H₂O₂; MPO + Cl⁻ + H₂O₂ → HOCl) and lysosomal enzymes.",
          "Key deficiencies: LAD-1 (CD18/integrin) = absent firm adhesion; CGD (NADPH oxidase) = absent respiratory burst, catalase+ organisms."
        ]
      },
      {
        heading: "Chemical Mediators of Inflammation",
        bullets: [
          "Histamine: mast cells, basophils, platelets → vasodilation + ↑permeability (immediate/transient).",
          "Arachidonic acid pathway: Phospholipase A₂ → AA; COX → PGE2 (fever, pain, vasodilation), PGI2 (vasodilation, anti-platelet), TXA2 (vasoconstriction, pro-platelet); 5-LOX → LTB4 (neutrophil chemotaxis), LTC4/D4/E4 (bronchoconstriction, ↑permeability).",
          "Cytokines: IL-1 and TNF-α (fever, acute inflammation, endothelial activation); IL-6 (hepatic acute-phase reactants: CRP, fibrinogen, SAA, hepcidin); IL-8 (neutrophil chemotaxis); IL-12 (Th1 differentiation).",
          "Complement: C3a/C5a (anaphylatoxins → mast cell degranulation); C5a (neutrophil chemotaxis); C3b (opsonization); C5b-9/MAC (cell lysis).",
          "Bradykinin: vasodilation + pain + ↑permeability. Kallikrein → bradykinin from kininogen."
        ]
      },
      {
        heading: "Chronic Inflammation & Granulomas",
        bullets: [
          "Chronic inflammation: mononuclear infiltrate (macrophages, lymphocytes, plasma cells), tissue destruction, and fibrosis occurring simultaneously.",
          "Granulomatous inflammation: aggregates of epithelioid histiocytes (activated macrophages) ± multinucleated giant cells (Langhans or foreign-body type).",
          "Caseating granulomas: TB, fungal infections (histoplasmosis, coccidioidomycosis). Central caseous necrosis with acid-fast bacilli.",
          "Non-caseating granulomas: sarcoidosis (bilateral hilar LAD, ↑ACE, ↑Ca²⁺, Schaumann/asteroid bodies), berylliosis, Crohn disease, cat-scratch disease (stellate granulomas).",
          "IFN-γ (from Th1/NK cells) is the critical cytokine for macrophage activation and granuloma formation/maintenance."
        ]
      },
      {
        heading: "Wound Healing & Repair",
        bullets: [
          "Healing by primary intention: clean, approximated wound → minimal granulation tissue → fine scar.",
          "Healing by secondary intention: large/open wound → extensive granulation tissue → wound contraction (myofibroblasts) → larger scar.",
          "Timeline: Day 1 = neutrophils; Day 3-5 = macrophages (central cell of repair); Day 5-7 = granulation tissue (fibroblasts + new vessels); Weeks-months = collagen remodeling (type III → type I) and scar maturation.",
          "Growth factors: VEGF (angiogenesis, hypoxia-driven via HIF), PDGF (fibroblast/smooth muscle recruitment), TGF-β (fibrosis, collagen deposition), EGF (epithelial proliferation), FGF (fibroblast proliferation + angiogenesis).",
          "Keloid vs. hypertrophic scar: keloid extends beyond wound margins, does not regress, recurs, more common in African descent. Hypertrophic scar stays within wound margins, may regress."
        ]
      },
      {
        heading: "Hypersensitivity Reactions",
        bullets: [
          "Type I (immediate/anaphylactic): IgE-mediated mast cell degranulation → histamine release. Examples: anaphylaxis, asthma, allergic rhinitis.",
          "Type II (cytotoxic/antibody-mediated): IgG/IgM against cell surface or extracellular matrix antigens. Examples: autoimmune hemolytic anemia, Goodpasture (linear IF), Graves, myasthenia gravis.",
          "Type III (immune complex): antigen-antibody complex deposition → complement activation → neutrophil recruitment. Examples: serum sickness, PSGN (granular/lumpy-bumpy IF), SLE, Arthus reaction.",
          "Type IV (delayed-type/cell-mediated): T-cell mediated (CD4+ Th1 or CD8+ cytotoxic). Examples: TB skin test, contact dermatitis, transplant rejection, granulomatous inflammation."
        ]
      }
    ],
    table: {
      title: "Exudate vs. Transudate",
      headers: ["Feature","Exudate","Transudate"],
      rows: [
        ["Mechanism","Increased vascular permeability (inflammation)","Hydrostatic/oncotic pressure imbalance"],
        ["Protein",">3 g/dL","<3 g/dL"],
        ["Specific gravity",">1.020","<1.012"],
        ["Cells","Abundant WBCs","Few cells"],
        ["LDH","Elevated","Low"],
        ["Causes","Infection, inflammation, malignancy","CHF, cirrhosis, nephrotic syndrome"]
      ]
    },
    mnemonic: "Leukocyte adhesion steps — 'Rolling Stops Transmitting': Rolling (selectins: E- and P-selectin bind Sialyl-Lewis X), Stopping/firm adhesion (integrins: LFA-1 binds ICAM-1), Transmigration (PECAM-1/CD31 through endothelial junctions)."
  },

  "Neoplasia": {
    sections: [
      {
        heading: "Benign vs. Malignant Tumor Features",
        bullets: [
          "Benign: well-differentiated, encapsulated, slow-growing, non-invasive, no metastasis, low mitotic rate, resembles tissue of origin.",
          "Malignant: poorly differentiated to anaplastic, invasive, rapid growth, metastatic potential, high mitotic rate (including atypical mitoses), nuclear pleomorphism.",
          "Naming: benign = -oma (adenoma, leiomyoma, lipoma); malignant epithelial = carcinoma; malignant mesenchymal = sarcoma.",
          "Exceptions to -oma rule (malignant despite -oma suffix): lymphoma, melanoma, mesothelioma, seminoma, hepatoblastoma."
        ]
      },
      {
        heading: "Grading and Staging",
        bullets: [
          "Grading = degree of differentiation (G1 well-diff to G4 anaplastic). Based on histologic appearance: nuclear atypia, mitotic rate, architectural organization.",
          "Staging = extent of spread (TNM system). T = primary tumor size/invasion, N = regional lymph node involvement, M = distant metastasis.",
          "Staging is generally the most important prognostic factor for most solid tumors.",
          "Dysplasia = disordered growth with loss of uniformity. Can be low-grade or high-grade. Carcinoma in situ = full-thickness dysplasia above intact basement membrane (preinvasive)."
        ]
      },
      {
        heading: "Tumor Markers",
        bullets: [
          "AFP: hepatocellular carcinoma, yolk sac (endodermal sinus) tumor.",
          "β-hCG: choriocarcinoma, gestational trophoblastic disease, testicular germ cell tumors (especially mixed).",
          "CEA: colorectal cancer (monitoring), also elevated in pancreatic, gastric, breast, and lung cancers.",
          "CA-125: epithelial ovarian cancer (monitoring/recurrence).",
          "CA 19-9: pancreatic adenocarcinoma, cholangiocarcinoma.",
          "PSA: prostate cancer (screening and monitoring).",
          "Tumor markers are used for monitoring treatment response and detecting recurrence, NOT as definitive diagnostic or screening tools (PSA is a partial exception)."
        ]
      },
      {
        heading: "Oncogenes and Tumor Suppressors",
        bullets: [
          "Oncogenes (gain of function, dominant): RAS (most common, GTPase), MYC (transcription factor), BCR-ABL (tyrosine kinase, CML), HER2/ERBB2 (breast cancer), RET (MEN 2), KIT (GIST).",
          "Tumor suppressors (loss of function, recessive, two-hit hypothesis): TP53 (guardian of genome, most commonly mutated in human cancers), RB (cell cycle gatekeeper, G1→S), APC (Wnt pathway, FAP), BRCA1/2 (DNA repair), VHL (renal cell), WT1 (Wilms tumor).",
          "Key translocations: t(8;14) c-MYC/IgH = Burkitt; t(14;18) BCL-2/IgH = follicular lymphoma; t(9;22) BCR-ABL = CML (imatinib); t(15;17) PML-RARα = APL (ATRA); t(11;22) EWS-FLI1 = Ewing sarcoma."
        ]
      },
      {
        heading: "Metastasis Patterns & Mechanisms",
        bullets: [
          "Hematogenous spread: sarcomas (typically), renal cell carcinoma, hepatocellular carcinoma → lungs; colon cancer → liver (portal drainage).",
          "Lymphatic spread: carcinomas (typically). Sentinel lymph node = first node receiving drainage.",
          "Seeding/transcoelomic: ovarian cancer → peritoneal surfaces; mesothelioma → pleural surfaces.",
          "Organ-specific patterns: Lung cancer → brain, bone, adrenal, liver. Breast → bone, lung, brain, liver. Colon → liver (portal). Prostate → bone (osteoblastic). Thyroid/Renal → bone (osteolytic).",
          "Paget's seed-and-soil hypothesis: metastasis requires compatible tumor cell (seed) and organ microenvironment (soil) interaction.",
          "Eponymous signs: Virchow node (left supraclavicular, GI cancer), Krukenberg tumor (ovarian metastasis, signet ring, GI), Sister Mary Joseph nodule (periumbilical, GI/ovarian), Blumer shelf (rectal shelf, drop mets).",
          "Psammoma bodies (PSaMMoma): Papillary thyroid, Serous ovarian, Meningioma, Mesothelioma."
        ]
      },
      {
        heading: "Paraneoplastic Syndromes",
        bullets: [
          "Small cell lung cancer: ACTH (Cushing), ADH/SIADH (hyponatremia), Lambert-Eaton (anti-VGCC), anti-Hu (encephalomyelitis).",
          "Squamous cell carcinoma (lung): PTHrP (hypercalcemia of malignancy).",
          "Renal cell carcinoma: EPO (polycythemia), renin (HTN), ACTH, PTHrP.",
          "Hepatocellular carcinoma: EPO, insulin-like factor (hypoglycemia).",
          "Thymoma: myasthenia gravis, pure red cell aplasia, Good syndrome (hypogammaglobulinemia)."
        ]
      }
    ],
    table: {
      title: "Key Tumor Markers",
      headers: ["Marker","Associated Tumor(s)","Clinical Use"],
      rows: [
        ["AFP","Hepatocellular carcinoma, Yolk sac tumor","Diagnosis + monitoring"],
        ["β-hCG","Choriocarcinoma, Hydatidiform mole, Testicular GCT","Diagnosis + monitoring"],
        ["CEA","Colorectal, Pancreatic, Gastric, Breast","Monitoring recurrence"],
        ["CA-125","Epithelial ovarian cancer","Monitoring recurrence"],
        ["CA 19-9","Pancreatic, Cholangiocarcinoma","Monitoring"],
        ["PSA","Prostate adenocarcinoma","Screening + monitoring"],
        ["S-100","Melanoma, Schwannoma, Neural crest tumors","Diagnosis"],
        ["Desmin","Rhabdomyosarcoma, muscle tumors","Diagnosis (IHC)"],
        ["Chromogranin/Synaptophysin","Neuroendocrine tumors (carcinoid, pheochromocytoma)","Diagnosis (IHC)"]
      ]
    },
    mnemonic: "PSaMMoma bodies — 'Papillary (thyroid), Serous (ovarian), Meningioma, Mesothelioma': the four classic tumors with psammoma bodies (laminated calcifications)."
  },

  "Hemodynamics & shock": {
    sections: [
      {
        heading: "Virchow's Triad & Thrombosis",
        bullets: [
          "Virchow's triad (thrombosis risk): (1) Endothelial injury (most important for arterial thrombi — atherosclerosis, surgery, trauma), (2) Stasis/turbulent flow (most important for venous thrombi — bedrest, immobilization, AF), (3) Hypercoagulability (inherited or acquired).",
          "Inherited hypercoagulable states: Factor V Leiden (most common, APC resistance), Prothrombin gene mutation (G20210A), Protein C/S deficiency, Antithrombin III deficiency.",
          "Acquired hypercoagulable states: malignancy, OCP/estrogen, pregnancy, nephrotic syndrome (AT III loss), antiphospholipid syndrome, HIT, prolonged immobilization, surgery.",
          "Lines of Zahn: alternating pale (platelet/fibrin) and dark (RBC) layers — distinguish ante-mortem thrombus from post-mortem clot.",
          "Arterial thrombi: platelet-rich ('white thrombus'), form at sites of endothelial injury/turbulence. Venous thrombi: RBC-rich ('red thrombus'), form in areas of stasis."
        ]
      },
      {
        heading: "Embolism Types",
        bullets: [
          "Thromboembolism (most common): DVT → PE (saddle embolus at bifurcation of pulmonary artery). Risk increases with Virchow's triad factors.",
          "Fat embolism: 24-72h after long bone fractures → triad of respiratory distress, neurologic changes, petechial rash (chest/axillae/conjunctivae).",
          "Air embolism: entry of air into venous system (central line, surgery, decompression sickness). >100 mL can be fatal (creates air lock in right ventricle).",
          "Amniotic fluid embolism: during labor/C-section; amniotic fluid enters maternal circulation → DIC + cardiovascular collapse. Contains fetal squamous cells and lanugo hair. High mortality.",
          "Septic embolism: from infective endocarditis vegetations → embolic infarcts (brain, kidney, spleen from left-sided; lungs from right-sided)."
        ]
      },
      {
        heading: "Infarction",
        bullets: [
          "White (anemic/pale) infarcts: solid organs with single end-arterial blood supply — heart, kidney, spleen, brain. Tissue density prevents hemorrhagic transformation.",
          "Red (hemorrhagic) infarcts: (1) organs with dual blood supply (lungs, liver, intestine), (2) venous occlusion (ovarian/testicular torsion), (3) previously congested tissue, (4) reperfusion of a white infarct.",
          "Watershed (border zone) infarcts: at boundaries between arterial territories; occur with systemic hypotension. In the brain: between ACA/MCA and MCA/PCA territories. In the colon: splenic flexure (SMA/IMA border).",
          "Most infarcts are caused by thrombotic/embolic arterial occlusion. Venous infarcts occur with thrombosis of mesenteric, ovarian, or cerebral veins."
        ]
      },
      {
        heading: "Shock Types & Hemodynamic Profiles",
        bullets: [
          "Hypovolemic: ↓intravascular volume (hemorrhage, dehydration, burns) → ↓CO, ↑SVR. Cold, clammy skin, tachycardia.",
          "Cardiogenic: pump failure (MI >40% LV, myocarditis, valve rupture, arrhythmia) → ↓CO, ↑SVR, ↑PCWP. JVD, pulmonary edema.",
          "Septic (distributive): infection → inflammatory mediators (NO, TNF, IL-1, IL-6) → vasodilation. Early (warm): ↑CO, ↓SVR, warm skin. Late (cold): ↓CO, ↑SVR, cold skin. Treat: fluids → norepinephrine.",
          "Anaphylactic (distributive): IgE-mediated mast cell degranulation → histamine → vasodilation + bronchospasm + ↑permeability. Treat: EPINEPHRINE (first-line).",
          "Neurogenic (distributive): spinal cord injury → loss of sympathetic tone → ↓SVR, bradycardia (unique!), warm/dry skin.",
          "Obstructive: mechanical obstruction to blood flow (cardiac tamponade, tension pneumothorax, massive PE) → ↓CO with specific physical findings."
        ]
      },
      {
        heading: "DIC & Special Conditions",
        bullets: [
          "DIC: widespread coagulation activation → consumption of platelets + clotting factors → simultaneous thrombosis AND bleeding.",
          "DIC triggers: sepsis (most common), trauma, obstetric complications (placental abruption, amniotic fluid embolism), malignancy (AML M3, mucin-secreting adenocarcinoma), snake venom.",
          "DIC labs: ↓platelets, ↓fibrinogen, ↑PT/PTT, ↑D-dimer, schistocytes (microangiopathic hemolytic anemia). Treatment: treat underlying cause + supportive (platelets, FFP, cryoprecipitate).",
          "Waterhouse-Friderichsen syndrome: N. meningitidis → DIC → bilateral adrenal hemorrhagic necrosis → acute adrenal insufficiency → fatal shock.",
          "Edema: ↑hydrostatic (CHF, DVT, cirrhosis/portal HTN), ↓oncotic (nephrotic, cirrhosis, malnutrition), ↑permeability (inflammation, burns, sepsis), lymphatic obstruction (surgery, tumor, filariasis, radiation)."
        ]
      }
    ],
    table: {
      title: "Shock Types Comparison",
      headers: ["Type","Cardiac Output","SVR","PCWP","Skin","Key Feature"],
      rows: [
        ["Hypovolemic","↓","↑","↓","Cold, clammy","Volume loss (hemorrhage, dehydration)"],
        ["Cardiogenic","↓","↑","↑","Cold, clammy","Pump failure (JVD, pulmonary edema)"],
        ["Septic (early)","↑","↓","↓","Warm, flushed","Infection source, high CO"],
        ["Septic (late)","↓","↑","varies","Cold","Myocardial depression, multiorgan failure"],
        ["Anaphylactic","↓","↓","↓","Warm, urticaria","IgE-mediated, treat with epinephrine"],
        ["Neurogenic","↓","↓","↓","Warm, dry","Bradycardia (unique), spinal injury"],
        ["Obstructive","↓","↑","varies","Cold","Tamponade, tension pneumo, massive PE"]
      ]
    },
    mnemonic: "Virchow's triad — 'SHE forms clots': Stasis (immobility, bedrest, AF), Hypercoagulability (FVL, OCP, malignancy, pregnancy), Endothelial injury (surgery, atherosclerosis, trauma)."
  }

};
