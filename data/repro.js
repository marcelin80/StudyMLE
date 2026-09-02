const REPRO_QUESTIONS = {

  "Reproductive endocrinology": [
    {
      vignette: "A 16-year-old girl is brought to the clinic because she has not yet had her first menstrual period. Physical examination reveals breast development at Tanner stage I, absent axillary and pubic hair, and a blind-ending vaginal pouch. Karyotype analysis shows 46,XY. Serum testosterone levels are elevated, and luteinizing hormone (LH) is increased.",
      question: "Which of the following best explains this patient's phenotype?",
      options: ["Complete androgen insensitivity syndrome","5α-reductase deficiency","Müllerian agenesis","Turner syndrome","Congenital adrenal hyperplasia"],
      correctIndex: 0,
      explanation: "Complete androgen insensitivity syndrome (CAIS) results from a nonfunctional androgen receptor. Despite having a 46,XY karyotype and functional testes that produce testosterone, the body cannot respond to androgens. Anti-Müllerian hormone (AMH) from Sertoli cells causes Müllerian duct regression, resulting in absent uterus and upper vagina. The patient appears phenotypically female with breast development (testosterone aromatized to estrogen) but lacks pubic/axillary hair due to androgen insensitivity.",
      optionExplanations: ["Correct: CAIS = 46,XY with nonfunctional androgen receptors → phenotypic female, absent uterus, blind vaginal pouch, elevated testosterone and LH.","Incorrect: 5α-reductase deficiency presents with ambiguous genitalia at birth and virilization at puberty; patients have internal male structures.","Incorrect: Müllerian agenesis (Mayer-Rokitansky-Küster-Hauser syndrome) occurs in 46,XX females with normal secondary sexual characteristics and functioning ovaries.","Incorrect: Turner syndrome (45,X) presents with streak gonads, short stature, and shield chest; karyotype here is 46,XY.","Incorrect: Congenital adrenal hyperplasia in a 46,XX female causes virilization, not the phenotypic female appearance seen here."],
      highYieldPoint: "Complete androgen insensitivity: 46,XY, phenotypic female, absent uterus, blind vaginal pouch, breast development, no pubic/axillary hair, ↑testosterone, ↑LH."
    },
    {
      vignette: "A 28-year-old woman presents with irregular menses, hirsutism, and acne for the past 2 years. Her BMI is 32 kg/m². Laboratory studies show elevated free testosterone, elevated LH with a normal FSH, and a fasting glucose of 118 mg/dL. Pelvic ultrasound reveals bilaterally enlarged ovaries with multiple peripheral follicles.",
      question: "Which of the following is the primary pathophysiologic mechanism underlying this patient's condition?",
      options: ["Insulin resistance leading to increased ovarian androgen production","Excess aromatase activity in granulosa cells","Primary ovarian failure with compensatory gonadotropin elevation","Hypothalamic GnRH deficiency causing anovulation","Autonomous cortisol secretion from the adrenal glands"],
      correctIndex: 0,
      explanation: "Polycystic ovary syndrome (PCOS) is driven in large part by insulin resistance. Hyperinsulinemia stimulates ovarian theca cells to produce excess androgens and decreases hepatic sex hormone-binding globulin (SHBG), increasing free testosterone. The elevated LH:FSH ratio further promotes androgen production from theca cells while inhibiting follicular maturation.",
      optionExplanations: ["Correct: Insulin resistance → hyperinsulinemia → ↑theca cell androgen production + ↓SHBG → hyperandrogenism, anovulation, metabolic syndrome.","Incorrect: Aromatase converts androgens to estrogens; excess aromatase would decrease androgen levels, not increase them.","Incorrect: Primary ovarian failure (premature ovarian insufficiency) leads to elevated FSH and estrogen deficiency, not hyperandrogenism.","Incorrect: GnRH deficiency causes hypogonadotropic hypogonadism with low LH/FSH, not the elevated LH seen in PCOS.","Incorrect: Autonomous cortisol secretion describes Cushing syndrome; while it shares some features, the ovarian findings and LH:FSH ratio point to PCOS."],
      highYieldPoint: "PCOS pathophysiology: insulin resistance → ↑theca cell androgens, ↓SHBG, ↑LH:FSH ratio → anovulation and hyperandrogenism."
    },
    {
      vignette: "A 30-year-old woman and her partner present for infertility evaluation after 14 months of unprotected intercourse. Hormone testing on cycle day 3 shows FSH 45 mIU/mL (normal <10), LH 38 mIU/mL, and estradiol 12 pg/mL. Anti-Müllerian hormone (AMH) is undetectable. She reports intermittent hot flashes.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Premature ovarian insufficiency","Hypothalamic amenorrhea","Prolactinoma","Asherman syndrome","Polycystic ovary syndrome"],
      correctIndex: 0,
      explanation: "Premature ovarian insufficiency (POI) is defined as loss of ovarian function before age 40. The markedly elevated FSH (>40 mIU/mL) and LH with low estradiol and undetectable AMH confirm hypergonadotropic hypogonadism due to ovarian follicle depletion. Hot flashes result from estrogen deficiency.",
      optionExplanations: ["Correct: POI = ovarian failure before age 40 with ↑FSH, ↑LH, ↓estradiol, ↓AMH, and hypoestrogenic symptoms.","Incorrect: Hypothalamic amenorrhea presents with low or normal FSH/LH (hypogonadotropic hypogonadism), often related to stress, weight loss, or excessive exercise.","Incorrect: Prolactinoma causes amenorrhea through hyperprolactinemia suppressing GnRH, leading to low FSH/LH.","Incorrect: Asherman syndrome (intrauterine adhesions) causes amenorrhea with normal hormone levels.","Incorrect: PCOS presents with elevated LH:FSH ratio, hyperandrogenism, and polycystic ovaries; FSH is not markedly elevated."],
      highYieldPoint: "Premature ovarian insufficiency: ovarian failure <40 years, FSH >40, ↓estradiol, ↓AMH; causes hypergonadotropic hypogonadism."
    },
    {
      vignette: "A 25-year-old woman presents with galactorrhea and amenorrhea for 6 months. She is not pregnant. MRI of the brain reveals a 1.5-cm pituitary mass. Serum prolactin is 210 ng/mL (normal <20 ng/mL). FSH and LH levels are low.",
      question: "Which of the following best explains the mechanism by which elevated prolactin causes amenorrhea in this patient?",
      options: ["Direct inhibition of ovarian estrogen synthesis","Suppression of pulsatile GnRH release from the hypothalamus","Competitive antagonism at the FSH receptor","Stimulation of hypothalamic dopamine leading to GnRH excess","Induction of premature luteolysis"],
      correctIndex: 1,
      explanation: "Hyperprolactinemia inhibits the pulsatile release of GnRH from the hypothalamus. Without pulsatile GnRH stimulation, the anterior pituitary cannot secrete adequate FSH and LH, resulting in anovulation and amenorrhea. This is a form of hypogonadotropic hypogonadism.",
      optionExplanations: ["Incorrect: Prolactin does not directly inhibit ovarian steroidogenesis; its primary effect is at the hypothalamic level.","Correct: ↑Prolactin → ↓pulsatile GnRH → ↓FSH/LH → anovulation and amenorrhea (hypogonadotropic hypogonadism).","Incorrect: Prolactin does not compete at the FSH receptor; it acts centrally on GnRH neurons.","Incorrect: Dopamine inhibits prolactin release, not the reverse. Elevated prolactin does not stimulate dopamine-mediated GnRH excess.","Incorrect: Premature luteolysis shortens the luteal phase but is not the mechanism of prolactin-induced amenorrhea."],
      highYieldPoint: "Hyperprolactinemia → ↓GnRH pulsatility → ↓FSH/LH → anovulation/amenorrhea. Treat prolactinomas with cabergoline (dopamine agonist)."
    },
    {
      vignette: "A 14-year-old boy presents with delayed puberty. He is at the 5th percentile for height. Examination shows prepubertal testes, absent facial hair, and eunuchoid body proportions. His sense of smell is absent on formal testing. Laboratory studies show low serum testosterone, FSH 0.5 mIU/mL, and LH 0.3 mIU/mL.",
      question: "Which of the following is the most likely underlying etiology?",
      options: ["Klinefelter syndrome","Failure of GnRH neuron migration from the olfactory placode","Testicular feminization","Primary testicular failure due to spermatogonial depletion","Pituitary gonadotroph adenoma compressing the optic chiasm"],
      correctIndex: 1,
      explanation: "Kallmann syndrome results from failure of GnRH-producing neurons to migrate from the olfactory placode to the hypothalamus during embryonic development. This leads to isolated hypogonadotropic hypogonadism with anosmia. The low FSH, LH, and testosterone with absent sense of smell is classic for this diagnosis.",
      optionExplanations: ["Incorrect: Klinefelter syndrome (47,XXY) causes hypergonadotropic hypogonadism with elevated FSH/LH due to seminiferous tubule dysgenesis.","Correct: Kallmann syndrome = failed GnRH neuron migration → hypogonadotropic hypogonadism + anosmia (absent smell).","Incorrect: Testicular feminization (androgen insensitivity) occurs in 46,XY individuals who appear phenotypically female, not as delayed male puberty.","Incorrect: Primary testicular failure would show elevated (not low) FSH and LH due to loss of negative feedback.","Incorrect: A gonadotroph adenoma would more likely cause elevated gonadotropins, and compression symptoms would include visual field deficits."],
      highYieldPoint: "Kallmann syndrome: failed GnRH neuron migration from olfactory placode → hypogonadotropic hypogonadism + anosmia."
    },
    {
      vignette: "A 32-year-old woman undergoing in vitro fertilization receives exogenous FSH injections for ovarian stimulation. Ultrasound monitoring on day 12 shows a dominant follicle measuring 20 mm. A single injection of human chorionic gonadotropin (hCG) is administered.",
      question: "Which of the following best describes the primary purpose of the hCG injection in this protocol?",
      options: ["To stimulate growth of additional secondary follicles","To trigger the LH surge and induce ovulation","To increase endometrial thickness by stimulating estrogen production","To support the corpus luteum in early pregnancy","To suppress premature LH surge from the anterior pituitary"],
      correctIndex: 1,
      explanation: "hCG is structurally similar to LH and binds the same receptor. In IVF protocols, hCG is administered when follicles reach maturity to mimic the natural LH surge, triggering final oocyte maturation and ovulation. Egg retrieval is timed approximately 36 hours after hCG administration.",
      optionExplanations: ["Incorrect: Follicle recruitment and growth are driven by FSH, not hCG.","Correct: hCG mimics the LH surge → triggers ovulation and final oocyte maturation; oocyte retrieval timed ~36 hours later.","Incorrect: While estrogen promotes endometrial proliferation, the purpose of hCG here is to trigger ovulation, not primarily to increase endometrial thickness.","Incorrect: hCG does support the corpus luteum, but in this context the purpose of the injection is to trigger ovulation before retrieval.","Incorrect: GnRH antagonists or agonists (not hCG) are used to suppress premature LH surges during ovarian stimulation."],
      highYieldPoint: "hCG shares the α-subunit with LH, FSH, TSH. hCG binds LH receptors to trigger ovulation. α-subunit is common; β-subunit confers specificity."
    },
    {
      vignette: "A 52-year-old woman presents with hot flashes, night sweats, and vaginal dryness for the past 8 months. Her last menstrual period was 10 months ago. She has no significant medical history. Serum FSH is 62 mIU/mL and estradiol is 15 pg/mL.",
      question: "Which of the following physiologic changes most directly causes the elevated FSH in this patient?",
      options: ["Increased hypothalamic GnRH pulse frequency","Elevated pituitary prolactin secretion","Decreased ovarian inhibin B production","Increased adrenal DHEA-S synthesis","Decreased hepatic sex hormone-binding globulin"],
      correctIndex: 2,
      explanation: "During menopause, the declining ovarian follicle pool leads to decreased production of inhibin B by granulosa cells. Inhibin B normally selectively inhibits FSH secretion from the anterior pituitary. Loss of this negative feedback allows FSH to rise, making it the first gonadotropin to increase in perimenopause.",
      optionExplanations: ["Incorrect: While GnRH pulse frequency does change, the primary driver of the disproportionate FSH rise is loss of inhibin B negative feedback.","Incorrect: Prolactin does not selectively regulate FSH; elevated prolactin would suppress GnRH and lower FSH.","Correct: ↓Ovarian follicles → ↓inhibin B → loss of selective FSH suppression → ↑FSH (FSH rises before LH in menopause).","Incorrect: Adrenal DHEA-S actually declines with age and does not directly regulate FSH secretion.","Incorrect: Decreased SHBG would alter free hormone levels but does not explain the selective FSH elevation."],
      highYieldPoint: "Menopause: ↓inhibin B → ↑FSH (rises first); ↓estrogen → ↑LH. Hot flashes from estrogen withdrawal affecting hypothalamic thermoregulation."
    },
    {
      vignette: "A 22-year-old female athlete with a BMI of 17.5 kg/m² presents with amenorrhea for 8 months. She runs 60 miles per week and restricts caloric intake. Serum FSH is 2.1 mIU/mL, LH is 1.4 mIU/mL, estradiol is 18 pg/mL, and prolactin is normal. A progesterone withdrawal test is negative.",
      question: "Which of the following is the most appropriate next step in management?",
      options: ["Clomiphene citrate to induce ovulation","Cabergoline for presumed hyperprolactinemia","Combined oral contraceptive pills and nutritional counseling","Bilateral ovarian wedge resection","High-dose exogenous FSH injections"],
      correctIndex: 2,
      explanation: "This patient has functional hypothalamic amenorrhea due to the female athlete triad (low energy availability, menstrual dysfunction, decreased bone density). The negative progesterone challenge confirms profound hypoestrogenism. Treatment includes nutritional counseling to restore energy balance and estrogen replacement (e.g., combined OCP) to prevent bone loss.",
      optionExplanations: ["Incorrect: Clomiphene works by blocking estrogen receptors at the hypothalamus; it is ineffective when the hypothalamic-pituitary axis is suppressed from energy deficit.","Incorrect: Prolactin is normal, ruling out hyperprolactinemia; cabergoline is not indicated.","Correct: Address the underlying energy deficit with nutrition counseling; OCP provides estrogen to protect bone density in the setting of functional hypothalamic amenorrhea.","Incorrect: Ovarian wedge resection is a historical treatment for PCOS, not hypothalamic amenorrhea.","Incorrect: Exogenous FSH may induce ovulation but does not address the underlying cause; fertility is not the current concern."],
      highYieldPoint: "Female athlete triad: low energy availability + menstrual dysfunction + ↓bone density. Negative progesterone challenge = severe hypoestrogenism."
    },
    {
      vignette: "A 27-year-old woman with a 4-cm ovarian mass undergoes surgical excision. Histology reveals a tumor composed of granulosa cells arranged in Call-Exner bodies (rosettes of cells around eosinophilic fluid). She has had menorrhagia and endometrial hyperplasia.",
      question: "Which hormone is most likely produced in excess by this tumor?",
      options: ["Testosterone","Human chorionic gonadotropin","Estrogen","Cortisol","Progesterone"],
      correctIndex: 2,
      explanation: "Granulosa cell tumors are sex cord-stromal tumors that produce excess estrogen. The hyperestrogenism causes endometrial hyperplasia (which can progress to endometrial carcinoma), menorrhagia, and precocious puberty in children. Call-Exner bodies are the classic histologic finding.",
      optionExplanations: ["Incorrect: Testosterone is produced in excess by Sertoli-Leydig cell tumors (arrhenoblastomas), causing virilization.","Incorrect: hCG is produced by gestational trophoblastic disease (hydatidiform moles, choriocarcinoma), not granulosa cell tumors.","Correct: Granulosa cell tumors secrete estrogen → endometrial hyperplasia, menorrhagia, breast tenderness. Classic histology: Call-Exner bodies.","Incorrect: Cortisol-secreting tumors arise in the adrenal gland, not the ovary.","Incorrect: While the ovary produces progesterone, granulosa cell tumors primarily secrete estrogen, not progesterone."],
      highYieldPoint: "Granulosa cell tumor: estrogen-secreting, Call-Exner bodies, associated with endometrial hyperplasia/carcinoma. Inhibin is a tumor marker."
    },
    {
      vignette: "A couple presents for genetic counseling after their first child was diagnosed with congenital adrenal hyperplasia due to 21-hydroxylase deficiency. The child is a 46,XX female who presented at birth with ambiguous genitalia and salt-wasting crisis.",
      question: "Which of the following serum findings is most expected in this infant?",
      options: ["Elevated cortisol and decreased ACTH","Elevated 11-deoxycortisol and elevated cortisol","Decreased DHEA and elevated aldosterone","Elevated 17-hydroxyprogesterone and decreased cortisol","Decreased androstenedione and elevated renin"],
      correctIndex: 3,
      explanation: "21-hydroxylase deficiency blocks conversion of 17-hydroxyprogesterone to 11-deoxycortisol (cortisol pathway) and progesterone to 11-deoxycorticosterone (aldosterone pathway). This causes accumulation of 17-hydroxyprogesterone, which is shunted toward androgen synthesis. Cortisol and aldosterone deficiency leads to elevated ACTH and salt-wasting.",
      optionExplanations: ["Incorrect: Cortisol is decreased (not elevated) in 21-hydroxylase deficiency; decreased cortisol causes increased (not decreased) ACTH.","Incorrect: 11-deoxycortisol accumulates in 11β-hydroxylase deficiency, not 21-hydroxylase deficiency.","Incorrect: DHEA is increased (not decreased) because precursors are shunted to androgen synthesis; aldosterone is decreased (not elevated).","Correct: 21-hydroxylase deficiency → ↑17-hydroxyprogesterone (key diagnostic marker), ↓cortisol, ↓aldosterone, ↑ACTH, ↑androgens → virilization.","Incorrect: Androstenedione is increased (not decreased) due to precursor shunting; renin is elevated due to aldosterone deficiency (this part is correct)."],
      highYieldPoint: "21-hydroxylase deficiency (most common CAH): ↑17-OH-progesterone, ↓cortisol, ↓aldosterone, ↑androgens. XX virilization + salt wasting."
    },
    {
      vignette: "A 19-year-old woman presents with cyclic pelvic pain but no menstrual bleeding. She underwent menarche at age 13. Examination reveals a bulging, bluish membrane at the vaginal introitus. Ultrasound shows hematocolpos.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Complete androgen insensitivity syndrome","Müllerian agenesis","Transverse vaginal septum","Imperforate hymen","Cervical stenosis"],
      correctIndex: 3,
      explanation: "An imperforate hymen obstructs menstrual outflow, causing hematocolpos (blood accumulation in the vagina) and hematometra (blood in the uterus). Patients experience cyclic pain at the expected time of menses without visible bleeding. The classic finding is a bulging, bluish membrane at the introitus. Treatment is surgical incision of the hymen.",
      optionExplanations: ["Incorrect: CAIS patients are 46,XY with absent uterus; they do not accumulate menstrual blood.","Incorrect: Müllerian agenesis presents with primary amenorrhea without cyclic pain (no uterus present) and a normal external genital examination.","Incorrect: Transverse vaginal septum can cause similar obstruction but does not present as a visible bulging membrane at the introitus.","Correct: Imperforate hymen → cyclic pain without bleeding, bulging bluish membrane at introitus, hematocolpos. Treat with surgical excision.","Incorrect: Cervical stenosis can impede outflow but would not cause a visible membrane at the introitus."],
      highYieldPoint: "Imperforate hymen: cyclic pain + no menses + bulging bluish introital membrane + hematocolpos. Simple surgical correction."
    },
    {
      vignette: "A 33-year-old woman undergoing workup for infertility has a basal body temperature chart showing a monophasic pattern with no sustained temperature rise. She has regular 28-day cycles. Serum progesterone measured on cycle day 21 is 1.2 ng/mL (normal luteal >3 ng/mL).",
      question: "Which of the following best explains this patient's finding?",
      options: ["Hyperthyroidism accelerating steroid metabolism","Luteal phase deficiency with adequate ovulation","Premature ovarian insufficiency","Anovulatory cycles","Exogenous progesterone use suppressing endogenous production"],
      correctIndex: 3,
      explanation: "A monophasic basal body temperature chart (no sustained rise of 0.3-0.5°C) and low day-21 progesterone indicate anovulation. After ovulation, the corpus luteum secretes progesterone, which raises basal body temperature and prepares the endometrium for implantation. Without ovulation, no corpus luteum forms and progesterone remains low.",
      optionExplanations: ["Incorrect: Hyperthyroidism can cause menstrual irregularities but would not produce a classic monophasic temperature pattern with regular cycles.","Incorrect: Luteal phase deficiency shows a temperature rise but with inadequate progesterone levels and shortened luteal phase; the chart would still be biphasic.","Incorrect: POI typically presents with irregular or absent cycles and elevated FSH, not regular 28-day cycles.","Correct: No temperature rise + low day-21 progesterone = anovulation. No corpus luteum → no progesterone surge.","Incorrect: Exogenous progesterone would actually raise (not lower) serum progesterone levels."],
      highYieldPoint: "Biphasic BBT = ovulation occurred (progesterone thermogenic). Monophasic BBT + low day-21 progesterone = anovulation."
    },
    {
      vignette: "A 35-year-old woman at 8 weeks of gestation presents with nausea, breast tenderness, and fatigue. Serum β-hCG is appropriately elevated. She asks why her symptoms are so pronounced in the first trimester.",
      question: "Which of the following structures is the primary source of progesterone maintaining this pregnancy at 8 weeks?",
      options: ["Syncytiotrophoblast of the placenta","Maternal adrenal cortex","Fetal liver","Decidualized endometrium","Corpus luteum of the ovary"],
      correctIndex: 4,
      explanation: "During the first trimester (approximately weeks 1-10), the corpus luteum is the primary source of progesterone maintaining pregnancy. hCG from the syncytiotrophoblast rescues the corpus luteum from regression. Around weeks 8-10, the placenta takes over progesterone production (the luteal-placental shift).",
      optionExplanations: ["Incorrect: The syncytiotrophoblast produces hCG and eventually takes over progesterone production, but not until approximately weeks 8-10 (the luteal-placental shift).","Incorrect: The adrenal cortex produces small amounts of progesterone but is not the primary source during pregnancy.","Incorrect: The fetal liver does not produce progesterone for pregnancy maintenance.","Incorrect: The decidualized endometrium responds to progesterone but does not produce significant amounts of it.","Correct: Corpus luteum is the primary progesterone source in early pregnancy (weeks 1-8/10), maintained by hCG from the trophoblast."],
      highYieldPoint: "Corpus luteum → progesterone in first trimester (maintained by hCG). Luteal-placental shift at ~8-10 weeks: placenta takes over."
    },
    {
      vignette: "A 24-year-old woman with a BMI of 34 kg/m² presents with irregular periods, acne, and difficulty conceiving. Laboratory testing shows elevated free testosterone, DHEA-S within normal limits, and an elevated LH:FSH ratio of 3:1. She desires pregnancy.",
      question: "Which of the following is the most appropriate first-line pharmacologic intervention to induce ovulation in this patient?",
      options: ["Leuprolide acetate","Metformin alone","Medroxyprogesterone acetate","Danazol","Letrozole"],
      correctIndex: 4,
      explanation: "Letrozole, an aromatase inhibitor, is now recommended as first-line ovulation induction therapy for PCOS. By blocking peripheral conversion of androgens to estrogens, letrozole reduces estrogen negative feedback on the hypothalamus, leading to increased FSH release and follicular development. It has higher live birth rates than clomiphene in PCOS patients.",
      optionExplanations: ["Incorrect: Leuprolide is a GnRH agonist (continuous use causes gonadotropin suppression); it is used for endometriosis and precocious puberty, not ovulation induction.","Incorrect: Metformin improves insulin sensitivity and may restore ovulation in some PCOS patients but is not first-line for ovulation induction.","Incorrect: Medroxyprogesterone is a progestin used for withdrawal bleeding or contraception, not ovulation induction.","Incorrect: Danazol is a synthetic androgen used to treat endometriosis; it would worsen hyperandrogenism.","Correct: Letrozole (aromatase inhibitor) is first-line for ovulation induction in PCOS — higher ovulation and live birth rates compared to clomiphene."],
      highYieldPoint: "Letrozole (aromatase inhibitor) is first-line for ovulation induction in PCOS. Mechanism: ↓estrogen → ↓negative feedback → ↑FSH → follicle development."
    },
    {
      vignette: "A 26-year-old woman presents to the emergency department with sudden-onset right lower quadrant pain, nausea, and vaginal bleeding. Her last menstrual period was 6 weeks ago. Urine pregnancy test is positive. Serum β-hCG is 1,200 mIU/mL. Transvaginal ultrasound shows no intrauterine gestational sac and a complex adnexal mass with free fluid in the cul-de-sac.",
      question: "Which of the following is the most common site for this condition?",
      options: ["Ovary","Peritoneal cavity","Isthmus of the fallopian tube","Cervix","Ampulla of the fallopian tube"],
      correctIndex: 4,
      explanation: "Ectopic pregnancy most commonly occurs in the ampulla of the fallopian tube (~70% of cases). The ampulla is the widest portion of the tube where fertilization normally occurs. Risk factors include prior PID, tubal surgery, and endometriosis. Rupture causes hemoperitoneum and can be life-threatening.",
      optionExplanations: ["Incorrect: Ovarian ectopic pregnancies are rare (~3% of ectopics).","Incorrect: Abdominal (peritoneal) pregnancies are very rare (~1.4% of ectopics).","Incorrect: The isthmus accounts for ~12% of ectopic pregnancies; it is the narrow portion of the tube.","Incorrect: Cervical ectopic pregnancies are extremely rare (<1%).","Correct: The ampulla of the fallopian tube is the most common site (~70%) for ectopic pregnancies, as it is where fertilization normally occurs."],
      highYieldPoint: "Ectopic pregnancy: most common in ampulla of fallopian tube (~70%). Risk factors: PID, prior ectopic, tubal surgery, IUD, endometriosis."
    }
  ],

  "Pregnancy & obstetric complications": [
    {
      vignette: "A 31-year-old primigravida at 34 weeks of gestation presents with sudden-onset severe abdominal pain and dark vaginal bleeding. She has a history of chronic hypertension. Examination shows a rigid, tender uterus. Fetal heart rate monitoring reveals late decelerations with decreased variability. Blood pressure is 160/100 mmHg.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Abruptio placentae","Placenta previa","Uterine rupture","Vasa previa","Bloody show of labor"],
      correctIndex: 0,
      explanation: "Placental abruption (abruptio placentae) is premature separation of the placenta from the uterine wall. It presents with painful vaginal bleeding (typically dark blood), a rigid and tender uterus (tetanic contractions), and signs of fetal distress. Chronic hypertension is the most significant risk factor.",
      optionExplanations: ["Correct: Placental abruption = painful dark bleeding + rigid tender uterus + fetal distress + hypertension as a major risk factor.","Incorrect: Placenta previa presents with painless, bright red vaginal bleeding; the uterus is soft and non-tender.","Incorrect: Uterine rupture typically occurs during labor in patients with prior uterine surgery; presents with sudden pain, loss of fetal station, and cessation of contractions.","Incorrect: Vasa previa causes painless bleeding with rupture of membranes; fetal vessels cross the internal os.","Incorrect: Bloody show is a small amount of blood-tinged mucus associated with cervical dilation in early labor, not a significant hemorrhage with uterine rigidity."],
      highYieldPoint: "Placental abruption: painful dark bleeding, rigid uterus, fetal distress. Risk factors: hypertension, cocaine, trauma, prior abruption."
    },
    {
      vignette: "A 29-year-old woman at 36 weeks of gestation presents with painless bright red vaginal bleeding that started 2 hours ago. She has had two prior cesarean deliveries. Ultrasound shows the placenta completely covering the internal cervical os. Fetal heart rate is reassuring.",
      question: "Which of the following is the most important management consideration in this patient?",
      options: ["Planned cesarean delivery with avoidance of digital cervical examination","Emergent cesarean delivery regardless of fetal status","Immediate digital cervical examination to assess dilation","Administration of misoprostol to induce labor","Amniotomy to accelerate delivery"],
      correctIndex: 0,
      explanation: "Placenta previa (placenta covering the internal os) requires cesarean delivery because vaginal delivery would necessitate passage through the placenta, causing life-threatening hemorrhage. Digital cervical examination is absolutely contraindicated as it may disrupt the placenta and cause massive bleeding. With a reassuring fetal heart rate, delivery can be planned rather than emergent.",
      optionExplanations: ["Correct: Placenta previa → planned cesarean delivery; digital cervical exam absolutely contraindicated due to hemorrhage risk.","Incorrect: With a reassuring fetal heart rate at 36 weeks, emergent delivery is not necessary; planned cesarean is preferred to optimize timing.","Incorrect: Digital cervical examination is CONTRAINDICATED in placenta previa as it may provoke catastrophic hemorrhage.","Incorrect: Misoprostol induces uterine contractions and is contraindicated in placenta previa (risk of hemorrhage) and in patients with prior cesarean scars (risk of rupture).","Incorrect: Amniotomy would provoke hemorrhage and is contraindicated in placenta previa."],
      highYieldPoint: "Placenta previa: painless bright red bleeding, NO digital cervical exam, deliver by cesarean section."
    },
    {
      vignette: "A 24-year-old primigravida at 35 weeks of gestation presents with headache, visual disturbances, and right upper quadrant pain. Blood pressure is 168/112 mmHg. Laboratory studies show platelets 82,000/μL, AST 312 U/L, ALT 287 U/L, LDH 680 U/L, and peripheral smear reveals schistocytes. Serum haptoglobin is low.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["HELLP syndrome","Acute fatty liver of pregnancy","Thrombotic thrombocytopenic purpura","Intrahepatic cholestasis of pregnancy","Immune thrombocytopenic purpura"],
      correctIndex: 0,
      explanation: "HELLP syndrome (Hemolysis, Elevated Liver enzymes, Low Platelets) is a severe variant of preeclampsia. The combination of microangiopathic hemolytic anemia (schistocytes, low haptoglobin, elevated LDH), elevated transaminases, and thrombocytopenia in a hypertensive pregnant patient is diagnostic. Right upper quadrant pain results from hepatic capsule distension.",
      optionExplanations: ["Correct: HELLP = Hemolysis (schistocytes, ↑LDH, ↓haptoglobin) + Elevated Liver enzymes + Low Platelets in a preeclamptic patient.","Incorrect: Acute fatty liver of pregnancy presents with jaundice, hypoglycemia, and coagulopathy but typically does not feature the degree of hemolysis and hypertension seen here.","Incorrect: TTP presents with the pentad of hemolytic anemia, thrombocytopenia, neurologic symptoms, fever, and renal failure, but is not associated with hypertension or liver enzyme elevation to this degree.","Incorrect: Intrahepatic cholestasis presents with pruritus and elevated bile acids, not with hemolysis or thrombocytopenia.","Incorrect: ITP causes isolated thrombocytopenia without hemolysis or liver enzyme elevation."],
      highYieldPoint: "HELLP syndrome: Hemolysis (schistocytes, ↑LDH, ↓haptoglobin), Elevated Liver enzymes, Low Platelets. Severe form of preeclampsia."
    },
    {
      vignette: "A 22-year-old woman at 10 weeks of gestation presents with severe nausea, vomiting, and vaginal bleeding. Her uterine size is larger than expected for gestational age. Serum β-hCG is 285,000 mIU/mL. Ultrasound reveals a 'snowstorm' pattern with no identifiable fetus. She is mildly tachycardic and has fine tremor in her hands.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Threatened abortion with twin gestation","Complete hydatidiform mole","Partial hydatidiform mole","Choriocarcinoma","Ectopic pregnancy"],
      correctIndex: 1,
      explanation: "A complete hydatidiform mole results from fertilization of an empty ovum (46,XX or 46,XY, entirely paternal origin). It presents with markedly elevated β-hCG, uterus larger than dates, 'snowstorm' ultrasound pattern with no fetal parts, and can cause hyperthyroidism (hCG cross-reacts with TSH receptor). The tachycardia and tremor suggest thyrotoxicosis.",
      optionExplanations: ["Incorrect: Twin gestation does not produce the snowstorm ultrasound pattern or the extreme hCG elevation seen here.","Correct: Complete mole = 46,XX (paternal origin), no fetal parts, snowstorm pattern, markedly ↑hCG, uterus larger than dates, possible hyperthyroidism.","Incorrect: A partial mole has a triploid karyotype (69,XXX or 69,XXY) and contains fetal parts; the uterus is typically small for dates.","Incorrect: Choriocarcinoma can cause elevated hCG but typically occurs after a molar pregnancy, abortion, or normal delivery; it does not present with a primary snowstorm pattern.","Incorrect: Ectopic pregnancy shows no intrauterine gestational sac but would not produce the snowstorm pattern or extreme hCG elevation."],
      highYieldPoint: "Complete mole: 46,XX (all paternal), no fetal parts, snowstorm pattern, very high hCG, risk of choriocarcinoma. Partial mole: 69,XXY, fetal parts present."
    },
    {
      vignette: "A 30-year-old woman, gravida 2 para 1, at 28 weeks of gestation presents with preterm contractions. She received antenatal corticosteroids. The infant is delivered at 29 weeks and develops respiratory distress shortly after birth. Chest X-ray shows diffuse ground-glass opacities with air bronchograms.",
      question: "Deficiency of which of the following substances is most directly responsible for this neonate's respiratory condition?",
      options: ["α1-antitrypsin","Surfactant (dipalmitoylphosphatidylcholine)","Mucus secreted by Clara cells","Angiotensin-converting enzyme","Immunoglobulin A"],
      correctIndex: 1,
      explanation: "Neonatal respiratory distress syndrome (RDS) is caused by surfactant deficiency in premature infants. Surfactant, primarily dipalmitoylphosphatidylcholine (DPPC), is produced by type II pneumocytes starting around week 26 but reaches adequate levels around week 35. Surfactant reduces alveolar surface tension, preventing atelectasis. Antenatal corticosteroids stimulate surfactant production.",
      optionExplanations: ["Incorrect: α1-antitrypsin deficiency causes emphysema in adults, not neonatal respiratory distress.","Correct: Neonatal RDS = surfactant deficiency (↓DPPC from immature type II pneumocytes) → ↑surface tension → atelectasis → ground-glass opacities.","Incorrect: Clara cells (club cells) secrete protective proteins in bronchioles; their deficiency does not cause RDS.","Incorrect: ACE converts angiotensin I to II in the pulmonary vasculature; its deficiency is not relevant to neonatal RDS.","Incorrect: IgA deficiency causes mucosal immune deficiency, not respiratory distress at birth."],
      highYieldPoint: "Neonatal RDS: surfactant (DPPC) deficiency from immature type II pneumocytes. Lecithin:sphingomyelin ratio ≥2 indicates lung maturity."
    },
    {
      vignette: "A 26-year-old primigravida at 30 weeks of gestation presents for routine prenatal care. Blood pressure is 152/96 mmHg, confirmed on repeat measurement. Urinalysis shows 2+ proteinuria (300 mg/24h collection). She has mild pedal edema. Serum creatinine is 0.9 mg/dL. Liver enzymes and platelet count are normal.",
      question: "Which of the following is the most likely underlying pathophysiology of this patient's condition?",
      options: ["Chronic essential hypertension exacerbated by pregnancy","Abnormal trophoblast invasion of spiral arteries leading to placental ischemia","Renal artery stenosis causing secondary hypertension","Increased cardiac output causing physiologic hypertension of pregnancy","Pheochromocytoma with catecholamine excess"],
      correctIndex: 1,
      explanation: "Preeclampsia results from abnormal placentation in which cytotrophoblasts fail to adequately invade and remodel the uterine spiral arteries. This leads to placental ischemia, which triggers release of antiangiogenic factors (sFlt-1, soluble endoglin) into the maternal circulation. These factors cause widespread endothelial dysfunction, manifesting as hypertension, proteinuria, and end-organ damage.",
      optionExplanations: ["Incorrect: Chronic hypertension predates pregnancy (before 20 weeks) and does not typically present with new proteinuria at 30 weeks.","Correct: Preeclampsia = defective spiral artery remodeling → placental ischemia → antiangiogenic factors → endothelial dysfunction → HTN + proteinuria.","Incorrect: Renal artery stenosis is a rare cause of secondary hypertension not specific to pregnancy.","Incorrect: Cardiac output increases physiologically in pregnancy but does not cause pathologic hypertension with proteinuria.","Incorrect: Pheochromocytoma is rare and presents with episodic hypertension, headaches, diaphoresis, and palpitations; not associated with proteinuria."],
      highYieldPoint: "Preeclampsia: abnormal trophoblast invasion → placental ischemia → ↑sFlt-1, ↑soluble endoglin → endothelial dysfunction → HTN + proteinuria after 20 weeks."
    },
    {
      vignette: "A 34-year-old woman, gravida 3 para 2, with type 1 diabetes and poor glycemic control (HbA1c 9.2%) delivers at 38 weeks. The neonate weighs 4,800 g. Shortly after delivery, the infant becomes jittery, diaphoretic, and lethargic. Serum glucose is 28 mg/dL.",
      question: "Which of the following best explains the mechanism of neonatal hypoglycemia in this infant?",
      options: ["Pancreatic agenesis due to teratogenic effects of hyperglycemia","Maternal insulin crossing the placenta and suppressing fetal gluconeogenesis","Transient neonatal hyperinsulinism from fetal beta cell hyperplasia","Glycogen storage disease type I (von Gierke disease)","Adrenal insufficiency from maternal corticosteroid use"],
      correctIndex: 2,
      explanation: "Maternal hyperglycemia leads to fetal hyperglycemia (glucose crosses the placenta). The fetus compensates with beta cell hyperplasia and hyperinsulinism. After delivery, the glucose supply from the mother is abruptly cut off, but the infant's pancreas continues to secrete excessive insulin, causing severe neonatal hypoglycemia. The macrosomia (4,800 g) is also due to insulin acting as a growth factor.",
      optionExplanations: ["Incorrect: Hyperglycemia does not cause pancreatic agenesis; rather it stimulates beta cell hypertrophy/hyperplasia.","Incorrect: Insulin is a large peptide that does NOT cross the placenta. The neonatal hyperinsulinism is endogenous.","Correct: Maternal hyperglycemia → fetal hyperglycemia → fetal beta cell hyperplasia → hyperinsulinism. After birth, loss of glucose supply + continued high insulin → neonatal hypoglycemia.","Incorrect: Von Gierke disease is a genetic condition unrelated to maternal diabetes; it presents with hepatomegaly and fasting hypoglycemia.","Incorrect: There is no indication of maternal corticosteroid use; adrenal insufficiency is not the mechanism here."],
      highYieldPoint: "Infant of diabetic mother: fetal hyperinsulinism → macrosomia + neonatal hypoglycemia. Insulin does NOT cross the placenta; glucose DOES."
    },
    {
      vignette: "A 28-year-old Rh-negative woman, gravida 2 para 1, delivers an Rh-positive infant. She did not receive anti-D immunoglobulin (RhoGAM) during her first pregnancy or postpartum. An antibody screen now shows anti-D antibodies. She is concerned about future pregnancies.",
      question: "Which type of hypersensitivity reaction is responsible for hemolytic disease of the newborn in a subsequent Rh-positive pregnancy?",
      options: ["Type I (immediate/anaphylactic)","Type III (immune complex)","Type II (antibody-mediated cytotoxic)","Type IV (delayed-type/cell-mediated)","Type V (stimulatory)"],
      correctIndex: 2,
      explanation: "Hemolytic disease of the newborn (erythroblastosis fetalis) is a type II hypersensitivity reaction. Maternal IgG anti-D antibodies cross the placenta and bind to Rh-positive fetal red blood cells, leading to complement activation and opsonization, resulting in fetal hemolysis, anemia, and potentially hydrops fetalis.",
      optionExplanations: ["Incorrect: Type I involves IgE-mediated mast cell degranulation (allergies, anaphylaxis), not antibody-mediated red cell destruction.","Incorrect: Type III involves deposition of antigen-antibody immune complexes in tissues (e.g., serum sickness, lupus nephritis).","Correct: Type II hypersensitivity = IgG/IgM antibodies against cell surface antigens → complement-mediated lysis and opsonization. Anti-D IgG crosses placenta → fetal RBC destruction.","Incorrect: Type IV is mediated by T cells, not antibodies (e.g., TB skin test, contact dermatitis).","Incorrect: Type V (stimulatory) involves antibodies that activate receptors (e.g., Graves disease); it does not cause cell destruction."],
      highYieldPoint: "Rh hemolytic disease of the newborn: Type II hypersensitivity. Prevent with RhoGAM (anti-D IgG) at 28 weeks and postpartum."
    },
    {
      vignette: "A 33-year-old woman at 18 weeks of gestation undergoes a quad screen. Results show elevated maternal serum α-fetoprotein (MSAFP), decreased unconjugated estriol, elevated β-hCG, and elevated inhibin A.",
      question: "Which of the following conditions is most associated with this screening pattern?",
      options: ["Neural tube defect","Trisomy 18 (Edwards syndrome)","Trisomy 21 (Down syndrome)","Turner syndrome (45,X)","Trisomy 13 (Patau syndrome)"],
      correctIndex: 2,
      explanation: "The quad screen pattern for Down syndrome (trisomy 21) shows elevated β-hCG, elevated inhibin A, decreased MSAFP, and decreased unconjugated estriol. However, this question describes elevated MSAFP with the other markers — reviewing the values, the combination of ↑hCG and ↑inhibin A with ↓estriol is most characteristic of Down syndrome. The elevated AFP might suggest an open neural tube defect, but the full pattern with elevated hCG and inhibin A is most consistent with trisomy 21.",
      optionExplanations: ["Incorrect: Neural tube defects show ↑AFP only; hCG, estriol, and inhibin A are typically normal.","Incorrect: Trisomy 18 shows ↓↓ all four markers (AFP, hCG, estriol, inhibin A).","Correct: Down syndrome quad screen: ↑hCG, ↑inhibin A, ↓AFP (typically), ↓estriol. The elevated hCG and inhibin A are the most distinguishing features.","Incorrect: Turner syndrome is not a standard quad screen diagnosis; it may show mildly elevated hCG.","Incorrect: Trisomy 13 does not have a well-defined quad screen pattern and is not typically screened for with this test."],
      highYieldPoint: "Down syndrome quad screen: ↑β-hCG, ↑inhibin A, ↓AFP, ↓estriol. Trisomy 18: all four ↓↓. Neural tube defect: ↑AFP only."
    },
    {
      vignette: "A 37-year-old woman at 32 weeks of gestation presents with severe generalized itching, especially on her palms and soles, that worsens at night. She has no rash. Laboratory studies show total bile acids 52 μmol/L (normal <10), mildly elevated transaminases, and normal bilirubin.",
      question: "Which of the following is the greatest risk to the fetus associated with this condition?",
      options: ["Fetal growth restriction","Congenital malformations","Neonatal jaundice requiring exchange transfusion","Intrauterine fetal demise (stillbirth)","Fetal hydrocephalus"],
      correctIndex: 3,
      explanation: "Intrahepatic cholestasis of pregnancy (ICP) presents with intense pruritus (especially palms and soles) and elevated serum bile acids. The major fetal risk is sudden intrauterine fetal demise (stillbirth), thought to be caused by bile acid-induced fetal cardiac arrhythmias and vasoconstriction of placental blood vessels. Early delivery is often recommended at 36-37 weeks.",
      optionExplanations: ["Incorrect: While fetal growth restriction is a concern in many pregnancy complications, the major feared complication of ICP is stillbirth.","Incorrect: ICP typically occurs in the third trimester, past the period of organogenesis; it is not associated with congenital malformations.","Incorrect: Neonatal jaundice from ICP is usually mild and does not typically require exchange transfusion.","Correct: Intrahepatic cholestasis of pregnancy → ↑bile acids → risk of sudden fetal demise from cardiac arrhythmias. Treat with ursodeoxycholic acid; deliver at 36-37 weeks.","Incorrect: ICP is not associated with fetal hydrocephalus."],
      highYieldPoint: "Intrahepatic cholestasis of pregnancy: pruritus (palms/soles) + ↑bile acids. Major risk = sudden fetal demise. Treat: ursodeoxycholic acid, deliver 36-37 wk."
    },
    {
      vignette: "A 25-year-old primigravida at 39 weeks of gestation is in active labor. After spontaneous vaginal delivery of the fetal head, the anterior shoulder cannot be delivered with gentle downward traction. The fetal head retracts against the perineum ('turtle sign').",
      question: "Which of the following is the most appropriate initial maneuver to manage this obstetric emergency?",
      options: ["Fundal pressure to push the fetus out","Symphysiotomy","Zavanelli maneuver followed by cesarean delivery","McRoberts maneuver with suprapubic pressure","Immediate application of forceps to the fetal head"],
      correctIndex: 3,
      explanation: "Shoulder dystocia occurs when the anterior fetal shoulder impacts behind the maternal pubic symphysis after delivery of the head. The McRoberts maneuver (hyperflexion of maternal thighs onto the abdomen) flattens the sacral promontory and rotates the pubic symphysis cephalad, combined with suprapubic pressure to dislodge the anterior shoulder. This is the first-line intervention.",
      optionExplanations: ["Incorrect: Fundal pressure is CONTRAINDICATED in shoulder dystocia as it can worsen impaction and cause uterine rupture.","Incorrect: Symphysiotomy is a rarely performed procedure of last resort, not the initial intervention.","Incorrect: The Zavanelli maneuver (cephalic replacement followed by cesarean) is a last resort when all other maneuvers fail.","Correct: McRoberts maneuver (maternal thigh hyperflexion) + suprapubic pressure is the first-line management for shoulder dystocia.","Incorrect: Forceps applied to the head will not resolve the shoulder impaction and risk fetal and maternal injury."],
      highYieldPoint: "Shoulder dystocia: turtle sign → McRoberts maneuver (hyperflexion of thighs) + suprapubic pressure first. NEVER fundal pressure."
    },
    {
      vignette: "A 30-year-old woman at 16 weeks of gestation presents with painless cervical dilation and bulging membranes. She has a history of two prior second-trimester pregnancy losses with similar presentations. There are no uterine contractions on tocodynamometry.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Preterm premature rupture of membranes","Chorioamnionitis","Inevitable abortion","Cervical insufficiency","Placental abruption"],
      correctIndex: 3,
      explanation: "Cervical insufficiency (previously called incompetent cervix) presents with painless cervical dilation in the second trimester without contractions, often leading to pregnancy loss. The history of recurrent second-trimester losses with painless dilation is classic. Treatment is cerclage (cervical suture) placement, ideally prophylactically at 12-14 weeks in patients with known history.",
      optionExplanations: ["Incorrect: PPROM involves rupture of membranes with leaking fluid, not painless dilation with intact bulging membranes.","Incorrect: Chorioamnionitis presents with fever, uterine tenderness, maternal/fetal tachycardia, and foul-smelling discharge.","Incorrect: Inevitable abortion presents with bleeding and cramping with an open cervix, typically in the first trimester.","Correct: Cervical insufficiency = painless second-trimester cervical dilation without contractions, recurrent pregnancy loss. Treat with cerclage.","Incorrect: Placental abruption presents with painful bleeding and uterine rigidity, not painless cervical dilation."],
      highYieldPoint: "Cervical insufficiency: painless cervical dilation in 2nd trimester, no contractions, recurrent loss. Treat: McDonald cerclage at 12-14 weeks."
    },
    {
      vignette: "A 27-year-old woman delivers vaginally at 39 weeks of gestation. Following placental delivery, she experiences heavy vaginal bleeding estimated at 1,200 mL. The uterus feels soft and boggy on bimanual examination. Vital signs show tachycardia and hypotension.",
      question: "Which of the following is the most common cause of postpartum hemorrhage?",
      options: ["Retained placental fragments","Uterine inversion","Cervical laceration","Coagulopathy","Uterine atony"],
      correctIndex: 4,
      explanation: "Uterine atony is the most common cause of postpartum hemorrhage, accounting for approximately 70-80% of cases. After placental delivery, the myometrium must contract to compress the spiral arteries at the placental site. When the uterus fails to contract (atony), these vessels remain open, causing massive hemorrhage. A boggy uterus on palpation is the hallmark finding.",
      optionExplanations: ["Incorrect: Retained placenta is the second most common cause but presents with incomplete placental delivery or a palpable tissue mass.","Incorrect: Uterine inversion is rare and presents with a mass protruding from the cervix with severe pain and hemodynamic instability.","Incorrect: Cervical lacerations cause bleeding but the uterus would be firm, not boggy.","Incorrect: Coagulopathy (e.g., DIC) can cause postpartum hemorrhage but is less common than atony.","Correct: Uterine atony is the #1 cause of postpartum hemorrhage (~70-80%). Boggy uterus on exam. Treat: bimanual massage, oxytocin, methylergonovine, carboprost."],
      highYieldPoint: "Postpartum hemorrhage causes (4 T's): Tone (atony, most common), Tissue (retained placenta), Trauma (laceration), Thrombin (coagulopathy)."
    },
    {
      vignette: "A 35-year-old woman at 26 weeks of gestation presents with preterm labor. Tocolytics are administered, and betamethasone is given intramuscularly. She asks about the purpose of the corticosteroid injection.",
      question: "Which of the following best describes the mechanism by which antenatal corticosteroids benefit the preterm fetus?",
      options: ["Inhibition of prostaglandin synthesis to reduce uterine contractions","Acceleration of closure of the ductus arteriosus","Enhancement of fetal renal maturation to prevent oligohydramnios","Suppression of fetal adrenal androgen production","Stimulation of fetal type II pneumocyte surfactant production"],
      correctIndex: 4,
      explanation: "Antenatal corticosteroids (betamethasone or dexamethasone) given between 24-34 weeks accelerate fetal lung maturity by stimulating type II pneumocytes to produce surfactant. This significantly reduces the incidence and severity of neonatal respiratory distress syndrome, intraventricular hemorrhage, and necrotizing enterocolitis.",
      optionExplanations: ["Incorrect: Tocolytics (not corticosteroids) are used to inhibit contractions; corticosteroids do not have direct tocolytic effects.","Incorrect: Indomethacin (a prostaglandin inhibitor) promotes ductus arteriosus closure, not corticosteroids.","Incorrect: Corticosteroids do not primarily target fetal renal maturation.","Incorrect: Suppression of fetal adrenal androgens is not the therapeutic purpose of antenatal steroids.","Correct: Betamethasone/dexamethasone stimulate fetal type II pneumocytes → ↑surfactant production → ↓neonatal RDS risk. Given at 24-34 weeks."],
      highYieldPoint: "Antenatal corticosteroids (betamethasone/dexamethasone): given 24-34 weeks to ↑fetal lung surfactant, ↓RDS, ↓IVH, ↓NEC."
    },
    {
      vignette: "A 23-year-old primigravida at 38 weeks of gestation presents in labor. Fetal heart rate monitoring shows repetitive decreases in heart rate that begin after the peak of uterine contractions and return to baseline after the contraction ends. The decelerations have a uniform shape.",
      question: "Which of the following is the most likely mechanism of these fetal heart rate changes?",
      options: ["Head compression during descent through the birth canal","Umbilical cord compression during contractions","Fetal tachyarrhythmia due to catecholamine surge","Fetal autonomic immaturity with random heart rate fluctuations","Uteroplacental insufficiency causing transient fetal hypoxia"],
      correctIndex: 4,
      explanation: "Late decelerations begin after the peak of uterine contractions and return to baseline after the contraction ends. They are caused by uteroplacental insufficiency — during contractions, blood flow to the intervillous space is transiently reduced, causing fetal hypoxia. The delayed onset reflects the time needed for the chemoreceptor reflex or direct myocardial depression to manifest.",
      optionExplanations: ["Incorrect: Head compression causes early decelerations, which mirror the contraction and begin with its onset, not after the peak.","Incorrect: Umbilical cord compression causes variable decelerations, which have an abrupt onset, variable shape, and variable timing relative to contractions.","Incorrect: Fetal tachyarrhythmia would present as sustained elevated baseline heart rate, not repetitive decelerations.","Incorrect: Fetal autonomic immaturity may affect variability but does not cause uniform, repetitive decelerations with a consistent relationship to contractions.","Correct: Late decelerations = onset after contraction peak, uniform shape → uteroplacental insufficiency → fetal hypoxia. Ominous if persistent/recurrent."],
      highYieldPoint: "Early decelerations = head compression (benign). Variable = cord compression. Late = uteroplacental insufficiency (ominous, needs intervention)."
    }
  ],

  "Gynecologic pathology": [
    {
      vignette: "A 45-year-old woman presents with heavy menstrual bleeding and pelvic pressure. Pelvic ultrasound reveals multiple well-circumscribed, whorled masses within the myometrium. The largest is 6 cm in diameter. She has no postmenopausal bleeding.",
      question: "Which of the following best characterizes the most common neoplasm of the uterus?",
      options: ["Leiomyoma (fibroid)","Endometrial adenocarcinoma","Leiomyosarcoma","Endometrial stromal sarcoma","Adenomyosis"],
      correctIndex: 0,
      explanation: "Leiomyomas (fibroids) are the most common tumors of the uterus, arising from smooth muscle cells of the myometrium. They are estrogen and progesterone sensitive, typically presenting in reproductive-age women with menorrhagia, pelvic pressure, and bulk symptoms. Histologically, they show well-circumscribed whorled bundles of smooth muscle without atypia.",
      optionExplanations: ["Correct: Leiomyomas are the most common uterine tumors — benign smooth muscle neoplasms, estrogen-responsive, whorled appearance on imaging and histology.","Incorrect: Endometrial adenocarcinoma is the most common gynecologic malignancy but is not the most common uterine neoplasm overall (fibroids are far more prevalent).","Incorrect: Leiomyosarcoma is a rare malignant smooth muscle tumor; it arises de novo, not from leiomyomas, and shows atypia, mitoses, and necrosis.","Incorrect: Endometrial stromal sarcoma is a rare uterine malignancy arising from endometrial stroma.","Incorrect: Adenomyosis is the presence of endometrial tissue within the myometrium; it is not a neoplasm."],
      highYieldPoint: "Leiomyoma: most common uterine tumor, benign smooth muscle, estrogen-dependent, whorled bundles, well-circumscribed. Leiomyosarcoma arises de novo."
    },
    {
      vignette: "A 62-year-old postmenopausal woman presents with vaginal bleeding. She has a BMI of 38 kg/m², type 2 diabetes, and has never been pregnant. Endometrial biopsy shows complex hyperplasia with atypia. She subsequently undergoes hysterectomy, which reveals invasion of the inner half of the myometrium.",
      question: "Which of the following risk factors is most directly related to the development of this patient's endometrial pathology?",
      options: ["Chronic exposure to unopposed estrogen","Prolonged combined oral contraceptive pill use","Human papillomavirus infection","Lynch syndrome (hereditary nonpolyposis colorectal cancer)","Exposure to diethylstilbestrol in utero"],
      correctIndex: 0,
      explanation: "Endometrial adenocarcinoma (type I) develops through a hyperplasia-to-carcinoma sequence driven by chronic unopposed estrogen exposure. This patient's risk factors — obesity (aromatization of androgens to estrogen in adipose tissue), nulliparity (no protective progesterone from pregnancy), and diabetes — all contribute to a hyperestrogenic state without adequate progesterone opposition.",
      optionExplanations: ["Correct: Unopposed estrogen → endometrial hyperplasia → atypia → type I endometrial adenocarcinoma. Risk factors: obesity, anovulation, nulliparity, tamoxifen, estrogen-only HRT.","Incorrect: Combined OCPs actually contain progesterone, which is protective against endometrial cancer; they reduce risk.","Incorrect: HPV is associated with cervical (not endometrial) carcinoma.","Incorrect: Lynch syndrome does increase endometrial cancer risk, but it causes type II (non-estrogen-dependent) tumors, and the question asks about the most directly related factor.","Incorrect: DES exposure in utero is associated with clear cell adenocarcinoma of the vagina, not endometrial carcinoma."],
      highYieldPoint: "Type I endometrial cancer: estrogen-dependent, hyperplasia→carcinoma sequence. Risk: obesity, nulliparity, anovulation, tamoxifen, estrogen-only HRT."
    },
    {
      vignette: "A 28-year-old woman presents with dysmenorrhea, dyspareunia, and infertility. Laparoscopy reveals bluish-black 'powder burn' lesions on the pelvic peritoneum and bilateral ovarian cysts containing dark, thick fluid ('chocolate cysts'). Biopsy of the ovarian cysts shows endometrial glands and stroma.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Endometriosis","Ovarian teratoma","Pelvic inflammatory disease","Ovarian fibroma","Ruptured corpus luteum cyst"],
      correctIndex: 0,
      explanation: "Endometriosis is defined by the presence of functional endometrial glands and stroma outside the uterine cavity. Ovarian endometriomas ('chocolate cysts') contain old hemorrhagic material (dark, thick fluid). The ectopic tissue responds to hormonal cycling, causing chronic inflammation, fibrosis, adhesions, and the classic triad of dysmenorrhea, dyspareunia, and infertility.",
      optionExplanations: ["Correct: Endometriosis = ectopic endometrial glands and stroma. Chocolate cysts (endometriomas) + powder-burn lesions + dysmenorrhea, dyspareunia, infertility.","Incorrect: Teratomas contain tissue from multiple germ layers (hair, teeth, sebaceous material), not endometrial glands and stroma.","Incorrect: PID is caused by ascending bacterial infection and presents with cervical motion tenderness, purulent discharge, and fever.","Incorrect: Ovarian fibromas are solid tumors of stromal origin; they do not contain hemorrhagic fluid or endometrial tissue.","Incorrect: A ruptured corpus luteum causes acute pain and hemorrhage but does not produce powder-burn peritoneal lesions or endometrial tissue on biopsy."],
      highYieldPoint: "Endometriosis: ectopic endometrial glands + stroma. Chocolate cysts (ovary), powder-burn lesions. Triad: dysmenorrhea, dyspareunia, infertility."
    },
    {
      vignette: "A 55-year-old woman undergoes routine Pap smear showing high-grade squamous intraepithelial lesion (HSIL). Colposcopy-directed biopsy reveals cervical intraepithelial neoplasia grade 3 (CIN 3) with full-thickness dysplastic squamous cells confined to the epithelium. Immunohistochemistry shows overexpression of p16.",
      question: "Which of the following viral proteins is most directly responsible for the dysregulation driving this lesion?",
      options: ["HPV E6 protein degrading p53","HPV E7 protein inactivating Rb","HPV L1 capsid protein integrating into the host genome","HPV E2 protein activating telomerase","HPV E1 protein inhibiting apoptosis"],
      correctIndex: 1,
      explanation: "HPV E7 protein binds and inactivates the retinoblastoma protein (Rb), releasing E2F transcription factors and driving uncontrolled cell cycle progression. Loss of Rb function leads to compensatory overexpression of p16 (a CDK inhibitor normally suppressed by Rb pathway signaling), making p16 a useful immunohistochemical marker for high-risk HPV-driven lesions.",
      optionExplanations: ["Incorrect: E6 degrades p53 (via ubiquitin ligase E6-AP), which is important for carcinogenesis, but p16 overexpression specifically results from E7-mediated Rb inactivation.","Correct: E7 binds Rb → releases E2F → uncontrolled S-phase entry. Loss of Rb function → compensatory p16 overexpression (diagnostic marker).","Incorrect: L1 is the major capsid protein used in HPV vaccines; it does not integrate into the genome or drive dysplasia.","Incorrect: E2 is a transcriptional regulator; its disruption during viral integration upregulates E6/E7, but E2 does not directly activate telomerase.","Incorrect: E1 is involved in viral DNA replication (helicase function), not direct inhibition of apoptosis."],
      highYieldPoint: "HPV oncoproteins: E6 degrades p53, E7 inactivates Rb. p16 overexpression = surrogate marker for E7/Rb pathway disruption in HPV-driven dysplasia."
    },
    {
      vignette: "A 35-year-old woman presents with a 3-month history of foul-smelling vaginal discharge and postcoital bleeding. Speculum examination reveals an exophytic cervical mass. Biopsy shows invasive squamous cell carcinoma. Imaging shows the tumor has invaded the parametrium but not the pelvic sidewall.",
      question: "At which anatomic junction does cervical squamous cell carcinoma most commonly arise?",
      options: ["Endocervical canal at the internal os","Squamocolumnar junction (transformation zone)","Vaginal fornix","Endometrial-endocervical junction","External cervical os exclusively"],
      correctIndex: 1,
      explanation: "Cervical squamous cell carcinoma arises at the squamocolumnar junction (SCJ), also called the transformation zone, where columnar epithelium of the endocervix meets squamous epithelium of the ectocervix. This zone undergoes squamous metaplasia and is the site most susceptible to HPV infection and subsequent dysplastic transformation.",
      optionExplanations: ["Incorrect: The internal os is the boundary between the cervix and uterine body; carcinoma does not preferentially arise there.","Correct: The squamocolumnar junction (transformation zone) is where metaplastic squamous cells are most vulnerable to HPV → CIN → squamous cell carcinoma.","Incorrect: The vaginal fornix is lined by squamous epithelium but is not the primary site of cervical carcinoma origin.","Incorrect: The endometrial-endocervical junction is the internal os boundary, not the typical origin of cervical SCC.","Incorrect: While the external os is near the transformation zone, the specific site is the SCJ where squamous metaplasia occurs."],
      highYieldPoint: "Cervical SCC arises at the squamocolumnar junction (transformation zone). Most common cervical cancer type. Strongly associated with HPV 16, 18."
    },
    {
      vignette: "A 22-year-old woman presents with a unilateral ovarian mass discovered incidentally on ultrasound. Surgical excision reveals a cystic mass containing hair, sebaceous material, teeth, and thyroid tissue. Histology shows mature tissues from all three germ layers.",
      question: "Which of the following best classifies this ovarian neoplasm?",
      options: ["Serous cystadenoma","Mature cystic teratoma (dermoid cyst)","Immature teratoma","Dysgerminoma","Granulosa cell tumor"],
      correctIndex: 1,
      explanation: "Mature cystic teratomas (dermoid cysts) are the most common ovarian germ cell tumors and the most common ovarian tumors in young women. They contain well-differentiated tissues from all three germ layers: ectoderm (skin, hair, neural tissue), mesoderm (bone, cartilage, muscle), and endoderm (thyroid, GI tissue). They are almost always benign.",
      optionExplanations: ["Incorrect: Serous cystadenomas are epithelial tumors lined by fallopian tube-type epithelium; they do not contain teeth or hair.","Correct: Mature cystic teratoma (dermoid cyst) = most common ovarian germ cell tumor in young women, contains mature tissues from all 3 germ layers, benign.","Incorrect: Immature teratomas contain immature (fetal-type) tissue, especially neuroepithelium; they are malignant and occur in younger patients.","Incorrect: Dysgerminomas are the female equivalent of seminomas; they are solid tumors composed of uniform cells, not cystic with differentiated tissues.","Incorrect: Granulosa cell tumors are sex cord-stromal tumors that produce estrogen; they do not contain ectodermal or endodermal elements."],
      highYieldPoint: "Mature cystic teratoma (dermoid): most common ovarian tumor in young women, all 3 germ layers, benign. Complication: ovarian torsion. Malignant transformation rare (~1%)."
    },
    {
      vignette: "A 60-year-old woman presents with abdominal distension, early satiety, and a pelvic mass. CT scan reveals bilateral complex adnexal masses with ascites and peritoneal studding. CA-125 is markedly elevated. Histology shows papillary architecture with psammoma bodies.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Mucinous cystadenocarcinoma","Endometrioid carcinoma of the ovary","Serous cystadenocarcinoma","Krukenberg tumor","Brenner tumor"],
      correctIndex: 2,
      explanation: "Serous cystadenocarcinoma is the most common malignant ovarian neoplasm. It typically presents bilaterally in postmenopausal women with advanced disease including ascites and peritoneal carcinomatosis. Histologic hallmarks include papillary architecture and psammoma bodies (concentric laminated calcifications). CA-125 is elevated and used for monitoring treatment response.",
      optionExplanations: ["Incorrect: Mucinous tumors are typically unilateral and large, filled with mucinous fluid; they lack psammoma bodies.","Incorrect: Endometrioid carcinoma of the ovary resembles endometrial carcinoma histologically and is associated with endometriosis; psammoma bodies are not characteristic.","Correct: Serous cystadenocarcinoma = most common ovarian malignancy, bilateral, papillary architecture, psammoma bodies, ↑CA-125, often presents late with ascites.","Incorrect: Krukenberg tumors are metastatic (usually from GI primaries, especially stomach) and show signet ring cells; they are not primary ovarian cancers.","Incorrect: Brenner tumors are transitional cell tumors of the ovary, usually benign and solid; they do not show papillary architecture with psammoma bodies."],
      highYieldPoint: "Serous cystadenocarcinoma: most common ovarian malignancy, bilateral, psammoma bodies, ↑CA-125. Often presents late (stage III/IV)."
    },
    {
      vignette: "A 50-year-old woman presents with right ovarian mass and new-onset ascites. Chest X-ray reveals a right-sided pleural effusion. After tumor removal, both the ascites and pleural effusion resolve. Histology of the ovarian mass shows a solid tumor composed of spindle-shaped cells.",
      question: "Which of the following syndromes best describes this clinical presentation?",
      options: ["Budd-Chiari syndrome","Pseudo-Meigs syndrome","Meigs syndrome","Paraneoplastic cerebellar degeneration","Carcinoid syndrome"],
      correctIndex: 2,
      explanation: "Meigs syndrome is the triad of ovarian fibroma (benign solid tumor of spindle-shaped stromal cells), ascites, and pleural effusion (typically right-sided). Both the ascites and pleural effusion resolve completely after tumor removal. The mechanism involves fluid transudation from the tumor surface into the peritoneal cavity, with subsequent movement to the pleural space via lymphatic channels.",
      optionExplanations: ["Incorrect: Budd-Chiari syndrome is hepatic vein thrombosis causing hepatomegaly, ascites, and abdominal pain; it is not associated with ovarian masses.","Incorrect: Pseudo-Meigs syndrome refers to a similar presentation but with other ovarian tumors (not fibroma), such as ovarian malignancies or struma ovarii.","Correct: Meigs syndrome = ovarian fibroma + ascites + right-sided pleural effusion. All resolve after tumor removal.","Incorrect: Paraneoplastic cerebellar degeneration is associated with anti-Yo antibodies in ovarian/breast cancer, presenting with ataxia, not effusions.","Incorrect: Carcinoid syndrome (flushing, diarrhea, wheezing) is caused by serotonin-secreting tumors, not fibroma."],
      highYieldPoint: "Meigs syndrome: ovarian fibroma + ascites + right pleural effusion → all resolve after tumor resection."
    },
    {
      vignette: "A 42-year-old woman presents with menorrhagia and a uniformly enlarged, globular uterus that is tender on palpation. Ultrasound shows a diffusely enlarged uterus with heterogeneous myometrial echotexture but no discrete masses. MRI shows thickening of the junctional zone >12 mm.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Uterine leiomyoma","Endometrial carcinoma","Adenomyosis","Uterine leiomyosarcoma","Endometrial polyp"],
      correctIndex: 2,
      explanation: "Adenomyosis is the presence of endometrial glands and stroma within the myometrium, causing diffuse uterine enlargement, menorrhagia, and dysmenorrhea. Unlike leiomyomas (which are well-circumscribed masses), adenomyosis produces a uniformly enlarged, boggy uterus. MRI showing junctional zone thickening >12 mm is diagnostic. It typically affects multiparous women aged 40-50.",
      optionExplanations: ["Incorrect: Leiomyomas present as well-circumscribed discrete masses, not diffuse myometrial heterogeneity without focal lesions.","Incorrect: Endometrial carcinoma presents with postmenopausal bleeding and thickened endometrium, not diffuse myometrial changes.","Correct: Adenomyosis = endometrial glands/stroma in the myometrium → diffusely enlarged boggy uterus, menorrhagia, dysmenorrhea. MRI: junctional zone >12 mm.","Incorrect: Leiomyosarcoma is a malignant tumor that grows rapidly and may show necrosis; it is typically a discrete mass.","Incorrect: Endometrial polyps are focal intrauterine masses that do not cause diffuse myometrial thickening."],
      highYieldPoint: "Adenomyosis: endometrial tissue in myometrium → diffusely enlarged boggy uterus, menorrhagia, dysmenorrhea. Definitive diagnosis: hysterectomy."
    },
    {
      vignette: "A 38-year-old woman with a history of irregular Pap smears undergoes cone biopsy. Pathology reveals CIN 3 with positive margins. She asks about the natural history of untreated high-grade cervical dysplasia.",
      question: "Which of the following HPV types poses the highest risk for progression to invasive cervical carcinoma?",
      options: ["HPV 6","HPV 11","HPV 42","HPV 16","HPV 43"],
      correctIndex: 3,
      explanation: "HPV 16 is the highest-risk HPV type, responsible for approximately 50-60% of cervical cancers worldwide. HPV 16 and 18 together account for ~70% of cases. These high-risk types encode oncoproteins E6 (degrades p53) and E7 (inactivates Rb) that drive malignant transformation. HPV 6 and 11 are low-risk types that cause genital warts (condylomata acuminata).",
      optionExplanations: ["Incorrect: HPV 6 is a low-risk type that causes benign genital warts (condylomata acuminata), not invasive carcinoma.","Incorrect: HPV 11 is also low-risk and causes genital warts and recurrent respiratory papillomatosis.","Incorrect: HPV 42 is a low-risk type not significantly associated with cervical malignancy.","Correct: HPV 16 is the highest-risk type for cervical cancer (~50-60% of cases). HPV 16 + 18 → ~70% of cervical cancers.","Incorrect: HPV 43 is a low-risk type with minimal oncogenic potential."],
      highYieldPoint: "High-risk HPV: 16, 18, 31, 33, 45 (16 is #1). Low-risk HPV: 6, 11 (warts). HPV vaccine covers 6, 11, 16, 18 (quadrivalent) or 9 types (9-valent)."
    },
    {
      vignette: "A 19-year-old woman is diagnosed with a rapidly enlarging ovarian mass. Serum AFP is markedly elevated, and LDH is normal. Histology shows Schiller-Duval bodies (structures resembling glomeruli). The tumor is unilateral.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Dysgerminoma","Embryonal carcinoma","Choriocarcinoma","Yolk sac tumor (endodermal sinus tumor)","Immature teratoma"],
      correctIndex: 3,
      explanation: "Yolk sac tumors (endodermal sinus tumors) are the most common malignant germ cell tumors in children. They produce AFP (α-fetoprotein) and show characteristic Schiller-Duval bodies (structures resembling glomeruli with a central vessel). These tumors are aggressive but chemosensitive.",
      optionExplanations: ["Incorrect: Dysgerminomas produce LDH and hCG (in some cases) but not AFP; histology shows sheets of uniform cells with lymphocytic infiltration.","Incorrect: Embryonal carcinoma can produce both AFP and hCG but does not characteristically show Schiller-Duval bodies.","Incorrect: Choriocarcinoma produces hCG, not AFP, and shows hemorrhagic tissue with syncytiotrophoblasts and cytotrophoblasts without villous structures.","Correct: Yolk sac tumor = ↑AFP + Schiller-Duval bodies. Most common malignant germ cell tumor in children. Aggressive but chemosensitive.","Incorrect: Immature teratomas are graded by the amount of neuroepithelium; they may have mildly elevated AFP but do not show Schiller-Duval bodies."],
      highYieldPoint: "Yolk sac tumor: ↑AFP, Schiller-Duval bodies (glomeruloid). Dysgerminoma: ↑LDH, ↑hCG. Choriocarcinoma: ↑hCG. Embryonal carcinoma: ↑AFP + ↑hCG."
    },
    {
      vignette: "A 48-year-old woman presents with a vulvar lesion that has been present for 6 months. Examination reveals a white, thickened plaque on the left labia majora. Biopsy shows atrophic epidermis with hyperkeratosis, loss of rete ridges, and a band of homogenized collagen in the upper dermis with a lymphocytic infiltrate.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Vulvar squamous cell carcinoma","Lichen simplex chronicus","Vulvar intraepithelial neoplasia (VIN)","Lichen sclerosus","Extramammary Paget disease"],
      correctIndex: 3,
      explanation: "Lichen sclerosus is a chronic inflammatory condition of the vulva characterized by thin, white, parchment-like skin. Histology shows thinning of the epidermis, loss of rete ridges, homogenization of the upper dermis (collagen band), and a band-like lymphocytic infiltrate beneath. It occurs most commonly in postmenopausal women and carries a small risk (~4-5%) of progression to squamous cell carcinoma.",
      optionExplanations: ["Incorrect: Vulvar SCC shows invasive nests of atypical squamous cells, not the atrophic pattern described.","Incorrect: Lichen simplex chronicus shows thickened (not atrophic) epidermis with hyperkeratosis and acanthosis from chronic scratching.","Incorrect: VIN shows dysplastic squamous epithelium with atypia, not atrophic epidermis with collagen homogenization.","Correct: Lichen sclerosus = thin white vulvar skin, atrophic epidermis, loss of rete ridges, collagen homogenization, lymphocytic band. Small risk of SCC.","Incorrect: Extramammary Paget disease shows large cells with clear cytoplasm (Paget cells) within the epidermis, often associated with underlying adenocarcinoma."],
      highYieldPoint: "Lichen sclerosus: thin white vulvar plaques, thinned epidermis, collagen homogenization. Increased SCC risk (~4-5%). Treat: potent topical corticosteroids."
    },
    {
      vignette: "A 56-year-old woman with a history of bilateral serous cystadenocarcinoma undergoes genetic testing revealing a BRCA1 pathogenic variant. Her family history includes a mother who died of ovarian cancer and a sister with breast cancer at age 42.",
      question: "Which of the following best describes the function of the normal BRCA1 protein?",
      options: ["Checkpoint kinase that arrests the cell cycle at G1/S","Receptor tyrosine kinase that regulates cell growth signaling","Proto-oncogene that promotes cell proliferation when mutated","DNA mismatch repair protein that corrects replication errors","Tumor suppressor involved in homologous recombination repair of double-strand DNA breaks"],
      correctIndex: 4,
      explanation: "BRCA1 is a tumor suppressor gene whose protein product plays a critical role in the homologous recombination pathway for repairing double-strand DNA breaks. Loss of BRCA1 function forces cells to rely on error-prone repair pathways, leading to genomic instability and increased risk of breast and ovarian cancers. This is the basis for PARP inhibitor therapy, which exploits synthetic lethality in BRCA-deficient cells.",
      optionExplanations: ["Incorrect: While BRCA1 participates in checkpoint signaling, its primary function is in DNA repair through homologous recombination, not as a checkpoint kinase.","Incorrect: BRCA1 is not a receptor tyrosine kinase; RTKs like HER2/neu are amplified in some breast cancers but are distinct from BRCA1.","Incorrect: BRCA1 is a tumor suppressor, not a proto-oncogene. Its loss of function (not gain of function) drives carcinogenesis.","Incorrect: DNA mismatch repair involves MLH1, MSH2, MSH6, and PMS2 (Lynch syndrome genes), not BRCA1.","Correct: BRCA1 = tumor suppressor, critical for homologous recombination repair of dsDNA breaks. Loss → genomic instability → breast/ovarian cancer."],
      highYieldPoint: "BRCA1/2: tumor suppressors → homologous recombination DNA repair. BRCA1: breast + ovarian cancer. BRCA2: breast + ovarian + pancreatic cancer."
    },
    {
      vignette: "A 30-year-old woman presents with intermenstrual bleeding. Transvaginal ultrasound reveals a 1.5-cm pedunculated mass within the endometrial cavity. Hysteroscopic resection is performed. Histology shows benign endometrial glands and stroma with thick-walled blood vessels and a fibrous core.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Submucosal leiomyoma","Placental site trophoblastic tumor","Endometrial hyperplasia","Endometrial carcinoma in situ","Endometrial polyp"],
      correctIndex: 4,
      explanation: "Endometrial polyps are localized overgrowths of endometrial glands and stroma that project into the uterine cavity, often pedunculated. They contain thick-walled blood vessels and a fibrous stroma core. They are a common cause of abnormal uterine bleeding, particularly intermenstrual bleeding. Malignant transformation is uncommon but increases with age.",
      optionExplanations: ["Incorrect: Submucosal leiomyomas are composed of smooth muscle bundles, not endometrial glands and stroma with thick-walled vessels.","Incorrect: Placental site trophoblastic tumor arises from intermediate trophoblasts after pregnancy and produces hPL, not the histologic pattern described.","Incorrect: Endometrial hyperplasia is a diffuse process of increased gland-to-stroma ratio, not a focal pedunculated mass.","Incorrect: Endometrial intraepithelial carcinoma shows atypical cells, not benign glands and stroma.","Correct: Endometrial polyp = pedunculated mass of endometrial glands + stroma with thick-walled vessels and fibrous core. Common cause of intermenstrual bleeding."],
      highYieldPoint: "Endometrial polyps: benign glands + stroma + thick-walled vessels, pedunculated. Cause intermenstrual/postmenopausal bleeding. Tamoxifen increases risk."
    },
    {
      vignette: "A 17-year-old girl presents with primary amenorrhea. Examination reveals a phenotypically normal female with well-developed breasts and scant pubic hair. Pelvic ultrasound shows absent uterus and a shortened vagina. Karyotype is 46,XX. Ovarian hormone levels are normal.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Complete androgen insensitivity syndrome","Imperforate hymen","Turner syndrome","5α-reductase deficiency","Müllerian agenesis (Mayer-Rokitansky-Küster-Hauser syndrome)"],
      correctIndex: 4,
      explanation: "Müllerian agenesis (MRKH syndrome) is the congenital absence of the uterus and upper vagina in a 46,XX female with normal ovarian function and secondary sexual characteristics. The Müllerian (paramesonephric) ducts fail to develop, but the ovaries (derived from gonadal ridge) function normally. It is the second most common cause of primary amenorrhea after Turner syndrome.",
      optionExplanations: ["Incorrect: CAIS has a 46,XY karyotype with female phenotype; this patient is 46,XX.","Incorrect: Imperforate hymen causes hematocolpos with a bulging membrane and cyclical pain; the uterus is present.","Incorrect: Turner syndrome (45,X) presents with short stature, streak gonads, and characteristic features; this patient is 46,XX with normal ovaries.","Incorrect: 5α-reductase deficiency occurs in 46,XY individuals with ambiguous genitalia; this patient is 46,XX.","Correct: MRKH syndrome = 46,XX, absent uterus and upper vagina, normal ovaries with normal secondary sexual characteristics, normal hormones."],
      highYieldPoint: "MRKH syndrome: 46,XX, absent uterus + upper vagina, normal ovaries and secondary sex characteristics. 2nd most common cause of primary amenorrhea."
    }
  ],

  "Male reproductive pathology": [
    {
      vignette: "A 25-year-old man presents with a painless testicular mass he noticed while showering. Ultrasound reveals a solid, homogeneous intratesticular mass. Serum AFP is normal, β-hCG is mildly elevated, and LDH is elevated. Radical inguinal orchiectomy is performed. Histology shows large cells with clear cytoplasm and central nuclei arranged in sheets, with lymphocytic infiltration and granulomatous reaction.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Seminoma","Embryonal carcinoma","Yolk sac tumor","Choriocarcinoma","Teratoma"],
      correctIndex: 0,
      explanation: "Seminoma is the most common testicular germ cell tumor, typically presenting as a painless testicular mass in men aged 15-35. Histology shows large uniform cells with clear cytoplasm, round nuclei, and prominent nucleoli arranged in sheets with fibrous septa containing lymphocytes. AFP is NEVER elevated (elevated AFP rules out pure seminoma). β-hCG may be mildly elevated. Seminomas are exquisitely radiosensitive.",
      optionExplanations: ["Correct: Seminoma = most common testicular GCT, sheets of uniform clear cells, lymphocytic infiltrate, ↑LDH, may have mild ↑hCG, AFP is NORMAL. Radiosensitive.","Incorrect: Embryonal carcinoma shows poorly differentiated cells in glandular/papillary patterns with hemorrhage and necrosis; AFP and hCG may both be elevated.","Incorrect: Yolk sac tumor has Schiller-Duval bodies and elevated AFP; it is the most common testicular tumor in children, not adults.","Incorrect: Choriocarcinoma shows malignant syncytiotrophoblasts and cytotrophoblasts with markedly elevated hCG and widespread hemorrhagic metastases.","Incorrect: Teratomas contain tissues from multiple germ layers; in adults they are considered malignant even when mature."],
      highYieldPoint: "Seminoma: most common testicular GCT, clear cells in sheets, lymphocytic infiltrate, AFP NEVER elevated, radiosensitive. Peak age 15-35."
    },
    {
      vignette: "A 30-year-old man presents with a rapidly enlarging testicular mass, hemoptysis, and gynecomastia. Serum β-hCG is 180,000 mIU/mL. Chest CT shows multiple hemorrhagic pulmonary nodules. Orchiectomy specimen shows hemorrhagic tissue with malignant syncytiotrophoblasts and cytotrophoblasts without villous structures.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Testicular choriocarcinoma","Embryonal carcinoma","Seminoma","Leydig cell tumor","Sertoli cell tumor"],
      correctIndex: 0,
      explanation: "Testicular choriocarcinoma is a highly malignant germ cell tumor composed of malignant syncytiotrophoblasts and cytotrophoblasts. It produces very high levels of β-hCG (which can cause gynecomastia via stimulation of estrogen production). It spreads hematogenously early, causing hemorrhagic metastases (especially to lungs). It is the most aggressive testicular GCT with the worst prognosis.",
      optionExplanations: ["Correct: Choriocarcinoma = markedly ↑hCG, malignant tropho-/syncytiotrophoblasts, hemorrhagic hematogenous metastases (lungs), gynecomastia.","Incorrect: Embryonal carcinoma may mildly elevate hCG but does not show the trophoblastic differentiation or extreme hCG levels seen here.","Incorrect: Seminoma shows uniform clear cells in sheets; it does not cause markedly elevated hCG or hemorrhagic metastases.","Incorrect: Leydig cell tumors are sex cord-stromal tumors producing androgens/estrogens; they contain Reinke crystals on histology.","Incorrect: Sertoli cell tumors are sex cord-stromal tumors that do not produce hCG or show trophoblastic differentiation."],
      highYieldPoint: "Choriocarcinoma: extremely ↑hCG, hematogenous spread (hemorrhagic lung mets), NO villi. Most aggressive testicular GCT."
    },
    {
      vignette: "A 65-year-old man presents with difficulty initiating urination, nocturia, and a weak urinary stream that has worsened over the past year. Digital rectal examination reveals a symmetrically enlarged, firm, rubbery, nontender prostate without nodules. PSA is 3.2 ng/mL (normal <4).",
      question: "Which of the following zones of the prostate is most commonly involved in this patient's condition?",
      options: ["Transition zone","Peripheral zone","Central zone","Anterior fibromuscular stroma","Periurethral glands"],
      correctIndex: 0,
      explanation: "Benign prostatic hyperplasia (BPH) predominantly involves the transition zone and periurethral glands. The transition zone surrounds the proximal urethra, and hyperplasia here compresses the urethra, causing obstructive urinary symptoms (hesitancy, weak stream, incomplete emptying) and irritative symptoms (frequency, nocturia, urgency).",
      optionExplanations: ["Correct: BPH arises in the transition zone (periurethral region) → urethral compression → obstructive and irritative urinary symptoms.","Incorrect: The peripheral zone is where prostatic adenocarcinoma most commonly arises (~70-80%); BPH preferentially involves the transition zone.","Incorrect: The central zone surrounds the ejaculatory ducts and is uncommonly the site of BPH or carcinoma.","Incorrect: The anterior fibromuscular stroma is composed of smooth muscle and fibrous tissue without glandular elements; it is not the site of BPH.","Incorrect: While periurethral glands contribute to BPH, the transition zone is the primary and most tested site."],
      highYieldPoint: "BPH = transition zone (periurethral). Prostate cancer = peripheral zone (palpable on DRE, detected on biopsy). BPH does NOT increase cancer risk."
    },
    {
      vignette: "A 72-year-old man presents with lower back pain and difficulty urinating. PSA is 48 ng/mL. Digital rectal examination reveals a hard, irregular, nodular prostate. Biopsy shows malignant glands with prominent nucleoli. Bone scan reveals multiple osteoblastic lesions in the lumbar spine and pelvis.",
      question: "Which of the following is the most characteristic pattern of bony metastasis in this patient's cancer?",
      options: ["Osteolytic (lytic) lesions","Osteoblastic (sclerotic/blastic) lesions","Mixed lytic and blastic lesions equally","Periosteal ('sunburst') reaction","Expansile ('soap bubble') lesions"],
      correctIndex: 1,
      explanation: "Prostate cancer characteristically produces osteoblastic (sclerotic) bone metastases, appearing as dense white areas on imaging. Prostate cancer cells secrete factors (including PSA, endothelin-1, and bone morphogenetic proteins) that stimulate osteoblast activity. The most common sites of metastasis are the axial skeleton (lumbar spine, pelvis). Elevated serum alkaline phosphatase confirms osteoblastic activity.",
      optionExplanations: ["Incorrect: Osteolytic lesions are more typical of multiple myeloma, renal cell carcinoma, and thyroid cancer.","Correct: Prostate cancer → osteoblastic (sclerotic) bone metastases. Also seen in breast cancer (which can be lytic, blastic, or mixed).","Incorrect: Mixed lytic/blastic lesions can occur in breast cancer, but prostate cancer is predominantly blastic.","Incorrect: Sunburst periosteal reaction is characteristic of osteosarcoma, not prostate cancer metastases.","Incorrect: Expansile soap bubble lesions are seen in giant cell tumors and aneurysmal bone cysts, not prostate metastases."],
      highYieldPoint: "Prostate cancer → osteoblastic bone metastases + ↑PSA + ↑alkaline phosphatase. Most common cancer in men; #2 cancer cause of death in men."
    },
    {
      vignette: "A 2-year-old boy is brought by his mother because she noticed that his right scrotum is empty. On examination, the right testis is palpated in the inguinal canal and cannot be manually brought into the scrotum. The left testis is normally positioned.",
      question: "If left untreated, which of the following is the most significant long-term risk associated with this condition?",
      options: ["Testicular torsion","Infertility and increased risk of testicular germ cell tumor","Inguinal hernia","Hydrocele formation","Epididymitis"],
      correctIndex: 1,
      explanation: "Cryptorchidism (undescended testis) is the most common congenital abnormality of the male genitourinary tract. If uncorrected, the testis remains exposed to higher abdominal/inguinal temperature, which damages spermatogenesis and increases the risk of testicular germ cell tumors (especially seminoma). Orchiopexy should be performed by 6-12 months of age to reduce (but not eliminate) these risks.",
      optionExplanations: ["Incorrect: While torsion risk is slightly increased, the most significant long-term consequences are infertility and cancer risk.","Correct: Cryptorchidism → ↑risk of infertility (↓spermatogenesis from heat) and testicular germ cell tumors (especially seminoma). Orchiopexy by 6-12 months.","Incorrect: Inguinal hernia may be associated but is not the most significant long-term risk.","Incorrect: Hydrocele may co-occur with cryptorchidism but is not the primary long-term concern.","Incorrect: Epididymitis is an infection, not a primary risk of undescended testes."],
      highYieldPoint: "Cryptorchidism: most common congenital GU anomaly. ↑Risk of germ cell tumor (seminoma) even after orchiopexy. ↑Infertility risk. Fix by 6-12 months."
    },
    {
      vignette: "A 16-year-old boy presents to the emergency department with acute onset of severe left scrotal pain, nausea, and vomiting. The pain began 3 hours ago during soccer practice. The left testis is high-riding and horizontally oriented. The cremasteric reflex is absent on the left. Color Doppler ultrasound shows absent blood flow to the left testis.",
      question: "Which of the following is the most appropriate immediate management?",
      options: ["Antibiotics for presumed epididymitis","Emergent surgical exploration with detorsion and orchiopexy","Observation with scrotal elevation and analgesics","Needle aspiration of testicular fluid","CT scan of the abdomen and pelvis"],
      correctIndex: 1,
      explanation: "Testicular torsion is a surgical emergency requiring detorsion within 6 hours to salvage the testis (salvage rate >90% if within 6 hours). The bell-clapper deformity (horizontal lie) allows the testis to rotate on the spermatic cord, occluding blood supply. Bilateral orchiopexy (fixation of both testes) is performed to prevent recurrence on either side.",
      optionExplanations: ["Incorrect: Antibiotics are for epididymitis, which presents more gradually with fever and positive Prehn sign (pain relief with scrotal elevation); cremasteric reflex is preserved.","Correct: Testicular torsion = surgical emergency. Detorsion + bilateral orchiopexy within 6 hours for best salvage rates (>90%).","Incorrect: Observation risks testicular infarction; torsion requires urgent intervention.","Incorrect: Needle aspiration has no role in testicular torsion management.","Incorrect: CT imaging would delay definitive management; Doppler ultrasound is the appropriate imaging study and has already been performed."],
      highYieldPoint: "Testicular torsion: absent cremasteric reflex, high-riding testis, absent Doppler flow. Surgical emergency — detorsion + bilateral orchiopexy within 6 hours."
    },
    {
      vignette: "A 55-year-old man presents with erectile dysfunction, decreased libido, fatigue, and loss of muscle mass over the past year. Laboratory studies show total testosterone 140 ng/dL (normal 300-1000), FSH 1.2 mIU/mL (low), and LH 0.8 mIU/mL (low). Prolactin is normal. MRI of the sella turcica shows a 1.8-cm pituitary mass.",
      question: "Which type of hypogonadism does this patient have?",
      options: ["Primary hypergonadotropic hypogonadism","Tertiary hypogonadism from hypothalamic lesion","Secondary hypogonadotropic hypogonadism","Androgen insensitivity syndrome","Age-related physiologic decline"],
      correctIndex: 2,
      explanation: "This patient has secondary (central) hypogonadotropic hypogonadism caused by a pituitary mass compressing normal gonadotrophs. Low testosterone with inappropriately low FSH and LH indicates failure of the pituitary to produce gonadotropins. In primary hypogonadism, FSH and LH would be elevated as a compensatory response to low testosterone.",
      optionExplanations: ["Incorrect: Primary hypogonadism (testicular failure) presents with elevated FSH and LH due to loss of negative feedback.","Incorrect: Tertiary hypogonadism involves a hypothalamic lesion reducing GnRH; while also causing low FSH/LH, the pituitary mass localizes this to secondary.","Correct: Secondary hypogonadism = low testosterone + low FSH/LH. Pituitary mass → compression of gonadotrophs → ↓gonadotropin production.","Incorrect: Androgen insensitivity involves a nonfunctional androgen receptor with elevated testosterone and LH, not low levels.","Incorrect: Age-related testosterone decline is gradual and does not present with a pituitary mass or profoundly low gonadotropins."],
      highYieldPoint: "Primary hypogonadism: ↓testosterone, ↑FSH/LH (testicular failure). Secondary: ↓testosterone, ↓FSH/LH (pituitary/hypothalamic cause)."
    },
    {
      vignette: "A 28-year-old man is evaluated for infertility. Semen analysis reveals azoospermia. Physical examination shows tall stature, gynecomastia, small firm testes, and sparse facial hair. Karyotype analysis reveals 47,XXY.",
      question: "Which of the following histologic findings is most characteristic of the testes in this patient?",
      options: ["Normal spermatogenesis with obstructed vas deferens","Granulomatous inflammation of the seminiferous tubules","Seminiferous tubule dysgenesis and hyalinization with Leydig cell hyperplasia","Intratubular germ cell neoplasia (carcinoma in situ)","Sertoli cell-only syndrome with normal Leydig cells"],
      correctIndex: 2,
      explanation: "Klinefelter syndrome (47,XXY) causes primary hypogonadism with seminiferous tubule dysgenesis. The tubules become hyalinized and fibrotic, with loss of germ cells leading to azoospermia and infertility. Leydig cells undergo compensatory hyperplasia due to elevated LH, but testosterone production is still inadequate. The small, firm testes are the most consistent clinical finding.",
      optionExplanations: ["Incorrect: Obstructive azoospermia (e.g., from congenital bilateral absence of the vas deferens in CF) has normal intratesticular spermatogenesis.","Incorrect: Granulomatous orchitis is seen in tuberculosis or sarcoidosis, not Klinefelter syndrome.","Correct: Klinefelter syndrome → seminiferous tubule hyalinization/dysgenesis + Leydig cell hyperplasia → azoospermia, ↑FSH/LH, ↓testosterone.","Incorrect: Intratubular germ cell neoplasia is a precursor to testicular germ cell tumors, not related to Klinefelter syndrome.","Incorrect: Sertoli cell-only syndrome shows absent germ cells with preserved Sertoli cells; Klinefelter also shows tubular hyalinization and Leydig cell hyperplasia."],
      highYieldPoint: "Klinefelter (47,XXY): tall, gynecomastia, small firm testes, azoospermia, ↑FSH/LH, ↓testosterone. Most common cause of male hypogonadism."
    },
    {
      vignette: "A 45-year-old man presents with a painless scrotal swelling that transilluminates on examination. The swelling surrounds the testis and increases in size over the day. The testis feels normal on palpation through the fluid.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Varicocele","Spermatocele","Hydrocele","Indirect inguinal hernia","Testicular torsion"],
      correctIndex: 2,
      explanation: "A hydrocele is a collection of serous fluid within the tunica vaginalis surrounding the testis. It presents as painless scrotal swelling that transilluminates (light passes through the fluid). In adults, hydroceles are usually idiopathic or secondary to infection, trauma, or tumors. The testis is palpable within the fluid collection.",
      optionExplanations: ["Incorrect: A varicocele is a dilated pampiniform venous plexus; it feels like a 'bag of worms,' does not transilluminate, and is more prominent with standing/Valsalva.","Incorrect: A spermatocele is a cyst arising from the head of the epididymis containing sperm; it is located above and behind the testis, not surrounding it.","Correct: Hydrocele = painless fluid around testis in tunica vaginalis, transilluminates, testis palpable. In adults, rule out underlying testicular pathology.","Incorrect: An indirect inguinal hernia can extend into the scrotum but typically does not transilluminate and has a palpable inguinal component that reduces.","Incorrect: Testicular torsion presents with acute severe pain, absent cremasteric reflex, and absent blood flow, not painless transilluminating swelling."],
      highYieldPoint: "Hydrocele: painless, transilluminates. Varicocele: 'bag of worms,' does NOT transilluminate. Spermatocele: epididymal cyst above/behind testis."
    },
    {
      vignette: "A 35-year-old man presents with a firm, nontender left testicular mass. Serum AFP is 480 ng/mL (elevated) and β-hCG is 62 mIU/mL (mildly elevated). LDH is elevated. Radical orchiectomy is performed, and histology reveals multiple tissue types including glandular structures, cartilage, and areas of hemorrhagic tissue with yolk sac differentiation.",
      question: "Which of the following best classifies this tumor?",
      options: ["Pure seminoma","Testicular lymphoma","Leydig cell tumor","Mixed germ cell tumor (nonseminomatous)","Sertoli cell tumor"],
      correctIndex: 3,
      explanation: "Mixed germ cell tumors are the most common type of testicular cancer, containing two or more germ cell components. This tumor contains teratomatous elements (glandular structures, cartilage) and yolk sac components. Elevated AFP (yolk sac component) and mildly elevated hCG (possible embryonal or syncytiotrophoblast component) confirm nonseminomatous germ cell tumor. Any AFP elevation rules out pure seminoma.",
      optionExplanations: ["Incorrect: Pure seminoma NEVER has elevated AFP. The presence of elevated AFP and multiple tissue types rules out pure seminoma.","Incorrect: Testicular lymphoma is the most common testicular malignancy in men >60; it shows lymphocytic infiltration, not mixed germ cell elements.","Incorrect: Leydig cell tumors produce androgens/estrogens and contain Reinke crystals; they are sex cord-stromal tumors, not germ cell tumors.","Correct: Mixed nonseminomatous GCT = multiple germ cell components + elevated AFP (rules out pure seminoma). Most common testicular cancer type overall.","Incorrect: Sertoli cell tumors are rare sex cord-stromal tumors with tubular architecture; they do not produce AFP."],
      highYieldPoint: "Mixed GCT: most common testicular cancer. Any ↑AFP = nonseminomatous (rules out pure seminoma). Treat: orchiectomy + chemo (BEP regimen)."
    },
    {
      vignette: "A 20-year-old man presents with a left-sided scrotal mass that feels like a 'bag of worms' on palpation. The swelling increases when he stands and with Valsalva maneuver, and decreases when supine. Physical examination is otherwise unremarkable.",
      question: "Which of the following best explains why this condition is more common on the left side?",
      options: ["The left testis is positioned lower than the right due to embryologic rotation","The right gonadal vein has more competent valves than the left","The left internal iliac artery compresses the left spermatic cord","The left gonadal vein drains into the left renal vein at a right angle","The left vas deferens is anatomically longer, increasing venous pressure"],
      correctIndex: 3,
      explanation: "Varicoceles are more common on the left (85-95% of cases) because the left gonadal (testicular) vein drains into the left renal vein at a perpendicular angle, creating higher venous pressure and predisposing to valve incompetence. The right gonadal vein drains directly into the IVC at an oblique angle, allowing better blood flow. Varicoceles can impair spermatogenesis due to increased scrotal temperature.",
      optionExplanations: ["Incorrect: While the left testis does hang lower, this is a result, not a cause, of the venous anatomy predisposing to varicocele.","Incorrect: Valve competency may differ, but the primary anatomic explanation is the perpendicular drainage angle of the left gonadal vein.","Incorrect: The internal iliac artery does not compress the spermatic cord to cause varicocele.","Correct: Left gonadal vein → left renal vein at a right angle (higher pressure) vs. right gonadal vein → IVC at an oblique angle (lower pressure).","Incorrect: The vas deferens length is not the relevant anatomic factor; the venous drainage angle is the key difference."],
      highYieldPoint: "Left varicocele (85-95%): left gonadal vein → left renal vein at 90°. New right-sided varicocele in older man → rule out renal cell carcinoma (IVC obstruction)."
    },
    {
      vignette: "A 60-year-old man undergoes prostate biopsy for an elevated PSA of 8.5 ng/mL. Histology reveals small, irregular glands infiltrating between benign glands, with prominent nucleoli and absence of a basal cell layer on immunohistochemistry (p63 negative, AMACR positive). Gleason score is 4+3=7.",
      question: "Which of the following biomarkers is most useful for confirming the absence of the basal cell layer in prostatic adenocarcinoma?",
      options: ["PSA (prostate-specific antigen)","Cytokeratin 20","Chromogranin A","p63 (basal cell marker)","S-100 protein"],
      correctIndex: 3,
      explanation: "p63 is a nuclear protein expressed by basal cells of the prostate. Benign prostatic glands have a basal cell layer that stains positive for p63 (and high-molecular-weight cytokeratins like 34βE12). Prostatic adenocarcinoma lacks the basal cell layer, so p63 is NEGATIVE. This finding, combined with AMACR (alpha-methylacyl-CoA racemase) positivity, confirms malignancy.",
      optionExplanations: ["Incorrect: PSA is expressed by both benign and malignant prostate epithelium; it confirms prostatic origin but does not distinguish benign from malignant.","Incorrect: Cytokeratin 20 is a marker for colorectal and urothelial carcinomas, not prostate.","Incorrect: Chromogranin A is a neuroendocrine marker used for small cell carcinoma or carcinoid tumors.","Correct: p63 stains basal cells of benign prostatic glands. Loss of p63 (absent basal layer) + AMACR positivity = prostatic adenocarcinoma.","Incorrect: S-100 is expressed by neural crest-derived tumors (melanoma, schwannoma), not prostatic adenocarcinoma."],
      highYieldPoint: "Prostate cancer diagnosis: absent basal layer (p63 negative, 34βE12 negative) + AMACR positive. Gleason grading: sum of two most prevalent patterns."
    },
    {
      vignette: "A 32-year-old man presents with a painless testicular mass. Radical orchiectomy reveals a well-circumscribed golden-yellow tumor. Histology shows polygonal cells with abundant eosinophilic cytoplasm and rod-shaped crystalline inclusions. He also reports gynecomastia.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Seminoma","Yolk sac tumor","Sertoli cell tumor","Embryonal carcinoma","Leydig cell tumor"],
      correctIndex: 4,
      explanation: "Leydig cell tumors are sex cord-stromal tumors that produce androgens and/or estrogens. The characteristic histologic finding is Reinke crystals (rod-shaped eosinophilic cytoplasmic inclusions) within polygonal cells with abundant eosinophilic cytoplasm. Excess estrogen production can cause gynecomastia in adults or precocious puberty in children. Most are benign.",
      optionExplanations: ["Incorrect: Seminomas show large clear cells with lymphocytic infiltrate; they do not produce sex steroids or contain Reinke crystals.","Incorrect: Yolk sac tumors show Schiller-Duval bodies and produce AFP; they do not contain Reinke crystals.","Incorrect: Sertoli cell tumors form tubular structures without Reinke crystals; they may produce inhibin but not significant sex steroids.","Incorrect: Embryonal carcinoma shows primitive cells with hemorrhage and necrosis; it produces AFP and/or hCG.","Correct: Leydig cell tumor = golden-yellow tumor with Reinke crystals, produces androgens/estrogens → gynecomastia (adults), precocious puberty (children). Usually benign."],
      highYieldPoint: "Leydig cell tumor: Reinke crystals, golden-yellow, androgens/estrogens → gynecomastia or precocious puberty. Sertoli cell tumor: tubular architecture."
    },
    {
      vignette: "A 40-year-old man presents with a dull aching sensation in his left scrotum and difficulty conceiving with his partner. Semen analysis shows oligospermia. Examination in the standing position reveals a palpable scrotal mass that disappears when supine. Scrotal temperature is elevated compared to the right side.",
      question: "Which of the following is the most likely mechanism by which this condition causes infertility?",
      options: ["Obstruction of the vas deferens by the mass","Direct toxic effect of venous blood on Sertoli cells","Compression of the epididymis preventing sperm maturation","Autoimmune destruction of germ cells","Elevated intratesticular temperature impairing spermatogenesis"],
      correctIndex: 4,
      explanation: "Varicoceles cause infertility primarily through elevated intratesticular temperature. The dilated pampiniform venous plexus impairs the countercurrent heat exchange mechanism that normally keeps testicular temperature 2-3°C below core body temperature. Elevated temperature disrupts spermatogenesis, leading to oligospermia and decreased motility. Varicocele repair can improve fertility in some men.",
      optionExplanations: ["Incorrect: Varicoceles involve dilated veins, not obstruction of the vas deferens.","Incorrect: While venous stasis may expose the testis to metabolic waste products, the primary mechanism is thermal damage to spermatogenesis.","Incorrect: Varicoceles do not directly compress the epididymis to impair sperm maturation.","Incorrect: Autoimmune orchitis is a separate entity, not related to varicoceles.","Correct: Varicocele → impaired countercurrent heat exchange → ↑testicular temperature → impaired spermatogenesis → oligospermia/infertility."],
      highYieldPoint: "Varicocele → ↑testicular temperature → impaired spermatogenesis → infertility. Most common correctable cause of male infertility."
    },
    {
      vignette: "A 68-year-old man with metastatic prostate cancer is started on leuprolide acetate. His oncologist warns him about a potential initial worsening of symptoms before improvement.",
      question: "Which of the following best explains the initial symptom flare with leuprolide therapy?",
      options: ["Leuprolide directly stimulates prostatic tumor growth receptors","Leuprolide activates dormant micrometastases through immune suppression","Leuprolide is converted to testosterone by the tumor","The drug causes adrenal androgen surge through ACTH stimulation","Continuous GnRH agonist initially stimulates LH/FSH release before receptor desensitization and downregulation"],
      correctIndex: 4,
      explanation: "Leuprolide is a GnRH agonist. When administered continuously (not pulsatile), it initially stimulates the pituitary to release LH and FSH, causing a transient testosterone surge ('flare') during the first 1-2 weeks. After sustained exposure, GnRH receptors are desensitized and downregulated, leading to decreased LH/FSH and ultimately medical castration. Flutamide (an androgen receptor antagonist) is given concurrently to block the flare.",
      optionExplanations: ["Incorrect: Leuprolide does not directly interact with prostatic tumor growth receptors; it acts through the hypothalamic-pituitary-gonadal axis.","Incorrect: Leuprolide's mechanism is hormonal, not immune-mediated.","Incorrect: Leuprolide is not metabolized to testosterone; it is a GnRH analog.","Incorrect: Leuprolide does not directly stimulate ACTH or adrenal androgens.","Correct: GnRH agonist (continuous) → initial LH/FSH surge → testosterone flare (1-2 weeks) → then receptor desensitization → ↓LH/FSH → ↓testosterone (medical castration)."],
      highYieldPoint: "GnRH agonists (leuprolide): pulsatile → stimulates LH/FSH; continuous → desensitization → ↓LH/FSH (medical castration). Initial flare blocked with flutamide."
    }
  ],

  "Sexually transmitted infections": [
    {
      vignette: "A 22-year-old man presents with a painless, well-circumscribed ulcer on the glans penis that appeared 3 weeks ago. He reports unprotected sexual contact 4 weeks ago. Bilateral inguinal lymph nodes are firm, nontender, and mobile. Dark-field microscopy of fluid from the ulcer reveals motile spiral organisms.",
      question: "Which of the following is the causative organism?",
      options: ["Treponema pallidum","Haemophilus ducreyi","Herpes simplex virus type 2","Chlamydia trachomatis (L1-L3)","Klebsiella granulomatis"],
      correctIndex: 0,
      explanation: "Primary syphilis, caused by Treponema pallidum, presents with a painless chancre — a clean-based, firm, well-circumscribed ulcer — at the site of inoculation. Nontender bilateral lymphadenopathy is typical. Dark-field microscopy showing motile spirochetes is diagnostic. The incubation period is approximately 10-90 days (average 21 days).",
      optionExplanations: ["Correct: T. pallidum causes primary syphilis with painless chancre + bilateral nontender lymphadenopathy. Dark-field microscopy shows motile spirochetes.","Incorrect: H. ducreyi causes chancroid, which presents with a PAINFUL, purulent ulcer with ragged edges and tender suppurative inguinal lymphadenopathy.","Incorrect: HSV-2 causes painful grouped vesicles on an erythematous base that ulcerate; multinucleated giant cells on Tzanck smear.","Incorrect: C. trachomatis L1-L3 causes lymphogranuloma venereum (LGV) with a transient painless ulcer followed by painful inguinal lymphadenopathy (buboes).","Incorrect: K. granulomatis causes granuloma inguinale (donovanosis), presenting with painless beefy-red ulcers with Donovan bodies on biopsy; no lymphadenopathy."],
      highYieldPoint: "Painless chancre = syphilis (T. pallidum). Painful purulent ulcer = chancroid (H. ducreyi). Painful vesicles = herpes (HSV). Painless beefy red = donovanosis."
    },
    {
      vignette: "A 19-year-old woman presents with mucopurulent cervical discharge, dysuria, and lower abdominal pain. Her male partner was recently treated for urethritis. Nucleic acid amplification test (NAAT) of endocervical swab is positive for Chlamydia trachomatis (serotypes D-K). She asks why treatment of her partner is also important.",
      question: "Which of the following best describes the primary intracellular developmental form of Chlamydia trachomatis responsible for intracellular replication?",
      options: ["Reticulate body","Elementary body","Intermediate body","Inclusion body","Morula"],
      correctIndex: 0,
      explanation: "Chlamydia trachomatis has a unique biphasic developmental cycle. The elementary body (EB) is the infectious extracellular form that attaches to and enters host cells. Once inside, the EB transforms into the reticulate body (RB), which is the metabolically active intracellular form responsible for replication. RBs then condense back into EBs, which are released to infect new cells.",
      optionExplanations: ["Correct: The reticulate body (RB) is the intracellular replicative form — larger, metabolically active, divides by binary fission within the host cell inclusion.","Incorrect: The elementary body (EB) is the infectious extracellular form — small, dense, metabolically inactive — that attaches to host cells. It does not replicate.","Incorrect: 'Intermediate body' is not a standard term in the Chlamydia developmental cycle.","Incorrect: The inclusion body is the membrane-bound vacuole containing the developing Chlamydia organisms; it is not the replicating organism itself.","Incorrect: A morula is the intracellular inclusion seen in Ehrlichia/Anaplasma infections, not Chlamydia."],
      highYieldPoint: "Chlamydia: Elementary body (EB) = infectious, extracellular. Reticulate body (RB) = replicative, intracellular. EB enters cell → RB replicates → forms EBs → released."
    },
    {
      vignette: "A 26-year-old man presents with purulent urethral discharge and dysuria for 2 days. Gram stain of the discharge shows gram-negative intracellular diplococci within neutrophils. NAAT confirms Neisseria gonorrhoeae.",
      question: "Which of the following is the currently recommended treatment regimen for uncomplicated gonococcal urethritis?",
      options: ["Intramuscular ceftriaxone plus oral doxycycline for chlamydial coinfection coverage","Penicillin G intramuscularly alone","Oral ciprofloxacin alone","Intramuscular spectinomycin alone","Intravenous vancomycin"],
      correctIndex: 0,
      explanation: "Current guidelines recommend intramuscular ceftriaxone (500 mg for persons <150 kg) as the primary treatment for gonococcal infection. Oral doxycycline (100 mg BID × 7 days) is added empirically to treat likely Chlamydia trachomatis coinfection, which occurs in up to 30-50% of patients with gonorrhea. Fluoroquinolone resistance has made ciprofloxacin inappropriate as empiric therapy.",
      optionExplanations: ["Correct: Ceftriaxone IM + doxycycline PO (for presumptive chlamydial coinfection) is the recommended regimen for uncomplicated gonococcal infection.","Incorrect: Penicillin resistance in N. gonorrhoeae is widespread due to penicillinase production; penicillin is no longer recommended.","Incorrect: Fluoroquinolone-resistant N. gonorrhoeae is common worldwide; ciprofloxacin is not recommended as empiric therapy.","Incorrect: Spectinomycin is used in rare cases of severe cephalosporin allergy but is not first-line and has limited availability.","Incorrect: Vancomycin targets gram-positive organisms and has no activity against N. gonorrhoeae."],
      highYieldPoint: "Gonorrhea: gram-negative intracellular diplococci. Treat: IM ceftriaxone + PO doxycycline (for chlamydia coinfection). Always treat both simultaneously."
    },
    {
      vignette: "A 24-year-old woman presents with painful genital ulcers for 3 days. She reports tingling and burning before the lesions appeared. Examination reveals multiple shallow ulcers on the vulva with an erythematous base. Bilateral tender inguinal lymphadenopathy is present. Tzanck smear shows multinucleated giant cells with intranuclear inclusions.",
      question: "Which of the following best characterizes the latency of this virus in the host?",
      options: ["The virus integrates into host chromosomal DNA as a provirus","The virus establishes latency in the sacral dorsal root ganglia (S2-S4)","The virus persists in circulating CD4+ T lymphocytes","The virus remains dormant in hepatocytes","The virus establishes latency in the trigeminal ganglion exclusively"],
      correctIndex: 1,
      explanation: "Herpes simplex virus type 2 (HSV-2) establishes latent infection in the sacral dorsal root ganglia (S2-S4) after primary genital infection. During latency, the virus exists as episomal DNA in neuronal nuclei without active replication. Reactivation causes recurrent genital lesions in the same dermatome. HSV-1 typically establishes latency in the trigeminal ganglion (oral herpes).",
      optionExplanations: ["Incorrect: Retroviruses (HIV) integrate into host chromosomal DNA; HSV maintains episomal DNA without integration.","Correct: HSV-2 establishes latency in sacral dorsal root ganglia (S2-S4) → recurrent genital outbreaks. Reactivation triggered by stress, UV, immunosuppression.","Incorrect: HIV persists in CD4+ T lymphocytes and macrophages; HSV persists in sensory neurons.","Incorrect: Hepatitis B and C persist in hepatocytes; HSV does not establish latency in the liver.","Incorrect: HSV-1 (typically oral) establishes latency in the trigeminal ganglion, but genital HSV-2 uses the sacral ganglia."],
      highYieldPoint: "HSV-2 latency: sacral dorsal root ganglia (S2-S4). HSV-1 latency: trigeminal ganglion. Both: episomal DNA in neurons, no integration."
    },
    {
      vignette: "A 30-year-old man presents with a new rash that began 6 weeks after a penile ulcer healed spontaneously. He has a diffuse maculopapular rash involving the palms and soles, patchy alopecia, and flat moist lesions in the perianal area (condylomata lata). He also has generalized lymphadenopathy and low-grade fever.",
      question: "Which stage of syphilis does this presentation represent?",
      options: ["Primary syphilis","Secondary syphilis","Latent syphilis","Tertiary syphilis","Congenital syphilis"],
      correctIndex: 1,
      explanation: "Secondary syphilis occurs 4-10 weeks after the primary chancre heals and represents hematogenous dissemination of T. pallidum. Classic features include diffuse maculopapular rash (including palms and soles), condylomata lata (moist, flat, highly infectious perianal/genital lesions), patchy 'moth-eaten' alopecia, generalized lymphadenopathy, and constitutional symptoms. All lesions are highly infectious.",
      optionExplanations: ["Incorrect: Primary syphilis presents with the painless chancre at the inoculation site; the chancre has already healed in this patient.","Correct: Secondary syphilis = rash on palms/soles, condylomata lata, moth-eaten alopecia, generalized lymphadenopathy, constitutional symptoms. Highly infectious.","Incorrect: Latent syphilis is defined by positive serologic tests without any clinical signs or symptoms.","Incorrect: Tertiary syphilis occurs years later with gummas, cardiovascular syphilis (aortitis), or neurosyphilis (tabes dorsalis, Argyll Robertson pupils).","Incorrect: Congenital syphilis presents in neonates with characteristic facial features, hepatosplenomegaly, and snuffles."],
      highYieldPoint: "Secondary syphilis: rash on palms/soles (classic!), condylomata lata, moth-eaten alopecia. Condylomata LATA (syphilis, flat) vs. condylomata ACUMINATA (HPV, pointed)."
    },
    {
      vignette: "A 28-year-old woman presents with a new diagnosis of HIV infection. Her CD4 count is 180 cells/μL and viral load is 95,000 copies/mL. She has no opportunistic infections. Her physician recommends starting antiretroviral therapy.",
      question: "Which of the following classes of antiretroviral drugs specifically prevents integration of viral DNA into the host genome?",
      options: ["Nucleoside reverse transcriptase inhibitors (NRTIs)","Integrase strand transfer inhibitors (INSTIs)","Protease inhibitors (PIs)","Non-nucleoside reverse transcriptase inhibitors (NNRTIs)","CCR5 antagonists"],
      correctIndex: 1,
      explanation: "Integrase strand transfer inhibitors (INSTIs) such as dolutegravir, raltegravir, and bictegravir block the HIV integrase enzyme, which is responsible for inserting proviral DNA into the host cell chromosome. Without integration, the viral genome cannot be transcribed by host cell machinery. INSTIs are currently preferred first-line agents in combination with two NRTIs.",
      optionExplanations: ["Incorrect: NRTIs (e.g., tenofovir, emtricitabine) are nucleoside analogs that inhibit reverse transcriptase, blocking conversion of viral RNA to DNA.","Correct: INSTIs (dolutegravir, raltegravir, bictegravir) block HIV integrase → prevent proviral DNA integration into host chromosome. Preferred first-line agents.","Incorrect: PIs (e.g., atazanavir, darunavir) block the HIV protease that cleaves polyproteins into mature viral proteins, preventing virion maturation.","Incorrect: NNRTIs (e.g., efavirenz, rilpivirine) bind directly to reverse transcriptase and inhibit its activity through allosteric mechanisms.","Incorrect: CCR5 antagonists (maraviroc) block the CCR5 coreceptor on host CD4 cells, preventing viral entry (only effective against R5-tropic virus)."],
      highYieldPoint: "HIV lifecycle targets: Entry (CCR5/fusion inhibitors) → RT (NRTIs/NNRTIs) → Integration (INSTIs) → Protease (PIs). Current first-line: 2 NRTIs + 1 INSTI."
    },
    {
      vignette: "A 35-year-old woman presents to the STI clinic with a 1-week history of painful vesicular genital lesions. She also notes dysuria and bilateral tender inguinal lymphadenopathy. This is her first episode. PCR of vesicle fluid confirms HSV-2.",
      question: "Which of the following antiviral medications is most appropriate for treatment, and what is its mechanism of action?",
      options: ["Foscarnet — directly inhibits viral DNA polymerase without kinase activation","Ganciclovir — inhibits viral DNA polymerase after phosphorylation by UL97 kinase","Acyclovir — guanosine analog that requires viral thymidine kinase activation","Cidofovir — cytidine analog activated by cellular kinases","Oseltamivir — neuraminidase inhibitor blocking viral release"],
      correctIndex: 2,
      explanation: "Acyclovir is the first-line treatment for HSV infections. It is a guanosine analog that is selectively activated by herpesvirus thymidine kinase (TK), which monophosphorylates the drug. Host cell kinases then complete the phosphorylation to the active triphosphate form, which inhibits viral DNA polymerase and causes chain termination. This selective activation accounts for its low toxicity to uninfected cells.",
      optionExplanations: ["Incorrect: Foscarnet directly inhibits viral DNA polymerase and is used for acyclovir-resistant HSV or CMV, but it is not first-line due to nephrotoxicity.","Incorrect: Ganciclovir is first-line for CMV (not HSV) and is phosphorylated by CMV UL97 kinase, not HSV thymidine kinase.","Correct: Acyclovir = guanosine analog, activated by viral thymidine kinase → triphosphorylated by host kinases → inhibits viral DNA polymerase, causes chain termination. First-line for HSV.","Incorrect: Cidofovir is a nucleotide analog activated by cellular kinases (does not require viral kinase) used for CMV, not first-line for HSV.","Incorrect: Oseltamivir inhibits influenza neuraminidase; it is not active against herpesviruses."],
      highYieldPoint: "Acyclovir: guanosine analog, requires viral thymidine kinase (TK) for activation → selective for infected cells. TK mutant → acyclovir resistance → use foscarnet."
    },
    {
      vignette: "A 20-year-old sexually active woman presents for a routine well-woman visit. Pap smear shows atypical squamous cells of undetermined significance (ASC-US). HPV co-testing is positive for HPV 16. Colposcopy-directed biopsy shows CIN 1.",
      question: "Which of the following is the most appropriate management for this patient?",
      options: ["Immediate hysterectomy","Loop electrosurgical excision procedure (LEEP)","Observation with repeat co-testing in 12 months","Cone biopsy with endocervical curettage","Radiation therapy to the cervix"],
      correctIndex: 2,
      explanation: "CIN 1 (LSIL) in a young woman is managed conservatively with observation and repeat co-testing (Pap + HPV) at 12 months because the majority of CIN 1 lesions (60-80%) regress spontaneously, especially in younger patients with competent immune systems. Excisional procedures (LEEP, cone biopsy) are reserved for CIN 2/3 or persistent CIN 1.",
      optionExplanations: ["Incorrect: Hysterectomy is not appropriate for CIN 1 or even CIN 3; it is reserved for invasive cervical carcinoma or when fertility is not desired with persistent high-grade disease.","Incorrect: LEEP is indicated for CIN 2/3 (HSIL), not CIN 1, especially in young women where regression is likely.","Correct: CIN 1 (LSIL) → observation with repeat co-testing at 12 months. Most CIN 1 regresses spontaneously (60-80%), especially in young immunocompetent women.","Incorrect: Cone biopsy is used for CIN 2/3, endocervical disease, or when colposcopy is inadequate; it is overly aggressive for CIN 1.","Incorrect: Radiation therapy is used for advanced cervical cancer (stage IB2+), not for preinvasive disease."],
      highYieldPoint: "CIN 1 (LSIL): observe (most regress). CIN 2/3 (HSIL): excise (LEEP or cone biopsy). Cervical cancer screening: Pap + HPV co-testing every 5 years (ages 30-65)."
    },
    {
      vignette: "An 18-year-old sexually active man presents with multiple flesh-colored, verrucous papules on the shaft of his penis. The lesions are painless and have been present for 2 months. Application of 5% acetic acid causes the lesions to turn white (acetowhite test positive).",
      question: "Which of the following HPV types is most likely responsible for these lesions?",
      options: ["HPV 16","HPV 18","HPV 6","HPV 31","HPV 45"],
      correctIndex: 2,
      explanation: "Condylomata acuminata (genital warts) are caused by low-risk HPV types, primarily HPV 6 and 11. These types cause benign epithelial proliferations without significant risk of malignant transformation. High-risk types (HPV 16, 18, 31, 33, 45) are associated with cervical, anal, and oropharyngeal carcinomas.",
      optionExplanations: ["Incorrect: HPV 16 is a high-risk type associated with cervical and oropharyngeal cancers, not benign genital warts.","Incorrect: HPV 18 is a high-risk type associated with cervical adenocarcinoma, not genital warts.","Correct: HPV 6 (and 11) cause condylomata acuminata (genital warts) — low-risk types, benign, no significant cancer risk.","Incorrect: HPV 31 is a high-risk type associated with cervical cancer.","Incorrect: HPV 45 is a high-risk type associated with cervical cancer."],
      highYieldPoint: "HPV 6 and 11: genital warts (condylomata acuminata), low risk. HPV 16 and 18: cervical/anal/oropharyngeal cancer, high risk."
    },
    {
      vignette: "A 27-year-old pregnant woman at 36 weeks of gestation has a positive VDRL and a confirmatory positive FTA-ABS. She has no known drug allergies. She has not received treatment during this pregnancy.",
      question: "Which of the following is the most appropriate treatment to prevent congenital syphilis?",
      options: ["Oral azithromycin","Oral doxycycline","Intravenous ceftriaxone","Intramuscular penicillin G benzathine","Oral erythromycin"],
      correctIndex: 3,
      explanation: "Intramuscular penicillin G benzathine is the ONLY proven treatment for syphilis during pregnancy that effectively treats both the mother and prevents congenital syphilis. No other antibiotic has been shown to reliably cross the placenta in adequate concentrations to treat the fetus. Pregnant women with penicillin allergy must undergo desensitization and then receive penicillin.",
      optionExplanations: ["Incorrect: Azithromycin has been used as an alternative in non-pregnant patients but does not reliably prevent congenital syphilis and T. pallidum resistance is emerging.","Incorrect: Doxycycline is CONTRAINDICATED in pregnancy (tetracyclines cause tooth discoloration and bone growth inhibition in the fetus).","Incorrect: Ceftriaxone has not been proven effective for preventing congenital syphilis and is not recommended as a substitute.","Correct: Penicillin G benzathine IM is the ONLY effective treatment for syphilis in pregnancy. Allergic patients must be desensitized to penicillin — no substitution allowed.","Incorrect: Erythromycin does not adequately cross the placenta to treat fetal infection and is not recommended."],
      highYieldPoint: "Syphilis in pregnancy: penicillin G benzathine is the ONLY acceptable treatment. Penicillin allergy → desensitize then give penicillin. No alternatives."
    },
    {
      vignette: "A 32-year-old man presents with left knee pain and swelling, conjunctivitis, and urethritis that developed over the past 2 weeks following an episode of diarrhea. Synovial fluid analysis shows inflammatory fluid (25,000 WBC/μL) with negative Gram stain and culture. He is HLA-B27 positive.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Septic arthritis due to Neisseria gonorrhoeae","Gout","Rheumatoid arthritis","Reactive arthritis (Reiter syndrome)","Systemic lupus erythematosus"],
      correctIndex: 3,
      explanation: "Reactive arthritis (formerly Reiter syndrome) is a seronegative spondyloarthropathy characterized by the classic triad of conjunctivitis, urethritis, and arthritis ('can't see, can't pee, can't climb a tree'). It is triggered by preceding GI (Salmonella, Shigella, Campylobacter, Yersinia) or GU (Chlamydia) infections. HLA-B27 is positive in approximately 75% of cases. Joint cultures are negative because the arthritis is reactive, not infectious.",
      optionExplanations: ["Incorrect: Gonococcal arthritis presents with dermatitis-arthritis syndrome (migratory polyarthralgia, tenosynovitis, vesiculopustular skin lesions) and positive synovial fluid culture in many cases.","Incorrect: Gout shows negatively birefringent needle-shaped monosodium urate crystals in synovial fluid, not sterile inflammatory fluid.","Incorrect: Rheumatoid arthritis is a symmetric polyarthritis of small joints with RF and anti-CCP positivity; it is not preceded by infection or associated with HLA-B27.","Correct: Reactive arthritis = conjunctivitis + urethritis + arthritis post-infectious (GI or GU). HLA-B27 associated. Sterile synovial fluid (reactive, not septic).","Incorrect: SLE presents with multisystem involvement including butterfly rash, nephritis, and serositis; the classic reactive arthritis triad is not a feature."],
      highYieldPoint: "Reactive arthritis: 'can't see, can't pee, can't climb a tree.' HLA-B27+. Post-Chlamydia or post-enteric. Sterile inflammatory arthritis."
    },
    {
      vignette: "A 25-year-old woman presents with fever, right upper quadrant pain, and purulent vaginal discharge. She is sexually active with multiple partners. On examination, she has cervical motion tenderness and right upper quadrant tenderness. Laparoscopy reveals violin-string adhesions between the liver capsule and the anterior abdominal wall.",
      question: "Which of the following is the most likely diagnosis for the hepatic finding?",
      options: ["Budd-Chiari syndrome","Acute cholecystitis","Hepatic abscess","Fitz-Hugh-Curtis syndrome (perihepatitis)","Primary biliary cholangitis"],
      correctIndex: 3,
      explanation: "Fitz-Hugh-Curtis syndrome is perihepatitis characterized by violin-string adhesions between the liver capsule (Glisson capsule) and the anterior abdominal wall. It occurs as a complication of pelvic inflammatory disease (PID), most commonly caused by N. gonorrhoeae or C. trachomatis. Bacteria ascend from the pelvis to the liver capsule through the peritoneal cavity, causing inflammation and fibrous adhesion formation.",
      optionExplanations: ["Incorrect: Budd-Chiari syndrome is hepatic vein thrombosis causing hepatomegaly and ascites, not peritoneal adhesions.","Incorrect: Acute cholecystitis presents with RUQ pain, positive Murphy sign, and gallbladder wall thickening, not violin-string adhesions.","Incorrect: Hepatic abscess presents as a focal collection within the liver parenchyma, not capsular adhesions.","Correct: Fitz-Hugh-Curtis = perihepatitis with violin-string adhesions, complication of PID (gonorrhea or chlamydia). RUQ pain + cervical motion tenderness + purulent discharge.","Incorrect: Primary biliary cholangitis is an autoimmune condition with anti-mitochondrial antibodies, not associated with PID."],
      highYieldPoint: "Fitz-Hugh-Curtis: perihepatitis with violin-string adhesions from PID (gonorrhea/chlamydia). RUQ pain mimics cholecystitis."
    },
    {
      vignette: "A 29-year-old man presents with a painful inguinal swelling (bubo) that has been enlarging for 2 weeks. He reports a small painless genital papule that resolved spontaneously 3 weeks ago. He recently traveled to sub-Saharan Africa. The bubo is fluctuant and draining purulent material. NAAT is positive for Chlamydia trachomatis serotypes L1-L3.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Chancroid","Cat-scratch disease","Granuloma inguinale (donovanosis)","Primary syphilis with inguinal bubo","Lymphogranuloma venereum (LGV)"],
      correctIndex: 4,
      explanation: "Lymphogranuloma venereum (LGV) is caused by Chlamydia trachomatis serotypes L1, L2, and L3. It presents in three stages: (1) painless papule or ulcer that heals spontaneously, (2) painful inguinal lymphadenopathy (buboes) that may become fluctuant and drain, and (3) genital/rectal strictures and fistulas if untreated. LGV serotypes are more invasive than the D-K serotypes that cause typical chlamydial infections.",
      optionExplanations: ["Incorrect: Chancroid (H. ducreyi) presents with a painful genital ulcer (not a painless papule) and painful suppurative inguinal lymphadenopathy.","Incorrect: Cat-scratch disease (Bartonella henselae) causes regional lymphadenopathy after cat scratch/bite, not a genital STI.","Incorrect: Granuloma inguinale (donovanosis) causes painless beefy-red ulcers with Donovan bodies; there is NO lymphadenopathy (pseudo-buboes from subcutaneous granulomas).","Incorrect: Primary syphilis has a painless chancre with nontender lymphadenopathy, not fluctuant draining buboes.","Correct: LGV (C. trachomatis L1-L3) = painless papule → painful inguinal buboes → chronic strictures/fistulas if untreated. Treat: doxycycline 21 days."],
      highYieldPoint: "LGV (C. trachomatis L1-L3): painless papule → painful buboes → strictures. Treat: doxycycline 21 days. Serotypes D-K: urethritis/cervicitis."
    },
    {
      vignette: "A 23-year-old woman presents with malodorous, thin, grayish-white vaginal discharge. She denies itching or pain. Wet mount shows epithelial cells covered with bacteria obscuring cell borders. Vaginal pH is 5.2. KOH preparation produces a fishy odor (positive whiff test).",
      question: "Which of the following is the most likely causative organism?",
      options: ["Candida albicans","Trichomonas vaginalis","Neisseria gonorrhoeae","Chlamydia trachomatis","Gardnerella vaginalis (bacterial vaginosis)"],
      correctIndex: 4,
      explanation: "Bacterial vaginosis (BV) is caused by an overgrowth of Gardnerella vaginalis and other anaerobes replacing normal Lactobacillus flora. Diagnostic criteria (Amsel criteria) include: thin grayish-white discharge, vaginal pH >4.5, positive whiff test (fishy odor with KOH), and clue cells on wet mount (epithelial cells studded with bacteria, obscuring cell borders). BV is NOT a true infection/STI but a dysbiosis.",
      optionExplanations: ["Incorrect: Candida causes a thick, white, cottage cheese-like discharge with intense itching and a normal vaginal pH (<4.5). KOH prep shows pseudohyphae, not clue cells.","Incorrect: Trichomonas vaginalis causes a frothy, green-yellow, malodorous discharge with strawberry cervix. Wet mount shows motile, flagellated protozoa, not clue cells.","Incorrect: Gonorrhea causes purulent cervicitis/urethritis with gram-negative diplococci, not the vaginosis pattern described.","Incorrect: Chlamydia causes mucopurulent cervicitis, not vaginitis with clue cells and fishy odor.","Correct: Bacterial vaginosis (Gardnerella) = thin gray discharge, pH >4.5, positive whiff test, clue cells. Treat: metronidazole."],
      highYieldPoint: "BV (Gardnerella): clue cells, pH >4.5, whiff test+, thin gray discharge. Candida: cottage cheese, pH normal, pseudohyphae. Trich: frothy green, motile flagellates."
    },
    {
      vignette: "A 21-year-old woman presents with dysuria, urinary frequency, and lower abdominal discomfort. Urinalysis shows pyuria but urine culture grows no organisms. She is sexually active and reports a new partner 2 weeks ago. NAAT of urine is positive for Chlamydia trachomatis.",
      question: "Which of the following complications is most likely to result from untreated ascending chlamydial infection in this patient?",
      options: ["Toxic shock syndrome","Ovarian carcinoma","Vulvar dystrophy","Cervical carcinoma","Tubal factor infertility from chronic salpingitis"],
      correctIndex: 4,
      explanation: "Untreated Chlamydia trachomatis (serotypes D-K) can ascend from the cervix to cause pelvic inflammatory disease (PID), including endometritis, salpingitis, and tubo-ovarian abscess. Chronic salpingitis leads to tubal scarring, adhesion formation, and occlusion, resulting in tubal factor infertility and increased risk of ectopic pregnancy. Chlamydia is the most common bacterial STI and a leading preventable cause of infertility.",
      optionExplanations: ["Incorrect: Toxic shock syndrome is caused by S. aureus toxins (TSST-1), not chlamydial infection.","Incorrect: Ovarian carcinoma is not linked to chlamydial infection; it is associated with BRCA mutations and chronic ovulation.","Incorrect: Vulvar dystrophy is not a complication of chlamydial infection.","Incorrect: Cervical carcinoma is caused by high-risk HPV types (16, 18), not Chlamydia.","Correct: Ascending chlamydia → PID → chronic salpingitis → tubal scarring/adhesions → tubal factor infertility and ectopic pregnancy risk."],
      highYieldPoint: "Chlamydia: most common bacterial STI. Ascending infection → PID → salpingitis → tubal scarring → infertility + ectopic pregnancy. Often asymptomatic in women."
    }
  ]

};

