const ENDO_QUESTIONS = {
  "Hypothalamic-pituitary axis": [
    {
      "vignette": "A 42-year-old woman presents with progressive headaches, visual field deficits, and amenorrhea over the past 6 months. MRI of the brain reveals a 2.5 cm sellar mass compressing the optic chiasm. Serum prolactin level is 280 ng/mL (normal <20 ng/mL).",
      "question": "Which of the following is the most appropriate initial treatment for this patient's condition?",
      "options": [
        "Cabergoline",
        "External beam radiation therapy",
        "Transsphenoidal surgical resection",
        "Bromocriptine and surgical resection",
        "Observation with serial MRI"
      ],
      "correctIndex": 0,
      "explanation": "Despite the large size of this prolactinoma (macroprolactinoma, >10 mm), dopamine agonists such as cabergoline are the first-line treatment. Dopamine agonists both reduce prolactin secretion and shrink tumor size in the majority of cases, often resolving visual field defects. Surgery is reserved for medication-intolerant or refractory cases.",
      "optionExplanations": [
        "Correct. Cabergoline (a dopamine agonist) is the first-line treatment for prolactinomas, even macroprolactinomas, as it reduces both prolactin levels and tumor size.",
        "Incorrect. Radiation therapy is reserved for aggressive or recurrent tumors unresponsive to medical and surgical therapy.",
        "Incorrect. Surgery is not first-line for prolactinomas regardless of size; dopamine agonists are preferred due to high efficacy.",
        "Incorrect. While bromocriptine is a dopamine agonist, combination with surgery is not the initial approach; medical therapy alone is tried first.",
        "Incorrect. A 2.5 cm tumor compressing the optic chiasm requires active treatment, not observation."
      ],
      "highYieldPoint": "Dopamine agonists (cabergoline > bromocriptine) are first-line for ALL prolactinomas, even macroprolactinomas with mass effect."
    },
    {
      "vignette": "A 35-year-old man presents with coarsening of facial features, enlargement of hands and feet, and increased ring and shoe size over the past 3 years. His fasting blood glucose is 148 mg/dL. Serum IGF-1 is markedly elevated. An oral glucose tolerance test fails to suppress growth hormone below 1 ng/mL.",
      "question": "Which of the following is the most common cause of this patient's condition?",
      "options": [
        "Pituitary adenoma",
        "Ectopic GHRH secretion",
        "Hypothalamic hamartoma",
        "McCune-Albright syndrome",
        "Carney complex"
      ],
      "correctIndex": 0,
      "explanation": "Acromegaly is caused by excess growth hormone (GH) secretion, most commonly (>95% of cases) from a GH-secreting pituitary adenoma (somatotroph adenoma). The diagnosis is confirmed by elevated IGF-1 and failure to suppress GH below 1 ng/mL after oral glucose load. First-line treatment is transsphenoidal surgery.",
      "optionExplanations": [
        "Correct. GH-secreting pituitary adenoma is the cause of acromegaly in >95% of cases.",
        "Incorrect. Ectopic GHRH secretion (from carcinoid or pancreatic tumors) is a rare cause of acromegaly (<1%).",
        "Incorrect. Hypothalamic hamartomas can cause precocious puberty but are not a typical cause of acromegaly.",
        "Incorrect. McCune-Albright syndrome can occasionally cause GH excess but is extremely rare compared to pituitary adenoma.",
        "Incorrect. Carney complex includes GH-secreting tumors but accounts for a very small fraction of acromegaly cases."
      ],
      "highYieldPoint": "Acromegaly: >95% caused by GH-secreting pituitary adenoma; diagnose with elevated IGF-1 and failure of GH suppression by oral glucose."
    },
    {
      "vignette": "A 28-year-old woman presents with fatigue, cold intolerance, constipation, and irregular menstrual cycles. She had severe postpartum hemorrhage requiring blood transfusion 6 months ago. Laboratory studies show low TSH, low free T4, low cortisol, and low prolactin. MRI of the pituitary shows an empty sella.",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Sheehan syndrome",
        "Primary hypothyroidism",
        "Pituitary macroadenoma",
        "Lymphocytic hypophysitis",
        "Hypothalamic craniopharyngioma"
      ],
      "correctIndex": 0,
      "explanation": "Sheehan syndrome results from ischemic necrosis of the pituitary gland following severe postpartum hemorrhage with hemodynamic shock. The pituitary gland enlarges during pregnancy (lactotroph hyperplasia) and is vulnerable to ischemia. Panhypopituitarism develops with deficiency of all anterior pituitary hormones. The first sign is often failure to lactate postpartum (prolactin deficiency).",
      "optionExplanations": [
        "Correct. Sheehan syndrome causes panhypopituitarism due to postpartum pituitary ischemic necrosis following severe hemorrhage.",
        "Incorrect. Primary hypothyroidism would present with elevated TSH, not low TSH. This patient has secondary hypothyroidism.",
        "Incorrect. While a macroadenoma can cause hypopituitarism, the clinical context of postpartum hemorrhage and empty sella strongly suggests Sheehan syndrome.",
        "Incorrect. Lymphocytic hypophysitis occurs peripartum but presents with an enlarged (not empty) pituitary and often with diabetes insipidus.",
        "Incorrect. Craniopharyngioma arises from Rathke pouch remnants and typically presents in children or older adults with calcification on imaging."
      ],
      "highYieldPoint": "Sheehan syndrome: pituitary ischemic necrosis post-hemorrhage → panhypopituitarism; first sign is failure to lactate (low prolactin)."
    },
    {
      "vignette": "A 14-year-old boy is brought to the physician because of short stature. His growth velocity has been below the 3rd percentile for the past 2 years. His bone age is delayed by 3 years. Insulin-like growth factor-1 (IGF-1) levels are low. A growth hormone stimulation test shows a peak GH level of 3 ng/mL (normal >10 ng/mL).",
      "question": "Which of the following best explains the low IGF-1 level in this patient?",
      "options": [
        "Hepatic resistance to GH signaling",
        "Inadequate GH secretion from the pituitary",
        "Renal loss of IGF-1 binding proteins",
        "Mutation in the IGF-1 receptor gene",
        "Excess somatostatin secretion from the hypothalamus"
      ],
      "correctIndex": 1,
      "explanation": "IGF-1 is produced primarily by the liver in response to growth hormone stimulation. In GH deficiency (confirmed by a peak GH <10 ng/mL on stimulation testing), the liver does not receive adequate GH signaling, resulting in decreased IGF-1 synthesis. This accounts for both the low IGF-1 and the growth failure.",
      "optionExplanations": [
        "Incorrect. Hepatic GH resistance (Laron syndrome) would show elevated GH but low IGF-1; this patient has low GH on stimulation.",
        "Correct. Inadequate pituitary GH secretion leads to decreased hepatic IGF-1 production, explaining both low GH and low IGF-1.",
        "Incorrect. Renal loss of binding proteins does not explain the failed GH stimulation test.",
        "Incorrect. An IGF-1 receptor mutation would cause growth failure with normal or elevated IGF-1 levels.",
        "Incorrect. While excess somatostatin could theoretically suppress GH, the primary problem here is GH deficiency demonstrated by the stimulation test."
      ],
      "highYieldPoint": "GH acts on liver to produce IGF-1; GH deficiency → low IGF-1. Laron syndrome (GH receptor defect) → high GH, low IGF-1."
    },
    {
      "vignette": "A 55-year-old man with a history of lung cancer presents with confusion, nausea, and concentrated urine output despite normal fluid intake. Serum sodium is 118 mEq/L, serum osmolality is 250 mOsm/kg, and urine osmolality is 580 mOsm/kg. Urine sodium is 45 mEq/L. He is euvolemic on examination.",
      "question": "Which of the following is the most appropriate initial management for this patient's hyponatremia?",
      "options": [
        "Hypertonic (3%) saline infusion",
        "Fluid restriction",
        "Isotonic (0.9%) saline bolus",
        "Demeclocycline",
        "Conivaptan infusion"
      ],
      "correctIndex": 1,
      "explanation": "This patient has SIADH (syndrome of inappropriate ADH secretion), likely paraneoplastic from small cell lung cancer. Key findings: euvolemic hyponatremia with inappropriately concentrated urine (>100 mOsm/kg) and elevated urine sodium (>40 mEq/L). For mild-moderate symptoms (confusion, nausea), the first-line treatment is fluid restriction to 800-1000 mL/day.",
      "optionExplanations": [
        "Incorrect. Hypertonic saline is reserved for severe symptomatic hyponatremia (seizures, obtundation) to avoid overly rapid correction and osmotic demyelination.",
        "Correct. Fluid restriction is the first-line treatment for mild-to-moderate SIADH to allow gradual sodium correction.",
        "Incorrect. Isotonic saline is used for hypovolemic hyponatremia; in SIADH (euvolemic), it can paradoxically worsen hyponatremia.",
        "Incorrect. Demeclocycline (induces nephrogenic DI) is a second-line agent for chronic SIADH refractory to fluid restriction.",
        "Incorrect. Vaptans (vasopressin receptor antagonists) are second-line agents when fluid restriction is insufficient."
      ],
      "highYieldPoint": "SIADH: euvolemic hyponatremia + concentrated urine + high urine Na. Treatment: fluid restriction first-line; hypertonic saline only for seizures."
    },
    {
      "vignette": "A 60-year-old man undergoing transsphenoidal surgery for a nonfunctioning pituitary adenoma develops polyuria (8 L/day) and polydipsia 24 hours postoperatively. Serum sodium is 152 mEq/L, serum osmolality is 310 mOsm/kg, and urine osmolality is 85 mOsm/kg. After administration of desmopressin, urine osmolality increases to 600 mOsm/kg.",
      "question": "Which of the following best explains the pathophysiology of this patient's condition?",
      "options": [
        "Excess ADH secretion from ectopic source",
        "Damage to ADH-producing neurons in the hypothalamus",
        "Loss of aquaporin-2 channels in collecting duct",
        "Mutation in the V2 vasopressin receptor",
        "Osmoreceptor reset in the anterior hypothalamus"
      ],
      "correctIndex": 1,
      "explanation": "Central diabetes insipidus (DI) results from decreased ADH (vasopressin) production by magnocellular neurons in the supraoptic and paraventricular nuclei of the hypothalamus. Post-surgical damage to these neurons or the pituitary stalk disrupts ADH release. The positive response to desmopressin (synthetic ADH) confirms central DI, as the kidneys retain functional V2 receptors.",
      "optionExplanations": [
        "Incorrect. Excess ADH secretion would cause SIADH (hyponatremia and concentrated urine), not dilute polyuria.",
        "Correct. Surgical damage to hypothalamic ADH-producing neurons causes central DI; the positive desmopressin response confirms functioning renal V2 receptors.",
        "Incorrect. Loss of aquaporin-2 channels describes nephrogenic DI (e.g., from lithium), which would not respond to desmopressin.",
        "Incorrect. V2 receptor mutations cause congenital nephrogenic DI, which would not respond to desmopressin.",
        "Incorrect. Osmoreceptor reset would alter the threshold for ADH release but not produce the complete lack of concentrating ability seen here."
      ],
      "highYieldPoint": "Central DI: low ADH → dilute polyuria. Responds to desmopressin. Nephrogenic DI: kidneys resist ADH → does NOT respond to desmopressin."
    },
    {
      "vignette": "A 48-year-old woman presents with progressive weight gain (predominantly truncal), wide purple striae on the abdomen, easy bruising, and new-onset hypertension. A 24-hour urine free cortisol is markedly elevated. Low-dose dexamethasone suppression test fails to suppress cortisol. High-dose dexamethasone suppression test shows >50% suppression of cortisol. ACTH level is elevated.",
      "question": "What is the most likely source of excess cortisol production in this patient?",
      "options": [
        "Adrenal adenoma",
        "Ectopic ACTH-secreting bronchial carcinoid",
        "Pituitary corticotroph adenoma",
        "Adrenal carcinoma",
        "Exogenous glucocorticoid use"
      ],
      "correctIndex": 2,
      "explanation": "Cushing disease specifically refers to an ACTH-secreting pituitary adenoma causing cortisol excess. The elevated ACTH excludes adrenal causes (which suppress ACTH). Suppression with high-dose dexamethasone (>50% reduction) distinguishes pituitary from ectopic ACTH sources, as ectopic tumors are typically resistant to even high-dose suppression.",
      "optionExplanations": [
        "Incorrect. An adrenal adenoma would produce cortisol autonomously with suppressed ACTH levels.",
        "Incorrect. Ectopic ACTH sources (bronchial carcinoid, small cell lung cancer) typically do NOT suppress with high-dose dexamethasone.",
        "Correct. Elevated ACTH with suppression on high-dose dexamethasone is characteristic of a pituitary corticotroph adenoma (Cushing disease).",
        "Incorrect. Adrenal carcinoma would cause ACTH-independent hypercortisolism with suppressed ACTH.",
        "Incorrect. Exogenous glucocorticoid use is the most common cause of Cushing syndrome overall but would cause suppressed ACTH and cortisol levels on testing."
      ],
      "highYieldPoint": "Cushing disease (pituitary) = elevated ACTH + high-dose dexamethasone suppression. Ectopic ACTH = elevated ACTH + NO suppression."
    },
    {
      "vignette": "A 30-year-old woman with a BMI of 22 presents with secondary amenorrhea and galactorrhea. She takes no medications. Serum prolactin is 65 ng/mL (normal <20 ng/mL). Pregnancy test is negative. MRI reveals a 6 mm pituitary lesion.",
      "question": "What is the mechanism by which this patient's tumor causes the observed symptoms?",
      "options": [
        "Direct stimulation of breast tissue by tumor-secreted oxytocin",
        "Compression of the pituitary stalk causing TSH elevation",
        "Inhibition of GnRH pulsatility by excess prolactin",
        "Stimulation of endometrial proliferation by tumor-secreted estrogen",
        "Activation of mammary gland cells by tumor-secreted growth hormone"
      ],
      "correctIndex": 2,
      "explanation": "Hyperprolactinemia inhibits GnRH pulsatile secretion from the hypothalamus, which in turn reduces LH and FSH release. This leads to hypogonadotropic hypogonadism with amenorrhea, anovulation, and decreased estrogen levels. Galactorrhea results from prolactin's direct stimulatory effect on mammary gland milk production.",
      "optionExplanations": [
        "Incorrect. Prolactinomas do not secrete oxytocin; prolactin itself stimulates milk production.",
        "Incorrect. A 6 mm microadenoma is too small to compress the stalk, and TSH elevation is not related to these symptoms.",
        "Correct. Excess prolactin suppresses GnRH pulsatility, causing hypogonadotropic hypogonadism and amenorrhea.",
        "Incorrect. Prolactinomas do not secrete estrogen; they actually cause hypoestrogenism through GnRH suppression.",
        "Incorrect. This is a prolactin-secreting tumor, not a GH-secreting tumor."
      ],
      "highYieldPoint": "Hyperprolactinemia → suppressed GnRH → low LH/FSH → amenorrhea/infertility. Galactorrhea from direct prolactin action on breast."
    },
    {
      "vignette": "A 10-year-old boy presents with headaches, bitemporal hemianopia, and growth failure. CT head shows a suprasellar mass with calcifications. Biopsy reveals cystic spaces containing thick, dark-brown fluid described as 'motor oil' material, with cholesterol crystals and adamantinomatous epithelium.",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Rathke cleft cyst",
        "Pituitary macroadenoma",
        "Craniopharyngioma",
        "Meningioma",
        "Germinoma"
      ],
      "correctIndex": 2,
      "explanation": "Craniopharyngioma is a benign tumor arising from Rathke pouch remnants. The adamantinomatous type (most common in children) characteristically contains calcifications on imaging, cystic components with 'motor oil'-like fluid rich in cholesterol crystals, and wet keratin. It is the most common suprasellar tumor in children and causes hypopituitarism and visual field defects.",
      "optionExplanations": [
        "Incorrect. Rathke cleft cysts are benign, usually asymptomatic, and do not contain cholesterol-rich motor oil fluid or calcifications.",
        "Incorrect. Pituitary macroadenomas arise within the sella and rarely contain calcifications or cholesterol-rich cystic fluid.",
        "Correct. Craniopharyngioma from Rathke pouch remnants classically presents with suprasellar calcifications, cholesterol-rich 'motor oil' cyst fluid, and adamantinomatous epithelium.",
        "Incorrect. Meningiomas are rare in children and arise from arachnoid cells; they do not contain motor oil fluid.",
        "Incorrect. Germinomas are midline tumors that may occur in the suprasellar region but present with different histology (large cells with lymphocytic infiltrate)."
      ],
      "highYieldPoint": "Craniopharyngioma: Rathke pouch remnant, calcified suprasellar mass, 'motor oil' cyst fluid, most common suprasellar tumor in children."
    },
    {
      "vignette": "A 32-year-old woman presents with severe headache, visual loss, and vomiting that developed acutely over a few hours. She has a known history of a nonfunctioning pituitary macroadenoma. On examination, she has bilateral cranial nerve III palsies and decreased visual acuity. Serum cortisol is critically low at 1.2 µg/dL.",
      "question": "Which of the following is the most important immediate intervention?",
      "options": [
        "Intravenous levothyroxine",
        "Emergent transsphenoidal surgery",
        "Dopamine agonist therapy",
        "Intravenous hydrocortisone",
        "Cavernous sinus sampling"
      ],
      "correctIndex": 3,
      "explanation": "This patient is presenting with pituitary apoplexy — acute hemorrhage or infarction of a pituitary adenoma causing sudden headache, visual loss, ophthalmoplegia, and acute adrenal insufficiency. The most critical immediate intervention is IV hydrocortisone to treat acute adrenal crisis, which is life-threatening. Surgical decompression may follow once the patient is hemodynamically stabilized.",
      "optionExplanations": [
        "Incorrect. While thyroid hormone replacement may be needed eventually, cortisol must be replaced first — giving thyroid hormone without cortisol can precipitate adrenal crisis.",
        "Incorrect. Surgery is often needed for decompression but must not proceed before hemodynamic stabilization with glucocorticoid replacement.",
        "Incorrect. Dopamine agonists are for prolactinomas and have no role in the acute management of pituitary apoplexy.",
        "Correct. Acute adrenal crisis from pituitary apoplexy is life-threatening and requires immediate IV hydrocortisone before any surgical intervention.",
        "Incorrect. Cavernous sinus sampling is used for Cushing disease workup and is irrelevant in pituitary apoplexy."
      ],
      "highYieldPoint": "Pituitary apoplexy: acute hemorrhage into adenoma → headache, visual loss, cranial nerve palsies, adrenal crisis. Treat with IV steroids first."
    },
    {
      "vignette": "A 45-year-old woman presents with episodic headaches, diaphoresis, and palpitations. During one episode, her blood pressure is recorded at 220/130 mmHg. Between episodes, her blood pressure is 135/85 mmHg. A 24-hour urine collection shows elevated metanephrines and catecholamines. CT abdomen reveals a 4 cm right adrenal mass.",
      "question": "Which of the following medications must be administered BEFORE surgical removal of this tumor?",
      "options": [
        "Propranolol",
        "Metyrapone",
        "Spironolactone",
        "Phenoxybenzamine",
        "Labetalol"
      ],
      "correctIndex": 3,
      "explanation": "Pheochromocytoma requires alpha-adrenergic blockade (phenoxybenzamine is a nonselective, irreversible alpha-blocker) for at least 10-14 days before surgery to prevent intraoperative hypertensive crisis. Beta-blockers should only be added AFTER adequate alpha-blockade to prevent unopposed alpha stimulation, which could worsen hypertension.",
      "optionExplanations": [
        "Incorrect. Beta-blockers alone are contraindicated before alpha-blockade in pheochromocytoma — they cause unopposed alpha-adrenergic stimulation worsening hypertension.",
        "Incorrect. Metyrapone inhibits cortisol synthesis and is used in Cushing syndrome workup, not pheochromocytoma management.",
        "Incorrect. Spironolactone is an aldosterone antagonist used for primary hyperaldosteronism, not pheochromocytoma.",
        "Correct. Phenoxybenzamine (irreversible alpha-blocker) is given for 10-14 days preoperatively to prevent catecholamine-induced hypertensive crisis during surgery.",
        "Incorrect. While labetalol has both alpha- and beta-blocking properties, phenoxybenzamine is the classic and preferred preoperative agent; pure beta-blockers must never be given before alpha-blockade."
      ],
      "highYieldPoint": "Pheochromocytoma: ALWAYS alpha-block first (phenoxybenzamine), THEN beta-block. Never beta-block alone → unopposed alpha → hypertensive crisis."
    },
    {
      "vignette": "A 22-year-old woman is evaluated for primary amenorrhea. She has normal breast development but absent pubic hair. Karyotype is 46,XY. Pelvic ultrasound shows absent uterus and bilateral undescended testes. Serum testosterone is elevated, and LH is elevated.",
      "question": "Which of the following best explains the elevated testosterone and LH in this patient?",
      "options": [
        "5-alpha reductase deficiency preventing DHT conversion",
        "Congenital adrenal hyperplasia causing androgen excess",
        "Excess aromatase activity converting androgens to estrogens",
        "Insensitivity of androgen receptors preventing negative feedback",
        "Leydig cell tumor with autonomous testosterone secretion"
      ],
      "correctIndex": 3,
      "explanation": "Complete androgen insensitivity syndrome (CAIS) results from nonfunctional androgen receptors (X-linked recessive). Despite 46,XY karyotype and functional testes producing testosterone, tissues cannot respond to androgens. Breast development occurs via peripheral aromatization of testosterone to estrogen. Absent negative feedback at the hypothalamus/pituitary leads to elevated LH and testosterone.",
      "optionExplanations": [
        "Incorrect. 5-alpha reductase deficiency would present with ambiguous genitalia at birth and virilization at puberty, with normal androgen receptors.",
        "Incorrect. CAH (21-hydroxylase deficiency) in a 46,XX individual causes virilization; this is a 46,XY patient with feminized phenotype.",
        "Incorrect. While aromatase activity does contribute to breast development in CAIS, excess aromatase would lower testosterone, not elevate it.",
        "Correct. In CAIS, nonfunctional androgen receptors prevent testosterone-mediated negative feedback, leading to elevated LH and testosterone.",
        "Incorrect. A Leydig cell tumor would not explain the absent uterus, female phenotype with 46,XY karyotype, or absent pubic hair."
      ],
      "highYieldPoint": "Androgen insensitivity syndrome: 46,XY, female phenotype, absent uterus, testes present, elevated testosterone + LH due to absent androgen feedback."
    },
    {
      "vignette": "A 38-year-old man with a history of renal cell carcinoma presents with sudden onset of severe headache and neck stiffness. CT head is unremarkable. He reports increased urinary frequency with colorless urine output exceeding 6 liters per day. Water deprivation test shows persistent low urine osmolality (150 mOsm/kg) even after 8 hours of water restriction. After desmopressin injection, urine osmolality rises to 450 mOsm/kg.",
      "question": "Where is the most likely site of pathology causing this patient's polyuria?",
      "options": [
        "Collecting duct principal cells",
        "Juxtaglomerular apparatus",
        "Proximal convoluted tubule",
        "Loop of Henle thick ascending limb",
        "Posterior pituitary or hypothalamus"
      ],
      "correctIndex": 4,
      "explanation": "The response to desmopressin (urine osmolality increased from 150 to 450 mOsm/kg) indicates central diabetes insipidus. The kidneys can concentrate urine when exogenous ADH is provided, meaning the defect is in ADH production or release. ADH is synthesized in the hypothalamus (supraoptic and paraventricular nuclei) and stored/released from the posterior pituitary. Metastatic disease (e.g., from renal cell carcinoma) can involve the pituitary stalk or hypothalamus.",
      "optionExplanations": [
        "Incorrect. Pathology at collecting duct principal cells would cause nephrogenic DI, which does NOT respond to desmopressin.",
        "Incorrect. The juxtaglomerular apparatus secretes renin and is involved in blood pressure regulation, not water balance via ADH.",
        "Incorrect. The proximal tubule handles obligatory water reabsorption and is not directly involved in ADH-mediated water concentration.",
        "Incorrect. The thick ascending limb is involved in the countercurrent mechanism but is not the site of ADH action or production.",
        "Correct. Central DI from metastatic involvement of the posterior pituitary/hypothalamus is confirmed by the positive desmopressin response."
      ],
      "highYieldPoint": "Water deprivation test: central DI responds to desmopressin (urine concentrates); nephrogenic DI does NOT respond to desmopressin."
    },
    {
      "vignette": "A 50-year-old man presents with joint pain, skin hyperpigmentation, hepatomegaly, and new-onset diabetes mellitus. He is also found to have hypogonadotropic hypogonadism with low testosterone, low LH, and low FSH. Transferrin saturation is 85% and serum ferritin is 2500 ng/mL. Liver biopsy shows iron deposition in hepatocytes.",
      "question": "Which of the following best explains the mechanism of hypogonadism in this patient?",
      "options": [
        "Testicular iron deposition causing primary gonadal failure",
        "Autoimmune destruction of Leydig cells",
        "Peripheral conversion of testosterone to estradiol by adipose tissue",
        "Excess estrogen production from hepatic cirrhosis",
        "Iron deposition in the pituitary gonadotroph cells"
      ],
      "correctIndex": 4,
      "explanation": "Hemochromatosis causes iron deposition in multiple organs. Hypogonadotropic hypogonadism (low testosterone with low LH/FSH) is one of the most common endocrine manifestations, resulting from iron deposition in pituitary gonadotroph cells. This damages the cells responsible for LH and FSH secretion, leading to secondary hypogonadism.",
      "optionExplanations": [
        "Incorrect. While testes can also accumulate iron, the laboratory pattern (low LH/FSH) indicates central (pituitary) rather than primary testicular failure.",
        "Incorrect. Autoimmune orchitis would cause primary hypogonadism with elevated LH/FSH, not the low values seen here.",
        "Incorrect. Peripheral aromatization occurs in obesity but is not the mechanism in hemochromatosis-related hypogonadism.",
        "Incorrect. While cirrhosis can increase estrogen via impaired hepatic clearance, this would not fully explain low LH/FSH levels.",
        "Correct. Iron deposition in pituitary gonadotrophs impairs LH/FSH secretion, causing hypogonadotropic (secondary) hypogonadism."
      ],
      "highYieldPoint": "Hemochromatosis: iron deposits in pituitary → hypogonadotropic hypogonadism (low LH/FSH). Also causes 'bronze diabetes' and cirrhosis."
    },
    {
      "vignette": "A 16-year-old girl is evaluated for delayed puberty. She is 145 cm tall (below 3rd percentile), has a webbed neck, shield chest, and widely spaced nipples. She has no breast development and primary amenorrhea. Karyotype reveals 45,X. Serum FSH is 65 mIU/mL (elevated) and estradiol is <20 pg/mL (low).",
      "question": "Which of the following describes the type of hypogonadism present in this patient?",
      "options": [
        "Hypogonadotropic hypogonadism",
        "Eugonadotropic anovulation",
        "Functional hypothalamic amenorrhea",
        "Polycystic ovary syndrome",
        "Hypergonadotropic hypogonadism"
      ],
      "correctIndex": 4,
      "explanation": "Turner syndrome (45,X) causes streak gonads (nonfunctional ovaries) leading to primary ovarian failure. The ovaries cannot produce estrogen or respond to gonadotropins, resulting in loss of negative feedback and markedly elevated FSH and LH (hypergonadotropic hypogonadism). This is a form of primary hypogonadism.",
      "optionExplanations": [
        "Incorrect. Hypogonadotropic hypogonadism (low FSH/LH) indicates a pituitary or hypothalamic problem, not primary gonadal failure.",
        "Incorrect. Eugonadotropic anovulation involves normal FSH/LH with anovulatory cycles, such as in PCOS.",
        "Incorrect. Functional hypothalamic amenorrhea (from stress, low weight, or excess exercise) causes low FSH/LH, not elevated levels.",
        "Incorrect. PCOS presents with hyperandrogenism, oligomenorrhea, and normal or mildly elevated LH, not the markedly elevated FSH seen here.",
        "Correct. Turner syndrome (45,X) causes primary ovarian failure with streak gonads, resulting in hypergonadotropic hypogonadism (elevated FSH/LH with low estrogen)."
      ],
      "highYieldPoint": "Turner syndrome (45,X): streak gonads → hypergonadotropic hypogonadism. Features: short stature, webbed neck, shield chest, coarctation, horseshoe kidney."
    }
  ],
  "Thyroid disease": [
    {
      "vignette": "A 32-year-old woman presents with a 3-month history of weight loss, heat intolerance, tremor, and palpitations. On examination, she has a diffusely enlarged, nontender thyroid gland, exophthalmos, and pretibial myxedema. TSH is <0.01 mIU/L and free T4 is 4.8 ng/dL (elevated).",
      "question": "Which of the following antibodies is most directly responsible for the thyroid hyperfunction in this patient?",
      "options": [
        "Thyroid-stimulating immunoglobulin (TSI)",
        "Anti-thyroid peroxidase (anti-TPO) antibodies",
        "Anti-thyroglobulin antibodies",
        "TSH receptor-blocking antibodies",
        "Anti-nuclear antibodies"
      ],
      "correctIndex": 0,
      "explanation": "Graves disease is caused by thyroid-stimulating immunoglobulins (TSI), which are IgG autoantibodies that bind and activate the TSH receptor on thyroid follicular cells. This leads to unregulated thyroid hormone production independent of TSH. The triad of Graves disease includes hyperthyroidism, exophthalmos (ophthalmopathy), and pretibial myxedema (dermopathy).",
      "optionExplanations": [
        "Correct. TSI activates TSH receptors, causing autonomous thyroid hormone production and the clinical features of Graves disease.",
        "Incorrect. Anti-TPO antibodies are present in both Graves disease and Hashimoto thyroiditis but are markers of autoimmunity, not the cause of hyperthyroidism.",
        "Incorrect. Anti-thyroglobulin antibodies are seen in autoimmune thyroid disease but do not stimulate thyroid hormone production.",
        "Incorrect. TSH receptor-blocking antibodies can cause hypothyroidism (atrophic thyroiditis), not hyperthyroidism.",
        "Incorrect. ANAs are associated with systemic lupus erythematosus and other autoimmune conditions, not thyroid-specific stimulation."
      ],
      "highYieldPoint": "Graves disease: TSI (thyroid-stimulating immunoglobulin) activates TSH receptor → hyperthyroidism, ophthalmopathy, and pretibial myxedema."
    },
    {
      "vignette": "A 45-year-old woman presents with fatigue, weight gain, constipation, and dry skin over the past year. On examination, her thyroid is firm, nontender, and diffusely enlarged. TSH is 18 mIU/L (elevated) and free T4 is 0.4 ng/dL (low). Fine needle aspiration of the thyroid shows Hürthle cells and lymphocytic infiltration with germinal center formation.",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Hashimoto thyroiditis",
        "Subacute granulomatous thyroiditis",
        "Riedel thyroiditis",
        "Papillary thyroid carcinoma",
        "Graves disease"
      ],
      "correctIndex": 0,
      "explanation": "Hashimoto thyroiditis is the most common cause of hypothyroidism in iodine-sufficient areas. It is an autoimmune condition characterized by lymphocytic infiltration with germinal center formation and Hürthle cells (oxyphilic cells with abundant eosinophilic granular cytoplasm). Anti-TPO and anti-thyroglobulin antibodies are typically positive.",
      "optionExplanations": [
        "Correct. Hashimoto thyroiditis features lymphocytic infiltration with germinal centers and Hürthle cell metaplasia on histology.",
        "Incorrect. Subacute (de Quervain) thyroiditis presents with painful tender thyroid after viral illness and shows granulomatous inflammation with giant cells.",
        "Incorrect. Riedel thyroiditis is characterized by dense fibrosis ('woody thyroid') replacing thyroid parenchyma, not lymphocytic infiltration.",
        "Incorrect. Papillary thyroid carcinoma shows Orphan Annie eye nuclei, psammoma bodies, and nuclear grooves — not germinal centers.",
        "Incorrect. Graves disease causes hyperthyroidism (low TSH, high T4), not the hypothyroidism seen here."
      ],
      "highYieldPoint": "Hashimoto thyroiditis: most common cause of hypothyroidism; Hürthle cells + lymphocytic infiltration with germinal centers; anti-TPO antibodies."
    },
    {
      "vignette": "A 38-year-old woman presents with neck pain radiating to the jaw, fever, and malaise 2 weeks after an upper respiratory infection. Her thyroid is exquisitely tender on palpation. TSH is 0.1 mIU/L, free T4 is 3.2 ng/dL, and ESR is 85 mm/hr. Radioactive iodine uptake is very low (2%).",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Subacute granulomatous (de Quervain) thyroiditis",
        "Toxic multinodular goiter",
        "Graves disease",
        "Hashimoto thyroiditis",
        "Thyroid lymphoma"
      ],
      "correctIndex": 0,
      "explanation": "Subacute granulomatous thyroiditis (de Quervain thyroiditis) is a self-limited inflammatory thyroid condition, typically following viral upper respiratory infection. Characteristic features include jaw pain, tender thyroid, elevated ESR, transient thyrotoxicosis (from release of preformed hormone from damaged follicles), and very low radioactive iodine uptake (damaged follicles cannot trap iodine).",
      "optionExplanations": [
        "Correct. De Quervain thyroiditis classically presents with painful thyroid post-viral illness, elevated ESR, transient thyrotoxicosis, and very low RAIU.",
        "Incorrect. Toxic multinodular goiter shows patchy increased uptake on RAIU scan and is not associated with tender thyroid or post-viral illness.",
        "Incorrect. Graves disease has HIGH radioactive iodine uptake (diffuse), not low uptake, and the thyroid is typically nontender.",
        "Incorrect. Hashimoto thyroiditis causes hypothyroidism, not thyrotoxicosis, and the thyroid is typically nontender.",
        "Incorrect. Thyroid lymphoma presents as a rapidly enlarging thyroid mass in patients with Hashimoto thyroiditis, not with post-viral tender thyroid."
      ],
      "highYieldPoint": "De Quervain thyroiditis: painful thyroid post-viral, elevated ESR, low RAIU (damaged follicles), self-limited thyrotoxicosis → hypothyroidism → recovery."
    },
    {
      "vignette": "A 55-year-old woman undergoes thyroid function testing and is found to have a TSH of 0.2 mIU/L and a free T4 of 1.1 ng/dL (normal). Free T3 is 280 ng/dL (elevated, normal 80-200 ng/dL). She has symptoms of palpitations and unintentional weight loss.",
      "question": "Which of the following best describes this patient's thyroid function status?",
      "options": [
        "Subclinical hypothyroidism",
        "T3 thyrotoxicosis",
        "Euthyroid sick syndrome",
        "Central hypothyroidism",
        "Thyroid hormone resistance"
      ],
      "correctIndex": 1,
      "explanation": "T3 thyrotoxicosis occurs when T3 is disproportionately elevated while T4 remains normal. TSH is suppressed due to the elevated T3 providing negative feedback. This can occur early in Graves disease, with toxic nodules, or during early relapse of hyperthyroidism. It underscores the importance of checking both free T4 and free T3 when thyrotoxicosis is suspected.",
      "optionExplanations": [
        "Incorrect. Subclinical hypothyroidism shows elevated TSH with normal T4/T3, the opposite of this presentation.",
        "Correct. T3 thyrotoxicosis: suppressed TSH, normal free T4, but elevated T3 causing clinical thyrotoxicosis symptoms.",
        "Incorrect. Euthyroid sick syndrome (nonthyroidal illness) typically shows low T3 with normal or low TSH, not elevated T3 with suppressed TSH.",
        "Incorrect. Central hypothyroidism shows low TSH with low T4/T3 due to pituitary or hypothalamic disease.",
        "Incorrect. Thyroid hormone resistance typically shows elevated T4 and T3 with inappropriately normal or elevated TSH."
      ],
      "highYieldPoint": "T3 thyrotoxicosis: low TSH + normal T4 + elevated T3. Always check T3 when TSH is suppressed but T4 is normal."
    },
    {
      "vignette": "A 28-year-old woman at 12 weeks gestation presents with palpitations, anxiety, and hand tremors. TSH is undetectable and free T4 is elevated. Thyroid ultrasound shows a diffusely enlarged thyroid with increased vascularity. Her physician decides to start antithyroid drug therapy.",
      "question": "Which of the following is the preferred antithyroid drug for this patient during the first trimester of pregnancy?",
      "options": [
        "Methimazole",
        "Propylthiouracil (PTU)",
        "Saturated solution of potassium iodide",
        "Radioactive iodine ablation",
        "Propranolol"
      ],
      "correctIndex": 1,
      "explanation": "PTU is the preferred antithyroid drug during the first trimester of pregnancy because methimazole is associated with teratogenic effects including aplasia cutis and choanal/esophageal atresia. After the first trimester, methimazole is preferred because PTU carries a risk of hepatotoxicity. RAI is absolutely contraindicated in pregnancy.",
      "optionExplanations": [
        "Incorrect. Methimazole is teratogenic in the first trimester (aplasia cutis, choanal atresia); it may be used in the second and third trimesters.",
        "Correct. PTU is preferred in the first trimester due to methimazole's teratogenicity; PTU also does not cross the placenta as readily.",
        "Incorrect. SSKI can temporarily reduce thyroid hormone release but is not used as primary therapy and can cause fetal goiter.",
        "Incorrect. Radioactive iodine is absolutely contraindicated in pregnancy as it can destroy the fetal thyroid gland.",
        "Incorrect. Propranolol helps control adrenergic symptoms but does not address the underlying thyroid hormone excess."
      ],
      "highYieldPoint": "Pregnancy hyperthyroidism: PTU in 1st trimester (methimazole is teratogenic), switch to methimazole in 2nd/3rd trimester (PTU hepatotoxicity risk). RAI is contraindicated."
    },
    {
      "vignette": "A 50-year-old woman has a 2 cm thyroid nodule discovered incidentally on carotid ultrasound. Fine needle aspiration biopsy shows papillary structures with Orphan Annie eye nuclei, nuclear grooves, and intranuclear inclusions. Psammoma bodies are also identified.",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Follicular thyroid carcinoma",
        "Papillary thyroid carcinoma",
        "Anaplastic thyroid carcinoma",
        "Medullary thyroid carcinoma",
        "Benign follicular adenoma"
      ],
      "correctIndex": 1,
      "explanation": "Papillary thyroid carcinoma is the most common thyroid malignancy (~80%). Classic histologic features include Orphan Annie eye nuclei (optically clear, ground-glass nuclei), nuclear grooves, intranuclear cytoplasmic inclusions, and psammoma bodies (concentric laminated calcifications). It spreads via lymphatics and has excellent prognosis.",
      "optionExplanations": [
        "Incorrect. Follicular thyroid carcinoma is diagnosed by capsular or vascular invasion and cannot be reliably distinguished from follicular adenoma by FNA alone.",
        "Correct. Papillary thyroid carcinoma features Orphan Annie eye nuclei, nuclear grooves, intranuclear inclusions, and psammoma bodies.",
        "Incorrect. Anaplastic thyroid carcinoma shows undifferentiated, pleomorphic cells and is extremely aggressive in elderly patients.",
        "Incorrect. Medullary thyroid carcinoma arises from parafollicular C cells, shows amyloid deposits (from calcitonin), and is associated with MEN2.",
        "Incorrect. Follicular adenoma is benign and lacks the nuclear features (Orphan Annie eyes, grooves, inclusions) described here."
      ],
      "highYieldPoint": "Papillary thyroid cancer: most common; Orphan Annie eyes, psammoma bodies, nuclear grooves; lymphatic spread; excellent prognosis."
    },
    {
      "vignette": "A 60-year-old woman with a history of Hashimoto thyroiditis presents with a rapidly enlarging neck mass over 3 weeks. The mass is hard, fixed, and causes dysphagia and hoarseness. Biopsy reveals a diffuse large B-cell lymphoma.",
      "question": "Which of the following is the strongest predisposing factor for the development of this malignancy in the thyroid?",
      "options": [
        "Prior radiation exposure to the neck",
        "Iodine deficiency",
        "Chronic Hashimoto thyroiditis",
        "Family history of thyroid cancer",
        "Longstanding multinodular goiter"
      ],
      "correctIndex": 2,
      "explanation": "Primary thyroid lymphoma (usually diffuse large B-cell or MALT lymphoma) is strongly associated with pre-existing Hashimoto thyroiditis. The chronic lymphocytic infiltration and immune stimulation create a microenvironment conducive to lymphomatous transformation. Patients with Hashimoto thyroiditis have a 40-80 fold increased risk of thyroid lymphoma.",
      "optionExplanations": [
        "Incorrect. Prior radiation exposure is a risk factor for papillary thyroid carcinoma, not lymphoma.",
        "Incorrect. Iodine deficiency is a risk factor for follicular thyroid carcinoma and endemic goiter.",
        "Correct. Hashimoto thyroiditis dramatically increases the risk of thyroid lymphoma (40-80 fold) through chronic immune stimulation.",
        "Incorrect. Family history is relevant for papillary and medullary thyroid carcinoma but is not the primary risk factor for thyroid lymphoma.",
        "Incorrect. Multinodular goiter can harbor thyroid carcinoma but is not a recognized risk factor for thyroid lymphoma."
      ],
      "highYieldPoint": "Thyroid lymphoma: almost always arises in background of Hashimoto thyroiditis. Rapidly enlarging mass. Most common type: diffuse large B-cell lymphoma."
    },
    {
      "vignette": "A 35-year-old man is found to have a serum TSH of 8.5 mIU/L with a normal free T4 of 1.2 ng/dL. He is asymptomatic. Anti-TPO antibodies are positive. His lipid panel and cardiovascular risk assessment are normal.",
      "question": "What is the most appropriate next step in management?",
      "options": [
        "Start levothyroxine immediately",
        "Order radioactive iodine uptake scan",
        "Repeat TSH in 6-12 weeks and monitor",
        "Refer for thyroidectomy",
        "Start methimazole"
      ],
      "correctIndex": 2,
      "explanation": "This patient has subclinical hypothyroidism (elevated TSH with normal free T4). Current guidelines recommend confirming the diagnosis with repeat testing in 6-12 weeks before initiating treatment, as TSH elevations can be transient. Treatment with levothyroxine is generally recommended when TSH is persistently >10 mIU/L or if the patient is symptomatic or pregnant.",
      "optionExplanations": [
        "Incorrect. Starting levothyroxine without confirming persistent elevation and in an asymptomatic patient with TSH <10 is premature.",
        "Incorrect. RAIU scan is used for hyperthyroidism workup, not subclinical hypothyroidism.",
        "Correct. Subclinical hypothyroidism requires confirmation with repeat TSH before deciding on treatment; many cases are transient.",
        "Incorrect. Thyroidectomy has no role in the management of subclinical hypothyroidism.",
        "Incorrect. Methimazole is an antithyroid drug used for hyperthyroidism, not hypothyroidism."
      ],
      "highYieldPoint": "Subclinical hypothyroidism: elevated TSH + normal T4. Confirm with repeat TSH. Treat if TSH >10, symptoms present, or pregnant."
    },
    {
      "vignette": "A 40-year-old woman with Graves disease treated with methimazole for 2 years presents with sore throat, fever of 39.5°C, and malaise. CBC reveals WBC of 900/µL with an absolute neutrophil count of 100/µL. She appears ill and has oral ulcerations.",
      "question": "Which of the following is the most likely cause of this patient's acute presentation?",
      "options": [
        "Graves disease-associated aplastic anemia",
        "Viral thyroiditis causing pancytopenia",
        "Methimazole-induced agranulocytosis",
        "Lymphoma arising from chronic autoimmune thyroiditis",
        "Sepsis from untreated hyperthyroidism"
      ],
      "correctIndex": 2,
      "explanation": "Agranulocytosis is a rare but serious adverse effect of thionamide antithyroid drugs (methimazole and PTU), occurring in approximately 0.1-0.5% of patients. It typically presents with severe neutropenia (ANC <500/µL), fever, sore throat, and oral ulcerations. The drug must be immediately discontinued and the patient should receive broad-spectrum antibiotics.",
      "optionExplanations": [
        "Incorrect. Graves disease is not associated with aplastic anemia; the presentation is clearly drug-related.",
        "Incorrect. Viral thyroiditis does not typically cause pancytopenia or isolated severe neutropenia.",
        "Correct. Methimazole-induced agranulocytosis is a known serious adverse effect presenting with severe neutropenia, fever, and infection.",
        "Incorrect. Thyroid lymphoma presents as a thyroid mass, not as isolated severe neutropenia.",
        "Incorrect. Thyroid storm from untreated hyperthyroidism causes tachycardia, fever, and altered mental status but not agranulocytosis."
      ],
      "highYieldPoint": "Thionamide agranulocytosis: rare but life-threatening; presents with sore throat, fever, ANC <500. Immediately stop drug, start antibiotics."
    },
    {
      "vignette": "A newborn is found to have an elevated TSH on routine newborn screening. The baby appears lethargic with prolonged jaundice, a large fontanelle, macroglossia, and an umbilical hernia. Free T4 is low.",
      "question": "If left untreated, which of the following is the most serious long-term consequence of this condition?",
      "options": [
        "Thyroid carcinoma",
        "Osteoporosis",
        "Autoimmune polyendocrine syndrome",
        "Irreversible intellectual disability",
        "Precocious puberty"
      ],
      "correctIndex": 3,
      "explanation": "Congenital hypothyroidism, if untreated, causes cretinism with severe, irreversible intellectual disability because thyroid hormones are critical for brain development, particularly myelination and neuronal migration, during the first 2-3 years of life. Early detection through newborn screening and prompt levothyroxine treatment prevents these devastating consequences.",
      "optionExplanations": [
        "Incorrect. Congenital hypothyroidism does not predispose to thyroid carcinoma.",
        "Incorrect. While hypothyroidism can affect bone metabolism, the most serious untreated consequence is neurodevelopmental.",
        "Incorrect. Autoimmune polyendocrine syndrome is genetically determined and unrelated to congenital hypothyroidism.",
        "Correct. Untreated congenital hypothyroidism causes irreversible intellectual disability (cretinism) due to impaired brain development.",
        "Incorrect. Severe untreated hypothyroidism delays puberty, not causes precocious puberty."
      ],
      "highYieldPoint": "Congenital hypothyroidism: newborn screening mandatory; untreated → irreversible intellectual disability (cretinism). Treat with levothyroxine immediately."
    },
    {
      "vignette": "A 62-year-old woman with atrial fibrillation presents with sudden onset of high fever (40.5°C), extreme tachycardia (HR 160 bpm), agitation, delirium, vomiting, and diarrhea. She reports running out of her methimazole 2 weeks ago. On examination, she has a diffuse goiter and lid lag.",
      "question": "Which of the following is the correct sequence of medications in the acute management of this condition?",
      "options": [
        "Methimazole → propranolol → hydrocortisone → saturated potassium iodide",
        "Radioactive iodine → methimazole → propranolol → corticosteroids",
        "Levothyroxine → propranolol → aspirin → acetaminophen",
        "Propranolol → PTU → hydrocortisone → saturated potassium iodide",
        "Saturated potassium iodide → methimazole → propranolol → hydrocortisone"
      ],
      "correctIndex": 3,
      "explanation": "This is thyroid storm, a life-threatening thyrotoxic crisis. Management follows a specific sequence: (1) Beta-blocker (propranolol — also inhibits peripheral T4→T3 conversion), (2) Thionamide (PTU preferred — blocks new synthesis AND peripheral conversion), (3) Glucocorticoids (hydrocortisone — blocks T4→T3 conversion, treats relative adrenal insufficiency), (4) Iodine (SSKI — given at least 1 hour AFTER thionamide to block hormone release via Wolff-Chaikoff effect without fueling new synthesis).",
      "optionExplanations": [
        "Incorrect. The sequence matters: iodine must be given AFTER the thionamide, not before; also PTU is preferred over methimazole in thyroid storm.",
        "Incorrect. RAI is absolutely contraindicated in acute thyroid storm.",
        "Incorrect. Levothyroxine would worsen thyrotoxicosis; aspirin is contraindicated as it displaces T4 from binding proteins.",
        "Correct. Propranolol → PTU → hydrocortisone → SSKI (iodine given ≥1 hour after thionamide) is the correct sequence for thyroid storm management.",
        "Incorrect. Iodine must NEVER be given before the thionamide, as it can provide substrate for more hormone synthesis (Jod-Basedow effect)."
      ],
      "highYieldPoint": "Thyroid storm treatment sequence: Beta-blocker → PTU → Glucocorticoids → Iodine (≥1 hr after PTU). PTU preferred (blocks T4→T3 conversion)."
    },
    {
      "vignette": "A 45-year-old woman presents with a 1.5 cm cold nodule on thyroid scintigraphy. FNA cytology is reported as Bethesda category III (atypia of undetermined significance). Thyroid function tests are normal.",
      "question": "Which of the following is the most appropriate next step in management?",
      "options": [
        "Total thyroidectomy",
        "Observation with annual ultrasound",
        "Radioactive iodine ablation",
        "Repeat FNA in 6-12 weeks",
        "External beam radiation"
      ],
      "correctIndex": 3,
      "explanation": "Bethesda category III (atypia of undetermined significance/follicular lesion of undetermined significance) has a 10-30% malignancy risk. The recommended next step is repeat FNA in 6-12 weeks, molecular testing (e.g., Afirma, ThyroSeq), or diagnostic lobectomy. Repeat FNA is typically attempted first as it reclassifies many lesions.",
      "optionExplanations": [
        "Incorrect. Total thyroidectomy is too aggressive for Bethesda III; a diagnostic lobectomy may be considered after repeat FNA if suspicion remains.",
        "Incorrect. Observation alone is appropriate for Bethesda II (benign) nodules, not Bethesda III with 10-30% malignancy risk.",
        "Incorrect. RAI ablation is used therapeutically after thyroidectomy for differentiated thyroid cancer, not for diagnosis.",
        "Correct. Repeat FNA in 6-12 weeks is the standard approach for Bethesda III lesions to attempt reclassification.",
        "Incorrect. External beam radiation has no role in the workup of an indeterminate thyroid nodule."
      ],
      "highYieldPoint": "Bethesda III (AUS/FLUS): ~10-30% malignancy risk → repeat FNA, molecular testing, or diagnostic lobectomy. Bethesda II (benign): observe."
    },
    {
      "vignette": "A 50-year-old man presents with a hard, fixed thyroid mass and hoarseness. FNA reveals spindle cells and giant cells with extensive necrosis. The tumor stains negative for thyroglobulin and calcitonin. The patient has a history of longstanding multinodular goiter.",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Papillary thyroid carcinoma",
        "Follicular thyroid carcinoma",
        "Medullary thyroid carcinoma",
        "Thyroid lymphoma",
        "Anaplastic thyroid carcinoma"
      ],
      "correctIndex": 4,
      "explanation": "Anaplastic thyroid carcinoma is the most aggressive thyroid malignancy, typically presenting in elderly patients with a rapidly enlarging, hard, fixed mass causing compressive symptoms (hoarseness from recurrent laryngeal nerve invasion). Histology shows undifferentiated spindle and giant cells with necrosis. It is negative for thyroglobulin (dedifferentiated). It often arises from pre-existing differentiated thyroid cancer or longstanding goiter.",
      "optionExplanations": [
        "Incorrect. Papillary carcinoma shows Orphan Annie eyes, psammoma bodies, and is thyroglobulin-positive.",
        "Incorrect. Follicular carcinoma shows capsular/vascular invasion and is thyroglobulin-positive.",
        "Incorrect. Medullary carcinoma would be calcitonin-positive (C-cell origin) and show amyloid deposits.",
        "Incorrect. Thyroid lymphoma shows lymphoid cells and arises in Hashimoto thyroiditis background, not multinodular goiter.",
        "Correct. Anaplastic carcinoma: undifferentiated, thyroglobulin-negative, aggressive with spindle/giant cells, often from pre-existing goiter."
      ],
      "highYieldPoint": "Anaplastic thyroid carcinoma: most aggressive, elderly patients, undifferentiated, thyroglobulin-negative, often arises from pre-existing thyroid disease."
    },
    {
      "vignette": "A 30-year-old woman with known Graves disease who is 8 weeks pregnant asks about the risks to her fetus. She is currently taking PTU. Her TSI levels are markedly elevated.",
      "question": "Which of the following fetal complications is most directly caused by transplacental passage of thyroid-stimulating immunoglobulins?",
      "options": [
        "Fetal hypothyroidism",
        "Fetal goiter from PTU",
        "Fetal growth restriction from iodine deficiency",
        "Congenital heart defects",
        "Neonatal Graves disease (thyrotoxicosis)"
      ],
      "correctIndex": 4,
      "explanation": "TSI (IgG class) crosses the placenta and can stimulate the fetal thyroid, causing neonatal Graves disease (neonatal thyrotoxicosis). This typically manifests shortly after birth with tachycardia, irritability, poor feeding, and goiter. The condition is usually self-limited as maternal TSI is cleared from the neonatal circulation over weeks.",
      "optionExplanations": [
        "Incorrect. Fetal hypothyroidism could result from maternal thionamide crossing the placenta, not from TSI which stimulates thyroid function.",
        "Incorrect. While PTU does cross the placenta and can cause fetal hypothyroidism/goiter, the question asks about TSI specifically.",
        "Incorrect. Iodine deficiency is unrelated to TSI and more relevant in endemic goiter areas.",
        "Incorrect. Congenital heart defects are not directly caused by TSI transplacental passage.",
        "Correct. TSI (IgG) crosses the placenta and stimulates the fetal thyroid, causing neonatal thyrotoxicosis."
      ],
      "highYieldPoint": "Neonatal Graves disease: TSI (IgG) crosses placenta → fetal thyrotoxicosis. Self-limited as maternal antibodies are cleared from neonate."
    },
    {
      "vignette": "A 48-year-old woman is found to have a serum calcium of 11.8 mg/dL during routine workup. Further testing reveals elevated calcitonin levels of 450 pg/mL (normal <10 pg/mL). Thyroid ultrasound shows a 1.2 cm nodule in the upper third of the right thyroid lobe. FNA shows nests of cells in an amyloid stroma.",
      "question": "Which genetic test should be performed in this patient?",
      "options": [
        "BRAF V600E mutation analysis",
        "PAX8-PPARγ rearrangement",
        "RAS mutation panel",
        "TP53 mutation analysis",
        "RET proto-oncogene mutation"
      ],
      "correctIndex": 4,
      "explanation": "Medullary thyroid carcinoma (MTC) arises from parafollicular C cells and produces calcitonin. Amyloid deposits (derived from calcitonin) are characteristic. Approximately 25% of MTC cases are hereditary, associated with MEN2A (MTC + pheochromocytoma + hyperparathyroidism) or MEN2B (MTC + pheochromocytoma + mucosal neuromas). All patients with MTC should be tested for RET proto-oncogene germline mutations.",
      "optionExplanations": [
        "Incorrect. BRAF mutations are associated with papillary thyroid carcinoma, not medullary carcinoma.",
        "Incorrect. PAX8-PPARγ rearrangements are found in follicular thyroid carcinoma.",
        "Incorrect. RAS mutations are found in follicular thyroid carcinoma and follicular variant of papillary carcinoma.",
        "Incorrect. TP53 mutations are associated with anaplastic thyroid carcinoma.",
        "Correct. RET proto-oncogene testing is mandatory for all MTC patients to identify hereditary forms (MEN2A, MEN2B, familial MTC)."
      ],
      "highYieldPoint": "Medullary thyroid carcinoma: C-cell origin, calcitonin + amyloid; always test for RET mutations (MEN2A, MEN2B). 25% hereditary."
    }
  ],
  "Adrenal disease": [
    {
      "vignette": "A 38-year-old woman presents with central obesity, moon facies, dorsocervical fat pad, purple striae wider than 1 cm, and proximal muscle weakness. She takes no exogenous steroids. A 24-hour urine free cortisol is 4 times the upper limit of normal. Morning ACTH level is 85 pg/mL (elevated). Low-dose dexamethasone suppression test fails to suppress cortisol. High-dose dexamethasone suppression test suppresses cortisol by 60%.",
      "question": "Which of the following is the best next step to confirm the source of ACTH production?",
      "options": [
        "Inferior petrosal sinus sampling",
        "CT of the chest",
        "Adrenal venous sampling",
        "PET/CT scan",
        "Repeat 24-hour urine cortisol"
      ],
      "correctIndex": 0,
      "explanation": "When high-dose dexamethasone suppression and ACTH levels suggest Cushing disease (pituitary source), inferior petrosal sinus sampling (IPSS) is the gold standard to differentiate pituitary from ectopic ACTH secretion, especially when MRI is inconclusive. A central-to-peripheral ACTH gradient >2:1 (or >3:1 after CRH stimulation) confirms a pituitary source.",
      "optionExplanations": [
        "Correct. IPSS is the gold standard for distinguishing pituitary from ectopic ACTH production, with sensitivity >95%.",
        "Incorrect. CT chest is used to localize ectopic ACTH sources (bronchial carcinoid, small cell lung cancer) but is premature before establishing ectopic vs. pituitary origin.",
        "Incorrect. Adrenal venous sampling is used for primary aldosteronism workup to lateralize aldosterone-producing adenomas, not Cushing syndrome.",
        "Incorrect. PET/CT may be useful for localizing ectopic ACTH sources but is not the standard next step for confirming pituitary origin.",
        "Incorrect. The diagnosis of hypercortisolism is already established; repeating urine cortisol provides no additional diagnostic value."
      ],
      "highYieldPoint": "Inferior petrosal sinus sampling (IPSS): gold standard to confirm pituitary vs. ectopic ACTH. Central:peripheral ratio >2:1 (>3:1 with CRH) = pituitary."
    },
    {
      "vignette": "A 32-year-old woman presents with progressive fatigue, weight loss, hyperpigmentation of skin creases and buccal mucosa, and orthostatic hypotension. Laboratory studies show sodium of 128 mEq/L, potassium of 5.8 mEq/L, and glucose of 62 mg/dL. Morning cortisol is 2.1 µg/dL.",
      "question": "Which of the following is the most likely cause of this patient's hyperpigmentation?",
      "options": [
        "Elevated ACTH due to loss of cortisol negative feedback",
        "Increased deposition of hemosiderin in the skin",
        "Elevated melanocyte-stimulating hormone from adrenal gland",
        "Direct effect of aldosterone deficiency on melanocytes",
        "Autoimmune destruction of melanocytes"
      ],
      "correctIndex": 0,
      "explanation": "In primary adrenal insufficiency (Addison disease), cortisol deficiency removes negative feedback on the hypothalamic-pituitary axis. This leads to increased ACTH secretion, which is derived from the same precursor molecule (proopiomelanocortin, POMC) as melanocyte-stimulating hormone (MSH). Elevated ACTH and co-secreted MSH stimulate melanocytes, causing hyperpigmentation, especially in skin creases, buccal mucosa, and scars.",
      "optionExplanations": [
        "Correct. Loss of cortisol negative feedback → elevated ACTH and co-secreted MSH (both from POMC) → melanocyte stimulation → hyperpigmentation.",
        "Incorrect. Hemosiderin deposition causes a bronze discoloration in hemochromatosis, not the mucosal and skin crease hyperpigmentation pattern seen here.",
        "Incorrect. MSH is not produced by the adrenal gland; it is co-secreted with ACTH from the anterior pituitary (both from POMC).",
        "Incorrect. Aldosterone deficiency causes hyponatremia and hyperkalemia but does not directly affect melanocyte activity.",
        "Incorrect. Autoimmune melanocyte destruction causes vitiligo (depigmentation), not hyperpigmentation."
      ],
      "highYieldPoint": "Addison disease hyperpigmentation: low cortisol → loss of feedback → high ACTH (from POMC, which also yields MSH) → melanocyte stimulation."
    },
    {
      "vignette": "A 52-year-old man with hypertension resistant to three-drug therapy is found to have hypokalemia (K+ 2.9 mEq/L) and metabolic alkalosis. Plasma aldosterone is 28 ng/dL and plasma renin activity is suppressed at 0.2 ng/mL/hr (aldosterone-to-renin ratio >30). CT abdomen shows a 1.8 cm left adrenal adenoma.",
      "question": "Which of the following best explains the metabolic alkalosis in this patient?",
      "options": [
        "Aldosterone-mediated increase in H+ secretion by intercalated cells",
        "Increased proximal tubular bicarbonate reabsorption due to volume contraction",
        "Direct stimulation of carbonic anhydrase by cortisol excess",
        "Hyperventilation from catecholamine excess",
        "Thiazide diuretic-induced contraction alkalosis"
      ],
      "correctIndex": 0,
      "explanation": "Primary hyperaldosteronism (Conn syndrome) causes metabolic alkalosis through aldosterone's action on principal cells (Na+ reabsorption, K+ secretion) and alpha-intercalated cells (H+ secretion via H+/K+-ATPase) in the collecting duct. Increased H+ excretion generates new bicarbonate, producing metabolic alkalosis. The concurrent hypokalemia further promotes H+ secretion (K+/H+ exchange).",
      "optionExplanations": [
        "Correct. Aldosterone stimulates H+ secretion by alpha-intercalated cells in the collecting duct, generating new bicarbonate and metabolic alkalosis.",
        "Incorrect. While volume contraction can cause contraction alkalosis, primary aldosteronism causes volume expansion, not contraction.",
        "Incorrect. Cortisol excess can cause metabolic alkalosis through mineralocorticoid effects, but this patient has primary aldosterone excess, not cortisol excess.",
        "Incorrect. Catecholamine excess (pheochromocytoma) causes respiratory alkalosis from hyperventilation, not the metabolic alkalosis seen here.",
        "Incorrect. The patient is on three-drug antihypertensive therapy, but the alkalosis is from aldosterone excess, not diuretic use."
      ],
      "highYieldPoint": "Conn syndrome: hypertension + hypokalemia + metabolic alkalosis. Aldosterone → Na+ reabsorption, K+ and H+ secretion in collecting duct."
    },
    {
      "vignette": "A 44-year-old man is brought to the emergency department in shock after a stressful surgical procedure. He has known bilateral adrenal metastases from lung cancer. Blood pressure is 70/40 mmHg despite IV fluids. He is confused and diaphoretic. Random serum cortisol is 1.5 µg/dL.",
      "question": "Which of the following is the most appropriate immediate treatment?",
      "options": [
        "Oral fludrocortisone",
        "IV hydrocortisone",
        "IV dexamethasone",
        "Oral prednisone",
        "IM ACTH stimulation test followed by treatment"
      ],
      "correctIndex": 1,
      "explanation": "Acute adrenal crisis is a life-threatening emergency requiring immediate IV hydrocortisone (100 mg bolus then 50 mg q8h). Hydrocortisone is preferred because at high doses it provides both glucocorticoid and mineralocorticoid activity. Treatment should never be delayed for diagnostic testing. IV fluids with dextrose (for hypoglycemia) are also essential.",
      "optionExplanations": [
        "Incorrect. Oral fludrocortisone provides mineralocorticoid replacement but is inadequate alone in acute crisis and cannot be given to a patient in shock who may not absorb oral medications.",
        "Correct. IV hydrocortisone is the first-line treatment for adrenal crisis, providing both glucocorticoid and mineralocorticoid effects at stress doses.",
        "Incorrect. While dexamethasone is sometimes used when cortisol levels need to be measured simultaneously (it doesn't interfere with the cortisol assay), hydrocortisone is preferred in acute crisis because it has mineralocorticoid activity.",
        "Incorrect. Oral prednisone is inappropriate in a critically ill patient who needs IV therapy and may not absorb oral medications.",
        "Incorrect. Performing an ACTH stimulation test before treating would dangerously delay life-saving therapy in this critically ill patient."
      ],
      "highYieldPoint": "Adrenal crisis: IV hydrocortisone 100 mg bolus immediately + IV fluids. Never delay treatment for diagnostic testing."
    },
    {
      "vignette": "A 6-day-old female infant presents with ambiguous genitalia, including clitoromegaly and fusion of the labioscrotal folds. She is feeding poorly and vomiting. Serum sodium is 118 mEq/L and potassium is 7.2 mEq/L. Karyotype is 46,XX. 17-hydroxyprogesterone level is markedly elevated.",
      "question": "Which enzyme deficiency is most likely responsible for this infant's presentation?",
      "options": [
        "11β-hydroxylase",
        "21-hydroxylase",
        "17α-hydroxylase",
        "3β-hydroxysteroid dehydrogenase",
        "Aromatase"
      ],
      "correctIndex": 1,
      "explanation": "21-hydroxylase deficiency is the most common cause of congenital adrenal hyperplasia (CAH), accounting for >90% of cases. It blocks cortisol and aldosterone synthesis, causing salt-wasting (hyponatremia, hyperkalemia) and shunting of precursors (17-hydroxyprogesterone) into the androgen pathway, causing virilization of 46,XX females. Markedly elevated 17-hydroxyprogesterone is the diagnostic hallmark.",
      "optionExplanations": [
        "Incorrect. 11β-hydroxylase deficiency causes virilization but also hypertension (due to 11-deoxycorticosterone accumulation with mineralocorticoid activity), not salt-wasting.",
        "Correct. 21-hydroxylase deficiency: salt-wasting CAH with elevated 17-OHP, virilization of XX females, hyponatremia, and hyperkalemia.",
        "Incorrect. 17α-hydroxylase deficiency causes decreased sex steroids and cortisol but increased mineralocorticoids → hypertension, hypokalemia, and ambiguous genitalia in XY (not XX) individuals.",
        "Incorrect. 3β-HSD deficiency causes both glucocorticoid and mineralocorticoid deficiency with mild virilization, but 17-OHP is not as markedly elevated as in 21-hydroxylase deficiency.",
        "Incorrect. Aromatase deficiency prevents conversion of androgens to estrogens, causing virilization, but does not cause salt-wasting or elevated 17-OHP."
      ],
      "highYieldPoint": "21-hydroxylase deficiency: most common CAH (>90%); elevated 17-OHP; salt-wasting + virilization of XX females. Screen all newborns."
    },
    {
      "vignette": "A 55-year-old woman undergoes CT of the abdomen for unrelated reasons, revealing a 2.5 cm well-circumscribed, homogeneous, low-density (Hounsfield unit <10) left adrenal mass. She has no symptoms of hormone excess. Blood pressure is 128/78 mmHg. Serum electrolytes are normal.",
      "question": "Which of the following is the most important initial biochemical evaluation for this adrenal incidentaloma?",
      "options": [
        "24-hour urine cortisol only",
        "Plasma metanephrines and overnight dexamethasone suppression test",
        "Fine needle aspiration biopsy",
        "Adrenal venous sampling",
        "Serial CT imaging in 12 months"
      ],
      "correctIndex": 1,
      "explanation": "All adrenal incidentalomas ≥1 cm require biochemical evaluation to rule out functional tumors regardless of symptoms. The essential initial workup includes: (1) plasma fractionated metanephrines (pheochromocytoma — critical to exclude before any biopsy or surgery), (2) 1 mg overnight dexamethasone suppression test (autonomous cortisol secretion), and (3) aldosterone/renin ratio if hypertensive. CT characteristics (low density, <10 HU) suggest a benign adenoma.",
      "optionExplanations": [
        "Incorrect. Urine cortisol alone is insufficient; pheochromocytoma must also be excluded as it can be life-threatening if missed.",
        "Correct. All incidentalomas require screening for pheochromocytoma (plasma metanephrines) and cortisol excess (dexamethasone suppression test) at minimum.",
        "Incorrect. FNA biopsy should never be performed before excluding pheochromocytoma (risk of hypertensive crisis) and is rarely needed for characterizing adrenal masses.",
        "Incorrect. Adrenal venous sampling is used for lateralizing primary aldosteronism, not for evaluating incidentalomas.",
        "Incorrect. Imaging alone is insufficient; biochemical evaluation is mandatory before deciding on surveillance or surgery."
      ],
      "highYieldPoint": "Adrenal incidentaloma workup: always screen for pheochromocytoma (metanephrines), cortisol excess (DST), and aldosterone excess (if hypertensive)."
    },
    {
      "vignette": "A 28-year-old man presents with severe hypertension (BP 210/120 mmHg), hypokalemia, and metabolic alkalosis. Plasma aldosterone is markedly elevated and plasma renin activity is suppressed. CT shows bilateral adrenal hyperplasia without a discrete adenoma. Adrenal venous sampling shows no lateralization.",
      "question": "Which of the following is the most appropriate treatment for this patient?",
      "options": [
        "Bilateral adrenalectomy",
        "Unilateral laparoscopic adrenalectomy",
        "Spironolactone",
        "Ketoconazole",
        "Amiloride monotherapy"
      ],
      "correctIndex": 2,
      "explanation": "Bilateral idiopathic adrenal hyperplasia (IAH) is the most common cause of primary aldosteronism. Unlike aldosterone-producing adenoma (which is treated surgically with unilateral adrenalectomy), bilateral hyperplasia is managed medically with mineralocorticoid receptor antagonists. Spironolactone is the first-line agent, with eplerenone as an alternative if antiandrogen side effects occur.",
      "optionExplanations": [
        "Incorrect. Bilateral adrenalectomy would cause permanent adrenal insufficiency and is not performed for bilateral hyperplasia.",
        "Incorrect. Unilateral adrenalectomy is appropriate for unilateral aldosterone-producing adenoma, not bilateral hyperplasia.",
        "Correct. Spironolactone (MR antagonist) is first-line medical therapy for bilateral idiopathic adrenal hyperplasia.",
        "Incorrect. Ketoconazole inhibits steroidogenesis and is sometimes used for Cushing syndrome, not primary aldosteronism.",
        "Incorrect. While amiloride (ENaC blocker) can help with hypokalemia, it does not address the underlying aldosterone excess as effectively as spironolactone."
      ],
      "highYieldPoint": "Primary aldosteronism: adenoma → unilateral adrenalectomy; bilateral hyperplasia → spironolactone (or eplerenone)."
    },
    {
      "vignette": "A 60-year-old man with small cell lung cancer presents with rapid-onset proximal muscle weakness, hypertension, hyperglycemia, and hypokalemia. His face appears plethoric but he has no obesity or striae. ACTH is markedly elevated at 350 pg/mL. Serum cortisol is extremely high. High-dose dexamethasone fails to suppress cortisol.",
      "question": "Which of the following best explains the absence of typical Cushingoid features in this patient despite markedly elevated cortisol?",
      "options": [
        "The cortisol is biologically inactive",
        "The patient has concurrent growth hormone deficiency",
        "The rapid onset prevents development of classic features like truncal obesity and striae",
        "The tumor is secreting a cortisol-binding protein",
        "The patient has developed glucocorticoid receptor resistance"
      ],
      "correctIndex": 2,
      "explanation": "Ectopic ACTH syndrome from small cell lung cancer causes rapid, severe hypercortisolism. Classic Cushingoid features (truncal obesity, moon facies, buffalo hump, wide striae) require prolonged cortisol exposure and take months to develop. In rapidly progressive ectopic ACTH syndrome, patients present instead with metabolic derangements (hypokalemia from mineralocorticoid effects of extreme cortisol, hyperglycemia, muscle weakness) without the typical body habitus changes.",
      "optionExplanations": [
        "Incorrect. The cortisol is biologically active, as evidenced by hyperglycemia, hypokalemia, and proximal myopathy.",
        "Incorrect. GH deficiency would not explain the absence of Cushingoid features.",
        "Correct. Classic Cushingoid body habitus requires chronic cortisol elevation; the rapid onset of ectopic ACTH syndrome does not allow time for these changes to develop.",
        "Incorrect. There is no evidence that ectopic ACTH tumors secrete cortisol-binding proteins.",
        "Incorrect. Glucocorticoid receptor resistance is a rare genetic condition and would not selectively affect only the adipose and skin manifestations."
      ],
      "highYieldPoint": "Ectopic ACTH (small cell lung cancer): rapid onset → hypokalemia, myopathy, hyperglycemia WITHOUT classic Cushingoid features (which need chronic exposure)."
    },
    {
      "vignette": "An 8-year-old boy presents with precocious puberty, hypertension, and hypokalemia. Laboratory studies show elevated 11-deoxycortisol and 11-deoxycorticosterone (DOC). Cortisol is low and ACTH is elevated. Testosterone is elevated. A CT shows bilateral adrenal hyperplasia.",
      "question": "Which enzyme is most likely deficient in this patient?",
      "options": [
        "21-hydroxylase",
        "17α-hydroxylase",
        "11β-hydroxylase",
        "3β-hydroxysteroid dehydrogenase",
        "Aldosterone synthase"
      ],
      "correctIndex": 2,
      "explanation": "11β-hydroxylase deficiency is the second most common cause of CAH. It blocks conversion of 11-deoxycortisol to cortisol and 11-deoxycorticosterone (DOC) to corticosterone. DOC accumulation causes hypertension and hypokalemia (DOC has mineralocorticoid activity). ACTH-driven precursor excess shunts into androgens, causing virilization and precocious puberty. Unlike 21-hydroxylase deficiency, these patients have hypertension (not salt-wasting).",
      "optionExplanations": [
        "Incorrect. 21-hydroxylase deficiency causes salt-wasting with hyponatremia and hyperkalemia, not hypertension and hypokalemia.",
        "Incorrect. 17α-hydroxylase deficiency causes hypertension and hypokalemia but with decreased androgens (causing ambiguous genitalia in XY, no virilization).",
        "Correct. 11β-hydroxylase deficiency: elevated 11-deoxycortisol and DOC → hypertension + hypokalemia + virilization.",
        "Incorrect. 3β-HSD deficiency causes salt-wasting and mild virilization in both sexes but not hypertension.",
        "Incorrect. Aldosterone synthase deficiency would cause salt-wasting without virilization."
      ],
      "highYieldPoint": "11β-hydroxylase deficiency: 2nd most common CAH; elevated DOC → hypertension + hypokalemia (opposite of 21-hydroxylase salt-wasting)."
    },
    {
      "vignette": "A 48-year-old woman on chronic prednisone therapy for rheumatoid arthritis (10 years) abruptly stops her medication. Two days later, she presents with profound weakness, nausea, abdominal pain, hypotension, and fever. Serum cortisol is undetectable.",
      "question": "Which of the following best explains the pathophysiology of this patient's presentation?",
      "options": [
        "Autoimmune destruction of the adrenal cortex",
        "Bilateral adrenal hemorrhage from coagulopathy",
        "Adrenal metastases from occult malignancy",
        "Chronic ACTH suppression leading to adrenal atrophy",
        "Acute pituitary infarction"
      ],
      "correctIndex": 3,
      "explanation": "Chronic exogenous glucocorticoid use suppresses ACTH secretion via negative feedback, leading to progressive atrophy of the zona fasciculata and zona reticularis of the adrenal cortex. Abrupt withdrawal of exogenous glucocorticoids in this setting causes acute adrenal insufficiency because the atrophied glands cannot mount an adequate cortisol response. Glucocorticoids must always be tapered gradually after prolonged use.",
      "optionExplanations": [
        "Incorrect. Autoimmune adrenalitis (most common cause of primary Addison disease) is not related to steroid withdrawal.",
        "Incorrect. Bilateral adrenal hemorrhage (Waterhouse-Friderichsen syndrome) occurs with meningococcal sepsis, not steroid withdrawal.",
        "Incorrect. Adrenal metastases cause gradual adrenal insufficiency and are unrelated to acute steroid withdrawal.",
        "Correct. Chronic glucocorticoid suppression of ACTH → adrenal atrophy → inability to produce cortisol when exogenous steroids are abruptly stopped.",
        "Incorrect. Pituitary infarction would cause panhypopituitarism but is unrelated to steroid withdrawal."
      ],
      "highYieldPoint": "Chronic exogenous glucocorticoids → ACTH suppression → adrenal atrophy. Always taper steroids gradually to avoid adrenal crisis."
    },
    {
      "vignette": "A 35-year-old man presents with episodic headaches, sweating, and anxiety. During an episode, his BP is 240/140 mmHg. Between episodes he is normotensive. 24-hour urine metanephrines are elevated. Genetic testing reveals a germline RET mutation. CT shows a 3 cm right adrenal mass and a suspicious left adrenal nodule.",
      "question": "Before addressing the adrenal tumors, which of the following conditions must be evaluated and treated first?",
      "options": [
        "Primary hyperparathyroidism",
        "Medullary thyroid carcinoma",
        "Marfanoid body habitus assessment",
        "The pheochromocytoma with alpha-blockade",
        "Mucosal neuroma biopsy"
      ],
      "correctIndex": 3,
      "explanation": "In MEN2A (RET mutation with pheochromocytoma + medullary thyroid carcinoma + primary hyperparathyroidism), pheochromocytoma must always be addressed FIRST before any other surgery, including thyroidectomy. This is because unresected pheochromocytoma can cause life-threatening catecholamine crisis during surgical procedures. Alpha-blockade (phenoxybenzamine) is initiated first, followed by surgical resection.",
      "optionExplanations": [
        "Incorrect. Hyperparathyroidism (part of MEN2A) is not immediately life-threatening and is addressed after pheochromocytoma.",
        "Incorrect. While MTC is part of MEN2A and requires thyroidectomy, surgery must not proceed until pheochromocytoma is medically and surgically managed.",
        "Incorrect. Marfanoid habitus is associated with MEN2B, not MEN2A. Regardless, pheochromocytoma takes priority.",
        "Correct. Pheochromocytoma must be addressed first in MEN syndromes to prevent catecholamine crisis during subsequent surgeries.",
        "Incorrect. Mucosal neuromas are a feature of MEN2B; this patient has MEN2A (RET mutation with pheo + likely MTC/hyperPTH)."
      ],
      "highYieldPoint": "MEN2A: MTC + pheochromocytoma + hyperparathyroidism. Always treat pheochromocytoma FIRST (prevent catecholamine crisis during other surgeries)."
    },
    {
      "vignette": "A 42-year-old woman presents with fatigue, nausea, and lightheadedness upon standing. She has type 1 diabetes mellitus and vitiligo. Morning cortisol is 2 µg/dL. An ACTH stimulation test shows cortisol of 5 µg/dL at 60 minutes (normal >18 µg/dL). ACTH is elevated at 250 pg/mL.",
      "question": "Which of the following is the most likely underlying cause of this patient's adrenal insufficiency?",
      "options": [
        "Bilateral adrenal metastases",
        "Congenital adrenal hyperplasia",
        "Adrenal tuberculosis",
        "Autoimmune adrenalitis (autoimmune polyglandular syndrome)",
        "Waterhouse-Friderichsen syndrome"
      ],
      "correctIndex": 3,
      "explanation": "This patient has primary adrenal insufficiency (elevated ACTH, failed cortisol stimulation) in the context of other autoimmune conditions (type 1 diabetes, vitiligo). Autoimmune adrenalitis is the most common cause of primary adrenal insufficiency (Addison disease) in developed countries, often occurring as part of autoimmune polyglandular syndrome type 2 (Addison disease + type 1 DM + autoimmune thyroid disease).",
      "optionExplanations": [
        "Incorrect. While adrenal metastases can cause adrenal insufficiency, the autoimmune disease context makes autoimmune adrenalitis far more likely.",
        "Incorrect. CAH presents in childhood with cortisol deficiency and androgen excess; it does not typically present at age 42 with new adrenal insufficiency.",
        "Incorrect. Adrenal TB is the most common cause of Addison disease in developing countries but unlikely given the autoimmune disease pattern here.",
        "Correct. Autoimmune adrenalitis in the setting of type 1 DM and vitiligo suggests autoimmune polyglandular syndrome type 2 (Schmidt syndrome).",
        "Incorrect. Waterhouse-Friderichsen syndrome is acute bilateral adrenal hemorrhage from meningococcal sepsis, not a chronic autoimmune condition."
      ],
      "highYieldPoint": "Autoimmune polyglandular syndrome type 2 (Schmidt syndrome): Addison disease + type 1 DM + autoimmune thyroid disease. Most common cause of Addison disease in developed world."
    },
    {
      "vignette": "A 29-year-old woman presents with hirsutism, acne, and oligomenorrhea. Laboratory studies show elevated DHEA-S, mildly elevated testosterone, normal 17-hydroxyprogesterone at baseline, but 17-OHP rises to 15 ng/mL (abnormal >10 ng/mL) after ACTH stimulation. Morning cortisol and electrolytes are normal.",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Polycystic ovary syndrome",
        "Cushing syndrome",
        "Classic salt-wasting 21-hydroxylase deficiency",
        "Adrenal androgen-secreting tumor",
        "Non-classic (late-onset) congenital adrenal hyperplasia"
      ],
      "correctIndex": 4,
      "explanation": "Non-classic (late-onset) 21-hydroxylase deficiency presents in adolescence or adulthood with hyperandrogenism (hirsutism, acne, oligomenorrhea) mimicking PCOS. Unlike classic CAH, there is no salt-wasting or cortisol deficiency. The diagnosis is confirmed by an exaggerated 17-OHP response to ACTH stimulation (baseline 17-OHP may be normal or mildly elevated, but post-stimulation >10 ng/mL is diagnostic).",
      "optionExplanations": [
        "Incorrect. PCOS is a common cause of hyperandrogenism but would not explain the exaggerated 17-OHP response to ACTH stimulation.",
        "Incorrect. Cushing syndrome presents with cortisol excess features, and the patient has normal cortisol.",
        "Incorrect. Classic salt-wasting CAH presents in infancy with ambiguous genitalia and electrolyte abnormalities, not in adulthood.",
        "Incorrect. Adrenal tumors typically cause markedly elevated DHEA-S and testosterone, and 17-OHP response to ACTH stimulation would be normal.",
        "Correct. Non-classic CAH: late-onset hyperandrogenism with exaggerated 17-OHP response to ACTH stimulation; normal cortisol and electrolytes."
      ],
      "highYieldPoint": "Non-classic (late-onset) CAH: mimics PCOS with hyperandrogenism; diagnose by ACTH-stimulated 17-OHP >10 ng/mL. No salt-wasting."
    },
    {
      "vignette": "A 3-year-old boy is brought to the emergency department with purpura, high fever, and hypotension. Blood cultures grow Neisseria meningitidis. Despite aggressive fluid resuscitation and antibiotics, he develops refractory shock. CT abdomen shows bilateral adrenal hemorrhage.",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Hemolytic uremic syndrome",
        "Disseminated intravascular coagulation only",
        "Pheochromocytoma crisis",
        "Sheehan syndrome",
        "Waterhouse-Friderichsen syndrome"
      ],
      "correctIndex": 4,
      "explanation": "Waterhouse-Friderichsen syndrome is acute bilateral adrenal hemorrhagic necrosis caused by overwhelming sepsis, most classically from Neisseria meningitidis (meningococcemia). The combination of DIC-induced hemorrhage and the high vascularity of the adrenals leads to bilateral hemorrhage and acute adrenal insufficiency. It presents with purpura fulminans, septic shock, and is often fatal without immediate stress-dose steroids.",
      "optionExplanations": [
        "Incorrect. HUS presents with microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury, typically after E. coli O157:H7 infection.",
        "Incorrect. While DIC is present, the key pathology is bilateral adrenal hemorrhage causing acute adrenal crisis — the complete syndrome is Waterhouse-Friderichsen.",
        "Incorrect. Pheochromocytoma crisis presents with severe hypertension, not adrenal hemorrhage from sepsis.",
        "Incorrect. Sheehan syndrome is postpartum pituitary ischemic necrosis, unrelated to sepsis.",
        "Correct. Waterhouse-Friderichsen syndrome: meningococcal sepsis → DIC → bilateral adrenal hemorrhage → acute adrenal crisis."
      ],
      "highYieldPoint": "Waterhouse-Friderichsen syndrome: meningococcal sepsis → DIC → bilateral adrenal hemorrhage → acute adrenal insufficiency. Often fatal."
    },
    {
      "vignette": "A 50-year-old woman with resistant hypertension, hypokalemia, and elevated aldosterone-to-renin ratio undergoes adrenal CT showing a 1.2 cm left adrenal nodule. Adrenal venous sampling confirms lateralization to the left adrenal.",
      "question": "Which of the following is the most appropriate definitive treatment?",
      "options": [
        "Bilateral adrenalectomy",
        "Spironolactone lifelong",
        "Eplerenone plus amiloride combination",
        "Radiofrequency ablation of the nodule",
        "Left laparoscopic adrenalectomy"
      ],
      "correctIndex": 4,
      "explanation": "When primary aldosteronism is caused by a unilateral aldosterone-producing adenoma (confirmed by adrenal venous sampling showing lateralization), laparoscopic adrenalectomy is the definitive treatment. Cure rates are high (>95% biochemical cure, 50-80% hypertension cure). Medical therapy with MR antagonists is reserved for bilateral disease or patients who are not surgical candidates.",
      "optionExplanations": [
        "Incorrect. Bilateral adrenalectomy is excessive when the source is unilateral and would cause permanent adrenal insufficiency.",
        "Incorrect. Lifelong spironolactone is appropriate for bilateral hyperplasia, not a lateralized adenoma amenable to surgical cure.",
        "Incorrect. Combination medical therapy is not preferred when a surgical cure is available for a lateralized adenoma.",
        "Incorrect. Radiofrequency ablation is not the standard treatment for aldosterone-producing adenoma.",
        "Correct. Laparoscopic adrenalectomy is the definitive treatment for a unilateral aldosterone-producing adenoma confirmed by adrenal venous sampling."
      ],
      "highYieldPoint": "Aldosterone-producing adenoma: confirm lateralization with adrenal venous sampling → unilateral laparoscopic adrenalectomy for definitive cure."
    }
  ],
  "Diabetes mellitus": [
    {
      "vignette": "A 12-year-old boy presents with a 3-week history of polyuria, polydipsia, and a 10-pound weight loss. He appears thin and dehydrated. Random blood glucose is 450 mg/dL. Urinalysis shows glucose 4+ and ketones 3+. Arterial blood gas reveals pH 7.18, pCO2 20 mmHg, and bicarbonate 8 mEq/L.",
      "question": "Which of the following is the most appropriate initial fluid therapy for this patient?",
      "options": [
        "0.9% normal saline",
        "D5W with 40 mEq/L KCl",
        "0.45% half-normal saline",
        "Lactated Ringer's solution with bicarbonate",
        "5% albumin colloid"
      ],
      "correctIndex": 0,
      "explanation": "The initial fluid in DKA management is isotonic 0.9% normal saline (NS) to address severe volume depletion and restore intravascular volume. The typical initial rate is 15-20 mL/kg/hr (or 1-1.5 L/hr in adults). After initial volume resuscitation (first 1-2 hours), the fluid is transitioned to 0.45% NS. Dextrose (D5) is added when glucose falls below 200-250 mg/dL to prevent hypoglycemia while continuing insulin to clear ketones.",
      "optionExplanations": [
        "Correct. Isotonic 0.9% NS is the initial fluid of choice in DKA to restore intravascular volume.",
        "Incorrect. Dextrose-containing fluids are not used initially in DKA when glucose is markedly elevated; they are added later when glucose falls below 200-250 mg/dL.",
        "Incorrect. Half-normal saline is used after the initial 1-2 hours of resuscitation with 0.9% NS, not as the first fluid.",
        "Incorrect. Routine bicarbonate administration is not recommended in DKA unless pH is <6.9; LR is not the initial fluid of choice.",
        "Incorrect. Colloids are not indicated for initial DKA resuscitation; crystalloid (NS) is the standard."
      ],
      "highYieldPoint": "DKA fluid protocol: Start 0.9% NS → switch to 0.45% NS after 1-2 hours → add D5 when glucose <200-250 mg/dL. Insulin drip throughout."
    },
    {
      "vignette": "A 65-year-old obese man with type 2 diabetes presents with profound confusion. Blood glucose is 980 mg/dL. Serum osmolality is 385 mOsm/kg. Arterial pH is 7.32 and bicarbonate is 20 mEq/L. Urinalysis shows glucose 4+ but only trace ketones.",
      "question": "Which of the following best distinguishes this patient's condition from diabetic ketoacidosis?",
      "options": [
        "Absence of significant ketoacidosis",
        "Presence of dehydration",
        "Higher blood glucose levels",
        "Requirement for insulin therapy",
        "Presence of neurologic symptoms"
      ],
      "correctIndex": 0,
      "explanation": "Hyperosmolar hyperglycemic state (HHS) is distinguished from DKA primarily by the absence of significant ketoacidosis (pH >7.30, bicarbonate >18 mEq/L, minimal ketones). In HHS, residual insulin secretion is sufficient to prevent lipolysis and ketogenesis but insufficient to control glucose. HHS typically has higher glucose (often >600 mg/dL), higher osmolality (>320 mOsm/kg), and greater dehydration than DKA.",
      "optionExplanations": [
        "Correct. The defining difference is that HHS has sufficient residual insulin to prevent significant ketogenesis, while DKA does not.",
        "Incorrect. Both DKA and HHS cause significant dehydration; this is not the key distinguishing feature.",
        "Incorrect. While HHS typically has higher glucose than DKA, high glucose alone does not define the distinction; DKA can also present with markedly elevated glucose.",
        "Incorrect. Both conditions require insulin therapy as part of management.",
        "Incorrect. While neurologic symptoms are more common in HHS (due to severe hyperosmolality), they can occur in DKA as well."
      ],
      "highYieldPoint": "HHS vs. DKA: HHS has residual insulin → no significant ketosis, higher glucose (>600), higher osmolality (>320). DKA: absolute insulin deficiency → ketoacidosis."
    },
    {
      "vignette": "A 55-year-old man with newly diagnosed type 2 diabetes has an HbA1c of 7.8%. He has a BMI of 32 and an eGFR of 85 mL/min. He has a history of heart failure with reduced ejection fraction (EF 35%). He takes lisinopril and carvedilol.",
      "question": "Which of the following is the most appropriate initial pharmacotherapy for glycemic control in this patient?",
      "options": [
        "Metformin plus an SGLT2 inhibitor",
        "Pioglitazone",
        "Glipizide",
        "Insulin glargine",
        "Sitagliptin"
      ],
      "correctIndex": 0,
      "explanation": "For patients with type 2 diabetes and established heart failure with reduced ejection fraction, current guidelines recommend metformin as first-line plus an SGLT2 inhibitor (empagliflozin, dapagliflozin) which has demonstrated reduction in HF hospitalizations and cardiovascular mortality independent of glycemic control. SGLT2 inhibitors provide cardiorenal benefits beyond glucose lowering.",
      "optionExplanations": [
        "Correct. Metformin + SGLT2 inhibitor is recommended for T2DM with HFrEF due to proven cardiovascular and renal benefits of SGLT2 inhibitors.",
        "Incorrect. Pioglitazone (TZD) is CONTRAINDICATED in heart failure as it causes fluid retention and worsens edema and HF.",
        "Incorrect. Sulfonylureas (glipizide) cause weight gain and hypoglycemia and have no cardiovascular benefit in HF.",
        "Incorrect. Insulin causes weight gain and is not first-line for T2DM with HbA1c 7.8%; it also does not provide the HF benefits of SGLT2 inhibitors.",
        "Incorrect. DPP-4 inhibitors (sitagliptin) are weight-neutral but saxagliptin has been associated with increased HF hospitalization risk; they do not provide the HF benefits of SGLT2 inhibitors."
      ],
      "highYieldPoint": "T2DM + heart failure: SGLT2 inhibitors (empagliflozin, dapagliflozin) reduce HF hospitalization and CV death. TZDs are contraindicated in HF."
    },
    {
      "vignette": "A 25-year-old woman with type 1 diabetes presents to the ER with DKA. Her initial potassium is 5.8 mEq/L. Insulin drip and IV fluids are initiated. Two hours later, potassium is 3.2 mEq/L and the ECG shows flattened T waves and U waves.",
      "question": "Which of the following best explains the rapid decline in serum potassium?",
      "options": [
        "Renal potassium wasting from osmotic diuresis",
        "Insulin-mediated transcellular shift of potassium into cells",
        "Correction of acidosis causing hydrogen-potassium exchange",
        "Dilutional hypokalemia from aggressive IV fluid resuscitation",
        "Aldosterone release triggered by volume repletion"
      ],
      "correctIndex": 1,
      "explanation": "In DKA, total body potassium is severely depleted despite initially normal or elevated serum levels (potassium shifts extracellularly due to insulin deficiency, acidosis, and hyperosmolality). When insulin therapy begins, it activates the Na+/K+-ATPase pump, driving potassium back into cells. This transcellular shift is the most rapid and significant cause of the potassium decline. K+ must be monitored closely and replaced aggressively during DKA treatment.",
      "optionExplanations": [
        "Incorrect. Osmotic diuresis contributes to total body K+ depletion but is not the primary cause of rapid K+ decline after insulin initiation.",
        "Correct. Insulin activates the Na+/K+-ATPase, rapidly shifting potassium intracellularly, which is the primary cause of the rapid K+ decline.",
        "Incorrect. Acidosis correction does contribute to K+ shift (H+ exits cells while K+ enters), but insulin's direct effect is the most significant.",
        "Incorrect. Dilution may play a minor role but cannot account for the magnitude and rapidity of the potassium change.",
        "Incorrect. Aldosterone-mediated renal K+ excretion is too slow to explain the rapid 2-hour decline."
      ],
      "highYieldPoint": "DKA: total body K+ depleted despite high serum K+. Insulin → K+ shifts intracellularly (Na+/K+-ATPase). Monitor K+ closely; replace if <5.3 before starting insulin."
    },
    {
      "vignette": "A 48-year-old woman with type 2 diabetes on metformin and glimepiride is found unresponsive at home. Her blood glucose is 32 mg/dL. EMS administers IV dextrose with improvement, but 2 hours later she becomes unresponsive again with glucose of 38 mg/dL.",
      "question": "Which of the following diabetes medications is most likely responsible for the recurrent hypoglycemia?",
      "options": [
        "Metformin",
        "Glimepiride",
        "Sitagliptin",
        "Empagliflozin",
        "Pioglitazone"
      ],
      "correctIndex": 1,
      "explanation": "Sulfonylureas (glimepiride, glyburide, glipizide) stimulate insulin secretion from pancreatic beta cells independent of glucose levels, causing a significant risk of hypoglycemia. Glimepiride has a long half-life (5-8 hours) and its active metabolites can cause prolonged, recurrent hypoglycemia lasting 24-72 hours. Patients often require prolonged dextrose infusion and monitoring.",
      "optionExplanations": [
        "Incorrect. Metformin reduces hepatic gluconeogenesis and increases insulin sensitivity but does not cause hypoglycemia when used alone.",
        "Correct. Glimepiride (sulfonylurea) causes glucose-independent insulin secretion with significant and potentially prolonged/recurrent hypoglycemia risk.",
        "Incorrect. DPP-4 inhibitors (sitagliptin) enhance incretin-mediated glucose-dependent insulin secretion and have low hypoglycemia risk.",
        "Incorrect. SGLT2 inhibitors (empagliflozin) lower glucose by increasing renal glucose excretion and carry very low hypoglycemia risk.",
        "Incorrect. TZDs (pioglitazone) improve insulin sensitivity and do not cause hypoglycemia when used alone."
      ],
      "highYieldPoint": "Sulfonylureas: stimulate insulin secretion regardless of glucose → hypoglycemia risk. Long-acting (glyburide, glimepiride) → prolonged/recurrent episodes."
    },
    {
      "vignette": "A 30-year-old woman with type 1 diabetes and good glycemic control (HbA1c 6.8%) presents with bloating, nausea, and early satiety after meals over the past year. She reports unpredictable blood glucose swings. Gastric emptying study shows significantly delayed emptying at 4 hours.",
      "question": "Which of the following best explains the pathophysiology of this patient's gastrointestinal symptoms?",
      "options": [
        "Celiac disease associated with type 1 diabetes",
        "Autonomic neuropathy affecting the vagus nerve",
        "Autoimmune gastritis with pernicious anemia",
        "Metformin-induced gastrointestinal side effects",
        "Small intestinal bacterial overgrowth"
      ],
      "correctIndex": 1,
      "explanation": "Diabetic gastroparesis is caused by autonomic (vagal) neuropathy affecting the enteric nervous system, leading to delayed gastric emptying. Even patients with good HbA1c can develop this complication, as it relates to cumulative glycemic exposure and nerve damage. Vagal nerve dysfunction impairs gastric motility, causing bloating, nausea, early satiety, and erratic blood glucose control due to unpredictable nutrient absorption.",
      "optionExplanations": [
        "Incorrect. While celiac disease is associated with type 1 diabetes, it causes diarrhea and malabsorption, not delayed gastric emptying.",
        "Correct. Diabetic gastroparesis results from vagal autonomic neuropathy causing impaired gastric motility and delayed emptying.",
        "Incorrect. Autoimmune gastritis occurs more frequently in type 1 diabetes but presents with B12 deficiency and anemia, not delayed gastric emptying.",
        "Incorrect. Metformin is not typically used in type 1 diabetes, and this patient has type 1 DM.",
        "Incorrect. SIBO causes bloating and diarrhea but is not the primary cause of delayed gastric emptying."
      ],
      "highYieldPoint": "Diabetic gastroparesis: autonomic neuropathy → vagal dysfunction → delayed gastric emptying → nausea, bloating, erratic glucose control."
    },
    {
      "vignette": "A 40-year-old man presents with progressive fatigue and thirst. His fasting glucose is 210 mg/dL and HbA1c is 9.2%. He has a BMI of 23. He has no family history of type 2 diabetes. Glutamic acid decarboxylase (GAD65) antibodies are positive. C-peptide level is low.",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Type 2 diabetes mellitus",
        "Maturity-onset diabetes of the young (MODY)",
        "Latent autoimmune diabetes of adults (LADA)",
        "Secondary diabetes from pancreatitis",
        "Gestational diabetes mellitus"
      ],
      "correctIndex": 2,
      "explanation": "Latent autoimmune diabetes of adults (LADA, also called type 1.5 diabetes) is a slowly progressive form of autoimmune diabetes that presents in adulthood (>30 years). Key features include positive islet autoantibodies (GAD65 most common), low/declining C-peptide, lean body habitus, and eventual insulin dependence. It is often initially misdiagnosed as type 2 diabetes but does not respond well to oral hypoglycemics.",
      "optionExplanations": [
        "Incorrect. Type 2 diabetes is characterized by insulin resistance with negative autoantibodies and preserved C-peptide initially.",
        "Incorrect. MODY is a monogenic form of diabetes with autosomal dominant inheritance and negative autoantibodies.",
        "Correct. LADA: autoimmune diabetes in adults with positive GAD65 antibodies, low C-peptide, and lean habitus — a slow-onset type 1 variant.",
        "Incorrect. Pancreatitis-induced diabetes would have history of pancreatitis, exocrine insufficiency, and negative autoantibodies.",
        "Incorrect. Gestational diabetes occurs during pregnancy and this is a male patient."
      ],
      "highYieldPoint": "LADA: autoimmune diabetes in adults (>30 yo), positive GAD65, low C-peptide, lean, initially misdiagnosed as T2DM. Requires insulin."
    },
    {
      "vignette": "A 58-year-old man with type 2 diabetes and chronic kidney disease (eGFR 22 mL/min) presents with lactic acidosis. His medications include metformin, lisinopril, and atorvastatin. Arterial blood gas shows pH 7.15, lactate 12 mmol/L, and bicarbonate 10 mEq/L.",
      "question": "Which of the following mechanisms best explains why metformin contributed to lactic acidosis in this patient?",
      "options": [
        "Direct hepatotoxicity causing impaired lactate clearance",
        "Stimulation of anaerobic glycolysis in skeletal muscle",
        "Inhibition of mitochondrial complex I and hepatic gluconeogenesis reducing lactate utilization",
        "Induction of renal tubular acidosis",
        "Depletion of thiamine required for pyruvate dehydrogenase"
      ],
      "correctIndex": 2,
      "explanation": "Metformin inhibits mitochondrial complex I of the electron transport chain and suppresses hepatic gluconeogenesis (which normally consumes lactate via the Cori cycle). In renal failure (eGFR <30), metformin accumulates to toxic levels because it is renally excreted. The combination of impaired lactate utilization and metformin accumulation leads to metformin-associated lactic acidosis (MALA).",
      "optionExplanations": [
        "Incorrect. Metformin does not cause direct hepatotoxicity; it acts on hepatic mitochondria without causing structural liver damage.",
        "Incorrect. Metformin does not directly stimulate anaerobic glycolysis in muscle.",
        "Correct. Metformin inhibits complex I and hepatic gluconeogenesis, reducing lactate clearance. Renal failure causes metformin accumulation, precipitating lactic acidosis.",
        "Incorrect. Metformin does not cause renal tubular acidosis.",
        "Incorrect. Metformin does not deplete thiamine; thiamine deficiency (Wernicke encephalopathy) is associated with alcoholism."
      ],
      "highYieldPoint": "Metformin-associated lactic acidosis: metformin inhibits complex I + gluconeogenesis → impaired lactate clearance. Contraindicated in severe CKD (eGFR <30)."
    },
    {
      "vignette": "A 72-year-old woman with longstanding type 2 diabetes presents with a painless, swollen right foot. X-ray shows midfoot fractures, dislocations, and joint destruction with osseous debris despite no history of trauma. Sensation is markedly diminished in both feet bilaterally.",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Rheumatoid arthritis",
        "Gout",
        "Charcot (neuropathic) arthropathy",
        "Osteomyelitis",
        "Osteoarthritis"
      ],
      "correctIndex": 2,
      "explanation": "Charcot arthropathy (neuropathic joint disease) occurs in diabetic patients with severe peripheral neuropathy. Loss of protective sensation leads to repetitive unrecognized microtrauma, resulting in progressive joint destruction, fractures, dislocations, and deformity — classically in the midfoot. The painless nature despite severe bony destruction is the hallmark, resulting from the underlying neuropathy.",
      "optionExplanations": [
        "Incorrect. Rheumatoid arthritis causes symmetric small joint synovitis and erosions, not the painless destruction pattern seen here.",
        "Incorrect. Gout causes acute painful monoarthritis with urate crystals, not painless progressive joint destruction.",
        "Correct. Charcot arthropathy: painless progressive joint destruction from peripheral neuropathy, classically in diabetic midfoot.",
        "Incorrect. Osteomyelitis can occur in diabetic feet but presents with signs of infection (erythema, warmth, drainage) and does not explain the characteristic joint destruction pattern.",
        "Incorrect. Osteoarthritis causes gradual joint narrowing and osteophytes but not the severe destruction and dislocation pattern seen here."
      ],
      "highYieldPoint": "Charcot arthropathy: painless joint destruction in neuropathic patients (diabetes); midfoot most common. Key: severe damage + absent pain."
    },
    {
      "vignette": "A 22-year-old woman with type 1 diabetes presents for routine follow-up. Her HbA1c is 7.2%. She has no symptoms. Urine albumin-to-creatinine ratio is 180 mg/g (normal <30 mg/g) on two separate occasions. Serum creatinine is normal. Blood pressure is 132/84 mmHg.",
      "question": "Which of the following is the most appropriate pharmacologic intervention to slow the progression of her kidney disease?",
      "options": [
        "Amlodipine",
        "Hydrochlorothiazide",
        "Alpha-blocker (doxazosin)",
        "ACE inhibitor (lisinopril)",
        "Loop diuretic (furosemide)"
      ],
      "correctIndex": 3,
      "explanation": "ACE inhibitors (or ARBs) are the first-line agents for diabetic nephropathy with albuminuria. They reduce intraglomerular pressure by preferentially dilating the efferent arteriole (blocking angiotensin II's vasoconstrictive effect), thereby reducing proteinuria and slowing progression to end-stage renal disease. They are recommended even in normotensive diabetic patients with albuminuria.",
      "optionExplanations": [
        "Incorrect. Amlodipine (dihydropyridine CCB) dilates the afferent arteriole, potentially increasing intraglomerular pressure and worsening proteinuria.",
        "Incorrect. Thiazide diuretics lower BP but do not provide the specific renoprotective effect of RAAS blockade in diabetic nephropathy.",
        "Incorrect. Alpha-blockers lower BP but have no proven renoprotective benefit in diabetic nephropathy.",
        "Correct. ACE inhibitors reduce proteinuria and slow diabetic nephropathy progression by dilating the efferent arteriole and reducing intraglomerular pressure.",
        "Incorrect. Loop diuretics manage volume overload but do not provide specific renoprotection in diabetic kidney disease."
      ],
      "highYieldPoint": "Diabetic nephropathy: ACE inhibitor/ARB first-line (dilate efferent arteriole → reduce proteinuria). Start with any albuminuria, even if normotensive."
    },
    {
      "vignette": "A 35-year-old woman with type 1 diabetes on an insulin pump presents with nausea and abdominal pain. Blood glucose is 520 mg/dL, pH is 7.22, bicarbonate is 12 mEq/L, and serum potassium is 3.1 mEq/L. Urine ketones are strongly positive.",
      "question": "Which of the following is the most appropriate initial step before starting insulin infusion in this patient?",
      "options": [
        "Administer IV sodium bicarbonate",
        "Begin insulin bolus immediately",
        "Administer subcutaneous long-acting insulin",
        "Correct potassium to ≥3.3 mEq/L before starting insulin",
        "Start dextrose infusion to prevent hypoglycemia"
      ],
      "correctIndex": 3,
      "explanation": "In DKA, if the initial serum potassium is <3.3 mEq/L, potassium MUST be corrected to ≥3.3 mEq/L BEFORE starting insulin. Insulin drives potassium intracellularly and can cause life-threatening hypokalemia (cardiac arrhythmias) if given while potassium is already critically low. Potassium replacement takes priority over insulin initiation in this scenario.",
      "optionExplanations": [
        "Incorrect. Bicarbonate is only considered when pH is <6.9 and is not the initial priority here.",
        "Incorrect. Starting insulin with K+ <3.3 mEq/L is dangerous — insulin will further shift K+ intracellularly, risking fatal arrhythmias.",
        "Incorrect. Subcutaneous insulin is unreliable in DKA due to poor tissue perfusion; IV insulin is standard.",
        "Correct. Potassium must be ≥3.3 mEq/L before starting insulin in DKA to prevent life-threatening hypokalemia.",
        "Incorrect. Dextrose is added later when glucose falls below 200-250 mg/dL, not at the start of treatment."
      ],
      "highYieldPoint": "DKA: if K+ <3.3 mEq/L → replace K+ FIRST before insulin. If K+ 3.3-5.3 → give K+ with insulin. If K+ >5.3 → hold K+, start insulin."
    },
    {
      "vignette": "A 50-year-old man with type 2 diabetes on metformin presents with a non-healing ulcer on the plantar surface of his right foot at the first metatarsal head. He has loss of sensation to 10g monofilament testing, absent ankle reflexes, and decreased vibration sense. The ulcer is surrounded by a callus with no erythema or purulent drainage.",
      "question": "Which of the following is the primary mechanism leading to ulcer formation in this patient?",
      "options": [
        "Peripheral arterial disease with critical limb ischemia",
        "Venous stasis with incompetent venous valves",
        "Immunodeficiency causing impaired wound healing",
        "Loss of protective sensation from peripheral neuropathy",
        "Hyperglycemia-induced impaired collagen synthesis"
      ],
      "correctIndex": 3,
      "explanation": "Diabetic foot ulcers most commonly result from peripheral sensory neuropathy, which causes loss of protective sensation (confirmed by the abnormal monofilament test). Patients cannot feel repetitive pressure or trauma, leading to tissue breakdown. The plantar surface at pressure points (metatarsal heads) is the classic location. Motor neuropathy contributes through foot deformity (claw toe, hammer toe), and autonomic neuropathy causes dry, cracked skin.",
      "optionExplanations": [
        "Incorrect. While PAD contributes to diabetic foot disease, the clinical presentation (neuropathic exam, plantar location, callus formation) indicates a primarily neuropathic ulcer.",
        "Incorrect. Venous stasis ulcers occur at the medial malleolus with hemosiderin staining and edema, not at the plantar metatarsal head.",
        "Incorrect. While hyperglycemia impairs immune function, the primary ulcer-forming mechanism is neuropathic, not immunologic.",
        "Correct. Peripheral sensory neuropathy causes loss of protective sensation, leading to repetitive unrecognized trauma and neuropathic ulcer formation.",
        "Incorrect. Impaired collagen synthesis delays healing but does not primarily cause the ulcer."
      ],
      "highYieldPoint": "Diabetic foot ulcers: primarily from sensory neuropathy (loss of protective sensation). Screen with 10g monofilament. Plantar pressure points most common."
    },
    {
      "vignette": "A 16-year-old obese girl with acanthosis nigricans is found to have a fasting glucose of 132 mg/dL on two occasions. Her HbA1c is 6.8%. C-peptide is elevated. Islet cell antibodies and GAD65 antibodies are negative. There is a strong family history of type 2 diabetes.",
      "question": "Which of the following pathophysiologic processes is most central to her condition?",
      "options": [
        "Autoimmune beta-cell destruction",
        "Mitochondrial DNA mutation affecting beta-cell function",
        "Amylin (IAPP) deposition in islets",
        "HLA-associated immune-mediated insulitis",
        "Insulin resistance with relative insulin deficiency"
      ],
      "correctIndex": 4,
      "explanation": "Type 2 diabetes is characterized primarily by insulin resistance with a relative (not absolute) insulin deficiency. The elevated C-peptide indicates that the pancreas is producing insulin (even in excess), but it is insufficient to overcome the tissue resistance. Acanthosis nigricans is a clinical marker of insulin resistance. The negative autoantibodies exclude type 1 diabetes and LADA.",
      "optionExplanations": [
        "Incorrect. Autoimmune beta-cell destruction is the hallmark of type 1 diabetes, not type 2. This patient has negative islet cell and GAD65 antibodies.",
        "Incorrect. Mitochondrial DNA mutations cause maternally inherited diabetes and deafness (MIDD), a rare form of diabetes.",
        "Incorrect. Amylin deposition contributes to beta-cell dysfunction in longstanding T2DM but is not the central initiating pathophysiology.",
        "Incorrect. HLA-associated immune insulitis is the mechanism of type 1 diabetes, not type 2.",
        "Correct. Type 2 DM: insulin resistance (evidenced by acanthosis nigricans, elevated C-peptide) with relative insulin deficiency as beta cells fail to compensate fully."
      ],
      "highYieldPoint": "Type 2 DM: insulin resistance → compensatory hyperinsulinemia → eventual beta-cell failure. Acanthosis nigricans = clinical marker of insulin resistance."
    },
    {
      "vignette": "A 28-year-old man with type 1 diabetes is found unconscious. His roommate reports he took his usual insulin dose but skipped dinner. Blood glucose is 28 mg/dL. Glucagon injection is administered, and the patient regains consciousness within 10 minutes.",
      "question": "Which of the following best describes the mechanism by which glucagon corrected this patient's hypoglycemia?",
      "options": [
        "Stimulation of insulin receptor sensitivity in peripheral tissues",
        "Inhibition of GLUT4 translocation in skeletal muscle",
        "Suppression of renal glucose excretion",
        "Direct stimulation of intestinal glucose absorption",
        "Activation of hepatic glycogenolysis and gluconeogenesis"
      ],
      "correctIndex": 4,
      "explanation": "Glucagon acts on hepatic glucagon receptors (Gs-coupled GPCRs) to activate adenylyl cyclase → cAMP → protein kinase A, which stimulates glycogen phosphorylase (glycogenolysis) and promotes gluconeogenesis. This rapidly releases glucose from hepatic glycogen stores into the bloodstream. Glucagon is the primary counter-regulatory hormone to insulin.",
      "optionExplanations": [
        "Incorrect. Glucagon does not improve insulin sensitivity; it opposes insulin's effects.",
        "Incorrect. Glucagon does not directly affect GLUT4 translocation in muscle.",
        "Incorrect. Glucagon does not affect renal glucose handling.",
        "Incorrect. Glucagon does not stimulate intestinal glucose absorption.",
        "Correct. Glucagon promotes hepatic glycogenolysis and gluconeogenesis via cAMP/PKA pathway, rapidly raising blood glucose."
      ],
      "highYieldPoint": "Glucagon: activates hepatic glycogenolysis + gluconeogenesis via Gs → cAMP → PKA. Emergency treatment for severe hypoglycemia."
    },
    {
      "vignette": "A 45-year-old man with poorly controlled type 2 diabetes (HbA1c 11%) undergoes dilated fundoscopic exam showing cotton-wool spots, hard exudates, dot-and-blot hemorrhages, and microaneurysms in both eyes. No neovascularization is seen.",
      "question": "Which of the following stages of diabetic retinopathy does this patient have?",
      "options": [
        "Mild nonproliferative diabetic retinopathy",
        "Advanced retinopathy of prematurity",
        "Proliferative diabetic retinopathy",
        "Diabetic macular edema only",
        "Moderate to severe nonproliferative diabetic retinopathy"
      ],
      "correctIndex": 4,
      "explanation": "The findings of microaneurysms, dot-and-blot hemorrhages, hard exudates, and cotton-wool spots without neovascularization represent nonproliferative diabetic retinopathy (NPDR). The presence of multiple findings (beyond just microaneurysms) classifies this as moderate to severe NPDR. Proliferative diabetic retinopathy (PDR) is defined by the presence of neovascularization, which is absent in this case.",
      "optionExplanations": [
        "Incorrect. Mild NPDR shows only microaneurysms; this patient has multiple additional findings.",
        "Incorrect. Retinopathy of prematurity affects premature infants and is unrelated to diabetes.",
        "Incorrect. Proliferative diabetic retinopathy requires neovascularization (new blood vessel formation), which is absent here.",
        "Incorrect. Diabetic macular edema involves retinal thickening at the macula and can occur at any stage of retinopathy but does not describe the full clinical picture.",
        "Correct. Multiple findings (microaneurysms + hemorrhages + exudates + cotton-wool spots) without neovascularization = moderate to severe NPDR."
      ],
      "highYieldPoint": "NPDR: microaneurysms, hemorrhages, exudates, cotton-wool spots (NO neovascularization). PDR: neovascularization → treat with laser photocoagulation/anti-VEGF."
    }
  ],
  "Calcium homeostasis": [
    {
      "vignette": "A 58-year-old postmenopausal woman presents for routine evaluation. Laboratory studies show serum calcium of 11.5 mg/dL (elevated), phosphorus of 2.2 mg/dL (low), and intact PTH of 120 pg/mL (elevated, normal 10-65 pg/mL). She has no symptoms and no history of kidney stones. 24-hour urine calcium is 320 mg/day (elevated).",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Primary hyperparathyroidism",
        "Familial hypocalciuric hypercalcemia",
        "Malignancy-associated hypercalcemia",
        "Vitamin D intoxication",
        "Milk-alkali syndrome"
      ],
      "correctIndex": 0,
      "explanation": "Primary hyperparathyroidism is characterized by elevated calcium with inappropriately elevated PTH (normally calcium would suppress PTH). Low phosphorus results from PTH-mediated phosphaturia. Elevated 24-hour urine calcium (>200 mg/day) distinguishes it from familial hypocalciuric hypercalcemia (FHH), where urine calcium is characteristically low despite hypercalcemia.",
      "optionExplanations": [
        "Correct. Elevated calcium + elevated PTH + low phosphorus + elevated urine calcium = primary hyperparathyroidism.",
        "Incorrect. FHH also shows elevated calcium and PTH but has characteristically LOW urine calcium (<100 mg/day) due to enhanced renal calcium reabsorption.",
        "Incorrect. Malignancy-associated hypercalcemia (PTHrP-mediated or osteolytic) shows suppressed PTH, not elevated PTH.",
        "Incorrect. Vitamin D intoxication causes hypercalcemia with suppressed PTH (negative feedback) and elevated phosphorus.",
        "Incorrect. Milk-alkali syndrome shows hypercalcemia with metabolic alkalosis and suppressed PTH, associated with excessive calcium/antacid intake."
      ],
      "highYieldPoint": "Primary hyperparathyroidism: elevated Ca2+ + elevated PTH + low PO4 + elevated urine Ca2+. Most common cause: single parathyroid adenoma (85%)."
    },
    {
      "vignette": "A 65-year-old man with squamous cell carcinoma of the lung presents with confusion, constipation, and polyuria. Serum calcium is 14.2 mg/dL, phosphorus is 1.8 mg/dL, and intact PTH is suppressed at 5 pg/mL. PTH-related peptide (PTHrP) is elevated.",
      "question": "Which of the following best describes the mechanism of hypercalcemia in this patient?",
      "options": [
        "PTHrP activation of PTH receptors on bone and kidney",
        "Excess 1,25-dihydroxyvitamin D production by tumor",
        "Direct osteolytic metastases to bone",
        "Primary hyperparathyroidism from parathyroid adenoma",
        "Increased intestinal calcium absorption from vitamin D excess"
      ],
      "correctIndex": 0,
      "explanation": "Humoral hypercalcemia of malignancy (HHM) is caused by tumor production of PTHrP, which mimics PTH by activating the same PTH/PTHrP receptor (PTH1R). This leads to increased bone resorption and renal calcium reabsorption. PTHrP is most commonly associated with squamous cell carcinomas (lung, head/neck), renal cell carcinoma, and breast cancer. The suppressed PTH distinguishes this from primary hyperparathyroidism.",
      "optionExplanations": [
        "Correct. PTHrP from squamous cell carcinoma activates PTH1R, causing hypercalcemia via increased bone resorption and renal calcium reabsorption.",
        "Incorrect. 1,25-dihydroxyvitamin D overproduction occurs in granulomatous diseases (sarcoidosis) and lymphoma, not squamous cell carcinoma.",
        "Incorrect. Osteolytic metastases (seen in breast cancer, multiple myeloma) cause local bone destruction, not PTHrP elevation.",
        "Incorrect. PTH is suppressed (5 pg/mL), ruling out primary hyperparathyroidism.",
        "Incorrect. Increased intestinal calcium absorption is the mechanism in vitamin D excess or granulomatous disease, not PTHrP-mediated HHM."
      ],
      "highYieldPoint": "Humoral hypercalcemia of malignancy: PTHrP activates PTH receptor → bone resorption + renal Ca2+ reabsorption. Squamous cell cancers most common."
    },
    {
      "vignette": "A 45-year-old woman undergoes total thyroidectomy for papillary thyroid carcinoma. Twelve hours after surgery, she develops perioral numbness, tingling in her fingertips, and muscle cramps. Tapping the facial nerve anterior to the ear produces ipsilateral facial muscle twitching.",
      "question": "Which of the following is the most likely cause of this patient's postoperative symptoms?",
      "options": [
        "Inadvertent removal of or damage to the parathyroid glands",
        "Transient ischemia of the brainstem",
        "Recurrent laryngeal nerve injury",
        "Postoperative hypoglycemia",
        "Allergic reaction to anesthetic agents"
      ],
      "correctIndex": 0,
      "explanation": "Post-thyroidectomy hypocalcemia from inadvertent damage to or removal of the parathyroid glands is the most common endocrine complication of thyroid surgery. The symptoms (perioral numbness, tingling, muscle cramps) and the positive Chvostek sign (facial twitching on tapping the facial nerve) are classic for hypocalcemia. Trousseau sign (carpopedal spasm with BP cuff inflation) is another diagnostic finding.",
      "optionExplanations": [
        "Correct. Parathyroid gland damage during thyroidectomy → hypoparathyroidism → hypocalcemia → neuromuscular irritability (Chvostek sign).",
        "Incorrect. Brainstem ischemia would cause cranial nerve deficits and altered consciousness, not the pattern described.",
        "Incorrect. RLN injury causes hoarseness or vocal cord paralysis, not hypocalcemic symptoms.",
        "Incorrect. Hypoglycemia causes diaphoresis, confusion, and tremor but not perioral numbness or positive Chvostek sign.",
        "Incorrect. Allergic reactions present with urticaria, bronchospasm, or anaphylaxis, not hypocalcemic tetany."
      ],
      "highYieldPoint": "Post-thyroidectomy hypocalcemia: parathyroid damage → hypoparathyroidism. Chvostek sign (facial twitch) and Trousseau sign (carpopedal spasm) are classic."
    },
    {
      "vignette": "A 70-year-old homebound woman presents with diffuse bone pain and proximal muscle weakness. X-rays show pseudofractures (Looser zones) in the femoral neck and pubic rami. Laboratory studies show low calcium, low phosphorus, elevated alkaline phosphatase, and elevated PTH. 25-hydroxyvitamin D level is 8 ng/mL (deficient, <20 ng/mL).",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Osteoporosis",
        "Osteomalacia",
        "Paget disease of bone",
        "Primary hyperparathyroidism",
        "Multiple myeloma"
      ],
      "correctIndex": 1,
      "explanation": "Osteomalacia (the adult form of rickets) results from vitamin D deficiency causing inadequate mineralization of newly formed osteoid. Classic findings include bone pain, proximal muscle weakness, low calcium, low phosphorus (due to compensatory secondary hyperparathyroidism causing phosphaturia), elevated ALP, elevated PTH, and pathognomonic pseudofractures (Looser zones) on X-ray.",
      "optionExplanations": [
        "Incorrect. Osteoporosis causes decreased bone density but calcium, phosphorus, and ALP are typically normal; no pseudofractures.",
        "Correct. Osteomalacia: vitamin D deficiency → impaired mineralization → low Ca2+, low PO4, elevated ALP, elevated PTH, and Looser zones.",
        "Incorrect. Paget disease shows elevated ALP with normal calcium and phosphorus, disorganized bone remodeling, and a 'mosaic' pattern on histology.",
        "Incorrect. Primary hyperparathyroidism shows elevated calcium (not low) with elevated PTH.",
        "Incorrect. Multiple myeloma shows lytic bone lesions, elevated protein/immunoglobulins, and usually normal or low ALP."
      ],
      "highYieldPoint": "Osteomalacia: defective bone mineralization from vitamin D deficiency. Looser zones (pseudofractures) are pathognomonic. Labs: low Ca, low PO4, high ALP, high PTH."
    },
    {
      "vignette": "A 55-year-old man with chronic kidney disease (eGFR 18 mL/min) presents with bone pain. Laboratory studies show calcium of 7.8 mg/dL, phosphorus of 7.5 mg/dL, PTH of 450 pg/mL, and 1,25-dihydroxyvitamin D of 8 pg/mL (low).",
      "question": "Which of the following best explains the elevated PTH in this patient?",
      "options": [
        "Autonomous parathyroid adenoma",
        "Decreased renal 1-alpha hydroxylase activity leading to reduced active vitamin D and hypocalcemia",
        "Parathyroid carcinoma",
        "Excess dietary calcium intake",
        "Ectopic PTH secretion by a renal tumor"
      ],
      "correctIndex": 1,
      "explanation": "In CKD, the failing kidneys cannot adequately convert 25-hydroxyvitamin D to active 1,25-dihydroxyvitamin D (calcitriol) due to decreased 1-alpha hydroxylase activity. This results in decreased intestinal calcium absorption → hypocalcemia. Additionally, phosphorus retention (hyperphosphatemia) further lowers ionized calcium and directly stimulates PTH secretion. The resulting secondary hyperparathyroidism leads to renal osteodystrophy.",
      "optionExplanations": [
        "Incorrect. A parathyroid adenoma would cause primary hyperparathyroidism with elevated calcium, not the low calcium seen here.",
        "Correct. CKD → reduced 1-alpha hydroxylase → low calcitriol → decreased Ca2+ absorption → hypocalcemia → secondary hyperparathyroidism.",
        "Incorrect. Parathyroid carcinoma is very rare and would cause elevated calcium, not hypocalcemia.",
        "Incorrect. Excess calcium intake would cause hypercalcemia and suppressed PTH, not the pattern seen here.",
        "Incorrect. Ectopic PTH secretion is extremely rare and would cause hypercalcemia, not hypocalcemia."
      ],
      "highYieldPoint": "CKD → renal osteodystrophy: decreased 1-alpha hydroxylase → low calcitriol → hypocalcemia + hyperphosphatemia → secondary hyperparathyroidism."
    },
    {
      "vignette": "A 50-year-old woman with breast cancer presents with bone pain, hypercalcemia (13.8 mg/dL), and acute kidney injury. She is hemodynamically stable. PTH is suppressed.",
      "question": "Which of the following is the most appropriate initial treatment for this patient's hypercalcemia?",
      "options": [
        "IV pamidronate",
        "Aggressive IV normal saline hydration",
        "Calcitonin injection",
        "Oral prednisone",
        "Cinacalcet"
      ],
      "correctIndex": 1,
      "explanation": "The initial treatment for acute symptomatic hypercalcemia regardless of etiology is aggressive IV normal saline hydration (200-300 mL/hr initially). Hypercalcemia causes polyuria and dehydration, which concentrates the serum calcium and worsens renal function. Volume expansion enhances renal calcium excretion. After initial hydration, additional agents (bisphosphonates, calcitonin) are added.",
      "optionExplanations": [
        "Incorrect. IV bisphosphonates (pamidronate, zoledronic acid) are essential for long-term control but take 2-4 days to work and require initial rehydration first.",
        "Correct. Aggressive IV NS hydration is always the first step in treating acute hypercalcemia to restore volume and enhance renal calcium excretion.",
        "Incorrect. Calcitonin provides rapid but modest and temporary calcium reduction; it is adjunctive, not the initial treatment.",
        "Incorrect. Corticosteroids are useful for granulomatous disease or lymphoma-related hypercalcemia (vitamin D-mediated) but are not first-line for all causes.",
        "Incorrect. Cinacalcet (calcimimetic) is used for hyperparathyroidism-related hypercalcemia, not malignancy-related."
      ],
      "highYieldPoint": "Acute hypercalcemia treatment: IV NS first → then calcitonin (rapid, temporary) + bisphosphonate (delayed but sustained). Furosemide only after adequate hydration."
    },
    {
      "vignette": "A 35-year-old woman with a history of anterior neck surgery 5 years ago presents with chronic fatigue, muscle cramps, and dry skin. Serum calcium is 6.8 mg/dL, phosphorus is 6.2 mg/dL, magnesium is normal, and PTH is 8 pg/mL (low). 25-hydroxyvitamin D level is normal.",
      "question": "Which of the following is the most appropriate long-term treatment for this patient?",
      "options": [
        "Oral calcium carbonate only",
        "PTH replacement (teriparatide)",
        "Oral calcium plus calcitriol (active vitamin D)",
        "High-dose ergocalciferol (vitamin D2)",
        "Thiazide diuretic to reduce urinary calcium"
      ],
      "correctIndex": 2,
      "explanation": "Chronic hypoparathyroidism (post-surgical in this case) requires lifelong oral calcium supplementation plus calcitriol (1,25-dihydroxyvitamin D). Calcitriol is necessary because PTH normally stimulates renal 1-alpha hydroxylase to convert 25(OH)D to active 1,25(OH)2D. Without PTH, the patient cannot activate vitamin D normally, so the active form must be given directly.",
      "optionExplanations": [
        "Incorrect. Calcium alone is insufficient because without PTH, the patient cannot convert vitamin D to its active form for adequate intestinal calcium absorption.",
        "Incorrect. While recombinant PTH (natpara) is FDA-approved for refractory hypoparathyroidism, it is not first-line due to cost and a black box warning for osteosarcoma.",
        "Correct. Oral calcium + calcitriol (active vitamin D) is the standard treatment, bypassing the need for PTH-dependent renal activation of vitamin D.",
        "Incorrect. Ergocalciferol (inactive vitamin D) requires 1-alpha hydroxylation by the kidney (PTH-dependent), which is impaired in hypoparathyroidism.",
        "Incorrect. Thiazides reduce urinary calcium loss and may be adjunctive but cannot replace the need for calcium and active vitamin D supplementation."
      ],
      "highYieldPoint": "Hypoparathyroidism treatment: calcium + calcitriol (active vitamin D). Inactive vitamin D (D2/D3) is insufficient because PTH-dependent 1-alpha hydroxylation is impaired."
    },
    {
      "vignette": "A 2-year-old boy is brought to the clinic with bowed legs, widened wrists, and a rachitic rosary (beading at the costochondral junctions). He has been exclusively breastfed with no vitamin D supplementation. Serum calcium is 7.5 mg/dL, phosphorus is 2.8 mg/dL, and alkaline phosphatase is markedly elevated. PTH is elevated.",
      "question": "Which of the following best describes the skeletal pathology in this child?",
      "options": [
        "Increased osteoclastic bone resorption",
        "Increased cortical bone density from excess PTH",
        "Defective mineralization of osteoid at the growth plates",
        "Replacement of bone marrow with fibrous tissue",
        "Abnormal collagen cross-linking in cortical bone"
      ],
      "correctIndex": 2,
      "explanation": "Rickets (the childhood form of osteomalacia) is caused by vitamin D deficiency leading to defective mineralization of newly formed osteoid and cartilage at the growth plates. The unmineralized osteoid accumulates, causing widened, irregular growth plates (widened wrists), costochondral beading (rachitic rosary), and skeletal deformities (bowed legs). The elevated ALP reflects increased osteoblastic activity attempting to compensate.",
      "optionExplanations": [
        "Incorrect. Increased osteoclastic resorption occurs in hyperparathyroidism but is not the primary pathology in rickets.",
        "Incorrect. Excess PTH in this case is compensatory (secondary hyperparathyroidism), and it causes bone resorption, not increased density.",
        "Correct. Rickets: vitamin D deficiency → defective mineralization of osteoid and growth plate cartilage → skeletal deformities.",
        "Incorrect. Fibrous tissue replacement of bone (osteitis fibrosa cystica) occurs in severe primary hyperparathyroidism, not rickets.",
        "Incorrect. Abnormal collagen cross-linking characterizes osteogenesis imperfecta, not rickets."
      ],
      "highYieldPoint": "Rickets: vitamin D deficiency in children → defective growth plate mineralization. Rachitic rosary, bowed legs, widened wrists. Elevated ALP and PTH."
    },
    {
      "vignette": "A 60-year-old woman with sarcoidosis presents with hypercalcemia (calcium 12.5 mg/dL), suppressed PTH, and elevated 1,25-dihydroxyvitamin D. Her 25-hydroxyvitamin D level is normal.",
      "question": "Which of the following best explains the elevated 1,25-dihydroxyvitamin D in this patient?",
      "options": [
        "Increased renal 1-alpha hydroxylase activity from elevated PTH",
        "Excessive dietary vitamin D supplementation",
        "Extrarenal 1-alpha hydroxylase activity in granulomatous macrophages",
        "Paraneoplastic PTHrP secretion activating renal hydroxylase",
        "Genetic gain-of-function mutation in CYP27B1"
      ],
      "correctIndex": 2,
      "explanation": "In granulomatous diseases (sarcoidosis, tuberculosis, berylliosis), activated macrophages within granulomas express 1-alpha hydroxylase that converts 25(OH)D to 1,25(OH)2D (calcitriol) independent of PTH regulation. This extrarenal calcitriol production is not subject to normal feedback inhibition, leading to unregulated vitamin D activation, increased intestinal calcium absorption, and hypercalcemia.",
      "optionExplanations": [
        "Incorrect. PTH is suppressed in this patient due to hypercalcemia; renal 1-alpha hydroxylase is not being stimulated by PTH.",
        "Incorrect. Excessive dietary vitamin D would elevate 25(OH)D (which is normal here), and does not directly elevate 1,25(OH)2D.",
        "Correct. Granulomatous macrophages express PTH-independent 1-alpha hydroxylase, converting 25(OH)D to active calcitriol autonomously.",
        "Incorrect. PTHrP causes hypercalcemia via bone resorption and renal calcium reabsorption, not via 1,25(OH)2D elevation.",
        "Incorrect. CYP27B1 gain-of-function mutations are extremely rare and not associated with sarcoidosis."
      ],
      "highYieldPoint": "Sarcoidosis hypercalcemia: macrophage 1-alpha hydroxylase → excess calcitriol production (PTH-independent). Treat with glucocorticoids."
    },
    {
      "vignette": "A 48-year-old man with MEN1 is found to have primary hyperparathyroidism with calcium of 11.8 mg/dL and PTH of 145 pg/mL. Sestamibi scan shows uptake in all four parathyroid glands.",
      "question": "Which of the following is the most appropriate surgical approach for this patient?",
      "options": [
        "Focused minimally invasive parathyroidectomy of a single gland",
        "Total parathyroidectomy without autotransplantation",
        "Observation with calcium monitoring",
        "Subtotal (3.5 gland) parathyroidectomy",
        "Bilateral internal jugular vein sampling"
      ],
      "correctIndex": 3,
      "explanation": "In MEN1, primary hyperparathyroidism is typically caused by multigland (usually all four) parathyroid hyperplasia, not a single adenoma. The standard surgical approach is subtotal parathyroidectomy (3.5 gland removal), leaving a remnant of the most normal-appearing gland to prevent permanent hypoparathyroidism. Alternatively, total parathyroidectomy with autotransplantation to the forearm may be performed.",
      "optionExplanations": [
        "Incorrect. Single-gland removal is appropriate for sporadic single adenoma but inadequate for MEN1 multigland disease, as recurrence is virtually certain.",
        "Incorrect. Total parathyroidectomy without autotransplantation would cause permanent hypoparathyroidism.",
        "Incorrect. Symptomatic hyperparathyroidism (calcium >11 mg/dL) in MEN1 requires surgical treatment, not observation.",
        "Correct. Subtotal (3.5 gland) parathyroidectomy is the standard approach for MEN1 multigland hyperplasia.",
        "Incorrect. Jugular vein sampling is not used in hyperparathyroidism workup."
      ],
      "highYieldPoint": "MEN1 hyperparathyroidism: multigland hyperplasia → subtotal (3.5 gland) parathyroidectomy. Sporadic primary HPT: usually single adenoma → focused excision."
    },
    {
      "vignette": "A 38-year-old woman presents with recurrent kidney stones. Serum calcium is 10.2 mg/dL (normal), phosphorus is 1.5 mg/dL (low), and PTH is 85 pg/mL (elevated). 24-hour urine calcium is elevated at 350 mg/day. 25-hydroxyvitamin D is normal.",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Renal phosphate wasting syndrome",
        "Secondary hyperparathyroidism from vitamin D deficiency",
        "Familial hypocalciuric hypercalcemia",
        "Normocalcemic primary hyperparathyroidism",
        "Milk-alkali syndrome"
      ],
      "correctIndex": 3,
      "explanation": "Normocalcemic primary hyperparathyroidism is a recognized variant where PTH is persistently elevated with consistently normal serum calcium (after excluding secondary causes). These patients can still develop complications of hyperparathyroidism including nephrolithiasis, osteoporosis, and low phosphorus due to PTH-mediated phosphaturia. It may represent early or mild primary hyperparathyroidism.",
      "optionExplanations": [
        "Incorrect. Isolated renal phosphate wasting would not explain the elevated PTH and elevated urine calcium.",
        "Incorrect. Secondary hyperparathyroidism from vitamin D deficiency is excluded by the normal 25(OH)D level.",
        "Incorrect. FHH shows elevated calcium with low urine calcium; this patient has normal calcium and high urine calcium.",
        "Correct. Normocalcemic primary HPT: elevated PTH with normal calcium after excluding secondary causes. Can still cause kidney stones and low phosphorus.",
        "Incorrect. Milk-alkali syndrome causes hypercalcemia and metabolic alkalosis from excess calcium/antacid intake."
      ],
      "highYieldPoint": "Normocalcemic primary HPT: elevated PTH + normal calcium + no secondary cause. Can still cause kidney stones and osteoporosis."
    },
    {
      "vignette": "A 30-year-old woman with primary hyperparathyroidism (calcium 11.2 mg/dL, PTH 110 pg/mL) is found to have a DEXA scan showing a T-score of -2.8 at the distal one-third radius. T-scores at the lumbar spine and femoral neck are -1.0 and -1.2, respectively.",
      "question": "Which of the following best explains why cortical bone (distal radius) is preferentially affected in primary hyperparathyroidism?",
      "options": [
        "Cortical bone lacks estrogen receptors that protect against resorption",
        "Cortical bone has lower blood flow and is more susceptible to metabolic insult",
        "PTH stimulates osteoblastic activity only on trabecular bone",
        "PTH preferentially activates osteoclasts on cortical bone surfaces",
        "The distal radius is more susceptible to mechanical stress"
      ],
      "correctIndex": 3,
      "explanation": "PTH excess preferentially affects cortical bone (e.g., distal 1/3 radius) because it stimulates osteoclastic resorption predominantly on cortical (endosteal) surfaces. Interestingly, PTH has a relative anabolic effect on trabecular bone (lumbar spine), explaining why spine BMD may be relatively preserved in primary hyperparathyroidism. This is why DEXA of the distal 1/3 radius is recommended in HPT evaluation.",
      "optionExplanations": [
        "Incorrect. Estrogen receptors are present in both cortical and trabecular bone.",
        "Incorrect. Blood flow differences do not explain the differential bone loss pattern.",
        "Incorrect. PTH stimulates both osteoblasts and osteoclasts, but the net effect on cortical bone is resorption, while trabecular bone may be preserved.",
        "Correct. PTH stimulates osteoclastic resorption preferentially on cortical bone, sparing or even increasing trabecular bone density.",
        "Incorrect. Mechanical stress affects both cortical and trabecular bone; the pattern is hormonal, not mechanical."
      ],
      "highYieldPoint": "Primary HPT: cortical bone loss (distal 1/3 radius) > trabecular bone (spine may be preserved). Always check distal radius DEXA in HPT."
    },
    {
      "vignette": "A 56-year-old man with metastatic colon cancer develops acute hypocalcemia (calcium 6.5 mg/dL) with tetany after receiving a blood transfusion of multiple units of packed red blood cells. His magnesium and PTH are normal.",
      "question": "Which of the following is the most likely cause of this patient's acute hypocalcemia?",
      "options": [
        "Calcitonin secretion from thyroid C cells",
        "Tumor lysis syndrome from chemotherapy",
        "Osteoblastic bone metastases from colon cancer",
        "Acute pancreatitis causing fat saponification",
        "Citrate in transfused blood chelating ionized calcium"
      ],
      "correctIndex": 4,
      "explanation": "Citrate is used as an anticoagulant in stored blood products. When multiple units are transfused rapidly, citrate binds ionized calcium, causing acute hypocalcemia. This is particularly significant during massive transfusion or when hepatic citrate metabolism is impaired (liver disease). Symptoms include tetany, perioral numbness, and cardiac arrhythmias.",
      "optionExplanations": [
        "Incorrect. Calcitonin transiently lowers calcium by inhibiting osteoclasts but is not physiologically significant in adults and is not triggered by transfusion.",
        "Incorrect. Tumor lysis syndrome causes hyperphosphatemia, hyperkalemia, hyperuricemia, and hypocalcemia, but is associated with chemotherapy initiation, not blood transfusion.",
        "Incorrect. Osteoblastic metastases can cause hypocalcemia by sequestering calcium in bone, but colon cancer typically produces osteolytic (not osteoblastic) metastases.",
        "Incorrect. Acute pancreatitis causes hypocalcemia via fat saponification (calcium soaps) but is unrelated to blood transfusion.",
        "Correct. Citrate in transfused blood chelates ionized calcium, causing acute symptomatic hypocalcemia, especially with massive transfusion."
      ],
      "highYieldPoint": "Massive transfusion → citrate toxicity → acute hypocalcemia (citrate chelates Ca2+). Treat with IV calcium gluconate."
    },
    {
      "vignette": "A 45-year-old man presents with severe hypercalcemia (calcium 15.2 mg/dL) refractory to IV saline hydration and bisphosphonate therapy. He has known PTH-secreting parathyroid carcinoma. His ECG shows a shortened QT interval.",
      "question": "Which of the following medications acts by directly decreasing PTH secretion and would be most useful as an adjunctive therapy?",
      "options": [
        "Denosumab",
        "Calcitonin",
        "Gallium nitrate",
        "Furosemide",
        "Cinacalcet"
      ],
      "correctIndex": 4,
      "explanation": "Cinacalcet is a calcimimetic that activates the calcium-sensing receptor (CaSR) on parathyroid cells, mimicking the effect of elevated calcium and thereby suppressing PTH secretion. It is used for parathyroid carcinoma (where surgery fails or is not possible), primary hyperparathyroidism in non-surgical candidates, and secondary hyperparathyroidism in CKD dialysis patients.",
      "optionExplanations": [
        "Incorrect. Denosumab (anti-RANKL antibody) inhibits osteoclast-mediated bone resorption but does not directly affect PTH secretion.",
        "Incorrect. Calcitonin inhibits osteoclast activity and provides temporary calcium lowering but does not reduce PTH secretion.",
        "Incorrect. Gallium nitrate inhibits bone resorption but does not directly suppress PTH.",
        "Incorrect. Furosemide promotes calciuresis but does not affect PTH secretion and should only be used after adequate hydration.",
        "Correct. Cinacalcet activates the calcium-sensing receptor on parathyroid cells, directly suppressing PTH secretion."
      ],
      "highYieldPoint": "Cinacalcet: calcimimetic → activates CaSR on parathyroid cells → decreases PTH secretion. Used for parathyroid carcinoma, primary HPT (non-surgical), secondary HPT on dialysis."
    },
    {
      "vignette": "A 28-year-old woman presents with muscle weakness, bone pain, and kidney stones. She is found to have hypercalcemia, hypophosphatemia, and elevated PTH. Genetic testing reveals a mutation in the MEN1 gene (menin). She also has a gastrinoma causing recurrent peptic ulcers.",
      "question": "Which of the following additional tumors is this patient at highest risk of developing?",
      "options": [
        "Pheochromocytoma",
        "Medullary thyroid carcinoma",
        "Adrenocortical carcinoma",
        "Mucosal neuroma",
        "Pituitary adenoma"
      ],
      "correctIndex": 4,
      "explanation": "MEN1 (Wermer syndrome) is caused by mutations in the MEN1 gene encoding menin (a tumor suppressor) on chromosome 11. The classic triad includes: (1) primary hyperparathyroidism (most common, >95%), (2) pancreatic endocrine tumors (gastrinoma most common, also insulinoma), and (3) pituitary adenomas (prolactinoma most common). The '3 P's' mnemonic: Parathyroid, Pancreas, Pituitary.",
      "optionExplanations": [
        "Incorrect. Pheochromocytoma is associated with MEN2A and MEN2B, not MEN1.",
        "Incorrect. Medullary thyroid carcinoma is the hallmark of MEN2A and MEN2B, not MEN1.",
        "Incorrect. Adrenocortical carcinoma is not a classic component of MEN1, though adrenal cortical tumors (mostly benign) can occasionally occur.",
        "Incorrect. Mucosal neuromas are characteristic of MEN2B, not MEN1.",
        "Correct. Pituitary adenomas (most commonly prolactinoma) are the third component of MEN1 along with parathyroid and pancreatic tumors."
      ],
      "highYieldPoint": "MEN1 (Wermer syndrome): Parathyroid + Pancreas (gastrinoma/insulinoma) + Pituitary (prolactinoma). MEN1 gene (menin) on chromosome 11."
    }
  ],
  "Pancreatic endocrine disorders": [
    {
      "vignette": "A 45-year-old woman presents with recurrent episodes of confusion, diaphoresis, tremor, and palpitations that occur in the early morning and are relieved by eating. During a monitored fast, her blood glucose drops to 38 mg/dL. Simultaneous C-peptide and insulin levels are elevated. Sulfonylurea screen is negative.",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Insulinoma",
        "Reactive hypoglycemia",
        "Factitious hypoglycemia from exogenous insulin",
        "Adrenal insufficiency",
        "Sulfonylurea ingestion"
      ],
      "correctIndex": 0,
      "explanation": "Insulinoma is a pancreatic beta-cell tumor causing endogenous hyperinsulinism. The diagnostic triad (Whipple triad) is: (1) symptoms of hypoglycemia, (2) documented low blood glucose, and (3) symptom resolution with glucose administration. Elevated insulin AND C-peptide during hypoglycemia confirm endogenous insulin source. Negative sulfonylurea screen excludes drug-induced hyperinsulinism.",
      "optionExplanations": [
        "Correct. Insulinoma: fasting hypoglycemia + elevated insulin + elevated C-peptide + negative sulfonylurea screen = endogenous hyperinsulinism from beta-cell tumor.",
        "Incorrect. Reactive hypoglycemia occurs postprandially (2-4 hours after meals), not during fasting.",
        "Incorrect. Exogenous insulin injection would show elevated insulin but LOW C-peptide (exogenous insulin does not contain C-peptide).",
        "Incorrect. Adrenal insufficiency can cause hypoglycemia but with low insulin and low C-peptide (appropriate response).",
        "Incorrect. Sulfonylurea screen is negative, excluding this cause. Sulfonylureas would also elevate both insulin and C-peptide."
      ],
      "highYieldPoint": "Insulinoma diagnosis: fasting hypoglycemia + high insulin + high C-peptide + negative sulfonylurea screen. Factitious (exogenous insulin): high insulin + LOW C-peptide."
    },
    {
      "vignette": "A 52-year-old man presents with recurrent severe peptic ulcers refractory to standard PPI therapy. He has had three ulcers in the past year, including one in the jejunum. Fasting serum gastrin is 1200 pg/mL (normal <100). Secretin stimulation test shows a paradoxical increase in gastrin to 1800 pg/mL.",
      "question": "Which of the following is the most likely location of the causative tumor?",
      "options": [
        "Duodenum (gastrinoma triangle)",
        "Gastric body",
        "Splenic hilum",
        "Hepatic flexure of the colon",
        "Esophagus"
      ],
      "correctIndex": 0,
      "explanation": "Gastrinoma (Zollinger-Ellison syndrome) most commonly occurs in the 'gastrinoma triangle' — bounded by the junction of the cystic and common bile duct superiorly, the junction of the second and third portions of the duodenum inferiorly, and the junction of the neck and body of the pancreas medially. The majority are found in the duodenal wall or pancreatic head. Jejunal ulcers are classic for ZES (distal ulcers from massive acid secretion).",
      "optionExplanations": [
        "Correct. The gastrinoma triangle (duodenum/pancreatic head region) is the most common location for gastrinomas.",
        "Incorrect. Gastric body tumors (gastric carcinoid) are associated with chronic atrophic gastritis and hypergastrinemia from a different mechanism.",
        "Incorrect. The splenic hilum is not a typical location for gastrinomas.",
        "Incorrect. The colon is not a site for gastrinomas.",
        "Incorrect. Gastrinomas do not occur in the esophagus."
      ],
      "highYieldPoint": "Gastrinoma (ZES): gastrinoma triangle (duodenum/pancreatic head). Secretin paradoxically increases gastrin. Jejunal ulcers, refractory PUD, diarrhea."
    },
    {
      "vignette": "A 55-year-old woman presents with a necrolytic migratory erythema rash on her lower extremities, weight loss, normocytic anemia, new-onset diabetes, and deep vein thrombosis. CT abdomen shows a 5 cm pancreatic tail mass.",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Glucagonoma",
        "Somatostatinoma",
        "VIPoma",
        "Insulinoma",
        "Pancreatic adenocarcinoma"
      ],
      "correctIndex": 0,
      "explanation": "Glucagonoma is an alpha-cell tumor of the pancreas that produces excess glucagon. The classic presentation includes the '4 D's': Dermatitis (necrolytic migratory erythema — a pathognomonic rash), Diabetes (glucagon promotes gluconeogenesis and glycogenolysis), DVT (hypercoagulability), and Depression. Additional findings include weight loss, normocytic anemia, and glossitis. Most glucagonomas are large and located in the pancreatic body/tail.",
      "optionExplanations": [
        "Correct. Glucagonoma: necrolytic migratory erythema + new-onset diabetes + DVT + weight loss + normocytic anemia = classic presentation.",
        "Incorrect. Somatostatinoma presents with gallstones, diabetes, and steatorrhea but does not cause necrolytic migratory erythema.",
        "Incorrect. VIPoma presents with watery diarrhea, hypokalemia, and achlorhydria (WDHA/Verner-Morrison syndrome), not skin rash.",
        "Incorrect. Insulinoma causes fasting hypoglycemia, not diabetes or skin rash.",
        "Incorrect. Pancreatic adenocarcinoma does not cause necrolytic migratory erythema or the specific syndrome described."
      ],
      "highYieldPoint": "Glucagonoma (4 D's): Dermatitis (necrolytic migratory erythema), Diabetes, DVT, Depression. Alpha-cell tumor, usually pancreatic body/tail."
    },
    {
      "vignette": "A 48-year-old man presents with profuse watery diarrhea (6-8 L/day), hypokalemia (K+ 2.4 mEq/L), and achlorhydria. He has lost 15 pounds in 2 months. CT abdomen reveals a 3 cm pancreatic body mass. Stool osmotic gap is low, consistent with secretory diarrhea.",
      "question": "Which of the following is the most likely hormone being secreted by this tumor?",
      "options": [
        "Gastrin",
        "Vasoactive intestinal peptide (VIP)",
        "Somatostatin",
        "Glucagon",
        "Serotonin"
      ],
      "correctIndex": 1,
      "explanation": "VIPoma (Verner-Morrison syndrome, or WDHA syndrome) is a pancreatic tumor that secretes vasoactive intestinal peptide (VIP). VIP causes massive secretory diarrhea (often >3 L/day, 'pancreatic cholera'), hypokalemia (from intestinal K+ loss), and achlorhydria (VIP inhibits gastric acid secretion). The triad WDHA = Watery Diarrhea, Hypokalemia, Achlorhydria.",
      "optionExplanations": [
        "Incorrect. Excess gastrin (Zollinger-Ellison) causes peptic ulcers and diarrhea from acid hypersecretion, not achlorhydria.",
        "Correct. VIPoma: secretory diarrhea (pancreatic cholera) + hypokalemia + achlorhydria (WDHA syndrome).",
        "Incorrect. Somatostatinoma causes steatorrhea, gallstones, and diabetes, but not the massive watery diarrhea seen here.",
        "Incorrect. Glucagonoma causes diabetes, necrolytic migratory erythema, and weight loss but not profuse watery diarrhea.",
        "Incorrect. Serotonin excess (carcinoid syndrome) causes diarrhea, flushing, and right-sided heart disease, but not achlorhydria or the massive volume of diarrhea."
      ],
      "highYieldPoint": "VIPoma (WDHA syndrome): Watery Diarrhea (secretory, >3L/day), Hypokalemia, Achlorhydria. Also called pancreatic cholera."
    },
    {
      "vignette": "A 60-year-old man with a history of MEN1 presents with steatorrhea, cholelithiasis, and new-onset diabetes. CT shows a 2 cm mass in the head of the pancreas. Serum somatostatin level is elevated.",
      "question": "Which of the following mechanisms best explains the gallstone formation in this patient?",
      "options": [
        "Hypercholesterolemia from diabetes",
        "Somatostatin-induced inhibition of cholecystokinin and gallbladder motility",
        "Direct tumor invasion of the common bile duct",
        "Glucagon-induced biliary stasis",
        "Excess gastrin causing bile acid depletion"
      ],
      "correctIndex": 1,
      "explanation": "Somatostatinoma produces excess somatostatin, which has broad inhibitory effects. Somatostatin inhibits cholecystokinin (CCK) release and directly reduces gallbladder contractility, leading to gallbladder stasis and gallstone formation. The classic triad of somatostatinoma is: gallstones + diabetes (inhibited insulin secretion) + steatorrhea (inhibited pancreatic exocrine secretion and bile flow).",
      "optionExplanations": [
        "Incorrect. While diabetes can contribute to gallstones, the primary mechanism here is somatostatin's direct inhibitory effect on gallbladder function.",
        "Correct. Somatostatin inhibits CCK release and gallbladder motility → biliary stasis → gallstone formation.",
        "Incorrect. Direct tumor invasion would cause biliary obstruction and jaundice, not gallstone formation.",
        "Incorrect. Glucagonoma is a different tumor; glucagon does not cause the specific gallstone formation mechanism described.",
        "Incorrect. Gastrin excess (ZES) does not cause gallstones through bile acid depletion."
      ],
      "highYieldPoint": "Somatostatinoma triad: Gallstones + Diabetes + Steatorrhea. Somatostatin inhibits CCK, insulin, and pancreatic exocrine secretion."
    },
    {
      "vignette": "A 35-year-old woman presents with facial flushing, diarrhea, and wheezing. These episodes are intermittent and can be triggered by stress or alcohol. Urinary 5-HIAA is elevated at 45 mg/24hr (normal <8 mg/24hr). CT abdomen shows a 2 cm mass in the ileum with multiple hepatic lesions.",
      "question": "Which of the following explains why this patient is experiencing systemic symptoms despite having a midgut tumor?",
      "options": [
        "The primary tumor has directly invaded the systemic circulation",
        "Hepatic metastases release serotonin directly into the hepatic veins, bypassing first-pass metabolism",
        "The tumor produces histamine instead of serotonin",
        "The ileocecal valve is incompetent allowing retrograde flow",
        "The tumor has developed ectopic ACTH secretion"
      ],
      "correctIndex": 1,
      "explanation": "Carcinoid syndrome (flushing, diarrhea, bronchoconstriction, right-sided heart disease) typically occurs only when a midgut carcinoid tumor has hepatic metastases. Normally, serotonin from intestinal carcinoid tumors is metabolized by the liver during first-pass metabolism. Hepatic metastases release serotonin directly into the hepatic veins, bypassing first-pass metabolism and reaching the systemic circulation to cause symptoms.",
      "optionExplanations": [
        "Incorrect. The systemic symptoms are from hepatic metastases bypassing first-pass metabolism, not direct vascular invasion.",
        "Correct. Hepatic metastases release serotonin directly into systemic circulation, bypassing hepatic first-pass metabolism → carcinoid syndrome.",
        "Incorrect. The elevated 5-HIAA (serotonin metabolite) confirms serotonin production, not histamine.",
        "Incorrect. Ileocecal valve competence is irrelevant to the mechanism of carcinoid syndrome.",
        "Incorrect. Ectopic ACTH secretion can occur with carcinoid tumors but does not explain flushing and diarrhea."
      ],
      "highYieldPoint": "Carcinoid syndrome occurs with hepatic metastases (bypass first-pass metabolism). Diagnosis: 24hr urine 5-HIAA. Complications: right-sided heart disease (serotonin)."
    },
    {
      "vignette": "A 30-year-old man with MEN2B is found to have bilateral pheochromocytomas, medullary thyroid carcinoma, and mucosal neuromas of the lips and tongue. His father died of the same condition at age 40. Genetic testing confirms a RET proto-oncogene mutation.",
      "question": "Which of the following inheritance patterns is demonstrated by this condition?",
      "options": [
        "Autosomal recessive",
        "X-linked recessive",
        "Autosomal dominant",
        "X-linked dominant",
        "Mitochondrial inheritance"
      ],
      "correctIndex": 2,
      "explanation": "MEN2B (like MEN2A and MEN1) follows an autosomal dominant inheritance pattern. MEN2B is caused by a specific activating mutation in the RET proto-oncogene (most commonly M918T). The penetrance is very high, and affected individuals have a 50% chance of passing the mutation to each offspring. MEN2B features: medullary thyroid carcinoma (aggressive), pheochromocytoma, mucosal neuromas, and marfanoid habitus.",
      "optionExplanations": [
        "Incorrect. MEN syndromes are autosomal dominant, not autosomal recessive.",
        "Incorrect. RET is located on chromosome 10, not the X chromosome.",
        "Correct. MEN2B is autosomal dominant with high penetrance, caused by RET proto-oncogene mutations on chromosome 10.",
        "Incorrect. This is not an X-linked condition.",
        "Incorrect. MEN syndromes involve nuclear DNA mutations, not mitochondrial DNA."
      ],
      "highYieldPoint": "MEN2B: MTC (aggressive) + pheochromocytoma + mucosal neuromas + marfanoid habitus. RET mutation (autosomal dominant). MEN2A: MTC + pheo + hyperparathyroidism."
    },
    {
      "vignette": "A 50-year-old man with chronic alcoholism presents with epigastric pain radiating to the back, steatorrhea, weight loss, and new-onset diabetes. CT shows pancreatic calcifications and duct dilation. Fecal elastase is markedly reduced.",
      "question": "Which of the following best explains the development of diabetes in this patient?",
      "options": [
        "Autoimmune destruction of beta cells",
        "Insulin resistance from chronic alcohol use",
        "Progressive destruction of islets of Langerhans from chronic pancreatitis",
        "Glucagonoma arising in the inflamed pancreas",
        "Amyloid deposition in pancreatic islets"
      ],
      "correctIndex": 2,
      "explanation": "Chronic pancreatitis causes progressive fibrosis and destruction of both exocrine (acinar cells → steatorrhea, low fecal elastase) and endocrine (islets of Langerhans → diabetes) pancreatic tissue. This is classified as type 3c (pancreatogenic) diabetes. Alcohol is the most common cause of chronic pancreatitis in adults. Pancreatic calcifications are characteristic.",
      "optionExplanations": [
        "Incorrect. Autoimmune beta-cell destruction is the mechanism of type 1 diabetes, not pancreatogenic diabetes.",
        "Incorrect. Alcohol-related insulin resistance alone does not explain the progressive beta-cell destruction seen in chronic pancreatitis.",
        "Correct. Chronic pancreatitis destroys islets of Langerhans (both alpha and beta cells), causing type 3c (pancreatogenic) diabetes.",
        "Incorrect. Glucagonoma is a rare neuroendocrine tumor unrelated to chronic pancreatitis.",
        "Incorrect. Amyloid (IAPP) deposition occurs in type 2 diabetes, not pancreatogenic diabetes."
      ],
      "highYieldPoint": "Type 3c (pancreatogenic) diabetes: chronic pancreatitis → islet destruction. Both insulin and glucagon are deficient → brittle diabetes with hypoglycemia risk."
    },
    {
      "vignette": "A 42-year-old woman is evaluated for recurrent episodes of flushing and hypotension. 24-hour urine 5-HIAA is normal. Serum tryptase and histamine levels are elevated. Bone marrow biopsy shows abnormal mast cell infiltrates positive for CD117 (c-KIT).",
      "question": "Which of the following is the most likely diagnosis?",
      "options": [
        "Carcinoid syndrome",
        "Pheochromocytoma",
        "Systemic mastocytosis",
        "VIPoma",
        "Anaphylaxis"
      ],
      "correctIndex": 2,
      "explanation": "Systemic mastocytosis is characterized by abnormal proliferation and accumulation of mast cells in various tissues, most commonly the bone marrow, skin, liver, and GI tract. Mast cell degranulation releases histamine, tryptase, and other mediators causing flushing, hypotension, urticaria, and GI symptoms. Elevated serum tryptase is a key marker. The KIT D816V mutation is present in >90% of cases. Normal 5-HIAA excludes carcinoid syndrome.",
      "optionExplanations": [
        "Incorrect. Carcinoid syndrome would show elevated urine 5-HIAA (serotonin metabolite), which is normal here.",
        "Incorrect. Pheochromocytoma causes hypertension during episodes, not hypotension, and is diagnosed by elevated metanephrines.",
        "Correct. Systemic mastocytosis: elevated tryptase + histamine + CD117+ mast cell infiltrates in bone marrow.",
        "Incorrect. VIPoma causes watery diarrhea, hypokalemia, and achlorhydria, not flushing with elevated tryptase.",
        "Incorrect. Anaphylaxis is an acute IgE-mediated event, not a chronic condition with bone marrow infiltration."
      ],
      "highYieldPoint": "Systemic mastocytosis: abnormal mast cell proliferation, KIT mutation (CD117+), elevated tryptase. Distinguish from carcinoid (5-HIAA) and pheo (metanephrines)."
    },
    {
      "vignette": "A 62-year-old man undergoes workup for unexplained recurrent hypoglycemia. During a 72-hour fast, glucose falls to 35 mg/dL with elevated insulin (25 µU/mL), elevated C-peptide (4.5 ng/mL), and elevated proinsulin. Abdominal CT and MRI are normal. Endoscopic ultrasound shows no pancreatic mass.",
      "question": "Which of the following is the most appropriate next diagnostic step?",
      "options": [
        "Repeat CT abdomen in 6 months",
        "Empiric treatment with diazoxide",
        "Whole-body PET-CT",
        "Selective arterial calcium stimulation test with hepatic venous sampling",
        "Distal pancreatectomy without localization"
      ],
      "correctIndex": 3,
      "explanation": "When biochemistry confirms endogenous hyperinsulinism (elevated insulin, C-peptide, and proinsulin during hypoglycemia) but cross-sectional imaging fails to localize a tumor, selective arterial calcium stimulation testing (SACST) with hepatic venous sampling is the next step. Calcium is injected into pancreatic arteries (gastroduodenal, splenic, superior mesenteric), and a rise in insulin in the hepatic venous effluent identifies the arterial territory harboring the insulinoma.",
      "optionExplanations": [
        "Incorrect. Delaying diagnosis for 6 months with recurrent severe hypoglycemia is inappropriate.",
        "Incorrect. Diazoxide (K-ATP channel opener) can treat symptoms but does not provide anatomic localization for surgical planning.",
        "Incorrect. PET-CT may be considered but has variable sensitivity for small insulinomas; SACST is the gold standard for occult localization.",
        "Correct. SACST with hepatic venous sampling localizes occult insulinomas by identifying the arterial territory that produces an insulin surge after calcium injection.",
        "Incorrect. Blind distal pancreatectomy without localization risks missing the tumor (which may be in the head) or unnecessary tissue removal."
      ],
      "highYieldPoint": "Occult insulinoma: selective arterial calcium stimulation test localizes tumor when imaging is negative. Calcium → beta cell insulin release → hepatic vein sampling."
    },
    {
      "vignette": "A 25-year-old woman with a family history of MEN1 undergoes screening. She is found to have elevated fasting gastrin and a 1.5 cm pancreatic head mass. She is also found to have primary hyperparathyroidism with calcium of 11.5 mg/dL.",
      "question": "Which of the following should be surgically addressed first?",
      "options": [
        "The gastrinoma",
        "Neither — observe with medical management only",
        "Both simultaneously",
        "The hyperparathyroidism",
        "The gastrinoma only if symptomatic"
      ],
      "correctIndex": 3,
      "explanation": "In MEN1 patients with concurrent hyperparathyroidism and gastrinoma, the hyperparathyroidism should be addressed first. Hypercalcemia stimulates gastrin secretion and can worsen the gastrinoma's clinical effects (peptic ulcer disease). Correction of hyperparathyroidism with parathyroidectomy often improves gastrinoma symptoms and may reduce serum gastrin levels. Additionally, many MEN1 gastrinomas are small and multifocal, making curative resection difficult.",
      "optionExplanations": [
        "Incorrect. Addressing the gastrinoma first without correcting hypercalcemia misses the opportunity to reduce gastrin stimulation.",
        "Incorrect. With symptomatic hyperparathyroidism (calcium 11.5) and a confirmed gastrinoma, surgical intervention is indicated.",
        "Incorrect. Simultaneous surgery is more complex and unnecessary when parathyroidectomy alone may significantly improve the clinical picture.",
        "Correct. Parathyroidectomy first: correcting hypercalcemia reduces gastrin stimulation and may improve ZES symptoms.",
        "Incorrect. Delaying gastrinoma management may be reasonable (medical PPI therapy), but parathyroidectomy should proceed regardless."
      ],
      "highYieldPoint": "MEN1 with HPT + gastrinoma: treat hyperparathyroidism FIRST — hypercalcemia stimulates gastrin secretion and worsens ZES."
    },
    {
      "vignette": "A 55-year-old man presents with a pancreatic mass discovered incidentally on imaging. Biopsy shows a well-differentiated neuroendocrine tumor that is chromogranin A positive and synaptophysin positive. The tumor is nonfunctional (no hormone-related symptoms). Ki-67 index is 8%.",
      "question": "What does the Ki-67 index of 8% indicate about this tumor?",
      "options": [
        "The tumor is benign and requires no treatment",
        "The tumor has a low (G1) proliferative rate",
        "The tumor is a high-grade (G3) neuroendocrine carcinoma",
        "The tumor has an intermediate (G2) proliferative rate",
        "The Ki-67 index is not relevant for neuroendocrine tumors"
      ],
      "correctIndex": 3,
      "explanation": "The WHO classification of pancreatic neuroendocrine tumors uses Ki-67 proliferative index and mitotic rate for grading: G1 (<3% Ki-67), G2 (3-20% Ki-67), and G3 (>20% Ki-67). A Ki-67 of 8% classifies this tumor as Grade 2 (intermediate grade), which has an intermediate prognosis between the indolent G1 tumors and aggressive G3 neuroendocrine carcinomas.",
      "optionExplanations": [
        "Incorrect. Even well-differentiated neuroendocrine tumors can metastasize; a Ki-67 of 8% (G2) warrants treatment consideration.",
        "Incorrect. G1 classification requires Ki-67 <3%; 8% exceeds this threshold.",
        "Incorrect. G3 neuroendocrine carcinoma requires Ki-67 >20%; 8% is well below this cutoff.",
        "Correct. Ki-67 of 8% falls in the G2 range (3-20%), indicating intermediate proliferative activity and prognosis.",
        "Incorrect. Ki-67 is one of the most important prognostic markers for neuroendocrine tumors and is essential for WHO grading."
      ],
      "highYieldPoint": "Pancreatic NET grading: G1 (Ki-67 <3%), G2 (Ki-67 3-20%), G3 (Ki-67 >20%). Higher grade = worse prognosis. Chromogranin A and synaptophysin are pan-NET markers."
    },
    {
      "vignette": "A 47-year-old man presents with severe watery diarrhea and is found to have a pancreatic neuroendocrine tumor secreting VIP. After initial management with IV fluids and electrolyte replacement, octreotide is started with significant improvement in diarrhea.",
      "question": "Which of the following best describes the mechanism by which octreotide controls this patient's symptoms?",
      "options": [
        "Direct cytotoxic effect on VIPoma cells",
        "Competitive antagonism at VIP receptors on enterocytes",
        "Inhibition of adenylyl cyclase in intestinal epithelium",
        "Stimulation of intestinal chloride absorption",
        "Somatostatin analog that inhibits VIP secretion from the tumor"
      ],
      "correctIndex": 4,
      "explanation": "Octreotide is a long-acting somatostatin analog that binds somatostatin receptors (primarily SSTR2 and SSTR5) on neuroendocrine tumor cells. It inhibits the secretion of VIP (and other peptide hormones) from the tumor, reducing the stimulus for secretory diarrhea. Octreotide also has direct anti-secretory effects on the intestinal epithelium and can inhibit tumor growth (antiproliferative effect).",
      "optionExplanations": [
        "Incorrect. Octreotide is not cytotoxic; it is an antisecretory and antiproliferative agent.",
        "Incorrect. Octreotide does not act as a VIP receptor antagonist; it works at the tumor level to reduce VIP secretion.",
        "Incorrect. While octreotide has some direct intestinal effects, its primary mechanism in VIPoma is inhibition of tumor hormone secretion.",
        "Incorrect. Octreotide does not directly stimulate chloride absorption.",
        "Correct. Octreotide (somatostatin analog) inhibits VIP release from tumor cells via somatostatin receptor activation."
      ],
      "highYieldPoint": "Octreotide (somatostatin analog): first-line medical therapy for functional NETs (VIPoma, carcinoid, glucagonoma). Inhibits hormone secretion + antiproliferative."
    },
    {
      "vignette": "A 40-year-old woman is found to have MEN1. Screening reveals a 1 cm non-functioning pancreatic neuroendocrine tumor, primary hyperparathyroidism, and a 5 mm pituitary microadenoma that is producing prolactin (serum prolactin 85 ng/mL). She has amenorrhea and galactorrhea.",
      "question": "Which of the following is the most appropriate initial management for her pituitary adenoma?",
      "options": [
        "Transsphenoidal surgical resection",
        "Whole-brain radiation therapy",
        "Temozolomide chemotherapy",
        "Observation with serial MRI every 6 months",
        "Cabergoline"
      ],
      "correctIndex": 4,
      "explanation": "Prolactinomas, regardless of whether they occur sporadically or as part of MEN1, are treated first-line with dopamine agonists (cabergoline preferred over bromocriptine due to better efficacy and tolerability). Cabergoline normalizes prolactin levels and shrinks tumor size in >90% of microprolactinomas. Surgery is reserved for dopamine agonist-resistant tumors.",
      "optionExplanations": [
        "Incorrect. Surgery is not first-line for prolactinomas; dopamine agonists are effective medical therapy.",
        "Incorrect. Radiation therapy is reserved for aggressive or recurrent tumors unresponsive to medical and surgical therapy.",
        "Incorrect. Temozolomide is reserved for aggressive/atypical pituitary carcinomas refractory to standard therapy.",
        "Incorrect. A symptomatic prolactinoma (amenorrhea, galactorrhea) with elevated prolactin requires treatment, not just observation.",
        "Correct. Cabergoline (dopamine agonist) is the first-line treatment for prolactinomas, including those in the MEN1 setting."
      ],
      "highYieldPoint": "Prolactinoma treatment (sporadic or MEN1): cabergoline (dopamine agonist) first-line. Surgery only for medication-resistant tumors."
    },
    {
      "vignette": "A 58-year-old man presents with refractory peptic ulcer disease. Fasting gastrin is 900 pg/mL. To differentiate Zollinger-Ellison syndrome from other causes of hypergastrinemia, a secretin stimulation test is performed. After IV secretin administration, gastrin rises to 1400 pg/mL.",
      "question": "Which of the following best explains the paradoxical rise in gastrin after secretin in this patient?",
      "options": [
        "Secretin normally stimulates gastrin release from G cells",
        "Secretin cross-reacts with the gastrin assay causing a false elevation",
        "Secretin causes gastric acid suppression, which reflexively stimulates G-cell gastrin release",
        "Secretin activates the vagus nerve, which stimulates gastrin secretion",
        "Secretin stimulates gastrin release from gastrinoma cells which lack normal inhibitory feedback"
      ],
      "correctIndex": 4,
      "explanation": "In normal physiology, secretin inhibits gastrin release from antral G cells. However, gastrinoma cells possess secretin receptors that paradoxically stimulate gastrin secretion. A positive secretin stimulation test (gastrin increase >120 pg/mL over baseline) is highly specific for gastrinoma (ZES). This test distinguishes ZES from other causes of hypergastrinemia (e.g., PPI use, atrophic gastritis) where gastrin does not paradoxically rise.",
      "optionExplanations": [
        "Incorrect. Secretin normally INHIBITS gastrin release from normal G cells.",
        "Incorrect. There is no cross-reactivity between secretin and gastrin assays.",
        "Incorrect. While secretin does inhibit acid secretion, the acute test does not allow enough time for a reflexive G-cell response.",
        "Incorrect. Secretin does not activate the vagus nerve to stimulate gastrin.",
        "Correct. Gastrinoma cells have secretin receptors that paradoxically stimulate gastrin release, unlike normal G cells which are inhibited."
      ],
      "highYieldPoint": "Secretin stimulation test: gastrin rises >120 pg/mL = positive for gastrinoma (ZES). Normal G cells: secretin inhibits gastrin. Gastrinoma cells: secretin paradoxically stimulates."
    }
  ]
};

