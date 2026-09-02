const PULM_QUESTIONS = {

  "Lung physiology & mechanics": [
    {
      vignette: "A 25-year-old man undergoes pulmonary function testing as part of a research study. After a maximal inspiration, he is asked to exhale as forcefully as possible. The volume of air remaining in his lungs after a maximal forced expiration is measured.",
      question: "Which of the following lung volumes does this measurement represent?",
      options: ["Tidal volume", "Expiratory reserve volume", "Residual volume", "Functional residual capacity", "Inspiratory capacity"],
      correctIndex: 2,
      explanation: "Residual volume (RV) is the volume of air remaining in the lungs after a maximal forced expiration. It cannot be measured by spirometry and requires body plethysmography or helium dilution techniques. RV normally equals approximately 1.2 L and prevents complete alveolar collapse.",
      optionExplanations: ["Incorrect. Tidal volume (TV) is the volume of air inhaled or exhaled during normal quiet breathing (~500 mL).", "Incorrect. Expiratory reserve volume (ERV) is the additional volume that can be forcefully exhaled after normal tidal expiration.", "Correct. Residual volume is the air remaining after maximal forced expiration; it cannot be expelled voluntarily.", "Incorrect. Functional residual capacity (FRC) = ERV + RV; it is the volume remaining after normal tidal expiration, not after maximal expiration.", "Incorrect. Inspiratory capacity (IC) = TV + IRV; it is the maximal volume that can be inhaled from the end of a normal expiration."],
      highYieldPoint: "Residual volume is the air remaining after maximal expiration; it cannot be measured by spirometry and requires plethysmography or gas dilution."
    },
    {
      vignette: "A 30-year-old woman breathes quietly at rest. At the end of a normal expiration, the elastic recoil of her lungs pulling inward is perfectly balanced by the outward recoil of the chest wall. No airflow occurs.",
      question: "Which of the following lung volumes or capacities corresponds to this equilibrium point?",
      options: ["Functional residual capacity", "Total lung capacity", "Inspiratory reserve volume", "Vital capacity", "Tidal volume"],
      correctIndex: 0,
      explanation: "Functional residual capacity (FRC) is the volume at which the inward elastic recoil of the lungs equals the outward spring of the chest wall. At FRC, the system is at its natural resting point and intrapleural pressure is most negative relative to this balance. FRC = ERV + RV.",
      optionExplanations: ["Correct. FRC is the equilibrium point where lung inward recoil equals chest wall outward recoil; it is the lung volume at end of normal tidal expiration.", "Incorrect. Total lung capacity (TLC) is the volume at maximal inspiration where both lung and chest wall elastic recoil are directed inward.", "Incorrect. Inspiratory reserve volume is the extra volume that can be inspired above tidal volume, not an equilibrium point.", "Incorrect. Vital capacity (VC = IRV + TV + ERV) is the maximum volume exhaled after maximal inspiration; it is not an equilibrium state.", "Incorrect. Tidal volume is the volume of a normal breath (~500 mL), not a resting equilibrium volume."],
      highYieldPoint: "FRC is the lung volume where inward lung recoil equals outward chest wall recoil — the resting equilibrium of the respiratory system."
    },
    {
      vignette: "A physiologist studies surfactant function in neonatal lungs. She compares pressure-volume curves of air-filled alveoli with and without surfactant. The surfactant-deficient alveoli require significantly greater transmural pressure to remain inflated.",
      question: "Which of the following best explains the primary mechanism by which surfactant prevents alveolar collapse?",
      options: ["It increases alveolar elastin fiber cross-linking", "It increases parasympathetic bronchomotor tone", "It stimulates type I pneumocyte proliferation", "It reduces surface tension at the air-liquid interface by disrupting intermolecular forces of water", "It converts angiotensin I to angiotensin II in the pulmonary vasculature"],
      correctIndex: 3,
      explanation: "Pulmonary surfactant, composed primarily of dipalmitoylphosphatidylcholine (DPPC, also called lecithin) and surfactant proteins (SP-A, B, C, D), is produced by type II pneumocytes. It reduces alveolar surface tension by inserting between water molecules at the air-liquid interface, preventing the high surface tension that would otherwise cause small alveoli to collapse (as predicted by the Law of Laplace: P = 2T/r).",
      optionExplanations: ["Incorrect. Surfactant does not affect structural proteins like elastin. Elastin provides elastic recoil, not surface tension reduction.", "Incorrect. Surfactant has no role in modulating bronchomotor tone.", "Incorrect. Surfactant does not stimulate pneumocyte proliferation. Type II pneumocytes produce surfactant and serve as progenitor cells for type I pneumocytes.", "Correct. Surfactant (DPPC) reduces surface tension at the air-liquid interface, preventing atelectasis, especially in small alveoli where surface tension effects are greatest per the Law of Laplace.", "Incorrect. Angiotensin-converting enzyme (ACE) on pulmonary endothelial cells converts angiotensin I to II; this is unrelated to surfactant function."],
      highYieldPoint: "Surfactant (DPPC from type II pneumocytes) reduces alveolar surface tension, preventing collapse per the Law of Laplace (P = 2T/r); deficiency causes neonatal respiratory distress syndrome."
    },
    {
      vignette: "A 60-year-old man with chronic obstructive pulmonary disease undergoes spirometry. His forced expiratory volume in 1 second (FEV1) is 1.5 L and his forced vital capacity (FVC) is 3.8 L.",
      question: "Which of the following best describes this patient's FEV1/FVC ratio and the type of lung defect it indicates?",
      options: ["Decreased ratio indicating an obstructive defect", "Increased ratio indicating an obstructive defect", "Normal ratio indicating no pulmonary defect", "Decreased ratio indicating a restrictive defect", "Increased ratio indicating a restrictive defect"],
      correctIndex: 0,
      explanation: "The FEV1/FVC ratio is 1.5/3.8 = 0.39 (39%), which is well below the normal threshold of 0.70 (70%). A reduced FEV1/FVC ratio is the hallmark of obstructive lung disease, indicating that airflow limitation prevents rapid expiration. In COPD, both FEV1 and FVC may be reduced, but FEV1 is disproportionately decreased.",
      optionExplanations: ["Correct. FEV1/FVC = 39%, well below 70%, indicating obstructive physiology with disproportionate reduction in expiratory airflow.", "Incorrect. Obstructive disease decreases the FEV1/FVC ratio, it does not increase it.", "Incorrect. A normal FEV1/FVC is ≥70%; this patient's ratio of 39% is markedly reduced.", "Incorrect. In restrictive disease, both FEV1 and FVC are proportionally reduced, so the FEV1/FVC ratio is normal or increased, not decreased.", "Incorrect. While restrictive disease can show an increased FEV1/FVC ratio, this patient's ratio is decreased, not increased."],
      highYieldPoint: "FEV1/FVC < 0.70 = obstructive pattern (COPD, asthma). Restrictive diseases show reduced FVC with normal or increased FEV1/FVC."
    },
    {
      vignette: "A medical student measures oxygen and carbon dioxide partial pressures in a healthy volunteer. Arterial blood gas shows PaO2 of 100 mmHg and PaCO2 of 40 mmHg. She then calculates the alveolar-arterial (A-a) oxygen gradient.",
      question: "Using the alveolar gas equation with an atmospheric pressure of 760 mmHg and respiratory quotient of 0.8, which of the following is closest to the normal A-a gradient in this individual?",
      options: ["0 mmHg", "45-55 mmHg", "25-35 mmHg", "5-15 mmHg", "Greater than 60 mmHg"],
      correctIndex: 3,
      explanation: "The alveolar gas equation calculates PAO2 = FiO2(Patm - PH2O) - PaCO2/RQ = 0.21(760-47) - 40/0.8 = 149.7 - 50 = ~100 mmHg. The A-a gradient = PAO2 - PaO2 = 100 - 100 = ~0, but normal physiologic A-a gradient is 5-15 mmHg due to physiologic shunting (bronchial circulation, thebesian veins) and normal V/Q mismatch in lung bases. Values >15 mmHg suggest pathology.",
      optionExplanations: ["Incorrect. While the calculated values may approach 0, the normal physiologic A-a gradient is 5-15 mmHg due to normal physiologic shunting.", "Incorrect. A gradient this high would indicate significant pulmonary disease.", "Incorrect. An A-a gradient of 25-35 mmHg would be elevated and suggest pulmonary pathology such as V/Q mismatch or shunt.", "Correct. The normal A-a gradient is 5-15 mmHg (increases with age; roughly estimated as age/4 + 4). Values above this suggest V/Q mismatch, shunt, or diffusion impairment.", "Incorrect. An A-a gradient >60 mmHg would suggest severe shunt physiology."],
      highYieldPoint: "Normal A-a gradient = 5-15 mmHg; elevated A-a gradient occurs in V/Q mismatch, shunt, and diffusion impairment but NOT in hypoventilation."
    },
    {
      vignette: "A researcher studies airflow resistance in the tracheobronchial tree. She maps the cross-sectional area and velocity of airflow at each generation of airway branching from the trachea to the terminal bronchioles.",
      question: "At which level of the tracheobronchial tree is the total cross-sectional area greatest and airflow velocity lowest?",
      options: ["Trachea", "Main bronchi", "Segmental bronchi", "Terminal bronchioles", "Medium-sized bronchi"],
      correctIndex: 3,
      explanation: "Although each individual terminal bronchiole has a small cross-sectional area, the total combined cross-sectional area of all terminal bronchioles is enormous due to extensive parallel branching. Because flow velocity is inversely proportional to cross-sectional area (V = Q/A), airflow velocity is lowest at the terminal bronchioles. This allows adequate time for gas exchange by diffusion in the respiratory zone.",
      optionExplanations: ["Incorrect. The trachea has the smallest total cross-sectional area and the highest airflow velocity in the airway tree.", "Incorrect. The main bronchi have a slightly larger combined area than the trachea but far less than the terminal bronchioles.", "Incorrect. Segmental bronchi have increasing total cross-sectional area with each generation but still much less than terminal bronchioles.", "Correct. Terminal bronchioles have the greatest total cross-sectional area due to massive parallel branching, resulting in the lowest airflow velocity and transition to diffusion-dependent gas exchange.", "Incorrect. Medium-sized bronchi are intermediate in total cross-sectional area."],
      highYieldPoint: "Total cross-sectional area is greatest at the terminal bronchioles, where airflow velocity is lowest and gas exchange transitions from convection to diffusion."
    },
    {
      vignette: "A 35-year-old woman undergoes a methacholine challenge test for evaluation of chronic cough. After inhalation of methacholine, spirometry shows a 25% decrease in FEV1 from baseline.",
      question: "Which of the following receptors does methacholine stimulate to produce bronchoconstriction?",
      options: ["Beta-2 adrenergic receptors on bronchial smooth muscle", "Alpha-1 adrenergic receptors on bronchial smooth muscle", "Histamine H2 receptors on bronchial epithelium", "Nicotinic receptors at the neuromuscular junction", "Muscarinic M3 receptors on bronchial smooth muscle"],
      correctIndex: 4,
      explanation: "Methacholine is a synthetic muscarinic agonist that stimulates M3 receptors on bronchial smooth muscle, causing bronchoconstriction via Gq signaling (IP3/DAG → increased intracellular calcium → smooth muscle contraction). A positive methacholine challenge (≥20% decline in FEV1) indicates airway hyperreactivity, supporting a diagnosis of asthma.",
      optionExplanations: ["Incorrect. Beta-2 adrenergic receptors mediate bronchodilation via Gs signaling (increased cAMP); they are targeted by albuterol for asthma relief.", "Incorrect. Alpha-1 receptors are primarily on vascular smooth muscle and do not mediate bronchoconstriction.", "Incorrect. H2 receptors are primarily found in gastric parietal cells and regulate acid secretion, not bronchoconstriction.", "Incorrect. Nicotinic receptors are at the neuromuscular junction and autonomic ganglia; methacholine has minimal nicotinic activity.", "Correct. Methacholine activates M3 muscarinic receptors on airway smooth muscle (Gq → IP3/Ca2+ release → bronchoconstriction), confirming airway hyperreactivity in asthma."],
      highYieldPoint: "Methacholine stimulates M3 muscarinic receptors (Gq pathway) on bronchial smooth muscle; a positive challenge test (≥20% FEV1 drop) supports asthma diagnosis."
    },
    {
      vignette: "A 55-year-old man with obesity hypoventilation syndrome is evaluated. His arterial blood gas shows PaCO2 of 55 mmHg. The physician explains that alveolar ventilation is the critical determinant of CO2 elimination.",
      question: "Which of the following formulas correctly defines alveolar ventilation?",
      options: ["Respiratory rate × tidal volume", "Respiratory rate × dead space volume", "Total lung capacity minus residual volume", "FEV1 divided by FVC", "Respiratory rate × (tidal volume − dead space volume)"],
      correctIndex: 4,
      explanation: "Alveolar ventilation (VA) = respiratory rate (RR) × (tidal volume − dead space volume) = RR × (VT − VD). Only the air reaching the alveoli participates in gas exchange. Anatomic dead space (~150 mL) is the volume of the conducting airways (nose to terminal bronchioles) that does not participate in gas exchange. PaCO2 is inversely proportional to alveolar ventilation.",
      optionExplanations: ["Incorrect. RR × VT = minute ventilation, which includes dead space ventilation and does not accurately reflect gas exchange.", "Incorrect. RR × VD = dead space ventilation, which is the wasted portion of ventilation not participating in gas exchange.", "Incorrect. TLC − RV = vital capacity, a static lung volume, not a measure of ventilation.", "Incorrect. FEV1/FVC is used to distinguish obstructive from restrictive patterns on spirometry.", "Correct. Alveolar ventilation = RR × (VT − VD); it excludes dead space and represents the effective ventilation participating in gas exchange."],
      highYieldPoint: "Alveolar ventilation = RR × (VT − VD); PaCO2 is inversely proportional to alveolar ventilation. Hypoventilation raises PaCO2."
    },
    {
      vignette: "A physiologist studies the oxygen-hemoglobin dissociation curve in blood samples. She adds 2,3-bisphosphoglycerate (2,3-BPG) to one sample and observes a shift in the curve.",
      question: "Which of the following best describes the effect of increased 2,3-BPG on the oxygen-hemoglobin dissociation curve?",
      options: ["Left shift with decreased P50", "Left shift with increased P50", "No change in the curve", "Decreased oxygen-carrying capacity without curve shift", "Right shift with increased P50"],
      correctIndex: 4,
      explanation: "2,3-BPG binds to deoxyhemoglobin and stabilizes the T (tense) state, reducing hemoglobin's oxygen affinity and shifting the oxygen-hemoglobin dissociation curve to the right (increased P50). This promotes oxygen unloading in peripheral tissues. Factors that right-shift the curve include increased temperature, increased PCO2, decreased pH (Bohr effect), and increased 2,3-BPG.",
      optionExplanations: ["Incorrect. A left shift (decreased P50) indicates increased oxygen affinity, caused by decreased temperature, decreased PCO2, increased pH, decreased 2,3-BPG, fetal hemoglobin, and CO poisoning.", "Incorrect. A left shift implies increased O2 affinity, which is the opposite of what increased 2,3-BPG does; additionally, left shifts decrease P50, not increase it.", "Incorrect. 2,3-BPG is a major allosteric regulator of hemoglobin and significantly affects the curve.", "Incorrect. 2,3-BPG changes hemoglobin's affinity for oxygen (curve shift) but does not alter the total oxygen-carrying capacity (which depends on hemoglobin concentration).", "Correct. 2,3-BPG stabilizes the T-state of hemoglobin, decreasing O2 affinity, shifting the curve right, and increasing P50 — promoting tissue O2 delivery."],
      highYieldPoint: "Right-shift factors (↓ O2 affinity, ↑ P50): ↑ temperature, ↑ CO2, ↓ pH, ↑ 2,3-BPG. Left-shift: opposite factors + fetal Hb + CO."
    },
    {
      vignette: "A 40-year-old woman undergoes bronchoscopy with bronchoalveolar lavage for evaluation of a diffuse pulmonary infiltrate. Microscopic examination of the lavage fluid reveals large cells with abundant cytoplasm containing dense lamellated bodies on electron microscopy.",
      question: "Which of the following cell types was most likely recovered in this lavage specimen?",
      options: ["Type I pneumocytes", "Type II pneumocytes", "Clara cells", "Alveolar macrophages", "Pulmonary endothelial cells"],
      correctIndex: 1,
      explanation: "Type II pneumocytes are cuboidal epithelial cells that contain lamellar bodies — concentric membrane-bound organelles storing surfactant (dipalmitoylphosphatidylcholine). They cover only ~5% of the alveolar surface area but are responsible for surfactant production and secretion, and they serve as progenitor cells that can differentiate into type I pneumocytes following alveolar injury.",
      optionExplanations: ["Incorrect. Type I pneumocytes are thin, flat cells covering ~95% of the alveolar surface area to facilitate gas diffusion; they lack lamellar bodies.", "Correct. Type II pneumocytes contain lamellar bodies (surfactant storage organelles) and are the source of pulmonary surfactant; they also serve as alveolar stem cells.", "Incorrect. Clara cells (club cells) are non-ciliated secretory cells in bronchioles that produce Clara cell secretory protein and degrade toxins; they do not contain lamellar bodies.", "Incorrect. Alveolar macrophages contain phagolysosomes but not the characteristic lamellated bodies seen with surfactant storage.", "Incorrect. Pulmonary endothelial cells line capillaries and contain ACE but do not have lamellar bodies."],
      highYieldPoint: "Type II pneumocytes contain lamellar bodies (surfactant), cover 5% of alveolar surface, and serve as progenitor cells for type I pneumocytes."
    },
    {
      vignette: "A 28-year-old man is brought to the emergency department after a stab wound to the left chest. Chest X-ray shows complete collapse of the left lung with shift of the mediastinum to the left. Breath sounds are absent on the left.",
      question: "Which of the following pressure changes best explains the lung collapse in this patient?",
      options: ["Intrapleural pressure has become more negative", "Intrapleural pressure has equalized with atmospheric pressure", "Alveolar pressure has become markedly negative", "Transpulmonary pressure has increased", "Intra-abdominal pressure has exceeded thoracic pressure"],
      correctIndex: 1,
      explanation: "Normally, intrapleural pressure is subatmospheric (approximately −5 cmH2O at FRC), which maintains the lungs in an expanded state. A penetrating chest wound allows atmospheric air to enter the pleural space (pneumothorax), equalizing intrapleural pressure with atmospheric pressure (0 cmH2O). This eliminates the transpulmonary pressure gradient, and the lung collapses due to its inherent elastic recoil. Mediastinal shift toward the collapsed side indicates simple (non-tension) pneumothorax.",
      optionExplanations: ["Incorrect. More negative intrapleural pressure would increase transpulmonary pressure and further expand the lung, not cause collapse.", "Correct. Air entering the pleural space through the wound equalizes intrapleural pressure with atmospheric pressure, eliminating the transpulmonary gradient and allowing the lung to collapse.", "Incorrect. Markedly negative alveolar pressure would draw air into the alveoli, not cause collapse.", "Incorrect. Increased transpulmonary pressure (Palveolar − Ppleural) would expand the lung; in pneumothorax, transpulmonary pressure approaches zero.", "Incorrect. Intra-abdominal pressure changes do not directly cause acute lung collapse in penetrating chest trauma."],
      highYieldPoint: "Pneumothorax occurs when air enters the pleural space, equalizing intrapleural and atmospheric pressure and eliminating the transpulmonary gradient needed to keep lungs expanded."
    },
    {
      vignette: "A newborn delivered at 28 weeks gestation develops progressive respiratory distress within hours of birth. Chest X-ray shows diffuse bilateral ground-glass opacities with air bronchograms. The infant requires mechanical ventilation.",
      question: "Which of the following is the primary pathophysiologic mechanism underlying this infant's respiratory distress?",
      options: ["Aspiration of meconium-stained amniotic fluid", "Deficiency of surfactant due to immature type II pneumocytes", "Congenital diaphragmatic hernia with lung hypoplasia", "Transient tachypnea from retained fetal lung fluid", "Group B streptococcal pneumonia"],
      correctIndex: 1,
      explanation: "Neonatal respiratory distress syndrome (NRDS, also called hyaline membrane disease) results from inadequate surfactant production by immature type II pneumocytes. Surfactant production begins around 24-28 weeks gestation but does not reach mature levels until approximately 35 weeks. Lecithin-to-sphingomyelin (L/S) ratio ≥2 in amniotic fluid indicates lung maturity. Surfactant deficiency increases alveolar surface tension, causing diffuse atelectasis, hyaline membrane formation, and impaired gas exchange.",
      optionExplanations: ["Incorrect. Meconium aspiration syndrome typically occurs in post-term infants and presents with patchy infiltrates and hyperinflation.", "Correct. Premature birth (28 weeks) means immature type II pneumocytes with insufficient surfactant production, leading to NRDS with atelectasis and hyaline membranes.", "Incorrect. Congenital diaphragmatic hernia would show bowel loops in the thorax on X-ray, not bilateral ground-glass opacities.", "Incorrect. Transient tachypnea of the newborn is typically seen in term infants delivered by cesarean section and resolves within 24-48 hours.", "Incorrect. GBS pneumonia can mimic NRDS radiographically but is an infectious etiology requiring positive cultures; the clinical scenario is most consistent with prematurity-related surfactant deficiency."],
      highYieldPoint: "NRDS results from surfactant deficiency in premature infants; lecithin/sphingomyelin ratio ≥2 indicates lung maturity. Treat with exogenous surfactant and maternal betamethasone."
    },
    {
      vignette: "A 22-year-old woman at sea level has an arterial PO2 of 100 mmHg and hemoglobin concentration of 15 g/dL. Assuming hemoglobin is 100% saturated at this PO2 and dissolved O2 follows Henry's law (0.003 mL O2/dL per mmHg), the physician calculates her total blood oxygen content.",
      question: "Which of the following is closest to this patient's total arterial oxygen content?",
      options: ["0.3 mL O2/dL", "15 mL O2/dL", "20.4 mL O2/dL", "30 mL O2/dL", "40 mL O2/dL"],
      correctIndex: 2,
      explanation: "Total oxygen content = (1.34 × Hb × SaO2) + (0.003 × PaO2) = (1.34 × 15 × 1.0) + (0.003 × 100) = 20.1 + 0.3 = 20.4 mL O2/dL. The vast majority of oxygen is carried bound to hemoglobin (20.1 mL O2/dL), with only a tiny fraction dissolved in plasma (0.3 mL O2/dL). This is why anemia significantly reduces oxygen delivery despite a normal PaO2.",
      optionExplanations: ["Incorrect. 0.3 mL O2/dL represents only the dissolved oxygen fraction; this ignores the much larger hemoglobin-bound fraction.", "Incorrect. 15 mL O2/dL underestimates the hemoglobin-bound component.", "Correct. Total O2 content = (1.34 × 15 × 1.0) + (0.003 × 100) = 20.4 mL O2/dL; hemoglobin-bound O2 vastly exceeds dissolved O2.", "Incorrect. 30 mL O2/dL would require either a much higher hemoglobin concentration or the use of an incorrect binding coefficient.", "Incorrect. 40 mL O2/dL is far above the physiologic range for normal hemoglobin levels."],
      highYieldPoint: "O2 content = (1.34 × Hb × SaO2) + (0.003 × PaO2). Hemoglobin-bound O2 (~20 mL/dL) vastly exceeds dissolved O2 (~0.3 mL/dL)."
    },
    {
      vignette: "A pulmonologist explains to a medical student that perfusion in the upright lung is not uniformly distributed. Using the West zones model, she describes how the relationship between alveolar pressure, pulmonary arterial pressure, and pulmonary venous pressure differs across lung regions.",
      question: "In which zone of the lung does alveolar pressure exceed both arterial and venous pressures, resulting in capillary compression and minimal blood flow?",
      options: ["Zone 1 (lung apex)", "Zone 2 (mid-lung)", "Zone 3 (lung base)", "Zone 4 (lowest region with interstitial compression)", "All zones have equal blood flow distribution"],
      correctIndex: 0,
      explanation: "In West Zone 1 (lung apex), alveolar pressure (PA) exceeds both pulmonary arterial pressure (Pa) and pulmonary venous pressure (Pv): PA > Pa > Pv. This compresses the capillaries, creating dead space ventilation. Zone 1 conditions are minimal in healthy individuals but can increase with positive-pressure ventilation or hemorrhagic shock (decreased Pa).",
      optionExplanations: ["Correct. Zone 1 (apex): PA > Pa > Pv → capillary compression and minimal perfusion; this zone is mostly physiologic dead space.", "Incorrect. Zone 2 (mid-lung): Pa > PA > Pv → flow depends on the arterial-alveolar pressure difference; this is where pulmonary arterial pressure exceeds alveolar pressure.", "Incorrect. Zone 3 (base): Pa > Pv > PA → distended capillaries with continuous flow; this zone has the greatest perfusion.", "Incorrect. Zone 4 is sometimes described at the very base where interstitial pressure may compress extra-alveolar vessels, but it is not where PA exceeds Pa.", "Incorrect. Gravity creates a gradient in perfusion, with the base receiving the most blood flow in upright posture."],
      highYieldPoint: "West Zone 1 (apex): PA > Pa > Pv → alveolar dead space. Zone 3 (base): Pa > Pv > PA → maximal perfusion. V/Q ratio is highest at the apex."
    },
    {
      vignette: "A 50-year-old man undergoes general anesthesia for abdominal surgery. After induction, the anesthesiologist notes that the patient's lung compliance has decreased. A pressure-volume curve of the respiratory system is obtained, revealing that a greater change in pressure is required to achieve the same tidal volume compared to the awake state.",
      question: "Which of the following most likely accounts for the decreased compliance observed under general anesthesia?",
      options: ["Increased surfactant production by type II pneumocytes", "Decreased chest wall recoil due to muscle paralysis", "Development of atelectasis in dependent lung regions", "Bronchospasm from volatile anesthetic agents", "Increased pulmonary vascular resistance"],
      correctIndex: 2,
      explanation: "Under general anesthesia, cephalad displacement of the diaphragm (due to loss of diaphragmatic tone), reduced functional residual capacity, and compression of dependent lung regions lead to atelectasis. Atelectatic lung regions require higher opening pressures to inflate, reducing overall lung compliance. This is a major contributor to intraoperative hypoxemia and the need for positive end-expiratory pressure (PEEP).",
      optionExplanations: ["Incorrect. Surfactant production is not acutely increased by anesthesia; increased surfactant would improve compliance.", "Incorrect. While muscle paralysis affects chest wall mechanics, the primary compliance reduction is from loss of lung volume due to dependent atelectasis.", "Correct. Anesthesia-induced atelectasis in dependent lung regions reduces FRC and lung compliance, requiring higher pressures to ventilate.", "Incorrect. Volatile anesthetics are actually bronchodilators and would not cause bronchospasm.", "Incorrect. Pulmonary vascular resistance changes during anesthesia do not directly reduce lung compliance."],
      highYieldPoint: "General anesthesia reduces FRC and causes dependent atelectasis, decreasing lung compliance. PEEP is used to recruit collapsed alveoli."
    }
  ],

  "Obstructive lung disease": [
    {
      vignette: "A 7-year-old boy is brought to the emergency department with acute onset of wheezing, cough, and dyspnea after playing with a neighbor's cat. Physical examination reveals diffuse bilateral expiratory wheezing and prolonged expiratory phase. Pulse oximetry shows SpO2 of 91%.",
      question: "Which of the following is the most important initial mediator responsible for the acute bronchoconstriction in this patient?",
      options: ["Histamine from mast cells", "Leukotriene C4", "Interleukin-5", "Major basic protein from eosinophils", "Tumor necrosis factor-alpha"],
      correctIndex: 0,
      explanation: "In acute allergic asthma (early-phase response), cross-linking of IgE on mast cell surfaces by allergen triggers immediate degranulation, releasing preformed histamine, which acts on H1 receptors on bronchial smooth muscle to cause bronchoconstriction. The early phase occurs within minutes and is primarily mediated by histamine, prostaglandin D2, and leukotrienes from mast cells.",
      optionExplanations: ["Correct. Histamine is the primary preformed mediator released immediately from mast cells during the early-phase asthmatic response, causing rapid bronchoconstriction via H1 receptors.", "Incorrect. Leukotriene C4 contributes to bronchoconstriction and is part of the mast cell response, but histamine is the most important initial preformed mediator released upon degranulation.", "Incorrect. IL-5 promotes eosinophil recruitment and activation during the late-phase response (4-8 hours later), not the acute initial phase.", "Incorrect. Major basic protein is released from eosinophils during the late-phase response and contributes to epithelial damage, not the acute bronchoconstriction.", "Incorrect. TNF-alpha is a pro-inflammatory cytokine involved in chronic airway inflammation but is not the primary mediator of acute bronchoconstriction."],
      highYieldPoint: "Acute asthma: IgE cross-linking on mast cells → histamine release (early phase, minutes). Late phase (4-8 hrs): eosinophils, leukotrienes, IL-5, epithelial damage."
    },
    {
      vignette: "A 62-year-old man with a 40-pack-year smoking history presents with progressive dyspnea and a barrel-shaped chest. Pulmonary function tests show increased total lung capacity, increased residual volume, and decreased DLCO. Chest CT reveals centrilobular lucencies predominantly in the upper lobes.",
      question: "Which of the following enzymes is most directly responsible for the parenchymal destruction seen in this patient's condition?",
      options: ["Angiotensin-converting enzyme", "Myeloperoxidase", "Neutrophil elastase", "Cyclooxygenase-2", "Superoxide dismutase"],
      correctIndex: 2,
      explanation: "Centrilobular emphysema (most common in smokers, upper lobe predominant) results from protease-antiprotease imbalance. Cigarette smoke recruits neutrophils and macrophages to the lungs, which release neutrophil elastase and other proteases that destroy alveolar walls. Simultaneously, smoking inactivates alpha-1-antitrypsin (the major antiprotease), further tilting the balance toward tissue destruction.",
      optionExplanations: ["Incorrect. ACE converts angiotensin I to II and degrades bradykinin on pulmonary endothelium; it does not cause parenchymal destruction.", "Incorrect. Myeloperoxidase generates hypochlorous acid in neutrophil phagolysosomes for microbial killing but is not the primary enzyme causing emphysematous tissue destruction.", "Correct. Neutrophil elastase degrades elastin in alveolar walls; smoking-induced protease-antiprotease imbalance (excess elastase, inactivated alpha-1-antitrypsin) causes emphysema.", "Incorrect. COX-2 produces prostaglandins involved in inflammation and fever but does not directly destroy alveolar parenchyma.", "Incorrect. Superoxide dismutase is a protective antioxidant enzyme that neutralizes superoxide radicals; it does not cause tissue destruction."],
      highYieldPoint: "Emphysema = protease (neutrophil elastase) vs. antiprotease (alpha-1-antitrypsin) imbalance. Centrilobular = smoking/upper lobes; panacinar = alpha-1-AT deficiency/lower lobes."
    },
    {
      vignette: "A 35-year-old non-smoking man of Scandinavian descent presents with progressive dyspnea and early-onset emphysema. Chest CT shows panacinar emphysema predominantly in the lower lobes. Serum testing reveals a markedly low alpha-1-antitrypsin level. He also has mildly elevated liver enzymes.",
      question: "Which of the following best describes the molecular mechanism causing liver disease in this condition?",
      options: ["Accumulation of misfolded protein in the endoplasmic reticulum of hepatocytes", "Excess protease activity destroying hepatocytes", "Autoimmune destruction of bile ducts", "Iron overload in hepatocytes", "Defective bilirubin conjugation"],
      correctIndex: 0,
      explanation: "Alpha-1-antitrypsin (AAT) deficiency (most commonly PiZZ genotype) causes liver disease due to polymerization and accumulation of misfolded AAT protein in the endoplasmic reticulum of hepatocytes (seen as PAS-positive, diastase-resistant globules on biopsy). This leads to hepatocyte injury and can progress to cirrhosis and hepatocellular carcinoma. The lung disease results from the deficiency of circulating AAT, while the liver disease results from toxic gain-of-function of the retained protein.",
      optionExplanations: ["Correct. Misfolded AAT protein (PiZZ) accumulates in the hepatocyte ER, causing hepatocyte injury, cirrhosis, and risk of hepatocellular carcinoma (toxic gain-of-function).", "Incorrect. Excess protease activity explains the lung damage (unopposed neutrophil elastase) but not the liver disease.", "Incorrect. Autoimmune bile duct destruction characterizes primary biliary cholangitis (anti-mitochondrial antibodies), not AAT deficiency.", "Incorrect. Iron overload (hemochromatosis) is a separate genetic condition involving HFE mutations.", "Incorrect. Defective bilirubin conjugation causes conditions like Gilbert syndrome or Crigler-Najjar syndrome."],
      highYieldPoint: "AAT deficiency: lung disease from loss-of-function (no protease inhibition) + liver disease from gain-of-function (misfolded protein accumulation in ER → PAS+ diastase-resistant globules)."
    },
    {
      vignette: "A 55-year-old woman with chronic bronchitis presents with a productive cough of thick purulent sputum for the past 4 months. She has had similar episodes each year for the past 3 years. Physical examination reveals rhonchi and coarse crackles bilaterally. She is cyanotic and has bilateral lower extremity edema.",
      question: "Which of the following pathologic findings is most characteristic of this patient's airway disease?",
      options: ["Destruction of alveolar walls with airspace enlargement", "Kartagener triad of situs inversus, bronchiectasis, and sinusitis", "Non-caseating granulomas in the bronchial wall", "Hypertrophy and hyperplasia of mucus-secreting submucosal glands", "Smooth muscle hypertrophy with Curschmann spirals in sputum"],
      correctIndex: 3,
      explanation: "Chronic bronchitis is defined clinically as a productive cough lasting at least 3 months per year for 2 consecutive years. Pathologically, it is characterized by hypertrophy and hyperplasia of mucus-secreting submucosal glands in the large airways (increased Reid index >50%, where Reid index = gland thickness/total bronchial wall thickness). The patient's cyanosis and edema suggest cor pulmonale ('blue bloater' phenotype).",
      optionExplanations: ["Incorrect. Destruction of alveolar walls characterizes emphysema ('pink puffer'), not chronic bronchitis.", "Incorrect. Kartagener syndrome involves ciliary dynein arm defects causing immotile cilia, a distinct entity from chronic bronchitis.", "Incorrect. Non-caseating granulomas suggest sarcoidosis, not chronic bronchitis.", "Correct. Chronic bronchitis features submucosal gland hypertrophy with an increased Reid index (>50%); goblet cell metaplasia occurs in smaller airways.", "Incorrect. Smooth muscle hypertrophy and Curschmann spirals (mucus plugs/shed epithelium) are features of asthma, not chronic bronchitis."],
      highYieldPoint: "Chronic bronchitis: productive cough ≥3 months/year for ≥2 years. Path: submucosal gland hypertrophy, Reid index >50%. 'Blue bloater' = cyanosis + cor pulmonale."
    },
    {
      vignette: "A 45-year-old woman with poorly controlled asthma is brought to the emergency department with severe dyspnea and inability to speak in full sentences. Despite continuous nebulized albuterol and ipratropium, her oxygen saturation continues to decline. Arterial blood gas shows pH 7.28, PaCO2 52 mmHg, PaO2 55 mmHg.",
      question: "Which of the following findings on this patient's ABG is most concerning and indicates impending respiratory failure?",
      options: ["Mildly elevated PaCO2 indicating fatigue", "Low PaO2 indicating V/Q mismatch", "Low pH due to metabolic acidosis", "Normal bicarbonate level", "Rising PaCO2 in the setting of an asthma exacerbation"],
      correctIndex: 4,
      explanation: "In an acute asthma exacerbation, hyperventilation from respiratory distress normally drives PaCO2 down (respiratory alkalosis). A normal or rising PaCO2 in this context is ominous because it indicates respiratory muscle fatigue and inability to maintain the increased ventilatory effort needed to compensate. This signals impending respiratory failure and the need for immediate intubation and mechanical ventilation.",
      optionExplanations: ["Incorrect. While the elevated PaCO2 does reflect fatigue, describing it as 'mildly elevated' underestimates the significance in this context.", "Incorrect. Hypoxemia is expected in severe asthma and is treated with supplemental oxygen, but it is not the most ominous sign.", "Incorrect. The low pH here is due to respiratory acidosis (elevated PaCO2), not primary metabolic acidosis.", "Incorrect. Bicarbonate level interpretation is secondary to the critical finding of rising PaCO2.", "Correct. In acute asthma, PaCO2 should be low due to hyperventilation; a rising PaCO2 indicates respiratory muscle fatigue and impending respiratory arrest, requiring emergent intubation."],
      highYieldPoint: "In acute asthma, expect low PaCO2 (hyperventilation). Normal or rising PaCO2 = impending respiratory failure = emergent intubation needed."
    },
    {
      vignette: "A 58-year-old man with COPD is prescribed a long-acting muscarinic antagonist (LAMA) inhaler for maintenance therapy. He asks how this medication works differently from his rescue albuterol inhaler.",
      question: "Which of the following best describes the mechanism of action of tiotropium compared to albuterol?",
      options: ["Tiotropium blocks M3 receptors on airway smooth muscle; albuterol activates beta-2 receptors", "Both drugs activate beta-2 adrenergic receptors but with different durations", "Tiotropium inhibits phosphodiesterase-4; albuterol blocks leukotriene receptors", "Tiotropium is a mast cell stabilizer; albuterol is a histamine antagonist", "Both drugs block muscarinic receptors with different receptor subtype selectivity"],
      correctIndex: 0,
      explanation: "Tiotropium is a long-acting muscarinic antagonist (LAMA) that blocks M3 receptors on bronchial smooth muscle, preventing acetylcholine-mediated bronchoconstriction (Gq → IP3 → Ca2+ release). Albuterol is a short-acting beta-2 agonist (SABA) that activates beta-2 adrenergic receptors on bronchial smooth muscle (Gs → cAMP → smooth muscle relaxation). They achieve bronchodilation through distinct pathways.",
      optionExplanations: ["Correct. Tiotropium blocks parasympathetic M3 receptors (anticholinergic bronchodilation); albuterol activates sympathetic beta-2 receptors (adrenergic bronchodilation). Both cause bronchodilation via different mechanisms.", "Incorrect. Tiotropium is an anticholinergic agent, not a beta-2 agonist.", "Incorrect. PDE-4 inhibitors include roflumilast; leukotriene receptor antagonists include montelukast. Neither description applies to tiotropium or albuterol.", "Incorrect. Mast cell stabilizers include cromolyn sodium; neither tiotropium nor albuterol functions through these mechanisms.", "Incorrect. Only tiotropium blocks muscarinic receptors; albuterol acts on an entirely different receptor class (beta-2 adrenergic)."],
      highYieldPoint: "COPD bronchodilators: SABA (albuterol) = beta-2 agonist → ↑cAMP → relaxation. LAMA (tiotropium) = M3 blocker → prevents Gq-mediated bronchoconstriction."
    },
    {
      vignette: "A 12-year-old boy with asthma uses a leukotriene receptor antagonist as a controller medication. His mother asks the pediatrician about the specific inflammatory mediators this drug targets.",
      question: "Which of the following mediators does montelukast specifically block, and from what precursor are they derived?",
      options: ["Prostaglandin E2 derived from arachidonic acid via cyclooxygenase", "Platelet-activating factor derived from membrane phospholipids via phospholipase A2", "Thromboxane A2 derived from arachidonic acid via cyclooxygenase", "Leukotriene D4 derived from arachidonic acid via 5-lipoxygenase", "Bradykinin derived from kininogen via kallikrein"],
      correctIndex: 3,
      explanation: "Montelukast blocks the cysteinyl leukotriene receptor 1 (CysLT1), which is activated by leukotrienes C4, D4, and E4. These leukotrienes are derived from arachidonic acid through the 5-lipoxygenase pathway (arachidonic acid → 5-HPETE → leukotriene A4 → LTC4 → LTD4 → LTE4). Cysteinyl leukotrienes are potent bronchoconstrictors, increase vascular permeability, and stimulate mucus secretion.",
      optionExplanations: ["Incorrect. PGE2 is produced via the COX pathway and is targeted by NSAIDs, not montelukast.", "Incorrect. PAF is a phospholipid mediator, not a leukotriene; montelukast does not target PAF.", "Incorrect. TXA2 is a COX product from platelets; it is inhibited by aspirin, not montelukast.", "Correct. Montelukast blocks CysLT1 receptors for leukotrienes (C4, D4, E4), which are produced from arachidonic acid via the 5-lipoxygenase pathway.", "Incorrect. Bradykinin is a vasoactive peptide degraded by ACE; it is unrelated to the leukotriene pathway."],
      highYieldPoint: "Montelukast blocks CysLT1 receptor (LTD4). Leukotrienes: arachidonic acid → 5-lipoxygenase → LTA4 → LTC4/D4/E4 → bronchoconstriction + mucus + inflammation."
    },
    {
      vignette: "A 4-year-old boy is brought to the emergency department with a barking cough, inspiratory stridor, and low-grade fever that developed over 24 hours. An anteroposterior neck X-ray shows subglottic narrowing described as a 'steeple sign.'",
      question: "Which of the following organisms is the most common cause of this patient's condition?",
      options: ["Haemophilus influenzae type b", "Staphylococcus aureus", "Respiratory syncytial virus", "Parainfluenza virus", "Streptococcus pyogenes"],
      correctIndex: 3,
      explanation: "This presentation is classic for croup (laryngotracheobronchitis), most commonly caused by parainfluenza virus (types 1 and 2). Croup affects children 6 months to 3 years, presenting with a barking/seal-like cough, inspiratory stridor, and hoarseness. The 'steeple sign' on AP neck X-ray reflects subglottic tracheal narrowing from inflammation and edema. Treatment includes cool mist, racemic epinephrine, and dexamethasone.",
      optionExplanations: ["Incorrect. H. influenzae type b classically caused epiglottitis (thumbprint sign on lateral neck X-ray, drooling, tripod position), now rare due to Hib vaccination.", "Incorrect. S. aureus can cause bacterial tracheitis, a secondary infection that may complicate croup but is not the primary etiology.", "Incorrect. RSV is the most common cause of bronchiolitis in infants (<2 years), not croup.", "Correct. Parainfluenza virus (especially types 1 and 2) is the most common cause of croup, causing subglottic inflammation with the characteristic steeple sign.", "Incorrect. S. pyogenes causes pharyngitis and peritonsillar abscess but is not a common cause of croup."],
      highYieldPoint: "Croup = parainfluenza virus → subglottic edema → steeple sign, barking cough, inspiratory stridor. Epiglottitis = H. influenzae type b → thumbprint sign."
    },
    {
      vignette: "A 50-year-old woman with a long history of recurrent sinopulmonary infections is evaluated for chronic productive cough with large volumes of foul-smelling sputum. CT of the chest shows dilated, thick-walled airways with a 'signet ring' appearance and a 'tram-track' pattern.",
      question: "Which of the following conditions is most likely responsible for this patient's airway findings?",
      options: ["Chronic asthma with airway remodeling", "Idiopathic pulmonary fibrosis", "Centrilobular emphysema", "Small cell lung carcinoma with post-obstructive changes", "Bronchiectasis from chronic recurrent infections"],
      correctIndex: 4,
      explanation: "Bronchiectasis is characterized by permanent dilation of bronchi due to chronic necrotizing infection and inflammation that destroys the muscular and elastic components of the bronchial wall. CT findings include the 'signet ring sign' (dilated bronchus next to its accompanying pulmonary artery) and 'tram-track' sign (thickened, parallel bronchial walls). Common predisposing conditions include cystic fibrosis, Kartagener syndrome, allergic bronchopulmonary aspergillosis, immunodeficiency, and recurrent infections.",
      optionExplanations: ["Incorrect. Asthma remodeling involves subepithelial fibrosis and smooth muscle hypertrophy but does not cause the permanent airway dilation with signet ring sign seen in bronchiectasis.", "Incorrect. IPF is a restrictive disease with honeycombing and lower lobe fibrosis, not dilated airways.", "Incorrect. Centrilobular emphysema shows destruction of alveolar walls with airspace enlargement, not dilated thick-walled airways.", "Incorrect. Post-obstructive pneumonia can cause localized bronchiectasis, but the bilateral chronic pattern with recurrent sinopulmonary infections suggests diffuse bronchiectasis.", "Correct. Chronic recurrent infections cause irreversible airway dilation (bronchiectasis) with characteristic signet ring sign and tram-track appearance on CT."],
      highYieldPoint: "Bronchiectasis: permanent airway dilation from chronic infection/inflammation. CT: signet ring sign + tram-track sign. Causes: CF, Kartagener, ABPA, immunodeficiency."
    },
    {
      vignette: "A 68-year-old man with a 50-pack-year smoking history and known COPD presents with worsening dyspnea, peripheral edema, and jugular venous distension. An echocardiogram shows right ventricular hypertrophy with elevated pulmonary artery systolic pressure of 55 mmHg.",
      question: "Which of the following is the primary mechanism leading to pulmonary hypertension and right heart failure in this patient?",
      options: ["Left ventricular systolic dysfunction", "Chronic thromboembolic disease", "Hypoxic vasoconstriction of pulmonary arterioles", "Mitral valve stenosis", "Primary pulmonary arterial endothelial dysfunction"],
      correctIndex: 2,
      explanation: "In COPD, chronic alveolar hypoxia triggers hypoxic pulmonary vasoconstriction (HPV), which chronically increases pulmonary vascular resistance. Over time, this leads to pulmonary arterial remodeling (medial hypertrophy and intimal fibrosis), sustained pulmonary hypertension, right ventricular hypertrophy, and eventually right heart failure (cor pulmonale). Destruction of the pulmonary capillary bed in emphysema also contributes.",
      optionExplanations: ["Incorrect. Left ventricular dysfunction causes Group 2 pulmonary hypertension; this patient's primary disease is COPD (Group 3).", "Incorrect. Chronic thromboembolic disease causes Group 4 pulmonary hypertension, not COPD-associated cor pulmonale.", "Correct. Chronic hypoxia in COPD causes sustained pulmonary arteriolar vasoconstriction, remodeling, increased PVR, and cor pulmonale (Group 3 PH).", "Incorrect. Mitral stenosis increases left atrial pressure and causes Group 2 pulmonary hypertension, unrelated to COPD.", "Incorrect. Primary pulmonary arterial endothelial dysfunction (plexiform lesions) characterizes Group 1 pulmonary arterial hypertension (PAH), a separate entity."],
      highYieldPoint: "COPD → chronic hypoxia → hypoxic pulmonary vasoconstriction → pulmonary hypertension (Group 3) → cor pulmonale (RV hypertrophy/failure)."
    },
    {
      vignette: "A 28-year-old woman with cystic fibrosis presents with a new episode of worsening cough with green sputum. Sputum culture grows mucoid colonies on MacConkey agar. This organism has been her chronic colonizer since age 15.",
      question: "Which of the following organisms is most likely responsible for this patient's chronic pulmonary infection?",
      options: ["Staphylococcus aureus", "Aspergillus fumigatus", "Haemophilus influenzae", "Burkholderia cepacia", "Pseudomonas aeruginosa"],
      correctIndex: 4,
      explanation: "Pseudomonas aeruginosa is the most common chronic pulmonary pathogen in adult cystic fibrosis patients. It produces a mucoid phenotype (alginate biofilm) that protects it from host immunity and antibiotics, making eradication extremely difficult. In CF, defective CFTR leads to thick, dehydrated airway secretions that impair mucociliary clearance, creating an ideal environment for Pseudomonas colonization.",
      optionExplanations: ["Incorrect. S. aureus is the most common pathogen in early childhood CF but is typically supplanted by Pseudomonas in adolescence and adulthood.", "Incorrect. Aspergillus fumigatus can cause allergic bronchopulmonary aspergillosis (ABPA) in CF patients but does not produce mucoid colonies on MacConkey agar.", "Incorrect. H. influenzae can cause respiratory infections in CF, particularly in younger children, but is not the most common chronic colonizer in adults.", "Incorrect. Burkholderia cepacia is associated with CF and can cause rapid deterioration, but it is less common than Pseudomonas as a chronic colonizer.", "Correct. Mucoid Pseudomonas aeruginosa is the hallmark chronic colonizer in adult CF patients, forming alginate biofilms that resist clearance and antibiotics."],
      highYieldPoint: "CF pathogens by age: S. aureus (childhood) → Pseudomonas aeruginosa (adolescence/adulthood, mucoid phenotype). CF gene: CFTR on chromosome 7 (ΔF508 most common mutation)."
    },
    {
      vignette: "A 10-month-old infant is brought to the emergency department in late winter with wheezing, tachypnea, nasal flaring, and subcostal retractions. Chest X-ray shows bilateral hyperinflation with peribronchiolar thickening. A rapid antigen test on nasal wash is positive.",
      question: "Which of the following is the most likely causative organism?",
      options: ["Influenza A virus", "Respiratory syncytial virus", "Parainfluenza virus type 1", "Mycoplasma pneumoniae", "Bordetella pertussis"],
      correctIndex: 1,
      explanation: "Respiratory syncytial virus (RSV) is the most common cause of bronchiolitis in infants, typically occurring in winter epidemics. RSV infects bronchiolar epithelium, causing necrosis, edema, and mucus plugging of the small airways, leading to air trapping and hyperinflation. Treatment is primarily supportive. Palivizumab (anti-RSV monoclonal antibody) is given prophylactically to high-risk infants.",
      optionExplanations: ["Incorrect. Influenza A can cause respiratory illness in infants but is not the most common cause of bronchiolitis.", "Correct. RSV is the leading cause of bronchiolitis in infants <2 years old, presenting in winter with wheezing, hyperinflation, and peribronchiolar thickening.", "Incorrect. Parainfluenza type 1 is the most common cause of croup, not bronchiolitis.", "Incorrect. Mycoplasma pneumoniae causes atypical (walking) pneumonia, most commonly in school-age children and young adults.", "Incorrect. Bordetella pertussis causes whooping cough with paroxysmal cough and post-tussive vomiting, not bronchiolitis."],
      highYieldPoint: "RSV = #1 cause of bronchiolitis in infants. Croup = parainfluenza. Bronchiolitis = wheezing + hyperinflation in infant. Prophylaxis: palivizumab for high-risk infants."
    },
    {
      vignette: "A 72-year-old man with severe COPD (FEV1 30% predicted) is being treated with an inhaled corticosteroid/long-acting beta-agonist combination and tiotropium. He asks why he still becomes short of breath despite using all his inhalers. His physician explains that the disease has caused irreversible structural changes.",
      question: "Which of the following structural changes is the primary cause of irreversible airflow limitation in emphysema?",
      options: ["Bronchospasm of large conducting airways", "Mucus hypersecretion in terminal bronchioles", "Loss of radial traction on small airways due to alveolar wall destruction", "Endobronchial tumor obstruction", "Vocal cord paralysis"],
      correctIndex: 2,
      explanation: "In emphysema, destruction of alveolar walls eliminates the radial traction (tethering effect) that normally holds small airways open during expiration. Without this structural support, small airways collapse during forced expiration, causing irreversible airflow limitation that does not respond to bronchodilators. This loss of elastic recoil also decreases the driving pressure for expiratory airflow.",
      optionExplanations: ["Incorrect. Bronchospasm is a reversible component of airflow obstruction and is characteristic of asthma rather than the irreversible component of emphysema.", "Incorrect. Mucus hypersecretion is a feature of chronic bronchitis; while present in COPD, it is not the primary cause of irreversible obstruction in emphysema.", "Correct. Alveolar wall destruction in emphysema eliminates radial traction on small airways, causing them to collapse during expiration — the key irreversible component of airflow limitation.", "Incorrect. Endobronchial tumors cause localized obstruction, not the diffuse airflow limitation of emphysema.", "Incorrect. Vocal cord paralysis causes upper airway obstruction with inspiratory stridor, not the expiratory limitation of emphysema."],
      highYieldPoint: "Emphysema: alveolar wall destruction → loss of radial traction on small airways → expiratory collapse → irreversible airflow limitation + loss of elastic recoil."
    },
    {
      vignette: "A 19-year-old man with a history of exercise-induced asthma takes two puffs of his albuterol inhaler before basketball practice. Twenty minutes later, he can exercise without wheezing. Spirometry after albuterol shows a 15% improvement in FEV1 compared to baseline.",
      question: "Which of the following second messenger pathways is directly activated by albuterol to produce bronchodilation?",
      options: ["Gq → phospholipase C → IP3 and DAG → increased intracellular calcium", "Gs → adenylyl cyclase → increased cAMP → smooth muscle relaxation", "Gi → decreased adenylyl cyclase → decreased cAMP → smooth muscle contraction", "Receptor tyrosine kinase → Ras-MAPK → cell proliferation", "Guanylyl cyclase → increased cGMP → smooth muscle relaxation"],
      correctIndex: 1,
      explanation: "Albuterol is a short-acting beta-2 agonist (SABA) that binds beta-2 adrenergic receptors on bronchial smooth muscle. These receptors are coupled to Gs proteins, which activate adenylyl cyclase, increasing intracellular cyclic AMP (cAMP). Elevated cAMP activates protein kinase A, which phosphorylates myosin light chain kinase, reducing its activity and causing smooth muscle relaxation (bronchodilation).",
      optionExplanations: ["Incorrect. The Gq pathway (IP3/DAG/Ca2+) mediates bronchoconstriction via M3 muscarinic receptors; it is the opposite of the bronchodilatory pathway.", "Correct. Beta-2 agonists activate Gs → adenylyl cyclase → ↑cAMP → PKA → smooth muscle relaxation (bronchodilation).", "Incorrect. Gi signaling decreases cAMP and does not mediate the bronchodilatory effect of beta-2 agonists.", "Incorrect. Receptor tyrosine kinase pathways mediate growth factor signaling, not acute bronchodilation.", "Incorrect. cGMP mediates vasodilation (via nitric oxide) in vascular smooth muscle but is not the primary pathway of beta-2 agonist bronchodilation."],
      highYieldPoint: "Beta-2 agonists (albuterol): Gs → ↑cAMP → bronchodilation. Muscarinic agonists: Gq/M3 → ↑IP3/Ca2+ → bronchoconstriction. Anti-muscarinics (tiotropium) block M3."
    },
    {
      vignette: "A 40-year-old woman with long-standing asthma undergoes bronchial biopsy during bronchoscopy to evaluate persistent airflow limitation despite maximal therapy. Histologic examination reveals thickened basement membrane, subepithelial fibrosis, smooth muscle hypertrophy, and goblet cell hyperplasia.",
      question: "Which of the following terms best describes these irreversible structural changes in the bronchial wall?",
      options: ["Bronchiectasis", "Airway remodeling", "Granulomatous inflammation", "Caseous necrosis", "Hamartomatous malformation"],
      correctIndex: 1,
      explanation: "Airway remodeling in chronic asthma refers to structural changes resulting from chronic inflammation: subepithelial fibrosis (collagen deposition below the basement membrane), smooth muscle hypertrophy and hyperplasia, goblet cell metaplasia, and angiogenesis. These changes are partly irreversible and contribute to persistent airflow limitation that does not fully respond to bronchodilators — a feature sometimes called 'fixed obstruction' in long-standing asthma.",
      optionExplanations: ["Incorrect. Bronchiectasis involves permanent dilation of bronchi from destruction of the muscular and elastic wall components, distinct from the subepithelial changes described.", "Correct. Airway remodeling encompasses the irreversible structural changes (subepithelial fibrosis, smooth muscle hypertrophy, goblet cell hyperplasia) resulting from chronic asthmatic inflammation.", "Incorrect. Granulomatous inflammation (epithelioid macrophages, giant cells) is characteristic of sarcoidosis or tuberculosis, not asthma.", "Incorrect. Caseous necrosis is the hallmark of tuberculosis, not asthma.", "Incorrect. Hamartomas are benign lung tumors composed of disorganized normal tissue elements (cartilage, fat); they are unrelated to asthma."],
      highYieldPoint: "Asthma airway remodeling: subepithelial fibrosis + smooth muscle hypertrophy + goblet cell hyperplasia + basement membrane thickening → irreversible ('fixed') obstruction."
    }
  ],

  "Restrictive lung disease": [
    {
      vignette: "A 55-year-old man with progressive dyspnea over 2 years presents with bibasilar inspiratory crackles ('Velcro rales') and digital clubbing. High-resolution CT of the chest shows peripheral, basilar-predominant reticular opacities with honeycombing and traction bronchiectasis. Pulmonary function tests reveal decreased FVC, decreased TLC, and decreased DLCO with an FEV1/FVC ratio of 85%.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Idiopathic pulmonary fibrosis", "Sarcoidosis", "Hypersensitivity pneumonitis", "Asbestosis", "Goodpasture syndrome"],
      correctIndex: 0,
      explanation: "Idiopathic pulmonary fibrosis (IPF) is the most common idiopathic interstitial pneumonia, presenting in adults >50 years with progressive dyspnea, bibasilar Velcro crackles, and clubbing. HRCT shows a usual interstitial pneumonia (UIP) pattern: peripheral, basilar honeycombing with traction bronchiectasis. PFTs show a restrictive pattern (decreased FVC, TLC) with decreased DLCO. Prognosis is poor (median survival 3-5 years). Treatment includes pirfenidone and nintedanib.",
      optionExplanations: ["Correct. IPF presents in older adults with UIP pattern on HRCT (basilar honeycombing, traction bronchiectasis), Velcro crackles, clubbing, and restrictive PFTs.", "Incorrect. Sarcoidosis typically affects younger patients (20-40 years), presents with bilateral hilar lymphadenopathy, and shows non-caseating granulomas rather than honeycombing.", "Incorrect. Hypersensitivity pneumonitis has an identifiable antigen exposure and often shows upper/mid-lung predominance in the chronic form.", "Incorrect. Asbestosis can mimic IPF radiographically but requires a history of asbestos exposure and may show pleural plaques.", "Incorrect. Goodpasture syndrome presents with pulmonary hemorrhage and glomerulonephritis (anti-GBM antibodies), not progressive fibrosis."],
      highYieldPoint: "IPF: most common idiopathic interstitial pneumonia. UIP pattern on HRCT (basilar honeycombing). Median survival 3-5 years. Rx: pirfenidone, nintedanib."
    },
    {
      vignette: "A 32-year-old African American woman presents with bilateral hilar lymphadenopathy, erythema nodosum, and anterior uveitis. Serum ACE level is elevated. Transbronchial biopsy reveals well-formed granulomas without central necrosis.",
      question: "Which of the following findings on histopathology is most characteristic of this patient's disease?",
      options: ["Non-caseating granulomas with multinucleated giant cells", "Caseating granulomas with Langhans giant cells", "Ferruginous bodies with dumbbell-shaped fibers", "Diffuse alveolar damage with hyaline membranes", "Eosinophilic infiltration with Charcot-Leyden crystals"],
      correctIndex: 0,
      explanation: "Sarcoidosis is a systemic granulomatous disease of unknown etiology characterized by non-caseating (non-necrotizing) granulomas in affected organs. It most commonly presents in young African American women with bilateral hilar lymphadenopathy, erythema nodosum, and elevated serum ACE. Granulomas may contain Schaumann bodies (calcified concretions) and asteroid bodies (stellate inclusions) within giant cells.",
      optionExplanations: ["Correct. Non-caseating granulomas are the hallmark of sarcoidosis, distinguishing it from tuberculosis and fungal infections that produce caseating granulomas.", "Incorrect. Caseating granulomas with central necrosis are characteristic of tuberculosis, not sarcoidosis. While both have granulomas, the presence of necrosis distinguishes TB.", "Incorrect. Ferruginous bodies (asbestos bodies with golden-brown iron coating) are characteristic of asbestosis.", "Incorrect. Diffuse alveolar damage with hyaline membranes is the pathologic hallmark of acute respiratory distress syndrome (ARDS).", "Incorrect. Eosinophilic infiltration with Charcot-Leyden crystals is associated with asthma and eosinophilic lung diseases."],
      highYieldPoint: "Sarcoidosis: non-caseating granulomas, bilateral hilar lymphadenopathy, elevated ACE, hypercalcemia (1α-hydroxylase in macrophages). Most common in young Black women."
    },
    {
      vignette: "A 65-year-old retired shipyard worker presents with progressive dyspnea and dry cough. Chest X-ray shows bilateral lower lobe interstitial fibrosis and calcified pleural plaques. He has a 30-year history of occupational asbestos exposure.",
      question: "Which of the following is the most common initial site of asbestos fiber deposition in the lungs?",
      options: ["Upper lobe apices", "Main bronchi", "Pleural surface only", "Hilum of the lung", "Bifurcation of respiratory bronchioles and alveolar ducts"],
      correctIndex: 4,
      explanation: "Asbestos fibers (serpentine chrysotile and amphibole types) are deposited at the bifurcations of respiratory bronchioles and alveolar ducts, where airflow patterns cause impaction. Macrophages attempt to phagocytose the fibers, and the resulting chronic inflammation and fibrosis begin at these sites and progress to involve the lower lobes. Asbestos bodies (golden-brown, dumbbell-shaped, ferruginous bodies) form when macrophages coat fibers with hemosiderin.",
      optionExplanations: ["Incorrect. Upper lobe disease is characteristic of silicosis and coal workers' pneumoconiosis, not asbestosis.", "Incorrect. Main bronchi are large conducting airways; asbestos fibers are small enough to reach distal airways and alveolar ducts.", "Incorrect. While asbestos causes pleural plaques and mesothelioma, parenchymal asbestosis begins at bronchiolar bifurcations, not solely the pleural surface.", "Incorrect. Hilar involvement with lymphadenopathy is more characteristic of sarcoidosis and silicosis ('eggshell calcifications').", "Correct. Asbestos fibers deposit at respiratory bronchiole and alveolar duct bifurcations, initiating inflammation and fibrosis that progresses to involve the lower lobes."],
      highYieldPoint: "Asbestosis: lower lobe fibrosis + calcified pleural plaques. Asbestos bodies = ferruginous bodies (iron-coated fibers). ↑ risk of mesothelioma and bronchogenic carcinoma."
    },
    {
      vignette: "A 48-year-old farmer presents with recurrent episodes of dyspnea, cough, and fever occurring 4-8 hours after working in his barn during hay season. Symptoms resolve when he avoids the barn for several days. Serum shows precipitating IgG antibodies against thermophilic actinomycetes.",
      question: "Which type of hypersensitivity reaction is primarily responsible for this patient's disease?",
      options: ["Type I (IgE-mediated)", "Type II (antibody-mediated cytotoxicity)", "Type I and Type IV combined", "Type IV (cell-mediated/delayed)", "Type III (immune complex-mediated)"],
      correctIndex: 4,
      explanation: "Hypersensitivity pneumonitis (HP, also called extrinsic allergic alveolitis) involves a combination of type III and type IV hypersensitivity reactions, but the acute form described here (4-8 hour onset after exposure) is primarily driven by type III (immune complex) reactions. IgG antibodies form immune complexes with inhaled antigens (thermophilic actinomycetes in farmer's lung), activating complement and causing neutrophilic inflammation. The subacute and chronic forms involve more type IV (T-cell mediated) granulomatous inflammation.",
      optionExplanations: ["Incorrect. Type I (IgE-mediated) reactions cause immediate symptoms within minutes (allergic asthma, anaphylaxis), not the 4-8 hour delay seen here.", "Incorrect. Type II reactions involve antibodies against cell surface antigens (autoimmune hemolytic anemia, transfusion reactions) and are not involved in HP.", "Incorrect. While HP involves both type III and IV reactions, the acute phase with 4-8 hour onset is predominantly type III.", "Incorrect. Type IV reactions contribute to the chronic granulomatous phase of HP but are not the primary driver of the acute 4-8 hour reaction.", "Correct. The acute phase of HP (4-8 hr delay) is primarily a type III immune complex reaction with IgG precipitins against the offending antigen."],
      highYieldPoint: "Hypersensitivity pneumonitis: type III (acute, 4-8 hrs) + type IV (chronic, granulomas). Farmer's lung = thermophilic actinomycetes. IgG precipitins, not IgE."
    },
    {
      vignette: "A 45-year-old sandblaster is evaluated for progressive dyspnea. Chest X-ray reveals bilateral upper lobe nodular opacities and hilar lymph node enlargement with 'eggshell' calcification. He has worked with silica-containing materials for 20 years.",
      question: "Which of the following cell types and mechanisms is most directly involved in the pathogenesis of silicosis?",
      options: ["Eosinophils releasing major basic protein", "Mast cells degranulating in response to IgE", "Neutrophils releasing myeloperoxidase", "Macrophages unable to digest silica particles, triggering fibrogenic cytokine release", "B cells producing anti-silica antibodies"],
      correctIndex: 3,
      explanation: "In silicosis, inhaled crystalline silica particles are engulfed by alveolar macrophages but cannot be digested due to their crystalline structure. The silica damages macrophage phagolysosomes, activating the NLRP3 inflammasome and triggering release of IL-1, TNF, and fibrogenic factors (TGF-beta, PDGF). Macrophage death releases silica, which is re-ingested by new macrophages, perpetuating a cycle of inflammation and fibrosis.",
      optionExplanations: ["Incorrect. Eosinophils are involved in parasitic infections and allergic reactions, not silicosis.", "Incorrect. Mast cell degranulation is an IgE-mediated type I hypersensitivity reaction, not involved in silicosis.", "Incorrect. While neutrophils contribute to acute inflammation, macrophages and their inability to clear silica are the central pathogenic mechanism.", "Correct. Macrophages engulf silica but cannot digest it; this activates the NLRP3 inflammasome and releases fibrogenic cytokines, driving progressive fibrosis.", "Incorrect. Silicosis is not antibody-mediated; it is driven by macrophage-silica interactions."],
      highYieldPoint: "Silicosis: upper lobe fibrosis + eggshell calcification of hilar nodes. Macrophages can't digest silica → NLRP3 inflammasome → fibrosis. ↑ TB risk."
    },
    {
      vignette: "A 60-year-old woman with a 15-year history of systemic sclerosis (scleroderma) presents with worsening dyspnea. HRCT shows ground-glass opacities and reticular patterns in the lower lobes. PFTs reveal FVC 55% predicted, TLC 60% predicted, and DLCO 35% predicted.",
      question: "Which histopathologic pattern is most commonly associated with interstitial lung disease in systemic sclerosis?",
      options: ["Usual interstitial pneumonia (UIP)", "Lymphocytic interstitial pneumonia (LIP)", "Cryptogenic organizing pneumonia (COP)", "Nonspecific interstitial pneumonia (NSIP)", "Desquamative interstitial pneumonia (DIP)"],
      correctIndex: 3,
      explanation: "Nonspecific interstitial pneumonia (NSIP) is the most common histopathologic pattern in connective tissue disease-associated interstitial lung disease, including systemic sclerosis. NSIP shows temporally uniform interstitial inflammation and/or fibrosis, in contrast to the temporally heterogeneous pattern of UIP. NSIP has a better prognosis than UIP and often responds to immunosuppressive therapy. On HRCT, it shows ground-glass opacities with lower lobe predominance and relative subpleural sparing.",
      optionExplanations: ["Incorrect. UIP is the pattern seen in idiopathic pulmonary fibrosis. While it can occur in scleroderma, NSIP is significantly more common.", "Incorrect. LIP is associated with Sjögren syndrome and lymphoproliferative disorders, not typically scleroderma.", "Incorrect. COP (previously BOOP) presents with patchy consolidation and is associated with infection, drugs, and connective tissue diseases but is not the most common pattern in scleroderma.", "Correct. NSIP is the most common interstitial lung disease pattern in scleroderma and other connective tissue diseases, showing temporally uniform inflammation/fibrosis.", "Incorrect. DIP is most commonly associated with cigarette smoking and shows uniform accumulation of macrophages in alveolar spaces."],
      highYieldPoint: "Connective tissue disease (scleroderma) → NSIP pattern (most common). IPF → UIP pattern. NSIP has better prognosis than UIP and responds to immunosuppression."
    },
    {
      vignette: "A 70-year-old man in the intensive care unit develops progressive hypoxemia 48 hours after an episode of aspiration pneumonia. His PaO2/FiO2 ratio is 150 mmHg despite high-flow supplemental oxygen. Chest X-ray shows bilateral diffuse opacities.",
      question: "Which of the following pathologic findings is the hallmark of the exudative phase of this patient's condition?",
      options: ["Granuloma formation in the interstitium", "Mucus plugging of the bronchioles", "Honeycomb fibrosis in the lung periphery", "Hyaline membranes lining the alveolar ducts and alveoli", "Cavitary necrosis of the lung parenchyma"],
      correctIndex: 3,
      explanation: "This patient has acute respiratory distress syndrome (ARDS), defined by acute onset, bilateral opacities, PaO2/FiO2 ≤300, and a non-cardiogenic etiology. The exudative phase (first week) is characterized by diffuse alveolar damage (DAD) with hyaline membranes — eosinophilic, protein-rich deposits composed of necrotic epithelial cells, fibrin, and plasma proteins lining the alveolar surfaces. The proliferative phase follows (type II pneumocyte hyperplasia), potentially progressing to the fibrotic phase.",
      optionExplanations: ["Incorrect. Granulomas are characteristic of sarcoidosis and tuberculosis, not ARDS.", "Incorrect. Mucus plugging is a feature of asthma and chronic bronchitis, not ARDS.", "Incorrect. Honeycomb fibrosis is a late-stage finding in idiopathic pulmonary fibrosis (UIP pattern), not the acute phase of ARDS.", "Correct. Hyaline membranes (diffuse alveolar damage) are the pathologic hallmark of the exudative phase of ARDS.", "Incorrect. Cavitary necrosis occurs in tuberculosis, fungal infections, and certain malignancies, not typical ARDS."],
      highYieldPoint: "ARDS: PaO2/FiO2 ≤300, bilateral infiltrates, non-cardiogenic. Exudative phase → hyaline membranes (DAD). Treat with low tidal volume ventilation (lung-protective)."
    },
    {
      vignette: "A 75-year-old woman with severe kyphoscoliosis is evaluated for chronic dyspnea. PFTs show reduced FVC (50% predicted), reduced TLC (55% predicted), and an FEV1/FVC ratio of 82%. Her DLCO corrected for alveolar volume is normal.",
      question: "Which of the following best explains the normal DLCO/VA in this patient despite her restrictive ventilatory defect?",
      options: ["The lung parenchyma is intrinsically normal; restriction is extrapulmonary", "Pulmonary vascular disease is compensating for the restriction", "The patient has concurrent emphysema balancing the restriction", "Chest wall compliance is increased in kyphoscoliosis", "Alveolar-capillary membrane thickness is decreased"],
      correctIndex: 0,
      explanation: "Kyphoscoliosis causes extrapulmonary (chest wall) restriction, limiting lung expansion without damaging the alveolar parenchyma or gas exchange surface. Therefore, while total lung volumes are reduced, the DLCO corrected for alveolar volume (DLCO/VA, also called KCO) is normal because the available alveolar-capillary membrane is intact. In contrast, intrinsic parenchymal diseases (IPF, sarcoidosis) reduce DLCO/VA because fibrosis destroys the gas exchange surface.",
      optionExplanations: ["Correct. Kyphoscoliosis is an extrapulmonary restrictive disease; the lung tissue itself is normal, so gas exchange per unit volume (DLCO/VA) is preserved.", "Incorrect. There is no compensatory pulmonary vascular mechanism in extrapulmonary restriction.", "Incorrect. Concurrent emphysema would decrease DLCO, not maintain a normal value.", "Incorrect. Kyphoscoliosis decreases chest wall compliance (makes it stiffer), which is the cause of the restriction.", "Incorrect. Alveolar-capillary membrane thickness is normal in extrapulmonary restriction; it is not decreased."],
      highYieldPoint: "Restrictive disease: extrapulmonary (chest wall, neuromuscular) = normal DLCO/VA. Intrinsic (IPF, sarcoidosis) = decreased DLCO/VA due to parenchymal destruction."
    },
    {
      vignette: "A 38-year-old woman who takes amiodarone for arrhythmia control develops progressive cough and dyspnea over several months. Chest CT shows bilateral ground-glass opacities and consolidation. Lung biopsy reveals foamy macrophages within the alveoli.",
      question: "Which of the following is the most likely mechanism of amiodarone-induced pulmonary toxicity?",
      options: ["IgE-mediated mast cell degranulation", "Activation of the complement cascade", "Immune complex deposition in alveolar capillaries", "Inhibition of angiotensin-converting enzyme", "Direct cytotoxic injury to pneumocytes with phospholipid accumulation"],
      correctIndex: 4,
      explanation: "Amiodarone is an amphiphilic drug that accumulates in lysosomes and inhibits phospholipase, causing phospholipid accumulation within cells (phospholipidosis). This direct cytotoxic injury affects type II pneumocytes and other lung cells, leading to interstitial pneumonitis and fibrosis. The characteristic foamy macrophages on biopsy contain accumulated phospholipid material. Amiodarone pulmonary toxicity occurs in 5-15% of patients on long-term therapy.",
      optionExplanations: ["Incorrect. Amiodarone toxicity is not IgE-mediated; it results from direct cellular toxicity.", "Incorrect. Complement activation is not the primary mechanism of amiodarone-induced pulmonary damage.", "Incorrect. Immune complex deposition (type III hypersensitivity) is not the mechanism of amiodarone lung toxicity.", "Incorrect. ACE inhibitors can cause dry cough (via bradykinin accumulation) but amiodarone toxicity has a different mechanism.", "Correct. Amiodarone causes direct cytotoxic injury via phospholipid accumulation (phospholipidosis) in pneumocytes and macrophages, producing foamy macrophages on biopsy."],
      highYieldPoint: "Amiodarone pulmonary toxicity: direct cytotoxicity → phospholipidosis → foamy macrophages on biopsy. Other amiodarone effects: thyroid (hypo/hyper), hepatotoxicity, corneal deposits, blue-gray skin."
    },
    {
      vignette: "A 42-year-old man with a history of bird keeping for 15 years presents with chronic cough, dyspnea, and weight loss. HRCT shows diffuse ground-glass opacities, mosaic attenuation, and centrilobular nodules. Lung biopsy reveals poorly formed non-caseating granulomas and interstitial fibrosis.",
      question: "Which of the following antigens is most likely responsible for this patient's condition?",
      options: ["Silica dust", "Aspergillus fumigatus spores", "Avian proteins from feathers and droppings", "Beryllium metal particles", "Coal dust"],
      correctIndex: 2,
      explanation: "This patient has chronic hypersensitivity pneumonitis (bird fancier's lung) caused by prolonged exposure to avian proteins found in bird feathers, droppings, and serum. Chronic HP can progress to irreversible fibrosis. The poorly formed granulomas and interstitial fibrosis with centrilobular nodules are characteristic. Other types of HP include farmer's lung (thermophilic actinomycetes), humidifier lung (thermophilic bacteria), and hot tub lung (Mycobacterium avium complex).",
      optionExplanations: ["Incorrect. Silica causes silicosis with well-formed silicotic nodules and upper lobe predominance, not HP.", "Incorrect. Aspergillus causes allergic bronchopulmonary aspergillosis (ABPA) and aspergillomas, not the HP pattern described.", "Correct. Avian proteins (bird fancier's lung) cause chronic HP with granulomas, fibrosis, and the characteristic HRCT pattern of ground-glass opacities and mosaic attenuation.", "Incorrect. Beryllium causes berylliosis (chronic beryllium disease), which can mimic sarcoidosis with non-caseating granulomas but is an occupational exposure, not from bird keeping.", "Incorrect. Coal dust causes coal workers' pneumoconiosis with coal macules and progressive massive fibrosis."],
      highYieldPoint: "Hypersensitivity pneumonitis: farmer's lung (actinomycetes), bird fancier's lung (avian proteins), hot tub lung (MAC). Type III + IV hypersensitivity. IgG precipitins (not IgE)."
    },
    {
      vignette: "A 25-year-old woman with Duchenne muscular dystrophy carrier status brings her 16-year-old son for evaluation of progressive weakness. He is wheelchair-bound and has mild scoliosis. PFTs show FVC 40% predicted and the flow-volume loop shows reduced flow at all lung volumes. His DLCO corrected for alveolar volume is within normal limits.",
      question: "Which of the following is the primary mechanism of respiratory impairment in this patient?",
      options: ["Alveolar-capillary membrane thickening", "Progressive interstitial fibrosis", "Respiratory muscle weakness causing inability to generate adequate inspiratory and expiratory pressures", "Chronic airway inflammation with mucus plugging", "Pulmonary vascular remodeling with intimal fibrosis"],
      correctIndex: 2,
      explanation: "Duchenne muscular dystrophy causes progressive skeletal muscle weakness including the respiratory muscles (diaphragm, intercostals, abdominal muscles). This results in extrapulmonary restriction — the lung parenchyma is normal, but patients cannot generate adequate inspiratory pressures to fully expand the lungs or expiratory pressures for effective cough. The normal DLCO/VA confirms intact lung parenchyma. Respiratory failure is the leading cause of death in DMD.",
      optionExplanations: ["Incorrect. Alveolar-capillary membrane thickening occurs in parenchymal diseases like IPF; DLCO/VA would be decreased.", "Incorrect. Interstitial fibrosis would reduce DLCO/VA and show parenchymal changes on imaging.", "Correct. Neuromuscular disease (DMD) causes respiratory failure through progressive weakness of the diaphragm and accessory muscles, with normal underlying lung tissue.", "Incorrect. Airway inflammation and mucus plugging are features of obstructive diseases like asthma and COPD.", "Incorrect. Pulmonary vascular remodeling is characteristic of pulmonary arterial hypertension, not muscular dystrophy."],
      highYieldPoint: "Neuromuscular restrictive diseases (DMD, myasthenia gravis, ALS): normal DLCO/VA, reduced MIP/MEP, weak cough. Respiratory failure = leading cause of death in DMD."
    },
    {
      vignette: "A 50-year-old man with newly diagnosed sarcoidosis undergoes laboratory testing. His serum calcium is 11.5 mg/dL, and his 1,25-dihydroxyvitamin D level is elevated despite a normal 25-hydroxyvitamin D level.",
      question: "Which of the following mechanisms best explains the hypercalcemia in this patient?",
      options: ["PTH-related peptide (PTHrP) secretion by granulomas", "Increased intestinal calcium absorption due to excess dietary calcium", "Ectopic 1-alpha-hydroxylase activity in activated macrophages within granulomas", "Primary hyperparathyroidism with parathyroid adenoma", "Osteolytic bone metastases from occult malignancy"],
      correctIndex: 2,
      explanation: "In sarcoidosis, activated macrophages within granulomas express 1-alpha-hydroxylase, which converts 25-hydroxyvitamin D to active 1,25-dihydroxyvitamin D (calcitriol). This ectopic calcitriol production is independent of normal renal regulation (not suppressed by calcium or PTH feedback) and leads to increased intestinal calcium absorption and bone resorption, causing hypercalcemia. This mechanism also occurs in other granulomatous diseases (TB, fungal infections, lymphoma).",
      optionExplanations: ["Incorrect. PTHrP-mediated hypercalcemia (humoral hypercalcemia of malignancy) is seen with squamous cell carcinomas and renal cell carcinoma, not sarcoidosis.", "Incorrect. While calcium absorption is increased, the mechanism is through ectopic calcitriol production, not dietary excess.", "Correct. Macrophages in sarcoid granulomas express 1α-hydroxylase, producing excess 1,25-(OH)2 vitamin D (calcitriol) → increased calcium absorption → hypercalcemia.", "Incorrect. Primary hyperparathyroidism would show elevated PTH with elevated calcium; in sarcoidosis, PTH is suppressed by hypercalcemia.", "Incorrect. Osteolytic bone metastases cause local cytokine-mediated hypercalcemia and would not explain elevated 1,25-dihydroxyvitamin D."],
      highYieldPoint: "Sarcoidosis hypercalcemia: granuloma macrophages have 1α-hydroxylase → ↑ 1,25-(OH)2D → ↑ Ca2+ absorption. Also seen in TB and lymphoma. Treat with steroids."
    },
    {
      vignette: "A 28-year-old woman presents with acute-onset high fever, dry cough, and rapidly progressive dyspnea 2 weeks after starting nitrofurantoin for a urinary tract infection. Chest X-ray shows bilateral diffuse infiltrates. Eosinophil count on CBC is 1200/μL.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Bacterial pneumonia", "Acute eosinophilic pneumonia from drug reaction", "Pulmonary embolism", "Pneumocystis jirovecii pneumonia", "Congestive heart failure"],
      correctIndex: 1,
      explanation: "Nitrofurantoin is a well-known cause of drug-induced pulmonary eosinophilia (acute eosinophilic pneumonia). The acute reaction typically presents within weeks of starting the drug with fever, cough, dyspnea, bilateral infiltrates, and peripheral eosinophilia. The mechanism involves a hypersensitivity reaction. Other drugs causing eosinophilic lung disease include sulfonamides, NSAIDs, and methotrexate. Treatment is drug discontinuation ± corticosteroids.",
      optionExplanations: ["Incorrect. Bacterial pneumonia typically presents with productive purulent cough and lobar consolidation without peripheral eosinophilia.", "Correct. Nitrofurantoin commonly causes acute eosinophilic pulmonary reactions with bilateral infiltrates, peripheral eosinophilia, and fever within weeks of starting the drug.", "Incorrect. Pulmonary embolism presents with acute dyspnea, pleuritic chest pain, and tachycardia but not bilateral infiltrates with eosinophilia.", "Incorrect. PJP occurs in immunocompromised patients (HIV with CD4 <200) and does not cause eosinophilia.", "Incorrect. CHF causes bilateral effusions and pulmonary edema but not eosinophilia; there is no cardiac history here."],
      highYieldPoint: "Drug-induced eosinophilic pneumonia: nitrofurantoin, sulfonamides, NSAIDs. Peripheral eosinophilia + bilateral infiltrates + temporal drug correlation. Treatment: stop the drug ± steroids."
    },
    {
      vignette: "A 55-year-old woman with rheumatoid arthritis who has been taking methotrexate for 3 years presents with progressive dyspnea. Chest CT shows diffuse ground-glass opacities. Lung biopsy shows an interstitial lymphocytic infiltrate with scattered poorly formed granulomas.",
      question: "Which of the following is the most appropriate next step in management?",
      options: ["Increase methotrexate dose for better RA control", "Discontinue methotrexate and consider corticosteroid therapy", "Start broad-spectrum antibiotics for hospital-acquired pneumonia", "Begin antifungal therapy for invasive aspergillosis", "Initiate chemotherapy for pulmonary lymphoma"],
      correctIndex: 1,
      explanation: "Methotrexate pneumonitis is a hypersensitivity drug reaction that can occur at any time during treatment. It presents with subacute cough, dyspnea, fever, and ground-glass opacities. Biopsy may show interstitial inflammation with granulomas. The cornerstone of treatment is immediate discontinuation of methotrexate. Corticosteroids are often used for moderate-to-severe cases. Most patients improve after drug withdrawal, but some develop irreversible fibrosis.",
      optionExplanations: ["Incorrect. Increasing methotrexate would worsen the drug-induced pneumonitis.", "Correct. Methotrexate pneumonitis requires immediate drug discontinuation; corticosteroids accelerate recovery in moderate-to-severe cases.", "Incorrect. The presentation with granulomas, ground-glass opacities, and temporal association with methotrexate favors drug toxicity over infection.", "Incorrect. Invasive aspergillosis presents with nodules and the halo sign in immunocompromised patients and shows fungal hyphae, not granulomas with lymphocytic infiltrate.", "Incorrect. The biopsy does not show features of lymphoma; this is a drug reaction."],
      highYieldPoint: "Methotrexate pneumonitis: hypersensitivity reaction at any time during treatment. Treat: discontinue drug + corticosteroids. Also monitor for hepatotoxicity and pancytopenia."
    },
    {
      vignette: "A 30-year-old woman presents with progressive dyspnea on exertion. She has a history of bilateral spontaneous pneumothoraces. CT shows diffuse thin-walled cysts throughout both lungs. She also has renal angiomyolipomas on abdominal imaging.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Langerhans cell histiocytosis", "Lymphangioleiomyomatosis", "Pneumocystis jirovecii pneumonia", "Centrilobular emphysema", "Lymphocytic interstitial pneumonia"],
      correctIndex: 1,
      explanation: "Lymphangioleiomyomatosis (LAM) is a rare cystic lung disease occurring almost exclusively in premenopausal women. It is caused by proliferation of abnormal smooth muscle-like cells (LAM cells) with mutations in TSC1/TSC2 genes (mTOR pathway). LAM presents with diffuse thin-walled cysts, recurrent pneumothoraces, chylous effusions, and renal angiomyolipomas. It can occur sporadically or in association with tuberous sclerosis complex. Treatment includes sirolimus (mTOR inhibitor).",
      optionExplanations: ["Incorrect. Langerhans cell histiocytosis (pulmonary) occurs in young smokers and shows cysts and nodules predominantly in the upper and middle lung zones, sparing the costophrenic angles.", "Correct. LAM presents in premenopausal women with diffuse thin-walled cysts, recurrent pneumothoraces, and renal angiomyolipomas; it involves the mTOR pathway (TSC mutations).", "Incorrect. PJP can cause cystic changes but occurs in immunocompromised patients and would not explain renal angiomyolipomas.", "Incorrect. Centrilobular emphysema shows parenchymal destruction without defined thin-walled cysts and occurs in smokers.", "Incorrect. LIP shows diffuse ground-glass opacities and cysts but is associated with Sjögren syndrome, not renal angiomyolipomas."],
      highYieldPoint: "LAM: premenopausal women + diffuse thin-walled cysts + pneumothoraces + renal angiomyolipomas. TSC1/TSC2 mutations (mTOR pathway). Treat with sirolimus."
    }
  ],

  "Pulmonary vascular disease": [
    {
      vignette: "A 68-year-old woman who underwent total hip replacement surgery 5 days ago suddenly develops acute dyspnea, pleuritic chest pain, and tachycardia. Her oxygen saturation drops to 88% on room air. ECG shows sinus tachycardia with an S1Q3T3 pattern. CT angiography reveals a filling defect in the right pulmonary artery.",
      question: "Which of the following is the most likely source of the embolus in this patient?",
      options: ["Deep veins of the lower extremities", "Right atrial mural thrombus", "Left ventricular aneurysm", "Superior vena cava", "Jugular veins"],
      correctIndex: 0,
      explanation: "Pulmonary embolism most commonly arises from deep venous thrombosis (DVT) in the lower extremities, particularly the iliofemoral veins. Virchow's triad — venous stasis (immobilization post-surgery), endothelial injury (surgical trauma), and hypercoagulability — are all present in this post-operative patient. The thrombus dislodges and travels through the right heart to lodge in the pulmonary vasculature.",
      optionExplanations: ["Correct. >95% of pulmonary emboli originate from DVTs in the deep veins of the lower extremities (iliofemoral veins), especially in post-surgical patients with Virchow's triad.", "Incorrect. Right atrial thrombi can embolize to the lungs but are much less common than lower extremity DVT as a source of PE.", "Incorrect. Left ventricular thrombi embolize systemically (stroke, limb ischemia), not to the pulmonary vasculature.", "Incorrect. Superior vena cava thrombosis can occur with central venous catheters but is a rare source of PE compared to lower extremity DVT.", "Incorrect. Jugular vein thrombosis is uncommon and accounts for a very small fraction of pulmonary emboli."],
      highYieldPoint: "PE: >95% from lower extremity DVT (iliofemoral). Virchow's triad: stasis, endothelial injury, hypercoagulability. S1Q3T3 is classic ECG finding (though not sensitive)."
    },
    {
      vignette: "A 35-year-old woman presents with progressive dyspnea and fatigue over 6 months. Physical examination reveals a loud P2, jugular venous distension, and lower extremity edema. Echocardiogram shows right ventricular hypertrophy with estimated pulmonary artery systolic pressure of 70 mmHg. Lung biopsy reveals intimal fibrosis, medial hypertrophy of pulmonary arterioles, and plexiform lesions.",
      question: "Which of the following best describes the pathologic hallmark seen on this patient's lung biopsy?",
      options: ["Plexiform lesions representing abnormal vascular channels within the arterial wall", "Granulomatous vasculitis with multinucleated giant cells", "Fibrinoid necrosis of pulmonary veins", "Atheromatous plaques in large pulmonary arteries", "Amyloid deposition in the pulmonary vasculature"],
      correctIndex: 0,
      explanation: "Plexiform lesions are the histopathologic hallmark of severe pulmonary arterial hypertension (PAH, WHO Group 1). They consist of complex, glomeruloid-like vascular channels formed by monoclonal endothelial cell proliferation within and adjacent to pulmonary arterioles. These lesions contribute to progressive vascular obstruction and elevated pulmonary vascular resistance. PAH also shows medial hypertrophy, intimal fibrosis, and in situ thrombosis of small pulmonary arteries.",
      optionExplanations: ["Correct. Plexiform lesions are pathognomonic for severe PAH; they are formed by monoclonal endothelial proliferation creating aberrant vascular channels within pulmonary arterioles.", "Incorrect. Granulomatous vasculitis with giant cells describes granulomatosis with polyangiitis (Wegener's) or giant cell arteritis, not PAH.", "Incorrect. Fibrinoid necrosis of pulmonary veins is seen in pulmonary veno-occlusive disease (PVOD), a separate entity from PAH.", "Incorrect. Atherosclerotic plaques form in large systemic arteries, not typically in pulmonary arterioles where PAH pathology occurs.", "Incorrect. Amyloid deposition in pulmonary vessels can occur in systemic amyloidosis but is not characteristic of PAH."],
      highYieldPoint: "PAH (Group 1): plexiform lesions (pathognomonic) + intimal fibrosis + medial hypertrophy of pulmonary arterioles. Treat: prostacyclin analogs, endothelin antagonists, PDE5 inhibitors."
    },
    {
      vignette: "A 30-year-old man with factor V Leiden mutation presents to the emergency department with acute onset of severe dyspnea and syncope. He is hypotensive (BP 80/50 mmHg) with distended neck veins. Echocardiogram shows right ventricular dilation with septal bowing into the left ventricle. CT angiography shows a large saddle embolus at the bifurcation of the main pulmonary artery.",
      question: "Which of the following is the most appropriate initial treatment for this patient?",
      options: ["Placement of an inferior vena cava filter", "Intravenous heparin followed by warfarin", "Observation with serial echocardiograms", "Oral rivaroxaban alone", "Systemic thrombolytic therapy with tissue plasminogen activator"],
      correctIndex: 4,
      explanation: "This patient has a massive (high-risk) pulmonary embolism with hemodynamic instability (hypotension, syncope, RV dysfunction). Systemic thrombolytic therapy (tPA, alteplase) is indicated for massive PE with hemodynamic compromise. Thrombolytics rapidly dissolve the clot, reducing RV afterload and restoring cardiac output. If thrombolytics are contraindicated or fail, surgical embolectomy or catheter-directed therapy is considered.",
      optionExplanations: ["Incorrect. IVC filters prevent recurrent PE but do not treat the current massive embolism or restore hemodynamics.", "Incorrect. Heparin followed by warfarin is standard for hemodynamically stable PE (submassive or low-risk), but this patient needs more aggressive treatment for massive PE with shock.", "Incorrect. Observation is inappropriate for a hemodynamically unstable patient with massive PE; this requires emergent intervention.", "Incorrect. Oral anticoagulation alone is insufficient for massive PE with hemodynamic compromise.", "Correct. Systemic thrombolysis (tPA) is the treatment of choice for massive PE with hemodynamic instability, as it rapidly dissolves the clot and restores pulmonary blood flow."],
      highYieldPoint: "Massive PE (hemodynamically unstable): systemic thrombolysis (tPA). Submassive PE (stable, RV strain): anticoagulation ± thrombolysis. Low-risk PE: anticoagulation alone."
    },
    {
      vignette: "A 55-year-old woman with a history of chronic thromboembolic pulmonary hypertension undergoes right heart catheterization. Her mean pulmonary artery pressure (mPAP) is 48 mmHg, pulmonary capillary wedge pressure (PCWP) is 12 mmHg, and cardiac output is 4 L/min.",
      question: "Which of the following is closest to this patient's calculated pulmonary vascular resistance (PVR)?",
      options: ["3 Wood units", "5 Wood units", "15 Wood units", "12 Wood units", "9 Wood units"],
      correctIndex: 4,
      explanation: "Pulmonary vascular resistance (PVR) is calculated as: PVR = (mPAP − PCWP) / CO = (48 − 12) / 4 = 36/4 = 9 Wood units. Normal PVR is <3 Wood units. This patient's elevated PVR of 9 Wood units reflects the increased pulmonary vascular resistance from organized thromboembolic material obstructing the pulmonary vasculature in chronic thromboembolic pulmonary hypertension (CTEPH, WHO Group 4).",
      optionExplanations: ["Incorrect. PVR = (48 − 12)/4 = 9, not 3 Wood units. A PVR of 3 Wood units is at the upper limit of normal.", "Incorrect. A calculation error; PVR = 36/4 = 9, not 5.", "Incorrect. 15 Wood units would require a transpulmonary gradient of 60 mmHg.", "Incorrect. 12 Wood units would require a mPAP − PCWP of 48, but the transpulmonary gradient is 36 mmHg.", "Correct. PVR = (mPAP − PCWP) / CO = (48 − 12) / 4 = 9 Wood units, significantly elevated above normal (<3 Wood units)."],
      highYieldPoint: "PVR = (mPAP − PCWP) / CO. Normal <3 Wood units. CTEPH (Group 4 PH) is the only surgically curable form of PH (pulmonary endarterectomy)."
    },
    {
      vignette: "A 22-year-old woman taking combined oral contraceptive pills presents with acute left-sided pleuritic chest pain and hemoptysis. She recently returned from a 12-hour transatlantic flight. D-dimer is elevated. CT angiography confirms a segmental pulmonary embolism. She is hemodynamically stable.",
      question: "Which of the following coagulation factors is most directly inhibited by the initial anticoagulant therapy recommended for this patient?",
      options: ["Factor V", "Factor VII", "Thrombin (factor IIa) and factor Xa", "Factor XIII", "Plasminogen"],
      correctIndex: 2,
      explanation: "Initial anticoagulation for hemodynamically stable PE involves heparin (unfractionated or low-molecular-weight heparin) or direct oral anticoagulants (DOACs like rivaroxaban or apixaban). Heparin enhances antithrombin III activity, primarily inhibiting thrombin (IIa) and factor Xa. LMWH (enoxaparin) predominantly inhibits factor Xa. DOACs directly inhibit thrombin (dabigatran) or factor Xa (rivaroxaban, apixaban).",
      optionExplanations: ["Incorrect. Factor V is not the primary target of heparin or DOACs. Factor V Leiden is a hypercoagulable mutation (resistance to activated protein C).", "Incorrect. Factor VII is inhibited indirectly by warfarin (vitamin K antagonist) but is not the target of initial heparin therapy.", "Correct. Heparin (via antithrombin III) inhibits thrombin and Xa; LMWH preferentially inhibits Xa; direct oral Xa inhibitors (rivaroxaban) also target this pathway.", "Incorrect. Factor XIII (fibrin-stabilizing factor) cross-links fibrin and is not targeted by anticoagulant therapy.", "Incorrect. Plasminogen is the precursor of plasmin (fibrinolytic enzyme); tPA activates plasminogen for thrombolysis, but this patient does not need thrombolysis."],
      highYieldPoint: "PE anticoagulation: heparin (anti-IIa + anti-Xa via ATIII), LMWH (mainly anti-Xa), DOACs (rivaroxaban = anti-Xa, dabigatran = anti-IIa). Monitor UFH with PTT."
    },
    {
      vignette: "A 40-year-old man with a history of intravenous drug use presents with fever, cough, and multiple bilateral peripheral nodular opacities on chest X-ray, some with cavitation. Blood cultures grow methicillin-sensitive Staphylococcus aureus.",
      question: "Which of the following is the most likely cardiac source of the pulmonary lesions in this patient?",
      options: ["Tricuspid valve vegetation with septic pulmonary emboli", "Mitral valve vegetation embolizing to the lungs", "Aortic valve vegetation with systemic embolization", "Left atrial myxoma fragments", "Patent foramen ovale with paradoxical embolism"],
      correctIndex: 0,
      explanation: "In IV drug users, infective endocarditis most commonly involves the tricuspid valve (right-sided endocarditis). Vegetations on the tricuspid valve can fragment and embolize to the pulmonary vasculature, producing multiple septic pulmonary emboli that appear as bilateral peripheral nodular opacities, often with cavitation. S. aureus is the most common causative organism in IVDU-associated endocarditis.",
      optionExplanations: ["Correct. Tricuspid valve vegetations (right-sided endocarditis in IVDU) embolize to the pulmonary vasculature, causing septic pulmonary emboli with nodular cavitating lesions.", "Incorrect. Mitral valve vegetations embolize systemically (brain, kidneys, spleen), not to the lungs, since the mitral valve is on the left side of the heart.", "Incorrect. Aortic valve vegetations cause systemic emboli (stroke, renal infarcts), not pulmonary nodules.", "Incorrect. Left atrial myxoma can cause systemic embolization and obstruction of the mitral valve but does not cause pulmonary septic emboli.", "Incorrect. Paradoxical embolism through a PFO sends venous thrombi to the systemic circulation, not to the lungs."],
      highYieldPoint: "IVDU endocarditis: tricuspid valve (#1) → septic pulmonary emboli (bilateral cavitating nodules). S. aureus most common. Left-sided endocarditis → systemic emboli."
    },
    {
      vignette: "A 60-year-old man with a recent diagnosis of pancreatic adenocarcinoma develops bilateral lower extremity deep vein thrombosis. His oncologist notes that the patient has had migratory superficial thrombophlebitis involving different venous sites over the past month.",
      question: "Which of the following eponymous terms best describes this pattern of venous thrombosis in the setting of malignancy?",
      options: ["Budd-Chiari syndrome", "Paget-Schroetter syndrome", "May-Thurner syndrome", "Trousseau syndrome", "Behçet syndrome"],
      correctIndex: 3,
      explanation: "Trousseau syndrome refers to migratory superficial thrombophlebitis and hypercoagulability associated with occult or known visceral malignancies, particularly mucin-secreting adenocarcinomas (pancreatic, gastric, lung). The mechanism involves tumor cell production of procoagulant factors (tissue factor, mucin) that activate the coagulation cascade. Trousseau syndrome may be the first manifestation of an underlying cancer.",
      optionExplanations: ["Incorrect. Budd-Chiari syndrome is hepatic vein thrombosis causing hepatomegaly, ascites, and abdominal pain.", "Incorrect. Paget-Schroetter syndrome is effort-related thrombosis of the axillary-subclavian vein, typically in young athletes.", "Incorrect. May-Thurner syndrome involves compression of the left iliac vein by the right iliac artery, predisposing to left-sided DVT.", "Correct. Trousseau syndrome is migratory superficial thrombophlebitis associated with visceral malignancy (especially mucin-secreting adenocarcinomas like pancreatic cancer).", "Incorrect. Behçet syndrome is a vasculitis with oral ulcers, genital ulcers, and uveitis that can cause venous thrombosis but is not specific to malignancy."],
      highYieldPoint: "Trousseau syndrome: migratory thrombophlebitis with underlying malignancy (pancreatic adenocarcinoma classic). Mucin-secreting tumors activate coagulation via tissue factor."
    },
    {
      vignette: "A 45-year-old woman with primary pulmonary arterial hypertension is started on bosentan. She is counseled about potential adverse effects and the need for monthly liver function monitoring.",
      question: "Which of the following is the primary mechanism of action of bosentan?",
      options: ["Phosphodiesterase-5 inhibition", "Prostacyclin receptor agonism", "Endothelin receptor antagonism", "Calcium channel blockade", "Soluble guanylyl cyclase stimulation"],
      correctIndex: 2,
      explanation: "Bosentan is a dual endothelin receptor antagonist (blocks both ETA and ETB receptors). Endothelin-1 is a potent vasoconstrictor and mitogen for pulmonary artery smooth muscle cells, and its levels are elevated in PAH. By blocking endothelin receptors, bosentan reduces pulmonary vasoconstriction and vascular remodeling. Hepatotoxicity is a significant adverse effect requiring monthly LFT monitoring.",
      optionExplanations: ["Incorrect. PDE-5 inhibitors (sildenafil, tadalafil) prevent cGMP degradation, prolonging nitric oxide-mediated vasodilation, but this is not bosentan's mechanism.", "Incorrect. Prostacyclin receptor agonists include epoprostenol (IV), treprostinil, and selexipag; they increase cAMP to cause vasodilation.", "Correct. Bosentan blocks endothelin receptors (ETA/ETB), preventing ET-1-mediated vasoconstriction and proliferation in pulmonary arteries. Requires monthly LFT monitoring due to hepatotoxicity.", "Incorrect. Calcium channel blockers (nifedipine, diltiazem) are used only in the small subset of PAH patients who respond to acute vasoreactivity testing.", "Incorrect. Soluble guanylyl cyclase stimulators (riociguat) enhance the NO-sGC-cGMP pathway; this is a different drug class."],
      highYieldPoint: "PAH therapy: endothelin antagonists (bosentan — hepatotoxic), PDE-5 inhibitors (sildenafil), prostacyclin analogs (epoprostenol), sGC stimulators (riociguat)."
    },
    {
      vignette: "A 70-year-old man undergoes a long bone fracture repair after a motor vehicle accident. On postoperative day 2, he suddenly develops dyspnea, confusion, and a petechial rash on his chest and axillae. Arterial blood gas shows PaO2 of 55 mmHg.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Acute pulmonary thromboembolism", "Amniotic fluid embolism", "Air embolism", "Fat embolism syndrome", "Septic embolism"],
      correctIndex: 3,
      explanation: "Fat embolism syndrome (FES) classically presents 24-72 hours after long bone or pelvic fractures with the triad of respiratory distress (dyspnea, hypoxemia), neurologic symptoms (confusion, altered mental status), and petechial rash (chest, axillae, conjunctivae). Fat globules from the bone marrow enter the venous circulation and lodge in pulmonary capillaries; free fatty acids cause endothelial damage and inflammatory response. Treatment is supportive.",
      optionExplanations: ["Incorrect. While PE is common post-operatively, the triad of respiratory distress, neurologic changes, and petechial rash 2 days after long bone fracture is classic for fat embolism, not thromboembolism.", "Incorrect. Amniotic fluid embolism occurs during labor/delivery or shortly after, not after orthopedic surgery.", "Incorrect. Air embolism occurs during surgical procedures, central line placement, or diving accidents and presents with acute cardiovascular collapse, not the gradual triad described.", "Correct. Fat embolism syndrome presents 24-72 hrs after long bone fracture with the classic triad: respiratory distress, neurologic symptoms, and petechial rash.", "Incorrect. Septic embolism typically occurs with infective endocarditis or infected IV lines and presents with fever and multifocal infectious complications."],
      highYieldPoint: "Fat embolism syndrome: 24-72 hrs post-long bone fracture → triad of respiratory distress + neurologic changes + petechial rash. Supportive treatment."
    },
    {
      vignette: "A researcher studies the pulmonary vasculature response to alveolar hypoxia. She ventilates an isolated lung lobe with a hypoxic gas mixture (FiO2 8%) and observes vasoconstriction of the pulmonary arterioles supplying that lobe.",
      question: "Which of the following best describes the mechanism of hypoxic pulmonary vasoconstriction?",
      options: ["Increased nitric oxide production causing vasodilation", "Release of prostacyclin from endothelial cells", "Activation of beta-2 adrenergic receptors on vascular smooth muscle", "Inhibition of oxygen-sensitive potassium channels in pulmonary arterial smooth muscle cells", "Decreased endothelin-1 production by pulmonary endothelium"],
      correctIndex: 3,
      explanation: "Hypoxic pulmonary vasoconstriction (HPV) is a unique response of pulmonary arterioles that diverts blood away from poorly ventilated alveoli to optimize V/Q matching. The mechanism involves inhibition of voltage-gated potassium channels in pulmonary artery smooth muscle cells by low O2, leading to membrane depolarization, calcium influx through voltage-gated calcium channels, and vasoconstriction. This is the opposite of systemic arterioles, which dilate in response to hypoxia.",
      optionExplanations: ["Incorrect. Nitric oxide causes vasodilation, not vasoconstriction; HPV involves reduced NO availability.", "Incorrect. Prostacyclin (PGI2) causes vasodilation and inhibits platelet aggregation; it opposes HPV.", "Incorrect. Beta-2 receptors cause vasodilation and bronchodilation; they are not the mechanism of HPV.", "Correct. Hypoxia inhibits O2-sensitive K+ channels in pulmonary artery smooth muscle → membrane depolarization → Ca2+ influx → vasoconstriction. This diverts blood to better-ventilated areas.", "Incorrect. Endothelin-1 is a vasoconstrictor and its levels increase (not decrease) in response to hypoxia, contributing to HPV."],
      highYieldPoint: "Hypoxic pulmonary vasoconstriction: O2-sensitive K+ channel inhibition → depolarization → Ca2+ influx → vasoconstriction. Unique to pulmonary vessels (systemic vessels dilate in hypoxia)."
    },
    {
      vignette: "A 25-year-old woman with systemic lupus erythematosus presents with recurrent deep vein thromboses and a history of two second-trimester pregnancy losses. Laboratory testing reveals a prolonged aPTT that does not correct with mixing studies, along with positive anti-cardiolipin antibodies and lupus anticoagulant.",
      question: "Which of the following best describes the paradox of a prolonged aPTT in a patient with a prothrombotic condition?",
      options: ["The lupus anticoagulant inhibits factor XII in vivo, causing both bleeding and clotting", "Warfarin therapy is simultaneously prolonging the aPTT", "Anti-cardiolipin antibodies directly activate thrombin, shortening the PT but prolonging the aPTT", "The patient has concurrent hemophilia and antiphospholipid syndrome", "The lupus anticoagulant interferes with the phospholipid-dependent steps of the aPTT assay in vitro but promotes thrombosis in vivo"],
      correctIndex: 4,
      explanation: "Antiphospholipid syndrome (APS) is paradoxical: lupus anticoagulant antibodies bind phospholipids in the aPTT assay reagent, preventing proper coagulation cascade assembly in vitro, thereby prolonging the aPTT. However, in vivo, these antibodies promote thrombosis by activating endothelial cells, platelets, and complement, and by inhibiting natural anticoagulants (protein C, protein S, antithrombin). The prolonged aPTT does not correct with mixing studies (distinguishing it from factor deficiency).",
      optionExplanations: ["Incorrect. The lupus anticoagulant does not specifically inhibit factor XII in a clinically meaningful way; its in vitro effect is on phospholipid-dependent assay steps.", "Incorrect. There is no mention of warfarin therapy; the aPTT prolongation is due to the lupus anticoagulant.", "Incorrect. Anti-cardiolipin antibodies do not directly activate thrombin; the mechanism involves interference with phospholipid surfaces.", "Incorrect. The non-correction on mixing studies indicates an inhibitor (lupus anticoagulant), not a factor deficiency like hemophilia.", "Correct. Lupus anticoagulant antibodies interfere with the phospholipid-dependent aPTT assay in vitro (prolonged aPTT) but paradoxically promote thrombosis in vivo by activating endothelium and inhibiting anticoagulant pathways."],
      highYieldPoint: "Antiphospholipid syndrome: prolonged aPTT (in vitro anticoagulant effect) + paradoxical thrombosis in vivo. Diagnosis: lupus anticoagulant + anti-cardiolipin + anti-β2GP1 antibodies."
    },
    {
      vignette: "A 75-year-old man with chronic thromboembolic pulmonary hypertension is evaluated for surgical candidacy. His pulmonary angiography shows organized thrombi in the main and lobar pulmonary arteries.",
      question: "Which of the following surgical procedures is potentially curative for this patient's condition?",
      options: ["Lung transplantation", "Pulmonary endarterectomy", "Coronary artery bypass grafting", "Atrial septostomy", "Pulmonary artery banding"],
      correctIndex: 1,
      explanation: "Pulmonary endarterectomy (PTE) is the treatment of choice and potentially curative surgery for chronic thromboembolic pulmonary hypertension (CTEPH, WHO Group 4). The procedure involves surgical removal of organized thromboembolic material from the pulmonary arteries under deep hypothermic circulatory arrest. CTEPH is the only form of pulmonary hypertension that can be cured surgically. For inoperable cases, balloon pulmonary angioplasty and riociguat are options.",
      optionExplanations: ["Incorrect. Lung transplantation is reserved for end-stage pulmonary disease when other treatments fail; PTE is the first-line curative approach for CTEPH.", "Correct. Pulmonary endarterectomy is the potentially curative surgery for CTEPH, involving removal of organized thrombi from pulmonary arteries under deep hypothermic circulatory arrest.", "Incorrect. CABG addresses coronary artery disease, not pulmonary vascular disease.", "Incorrect. Atrial septostomy is a palliative procedure for severe PAH to decompress the right heart, not a curative treatment for CTEPH.", "Incorrect. Pulmonary artery banding is used in congenital heart surgery to limit pulmonary blood flow, not for CTEPH."],
      highYieldPoint: "CTEPH (Group 4 PH) is the only surgically curable form of PH via pulmonary endarterectomy. Inoperable cases: riociguat or balloon pulmonary angioplasty."
    },
    {
      vignette: "A 26-year-old woman at 38 weeks gestation suddenly develops severe dyspnea, hypotension, and DIC during active labor. She rapidly deteriorates with cardiovascular collapse. Fetal monitoring shows late decelerations.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Pulmonary thromboembolism", "Peripartum cardiomyopathy", "Amniotic fluid embolism", "Eclampsia with pulmonary edema", "Tension pneumothorax"],
      correctIndex: 2,
      explanation: "Amniotic fluid embolism (AFE) is a rare but catastrophic obstetric emergency occurring during labor, cesarean section, or shortly postpartum. It presents with sudden cardiovascular collapse, respiratory failure, and DIC. The mechanism involves entry of amniotic fluid (containing fetal squamous cells, lanugo hair, mucin) into maternal circulation, triggering massive complement activation, anaphylactoid reaction, and coagulopathy. Mortality is 20-60%.",
      optionExplanations: ["Incorrect. PE can occur during pregnancy but does not typically cause DIC as a presenting feature.", "Incorrect. Peripartum cardiomyopathy develops in the last month of pregnancy or within 5 months postpartum with heart failure, not acute DIC and cardiovascular collapse during labor.", "Correct. Amniotic fluid embolism presents with sudden cardiovascular collapse, respiratory distress, and DIC during labor — a classic and often fatal obstetric emergency.", "Incorrect. Eclampsia presents with seizures and hypertension; while it can cause pulmonary edema, it does not typically present with acute DIC and cardiovascular collapse.", "Incorrect. Tension pneumothorax during labor is extremely rare and would present with unilateral absent breath sounds and tracheal deviation, not DIC."],
      highYieldPoint: "Amniotic fluid embolism: sudden cardiovascular collapse + respiratory failure + DIC during labor. Contains fetal squamous cells. High mortality (20-60%)."
    },
    {
      vignette: "A 50-year-old woman with known pulmonary arterial hypertension is maintained on continuous intravenous epoprostenol via a central venous catheter. She asks about the mechanism of her medication.",
      question: "Which of the following intracellular signaling molecules is increased by epoprostenol to produce pulmonary vasodilation?",
      options: ["Cyclic GMP (cGMP)", "Cyclic AMP (cAMP)", "Inositol triphosphate (IP3)", "Diacylglycerol (DAG)", "Intracellular calcium"],
      correctIndex: 1,
      explanation: "Epoprostenol is synthetic prostacyclin (PGI2) that binds the IP prostacyclin receptor coupled to Gs protein on pulmonary vascular smooth muscle cells. Gs activates adenylyl cyclase, increasing intracellular cyclic AMP (cAMP), which activates protein kinase A, leading to smooth muscle relaxation (vasodilation) and inhibition of platelet aggregation. Epoprostenol also has antiproliferative effects on vascular smooth muscle.",
      optionExplanations: ["Incorrect. cGMP is the second messenger of the nitric oxide pathway (NO → soluble guanylyl cyclase → cGMP); PDE-5 inhibitors (sildenafil) work via cGMP.", "Correct. Prostacyclin (epoprostenol) activates Gs → adenylyl cyclase → ↑cAMP → vasodilation and inhibition of platelet aggregation.", "Incorrect. IP3 is a Gq pathway mediator that increases intracellular calcium, causing vasoconstriction — the opposite of epoprostenol's effect.", "Incorrect. DAG activates protein kinase C (Gq pathway), which promotes vasoconstriction and cell proliferation.", "Incorrect. Increased intracellular calcium causes smooth muscle contraction (vasoconstriction); epoprostenol works by decreasing calcium sensitivity via cAMP."],
      highYieldPoint: "PAH vasodilator pathways: prostacyclin → Gs → ↑cAMP. NO → sGC → ↑cGMP. Endothelin-1 → ETA → Gq → ↑IP3/Ca2+ (vasoconstriction — blocked by bosentan)."
    },
    {
      vignette: "A 58-year-old man with newly diagnosed bilateral lower extremity DVT is started on warfarin without heparin bridging. On day 3 of warfarin therapy, he develops painful, well-demarcated purplish skin lesions on his thighs and buttocks that progress to necrosis.",
      question: "Which of the following is the most likely mechanism of this skin complication?",
      options: ["Allergic vasculitis due to warfarin hypersensitivity", "Warfarin-induced rapid depletion of protein C causing a transient hypercoagulable state", "Heparin-induced thrombocytopenia with skin necrosis", "Cholesterol crystal embolization from warfarin mobilizing aortic plaque", "Direct cytotoxic effect of warfarin on dermal fibroblasts"],
      correctIndex: 1,
      explanation: "Warfarin skin necrosis occurs when warfarin is initiated without heparin bridging, particularly in patients with protein C or S deficiency. Warfarin inhibits vitamin K-dependent factors (II, VII, IX, X) and anticoagulant proteins C and S. Protein C has the shortest half-life (~8 hours), so it is depleted first, creating a transient hypercoagulable state before the procoagulant factors (especially factor II, half-life ~60 hours) are adequately suppressed. This causes microvascular thrombosis and skin necrosis.",
      optionExplanations: ["Incorrect. Warfarin skin necrosis is a thrombotic (not allergic) phenomenon caused by transient protein C depletion.", "Correct. Protein C (shortest half-life of vitamin K-dependent factors) is depleted before procoagulant factors, causing transient hypercoagulability and microvascular thrombosis → skin necrosis.", "Incorrect. HIT causes thrombocytopenia and thrombosis due to anti-PF4/heparin antibodies, not related to warfarin initiation.", "Incorrect. Cholesterol crystal embolization (blue toe syndrome) can occur with warfarin but presents differently (livedo reticularis, blue toes) and is not the classic warfarin skin necrosis.", "Incorrect. Warfarin does not have direct cytotoxic effects on fibroblasts; the mechanism is microvascular thrombosis."],
      highYieldPoint: "Warfarin skin necrosis: protein C depleted first (shortest half-life ~8 hrs) → transient hypercoagulability → microvascular thrombosis. Always bridge with heparin when starting warfarin."
    }
  ],

  "Lung neoplasms": [
    {
      vignette: "A 65-year-old man with a 45-pack-year smoking history presents with a persistent cough and hemoptysis for 2 months. Chest X-ray shows a central hilar mass. Biopsy reveals nests of malignant cells with keratin pearls and intercellular bridges.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Small cell lung carcinoma", "Adenocarcinoma", "Squamous cell carcinoma", "Large cell carcinoma", "Carcinoid tumor"],
      correctIndex: 2,
      explanation: "Squamous cell carcinoma of the lung is centrally located (arising from main bronchi), strongly associated with smoking, and characterized histologically by keratinization (keratin pearls) and intercellular bridges (desmosomes). It develops from squamous metaplasia → dysplasia → carcinoma in situ → invasive carcinoma. Squamous cell carcinoma can cavitate and may produce PTHrP, causing hypercalcemia.",
      optionExplanations: ["Incorrect. Small cell carcinoma shows small, round blue cells with scant cytoplasm (neuroendocrine features) and nuclear molding, not keratin pearls.", "Incorrect. Adenocarcinoma is the most common lung cancer overall but is typically peripheral, not central, and shows glandular differentiation or mucin production, not keratin pearls.", "Correct. Central hilar mass with keratin pearls and intercellular bridges is diagnostic of squamous cell carcinoma, a non-small cell lung cancer strongly associated with smoking.", "Incorrect. Large cell carcinoma is a diagnosis of exclusion (undifferentiated) with large pleomorphic cells lacking features of squamous, glandular, or small cell differentiation.", "Incorrect. Carcinoid tumors are low-grade neuroendocrine tumors that present with recurrent pneumonia and sometimes carcinoid syndrome; histology shows uniform cells with salt-and-pepper chromatin."],
      highYieldPoint: "Squamous cell carcinoma: central, smoking, keratin pearls, intercellular bridges, can cavitate, PTHrP → hypercalcemia. Develops via squamous metaplasia → dysplasia sequence."
    },
    {
      vignette: "A 58-year-old non-smoking woman presents with persistent cough and an incidental peripheral lung nodule found on chest CT. Biopsy reveals a glandular pattern with mucin-producing cells. Immunohistochemistry is positive for TTF-1 and napsin A.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Adenocarcinoma", "Squamous cell carcinoma", "Small cell carcinoma", "Mesothelioma", "Metastatic colon cancer"],
      correctIndex: 0,
      explanation: "Adenocarcinoma is the most common type of lung cancer and the most common lung cancer in non-smokers, women, and East Asian populations. It typically presents as a peripheral lesion with glandular differentiation and mucin production. TTF-1 (thyroid transcription factor-1) and napsin A are immunohistochemical markers that confirm pulmonary origin. Activating mutations in EGFR, ALK rearrangements, and ROS1 fusions are targetable driver mutations in lung adenocarcinoma.",
      optionExplanations: ["Correct. Peripheral glandular tumor with mucin production, TTF-1+, and napsin A+ in a non-smoking woman is classic for pulmonary adenocarcinoma.", "Incorrect. Squamous cell carcinoma is typically central with keratin pearls and intercellular bridges; it stains positive for p40 and p63, not TTF-1.", "Incorrect. Small cell carcinoma shows neuroendocrine features (chromogranin, synaptophysin), not glandular differentiation.", "Incorrect. Mesothelioma arises from pleura with asbestos exposure and stains positive for calretinin, cytokeratin 5/6, and WT-1; it is TTF-1 negative.", "Incorrect. Metastatic colon cancer stains positive for CDX2 and CK20 and is TTF-1 negative."],
      highYieldPoint: "Adenocarcinoma: most common lung cancer, peripheral, non-smokers/women, TTF-1+/napsin A+. Targetable mutations: EGFR, ALK, ROS1, KRAS."
    },
    {
      vignette: "A 60-year-old man with a 50-pack-year smoking history presents with weight loss, cough, and a central lung mass on imaging. He is also noted to have SIADH with serum sodium of 125 mEq/L. Biopsy shows sheets of small, round blue cells with scant cytoplasm, nuclear molding, and a high mitotic rate. Immunohistochemistry is positive for chromogranin and synaptophysin.",
      question: "Which of the following best describes the cell of origin and associated paraneoplastic syndrome in this patient?",
      options: ["Neuroendocrine (Kulchitsky) cells producing ADH", "Clara cells producing excess surfactant", "Type II pneumocytes producing alpha-fetoprotein", "Squamous epithelial cells producing PTHrP", "Alveolar macrophages producing IL-6"],
      correctIndex: 0,
      explanation: "Small cell lung carcinoma (SCLC) arises from neuroendocrine (Kulchitsky) cells in the bronchial epithelium. It is strongly associated with smoking and presents as a central hilar mass with early metastasis. SCLC commonly produces paraneoplastic syndromes, including SIADH (ectopic ADH production causing hyponatremia) and ectopic ACTH production (Cushing syndrome). Histology shows small round blue cells with nuclear molding and neuroendocrine markers.",
      optionExplanations: ["Correct. SCLC arises from neuroendocrine (Kulchitsky) cells and can produce ectopic ADH (SIADH → hyponatremia) or ACTH (Cushing syndrome).", "Incorrect. Clara (club) cells secrete proteins in bronchioles; they are not the origin of SCLC and do not produce surfactant.", "Incorrect. Type II pneumocytes produce surfactant and are associated with adenocarcinoma, not SCLC. AFP is associated with hepatocellular carcinoma and germ cell tumors.", "Incorrect. Squamous cell carcinoma (not SCLC) produces PTHrP causing hypercalcemia.", "Incorrect. Alveolar macrophages are not the cell of origin for any primary lung cancer."],
      highYieldPoint: "SCLC: neuroendocrine origin (Kulchitsky cells), central, smoking. Paraneoplastic: SIADH (ADH), Cushing (ACTH), Lambert-Eaton (anti-VGCC). Treat with chemo + radiation (not surgery)."
    },
    {
      vignette: "A 52-year-old man presents with right shoulder pain and right hand weakness. Examination reveals ptosis, miosis, and anhidrosis on the right side of the face. Chest X-ray shows an opacity at the right lung apex.",
      question: "Which of the following best describes the anatomic structure being compressed by this patient's tumor?",
      options: ["Recurrent laryngeal nerve", "Phrenic nerve", "Inferior cervical sympathetic ganglion (stellate ganglion)", "Brachial plexus lower trunk only", "Vagus nerve"],
      correctIndex: 2,
      explanation: "This patient has a Pancoast tumor (superior sulcus tumor) at the lung apex with Horner syndrome. The tumor compresses the inferior cervical sympathetic ganglion (stellate ganglion), causing the classic triad of ipsilateral ptosis (drooping eyelid), miosis (constricted pupil), and anhidrosis (absent sweating) on the affected side. Pancoast tumors can also compress the brachial plexus (C8-T1, causing hand weakness and shoulder pain) and subclavian vessels.",
      optionExplanations: ["Incorrect. Recurrent laryngeal nerve compression (commonly by left-sided tumors or mediastinal lymphadenopathy) causes hoarseness, not Horner syndrome.", "Incorrect. Phrenic nerve compression causes diaphragmatic paralysis with elevated hemidiaphragm, not Horner syndrome.", "Correct. The stellate ganglion (inferior cervical sympathetic ganglion) is compressed by the Pancoast tumor, producing ipsilateral Horner syndrome (ptosis, miosis, anhidrosis).", "Incorrect. While the brachial plexus is also involved (explaining shoulder pain and hand weakness), it does not explain the ptosis, miosis, and anhidrosis (Horner syndrome).", "Incorrect. Vagus nerve compression can cause vocal cord paralysis and cardiac rhythm changes but not Horner syndrome."],
      highYieldPoint: "Pancoast tumor: apex lung tumor → Horner syndrome (ptosis, miosis, anhidrosis from stellate ganglion compression) + brachial plexopathy (C8-T1 → hand weakness)."
    },
    {
      vignette: "A 70-year-old man with lung adenocarcinoma develops facial swelling, cyanosis of the face and upper extremities, and distended neck and chest wall veins. CT shows a large mediastinal mass compressing the superior vena cava.",
      question: "Which of the following is the most likely diagnosis for this clinical presentation?",
      options: ["Superior vena cava syndrome", "Cardiac tamponade", "Tension pneumothorax", "Aortic dissection", "Chylothorax"],
      correctIndex: 0,
      explanation: "Superior vena cava (SVC) syndrome results from external compression or intraluminal obstruction of the SVC, most commonly by malignant mediastinal tumors (lung cancer and lymphoma account for >80% of cases). Obstruction impairs venous return from the head, neck, and upper extremities, causing facial edema (plethora), cyanosis, JVD, and prominent collateral veins on the chest wall. Small cell lung cancer is the most common cause due to its central location.",
      optionExplanations: ["Correct. SVC syndrome presents with facial/upper extremity edema, cyanosis, and venous congestion due to obstruction of the SVC by mediastinal malignancy.", "Incorrect. Cardiac tamponade causes Beck's triad (hypotension, JVD, muffled heart sounds) and pulsus paradoxus, not facial swelling with upper extremity cyanosis.", "Incorrect. Tension pneumothorax causes unilateral absent breath sounds, tracheal deviation, and hypotension, not bilateral facial swelling.", "Incorrect. Aortic dissection presents with tearing chest pain radiating to the back with blood pressure differentials between arms.", "Incorrect. Chylothorax is accumulation of lymphatic fluid in the pleural space from thoracic duct injury, not SVC obstruction."],
      highYieldPoint: "SVC syndrome: facial swelling, upper body cyanosis, JVD, collateral chest veins. Causes: lung cancer (#1, especially SCLC), lymphoma, thrombosis from central venous catheters."
    },
    {
      vignette: "A 45-year-old non-smoking woman presents with recurrent episodes of unilateral wheezing and pneumonia. Bronchoscopy reveals a well-circumscribed, pink, polypoid endobronchial mass. Biopsy shows nests of uniform cells with 'salt-and-pepper' chromatin and positive staining for chromogranin A. Ki-67 proliferation index is <5%.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Squamous cell carcinoma", "Hamartoma", "Small cell lung carcinoma", "Typical carcinoid tumor", "Atypical carcinoid tumor"],
      correctIndex: 3,
      explanation: "Typical carcinoid tumors are low-grade neuroendocrine tumors of the lung composed of uniform cells with salt-and-pepper chromatin (characteristic of neuroendocrine tumors) and positive chromogranin/synaptophysin staining. They are typically central endobronchial lesions causing obstruction with recurrent pneumonia. Typical carcinoids have <2 mitoses per 2 mm² and no necrosis, with a Ki-67 <5%. They have an excellent prognosis (>90% 5-year survival) and are not associated with smoking.",
      optionExplanations: ["Incorrect. Squamous cell carcinoma shows keratin pearls, intercellular bridges, and high mitotic activity; it is strongly associated with smoking.", "Incorrect. Hamartoma is the most common benign lung tumor, composed of cartilage, fat, and connective tissue with a 'popcorn' calcification pattern on imaging.", "Incorrect. SCLC is a high-grade neuroendocrine tumor with a very high Ki-67 (>50%), nuclear molding, frequent mitoses, and necrosis.", "Correct. Typical carcinoid: low-grade neuroendocrine tumor, central endobronchial, salt-and-pepper chromatin, chromogranin+, low Ki-67 (<5%), not smoking-related, excellent prognosis.", "Incorrect. Atypical carcinoid has 2-10 mitoses per 2 mm² and/or focal necrosis, with a higher Ki-67 and worse prognosis than typical carcinoid."],
      highYieldPoint: "Neuroendocrine lung tumors (low to high grade): typical carcinoid → atypical carcinoid → large cell neuroendocrine → small cell carcinoma. Salt-and-pepper chromatin is the shared feature."
    },
    {
      vignette: "A 68-year-old man with a history of asbestos exposure for 25 years presents with progressive dyspnea and right-sided chest pain. CT shows a circumferential pleural thickening encasing the right lung. Thoracentesis reveals bloody pleural effusion. Biopsy shows malignant cells that stain positive for calretinin and cytokeratin 5/6.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Metastatic lung adenocarcinoma to the pleura", "Pleural lipoma", "Squamous cell carcinoma of the lung", "Thymoma with pleural extension", "Malignant mesothelioma"],
      correctIndex: 4,
      explanation: "Malignant mesothelioma is a primary pleural neoplasm strongly associated with asbestos exposure (20-40 year latency period). It presents with circumferential pleural thickening encasing the lung, dyspnea, chest pain, and bloody pleural effusion. Histologically, it can be epithelioid (most common), sarcomatoid, or biphasic. Immunohistochemistry shows positivity for calretinin, cytokeratin 5/6, WT-1, and D2-40, distinguishing it from adenocarcinoma (TTF-1+, CEA+).",
      optionExplanations: ["Incorrect. Metastatic adenocarcinoma to the pleura would stain positive for TTF-1 and CEA, not calretinin and CK 5/6.", "Incorrect. Pleural lipoma is a benign fatty tumor that does not cause circumferential thickening or bloody effusion.", "Incorrect. Squamous cell carcinoma is a parenchymal lung tumor, not a primary pleural malignancy.", "Incorrect. Thymoma is an anterior mediastinal tumor; while it can invade the pleura, it does not stain for calretinin.", "Correct. Asbestos exposure + circumferential pleural thickening + calretinin+/CK 5/6+ = malignant mesothelioma."],
      highYieldPoint: "Mesothelioma: asbestos (long latency), circumferential pleural thickening, bloody effusion. Markers: calretinin+, CK5/6+, WT-1+. Adenocarcinoma: TTF-1+, CEA+, calretinin−."
    },
    {
      vignette: "A 62-year-old man with recently diagnosed small cell lung carcinoma develops proximal muscle weakness that improves with repeated use. Electromyography shows incremental response with repetitive nerve stimulation. Anti-voltage-gated calcium channel antibodies are detected.",
      question: "Which of the following best describes the pathophysiology of this patient's neuromuscular disorder?",
      options: ["Autoantibodies against postsynaptic acetylcholine receptors", "Destruction of anterior horn cells by paraneoplastic antibodies", "Direct tumor invasion of the neuromuscular junction", "Demyelination of motor neurons by anti-myelin antibodies", "Autoantibodies against presynaptic voltage-gated calcium channels reducing acetylcholine release"],
      correctIndex: 4,
      explanation: "Lambert-Eaton myasthenic syndrome (LEMS) is a paraneoplastic condition most commonly associated with small cell lung carcinoma. Anti-voltage-gated calcium channel (VGCC) antibodies inhibit presynaptic calcium influx at the neuromuscular junction, reducing acetylcholine vesicle release. Unlike myasthenia gravis, LEMS shows proximal weakness that improves with repeated use (facilitation), autonomic dysfunction, and incremental response on repetitive nerve stimulation.",
      optionExplanations: ["Incorrect. Anti-AChR antibodies characterize myasthenia gravis, which causes fatigable weakness that worsens with use and shows a decremental response on EMG.", "Incorrect. Anterior horn cell destruction causes lower motor neuron disease (like ALS), not the fatigability pattern seen here.", "Incorrect. SCLC can metastasize widely but does not directly invade the neuromuscular junction.", "Incorrect. Demyelination of motor neurons would produce upper or lower motor neuron signs, not the facilitation pattern of LEMS.", "Correct. LEMS involves anti-VGCC antibodies → reduced presynaptic Ca2+ influx → decreased ACh release. Improves with use because repeated stimulation accumulates calcium."],
      highYieldPoint: "Lambert-Eaton: anti-VGCC Ab → ↓ ACh release → proximal weakness improving with use. Associated with SCLC. Compare: MG = anti-AChR Ab → worsening with use."
    },
    {
      vignette: "A 55-year-old woman with a solitary pulmonary nodule undergoes CT-guided biopsy. Histology reveals a well-defined lesion composed of mature cartilage, fat, and fibrous tissue in a disorganized arrangement. There is a characteristic 'popcorn' calcification pattern on CT.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Chondrosarcoma", "Bronchogenic cyst", "Carcinoid tumor", "Granuloma", "Pulmonary hamartoma"],
      correctIndex: 4,
      explanation: "Pulmonary hamartoma is the most common benign lung tumor in adults. It is composed of a disorganized mixture of normal pulmonary tissues including cartilage (most abundant), fat, fibrous tissue, and smooth muscle. The characteristic 'popcorn' calcification on CT is highly suggestive. Hamartomas are typically solitary, well-circumscribed, peripheral nodules that are incidentally discovered. They have no malignant potential.",
      optionExplanations: ["Incorrect. Chondrosarcoma is a malignant cartilaginous tumor primarily of bone, extremely rare in the lung, and would show cytologic atypia.", "Incorrect. Bronchogenic cysts are developmental anomalies lined by respiratory epithelium, not composed of cartilage and fat.", "Incorrect. Carcinoid tumors are neuroendocrine neoplasms with uniform cells and salt-and-pepper chromatin; they do not contain cartilage or fat.", "Incorrect. Granulomas are inflammatory lesions (collections of epithelioid macrophages) seen in TB and sarcoidosis, not neoplasms with cartilage/fat.", "Correct. Pulmonary hamartoma is the most common benign lung tumor, with disorganized cartilage, fat, and fibrous tissue and characteristic popcorn calcification."],
      highYieldPoint: "Pulmonary hamartoma: most common benign lung tumor. Cartilage + fat + fibrous tissue. 'Popcorn' calcification on CT. No malignant potential."
    },
    {
      vignette: "A 72-year-old woman presents with new-onset digital clubbing, severe joint pain in her wrists and knees, and periosteal new bone formation on X-rays of the long bones. Chest X-ray reveals a large peripheral lung mass. Biopsy confirms non-small cell lung carcinoma.",
      question: "Which of the following paraneoplastic syndromes is most consistent with this presentation?",
      options: ["Cushing syndrome from ectopic ACTH", "Hypercalcemia from PTHrP", "Hypertrophic pulmonary osteoarthropathy", "Syndrome of inappropriate ADH secretion", "Trousseau syndrome"],
      correctIndex: 2,
      explanation: "Hypertrophic pulmonary osteoarthropathy (HPO) is a paraneoplastic syndrome characterized by the triad of digital clubbing, painful arthropathy (especially wrists and knees), and periostitis (periosteal new bone formation) of the long bones. It is most commonly associated with non-small cell lung cancer, particularly adenocarcinoma and squamous cell carcinoma. The mechanism may involve VEGF and PDGF production by the tumor. Symptoms often resolve after tumor resection.",
      optionExplanations: ["Incorrect. Ectopic ACTH causing Cushing syndrome presents with central obesity, moon facies, and hyperglycemia, typically with SCLC.", "Incorrect. PTHrP-mediated hypercalcemia presents with confusion, constipation, polyuria, and bone pain but not periosteal new bone formation.", "Correct. Hypertrophic pulmonary osteoarthropathy: clubbing + arthropathy + periostitis of long bones, most commonly associated with non-small cell lung cancer.", "Incorrect. SIADH presents with hyponatremia and is associated with SCLC, not the joint/bone findings described.", "Incorrect. Trousseau syndrome is migratory thrombophlebitis associated with mucin-secreting adenocarcinomas."],
      highYieldPoint: "Hypertrophic pulmonary osteoarthropathy: clubbing + arthropathy + periostitis. Associated with non-small cell lung cancer. Symptoms may resolve after tumor resection."
    },
    {
      vignette: "A 48-year-old man presents with a 3-cm solitary pulmonary nodule found on screening CT. The nodule has smooth borders, no calcification, and a PET scan shows high FDG uptake (SUV 8.5). He has a 25-pack-year smoking history.",
      question: "Which of the following characteristics of this pulmonary nodule is most suggestive of malignancy?",
      options: ["Size less than 5 cm", "Smooth borders", "Absence of calcification", "High FDG uptake on PET (SUV >2.5)", "Location in the right middle lobe"],
      correctIndex: 3,
      explanation: "High FDG (fluorodeoxyglucose) uptake on PET scan, indicated by a standardized uptake value (SUV) >2.5, is the most suggestive feature of malignancy in a solitary pulmonary nodule. Malignant cells have increased glucose metabolism, avidly taking up FDG. Other features suggesting malignancy include size >3 cm (mass), irregular/spiculated borders, absence of calcification (except eccentric), and growth on serial imaging. Benign features include smooth borders, popcorn/central/laminar calcification, and stability over 2 years.",
      optionExplanations: ["Incorrect. While larger nodules have a higher probability of malignancy, a size <5 cm alone is not the most specific feature. Nodules >3 cm are classified as lung masses.", "Incorrect. Smooth borders are actually more suggestive of a benign etiology; malignant nodules tend to have irregular or spiculated borders.", "Incorrect. While absence of calcification is somewhat concerning, many benign nodules also lack calcification; this is less specific than FDG uptake.", "Correct. High FDG uptake (SUV >2.5) on PET scan strongly suggests malignancy due to increased glucose metabolism in cancer cells.", "Incorrect. Nodule location alone is not a strong predictor of malignancy; upper lobes are more commonly associated with primary lung cancer."],
      highYieldPoint: "Solitary pulmonary nodule: malignant features = FDG-avid (SUV >2.5), spiculated borders, >3 cm, growth on serial CT. Benign = popcorn/central calcification, stable >2 years."
    },
    {
      vignette: "A 60-year-old man with a 40-pack-year smoking history is diagnosed with squamous cell carcinoma of the lung. His serum calcium is 13.2 mg/dL, phosphorus is low, and PTH is suppressed. PTHrP is markedly elevated.",
      question: "Which of the following best describes the mechanism of hypercalcemia in this patient?",
      options: ["Ectopic PTH production by the tumor", "Production of PTHrP that mimics PTH action at PTH/PTHrP receptors", "Osteolytic bone metastases releasing calcium", "1,25-dihydroxyvitamin D production by tumor cells", "Primary hyperparathyroidism coincidental with lung cancer"],
      correctIndex: 1,
      explanation: "Squamous cell carcinoma of the lung (and renal cell carcinoma, breast cancer) commonly produces parathyroid hormone-related peptide (PTHrP), which mimics the action of PTH at the PTH/PTHrP receptor (PTH1R). PTHrP increases bone resorption and renal calcium reabsorption, causing hypercalcemia with suppressed PTH. This is called humoral hypercalcemia of malignancy. Unlike PTH, PTHrP does not increase 1,25-(OH)2 vitamin D production.",
      optionExplanations: ["Incorrect. Tumors produce PTHrP, not PTH itself. Ectopic PTH production by non-parathyroid tumors is exceedingly rare.", "Correct. PTHrP activates the PTH/PTHrP receptor → increased osteoclastic bone resorption + renal calcium reabsorption → hypercalcemia with suppressed endogenous PTH.", "Incorrect. Osteolytic metastases cause local hypercalcemia (via IL-6, RANK-L), but this patient's elevated PTHrP indicates humoral mechanism, not local bone destruction.", "Incorrect. 1,25-(OH)2 vitamin D production by macrophages occurs in granulomatous diseases (sarcoidosis, TB) and lymphomas, not squamous cell carcinoma.", "Incorrect. Primary hyperparathyroidism would show elevated PTH, not suppressed PTH with elevated PTHrP."],
      highYieldPoint: "Humoral hypercalcemia of malignancy: squamous cell carcinoma → PTHrP → mimics PTH at PTH1R → ↑Ca2+, ↓PO4, suppressed PTH. PTHrP does NOT increase 1,25-vit D."
    },
    {
      vignette: "A 57-year-old man undergoing staging for newly diagnosed lung adenocarcinoma is found to have an enlarged left supraclavicular lymph node. Biopsy confirms metastatic adenocarcinoma.",
      question: "What is the clinical significance of this specific lymph node location, and what is its eponymous name?",
      options: ["Sister Mary Joseph nodule — indicates periumbilical metastasis", "Virchow node — left supraclavicular node suggesting thoracic or abdominal malignancy", "Irish node — indicating left axillary involvement", "Krukenberg tumor — indicating ovarian metastasis", "Blumer shelf — indicating metastasis to the pouch of Douglas"],
      correctIndex: 1,
      explanation: "The Virchow node (also called Troisier sign) is an enlarged, hard left supraclavicular lymph node that often signals metastatic disease from thoracic or abdominal malignancies. The left supraclavicular fossa is where the thoracic duct drains into the left subclavian vein, making it a sentinel site for lymphatic spread from the thorax and abdomen. In lung cancer staging, supraclavicular lymph node involvement indicates N3 disease (contralateral or supraclavicular).",
      optionExplanations: ["Incorrect. Sister Mary Joseph nodule is a periumbilical subcutaneous metastasis from intra-abdominal or pelvic malignancy.", "Correct. Virchow node = left supraclavicular lymph node enlargement, a classic sign of metastatic thoracic or abdominal malignancy due to thoracic duct drainage.", "Incorrect. 'Irish node' refers to left axillary lymph node metastasis, which is less commonly tested than Virchow node.", "Incorrect. Krukenberg tumor is ovarian metastasis (often from gastric signet-ring cell carcinoma), not a lymph node.", "Incorrect. Blumer shelf is a metastatic deposit in the rectovesical or rectouterine pouch (pouch of Douglas), palpable on rectal exam."],
      highYieldPoint: "Virchow node: left supraclavicular lymphadenopathy — sentinel for thoracic/GI malignancy (thoracic duct drainage). Signal node of Troisier."
    },
    {
      vignette: "A 50-year-old man with a 30-pack-year smoking history presents with a peripheral lung mass. Biopsy reveals large, pleomorphic, undifferentiated malignant cells with no evidence of glandular differentiation, squamous differentiation, or neuroendocrine markers. The tumor cells have abundant cytoplasm and vesicular nuclei.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Adenocarcinoma", "Squamous cell carcinoma", "Small cell carcinoma", "Large cell carcinoma", "Typical carcinoid tumor"],
      correctIndex: 3,
      explanation: "Large cell carcinoma of the lung is an undifferentiated non-small cell lung cancer (NSCLC) diagnosed by exclusion. It lacks the glandular features of adenocarcinoma, the keratinization of squamous cell carcinoma, and the neuroendocrine features of small cell carcinoma. Histologically, it shows large cells with abundant cytoplasm, vesicular nuclei, and prominent nucleoli. It can occur centrally or peripherally and carries a poor prognosis.",
      optionExplanations: ["Incorrect. Adenocarcinoma shows glandular differentiation with mucin production and stains for TTF-1/napsin A.", "Incorrect. Squamous cell carcinoma shows keratin pearls and intercellular bridges with p40/p63 positivity.", "Incorrect. Small cell carcinoma has small cells with scant cytoplasm, nuclear molding, and neuroendocrine markers.", "Correct. Large cell carcinoma is a diagnosis of exclusion: undifferentiated NSCLC lacking glandular, squamous, and neuroendocrine features, with large pleomorphic cells.", "Incorrect. Carcinoid tumors have uniform cells with salt-and-pepper chromatin and positive neuroendocrine markers."],
      highYieldPoint: "Large cell carcinoma: undifferentiated NSCLC, diagnosis of exclusion. Peripheral or central. Poor prognosis. No specific histologic differentiation pattern."
    },
    {
      vignette: "A 63-year-old man with known lung adenocarcinoma with EGFR exon 19 deletion is started on targeted therapy. After 3 months of treatment, repeat imaging shows significant tumor regression.",
      question: "Which of the following targeted therapies is most appropriate as first-line treatment for this patient's EGFR-mutant lung adenocarcinoma?",
      options: ["Bevacizumab (anti-VEGF antibody)", "Osimertinib (third-generation EGFR tyrosine kinase inhibitor)", "Crizotinib (ALK inhibitor)", "Pembrolizumab (anti-PD-1 antibody)", "Carboplatin and paclitaxel chemotherapy"],
      correctIndex: 1,
      explanation: "Osimertinib is a third-generation EGFR tyrosine kinase inhibitor (TKI) that is now the preferred first-line treatment for EGFR-mutant (exon 19 deletion or L858R) non-small cell lung cancer. It irreversibly inhibits both sensitizing EGFR mutations and the T790M resistance mutation. Osimertinib has superior overall survival compared to first-generation EGFR TKIs (erlotinib, gefitinib) and has better CNS penetration.",
      optionExplanations: ["Incorrect. Bevacizumab is an anti-VEGF monoclonal antibody used in combination with chemotherapy for some NSCLC patients but is not the targeted therapy for EGFR mutations.", "Correct. Osimertinib is the preferred first-line EGFR TKI for EGFR-mutant NSCLC (exon 19 deletion, L858R), with superior OS and CNS activity.", "Incorrect. Crizotinib targets ALK and ROS1 rearrangements, not EGFR mutations.", "Incorrect. PD-1 inhibitors like pembrolizumab are used in NSCLC without driver mutations or with high PD-L1 expression; EGFR-mutant tumors typically respond poorly to immunotherapy.", "Incorrect. While platinum-based chemotherapy is a backbone of NSCLC treatment, targeted therapy with osimertinib is superior for EGFR-mutant tumors."],
      highYieldPoint: "NSCLC driver mutations: EGFR → osimertinib; ALK → alectinib; ROS1 → crizotinib; BRAF V600E → dabrafenib + trametinib. Test all non-squamous NSCLC for mutations."
    }
  ],

  "Acid-base & gas exchange": [
    {
      vignette: "A 22-year-old man with type 1 diabetes presents to the emergency department with Kussmaul respirations, fruity breath odor, and altered mental status. Arterial blood gas shows pH 7.15, PaCO2 15 mmHg, PaO2 105 mmHg, and HCO3- 5 mEq/L. Serum glucose is 450 mg/dL.",
      question: "Which of the following best describes this patient's acid-base disorder?",
      options: ["Metabolic acidosis with respiratory compensation", "Respiratory acidosis with metabolic compensation", "Mixed respiratory and metabolic acidosis", "Metabolic alkalosis with respiratory compensation", "Respiratory alkalosis with metabolic compensation"],
      correctIndex: 0,
      explanation: "This patient has diabetic ketoacidosis (DKA), a high anion gap metabolic acidosis. The pH is low (7.15) with markedly decreased HCO3- (5 mEq/L), confirming metabolic acidosis. The PaCO2 is appropriately low (15 mmHg) due to respiratory compensation (Kussmaul breathing — deep, rapid respirations that blow off CO2). Winter's formula predicts expected PaCO2 = 1.5(HCO3-) + 8 ± 2 = 1.5(5) + 8 ± 2 = 13.5-17.5, consistent with appropriate compensation.",
      optionExplanations: ["Correct. DKA causes high anion gap metabolic acidosis (ketoacids); Kussmaul respirations provide appropriate respiratory compensation (↓ PaCO2).", "Incorrect. In respiratory acidosis, PaCO2 would be elevated, not reduced.", "Incorrect. In mixed acidosis, both PaCO2 would be elevated and HCO3- decreased; here the low PaCO2 reflects compensation.", "Incorrect. Metabolic alkalosis would show elevated pH and HCO3-, the opposite of this patient's values.", "Incorrect. Respiratory alkalosis would show low PaCO2 as the primary disorder with compensatory HCO3- decrease, but the clinical picture and severely low HCO3- indicate primary metabolic acidosis."],
      highYieldPoint: "DKA: high anion gap metabolic acidosis (ketoacids). Winter's formula: expected PaCO2 = 1.5[HCO3-] + 8 ± 2. Kussmaul respirations = respiratory compensation."
    },
    {
      vignette: "A 50-year-old man with chronic kidney disease stage 4 presents for routine evaluation. His ABG shows pH 7.32, PaCO2 30 mmHg, HCO3- 15 mEq/L. Serum sodium is 140 mEq/L, potassium 5.2 mEq/L, and chloride 115 mEq/L.",
      question: "Which of the following best characterizes this patient's acid-base disorder based on the anion gap?",
      options: ["High anion gap metabolic acidosis", "Normal anion gap (non-gap) metabolic acidosis", "Mixed anion gap and non-gap metabolic acidosis", "Respiratory acidosis with metabolic compensation", "Metabolic alkalosis"],
      correctIndex: 2,
      explanation: "Anion gap = Na+ - (Cl- + HCO3-) = 140 - (115 + 15) = 10, which is normal (8-12). However, for a patient with CKD and a HCO3- of 15, one would expect a high anion gap from uremic acids. The delta-delta analysis reveals: expected ΔAG = AG - 12 = -2 (no gap elevation), but the ΔHCO3- = 24 - 15 = 9. Since the anion gap is normal despite significant bicarbonate loss, this is a non-anion gap metabolic acidosis (from impaired renal ammonium excretion in early-moderate CKD). In advanced CKD, both anion gap and non-gap acidosis coexist.",
      optionExplanations: ["Incorrect. The anion gap is 10, which is within normal range; this is not a purely high anion gap acidosis.", "Correct interpretation would be non-gap, but in CKD, both components often coexist.", "Correct. CKD can produce both high anion gap (from uremic toxin accumulation) and non-anion gap (from impaired NH4+ excretion) metabolic acidosis; the delta-delta analysis here reveals the non-gap component predominates.", "Incorrect. The primary disorder is metabolic acidosis (low HCO3-), not respiratory acidosis.", "Incorrect. The pH is acidotic (7.32) with low HCO3-, not metabolic alkalosis."],
      highYieldPoint: "CKD acidosis: early stages = non-anion gap (↓ NH4+ excretion, hyperchloremic); advanced stages = high anion gap (uremic acid accumulation). Always check delta-delta."
    },
    {
      vignette: "A 30-year-old woman presents with tingling in her hands and face and lightheadedness after a panic attack. ABG shows pH 7.52, PaCO2 25 mmHg, PaO2 110 mmHg, HCO3- 20 mEq/L.",
      question: "Which of the following best explains the tingling and tetanic symptoms in this patient?",
      options: ["Respiratory alkalosis decreasing ionized calcium levels", "Hyperkalemia causing nerve membrane depolarization", "Metabolic acidosis causing potassium shift into cells", "Hypoxemia causing peripheral nerve ischemia", "Hypernatremia causing cerebral dehydration"],
      correctIndex: 0,
      explanation: "Hyperventilation during a panic attack causes respiratory alkalosis (low PaCO2, high pH). Alkalemia increases the negative charge on albumin, causing more ionized (free) calcium to bind to albumin, thereby decreasing the physiologically active ionized calcium level. This effective hypocalcemia increases neuronal excitability, causing perioral/peripheral paresthesias, carpopedal spasm, and tetany (Trousseau and Chvostek signs).",
      optionExplanations: ["Correct. Alkalosis increases calcium binding to albumin → decreased ionized Ca2+ → increased neuromuscular excitability → paresthesias and tetany.", "Incorrect. Alkalosis causes hypokalemia (potassium shifts into cells), not hyperkalemia.", "Incorrect. This patient has respiratory alkalosis, not metabolic acidosis.", "Incorrect. PaO2 is 110 mmHg (normal/elevated); hypoxemia is not present.", "Incorrect. There is no information suggesting hypernatremia; the mechanism is alkalosis-induced ionized hypocalcemia."],
      highYieldPoint: "Respiratory alkalosis (hyperventilation) → ↑ Ca2+ binding to albumin → ↓ ionized Ca2+ → paresthesias, tetany. Also causes ↓ K+ (shift into cells) and ↓ cerebral blood flow."
    },
    {
      vignette: "A 65-year-old man with COPD and chronic CO2 retention presents with a COPD exacerbation. ABG shows pH 7.22, PaCO2 80 mmHg, PaO2 50 mmHg, HCO3- 32 mEq/L.",
      question: "Which of the following best describes this patient's acid-base status?",
      options: ["Acute respiratory acidosis only", "Metabolic alkalosis with respiratory compensation", "Chronic respiratory acidosis with acute exacerbation", "Acute metabolic acidosis", "Chronic respiratory acidosis with adequate compensation"],
      correctIndex: 2,
      explanation: "This patient has chronic respiratory acidosis (baseline CO2 retention from COPD) with an acute exacerbation. The HCO3- of 32 mEq/L indicates chronic renal compensation (expected rise of 3.5 mEq/L per 10 mmHg rise in PaCO2 for chronic compensation). However, the pH of 7.22 is more acidotic than expected for a purely compensated chronic respiratory acidosis, indicating an acute-on-chronic process. In chronic compensation alone, the pH would be closer to 7.35-7.38.",
      optionExplanations: ["Incorrect. In acute respiratory acidosis, HCO3- rises only 1 mEq/L per 10 mmHg PaCO2 increase; HCO3- of 32 suggests chronic compensation.", "Incorrect. The primary disorder is respiratory acidosis (elevated PaCO2), not metabolic alkalosis.", "Correct. The elevated HCO3- (32) indicates chronic renal compensation, while the severely acidotic pH (7.22) indicates an acute worsening on top of chronic retention.", "Incorrect. HCO3- is elevated (32), not decreased as in metabolic acidosis.", "Incorrect. If compensation were adequate, the pH would be near normal (7.35-7.38); the pH of 7.22 indicates inadequate compensation due to an acute component."],
      highYieldPoint: "Respiratory acidosis compensation: acute = HCO3- rises 1 per 10 PaCO2; chronic = HCO3- rises 3.5 per 10 PaCO2. Acute-on-chronic: elevated HCO3- but pH still very low."
    },
    {
      vignette: "A 45-year-old woman is admitted to the ICU with septic shock from a urinary tract infection. ABG shows pH 7.20, PaCO2 20 mmHg, PaO2 90 mmHg, HCO3- 8 mEq/L. Serum lactate is 8 mmol/L. Serum sodium 138, potassium 4.5, chloride 100.",
      question: "Which of the following is the primary cause of the elevated anion gap in this patient?",
      options: ["Ketoacids from starvation", "Renal tubular acidosis", "Ingestion of methanol", "Lactic acid from tissue hypoperfusion", "Excess saline administration"],
      correctIndex: 3,
      explanation: "The anion gap = 138 - (100 + 8) = 30, markedly elevated. In septic shock, tissue hypoperfusion leads to anaerobic glycolysis and lactic acid accumulation (type A lactic acidosis). Lactate >4 mmol/L in sepsis is associated with significant mortality. The elevated serum lactate (8 mmol/L) confirms lactic acidosis as the cause of the high anion gap metabolic acidosis. The mnemonic MUDPILES helps remember causes of high AG acidosis.",
      optionExplanations: ["Incorrect. Starvation ketoacidosis would not typically produce lactate of 8 mmol/L and is mild compared to this severe acidosis.", "Incorrect. Renal tubular acidosis causes a normal anion gap (hyperchloremic) metabolic acidosis.", "Incorrect. Methanol ingestion causes high AG acidosis with osmol gap, visual disturbances, and formic acid production, not septic shock.", "Correct. Septic shock → tissue hypoperfusion → anaerobic metabolism → lactic acidosis (type A). Lactate of 8 mmol/L confirms this as the primary cause.", "Incorrect. Excess saline causes hyperchloremic normal anion gap acidosis (dilutional), not a high AG acidosis."],
      highYieldPoint: "MUDPILES: Methanol, Uremia, DKA, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates. Type A lactic acidosis = tissue hypoperfusion."
    },
    {
      vignette: "A 75-year-old man with congestive heart failure is on long-term furosemide therapy. He presents with weakness and confusion. ABG shows pH 7.52, PaCO2 48 mmHg, HCO3- 38 mEq/L. Serum potassium is 2.8 mEq/L.",
      question: "Which of the following mechanisms best explains how furosemide causes metabolic alkalosis?",
      options: ["Direct stimulation of bicarbonate reabsorption in the proximal tubule", "Inhibition of carbonic anhydrase in the proximal tubule", "Blockade of the epithelial sodium channel in the collecting duct", "Inhibition of the Na+/K+/2Cl- cotransporter causing volume contraction and increased aldosterone activity", "Direct inhibition of hydrogen ion secretion in the distal nephron"],
      correctIndex: 3,
      explanation: "Furosemide (loop diuretic) inhibits the Na+/K+/2Cl- cotransporter (NKCC2) in the thick ascending limb of the loop of Henle, causing natriuresis, kaliuresis, and volume depletion. Volume contraction stimulates the renin-angiotensin-aldosterone system, which increases distal nephron H+ and K+ secretion. Additionally, the increased sodium delivery to the collecting duct enhances K+ and H+ secretion. The resulting contraction alkalosis and hypokalemia perpetuate the metabolic alkalosis.",
      optionExplanations: ["Incorrect. Furosemide does not directly stimulate proximal bicarbonate reabsorption.", "Incorrect. Carbonic anhydrase inhibitors (acetazolamide) cause metabolic acidosis by preventing bicarbonate reabsorption.", "Incorrect. ENaC blockade (by amiloride, triamterene) would cause hyperkalemia and metabolic acidosis, the opposite effect.", "Correct. Furosemide blocks NKCC2 → volume depletion → ↑ aldosterone → ↑ distal H+/K+ secretion → metabolic alkalosis + hypokalemia (contraction alkalosis).", "Incorrect. Furosemide does not directly inhibit H+ secretion; it indirectly promotes H+ secretion via aldosterone activation."],
      highYieldPoint: "Loop diuretics → contraction alkalosis: volume depletion → ↑ RAAS → ↑ aldosterone → ↑ H+/K+ secretion → metabolic alkalosis + hypokalemia. Treat with volume repletion + KCl."
    },
    {
      vignette: "A 28-year-old woman is brought to the emergency department after ingesting an unknown substance. ABG shows pH 7.25, PaCO2 12 mmHg, HCO3- 5 mEq/L. Serum osmolality is 320 mOsm/kg while calculated osmolality is 280 mOsm/kg, giving an osmol gap of 40.",
      question: "Which of the following ingestions is most likely responsible for this patient's presentation?",
      options: ["Aspirin (salicylate)", "Iron tablets", "Isopropyl alcohol", "Acetaminophen", "Ethylene glycol"],
      correctIndex: 4,
      explanation: "This patient has a high anion gap metabolic acidosis with an elevated osmol gap (40, normal <10). The combination of high AG metabolic acidosis + elevated osmol gap is characteristic of toxic alcohol ingestion: ethylene glycol or methanol. Ethylene glycol (antifreeze) is metabolized to glycolic acid and oxalic acid, causing AG acidosis, and calcium oxalate crystals in the urine. The parent compound (ethylene glycol) contributes to the osmol gap before metabolism.",
      optionExplanations: ["Incorrect. Salicylate toxicity causes a mixed respiratory alkalosis and high AG metabolic acidosis but does not typically produce a significant osmol gap.", "Incorrect. Iron toxicity causes GI hemorrhage and high AG acidosis but does not produce an osmol gap.", "Incorrect. Isopropyl alcohol causes an elevated osmol gap with ketosis but NOT metabolic acidosis (isopropanol → acetone, which does not generate acid).", "Incorrect. Acetaminophen causes hepatotoxicity (NAPQI metabolite) but not high AG acidosis with osmol gap.", "Correct. Ethylene glycol causes high AG metabolic acidosis + elevated osmol gap. Metabolites: glycolic acid → oxalic acid → calcium oxalate crystals in urine."],
      highYieldPoint: "High AG acidosis + osmol gap → toxic alcohols (ethylene glycol, methanol). Ethylene glycol → oxalic acid + Ca oxalate crystals. Methanol → formic acid + blindness. Treat: fomepizole."
    },
    {
      vignette: "A 70-year-old man with chronic obstructive pulmonary disease is brought in obtunded after receiving high-flow oxygen during ambulance transport. His baseline PaCO2 is known to be 60 mmHg. Current ABG shows pH 7.18, PaCO2 90 mmHg, PaO2 250 mmHg, HCO3- 33 mEq/L.",
      question: "Which of the following best explains why high-flow oxygen worsened this patient's hypercapnia?",
      options: ["Oxygen is toxic to the respiratory center above an FiO2 of 50%", "High oxygen abolished the hypoxic drive to breathe, causing hypoventilation", "Oxygen directly increases CO2 production through enhanced aerobic metabolism", "High-flow oxygen caused bronchospasm and air trapping", "The Haldane effect caused CO2 release from hemoglobin into plasma"],
      correctIndex: 4,
      explanation: "While traditionally attributed to loss of hypoxic ventilatory drive, the Haldane effect is now recognized as the most important mechanism of oxygen-induced hypercapnia in COPD. The Haldane effect describes how oxygenated hemoglobin has reduced affinity for CO2 — when PaO2 rises, hemoglobin releases CO2 into the blood, raising PaCO2. Additionally, V/Q mismatch worsening (loss of hypoxic vasoconstriction) and some reduction in ventilatory drive contribute. The clinical teaching to titrate O2 to SpO2 88-92% in COPD is based on this phenomenon.",
      optionExplanations: ["Incorrect. Oxygen is not directly toxic to the respiratory center; oxygen toxicity refers to free radical damage to lung parenchyma with prolonged high FiO2.", "Incorrect. While loss of hypoxic drive contributes, research shows it is not the primary mechanism; the Haldane effect and V/Q redistribution play larger roles.", "Incorrect. Supplemental oxygen does not significantly increase metabolic CO2 production.", "Incorrect. High-flow oxygen does not cause bronchospasm in COPD patients.", "Correct. The Haldane effect is the dominant mechanism: oxygenated Hb releases CO2, and loss of hypoxic pulmonary vasoconstriction increases dead space ventilation, together worsening hypercapnia."],
      highYieldPoint: "O2-induced hypercapnia in COPD: Haldane effect (oxyHb releases CO2) + loss of hypoxic vasoconstriction → V/Q mismatch + some loss of hypoxic drive. Target SpO2 88-92%."
    },
    {
      vignette: "A 55-year-old man with chronic alcoholism presents with intractable vomiting for 3 days. ABG shows pH 7.55, PaCO2 45 mmHg, HCO3- 38 mEq/L. Serum potassium is 2.5 mEq/L, chloride 85 mEq/L.",
      question: "Which of the following renal mechanisms most directly perpetuates the metabolic alkalosis in this patient?",
      options: ["Increased proximal tubule citrate excretion", "Paradoxical aciduria from hypokalemia-driven H+ secretion in the collecting duct", "Decreased aldosterone secretion", "Increased renal bicarbonate excretion", "Decreased ammonia production in the proximal tubule"],
      correctIndex: 1,
      explanation: "Prolonged vomiting causes loss of HCl (gastric acid), producing metabolic alkalosis. Hypokalemia perpetuates the alkalosis through paradoxical aciduria: when potassium is depleted, the kidney reabsorbs K+ in exchange for H+ secretion in the collecting duct (H+/K+ ATPase). Additionally, intracellular K+ depletion causes H+ to shift into cells, stimulating renal H+ secretion and bicarbonate reabsorption. Volume depletion also maintains the alkalosis by stimulating proximal bicarbonate reabsorption.",
      optionExplanations: ["Incorrect. Citrate excretion is not the primary mechanism perpetuating alkalosis in this setting.", "Correct. Hypokalemia drives paradoxical aciduria: renal H+/K+ ATPase secretes H+ to reabsorb K+, wasting acid and perpetuating metabolic alkalosis despite systemic alkalemia.", "Incorrect. Aldosterone is actually increased (from volume depletion), further promoting H+ and K+ secretion.", "Incorrect. The kidney would normally excrete bicarbonate to correct alkalosis, but volume depletion and hypokalemia prevent this correction.", "Incorrect. Ammonia production changes do not play a primary role in perpetuating vomiting-induced alkalosis."],
      highYieldPoint: "Vomiting → metabolic alkalosis (HCl loss) + hypokalemia + volume depletion. Hypokalemia perpetuates via paradoxical aciduria (H+/K+ ATPase). Treat: NS + KCl ('saline-responsive')."
    },
    {
      vignette: "A 60-year-old man with interstitial lung disease undergoes diffusion capacity testing. His DLCO is 40% predicted. He also has an exercise desaturation test showing his SpO2 drops from 95% to 82% with exertion.",
      question: "Which of the following best explains the exercise-induced desaturation in this patient?",
      options: ["Increased cardiac output reduces pulmonary capillary transit time below the time needed for oxygen equilibration", "Exercise increases dead space ventilation", "Pulmonary vasodilation during exercise causes right-to-left shunting", "Decreased hemoglobin oxygen affinity during exercise", "Increased bronchospasm during exercise"],
      correctIndex: 0,
      explanation: "In interstitial lung disease, thickened alveolar-capillary membranes impair diffusion. At rest, blood transit time through pulmonary capillaries (~0.75 seconds) is sufficient for oxygen equilibration despite the diffusion impairment. During exercise, increased cardiac output shortens capillary transit time (to ~0.25 seconds), which is insufficient for complete oxygen equilibration across the thickened membrane, causing desaturation. This is a classic 'diffusion limitation' that becomes apparent with exercise.",
      optionExplanations: ["Correct. Exercise increases cardiac output → shortened capillary transit time → insufficient time for O2 to diffuse across the thickened alveolar-capillary membrane → desaturation.", "Incorrect. Exercise typically decreases the dead space to tidal volume ratio (VD/VT) due to recruitment of pulmonary vasculature.", "Incorrect. Pulmonary vasodilation during exercise recruits capillaries and does not cause right-to-left shunting.", "Incorrect. While the Bohr effect shifts the curve right during exercise (↑ CO2, ↓ pH, ↑ temp), this aids oxygen unloading in tissues and does not explain the arterial desaturation.", "Incorrect. Exercise-induced bronchospasm is an obstructive phenomenon and would not typically cause this degree of desaturation in a patient with ILD."],
      highYieldPoint: "Diffusion limitation: at rest, O2 equilibrates even with thickened membrane (transit time 0.75s). Exercise ↑ CO → ↓ transit time → O2 can't equilibrate → desaturation."
    },
    {
      vignette: "A 40-year-old man is found unresponsive in a house fire. He is brought to the emergency department with cherry-red skin. ABG on 100% FiO2 shows PaO2 550 mmHg, SaO2 on ABG co-oximetry is 60%, but pulse oximetry reads 99%.",
      question: "Which of the following best explains the discrepancy between pulse oximetry and co-oximetry readings in this patient?",
      options: ["The ABG machine is malfunctioning", "Pulse oximetry cannot distinguish carboxyhemoglobin from oxyhemoglobin", "The patient has methemoglobinemia causing false readings", "High PaO2 saturates the pulse oximeter probe", "Cyanide poisoning interferes with pulse oximetry"],
      correctIndex: 1,
      explanation: "Carbon monoxide (CO) from smoke inhalation binds hemoglobin with 200-250x the affinity of oxygen, forming carboxyhemoglobin (COHb). Standard pulse oximetry uses only two wavelengths of light (660 nm and 940 nm) and cannot distinguish COHb from oxyhemoglobin because they have similar absorption at these wavelengths, falsely reading SpO2 as normal. Co-oximetry (on ABG machines) uses multiple wavelengths to separately measure oxyhemoglobin, deoxyhemoglobin, COHb, and methemoglobin, revealing the true low oxygen saturation.",
      optionExplanations: ["Incorrect. The ABG co-oximeter is providing the accurate measurement; the pulse oximeter is the inaccurate one in CO poisoning.", "Correct. Pulse oximetry reads COHb as oxyhemoglobin (similar light absorption at 660nm), giving a falsely normal SpO2. Co-oximetry accurately detects COHb.", "Incorrect. Methemoglobinemia causes pulse oximetry to trend toward 85% regardless of true saturation; the presentation with cherry-red skin and house fire is classic for CO poisoning.", "Incorrect. High PaO2 does not cause the pulse oximeter to read falsely high; the issue is COHb mimicking oxyhemoglobin.", "Incorrect. While cyanide poisoning may co-occur in fire victims, it does not specifically cause the SpO2/co-oximetry discrepancy seen here."],
      highYieldPoint: "CO poisoning: pulse ox falsely normal (can't distinguish COHb from O2Hb). Use co-oximetry. CO has 200-250x O2 affinity for Hb. Treat: 100% O2 or hyperbaric O2."
    },
    {
      vignette: "An 18-year-old woman with a history of bulimia nervosa presents with muscle weakness. ABG shows pH 7.50, PaCO2 46 mmHg, HCO3- 35 mEq/L. Urine chloride is <10 mEq/L.",
      question: "Which of the following best classifies this patient's metabolic alkalosis based on the urine chloride level?",
      options: ["Saline-resistant metabolic alkalosis", "Saline-responsive metabolic alkalosis", "Renal tubular acidosis", "Mineralocorticoid excess", "Normal saline-induced alkalosis"],
      correctIndex: 1,
      explanation: "A urine chloride <20 mEq/L indicates saline-responsive metabolic alkalosis, meaning the alkalosis will correct with volume repletion (normal saline + KCl). This patient's bulimia (self-induced vomiting) causes loss of gastric HCl, leading to metabolic alkalosis with volume depletion and chloride depletion. The kidneys avidly reabsorb sodium (and bicarbonate) in the setting of volume depletion, perpetuating the alkalosis. Saline-resistant causes (urine Cl- >20 mEq/L) include hyperaldosteronism and Bartter/Gitelman syndromes.",
      optionExplanations: ["Incorrect. Saline-resistant alkalosis has urine chloride >20 mEq/L and is caused by mineralocorticoid excess or severe hypokalemia.", "Correct. Urine Cl- <20 mEq/L = saline-responsive alkalosis (vomiting, NG suction, diuretic use — remote). Treatment: IV normal saline + KCl.", "Incorrect. RTA causes metabolic acidosis, not alkalosis.", "Incorrect. Mineralocorticoid excess causes saline-resistant alkalosis with urine Cl- >20 mEq/L.", "Incorrect. Normal saline does not cause alkalosis; it is the treatment for saline-responsive metabolic alkalosis."],
      highYieldPoint: "Metabolic alkalosis: urine Cl- <20 = saline-responsive (vomiting, diuretics-remote) → give NS + KCl. Urine Cl- >20 = saline-resistant (hyperaldosteronism, Bartter, Gitelman)."
    },
    {
      vignette: "A 35-year-old man with a pulmonary arteriovenous malformation (AVM) has persistent hypoxemia despite 100% FiO2. His PaO2 on 100% oxygen is only 70 mmHg. The A-a gradient is markedly elevated.",
      question: "Which of the following mechanisms of hypoxemia is demonstrated by this patient's lack of response to supplemental oxygen?",
      options: ["V/Q mismatch", "Diffusion impairment", "Hypoventilation", "Right-to-left shunt", "Decreased FiO2 (high altitude)"],
      correctIndex: 3,
      explanation: "Right-to-left shunt is the only cause of hypoxemia that does not improve significantly with 100% supplemental oxygen. In a pulmonary AVM, deoxygenated blood bypasses ventilated alveoli entirely and mixes with oxygenated blood, diluting the PaO2. Since the shunted blood never contacts alveolar gas, increasing FiO2 cannot improve its oxygenation. The A-a gradient is elevated and widens further with 100% O2. V/Q mismatch and diffusion impairment both respond to supplemental O2.",
      optionExplanations: ["Incorrect. V/Q mismatch responds to supplemental O2 because increasing FiO2 improves oxygenation in poorly ventilated units.", "Incorrect. Diffusion impairment responds to supplemental O2 because increasing the alveolar-capillary O2 gradient enhances diffusion.", "Incorrect. Hypoventilation responds to supplemental O2 (and has a normal A-a gradient); it also responds to increasing ventilation.", "Correct. Right-to-left shunt (pulmonary AVM) does NOT respond to 100% O2 because shunted blood never contacts alveolar gas. This is the hallmark feature distinguishing shunt from V/Q mismatch.", "Incorrect. Decreased FiO2 at high altitude would correct with supplemental O2 and has a normal A-a gradient."],
      highYieldPoint: "Shunt is the only cause of hypoxemia unresponsive to 100% O2. Shunt: elevated A-a gradient, no O2 response. V/Q mismatch: elevated A-a, responds to O2. Hypoventilation: normal A-a gradient."
    },
    {
      vignette: "A medical student reviews ABG interpretation. She encounters a patient with pH 7.48, PaCO2 20 mmHg, HCO3- 14 mEq/L, and a serum salicylate level of 60 mg/dL.",
      question: "Which of the following best describes the acid-base disorder in salicylate toxicity?",
      options: ["Pure respiratory alkalosis", "Pure high anion gap metabolic acidosis", "Mixed respiratory alkalosis and high anion gap metabolic acidosis", "Pure metabolic alkalosis", "Mixed respiratory acidosis and metabolic alkalosis"],
      correctIndex: 2,
      explanation: "Salicylate (aspirin) toxicity characteristically produces a mixed acid-base disorder: respiratory alkalosis from direct stimulation of the medullary respiratory center (causing hyperventilation and low PaCO2) AND high anion gap metabolic acidosis from uncoupling of oxidative phosphorylation, interference with the Krebs cycle, and accumulation of organic acids (lactic acid, ketoacids, salicylic acid). The low HCO3- (14) with a low PaCO2 (20) and alkalemic pH reflects the mixed nature.",
      optionExplanations: ["Incorrect. While respiratory alkalosis is present (low PaCO2), the HCO3- of 14 is too low for pure respiratory alkalosis compensation, indicating a concurrent metabolic acidosis.", "Incorrect. Pure metabolic acidosis would show the PaCO2 as respiratory compensation (low), but the pH of 7.48 is alkalemic, not acidemic.", "Correct. Salicylate toxicity causes direct respiratory center stimulation (respiratory alkalosis) + uncoupled oxidative phosphorylation and organic acid accumulation (high AG metabolic acidosis).", "Incorrect. There is no bicarbonate elevation; HCO3- is 14, not elevated.", "Incorrect. Respiratory acidosis would require elevated PaCO2, but PaCO2 is low (20 mmHg)."],
      highYieldPoint: "Salicylate toxicity: mixed respiratory alkalosis (central hyperventilation) + high AG metabolic acidosis (uncoupled oxidative phosphorylation). Tinnitus is an early symptom."
    },
    {
      vignette: "A 58-year-old man with type 2 diabetes and stage 4 chronic kidney disease presents with fatigue. ABG shows pH 7.30, PaCO2 28 mmHg, HCO3- 13 mEq/L. Serum potassium is 5.8 mEq/L, sodium 140 mEq/L, chloride 112 mEq/L. Urine pH is 5.8 and urine anion gap is positive.",
      question: "Which of the following is the most likely type of renal tubular acidosis in this patient?",
      options: ["Type 1 (distal) RTA with impaired H+ secretion", "Type 2 (proximal) RTA with impaired HCO3- reabsorption", "Type 3 (mixed) RTA", "Type 1 RTA with nephrolithiasis", "Type 4 RTA from hypoaldosteronism"],
      correctIndex: 4,
      explanation: "Type 4 RTA (hyperkalemic distal RTA) results from aldosterone deficiency or resistance, which is common in diabetic nephropathy (hyporeninemic hypoaldosteronism). Aldosterone normally promotes both potassium secretion and hydrogen ion secretion in the collecting duct. Its deficiency leads to hyperkalemia and mild non-anion gap metabolic acidosis. The anion gap here is 140 - (112 + 13) = 15, which is normal/borderline, consistent with a non-gap metabolic acidosis. The positive urine anion gap indicates impaired renal ammonium excretion.",
      optionExplanations: ["Incorrect. Type 1 (distal) RTA involves inability to secrete H+ in the collecting duct, resulting in urine pH > 5.5, hypokalemia (not hyperkalemia), and risk of nephrolithiasis and nephrocalcinosis.", "Incorrect. Type 2 (proximal) RTA involves impaired HCO3- reabsorption in the proximal tubule, causing bicarbonaturia; it is associated with hypokalemia and Fanconi syndrome, not hyperkalemia.", "Incorrect. Type 3 RTA is rare and combines features of types 1 and 2; it is not associated with the hyperkalemia seen here.", "Incorrect. While type 1 RTA does cause nephrolithiasis (alkaline urine → calcium phosphate stones), it presents with hypokalemia, not the hyperkalemia seen in this patient.", "Correct. Type 4 RTA from hyporeninemic hypoaldosteronism (common in diabetic nephropathy) causes hyperkalemia and mild non-anion gap metabolic acidosis with impaired ammonium excretion (positive urine anion gap)."],
      highYieldPoint: "Type 4 RTA: hyperkalemia + non-gap metabolic acidosis from hypoaldosteronism (diabetic nephropathy). Type 1: distal, hypokalemia, urine pH > 5.5. Type 2: proximal, hypokalemia, Fanconi syndrome."
    }
  ]
};