const REPRO_SUMMARIES = {

  "Reproductive endocrinology": {
    sections: [
      {
        heading: "Hypothalamic-Pituitary-Gonadal Axis",
        bullets: [
          "GnRH (hypothalamus) is released in pulsatile fashion → stimulates anterior pituitary to release FSH and LH",
          "Pulsatile GnRH → ↑FSH/LH; Continuous GnRH (or agonists like leuprolide) → ↓FSH/LH (receptor downregulation)",
          "FSH stimulates granulosa cells (estrogen production, follicle development) and Sertoli cells (spermatogenesis, inhibin B)",
          "LH stimulates theca cells (androgen production) and Leydig cells (testosterone production)",
          "Negative feedback: estrogen + progesterone + inhibin → suppress GnRH, FSH, LH",
          "Positive feedback: high estrogen (mid-cycle) → LH surge → ovulation"
        ]
      },
      {
        heading: "Key Disorders of Sexual Development",
        bullets: [
          "Complete androgen insensitivity (46,XY): phenotypic female, absent uterus, blind vaginal pouch, breast development, no pubic hair, ↑testosterone/LH",
          "5α-reductase deficiency (46,XY): ambiguous genitalia at birth, virilization at puberty (testosterone → DHT conversion impaired)",
          "Kallmann syndrome: failed GnRH neuron migration → hypogonadotropic hypogonadism + anosmia",
          "Turner syndrome (45,X): streak gonads, short stature, shield chest, coarctation, hypergonadotropic hypogonadism",
          "Klinefelter (47,XXY): tall, small firm testes, gynecomastia, azoospermia, hypergonadotropic hypogonadism"
        ]
      },
      {
        heading: "Polycystic Ovary Syndrome (PCOS)",
        bullets: [
          "Most common cause of anovulatory infertility in reproductive-age women",
          "Pathophysiology: insulin resistance → ↑theca androgens + ↓SHBG → hyperandrogenism",
          "Elevated LH:FSH ratio (≥2:1), ↑free testosterone, ↑DHEA-S (mild)",
          "Diagnosis (Rotterdam criteria): need 2 of 3 — oligo/anovulation, hyperandrogenism, polycystic ovaries on US",
          "First-line ovulation induction: letrozole (aromatase inhibitor); metformin for metabolic features"
        ]
      },
      {
        heading: "Menopause and Perimenopause",
        bullets: [
          "Average age of menopause: ~51 years; premature ovarian insufficiency (POI) = menopause before 40",
          "↓Ovarian follicles → ↓inhibin B → ↑FSH (first to rise) → ↓estrogen → ↑LH",
          "Symptoms: hot flashes, vaginal atrophy, osteoporosis, cardiovascular risk",
          "HRT considerations: estrogen + progesterone (if uterus present to prevent endometrial hyperplasia)"
        ]
      }
    ],
    table: {
      title: "Causes of Amenorrhea — Hormonal Patterns",
      headers: ["Condition","FSH/LH","Estrogen","Key Features"],
      rows: [
        ["Hypothalamic amenorrhea","↓↓","↓↓","Stress, low weight, exercise"],
        ["Pituitary failure","↓↓","↓↓","Sheehan syndrome, tumor"],
        ["PCOS","LH > FSH","Normal/↑","Hyperandrogenism, insulin resistance"],
        ["Premature ovarian insufficiency","↑↑","↓↓","Ovarian failure < 40 y"],
        ["Hyperprolactinemia","↓","↓","↓GnRH pulsatility"],
        ["Asherman syndrome","Normal","Normal","Intrauterine adhesions"],
        ["MRKH syndrome","Normal","Normal","Absent uterus, 46,XX"]
      ]
    },
    mnemonic: "Amenorrhea workup order: 'PUSH' — Pregnancy test → Ultrasound (anatomy) → Serum hormones (FSH, LH, prolactin, TSH) → Hypothalamic/pituitary imaging if indicated."
  },

  "Pregnancy & obstetric complications": {
    sections: [
      {
        heading: "Antepartum Hemorrhage",
        bullets: [
          "Placenta previa: painless bright red bleeding, placenta covers internal os, NO digital exam, cesarean delivery required",
          "Placental abruption: painful dark bleeding, rigid tender uterus, fetal distress; risk factors = HTN, cocaine, trauma",
          "Vasa previa: painless bleeding with ROM, fetal vessels cross internal os, high fetal mortality if not recognized",
          "Uterine rupture: sudden pain + loss of contractions + fetal distress, usually in patients with prior uterine surgery"
        ]
      },
      {
        heading: "Hypertensive Disorders of Pregnancy",
        bullets: [
          "Gestational hypertension: HTN after 20 weeks without proteinuria or end-organ damage",
          "Preeclampsia: HTN + proteinuria (or end-organ dysfunction) after 20 weeks; abnormal trophoblast invasion → placental ischemia → endothelial dysfunction",
          "Eclampsia: preeclampsia + seizures; treat with IV magnesium sulfate",
          "HELLP syndrome: Hemolysis + Elevated Liver enzymes + Low Platelets; severe preeclampsia variant",
          "Definitive treatment for preeclampsia/HELLP: delivery of the fetus and placenta"
        ]
      },
      {
        heading: "Gestational Trophoblastic Disease",
        bullets: [
          "Complete mole: 46,XX (all paternal), no fetal parts, snowstorm US, very high hCG, 15-20% risk of GTN",
          "Partial mole: 69,XXY (triploid), fetal parts present, less elevated hCG, <5% risk of GTN",
          "Choriocarcinoma: malignant, no villi, hematogenous spread, very high hCG, responsive to methotrexate",
          "Follow β-hCG after mole evacuation to detect persistent/malignant disease"
        ]
      },
      {
        heading: "Fetal/Neonatal Complications",
        bullets: [
          "Neonatal RDS: surfactant (DPPC) deficiency in premature infants, ground-glass CXR, treat with exogenous surfactant",
          "Antenatal corticosteroids (betamethasone/dexamethasone): given 24-34 weeks to accelerate fetal lung maturity",
          "Infant of diabetic mother: fetal hyperinsulinism → macrosomia + neonatal hypoglycemia; insulin does NOT cross placenta, glucose DOES",
          "Rh hemolytic disease: anti-D IgG crosses placenta → fetal RBC destruction (Type II hypersensitivity); prevent with RhoGAM"
        ]
      }
    ],
    table: {
      title: "Quad Screen Patterns",
      headers: ["Condition","AFP","β-hCG","Estriol","Inhibin A"],
      rows: [
        ["Down syndrome (T21)","↓","↑","↓","↑"],
        ["Edwards syndrome (T18)","↓","↓","↓","↓"],
        ["Neural tube defect","↑","Normal","Normal","Normal"],
        ["Normal pregnancy","Normal","Normal","Normal","Normal"]
      ]
    },
    mnemonic: "Antepartum hemorrhage — 'PPV': Previa (Painless), Placental abruption (Painful), Vasa previa (Vessels). Postpartum hemorrhage — 4 T's: Tone (atony), Tissue (retained), Trauma (laceration), Thrombin (coagulopathy)."
  },

  "Gynecologic pathology": {
    sections: [
      {
        heading: "Cervical Pathology",
        bullets: [
          "Cervical cancer arises at the squamocolumnar junction (transformation zone)",
          "HPV 16, 18 = high-risk (cancer); HPV 6, 11 = low-risk (warts/condylomata acuminata)",
          "HPV E6 degrades p53; HPV E7 inactivates Rb → p16 overexpression (IHC marker)",
          "CIN 1 (LSIL): observe, most regress. CIN 2/3 (HSIL): excise (LEEP or cone biopsy)",
          "Cervical cancer screening: Pap every 3 years (21-29) or Pap + HPV co-test every 5 years (30-65)",
          "Most common cervical cancer: squamous cell carcinoma; HPV 18 more associated with adenocarcinoma"
        ]
      },
      {
        heading: "Uterine Pathology",
        bullets: [
          "Leiomyoma (fibroid): most common uterine tumor, benign smooth muscle, estrogen-dependent, whorled bundles",
          "Leiomyosarcoma: rare malignant smooth muscle tumor, arises de novo (NOT from leiomyomas), atypia + mitoses + necrosis",
          "Adenomyosis: endometrial glands in myometrium → diffuse boggy uterus, menorrhagia, dysmenorrhea",
          "Endometrial polyps: benign glands + stroma + thick-walled vessels, cause intermenstrual bleeding; tamoxifen ↑risk",
          "Endometrial cancer Type I: estrogen-dependent, endometrioid, hyperplasia → carcinoma sequence, good prognosis",
          "Endometrial cancer Type II: estrogen-independent, serous or clear cell, aggressive, p53 mutated, poor prognosis"
        ]
      },
      {
        heading: "Ovarian Neoplasms",
        bullets: [
          "Surface epithelial tumors: most common overall — serous (most common malignant, bilateral, psammoma bodies, ↑CA-125), mucinous (unilateral, large, pseudomyxoma peritonei), Brenner (transitional)",
          "Germ cell tumors: most common in young women — mature teratoma (dermoid, benign, all 3 germ layers), immature teratoma (malignant), dysgerminoma (↑LDH, female seminoma), yolk sac (↑AFP, Schiller-Duval bodies), choriocarcinoma (↑hCG)",
          "Sex cord-stromal: granulosa cell (↑estrogen, Call-Exner bodies, ↑inhibin), Sertoli-Leydig (↑androgens, virilization), fibroma (Meigs syndrome)",
          "Krukenberg tumor: bilateral ovarian metastasis (usually from GI, especially stomach), signet ring cells"
        ]
      },
      {
        heading: "Other Gynecologic Conditions",
        bullets: [
          "Endometriosis: ectopic endometrial tissue, chocolate cysts, powder-burn lesions, dysmenorrhea/dyspareunia/infertility",
          "Lichen sclerosus: thin white vulvar plaques, thinned epidermis, collagen homogenization, small risk of SCC (~4-5%)",
          "MRKH syndrome: 46,XX, absent uterus + upper vagina, normal ovaries, second most common cause of primary amenorrhea",
          "BRCA1/2: tumor suppressors, homologous recombination DNA repair; BRCA1 → breast + ovarian; BRCA2 → breast + ovarian + pancreatic"
        ]
      }
    ],
    table: {
      title: "Ovarian Tumor Markers and Histologic Features",
      headers: ["Tumor","Marker(s)","Key Histology","Age Group"],
      rows: [
        ["Serous cystadenocarcinoma","CA-125","Psammoma bodies, papillary","Postmenopausal"],
        ["Mature teratoma (dermoid)","None specific","All 3 germ layers","Young women"],
        ["Dysgerminoma","LDH, hCG (mild)","Sheets of uniform cells, lymphocytes","Young women"],
        ["Yolk sac tumor","AFP","Schiller-Duval bodies","Children"],
        ["Choriocarcinoma","hCG (very high)","Syncytio-/cytotrophoblasts, no villi","Reproductive age"],
        ["Granulosa cell tumor","Inhibin, estrogen","Call-Exner bodies","Postmenopausal"],
        ["Krukenberg tumor","None specific","Signet ring cells (metastatic)","Any age"]
      ]
    },
    mnemonic: "HPV oncoproteins: 'E6 = siX = p53 (knocks out p53), E7 = Rb (knocks out Rb).' Ovarian tumor markers: 'Serous = CA-125, Yolk sac = AFP, Chorio = hCG, Granulosa = Inhibin.'"
  },

  "Male reproductive pathology": {
    sections: [
      {
        heading: "Testicular Germ Cell Tumors",
        bullets: [
          "Most common solid malignancy in men aged 15-35",
          "Seminoma: most common single type, radiosensitive, ↑LDH, may have mild ↑hCG, AFP is NEVER elevated",
          "Nonseminomatous GCTs: embryonal carcinoma (↑AFP, ↑hCG), yolk sac tumor (↑AFP, Schiller-Duval bodies), choriocarcinoma (very ↑hCG, hemorrhagic mets), teratoma (malignant in adult males)",
          "Mixed GCT: most common testicular cancer overall, contains ≥2 germ cell components",
          "Any AFP elevation = nonseminomatous (rules out pure seminoma)",
          "Risk factors: cryptorchidism (#1), prior GCT, family history, testicular dysgenesis",
          "Treatment: radical inguinal orchiectomy (NOT trans-scrotal) + chemo (BEP: bleomycin, etoposide, cisplatin)"
        ]
      },
      {
        heading: "Sex Cord-Stromal Tumors of the Testis",
        bullets: [
          "Leydig cell tumor: produces androgens/estrogens, Reinke crystals, golden-yellow, gynecomastia (adults) or precocious puberty (children), usually benign",
          "Sertoli cell tumor: tubular architecture, may produce inhibin, rare and usually benign"
        ]
      },
      {
        heading: "Prostatic Disease",
        bullets: [
          "BPH: transition zone (periurethral), smooth muscle and glandular hyperplasia → obstructive/irritative urinary symptoms",
          "Prostate cancer: peripheral zone, most common cancer in men, ↑PSA, osteoblastic bone metastases, Gleason grading",
          "Diagnosis: absent basal layer (p63−, 34βE12−) + AMACR+",
          "Treatment: androgen deprivation (GnRH agonists like leuprolide → medical castration after initial flare)"
        ]
      },
      {
        heading: "Scrotal Pathology",
        bullets: [
          "Testicular torsion: surgical emergency, absent cremasteric reflex, high-riding testis, absent Doppler flow → detorsion + bilateral orchiopexy within 6 hours",
          "Cryptorchidism: most common congenital GU anomaly, ↑risk of germ cell tumor (even after orchiopexy), fix by 6-12 months",
          "Varicocele: dilated pampiniform plexus ('bag of worms'), left-sided (85-95%), impairs spermatogenesis via ↑temperature, most common correctable cause of male infertility",
          "Hydrocele: fluid in tunica vaginalis, painless, transilluminates",
          "Spermatocele: epididymal cyst above and behind testis"
        ]
      }
    ],
    table: {
      title: "Testicular Germ Cell Tumor Markers",
      headers: ["Tumor Type","AFP","β-hCG","LDH","Key Histology"],
      rows: [
        ["Seminoma","Never ↑","May be mild ↑","↑","Clear cells, lymphocytes"],
        ["Embryonal carcinoma","↑","↑","↑","Primitive cells, hemorrhage"],
        ["Yolk sac tumor","↑↑","−","−","Schiller-Duval bodies"],
        ["Choriocarcinoma","−","↑↑↑","−","Trophoblasts, no villi"],
        ["Teratoma","May be ↑","May be ↑","−","Multiple germ layers"],
        ["Mixed GCT","Depends on components","Depends on components","↑","≥2 components"]
      ]
    },
    mnemonic: "Prostate zones: 'TiP — Transition = hyperplasia (BPH), Peripheral = carcinoma (cancer).' Testicular torsion: 'STAT — Sudden Torsion Absent cremasteric reflex, Treat with surgery.'"
  },

  "Sexually transmitted infections": {
    sections: [
      {
        heading: "Genital Ulcer Diseases",
        bullets: [
          "Syphilis (T. pallidum): painless chancre (primary), rash on palms/soles + condylomata lata (secondary), gummas/aortitis/neurosyphilis (tertiary)",
          "Syphilis testing: screening = VDRL/RPR (non-treponemal); confirmatory = FTA-ABS (treponemal). False + VDRL: SLE, antiphospholipid syndrome",
          "Treatment: penicillin G benzathine (ONLY option in pregnancy; desensitize if allergic)",
          "Herpes (HSV-2): painful grouped vesicles, Tzanck smear (multinucleated giant cells), latency in sacral ganglia (S2-S4). Treat: acyclovir",
          "Chancroid (H. ducreyi): painful purulent ulcer + painful suppurative inguinal lymphadenopathy. Treat: azithromycin or ceftriaxone",
          "LGV (C. trachomatis L1-L3): painless papule → painful inguinal buboes → strictures. Treat: doxycycline 21 days",
          "Donovanosis (K. granulomatis): painless beefy-red ulcers, Donovan bodies on biopsy, NO lymphadenopathy"
        ]
      },
      {
        heading: "Urethritis and Cervicitis",
        bullets: [
          "Gonorrhea (N. gonorrhoeae): gram-negative intracellular diplococci, purulent urethral/cervical discharge. Treat: IM ceftriaxone + PO doxycycline",
          "Chlamydia (C. trachomatis D-K): most common bacterial STI, often asymptomatic, mucopurulent discharge, sterile pyuria. Treat: doxycycline or azithromycin",
          "Chlamydia lifecycle: elementary body (infectious extracellular) → reticulate body (replicative intracellular)",
          "Complications of ascending infection: PID → salpingitis → tubal factor infertility, ectopic pregnancy, Fitz-Hugh-Curtis syndrome (perihepatitis)"
        ]
      },
      {
        heading: "HPV and Genital Warts",
        bullets: [
          "HPV 6, 11: low-risk → condylomata acuminata (genital warts), benign",
          "HPV 16, 18: high-risk → cervical, anal, oropharyngeal carcinoma",
          "HPV vaccine: 9-valent (Gardasil 9) covers types 6, 11, 16, 18, 31, 33, 45, 52, 58",
          "Condylomata acuminata (HPV, pointed warts) vs. condylomata lata (syphilis, flat moist lesions)"
        ]
      },
      {
        heading: "HIV/AIDS",
        bullets: [
          "HIV binds CD4 + coreceptor (CCR5 or CXCR4) → reverse transcription → integration → replication",
          "Antiretroviral drug classes: NRTIs, NNRTIs, protease inhibitors, integrase inhibitors (INSTIs), fusion/entry inhibitors",
          "Current first-line therapy: 2 NRTIs (tenofovir/emtricitabine) + 1 INSTI (dolutegravir or bictegravir)",
          "Integrase inhibitors prevent viral DNA integration into host genome",
          "CD4 < 200 → AIDS diagnosis; opportunistic infections depend on CD4 count threshold"
        ]
      },
      {
        heading: "Vaginal Infections",
        bullets: [
          "Bacterial vaginosis (Gardnerella): clue cells, pH >4.5, + whiff test, thin gray discharge. Treat: metronidazole",
          "Vulvovaginal candidiasis (Candida): cottage cheese discharge, intense itch, pH normal, pseudohyphae on KOH. Treat: fluconazole",
          "Trichomoniasis (T. vaginalis): frothy green-yellow discharge, strawberry cervix, motile trichomonads on wet mount. Treat: metronidazole"
        ]
      }
    ],
    table: {
      title: "Genital Ulcer Differential Diagnosis",
      headers: ["Disease","Organism","Ulcer Character","Pain","Lymphadenopathy"],
      rows: [
        ["Primary syphilis","T. pallidum","Clean-based, firm","Painless","Bilateral, nontender"],
        ["Herpes (HSV-2)","HSV-2","Grouped vesicles/shallow ulcers","Painful","Bilateral, tender"],
        ["Chancroid","H. ducreyi","Ragged, purulent","Painful","Unilateral, suppurative"],
        ["LGV","C. trachomatis L1-L3","Transient papule","Painless (primary)","Painful buboes"],
        ["Donovanosis","K. granulomatis","Beefy-red, granulating","Painless","None (pseudo-buboes)"]
      ]
    },
    mnemonic: "Genital ulcers — 'Even Syphilis Has Certain Lovely Details': painlEss = Syphilis/donovanosis; painful = HSV/Chancroid/LGV (buboes). Vaginitis — 'BV Clues, Candida Curds, Trich Trots': BV = clue cells, Candida = cottage cheese (curds), Trichomonas = trichomonads (trots = motile)."
  }

};
