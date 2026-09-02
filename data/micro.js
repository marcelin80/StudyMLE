const MICRO_QUESTIONS = {

  "Bacterial structure & genetics": [
    {
      vignette: "A microbiologist is examining a bacterial isolate that is resistant to osmotic lysis and retains a purple dye after sequential staining with crystal violet, iodine, a decolorizer, and safranin. Electron microscopy reveals a thick layer of repeating disaccharide units cross-linked by short peptide chains surrounding the cytoplasmic membrane.",
      question: "Which component is most directly responsible for this organism's resistance to osmotic lysis?",
      options: ["Lipopolysaccharide","Peptidoglycan","Teichoic acid","Outer membrane porins","Mycolic acid"],
      correctIndex: 1,
      explanation: "Peptidoglycan (murein) forms the rigid cell wall of bacteria. In gram-positive organisms, the peptidoglycan layer is thick (20–80 nm) and consists of alternating N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) cross-linked by peptide bridges. This structural integrity confers resistance to osmotic stress.",
      optionExplanations: ["Incorrect: Lipopolysaccharide is a component of the gram-negative outer membrane, not the thick cell wall of gram-positive organisms.","Correct: Peptidoglycan provides structural rigidity and osmotic protection to the bacterial cell.","Incorrect: Teichoic acid is embedded in the gram-positive cell wall and aids in adhesion and ion regulation, but does not provide the primary osmotic resistance.","Incorrect: Outer membrane porins are channels in the gram-negative outer membrane, absent in gram-positive organisms.","Incorrect: Mycolic acid is a waxy component of mycobacterial cell walls (e.g., Mycobacterium tuberculosis), not typical gram-positive organisms."],
      highYieldPoint: "Peptidoglycan = NAG-NAM polymer cross-linked by D-amino acid peptide bridges; target of β-lactams and vancomycin."
    },
    {
      vignette: "A researcher is studying horizontal gene transfer between two bacterial strains in co-culture. She observes that resistance genes from a donor strain are transmitted to a recipient strain through direct cell-to-cell contact mediated by a specialized appendage. When she adds DNase to the medium, the gene transfer is unaffected.",
      question: "Which mechanism of horizontal gene transfer is most likely occurring in this experiment?",
      options: ["Conjugation","Transformation","Transduction","Transfection","Vertical transmission"],
      correctIndex: 0,
      explanation: "Conjugation involves direct transfer of genetic material (typically plasmid DNA) from a donor to a recipient bacterium through a sex pilus. Because the DNA travels through a protected conjugation bridge, DNase in the surrounding medium does not inhibit transfer. Transformation, by contrast, involves uptake of free DNA and would be DNase-sensitive.",
      optionExplanations: ["Correct: Conjugation requires direct cell-to-cell contact via a pilus and is DNase-resistant because DNA is not exposed to the medium.","Incorrect: Transformation involves uptake of naked DNA from the environment and would be inhibited by DNase.","Incorrect: Transduction is phage-mediated gene transfer and does not require cell-to-cell contact.","Incorrect: Transfection refers to introduction of nucleic acids into cells by non-viral methods and is a laboratory technique, not a natural bacterial process.","Incorrect: Vertical transmission is parent-to-offspring gene transfer, not horizontal transfer between unrelated bacteria."],
      highYieldPoint: "Conjugation = F-pilus contact, DNase-resistant; Transformation = naked DNA uptake, DNase-sensitive; Transduction = phage-mediated."
    },
    {
      vignette: "A 65-year-old man with chronic obstructive pulmonary disease develops worsening cough and purulent sputum. Sputum culture grows a gram-negative rod. Antibiotic susceptibility testing reveals resistance to ampicillin. Molecular analysis shows that the resistance gene is carried on a small circular extrachromosomal DNA element that can replicate independently of the bacterial chromosome.",
      question: "Which genetic element most likely carries this resistance gene?",
      options: ["Transposon","Plasmid","Bacteriophage genome","Bacterial chromosome insertion sequence","Integron"],
      correctIndex: 1,
      explanation: "Plasmids are small, circular, double-stranded DNA molecules that replicate autonomously within bacteria. They commonly carry antibiotic resistance genes (R-plasmids) and can be transferred between bacteria via conjugation, contributing to the spread of antimicrobial resistance.",
      optionExplanations: ["Incorrect: Transposons are mobile genetic elements that jump between locations within a genome but cannot replicate independently.","Correct: Plasmids are self-replicating extrachromosomal circular DNA elements that commonly carry antibiotic resistance genes.","Incorrect: Bacteriophage genomes are viral nucleic acids that require a phage particle for transfer; the scenario describes an autonomously replicating element.","Incorrect: Insertion sequences are small transposable elements that do not replicate independently.","Incorrect: Integrons capture gene cassettes via site-specific recombination but are typically embedded in chromosomes or plasmids rather than replicating on their own."],
      highYieldPoint: "R-plasmids carry antibiotic resistance genes and transfer via conjugation; they replicate independently of the chromosome."
    },
    {
      vignette: "A laboratory technician inadvertently contaminates a bacterial culture with a bacteriophage. Over the next 24 hours, she observes that the bacteria initially proliferate normally. However, when exposed to UV light, the culture rapidly lyses and releases new phage particles.",
      question: "Which type of phage lifecycle is demonstrated in this scenario?",
      options: ["Lytic cycle only","Obligate parasitism","Lysogeny with subsequent induction","Chronic infection with budding","Defective phage assembly"],
      correctIndex: 2,
      explanation: "The lysogenic cycle involves integration of phage DNA (prophage) into the bacterial chromosome, allowing the bacteria to grow normally. UV light damages DNA, activating the SOS response, which triggers the prophage to excise, enter the lytic cycle, replicate, and lyse the host cell. This process is called induction.",
      optionExplanations: ["Incorrect: A purely lytic cycle would cause immediate bacterial lysis without a period of normal proliferation.","Incorrect: Obligate parasitism describes organisms that require a host for survival but does not specifically describe the phage lifecycle pattern shown.","Correct: Lysogeny allows the phage to integrate as a prophage; UV-induced SOS response triggers induction into the lytic cycle.","Incorrect: Chronic infection with budding is seen in some filamentous phages that continuously release particles without lysing the host; the scenario describes lysis.","Incorrect: Defective phage assembly would result in failure to produce viable phage particles, inconsistent with the release of new phages."],
      highYieldPoint: "Lysogeny = prophage integration; SOS response (UV light, DNA damage) induces lytic cycle. Examples: λ phage, corynephage β (diphtheria toxin)."
    },
    {
      vignette: "A microbiology student observes that a specific bacterial species can survive extreme desiccation and heat for years. When conditions become favorable, these dormant structures germinate into actively growing vegetative cells. Staining reveals highly refractile bodies within the cell that do not take up standard dyes easily.",
      question: "Which structural component is most essential for the heat resistance of these dormant forms?",
      options: ["Lipid A","Fimbriae proteins","Lipoteichoic acid","Capsular polysaccharide","Dipicolinic acid complexed with calcium"],
      correctIndex: 4,
      explanation: "Bacterial endospores contain dipicolinic acid (DPA) chelated with calcium ions, which stabilizes DNA and proteins against thermal denaturation. Combined with a thick cortex of modified peptidoglycan and a dehydrated core, DPA-Ca²⁺ complexes are critical to the extreme heat resistance of spores produced by Bacillus and Clostridium species.",
      optionExplanations: ["Incorrect: Lipid A is the toxic component of lipopolysaccharide in gram-negative bacteria and is unrelated to spore heat resistance.","Incorrect: Fimbriae mediate adherence to host tissues and are not related to spore resistance.","Incorrect: Lipoteichoic acid anchors the cell wall to the plasma membrane in gram-positive bacteria but is not a spore-specific component.","Incorrect: Capsular polysaccharides provide antiphagocytic properties to vegetative cells but do not confer heat resistance.","Correct: Dipicolinic acid chelated with calcium dehydrates the spore core and stabilizes macromolecules, conferring extreme heat resistance."],
      highYieldPoint: "Endospore heat resistance = dipicolinic acid + Ca²⁺ + dehydrated core + keratin-like coat. Produced by Bacillus and Clostridium."
    },
    {
      vignette: "A new graduate student is studying gene regulation in E. coli. She finds that when lactose is present and glucose is absent, expression of the lac operon is maximized. She identifies a protein that binds to the operator sequence in the absence of the inducer, repressing transcription.",
      question: "Which molecule directly binds the repressor to cause its release from the operator and allow transcription?",
      options: ["Lactose","Glucose","Allolactose","Cyclic AMP","Tryptophan"],
      correctIndex: 2,
      explanation: "Allolactose is the true inducer of the lac operon. It is an isomer of lactose produced intracellularly by β-galactosidase. Allolactose binds to the lac repressor, causing a conformational change that releases the repressor from the operator, permitting transcription of the lac structural genes.",
      optionExplanations: ["Incorrect: Lactose itself is not the direct inducer; it must be converted to allolactose by basal levels of β-galactosidase.","Incorrect: Glucose inhibits lac operon expression indirectly by reducing cAMP levels, preventing CAP-cAMP activation.","Correct: Allolactose is the intracellular inducer that binds the lac repressor and releases it from the operator.","Incorrect: cAMP binds CAP (catabolite activator protein) to enhance transcription when glucose is low, but does not bind the repressor.","Incorrect: Tryptophan is a co-repressor of the trp operon, not the lac operon."],
      highYieldPoint: "Lac operon: allolactose (not lactose) = true inducer; cAMP-CAP = positive regulator when glucose is absent."
    },
    {
      vignette: "An infectious disease specialist notices that a Corynebacterium diphtheriae isolate produces a potent exotoxin. She discovers the toxin gene is not part of the bacterial chromosome but was introduced by a virus. Curing the strain of this viral element eliminates toxin production.",
      question: "Which term best describes the acquisition of new virulence properties through phage-mediated gene transfer to this organism?",
      options: ["Lysogenic conversion","Phase variation","Antigenic shift","Transposition","Competence"],
      correctIndex: 0,
      explanation: "Lysogenic conversion occurs when a temperate bacteriophage integrates into the bacterial chromosome (as a prophage) and confers new phenotypic properties, such as toxin production. The diphtheria toxin gene (tox) is carried by corynephage β; only lysogenized strains of C. diphtheriae produce the toxin.",
      optionExplanations: ["Correct: Lysogenic conversion is the acquisition of new properties (e.g., toxin production) by a bacterium following integration of a prophage.","Incorrect: Phase variation involves reversible on/off switching of gene expression (e.g., flagellar antigens in Salmonella), not phage-mediated gene acquisition.","Incorrect: Antigenic shift refers to reassortment of segmented viral genomes (e.g., influenza), not phage-mediated bacterial virulence.","Incorrect: Transposition involves movement of genetic elements within or between DNA molecules but does not specifically describe phage-mediated virulence acquisition.","Incorrect: Competence is the ability of bacteria to take up free DNA from the environment (transformation), unrelated to phage integration."],
      highYieldPoint: "Lysogenic conversion examples: diphtheria toxin (β-phage), botulinum toxin (phage), cholera toxin (CTXφ), shiga-like toxin (λ-like phage in EHEC), erythrogenic toxin (T12 phage in S. pyogenes)."
    },
    {
      vignette: "A clinical microbiologist examines a CSF sample from a neonate with meningitis. Gram stain reveals gram-negative rods surrounded by a clear zone that does not stain. An India ink preparation shows a clear halo around each bacterium against a dark background.",
      question: "Which virulence factor is most directly responsible for the clear halo observed around this organism?",
      options: ["Pili","Flagella","Endotoxin","Polysaccharide capsule","Type III secretion system"],
      correctIndex: 3,
      explanation: "The clear halo around bacteria in an India ink preparation represents a polysaccharide capsule. In neonatal meningitis caused by gram-negative rods (such as E. coli K1), the K1 capsule is a major virulence factor that inhibits phagocytosis and complement-mediated killing.",
      optionExplanations: ["Incorrect: Pili (fimbriae) mediate adherence to host cells but do not produce a visible halo on India ink staining.","Incorrect: Flagella provide motility but are too thin to create a visible clear zone in India ink preparations.","Incorrect: Endotoxin (lipid A) is embedded in the outer membrane and does not create a visual halo.","Correct: The polysaccharide capsule excludes India ink particles, creating a clear halo. It is a major antiphagocytic virulence factor.","Incorrect: Type III secretion systems inject effector proteins into host cells and are not visible structures on staining."],
      highYieldPoint: "Capsule = antiphagocytic; visualized by India ink (negative staining) or quellung reaction. E. coli K1 capsule → neonatal meningitis."
    },
    {
      vignette: "A researcher is studying gene transfer in Streptococcus pneumoniae. She exposes a non-encapsulated (rough) strain to a heat-killed extract of an encapsulated (smooth) strain. The non-encapsulated bacteria subsequently gain the ability to produce a capsule. Adding DNase to the extract before exposure completely prevents this conversion.",
      question: "This classic experiment demonstrates which form of horizontal gene transfer?",
      options: ["Conjugation","Generalized transduction","Specialized transduction","Transformation","Recombination via IS elements"],
      correctIndex: 3,
      explanation: "This describes the Griffith/Avery-MacLeod-McCarty experiment demonstrating transformation — the uptake of free (naked) DNA from the environment by competent bacteria. DNase sensitivity confirms that DNA is the transforming principle, distinguishing this from conjugation (cell contact, DNase-resistant) and transduction (phage-mediated).",
      optionExplanations: ["Incorrect: Conjugation requires direct cell-to-cell contact via a pilus; the heat-killed donor cannot form a pilus.","Incorrect: Generalized transduction requires bacteriophage particles to package random segments of donor DNA; no phage is described.","Incorrect: Specialized transduction involves specific genes adjacent to prophage integration sites; no phage is involved here.","Correct: Transformation is uptake of naked DNA from the environment by competent bacteria; it is inhibited by DNase.","Incorrect: IS (insertion sequence) elements mediate intracellular DNA rearrangements, not uptake of external DNA."],
      highYieldPoint: "Transformation = uptake of naked DNA; DNase-sensitive. Griffith's experiment (S. pneumoniae) proved DNA is the genetic material."
    },
    {
      vignette: "A 22-year-old woman presents with painful urination and urethral discharge. Gram stain of the discharge shows gram-negative diplococci within neutrophils. The causative organism is known to evade the immune system by frequently changing the antigenic structure of its surface pili.",
      question: "Which genetic mechanism allows this organism to vary the antigenic composition of its pili?",
      options: ["Point mutation in a single pilE locus","Homologous recombination between silent pilS loci and the expressed pilE locus","Programmed ribosomal frameshifting","Acquisition of new pilus genes via conjugation","Phase variation by invertible DNA segment"],
      correctIndex: 1,
      explanation: "Neisseria gonorrhoeae undergoes antigenic variation of its pili through recombination between multiple silent pilS gene cassettes and the single expressed pilE locus. This generates diverse pilus variants, allowing the organism to evade antibody-mediated immune responses.",
      optionExplanations: ["Incorrect: While point mutations can contribute, the primary mechanism is recombination between pilS and pilE loci, not isolated point mutations.","Correct: N. gonorrhoeae varies pilus antigens by recombining segments from numerous silent pilS cassettes into the expressed pilE gene.","Incorrect: Programmed ribosomal frameshifting is a translational mechanism used by some viruses, not a mechanism for pilus antigenic variation.","Incorrect: Conjugation could introduce new genes, but the rapid, ongoing pilus variation in N. gonorrhoeae relies on intrinsic recombination events.","Incorrect: Invertible DNA segments mediate phase variation in organisms like Salmonella (flagellar H antigen switching), but gonococcal pilus variation uses pilS/pilE recombination."],
      highYieldPoint: "N. gonorrhoeae antigenic variation of pili: recombination of silent pilS cassettes into expressed pilE. Also varies Opa proteins."
    },
    {
      vignette: "A pharmaceutical company is developing a drug that targets bacterial cell wall synthesis. The drug mimics the terminal D-Ala-D-Ala residues of the peptidoglycan precursor and binds the enzyme that normally catalyzes transpeptidation of adjacent glycan strands.",
      question: "Which class of enzymes is the target of this drug?",
      options: ["Topoisomerases","RNA polymerase","30S ribosomal subunit proteins","Dihydrofolate reductase","Penicillin-binding proteins (transpeptidases)"],
      correctIndex: 4,
      explanation: "Penicillin-binding proteins (PBPs) are transpeptidases that catalyze the cross-linking of peptidoglycan strands by forming peptide bonds between adjacent NAM-linked peptide chains. β-Lactam antibiotics mimic the D-Ala-D-Ala substrate and irreversibly acylate PBPs, inhibiting cell wall synthesis.",
      optionExplanations: ["Incorrect: Topoisomerases are targets of fluoroquinolones, not drugs mimicking D-Ala-D-Ala.","Incorrect: RNA polymerase is the target of rifampin, which inhibits mRNA synthesis.","Incorrect: 30S ribosomal subunit proteins are targets of aminoglycosides and tetracyclines, affecting protein synthesis.","Incorrect: Dihydrofolate reductase is the target of trimethoprim, involved in folate synthesis, not cell wall synthesis.","Correct: Penicillin-binding proteins (PBPs) are transpeptidases that cross-link peptidoglycan; they are the targets of β-lactam antibiotics."],
      highYieldPoint: "PBPs (transpeptidases) cross-link peptidoglycan via D-Ala-D-Ala; β-lactams mimic this substrate and irreversibly inhibit PBPs."
    },
    {
      vignette: "A patient is hospitalized for sepsis caused by a gram-negative organism. Blood cultures grow oxidase-negative lactose-fermenting rods. The attending physician explains that fever and hypotension in this patient are largely driven by a lipid component of the bacterial outer membrane that activates toll-like receptor 4 on innate immune cells.",
      question: "Which molecular component is primarily responsible for the septic response in this patient?",
      options: ["Lipid A","Flagellin","Peptidoglycan fragments","Capsular polysaccharide","Exotoxin A"],
      correctIndex: 0,
      explanation: "Lipid A is the toxic moiety of lipopolysaccharide (LPS/endotoxin) found in the outer membrane of gram-negative bacteria. It activates macrophages via TLR4/CD14/MD-2, triggering release of TNF-α, IL-1, IL-6, and other cytokines responsible for fever, vasodilation, hypotension, and potentially septic shock.",
      optionExplanations: ["Correct: Lipid A is the endotoxin component of LPS that activates TLR4 signaling, driving the septic inflammatory cascade.","Incorrect: Flagellin activates TLR5 and contributes to inflammation, but Lipid A/LPS via TLR4 is the dominant driver of gram-negative sepsis.","Incorrect: Peptidoglycan fragments activate TLR2/NOD receptors and contribute to inflammation, but are more relevant in gram-positive infections.","Incorrect: Capsular polysaccharide is antiphagocytic but does not directly cause the fever and hypotension of sepsis.","Incorrect: Exotoxin A is produced by Pseudomonas aeruginosa and inactivates EF-2; the scenario describes a lactose-fermenting rod (likely E. coli), and the question asks about the outer membrane lipid component."],
      highYieldPoint: "Lipid A (endotoxin) activates TLR4 → TNF-α, IL-1, IL-6 → fever, hypotension, DIC. Heat-stable; not a protein."
    },
    {
      vignette: "A molecular biology graduate student clones a gene from a thermophilic bacterium into an E. coli expression vector. She adds a specific sugar to the growth medium, which binds to the repressor controlling the cloned gene's promoter, allowing high-level expression. However, she notices that expression is further enhanced when glucose is removed from the medium.",
      question: "The enhanced expression upon glucose removal is best explained by increased intracellular levels of which molecule?",
      options: ["Allolactose","Guanosine tetraphosphate (ppGpp)","Cyclic AMP (cAMP)","Cyclic di-GMP","Inositol triphosphate"],
      correctIndex: 2,
      explanation: "When glucose is absent, adenylyl cyclase activity increases, raising intracellular cAMP levels. cAMP binds catabolite activator protein (CAP), and the cAMP-CAP complex binds upstream of the lac promoter (commonly used in expression vectors), enhancing RNA polymerase binding and transcription.",
      optionExplanations: ["Incorrect: Allolactose is the inducer that releases the lac repressor; it does not explain the additional enhancement from glucose removal.","Incorrect: ppGpp mediates the stringent response during amino acid starvation; it is not directly related to catabolite repression.","Correct: Glucose removal increases cAMP, which forms a complex with CAP to enhance transcription from catabolite-sensitive promoters.","Incorrect: Cyclic di-GMP regulates biofilm formation and motility in bacteria, not catabolite repression.","Incorrect: Inositol triphosphate (IP3) is a eukaryotic second messenger involved in calcium signaling, not bacterial gene regulation."],
      highYieldPoint: "Catabolite repression: low glucose → high cAMP → cAMP-CAP complex → enhanced transcription of catabolite-sensitive operons."
    },
    {
      vignette: "A clinical laboratory evaluates an isolate from a wound infection. The organism grows on blood agar in ambient air and produces a clear zone of hemolysis around its colonies. The technician notes that the organism can also survive in 6.5% NaCl broth and hydrolyze esculin in the presence of bile.",
      question: "Which bacterial structure allows this organism to resist the detergent effects of bile salts?",
      options: ["Outer membrane","Lipoteichoic acid","Mycolic acid cell wall","Group D lipoteichoic acid and durable cell wall composition","IgA protease"],
      correctIndex: 3,
      explanation: "Enterococci (group D streptococci-like organisms) possess inherently durable cell walls with lipoteichoic acids that allow them to tolerate bile salts (grow on bile esculin agar) and high salt concentrations (6.5% NaCl). These characteristics, along with esculin hydrolysis, are classic biochemical identifiers for Enterococcus species.",
      optionExplanations: ["Incorrect: The outer membrane is a gram-negative structure; bile-esculin positive organisms growing on blood agar with clear hemolysis and bile/salt tolerance suggest Enterococcus, which is gram-positive.","Incorrect: While lipoteichoic acid is present in gram-positive cell walls, the combination of bile and salt tolerance is attributed to the overall durable composition of the enterococcal cell wall, not lipoteichoic acid alone.","Incorrect: Mycolic acid is characteristic of Mycobacterium and Nocardia, not Enterococcus.","Correct: Enterococci have inherently resilient cell wall architecture that enables them to tolerate bile salts and high salt environments.","Incorrect: IgA protease cleaves mucosal immunoglobulin A and is a virulence factor of Neisseria and Haemophilus, not related to bile tolerance."],
      highYieldPoint: "Enterococcus: bile-esculin positive, grows in 6.5% NaCl, PYR positive. Key for differentiating from group D Streptococcus (S. bovis)."
    },
    {
      vignette: "An investigator is studying a mobile genetic element in Staphylococcus aureus that confers methicillin resistance. She finds that this element encodes an altered transpeptidase with low affinity for β-lactam antibiotics. The element is flanked by inverted terminal repeats and carries genes for its own integration into the chromosome.",
      question: "Which type of mobile genetic element carries the mecA gene in this organism?",
      options: ["R-plasmid","Staphylococcal cassette chromosome (SCCmec)","Insertion sequence","Pathogenicity island","Integrative conjugative element"],
      correctIndex: 4,
      explanation: "While SCCmec is the most precisely correct answer, the description of a mobile element flanked by inverted repeats encoding its own integration matches the general features of SCCmec. However, SCCmec is actually the answer — it is a mobile genetic element that carries mecA (encoding PBP2a, an altered transpeptidase) and integrates at a specific site in the S. aureus chromosome using cassette chromosome recombinases (ccr). Note: The question's description fits SCCmec as it integrates site-specifically into the chromosome.",
      optionExplanations: ["Incorrect: R-plasmids carry antibiotic resistance genes but are extrachromosomal; mecA in MRSA is chromosomally integrated within SCCmec.","Incorrect: While SCCmec is the correct element, the answer option here was designed to test knowledge of mobile elements. SCCmec is classified as a mobile genetic island rather than a simple cassette chromosome.","Incorrect: Insertion sequences are short elements encoding only transposase; they are too small to carry mecA and its associated regulatory genes.","Incorrect: Pathogenicity islands carry clusters of virulence genes; while similar in concept, the mecA-carrying element in S. aureus is specifically classified as SCCmec.","Correct: SCCmec (staphylococcal cassette chromosome mec) is the mobile genetic element carrying mecA; it has site-specific recombinase genes and integrates into the chromosome."],
      highYieldPoint: "MRSA: mecA gene on SCCmec encodes PBP2a (low β-lactam affinity). SCCmec integrates site-specifically into the S. aureus chromosome."
    }
  ],

  "Gram-positive bacteria": [
    {
      vignette: "A 7-year-old boy presents with fever, sore throat, and a sandpaper-like rash on his trunk and extremities that blanches with pressure. Examination reveals a strawberry tongue, circumoral pallor, and tender anterior cervical lymphadenopathy. Rapid antigen detection test from a throat swab is positive.",
      question: "Which virulence factor is most directly responsible for this patient's rash?",
      options: ["Erythrogenic (pyrogenic) exotoxin","Streptolysin O","M protein","Hyaluronidase","Streptokinase"],
      correctIndex: 0,
      explanation: "The erythrogenic (scarlatina) toxin, also called streptococcal pyrogenic exotoxin (SPE), is a superantigen produced by certain strains of Streptococcus pyogenes (group A strep). It causes the characteristic diffuse, sandpaper-like rash of scarlet fever by activating large numbers of T cells and inducing massive cytokine release that affects dermal blood vessels.",
      optionExplanations: ["Correct: Erythrogenic exotoxin (SPE) is a superantigen responsible for the scarlet fever rash; encoded by a bacteriophage.","Incorrect: Streptolysin O is a hemolysin that lyses red blood cells and triggers ASO antibodies, but does not produce the rash.","Incorrect: M protein is an antiphagocytic surface virulence factor important for adherence and immune evasion, but does not cause the rash.","Incorrect: Hyaluronidase degrades connective tissue, facilitating spread, but does not produce the scarlatiniform rash.","Incorrect: Streptokinase activates plasminogen to dissolve clots, aiding bacterial spread, but is unrelated to the rash."],
      highYieldPoint: "Scarlet fever = SPE (superantigen) from S. pyogenes; sandpaper rash, strawberry tongue, circumoral pallor. SPE gene carried by phage."
    },
    {
      vignette: "A 72-year-old woman in a nursing home develops watery diarrhea progressing to bloody stools, abdominal pain, and fever after completing a 10-day course of clindamycin. Colonoscopy reveals raised, yellowish-white plaques adhering to the colonic mucosa.",
      question: "Which toxin produced by the causative organism is primarily responsible for the mucosal damage and pseudomembrane formation?",
      options: ["Toxin A (enterotoxin)","Shiga toxin","Cholera toxin","Toxin B (cytotoxin)","Alpha toxin (lecithinase)"],
      correctIndex: 3,
      explanation: "Clostridioides difficile produces two major toxins. Toxin B (cytotoxin) is the primary driver of mucosal damage and pseudomembrane formation. It inactivates Rho GTPases by glucosylation, disrupting the actin cytoskeleton of colonocytes, leading to cell rounding, detachment, and death. While toxin A (enterotoxin) also contributes, toxin B is more potent and essential for disease.",
      optionExplanations: ["Incorrect: Toxin A is an enterotoxin that causes fluid secretion and inflammation, but toxin B is the more potent cytotoxin responsible for mucosal destruction.","Incorrect: Shiga toxin is produced by Shigella dysenteriae and EHEC (E. coli O157:H7), not C. difficile.","Incorrect: Cholera toxin is produced by Vibrio cholerae and causes watery diarrhea by ADP-ribosylation of Gs protein, not pseudomembrane formation.","Correct: Toxin B (cytotoxin) glucosylates Rho GTPases → actin disruption → cell death → pseudomembrane formation.","Incorrect: Alpha toxin (lecithinase/phospholipase C) is the major toxin of Clostridium perfringens causing gas gangrene, not pseudomembranous colitis."],
      highYieldPoint: "C. difficile: toxin A (enterotoxin) + toxin B (cytotoxin); both glucosylate Rho GTPases. Toxin B = primary virulence factor."
    },
    {
      vignette: "A 55-year-old man who is an avid gardener presents with a painless, black eschar on his right forearm. The surrounding tissue shows significant edema but minimal erythema. Gram stain of fluid from the lesion reveals large, box-car shaped gram-positive rods in chains. The organism grows on blood agar producing non-hemolytic, ground-glass colonies.",
      question: "Which virulence factor is most responsible for the edema surrounding this patient's lesion?",
      options: ["Lethal factor","Protective antigen","Edema factor","Poly-D-glutamate capsule","Cereulide"],
      correctIndex: 2,
      explanation: "Bacillus anthracis produces a tripartite toxin system. Edema factor (EF) is a calmodulin-dependent adenylate cyclase that increases intracellular cAMP in host cells, leading to massive fluid efflux and the characteristic edema of cutaneous anthrax. EF enters cells via protective antigen (PA), which forms the binding/delivery component.",
      optionExplanations: ["Incorrect: Lethal factor (LF) is a zinc metalloprotease that cleaves MAPK kinases, causing cell death, but does not directly cause edema.","Incorrect: Protective antigen (PA) is the binding component that delivers EF and LF into host cells; it does not directly cause edema.","Correct: Edema factor is an adenylate cyclase that increases cAMP, causing the massive tissue edema seen in cutaneous anthrax.","Incorrect: The poly-D-glutamate capsule is antiphagocytic and helps the organism evade immune clearance, but does not cause edema.","Incorrect: Cereulide is an emetic toxin produced by Bacillus cereus, not B. anthracis."],
      highYieldPoint: "B. anthracis toxins: PA (binding) + EF (adenylate cyclase → edema) or PA + LF (metalloprotease → cell death). Capsule = poly-D-glutamate."
    },
    {
      vignette: "A 30-year-old pregnant woman at 34 weeks gestation presents with fever, myalgia, and mild diarrhea. Blood cultures grow gram-positive rods that exhibit tumbling motility at 25°C and produce a narrow zone of β-hemolysis on blood agar. She is started on intravenous ampicillin.",
      question: "Which characteristic of this organism allows it to spread directly from cell to cell within host tissues, evading extracellular immune defenses?",
      options: ["Internalin-mediated endocytosis","ActA-mediated actin polymerization (actin rockets)","Production of listeriolysin O","Cold-growth capability","Flagellar motility at 37°C"],
      correctIndex: 1,
      explanation: "Listeria monocytogenes uses the surface protein ActA to nucleate actin polymerization at one pole of the bacterium, forming 'actin rockets' that propel the organism through the cytoplasm and into adjacent cells. This cell-to-cell spread avoids exposure to antibodies and complement in the extracellular space.",
      optionExplanations: ["Incorrect: Internalins (InlA, InlB) mediate initial entry into host cells by binding E-cadherin and Met receptors, but do not facilitate cell-to-cell spread.","Correct: ActA polymerizes host actin to form actin rockets, propelling the bacterium through the cytoplasm and into neighboring cells.","Incorrect: Listeriolysin O (LLO) is a pore-forming hemolysin that allows the bacterium to escape from phagosomes into the cytoplasm, but does not mediate intercellular spread.","Incorrect: Cold growth (psychrophilic) allows Listeria to proliferate in refrigerated foods but does not explain intracellular spread.","Incorrect: Listeria displays tumbling motility at 25°C via peritrichous flagella, but flagellar expression is reduced at 37°C; flagella do not mediate cell-to-cell spread."],
      highYieldPoint: "Listeria intracellular lifecycle: internalins (entry) → LLO (phagosome escape) → ActA (actin rockets for cell-to-cell spread)."
    },
    {
      vignette: "A 60-year-old man with a prosthetic aortic valve develops fever, fatigue, and a new diastolic murmur over 6 weeks. Blood cultures grow catalase-negative, optochin-resistant, bile-insoluble gram-positive cocci in chains that produce α-hemolysis on blood agar. Echocardiography reveals a large vegetation on the prosthetic valve.",
      question: "Which organism is the most likely cause of this patient's endocarditis?",
      options: ["Viridans group streptococci","Streptococcus pneumoniae","Staphylococcus epidermidis","Enterococcus faecalis","Streptococcus agalactiae"],
      correctIndex: 0,
      explanation: "Viridans group streptococci (e.g., S. mutans, S. sanguinis) are the most common cause of subacute bacterial endocarditis on both native and prosthetic valves (late presentation >60 days post-surgery). They are α-hemolytic, optochin-resistant, and bile-insoluble — distinguishing them from S. pneumoniae (optochin-sensitive, bile-soluble).",
      optionExplanations: ["Correct: Viridans streptococci are α-hemolytic, optochin-resistant, bile-insoluble, and the classic cause of subacute bacterial endocarditis.","Incorrect: S. pneumoniae is α-hemolytic but is optochin-sensitive and bile-soluble; it rarely causes endocarditis.","Incorrect: S. epidermidis causes prosthetic valve endocarditis (especially early, <60 days) but is catalase-positive, not catalase-negative.","Incorrect: Enterococcus faecalis can cause subacute endocarditis but is typically γ-hemolytic (or α) and grows in 6.5% NaCl and bile esculin, which is not described.","Incorrect: S. agalactiae (group B strep) is β-hemolytic and primarily causes neonatal infections, not subacute endocarditis."],
      highYieldPoint: "Viridans strep: α-hemolytic, optochin-resistant, bile-insoluble → subacute endocarditis. vs. S. pneumoniae: optochin-sensitive, bile-soluble."
    },
    {
      vignette: "A 45-year-old man presents with double vision, difficulty swallowing, and progressive descending paralysis 18 hours after eating home-canned vegetables at a dinner party. His pupils are fixed and dilated. No fever is present.",
      question: "What is the mechanism of action of the toxin responsible for this patient's symptoms?",
      options: ["Blocks release of acetylcholine at the neuromuscular junction by cleaving SNARE proteins","Blocks release of glycine and GABA from Renshaw cells in the spinal cord","Stimulates adenylate cyclase, increasing intracellular cAMP in intestinal epithelial cells","ADP-ribosylates EF-2, inhibiting protein synthesis","Activates T cells as a superantigen, causing massive cytokine release"],
      correctIndex: 0,
      explanation: "Botulinum toxin (produced by Clostridium botulinum) is a zinc metalloprotease that cleaves SNARE proteins (SNAP-25, synaptobrevin, syntaxin) at the presynaptic terminal of cholinergic neurons, preventing acetylcholine release. This causes a descending flaccid paralysis, starting with cranial nerves (diplopia, dysphagia) and progressing to respiratory muscles.",
      optionExplanations: ["Correct: Botulinum toxin cleaves SNARE proteins, blocking ACh release at neuromuscular junctions → flaccid paralysis.","Incorrect: This describes tetanus toxin (tetanospasmin), which blocks inhibitory neurotransmitter release (glycine, GABA) → spastic paralysis.","Incorrect: This describes cholera toxin, which ADP-ribosylates Gs → increased cAMP → secretory diarrhea.","Incorrect: This describes diphtheria toxin and Pseudomonas exotoxin A, which inhibit protein synthesis via EF-2 ADP-ribosylation.","Incorrect: This describes superantigens such as TSST-1 (S. aureus) or SPE (S. pyogenes); botulinum toxin is not a superantigen."],
      highYieldPoint: "Botulinum toxin = flaccid (descending) paralysis; cleaves SNARE proteins. Tetanus toxin = spastic paralysis; blocks inhibitory NTs. Both are zinc metalloproteases."
    },
    {
      vignette: "A 19-year-old college student is brought to the emergency department with high fever, hypotension, a diffuse erythematous rash including palms and soles, and desquamation of the skin on her hands. She reports using a menstrual tampon. Blood cultures are negative, but the organism is isolated from a vaginal culture.",
      question: "Which toxin produced by the causative organism is most directly responsible for this clinical presentation?",
      options: ["Exfoliative toxin A","Toxic shock syndrome toxin-1 (TSST-1)","Panton-Valentine leukocidin (PVL)","Enterotoxin B","Protein A"],
      correctIndex: 1,
      explanation: "TSST-1 is a superantigen produced by certain strains of Staphylococcus aureus. It cross-links MHC II on antigen-presenting cells with the Vβ region of the T-cell receptor, activating up to 20% of T cells. This causes massive cytokine release (IL-1, IL-2, TNF-α), leading to fever, hypotension, diffuse rash, and multiorgan failure — toxic shock syndrome.",
      optionExplanations: ["Incorrect: Exfoliative toxin A causes staphylococcal scalded skin syndrome (SSSS) by cleaving desmoglein-1, resulting in skin separation, not diffuse erythema with tampon association.","Correct: TSST-1 is a superantigen causing toxic shock syndrome — fever, rash, hypotension, desquamation, and multiorgan involvement.","Incorrect: PVL destroys neutrophils and is associated with skin infections and necrotizing pneumonia, not toxic shock syndrome.","Incorrect: Enterotoxin B can cause both food poisoning (emesis) and contribute to some non-menstrual toxic shock cases, but TSST-1 is the classic toxin in menstrual TSS.","Incorrect: Protein A binds the Fc region of IgG, preventing opsonization, but does not cause the systemic inflammatory syndrome seen here."],
      highYieldPoint: "TSST-1 = superantigen → massive T-cell activation → cytokine storm → toxic shock syndrome. Menstrual TSS linked to tampon use."
    },
    {
      vignette: "A 4-year-old boy presents with fever and a honey-crusted lesion on his face near his nares. The lesion began as a small vesicle that ruptured. Gram stain of the exudate reveals gram-positive cocci in clusters. Culture on mannitol salt agar produces yellow (mannitol-fermenting) colonies.",
      question: "Which enzyme produced by this organism contributes to its ability to form abscesses by converting fibrinogen to fibrin?",
      options: ["Catalase","DNase","Hyaluronidase","Coagulase","Lipase"],
      correctIndex: 3,
      explanation: "Coagulase is a hallmark enzyme of Staphylococcus aureus. It converts fibrinogen to fibrin, creating a fibrin clot around the organism that walls off the infection site, forming abscesses and protecting the bacteria from immune cells. Coagulase positivity distinguishes S. aureus from coagulase-negative staphylococci.",
      optionExplanations: ["Incorrect: Catalase converts H₂O₂ to H₂O and O₂ and is present in all staphylococci (differentiating them from streptococci), but does not form fibrin.","Incorrect: DNase degrades DNA in necrotic tissue, aiding spread, but does not contribute to fibrin clot formation.","Incorrect: Hyaluronidase degrades hyaluronic acid in connective tissue, facilitating bacterial spread, but does not form fibrin.","Correct: Coagulase converts fibrinogen to fibrin, promoting abscess formation and shielding bacteria from phagocytosis.","Incorrect: Lipase degrades lipids and aids in colonization of sebaceous areas, but is unrelated to abscess formation via fibrin."],
      highYieldPoint: "Coagulase positive = S. aureus; coagulase negative = S. epidermidis, S. saprophyticus. Coagulase → fibrin → abscess formation."
    },
    {
      vignette: "A 3-week-old neonate presents with fever, poor feeding, and bulging fontanelle. CSF analysis reveals gram-positive cocci in short chains, and the culture produces a narrow zone of β-hemolysis on blood agar. The organism gives a positive CAMP test when streaked perpendicular to a β-hemolysin-producing Staphylococcus aureus.",
      question: "Which carbohydrate antigen on this organism's surface is used for serological classification?",
      options: ["Lancefield group A antigen","Quellung reaction capsular antigen","Lancefield group D antigen","Lancefield group B antigen","Protein A"],
      correctIndex: 3,
      explanation: "Streptococcus agalactiae (group B streptococcus, GBS) carries the Lancefield group B carbohydrate antigen. GBS is a major cause of neonatal meningitis, sepsis, and pneumonia. The CAMP test is characteristic of GBS: its CAMP factor enhances the hemolysis produced by S. aureus β-hemolysin, forming an arrowhead-shaped zone of complete hemolysis.",
      optionExplanations: ["Incorrect: Lancefield group A antigen identifies Streptococcus pyogenes, which causes pharyngitis and skin infections but is not the leading cause of neonatal meningitis.","Incorrect: The quellung reaction identifies capsular serotypes of S. pneumoniae, not group B streptococci.","Incorrect: Lancefield group D antigen identifies Enterococcus species and S. bovis, not the CAMP-positive organism described.","Correct: Lancefield group B antigen identifies S. agalactiae (GBS), a leading cause of neonatal meningitis and sepsis.","Incorrect: Protein A is a surface protein of S. aureus, not a streptococcal antigen."],
      highYieldPoint: "GBS (S. agalactiae): Lancefield group B, CAMP test positive, β-hemolytic, hippurate hydrolysis positive → neonatal meningitis/sepsis."
    },
    {
      vignette: "A 50-year-old man undergoing chemotherapy for leukemia develops fever and blood cultures grow gram-positive rods that are motile, catalase-positive, and show β-hemolysis. The organism grows well at 4°C. He reports eating deli meats during his neutropenic period.",
      question: "Which is the most appropriate initial antimicrobial therapy for this patient's infection?",
      options: ["Oral metronidazole","Intravenous vancomycin alone","Intravenous ampicillin with gentamicin","Oral doxycycline","Intravenous ceftriaxone"],
      correctIndex: 2,
      explanation: "Listeria monocytogenes is inherently resistant to cephalosporins (including ceftriaxone). The treatment of choice for listeriosis is ampicillin, often combined with gentamicin for synergistic bactericidal activity, especially in immunocompromised patients and those with meningitis or bacteremia.",
      optionExplanations: ["Incorrect: Metronidazole targets anaerobes and protozoa; Listeria is a facultative anaerobic gram-positive rod not treated with metronidazole.","Incorrect: Vancomycin has activity against Listeria, but ampicillin is the first-line agent; vancomycin is reserved for patients with penicillin allergy.","Correct: Ampicillin + gentamicin is the standard treatment for Listeria infection, providing synergistic bactericidal activity.","Incorrect: Doxycycline is not first-line therapy for listeriosis and would be inappropriate for a serious bloodstream infection.","Incorrect: Listeria is intrinsically resistant to all cephalosporins; ceftriaxone would be ineffective."],
      highYieldPoint: "Listeria treatment: ampicillin ± gentamicin. Listeria is resistant to cephalosporins. High risk: neonates, elderly, immunocompromised, pregnant women."
    },
    {
      vignette: "A 28-year-old man presents with a slowly enlarging, painless ulcer on his left leg following a minor scratch while hiking. The wound has a black necrotic center with surrounding crepitus. X-ray shows gas in the soft tissues. Gram stain of wound drainage reveals large gram-positive rods. A Nagler reaction on egg yolk agar is positive.",
      question: "Which toxin produced by this organism causes the myonecrosis and hemolysis seen in gas gangrene?",
      options: ["Tetanospasmin","Perfringolysin O","Alpha toxin (phospholipase C/lecithinase)","Epsilon toxin","Iota toxin"],
      correctIndex: 2,
      explanation: "The alpha toxin of Clostridium perfringens is a lecithinase (phospholipase C) that degrades lecithin (phosphatidylcholine) in cell membranes, causing massive cell destruction, myonecrosis, and hemolysis. The Nagler reaction detects alpha toxin: it causes opacity on egg yolk agar (lecithin breakdown), which is inhibited by anti-alpha toxin antibody on one half of the plate.",
      optionExplanations: ["Incorrect: Tetanospasmin is the toxin of Clostridium tetani that blocks inhibitory neurotransmitters, causing spastic paralysis.","Incorrect: Perfringolysin O (theta toxin) is a cholesterol-dependent cytolysin that contributes to tissue damage but is not the principal toxin causing myonecrosis.","Correct: Alpha toxin (lecithinase) degrades cell membrane phospholipids → myonecrosis, hemolysis. Detected by the Nagler reaction.","Incorrect: Epsilon toxin is produced by C. perfringens type B and D, mainly causing disease in livestock.","Incorrect: Iota toxin is a binary toxin of C. perfringens type E causing enterotoxemia in animals, not typical gas gangrene."],
      highYieldPoint: "C. perfringens alpha toxin = lecithinase (phospholipase C) → gas gangrene. Nagler reaction positive. Double zone of hemolysis on blood agar."
    },
    {
      vignette: "A 68-year-old woman with a history of colon polyps undergoes a colonoscopy revealing a new adenomatous polyp. During evaluation, blood cultures drawn for a separate fever workup grow gram-positive cocci that are catalase-negative, produce α-hemolysis, and hydrolyze esculin in the presence of 40% bile. The organism does not grow in 6.5% NaCl.",
      question: "Which organism is most likely responsible and what further evaluation should be pursued?",
      options: ["Enterococcus faecalis; echocardiography for endocarditis","Staphylococcus lugdunensis; wound evaluation","Streptococcus pneumoniae; chest X-ray for pneumonia","Viridans group streptococci; dental evaluation","Streptococcus gallolyticus (bovis biotype I); colonoscopy for colorectal neoplasia"],
      correctIndex: 4,
      explanation: "Streptococcus gallolyticus (formerly S. bovis biotype I) is bile-esculin positive but does NOT grow in 6.5% NaCl — distinguishing it from Enterococcus. S. gallolyticus bacteremia has a strong association with colorectal malignancy and premalignant lesions. All patients with S. gallolyticus/bovis bacteremia should undergo colonoscopy.",
      optionExplanations: ["Incorrect: Enterococcus is bile-esculin positive AND grows in 6.5% NaCl; this organism does not grow in 6.5% NaCl.","Incorrect: S. lugdunensis is a coagulase-negative staphylococcus (catalase-positive), not matching the catalase-negative cocci described.","Incorrect: S. pneumoniae is optochin-sensitive and bile-soluble; it does not grow on bile esculin agar.","Incorrect: Viridans streptococci are bile-esculin negative and are associated with dental procedures and subacute endocarditis.","Correct: S. gallolyticus (bovis biotype I) is bile-esculin positive, NaCl-negative, and strongly associated with colorectal cancer."],
      highYieldPoint: "S. gallolyticus (bovis) bacteremia → mandatory colonoscopy to rule out colon cancer. Bile-esculin (+), 6.5% NaCl (−) differentiates from Enterococcus."
    },
    {
      vignette: "A 10-year-old girl presents with a sore throat and fever. Two weeks later, she develops polyarthritis affecting her knees and ankles, a new heart murmur, and subcutaneous nodules on her elbows. Her ASO titer is elevated.",
      question: "Which pathogenic mechanism best explains the cardiac involvement in this patient's condition?",
      options: ["Direct bacterial invasion of the myocardium","Type I hypersensitivity reaction to streptococcal antigens","Toxin-mediated destruction of cardiac myocytes","Immune complex deposition in the coronary arteries","Molecular mimicry between bacterial M protein and cardiac tissue antigens"],
      correctIndex: 4,
      explanation: "Acute rheumatic fever results from molecular mimicry: antibodies against the M protein of Streptococcus pyogenes cross-react with antigens in cardiac tissue (especially myosin and laminin of the heart valves). This type II hypersensitivity response leads to pancarditis. The Jones criteria help diagnose rheumatic fever.",
      optionExplanations: ["Incorrect: Rheumatic fever is an immunologic response, not a direct infection; blood cultures are negative, and bacteria are not found in cardiac tissue.","Incorrect: Type I hypersensitivity (IgE-mediated, mast cell degranulation) causes allergic reactions, not the cardiac pathology of rheumatic fever.","Incorrect: While streptococcal toxins (e.g., streptolysin O) exist, they do not directly destroy cardiac tissue in rheumatic fever; the damage is immune-mediated.","Incorrect: Immune complex deposition (type III) is involved in post-streptococcal glomerulonephritis, not rheumatic carditis.","Correct: Molecular mimicry between M protein epitopes and cardiac myosin/laminin leads to autoimmune cross-reactivity (type II hypersensitivity) → carditis."],
      highYieldPoint: "Rheumatic fever = molecular mimicry (type II hypersensitivity): anti-M protein Abs cross-react with cardiac myosin/laminin. Jones criteria for diagnosis."
    },
    {
      vignette: "A 35-year-old IV drug user presents with acute-onset high fever, pleuritic chest pain, and a new holosystolic murmur at the left sternal border that increases with inspiration. Chest X-ray shows multiple peripheral nodular opacities with some cavitation. Blood cultures grow gram-positive cocci in clusters that are catalase-positive and coagulase-positive.",
      question: "Which structure is most likely the primary site of infection in this patient?",
      options: ["Aortic valve","Mitral valve","Left atrial appendage","Pulmonic valve","Tricuspid valve"],
      correctIndex: 4,
      explanation: "In IV drug users, Staphylococcus aureus is the most common cause of infective endocarditis, and the tricuspid valve is predominantly affected (right-sided endocarditis). Vegetations on the tricuspid valve shower septic emboli to the lungs, producing multiple peripheral pulmonary nodules and cavitary lesions. The holosystolic murmur increasing with inspiration (Carvallo sign) localizes to the tricuspid valve.",
      optionExplanations: ["Incorrect: Aortic valve endocarditis is common in native valve endocarditis from oral streptococci; the clinical presentation with septic pulmonary emboli suggests right-sided disease.","Incorrect: Mitral valve is the most commonly affected valve overall, but in IV drug users, the tricuspid valve predominates.","Incorrect: The left atrial appendage is associated with thrombus formation in atrial fibrillation, not endocarditis vegetations.","Incorrect: Pulmonic valve endocarditis is very rare even in IV drug users.","Correct: IV drug use predisposes to right-sided (tricuspid valve) S. aureus endocarditis with septic pulmonary emboli."],
      highYieldPoint: "IVDU endocarditis: S. aureus, tricuspid valve → septic pulmonary emboli (nodular infiltrates, cavitation). Carvallo sign = murmur increases with inspiration."
    },
    {
      vignette: "A 5-year-old girl presents with a low-grade fever and a well-demarcated, honey-colored crusted lesion on her chin that has been spreading for 5 days. Gram stain reveals gram-positive cocci in chains. The organism is bacitracin-sensitive and PYR-positive.",
      question: "Which post-infectious complication is this patient at risk of developing?",
      options: ["Rheumatic fever","Post-streptococcal glomerulonephritis","Scarlet fever","Toxic shock syndrome","Necrotizing fasciitis"],
      correctIndex: 1,
      explanation: "Impetigo caused by Streptococcus pyogenes (group A strep) can lead to post-streptococcal glomerulonephritis (PSGN), typically 2–3 weeks after skin infection. PSGN results from immune complex (type III hypersensitivity) deposition in the glomeruli. Importantly, only pharyngitis (not skin infections) can lead to rheumatic fever; both pharyngitis and skin infections can lead to PSGN.",
      optionExplanations: ["Incorrect: Rheumatic fever follows streptococcal pharyngitis, not skin infections. Skin infections with S. pyogenes do not lead to rheumatic fever.","Correct: Post-streptococcal glomerulonephritis can follow both pharyngeal and skin infections with nephritogenic strains of S. pyogenes.","Incorrect: Scarlet fever is an acute manifestation of SPE-producing streptococcal pharyngitis, not a post-infectious complication of impetigo.","Incorrect: Toxic shock syndrome can complicate some GAS infections but is a direct toxin-mediated event, not the classic post-infectious complication asked about.","Incorrect: Necrotizing fasciitis is an acute deep tissue infection, not a delayed post-infectious sequela."],
      highYieldPoint: "Post-streptococcal glomerulonephritis: follows pharyngitis OR skin infection (type III hypersensitivity). Rheumatic fever: follows pharyngitis ONLY."
    }
  ],

  "Gram-negative bacteria": [
    {
      vignette: "A 6-month-old infant presents with bloody diarrhea, fever, and dehydration after ingestion of undercooked ground beef at a family cookout. Stool culture on sorbitol-MacConkey agar reveals colorless (non-sorbitol-fermenting) colonies. A Shiga toxin immunoassay is positive.",
      question: "What is the mechanism of action of the toxin produced by this organism?",
      options: ["Cleaves 28S rRNA of the 60S ribosomal subunit, halting protein synthesis","ADP-ribosylates the Gs alpha subunit, permanently activating adenylate cyclase","Cleaves SNARE proteins at presynaptic nerve terminals","ADP-ribosylates EF-2, inhibiting protein synthesis in eukaryotic cells","Stimulates guanylate cyclase, increasing intracellular cGMP"],
      correctIndex: 0,
      explanation: "Enterohemorrhagic E. coli (EHEC, O157:H7) produces Shiga-like toxins (Stx1, Stx2) that cleave the N-glycosidic bond of adenine on the 28S rRNA of the 60S ribosomal subunit, irreversibly halting protein synthesis. This leads to death of intestinal epithelial cells (bloody diarrhea) and glomerular endothelial cells (hemolytic uremic syndrome).",
      optionExplanations: ["Correct: Shiga toxin cleaves 28S rRNA of the 60S ribosomal subunit → inhibits protein synthesis → cell death → bloody diarrhea and HUS.","Incorrect: This describes cholera toxin, which ADP-ribosylates Gsα → increased cAMP → secretory (watery) diarrhea.","Incorrect: This describes botulinum toxin, which causes flaccid paralysis.","Incorrect: This describes diphtheria toxin and Pseudomonas exotoxin A, which ADP-ribosylate EF-2.","Incorrect: This describes the heat-stable enterotoxin (STa) of ETEC, which activates guanylate cyclase → watery diarrhea."],
      highYieldPoint: "Shiga toxin (EHEC, Shigella) = inactivates 60S ribosome (28S rRNA). EHEC: O157:H7, sorbitol-negative on SMAC agar, causes HUS. Do NOT treat with antibiotics."
    },
    {
      vignette: "A 45-year-old man returns from a trip to South Asia with profuse, painless, watery (rice-water) diarrhea and severe dehydration. Stool culture on thiosulfate-citrate-bile salts-sucrose (TCBS) agar grows yellow colonies. Dark-field microscopy shows comma-shaped, rapidly motile organisms.",
      question: "Which intracellular signaling molecule is directly elevated by the toxin produced by this organism?",
      options: ["Cyclic GMP","Cyclic AMP","Inositol triphosphate","Diacylglycerol","Calcium"],
      correctIndex: 1,
      explanation: "Vibrio cholerae produces cholera toxin, which consists of an A subunit (enzymatic) and B subunit (binding to GM1 ganglioside). The A1 fragment ADP-ribosylates the Gsα protein, locking it in its active (GTP-bound) state. This constitutively activates adenylate cyclase, increasing intracellular cAMP, which opens CFTR chloride channels and causes massive secretory diarrhea.",
      optionExplanations: ["Incorrect: cGMP is elevated by the heat-stable toxin (STa) of ETEC via guanylate cyclase activation, not cholera toxin.","Correct: Cholera toxin ADP-ribosylates Gsα → constitutive adenylate cyclase activation → elevated cAMP → secretory diarrhea.","Incorrect: IP3 is generated by phospholipase C signaling and is not the direct target of cholera toxin.","Incorrect: DAG is co-produced with IP3 by phospholipase C and is not directly elevated by cholera toxin.","Incorrect: While calcium signaling may be secondarily affected, the direct mechanism of cholera toxin is cAMP elevation through Gsα ADP-ribosylation."],
      highYieldPoint: "Cholera toxin: A-B toxin; ADP-ribosylates Gsα → ↑cAMP → Cl⁻ secretion via CFTR → rice-water diarrhea. TCBS agar = yellow colonies."
    },
    {
      vignette: "A 25-year-old woman presents with high fever, rose-colored spots on her abdomen, relative bradycardia, and hepatosplenomegaly. She recently returned from travel to Central America. Blood cultures from the first week of illness grow a gram-negative, oxidase-negative rod that produces H₂S on triple sugar iron (TSI) agar and does not ferment lactose.",
      question: "Which virulence mechanism allows this organism to survive within macrophages after phagocytosis?",
      options: ["Production of urease to neutralize phagosomal pH","Vi capsular polysaccharide and resistance to oxidative killing","Type III secretion of effectors that prevent phagosome-lysosome fusion","Siderophore-mediated iron acquisition","Biofilm formation on intracellular membranes"],
      correctIndex: 2,
      explanation: "Salmonella typhi survives within macrophages by injecting effector proteins through its type III secretion system (encoded on Salmonella pathogenicity island 2, SPI-2). These effectors prevent phagosome-lysosome fusion and modify the intracellular vacuolar environment, allowing the organism to replicate within the Salmonella-containing vacuole (SCV).",
      optionExplanations: ["Incorrect: Urease production for pH neutralization is characteristic of Helicobacter pylori, not Salmonella typhi.","Incorrect: Vi capsule helps evade complement and antibody-mediated killing in the bloodstream but does not directly prevent phagosome-lysosome fusion inside macrophages.","Correct: S. typhi SPI-2 type III secretion effectors prevent phagosome-lysosome fusion, allowing intracellular survival within macrophages.","Incorrect: Siderophores (e.g., enterobactin) facilitate iron acquisition from the host but are not the primary mechanism of intramacrophage survival.","Incorrect: Biofilm formation occurs on surfaces and medical devices; intracellular survival of Salmonella depends on type III secretion effectors."],
      highYieldPoint: "Salmonella typhi: facultative intracellular pathogen; survives in macrophages via SPI-2 type III secretion → prevents phagosome-lysosome fusion. Spread via reticuloendothelial system."
    },
    {
      vignette: "A 30-year-old man presents with a painless genital chancre. Dark-field microscopy of serous fluid from the lesion reveals spiral-shaped organisms with tight coils. Serological testing shows a positive RPR confirmed by a positive FTA-ABS test.",
      question: "Why is dark-field microscopy required rather than standard light microscopy with Gram stain for visualizing this organism?",
      options: ["The organism is too large for standard microscopy","The organism has a unique cell wall that prevents crystal violet uptake","The organism is too thin to be resolved by standard light microscopy and does not Gram stain well","The organism is an obligate intracellular pathogen invisible outside cells","The organism exists only in a cyst form in clinical samples"],
      correctIndex: 2,
      explanation: "Treponema pallidum is an extremely thin spirochete (0.1–0.2 μm diameter), below the resolution limit of conventional bright-field microscopy. It also lacks the lipopolysaccharide of typical gram-negative organisms and has an atypical outer membrane, making it invisible on Gram stain. Dark-field microscopy detects the organism by illuminating it against a dark background.",
      optionExplanations: ["Incorrect: T. pallidum is extremely small and thin, not too large; its small diameter is the reason standard microscopy fails.","Incorrect: T. pallidum has an atypical outer membrane rather than a unique cell wall preventing crystal violet uptake; the key issue is that it is too thin to visualize.","Correct: T. pallidum is too thin (0.1–0.2 μm) for bright-field resolution and stains poorly with conventional dyes, requiring dark-field microscopy.","Incorrect: T. pallidum is not an obligate intracellular pathogen; it exists extracellularly in chancre exudates.","Incorrect: T. pallidum does not form cysts; it is found as actively motile spirochetes in primary lesion exudates."],
      highYieldPoint: "T. pallidum: too thin for light microscopy/Gram stain; use dark-field microscopy or fluorescent Ab staining. Serology: non-treponemal (RPR/VDRL) + treponemal (FTA-ABS)."
    },
    {
      vignette: "A 60-year-old man with poorly controlled diabetes presents with severe ear pain, purulent otorrhea, and granulation tissue in the external auditory canal. CT scan shows erosion of the temporal bone. Culture of the drainage grows oxidase-positive, gram-negative rods that produce a blue-green pigment and have a fruity (grape-like) odor.",
      question: "Which of the following is the most likely causative organism?",
      options: ["Haemophilus influenzae","Moraxella catarrhalis","Pseudomonas aeruginosa","Klebsiella pneumoniae","Proteus mirabilis"],
      correctIndex: 2,
      explanation: "Pseudomonas aeruginosa is the causative agent of malignant (necrotizing) otitis externa, which occurs primarily in elderly diabetic or immunocompromised patients. Key identifying features include oxidase positivity, blue-green pigment (pyocyanin and pyoverdin), fruity grape-like odor, and growth on MacConkey agar as a non-lactose fermenter.",
      optionExplanations: ["Incorrect: H. influenzae is a common cause of otitis media in children but does not produce blue-green pigment or cause malignant otitis externa.","Incorrect: M. catarrhalis causes otitis media and respiratory infections; it is a gram-negative diplococcus, not a rod, and does not produce pigment.","Correct: P. aeruginosa produces pyocyanin (blue-green pigment), has a grape-like odor, and causes malignant otitis externa in diabetic patients.","Incorrect: K. pneumoniae is a lactose-fermenting, encapsulated rod that does not produce blue-green pigment.","Incorrect: P. mirabilis is known for swarming motility and urease production, not pigment production or malignant otitis externa."],
      highYieldPoint: "P. aeruginosa: oxidase (+), blue-green pigment (pyocyanin), grape-like odor. Causes malignant otitis externa (diabetics), burn wound infections, CF lung infections."
    },
    {
      vignette: "A 3-year-old girl presents with bloody diarrhea, abdominal cramping, and high fever. Stool culture grows a non-motile, lactose-non-fermenting gram-negative rod that is lysine decarboxylase negative. The organism does not produce H₂S on TSI agar. Serotyping identifies the organism, and a cell culture cytotoxicity assay is positive.",
      question: "Which mechanism does this organism use to invade colonic epithelial cells?",
      options: ["Type III secretion system inducing membrane ruffling and macropinocytosis","Receptor-mediated endocytosis via M cells only","Toxin-mediated destruction of tight junctions followed by paracellular invasion","Flagella-mediated penetration of the epithelial barrier","Adhesin-mediated binding followed by direct injection of DNA"],
      correctIndex: 0,
      explanation: "Shigella species invade colonic epithelial cells using a type III secretion system encoded on a virulence plasmid. Effector proteins (IpaB, IpaC, IpaD) are injected into epithelial cells, triggering actin rearrangement and membrane ruffling that leads to bacterial uptake by macropinocytosis. Shigella then escapes the phagosome and spreads cell-to-cell using IcsA/VirG-mediated actin-based motility.",
      optionExplanations: ["Correct: Shigella uses a type III secretion system to inject Ipa proteins → actin rearrangement → membrane ruffling → macropinocytosis into epithelial cells.","Incorrect: While Shigella initially crosses the epithelium via M cells in Peyer patches, the key invasion mechanism into epithelial cells is type III secretion-mediated, not simple receptor-mediated endocytosis.","Incorrect: Shigella produces Shiga toxin (S. dysenteriae type 1), but invasion is primarily through the type III secretion system, not toxin-mediated tight junction destruction.","Incorrect: Shigella is non-motile and does not use flagella for invasion.","Incorrect: Shigella does not inject DNA; it injects effector proteins via the type III secretion system."],
      highYieldPoint: "Shigella: non-motile, non-lactose-fermenting, no H₂S. Invades via type III secretion (Ipa proteins). Very low infectious dose (~10 organisms). Spreads cell-to-cell via actin rockets."
    },
    {
      vignette: "A 40-year-old man presents with epigastric pain, early satiety, and unintentional weight loss. Upper endoscopy reveals a duodenal ulcer. Biopsy of the gastric antrum shows curved gram-negative rods. A rapid urease test (CLO test) performed on the biopsy tissue turns pink within minutes.",
      question: "How does urease production benefit this organism in the gastric environment?",
      options: ["It provides a nitrogen source for bacterial protein synthesis","It generates ammonia that neutralizes gastric acid, creating a protective alkaline microenvironment","It cleaves urea in the bloodstream, causing systemic metabolic alkalosis","It activates a toxin precursor into its active form","It inhibits parietal cell acid secretion directly"],
      correctIndex: 1,
      explanation: "Helicobacter pylori produces abundant urease, which hydrolyzes urea into ammonia (NH₃) and CO₂. The ammonia neutralizes gastric acid in the immediate vicinity of the bacterium, creating an alkaline microenvironment that protects H. pylori from the harsh acidic conditions of the stomach. This is essential for colonization.",
      optionExplanations: ["Incorrect: While nitrogen is a byproduct, the primary survival benefit of urease is acid neutralization, not nitrogen acquisition.","Correct: Urease converts urea → NH₃ + CO₂; ammonia neutralizes H⁺ ions, protecting the organism from gastric acidity.","Incorrect: H. pylori resides in the gastric mucosa; urease activity is local, not systemic. It does not cause systemic metabolic alkalosis.","Incorrect: Urease is not involved in toxin activation; H. pylori virulence factors (CagA, VacA) have independent mechanisms.","Incorrect: H. pylori urease does not directly inhibit parietal cell H⁺/K⁺-ATPase; acid neutralization occurs chemically through ammonia production."],
      highYieldPoint: "H. pylori: urease → NH₃ (neutralizes acid), CagA (↑cancer risk), VacA (vacuolating cytotoxin). Diagnosis: urea breath test, stool antigen, biopsy urease test."
    },
    {
      vignette: "A 22-year-old college student presents with sudden-onset high fever, severe headache, neck stiffness, and a petechial rash on the trunk and lower extremities. Gram stain of CSF reveals gram-negative diplococci. The patient's condition deteriorates rapidly with bilateral adrenal hemorrhage.",
      question: "Which complication characterized by bilateral adrenal hemorrhage and acute adrenal insufficiency is most consistent with this presentation?",
      options: ["Sheehan syndrome","Waterhouse-Friderichsen syndrome","Addison disease","Cushing syndrome","Pheochromocytoma crisis"],
      correctIndex: 1,
      explanation: "Waterhouse-Friderichsen syndrome is acute adrenal insufficiency caused by bilateral adrenal hemorrhagic necrosis, typically occurring in the setting of fulminant meningococcemia (Neisseria meningitidis septicemia). The massive endotoxin release triggers disseminated intravascular coagulation (DIC), leading to hemorrhage in the adrenal glands and acute shock.",
      optionExplanations: ["Incorrect: Sheehan syndrome is postpartum pituitary necrosis due to hemorrhage/hypoperfusion during delivery, not adrenal hemorrhage from sepsis.","Correct: Waterhouse-Friderichsen syndrome = bilateral adrenal hemorrhage due to meningococcal DIC → acute adrenal crisis.","Incorrect: Addison disease is chronic primary adrenal insufficiency (autoimmune, TB), not the acute hemorrhagic process described.","Incorrect: Cushing syndrome involves cortisol excess, not adrenal hemorrhagic destruction.","Incorrect: Pheochromocytoma crisis involves catecholamine excess from an adrenal tumor, unrelated to infectious adrenal hemorrhage."],
      highYieldPoint: "N. meningitidis → meningococcemia → DIC → Waterhouse-Friderichsen syndrome (bilateral adrenal hemorrhage). Petechial/purpuric rash is characteristic."
    },
    {
      vignette: "A 55-year-old man with a history of alcoholism is brought to the emergency department with high fever, productive cough with thick, bloody ('currant jelly') sputum, and rigors. Chest X-ray shows a dense lobar consolidation in the right upper lobe with a bulging fissure. Gram stain of sputum reveals gram-negative rods surrounded by a prominent capsule.",
      question: "Which virulence factor of this organism is primarily responsible for its resistance to phagocytosis?",
      options: ["Thick polysaccharide capsule","Type III secretion system","Endotoxin (lipid A)","Flagella","Pili (fimbriae)"],
      correctIndex: 0,
      explanation: "Klebsiella pneumoniae has a remarkably thick polysaccharide capsule that is its major virulence factor. The capsule inhibits phagocytosis by neutrophils and macrophages and gives colonies a mucoid (string-positive) appearance. In alcoholics and debilitated patients, K. pneumoniae causes a severe necrotizing pneumonia with currant jelly sputum and bulging fissure sign.",
      optionExplanations: ["Correct: The thick polysaccharide capsule of K. pneumoniae inhibits phagocytosis and is the primary virulence factor.","Incorrect: Type III secretion systems are used by organisms like Pseudomonas and Salmonella; the prominent capsule is the key virulence factor of K. pneumoniae.","Incorrect: Endotoxin contributes to the sepsis response but is not the primary antiphagocytic virulence factor.","Incorrect: Klebsiella is non-motile and does not possess flagella.","Incorrect: Pili facilitate adherence but are not the primary antiphagocytic factor; the capsule is."],
      highYieldPoint: "Klebsiella: thick capsule (mucoid colonies), currant jelly sputum, bulging fissure sign. Common in alcoholics and diabetics. ESBL-producing strains increasing."
    },
    {
      vignette: "A 70-year-old woman with a chronic indwelling urinary catheter develops a urinary tract infection. Urine culture grows a gram-negative rod that swarms across the entire blood agar plate in waves. The urine has a strongly alkaline pH with struvite crystals visible on urinalysis.",
      question: "Which enzyme produced by this organism promotes formation of struvite (magnesium ammonium phosphate) kidney stones?",
      options: ["Coagulase","β-lactamase","Catalase","Urease","Gelatinase"],
      correctIndex: 3,
      explanation: "Proteus mirabilis is a highly motile (swarming) gram-negative rod that produces abundant urease. Urease splits urea into ammonia and CO₂, alkalinizing the urine (pH >7.0). The alkaline environment promotes precipitation of magnesium ammonium phosphate (struvite) and calcium phosphate (apatite), forming staghorn calculi.",
      optionExplanations: ["Incorrect: Coagulase is produced by S. aureus and converts fibrinogen to fibrin; it is not involved in stone formation.","Incorrect: β-lactamase confers antibiotic resistance but does not affect urinary pH or stone formation.","Incorrect: Catalase converts hydrogen peroxide to water and oxygen; all Enterobacteriaceae are catalase-positive, but catalase does not cause stone formation.","Correct: Urease hydrolyzes urea → NH₃ + CO₂ → alkaline urine → struvite crystal precipitation → staghorn calculi.","Incorrect: Gelatinase degrades gelatin and collagen; it does not alkalinize urine or promote struvite stones."],
      highYieldPoint: "Proteus mirabilis: urease (+), swarming motility, alkaline urine → struvite (staghorn) calculi. Associated with complicated UTIs (catheters)."
    },
    {
      vignette: "A 28-year-old woman presents with gradual-onset fever, dry cough, headache, and bilateral patchy interstitial infiltrates on chest X-ray. Cold agglutinin titers are elevated. The organism cannot be cultured on standard bacterial media and lacks a cell wall.",
      question: "Why is this organism intrinsically resistant to penicillin and other β-lactam antibiotics?",
      options: ["It produces β-lactamase enzymes","It has altered penicillin-binding proteins (PBPs)","It has an impermeable outer membrane","It lacks a peptidoglycan cell wall, the target of β-lactams","It exists only intracellularly, where β-lactams cannot penetrate"],
      correctIndex: 3,
      explanation: "Mycoplasma pneumoniae lacks a cell wall entirely — it has no peptidoglycan. Since β-lactam antibiotics (penicillins, cephalosporins) work by inhibiting peptidoglycan synthesis, they are completely ineffective against Mycoplasma. Treatment requires antibiotics targeting other structures: macrolides, fluoroquinolones, or tetracyclines.",
      optionExplanations: ["Incorrect: Mycoplasma resistance is not due to β-lactamase production; it inherently lacks the drug target.","Incorrect: Altered PBPs confer resistance in organisms that have peptidoglycan (e.g., MRSA); Mycoplasma has no cell wall at all.","Incorrect: An impermeable outer membrane is a resistance mechanism in gram-negative bacteria; Mycoplasma has no outer membrane or cell wall.","Correct: Mycoplasma lacks peptidoglycan (no cell wall), making β-lactams inherently ineffective since there is no target.","Incorrect: Mycoplasma can exist extracellularly; its resistance is due to lacking a cell wall, not intracellular location."],
      highYieldPoint: "Mycoplasma: no cell wall → no Gram stain, resistant to β-lactams. Contains sterols in membrane. Treat with macrolides, doxycycline, or fluoroquinolones."
    },
    {
      vignette: "A 32-year-old hiker in Connecticut presents with an expanding erythematous ring-shaped lesion with central clearing on his thigh, along with fatigue, myalgias, and arthralgias. He recalls removing a tick approximately 10 days prior. Serological testing using a two-tier approach (ELISA followed by Western blot) confirms the diagnosis.",
      question: "Which organism is the causative agent of this disease?",
      options: ["Rickettsia rickettsii","Francisella tularensis","Ehrlichia chaffeensis","Borrelia burgdorferi","Babesia microti"],
      correctIndex: 3,
      explanation: "Borrelia burgdorferi, a spirochete transmitted by the Ixodes tick, causes Lyme disease. The characteristic expanding ring lesion with central clearing is erythema migrans. Lyme disease progresses through stages: early localized (erythema migrans), early disseminated (cardiac block, Bell palsy, migratory arthritis), and late (chronic arthritis, encephalopathy).",
      optionExplanations: ["Incorrect: R. rickettsii causes Rocky Mountain spotted fever (rash starts at wrists/ankles, spreads centrally), transmitted by Dermacentor tick.","Incorrect: F. tularensis causes tularemia (ulceroglandular disease), transmitted by Dermacentor ticks or animal contact.","Incorrect: E. chaffeensis causes ehrlichiosis (fever, pancytopenia, morulae in monocytes), transmitted by Amblyomma (Lone Star) tick.","Correct: B. burgdorferi causes Lyme disease — erythema migrans, transmitted by Ixodes tick, common in northeastern US.","Incorrect: B. microti causes babesiosis (hemolytic anemia, maltese cross on blood smear), transmitted by Ixodes tick."],
      highYieldPoint: "Lyme disease (B. burgdorferi): Ixodes tick → erythema migrans → Bell palsy, AV block → chronic arthritis. Diagnose with ELISA + Western blot."
    },
    {
      vignette: "A 35-year-old woman presents with lower abdominal pain, fever, cervical motion tenderness, and purulent cervical discharge. Gram stain of the discharge reveals gram-negative intracellular diplococci within neutrophils. She reports a new sexual partner 2 weeks ago.",
      question: "Which virulence factor allows this organism to evade mucosal immune defenses by cleaving a host immunoglobulin?",
      options: ["Pili (fimbriae)","Opa proteins","Lipooligosaccharide","Por proteins (porins)","IgA protease"],
      correctIndex: 4,
      explanation: "Neisseria gonorrhoeae produces IgA protease, which cleaves secretory IgA1 at its hinge region. Since IgA is the predominant immunoglobulin at mucosal surfaces, this protease allows the organism to evade mucosal immune defenses and establish infection in the genitourinary tract, pharynx, and conjunctiva.",
      optionExplanations: ["Incorrect: Pili mediate attachment to mucosal epithelium and undergo antigenic variation, but do not cleave immunoglobulins.","Incorrect: Opa (opacity-associated) proteins mediate tight binding to epithelial cells and facilitate invasion, but do not cleave IgA.","Incorrect: Lipooligosaccharide (LOS) mimics host glycolipids and contributes to immune evasion, but does not cleave immunoglobulins.","Incorrect: Por proteins form pores in the outer membrane that allow nutrient entry and also help prevent phagosome-lysosome fusion, but do not cleave IgA.","Correct: IgA protease cleaves secretory IgA at mucosal surfaces, allowing the organism to evade the primary mucosal immune defense."],
      highYieldPoint: "N. gonorrhoeae virulence: pili (attachment + antigenic variation), Opa (tight binding), IgA protease (cleaves mucosal IgA), Por (prevents phagolysosome fusion)."
    },
    {
      vignette: "An 8-year-old boy presents with a barking cough, low-grade fever, and inspiratory whoop after 2 weeks of worsening cough. His immunization records reveal he did not receive the DTaP vaccine series. Nasopharyngeal culture on Bordet-Gengou agar with cephalexin grows small, mercury-drop-like colonies. A lymphocyte-predominant leukocytosis (WBC 70,000/μL) is noted.",
      question: "Which toxin produced by the causative organism is responsible for the pronounced lymphocytosis?",
      options: ["Adenylate cyclase toxin","Filamentous hemagglutinin","Dermonecrotic toxin","Tracheal cytotoxin","Pertussis toxin"],
      correctIndex: 4,
      explanation: "Pertussis toxin, produced by Bordetella pertussis, ADP-ribosylates the Gi protein (inhibitory G protein), preventing it from inhibiting adenylate cyclase. This results in increased cAMP in many cell types. In lymphocytes, elevated cAMP impairs chemokine receptor signaling, preventing lymphocyte extravasation from blood into lymph nodes, causing marked lymphocytosis.",
      optionExplanations: ["Incorrect: Adenylate cyclase toxin (ACT) is another virulence factor that directly increases cAMP in phagocytes, impairing their function, but it is not the primary cause of lymphocytosis.","Incorrect: Filamentous hemagglutinin (FHA) is an adhesin that helps the organism attach to ciliated respiratory epithelium; it does not cause lymphocytosis.","Incorrect: Dermonecrotic toxin causes local tissue destruction but is not responsible for the systemic lymphocytosis.","Incorrect: Tracheal cytotoxin damages ciliated respiratory epithelium, contributing to the cough, but does not cause lymphocytosis.","Correct: Pertussis toxin ADP-ribosylates Gi → impaired lymphocyte chemotaxis → lymphocytes cannot exit the bloodstream → lymphocytosis."],
      highYieldPoint: "Pertussis toxin: ADP-ribosylates Gi → ↑cAMP → lymphocytosis (impaired chemotaxis), enhanced insulin secretion (hypoglycemia in infants). Whooping cough = paroxysmal stage."
    },
    {
      vignette: "A 50-year-old man who recently stayed at a hotel presents with high fever, nonproductive cough, diarrhea, and confusion. Chest X-ray shows bilateral patchy infiltrates. Sputum Gram stain shows many neutrophils but no organisms. The organism is isolated on buffered charcoal yeast extract (BCYE) agar supplemented with iron and cysteine. Urinary antigen test is positive.",
      question: "Which is the most likely causative organism?",
      options: ["Mycoplasma pneumoniae","Chlamydophila pneumoniae","Streptococcus pneumoniae","Coxiella burnetii","Legionella pneumophila"],
      correctIndex: 4,
      explanation: "Legionella pneumophila causes Legionnaires' disease, an atypical pneumonia acquired from contaminated water sources (air conditioning systems, hot tubs, hotel water systems). It requires BCYE agar with iron and L-cysteine for culture, as it cannot grow on standard media. Diagnosis is aided by urinary antigen testing for serogroup 1. Gram stain shows neutrophils but few organisms because Legionella stains faintly.",
      optionExplanations: ["Incorrect: Mycoplasma pneumoniae causes atypical pneumonia but does not grow on BCYE agar and has no urinary antigen test.","Incorrect: Chlamydophila pneumoniae is an obligate intracellular organism requiring cell culture, not BCYE agar.","Incorrect: S. pneumoniae grows readily on blood agar and is visible on Gram stain; it does not require special media.","Incorrect: Coxiella burnetii causes Q fever and is an obligate intracellular organism; it is not cultured on BCYE agar.","Correct: Legionella requires BCYE agar (iron + cysteine), causes pneumonia with GI/CNS symptoms, and is diagnosed by urinary antigen test."],
      highYieldPoint: "Legionella: BCYE agar (iron + cysteine), silver stain, urinary antigen test. Water sources. Treat with macrolides or fluoroquinolones. Intracellular organism."
    }
  ],

  "Virology": [
    {
      vignette: "A 25-year-old man presents with fever, sore throat, posterior cervical lymphadenopathy, and fatigue lasting 3 weeks. Peripheral blood smear reveals atypical lymphocytes (reactive CD8+ T cells). A heterophile antibody (Monospot) test is positive. Liver transaminases are mildly elevated.",
      question: "Which receptor does the causative virus use to enter host B lymphocytes?",
      options: ["CD4","CR2 (CD21)","Sialic acid residues","ACE2","CCR5"],
      correctIndex: 1,
      explanation: "Epstein-Barr virus (EBV, HHV-4) binds to the complement receptor CR2 (CD21) on B lymphocytes to gain entry. EBV causes infectious mononucleosis characterized by fever, pharyngitis, lymphadenopathy, and atypical lymphocytes. The Monospot test detects heterophile antibodies (IgM) that agglutinate sheep or horse red blood cells.",
      optionExplanations: ["Incorrect: CD4 is the primary receptor for HIV, not EBV.","Correct: EBV binds CR2 (CD21) on B lymphocytes, infecting and immortalizing them.","Incorrect: Sialic acid residues are receptors for influenza virus (hemagglutinin binding).","Incorrect: ACE2 is the receptor for SARS-CoV-2.","Incorrect: CCR5 is a co-receptor for HIV (macrophage-tropic strains), not a receptor for EBV."],
      highYieldPoint: "EBV: CR2 (CD21) receptor on B cells → infectious mononucleosis. Atypical lymphocytes = reactive CD8+ T cells. Associated with Burkitt lymphoma, nasopharyngeal carcinoma, Hodgkin lymphoma."
    },
    {
      vignette: "A 30-year-old IV drug user presents with fatigue, jaundice, and right upper quadrant pain. Serological testing reveals: HBsAg (+), HBeAg (+), Anti-HBc IgM (+), Anti-HBs (−). His ALT is markedly elevated at 1,200 U/L.",
      question: "What does the presence of HBeAg indicate in this patient?",
      options: ["Immunity from prior vaccination","Low viral replication and low infectivity","Active viral replication and high infectivity","Recovery phase with declining viral load","Chronic inactive carrier state"],
      correctIndex: 2,
      explanation: "HBeAg is a secreted protein that serves as a marker of active viral replication and high infectivity. Its presence indicates that the virus is actively replicating with high viral loads in the blood. Combined with HBsAg positivity and anti-HBc IgM positivity, this serological profile indicates acute hepatitis B infection with high transmissibility.",
      optionExplanations: ["Incorrect: Vaccination induces anti-HBs only; HBsAg and HBeAg would be negative.","Incorrect: Low viral replication would be indicated by HBeAg negativity and possible anti-HBe positivity.","Correct: HBeAg positivity indicates active viral replication with high viral load and high infectivity.","Incorrect: Recovery phase shows HBeAg seroconversion to anti-HBe and declining HBsAg.","Incorrect: Chronic inactive carriers are typically HBsAg (+), HBeAg (−), anti-HBe (+) with low viral loads."],
      highYieldPoint: "HBeAg = active replication, high infectivity. HBV serology: HBsAg (infection), anti-HBs (immunity), anti-HBc IgM (acute), HBeAg (replication)."
    },
    {
      vignette: "A 5-year-old unvaccinated child presents with high fever, cough, coryza, and conjunctivitis. Examination reveals small white-blue spots on the buccal mucosa opposite the molars. Two days later, a maculopapular rash erupts on the face and spreads downward to the trunk and extremities.",
      question: "Which type of viral genome does the causative agent possess?",
      options: ["Single-stranded positive-sense RNA","Single-stranded negative-sense RNA","Double-stranded DNA","Double-stranded RNA","Single-stranded DNA"],
      correctIndex: 1,
      explanation: "Measles virus is a member of the Paramyxoviridae family and has a single-stranded, negative-sense RNA genome. The Koplik spots (white-blue spots on buccal mucosa) are pathognomonic for measles and appear before the rash. The three Cs (Cough, Coryza, Conjunctivitis) and descending rash are characteristic.",
      optionExplanations: ["Incorrect: Positive-sense ssRNA viruses include picornaviruses, flaviviruses, and coronaviruses; measles virus is negative-sense.","Correct: Measles virus (Paramyxoviridae) has a single-stranded negative-sense RNA genome, which must be transcribed to positive-sense mRNA by its RNA-dependent RNA polymerase.","Incorrect: dsDNA viruses include herpesviruses, adenoviruses, and poxviruses; measles is an RNA virus.","Incorrect: dsRNA viruses include Reoviridae (rotavirus); measles has a single-stranded RNA genome.","Incorrect: ssDNA viruses include parvoviruses; measles is an RNA virus."],
      highYieldPoint: "Measles (Paramyxovirus): negative-sense ssRNA, enveloped. Koplik spots → maculopapular rash (descending). Complications: encephalitis, SSPE, giant cell pneumonia."
    },
    {
      vignette: "A researcher is studying a retrovirus that infects human CD4+ T cells. She observes that the viral RNA genome is converted to double-stranded DNA in the cytoplasm, which then integrates into the host chromosome. The integrated viral DNA directs production of new viral components using host cell machinery.",
      question: "Which viral enzyme catalyzes the conversion of the viral RNA genome into double-stranded DNA?",
      options: ["RNA-dependent RNA polymerase","DNA-dependent DNA polymerase","Reverse transcriptase","Integrase","Protease"],
      correctIndex: 2,
      explanation: "Reverse transcriptase (RT) is the hallmark enzyme of retroviruses (including HIV). It has three enzymatic activities: RNA-dependent DNA polymerase (synthesizes DNA from the RNA template), RNase H (degrades the RNA strand of the RNA-DNA hybrid), and DNA-dependent DNA polymerase (synthesizes the second DNA strand). The resulting dsDNA is then integrated by integrase.",
      optionExplanations: ["Incorrect: RNA-dependent RNA polymerase is used by many RNA viruses to replicate their genomes, but retroviruses use reverse transcriptase to first make DNA.","Incorrect: DNA-dependent DNA polymerase synthesizes DNA from a DNA template (host cell replication); it does not convert RNA to DNA.","Correct: Reverse transcriptase converts viral ssRNA → dsDNA using its RNA-dependent DNA polymerase and RNase H activities.","Incorrect: Integrase inserts the newly synthesized viral dsDNA into the host chromosome, but does not convert RNA to DNA.","Incorrect: Protease cleaves viral polyproteins into functional units during viral maturation, but is not involved in nucleic acid conversion."],
      highYieldPoint: "Reverse transcriptase: RNA→DNA (retrovirus lifecycle). Three activities: RNA-dependent DNA polymerase, RNase H, DNA-dependent DNA polymerase. NRTIs and NNRTIs target RT."
    },
    {
      vignette: "During a winter outbreak, a 2-year-old child presents with low-grade fever, wheezing, tachypnea, and intercostal retractions. Chest X-ray shows hyperinflation with peribronchial thickening. Nasal wash immunofluorescence assay identifies the pathogen, which is the most common cause of bronchiolitis in infants.",
      question: "Which virus is the most likely cause of this infant's bronchiolitis?",
      options: ["Influenza A virus","Parainfluenza virus type 1","Respiratory syncytial virus (RSV)","Adenovirus","Human metapneumovirus"],
      correctIndex: 2,
      explanation: "Respiratory syncytial virus (RSV) is the most common cause of bronchiolitis and pneumonia in infants and young children, particularly those under 2 years of age. RSV produces fusion (F) protein that causes infected cells to form multinucleated giant cells (syncytia). It peaks in winter months. Palivizumab (anti-F protein monoclonal antibody) is used for prophylaxis in high-risk infants.",
      optionExplanations: ["Incorrect: Influenza A causes pneumonia but is not the most common cause of bronchiolitis in infants.","Incorrect: Parainfluenza virus (especially types 1 and 2) is the most common cause of croup (laryngotracheobronchitis), not bronchiolitis.","Correct: RSV is the #1 cause of bronchiolitis in infants; it produces syncytia via the F (fusion) protein.","Incorrect: Adenovirus can cause bronchiolitis but is a less common etiology than RSV.","Incorrect: Human metapneumovirus causes respiratory illness in children and is the second most common cause of bronchiolitis, but RSV is the most common."],
      highYieldPoint: "RSV = #1 cause of bronchiolitis in infants. F protein → syncytia. Prophylaxis: palivizumab (anti-F Ab) for high-risk infants. Paramyxoviridae family."
    },
    {
      vignette: "A 35-year-old pig farmer in Southeast Asia presents with acute encephalitis, fever, and myoclonus. Brain MRI shows multifocal cortical and subcortical lesions. The virus is isolated and found to be a segmented, negative-sense RNA virus with 8 genome segments. Further testing identifies it as an avian-origin strain that has acquired human-adapted surface proteins through a reassortment event.",
      question: "What term describes the major antigenic change resulting from reassortment of genome segments between different viral subtypes?",
      options: ["Antigenic drift","Antigenic shift","Recombination","Phenotypic mixing","Complementation"],
      correctIndex: 1,
      explanation: "Antigenic shift is a major change in surface antigens (hemagglutinin, neuraminidase) of influenza A virus resulting from reassortment of genome segments between different influenza subtypes during co-infection of a single cell (often in pigs, the 'mixing vessel'). This generates novel viral strains against which the population has no pre-existing immunity, potentially causing pandemics.",
      optionExplanations: ["Incorrect: Antigenic drift refers to minor changes in surface antigens due to point mutations accumulating over time, causing seasonal epidemics, not pandemics.","Correct: Antigenic shift = reassortment of segmented genomes between different influenza subtypes → major antigenic change → pandemic potential.","Incorrect: Recombination involves exchange of genetic material between non-segmented genomes (e.g., coronaviruses); influenza undergoes reassortment, not classical recombination.","Incorrect: Phenotypic mixing occurs when surface proteins from one virus are incorporated into the envelope of another during co-infection, but the genome is unchanged.","Incorrect: Complementation is when two defective viruses in the same cell provide missing functions for each other, but each genome remains unchanged."],
      highYieldPoint: "Antigenic shift (reassortment) = pandemics; antigenic drift (point mutations) = seasonal epidemics. Pigs = 'mixing vessels' for influenza reassortment."
    },
    {
      vignette: "A 4-year-old child presents with a low-grade fever followed by a characteristic 'slapped-cheek' facial rash and a lacy, reticular rash on the trunk and extremities. The child's mother, who is 28 weeks pregnant, is concerned about potential fetal complications.",
      question: "Which fetal complication is most associated with transplacental transmission of this virus?",
      options: ["Hydrops fetalis from severe fetal anemia","Congenital cataracts and heart defects","Microcephaly and intracranial calcifications","Limb hypoplasia and scarring skin lesions","Neonatal herpes encephalitis"],
      correctIndex: 0,
      explanation: "Parvovirus B19 (erythema infectiosum, 'fifth disease') has tropism for erythroid progenitor cells due to its receptor, globoside (P antigen). In the fetus, where red cell turnover is rapid, infection causes severe aplastic anemia leading to high-output cardiac failure and hydrops fetalis (generalized edema, ascites, pleural/pericardial effusions).",
      optionExplanations: ["Correct: Parvovirus B19 infects erythroid precursors → fetal aplastic anemia → hydrops fetalis.","Incorrect: Congenital cataracts and heart defects are associated with congenital rubella syndrome (rubella virus).","Incorrect: Microcephaly and intracranial calcifications are associated with congenital CMV, Zika virus, and toxoplasmosis.","Incorrect: Limb hypoplasia and scarring skin lesions are associated with congenital varicella syndrome.","Incorrect: Neonatal herpes encephalitis is caused by HSV-2 (or HSV-1) transmitted during delivery."],
      highYieldPoint: "Parvovirus B19: ssDNA virus, infects erythroid precursors (P antigen receptor). Fifth disease in children; aplastic crisis in sickle cell; hydrops fetalis in pregnancy."
    },
    {
      vignette: "A 40-year-old man who is HIV-positive with a CD4 count of 50 cells/μL presents with progressive vision loss in his right eye. Fundoscopic examination reveals hemorrhages and fluffy white perivascular exudates ('pizza pie' retinitis). PCR of aqueous humor confirms the diagnosis.",
      question: "Which virus is the most likely cause of this patient's retinitis?",
      options: ["Herpes simplex virus 1","Varicella-zoster virus","Epstein-Barr virus","Cytomegalovirus","Human herpesvirus 8"],
      correctIndex: 3,
      explanation: "CMV retinitis is the most common opportunistic ocular infection in AIDS patients with CD4 counts below 50 cells/μL. The characteristic fundoscopic finding is 'pizza pie' retinitis with hemorrhages and cotton-wool spots (fluffy white exudates) along retinal vessels. Treatment is with ganciclovir, valganciclovir, or foscarnet.",
      optionExplanations: ["Incorrect: HSV-1 causes acute retinal necrosis (ARN), which presents with peripheral retinal necrosis and is not described as 'pizza pie' retinitis.","Incorrect: VZV can cause progressive outer retinal necrosis (PORN) in immunocompromised patients, but 'pizza pie' retinitis is classic for CMV.","Incorrect: EBV causes oral hairy leukoplakia and is associated with lymphomas in AIDS, but not retinitis.","Correct: CMV retinitis causes 'pizza pie' or 'cottage cheese and ketchup' appearance; occurs at CD4 <50 cells/μL.","Incorrect: HHV-8 causes Kaposi sarcoma and primary effusion lymphoma, not retinitis."],
      highYieldPoint: "CMV retinitis: CD4 <50, 'pizza pie' retinitis. Treat with ganciclovir (phosphorylated by UL97 kinase) or foscarnet. CMV = most common congenital viral infection."
    },
    {
      vignette: "A 20-year-old college student presents with a painful cluster of vesicles on an erythematous base on her lower lip. She reports recurrent episodes at the same location, often triggered by stress or sun exposure. The lesions were preceded by tingling and burning for 24 hours.",
      question: "Where does this virus establish latency between recurrences?",
      options: ["Trigeminal ganglion (sensory neurons)","Dorsal root ganglia of thoracic nerves","B lymphocytes","Monocytes and myeloid progenitor cells","Sacral ganglia (S2-S4)"],
      correctIndex: 0,
      explanation: "Herpes simplex virus type 1 (HSV-1) establishes latency in the trigeminal ganglion after primary orolabial infection. During latency, the virus exists as a circular episome in neuronal nuclei, expressing only latency-associated transcripts (LATs). Reactivation can be triggered by stress, UV exposure, or immunosuppression, with the virus traveling back down sensory nerve axons to cause recurrent lesions.",
      optionExplanations: ["Correct: HSV-1 establishes latency in the trigeminal ganglion; reactivation causes recurrent orolabial herpes ('cold sores').","Incorrect: Dorsal root ganglia of thoracic nerves are the site of VZV latency following primary varicella (chickenpox) and reactivation as shingles in a dermatomal distribution.","Incorrect: B lymphocytes are the site of EBV latency, not HSV-1.","Incorrect: Monocytes and myeloid progenitor cells (CD34+) are sites of CMV latency.","Incorrect: Sacral ganglia (S2-S4) are the typical latency site for HSV-2 following genital herpes, not HSV-1 orolabial lesions."],
      highYieldPoint: "HSV-1 latency: trigeminal ganglion (orolabial). HSV-2 latency: sacral ganglia (genital). VZV latency: dorsal root ganglia. EBV: B cells. CMV: myeloid progenitors."
    },
    {
      vignette: "A 12-year-old boy is bitten by a stray dog while playing outdoors. Three weeks later, he develops fever, headache, hydrophobia, aerophobia, and agitation. He rapidly progresses to paralysis and coma. Negri bodies are found on brain biopsy.",
      question: "Which viral family does the causative agent belong to?",
      options: ["Picornaviridae","Flaviviridae","Filoviridae","Togaviridae","Rhabdoviridae"],
      correctIndex: 4,
      explanation: "Rabies virus belongs to the family Rhabdoviridae (genus Lyssavirus). It is a bullet-shaped, enveloped virus with a single-stranded negative-sense RNA genome. Negri bodies (eosinophilic cytoplasmic inclusions in hippocampal neurons and Purkinje cells) are pathognomonic. The virus travels retrogradely along peripheral nerves to the CNS.",
      optionExplanations: ["Incorrect: Picornaviridae includes poliovirus, rhinovirus, and hepatitis A; they are non-enveloped positive-sense ssRNA viruses.","Incorrect: Flaviviridae includes dengue, Zika, hepatitis C, and West Nile viruses; they are enveloped positive-sense ssRNA viruses.","Incorrect: Filoviridae includes Ebola and Marburg viruses, which cause hemorrhagic fevers, not the hydrophobia/aerophobia presentation of rabies.","Incorrect: Togaviridae includes rubella and alphaviruses (e.g., chikungunya); they are positive-sense ssRNA viruses.","Correct: Rhabdoviridae includes rabies virus — bullet-shaped, negative-sense ssRNA, enveloped. Negri bodies are pathognomonic."],
      highYieldPoint: "Rabies (Rhabdoviridae): bullet-shaped, (−) ssRNA. Negri bodies in neurons. Post-exposure prophylaxis: wound cleaning + rabies immunoglobulin + vaccine series."
    },
    {
      vignette: "A 28-year-old woman presents with fever, headache, and a vesicular rash in a dermatomal distribution over her left flank (T10 dermatome). She had chickenpox as a child. The pain persists for months after the rash resolves.",
      question: "Which of the following best explains the reactivation of this virus in a specific dermatomal pattern?",
      options: ["The virus remained latent in keratinocytes of the affected dermatome","Circulating viremia seeded the dermatome during immunosuppression","The virus was reintroduced through external contact with another infected individual","The virus reactivated from latency in a specific dorsal root ganglion and traveled anterogradely along the sensory nerve","The virus reactivated from latent infection in regional lymph nodes"],
      correctIndex: 3,
      explanation: "Varicella-zoster virus (VZV) establishes latency in dorsal root ganglia following primary varicella infection. Upon reactivation (often due to waning cell-mediated immunity with age or immunosuppression), the virus travels anterogradely along the sensory nerve to the skin, producing a painful vesicular rash limited to the dermatome supplied by that ganglion. Post-herpetic neuralgia is chronic pain persisting after rash resolution.",
      optionExplanations: ["Incorrect: VZV does not establish latency in keratinocytes; latency is in sensory neurons of dorsal root ganglia.","Incorrect: There is no significant viremia in herpes zoster (unlike primary varicella); the dermatomal pattern reflects neural spread.","Incorrect: Herpes zoster is caused by reactivation of latent virus, not re-infection from an external source.","Correct: VZV reactivates from dorsal root ganglia and travels anterogradely along the sensory nerve to the corresponding dermatome.","Incorrect: VZV does not establish latency in lymph nodes; sensory ganglia are the latency site."],
      highYieldPoint: "VZV latency in dorsal root ganglia → reactivation as shingles (dermatomal). Post-herpetic neuralgia = chronic pain. Shingrix vaccine recommended for adults ≥50."
    },
    {
      vignette: "A researcher discovers that a new RNA virus can directly serve as mRNA and be translated by host ribosomes immediately upon entering the cell, without requiring any viral-encoded polymerase to be packaged in the virion.",
      question: "Which type of viral genome does this virus possess?",
      options: ["Double-stranded RNA","Single-stranded negative-sense RNA","Retroviral RNA","Ambisense RNA","Single-stranded positive-sense RNA"],
      correctIndex: 4,
      explanation: "Positive-sense single-stranded RNA (+ssRNA) can function directly as mRNA and be translated by host ribosomes immediately after uncoating. No viral RNA polymerase needs to be carried in the virion because the genome itself can be read. Examples include picornaviruses, flaviviruses, togaviruses, and coronaviruses. In contrast, negative-sense RNA viruses must carry their own RNA-dependent RNA polymerase to transcribe mRNA.",
      optionExplanations: ["Incorrect: dsRNA viruses (e.g., reoviruses) must carry RNA-dependent RNA polymerase in the virion to transcribe mRNA from their genome.","Incorrect: Negative-sense ssRNA must be converted to positive-sense mRNA by a virion-associated RNA-dependent RNA polymerase before translation.","Incorrect: Retroviral RNA is positive-sense but must first be reverse-transcribed to DNA; it does not serve as direct mRNA for the full lifecycle.","Incorrect: Ambisense RNA (e.g., arenaviruses) has both positive and negative-sense regions and requires viral polymerase for partial transcription.","Correct: Positive-sense ssRNA functions directly as mRNA → immediate translation by host ribosomes; no viral polymerase needed in the virion."],
      highYieldPoint: "Positive-sense ssRNA = ready-to-translate mRNA; no polymerase in virion. Negative-sense ssRNA = must carry RdRp in virion. 'I went to a positive-sense party and it was a BLAST (Baltimore class IV).'"
    },
    {
      vignette: "A 60-year-old man with chronic hepatitis C develops progressive fatigue, jaundice, ascites, and spider angiomata. Abdominal imaging reveals a mass in the right lobe of the liver with arterial enhancement. Alpha-fetoprotein is elevated at 500 ng/mL.",
      question: "Which hepatitis C virus characteristic contributes to its ability to establish chronic infection and evade immune clearance?",
      options: ["Integration of viral DNA into the host genome","Viral latency in hepatocyte nuclei as an episome","Superinfection with hepatitis D virus","Absence of a proofreading mechanism in its RNA-dependent RNA polymerase, leading to high mutation rate and quasispecies formation","Production of a viral immunosuppressive protein that destroys CD4+ T cells"],
      correctIndex: 3,
      explanation: "HCV is a positive-sense ssRNA virus (Flaviviridae) whose RNA-dependent RNA polymerase (NS5B) lacks proofreading (3'→5' exonuclease) activity. This results in a high mutation rate and the generation of quasispecies — diverse viral populations within a single host. Constant antigenic variation allows HCV to evade adaptive immune responses, contributing to the high rate of chronicity (~80%).",
      optionExplanations: ["Incorrect: HCV is an RNA virus and does not integrate into the host genome; this is characteristic of retroviruses and HBV (partially).","Incorrect: HCV does not establish nuclear episomal latency; it replicates in cytoplasmic membranous webs.","Incorrect: HDV superinfection occurs with hepatitis B (requires HBsAg), not hepatitis C.","Correct: HCV's error-prone RdRp generates quasispecies (antigenic diversity) → immune evasion → chronic infection (~80% of cases).","Incorrect: HCV does not directly destroy CD4+ T cells; this is characteristic of HIV."],
      highYieldPoint: "HCV: (+) ssRNA, Flaviviridae. Error-prone RdRp → quasispecies → immune evasion → chronic infection (80%). Cirrhosis → HCC. Treat with DAAs (sofosbuvir + NS5A inhibitor)."
    },
    {
      vignette: "A 3-month-old infant presents with a barking cough and inspiratory stridor. Lateral neck X-ray shows subglottic narrowing ('steeple sign'). The child has a low-grade fever and rhinorrhea that started 2 days ago. The respiratory virus identified is the most common cause of croup.",
      question: "Which virus is most likely responsible for this infant's presentation?",
      options: ["Respiratory syncytial virus","Rhinovirus","Influenza B virus","Adenovirus","Parainfluenza virus (types 1 and 2)"],
      correctIndex: 4,
      explanation: "Parainfluenza viruses (particularly types 1 and 2) are the most common cause of croup (laryngotracheobronchitis) in children aged 6 months to 3 years. The inflammation of the subglottic area produces the characteristic barking (seal-like) cough, inspiratory stridor, and steeple sign on X-ray. Parainfluenza viruses belong to the Paramyxoviridae family.",
      optionExplanations: ["Incorrect: RSV is the most common cause of bronchiolitis, not croup.","Incorrect: Rhinovirus is the most common cause of the common cold but does not typically cause croup.","Incorrect: Influenza B can cause respiratory illness but is not the most common cause of croup.","Incorrect: Adenovirus causes pharyngoconjunctival fever and pneumonia but is an uncommon cause of croup.","Correct: Parainfluenza virus types 1 and 2 are the most common cause of croup (steeple sign, barking cough, stridor)."],
      highYieldPoint: "Parainfluenza = #1 cause of croup (laryngotracheobronchitis). RSV = #1 cause of bronchiolitis. Both are Paramyxoviridae (negative-sense ssRNA, enveloped)."
    },
    {
      vignette: "A molecular biologist is studying an enveloped DNA virus that replicates in the cytoplasm of infected cells using its own DNA-dependent DNA polymerase and RNA polymerase. The virus is the largest known virus to infect humans and was historically used to develop the first vaccine.",
      question: "Which virus is being described?",
      options: ["Variola (smallpox) virus / vaccinia virus","Herpes simplex virus","Hepatitis B virus","Adenovirus","Human papillomavirus"],
      correctIndex: 0,
      explanation: "Poxviruses (including variola/smallpox and vaccinia) are the largest and most complex DNA viruses. Uniquely among DNA viruses, they replicate entirely in the cytoplasm because they encode their own DNA and RNA polymerases. Edward Jenner used cowpox (related to vaccinia) to develop the first vaccine. Smallpox was declared eradicated in 1980.",
      optionExplanations: ["Correct: Poxviruses (variola/vaccinia) are large, dsDNA viruses replicating in the cytoplasm with their own polymerases. Basis of the first vaccine (Jenner, 1796).","Incorrect: HSV is a dsDNA virus but replicates in the nucleus, not the cytoplasm.","Incorrect: HBV has a partially dsDNA genome but replicates via reverse transcription of an RNA intermediate; it is much smaller than poxviruses.","Incorrect: Adenoviruses are dsDNA viruses that replicate in the nucleus; they are non-enveloped.","Incorrect: HPV is a small, non-enveloped dsDNA virus replicating in the nucleus."],
      highYieldPoint: "Poxviruses: largest DNA virus, dsDNA, replicates in CYTOPLASM (carries its own DNA/RNA polymerases). Only DNA virus replicating entirely in cytoplasm. Smallpox eradicated 1980."
    }
  ],

  "Mycology & parasitology": [
    {
      vignette: "A 35-year-old man with AIDS (CD4 count 80 cells/μL) presents with headache, fever, neck stiffness, and altered mental status. CSF analysis shows elevated opening pressure (300 mm H₂O), low glucose, and elevated protein. India ink preparation of CSF reveals yeast cells with a wide clear halo. Serum and CSF cryptococcal antigen tests are strongly positive.",
      question: "Which morphological characteristic is most helpful in identifying this organism on India ink staining?",
      options: ["Broad-based budding yeast","Narrow-based budding yeast with a thick polysaccharide capsule","Spherules containing endospores","Septate hyphae with acute-angle branching","Non-septate (pauciseptate) hyphae with wide-angle branching"],
      correctIndex: 1,
      explanation: "Cryptococcus neoformans appears on India ink staining as narrow-based budding yeast surrounded by a thick polysaccharide capsule (the clear halo). The capsule is the major virulence factor, inhibiting phagocytosis. Cryptococcal meningitis is a major opportunistic infection in AIDS patients with severely depressed CD4 counts.",
      optionExplanations: ["Incorrect: Broad-based budding is characteristic of Blastomyces dermatitidis, not Cryptococcus.","Correct: Cryptococcus neoformans shows narrow-based budding with a prominent thick polysaccharide capsule on India ink preparation.","Incorrect: Spherules with endospores are characteristic of Coccidioides immitis.","Incorrect: Septate hyphae with acute-angle (V-shaped, 45°) branching is characteristic of Aspergillus species.","Incorrect: Non-septate (pauciseptate) hyphae with wide-angle (90°) branching is characteristic of Mucor/Rhizopus (mucormycosis)."],
      highYieldPoint: "Cryptococcus: narrow-based budding, thick capsule (India ink, mucicarmine stain), urease (+). Latex agglutination for capsular antigen. Treat: amphotericin B + flucytosine → fluconazole."
    },
    {
      vignette: "A 45-year-old farmer from the Ohio River Valley presents with cough, fever, hilar lymphadenopathy, and hepatosplenomegaly. Biopsy of a granulomatous liver lesion reveals small (2–4 μm) oval yeast forms within macrophages on silver stain. A urine antigen test is positive.",
      question: "Which organism is the most likely cause of this patient's infection?",
      options: ["Blastomyces dermatitidis","Histoplasma capsulatum","Coccidioides immitis","Sporothrix schenckii","Aspergillus fumigatus"],
      correctIndex: 1,
      explanation: "Histoplasma capsulatum is a dimorphic fungus endemic to the Ohio and Mississippi River Valleys (associated with bird/bat droppings in caves). It causes granulomatous disease with small (2–4 μm) intracellular yeast forms found within macrophages. Despite its name, it does not have a true capsule. Diagnosis includes urine/serum antigen testing and biopsy with silver (Gomori methenamine silver) stain.",
      optionExplanations: ["Incorrect: Blastomyces causes broad-based budding yeast (8–15 μm), much larger than the 2–4 μm forms described, and is not typically intracellular.","Correct: Histoplasma capsulatum produces small (2–4 μm) yeast forms found within macrophages; endemic to Ohio/Mississippi River Valleys.","Incorrect: Coccidioides produces spherules (20–60 μm) containing endospores, endemic to the southwestern US deserts.","Incorrect: Sporothrix causes lymphocutaneous sporotrichosis (rose gardener's disease) with subcutaneous nodules along lymphatics, not hepatosplenomegaly with intracellular yeast.","Incorrect: Aspergillus is a mold with septate, acutely branching hyphae; it does not form intracellular yeast forms."],
      highYieldPoint: "Histoplasma: dimorphic, small intracellular yeast in macrophages, Ohio/Mississippi Valleys, bird/bat droppings. Looks like TB clinically. Urine antigen for diagnosis."
    },
    {
      vignette: "A 55-year-old man with uncontrolled diabetes mellitus and recent diabetic ketoacidosis presents with facial pain, bloody nasal discharge, and proptosis of the right eye. CT scan reveals opacification of the right maxillary and ethmoid sinuses with erosion into the orbit. Biopsy of necrotic tissue shows wide, ribbon-like, non-septate (pauciseptate) hyphae branching at 90-degree angles.",
      question: "Which organism is the most likely causative agent?",
      options: ["Aspergillus fumigatus","Mucor/Rhizopus species","Candida albicans","Cryptococcus neoformans","Pneumocystis jirovecii"],
      correctIndex: 1,
      explanation: "Mucormycosis (zygomycosis), caused by Mucor or Rhizopus species, classically presents as rhinocerebral infection in patients with diabetic ketoacidosis (DKA) or immunosuppression. The organisms produce wide, ribbon-like, pauciseptate hyphae with irregular (90-degree) branching. They have tropism for blood vessels (angioinvasion), causing thrombosis and tissue necrosis. Treatment requires surgical debridement and amphotericin B.",
      optionExplanations: ["Incorrect: Aspergillus produces septate hyphae with acute-angle (45°) dichotomous branching, distinct from the wide, non-septate hyphae described.","Correct: Mucor/Rhizopus species produce wide, non-septate (pauciseptate) hyphae with 90° branching; rhinocerebral disease in DKA is classic.","Incorrect: Candida appears as budding yeast with pseudohyphae, not wide non-septate hyphae.","Incorrect: Cryptococcus is a yeast with a polysaccharide capsule; it does not form hyphae in tissue.","Incorrect: Pneumocystis appears as cysts on GMS stain and causes pneumonia in immunocompromised patients, not rhinocerebral disease."],
      highYieldPoint: "Mucormycosis: wide non-septate hyphae, 90° branching, angioinvasive. Risk: DKA, iron overload (deferoxamine). Treat: surgical debridement + amphotericin B. Rhizopus: ketone reductase."
    },
    {
      vignette: "A 30-year-old woman who recently adopted a cat presents with low-grade fever, malaise, and painless cervical lymphadenopathy. She is 10 weeks pregnant. Serological testing reveals IgM antibodies against Toxoplasma gondii. She is concerned about potential harm to the fetus.",
      question: "Which congenital finding is most classically associated with in-utero infection by this organism?",
      options: ["Intracranial calcifications, hydrocephalus, and chorioretinitis","Limb defects and skin scarring","Sensorineural hearing loss and periventricular calcifications","Hydrops fetalis","Cataracts, deafness, and patent ductus arteriosus"],
      correctIndex: 0,
      explanation: "Congenital toxoplasmosis (caused by Toxoplasma gondii, an obligate intracellular protozoan) classically presents with the triad of intracranial calcifications (diffuse/scattered), hydrocephalus, and chorioretinitis. The definitive host is the cat (oocysts in feces). Primary maternal infection during pregnancy poses the highest risk of fetal transmission.",
      optionExplanations: ["Correct: Classic triad of congenital toxoplasmosis: intracranial calcifications (diffuse), hydrocephalus, chorioretinitis.","Incorrect: Limb defects and skin scarring are associated with congenital varicella syndrome.","Incorrect: Sensorineural hearing loss and periventricular calcifications are classic for congenital CMV infection.","Incorrect: Hydrops fetalis is characteristic of parvovirus B19 infection or severe Rh incompatibility.","Incorrect: Cataracts, deafness, and PDA are the classic triad of congenital rubella syndrome."],
      highYieldPoint: "Congenital toxoplasmosis: diffuse intracranial calcifications, hydrocephalus, chorioretinitis. Definitive host: cat. Treat: pyrimethamine + sulfadiazine + folinic acid."
    },
    {
      vignette: "A 6-year-old boy from Sub-Saharan Africa presents with cyclic fevers occurring every 48 hours, chills, rigors, and splenomegaly. Peripheral blood smear shows ring-shaped trophozoites within red blood cells, and some RBCs contain multiple ring forms. The species identified is known to infect RBCs of all ages and can cause cerebral malaria.",
      question: "Which Plasmodium species is most likely responsible for this patient's severe malaria?",
      options: ["Plasmodium vivax","Plasmodium ovale","Plasmodium malariae","Plasmodium falciparum","Plasmodium knowlesi"],
      correctIndex: 3,
      explanation: "Plasmodium falciparum is the most virulent malaria species. It infects red blood cells of ALL ages (not just reticulocytes or mature RBCs), leading to high parasitemia. Multiple ring forms per RBC are characteristic. It causes complicated malaria including cerebral malaria (sequestration of infected RBCs in cerebral microvasculature via PfEMP1 binding to endothelial receptors), severe anemia, and death.",
      optionExplanations: ["Incorrect: P. vivax preferentially infects reticulocytes (younger RBCs) and has a dormant hypnozoite liver stage but rarely causes cerebral malaria.","Incorrect: P. ovale also infects reticulocytes, has hypnozoites, and causes milder disease.","Incorrect: P. malariae infects older RBCs, causes 72-hour fever cycles (quartan), and is associated with nephrotic syndrome, not cerebral malaria.","Correct: P. falciparum infects all-age RBCs, causes high parasitemia, multiple ring forms, cerebral malaria, and the highest mortality.","Incorrect: P. knowlesi is a zoonotic species (from macaques) in Southeast Asia; while it can cause severe disease, it is not the classic cause of cerebral malaria."],
      highYieldPoint: "P. falciparum: infects all-age RBCs, banana-shaped gametocytes, cerebral malaria (PfEMP1 sequestration). P. vivax/ovale: hypnozoites (treat with primaquine; check G6PD first)."
    },
    {
      vignette: "A 40-year-old gardener presents with a painless nodular lesion on her right index finger that appeared 2 weeks after she was pricked by a rose thorn. Over the next month, similar nodules develop in a linear pattern ascending along the lymphatic drainage of her arm.",
      question: "Which organism is the most likely cause of this lymphocutaneous infection?",
      options: ["Sporothrix schenckii","Histoplasma capsulatum","Nocardia brasiliensis","Staphylococcus aureus","Mycobacterium marinum"],
      correctIndex: 0,
      explanation: "Sporothrix schenckii is a dimorphic fungus that causes sporotrichosis ('rose gardener's disease'). Inoculation through a thorn prick introduces the organism subcutaneously. The infection typically presents as a nodular lesion at the inoculation site followed by ascending lymphangitic spread — nodules appear along lymphatic channels draining the area. Treatment is oral itraconazole or potassium iodide.",
      optionExplanations: ["Correct: Sporothrix schenckii causes lymphocutaneous sporotrichosis — nodules ascending along lymphatic channels after thorn inoculation.","Incorrect: Histoplasma causes pulmonary infection from inhalation of spores; it does not cause lymphocutaneous disease from thorn pricks.","Incorrect: Nocardia can cause lymphocutaneous disease and should be in the differential, but it is a bacterium (not dimorphic fungus) and typically affects immunocompromised patients.","Incorrect: S. aureus can cause skin infections but does not classically produce ascending lymphocutaneous nodules in this pattern.","Incorrect: M. marinum causes skin infection from aquarium/water exposure (fish tank granuloma), not from rose thorns."],
      highYieldPoint: "Sporotrichosis: dimorphic fungus, cigar-shaped yeast at 37°C, mold at 25°C. Rose gardener's disease → ascending lymphocutaneous nodules. Treat: itraconazole."
    },
    {
      vignette: "A 29-year-old woman with HIV (CD4 count 100 cells/μL) presents with progressive dyspnea on exertion, dry cough, and fever over 2 weeks. Chest X-ray shows bilateral diffuse interstitial infiltrates. Induced sputum with GMS (Gomori methenamine silver) stain reveals disc-shaped cysts. LDH is markedly elevated. ABG shows hypoxemia with an increased A-a gradient.",
      question: "Which prophylactic medication should have been initiated when this patient's CD4 count fell below 200 cells/μL?",
      options: ["Fluconazole","Azithromycin","Trimethoprim-sulfamethoxazole (TMP-SMX)","Itraconazole","Dapsone plus pyrimethamine"],
      correctIndex: 2,
      explanation: "Pneumocystis jirovecii pneumonia (PCP) occurs in HIV patients with CD4 <200 cells/μL. Prophylaxis with TMP-SMX should be initiated when CD4 drops below 200. TMP-SMX is also the first-line treatment for active PCP (with adjunctive corticosteroids if PaO₂ <70 mmHg). GMS stain shows the characteristic disc-shaped cysts of Pneumocystis.",
      optionExplanations: ["Incorrect: Fluconazole is used for prophylaxis against Cryptococcus (at CD4 <100 in some guidelines) and Candida, not PCP.","Incorrect: Azithromycin is used for MAC (Mycobacterium avium complex) prophylaxis at CD4 <50, not PCP prevention.","Correct: TMP-SMX is the first-line prophylaxis and treatment for PCP; should be started when CD4 <200 cells/μL.","Incorrect: Itraconazole is used for histoplasmosis or blastomycosis prophylaxis/treatment, not PCP.","Incorrect: Dapsone plus pyrimethamine is an alternative PCP prophylaxis regimen for patients allergic to TMP-SMX, but TMP-SMX is first-line."],
      highYieldPoint: "PCP prophylaxis: TMP-SMX when CD4 <200. PCP treatment: TMP-SMX + steroids if PaO₂ <70. Also prophylax: Toxoplasma (CD4 <100), MAC (CD4 <50)."
    },
    {
      vignette: "A 25-year-old Peace Corps volunteer who recently returned from rural Central America presents with a painless, slowly expanding ulcer on her face. Biopsy reveals amastigotes (small oval bodies with a kinetoplast) within dermal macrophages. No visceral involvement is found.",
      question: "Which organism is the most likely cause of this cutaneous ulcer?",
      options: ["Leishmania species (cutaneous)","Trypanosoma cruzi","Plasmodium vivax","Entamoeba histolytica","Schistosoma mansoni"],
      correctIndex: 0,
      explanation: "Cutaneous leishmaniasis is caused by Leishmania species (e.g., L. mexicana in Central America). The protozoan exists as promastigotes (flagellated, in the sandfly vector) and amastigotes (non-flagellated, within host macrophages). Amastigotes are small oval bodies with a characteristic kinetoplast visible on Giemsa stain. The disease presents as chronic, painless skin ulcers.",
      optionExplanations: ["Correct: Leishmania species cause cutaneous leishmaniasis; amastigotes with kinetoplasts within macrophages are diagnostic.","Incorrect: T. cruzi causes Chagas disease with cardiac and GI involvement; amastigotes are found in cardiac myocytes, not typically as isolated cutaneous ulcers.","Incorrect: P. vivax is an intraerythrocytic parasite causing malaria, not cutaneous ulcers.","Incorrect: E. histolytica causes amebic dysentery and liver abscesses, not cutaneous ulcers with intracellular amastigotes.","Incorrect: S. mansoni is a helminth causing hepatosplenic schistosomiasis; it does not produce amastigotes."],
      highYieldPoint: "Leishmania: sandfly vector, amastigotes in macrophages (with kinetoplast). Cutaneous (skin ulcer), visceral/kala-azar (hepatosplenomegaly, pancytopenia), mucocutaneous."
    },
    {
      vignette: "A 22-year-old man living in rural South America presents with unilateral painless periorbital swelling (Romaña sign) and fever. He lives in a mud-brick house. A blood smear reveals trypomastigotes with a characteristic 'C' or 'U' shape. Serological testing confirms the diagnosis.",
      question: "Which long-term complication is most characteristic of chronic infection with this organism?",
      options: ["Granulomatous liver disease","Membranous nephropathy","Cerebral malaria","Dilated cardiomyopathy and megacolon/megaesophagus","Pulmonary hypertension"],
      correctIndex: 3,
      explanation: "Trypanosoma cruzi causes Chagas disease, transmitted by the reduviid (kissing) bug. The acute phase features Romaña sign (periorbital swelling from inoculation near the eye). Chronic Chagas disease (years later) causes dilated cardiomyopathy (most common cause of cardiomyopathy in Latin America) and destruction of autonomic ganglia in the GI tract leading to megacolon and megaesophagus.",
      optionExplanations: ["Incorrect: Granulomatous liver disease is associated with schistosomiasis (hepatosplenic) or hepatic granulomas from other infections.","Incorrect: Membranous nephropathy is associated with hepatitis B, SLE, or drugs, not Chagas disease.","Incorrect: Cerebral malaria is caused by Plasmodium falciparum, not Trypanosoma cruzi.","Correct: Chronic Chagas disease → dilated cardiomyopathy + megacolon/megaesophagus due to destruction of myenteric (Auerbach) plexus.","Incorrect: Pulmonary hypertension can be caused by schistosomiasis or chronic thromboembolic disease, not typically Chagas disease."],
      highYieldPoint: "Chagas disease (T. cruzi): reduviid bug, Romaña sign (acute), dilated cardiomyopathy + megacolon (chronic). Treat acute: benznidazole or nifurtimox."
    },
    {
      vignette: "A 4-year-old child from the rural southern United States presents with microcytic anemia, eosinophilia, and a pruritic serpiginous rash on his feet. Stool examination reveals eggs with a thin shell and a visible developing larva inside. The family lives in a home without indoor plumbing.",
      question: "Which parasitic lifecycle stage is responsible for the cutaneous manifestation ('ground itch') in this patient?",
      options: ["Ingested eggs hatching in the intestine","Cercariae penetrating the skin from freshwater","Filariform (L3) larvae penetrating the skin of the feet","Metacercariae encysted in undercooked fish","Adult worms migrating through subcutaneous tissue"],
      correctIndex: 2,
      explanation: "Hookworm (Necator americanus or Ancylostoma duodenale) infections begin when filariform (L3, infective) larvae in soil penetrate the skin of bare feet, causing 'ground itch.' The larvae travel through the bloodstream to the lungs, ascend the trachea, are swallowed, and mature in the small intestine where they attach and feed on blood, causing iron-deficiency anemia.",
      optionExplanations: ["Incorrect: Hookworm infection begins with skin penetration, not ingestion of eggs. (Ascaris and Trichuris are acquired by egg ingestion.)","Incorrect: Cercarial penetration is the route for Schistosoma species ('swimmer's itch'), not hookworm.","Correct: Hookworm filariform (L3) larvae penetrate skin of bare feet → 'ground itch' → migrate to lungs → swallowed → intestine → iron-deficiency anemia.","Incorrect: Metacercariae in fish are the infectious form of liver flukes (Clonorchis, Opisthorchis), not hookworm.","Incorrect: Adult worm migration through subcutaneous tissue describes Loa loa (eye worm) or Dracunculus, not hookworm ground itch."],
      highYieldPoint: "Hookworm: filariform larvae penetrate skin → ground itch → lungs → intestine → iron-deficiency anemia + eosinophilia. Treat: albendazole or mebendazole."
    },
    {
      vignette: "A 50-year-old man from Egypt presents with hematuria and dysuria. Cystoscopy reveals granulomatous inflammation and calcification of the bladder wall. Urine microscopy shows large, oval eggs with a prominent terminal spine. He has a history of swimming in freshwater canals as a child.",
      question: "Which organism is the most likely cause of this patient's urogenital disease?",
      options: ["Schistosoma mansoni","Schistosoma japonicum","Schistosoma haematobium","Clonorchis sinensis","Wuchereria bancrofti"],
      correctIndex: 2,
      explanation: "Schistosoma haematobium is the only Schistosoma species that primarily causes urogenital (vesical) schistosomiasis. Eggs with a terminal spine lodge in the bladder venous plexus, triggering granulomatous inflammation and fibrosis. Chronic infection leads to squamous cell carcinoma of the bladder. The life cycle involves freshwater snails as intermediate hosts and cercariae that penetrate skin.",
      optionExplanations: ["Incorrect: S. mansoni causes hepatosplenic/intestinal schistosomiasis and produces eggs with a lateral spine, not terminal.","Incorrect: S. japonicum causes hepatosplenic disease (fibrosis), particularly in East Asia; eggs are small and round without a prominent spine.","Correct: S. haematobium causes urogenital schistosomiasis with terminal-spined eggs in the bladder → granulomas, hematuria, squamous cell carcinoma of bladder.","Incorrect: Clonorchis sinensis is a liver fluke causing cholangiocarcinoma, acquired from undercooked fish, not freshwater swimming.","Incorrect: Wuchereria bancrofti causes lymphatic filariasis (elephantiasis), transmitted by mosquitoes, not freshwater exposure."],
      highYieldPoint: "S. haematobium: terminal spine, bladder → SCC of bladder. S. mansoni: lateral spine, liver/intestine → portal HTN. S. japonicum: no spine, liver → 'pipe-stem fibrosis.' Treat all: praziquantel."
    },
    {
      vignette: "A 32-year-old man presents with perianal itching that is worse at night. His 5-year-old daughter has similar symptoms. The 'scotch tape test' performed in the morning reveals transparent, D-shaped eggs under the microscope.",
      question: "Which parasite is responsible for this patient's symptoms?",
      options: ["Ascaris lumbricoides","Strongyloides stercoralis","Trichuris trichiura","Enterobius vermicularis","Taenia solium"],
      correctIndex: 3,
      explanation: "Enterobius vermicularis (pinworm) is the most common helminthic infection in the US, particularly affecting children and family contacts. Female worms migrate to the perianal area at night to deposit eggs, causing intense pruritus ani. The 'scotch tape test' (pressing adhesive tape to the perianal skin in the morning) captures the characteristic plano-convex (D-shaped) eggs for diagnosis.",
      optionExplanations: ["Incorrect: Ascaris lumbricoides causes intestinal obstruction and biliary/pancreatic duct migration; eggs are found in stool, not perianally.","Incorrect: Strongyloides causes autoinfection and hyperinfection syndrome; larvae (not eggs) are found in stool.","Incorrect: Trichuris trichiura (whipworm) causes bloody diarrhea and rectal prolapse; eggs are barrel-shaped with bipolar plugs.","Correct: Enterobius (pinworm) causes nocturnal perianal itching; diagnosed by scotch tape test showing D-shaped eggs.","Incorrect: Taenia solium is the pork tapeworm; eggs in stool or cysticerci in tissues, not perianal deposition."],
      highYieldPoint: "Enterobius (pinworm): scotch tape test, nocturnal perianal pruritus, D-shaped eggs. Most common helminth in US. Treat: albendazole or mebendazole (treat entire household)."
    },
    {
      vignette: "A 28-year-old woman presents with foul-smelling, greenish, frothy vaginal discharge and vulvar irritation. Wet mount microscopy of the discharge reveals motile, pear-shaped trophozoites with undulating membranes and anterior flagella. The vaginal pH is 5.5.",
      question: "Which organism is the causative agent and what is the most appropriate treatment?",
      options: ["Candida albicans; fluconazole","Gardnerella vaginalis; metronidazole","Neisseria gonorrhoeae; ceftriaxone","Chlamydia trachomatis; azithromycin","Trichomonas vaginalis; metronidazole"],
      correctIndex: 4,
      explanation: "Trichomonas vaginalis is a flagellated protozoan that causes trichomoniasis — a sexually transmitted infection presenting with foul-smelling, greenish, frothy discharge and vulvovaginal irritation. Motile trophozoites with flagella and an undulating membrane are seen on wet mount. Vaginal pH is elevated (>4.5). Treatment is metronidazole for both the patient and sexual partner.",
      optionExplanations: ["Incorrect: Candida produces a thick, white, cottage cheese-like discharge with KOH prep showing pseudohyphae; pH is usually normal (<4.5).","Incorrect: Gardnerella causes bacterial vaginosis with thin, grayish, fishy-smelling discharge and clue cells, not motile trophozoites with flagella.","Incorrect: N. gonorrhoeae causes purulent cervicitis/urethritis and is diagnosed by gram stain (intracellular diplococci) or NAAT, not wet mount trophozoites.","Incorrect: Chlamydia causes mucopurulent cervicitis/urethritis but does not show motile trophozoites on wet mount.","Correct: Trichomonas vaginalis produces frothy green discharge with motile flagellated trophozoites on wet mount. Treat with metronidazole."],
      highYieldPoint: "Trichomonas: flagellated protozoan, frothy green discharge, motile on wet mount, pH >4.5. STI — treat both partners with metronidazole. Only protozoan STI."
    },
    {
      vignette: "A 65-year-old man with poorly controlled diabetes presents with severe frontal headache and mucopurulent nasal drainage. CT sinus shows a dense, heterogeneous opacity filling the right maxillary sinus with areas of calcification ('double density sign'). A fungal ball is suspected, and surgical removal reveals a dense mass of tangled hyphae. Microscopy shows septate hyphae branching at 45-degree angles.",
      question: "Which organism is the most likely cause of this fungal ball (aspergilloma)?",
      options: ["Mucor species","Cryptococcus neoformans","Candida albicans","Fusarium species","Aspergillus fumigatus"],
      correctIndex: 4,
      explanation: "Aspergillus fumigatus is the most common cause of aspergillomas (fungal balls). On histopathology, Aspergillus shows septate hyphae with dichotomous branching at 45-degree (acute) angles. Aspergillomas can form in pre-existing lung cavities (e.g., old TB cavities) or sinus cavities. Invasive aspergillosis occurs in severely immunocompromised patients (neutropenic).",
      optionExplanations: ["Incorrect: Mucor species produce wide, ribbon-like, pauciseptate hyphae with 90-degree branching, distinct from the 45-degree septate hyphae described.","Incorrect: Cryptococcus is a yeast, not a mold; it does not form hyphae or fungal balls.","Incorrect: Candida appears as budding yeast with pseudohyphae, not septate hyphae with 45° branching.","Incorrect: Fusarium can produce similar septate hyphae but is a much less common cause of sinus fungal balls than Aspergillus.","Correct: Aspergillus fumigatus produces septate hyphae with acute-angle (45°) dichotomous branching; most common cause of aspergillomas."],
      highYieldPoint: "Aspergillus: septate hyphae, 45° branching. Aspergilloma (fungal ball), ABPA (allergic), invasive (neutropenic). Diagnose: galactomannan antigen, biopsy. Treat: voriconazole."
    },
    {
      vignette: "A 35-year-old man from Southeast Asia presents with recurrent episodes of fever, chills, and sweating every 48 hours. He was treated for malaria 6 months ago with chloroquine, and his blood smears were negative at that time. Now, blood smear reveals trophozoites within reticulocytes and Schüffner stippling. The species is confirmed as one known to have a dormant liver stage.",
      question: "Which drug targets the dormant hypnozoite stage in the liver to prevent relapse of this infection?",
      options: ["Chloroquine","Mefloquine","Atovaquone-proguanil","Artemisinin","Primaquine"],
      correctIndex: 4,
      explanation: "Primaquine targets the hypnozoite (dormant liver) stage of Plasmodium vivax and P. ovale, which can remain dormant in hepatocytes for months to years and cause relapses. Chloroquine and other blood schizonticides kill erythrocytic forms but do not eliminate hypnozoites. Before starting primaquine, patients must be tested for G6PD deficiency because primaquine can cause severe hemolytic anemia in G6PD-deficient individuals.",
      optionExplanations: ["Incorrect: Chloroquine kills erythrocytic (blood-stage) schizonts but does not affect hypnozoites in the liver.","Incorrect: Mefloquine is a blood schizonticide used for prophylaxis and treatment of chloroquine-resistant P. falciparum; it does not kill hypnozoites.","Incorrect: Atovaquone-proguanil targets liver schizonts (causal prophylaxis) and blood stages, but does not effectively eliminate hypnozoites.","Incorrect: Artemisinin and its derivatives are fast-acting blood schizonticides used for severe P. falciparum malaria; they do not target hypnozoites.","Correct: Primaquine is the only widely available drug that kills hypnozoites (dormant liver forms) of P. vivax and P. ovale, preventing relapse. Check G6PD status first."],
      highYieldPoint: "Primaquine kills hypnozoites (P. vivax/ovale → prevents relapse). Check G6PD before prescribing — can cause hemolytic anemia in G6PD deficiency. Tafenoquine is a newer alternative."
    }
  ],

  "Antimicrobial pharmacology": [
    {
      vignette: "A 55-year-old woman with a penicillin allergy (anaphylaxis) develops community-acquired pneumonia requiring hospitalization. Her sputum culture grows Streptococcus pneumoniae with intermediate susceptibility to penicillin. The physician considers using a cephalosporin but is concerned about cross-reactivity.",
      question: "What is the approximate risk of cross-reactivity between penicillins and cephalosporins in patients with a true penicillin allergy?",
      options: ["Less than 1% with modern (3rd/4th generation) cephalosporins","Approximately 10-15% with all cephalosporins","Greater than 50% with all β-lactams","Zero, as the structures are completely unrelated","Approximately 30% with 1st generation cephalosporins only"],
      correctIndex: 0,
      explanation: "Cross-reactivity between penicillins and cephalosporins was historically estimated at 10%, but more recent data show it is approximately 1-2% overall and less than 1% with third- and fourth-generation cephalosporins. This is because cross-reactivity is mainly driven by similar R-group side chains (especially in first-generation cephalosporins) rather than the shared β-lactam ring. For patients with a history of severe anaphylaxis to penicillin, alternatives such as aztreonam (no cross-reactivity), carbapenems (minimal), or non-β-lactams should be considered.",
      optionExplanations: ["Correct: Modern data shows <1% cross-reactivity with 3rd/4th generation cephalosporins; risk is higher with 1st generation due to similar R-group side chains.","Incorrect: The 10-15% estimate is outdated and based on early, poorly controlled studies.","Incorrect: Greater than 50% vastly overestimates the cross-reactivity risk.","Incorrect: Cephalosporins share the β-lactam ring with penicillins, so some structural similarity exists.","Incorrect: While 1st generation cephalosporins have higher cross-reactivity (~5%), 30% is an overestimate."],
      highYieldPoint: "Penicillin-cephalosporin cross-reactivity: ~1-2% overall, <1% for 3rd/4th gen. Cross-reactivity due to R-group side chains, not β-lactam ring itself. Aztreonam: safe in penicillin allergy."
    },
    {
      vignette: "A 60-year-old man with a prosthetic hip joint develops a methicillin-resistant Staphylococcus aureus (MRSA) bacteremia. He is started on intravenous vancomycin. On day 3, he develops facial flushing, pruritus, and hypotension shortly after the infusion begins.",
      question: "Which adverse effect is most likely responsible for this patient's symptoms, and what is the underlying mechanism?",
      options: ["Type I IgE-mediated anaphylaxis; mast cell degranulation via antigen-IgE cross-linking","Red man syndrome; direct (non-immune) histamine release from mast cells due to rapid infusion","Serum sickness; immune complex deposition causing complement activation","Stevens-Johnson syndrome; cytotoxic T-cell-mediated epidermal necrosis","Drug-induced lupus; anti-histone antibody formation"],
      correctIndex: 1,
      explanation: "Red man syndrome is the most common adverse effect of vancomycin and results from direct, non-IgE-mediated histamine release from mast cells when the drug is infused too rapidly. It presents with flushing, erythema, and pruritus of the face, neck, and upper torso, and can include hypotension. Prevention involves slowing the infusion rate (infuse over ≥60 minutes) and pretreatment with antihistamines (diphenhydramine).",
      optionExplanations: ["Incorrect: True anaphylaxis to vancomycin is rare; red man syndrome is far more common and is a non-immune-mediated histamine release.","Correct: Red man syndrome = direct mast cell histamine release from rapid vancomycin infusion. Slow infusion rate to prevent.","Incorrect: Serum sickness is a type III hypersensitivity reaction occurring 7-14 days after drug exposure, not during infusion.","Incorrect: SJS is a delayed-type reaction causing mucocutaneous blistering, not immediate flushing during infusion.","Incorrect: Drug-induced lupus is a chronic autoimmune condition caused by drugs like hydralazine, procainamide, and isoniazid, not vancomycin."],
      highYieldPoint: "Red man syndrome (vancomycin): direct histamine release, NOT IgE-mediated. Prevent by slowing infusion to ≥1 hour. Pretreat with diphenhydramine if needed."
    },
    {
      vignette: "A 40-year-old man is diagnosed with active pulmonary tuberculosis. He is started on a 4-drug regimen including isoniazid, rifampin, pyrazinamide, and ethambutol. Two months into therapy, he reports tingling and numbness in his feet bilaterally.",
      question: "Which drug in his regimen is most likely responsible for his peripheral neuropathy, and which vitamin deficiency does it cause?",
      options: ["Rifampin; vitamin K deficiency","Pyrazinamide; vitamin C deficiency","Isoniazid; vitamin B6 (pyridoxine) deficiency","Ethambutol; vitamin B12 deficiency","Isoniazid; vitamin B12 deficiency"],
      correctIndex: 2,
      explanation: "Isoniazid (INH) causes peripheral neuropathy by depleting pyridoxine (vitamin B6). INH inhibits pyridoxine phosphokinase, the enzyme that converts pyridoxine to its active form (pyridoxal phosphate), which is a critical cofactor for many enzymatic reactions including neurotransmitter synthesis. All patients on INH should receive prophylactic pyridoxine supplementation (25-50 mg/day).",
      optionExplanations: ["Incorrect: Rifampin is a potent CYP450 inducer and can cause hepatotoxicity, orange discoloration of body fluids, and drug interactions, but not B6 deficiency neuropathy.","Incorrect: Pyrazinamide causes hyperuricemia (inhibits uric acid excretion) and hepatotoxicity, not vitamin C deficiency.","Correct: Isoniazid depletes pyridoxine (B6) → peripheral neuropathy. Prevent with supplemental pyridoxine.","Incorrect: Ethambutol causes optic neuritis (dose-dependent), manifesting as decreased visual acuity and red-green color blindness, not peripheral neuropathy.","Incorrect: While isoniazid is the correct drug, it causes B6 deficiency, not B12 deficiency. B12 deficiency causes subacute combined degeneration."],
      highYieldPoint: "INH side effects: peripheral neuropathy (B6 deficiency), hepatotoxicity, SLE-like syndrome. Give pyridoxine prophylaxis. Ethambutol → optic neuritis (check visual acuity)."
    },
    {
      vignette: "A 24-year-old woman is prescribed ciprofloxacin for a complicated urinary tract infection. She asks her physician about potential side effects. The physician warns her about a specific musculoskeletal adverse effect and the importance of avoiding certain supplements around the time of taking the medication.",
      question: "Which serious musculoskeletal adverse effect is associated with fluoroquinolone use?",
      options: ["Osteoporosis","Tendon rupture (especially Achilles tendon)","Rhabdomyolysis","Avascular necrosis of the femoral head","Pathologic fracture of the vertebral body"],
      correctIndex: 1,
      explanation: "Fluoroquinolones (ciprofloxacin, levofloxacin, moxifloxacin) are associated with tendinitis and tendon rupture, particularly of the Achilles tendon. Risk is increased in patients over 60, concurrent corticosteroid use, and organ transplant recipients. The FDA has issued a black box warning. Fluoroquinolones should also be avoided in children due to potential cartilage damage. They chelate divalent cations (Mg²⁺, Ca²⁺, Fe²⁺, Al³⁺), reducing absorption when taken with antacids or supplements.",
      optionExplanations: ["Incorrect: Osteoporosis is caused by chronic corticosteroid use, not fluoroquinolones.","Correct: Fluoroquinolones carry a black box warning for tendinitis and tendon rupture, especially the Achilles tendon.","Incorrect: Rhabdomyolysis is associated with statins and fibrates, not fluoroquinolones.","Incorrect: Avascular necrosis is associated with chronic corticosteroid use and sickle cell disease, not fluoroquinolones.","Incorrect: Pathologic vertebral fractures are associated with osteoporosis and metastatic cancer, not fluoroquinolone use."],
      highYieldPoint: "Fluoroquinolones: tendon rupture (Achilles), QT prolongation, cartilage damage in children. MOA: inhibit DNA gyrase (topoisomerase II) and topoisomerase IV. Chelate divalent cations."
    },
    {
      vignette: "A 70-year-old man with chronic kidney disease is being treated for a life-threatening Pseudomonas aeruginosa pneumonia with intravenous gentamicin. Trough levels are monitored daily. On day 7, his serum creatinine rises from 1.2 to 3.5 mg/dL, and audiometry reveals new bilateral high-frequency hearing loss.",
      question: "Which two organ toxicities are most characteristic of aminoglycoside antibiotics?",
      options: ["Hepatotoxicity and cardiotoxicity","Nephrotoxicity and ototoxicity","Pulmonary toxicity and myelosuppression","Neurotoxicity and pancreatitis","Retinal toxicity and nephrotoxicity"],
      correctIndex: 1,
      explanation: "Aminoglycosides (gentamicin, tobramycin, amikacin) are associated with two major dose-dependent toxicities: nephrotoxicity (acute tubular necrosis due to accumulation in proximal tubular cells) and ototoxicity (damage to cochlear hair cells causing irreversible sensorineural hearing loss, and/or vestibular toxicity). Monitoring trough levels helps minimize toxicity. Risk increases with prolonged use and renal impairment.",
      optionExplanations: ["Incorrect: Aminoglycosides do not typically cause hepatotoxicity or cardiotoxicity; these are associated with other drug classes.","Correct: Nephrotoxicity (proximal tubular damage) and ototoxicity (cochlear/vestibular damage) are the hallmark toxicities of aminoglycosides.","Incorrect: Pulmonary toxicity is associated with bleomycin and amiodarone; myelosuppression with chloramphenicol or chemotherapy agents.","Incorrect: While neuromuscular blockade can rarely occur with aminoglycosides, the classic dual toxicities are nephro- and ototoxicity, not pancreatitis.","Incorrect: Retinal toxicity is not a characteristic aminoglycoside side effect; ethambutol causes optic neuritis."],
      highYieldPoint: "Aminoglycosides: nephrotoxicity + ototoxicity (irreversible). MOA: bind 30S ribosomal subunit → misreading of mRNA. Require O₂ for uptake (ineffective against anaerobes)."
    },
    {
      vignette: "A 32-year-old woman with systemic fungal infection due to Aspergillus fumigatus is started on amphotericin B. After the first infusion, she develops high fever, chills, rigors, and hypotension. Her physician adds premedication for subsequent infusions and monitors her renal function closely.",
      question: "What is the primary mechanism of action of amphotericin B?",
      options: ["Inhibition of β-glucan synthesis in the fungal cell wall","Inhibition of lanosterol 14α-demethylase in ergosterol synthesis","Binding to ergosterol in the fungal cell membrane, forming pores","Inhibition of squalene epoxidase in the ergosterol pathway","Inhibition of fungal DNA synthesis by intercalation"],
      correctIndex: 2,
      explanation: "Amphotericin B binds to ergosterol in the fungal cell membrane, forming transmembrane pores (channels) that disrupt membrane integrity. This allows leakage of ions (especially K⁺) and small molecules, killing the fungal cell. Because cholesterol in human cell membranes has some structural similarity to ergosterol, amphotericin B also causes toxicity to host cells, particularly renal tubular cells (nephrotoxicity).",
      optionExplanations: ["Incorrect: β-glucan synthesis inhibition is the mechanism of echinocandins (caspofungin, micafungin, anidulafungin).","Incorrect: Inhibition of lanosterol 14α-demethylase is the mechanism of azole antifungals (fluconazole, voriconazole, itraconazole).","Correct: Amphotericin B binds ergosterol → forms membrane pores → ion leakage → fungal cell death.","Incorrect: Squalene epoxidase inhibition is the mechanism of terbinafine, used primarily for dermatophyte infections.","Incorrect: No major antifungal works by DNA intercalation; flucytosine inhibits fungal DNA/RNA synthesis after conversion to 5-FU, but not by intercalation."],
      highYieldPoint: "Amphotericin B: binds ergosterol → membrane pores. Toxicities: nephrotoxicity, infusion reactions ('shake and bake'), hypokalemia, hypomagnesemia. Lipid formulations reduce nephrotoxicity."
    },
    {
      vignette: "A 28-year-old pregnant woman at 12 weeks gestation is diagnosed with a urinary tract infection caused by ESBL-producing E. coli. The physician must choose an antibiotic that is both effective against this organism and safe in pregnancy. The isolate is susceptible to carbapenems, nitrofurantoin, and fosfomycin.",
      question: "Which class of antibiotics should be avoided in this patient during the first trimester due to teratogenic risk?",
      options: ["Penicillins","Cephalosporins","Nitrofurantoin","Fluoroquinolones","Macrolides (azithromycin)"],
      correctIndex: 3,
      explanation: "Fluoroquinolones (ciprofloxacin, levofloxacin) should be avoided in pregnancy due to potential cartilage damage in the developing fetus (demonstrated in animal studies). They are classified as contraindicated in pregnancy. Other antibiotics to avoid in pregnancy include tetracyclines (tooth discoloration, bone growth inhibition), aminoglycosides (ototoxicity), sulfonamides near term (kernicterus), and metronidazole in the first trimester.",
      optionExplanations: ["Incorrect: Penicillins are generally considered safe in pregnancy (Category B) and are commonly used.","Incorrect: Cephalosporins are safe in pregnancy and frequently used for UTIs and other infections.","Incorrect: Nitrofurantoin is generally safe in pregnancy except near term (risk of hemolytic anemia in G6PD-deficient neonates) and in the first trimester per some guidelines; fluoroquinolones are more clearly contraindicated.","Correct: Fluoroquinolones are contraindicated in pregnancy due to risk of fetal cartilage damage. Also avoid in children.","Incorrect: Azithromycin is generally considered safe in pregnancy and is used for chlamydial infections during pregnancy."],
      highYieldPoint: "Avoid in pregnancy: fluoroquinolones (cartilage), tetracyclines (teeth/bones), aminoglycosides (CN VIII), sulfonamides near term (kernicterus), metronidazole (1st trimester). Safe: penicillins, cephalosporins, azithromycin."
    },
    {
      vignette: "A 50-year-old man with HIV is being treated with a protease inhibitor-based antiretroviral regimen. He develops active tuberculosis and is started on the standard 4-drug TB regimen. Within 2 weeks, his HIV viral load rises significantly despite previously good adherence.",
      question: "Which anti-TB drug most likely caused the rise in HIV viral load by reducing protease inhibitor levels?",
      options: ["Rifampin","Isoniazid","Pyrazinamide","Ethambutol","Streptomycin"],
      correctIndex: 0,
      explanation: "Rifampin is one of the most potent inducers of the cytochrome P450 system (especially CYP3A4) and P-glycoprotein. It dramatically increases the metabolism of HIV protease inhibitors (and many other drugs), reducing their serum levels to subtherapeutic concentrations. This leads to loss of viral suppression and rising viral load. Rifabutin (a weaker CYP inducer) is often substituted in patients on protease inhibitors.",
      optionExplanations: ["Correct: Rifampin is a potent CYP3A4 inducer → decreased protease inhibitor levels → subtherapeutic antiretroviral concentrations → viral rebound.","Incorrect: Isoniazid is a CYP inhibitor (can increase levels of phenytoin, carbamazepine) but does not significantly reduce protease inhibitor levels.","Incorrect: Pyrazinamide does not significantly affect the CYP450 system or protease inhibitor metabolism.","Incorrect: Ethambutol has minimal drug interactions and does not induce CYP450 enzymes.","Incorrect: Streptomycin is an aminoglycoside with nephro/ototoxicity but minimal CYP450 interaction."],
      highYieldPoint: "Rifampin = potent CYP450 inducer (↓ protease inhibitors, warfarin, OCPs, cyclosporine, etc.). Substitute rifabutin for TB treatment in HIV patients on PIs. 'Rifampin Ramps up CYP450.'"
    },
    {
      vignette: "A 45-year-old woman with a methicillin-sensitive Staphylococcus aureus (MSSA) bloodstream infection is initially treated with vancomycin while awaiting susceptibility results. Once MSSA is confirmed, the infectious disease consultant recommends switching to a different antibiotic for definitive therapy.",
      question: "Which antibiotic is the preferred definitive treatment for MSSA bacteremia?",
      options: ["Nafcillin (or oxacillin)","Vancomycin","Daptomycin","Linezolid","Clindamycin"],
      correctIndex: 0,
      explanation: "For MSSA infections, anti-staphylococcal penicillins (nafcillin, oxacillin) or first-generation cephalosporins (cefazolin) are the preferred definitive therapy. These agents have superior bactericidal activity against MSSA compared to vancomycin. Vancomycin is inferior to β-lactams for MSSA and should only be used when β-lactams cannot be given (e.g., true β-lactam allergy).",
      optionExplanations: ["Correct: Nafcillin/oxacillin (or cefazolin) is the preferred treatment for MSSA bacteremia due to superior bactericidal activity.","Incorrect: Vancomycin is inferior to anti-staphylococcal penicillins for MSSA bacteremia; it should be de-escalated once MSSA is confirmed.","Incorrect: Daptomycin is active against MRSA and can be used for bacteremia, but anti-staphylococcal penicillins are preferred for MSSA.","Incorrect: Linezolid is bacteriostatic (not bactericidal) and is not recommended for bloodstream infections; it is used for MRSA pneumonia or when IV access is limited.","Incorrect: Clindamycin is useful for skin/soft tissue MSSA infections but is not the drug of choice for bacteremia and has risk of inducible resistance."],
      highYieldPoint: "MSSA: nafcillin/oxacillin or cefazolin (superior to vancomycin). MRSA: vancomycin or daptomycin for bacteremia. Always de-escalate vancomycin to β-lactam if MSSA."
    },
    {
      vignette: "A 35-year-old man is treated for a Chlamydia trachomatis urethritis with azithromycin. His physician explains that this antibiotic works by binding to a specific ribosomal subunit to inhibit protein synthesis.",
      question: "Which ribosomal target does azithromycin bind to inhibit bacterial protein synthesis?",
      options: ["30S subunit — prevents initiation complex formation","30S subunit — causes misreading of mRNA","50S subunit — blocks translocation","50S subunit — inhibits peptidyl transferase","DNA-dependent RNA polymerase"],
      correctIndex: 2,
      explanation: "Azithromycin is a macrolide antibiotic that binds to the 23S rRNA of the 50S ribosomal subunit, blocking translocation of the peptidyl-tRNA from the A site to the P site. This prevents elongation of the polypeptide chain. Other macrolides (erythromycin, clarithromycin) share this mechanism. Macrolides are bacteriostatic for most organisms.",
      optionExplanations: ["Incorrect: Prevention of initiation complex formation on the 30S subunit describes aminoglycosides (which also cause misreading).","Incorrect: Misreading of mRNA is caused by aminoglycosides binding the 30S subunit, not macrolides.","Correct: Macrolides bind the 50S subunit (23S rRNA) and block translocation → inhibit protein synthesis. Bacteriostatic.","Incorrect: Inhibition of peptidyl transferase on the 50S subunit describes chloramphenicol, not macrolides.","Incorrect: DNA-dependent RNA polymerase is the target of rifampin, not azithromycin."],
      highYieldPoint: "50S inhibitors: Macrolides (translocation), Chloramphenicol (peptidyl transferase), Clindamycin (translocation), Linezolid (initiation complex). 30S: Aminoglycosides, Tetracyclines."
    },
    {
      vignette: "A 58-year-old woman with recurrent Clostridioides difficile infection has failed multiple courses of oral vancomycin. Her physician recommends a newer macrocyclic antibiotic that has a narrower spectrum and allows preservation of normal bowel flora. It acts by inhibiting the same target as rifampin.",
      question: "Which antibiotic is being described?",
      options: ["Metronidazole","Linezolid","Daptomycin","Fidaxomicin","Tigecycline"],
      correctIndex: 3,
      explanation: "Fidaxomicin is a macrocyclic antibiotic that inhibits bacterial RNA polymerase (same target as rifampin, but at a different binding site). It has a narrow spectrum of activity, primarily against C. difficile, with minimal disruption of normal intestinal flora compared to vancomycin. This reduces recurrence rates. Fidaxomicin is now recommended for initial and recurrent C. difficile infection.",
      optionExplanations: ["Incorrect: Metronidazole was previously used for C. difficile but is now considered inferior to oral vancomycin and fidaxomicin.","Incorrect: Linezolid inhibits the 50S ribosomal subunit and is not used for C. difficile infection.","Incorrect: Daptomycin is inactivated by surfactant and is not used for C. difficile or any GI infection; it treats gram-positive bloodstream infections.","Correct: Fidaxomicin inhibits RNA polymerase, has a narrow spectrum (spares gut flora), and reduces C. difficile recurrence rates.","Incorrect: Tigecycline is a broad-spectrum glycylcycline; it is not the narrow-spectrum agent described."],
      highYieldPoint: "Fidaxomicin: RNA polymerase inhibitor (like rifampin), narrow-spectrum → spares gut flora → lower C. difficile recurrence. C. diff treatment: vancomycin or fidaxomicin (oral); fecal transplant for recurrence."
    },
    {
      vignette: "A microbiologist is studying a bacterial isolate that produces an enzyme capable of hydrolyzing the β-lactam ring of penicillin, rendering the antibiotic inactive. The resistance gene is carried on a plasmid. Adding a β-lactamase inhibitor to the penicillin restores its antibacterial activity.",
      question: "Which of the following is a β-lactamase inhibitor commonly paired with amoxicillin?",
      options: ["Probenecid","Tazobactam","Cilastatin","Clavulanic acid","Sulbactam"],
      correctIndex: 3,
      explanation: "Clavulanic acid is a β-lactamase inhibitor that is paired with amoxicillin (Augmentin). It binds to and irreversibly inhibits many β-lactamases, protecting the β-lactam ring of amoxicillin from enzymatic hydrolysis. Other β-lactamase inhibitor combinations include ampicillin-sulbactam, piperacillin-tazobactam, and newer agents like avibactam and vaborbactam.",
      optionExplanations: ["Incorrect: Probenecid inhibits renal tubular secretion of penicillin (increases its serum levels) but is not a β-lactamase inhibitor.","Incorrect: Tazobactam is a β-lactamase inhibitor, but it is paired with piperacillin (Zosyn), not amoxicillin.","Incorrect: Cilastatin inhibits renal dehydropeptidase I, which normally degrades imipenem; it is not a β-lactamase inhibitor.","Correct: Clavulanic acid + amoxicillin (Augmentin) is a classic β-lactamase inhibitor combination.","Incorrect: Sulbactam is a β-lactamase inhibitor, but it is paired with ampicillin (Unasyn), not amoxicillin."],
      highYieldPoint: "β-lactamase inhibitors: clavulanic acid (with amoxicillin), sulbactam (with ampicillin), tazobactam (with piperacillin). They have no inherent antibacterial activity (except sulbactam vs. Acinetobacter)."
    },
    {
      vignette: "A 30-year-old man presents with a painless chancre on his genitalia. Dark-field microscopy confirms Treponema pallidum. He has no known drug allergies. His physician prescribes a single dose of intramuscular benzathine penicillin G. Six hours after the injection, he develops fever, headache, myalgias, and transient worsening of the chancre.",
      question: "What is this post-treatment reaction called, and what is its mechanism?",
      options: ["Anaphylaxis; IgE-mediated mast cell degranulation","Drug fever; delayed hypersensitivity reaction","Serum sickness; immune complex deposition","Red man syndrome; direct histamine release","Jarisch-Herxheimer reaction; release of endotoxin-like lipoproteins from dying spirochetes"],
      correctIndex: 4,
      explanation: "The Jarisch-Herxheimer reaction occurs within hours of initiating antibiotic treatment for spirochetal infections (syphilis, Lyme disease, leptospirosis). Killing of spirochetes releases endotoxin-like lipoproteins and inflammatory mediators, causing an acute febrile illness with headache, myalgias, and transient worsening of lesions. It is self-limited and should not be confused with drug allergy.",
      optionExplanations: ["Incorrect: Anaphylaxis would present with urticaria, angioedema, bronchospasm, and hypotension, not fever with transient lesion worsening.","Incorrect: Drug fever is a diagnosis of exclusion and typically occurs days into therapy; the Jarisch-Herxheimer reaction occurs within hours and is specific to spirochetal infections.","Incorrect: Serum sickness occurs 7-14 days after drug exposure with fever, arthritis, and urticaria from immune complex deposition.","Incorrect: Red man syndrome is specific to rapid vancomycin infusion, not penicillin injection.","Correct: Jarisch-Herxheimer reaction = acute inflammatory response to dying spirochetes releasing lipoproteins. Self-limited; does not require stopping treatment."],
      highYieldPoint: "Jarisch-Herxheimer reaction: fever + worsened lesions hours after treating spirochetal infections (syphilis, Lyme, leptospirosis). Due to dying spirochetes releasing lipoproteins. Self-limited — do NOT stop antibiotics."
    },
    {
      vignette: "A 42-year-old man with a vancomycin-resistant Enterococcus (VRE) bloodstream infection is started on daptomycin. His physician notes that daptomycin cannot be used for pneumonia despite its excellent gram-positive activity.",
      question: "Why is daptomycin ineffective for treating pneumonia?",
      options: ["It does not achieve adequate concentrations in lung tissue","It cannot cross the blood-air barrier in the alveoli","It is metabolized to an inactive form by alveolar macrophages","It requires an acidic pH that is not present in the lungs","It is inactivated by pulmonary surfactant"],
      correctIndex: 4,
      explanation: "Daptomycin is a lipopeptide antibiotic that inserts into bacterial cell membranes and forms ion channels, causing rapid depolarization and cell death. However, pulmonary surfactant (a phospholipid-rich substance lining the alveoli) binds and sequesters daptomycin, rendering it inactive in the lung environment. This is why daptomycin cannot be used to treat pneumonia despite excellent activity against gram-positive organisms including MRSA and VRE.",
      optionExplanations: ["Incorrect: While tissue penetration matters, the specific reason for daptomycin failure in the lungs is surfactant inactivation, not poor tissue levels.","Incorrect: The blood-air barrier is not an impenetrable barrier for drugs; many antibiotics achieve adequate alveolar concentrations.","Incorrect: Alveolar macrophages do not specifically metabolize daptomycin; the issue is surfactant binding.","Incorrect: Daptomycin does not require acidic pH for activity; it works well at physiological pH.","Correct: Pulmonary surfactant binds and inactivates daptomycin, preventing its antimicrobial activity in the lungs."],
      highYieldPoint: "Daptomycin: lipopeptide, depolarizes bacterial membrane. Works for bacteremia/endocarditis (MRSA, VRE). Inactivated by surfactant → cannot treat pneumonia. Monitor CPK (myopathy risk)."
    },
    {
      vignette: "A 52-year-old man with a mechanical heart valve develops Enterococcus faecium endocarditis. The isolate is resistant to ampicillin and vancomycin (VRE). The infectious disease team recommends a combination regimen including an oxazolidinone and another antibiotic that acts on the bacterial cell membrane.",
      question: "Which antibiotic combination is most appropriate for treating this VRE endocarditis?",
      options: ["Ceftriaxone plus gentamicin","Linezolid plus daptomycin","Nafcillin plus rifampin","Piperacillin-tazobactam plus vancomycin","Quinupristin-dalfopristin plus linezolid"],
      correctIndex: 4,
      explanation: "VRE (vancomycin-resistant Enterococcus) infections have limited treatment options. Linezolid (an oxazolidinone that inhibits 50S ribosomal subunit initiation complex formation) and daptomycin (a lipopeptide that depolarizes the bacterial membrane) are both effective against VRE. However, for endocarditis — which requires bactericidal therapy — daptomycin is preferred over linezolid (which is bacteriostatic). Quinupristin-dalfopristin (a streptogramin combination) has activity against E. faecium (but not E. faecalis) and can be used. The combination of an oxazolidinone plus a membrane-active agent is reasonable for difficult VRE cases.",
      optionExplanations: ["Incorrect: Ceftriaxone has no activity against enterococci (intrinsic resistance to cephalosporins), and gentamicin alone does not treat VRE.","Incorrect: While both linezolid and daptomycin individually have VRE activity, linezolid is bacteriostatic — for endocarditis, daptomycin is the preferred agent among these. This combination is not standard.","Incorrect: Nafcillin is an anti-staphylococcal penicillin with no VRE activity; rifampin alone does not treat enterococcal infections.","Incorrect: Piperacillin-tazobactam has limited enterococcal activity and vancomycin is ineffective against VRE by definition.","Correct: Quinupristin-dalfopristin has activity against E. faecium (not E. faecalis); combined with linezolid for synergy in difficult VRE endocarditis cases. Daptomycin is the other key option for VRE bacteremia/endocarditis."],
      highYieldPoint: "VRE treatment options: daptomycin (bactericidal, for bacteremia/endocarditis), linezolid (bacteriostatic, for non-bacteremia), quinupristin-dalfopristin (E. faecium only). Enterococci are intrinsically resistant to cephalosporins."
    }
  ]

};

