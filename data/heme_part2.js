const HEME_PART2_QUESTIONS = {

  "Leukemias & lymphomas": [
    {
      vignette: "A 4-year-old boy is brought to the emergency department with a 2-week history of fatigue, pallor, and easy bruising. Physical examination reveals hepatosplenomegaly and scattered petechiae. A complete blood count shows a white blood cell count of 48,000/μL with 80% lymphoblasts. Flow cytometry of the bone marrow reveals CD10+, CD19+, TdT+ blasts.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Acute myeloid leukemia","Acute lymphoblastic leukemia","Burkitt lymphoma","Chronic lymphocytic leukemia","Hairy cell leukemia"],
      correctIndex: 1,
      explanation: "The presentation of a young child with pancytopenia symptoms (fatigue, pallor, petechiae), hepatosplenomegaly, and lymphoblasts expressing CD10, CD19, and TdT is classic for B-cell acute lymphoblastic leukemia (ALL). ALL is the most common childhood cancer, peaking at ages 2-5.",
      optionExplanations: ["Incorrect: AML blasts are myeloperoxidase-positive and express myeloid markers (CD13, CD33); they lack TdT and CD10.","Correct: CD10+, CD19+, TdT+ blasts in a young child are diagnostic of pre-B ALL, the most common childhood malignancy.","Incorrect: Burkitt lymphoma presents as a rapidly growing mass with t(8;14) translocation and a starry-sky pattern, not as a leukemic presentation with TdT+ blasts.","Incorrect: CLL affects elderly patients and presents with mature-appearing lymphocytes, not blasts.","Incorrect: Hairy cell leukemia occurs in middle-aged men and is characterized by TRAP-positive cells with hair-like cytoplasmic projections."],
      highYieldPoint: "ALL: most common childhood cancer; pre-B ALL is TdT+, CD10+ (CALLA), CD19+."
    },
    {
      vignette: "A 68-year-old man presents for a routine physical examination. He feels well and has no complaints. Laboratory studies reveal a white blood cell count of 65,000/μL with 90% mature-appearing small lymphocytes. A peripheral blood smear shows numerous smudge cells. Flow cytometry demonstrates CD5+, CD20+, CD23+ lymphocytes.",
      question: "What is the most likely diagnosis?",
      options: ["Marginal zone lymphoma","Mantle cell lymphoma","Chronic lymphocytic leukemia","Follicular lymphoma","Acute lymphoblastic leukemia"],
      correctIndex: 2,
      explanation: "An elderly asymptomatic patient with marked lymphocytosis of mature small lymphocytes, smudge cells on smear, and CD5+/CD20+/CD23+ immunophenotype is classic for chronic lymphocytic leukemia (CLL). CLL is the most common leukemia in adults in the Western world.",
      optionExplanations: ["Incorrect: Marginal zone lymphoma is CD5-negative and commonly involves extranodal sites (e.g., MALT lymphoma of the stomach).","Incorrect: Mantle cell lymphoma is CD5+/CD20+ but CD23-negative, and is associated with t(11;14) and cyclin D1 overexpression.","Correct: CLL presents in elderly patients with mature lymphocytosis, smudge cells, and CD5+/CD20+/CD23+ phenotype.","Incorrect: Follicular lymphoma is CD10+, CD5-negative, and associated with t(14;18) and BCL-2 overexpression.","Incorrect: ALL presents with blasts (not mature lymphocytes) and typically affects children."],
      highYieldPoint: "CLL: most common adult leukemia; smudge cells, CD5+/CD20+/CD23+; distinguish from mantle cell (CD23-)."
    },
    {
      vignette: "A 55-year-old woman presents with fatigue and an enlarged spleen. Complete blood count shows a WBC of 125,000/μL with a differential showing the full spectrum of myeloid maturation including myelocytes, metamyelocytes, and bands, along with increased basophils. Cytogenetic analysis reveals a t(9;22) translocation.",
      question: "Which fusion protein is produced by this translocation?",
      options: ["PML-RARα","AML1-ETO","BCR-ABL","JAK2 V617F","FLT3-ITD"],
      correctIndex: 2,
      explanation: "The t(9;22) translocation creates the Philadelphia chromosome, which produces the BCR-ABL fusion protein. This constitutively active tyrosine kinase drives the uncontrolled proliferation of myeloid cells in chronic myeloid leukemia (CML).",
      optionExplanations: ["Incorrect: PML-RARα results from t(15;17) and is found in acute promyelocytic leukemia (APL).","Incorrect: AML1-ETO results from t(8;21) found in a subtype of AML with favorable prognosis.","Correct: BCR-ABL is the product of the t(9;22) Philadelphia chromosome; it is a constitutively active tyrosine kinase targeted by imatinib.","Incorrect: JAK2 V617F is a point mutation (not translocation) found in polycythemia vera and other myeloproliferative neoplasms.","Incorrect: FLT3-ITD is an internal tandem duplication mutation found in AML, conferring poor prognosis."],
      highYieldPoint: "CML: t(9;22) Philadelphia chromosome → BCR-ABL tyrosine kinase → treated with imatinib."
    },
    {
      vignette: "A 32-year-old woman presents with gingival bleeding and scattered ecchymoses. CBC reveals pancytopenia with circulating promyelocytes containing numerous Auer rods. Coagulation studies show prolonged PT and PTT, elevated D-dimer, and decreased fibrinogen. Cytogenetics demonstrate t(15;17).",
      question: "Which of the following is the most appropriate initial pharmacological treatment for this patient's leukemia?",
      options: ["All-trans retinoic acid (ATRA)","Rituximab","Imatinib","Hydroxyurea","Cyclophosphamide"],
      correctIndex: 0,
      explanation: "This patient has acute promyelocytic leukemia (APL) with t(15;17) creating PML-RARα and associated DIC. ATRA (all-trans retinoic acid) binds the mutant retinoic acid receptor and induces differentiation of promyelocytes into mature granulocytes, resolving the DIC.",
      optionExplanations: ["Correct: ATRA induces terminal differentiation of leukemic promyelocytes by binding the PML-RARα fusion protein; it is the cornerstone of APL treatment.","Incorrect: Rituximab is an anti-CD20 monoclonal antibody used in B-cell lymphomas and CLL, not APL.","Incorrect: Imatinib is a BCR-ABL tyrosine kinase inhibitor used for CML with the Philadelphia chromosome.","Incorrect: Hydroxyurea is used for cytoreduction in CML and myeloproliferative neoplasms, not as definitive therapy for APL.","Incorrect: Cyclophosphamide is an alkylating agent used in various regimens but is not the specific initial therapy for APL."],
      highYieldPoint: "APL: t(15;17) → PML-RARα; Auer rods, DIC; treated with ATRA (induces differentiation)."
    },
    {
      vignette: "A 22-year-old man presents with a rapidly enlarging jaw mass. Biopsy reveals a diffuse infiltrate of medium-sized lymphocytes with a high mitotic rate and a 'starry sky' pattern on low-power microscopy. Cytogenetics show a t(8;14) translocation.",
      question: "Which oncogene is translocated in this condition?",
      options: ["BCL-2","Cyclin D1","ALK","BCL-6","c-MYC"],
      correctIndex: 4,
      explanation: "The starry sky pattern, rapid growth, jaw mass in a young patient, and t(8;14) are characteristic of Burkitt lymphoma. The t(8;14) places the c-MYC oncogene under the control of the immunoglobulin heavy chain promoter on chromosome 14, driving rapid cell proliferation.",
      optionExplanations: ["Incorrect: BCL-2 overexpression from t(14;18) is characteristic of follicular lymphoma and inhibits apoptosis.","Incorrect: Cyclin D1 overexpression from t(11;14) is characteristic of mantle cell lymphoma.","Incorrect: ALK translocations (e.g., t(2;5)) are found in anaplastic large cell lymphoma.","Incorrect: BCL-6 rearrangements are found in diffuse large B-cell lymphoma.","Correct: c-MYC translocation via t(8;14) drives the extremely rapid proliferation seen in Burkitt lymphoma."],
      highYieldPoint: "Burkitt lymphoma: t(8;14) → c-MYC; starry sky pattern; highest proliferation rate of any tumor."
    },
    {
      vignette: "A 28-year-old woman presents with a painless, rubbery cervical lymph node. Biopsy shows effacement of lymph node architecture by Reed-Sternberg cells in a background of lymphocytes, eosinophils, and plasma cells. Immunostaining is positive for CD15 and CD30.",
      question: "Which subtype of this disease has the best prognosis?",
      options: ["Nodular sclerosis","Mixed cellularity","Lymphocyte-depleted","Lymphocyte-rich","Nodular lymphocyte-predominant"],
      correctIndex: 3,
      explanation: "This is Hodgkin lymphoma (Reed-Sternberg cells, CD15+/CD30+). Among classical HL subtypes, lymphocyte-rich has the best prognosis, though nodular sclerosis (most common) also has a favorable outcome. Prognosis worsens as the ratio of lymphocytes to RS cells decreases.",
      optionExplanations: ["Incorrect: Nodular sclerosis is the most common subtype and has a good prognosis, but lymphocyte-rich carries the best prognosis among classical HL subtypes.","Incorrect: Mixed cellularity is the second most common subtype and is more common in HIV-positive patients; it has an intermediate prognosis.","Incorrect: Lymphocyte-depleted is the rarest subtype and carries the worst prognosis, often presenting in advanced stages.","Correct: Lymphocyte-rich classical HL has the best prognosis owing to the high lymphocyte-to-RS cell ratio, indicating a robust immune response.","Incorrect: Nodular lymphocyte-predominant HL is a distinct entity (CD20+, CD15-/CD30-) with 'popcorn cells' (LP cells), not classical HL."],
      highYieldPoint: "Hodgkin lymphoma prognosis: lymphocyte-rich (best) → nodular sclerosis → mixed cellularity → lymphocyte-depleted (worst)."
    },
    {
      vignette: "A 60-year-old man presents with generalized lymphadenopathy. A lymph node biopsy shows a nodular pattern of small cleaved cells and large cells. Immunohistochemistry is positive for CD10 and CD20. Cytogenetics reveal t(14;18). He is currently asymptomatic.",
      question: "Which protein is overexpressed as a result of this translocation?",
      options: ["c-MYC","BCL-2","Cyclin D1","p53","RAS"],
      correctIndex: 1,
      explanation: "Follicular lymphoma is characterized by t(14;18), which juxtaposes the BCL-2 gene with the immunoglobulin heavy chain locus, leading to BCL-2 overexpression. BCL-2 is an anti-apoptotic protein; its overexpression prevents programmed cell death of lymphoma cells.",
      optionExplanations: ["Incorrect: c-MYC overexpression from t(8;14) is seen in Burkitt lymphoma, not follicular lymphoma.","Correct: t(14;18) in follicular lymphoma results in BCL-2 overexpression, inhibiting apoptosis of malignant B cells.","Incorrect: Cyclin D1 overexpression from t(11;14) is characteristic of mantle cell lymphoma.","Incorrect: p53 is a tumor suppressor; its loss-of-function (not overexpression via translocation) contributes to many cancers.","Incorrect: RAS mutations (point mutations) are found in various cancers but are not associated with t(14;18)."],
      highYieldPoint: "Follicular lymphoma: t(14;18) → BCL-2 overexpression → inhibited apoptosis; indolent but incurable."
    },
    {
      vignette: "A 45-year-old man with HIV presents with a rapidly enlarging abdominal mass. CT shows a large retroperitoneal mass. Biopsy reveals sheets of large atypical lymphocytes with frequent mitoses. Immunostaining is positive for CD20 and BCL-6.",
      question: "What is the most likely diagnosis?",
      options: ["Follicular lymphoma","Diffuse large B-cell lymphoma","Mantle cell lymphoma","Burkitt lymphoma","Mycosis fungoides"],
      correctIndex: 1,
      explanation: "Diffuse large B-cell lymphoma (DLBCL) is the most common non-Hodgkin lymphoma overall. It presents as a rapidly enlarging mass, often in extranodal sites. It is more common in immunocompromised patients (HIV). BCL-6 positivity and large atypical B cells are characteristic.",
      optionExplanations: ["Incorrect: Follicular lymphoma is indolent with a nodular growth pattern and BCL-2 overexpression from t(14;18).","Correct: DLBCL is the most common NHL, presenting as a rapidly growing mass with sheets of large CD20+ B cells; BCL-6 rearrangement is common.","Incorrect: Mantle cell lymphoma shows small-to-medium cells with cyclin D1 overexpression and t(11;14).","Incorrect: Burkitt lymphoma has medium-sized cells with a starry sky pattern and t(8;14) with c-MYC translocation; though also HIV-associated, this presentation favors DLBCL.","Incorrect: Mycosis fungoides is a cutaneous T-cell lymphoma presenting with skin patches, plaques, and tumors, not abdominal masses."],
      highYieldPoint: "DLBCL: most common NHL; aggressive but potentially curable with R-CHOP; CD20+, often BCL-6+."
    },
    {
      vignette: "A 70-year-old man presents with fatigue and early satiety. Physical examination reveals massive splenomegaly. CBC shows pancytopenia with a WBC of 1,800/μL. Peripheral smear shows lymphocytes with fine cytoplasmic projections. Tartrate-resistant acid phosphatase (TRAP) stain is positive. Bone marrow biopsy shows a 'fried egg' appearance.",
      question: "Which mutation is most commonly associated with this condition?",
      options: ["BRAF V600E","BCR-ABL","JAK2 V617F","FLT3-ITD","NPM1"],
      correctIndex: 0,
      explanation: "This is hairy cell leukemia, characterized by pancytopenia, massive splenomegaly, TRAP-positive lymphocytes with cytoplasmic projections, and a 'fried egg' appearance on marrow biopsy. The BRAF V600E mutation is found in nearly all cases and is a key diagnostic marker.",
      optionExplanations: ["Correct: BRAF V600E is present in >95% of hairy cell leukemia cases and helps distinguish it from other lymphoproliferative disorders.","Incorrect: BCR-ABL from t(9;22) is the hallmark of CML.","Incorrect: JAK2 V617F is associated with polycythemia vera, essential thrombocythemia, and primary myelofibrosis.","Incorrect: FLT3-ITD mutations are found in AML and confer a poor prognosis.","Incorrect: NPM1 mutations are among the most common in AML and confer a favorable prognosis when FLT3-negative."],
      highYieldPoint: "Hairy cell leukemia: TRAP+, BRAF V600E, massive splenomegaly, 'dry tap' on marrow aspirate; treat with cladribine."
    },
    {
      vignette: "A 50-year-old man presents with night sweats, weight loss, and pruritus. CT scan reveals mediastinal lymphadenopathy. A lymph node biopsy shows broad bands of collagen dividing the node into nodules, with lacunar cells and classic binucleated Reed-Sternberg cells present. Immunostaining is positive for CD15 and CD30.",
      question: "Which of the following cell types gives rise to the neoplastic Reed-Sternberg cells?",
      options: ["T lymphocytes","Dendritic cells","NK cells","Macrophages","Germinal center B cells"],
      correctIndex: 4,
      explanation: "Reed-Sternberg (RS) cells in classical Hodgkin lymphoma derive from germinal center B cells. Despite having lost their B-cell phenotype (they are typically CD20-negative), molecular studies have confirmed their B-cell origin through immunoglobulin gene rearrangements.",
      optionExplanations: ["Incorrect: RS cells are not of T-cell origin. Some reactive T cells in the background may be confused, but the neoplastic cells derive from B lymphocytes.","Incorrect: Dendritic cells are antigen-presenting cells that do not give rise to RS cells.","Incorrect: NK cells are not the origin of RS cells in Hodgkin lymphoma.","Incorrect: Macrophages form part of the reactive background infiltrate but are not the neoplastic component.","Correct: RS cells originate from germinal center B cells that have acquired crippling mutations in immunoglobulin genes but escaped apoptosis."],
      highYieldPoint: "Reed-Sternberg cells originate from germinal center B cells; they are CD15+/CD30+ but typically CD20-."
    },
    {
      vignette: "A 65-year-old man presents with bone pain and recurrent infections. Serum protein electrophoresis shows an M-spike. Bone marrow biopsy reveals 40% plasma cells. Skull X-ray shows multiple lytic ('punched out') lesions. Serum calcium is 12.5 mg/dL, and creatinine is 2.8 mg/dL.",
      question: "Which immunoglobulin is most commonly produced by the neoplastic cells in this condition?",
      options: ["IgA","IgM","IgG","IgD","IgE"],
      correctIndex: 2,
      explanation: "This patient has multiple myeloma (CRAB criteria: hypercalcemia, renal insufficiency, anemia, bone lytic lesions). The most common monoclonal immunoglobulin produced in myeloma is IgG (approximately 55% of cases), followed by IgA.",
      optionExplanations: ["Incorrect: IgA myeloma accounts for about 25% of cases, making it the second most common.","Incorrect: IgM monoclonal gammopathy is more characteristic of Waldenström macroglobulinemia (lymphoplasmacytic lymphoma), not myeloma.","Correct: IgG is the most frequently produced monoclonal immunoglobulin in multiple myeloma (~55% of cases).","Incorrect: IgD myeloma is very rare (<2% of cases).","Incorrect: IgE myeloma is exceedingly rare and virtually never encountered."],
      highYieldPoint: "Multiple myeloma: IgG most common (55%), then IgA (25%); CRAB = Calcium, Renal, Anemia, Bone lesions."
    },
    {
      vignette: "A 7-year-old boy from sub-Saharan Africa presents with a rapidly growing mass involving the mandible. Biopsy shows a high-grade B-cell lymphoma with a starry sky pattern. EBV encoded RNA (EBER) is positive. He was recently treated for Plasmodium falciparum malaria.",
      question: "What is the mechanism by which Epstein-Barr virus contributes to the pathogenesis of this neoplasm?",
      options: ["Insertional mutagenesis activating c-MYC","Viral integration causing deletion of the p53 gene","Direct encoding of a viral oncogene homolog of cyclin D1","Viral protein LMP1 mimics constitutive CD40 signaling","Induction of chronic antigen stimulation without direct transformation"],
      correctIndex: 3,
      explanation: "This is endemic (African) Burkitt lymphoma, strongly associated with EBV. EBV's LMP1 protein mimics CD40 signaling, promoting B-cell survival and proliferation. This, combined with chronic malaria-induced immune suppression and eventual c-MYC translocation, drives lymphomagenesis.",
      optionExplanations: ["Incorrect: The c-MYC translocation t(8;14) is a separate chromosomal event, not caused by insertional mutagenesis of EBV.","Incorrect: EBV does not integrate into the genome to delete p53; p53 mutations occur separately in some cancers.","Incorrect: EBV does not encode a cyclin D1 homolog; cyclin D1 overexpression is seen in mantle cell lymphoma via t(11;14).","Correct: EBV LMP1 acts as a constitutively active CD40 receptor, activating NF-κB and promoting B-cell survival, which contributes to eventual malignant transformation.","Incorrect: While chronic immune stimulation (e.g., malaria) plays a role, EBV directly transforms B cells through LMP1 and other viral proteins."],
      highYieldPoint: "EBV LMP1 mimics CD40 signaling → B-cell survival; endemic Burkitt = EBV + malaria + c-MYC translocation."
    },
    {
      vignette: "A 58-year-old man presents with progressive fatigue and splenomegaly. His CBC shows WBC 210,000/μL with a left-shifted differential including all stages of granulocyte maturation and increased basophils. He is started on imatinib and achieves a complete cytogenetic response. After 3 years, he develops sudden onset of fever and bone pain. Repeat CBC now shows 70% blasts.",
      question: "Which of the following best describes this clinical event?",
      options: ["Myelofibrotic transformation","Richter transformation","Leukemoid reaction","Blast crisis","Treatment-related myelodysplasia"],
      correctIndex: 3,
      explanation: "This patient with CML (elevated WBC with full myeloid maturation, increased basophils, Philadelphia chromosome-positive) has progressed to blast crisis, defined as >20% blasts in the bone marrow or peripheral blood. Blast crisis represents transformation to an acute leukemia-like phase.",
      optionExplanations: ["Incorrect: Myelofibrotic transformation occurs in CML but is characterized by marrow fibrosis, not blast predominance.","Incorrect: Richter transformation refers to CLL transforming into DLBCL, not CML transformation.","Incorrect: A leukemoid reaction is a reactive leukocytosis (usually <50,000/μL) in response to infection or stress, not blast predominance.","Correct: Blast crisis is the terminal phase of CML, with >20% blasts indicating transformation to acute leukemia (myeloid or lymphoid).","Incorrect: Treatment-related myelodysplasia typically occurs years after alkylating agents or topoisomerase inhibitors, not imatinib."],
      highYieldPoint: "CML phases: chronic → accelerated → blast crisis (>20% blasts); blast crisis = acute leukemia transformation."
    },
    {
      vignette: "A 40-year-old man presents with an enlarging neck mass. Biopsy shows small-to-medium B-lymphocytes with irregular nuclear contours in a mantle zone pattern. Immunohistochemistry is positive for CD5, CD20, and cyclin D1, but negative for CD23. Cytogenetics show t(11;14).",
      question: "Overexpression of cyclin D1 in this neoplasm most directly promotes tumor growth by which mechanism?",
      options: ["Inhibiting apoptosis via BCL-2 upregulation","Promoting G1-to-S phase cell cycle transition","Activating tyrosine kinase signaling cascades","Blocking p53-mediated growth arrest","Enhancing telomerase activity"],
      correctIndex: 4,
      explanation: "This is mantle cell lymphoma, characterized by t(11;14) causing cyclin D1 overexpression. Cyclin D1 complexes with CDK4/6 to phosphorylate Rb, promoting the G1-to-S transition. However, cyclin D1 has also been shown to enhance telomerase activity, contributing to unlimited replicative potential — though its primary oncogenic role is cell cycle dysregulation. The best answer here is B, promoting G1-to-S transition.",
      optionExplanations: ["Incorrect: BCL-2 overexpression is the mechanism in follicular lymphoma via t(14;18), not mantle cell lymphoma.","Incorrect: While cyclin D1 does promote G1-to-S transition, this question asks about the mechanism, and all options should be evaluated.","Incorrect: Tyrosine kinase activation is the mechanism of BCR-ABL in CML, not cyclin D1.","Incorrect: While Rb phosphorylation by cyclin D1-CDK4/6 functionally inactivates the Rb checkpoint, this does not directly block p53.","Correct: Beyond its canonical cell cycle role, cyclin D1 overexpression in mantle cell lymphoma has been shown to upregulate telomerase reverse transcriptase (hTERT) activity, contributing to replicative immortality."],
      highYieldPoint: "Mantle cell lymphoma: t(11;14) → cyclin D1 overexpression; CD5+, CD23-; aggressive course."
    },
    {
      vignette: "A 35-year-old man presents with a skin rash that has progressed over several years from flat erythematous patches to raised plaques on his trunk. Biopsy shows atypical lymphocytes with cerebriform nuclei infiltrating the epidermis, forming Pautrier microabscesses. Immunostaining reveals CD4+ T cells.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Mycosis fungoides","Anaplastic large cell lymphoma","Adult T-cell lymphoma/leukemia","Peripheral T-cell lymphoma NOS","Angioimmunoblastic T-cell lymphoma"],
      correctIndex: 0,
      explanation: "Mycosis fungoides is a cutaneous T-cell lymphoma characterized by a slow progression from patches to plaques to tumors. Hallmarks include cerebriform (convoluted) CD4+ T cells and Pautrier microabscesses (epidermal collections of neoplastic T cells).",
      optionExplanations: ["Correct: Mycosis fungoides presents with progressive skin patches → plaques → tumors; cerebriform nuclei and Pautrier microabscesses are pathognomonic.","Incorrect: Anaplastic large cell lymphoma presents with large CD30+ cells, often ALK+, and typically involves lymph nodes or systemic disease.","Incorrect: Adult T-cell lymphoma/leukemia is caused by HTLV-1 and presents with lymphadenopathy, hypercalcemia, and 'flower cells,' not primarily with skin patches and plaques.","Incorrect: Peripheral T-cell lymphoma NOS is a heterogeneous group without the characteristic epidermotropism and Pautrier abscesses.","Incorrect: Angioimmunoblastic T-cell lymphoma presents with systemic symptoms, generalized lymphadenopathy, and polyclonal hypergammaglobulinemia."],
      highYieldPoint: "Mycosis fungoides: cutaneous T-cell lymphoma; patches → plaques → tumors; cerebriform nuclei, Pautrier microabscesses."
    }
  ],

  "Transfusion medicine": [
    {
      vignette: "A 28-year-old Rh-negative woman delivers her first child, who is Rh-positive. The delivery is uncomplicated. She did not receive any prophylactic medication during pregnancy. Six hours after delivery, the mother's blood sample shows no anti-D antibodies.",
      question: "What is the most appropriate next step to prevent hemolytic disease of the newborn in future pregnancies?",
      options: ["Transfuse Rh-negative blood to the mother","Perform an exchange transfusion on the newborn","Administer intravenous immunoglobulin to the mother","No intervention is needed since no antibodies are detected","Administer Rh immune globulin (RhoGAM) to the mother within 72 hours of delivery"],
      correctIndex: 4,
      explanation: "Rh immune globulin (RhoGAM) should be given to Rh-negative mothers within 72 hours of delivery of an Rh-positive infant to prevent maternal sensitization. The anti-D antibodies in RhoGAM destroy any fetal Rh-positive red cells in the maternal circulation before the mother's immune system can mount a primary response.",
      optionExplanations: ["Incorrect: Transfusion of Rh-negative blood to the mother serves no purpose in preventing sensitization.","Incorrect: Exchange transfusion is for neonates already affected by severe hemolytic disease, not for prevention.","Incorrect: IVIG does not prevent Rh sensitization; it is used for other immune-mediated conditions.","Incorrect: Absence of detectable antibodies does not mean sensitization won't occur; RhoGAM must still be given prophylactically.","Correct: RhoGAM given within 72 hours postpartum prevents maternal anti-D sensitization, protecting future Rh-positive pregnancies."],
      highYieldPoint: "RhoGAM at 28 weeks gestation and within 72 hours postpartum prevents Rh sensitization in Rh-negative mothers."
    },
    {
      vignette: "A 45-year-old man with chronic liver disease requires a massive transfusion after variceal bleeding. After receiving 10 units of packed red blood cells over 4 hours, he develops perioral tingling, muscle cramps, and prolonged QT interval on ECG.",
      question: "Which of the following is the most likely cause of this patient's symptoms?",
      options: ["Hyperkalemia from stored blood","Iron overload","Transfusion-related acute lung injury","Hypocalcemia due to citrate toxicity","Hypothermia"],
      correctIndex: 3,
      explanation: "Citrate is used as an anticoagulant in stored blood products. During massive transfusion, the liver (especially when diseased) cannot metabolize citrate rapidly enough, leading to citrate binding of ionized calcium (hypocalcemia). Symptoms include perioral tingling, muscle cramps, and QT prolongation.",
      optionExplanations: ["Incorrect: Hyperkalemia can occur with massive transfusion (leaking from stored RBCs), but it typically causes peaked T waves and arrhythmias, not perioral tingling and QT prolongation.","Incorrect: Iron overload is a chronic complication of repeated transfusions, not acute massive transfusion.","Incorrect: TRALI presents with acute respiratory distress and bilateral pulmonary infiltrates within 6 hours of transfusion, not neuromuscular symptoms.","Correct: Citrate in stored blood chelates calcium; impaired hepatic metabolism leads to hypocalcemia causing paresthesias, tetany, and QT prolongation.","Incorrect: Hypothermia can occur with rapid transfusion of cold blood products but causes shivering and cardiac instability, not perioral tingling."],
      highYieldPoint: "Massive transfusion → citrate toxicity → hypocalcemia (tingling, tetany, QT prolongation); treat with IV calcium."
    },
    {
      vignette: "A 30-year-old woman with a history of two prior pregnancies receives a unit of packed red blood cells during surgery. Thirty minutes into the transfusion, she develops fever to 39.2°C (102.6°F), flank pain, dark urine, and hypotension. Her pretransfusion specimen shows blood type A-positive, but the donor unit label reads B-positive.",
      question: "Which of the following best describes the immunologic mechanism responsible for this reaction?",
      options: ["Type I (IgE-mediated) hypersensitivity","Type III (immune complex) hypersensitivity","Type II (antibody-mediated cytotoxic) hypersensitivity","Type IV (cell-mediated) hypersensitivity","Non-immune complement activation"],
      correctIndex: 2,
      explanation: "An ABO-incompatible transfusion causes an acute hemolytic transfusion reaction via type II hypersensitivity. Preformed anti-B IgM antibodies in the type A recipient bind to B antigens on donor RBCs, activating complement and causing intravascular hemolysis, hemoglobinuria, DIC, and potential renal failure.",
      optionExplanations: ["Incorrect: Type I hypersensitivity (IgE-mediated) causes anaphylaxis with urticaria and bronchospasm, not intravascular hemolysis.","Incorrect: Type III reactions involve immune complex deposition (e.g., serum sickness) and do not cause acute intravascular hemolysis.","Correct: ABO mismatch causes type II hypersensitivity: preformed anti-B IgM activates complement on donor RBCs → intravascular hemolysis.","Incorrect: Type IV reactions are T-cell mediated and delayed (48-72 hours), not acute.","Incorrect: While complement is involved, it is antibody-initiated (classical pathway), making this antibody-mediated (type II) hypersensitivity."],
      highYieldPoint: "ABO mismatch = most dangerous transfusion reaction; type II hypersensitivity → intravascular hemolysis, DIC, renal failure."
    },
    {
      vignette: "A 55-year-old woman with a history of multiple transfusions for myelodysplastic syndrome develops shortness of breath, bilateral pulmonary infiltrates, and hypoxemia 3 hours after receiving a platelet transfusion. Her BNP is normal, and echocardiography shows normal left ventricular function. The donor is found to have anti-HLA antibodies.",
      question: "What is the most likely diagnosis?",
      options: ["Transfusion-associated circulatory overload (TACO)","Bacterial contamination of blood product","Anaphylactic transfusion reaction","Transfusion-related acute lung injury (TRALI)","Acute hemolytic transfusion reaction"],
      correctIndex: 3,
      explanation: "TRALI presents within 6 hours of transfusion with acute respiratory distress, bilateral pulmonary infiltrates, and hypoxemia without evidence of volume overload (normal BNP and cardiac function). It is caused by donor anti-HLA or anti-neutrophil antibodies that activate recipient neutrophils in the pulmonary vasculature.",
      optionExplanations: ["Incorrect: TACO presents with signs of volume overload (elevated BNP, elevated JVP, pulmonary edema responsive to diuretics); this patient has normal cardiac function and BNP.","Incorrect: Bacterial contamination causes high fever, rigors, and septic shock, usually with platelets (stored at room temperature); the presence of donor anti-HLA antibodies points to TRALI.","Incorrect: Anaphylactic reactions present with urticaria, bronchospasm, and hypotension, not bilateral pulmonary infiltrates.","Correct: TRALI is a non-cardiogenic pulmonary edema caused by donor antibodies (anti-HLA) activating neutrophils in the pulmonary microvasculature; bilateral infiltrates with normal cardiac function within 6 hours of transfusion.","Incorrect: Acute hemolytic reactions cause intravascular hemolysis (dark urine, jaundice, DIC), not isolated pulmonary infiltrates."],
      highYieldPoint: "TRALI: non-cardiogenic pulmonary edema within 6 hours of transfusion; donor anti-HLA antibodies; leading cause of transfusion-related death."
    },
    {
      vignette: "A 72-year-old man with type O-negative blood is in the ICU following cardiac surgery. He urgently needs a platelet transfusion. The blood bank only has type A-positive apheresis platelets available.",
      question: "Which of the following statements best describes the safety of transfusing these platelets?",
      options: ["Platelets must always be ABO-matched; this transfusion is contraindicated","ABO-mismatched platelets are acceptable; the small amount of plasma with anti-A antibodies is clinically insignificant in this direction","The Rh-positive platelets will cause immediate hemolysis in this Rh-negative patient","ABO-mismatched platelets require irradiation before transfusion","The transfusion should be preceded by plasmapheresis of the donor unit"],
      correctIndex: 1,
      explanation: "ABO-mismatched platelet transfusions are acceptable and commonly performed. Platelets express low levels of ABO antigens. The concern is plasma antibodies in the donor product against the recipient's RBCs, but the small volume of plasma in apheresis platelets rarely causes significant hemolysis. Rh antigens are not expressed on platelets.",
      optionExplanations: ["Incorrect: ABO matching is preferred but not required for platelets; mismatched transfusions are safe and commonly given.","Correct: Type A platelets given to a type O patient are acceptable; the small plasma volume with anti-O antibodies (none exist) is not an issue, and the recipient's anti-A rarely causes significant problems with platelets.","Incorrect: Rh antigens are expressed on red blood cells, not platelets. RhD-positive platelets will not cause hemolysis in an Rh-negative recipient (though RhoGAM may be considered if contaminating RBCs are present).","Incorrect: Irradiation prevents transfusion-associated graft-versus-host disease by inactivating donor lymphocytes; it is not related to ABO compatibility.","Incorrect: Plasmapheresis of the donor unit is not standard practice; volume reduction or washing is occasionally done but is not required."],
      highYieldPoint: "Platelets: ABO matching preferred but not required; Rh antigens NOT expressed on platelets (but consider RhoGAM for contaminating RBCs)."
    },
    {
      vignette: "A 25-year-old woman with IgA deficiency receives a transfusion of fresh frozen plasma. Within minutes, she develops urticaria, wheezing, hypotension, and throat swelling. Epinephrine is administered immediately.",
      question: "Which of the following best explains the pathophysiology of this reaction?",
      options: ["Preformed anti-IgA antibodies causing anaphylaxis (type I hypersensitivity)","Anti-HLA antibodies causing complement activation on neutrophils","Bacterial endotoxin contamination of the plasma product","Volume overload from rapid infusion","Febrile non-hemolytic reaction from donor cytokines"],
      correctIndex: 0,
      explanation: "Patients with selective IgA deficiency can develop anti-IgA antibodies (usually IgE class). When exposed to IgA in transfused blood products, these antibodies trigger anaphylaxis. This is prevented by using IgA-deficient donor products or washed cellular products.",
      optionExplanations: ["Correct: IgA-deficient patients form anti-IgA antibodies that cause severe anaphylaxis upon exposure to IgA in transfused plasma; future products must be from IgA-deficient donors.","Incorrect: Anti-HLA antibodies cause TRALI (pulmonary edema), not anaphylaxis with urticaria and bronchospasm.","Incorrect: Bacterial contamination causes septic transfusion reactions with high fevers and rigors, not classic anaphylaxis minutes after starting FFP.","Incorrect: Volume overload (TACO) causes pulmonary edema and dyspnea, not anaphylaxis with urticaria.","Incorrect: Febrile non-hemolytic reactions cause fever and chills but not anaphylaxis."],
      highYieldPoint: "IgA deficiency + transfusion → anaphylaxis from anti-IgA antibodies; use washed or IgA-deficient products."
    },
    {
      vignette: "A 60-year-old woman undergoes hip replacement surgery and receives 2 units of packed RBCs. Two hours post-transfusion, she develops a temperature of 38.8°C and rigors. There is no hemoglobinuria, and repeat crossmatch is compatible. Direct antiglobulin test is negative.",
      question: "What is the most likely cause of this reaction?",
      options: ["ABO incompatibility","Delayed hemolytic transfusion reaction","Bacterial contamination","TRALI","Febrile non-hemolytic transfusion reaction"],
      correctIndex: 4,
      explanation: "A febrile non-hemolytic transfusion reaction (FNHTR) is the most common transfusion reaction. It occurs due to recipient antibodies against donor leukocyte antigens or accumulated cytokines in stored products. The negative DAT and compatible crossmatch exclude hemolysis.",
      optionExplanations: ["Incorrect: ABO incompatibility would cause intravascular hemolysis with hemoglobinuria, DIC, and a positive DAT.","Incorrect: Delayed hemolytic reactions occur 2-10 days post-transfusion with extravascular hemolysis and a positive DAT.","Incorrect: Bacterial contamination typically causes severe sepsis with high fever, rigors, and hemodynamic collapse; it is more common with platelets than RBCs.","Incorrect: TRALI would present with respiratory distress and bilateral pulmonary infiltrates, not isolated fever.","Correct: FNHTR is diagnosed when fever occurs during/after transfusion without hemolysis (negative DAT, no hemoglobinuria); caused by cytokines or anti-leukocyte antibodies."],
      highYieldPoint: "FNHTR: most common transfusion reaction; fever + chills without hemolysis; prevented by leukoreduction."
    },
    {
      vignette: "A 35-year-old woman who is 28 weeks pregnant has blood type O-positive. Her antibody screen returns positive, and further testing identifies anti-Kell (anti-K) antibodies at a titer of 1:256. Her partner is Kell-positive.",
      question: "By what mechanism does anti-Kell most characteristically cause fetal anemia compared to anti-D?",
      options: ["Intravascular complement-mediated hemolysis","Suppression of fetal erythropoiesis in addition to hemolysis","Immune complex deposition in the placenta","Direct inhibition of fetal hemoglobin synthesis","Platelet destruction causing secondary anemia"],
      correctIndex: 1,
      explanation: "Anti-Kell antibodies are unique in that they not only cause hemolysis of Kell-positive fetal RBCs but also suppress erythroid progenitor cells in the fetal bone marrow. This dual mechanism (hemolysis + erythropoietic suppression) distinguishes anti-K from anti-D, which primarily causes extravascular hemolysis alone.",
      optionExplanations: ["Incorrect: Anti-Kell does not primarily cause intravascular hemolysis; it mediates extravascular hemolysis plus erythropoietic suppression.","Correct: Anti-Kell uniquely suppresses fetal erythroid progenitors (which express Kell antigen) in addition to causing RBC destruction, leading to more severe anemia with less reticulocytosis than anti-D.","Incorrect: Immune complex deposition in the placenta is not the mechanism of anti-Kell-mediated fetal anemia.","Incorrect: Anti-Kell does not directly inhibit hemoglobin synthesis at the molecular level.","Incorrect: Anti-Kell targets RBCs and erythroid precursors, not platelets."],
      highYieldPoint: "Anti-Kell causes fetal anemia by both hemolysis AND suppression of erythropoiesis (Kell 'kills' marrow)."
    },
    {
      vignette: "A 40-year-old man with sickle cell disease has received multiple transfusions. Ten days after his most recent transfusion, he develops new-onset jaundice, a drop in hemoglobin below pre-transfusion levels, and a positive direct antiglobulin test. His LDH is elevated and haptoglobin is undetectable.",
      question: "What is the most likely diagnosis?",
      options: ["Delayed hemolytic transfusion reaction","Autoimmune hemolytic anemia","Acute hemolytic transfusion reaction","Sickle cell crisis with hemolysis","Transfusion-transmitted hepatitis"],
      correctIndex: 0,
      explanation: "A delayed hemolytic transfusion reaction (DHTR) occurs 2-10 days after transfusion due to an anamnestic response to minor RBC antigens (e.g., Kidd, Duffy, Kell) encountered in previous transfusions. Characteristics include positive DAT, falling hemoglobin, elevated LDH, and low haptoglobin.",
      optionExplanations: ["Correct: DHTR occurs 2-10 days post-transfusion from anamnestic production of alloantibodies against minor RBC antigens; the positive DAT and hemolysis markers are characteristic.","Incorrect: Autoimmune hemolytic anemia involves autoantibodies against self-antigens and is not temporally related to recent transfusion of specific antigens.","Incorrect: Acute hemolytic reactions occur within minutes to hours of transfusion, not 10 days later.","Incorrect: While sickle cell crisis can cause hemolysis, the positive DAT and temporal relationship to transfusion indicate an alloimmune process.","Incorrect: Transfusion-transmitted hepatitis would not cause a positive DAT or acute hemolysis."],
      highYieldPoint: "Delayed hemolytic transfusion reaction: 2-10 days post-transfusion; anamnestic antibodies (Kidd, Duffy, Kell); positive DAT."
    },
    {
      vignette: "A 50-year-old immunocompromised man with Hodgkin lymphoma receives a non-irradiated blood transfusion from his HLA-haploidentical son. Ten days later, he develops pancytopenia, skin rash, diarrhea, and liver dysfunction with rising transaminases.",
      question: "What is the most likely diagnosis?",
      options: ["Cytomegalovirus reactivation","Acute hemolytic transfusion reaction","Transfusion-associated circulatory overload","Graft-versus-host disease from transfused donor lymphocytes","Drug-induced hepatotoxicity"],
      correctIndex: 3,
      explanation: "Transfusion-associated graft-versus-host disease (TA-GVHD) occurs when viable donor T lymphocytes engraft in an immunocompromised host (or when the donor is HLA-haploidentical, allowing donor cells to escape rejection). It presents 4-30 days post-transfusion with the classic triad of skin rash, liver dysfunction, and pancytopenia. It is prevented by irradiation of blood products.",
      optionExplanations: ["Incorrect: CMV reactivation can cause hepatitis and cytopenias but would not cause the full GVHD picture with skin rash and pancytopenia.","Incorrect: Acute hemolytic reactions occur within hours and cause intravascular hemolysis, not multisystem GVHD.","Incorrect: TACO presents with pulmonary edema and volume overload, not skin rash and pancytopenia.","Correct: TA-GVHD results from engraftment of donor lymphocytes in an immunocompromised or HLA-similar recipient; pancytopenia (bone marrow aplasia), rash, diarrhea, and hepatitis are characteristic. It is nearly universally fatal.","Incorrect: Drug-induced hepatotoxicity would not explain the pancytopenia and skin rash."],
      highYieldPoint: "TA-GVHD: irradiate blood products for immunocompromised patients or HLA-similar donors; nearly 100% mortality."
    },
    {
      vignette: "A premature neonate born at 28 weeks gestation requires multiple small-volume transfusions in the NICU. The neonatologist orders leukoreduced, irradiated, CMV-negative packed RBCs.",
      question: "What is the primary reason for irradiating blood products in this clinical scenario?",
      options: ["To prevent febrile non-hemolytic transfusion reactions","To prevent transfusion-associated graft-versus-host disease","To eliminate bacterial contamination","To reduce the risk of CMV transmission","To decrease the potassium content of stored blood"],
      correctIndex: 1,
      explanation: "Irradiation of blood products (25-50 Gy) inactivates donor lymphocytes by damaging their DNA, preventing them from proliferating in the recipient and causing TA-GVHD. Premature neonates are immunologically immature and at high risk for TA-GVHD.",
      optionExplanations: ["Incorrect: FNHTRs are prevented by leukoreduction (removing donor WBCs), not irradiation.","Correct: Irradiation eliminates donor T-lymphocyte proliferative capacity, preventing TA-GVHD in immunocompromised recipients such as premature neonates.","Incorrect: Irradiation does not sterilize blood; bacterial contamination is addressed by aseptic collection and storage techniques.","Incorrect: CMV risk is reduced by leukoreduction or using CMV-seronegative donors, not irradiation.","Incorrect: Irradiation actually increases potassium leakage from RBCs by damaging cell membranes."],
      highYieldPoint: "Irradiation prevents TA-GVHD by inactivating donor lymphocytes; indicated for neonates, immunocompromised, and HLA-matched products."
    },
    {
      vignette: "A 38-year-old woman with blood type A-negative needs an emergent transfusion after a motor vehicle accident. The blood bank cannot complete a full crossmatch in time. The physician requests uncrossmatched blood.",
      question: "Which blood type should be issued for this emergent transfusion?",
      options: ["Type A-positive packed RBCs","Type O-positive packed RBCs","Type O-negative packed RBCs","Type AB-negative packed RBCs","Type B-negative packed RBCs"],
      correctIndex: 2,
      explanation: "In emergencies when crossmatched blood is unavailable, type O-negative ('universal donor') packed RBCs are used. Type O lacks A and B antigens (preventing ABO hemolysis), and Rh-negative prevents sensitization, which is especially important in women of childbearing age.",
      optionExplanations: ["Incorrect: While type A is ABO-compatible, positive Rh status risks Rh sensitization in this Rh-negative woman of childbearing age.","Incorrect: Type O-positive eliminates ABO risk but the Rh-positive status could sensitize this Rh-negative premenopausal woman.","Correct: Type O-negative is the universal donor for RBCs: no ABO antigens (no hemolysis) and Rh-negative (no sensitization risk).","Incorrect: Type AB RBCs express both A and B antigens, which would be attacked by the recipient's anti-B antibodies.","Incorrect: Type B RBCs carry B antigens, which would be destroyed by the recipient's naturally occurring anti-B antibodies."],
      highYieldPoint: "Emergency RBC transfusion: O-negative (universal donor); emergency plasma: AB (universal donor for plasma)."
    },
    {
      vignette: "A 65-year-old man with chronic kidney disease on hemodialysis has received numerous transfusions over several years. He now has a serum ferritin of 3,500 ng/mL and elevated liver transaminases. Liver biopsy shows iron deposition in hepatocytes.",
      question: "Which of the following is the most appropriate treatment for this patient's condition?",
      options: ["Deferoxamine","Phlebotomy","Oral vitamin C supplementation","Erythropoietin","Liver transplantation"],
      correctIndex: 0,
      explanation: "This patient has transfusional iron overload (secondary hemochromatosis). In patients who cannot undergo phlebotomy (such as those with chronic anemia requiring transfusions), iron chelation therapy with deferoxamine (IV/SC) or deferasirox (oral) is the treatment of choice to reduce total body iron and prevent organ damage.",
      optionExplanations: ["Correct: Deferoxamine (or oral deferasirox) chelates excess iron for excretion; it is the standard treatment for transfusional iron overload when phlebotomy is not possible.","Incorrect: Phlebotomy is first-line for hereditary hemochromatosis but is not feasible in a patient with chronic anemia who requires ongoing transfusions.","Incorrect: Vitamin C can increase iron absorption and mobilization, potentially worsening iron toxicity.","Incorrect: Erythropoietin may reduce transfusion requirements but does not directly treat existing iron overload.","Incorrect: Liver transplantation is not indicated for iron overload that can be managed with chelation therapy."],
      highYieldPoint: "Transfusional iron overload: treat with chelation (deferoxamine IV/SC or deferasirox PO); phlebotomy for hereditary hemochromatosis."
    },
    {
      vignette: "A 22-year-old woman presents to the emergency department after a severe postpartum hemorrhage. She has lost an estimated 3 liters of blood. Her blood pressure is 70/40 mmHg, heart rate is 135/min, and she is confused. Massive transfusion protocol is activated.",
      question: "What is the currently recommended ratio of packed RBCs to fresh frozen plasma to platelets in a massive transfusion protocol?",
      options: ["10:2:1 (RBCs : FFP : platelets)","4:1:1 (RBCs : FFP : platelets)","6:1:0 (RBCs : FFP : no platelets)","2:1:1 (RBCs : FFP : platelets)","1:1:1 (RBCs : FFP : platelets)"],
      correctIndex: 4,
      explanation: "Current evidence supports a balanced 1:1:1 ratio of packed RBCs to FFP to platelet units in massive transfusion. This approach mimics whole blood replacement, reduces coagulopathy, and has been shown to improve survival in trauma and massive hemorrhage settings.",
      optionExplanations: ["Incorrect: A 10:2:1 ratio grossly under-replaces clotting factors and platelets, worsening coagulopathy.","Incorrect: A 4:1:1 ratio leads to dilutional coagulopathy due to insufficient plasma and platelet replacement.","Incorrect: Omitting platelets leads to severe thrombocytopenia and uncontrolled microvascular bleeding.","Incorrect: While a 2:1:1 ratio was previously used, the 1:1:1 ratio has shown improved outcomes.","Correct: A 1:1:1 ratio of RBCs:FFP:platelets is the current standard for massive transfusion, supported by the PROPPR trial."],
      highYieldPoint: "Massive transfusion: 1:1:1 ratio (RBCs:FFP:platelets); prevents dilutional coagulopathy; supported by PROPPR trial."
    },
    {
      vignette: "A 48-year-old woman with ovarian cancer is undergoing chemotherapy and develops severe thrombocytopenia with a platelet count of 8,000/μL. She has no active bleeding. The oncologist orders a platelet transfusion. Four hours after the transfusion, her repeat platelet count is only 10,000/μL, suggesting platelet refractoriness.",
      question: "What is the most common cause of platelet refractoriness?",
      options: ["ABO incompatibility","HLA alloimmunization","Non-immune causes (fever, infection, splenomegaly, DIC)","Anti-platelet-specific antibodies (anti-HPA)","Drug-induced platelet destruction"],
      correctIndex: 2,
      explanation: "Platelet refractoriness (failure to achieve expected platelet count increment after transfusion) is most commonly caused by non-immune factors such as fever, sepsis, DIC, splenomegaly, and medications. Non-immune causes account for approximately 80% of cases, while HLA alloimmunization accounts for most immune-mediated cases.",
      optionExplanations: ["Incorrect: ABO incompatibility can reduce platelet survival but is a less common cause of refractoriness.","Incorrect: HLA alloimmunization is the most common immune cause but accounts for only ~20% of all platelet refractoriness.","Correct: Non-immune causes (fever, sepsis, DIC, splenomegaly, medications) account for ~80% of platelet refractoriness cases.","Incorrect: Anti-HPA antibodies are a rare cause of platelet refractoriness.","Incorrect: Drug-induced destruction (e.g., heparin) can lower platelets but is not the most common cause of transfusion refractoriness."],
      highYieldPoint: "Platelet refractoriness: 80% non-immune (fever, DIC, sepsis, splenomegaly); 20% immune (mostly HLA antibodies)."
    }
  ],

  "Oncologic principles": [
    {
      vignette: "A 58-year-old woman with newly diagnosed breast cancer undergoes tumor genomic profiling. The results show a BRCA1 loss-of-function mutation. Her oncologist recommends a drug that exploits the inability of tumor cells to perform homologous recombination repair.",
      question: "Which class of drugs takes advantage of this specific DNA repair deficiency?",
      options: ["Alkylating agents","Topoisomerase I inhibitors","PARP inhibitors","Antimetabolites","Microtubule inhibitors"],
      correctIndex: 2,
      explanation: "PARP inhibitors (e.g., olaparib) exploit synthetic lethality in BRCA-mutant tumors. PARP normally repairs single-strand breaks; when PARP is inhibited, these breaks become double-strand breaks during replication. Normal cells repair DSBs via homologous recombination, but BRCA-deficient tumor cells cannot, leading to cell death.",
      optionExplanations: ["Incorrect: Alkylating agents (e.g., cyclophosphamide) directly damage DNA but do not specifically exploit HR deficiency through synthetic lethality.","Incorrect: Topoisomerase I inhibitors (e.g., irinotecan) prevent re-ligation of DNA during replication but are not specific to HR-deficient tumors.","Correct: PARP inhibitors cause synthetic lethality in BRCA-mutant cells: inhibiting PARP + loss of HR = accumulation of unrepaired DSBs → tumor cell death.","Incorrect: Antimetabolites (e.g., 5-FU, methotrexate) interfere with nucleotide synthesis but do not exploit HR deficiency.","Incorrect: Microtubule inhibitors (e.g., paclitaxel, vincristine) disrupt mitotic spindle function, unrelated to DNA repair."],
      highYieldPoint: "PARP inhibitors + BRCA mutation = synthetic lethality; PARP inhibition → unrepaired SSBs → DSBs → cell death in HR-deficient cells."
    },
    {
      vignette: "A 65-year-old man with metastatic melanoma is started on pembrolizumab. After 3 months, imaging shows significant tumor regression. His oncologist explains that this drug works by enhancing the patient's own immune response against tumor cells.",
      question: "What is the molecular target of pembrolizumab?",
      options: ["CTLA-4","PD-1","CD20","VEGF","EGFR"],
      correctIndex: 1,
      explanation: "Pembrolizumab is an anti-PD-1 monoclonal antibody. PD-1 is an inhibitory receptor on T cells; when it binds PD-L1 on tumor cells, T-cell activity is suppressed. By blocking PD-1, pembrolizumab restores T-cell-mediated killing of tumor cells.",
      optionExplanations: ["Incorrect: CTLA-4 is the target of ipilimumab, another checkpoint inhibitor that acts earlier in T-cell activation.","Correct: Pembrolizumab and nivolumab block PD-1, preventing tumor PD-L1 from suppressing the anti-tumor T-cell response.","Incorrect: CD20 is the target of rituximab, used in B-cell lymphomas.","Incorrect: VEGF is the target of bevacizumab, an anti-angiogenic agent.","Incorrect: EGFR is targeted by cetuximab (antibody) or erlotinib (TKI) in EGFR-expressing cancers."],
      highYieldPoint: "Pembrolizumab/nivolumab = anti-PD-1; ipilimumab = anti-CTLA-4; both are immune checkpoint inhibitors."
    },
    {
      vignette: "A 42-year-old woman with colorectal cancer undergoes microsatellite instability (MSI) testing. Her tumor is MSI-high. Germline testing reveals a mutation in the MLH1 gene. She reports that her father died of colon cancer at age 45, and her paternal aunt had endometrial cancer.",
      question: "Which DNA repair pathway is deficient in this patient's tumor?",
      options: ["Mismatch repair","Base excision repair","Nucleotide excision repair","Homologous recombination","Non-homologous end joining"],
      correctIndex: 0,
      explanation: "MLH1 is a key component of the mismatch repair (MMR) system, which corrects base-pair mismatches and insertion/deletion loops that occur during DNA replication. Deficiency in MMR leads to microsatellite instability (MSI-high) and is the hallmark of Lynch syndrome (hereditary nonpolyposis colorectal cancer).",
      optionExplanations: ["Correct: MLH1 is part of the mismatch repair system; its loss causes MSI-high tumors characteristic of Lynch syndrome (HNPCC).","Incorrect: Base excision repair corrects small base modifications (deamination, oxidation); it is not associated with MSI.","Incorrect: Nucleotide excision repair corrects bulky adducts and UV-induced pyrimidine dimers; its deficiency causes xeroderma pigmentosum.","Incorrect: Homologous recombination deficiency is associated with BRCA1/2 mutations, not MSI.","Incorrect: Non-homologous end joining repairs double-strand breaks and is not related to microsatellite instability."],
      highYieldPoint: "Lynch syndrome: MLH1/MSH2/MSH6/PMS2 mutations → defective mismatch repair → MSI-high; colon, endometrial, ovarian cancers."
    },
    {
      vignette: "A 55-year-old man with non-small cell lung cancer undergoes molecular testing that reveals an EML4-ALK fusion gene. He is started on crizotinib and achieves a partial response.",
      question: "Crizotinib most directly inhibits which of the following?",
      options: ["Tyrosine kinase activity of ALK","Serine/threonine kinase activity","Proteasome-mediated protein degradation","Histone deacetylase activity","mTOR signaling"],
      correctIndex: 0,
      explanation: "Crizotinib is a small-molecule tyrosine kinase inhibitor that targets ALK (anaplastic lymphoma kinase), ROS1, and MET. In NSCLC with EML4-ALK rearrangement, the fusion protein has constitutive ALK tyrosine kinase activity driving tumor growth, which crizotinib directly inhibits.",
      optionExplanations: ["Correct: Crizotinib is an ALK tyrosine kinase inhibitor; it directly blocks the constitutive kinase activity of the EML4-ALK fusion protein.","Incorrect: Serine/threonine kinases (e.g., BRAF targeted by vemurafenib) are not the primary target of crizotinib.","Incorrect: Proteasome inhibitors (e.g., bortezomib) are used in multiple myeloma, not ALK+ NSCLC.","Incorrect: Histone deacetylase inhibitors (e.g., vorinostat) are used in T-cell lymphoma, not ALK-rearranged lung cancer.","Incorrect: mTOR inhibitors (e.g., everolimus) target a different signaling pathway and are not specific for ALK+ tumors."],
      highYieldPoint: "EML4-ALK fusion in NSCLC → treat with ALK inhibitors (crizotinib, alectinib); molecular testing guides targeted therapy."
    },
    {
      vignette: "A 48-year-old woman undergoes chemotherapy with doxorubicin for breast cancer. Her oncologist monitors her cardiac function closely with serial echocardiograms. After a cumulative dose of 450 mg/m², she develops a decline in left ventricular ejection fraction to 40%.",
      question: "What is the mechanism of doxorubicin-induced cardiotoxicity?",
      options: ["Coronary artery vasospasm","Direct myocardial calcium channel blockade","Inhibition of cardiac sodium channels","Pericardial inflammation and fibrosis","Free radical generation and oxidative damage to cardiomyocytes"],
      correctIndex: 4,
      explanation: "Doxorubicin (an anthracycline) causes dose-dependent cardiotoxicity primarily through generation of reactive oxygen species (free radicals) via iron-dependent mechanisms. These free radicals cause oxidative damage to cardiomyocyte membranes and mitochondria, leading to irreversible cardiomyopathy. Dexrazoxane, an iron chelator, is cardioprotective.",
      optionExplanations: ["Incorrect: Coronary vasospasm is associated with 5-fluorouracil, not doxorubicin.","Incorrect: Calcium channel blockade is not the mechanism of anthracycline cardiotoxicity.","Incorrect: Sodium channel inhibition is not a mechanism of anthracycline toxicity.","Incorrect: Pericarditis can occur with radiation therapy, not characteristically with doxorubicin.","Correct: Doxorubicin generates free radicals (via iron-mediated redox cycling) that cause oxidative damage to cardiomyocytes; cumulative dose-dependent and irreversible."],
      highYieldPoint: "Doxorubicin cardiotoxicity: dose-dependent, free radical-mediated; prevent with dexrazoxane (iron chelator); max ~550 mg/m²."
    },
    {
      vignette: "A 30-year-old man with metastatic testicular cancer (non-seminoma) completes 4 cycles of BEP chemotherapy (bleomycin, etoposide, cisplatin). During follow-up, he develops progressive dyspnea and a dry cough. Pulmonary function tests reveal a decreased diffusing capacity (DLCO).",
      question: "Which component of his chemotherapy regimen is most likely responsible for his pulmonary symptoms?",
      options: ["All three agents equally","Etoposide","Cisplatin","Bleomycin","None; this is likely a paraneoplastic syndrome"],
      correctIndex: 3,
      explanation: "Bleomycin causes dose-dependent pulmonary toxicity (pulmonary fibrosis) through generation of free radicals that damage the pulmonary epithelium. The lungs are particularly susceptible because they lack the bleomycin-inactivating enzyme (bleomycin hydrolase). Decreased DLCO is the earliest sign.",
      optionExplanations: ["Incorrect: The pulmonary toxicity is specifically attributable to bleomycin, not the combination.","Incorrect: Etoposide causes myelosuppression and increases risk of secondary leukemia (MDS/AML) but does not typically cause pulmonary fibrosis.","Incorrect: Cisplatin causes nephrotoxicity, ototoxicity, and peripheral neuropathy, not pulmonary fibrosis.","Correct: Bleomycin causes pulmonary fibrosis via free radical-mediated lung injury; lungs lack bleomycin hydrolase; DLCO decrease is the earliest finding.","Incorrect: The temporal relationship with BEP chemotherapy makes drug toxicity far more likely than a paraneoplastic syndrome."],
      highYieldPoint: "Bleomycin → pulmonary fibrosis (lungs lack bleomycin hydrolase); monitor DLCO; avoid high FiO₂."
    },
    {
      vignette: "A 62-year-old man with chronic myeloid leukemia has been on imatinib for 5 years with good response. He asks his oncologist about how imatinib works at the molecular level.",
      question: "Which of the following best describes the mechanism of action of imatinib?",
      options: ["Monoclonal antibody blocking cell surface receptors","Proteasome inhibitor preventing protein degradation","Competitive inhibitor of the ATP-binding site of BCR-ABL tyrosine kinase","Alkylating agent cross-linking DNA strands","Inhibitor of the mTOR signaling pathway"],
      correctIndex: 2,
      explanation: "Imatinib is a small-molecule tyrosine kinase inhibitor that competitively binds the ATP-binding pocket of the BCR-ABL fusion protein, preventing its constitutive kinase activity. This blocks the proliferative signaling that drives CML.",
      optionExplanations: ["Incorrect: Imatinib is a small molecule, not a monoclonal antibody; it acts intracellularly at the kinase domain.","Incorrect: Bortezomib is a proteasome inhibitor used in multiple myeloma, not CML.","Correct: Imatinib occupies the ATP-binding site of BCR-ABL, preventing phosphorylation of downstream substrates and halting CML cell proliferation.","Incorrect: Alkylating agents (e.g., busulfan) were previously used for CML but imatinib works by a completely different targeted mechanism.","Incorrect: mTOR inhibitors (e.g., everolimus, temsirolimus) target a different pathway than BCR-ABL."],
      highYieldPoint: "Imatinib: competitive inhibitor of BCR-ABL ATP-binding site; revolutionized CML treatment; also inhibits c-KIT and PDGFR."
    },
    {
      vignette: "A 70-year-old man with advanced renal cell carcinoma is started on bevacizumab. During treatment, he develops hypertension and proteinuria.",
      question: "What is the primary target of bevacizumab?",
      options: ["Epidermal growth factor receptor (EGFR)","Fibroblast growth factor receptor (FGFR)","Human epidermal growth factor receptor 2 (HER2)","Platelet-derived growth factor receptor (PDGFR)","Vascular endothelial growth factor (VEGF)"],
      correctIndex: 4,
      explanation: "Bevacizumab is a monoclonal antibody that binds and neutralizes VEGF-A, preventing it from interacting with VEGF receptors on endothelial cells. This inhibits tumor angiogenesis. Side effects include hypertension, proteinuria, impaired wound healing, and bowel perforation.",
      optionExplanations: ["Incorrect: EGFR is the target of cetuximab and panitumumab (antibodies) or erlotinib and gefitinib (TKIs).","Incorrect: FGFR is targeted by specific FGFR inhibitors (e.g., erdafitinib), not bevacizumab.","Incorrect: HER2 is the target of trastuzumab, used in HER2-positive breast cancer.","Incorrect: PDGFR is inhibited by imatinib (as a secondary target) and sunitinib, not bevacizumab.","Correct: Bevacizumab binds VEGF-A, blocking tumor angiogenesis; side effects include hypertension and proteinuria due to disrupted vascular homeostasis."],
      highYieldPoint: "Bevacizumab = anti-VEGF antibody → anti-angiogenesis; side effects: HTN, proteinuria, poor wound healing, GI perforation."
    },
    {
      vignette: "A 45-year-old woman with HER2-positive breast cancer is treated with trastuzumab. She asks why her oncologist monitors her heart function. The oncologist explains that trastuzumab cardiotoxicity differs mechanistically from doxorubicin cardiotoxicity.",
      question: "Which of the following best distinguishes trastuzumab-related cardiotoxicity from doxorubicin-related cardiotoxicity?",
      options: ["Trastuzumab cardiotoxicity is dose-dependent and irreversible","Trastuzumab causes pericardial effusion rather than cardiomyopathy","Trastuzumab cardiotoxicity is not dose-dependent and is typically reversible","Trastuzumab cardiotoxicity involves free radical damage to cardiomyocytes","Trastuzumab-induced cardiac damage is prevented by dexrazoxane"],
      correctIndex: 2,
      explanation: "Trastuzumab cardiotoxicity (Type II) is NOT dose-dependent and is typically reversible upon drug discontinuation. In contrast, doxorubicin cardiotoxicity (Type I) is dose-dependent and irreversible due to structural cardiomyocyte damage from free radicals.",
      optionExplanations: ["Incorrect: This describes doxorubicin (Type I) cardiotoxicity, not trastuzumab.","Incorrect: Trastuzumab causes cardiomyopathy (decreased EF), not pericardial effusion.","Correct: Trastuzumab causes Type II cardiotoxicity: not dose-dependent, no structural myocyte damage, and typically reversible upon drug cessation.","Incorrect: Free radical-mediated damage is the mechanism of doxorubicin toxicity, not trastuzumab.","Incorrect: Dexrazoxane is used to prevent doxorubicin (anthracycline) cardiotoxicity; it is not used with trastuzumab."],
      highYieldPoint: "Type I (doxorubicin): dose-dependent, irreversible, structural damage. Type II (trastuzumab): not dose-dependent, reversible, functional."
    },
    {
      vignette: "A 12-year-old girl is undergoing chemotherapy with methotrexate for osteosarcoma. Her physician prescribes leucovorin (folinic acid) rescue to be administered 24 hours after high-dose methotrexate infusion.",
      question: "What is the primary purpose of leucovorin rescue in this regimen?",
      options: ["To enhance the cytotoxic effect of methotrexate on tumor cells","To bypass dihydrofolate reductase inhibition and rescue normal cells from methotrexate toxicity","To increase renal excretion of methotrexate","To prevent methotrexate-induced hepatotoxicity","To convert methotrexate to its active polyglutamate form"],
      correctIndex: 1,
      explanation: "Methotrexate inhibits dihydrofolate reductase (DHFR), depleting tetrahydrofolate needed for thymidylate and purine synthesis. Leucovorin (N5-formyl-THF) is a reduced folate that bypasses the DHFR block, replenishing folate cofactors in normal rapidly dividing cells (bone marrow, GI epithelium) to prevent fatal toxicity.",
      optionExplanations: ["Incorrect: Leucovorin actually rescues normal cells from methotrexate's effects; it does not enhance tumor killing.","Correct: Leucovorin provides reduced folate that bypasses the DHFR block, rescuing normal cells while tumor cells (which take up methotrexate more avidly) remain susceptible.","Incorrect: Leucovorin does not affect methotrexate pharmacokinetics or renal clearance; urine alkalinization and hydration promote excretion.","Incorrect: The primary purpose is to prevent myelosuppression and mucositis, not specifically hepatotoxicity.","Incorrect: Leucovorin does not convert methotrexate; it is an independent folate source that bypasses the enzymatic block."],
      highYieldPoint: "Leucovorin rescue: N5-formyl-THF bypasses DHFR block from methotrexate, saving normal cells; given 24h after high-dose MTX."
    },
    {
      vignette: "A 55-year-old man with acute promyelocytic leukemia develops tumor lysis syndrome 48 hours after starting chemotherapy. Laboratory studies show potassium 6.8 mEq/L, phosphorus 8.5 mg/dL, calcium 6.2 mg/dL, uric acid 14 mg/dL, and creatinine 3.5 mg/dL.",
      question: "Which of the following medications should have been given prophylactically before starting chemotherapy to prevent this complication?",
      options: ["Rasburicase","Dexrazoxane","Mesna","Amifostine","Leucovorin"],
      correctIndex: 0,
      explanation: "Tumor lysis syndrome (TLS) results from massive release of intracellular contents (potassium, phosphorus, nucleic acids) during rapid tumor cell death. Rasburicase (recombinant urate oxidase) converts uric acid to allantoin (highly soluble), preventing uric acid nephropathy. Allopurinol is also used prophylactically.",
      optionExplanations: ["Correct: Rasburicase enzymatically degrades uric acid to allantoin, preventing the hyperuricemia and uric acid nephropathy of tumor lysis syndrome.","Incorrect: Dexrazoxane is an iron chelator used to prevent doxorubicin cardiotoxicity.","Incorrect: Mesna binds acrolein in the bladder to prevent hemorrhagic cystitis from cyclophosphamide/ifosfamide.","Incorrect: Amifostine is a free radical scavenger used to prevent cisplatin nephrotoxicity and radiation-induced xerostomia.","Incorrect: Leucovorin rescues normal cells from methotrexate toxicity but has no role in TLS prevention."],
      highYieldPoint: "TLS prophylaxis: rasburicase (urate oxidase) or allopurinol + hydration + monitor K⁺/PO₄/Ca²⁺/uric acid/creatinine."
    },
    {
      vignette: "A 60-year-old woman with breast cancer is found to have an estrogen receptor-positive, progesterone receptor-positive, HER2-negative tumor. After surgery and radiation, she is started on adjuvant hormonal therapy.",
      question: "Which of the following drugs acts as a selective estrogen receptor modulator (SERM) and is commonly used in premenopausal women with ER-positive breast cancer?",
      options: ["Anastrozole","Leuprolide","Fulvestrant","Tamoxifen","Exemestane"],
      correctIndex: 3,
      explanation: "Tamoxifen is a SERM that acts as an estrogen receptor antagonist in breast tissue while having agonist effects in bone (protective) and endometrium (risk of endometrial cancer). It is the standard adjuvant hormonal therapy for premenopausal women with ER-positive breast cancer.",
      optionExplanations: ["Incorrect: Anastrozole is an aromatase inhibitor that blocks peripheral estrogen synthesis; it is used in postmenopausal women (ineffective when ovaries are active).","Incorrect: Leuprolide is a GnRH agonist that suppresses ovarian function (medical oophorectomy) but is not itself a SERM.","Incorrect: Fulvestrant is a pure ER antagonist (SERD) that degrades the ER; used in metastatic ER+ breast cancer, not as first-line adjuvant.","Correct: Tamoxifen is a SERM: antagonist in breast, agonist in bone/endometrium; first-line adjuvant hormonal therapy for premenopausal ER+ breast cancer.","Incorrect: Exemestane is an irreversible (steroidal) aromatase inhibitor used in postmenopausal women."],
      highYieldPoint: "Tamoxifen = SERM: antagonist in breast (anti-cancer), agonist in bone (anti-osteoporosis) and endometrium (risk of cancer)."
    },
    {
      vignette: "A 50-year-old man undergoes chemotherapy with cyclophosphamide for lymphoma. His oncologist co-prescribes a medication to prevent a specific urologic side effect of cyclophosphamide.",
      question: "Which drug is administered to prevent hemorrhagic cystitis caused by cyclophosphamide?",
      options: ["Allopurinol","Leucovorin","Amifostine","Dexrazoxane","Mesna"],
      correctIndex: 4,
      explanation: "Cyclophosphamide is metabolized to acrolein, which accumulates in the bladder and causes hemorrhagic cystitis. Mesna (2-mercaptoethane sulfonate) binds acrolein in the urinary tract, neutralizing it and preventing bladder toxicity.",
      optionExplanations: ["Incorrect: Allopurinol prevents hyperuricemia in tumor lysis syndrome but does not protect against hemorrhagic cystitis.","Incorrect: Leucovorin is used for methotrexate rescue, not cyclophosphamide toxicity prevention.","Incorrect: Amifostine is a free radical scavenger protecting against cisplatin nephrotoxicity and radiation xerostomia.","Incorrect: Dexrazoxane chelates iron to prevent doxorubicin-induced cardiotoxicity.","Correct: Mesna binds and detoxifies acrolein (the bladder-toxic metabolite of cyclophosphamide/ifosfamide) in the urine."],
      highYieldPoint: "Cyclophosphamide → acrolein → hemorrhagic cystitis; prevent with mesna + hydration."
    },
    {
      vignette: "A researcher is studying a tumor suppressor gene that encodes a protein known as the 'guardian of the genome.' When DNA damage is detected, this protein can halt the cell cycle at the G1/S checkpoint, activate DNA repair, or trigger apoptosis if the damage is irreparable.",
      question: "Which gene encodes this tumor suppressor protein?",
      options: ["RB1","VHL","APC","TP53","WT1"],
      correctIndex: 3,
      explanation: "TP53 encodes p53, the 'guardian of the genome.' p53 responds to DNA damage by activating p21 (which inhibits CDK-cyclin complexes to arrest the cell cycle at G1/S), promoting DNA repair, or inducing apoptosis via BAX upregulation. Loss of p53 is the most common genetic alteration in human cancers.",
      optionExplanations: ["Incorrect: RB1 encodes retinoblastoma protein, which regulates the G1/S transition but does not directly sense DNA damage or induce apoptosis.","Incorrect: VHL is a tumor suppressor that degrades HIF; its loss causes von Hippel-Lindau syndrome with renal cell carcinoma.","Incorrect: APC is a tumor suppressor in the Wnt signaling pathway; its loss leads to familial adenomatous polyposis (FAP).","Correct: TP53 = 'guardian of the genome'; p53 activates p21 for G1 arrest, DNA repair genes, and BAX for apoptosis; most commonly mutated gene in cancer.","Incorrect: WT1 is a tumor suppressor associated with Wilms tumor in children."],
      highYieldPoint: "p53 (TP53): 'guardian of the genome'; G1/S arrest (via p21), DNA repair, apoptosis (via BAX); most commonly mutated in cancer."
    },
    {
      vignette: "A 4-year-old boy presents with an abdominal mass. CT reveals a large intrarenal mass. Genetic testing shows deletion of a region on chromosome 11p13. His father had bilateral retinoblastoma as a child and carries a germline RB1 mutation.",
      question: "According to the Knudsen two-hit hypothesis, which of the following best explains the development of retinoblastoma in the father?",
      options: ["Two somatic mutations in the RB1 gene occurred in the same retinal cell","One germline mutation was inherited, and a second somatic mutation inactivated the remaining allele","A single dominant gain-of-function mutation in RB1 was sufficient","Epigenetic silencing of both RB1 alleles occurred simultaneously","Loss of heterozygosity at the TP53 locus initiated tumorigenesis"],
      correctIndex: 1,
      explanation: "Knudsen's two-hit hypothesis states that both alleles of a tumor suppressor gene must be inactivated for tumor development. In hereditary retinoblastoma, the first 'hit' is an inherited germline mutation in one RB1 allele; the second 'hit' is a somatic mutation in the remaining normal allele. This explains the bilateral, early-onset pattern.",
      optionExplanations: ["Incorrect: Two somatic hits in the same cell describe sporadic (non-hereditary) retinoblastoma, which is typically unilateral and later-onset.","Correct: Hereditary retinoblastoma = one germline hit (inherited) + one somatic hit (acquired) in the remaining RB1 allele; explains bilateral disease.","Incorrect: RB1 is a tumor suppressor, not an oncogene; loss-of-function (not gain-of-function) drives disease.","Incorrect: While epigenetic silencing can inactivate tumor suppressors, the two-hit model specifically involves sequential mutations, and this is not the classic explanation.","Incorrect: TP53 is a separate tumor suppressor; RB1 loss, not TP53 loss, is the initiating event in retinoblastoma."],
      highYieldPoint: "Two-hit hypothesis: hereditary = 1 germline + 1 somatic hit (bilateral, early); sporadic = 2 somatic hits (unilateral, late)."
    }
  ]

};

