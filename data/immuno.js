const IMMUNO_QUESTIONS = {
  "Innate & adaptive immunity": [
    {
      vignette: "A 3-day-old neonate develops a high fever and irritability. Blood cultures grow group B Streptococcus. The physician notes that the infant's immune system relies heavily on a particular set of receptors that recognize conserved microbial structures without prior exposure.",
      question: "Which of the following receptors is most likely responsible for the initial recognition of this pathogen by the innate immune system?",
      options: ["B-cell receptors","T-cell receptors","Toll-like receptors","Killer immunoglobulin-like receptors","Fc receptors"],
      correctIndex: 2,
      explanation: "Toll-like receptors (TLRs) are pattern recognition receptors of the innate immune system that detect pathogen-associated molecular patterns (PAMPs) such as lipoteichoic acid on gram-positive bacteria. They do not require prior sensitization and are critical for the initial response to infection, especially in neonates whose adaptive immunity is immature.",
      optionExplanations: ["Incorrect. B-cell receptors are part of adaptive immunity and require somatic recombination and clonal selection.","Incorrect. T-cell receptors are part of adaptive immunity and require antigen presentation via MHC molecules.","Correct. TLRs recognize conserved microbial structures (PAMPs) and initiate the innate immune response without prior exposure.","Incorrect. Killer immunoglobulin-like receptors regulate NK cell activity but are not the primary sensors of bacterial PAMPs.","Incorrect. Fc receptors bind the constant region of antibodies and mediate effector functions but do not directly recognize pathogens."],
      highYieldPoint: "Toll-like receptors are germline-encoded pattern recognition receptors that detect PAMPs and activate innate immunity."
    },
    {
      vignette: "A 25-year-old man sustains a deep laceration on his forearm while gardening. Within hours, the wound becomes red, warm, swollen, and painful. A biopsy of the wound margin reveals numerous cells with multilobed nuclei infiltrating the tissue.",
      question: "Which of the following cell types is the predominant early responder seen in this acute inflammatory infiltrate?",
      options: ["Macrophages","Mast cells","Eosinophils","Lymphocytes","Neutrophils"],
      correctIndex: 4,
      explanation: "Neutrophils are the first cells to arrive at sites of acute inflammation, typically within 6-24 hours. They are recruited by chemokines such as IL-8 and migrate through the endothelium via selectins and integrins. Their multilobed nuclei are a distinguishing histologic feature.",
      optionExplanations: ["Incorrect. Macrophages predominate in chronic inflammation and arrive later, typically after 24-48 hours.","Incorrect. Mast cells reside in tissues and release histamine to initiate inflammation but are not the predominant infiltrating cell.","Incorrect. Eosinophils are associated with parasitic infections and allergic reactions, not typical acute bacterial inflammation.","Incorrect. Lymphocytes are part of the adaptive immune response and predominate in chronic inflammation.","Correct. Neutrophils are the hallmark cells of acute inflammation, arriving within hours and characterized by multilobed nuclei."],
      highYieldPoint: "Neutrophils are the first responders in acute inflammation, arriving within hours via chemotaxis driven by IL-8 and C5a."
    },
    {
      vignette: "A researcher is studying a group of proteins in serum that can be activated through three distinct pathways and ultimately form a pore-like structure on bacterial membranes. She notes that one pathway is initiated by mannose-binding lectin binding to microbial carbohydrates.",
      question: "Which complement pathway is being described in this experiment?",
      options: ["Classical pathway","Lectin pathway","Coagulation pathway","Alternative pathway","Kinin-kallikrein pathway"],
      correctIndex: 1,
      explanation: "The lectin pathway is activated when mannose-binding lectin (MBL) binds to mannose residues on microbial surfaces. MBL then activates MBL-associated serine proteases (MASPs), which cleave C4 and C2 to generate the C3 convertase, ultimately leading to membrane attack complex (MAC) formation.",
      optionExplanations: ["Incorrect. The classical pathway is initiated by C1q binding to antigen-antibody complexes, not mannose residues.","Correct. The lectin pathway is activated by mannose-binding lectin recognizing microbial carbohydrates containing mannose.","Incorrect. The coagulation pathway involves clotting factors and is not part of the complement system.","Incorrect. The alternative pathway is triggered by spontaneous hydrolysis of C3 on microbial surfaces, not by lectin binding.","Incorrect. The kinin-kallikrein pathway produces bradykinin for vasodilation and pain but is not a complement pathway."],
      highYieldPoint: "The lectin pathway is activated by MBL binding mannose on microbes, leading to MASP activation and C3 convertase formation."
    },
    {
      vignette: "A 30-year-old woman receives a vaccine containing an inactivated pathogen mixed with aluminum hydroxide. Two weeks later, her serum shows elevated levels of pathogen-specific IgG antibodies. The physician explains that her immune system has generated memory cells that will respond more rapidly upon re-exposure.",
      question: "Which of the following best describes the type of immunity generated by this vaccination?",
      options: ["Natural passive immunity","Artificial active immunity","Natural active immunity","Artificial passive immunity","Innate immunity"],
      correctIndex: 1,
      explanation: "Vaccination with an inactivated pathogen plus adjuvant induces artificial active immunity. The immune system actively mounts an adaptive response, generating antigen-specific antibodies and memory cells. This is 'artificial' because the antigen is introduced deliberately and 'active' because the host generates its own immune response.",
      optionExplanations: ["Incorrect. Natural passive immunity refers to transfer of maternal antibodies (e.g., IgG across placenta, IgA in breast milk).","Correct. Vaccination introduces antigens artificially, and the host actively produces antibodies and memory cells.","Incorrect. Natural active immunity results from actual infection with a pathogen, not deliberate vaccination.","Incorrect. Artificial passive immunity involves administering preformed antibodies (e.g., immunoglobulin infusions or antiserum).","Incorrect. Innate immunity is nonspecific and does not generate immunologic memory."],
      highYieldPoint: "Vaccines produce artificial active immunity by stimulating the adaptive immune system to generate memory cells and specific antibodies."
    },
    {
      vignette: "A 40-year-old man with a history of recurrent viral infections is found to have a deficiency of a specific lymphocyte population. Flow cytometry reveals absent CD56+CD3- cells in his peripheral blood. His T-cell and B-cell counts are normal.",
      question: "Which of the following cell types is most likely deficient in this patient?",
      options: ["Cytotoxic T lymphocytes","Dendritic cells","B lymphocytes","Natural killer cells","Helper T lymphocytes"],
      correctIndex: 3,
      explanation: "CD56+CD3- cells are natural killer (NK) cells, which are part of the innate immune system. They provide early defense against virus-infected and tumor cells by releasing perforin and granzymes without prior sensitization. Unlike cytotoxic T cells (CD8+CD3+), NK cells do not require MHC-restricted antigen presentation.",
      optionExplanations: ["Incorrect. Cytotoxic T lymphocytes are CD8+CD3+ cells of adaptive immunity.","Incorrect. Dendritic cells are antigen-presenting cells that do not typically express CD56.","Incorrect. B lymphocytes express CD19 and CD20 and are responsible for antibody production.","Correct. Natural killer cells are defined by the CD56+CD3- phenotype and are innate lymphocytes that kill virus-infected and tumor cells via perforin and granzymes.","Incorrect. Helper T lymphocytes are CD4+CD3+ cells that coordinate immune responses."],
      highYieldPoint: "Natural killer cells are CD56+CD3- lymphocytes of innate immunity that kill virus-infected and tumor cells via perforin and granzymes."
    },
    {
      vignette: "A 22-year-old college student develops pharyngitis. Her physician explains that during the immune response, a specific class of immune cells will present pathogen-derived peptides on MHC class II molecules to CD4+ T cells. These cells are considered the most potent activators of naive T cells.",
      question: "Which of the following cells is the most effective at activating naive T cells through antigen presentation?",
      options: ["Neutrophils","Macrophages","Dendritic cells","B lymphocytes","Epithelial cells"],
      correctIndex: 2,
      explanation: "Dendritic cells are the most potent professional antigen-presenting cells and are uniquely capable of activating naive T cells. They capture antigens in peripheral tissues, migrate to lymph nodes, and present processed peptides on MHC class II molecules along with costimulatory signals (B7 molecules) to naive CD4+ T cells.",
      optionExplanations: ["Incorrect. Neutrophils are phagocytic cells of innate immunity and do not efficiently present antigens to T cells.","Incorrect. Macrophages are professional APCs but primarily activate already-primed effector T cells rather than naive T cells.","Correct. Dendritic cells are the most potent antigen-presenting cells and are essential for priming naive T cells.","Incorrect. B lymphocytes can present antigens on MHC II but are less effective than dendritic cells at activating naive T cells.","Incorrect. Epithelial cells do not typically express MHC class II or costimulatory molecules and are not professional APCs."],
      highYieldPoint: "Dendritic cells are the most potent APCs and are required for activation of naive T cells through MHC II and costimulatory molecules."
    },
    {
      vignette: "A 35-year-old man is being treated for a bacterial infection. His physician explains that a key component of his immune defense involves proteins that coat bacteria and enhance their uptake by phagocytes. This process is termed opsonization.",
      question: "Which of the following molecules is the most important opsonin in the immune system?",
      options: ["C5a","IgG","IgE","Interferon-gamma","Interleukin-10"],
      correctIndex: 1,
      explanation: "IgG is the most abundant immunoglobulin in serum and the most important opsonin. The Fc portion of IgG binds Fc gamma receptors on phagocytes (neutrophils and macrophages), greatly enhancing phagocytosis. C3b is another important opsonin from the complement system, but IgG is considered the principal opsonizing antibody.",
      optionExplanations: ["Incorrect. C5a is a potent anaphylatoxin and chemotactic factor but does not directly coat pathogens for phagocytosis.","Correct. IgG is the principal opsonizing antibody, binding pathogens and facilitating phagocytosis via Fc receptors on phagocytes.","Incorrect. IgE is involved in type I hypersensitivity reactions and defense against parasites, not opsonization.","Incorrect. Interferon-gamma activates macrophages but does not coat pathogens as an opsonin.","Incorrect. IL-10 is an anti-inflammatory cytokine that suppresses immune responses."],
      highYieldPoint: "IgG and C3b are the two most important opsonins; IgG binds Fc receptors on phagocytes to enhance bacterial clearance."
    },
    {
      vignette: "A 28-year-old woman undergoes testing for immune function. Her laboratory results show that she produces a robust secondary immune response with higher antibody titers, increased affinity, and a predominance of IgG compared to her primary response, which was mainly IgM.",
      question: "Which of the following processes is most responsible for the increased antibody affinity observed during the secondary immune response?",
      options: ["Somatic hypermutation","Junctional diversity","V(D)J recombination","Isotype switching","Allelic exclusion"],
      correctIndex: 0,
      explanation: "Somatic hypermutation occurs in germinal centers and introduces point mutations in the variable regions of immunoglobulin genes. B cells with higher-affinity antibodies are selected by follicular dendritic cells presenting antigen, a process called affinity maturation. This leads to progressively higher antibody affinity during the secondary response.",
      optionExplanations: ["Correct. Somatic hypermutation introduces point mutations in variable regions, and selection for higher-affinity variants leads to affinity maturation.","Incorrect. Junctional diversity (N and P nucleotide additions) occurs during V(D)J recombination and contributes to initial receptor diversity, not affinity maturation.","Incorrect. V(D)J recombination generates the initial diversity of antibody variable regions during B-cell development in the bone marrow, not during affinity maturation.","Incorrect. Isotype switching changes the antibody class (e.g., IgM to IgG) but does not alter antigen-binding affinity.","Incorrect. Allelic exclusion ensures each B cell expresses only one antibody specificity but does not improve affinity."],
      highYieldPoint: "Somatic hypermutation in germinal centers drives affinity maturation, producing higher-affinity antibodies during secondary immune responses."
    },
    {
      vignette: "A 6-month-old boy is brought to the pediatrician for his first set of vaccinations. The physician explains that certain antigens in the vaccine will activate B cells without T-cell help, while others require T-cell cooperation for a full antibody response.",
      question: "Which of the following vaccine components would most likely induce a T-cell-independent B-cell response?",
      options: ["Pneumococcal polysaccharide","Tetanus toxoid","Inactivated influenza virus","Diphtheria toxoid","Hepatitis B surface antigen protein"],
      correctIndex: 0,
      explanation: "Polysaccharide antigens, such as the pneumococcal capsular polysaccharide, can directly cross-link B-cell receptors and activate B cells without T-cell help (T-cell-independent type 2 response). These antigens produce primarily IgM with limited memory, which is why conjugate vaccines were developed to improve responses in young children.",
      optionExplanations: ["Correct. Pneumococcal polysaccharide is a T-cell-independent antigen that activates B cells by cross-linking surface IgM without T-cell help.","Incorrect. Tetanus toxoid is a protein antigen that induces a T-cell-dependent response with class switching and memory.","Incorrect. Inactivated viral particles contain protein antigens that primarily elicit T-cell-dependent responses.","Incorrect. Diphtheria toxoid is a protein antigen that requires T-cell help for a full immune response.","Incorrect. Hepatitis B surface antigen is a protein that induces T-cell-dependent B-cell activation."],
      highYieldPoint: "Polysaccharide antigens trigger T-cell-independent responses producing mainly IgM; conjugate vaccines link polysaccharides to proteins to enable T-cell-dependent responses in children."
    },
    {
      vignette: "A medical student is reviewing the cytokine profiles of different T-helper cell subsets. She notes that one subset secretes IL-4, IL-5, and IL-13 and is primarily involved in coordinating the immune response against extracellular parasites and promoting B-cell class switching to IgE.",
      question: "Which T-helper cell subset is characterized by this cytokine profile?",
      options: ["Th2","Th1","Th17","Treg","Tfh"],
      correctIndex: 0,
      explanation: "Th2 cells produce IL-4, IL-5, and IL-13. IL-4 promotes B-cell class switching to IgE, IL-5 activates eosinophils, and IL-13 promotes mucus secretion and smooth muscle contraction. This cytokine profile is critical for defense against helminthic parasites and is also implicated in allergic diseases.",
      optionExplanations: ["Correct. Th2 cells secrete IL-4, IL-5, and IL-13, driving eosinophil activation, IgE production, and anti-parasitic immunity.","Incorrect. Th1 cells produce IFN-gamma and IL-2, promoting macrophage activation and cell-mediated immunity against intracellular pathogens.","Incorrect. Th17 cells produce IL-17 and IL-22, recruiting neutrophils and defending against extracellular bacteria and fungi.","Incorrect. Treg cells produce IL-10 and TGF-beta, which suppress immune responses and maintain tolerance.","Incorrect. Tfh cells produce IL-21 and help B cells in germinal centers but have a different cytokine profile than described."],
      highYieldPoint: "Th2 cells produce IL-4 (IgE switching), IL-5 (eosinophil activation), and IL-13 (mucus production) for anti-parasitic and allergic responses."
    },
    {
      vignette: "A 45-year-old woman undergoes an experimental procedure in which her lymphocytes are isolated and exposed to a novel antigen in vitro. After 7 days, specific cytotoxic cells are observed that can lyse target cells presenting the antigen on MHC class I molecules.",
      question: "Which of the following molecules on the cytotoxic T cell is essential for recognizing antigen presented on MHC class I?",
      options: ["CD4","CD28","CD40 ligand","CD8","CD3"],
      correctIndex: 3,
      explanation: "CD8 is a co-receptor expressed on cytotoxic T lymphocytes that binds to the alpha-3 domain of MHC class I molecules. This interaction stabilizes the TCR-MHC I complex and is essential for the recognition and killing of target cells presenting intracellular antigens on MHC class I.",
      optionExplanations: ["Incorrect. CD4 is a co-receptor on helper T cells that binds MHC class II molecules, not MHC class I.","Incorrect. CD28 provides costimulatory signals by binding B7 on APCs but is not specific to MHC class I recognition.","Incorrect. CD40 ligand (CD154) on T cells interacts with CD40 on B cells and APCs to enhance immune activation, not MHC I recognition.","Correct. CD8 binds the alpha-3 domain of MHC class I and is the defining co-receptor of cytotoxic T lymphocytes.","Incorrect. CD3 is part of the TCR signaling complex on all T cells but does not specifically bind MHC class I."],
      highYieldPoint: "CD8 binds MHC class I (alpha-3 domain); CD4 binds MHC class II (beta-2 domain). This determines T-cell restriction."
    },
    {
      vignette: "A 50-year-old man with chronic hepatitis B infection has persistently elevated serum levels of a cytokine that activates macrophages, upregulates MHC expression, and promotes Th1 differentiation. This cytokine is primarily produced by Th1 cells and NK cells.",
      question: "Which cytokine is most likely elevated in this patient?",
      options: ["IL-4","IL-10","Interferon-gamma","IL-17","IL-5"],
      correctIndex: 2,
      explanation: "Interferon-gamma (IFN-gamma) is the signature cytokine of Th1 cells and NK cells. It activates macrophages to enhance intracellular killing, upregulates MHC class I and II expression, promotes Th1 differentiation, and inhibits Th2 responses. It is crucial for defense against intracellular pathogens like viruses and mycobacteria.",
      optionExplanations: ["Incorrect. IL-4 is a Th2 cytokine that promotes IgE class switching and inhibits Th1 responses.","Incorrect. IL-10 is an anti-inflammatory cytokine produced by Treg cells and macrophages that suppresses immune activation.","Correct. IFN-gamma is the key Th1/NK cell cytokine that activates macrophages and upregulates MHC expression.","Incorrect. IL-17 is produced by Th17 cells and recruits neutrophils to fight extracellular bacteria and fungi.","Incorrect. IL-5 is a Th2 cytokine that stimulates eosinophil production and activation."],
      highYieldPoint: "IFN-gamma is the signature Th1 cytokine: it activates macrophages, upregulates MHC I/II, and promotes cell-mediated immunity against intracellular pathogens."
    },
    {
      vignette: "A 2-year-old girl is brought to the emergency department with a high fever and neck stiffness. CSF analysis reveals gram-negative diplococci. Her immunologic workup shows she has a deficiency in the terminal complement components (C5-C9).",
      question: "Which of the following is the primary function of the complement complex that is deficient in this patient?",
      options: ["Neutralization of viral particles","Opsonization of bacteria","Chemotaxis of neutrophils","Activation of mast cells","Formation of the membrane attack complex"],
      correctIndex: 4,
      explanation: "The terminal complement components C5b, C6, C7, C8, and C9 assemble to form the membrane attack complex (MAC), which creates transmembrane pores in the target cell membrane, leading to osmotic lysis. Deficiency of terminal complement components predisposes to recurrent Neisseria infections (meningococcal and gonococcal).",
      optionExplanations: ["Incorrect. Virus neutralization is a function of antibodies, not the membrane attack complex.","Incorrect. Opsonization is primarily mediated by C3b and IgG, not terminal complement components.","Incorrect. Chemotaxis is mediated by C5a and IL-8, not the terminal complement complex.","Incorrect. Mast cell activation by complement is mediated by anaphylatoxins C3a and C5a, not C5-C9.","Correct. C5-C9 form the MAC, which lyses bacteria by creating pores in their cell membranes."],
      highYieldPoint: "Deficiency of terminal complement components (C5-C9) impairs MAC formation and predisposes to recurrent Neisseria infections."
    },
    {
      vignette: "A researcher isolates a population of lymphocytes from the thymus of a mouse and discovers that a significant proportion are undergoing apoptosis. She determines that these cells are being eliminated because their T-cell receptors bind self-MHC/self-peptide complexes with high affinity.",
      question: "Which of the following thymic selection processes is responsible for eliminating these self-reactive T cells?",
      options: ["Positive selection","Beta selection","Receptor editing","Negative selection","Anergy induction"],
      correctIndex: 3,
      explanation: "Negative selection occurs in the thymic medulla and eliminates T cells whose TCRs bind self-MHC/self-peptide complexes with high affinity. This process is critical for establishing central tolerance and preventing autoimmunity. The AIRE protein promotes expression of tissue-specific antigens in the thymus to facilitate this process.",
      optionExplanations: ["Incorrect. Positive selection occurs in the thymic cortex and selects T cells that can bind self-MHC with moderate affinity, ensuring MHC restriction.","Incorrect. Beta selection checks for successful rearrangement of the TCR beta chain during thymocyte development, before positive and negative selection.","Incorrect. Receptor editing is a mechanism used by B cells in the bone marrow to alter self-reactive B-cell receptors, not T cells.","Correct. Negative selection eliminates T cells with high-affinity binding to self-MHC/self-peptide, establishing central tolerance.","Incorrect. Anergy is a peripheral tolerance mechanism where T cells become functionally unresponsive, not a thymic process."],
      highYieldPoint: "Negative selection in the thymic medulla eliminates self-reactive T cells (central tolerance); AIRE expression of tissue antigens is critical for this process."
    },
    {
      vignette: "A 60-year-old man with metastatic melanoma is treated with a monoclonal antibody that blocks CTLA-4 on T cells. His physician explains that this therapy enhances the anti-tumor immune response by removing an inhibitory checkpoint signal.",
      question: "What is the normal physiological function of CTLA-4 on T cells?",
      options: ["Costimulatory activation of T cells by binding B7","Promoting T-cell proliferation through IL-2 signaling","Enhancing antigen presentation by upregulating MHC","Facilitating T-cell migration to lymph nodes","Inhibiting T-cell activation by competing with CD28 for B7 binding"],
      correctIndex: 4,
      explanation: "CTLA-4 is an inhibitory receptor on T cells that competes with the costimulatory receptor CD28 for binding to B7 (CD80/CD86) on antigen-presenting cells. CTLA-4 binds B7 with higher affinity than CD28, delivering an inhibitory signal that dampens T-cell activation. Blocking CTLA-4 with antibodies like ipilimumab removes this checkpoint, enhancing anti-tumor immunity.",
      optionExplanations: ["Incorrect. CD28 (not CTLA-4) provides costimulatory activation signals when binding B7.","Incorrect. IL-2 signaling through the IL-2 receptor promotes T-cell proliferation; CTLA-4 does not enhance IL-2 signaling.","Incorrect. CTLA-4 does not upregulate MHC expression; IFN-gamma performs this function.","Incorrect. T-cell migration to lymph nodes is mediated by chemokine receptors and adhesion molecules like CCR7 and L-selectin.","Correct. CTLA-4 inhibits T-cell activation by outcompeting CD28 for B7 binding, serving as an immune checkpoint."],
      highYieldPoint: "CTLA-4 is an immune checkpoint that inhibits T-cell activation by competing with CD28 for B7; anti-CTLA-4 antibodies (ipilimumab) are used in cancer immunotherapy."
    }
  ],
  "Immunodeficiencies": [
    {
      vignette: "A 7-month-old boy is brought to the pediatrician with recurrent pneumonia, oral candidiasis, and chronic diarrhea. His mother reports that he has been hospitalized three times since birth for severe infections. Physical exam reveals absent tonsils and no palpable lymph nodes. Laboratory studies show markedly decreased T cells and B cells with very low immunoglobulin levels.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Bruton agammaglobulinemia","DiGeorge syndrome","Severe combined immunodeficiency (SCID)","Common variable immunodeficiency","Wiskott-Aldrich syndrome"],
      correctIndex: 2,
      explanation: "Severe combined immunodeficiency (SCID) presents in infancy with recurrent severe infections by bacteria, viruses, fungi, and opportunistic organisms. It is characterized by markedly decreased or absent T and B cells, very low immunoglobulin levels, and absent lymphoid tissue (tonsils, lymph nodes). The most common form is X-linked due to IL-2 receptor gamma chain deficiency.",
      optionExplanations: ["Incorrect. Bruton agammaglobulinemia shows absent B cells and immunoglobulins but has normal T-cell function.","Incorrect. DiGeorge syndrome involves T-cell deficiency due to thymic aplasia but typically has normal B-cell numbers and is associated with cardiac defects and hypocalcemia.","Correct. SCID presents with absent T and B cells, absent lymphoid tissue, and severe recurrent infections starting in infancy.","Incorrect. Common variable immunodeficiency typically presents in the second or third decade with decreased immunoglobulins but normal lymphocyte numbers.","Incorrect. Wiskott-Aldrich syndrome presents with eczema, thrombocytopenia, and recurrent infections but retains some T and B cell function."],
      highYieldPoint: "SCID is characterized by absence of both T and B cells, presenting in infancy with severe infections; the most common form is X-linked (IL-2Rγ chain deficiency)."
    },
    {
      vignette: "A 4-year-old boy presents with recurrent sinopulmonary infections and a history of Haemophilus influenzae meningitis. Physical examination reveals hypoplastic tonsils. Serum immunoglobulin levels show undetectable IgG, IgA, and IgM. Flow cytometry reveals absent CD19+ cells in peripheral blood but normal CD3+ T-cell counts.",
      question: "Which of the following genetic defects is most likely responsible for this patient's condition?",
      options: ["Bruton tyrosine kinase (BTK) mutation","Adenosine deaminase deficiency","FOXP3 mutation","WAS gene mutation","RAG1/RAG2 deficiency"],
      correctIndex: 0,
      explanation: "Bruton agammaglobulinemia (X-linked agammaglobulinemia) is caused by a mutation in Bruton tyrosine kinase (BTK), which is essential for B-cell maturation. B-cell development is arrested at the pre-B cell stage, resulting in absent mature B cells and undetectable immunoglobulins. T-cell function remains intact.",
      optionExplanations: ["Correct. BTK mutations block B-cell maturation at the pre-B cell stage, causing X-linked agammaglobulinemia with absent B cells and immunoglobulins.","Incorrect. Adenosine deaminase (ADA) deficiency causes SCID with both T-cell and B-cell deficiency due to accumulation of toxic deoxyadenosine metabolites.","Incorrect. FOXP3 mutations cause IPEX syndrome (immune dysregulation, polyendocrinopathy, enteropathy, X-linked), an autoimmune condition.","Incorrect. WAS gene mutations cause Wiskott-Aldrich syndrome with eczema, thrombocytopenia, and immunodeficiency.","Incorrect. RAG1/RAG2 deficiency impairs V(D)J recombination, affecting both T and B cell development (Omenn syndrome)."],
      highYieldPoint: "Bruton agammaglobulinemia is caused by BTK mutation, arresting B-cell development at the pre-B stage; boys present after 6 months with recurrent bacterial infections."
    },
    {
      vignette: "A 2-week-old infant presents with tetany and seizures. Echocardiography reveals truncus arteriosus. The child has a characteristic facial appearance with wide-set eyes, a short philtrum, and low-set ears. Laboratory testing shows hypocalcemia and markedly decreased T-cell counts with normal immunoglobulin levels.",
      question: "Which chromosomal abnormality is most likely responsible for this patient's presentation?",
      options: ["Trisomy 21","Deletion of 7q11.23","22q11.2 microdeletion","15q11-13 deletion","Deletion of 5p"],
      correctIndex: 2,
      explanation: "DiGeorge syndrome is caused by a 22q11.2 microdeletion leading to failed development of the third and fourth pharyngeal pouches. This results in thymic aplasia (T-cell deficiency), parathyroid aplasia (hypocalcemia with tetany), and cardiac outflow tract defects (truncus arteriosus, tetralogy of Fallot). The characteristic facial features include hypertelorism and low-set ears.",
      optionExplanations: ["Incorrect. Trisomy 21 (Down syndrome) is associated with intellectual disability, cardiac defects (endocardial cushion defects), and increased risk of leukemia but not thymic aplasia.","Incorrect. 7q11.23 deletion causes Williams syndrome, characterized by elfin facies, supravalvular aortic stenosis, and hypercalcemia.","Correct. 22q11.2 microdeletion causes DiGeorge syndrome with thymic aplasia, parathyroid aplasia, and cardiac outflow tract defects.","Incorrect. 15q11-13 deletion causes Prader-Willi or Angelman syndrome depending on parental origin, not immunodeficiency.","Incorrect. 5p deletion causes Cri-du-chat syndrome with a high-pitched cry, microcephaly, and intellectual disability."],
      highYieldPoint: "DiGeorge syndrome (22q11.2 deletion): thymic aplasia (T-cell deficiency), parathyroid aplasia (hypocalcemia), cardiac defects (truncus arteriosus/tetralogy of Fallot)."
    },
    {
      vignette: "A 15-year-old girl presents with recurrent sinusitis and pneumonia. She also has a history of chronic diarrhea attributed to Giardia lamblia infection. Laboratory testing reveals markedly decreased serum IgG and IgA with normal IgM levels. B-cell counts in peripheral blood are normal. T-cell function tests are normal.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Selective IgA deficiency","Bruton agammaglobulinemia","Hyper-IgM syndrome","Common variable immunodeficiency","Transient hypogammaglobulinemia of infancy"],
      correctIndex: 3,
      explanation: "Common variable immunodeficiency (CVID) typically presents in the second or third decade of life with recurrent sinopulmonary infections and GI infections (especially Giardia). It is characterized by decreased IgG and IgA (sometimes IgM) with normal B-cell numbers, indicating a defect in B-cell differentiation to plasma cells rather than B-cell development.",
      optionExplanations: ["Incorrect. Selective IgA deficiency involves isolated low IgA with normal IgG and IgM; many patients are asymptomatic.","Incorrect. Bruton agammaglobulinemia shows absent B cells and all immunoglobulin classes are undetectable.","Incorrect. Hyper-IgM syndrome presents with elevated IgM and decreased IgG/IgA due to defective class switching (CD40L deficiency).","Correct. CVID presents with decreased IgG and IgA, normal B-cell numbers, and recurrent infections typically in adolescence or early adulthood.","Incorrect. Transient hypogammaglobulinemia of infancy is a self-limited condition in infants with delayed immunoglobulin production that resolves by age 3-4."],
      highYieldPoint: "CVID: decreased IgG and IgA with normal B-cell numbers, presenting in adolescence/young adulthood with sinopulmonary infections and increased risk of autoimmune disease and lymphoma."
    },
    {
      vignette: "A 3-year-old boy presents with recurrent pyogenic infections and oral ulcers. He has a history of delayed separation of the umbilical cord (fell off at 6 weeks of age). Laboratory studies reveal a markedly elevated neutrophil count (leukocytosis) but a wound biopsy from a recent skin abscess shows an absence of neutrophils in the tissue.",
      question: "Which of the following is the most likely underlying defect in this patient?",
      options: ["NADPH oxidase deficiency","Myeloperoxidase deficiency","Chediak-Higashi syndrome","Leukocyte adhesion deficiency","Chronic granulomatous disease"],
      correctIndex: 3,
      explanation: "Leukocyte adhesion deficiency (LAD) is caused by a defect in CD18 (beta-2 integrin subunit), preventing neutrophils from firmly adhering to endothelium and migrating into tissues. This leads to marked leukocytosis (neutrophils cannot leave the bloodstream) with absence of neutrophils at infection sites. Delayed umbilical cord separation is a classic early finding.",
      optionExplanations: ["Incorrect. NADPH oxidase deficiency causes chronic granulomatous disease with impaired oxidative burst, not a neutrophil migration defect.","Incorrect. Myeloperoxidase deficiency impairs the production of hypochlorous acid in neutrophils but is usually clinically mild.","Incorrect. Chediak-Higashi syndrome involves defective microtubule function with giant granules in neutrophils, causing impaired phagolysosome formation.","Correct. LAD is characterized by defective integrin (CD18), leading to inability of neutrophils to migrate to tissues, elevated peripheral neutrophil counts, and delayed cord separation.","Incorrect. Chronic granulomatous disease is caused by NADPH oxidase deficiency; neutrophils can reach tissues but cannot kill catalase-positive organisms."],
      highYieldPoint: "Leukocyte adhesion deficiency: defective CD18 integrins → absent neutrophil migration → leukocytosis, absent pus, delayed cord separation, recurrent bacterial infections."
    },
    {
      vignette: "A 2-year-old boy is brought in after developing a severe disseminated infection following vaccination with BCG (Bacillus Calmette-Guérin). His parents note that he has had recurrent infections with Staphylococcus aureus and Aspergillus species since infancy. Nitroblue tetrazolium (NBT) test is negative, and dihydrorhodamine (DHR) flow cytometry shows no oxidative burst.",
      question: "Which of the following enzymes is most likely deficient in this patient?",
      options: ["Myeloperoxidase","Adenosine deaminase","Sphingomyelinase","Glucose-6-phosphate dehydrogenase","NADPH oxidase"],
      correctIndex: 4,
      explanation: "Chronic granulomatous disease (CGD) is caused by deficiency of NADPH oxidase, which is responsible for the respiratory (oxidative) burst in phagocytes. Without superoxide production, phagocytes cannot kill catalase-positive organisms (S. aureus, Aspergillus, Serratia, Nocardia, Burkholderia cepacia). Negative NBT and absent DHR oxidative burst confirm the diagnosis.",
      optionExplanations: ["Incorrect. Myeloperoxidase deficiency causes a milder defect in microbicidal activity but does not abolish the oxidative burst; NBT test is normal.","Incorrect. Adenosine deaminase deficiency causes SCID, not a phagocyte defect.","Incorrect. Sphingomyelinase deficiency causes Niemann-Pick disease, a lysosomal storage disorder.","Incorrect. G6PD deficiency in red blood cells causes hemolytic anemia; while G6PD is part of the hexose monophosphate shunt that supplies NADPH, the primary enzyme deficient in CGD is NADPH oxidase itself.","Correct. NADPH oxidase deficiency in CGD eliminates the respiratory burst, confirmed by negative NBT/DHR tests."],
      highYieldPoint: "CGD: NADPH oxidase deficiency → absent respiratory burst → recurrent infections with catalase-positive organisms (S. aureus, Aspergillus, Serratia, Nocardia, Burkholderia)."
    },
    {
      vignette: "A 1-year-old boy is brought to the clinic with recurrent episodes of facial and extremity swelling without urticaria. His mother experienced similar episodes. Complement studies reveal low C4 levels with normal C3 levels. Further testing shows a deficiency of a serum protein that normally inhibits spontaneous activation of C1.",
      question: "Which of the following proteins is most likely deficient in this patient?",
      options: ["C1 inhibitor (C1-INH)","Decay accelerating factor (DAF/CD55)","Factor H","C3 convertase","Mannose-binding lectin"],
      correctIndex: 0,
      explanation: "Hereditary angioedema is caused by deficiency of C1 inhibitor (C1-INH), which normally regulates the classical complement pathway by inactivating C1r and C1s, and also inhibits kallikrein in the kinin system. Deficiency leads to uncontrolled C1 activation consuming C4 and C2 (low C4, normal C3) and excessive bradykinin production causing episodic angioedema without urticaria.",
      optionExplanations: ["Correct. C1-INH deficiency causes hereditary angioedema with low C4, recurrent non-pruritic swelling, and elevated bradykinin.","Incorrect. DAF/CD55 deficiency is associated with paroxysmal nocturnal hemoglobinuria (PNH), not angioedema.","Incorrect. Factor H regulates the alternative pathway by promoting C3b degradation; its deficiency leads to atypical hemolytic uremic syndrome.","Incorrect. C3 convertase is not a single protein deficiency but an enzymatic complex in complement pathways.","Incorrect. Mannose-binding lectin deficiency increases susceptibility to infections but does not cause angioedema."],
      highYieldPoint: "Hereditary angioedema: C1-INH deficiency → uncontrolled complement and bradykinin → recurrent angioedema without urticaria; low C4 is the screening test."
    },
    {
      vignette: "A 5-year-old boy presents with eczema, bloody diarrhea, and recurrent ear infections. His platelet count is 35,000/μL with small platelets on peripheral smear. His IgM levels are low while IgG is normal and IgE is elevated. Family history reveals a maternal uncle who died of lymphoma in childhood.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Immune thrombocytopenic purpura","Bernard-Soulier syndrome","Ataxia-telangiectasia","Hyper-IgE syndrome (Job syndrome)","Wiskott-Aldrich syndrome"],
      correctIndex: 4,
      explanation: "Wiskott-Aldrich syndrome (WAS) is an X-linked disorder caused by mutations in the WAS gene (encoding WASP protein). The classic triad is thrombocytopenia with small platelets, eczema, and recurrent infections. Immunologic findings include low IgM, elevated IgE, and normal/elevated IgG. Patients are at increased risk for autoimmune disease and lymphoma.",
      optionExplanations: ["Incorrect. ITP causes isolated thrombocytopenia with normal-sized platelets, without eczema or immunodeficiency.","Incorrect. Bernard-Soulier syndrome causes large platelets (not small) with a deficiency of GPIb/IX/V complex.","Incorrect. Ataxia-telangiectasia presents with cerebellar ataxia, telangiectasias, and IgA deficiency, not eczema and thrombocytopenia.","Incorrect. Hyper-IgE syndrome presents with very high IgE, coarse facies, recurrent cold staphylococcal abscesses, and retained primary teeth.","Correct. WAS presents with the triad of thrombocytopenia (small platelets), eczema, and recurrent infections with low IgM and elevated IgE."],
      highYieldPoint: "Wiskott-Aldrich syndrome (X-linked, WAS gene): thrombocytopenia with small platelets + eczema + recurrent infections; low IgM, high IgE, increased lymphoma risk."
    },
    {
      vignette: "A 9-year-old girl presents with progressive cerebellar ataxia and spider-like vascular lesions on her face and conjunctivae. She has had multiple sinopulmonary infections. Laboratory studies show low IgA levels and elevated alpha-fetoprotein. Genetic testing reveals a mutation in a gene involved in DNA double-strand break repair.",
      question: "Which gene is most likely mutated in this patient?",
      options: ["CFTR","ATM","NF1","TP53","BRCA1"],
      correctIndex: 1,
      explanation: "Ataxia-telangiectasia is caused by mutations in the ATM (ataxia-telangiectasia mutated) gene, which encodes a protein kinase involved in DNA double-strand break repair. The disease presents with progressive cerebellar ataxia, oculocutaneous telangiectasias, IgA deficiency, elevated alpha-fetoprotein, and increased sensitivity to ionizing radiation with elevated cancer risk.",
      optionExplanations: ["Incorrect. CFTR mutations cause cystic fibrosis with recurrent pulmonary infections but without ataxia or telangiectasias.","Correct. ATM gene mutations cause ataxia-telangiectasia with cerebellar ataxia, telangiectasias, IgA deficiency, and elevated AFP.","Incorrect. NF1 mutations cause neurofibromatosis type 1 with café-au-lait spots and neurofibromas.","Incorrect. TP53 mutations cause Li-Fraumeni syndrome with multiple cancers but not ataxia or telangiectasias.","Incorrect. BRCA1 mutations increase risk of breast and ovarian cancer but do not cause immunodeficiency or ataxia."],
      highYieldPoint: "Ataxia-telangiectasia: ATM gene mutation → defective DNA repair → cerebellar ataxia, telangiectasias, IgA deficiency, elevated AFP, increased cancer risk."
    },
    {
      vignette: "A 12-year-old boy has a history of recurrent cold staphylococcal abscesses that lack the typical warmth and erythema of acute infection. He also has coarse facial features, retained primary teeth, and severe eczema. Laboratory testing reveals serum IgE levels greater than 2000 IU/mL.",
      question: "Which of the following genetic defects is most commonly associated with this patient's condition?",
      options: ["BTK mutation","WAS gene mutation","STAT3 mutation","IL-12 receptor deficiency","FOXP3 mutation"],
      correctIndex: 2,
      explanation: "Hyper-IgE syndrome (Job syndrome) is most commonly caused by autosomal dominant STAT3 mutations. The syndrome is characterized by very high serum IgE, recurrent cold (non-inflamed) staphylococcal abscesses, eczema, coarse facies, retained primary teeth, and bone fractures. The cold abscesses result from impaired neutrophil chemotaxis.",
      optionExplanations: ["Incorrect. BTK mutations cause X-linked agammaglobulinemia with absent B cells.","Incorrect. WAS gene mutations cause Wiskott-Aldrich syndrome with thrombocytopenia, eczema, and infections.","Correct. STAT3 mutations cause hyper-IgE syndrome (Job syndrome) with cold abscesses, markedly elevated IgE, and skeletal abnormalities.","Incorrect. IL-12 receptor deficiency leads to susceptibility to mycobacterial infections due to impaired Th1 responses.","Incorrect. FOXP3 mutations cause IPEX syndrome with autoimmune polyendocrinopathy and enteropathy."],
      highYieldPoint: "Hyper-IgE (Job) syndrome: STAT3 mutation → very high IgE, cold staphylococcal abscesses, eczema, coarse facies, retained teeth, and pathologic fractures."
    },
    {
      vignette: "A 6-month-old boy presents with persistent oral candidiasis, failure to thrive, and disseminated Mycobacterium avium complex infection. His mother is HIV-negative. Genetic testing reveals a deficiency of the IL-12 receptor beta-1 chain, impairing the ability of T cells and NK cells to produce a key macrophage-activating cytokine.",
      question: "Which of the following immune functions is most directly impaired by this defect?",
      options: ["IgE class switching","IFN-gamma production and Th1 response","Complement-mediated lysis","Neutrophil chemotaxis","IgA secretion at mucosal surfaces"],
      correctIndex: 1,
      explanation: "IL-12 receptor deficiency impairs the IL-12/IFN-gamma axis, which is critical for Th1 cell differentiation and macrophage activation. Without IL-12 signaling, T cells and NK cells fail to produce adequate IFN-gamma, leading to impaired macrophage killing of intracellular organisms, particularly mycobacteria.",
      optionExplanations: ["Incorrect. IgE class switching is driven by IL-4 from Th2 cells and is not affected by IL-12 receptor deficiency.","Correct. IL-12 receptor deficiency blocks the Th1 response and IFN-gamma production, leading to susceptibility to mycobacterial and other intracellular infections.","Incorrect. Complement-mediated lysis involves the MAC and is independent of IL-12 signaling.","Incorrect. Neutrophil chemotaxis depends on chemokines like IL-8 and C5a, not the IL-12/IFN-gamma axis.","Incorrect. IgA secretion depends on TGF-beta signaling and mucosal immune mechanisms, not IL-12."],
      highYieldPoint: "IL-12 receptor or IFN-gamma receptor deficiency impairs the Th1/macrophage axis, causing susceptibility to mycobacterial infections (Mendelian susceptibility to mycobacterial disease)."
    },
    {
      vignette: "A 3-year-old boy has a history of recurrent infections with catalase-positive organisms including Staphylococcus aureus, Serratia marcescens, and Aspergillus fumigatus. His mother and two sisters are unaffected, but a maternal uncle died of overwhelming sepsis at age 5. Flow cytometry with dihydrorhodamine shows two distinct populations of neutrophils in the mother, some with normal and some with absent oxidative burst.",
      question: "What is the most likely mode of inheritance of this patient's condition?",
      options: ["Autosomal dominant","Mitochondrial inheritance","Autosomal recessive","X-linked recessive","X-linked dominant"],
      correctIndex: 3,
      explanation: "The most common form of chronic granulomatous disease (CGD) is X-linked recessive, caused by mutations in the CYBB gene encoding the gp91phox subunit of NADPH oxidase. The mother is a carrier, explaining the two populations of neutrophils on DHR testing (one with normal and one with absent oxidative burst due to random X-inactivation). The affected maternal uncle confirms X-linked inheritance.",
      optionExplanations: ["Incorrect. Autosomal dominant CGD does not exist; CGD is either X-linked recessive or autosomal recessive.","Incorrect. Mitochondrial inheritance would show maternal transmission to all children, which is not the pattern here.","Incorrect. While autosomal recessive forms of CGD exist (p47phox, p67phox mutations), the carrier mother's mosaic DHR pattern and affected maternal uncle indicate X-linked inheritance.","Correct. The most common form of CGD is X-linked recessive (CYBB/gp91phox mutation); carrier mothers show mosaic DHR patterns due to lyonization.","Incorrect. X-linked dominant conditions typically affect females more severely and are often lethal in males."],
      highYieldPoint: "Most common CGD is X-linked recessive (CYBB/gp91phox); carrier mothers show bimodal DHR oxidative burst due to random X-inactivation (lyonization)."
    },
    {
      vignette: "A 10-month-old boy presents with recurrent pyogenic infections. His immunoglobulin studies show markedly elevated IgM levels with very low IgG, IgA, and IgE. B cells are present in normal numbers but fail to undergo class switching. Genetic testing reveals a mutation affecting a ligand on T cells that normally interacts with CD40 on B cells.",
      question: "Which molecule is most likely defective in this patient?",
      options: ["CD28","CTLA-4","PD-1","ICOS","CD40 ligand (CD154)"],
      correctIndex: 4,
      explanation: "Hyper-IgM syndrome (X-linked form) is caused by a mutation in CD40 ligand (CD40L/CD154) on T cells. CD40L-CD40 interaction is essential for B-cell class switching from IgM to other isotypes. Without this signal, B cells produce only IgM, and patients are susceptible to pyogenic bacteria and opportunistic infections including Pneumocystis jirovecii and Cryptosporidium.",
      optionExplanations: ["Incorrect. CD28 is a costimulatory receptor on T cells that binds B7; its deficiency would impair T-cell activation, not class switching specifically.","Incorrect. CTLA-4 is an inhibitory checkpoint receptor; its deficiency would cause immune hyperactivation, not hyper-IgM.","Incorrect. PD-1 is an inhibitory receptor; its deficiency would enhance rather than impair immune responses.","Incorrect. ICOS (inducible co-stimulator) deficiency can cause a form of CVID but does not typically produce the classic hyper-IgM phenotype.","Correct. CD40L (CD154) deficiency prevents the CD40L-CD40 interaction needed for immunoglobulin class switching, causing hyper-IgM syndrome."],
      highYieldPoint: "Hyper-IgM syndrome (X-linked): CD40L deficiency → defective class switching → high IgM, low IgG/IgA/IgE → pyogenic and opportunistic infections (Pneumocystis, Cryptosporidium)."
    },
    {
      vignette: "A 14-year-old boy presents with partial oculocutaneous albinism and a history of recurrent pyogenic infections. Peripheral blood smear reveals giant cytoplasmic granules in his neutrophils. He also reports episodes of unexplained fevers and lymphadenopathy.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Chronic granulomatous disease","Chédiak-Higashi syndrome","Leukocyte adhesion deficiency","Myeloperoxidase deficiency","Hyper-IgE syndrome"],
      correctIndex: 1,
      explanation: "Chédiak-Higashi syndrome is an autosomal recessive disorder caused by mutations in the LYST gene, leading to defective microtubule-mediated lysosomal trafficking. This produces giant cytoplasmic granules in granulocytes and other cells. Clinical features include partial oculocutaneous albinism, recurrent pyogenic infections, peripheral neuropathy, and risk of hemophagocytic lymphohistiocytosis (accelerated phase).",
      optionExplanations: ["Incorrect. CGD is caused by NADPH oxidase deficiency and does not feature albinism or giant granules.","Correct. Chédiak-Higashi syndrome features partial albinism, giant granules in granulocytes, recurrent infections, and risk of accelerated phase (HLH).","Incorrect. LAD involves defective integrins (CD18) causing impaired neutrophil migration, not giant granules or albinism.","Incorrect. Myeloperoxidase deficiency is usually clinically benign and does not cause albinism or giant granules.","Incorrect. Hyper-IgE syndrome features cold abscesses and very high IgE without albinism or giant granules."],
      highYieldPoint: "Chédiak-Higashi syndrome: LYST gene mutation → giant granules in granulocytes, partial albinism, recurrent infections, risk of HLH (accelerated phase)."
    },
    {
      vignette: "A 19-year-old woman is found to have low serum IgA levels (<7 mg/dL) with normal IgG and IgM on routine screening. She is asymptomatic but her physician warns her about a risk of anaphylaxis if she receives blood products containing IgA.",
      question: "Which of the following is the most common primary immunodeficiency?",
      options: ["Selective IgA deficiency","X-linked agammaglobulinemia","DiGeorge syndrome","Common variable immunodeficiency","SCID"],
      correctIndex: 0,
      explanation: "Selective IgA deficiency is the most common primary immunodeficiency, with prevalence of approximately 1 in 500-700 individuals. Most patients are asymptomatic, but some develop recurrent sinopulmonary and GI infections. Patients may develop anti-IgA antibodies, putting them at risk for anaphylaxis with transfusion of IgA-containing blood products.",
      optionExplanations: ["Correct. Selective IgA deficiency is the most common primary immunodeficiency (~1:500-700), often asymptomatic but with risk of anaphylaxis to IgA-containing blood products.","Incorrect. X-linked agammaglobulinemia is a rare B-cell deficiency affecting approximately 1 in 200,000 males.","Incorrect. DiGeorge syndrome occurs in approximately 1 in 4,000 births and is less common than IgA deficiency.","Incorrect. CVID is a common immunodeficiency but less prevalent than selective IgA deficiency.","Incorrect. SCID is rare (approximately 1 in 50,000-100,000 births)."],
      highYieldPoint: "Selective IgA deficiency is the most common primary immunodeficiency (~1:500); patients risk anaphylaxis from blood products due to anti-IgA antibodies."
    }
  ],
  "Hypersensitivity reactions": [
    {
      vignette: "A 22-year-old woman with a history of seasonal allergies presents with acute-onset nasal congestion, sneezing, and watery eyes after exposure to pollen. Her symptoms resolve within hours after taking an antihistamine. Skin prick testing shows a positive wheal-and-flare reaction to multiple environmental allergens.",
      question: "Which of the following immunoglobulins is primarily responsible for mediating this patient's allergic response?",
      options: ["IgG","IgE","IgM","IgA","IgD"],
      correctIndex: 1,
      explanation: "Type I (immediate) hypersensitivity reactions are mediated by IgE antibodies that bind to FcεRI receptors on mast cells and basophils. Upon re-exposure, the allergen cross-links surface-bound IgE, triggering degranulation and release of preformed mediators (histamine, tryptase) and newly synthesized mediators (leukotrienes, prostaglandins) causing the allergic symptoms.",
      optionExplanations: ["Incorrect. IgG is involved in type II and III hypersensitivity reactions, not type I immediate allergic responses.","Correct. IgE mediates type I hypersensitivity by binding mast cell FcεRI receptors; cross-linking by allergen triggers degranulation.","Incorrect. IgM is the first antibody produced in a primary immune response and activates complement but does not mediate allergic reactions.","Incorrect. IgA is the predominant immunoglobulin at mucosal surfaces and provides secretory immunity, not allergic responses.","Incorrect. IgD is expressed on the surface of naive B cells and has no known role in allergic reactions."],
      highYieldPoint: "Type I hypersensitivity: IgE binds FcεRI on mast cells → allergen cross-links IgE → mast cell degranulation → histamine release → immediate allergic symptoms."
    },
    {
      vignette: "A 30-year-old man experiences sudden onset of severe throat swelling, difficulty breathing, hypotension, and urticaria within 5 minutes of receiving an intravenous penicillin injection. He rapidly loses consciousness. Intramuscular epinephrine is administered emergently.",
      question: "Which of the following mediators released during this reaction is primarily responsible for the bronchospasm experienced by this patient?",
      options: ["Bradykinin","Tumor necrosis factor-alpha","Interleukin-1","Leukotrienes C4, D4, E4","Platelet-activating factor"],
      correctIndex: 3,
      explanation: "Leukotrienes C4, D4, and E4 (previously known as slow-reacting substance of anaphylaxis) are potent bronchoconstrictors produced from arachidonic acid via the lipoxygenase pathway during mast cell activation. They are 100-1000 times more potent than histamine at causing sustained bronchoconstriction and are major contributors to bronchospasm in anaphylaxis.",
      optionExplanations: ["Incorrect. Bradykinin causes vasodilation and increased vascular permeability but is not the primary mediator of bronchospasm in anaphylaxis.","Incorrect. TNF-alpha contributes to inflammation and late-phase reactions but is not the primary mediator of acute bronchospasm.","Incorrect. IL-1 is a pro-inflammatory cytokine involved in fever and acute-phase responses, not immediate bronchospasm.","Correct. Leukotrienes C4/D4/E4 are the most potent bronchoconstrictors in anaphylaxis, produced via the lipoxygenase pathway from arachidonic acid.","Incorrect. PAF contributes to hypotension and platelet aggregation in anaphylaxis but is less important for bronchospasm than leukotrienes."],
      highYieldPoint: "Leukotrienes C4/D4/E4 (slow-reacting substance of anaphylaxis) are the most potent bronchoconstrictors in anaphylaxis; they are produced via the 5-lipoxygenase pathway."
    },
    {
      vignette: "A 28-year-old woman with blood type A receives a transfusion of type B packed red blood cells due to a clerical error. Within 30 minutes, she develops fever, chills, flank pain, dark urine, and hypotension. Laboratory studies show elevated free hemoglobin and decreased haptoglobin.",
      question: "Which type of hypersensitivity reaction best describes this acute hemolytic transfusion reaction?",
      options: ["Type II – antibody-mediated (cytotoxic)","Type I – immediate (anaphylactic)","Type III – immune complex-mediated","Type IV – delayed-type (cell-mediated)","Type V – stimulatory"],
      correctIndex: 0,
      explanation: "Acute hemolytic transfusion reactions are type II (cytotoxic) hypersensitivity reactions. Pre-existing anti-B IgM antibodies in the type A recipient bind to B antigens on transfused red blood cells, activating complement and causing intravascular hemolysis. This leads to hemoglobinuria, decreased haptoglobin, and potentially disseminated intravascular coagulation and renal failure.",
      optionExplanations: ["Correct. Type II reactions involve IgG or IgM antibodies binding to cell surface antigens, activating complement and causing cytotoxic destruction of the target cells.","Incorrect. Type I reactions are IgE-mediated and involve mast cell degranulation; they are not responsible for antibody-mediated red blood cell destruction.","Incorrect. Type III reactions involve deposition of antigen-antibody immune complexes in tissues, causing inflammation (e.g., serum sickness).","Incorrect. Type IV reactions are T-cell-mediated and occur over 24-72 hours (e.g., tuberculin skin test, contact dermatitis).","Incorrect. Type V (stimulatory) hypersensitivity involves antibodies that activate receptors (e.g., Graves disease); it is not a standard Gell-Coombs classification."],
      highYieldPoint: "Type II hypersensitivity: IgG/IgM antibodies against cell surface antigens → complement activation → cytotoxic cell destruction (e.g., hemolytic transfusion reaction, hemolytic disease of newborn)."
    },
    {
      vignette: "A 35-year-old man develops fever, urticarial rash, arthralgias, proteinuria, and lymphadenopathy 10 days after receiving equine antithymocyte globulin for aplastic anemia. Laboratory studies show decreased serum C3 and C4 levels. A skin biopsy shows perivascular deposition of immunoglobulin and complement in small blood vessel walls.",
      question: "Which type of hypersensitivity reaction is responsible for this patient's symptoms?",
      options: ["Type III","Type II","Type I","Type IV","Type V"],
      correctIndex: 0,
      explanation: "Serum sickness is a classic type III (immune complex-mediated) hypersensitivity reaction. Antibodies form immune complexes with the foreign protein antigen, which deposit in blood vessel walls, joints, and kidneys, activating complement and causing tissue damage. The 7-14 day lag corresponds to the time needed to mount an antibody response to the foreign protein.",
      optionExplanations: ["Correct. Serum sickness is a type III reaction with immune complex deposition in vessels, kidneys, and joints, causing vasculitis, nephritis, and arthritis.","Incorrect. Type II reactions involve antibodies against cell-surface antigens, not soluble immune complex deposition.","Incorrect. Type I reactions are IgE-mediated and occur within minutes, not after 10 days.","Incorrect. Type IV reactions are T-cell-mediated and do not involve immune complex deposition or complement consumption.","Incorrect. Type V reactions involve stimulatory antibodies against receptors and are not relevant here."],
      highYieldPoint: "Type III hypersensitivity (serum sickness): immune complex deposition → complement activation → vasculitis, arthritis, glomerulonephritis; occurs 7-14 days after antigen exposure."
    },
    {
      vignette: "A 40-year-old woman develops a pruritic, vesicular rash on her wrist 48 hours after wearing a new nickel-containing watch. Skin biopsy shows perivascular infiltration by lymphocytes and macrophages. There is no evidence of antibody or complement deposition.",
      question: "Which of the following cell types is the primary effector in this type of hypersensitivity reaction?",
      options: ["Mast cells","Neutrophils","CD4+ T lymphocytes","B lymphocytes","Natural killer cells"],
      correctIndex: 2,
      explanation: "Contact dermatitis from nickel is a type IV (delayed-type) hypersensitivity reaction mediated by sensitized CD4+ T cells. Upon re-exposure, antigen-specific T cells recognize the hapten-carrier complex presented by Langerhans cells, release cytokines (IFN-gamma, TNF), and recruit macrophages, causing the delayed inflammatory response at 24-72 hours.",
      optionExplanations: ["Incorrect. Mast cells mediate type I immediate hypersensitivity reactions through IgE-dependent degranulation.","Incorrect. Neutrophils are the primary effectors in type III hypersensitivity at sites of immune complex deposition.","Correct. CD4+ T cells (specifically Th1 cells) are the primary effectors in type IV delayed-type hypersensitivity, recruiting macrophages via IFN-gamma.","Incorrect. B lymphocytes produce antibodies involved in types I, II, and III hypersensitivity but are not the primary effectors in type IV reactions.","Incorrect. NK cells mediate innate cytotoxicity and are not the primary effectors of contact dermatitis."],
      highYieldPoint: "Type IV hypersensitivity (delayed-type): sensitized CD4+ T cells → cytokine release (IFN-gamma) → macrophage recruitment → tissue damage at 24-72 hours (e.g., contact dermatitis, TB skin test)."
    },
    {
      vignette: "A 55-year-old woman with Graves disease presents with heat intolerance, weight loss, tremor, and exophthalmos. Laboratory studies reveal suppressed TSH and elevated free T4. An autoantibody is found that binds to and stimulates the TSH receptor on thyroid follicular cells.",
      question: "Which of the following best characterizes the pathogenesis of this patient's thyroid disease?",
      options: ["Type I hypersensitivity with IgE-mediated mast cell activation","Type II hypersensitivity with stimulatory anti-receptor antibodies","Type III hypersensitivity with immune complex deposition in the thyroid","Type IV hypersensitivity with T-cell infiltration of the thyroid","Non-immune mechanism due to autonomous thyroid nodule"],
      correctIndex: 1,
      explanation: "Graves disease is classified as a type II hypersensitivity reaction involving stimulatory autoantibodies (thyroid-stimulating immunoglobulins) that bind and activate the TSH receptor. Unlike cytotoxic type II reactions that destroy cells, these antibodies mimic TSH, causing excessive thyroid hormone production. This is sometimes called type V hypersensitivity.",
      optionExplanations: ["Incorrect. Type I hypersensitivity involves IgE and mast cells in allergic reactions, not autoantibody-mediated receptor stimulation.","Correct. Graves disease is a type II hypersensitivity where stimulatory IgG autoantibodies bind and activate the TSH receptor, causing hyperthyroidism.","Incorrect. Type III reactions involve immune complex deposition; Graves disease is caused by direct receptor stimulation, not immune complexes.","Incorrect. Type IV reactions are T-cell-mediated; while T cells contribute to Graves disease, the primary pathogenic mechanism is autoantibody-mediated receptor stimulation.","Incorrect. Autonomous thyroid nodules cause hyperthyroidism through constitutive TSH receptor activation, not autoantibodies."],
      highYieldPoint: "Graves disease: type II hypersensitivity with stimulatory IgG antibodies (thyroid-stimulating immunoglobulins) that mimic TSH and activate the TSH receptor."
    },
    {
      vignette: "A 25-year-old woman with asthma presents with acute shortness of breath after taking aspirin for a headache. She has a history of nasal polyps and aspirin sensitivity. Her symptoms include bronchospasm and rhinorrhea.",
      question: "Which of the following best explains the mechanism of aspirin-induced bronchospasm in this patient?",
      options: ["IgE-mediated mast cell degranulation","T-cell-mediated delayed hypersensitivity in the airways","Direct histamine release from mast cells","Immune complex deposition in bronchial walls","Cyclooxygenase inhibition shunting arachidonic acid to the lipoxygenase pathway"],
      correctIndex: 4,
      explanation: "Aspirin-exacerbated respiratory disease (Samter triad: asthma, nasal polyps, aspirin sensitivity) occurs because aspirin inhibits cyclooxygenase (COX), blocking prostaglandin synthesis. This shunts arachidonic acid metabolism toward the 5-lipoxygenase pathway, increasing production of leukotrienes (LTC4, LTD4, LTE4), which are potent bronchoconstrictors. This is a pseudoallergic reaction, not IgE-mediated.",
      optionExplanations: ["Incorrect. Aspirin sensitivity is not IgE-mediated; it is a pharmacologic reaction due to altered eicosanoid metabolism.","Incorrect. T-cell-mediated reactions occur over 24-72 hours and do not explain acute aspirin-induced bronchospasm.","Incorrect. While some drugs cause direct mast cell degranulation, aspirin-induced bronchospasm is mediated by altered arachidonic acid metabolism.","Incorrect. Immune complex deposition causes type III hypersensitivity and is not the mechanism of aspirin-induced asthma.","Correct. COX inhibition by aspirin diverts arachidonic acid to the lipoxygenase pathway, increasing leukotriene production and causing bronchospasm."],
      highYieldPoint: "Samter triad (aspirin-exacerbated respiratory disease): asthma + nasal polyps + aspirin sensitivity; COX inhibition shunts arachidonic acid to lipoxygenase → excess leukotrienes → bronchospasm."
    },
    {
      vignette: "A 32-year-old man receives a kidney transplant and is placed on immunosuppressive therapy. Six months later, his graft function declines. Biopsy shows intimal thickening of graft blood vessels with complement deposition and IgG directed against donor HLA antigens on the vascular endothelium.",
      question: "Which type of hypersensitivity reaction best describes this form of graft rejection?",
      options: ["Type II","Type I","Type III","Type IV","Non-immune-mediated"],
      correctIndex: 0,
      explanation: "Antibody-mediated rejection (AMR) is a type II hypersensitivity reaction in which recipient antibodies (donor-specific antibodies) target donor HLA antigens on the graft vascular endothelium. Complement activation via C4d deposition causes endothelial injury, intimal thickening, and eventual graft vasculopathy. This is distinct from cellular (type IV) rejection mediated by T cells.",
      optionExplanations: ["Correct. Antibody-mediated graft rejection is a type II reaction with IgG directed against donor HLA antigens on endothelial cells, activating complement.","Incorrect. Type I reactions are IgE-mediated allergic responses and do not cause graft vascular injury.","Incorrect. Type III reactions involve soluble immune complex deposition, not antibodies directed against cell-surface HLA antigens.","Incorrect. Type IV (cellular) rejection involves T-cell-mediated destruction of graft parenchyma, not antibody/complement-mediated vascular injury.","Incorrect. The presence of IgG and complement deposition confirms an immune-mediated mechanism."],
      highYieldPoint: "Antibody-mediated rejection (AMR) is type II hypersensitivity: donor-specific antibodies target graft endothelial HLA → complement activation (C4d deposition) → vascular injury."
    },
    {
      vignette: "A 7-year-old boy develops dark-colored urine, periorbital edema, and hypertension 2 weeks after recovering from group A streptococcal pharyngitis. Urinalysis shows red blood cell casts and proteinuria. Serum C3 is decreased while C4 is normal.",
      question: "Which of the following best explains the pathogenesis of this patient's renal disease?",
      options: ["Anti-glomerular basement membrane antibodies","Immune complex deposition with complement activation","IgA deposition in the mesangium","T-cell infiltration of the glomerulus","Direct bacterial infection of the kidney"],
      correctIndex: 1,
      explanation: "Post-streptococcal glomerulonephritis is a type III hypersensitivity reaction caused by deposition of circulating immune complexes (streptococcal antigens + antibodies) in the glomerular basement membrane. This activates complement via the alternative/classical pathways (low C3, normal C4 suggests alternative pathway predominance), causing glomerular inflammation with hematuria, proteinuria, and nephritic syndrome.",
      optionExplanations: ["Incorrect. Anti-GBM antibodies cause Goodpasture syndrome with linear immunofluorescence, not the granular pattern seen in post-streptococcal GN.","Correct. Post-streptococcal GN is caused by immune complex deposition in glomeruli, activating complement and causing nephritic syndrome.","Incorrect. IgA mesangial deposition characterizes IgA nephropathy (Berger disease), which presents with gross hematuria during or shortly after an upper respiratory infection, not 2 weeks later.","Incorrect. T-cell infiltration characterizes interstitial nephritis, not post-streptococcal glomerulonephritis.","Incorrect. Post-streptococcal GN is an immune-mediated complication, not a direct bacterial infection of the kidney."],
      highYieldPoint: "Post-streptococcal glomerulonephritis: type III hypersensitivity → immune complex deposition → complement consumption (low C3) → nephritic syndrome 2-3 weeks after pharyngitis."
    },
    {
      vignette: "A 45-year-old farmer develops a fever, cough, dyspnea, and malaise 6-8 hours after exposure to moldy hay. Chest radiograph shows diffuse bilateral infiltrates. Serum precipitin testing reveals antibodies against thermophilic actinomycetes. The symptoms resolve over 1-2 days with avoidance of exposure.",
      question: "Which of the following hypersensitivity mechanisms is primarily responsible for this patient's condition?",
      options: ["IgE-mediated mast cell activation","Cytotoxic antibody against alveolar epithelial cells","Direct toxic effect of fungal spores on alveolar macrophages","Immune complex deposition in pulmonary vasculature (type III) and T-cell-mediated inflammation (type IV)","Complement-mediated lysis of pulmonary endothelium"],
      correctIndex: 3,
      explanation: "Hypersensitivity pneumonitis (farmer's lung) involves a combination of type III and type IV hypersensitivity reactions. Inhaled organic antigens form immune complexes with precipitating IgG antibodies (type III), and sensitized T cells cause granulomatous inflammation (type IV). The 4-8 hour onset is characteristic of this combined mechanism.",
      optionExplanations: ["Incorrect. IgE-mediated (type I) reactions cause immediate symptoms within minutes, not the 6-8 hour delayed onset seen here.","Incorrect. Cytotoxic antibodies (type II) against alveolar cells are not the mechanism of hypersensitivity pneumonitis.","Incorrect. While organic dusts may irritate airways, the serum precipitins confirm an immunologic mechanism, not a direct toxic effect.","Correct. Hypersensitivity pneumonitis involves both type III (immune complex) and type IV (T-cell-mediated) reactions, explaining the 4-8 hour symptom onset.","Incorrect. Complement-mediated lysis of endothelium is not the primary mechanism of hypersensitivity pneumonitis."],
      highYieldPoint: "Hypersensitivity pneumonitis (e.g., farmer's lung): combined type III (immune complexes) and type IV (T-cell/granulomatous) reaction to inhaled organic antigens; onset 4-8 hours after exposure."
    },
    {
      vignette: "A 20-year-old woman with a history of penicillin allergy requires antibiotic treatment for a serious infection. Her physician orders penicillin skin testing. A small amount of penicilloyl-polylysine is injected intradermally, and after 15 minutes, a wheal measuring 10 mm with surrounding erythema develops at the injection site.",
      question: "Which of the following mediators is most directly responsible for the wheal formation observed at the injection site?",
      options: ["Interleukin-2","Interferon-gamma","Histamine","Tumor necrosis factor-alpha","Interleukin-17"],
      correctIndex: 2,
      explanation: "The wheal-and-flare reaction in a penicillin skin test is a type I hypersensitivity response. IgE antibodies against penicillin are bound to mast cells in the skin. When the antigen is introduced, cross-linking of IgE causes mast cell degranulation and release of histamine, which increases vascular permeability (wheal) and causes vasodilation (flare) within minutes.",
      optionExplanations: ["Incorrect. IL-2 is produced by T cells to promote T-cell proliferation and is not responsible for the immediate wheal-and-flare response.","Incorrect. IFN-gamma is a Th1 cytokine that activates macrophages; it is involved in type IV, not type I, reactions.","Correct. Histamine released from mast cells causes increased vascular permeability (wheal) and vasodilation (flare) in the immediate type I response.","Incorrect. TNF-alpha contributes to inflammation and the late-phase response but is not the primary mediator of the immediate wheal.","Incorrect. IL-17 is a Th17 cytokine that recruits neutrophils and is not involved in the immediate allergic response."],
      highYieldPoint: "Histamine from mast cell degranulation causes the immediate wheal (vascular permeability) and flare (vasodilation) in type I hypersensitivity skin testing."
    },
    {
      vignette: "A 38-year-old woman is diagnosed with autoimmune hemolytic anemia. Her direct Coombs test is positive, showing IgG antibodies bound to her red blood cells. She presents with jaundice, fatigue, and splenomegaly.",
      question: "What is the primary mechanism by which red blood cells are destroyed in this condition?",
      options: ["Complement-mediated intravascular hemolysis exclusively","Immune complex deposition on red blood cell surfaces","T-cell-mediated cytotoxicity against red blood cells","Opsonization and phagocytosis by splenic macrophages","Natural killer cell-mediated antibody-dependent cellular cytotoxicity exclusively"],
      correctIndex: 3,
      explanation: "In warm autoimmune hemolytic anemia (IgG-mediated), red blood cells coated with IgG are primarily destroyed by extravascular hemolysis in the spleen. Splenic macrophages recognize the Fc portion of IgG on red blood cells via Fc receptors, leading to phagocytosis. This explains the splenomegaly. Some complement activation may occur, but extravascular hemolysis predominates.",
      optionExplanations: ["Incorrect. While complement can be activated, warm AIHA with IgG is predominantly extravascular (splenic), not intravascular. Cold AIHA (IgM) more commonly causes intravascular hemolysis.","Incorrect. The antibodies bind directly to red blood cell surface antigens (type II), not as immune complexes (type III).","Incorrect. T cells do not directly lyse red blood cells in autoimmune hemolytic anemia; this is antibody-mediated.","Correct. IgG-coated red blood cells are opsonized and removed by splenic macrophages via Fc receptor-mediated phagocytosis (extravascular hemolysis).","Incorrect. While ADCC can contribute, splenic macrophage phagocytosis is the predominant mechanism of red blood cell destruction."],
      highYieldPoint: "Warm AIHA (IgG): extravascular hemolysis via splenic macrophage phagocytosis (Fc receptors); Cold AIHA (IgM): intravascular hemolysis via complement activation."
    },
    {
      vignette: "A 50-year-old man with a history of gold mining develops progressive shortness of breath. Chest CT shows bilateral hilar lymphadenopathy and diffuse interstitial infiltrates. Transbronchial biopsy reveals non-caseating granulomas. Bronchoalveolar lavage shows a predominance of CD4+ T lymphocytes with an elevated CD4/CD8 ratio.",
      question: "Which type of hypersensitivity reaction is most consistent with the granulomatous inflammation seen in this biopsy?",
      options: ["Type I","Type II","Type IV","Type III","Combined Type I and III"],
      correctIndex: 2,
      explanation: "Granulomatous inflammation represents a type IV (delayed-type) hypersensitivity reaction. CD4+ Th1 cells recognize the antigen and release IFN-gamma, which activates macrophages. When macrophages cannot fully degrade the antigen, they fuse into multinucleated giant cells and form granulomas surrounded by a rim of lymphocytes. This occurs in sarcoidosis, tuberculosis, and chronic berylliosis.",
      optionExplanations: ["Incorrect. Type I reactions are IgE-mediated immediate responses and do not cause granuloma formation.","Incorrect. Type II reactions involve antibody-mediated cytotoxicity against cell surface antigens, not granulomas.","Correct. Granulomatous inflammation is a subtype of type IV hypersensitivity driven by CD4+ T cells and macrophages that form granulomas when the antigen cannot be eliminated.","Incorrect. Type III reactions cause vasculitis from immune complex deposition, not non-caseating granulomas.","Incorrect. Combined type I and III reactions do not produce the granulomatous pattern seen here."],
      highYieldPoint: "Granulomatous inflammation is a type IV hypersensitivity: CD4+ T cells → IFN-gamma → macrophage activation → epithelioid cells and multinucleated giant cells → granuloma formation."
    },
    {
      vignette: "A 26-year-old man has a positive tuberculin skin test (PPD) with 18 mm of induration measured at 48 hours. He has no symptoms and a normal chest X-ray. The physician explains that the induration is due to a specific type of immune response at the injection site.",
      question: "Which of the following is the correct sequence of events that produces the induration in this positive PPD test?",
      options: ["Antigen cross-links IgE on mast cells → histamine release → edema","Immune complexes deposit in dermis → complement activation → neutrophil recruitment","NK cells recognize tuberculin → perforin/granzyme release → keratinocyte apoptosis","Anti-tuberculin IgG activates complement → membrane attack complex formation → tissue necrosis","Previously sensitized T cells recognize antigen → cytokine release → macrophage recruitment and activation"],
      correctIndex: 4,
      explanation: "The tuberculin skin test (PPD/Mantoux test) is the classic example of a type IV delayed-type hypersensitivity reaction. Previously sensitized memory T cells in the skin recognize the purified protein derivative, release cytokines (IFN-gamma, IL-2), and recruit macrophages to the site. The resulting cellular infiltrate produces the characteristic induration measured at 48-72 hours.",
      optionExplanations: ["Incorrect. IgE-mast cell activation causes a wheal-and-flare response within minutes (type I), not induration at 48 hours.","Incorrect. Immune complex deposition (type III) would cause an Arthus reaction with vasculitis, not the induration pattern of PPD testing.","Incorrect. NK cells do not mediate the tuberculin skin test response; it requires antigen-specific memory T cells.","Incorrect. Anti-tuberculin antibodies and complement-mediated lysis are not the mechanism of PPD induration.","Correct. The PPD test is type IV hypersensitivity: memory T cells recognize antigen → release IFN-gamma → recruit macrophages → induration at 48-72 hours."],
      highYieldPoint: "PPD test is type IV DTH: read at 48-72 hours; induration (not erythema) is measured; sensitized T cells recruit macrophages via IFN-gamma."
    },
    {
      vignette: "A 42-year-old woman with rheumatoid arthritis develops a painful, palpable purpuric rash on her lower extremities. Skin biopsy shows leukocytoclastic vasculitis with neutrophilic infiltration and fibrinoid necrosis of small vessel walls. Immunofluorescence reveals granular deposition of IgG and C3 in vessel walls. Serum complement levels are decreased.",
      question: "Which of the following is the most likely pathogenesis of this patient's skin findings?",
      options: ["Anti-endothelial cell antibodies causing direct vascular injury","T-cell-mediated destruction of vascular endothelium","Thrombotic microangiopathy from platelet activation","IgE-mediated degranulation of perivascular mast cells","Deposition of circulating immune complexes in small vessel walls"],
      correctIndex: 4,
      explanation: "Leukocytoclastic vasculitis with granular IgG and C3 deposition in vessel walls is characteristic of type III hypersensitivity. Circulating immune complexes (containing rheumatoid factor and IgG) deposit in small vessels, activate complement, and recruit neutrophils that release lysosomal enzymes causing fibrinoid necrosis. This is common in rheumatoid arthritis and other systemic autoimmune conditions.",
      optionExplanations: ["Incorrect. Anti-endothelial antibodies (type II) would show linear immunofluorescence, not the granular pattern seen here.","Incorrect. T-cell-mediated (type IV) vasculitis would show lymphocytic rather than neutrophilic infiltration.","Incorrect. Thrombotic microangiopathy involves platelet-fibrin thrombi without immune complex deposition.","Incorrect. IgE-mediated reactions cause urticaria and angioedema, not leukocytoclastic vasculitis with fibrinoid necrosis.","Correct. Granular IgG/C3 deposition with neutrophilic infiltration and complement consumption indicates type III immune complex vasculitis."],
      highYieldPoint: "Type III vasculitis: circulating immune complexes deposit in vessel walls → complement activation → neutrophil infiltration → leukocytoclastic vasculitis with granular IF pattern."
    }
  ],
  "Autoimmune disease": [
    {
      vignette: "A 30-year-old woman presents with a bilateral, symmetric, erythematous malar rash that spares the nasolabial folds, worsening with sun exposure. She also reports fatigue, joint pain, and oral ulcers. Laboratory testing shows positive ANA and anti-dsDNA antibodies with low complement (C3 and C4) levels.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Dermatomyositis","Systemic lupus erythematosus","Rosacea","Systemic sclerosis","Mixed connective tissue disease"],
      correctIndex: 1,
      explanation: "Systemic lupus erythematosus (SLE) classically presents in young women with a malar (butterfly) rash that spares the nasolabial folds, photosensitivity, oral ulcers, and arthritis. Anti-dsDNA antibodies are highly specific for SLE and correlate with disease activity, especially lupus nephritis. Low complement levels reflect consumption by immune complex-mediated tissue damage (type III hypersensitivity).",
      optionExplanations: ["Incorrect. Dermatomyositis features a heliotrope rash (periorbital) and Gottron papules with proximal muscle weakness, not a malar rash.","Correct. SLE presents with malar rash sparing nasolabial folds, photosensitivity, oral ulcers, positive ANA, anti-dsDNA, and low complement.","Incorrect. Rosacea causes facial erythema but does not spare the nasolabial folds and is not associated with autoantibodies or systemic symptoms.","Incorrect. Systemic sclerosis presents with skin thickening, Raynaud phenomenon, and anti-Scl-70 or anti-centromere antibodies.","Incorrect. MCTD presents with overlapping features and anti-U1 RNP antibodies, not anti-dsDNA."],
      highYieldPoint: "SLE: malar rash (spares nasolabial folds), anti-dsDNA (specific, correlates with nephritis), anti-Smith (most specific), low complement (type III hypersensitivity)."
    },
    {
      vignette: "A 45-year-old woman presents with progressive difficulty swallowing solids and liquids, tightening of the skin on her hands and face, and Raynaud phenomenon. Physical examination reveals sclerodactyly and digital pitting scars. She has anti-Scl-70 (anti-topoisomerase I) antibodies.",
      question: "Which of the following complications is this patient at greatest risk for developing?",
      options: ["Interstitial lung disease and pulmonary fibrosis","Lupus nephritis","Pericardial effusion","Aortic aneurysm","Hemolytic anemia"],
      correctIndex: 0,
      explanation: "Anti-Scl-70 antibodies are associated with diffuse systemic sclerosis (scleroderma), which carries a significant risk of interstitial lung disease and pulmonary fibrosis. Pulmonary involvement is the leading cause of death in diffuse scleroderma. The fibrotic process affects the lungs, skin, GI tract (esophageal dysmotility), and kidneys (scleroderma renal crisis).",
      optionExplanations: ["Correct. Diffuse scleroderma with anti-Scl-70 carries high risk of interstitial lung disease/pulmonary fibrosis, the leading cause of death.","Incorrect. Lupus nephritis is a complication of SLE, not systemic sclerosis.","Incorrect. While pericarditis can occur, interstitial lung disease is a more significant and common complication.","Incorrect. Aortic aneurysm is not a typical complication of systemic sclerosis.","Incorrect. Hemolytic anemia is associated with SLE and autoimmune hemolytic anemia, not scleroderma."],
      highYieldPoint: "Diffuse scleroderma (anti-Scl-70): interstitial lung disease/pulmonary fibrosis is the leading cause of death; limited scleroderma (anti-centromere): pulmonary hypertension."
    },
    {
      vignette: "A 28-year-old woman presents with dry eyes, dry mouth, and bilateral parotid gland enlargement. She has difficulty chewing dry food and frequently drinks water throughout the day. Laboratory testing reveals positive anti-Ro (SSA) and anti-La (SSB) antibodies. Lip biopsy shows focal lymphocytic sialadenitis.",
      question: "If this patient becomes pregnant, which of the following fetal complications is she at highest risk for due to her specific autoantibody profile?",
      options: ["Neural tube defects","Fetal thrombocytopenia","Neonatal lupus with congenital heart block","Hemolytic disease of the newborn","Congenital hypothyroidism"],
      correctIndex: 2,
      explanation: "Anti-Ro (SSA) antibodies can cross the placenta and cause neonatal lupus, which includes a characteristic complication of congenital heart block (third-degree AV block). The anti-Ro antibodies damage the fetal cardiac conduction system. This occurs regardless of whether the mother has SLE or Sjögren syndrome; the risk is associated with the anti-Ro antibody itself.",
      optionExplanations: ["Incorrect. Neural tube defects are associated with folate deficiency, not anti-Ro/anti-La antibodies.","Incorrect. Fetal thrombocytopenia is associated with anti-platelet antibodies (neonatal alloimmune thrombocytopenia), not anti-Ro.","Correct. Anti-Ro (SSA) antibodies cross the placenta and can cause neonatal lupus with congenital heart block by damaging the fetal cardiac conduction system.","Incorrect. Hemolytic disease of the newborn is caused by anti-Rh or anti-ABO antibodies, not anti-Ro.","Incorrect. Congenital hypothyroidism results from thyroid dysgenesis or dyshormonogenesis, not anti-Ro antibodies."],
      highYieldPoint: "Anti-Ro (SSA) antibodies in Sjögren syndrome or SLE can cross the placenta and cause neonatal lupus with congenital complete heart block."
    },
    {
      vignette: "A 55-year-old woman presents with progressive proximal muscle weakness over the past 3 months. She has difficulty rising from a chair, climbing stairs, and combing her hair. Serum creatine kinase is markedly elevated. Physical examination reveals a violaceous discoloration of the eyelids and erythematous papules over the metacarpophalangeal and interphalangeal joints.",
      question: "Which of the following autoantibodies is most commonly associated with this patient's condition?",
      options: ["Anti-centromere","Anti-dsDNA","Anti-mitochondrial","Anti-smooth muscle","Anti-Jo-1"],
      correctIndex: 4,
      explanation: "This patient has dermatomyositis (heliotrope rash on eyelids, Gottron papules on joints, proximal muscle weakness, elevated CK). Anti-Jo-1 (anti-histidyl-tRNA synthetase) is the most common myositis-specific antibody and is associated with antisynthetase syndrome, which includes myositis, interstitial lung disease, mechanic's hands, Raynaud phenomenon, and arthritis.",
      optionExplanations: ["Incorrect. Anti-centromere antibodies are associated with limited systemic sclerosis (CREST syndrome).","Incorrect. Anti-dsDNA antibodies are specific for systemic lupus erythematosus.","Incorrect. Anti-mitochondrial antibodies are highly specific for primary biliary cholangitis.","Incorrect. Anti-smooth muscle antibodies are associated with autoimmune hepatitis type 1.","Correct. Anti-Jo-1 is the most common myositis-specific antibody, associated with dermatomyositis/polymyositis and antisynthetase syndrome."],
      highYieldPoint: "Anti-Jo-1 (anti-histidyl-tRNA synthetase): most common myositis-specific antibody; antisynthetase syndrome = myositis + ILD + mechanic's hands + Raynaud + arthritis."
    },
    {
      vignette: "A 50-year-old woman presents with fatigue, pruritus, and jaundice. Physical examination reveals hepatomegaly and xanthomas around her eyes. Laboratory testing shows elevated alkaline phosphatase and gamma-glutamyl transferase. Anti-mitochondrial antibodies (AMA) are strongly positive.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Autoimmune hepatitis","Primary biliary cholangitis","Hepatitis C cirrhosis","Primary sclerosing cholangitis","Wilson disease"],
      correctIndex: 1,
      explanation: "Primary biliary cholangitis (PBC, formerly primary biliary cirrhosis) is an autoimmune disease characterized by progressive destruction of intrahepatic bile ducts. Anti-mitochondrial antibodies (specifically against pyruvate dehydrogenase complex E2 subunit) are present in >90% of cases and are highly specific. It predominantly affects middle-aged women and presents with fatigue, pruritus, jaundice, and cholestatic liver enzymes.",
      optionExplanations: ["Incorrect. Autoimmune hepatitis presents with elevated transaminases and is associated with anti-smooth muscle or anti-LKM antibodies, not AMA.","Correct. PBC is characterized by AMA positivity, cholestatic liver enzymes, and progressive destruction of small intrahepatic bile ducts.","Incorrect. Hepatitis C cirrhosis is caused by chronic viral infection and is not associated with anti-mitochondrial antibodies.","Incorrect. Primary sclerosing cholangitis affects extrahepatic and large intrahepatic bile ducts and is associated with p-ANCA and ulcerative colitis, not AMA.","Incorrect. Wilson disease is caused by copper accumulation due to ATP7B mutation and presents with hepatic and neurologic symptoms, not AMA positivity."],
      highYieldPoint: "Primary biliary cholangitis: anti-mitochondrial antibodies (>90%), middle-aged women, pruritus, cholestatic pattern, granulomatous destruction of intrahepatic bile ducts."
    },
    {
      vignette: "A 35-year-old woman presents with episodic muscle weakness that worsens with activity and improves with rest. She notes drooping eyelids and double vision, especially in the evenings. Administration of edrophonium chloride temporarily resolves her symptoms. Autoantibodies against a specific receptor at the neuromuscular junction are detected.",
      question: "Which of the following receptors is targeted by the pathogenic autoantibodies in this patient?",
      options: ["Muscarinic acetylcholine receptor","Glycine receptor","NMDA glutamate receptor","Voltage-gated calcium channel","Nicotinic acetylcholine receptor"],
      correctIndex: 4,
      explanation: "Myasthenia gravis is caused by autoantibodies against the nicotinic acetylcholine receptor (AChR) at the neuromuscular junction. These antibodies block and downregulate AChRs, impairing neuromuscular transmission. Symptoms worsen with repeated use (fatigable weakness) and improve with acetylcholinesterase inhibitors (edrophonium, pyridostigmine) that increase ACh at the synapse.",
      optionExplanations: ["Incorrect. Muscarinic receptors are found in smooth muscle, cardiac muscle, and glands; they are not the target in myasthenia gravis.","Incorrect. Anti-glycine receptor antibodies are associated with stiff-person syndrome and progressive encephalomyelitis.","Incorrect. Anti-NMDA receptor antibodies cause autoimmune encephalitis with psychiatric symptoms and seizures.","Incorrect. Antibodies against voltage-gated calcium channels cause Lambert-Eaton myasthenic syndrome, associated with small cell lung cancer.","Correct. Anti-nicotinic AChR antibodies at the neuromuscular junction cause myasthenia gravis by blocking and destroying receptors."],
      highYieldPoint: "Myasthenia gravis: anti-nicotinic AChR antibodies → fatigable weakness (worse with use, better with rest); associated with thymoma; edrophonium test is diagnostic."
    },
    {
      vignette: "A 25-year-old man presents with bloody diarrhea, abdominal cramping, and urgency for the past 4 weeks. Colonoscopy reveals continuous mucosal inflammation starting from the rectum and extending proximally without skip lesions. Biopsy shows crypt abscesses and mucosal ulceration limited to the mucosa and submucosa.",
      question: "Which of the following extraintestinal manifestations is most specifically associated with this patient's underlying condition?",
      options: ["Primary sclerosing cholangitis","Erythema nodosum","Uveitis","Peripheral arthritis","Pyoderma gangrenosum"],
      correctIndex: 0,
      explanation: "The presentation is consistent with ulcerative colitis (continuous mucosal inflammation from rectum, crypt abscesses, limited to mucosa/submucosa). Primary sclerosing cholangitis (PSC) is most specifically associated with ulcerative colitis, occurring in up to 5% of UC patients. PSC causes fibrosing inflammation of intrahepatic and extrahepatic bile ducts. Other extraintestinal manifestations like erythema nodosum and uveitis occur in both UC and Crohn disease.",
      optionExplanations: ["Correct. PSC is specifically associated with ulcerative colitis; approximately 70-80% of PSC patients have underlying UC.","Incorrect. Erythema nodosum occurs in both UC and Crohn disease and correlates with disease activity.","Incorrect. Uveitis can occur as an extraintestinal manifestation of both UC and Crohn disease.","Incorrect. Peripheral arthritis is a common extraintestinal manifestation of both UC and Crohn disease.","Incorrect. Pyoderma gangrenosum occurs in both UC and Crohn disease and is not specific to UC alone."],
      highYieldPoint: "Primary sclerosing cholangitis is specifically associated with ulcerative colitis; PSC can progress to cholangiocarcinoma and is associated with p-ANCA."
    },
    {
      vignette: "A 60-year-old man presents with progressive muscle weakness in his legs. Unlike typical myasthenia gravis, his weakness improves with sustained or repeated muscle activity. He has a 40 pack-year smoking history. CT of the chest reveals a mass in the hilum of the left lung.",
      question: "Which autoantibody is most likely responsible for this patient's neuromuscular symptoms?",
      options: ["Anti-nicotinic acetylcholine receptor antibody","Anti-voltage-gated calcium channel antibody","Anti-striated muscle antibody","Anti-Hu antibody","Anti-amphiphysin antibody"],
      correctIndex: 1,
      explanation: "Lambert-Eaton myasthenic syndrome (LEMS) is caused by autoantibodies against presynaptic voltage-gated calcium channels (VGCCs) at the neuromuscular junction. These antibodies impair calcium-dependent acetylcholine release. Unlike myasthenia gravis, symptoms improve with repeated stimulation (facilitation). LEMS is strongly associated with small cell lung carcinoma as a paraneoplastic syndrome.",
      optionExplanations: ["Incorrect. Anti-AChR antibodies cause myasthenia gravis, which worsens (not improves) with repeated activity.","Correct. Anti-VGCC antibodies cause Lambert-Eaton syndrome with weakness that improves with repeated use; associated with small cell lung cancer.","Incorrect. Anti-striated muscle antibodies are associated with myasthenia gravis with thymoma but do not cause the pattern described.","Incorrect. Anti-Hu (ANNA-1) antibodies cause paraneoplastic encephalomyelitis and sensory neuropathy but not the myasthenic pattern described.","Incorrect. Anti-amphiphysin antibodies are associated with stiff-person syndrome and breast cancer, not LEMS."],
      highYieldPoint: "Lambert-Eaton syndrome: anti-VGCC antibodies → decreased ACh release → weakness that improves with use (facilitation); associated with small cell lung cancer."
    },
    {
      vignette: "A 22-year-old man presents with recurrent oral and genital ulcers, uveitis, and a pathergy reaction (papule formation at venipuncture site after 24-48 hours). He is of Turkish descent. HLA typing reveals HLA-B51 positivity.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Reactive arthritis","Systemic lupus erythematosus","Herpes simplex virus infection","Behçet disease","Syphilis"],
      correctIndex: 3,
      explanation: "Behçet disease is a systemic vasculitis characterized by the triad of recurrent oral ulcers, genital ulcers, and uveitis. Pathergy (exaggerated skin response to minor trauma) is a characteristic feature used in diagnosis. The disease is most common along the ancient Silk Road (Turkey, Middle East, East Asia) and is strongly associated with HLA-B51.",
      optionExplanations: ["Incorrect. Reactive arthritis features the triad of arthritis, urethritis, and conjunctivitis (not oral/genital ulcers with pathergy).","Incorrect. SLE can cause oral ulcers but does not typically present with genital ulcers or pathergy.","Incorrect. HSV causes oral and genital ulcers but does not cause pathergy or uveitis as a triad.","Correct. Behçet disease: oral ulcers + genital ulcers + uveitis + pathergy + HLA-B51 association; common in Silk Road populations.","Incorrect. Syphilis causes chancre (painless ulcer) and can affect the eyes but does not produce the Behçet triad with pathergy."],
      highYieldPoint: "Behçet disease: recurrent oral ulcers + genital ulcers + uveitis + pathergy; HLA-B51 associated; vasculitis affecting all sizes of vessels."
    },
    {
      vignette: "A 40-year-old woman presents with symmetric joint pain and stiffness in her hands lasting over an hour each morning. Physical examination reveals swelling of the metacarpophalangeal (MCP) and proximal interphalangeal (PIP) joints bilaterally with ulnar deviation of the fingers. Serum testing is positive for anti-cyclic citrullinated peptide (anti-CCP) antibodies and rheumatoid factor.",
      question: "Which of the following best describes the pathogenesis of joint destruction in this patient?",
      options: ["Crystal deposition causing acute inflammatory arthritis","Infection-triggered molecular mimicry with joint cartilage","Antibody-mediated direct destruction of chondrocytes","CD4+ T-cell-mediated synovial inflammation with pannus formation","Deposition of amyloid fibrils in the joint space"],
      correctIndex: 3,
      explanation: "Rheumatoid arthritis is driven by CD4+ T-cell activation in the synovium, leading to cytokine release (TNF-alpha, IL-1, IL-6) and formation of pannus, an inflamed granulation tissue that erodes cartilage and bone. The inflammatory process involves macrophages, fibroblast-like synoviocytes, and recruited inflammatory cells. Anti-CCP antibodies are highly specific for RA.",
      optionExplanations: ["Incorrect. Crystal arthropathy (gout, pseudogout) involves urate or calcium pyrophosphate crystals, not autoimmune synovial inflammation.","Incorrect. While molecular mimicry may contribute to RA initiation, the joint destruction mechanism is pannus-mediated, not direct cross-reactive antibody attack.","Incorrect. Antibodies do not directly destroy chondrocytes; joint damage is mediated by pannus and inflammatory cytokines.","Correct. RA involves CD4+ T-cell-driven synovial inflammation → pannus formation → cartilage and bone erosion through metalloproteinases and osteoclast activation.","Incorrect. Amyloid deposition can be a complication of chronic RA (AA amyloidosis) but is not the primary mechanism of joint destruction."],
      highYieldPoint: "Rheumatoid arthritis: CD4+ T-cell-mediated synovitis → pannus formation → cartilage/bone erosion; anti-CCP (most specific) and RF (sensitive but not specific)."
    },
    {
      vignette: "A 14-year-old boy develops arthritis in his left knee 3 weeks after an episode of urethritis and conjunctivitis following a gastrointestinal infection with Campylobacter. He is HLA-B27 positive.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Reactive arthritis","Septic arthritis","Juvenile idiopathic arthritis","Rheumatoid arthritis","Psoriatic arthritis"],
      correctIndex: 0,
      explanation: "Reactive arthritis (formerly Reiter syndrome) classically presents with the triad of arthritis, urethritis, and conjunctivitis following a genitourinary or gastrointestinal infection (Campylobacter, Shigella, Salmonella, Chlamydia, Yersinia). It is strongly associated with HLA-B27. The arthritis is typically asymmetric and affects large joints of the lower extremities.",
      optionExplanations: ["Correct. Reactive arthritis: post-infectious arthritis + urethritis + conjunctivitis; associated with HLA-B27 and triggered by GI/GU infections.","Incorrect. Septic arthritis involves direct infection of the joint and would show positive joint culture; reactive arthritis is sterile.","Incorrect. Juvenile idiopathic arthritis is a diagnosis of exclusion and does not present with the classic triad following infection.","Incorrect. Rheumatoid arthritis causes symmetric small joint involvement and is not triggered by preceding infections in the same way.","Incorrect. Psoriatic arthritis is associated with psoriasis and presents with dactylitis and nail changes, not the post-infectious triad."],
      highYieldPoint: "Reactive arthritis: arthritis + urethritis + conjunctivitis post-GI/GU infection (can't see, can't pee, can't climb a tree); HLA-B27 associated."
    },
    {
      vignette: "A 32-year-old woman presents with progressive weakness in her legs over 2 days following a respiratory infection. Deep tendon reflexes are absent bilaterally. CSF analysis shows elevated protein with a normal cell count (albuminocytologic dissociation). Nerve conduction studies reveal decreased conduction velocity consistent with demyelination.",
      question: "Which of the following is the most likely mechanism of nerve damage in this condition?",
      options: ["Immune complex deposition in peripheral nerve vasculature","Direct viral invasion of peripheral nerve Schwann cells","Autoantibodies against myelin-associated glycoprotein mediated by molecular mimicry","CD8+ T-cell-mediated destruction of motor neurons in the spinal cord","Complement-mediated demyelination of the central nervous system"],
      correctIndex: 2,
      explanation: "Guillain-Barré syndrome (GBS) is an acute inflammatory demyelinating polyneuropathy triggered by molecular mimicry. Antibodies generated against microbial antigens (e.g., Campylobacter jejuni lipooligosaccharides) cross-react with gangliosides and glycolipids on peripheral nerve myelin, causing complement-mediated demyelination. The ascending weakness with areflexia and albuminocytologic dissociation are characteristic.",
      optionExplanations: ["Incorrect. Immune complex deposition in vasculature causes vasculitis, not the demyelinating pattern of GBS.","Incorrect. GBS is not caused by direct viral invasion; it is an autoimmune post-infectious process.","Correct. GBS involves molecular mimicry where post-infectious antibodies cross-react with peripheral nerve myelin components, causing demyelination.","Incorrect. Motor neuron destruction occurs in ALS (amyotrophic lateral sclerosis), not GBS, which is a peripheral demyelinating disease.","Incorrect. CNS demyelination occurs in multiple sclerosis; GBS affects the peripheral nervous system."],
      highYieldPoint: "Guillain-Barré syndrome: post-infectious molecular mimicry → anti-ganglioside antibodies → peripheral nerve demyelination → ascending paralysis with albuminocytologic dissociation."
    },
    {
      vignette: "A 25-year-old woman presents with a 6-month history of fatigue, cold intolerance, weight gain, constipation, and dry skin. Physical examination reveals a diffusely enlarged, non-tender thyroid. Laboratory testing shows elevated TSH and low free T4. Anti-thyroid peroxidase (anti-TPO) antibodies are strongly positive.",
      question: "Which of the following best describes the mechanism of thyroid destruction in this patient?",
      options: ["Stimulatory antibodies against the TSH receptor","Immune complex deposition in thyroid follicles","Iodine-induced direct toxicity to thyroid cells","Granulomatous inflammation triggered by viral infection","T-cell-mediated cytotoxicity and antibody-dependent cell destruction of thyroid follicular cells"],
      correctIndex: 4,
      explanation: "Hashimoto thyroiditis is caused by a combination of cell-mediated (CD8+ cytotoxic T cells) and humoral (anti-TPO and anti-thyroglobulin antibodies) immune destruction of thyroid follicular cells. This leads to progressive hypothyroidism. The thyroid shows lymphocytic infiltration with germinal center formation and Hürthle cell metaplasia. It is the most common cause of hypothyroidism in iodine-sufficient areas.",
      optionExplanations: ["Incorrect. Stimulatory anti-TSH receptor antibodies cause Graves disease (hyperthyroidism), not the hypothyroidism seen here.","Incorrect. Immune complex deposition is not the primary mechanism of Hashimoto thyroiditis.","Incorrect. Iodine excess can cause thyroid dysfunction (Wolff-Chaikoff effect) but does not produce the autoimmune pattern described.","Incorrect. Granulomatous (de Quervain) thyroiditis is a subacute, usually post-viral, painful condition that is self-limited.","Correct. Hashimoto thyroiditis involves both cytotoxic T cells and anti-thyroid antibodies (anti-TPO, anti-thyroglobulin) that destroy thyroid follicular cells."],
      highYieldPoint: "Hashimoto thyroiditis: anti-TPO antibodies + cytotoxic T cells → thyroid destruction → hypothyroidism; most common cause of hypothyroidism in developed countries."
    },
    {
      vignette: "A 42-year-old woman presents with worsening fatigue, bilateral lower extremity edema, and foamy urine. Her blood pressure is 160/100 mmHg. Urinalysis shows 4+ proteinuria with red blood cell casts. Serum anti-dsDNA antibodies are elevated and complement levels (C3, C4) are significantly decreased. Kidney biopsy shows diffuse proliferative glomerulonephritis with wire-loop lesions and subendothelial immune complex deposition.",
      question: "Which class of lupus nephritis is most consistent with these findings?",
      options: ["Class II – Mesangial proliferative","Class III – Focal proliferative","Class IV – Diffuse proliferative","Class V – Membranous","Class VI – Advanced sclerosing"],
      correctIndex: 2,
      explanation: "Class IV diffuse proliferative lupus nephritis is the most common and most severe form of lupus nephritis. It is characterized by diffuse proliferative changes, wire-loop lesions (thickened capillary walls due to subendothelial immune complex deposits), and significantly decreased complement levels. Anti-dsDNA antibody levels correlate with disease activity in lupus nephritis.",
      optionExplanations: ["Incorrect. Class II (mesangial proliferative) shows mild mesangial expansion and is usually clinically mild.","Incorrect. Class III (focal proliferative) affects <50% of glomeruli and is less severe than class IV.","Correct. Class IV (diffuse proliferative) is the most common and severe form, characterized by diffuse involvement, wire-loop lesions, and subendothelial deposits.","Incorrect. Class V (membranous) presents with nephrotic syndrome and subepithelial (not subendothelial) deposits.","Incorrect. Class VI (advanced sclerosing) shows >90% globally sclerosed glomeruli and represents end-stage disease."],
      highYieldPoint: "Class IV diffuse proliferative lupus nephritis: most common and severe; wire-loop lesions, subendothelial deposits, low complement, elevated anti-dsDNA."
    },
    {
      vignette: "A 65-year-old woman presents with muscle pain, jaw claudication, and a persistent headache localized to her right temple. She also reports recent-onset visual disturbances in her right eye. ESR is 95 mm/hr and C-reactive protein is markedly elevated. Temporal artery biopsy shows transmural granulomatous inflammation with fragmentation of the internal elastic lamina and multinucleated giant cells.",
      question: "What is the most feared complication if this condition is left untreated?",
      options: ["Aortic dissection","Stroke from carotid artery occlusion","Myocardial infarction","Permanent vision loss from ophthalmic artery involvement","Renal artery aneurysm"],
      correctIndex: 3,
      explanation: "Giant cell (temporal) arteritis is a granulomatous vasculitis of large and medium arteries, most commonly the temporal artery and its branches, including the ophthalmic artery. The most feared complication is permanent blindness due to anterior ischemic optic neuropathy from ophthalmic artery involvement. This is why empiric high-dose corticosteroids should be started immediately without waiting for biopsy results.",
      optionExplanations: ["Incorrect. Aortic involvement can occur but is not the most immediate feared complication.","Incorrect. Stroke is less common than visual loss in temporal arteritis.","Incorrect. Myocardial infarction is not a typical complication of temporal arteritis.","Correct. Permanent vision loss from ophthalmic artery involvement is the most feared complication; treat empirically with corticosteroids before biopsy.","Incorrect. Renal artery aneurysm is associated with polyarteritis nodosa, not giant cell arteritis."],
      highYieldPoint: "Giant cell arteritis: temporal headache, jaw claudication, visual disturbances, elevated ESR; treat immediately with high-dose steroids to prevent irreversible blindness."
    }
  ],
  "Transplant immunology": [
    {
      vignette: "A 45-year-old man with end-stage renal disease receives a kidney transplant from a deceased donor. Within minutes of reperfusion, the graft becomes cyanotic, mottled, and swollen. The surgeon notes immediate graft failure. The patient is found to have preformed anti-donor HLA antibodies from a prior blood transfusion.",
      question: "Which type of transplant rejection is most likely occurring in this patient?",
      options: ["Graft-versus-host disease","Acute cellular rejection","Acute humoral rejection","Chronic rejection","Hyperacute rejection"],
      correctIndex: 4,
      explanation: "Hyperacute rejection occurs within minutes to hours after transplantation and is caused by preformed recipient antibodies against donor HLA antigens or ABO blood group antigens. These antibodies activate complement, causing widespread thrombosis and vascular damage in the graft. It results in immediate graft failure and is prevented by ABO matching and crossmatch testing before transplantation.",
      optionExplanations: ["Incorrect. GVHD occurs when donor immune cells attack recipient tissues, typically after bone marrow transplantation.","Incorrect. Acute cellular rejection occurs weeks to months after transplantation and is T-cell-mediated.","Incorrect. Acute humoral rejection occurs weeks to months later with de novo antibody formation, not immediately with preformed antibodies.","Incorrect. Chronic rejection develops over months to years with gradual graft fibrosis and vascular changes.","Correct. Hyperacute rejection occurs within minutes due to preformed anti-donor antibodies, causing complement activation and immediate graft thrombosis."],
      highYieldPoint: "Hyperacute rejection: preformed anti-donor antibodies → complement activation → thrombosis → immediate graft failure (minutes to hours); prevented by crossmatch testing."
    },
    {
      vignette: "A 38-year-old woman who received a liver transplant 3 weeks ago develops fever, jaundice, and rising liver enzymes. Biopsy of the transplanted liver shows a dense lymphocytic infiltrate in the portal tracts with bile duct damage and endotheliitis (lymphocytes beneath the vascular endothelium).",
      question: "Which of the following immune cells is primarily responsible for this type of rejection?",
      options: ["B lymphocytes","Eosinophils","Natural killer cells","CD8+ cytotoxic T lymphocytes","Neutrophils"],
      correctIndex: 3,
      explanation: "Acute cellular rejection is primarily mediated by CD8+ cytotoxic T lymphocytes that recognize donor MHC class I antigens on graft cells. The biopsy findings of lymphocytic infiltration in portal tracts with endotheliitis and bile duct damage are characteristic. CD4+ T cells also contribute by recognizing donor MHC class II and providing help. This type of rejection typically occurs within weeks to months and responds to increased immunosuppression.",
      optionExplanations: ["Incorrect. B lymphocytes produce antibodies involved in humoral rejection, not the cellular infiltrate pattern described here.","Incorrect. Eosinophils may be present in rejection but are not the primary effector cells.","Incorrect. NK cells contribute to innate graft rejection but are not the predominant cells in acute cellular rejection with portal tract infiltrates.","Correct. CD8+ cytotoxic T cells are the primary effectors in acute cellular rejection, directly killing graft cells expressing foreign MHC class I.","Incorrect. Neutrophils are involved in hyperacute rejection and early nonspecific inflammation, not the lymphocytic pattern of acute cellular rejection."],
      highYieldPoint: "Acute cellular rejection: CD8+ T cells recognize donor MHC I → lymphocytic infiltrate in graft (portal tracts in liver, tubulitis in kidney); treatable with increased immunosuppression."
    },
    {
      vignette: "A 50-year-old man received a heart transplant 5 years ago. He now presents with progressive dyspnea on exertion and fatigue. Coronary angiography shows diffuse concentric narrowing of the coronary arteries. Endomyocardial biopsy demonstrates intimal fibrosis and smooth muscle proliferation in the graft vasculature with minimal inflammatory infiltrate.",
      question: "Which of the following best describes this process?",
      options: ["Hyperacute rejection","Acute cellular rejection","Recurrence of original cardiac disease","Chronic rejection (graft vasculopathy)","Acute antibody-mediated rejection"],
      correctIndex: 3,
      explanation: "Chronic rejection manifests as graft vasculopathy (also called transplant-associated arteriosclerosis) and is characterized by progressive concentric intimal fibrosis and smooth muscle proliferation in graft vessels. It develops over months to years and is the leading cause of late graft failure in heart transplant recipients. Both cellular and humoral immune mechanisms contribute, along with non-immune factors.",
      optionExplanations: ["Incorrect. Hyperacute rejection occurs within minutes and causes thrombosis, not progressive vascular fibrosis.","Incorrect. Acute cellular rejection shows dense lymphocytic infiltration, not the fibrotic pattern with minimal inflammation described.","Incorrect. Recurrence of the original disease is possible but would not present as diffuse concentric coronary narrowing with intimal fibrosis of graft vessels.","Correct. Chronic rejection/graft vasculopathy: progressive intimal fibrosis and smooth muscle proliferation in graft vessels over months to years; leading cause of late graft loss.","Incorrect. Acute AMR presents with complement deposition and acute graft dysfunction, not chronic progressive vascular changes."],
      highYieldPoint: "Chronic rejection (graft vasculopathy): progressive intimal fibrosis → concentric vessel narrowing → ischemia → late graft failure; leading cause of death in heart transplant recipients."
    },
    {
      vignette: "A 30-year-old woman with leukemia receives an allogeneic bone marrow transplant. Four weeks later, she develops a maculopapular skin rash, profuse watery diarrhea, and jaundice with elevated bilirubin and liver enzymes. Skin biopsy shows lymphocytic infiltration with apoptosis of basal keratinocytes.",
      question: "Which of the following best describes the pathogenesis of this patient's condition?",
      options: ["Recipient T cells attacking the bone marrow graft","Recipient antibodies against donor HLA antigens","Donor T cells attacking recipient epithelial tissues","Donor NK cells mediating antibody-dependent cytotoxicity","Opportunistic infection due to immunosuppression"],
      correctIndex: 2,
      explanation: "Graft-versus-host disease (GVHD) occurs when immunocompetent donor T cells recognize and attack recipient tissues. The classic triad targets the skin (rash), liver (jaundice), and GI tract (diarrhea). GVHD is most common after allogeneic bone marrow/stem cell transplantation because the graft contains mature donor T cells. It can also occur with non-irradiated blood transfusions in immunocompromised patients.",
      optionExplanations: ["Incorrect. Recipient-versus-graft response would cause graft rejection, not the multiorgan syndrome affecting recipient tissues.","Incorrect. Recipient antibodies against donor HLA would cause graft rejection, not the clinical picture of GVHD.","Correct. GVHD: donor T cells recognize recipient MHC → attack recipient skin, liver, and GI tract → rash, jaundice, diarrhea.","Incorrect. GVHD is primarily T-cell-mediated, not NK-cell- or ADCC-mediated.","Incorrect. While infections occur after transplant, the biopsy findings of lymphocytic infiltration with keratinocyte apoptosis are diagnostic of GVHD."],
      highYieldPoint: "GVHD: donor T cells attack recipient tissues (skin rash, liver jaundice, GI diarrhea); occurs after allogeneic bone marrow transplant; can also occur with non-irradiated blood products."
    },
    {
      vignette: "A transplant immunologist is counseling a patient about the role of HLA matching in kidney transplantation. She explains that certain HLA molecules are more important for graft survival than others and that the best outcomes are achieved with zero-antigen mismatch donors.",
      question: "Which of the following HLA loci is most important for matching in kidney transplantation?",
      options: ["HLA-A","HLA-DR","HLA-C","HLA-B","HLA-DQ"],
      correctIndex: 1,
      explanation: "HLA-DR matching is the most important factor for kidney transplant outcomes. HLA-DR molecules are MHC class II proteins expressed on antigen-presenting cells and are the primary targets recognized by recipient CD4+ T cells through the indirect pathway of allorecognition. While matching at HLA-A, -B, and -DR are all considered, HLA-DR mismatch has the greatest impact on graft survival.",
      optionExplanations: ["Incorrect. HLA-A matching contributes to graft survival but is less important than HLA-DR.","Correct. HLA-DR matching is the single most important HLA locus for kidney transplant outcomes, as DR mismatch most strongly affects graft survival.","Incorrect. HLA-C matching is not routinely considered in solid organ transplant matching protocols.","Incorrect. HLA-B matching is considered in transplant compatibility but has less impact than HLA-DR.","Incorrect. HLA-DQ matching is gaining recognition but is not yet considered as critical as HLA-DR in standard matching protocols."],
      highYieldPoint: "HLA-DR matching is the most important factor in kidney transplant survival; HLA-A, -B, and -DR are the three loci routinely matched for solid organ transplantation."
    },
    {
      vignette: "A 55-year-old man undergoes cardiac transplantation. His immunosuppressive regimen includes a calcineurin inhibitor that blocks a key transcription factor required for IL-2 gene expression in T cells. He is monitored closely for nephrotoxicity as a major side effect of this drug.",
      question: "Which of the following immunosuppressive drugs is most likely being used?",
      options: ["Cyclosporine","Azathioprine","Mycophenolate mofetil","Sirolimus (rapamycin)","Basiliximab"],
      correctIndex: 0,
      explanation: "Cyclosporine is a calcineurin inhibitor that blocks the activation of NFAT (nuclear factor of activated T cells), a transcription factor required for IL-2 gene expression. By inhibiting IL-2 production, cyclosporine prevents T-cell proliferation and activation. Nephrotoxicity is its most important adverse effect. Tacrolimus is another calcineurin inhibitor with a similar mechanism but binds FKBP instead of cyclophilin.",
      optionExplanations: ["Correct. Cyclosporine is a calcineurin inhibitor that blocks NFAT → prevents IL-2 production → inhibits T-cell activation; nephrotoxicity is a major side effect.","Incorrect. Azathioprine is a purine analog that inhibits DNA synthesis in rapidly dividing cells, including lymphocytes.","Incorrect. Mycophenolate mofetil inhibits inosine monophosphate dehydrogenase, blocking de novo purine synthesis in lymphocytes.","Incorrect. Sirolimus inhibits mTOR, blocking the IL-2 signaling pathway downstream of the receptor, not IL-2 gene transcription.","Incorrect. Basiliximab is a monoclonal antibody against the IL-2 receptor (CD25) used for induction therapy, not a calcineurin inhibitor."],
      highYieldPoint: "Cyclosporine: binds cyclophilin → inhibits calcineurin → blocks NFAT → prevents IL-2 transcription → T-cell suppression; major side effect is nephrotoxicity."
    },
    {
      vignette: "A 40-year-old woman receives a kidney transplant and is placed on a maintenance immunosuppressive regimen that includes an mTOR inhibitor. Her physician explains that unlike calcineurin inhibitors, this drug blocks the proliferative signal downstream of the IL-2 receptor rather than IL-2 production itself.",
      question: "Which of the following drugs is this patient most likely taking?",
      options: ["Tacrolimus","Sirolimus (rapamycin)","Prednisone","Cyclosporine","Rituximab"],
      correctIndex: 1,
      explanation: "Sirolimus (rapamycin) is an mTOR inhibitor that blocks the proliferative signal transduction downstream of the IL-2 receptor. It binds FKBP (like tacrolimus) but instead of inhibiting calcineurin, the sirolimus-FKBP complex inhibits mTOR, preventing T-cell progression from G1 to S phase of the cell cycle. Unlike calcineurin inhibitors, sirolimus is not nephrotoxic but causes hyperlipidemia and impaired wound healing.",
      optionExplanations: ["Incorrect. Tacrolimus is a calcineurin inhibitor that blocks IL-2 production (similar to cyclosporine), not an mTOR inhibitor.","Correct. Sirolimus inhibits mTOR → blocks IL-2 receptor signaling → prevents T-cell proliferation; not nephrotoxic but causes hyperlipidemia.","Incorrect. Prednisone is a corticosteroid that broadly suppresses immune function through NF-κB inhibition, not specifically mTOR.","Incorrect. Cyclosporine is a calcineurin inhibitor that prevents IL-2 gene transcription via NFAT inhibition.","Incorrect. Rituximab is an anti-CD20 monoclonal antibody that depletes B cells, not an mTOR inhibitor."],
      highYieldPoint: "Sirolimus: binds FKBP → inhibits mTOR → blocks IL-2 receptor-mediated T-cell proliferation (G1→S); NOT nephrotoxic (unlike calcineurin inhibitors); causes hyperlipidemia and poor wound healing."
    },
    {
      vignette: "A researcher is studying the mechanisms by which recipient T cells recognize donor antigens in transplantation. She observes that in one pathway, recipient APCs process and present shed donor HLA molecules to recipient T cells, similar to how any foreign protein antigen would be presented.",
      question: "Which pathway of allorecognition is being described?",
      options: ["Direct allorecognition","Innate immune recognition","Semi-direct allorecognition","Indirect allorecognition","Antibody-mediated recognition"],
      correctIndex: 3,
      explanation: "In indirect allorecognition, recipient APCs take up, process, and present donor MHC molecules (or other donor-derived peptides) on recipient MHC class II molecules to recipient CD4+ T cells. This is the same mechanism used for any foreign protein antigen and is particularly important in chronic rejection. In contrast, direct allorecognition involves recipient T cells recognizing intact donor MHC molecules on donor APCs.",
      optionExplanations: ["Incorrect. Direct allorecognition involves recipient T cells directly recognizing intact foreign MHC molecules on donor APCs without processing.","Incorrect. Innate immune recognition involves pattern recognition receptors and does not specifically recognize donor MHC antigens.","Incorrect. Semi-direct allorecognition involves transfer of intact donor MHC molecules to recipient APCs via membrane fragments (trogocytosis).","Correct. Indirect allorecognition: recipient APCs process and present donor MHC peptides on self-MHC II → activates recipient T cells; important in chronic rejection.","Incorrect. Antibody-mediated recognition involves donor-specific antibodies, not the T-cell-mediated process described."],
      highYieldPoint: "Direct allorecognition: recipient T cells recognize intact donor MHC on donor APCs (acute rejection). Indirect: recipient APCs present processed donor MHC peptides (chronic rejection)."
    },
    {
      vignette: "A 28-year-old man with aplastic anemia is being evaluated for a bone marrow transplant. His physician orders HLA typing and explains that the best donor would be an HLA-identical sibling. The probability of any given sibling being a full HLA match depends on the inheritance pattern of the MHC genes.",
      question: "What is the probability that a sibling will be HLA-identical to the patient?",
      options: ["1 in 2 (50%)","1 in 4 (25%)","1 in 8 (12.5%)","1 in 16 (6.25%)","1 in 100 (1%)"],
      correctIndex: 1,
      explanation: "MHC genes are located on chromosome 6 and are inherited as a haplotype (a linked group of alleles). Each parent has two haplotypes, and each child inherits one haplotype from each parent. There are four possible combinations of parental haplotypes, so the probability that any sibling inherits the same two haplotypes as the patient is 1 in 4 (25%).",
      optionExplanations: ["Incorrect. 50% is the probability of sharing one haplotype (haploidentical), not both.","Correct. Each sibling has a 25% chance of inheriting the same two parental MHC haplotypes, making them HLA-identical.","Incorrect. 12.5% does not correspond to the probability of MHC haplotype inheritance.","Incorrect. 6.25% would apply if more independent loci needed to match, but MHC genes are inherited as linked haplotypes.","Incorrect. 1% is far too low; linked inheritance of MHC haplotypes makes sibling matching much more likely than unrelated donor matching."],
      highYieldPoint: "MHC haplotype inheritance: 25% chance of HLA-identical sibling (same 2 haplotypes), 50% chance of haploidentical (share 1 haplotype), 25% chance of complete mismatch."
    },
    {
      vignette: "A 35-year-old woman who received a bone marrow transplant develops a desirable immune response in which donor lymphocytes attack residual leukemia cells. Her oncologist notes that this effect can improve outcomes in hematologic malignancies after allogeneic transplantation.",
      question: "Which of the following best describes this beneficial immunologic phenomenon?",
      options: ["Graft-versus-leukemia effect","Graft-versus-host disease","Hyperacute rejection","Tumor immune evasion","Immune tolerance"],
      correctIndex: 0,
      explanation: "The graft-versus-leukemia (GVL) effect occurs when donor T cells and NK cells in the transplanted bone marrow recognize and destroy residual leukemia cells in the recipient. This is a beneficial form of alloreactivity that can reduce relapse rates in hematologic malignancies. It is immunologically related to GVHD, as both involve donor immune cells attacking recipient tissues, but GVL specifically targets malignant cells.",
      optionExplanations: ["Correct. GVL effect: donor lymphocytes attack residual leukemia cells, reducing relapse; a beneficial side of allogeneic transplant alloreactivity.","Incorrect. GVHD involves donor T cells attacking normal recipient tissues (skin, liver, GI) and is harmful, unlike the targeted anti-leukemia effect.","Incorrect. Hyperacute rejection involves preformed antibodies against graft antigens and occurs in solid organ transplants, not bone marrow.","Incorrect. Tumor immune evasion is a mechanism by which tumors escape immune destruction, the opposite of what is described.","Incorrect. Immune tolerance is the absence of immune response to an antigen, not an active anti-tumor response."],
      highYieldPoint: "Graft-versus-leukemia (GVL) effect: donor lymphocytes attack residual malignant cells after allogeneic BMT; reduces relapse rates but is linked to GVHD risk."
    },
    {
      vignette: "A 60-year-old man with chronic kidney disease requires a kidney transplant, but his panel-reactive antibody (PRA) test shows 85% reactivity, indicating extensive sensitization against HLA antigens from prior transplants and blood transfusions. His nephrologist recommends a desensitization protocol before transplantation.",
      question: "Which of the following treatments would be most appropriate to reduce this patient's anti-HLA antibody levels before transplantation?",
      options: ["High-dose corticosteroids alone","Cyclosporine monotherapy","Plasmapheresis and intravenous immunoglobulin (IVIG)","Azathioprine and methotrexate","Interferon-alpha therapy"],
      correctIndex: 2,
      explanation: "Patients with high PRA levels require desensitization to remove preformed anti-HLA antibodies before transplantation. Plasmapheresis physically removes circulating antibodies, and IVIG modulates the immune response by providing anti-idiotype antibodies and blocking Fc receptors. Additional agents like rituximab (anti-CD20) may be used to deplete B cells. This approach reduces the risk of hyperacute and antibody-mediated rejection.",
      optionExplanations: ["Incorrect. Corticosteroids alone cannot adequately reduce preformed antibody levels in highly sensitized patients.","Incorrect. Cyclosporine prevents T-cell activation but does not effectively reduce existing antibody titers.","Correct. Plasmapheresis removes circulating anti-HLA antibodies, and IVIG modulates the immune response; this combination is the standard desensitization approach.","Incorrect. Azathioprine and methotrexate suppress immune cell proliferation but are not effective at rapidly reducing preformed antibodies.","Incorrect. Interferon-alpha is used for viral hepatitis and some cancers, not for transplant desensitization."],
      highYieldPoint: "Transplant desensitization for high-PRA patients: plasmapheresis (removes antibodies) + IVIG (immune modulation) ± rituximab (B-cell depletion) to enable transplantation."
    },
    {
      vignette: "A transplant surgeon is selecting a donor for a patient needing a kidney transplant. The patient has blood type O. A potential living donor has blood type A. The surgeon explains why this donor would typically be incompatible.",
      question: "Which of the following best explains why ABO-incompatible transplantation is typically contraindicated without special desensitization protocols?",
      options: ["Natural anti-A and anti-B antibodies can cause hyperacute rejection by attacking graft vascular endothelium","ABO antigens are only expressed on red blood cells and do not affect graft endothelium","ABO mismatch causes chronic rejection but not acute rejection","ABO antigens only trigger T-cell-mediated rejection","ABO-incompatible grafts are rejected by NK cells exclusively"],
      correctIndex: 0,
      explanation: "ABO blood group antigens are expressed on vascular endothelial cells of transplanted organs, not just red blood cells. Individuals with blood type O have natural (preformed) anti-A and anti-B IgM antibodies that can bind to donor vascular endothelium and activate complement, causing hyperacute rejection. ABO-incompatible transplants require special desensitization protocols including antibody removal.",
      optionExplanations: ["Correct. Natural anti-ABO antibodies bind graft endothelial ABO antigens → complement activation → hyperacute rejection; this is why ABO matching is critical.","Incorrect. ABO antigens are expressed on vascular endothelium and many other cell types, not just red blood cells.","Incorrect. ABO incompatibility causes hyperacute (not just chronic) rejection due to preformed natural antibodies.","Incorrect. ABO-mediated rejection is primarily antibody and complement-mediated (humoral), not T-cell-mediated.","Incorrect. NK cells are not the primary effectors in ABO-incompatible rejection; preformed antibodies and complement mediate the hyperacute response."],
      highYieldPoint: "ABO antigens on graft endothelium + preformed natural anti-ABO antibodies = risk of hyperacute rejection; ABO matching is mandatory for solid organ transplants."
    },
    {
      vignette: "A 42-year-old man receives a liver transplant from a deceased donor. His maintenance immunosuppressive regimen includes tacrolimus, mycophenolate mofetil, and prednisone. One year later, his physician considers reducing immunosuppression because the liver is known to be relatively more tolerogenic than other transplanted organs.",
      question: "Which of the following properties of the liver contributes to its relative immune privilege compared to other transplanted organs?",
      options: ["Absence of MHC class I expression on hepatocytes","Hepatocytes produce large amounts of IgA that neutralize recipient T cells","Complete absence of passenger leukocytes in the graft","Liver tissue lacks blood vessels and avoids direct contact with recipient immune cells","High expression of Fas ligand and tolerogenic dendritic cells and Kupffer cells in the liver sinusoids"],
      correctIndex: 4,
      explanation: "The liver is considered relatively immune-privileged compared to other solid organs. Liver sinusoidal endothelial cells, Kupffer cells (resident macrophages), and hepatic dendritic cells promote tolerance through production of IL-10, TGF-beta, and expression of Fas ligand (inducing apoptosis of activated T cells). The liver's dual blood supply and unique microenvironment facilitate tolerance, allowing some patients to eventually be weaned off immunosuppression.",
      optionExplanations: ["Incorrect. Hepatocytes do express MHC class I; complete absence would make them targets for NK cell killing.","Incorrect. Hepatocytes do not produce IgA; IgA is produced by plasma cells in mucosal tissues and transported across epithelial cells.","Incorrect. The liver contains passenger leukocytes (Kupffer cells, dendritic cells) but these have tolerogenic rather than immunogenic properties.","Incorrect. The liver is a highly vascular organ with extensive sinusoidal blood flow that contacts recipient immune cells.","Correct. Liver tolerance mechanisms include Fas ligand expression, tolerogenic Kupffer cells and dendritic cells, and IL-10/TGF-beta production in the sinusoidal microenvironment."],
      highYieldPoint: "Liver immune privilege: tolerogenic Kupffer cells/DCs, Fas ligand expression, IL-10/TGF-beta → some liver transplant recipients can be weaned off immunosuppression."
    },
    {
      vignette: "A 25-year-old woman with type 1 diabetes is being evaluated for a combined pancreas-kidney transplant. Her physician discusses the concept of crossmatch testing to determine if the patient has preformed antibodies against the donor's cells before proceeding with transplantation.",
      question: "What does a positive crossmatch test indicate?",
      options: ["The donor and recipient are ABO compatible","The donor organ has excellent viability and function","The donor and recipient share identical HLA haplotypes","The recipient's T cells have been previously sensitized but are currently tolerant to donor antigens","The recipient has preformed antibodies against donor HLA antigens, and transplantation should not proceed"],
      correctIndex: 4,
      explanation: "A positive crossmatch means the recipient's serum contains preformed antibodies that react with donor lymphocytes (either T-cell or B-cell crossmatch). This indicates a high risk of hyperacute rejection if transplantation proceeds. A positive T-cell crossmatch is an absolute contraindication to transplantation in most cases. The test is performed by mixing recipient serum with donor lymphocytes and adding complement.",
      optionExplanations: ["Incorrect. ABO compatibility is tested separately from crossmatch testing; a positive crossmatch is unrelated to ABO typing.","Incorrect. Crossmatch testing evaluates recipient immune reactivity to donor cells, not organ viability.","Incorrect. Identical HLA haplotypes would be identified by HLA typing, not crossmatch testing.","Incorrect. A positive crossmatch indicates active antibodies, not tolerance; tolerance would result in a negative crossmatch.","Correct. A positive crossmatch indicates preformed anti-donor HLA antibodies in the recipient → high risk of hyperacute rejection → contraindication to transplant."],
      highYieldPoint: "Positive crossmatch = recipient has preformed anti-donor antibodies = absolute contraindication to transplant (risk of hyperacute rejection); test: recipient serum + donor lymphocytes + complement."
    },
    {
      vignette: "A 48-year-old woman with chronic liver disease due to autoimmune hepatitis receives a liver transplant. Her post-transplant immunosuppressive regimen includes mycophenolate mofetil. Her physician explains that this drug selectively inhibits lymphocyte proliferation by targeting a specific enzyme in the de novo purine synthesis pathway.",
      question: "Which enzyme is inhibited by mycophenolate mofetil?",
      options: ["Dihydrofolate reductase","Thymidylate synthase","Inosine monophosphate dehydrogenase (IMPDH)","Xanthine oxidase","Adenosine deaminase"],
      correctIndex: 2,
      explanation: "Mycophenolate mofetil (MMF) is a prodrug that is converted to mycophenolic acid, which reversibly inhibits inosine monophosphate dehydrogenase (IMPDH), a key enzyme in the de novo synthesis of guanine nucleotides. Lymphocytes are uniquely dependent on the de novo purine synthesis pathway (unlike most other cells that can use the salvage pathway), making MMF relatively selective for lymphocytes.",
      optionExplanations: ["Incorrect. Dihydrofolate reductase is inhibited by methotrexate, not mycophenolate.","Incorrect. Thymidylate synthase is inhibited by 5-fluorouracil, an antimetabolite used in cancer chemotherapy.","Correct. MMF inhibits IMPDH → blocks de novo guanine nucleotide synthesis → selectively suppresses lymphocyte proliferation.","Incorrect. Xanthine oxidase is inhibited by allopurinol, used to treat gout, not for immunosuppression.","Incorrect. Adenosine deaminase deficiency causes SCID; it is not the target of mycophenolate."],
      highYieldPoint: "Mycophenolate mofetil: inhibits IMPDH → blocks de novo purine (guanine) synthesis → selective lymphocyte suppression (lymphocytes depend on de novo pathway)."
    }
  ]
};

