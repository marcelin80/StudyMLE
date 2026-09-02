const HEME_PART1_QUESTIONS = {

  "RBC disorders & anemia": [
    {
      vignette: "A 28-year-old woman presents with fatigue and exertional dyspnea that has worsened over the past 4 months. She reports heavy menstrual periods lasting 7–8 days each cycle. Physical examination reveals pallor, koilonychia, and angular cheilitis. Laboratory studies show hemoglobin 8.2 g/dL, MCV 68 fL, serum ferritin 6 ng/mL, elevated total iron-binding capacity, and low serum iron.",
      question: "Which of the following is the most likely finding on peripheral blood smear in this patient?",
      options: ["Hypochromic microcytic red blood cells with increased red cell distribution width", "Target cells with hemoglobin electrophoresis showing elevated HbA2", "Macro-ovalocytes with hypersegmented neutrophils", "Spherocytes with a positive direct Coombs test", "Schistocytes with thrombocytopenia"],
      correctIndex: 0,
      explanation: "This patient has iron deficiency anemia due to menorrhagia, evidenced by low ferritin, low serum iron, and high TIBC. Iron deficiency produces hypochromic microcytic red cells with marked anisocytosis (high RDW), which distinguishes it from thalassemia trait (normal RDW).",
      optionExplanations: ["Correct: Iron deficiency anemia produces hypochromic microcytes with elevated RDW reflecting anisocytosis.", "Incorrect: Target cells with elevated HbA2 suggest beta-thalassemia trait, which has a normal RDW and normal ferritin.", "Incorrect: Macro-ovalocytes and hypersegmented neutrophils are seen in megaloblastic anemia from B12 or folate deficiency.", "Incorrect: Spherocytes with a positive direct Coombs test indicate autoimmune hemolytic anemia, not iron deficiency.", "Incorrect: Schistocytes with thrombocytopenia suggest a microangiopathic hemolytic anemia such as TTP or HUS."],
      highYieldPoint: "Iron deficiency anemia: ↓ferritin, ↓serum iron, ↑TIBC, ↑RDW, microcytic hypochromic cells. Ferritin is the first lab value to drop."
    },
    {
      vignette: "A 9-year-old African American boy is brought to the emergency department with severe pain in his hands and feet, chest pain, and a temperature of 39.1°C (102.4°F). He has had multiple prior hospitalizations for similar episodes. His hemoglobin is 7.4 g/dL with a reticulocyte count of 12%. Peripheral smear shows sickled erythrocytes and Howell-Jolly bodies.",
      question: "Which of the following best explains the molecular basis of this patient's condition?",
      options: ["Deletion of all four alpha-globin genes", "A point mutation replacing glutamic acid with valine at position 6 of the beta-globin chain", "Deficiency of spectrin in the erythrocyte membrane", "Absent production of beta-globin chains", "Mutation in the ankyrin gene affecting red cell cytoskeleton"],
      correctIndex: 1,
      explanation: "Sickle cell disease is caused by a point mutation (GAG→GTG) in the beta-globin gene resulting in a glutamic acid to valine substitution at position 6. This causes HbS to polymerize under low-oxygen conditions, producing sickle-shaped red cells. Howell-Jolly bodies indicate functional asplenia from repeated splenic infarction.",
      optionExplanations: ["Incorrect: Deletion of all four alpha-globin genes causes hydrops fetalis (Hb Bart's), which is incompatible with life.", "Correct: The Glu→Val substitution at position 6 of beta-globin causes HbS polymerization and sickling.", "Incorrect: Spectrin deficiency causes hereditary spherocytosis, not sickle cell disease.", "Incorrect: Absent beta-globin production causes beta-thalassemia major, which presents with target cells and microcytosis, not sickling.", "Incorrect: Ankyrin mutations cause hereditary spherocytosis with osmotic fragility, not vaso-occlusive crises."],
      highYieldPoint: "Sickle cell disease: Glu→Val at β-globin position 6. HbS polymerizes when deoxygenated. Howell-Jolly bodies = functional asplenia."
    },
    {
      vignette: "A 22-year-old woman of Mediterranean descent presents for evaluation of mild anemia found on routine labs. She is asymptomatic. Hemoglobin is 10.8 g/dL, MCV 64 fL, RDW 13.5% (normal). Peripheral smear shows target cells and microcytic hypochromic red cells. Hemoglobin electrophoresis reveals HbA2 of 5.8% (normal <3.5%).",
      question: "Which of the following genetic alterations most likely accounts for these findings?",
      options: ["Deletion of one alpha-globin gene", "Deletion of three alpha-globin genes", "Point mutation leading to reduced beta-globin chain synthesis", "Trinucleotide repeat expansion in the beta-globin locus control region", "Complete absence of delta-globin gene expression"],
      correctIndex: 2,
      explanation: "Beta-thalassemia trait (minor) results from a point mutation causing reduced (β+) or absent (β0) production of one beta-globin allele. Excess alpha chains pair with delta chains, elevating HbA2. The normal RDW and target cells with microcytosis distinguish this from iron deficiency.",
      optionExplanations: ["Incorrect: Deletion of one alpha-globin gene is a silent carrier state with no anemia or microcytosis.", "Incorrect: Deletion of three alpha-globin genes causes HbH disease with moderate hemolytic anemia and HbH inclusions.", "Correct: Reduced beta-globin synthesis causes relative alpha-chain excess, driving increased delta-chain pairing and elevated HbA2.", "Incorrect: Trinucleotide repeat expansions are not a mechanism in thalassemia; they cause diseases like Huntington and fragile X.", "Incorrect: Loss of delta-globin would lower HbA2, not raise it."],
      highYieldPoint: "Beta-thalassemia trait: microcytic anemia, normal RDW, target cells, ↑HbA2 (>3.5%). Distinguished from iron deficiency by normal RDW and normal/↑ferritin."
    },
    {
      vignette: "A 16-year-old boy presents with jaundice, splenomegaly, and a family history of cholecystectomy at a young age. Laboratory studies show hemoglobin 10.5 g/dL, reticulocyte count 8%, elevated indirect bilirubin, and low haptoglobin. Peripheral smear shows numerous spherocytes. Osmotic fragility test is positive.",
      question: "Which of the following is the most likely underlying defect in this patient?",
      options: ["Deficiency of glucose-6-phosphate dehydrogenase", "Antibodies directed against red blood cell surface antigens", "Abnormal hemoglobin polymerization under hypoxic conditions", "Mutations in spectrin or ankyrin leading to loss of membrane surface area", "Deficiency of pyruvate kinase in erythrocytes"],
      correctIndex: 3,
      explanation: "Hereditary spherocytosis is most commonly caused by mutations in spectrin, ankyrin, band 3, or protein 4.2 that compromise the red cell cytoskeleton. Loss of membrane surface area converts biconcave discs to spherocytes, which are trapped and destroyed in the spleen. Family history of cholecystectomy suggests pigment gallstones from chronic hemolysis.",
      optionExplanations: ["Incorrect: G6PD deficiency causes episodic hemolysis with bite cells and Heinz bodies, not spherocytes.", "Incorrect: Autoimmune hemolytic anemia can produce spherocytes but would have a positive direct Coombs test and typically lacks the autosomal dominant family history pattern.", "Incorrect: HbS polymerization causes sickle cell disease with sickled erythrocytes, not spherocytes.", "Correct: Defective cytoskeletal proteins (spectrin/ankyrin) cause hereditary spherocytosis with osmotic fragility and extravascular hemolysis in the spleen.", "Incorrect: Pyruvate kinase deficiency causes chronic hemolysis but typically shows echinocytes (burr cells), not spherocytes."],
      highYieldPoint: "Hereditary spherocytosis: spectrin/ankyrin defect → spherocytes, ⊕osmotic fragility, splenomegaly, pigment gallstones. Autosomal dominant."
    },
    {
      vignette: "A 32-year-old African American man develops dark urine and jaundice 2 days after starting trimethoprim-sulfamethoxazole for a urinary tract infection. He has no prior history of anemia. Hemoglobin is 8.1 g/dL (previously 14.2 g/dL). Peripheral smear shows bite cells and Heinz bodies on supravital staining. Direct Coombs test is negative.",
      question: "Which of the following best explains the pathophysiology of this patient's hemolytic episode?",
      options: ["Complement-mediated intravascular lysis due to a membrane protein defect", "Mechanical shearing of red cells in damaged microvasculature", "Immune complex deposition on red cell surfaces", "Antibody-mediated extravascular hemolysis in the spleen", "Inability to regenerate reduced glutathione, leading to oxidative damage of hemoglobin"],
      correctIndex: 4,
      explanation: "Glucose-6-phosphate dehydrogenase (G6PD) deficiency impairs the hexose monophosphate shunt, which is necessary to generate NADPH. Without NADPH, glutathione cannot be maintained in its reduced form, leaving hemoglobin vulnerable to oxidative stress from drugs like sulfonamides. Oxidized hemoglobin precipitates as Heinz bodies, and splenic macrophages remove these inclusions, creating bite cells.",
      optionExplanations: ["Incorrect: Complement-mediated lysis due to membrane defects describes paroxysmal nocturnal hemoglobinuria (PNH), not G6PD deficiency.", "Incorrect: Mechanical shearing occurs in microangiopathic hemolytic anemias (TTP, HUS, DIC) and produces schistocytes.", "Incorrect: Immune complex deposition is a mechanism in type III hypersensitivity, not in G6PD deficiency.", "Incorrect: Antibody-mediated extravascular hemolysis is the mechanism in warm autoimmune hemolytic anemia, which would show a positive Coombs test.", "Correct: G6PD deficiency → ↓NADPH → ↓reduced glutathione → oxidative damage to hemoglobin → Heinz bodies and bite cells."],
      highYieldPoint: "G6PD deficiency: X-linked, triggered by oxidant stress (sulfonamides, fava beans, infections). Heinz bodies + bite cells. ↓NADPH → ↓reduced glutathione."
    },
    {
      vignette: "A 55-year-old woman with systemic lupus erythematosus presents with fatigue and progressive pallor. Hemoglobin is 7.8 g/dL, reticulocyte count 9%, and haptoglobin is undetectable. Peripheral smear shows spherocytes and polychromasia. Direct Coombs test is positive for IgG antibodies on the red cell surface.",
      question: "Where does the primary destruction of red blood cells occur in this patient?",
      options: ["In the spleen through Fc receptor-mediated phagocytosis by macrophages", "Within the intravascular space via the membrane attack complex", "In the bone marrow through ineffective erythropoiesis", "In the liver through direct hepatocyte-mediated cytotoxicity", "In the peripheral blood through mechanical fragmentation"],
      correctIndex: 0,
      explanation: "Warm autoimmune hemolytic anemia (warm AIHA) is mediated by IgG autoantibodies that opsonize red blood cells. The IgG-coated RBCs are recognized by Fc receptors (FcγR) on splenic macrophages, leading to partial or complete phagocytosis (extravascular hemolysis). Partial phagocytosis removes membrane, producing spherocytes. Warm AIHA is associated with SLE, CLL, and medications like methyldopa.",
      optionExplanations: ["Correct: In warm AIHA, IgG-coated red cells are primarily destroyed in the spleen via Fc receptor-mediated phagocytosis by splenic macrophages.", "Incorrect: Intravascular lysis via the membrane attack complex is the primary mechanism in cold AIHA (IgM/complement-mediated) and PNH, not warm AIHA.", "Incorrect: Ineffective erythropoiesis occurs in megaloblastic anemias and myelodysplastic syndromes, not in AIHA.", "Incorrect: The liver plays a secondary role; splenic macrophage phagocytosis is the predominant site of destruction in warm AIHA.", "Incorrect: Mechanical fragmentation occurs in microangiopathic hemolytic anemias, not in antibody-mediated hemolysis."],
      highYieldPoint: "Warm AIHA: IgG antibodies → extravascular hemolysis in spleen → spherocytes + ⊕direct Coombs (IgG). Associated with SLE and CLL."
    },
    {
      vignette: "A 68-year-old man with a history of gastric bypass surgery presents with numbness and tingling in his feet, unsteady gait, and progressive fatigue over 6 months. Neurological exam reveals decreased proprioception and vibratory sense bilaterally. CBC shows hemoglobin 9.2 g/dL, MCV 112 fL. Peripheral smear shows macro-ovalocytes and hypersegmented neutrophils.",
      question: "Which of the following laboratory findings would best confirm the suspected vitamin deficiency?",
      options: ["Elevated serum ferritin", "Elevated serum methylmalonic acid and homocysteine levels", "Decreased serum haptoglobin with elevated LDH", "Elevated hemoglobin A2 on electrophoresis", "Positive Ham test"],
      correctIndex: 1,
      explanation: "This patient has vitamin B12 (cobalamin) deficiency following gastric bypass, which removes the site of intrinsic factor production. B12 deficiency causes both megaloblastic anemia and subacute combined degeneration of the spinal cord (posterior columns and lateral corticospinal tracts). Elevated methylmalonic acid and homocysteine are specific for B12 deficiency, distinguishing it from folate deficiency (which elevates homocysteine only).",
      optionExplanations: ["Incorrect: Elevated ferritin would suggest iron overload or inflammation, not B12 deficiency.", "Correct: B12 deficiency uniquely elevates both methylmalonic acid (from impaired methylmalonyl-CoA mutase) and homocysteine (from impaired methionine synthase).", "Incorrect: Low haptoglobin and elevated LDH indicate hemolysis but do not specifically confirm B12 deficiency.", "Incorrect: Elevated HbA2 indicates beta-thalassemia trait, not a vitamin deficiency.", "Incorrect: A positive Ham test (acidified serum lysis test) would suggest paroxysmal nocturnal hemoglobinuria."],
      highYieldPoint: "B12 deficiency: ↑methylmalonic acid + ↑homocysteine. Folate deficiency: ↑homocysteine only. B12 causes neuro symptoms; folate does not."
    },
    {
      vignette: "A 45-year-old woman presents with glossitis, fatigue, and paresthesias. She has a history of vitiligo and hypothyroidism. Laboratory studies show macrocytic anemia with hypersegmented neutrophils. Anti-intrinsic factor antibodies are detected in her serum. Schilling test (historical) would show corrected B12 absorption with exogenous intrinsic factor.",
      question: "Which of the following cells is the primary target of autoimmune destruction in this patient's condition?",
      options: ["Chief cells of the gastric fundus", "Goblet cells of the small intestine", "Parietal cells of the gastric body and fundus", "Enterochromaffin-like cells of the gastric antrum", "Paneth cells of the intestinal crypts"],
      correctIndex: 2,
      explanation: "Pernicious anemia is an autoimmune condition in which antibodies target parietal cells and/or intrinsic factor. Parietal cells in the gastric body and fundus produce intrinsic factor, which is essential for B12 absorption in the terminal ileum. Destruction of parietal cells leads to achlorhydria and intrinsic factor deficiency. It is associated with other autoimmune conditions (vitiligo, hypothyroidism).",
      optionExplanations: ["Incorrect: Chief cells produce pepsinogen and are not the primary autoimmune target in pernicious anemia.", "Incorrect: Goblet cells secrete mucus in the intestine and are not targeted in pernicious anemia.", "Correct: Autoimmune destruction of gastric parietal cells eliminates intrinsic factor production, causing B12 malabsorption.", "Incorrect: Enterochromaffin-like cells produce histamine and are involved in acid secretion regulation but are not the primary target.", "Incorrect: Paneth cells secrete defensins and lysozyme in the small intestinal crypts and are unrelated to pernicious anemia."],
      highYieldPoint: "Pernicious anemia: autoimmune destruction of parietal cells → ↓intrinsic factor → B12 malabsorption. Associated with other autoimmune diseases. ↑gastric cancer risk."
    },
    {
      vignette: "A 5-year-old boy is brought to the pediatrician because of pica and irritability. His family lives in an older home with peeling paint. Examination reveals a bluish discoloration along the gingival margins. CBC shows hemoglobin 9.8 g/dL, MCV 72 fL. Peripheral smear shows basophilic stippling of erythrocytes. Free erythrocyte protoporphyrin is elevated.",
      question: "Which of the following enzymes is most directly inhibited by the toxic exposure causing this child's anemia?",
      options: ["Uroporphyrinogen decarboxylase", "Porphobilinogen deaminase", "Aminolevulinic acid synthase", "Ferrochelatase and ALA dehydratase", "HMG-CoA reductase"],
      correctIndex: 3,
      explanation: "Lead poisoning inhibits two key enzymes in the heme synthesis pathway: delta-aminolevulinic acid dehydratase (ALA dehydratase, also called porphobilinogen synthase) and ferrochelatase (which inserts iron into protoporphyrin IX). This leads to accumulation of ALA and protoporphyrin, basophilic stippling from precipitated ribosomes, and sideroblastic anemia.",
      optionExplanations: ["Incorrect: Uroporphyrinogen decarboxylase deficiency causes porphyria cutanea tarda, not lead poisoning.", "Incorrect: Porphobilinogen deaminase deficiency causes acute intermittent porphyria.", "Incorrect: ALA synthase is the rate-limiting enzyme of heme synthesis; it is not inhibited by lead (it is actually upregulated due to loss of heme feedback).", "Correct: Lead inhibits ALA dehydratase and ferrochelatase, causing accumulation of ALA and protoporphyrin, with basophilic stippling and microcytic anemia.", "Incorrect: HMG-CoA reductase is the rate-limiting enzyme of cholesterol synthesis and is unrelated to heme production."],
      highYieldPoint: "Lead poisoning inhibits ALA dehydratase + ferrochelatase → basophilic stippling, ↑FEP, ↑ALA in urine. Also causes lead lines on gums and long bones."
    },
    {
      vignette: "A 60-year-old man with rheumatoid arthritis maintained on methotrexate and chronic NSAID use presents with fatigue. Hemoglobin is 9.5 g/dL, MCV 80 fL, serum iron 35 μg/dL (low), TIBC 200 μg/dL (low), ferritin 280 ng/mL (elevated), and transferrin saturation 18%. Erythropoietin level is inappropriately low for his degree of anemia.",
      question: "Which of the following cytokines plays the most important role in the pathogenesis of this patient's anemia by increasing hepatic hepcidin production?",
      options: ["Interferon-gamma", "Tumor necrosis factor-alpha", "Interleukin-4", "Interleukin-2", "Interleukin-6"],
      correctIndex: 4,
      explanation: "This patient has anemia of chronic disease (ACD), characterized by low serum iron, low TIBC, and elevated ferritin. IL-6 is the principal cytokine driving hepatic hepcidin production in chronic inflammatory states. Hepcidin degrades ferroportin on enterocytes and macrophages, trapping iron intracellularly and reducing serum iron availability for erythropoiesis.",
      optionExplanations: ["Incorrect: IFN-gamma contributes to macrophage activation but is not the primary driver of hepcidin synthesis.", "Incorrect: TNF-alpha contributes to inflammation and can suppress erythropoiesis but is not the main inducer of hepcidin.", "Incorrect: IL-4 is a Th2 cytokine involved in B-cell class switching and is not a major driver of hepcidin.", "Incorrect: IL-2 is primarily a T-cell growth factor produced by activated Th1 cells and does not significantly induce hepcidin.", "Correct: IL-6 is the primary cytokine that induces hepcidin production via the JAK-STAT3 pathway in hepatocytes, causing iron sequestration in anemia of chronic disease."],
      highYieldPoint: "Anemia of chronic disease: IL-6 → ↑hepcidin → ferroportin degradation → iron trapped in macrophages. ↓serum iron, ↓TIBC, ↑ferritin."
    },
    {
      vignette: "A 25-year-old woman presents with fatigue, petechiae, and recurrent epistaxis over the past 3 weeks. She reports no prior medical history or medication use. CBC shows pancytopenia: hemoglobin 7.1 g/dL, WBC 1,800/μL, platelets 18,000/μL. Reticulocyte count is 0.2%. Bone marrow biopsy reveals hypocellular marrow with fat replacement and no abnormal infiltrate.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Aplastic anemia", "Myelodysplastic syndrome", "Acute myeloid leukemia", "Megaloblastic anemia", "Myelofibrosis"],
      correctIndex: 0,
      explanation: "Aplastic anemia presents with pancytopenia and a hypocellular (fatty) bone marrow with markedly reduced hematopoietic cells. It can be idiopathic or caused by drugs (chloramphenicol, carbamazepine, sulfonamides), viruses (parvovirus B19, EBV, hepatitis), radiation, or autoimmune destruction of stem cells. The very low reticulocyte count reflects marrow failure.",
      optionExplanations: ["Correct: Pancytopenia with hypocellular, fat-replaced marrow and no infiltrate is classic for aplastic anemia.", "Incorrect: MDS typically shows a hypercellular marrow with dysplastic changes, not a hypocellular fatty marrow.", "Incorrect: AML would show a hypercellular marrow with blast infiltration (>20% blasts).", "Incorrect: Megaloblastic anemia would show macrocytosis (high MCV) and a hypercellular marrow with megaloblastic changes.", "Incorrect: Myelofibrosis shows a fibrotic marrow with a leukoerythroblastic smear (teardrop cells, nucleated RBCs, immature WBCs)."],
      highYieldPoint: "Aplastic anemia: pancytopenia + hypocellular/fatty marrow + low reticulocytes. Causes: idiopathic, drugs, viruses, radiation, Fanconi anemia."
    },
    {
      vignette: "A 34-year-old pregnant woman at 28 weeks gestation presents for routine labs. Hemoglobin is 10.2 g/dL, MCV 74 fL. Iron studies show normal ferritin, normal serum iron, and normal TIBC. Hemoglobin electrophoresis shows HbA 95%, HbA2 1.8%, and HbF 2%. Her partner is of Southeast Asian descent.",
      question: "Which of the following best explains the genetic basis of this patient's microcytic anemia?",
      options: ["Homozygous deletion of alpha-globin genes on the same chromosome", "Deletion of two alpha-globin genes (alpha-thalassemia trait)", "Point mutation in the beta-globin promoter region", "Missense mutation in the delta-globin gene", "Deletion of a single alpha-globin gene"],
      correctIndex: 1,
      explanation: "This patient has alpha-thalassemia trait (two-gene deletion) with microcytic anemia, normal ferritin (ruling out iron deficiency), and notably normal HbA2 (ruling out beta-thalassemia trait). In Southeast Asian populations, two-gene deletion often occurs in cis (both on the same chromosome: --/αα), while in African populations it occurs in trans (one deletion per chromosome: -α/-α). Either configuration produces alpha-thalassemia trait with mild microcytic anemia.",
      optionExplanations: ["Incorrect: Homozygous deletion of alpha genes on the same chromosome describes the cis configuration of 2-gene deletion, but this option implies 4-gene deletion which would cause hydrops fetalis.", "Correct: Two alpha-gene deletions produce alpha-thalassemia trait with mild microcytic anemia and characteristically normal HbA2 and normal ferritin.", "Incorrect: Beta-globin promoter mutations cause beta-thalassemia with elevated HbA2, which is not seen here.", "Incorrect: Delta-globin gene mutations would lower HbA2 but would not cause microcytic anemia.", "Incorrect: A single alpha-globin gene deletion is a silent carrier state with no anemia or microcytosis."],
      highYieldPoint: "Alpha-thalassemia trait (2-gene deletion): microcytic anemia with normal HbA2 and normal iron studies. Cis (--/αα) in Asians; trans (-α/-α) in Africans."
    },
    {
      vignette: "A 50-year-old man with a history of chronic alcoholism presents with fatigue and dyspnea. MCV is 105 fL, hemoglobin 9.0 g/dL. Peripheral smear shows ring sideroblasts on Prussian blue stain. Serum iron is elevated, and transferrin saturation is 55%.",
      question: "Which of the following is the most likely cause of the ring sideroblasts seen in this patient?",
      options: ["Autoimmune destruction of erythroid precursors", "Increased hepcidin-mediated iron sequestration", "Defective protoporphyrin synthesis in mitochondria due to impaired ALA synthase activity", "Absent beta-globin chain production", "Impaired DNA synthesis from folate deficiency"],
      correctIndex: 2,
      explanation: "Sideroblastic anemia is characterized by ring sideroblasts — erythroblasts with iron-laden mitochondria forming a perinuclear ring visible on Prussian blue stain. In alcoholics, the most common cause is acquired disruption of ALA synthase (which requires pyridoxal phosphate/B6 as a cofactor). Alcohol impairs B6 metabolism, reducing ALA synthase activity and trapping iron in mitochondria. Isoniazid can cause a similar picture.",
      optionExplanations: ["Incorrect: Autoimmune destruction of erythroid precursors causes pure red cell aplasia, not sideroblastic anemia.", "Incorrect: Hepcidin-mediated iron sequestration causes anemia of chronic disease with low serum iron, not iron-loaded sideroblasts.", "Correct: Defective ALA synthase (or B6 deficiency from alcohol) impairs heme synthesis, trapping iron in mitochondria as ring sideroblasts.", "Incorrect: Absent beta-globin production causes beta-thalassemia major with target cells, not ring sideroblasts.", "Incorrect: Folate deficiency causes megaloblastic anemia with macro-ovalocytes and hypersegmented neutrophils, not sideroblastic anemia."],
      highYieldPoint: "Sideroblastic anemia: ring sideroblasts (iron-laden mitochondria), ↑iron, ↑ferritin. Causes: alcohol, lead, isoniazid, B6 deficiency, MDS. Tx: pyridoxine (B6)."
    },
    {
      vignette: "A 38-year-old man presents with episodic dark red-brown urine in the early morning, progressive fatigue, and abdominal pain. CBC shows hemoglobin 8.5 g/dL with reticulocyte count of 7%. Flow cytometry of peripheral blood reveals absence of CD55 and CD59 on red cells, granulocytes, and monocytes. He is also found to have a portal vein thrombosis on imaging.",
      question: "Which of the following molecular defects best accounts for the clinical findings in this patient?",
      options: ["Germline mutation in the HBB gene encoding beta-globin", "Autoantibodies against complement regulatory proteins on the RBC surface", "Point mutation in JAK2 causing constitutive kinase activity", "Somatic mutation in the PIGA gene impairing GPI-anchor synthesis", "Inherited deficiency of complement component C3"],
      correctIndex: 3,
      explanation: "Paroxysmal nocturnal hemoglobinuria (PNH) is caused by a somatic mutation in the PIGA gene in a hematopoietic stem cell. PIGA is required for synthesis of the glycosylphosphatidylinositol (GPI) anchor, which attaches complement-regulatory proteins CD55 (decay-accelerating factor) and CD59 (membrane inhibitor of reactive lysis) to cell surfaces. Without these, red cells are susceptible to complement-mediated intravascular hemolysis. PNH is associated with thrombosis (especially hepatic/portal veins — Budd-Chiari syndrome) and may progress to aplastic anemia or AML.",
      optionExplanations: ["Incorrect: HBB gene mutations cause sickle cell disease or beta-thalassemia, not complement-mediated hemolysis.", "Incorrect: PNH is not caused by autoantibodies; it results from a somatic mutation in hematopoietic stem cells.", "Incorrect: JAK2 V617F mutation is found in polycythemia vera and other myeloproliferative neoplasms, not PNH.", "Correct: The PIGA gene mutation eliminates GPI-anchor synthesis, causing absence of CD55 and CD59 on cell surfaces, leading to unregulated complement-mediated hemolysis and thrombosis.", "Incorrect: C3 deficiency causes recurrent pyogenic infections due to impaired opsonization, not hemolytic anemia."],
      highYieldPoint: "PNH: PIGA mutation → absent GPI anchor → no CD55/CD59 → complement-mediated hemolysis, hemoglobinuria, thrombosis. Dx: flow cytometry."
    },
    {
      vignette: "A 30-year-old woman presents with fatigue, jaundice, and dark urine after a recent upper respiratory tract infection. She has painful, bluish discoloration of her fingers in cold weather. Laboratory studies show hemoglobin 8.8 g/dL, elevated indirect bilirubin, elevated LDH, and low haptoglobin. Direct Coombs test is positive for C3d complement on the red cell surface but negative for IgG.",
      question: "Which of the following antibody types is most likely responsible for this patient's hemolysis?",
      options: ["IgA antibodies binding at body temperature", "IgE antibodies causing mast cell degranulation on red cell surfaces", "IgG antibodies with activity optimal at 37°C", "IgD antibodies cross-reacting with red cell antigens", "IgM antibodies that bind red cells at low temperatures and activate complement"],
      correctIndex: 4,
      explanation: "This patient has cold agglutinin disease (cold AIHA), characterized by IgM autoantibodies that bind red cells optimally at low temperatures (0–4°C). IgM activates the classical complement pathway, depositing C3b/C3d on red cells (explaining positive Coombs for complement/C3d but negative for IgG). IgM detaches at body temperature, so only complement remains. Red cells coated with C3b are destroyed by hepatic macrophages (extravascular) or by forming the membrane attack complex (intravascular).",
      optionExplanations: ["Incorrect: IgA antibodies are not typically involved in AIHA.", "Incorrect: IgE mediates type I hypersensitivity reactions (anaphylaxis, allergic rhinitis), not hemolytic anemia.", "Incorrect: IgG antibodies acting at 37°C characterize warm AIHA, which would show a positive Coombs test for IgG, not C3d alone.", "Incorrect: IgD is found on the surface of mature naive B cells as a co-receptor and does not cause hemolytic anemia.", "Correct: Cold agglutinin disease is caused by IgM autoantibodies that bind RBCs at cold temperatures, activate complement (C3d), and cause hemolysis. Associated with Mycoplasma pneumoniae and EBV infections."],
      highYieldPoint: "Cold AIHA: IgM antibodies (cold agglutinins) → complement fixation → Coombs ⊕ for C3d, ⊖ for IgG. Associated with Mycoplasma, EBV, lymphoma."
    }
  ],

  "WBC disorders": [
    {
      vignette: "A 4-year-old boy is brought to the pediatrician with a 2-week history of fatigue, fever, easy bruising, and bone pain. Physical examination reveals cervical lymphadenopathy, hepatosplenomegaly, and petechiae. CBC shows WBC 45,000/μL with 80% blasts, hemoglobin 6.8 g/dL, and platelets 22,000/μL. Flow cytometry shows blasts positive for CD10, CD19, and TdT.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["B-cell acute lymphoblastic leukemia (B-ALL)", "Acute myeloid leukemia (AML)", "Chronic myeloid leukemia (CML)", "Burkitt lymphoma/leukemia", "T-cell acute lymphoblastic leukemia (T-ALL)"],
      correctIndex: 0,
      explanation: "This presentation is classic for B-ALL, the most common childhood malignancy. Key features include lymphadenopathy, hepatosplenomegaly, bone pain (from marrow expansion), and pancytopenia with circulating blasts. The immunophenotype — CD10 (CALLA), CD19 (B-cell marker), and TdT (marker of immature lymphoid cells) — confirms B-ALL. Peak incidence is age 2–5 years.",
      optionExplanations: ["Correct: CD10+, CD19+, TdT+ blasts in a child with lymphadenopathy and pancytopenia is classic B-ALL.", "Incorrect: AML blasts would be positive for myeloid markers (CD13, CD33, MPO) and may show Auer rods.", "Incorrect: CML presents with massive splenomegaly, leukocytosis with mature granulocytes at all stages, and the Philadelphia chromosome; it is rare in children.", "Incorrect: Burkitt lymphoma/leukemia shows mature B-cell markers (surface IgM, CD20) and is TdT-negative.", "Incorrect: T-ALL blasts express CD2, CD3, CD5, CD7 and typically present with a mediastinal (thymic) mass, not CD19."],
      highYieldPoint: "B-ALL: most common childhood cancer, peak 2–5 years. CD10 (CALLA)+, CD19+, TdT+. Best prognosis with t(12;21) and hyperdiploidy."
    },
    {
      vignette: "A 62-year-old man presents with fatigue, gingival hypertrophy, and scattered ecchymoses. CBC shows WBC 32,000/μL with 55% blasts, hemoglobin 7.5 g/dL, and platelets 35,000/μL. Peripheral smear shows large blasts with abundant cytoplasm containing numerous rod-shaped, azurophilic granular inclusions arranged in bundles. The blasts are positive for myeloperoxidase (MPO).",
      question: "Which of the following cytogenetic abnormalities is most strongly associated with this patient's specific subtype, and if present, would significantly improve prognosis with targeted therapy?",
      options: ["t(9;22) — BCR-ABL1 fusion", "t(15;17) — PML-RARA fusion", "t(8;14) — MYC-IGH fusion", "t(14;18) — BCL2-IGH fusion", "t(11;14) — CCND1-IGH fusion"],
      correctIndex: 1,
      explanation: "The finding of Auer rods (rod-shaped azurophilic inclusions composed of fused primary granules) in MPO-positive blasts with gingival hypertrophy is consistent with acute myeloid leukemia (AML). The specific subtype most associated with numerous Auer rods (particularly bundles called 'faggot cells') is acute promyelocytic leukemia (APL, formerly M3), which carries the t(15;17) translocation creating the PML-RARA fusion. This responds dramatically to all-trans retinoic acid (ATRA) and arsenic trioxide.",
      optionExplanations: ["Incorrect: t(9;22) produces the BCR-ABL1 fusion seen in CML and Ph+ ALL; imatinib is the targeted therapy.", "Correct: t(15;17) PML-RARA fusion defines APL (AML-M3), characterized by Auer rods and treated with ATRA + arsenic trioxide, giving an excellent prognosis.", "Incorrect: t(8;14) causes MYC overexpression and is the hallmark of Burkitt lymphoma.", "Incorrect: t(14;18) overexpresses BCL2 and is characteristic of follicular lymphoma.", "Incorrect: t(11;14) overexpresses cyclin D1 and defines mantle cell lymphoma."],
      highYieldPoint: "APL (AML-M3): t(15;17) PML-RARA, Auer rods/faggot cells, DIC risk. Treated with ATRA (differentiates promyelocytes) + arsenic trioxide."
    },
    {
      vignette: "A 52-year-old man presents with early satiety and a dragging sensation in his left abdomen. Physical examination reveals massive splenomegaly extending to the pelvic brim. CBC shows WBC 185,000/μL with a left-shifted differential showing all stages of myeloid maturation including myelocytes, metamyelocytes, bands, and segmented neutrophils. Basophils are elevated at 5%. Bone marrow biopsy shows marked hypercellularity. Cytogenetic analysis reveals a t(9;22) translocation.",
      question: "Which of the following molecular mechanisms best explains the pathogenesis of this patient's disease?",
      options: ["Loss of tumor suppressor RB1 leading to unchecked cell cycle progression", "Epigenetic silencing of the p16/INK4a locus blocking cell senescence", "Constitutive activation of BCR-ABL1 tyrosine kinase leading to unregulated myeloid proliferation", "Overexpression of an anti-apoptotic protein preventing programmed cell death", "Activating mutation in the FLT3 receptor increasing blast proliferation"],
      correctIndex: 2,
      explanation: "The t(9;22) Philadelphia chromosome produces the BCR-ABL1 fusion gene, which encodes a constitutively active tyrosine kinase. This drives unregulated proliferation of myeloid cells without maturation arrest, producing the characteristic leukocytosis with all stages of myeloid differentiation. CML has three phases: chronic, accelerated, and blast crisis. Imatinib (a tyrosine kinase inhibitor) specifically targets BCR-ABL1.",
      optionExplanations: ["Incorrect: RB1 loss is associated with retinoblastoma and other solid tumors, not CML.", "Incorrect: p16/INK4a silencing occurs in various cancers but is not the defining mechanism of CML.", "Correct: The BCR-ABL1 fusion protein is a constitutively active tyrosine kinase that drives myeloid proliferation in CML. Tx: imatinib.", "Incorrect: BCL2 overexpression (anti-apoptotic) is the mechanism in follicular lymphoma via t(14;18), not CML.", "Incorrect: FLT3 internal tandem duplications are found in AML and confer a poor prognosis but are not related to the Philadelphia chromosome."],
      highYieldPoint: "CML: t(9;22) BCR-ABL1 constitutive tyrosine kinase. Massive splenomegaly, ↑basophils, all stages of myeloid maturation. Tx: imatinib (TKI)."
    },
    {
      vignette: "A 72-year-old man is found to have an absolute lymphocyte count of 28,000/μL on routine blood work. He is asymptomatic. Peripheral smear shows small, mature-appearing lymphocytes and numerous smudge cells. Flow cytometry reveals CD5+, CD19+, CD20 dim, CD23+ lymphocytes. Serum protein electrophoresis is normal.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Mantle cell lymphoma", "Hairy cell leukemia", "Marginal zone lymphoma", "Chronic lymphocytic leukemia (CLL)", "Waldenström macroglobulinemia"],
      correctIndex: 3,
      explanation: "CLL is the most common leukemia in adults in the Western world, typically presenting in elderly patients with asymptomatic lymphocytosis. The hallmarks are mature-appearing small lymphocytes with smudge cells (fragile lymphocytes crushed during smear preparation) and a characteristic immunophenotype: CD5+, CD19+, CD20 (dim), CD23+. CLL may be associated with warm AIHA and hypogammaglobulinemia. Richter transformation to diffuse large B-cell lymphoma is a feared complication.",
      optionExplanations: ["Incorrect: Mantle cell lymphoma is CD5+ and CD19+ but CD23-negative and cyclin D1+, distinguishing it from CLL.", "Incorrect: Hairy cell leukemia shows cells with cytoplasmic projections positive for TRAP (tartrate-resistant acid phosphatase) and typically presents with pancytopenia and splenomegaly.", "Incorrect: Marginal zone lymphoma is CD5-negative and CD23-negative.", "Correct: CLL presents with mature lymphocytosis, smudge cells, and CD5+/CD19+/CD20dim/CD23+ immunophenotype.", "Incorrect: Waldenström macroglobulinemia (lymphoplasmacytic lymphoma) shows an IgM monoclonal spike and does not express CD5."],
      highYieldPoint: "CLL: most common adult leukemia, elderly patients, smudge cells, CD5+/CD19+/CD20dim/CD23+. Complications: warm AIHA, Richter transformation."
    },
    {
      vignette: "A 24-year-old woman presents with a painless, rubbery left supraclavicular lymph node that has been enlarging for 2 months. She also reports drenching night sweats and unintentional 8 kg weight loss. Biopsy of the lymph node reveals scattered large, binucleated cells with prominent eosinophilic nucleoli resembling 'owl eyes,' surrounded by a background of lymphocytes, eosinophils, plasma cells, and fibrosis.",
      question: "Which of the following cell surface markers would most likely be expressed by the neoplastic cells in this biopsy?",
      options: ["CD3 and CD7", "CD10 and BCL6", "CD20 and PAX5", "CD56 and granzyme B", "CD15 and CD30"],
      correctIndex: 4,
      explanation: "The binucleated 'owl-eye' cells are Reed-Sternberg cells, the pathognomonic finding of classic Hodgkin lymphoma. Reed-Sternberg cells are derived from B cells but have lost most B-cell markers. They characteristically express CD15 and CD30 but are negative for CD45 (LCA) and typically negative for CD20. The mixed inflammatory background is a hallmark. The B symptoms (night sweats, weight loss, fever) and contiguous lymph node spread are classic features.",
      optionExplanations: ["Incorrect: CD3 and CD7 are T-cell markers, not expressed by Reed-Sternberg cells.", "Incorrect: CD10 and BCL6 are germinal center B-cell markers seen in follicular lymphoma and Burkitt lymphoma.", "Incorrect: CD20 and PAX5 are B-cell markers; Reed-Sternberg cells are classically CD20-negative (though PAX5 may be weakly positive).", "Incorrect: CD56 and granzyme B are NK/T-cell markers associated with aggressive NK/T-cell lymphomas.", "Correct: Reed-Sternberg cells of classic Hodgkin lymphoma express CD15 and CD30, but are CD20-negative and CD45-negative."],
      highYieldPoint: "Hodgkin lymphoma: Reed-Sternberg cells (owl-eye), CD15+/CD30+, CD20−/CD45−. Bimodal age, contiguous spread, B symptoms. EBV-associated."
    },
    {
      vignette: "A 7-year-old boy from equatorial Africa presents with a rapidly enlarging mass involving the mandible. Biopsy shows sheets of medium-sized lymphoid cells with a very high mitotic rate and interspersed tingible-body macrophages creating a 'starry-sky' pattern. Cytogenetic analysis reveals a t(8;14) translocation.",
      question: "Which of the following oncogenes is most directly activated by the translocation identified in this patient's tumor?",
      options: ["MYC", "BCL2", "RAS", "CCND1 (Cyclin D1)", "RET"],
      correctIndex: 0,
      explanation: "Burkitt lymphoma is an aggressive B-cell non-Hodgkin lymphoma with three clinical forms: endemic (jaw involvement, EBV-associated, equatorial Africa), sporadic (abdominal/ileocecal), and immunodeficiency-associated (HIV). The t(8;14) translocation places the MYC proto-oncogene (chromosome 8) under the control of the immunoglobulin heavy chain promoter (chromosome 14), causing MYC overexpression and extremely rapid cell proliferation.",
      optionExplanations: ["Correct: t(8;14) juxtaposes MYC to the IgH enhancer, causing constitutive MYC overexpression and rapid proliferation.", "Incorrect: BCL2 overexpression via t(14;18) is characteristic of follicular lymphoma, preventing apoptosis.", "Incorrect: RAS mutations are found in various carcinomas and some leukemias but are not the defining translocation in Burkitt.", "Incorrect: Cyclin D1 overexpression via t(11;14) defines mantle cell lymphoma.", "Incorrect: RET mutations are associated with MEN 2 syndromes and medullary thyroid carcinoma."],
      highYieldPoint: "Burkitt lymphoma: t(8;14) → MYC overexpression, starry-sky pattern, very high Ki-67. Endemic (jaw, EBV+), sporadic (abdomen), immunodeficiency-related."
    },
    {
      vignette: "A 58-year-old man presents with progressive, painless generalized lymphadenopathy over the past year. Biopsy shows a nodular proliferation of small cleaved lymphocytes (centrocytes) and larger cells (centroblasts) arranged in follicular structures. Immunohistochemistry shows CD10+, CD20+, BCL2+, and BCL6+ cells. Cytogenetic analysis reveals a t(14;18) translocation.",
      question: "Which of the following best describes the mechanism by which the translocation in this tumor promotes neoplastic growth?",
      options: ["Increased production of a cell cycle-promoting kinase", "Overexpression of an anti-apoptotic mitochondrial protein preventing cytochrome c release", "Constitutive activation of a receptor tyrosine kinase driving proliferation", "Enhanced telomerase activity maintaining chromosomal stability", "Inactivation of p53 allowing accumulation of DNA damage"],
      correctIndex: 1,
      explanation: "Follicular lymphoma carries the t(14;18) translocation, which places the BCL2 gene under the IgH enhancer, leading to overexpression of the BCL2 protein. BCL2 is an anti-apoptotic protein that resides on the outer mitochondrial membrane and prevents cytochrome c release, thereby blocking the intrinsic apoptosis pathway. This extends cell survival rather than increasing proliferation, accounting for the indolent clinical behavior.",
      optionExplanations: ["Incorrect: Cyclin D1, a cell cycle kinase, is overexpressed in mantle cell lymphoma, not follicular lymphoma.", "Correct: BCL2 overexpression blocks the mitochondrial apoptosis pathway by preventing cytochrome c release, promoting cell survival.", "Incorrect: Constitutive receptor tyrosine kinase activation (e.g., BCR-ABL in CML) is not the mechanism in follicular lymphoma.", "Incorrect: Enhanced telomerase activity is a general feature of many cancers but is not the primary mechanism of t(14;18).", "Incorrect: p53 inactivation can occur as a secondary event in follicular lymphoma transformation but is not the primary driver."],
      highYieldPoint: "Follicular lymphoma: t(14;18) → BCL2 overexpression → blocked apoptosis. Indolent course, painless LAD. Can transform to DLBCL."
    },
    {
      vignette: "A 70-year-old man presents with back pain, fatigue, and recurrent pneumonia. Laboratory studies show hemoglobin 9.2 g/dL, creatinine 2.8 mg/dL, and calcium 12.5 mg/dL. Serum protein electrophoresis reveals a large M-spike in the gamma region. Urine is positive for Bence Jones protein. Bone survey shows numerous lytic (punched-out) lesions in the skull and vertebrae. Bone marrow biopsy shows 45% plasma cells.",
      question: "Which of the following immunoglobulin-related proteins is most likely responsible for the renal damage in this patient?",
      options: ["IgM pentamers causing hyperviscosity and glomerular sludging", "Intact IgG molecules depositing in the glomerular basement membrane", "Free kappa or lambda light chains forming obstructive casts in renal tubules", "IgA dimers causing mesangial proliferative glomerulonephritis", "Anti-glomerular basement membrane IgG antibodies"],
      correctIndex: 2,
      explanation: "Multiple myeloma is a malignant proliferation of plasma cells producing monoclonal immunoglobulin. Renal damage (myeloma kidney) is primarily caused by free light chains (Bence Jones proteins) that form casts in the distal tubules and collecting ducts, leading to tubular obstruction and a foreign body giant cell reaction. Hypercalcemia and amyloid deposition also contribute to renal injury. The classic features are remembered as CRAB: Calcium elevation, Renal insufficiency, Anemia, Bone lesions.",
      optionExplanations: ["Incorrect: IgM pentamers causing hyperviscosity are the hallmark of Waldenström macroglobulinemia, not multiple myeloma.", "Incorrect: Intact IgG molecules are too large to be filtered and do not form tubular casts.", "Correct: Free light chains (Bence Jones proteins) are filtered by glomeruli and form obstructive casts in renal tubules, causing myeloma kidney.", "Incorrect: IgA mesangial deposition causes IgA nephropathy (Berger disease), a separate entity.", "Incorrect: Anti-GBM antibodies cause Goodpasture syndrome, not myeloma-related kidney disease."],
      highYieldPoint: "Multiple myeloma: CRAB criteria (Calcium, Renal failure, Anemia, Bone lytic lesions). M-spike, Bence Jones proteinuria, rouleaux formation. Myeloma kidney = light chain cast nephropathy."
    },
    {
      vignette: "A 65-year-old man with splenomegaly and pancytopenia undergoes peripheral blood flow cytometry. The neoplastic cells are positive for CD19, CD20, CD25, CD103, and CD11c. Tartrate-resistant acid phosphatase (TRAP) staining is strongly positive. Bone marrow biopsy shows diffuse infiltration with a 'fried egg' appearance due to abundant cytoplasm and widely spaced nuclei.",
      question: "Which of the following is the first-line treatment for this patient's condition?",
      options: ["Rituximab monotherapy", "R-CHOP chemotherapy", "Imatinib mesylate", "Cladribine (2-CdA)", "Watchful waiting"],
      correctIndex: 3,
      explanation: "This patient has hairy cell leukemia (HCL), a rare B-cell neoplasm characterized by cells with cytoplasmic 'hairy' projections, splenomegaly, pancytopenia (NOT leukocytosis), and TRAP positivity. The cells express CD25 (IL-2 receptor) and CD103 in addition to B-cell markers. Most cases have a BRAF V600E mutation. First-line treatment is cladribine (2-CdA), a purine analog that produces durable complete remissions in >80% of patients.",
      optionExplanations: ["Incorrect: Rituximab may be used as second-line therapy for HCL but is not the standard first-line treatment.", "Incorrect: R-CHOP is used for diffuse large B-cell lymphoma and other aggressive lymphomas, not HCL.", "Incorrect: Imatinib targets BCR-ABL in CML and is not used for HCL.", "Correct: Cladribine (2-chlorodeoxyadenosine) is the first-line treatment for hairy cell leukemia, producing long-lasting remissions.", "Incorrect: Watchful waiting is appropriate for early-stage CLL or indolent lymphomas but not for symptomatic HCL with pancytopenia."],
      highYieldPoint: "Hairy cell leukemia: TRAP+, CD25+, CD103+, BRAF V600E, splenomegaly + pancytopenia (dry tap). Tx: cladribine. Excellent prognosis."
    },
    {
      vignette: "A 45-year-old man presents with a rapidly growing neck mass, drenching night sweats, and 10% weight loss over 6 weeks. Biopsy shows sheets of large lymphoid cells with prominent nucleoli, high mitotic rate, and areas of necrosis. Immunohistochemistry is positive for CD20 and negative for CD10 and cyclin D1. Ki-67 proliferation index is 80%.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Follicular lymphoma grade 1", "Mantle cell lymphoma", "Small lymphocytic lymphoma", "Marginal zone lymphoma", "Diffuse large B-cell lymphoma (DLBCL)"],
      correctIndex: 4,
      explanation: "DLBCL is the most common non-Hodgkin lymphoma, accounting for approximately 30% of NHL cases. It presents as a rapidly enlarging mass with B symptoms (fever, night sweats, weight loss >10%). Histologically, it shows large cells with prominent nucleoli, high mitotic rate, and necrosis. CD20+ confirms B-cell lineage. The high Ki-67 (80%) indicates aggressive proliferation. Standard treatment is R-CHOP (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone).",
      optionExplanations: ["Incorrect: Follicular lymphoma grade 1 is indolent, composed of small cleaved cells in follicular patterns with low Ki-67.", "Incorrect: Mantle cell lymphoma would be cyclin D1-positive due to t(11;14), and cells are typically small to medium-sized.", "Incorrect: Small lymphocytic lymphoma (tissue equivalent of CLL) shows small mature lymphocytes and is indolent.", "Incorrect: Marginal zone lymphoma is indolent, often extranodal (MALToma), with small lymphocytes.", "Correct: Rapidly growing mass with large B-cells, high Ki-67, B symptoms, and CD20 positivity is classic for DLBCL."],
      highYieldPoint: "DLBCL: most common NHL, aggressive, large CD20+ cells, high Ki-67. Tx: R-CHOP. Can arise de novo or from transformation of indolent lymphoma."
    },
    {
      vignette: "A 68-year-old man presents with progressive fatigue, early satiety, and a leukoerythroblastic blood smear showing teardrop cells, nucleated red blood cells, and immature myeloid precursors. Physical exam reveals massive splenomegaly. Bone marrow biopsy shows extensive reticulin and collagen fibrosis with scattered megakaryocytes. JAK2 V617F mutation is detected.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Primary myelofibrosis", "Chronic myeloid leukemia", "Essential thrombocythemia", "Hairy cell leukemia", "Aplastic anemia"],
      correctIndex: 0,
      explanation: "Primary myelofibrosis is a myeloproliferative neoplasm characterized by progressive bone marrow fibrosis, extramedullary hematopoiesis (causing massive splenomegaly), and a leukoerythroblastic blood smear with teardrop cells (dacrocytes). The fibrosis is caused by cytokines released from neoplastic megakaryocytes, particularly TGF-beta and PDGF. Most patients carry JAK2 V617F, CALR, or MPL mutations.",
      optionExplanations: ["Correct: Massive splenomegaly, leukoerythroblastic smear with teardrop cells, marrow fibrosis, and JAK2 mutation define primary myelofibrosis.", "Incorrect: CML shows marked leukocytosis with all myeloid maturation stages and the Philadelphia chromosome t(9;22), not significant fibrosis.", "Incorrect: Essential thrombocythemia shows isolated thrombocytosis (>450,000) with megakaryocyte hyperplasia but minimal fibrosis.", "Incorrect: Hairy cell leukemia shows pancytopenia with TRAP+ cells and a dry tap on bone marrow aspiration, not collagen fibrosis with teardrop cells.", "Incorrect: Aplastic anemia shows a hypocellular marrow replaced by fat, not fibrosis with megakaryocytes."],
      highYieldPoint: "Primary myelofibrosis: marrow fibrosis → extramedullary hematopoiesis → splenomegaly. Teardrop cells, leukoerythroblastic smear. JAK2/CALR/MPL mutations."
    },
    {
      vignette: "A 55-year-old woman presents with cutaneous patches, plaques, and erythroderma that has been slowly progressive over several years. Skin biopsy shows epidermotropic atypical lymphocytes forming Pautrier microabscesses. The cells are CD4+ T-cells. She is now developing circulating atypical cerebriform lymphocytes in her blood.",
      question: "What is the name given to the circulating atypical T-cells found in the blood of patients with the leukemic phase of this disease?",
      options: ["Reed-Sternberg cells", "Sézary cells", "Auer rods", "Flame cells", "Downey cells"],
      correctIndex: 1,
      explanation: "This patient has mycosis fungoides, a cutaneous T-cell lymphoma that progresses through patch → plaque → tumor stages. When malignant CD4+ T-cells with cerebriform (grooved/convoluted) nuclei circulate in the blood, the condition is called Sézary syndrome, and the circulating cells are called Sézary cells. Sézary syndrome is the leukemic variant of mycosis fungoides and carries a worse prognosis.",
      optionExplanations: ["Incorrect: Reed-Sternberg cells are the neoplastic cells of Hodgkin lymphoma, characterized by bilobed owl-eye nuclei.", "Correct: Sézary cells are malignant CD4+ T-cells with cerebriform nuclei found in the blood, defining Sézary syndrome.", "Incorrect: Auer rods are crystallized granules found in the cytoplasm of myeloid blasts in AML.", "Incorrect: Flame cells are plasma cells with bright eosinophilic cytoplasm seen in IgA myeloma.", "Incorrect: Downey cells (atypical lymphocytes) are reactive T-cells seen in infectious mononucleosis caused by EBV."],
      highYieldPoint: "Mycosis fungoides: cutaneous T-cell lymphoma, CD4+ cells, Pautrier microabscesses. Sézary syndrome: leukemic phase with circulating cerebriform Sézary cells."
    },
    {
      vignette: "A 35-year-old Japanese man who is HTLV-1 seropositive presents with hypercalcemia, generalized lymphadenopathy, hepatosplenomegaly, and skin lesions. Peripheral blood shows atypical lymphocytes with multilobated 'flower-shaped' nuclei. Flow cytometry reveals CD4+, CD25+ T-cells.",
      question: "Which of the following best describes the mechanism of oncogenesis in this patient's malignancy?",
      options: ["Viral integration near the MYC oncogene causing its overexpression", "Chromosomal translocation creating a fusion tyrosine kinase", "Viral Tax protein activating NF-κB and promoting T-cell proliferation", "Insertional mutagenesis disrupting the TP53 tumor suppressor gene", "Chronic antigenic stimulation driving clonal B-cell expansion"],
      correctIndex: 2,
      explanation: "Adult T-cell leukemia/lymphoma (ATLL) is caused by HTLV-1 (human T-lymphotropic virus type 1), endemic in Japan, the Caribbean, and sub-Saharan Africa. The viral Tax protein activates NF-κB and other transcription factors, driving CD4+ T-cell proliferation. Characteristic findings include flower cells (multilobated nuclei), hypercalcemia (from PTHrP production and osteoclast activation), skin lesions, and lytic bone lesions.",
      optionExplanations: ["Incorrect: Viral integration near MYC is the mechanism in some animal retroviruses but not the primary mechanism in HTLV-1-mediated ATLL.", "Incorrect: Fusion tyrosine kinases (e.g., BCR-ABL) occur in CML due to chromosomal translocation, not retroviral infection.", "Correct: HTLV-1 Tax protein constitutively activates NF-κB and CREB, promoting uncontrolled T-cell proliferation.", "Incorrect: Insertional mutagenesis disrupting TP53 is not the primary mechanism in HTLV-1 oncogenesis.", "Incorrect: Chronic antigenic stimulation drives MALT lymphoma (e.g., H. pylori-associated gastric lymphoma), not ATLL."],
      highYieldPoint: "ATLL: HTLV-1, Tax protein → NF-κB activation, CD4+/CD25+ flower cells, hypercalcemia. Endemic in Japan, Caribbean."
    },
    {
      vignette: "A 60-year-old man presents with a headache, blurred vision, facial plethora, and pruritus after hot showers. Physical examination shows splenomegaly and conjunctival injection. CBC reveals hemoglobin 21 g/dL, hematocrit 63%, WBC 14,000/μL, and platelets 550,000/μL. Erythropoietin level is low. JAK2 V617F mutation is positive.",
      question: "Which of the following complications is this patient at greatest risk for if left untreated?",
      options: ["Transformation to chronic lymphocytic leukemia", "Progressive renal failure from light chain deposition", "Development of Kaposi sarcoma", "Thrombotic events such as stroke or Budd-Chiari syndrome", "Spontaneous splenic rupture from infectious mononucleosis"],
      correctIndex: 3,
      explanation: "Polycythemia vera (PV) is a myeloproliferative neoplasm driven by JAK2 V617F (present in >95% of cases) causing erythropoietin-independent erythrocytosis. Key features include aquagenic pruritus (from basophil histamine release), plethora, splenomegaly, and low EPO. The major risk is thrombosis (stroke, DVT, Budd-Chiari syndrome, MI) due to hyperviscosity. Treatment includes phlebotomy to maintain hematocrit <45% and low-dose aspirin. PV can evolve into myelofibrosis (spent phase) or AML.",
      optionExplanations: ["Incorrect: PV does not transform into CLL; it may progress to myelofibrosis or acute myeloid leukemia.", "Incorrect: Light chain deposition disease is a complication of multiple myeloma, not PV.", "Incorrect: Kaposi sarcoma is associated with HHV-8 infection and immunodeficiency, not polycythemia vera.", "Correct: The primary life-threatening complication of untreated polycythemia vera is thrombosis (stroke, Budd-Chiari, DVT/PE) due to hyperviscosity from erythrocytosis.", "Incorrect: Splenic rupture from EBV-associated mononucleosis is unrelated to polycythemia vera."],
      highYieldPoint: "Polycythemia vera: JAK2 V617F (>95%), ↑RBC/WBC/Plt, ↓EPO, aquagenic pruritus. Major risk: thrombosis. Tx: phlebotomy + aspirin. Can progress to myelofibrosis → AML."
    },
    {
      vignette: "A 73-year-old man presents with fatigue and recurrent infections. CBC shows macrocytic anemia (MCV 104 fL), neutropenia, and thrombocytopenia. Bone marrow biopsy reveals a hypercellular marrow with dysplastic changes in all three cell lineages including hypolobated megakaryocytes, ring sideroblasts (15%), and pseudo-Pelger-Huët cells. Blast count is 8%.",
      question: "Which of the following is the most significant risk associated with this patient's condition?",
      options: ["Transformation to diffuse large B-cell lymphoma (Richter transformation)", "Hyperviscosity syndrome from IgM overproduction", "Spontaneous remission within 6 months", "Development of chronic myeloid leukemia with Philadelphia chromosome", "Progression to acute myeloid leukemia"],
      correctIndex: 4,
      explanation: "This patient has myelodysplastic syndrome (MDS), characterized by ineffective hematopoiesis, cytopenia(s), and dysplastic changes in the bone marrow. Key morphological findings include ring sideroblasts, pseudo-Pelger-Huët cells (bilobed neutrophils), and hypolobated megakaryocytes. The most significant risk is transformation to AML, which occurs in approximately 30% of MDS cases. Higher blast counts correlate with greater transformation risk.",
      optionExplanations: ["Incorrect: Richter transformation to DLBCL is a complication of CLL, not MDS.", "Incorrect: Hyperviscosity from IgM occurs in Waldenström macroglobulinemia, not MDS.", "Incorrect: MDS rarely undergoes spontaneous remission; it is typically progressive.", "Incorrect: CML with the Philadelphia chromosome is a distinct myeloproliferative neoplasm, not an evolution of MDS.", "Correct: The major risk of MDS is transformation to acute myeloid leukemia, occurring in approximately 30% of patients. Higher blast percentage correlates with higher risk."],
      highYieldPoint: "MDS: cytopenias + dysplasia + hypercellular marrow. Ring sideroblasts, pseudo-Pelger-Huët cells. Risk of AML transformation (~30%). Often in elderly, post-chemotherapy/radiation."
    }
  ],

  "Coagulation disorders": [
    {
      vignette: "A 6-year-old boy is brought to the emergency department after developing a large hemarthrosis in his right knee following minor trauma during play. He has a history of prolonged bleeding after a dental extraction. His maternal uncle had similar bleeding problems. Laboratory studies show a normal platelet count, normal PT, prolonged PTT, and normal bleeding time. Factor VIII activity is 3% (normal >50%).",
      question: "Which of the following is the most likely inheritance pattern of this patient's condition?",
      options: ["X-linked recessive", "Autosomal dominant", "Autosomal recessive", "X-linked dominant", "Mitochondrial inheritance"],
      correctIndex: 0,
      explanation: "Hemophilia A (factor VIII deficiency) is an X-linked recessive disorder, which is why it primarily affects males and is transmitted through carrier females (maternal uncle is affected, mother is an obligate carrier). It presents with hemarthroses, deep tissue bleeding, and prolonged PTT (intrinsic pathway) with normal PT, platelet count, and bleeding time. Severity correlates with factor VIII levels: severe (<1%), moderate (1–5%), mild (5–40%).",
      optionExplanations: ["Correct: Hemophilia A is X-linked recessive; affected males inherit the mutation from carrier mothers.", "Incorrect: Autosomal dominant inheritance would affect males and females equally and show vertical transmission, as in von Willebrand disease type 1.", "Incorrect: Autosomal recessive conditions require both parents to carry the mutation; factor VIII deficiency is X-linked.", "Incorrect: X-linked dominant conditions affect both males (often lethally) and heterozygous females; hemophilia A is recessive.", "Incorrect: Mitochondrial inheritance is exclusively maternal and affects oxidative phosphorylation, not clotting factors."],
      highYieldPoint: "Hemophilia A: X-linked recessive, factor VIII deficiency. ↑PTT, normal PT, normal bleeding time. Hemarthroses and deep tissue bleeds."
    },
    {
      vignette: "A 19-year-old woman presents with menorrhagia and easy bruising since menarche. She also reports epistaxis that frequently requires packing. Laboratory studies show platelet count 210,000/μL, PT 12 seconds (normal), PTT 38 seconds (slightly prolonged), and bleeding time 12 minutes (prolonged). Ristocetin cofactor assay shows decreased activity. Factor VIII activity is mildly reduced at 40%.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Hemophilia A carrier state", "Von Willebrand disease", "Immune thrombocytopenic purpura", "Bernard-Soulier syndrome", "Glanzmann thrombasthenia"],
      correctIndex: 1,
      explanation: "Von Willebrand disease (vWD) is the most common inherited bleeding disorder (autosomal dominant in most cases). vWF serves two functions: it mediates platelet adhesion to subendothelium (via GPIb) and it carries/stabilizes factor VIII in the circulation. Deficiency leads to mucocutaneous bleeding, prolonged bleeding time, mildly prolonged PTT (from reduced VIII), and decreased ristocetin cofactor activity. Type 1 (most common) is a quantitative decrease in vWF.",
      optionExplanations: ["Incorrect: A hemophilia A carrier female may have mildly reduced factor VIII but would have a normal bleeding time and normal ristocetin cofactor activity.", "Correct: Prolonged bleeding time, decreased ristocetin cofactor activity, mildly reduced factor VIII, and mucocutaneous bleeding are diagnostic of vWD.", "Incorrect: ITP has isolated thrombocytopenia (<100,000) with normal PT and PTT; this patient has normal platelets.", "Incorrect: Bernard-Soulier syndrome causes macrothrombocytopenia with absent ristocetin-induced aggregation that does NOT correct with addition of normal plasma.", "Incorrect: Glanzmann thrombasthenia shows absent platelet aggregation to all agonists except ristocetin, with normal platelet count."],
      highYieldPoint: "vWD: most common inherited bleeding disorder. ↑bleeding time, ↑PTT, ↓ristocetin cofactor activity, ↓factor VIII. Mucocutaneous bleeding. Tx: desmopressin (DDAVP)."
    },
    {
      vignette: "A 45-year-old man with gram-negative sepsis from a perforated appendix develops widespread oozing from venipuncture sites, petechiae, and ecchymoses. Laboratory studies show PT 22 sec (elevated), PTT 55 sec (elevated), platelet count 42,000/μL (low), fibrinogen 80 mg/dL (low), elevated D-dimer, and schistocytes on peripheral smear.",
      question: "Which of the following best explains the pathophysiology of this patient's coagulopathy?",
      options: ["Autoantibody-mediated platelet destruction in the spleen", "Deficiency of ADAMTS13 metalloprotease allowing ultra-large vWF multimers to persist", "Widespread activation of the coagulation cascade leading to consumption of clotting factors and platelets", "Inherited deficiency of antithrombin III causing unopposed thrombin activity", "Vitamin K deficiency from prolonged antibiotic use suppressing gut flora"],
      correctIndex: 2,
      explanation: "This patient has disseminated intravascular coagulation (DIC), triggered by gram-negative sepsis. In DIC, systemic activation of the coagulation cascade causes widespread microvascular thrombosis, consuming platelets and clotting factors (leading to prolonged PT and PTT, low platelets, and low fibrinogen). Secondary fibrinolysis generates D-dimers and fibrin degradation products. The schistocytes result from mechanical damage to RBCs passing through fibrin-occluded microvasculature.",
      optionExplanations: ["Incorrect: Autoantibody-mediated platelet destruction describes ITP, which has isolated thrombocytopenia with normal PT/PTT and no schistocytes.", "Incorrect: ADAMTS13 deficiency causes TTP, which presents with MAHA and thrombocytopenia but PT/PTT are typically normal and fibrinogen is not consumed.", "Correct: DIC involves widespread coagulation activation → consumption of factors and platelets → simultaneous bleeding and microvascular thrombosis.", "Incorrect: Antithrombin III deficiency is a hypercoagulable state causing venous thromboembolism, not consumptive coagulopathy with bleeding.", "Incorrect: Vitamin K deficiency prolongs PT more than PTT but does not cause thrombocytopenia, low fibrinogen, or schistocytes."],
      highYieldPoint: "DIC: widespread coagulation → consumption of factors/platelets + secondary fibrinolysis. ↑PT, ↑PTT, ↓platelets, ↓fibrinogen, ↑D-dimer, schistocytes. Causes: sepsis, trauma, obstetric complications, malignancy."
    },
    {
      vignette: "A 55-year-old woman develops a new deep vein thrombosis in her left leg 8 days after starting unfractionated heparin for an initial DVT in the right leg. Platelet count has dropped from 220,000/μL to 68,000/μL (>50% decline). Anti-PF4/heparin antibodies are detected by ELISA. She has no other risk factors for thrombocytopenia.",
      question: "Which of the following best describes the mechanism of thrombocytopenia in this patient?",
      options: ["Direct bone marrow suppression by heparin reducing megakaryocyte production", "Dose-dependent, non-immune heparin-induced platelet clumping", "Drug-induced immune complex formation leading to complement-mediated lysis of platelets", "IgG antibodies against heparin-PF4 complexes activating platelets via Fc receptors", "Heparin-induced inhibition of thrombopoietin receptor signaling on megakaryocytes"],
      correctIndex: 3,
      explanation: "Heparin-induced thrombocytopenia (HIT) type II is an immune-mediated prothrombotic disorder. IgG antibodies form against complexes of heparin and platelet factor 4 (PF4). These antibody-antigen complexes bind platelet Fc receptors (FcγRIIa), causing massive platelet activation, aggregation, and consumption — paradoxically leading to thrombosis despite thrombocytopenia. HIT typically occurs 5–10 days after heparin initiation.",
      optionExplanations: ["Incorrect: Direct bone marrow suppression is not a mechanism of heparin-induced thrombocytopenia.", "Incorrect: Dose-dependent, non-immune platelet aggregation describes HIT type I, which is mild, transient, and clinically insignificant.", "Incorrect: Complement-mediated platelet lysis is not the mechanism; platelets are activated and consumed via Fc receptor cross-linking.", "Correct: Anti-PF4/heparin IgG antibodies activate platelets via FcγRIIa receptors, causing platelet consumption and paradoxical thrombosis.", "Incorrect: Heparin does not inhibit thrombopoietin receptor signaling."],
      highYieldPoint: "HIT type II: anti-PF4/heparin IgG → platelet activation via Fc receptors → thrombosis + thrombocytopenia. Stop heparin, start direct thrombin inhibitor (argatroban)."
    },
    {
      vignette: "A 22-year-old woman presents with a 1-week history of petechiae and mucosal bleeding. She had a viral upper respiratory infection 2 weeks ago. Platelet count is 12,000/μL. Hemoglobin and WBC count are normal. PT and PTT are normal. Peripheral smear shows decreased platelets that are large in size. Bone marrow biopsy shows increased megakaryocytes.",
      question: "Which of the following is the most appropriate initial treatment for this patient?",
      options: ["Platelet transfusion as the primary intervention", "Heparin infusion to prevent microvascular thrombosis", "Splenectomy", "Factor VIII concentrate infusion", "Corticosteroids and/or intravenous immunoglobulin (IVIG)"],
      correctIndex: 4,
      explanation: "This patient has immune thrombocytopenic purpura (ITP), characterized by isolated thrombocytopenia with antiplatelet IgG antibodies causing splenic destruction of opsonized platelets. The bone marrow shows increased megakaryocytes (compensatory). In children and young adults, ITP is often acute and follows a viral infection. First-line treatment includes corticosteroids (suppress antibody production and macrophage function) and/or IVIG (blocks Fc receptors on splenic macrophages). Splenectomy is reserved for refractory cases.",
      optionExplanations: ["Incorrect: Platelet transfusions are generally avoided in ITP because transfused platelets will also be destroyed by autoantibodies; they are reserved for life-threatening bleeding.", "Incorrect: Heparin is an anticoagulant and would worsen bleeding in a thrombocytopenic patient.", "Incorrect: Splenectomy is a second-line treatment for chronic refractory ITP, not initial therapy.", "Incorrect: Factor VIII concentrate treats hemophilia A; clotting factors are normal in ITP.", "Correct: Corticosteroids and IVIG are first-line treatments for ITP, reducing antibody-mediated platelet destruction."],
      highYieldPoint: "ITP: isolated thrombocytopenia, antiplatelet IgG, ↑megakaryocytes in marrow, normal PT/PTT. Tx: corticosteroids, IVIG. Splenectomy for refractory cases."
    },
    {
      vignette: "A 32-year-old woman presents with fever, confusion, petechiae, and dark urine. Laboratory studies show hemoglobin 7.5 g/dL, platelet count 28,000/μL, creatinine 1.8 mg/dL, LDH 1,200 U/L, haptoglobin undetectable, indirect bilirubin elevated, and schistocytes on peripheral smear. PT and PTT are normal. ADAMTS13 activity is less than 5%.",
      question: "Which of the following is the most appropriate initial treatment for this patient?",
      options: ["Platelet transfusion to raise platelet count above 50,000/μL", "Emergent plasma exchange (plasmapheresis)", "Intravenous heparin anticoagulation", "High-dose intravenous cyclophosphamide", "Eculizumab (anti-C5 complement antibody)"],
      correctIndex: 1,
      explanation: "This patient has thrombotic thrombocytopenic purpura (TTP), defined by the classic pentad: microangiopathic hemolytic anemia (MAHA, schistocytes), thrombocytopenia, renal dysfunction, neurologic symptoms, and fever. TTP is caused by severe deficiency of ADAMTS13, a metalloprotease that cleaves ultra-large von Willebrand factor multimers. Without ADAMTS13, these multimers cause platelet aggregation and microvascular thrombosis. Emergent plasma exchange is the mainstay of treatment, which removes inhibitory autoantibodies and replaces ADAMTS13.",
      optionExplanations: ["Incorrect: Platelet transfusion is relatively contraindicated in TTP because it provides additional substrate for microthrombi, potentially worsening the condition.", "Correct: Emergent plasma exchange (plasmapheresis) is the cornerstone of TTP treatment, removing ADAMTS13 autoantibodies and supplying functional ADAMTS13.", "Incorrect: Heparin does not address the underlying VWF-mediated platelet aggregation in TTP.", "Incorrect: Cyclophosphamide is not first-line therapy for TTP; rituximab may be used as adjunctive therapy for refractory cases.", "Incorrect: Eculizumab is used for atypical hemolytic uremic syndrome (complement-mediated) and PNH, not TTP."],
      highYieldPoint: "TTP: ADAMTS13 deficiency → ultra-large vWF multimers → platelet microthrombi. Pentad: MAHA, thrombocytopenia, renal, neuro, fever. Tx: plasma exchange. Do NOT transfuse platelets."
    },
    {
      vignette: "A 4-year-old girl presents with bloody diarrhea for 3 days following ingestion of undercooked ground beef. She now has pallor, petechiae, decreased urine output, and peripheral edema. Laboratory studies show hemoglobin 7.2 g/dL, platelet count 45,000/μL, BUN 55 mg/dL, creatinine 3.5 mg/dL, and schistocytes on smear. ADAMTS13 activity is normal.",
      question: "Which of the following toxins is most likely responsible for this patient's syndrome?",
      options: ["Staphylococcal enterotoxin B causing superantigen-mediated inflammation", "Cholera toxin ADP-ribosylating the Gs protein in enterocytes", "Shiga-like toxin (verotoxin) produced by enterohemorrhagic E. coli", "Clostridium difficile toxin A disrupting the intestinal cytoskeleton", "Botulinum toxin blocking acetylcholine release at the neuromuscular junction"],
      correctIndex: 2,
      explanation: "This child has hemolytic uremic syndrome (HUS), the most common cause of acute renal failure in children. Typical (D+) HUS is caused by Shiga-like toxin (verotoxin) produced by enterohemorrhagic E. coli (EHEC, primarily O157:H7). The toxin damages renal glomerular endothelial cells, triggering platelet aggregation and microangiopathic hemolytic anemia. Unlike TTP, ADAMTS13 is normal, and renal involvement predominates over neurologic symptoms.",
      optionExplanations: ["Incorrect: Staphylococcal enterotoxin B causes staphylococcal food poisoning with vomiting and diarrhea but does not cause HUS.", "Incorrect: Cholera toxin activates adenylyl cyclase causing secretory (rice-water) diarrhea but not hemolytic uremic syndrome.", "Correct: Shiga-like toxin (verotoxin) from E. coli O157:H7 damages renal endothelial cells, triggering the microangiopathic process of HUS.", "Incorrect: C. difficile toxin A causes pseudomembranous colitis but not HUS.", "Incorrect: Botulinum toxin causes descending flaccid paralysis, not hemolytic uremic syndrome."],
      highYieldPoint: "HUS: Shiga-like toxin (E. coli O157:H7) → endothelial damage → MAHA + thrombocytopenia + acute renal failure. Most common cause of pediatric ARF. Supportive care; avoid antibiotics."
    },
    {
      vignette: "A 2-year-old boy presents with excessive bleeding from a circumcision site and prolonged bleeding from gum lacerations. His platelet count is 95,000/μL. Peripheral smear shows abnormally large platelets. Bleeding time is prolonged. Platelet aggregation studies show absent aggregation to ristocetin, but normal aggregation to ADP, collagen, and epinephrine. Adding normal plasma to the patient's platelet-rich plasma does not correct the ristocetin aggregation defect.",
      question: "Which of the following platelet glycoproteins is most likely deficient in this patient?",
      options: ["Glycoprotein IIb/IIIa (αIIbβ3)", "P-selectin (CD62P)", "Glycoprotein VI", "Glycoprotein Ib/IX/V", "Thromboxane A2 receptor"],
      correctIndex: 3,
      explanation: "Bernard-Soulier syndrome is an autosomal recessive disorder caused by deficiency of the glycoprotein Ib/IX/V complex on the platelet surface. GPIb normally binds von Willebrand factor (vWF), mediating platelet adhesion to exposed subendothelium. Ristocetin-induced platelet aggregation is absent because ristocetin works by facilitating GPIb-vWF interaction. Crucially, adding normal plasma (which contains vWF) does NOT correct the defect because the problem is the missing receptor (GPIb), not the ligand. This distinguishes BSS from vWD.",
      optionExplanations: ["Incorrect: GPIIb/IIIa deficiency causes Glanzmann thrombasthenia, which shows absent aggregation to all agonists EXCEPT ristocetin.", "Incorrect: P-selectin is involved in leukocyte rolling and platelet-endothelial interactions but its deficiency does not cause this pattern.", "Incorrect: GPVI is a collagen receptor; its deficiency would impair collagen-induced aggregation, not ristocetin-induced aggregation.", "Correct: GPIb/IX/V deficiency causes Bernard-Soulier syndrome — giant platelets, thrombocytopenia, absent ristocetin aggregation not corrected by normal plasma.", "Incorrect: Thromboxane A2 receptor deficiency would impair aggregation to arachidonic acid, not ristocetin."],
      highYieldPoint: "Bernard-Soulier: GPIb deficiency → ↓adhesion to vWF → absent ristocetin aggregation (NOT corrected by plasma). Giant platelets, thrombocytopenia. AR."
    },
    {
      vignette: "A 20-year-old woman presents with mucocutaneous bleeding. Platelet count and size are normal. Bleeding time is prolonged. Platelet aggregation studies show absent aggregation to ADP, collagen, epinephrine, and thrombin, but normal aggregation to ristocetin.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Von Willebrand disease type 1", "Bernard-Soulier syndrome", "Aspirin effect", "Gray platelet syndrome", "Glanzmann thrombasthenia"],
      correctIndex: 4,
      explanation: "Glanzmann thrombasthenia is an autosomal recessive disorder caused by deficiency or dysfunction of glycoprotein IIb/IIIa (integrin αIIbβ3) on the platelet surface. GPIIb/IIIa is the fibrinogen receptor that mediates platelet-platelet aggregation. Its absence prevents platelet aggregation in response to all physiologic agonists (ADP, collagen, epinephrine, thrombin). However, ristocetin-induced agglutination is preserved because ristocetin works via GPIb-vWF binding, which is independent of GPIIb/IIIa.",
      optionExplanations: ["Incorrect: vWD type 1 would show decreased ristocetin cofactor activity and reduced ristocetin-induced aggregation.", "Incorrect: BSS shows absent ristocetin aggregation with giant platelets, whereas this patient has normal ristocetin aggregation and normal platelet count.", "Incorrect: Aspirin inhibits cyclooxygenase, blocking thromboxane A2 synthesis. This partially reduces aggregation to some agonists but does not completely abolish all aggregation.", "Incorrect: Gray platelet syndrome (alpha-granule deficiency) shows large gray platelets with impaired collagen aggregation but not complete absence of all agonist-induced aggregation.", "Correct: Glanzmann thrombasthenia = GPIIb/IIIa deficiency → absent platelet aggregation to all agonists EXCEPT ristocetin. Normal platelet count, AR inheritance."],
      highYieldPoint: "Glanzmann thrombasthenia: GPIIb/IIIa deficiency → absent platelet aggregation to all agonists EXCEPT ristocetin. Normal platelet count. AR."
    },
    {
      vignette: "A 28-year-old woman with a history of two first-trimester miscarriages and a recent DVT is evaluated. She has no family history of thrombophilia. Laboratory studies show a prolonged PTT that does not correct upon mixing with normal plasma. Anti-cardiolipin antibodies and lupus anticoagulant are positive. Platelet count is 105,000/μL.",
      question: "Which of the following best explains the paradox of a prolonged PTT with an in vivo prothrombotic state in this patient?",
      options: ["Anti-phospholipid antibodies that interfere with phospholipid-dependent clotting assays in vitro but promote thrombosis in vivo by activating endothelial cells and platelets", "Factor VIII inhibitor antibodies neutralizing coagulation both in vitro and in vivo", "Liver failure causing decreased production of both procoagulant and anticoagulant factors", "Congenital absence of protein C creating unopposed thrombin generation", "Circulating heparin-like anticoagulant substance produced by mast cells"],
      correctIndex: 0,
      explanation: "Antiphospholipid syndrome (APS) is characterized by the paradoxical combination of prolonged PTT in vitro and thrombosis in vivo. Antiphospholipid antibodies (including lupus anticoagulant, anti-cardiolipin, and anti-β2-glycoprotein I) interfere with phospholipid-dependent coagulation assays (prolonging PTT in vitro) but in vivo they activate endothelial cells, platelets, and complement, promoting thrombosis. The PTT does not correct with mixing studies because the lupus anticoagulant is an inhibitor.",
      optionExplanations: ["Correct: Antiphospholipid antibodies interfere with in vitro phospholipid-dependent clotting assays (↑PTT) while promoting in vivo thrombosis through endothelial and platelet activation. Recurrent pregnancy loss is a hallmark.", "Incorrect: Factor VIII inhibitors prolong PTT and cause bleeding, not thrombosis and recurrent miscarriages.", "Incorrect: Liver failure would prolong both PT and PTT and cause bleeding, not isolated PTT prolongation with thrombosis and normal PT.", "Incorrect: Protein C deficiency causes thrombosis but would NOT prolong PTT; protein C is part of the anticoagulant system, not the intrinsic pathway.", "Incorrect: A heparin-like anticoagulant would prolong PTT but would not cause the specific anti-phospholipid antibody pattern or recurrent miscarriages."],
      highYieldPoint: "Antiphospholipid syndrome: lupus anticoagulant → ↑PTT in vitro, thrombosis in vivo. Recurrent miscarriages, DVT/PE. Tx: lifelong anticoagulation."
    },
    {
      vignette: "A 25-year-old man develops an extensive proximal DVT in his left leg with no identifiable risk factors. Family history reveals his father had a PE at age 40 and his sister had DVT during pregnancy. Activated protein C resistance testing is positive. Genetic testing confirms a heterozygous missense mutation in the factor V gene (Arg506Gln).",
      question: "Which of the following best describes how this mutation promotes a hypercoagulable state?",
      options: ["Factor V Leiden resists cleavage by activated protein C, prolonging its procoagulant activity in the prothrombinase complex", "The mutation causes factor V to spontaneously activate without thrombin cleavage", "The mutant factor V directly inhibits tissue factor pathway inhibitor", "The mutation enhances factor V binding to fibrinogen, accelerating clot formation", "Factor V Leiden constitutively activates platelets through a gain-of-function mechanism"],
      correctIndex: 0,
      explanation: "Factor V Leiden (Arg506Gln) is the most common inherited thrombophilia, present in approximately 5% of Caucasians. Normal factor V is cleaved and inactivated by activated protein C (APC) at Arg506. The Leiden mutation replaces this arginine with glutamine, making factor V resistant to APC-mediated cleavage. This prolongs the procoagulant activity of factor Va in the prothrombinase complex (factor Xa + Va), increasing thrombin generation and thrombotic risk.",
      optionExplanations: ["Correct: Factor V Leiden resists APC cleavage at position 506, maintaining prolonged procoagulant activity in the prothrombinase complex.", "Incorrect: Factor V Leiden still requires normal thrombin-mediated activation; it simply cannot be inactivated normally by APC.", "Incorrect: Factor V does not directly inhibit tissue factor pathway inhibitor (TFPI).", "Incorrect: The mutation is at the APC cleavage site, not the fibrinogen-binding domain.", "Incorrect: Factor V Leiden does not directly activate platelets; it operates within the coagulation cascade."],
      highYieldPoint: "Factor V Leiden: most common inherited thrombophilia. Arg506Gln → resistance to APC → prolonged factor Va activity → ↑thrombin → thrombosis."
    },
    {
      vignette: "A 30-year-old woman develops warfarin-induced skin necrosis 3 days after initiating warfarin therapy for a DVT, before adequate heparin overlap was established. The necrotic lesions appear on adipose-rich areas (breasts, thighs, buttocks). She is later found to have an inherited deficiency that predisposed her to this complication.",
      question: "Deficiency of which of the following proteins most likely predisposed this patient to warfarin-induced skin necrosis?",
      options: ["Antithrombin III", "Protein C", "Plasminogen", "Factor V", "Tissue factor pathway inhibitor"],
      correctIndex: 1,
      explanation: "Warfarin-induced skin necrosis occurs in patients with protein C (or protein S) deficiency. Warfarin inhibits vitamin K-dependent gamma-carboxylation of factors II, VII, IX, X, and proteins C and S. Because protein C has the shortest half-life (~8 hours) among these factors, warfarin initially creates a transient hypercoagulable state as protein C levels fall before the procoagulant factors (especially factor II, t½ ~60 hours) are adequately depleted. This causes microvascular thrombosis and skin necrosis in adipose-rich tissue. A heparin bridge prevents this.",
      optionExplanations: ["Incorrect: Antithrombin III deficiency causes heparin resistance and recurrent thrombosis but is not specifically associated with warfarin-induced skin necrosis.", "Correct: Protein C deficiency predisposes to warfarin-induced skin necrosis because protein C has the shortest half-life and is depleted first, creating a transient prothrombotic state.", "Incorrect: Plasminogen deficiency impairs fibrinolysis but is not the classic cause of warfarin-induced skin necrosis.", "Incorrect: Factor V is a procoagulant factor; its deficiency would cause bleeding, not thrombotic necrosis.", "Incorrect: TFPI deficiency is extremely rare and is not associated with warfarin-induced skin necrosis."],
      highYieldPoint: "Warfarin-induced skin necrosis: protein C (shortest half-life) depleted first → transient hypercoagulability. Always bridge with heparin when starting warfarin."
    },
    {
      vignette: "A 48-year-old man on chronic warfarin therapy for atrial fibrillation presents to the ED after accidentally taking a double dose for 3 days. He has gingival bleeding and hematuria. INR is 8.5. He is hemodynamically stable with no signs of life-threatening hemorrhage.",
      question: "Which of the following is the most appropriate management of this patient's elevated INR?",
      options: ["Emergent surgical evacuation of any hematoma", "Administration of fresh frozen plasma only", "Hold warfarin and administer oral vitamin K", "Immediate administration of recombinant factor VIIa", "Observation with no intervention needed"],
      correctIndex: 2,
      explanation: "For supratherapeutic INR with non-life-threatening bleeding, the appropriate management is to hold warfarin and administer vitamin K (phytonadione). Oral vitamin K is preferred for non-emergent reversal. Vitamin K enables hepatic gamma-carboxylation of factors II, VII, IX, X, restoring their activity within 24–48 hours. For life-threatening bleeding with critical INR elevation, IV vitamin K plus 4-factor prothrombin complex concentrate (PCC) or fresh frozen plasma provides immediate reversal.",
      optionExplanations: ["Incorrect: Surgical evacuation is not indicated without a specific hematoma requiring drainage.", "Incorrect: FFP alone provides temporary factor replacement but does not restore the patient's own factor production; vitamin K is needed for sustained correction.", "Correct: Holding warfarin and giving oral vitamin K appropriately manages supratherapeutic INR with non-life-threatening bleeding.", "Incorrect: Recombinant factor VIIa is reserved for specific life-threatening situations and carries significant thrombotic risk.", "Incorrect: With active bleeding (gingival bleeding, hematuria) and INR of 8.5, observation alone is insufficient."],
      highYieldPoint: "Warfarin reversal: non-life-threatening bleed → hold warfarin + oral vitamin K. Life-threatening bleed → IV vitamin K + PCC or FFP. Warfarin inhibits vitamin K epoxide reductase."
    },
    {
      vignette: "A 3-day-old breastfed newborn develops bleeding from the umbilical stump, gastrointestinal hemorrhage, and intracranial bleeding. The infant did not receive prophylaxis at birth. PT and PTT are both markedly prolonged. Platelet count and fibrinogen are normal.",
      question: "Deficiency of which of the following vitamins is most likely responsible for this newborn's bleeding?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K", "Vitamin E"],
      correctIndex: 3,
      explanation: "Hemorrhagic disease of the newborn (vitamin K deficiency bleeding) occurs because neonates have limited vitamin K stores, sterile gut (no bacterial vitamin K synthesis), and breast milk is low in vitamin K. Without vitamin K, the liver cannot gamma-carboxylate factors II, VII, IX, and X (and proteins C and S), causing prolonged PT and PTT with normal platelets and fibrinogen. Prophylactic intramuscular vitamin K at birth prevents this life-threatening condition.",
      optionExplanations: ["Incorrect: Vitamin A deficiency causes night blindness, dry skin (squamous metaplasia), and immune dysfunction but not coagulopathy.", "Incorrect: Vitamin B12 deficiency causes megaloblastic anemia and neurologic symptoms, not bleeding diathesis.", "Incorrect: Vitamin C deficiency (scurvy) causes impaired collagen synthesis with perifollicular hemorrhages and easy bruising, but PT/PTT are normal.", "Correct: Vitamin K deficiency prevents gamma-carboxylation of factors II, VII, IX, X → prolonged PT and PTT → neonatal hemorrhage.", "Incorrect: Vitamin E deficiency causes hemolytic anemia in premature infants and spinocerebellar degeneration, not coagulopathy."],
      highYieldPoint: "Neonatal vitamin K deficiency: ↑PT, ↑PTT, normal platelets/fibrinogen. Factors II, VII, IX, X need vitamin K-dependent γ-carboxylation. Prevent with IM vitamin K at birth."
    },
    {
      vignette: "A 35-year-old man with recurrent DVTs is found to have antithrombin III (AT III) activity of 40% (normal 80–120%). He does not respond adequately to standard heparin dosing. His father and paternal grandmother also had venous thromboembolism. Liver function tests and urinalysis are normal.",
      question: "Which of the following best explains why standard heparin therapy is less effective in this patient?",
      options: ["Heparin directly cleaves clotting factors independent of any cofactor", "Heparin inhibits vitamin K epoxide reductase, which is unrelated to antithrombin", "Heparin functions by binding directly to fibrinogen and preventing its polymerization", "Heparin activates protein C, which requires antithrombin as a downstream substrate", "Heparin requires antithrombin III as a cofactor to inhibit thrombin and factor Xa, so AT III deficiency reduces its efficacy"],
      correctIndex: 4,
      explanation: "Heparin exerts its anticoagulant effect by binding to antithrombin III (AT III) and dramatically accelerating (by approximately 1000-fold) the ability of AT III to inhibit thrombin (factor IIa) and factor Xa. In patients with AT III deficiency, there is insufficient substrate for heparin to potentiate, rendering heparin therapy less effective. These patients may require higher heparin doses, AT III concentrate supplementation, or alternative anticoagulants such as direct thrombin inhibitors.",
      optionExplanations: ["Incorrect: Heparin does not directly cleave clotting factors; it works by potentiating antithrombin III's inhibitory activity.", "Incorrect: Inhibition of vitamin K epoxide reductase is the mechanism of warfarin, not heparin.", "Incorrect: Heparin does not bind fibrinogen; it binds antithrombin III to catalyze inhibition of serine proteases in the coagulation cascade.", "Incorrect: Heparin does not activate protein C; thrombin bound to thrombomodulin activates protein C. Antithrombin is not a substrate for protein C.", "Correct: Heparin potentiates antithrombin III activity approximately 1000-fold. AT III deficiency → insufficient cofactor for heparin → heparin resistance."],
      highYieldPoint: "Heparin mechanism: binds AT III → 1000x ↑inhibition of thrombin + factor Xa. AT III deficiency = heparin resistance. Autosomal dominant thrombophilia."
    }
  ]

};