const ENDO_SUMMARIES = {
  "Hypothalamic-pituitary axis": {
    "sections": [
      {
        "heading": "Anterior Pituitary Hormones and Their Regulation",
        "bullets": [
          "Anterior pituitary hormones: GH, prolactin, ACTH, TSH, LH, FSH",
          "GH: stimulated by GHRH, inhibited by somatostatin; acts via IGF-1 (liver); excess → acromegaly (adults), gigantism (children)",
          "Prolactin: tonically inhibited by dopamine from hypothalamus; any stalk disruption → hyperprolactinemia",
          "ACTH: stimulated by CRH; derived from POMC (also yields MSH, beta-endorphin); drives cortisol synthesis",
          "TSH: stimulated by TRH; drives thyroid hormone synthesis; negative feedback by T3/T4",
          "LH/FSH: stimulated by pulsatile GnRH; continuous GnRH → desensitization and suppression (basis for GnRH agonist therapy)",
          "Posterior pituitary: stores/releases ADH (water balance) and oxytocin (lactation, uterine contraction)"
        ]
      },
      {
        "heading": "Pituitary Adenomas",
        "bullets": [
          "Most common pituitary tumors; almost always benign",
          "Classified as microadenoma (<10 mm) or macroadenoma (≥10 mm)",
          "Prolactinoma: most common functioning adenoma; treat with dopamine agonists (cabergoline); surgery only if refractory",
          "GH-secreting adenoma: acromegaly; diagnose with IGF-1 + oral glucose suppression test; treat with surgery (transsphenoidal)",
          "ACTH-secreting adenoma (Cushing disease): confirm with IPSS; treat with transsphenoidal surgery",
          "Nonfunctioning adenoma: mass effect (headache, bitemporal hemianopia from optic chiasm compression, hypopituitarism)",
          "Pituitary apoplexy: acute hemorrhage/infarction of adenoma → headache, visual loss, adrenal crisis; emergent steroids"
        ]
      },
      {
        "heading": "Diabetes Insipidus and SIADH",
        "bullets": [
          "Central DI: decreased ADH production (pituitary/hypothalamus damage) → dilute polyuria; responds to desmopressin",
          "Nephrogenic DI: kidney resistance to ADH (lithium, hypercalcemia, mutations); does NOT respond to desmopressin",
          "Water deprivation test differentiates central (responds to desmopressin) from nephrogenic (does not respond) DI",
          "SIADH: excess ADH → euvolemic hyponatremia, concentrated urine, high urine Na; treat with fluid restriction",
          "SIADH causes: CNS disease, pulmonary disease, malignancy (small cell lung cancer), drugs (SSRIs, carbamazepine, cyclophosphamide)"
        ]
      },
      {
        "heading": "Other Key Conditions",
        "bullets": [
          "Sheehan syndrome: postpartum pituitary necrosis from hemorrhage → panhypopituitarism; first sign = failure to lactate",
          "Craniopharyngioma: Rathke pouch remnant; suprasellar calcifications, 'motor oil' cyst fluid; most common suprasellar tumor in children",
          "Empty sella syndrome: flattened pituitary from CSF pressure or post-infarction; may cause hypopituitarism",
          "Hemochromatosis: iron deposits in pituitary → hypogonadotropic hypogonadism"
        ]
      }
    ],
    "table": {
      "headers": [
        "Hormone",
        "Hypothalamic Regulator",
        "Excess",
        "Deficiency"
      ],
      "rows": [
        [
          "GH",
          "GHRH (+) / Somatostatin (−)",
          "Acromegaly / Gigantism",
          "Short stature (children)"
        ],
        [
          "Prolactin",
          "Dopamine (tonic −)",
          "Galactorrhea, amenorrhea",
          "Failure to lactate"
        ],
        [
          "ACTH",
          "CRH (+)",
          "Cushing disease",
          "Secondary adrenal insufficiency"
        ],
        [
          "TSH",
          "TRH (+)",
          "Secondary hyperthyroidism (rare)",
          "Secondary hypothyroidism"
        ],
        [
          "LH/FSH",
          "GnRH (pulsatile +)",
          "Precocious puberty",
          "Hypogonadotropic hypogonadism"
        ],
        [
          "ADH",
          "Osmolality, volume",
          "SIADH",
          "Central diabetes insipidus"
        ]
      ]
    },
    "mnemonic": "B-FLAT: Prolactin is the only anterior pituitary hormone under tonic inhibition (by dopamine). B-FLAT = Breast milk (prolactin functions: Breast milk, Fat deposition, Lactation, Amenorrhea, Tonic inhibition by dopamine)"
  },
  "Thyroid disease": {
    "sections": [
      {
        "heading": "Thyroid Hormone Physiology",
        "bullets": [
          "Thyroid hormones T3 (active) and T4 (prohormone): synthesized from iodine + thyroglobulin via TPO enzyme",
          "T4 → T3 conversion by 5'-deiodinase in peripheral tissues (liver, kidney); T3 is 3-5x more potent",
          "Thyroid hormone actions: increased BMR, thermogenesis, cardiac output, bone turnover, CNS development",
          "Wolff-Chaikoff effect: excess iodine → transient inhibition of thyroid hormone synthesis",
          "Jod-Basedow effect: excess iodine → thyrotoxicosis in patients with autonomous thyroid tissue"
        ]
      },
      {
        "heading": "Hyperthyroidism",
        "bullets": [
          "Graves disease: most common cause; TSI activates TSH receptor → diffuse goiter + ophthalmopathy + pretibial myxedema",
          "Graves ophthalmopathy: glycosaminoglycan deposition + lymphocytic infiltration of extraocular muscles → proptosis, diplopia",
          "Toxic multinodular goiter: autonomous nodules; elderly patients; patchy uptake on RAIU scan",
          "Toxic adenoma: single autonomous nodule; 'hot' nodule on scan with suppressed surrounding tissue",
          "Thyroid storm: life-threatening; treat with PTU → beta-blocker → glucocorticoids → iodine (after PTU)",
          "Subacute thyroiditis (de Quervain): post-viral, painful, self-limited; low RAIU; treatment: NSAIDs, steroids if severe"
        ]
      },
      {
        "heading": "Hypothyroidism",
        "bullets": [
          "Hashimoto thyroiditis: most common cause in iodine-sufficient areas; anti-TPO/anti-thyroglobulin antibodies; Hürthle cells + lymphocytes with germinal centers",
          "Congenital hypothyroidism: newborn screening (TSH); untreated → cretinism (irreversible intellectual disability)",
          "Subclinical hypothyroidism: elevated TSH, normal T4; confirm with repeat TSH; treat if TSH >10 or symptomatic/pregnant",
          "Myxedema coma: severe hypothyroidism with altered consciousness, hypothermia, bradycardia; treat with IV levothyroxine + hydrocortisone",
          "Drug-induced hypothyroidism: lithium, amiodarone, interferon-alpha"
        ]
      },
      {
        "heading": "Thyroid Cancer",
        "bullets": [
          "Papillary (~80%): most common; Orphan Annie eyes, psammoma bodies, nuclear grooves; lymphatic spread; excellent prognosis; BRAF mutation",
          "Follicular (~15%): hematogenous spread (bone, lung); diagnosed by capsular/vascular invasion (not by FNA); RAS mutation, PAX8-PPARγ",
          "Medullary (~5%): parafollicular C cells; calcitonin + amyloid; associated with MEN2A/2B (RET mutation); always test for RET",
          "Anaplastic (<2%): most aggressive; elderly; undifferentiated, thyroglobulin-negative; poor prognosis",
          "Thyroid lymphoma: arises in Hashimoto background; rapidly enlarging mass; diffuse large B-cell most common"
        ]
      }
    ],
    "table": {
      "headers": [
        "Condition",
        "TSH",
        "Free T4",
        "RAIU",
        "Key Feature"
      ],
      "rows": [
        [
          "Graves disease",
          "Low",
          "High",
          "High (diffuse)",
          "TSI, ophthalmopathy, pretibial myxedema"
        ],
        [
          "Toxic multinodular goiter",
          "Low",
          "High",
          "Patchy/high",
          "Elderly, multiple autonomous nodules"
        ],
        [
          "Subacute thyroiditis",
          "Low (early)",
          "High (early)",
          "Very low",
          "Painful, post-viral, elevated ESR"
        ],
        [
          "Hashimoto thyroiditis",
          "High",
          "Low",
          "Variable",
          "Anti-TPO, Hürthle cells, germinal centers"
        ],
        [
          "Factitious thyrotoxicosis",
          "Low",
          "High",
          "Very low",
          "Exogenous thyroid hormone, low thyroglobulin"
        ],
        [
          "TSH-secreting adenoma",
          "High/normal",
          "High",
          "High (diffuse)",
          "Rare; inappropriate TSH with elevated T4"
        ]
      ]
    },
    "mnemonic": "Thyroid storm treatment order: 'Beta-PTG-I' = Beta-blocker → PTU → Glucocorticoids → Iodine (give iodine at least 1 hour AFTER PTU)"
  },
  "Adrenal disease": {
    "sections": [
      {
        "heading": "Adrenal Cortex Zones and Hormones",
        "bullets": [
          "Zona Glomerulosa → Aldosterone (mineralocorticoid): regulated by RAAS and potassium; Salt",
          "Zona Fasciculata → Cortisol (glucocorticoid): regulated by ACTH; Sugar",
          "Zona Reticularis → Androgens (DHEA, androstenedione): regulated by ACTH; Sex",
          "Mnemonic: GFR = Salt, Sugar, Sex (from outside to inside); or 'The deeper you go, the sweeter it gets'"
        ]
      },
      {
        "heading": "Cushing Syndrome",
        "bullets": [
          "Most common cause: exogenous glucocorticoid use (iatrogenic)",
          "Most common endogenous cause: Cushing disease (ACTH-secreting pituitary adenoma, ~70%)",
          "Ectopic ACTH: small cell lung cancer (rapid onset, hypokalemia), bronchial carcinoid (slower onset)",
          "Adrenal causes: adenoma, carcinoma (ACTH-independent, ACTH suppressed)",
          "Screening: 24hr urine cortisol, late-night salivary cortisol, overnight 1mg DST",
          "Localization: ACTH level → high-dose DST → IPSS if needed (gold standard for pituitary vs. ectopic)"
        ]
      },
      {
        "heading": "Adrenal Insufficiency",
        "bullets": [
          "Primary (Addison disease): autoimmune (#1 in developed world), TB (#1 worldwide), adrenal hemorrhage (Waterhouse-Friderichsen)",
          "Primary features: hyperpigmentation (high ACTH/MSH from POMC), hyponatremia, hyperkalemia, hypotension",
          "Secondary: pituitary ACTH deficiency or exogenous steroid withdrawal → NO hyperpigmentation, NO hyperkalemia (aldosterone intact via RAAS)",
          "Adrenal crisis: emergent IV hydrocortisone 100 mg + IV fluids. Never delay treatment for testing",
          "ACTH stimulation test: cosyntropin 250 µg → cortisol <18 µg/dL at 60 min = adrenal insufficiency"
        ]
      },
      {
        "heading": "Primary Hyperaldosteronism and Pheochromocytoma",
        "bullets": [
          "Conn syndrome: aldosterone-producing adenoma → hypertension + hypokalemia + metabolic alkalosis; high aldosterone, low renin",
          "Bilateral idiopathic hyperplasia: most common cause of primary aldosteronism; treat medically (spironolactone)",
          "Diagnosis: aldosterone-to-renin ratio >30 → confirmatory salt-loading test → CT + adrenal venous sampling",
          "Pheochromocytoma: catecholamine-secreting tumor; rule of 10s (10% bilateral, 10% extra-adrenal, 10% malignant, 10% familial)",
          "Pheochromocytoma diagnosis: plasma fractionated metanephrines (most sensitive); 24hr urine metanephrines/catecholamines",
          "Pheochromocytoma management: alpha-block FIRST (phenoxybenzamine) → THEN beta-block → surgery"
        ]
      },
      {
        "heading": "Congenital Adrenal Hyperplasia",
        "bullets": [
          "21-hydroxylase deficiency (>90%): most common CAH; elevated 17-OHP; salt-wasting + virilization of XX females",
          "11β-hydroxylase deficiency (2nd most common): elevated 11-deoxycortisol + DOC → hypertension + hypokalemia + virilization",
          "17α-hydroxylase deficiency: decreased androgens + cortisol, increased mineralocorticoids → hypertension + hypokalemia + XY undervirilization",
          "Non-classic (late-onset) CAH: mimics PCOS; diagnose by ACTH-stimulated 17-OHP >10 ng/mL"
        ]
      }
    ],
    "table": {
      "headers": [
        "Condition",
        "Cortisol",
        "ACTH",
        "Aldosterone",
        "Key Feature"
      ],
      "rows": [
        [
          "Cushing disease (pituitary)",
          "High",
          "High",
          "Normal",
          "Suppresses with high-dose DST"
        ],
        [
          "Ectopic ACTH",
          "Very high",
          "Very high",
          "Normal",
          "No suppression; hypokalemia"
        ],
        [
          "Adrenal adenoma/carcinoma",
          "High",
          "Low",
          "Normal",
          "ACTH-independent"
        ],
        [
          "Primary Addison disease",
          "Low",
          "High",
          "Low",
          "Hyperpigmentation, hyperkalemia"
        ],
        [
          "Secondary adrenal insufficiency",
          "Low",
          "Low",
          "Normal",
          "No hyperpigmentation, no hyperkalemia"
        ],
        [
          "Conn syndrome (aldosteronoma)",
          "Normal",
          "Normal",
          "High",
          "Low renin, hypokalemia, HTN"
        ]
      ]
    },
    "mnemonic": "Adrenal cortex layers (outside → in): GFR = Glomerulosa, Fasciculata, Reticularis → Salt (aldosterone), Sugar (cortisol), Sex (androgens). 'Go Find Rex, Make Good Sex' = GFR, Mineralocorticoids, Glucocorticoids, Sex steroids"
  },
  "Diabetes mellitus": {
    "sections": [
      {
        "heading": "Type 1 vs. Type 2 Diabetes",
        "bullets": [
          "Type 1: autoimmune beta-cell destruction; absolute insulin deficiency; GAD65, IA-2, insulin autoantibodies; associated with HLA-DR3/DR4",
          "Type 2: insulin resistance + relative insulin deficiency; strong genetic component; associated with obesity, metabolic syndrome",
          "LADA (type 1.5): autoimmune diabetes in adults >30; positive GAD65, low C-peptide; initially resembles T2DM",
          "MODY: monogenic autosomal dominant; several subtypes (HNF1α most common); young onset, negative autoantibodies",
          "Type 3c (pancreatogenic): chronic pancreatitis → islet destruction; both insulin and glucagon deficient",
          "Diagnosis: fasting glucose ≥126 mg/dL, random glucose ≥200 with symptoms, 2hr OGTT ≥200, HbA1c ≥6.5%"
        ]
      },
      {
        "heading": "DKA vs. HHS",
        "bullets": [
          "DKA: absolute insulin deficiency → unrestrained lipolysis → ketogenesis → anion gap metabolic acidosis",
          "DKA presentation: glucose usually 300-500, pH <7.30, bicarbonate <18, positive ketones, Kussmaul breathing, fruity breath",
          "DKA triggers: infection (#1), noncompliance, new diagnosis, MI, pregnancy",
          "DKA management: (1) NS fluids → (2) K+ replacement if <5.3 (MUST be ≥3.3 before insulin) → (3) Insulin drip → (4) Add D5 when glucose <250",
          "HHS: residual insulin prevents ketosis but glucose very high (>600), osmolality >320; more common in T2DM elderly; severe dehydration",
          "Cerebral edema: life-threatening complication of DKA treatment in children; caused by too-rapid fluid/glucose correction"
        ]
      },
      {
        "heading": "Chronic Complications",
        "bullets": [
          "Microvascular: retinopathy, nephropathy, neuropathy — driven by duration and glycemic control",
          "Retinopathy: NPDR (microaneurysms, hemorrhages, exudates) → PDR (neovascularization); treat PDR with anti-VEGF/laser",
          "Nephropathy: microalbuminuria → macroalbuminuria → ESRD; treat with ACE inhibitor/ARB; Kimmelstiel-Wilson nodules on biopsy",
          "Neuropathy: distal symmetric polyneuropathy most common (stocking-glove); autonomic neuropathy (gastroparesis, orthostatic hypotension)",
          "Macrovascular: coronary artery disease (#1 cause of death in DM), peripheral arterial disease, stroke",
          "Diabetic foot: neuropathy + PVD + impaired immunity → ulcers, Charcot arthropathy, infections, amputations"
        ]
      },
      {
        "heading": "Pharmacotherapy Highlights",
        "bullets": [
          "Metformin: first-line for T2DM; decreases hepatic gluconeogenesis; no hypoglycemia; contraindicated eGFR <30 (lactic acidosis)",
          "Sulfonylureas (glipizide, glyburide, glimepiride): stimulate insulin release; risk of hypoglycemia and weight gain",
          "SGLT2 inhibitors (empagliflozin, dapagliflozin): renal glucose excretion; CV and renal benefits; risk of euglycemic DKA, UTI/yeast infections",
          "GLP-1 receptor agonists (semaglutide, liraglutide): incretin-based; weight loss, CV benefit; risk of pancreatitis",
          "TZDs (pioglitazone): PPARγ agonist; insulin sensitizer; contraindicated in heart failure (fluid retention)",
          "Insulin: required for T1DM; may be needed in T2DM; risk of hypoglycemia and weight gain"
        ]
      }
    ],
    "table": {
      "headers": [
        "Feature",
        "DKA",
        "HHS"
      ],
      "rows": [
        [
          "Diabetes type",
          "Type 1 (can occur in T2)",
          "Type 2"
        ],
        [
          "Glucose",
          "300–500 mg/dL",
          ">600 mg/dL"
        ],
        [
          "pH",
          "<7.30",
          ">7.30"
        ],
        [
          "Bicarbonate",
          "<18 mEq/L",
          ">18 mEq/L"
        ],
        [
          "Ketones",
          "Strongly positive",
          "Minimal/absent"
        ],
        [
          "Osmolality",
          "Variable",
          ">320 mOsm/kg"
        ],
        [
          "Key mechanism",
          "Absolute insulin deficiency",
          "Relative insulin deficiency"
        ],
        [
          "Dehydration",
          "Moderate",
          "Severe (up to 9L deficit)"
        ],
        [
          "Mortality",
          "~1–5%",
          "~10–20%"
        ]
      ]
    },
    "mnemonic": "DKA potassium rule: 'K before I' — correct Potassium (K+) before starting Insulin (I). If K+ <3.3 → replace K+ first; if K+ 3.3-5.3 → give K+ with insulin; if K+ >5.3 → start insulin, hold K+."
  },
  "Calcium homeostasis": {
    "sections": [
      {
        "heading": "PTH, Vitamin D, and Calcitonin",
        "bullets": [
          "PTH: secreted by parathyroid chief cells in response to low calcium (via calcium-sensing receptor)",
          "PTH actions: increases bone resorption (osteoclast activation), increases renal Ca2+ reabsorption, increases renal PO4 excretion, increases 1-alpha hydroxylase → active vitamin D",
          "Vitamin D activation: skin UV → cholecalciferol (D3) → 25-hydroxylation in liver → 1-alpha hydroxylation in kidney (PTH-dependent) → calcitriol (1,25-(OH)2D)",
          "Calcitriol actions: increases intestinal Ca2+ and PO4 absorption, increases bone resorption (with PTH)",
          "Calcitonin: secreted by thyroid parafollicular C cells; opposes PTH; inhibits osteoclasts; lowers calcium; clinically minor role",
          "FGF-23: secreted by osteocytes; promotes phosphate excretion; inhibits 1-alpha hydroxylase; elevated in CKD"
        ]
      },
      {
        "heading": "Hypercalcemia",
        "bullets": [
          "Primary hyperparathyroidism: most common cause of hypercalcemia in outpatients; 85% single adenoma",
          "Malignancy: most common cause in hospitalized patients; PTHrP (squamous cell, renal cell), osteolytic mets (breast, myeloma), 1,25-D (lymphoma)",
          "Granulomatous disease (sarcoid, TB): macrophage 1-alpha hydroxylase → excess calcitriol; treat with steroids",
          "FHH: autosomal dominant CaSR mutation → high Ca2+, high PTH, but LOW urine Ca2+ (<100 mg/day); benign, no treatment",
          "Hypercalcemia symptoms: 'Stones (renal), Bones (pain), Groans (abdominal pain), Thrones (polyuria), Psychiatric overtones (confusion)'",
          "Treatment: IV NS hydration first → calcitonin (rapid, temporary) → bisphosphonate (delayed but sustained)"
        ]
      },
      {
        "heading": "Hypocalcemia",
        "bullets": [
          "Hypoparathyroidism: most common cause is post-surgical (thyroidectomy); autoimmune; DiGeorge (22q11.2 deletion)",
          "Vitamin D deficiency: osteomalacia (adults), rickets (children); low Ca2+, low PO4, high ALP, high PTH (secondary)",
          "CKD: decreased 1-alpha hydroxylase → low calcitriol → hypocalcemia + hyperphosphatemia → secondary hyperparathyroidism → renal osteodystrophy",
          "Pseudohypoparathyroidism (type 1a, Albright hereditary osteodystrophy): end-organ PTH resistance → high PTH, low Ca2+; short stature, short 4th/5th metacarpals, obesity",
          "Signs: Chvostek (facial twitch on tapping CN VII), Trousseau (carpopedal spasm with BP cuff inflation); QT prolongation on ECG",
          "Treatment of hypoparathyroidism: calcium + calcitriol (active vitamin D, bypasses PTH-dependent activation)"
        ]
      },
      {
        "heading": "Metabolic Bone Disease",
        "bullets": [
          "Osteoporosis: decreased bone density, normal mineralization; T-score ≤ -2.5; treat with bisphosphonates first-line",
          "Osteomalacia/Rickets: defective mineralization; Looser zones (pseudofractures); low Ca2+, low PO4, high ALP, high PTH",
          "Paget disease: excessive disorganized bone remodeling; elevated ALP (normal Ca2+/PO4); mosaic (lamellar + woven) bone pattern",
          "Osteitis fibrosa cystica: severe hyperparathyroidism → 'brown tumors' (hemorrhagic cysts with hemosiderin); subperiosteal bone resorption"
        ]
      }
    ],
    "table": {
      "headers": [
        "Condition",
        "Calcium",
        "Phosphorus",
        "PTH",
        "Vitamin D"
      ],
      "rows": [
        [
          "Primary hyperparathyroidism",
          "High",
          "Low",
          "High",
          "Normal or high 1,25-D"
        ],
        [
          "Malignancy (PTHrP)",
          "High",
          "Low",
          "Low (suppressed)",
          "Normal"
        ],
        [
          "Vitamin D deficiency",
          "Low",
          "Low",
          "High (secondary)",
          "Low 25-D"
        ],
        [
          "CKD (renal osteodystrophy)",
          "Low",
          "High",
          "High (secondary)",
          "Low 1,25-D"
        ],
        [
          "Hypoparathyroidism",
          "Low",
          "High",
          "Low",
          "Low 1,25-D"
        ],
        [
          "Pseudohypoparathyroidism",
          "Low",
          "High",
          "High (resistance)",
          "Low 1,25-D"
        ],
        [
          "FHH",
          "High",
          "Normal",
          "High",
          "Normal"
        ]
      ]
    },
    "mnemonic": "Hypercalcemia symptoms: 'Stones, Bones, Groans, Thrones, and Psychiatric Overtones' = kidney stones, bone pain, abdominal pain, polyuria, confusion/depression"
  },
  "Pancreatic endocrine disorders": {
    "sections": [
      {
        "heading": "Pancreatic Islet Cell Types",
        "bullets": [
          "Alpha cells: secrete glucagon (raises blood glucose via glycogenolysis and gluconeogenesis)",
          "Beta cells: secrete insulin (lowers blood glucose) and amylin (C-peptide released equimolarly with insulin)",
          "Delta cells: secrete somatostatin (inhibits insulin, glucagon, gastrin, and many other hormones)",
          "PP cells: secrete pancreatic polypeptide (regulates pancreatic exocrine secretion)",
          "Epsilon cells: secrete ghrelin (stimulates appetite and GH release)"
        ]
      },
      {
        "heading": "Functional Pancreatic Neuroendocrine Tumors",
        "bullets": [
          "Insulinoma: most common functional pancreatic NET; fasting hypoglycemia + high insulin + high C-peptide; 90% benign, 90% solitary",
          "Gastrinoma (ZES): 2nd most common; refractory PUD, jejunal ulcers, diarrhea; gastrinoma triangle; secretin stimulation test positive; 60% malignant",
          "Glucagonoma: necrolytic migratory erythema, diabetes, DVT, depression (4 D's); alpha-cell tumor, usually pancreatic tail; mostly malignant",
          "VIPoma (WDHA): watery diarrhea, hypokalemia, achlorhydria; 'pancreatic cholera'; mostly pancreatic body/tail",
          "Somatostatinoma: gallstones, diabetes, steatorrhea; inhibition of CCK, insulin, and pancreatic secretion; rare",
          "All functional NETs may be treated medically with octreotide (somatostatin analog) to control hormone secretion"
        ]
      },
      {
        "heading": "MEN Syndromes",
        "bullets": [
          "MEN1 (Wermer): Parathyroid (>95%) + Pancreas (gastrinoma > insulinoma) + Pituitary (prolactinoma); MEN1 gene (menin), chr 11; autosomal dominant",
          "MEN2A (Sipple): Medullary thyroid carcinoma + Pheochromocytoma + Parathyroid hyperplasia; RET proto-oncogene, chr 10",
          "MEN2B: Medullary thyroid carcinoma (aggressive) + Pheochromocytoma + Mucosal neuromas + Marfanoid habitus; RET mutation (M918T)",
          "In MEN2, always treat pheochromocytoma FIRST (prevent catecholamine crisis during other surgeries)",
          "In MEN1, treat hyperparathyroidism first if gastrinoma coexists (hypercalcemia stimulates gastrin)",
          "Prophylactic thyroidectomy recommended in MEN2 RET mutation carriers based on specific codon risk stratification"
        ]
      },
      {
        "heading": "Carcinoid Tumors and Syndrome",
        "bullets": [
          "Carcinoid tumors: neuroendocrine tumors most commonly in GI tract (midgut) and lungs; secrete serotonin (5-HT)",
          "Carcinoid syndrome: flushing, diarrhea, bronchospasm, right-sided heart disease (tricuspid regurgitation, pulmonary stenosis)",
          "Syndrome requires hepatic metastases (for GI carcinoids) to bypass first-pass metabolism → systemic serotonin",
          "Diagnosis: 24-hour urine 5-HIAA (serotonin metabolite); chromogranin A (general NET marker)",
          "Treatment: octreotide for symptom control; surgical resection when possible",
          "Carcinoid heart disease: serotonin causes fibrosis of RIGHT-sided valves (left side protected by MAO in lungs)"
        ]
      }
    ],
    "table": {
      "headers": [
        "Tumor",
        "Hormone",
        "Key Symptoms",
        "Diagnostic Test",
        "Malignancy Rate"
      ],
      "rows": [
        [
          "Insulinoma",
          "Insulin",
          "Fasting hypoglycemia, Whipple triad",
          "72hr fast: high insulin + C-peptide",
          "~10%"
        ],
        [
          "Gastrinoma",
          "Gastrin",
          "Refractory PUD, jejunal ulcers, diarrhea",
          "Fasting gastrin + secretin stimulation",
          "~60%"
        ],
        [
          "Glucagonoma",
          "Glucagon",
          "NME rash, diabetes, DVT, depression",
          "Serum glucagon >500 pg/mL",
          "~70%"
        ],
        [
          "VIPoma",
          "VIP",
          "Watery diarrhea, hypokalemia, achlorhydria",
          "Serum VIP level",
          "~50%"
        ],
        [
          "Somatostatinoma",
          "Somatostatin",
          "Gallstones, diabetes, steatorrhea",
          "Serum somatostatin level",
          "~70%"
        ],
        [
          "Carcinoid",
          "Serotonin",
          "Flushing, diarrhea, right heart disease",
          "24hr urine 5-HIAA",
          "Variable"
        ]
      ]
    },
    "mnemonic": "MEN1 = 3 P's: Parathyroid, Pancreas, Pituitary (chromosome 11). MEN2A = 2 P's + 1 M: Pheochromocytoma, Parathyroid, Medullary thyroid carcinoma. MEN2B = 1 P + 1 M + Mucosal neuromas + Marfanoid habitus."
  }
};
