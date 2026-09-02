const MSK_QUESTIONS = {
  "Bone & joint disorders": [
    {
      vignette: "A 68-year-old postmenopausal woman presents with acute onset of severe back pain after lifting a bag of groceries. She has a history of early menopause at age 42 and has never taken hormone replacement therapy. Physical examination reveals point tenderness over the thoracolumbar spine. X-ray demonstrates a compression fracture of T12 with diffuse osteopenia. DEXA scan reveals a T-score of -3.2.",
      question: "Which of the following is the most likely underlying mechanism of this patient's bone disease?",
      options: ["Increased osteoclast activity due to estrogen deficiency","Defective mineralization of osteoid matrix","Replacement of bone marrow by fibrous tissue","Neoplastic proliferation of plasma cells in bone marrow","Decreased renal phosphate reabsorption"],
      correctIndex: 0,
      explanation: "This patient has osteoporosis secondary to estrogen deficiency. Estrogen normally suppresses osteoclast activity by promoting osteoclast apoptosis and inhibiting RANKL expression. After menopause, decreased estrogen leads to increased RANKL signaling, enhanced osteoclast differentiation and survival, and net bone resorption exceeding bone formation. This results in decreased bone density with normal mineralization, distinguishing it from osteomalacia.",
      optionExplanations: [
        "Correct. Estrogen deficiency leads to increased RANKL/decreased OPG, enhancing osteoclast-mediated bone resorption and causing osteoporosis.",
        "Incorrect. Defective mineralization of osteoid describes osteomalacia (in adults) or rickets (in children), typically due to vitamin D deficiency or hypophosphatemia.",
        "Incorrect. Replacement of marrow with fibrous tissue describes osteitis fibrosa cystica, seen in primary hyperparathyroidism.",
        "Incorrect. Neoplastic plasma cell proliferation describes multiple myeloma, which causes lytic bone lesions rather than diffuse osteopenia.",
        "Incorrect. Decreased renal phosphate reabsorption occurs in X-linked hypophosphatemia, causing rickets/osteomalacia, not osteoporosis."
      ],
      highYieldPoint: "Estrogen inhibits osteoclasts via OPG/RANKL pathway; postmenopausal estrogen loss leads to increased bone resorption and osteoporosis with normal mineralization."
    },
    {
      vignette: "A 4-year-old boy is brought to the clinic because of recurrent fractures. He has had 6 fractures since birth, some occurring with minimal trauma. Physical examination reveals blue sclerae, mild hearing impairment, and dental abnormalities with opalescent teeth. His parents are unaffected.",
      question: "Which of the following is the most likely defective protein in this patient's condition?",
      options: ["Fibrillin-1","Type I collagen","Elastin","Dystrophin","Type II collagen"],
      correctIndex: 1,
      explanation: "This child has osteogenesis imperfecta (OI), which is caused by defects in type I collagen synthesis. Type I collagen is the most abundant collagen in bone, skin, tendons, and dentin. Mutations in COL1A1 or COL1A2 genes lead to structurally abnormal or insufficient type I collagen. The classic triad includes brittle bones, blue sclerae (thinned sclera allows visualization of underlying choroidal veins), and hearing loss (ossicle abnormalities).",
      optionExplanations: [
        "Incorrect. Fibrillin-1 deficiency causes Marfan syndrome, characterized by tall stature, arachnodactyly, lens subluxation, and aortic root dilation.",
        "Correct. Osteogenesis imperfecta results from defective type I collagen, causing brittle bones, blue sclerae, hearing loss, and dentinogenesis imperfecta.",
        "Incorrect. Elastin defects cause Williams syndrome (elastin gene deletion) or cutis laxa, not bone fragility.",
        "Incorrect. Dystrophin deficiency causes Duchenne muscular dystrophy, a progressive muscle wasting disorder.",
        "Incorrect. Type II collagen defects cause chondrodysplasias affecting cartilage rather than the classic OI presentation."
      ],
      highYieldPoint: "Osteogenesis imperfecta = defective type I collagen → brittle bones, blue sclerae, hearing loss, dentinogenesis imperfecta; most common type is autosomal dominant."
    },
    {
      vignette: "A 14-year-old boy presents with a 3-month history of progressive knee pain and swelling. He denies trauma. Physical examination reveals a firm, tender mass in the distal femur. X-ray shows a destructive lesion in the metaphysis with a sunburst pattern of periosteal reaction and a Codman triangle. Biopsy reveals malignant cells producing osteoid.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Ewing sarcoma","Giant cell tumor","Osteosarcoma","Chondrosarcoma","Osteochondroma"],
      correctIndex: 2,
      explanation: "Osteosarcoma is the most common primary malignant bone tumor in adolescents. It typically arises in the metaphysis of long bones (distal femur, proximal tibia) during the growth spurt. Characteristic radiographic features include a sunburst pattern (radiating periosteal new bone) and Codman triangle (periosteal elevation). Histologically, malignant osteoblasts producing osteoid are pathognomonic.",
      optionExplanations: [
        "Incorrect. Ewing sarcoma occurs in the diaphysis of long bones in children <15, shows an 'onion-skin' periosteal reaction, and has small round blue cells with t(11;22) translocation.",
        "Incorrect. Giant cell tumor occurs at the epiphysis in adults 20-40, shows a 'soap bubble' appearance on X-ray, and contains multinucleated giant cells with stromal cells.",
        "Correct. Osteosarcoma is a malignant bone tumor of adolescents arising in the metaphysis with sunburst pattern, Codman triangle, and malignant osteoid production.",
        "Incorrect. Chondrosarcoma is a malignant cartilaginous tumor typically occurring in adults >40, often in the pelvis or proximal femur.",
        "Incorrect. Osteochondroma is the most common benign bone tumor, presenting as a cartilage-capped bony outgrowth, not a destructive metaphyseal lesion."
      ],
      highYieldPoint: "Osteosarcoma: most common primary malignant bone tumor in adolescents; metaphysis of long bones; sunburst pattern + Codman triangle; malignant osteoid production; bimodal peak (teens and elderly with Paget disease)."
    },
    {
      vignette: "A 72-year-old man presents with progressive enlargement of his skull and increasing hat size over the past 2 years. He also reports hearing loss and low back pain. Laboratory studies show markedly elevated serum alkaline phosphatase with normal calcium and phosphate levels. X-ray of the skull reveals thickened calvarium with areas of sclerosis and lucency described as a 'cotton wool' appearance.",
      question: "Which of the following best describes the pathophysiology of this patient's condition?",
      options: ["Metastatic calcification from hypercalcemia","Deficient vitamin D hydroxylation","Primary neoplastic proliferation of osteoblasts","Disordered bone remodeling with excessive osteoclast and osteoblast activity","Decreased bone formation due to osteoblast apoptosis"],
      correctIndex: 3,
      explanation: "This patient has Paget disease of bone, characterized by disordered and excessive bone remodeling. The disease progresses through three phases: (1) lytic phase with intense osteoclast activity, (2) mixed phase with both osteoclast and osteoblast activity, and (3) sclerotic phase with predominantly osteoblastic activity producing disorganized woven bone. The markedly elevated alkaline phosphatase reflects increased osteoblast activity, while calcium and phosphate remain normal.",
      optionExplanations: [
        "Incorrect. Metastatic calcification occurs in hypercalcemia, but this patient has normal calcium levels.",
        "Incorrect. Deficient vitamin D hydroxylation causes osteomalacia/rickets with low calcium and phosphate.",
        "Incorrect. Primary osteoblast neoplasm describes osteosarcoma, not Paget disease; however, osteosarcoma can complicate Paget disease (1% of cases).",
        "Correct. Paget disease involves chaotic bone remodeling with excessive osteoclastic resorption followed by disorganized osteoblastic bone formation, resulting in structurally weak, enlarged bones.",
        "Incorrect. Decreased bone formation from osteoblast apoptosis would cause osteoporosis, not the thickened, enlarged bones seen here."
      ],
      highYieldPoint: "Paget disease: chaotic bone remodeling → thick but weak mosaic/woven bone; markedly elevated ALP with normal Ca/PO4; risk of osteosarcoma (1%); associated with paramyxovirus."
    },
    {
      vignette: "A 55-year-old man presents with acute onset of excruciating pain, swelling, and redness of his right first metatarsophalangeal joint. He had a large steak dinner with several beers the night before. Aspiration of the joint fluid reveals negatively birefringent, needle-shaped crystals under polarized light microscopy. Serum uric acid is 9.8 mg/dL.",
      question: "Which of the following enzymes, if deficient, could predispose this patient to developing this condition?",
      options: ["Adenosine deaminase","Xanthine oxidase","Purine nucleoside phosphorylase","Glucose-6-phosphatase","Hypoxanthine-guanine phosphoribosyltransferase"],
      correctIndex: 4,
      explanation: "This patient has acute gout caused by monosodium urate crystal deposition. HGPRT (hypoxanthine-guanine phosphoribosyltransferase) is a key enzyme in the purine salvage pathway that converts hypoxanthine and guanine back to their nucleotide forms. Deficiency of HGPRT reduces purine salvage, leading to increased de novo purine synthesis and elevated uric acid production. Complete HGPRT deficiency causes Lesch-Nyhan syndrome; partial deficiency predisposes to gout.",
      optionExplanations: [
        "Incorrect. Adenosine deaminase (ADA) deficiency causes severe combined immunodeficiency (SCID) due to accumulation of toxic deoxyadenosine in lymphocytes.",
        "Incorrect. Xanthine oxidase converts hypoxanthine to xanthine and xanthine to uric acid. Its inhibition (by allopurinol) is a treatment for gout, not a cause.",
        "Incorrect. Purine nucleoside phosphorylase deficiency causes T-cell immunodeficiency, not hyperuricemia.",
        "Incorrect. Glucose-6-phosphatase deficiency causes von Gierke disease (glycogen storage disease type I) with hypoglycemia and hepatomegaly.",
        "Correct. This is the answer — HGPRT is the enzyme in the purine salvage pathway whose deficiency increases uric acid production and causes gout."
      ],
      highYieldPoint: "HGPRT deficiency → decreased purine salvage → increased de novo purine synthesis → hyperuricemia → gout; complete deficiency = Lesch-Nyhan syndrome."
    },
    {
      vignette: "A 58-year-old obese woman presents with chronic bilateral knee pain that worsens with activity and improves with rest. She reports morning stiffness lasting less than 30 minutes. Physical examination reveals bony enlargement of the distal interphalangeal joints and crepitus in both knees. X-rays show joint space narrowing, osteophyte formation, subchondral sclerosis, and subchondral cysts.",
      question: "Which of the following best describes the initial pathologic event in this patient's condition?",
      options: ["Pannus formation eroding articular cartilage","Degradation of articular cartilage by proteolytic enzymes","Crystal deposition in synovial fluid","Autoimmune destruction of synovial membrane","Infection of the joint space by bacteria"],
      correctIndex: 1,
      explanation: "This patient has osteoarthritis (OA), a degenerative joint disease initiated by degradation of articular cartilage. The primary pathologic event involves mechanical wear and enzymatic degradation (by matrix metalloproteinases and aggrecanases) of the cartilage matrix. Loss of proteoglycans and collagen leads to cartilage fibrillation, erosion, and eventual exposure of subchondral bone. The resultant eburnation and reactive bone changes produce the characteristic radiographic findings.",
      optionExplanations: [
        "Incorrect. Pannus formation is characteristic of rheumatoid arthritis, where inflamed synovium invades and destroys cartilage and bone.",
        "Correct. Osteoarthritis begins with chondrocyte-driven proteolytic degradation of the articular cartilage matrix, leading to cartilage loss and secondary bony changes.",
        "Incorrect. Crystal deposition causes gout (urate) or pseudogout (calcium pyrophosphate), which present with acute inflammatory episodes.",
        "Incorrect. Autoimmune synovial destruction describes rheumatoid arthritis, which has symmetric joint involvement and prolonged morning stiffness.",
        "Incorrect. Septic arthritis is an acute monoarticular condition with fever, not a chronic bilateral degenerative process."
      ],
      highYieldPoint: "Osteoarthritis: wear-and-tear degradation of articular cartilage by MMPs → DIP (Heberden) and PIP (Bouchard) nodes, osteophytes, subchondral sclerosis; morning stiffness <30 min."
    },
    {
      vignette: "A 3-year-old boy presents with a limp and refusal to bear weight on his right leg. His parents note he has been irritable for 2 days. He has a temperature of 39.2°C. Physical examination reveals severe pain with passive range of motion of the right hip. Laboratory studies show WBC 18,000/μL and ESR 65 mm/hr. Joint aspiration yields purulent fluid with >50,000 WBC/μL, predominantly neutrophils.",
      question: "Which of the following organisms is the most likely cause of this patient's condition?",
      options: ["Neisseria gonorrhoeae","Pseudomonas aeruginosa","Staphylococcus aureus","Streptococcus pneumoniae","Kingella kingae"],
      correctIndex: 2,
      explanation: "Staphylococcus aureus is the most common cause of septic arthritis in children older than 2 years and in adults. The presentation of fever, refusal to bear weight, elevated inflammatory markers, and purulent joint aspirate with >50,000 WBC/μL is classic for bacterial septic arthritis. S. aureus reaches the joint via hematogenous spread and produces virulence factors including protein A and coagulase that facilitate joint destruction.",
      optionExplanations: [
        "Incorrect. Neisseria gonorrhoeae is the most common cause of septic arthritis in sexually active young adults, not in young children.",
        "Incorrect. Pseudomonas aeruginosa is associated with septic arthritis in IV drug users and following puncture wounds through sneakers.",
        "Correct. Staphylococcus aureus is the most common cause of septic arthritis in children >2 years and adults, spreading hematogenously to the joint.",
        "Incorrect. While S. pneumoniae can cause septic arthritis, it is far less common than S. aureus in this age group.",
        "Incorrect. Kingella kingae is an increasingly recognized cause of septic arthritis in children aged 6 months to 4 years but is less common than S. aureus overall."
      ],
      highYieldPoint: "Septic arthritis most common causes: S. aureus (overall #1), N. gonorrhoeae (sexually active young adults), Kingella kingae (infants/toddlers); joint aspiration >50,000 WBC is diagnostic."
    },
    {
      vignette: "A 12-year-old boy presents with a 2-month history of pain and swelling in his left femoral diaphysis. He has intermittent fevers and malaise. Biopsy reveals sheets of small, round, blue cells with high nuclear-to-cytoplasmic ratio. Immunohistochemistry shows strong membranous CD99 positivity. Cytogenetic analysis reveals a t(11;22) translocation.",
      question: "Which of the following fusion proteins results from the translocation identified in this tumor?",
      options: ["BCR-ABL","PAX3-FOXO1","PML-RARα","EWS-FLI1","SYT-SSX"],
      correctIndex: 3,
      explanation: "Ewing sarcoma is characterized by the t(11;22)(q24;q12) translocation, which fuses the EWSR1 gene on chromosome 22 with the FLI1 gene on chromosome 11, producing the EWS-FLI1 fusion protein. This chimeric transcription factor drives oncogenesis. The tumor presents in the diaphysis of long bones in children and adolescents, with characteristic small round blue cells that are CD99+ and show an onion-skin periosteal reaction on imaging.",
      optionExplanations: [
        "Incorrect. BCR-ABL results from t(9;22) and is characteristic of chronic myeloid leukemia and Philadelphia chromosome-positive ALL.",
        "Incorrect. PAX3-FOXO1 results from t(2;13) and is associated with alveolar rhabdomyosarcoma.",
        "Incorrect. PML-RARα results from t(15;17) and is characteristic of acute promyelocytic leukemia (APL).",
        "Correct. EWS-FLI1 results from t(11;22) and is the defining molecular feature of Ewing sarcoma.",
        "Incorrect. SYT-SSX results from t(X;18) and is associated with synovial sarcoma."
      ],
      highYieldPoint: "Ewing sarcoma: t(11;22) → EWS-FLI1 fusion; small round blue cells, CD99+; diaphysis of long bones; onion-skin periosteal reaction; age 5-15."
    },
    {
      vignette: "A 60-year-old man with chronic kidney disease presents with bone pain and proximal muscle weakness. Laboratory studies show serum calcium 7.8 mg/dL, phosphate 6.5 mg/dL, alkaline phosphatase 280 U/L, and intact PTH 450 pg/mL (normal 10-65). X-rays show diffuse osteopenia with subperiosteal bone resorption of the phalanges and a 'salt and pepper' appearance of the skull.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Primary hyperparathyroidism","Vitamin D intoxication","Osteoporosis","Osteopetrosis","Renal osteodystrophy"],
      correctIndex: 4,
      explanation: "This patient has renal osteodystrophy, a spectrum of bone disease caused by chronic kidney disease. CKD leads to decreased 1,25-dihydroxyvitamin D synthesis (due to loss of renal 1-alpha hydroxylase), hyperphosphatemia (due to decreased renal phosphate excretion), and resultant hypocalcemia. These changes stimulate secondary hyperparathyroidism with markedly elevated PTH, causing osteitis fibrosa cystica with subperiosteal resorption and the characteristic salt-and-pepper skull.",
      optionExplanations: [
        "Incorrect. Primary hyperparathyroidism presents with hypercalcemia (not hypocalcemia) due to autonomous PTH secretion from a parathyroid adenoma.",
        "Incorrect. Vitamin D intoxication causes hypercalcemia and hyperphosphatemia with suppressed PTH, the opposite of this presentation.",
        "Incorrect. Osteoporosis shows decreased bone density but normal calcium, phosphate, and PTH levels.",
        "Incorrect. Osteopetrosis is caused by defective osteoclast function leading to overly dense, brittle bones — the opposite of this patient's findings.",
        "Correct. Renal osteodystrophy due to CKD causes secondary hyperparathyroidism with hypocalcemia, hyperphosphatemia, and elevated PTH, leading to subperiosteal resorption."
      ],
      highYieldPoint: "CKD → ↓1,25(OH)₂D₃ → ↓Ca²⁺ absorption + ↑PO₄³⁻ → secondary hyperparathyroidism → renal osteodystrophy with osteitis fibrosa cystica."
    },
    {
      vignette: "A 45-year-old woman undergoes DEXA scanning which reveals a T-score of -1.8 at the lumbar spine. She has a family history of hip fractures. Her physician recommends a bisphosphonate for treatment. She asks how the medication works.",
      question: "Which of the following best describes the mechanism of action of bisphosphonates?",
      options: ["Inhibition of osteoclast activity by binding to hydroxyapatite","Stimulation of osteoblast differentiation","Competitive antagonism of PTH receptors","Activation of vitamin D receptors","Inhibition of RANKL binding to RANK"],
      correctIndex: 0,
      explanation: "Bisphosphonates (e.g., alendronate, risedronate, zoledronic acid) are pyrophosphate analogs that bind avidly to hydroxyapatite in bone. When osteoclasts attempt to resorb bone containing bisphosphonates, the drugs are internalized and inhibit the mevalonate pathway (specifically farnesyl pyrophosphate synthase), disrupting the osteoclast cytoskeleton, inducing apoptosis, and reducing bone resorption. They are first-line therapy for osteoporosis.",
      optionExplanations: [
        "Correct. Bisphosphonates bind hydroxyapatite and are internalized by osteoclasts, where they inhibit farnesyl pyrophosphate synthase, disrupting osteoclast function and promoting apoptosis.",
        "Incorrect. Bisphosphonates primarily inhibit osteoclasts rather than stimulating osteoblasts. Teriparatide (PTH analog) stimulates osteoblast function.",
        "Incorrect. No current osteoporosis drug works as a PTH receptor antagonist.",
        "Incorrect. Vitamin D receptor activation is the mechanism of calcitriol supplementation, not bisphosphonates.",
        "Incorrect. RANKL inhibition describes the mechanism of denosumab, a monoclonal antibody, not bisphosphonates."
      ],
      highYieldPoint: "Bisphosphonates bind hydroxyapatite → internalized by osteoclasts → inhibit farnesyl pyrophosphate synthase (mevalonate pathway) → osteoclast apoptosis; SE: esophagitis, osteonecrosis of jaw."
    },
    {
      vignette: "A 7-year-old boy presents with painless swelling near his left knee. X-ray reveals a pedunculated bony projection with a cartilaginous cap arising from the metaphysis of the distal femur, pointing away from the joint. The cortex of the lesion is continuous with the underlying bone cortex.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Enchondroma","Osteochondroma","Osteoid osteoma","Aneurysmal bone cyst","Chondroblastoma"],
      correctIndex: 1,
      explanation: "Osteochondroma is the most common benign bone tumor. It presents as a cartilage-capped bony exostosis arising from the metaphysis with cortical and medullary continuity with the parent bone. It typically grows away from the adjacent joint. Most are solitary and found incidentally in children and adolescents. Multiple hereditary exostoses (autosomal dominant EXT gene mutations) carry a higher risk of malignant transformation to chondrosarcoma.",
      optionExplanations: [
        "Incorrect. Enchondroma is a benign cartilaginous tumor within the medullary cavity, most common in the hands, presenting as a well-defined lucent lesion.",
        "Correct. Osteochondroma is a cartilage-capped bony outgrowth from the metaphysis with cortical continuity; most common benign bone tumor.",
        "Incorrect. Osteoid osteoma is a small (<2 cm) painful benign bone tumor with a central nidus, classically causing pain relieved by NSAIDs, especially at night.",
        "Incorrect. Aneurysmal bone cyst presents as an expansile, blood-filled, multiloculated lytic lesion, not a pedunculated exostosis.",
        "Incorrect. Chondroblastoma is a rare benign tumor arising in the epiphysis of long bones in young patients."
      ],
      highYieldPoint: "Osteochondroma: most common benign bone tumor; metaphyseal, cartilage-capped exostosis with cortical continuity; grows away from joint; risk of chondrosarcoma if multiple (hereditary exostoses)."
    },
    {
      vignette: "A 35-year-old woman presents with progressive pain in her right wrist over several months. She reports the pain is worse at night and is dramatically relieved by aspirin. CT scan shows a small (<2 cm), well-circumscribed, radiolucent lesion in the distal radius with a central calcified nidus surrounded by reactive sclerosis.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Giant cell tumor","Osteoblastoma","Osteoid osteoma","Fibrous dysplasia","Osteosarcoma"],
      correctIndex: 2,
      explanation: "Osteoid osteoma is a benign bone tumor characterized by a small central nidus (<2 cm) surrounded by dense reactive sclerosis. The nidus produces prostaglandins (especially PGE2), which cause intense pain that is characteristically worse at night and dramatically relieved by NSAIDs/aspirin (prostaglandin synthesis inhibitors). It most commonly affects the cortex of long bones in young adults.",
      optionExplanations: [
        "Incorrect. Giant cell tumor occurs at the epiphysis of long bones in adults 20-40 and shows a soap-bubble lytic pattern without a nidus.",
        "Incorrect. Osteoblastoma is histologically similar to osteoid osteoma but is >2 cm, does not characteristically respond to NSAIDs, and often occurs in the posterior spine.",
        "Correct. Osteoid osteoma presents with nocturnal pain relieved by NSAIDs, a small radiolucent nidus <2 cm, and surrounding reactive sclerosis.",
        "Incorrect. Fibrous dysplasia shows a ground-glass appearance on imaging due to replacement of bone with fibrous tissue and woven bone.",
        "Incorrect. Osteosarcoma is a malignant tumor with destructive features, sunburst pattern, and Codman triangle, not a well-circumscribed nidus."
      ],
      highYieldPoint: "Osteoid osteoma: <2 cm nidus producing PGE2 → nocturnal pain relieved by NSAIDs; surrounded by reactive sclerosis; if >2 cm, consider osteoblastoma."
    },
    {
      vignette: "A 25-year-old woman presents with an expansile, eccentric lytic lesion in the epiphysis of her proximal tibia discovered on X-ray after knee pain. The lesion has a 'soap-bubble' appearance. Biopsy shows numerous multinucleated giant cells with uniform, oval, mononuclear stromal cells. The giant cells contain 50-100 nuclei each.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Brown tumor of hyperparathyroidism","Aneurysmal bone cyst","Langerhans cell histiocytosis","Osteoclastoma (giant cell tumor)","Chondroblastoma"],
      correctIndex: 3,
      explanation: "Giant cell tumor (osteoclastoma) is a locally aggressive benign bone tumor that characteristically occurs in the epiphysis of long bones in adults aged 20-40. The soap-bubble appearance on X-ray reflects the lytic, expansile nature. Histologically, it contains abundant multinucleated osteoclast-like giant cells (with numerous nuclei resembling the surrounding stromal cell nuclei) interspersed with neoplastic mononuclear stromal cells, which are the true neoplastic component.",
      optionExplanations: [
        "Incorrect. Brown tumors occur in hyperparathyroidism and also contain giant cells but are associated with elevated PTH and typically involve the jaw or long bone metaphysis.",
        "Incorrect. Aneurysmal bone cysts are blood-filled, multiloculated lesions that occur in the metaphysis, not the epiphysis.",
        "Incorrect. Langerhans cell histiocytosis features Birbeck granule-containing Langerhans cells with CD1a+ staining, not osteoclast-like giant cells.",
        "Correct. Giant cell tumor (osteoclastoma) occurs at the epiphysis in young adults with a soap-bubble pattern and multinucleated giant cells with mononuclear stromal cells.",
        "Incorrect. Chondroblastoma also occurs in the epiphysis but contains chondroblasts with a 'chicken-wire' calcification pattern."
      ],
      highYieldPoint: "Giant cell tumor: epiphysis of long bones; 20-40 yo; soap-bubble lytic lesion; multinucleated giant cells + neoplastic mononuclear stromal cells; locally aggressive, may recur."
    },
    {
      vignette: "A 2-year-old boy presents with progressive bowing of both legs. His mother notes he has been growing slowly. Laboratory studies show serum calcium 8.0 mg/dL, phosphate 2.1 mg/dL, alkaline phosphatase 520 U/L, and 25-hydroxyvitamin D 8 ng/mL (normal >30). X-rays reveal widened, cupped, and frayed metaphyses with decreased bone density.",
      question: "Which of the following is the primary defect causing this patient's skeletal findings?",
      options: ["Failure to resorb cartilage during endochondral ossification","Accelerated bone turnover with disorganized remodeling","Excessive proliferation of chondrocytes in the growth plate","Defective intramembranous ossification","Impaired mineralization of osteoid and epiphyseal cartilage"],
      correctIndex: 4,
      explanation: "This child has rickets due to severe vitamin D deficiency. Vitamin D is essential for calcium and phosphate absorption from the gut. Deficiency leads to hypocalcemia and hypophosphatemia, which impair mineralization of osteoid (in bone) and the growth plate cartilage. The result is widened, unmineralized growth plates (widened/cupped/frayed metaphyses), soft bones (bowing), and elevated alkaline phosphatase (compensatory osteoblast activity).",
      optionExplanations: [
        "Incorrect. Failure to resorb cartilage describes achondroplasia-like defects, not rickets.",
        "Incorrect. Accelerated disorganized bone turnover describes Paget disease, which presents in older adults.",
        "Incorrect. Excessive chondrocyte proliferation is not the mechanism; the growth plate widens due to failure of mineralization and calcification.",
        "Incorrect. Intramembranous ossification defects affect flat bones (skull) and do not explain the growth plate findings of rickets.",
        "Correct. Vitamin D deficiency → ↓Ca²⁺/PO₄³⁻ absorption → impaired mineralization of osteoid and growth plate cartilage → rickets."
      ],
      highYieldPoint: "Rickets (children) / osteomalacia (adults): vitamin D deficiency → ↓Ca²⁺/PO₄³⁻ → impaired mineralization; rickets shows widened, cupped, frayed metaphyses + bowing of legs."
    },
    {
      vignette: "A 50-year-old man with a 30-year history of poorly controlled type 1 diabetes mellitus presents with progressive midfoot collapse and deformity of his right foot. He denies significant pain despite visible swelling and a warm, erythematous foot. X-rays demonstrate severe joint destruction, subluxation, bone fragmentation, and disorganization of the midfoot joints.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Septic arthritis","Avascular necrosis","Neuropathic (Charcot) joint","Rheumatoid arthritis of the foot","Stress fracture with nonunion"],
      correctIndex: 0,
      explanation: "This patient has a neuropathic (Charcot) joint, a severe destructive arthropathy resulting from loss of proprioception and pain sensation due to diabetic peripheral neuropathy. Without protective pain reflexes, repetitive microtrauma goes unnoticed, leading to progressive joint destruction, pathologic fractures, and gross deformity. The midfoot (tarsometatarsal joints) is most commonly affected in diabetic Charcot arthropathy. Key clue: severe joint destruction with disproportionately minimal pain.",
      optionExplanations: [
        "Correct. Neuropathic (Charcot) joint results from loss of protective sensation; severe joint destruction with surprisingly little pain in a diabetic patient is classic.",
        "Incorrect. Avascular necrosis causes localized bone death (typically femoral head) and does not produce the disorganized, fragmented pattern seen here.",
        "Incorrect. While this IS the correct diagnosis (Charcot joint), 'Septic arthritis' would present with acute fever, elevated WBC, and purulent joint fluid.",
        "Incorrect. Rheumatoid arthritis causes symmetric small joint erosions with pannus formation, not the gross destructive disorganization seen here.",
        "Incorrect. Stress fractures cause focal bone injury, not diffuse joint destruction with subluxation and fragmentation."
      ],
      highYieldPoint: "Charcot joint: neuropathic arthropathy due to loss of pain/proprioception → severe joint destruction with minimal pain; most commonly diabetic neuropathy (midfoot) or syphilis (knee)."
    }
  ],
  "Connective tissue disease": [
    {
      vignette: "A 22-year-old tall, thin man presents to the emergency department with acute-onset chest pain and shortness of breath. He has a history of lens subluxation requiring corrective surgery at age 16. Physical examination reveals a tall stature with arm span exceeding height, long fingers, and a high-arched palate. Chest CT reveals a dilated aortic root measuring 5.2 cm with an intimal flap consistent with aortic dissection.",
      question: "Which of the following is the most likely underlying genetic defect in this patient?",
      options: ["FBN1 gene mutation affecting fibrillin-1","COL1A1 gene mutation affecting type I collagen","COL3A1 gene mutation affecting type III collagen","ADAMTS2 gene mutation affecting procollagen peptidase","Elastin gene deletion on chromosome 7"],
      correctIndex: 0,
      explanation: "This patient has Marfan syndrome, an autosomal dominant connective tissue disorder caused by mutations in the FBN1 gene encoding fibrillin-1. Fibrillin-1 is a glycoprotein that forms microfibrils in the extracellular matrix, serving as a scaffold for elastin deposition and sequestering TGF-β. Defective fibrillin-1 leads to weakened connective tissue, especially in the cardiovascular system (aortic root dilation/dissection), eyes (upward lens subluxation), and skeleton (tall stature, arachnodactyly).",
      optionExplanations: [
        "Correct. Marfan syndrome is caused by FBN1 mutations affecting fibrillin-1, leading to defective elastic tissue in the aorta, eyes, and skeleton.",
        "Incorrect. COL1A1 mutations cause osteogenesis imperfecta, characterized by brittle bones, blue sclerae, and hearing loss.",
        "Incorrect. COL3A1 mutations cause Ehlers-Danlos syndrome vascular type (type IV), which presents with arterial rupture and organ perforation but without the skeletal/ocular features of Marfan.",
        "Incorrect. ADAMTS2 mutations cause dermatosparaxis type Ehlers-Danlos syndrome with extreme skin fragility.",
        "Incorrect. Elastin gene deletion causes Williams syndrome (supravalvular aortic stenosis, elfin facies, hypercalcemia), not Marfan syndrome."
      ],
      highYieldPoint: "Marfan syndrome: FBN1 mutation → defective fibrillin-1 → aortic dilation/dissection (most common cause of death), upward lens subluxation, arachnodactyly, pectus excavatum; AD inheritance."
    },
    {
      vignette: "A 28-year-old woman presents with a history of recurrent joint dislocations, hyperextensible skin that bruises easily, and hypermobile joints. She can touch her thumbs to her forearms and hyperextend her knees beyond 10 degrees. Her skin feels velvety and scars are thin and atrophic. A biopsy reveals abnormal collagen fibril architecture.",
      question: "Which type of collagen is most likely defective in the most common form of this patient's condition?",
      options: ["Type I collagen","Type II collagen","Type III collagen","Type IV collagen","Type V collagen"],
      correctIndex: 1,
      explanation: "This patient has Ehlers-Danlos syndrome (EDS), classical type, which is the most common form. Classical EDS is caused by mutations in COL5A1 or COL5A2 genes affecting type V collagen, which plays a critical role in regulating collagen fibril assembly. Defective type V collagen leads to disorganized collagen fibrils, resulting in skin hyperextensibility, joint hypermobility, easy bruising, and poor wound healing with atrophic scars.",
      optionExplanations: [
        "Incorrect. Type I collagen defects cause osteogenesis imperfecta, not Ehlers-Danlos syndrome.",
        "Correct. Type V collagen defects cause classical Ehlers-Danlos syndrome (most common form), affecting collagen fibril assembly and leading to skin/joint hypermobility.",
        "Incorrect. Type III collagen defects cause vascular EDS (type IV), the most dangerous form, characterized by arterial rupture and bowel perforation.",
        "Incorrect. Type IV collagen is a major component of basement membranes; its defect causes Alport syndrome (hereditary nephritis).",
        "Incorrect. While this IS the correct collagen type, it is type V, not another type."
      ],
      highYieldPoint: "Classical EDS: type V collagen defect → joint hypermobility, skin hyperextensibility, atrophic scars; Vascular EDS (type IV): type III collagen → arterial/organ rupture (most dangerous)."
    },
    {
      vignette: "A 10-year-old boy of short stature presents with progressive bilateral hearing loss. Urinalysis reveals persistent microscopic hematuria with proteinuria. Renal biopsy examined by electron microscopy shows irregular thickening and thinning of the glomerular basement membrane with a characteristic 'basket-weave' pattern of lamellation. Family history reveals his maternal uncle required a kidney transplant at age 25 and also had hearing loss.",
      question: "Which of the following is the most likely defective protein in this patient's condition?",
      options: ["Fibrillin-1","Laminin","Type IV collagen alpha-5 chain","Nephrin","Podocin"],
      correctIndex: 2,
      explanation: "This patient has Alport syndrome, a hereditary nephritis caused by mutations in genes encoding type IV collagen, most commonly COL4A5 (X-linked, ~80% of cases). Type IV collagen is a major structural component of basement membranes in the kidney, inner ear, and eye. Defective alpha-5 chains lead to abnormal GBM with the characteristic basket-weave appearance on EM, progressive renal failure, sensorineural hearing loss, and ocular abnormalities (anterior lenticonus).",
      optionExplanations: [
        "Incorrect. Fibrillin-1 mutations cause Marfan syndrome, not Alport syndrome.",
        "Incorrect. Laminin mutations can cause certain congenital muscular dystrophies and rare forms of nephrotic syndrome but not the classic Alport presentation.",
        "Correct. Alport syndrome is caused by mutations in type IV collagen (most commonly COL4A5, X-linked), affecting basement membranes in the kidney, inner ear, and eye.",
        "Incorrect. Nephrin mutations cause congenital nephrotic syndrome of the Finnish type, presenting with massive proteinuria in infancy.",
        "Incorrect. Podocin mutations cause autosomal recessive focal segmental glomerulosclerosis."
      ],
      highYieldPoint: "Alport syndrome: type IV collagen defect (usually COL4A5, X-linked) → basket-weave GBM on EM, progressive nephritis, sensorineural hearing loss, ocular defects."
    },
    {
      vignette: "A 5-year-old boy with intellectual disability, a broad nasal bridge, widely spaced teeth, and coarse facial features is found to have hepatosplenomegaly and corneal clouding on ophthalmologic examination. He has restricted joint mobility and claw-hand deformity. Urine analysis reveals elevated levels of dermatan sulfate and heparan sulfate. Enzyme assay shows deficiency of alpha-L-iduronidase.",
      question: "Which of the following best describes the category of this patient's disease?",
      options: ["Glycogen storage disease","Sphingolipidosis","Amino acid metabolism disorder","Mucopolysaccharidosis","Fatty acid oxidation defect"],
      correctIndex: 3,
      explanation: "This patient has Hurler syndrome (MPS I), a mucopolysaccharidosis caused by deficiency of alpha-L-iduronidase, which is needed to degrade dermatan sulfate and heparan sulfate (glycosaminoglycans/mucopolysaccharides). Accumulation of these GAGs in lysosomes leads to coarse facial features, corneal clouding, hepatosplenomegaly, skeletal abnormalities (dysostosis multiplex), joint stiffness, and intellectual disability. Mucopolysaccharidoses are a subgroup of lysosomal storage diseases.",
      optionExplanations: [
        "Incorrect. Glycogen storage diseases involve defects in glycogen synthesis or breakdown enzymes, not GAG degradation.",
        "Incorrect. Sphingolipidoses (e.g., Gaucher, Tay-Sachs) involve defective sphingolipid metabolism and have different clinical presentations.",
        "Incorrect. Amino acid metabolism disorders (e.g., PKU, maple syrup urine disease) involve defective amino acid processing.",
        "Correct. Hurler syndrome is a mucopolysaccharidosis (MPS I) caused by alpha-L-iduronidase deficiency, leading to accumulation of dermatan and heparan sulfate.",
        "Incorrect. Fatty acid oxidation defects (e.g., MCAD deficiency) present with hypoketotic hypoglycemia, not GAG accumulation."
      ],
      highYieldPoint: "Hurler syndrome (MPS I): α-L-iduronidase deficiency → dermatan/heparan sulfate accumulation → coarse facies, corneal clouding, hepatosplenomegaly, intellectual disability; AR inheritance."
    },
    {
      vignette: "A 30-year-old woman presents with skin that appears tight and shiny on her hands and face. Over the past year, she has developed difficulty swallowing solid foods and episodes of her fingers turning white, then blue, then red in cold temperatures. Physical examination reveals sclerodactyly, digital pitting scars, and loss of normal skin folds around the mouth. Laboratory studies show positive anti-Scl-70 (anti-topoisomerase I) antibodies.",
      question: "Which of the following complications is this patient at greatest risk for developing?",
      options: ["Inflammatory myopathy","CREST syndrome only","Isolated Raynaud phenomenon","Discoid lupus","Pulmonary fibrosis"],
      correctIndex: 4,
      explanation: "This patient has diffuse systemic sclerosis (scleroderma), characterized by widespread skin thickening, Raynaud phenomenon, esophageal dysmotility, and anti-Scl-70 antibodies (anti-topoisomerase I). Diffuse scleroderma has a higher risk of visceral involvement, particularly pulmonary fibrosis (the leading cause of death in scleroderma), renal crisis, and cardiac fibrosis. Anti-Scl-70 antibodies are specifically associated with diffuse disease and increased risk of interstitial lung disease.",
      optionExplanations: [
        "Incorrect. Inflammatory myopathy (polymyositis/dermatomyositis) is a separate connective tissue disease, though overlap syndromes can occur.",
        "Incorrect. CREST syndrome (Calcinosis, Raynaud, Esophageal dysmotility, Sclerodactyly, Telangiectasia) is associated with limited scleroderma and anti-centromere antibodies.",
        "Incorrect. Raynaud phenomenon is present but is a symptom, not a complication; the major risk is visceral organ fibrosis.",
        "Incorrect. Discoid lupus is a form of cutaneous lupus erythematosus, not a complication of scleroderma.",
        "Correct. Diffuse scleroderma with anti-Scl-70 antibodies carries the highest risk of pulmonary fibrosis, which is the leading cause of death."
      ],
      highYieldPoint: "Diffuse scleroderma: anti-Scl-70 → widespread fibrosis including lungs (leading cause of death), kidneys (renal crisis); Limited (CREST): anti-centromere → milder, pulmonary HTN risk."
    },
    {
      vignette: "A 6-year-old girl is brought in for evaluation of skin lesions. She has multiple café-au-lait spots (>6, each >5 mm), axillary freckling, and a family history of similar findings in her father who also has multiple soft subcutaneous nodules. Ophthalmologic examination reveals Lisch nodules on the iris.",
      question: "Which of the following proteins is defective in this patient's condition?",
      options: ["Neurofibromin","Tuberin","Merlin (schwannomin)","Hamartin","p53"],
      correctIndex: 0,
      explanation: "This patient has neurofibromatosis type 1 (NF1, von Recklinghausen disease), caused by mutations in the NF1 gene on chromosome 17 that encodes neurofibromin. Neurofibromin is a GTPase-activating protein (GAP) that negatively regulates Ras signaling. Loss of neurofibromin leads to uncontrolled Ras pathway activation and increased cell proliferation. NF1 features include café-au-lait spots, axillary/inguinal freckling, neurofibromas, Lisch nodules, and optic gliomas.",
      optionExplanations: [
        "Correct. Neurofibromin is a Ras-GAP encoded by NF1 on chromosome 17; its loss causes NF1 with café-au-lait spots, neurofibromas, Lisch nodules, and axillary freckling.",
        "Incorrect. Tuberin is encoded by TSC2 and is defective in tuberous sclerosis complex, which presents with cortical tubers, cardiac rhabdomyomas, and facial angiofibromas.",
        "Incorrect. Merlin (schwannomin) is defective in neurofibromatosis type 2 (NF2), which presents with bilateral acoustic neuromas, not café-au-lait spots and Lisch nodules.",
        "Incorrect. Hamartin is encoded by TSC1 and is the other protein defective in tuberous sclerosis.",
        "Incorrect. p53 is a tumor suppressor mutated in Li-Fraumeni syndrome, which presents with multiple early-onset cancers."
      ],
      highYieldPoint: "NF1: neurofibromin (Ras-GAP) on chr 17; café-au-lait spots, neurofibromas, Lisch nodules, axillary freckling, optic gliomas; AD; NF2: merlin on chr 22 → bilateral acoustic neuromas."
    },
    {
      vignette: "A 19-year-old man presents with a spontaneous pneumothorax. He is 6'4\" with long limbs and fingers. Examination reveals a pectus carinatum deformity and mild scoliosis. Slit-lamp examination shows downward subluxation of the lens bilaterally. He has marked joint hypermobility and a history of recurrent joint dislocations. Genetic testing reveals a mutation in the gene encoding lysyl hydroxylase.",
      question: "Which of the following processes is most directly impaired by this enzyme deficiency?",
      options: ["Cross-linking of collagen molecules","Hydroxylation of proline residues in collagen","Glycosylation of hydroxylysine residues in collagen","Cleavage of procollagen propeptides","Assembly of tropocollagen into fibrils"],
      correctIndex: 2,
      explanation: "Lysyl hydroxylase (encoded by PLOD genes) hydroxylates lysine residues in collagen, a critical post-translational modification. Hydroxylysine residues serve two functions: (1) they are substrates for glycosylation and (2) they participate in cross-linking of collagen molecules via lysyl oxidase. This patient's presentation with joint hypermobility, lens subluxation (downward, unlike Marfan), and connective tissue fragility suggests kyphoscoliotic EDS (EDS type VI), caused by lysyl hydroxylase deficiency.",
      optionExplanations: [
        "Incorrect. While hydroxylysine participates in cross-linking, the primary enzymatic step impaired is hydroxylation itself. Cross-linking is directly catalyzed by lysyl oxidase.",
        "Incorrect. Proline hydroxylation is performed by prolyl hydroxylase (requires vitamin C as cofactor), not lysyl hydroxylase.",
        "Correct. Lysyl hydroxylase converts lysine to hydroxylysine in collagen; deficiency impairs both glycosylation of hydroxylysine and subsequent cross-linking.",
        "Incorrect. Procollagen propeptide cleavage is performed by procollagen peptidases; deficiency causes dermatosparaxis EDS.",
        "Incorrect. Fibril assembly depends on proper collagen processing but is not the direct step catalyzed by lysyl hydroxylase."
      ],
      highYieldPoint: "Lysyl hydroxylase deficiency → kyphoscoliotic EDS (type VI): joint hypermobility, kyphoscoliosis, downward lens subluxation; distinguish from Marfan (upward subluxation, FBN1) and homocystinuria (downward, CBS deficiency)."
    },
    {
      vignette: "A 35-year-old woman presents with pain and stiffness of her hands and wrists for 6 months. The stiffness is worst in the morning and lasts over an hour. Physical examination shows symmetric swelling and tenderness of the metacarpophalangeal and proximal interphalangeal joints bilaterally, with sparing of the distal interphalangeal joints. Laboratory studies show RF titer 1:256 and elevated anti-CCP antibodies.",
      question: "Which of the following best describes the pathologic process occurring in this patient's joints?",
      options: ["Crystal-induced acute inflammation","Infection with subsequent reactive arthritis","Degenerative cartilage loss without synovial inflammation","Pannus formation with synovial hyperplasia","Enthesitis with new bone formation"],
      correctIndex: 3,
      explanation: "This patient has rheumatoid arthritis (RA), an autoimmune inflammatory arthritis characterized by symmetric involvement of MCP and PIP joints with DIP sparing. The hallmark pathology is pannus formation — proliferating inflamed synovial tissue that invades and destroys articular cartilage and underlying bone. The synovium shows hyperplasia of the intimal lining, neovascularization, and dense infiltration by CD4+ T cells, B cells, macrophages, and plasma cells. Anti-CCP antibodies are highly specific for RA.",
      optionExplanations: [
        "Incorrect. Crystal-induced inflammation is seen in gout (urate) and pseudogout (calcium pyrophosphate), not RA.",
        "Incorrect. Reactive arthritis follows infection (typically GI or GU) and is asymmetric, affecting large joints, not MCP/PIP joints symmetrically.",
        "Incorrect. Degenerative cartilage loss without significant synovial inflammation describes osteoarthritis, which affects DIP joints.",
        "Correct. RA is characterized by pannus — inflamed, hyperplastic synovium that erodes cartilage and bone — driven by autoimmune mechanisms.",
        "Incorrect. Enthesitis with new bone formation (syndesmophytes) is characteristic of ankylosing spondylitis and seronegative spondyloarthropathies."
      ],
      highYieldPoint: "Rheumatoid arthritis: pannus = inflamed synovium → cartilage/bone erosion; symmetric MCP/PIP joints, spares DIP; RF + anti-CCP (most specific); morning stiffness >1 hr."
    },
    {
      vignette: "A 2-month-old infant is admitted for evaluation of poor feeding and failure to thrive. Physical examination reveals widely open fontanelles, frontal bossing, and a large head circumference. Skeletal survey reveals generalized increased bone density with obliteration of the medullary cavity. Complete blood count shows pancytopenia. The parents are consanguineous.",
      question: "Which of the following cells is most likely dysfunctional in this patient's condition?",
      options: ["Osteoblasts","Chondrocytes","Fibroblasts","Osteocytes","Osteoclasts"],
      correctIndex: 4,
      explanation: "This infant has osteopetrosis (marble bone disease), caused by defective osteoclast function. In the autosomal recessive (malignant infantile) form, osteoclasts fail to resorb bone due to mutations affecting carbonic anhydrase II or the H+-ATPase proton pump needed for acid secretion into the resorption lacuna. The result is overly dense, brittle bones with obliterated medullary cavities, leading to pancytopenia (no marrow space for hematopoiesis), cranial nerve compression, and hepatosplenomegaly (extramedullary hematopoiesis).",
      optionExplanations: [
        "Incorrect. Osteoblast dysfunction would lead to decreased bone formation, not the increased density seen here.",
        "Incorrect. Chondrocyte defects cause chondrodysplasias (e.g., achondroplasia) with abnormal cartilage, not dense bones.",
        "Incorrect. Fibroblast dysfunction affects soft connective tissue, not bone resorption.",
        "Incorrect. Osteocytes are mature bone cells embedded in lacunae; their dysfunction does not cause the dense bone phenotype of osteopetrosis.",
        "Correct. Osteopetrosis results from dysfunctional osteoclasts that cannot resorb bone, leading to dense, brittle bones with obliterated marrow cavities."
      ],
      highYieldPoint: "Osteopetrosis: defective osteoclasts → failure of bone resorption → dense brittle bones, obliterated marrow (pancytopenia), cranial nerve palsies; AR form is severe/infantile, AD form is milder/adult."
    },
    {
      vignette: "A 15-year-old girl with a family history of sudden cardiac death in young relatives presents for a sports physical. She is tall with an arm span-to-height ratio of 1.06. She has a positive wrist sign (Walker-Murdoch) and thumb sign (Steinberg). Echocardiogram reveals mitral valve prolapse and aortic root dilation to 4.1 cm.",
      question: "Which of the following molecular consequences is most directly attributable to the underlying genetic defect?",
      options: ["Excessive TGF-β signaling due to impaired sequestration","Decreased lysyl oxidase activity","Impaired procollagen processing","Defective glycosaminoglycan degradation","Abnormal elastic fiber assembly due to tropoelastin mutation"],
      correctIndex: 0,
      explanation: "In Marfan syndrome, defective fibrillin-1 microfibrils fail to properly sequester TGF-β in the extracellular matrix, leading to excessive TGF-β signaling. This dysregulated TGF-β activity promotes destructive changes in the aortic wall (medial degeneration with cystic medial necrosis), contributes to skeletal overgrowth, and drives many of the connective tissue manifestations. This understanding has led to investigation of TGF-β pathway inhibitors (losartan) as therapy for Marfan syndrome.",
      optionExplanations: [
        "Correct. Defective fibrillin-1 fails to sequester TGF-β → excessive signaling → aortic medial degeneration, skeletal overgrowth, and other Marfan features.",
        "Incorrect. Decreased lysyl oxidase activity would impair collagen cross-linking but is not the primary defect in Marfan syndrome.",
        "Incorrect. Impaired procollagen processing causes certain types of Ehlers-Danlos syndrome, not Marfan syndrome.",
        "Incorrect. Defective GAG degradation describes mucopolysaccharidoses.",
        "Incorrect. Tropoelastin mutations cause cutis laxa, not Marfan syndrome; fibrillin scaffolds elastin but is distinct from elastin itself."
      ],
      highYieldPoint: "Marfan pathogenesis: defective fibrillin-1 → failure to sequester TGF-β → excessive TGF-β signaling → cystic medial necrosis of aorta, skeletal overgrowth; losartan (ARB) reduces TGF-β activity."
    },
    {
      vignette: "A 40-year-old man with a history of intellectual disability, tall stature, and marfanoid habitus presents after a thromboembolic stroke. He has a history of downward lens subluxation diagnosed in childhood. Laboratory studies reveal elevated plasma homocysteine and methionine levels. The patient has been on a methionine-restricted diet with pyridoxine supplementation.",
      question: "Which of the following enzymes is most likely deficient in this patient?",
      options: ["Phenylalanine hydroxylase","Cystathionine beta-synthase","Methionine synthase","Homogentisic acid oxidase","Branched-chain alpha-ketoacid dehydrogenase"],
      correctIndex: 1,
      explanation: "This patient has classic homocystinuria caused by cystathionine beta-synthase (CBS) deficiency. CBS normally converts homocysteine to cystathionine using vitamin B6 (pyridoxine) as a cofactor. Deficiency leads to accumulation of homocysteine and methionine. Clinical features include intellectual disability, marfanoid habitus, downward lens subluxation (versus upward in Marfan), osteoporosis, and severe thromboembolism (the leading cause of death). Pyridoxine supplementation can help in responsive variants.",
      optionExplanations: [
        "Incorrect. Phenylalanine hydroxylase deficiency causes phenylketonuria (PKU), not homocystinuria.",
        "Correct. CBS deficiency → elevated homocysteine/methionine → intellectual disability, downward lens subluxation, marfanoid habitus, thromboembolism.",
        "Incorrect. Methionine synthase uses B12 to convert homocysteine to methionine; its deficiency raises homocysteine but lowers methionine.",
        "Incorrect. Homogentisic acid oxidase deficiency causes alkaptonuria (ochronosis), not homocystinuria.",
        "Incorrect. Branched-chain alpha-ketoacid dehydrogenase deficiency causes maple syrup urine disease."
      ],
      highYieldPoint: "Homocystinuria (CBS deficiency): ↑homocysteine/methionine; downward lens subluxation (vs. upward in Marfan), marfanoid habitus, thrombosis, intellectual disability; B6 responsive."
    },
    {
      vignette: "A 45-year-old woman presents with progressive tightening of the skin on her fingers and face over 2 years. She has difficulty opening her mouth fully. She notes that her fingertips frequently turn white, then blue, then red upon cold exposure. She has developed heartburn and dysphagia. ANA is positive with an anticentromere antibody pattern.",
      question: "Which of the following complications is this patient at highest risk of developing?",
      options: ["Renal crisis with malignant hypertension","Diffuse interstitial lung fibrosis","Pulmonary arterial hypertension","Rapidly progressive glomerulonephritis","Pericardial tamponade"],
      correctIndex: 2,
      explanation: "This patient has limited systemic sclerosis (formerly CREST syndrome: Calcinosis, Raynaud, Esophageal dysmotility, Sclerodactyly, Telangiectasia). Anti-centromere antibodies are characteristic. The most serious complication of limited scleroderma is pulmonary arterial hypertension (PAH), which develops in approximately 10-15% of patients and is a leading cause of death. Unlike diffuse scleroderma (anti-Scl-70), limited disease has less visceral fibrosis but higher PAH risk.",
      optionExplanations: [
        "Incorrect. Renal crisis with malignant hypertension is primarily associated with diffuse scleroderma, not limited disease.",
        "Incorrect. Diffuse interstitial lung fibrosis is more associated with diffuse scleroderma and anti-Scl-70 antibodies.",
        "Correct. Limited scleroderma (anti-centromere) carries the highest risk of pulmonary arterial hypertension, a major cause of mortality.",
        "Incorrect. Rapidly progressive glomerulonephritis is associated with vasculitides (e.g., granulomatosis with polyangiitis), not scleroderma.",
        "Incorrect. Pericardial tamponade is not a typical complication of limited scleroderma."
      ],
      highYieldPoint: "Limited scleroderma (CREST): anti-centromere Ab → pulmonary arterial hypertension (major risk); Diffuse scleroderma: anti-Scl-70 → pulmonary fibrosis, renal crisis."
    },
    {
      vignette: "A 24-year-old African American woman presents with a facial rash that worsens with sun exposure, joint pain, and fatigue. She has oral ulcers and a malar rash sparing the nasolabial folds. Laboratory studies show pancytopenia, elevated ESR, positive ANA (1:640), positive anti-dsDNA antibodies, and low C3/C4 complement levels. Urinalysis reveals proteinuria and red blood cell casts.",
      question: "Which of the following mechanisms is most directly responsible for the renal injury in this patient?",
      options: ["Anti-GBM antibody deposition along the basement membrane","IgA deposition in the mesangium","T-cell mediated tubulointerstitial inflammation","Immune complex deposition in the glomeruli","Thrombotic microangiopathy from ADAMTS13 deficiency"],
      correctIndex: 3,
      explanation: "This patient has systemic lupus erythematosus (SLE) with lupus nephritis. Renal injury in SLE is primarily caused by deposition of circulating immune complexes (containing anti-dsDNA antibodies and complement) in the glomeruli. These immune complexes activate the classical complement pathway, leading to consumption of C3 and C4, recruitment of inflammatory cells, and glomerular damage. The pattern of deposition (mesangial, subendothelial, or subepithelial) determines the class of lupus nephritis.",
      optionExplanations: [
        "Incorrect. Anti-GBM antibody deposition causes Goodpasture syndrome with linear IF staining, not the granular pattern of lupus nephritis.",
        "Incorrect. IgA mesangial deposition is characteristic of IgA nephropathy (Berger disease), not lupus nephritis.",
        "Incorrect. T-cell mediated tubulointerstitial nephritis can occur in drug reactions or transplant rejection but is not the primary mechanism of lupus nephritis.",
        "Correct. Lupus nephritis results from immune complex deposition (anti-dsDNA + complement) in glomeruli → complement activation → inflammation and damage.",
        "Incorrect. ADAMTS13 deficiency causes TTP, a thrombotic microangiopathy distinct from lupus nephritis."
      ],
      highYieldPoint: "Lupus nephritis: immune complex (anti-dsDNA + complement) deposition → granular IF pattern ('full house' = IgG, IgA, IgM, C3, C1q); class IV (diffuse proliferative) is most common and severe."
    },
    {
      vignette: "A 7-year-old boy with a history of developmental delay is found to have a large port-wine stain covering the right side of his face in the distribution of the ophthalmic division of the trigeminal nerve. MRI of the brain reveals ipsilateral leptomeningeal angiomatosis with cortical calcification. He has a history of seizures since infancy.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Tuberous sclerosis complex","Osler-Weber-Rendu syndrome","Von Hippel-Lindau disease","Neurofibromatosis type 1","Sturge-Weber syndrome"],
      correctIndex: 4,
      explanation: "Sturge-Weber syndrome (encephalotrigeminal angiomatosis) is a neurocutaneous disorder caused by a somatic mosaic mutation in the GNAQ gene. It is characterized by a port-wine stain (nevus flammeus) in the V1 distribution of the trigeminal nerve, ipsilateral leptomeningeal angiomatosis (causing seizures and intellectual disability), and glaucoma. Brain imaging shows characteristic 'tram-track' calcifications of the cortex. Unlike most neurocutaneous syndromes, it is not inherited.",
      optionExplanations: [
        "Incorrect. Tuberous sclerosis presents with cortical tubers, subependymal nodules, facial angiofibromas (not port-wine stains), and cardiac rhabdomyomas.",
        "Incorrect. Osler-Weber-Rendu syndrome (hereditary hemorrhagic telangiectasia) causes mucocutaneous telangiectasias and AVMs.",
        "Incorrect. Von Hippel-Lindau disease causes hemangioblastomas of the cerebellum and retina, clear cell renal carcinoma, and pheochromocytoma.",
        "Incorrect. NF1 presents with café-au-lait spots, neurofibromas, and Lisch nodules, not port-wine stains.",
        "Correct. Sturge-Weber syndrome: port-wine stain in V1 distribution + ipsilateral leptomeningeal angiomatosis + seizures + glaucoma; somatic GNAQ mutation."
      ],
      highYieldPoint: "Sturge-Weber: somatic GNAQ mutation → port-wine stain (V1), leptomeningeal angiomatosis, seizures, glaucoma, tram-track cortical calcifications; not inherited (somatic mosaic)."
    },
    {
      vignette: "A 32-year-old woman of Mediterranean descent presents with recurrent episodes of joint pain, abdominal pain, and high fevers lasting 24-72 hours since childhood. During episodes, she develops pleuritic chest pain and a sterile peritonitis. Between episodes she is asymptomatic. Laboratory studies during an attack show markedly elevated CRP and SAA. She was recently found to have proteinuria and is worried about kidney disease.",
      question: "Which of the following proteins is most likely accumulating in this patient's kidneys?",
      options: ["Amyloid light chain (AL)","Serum amyloid A-derived amyloid (AA)","Beta-2 microglobulin amyloid","Transthyretin amyloid","Amyloid precursor protein"],
      correctIndex: 1,
      explanation: "This patient has familial Mediterranean fever (FMF), an autosomal recessive autoinflammatory disorder caused by MEFV gene mutations (encoding pyrin). FMF causes recurrent episodes of serositis (peritonitis, pleuritis, arthritis) with fever. The most serious long-term complication is secondary (AA) amyloidosis, caused by chronic inflammation leading to elevated serum amyloid A (SAA) protein, which deposits as AA amyloid fibrils in the kidneys (leading to nephrotic syndrome and renal failure), spleen, and liver.",
      optionExplanations: [
        "Incorrect. AL amyloid derives from immunoglobulin light chains in primary amyloidosis associated with plasma cell dyscrasias.",
        "Correct. AA amyloidosis from chronic SAA elevation is the major long-term complication of FMF, depositing primarily in the kidneys.",
        "Incorrect. Beta-2 microglobulin amyloid is associated with long-term dialysis-related amyloidosis.",
        "Incorrect. Transthyretin amyloid causes familial amyloid polyneuropathy and senile cardiac amyloidosis.",
        "Incorrect. Amyloid precursor protein-derived amyloid (Aβ) deposits in the brain in Alzheimer disease."
      ],
      highYieldPoint: "FMF: MEFV (pyrin) mutation → recurrent serositis; treat with colchicine; major complication = AA amyloidosis (from chronic SAA elevation) → nephrotic syndrome."
    }
  ],
  "Skin pathology": [
    {
      vignette: "A 35-year-old man presents with multiple well-demarcated, erythematous plaques with silvery-white scales on his elbows, knees, and scalp. He notes that when he scratches the plaques, pinpoint bleeding occurs. Biopsy reveals regular elongation of the rete ridges, thinning of the epidermis over the dermal papillae, parakeratosis, neutrophilic collections in the stratum corneum (Munro microabscesses), and dilated, tortuous capillaries in the dermal papillae.",
      question: "Which of the following cytokines plays the most critical role in the pathogenesis of this patient's condition?",
      options: ["IL-17","IL-4","IL-10","IL-2","IL-5"],
      correctIndex: 0,
      explanation: "This patient has psoriasis, a chronic inflammatory skin disease driven by Th17 and Th1 cells. IL-17, produced by Th17 cells, is the key cytokine in psoriasis pathogenesis. IL-17 stimulates keratinocyte proliferation, induces production of antimicrobial peptides, and recruits neutrophils to the epidermis. This understanding has led to highly effective biologic therapies targeting the IL-17 pathway (secukinumab, ixekizumab) and the IL-23/Th17 axis (ustekinumab, guselkumab).",
      optionExplanations: [
        "Correct. IL-17 from Th17 cells drives keratinocyte proliferation and neutrophil recruitment, making it the central cytokine in psoriasis pathogenesis.",
        "Incorrect. IL-4 is a Th2 cytokine involved in allergic responses and IgE class switching, not psoriasis.",
        "Incorrect. IL-10 is an anti-inflammatory cytokine produced by Tregs that suppresses immune responses.",
        "Incorrect. IL-2 promotes T-cell proliferation but is not the primary driver of psoriasis.",
        "Incorrect. IL-5 activates eosinophils and is involved in parasitic defense and allergic conditions."
      ],
      highYieldPoint: "Psoriasis: Th17/IL-17 driven → keratinocyte hyperproliferation; Auspitz sign (pinpoint bleeding), Munro microabscesses, Koebner phenomenon; associated with HLA-Cw6."
    },
    {
      vignette: "A 65-year-old fair-skinned farmer presents with a pearly, dome-shaped papule with rolled borders and central ulceration on his nose. The lesion has been slowly growing over 6 months. It has visible telangiectatic vessels on the surface. Biopsy shows nests of basaloid cells with peripheral palisading extending from the epidermis into the dermis, with retraction artifact between tumor nests and stroma.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Squamous cell carcinoma","Basal cell carcinoma","Melanoma","Keratoacanthoma","Merkel cell carcinoma"],
      correctIndex: 1,
      explanation: "This patient has basal cell carcinoma (BCC), the most common skin cancer and the most common cancer overall. BCC is strongly associated with cumulative UV exposure and fair skin. The classic presentation is a pearly, translucent papule with rolled borders, telangiectasia, and central ulceration (rodent ulcer). Histologically, nests of basaloid cells show peripheral palisading with retraction artifact. BCC is locally invasive but very rarely metastasizes. It is associated with activation of the Hedgehog signaling pathway (PTCH1 mutations).",
      optionExplanations: [
        "Incorrect. Squamous cell carcinoma presents as a scaly, crusted, ulcerating nodule without the pearly appearance and shows keratin pearl formation histologically.",
        "Correct. BCC shows pearly papule with rolled borders, telangiectasia, and basaloid nests with peripheral palisading; most common skin cancer.",
        "Incorrect. Melanoma presents as an asymmetric, irregularly bordered, multicolored lesion (ABCDE criteria), not a pearly papule.",
        "Incorrect. Keratoacanthoma is a rapidly growing, crater-shaped nodule with a central keratin plug that often involutes spontaneously.",
        "Incorrect. Merkel cell carcinoma is a rare, aggressive neuroendocrine skin cancer presenting as a painless, rapidly growing nodule."
      ],
      highYieldPoint: "BCC: most common cancer; UV exposure + fair skin; pearly papule with rolled borders and telangiectasia; PTCH1/Hedgehog pathway mutations; locally invasive, rarely metastasizes."
    },
    {
      vignette: "A 45-year-old woman presents with an intensely pruritic rash on her forearms and trunk. Physical examination reveals tense blisters on an erythematous base. She notes the blisters are very firm and do not rupture easily with pressure. Biopsy reveals a subepidermal blister with a linear band of IgG and C3 at the dermal-epidermal junction on direct immunofluorescence.",
      question: "Which of the following antigens is the target of autoantibodies in this patient's condition?",
      options: ["Desmoglein 1","Desmoglein 3","BP180 (type XVII collagen) and BP230","Type VII collagen","Envoplakin and periplakin"],
      correctIndex: 2,
      explanation: "This patient has bullous pemphigoid, characterized by tense, subepidermal blisters that do not rupture easily. Autoantibodies target BP180 (type XVII collagen, also called BPAG2) and BP230 (BPAG1), which are components of the hemidesmosomes that anchor the epidermis to the basement membrane. The linear IgG and C3 deposition at the dermal-epidermal junction on DIF confirms the diagnosis. Bullous pemphigoid is the most common autoimmune blistering disease.",
      optionExplanations: [
        "Incorrect. Desmoglein 1 is targeted in pemphigus foliaceus, which causes superficial, flaccid blisters in the granular layer.",
        "Incorrect. Desmoglein 3 is targeted in pemphigus vulgaris, which causes flaccid, intraepidermal blisters with positive Nikolsky sign.",
        "Correct. Bullous pemphigoid targets hemidesmsomal proteins BP180 and BP230 → subepidermal, tense blisters; linear IgG/C3 at DEJ.",
        "Incorrect. Type VII collagen (anchoring fibrils) is targeted in epidermolysis bullosa acquisita, a rare subepidermal blistering disease.",
        "Incorrect. Envoplakin and periplakin are targeted in paraneoplastic pemphigus, associated with underlying malignancy."
      ],
      highYieldPoint: "Bullous pemphigoid: anti-BP180/BP230 (hemidesmosome) → tense subepidermal blisters, linear IgG/C3 at DEJ; Pemphigus vulgaris: anti-desmoglein 3 → flaccid intraepidermal blisters, Nikolsky+."
    },
    {
      vignette: "A 52-year-old man presents with painful oral erosions that have been present for several weeks, followed by development of flaccid blisters on his trunk that rupture easily, leaving denuded skin. Nikolsky sign is positive. Biopsy reveals intraepidermal acantholysis with a 'tombstone' appearance of basal cells. Direct immunofluorescence shows a reticular (net-like) pattern of IgG deposition around epidermal cells.",
      question: "Which of the following is the most likely target of the pathogenic autoantibodies?",
      options: ["BP180 hemidesmosomal protein","Type IV collagen in the basement membrane","Laminin-332 in the lamina lucida","Desmoglein 3 in desmosomes","Plectin in hemidesmosomes"],
      correctIndex: 3,
      explanation: "This patient has pemphigus vulgaris (PV), characterized by flaccid blisters, positive Nikolsky sign, oral erosions, and intraepidermal acantholysis. PV is caused by IgG autoantibodies against desmoglein 3 (and sometimes desmoglein 1), which are transmembrane glycoproteins in desmosomes that provide cell-cell adhesion between keratinocytes. Antibody binding disrupts desmosomal adhesion, causing acantholysis (separation of keratinocytes). The reticular/net-like IF pattern reflects antibody binding around individual epidermal cells.",
      optionExplanations: [
        "Incorrect. BP180 is targeted in bullous pemphigoid, which causes tense subepidermal blisters, not flaccid intraepidermal blisters.",
        "Incorrect. Type IV collagen is targeted in Goodpasture syndrome (anti-GBM disease) and Alport syndrome, not pemphigus.",
        "Incorrect. Laminin-332 antibodies are found in anti-epiligrin cicatricial pemphigoid, a rare scarring blistering disease.",
        "Correct. Pemphigus vulgaris targets desmoglein 3 in desmosomes → acantholysis, flaccid blisters, positive Nikolsky sign, oral erosions.",
        "Incorrect. Plectin defects are associated with epidermolysis bullosa simplex with muscular dystrophy."
      ],
      highYieldPoint: "Pemphigus vulgaris: anti-desmoglein 3 → intraepidermal acantholysis, flaccid blisters, Nikolsky+, oral mucosa involved first; DIF shows net-like IgG around keratinocytes."
    },
    {
      vignette: "A 28-year-old woman presents with a pruritic, grouped vesicular rash on her elbows, knees, and buttocks. The vesicles are arranged in a herpetiform pattern on an erythematous base. She also reports intermittent bloating and diarrhea. Biopsy reveals neutrophilic microabscesses at the tips of dermal papillae. Direct immunofluorescence shows granular IgA deposits at the dermal-epidermal junction.",
      question: "Which of the following conditions is most commonly associated with this patient's skin disease?",
      options: ["Ulcerative colitis","Crohn disease","Celiac disease","Primary biliary cholangitis","Whipple disease"],
      correctIndex: 4,
      explanation: "This patient has dermatitis herpetiformis (DH), a skin manifestation of celiac disease. DH presents with intensely pruritic, grouped vesicles on extensor surfaces. It is caused by IgA antibodies (anti-tissue transglutaminase and anti-epidermal transglutaminase) that deposit at the dermal papillae tips. Nearly all patients with DH have underlying celiac disease (gluten-sensitive enteropathy), even if GI symptoms are mild. Treatment includes dapsone for acute relief and a lifelong gluten-free diet.",
      optionExplanations: [
        "Incorrect. Ulcerative colitis is associated with erythema nodosum and pyoderma gangrenosum, not dermatitis herpetiformis.",
        "Incorrect. Crohn disease is associated with erythema nodosum and pyoderma gangrenosum, not granular IgA deposition.",
        "Incorrect. Whipple disease is caused by Tropheryma whipplei and presents with diarrhea, arthralgias, and neurologic symptoms but not DH.",
        "Incorrect. Primary biliary cholangitis is associated with pruritus due to bile salt deposition but not the vesicular rash of DH.",
        "Correct. Dermatitis herpetiformis is the skin manifestation of celiac disease; granular IgA at DEJ is pathognomonic."
      ],
      highYieldPoint: "Dermatitis herpetiformis: granular IgA at dermal papillae; strongly associated with celiac disease (anti-tTG and anti-eTG antibodies); treat with dapsone + gluten-free diet."
    },
    {
      vignette: "A 70-year-old man presents with a rapidly expanding, irregularly bordered, darkly pigmented lesion on his left calf that has been present for 4 months. The lesion is 2.5 cm in diameter with areas of color variation including black, brown, red, and white. Biopsy reveals atypical melanocytes throughout the epidermis extending into the dermis to a depth of 3.2 mm (Breslow thickness).",
      question: "Which of the following is the most important prognostic factor for this patient's malignancy?",
      options: ["Tumor diameter","Patient age","Breslow thickness (depth of invasion)","Location on the body","Degree of pigmentation"],
      correctIndex: 2,
      explanation: "This patient has malignant melanoma. Breslow thickness (measured from the granular layer to the deepest point of tumor invasion) is the single most important prognostic factor in melanoma. A depth of 3.2 mm classifies this as a thick melanoma (T3/T4) with a significantly increased risk of metastasis and poor prognosis. The Clark level (anatomic depth of invasion) and ulceration status are also important but secondary to Breslow thickness.",
      optionExplanations: [
        "Incorrect. Tumor diameter is part of staging but is less prognostically important than depth of invasion.",
        "Incorrect. Patient age affects prognosis but is not the most important prognostic factor for melanoma.",
        "Correct. Breslow thickness is the #1 prognostic factor in melanoma; deeper invasion correlates with higher metastatic risk and worse survival.",
        "Incorrect. Location affects prognosis to some degree (trunk/head worse than extremities) but is less important than Breslow thickness.",
        "Incorrect. Degree of pigmentation does not significantly affect prognosis; amelanotic melanomas can be equally aggressive."
      ],
      highYieldPoint: "Melanoma prognosis: Breslow thickness > Clark level > ulceration; S-100 is most sensitive marker; BRAF V600E mutation in ~50% (treat with vemurafenib); risk factors include UV, dysplastic nevi, fair skin."
    },
    {
      vignette: "An 8-year-old boy presents with honey-colored crusted lesions on his face around the nose and mouth. The lesions started as small vesicles that ruptured and formed the characteristic golden crusts. Several children at his school have similar lesions. Gram stain of the exudate reveals gram-positive cocci in clusters.",
      question: "Which of the following toxins produced by the causative organism is responsible for this clinical presentation?",
      options: ["Erythrogenic toxin","Exfoliative toxin","Alpha toxin (lecithinase)","Toxic shock syndrome toxin-1","Panton-Valentine leukocidin"],
      correctIndex: 1,
      explanation: "This child has impetigo, most commonly caused by Staphylococcus aureus. The honey-colored crusted lesions are characteristic of non-bullous impetigo. S. aureus can also cause bullous impetigo through exfoliative toxins (ETA and ETB), which are serine proteases that cleave desmoglein 1 in the superficial epidermis. These same toxins, when systemically disseminated, cause staphylococcal scalded skin syndrome (SSSS). In non-bullous impetigo, local exfoliative toxin production contributes to the superficial epidermal splitting.",
      optionExplanations: [
        "Incorrect. Erythrogenic toxin (pyrogenic exotoxin) is produced by Group A Streptococcus and causes the rash of scarlet fever.",
        "Correct. Exfoliative toxin from S. aureus cleaves desmoglein 1 in the superficial epidermis, causing the superficial blistering and crusting of impetigo.",
        "Incorrect. Alpha toxin (lecithinase/phospholipase C) is produced by Clostridium perfringens and causes gas gangrene.",
        "Incorrect. TSST-1 is a superantigen causing toxic shock syndrome with diffuse erythema, hypotension, and multiorgan involvement.",
        "Incorrect. PVL is a pore-forming toxin associated with community-acquired MRSA causing necrotizing skin infections, not typical impetigo."
      ],
      highYieldPoint: "S. aureus exfoliative toxin cleaves desmoglein 1 → bullous impetigo (localized) or SSSS (systemic); compare to pemphigus foliaceus (autoantibodies against desmoglein 1)."
    },
    {
      vignette: "A 60-year-old woman presents with a 3-cm erythematous, scaly, sharply demarcated plaque on her right lower leg that has been slowly expanding over 1 year. She denies pain. Biopsy reveals full-thickness epidermal dysplasia with atypical keratinocytes extending from the basal layer to the surface, but the basement membrane is intact.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Actinic keratosis","Psoriasis","Basal cell carcinoma","Squamous cell carcinoma in situ (Bowen disease)","Paget disease of the skin"],
      correctIndex: 3,
      explanation: "This patient has Bowen disease (squamous cell carcinoma in situ), characterized by full-thickness epidermal dysplasia confined above an intact basement membrane. It presents as a well-demarcated, erythematous, scaly plaque that slowly expands. The key histologic finding is dysplastic keratinocytes throughout the entire epidermis (full-thickness atypia) without invasion through the basement membrane. If untreated, it can progress to invasive squamous cell carcinoma.",
      optionExplanations: [
        "Incorrect. Actinic keratosis shows partial-thickness dysplasia of the epidermis (typically lower third), not full-thickness involvement.",
        "Incorrect. Psoriasis shows regular acanthosis with parakeratosis and Munro microabscesses, not keratinocyte atypia.",
        "Incorrect. Basal cell carcinoma shows basaloid nests with peripheral palisading invading the dermis, not full-thickness epidermal dysplasia.",
        "Correct. Bowen disease (SCC in situ) shows full-thickness epidermal dysplasia with intact basement membrane; presents as an expanding erythematous plaque.",
        "Incorrect. Paget disease of the skin shows large, pale-staining Paget cells within the epidermis, not full-thickness keratinocyte dysplasia."
      ],
      highYieldPoint: "Bowen disease (SCC in situ): full-thickness epidermal dysplasia above intact BM; actinic keratosis: partial-thickness; invasive SCC: breaks through BM into dermis."
    },
    {
      vignette: "A 15-year-old girl presents with a red, targetoid rash on her palms, soles, and extremities. The lesions have three concentric zones: a dark center, a pale ring, and an outer erythematous ring. She had a cold sore on her lip 2 weeks ago. She has mild oral erosions but no eye involvement.",
      question: "Which of the following is the most common trigger for this patient's condition?",
      options: ["Drug hypersensitivity (sulfonamides)","Staphylococcal infection","Mycoplasma pneumoniae infection","Streptococcal pharyngitis","Herpes simplex virus infection"],
      correctIndex: 4,
      explanation: "This patient has erythema multiforme (EM) minor, characterized by targetoid (iris) lesions with three concentric zones. The most common trigger for erythema multiforme is herpes simplex virus (HSV) infection, accounting for the majority of recurrent cases. This patient's recent herpes labialis (cold sore) 2 weeks prior is the classic temporal relationship. EM minor typically involves the skin with limited mucosal involvement, distinguishing it from Stevens-Johnson syndrome.",
      optionExplanations: [
        "Incorrect. Drug hypersensitivity (especially sulfonamides) is more commonly associated with Stevens-Johnson syndrome/toxic epidermal necrolysis (SJS/TEN), not EM minor.",
        "Incorrect. Staphylococcal infections are not a common trigger for erythema multiforme.",
        "Incorrect. Mycoplasma pneumoniae can trigger EM or SJS but is less common than HSV as a cause of classic EM with targetoid lesions.",
        "Incorrect. Streptococcal infections are associated with erythema nodosum and post-streptococcal glomerulonephritis, not erythema multiforme.",
        "Correct. HSV infection is the most common trigger for erythema multiforme, especially recurrent episodes."
      ],
      highYieldPoint: "Erythema multiforme: targetoid lesions (3 zones); HSV is #1 trigger (EM minor); Drugs → SJS/TEN (more severe, widespread, mucosal involvement, epidermal detachment)."
    },
    {
      vignette: "A 42-year-old man with poorly controlled HIV (CD4 count 85 cells/μL) presents with multiple violaceous, nodular lesions on his face, trunk, and oral mucosa. The lesions are non-blanching and painless. Biopsy reveals spindle cell proliferation forming slit-like vascular spaces with trapped red blood cells and hemosiderin deposits.",
      question: "Which of the following is the causative agent of this patient's skin condition?",
      options: ["Epstein-Barr virus (HHV-4)","Cytomegalovirus (HHV-5)","Human herpesvirus 8 (HHV-8)","Human papillomavirus","Molluscum contagiosum virus"],
      correctIndex: 2,
      explanation: "This patient has Kaposi sarcoma, caused by human herpesvirus 8 (HHV-8, also called Kaposi sarcoma-associated herpesvirus, KSHV). KS is the most common malignancy in AIDS patients. HHV-8 infects endothelial cells and drives proliferation of spindle-shaped tumor cells that form slit-like vascular channels. The characteristic violaceous lesions can appear on the skin, oral mucosa, GI tract, and lungs. HHV-8 is also associated with primary effusion lymphoma and multicentric Castleman disease.",
      optionExplanations: [
        "Incorrect. EBV (HHV-4) causes infectious mononucleosis, Burkitt lymphoma, nasopharyngeal carcinoma, and hairy leukoplakia, not Kaposi sarcoma.",
        "Incorrect. CMV (HHV-5) causes retinitis, colitis, and pneumonitis in immunocompromised patients, not Kaposi sarcoma.",
        "Correct. HHV-8 causes Kaposi sarcoma by infecting endothelial cells and promoting vascular spindle cell proliferation.",
        "Incorrect. HPV causes warts, cervical cancer, and other anogenital carcinomas, not Kaposi sarcoma.",
        "Incorrect. Molluscum contagiosum virus (poxvirus) causes dome-shaped, umbilicated papules, not the violaceous nodules of KS."
      ],
      highYieldPoint: "Kaposi sarcoma: HHV-8 → spindle cells with slit-like vascular spaces; most common malignancy in AIDS; also: primary effusion lymphoma and multicentric Castleman disease."
    },
    {
      vignette: "A 55-year-old woman presents with a 2-year history of itchy, coin-shaped, well-demarcated, erythematous, scaly patches on her trunk and extremities. She notes that the patches tend to appear symmetrically. Biopsy reveals spongiotic dermatitis with epidermal intercellular edema and perivascular lymphocytic infiltrate in the dermis.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Nummular dermatitis","Tinea corporis","Psoriasis","Pityriasis rosea","Mycosis fungoides"],
      correctIndex: 0,
      explanation: "Nummular dermatitis (nummular eczema) is characterized by coin-shaped (nummular), well-demarcated, pruritic, erythematous patches that are often symmetric. Histologically, it shows spongiotic dermatitis (intercellular edema in the epidermis), which is the hallmark of eczematous dermatitis. The symmetric distribution, chronic course, and spongiotic pattern distinguish it from other coin-shaped lesions like tinea (which shows hyphae on KOH) or psoriasis (which shows parakeratosis without spongiosis).",
      optionExplanations: [
        "Correct. Nummular dermatitis presents with coin-shaped eczematous patches showing spongiotic dermatitis on biopsy.",
        "Incorrect. Tinea corporis shows annular plaques with central clearing and would reveal fungal hyphae on KOH prep or PAS staining.",
        "Incorrect. Psoriasis shows regular acanthosis with parakeratosis and neutrophilic microabscesses, not spongiotic dermatitis.",
        "Incorrect. Pityriasis rosea presents with a herald patch followed by a 'Christmas tree' distribution of oval patches along skin lines.",
        "Incorrect. Mycosis fungoides (cutaneous T-cell lymphoma) shows epidermotropism of atypical lymphocytes (Pautrier microabscesses), not spongiosis."
      ],
      highYieldPoint: "Spongiotic dermatitis = hallmark of eczematous conditions (atopic, contact, nummular); intercellular edema in epidermis with perivascular lymphocytes in dermis."
    },
    {
      vignette: "A 22-year-old college student presents with a single annular, salmon-colored, scaly plaque on her trunk that appeared 1 week ago. Three days later, she develops numerous smaller, oval, pink macules and patches arranged along the lines of skin cleavage on her trunk and proximal extremities in a 'Christmas tree' pattern. She recently had an upper respiratory infection.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Pityriasis rosea","Guttate psoriasis","Secondary syphilis","Dermatophytosis","Drug eruption"],
      correctIndex: 0,
      explanation: "This patient has pityriasis rosea, a self-limited condition that typically follows an upper respiratory infection. It begins with a herald patch — a single, larger, oval, salmon-colored plaque — followed days to weeks later by a secondary eruption of smaller lesions along Langer lines of skin cleavage, creating a 'Christmas tree' pattern on the back. The condition is thought to be associated with HHV-6 and HHV-7 reactivation and resolves spontaneously in 6-8 weeks.",
      optionExplanations: [
        "Correct. Pityriasis rosea: herald patch → secondary eruption in Christmas tree pattern along skin cleavage lines; self-limited; associated with HHV-6/7.",
        "Incorrect. Guttate psoriasis shows small, drop-like, salmon-pink papules often after streptococcal pharyngitis, without a herald patch or Christmas tree pattern.",
        "Incorrect. Secondary syphilis can mimic pityriasis rosea but typically involves palms and soles, has condylomata lata, and lacks a herald patch.",
        "Incorrect. Dermatophytosis (tinea corporis) shows annular plaques with active, scaly borders and central clearing, positive KOH prep.",
        "Incorrect. Drug eruptions typically present as diffuse morbilliform rash without the herald patch and Christmas tree distribution."
      ],
      highYieldPoint: "Pityriasis rosea: herald patch → Christmas tree distribution; self-limited (6-8 weeks); associated with HHV-6/7; always rule out secondary syphilis (RPR/VDRL)."
    },
    {
      vignette: "A 40-year-old woman presents with progressive hardening and tightening of the skin on her arms and trunk. She works in a factory handling polyvinyl chloride. Biopsy reveals dense collagen deposition in the dermis with loss of adnexal structures and a sparse inflammatory infiltrate. Serum ANA is negative. Her symptoms are limited to the skin without internal organ involvement.",
      question: "Which of the following best describes this patient's condition?",
      options: ["Diffuse systemic sclerosis","Limited systemic sclerosis","Lichen sclerosus","Morphea (localized scleroderma)","Eosinophilic fasciitis"],
      correctIndex: 3,
      explanation: "This patient has morphea (localized scleroderma), characterized by localized areas of skin hardening with dermal collagen deposition and loss of adnexal structures, without internal organ involvement. Unlike systemic sclerosis, morphea does not typically have Raynaud phenomenon, anti-Scl-70 or anti-centromere antibodies, or visceral disease. The negative ANA and absence of systemic features help distinguish morphea from systemic sclerosis. Environmental exposures (including polyvinyl chloride) have been associated with scleroderma-like conditions.",
      optionExplanations: [
        "Incorrect. Diffuse systemic sclerosis involves widespread skin tightening with visceral organ involvement (lungs, kidneys, GI), positive anti-Scl-70 antibodies.",
        "Incorrect. Limited systemic sclerosis (CREST) has skin changes limited to distal extremities and face, with anti-centromere antibodies and visceral complications.",
        "Incorrect. Lichen sclerosus causes thin, white, atrophic patches typically on the vulva or perianal area, not diffuse skin hardening.",
        "Correct. Morphea is localized scleroderma with skin-only involvement, dense dermal collagen, and no systemic features; ANA often negative.",
        "Incorrect. Eosinophilic fasciitis (Shulman syndrome) involves inflammation and fibrosis of the fascia with peripheral eosinophilia, not primarily dermal fibrosis."
      ],
      highYieldPoint: "Morphea: localized scleroderma, skin-only; no Raynaud, no visceral involvement, ANA usually negative; vs. systemic sclerosis which has visceral disease and autoantibodies."
    },
    {
      vignette: "A 50-year-old man who underwent renal transplantation 5 years ago presents with a firm, crater-shaped nodule on his sun-exposed forearm. The nodule has a central keratin-filled crater and elevated, rolled edges. It has been growing rapidly over the past 3 weeks. Biopsy reveals well-differentiated squamous epithelium with a large central plug of keratin and mild cytologic atypia.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Verruca vulgaris","Keratoacanthoma","Basal cell carcinoma","Actinic keratosis","Seborrheic keratosis"],
      correctIndex: 1,
      explanation: "This patient has a keratoacanthoma (KA), a rapidly growing, crater-shaped squamous neoplasm with a central keratin plug. KAs typically grow rapidly over weeks, reach a maximum size, and may involute spontaneously. Histologically, they show well-differentiated squamous epithelium with a central keratinous crater. Immunosuppressed patients (like transplant recipients) are at increased risk. KAs are considered low-grade variants of squamous cell carcinoma by many pathologists and are typically excised.",
      optionExplanations: [
        "Incorrect. Verruca vulgaris (common wart) caused by HPV shows papillomatosis, hyperkeratosis, and koilocytes, not a crater with central keratin plug.",
        "Correct. Keratoacanthoma: rapidly growing, crater-shaped nodule with central keratin plug; well-differentiated squamous epithelium; may involute; treat as low-grade SCC.",
        "Incorrect. Basal cell carcinoma grows slowly and shows basaloid nests with peripheral palisading, not a crater with keratinous core.",
        "Incorrect. Actinic keratosis is a flat, scaly patch with partial-thickness epidermal dysplasia, not a rapidly growing nodule.",
        "Incorrect. Seborrheic keratosis is a benign 'stuck-on' appearing keratinocytic proliferation with horn cysts, not a rapidly growing crater."
      ],
      highYieldPoint: "Keratoacanthoma: rapidly growing crater with central keratin plug; may spontaneously involute; considered low-grade SCC variant; increased risk in immunosuppressed patients."
    },
    {
      vignette: "A 32-year-old man presents with a new mole on his back that his partner noticed has been changing. Examination reveals a 9-mm lesion that is asymmetric, has irregular borders, shows color variegation (tan, dark brown, and black areas), and has an irregular surface. Dermoscopy reveals an atypical pigment network with regression structures. Excisional biopsy is performed.",
      question: "Which of the following histologic findings would confirm the diagnosis of malignant melanoma rather than a benign nevus?",
      options: ["Symmetric, well-circumscribed nests of melanocytes at the dermal-epidermal junction","Maturation of melanocytes with descent into the dermis","Neuroid differentiation in the deep dermis","Uniform melanocyte nests confined to the basal layer","Pagetoid spread of atypical melanocytes throughout the epidermis"],
      correctIndex: 4,
      explanation: "Pagetoid spread — the upward migration of atypical melanocytes from the basal layer into the upper layers of the epidermis — is a hallmark histologic feature of melanoma. In benign nevi, melanocytes are organized in nests at the DEJ and/or dermis, show maturation (smaller cells with less cytoplasm) as they descend deeper, and are confined to the lower epidermis. Melanoma shows asymmetry, poor circumscription, lack of maturation, pagetoid spread, high mitotic rate, and cytologic atypia.",
      optionExplanations: [
        "Incorrect. Symmetric, well-circumscribed junctional nests are characteristic of benign junctional nevi.",
        "Incorrect. Maturation of melanocytes with depth (smaller cells, less pigment deeper) is a reassuring feature of benign nevi.",
        "Incorrect. Neuroid differentiation in the deep dermis is a sign of melanocyte maturation, seen in benign compound and intradermal nevi.",
        "Incorrect. Uniform nests confined to the basal layer describe a normal junctional melanocytic nevus.",
        "Correct. Pagetoid spread (atypical melanocytes scattered through upper epidermis) is a hallmark of melanoma, indicating loss of normal melanocyte growth control."
      ],
      highYieldPoint: "Melanoma histology: pagetoid spread, asymmetry, poor circumscription, lack of maturation, high mitotic rate, cytologic atypia; benign nevi show maturation and symmetry."
    }
  ],
  "Rheumatologic disease": [
    {
      vignette: "A 32-year-old man presents with a 6-month history of progressive low back pain and stiffness that is worst in the morning and improves with exercise. He also reports bilateral buttock pain. Physical examination reveals limited lumbar flexion and decreased chest expansion. X-ray of the pelvis shows bilateral sacroiliitis with erosions and sclerosis. He is HLA-B27 positive.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Ankylosing spondylitis","Rheumatoid arthritis","Reactive arthritis","Psoriatic arthritis","Osteoarthritis of the spine"],
      correctIndex: 0,
      explanation: "This patient has ankylosing spondylitis (AS), a seronegative spondyloarthropathy strongly associated with HLA-B27 (>90% of cases). AS characteristically presents in young men with inflammatory back pain (insidious onset, morning stiffness improving with exercise), bilateral sacroiliitis, and limited spinal mobility. Over time, progressive spinal fusion occurs with syndesmophyte formation, leading to a 'bamboo spine.' Extra-articular manifestations include anterior uveitis, aortitis, and restrictive lung disease.",
      optionExplanations: [
        "Correct. Ankylosing spondylitis: young male, inflammatory back pain, bilateral sacroiliitis, HLA-B27+, limited spinal mobility; seronegative spondyloarthropathy.",
        "Incorrect. Rheumatoid arthritis typically affects small joints of the hands/feet symmetrically and is RF/anti-CCP positive, not HLA-B27 associated.",
        "Incorrect. Reactive arthritis presents with asymmetric oligoarthritis (usually lower extremity) following GI or GU infection, plus conjunctivitis and urethritis.",
        "Incorrect. Psoriatic arthritis can cause sacroiliitis but is associated with psoriatic skin lesions and has variable patterns including DIP involvement.",
        "Incorrect. Osteoarthritis of the spine presents with mechanical pain (worse with activity, better with rest) and lacks inflammatory features."
      ],
      highYieldPoint: "Ankylosing spondylitis: HLA-B27 (>90%), bilateral sacroiliitis → bamboo spine; inflammatory back pain (improves with exercise); extra-articular: anterior uveitis, aortitis, apical lung fibrosis."
    },
    {
      vignette: "A 50-year-old woman presents with dry eyes and dry mouth for 8 months. She requires frequent sips of water and uses artificial tears multiple times daily. She has difficulty swallowing dry food. Physical examination reveals bilateral parotid gland enlargement. Laboratory studies show positive anti-SSA (Ro) and anti-SSB (La) antibodies. Schirmer test shows <5 mm wetting in 5 minutes bilaterally.",
      question: "Which of the following is the most concerning long-term complication of this patient's condition?",
      options: ["Renal cell carcinoma","Marginal zone (MALT) lymphoma","Squamous cell carcinoma of the parotid","Hepatocellular carcinoma","Acute myeloid leukemia"],
      correctIndex: 1,
      explanation: "This patient has Sjögren syndrome, an autoimmune disorder characterized by lymphocytic infiltration and destruction of exocrine glands (especially lacrimal and salivary), causing dry eyes (keratoconjunctivitis sicca) and dry mouth (xerostomia). Anti-SSA (Ro) and anti-SSB (La) antibodies are characteristic. The most concerning complication is a 40-fold increased risk of developing marginal zone (MALT) B-cell lymphoma, which arises from chronic lymphocytic stimulation in the salivary glands.",
      optionExplanations: [
        "Incorrect. Renal cell carcinoma is not associated with Sjögren syndrome.",
        "Correct. Sjögren syndrome carries a 40x increased risk of MALT lymphoma due to chronic B-cell stimulation in exocrine glands.",
        "Incorrect. Squamous cell carcinoma of the parotid is not specifically associated with Sjögren syndrome.",
        "Incorrect. Hepatocellular carcinoma is associated with chronic hepatitis B/C and cirrhosis, not Sjögren syndrome.",
        "Incorrect. AML is not a recognized complication of Sjögren syndrome."
      ],
      highYieldPoint: "Sjögren syndrome: anti-SSA (Ro)/anti-SSB (La); dry eyes + dry mouth; bilateral parotid enlargement; 40x increased risk of MALT lymphoma; associated with other autoimmune diseases."
    },
    {
      vignette: "A 25-year-old man develops acute asymmetric oligoarthritis of the left knee and right ankle 3 weeks after an episode of urethritis. He also has conjunctivitis and a painless, erythematous lesion on his glans penis (circinate balanitis). Examination of his feet reveals hyperkeratotic papules on the soles (keratoderma blennorrhagicum). HLA-B27 testing is positive.",
      question: "Which of the following organisms is most likely to have triggered this patient's arthritis?",
      options: ["Staphylococcus aureus","Neisseria gonorrhoeae","Chlamydia trachomatis","Borrelia burgdorferi","Treponema pallidum"],
      correctIndex: 2,
      explanation: "This patient has reactive arthritis (formerly Reiter syndrome), a seronegative spondyloarthropathy triggered by preceding GI or GU infection. The classic triad is arthritis, urethritis, and conjunctivitis ('can't see, can't pee, can't climb a tree'). Following urethritis, Chlamydia trachomatis is the most common triggering organism. Following enteritis, common triggers include Shigella, Salmonella, Yersinia, and Campylobacter. The arthritis is sterile — the organism is not in the joint.",
      optionExplanations: [
        "Incorrect. S. aureus causes septic arthritis (organism present in joint), not reactive arthritis (sterile inflammatory response).",
        "Incorrect. N. gonorrhoeae causes gonococcal arthritis (disseminated gonococcal infection), not reactive arthritis.",
        "Correct. Chlamydia trachomatis is the most common GU trigger of reactive arthritis; the preceding urethritis is the clue.",
        "Incorrect. Borrelia burgdorferi causes Lyme disease arthritis (particularly large joint monoarthritis), not the classic triad of reactive arthritis.",
        "Incorrect. Treponema pallidum causes syphilis; secondary syphilis can cause arthritis but not the classic reactive arthritis triad."
      ],
      highYieldPoint: "Reactive arthritis: sterile arthritis + urethritis + conjunctivitis; HLA-B27 associated; GU trigger = Chlamydia; GI triggers = Shigella, Salmonella, Yersinia, Campylobacter."
    },
    {
      vignette: "A 72-year-old woman presents with sudden onset of severe pain, redness, and swelling of her right knee. She has a history of osteoarthritis and takes hydrochlorothiazide for hypertension. Aspiration of the joint reveals turbid fluid with 35,000 WBC/μL. Polarized light microscopy reveals positively birefringent, rhomboid-shaped crystals.",
      question: "Which of the following is the most likely composition of the crystals found in this patient's joint?",
      options: ["Monosodium urate","Calcium pyrophosphate dihydrate","Cholesterol","Calcium hydroxyapatite","Calcium oxalate"],
      correctIndex: 3,
      explanation: "Positively birefringent, rhomboid-shaped crystals are characteristic of calcium pyrophosphate dihydrate (CPPD), which causes pseudogout. CPPD disease commonly affects the knee and wrist in elderly patients. Risk factors include aging, osteoarthritis, hyperparathyroidism, hemochromatosis, hypomagnesemia, and hypophosphatasia. X-rays may show chondrocalcinosis (linear calcification of articular cartilage). Key mnemonic: Positively birefringent = Pseudogout (CPPD); Negatively birefringent = gout (urate).",
      optionExplanations: [
        "Incorrect. Monosodium urate crystals are negatively birefringent and needle-shaped, causing gout.",
        "Incorrect. Calcium hydroxyapatite crystals are associated with calcific periarthritis/tendinitis but are not birefringent and cannot be seen on standard polarized microscopy.",
        "Incorrect. Cholesterol crystals can be found in chronic effusions (e.g., RA) but are plate-like with notched corners, not rhomboid.",
        "Correct. CPPD crystals are positively birefringent and rhomboid-shaped; cause pseudogout, commonly in the knee of elderly patients.",
        "Incorrect. Calcium oxalate crystals are associated with renal stones and rarely with arthropathy in dialysis patients."
      ],
      highYieldPoint: "Pseudogout (CPPD): positively birefringent, rhomboid crystals; elderly, knee; chondrocalcinosis; associated with hyperPTH, hemochromatosis, hypoMg; Gout: negatively birefringent, needle-shaped."
    },
    {
      vignette: "A 45-year-old woman presents with a 2-week history of severe headache, jaw claudication, and scalp tenderness when brushing her hair. She also reports fatigue and proximal shoulder/hip pain and stiffness for the past 3 months. ESR is 95 mm/hr and CRP is markedly elevated. Temporal artery biopsy shows granulomatous inflammation with multinucleated giant cells and fragmentation of the internal elastic lamina.",
      question: "Which of the following is the most serious acute complication if this condition is left untreated?",
      options: ["Aortic aneurysm","Stroke","Irreversible vision loss","Renal failure","Pulmonary hemorrhage"],
      correctIndex: 4,
      explanation: "This patient has giant cell (temporal) arteritis (GCA), a large-vessel vasculitis affecting medium and large arteries, particularly branches of the external carotid artery. The most feared acute complication is irreversible vision loss due to anterior ischemic optic neuropathy (AION) from inflammation and occlusion of the ophthalmic or posterior ciliary arteries. Treatment with high-dose corticosteroids must be initiated immediately upon clinical suspicion — do not wait for biopsy results. GCA is strongly associated with polymyalgia rheumatica.",
      optionExplanations: [
        "Incorrect. Aortic aneurysm can develop as a long-term complication but is not the most urgent acute concern.",
        "Incorrect. Stroke can occur from involvement of vertebral arteries but is less common than vision loss.",
        "Incorrect. Renal failure is not typically associated with GCA (unlike other vasculitides such as granulomatosis with polyangiitis).",
        "Incorrect. Pulmonary hemorrhage is associated with ANCA-associated vasculitides, not GCA.",
        "Correct. Irreversible vision loss from anterior ischemic optic neuropathy is the most serious acute complication; start steroids immediately."
      ],
      highYieldPoint: "GCA: temporal artery biopsy shows granulomatous inflammation; risk of irreversible blindness (AION); treat with high-dose steroids ASAP; associated with polymyalgia rheumatica; ESR/CRP markedly elevated."
    },
    {
      vignette: "A 35-year-old man presents with recurrent oral ulcers, genital ulcers, and painful eye redness diagnosed as anterior uveitis. He also has pathergy — a papule forming 48 hours after a needle stick during blood draw. He recently emigrated from Turkey.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Systemic lupus erythematosus","Behçet disease","Reactive arthritis","Crohn disease","Herpes simplex infection"],
      correctIndex: 0,
      explanation: "This patient has Behçet disease, a systemic vasculitis of unknown etiology characterized by recurrent oral aphthous ulcers, genital ulcers, ocular inflammation (uveitis, hypopyon), and pathergy (exaggerated skin response to minor trauma). It is most common along the Silk Road (Turkey, Middle East, East Asia) and is associated with HLA-B51. Behçet disease affects vessels of all sizes and can cause CNS involvement, arterial aneurysms, and venous thrombosis.",
      optionExplanations: [
        "Correct. Behçet disease: oral/genital ulcers + uveitis + pathergy; Silk Road distribution; HLA-B51 associated.",
        "Incorrect. SLE presents with malar rash, photosensitivity, and anti-dsDNA/ANA positivity; oral ulcers are possible but genital ulcers and pathergy are not features.",
        "Incorrect. Reactive arthritis has conjunctivitis (not uveitis as primary eye finding), urethritis, and arthritis following infection.",
        "Incorrect. Crohn disease can cause oral ulcers and eye involvement but does not cause genital ulcers or pathergy.",
        "Incorrect. HSV causes recurrent oral/genital ulcers but does not cause uveitis or pathergy."
      ],
      highYieldPoint: "Behçet disease: recurrent oral/genital ulcers + uveitis + pathergy; Silk Road (Turkey); HLA-B51; vasculitis of all vessel sizes; can cause CNS disease and thrombosis."
    },
    {
      vignette: "A 40-year-old man presents with a 3-month history of bloody nasal discharge, chronic sinusitis, and progressive cough with hemoptysis. He has developed hematuria and proteinuria. Serum c-ANCA (anti-proteinase 3) is strongly positive. Renal biopsy shows a pauci-immune crescentic glomerulonephritis. Lung biopsy reveals necrotizing granulomatous vasculitis.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Microscopic polyangiitis","Granulomatosis with polyangiitis (Wegener)","Eosinophilic granulomatosis with polyangiitis (Churg-Strauss)","Goodpasture syndrome","Polyarteritis nodosa"],
      correctIndex: 1,
      explanation: "This patient has granulomatosis with polyangiitis (GPA, formerly Wegener granulomatosis), a small-vessel vasculitis characterized by the triad of necrotizing granulomatous vasculitis of the upper and lower respiratory tract and pauci-immune glomerulonephritis. c-ANCA (anti-PR3) is positive in >90% of cases. Classic features include sinusitis, saddle nose deformity, pulmonary nodules/cavities, and rapidly progressive glomerulonephritis. Treatment includes cyclophosphamide and corticosteroids.",
      optionExplanations: [
        "Incorrect. Microscopic polyangiitis also causes pulmonary-renal syndrome but is p-ANCA (anti-MPO) positive and does not form granulomas.",
        "Correct. GPA: c-ANCA (anti-PR3), necrotizing granulomatous vasculitis of upper/lower airway + pauci-immune crescentic GN.",
        "Incorrect. EGPA (Churg-Strauss) is associated with asthma, eosinophilia, and p-ANCA (anti-MPO), not c-ANCA and upper airway destruction.",
        "Incorrect. Goodpasture syndrome has anti-GBM antibodies with linear IF staining, not pauci-immune (few/no immune deposits) GN.",
        "Incorrect. Polyarteritis nodosa involves medium-sized arteries, spares lungs and glomeruli, is NOT associated with ANCA, and affects hepatitis B patients."
      ],
      highYieldPoint: "GPA (Wegener): c-ANCA/anti-PR3 + necrotizing granulomatous vasculitis (upper/lower airway) + pauci-immune GN; triad: sinusitis, pulmonary, renal; treat with cyclophosphamide + steroids."
    },
    {
      vignette: "A 9-year-old girl presents with a 2-week history of symmetric joint pain and swelling affecting her knees, ankles, and wrists. She had a sore throat 3 weeks ago that resolved without treatment. Physical examination reveals a new heart murmur, subcutaneous nodules on her elbows, and an erythematous, ring-shaped rash on her trunk with central clearing (erythema marginatum). ESR is elevated and anti-streptolysin O (ASO) titer is high.",
      question: "Which of the following is the most likely mechanism of cardiac damage in this patient?",
      options: ["Direct bacterial invasion of the myocardium","Immune complex deposition in the endocardium","Molecular mimicry between streptococcal M protein and cardiac tissue","Type I hypersensitivity reaction to streptococcal antigens","Toxin-mediated myocardial necrosis"],
      correctIndex: 2,
      explanation: "This patient has acute rheumatic fever (ARF) following untreated Group A Streptococcus (GAS) pharyngitis. Cardiac damage (rheumatic carditis) occurs through molecular mimicry: antibodies against streptococcal M protein cross-react with cardiac myosin, laminin, and valve glycoproteins. This type II hypersensitivity reaction leads to inflammation of all layers of the heart (pancarditis) with Aschoff bodies (granulomas with Anitschkow cells). The mitral valve is most commonly affected.",
      optionExplanations: [
        "Incorrect. GAS does not directly invade the heart; ARF is an autoimmune post-infectious complication.",
        "Incorrect. Immune complex deposition (type III hypersensitivity) causes post-streptococcal glomerulonephritis, not rheumatic carditis.",
        "Correct. Molecular mimicry: anti-streptococcal M protein antibodies cross-react with cardiac tissue (type II hypersensitivity) → pancarditis.",
        "Incorrect. Type I (IgE-mediated) hypersensitivity causes anaphylaxis and allergic reactions, not rheumatic fever.",
        "Incorrect. Streptococcal toxins (streptolysin O, streptolysin S) can damage cells but do not cause the immune-mediated pancarditis of ARF."
      ],
      highYieldPoint: "Rheumatic fever: molecular mimicry (anti-M protein Abs cross-react with cardiac myosin) → type II hypersensitivity → pancarditis with Aschoff bodies; Jones criteria for diagnosis."
    },
    {
      vignette: "A 55-year-old man with a 10-year history of seropositive rheumatoid arthritis and splenomegaly presents with recurrent bacterial infections. Complete blood count reveals neutropenia (ANC 800/μL) with normal hemoglobin and platelets. Bone marrow biopsy shows myeloid hyperplasia with maturation arrest.",
      question: "Which of the following best describes this clinical syndrome?",
      options: ["Sjögren syndrome","Still disease","Caplan syndrome","Felty syndrome","Drug-induced agranulocytosis"],
      correctIndex: 3,
      explanation: "This patient has Felty syndrome, defined as the triad of rheumatoid arthritis, splenomegaly, and neutropenia. It occurs in patients with longstanding, seropositive (RF-positive), severe RA and is associated with HLA-DR4. The neutropenia leads to increased susceptibility to bacterial infections. The mechanism involves splenic sequestration of neutrophils, anti-neutrophil antibodies, and impaired granulopoiesis. Treatment includes DMARDs (methotrexate), and refractory cases may benefit from splenectomy or G-CSF.",
      optionExplanations: [
        "Incorrect. Sjögren syndrome causes dry eyes and mouth with anti-SSA/SSB antibodies; it can overlap with RA but does not explain neutropenia and splenomegaly.",
        "Incorrect. Adult-onset Still disease presents with quotidian fevers, evanescent salmon-colored rash, arthralgias, and leukocytosis (not neutropenia).",
        "Incorrect. Caplan syndrome is the combination of RA with coal workers' pneumoconiosis (pulmonary rheumatoid nodules + coal dust exposure).",
        "Correct. Felty syndrome: RA + splenomegaly + neutropenia; seropositive, longstanding RA; HLA-DR4; risk of recurrent infections.",
        "Incorrect. Drug-induced agranulocytosis would need a temporal relationship to a causative drug and would not explain splenomegaly."
      ],
      highYieldPoint: "Felty syndrome: RA + splenomegaly + neutropenia; longstanding seropositive RA; HLA-DR4; Caplan syndrome: RA + coal worker's pneumoconiosis."
    },
    {
      vignette: "A 16-year-old girl presents with a 3-week history of fever, weight loss, and a pink, macular, evanescent rash on her trunk that appears during febrile episodes and fades when the fever subsides. She has polyarthritis affecting her knees, wrists, and ankles. Laboratory studies show leukocytosis (WBC 22,000/μL), markedly elevated ferritin (15,000 ng/mL), and elevated ESR/CRP. RF and ANA are negative.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Systemic lupus erythematosus","Acute rheumatic fever","Juvenile idiopathic arthritis, systemic type (Still disease)","Henoch-Schönlein purpura","Kawasaki disease"],
      correctIndex: 4,
      explanation: "This patient has systemic juvenile idiopathic arthritis (sJIA), also known as Still disease. It is characterized by quotidian (daily) spiking fevers, an evanescent salmon-pink rash that coincides with fever, polyarthritis, lymphadenopathy, hepatosplenomegaly, and serositis. Markedly elevated serum ferritin is a hallmark finding (often >10,000 ng/mL). RF and ANA are typically negative. The most dangerous complication is macrophage activation syndrome (MAS), a form of hemophagocytic lymphohistiocytosis.",
      optionExplanations: [
        "Incorrect. SLE presents with malar rash, photosensitivity, and positive ANA/anti-dsDNA; the evanescent rash and markedly elevated ferritin are more suggestive of Still disease.",
        "Incorrect. Acute rheumatic fever follows streptococcal pharyngitis and presents with migratory polyarthritis, carditis, and erythema marginatum; ferritin is not markedly elevated.",
        "Incorrect. Kawasaki disease affects children <5 years with fever >5 days, conjunctivitis, oral changes, rash, extremity changes, and cervical lymphadenopathy.",
        "Incorrect. Henoch-Schönlein purpura presents with palpable purpura on lower extremities, arthritis, abdominal pain, and IgA nephropathy in children.",
        "Correct. Systemic JIA (Still disease): quotidian fevers, salmon-pink evanescent rash, polyarthritis, markedly elevated ferritin, negative RF/ANA."
      ],
      highYieldPoint: "Still disease (systemic JIA): quotidian fevers + salmon-pink evanescent rash + arthritis + markedly elevated ferritin; complication: macrophage activation syndrome (MAS)."
    },
    {
      vignette: "A 28-year-old woman with known systemic lupus erythematosus presents with recurrent miscarriages (3 in the past 2 years) and an episode of deep vein thrombosis. Laboratory studies reveal prolonged aPTT that does not correct with mixing study, positive lupus anticoagulant, and elevated anti-cardiolipin IgG antibodies. Platelet count is 95,000/μL.",
      question: "Which of the following best explains the thrombotic tendency despite the prolonged aPTT?",
      options: ["Factor V Leiden mutation","Protein C deficiency","Antibodies interfere with phospholipid-dependent coagulation assays in vitro but promote thrombosis in vivo","Disseminated intravascular coagulation","Heparin contamination of the blood sample"],
      correctIndex: 2,
      explanation: "This patient has antiphospholipid syndrome (APS), characterized by thrombosis and pregnancy morbidity with persistent antiphospholipid antibodies (lupus anticoagulant, anti-cardiolipin, anti-β2-glycoprotein I). The paradox of APS is that the aPTT is prolonged in vitro because antibodies interfere with phospholipid-dependent coagulation assays, but in vivo these antibodies promote a hypercoagulable state by activating endothelial cells, platelets, and complement.",
      optionExplanations: [
        "Incorrect. Factor V Leiden causes activated protein C resistance and thrombosis but does not cause prolonged aPTT or positive antiphospholipid antibodies.",
        "Incorrect. Protein C deficiency causes thrombosis but does not explain the prolonged aPTT or the positive lupus anticoagulant.",
        "Correct. Antiphospholipid antibodies prolong aPTT in vitro (interfere with phospholipid reagents) but cause thrombosis in vivo by activating endothelium and platelets.",
        "Incorrect. DIC would show prolonged PT/aPTT with elevated D-dimer, schistocytes, and consumption of fibrinogen and platelets.",
        "Incorrect. Heparin contamination would prolong aPTT but would not explain the clinical history of thrombosis and pregnancy losses."
      ],
      highYieldPoint: "Antiphospholipid syndrome: thrombosis + pregnancy loss + antiphospholipid antibodies; aPTT prolonged in vitro (interferes with assay) but prothrombotic in vivo; treat with anticoagulation."
    },
    {
      vignette: "A 60-year-old man presents with bilateral proximal shoulder and hip girdle stiffness and pain for 3 months. Morning stiffness lasts over 1 hour. He has difficulty raising his arms above his head and climbing stairs. Physical examination reveals no true muscle weakness on formal testing. ESR is 78 mm/hr. CRP is elevated. CK is normal.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Polymyalgia rheumatica","Fibromyalgia","Polymyositis","Hypothyroid myopathy","Dermatomyositis"],
      correctIndex: 0,
      explanation: "This patient has polymyalgia rheumatica (PMR), an inflammatory condition affecting older adults (>50) characterized by bilateral proximal shoulder and hip girdle pain and stiffness. Key distinguishing features from inflammatory myopathies: (1) no true muscle weakness, (2) normal CK, and (3) dramatically elevated ESR/CRP. PMR responds rapidly to low-dose corticosteroids. It is strongly associated with giant cell arteritis (~15% of PMR patients develop GCA), so patients must be monitored for GCA symptoms.",
      optionExplanations: [
        "Correct. PMR: bilateral proximal stiffness/pain in elderly, markedly elevated ESR/CRP, normal CK, no true weakness; responds to low-dose steroids.",
        "Incorrect. Fibromyalgia causes widespread pain and tenderness but has normal inflammatory markers (ESR, CRP).",
        "Incorrect. Polymyositis causes true proximal muscle weakness with elevated CK, not just stiffness and pain with normal CK.",
        "Incorrect. Hypothyroid myopathy presents with weakness and elevated CK with findings of hypothyroidism (fatigue, weight gain, cold intolerance).",
        "Incorrect. Dermatomyositis causes proximal weakness with elevated CK plus characteristic skin findings (heliotrope rash, Gottron papules)."
      ],
      highYieldPoint: "PMR: age >50, bilateral proximal stiffness, ↑ESR/CRP, normal CK, no weakness; responds to low-dose prednisone; 15% develop GCA — monitor for headache, jaw claudication, visual changes."
    },
    {
      vignette: "A 4-year-old boy presents with a 5-day history of high fever, bilateral nonexudative conjunctivitis, erythema and cracking of the lips with a 'strawberry tongue,' diffuse polymorphous rash, edema and erythema of the hands and feet, and a single enlarged cervical lymph node (2 cm). CRP and ESR are elevated.",
      question: "Which of the following is the most serious complication of this patient's condition?",
      options: ["Glomerulonephritis","Coronary artery aneurysm","Aortic dissection","Pulmonary embolism","Cerebral aneurysm"],
      correctIndex: 1,
      explanation: "This child has Kawasaki disease, an acute self-limited vasculitis primarily affecting medium-sized arteries in children <5 years. The most serious complication is coronary artery aneurysm, occurring in up to 25% of untreated cases. Treatment with high-dose IVIG and aspirin within the first 10 days of illness reduces the risk of coronary aneurysms to <5%. Diagnostic criteria require fever ≥5 days plus 4 of 5 principal features: bilateral conjunctivitis, oral changes, rash, extremity changes, cervical lymphadenopathy.",
      optionExplanations: [
        "Incorrect. Glomerulonephritis is associated with post-streptococcal infection and vasculitides like GPA, not Kawasaki disease.",
        "Correct. Coronary artery aneurysms are the most serious complication of Kawasaki disease; treat with IVIG + aspirin within 10 days to prevent.",
        "Incorrect. Aortic dissection is associated with Marfan syndrome, Ehlers-Danlos vascular type, and hypertension, not Kawasaki disease.",
        "Incorrect. Pulmonary embolism is not a primary complication of Kawasaki disease.",
        "Incorrect. Cerebral aneurysms can rarely occur but coronary aneurysms are far more common and clinically significant."
      ],
      highYieldPoint: "Kawasaki disease: children <5; fever ≥5 days + 4/5 criteria; #1 complication = coronary artery aneurysm (25% untreated); treat: IVIG + aspirin; most common cause of acquired heart disease in children."
    },
    {
      vignette: "A 38-year-old woman presents with progressive thickening of the skin of her fingers and face, Raynaud phenomenon, and difficulty swallowing. She has developed dyspnea on exertion. Pulmonary function tests show a restrictive pattern with decreased DLCO. Anti-RNA polymerase III antibodies are positive.",
      question: "Which of the following renal complications is this patient at highest risk for?",
      options: ["Membranous nephropathy","IgA nephropathy","Lupus nephritis","Scleroderma renal crisis","Amyloid nephropathy"],
      correctIndex: 3,
      explanation: "This patient has diffuse systemic sclerosis with anti-RNA polymerase III antibodies, which are specifically associated with scleroderma renal crisis. This life-threatening complication presents with sudden onset of severe hypertension (malignant hypertension) and rapidly progressive renal failure due to intimal proliferation and fibrinoid necrosis of renal arterioles. It occurs in ~10-15% of diffuse scleroderma patients and is treated with ACE inhibitors, which have dramatically improved survival.",
      optionExplanations: [
        "Incorrect. Membranous nephropathy is associated with SLE, hepatitis B, solid tumors, and drugs, not scleroderma.",
        "Incorrect. IgA nephropathy is the most common glomerulonephritis worldwide but is not a complication of scleroderma.",
        "Incorrect. Lupus nephritis is a complication of SLE, not systemic sclerosis.",
        "Correct. Scleroderma renal crisis: malignant hypertension + rapid renal failure; anti-RNA polymerase III antibodies; treat with ACE inhibitors.",
        "Incorrect. Amyloid nephropathy complicates chronic inflammatory conditions and plasma cell dyscrasias, not scleroderma."
      ],
      highYieldPoint: "Scleroderma renal crisis: anti-RNA polymerase III Ab; malignant HTN + acute renal failure; treat with ACE inhibitors (NOT steroids — steroids can precipitate crisis)."
    },
    {
      vignette: "A 6-year-old boy presents with a 1-week history of palpable purpura on his lower extremities and buttocks, colicky abdominal pain, and arthralgia involving his knees and ankles. He had an upper respiratory infection 2 weeks ago. Urinalysis shows microscopic hematuria and mild proteinuria. Skin biopsy reveals leukocytoclastic vasculitis with IgA deposition in the vessel walls.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Kawasaki disease","Microscopic polyangiitis","Thrombotic thrombocytopenic purpura","Henoch-Schönlein purpura (IgA vasculitis)","Granulomatosis with polyangiitis"],
      correctIndex: 4,
      explanation: "This child has Henoch-Schönlein purpura (HSP, now called IgA vasculitis), the most common vasculitis in children. It is characterized by the tetrad of palpable purpura (most common on lower extremities/buttocks), arthralgia/arthritis, abdominal pain (GI involvement), and renal disease (IgA nephropathy). It often follows an upper respiratory infection. Pathologically, there is IgA-mediated small-vessel vasculitis with leukocytoclasis. Most cases are self-limited, but renal involvement can rarely progress.",
      optionExplanations: [
        "Incorrect. Kawasaki disease presents with prolonged fever, conjunctivitis, oral changes, rash, and extremity changes in children <5, not palpable purpura with IgA deposition.",
        "Incorrect. Microscopic polyangiitis is p-ANCA associated and affects adults with pulmonary-renal syndrome, not children with IgA vasculitis.",
        "Incorrect. TTP presents with thrombocytopenia, microangiopathic hemolytic anemia, neurologic symptoms, renal failure, and fever — not palpable purpura with IgA deposits.",
        "Incorrect. GPA (Wegener) is c-ANCA associated with granulomatous upper/lower airway disease and pauci-immune GN, not IgA-mediated vasculitis.",
        "Correct. HSP (IgA vasculitis): palpable purpura + arthralgia + abdominal pain + renal involvement (IgA nephropathy) with IgA vascular deposits; most common childhood vasculitis."
      ],
      highYieldPoint: "HSP (IgA vasculitis): most common childhood vasculitis; tetrad of palpable purpura, arthralgia, abdominal pain, renal disease (IgA nephropathy); usually self-limited; follows URI."
    }
  ],
  "Muscle disorders": [
    {
      vignette: "A 5-year-old boy presents with progressive difficulty climbing stairs and getting up from the floor. His mother notes he uses his arms to 'walk up' his thighs when standing from a seated position. Physical examination reveals calf pseudohypertrophy, proximal muscle weakness, and a waddling gait. Serum CK is markedly elevated at 15,000 U/L. Genetic testing reveals a frameshift deletion in the dystrophin gene.",
      question: "Which of the following best describes the function of the protein that is absent in this patient?",
      options: ["Connects the intracellular actin cytoskeleton to the extracellular matrix via the dystrophin-associated glycoprotein complex","Forms the calcium release channel in the sarcoplasmic reticulum","Serves as the voltage-sensitive component of the neuromuscular junction","Catalyzes the phosphorylation of myosin light chain","Functions as the structural protein of the sarcomeric Z-disc"],
      correctIndex: 0,
      explanation: "This boy has Duchenne muscular dystrophy (DMD), caused by frameshift deletions in the dystrophin gene on the X chromosome (Xp21). Dystrophin is a large structural protein that connects the intracellular actin cytoskeleton of muscle fibers to the extracellular matrix (ECM) through the dystrophin-associated glycoprotein complex (DGC), particularly via alpha- and beta-dystroglycan and laminin. Without dystrophin, the sarcolemma is mechanically fragile and susceptible to contraction-induced injury.",
      optionExplanations: [
        "Correct. Dystrophin links the actin cytoskeleton to the ECM via the dystrophin-glycoprotein complex, stabilizing the sarcolemma during muscle contraction.",
        "Incorrect. The calcium release channel in the SR is the ryanodine receptor (RyR1), whose mutations cause malignant hyperthermia.",
        "Incorrect. The voltage-gated sodium channel (Nav1.4) at the neuromuscular junction is affected in myotonia and periodic paralysis.",
        "Incorrect. Myosin light chain kinase phosphorylates myosin in smooth muscle contraction, not related to dystrophin function.",
        "Incorrect. The Z-disc protein alpha-actinin helps anchor thin filaments but is distinct from dystrophin."
      ],
      highYieldPoint: "DMD: X-linked, frameshift deletion → absent dystrophin → sarcolemma fragility; Gowers sign, calf pseudohypertrophy, CK markedly elevated; Becker MD: in-frame deletion → partially functional dystrophin, milder course."
    },
    {
      vignette: "A 25-year-old woman presents with fluctuating weakness that worsens with activity and improves with rest. She notices drooping of her eyelids by the end of the day and difficulty chewing during meals. Examination reveals bilateral ptosis and proximal muscle weakness that worsens with repetitive testing. Edrophonium (Tensilon) test is positive. Anti-acetylcholine receptor antibodies are detected in serum.",
      question: "Which of the following best describes the mechanism of muscle weakness in this patient?",
      options: ["Destruction of motor neurons in the anterior horn","Autoantibody-mediated destruction of postsynaptic acetylcholine receptors","Impaired release of acetylcholine from presynaptic nerve terminals","Defective acetylcholinesterase at the neuromuscular junction","Antibodies against voltage-gated calcium channels"],
      correctIndex: 1,
      explanation: "This patient has myasthenia gravis (MG), an autoimmune disorder caused by IgG antibodies against nicotinic acetylcholine receptors (AChR) at the neuromuscular junction (NMJ). These antibodies reduce the number of functional AChRs through complement-mediated destruction, accelerated receptor internalization, and functional blocking. The result is decreased postsynaptic response to ACh, causing fatigable muscle weakness. Edrophonium (an acetylcholinesterase inhibitor) transiently improves weakness by increasing ACh availability at the NMJ.",
      optionExplanations: [
        "Incorrect. Motor neuron destruction in the anterior horn describes amyotrophic lateral sclerosis (ALS) or poliomyelitis.",
        "Correct. MG: anti-AChR antibodies → complement-mediated destruction and reduced AChR at the NMJ → fatigable weakness.",
        "Incorrect. Impaired presynaptic ACh release describes Lambert-Eaton myasthenic syndrome (anti-VGCC antibodies).",
        "Incorrect. Acetylcholinesterase inhibitors (e.g., edrophonium, pyridostigmine) are treatments for MG, not the pathologic mechanism.",
        "Incorrect. Anti-VGCC antibodies cause Lambert-Eaton syndrome, associated with small cell lung carcinoma."
      ],
      highYieldPoint: "Myasthenia gravis: anti-AChR antibodies → decreased postsynaptic AChRs → fatigable weakness (worse with use); associated with thymoma; treat: AChE inhibitors, immunosuppression, thymectomy."
    },
    {
      vignette: "A 58-year-old man with a known history of small cell lung carcinoma presents with progressive proximal muscle weakness in his legs. Unlike typical fatigue, his weakness improves temporarily after brief exercise. Nerve conduction studies show low-amplitude compound muscle action potentials that increase >100% with rapid repetitive stimulation. Anti-P/Q-type voltage-gated calcium channel antibodies are positive.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Myasthenia gravis","Polymyositis","Lambert-Eaton myasthenic syndrome","Amyotrophic lateral sclerosis","Botulism"],
      correctIndex: 2,
      explanation: "This patient has Lambert-Eaton myasthenic syndrome (LEMS), a paraneoplastic disorder associated with small cell lung carcinoma. LEMS is caused by antibodies against P/Q-type voltage-gated calcium channels (VGCC) on presynaptic motor nerve terminals, impairing calcium influx needed for ACh vesicle release. Unlike MG, LEMS shows improvement with repeated use (post-exercise facilitation) because repeated nerve stimulation progressively increases intracellular calcium. EMG shows incremental response (>100% increase) with rapid repetitive stimulation.",
      optionExplanations: [
        "Incorrect. MG involves post-synaptic AChR antibodies, shows decremental response on repetitive stimulation, and weakness worsens with use.",
        "Incorrect. Polymyositis causes proximal weakness with elevated CK from autoimmune muscle fiber destruction, not a NMJ disorder.",
        "Correct. LEMS: anti-VGCC antibodies → impaired presynaptic ACh release; improves with use; incremental EMG response; associated with SCLC.",
        "Incorrect. ALS involves both upper and lower motor neuron degeneration with mixed UMN/LMN signs, not a NMJ disorder.",
        "Incorrect. Botulism blocks presynaptic ACh release via botulinum toxin but presents with descending paralysis after ingestion, not paraneoplastic."
      ],
      highYieldPoint: "LEMS: anti-P/Q VGCC → ↓presynaptic ACh release; improves with use (post-exercise facilitation); incremental response on EMG; associated with SCLC; vs. MG: anti-AChR, worsens with use, decremental."
    },
    {
      vignette: "A 45-year-old woman presents with a 4-month history of progressive proximal muscle weakness. She has difficulty getting up from a chair and raising her arms. Physical examination reveals a violaceous (heliotrope) rash on her upper eyelids and erythematous, scaly papules over the knuckles (Gottron papules). CK is elevated at 5,500 U/L. Anti-Mi-2 antibodies are positive.",
      question: "Which of the following is the most appropriate next step to screen for a commonly associated condition?",
      options: ["Serum TSH level","Nerve conduction studies","Anti-Jo-1 antibody testing","Age-appropriate cancer screening","24-hour urine cortisol"],
      correctIndex: 3,
      explanation: "This patient has dermatomyositis (DM), an idiopathic inflammatory myopathy with characteristic skin findings. DM in adults is associated with an increased risk of underlying malignancy (~15-25% of adult DM patients have occult cancer), particularly ovarian, lung, GI, breast, and lymphoma. Age-appropriate cancer screening is essential and should include CT chest/abdomen/pelvis and age/sex-appropriate screening tests. The cancer may precede, coincide with, or follow the DM diagnosis.",
      optionExplanations: [
        "Incorrect. TSH is appropriate for hypothyroid myopathy but this patient's rash and antibodies confirm dermatomyositis.",
        "Incorrect. Nerve conduction studies evaluate neuropathies and NMJ disorders; EMG (not NCS) would show myopathic changes in DM.",
        "Incorrect. Anti-Jo-1 is an antisynthetase antibody associated with interstitial lung disease in DM/PM but does not address the need for cancer screening.",
        "Correct. Adult dermatomyositis requires cancer screening due to the strong association with underlying malignancy (15-25% of cases).",
        "Incorrect. 24-hour urine cortisol screens for Cushing syndrome, which can cause proximal myopathy but without the skin findings of DM."
      ],
      highYieldPoint: "Dermatomyositis: heliotrope rash + Gottron papules + proximal weakness + ↑CK; adult DM → screen for malignancy (ovarian, lung, GI, breast); anti-Mi-2 = classic DM; anti-Jo-1 = antisynthetase syndrome."
    },
    {
      vignette: "A 30-year-old man presents with episodes of generalized muscle stiffness that worsens in cold weather. He has difficulty releasing his grip after a handshake. Percussion of the thenar eminence produces sustained muscle contraction. EMG reveals characteristic 'dive-bomber' sounds with waxing and waning discharge frequency and amplitude. Genetic testing shows a CTG trinucleotide repeat expansion in the DMPK gene.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Malignant hyperthermia","Paramyotonia congenita","Myotonia congenita (Thomsen disease)","Hyperkalemic periodic paralysis","Myotonic dystrophy type 1 (Steinert disease)"],
      correctIndex: 4,
      explanation: "This patient has myotonic dystrophy type 1 (DM1, Steinert disease), the most common adult muscular dystrophy. It is caused by CTG trinucleotide repeat expansion in the DMPK gene on chromosome 19, inherited in autosomal dominant fashion with anticipation (increasing severity in successive generations). Key features include myotonia (delayed muscle relaxation), progressive distal muscle weakness and wasting, cataracts, cardiac conduction defects, frontal balding, testicular atrophy, and insulin resistance. The 'dive-bomber' EMG pattern is characteristic of myotonia.",
      optionExplanations: [
        "Incorrect. Malignant hyperthermia is a pharmacogenomic emergency triggered by anesthetics in patients with RYR1 mutations.",
        "Incorrect. Paramyotonia congenita is caused by SCN4A sodium channel mutations; myotonia paradoxically worsens with exercise, not a trinucleotide repeat disorder.",
        "Incorrect. Myotonia congenita (Thomsen disease) involves chloride channel mutations (CLCN1); myotonia without progressive weakness or systemic features.",
        "Incorrect. Hyperkalemic periodic paralysis involves sodium channel mutations causing episodic weakness with elevated potassium, not progressive myotonia with systemic features.",
        "Correct. DM1 (Steinert disease): CTG repeat in DMPK; myotonia + distal weakness + cataracts + cardiac defects + endocrine dysfunction; AD with anticipation."
      ],
      highYieldPoint: "Myotonic dystrophy type 1: CTG repeat (DMPK, chr 19); AD with anticipation; myotonia + distal weakness + cataracts + cardiac conduction defects + frontal balding + testicular atrophy + insulin resistance."
    },
    {
      vignette: "A 48-year-old woman presents with progressive proximal muscle weakness over 6 months. She has difficulty climbing stairs and combing her hair. There are no skin changes. CK is elevated at 8,200 U/L. Anti-Jo-1 antibodies are positive. EMG shows myopathic changes. Muscle biopsy reveals endomysial inflammation with CD8+ T lymphocytes invading non-necrotic muscle fibers.",
      question: "Which of the following extra-muscular manifestation is this patient most at risk for given her antibody profile?",
      options: ["Ovarian cancer","Interstitial lung disease","Coronary artery disease","Peripheral neuropathy","Hemolytic anemia"],
      correctIndex: 1,
      explanation: "This patient has polymyositis with anti-Jo-1 antibodies (anti-histidyl-tRNA synthetase). Anti-Jo-1 is the most common antisynthetase antibody and defines antisynthetase syndrome, which includes inflammatory myopathy, interstitial lung disease (ILD), mechanic's hands (cracked, fissured skin on fingers), arthritis, fever, and Raynaud phenomenon. ILD is the most clinically significant extra-muscular manifestation and a major cause of morbidity and mortality in these patients.",
      optionExplanations: [
        "Incorrect. Malignancy risk is higher in dermatomyositis than in polymyositis, and antisynthetase antibodies are not specifically associated with cancer.",
        "Correct. Anti-Jo-1 defines antisynthetase syndrome: myositis + ILD + mechanic's hands + arthritis + Raynaud + fever.",
        "Incorrect. Coronary artery disease is not a recognized association with polymyositis or antisynthetase syndrome.",
        "Incorrect. Peripheral neuropathy is not a feature of polymyositis; it is the domain of Guillain-Barré, CIDP, and other neuropathies.",
        "Incorrect. Hemolytic anemia is associated with SLE and other autoimmune conditions but not specifically with anti-Jo-1 polymyositis."
      ],
      highYieldPoint: "Antisynthetase syndrome (anti-Jo-1): polymyositis + interstitial lung disease + mechanic's hands + arthritis + Raynaud; ILD is the major cause of morbidity/mortality."
    },
    {
      vignette: "A 22-year-old man is undergoing general anesthesia with succinylcholine and halothane for an appendectomy when he develops sudden-onset tachycardia, masseter muscle rigidity, hyperthermia (temperature rising to 41°C), hypercarbia, and metabolic acidosis. His end-tidal CO2 is markedly elevated.",
      question: "Which of the following is the most likely underlying mechanism of this patient's reaction?",
      options: ["Allergic reaction to halothane","Acetylcholinesterase deficiency prolonging succinylcholine effect","Uncontrolled calcium release from the sarcoplasmic reticulum via defective ryanodine receptors","Inhibition of mitochondrial oxidative phosphorylation","Autoimmune attack on the neuromuscular junction"],
      correctIndex: 2,
      explanation: "This patient has malignant hyperthermia (MH), a pharmacogenomic emergency triggered by volatile anesthetics (halothane, isoflurane, sevoflurane) and/or succinylcholine in genetically susceptible individuals. The most common cause is an autosomal dominant mutation in the RYR1 gene encoding the ryanodine receptor (calcium release channel) of the sarcoplasmic reticulum. The defective receptor releases massive amounts of calcium into the sarcoplasm, causing sustained muscle contraction, hypermetabolism, and heat generation.",
      optionExplanations: [
        "Incorrect. Halothane hepatitis is an immune-mediated drug reaction affecting the liver, not the rapid-onset hyperthermia and rigidity seen here.",
        "Incorrect. Pseudocholinesterase (butyrylcholinesterase) deficiency prolongs succinylcholine paralysis but does not cause hyperthermia and rigidity.",
        "Correct. Malignant hyperthermia: defective RYR1 → uncontrolled SR calcium release → sustained contraction, hypermetabolism, hyperthermia; treat with dantrolene.",
        "Incorrect. Mitochondrial oxidative phosphorylation inhibition (e.g., cyanide poisoning) causes lactic acidosis but not the specific trigger-response pattern of MH.",
        "Incorrect. Autoimmune NMJ attack describes myasthenia gravis, not malignant hyperthermia."
      ],
      highYieldPoint: "Malignant hyperthermia: RYR1 mutation (AD) → uncontrolled Ca²⁺ release from SR → rigidity, hyperthermia, rhabdomyolysis; triggered by volatile anesthetics + succinylcholine; treat with dantrolene (blocks RyR1)."
    },
    {
      vignette: "A 35-year-old man presents with episodes of severe muscle weakness in all four limbs upon waking in the morning. He ate a large carbohydrate-rich meal the evening before. During the episode, he is unable to move his legs. Serum potassium during the attack is 2.8 mEq/L. Between attacks, his neurologic examination is completely normal. Family history reveals his father and paternal grandfather had similar episodes.",
      question: "Which of the following is the most likely underlying defect?",
      options: ["Ryanodine receptor mutation","Sodium channel (SCN4A) mutation","Chloride channel (CLCN1) mutation","Calcium channel (CACNA1S) mutation","Potassium channel (KCNJ2) mutation"],
      correctIndex: 3,
      explanation: "This patient has hypokalemic periodic paralysis, the most common form of periodic paralysis. It is primarily caused by autosomal dominant mutations in CACNA1S (encoding the L-type calcium channel α1S subunit, ~60% of cases) or SCN4A (sodium channel, ~20%). Attacks of flaccid paralysis occur when potassium shifts intracellularly (triggered by carbohydrate-rich meals, insulin, exercise followed by rest). Serum K+ is low during attacks. Treatment of acute attacks: oral or IV potassium; prevention: acetazolamide, K+-sparing diuretics.",
      optionExplanations: [
        "Incorrect. RYR1 mutations cause malignant hyperthermia and central core disease, not periodic paralysis.",
        "Incorrect. SCN4A mutations more commonly cause hyperkalemic periodic paralysis (gain-of-function) or paramyotonia congenita.",
        "Incorrect. CLCN1 chloride channel mutations cause myotonia congenita (Thomsen/Becker), characterized by muscle stiffness, not episodic weakness.",
        "Correct. CACNA1S calcium channel mutation is the most common cause of hypokalemic periodic paralysis; carbohydrate-triggered attacks with low K+.",
        "Incorrect. KCNJ2 potassium channel mutations cause Andersen-Tawil syndrome (periodic paralysis + cardiac arrhythmias + dysmorphic features)."
      ],
      highYieldPoint: "Hypokalemic periodic paralysis: CACNA1S mutation (#1); triggered by carbs/insulin/rest after exercise; low K+ during attacks; treat: K+ replacement; prevent: acetazolamide."
    },
    {
      vignette: "A 50-year-old man with a history of statin use for hyperlipidemia presents with diffuse muscle pain and weakness that developed 3 weeks after starting atorvastatin. CK is elevated at 12,000 U/L. Urinalysis shows a positive dipstick for blood but no red blood cells on microscopy. Urine appears dark brown.",
      question: "Which of the following explains the discrepancy between the positive urine dipstick and the absence of red blood cells on microscopy?",
      options: ["False positive dipstick due to alkaline urine","Myoglobin in the urine cross-reacts with the hemoglobin reagent on the dipstick","White blood cells causing the positive dipstick","Bilirubin in the urine mimicking blood","Hemolytic anemia causing hemoglobinuria"],
      correctIndex: 3,
      explanation: "This patient has statin-induced rhabdomyolysis causing myoglobinuria. Myoglobin released from damaged muscle fibers is filtered by the kidneys and appears in the urine. The urine dipstick detects the heme moiety of both hemoglobin and myoglobin (the reagent uses peroxidase activity of heme), producing a positive result for 'blood.' However, microscopy shows no RBCs because the positive reaction is from myoglobin, not hemoglobin from lysed red blood cells. This dipstick-positive, microscopy-negative pattern is classic for myoglobinuria (or hemoglobinuria).",
      optionExplanations: [
        "Incorrect. Alkaline urine does not cause false positive blood on dipstick; it can affect protein readings.",
        "Incorrect. Hemolytic anemia with hemoglobinuria could also cause positive dipstick without RBCs on microscopy, but the clinical context (statin use, elevated CK, muscle pain) points to myoglobinuria.",
        "Incorrect. WBCs do not cause a positive blood reaction on urine dipstick.",
        "Correct. Myoglobin contains a heme group that reacts with the dipstick reagent for hemoglobin/blood, giving a positive result without RBCs on microscopy.",
        "Incorrect. Bilirubin causes a separate positive on the bilirubin pad, not the blood pad of the dipstick."
      ],
      highYieldPoint: "Rhabdomyolysis: ↑CK, myoglobinuria (dipstick + for blood, no RBCs on microscopy); dark brown urine; risk of acute tubular necrosis; statins, crush injury, and seizures are common causes."
    },
    {
      vignette: "A 6-month-old girl is brought in for evaluation of progressive muscle weakness. She has poor head control, a frog-leg posture, absent deep tendon reflexes, and tongue fasciculations. She is alert and socially interactive. EMG reveals fibrillation potentials and positive sharp waves. Genetic testing reveals homozygous deletion of the SMN1 gene.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Duchenne muscular dystrophy","Werdnig-Hoffmann disease (SMA type 1)","Myotonic dystrophy type 1","Pompe disease","Congenital myasthenia gravis"],
      correctIndex: 1,
      explanation: "This infant has spinal muscular atrophy type 1 (Werdnig-Hoffmann disease), the most severe form of SMA. It is caused by homozygous deletion or mutation of the SMN1 gene (survival motor neuron 1) on chromosome 5q, resulting in degeneration of anterior horn motor neurons. Key features include severe hypotonia ('floppy baby'), absent reflexes, tongue fasciculations, frog-leg posture, and preserved cognitive function. Without treatment, most die by age 2 from respiratory failure.",
      optionExplanations: [
        "Incorrect. DMD is X-linked and presents later (ages 2-5) with proximal weakness, calf pseudohypertrophy, and Gowers sign — not in a 6-month-old with LMN signs.",
        "Correct. SMA type 1 (Werdnig-Hoffmann): SMN1 deletion → anterior horn cell degeneration → severe hypotonia, absent reflexes, tongue fasciculations; AR inheritance.",
        "Incorrect. Congenital myotonic dystrophy can present in infancy with hypotonia but is caused by CTG repeat in DMPK and shows myotonia, not fasciculations.",
        "Incorrect. Pompe disease (glycogen storage disease type II) causes hypotonia with cardiomegaly due to acid maltase deficiency, not tongue fasciculations.",
        "Incorrect. Congenital myasthenia gravis causes fatigable weakness at the NMJ but does not show fasciculations or LMN degeneration."
      ],
      highYieldPoint: "SMA type 1 (Werdnig-Hoffmann): SMN1 gene deletion (chr 5q); AR; anterior horn cell degeneration; floppy infant, tongue fasciculations, absent DTRs, preserved intellect; new treatment: nusinersen/onasemnogene."
    },
    {
      vignette: "A 12-year-old boy presents with progressive proximal muscle weakness over 2 years. He can still walk independently but has difficulty running and climbing stairs. He has mild calf hypertrophy. CK is elevated at 6,000 U/L. Genetic testing reveals an in-frame deletion in the dystrophin gene. Immunohistochemistry on muscle biopsy shows reduced but detectable dystrophin staining.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Becker muscular dystrophy","Duchenne muscular dystrophy","Limb-girdle muscular dystrophy","Emery-Dreifuss muscular dystrophy","Facioscapulohumeral dystrophy"],
      correctIndex: 0,
      explanation: "This patient has Becker muscular dystrophy (BMD), caused by in-frame deletions in the dystrophin gene that produce a partially functional, truncated dystrophin protein. Unlike Duchenne MD (frameshift deletion → absent dystrophin), Becker patients retain some dystrophin expression, resulting in a milder phenotype with later onset (typically after age 5), slower progression, and longer ambulation. Immunohistochemistry shows reduced but present dystrophin staining, distinguishing BMD from DMD (absent staining).",
      optionExplanations: [
        "Correct. BMD: in-frame deletion → truncated but partially functional dystrophin → milder course, later onset, reduced (not absent) dystrophin on biopsy.",
        "Incorrect. DMD results from frameshift deletions causing absent dystrophin; onset is earlier (2-5 years) with more rapid progression.",
        "Incorrect. Limb-girdle muscular dystrophies involve various genes (sarcoglycans, calpain, dysferlin), not dystrophin, and have different inheritance patterns.",
        "Incorrect. Emery-Dreifuss MD causes early contractures, humeral/peroneal weakness, and cardiac conduction defects; caused by emerin or lamin A/C mutations.",
        "Incorrect. Facioscapulohumeral dystrophy affects facial, shoulder, and upper arm muscles with D4Z4 repeat contraction on chromosome 4."
      ],
      highYieldPoint: "DMD vs. BMD: both dystrophinopathies; DMD = frameshift (absent dystrophin), onset 2-5y, wheelchair by 12, death by 30; BMD = in-frame (reduced dystrophin), later onset, milder course."
    },
    {
      vignette: "A 9-month-old infant presents with progressive hypotonia, macroglossia, and massive cardiomegaly. Echocardiogram shows severe hypertrophic cardiomyopathy. CK is mildly elevated. Muscle biopsy reveals massive glycogen accumulation within lysosomes. Enzyme assay confirms deficiency of acid alpha-glucosidase (acid maltase).",
      question: "Which of the following is the most likely diagnosis?",
      options: ["McArdle disease (GSD type V)","Pompe disease (GSD type II)","Von Gierke disease (GSD type I)","Andersen disease (GSD type IV)","Cori disease (GSD type III)"],
      correctIndex: 4,
      explanation: "This infant has Pompe disease (glycogen storage disease type II), caused by deficiency of acid alpha-glucosidase (acid maltase), a lysosomal enzyme that degrades glycogen. In the infantile form, massive lysosomal glycogen accumulation occurs in cardiac and skeletal muscle, causing severe cardiomegaly, hypotonia, macroglossia, and death by age 2 if untreated. Pompe is the only glycogen storage disease that is also a lysosomal storage disease. Enzyme replacement therapy (alglucosidase alfa) has improved outcomes.",
      optionExplanations: [
        "Incorrect. McArdle disease (myophosphorylase deficiency) presents in young adults with exercise intolerance, myoglobinuria, and no cardiomyopathy.",
        "Incorrect. Von Gierke disease (glucose-6-phosphatase deficiency) causes hepatomegaly and fasting hypoglycemia, not cardiomyopathy.",
        "Incorrect. Cori disease (debranching enzyme deficiency) causes hepatomegaly and muscle weakness but not the severe infantile cardiomyopathy of Pompe.",
        "Incorrect. Andersen disease (branching enzyme deficiency) causes hepatosplenomegaly and cirrhosis with abnormal glycogen structure.",
        "Correct. Pompe disease: acid maltase (acid alpha-glucosidase) deficiency → lysosomal glycogen accumulation → cardiomegaly + hypotonia + macroglossia; only GSD that is a lysosomal storage disease."
      ],
      highYieldPoint: "Pompe disease (GSD II): acid maltase deficiency → lysosomal glycogen storage; infantile form: cardiomegaly + hypotonia + macroglossia; only GSD that is also a lysosomal storage disease; treat with ERT."
    },
    {
      vignette: "A 20-year-old man presents to the emergency department after intense exercise with severe muscle pain, weakness, and dark-colored urine. He reports that he typically experiences exercise intolerance with muscle cramps during vigorous activity, which resolve with rest. Serum CK is 45,000 U/L. A forearm exercise test shows failure of venous lactate to rise despite a normal rise in ammonia.",
      question: "Which of the following enzyme deficiencies is the most likely cause of this patient's condition?",
      options: ["Myophosphorylase (muscle glycogen phosphorylase)","Acid maltase (alpha-glucosidase)","Carnitine palmitoyltransferase II","Phosphofructokinase","Muscle phosphoglycerate kinase"],
      correctIndex: 0,
      explanation: "This patient has McArdle disease (glycogen storage disease type V), caused by deficiency of myophosphorylase, the muscle isoform of glycogen phosphorylase. Without this enzyme, skeletal muscle cannot break down glycogen, leading to exercise intolerance, muscle cramps, and rhabdomyolysis with strenuous activity. The forearm exercise test is diagnostic: failure of venous lactate to rise (no glycogenolysis → no substrate for anaerobic glycolysis) with a normal ammonia rise (purine metabolism is intact).",
      optionExplanations: [
        "Correct. McArdle disease (GSD V): myophosphorylase deficiency → cannot mobilize muscle glycogen → exercise intolerance, cramps, rhabdomyolysis; flat lactate on forearm test.",
        "Incorrect. Acid maltase deficiency (Pompe disease) causes lysosomal glycogen accumulation with cardiomyopathy and hypotonia, not exercise-induced cramps.",
        "Incorrect. CPT II deficiency causes exercise-induced rhabdomyolysis but is triggered by prolonged exercise (not brief intense exercise) and involves fatty acid oxidation, not glycogenolysis.",
        "Incorrect. Phosphofructokinase deficiency (Tarui disease, GSD VII) has a similar presentation to McArdle but also causes hemolytic anemia.",
        "Incorrect. Phosphoglycerate kinase deficiency is an X-linked glycolytic enzyme defect that can cause exercise intolerance but is much rarer."
      ],
      highYieldPoint: "McArdle disease (GSD V): myophosphorylase deficiency → cannot break down muscle glycogen → exercise intolerance, cramps, rhabdomyolysis; forearm test: flat lactate, normal ammonia; 'second wind' phenomenon."
    },
    {
      vignette: "A 55-year-old man presents with progressive weakness and wasting of intrinsic hand muscles with fasciculations. He also has difficulty speaking and swallowing. Physical examination reveals both upper motor neuron signs (hyperreflexia, spasticity, positive Babinski) and lower motor neuron signs (fasciculations, atrophy, weakness) in multiple body regions. Sensation is intact. EMG confirms widespread denervation.",
      question: "Which of the following pathologic findings is most characteristic of this patient's condition?",
      options: ["Demyelination of peripheral nerves","Perivascular CD4+ T cell infiltrates in muscle","Degeneration of dorsal root ganglia","Intranuclear polyglutamine inclusions","Degeneration of both upper and lower motor neurons"],
      correctIndex: 4,
      explanation: "This patient has amyotrophic lateral sclerosis (ALS), a progressive neurodegenerative disease involving both upper motor neurons (corticospinal tract) and lower motor neurons (anterior horn cells and bulbar motor nuclei). The combination of UMN signs (spasticity, hyperreflexia, Babinski) and LMN signs (fasciculations, atrophy, weakness) with preserved sensation is classic. Pathologically, there is loss of motor neurons with TDP-43 protein aggregates in surviving neurons. Most cases are sporadic; ~10% are familial (SOD1 mutations in ~20% of familial cases).",
      optionExplanations: [
        "Incorrect. Peripheral nerve demyelination characterizes Guillain-Barré syndrome and chronic inflammatory demyelinating polyneuropathy.",
        "Incorrect. Perivascular CD4+ T cell infiltrates are found in polymyositis/dermatomyositis, inflammatory myopathies.",
        "Incorrect. Dorsal root ganglion degeneration would cause sensory symptoms (sensory neuronopathy), which are absent in ALS.",
        "Incorrect. Intranuclear polyglutamine inclusions are characteristic of Huntington disease (huntingtin protein) and spinocerebellar ataxias.",
        "Correct. ALS: degeneration of both upper motor neurons (lateral corticospinal tracts) and lower motor neurons (anterior horn cells) with preserved sensation."
      ],
      highYieldPoint: "ALS: combined UMN + LMN degeneration with preserved sensation; TDP-43 aggregates; most sporadic; familial: SOD1 mutations; riluzole and edaravone slow progression; fatal in 3-5 years."
    },
    {
      vignette: "A 40-year-old woman with a history of Graves disease and type 1 diabetes presents with fatigue and mild proximal muscle weakness. She has no skin rash. CK is normal. TSH is suppressed at 0.1 mIU/L with elevated free T4. EMG shows myopathic changes. Muscle biopsy shows type II fiber atrophy without inflammation.",
      question: "Which of the following is the most likely cause of this patient's myopathy?",
      options: ["Polymyositis","Steroid myopathy","Thyrotoxic myopathy","Statin-induced myopathy","Cushing syndrome"],
      correctIndex: 2,
      explanation: "This patient has thyrotoxic myopathy secondary to uncontrolled hyperthyroidism (Graves disease). Excess thyroid hormone causes increased protein catabolism and preferential type II (fast-twitch) muscle fiber atrophy, leading to proximal weakness. Unlike inflammatory myopathies, CK is typically normal (because the damage is atrophic rather than necrotic), and biopsy shows fiber atrophy without inflammation. Treatment is directed at normalizing thyroid function, which reverses the myopathy.",
      optionExplanations: [
        "Incorrect. Polymyositis causes elevated CK and inflammatory infiltrates on biopsy, neither of which is present here.",
        "Incorrect. Steroid myopathy also causes type II fiber atrophy with normal CK, but there is no history of corticosteroid use.",
        "Correct. Thyrotoxic myopathy: hyperthyroidism → increased protein catabolism → type II fiber atrophy, proximal weakness, normal CK; reversible with treatment.",
        "Incorrect. Statin myopathy causes elevated CK and muscle necrosis on biopsy; this patient's CK is normal.",
        "Incorrect. Cushing syndrome myopathy is caused by cortisol excess with similar features, but this patient's clinical picture points to hyperthyroidism."
      ],
      highYieldPoint: "Endocrine myopathies: thyrotoxic (↑T4 → type II atrophy, normal CK), hypothyroid (↑CK, proximal weakness), Cushing/steroid (type II atrophy, normal CK); all cause proximal weakness."
    }
  ]
};