const IMMUNO_SUMMARIES = {
  "Innate & adaptive immunity": {
    sections: [
      {
        heading: "Innate Immunity",
        bullets: [
          "First line of defense; rapid, non-specific, no memory",
          "Barriers: skin, mucous membranes, stomach acid, lysozyme, defensins",
          "Cells: neutrophils (first responders), macrophages, dendritic cells, NK cells, mast cells, eosinophils, basophils",
          "Pattern recognition receptors (PRRs): Toll-like receptors (TLRs), NOD-like receptors (NLRs), RIG-I-like receptors",
          "TLRs recognize PAMPs (pathogen-associated molecular patterns) and DAMPs (damage-associated molecular patterns)",
          "Key TLRs: TLR4 (LPS/gram-negative), TLR2 (lipoteichoic acid/gram-positive), TLR3/7/8 (viral RNA), TLR9 (CpG DNA)",
          "Complement system: classical (C1q-antibody), alternative (spontaneous C3), lectin (MBL-mannose) pathways → MAC (C5b-9)",
          "Complement functions: opsonization (C3b), anaphylatoxins (C3a, C5a), chemotaxis (C5a), MAC lysis (C5b-9)",
          "NK cells: kill virus-infected and tumor cells via perforin/granzymes; inhibited by MHC class I (missing-self hypothesis)"
        ]
      },
      {
        heading: "Adaptive Immunity",
        bullets: [
          "Specific, slower onset, generates immunologic memory",
          "Humoral immunity: B cells → plasma cells → antibodies (immunoglobulins)",
          "Cell-mediated immunity: T cells (CD4+ helper, CD8+ cytotoxic, Tregs)",
          "Antigen presentation: MHC I (all nucleated cells → CD8+ T cells), MHC II (APCs → CD4+ T cells)",
          "Professional APCs: dendritic cells (most potent for naive T cells), macrophages, B cells",
          "T-cell activation requires two signals: Signal 1 (TCR-MHC/peptide) + Signal 2 (CD28-B7 costimulation)",
          "Immunoglobulin classes: IgG (most abundant, opsonization, crosses placenta), IgA (mucosal, secretory), IgM (first response, pentamer), IgE (allergy, parasites), IgD (naive B-cell surface)",
          "Antibody diversity: V(D)J recombination, junctional diversity, somatic hypermutation"
        ]
      },
      {
        heading: "T-Helper Cell Subsets and Cytokines",
        bullets: [
          "Th1: IFN-γ, IL-2 → macrophage activation, intracellular pathogens; differentiation by IL-12",
          "Th2: IL-4, IL-5, IL-13 → IgE class switching, eosinophils, parasites; differentiation by IL-4",
          "Th17: IL-17, IL-22 → neutrophil recruitment, extracellular bacteria/fungi; differentiation by IL-6, TGF-β, IL-23",
          "Treg: IL-10, TGF-β → immune suppression, self-tolerance; express FOXP3 and CD25",
          "Tfh: IL-21 → germinal center B-cell help, affinity maturation"
        ]
      },
      {
        heading: "Central and Peripheral Tolerance",
        bullets: [
          "Central tolerance: negative selection eliminates self-reactive T cells in thymus (AIRE protein) and B cells in bone marrow (receptor editing)",
          "Positive selection (thymic cortex): ensures T cells can recognize self-MHC",
          "Peripheral tolerance: anergy (lack of costimulation), regulatory T cells (FOXP3+), activation-induced cell death (Fas-FasL)",
          "Immune checkpoints: CTLA-4 (competes with CD28 for B7), PD-1/PD-L1 (inhibits T-cell effector function)"
        ]
      }
    ],
    table: {
      headers: ["Feature","Innate Immunity","Adaptive Immunity"],
      rows: [
        ["Specificity","Broad (PAMPs)","Highly specific (antigens)"],
        ["Speed","Immediate (hours)","Slow (days to weeks)"],
        ["Memory","None","Yes (memory cells)"],
        ["Receptors","PRRs (TLRs, NLRs)","TCR, BCR (rearranged)"],
        ["Key cells","Neutrophils, macrophages, NK cells","T cells, B cells"],
        ["Diversity","Limited (germline-encoded)","Vast (somatic recombination)"]
      ]
    },
    mnemonic: "Hot T-Bone stEAk: IL-1 = Hot (fever), IL-2 = T (T-cell growth), IL-3 = Bone (bone marrow growth), IL-4 = E (IgE), IL-5 = A (IgA + eosinophils)"
  },
  "Immunodeficiencies": {
    sections: [
      {
        heading: "B-Cell (Humoral) Immunodeficiencies",
        bullets: [
          "Bruton (X-linked) agammaglobulinemia: BTK mutation → absent B cells and all Ig classes; recurrent bacterial infections after 6 months (maternal IgG wanes)",
          "Common variable immunodeficiency (CVID): defective B-cell differentiation → low IgG/IgA, normal B-cell count; presents in teens/young adults; increased risk of autoimmune disease and lymphoma",
          "Selective IgA deficiency: most common primary immunodeficiency (~1:500); usually asymptomatic; risk of anaphylaxis to blood products (anti-IgA antibodies)",
          "Hyper-IgM syndrome: CD40L deficiency (X-linked) → defective class switching → high IgM, low IgG/IgA/IgE; susceptible to Pneumocystis and Cryptosporidium"
        ]
      },
      {
        heading: "T-Cell (Cell-Mediated) Immunodeficiencies",
        bullets: [
          "DiGeorge syndrome: 22q11.2 deletion → thymic aplasia (T-cell deficiency), parathyroid aplasia (hypocalcemia), cardiac defects (truncus arteriosus, ToF)",
          "IL-12 receptor deficiency: impaired Th1/IFN-γ axis → disseminated mycobacterial infections",
          "Chronic mucocutaneous candidiasis: T-cell dysfunction specific to Candida species"
        ]
      },
      {
        heading: "Combined B- and T-Cell Immunodeficiencies",
        bullets: [
          "Severe combined immunodeficiency (SCID): absent T and B cells; most common form is X-linked (IL-2Rγ chain); also autosomal recessive (ADA deficiency, RAG1/2 deficiency)",
          "Wiskott-Aldrich syndrome: WAS gene (X-linked) → thrombocytopenia with small platelets + eczema + infections; low IgM, high IgE; increased lymphoma risk",
          "Ataxia-telangiectasia: ATM gene → defective DNA repair → cerebellar ataxia, telangiectasias, IgA deficiency, elevated AFP, increased cancer risk"
        ]
      },
      {
        heading: "Phagocyte Deficiencies",
        bullets: [
          "Chronic granulomatous disease (CGD): NADPH oxidase deficiency → absent respiratory burst → infections with catalase-positive organisms (S. aureus, Aspergillus, Serratia, Nocardia, Burkholderia); negative NBT/DHR test; most common form is X-linked (gp91phox/CYBB)",
          "Leukocyte adhesion deficiency (LAD): defective CD18 integrins → neutrophils cannot migrate to tissues → leukocytosis + absent pus + delayed cord separation",
          "Chédiak-Higashi syndrome: LYST gene → defective microtubule function → giant granules in granulocytes, partial albinism, recurrent infections, risk of HLH",
          "Hyper-IgE (Job) syndrome: STAT3 mutation → very high IgE, cold staphylococcal abscesses, eczema, coarse facies, retained primary teeth, pathologic fractures"
        ]
      },
      {
        heading: "Complement Deficiencies",
        bullets: [
          "C1-C4 deficiency: increased risk of SLE-like illness (impaired immune complex clearance)",
          "C3 deficiency: severe recurrent pyogenic infections (impaired opsonization)",
          "C5-C9 (terminal complement) deficiency: recurrent Neisseria infections (meningococcal/gonococcal)",
          "C1 inhibitor deficiency: hereditary angioedema (recurrent non-pruritic swelling, low C4)",
          "DAF/CD59 deficiency: paroxysmal nocturnal hemoglobinuria (complement-mediated hemolysis)"
        ]
      }
    ],
    table: {
      headers: ["Immunodeficiency","Defect","Key Infections","Key Lab Findings"],
      rows: [
        ["Bruton (XLA)","BTK → no B cells","Encapsulated bacteria (after 6 mo)","Absent Ig, absent B cells"],
        ["CVID","B-cell differentiation","Sinopulmonary, Giardia","Low IgG/IgA, normal B cells"],
        ["DiGeorge","22q11.2 → no thymus","Viral, fungal, PJP","Low T cells, hypocalcemia"],
        ["SCID","IL-2Rγ or ADA","All types, severe","Absent T and B cells"],
        ["CGD","NADPH oxidase","Catalase+ (PLACESS)","Negative NBT/DHR"],
        ["LAD","CD18 integrins","Bacterial, absent pus","Leukocytosis, delayed cord"],
        ["Chédiak-Higashi","LYST (microtubules)","Pyogenic bacteria","Giant granules, albinism"],
        ["Wiskott-Aldrich","WAS gene","All types","Small platelets, low IgM, high IgE"]
      ]
    },
    mnemonic: "CGD catalase-positive organisms = PLACESS: Pseudomonas, Listeria, Aspergillus, Candida, E. coli, Staphylococcus, Serratia"
  },
  "Hypersensitivity reactions": {
    sections: [
      {
        heading: "Type I – Immediate (Anaphylactic)",
        bullets: [
          "Mechanism: IgE-mediated mast cell/basophil degranulation",
          "Timing: seconds to minutes after allergen exposure",
          "Mediators: histamine (immediate), leukotrienes C4/D4/E4 (bronchospasm), prostaglandins, tryptase",
          "Examples: anaphylaxis, allergic rhinitis, asthma (allergic), urticaria, food allergies",
          "Skin testing: wheal-and-flare reaction (15-20 minutes)",
          "Treatment: epinephrine (anaphylaxis), antihistamines, leukotriene inhibitors, corticosteroids",
          "Sensitization phase: first exposure → IgE production → IgE binds FcεRI on mast cells",
          "Late-phase reaction (6-8 hours): cytokines recruit eosinophils and Th2 cells"
        ]
      },
      {
        heading: "Type II – Antibody-Mediated (Cytotoxic)",
        bullets: [
          "Mechanism: IgG/IgM antibodies bind cell-surface or matrix antigens → complement activation, opsonization, ADCC",
          "Subtypes: cytotoxic (cell destruction), anti-receptor (stimulatory or blocking)",
          "Cytotoxic examples: autoimmune hemolytic anemia, hemolytic disease of newborn (Rh), transfusion reactions, Goodpasture syndrome, immune thrombocytopenic purpura",
          "Stimulatory examples: Graves disease (anti-TSH receptor stimulating antibodies)",
          "Blocking examples: myasthenia gravis (anti-AChR blocking antibodies), pernicious anemia (anti-intrinsic factor)",
          "Direct Coombs test: detects antibodies on patient's red blood cells",
          "Indirect Coombs test: detects antibodies in patient's serum"
        ]
      },
      {
        heading: "Type III – Immune Complex-Mediated",
        bullets: [
          "Mechanism: antigen-antibody immune complexes deposit in tissues → complement activation → neutrophil recruitment → tissue damage",
          "Timing: 4-10 days (serum sickness); 4-8 hours (Arthus reaction, local)",
          "Examples: serum sickness, post-streptococcal glomerulonephritis, lupus nephritis, polyarteritis nodosa, hypersensitivity pneumonitis (partial)",
          "Immunofluorescence pattern: granular (lumpy-bumpy) deposits of IgG/C3",
          "Lab: decreased complement levels (consumed), elevated ESR/CRP"
        ]
      },
      {
        heading: "Type IV – Delayed-Type (Cell-Mediated)",
        bullets: [
          "Mechanism: sensitized T cells (CD4+ Th1) release cytokines → macrophage activation → tissue damage",
          "Timing: 24-72 hours (delayed onset)",
          "Subtypes: contact dermatitis (CD4+ T cells), tuberculin reaction (CD4+ T cells), granulomatous (CD4+ T cells + macrophages), direct cell cytotoxicity (CD8+ T cells)",
          "Examples: contact dermatitis (nickel, poison ivy), PPD/Mantoux test, tuberculosis granulomas, transplant rejection (cellular), type 1 diabetes (CD8+ T cells destroy beta cells)",
          "NO antibody or complement involvement",
          "Granulomatous: sarcoidosis, TB, fungal infections, Crohn disease, berylliosis"
        ]
      },
      {
        heading: "Special Hypersensitivity Concepts",
        bullets: [
          "Arthus reaction: local type III reaction with immune complex deposition after intradermal antigen injection",
          "Samter triad (aspirin-exacerbated respiratory disease): asthma + nasal polyps + aspirin sensitivity (COX inhibition → leukotriene shunting, NOT IgE-mediated)",
          "Hypersensitivity pneumonitis: combined type III and type IV (farmer's lung, bird fancier's lung)",
          "Autoimmune hemolytic anemia: warm (IgG, extravascular/splenic) vs. cold (IgM, intravascular/complement)"
        ]
      }
    ],
    table: {
      headers: ["Type","Mediator","Timing","Mechanism","Classic Examples"],
      rows: [
        ["I (Anaphylactic)","IgE","Minutes","Mast cell degranulation","Anaphylaxis, allergic rhinitis, asthma"],
        ["II (Cytotoxic)","IgG/IgM","Hours","Complement, ADCC, opsonization","AIHA, Goodpasture, Graves, MG"],
        ["III (Immune complex)","IgG","4-10 days","Complex deposition → complement","Serum sickness, PSGN, SLE nephritis"],
        ["IV (Delayed)","T cells","24-72 hours","T-cell cytokines → macrophage","Contact dermatitis, PPD, TB, transplant rejection"]
      ]
    },
    mnemonic: "ACID: Anaphylactic (type I), Cytotoxic (type II), Immune complex (type III), Delayed (type IV)"
  },
  "Autoimmune disease": {
    sections: [
      {
        heading: "Mechanisms of Autoimmunity",
        bullets: [
          "Loss of self-tolerance: failure of central tolerance (thymic/bone marrow deletion) or peripheral tolerance (anergy, Tregs, AICD)",
          "Molecular mimicry: microbial antigens resemble self-antigens (e.g., rheumatic fever, Guillain-Barré syndrome)",
          "Epitope spreading: tissue damage exposes hidden self-antigens → immune response broadens",
          "Bystander activation: nonspecific inflammation activates self-reactive lymphocytes",
          "Superantigens: cross-link MHC II and TCR → massive T-cell activation (e.g., toxic shock syndrome)"
        ]
      },
      {
        heading: "Organ-Specific Autoimmune Diseases",
        bullets: [
          "Hashimoto thyroiditis: anti-TPO, anti-thyroglobulin → CD8+ T-cell and antibody-mediated thyroid destruction → hypothyroidism (most common cause in iodine-sufficient areas)",
          "Graves disease: anti-TSH receptor (stimulatory) → hyperthyroidism, diffuse goiter, exophthalmos, pretibial myxedema",
          "Type 1 diabetes: anti-GAD65, anti-insulin, anti-IA2 → CD8+ T-cell destruction of pancreatic beta cells",
          "Myasthenia gravis: anti-nicotinic AChR → fatigable weakness (worst with use, improves with rest); associated with thymoma",
          "Goodpasture syndrome: anti-GBM (type IV collagen) → rapidly progressive GN + pulmonary hemorrhage; linear IF pattern",
          "Pernicious anemia: anti-intrinsic factor, anti-parietal cell → B12 malabsorption → megaloblastic anemia",
          "Primary biliary cholangitis: anti-mitochondrial → intrahepatic bile duct destruction → cholestatic liver disease",
          "Autoimmune hepatitis: anti-smooth muscle (type 1), anti-LKM (type 2) → hepatitis with elevated transaminases"
        ]
      },
      {
        heading: "Systemic Autoimmune Diseases",
        bullets: [
          "SLE: anti-dsDNA (specific, correlates with nephritis), anti-Smith (most specific), ANA (sensitive but not specific); malar rash, photosensitivity, arthritis, nephritis, serositis, cytopenias",
          "Rheumatoid arthritis: RF (IgM anti-IgG), anti-CCP (most specific) → CD4+ T-cell-mediated synovitis → pannus → cartilage/bone erosion",
          "Sjögren syndrome: anti-Ro (SSA), anti-La (SSB) → lymphocytic infiltration of salivary/lacrimal glands → dry eyes, dry mouth; risk of neonatal lupus with congenital heart block",
          "Systemic sclerosis (scleroderma): anti-Scl-70 (diffuse, pulmonary fibrosis) vs. anti-centromere (limited/CREST); fibrosis of skin and internal organs",
          "Dermatomyositis/polymyositis: anti-Jo-1 (antisynthetase syndrome) → proximal muscle weakness, elevated CK, heliotrope rash, Gottron papules; dermatomyositis associated with malignancy",
          "Mixed connective tissue disease: anti-U1 RNP → overlapping features of SLE, scleroderma, and polymyositis"
        ]
      },
      {
        heading: "Vasculitides",
        bullets: [
          "Giant cell (temporal) arteritis: large vessel, granulomatous; temporal headache, jaw claudication, vision loss; ESR >50; treat immediately with steroids",
          "Takayasu arteritis: large vessel; young Asian women; aortic arch involvement, weak pulses, claudication",
          "Polyarteritis nodosa: medium vessel; associated with hepatitis B; does NOT involve lungs; p-ANCA negative",
          "Granulomatosis with polyangiitis (Wegener): c-ANCA (anti-PR3); upper/lower respiratory + renal involvement; necrotizing granulomas",
          "Microscopic polyangiitis: p-ANCA (anti-MPO); pulmonary-renal syndrome without granulomas",
          "Eosinophilic granulomatosis with polyangiitis (Churg-Strauss): p-ANCA; asthma, eosinophilia, granulomas"
        ]
      },
      {
        heading: "HLA Associations",
        bullets: [
          "HLA-B27: ankylosing spondylitis, reactive arthritis, psoriatic arthritis, IBD-associated arthritis",
          "HLA-B51: Behçet disease",
          "HLA-DR2: multiple sclerosis, Goodpasture syndrome, SLE",
          "HLA-DR3: type 1 diabetes, SLE, Graves disease, Hashimoto thyroiditis",
          "HLA-DR4: type 1 diabetes, rheumatoid arthritis",
          "HLA-DQ2/DQ8: celiac disease"
        ]
      }
    ],
    table: {
      headers: ["Autoimmune Disease","Key Autoantibody","Target","HLA Association"],
      rows: [
        ["SLE","Anti-dsDNA, anti-Smith","Nuclear antigens","DR2, DR3"],
        ["Rheumatoid arthritis","Anti-CCP, RF","Synovium (pannus)","DR4"],
        ["Hashimoto thyroiditis","Anti-TPO","Thyroid follicular cells","DR3"],
        ["Graves disease","Anti-TSH receptor","TSH receptor (stimulatory)","DR3"],
        ["Type 1 diabetes","Anti-GAD65","Pancreatic beta cells","DR3, DR4"],
        ["Myasthenia gravis","Anti-AChR","Nicotinic AChR at NMJ","DR3"],
        ["Goodpasture","Anti-GBM","Type IV collagen (GBM)","DR2"],
        ["Celiac disease","Anti-tTG (IgA)","Tissue transglutaminase","DQ2, DQ8"],
        ["Sjögren syndrome","Anti-Ro (SSA), Anti-La (SSB)","Salivary/lacrimal glands","DR3"]
      ]
    },
    mnemonic: "DR4 is the 'DOOR' to the rheumatologist: DR4 → Rheumatoid arthritis and Type 1 DM"
  },
  "Transplant immunology": {
    sections: [
      {
        heading: "Types of Grafts",
        bullets: [
          "Autograft: self to self (e.g., skin graft from thigh to face) — no rejection",
          "Isograft (syngeneic): between identical twins — no rejection",
          "Allograft: between genetically different individuals of same species — most common clinical scenario; requires immunosuppression",
          "Xenograft: between different species (e.g., pig valve to human) — strongest rejection"
        ]
      },
      {
        heading: "Types of Transplant Rejection",
        bullets: [
          "Hyperacute: minutes to hours; preformed anti-donor antibodies (anti-HLA or anti-ABO) → complement activation → thrombosis → immediate graft failure; prevented by crossmatch and ABO matching",
          "Acute cellular: weeks to months; CD8+ T cells recognize donor MHC I on graft cells → lymphocytic infiltrate → tissue destruction; reversible with increased immunosuppression (steroids, anti-thymocyte globulin)",
          "Acute humoral (antibody-mediated): weeks to months; de novo donor-specific antibodies → complement activation (C4d deposition) → endothelial injury; treated with plasmapheresis, IVIG, rituximab",
          "Chronic: months to years; both cellular and humoral mechanisms → intimal fibrosis, graft vasculopathy → progressive graft failure; leading cause of late graft loss; NOT reversible with immunosuppression"
        ]
      },
      {
        heading: "Allorecognition Pathways",
        bullets: [
          "Direct: recipient T cells recognize intact donor MHC on donor APCs; predominant in acute rejection",
          "Indirect: recipient APCs process and present donor MHC peptides on self-MHC II; predominant in chronic rejection",
          "Semi-direct: recipient APCs acquire intact donor MHC via trogocytosis and present them to T cells"
        ]
      },
      {
        heading: "Graft-Versus-Host Disease (GVHD)",
        bullets: [
          "Occurs when donor T cells attack immunocompromised recipient tissues",
          "Most common after allogeneic bone marrow/stem cell transplant",
          "Can also occur with non-irradiated blood products in immunocompromised patients",
          "Target organs: skin (maculopapular rash), liver (jaundice), GI tract (diarrhea)",
          "Acute GVHD: within 100 days; chronic GVHD: after 100 days (resembles autoimmune disease)",
          "Prevention: T-cell depletion of graft, HLA matching, immunosuppressive prophylaxis",
          "Graft-versus-leukemia (GVL) effect: beneficial donor immune response against residual malignant cells"
        ]
      },
      {
        heading: "Immunosuppressive Drugs in Transplantation",
        bullets: [
          "Cyclosporine: binds cyclophilin → inhibits calcineurin → blocks NFAT → prevents IL-2 transcription; SE: nephrotoxicity, hypertension, gingival hyperplasia, hirsutism",
          "Tacrolimus (FK506): binds FKBP → inhibits calcineurin → blocks IL-2; more potent than cyclosporine; SE: nephrotoxicity, diabetes, neurotoxicity",
          "Sirolimus (rapamycin): binds FKBP → inhibits mTOR → blocks IL-2 receptor signaling (G1→S arrest); NOT nephrotoxic; SE: hyperlipidemia, poor wound healing, pancytopenia",
          "Mycophenolate mofetil: inhibits IMPDH → blocks de novo purine synthesis → selective lymphocyte suppression; SE: GI upset, bone marrow suppression",
          "Azathioprine: purine analog → inhibits DNA synthesis; metabolized by xanthine oxidase (interaction with allopurinol); SE: myelosuppression",
          "Corticosteroids: inhibit NF-κB → broad anti-inflammatory and immunosuppressive effects; SE: Cushingoid, osteoporosis, diabetes, infections",
          "Anti-thymocyte globulin (ATG): polyclonal antibodies against T cells; used for induction and steroid-resistant acute rejection",
          "Basiliximab: anti-CD25 (IL-2Rα) monoclonal antibody; used for induction therapy",
          "Rituximab: anti-CD20; depletes B cells; used for antibody-mediated rejection and desensitization",
          "Belatacept: CTLA-4-Ig fusion protein; blocks CD28-B7 costimulation; alternative to calcineurin inhibitors"
        ]
      },
      {
        heading: "Pre-Transplant Evaluation",
        bullets: [
          "ABO blood group matching: mandatory for solid organ transplants",
          "HLA typing: HLA-A, -B, -DR matching (HLA-DR most important for kidney)",
          "Crossmatch: recipient serum + donor lymphocytes + complement; positive = contraindication (preformed antibodies)",
          "Panel reactive antibody (PRA): percentage of HLA antigens recipient has antibodies against; high PRA = difficult to find compatible donor",
          "Mixed lymphocyte reaction (MLR): in vitro test of cellular immune compatibility (less commonly used clinically)",
          "25% chance of HLA-identical sibling (MHC haplotypes inherited as linked groups)"
        ]
      }
    ],
    table: {
      headers: ["Rejection Type","Timing","Mechanism","Pathology","Treatment"],
      rows: [
        ["Hyperacute","Minutes-hours","Preformed anti-donor Abs","Thrombosis, necrosis","Prevention (crossmatch)"],
        ["Acute cellular","Weeks-months","CD4+/CD8+ T cells","Lymphocytic infiltrate","Steroids, ATG"],
        ["Acute humoral","Weeks-months","Donor-specific Abs, C4d","Endothelial injury, vasculitis","Plasmapheresis, IVIG, rituximab"],
        ["Chronic","Months-years","Cellular + humoral + fibrosis","Intimal fibrosis, vasculopathy","No effective treatment"],
        ["GVHD","Days-months","Donor T cells vs. host","Skin, liver, GI damage","Immunosuppression, T-cell depletion"]
      ]
    },
    mnemonic: "Calcineurin inhibitors: CsA binds Cyclophilin, Tacrolimus binds FKBP — both block calcineurin → NFAT → IL-2; Sirolimus binds FKBP but blocks mTOR instead"
  }
};