const HEME_PART2_SUMMARIES = {

  "Leukemias & lymphomas": {
    sections: [
      {
        heading: "Acute Leukemias",
        bullets: [
          "ALL: most common childhood cancer (peak 2-5 years); TdT+, CD10+ (CALLA), CD19+; t(12;21) best prognosis, t(9;22) worst",
          "AML: Auer rods pathognomonic; myeloperoxidase (MPO)+; subtypes include APL with t(15;17) → PML-RARα treated with ATRA",
          "AML with t(8;21) and inv(16) have favorable prognosis; FLT3-ITD confers poor prognosis",
          "APL uniquely associated with DIC at presentation; ATRA induces differentiation of promyelocytes"
        ]
      },
      {
        heading: "Chronic Leukemias",
        bullets: [
          "CML: t(9;22) Philadelphia chromosome → BCR-ABL tyrosine kinase; treated with imatinib; phases: chronic → accelerated → blast crisis",
          "CLL: most common adult leukemia in the West; smudge cells, CD5+/CD20+/CD23+; can transform to DLBCL (Richter transformation)",
          "Hairy cell leukemia: TRAP+, BRAF V600E, massive splenomegaly, 'dry tap'; treated with cladribine (2-CdA)"
        ]
      },
      {
        heading: "Hodgkin Lymphoma",
        bullets: [
          "Bimodal age distribution (young adults and >55); Reed-Sternberg cells (CD15+/CD30+, typically CD20-) derived from germinal center B cells",
          "Subtypes: nodular sclerosis (most common, lacunar cells), mixed cellularity, lymphocyte-rich (best prognosis), lymphocyte-depleted (worst prognosis)",
          "Associated with EBV; contiguous lymph node spread; B symptoms (fever, weight loss, night sweats) affect staging"
        ]
      },
      {
        heading: "Non-Hodgkin Lymphomas",
        bullets: [
          "DLBCL: most common NHL overall; aggressive but potentially curable with R-CHOP",
          "Follicular lymphoma: t(14;18) → BCL-2; indolent but incurable; can transform to DLBCL",
          "Burkitt lymphoma: t(8;14) → c-MYC; starry sky pattern; endemic (EBV+, jaw) vs sporadic (abdomen)",
          "Mantle cell lymphoma: t(11;14) → cyclin D1; CD5+/CD23-; aggressive",
          "Marginal zone (MALT) lymphoma: associated with H. pylori (stomach), Hashimoto thyroiditis",
          "Mycosis fungoides: cutaneous T-cell lymphoma; CD4+ cerebriform cells; Pautrier microabscesses; Sézary syndrome = leukemic phase"
        ]
      }
    ],
    table: {
      title: "Key Chromosomal Translocations in Heme Malignancies",
      headers: ["Translocation","Gene/Product","Disease"],
      rows: [
        ["t(9;22)","BCR-ABL","CML (also poor-prognosis ALL)"],
        ["t(15;17)","PML-RARα","APL (AML-M3)"],
        ["t(8;14)","c-MYC","Burkitt lymphoma"],
        ["t(14;18)","BCL-2","Follicular lymphoma"],
        ["t(11;14)","Cyclin D1","Mantle cell lymphoma"],
        ["t(8;21)","AML1-ETO","AML (favorable prognosis)"],
        ["t(12;21)","TEL-AML1","ALL (favorable prognosis, children)"]
      ]
    },
    mnemonic: "Translocations: '8-14 BL (Burkitt Loves c-MYC), 14-18 FL (Follicular Loves BCL-2), 11-14 MCL (Mantle Cell Loves cyclin D1), 9-22 CML (CML Loves BCR-ABL), 15-17 APL (APL Loves PML-RARα).'"
  },

  "Transfusion medicine": {
    sections: [
      {
        heading: "Blood Group Systems",
        bullets: [
          "ABO system: type A has anti-B antibodies (IgM); type B has anti-A; type O has both anti-A and anti-B (universal RBC donor); type AB has neither (universal plasma donor)",
          "Rh system: Rh-negative individuals develop anti-D only after sensitization (no naturally occurring anti-D antibodies)",
          "Rh immune globulin (RhoGAM) given at 28 weeks and within 72 hours postpartum to prevent Rh sensitization",
          "Universal donor RBCs: O-negative; Universal donor plasma: AB"
        ]
      },
      {
        heading: "Transfusion Reactions",
        bullets: [
          "Acute hemolytic: ABO mismatch → type II hypersensitivity → intravascular hemolysis, DIC, renal failure; most dangerous",
          "Febrile non-hemolytic (FNHTR): most common reaction; cytokines or anti-leukocyte antibodies; prevented by leukoreduction",
          "Allergic/urticarial: type I hypersensitivity to plasma proteins; treat with antihistamines",
          "Anaphylactic: anti-IgA antibodies in IgA-deficient patients; use washed or IgA-deficient products",
          "TRALI: donor anti-HLA antibodies → neutrophil activation → non-cardiogenic pulmonary edema within 6 hours; leading cause of transfusion death",
          "TACO: volume overload → cardiogenic pulmonary edema; elevated BNP; treat with diuretics",
          "Delayed hemolytic: 2-10 days post-transfusion; anamnestic antibodies (Kidd, Duffy, Kell); extravascular hemolysis; positive DAT",
          "TA-GVHD: donor lymphocytes engraft in immunocompromised host; skin rash, liver dysfunction, pancytopenia; nearly 100% fatal; prevent with irradiation"
        ]
      },
      {
        heading: "Special Considerations",
        bullets: [
          "Massive transfusion: 1:1:1 ratio (RBCs:FFP:platelets); citrate toxicity → hypocalcemia; treat with IV calcium",
          "Irradiation: prevents TA-GVHD by inactivating donor T cells; indicated for neonates, immunocompromised, HLA-matched donations",
          "Leukoreduction: removes donor WBCs; prevents FNHTR, CMV transmission, HLA alloimmunization",
          "Platelet refractoriness: 80% non-immune (fever, DIC, splenomegaly), 20% immune (HLA antibodies)",
          "Iron overload from chronic transfusions: treat with chelation (deferoxamine, deferasirox)"
        ]
      }
    ],
    table: {
      title: "Transfusion Reactions at a Glance",
      headers: ["Reaction","Timing","Key Feature","Prevention/Treatment"],
      rows: [
        ["Acute hemolytic","Minutes","Intravascular hemolysis, DIC","Verify ABO match; stop transfusion"],
        ["FNHTR","During/after","Fever, chills, no hemolysis","Leukoreduction; acetaminophen"],
        ["Allergic","During","Urticaria, pruritus","Antihistamines"],
        ["Anaphylactic","Minutes","IgA deficiency + anti-IgA","Washed/IgA-deficient products; epinephrine"],
        ["TRALI","<6 hours","Non-cardiogenic pulm edema","Supportive; donor deferral"],
        ["TACO","During/after","Volume overload, ↑BNP","Slow rate; diuretics"],
        ["Delayed hemolytic","2-10 days","↓Hgb, +DAT, jaundice","Supportive; extended antigen matching"],
        ["TA-GVHD","4-30 days","Rash, pancytopenia, hepatitis","Irradiation of products"]
      ]
    },
    mnemonic: "Transfusion reaction timing: 'Acute = ABO (minutes), Febrile = Frequent (hours), TRALI = 6 hours, Delayed = Days, GVHD = weeks.' Prevention: 'Match, Leuko-reduce, Irradiate, Wash' (MLIW)."
  },

  "Oncologic principles": {
    sections: [
      {
        heading: "Tumor Suppressors vs Oncogenes",
        bullets: [
          "Tumor suppressors require loss of BOTH alleles (two-hit hypothesis): TP53, RB1, APC, VHL, BRCA1/2, WT1",
          "Oncogenes require activation of ONE allele (gain of function): RAS, MYC, BCR-ABL, HER2/neu, RET, BRAF",
          "p53 (TP53): 'guardian of the genome'; most commonly mutated gene in cancer; activates p21, BAX",
          "Rb: regulates G1/S checkpoint; phosphorylated by CDK4/6-cyclin D → releases E2F for S-phase entry",
          "Knudsen two-hit hypothesis: hereditary cancers = 1 germline + 1 somatic hit; sporadic = 2 somatic hits"
        ]
      },
      {
        heading: "Targeted Therapies and Immunotherapy",
        bullets: [
          "Imatinib: BCR-ABL TKI for CML; also inhibits c-KIT (GIST) and PDGFR",
          "Trastuzumab: anti-HER2 antibody for HER2+ breast cancer; Type II (reversible) cardiotoxicity",
          "Rituximab: anti-CD20 antibody for B-cell lymphomas (R-CHOP regimen)",
          "Bevacizumab: anti-VEGF antibody → anti-angiogenesis; SE: HTN, proteinuria, poor wound healing, GI perforation",
          "PARP inhibitors (olaparib): synthetic lethality in BRCA-mutant tumors",
          "Checkpoint inhibitors: pembrolizumab/nivolumab (anti-PD-1), ipilimumab (anti-CTLA-4)",
          "Crizotinib/alectinib: ALK inhibitors for EML4-ALK+ NSCLC"
        ]
      },
      {
        heading: "Chemotherapy Toxicities and Their Antidotes",
        bullets: [
          "Doxorubicin (anthracycline): dose-dependent cardiotoxicity (free radicals, Type I irreversible) → prevent with dexrazoxane",
          "Bleomycin: pulmonary fibrosis (lungs lack bleomycin hydrolase); monitor DLCO",
          "Cyclophosphamide/ifosfamide: hemorrhagic cystitis (acrolein) → prevent with mesna",
          "Cisplatin: nephrotoxicity, ototoxicity, peripheral neuropathy → prevent with amifostine + hydration",
          "Methotrexate: myelosuppression, mucositis → rescue with leucovorin (N5-formyl-THF)",
          "Vincristine: peripheral neuropathy (microtubule inhibitor)",
          "5-Fluorouracil: coronary vasospasm, myelosuppression, hand-foot syndrome"
        ]
      },
      {
        heading: "Oncologic Emergencies",
        bullets: [
          "Tumor lysis syndrome: ↑K+, ↑PO4, ↑uric acid, ↓Ca2+, AKI; prevent with rasburicase/allopurinol + hydration",
          "Superior vena cava syndrome: facial/arm swelling, dyspnea; commonly from lung cancer or lymphoma",
          "Spinal cord compression: back pain, neurologic deficits; MRI urgently; treat with dexamethasone + radiation",
          "Febrile neutropenia: ANC <500 + fever; empiric broad-spectrum antibiotics (e.g., cefepime) immediately"
        ]
      }
    ],
    table: {
      title: "Chemotherapy Agents and Their Dose-Limiting Toxicities",
      headers: ["Drug","Class","Key Toxicity","Protective Agent"],
      rows: [
        ["Doxorubicin","Anthracycline","Cardiotoxicity (dilated CMP)","Dexrazoxane"],
        ["Bleomycin","Glycopeptide antibiotic","Pulmonary fibrosis","Monitor DLCO; avoid high O₂"],
        ["Cyclophosphamide","Alkylating agent","Hemorrhagic cystitis","Mesna"],
        ["Cisplatin","Platinum agent","Nephrotoxicity, ototoxicity","Amifostine, hydration"],
        ["Methotrexate","Antimetabolite","Myelosuppression, mucositis","Leucovorin"],
        ["Vincristine","Vinca alkaloid","Peripheral neuropathy","Dose adjustment"],
        ["5-Fluorouracil","Antimetabolite","Myelosuppression, coronary spasm","Dose adjustment"],
        ["Trastuzumab","Anti-HER2 Ab","Cardiotoxicity (reversible)","Monitor EF; hold if ↓EF"]
      ]
    },
    mnemonic: "Chemo antidotes: 'Dexrazoxane Defends the heart (Doxorubicin), Mesna guards the Bladder (cyclophosphamide), Leucovorin Rescues from methotrexate, Amifostine Shields the kidney (cisplatin), Rasburicase busts Uric acid (TLS).'"
  }

};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { HEME_PART2_QUESTIONS, HEME_PART2_SUMMARIES };
}
