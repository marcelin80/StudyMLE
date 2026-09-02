const BIOCHEM_QUESTIONS = {

  "Molecular biology": [
    {
      vignette: "A 2-year-old boy is brought to the clinic for recurrent infections since birth. Genetic testing reveals a mutation in a gene encoding a DNA-dependent RNA polymerase that transcribes ribosomal RNA genes. A skin biopsy shows markedly reduced ribosomal content in cells.",
      question: "Which RNA polymerase is most likely affected in this patient?",
      options: ["RNA polymerase I","RNA polymerase II","RNA polymerase III","Primase","Reverse transcriptase"],
      correctIndex: 0,
      explanation: "RNA polymerase I transcribes the large ribosomal RNA genes (28S, 18S, 5.8S rRNA) in the nucleolus. A defect in this enzyme would lead to reduced ribosomal content and impaired protein synthesis, compromising immune cell function.",
      optionExplanations: ["Correct: RNA polymerase I synthesizes rRNA (28S, 18S, 5.8S) in the nucleolus.","Incorrect: RNA polymerase II synthesizes mRNA and most snRNAs; its loss would be broadly lethal rather than causing isolated ribosomal deficiency.","Incorrect: RNA polymerase III synthesizes tRNA, 5S rRNA, and other small RNAs, but not the major rRNA species.","Incorrect: Primase synthesizes short RNA primers during DNA replication and is not involved in rRNA production.","Incorrect: Reverse transcriptase converts RNA to DNA and is found in retroviruses, not involved in eukaryotic rRNA synthesis."],
      highYieldPoint: "RNA Pol I = rRNA (nucleolus); RNA Pol II = mRNA; RNA Pol III = tRNA + 5S rRNA."
    },
    {
      vignette: "A researcher is studying a eukaryotic gene and notices that the primary transcript is approximately 10 times longer than the mature mRNA. She observes that specific consensus sequences at the boundaries of the removed segments guide their excision.",
      question: "Which consensus sequences are most important for the removal of these intervening segments?",
      options: ["TATA box and CAAT box","GU at the 5' end and AG at the 3' end of the intron","Kozak sequence and poly-A signal","Shine-Dalgarno sequence and stop codons","CpG islands and silencer elements"],
      correctIndex: 1,
      explanation: "Introns are removed by spliceosomes that recognize the GU (donor) site at the 5' splice junction and the AG (acceptor) site at the 3' splice junction. These consensus dinucleotides are essential for accurate splicing of pre-mRNA.",
      optionExplanations: ["Incorrect: TATA box and CAAT box are promoter elements involved in transcription initiation, not splicing.","Correct: The GU-AG rule defines the 5' donor and 3' acceptor splice sites of most introns.","Incorrect: The Kozak sequence facilitates translation initiation in eukaryotes, and the poly-A signal directs 3' end processing, neither related to intron removal.","Incorrect: The Shine-Dalgarno sequence is a prokaryotic ribosome-binding site; stop codons terminate translation.","Incorrect: CpG islands are associated with promoter regions and gene regulation, not splicing."],
      highYieldPoint: "Intron splice sites follow the GU-AG rule (GU at 5' donor, AG at 3' acceptor)."
    },
    {
      vignette: "A 6-month-old girl presents with failure to thrive, hepatosplenomegaly, and a cherry-red spot on fundoscopy. Enzyme assay reveals deficiency of hexosaminidase A. Genetic analysis shows a four-base-pair insertion in exon 11 of the HEXA gene causing a frameshift.",
      question: "What is the most likely effect of this mutation on the mRNA transcript?",
      options: ["Exon skipping during splicing","Loss of the 5' cap structure","Premature termination codon triggering nonsense-mediated decay","Expansion of a trinucleotide repeat","Abnormal alternative polyadenylation"],
      correctIndex: 2,
      explanation: "A four-base-pair insertion causes a frameshift, which typically introduces a premature stop codon downstream. Transcripts with premature termination codons are recognized and degraded by the nonsense-mediated mRNA decay (NMD) pathway, reducing functional mRNA levels.",
      optionExplanations: ["Incorrect: Exon skipping occurs with splice site mutations, not frameshift insertions within an exon.","Incorrect: The 5' cap is added co-transcriptionally and is unrelated to coding sequence insertions.","Correct: Frameshift mutations usually generate premature stop codons, triggering nonsense-mediated mRNA decay.","Incorrect: Trinucleotide repeat expansions are a distinct mutational mechanism (e.g., Huntington disease).","Incorrect: Alternative polyadenylation is regulated by 3' UTR signals and is not caused by coding region frameshifts."],
      highYieldPoint: "Frameshift mutations → premature stop codons → nonsense-mediated mRNA decay (NMD)."
    },
    {
      vignette: "A molecular biology student is examining the replication of a linear chromosome. She notes that with each round of DNA replication, the ends of the chromosome become progressively shorter unless a specific enzyme is active.",
      question: "Which enzyme prevents this progressive shortening of chromosome ends?",
      options: ["Helicase","DNA ligase","Topoisomerase II","Telomerase","DNA polymerase δ"],
      correctIndex: 3,
      explanation: "Telomerase is a reverse transcriptase that extends the 3' overhang at chromosome ends by adding repetitive TTAGGG sequences using its built-in RNA template. This prevents the end-replication problem that would otherwise shorten chromosomes with each division.",
      optionExplanations: ["Incorrect: Helicase unwinds the double-stranded DNA at the replication fork but does not add nucleotides to telomeres.","Incorrect: DNA ligase seals nicks between Okazaki fragments but cannot extend chromosome ends.","Incorrect: Topoisomerase II relieves supercoiling during replication but has no role in telomere maintenance.","Correct: Telomerase adds telomeric repeats (TTAGGG in humans) to chromosome ends, preventing progressive shortening.","Incorrect: DNA polymerase δ synthesizes the lagging strand but cannot replicate the very end of the template."],
      highYieldPoint: "Telomerase (a reverse transcriptase with an RNA template) adds TTAGGG repeats to maintain telomere length."
    },
    {
      vignette: "A pharmaceutical company is developing an antibiotic that targets bacterial protein synthesis. The drug specifically prevents the formation of the first peptide bond after the initiator tRNA is positioned in the ribosome.",
      question: "Which ribosomal site is most directly involved in catalyzing peptide bond formation?",
      options: ["A site (aminoacyl)","P site (peptidyl)","E site (exit)","30S decoding center","Peptidyl transferase center of the 50S subunit"],
      correctIndex: 4,
      explanation: "Peptide bond formation is catalyzed by the peptidyl transferase activity of the 23S rRNA within the 50S ribosomal subunit. This is a ribozyme activity, meaning the RNA itself has catalytic function, not a protein enzyme.",
      optionExplanations: ["Incorrect: The A site accepts incoming aminoacyl-tRNAs but does not catalyze peptide bond formation.","Incorrect: The P site holds the peptidyl-tRNA but the catalytic activity resides in the 23S rRNA.","Incorrect: The E site is where deacylated tRNAs exit the ribosome.","Incorrect: The 30S decoding center ensures codon-anticodon fidelity but does not form peptide bonds.","Correct: The peptidyl transferase center, located in the 23S rRNA of the 50S subunit, is the ribozyme that catalyzes peptide bond formation."],
      highYieldPoint: "Peptidyl transferase is a ribozyme (23S rRNA of 50S subunit) that catalyzes peptide bond formation."
    },
    {
      vignette: "A 35-year-old woman with a family history of breast cancer undergoes genetic testing. Results show a pathogenic variant in BRCA1. Her physician explains that this protein normally participates in repairing a specific type of DNA damage that involves breaks in both strands of the double helix.",
      question: "Which DNA repair mechanism is most directly impaired by loss of BRCA1 function?",
      options: ["Homologous recombination","Nucleotide excision repair","Mismatch repair","Base excision repair","Non-homologous end joining"],
      correctIndex: 0,
      explanation: "BRCA1 is a key component of the homologous recombination (HR) pathway, which repairs double-strand DNA breaks using the sister chromatid as a template. Loss of BRCA1 forces cells to use error-prone repair mechanisms, increasing genomic instability and cancer risk.",
      optionExplanations: ["Correct: BRCA1 facilitates homologous recombination for error-free repair of double-strand breaks.","Incorrect: Nucleotide excision repair removes bulky adducts and pyrimidine dimers; it involves XP gene products, not BRCA1.","Incorrect: Mismatch repair corrects replication errors and is associated with MLH1/MSH2 mutations (Lynch syndrome).","Incorrect: Base excision repair corrects small base modifications (e.g., deamination, oxidation) and does not involve BRCA1.","Incorrect: Non-homologous end joining directly ligates broken DNA ends and does not require BRCA1 (though it may increase when HR is lost)."],
      highYieldPoint: "BRCA1/BRCA2 → homologous recombination repair of double-strand breaks; loss → breast/ovarian cancer risk."
    },
    {
      vignette: "A researcher adds α-amanitin to a culture of human fibroblasts. After 6 hours, she observes a dramatic decrease in the production of new proteins despite intact ribosomal machinery.",
      question: "Which process is most directly inhibited by α-amanitin in these cells?",
      options: ["DNA replication","mRNA transcription","rRNA transcription","tRNA aminoacylation","Ribosomal translocation"],
      correctIndex: 1,
      explanation: "α-Amanitin is a potent inhibitor of RNA polymerase II, which is responsible for mRNA synthesis. Without new mRNA production, protein synthesis declines as existing mRNAs are degraded, even though ribosomes remain functional.",
      optionExplanations: ["Incorrect: DNA replication is not directly inhibited by α-amanitin.","Correct: α-Amanitin specifically inhibits RNA polymerase II, blocking mRNA synthesis.","Incorrect: rRNA transcription is performed by RNA polymerase I, which is relatively resistant to α-amanitin.","Incorrect: tRNA aminoacylation is carried out by aminoacyl-tRNA synthetases and is unaffected by α-amanitin.","Incorrect: Ribosomal translocation is targeted by other antibiotics (e.g., erythromycin) but not by α-amanitin."],
      highYieldPoint: "α-Amanitin (from Amanita mushrooms) inhibits RNA polymerase II → blocks mRNA synthesis."
    },
    {
      vignette: "A 10-year-old boy with xeroderma pigmentosum develops multiple skin cancers on sun-exposed areas. His cells show an impaired ability to repair ultraviolet-induced DNA damage.",
      question: "Which type of DNA lesion is most directly caused by UV radiation and normally repaired by the pathway defective in this patient?",
      options: ["Depurination","Deamination of cytosine","Thymine dimers","Oxidative base damage","Double-strand breaks"],
      correctIndex: 2,
      explanation: "UV radiation causes covalent linkage between adjacent pyrimidines, most commonly thymine-thymine dimers. These are repaired by the nucleotide excision repair (NER) pathway, which is defective in xeroderma pigmentosum.",
      optionExplanations: ["Incorrect: Depurination occurs spontaneously and is repaired by base excision repair, not NER.","Incorrect: Deamination of cytosine to uracil is a spontaneous event repaired by base excision repair (uracil glycosylase).","Correct: UV radiation induces thymine (pyrimidine) dimers, which are repaired by nucleotide excision repair, defective in XP.","Incorrect: Oxidative base damage (e.g., 8-oxoguanine) is repaired by base excision repair.","Incorrect: Double-strand breaks are caused by ionizing radiation and repaired by homologous recombination or NHEJ."],
      highYieldPoint: "Xeroderma pigmentosum = defective nucleotide excision repair → cannot fix UV-induced pyrimidine dimers."
    },
    {
      vignette: "A newborn is found to have a mutation in the gene encoding the enzyme dihydrofolate reductase (DHFR). Laboratory studies show elevated levels of dihydrofolate and decreased levels of tetrahydrofolate in the blood.",
      question: "Which of the following nucleotide synthesis reactions would be most directly impaired?",
      options: ["Salvage of hypoxanthine by HGPRT","Conversion of IMP to AMP","Synthesis of carbamoyl phosphate","Conversion of UMP to dTMP","Reduction of ribonucleotides to deoxyribonucleotides"],
      correctIndex: 3,
      explanation: "Thymidylate synthase converts dUMP to dTMP using N5,N10-methylene-tetrahydrofolate as the methyl donor. DHFR regenerates tetrahydrofolate from dihydrofolate produced in this reaction. Without DHFR, tetrahydrofolate is depleted, and dTMP synthesis is severely impaired.",
      optionExplanations: ["Incorrect: HGPRT salvage of hypoxanthine uses PRPP and does not require folate cofactors.","Incorrect: IMP to AMP conversion requires aspartate and GTP but does not directly depend on tetrahydrofolate.","Incorrect: Carbamoyl phosphate synthesis requires glutamine and CO2 but not tetrahydrofolate.","Correct: dTMP synthesis by thymidylate synthase requires tetrahydrofolate as a cofactor; DHFR deficiency depletes THF.","Incorrect: Ribonucleotide reductase converts ribonucleotides to deoxyribonucleotides using thioredoxin, not folate."],
      highYieldPoint: "DHFR regenerates THF from DHF; THF is essential for dTMP synthesis (thymidylate synthase reaction)."
    },
    {
      vignette: "A scientist is investigating gene regulation and discovers that a specific histone modification at a gene promoter is associated with transcriptional silencing. This modification involves the addition of methyl groups to lysine residues on histone tails.",
      question: "Methylation of which histone residue is most commonly associated with transcriptional repression?",
      options: ["Histone H3 lysine 4 (H3K4)","Histone H3 serine 10 phosphorylation","Histone H3 lysine 36 (H3K36)","Histone H4 lysine 16 (H4K16) acetylation","Histone H3 lysine 9 (H3K9)"],
      correctIndex: 4,
      explanation: "Methylation of histone H3 at lysine 9 (H3K9me) is a hallmark of heterochromatin and transcriptional silencing. It recruits heterochromatin protein 1 (HP1), which compacts chromatin and prevents transcription factor access.",
      optionExplanations: ["Incorrect: H3K4 methylation is associated with active transcription and is found at active gene promoters.","Incorrect: H3S10 phosphorylation is involved in chromosome condensation during mitosis, not steady-state gene silencing.","Incorrect: H3K36 methylation is found in gene bodies of actively transcribed genes.","Incorrect: H4K16 acetylation is an activating mark that opens chromatin structure.","Correct: H3K9 methylation is a repressive mark associated with heterochromatin formation and gene silencing."],
      highYieldPoint: "H3K9 methylation = repression (heterochromatin); H3K4 methylation = activation (euchromatin)."
    },
    {
      vignette: "A 3-week-old male infant presents with poor feeding, lethargy, and seizures. Blood work reveals elevated orotic acid in the urine, hyperammonemia, and low blood urea nitrogen. The child's mother reports that an older male sibling died in infancy from a similar presentation.",
      question: "Which enzyme deficiency is most likely responsible for this presentation?",
      options: ["Ornithine transcarbamylase","Carbamoyl phosphate synthetase I","Argininosuccinate synthetase","Arginase","N-acetylglutamate synthase"],
      correctIndex: 0,
      explanation: "Ornithine transcarbamylase (OTC) deficiency is the most common urea cycle disorder and is X-linked recessive, explaining the male predominance and maternal carrier state. Excess carbamoyl phosphate is shunted to pyrimidine synthesis, resulting in elevated urinary orotic acid.",
      optionExplanations: ["Correct: OTC deficiency causes hyperammonemia with orotic aciduria; it is X-linked recessive, explaining the affected male siblings.","Incorrect: CPS I deficiency also causes hyperammonemia but does NOT produce elevated orotic acid because carbamoyl phosphate accumulation occurs within the mitochondria.","Incorrect: Argininosuccinate synthetase deficiency (citrullinemia) causes elevated citrulline, not characteristically orotic aciduria.","Incorrect: Arginase deficiency typically presents later with spastic diplegia, not neonatal hyperammonemia with orotic aciduria.","Incorrect: N-acetylglutamate synthase deficiency causes hyperammonemia but without elevated orotic acid."],
      highYieldPoint: "OTC deficiency = X-linked, hyperammonemia + orotic aciduria (carbamoyl phosphate diverted to pyrimidine synthesis)."
    },
    {
      vignette: "During a laboratory exercise, a student isolates mRNA from human liver cells and adds it to a cell-free translation system. She notices that translation initiates at a specific AUG codon. In eukaryotes, the small ribosomal subunit scans the mRNA from the 5' end to find this codon.",
      question: "Which of the following best describes the sequence context that facilitates recognition of the start codon in eukaryotic mRNA?",
      options: ["Shine-Dalgarno sequence","Kozak consensus sequence","Internal ribosome entry site only","Poly-A tail proximity","TATA box downstream element"],
      correctIndex: 1,
      explanation: "The Kozak consensus sequence (gcc(A/G)ccAUGG) surrounds the initiator AUG codon in eukaryotic mRNAs and facilitates its recognition by the scanning 40S ribosomal subunit. A purine at position -3 and G at position +4 are particularly important for efficient initiation.",
      optionExplanations: ["Incorrect: The Shine-Dalgarno sequence is a ribosome-binding site in prokaryotic mRNA, not eukaryotic.","Correct: The Kozak sequence surrounding the AUG start codon is essential for efficient eukaryotic translation initiation.","Incorrect: IRES elements allow cap-independent translation but are not the standard mechanism for most eukaryotic mRNAs.","Incorrect: The poly-A tail enhances mRNA stability and translation efficiency but does not directly identify the start codon.","Incorrect: The TATA box is a DNA promoter element for transcription, not a feature of mRNA translation."],
      highYieldPoint: "Kozak sequence (eukaryotic) vs. Shine-Dalgarno sequence (prokaryotic) for translation initiation."
    },
    {
      vignette: "A researcher studying cancer biology finds that a proto-oncogene in a tumor cell line has undergone a point mutation that converts it to an oncogene. The mutant protein product is constitutively active and cannot hydrolyze GTP.",
      question: "Which proto-oncogene is most likely mutated in this scenario?",
      options: ["MYC","RB1","RAS","p53","APC"],
      correctIndex: 2,
      explanation: "RAS proteins are GTPases that act as molecular switches in growth factor signaling. Oncogenic RAS mutations (commonly at codons 12, 13, or 61) impair GTPase activity, locking RAS in the GTP-bound active state and driving constitutive cell proliferation.",
      optionExplanations: ["Incorrect: MYC is a transcription factor proto-oncogene usually activated by translocation or amplification, not loss of GTPase activity.","Incorrect: RB1 is a tumor suppressor (not a proto-oncogene) that is inactivated by loss-of-function mutations.","Correct: RAS is a GTPase; oncogenic point mutations prevent GTP hydrolysis, leaving it constitutively active.","Incorrect: p53 is a tumor suppressor inactivated by mutations; it does not have GTPase activity.","Incorrect: APC is a tumor suppressor involved in Wnt signaling regulation and is not a GTPase."],
      highYieldPoint: "Oncogenic RAS mutations → impaired GTPase → constitutively active → uncontrolled growth signaling."
    },
    {
      vignette: "A medical student is reviewing the mechanism of action of fluoroquinolone antibiotics. These drugs target an enzyme essential for relieving torsional strain during bacterial DNA replication.",
      question: "Which enzyme is the primary target of fluoroquinolone antibiotics?",
      options: ["DNA ligase","DNA polymerase III","RNA primase","DNA gyrase (topoisomerase II)","Single-strand binding proteins"],
      correctIndex: 3,
      explanation: "Fluoroquinolones (e.g., ciprofloxacin, levofloxacin) inhibit bacterial DNA gyrase (topoisomerase II) and topoisomerase IV. DNA gyrase introduces negative supercoils to relieve positive supercoiling ahead of the replication fork, and its inhibition halts DNA replication.",
      optionExplanations: ["Incorrect: DNA ligase joins Okazaki fragments and is not inhibited by fluoroquinolones.","Incorrect: DNA polymerase III is the main replicative polymerase in bacteria but is not the target of fluoroquinolones.","Incorrect: RNA primase synthesizes RNA primers and is not targeted by fluoroquinolones.","Correct: Fluoroquinolones target DNA gyrase (topoisomerase II), preventing supercoil relief during replication.","Incorrect: Single-strand binding proteins stabilize ssDNA at the replication fork but are not enzyme targets of antibiotics."],
      highYieldPoint: "Fluoroquinolones inhibit DNA gyrase (topoisomerase II) in bacteria → block DNA replication."
    },
    {
      vignette: "A 25-year-old man participates in a clinical trial for an antisense oligonucleotide therapy. The drug is designed to bind to a specific mRNA and prevent its translation into protein.",
      question: "What is the primary mechanism by which antisense oligonucleotides reduce target protein levels?",
      options: ["Inhibition of RNA polymerase II binding to the promoter","Methylation of the target gene promoter","Blocking ribosomal subunit assembly at the 5' cap","Enhancing ubiquitin-mediated proteasomal degradation of the protein","Binding to complementary mRNA and promoting its degradation by RNase H"],
      correctIndex: 4,
      explanation: "Antisense oligonucleotides are short synthetic nucleic acids that hybridize to complementary mRNA sequences. The resulting DNA-RNA hybrid is recognized and cleaved by RNase H, leading to degradation of the target mRNA and reduced protein production.",
      optionExplanations: ["Incorrect: Antisense oligonucleotides act post-transcriptionally on mRNA, not at the level of transcription initiation.","Incorrect: Promoter methylation is an epigenetic mechanism unrelated to antisense oligonucleotide function.","Incorrect: While steric blocking of translation can occur with some modified antisense molecules, RNase H-mediated degradation is the primary classical mechanism.","Incorrect: Antisense oligonucleotides target mRNA, not the protein product directly.","Correct: Antisense oligonucleotides form DNA-RNA hybrids with target mRNA, triggering RNase H-mediated degradation."],
      highYieldPoint: "Antisense oligonucleotides bind complementary mRNA → RNase H cleaves the RNA in the DNA-RNA hybrid."
    }
  ],

  "Genetics & inheritance patterns": [
    {
      vignette: "A 5-year-old boy is brought to the pediatrician for progressive muscle weakness and difficulty climbing stairs. Physical examination shows calf pseudohypertrophy and a positive Gowers sign. Serum creatine kinase is markedly elevated at 15,000 U/L. His maternal uncle had a similar condition and died at age 20.",
      question: "What is the most likely inheritance pattern of this condition?",
      options: ["X-linked recessive","Autosomal dominant","Autosomal recessive","Mitochondrial","X-linked dominant"],
      correctIndex: 0,
      explanation: "Duchenne muscular dystrophy (DMD) is caused by mutations in the dystrophin gene on the X chromosome and follows X-linked recessive inheritance. The affected maternal uncle and the boy's presentation are classic for X-linked transmission through carrier mothers.",
      optionExplanations: ["Correct: DMD is X-linked recessive; affected males inherit the mutation from carrier mothers, and maternal uncles may also be affected.","Incorrect: Autosomal dominant conditions typically affect every generation with male-to-male transmission possible.","Incorrect: Autosomal recessive conditions affect both sexes equally and require two carrier parents.","Incorrect: Mitochondrial inheritance shows maternal transmission to all children, not selective male involvement.","Incorrect: X-linked dominant conditions would affect heterozygous females as well, which is not the typical DMD pattern."],
      highYieldPoint: "Duchenne muscular dystrophy = X-linked recessive; dystrophin gene deletion; affected boys + carrier mothers."
    },
    {
      vignette: "A couple seeks genetic counseling. The husband has autosomal recessive sickle cell disease (genotype HbSS), and the wife is a known carrier (genotype HbAS). They want to know the probability that their first child will have sickle cell disease.",
      question: "What is the probability that their child will have sickle cell disease?",
      options: ["100%","50%","25%","75%","0%"],
      correctIndex: 1,
      explanation: "The father is HbSS (can only pass HbS) and the mother is HbAS (passes HbA or HbS with equal probability). The cross is SS × AS, yielding 50% HbSS (disease) and 50% HbAS (carrier). Therefore, there is a 50% chance the child will have sickle cell disease.",
      optionExplanations: ["Incorrect: 100% would require both parents to be HbSS.","Correct: SS × AS cross → 50% HbSS (affected) and 50% HbAS (carrier).","Incorrect: 25% would be expected if both parents were carriers (AS × AS).","Incorrect: 75% is not consistent with any standard Mendelian cross for this condition.","Incorrect: 0% is impossible since the father can only pass HbS alleles."],
      highYieldPoint: "HbSS × HbAS → 50% affected (HbSS), 50% carrier (HbAS)."
    },
    {
      vignette: "A 30-year-old woman is diagnosed with bilateral renal cell carcinoma and retinal hemangioblastomas. Genetic testing reveals a germline mutation in the VHL gene on chromosome 3p. Her father died of cerebellar hemangioblastoma at age 45.",
      question: "Which genetic concept best explains why this patient developed tumors despite having one functional copy of the VHL gene at birth?",
      options: ["Anticipation","Genomic imprinting","Loss of heterozygosity","Mosaicism","Uniparental disomy"],
      correctIndex: 2,
      explanation: "Von Hippel-Lindau (VHL) syndrome follows the two-hit hypothesis for tumor suppressor genes. The patient inherits one mutated allele (first hit), and somatic loss of heterozygosity (LOH) in the remaining normal allele (second hit) leads to complete loss of VHL function and tumor development.",
      optionExplanations: ["Incorrect: Anticipation refers to increasing severity or earlier onset in successive generations, typically seen in trinucleotide repeat disorders.","Incorrect: Genomic imprinting involves silencing of one parental allele but is not the mechanism underlying VHL-related tumors.","Correct: Loss of heterozygosity (second hit) in the remaining wild-type VHL allele leads to tumor development per Knudson's two-hit hypothesis.","Incorrect: Mosaicism refers to different cell lineages with different genotypes within one organism.","Incorrect: Uniparental disomy means inheriting both copies of a chromosome from one parent, which is not the mechanism here."],
      highYieldPoint: "Tumor suppressor genes require two hits (Knudson hypothesis): inherited mutation + somatic loss of heterozygosity."
    },
    {
      vignette: "A 7-year-old girl is brought to the genetics clinic for intellectual disability and seizures. Her karyotype is normal (46,XX), but methylation-specific PCR testing reveals absence of the maternal contribution at chromosome 15q11-q13. Her mother's karyotype is also normal.",
      question: "Which diagnosis is most consistent with these findings?",
      options: ["Prader-Willi syndrome","Cri-du-chat syndrome","Turner syndrome","Angelman syndrome","Williams syndrome"],
      correctIndex: 3,
      explanation: "Angelman syndrome results from loss of functional UBE3A, which is maternally expressed at 15q11-q13 due to genomic imprinting. Absence of the maternal contribution on methylation testing (with normal karyotype) is diagnostic. Patients present with intellectual disability, seizures, ataxia, and a characteristic happy demeanor.",
      optionExplanations: ["Incorrect: Prader-Willi syndrome results from loss of the paternal contribution at 15q11-q13, not the maternal contribution.","Incorrect: Cri-du-chat syndrome involves deletion of 5p and presents with a high-pitched cry, not this pattern.","Incorrect: Turner syndrome (45,X) involves a missing X chromosome, and this patient has a normal 46,XX karyotype.","Correct: Angelman syndrome = loss of maternal 15q11-q13 expression; presents with seizures, intellectual disability, and happy disposition.","Incorrect: Williams syndrome involves microdeletion of 7q11.23 and presents with elfin facies and supravalvular aortic stenosis."],
      highYieldPoint: "Angelman syndrome = loss of maternal UBE3A at 15q11-q13; Prader-Willi = loss of paternal contribution at same locus."
    },
    {
      vignette: "A 22-year-old man presents with a marfanoid body habitus, lens subluxation, and intellectual disability. Urine testing reveals elevated homocysteine levels. The patient's parents are first cousins.",
      question: "Which enzyme deficiency is most likely responsible for this patient's condition?",
      options: ["Phenylalanine hydroxylase","Methionine synthase","Branched-chain α-ketoacid dehydrogenase","Homogentisic acid oxidase","Cystathionine β-synthase"],
      correctIndex: 4,
      explanation: "Classic homocystinuria is caused by deficiency of cystathionine β-synthase (CBS), inherited in autosomal recessive fashion (consistent with consanguineous parents). It causes elevated homocysteine, leading to marfanoid habitus, downward lens subluxation, intellectual disability, and thromboembolism risk.",
      optionExplanations: ["Incorrect: Phenylalanine hydroxylase deficiency causes phenylketonuria (PKU), presenting with intellectual disability and musty body odor, not marfanoid habitus or lens subluxation.","Incorrect: Methionine synthase deficiency can cause mild homocystinuria but does not present with this classic triad.","Incorrect: Branched-chain α-ketoacid dehydrogenase deficiency causes maple syrup urine disease, not homocystinuria.","Incorrect: Homogentisic acid oxidase deficiency causes alkaptonuria (dark urine, ochronosis), not this presentation.","Correct: CBS deficiency causes classic homocystinuria with marfanoid habitus, downward lens subluxation, intellectual disability, and thromboembolism."],
      highYieldPoint: "Homocystinuria (CBS deficiency): marfanoid habitus + downward lens subluxation + intellectual disability + thrombosis risk."
    },
    {
      vignette: "A 40-year-old man begins to develop involuntary choreiform movements and personality changes. His father developed similar symptoms at age 42. Genetic testing reveals 45 CAG repeats in the HTT gene on chromosome 4.",
      question: "Which phenomenon explains why this patient's children may develop symptoms at an even earlier age?",
      options: ["Anticipation","Incomplete penetrance","Variable expressivity","Pleiotropy","Epistasis"],
      correctIndex: 0,
      explanation: "Anticipation refers to the tendency of trinucleotide repeat disorders to show earlier onset and increased severity in successive generations due to expansion of the repeat during meiosis. In Huntington disease, CAG repeat expansion during paternal transmission is particularly prominent.",
      optionExplanations: ["Correct: Anticipation occurs when trinucleotide repeats expand across generations, leading to earlier and more severe disease.","Incorrect: Incomplete penetrance means not all carriers show the phenotype, but Huntington disease with 45 CAG repeats is essentially fully penetrant.","Incorrect: Variable expressivity means different individuals with the same mutation show different severity, but does not specifically explain earlier onset in successive generations.","Incorrect: Pleiotropy means one gene affects multiple organ systems, which is true of HTT but does not explain generational worsening.","Incorrect: Epistasis is interaction between different genes influencing a phenotype."],
      highYieldPoint: "Anticipation = trinucleotide repeat expansion across generations → earlier onset; classic in Huntington disease (CAG repeats)."
    },
    {
      vignette: "A couple has a child with cystic fibrosis. Both parents are unaffected. They have three other children who are also unaffected. The couple wants to know the probability that one of their unaffected children is a carrier.",
      question: "What is the probability that an unaffected sibling of the affected child is a carrier of the CFTR mutation?",
      options: ["1/4","2/3","1/2","3/4","1/3"],
      correctIndex: 1,
      explanation: "Both parents must be carriers (Aa × Aa). Expected offspring ratios are 1/4 AA, 2/4 Aa, 1/4 aa. Since an unaffected child is NOT aa, we consider only AA and Aa, totaling 3/4 of offspring. Among these, 2/4 are carriers (Aa). Thus P(carrier | unaffected) = (2/4)/(3/4) = 2/3.",
      optionExplanations: ["Incorrect: 1/4 is the overall probability of an affected child, not the carrier probability among unaffected siblings.","Correct: Among unaffected offspring of two carriers, 2/3 are carriers (Bayesian reasoning: 2 Aa out of 3 non-aa outcomes).","Incorrect: 1/2 is the raw proportion of heterozygotes in the total offspring but does not account for the condition of being unaffected.","Incorrect: 3/4 is the probability of being unaffected, not the carrier probability.","Incorrect: 1/3 is the probability of being homozygous normal (AA) among unaffected siblings."],
      highYieldPoint: "For AR disease: probability unaffected sibling is a carrier = 2/3 (Bayesian conditional probability)."
    },
    {
      vignette: "A family is evaluated for a hearing loss condition that appears in every generation. Affected fathers pass the trait to all daughters but no sons. Affected mothers pass the trait to approximately half of all children regardless of sex.",
      question: "What is the most likely inheritance pattern?",
      options: ["Autosomal dominant","Autosomal recessive","X-linked dominant","X-linked recessive","Mitochondrial"],
      correctIndex: 2,
      explanation: "X-linked dominant inheritance explains this pattern: affected fathers (XᴬY) pass the X to all daughters (who are all affected) and the Y to all sons (who are unaffected). Affected mothers (XᴬX) pass the affected X to 50% of children regardless of sex.",
      optionExplanations: ["Incorrect: Autosomal dominant would show father-to-son transmission, which is absent here.","Incorrect: Autosomal recessive traits often skip generations and require two carrier parents.","Correct: X-linked dominant: affected fathers → all daughters affected, no sons; affected mothers → 50% of all children.","Incorrect: X-linked recessive primarily affects males, and carrier mothers pass to sons; fathers cannot pass X-linked recessive to daughters (who would be carriers, not affected).","Incorrect: Mitochondrial inheritance would show maternal transmission to ALL children, not the sex-dependent pattern described."],
      highYieldPoint: "X-linked dominant: affected father → all daughters affected, no sons; no male-to-male transmission."
    },
    {
      vignette: "A 2-year-old boy presents with coarse facial features, hepatosplenomegaly, and skeletal abnormalities. Enzyme analysis reveals deficiency of multiple lysosomal enzymes in the serum, but their activity is elevated in the blood. Fibroblast analysis shows absence of mannose-6-phosphate tags on lysosomal enzymes.",
      question: "Which enzyme is most likely deficient in this patient?",
      options: ["Hexosaminidase A","α-L-iduronidase","Sphingomyelinase","N-acetylglucosamine-1-phosphotransferase","β-glucocerebrosidase"],
      correctIndex: 3,
      explanation: "I-cell disease (mucolipidosis II) is caused by deficiency of N-acetylglucosamine-1-phosphotransferase, which is needed to add mannose-6-phosphate (M6P) tags to lysosomal enzymes in the Golgi. Without M6P tags, enzymes are secreted extracellularly instead of being targeted to lysosomes.",
      optionExplanations: ["Incorrect: Hexosaminidase A deficiency causes Tay-Sachs disease, a single enzyme disorder with cherry-red spot.","Incorrect: α-L-iduronidase deficiency causes Hurler syndrome, a mucopolysaccharidosis with a single enzyme deficiency.","Incorrect: Sphingomyelinase deficiency causes Niemann-Pick disease type A.","Correct: Deficiency of N-acetylglucosamine-1-phosphotransferase → absent M6P tags → I-cell disease with multiple lysosomal enzyme deficiency.","Incorrect: β-Glucocerebrosidase deficiency causes Gaucher disease."],
      highYieldPoint: "I-cell disease = defective phosphotransferase → no M6P tags → lysosomal enzymes secreted extracellularly."
    },
    {
      vignette: "A previously healthy 35-year-old woman of Ashkenazi Jewish descent presents with easy bruising and splenomegaly. Bone marrow biopsy shows macrophages with a distinctive wrinkled-paper (crinkled tissue paper) appearance. Enzyme assay confirms reduced β-glucocerebrosidase activity.",
      question: "What is the inheritance pattern of this condition?",
      options: ["Autosomal dominant","X-linked dominant","X-linked recessive","Mitochondrial","Autosomal recessive"],
      correctIndex: 4,
      explanation: "Gaucher disease is the most common lysosomal storage disorder and is inherited in an autosomal recessive pattern. It is especially prevalent in the Ashkenazi Jewish population. The characteristic Gaucher cells (lipid-laden macrophages with crinkled tissue paper appearance) are pathognomonic.",
      optionExplanations: ["Incorrect: Autosomal dominant conditions typically present in every generation; lysosomal storage diseases are almost all autosomal recessive.","Incorrect: X-linked dominant conditions show the characteristic pattern of no male-to-male transmission and all daughters of affected fathers being affected.","Incorrect: X-linked recessive conditions primarily affect males; Gaucher disease affects both sexes equally.","Incorrect: Mitochondrial inheritance would show maternal transmission only.","Correct: Gaucher disease is autosomal recessive, with high carrier frequency in Ashkenazi Jewish populations."],
      highYieldPoint: "Gaucher disease (AR): β-glucocerebrosidase deficiency → glucocerebroside accumulation → crinkled tissue paper macrophages."
    },
    {
      vignette: "A woman with a mitochondrial DNA mutation causing Leber hereditary optic neuropathy (LHON) marries an unaffected man. They are concerned about the risk to their children.",
      question: "What is the expected pattern of inheritance for their children?",
      options: ["All children will carry the mutation but penetrance may vary","Only sons will be affected","Only daughters will be affected","All children will be affected","50% of children will carry the mutation"],
      correctIndex: 0,
      explanation: "Mitochondrial DNA is inherited exclusively from the mother. All children of an affected woman will inherit the mitochondrial mutation. However, clinical expression (penetrance) varies due to heteroplasmy — the proportion of mutant vs. normal mitochondria in different tissues.",
      optionExplanations: ["Correct: All children inherit maternal mitochondrial DNA, but variable heteroplasmy causes incomplete penetrance.","Incorrect: Mitochondrial inheritance does not show sex-specific transmission; both sons and daughters inherit mitochondrial DNA from the mother.","Incorrect: Both sexes inherit mitochondrial DNA equally from the mother.","Incorrect: While all children inherit the mutation, not all will necessarily show clinical disease due to variable penetrance.","Incorrect: Unlike nuclear genes, mitochondrial DNA is not subject to Mendelian 50/50 segregation; all mitochondria come from the ovum."],
      highYieldPoint: "Mitochondrial inheritance: maternal transmission to all children; variable expressivity due to heteroplasmy."
    },
    {
      vignette: "A newborn screening test reveals elevated phenylalanine levels in a 3-day-old infant. Confirmatory testing shows phenylalanine levels of 25 mg/dL (normal <2). The infant is started on a phenylalanine-restricted diet with tyrosine supplementation. The parents are both unaffected.",
      question: "If this couple has another child, what is the probability that the second child will also be affected?",
      options: ["0%","25%","50%","75%","100%"],
      correctIndex: 1,
      explanation: "Phenylketonuria (PKU) is autosomal recessive. Both unaffected parents must be carriers (heterozygotes). With each pregnancy, there is a 1/4 (25%) chance the child will be affected (homozygous), regardless of the status of previous children.",
      optionExplanations: ["Incorrect: There is always a risk when both parents are carriers of an autosomal recessive condition.","Correct: For autosomal recessive conditions, carrier × carrier → 25% chance of affected child per pregnancy.","Incorrect: 50% is the probability seen in autosomal dominant or X-linked recessive (carrier mother, affected trait in sons).","Incorrect: 75% is the probability of being unaffected (either carrier or homozygous normal), not affected.","Incorrect: 100% would only occur if both parents were homozygous affected."],
      highYieldPoint: "PKU is autosomal recessive; two carrier parents → 25% risk per pregnancy for an affected child."
    },
    {
      vignette: "A 16-year-old girl presents with primary amenorrhea, short stature, and a webbed neck. Karyotype analysis reveals 45,X. Echocardiogram shows a bicuspid aortic valve.",
      question: "Which of the following additional findings is most likely in this patient?",
      options: ["Intellectual disability","Tall stature with long limbs","Streak gonads","Ambiguous genitalia","Precocious puberty"],
      correctIndex: 2,
      explanation: "Turner syndrome (45,X) is characterized by streak gonads (fibrous tissue replacing ovarian parenchyma), leading to primary amenorrhea and infertility. Other features include short stature, webbed neck, shield chest, coarctation of the aorta, bicuspid aortic valve, and horseshoe kidney. Intelligence is typically normal.",
      optionExplanations: ["Incorrect: Turner syndrome patients typically have normal intelligence, though they may have difficulty with spatial processing.","Incorrect: Turner syndrome patients have short stature, not tall stature.","Correct: Streak gonads are a hallmark of Turner syndrome, causing gonadal dysgenesis, primary amenorrhea, and infertility.","Incorrect: External genitalia in Turner syndrome are typically female without ambiguity.","Incorrect: Turner syndrome patients have delayed or absent puberty due to gonadal dysgenesis, not precocious puberty."],
      highYieldPoint: "Turner syndrome (45,X): streak gonads, primary amenorrhea, short stature, webbed neck, bicuspid aortic valve, coarctation."
    },
    {
      vignette: "A 28-year-old man and his wife, who are both phenotypically normal, have a child with albinism. The man's brother also has albinism. Genetic testing confirms both parents are carriers for oculocutaneous albinism type 1.",
      question: "What is the probability that their next child will be a phenotypically normal carrier?",
      options: ["1/4","3/4","2/3","1/2","1/3"],
      correctIndex: 3,
      explanation: "For an autosomal recessive cross (Aa × Aa), the expected offspring ratios are 1/4 AA : 2/4 Aa : 1/4 aa. The probability of being a carrier (Aa) is 2/4 = 1/2.",
      optionExplanations: ["Incorrect: 1/4 is the probability of being homozygous normal (AA) or homozygous affected (aa).","Incorrect: 3/4 is the probability of being phenotypically normal (AA + Aa combined).","Incorrect: 2/3 is the probability of being a carrier GIVEN that the child is unaffected, not the unconditional carrier probability.","Correct: Aa × Aa → 50% chance of carrier (heterozygous Aa) offspring.","Incorrect: 1/3 is not the correct probability for any standard outcome in this cross."],
      highYieldPoint: "AR carrier cross (Aa × Aa): 25% AA, 50% Aa (carrier), 25% aa (affected)."
    },
    {
      vignette: "A family is found to have a condition in which affected individuals have a deletion on chromosome 15q11-q13. When the deletion is inherited from the father, the child presents with hypotonia, obesity, hypogonadism, and intellectual disability. When the same deletion is inherited from the mother, the child presents with severe intellectual disability, seizures, and ataxic gait with hand flapping.",
      question: "Which genetic phenomenon best explains why the same deletion produces different phenotypes depending on the parent of origin?",
      options: ["Incomplete penetrance","Variable expressivity","Locus heterogeneity","Anticipation","Genomic imprinting"],
      correctIndex: 4,
      explanation: "Genomic imprinting is an epigenetic phenomenon in which certain genes are expressed from only one parental allele while the other is silenced by DNA methylation. At 15q11-q13, paternal deletion → Prader-Willi syndrome (paternal genes silenced), and maternal deletion → Angelman syndrome (maternal UBE3A lost).",
      optionExplanations: ["Incorrect: Incomplete penetrance means some individuals with the genotype do not express the phenotype; it does not explain parent-of-origin effects.","Incorrect: Variable expressivity means different severity of the same condition, not entirely different phenotypes based on parental origin.","Incorrect: Locus heterogeneity means different genes causing the same phenotype, not one locus causing different phenotypes.","Incorrect: Anticipation refers to worsening severity across generations in trinucleotide repeat disorders.","Correct: Genomic imprinting causes parent-of-origin-specific gene expression, explaining different phenotypes from the same deletion."],
      highYieldPoint: "Genomic imprinting at 15q11-q13: paternal deletion → Prader-Willi; maternal deletion → Angelman syndrome."
    }
  ],

  "Carbohydrate metabolism": [
    {
      vignette: "A 3-day-old neonate develops jaundice, hepatomegaly, and hypoglycemia after breastfeeding is initiated. The infant also has bilateral cataracts on ophthalmologic examination. Urine reducing substances are positive, but urine glucose test is negative.",
      question: "Which enzyme deficiency is most likely responsible for this presentation?",
      options: ["Galactose-1-phosphate uridylyltransferase","Galactokinase","UDP-galactose-4-epimerase","Aldolase B","Fructokinase"],
      correctIndex: 0,
      explanation: "Classic galactosemia is caused by deficiency of galactose-1-phosphate uridylyltransferase (GALT). It presents in neonates after milk ingestion with jaundice, hepatomegaly, cataracts, intellectual disability risk, and E. coli sepsis. Urine has reducing substances (galactose) but negative glucose test.",
      optionExplanations: ["Correct: GALT deficiency (classic galactosemia) causes the complete triad of cataracts, hepatomegaly/jaundice, and intellectual disability in neonates exposed to galactose.","Incorrect: Galactokinase deficiency causes galactosemia with cataracts only (milder form), without the hepatomegaly and jaundice.","Incorrect: UDP-galactose-4-epimerase deficiency is extremely rare and typically milder.","Incorrect: Aldolase B deficiency causes hereditary fructose intolerance, triggered by fructose/sucrose, not galactose from milk.","Incorrect: Fructokinase deficiency causes essential fructosuria, a benign condition."],
      highYieldPoint: "Classic galactosemia (GALT deficiency): cataracts + hepatomegaly + jaundice + E. coli sepsis after milk exposure."
    },
    {
      vignette: "A 6-month-old infant presents with severe fasting hypoglycemia, hepatomegaly, lactic acidosis, hyperuricemia, and hyperlipidemia. A liver biopsy shows massive glycogen accumulation. Glucagon stimulation test fails to raise blood glucose.",
      question: "Which enzyme deficiency is most likely responsible?",
      options: ["Myophosphorylase","Glucose-6-phosphatase","Acid maltase (α-1,4-glucosidase)","Debranching enzyme","Liver phosphorylase"],
      correctIndex: 1,
      explanation: "Von Gierke disease (glycogen storage disease type I) is caused by glucose-6-phosphatase deficiency. The liver cannot release free glucose from glycogenolysis or gluconeogenesis, causing severe fasting hypoglycemia, hepatomegaly, lactic acidosis, hyperuricemia, and hyperlipidemia.",
      optionExplanations: ["Incorrect: Myophosphorylase deficiency (McArdle disease/GSD V) affects skeletal muscle, not liver, and presents with exercise intolerance.","Correct: Glucose-6-phosphatase deficiency (von Gierke disease/GSD I) causes severe fasting hypoglycemia with hepatomegaly and lactic acidosis.","Incorrect: Acid maltase deficiency (Pompe disease/GSD II) causes cardiomegaly and hypotonia, not primarily hepatic disease.","Incorrect: Debranching enzyme deficiency (Cori disease/GSD III) has milder fasting hypoglycemia and does not cause lactic acidosis or hyperuricemia to this degree.","Incorrect: Liver phosphorylase deficiency (Hers disease/GSD VI) causes mild hepatomegaly and hypoglycemia, much milder than this presentation."],
      highYieldPoint: "Von Gierke disease (GSD I): glucose-6-phosphatase deficiency → severe fasting hypoglycemia + hepatomegaly + lactic acidosis + hyperuricemia."
    },
    {
      vignette: "A 25-year-old man experiences muscle cramps, myoglobinuria, and fatigue during intense exercise. He reports a second wind phenomenon after several minutes of continued activity. Serum creatine kinase is elevated after exercise. An ischemic forearm exercise test shows failure of blood lactate to rise.",
      question: "Which enzyme is most likely deficient in this patient?",
      options: ["Glucose-6-phosphatase","Liver phosphorylase","Myophosphorylase (muscle glycogen phosphorylase)","Pyruvate kinase","Phosphofructokinase-1"],
      correctIndex: 2,
      explanation: "McArdle disease (GSD V) is caused by myophosphorylase deficiency. Patients cannot break down glycogen in muscle, leading to exercise intolerance, myoglobinuria, and failure of lactate to rise during ischemic forearm testing. The second wind phenomenon occurs as fatty acid oxidation increases.",
      optionExplanations: ["Incorrect: Glucose-6-phosphatase is a liver/kidney enzyme; its deficiency causes von Gierke disease with hepatic symptoms.","Incorrect: Liver phosphorylase deficiency affects glycogenolysis in the liver, not skeletal muscle.","Correct: Myophosphorylase deficiency (McArdle disease) causes exercise-induced cramps, myoglobinuria, and flat lactate on ischemic forearm test.","Incorrect: Pyruvate kinase deficiency classically causes hemolytic anemia, not exercise-induced myopathy.","Incorrect: PFK-1 deficiency (Tarui disease/GSD VII) can present similarly but is rarer; McArdle is the classic answer for this presentation."],
      highYieldPoint: "McArdle disease (GSD V): myophosphorylase deficiency → exercise cramps + myoglobinuria + flat lactate on forearm test + second wind."
    },
    {
      vignette: "A 1-year-old child is brought to the emergency department with vomiting, lethargy, and hypoglycemia after being introduced to fruits and table sugar in the diet. Liver function tests are abnormal. The child was asymptomatic while exclusively breastfed.",
      question: "Which enzyme deficiency is most likely responsible for this patient's symptoms?",
      options: ["Fructokinase","Sucrase-isomaltase","Galactose-1-phosphate uridylyltransferase","Aldolase B","Glucose-6-phosphatase"],
      correctIndex: 3,
      explanation: "Hereditary fructose intolerance (HFI) is caused by aldolase B deficiency. Fructose-1-phosphate accumulates in the liver, trapping phosphate and inhibiting glycogenolysis and gluconeogenesis, leading to hypoglycemia, vomiting, and liver damage upon fructose/sucrose exposure.",
      optionExplanations: ["Incorrect: Fructokinase deficiency causes essential fructosuria, a benign asymptomatic condition.","Incorrect: Sucrase-isomaltase deficiency causes osmotic diarrhea but not hypoglycemia or liver damage.","Incorrect: GALT deficiency causes galactosemia triggered by milk/lactose, not by fruits or table sugar.","Correct: Aldolase B deficiency causes hereditary fructose intolerance with hypoglycemia and hepatotoxicity upon fructose ingestion.","Incorrect: Glucose-6-phosphatase deficiency (von Gierke) causes fasting hypoglycemia unrelated to fructose introduction."],
      highYieldPoint: "Hereditary fructose intolerance (aldolase B deficiency): hypoglycemia + liver damage after fructose/sucrose; treat by avoiding fructose."
    },
    {
      vignette: "A 45-year-old man with poorly controlled type 2 diabetes has his HbA1c measured at 9.5%. His physician explains that this test reflects his average blood glucose over the past 2-3 months.",
      question: "Which biochemical reaction is responsible for the formation of HbA1c?",
      options: ["Enzymatic glycosylation","Acetylation","Oxidative phosphorylation","Ubiquitination","Non-enzymatic glycation (glycosylation)"],
      correctIndex: 4,
      explanation: "HbA1c is formed by non-enzymatic glycation, in which glucose spontaneously attaches to the N-terminal valine of the hemoglobin β-chain without enzyme involvement. The amount of HbA1c is proportional to average blood glucose over the lifespan of red blood cells (~120 days).",
      optionExplanations: ["Incorrect: Enzymatic glycosylation (N-linked and O-linked) occurs in the ER/Golgi during protein processing, not on hemoglobin in RBCs.","Incorrect: Acetylation modifies lysine residues on histones and other proteins but does not involve glucose.","Incorrect: Oxidative phosphorylation is ATP production in mitochondria and is unrelated to HbA1c formation.","Incorrect: Ubiquitination tags proteins for proteasomal degradation and is unrelated to glucose attachment.","Correct: HbA1c forms via non-enzymatic glycation (Amadori rearrangement) proportional to ambient glucose concentration."],
      highYieldPoint: "HbA1c = non-enzymatic glycation of hemoglobin; reflects average glucose over ~2-3 months (RBC lifespan)."
    },
    {
      vignette: "A researcher is studying the regulation of glycolysis. She adds high concentrations of citrate to a liver cell extract and observes marked inhibition of a key glycolytic enzyme.",
      question: "Which glycolytic enzyme is most directly inhibited by citrate?",
      options: ["Phosphofructokinase-1 (PFK-1)","Glucokinase","Hexokinase","Pyruvate kinase","Pyruvate dehydrogenase"],
      correctIndex: 0,
      explanation: "Phosphofructokinase-1 (PFK-1) is the rate-limiting enzyme of glycolysis and is allosterically inhibited by citrate and ATP (indicating sufficient energy). Citrate accumulates when the TCA cycle is saturated, signaling the cell to reduce glycolytic flux.",
      optionExplanations: ["Correct: PFK-1, the committed step of glycolysis, is allosterically inhibited by citrate and ATP.","Incorrect: Glucokinase is not inhibited by glucose-6-phosphate and is not significantly regulated by citrate.","Incorrect: Hexokinase is inhibited by its product glucose-6-phosphate, not by citrate.","Incorrect: Pyruvate kinase is inhibited by ATP and alanine, not primarily by citrate.","Incorrect: Pyruvate dehydrogenase is inhibited by acetyl-CoA, NADH, and ATP, but it is not a glycolytic enzyme (it links glycolysis to the TCA cycle)."],
      highYieldPoint: "PFK-1 is the rate-limiting step of glycolysis; inhibited by ATP and citrate; activated by AMP and fructose-2,6-bisphosphate."
    },
    {
      vignette: "A 50-year-old man with a history of chronic alcohol use presents with lactic acidosis. His physician explains that excess NADH produced from ethanol metabolism shifts the equilibrium of a key reaction in the liver.",
      question: "Which metabolic consequence is most directly caused by the elevated NADH/NAD+ ratio from alcohol metabolism?",
      options: ["Increased gluconeogenesis","Conversion of pyruvate to lactate","Increased fatty acid oxidation","Enhanced glycogenolysis","Stimulation of the TCA cycle"],
      correctIndex: 1,
      explanation: "Alcohol dehydrogenase and aldehyde dehydrogenase generate excess NADH during ethanol metabolism. The elevated NADH/NAD+ ratio drives lactate dehydrogenase to convert pyruvate to lactate, causing lactic acidosis and simultaneously inhibiting gluconeogenesis.",
      optionExplanations: ["Incorrect: Gluconeogenesis is inhibited by high NADH/NAD+ ratio because it shifts oxaloacetate to malate, depleting gluconeogenic substrates.","Correct: Excess NADH drives the LDH reaction toward lactate production: pyruvate + NADH → lactate + NAD+.","Incorrect: Fatty acid oxidation is inhibited by high NADH, promoting fatty acid synthesis and contributing to fatty liver.","Incorrect: Glycogenolysis is not directly enhanced by the NADH/NAD+ ratio.","Incorrect: The TCA cycle is inhibited by high NADH levels, not stimulated."],
      highYieldPoint: "Alcohol metabolism → ↑NADH/NAD+ → pyruvate → lactate (lactic acidosis) + inhibited gluconeogenesis → hypoglycemia."
    },
    {
      vignette: "A 30-year-old African American man develops acute hemolytic anemia after being prescribed primaquine for malaria prophylaxis. Peripheral blood smear shows bite cells and Heinz bodies.",
      question: "Deficiency of which enzyme is most likely responsible for this patient's hemolysis?",
      options: ["Pyruvate kinase","Transketolase","Glucose-6-phosphate dehydrogenase","Phosphogluconate dehydrogenase","Glutathione peroxidase"],
      correctIndex: 2,
      explanation: "Glucose-6-phosphate dehydrogenase (G6PD) deficiency is the most common enzymopathy worldwide. G6PD is the rate-limiting enzyme of the pentose phosphate pathway, generating NADPH needed for glutathione reduction. Without NADPH, RBCs cannot neutralize oxidative stress from drugs like primaquine, leading to hemolysis with Heinz bodies and bite cells.",
      optionExplanations: ["Incorrect: Pyruvate kinase deficiency causes chronic hemolytic anemia but is not triggered by oxidative drugs and does not produce Heinz bodies.","Incorrect: Transketolase is a thiamine-dependent enzyme in the PPP but is not the rate-limiting step and its deficiency does not cause hemolysis.","Correct: G6PD deficiency → inadequate NADPH → impaired glutathione reduction → oxidative hemolysis with Heinz bodies and bite cells.","Incorrect: Phosphogluconate dehydrogenase is the second NADPH-producing step of the PPP but is not the classic enzyme associated with this presentation.","Incorrect: Glutathione peroxidase deficiency could theoretically impair RBC antioxidant defense, but G6PD deficiency is the classic and most common cause."],
      highYieldPoint: "G6PD deficiency (X-linked): oxidative stress triggers (primaquine, fava beans, infections) → Heinz bodies + bite cells → hemolysis."
    },
    {
      vignette: "A 55-year-old woman with metastatic colon cancer is started on 5-fluorouracil (5-FU) chemotherapy. Her oncologist explains that this drug inhibits a key enzyme involved in nucleotide synthesis.",
      question: "Which enzyme is directly inhibited by the active metabolite of 5-fluorouracil?",
      options: ["Dihydrofolate reductase","IMP dehydrogenase","Ribonucleotide reductase","Thymidylate synthase","CTP synthase"],
      correctIndex: 3,
      explanation: "5-FU is converted to 5-FdUMP, which irreversibly inhibits thymidylate synthase by forming a covalent ternary complex with the enzyme and N5,N10-methylene-THF. This blocks conversion of dUMP to dTMP, impairing DNA synthesis and causing cell death.",
      optionExplanations: ["Incorrect: Dihydrofolate reductase is the target of methotrexate and trimethoprim, not 5-FU.","Incorrect: IMP dehydrogenase is the target of mycophenolate, not 5-FU.","Incorrect: Ribonucleotide reductase is the target of hydroxyurea, not 5-FU.","Correct: 5-FdUMP (active metabolite of 5-FU) irreversibly inhibits thymidylate synthase, blocking dTMP synthesis.","Incorrect: CTP synthase is not the primary target of 5-FU."],
      highYieldPoint: "5-FU → 5-FdUMP → inhibits thymidylate synthase → blocks dTMP synthesis → impairs DNA replication."
    },
    {
      vignette: "A well-nourished medical student skips meals for 16 hours during a long study session. Blood tests drawn at this time show mildly decreased serum glucose but no hypoglycemic symptoms.",
      question: "Which metabolic process is the primary source of blood glucose maintenance at 16 hours of fasting?",
      options: ["Glycogenolysis","Glycolysis","Lipolysis","Ketogenesis","Gluconeogenesis"],
      correctIndex: 4,
      explanation: "After approximately 12-16 hours of fasting, hepatic glycogen stores are largely depleted. Gluconeogenesis in the liver (and to a lesser extent the kidneys) becomes the primary pathway for maintaining blood glucose, using substrates such as lactate, glycerol, and amino acids (especially alanine).",
      optionExplanations: ["Incorrect: Glycogenolysis is the primary source in the first 12 hours but glycogen stores are significantly depleted by 16 hours.","Incorrect: Glycolysis consumes glucose rather than producing it.","Incorrect: Lipolysis provides fatty acids and glycerol; glycerol can feed gluconeogenesis, but lipolysis itself does not directly produce glucose.","Incorrect: Ketogenesis provides alternative fuel for the brain during prolonged fasting but does not produce glucose.","Correct: Gluconeogenesis takes over as the primary glucose source after ~12-16 hours of fasting as glycogen stores deplete."],
      highYieldPoint: "Fasting timeline: 0-12h → glycogenolysis; >12-16h → gluconeogenesis dominates; >2-3 days → ketone bodies become major brain fuel."
    },
    {
      vignette: "A researcher discovers that a novel compound activates pyruvate dehydrogenase (PDH) complex in cultured hepatocytes. She observes increased production of a two-carbon molecule that enters the citric acid cycle.",
      question: "Which of the following is a required cofactor for the pyruvate dehydrogenase complex?",
      options: ["Thiamine pyrophosphate (TPP)","Biotin","Vitamin B12","Tetrahydrobiopterin","S-adenosylmethionine"],
      correctIndex: 0,
      explanation: "The pyruvate dehydrogenase complex requires five cofactors: thiamine pyrophosphate (TPP/B1), lipoic acid, CoA (from pantothenate/B5), FAD (from riboflavin/B2), and NAD+ (from niacin/B3). TPP is essential for the decarboxylation step catalyzed by the E1 component.",
      optionExplanations: ["Correct: TPP (thiamine/B1) is required for the oxidative decarboxylation of pyruvate by the PDH complex.","Incorrect: Biotin is a cofactor for carboxylases (pyruvate carboxylase, acetyl-CoA carboxylase), not the PDH complex.","Incorrect: Vitamin B12 is a cofactor for methylmalonyl-CoA mutase and methionine synthase, not the PDH complex.","Incorrect: Tetrahydrobiopterin (BH4) is a cofactor for phenylalanine hydroxylase and other aromatic amino acid hydroxylases.","Incorrect: S-adenosylmethionine is a universal methyl donor, not a PDH cofactor."],
      highYieldPoint: "PDH complex cofactors: Thiamine (B1), Lipoic acid, CoA (B5), FAD (B2), NAD+ (B3) — mnemonic: 'Tender Loving Care For Nancy.'"
    },
    {
      vignette: "A 60-year-old man with type 2 diabetes is started on metformin. His physician explains that the drug works partly by inhibiting a mitochondrial enzyme complex, increasing the AMP/ATP ratio in hepatocytes.",
      question: "Which enzyme complex in the mitochondria is inhibited by metformin?",
      options: ["Complex II (succinate dehydrogenase)","Complex I (NADH dehydrogenase)","Complex III (cytochrome bc1)","Complex IV (cytochrome c oxidase)","ATP synthase (Complex V)"],
      correctIndex: 1,
      explanation: "Metformin mildly inhibits Complex I (NADH dehydrogenase) of the electron transport chain. This reduces ATP production, increasing the AMP/ATP ratio, which activates AMPK. AMPK activation inhibits hepatic gluconeogenesis and improves insulin sensitivity.",
      optionExplanations: ["Incorrect: Complex II (succinate dehydrogenase) is not a known target of metformin.","Correct: Metformin inhibits Complex I of the ETC → ↑AMP/ATP ratio → AMPK activation → ↓hepatic gluconeogenesis.","Incorrect: Complex III is inhibited by antimycin A, not metformin.","Incorrect: Complex IV is inhibited by cyanide and carbon monoxide, not metformin.","Incorrect: ATP synthase is inhibited by oligomycin, not metformin."],
      highYieldPoint: "Metformin inhibits ETC Complex I → ↑AMP/ATP → activates AMPK → ↓hepatic gluconeogenesis."
    },
    {
      vignette: "An 8-month-old infant develops hypoglycemia, hepatomegaly, and muscle weakness. Enzyme assay on a liver biopsy shows deficiency of the debranching enzyme (amylo-1,6-glucosidase). Glycogen structure analysis shows glycogen with abnormally short outer branches.",
      question: "Which glycogen storage disease does this patient most likely have?",
      options: ["Type I (von Gierke)","Type II (Pompe)","Type III (Cori/Forbes)","Type IV (Andersen)","Type V (McArdle)"],
      correctIndex: 2,
      explanation: "Cori disease (GSD III) is caused by debranching enzyme deficiency. Glycogenolysis can only proceed to the branch points but cannot remove them, resulting in accumulation of abnormal glycogen with short outer branches (limit dextrin). Patients have hepatomegaly, hypoglycemia, and muscle weakness.",
      optionExplanations: ["Incorrect: GSD I (von Gierke) is glucose-6-phosphatase deficiency with severe fasting hypoglycemia and lactic acidosis.","Incorrect: GSD II (Pompe) is acid maltase deficiency causing lysosomal glycogen accumulation with cardiomegaly.","Correct: GSD III (Cori) = debranching enzyme deficiency → abnormal glycogen with short outer branches (limit dextrin).","Incorrect: GSD IV (Andersen) is branching enzyme deficiency causing abnormal glycogen with long unbranched chains.","Incorrect: GSD V (McArdle) is myophosphorylase deficiency affecting only skeletal muscle."],
      highYieldPoint: "Cori disease (GSD III): debranching enzyme deficiency → limit dextrin accumulation → hepatomegaly + mild hypoglycemia."
    },
    {
      vignette: "A 2-year-old child presents with recurrent episodes of hypoglycemia that occur specifically after ingestion of fruit juice. The child was breastfed without problems for the first 6 months. Liver biopsy shows normal glycogen content. Blood tests during a symptomatic episode show elevated fructose-1-phosphate levels.",
      question: "Which metabolic pathway is most directly disrupted by the accumulation of fructose-1-phosphate?",
      options: ["Glycolysis","TCA cycle","Pentose phosphate pathway","Gluconeogenesis and glycogenolysis","Fatty acid synthesis"],
      correctIndex: 3,
      explanation: "Fructose-1-phosphate accumulation (from aldolase B deficiency) traps inorganic phosphate, depleting the cell's phosphate pool. This inhibits both glycogenolysis (phosphorylase requires Pi) and gluconeogenesis, causing severe hypoglycemia after fructose ingestion.",
      optionExplanations: ["Incorrect: Glycolysis is not directly inhibited by phosphate trapping; glucose can still enter glycolysis.","Incorrect: The TCA cycle is not directly impaired by fructose-1-phosphate accumulation.","Incorrect: The pentose phosphate pathway is not the primary pathway disrupted by phosphate depletion.","Correct: Phosphate trapping by fructose-1-phosphate inhibits glycogenolysis and gluconeogenesis, causing hypoglycemia.","Incorrect: Fatty acid synthesis is not the primary pathway affected by phosphate trapping."],
      highYieldPoint: "Fructose-1-phosphate accumulation (aldolase B deficiency) traps Pi → inhibits glycogenolysis + gluconeogenesis → hypoglycemia."
    },
    {
      vignette: "A biochemistry student is studying the irreversible reactions of gluconeogenesis. She notes that one of these reactions converts oxaloacetate to phosphoenolpyruvate (PEP) in the cytosol and requires GTP as an energy source.",
      question: "Which enzyme catalyzes this reaction?",
      options: ["Pyruvate carboxylase","Pyruvate kinase","Fructose-1,6-bisphosphatase","Glucose-6-phosphatase","Phosphoenolpyruvate carboxykinase (PEPCK)"],
      correctIndex: 4,
      explanation: "Phosphoenolpyruvate carboxykinase (PEPCK) catalyzes the decarboxylation and phosphorylation of oxaloacetate to phosphoenolpyruvate using GTP. This is one of the four irreversible bypass reactions of gluconeogenesis that circumvent the irreversible steps of glycolysis.",
      optionExplanations: ["Incorrect: Pyruvate carboxylase converts pyruvate to oxaloacetate (the step before PEPCK) and requires ATP and biotin.","Incorrect: Pyruvate kinase is a glycolytic enzyme (PEP → pyruvate) and performs the opposite reaction.","Incorrect: Fructose-1,6-bisphosphatase bypasses PFK-1 by converting fructose-1,6-bisphosphate to fructose-6-phosphate.","Incorrect: Glucose-6-phosphatase converts glucose-6-phosphate to free glucose in the final step of gluconeogenesis.","Correct: PEPCK converts oxaloacetate → PEP using GTP; it is a key gluconeogenic bypass enzyme."],
      highYieldPoint: "Gluconeogenesis bypass enzymes: pyruvate carboxylase, PEPCK, fructose-1,6-bisphosphatase, glucose-6-phosphatase."
    }
  ],

  "Lipid metabolism": [
    {
      vignette: "A 45-year-old man with a history of myocardial infarction at age 40 presents for follow-up. He has tendon xanthomas on his Achilles tendons, xanthelasma, and corneal arcus. His LDL cholesterol is 350 mg/dL despite dietary modification. Family history reveals his father died of a heart attack at age 42.",
      question: "Which protein is most likely dysfunctional in this patient?",
      options: ["LDL receptor","HMG-CoA reductase","Lipoprotein lipase","PCSK9","Apolipoprotein E"],
      correctIndex: 0,
      explanation: "Familial hypercholesterolemia (FH) is most commonly caused by mutations in the LDL receptor gene, leading to impaired clearance of LDL from the blood. This autosomal dominant condition causes markedly elevated LDL, tendon xanthomas, premature atherosclerosis, and early MI.",
      optionExplanations: ["Correct: LDL receptor mutations cause familial hypercholesterolemia with severely elevated LDL and premature atherosclerosis.","Incorrect: HMG-CoA reductase is the target of statins, not the defective protein in familial hypercholesterolemia.","Incorrect: Lipoprotein lipase deficiency causes type I hyperlipoproteinemia with elevated chylomicrons and triglycerides, not LDL.","Incorrect: Gain-of-function PCSK9 mutations can cause FH but are much less common than LDL receptor mutations.","Incorrect: Apolipoprotein E mutations cause type III hyperlipoproteinemia (dysbetalipoproteinemia), not classic FH."],
      highYieldPoint: "Familial hypercholesterolemia: LDL receptor mutation (most common) → ↑↑LDL → tendon xanthomas + premature atherosclerosis."
    },
    {
      vignette: "A 35-year-old woman is started on a statin medication for hypercholesterolemia. Her physician explains that this drug lowers cholesterol by inhibiting the rate-limiting enzyme of cholesterol synthesis.",
      question: "Which enzyme is the target of statin drugs?",
      options: ["Acetyl-CoA carboxylase","HMG-CoA reductase","HMG-CoA synthase","Squalene synthase","Lanosterol synthase"],
      correctIndex: 1,
      explanation: "Statins (e.g., atorvastatin, rosuvastatin) competitively inhibit HMG-CoA reductase, the rate-limiting enzyme of cholesterol synthesis that converts HMG-CoA to mevalonate. Reduced intracellular cholesterol leads to upregulation of LDL receptors, increasing LDL clearance from blood.",
      optionExplanations: ["Incorrect: Acetyl-CoA carboxylase is the rate-limiting enzyme of fatty acid synthesis, not cholesterol synthesis.","Correct: HMG-CoA reductase (converts HMG-CoA → mevalonate) is the rate-limiting step of cholesterol biosynthesis and the target of statins.","Incorrect: HMG-CoA synthase produces HMG-CoA but is not the rate-limiting step targeted by statins.","Incorrect: Squalene synthase is downstream in the cholesterol pathway but is not the rate-limiting step.","Incorrect: Lanosterol synthase cyclizes squalene oxide to lanosterol but is not the clinical drug target."],
      highYieldPoint: "Statins inhibit HMG-CoA reductase (rate-limiting step of cholesterol synthesis) → ↓intracellular cholesterol → ↑LDL receptors → ↓serum LDL."
    },
    {
      vignette: "A 2-month-old infant presents with failure to thrive, hypoketotic hypoglycemia, and hepatomegaly. A fasting test provokes severe hypoglycemia without appropriate ketone body production. Acylcarnitine profile shows elevated long-chain acylcarnitines. Urine organic acids are unremarkable.",
      question: "Which enzyme deficiency is most likely responsible for this presentation?",
      options: ["Medium-chain acyl-CoA dehydrogenase (MCAD)","HMG-CoA lyase","Carnitine palmitoyltransferase II (CPT-II)","Acyl-CoA dehydrogenase (very long chain, VLCAD)","Carnitine palmitoyltransferase I (CPT-I)"],
      correctIndex: 2,
      explanation: "CPT-II deficiency impairs transfer of long-chain fatty acyl groups from carnitine back to CoA in the mitochondrial matrix. Long-chain fatty acids cannot undergo β-oxidation, leading to hypoketotic hypoglycemia (no ketones produced from fat) with elevated long-chain acylcarnitines.",
      optionExplanations: ["Incorrect: MCAD deficiency shows elevated medium-chain (C6-C10) acylcarnitines, not long-chain.","Incorrect: HMG-CoA lyase deficiency blocks ketogenesis but presents with organic aciduria.","Correct: CPT-II deficiency causes elevated long-chain acylcarnitines and hypoketotic hypoglycemia from impaired long-chain fatty acid oxidation.","Incorrect: VLCAD deficiency also elevates long-chain acylcarnitines and presents similarly, but CPT-II is the classic answer with this acylcarnitine profile pattern.","Incorrect: CPT-I deficiency would show decreased total carnitine levels with reduced long-chain acylcarnitines."],
      highYieldPoint: "CPT-II deficiency: impaired long-chain fatty acid oxidation → hypoketotic hypoglycemia + ↑long-chain acylcarnitines."
    },
    {
      vignette: "A 10-month-old infant is found dead in the crib. Postmortem examination reveals fatty infiltration of the liver. Newborn screening records show the child had an abnormal acylcarnitine profile with elevated octanoylcarnitine (C8).",
      question: "Which enzyme deficiency is the most likely cause of death?",
      options: ["Long-chain acyl-CoA dehydrogenase (LCAD)","Carnitine palmitoyltransferase I (CPT-I)","Short-chain acyl-CoA dehydrogenase (SCAD)","Medium-chain acyl-CoA dehydrogenase (MCAD)","HMG-CoA synthase"],
      correctIndex: 3,
      explanation: "MCAD deficiency is the most common inherited disorder of fatty acid oxidation. It presents with hypoketotic hypoglycemia and can cause sudden death, especially during fasting (e.g., illness, missed feeds). Elevated octanoylcarnitine (C8) on newborn screening is the classic marker.",
      optionExplanations: ["Incorrect: LCAD deficiency elevates long-chain acylcarnitines (C14-C18), not C8.","Incorrect: CPT-I deficiency shows low total and free carnitine with decreased acylcarnitines.","Incorrect: SCAD deficiency elevates butyrylcarnitine (C4) and is usually milder or asymptomatic.","Correct: MCAD deficiency is characterized by elevated C8 (octanoylcarnitine) and risk of fatal hypoketotic hypoglycemia during fasting.","Incorrect: HMG-CoA synthase deficiency is extremely rare and would not show the characteristic C8 elevation."],
      highYieldPoint: "MCAD deficiency: most common fatty acid oxidation disorder; elevated C8 on newborn screening; risk of sudden death during fasting."
    },
    {
      vignette: "A 4-year-old boy presents with adrenal insufficiency, progressive neurologic deterioration, and vision loss. MRI shows symmetric demyelination in the parieto-occipital white matter. Plasma very-long-chain fatty acid (VLCFA) levels are markedly elevated.",
      question: "Which organelle is primarily dysfunctional in this patient?",
      options: ["Mitochondria","Golgi apparatus","Lysosomes","Smooth endoplasmic reticulum","Peroxisomes"],
      correctIndex: 4,
      explanation: "X-linked adrenoleukodystrophy (X-ALD) is caused by a defect in the ABCD1 peroxisomal transporter, which normally imports very-long-chain fatty acids (VLCFAs) into peroxisomes for β-oxidation. Accumulation of VLCFAs leads to adrenal insufficiency and progressive cerebral demyelination.",
      optionExplanations: ["Incorrect: Mitochondria perform β-oxidation of most fatty acids but cannot oxidize VLCFAs, which require peroxisomal processing first.","Incorrect: The Golgi apparatus processes and sorts proteins and is not involved in VLCFA metabolism.","Incorrect: Lysosomal dysfunction causes storage diseases like Tay-Sachs or Gaucher, not VLCFA accumulation.","Incorrect: The smooth ER is involved in lipid synthesis and detoxification, not VLCFA oxidation.","Correct: Peroxisomes are responsible for VLCFA β-oxidation; dysfunction leads to VLCFA accumulation and X-linked adrenoleukodystrophy."],
      highYieldPoint: "X-linked adrenoleukodystrophy: peroxisomal VLCFA oxidation defect → ↑VLCFAs → adrenal insufficiency + cerebral demyelination."
    },
    {
      vignette: "A 50-year-old man with metabolic syndrome is found to have markedly elevated triglyceride levels (800 mg/dL). His physician is concerned about acute pancreatitis risk. The patient's fasting serum appears lipemic (milky).",
      question: "Which lipoprotein is most likely responsible for the lipemic appearance of his serum?",
      options: ["Chylomicrons","HDL","VLDL","LDL","IDL"],
      correctIndex: 0,
      explanation: "Chylomicrons are the largest lipoproteins and cause visible lipemia when present in fasting serum. Severely elevated triglycerides (>500-1000 mg/dL) often reflect chylomicron persistence in the blood and carry significant risk for acute pancreatitis.",
      optionExplanations: ["Correct: Chylomicrons are large triglyceride-rich particles that cause visible lipemia in fasting serum when present in excess.","Incorrect: HDL is small and dense and does not cause serum turbidity.","Incorrect: VLDL can contribute to hypertriglyceridemia but alone does not typically cause the milky serum appearance seen with extreme hypertriglyceridemia.","Incorrect: LDL carries cholesterol and does not typically cause visible lipemia.","Incorrect: IDL is an intermediate particle and does not typically cause visible lipemia."],
      highYieldPoint: "Lipemic (milky) serum = chylomicrons in fasting state; triglycerides >1000 mg/dL → high risk of acute pancreatitis."
    },
    {
      vignette: "A 28-year-old woman presents with recurrent episodes of acute pancreatitis. Her triglyceride level is 2,500 mg/dL. She has eruptive xanthomas on her buttocks and extensor surfaces. Genetic testing reveals a homozygous mutation in the LPL gene.",
      question: "What is the primary function of the enzyme that is deficient in this patient?",
      options: ["Esterification of cholesterol in HDL","Hydrolysis of triglycerides in chylomicrons and VLDL","Synthesis of VLDL in the liver","Transfer of cholesteryl esters between lipoproteins","Uptake of LDL into hepatocytes"],
      correctIndex: 1,
      explanation: "Lipoprotein lipase (LPL) is found on the endothelial surface of capillaries and hydrolyzes triglycerides in chylomicrons and VLDL, releasing fatty acids for tissue uptake. LPL deficiency (type I hyperlipoproteinemia) causes massive chylomicronemia, severe hypertriglyceridemia, and recurrent pancreatitis.",
      optionExplanations: ["Incorrect: LCAT (lecithin-cholesterol acyltransferase) esterifies cholesterol in HDL.","Correct: LPL hydrolyzes triglycerides in chylomicrons and VLDL at capillary endothelial surfaces.","Incorrect: VLDL synthesis occurs in hepatocytes and involves microsomal triglyceride transfer protein (MTP).","Incorrect: CETP (cholesteryl ester transfer protein) transfers cholesteryl esters between lipoproteins.","Incorrect: The LDL receptor mediates LDL uptake into hepatocytes."],
      highYieldPoint: "LPL deficiency (type I HLP): ↑↑chylomicrons + triglycerides → eruptive xanthomas + pancreatitis; activated by apoC-II."
    },
    {
      vignette: "A 55-year-old man with a BMI of 32 and type 2 diabetes is found to have elevated liver enzymes and hepatomegaly. Liver ultrasound suggests hepatic steatosis. A liver biopsy confirms fatty liver disease with no evidence of alcohol-related injury.",
      question: "Which metabolic derangement most directly contributes to hepatic triglyceride accumulation in this patient?",
      options: ["Increased cholesterol absorption","Decreased bile acid synthesis","Increased hepatic de novo lipogenesis","Decreased lipoprotein lipase activity","Increased HDL production"],
      correctIndex: 2,
      explanation: "In insulin resistance and metabolic syndrome, hyperinsulinemia activates SREBP-1c, which upregulates enzymes of de novo lipogenesis (DNL) in the liver. Combined with increased free fatty acid flux from adipose tissue, this promotes excessive hepatic triglyceride synthesis and steatosis.",
      optionExplanations: ["Incorrect: Increased cholesterol absorption would raise serum cholesterol but is not the primary driver of hepatic steatosis.","Incorrect: Bile acid synthesis does not directly drive triglyceride accumulation in the liver.","Correct: Hyperinsulinemia in metabolic syndrome activates SREBP-1c → ↑de novo lipogenesis → hepatic steatosis.","Incorrect: Decreased LPL activity would increase serum triglycerides but not directly cause hepatic fat accumulation.","Incorrect: Increased HDL production would be metabolically favorable, not pathogenic."],
      highYieldPoint: "Non-alcoholic fatty liver disease (NAFLD): insulin resistance → ↑SREBP-1c → ↑hepatic de novo lipogenesis → steatosis."
    },
    {
      vignette: "A 40-year-old man is prescribed niacin (nicotinic acid) for his dyslipidemia. After taking the medication, he experiences flushing and warmth of the skin, particularly on his face and upper body.",
      question: "Which mechanism is primarily responsible for the flushing side effect of niacin?",
      options: ["Histamine release from mast cells","α-adrenergic receptor blockade","Direct vasodilation via nitric oxide","Prostaglandin D2 and E2 release from cutaneous Langerhans cells","Serotonin release from platelets"],
      correctIndex: 3,
      explanation: "Niacin-induced flushing is primarily mediated by prostaglandin D2 (PGD2) and prostaglandin E2 (PGE2) release from cutaneous Langerhans cells and keratinocytes via the GPR109A receptor. This is why pretreatment with aspirin (a prostaglandin synthesis inhibitor) can reduce the flushing.",
      optionExplanations: ["Incorrect: While mast cells may play a minor role, prostaglandin release from skin cells is the primary mechanism.","Incorrect: α-adrenergic blockade causes orthostatic hypotension (e.g., with prazosin), not the characteristic flushing pattern of niacin.","Incorrect: Nitric oxide-mediated vasodilation is not the primary mechanism of niacin-induced flushing.","Correct: Niacin activates GPR109A on Langerhans cells → PGD2/PGE2 release → cutaneous vasodilation and flushing.","Incorrect: Serotonin release is associated with carcinoid syndrome, not niacin use."],
      highYieldPoint: "Niacin flushing: PGD2/PGE2 release via GPR109A on skin cells; reduced by aspirin pretreatment."
    },
    {
      vignette: "A researcher is studying ketogenesis in the liver during prolonged fasting. She measures the levels of the key substrate entering the ketogenic pathway in hepatic mitochondria.",
      question: "Which molecule is the primary substrate for ketone body synthesis in the liver?",
      options: ["Free fatty acids","Glucose","Pyruvate","Oxaloacetate","Acetyl-CoA"],
      correctIndex: 4,
      explanation: "Acetyl-CoA, produced from β-oxidation of fatty acids in hepatic mitochondria, is the primary substrate for ketogenesis. During fasting, oxaloacetate is diverted to gluconeogenesis, and excess acetyl-CoA that cannot enter the depleted TCA cycle is channeled into ketone body synthesis.",
      optionExplanations: ["Incorrect: Free fatty acids are converted to acetyl-CoA via β-oxidation first; acetyl-CoA is the direct substrate for ketogenesis.","Incorrect: Glucose is being conserved during fasting; the liver does not use glucose for ketone body production.","Incorrect: Pyruvate is converted to oxaloacetate (gluconeogenesis) or acetyl-CoA but is not itself the ketogenic substrate.","Incorrect: Oxaloacetate is diverted away from the TCA cycle for gluconeogenesis, which is why acetyl-CoA accumulates for ketogenesis.","Correct: Acetyl-CoA from hepatic β-oxidation is condensed by HMG-CoA synthase to begin ketone body synthesis."],
      highYieldPoint: "Ketogenesis: acetyl-CoA → HMG-CoA → acetoacetate → β-hydroxybutyrate; occurs in liver mitochondria during fasting."
    },
    {
      vignette: "A 6-year-old boy of Mediterranean descent is found to have a cherry-red spot on fundoscopy, hepatosplenomegaly, and progressive neurologic deterioration. He had been healthy until age 2. Bone marrow biopsy shows foamy macrophages. Enzyme assay reveals deficiency of sphingomyelinase.",
      question: "What is the diagnosis?",
      options: ["Niemann-Pick disease type A","Gaucher disease","Tay-Sachs disease","Fabry disease","Krabbe disease"],
      correctIndex: 0,
      explanation: "Niemann-Pick disease type A is caused by deficiency of acid sphingomyelinase (ASM), leading to sphingomyelin accumulation in macrophages (foamy cells) and neurons. It presents in infancy with hepatosplenomegaly, progressive neurodegeneration, and a cherry-red macular spot.",
      optionExplanations: ["Correct: Niemann-Pick type A = sphingomyelinase deficiency → sphingomyelin storage → foamy macrophages + cherry-red spot + hepatosplenomegaly.","Incorrect: Gaucher disease involves glucocerebrosidase deficiency with crinkled tissue paper macrophages, not foamy cells.","Incorrect: Tay-Sachs disease involves hexosaminidase A deficiency with cherry-red spot but no hepatosplenomegaly.","Incorrect: Fabry disease involves α-galactosidase A deficiency with peripheral neuropathy and angiokeratomas, not this presentation.","Incorrect: Krabbe disease involves galactocerebrosidase deficiency with globoid cells and progressive demyelination."],
      highYieldPoint: "Niemann-Pick type A: sphingomyelinase deficiency → foamy macrophages + cherry-red spot + hepatosplenomegaly + neurodegeneration."
    },
    {
      vignette: "A 14-year-old boy presents with severe burning pain in his hands and feet, angiokeratomas on his lower trunk, and corneal opacities. He also has mild proteinuria. Family history reveals that his maternal grandfather had renal failure and cardiac disease. Enzyme assay shows deficiency of α-galactosidase A.",
      question: "What is the inheritance pattern of this patient's condition?",
      options: ["Autosomal dominant","X-linked recessive","Autosomal recessive","X-linked dominant","Mitochondrial"],
      correctIndex: 1,
      explanation: "Fabry disease is caused by deficiency of α-galactosidase A (encoded on the X chromosome), leading to accumulation of globotriaosylceramide (Gb3). It follows X-linked recessive inheritance, primarily affecting males with peripheral neuropathy, angiokeratomas, renal failure, and cardiac disease.",
      optionExplanations: ["Incorrect: Autosomal dominant inheritance would show father-to-son transmission, which is not seen in Fabry disease.","Correct: Fabry disease is X-linked recessive; the affected maternal grandfather passed through an obligate carrier daughter to her son.","Incorrect: Most lysosomal storage diseases are AR, but Fabry is a notable exception with X-linked inheritance.","Incorrect: X-linked dominant would affect heterozygous females fully, though carrier females in Fabry can have mild symptoms.","Incorrect: Mitochondrial inheritance would show maternal transmission to all children, not the pattern seen here."],
      highYieldPoint: "Fabry disease: X-linked recessive (exception among lysosomal storage diseases); α-galactosidase A deficiency → Gb3 accumulation."
    },
    {
      vignette: "A researcher is studying the regulation of fatty acid synthesis. She adds glucagon to cultured hepatocytes and observes decreased activity of the rate-limiting enzyme of fatty acid synthesis.",
      question: "Which enzyme is the rate-limiting step of fatty acid synthesis that is inhibited by glucagon signaling?",
      options: ["Fatty acid synthase","ATP-citrate lyase","Acetyl-CoA carboxylase","Malonyl-CoA decarboxylase","Thiolase"],
      correctIndex: 2,
      explanation: "Acetyl-CoA carboxylase (ACC) is the rate-limiting enzyme of fatty acid synthesis, converting acetyl-CoA to malonyl-CoA. Glucagon activates AMPK, which phosphorylates and inactivates ACC, reducing fatty acid synthesis during fasting states.",
      optionExplanations: ["Incorrect: Fatty acid synthase is the multienzyme complex that performs the synthesis steps but is not the rate-limiting regulatory step.","Incorrect: ATP-citrate lyase provides cytoplasmic acetyl-CoA for fatty acid synthesis but is not the rate-limiting step.","Correct: ACC is the rate-limiting enzyme of fatty acid synthesis; glucagon → AMPK activation → ACC phosphorylation and inactivation.","Incorrect: Malonyl-CoA decarboxylase degrades malonyl-CoA and is not the rate-limiting synthetic enzyme.","Incorrect: Thiolase is involved in β-oxidation and ketogenesis, not fatty acid synthesis."],
      highYieldPoint: "Acetyl-CoA carboxylase (ACC): rate-limiting enzyme of FA synthesis; activated by insulin/citrate; inhibited by glucagon (AMPK phosphorylation)/palmitoyl-CoA."
    },
    {
      vignette: "A 65-year-old woman on chronic corticosteroid therapy for rheumatoid arthritis develops central obesity, easy bruising, and purple striae. Her lipid panel shows elevated total cholesterol and triglycerides.",
      question: "What is the primary mechanism by which chronic glucocorticoid excess promotes dyslipidemia?",
      options: ["Inhibition of HMG-CoA reductase","Increased bile acid excretion","Direct inhibition of LDL receptor expression","Stimulation of hormone-sensitive lipase in adipose tissue and increased hepatic VLDL production","Decreased intestinal cholesterol absorption"],
      correctIndex: 3,
      explanation: "Glucocorticoid excess stimulates hormone-sensitive lipase (HSL) in adipose tissue, increasing free fatty acid release. The liver takes up these fatty acids and increases VLDL production. Additionally, glucocorticoids promote hepatic lipogenesis and insulin resistance, contributing to dyslipidemia.",
      optionExplanations: ["Incorrect: Glucocorticoids do not directly inhibit HMG-CoA reductase; they may actually increase cholesterol synthesis.","Incorrect: Glucocorticoids do not primarily affect bile acid excretion to cause dyslipidemia.","Incorrect: While insulin resistance from glucocorticoids may indirectly affect LDL receptor function, direct LDL receptor inhibition is not the primary mechanism.","Correct: Glucocorticoids activate HSL → ↑free fatty acids → ↑hepatic VLDL production → dyslipidemia.","Incorrect: Decreased intestinal cholesterol absorption would lower cholesterol, not raise it."],
      highYieldPoint: "Glucocorticoid excess → ↑lipolysis (HSL activation) → ↑FFA flux to liver → ↑VLDL production → hypertriglyceridemia + hypercholesterolemia."
    },
    {
      vignette: "A 3-year-old child presents with progressive spasticity, blindness, and developmental regression. MRI shows diffuse white matter demyelination. Biopsy reveals accumulation of galactocerebroside and presence of multinucleated globoid cells in the brain.",
      question: "Which enzyme is deficient in this patient?",
      options: ["Arylsulfatase A","β-Glucocerebrosidase","Sphingomyelinase","Hexosaminidase A","Galactocerebrosidase (galactosylceramidase)"],
      correctIndex: 4,
      explanation: "Krabbe disease (globoid cell leukodystrophy) is caused by deficiency of galactocerebrosidase, which normally degrades galactocerebroside. Accumulation of psychosine (galactosylsphingosine), a toxic metabolite, destroys oligodendrocytes, causing severe demyelination with characteristic globoid cells.",
      optionExplanations: ["Incorrect: Arylsulfatase A deficiency causes metachromatic leukodystrophy, which also causes demyelination but with different histologic findings (metachromatic deposits).","Incorrect: β-Glucocerebrosidase deficiency causes Gaucher disease with crinkled tissue paper macrophages.","Incorrect: Sphingomyelinase deficiency causes Niemann-Pick disease type A with foamy macrophages.","Incorrect: Hexosaminidase A deficiency causes Tay-Sachs disease with cherry-red spot and no demyelination pattern.","Correct: Galactocerebrosidase deficiency → Krabbe disease with globoid cells and psychosine-mediated demyelination."],
      highYieldPoint: "Krabbe disease: galactocerebrosidase deficiency → psychosine toxicity → globoid cells + severe demyelination."
    }
  ],

  "Vitamins & nutrition": [
    {
      vignette: "A 45-year-old man with a history of chronic alcohol use disorder presents with confusion, ophthalmoplegia, and ataxia. On examination, he has horizontal nystagmus and is unable to abduct either eye. He is disoriented to time and place.",
      question: "Deficiency of which vitamin is the most likely cause of this patient's presentation?",
      options: ["Vitamin B1 (thiamine)","Vitamin B3 (niacin)","Vitamin B6 (pyridoxine)","Vitamin B12 (cobalamin)","Vitamin C (ascorbic acid)"],
      correctIndex: 0,
      explanation: "This is Wernicke encephalopathy, the classic triad of confusion, ophthalmoplegia, and ataxia caused by thiamine (vitamin B1) deficiency. Chronic alcoholics are at high risk due to poor nutrition and impaired thiamine absorption. Thiamine must be given before glucose to prevent precipitating or worsening the condition.",
      optionExplanations: ["Correct: Thiamine (B1) deficiency causes Wernicke encephalopathy (confusion, ophthalmoplegia, ataxia) and can progress to Korsakoff syndrome.","Incorrect: Niacin (B3) deficiency causes pellagra (diarrhea, dermatitis, dementia), not ophthalmoplegia.","Incorrect: Pyridoxine (B6) deficiency causes peripheral neuropathy and sideroblastic anemia, not this triad.","Incorrect: B12 deficiency causes subacute combined degeneration and megaloblastic anemia, not ophthalmoplegia with ataxia.","Incorrect: Vitamin C deficiency causes scurvy (bleeding gums, petechiae, poor wound healing)."],
      highYieldPoint: "Wernicke encephalopathy: thiamine (B1) deficiency → confusion + ophthalmoplegia + ataxia; give thiamine BEFORE glucose."
    },
    {
      vignette: "A 60-year-old woman presents with a sore, beefy-red tongue, fatigue, and numbness and tingling in her feet. CBC shows macrocytic anemia with hypersegmented neutrophils. She has a history of autoimmune thyroid disease. Anti-intrinsic factor antibodies are positive.",
      question: "Which vitamin deficiency is responsible for this patient's presentation?",
      options: ["Folate","Vitamin B12 (cobalamin)","Iron","Vitamin B6 (pyridoxine)","Vitamin B2 (riboflavin)"],
      correctIndex: 1,
      explanation: "This patient has pernicious anemia, an autoimmune condition with antibodies against intrinsic factor (IF), which is required for B12 absorption in the terminal ileum. B12 deficiency causes megaloblastic anemia (macrocytosis, hypersegmented neutrophils) and neurologic symptoms (subacute combined degeneration).",
      optionExplanations: ["Incorrect: Folate deficiency causes identical hematologic findings but does NOT cause neurologic symptoms. Anti-IF antibodies point specifically to B12 deficiency.","Correct: B12 deficiency (pernicious anemia) causes megaloblastic anemia + neurologic symptoms; anti-IF antibodies are diagnostic.","Incorrect: Iron deficiency causes microcytic hypochromic anemia, not macrocytic anemia.","Incorrect: B6 deficiency causes sideroblastic anemia (microcytic) and peripheral neuropathy but not macrocytosis or hypersegmented neutrophils.","Incorrect: Riboflavin deficiency causes angular cheilitis and glossitis but not macrocytic anemia."],
      highYieldPoint: "B12 deficiency: megaloblastic anemia + neurologic symptoms (subacute combined degeneration); folate deficiency: megaloblastic anemia WITHOUT neuro symptoms."
    },
    {
      vignette: "A 4-year-old child from a developing country presents with dry, scaly skin, Bitot spots on the conjunctiva, and night blindness. The child has a history of measles infection 2 months ago and has been on a severely restricted diet.",
      question: "Deficiency of which vitamin is most likely responsible for these findings?",
      options: ["Vitamin E (tocopherol)","Vitamin D (cholecalciferol)","Vitamin A (retinol)","Vitamin K (phylloquinone)","Vitamin C (ascorbic acid)"],
      correctIndex: 2,
      explanation: "Vitamin A deficiency causes night blindness (impaired rhodopsin synthesis), xerophthalmia (dry eyes), Bitot spots (keratinized conjunctival plaques), and keratomalacia if severe. Measles can precipitate or worsen vitamin A deficiency, which is why vitamin A supplementation is recommended during measles in deficient populations.",
      optionExplanations: ["Incorrect: Vitamin E deficiency causes hemolytic anemia in neonates and spinocerebellar degeneration, not Bitot spots.","Incorrect: Vitamin D deficiency causes rickets (children) or osteomalacia (adults), not ocular findings.","Correct: Vitamin A deficiency → night blindness + Bitot spots + xerophthalmia + dry skin; worsened by measles.","Incorrect: Vitamin K deficiency causes bleeding/coagulopathy, not ocular or skin changes.","Incorrect: Vitamin C deficiency causes scurvy with bleeding gums and petechiae, not night blindness."],
      highYieldPoint: "Vitamin A deficiency: night blindness → xerophthalmia → Bitot spots → keratomalacia; supplement during measles."
    },
    {
      vignette: "A 2-year-old child living in a northern climate presents with bowing of the legs, frontal bossing, and widened wrists. X-rays show widened, frayed metaphyses and cupping of the distal radius and ulna. Laboratory tests reveal low serum calcium, low phosphorus, and elevated alkaline phosphatase.",
      question: "Which vitamin deficiency is most likely responsible for this presentation?",
      options: ["Vitamin A","Vitamin C","Vitamin E","Vitamin D","Vitamin K"],
      correctIndex: 3,
      explanation: "This is rickets, caused by vitamin D deficiency in children. Vitamin D is essential for intestinal calcium and phosphate absorption. Deficiency leads to inadequate mineralization of growing bone, resulting in soft, deformable bones with the characteristic skeletal findings and laboratory abnormalities described.",
      optionExplanations: ["Incorrect: Vitamin A deficiency causes ocular and skin manifestations, not rickets.","Incorrect: Vitamin C deficiency causes scurvy with subperiosteal hemorrhages and poor wound healing, not rickets.","Incorrect: Vitamin E deficiency causes neurologic dysfunction and hemolytic anemia, not skeletal deformities.","Correct: Vitamin D deficiency in children → rickets with bowed legs, frontal bossing, rachitic rosary, and widened metaphyses.","Incorrect: Vitamin K deficiency causes coagulopathy, not bone disease."],
      highYieldPoint: "Vitamin D deficiency: rickets in children (bowed legs, rachitic rosary, craniotabes); osteomalacia in adults; ↓Ca, ↓PO4, ↑ALP, ↑PTH."
    },
    {
      vignette: "A 70-year-old man on long-term warfarin therapy for atrial fibrillation is found to have an INR of 6.0 after taking antibiotics that altered his gut flora. He has no active bleeding.",
      question: "Which vitamin's function is antagonized by warfarin?",
      options: ["Vitamin A","Vitamin D","Vitamin E","Vitamin C","Vitamin K"],
      correctIndex: 4,
      explanation: "Warfarin inhibits vitamin K epoxide reductase, preventing the regeneration of reduced vitamin K, which is a required cofactor for γ-carboxylation of clotting factors II, VII, IX, and X, as well as proteins C and S. Antibiotic-induced reduction in vitamin K-producing gut bacteria can potentiate warfarin's effect.",
      optionExplanations: ["Incorrect: Vitamin A is involved in vision and epithelial integrity, not coagulation.","Incorrect: Vitamin D is involved in calcium homeostasis and bone metabolism.","Incorrect: Vitamin E is a fat-soluble antioxidant and does not directly affect the coagulation cascade.","Incorrect: Vitamin C is involved in collagen synthesis and antioxidant defense, not clotting factor activation.","Correct: Warfarin antagonizes vitamin K, which is necessary for γ-carboxylation of factors II, VII, IX, X and proteins C and S."],
      highYieldPoint: "Warfarin inhibits vitamin K epoxide reductase → ↓γ-carboxylation of factors II, VII, IX, X and proteins C, S."
    },
    {
      vignette: "A 35-year-old woman who underwent Roux-en-Y gastric bypass surgery 3 years ago presents with a painful, swollen tongue, angular cheilitis, and a normocytic anemia. She has been non-compliant with her vitamin supplementation regimen.",
      question: "Deficiency of which vitamin is most likely causing her oral findings?",
      options: ["Vitamin B2 (riboflavin)","Vitamin B1 (thiamine)","Vitamin B6 (pyridoxine)","Vitamin B12 (cobalamin)","Folate"],
      correctIndex: 0,
      explanation: "Riboflavin (vitamin B2) deficiency causes the classic triad of glossitis (swollen, painful tongue), angular cheilitis (cracking at the corners of the mouth), and cheilosis. It can be seen in malabsorption states, including post-bariatric surgery. Riboflavin is a precursor to FAD and FMN.",
      optionExplanations: ["Correct: Riboflavin (B2) deficiency causes glossitis + angular cheilitis + cheilosis; it is a precursor to FAD and FMN.","Incorrect: Thiamine deficiency causes beriberi or Wernicke-Korsakoff, not oral mucosal changes.","Incorrect: B6 deficiency causes peripheral neuropathy and sideroblastic anemia; glossitis can occur but angular cheilitis is more specific to B2.","Incorrect: B12 deficiency causes glossitis and macrocytic anemia (not normocytic) and neurologic symptoms.","Incorrect: Folate deficiency causes megaloblastic anemia and glossitis but is less specifically associated with angular cheilitis."],
      highYieldPoint: "Riboflavin (B2) deficiency: glossitis + angular cheilitis + cheilosis; B2 → FAD and FMN (electron carriers)."
    },
    {
      vignette: "A 6-month-old exclusively breastfed infant develops seizures. Laboratory evaluation reveals hypocalcemia, and the infant is found to have no bleeding tendency. The mother has been taking isoniazid for latent tuberculosis without pyridoxine supplementation.",
      question: "Which vitamin deficiency in the infant most likely explains the seizures?",
      options: ["Vitamin B1 (thiamine)","Vitamin B6 (pyridoxine)","Vitamin B2 (riboflavin)","Vitamin B12 (cobalamin)","Vitamin D"],
      correctIndex: 1,
      explanation: "Isoniazid inhibits pyridoxine (B6) metabolism, and maternal B6 deficiency leads to decreased B6 in breast milk. Pyridoxine is essential for GABA synthesis (via glutamic acid decarboxylase), and its deficiency causes decreased inhibitory neurotransmission, manifesting as seizures in infants.",
      optionExplanations: ["Incorrect: Thiamine deficiency can cause infantile beriberi but presents with cardiac failure, not isolated seizures from medication effect.","Correct: Isoniazid depletes B6 → decreased GABA synthesis → seizures; B6 supplementation is recommended with INH therapy.","Incorrect: Riboflavin deficiency does not typically cause seizures.","Incorrect: B12 deficiency causes megaloblastic anemia and neurologic symptoms but not acute seizures in this context.","Incorrect: Vitamin D deficiency causes hypocalcemia and can cause seizures, but the isoniazid connection specifically points to B6."],
      highYieldPoint: "Isoniazid → B6 (pyridoxine) depletion → ↓GABA synthesis → seizures; always supplement B6 with INH."
    },
    {
      vignette: "A 55-year-old man with chronic alcoholism presents with dermatitis on sun-exposed areas of his neck and hands (in a glove-like distribution), chronic diarrhea, and progressive dementia. He has a poor diet consisting mainly of corn.",
      question: "Deficiency of which vitamin is most likely responsible for this presentation?",
      options: ["Vitamin B1 (thiamine)","Vitamin B6 (pyridoxine)","Vitamin B3 (niacin)","Vitamin B9 (folate)","Vitamin B12 (cobalamin)"],
      correctIndex: 2,
      explanation: "This patient has pellagra, caused by niacin (B3) deficiency, characterized by the classic triad of dermatitis, diarrhea, and dementia (the 3 D's). Pellagra is associated with corn-based diets (corn has niacin bound in an unavailable form) and alcoholism. Niacin is a precursor to NAD+ and NADP+.",
      optionExplanations: ["Incorrect: Thiamine deficiency causes beriberi or Wernicke-Korsakoff syndrome, not the 3 D's of pellagra.","Incorrect: B6 deficiency causes peripheral neuropathy and sideroblastic anemia, not pellagra.","Correct: Niacin (B3) deficiency → pellagra (dermatitis + diarrhea + dementia); associated with corn-based diets and alcoholism.","Incorrect: Folate deficiency causes megaloblastic anemia, not the dermatitis-diarrhea-dementia triad.","Incorrect: B12 deficiency causes megaloblastic anemia and subacute combined degeneration, not pellagra."],
      highYieldPoint: "Pellagra (niacin/B3 deficiency): Diarrhea + Dermatitis + Dementia (3 D's); corn diet + alcoholism; niacin → NAD+/NADP+."
    },
    {
      vignette: "A 30-year-old woman presents with easy bruising, bleeding gums, and poor wound healing. She reports eating only processed foods with no fruits or vegetables for the past 4 months. Physical examination reveals perifollicular hemorrhages and corkscrew hairs.",
      question: "Which biochemical function is most directly impaired in this patient?",
      options: ["γ-Carboxylation of glutamate residues","Reduction of methemoglobin to hemoglobin","Methylation of homocysteine to methionine","Hydroxylation of proline and lysine residues in collagen","Conversion of dopamine to norepinephrine"],
      correctIndex: 3,
      explanation: "Vitamin C (ascorbic acid) is an essential cofactor for prolyl hydroxylase and lysyl hydroxylase, enzymes that hydroxylate proline and lysine residues in procollagen. Without these modifications, collagen is unstable and cannot form proper triple helices, leading to the symptoms of scurvy.",
      optionExplanations: ["Incorrect: γ-Carboxylation of glutamate residues requires vitamin K, not vitamin C.","Incorrect: While vitamin C can reduce methemoglobin, this is not the primary biochemical function impaired in scurvy.","Incorrect: Methylation of homocysteine requires B12 and folate, not vitamin C.","Correct: Vitamin C deficiency impairs collagen hydroxylation → weak collagen → scurvy (bleeding, poor wound healing, corkscrew hairs).","Incorrect: Vitamin C is a cofactor for dopamine β-hydroxylase, but this is not the primary defect responsible for scurvy symptoms."],
      highYieldPoint: "Scurvy (vitamin C deficiency): impaired collagen hydroxylation → bleeding gums, petechiae, poor wound healing, corkscrew hairs."
    },
    {
      vignette: "A pregnant woman is advised to take folate supplementation starting before conception. Her obstetrician explains that adequate folate levels during early pregnancy are critical for preventing a specific category of birth defects.",
      question: "Which birth defect is most effectively prevented by periconceptional folate supplementation?",
      options: ["Congenital heart defects","Renal agenesis","Cleft lip and palate","Limb reduction defects","Neural tube defects"],
      correctIndex: 4,
      explanation: "Periconceptional folate supplementation (at least 400 μg daily starting 1 month before conception) reduces the risk of neural tube defects (NTDs) such as spina bifida and anencephaly by approximately 50-70%. Folate is essential for nucleotide synthesis and cell division during neural tube closure (weeks 3-4 of gestation).",
      optionExplanations: ["Incorrect: While some congenital heart defects may be reduced by folate, NTDs are the primary target of supplementation.","Incorrect: Renal agenesis is not specifically prevented by folate supplementation.","Incorrect: Cleft lip/palate has multifactorial etiology; folate may play a minor role but NTD prevention is the primary indication.","Incorrect: Limb reduction defects are not primarily associated with folate deficiency.","Correct: Folate supplementation before and during early pregnancy dramatically reduces the risk of neural tube defects (spina bifida, anencephaly)."],
      highYieldPoint: "Folate supplementation (≥400 μg/day) before conception prevents neural tube defects; neural tube closes by week 4."
    },
    {
      vignette: "A 28-year-old man with Crohn disease affecting the terminal ileum develops fatigue, paresthesias in his hands and feet, and an unsteady gait. MRI of the spine shows increased T2 signal in the posterior and lateral columns of the spinal cord.",
      question: "Which vitamin deficiency is most likely causing these neurologic findings?",
      options: ["Vitamin B12 (cobalamin)","Vitamin B6 (pyridoxine)","Vitamin B9 (folate)","Vitamin B1 (thiamine)","Vitamin E (tocopherol)"],
      correctIndex: 0,
      explanation: "Vitamin B12 is absorbed in the terminal ileum bound to intrinsic factor. Crohn disease affecting the terminal ileum impairs B12 absorption. B12 deficiency causes subacute combined degeneration of the spinal cord (demyelination of posterior columns and lateral corticospinal tracts), manifesting as paresthesias and gait ataxia.",
      optionExplanations: ["Correct: B12 deficiency → subacute combined degeneration (posterior columns + lateral corticospinal tracts); terminal ileum disease impairs B12 absorption.","Incorrect: B6 deficiency causes peripheral neuropathy but not subacute combined degeneration of the spinal cord.","Incorrect: Folate deficiency causes megaloblastic anemia but does NOT cause neurologic disease like B12 deficiency.","Incorrect: Thiamine deficiency causes peripheral neuropathy and Wernicke-Korsakoff but not posterior column disease.","Incorrect: Vitamin E deficiency can cause spinocerebellar degeneration but does not specifically affect the posterior columns like B12."],
      highYieldPoint: "B12 deficiency → subacute combined degeneration: posterior columns (proprioception/vibration loss) + lateral corticospinal tracts (spasticity)."
    },
    {
      vignette: "A 40-year-old woman with a malabsorption syndrome develops hemolytic anemia and progressive ataxia with loss of proprioception. She also has retinitis pigmentosa. Her vitamin E levels are undetectable.",
      question: "What is the primary biochemical role of vitamin E?",
      options: ["Cofactor for carboxylation reactions","Lipid-soluble chain-breaking antioxidant","Cofactor for hydroxylation of collagen","Electron carrier in the electron transport chain","Methyl group donor"],
      correctIndex: 1,
      explanation: "Vitamin E (α-tocopherol) is the major lipid-soluble antioxidant that protects cell membranes from lipid peroxidation by free radicals. It terminates the chain reaction of lipid peroxidation by donating a hydrogen atom to lipid peroxyl radicals. Deficiency causes hemolytic anemia (RBC membrane damage) and neurodegeneration.",
      optionExplanations: ["Incorrect: Carboxylation cofactor describes biotin (for carboxylases) or vitamin K (for clotting factor carboxylation).","Correct: Vitamin E is the primary lipid-soluble antioxidant, protecting membranes from free radical-induced lipid peroxidation.","Incorrect: Collagen hydroxylation requires vitamin C as a cofactor.","Incorrect: FAD and FMN (from riboflavin) and NAD/NADP (from niacin) are electron carriers, not vitamin E.","Incorrect: S-adenosylmethionine (SAM) is the primary methyl group donor, not vitamin E."],
      highYieldPoint: "Vitamin E: lipid-soluble antioxidant protecting membranes; deficiency → hemolytic anemia + spinocerebellar degeneration + retinitis pigmentosa."
    },
    {
      vignette: "A newborn is given a prophylactic intramuscular injection immediately after birth to prevent a potentially fatal bleeding disorder. The infant was born via normal vaginal delivery at term.",
      question: "Which vitamin is administered as prophylaxis to newborns to prevent hemorrhagic disease of the newborn?",
      options: ["Vitamin A","Vitamin C","Vitamin K","Vitamin E","Vitamin D"],
      correctIndex: 2,
      explanation: "All newborns receive intramuscular vitamin K at birth to prevent hemorrhagic disease of the newborn (vitamin K deficiency bleeding). Neonates have limited vitamin K stores because the vitamin does not cross the placenta efficiently and the sterile neonatal gut lacks vitamin K-producing bacteria.",
      optionExplanations: ["Incorrect: Vitamin A is not routinely given at birth in developed countries (it is supplemented in measles-endemic areas).","Incorrect: Vitamin C is not given as neonatal prophylaxis.","Correct: Vitamin K injection at birth prevents hemorrhagic disease of the newborn; neonates have low vitamin K stores and sterile guts.","Incorrect: Vitamin E is not given as routine neonatal prophylaxis.","Incorrect: Vitamin D supplementation is recommended for breastfed infants but is not given as an injection at birth for bleeding prevention."],
      highYieldPoint: "Vitamin K prophylaxis at birth: prevents hemorrhagic disease of the newborn; neonates lack gut flora for vitamin K synthesis."
    },
    {
      vignette: "A 38-year-old woman taking high-dose vitamin A supplements for a skin condition develops headache, papilledema, and nausea. She is found to have elevated intracranial pressure on lumbar puncture.",
      question: "Which condition is this patient most likely experiencing?",
      options: ["Vitamin A deficiency","Vitamin E toxicity","Vitamin D toxicity","Hypervitaminosis A (vitamin A toxicity)","Idiopathic intracranial hypertension unrelated to vitamins"],
      correctIndex: 3,
      explanation: "Hypervitaminosis A causes pseudotumor cerebri (elevated intracranial pressure), presenting with headache, papilledema, nausea, and vomiting. Other toxicity signs include hepatotoxicity, skin desquamation, alopecia, and teratogenicity in pregnancy (isotretinoin, a vitamin A derivative, is a known teratogen).",
      optionExplanations: ["Incorrect: Vitamin A deficiency causes night blindness and xerophthalmia, not elevated ICP.","Incorrect: Vitamin E toxicity can potentiate anticoagulant effects but does not classically cause elevated ICP.","Incorrect: Vitamin D toxicity causes hypercalcemia (nausea, stones, bones, moans, groans), not pseudotumor cerebri.","Correct: Hypervitaminosis A → pseudotumor cerebri (elevated ICP, headache, papilledema); also causes hepatotoxicity and teratogenicity.","Incorrect: While idiopathic intracranial hypertension exists, the temporal association with high-dose vitamin A supplementation makes hypervitaminosis A the most likely diagnosis."],
      highYieldPoint: "Vitamin A toxicity: pseudotumor cerebri + hepatotoxicity + teratogenicity; vitamin A is stored in hepatic stellate (Ito) cells."
    },
    {
      vignette: "A 50-year-old man with chronic kidney disease stage 4 is found to have elevated PTH, low serum calcium, elevated phosphorus, and low levels of 1,25-dihydroxyvitamin D. His nephrologist explains that the kidney is responsible for the final activation step of vitamin D.",
      question: "Which enzyme catalyzes the final activation step of vitamin D in the kidney?",
      options: ["25-hydroxylase","Vitamin D-binding protein","24-hydroxylase","7-dehydrocholesterol reductase","1α-hydroxylase"],
      correctIndex: 4,
      explanation: "1α-hydroxylase (CYP27B1) in the proximal tubule of the kidney converts 25-hydroxyvitamin D (calcidiol) to 1,25-dihydroxyvitamin D (calcitriol), the active form. In CKD, reduced renal mass leads to decreased 1α-hydroxylase activity, low calcitriol, hypocalcemia, and secondary hyperparathyroidism.",
      optionExplanations: ["Incorrect: 25-hydroxylase is the hepatic enzyme that converts vitamin D to 25-hydroxyvitamin D (the first hydroxylation step).","Incorrect: Vitamin D-binding protein transports vitamin D metabolites in the blood but is not an enzyme.","Incorrect: 24-hydroxylase inactivates calcitriol to 1,24,25-trihydroxyvitamin D.","Incorrect: 7-Dehydrocholesterol reductase is involved in cholesterol synthesis, not vitamin D activation.","Correct: Renal 1α-hydroxylase performs the final activation (second hydroxylation) of vitamin D → 1,25-(OH)2-vitamin D (calcitriol)."],
      highYieldPoint: "Vitamin D activation: skin (UV→D3) → liver (25-hydroxylase→25-OH-D) → kidney (1α-hydroxylase→1,25-(OH)2-D [active])."
    }
  ],

  "Cellular organelles & trafficking": [
    {
      vignette: "A 3-month-old infant presents with severe hypotonia, hepatomegaly, and hypertrophic cardiomyopathy. Echocardiography shows massive biventricular hypertrophy. Muscle biopsy reveals glycogen-filled vacuoles within the cytoplasm. Enzyme assay confirms deficiency of acid α-glucosidase (acid maltase).",
      question: "In which cellular organelle does the deficient enzyme normally function?",
      options: ["Lysosome","Peroxisome","Mitochondria","Smooth endoplasmic reticulum","Cytoplasm"],
      correctIndex: 0,
      explanation: "Acid α-glucosidase (acid maltase) is a lysosomal enzyme that degrades glycogen within lysosomes. Its deficiency causes Pompe disease (GSD II), where glycogen accumulates in lysosomes, particularly in cardiac and skeletal muscle. This is the only glycogen storage disease that is also a lysosomal storage disease.",
      optionExplanations: ["Correct: Acid maltase is a lysosomal enzyme; Pompe disease is both a glycogen storage disease and a lysosomal storage disease.","Incorrect: Peroxisomes perform VLCFA oxidation and hydrogen peroxide metabolism, not lysosomal glycogen breakdown.","Incorrect: Mitochondria contain enzymes for oxidative phosphorylation and β-oxidation, not glycogen degradation.","Incorrect: The smooth ER is involved in lipid synthesis, drug metabolism, and calcium storage.","Incorrect: Cytoplasmic glycogen phosphorylase handles cytoplasmic glycogenolysis; acid maltase is specifically lysosomal."],
      highYieldPoint: "Pompe disease (GSD II): lysosomal acid maltase deficiency → glycogen accumulates in lysosomes → cardiomegaly + hypotonia."
    },
    {
      vignette: "A researcher is studying protein synthesis and observes that a newly synthesized polypeptide containing a signal sequence is directed to a specific organelle. The signal sequence is recognized by a ribonucleoprotein complex that temporarily halts translation and directs the ribosome to the membrane of this organelle.",
      question: "Which complex recognizes the signal sequence and directs the ribosome to the rough endoplasmic reticulum?",
      options: ["Coatomer protein I (COPI)","Signal recognition particle (SRP)","Coatomer protein II (COPII)","Clathrin adaptor complex","SNARE proteins"],
      correctIndex: 1,
      explanation: "The signal recognition particle (SRP) is a ribonucleoprotein complex that recognizes the N-terminal signal sequence of nascent secretory and membrane proteins. SRP binding pauses translation and directs the ribosome-mRNA-polypeptide complex to the SRP receptor on the rough ER membrane, where translation resumes into the ER lumen.",
      optionExplanations: ["Incorrect: COPI coats vesicles for retrograde transport (Golgi → ER) and intra-Golgi transport.","Correct: SRP recognizes the signal sequence, pauses translation, and targets the ribosome to the rough ER membrane.","Incorrect: COPII coats vesicles for anterograde transport (ER → Golgi).","Incorrect: Clathrin adaptors mediate vesicle formation at the plasma membrane and trans-Golgi network.","Incorrect: SNARE proteins mediate vesicle fusion with target membranes but do not recognize signal sequences."],
      highYieldPoint: "SRP recognizes N-terminal signal sequence → pauses translation → directs ribosome to rough ER via SRP receptor."
    },
    {
      vignette: "A cell biologist is studying vesicular transport from the endoplasmic reticulum to the Golgi apparatus. She discovers that a specific coat protein complex is required for budding of transport vesicles from the ER membrane.",
      question: "Which coat protein complex mediates vesicle transport from the ER to the Golgi?",
      options: ["COPI","Clathrin","COPII","Caveolin","Retromer"],
      correctIndex: 2,
      explanation: "COPII-coated vesicles mediate anterograde transport from the ER to the Golgi apparatus (ER → cis-Golgi). COPII coat assembly at ER exit sites selects cargo proteins for forward transport and generates the membrane curvature needed for vesicle budding.",
      optionExplanations: ["Incorrect: COPI mediates retrograde transport from Golgi back to ER and between Golgi cisternae.","Incorrect: Clathrin mediates vesicle formation at the plasma membrane (endocytosis) and the trans-Golgi network.","Correct: COPII coats vesicles for anterograde ER-to-Golgi transport.","Incorrect: Caveolin forms caveolae for specific endocytic pathways at the cell surface.","Incorrect: Retromer mediates retrograde transport from endosomes to the trans-Golgi network."],
      highYieldPoint: "COPII = ER → Golgi (anterograde); COPI = Golgi → ER (retrograde); Clathrin = plasma membrane endocytosis + trans-Golgi."
    },
    {
      vignette: "A 7-year-old boy presents with recurrent bacterial infections, partial oculocutaneous albinism, and peripheral neuropathy. Peripheral blood smear shows giant granules within neutrophils and other leukocytes. Genetic testing reveals a mutation in the LYST gene.",
      question: "What is the underlying cellular defect in this patient's condition?",
      options: ["Defective microtubule assembly","Impaired peroxisome biogenesis","Defective NADPH oxidase activity","Impaired lysosomal trafficking and fusion","Defective mitochondrial electron transport"],
      correctIndex: 3,
      explanation: "Chédiak-Higashi syndrome is caused by mutations in the LYST (lysosomal trafficking regulator) gene, resulting in defective lysosome-phagosome fusion and abnormal vesicular trafficking. Giant granules form from aberrant lysosomal fusion. Patients have recurrent infections, partial albinism, and neuropathy.",
      optionExplanations: ["Incorrect: Defective microtubule assembly is seen with drugs like colchicine or in Kartagener syndrome (dynein defects), not Chédiak-Higashi.","Incorrect: Impaired peroxisome biogenesis causes Zellweger syndrome, not Chédiak-Higashi.","Incorrect: Defective NADPH oxidase causes chronic granulomatous disease (CGD), which has different clinical features.","Correct: Chédiak-Higashi syndrome = defective LYST → impaired lysosomal trafficking → giant granules + recurrent infections + albinism.","Incorrect: Mitochondrial ETC defects cause mitochondrial myopathies, not this specific presentation."],
      highYieldPoint: "Chédiak-Higashi: LYST gene mutation → defective lysosomal trafficking → giant granules in WBCs + albinism + infections + neuropathy."
    },
    {
      vignette: "A newborn presents with severe hypotonia, seizures, hepatomegaly, and characteristic facial dysmorphism including a high forehead and broad nasal bridge. Blood tests reveal elevated very-long-chain fatty acids and elevated pipecolic acid. Brain MRI shows cortical malformations.",
      question: "What is the underlying organelle defect in this condition?",
      options: ["Lysosomal enzyme deficiency","Mitochondrial respiratory chain defect","Nuclear envelope abnormality","Golgi apparatus dysfunction","Peroxisome biogenesis defect"],
      correctIndex: 4,
      explanation: "Zellweger syndrome (cerebrohepatorenal syndrome) is the most severe peroxisome biogenesis disorder, caused by mutations in PEX genes. Absent functional peroxisomes lead to accumulation of VLCFAs, phytanic acid, and pipecolic acid, with severe neuronal migration defects, hepatic dysfunction, and early death.",
      optionExplanations: ["Incorrect: Lysosomal enzyme deficiencies cause storage diseases with specific enzyme defects, not global organelle absence.","Incorrect: Mitochondrial respiratory chain defects cause lactic acidosis and myopathy, not VLCFA accumulation.","Incorrect: Nuclear envelope defects cause laminopathies (e.g., progeria), not this metabolic presentation.","Incorrect: Golgi dysfunction causes I-cell disease (defective phosphotransferase), not VLCFA accumulation.","Correct: Zellweger syndrome = absent peroxisomes (PEX gene mutations) → ↑VLCFAs + neuronal migration defects + hepatomegaly."],
      highYieldPoint: "Zellweger syndrome: absent peroxisomes (PEX gene defects) → ↑VLCFAs + hypotonia + seizures + hepatomegaly + craniofacial dysmorphism."
    },
    {
      vignette: "A researcher treats cells with brefeldin A, which inhibits the activation of ARF1, a small GTPase required for coat protein assembly. She observes that the Golgi apparatus rapidly disassembles and merges with the ER.",
      question: "Which coat protein complex assembly is most directly disrupted by brefeldin A?",
      options: ["COPI","COPII","Clathrin","Caveolin","Adaptor protein-2 (AP-2)"],
      correctIndex: 0,
      explanation: "Brefeldin A inhibits the guanine nucleotide exchange factor (GEF) for ARF1, preventing ARF1 activation and subsequent COPI coat assembly. Without COPI-mediated transport, the Golgi cannot maintain its structure and collapses back into the ER. Brefeldin A is a key experimental tool for studying vesicular trafficking.",
      optionExplanations: ["Correct: Brefeldin A blocks ARF1 activation → prevents COPI coat assembly → Golgi disassembly.","Incorrect: COPII assembly at ER exit sites is mediated by Sar1 GTPase, not ARF1.","Incorrect: Clathrin assembly at the plasma membrane and TGN involves different adaptors and is not the primary target of brefeldin A.","Incorrect: Caveolin does not require ARF1 for assembly.","Incorrect: AP-2 works with clathrin at the plasma membrane and is not the direct target of brefeldin A."],
      highYieldPoint: "Brefeldin A inhibits ARF1 GEF → blocks COPI coat assembly → Golgi collapses into ER."
    },
    {
      vignette: "A 12-year-old boy with recurrent sinopulmonary infections is found to have situs inversus on chest X-ray. Nasal biopsy shows immotile cilia with absent dynein arms on electron microscopy. He also has bronchiectasis.",
      question: "Which cellular structure is primarily defective in this patient?",
      options: ["Actin microfilaments","Microtubules (ciliary dynein)","Intermediate filaments","Spectrin network","Nuclear lamina"],
      correctIndex: 1,
      explanation: "Kartagener syndrome (a subset of primary ciliary dyskinesia) is caused by defects in dynein arms that power ciliary motility along microtubule-based structures. The classic triad is situs inversus, bronchiectasis, and chronic sinusitis. Dynein is a motor protein associated with the outer doublet microtubules of cilia (9+2 arrangement).",
      optionExplanations: ["Incorrect: Actin microfilaments form the cytoskeleton and are involved in cell motility and contraction, not ciliary beating.","Correct: Dynein arms on ciliary microtubules are defective → immotile cilia → Kartagener syndrome (situs inversus + bronchiectasis + sinusitis).","Incorrect: Intermediate filaments (e.g., vimentin, keratin, desmin) provide structural support but are not part of cilia.","Incorrect: The spectrin network underlies the RBC membrane and is defective in hereditary spherocytosis.","Incorrect: Nuclear lamina defects cause laminopathies (progeria, muscular dystrophies), not ciliary dysfunction."],
      highYieldPoint: "Kartagener syndrome: dynein arm defect on ciliary microtubules → immotile cilia → situs inversus + bronchiectasis + sinusitis + infertility."
    },
    {
      vignette: "A researcher studying the proteasome adds a drug that inhibits the ubiquitin-proteasome pathway to cancer cells. She observes accumulation of misfolded proteins and induction of apoptosis.",
      question: "Which cellular structure is the primary site of proteasomal protein degradation?",
      options: ["Lysosome","Peroxisome","Cytoplasm/cytosol (proteasome)","Endoplasmic reticulum","Mitochondria"],
      correctIndex: 2,
      explanation: "The 26S proteasome is a large protein complex located in the cytoplasm and nucleus that degrades ubiquitin-tagged proteins. Proteins targeted for destruction are polyubiquitinated and then unfolded and proteolyzed within the proteasome barrel. Proteasome inhibitors (e.g., bortezomib) are used in multiple myeloma therapy.",
      optionExplanations: ["Incorrect: Lysosomes degrade material via autophagy and endocytosis but do not use the ubiquitin-proteasome pathway.","Incorrect: Peroxisomes oxidize VLCFAs and detoxify hydrogen peroxide; they do not perform proteasomal degradation.","Correct: The proteasome is a cytoplasmic/nuclear complex that degrades ubiquitin-tagged proteins; inhibitors like bortezomib are used in cancer therapy.","Incorrect: The ER is the site of protein folding and quality control (ERAD sends misfolded proteins to the proteasome), but degradation occurs in the cytoplasm.","Incorrect: Mitochondria have their own proteases but are not the primary site of ubiquitin-proteasome degradation."],
      highYieldPoint: "Ubiquitin-proteasome pathway: cytoplasmic; polyubiquitination tags proteins for 26S proteasome degradation; bortezomib = proteasome inhibitor."
    },
    {
      vignette: "A 25-year-old woman with recurrent infections is found to have neutrophils that can phagocytose bacteria but cannot kill them. The nitroblue tetrazolium (NBT) test is negative (no color change). Dihydrorhodamine (DHR) flow cytometry confirms the diagnosis.",
      question: "Which enzyme complex is most likely deficient in this patient's neutrophils?",
      options: ["Myeloperoxidase","Catalase","Superoxide dismutase","NADPH oxidase","Glucose-6-phosphate dehydrogenase"],
      correctIndex: 3,
      explanation: "Chronic granulomatous disease (CGD) is caused by defective NADPH oxidase, which normally generates superoxide (the respiratory burst) to kill phagocytosed bacteria and fungi. The negative NBT test (no superoxide to reduce the dye) and abnormal DHR flow cytometry are diagnostic.",
      optionExplanations: ["Incorrect: Myeloperoxidase deficiency causes a milder immunodeficiency with a positive NBT test (NADPH oxidase still works).","Incorrect: Catalase decomposes hydrogen peroxide; catalase-positive organisms (S. aureus, Aspergillus) are particularly problematic in CGD because they destroy the small amount of H2O2 produced.","Incorrect: Superoxide dismutase converts superoxide to hydrogen peroxide; its deficiency would not cause a negative NBT test.","Correct: NADPH oxidase deficiency → chronic granulomatous disease → absent respiratory burst → negative NBT test → recurrent catalase-positive infections.","Incorrect: G6PD generates NADPH for NADPH oxidase, and severe G6PD deficiency can mimic CGD, but the classic answer is NADPH oxidase."],
      highYieldPoint: "CGD: NADPH oxidase deficiency → no respiratory burst → negative NBT/DHR → susceptible to catalase-positive organisms (S. aureus, Aspergillus)."
    },
    {
      vignette: "A pathologist examining a liver biopsy from a patient with α-1 antitrypsin deficiency observes periodic acid-Schiff (PAS)-positive, diastase-resistant globules in the ER of hepatocytes.",
      question: "Which cellular process is most directly responsible for the accumulation of the abnormal protein in this organelle?",
      options: ["Defective lysosomal degradation","Impaired nuclear import","Abnormal Golgi processing","Defective signal sequence cleavage","Impaired ER-associated degradation (ERAD) and ER retention of misfolded protein"],
      correctIndex: 4,
      explanation: "In α-1 antitrypsin deficiency (PiZZ phenotype), the mutant Z-type protein misfolds in the ER and polymerizes, resisting normal ER-associated degradation (ERAD). These misfolded polymers accumulate as PAS-positive, diastase-resistant globules in hepatocyte ER, causing liver damage while the lungs lack protective antiprotease activity.",
      optionExplanations: ["Incorrect: Lysosomal degradation defects cause lysosomal storage diseases, not ER accumulation.","Incorrect: α-1 antitrypsin is a secreted protein, not a nuclear protein; nuclear import is not relevant.","Incorrect: The protein never reaches the Golgi because it is retained in the ER due to misfolding.","Incorrect: Signal sequence cleavage defects would prevent ER entry entirely, not cause ER accumulation.","Correct: Misfolded α-1 antitrypsin (Z mutation) polymerizes in the ER and overwhelms ERAD → PAS-positive ER globules → hepatocyte injury."],
      highYieldPoint: "α-1 antitrypsin deficiency (PiZZ): misfolded protein retained in hepatocyte ER → PAS+/diastase-resistant globules → liver cirrhosis + panacinar emphysema."
    },
    {
      vignette: "A cell biologist discovers that a specific four-amino acid signal sequence at the C-terminus of a peroxisomal enzyme is essential for its import into peroxisomes. Mutation of this sequence results in the enzyme remaining in the cytoplasm.",
      question: "Which targeting signal is required for peroxisomal protein import?",
      options: ["Peroxisomal targeting signal (PTS1 — SKL tripeptide)","Mannose-6-phosphate tag","KDEL sequence","N-terminal signal peptide","Nuclear localization signal (NLS)"],
      correctIndex: 0,
      explanation: "Most peroxisomal matrix proteins contain a C-terminal peroxisomal targeting signal 1 (PTS1), which is the tripeptide SKL (Ser-Lys-Leu) or a conservative variant. This signal is recognized by the cytosolic receptor Pex5, which escorts the protein to the peroxisomal membrane for import. Unlike mitochondrial and ER import, peroxisomes can import folded proteins.",
      optionExplanations: ["Correct: PTS1 (SKL or variant) at the C-terminus directs proteins to peroxisomes via Pex5 receptor.","Incorrect: Mannose-6-phosphate tags are added to lysosomal enzymes in the Golgi for lysosomal targeting.","Incorrect: KDEL is an ER retention signal that retrieves escaped ER-resident proteins from the cis-Golgi.","Incorrect: The N-terminal signal peptide directs proteins to the ER for secretory pathway entry.","Incorrect: NLS (basic amino acid clusters) directs proteins through nuclear pores via importin-mediated transport."],
      highYieldPoint: "Peroxisomal targeting: PTS1 (C-terminal SKL) recognized by Pex5; PTS2 (N-terminal nonapeptide) recognized by Pex7."
    },
    {
      vignette: "A researcher treats fibroblasts with colchicine and observes that the Golgi apparatus becomes dispersed and vesicular transport to the cell surface is severely impaired. Colchicine is known to bind tubulin dimers and prevent their polymerization.",
      question: "Which cytoskeletal element is essential for maintaining Golgi structure and facilitating vesicular transport from Golgi to the plasma membrane?",
      options: ["Actin filaments","Microtubules","Intermediate filaments","Spectrin","Myosin filaments"],
      correctIndex: 1,
      explanation: "Microtubules serve as tracks for vesicular transport between the ER, Golgi, and plasma membrane. The Golgi apparatus is organized around the microtubule-organizing center (MTOC/centrosome), and its structure depends on intact microtubules. Colchicine depolymerizes microtubules, disrupting Golgi organization and blocking kinesin/dynein-mediated vesicular transport.",
      optionExplanations: ["Incorrect: Actin filaments are important for cell surface functions (endocytosis, cell motility) but are not the primary tracks for long-distance Golgi-to-plasma membrane transport.","Correct: Microtubules maintain Golgi structure and serve as tracks for motor protein (kinesin/dynein)-dependent vesicular transport.","Incorrect: Intermediate filaments provide structural support but are not directly involved in vesicular trafficking.","Incorrect: Spectrin forms a submembranous cytoskeletal network, particularly in RBCs, and is not involved in Golgi-dependent transport.","Incorrect: Myosin filaments interact with actin in muscle contraction and some intracellular transport, but microtubules are the primary tracks for Golgi trafficking."],
      highYieldPoint: "Microtubules = tracks for vesicular transport (kinesin moves toward +/periphery, dynein toward -/center); colchicine disrupts by preventing tubulin polymerization."
    },
    {
      vignette: "A 50-year-old man with chronic liver disease has elevated serum levels of alanine aminotransferase (ALT) and aspartate aminotransferase (AST). His physician explains that these enzymes are normally found intracellularly and their elevation indicates hepatocyte damage.",
      question: "In which cellular compartment is ALT predominantly located?",
      options: ["Mitochondria","Endoplasmic reticulum","Cytoplasm (cytosol)","Nucleus","Peroxisome"],
      correctIndex: 2,
      explanation: "ALT (alanine aminotransferase) is predominantly a cytoplasmic enzyme in hepatocytes. Its elevation in serum indicates hepatocellular membrane damage. AST has both cytoplasmic and mitochondrial isoforms, which is why an AST:ALT ratio >2:1 in alcoholic hepatitis suggests mitochondrial damage.",
      optionExplanations: ["Incorrect: AST (not ALT) has a significant mitochondrial isoform. ALT is primarily cytoplasmic.","Incorrect: ALT is not an ER-associated enzyme.","Correct: ALT is a cytoplasmic enzyme; its release into serum indicates hepatocyte membrane disruption.","Incorrect: ALT does not function in the nucleus.","Incorrect: ALT is not a peroxisomal enzyme."],
      highYieldPoint: "ALT = cytoplasmic (liver-specific); AST = cytoplasmic + mitochondrial (less liver-specific); AST:ALT >2:1 suggests alcoholic hepatitis."
    },
    {
      vignette: "A researcher is studying the secretory pathway in pancreatic acinar cells. She observes that digestive enzymes are packaged into secretory granules at the trans-Golgi network and stored until a stimulatory signal triggers their release at the apical membrane.",
      question: "What is this type of secretion called?",
      options: ["Constitutive secretion","Exosome release","Autophagy","Regulated secretion","Apoptotic body formation"],
      correctIndex: 3,
      explanation: "Regulated secretion (also called regulated exocytosis) involves storage of proteins in secretory granules that fuse with the plasma membrane only upon receipt of a specific signal (e.g., hormonal or neural stimulus). This contrasts with constitutive secretion, where vesicles continuously fuse with the membrane without requiring a signal.",
      optionExplanations: ["Incorrect: Constitutive secretion occurs continuously without a triggering signal (e.g., collagen secretion by fibroblasts).","Incorrect: Exosomes are small extracellular vesicles released from multivesicular bodies, not secretory granules.","Incorrect: Autophagy is self-digestion of cellular components via autophagosomes fusing with lysosomes.","Correct: Regulated secretion stores proteins in granules and releases them upon stimulation (e.g., insulin from β-cells, digestive enzymes from pancreatic acinar cells).","Incorrect: Apoptotic body formation occurs during programmed cell death, not secretory pathway function."],
      highYieldPoint: "Regulated secretion: stored in granules, released on signal (insulin, neurotransmitters, digestive enzymes); constitutive: continuous, no signal needed."
    },
    {
      vignette: "A 45-year-old man with chronic hepatitis B infection undergoes a liver biopsy that reveals ground-glass hepatocytes. Electron microscopy shows massively dilated smooth endoplasmic reticulum filled with accumulated hepatitis B surface antigen (HBsAg) particles.",
      question: "Which organelle is primarily responsible for the characteristic ground-glass appearance in these hepatocytes?",
      options: ["Rough endoplasmic reticulum","Peroxisomes","Golgi apparatus","Mitochondria","Smooth endoplasmic reticulum"],
      correctIndex: 4,
      explanation: "The ground-glass appearance of hepatocytes in chronic hepatitis B is caused by massive accumulation of HBsAg within the proliferated smooth endoplasmic reticulum. The smooth ER normally functions in lipid synthesis, drug detoxification, and steroid hormone production, and its hypertrophy in response to HBsAg accumulation produces the characteristic cytoplasmic appearance on histology.",
      optionExplanations: ["Incorrect: The rough ER is studded with ribosomes and is involved in protein synthesis for the secretory pathway, but the ground-glass appearance is due to smooth ER proliferation.","Incorrect: Peroxisomal proliferation can occur in certain drug reactions but does not produce the classic ground-glass hepatocyte.","Incorrect: The Golgi apparatus processes and sorts proteins but is not the site of HBsAg accumulation producing ground-glass change.","Incorrect: Mitochondrial changes produce different histologic patterns (e.g., oncocytic change) but not the ground-glass appearance.","Correct: Ground-glass hepatocytes result from HBsAg accumulation in massively dilated smooth ER."],
      highYieldPoint: "Ground-glass hepatocytes in chronic HBV: HBsAg accumulates in proliferated smooth ER; smooth ER functions = lipid synthesis, drug detox, steroid production."
    }
  ]
};