const MSK_SUMMARIES = {
  "Bone & joint disorders": {
    sections: [
      {
        heading: "Metabolic Bone Diseases",
        bullets: [
          "Osteoporosis: decreased bone density with normal mineralization; estrogen deficiency → increased RANKL/decreased OPG → osteoclast activation; T-score ≤ -2.5",
          "Osteomalacia/Rickets: defective mineralization of osteoid; vitamin D deficiency → ↓Ca²⁺/PO₄³⁻; rickets shows widened, cupped, frayed metaphyses",
          "Paget disease: disordered bone remodeling → mosaic/woven bone; markedly ↑ALP, normal Ca/PO₄; risk of osteosarcoma (1%); associated with paramyxovirus",
          "Renal osteodystrophy: CKD → ↓1,25(OH)₂D₃ → secondary hyperparathyroidism → osteitis fibrosa cystica",
          "Osteopetrosis: defective osteoclasts → failure of bone resorption → dense brittle bones, obliterated marrow, pancytopenia"
        ]
      },
      {
        heading: "Primary Bone Tumors",
        bullets: [
          "Osteochondroma: most common benign bone tumor; cartilage-capped metaphyseal exostosis; risk of chondrosarcoma if multiple",
          "Osteoid osteoma: <2 cm nidus with reactive sclerosis; nocturnal pain relieved by NSAIDs (PGE2 production)",
          "Giant cell tumor: epiphysis of long bones; 20-40 yo; soap-bubble pattern; multinucleated giant cells + mononuclear stromal cells",
          "Osteosarcoma: most common primary malignant bone tumor in adolescents; metaphysis; sunburst pattern + Codman triangle; bimodal (teens, elderly with Paget)",
          "Ewing sarcoma: diaphysis; 5-15 yo; onion-skin periosteal reaction; small round blue cells; t(11;22) → EWS-FLI1; CD99+",
          "Chondrosarcoma: malignant cartilage tumor in adults >40; pelvis, proximal femur"
        ]
      },
      {
        heading: "Joint Disorders",
        bullets: [
          "Osteoarthritis: wear-and-tear; DIP (Heberden) and PIP (Bouchard) nodes; morning stiffness <30 min; osteophytes, subchondral sclerosis",
          "Gout: monosodium urate crystals; negatively birefringent, needle-shaped; 1st MTP (podagra); associated with HGPRT deficiency (Lesch-Nyhan if complete)",
          "Pseudogout (CPPD): calcium pyrophosphate crystals; positively birefringent, rhomboid; knee; chondrocalcinosis; associated with hyperPTH, hemochromatosis",
          "Septic arthritis: S. aureus (#1 overall), N. gonorrhoeae (sexually active young adults), Kingella kingae (infants/toddlers); >50,000 WBC in aspirate",
          "Charcot joint: neuropathic arthropathy; severe destruction with minimal pain; diabetes (midfoot) or syphilis (knee)"
        ]
      }
    ],
    table: {
      headers: ["Bone Tumor","Age Group","Location","X-ray Finding","Histology"],
      rows: [
        ["Osteochondroma","Children/teens","Metaphysis","Pedunculated exostosis","Cartilage cap + bone continuity"],
        ["Osteoid osteoma","Young adults","Cortex, long bones","Nidus + sclerosis","Osteoid + osteoblasts"],
        ["Giant cell tumor","20-40 yo","Epiphysis","Soap-bubble lytic","Giant cells + stromal cells"],
        ["Osteosarcoma","Teens (bimodal)","Metaphysis","Sunburst + Codman triangle","Malignant osteoid"],
        ["Ewing sarcoma","5-15 yo","Diaphysis","Onion-skin","Small round blue cells, CD99+"],
        ["Chondrosarcoma",">40 yo","Pelvis, proximal femur","Expansile lytic + calcification","Malignant chondrocytes"]
      ]
    },
    mnemonic: "Bone tumors by location: Epiphysis = Giant cell tumor; Metaphysis = Osteosarcoma, Osteochondroma; Diaphysis = Ewing sarcoma. Crystal arthritis: Negatively birefringent Needles = gout (Negative = Na urate); Positively birefringent = Pseudogout (CPPD = Blue when Parallel)."
  },
  "Connective tissue disease": {
    sections: [
      {
        heading: "Collagen Disorders",
        bullets: [
          "Osteogenesis imperfecta: type I collagen defect; brittle bones, blue sclerae, hearing loss, dentinogenesis imperfecta; most commonly AD",
          "Ehlers-Danlos syndrome: multiple types; Classical (type V collagen): joint hypermobility, skin hyperextensibility; Vascular (type III collagen): arterial/organ rupture (most dangerous)",
          "Alport syndrome: type IV collagen (COL4A5, X-linked); basket-weave GBM on EM, nephritis, sensorineural hearing loss, ocular defects",
          "Collagen synthesis: RER (translation) → hydroxylation (vit C, prolyl/lysyl hydroxylase) → glycosylation → triple helix → exocytosis → propeptide cleavage → cross-linking (lysyl oxidase)"
        ]
      },
      {
        heading: "Fibrillin and Elastic Tissue Disorders",
        bullets: [
          "Marfan syndrome: FBN1 (fibrillin-1) on chr 15; AD; aortic root dilation/dissection, upward lens subluxation, arachnodactyly, pectus excavatum; excessive TGF-β signaling",
          "Homocystinuria (CBS deficiency): ↑homocysteine/methionine; downward lens subluxation, marfanoid habitus, intellectual disability, thromboembolism; B6 responsive",
          "Lens subluxation DDx: Marfan (up and out) vs. Homocystinuria (down and in) vs. Kyphoscoliotic EDS (down, lysyl hydroxylase deficiency)"
        ]
      },
      {
        heading: "Systemic Autoimmune Connective Tissue Diseases",
        bullets: [
          "SLE: anti-dsDNA, anti-Smith (most specific); immune complex deposition → lupus nephritis (class IV most common/severe); malar rash, photosensitivity, pancytopenia",
          "Scleroderma - Diffuse: anti-Scl-70 (anti-topoisomerase I) → widespread fibrosis, pulmonary fibrosis (leading cause of death), renal crisis",
          "Scleroderma - Limited (CREST): anti-centromere → Calcinosis, Raynaud, Esophageal dysmotility, Sclerodactyly, Telangiectasia; pulmonary HTN is major risk",
          "Morphea: localized scleroderma, skin-only, no systemic involvement, ANA usually negative"
        ]
      },
      {
        heading: "Neurocutaneous Syndromes (Phakomatoses)",
        bullets: [
          "NF1: neurofibromin (Ras-GAP) on chr 17; café-au-lait spots, neurofibromas, Lisch nodules, axillary freckling, optic gliomas; AD",
          "NF2: merlin (schwannomin) on chr 22; bilateral acoustic neuromas; AD",
          "Sturge-Weber: somatic GNAQ mutation; port-wine stain (V1), leptomeningeal angiomatosis, seizures, glaucoma; NOT inherited",
          "Tuberous sclerosis: TSC1 (hamartin)/TSC2 (tuberin); cortical tubers, subependymal giant cell astrocytomas, cardiac rhabdomyomas, facial angiofibromas; AD"
        ]
      }
    ],
    table: {
      headers: ["Disorder","Defective Protein/Gene","Inheritance","Key Features","Most Dangerous Complication"],
      rows: [
        ["Marfan syndrome","Fibrillin-1 (FBN1)","AD","Arachnodactyly, upward lens subluxation","Aortic dissection"],
        ["Osteogenesis imperfecta","Type I collagen (COL1A1/2)","AD (most)","Blue sclerae, brittle bones","Fractures, respiratory failure"],
        ["EDS Classical","Type V collagen (COL5A1/2)","AD","Skin/joint hypermobility","Joint dislocations, poor healing"],
        ["EDS Vascular","Type III collagen (COL3A1)","AD","Thin skin, easy bruising","Arterial/organ rupture"],
        ["Alport syndrome","Type IV collagen (COL4A5)","X-linked","Nephritis, hearing loss","ESRD"],
        ["Homocystinuria","CBS enzyme","AR","Downward lens, marfanoid","Thromboembolism"]
      ]
    },
    mnemonic: "Marfan vs. Homocystinuria lens subluxation: Marfan = Up (like a Marionette on strings going Up); Homocystinuria = Down. EDS types: 'Very Vascular type III is Very dangerous' (type III collagen, arterial rupture). Scleroderma antibodies: Scl-70 = diffuse (7+0 = widespread); Centromere = CREST (limited, Central)."
  },
  "Skin pathology": {
    sections: [
      {
        heading: "Inflammatory Skin Diseases",
        bullets: [
          "Psoriasis: Th17/IL-17 driven; Auspitz sign (pinpoint bleeding), Munro microabscesses (neutrophils in stratum corneum), Koebner phenomenon; HLA-Cw6; nail pitting",
          "Eczematous dermatitis: spongiotic dermatitis (intercellular edema); includes atopic, contact (type IV HSR), nummular, dyshidrotic, seborrheic",
          "Pityriasis rosea: herald patch → Christmas tree distribution; self-limited (6-8 weeks); associated with HHV-6/7; rule out secondary syphilis",
          "Erythema multiforme: targetoid lesions (3 zones); HSV is #1 trigger; drugs more commonly cause SJS/TEN"
        ]
      },
      {
        heading: "Autoimmune Blistering Diseases",
        bullets: [
          "Pemphigus vulgaris: anti-desmoglein 3 → intraepidermal acantholysis, flaccid blisters, Nikolsky+, oral mucosa first; reticular IgG on IF",
          "Pemphigus foliaceus: anti-desmoglein 1 → superficial blisters in granular layer; no oral involvement (desmoglein 3 compensates in mucosa)",
          "Bullous pemphigoid: anti-BP180/BP230 (hemidesmosome) → subepidermal, tense blisters; linear IgG/C3 at DEJ; more common, less fatal than pemphigus",
          "Dermatitis herpetiformis: granular IgA at dermal papillae; associated with celiac disease; treat with dapsone + gluten-free diet"
        ]
      },
      {
        heading: "Skin Neoplasms",
        bullets: [
          "Basal cell carcinoma: most common cancer; pearly papule with telangiectasia + rolled borders; PTCH1/Hedgehog pathway; locally invasive, rarely metastasizes",
          "Squamous cell carcinoma: scaly, ulcerating nodule; actinic keratosis (partial dysplasia) → Bowen disease (SCC in situ, full-thickness) → invasive SCC",
          "Melanoma: ABCDE criteria; Breslow thickness = #1 prognostic factor; S-100 (sensitive), HMB-45 (specific); BRAF V600E mutation in ~50%",
          "Kaposi sarcoma: HHV-8 → spindle cells + slit-like vascular spaces; most common malignancy in AIDS",
          "Keratoacanthoma: rapidly growing crater with central keratin plug; low-grade SCC variant; may involute"
        ]
      },
      {
        heading: "Infectious Skin Conditions",
        bullets: [
          "Impetigo: S. aureus (#1) or Group A Strep; honey-colored crusted lesions; exfoliative toxin cleaves desmoglein 1",
          "SSSS (staphylococcal scalded skin syndrome): disseminated exfoliative toxin from S. aureus → widespread superficial desquamation; children > adults",
          "Tinea infections: dermatophytes (Trichophyton, Microsporum, Epidermophyton); KOH prep shows hyphae; treat with topical/systemic antifungals"
        ]
      }
    ],
    table: {
      headers: ["Blistering Disease","Target Antigen","Blister Level","IF Pattern","Clinical Features"],
      rows: [
        ["Pemphigus vulgaris","Desmoglein 3","Intraepidermal","Reticular IgG","Flaccid blisters, oral erosions, Nikolsky+"],
        ["Pemphigus foliaceus","Desmoglein 1","Subcorneal","Reticular IgG","Superficial erosions, no oral involvement"],
        ["Bullous pemphigoid","BP180/BP230","Subepidermal","Linear IgG/C3","Tense blisters, spares mucosa"],
        ["Dermatitis herpetiformis","Epidermal transglutaminase","Subepidermal","Granular IgA","Grouped vesicles, celiac disease"],
        ["Linear IgA disease","LAD-1 antigen","Subepidermal","Linear IgA","Drug-induced (vancomycin), 'string of pearls'"]
      ]
    },
    mnemonic: "Blistering disease depth: 'PEMphigus = intraEPIdermal (PEM = Pick EMpart), PEMphigoid = subEPIdermal (below).' Skin cancer frequency: BCC > SCC > Melanoma. Melanoma danger: 'ABCDE = Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolution.'"
  },
  "Rheumatologic disease": {
    sections: [
      {
        heading: "Seronegative Spondyloarthropathies (HLA-B27 Associated)",
        bullets: [
          "Ankylosing spondylitis: bilateral sacroiliitis → bamboo spine; inflammatory back pain improves with exercise; anterior uveitis, aortitis, apical pulmonary fibrosis",
          "Reactive arthritis: asymmetric oligoarthritis post-infection; 'can't see, can't pee, can't climb a tree'; GU trigger = Chlamydia; GI = Shigella, Salmonella, Yersinia, Campylobacter",
          "Psoriatic arthritis: dactylitis ('sausage digits'), DIP involvement, pencil-in-cup deformity, skin psoriasis",
          "Inflammatory bowel disease-associated arthritis: peripheral or axial arthritis with Crohn or UC"
        ]
      },
      {
        heading: "Vasculitis",
        bullets: [
          "Giant cell (temporal) arteritis: large-vessel; age >50; headache, jaw claudication, visual loss (AION); ↑↑ESR; granulomatous inflammation; associated with PMR; treat immediately with steroids",
          "Kawasaki disease: medium-vessel; children <5; fever ≥5 days + 4/5 criteria; coronary artery aneurysms; treat: IVIG + aspirin",
          "GPA (Wegener): small-vessel; c-ANCA/anti-PR3; upper/lower airway granulomas + pauci-immune GN",
          "Microscopic polyangiitis: small-vessel; p-ANCA/anti-MPO; pulmonary-renal syndrome without granulomas",
          "EGPA (Churg-Strauss): small-vessel; p-ANCA/anti-MPO; asthma + eosinophilia + vasculitis",
          "Polyarteritis nodosa: medium-vessel; NOT ANCA-associated; associated with hepatitis B; spares lungs/glomeruli",
          "Behçet disease: all vessel sizes; oral/genital ulcers + uveitis + pathergy; Silk Road; HLA-B51"
        ]
      },
      {
        heading: "Autoimmune Rheumatic Conditions",
        bullets: [
          "Rheumatoid arthritis: symmetric MCP/PIP, spares DIP; pannus formation; RF + anti-CCP (most specific); morning stiffness >1 hr",
          "Sjögren syndrome: anti-SSA (Ro)/anti-SSB (La); dry eyes + dry mouth; 40x risk of MALT lymphoma",
          "Antiphospholipid syndrome: thrombosis + pregnancy loss; lupus anticoagulant, anti-cardiolipin, anti-β2GP1; aPTT prolonged in vitro but prothrombotic in vivo",
          "Felty syndrome: RA + splenomegaly + neutropenia; HLA-DR4",
          "Still disease (systemic JIA): quotidian fevers + salmon-pink rash + markedly ↑ferritin; complication: MAS"
        ]
      }
    ],
    table: {
      headers: ["Vasculitis","Vessel Size","Key Antibody/Association","Classic Presentation","Major Complication"],
      rows: [
        ["Giant cell arteritis","Large","↑↑ESR, PMR","Headache, jaw claudication, >50 yo","Irreversible vision loss"],
        ["Takayasu arteritis","Large","↑ESR, young Asian women","Pulseless disease, upper extremity","Aortic aneurysm/stenosis"],
        ["Polyarteritis nodosa","Medium","Hepatitis B","Fever, weight loss, skin nodules","Renal failure, mesenteric ischemia"],
        ["Kawasaki disease","Medium","Children <5","Fever + 5 criteria","Coronary artery aneurysm"],
        ["GPA (Wegener)","Small","c-ANCA/anti-PR3","Sinusitis, hemoptysis, hematuria","Renal failure"],
        ["EGPA (Churg-Strauss)","Small","p-ANCA/anti-MPO","Asthma, eosinophilia","Cardiac (leading cause of death)"],
        ["Behçet disease","All sizes","HLA-B51","Oral/genital ulcers, uveitis","CNS vasculitis, DVT"]
      ]
    },
    mnemonic: "ANCA associations: c-ANCA = Cytoplasmic = anti-PR3 = GPA (Wegener) — think 'C for Cytoplasmic and C for Classic Wegener triad'; p-ANCA = Perinuclear = anti-MPO = MPA/EGPA. Reactive arthritis triad: 'Can't See (conjunctivitis), Can't Pee (urethritis), Can't Climb a Tree (arthritis).'"
  },
  "Muscle disorders": {
    sections: [
      {
        heading: "Muscular Dystrophies",
        bullets: [
          "Duchenne MD: X-linked, frameshift deletion → absent dystrophin; onset 2-5 yo; Gowers sign, calf pseudohypertrophy; wheelchair by 12, death by 30 (cardiac/respiratory); ↑↑CK",
          "Becker MD: X-linked, in-frame deletion → reduced/truncated dystrophin; later onset, milder; can ambulate past teens",
          "Myotonic dystrophy type 1 (Steinert): CTG repeat in DMPK (chr 19); AD with anticipation; myotonia + distal weakness + cataracts + cardiac conduction defects + frontal balding + testicular atrophy",
          "Facioscapulohumeral dystrophy: D4Z4 repeat contraction (chr 4); AD; facial/shoulder/upper arm weakness; cannot whistle or blow up balloon"
        ]
      },
      {
        heading: "Neuromuscular Junction Disorders",
        bullets: [
          "Myasthenia gravis: anti-AChR antibodies (85%); fatigable weakness, worse with use; ptosis, diplopia; decremental response on repetitive stimulation; associated with thymoma",
          "Lambert-Eaton: anti-P/Q VGCC antibodies → impaired presynaptic ACh release; improves with use; incremental response on EMG; associated with small cell lung carcinoma",
          "Botulism: Clostridium botulinum toxin blocks presynaptic ACh release (cleaves SNARE proteins); descending paralysis"
        ]
      },
      {
        heading: "Inflammatory Myopathies",
        bullets: [
          "Polymyositis: CD8+ T cells invade non-necrotic muscle fibers (endomysial inflammation); proximal weakness, ↑CK; anti-Jo-1 → antisynthetase syndrome (ILD, mechanic's hands)",
          "Dermatomyositis: CD4+ T cells + complement-mediated perimysial inflammation → perifascicular atrophy; heliotrope rash, Gottron papules; adult DM → screen for malignancy",
          "Inclusion body myositis: most common inflammatory myopathy in elderly (>50); distal + proximal weakness; rimmed vacuoles with amyloid deposits; poor response to immunosuppression"
        ]
      },
      {
        heading: "Metabolic and Ion Channel Myopathies",
        bullets: [
          "McArdle disease (GSD V): myophosphorylase deficiency → cannot break down muscle glycogen; exercise intolerance, cramps, rhabdomyolysis; flat lactate on forearm test; second wind phenomenon",
          "Pompe disease (GSD II): acid maltase deficiency → lysosomal glycogen accumulation; infantile: cardiomegaly + hypotonia; only GSD that is a lysosomal storage disease",
          "Malignant hyperthermia: RYR1 mutation (AD) → uncontrolled Ca²⁺ release from SR; triggered by volatile anesthetics + succinylcholine; treat with dantrolene",
          "Hypokalemic periodic paralysis: CACNA1S mutation; triggered by carbs/insulin; attacks of flaccid paralysis with low K+; treat with K+ replacement"
        ]
      },
      {
        heading: "Motor Neuron Diseases",
        bullets: [
          "ALS: combined UMN (spasticity, hyperreflexia, Babinski) + LMN (fasciculations, atrophy, weakness) degeneration; preserved sensation; TDP-43 aggregates; SOD1 in familial cases",
          "SMA type 1 (Werdnig-Hoffmann): SMN1 deletion (chr 5q); AR; anterior horn cell degeneration → floppy infant, tongue fasciculations, absent DTRs, preserved intellect"
        ]
      }
    ],
    table: {
      headers: ["Disorder","Defect/Mechanism","Key Clinical Feature","CK Level","Distinguishing Finding"],
      rows: [
        ["Duchenne MD","Absent dystrophin (frameshift)","Gowers sign, pseudohypertrophy","Markedly ↑↑","No dystrophin on immunostain"],
        ["Becker MD","Reduced dystrophin (in-frame)","Later onset, milder weakness","Elevated","Reduced dystrophin on immunostain"],
        ["Myasthenia gravis","Anti-AChR antibodies","Fatigable weakness, ptosis","Normal","Decremental EMG, thymoma"],
        ["Lambert-Eaton","Anti-VGCC antibodies","Improves with use","Normal","Incremental EMG, SCLC"],
        ["Polymyositis","CD8+ T cell endomysial infiltrate","Proximal weakness","Elevated","Anti-Jo-1, endomysial CD8+"],
        ["Dermatomyositis","CD4+/complement perimysial","Heliotrope rash, Gottron papules","Elevated","Perifascicular atrophy, malignancy"],
        ["McArdle disease","Myophosphorylase deficiency","Exercise cramps, rhabdomyolysis","Elevated during attacks","Flat lactate on forearm test"],
        ["Malignant hyperthermia","RYR1 mutation","Anesthesia-triggered rigidity","Markedly ↑↑","Treat with dantrolene"]
      ]
    },
    mnemonic: "DMD vs. BMD: 'Duchenne = Deleted (frameshift, no protein), Becker = Bent (in-frame, truncated protein).' NMJ disorders: MG = 'Muscles Get tired' (worse with use, decremental); LEMS = 'Lets Energy Mount' (better with use, incremental). Myotonic dystrophy: 'My Tonic Can't Drop' — Myotonia (grip), Testicular atrophy, Cataracts, Cardiac Defects, DM1 = Distal weakness."
  }
};