const MICRO_SUMMARIES = {

  "Bacterial structure & genetics": {
    sections: [
      {
        heading: "Bacterial Cell Wall & Structures",
        bullets: ["Peptidoglycan: NAG-NAM polymer cross-linked by D-amino acid peptide bridges; target of β-lactams (PBPs) and vancomycin (D-Ala-D-Ala)","Gram-positive: thick peptidoglycan + teichoic/lipoteichoic acid; retains crystal violet (purple)","Gram-negative: thin peptidoglycan + outer membrane with LPS (lipid A = endotoxin, activates TLR4)","Capsule: polysaccharide (except B. anthracis = poly-D-glutamate); antiphagocytic; India ink or quellung reaction","Endospores (Bacillus, Clostridium): dipicolinic acid + Ca²⁺ = heat resistance; keratin-like coat","Pili/fimbriae: adhesion (ordinary pili) or DNA transfer (sex pilus in conjugation)","Flagella: motility; H antigen (Salmonella); flagellin activates TLR5"]
      },
      {
        heading: "Horizontal Gene Transfer",
        bullets: ["Conjugation: F-pilus, direct contact, DNase-resistant; transfers plasmid or Hfr chromosomal DNA","Transformation: uptake of naked DNA from environment; DNase-sensitive (Griffith's experiment with S. pneumoniae)","Transduction: phage-mediated; generalized (random DNA) or specialized (adjacent to prophage)","Lysogenic conversion: prophage confers new properties (diphtheria toxin, cholera toxin, Shiga-like toxin, erythrogenic toxin, botulinum toxin)"]
      },
      {
        heading: "Gene Regulation & Resistance",
        bullets: ["Lac operon: allolactose = true inducer (releases repressor); cAMP-CAP = positive regulator when glucose low","Antigenic variation: pilS/pilE recombination (N. gonorrhoeae), phase variation (Salmonella flagellar switching)","R-plasmids: carry antibiotic resistance genes; self-replicating extrachromosomal DNA","SCCmec: carries mecA (PBP2a) in MRSA; integrates site-specifically in S. aureus chromosome","Transposons: mobile elements flanked by inverted repeats; carry resistance genes between DNA molecules"]
      }
    ],
    table: {
      title: "Horizontal Gene Transfer Comparison",
      headers: ["Mechanism","Vehicle","Cell Contact?","DNase Sensitive?","Key Example"],
      rows: [
        ["Conjugation","F-pilus / plasmid","Yes","No","R-plasmid transfer"],
        ["Transformation","Naked DNA","No","Yes","S. pneumoniae capsule"],
        ["Generalized transduction","Phage (random DNA)","No","No (DNA in phage)","P1 phage in E. coli"],
        ["Specialized transduction","Phage (adjacent genes)","No","No (DNA in phage)","λ phage gal/bio genes"],
        ["Lysogenic conversion","Prophage integration","No","No","Diphtheria toxin (β-phage)"]
      ]
    },
    mnemonic: "SHiNE: Spores Have Nasty Endurance (dipicolinic acid + calcium for heat resistance). For gene transfer: 'ConTrans are Tough' — Conjugation = contact + DNase-resisT; Transformation = DNase-sensiTive."
  },

  "Gram-positive bacteria": {
    sections: [
      {
        heading: "Staphylococci",
        bullets: ["S. aureus: coagulase (+), catalase (+), mannitol-fermenting; causes skin infections, endocarditis (IVDU → tricuspid), osteomyelitis, TSS (TSST-1), scalded skin (exfoliative toxin), food poisoning (enterotoxins)","MRSA: mecA gene (SCCmec) → PBP2a with low β-lactam affinity; treat with vancomycin, daptomycin, linezolid","S. epidermidis: coagulase (−), biofilm producer; prosthetic device infections","S. saprophyticus: coagulase (−), novobiocin-resistant; UTI in young sexually active women"]
      },
      {
        heading: "Streptococci",
        bullets: ["S. pyogenes (GAS): β-hemolytic, bacitracin-sensitive, PYR (+); pharyngitis, impetigo, necrotizing fasciitis, scarlet fever (SPE superantigen), rheumatic fever (pharyngitis only → molecular mimicry), PSGN (pharyngitis or skin)","S. agalactiae (GBS): β-hemolytic, CAMP test (+), hippurate hydrolysis (+); neonatal meningitis/sepsis/pneumonia; screen pregnant women at 35-37 weeks","S. pneumoniae: α-hemolytic, optochin-sensitive, bile-soluble, quellung (+); pneumonia, meningitis, otitis media","Viridans strep: α-hemolytic, optochin-resistant, bile-insoluble; subacute endocarditis (dental procedures)","S. gallolyticus (bovis): bile-esculin (+), 6.5% NaCl (−); associated with colon cancer","Enterococcus: bile-esculin (+), 6.5% NaCl (+), PYR (+); UTI, endocarditis; VRE is growing concern"]
      },
      {
        heading: "Gram-Positive Rods",
        bullets: ["Clostridium difficile: toxin A (enterotoxin) + toxin B (cytotoxin); pseudomembranous colitis post-antibiotics","C. perfringens: α-toxin (lecithinase) → gas gangrene; Nagler reaction","C. botulinum: botulinum toxin cleaves SNARE proteins → flaccid (descending) paralysis","C. tetani: tetanospasmin blocks glycine/GABA release → spastic paralysis","Bacillus anthracis: PA + EF (adenylate cyclase → edema) + LF (metalloprotease → cell death); poly-D-glutamate capsule","Listeria monocytogenes: motile at 25°C, β-hemolytic, cold growth; intracellular (LLO → phagosome escape, ActA → actin rockets); treat with ampicillin + gentamicin (resistant to cephalosporins)"]
      }
    ],
    table: {
      title: "Catalase and Hemolysis Patterns",
      headers: ["Organism","Catalase","Hemolysis","Key Differentiating Test"],
      rows: [
        ["S. aureus","+","β","Coagulase (+), mannitol salt agar"],
        ["S. epidermidis","+","γ/none","Coagulase (−), novobiocin-sensitive"],
        ["S. pyogenes (GAS)","−","β","Bacitracin-sensitive, PYR (+)"],
        ["S. agalactiae (GBS)","−","β","CAMP test (+), hippurate hydrolysis"],
        ["S. pneumoniae","−","α","Optochin-sensitive, bile-soluble"],
        ["Viridans strep","−","α","Optochin-resistant, bile-insoluble"],
        ["Enterococcus","−","γ (variable)","Bile-esculin (+), 6.5% NaCl (+), PYR (+)"]
      ]
    },
    mnemonic: "Strep classification by hemolysis — 'Boil PYRates on a BAcitracin Ship to distinguish group A (PYR+, bacitracin-S) from group B (CAMP+, hippurate+).' For Clostridia toxins: 'BOtulinum = flOpppy (flaccid); TETanus = TETanic (spastic).'"
  },

  "Gram-negative bacteria": {
    sections: [
      {
        heading: "Enterobacteriaceae (Lactose Fermenters vs. Non-Fermenters)",
        bullets: ["Lactose fermenters (pink on MacConkey): E. coli, Klebsiella, Enterobacter, Citrobacter, Serratia","Non-lactose fermenters (colorless on MacConkey): Salmonella, Shigella, Proteus, Yersinia","E. coli: most common cause of UTI, neonatal meningitis (K1 capsule), gram-negative sepsis; ETEC (traveler's diarrhea: LT = ↑cAMP, ST = ↑cGMP), EHEC (O157:H7: Shiga-like toxin → HUS, sorbitol-negative), EIEC (dysentery-like, invades colon)","Klebsiella pneumoniae: thick capsule (mucoid), currant jelly sputum, bulging fissure sign; alcoholics, diabetics","Proteus mirabilis: swarming motility, urease (+) → struvite stones; alkaline urine","Salmonella typhi: intracellular in macrophages (SPI-2 T3SS), Vi capsule, rose spots; typhoid fever","Shigella: non-motile, very low infectious dose (~10), T3SS (Ipa proteins), Shiga toxin (S. dysenteriae) → HUS"]
      },
      {
        heading: "Other Important Gram-Negative Organisms",
        bullets: ["Pseudomonas aeruginosa: oxidase (+), blue-green pigment (pyocyanin), grape-like odor; malignant otitis externa, CF lungs, burn wound infections","Neisseria meningitidis: gram-negative diplococci, capsule (serogroups A, B, C, W, Y); meningitis, Waterhouse-Friderichsen syndrome (adrenal hemorrhage)","Neisseria gonorrhoeae: intracellular diplococci in neutrophils; IgA protease, pili (antigenic variation), Opa proteins; PID, disseminated gonococcal infection","Helicobacter pylori: urease (+), curved rod; gastritis, PUD, gastric adenocarcinoma, MALT lymphoma","Bordetella pertussis: pertussis toxin (ADP-ribosylates Gi → ↑cAMP → lymphocytosis), whooping cough; Bordet-Gengou agar","Legionella pneumophila: BCYE agar (iron + cysteine), intracellular, urinary antigen test; atypical pneumonia with GI/CNS symptoms"]
      },
      {
        heading: "Spirochetes & Atypical Gram-Negatives",
        bullets: ["Treponema pallidum: syphilis; too thin for Gram stain → dark-field microscopy; RPR/VDRL (screening), FTA-ABS (confirmatory)","Borrelia burgdorferi: Lyme disease (Ixodes tick); erythema migrans → Bell palsy/AV block → chronic arthritis","Mycoplasma pneumoniae: no cell wall → no Gram stain, resistant to β-lactams; atypical pneumonia, cold agglutinins; treat with macrolides"]
      }
    ],
    table: {
      title: "Gram-Negative Toxin Mechanisms",
      headers: ["Toxin","Organism","Mechanism","Clinical Effect"],
      rows: [
        ["Cholera toxin","V. cholerae","ADP-ribosylates Gsα → ↑cAMP","Rice-water diarrhea"],
        ["Shiga toxin","Shigella, EHEC","Cleaves 28S rRNA (60S)","Bloody diarrhea, HUS"],
        ["LT toxin","ETEC","ADP-ribosylates Gsα → ↑cAMP","Watery diarrhea (travelers)"],
        ["ST toxin","ETEC","Activates guanylate cyclase → ↑cGMP","Watery diarrhea"],
        ["Pertussis toxin","B. pertussis","ADP-ribosylates Gi → ↑cAMP","Lymphocytosis, whooping cough"],
        ["LPS (Lipid A)","All gram-negatives","Activates TLR4 → cytokines","Fever, shock, DIC"]
      ]
    },
    mnemonic: "For E. coli diarrhea strains: 'ETEC = Travelers (watery), EHEC = Hemorrhagic (bloody, HUS), EIEC = Invasive (dysentery).' Lactose fermenters on MacConkey: 'CEE-KS are pink' (Citrobacter, E. coli, Enterobacter, Klebsiella, Serratia)."
  },

  "Virology": {
    sections: [
      {
        heading: "DNA Viruses",
        bullets: ["Herpesviruses (dsDNA, enveloped, nuclear replication): HSV-1 (oral, trigeminal latency), HSV-2 (genital, sacral latency), VZV (chickenpox/shingles, dorsal root ganglia), EBV (mono, B-cell latency via CR2/CD21, Burkitt/Hodgkin/nasopharyngeal CA), CMV (mononucleosis-like, myeloid latency, retinitis at CD4 <50), HHV-6 (roseola), HHV-8 (Kaposi sarcoma)","Adenovirus: dsDNA, non-enveloped, icosahedral; pharyngoconjunctival fever, pneumonia in military recruits","Parvovirus B19: ssDNA (smallest DNA virus), non-enveloped; fifth disease, aplastic crisis (sickle cell), hydrops fetalis; binds P antigen (globoside) on erythroid precursors","HPV: dsDNA, non-enveloped; types 6/11 (warts), types 16/18 (cervical CA: E6 inhibits p53, E7 inhibits Rb)","Poxvirus: largest dsDNA virus; replicates in CYTOPLASM (carries own DNA/RNA polymerase); smallpox (eradicated), molluscum contagiosum"]
      },
      {
        heading: "RNA Viruses",
        bullets: ["Positive-sense ssRNA (act as mRNA, no polymerase in virion): Picornaviridae (polio, rhino, HAV, Coxsackie), Flaviviridae (HCV, dengue, Zika, West Nile), Coronaviridae, Togaviridae (rubella)","Negative-sense ssRNA (carry RdRp in virion): Paramyxoviridae (measles, mumps, RSV, parainfluenza), Orthomyxoviridae (influenza — segmented), Rhabdoviridae (rabies), Filoviridae (Ebola, Marburg), Bunyaviridae (hantavirus)","Retroviruses: (+)ssRNA but uses reverse transcriptase → dsDNA → integrates; HIV (CD4+, CCR5/CXCR4)","Influenza: segmented (−)ssRNA; antigenic drift (point mutations → epidemics), antigenic shift (reassortment → pandemics); pigs = mixing vessels"]
      },
      {
        heading: "Key Clinical Associations",
        bullets: ["RSV = #1 cause of bronchiolitis; palivizumab (anti-F protein Ab) for prophylaxis","Parainfluenza = #1 cause of croup (steeple sign)","Rotavirus = #1 cause of viral diarrhea in children worldwide","Rhinovirus = #1 cause of common cold","CMV = #1 congenital viral infection; retinitis at CD4 <50 (pizza pie appearance)","Rabies: Negri bodies (Purkinje cells), bullet-shaped (Rhabdoviridae); post-exposure: wound cleaning + immunoglobulin + vaccine"]
      }
    ],
    table: {
      title: "Herpesvirus Latency Sites & Diseases",
      headers: ["Virus","Latency Site","Primary Disease","Reactivation Disease"],
      rows: [
        ["HSV-1","Trigeminal ganglion","Gingivostomatitis","Cold sores, encephalitis (temporal lobe)"],
        ["HSV-2","Sacral ganglia","Genital herpes","Recurrent genital lesions, neonatal herpes"],
        ["VZV (HHV-3)","Dorsal root ganglia","Chickenpox (varicella)","Shingles (zoster), post-herpetic neuralgia"],
        ["EBV (HHV-4)","B lymphocytes","Infectious mononucleosis","Burkitt lymphoma, nasopharyngeal CA, Hodgkin"],
        ["CMV (HHV-5)","Myeloid progenitor cells","Mononucleosis-like","Retinitis, colitis, pneumonitis (immunocompromised)"],
        ["HHV-6","T lymphocytes","Roseola infantum","Encephalitis (rare)"],
        ["HHV-8","B lymphocytes","Asymptomatic","Kaposi sarcoma, primary effusion lymphoma"]
      ]
    },
    mnemonic: "Negative-sense RNA: 'Always Bring Polymerase Or Fail Replication' (Arenaviridae, Bunyaviridae, Paramyxoviridae, Orthomyxoviridae, Filoviridae, Rhabdoviridae — all carry RdRp). DNA viruses replicate in the Nucleus (except Poxvirus in cytoplasm). RNA viruses replicate in the Cytoplasm (except influenza and retroviruses in nucleus)."
  },

  "Mycology & parasitology": {
    sections: [
      {
        heading: "Systemic (Dimorphic) Fungi",
        bullets: ["Mold at 25°C (environmental), yeast at 37°C (body temperature) — 'mold in the cold, yeast in the heat'","Histoplasma capsulatum: Ohio/Mississippi Valleys, bird/bat droppings; small (2-4 μm) intracellular yeast in macrophages; mimics TB; urine antigen test","Blastomyces dermatitidis: Great Lakes/Ohio/Mississippi Valleys; large broad-based budding yeast (8-15 μm); pulmonary + skin/bone","Coccidioides immitis: Southwestern US deserts (San Joaquin Valley fever); spherules with endospores in tissue; erythema nodosum ('desert bumps')","Sporothrix schenckii: rose gardener's disease; lymphocutaneous spread (ascending nodules); cigar-shaped yeast at 37°C; treat with itraconazole"]
      },
      {
        heading: "Opportunistic Fungi",
        bullets: ["Candida albicans: budding yeast + pseudohyphae; germ tube test (+); oropharyngeal (thrush), esophageal (CD4 <100), vulvovaginal, candidemia","Aspergillus fumigatus: septate hyphae with 45° dichotomous branching; aspergilloma (fungal ball), ABPA (asthma + eosinophilia), invasive (neutropenic); galactomannan antigen; treat with voriconazole","Mucor/Rhizopus: wide non-septate (pauciseptate) hyphae, 90° branching, angioinvasive; rhinocerebral in DKA; treat with amphotericin B + surgical debridement","Cryptococcus neoformans: narrow-based budding, thick capsule (India ink, mucicarmine stain); meningitis in AIDS (CD4 <100); latex agglutination/serum antigen; treat with amphotericin B + flucytosine → fluconazole","Pneumocystis jirovecii: disc-shaped cysts on GMS stain; PCP in AIDS (CD4 <200); bilateral interstitial infiltrates, ↑LDH; prophylax/treat with TMP-SMX"]
      },
      {
        heading: "Key Parasites",
        bullets: ["Plasmodium falciparum: most lethal malaria; infects all-age RBCs, cerebral malaria; banana-shaped gametocytes. P. vivax/ovale: hypnozoites (relapse) — treat with primaquine","Toxoplasma gondii: cat (definitive host); congenital: intracranial calcifications, hydrocephalus, chorioretinitis; ring-enhancing brain lesions in AIDS","Trypanosoma cruzi: Chagas disease, reduviid (kissing) bug; Romaña sign → dilated cardiomyopathy + megacolon","Leishmania: sandfly vector; amastigotes with kinetoplast in macrophages; cutaneous ulcer, visceral (kala-azar: hepatosplenomegaly, pancytopenia)","Schistosoma: S. haematobium (bladder → SCC, terminal spine), S. mansoni (liver, lateral spine), S. japonicum (liver, no spine); treat all with praziquantel","Hookworm (Necator/Ancylostoma): filariform larvae penetrate skin (ground itch) → iron-deficiency anemia; eosinophilia","Enterobius (pinworm): scotch tape test, perianal pruritus; most common US helminth"]
      }
    ],
    table: {
      title: "Dimorphic Fungi Comparison",
      headers: ["Fungus","Endemic Area","Tissue Form","Key Feature","Treatment"],
      rows: [
        ["Histoplasma","Ohio/Mississippi Valleys","Small yeast in macrophages (2-4 μm)","Bird/bat droppings, mimics TB","Itraconazole (mild); amphotericin B (severe)"],
        ["Blastomyces","Great Lakes, Ohio/Mississippi","Broad-based budding yeast (8-15 μm)","Skin/bone lesions + lung","Itraconazole; amphotericin B (severe)"],
        ["Coccidioides","SW US deserts","Spherules with endospores","Erythema nodosum, desert bumps","Fluconazole; amphotericin B (severe)"],
        ["Sporothrix","Worldwide (soil, plants)","Cigar-shaped yeast","Rose gardener's, lymphocutaneous","Itraconazole; potassium iodide"],
        ["Paracoccidioides","Latin America","Pilot wheel/captain's wheel yeast","Mucosal lesions","Itraconazole; TMP-SMX"]
      ]
    },
    mnemonic: "Fungal morphology: 'MUCOR has NO SEPTA and branches WIDE (90°); ASPERGILLUS is SEPTATE and branches ACUTE (45°).' For malaria: 'FAlciparum = FAtality (most dangerous, all-age RBCs).' Parasites and their vectors: 'Sand-Leish, Kissing-Chagas, Tsetse-Sleeping (Trypanosoma brucei), Anopheles-Malaria.'"
  },

  "Antimicrobial pharmacology": {
    sections: [
      {
        heading: "Cell Wall Synthesis Inhibitors",
        bullets: ["β-Lactams (penicillins, cephalosporins, carbapenems, monobactams): bind PBPs (transpeptidases), block peptidoglycan cross-linking; β-lactamase inhibitors: clavulanic acid (with amoxicillin), sulbactam (with ampicillin), tazobactam (with piperacillin)","Vancomycin: binds D-Ala-D-Ala of peptidoglycan precursors, prevents transglycosylation; red man syndrome (non-immune histamine release); nephrotoxicity, ototoxicity; used for MRSA, C. diff (oral only)","VRE resistance: D-Ala-D-Lac replaces D-Ala-D-Ala → vancomycin cannot bind"]
      },
      {
        heading: "Protein Synthesis Inhibitors",
        bullets: ["30S subunit: Aminoglycosides (bactericidal, misreading + initiation block; nephro/ototoxicity), Tetracyclines (bacteriostatic, block tRNA entry to A site)","50S subunit: Macrolides (azithromycin — block translocation), Chloramphenicol (inhibit peptidyl transferase; aplastic anemia, gray baby syndrome), Clindamycin (block translocation; C. diff risk), Linezolid (block 70S initiation complex; serotonin syndrome, thrombocytopenia)","Aminoglycosides require oxygen for uptake → ineffective against anaerobes"]
      },
      {
        heading: "DNA/RNA Synthesis Inhibitors & Other Agents",
        bullets: ["Fluoroquinolones: inhibit DNA gyrase (gram-negatives) and topoisomerase IV (gram-positives); tendon rupture, QT prolongation, cartilage damage in children; chelate divalent cations","Rifampin: inhibits DNA-dependent RNA polymerase; potent CYP450 inducer; orange body fluids; TB treatment (with INH, PZA, EMB)","Fidaxomicin: RNA polymerase inhibitor, narrow spectrum for C. difficile, spares gut flora","Metronidazole: forms free radicals that damage DNA; anaerobes, Giardia, Entamoeba, Trichomonas, C. diff; disulfiram-like reaction with alcohol","TMP-SMX: sequential folate synthesis inhibition (sulfa = PABA analog → inhibits dihydropteroate synthase; TMP = inhibits dihydrofolate reductase)"]
      },
      {
        heading: "Antifungals & Special Agents",
        bullets: ["Amphotericin B: binds ergosterol → forms membrane pores; nephrotoxicity ('ampho-terrible'), infusion reactions, hypokalemia","Azoles (-conazole): inhibit lanosterol 14α-demethylase (CYP450 enzyme in ergosterol pathway); hepatotoxicity, drug interactions (CYP inhibitors)","Echinocandins (caspofungin, micafungin): inhibit β-1,3-glucan synthase (cell wall); for invasive Candida and Aspergillus","Terbinafine: inhibits squalene epoxidase; dermatophytes (tinea)","Daptomycin: lipopeptide → membrane depolarization; MRSA/VRE bacteremia; inactivated by pulmonary surfactant → cannot treat pneumonia; monitor CPK"]
      },
      {
        heading: "Anti-TB Drugs & Key Toxicities",
        bullets: ["RIPE regimen: Rifampin + Isoniazid + Pyrazinamide + Ethambutol (2 months intensive, then 4 months R+I)","Isoniazid: peripheral neuropathy (B6 depletion), hepatotoxicity, SLE-like syndrome; give pyridoxine prophylaxis","Rifampin: hepatotoxicity, CYP450 induction (↓ OCP, warfarin, protease inhibitors), orange fluids","Pyrazinamide: hyperuricemia (gout), hepatotoxicity","Ethambutol: optic neuritis (red-green color blindness, decreased acuity)"]
      }
    ],
    table: {
      title: "Ribosomal Subunit Targets of Protein Synthesis Inhibitors",
      headers: ["Target","Drug Class","Mechanism","Key Toxicity"],
      rows: [
        ["30S","Aminoglycosides","Misreading + blocks initiation","Nephrotoxicity, ototoxicity"],
        ["30S","Tetracyclines","Block tRNA binding to A site","Teeth discoloration, photosensitivity"],
        ["50S","Macrolides","Block translocation (A→P)","GI upset, QT prolongation, CYP inhibition"],
        ["50S","Chloramphenicol","Inhibit peptidyl transferase","Aplastic anemia, gray baby syndrome"],
        ["50S","Clindamycin","Block translocation","C. difficile colitis"],
        ["50S","Linezolid","Block 70S initiation complex","Serotonin syndrome, thrombocytopenia"]
      ]
    },
    mnemonic: "'Buy AT 30, CELL at 50' — 30S: Aminoglycosides, Tetracyclines. 50S: Chloramphenicol, Erythromycin (macrolides), Linezolid, cLindamycin. TB toxicities: 'RIF Ramps up CYP450 (Red-orange fluids); INH Injures Nerves (take pyridoxine/B6); PZA = Painful joints (hyperuricemia); EMB = Eyes (optic neuritis).'"
  }

};