const PULM_SUMMARIES = {

  "Lung physiology & mechanics":   {
    sections: [
      {
        heading: "Lung Volumes & Capacities",
        bullets: [
          "Tidal volume (TV): ~500 mL, normal quiet breath",
          "Residual volume (RV): air remaining after maximal expiration; cannot be measured by spirometry",
          "FRC = ERV + RV: equilibrium point where lung inward recoil = chest wall outward recoil",
          "TLC = IRV + TV + ERV + RV: maximal lung volume after full inspiration",
          "Vital capacity (VC) = IRV + TV + ERV: maximal exhalable volume",
          "FRC, RV, and TLC require plethysmography or gas dilution to measure (contain RV component)"
        ]
      },
      {
        heading: "Spirometry & Obstructive vs. Restrictive",
        bullets: [
          "FEV1/FVC < 0.70 = obstructive pattern (asthma, COPD)",
          "FEV1/FVC normal or increased + reduced FVC and TLC = restrictive pattern",
          "Restrictive: intrinsic (IPF, sarcoidosis — ↓ DLCO) vs. extrapulmonary (neuromuscular, chest wall — normal DLCO/VA)"
        ]
      },
      {
        heading: "Compliance & Surfactant",
        bullets: [
          "Compliance = ΔV/ΔP: high compliance = easily distensible (emphysema); low compliance = stiff (fibrosis)",
          "Surfactant (DPPC) from type II pneumocytes reduces surface tension, prevents atelectasis",
          "Law of Laplace: P = 2T/r — small alveoli need more surfactant to prevent collapse",
          "L/S ratio ≥ 2 in amniotic fluid indicates fetal lung maturity"
        ]
      },
      {
        heading: "Ventilation & Perfusion",
        bullets: [
          "Alveolar ventilation = RR × (VT − VD); PaCO2 inversely proportional to alveolar ventilation",
          "West Zones: Zone 1 (apex): PA > Pa > Pv (dead space); Zone 3 (base): Pa > Pv > PA (best perfusion)",
          "V/Q ratio highest at apex (~3.3), lowest at base (~0.6); overall V/Q ≈ 0.8",
          "Hypoxic pulmonary vasoconstriction diverts blood away from poorly ventilated regions"
        ]
      },
      {
        heading: "Oxygen Transport",
        bullets: [
          "O2 content = (1.34 × Hb × SaO2) + (0.003 × PaO2); hemoglobin-bound O2 vastly exceeds dissolved O2",
          "Right-shift O2-Hb curve (↑ P50, ↓ affinity): ↑ temp, ↑ CO2, ↓ pH, ↑ 2,3-BPG",
          "Left-shift (↓ P50, ↑ affinity): ↓ temp, ↓ CO2, ↑ pH, ↓ 2,3-BPG, fetal Hb, CO, methemoglobin"
        ]
      }
    ],
    table: {
      headers: ["Volume/Capacity", "Definition", "Normal Value", "Measured by Spirometry?"],
      rows: [
        ["TV", "Normal quiet breath", "~500 mL", "Yes"],
        ["IRV", "Extra air inspired above TV", "~3000 mL", "Yes"],
        ["ERV", "Extra air expired below TV", "~1200 mL", "Yes"],
        ["RV", "Air remaining after max expiration", "~1200 mL", "No"],
        ["FRC (ERV+RV)", "Volume at rest equilibrium", "~2400 mL", "No"],
        ["VC (IRV+TV+ERV)", "Max exhalable volume", "~4700 mL", "Yes"],
        ["TLC (VC+RV)", "Max lung volume", "~5900 mL", "No"]
      ]
    },
    mnemonic: "Right-shift the O2-Hb curve: 'CADET, face Right' — CO2, Acid, 2,3-DPG (BPG), Exercise, Temperature. These all increase tissue O2 delivery by decreasing Hb-O2 affinity."
  },

  "Obstructive lung disease":   {
    sections: [
      {
        heading: "Asthma",
        bullets: [
          "Type I hypersensitivity (IgE-mediated) + airway inflammation with eosinophils",
          "Early phase (minutes): mast cell degranulation → histamine, PGD2, leukotrienes → bronchoconstriction",
          "Late phase (4-8 hrs): eosinophils, Th2 cytokines (IL-4, IL-5, IL-13) → chronic inflammation",
          "Airway remodeling: subepithelial fibrosis, smooth muscle hypertrophy, goblet cell hyperplasia",
          "Findings: Curschmann spirals (mucus casts), Charcot-Leyden crystals (eosinophil breakdown), Creola bodies",
          "Spirometry: reversible obstruction (≥12% and 200 mL FEV1 improvement post-bronchodilator)",
          "Methacholine challenge: ≥20% FEV1 drop confirms airway hyperreactivity"
        ]
      },
      {
        heading: "COPD: Emphysema & Chronic Bronchitis",
        bullets: [
          "Emphysema: alveolar wall destruction → loss of elastic recoil + loss of radial traction on airways",
          "Centrilobular: smoking, upper lobes. Panacinar: alpha-1-antitrypsin deficiency, lower lobes",
          "Protease-antiprotease imbalance: neutrophil elastase vs. alpha-1-antitrypsin",
          "Alpha-1-AT deficiency: PiZZ genotype, lung (loss of function) + liver disease (gain of function — misfolded protein in ER → PAS+ diastase-resistant globules)",
          "Chronic bronchitis: productive cough ≥3 mo/yr for ≥2 yrs; Reid index >50% (submucosal gland hypertrophy)",
          "'Pink puffer' = emphysema (thin, barrel chest, pursed-lip breathing). 'Blue bloater' = chronic bronchitis (cyanotic, edematous, cor pulmonale)"
        ]
      },
      {
        heading: "Bronchiectasis",
        bullets: [
          "Permanent airway dilation from chronic infection destroying bronchial walls",
          "CT: signet ring sign + tram-track sign",
          "Causes: CF, Kartagener syndrome (immotile cilia), ABPA, immunodeficiency, recurrent infections",
          "CF: CFTR mutation (ΔF508, Chr 7) → thick secretions → S. aureus (childhood) → P. aeruginosa (adult)"
        ]
      },
      {
        heading: "Other Obstructive Conditions",
        bullets: [
          "Croup: parainfluenza virus → subglottic edema → steeple sign, barking cough, inspiratory stridor",
          "Epiglottitis: H. influenzae type b → thumbprint sign, drooling, tripod position",
          "Bronchiolitis: RSV (#1 cause in infants) → wheezing, hyperinflation"
        ]
      },
      {
        heading: "COPD Pharmacotherapy",
        bullets: [
          "SABA (albuterol): beta-2 agonist → Gs → ↑ cAMP → bronchodilation (rescue)",
          "LAMA (tiotropium): M3 antagonist → blocks Gq-mediated bronchoconstriction (maintenance)",
          "ICS + LABA (fluticasone/salmeterol): anti-inflammatory + sustained bronchodilation",
          "Montelukast: CysLT1 receptor antagonist; blocks leukotriene D4",
          "PDE-4 inhibitor (roflumilast): ↑ cAMP, reduces inflammation in severe COPD"
        ]
      }
    ],
    table: {
      headers: ["Feature", "Emphysema", "Chronic Bronchitis", "Asthma"],
      rows: [
        ["Mechanism", "Alveolar wall destruction", "Mucus gland hypertrophy", "Airway inflammation + bronchospasm"],
        ["FEV1/FVC", "Decreased", "Decreased", "Decreased (reversible)"],
        ["TLC/RV", "Increased (air trapping)", "Mildly increased", "Increased during exacerbation"],
        ["DLCO", "Decreased", "Normal", "Normal"],
        ["Classic phenotype", "Pink puffer", "Blue bloater", "Young, atopic"],
        ["Key histology", "Enlarged airspaces", "Reid index >50%", "Curschmann spirals, eosinophils"]
      ]
    },
    mnemonic: "Emphysema vs. Chronic Bronchitis: 'Pink Puffers Pant, Blue Bloaters Belch mucus' — Emphysema patients are thin with pursed-lip breathing; chronic bronchitis patients are cyanotic with productive cough and edema."
  },

  "Restrictive lung disease":   {
    sections: [
      {
        heading: "General Principles",
        bullets: [
          "Restrictive = ↓ FVC, ↓ TLC, normal or ↑ FEV1/FVC ratio",
          "Intrinsic (parenchymal): ↓ DLCO (IPF, sarcoidosis, pneumoconioses, drug toxicity)",
          "Extrinsic (extrapulmonary): normal DLCO/VA (chest wall diseases, neuromuscular disorders)",
          "Extrapulmonary causes: obesity, kyphoscoliosis, myasthenia gravis, Duchenne MD, ALS, diaphragm paralysis"
        ]
      },
      {
        heading: "Idiopathic Pulmonary Fibrosis (IPF)",
        bullets: [
          "Most common idiopathic interstitial pneumonia; UIP pattern on HRCT",
          "Adults >50, bibasilar honeycombing, traction bronchiectasis, Velcro crackles, clubbing",
          "Histology: temporal heterogeneity (fibroblast foci + normal lung + honeycomb areas)",
          "Poor prognosis: median survival 3-5 years. Rx: pirfenidone, nintedanib (antifibrotic)"
        ]
      },
      {
        heading: "Sarcoidosis",
        bullets: [
          "Non-caseating granulomas in multiple organs; most common in young Black women",
          "Bilateral hilar lymphadenopathy, erythema nodosum, anterior uveitis, Bell palsy",
          "Elevated ACE, hypercalcemia (macrophage 1α-hydroxylase → ↑ 1,25-vit D)",
          "Schaumann bodies (calcified concretions) and asteroid bodies in giant cells",
          "Most patients recover spontaneously; corticosteroids for severe disease"
        ]
      },
      {
        heading: "Pneumoconioses",
        bullets: [
          "Asbestosis: lower lobes, pleural plaques, ferruginous bodies, ↑ mesothelioma + bronchogenic carcinoma risk",
          "Silicosis: upper lobes, eggshell calcification of hilar nodes, ↑ TB risk; macrophages can't digest silica → NLRP3 inflammasome",
          "Coal workers' pneumoconiosis: coal macules → progressive massive fibrosis (Caplan syndrome with RA)",
          "Berylliosis: mimics sarcoidosis (non-caseating granulomas); beryllium lymphocyte proliferation test (BeLPT) for diagnosis"
        ]
      },
      {
        heading: "Hypersensitivity Pneumonitis",
        bullets: [
          "Type III (acute, 4-8 hrs) + type IV (chronic, granulomas) hypersensitivity",
          "Farmer's lung (thermophilic actinomycetes), bird fancier's lung (avian proteins), hot tub lung (MAC)",
          "IgG precipitins (not IgE); serum precipitating antibodies",
          "Chronic form can progress to irreversible fibrosis"
        ]
      },
      {
        heading: "ARDS & Drug-Induced Lung Disease",
        bullets: [
          "ARDS: PaO2/FiO2 ≤ 300, bilateral infiltrates, non-cardiogenic edema → DAD with hyaline membranes",
          "Treatment: low tidal volume ventilation (6 mL/kg IBW, lung-protective strategy)",
          "Amiodarone: phospholipidosis → foamy macrophages; also thyroid, liver, corneal, skin toxicity",
          "Methotrexate: hypersensitivity pneumonitis at any time; bleomycin: dose-dependent pulmonary fibrosis"
        ]
      }
    ],
    table: {
      headers: ["Disease", "Location", "Key Feature", "Associated Risk"],
      rows: [
        ["IPF", "Basilar", "Honeycombing (UIP)", "Poor prognosis"],
        ["Sarcoidosis", "Hilar LN + multi-organ", "Non-caseating granulomas", "Hypercalcemia"],
        ["Asbestosis", "Lower lobes", "Pleural plaques + ferruginous bodies", "Mesothelioma, lung CA"],
        ["Silicosis", "Upper lobes", "Eggshell calcification", "Tuberculosis"],
        ["CWP", "Upper lobes", "Coal macules", "Caplan syndrome (with RA)"],
        ["HP", "Varies", "Granulomas + exposure hx", "Chronic fibrosis"]
      ]
    },
    mnemonic: "Restrictive vs. Obstructive: 'In restriction, everything is small — small lungs, small volumes, but the ratio (FEV1/FVC) stays high because the lungs are stiff, not obstructed.'"
  },

  "Pulmonary vascular disease":   {
    sections: [
      {
        heading: "Pulmonary Embolism (PE)",
        bullets: [
          ">95% from lower extremity DVT (iliofemoral veins); Virchow's triad: stasis, endothelial injury, hypercoagulability",
          "Symptoms: acute dyspnea, pleuritic chest pain, tachycardia, hypoxemia",
          "ECG: sinus tachycardia (#1), S1Q3T3 pattern (classic but not sensitive)",
          "D-dimer: sensitive but not specific; CT angiography is gold standard for diagnosis",
          "Massive PE (hemodynamic instability): systemic thrombolysis (tPA) or embolectomy",
          "Submassive PE (stable, RV strain): anticoagulation ± thrombolysis; Low-risk: anticoagulation alone"
        ]
      },
      {
        heading: "Pulmonary Arterial Hypertension (PAH)",
        bullets: [
          "Defined as mPAP > 20 mmHg at rest; PVR = (mPAP − PCWP) / CO",
          "WHO Group 1 (PAH): plexiform lesions (pathognomonic), intimal fibrosis, medial hypertrophy",
          "Group 2: left heart disease; Group 3: lung disease/hypoxia; Group 4: CTEPH; Group 5: miscellaneous",
          "Treatment: prostacyclin analogs (epoprostenol: Gs → ↑ cAMP), PDE-5 inhibitors (sildenafil: ↑ cGMP), endothelin antagonists (bosentan), sGC stimulators (riociguat)"
        ]
      },
      {
        heading: "Special Embolic Syndromes",
        bullets: [
          "Fat embolism: 24-72 hrs post long bone fracture → triad: respiratory distress + neuro changes + petechial rash",
          "Amniotic fluid embolism: during labor → cardiovascular collapse + DIC + respiratory failure (very high mortality)",
          "Air embolism: rapid decompression, surgical/IV line complication → cardiovascular collapse",
          "Septic emboli: IVDU → tricuspid valve endocarditis → bilateral cavitating pulmonary nodules (S. aureus)"
        ]
      },
      {
        heading: "Hypercoagulable States",
        bullets: [
          "Factor V Leiden (most common inherited): resistance to activated protein C",
          "Prothrombin G20210A mutation: ↑ prothrombin levels",
          "Antiphospholipid syndrome: lupus anticoagulant + anti-cardiolipin + anti-β2GP1 → arterial/venous thrombosis + pregnancy loss; prolonged aPTT in vitro (paradox)",
          "Protein C/S deficiency: warfarin skin necrosis (protein C shortest half-life → transient hypercoagulability)"
        ]
      },
      {
        heading: "Anticoagulation",
        bullets: [
          "Heparin (UFH): anti-IIa + anti-Xa via ATIII; monitor with aPTT; reverse with protamine",
          "LMWH (enoxaparin): mainly anti-Xa; monitor with anti-Xa levels; partial protamine reversal",
          "Warfarin: vitamin K antagonist → ↓ II, VII, IX, X, protein C, S; monitor with PT/INR; bridge with heparin",
          "DOACs: rivaroxaban/apixaban (anti-Xa), dabigatran (anti-IIa); idarucizumab reverses dabigatran, andexanet alfa reverses Xa inhibitors"
        ]
      }
    ],
    table: {
      headers: ["Embolism Type", "Timing/Setting", "Key Features", "Treatment"],
      rows: [
        ["Thromboembolism", "Post-surgical, immobility", "Acute dyspnea, S1Q3T3", "Anticoagulation ± tPA"],
        ["Fat embolism", "24-72 hr post fracture", "Triad: lungs + brain + petechiae", "Supportive"],
        ["Amniotic fluid", "During labor/delivery", "Collapse + DIC", "Supportive, emergent delivery"],
        ["Air embolism", "Surgery, IV lines, diving", "Cardiovascular collapse", "Durant maneuver (L lateral decubitus + Trendelenburg)"],
        ["Septic embolism", "IVDU, endocarditis", "Cavitating pulmonary nodules", "Antibiotics + valve surgery"]
      ]
    },
    mnemonic: "Virchow's Triad for thrombosis: 'SHE' — Stasis (immobility, long flights), Hypercoagulability (Factor V Leiden, cancer, OCP), Endothelial injury (surgery, trauma)."
  },

  "Lung neoplasms":   {
    sections: [
      {
        heading: "Non-Small Cell Lung Cancer (NSCLC)",
        bullets: [
          "Adenocarcinoma: most common overall; peripheral; non-smokers/women; TTF-1+/napsin A+; driver mutations (EGFR, ALK, ROS1, KRAS)",
          "Squamous cell carcinoma: central; smoking; keratin pearls + intercellular bridges; p40/p63+; can cavitate; PTHrP → hypercalcemia",
          "Large cell carcinoma: diagnosis of exclusion; undifferentiated; peripheral or central; poor prognosis"
        ]
      },
      {
        heading: "Small Cell Lung Carcinoma (SCLC)",
        bullets: [
          "Neuroendocrine origin (Kulchitsky cells); central; strongly smoking-related",
          "Histology: small round blue cells, nuclear molding, high mitotic rate; chromogranin+, synaptophysin+",
          "Paraneoplastic syndromes: SIADH (ADH), Cushing (ACTH), Lambert-Eaton (anti-VGCC)",
          "Treatment: chemo + radiation (not surgical); limited vs. extensive stage",
          "Two-thirds present with extensive disease; very aggressive but initially chemo-responsive"
        ]
      },
      {
        heading: "Carcinoid Tumors & Benign Tumors",
        bullets: [
          "Typical carcinoid: low-grade neuroendocrine, central endobronchial, salt-and-pepper chromatin, not smoking-related, excellent prognosis",
          "Atypical carcinoid: intermediate-grade, 2-10 mitoses/2 mm², focal necrosis, worse prognosis",
          "Neuroendocrine spectrum: typical carcinoid → atypical carcinoid → large cell neuroendocrine → SCLC",
          "Hamartoma: most common benign lung tumor; cartilage + fat; 'popcorn' calcification on CT"
        ]
      },
      {
        heading: "Mesothelioma",
        bullets: [
          "Malignant pleural neoplasm from asbestos exposure (20-40 year latency)",
          "Circumferential pleural thickening, bloody effusion",
          "Markers: calretinin+, CK5/6+, WT-1+, D2-40+ (vs. adenocarcinoma: TTF-1+, CEA+)",
          "Not related to smoking; asbestos also increases bronchogenic carcinoma risk (synergistic with smoking)"
        ]
      },
      {
        heading: "Paraneoplastic Syndromes & Complications",
        bullets: [
          "Squamous cell: PTHrP → hypercalcemia (humoral hypercalcemia of malignancy)",
          "SCLC: SIADH (hyponatremia), ectopic ACTH (Cushing), Lambert-Eaton (anti-VGCC)",
          "Pancoast tumor (apex): Horner syndrome (ptosis, miosis, anhidrosis) + brachial plexopathy",
          "SVC syndrome: facial swelling, JVD, upper body cyanosis (SCLC #1 cause)",
          "Hypertrophic pulmonary osteoarthropathy: clubbing + arthropathy + periostitis (NSCLC)",
          "Virchow node: left supraclavicular LN metastasis (thoracic duct drainage)"
        ]
      },
      {
        heading: "Targeted Therapy in NSCLC",
        bullets: [
          "EGFR mutations (exon 19 del, L858R): osimertinib (3rd-gen EGFR TKI, preferred 1st line)",
          "ALK rearrangement: alectinib (preferred), crizotinib",
          "ROS1 fusion: crizotinib, entrectinib",
          "PD-L1 high expression (no driver mutation): pembrolizumab (anti-PD-1)",
          "All non-squamous NSCLC should be tested for driver mutations before treatment"
        ]
      }
    ],
    table: {
      headers: ["Lung Cancer Type", "Location", "Histology", "Key Association"],
      rows: [
        ["Adenocarcinoma", "Peripheral", "Glands, mucin, TTF-1+", "Non-smokers, EGFR/ALK mutations"],
        ["Squamous cell", "Central", "Keratin pearls, intercellular bridges", "Smoking, PTHrP, cavitation"],
        ["Small cell", "Central", "Small blue cells, nuclear molding", "Smoking, SIADH, ACTH, Lambert-Eaton"],
        ["Large cell", "Peripheral/central", "Undifferentiated", "Diagnosis of exclusion"],
        ["Carcinoid", "Central (typical)", "Salt-and-pepper chromatin", "Not smoking-related"],
        ["Mesothelioma", "Pleural", "Calretinin+, CK5/6+", "Asbestos exposure"]
      ]
    },
    mnemonic: "Lung cancer paraneoplastic syndromes: 'Squamous Secretes PTHrP (calcium up), Small cell Secretes SIADH/ACTH (sodium down, cortisol up)' — the two S's for S cancers."
  },

  "Acid-base & gas exchange":   {
    sections: [
      {
        heading: "ABG Interpretation Steps",
        bullets: [
          "1. Assess pH: <7.35 = acidemia, >7.45 = alkalemia",
          "2. Identify primary disorder: PaCO2 (respiratory) or HCO3- (metabolic)",
          "3. Calculate compensation: Winter's formula (metabolic acidosis), other formulas for other disorders",
          "4. Calculate anion gap: AG = Na - (Cl + HCO3-); normal 8-12",
          "5. If elevated AG: calculate delta-delta (ΔAG/ΔHCO3-) to detect hidden non-gap acidosis or metabolic alkalosis",
          "6. Calculate A-a gradient if hypoxemia present"
        ]
      },
      {
        heading: "Metabolic Acidosis",
        bullets: [
          "High AG (MUDPILES): Methanol, Uremia, DKA, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates",
          "Normal AG (hyperchloremic): diarrhea, RTA (types 1, 2, 4), carbonic anhydrase inhibitors, saline infusion",
          "DKA: ketoacids (beta-hydroxybutyrate); Lactic acidosis: type A (hypoperfusion) > type B (metabolic)",
          "Toxic alcohols: ethylene glycol + methanol → high AG + osmol gap; treat with fomepizole (alcohol dehydrogenase inhibitor)",
          "Winter's formula: expected PaCO2 = 1.5[HCO3-] + 8 ± 2"
        ]
      },
      {
        heading: "Metabolic Alkalosis",
        bullets: [
          "Saline-responsive (urine Cl- < 20): vomiting, NG suction, diuretics (remote use) → treat with NS + KCl",
          "Saline-resistant (urine Cl- > 20): hyperaldosteronism, Bartter syndrome, Gitelman syndrome, current diuretic use",
          "Contraction alkalosis: volume depletion → ↑ RAAS → ↑ H+/K+ secretion",
          "Hypokalemia perpetuates alkalosis: paradoxical aciduria (H+/K+ ATPase secretes H+ to reabsorb K+)"
        ]
      },
      {
        heading: "Respiratory Acid-Base Disorders",
        bullets: [
          "Respiratory acidosis: ↑ PaCO2 from hypoventilation (COPD, CNS depression, neuromuscular disease)",
          "Acute compensation: HCO3- ↑ 1 per 10 PaCO2; Chronic: HCO3- ↑ 3.5 per 10 PaCO2",
          "Respiratory alkalosis: ↓ PaCO2 from hyperventilation (anxiety, PE, salicylates, pregnancy, high altitude)",
          "Acute compensation: HCO3- ↓ 2 per 10 PaCO2; Chronic: HCO3- ↓ 5 per 10 PaCO2"
        ]
      },
      {
        heading: "Causes of Hypoxemia & A-a Gradient",
        bullets: [
          "Normal A-a gradient: hypoventilation (global ↓ ventilation), high altitude (↓ FiO2)",
          "Elevated A-a gradient: V/Q mismatch (most common), shunt (unresponsive to O2), diffusion impairment",
          "Shunt: only cause not corrected by 100% O2; blood bypasses ventilated alveoli (AVM, ARDS, cardiac shunts)",
          "A-a gradient = PAO2 - PaO2; normal ≈ age/4 + 4"
        ]
      },
      {
        heading: "Special Topics",
        bullets: [
          "CO poisoning: pulse ox falsely normal (can't distinguish COHb); cherry-red skin; use co-oximetry; treat with 100% O2 or hyperbaric O2",
          "Haldane effect: oxygenated Hb releases CO2; explains O2-induced hypercapnia in COPD",
          "Salicylate toxicity: mixed respiratory alkalosis (central stimulation) + high AG metabolic acidosis (uncoupled oxidative phosphorylation)",
          "Diffusion limitation: exercise-induced desaturation in ILD (shortened capillary transit time)"
        ]
      }
    ],
    table: {
      headers: ["Disorder", "pH", "Primary Change", "Compensation"],
      rows: [
        ["Metabolic acidosis", "↓", "↓ HCO3-", "↓ PaCO2 (Winter's formula)"],
        ["Metabolic alkalosis", "↑", "↑ HCO3-", "↑ PaCO2 (limited ~55)"],
        ["Acute respiratory acidosis", "↓", "↑ PaCO2", "↑ HCO3- by 1 per 10 PaCO2"],
        ["Chronic respiratory acidosis", "↓ (near normal)", "↑ PaCO2", "↑ HCO3- by 3.5 per 10 PaCO2"],
        ["Acute respiratory alkalosis", "↑", "↓ PaCO2", "↓ HCO3- by 2 per 10 PaCO2"],
        ["Chronic respiratory alkalosis", "↑ (near normal)", "↓ PaCO2", "↓ HCO3- by 5 per 10 PaCO2"]
      ]
    },
    mnemonic: "High AG metabolic acidosis: 'MUDPILES' — Methanol, Uremia, DKA, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates. For hypoxemia causes: 'Shunt is Stubborn — it doesn't respond to O2.'"
  }
};