const HEME_PART1_SUMMARIES = {

  "RBC disorders & anemia": {
    sections: [
      {
        heading: "Microcytic Anemias (MCV <80 fL)",
        bullets: [
          "Iron deficiency: ↓ferritin (first to drop), ↓serum iron, ↑TIBC, ↑RDW. Causes: menorrhagia, GI blood loss, poor intake. Peripheral smear: hypochromic microcytes, target cells, pencil cells.",
          "Thalassemias: defective globin chain synthesis. Alpha-thal: gene deletions (1-gene silent, 2-gene trait, 3-gene HbH, 4-gene Hb Bart's hydrops). Beta-thal: point mutations, ↑HbA2 in trait, ↑HbF in major. Normal RDW distinguishes from iron deficiency.",
          "Sideroblastic anemia: defective heme synthesis → iron-loaded mitochondria (ring sideroblasts on Prussian blue stain). Causes: alcohol (B6 impairment), lead, isoniazid, MDS. ↑iron, ↑ferritin.",
          "Lead poisoning: inhibits ALA dehydratase + ferrochelatase → basophilic stippling, ↑FEP, ↑urinary ALA. Lead lines on gums/metaphyses.",
          "Anemia of chronic disease: IL-6 → ↑hepcidin → ferroportin degradation → iron trapped in macrophages. ↓serum iron, ↓TIBC, ↑ferritin."
        ]
      },
      {
        heading: "Macrocytic Anemias (MCV >100 fL)",
        bullets: [
          "Megaloblastic: impaired DNA synthesis → nuclear-cytoplasmic dyssynchrony. B12 deficiency (↑MMA + ↑homocysteine) vs. folate deficiency (↑homocysteine only). Smear: macro-ovalocytes, hypersegmented neutrophils (≥5 lobes).",
          "B12 causes subacute combined degeneration (posterior columns + lateral corticospinal tracts); folate does NOT cause neurologic disease.",
          "Pernicious anemia: autoimmune destruction of parietal cells → ↓intrinsic factor → B12 malabsorption. Anti-IF and anti-parietal cell antibodies. ↑gastric cancer risk.",
          "Non-megaloblastic macrocytosis: alcohol (most common), liver disease, hypothyroidism, reticulocytosis, drugs (hydroxyurea, zidovudine)."
        ]
      },
      {
        heading: "Normocytic Anemias & Hemolytic Anemias",
        bullets: [
          "Aplastic anemia: pancytopenia + hypocellular fatty marrow + low reticulocytes. Causes: idiopathic, drugs (chloramphenicol, NSAIDs, carbamazepine), viruses (parvovirus B19, hepatitis), radiation, Fanconi anemia.",
          "Intravascular hemolysis: ↓haptoglobin, ↑LDH, hemoglobinuria, hemosiderinuria. Causes: PNH, MAHA (TTP/HUS/DIC), mechanical heart valves, cold AIHA.",
          "Extravascular hemolysis: ↑indirect bilirubin, ↑LDH, splenomegaly, jaundice. Causes: warm AIHA, hereditary spherocytosis, sickle cell, thalassemia major.",
          "Hereditary spherocytosis: spectrin/ankyrin defect → spherocytes, ⊕osmotic fragility, pigment gallstones. AD inheritance. Tx: splenectomy.",
          "G6PD deficiency: X-linked, ↓NADPH → oxidative hemolysis. Heinz bodies + bite cells. Triggered by sulfonamides, primaquine, fava beans, infection.",
          "PNH: PIGA mutation → absent GPI anchor → no CD55/CD59 → complement-mediated hemolysis. Triad: hemolytic anemia, pancytopenia, thrombosis. Dx: flow cytometry."
        ]
      }
    ],
    table: {
      title: "Differentiating Microcytic Anemias by Iron Studies",
      headers: ["Parameter", "Iron Deficiency", "ACD", "Sideroblastic", "Thalassemia Trait"],
      rows: [
        ["Serum Iron", "↓", "↓", "↑", "Normal"],
        ["TIBC", "↑", "↓", "Normal", "Normal"],
        ["Ferritin", "↓", "↑", "↑", "Normal"],
        ["Transferrin Sat", "↓", "↓", "↑", "Normal"],
        ["RDW", "↑", "Normal", "↑", "Normal"],
        ["HbA2", "Normal/↓", "Normal", "Normal", "↑ (β-thal)"]
      ]
    },
    mnemonic: "IRON deficiency order of lab changes: 'First Ferritin Falls, Then Iron Is Reduced, TIBC Increases, RBCs Remain normal Initially, Microcytosis Manifests Last.' — For microcytic anemia causes, use 'FAST LIDS': Fe deficiency, ACD, Sideroblastic, Thalassemia, Lead poisoning."
  },

  "WBC disorders": {
    sections: [
      {
        heading: "Acute Leukemias",
        bullets: [
          "ALL: most common childhood cancer (peak 2–5 years). B-ALL: CD10+/CD19+/TdT+. T-ALL: CD2+/CD3+/CD7+/TdT+, mediastinal mass. Best prognosis: t(12;21), hyperdiploidy, age 1–10.",
          "AML: predominates in adults. MPO+, Auer rods. APL (M3): t(15;17) PML-RARA, faggot cells, DIC risk. Tx with ATRA + arsenic trioxide. AML with t(8;21) has good prognosis. FLT3-ITD = poor prognosis.",
          "Tumor lysis syndrome: risk with treatment of rapidly proliferating cancers. ↑K+, ↑PO4, ↑uric acid, ↓Ca2+. Prevent with allopurinol/rasburicase and IV hydration."
        ]
      },
      {
        heading: "Chronic Leukemias & Myeloproliferative Neoplasms",
        bullets: [
          "CML: t(9;22) BCR-ABL1 constitutive tyrosine kinase. Massive splenomegaly, ↑basophils, all myeloid stages. Phases: chronic → accelerated → blast crisis. Tx: imatinib (TKI).",
          "CLL: most common adult leukemia (Western world). CD5+/CD19+/CD20dim/CD23+. Smudge cells. Warm AIHA, hypogammaglobulinemia. Richter transformation → DLBCL.",
          "Polycythemia vera: JAK2 V617F (>95%), ↑RBC/WBC/Plt, ↓EPO, aquagenic pruritus, plethora. Major risk: thrombosis. Tx: phlebotomy + aspirin.",
          "Essential thrombocythemia: JAK2/CALR/MPL, isolated ↑platelets. Risk of thrombosis and paradoxical bleeding.",
          "Primary myelofibrosis: marrow fibrosis → extramedullary hematopoiesis → massive splenomegaly. Teardrop cells, leukoerythroblastic smear.",
          "MDS: cytopenias + dysplasia in hypercellular marrow. Ring sideroblasts, pseudo-Pelger-Huët cells. Risk of AML transformation (~30%). Common in elderly."
        ]
      },
      {
        heading: "Lymphomas",
        bullets: [
          "Hodgkin lymphoma: Reed-Sternberg cells (CD15+/CD30+/CD20−/CD45−). Bimodal age distribution. Contiguous spread. B symptoms. EBV-associated. Subtypes: nodular sclerosis (most common), mixed cellularity, lymphocyte-rich, lymphocyte-depleted.",
          "Burkitt lymphoma: t(8;14) → MYC overexpression. Starry-sky pattern. Endemic (jaw, EBV+), sporadic (ileocecal), immunodeficiency-related. Highest Ki-67 of any tumor.",
          "Follicular lymphoma: t(14;18) → BCL2 overexpression → blocked apoptosis. Indolent, painless LAD. Can transform to DLBCL.",
          "DLBCL: most common NHL overall. Aggressive, rapidly growing. CD20+. Tx: R-CHOP.",
          "Mantle cell lymphoma: t(11;14) → cyclin D1. CD5+/CD23−. Aggressive.",
          "Hairy cell leukemia: TRAP+, CD25+, CD103+, BRAF V600E. Splenomegaly + pancytopenia. Tx: cladribine.",
          "Mycosis fungoides/Sézary syndrome: cutaneous T-cell lymphoma, CD4+. Pautrier microabscesses. Sézary cells = circulating cerebriform T-cells.",
          "ATLL: HTLV-1, Tax protein → NF-κB. Flower cells, hypercalcemia. Endemic in Japan, Caribbean."
        ]
      },
      {
        heading: "Plasma Cell Neoplasms",
        bullets: [
          "Multiple myeloma: monoclonal plasma cell proliferation. CRAB: Calcium ↑, Renal insufficiency, Anemia, Bone lytic lesions. M-spike, Bence Jones proteinuria, rouleaux formation. Myeloma kidney = light chain cast nephropathy.",
          "Waldenström macroglobulinemia (lymphoplasmacytic lymphoma): IgM M-spike → hyperviscosity syndrome. No lytic bone lesions (unlike myeloma).",
          "MGUS: <3 g/dL M-protein, <10% marrow plasma cells, no CRAB. ~1%/year progression to myeloma."
        ]
      }
    ],
    table: {
      title: "Key Cytogenetic Translocations in Hematologic Malignancies",
      headers: ["Translocation", "Gene/Product", "Disease", "Key Feature"],
      rows: [
        ["t(9;22)", "BCR-ABL1 (tyrosine kinase)", "CML, Ph+ ALL", "Philadelphia chromosome; Tx: imatinib"],
        ["t(15;17)", "PML-RARA", "APL (AML-M3)", "Auer rods/faggot cells; Tx: ATRA"],
        ["t(8;14)", "MYC-IGH", "Burkitt lymphoma", "Starry-sky pattern, very high Ki-67"],
        ["t(14;18)", "BCL2-IGH", "Follicular lymphoma", "Blocked apoptosis, indolent"],
        ["t(11;14)", "CCND1-IGH (Cyclin D1)", "Mantle cell lymphoma", "CD5+/CD23−, aggressive"],
        ["t(12;21)", "ETV6-RUNX1", "B-ALL (childhood)", "Best prognosis ALL subtype"]
      ]
    },
    mnemonic: "Translocation numbers spell the disease — '8 and 14 BURKe it' (Burkitt 8;14), '14 and 18 = FoLLiCLe' (Follicular 14;18), '9 and 22 = CML Ph-ew!' (CML 9;22), '15 and 17 = ATRA PRoMise' (APL 15;17). For CLL markers: '5-19-20-23 = CLL SLOWly' (CD5/CD19/CD20dim/CD23)."
  },

  "Coagulation disorders": {
    sections: [
      {
        heading: "Coagulation Cascade & Screening Tests",
        bullets: [
          "PT (prothrombin time) measures extrinsic pathway: factor VII (shortest half-life of coag factors) + common pathway (X, V, II, fibrinogen). Prolonged PT first → think factor VII or vitamin K deficiency or warfarin.",
          "PTT (activated partial thromboplastin time) measures intrinsic pathway: XII, XI, IX, VIII + common pathway. Prolonged PTT → think hemophilia A (VIII) or B (IX), vWD, heparin, or lupus anticoagulant.",
          "Mixing study: if prolonged PT/PTT corrects with 1:1 mix with normal plasma → factor deficiency. If it does NOT correct → inhibitor (antibody) present.",
          "Bleeding time/PFA-100 measures platelet function. Prolonged in vWD, platelet disorders, aspirin use."
        ]
      },
      {
        heading: "Inherited Bleeding Disorders",
        bullets: [
          "Hemophilia A: X-linked recessive, factor VIII deficiency. ↑PTT, normal PT, normal bleeding time. Hemarthroses, deep tissue/muscle bleeds. Tx: recombinant factor VIII, desmopressin for mild cases.",
          "Hemophilia B (Christmas disease): X-linked recessive, factor IX deficiency. Clinically identical to hemophilia A. Tx: recombinant factor IX.",
          "Von Willebrand disease: most common inherited bleeding disorder. AD (types 1 & 2). vWF stabilizes factor VIII and mediates platelet adhesion via GPIb. ↑bleeding time, ↑PTT, ↓ristocetin cofactor activity. Tx: desmopressin (DDAVP) for type 1.",
          "Bernard-Soulier syndrome: AR, GPIb deficiency → ↓platelet adhesion. Giant platelets, thrombocytopenia. Absent ristocetin aggregation NOT corrected by plasma.",
          "Glanzmann thrombasthenia: AR, GPIIb/IIIa deficiency → ↓platelet aggregation. Absent aggregation to all agonists EXCEPT ristocetin."
        ]
      },
      {
        heading: "Acquired Bleeding & Consumptive Disorders",
        bullets: [
          "DIC: widespread coagulation activation → consumption of factors/platelets + secondary fibrinolysis. ↑PT, ↑PTT, ↓platelets, ↓fibrinogen, ↑D-dimer, schistocytes. Causes: sepsis, obstetric complications, trauma, malignancy (APL). Tx: treat underlying cause + supportive.",
          "ITP: autoimmune (IgG anti-platelet antibodies) → splenic destruction. Isolated thrombocytopenia, ↑megakaryocytes, normal PT/PTT. Tx: corticosteroids, IVIG, splenectomy for refractory.",
          "TTP: ADAMTS13 deficiency → ultra-large vWF multimers → platelet microthrombi. Pentad: MAHA, thrombocytopenia, renal, neuro, fever. Normal PT/PTT. Tx: plasma exchange. Do NOT transfuse platelets.",
          "HUS: Shiga-like toxin (E. coli O157:H7) → renal endothelial damage. MAHA + thrombocytopenia + acute renal failure. Most common cause of pediatric ARF. Supportive care.",
          "HIT type II: anti-PF4/heparin IgG → platelet activation → paradoxical thrombosis + thrombocytopenia. Onset 5–10 days after heparin. Tx: stop heparin, start argatroban (direct thrombin inhibitor).",
          "Vitamin K deficiency: ↑PT (first) then ↑PTT. Factors II, VII, IX, X + proteins C and S. Neonates at risk (hemorrhagic disease of the newborn). Prevent with IM vitamin K at birth."
        ]
      },
      {
        heading: "Inherited Thrombophilias (Hypercoagulable States)",
        bullets: [
          "Factor V Leiden: most common inherited thrombophilia (~5% Caucasians). Arg506Gln → resistance to activated protein C → prolonged factor Va activity. ↑DVT/PE risk.",
          "Prothrombin gene mutation (G20210A): second most common. ↑prothrombin levels → ↑thrombin generation.",
          "Protein C deficiency: ↑risk of venous thrombosis + warfarin-induced skin necrosis (protein C has shortest half-life of vitamin K-dependent factors).",
          "Protein S deficiency: protein S is a cofactor for protein C. Similar presentation to protein C deficiency.",
          "Antithrombin III deficiency: heparin resistance (heparin works by potentiating AT III). Recurrent VTE despite adequate heparin.",
          "Antiphospholipid syndrome: acquired. Lupus anticoagulant, anti-cardiolipin, anti-β2GP1. ↑PTT in vitro but thrombosis in vivo. Recurrent pregnancy loss, DVT/PE. Tx: lifelong anticoagulation."
        ]
      }
    ],
    table: {
      title: "Differentiating Thrombocytopenic Disorders",
      headers: ["Feature", "ITP", "TTP", "HUS", "DIC", "HIT"],
      rows: [
        ["Mechanism", "Anti-platelet IgG", "↓ADAMTS13", "Shiga toxin", "Consumption", "Anti-PF4/heparin IgG"],
        ["Platelets", "↓↓", "↓↓", "↓↓", "↓↓", "↓ (>50% drop)"],
        ["Schistocytes", "No", "Yes", "Yes", "Yes", "No"],
        ["PT/PTT", "Normal", "Normal", "Normal", "↑/↑", "Normal"],
        ["Fibrinogen", "Normal", "Normal", "Normal", "↓↓", "Normal"],
        ["D-dimer", "Normal", "Normal", "Normal", "↑↑", "Normal"],
        ["Key Organ", "Spleen (destruction)", "Brain (neuro Sx)", "Kidney (ARF)", "Multiorgan", "Veins (thrombosis)"],
        ["Treatment", "Steroids/IVIG", "Plasma exchange", "Supportive", "Treat cause", "Stop heparin + argatroban"]
      ]
    },
    mnemonic: "Coagulation pathway: 'PT = Plays Tennis (extrinsic, factor 7 serves first)' and 'PTT = Plays Table Tennis (intrinsic, longer name = longer pathway).' Vitamin K-dependent factors: '1972 (factors II, VII, IX, X) + proteins C and S.' Warfarin skin necrosis: 'Protein C has the shortest Course (half-life) — it drops first with warfarin.'"
  }

};