const BIOCHEM_SUMMARIES = {

  "Molecular biology": {
    sections: [
      {
        heading: "DNA Replication",
        bullets: [
          "Origin of replication recognized by initiator proteins; helicase unwinds dsDNA",
          "Leading strand: continuous synthesis by DNA pol III (prokaryotes) / pol ε (eukaryotes)",
          "Lagging strand: Okazaki fragments joined by DNA ligase; primase makes RNA primers",
          "Telomerase (reverse transcriptase with RNA template) adds TTAGGG repeats to prevent end-replication problem",
          "Topoisomerases relieve supercoiling: type I = single-strand cuts; type II (gyrase in bacteria) = double-strand cuts"
        ]
      },
      {
        heading: "Transcription",
        bullets: [
          "RNA Pol I → rRNA (28S, 18S, 5.8S) in nucleolus",
          "RNA Pol II → mRNA, snRNA, miRNA (inhibited by α-amanitin)",
          "RNA Pol III → tRNA, 5S rRNA",
          "mRNA processing: 5' cap (7-methylguanosine), 3' poly-A tail, intron splicing (GU-AG rule by spliceosome)"
        ]
      },
      {
        heading: "Translation",
        bullets: [
          "Eukaryotic initiation: Kozak sequence (purine at -3, AUG); Prokaryotic: Shine-Dalgarno sequence",
          "Peptidyl transferase = ribozyme (23S rRNA in 50S subunit) catalyzes peptide bond formation",
          "Post-translational modifications: signal peptide cleavage, glycosylation, phosphorylation, ubiquitination"
        ]
      },
      {
        heading: "DNA Repair",
        bullets: [
          "Base excision repair (BER): fixes small base damage (deamination, oxidation); glycosylases remove damaged base",
          "Nucleotide excision repair (NER): fixes bulky lesions (thymine dimers); defective in xeroderma pigmentosum",
          "Mismatch repair (MMR): fixes replication errors; defective in Lynch syndrome (MSH2, MLH1)",
          "Homologous recombination: error-free DSB repair (BRCA1/BRCA2); Non-homologous end joining: error-prone DSB repair"
        ]
      },
      {
        heading: "Oncogenes & Tumor Suppressors",
        bullets: [
          "Proto-oncogenes → gain-of-function mutations = oncogenes (RAS, MYC, BCR-ABL, HER2)",
          "Tumor suppressors → loss-of-function (two-hit hypothesis): RB, p53, APC, BRCA1/2",
          "RAS: GTPase; oncogenic mutation prevents GTP hydrolysis → constitutive activation"
        ]
      }
    ],
    table: {
      headers: ["RNA Polymerase","Product","Inhibitor","Location"],
      rows: [
        ["RNA Pol I","rRNA (28S, 18S, 5.8S)","Relatively resistant to α-amanitin","Nucleolus"],
        ["RNA Pol II","mRNA, snRNA, miRNA","α-Amanitin (strong)","Nucleoplasm"],
        ["RNA Pol III","tRNA, 5S rRNA","α-Amanitin (moderate doses)","Nucleoplasm"]
      ]
    },
    mnemonic: "RNA Polymerases: 'I makes rRNA, II makes mRNA, III makes tRNA' — remember I, II, III = r, m, t (alphabetical order of products)."
  },

  "Genetics & inheritance patterns": {
    sections: [
      {
        heading: "Autosomal Dominant",
        bullets: [
          "Affected in every generation; male-to-male transmission possible",
          "50% risk to each child of affected parent",
          "Examples: Huntington disease, Marfan syndrome, familial hypercholesterolemia, NF1, ADPKD",
          "Concepts: variable expressivity, incomplete penetrance, de novo mutations"
        ]
      },
      {
        heading: "Autosomal Recessive",
        bullets: [
          "Both parents carriers (usually unaffected); 25% affected per pregnancy",
          "Probability unaffected sibling is carrier = 2/3 (Bayesian)",
          "More common with consanguinity",
          "Examples: CF, sickle cell, PKU, Tay-Sachs, Wilson disease, hemochromatosis"
        ]
      },
      {
        heading: "X-Linked Recessive",
        bullets: [
          "Primarily affects males; no male-to-male transmission",
          "Carrier mothers: 50% sons affected, 50% daughters carriers",
          "Examples: Duchenne/Becker MD, hemophilia A/B, G6PD deficiency, Fabry disease, Hunter syndrome"
        ]
      },
      {
        heading: "X-Linked Dominant",
        bullets: [
          "Affected father → ALL daughters affected, NO sons affected",
          "Affected mother → 50% of all children affected regardless of sex",
          "Examples: Rett syndrome, hypophosphatemic rickets, Alport syndrome (some forms)"
        ]
      },
      {
        heading: "Mitochondrial Inheritance",
        bullets: [
          "Exclusively maternal transmission; all children of affected mother carry the mutation",
          "Variable expressivity due to heteroplasmy (mixture of normal and mutant mitochondria)",
          "Examples: MELAS, MERRF, Leber hereditary optic neuropathy (LHON)"
        ]
      },
      {
        heading: "Genomic Imprinting & Other Concepts",
        bullets: [
          "Imprinting: parent-of-origin expression; 15q11-q13 deletion: paternal → Prader-Willi; maternal → Angelman",
          "Anticipation: trinucleotide repeat expansion across generations (Huntington, myotonic dystrophy, fragile X)",
          "Loss of heterozygosity: somatic loss of remaining wild-type allele in tumor suppressors (Knudson two-hit hypothesis)"
        ]
      }
    ],
    table: {
      headers: ["Inheritance","Key Feature","Classic Examples"],
      rows: [
        ["AD","Every generation; male-to-male OK","Huntington, Marfan, NF1, ADPKD"],
        ["AR","Carrier parents; 25% risk; consanguinity","CF, sickle cell, PKU, Tay-Sachs"],
        ["X-linked recessive","Males affected; no male-to-male","DMD, hemophilia A/B, G6PD"],
        ["X-linked dominant","Dad → all daughters; no sons","Rett, hypophos. rickets"],
        ["Mitochondrial","Maternal to all; heteroplasmy","MELAS, MERRF, LHON"]
      ]
    },
    mnemonic: "Prader-Willi vs Angelman at 15q: 'PW = Paternal deletion (Prader-Willi); Angelman = mAternal deletion' — P for Paternal = PW."
  },

  "Carbohydrate metabolism": {
    sections: [
      {
        heading: "Glycolysis (cytoplasm)",
        bullets: [
          "Rate-limiting enzyme: PFK-1; activated by AMP, fructose-2,6-bisphosphate (F-2,6-BP); inhibited by ATP, citrate",
          "F-2,6-BP produced by PFK-2 (activated by insulin via dephosphorylation in liver)",
          "Net yield: 2 ATP + 2 NADH per glucose (anaerobic); irreversible steps: hexokinase/glucokinase, PFK-1, pyruvate kinase",
          "Pyruvate fates: aerobic → acetyl-CoA (PDH); anaerobic → lactate (LDH); starvation → oxaloacetate (pyruvate carboxylase)"
        ]
      },
      {
        heading: "Pyruvate Dehydrogenase Complex",
        bullets: [
          "Cofactors: Thiamine (B1), Lipoic acid, CoA (B5), FAD (B2), NAD+ (B3) — 'Tender Loving Care For Nancy'",
          "Activated by: exercise, pyruvate; Inhibited by: acetyl-CoA, NADH, ATP",
          "Deficiency: lactic acidosis, neurologic deficits; treat with ketogenic diet"
        ]
      },
      {
        heading: "TCA Cycle & Electron Transport Chain",
        bullets: [
          "TCA: per acetyl-CoA → 3 NADH, 1 FADH2, 1 GTP; rate-limiting enzyme: isocitrate dehydrogenase",
          "ETC: Complex I (NADH → CoQ, inhibited by rotenone); Complex II (FADH2 → CoQ); Complex III (CoQ → Cyt c, antimycin A); Complex IV (Cyt c → O2, cyanide/CO)",
          "ATP synthase (Complex V, inhibited by oligomycin); Metformin mildly inhibits Complex I → activates AMPK"
        ]
      },
      {
        heading: "Gluconeogenesis",
        bullets: [
          "Liver (mainly) and kidneys; four bypass enzymes: pyruvate carboxylase, PEPCK, F-1,6-BPase, G-6-Pase",
          "Stimulated by glucagon and cortisol; inhibited by insulin",
          "Substrates: lactate (Cori cycle), alanine (Cahill/glucose-alanine cycle), glycerol, odd-chain FAs (propionyl-CoA → succinyl-CoA)"
        ]
      },
      {
        heading: "Glycogen Storage Diseases",
        bullets: [
          "GSD I (von Gierke): G-6-Pase deficiency → severe fasting hypoglycemia + lactic acidosis + hepatomegaly",
          "GSD II (Pompe): lysosomal acid maltase → cardiomegaly + hypotonia (only lysosomal GSD)",
          "GSD III (Cori): debranching enzyme → limit dextrin + mild hypoglycemia",
          "GSD V (McArdle): myophosphorylase → exercise cramps + myoglobinuria + flat forearm lactate test"
        ]
      },
      {
        heading: "Other Disorders",
        bullets: [
          "Classic galactosemia: GALT deficiency → cataracts + hepatomegaly + E. coli sepsis after milk",
          "Hereditary fructose intolerance: aldolase B deficiency → hypoglycemia after fructose (Pi trapping)",
          "Essential fructosuria: fructokinase deficiency → benign",
          "G6PD deficiency: ↓NADPH → oxidative hemolysis (Heinz bodies, bite cells) triggered by primaquine, fava beans, infections"
        ]
      }
    ],
    table: {
      headers: ["GSD Type","Name","Enzyme Deficient","Key Features"],
      rows: [
        ["I","Von Gierke","Glucose-6-phosphatase","Severe fasting hypoglycemia, hepatomegaly, lactic acidosis, hyperuricemia"],
        ["II","Pompe","Acid maltase (lysosomal)","Cardiomegaly, hypotonia, early death (infantile)"],
        ["III","Cori/Forbes","Debranching enzyme","Hepatomegaly, mild hypoglycemia, limit dextrin"],
        ["IV","Andersen","Branching enzyme","Cirrhosis, abnormal glycogen (long chains)"],
        ["V","McArdle","Myophosphorylase","Exercise cramps, myoglobinuria, second wind"]
      ]
    },
    mnemonic: "PDH cofactors: 'Tender Loving Care For Nancy' = Thiamine, Lipoic acid, CoA, FAD, NAD+. Same cofactors for α-ketoglutarate dehydrogenase and branched-chain α-ketoacid dehydrogenase."
  },

  "Lipid metabolism": {
    sections: [
      {
        heading: "Fatty Acid Synthesis (cytoplasm)",
        bullets: [
          "Rate-limiting enzyme: acetyl-CoA carboxylase (ACC); converts acetyl-CoA → malonyl-CoA",
          "ACC activated by insulin, citrate; inhibited by glucagon (AMPK phosphorylation), palmitoyl-CoA",
          "Requires NADPH (from HMP shunt and malic enzyme) and acetyl-CoA (transported as citrate via citrate shuttle)",
          "Fatty acid synthase: multienzyme complex; product = palmitate (16C)"
        ]
      },
      {
        heading: "β-Oxidation (mitochondria)",
        bullets: [
          "Long-chain FAs require carnitine shuttle: CPT-I (outer membrane), carnitine-acylcarnitine translocase, CPT-II (inner membrane)",
          "CPT-I is inhibited by malonyl-CoA (key regulatory point — fed state prevents oxidation)",
          "Each cycle removes 2 carbons → 1 FADH2 + 1 NADH + 1 acetyl-CoA",
          "Odd-chain FAs → propionyl-CoA → methylmalonyl-CoA → succinyl-CoA (requires B12, biotin)"
        ]
      },
      {
        heading: "Ketogenesis & Ketolysis",
        bullets: [
          "Occurs in liver mitochondria during fasting/starvation; liver makes but CANNOT use ketone bodies (lacks succinyl-CoA-acetoacetate CoA transferase/thiophorase)",
          "Pathway: acetyl-CoA → HMG-CoA (by HMG-CoA synthase) → acetoacetate → β-hydroxybutyrate (by β-hydroxybutyrate dehydrogenase, NADH-dependent)",
          "Ketone bodies used by brain, heart, skeletal muscle, kidneys during prolonged fasting"
        ]
      },
      {
        heading: "Cholesterol Metabolism",
        bullets: [
          "Rate-limiting enzyme: HMG-CoA reductase (target of statins); converts HMG-CoA → mevalonate",
          "Cholesterol → bile acids (rate-limiting: 7α-hydroxylase); bile acid sequestrants (cholestyramine) increase this",
          "SREBP-2 upregulates HMG-CoA reductase and LDL receptor when intracellular cholesterol is low"
        ]
      },
      {
        heading: "Lipoprotein Metabolism",
        bullets: [
          "Chylomicrons (intestine → tissues): carry dietary TGs; cleared by LPL (activated by apoC-II); remnants taken up by liver",
          "VLDL (liver → tissues): carry endogenous TGs; become IDL → LDL; LDL taken up by LDL receptor (apoB-100)",
          "HDL: reverse cholesterol transport; LCAT esterifies cholesterol; CETP transfers cholesteryl esters to other lipoproteins"
        ]
      },
      {
        heading: "Lipid Storage Diseases (Sphingolipidoses)",
        bullets: [
          "Tay-Sachs: hexosaminidase A deficiency → GM2 ganglioside → cherry-red spot, NO hepatosplenomegaly",
          "Niemann-Pick A: sphingomyelinase → sphingomyelin → cherry-red spot + hepatosplenomegaly + foamy macrophages",
          "Gaucher: glucocerebrosidase → glucocerebroside → crinkled tissue paper macrophages (most common LSD)",
          "Fabry: α-galactosidase A (X-linked!) → Gb3 → peripheral neuropathy + angiokeratomas + renal failure",
          "Krabbe: galactocerebrosidase → galactocerebroside/psychosine → globoid cells + demyelination"
        ]
      }
    ],
    table: {
      headers: ["Lipoprotein","Origin","Major Lipid","Key Apolipoprotein","Function"],
      rows: [
        ["Chylomicron","Intestine","Dietary TG","ApoB-48, ApoC-II, ApoE","Delivers dietary fat to tissues"],
        ["VLDL","Liver","Endogenous TG","ApoB-100, ApoC-II, ApoE","Delivers hepatic TG to tissues"],
        ["IDL","VLDL remnant","TG + Cholesterol","ApoB-100, ApoE","Intermediate; taken up by liver or → LDL"],
        ["LDL","IDL","Cholesterol","ApoB-100","Delivers cholesterol to tissues; 'bad' cholesterol"],
        ["HDL","Liver/intestine","Cholesterol esters","ApoA-I","Reverse cholesterol transport; 'good' cholesterol"]
      ]
    },
    mnemonic: "Sphingolipidoses — 'No man picks his nose with his sphinger': Niemann-Pick = sphingomyelinase. 'Tay-SaX = heXosaminidase.' Fabry is the Fabulous X-linked exception among lysosomal storage diseases."
  },

  "Vitamins & nutrition": {
    sections: [
      {
        heading: "Water-Soluble Vitamins",
        bullets: [
          "B1 (Thiamine): TPP cofactor for PDH, α-KG dehydrogenase, transketolase, branched-chain dehydrogenase; deficiency → beriberi (wet=cardiac, dry=neuro), Wernicke-Korsakoff",
          "B2 (Riboflavin): precursor to FAD, FMN; deficiency → angular cheilitis, glossitis, corneal vascularization",
          "B3 (Niacin): precursor to NAD+, NADP+; deficiency → pellagra (3 D's: dermatitis, diarrhea, dementia); derived from tryptophan",
          "B5 (Pantothenate): component of CoA and fatty acid synthase; deficiency → dermatitis, enteritis, alopecia, adrenal insufficiency",
          "B6 (Pyridoxine): PLP cofactor for transamination, decarboxylation, heme synthesis (ALA synthase); deficiency → peripheral neuropathy, sideroblastic anemia, seizures; INH depletes B6",
          "B7 (Biotin): cofactor for carboxylases (pyruvate carboxylase, ACC, propionyl-CoA carboxylase); deficiency → dermatitis, alopecia, enteritis; raw egg whites (avidin) bind biotin",
          "B9 (Folate): THF needed for 1-carbon transfers, purine/dTMP synthesis; deficiency → megaloblastic anemia (NO neuro), NTDs in pregnancy",
          "B12 (Cobalamin): cofactor for methionine synthase and methylmalonyl-CoA mutase; deficiency → megaloblastic anemia + neuro (subacute combined degeneration) + ↑methylmalonic acid",
          "Vitamin C (Ascorbic acid): antioxidant; cofactor for prolyl/lysyl hydroxylase (collagen), dopamine β-hydroxylase; deficiency → scurvy"
        ]
      },
      {
        heading: "Fat-Soluble Vitamins (A, D, E, K)",
        bullets: [
          "Vitamin A (Retinol): vision (retinal in rhodopsin), cell differentiation, immune function; deficiency → night blindness, Bitot spots, xerophthalmia; toxicity → pseudotumor cerebri, teratogenicity",
          "Vitamin D: 25-OH-D (liver) → 1,25-(OH)2-D (kidney, 1α-hydroxylase); deficiency → rickets (children), osteomalacia (adults); toxicity → hypercalcemia",
          "Vitamin E (α-Tocopherol): lipid-soluble antioxidant; deficiency → hemolytic anemia, spinocerebellar degeneration, retinitis pigmentosa",
          "Vitamin K: γ-carboxylation of factors II, VII, IX, X, protein C & S; antagonized by warfarin; neonatal prophylaxis IM injection at birth"
        ]
      },
      {
        heading: "Key Clinical Associations",
        bullets: [
          "Alcoholism → thiamine (B1), folate (B9), B6 deficiency most common",
          "Bariatric surgery → B12, iron, fat-soluble vitamin (A, D, E, K) deficiency",
          "Isoniazid → B6 depletion → supplement B6 with INH therapy",
          "Corn-based diet → niacin (B3) deficiency (pellagra); corn niacin is bound and unavailable",
          "Megaloblastic anemia: B12 vs folate — B12 has neuro symptoms + ↑methylmalonic acid; folate does not"
        ]
      }
    ],
    table: {
      headers: ["Vitamin","Active Form","Key Function","Deficiency","Toxicity"],
      rows: [
        ["B1","TPP","Decarboxylation (PDH, α-KG DH)","Beriberi, Wernicke-Korsakoff","Rare"],
        ["B3","NAD+/NADP+","Redox reactions","Pellagra (3 D's)","Flushing (PGD2), hepatotoxicity"],
        ["B6","PLP","Transamination, decarboxylation","Neuropathy, sideroblastic anemia, seizures","Peripheral neuropathy (high dose)"],
        ["B12","Methylcobalamin, adenosylcobalamin","Methionine synthase, methylmalonyl-CoA mutase","Megaloblastic anemia + neuro","Rare"],
        ["C","Ascorbic acid","Collagen hydroxylation, antioxidant","Scurvy","Oxalate stones, GI upset"],
        ["A","Retinal, retinoic acid","Vision, differentiation","Night blindness, xerophthalmia","Pseudotumor cerebri, teratogen"],
        ["D","1,25-(OH)2-D","Ca/PO4 absorption","Rickets/osteomalacia","Hypercalcemia"],
        ["K","Reduced vitamin K","γ-Carboxylation of clotting factors","Bleeding (↑PT/INR)","Rare"]
      ]
    },
    mnemonic: "Fat-soluble vitamins: 'A DEK in the fat' (A, D, E, K are fat-soluble). B12 vs Folate: 'B12 attacks Both Blood and Nerves; Folate attacks only Blood.'"
  },

  "Cellular organelles & trafficking": {
    sections: [
      {
        heading: "Endoplasmic Reticulum (ER)",
        bullets: [
          "Rough ER (with ribosomes): protein synthesis for secretory, membrane, and lysosomal proteins; N-linked glycosylation begins here",
          "Smooth ER: lipid synthesis, steroid hormone production, drug detoxification (cytochrome P450), calcium storage",
          "Signal recognition particle (SRP) targets nascent polypeptides with signal sequences to the rough ER",
          "ER quality control: misfolded proteins undergo ER-associated degradation (ERAD) → retrotranslocated to cytoplasm → ubiquitin-proteasome",
          "KDEL sequence: ER retention signal; retrieves escaped ER-resident proteins from cis-Golgi via COPI vesicles"
        ]
      },
      {
        heading: "Golgi Apparatus",
        bullets: [
          "cis-Golgi (receiving face) → medial → trans-Golgi (shipping face)",
          "Functions: O-linked glycosylation, modification of N-linked oligosaccharides, proteoglycan assembly, mannose-6-phosphate tagging of lysosomal enzymes",
          "I-cell disease: defective N-acetylglucosamine-1-phosphotransferase → no M6P tag → lysosomal enzymes secreted extracellularly"
        ]
      },
      {
        heading: "Vesicular Transport",
        bullets: [
          "COPII: ER → Golgi (anterograde); coated by Sar1 GTPase",
          "COPI: Golgi → ER (retrograde) and intra-Golgi; coated by ARF1 GTPase; brefeldin A blocks ARF1 → Golgi disassembly",
          "Clathrin: receptor-mediated endocytosis at plasma membrane (adaptin/AP-2) and trans-Golgi → lysosome (AP-1)",
          "SNARE proteins: mediate vesicle-target membrane fusion (v-SNAREs on vesicle, t-SNAREs on target)"
        ]
      },
      {
        heading: "Lysosomes",
        bullets: [
          "Acidic compartment (pH ~5); contain acid hydrolases activated at low pH",
          "Lysosomal enzymes tagged with mannose-6-phosphate in the Golgi for proper targeting",
          "Lysosomal storage diseases: accumulation of undigested substrate due to specific enzyme deficiency",
          "Pompe disease (GSD II): only GSD that is also a lysosomal storage disease (acid maltase deficiency)"
        ]
      },
      {
        heading: "Peroxisomes",
        bullets: [
          "Functions: VLCFA β-oxidation (shortened chains then go to mitochondria), α-oxidation (phytanic acid), plasmalogen synthesis, bile acid synthesis",
          "Contain catalase (degrades H2O2 → H2O + O2)",
          "Targeting signal: PTS1 (C-terminal SKL) via Pex5 receptor; PTS2 (N-terminal) via Pex7",
          "Zellweger syndrome: absent peroxisomes (PEX gene mutation) → ↑VLCFAs + hypotonia + seizures + craniofacial dysmorphism",
          "X-linked adrenoleukodystrophy: ABCD1 transporter defect → ↑VLCFAs → adrenal insufficiency + cerebral demyelination"
        ]
      },
      {
        heading: "Cytoskeleton",
        bullets: [
          "Microtubules: tubulin polymers; tracks for vesicular transport (kinesin = + end/anterograde, dynein = - end/retrograde); cilia (9+2 arrangement); mitotic spindle",
          "Drugs: colchicine/vincristine prevent polymerization; paclitaxel prevents depolymerization",
          "Kartagener syndrome: dynein arm defect → immotile cilia → situs inversus + bronchiectasis + sinusitis + infertility",
          "Actin microfilaments: cell motility, cytokinesis, microvilli; Intermediate filaments: structural (vimentin, keratin, desmin, GFAP, neurofilaments)"
        ]
      },
      {
        heading: "Proteasome & Protein Degradation",
        bullets: [
          "Ubiquitin-proteasome pathway: polyubiquitination → 26S proteasome degradation (cytoplasm/nucleus)",
          "Bortezomib: proteasome inhibitor used in multiple myeloma",
          "ERAD: misfolded ER proteins retrotranslocated to cytoplasm for proteasomal degradation"
        ]
      }
    ],
    table: {
      headers: ["Coat Protein","Route","GTPase","Key Inhibitor"],
      rows: [
        ["COPII","ER → Golgi (anterograde)","Sar1","—"],
        ["COPI","Golgi → ER (retrograde)","ARF1","Brefeldin A"],
        ["Clathrin","PM endocytosis; TGN → lysosome","—","—"]
      ]
    },
    mnemonic: "Vesicle coats: 'TWO goes forward, ONE goes back' — COPII = anterograde (ER→Golgi), COPI = retrograde (Golgi→ER). Clathrin = 'Clathrin Catches things at the Cell surface.'"
  }
};
