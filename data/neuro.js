const NEURO_QUESTIONS = {

  "Neuroanatomy & pathways": [
    {
      vignette: "A 32-year-old man is brought to the emergency department after a motorcycle collision. He cannot move his right lower extremity and has lost proprioception and vibration sense on the right below the level of T10. He has lost pain and temperature sensation on the left side below T12. He has intact rectal tone.",
      question: "Which spinal cord lesion best explains these findings?",
      options: ["Complete spinal cord transection", "Anterior cord syndrome", "Brown-Séquard syndrome", "Central cord syndrome", "Posterior cord syndrome"],
      correctIndex: 2,
      explanation: "Brown-Séquard syndrome results from hemisection of the spinal cord. Ipsilateral findings include upper motor neuron paralysis (corticospinal tract) and loss of proprioception/vibration (dorsal columns) below the lesion. Contralateral loss of pain/temperature (spinothalamic tract) occurs 1-2 levels below the lesion because these fibers decussate in the anterior white commissure shortly after entering the cord.",
      optionExplanations: ["Incorrect: Complete transection would produce bilateral loss of all motor and sensory modalities below the lesion.", "Incorrect: Anterior cord syndrome spares dorsal columns (proprioception/vibration) but causes bilateral motor and pain/temperature loss.", "Correct: Brown-Séquard syndrome produces ipsilateral motor loss and dorsal column deficits with contralateral spinothalamic deficits.", "Incorrect: Central cord syndrome predominantly affects the upper extremities (cape-like distribution) due to the somatotopic arrangement of the corticospinal tracts.", "Incorrect: Posterior cord syndrome causes bilateral proprioception/vibration loss with preserved motor and pain/temperature function."],
      highYieldPoint: "Brown-Séquard: ipsilateral motor + dorsal column loss; contralateral pain/temperature loss (1-2 levels below)."
    },
    {
      vignette: "A 68-year-old woman with metastatic breast cancer develops acute back pain followed by bilateral leg weakness, urinary retention, and loss of pain and temperature sensation below T6 bilaterally. Proprioception and vibration sense are preserved in both lower extremities.",
      question: "Which spinal cord syndrome is most consistent with this presentation?",
      options: ["Posterior cord syndrome", "Brown-Séquard syndrome", "Central cord syndrome", "Anterior cord syndrome", "Cauda equina syndrome"],
      correctIndex: 3,
      explanation: "Anterior cord syndrome involves damage to the anterior two-thirds of the spinal cord, affecting the corticospinal tracts (bilateral motor loss), spinothalamic tracts (bilateral pain/temperature loss), and autonomic pathways (bladder dysfunction). The dorsal columns are spared, preserving proprioception and vibration. This is classically caused by anterior spinal artery occlusion or compression by a vertebral body mass.",
      optionExplanations: ["Incorrect: Posterior cord syndrome would spare motor function and pain/temperature sensation while impairing proprioception.", "Incorrect: Brown-Séquard presents with ipsilateral motor/dorsal column deficits and contralateral pain/temperature loss.", "Incorrect: Central cord syndrome disproportionately affects upper extremities due to the medial location of cervical fibers in the corticospinal tract.", "Correct: Anterior cord syndrome presents with bilateral motor and spinothalamic deficits with preserved dorsal column function.", "Incorrect: Cauda equina syndrome causes lower motor neuron signs (flaccid paralysis, areflexia), saddle anesthesia, and bowel/bladder dysfunction."],
      highYieldPoint: "Anterior cord syndrome: bilateral motor + pain/temp loss with spared proprioception; anterior spinal artery territory."
    },
    {
      vignette: "A 55-year-old man with untreated syphilis presents with a wide-based, stamping gait that worsens in the dark. He cannot maintain balance with his eyes closed. Examination reveals absent knee and ankle deep tendon reflexes bilaterally and loss of joint position sense in both feet.",
      question: "Which structure is primarily affected in this patient's condition?",
      options: ["Dorsal columns", "Lateral corticospinal tracts", "Spinothalamic tracts", "Anterior horn cells", "Dorsal root ganglia"],
      correctIndex: 0,
      explanation: "Tabes dorsalis is a manifestation of tertiary syphilis that preferentially damages the dorsal columns and dorsal roots. Loss of proprioception leads to sensory ataxia (wide-based, stamping gait that worsens without visual compensation — positive Romberg sign). Damage to dorsal roots causes areflexia. The dorsal columns carry proprioception, fine touch, and vibration via the fasciculus gracilis (lower body) and fasciculus cuneatus (upper body).",
      optionExplanations: ["Correct: Tabes dorsalis targets dorsal columns/roots, causing proprioceptive loss, sensory ataxia, and areflexia.", "Incorrect: Lateral corticospinal tract damage causes upper motor neuron signs (spasticity, hyperreflexia, weakness).", "Incorrect: Spinothalamic tract damage causes loss of pain and temperature sensation, not proprioception.", "Incorrect: Anterior horn cell damage causes lower motor neuron signs (flaccid paralysis, fasciculations) as in poliomyelitis.", "Incorrect: Dorsal root ganglia destruction occurs in sensory ganglionopathies (paraneoplastic), not in tabes dorsalis, which primarily affects the dorsal columns themselves."],
      highYieldPoint: "Tabes dorsalis (tertiary syphilis): dorsal column degeneration → sensory ataxia, positive Romberg, areflexia, Argyll Robertson pupils."
    },
    {
      vignette: "A 74-year-old man with long-standing vitamin B12 deficiency presents with difficulty walking, frequent falls, and tingling in his hands and feet. Examination reveals hyperreflexia at the knees, bilateral Babinski signs, and impaired vibration sense at the ankles and wrists.",
      question: "Which two spinal cord structures are most likely affected?",
      options: ["Anterior horn cells and spinothalamic tracts", "Dorsal columns and lateral corticospinal tracts", "Spinocerebellar tracts and anterior horn cells", "Dorsal root ganglia and ventral roots", "Spinothalamic tracts and dorsal columns"],
      correctIndex: 1,
      explanation: "Subacute combined degeneration from B12 deficiency affects the dorsal columns (loss of vibration and proprioception) and lateral corticospinal tracts (upper motor neuron signs: hyperreflexia, spasticity, Babinski signs). Peripheral neuropathy also commonly occurs, causing the tingling paresthesias. B12 is a cofactor for methionine synthase, necessary for myelin maintenance.",
      optionExplanations: ["Incorrect: Anterior horn cells (LMN) and spinothalamic tracts are not the classic targets of B12 deficiency.", "Correct: Subacute combined degeneration specifically targets dorsal columns and lateral corticospinal tracts.", "Incorrect: Spinocerebellar tracts and anterior horn cells are affected in Friedreich ataxia, not B12 deficiency.", "Incorrect: Dorsal root ganglia and ventral root involvement describes a polyradiculopathy, not the classic myelopathy of B12 deficiency.", "Incorrect: Spinothalamic tracts (pain/temperature) are typically spared in subacute combined degeneration."],
      highYieldPoint: "Subacute combined degeneration (B12 def): dorsal columns (vibration/proprioception) + lateral corticospinal tracts (UMN signs)."
    },
    {
      vignette: "A 45-year-old woman presents with progressive bilateral hand weakness and wasting. She reports episodes of burning pain in her shoulders and upper arms. Examination reveals loss of pain and temperature sensation in a cape-like distribution across both shoulders and upper extremities. Lower extremity strength and sensation are normal.",
      question: "Which anatomical structure is most likely disrupted by this patient's underlying condition?",
      options: ["Dorsal root ganglia", "Anterior white commissure", "Posterior longitudinal ligament", "Nucleus pulposus", "Lateral corticospinal tract"],
      correctIndex: 1,
      explanation: "This presentation is classic for syringomyelia — a fluid-filled cavity (syrinx) expanding within the central spinal cord. The syrinx first disrupts the anterior white commissure, where second-order spinothalamic fibers decussate. This produces bilateral loss of pain and temperature in a cape-like distribution corresponding to the levels affected. As the syrinx expands, it can damage anterior horn cells (causing LMN weakness/atrophy in the hands).",
      optionExplanations: ["Incorrect: Dorsal root ganglia are located outside the spinal cord and are not compressed by a central syrinx.", "Correct: The expanding syrinx disrupts decussating spinothalamic fibers at the anterior white commissure, causing the cape-like dissociated sensory loss.", "Incorrect: The posterior longitudinal ligament is an extradural structure unrelated to intramedullary pathology.", "Incorrect: Nucleus pulposus herniation causes radiculopathy from nerve root compression, not a central cord lesion.", "Incorrect: The lateral corticospinal tract is located peripherally in the cord and is affected late in syringomyelia, not initially."],
      highYieldPoint: "Syringomyelia: central canal expansion → anterior white commissure disruption → bilateral cape-like pain/temp loss; associated with Chiari I malformation."
    },
    {
      vignette: "A 3-year-old boy is evaluated for progressive clumsiness and difficulty walking. Genetic testing reveals an expanded GAA trinucleotide repeat in the frataxin gene. Examination reveals absent lower extremity reflexes, a positive Romberg sign, and kyphoscoliosis.",
      question: "Which spinal cord tracts are characteristically affected in this condition?",
      options: ["Dorsal columns, spinocerebellar tracts, and lateral corticospinal tracts", "Spinothalamic tracts and anterior horn cells", "Anterior corticospinal tracts and dorsal columns only", "Ventral roots and dorsal root ganglia only", "Reticulospinal and vestibulospinal tracts"],
      correctIndex: 0,
      explanation: "Friedreich ataxia is an autosomal recessive condition caused by GAA trinucleotide repeat expansion in the frataxin gene (chromosome 9). It causes degeneration of the dorsal columns (sensory ataxia, positive Romberg), spinocerebellar tracts (cerebellar ataxia), lateral corticospinal tracts (Babinski signs), and dorsal root ganglia. Hypertrophic cardiomyopathy is the leading cause of death.",
      optionExplanations: ["Correct: Friedreich ataxia classically degenerates dorsal columns, spinocerebellar tracts, and lateral corticospinal tracts.", "Incorrect: Spinothalamic tracts and anterior horn cells are not the primary targets in Friedreich ataxia.", "Incorrect: The anterior corticospinal tract carries a minority of motor fibers and is not prominently involved.", "Incorrect: While dorsal root ganglia are affected, ventral root involvement is not a hallmark.", "Incorrect: Reticulospinal and vestibulospinal tracts are not characteristically damaged in Friedreich ataxia."],
      highYieldPoint: "Friedreich ataxia: GAA repeat in frataxin gene → dorsal column + spinocerebellar + corticospinal degeneration + hypertrophic cardiomyopathy."
    },
    {
      vignette: "A 60-year-old woman presents with right arm and leg weakness. Brain MRI shows an infarct in the left posterior limb of the internal capsule. Examination reveals upper motor neuron signs on the right side.",
      question: "Which tract passing through the posterior limb of the internal capsule is responsible for her motor deficit?",
      options: ["Spinothalamic tract", "Medial lemniscus", "Optic radiation", "Frontopontine fibers", "Corticospinal tract"],
      correctIndex: 4,
      explanation: "The posterior limb of the internal capsule contains the corticospinal tract (motor fibers from the primary motor cortex to the spinal cord). A lacunar infarct in this location classically produces pure motor hemiparesis, a contralateral upper motor neuron pattern of weakness. The somatotopic arrangement places face fibers anteriorly and leg fibers posteriorly within the posterior limb.",
      optionExplanations: ["Incorrect: The spinothalamic tract is an ascending sensory pathway within the spinal cord, not a structure traversing the internal capsule.", "Incorrect: The medial lemniscus carries ascending somatosensory information and does not pass through the posterior limb.", "Incorrect: The optic radiation (geniculocalcarine tract) passes through the retrolenticular and sublenticular portions, not the posterior limb.", "Incorrect: Frontopontine fibers travel through the anterior limb of the internal capsule.", "Correct: The corticospinal tract passes through the posterior limb of the internal capsule, and its damage produces contralateral hemiparesis."],
      highYieldPoint: "Posterior limb of internal capsule: corticospinal tract; lacunar infarct here → pure motor hemiparesis."
    },
    {
      vignette: "A 40-year-old man presents to a neurologist with involuntary rhythmic movements of his right hand. Brain MRI reveals a lesion in the left ventral lateral nucleus of the thalamus. The involuntary movements are present at rest and disappear with voluntary movement.",
      question: "Which structure normally projects to the ventral lateral nucleus of the thalamus to facilitate motor planning?",
      options: ["Hippocampus", "Amygdala", "Cerebellum", "Mammillary body", "Primary visual cortex"],
      correctIndex: 2,
      explanation: "The ventral lateral (VL) nucleus of the thalamus receives input from the cerebellum (via the dentate nucleus and superior cerebellar peduncle) and the basal ganglia (via the globus pallidus interna). The VL nucleus then projects to the primary motor cortex and premotor cortex. The cerebellum is essential for motor coordination and planning, and disruption of cerebellar-thalamic circuits contributes to tremor and dysmetria.",
      optionExplanations: ["Incorrect: The hippocampus projects to the mammillary bodies via the fornix, part of the Papez circuit for memory.", "Incorrect: The amygdala connects primarily with the hypothalamus, orbitofrontal cortex, and mediodorsal thalamus for emotion processing.", "Correct: The cerebellum projects to the VL thalamus via the superior cerebellar peduncle; VL then projects to the motor cortex.", "Incorrect: Mammillary bodies project to the anterior nucleus of the thalamus (not the VL) as part of the Papez circuit.", "Incorrect: The primary visual cortex connects to the lateral geniculate nucleus, not the VL nucleus."],
      highYieldPoint: "Thalamic relay nuclei: VL = motor (cerebellum/basal ganglia → motor cortex), VPL = body sensation, VPM = face sensation, LGN = vision, MGN = hearing."
    },
    {
      vignette: "A 28-year-old woman experiences a sudden severe headache followed by right-sided facial droop, dysarthria, and left-sided arm and leg weakness. MRI reveals a pontine lesion on the right side.",
      question: "Which cranial nerve nucleus is located in the pons and is most likely responsible for the ipsilateral facial weakness?",
      options: ["Facial nerve nucleus (CN VII)", "Trigeminal motor nucleus (CN V)", "Hypoglossal nucleus (CN XII)", "Nucleus ambiguus (CN IX/X)", "Abducens nucleus (CN VI)"],
      correctIndex: 0,
      explanation: "The facial motor nucleus is located in the caudal pons. A lesion at this level causes ipsilateral lower motor neuron facial palsy (affecting both upper and lower face) combined with contralateral hemiparesis from corticospinal tract involvement (the tract has not yet decussated). This combination of cranial nerve and long tract signs localizes the lesion to the brainstem.",
      optionExplanations: ["Correct: The CN VII nucleus in the pons is responsible for ipsilateral facial motor function; pontine damage produces LMN facial palsy.", "Incorrect: The trigeminal motor nucleus controls muscles of mastication, not facial expression.", "Incorrect: The hypoglossal nucleus is in the medulla, not the pons, and controls tongue movement.", "Incorrect: The nucleus ambiguus is in the medulla and controls swallowing/phonation via CN IX/X.", "Incorrect: The abducens nucleus in the pons controls lateral eye movement (lateral rectus), not facial expression."],
      highYieldPoint: "Pontine lesion: ipsilateral LMN CN VII palsy + contralateral hemiparesis = alternating hemiplegia (Millard-Gubler syndrome)."
    },
    {
      vignette: "A 52-year-old man with a history of smoking presents with left ptosis and miosis. His left face does not sweat. He recently had surgery involving his left lung apex for a Pancoast tumor.",
      question: "Disruption of which neural pathway best explains this patient's ocular findings?",
      options: ["Parasympathetic fibers from the Edinger-Westphal nucleus", "Somatic motor fibers of CN III", "Motor fibers of CN IV", "Sensory fibers of the ophthalmic division of CN V", "Sympathetic fibers from the superior cervical ganglion"],
      correctIndex: 4,
      explanation: "This patient has Horner syndrome (ptosis, miosis, anhidrosis) resulting from disruption of the oculosympathetic pathway. A Pancoast tumor at the lung apex can damage the sympathetic chain or preganglionic fibers near the stellate ganglion. The three-neuron sympathetic pathway runs: (1) hypothalamus to ciliospinal center of Budge (C8-T2), (2) preganglionic neuron exits T1 and ascends over the lung apex to the superior cervical ganglion, (3) postganglionic fibers travel with the internal carotid to the eye.",
      optionExplanations: ["Incorrect: Parasympathetic fibers from the Edinger-Westphal nucleus cause pupillary constriction; their disruption would cause mydriasis, not miosis.", "Incorrect: CN III motor fibers control most extraocular muscles and eyelid elevation; complete CN III palsy causes ptosis with mydriasis (not miosis).", "Incorrect: CN IV innervates the superior oblique muscle; its damage causes vertical diplopia, not ptosis or pupil changes.", "Incorrect: The ophthalmic division of CN V carries sensory information from the forehead and eye; damage does not explain ptosis and miosis.", "Correct: The oculosympathetic pathway (via the superior cervical ganglion) supplies Müller muscle (partial eyelid elevation), pupillary dilator, and facial sweat glands; disruption causes Horner syndrome."],
      highYieldPoint: "Horner syndrome: ptosis + miosis + anhidrosis; 3-neuron sympathetic pathway (hypothalamus → ciliospinal center → superior cervical ganglion → eye)."
    },
    {
      vignette: "A 19-year-old man is brought in after a diving accident. He has complete paralysis and loss of all sensation in both upper and lower extremities. He has priapism. There is no voluntary movement below the clavicles.",
      question: "At which spinal cord level is the lesion most likely located?",
      options: ["T10", "C3-C5", "L1-L2", "S2-S4", "T1-T2"],
      correctIndex: 1,
      explanation: "Complete quadriplegia with loss of all motor and sensory function in both upper and lower extremities localizes the lesion to the cervical spinal cord. The C3-C5 level is critical because the phrenic nerve (diaphragm innervation) originates here. A lesion at this level would compromise respiratory function. Priapism can occur with spinal cord injury due to loss of sympathetic tone.",
      optionExplanations: ["Incorrect: A T10 lesion would spare upper extremity function entirely, producing paraplegia rather than quadriplegia.", "Correct: A C3-C5 lesion produces quadriplegia with potential respiratory compromise due to phrenic nerve involvement.", "Incorrect: L1-L2 lesions affect the conus medullaris and cause lower extremity deficits with bowel/bladder dysfunction only.", "Incorrect: S2-S4 houses the sacral parasympathetic center; damage causes bowel/bladder/sexual dysfunction without limb paralysis.", "Incorrect: T1-T2 would spare upper extremity function above the T1 myotome; the patient would retain arm and hand function."],
      highYieldPoint: "C3-C5 keeps the diaphragm alive (phrenic nerve); cervical cord injury above C5 → quadriplegia + respiratory failure."
    },
    {
      vignette: "A 35-year-old woman has a lesion of the left optic tract identified on MRI. She reports difficulty seeing objects in a portion of her visual field.",
      question: "What visual field defect would be expected with a left optic tract lesion?",
      options: ["Left homonymous hemianopia", "Bitemporal hemianopia", "Left monocular blindness", "Right homonymous hemianopia", "Right superior quadrantanopia"],
      correctIndex: 3,
      explanation: "The optic tract carries fibers from the ipsilateral temporal retina and contralateral nasal retina. A left optic tract lesion disrupts fibers carrying information from the right visual field of both eyes, resulting in a right homonymous hemianopia. In optic tract lesions, the visual field defect is contralateral to the lesion side.",
      optionExplanations: ["Incorrect: A left homonymous hemianopia would result from a right optic tract or right-sided retrochiasmal lesion.", "Incorrect: Bitemporal hemianopia results from a midline chiasmal lesion (e.g., pituitary adenoma) compressing crossing nasal fibers.", "Incorrect: Left monocular blindness results from a left optic nerve lesion, anterior to the chiasm.", "Correct: A left optic tract lesion produces a right homonymous hemianopia (loss of the right visual field in both eyes).", "Incorrect: A right superior quadrantanopia (pie in the sky) results from a lesion in the temporal lobe (Meyer loop) of the left optic radiation."],
      highYieldPoint: "Visual pathway: optic nerve (monocular) → chiasm (bitemporal) → optic tract/LGN/radiation (contralateral homonymous hemianopia)."
    },
    {
      vignette: "A 48-year-old woman undergoes surgery for a left temporal lobe tumor. Postoperatively, she reports difficulty seeing objects in the upper right portion of her visual field in both eyes.",
      question: "Which neural structure was most likely damaged during the surgery?",
      options: ["Right optic nerve", "Optic chiasm", "Left Meyer loop (temporal optic radiation)", "Left dorsal optic radiation (parietal)", "Left lateral geniculate nucleus"],
      correctIndex: 2,
      explanation: "Meyer loop is the anterior portion of the optic radiation that courses through the temporal lobe, carrying fibers from the inferior retina (which represents the superior visual field). Damage to the left Meyer loop during temporal lobe surgery causes a right superior quadrantanopia — classically called 'pie in the sky.' The parietal optic radiation carries superior retinal fibers representing the inferior visual field.",
      optionExplanations: ["Incorrect: Right optic nerve damage would cause left monocular vision loss, not a bilateral visual field defect.", "Incorrect: Optic chiasm damage from midline compression causes bitemporal hemianopia.", "Correct: Left Meyer loop carries fibers for the contralateral superior visual field; its damage causes right superior quadrantanopia.", "Incorrect: Left dorsal (parietal) optic radiation damage would cause a right inferior quadrantanopia ('pie on the floor').", "Incorrect: Left LGN damage would produce a complete right homonymous hemianopia, not an isolated quadrantanopia."],
      highYieldPoint: "Meyer loop (temporal lobe) = superior visual field → 'pie in the sky'; parietal optic radiation = inferior visual field → 'pie on the floor.'"
    },
    {
      vignette: "A 70-year-old man presents with bilateral lower extremity weakness, urinary incontinence, and a wide-based magnetic gait. MRI shows dilated ventricles with no cortical atrophy. A lumbar puncture removing 30 mL of CSF results in marked gait improvement.",
      question: "What is the most likely diagnosis?",
      options: ["Alzheimer disease", "Parkinson disease", "Vascular dementia", "Progressive supranuclear palsy", "Normal pressure hydrocephalus"],
      correctIndex: 4,
      explanation: "Normal pressure hydrocephalus (NPH) presents with the classic triad of gait disturbance ('magnetic gait'), urinary incontinence, and dementia — remembered as 'wet, wacky, and wobbly.' Imaging shows ventriculomegaly out of proportion to cortical atrophy. A large-volume lumbar puncture that improves symptoms (particularly gait) supports the diagnosis and predicts response to ventriculoperitoneal shunting.",
      optionExplanations: ["Incorrect: Alzheimer disease presents with progressive memory loss; imaging shows cortical and hippocampal atrophy, not isolated ventriculomegaly.", "Incorrect: Parkinson disease features resting tremor, rigidity, bradykinesia, and postural instability without ventriculomegaly.", "Incorrect: Vascular dementia shows stepwise cognitive decline with white matter ischemic changes on imaging, not isolated ventriculomegaly.", "Incorrect: Progressive supranuclear palsy features vertical gaze palsy, axial rigidity, and early falls, without ventriculomegaly.", "Correct: NPH classically presents with the triad of gait apraxia, urinary incontinence, and dementia, with ventriculomegaly and improvement after CSF removal."],
      highYieldPoint: "NPH triad: 'wet, wacky, wobbly' (urinary incontinence, dementia, gait apraxia); improved by VP shunt."
    },
    {
      vignette: "A 22-year-old man sustains a stab wound to the posterior neck. Subsequent examination reveals loss of proprioception and fine touch on the ipsilateral side below the injury, but pain and temperature sensation remain intact. Motor function is preserved.",
      question: "Which spinal cord tract has been selectively damaged?",
      options: ["Spinothalamic tract", "Anterior corticospinal tract", "Lateral corticospinal tract", "Dorsal columns (fasciculus gracilis/cuneatus)", "Spinocerebellar tract"],
      correctIndex: 3,
      explanation: "The dorsal columns (fasciculus gracilis for lower body, fasciculus cuneatus for upper body) carry proprioception, vibration, fine touch, and two-point discrimination. These first-order neurons ascend ipsilaterally in the dorsal columns to the nucleus gracilis/cuneatus in the caudal medulla, where they synapse and then decussate as the internal arcuate fibers forming the medial lemniscus. A posterior spinal cord injury that selectively damages the dorsal columns produces ipsilateral loss of these modalities.",
      optionExplanations: ["Incorrect: The spinothalamic tract carries pain and temperature; it is located anterolaterally, not posteriorly.", "Incorrect: The anterior corticospinal tract carries a small portion of descending motor fibers and is located in the anterior funiculus.", "Incorrect: The lateral corticospinal tract carries motor fibers; damage would cause ipsilateral weakness, not isolated sensory loss.", "Correct: Dorsal columns carry proprioception and fine touch ipsilaterally; a posterior injury selectively impairs these modalities.", "Incorrect: Spinocerebellar tracts carry unconscious proprioception for coordination; damage causes ipsilateral ataxia without loss of conscious proprioception."],
      highYieldPoint: "Dorsal columns: proprioception, vibration, fine touch, 2-point discrimination; ascend ipsilaterally → synapse in medulla → decussate as medial lemniscus."
    }
  ],

  "Cerebrovascular disease": [
    {
      vignette: "A 72-year-old man with atrial fibrillation presents with sudden-onset right-sided hemiparesis that is worse in the face and arm than the leg, along with global aphasia. CT angiography reveals an occlusion of the left middle cerebral artery.",
      question: "Which vascular territory supplies the lateral convexity of the hemisphere and is most commonly involved in embolic strokes?",
      options: ["Middle cerebral artery", "Anterior cerebral artery", "Posterior cerebral artery", "Anterior choroidal artery", "Posterior inferior cerebellar artery"],
      correctIndex: 0,
      explanation: "The middle cerebral artery (MCA) is the most commonly affected artery in embolic stroke because it is the direct continuation of the internal carotid artery and receives the majority of blood flow. MCA supplies the lateral cerebral cortex including the primary motor and sensory cortex for the face and upper extremity, Broca and Wernicke areas (dominant hemisphere), and the optic radiation.",
      optionExplanations: ["Correct: The MCA is the most commonly occluded artery in embolic stroke, causing contralateral face/arm weakness, sensory loss, and aphasia if dominant hemisphere.", "Incorrect: The ACA supplies the medial surface of the frontal and parietal lobes; occlusion causes contralateral leg weakness.", "Incorrect: The PCA supplies the occipital lobe and inferior temporal lobe; occlusion causes contralateral homonymous hemianopia.", "Incorrect: The anterior choroidal artery supplies the posterior limb of the internal capsule, optic tract, and hippocampus; it is not the most commonly affected by emboli.", "Incorrect: PICA supplies the lateral medulla and inferior cerebellum; its occlusion causes Wallenberg syndrome, not hemispheric deficits."],
      highYieldPoint: "MCA stroke: contralateral face/arm > leg weakness, hemisensory loss, homonymous hemianopia; aphasia if dominant hemisphere."
    },
    {
      vignette: "A 65-year-old woman is found with right leg weakness and abulia (lack of motivation). She has preserved right arm and facial strength. MRI reveals an infarct along the medial surface of the left frontal lobe.",
      question: "Which artery is most likely occluded?",
      options: ["Right posterior cerebral artery", "Left anterior cerebral artery", "Left middle cerebral artery", "Basilar artery", "Left posterior communicating artery"],
      correctIndex: 1,
      explanation: "The anterior cerebral artery (ACA) supplies the medial surface of the frontal and parietal lobes, including the motor and sensory cortices for the lower extremity. ACA stroke classically presents with contralateral leg weakness (greater than arm or face) and personality/behavioral changes including abulia, as the medial frontal lobe contains the supplementary motor area and cingulate cortex.",
      optionExplanations: ["Incorrect: The right PCA supplies the right occipital lobe; occlusion causes left homonymous hemianopia, not leg weakness.", "Correct: Left ACA occlusion causes right leg weakness and abulia from infarction of the medial frontal lobe.", "Incorrect: The left MCA supplies the lateral hemisphere; occlusion causes face and arm predominant weakness.", "Incorrect: Basilar artery occlusion causes posterior fossa ischemia with brainstem signs (locked-in syndrome, coma).", "Incorrect: The posterior communicating artery is a component of the Circle of Willis; its aneurysm can compress CN III but isolated occlusion rarely causes major infarcts."],
      highYieldPoint: "ACA stroke: contralateral leg > arm/face weakness + personality changes (abulia, disinhibition) from medial frontal infarction."
    },
    {
      vignette: "A 58-year-old man with poorly controlled hypertension suddenly develops vertigo, dysphagia, hoarseness, ipsilateral Horner syndrome, ipsilateral facial sensory loss, and contralateral body pain/temperature loss. He has no limb weakness.",
      question: "Which artery is most likely occluded?",
      options: ["Anterior inferior cerebellar artery", "Anterior spinal artery", "Posterior inferior cerebellar artery", "Superior cerebellar artery", "Basilar artery"],
      correctIndex: 2,
      explanation: "This is the lateral medullary (Wallenberg) syndrome caused by PICA occlusion (or vertebral artery occlusion). The lateral medulla contains the vestibular nuclei (vertigo, nystagmus), nucleus ambiguus (dysphagia, hoarseness), descending sympathetic tract (ipsilateral Horner), spinal trigeminal nucleus (ipsilateral facial pain/temperature loss), and spinothalamic tract (contralateral body pain/temperature loss). Motor pathways are medially located and spared.",
      optionExplanations: ["Incorrect: AICA occlusion causes lateral pontine syndrome with facial paralysis, hearing loss, and ipsilateral cerebellar signs.", "Incorrect: Anterior spinal artery occlusion affects the medial medulla (medial medullary syndrome) causing contralateral hemiparesis and ipsilateral tongue deviation.", "Correct: PICA occlusion causes lateral medullary (Wallenberg) syndrome with the described constellation of findings.", "Incorrect: Superior cerebellar artery occlusion causes ipsilateral cerebellar ataxia, contralateral pain/temperature loss, and an ipsilateral Horner, but without the dysphagia or facial sensory loss pattern seen here.", "Incorrect: Basilar artery occlusion would cause bilateral brainstem signs and potentially locked-in syndrome or coma."],
      highYieldPoint: "Wallenberg (lateral medullary) syndrome: PICA occlusion → vertigo, dysphagia, ipsilateral Horner, ipsilateral facial + contralateral body pain/temp loss; NO motor deficit."
    },
    {
      vignette: "A 77-year-old woman presents with sudden left homonymous hemianopia with macular sparing. She can see objects in her central visual field but cannot see anything in her left peripheral field. MRI shows an infarct in the right occipital lobe.",
      question: "Which artery is most likely occluded?",
      options: ["Right middle cerebral artery", "Right anterior cerebral artery", "Left posterior cerebral artery", "Right posterior cerebral artery", "Right ophthalmic artery"],
      correctIndex: 3,
      explanation: "The posterior cerebral artery (PCA) supplies the occipital lobe (primary visual cortex) and inferior temporal lobe. Right PCA occlusion causes left homonymous hemianopia. Macular sparing occurs because the occipital pole (macular representation) has dual blood supply from both the PCA and MCA via collateral circulation. PCA also supplies the thalamus and midbrain.",
      optionExplanations: ["Incorrect: Right MCA occlusion causes left hemiparesis (face/arm > leg), not isolated hemianopia with macular sparing.", "Incorrect: Right ACA occlusion causes left leg weakness, not visual field deficits.", "Incorrect: Left PCA occlusion would cause a right homonymous hemianopia, not left.", "Correct: Right PCA occlusion causes left homonymous hemianopia with macular sparing from the dual blood supply of the occipital pole.", "Incorrect: Ophthalmic artery occlusion causes monocular vision loss in the ipsilateral eye, not a homonymous field defect."],
      highYieldPoint: "PCA stroke: contralateral homonymous hemianopia with macular sparing; also supplies thalamus (PCA thalamic branches → thalamic pain syndrome)."
    },
    {
      vignette: "A 63-year-old man with a history of hypertension suddenly collapses. He is found to have pinpoint pupils, quadriplegia, and is conscious but can only communicate by blinking and vertical eye movements. MRI shows a ventral pontine infarct.",
      question: "What is this clinical syndrome called?",
      options: ["Locked-in syndrome", "Persistent vegetative state", "Brain death", "Akinetic mutism", "Catatonia"],
      correctIndex: 0,
      explanation: "Locked-in syndrome results from a ventral pontine infarct (basilar artery occlusion) that destroys the corticospinal and corticobulbar tracts bilaterally while sparing the reticular activating system (consciousness) and the dorsal pons (vertical eye movement centers). Patients are fully conscious but can only communicate through vertical eye movements and blinking because CN III pathways are suprapontine.",
      optionExplanations: ["Correct: Locked-in syndrome = ventral pontine lesion preserving consciousness; patients communicate via vertical eye movements/blinking.", "Incorrect: Persistent vegetative state involves wakefulness without awareness; patients have sleep-wake cycles but no purposeful responses.", "Incorrect: Brain death is the irreversible loss of all brain function including brainstem reflexes; this patient is conscious.", "Incorrect: Akinetic mutism involves damage to the bilateral medial frontal lobes or anterior cingulate; patients appear alert but do not move or speak.", "Incorrect: Catatonia is a psychiatric/neurological syndrome with immobility, mutism, and waxy flexibility; it is not caused by a pontine vascular lesion."],
      highYieldPoint: "Locked-in syndrome: basilar artery → ventral pontine infarct; quadriplegia + anarthria with preserved consciousness; communication via vertical eye movements."
    },
    {
      vignette: "A 69-year-old woman with a 30-pack-year smoking history presents with sudden onset of left facial droop, left arm weakness, and neglect of her left side. She cannot recognize that her left arm belongs to her. CT shows a large right MCA territory infarct.",
      question: "Damage to which brain region best accounts for this patient's hemispatial neglect?",
      options: ["Left prefrontal cortex", "Right superior temporal gyrus", "Left angular gyrus", "Right inferior parietal lobule", "Right occipital pole"],
      correctIndex: 3,
      explanation: "Hemispatial neglect (contralateral neglect syndrome) most commonly results from lesions of the right inferior parietal lobule (including the supramarginal and angular gyri) and temporoparietal junction. The right hemisphere is dominant for spatial attention, so right-sided lesions cause dramatic left neglect. Patients may deny ownership of their left limbs (asomatognosia) and fail to attend to the left side of space.",
      optionExplanations: ["Incorrect: Left prefrontal cortex damage may cause executive dysfunction but does not typically produce hemispatial neglect.", "Incorrect: The right superior temporal gyrus lesion can contribute to neglect, but the inferior parietal lobule is the most classically tested location.", "Incorrect: Left angular gyrus damage in the dominant hemisphere causes Gerstmann syndrome (agraphia, acalculia, finger agnosia, left-right confusion).", "Correct: The right inferior parietal lobule is the classic location whose damage produces left hemispatial neglect.", "Incorrect: Right occipital pole damage causes a left visual field defect (hemianopia) but not the attentional and awareness deficits seen in neglect."],
      highYieldPoint: "Hemispatial neglect: right inferior parietal lobe lesion → left-sided neglect; right hemisphere dominates spatial attention."
    },
    {
      vignette: "A 55-year-old man with diabetes presents with sudden-onset right face and arm numbness without weakness. MRI shows a small lacunar infarct in the left ventral posteromedial and ventral posterolateral nuclei of the thalamus.",
      question: "What is the name of this lacunar stroke syndrome?",
      options: ["Pure motor hemiparesis", "Ataxic hemiparesis", "Dysarthria-clumsy hand syndrome", "Pure sensory stroke", "Mixed sensorimotor stroke"],
      correctIndex: 3,
      explanation: "A pure sensory stroke is a lacunar syndrome caused by infarction of the ventral posterolateral (VPL) and/or ventral posteromedial (VPM) nuclei of the thalamus. The VPL nucleus relays somatosensory information from the contralateral body, while VPM relays facial sensation. The patient experiences contralateral numbness/paresthesias without motor deficit. Later, thalamic pain syndrome (Déjerine-Roussy) may develop.",
      optionExplanations: ["Incorrect: Pure motor hemiparesis results from a lacunar infarct in the posterior limb of the internal capsule or basis pontis.", "Incorrect: Ataxic hemiparesis involves ipsilateral weakness and cerebellar-type ataxia from pontine or internal capsule lacunar infarcts.", "Incorrect: Dysarthria-clumsy hand syndrome is caused by lacunar infarcts in the pons or internal capsule.", "Correct: Pure sensory stroke results from thalamic (VPL/VPM) lacunar infarction, causing contralateral sensory loss without motor deficit.", "Incorrect: Mixed sensorimotor stroke involves both motor and sensory deficits, typically from a larger thalamocapsular infarct."],
      highYieldPoint: "Classic lacunar syndromes: pure motor (internal capsule), pure sensory (thalamus), ataxic hemiparesis, dysarthria-clumsy hand."
    },
    {
      vignette: "A 70-year-old man presents to the emergency department 2 hours after the sudden onset of left-sided weakness and aphasia. His NIHSS score is 14. CT head shows no hemorrhage. CT angiography reveals a left MCA M1 segment occlusion.",
      question: "What is the most appropriate next step in management?",
      options: ["Antiplatelet therapy with aspirin 325 mg", "Oral warfarin initiation", "Observation and repeat CT in 24 hours", "Emergent craniotomy for decompression", "IV alteplase (tPA)"],
      correctIndex: 4,
      explanation: "IV alteplase (tPA) is the standard of care for acute ischemic stroke within 4.5 hours of symptom onset in eligible patients after hemorrhage has been excluded by non-contrast CT. This patient presents at 2 hours with a significant neurological deficit (NIHSS 14) and no contraindications. For large vessel occlusions like MCA M1, endovascular thrombectomy is also indicated (up to 24 hours in select patients), often in addition to IV tPA.",
      optionExplanations: ["Incorrect: Aspirin alone is insufficient for an acute large vessel occlusion with significant deficits within the tPA window.", "Incorrect: Warfarin is used for secondary prevention in cardioembolic stroke (e.g., atrial fibrillation) and is not an acute treatment.", "Incorrect: Observation delays treatment during the critical window when ischemic penumbra can be salvaged.", "Incorrect: Emergent craniotomy for decompressive hemicraniectomy is considered for malignant MCA infarction with edema, not as initial therapy.", "Correct: IV alteplase within 4.5 hours of ischemic stroke onset is the standard acute treatment after excluding hemorrhage."],
      highYieldPoint: "Acute ischemic stroke: IV tPA within 4.5 hours (exclude hemorrhage on CT); mechanical thrombectomy for large vessel occlusion up to 24 hours in select patients."
    },
    {
      vignette: "A 45-year-old woman presents with the worst headache of her life that started suddenly while lifting weights. She has nuchal rigidity and photophobia. Non-contrast CT head is negative. Lumbar puncture shows xanthochromia.",
      question: "What is the most common cause of non-traumatic subarachnoid hemorrhage?",
      options: ["Arteriovenous malformation", "Hypertensive hemorrhage", "Ruptured saccular (berry) aneurysm", "Amyloid angiopathy", "Cavernous malformation"],
      correctIndex: 2,
      explanation: "Ruptured saccular (berry) aneurysms account for approximately 85% of non-traumatic subarachnoid hemorrhage (SAH). Berry aneurysms most commonly occur at bifurcation points in the Circle of Willis, particularly the anterior communicating artery. Risk factors include hypertension, smoking, and connective tissue disorders (autosomal dominant polycystic kidney disease, Ehlers-Danlos type IV). CT sensitivity decreases over time; xanthochromia on LP confirms SAH when CT is negative.",
      optionExplanations: ["Incorrect: AVMs account for ~10% of non-traumatic SAH and are more common in younger patients with intraparenchymal hemorrhage.", "Incorrect: Hypertensive hemorrhage typically causes intraparenchymal hemorrhage (basal ganglia, thalamus, pons, cerebellum), not SAH.", "Correct: Ruptured berry aneurysms cause ~85% of non-traumatic SAH; most common location is the anterior communicating artery.", "Incorrect: Amyloid angiopathy causes lobar intraparenchymal hemorrhage in the elderly, not SAH.", "Incorrect: Cavernous malformations typically cause seizures or small intraparenchymal hemorrhages, not SAH."],
      highYieldPoint: "SAH: 'thunderclap headache'; 85% from berry aneurysm (most common at AComm); CT sensitivity ~95% day 1; LP shows xanthochromia."
    },
    {
      vignette: "A 62-year-old man with a 20-year history of uncontrolled hypertension presents with sudden onset of left hemiparesis, leftward eye deviation, and progressively declining consciousness. CT shows a 4-cm hyperdense lesion in the right putamen with extension into the lateral ventricle.",
      question: "What is the most common location for hypertensive intracerebral hemorrhage?",
      options: ["Caudate nucleus", "Basal ganglia (putamen)", "Pons", "Lobar (cerebral cortex)", "Cerebellum"],
      correctIndex: 1,
      explanation: "The basal ganglia (specifically the putamen) is the most common location for hypertensive intracerebral hemorrhage, accounting for ~60% of cases. Hemorrhage results from rupture of Charcot-Bouchard microaneurysms in the lenticulostriate arteries (branches of the MCA). Other common sites include the thalamus, pons, and cerebellum. Eyes deviate toward the lesion in hemispheric hemorrhages ('eyes look toward the lesion').",
      optionExplanations: ["Incorrect: The caudate nucleus can bleed but is not the most common site of hypertensive hemorrhage.", "Correct: The putamen (basal ganglia) is the most common site of hypertensive hemorrhage, supplied by lenticulostriate arteries.", "Incorrect: Pontine hemorrhage is the third most common site; it classically presents with pinpoint pupils, quadriplegia, and coma.", "Incorrect: Lobar hemorrhage is more commonly associated with cerebral amyloid angiopathy in elderly patients, not hypertension.", "Incorrect: Cerebellar hemorrhage is the fourth most common site; it presents with occipital headache, ataxia, and vomiting."],
      highYieldPoint: "Hypertensive hemorrhage sites (frequency): putamen > thalamus > pons > cerebellum; lenticulostriate artery Charcot-Bouchard microaneurysms."
    },
    {
      vignette: "A 50-year-old man presents 3 weeks after head trauma with progressive headache, confusion, and right hemiparesis. CT head reveals a crescent-shaped hypodense collection over the left cerebral convexity. He takes aspirin daily.",
      question: "What type of intracranial hemorrhage is most likely, and which vessels are the source?",
      options: ["Epidural hematoma from middle meningeal artery rupture", "Intraventricular hemorrhage from choroid plexus", "Intraparenchymal hemorrhage from lenticulostriate arteries", "Subarachnoid hemorrhage from berry aneurysm", "Subdural hematoma from bridging vein rupture"],
      correctIndex: 4,
      explanation: "A chronic subdural hematoma presents days to weeks after trauma (often minor), particularly in elderly patients or those on anticoagulants/antiplatelets. It results from tearing of bridging veins that traverse the subdural space from the cortical surface to the dural sinuses. CT shows a crescent-shaped hypodense (chronic) or mixed-density collection over the cerebral convexity that crosses suture lines but not the midline falx.",
      optionExplanations: ["Incorrect: Epidural hematomas are biconvex/lenticular on CT, result from middle meningeal artery rupture (usually with temporal bone fracture), and present acutely with a 'lucid interval.'", "Incorrect: Intraventricular hemorrhage would show blood within the ventricular system, not a convexity collection.", "Incorrect: Intraparenchymal hemorrhage from lenticulostriate arteries would appear as a hyperdense lesion within the brain parenchyma.", "Incorrect: Subarachnoid hemorrhage presents acutely with thunderclap headache and blood in the basal cisterns on CT.", "Correct: Subdural hematomas are crescent-shaped from bridging vein tears; chronic subdurals are hypodense and present with delayed symptoms."],
      highYieldPoint: "Subdural hematoma: bridging veins, crescent-shaped, crosses suture lines; epidural hematoma: middle meningeal artery, biconvex/lenticular, does NOT cross suture lines."
    },
    {
      vignette: "A 30-year-old woman with a history of migraines presents with sudden onset of right arm weakness and expressive aphasia. She had started combined oral contraceptive pills two months ago. CT shows no hemorrhage. MRI reveals an acute left MCA territory infarct. Conventional angiography is unremarkable.",
      question: "Which condition should be investigated as a potential cause of stroke in this young woman?",
      options: ["Temporal arteritis", "Fibromuscular dysplasia of the renal arteries", "Moyamoya disease", "Takayasu arteritis", "Patent foramen ovale with paradoxical embolism"],
      correctIndex: 4,
      explanation: "In young patients with cryptogenic ischemic stroke (no identified vascular cause on angiography), a patent foramen ovale (PFO) with paradoxical embolism should be investigated. PFO is present in ~25% of the general population but found in up to 50% of young stroke patients. A venous thrombus crosses from the right atrium to the left atrium through the PFO during transient increases in right atrial pressure (Valsalva). Combined oral contraceptives increase the risk of venous thromboembolism.",
      optionExplanations: ["Incorrect: Temporal (giant cell) arteritis affects patients >50 years old and involves large/medium arteries, particularly the temporal artery.", "Incorrect: Fibromuscular dysplasia of the renal arteries causes renovascular hypertension, not cerebrovascular events (though cervicocephalic FMD can cause stroke).", "Incorrect: Moyamoya disease shows characteristic 'puff of smoke' collateral vessels on angiography; this patient's angiogram was normal.", "Incorrect: Takayasu arteritis affects the aorta and its major branches in young women, typically presenting with limb claudication and blood pressure discrepancies.", "Correct: PFO with paradoxical embolism is a major consideration in young patients with cryptogenic stroke, especially with risk factors for venous thrombosis such as OCP use."],
      highYieldPoint: "Young stroke workup: PFO (bubble echo), hypercoagulable states, dissection, vasculitis; PFO present in ~25% of population, ~50% of young cryptogenic strokes."
    },
    {
      vignette: "A 68-year-old man develops right facial droop, right arm/leg weakness, and difficulty speaking 2 hours ago. His CT is negative for hemorrhage. He receives IV tPA at 3 hours from onset. Forty-eight hours later, he undergoes carotid duplex ultrasonography which reveals 80% stenosis of the left internal carotid artery.",
      question: "What is the recommended secondary prevention strategy for this patient's carotid stenosis?",
      options: ["Medical therapy only with dual antiplatelet agents", "Carotid endarterectomy", "Lifelong intravenous heparin", "Observation with repeat ultrasound in 5 years", "External carotid artery bypass"],
      correctIndex: 1,
      explanation: "Carotid endarterectomy (CEA) is indicated for symptomatic carotid stenosis of 70-99% (NASCET criteria) to reduce the risk of recurrent stroke. This patient had a symptomatic stroke with an ipsilateral 80% ICA stenosis. CEA should ideally be performed within 2 weeks of the event. For asymptomatic stenosis ≥60-70%, CEA may be considered if surgical risk is low.",
      optionExplanations: ["Incorrect: Medical therapy alone is inferior to CEA for symptomatic high-grade (≥70%) carotid stenosis.", "Correct: CEA is the standard intervention for symptomatic ICA stenosis ≥70% to reduce recurrent stroke risk.", "Incorrect: Lifelong IV heparin is not a viable long-term management strategy and does not address the underlying stenosis.", "Incorrect: Observation without intervention exposes the patient to high recurrent stroke risk with 80% symptomatic stenosis.", "Incorrect: External carotid artery bypass is not the standard surgical approach; CEA addresses the ICA stenosis directly."],
      highYieldPoint: "Carotid endarterectomy: indicated for symptomatic ICA stenosis ≥70%; perform within 2 weeks of event for maximum benefit."
    },
    {
      vignette: "A 56-year-old woman with hypertension and diabetes presents with sudden onset of right ataxia, nausea, vomiting, and occipital headache. She rapidly becomes obtunded. CT shows a 3-cm hemorrhage in the right cerebellar hemisphere with compression of the fourth ventricle and early hydrocephalus.",
      question: "What is the most appropriate immediate intervention?",
      options: ["IV tPA administration", "Observation in the ICU with serial CT scans", "Suboccipital craniectomy for posterior fossa decompression", "Lumbar puncture to relieve hydrocephalus", "Intravenous nimodipine"],
      correctIndex: 2,
      explanation: "Cerebellar hemorrhage >3 cm or causing brainstem compression/hydrocephalus is a neurosurgical emergency requiring posterior fossa decompression (suboccipital craniectomy) and hematoma evacuation. The posterior fossa is a small, rigid compartment, and expanding hematomas rapidly compress the brainstem and obstruct CSF flow through the fourth ventricle. Without intervention, tonsillar herniation through the foramen magnum is rapidly fatal.",
      optionExplanations: ["Incorrect: tPA is contraindicated in hemorrhagic stroke; it would worsen bleeding.", "Incorrect: A 3-cm cerebellar hemorrhage with brainstem compression and declining consciousness requires urgent surgical intervention, not observation.", "Correct: Suboccipital craniectomy with hematoma evacuation is the emergency intervention for large cerebellar hemorrhages with brainstem compression.", "Incorrect: Lumbar puncture is contraindicated with obstructive hydrocephalus from a posterior fossa mass due to the risk of upward or tonsillar herniation.", "Incorrect: Nimodipine is used to prevent vasospasm after subarachnoid hemorrhage, not for cerebellar hemorrhage management."],
      highYieldPoint: "Cerebellar hemorrhage >3 cm with brainstem compression → emergency posterior fossa decompression; LP contraindicated in obstructive hydrocephalus."
    },
    {
      vignette: "A 60-year-old woman with atrial fibrillation develops a right MCA stroke. After stabilization, her cardiologist discusses long-term stroke prevention. Her CHA₂DS₂-VASc score is 5.",
      question: "Which medication is most appropriate for long-term secondary stroke prevention in this patient?",
      options: ["Warfarin or direct oral anticoagulant (DOAC)", "Clopidogrel alone", "Aspirin alone", "Dual antiplatelet therapy with aspirin and clopidogrel indefinitely", "Ticagrelor monotherapy"],
      correctIndex: 0,
      explanation: "Atrial fibrillation is a major source of cardioembolic stroke. Long-term anticoagulation with warfarin (INR 2-3) or a DOAC (e.g., apixaban, rivarelbran, dabigatran, edoxaban) is the standard for secondary stroke prevention in atrial fibrillation. Her high CHA₂DS₂-VASc score (5) confirms the indication for anticoagulation. Antiplatelets alone are inferior to anticoagulation for cardioembolic stroke prevention.",
      optionExplanations: ["Correct: Anticoagulation (warfarin or DOAC) is the standard of care for stroke prevention in atrial fibrillation.", "Incorrect: Clopidogrel alone is used for atherosclerotic stroke prevention, not cardioembolic stroke from atrial fibrillation.", "Incorrect: Aspirin alone is insufficient for stroke prevention in atrial fibrillation with a high CHA₂DS₂-VASc score.", "Incorrect: Indefinite dual antiplatelet therapy increases bleeding risk without adequate benefit over anticoagulation in atrial fibrillation.", "Incorrect: Ticagrelor is an antiplatelet agent not indicated for anticoagulation in atrial fibrillation."],
      highYieldPoint: "Atrial fibrillation stroke prevention: anticoagulation (DOAC preferred over warfarin in non-valvular AF); CHA₂DS₂-VASc guides therapy."
    }
  ],

  "Neurodegenerative disease": [
    {
      vignette: "A 73-year-old retired professor is brought by his wife for progressively worsening memory over the past 2 years. He frequently gets lost in his own neighborhood and recently forgot his granddaughter's name. He is otherwise physically healthy. Mini-Mental State Examination score is 18/30. MRI shows bilateral hippocampal atrophy.",
      question: "Which neurotransmitter deficiency is most directly targeted by first-line pharmacotherapy for this patient's condition?",
      options: ["Acetylcholine", "Dopamine", "Serotonin", "Norepinephrine", "GABA"],
      correctIndex: 0,
      explanation: "Alzheimer disease (AD) is characterized by a deficit in acetylcholine due to degeneration of cholinergic neurons in the nucleus basalis of Meynert. First-line treatment includes acetylcholinesterase inhibitors (donepezil, rivastigmine, galantamine) for mild-moderate AD, and memantine (NMDA receptor antagonist) is added for moderate-severe disease. Pathologically, AD shows amyloid-beta plaques (extracellular) and neurofibrillary tangles (intracellular hyperphosphorylated tau protein).",
      optionExplanations: ["Correct: Cholinergic deficiency from degeneration of the nucleus basalis of Meynert is the target of acetylcholinesterase inhibitors in Alzheimer disease.", "Incorrect: Dopamine deficiency is the hallmark of Parkinson disease, not Alzheimer disease.", "Incorrect: Serotonin deficiency is associated with depression; SSRIs may be used for behavioral symptoms in AD but do not address the core disease.", "Incorrect: Norepinephrine deficiency contributes to attention deficits but is not the primary neurotransmitter target in AD treatment.", "Incorrect: GABA is the primary inhibitory neurotransmitter; its modulation is not the basis for AD pharmacotherapy."],
      highYieldPoint: "Alzheimer disease: ↓ ACh (nucleus basalis of Meynert); treat with AChE inhibitors (donepezil); pathology = amyloid plaques + tau tangles."
    },
    {
      vignette: "A 65-year-old man presents with a 1-year history of resting tremor in his right hand, difficulty initiating movements, and shuffling gait. His wife notes he has become more stooped and his facial expression appears flat. Examination reveals cogwheel rigidity and bradykinesia.",
      question: "Loss of dopaminergic neurons in which brain structure is responsible for this patient's motor symptoms?",
      options: ["Caudate nucleus", "Subthalamic nucleus", "Globus pallidus interna", "Substantia nigra pars compacta", "Ventral tegmental area"],
      correctIndex: 3,
      explanation: "Parkinson disease results from degeneration of dopaminergic neurons in the substantia nigra pars compacta (SNpc), which project to the striatum (caudate and putamen) via the nigrostriatal pathway. Loss of dopamine in the striatum leads to the cardinal features: resting tremor, rigidity, akinesia/bradykinesia, and postural instability (TRAP). Lewy bodies (alpha-synuclein inclusions) are the pathological hallmark.",
      optionExplanations: ["Incorrect: The caudate nucleus receives dopaminergic input but is not the site of neuronal degeneration in Parkinson disease.", "Incorrect: The subthalamic nucleus is part of the indirect basal ganglia pathway; its lesion (or deep brain stimulation) can improve parkinsonian symptoms but it is not the site of degeneration.", "Incorrect: The globus pallidus interna is the output nucleus of the basal ganglia; it is not the site of primary degeneration in Parkinson disease.", "Correct: Substantia nigra pars compacta degeneration causes dopamine deficiency in the striatum, producing the cardinal motor features of Parkinson disease.", "Incorrect: The ventral tegmental area projects to the limbic system (mesolimbic) and prefrontal cortex (mesocortical); its degeneration is not the primary cause of parkinsonian motor symptoms."],
      highYieldPoint: "Parkinson disease: substantia nigra pars compacta → ↓ dopamine in striatum; TRAP mnemonic; Lewy bodies = α-synuclein."
    },
    {
      vignette: "A 42-year-old man presents with involuntary writhing movements of his limbs, irritability, and personality changes. His father died at age 50 from a neurodegenerative condition. Genetic testing reveals 45 CAG trinucleotide repeats in the huntingtin gene on chromosome 4.",
      question: "Which brain structure shows the most prominent atrophy in this patient's condition?",
      options: ["Hippocampus", "Cerebellum", "Amygdala", "Substantia nigra", "Caudate nucleus"],
      correctIndex: 4,
      explanation: "Huntington disease (HD) is an autosomal dominant disorder caused by CAG trinucleotide repeat expansion (>36 repeats) in the huntingtin gene on chromosome 4p. The caudate nucleus undergoes severe atrophy, leading to characteristic 'boxcar ventricles' (enlarged lateral ventricles due to caudate head atrophy). HD affects GABAergic and cholinergic neurons in the striatum. The disease demonstrates anticipation (earlier onset and worse severity in successive generations due to repeat expansion).",
      optionExplanations: ["Incorrect: Hippocampal atrophy is the hallmark of Alzheimer disease, not Huntington disease.", "Incorrect: Cerebellar atrophy occurs in spinocerebellar ataxias and alcoholic cerebellar degeneration.", "Incorrect: Amygdala involvement may occur later in HD but is not the primary site of early degeneration.", "Incorrect: Substantia nigra degeneration occurs in Parkinson disease.", "Correct: Caudate nucleus atrophy is the pathological hallmark of Huntington disease, producing 'boxcar ventricles' on imaging."],
      highYieldPoint: "Huntington disease: CAG repeats (chr 4), caudate atrophy, chorea, dementia, psychiatric symptoms; autosomal dominant with anticipation."
    },
    {
      vignette: "A 58-year-old man presents with progressive weakness in his right hand followed by difficulty swallowing and speaking over the past year. Examination reveals fasciculations and atrophy in the intrinsic hand muscles, hyperreflexia at the biceps and knees, and bilateral Babinski signs. Sensation is intact throughout.",
      question: "Which combination of neuronal degeneration defines this patient's disease?",
      options: ["Upper motor neurons only", "Lower motor neurons only", "Both upper and lower motor neurons", "Cerebellar Purkinje cells and lower motor neurons", "Dorsal root ganglia and corticospinal tracts"],
      correctIndex: 2,
      explanation: "Amyotrophic lateral sclerosis (ALS) involves degeneration of both upper motor neurons (corticospinal tract — causing hyperreflexia, spasticity, Babinski signs) and lower motor neurons (anterior horn cells — causing weakness, atrophy, fasciculations). Bulbar involvement causes dysphagia and dysarthria. Crucially, ALS spares sensory neurons, eye movements (cranial nerves III, IV, VI), and bowel/bladder function. Most cases are sporadic; ~10% are familial, with SOD1 mutations being the most well-known.",
      optionExplanations: ["Incorrect: Pure UMN degeneration describes primary lateral sclerosis, not ALS.", "Incorrect: Pure LMN degeneration describes spinal muscular atrophy or progressive muscular atrophy.", "Correct: ALS is defined by combined UMN and LMN degeneration, producing the mixed findings of hyperreflexia with fasciculations and atrophy.", "Incorrect: Cerebellar Purkinje cell and LMN involvement is not a recognized combination in ALS.", "Incorrect: Dorsal root ganglia involvement would cause sensory deficits, which are characteristically absent in ALS."],
      highYieldPoint: "ALS: UMN + LMN signs; spares sensation, eye movements, and bowel/bladder; SOD1 mutation in familial cases; riluzole modestly prolongs survival."
    },
    {
      vignette: "A 28-year-old woman presents with 3 days of blurred vision in her right eye with pain on eye movement. Two years ago, she had an episode of leg numbness that resolved spontaneously. MRI of the brain shows multiple periventricular white matter lesions perpendicular to the lateral ventricles. Oligoclonal bands are present in the CSF.",
      question: "What is the pathological hallmark of this patient's condition?",
      options: ["Lewy body inclusions in the cortex", "Amyloid plaques and neurofibrillary tangles", "Periventricular demyelinating plaques with preservation of axons", "Spongiform degeneration with prion accumulation", "Loss of anterior horn cells"],
      correctIndex: 2,
      explanation: "Multiple sclerosis (MS) is an autoimmune demyelinating disease of the central nervous system. The pathological hallmark is periventricular demyelinating plaques (areas of myelin destruction with relative axonal preservation, at least early in the disease). Dawson fingers are the characteristic periventricular lesions oriented perpendicular to the ventricles on MRI. Diagnosis requires dissemination in time and space. Optic neuritis is a common presenting feature.",
      optionExplanations: ["Incorrect: Lewy body inclusions containing alpha-synuclein are found in Parkinson disease and dementia with Lewy bodies.", "Incorrect: Amyloid plaques and neurofibrillary tangles are the pathological hallmarks of Alzheimer disease.", "Correct: MS is characterized by demyelinating plaques in the periventricular white matter with preserved axons early in the disease course.", "Incorrect: Spongiform degeneration with prion accumulation occurs in Creutzfeldt-Jakob disease.", "Incorrect: Anterior horn cell loss occurs in ALS and poliomyelitis, not in MS."],
      highYieldPoint: "MS: periventricular demyelinating plaques (Dawson fingers); relapsing-remitting most common; optic neuritis, INO, Lhermitte sign; CSF oligoclonal bands."
    },
    {
      vignette: "A 35-year-old man with relapsing-remitting multiple sclerosis presents with bilateral horizontal diplopia. On examination, when he attempts to look to the left, his right eye fails to adduct past midline, while his left eye shows nystagmus in abduction. Convergence is intact.",
      question: "Which structure is most likely affected to produce this finding?",
      options: ["Right oculomotor nerve (CN III)", "Right abducens nerve (CN VI)", "Paramedian pontine reticular formation", "Left medial longitudinal fasciculus", "Right medial longitudinal fasciculus"],
      correctIndex: 4,
      explanation: "This is internuclear ophthalmoplegia (INO), which results from a lesion in the medial longitudinal fasciculus (MLF). The MLF connects the contralateral CN VI nucleus to the ipsilateral CN III nucleus to coordinate conjugate horizontal gaze. A right MLF lesion prevents the right CN III from receiving the signal to adduct the right eye during leftward gaze. The abducting left eye shows nystagmus. Preserved convergence confirms the CN III nucleus and nerve are intact. Bilateral INO in a young patient is highly suggestive of MS.",
      optionExplanations: ["Incorrect: CN III palsy would cause ptosis, mydriasis, and 'down and out' eye position, not isolated failure of adduction during conjugate gaze with preserved convergence.", "Incorrect: CN VI palsy would cause failure of abduction of the ipsilateral eye, not adduction failure.", "Incorrect: PPRF lesion would cause ipsilateral conjugate gaze palsy (both eyes cannot look toward the side of the lesion).", "Incorrect: A left MLF lesion would cause left INO — impaired adduction of the left eye on attempted right gaze.", "Correct: Right MLF lesion causes right INO — impaired adduction of the right eye on attempted left gaze with left eye abduction nystagmus."],
      highYieldPoint: "INO: MLF lesion → impaired adduction of the ipsilateral eye on contralateral gaze + contralateral abduction nystagmus; bilateral INO in young adult = MS."
    },
    {
      vignette: "A 70-year-old man with Parkinson disease is started on carbidopa-levodopa. After 6 months, he experiences dramatic improvement in his symptoms but develops involuntary, purposeless, dance-like movements of his limbs and trunk 1 hour after each dose.",
      question: "What is the most likely explanation for these involuntary movements?",
      options: ["Levodopa-induced dyskinesia from dopamine receptor hypersensitivity", "Serotonin syndrome from drug interaction", "Neuroleptic malignant syndrome", "Tardive dyskinesia from dopamine receptor blockade", "Acute dystonic reaction"],
      correctIndex: 0,
      explanation: "Levodopa-induced dyskinesia (LID) is a common complication of long-term levodopa therapy, occurring in up to 50% of patients within 5 years. It manifests as involuntary choreiform or dystonic movements, typically at peak plasma levodopa levels (peak-dose dyskinesia). The mechanism involves pulsatile stimulation of denervated dopamine receptors leading to receptor hypersensitivity and downstream signaling changes. Carbidopa prevents peripheral conversion of levodopa to dopamine but does not prevent central side effects.",
      optionExplanations: ["Correct: Levodopa-induced dyskinesia results from chronic pulsatile dopaminergic stimulation causing receptor hypersensitivity and abnormal signaling.", "Incorrect: Serotonin syndrome causes autonomic instability, agitation, clonus, and hyperthermia; it is not related to levodopa.", "Incorrect: Neuroleptic malignant syndrome involves rigidity, hyperthermia, and autonomic instability from dopamine antagonists, not agonists.", "Incorrect: Tardive dyskinesia results from chronic dopamine receptor blockade (antipsychotics), not from dopaminergic stimulation.", "Incorrect: Acute dystonic reactions are associated with dopamine antagonists (metoclopramide, antipsychotics), not levodopa."],
      highYieldPoint: "Levodopa complications: wearing-off, on-off phenomenon, peak-dose dyskinesia; carbidopa inhibits peripheral DOPA decarboxylase but does not prevent central side effects."
    },
    {
      vignette: "A 68-year-old woman presents with progressive dementia, vivid visual hallucinations of children playing in her house, fluctuating cognition, and parkinsonian features including rigidity and bradykinesia. Her family notes she acts out her dreams violently during sleep.",
      question: "What pathological finding is most characteristic of this patient's condition?",
      options: ["Neurofibrillary tangles in the hippocampus", "Pick bodies (tau-positive inclusions) in frontal and temporal lobes", "Prion protein deposits in the cerebral cortex", "Alpha-synuclein–containing Lewy bodies in the cortex", "Caudate nucleus atrophy with neuronal loss"],
      correctIndex: 3,
      explanation: "Dementia with Lewy bodies (DLB) is characterized by cortical Lewy bodies, which are intracytoplasmic inclusions composed of alpha-synuclein. Core features include fluctuating cognition, visual hallucinations (typically well-formed and detailed), and parkinsonism. REM sleep behavior disorder (acting out dreams) is a supportive feature. DLB patients are exquisitely sensitive to antipsychotics, which can precipitate life-threatening rigidity.",
      optionExplanations: ["Incorrect: Neurofibrillary tangles are the hallmark of Alzheimer disease and some tauopathies.", "Incorrect: Pick bodies are tau-positive inclusions found in Pick disease (frontotemporal dementia), which presents with personality and behavioral changes before memory loss.", "Incorrect: Prion protein deposits are found in Creutzfeldt-Jakob disease, which presents with rapid dementia, myoclonus, and periodic sharp waves on EEG.", "Correct: Cortical alpha-synuclein Lewy bodies are the pathological hallmark of dementia with Lewy bodies.", "Incorrect: Caudate atrophy is the hallmark of Huntington disease."],
      highYieldPoint: "Dementia with Lewy bodies: visual hallucinations + fluctuating cognition + parkinsonism + REM sleep behavior disorder; avoid antipsychotics (severe sensitivity)."
    },
    {
      vignette: "A 72-year-old man presents with progressive difficulty buttoning his shirt over 6 months. His wife reports his personality has changed — he makes inappropriate jokes and has developed a compulsive sweet tooth. Examination reveals primitive reflexes (grasp, snout). Memory testing is relatively preserved.",
      question: "Which brain region is most likely undergoing degeneration?",
      options: ["Occipital lobes bilaterally", "Bilateral hippocampi", "Frontotemporal cortex", "Cerebellar vermis", "Thalamus bilaterally"],
      correctIndex: 2,
      explanation: "Frontotemporal dementia (FTD) preferentially degenerates the frontal and temporal lobes, leading to prominent behavioral and personality changes (disinhibition, apathy, compulsive behaviors, hyperorality) that precede memory loss. This distinguishes FTD from Alzheimer disease, where memory impairment is the earliest feature. Subtypes include behavioral variant FTD, primary progressive aphasia (nonfluent and semantic variants). Some cases are associated with tau or TDP-43 pathology.",
      optionExplanations: ["Incorrect: Occipital lobe degeneration would cause visual processing deficits (posterior cortical atrophy variant of AD), not behavioral changes.", "Incorrect: Bilateral hippocampal degeneration is characteristic of Alzheimer disease, which presents with early memory loss.", "Correct: Frontotemporal cortex degeneration produces the behavioral variant of FTD with personality changes, disinhibition, and preserved memory early on.", "Incorrect: Cerebellar vermis degeneration causes truncal ataxia and gait instability, not behavioral changes.", "Incorrect: Bilateral thalamic degeneration can cause fatal familial insomnia or thalamic dementia but does not typically present with prominent behavioral disinhibition."],
      highYieldPoint: "FTD: personality/behavior changes before memory loss; frontal atrophy > temporal; Pick disease = tau-positive Pick bodies; distinguish from Alzheimer by early behavioral predominance."
    },
    {
      vignette: "A 62-year-old woman with a 3-year history of progressive cognitive decline develops rapid worsening over 2 weeks with myoclonic jerks. EEG shows periodic sharp wave complexes. MRI DWI reveals cortical ribboning in the bilateral parietal and occipital cortices. She dies 4 months later.",
      question: "Which pathological protein is responsible for this patient's disease?",
      options: ["Beta-amyloid peptide", "Alpha-synuclein", "Hyperphosphorylated tau", "Prion protein (PrPSc)", "TDP-43"],
      correctIndex: 3,
      explanation: "Creutzfeldt-Jakob disease (CJD) is a rapidly progressive prion disease caused by misfolded prion protein (PrPSc), which induces conformational change in normal cellular prion protein (PrPC). CJD presents with rapid dementia, myoclonus, and startle responses. EEG shows characteristic periodic sharp wave complexes. MRI DWI reveals cortical ribboning and basal ganglia signal abnormality. Pathology shows spongiform degeneration. Death typically occurs within 1 year of symptom onset.",
      optionExplanations: ["Incorrect: Beta-amyloid is the extracellular plaque protein in Alzheimer disease.", "Incorrect: Alpha-synuclein forms Lewy bodies in Parkinson disease and dementia with Lewy bodies.", "Incorrect: Hyperphosphorylated tau forms neurofibrillary tangles in Alzheimer disease and some frontotemporal dementias.", "Correct: PrPSc (scrapie prion protein) causes CJD through templated misfolding of normal prion protein, leading to spongiform degeneration.", "Incorrect: TDP-43 is associated with ALS and some forms of frontotemporal dementia."],
      highYieldPoint: "CJD: rapidly progressive dementia + myoclonus + periodic sharp waves on EEG; PrPSc causes spongiform degeneration; death within 1 year."
    },
    {
      vignette: "A 30-year-old woman presents with ascending weakness starting in her feet 10 days after a Campylobacter jejuni gastroenteritis. Weakness progresses to involve her thighs and hands over 3 days. Deep tendon reflexes are absent. CSF shows elevated protein with a normal cell count.",
      question: "What is the underlying pathophysiology of this patient's condition?",
      options: ["Anterior horn cell viral infection", "Autoimmune demyelination of peripheral nerves", "Central nervous system demyelination", "Neuromuscular junction antibody blockade", "Skeletal muscle autoimmune inflammation"],
      correctIndex: 1,
      explanation: "Guillain-Barré syndrome (GBS) is an acute inflammatory demyelinating polyradiculoneuropathy (AIDP) caused by autoimmune attack on peripheral nerve myelin due to molecular mimicry. Campylobacter jejuni is the most common preceding infection. GBS presents with ascending symmetric weakness, areflexia, and albuminocytologic dissociation in CSF (elevated protein, normal cell count). The condition can progress to respiratory failure requiring ventilation. Treatment includes IVIG or plasmapheresis.",
      optionExplanations: ["Incorrect: Anterior horn cell viral infection describes poliomyelitis, which causes asymmetric LMN weakness.", "Correct: GBS involves autoimmune demyelination of peripheral nerves (molecular mimicry), producing ascending weakness and areflexia.", "Incorrect: CNS demyelination occurs in multiple sclerosis, not GBS; GBS affects the peripheral nervous system.", "Incorrect: Neuromuscular junction blockade occurs in myasthenia gravis (anti-AChR antibodies) or Lambert-Eaton syndrome.", "Incorrect: Skeletal muscle autoimmune inflammation occurs in polymyositis/dermatomyositis, presenting with proximal weakness and elevated CK."],
      highYieldPoint: "GBS: ascending paralysis + areflexia + albuminocytologic dissociation; Campylobacter jejuni #1 trigger; treat with IVIG or plasmapheresis."
    },
    {
      vignette: "A 25-year-old woman with multiple sclerosis is started on natalizumab after failing first-line therapy. Six months later, she develops progressive multifocal cognitive and motor deficits. MRI shows a large non-enhancing white matter lesion in the right frontal lobe that does not follow a vascular distribution.",
      question: "What is the most likely complication, and what is the causative organism?",
      options: ["JC virus reactivation causing progressive multifocal leukoencephalopathy", "Toxoplasma gondii reactivation in an immunocompromised host", "Herpes simplex virus encephalitis of the temporal lobe", "CNS lymphoma from EBV reactivation", "Cryptococcus neoformans meningoencephalitis"],
      correctIndex: 0,
      explanation: "Natalizumab (anti-α4-integrin) prevents lymphocyte trafficking into the CNS, increasing the risk of JC virus reactivation and progressive multifocal leukoencephalopathy (PML). PML is caused by the JC polyomavirus, which infects and destroys oligodendrocytes, leading to multifocal, asymmetric, non-enhancing white matter lesions. PML carries a high mortality rate. Anti-JC virus antibody testing is required before starting natalizumab.",
      optionExplanations: ["Correct: JC virus causes PML; natalizumab increases PML risk by blocking immune surveillance in the CNS.", "Incorrect: Toxoplasma reactivation typically occurs in HIV/AIDS patients with CD4 <100 and presents as ring-enhancing lesions.", "Incorrect: HSV encephalitis preferentially affects the temporal lobes and causes ring-enhancing lesions, not non-enhancing white matter lesions.", "Incorrect: CNS lymphoma from EBV typically presents as a single ring-enhancing periventricular mass in immunocompromised patients.", "Incorrect: Cryptococcal meningoencephalitis causes meningeal enhancement and is most common in HIV/AIDS patients."],
      highYieldPoint: "Natalizumab (anti-α4-integrin) → risk of PML (JC virus); check anti-JC antibody before starting; PML = non-enhancing multifocal white matter lesions."
    },
    {
      vignette: "A 55-year-old woman with myasthenia gravis presents with worsening ptosis and dysphagia despite increasing doses of pyridostigmine. She has difficulty raising her arms above her head. Ice pack test is positive. CT chest shows a thymic mass.",
      question: "Which receptor antibody is most commonly associated with this patient's disease?",
      options: ["Anti-voltage-gated calcium channel antibodies", "Anti-nicotinic acetylcholine receptor antibodies", "Anti-glutamic acid decarboxylase antibodies", "Anti-NMDA receptor antibodies", "Anti-muscarinic acetylcholine receptor antibodies"],
      correctIndex: 1,
      explanation: "Myasthenia gravis (MG) is caused by autoantibodies against the nicotinic acetylcholine receptor (AChR) at the neuromuscular junction in ~85% of cases. These antibodies cause complement-mediated destruction and internalization of AChR, leading to fatigable weakness affecting ocular (ptosis, diplopia), bulbar (dysphagia, dysarthria), and proximal limb muscles. About 10-15% of MG patients have thymomas. Seronegative patients may have anti-MuSK antibodies.",
      optionExplanations: ["Incorrect: Anti-VGCC antibodies are found in Lambert-Eaton myasthenic syndrome, which is associated with small cell lung cancer.", "Correct: Anti-nicotinic AChR antibodies are found in ~85% of MG patients and cause complement-mediated destruction of postsynaptic receptors.", "Incorrect: Anti-GAD antibodies are associated with stiff person syndrome and type 1 diabetes mellitus.", "Incorrect: Anti-NMDA receptor antibodies cause autoimmune encephalitis with psychiatric symptoms and dyskinesias, not fatigable muscle weakness.", "Incorrect: Muscarinic receptors are found in the autonomic nervous system; MG targets nicotinic receptors at the neuromuscular junction."],
      highYieldPoint: "Myasthenia gravis: anti-AChR antibodies (85%), fatigable weakness (ocular > bulbar > proximal limbs), thymoma association; treat with AChE inhibitors, immunosuppression, thymectomy."
    },
    {
      vignette: "A 40-year-old woman presents with recurrent episodes of optic neuritis and longitudinally extensive transverse myelitis spanning more than 3 vertebral segments. Serum testing reveals antibodies against aquaporin-4.",
      question: "What is the most likely diagnosis?",
      options: ["Multiple sclerosis", "Systemic lupus erythematosus cerebritis", "Acute disseminated encephalomyelitis", "Sarcoidosis", "Neuromyelitis optica spectrum disorder (NMOSD)"],
      correctIndex: 4,
      explanation: "Neuromyelitis optica spectrum disorder (NMOSD, formerly Devic disease) is an autoimmune astrocytopathy characterized by antibodies against aquaporin-4 (AQP4), a water channel on astrocyte foot processes. NMOSD preferentially attacks the optic nerves and spinal cord, causing severe optic neuritis and longitudinally extensive transverse myelitis (≥3 vertebral segments). Unlike MS, NMOSD is more common in non-White populations, spinal lesions are longer, and treatment differs (avoid interferon-beta).",
      optionExplanations: ["Incorrect: MS typically has shorter spinal cord lesions (<2 segments), brain lesions are more common, and anti-AQP4 antibodies are absent.", "Incorrect: SLE cerebritis can cause CNS manifestations but does not characteristically produce anti-AQP4 antibodies or longitudinally extensive myelitis.", "Incorrect: ADEM is a monophasic post-infectious demyelinating event, typically in children, without anti-AQP4 antibodies.", "Incorrect: Neurosarcoidosis can cause optic neuritis and myelitis but is not associated with anti-AQP4 antibodies.", "Correct: NMOSD is defined by anti-AQP4 antibodies with optic neuritis and longitudinally extensive transverse myelitis (≥3 segments)."],
      highYieldPoint: "NMOSD: anti-AQP4 (aquaporin-4) antibodies; optic neuritis + longitudinally extensive transverse myelitis (≥3 segments); do NOT treat with interferon-beta."
    },
    {
      vignette: "A 6-year-old boy presents with progressive clumsiness, declining school performance, and behavioral changes over 6 months. MRI shows symmetric demyelination of the parieto-occipital white matter. Serum very-long-chain fatty acid levels are markedly elevated.",
      question: "What is the most likely diagnosis?",
      options: ["Metachromatic leukodystrophy", "X-linked adrenoleukodystrophy", "Krabbe disease", "Tay-Sachs disease", "Canavan disease"],
      correctIndex: 1,
      explanation: "X-linked adrenoleukodystrophy (X-ALD) is caused by mutations in the ABCD1 gene encoding a peroxisomal membrane transporter, leading to accumulation of very-long-chain fatty acids (VLCFAs) in the brain, adrenal glands, and testes. The childhood cerebral form presents in boys ages 4-8 with progressive cognitive and behavioral decline, vision loss, and posterior-predominant white matter demyelination. Adrenal insufficiency may also be present. Hematopoietic stem cell transplant can be curative if performed early.",
      optionExplanations: ["Incorrect: Metachromatic leukodystrophy is caused by arylsulfatase A deficiency leading to sulfatide accumulation; it does not elevate VLCFAs.", "Correct: X-linked adrenoleukodystrophy features elevated VLCFAs and posterior-predominant white matter demyelination in boys.", "Incorrect: Krabbe disease (galactocerebroside β-galactosidase deficiency) causes globoid cell leukodystrophy in infants but is not associated with elevated VLCFAs.", "Incorrect: Tay-Sachs disease (hexosaminidase A deficiency) causes GM2 ganglioside accumulation with a cherry-red spot on fundoscopy.", "Incorrect: Canavan disease (aspartoacylase deficiency) causes N-acetylaspartic acid accumulation and spongiform white matter degeneration in infants."],
      highYieldPoint: "X-linked adrenoleukodystrophy: ABCD1 mutation → ↑ VLCFAs; posterior white matter demyelination in boys; adrenal insufficiency; HSCT can be curative."
    }
  ],

  "Seizure disorders": [
    {
      vignette: "A 7-year-old girl is brought to the pediatrician because her teacher has noticed episodes where the child stares blankly for 5-10 seconds, sometimes with subtle eyelid fluttering, occurring 20-30 times daily. She resumes her activity immediately afterward without confusion. EEG shows a 3-Hz generalized spike-and-wave pattern.",
      question: "What type of seizure is this child most likely experiencing?",
      options: ["Simple partial seizure", "Complex partial seizure", "Myoclonic seizure", "Absence seizure", "Atonic seizure"],
      correctIndex: 3,
      explanation: "Absence seizures (formerly petit mal) are generalized seizures characterized by brief episodes of impaired awareness lasting 5-30 seconds, often with automatisms (lip smacking, eyelid fluttering), and no postictal confusion. They are most common in children ages 4-10 and have a characteristic 3-Hz generalized spike-and-wave pattern on EEG. Absence seizures can be provoked by hyperventilation. First-line treatment is ethosuximide (for absence only) or valproate (if generalized tonic-clonic seizures also present).",
      optionExplanations: ["Incorrect: Simple partial seizures involve focal symptoms without impaired awareness and show focal EEG changes, not generalized spike-and-wave.", "Incorrect: Complex partial seizures involve impaired awareness with focal onset and typically last longer with postictal confusion.", "Incorrect: Myoclonic seizures involve sudden, brief, involuntary muscle jerks, not staring spells.", "Correct: Absence seizures present with brief staring spells, no postictal confusion, and 3-Hz generalized spike-and-wave on EEG.", "Incorrect: Atonic seizures (drop attacks) involve sudden loss of muscle tone causing falls, not staring episodes."],
      highYieldPoint: "Absence seizures: 3-Hz spike-and-wave, staring spells in children, no postictal confusion; first-line = ethosuximide; provoked by hyperventilation."
    },
    {
      vignette: "A 22-year-old college student is brought to the emergency department after being found on the floor of his dorm room with generalized tonic-clonic movements lasting approximately 3 minutes. He is now drowsy and confused. He bit his tongue laterally, and his roommate noticed urinary incontinence during the event.",
      question: "Which neurotransmitter imbalance is most directly responsible for the propagation of seizure activity?",
      options: ["Excessive glutamate (excitatory) relative to GABA (inhibitory) activity", "Excessive serotonin release", "Excessive dopamine release in the mesolimbic pathway", "Excessive acetylcholine at the neuromuscular junction", "Excessive norepinephrine release from the locus coeruleus"],
      correctIndex: 0,
      explanation: "Seizures result from an imbalance between excitatory (glutamate) and inhibitory (GABA) neurotransmission, with excessive excitation or insufficient inhibition. Glutamate acting on NMDA and AMPA receptors depolarizes neurons, while GABA acting on GABA-A (chloride channels) and GABA-B receptors hyperpolarizes neurons. Most antiepileptic drugs work by enhancing GABA activity, blocking sodium/calcium channels, or reducing glutamate release.",
      optionExplanations: ["Correct: Seizures fundamentally result from excessive glutamatergic excitation and/or insufficient GABAergic inhibition.", "Incorrect: Serotonin modulates neural circuits but is not the primary neurotransmitter driving seizure propagation.", "Incorrect: Dopamine excess is implicated in psychosis, not seizure propagation.", "Incorrect: Acetylcholine at the neuromuscular junction affects muscle contraction; its excess causes cholinergic crisis, not cortical seizures.", "Incorrect: Norepinephrine from the locus coeruleus modulates arousal but is not the primary mediator of seizure activity."],
      highYieldPoint: "Seizures = ↑ glutamate (excitatory) or ↓ GABA (inhibitory); most AEDs enhance GABA or block Na⁺/Ca²⁺ channels."
    },
    {
      vignette: "A 35-year-old woman with epilepsy controlled by valproate presents for preconception counseling. She wishes to become pregnant within the next year. Her seizures have been well controlled for 3 years.",
      question: "What is the most important teratogenic risk associated with valproate use during pregnancy?",
      options: ["Fetal cardiac septal defects", "Limb reduction defects", "Renal agenesis", "Neural tube defects", "Cleft lip only"],
      correctIndex: 3,
      explanation: "Valproate is the antiepileptic drug with the highest teratogenic risk, particularly for neural tube defects (spina bifida, anencephaly), occurring in 1-2% of exposed pregnancies. Valproate also causes fetal valproate syndrome (midface hypoplasia, cardiovascular anomalies) and impaired cognitive development. Women of childbearing age should use high-dose folate supplementation and consider switching to safer alternatives (levetiracetam, lamotrigine) before conception.",
      optionExplanations: ["Incorrect: Cardiac defects can occur with multiple AEDs but are not the hallmark teratogenic risk of valproate.", "Incorrect: Limb reduction defects are not a characteristic risk of valproate (thalidomide is the classic cause).", "Incorrect: Renal agenesis is associated with ACE inhibitors, not valproate.", "Correct: Neural tube defects are the most important and well-established teratogenic risk of valproate, with a 1-2% incidence.", "Incorrect: Cleft lip/palate can occur with several AEDs but is not the most prominent valproate teratogenic risk."],
      highYieldPoint: "Valproate teratogenicity: neural tube defects (#1 risk), fetal valproate syndrome, cognitive impairment; supplement folate; prefer lamotrigine/levetiracetam in pregnancy."
    },
    {
      vignette: "A 16-year-old boy experiences a seizure that begins with tingling in his right thumb, progresses to rhythmic jerking of his right hand, then spreads to involve his entire right arm over 30 seconds. He remains fully conscious throughout. EEG shows focal discharges over the left central region.",
      question: "What is this pattern of seizure progression called?",
      options: ["Jacksonian march", "Todd paralysis", "Status epilepticus", "Lennox-Gastaut pattern", "Gelastic seizure"],
      correctIndex: 0,
      explanation: "A Jacksonian march is a focal (partial) seizure that begins in one body part and progressively spreads to adjacent areas following the somatotopic representation of the motor homunculus. The seizure originates in the primary motor cortex and spreads along the cortical surface. Since consciousness is preserved, this is classified as a focal aware (simple partial) seizure with motor symptoms. The march reflects the orderly representation of body parts along the precentral gyrus.",
      optionExplanations: ["Correct: Jacksonian march describes the progressive spread of a focal motor seizure along the motor homunculus.", "Incorrect: Todd paralysis is a transient postictal focal weakness in the body part involved in the seizure, not the seizure pattern itself.", "Incorrect: Status epilepticus is defined as a seizure lasting >5 minutes or recurrent seizures without return to baseline.", "Incorrect: Lennox-Gastaut syndrome is a childhood epilepsy syndrome with multiple seizure types, slow spike-and-wave on EEG, and intellectual disability.", "Incorrect: Gelastic seizures involve involuntary laughter and are associated with hypothalamic hamartomas."],
      highYieldPoint: "Jacksonian march: focal seizure spreading along the motor homunculus; localizes to the contralateral precentral gyrus (primary motor cortex)."
    },
    {
      vignette: "A 45-year-old man is brought to the emergency department in a continuous generalized tonic-clonic seizure that has lasted 15 minutes. IV access is established. His glucose is normal.",
      question: "What is the first-line medication for terminating this patient's status epilepticus?",
      options: ["IV phenytoin", "IV valproate", "Oral carbamazepine", "IV lorazepam", "IV levetiracetam"],
      correctIndex: 3,
      explanation: "Status epilepticus (SE) is defined as a seizure lasting >5 minutes or recurrent seizures without return to baseline. First-line treatment is IV benzodiazepines — lorazepam (preferred) or diazepam. Benzodiazepines enhance GABA-A receptor activity, increasing chloride conductance and inhibiting neuronal firing. If benzodiazepines fail, second-line agents include IV fosphenytoin, valproate, or levetiracetam. Refractory SE may require continuous infusion of propofol, midazolam, or pentobarbital.",
      optionExplanations: ["Incorrect: IV phenytoin (or fosphenytoin) is a second-line agent used if benzodiazepines fail to terminate the seizure.", "Incorrect: IV valproate is also a second-line agent for status epilepticus.", "Incorrect: Oral carbamazepine has no role in acute status epilepticus management due to its slow onset and oral route.", "Correct: IV lorazepam is the first-line treatment for status epilepticus due to its rapid onset and reliable efficacy.", "Incorrect: IV levetiracetam is an alternative second-line agent but is not the first-line treatment."],
      highYieldPoint: "Status epilepticus treatment: 1st line = IV benzodiazepines (lorazepam); 2nd line = fosphenytoin/valproate/levetiracetam; refractory = propofol/midazolam infusion."
    },
    {
      vignette: "A 30-year-old man with focal epilepsy is started on carbamazepine. He presents 2 weeks later with fever, diffuse erythematous rash with mucosal involvement, and bullae formation. Skin biopsy shows full-thickness epidermal necrosis.",
      question: "What is the most likely diagnosis?",
      options: ["Stevens-Johnson syndrome / toxic epidermal necrolysis", "Drug reaction with eosinophilia and systemic symptoms (DRESS)", "Erythema multiforme minor", "Serum sickness", "Contact dermatitis"],
      correctIndex: 0,
      explanation: "Stevens-Johnson syndrome (SJS) and toxic epidermal necrolysis (TEN) are severe, life-threatening cutaneous adverse reactions characterized by widespread epidermal necrosis and mucosal involvement. Carbamazepine is one of the most common causative drugs, along with phenytoin, lamotrigine, sulfonamides, and allopurinol. HLA-B*15:02 (common in Southeast Asian populations) strongly predisposes to carbamazepine-induced SJS/TEN. SJS involves <10% body surface area; TEN involves >30%.",
      optionExplanations: ["Correct: SJS/TEN is characterized by mucosal involvement, bullae, and full-thickness epidermal necrosis; carbamazepine is a well-known trigger.", "Incorrect: DRESS syndrome presents with fever, eosinophilia, and organ involvement (hepatitis, nephritis) but less mucosal involvement and bullae.", "Incorrect: Erythema multiforme minor involves target lesions, typically triggered by HSV, with minimal mucosal involvement.", "Incorrect: Serum sickness presents with fever, arthralgia, lymphadenopathy, and urticaria but not bullae or epidermal necrosis.", "Incorrect: Contact dermatitis is localized to the area of exposure and does not cause systemic symptoms or mucosal involvement."],
      highYieldPoint: "Carbamazepine → SJS/TEN risk (screen HLA-B*15:02 in Southeast Asians); also causes SIADH, agranulocytosis, aplastic anemia, hepatotoxicity."
    },
    {
      vignette: "A 12-year-old boy with epilepsy has morning myoclonic jerks that cause him to drop his cereal bowl. He also has occasional generalized tonic-clonic seizures. His seizures are worse when he is sleep-deprived. EEG shows 4-6 Hz polyspike-and-wave discharges.",
      question: "What is the most likely epilepsy syndrome?",
      options: ["Lennox-Gastaut syndrome", "West syndrome (infantile spasms)", "Benign rolandic epilepsy", "Dravet syndrome", "Juvenile myoclonic epilepsy"],
      correctIndex: 4,
      explanation: "Juvenile myoclonic epilepsy (JME) is a common generalized epilepsy syndrome that typically presents in adolescence with morning myoclonic jerks, generalized tonic-clonic seizures, and sometimes absence seizures. Seizures are exacerbated by sleep deprivation, stress, and alcohol. EEG shows 4-6 Hz polyspike-and-wave discharges. First-line treatment is valproate (or levetiracetam in women of childbearing age). JME usually requires lifelong treatment as relapse rates are high upon medication discontinuation.",
      optionExplanations: ["Incorrect: Lennox-Gastaut syndrome occurs in early childhood with multiple seizure types (tonic, atonic, atypical absence) and slow (< 2.5 Hz) spike-and-wave on EEG.", "Incorrect: West syndrome presents in infancy with infantile spasms, hypsarrhythmia on EEG, and developmental regression.", "Incorrect: Benign rolandic epilepsy (BECTS) presents in school-age children with focal seizures involving the face and arm, often during sleep.", "Incorrect: Dravet syndrome begins in infancy with febrile seizures that become refractory; it is associated with SCN1A mutations.", "Correct: JME presents with morning myoclonic jerks, GTC seizures, adolescent onset, and 4-6 Hz polyspike-and-wave on EEG."],
      highYieldPoint: "JME: adolescent onset, morning myoclonic jerks + GTCs, sleep deprivation trigger, 4-6 Hz polyspike-and-wave; lifelong treatment usually needed."
    },
    {
      vignette: "A 50-year-old woman with trigeminal neuralgia is maintained on carbamazepine. Routine blood work shows serum sodium of 126 mEq/L. She has no symptoms of hyponatremia. Urine osmolarity is 450 mOsm/kg, and serum osmolarity is 268 mOsm/kg.",
      question: "What is the mechanism of this electrolyte abnormality?",
      options: ["Renal sodium wasting from direct tubular toxicity", "Syndrome of inappropriate ADH secretion (SIADH)", "Primary polydipsia with excess water intake", "Adrenal insufficiency from drug-induced cortisol suppression", "Osmotic diuresis from glycosuria"],
      correctIndex: 1,
      explanation: "Carbamazepine is a well-known cause of SIADH, leading to euvolemic hyponatremia. The drug increases ADH release and enhances its effect on collecting duct V2 receptors. The elevated urine osmolarity (>100 mOsm/kg) with low serum osmolarity is consistent with SIADH. Other drugs that cause SIADH include SSRIs, cyclophosphamide, and oxcarbazepine. Mild, asymptomatic hyponatremia can be managed with fluid restriction.",
      optionExplanations: ["Incorrect: Direct tubular toxicity causing sodium wasting would present with hypovolemic hyponatremia and low urine osmolarity.", "Correct: Carbamazepine causes SIADH, leading to euvolemic hyponatremia with inappropriately concentrated urine.", "Incorrect: Primary polydipsia causes dilutional hyponatremia with maximally dilute urine (osmolarity <100 mOsm/kg), not concentrated urine.", "Incorrect: Carbamazepine does not suppress cortisol; adrenal insufficiency would show other features (hyperkalemia, hypotension).", "Incorrect: Osmotic diuresis from glycosuria would cause polyuria with dilute urine and is not a carbamazepine effect."],
      highYieldPoint: "Carbamazepine side effects: SIADH (hyponatremia), SJS/TEN, agranulocytosis, aplastic anemia, hepatotoxicity, teratogenicity; induces CYP450."
    },
    {
      vignette: "A 28-year-old woman with epilepsy is prescribed phenytoin. She presents 3 months later with gingival hyperplasia, hirsutism, and coarsening of facial features. Her seizures are well controlled.",
      question: "Which mechanism of action is shared by phenytoin, carbamazepine, and lamotrigine?",
      options: ["Enhancement of GABA-A receptor chloride conductance", "Blockade of voltage-gated sodium channels", "Inhibition of GABA transaminase", "Blockade of T-type calcium channels", "Inhibition of carbonic anhydrase"],
      correctIndex: 1,
      explanation: "Phenytoin, carbamazepine, and lamotrigine all act primarily by blocking voltage-gated sodium channels in their inactivated state (use-dependent blockade). This preferentially inhibits rapidly firing neurons during a seizure while having minimal effect on normally functioning neurons. This mechanism is effective for focal seizures and generalized tonic-clonic seizures. Other sodium channel blockers include oxcarbazepine, lacosamide, and topiramate (partial mechanism).",
      optionExplanations: ["Incorrect: GABA-A receptor enhancement is the mechanism of benzodiazepines (increase frequency of Cl⁻ channel opening) and barbiturates (increase duration).", "Correct: Phenytoin, carbamazepine, and lamotrigine all block voltage-gated sodium channels in their inactivated state.", "Incorrect: GABA transaminase inhibition is the mechanism of vigabatrin, which irreversibly inhibits the enzyme that degrades GABA.", "Incorrect: T-type calcium channel blockade is the mechanism of ethosuximide, used for absence seizures.", "Incorrect: Carbonic anhydrase inhibition is a mechanism of acetazolamide and partially of topiramate and zonisamide."],
      highYieldPoint: "Na⁺ channel blockers: phenytoin, carbamazepine, lamotrigine, oxcarbazepine, lacosamide; use-dependent blockade targets rapidly firing neurons."
    },
    {
      vignette: "An 8-month-old infant presents with clusters of sudden flexion of the trunk and extremities occurring upon awakening, each lasting 1-2 seconds. EEG shows hypsarrhythmia. Developmental milestones have regressed over the past month.",
      question: "What is the first-line treatment for this condition?",
      options: ["Ethosuximide", "Phenytoin", "Gabapentin", "Carbamazepine", "ACTH (adrenocorticotropic hormone) or vigabatrin"],
      correctIndex: 4,
      explanation: "This infant has West syndrome (infantile spasms), characterized by the triad of infantile spasms (clusters of sudden flexion/extension movements), hypsarrhythmia on EEG (chaotic, high-amplitude, disorganized background), and developmental regression. First-line treatment is ACTH (adrenocorticotropic hormone) or vigabatrin. Vigabatrin is particularly effective when the cause is tuberous sclerosis complex. West syndrome carries a poor prognosis and may evolve into Lennox-Gastaut syndrome.",
      optionExplanations: ["Incorrect: Ethosuximide is the first-line treatment for absence seizures, not infantile spasms.", "Incorrect: Phenytoin is a sodium channel blocker effective for focal and tonic-clonic seizures but not for infantile spasms.", "Incorrect: Gabapentin is not effective for infantile spasms; it is used for focal seizures and neuropathic pain.", "Incorrect: Carbamazepine can worsen some generalized epilepsies and is not used for infantile spasms.", "Correct: ACTH or vigabatrin are the first-line treatments for infantile spasms (West syndrome)."],
      highYieldPoint: "West syndrome (infantile spasms): spasms + hypsarrhythmia + developmental regression; treat with ACTH or vigabatrin; poor prognosis."
    },
    {
      vignette: "A 40-year-old man with a history of alcohol use disorder is brought to the emergency department 48 hours after his last drink. He is agitated, diaphoretic, and tremulous. He then develops a generalized tonic-clonic seizure.",
      question: "What is the pathophysiology underlying alcohol withdrawal seizures?",
      options: ["Acute hepatic encephalopathy from ammonia toxicity", "Thiamine deficiency causing Wernicke encephalopathy", "Hypomagnesemia-induced cortical hyperexcitability", "Direct ethanol neurotoxicity to cortical neurons", "Upregulation of NMDA receptors and downregulation of GABA-A receptors"],
      correctIndex: 4,
      explanation: "Chronic alcohol use enhances inhibitory GABA-A receptor function and suppresses excitatory NMDA receptor function. The brain compensates by downregulating GABA-A receptors and upregulating NMDA receptors. Upon alcohol withdrawal, the loss of GABAergic enhancement coupled with excess glutamatergic activity (via upregulated NMDA receptors) produces neuronal hyperexcitability, leading to withdrawal seizures, autonomic instability, and potentially delirium tremens.",
      optionExplanations: ["Incorrect: Hepatic encephalopathy can occur in alcoholic liver disease but is not the primary mechanism of withdrawal seizures.", "Incorrect: Thiamine deficiency causes Wernicke encephalopathy (confusion, ataxia, ophthalmoplegia) but does not directly cause withdrawal seizures.", "Incorrect: Hypomagnesemia can lower seizure threshold but is not the primary pathophysiological mechanism of alcohol withdrawal seizures.", "Incorrect: While chronic alcohol can cause neurodegeneration, acute withdrawal seizures are not from direct neurotoxicity.", "Correct: Alcohol withdrawal seizures result from NMDA receptor upregulation (↑ excitation) and GABA-A receptor downregulation (↓ inhibition)."],
      highYieldPoint: "Alcohol withdrawal: ↑ NMDA + ↓ GABA-A → seizures (12-48 hrs), delirium tremens (48-96 hrs); treat with benzodiazepines + thiamine."
    },
    {
      vignette: "A 25-year-old woman with epilepsy is being treated with phenytoin. She is found to have a drug level of 25 mcg/mL (therapeutic range: 10-20 mcg/mL). She has nystagmus, ataxia, and slurred speech.",
      question: "Why does phenytoin exhibit a disproportionate increase in serum levels with small dose increments?",
      options: ["Phenytoin is exclusively eliminated by renal excretion", "Phenytoin follows zero-order (saturation) kinetics at therapeutic doses", "Phenytoin has extremely high protein binding preventing distribution", "Phenytoin induces its own metabolism via CYP450", "Phenytoin is converted to an active metabolite that accumulates"],
      correctIndex: 1,
      explanation: "Phenytoin is one of the few drugs that follows zero-order (saturation) kinetics at therapeutic concentrations. The hepatic enzymes responsible for phenytoin metabolism become saturated, so small dose increases lead to disproportionately large increases in serum levels. This narrow therapeutic window makes phenytoin particularly prone to toxicity. Toxicity manifests as nystagmus (first sign) → ataxia → slurred speech → lethargy → coma with increasing levels.",
      optionExplanations: ["Incorrect: Phenytoin is primarily hepatically metabolized, not renally eliminated.", "Correct: Phenytoin follows zero-order kinetics at therapeutic doses because its metabolic enzymes become saturated.", "Incorrect: While phenytoin is highly protein-bound (~90%), this contributes to drug interactions but does not explain the non-linear dose-response relationship.", "Incorrect: Phenytoin induces CYP450 enzymes for other drugs but its own metabolism saturates at therapeutic levels.", "Incorrect: Phenytoin does not have a clinically significant active metabolite that accumulates."],
      highYieldPoint: "Phenytoin: zero-order kinetics (small dose change → large level change); toxicity: nystagmus → ataxia → slurred speech → coma; also causes gingival hyperplasia, hirsutism, megaloblastic anemia."
    },
    {
      vignette: "A 38-year-old woman with focal epilepsy is started on levetiracetam. She asks about the drug's mechanism of action.",
      question: "What is the primary mechanism of action of levetiracetam?",
      options: ["Enhancement of GABA-A receptor chloride conductance", "Blockade of voltage-gated sodium channels", "Binding to synaptic vesicle protein SV2A", "Inhibition of T-type calcium channels", "Blockade of AMPA glutamate receptors"],
      correctIndex: 2,
      explanation: "Levetiracetam has a unique mechanism of action: it binds to synaptic vesicle protein 2A (SV2A), which is involved in neurotransmitter vesicle exocytosis. By modulating SV2A, levetiracetam reduces neurotransmitter release and thereby decreases neuronal excitability. Levetiracetam has a favorable side effect profile, minimal drug interactions (not metabolized by CYP450), and is safe in pregnancy, making it a widely used first-line agent for both focal and generalized seizures.",
      optionExplanations: ["Incorrect: GABA-A enhancement is the mechanism of benzodiazepines and barbiturates.", "Incorrect: Sodium channel blockade is the mechanism of phenytoin, carbamazepine, and lamotrigine.", "Correct: Levetiracetam binds SV2A, a synaptic vesicle protein involved in neurotransmitter release.", "Incorrect: T-type calcium channel inhibition is the mechanism of ethosuximide for absence seizures.", "Incorrect: AMPA glutamate receptor blockade is the mechanism of perampanel, not levetiracetam."],
      highYieldPoint: "Levetiracetam: binds SV2A; broad-spectrum, minimal drug interactions (no CYP450 metabolism), safe in pregnancy; side effects include behavioral changes."
    },
    {
      vignette: "A 60-year-old man presents with new-onset focal seizures with secondary generalization. Brain MRI reveals a 3-cm ring-enhancing mass in the left temporal lobe with surrounding vasogenic edema. Biopsy shows a high-grade glioma.",
      question: "Which anti-epileptic drug should be avoided in this patient if he is also receiving chemotherapy metabolized by CYP3A4?",
      options: ["Levetiracetam", "Lacosamide", "Phenytoin", "Brivaracetam", "Gabapentin"],
      correctIndex: 2,
      explanation: "Phenytoin is a potent inducer of CYP3A4 and other CYP450 enzymes. In patients receiving chemotherapy drugs metabolized by CYP3A4 (e.g., temozolomide, irinotecan, taxanes), phenytoin can accelerate their metabolism, reducing therapeutic efficacy. Enzyme-inducing AEDs (phenytoin, carbamazepine, phenobarbital) should be avoided in brain tumor patients on chemotherapy. Non-enzyme-inducing alternatives (levetiracetam, lacosamide, valproate) are preferred.",
      optionExplanations: ["Incorrect: Levetiracetam is not metabolized by CYP450 and does not induce hepatic enzymes; it is preferred in this setting.", "Incorrect: Lacosamide is not a CYP inducer and has minimal drug interactions.", "Correct: Phenytoin is a potent CYP3A4 inducer that reduces the efficacy of CYP3A4-metabolized chemotherapy agents.", "Incorrect: Brivaracetam has minimal CYP450 interactions and is safe with chemotherapy.", "Incorrect: Gabapentin is renally eliminated with no CYP450 interactions."],
      highYieldPoint: "Avoid enzyme-inducing AEDs (phenytoin, carbamazepine, phenobarbital) with chemotherapy; use levetiracetam or lacosamide in brain tumor patients."
    },
    {
      vignette: "A 9-year-old boy has seizures that begin with an aura of an unpleasant smell, followed by staring, lip smacking, and repetitive hand-wringing for 90 seconds. He is confused for 10 minutes afterward. MRI shows mesial temporal sclerosis.",
      question: "Which brain structure is the most common origin of this seizure type?",
      options: ["Frontal lobe", "Occipital lobe", "Mesial temporal lobe (hippocampus/amygdala)", "Parietal lobe", "Insula"],
      correctIndex: 2,
      explanation: "Focal seizures with impaired awareness (formerly complex partial seizures) most commonly originate from the mesial temporal lobe, particularly the hippocampus and amygdala. Olfactory or gustatory auras are typical of temporal lobe origin. Automatisms (lip smacking, hand wringing) and postictal confusion are characteristic. Mesial temporal sclerosis (hippocampal sclerosis) is the most common pathological substrate of temporal lobe epilepsy and often responds to surgical resection when medically refractory.",
      optionExplanations: ["Incorrect: Frontal lobe seizures are typically brief with rapid secondary generalization, prominent motor features, and minimal postictal confusion.", "Incorrect: Occipital lobe seizures present with visual auras (flashing lights, phosphenes), not olfactory auras.", "Correct: The mesial temporal lobe (hippocampus/amygdala) is the most common origin for focal seizures with impaired awareness, especially with olfactory auras and automatisms.", "Incorrect: Parietal lobe seizures produce somatosensory symptoms (tingling, numbness) rather than olfactory auras.", "Incorrect: Insular cortex seizures can produce visceral or gustatory auras but are much less common than temporal lobe seizures."],
      highYieldPoint: "Temporal lobe epilepsy: olfactory/gustatory aura → automatisms → postictal confusion; mesial temporal sclerosis most common pathology; surgery effective when drug-resistant."
    }
  ],

  "Ophthalmology & otology": [
    {
      vignette: "A 62-year-old African American man presents for a routine eye examination. Intraocular pressure is 28 mmHg in both eyes. Fundoscopy reveals increased cup-to-disc ratio of 0.8 bilaterally. Visual field testing shows nasal step defects and arcuate scotomas. He has had no eye pain or redness.",
      question: "What is the most likely diagnosis?",
      options: ["Primary open-angle glaucoma", "Acute angle-closure glaucoma", "Central retinal vein occlusion", "Anterior uveitis", "Optic neuritis"],
      correctIndex: 0,
      explanation: "Primary open-angle glaucoma (POAG) is the most common form of glaucoma, characterized by painless, gradual peripheral visual field loss with elevated intraocular pressure (IOP), optic disc cupping (increased cup-to-disc ratio), and an open anterior chamber angle on gonioscopy. Risk factors include advanced age, African American race, family history, and elevated IOP. Visual field defects (nasal step, arcuate scotomas) correspond to retinal nerve fiber layer damage.",
      optionExplanations: ["Correct: POAG presents with painless, insidious visual field loss, elevated IOP, and optic disc cupping.", "Incorrect: Acute angle-closure glaucoma presents with sudden severe eye pain, redness, nausea/vomiting, mid-dilated non-reactive pupil, and corneal edema.", "Incorrect: Central retinal vein occlusion presents with sudden painless vision loss and 'blood and thunder' fundus appearance.", "Incorrect: Anterior uveitis presents with eye pain, redness, photophobia, and cells/flare in the anterior chamber.", "Incorrect: Optic neuritis presents with painful vision loss with pain on eye movement, typically in young women with MS."],
      highYieldPoint: "POAG: painless, progressive peripheral vision loss, elevated IOP, ↑ cup-to-disc ratio; treat with prostaglandin analogs (latanoprost), β-blockers (timolol)."
    },
    {
      vignette: "A 55-year-old woman presents to the emergency department with sudden onset of severe right eye pain, headache, nausea, and blurred vision with halos around lights. Examination reveals a mid-dilated, non-reactive right pupil, conjunctival injection, and a hazy cornea. IOP is 55 mmHg in the right eye.",
      question: "What is the most appropriate initial pharmacological treatment?",
      options: ["Topical atropine (mydriatic)", "Topical pilocarpine (miotic) + IV acetazolamide + topical timolol", "Intravitreal anti-VEGF injection", "Topical corticosteroids", "Oral ibuprofen only"],
      correctIndex: 1,
      explanation: "Acute angle-closure glaucoma (AACG) is an ophthalmologic emergency requiring immediate IOP reduction to prevent permanent optic nerve damage. Treatment includes: (1) topical pilocarpine (constricts pupil, opens drainage angle), (2) topical timolol (reduces aqueous production), (3) IV or oral acetazolamide (reduces aqueous humor production via carbonic anhydrase inhibition), and (4) IV mannitol (osmotic diuretic for refractory cases). Definitive treatment is laser peripheral iridotomy.",
      optionExplanations: ["Incorrect: Atropine (anticholinergic) causes mydriasis, which further narrows the angle and worsens the condition.", "Correct: Pilocarpine constricts the pupil to open the drainage angle; acetazolamide reduces aqueous production; timolol further lowers IOP.", "Incorrect: Anti-VEGF injections are used for wet age-related macular degeneration and diabetic macular edema, not glaucoma.", "Incorrect: Topical corticosteroids can raise IOP and are not first-line for acute angle-closure glaucoma.", "Incorrect: Oral ibuprofen alone is entirely insufficient for acute angle-closure glaucoma; this is an emergency."],
      highYieldPoint: "Acute angle-closure glaucoma: emergency; avoid mydriatics; treat with pilocarpine + timolol + acetazolamide; definitive = laser peripheral iridotomy."
    },
    {
      vignette: "A 70-year-old man with a 30-year history of type 2 diabetes presents with gradual bilateral vision loss. Fundoscopy reveals dot-blot hemorrhages, hard exudates, cotton-wool spots, microaneurysms, and neovascularization of the optic disc.",
      question: "Which pathological process is most directly responsible for the neovascularization?",
      options: ["VEGF release in response to retinal ischemia", "Chronic elevation of intraocular pressure", "Autoimmune attack on retinal ganglion cells", "Lipid deposition in Bruch membrane", "Mechanical stretching of the retina"],
      correctIndex: 0,
      explanation: "Diabetic retinopathy progresses from non-proliferative (microaneurysms, dot-blot hemorrhages, hard exudates, cotton-wool spots) to proliferative disease (neovascularization). Retinal ischemia from microvascular damage triggers release of vascular endothelial growth factor (VEGF), which stimulates the growth of fragile new blood vessels (neovascularization). These new vessels are prone to hemorrhage, causing vitreous hemorrhage and potentially tractional retinal detachment.",
      optionExplanations: ["Correct: VEGF released from ischemic retina drives neovascularization in proliferative diabetic retinopathy.", "Incorrect: Elevated IOP causes glaucoma, not diabetic retinopathy or neovascularization.", "Incorrect: Autoimmune retinal ganglion cell damage is not the mechanism of diabetic retinopathy.", "Incorrect: Lipid deposition in Bruch membrane underlies age-related macular degeneration with drusen formation, not diabetic neovascularization.", "Incorrect: Mechanical retinal stretching occurs in high myopia but does not cause diabetic neovascularization."],
      highYieldPoint: "Proliferative diabetic retinopathy: retinal ischemia → VEGF → neovascularization → vitreous hemorrhage/tractional detachment; treat with anti-VEGF, panretinal photocoagulation."
    },
    {
      vignette: "A 75-year-old woman presents with a 1-year history of progressive central vision loss in her right eye. She has difficulty reading and recognizing faces. Amsler grid testing shows distorted, wavy lines (metamorphopsia). Fundoscopy reveals drusen and subretinal hemorrhage in the macula.",
      question: "What is the most likely diagnosis?",
      options: ["Central retinal artery occlusion", "Primary open-angle glaucoma", "Wet (neovascular) age-related macular degeneration", "Retinal detachment", "Diabetic macular edema"],
      correctIndex: 2,
      explanation: "Wet (neovascular) age-related macular degeneration (AMD) involves choroidal neovascularization that penetrates Bruch membrane, growing beneath and into the retinal pigment epithelium. These abnormal vessels leak fluid and blood into the subretinal space, causing rapid central vision loss and metamorphopsia. Drusen (yellowish deposits beneath the RPE) are hallmarks of AMD. Treatment includes intravitreal anti-VEGF agents (ranibizumab, bevacizumab, aflibercept).",
      optionExplanations: ["Incorrect: Central retinal artery occlusion presents with sudden painless monocular vision loss and a pale retina with cherry-red spot, not drusen and gradual loss.", "Incorrect: POAG causes peripheral visual field loss, not central vision loss with metamorphopsia and drusen.", "Correct: Wet AMD presents with central vision loss, metamorphopsia, drusen, and subretinal hemorrhage from choroidal neovascularization.", "Incorrect: Retinal detachment presents with flashes, floaters, and a 'curtain coming down' over the visual field, not gradual central loss with drusen.", "Incorrect: Diabetic macular edema causes central vision loss in diabetics with retinal thickening but lacks the drusen seen in AMD."],
      highYieldPoint: "AMD: dry form (drusen, RPE atrophy, 90% of cases) vs. wet form (choroidal neovascularization, subretinal hemorrhage, rapid vision loss); wet AMD: anti-VEGF treatment."
    },
    {
      vignette: "A 25-year-old woman presents with painful right eye with redness, photophobia, and tearing. She has a history of ankylosing spondylitis. Slit-lamp examination reveals cells and flare in the anterior chamber. The pupil is irregular due to posterior synechiae.",
      question: "What is the most likely diagnosis?",
      options: ["Bacterial conjunctivitis", "Acute angle-closure glaucoma", "Corneal abrasion", "Anterior uveitis (iritis)", "Scleritis"],
      correctIndex: 3,
      explanation: "Anterior uveitis (iritis) is inflammation of the iris and ciliary body, presenting with eye pain, redness (ciliary flush — perilimbal injection), photophobia, and miosis. Slit-lamp shows cells and flare in the anterior chamber. Posterior synechiae (adhesions between iris and lens) can form, causing an irregular pupil. Anterior uveitis is strongly associated with HLA-B27 conditions: ankylosing spondylitis, reactive arthritis, inflammatory bowel disease, and psoriatic arthritis.",
      optionExplanations: ["Incorrect: Bacterial conjunctivitis presents with purulent discharge, diffuse conjunctival injection, and crusting; it does not cause anterior chamber inflammation.", "Incorrect: Acute angle-closure glaucoma presents with a fixed mid-dilated pupil, not miosis and posterior synechiae.", "Incorrect: Corneal abrasion causes pain and tearing with a fluorescein-positive epithelial defect but not anterior chamber inflammation.", "Correct: Anterior uveitis presents with pain, photophobia, cells/flare in the anterior chamber, and is associated with HLA-B27 conditions.", "Incorrect: Scleritis causes deep, boring eye pain with scleral inflammation and is associated with rheumatoid arthritis, not HLA-B27."],
      highYieldPoint: "Anterior uveitis: HLA-B27 association (ankylosing spondylitis, reactive arthritis, IBD); ciliary flush, cells/flare; treat with topical corticosteroids + cycloplegics."
    },
    {
      vignette: "A 65-year-old man with a history of hypertension and carotid artery disease presents with sudden, painless loss of vision in his right eye that lasted 5 minutes before resolving completely. Fundoscopy during the event revealed a pale retina with a cherry-red spot at the macula.",
      question: "What is the most likely source of this transient visual event?",
      options: ["Vitreous hemorrhage from diabetic retinopathy", "Retinal vein thrombosis from hypercoagulability", "Papilledema from increased intracranial pressure", "Optic neuritis from multiple sclerosis", "Embolism to the central retinal artery from carotid plaque"],
      correctIndex: 4,
      explanation: "This is amaurosis fugax — transient monocular vision loss caused by temporary retinal ischemia from an embolus (usually from an ipsilateral carotid artery atherosclerotic plaque). The retinal artery occlusion produces a pale, ischemic retina with a cherry-red spot (the macula appears red because it is thin enough for the underlying choroidal circulation to show through). This is a TIA equivalent and warrants urgent carotid evaluation and stroke prevention measures.",
      optionExplanations: ["Incorrect: Vitreous hemorrhage causes sudden painless vision loss but does not produce a pale retina with cherry-red spot; fundus view is obscured.", "Incorrect: Retinal vein thrombosis produces diffuse hemorrhages ('blood and thunder'), not pallor with a cherry-red spot.", "Incorrect: Papilledema causes bilateral disc swelling and may cause transient visual obscurations but not unilateral pale retina with cherry-red spot.", "Incorrect: Optic neuritis causes painful vision loss (especially with eye movement) and is not transient over minutes.", "Correct: Carotid embolism to the central retinal artery causes transient monocular vision loss (amaurosis fugax) with characteristic pale retina and cherry-red macula."],
      highYieldPoint: "Amaurosis fugax: transient monocular vision loss from retinal artery embolism; cherry-red spot on macula; TIA equivalent → evaluate carotid + antiplatelet therapy."
    },
    {
      vignette: "A 50-year-old man presents with progressive bilateral hearing loss, worse in the right ear, and constant tinnitus. He reports difficulty understanding speech, especially in noisy environments. Audiometry shows bilateral sensorineural hearing loss that is worse at high frequencies.",
      question: "In sensorineural hearing loss, which structure's dysfunction distinguishes it from conductive hearing loss?",
      options: ["Tympanic membrane", "Ossicular chain (malleus, incus, stapes)", "Eustachian tube", "Cochlear hair cells or cochlear nerve (CN VIII)", "External auditory canal"],
      correctIndex: 3,
      explanation: "Sensorineural hearing loss (SNHL) results from dysfunction of the cochlear hair cells (inner ear) or the cochlear nerve (CN VIII). This is distinguished from conductive hearing loss (CHL), which involves the external or middle ear structures (tympanic membrane, ossicles, Eustachian tube). Weber test lateralizes to the unaffected ear in SNHL (lateralizes to the affected ear in CHL). Rinne test shows air conduction > bone conduction in both normal hearing and SNHL.",
      optionExplanations: ["Incorrect: Tympanic membrane dysfunction (perforation, retraction) causes conductive hearing loss.", "Incorrect: Ossicular chain fixation or disruption (e.g., otosclerosis) causes conductive hearing loss.", "Incorrect: Eustachian tube dysfunction affects middle ear pressure and causes conductive hearing loss.", "Correct: Cochlear hair cell or CN VIII dysfunction defines sensorineural hearing loss, distinguishing it from conductive pathology.", "Incorrect: External auditory canal obstruction (cerumen impaction) causes conductive hearing loss."],
      highYieldPoint: "SNHL: cochlea/CN VIII; Weber lateralizes to normal ear, Rinne AC > BC. CHL: outer/middle ear; Weber lateralizes to affected ear, Rinne BC > AC."
    },
    {
      vignette: "A 35-year-old woman presents with episodic vertigo lasting 20 minutes to several hours, accompanied by unilateral hearing loss, tinnitus, and aural fullness in the left ear. Audiometry during an attack shows low-frequency sensorineural hearing loss on the left.",
      question: "What is the pathological mechanism underlying this condition?",
      options: ["Benign positional otolith displacement in the posterior semicircular canal", "Endolymphatic hydrops (distension of the endolymphatic space)", "Vestibular schwannoma compressing CN VIII", "Viral inflammation of the vestibular nerve", "Cholesteatoma eroding the semicircular canal"],
      correctIndex: 1,
      explanation: "Ménière disease is caused by endolymphatic hydrops — abnormal distension of the endolymphatic compartment within the membranous labyrinth. This increased endolymph volume leads to the classic tetrad: episodic vertigo (20 minutes to hours), fluctuating sensorineural hearing loss (initially low-frequency), tinnitus, and aural fullness. Treatment includes low-salt diet, diuretics, and intratympanic gentamicin or corticosteroids for refractory cases.",
      optionExplanations: ["Incorrect: Otolith displacement in the semicircular canal causes benign paroxysmal positional vertigo (BPPV), which has brief episodes (<1 minute) triggered by head position changes.", "Correct: Endolymphatic hydrops is the pathological basis of Ménière disease, causing the classic tetrad of symptoms.", "Incorrect: Vestibular schwannoma (acoustic neuroma) causes progressive unilateral SNHL and tinnitus but not episodic vertigo with aural fullness.", "Incorrect: Vestibular neuritis causes acute, prolonged vertigo (days) without hearing loss or tinnitus.", "Incorrect: Cholesteatoma causes conductive hearing loss, otorrhea, and can erode temporal bone structures but does not cause endolymphatic hydrops."],
      highYieldPoint: "Ménière disease: endolymphatic hydrops → episodic vertigo (20 min–hrs) + fluctuating SNHL (low-frequency) + tinnitus + aural fullness."
    },
    {
      vignette: "A 40-year-old woman presents with progressive conductive hearing loss in both ears. She reports that she can hear better in noisy environments (paracusis of Willis). Otoscopy is normal. Tympanometry shows type As (reduced compliance). Audiometry shows conductive hearing loss with absent stapedial reflexes.",
      question: "What is the most likely diagnosis?",
      options: ["Presbycusis", "Otosclerosis", "Tympanic membrane perforation", "Serous otitis media", "Ménière disease"],
      correctIndex: 1,
      explanation: "Otosclerosis is characterized by abnormal bone remodeling at the stapediovestibular joint, causing fixation of the stapes footplate and progressive conductive hearing loss. Paracusis of Willis (hearing better in noisy environments) occurs because others raise their voices. The condition typically affects women in their 20s-40s and may worsen during pregnancy (estrogen effect). Otoscopy is usually normal. Treatment includes hearing aids or stapedectomy.",
      optionExplanations: ["Incorrect: Presbycusis is age-related sensorineural hearing loss, not conductive, and does not show absent stapedial reflexes.", "Correct: Otosclerosis causes conductive hearing loss from stapes fixation with paracusis of Willis and absent stapedial reflexes.", "Incorrect: Tympanic membrane perforation would be visible on otoscopy and causes conductive loss, but otoscopy here is normal.", "Incorrect: Serous otitis media shows a fluid-filled middle ear (amber tympanic membrane, air-fluid levels) and type B tympanometry.", "Incorrect: Ménière disease causes episodic sensorineural hearing loss with vertigo, not progressive conductive loss."],
      highYieldPoint: "Otosclerosis: stapes fixation → conductive hearing loss + paracusis of Willis + normal otoscopy; treat with stapedectomy."
    },
    {
      vignette: "A 60-year-old woman with type 2 diabetes notices a sudden, painless 'curtain' descending over her right visual field. She recently had a posterior vitreous detachment. Examination reveals a relative afferent pupillary defect on the right.",
      question: "What is the most likely diagnosis?",
      options: ["Central retinal artery occlusion", "Vitreous hemorrhage", "Rhegmatogenous retinal detachment", "Optic neuritis", "Posterior vitreous detachment"],
      correctIndex: 2,
      explanation: "Rhegmatogenous retinal detachment (RRD) presents with a painless 'curtain' or 'shadow' across the visual field, preceded by photopsia (flashes) and floaters from vitreous traction. Posterior vitreous detachment is the most common predisposing factor, as vitreous traction creates a retinal tear through which fluid separates the neurosensory retina from the retinal pigment epithelium. Risk factors include myopia, prior cataract surgery, and trauma. This is a surgical emergency requiring prompt reattachment.",
      optionExplanations: ["Incorrect: CRAO presents with sudden painless vision loss and a pale retina with cherry-red spot, not a progressive 'curtain' effect.", "Incorrect: Vitreous hemorrhage causes sudden vision loss (like 'red rain') and obscures the fundus view, but does not typically produce a curtain effect.", "Correct: Rhegmatogenous retinal detachment presents with a progressive curtain-like visual field loss following posterior vitreous detachment.", "Incorrect: Optic neuritis causes painful vision loss with an afferent pupillary defect but does not present with a curtain-like field loss.", "Incorrect: Posterior vitreous detachment causes floaters and flashes but does not itself cause visual field loss unless it leads to retinal detachment."],
      highYieldPoint: "Retinal detachment: flashes → floaters → 'curtain' over visual field; emergent ophthalmology referral; risk factors: myopia, PVD, cataract surgery."
    },
    {
      vignette: "A 2-year-old child is brought to the pediatrician because his mother noticed a white reflex in his left eye in photographs. Examination reveals leukocoria and strabismus. Fundoscopy shows a white, calcified retinal mass.",
      question: "What is the most likely diagnosis, and which gene mutation is classically associated?",
      options: ["Retinoblastoma; RB1 tumor suppressor gene", "Rhabdomyosarcoma; PAX3-FOXO1 fusion", "Medulloblastoma; PTCH1 mutation", "Neuroblastoma; MYCN amplification", "Wilms tumor; WT1 mutation"],
      correctIndex: 0,
      explanation: "Retinoblastoma is the most common primary intraocular malignancy of childhood, caused by mutations in the RB1 tumor suppressor gene on chromosome 13q14. Leukocoria (white pupillary reflex) is the most common presenting sign. The RB1 gene encodes the retinoblastoma protein (pRb), which regulates the G1-to-S cell cycle transition. According to the Knudson two-hit hypothesis, both alleles of RB1 must be inactivated. Hereditary retinoblastoma has one germline mutation + one somatic hit; sporadic has two somatic hits.",
      optionExplanations: ["Correct: Retinoblastoma presents with leukocoria in children and is caused by RB1 tumor suppressor gene mutations (13q14).", "Incorrect: Rhabdomyosarcoma is the most common soft tissue sarcoma in children but does not typically present as an intraocular mass with leukocoria.", "Incorrect: Medulloblastoma is a posterior fossa brain tumor in children, not an intraocular malignancy.", "Incorrect: Neuroblastoma arises from neural crest cells (adrenal medulla) and may cause periorbital ecchymosis but not an intraocular mass.", "Incorrect: Wilms tumor is a renal malignancy of childhood associated with WT1, not an intraocular tumor."],
      highYieldPoint: "Retinoblastoma: leukocoria in children; RB1 gene (13q14); Knudson two-hit hypothesis; hereditary = bilateral, sporadic = unilateral."
    },
    {
      vignette: "A 55-year-old man with poorly controlled diabetes presents with right eye pain, proptosis, ophthalmoplegia, and decreased vision. He has periorbital swelling and black, necrotic eschar on the right nasal turbinate. CT shows opacification of the right ethmoid and maxillary sinuses with orbital extension.",
      question: "What is the most likely causative organism?",
      options: ["Staphylococcus aureus", "Pseudomonas aeruginosa", "Candida albicans", "Aspergillus fumigatus", "Mucor/Rhizopus species"],
      correctIndex: 4,
      explanation: "Mucormycosis (zygomycosis) is a rapidly progressive, life-threatening fungal infection caused by Mucor and Rhizopus species. The rhinocerebral form begins in the nasal sinuses and invades through the orbit into the brain. Black necrotic eschar on the nasal turbinate is a classic finding caused by angioinvasion with vascular thrombosis and tissue infarction. Risk factors include diabetic ketoacidosis, immunosuppression, and iron overload (deferoxamine use). Treatment requires amphotericin B and surgical debridement.",
      optionExplanations: ["Incorrect: S. aureus causes preseptal and orbital cellulitis but does not produce black necrotic eschar or angioinvasion.", "Incorrect: Pseudomonas causes malignant otitis externa in diabetics but is not the cause of rhinocerebral mucormycosis.", "Incorrect: Candida causes mucocutaneous and systemic candidiasis but not rhinocerebral disease with necrotic eschar.", "Incorrect: Aspergillus can cause invasive fungal sinusitis but with different histology (septate hyphae with acute-angle branching vs. ribbon-like non-septate hyphae in Mucor).", "Correct: Mucor/Rhizopus species cause rhinocerebral mucormycosis with angioinvasion and black eschar in diabetics."],
      highYieldPoint: "Mucormycosis: DKA + black nasal eschar + rhinocerebral invasion; Mucor = wide, ribbon-like, non-septate hyphae branching at 90°; treat with amphotericin B + surgery."
    },
    {
      vignette: "A 30-year-old woman presents with severe vertigo, nausea, and vomiting that began suddenly 2 days ago. The vertigo is constant and worsened by head movement. She had a viral upper respiratory infection last week. She has no hearing loss. Examination reveals spontaneous horizontal nystagmus beating toward the left ear. Head impulse test is positive on the right side.",
      question: "What is the most likely diagnosis?",
      options: ["Benign paroxysmal positional vertigo", "Ménière disease", "Posterior circulation stroke", "Labyrinthitis", "Right vestibular neuritis"],
      correctIndex: 4,
      explanation: "Vestibular neuritis is acute unilateral vestibular nerve inflammation, usually following a viral illness. It presents with acute, severe, constant vertigo lasting days, with nausea/vomiting and spontaneous nystagmus beating away from the affected side. Crucially, hearing is preserved (distinguishing it from labyrinthitis, which has hearing loss). The head impulse test is positive on the affected side (indicating vestibular hypofunction). Treatment is supportive with vestibular suppressants acutely and vestibular rehabilitation.",
      optionExplanations: ["Incorrect: BPPV causes brief episodes (<1 minute) of positional vertigo triggered by specific head movements, not constant vertigo lasting days.", "Incorrect: Ménière disease causes episodic vertigo (20 min–hours) with hearing loss, tinnitus, and aural fullness.", "Incorrect: Posterior circulation stroke can mimic vestibular neuritis but typically has a negative head impulse test, direction-changing nystagmus, and other neurological signs.", "Incorrect: Labyrinthitis presents similarly to vestibular neuritis but includes hearing loss, which this patient does not have.", "Correct: Right vestibular neuritis causes acute constant vertigo with nystagmus beating toward the unaffected (left) side, positive head impulse test on the right, and preserved hearing."],
      highYieldPoint: "Vestibular neuritis: acute constant vertigo, no hearing loss, nystagmus beating away from lesion, positive head impulse test; vs. labyrinthitis (adds hearing loss)."
    },
    {
      vignette: "A 45-year-old woman presents with episodic attacks of severe vertigo lasting seconds, triggered by rolling over in bed or looking up. Between episodes she feels completely normal. Dix-Hallpike test is positive with upbeating, torsional nystagmus after a 2-second latency, lasting 15 seconds.",
      question: "Which treatment is most effective for this condition?",
      options: ["Low-salt diet and diuretics", "Intratympanic gentamicin", "Epley (canalith repositioning) maneuver", "High-dose IV corticosteroids", "Vestibular nerve section"],
      correctIndex: 2,
      explanation: "This patient has benign paroxysmal positional vertigo (BPPV), the most common cause of vertigo. BPPV is caused by otoconia (calcium carbonate crystals) that become dislodged from the utricle and migrate into the posterior semicircular canal. The Dix-Hallpike test confirms the diagnosis (positive = upbeating torsional nystagmus with latency and fatigability). The Epley maneuver (canalith repositioning) physically moves the otoconia out of the semicircular canal back into the utricle, with a >80% success rate.",
      optionExplanations: ["Incorrect: Low-salt diet and diuretics are used for Ménière disease, not BPPV.", "Incorrect: Intratympanic gentamicin is used for refractory Ménière disease to ablate vestibular function.", "Correct: The Epley maneuver repositions displaced otoconia from the posterior semicircular canal back into the utricle, resolving BPPV.", "Incorrect: High-dose IV corticosteroids are used for vestibular neuritis and sudden sensorineural hearing loss, not BPPV.", "Incorrect: Vestibular nerve section is a last resort for refractory vestibular disorders, not first-line for BPPV."],
      highYieldPoint: "BPPV: most common cause of vertigo; otolith displacement in posterior SCC; positive Dix-Hallpike → Epley maneuver (>80% cure rate)."
    },
    {
      vignette: "A 72-year-old woman with type 2 diabetes presents with gradually progressive bilateral blurred vision over the past year. She reports increased glare while driving at night and difficulty reading road signs. Visual acuity is 20/60 in both eyes. Slit-lamp examination reveals central lens opacification with yellowing.",
      question: "Which type of cataract is most commonly associated with normal aging?",
      options: ["Anterior subcapsular cataract", "Posterior subcapsular cataract", "Cerulean (blue dot) cataract", "Nuclear sclerotic cataract", "Lamellar (zonular) cataract"],
      correctIndex: 3,
      explanation: "Nuclear sclerotic cataracts are the most common age-related cataracts, resulting from progressive oxidation and yellowing of the central lens nucleus. They cause gradual loss of distance vision and increased glare sensitivity. A unique feature is 'second sight of aging' — temporary improvement in near vision due to increased refractive index of the sclerotic nucleus. Posterior subcapsular cataracts are associated with corticosteroid use and diabetes, causing prominent glare and difficulty with near vision.",
      optionExplanations: ["Incorrect: Anterior subcapsular cataracts are associated with trauma, atopic dermatitis, and uveitis, not normal aging.", "Incorrect: Posterior subcapsular cataracts are associated with chronic corticosteroid use, diabetes, and radiation; they cause prominent glare and near vision difficulty.", "Incorrect: Cerulean (blue dot) cataracts are congenital, usually asymptomatic, and do not progress with age.", "Correct: Nuclear sclerotic cataracts are the most common type associated with aging, causing progressive yellowing and hardening of the central lens.", "Incorrect: Lamellar cataracts are the most common type of childhood cataract, not age-related."],
      highYieldPoint: "Nuclear sclerotic cataract: most common age-related cataract; 'second sight' (temporary near vision improvement); posterior subcapsular = steroids/diabetes."
    }
  ],

  "Neuro-oncology": [
    {
      vignette: "A 60-year-old man presents with a 3-month history of progressive headaches, personality changes, and right-sided weakness. MRI reveals a large, heterogeneously enhancing mass crossing the corpus callosum with central necrosis and surrounding edema in the left frontal lobe. Biopsy shows pseudopalisading necrosis and microvascular proliferation.",
      question: "What is the most likely diagnosis?",
      options: ["Glioblastoma (WHO grade IV)", "Meningioma", "Oligodendroglioma", "Pilocytic astrocytoma", "Brain metastasis"],
      correctIndex: 0,
      explanation: "Glioblastoma (GBM, WHO grade IV) is the most common and most aggressive primary malignant brain tumor in adults. Classic imaging shows a heterogeneously enhancing mass crossing the midline via the corpus callosum ('butterfly glioma') with central necrosis and surrounding vasogenic edema. Histologically, GBM shows pseudopalisading necrosis (tumor cells arranged around areas of necrosis) and microvascular proliferation. Median survival is ~15 months with surgery, temozolomide, and radiation.",
      optionExplanations: ["Correct: GBM shows pseudopalisading necrosis, microvascular proliferation, and the classic butterfly pattern crossing the corpus callosum.", "Incorrect: Meningiomas are extra-axial, dural-based, homogeneously enhancing tumors that do not show necrosis or cross the corpus callosum.", "Incorrect: Oligodendrogliomas are typically well-circumscribed, slow-growing tumors with calcifications and 1p/19q co-deletion.", "Incorrect: Pilocytic astrocytomas are WHO grade I tumors in children, presenting as cystic lesions with an enhancing mural nodule.", "Incorrect: Brain metastases are typically multiple, well-circumscribed lesions at the gray-white junction, not single masses crossing the corpus callosum."],
      highYieldPoint: "GBM: most common malignant brain tumor in adults; 'butterfly' pattern, pseudopalisading necrosis, microvascular proliferation; treat with temozolomide + radiation."
    },
    {
      vignette: "A 45-year-old woman presents with headaches and is found to have a well-circumscribed, extra-axial, dural-based mass along the falx cerebri on MRI. The mass shows homogeneous enhancement and a dural tail sign. She has no neurological deficits.",
      question: "What is the most likely diagnosis?",
      options: ["Glioblastoma", "Schwannoma", "Ependymoma", "Meningioma", "Hemangioblastoma"],
      correctIndex: 3,
      explanation: "Meningiomas are the most common primary intracranial tumors overall (though the majority are benign). They arise from arachnoid cap (meningothelial) cells and are extra-axial, dural-based masses that show homogeneous enhancement with a characteristic 'dural tail' sign on MRI. Common locations include the parasagittal/falcine region, convexity, sphenoid wing, and olfactory groove. Histology shows whorled patterns of cells and psammoma bodies (calcified concentric lamellae). Risk factors include prior radiation and NF2.",
      optionExplanations: ["Incorrect: GBM is an intra-axial tumor with heterogeneous enhancement and central necrosis, not extra-axial with a dural tail.", "Incorrect: Schwannomas are typically found in the cerebellopontine angle (acoustic neuroma) and are not dural-based falcine tumors.", "Incorrect: Ependymomas arise from ependymal cells lining the ventricles, presenting as intraventricular masses.", "Correct: Meningiomas are extra-axial, dural-based tumors with homogeneous enhancement and dural tail sign, commonly at the falx.", "Incorrect: Hemangioblastomas are posterior fossa tumors associated with VHL syndrome, not dural-based falcine masses."],
      highYieldPoint: "Meningioma: most common primary intracranial tumor; extra-axial, dural tail, psammoma bodies; associated with NF2 and prior radiation."
    },
    {
      vignette: "A 25-year-old woman presents with hearing loss in the right ear and tinnitus. MRI shows bilateral enhancing masses in the cerebellopontine angles. She also has multiple café-au-lait spots and subcutaneous nodules on examination.",
      question: "Which genetic syndrome is most likely associated with these findings?",
      options: ["Neurofibromatosis type 2 (NF2)", "Neurofibromatosis type 1 (NF1)", "Tuberous sclerosis complex", "Von Hippel-Lindau syndrome", "Li-Fraumeni syndrome"],
      correctIndex: 0,
      explanation: "Bilateral vestibular schwannomas (acoustic neuromas) are pathognomonic for neurofibromatosis type 2 (NF2), an autosomal dominant condition caused by mutations in the merlin (schwannomin) gene on chromosome 22q12. NF2 also predisposes to meningiomas, ependymomas, and juvenile posterior subcapsular cataracts. While NF1 is more common and features peripheral neurofibromas and café-au-lait spots, bilateral acoustic neuromas specifically define NF2.",
      optionExplanations: ["Correct: NF2 is defined by bilateral vestibular schwannomas; mutation in merlin gene on chromosome 22q12.", "Incorrect: NF1 (chromosome 17q11, neurofibromin) causes peripheral neurofibromas, optic nerve gliomas, Lisch nodules, and café-au-lait spots, but not bilateral vestibular schwannomas.", "Incorrect: Tuberous sclerosis causes cortical tubers, subependymal giant cell astrocytomas, cardiac rhabdomyomas, and renal angiomyolipomas.", "Incorrect: VHL syndrome causes hemangioblastomas (cerebellum, retina, spinal cord), clear cell RCC, and pheochromocytomas.", "Incorrect: Li-Fraumeni syndrome (TP53 mutation) predisposes to sarcomas, breast cancer, leukemia, and brain tumors but not bilateral schwannomas."],
      highYieldPoint: "NF2: bilateral vestibular schwannomas (pathognomonic), meningiomas, ependymomas; merlin gene, chromosome 22; 'NF2 = 22.'"
    },
    {
      vignette: "A 6-year-old boy presents with morning headaches, vomiting, and unsteady gait over the past 2 weeks. MRI reveals a solid, homogeneously enhancing mass in the posterior fossa filling the fourth ventricle with associated hydrocephalus. Histology shows dense sheets of small, round, blue cells with Homer Wright rosettes.",
      question: "What is the most likely diagnosis?",
      options: ["Ependymoma", "Pilocytic astrocytoma", "Craniopharyngioma", "Medulloblastoma", "Choroid plexus papilloma"],
      correctIndex: 3,
      explanation: "Medulloblastoma is the most common malignant brain tumor in children, arising in the posterior fossa (cerebellum). It typically presents in boys under 10 with signs of increased intracranial pressure (headaches, vomiting) and cerebellar dysfunction (ataxia). Histology shows small, round, blue cells arranged in Homer Wright rosettes (or perivascular pseudorosettes). Medulloblastoma can disseminate via CSF (drop metastases). Treatment includes maximal surgical resection followed by craniospinal irradiation and chemotherapy.",
      optionExplanations: ["Incorrect: Ependymomas arise from ependymal cells of the fourth ventricle in children but show perivascular pseudorosettes and are less densely cellular.", "Incorrect: Pilocytic astrocytoma is a cystic posterior fossa tumor with an enhancing mural nodule, showing Rosenthal fibers and eosinophilic granular bodies on histology.", "Incorrect: Craniopharyngiomas are suprasellar tumors (not posterior fossa) derived from Rathke pouch remnants.", "Correct: Medulloblastoma is the most common malignant posterior fossa tumor in children with small round blue cells and Homer Wright rosettes.", "Incorrect: Choroid plexus papillomas are intraventricular tumors that overproduce CSF but are rare and have papillary architecture."],
      highYieldPoint: "Medulloblastoma: most common malignant pediatric brain tumor; posterior fossa, small round blue cells, Homer Wright rosettes; can disseminate via CSF (drop mets)."
    },
    {
      vignette: "An 8-year-old girl presents with headaches and visual field changes. MRI reveals a suprasellar cystic and solid mass with calcifications. CT confirms the calcifications. The surgeon reports the mass has a 'machinery oil' appearance at the time of surgery.",
      question: "What is the most likely diagnosis?",
      options: ["Craniopharyngioma", "Pituitary adenoma", "Meningioma", "Germ cell tumor", "Hypothalamic hamartoma"],
      correctIndex: 0,
      explanation: "Craniopharyngioma is a benign but locally aggressive suprasellar tumor derived from Rathke pouch remnants (oral ectoderm). It has a bimodal age distribution (childhood 5-15 years and adults 50-75 years). Characteristic features include calcifications on CT, cystic and solid components, and 'machinery oil' or 'motor oil' cyst fluid. The tumor can compress the optic chiasm (bitemporal hemianopia), pituitary gland (hypopituitarism), and hypothalamus (diabetes insipidus). The adamantinomatous subtype (children) shows wet keratin and calcification.",
      optionExplanations: ["Correct: Craniopharyngioma is a calcified suprasellar cystic tumor from Rathke pouch remnants with characteristic 'machinery oil' fluid.", "Incorrect: Pituitary adenomas are intrasellar tumors in adults; they rarely calcify and do not have cystic 'machinery oil' contents.", "Incorrect: Meningiomas are dural-based tumors that do not typically arise in the suprasellar region with cystic calcified contents in children.", "Incorrect: Germ cell tumors (germinomas) can occur in the suprasellar region but do not characteristically calcify or produce oily fluid.", "Incorrect: Hypothalamic hamartomas are non-neoplastic lesions causing gelastic seizures and precocious puberty, not calcified cystic masses."],
      highYieldPoint: "Craniopharyngioma: Rathke pouch remnant, suprasellar, calcified, cystic ('machinery oil'); bimodal age; compresses chiasm → bitemporal hemianopia."
    },
    {
      vignette: "A 40-year-old man presents with seizures. MRI shows a cortical mass in the left frontal lobe with calcifications. Biopsy reveals a tumor with a 'fried egg' appearance of cells on histology with a delicate, branching 'chicken wire' capillary network. Molecular analysis shows 1p/19q co-deletion.",
      question: "What is the most likely diagnosis?",
      options: ["Glioblastoma", "Pilocytic astrocytoma", "Ependymoma", "Oligodendroglioma", "Meningioma"],
      correctIndex: 3,
      explanation: "Oligodendrogliomas are slow-growing glial tumors that classically present with seizures in young to middle-aged adults. Key features include: cortical location with calcifications, 'fried egg' cell morphology (round nuclei with clear perinuclear halos, an artifact of fixation), 'chicken wire' capillary pattern, and the defining molecular marker of 1p/19q co-deletion. This co-deletion confers a better prognosis and predicts response to chemotherapy (PCV regimen or temozolomide). IDH mutation is also required for the WHO 2021 classification.",
      optionExplanations: ["Incorrect: GBM shows pseudopalisading necrosis and microvascular proliferation, not 'fried egg' cells or 1p/19q co-deletion.", "Incorrect: Pilocytic astrocytoma shows Rosenthal fibers and eosinophilic granular bodies; it occurs in the posterior fossa of children.", "Incorrect: Ependymoma shows perivascular pseudorosettes and arises from ventricular ependymal cells.", "Correct: Oligodendroglioma has 'fried egg' cells, 'chicken wire' vasculature, calcifications, and 1p/19q co-deletion.", "Incorrect: Meningioma is an extra-axial tumor with whorled patterns and psammoma bodies."],
      highYieldPoint: "Oligodendroglioma: 'fried egg' cells, 'chicken wire' capillaries, cortical calcifications; 1p/19q co-deletion = better prognosis + chemo-responsive."
    },
    {
      vignette: "A 55-year-old man with a history of renal cell carcinoma treated 5 years ago presents with seizures, headaches, and progressive left arm weakness. MRI shows three well-circumscribed, ring-enhancing lesions at the gray-white matter junction in the right hemisphere.",
      question: "What is the most likely diagnosis?",
      options: ["Multifocal glioblastoma", "Brain abscess", "Lymphoma", "Multiple meningiomas", "Brain metastases"],
      correctIndex: 4,
      explanation: "Brain metastases are the most common intracranial tumors in adults overall (more common than primary brain tumors). They characteristically appear as multiple, well-circumscribed, ring-enhancing lesions at the gray-white matter junction with surrounding vasogenic edema. The most common primary sites are lung (most common), breast, melanoma (highest propensity per case), renal cell carcinoma, and colorectal cancer. Renal cell carcinoma metastases are notoriously hemorrhagic.",
      optionExplanations: ["Incorrect: Multifocal GBM is less common than metastases and typically shows heterogeneous enhancement with necrosis and less-defined borders.", "Incorrect: Brain abscesses show ring enhancement but have restricted diffusion centrally on DWI, and this patient has a cancer history favoring metastases.", "Incorrect: Primary CNS lymphoma typically presents as a single periventricular lesion that is homogeneously enhancing in immunocompetent patients.", "Incorrect: Multiple meningiomas are extra-axial, dural-based tumors and are not ring-enhancing lesions at the gray-white junction.", "Correct: Multiple ring-enhancing lesions at the gray-white junction in a patient with prior malignancy are most consistent with brain metastases."],
      highYieldPoint: "Brain metastases: most common intracranial tumors in adults; gray-white junction, multiple; sources: lung > breast > melanoma > RCC > colon."
    },
    {
      vignette: "A 30-year-old man with a cerebellar hemangioblastoma is also found to have bilateral renal cell carcinomas, retinal angiomas, and a pheochromocytoma.",
      question: "Which inherited syndrome and gene mutation are most likely responsible?",
      options: ["Tuberous sclerosis complex; TSC1/TSC2", "Neurofibromatosis type 1; NF1", "Von Hippel-Lindau syndrome; VHL gene", "Li-Fraumeni syndrome; TP53", "Cowden syndrome; PTEN"],
      correctIndex: 2,
      explanation: "Von Hippel-Lindau (VHL) syndrome is an autosomal dominant condition caused by mutations in the VHL tumor suppressor gene on chromosome 3p25. The VHL protein regulates HIF (hypoxia-inducible factor), and its loss leads to constitutive HIF activation and VEGF overproduction, driving tumor angiogenesis. VHL is characterized by hemangioblastomas (cerebellum, retina, spinal cord), bilateral clear cell RCC, pheochromocytomas, and pancreatic cysts/neuroendocrine tumors.",
      optionExplanations: ["Incorrect: Tuberous sclerosis causes cortical tubers, subependymal giant cell astrocytomas, cardiac rhabdomyomas, and renal angiomyolipomas, not hemangioblastomas.", "Incorrect: NF1 causes neurofibromas, optic gliomas, and café-au-lait spots; it does not feature hemangioblastomas or bilateral RCC.", "Correct: VHL syndrome features hemangioblastomas, bilateral clear cell RCC, retinal angiomas, and pheochromocytomas; VHL gene on 3p25.", "Incorrect: Li-Fraumeni (TP53) causes sarcomas, breast cancer, leukemia, and brain tumors but not the specific VHL tumor constellation.", "Incorrect: Cowden syndrome (PTEN) predisposes to breast, thyroid, and endometrial cancers with hamartomatous polyps."],
      highYieldPoint: "VHL: VHL gene (3p25) → ↑ HIF/VEGF; hemangioblastomas + bilateral clear cell RCC + pheo + retinal angiomas; autosomal dominant."
    },
    {
      vignette: "A 35-year-old HIV-positive man with a CD4 count of 50 cells/µL presents with confusion, weakness, and seizures. MRI shows a single, large, homogeneously enhancing periventricular mass. CSF cytology is obtained after excluding mass effect.",
      question: "What is the most likely diagnosis?",
      options: ["Toxoplasma gondii abscess", "Primary CNS lymphoma", "Glioblastoma", "Progressive multifocal leukoencephalopathy", "Cryptococcal meningoencephalitis"],
      correctIndex: 1,
      explanation: "Primary CNS lymphoma (PCNSL) in HIV/AIDS patients is strongly associated with Epstein-Barr virus (EBV). It presents as a single, large, homogeneously enhancing periventricular mass in immunocompromised patients (vs. ring-enhancing in immunocompetent patients). The key differential is toxoplasmosis, which typically shows multiple ring-enhancing lesions in the basal ganglia. Empiric anti-Toxoplasma treatment is often given first; if no improvement in 2 weeks, biopsy for lymphoma is indicated.",
      optionExplanations: ["Incorrect: Toxoplasma typically presents with multiple ring-enhancing lesions (not a single homogeneous mass) in the basal ganglia region.", "Correct: PCNSL in AIDS presents as a single, homogeneously enhancing periventricular mass; EBV-associated.", "Incorrect: GBM is rare in young adults and shows heterogeneous enhancement with necrosis, not homogeneous enhancement.", "Incorrect: PML shows non-enhancing white matter lesions caused by JC virus, not an enhancing mass.", "Incorrect: Cryptococcal meningoencephalitis causes meningeal enhancement and dilated perivascular spaces, not a parenchymal mass."],
      highYieldPoint: "PCNSL in AIDS: EBV-driven, single periventricular homogeneous mass; vs. toxoplasmosis (multiple ring-enhancing, basal ganglia); treat toxo first, biopsy if no response."
    },
    {
      vignette: "A 12-year-old girl presents with headaches, vomiting, and papilledema. MRI reveals a posterior fossa cystic mass with a brightly enhancing mural nodule in the right cerebellar hemisphere. There is associated hydrocephalus from fourth ventricle compression.",
      question: "What is the most likely diagnosis?",
      options: ["Medulloblastoma", "Pilocytic astrocytoma", "Ependymoma", "Hemangioblastoma", "Atypical teratoid/rhabdoid tumor"],
      correctIndex: 1,
      explanation: "Pilocytic astrocytoma (WHO grade I) is the most common pediatric brain tumor and the most common posterior fossa tumor in children. It classically presents as a cystic mass with a brightly enhancing mural nodule in the cerebellum. Histology shows biphasic pattern with compact piloid areas (Rosenthal fibers) and loose microcystic areas (eosinophilic granular bodies). It is often associated with NF1 (optic pathway glioma). Surgical resection is usually curative with >90% 10-year survival.",
      optionExplanations: ["Incorrect: Medulloblastoma is a solid, homogeneously enhancing midline posterior fossa tumor, not a cystic mass with a mural nodule.", "Correct: Pilocytic astrocytoma is the classic cystic posterior fossa tumor with an enhancing mural nodule in children; WHO grade I with excellent prognosis.", "Incorrect: Ependymoma arises from the fourth ventricle floor and extends through the foramina of Luschka; it is not a cystic mass with a mural nodule.", "Incorrect: Hemangioblastoma can appear cystic with a mural nodule but is more common in adults and is associated with VHL syndrome.", "Incorrect: Atypical teratoid/rhabdoid tumor (ATRT) affects infants and is a solid, aggressive mass with INI1/SMARCB1 deletion."],
      highYieldPoint: "Pilocytic astrocytoma: most common pediatric brain tumor; cystic + mural nodule, posterior fossa; Rosenthal fibers; WHO grade I, excellent prognosis."
    },
    {
      vignette: "A 50-year-old man presents with progressive lower back pain and bilateral leg weakness. MRI of the spine reveals an intradural, intramedullary mass at the T8-T10 level. The mass is enhancing and appears to arise from within the spinal cord substance.",
      question: "What is the most common intramedullary spinal cord tumor in adults?",
      options: ["Meningioma", "Schwannoma", "Metastatic carcinoma", "Astrocytoma", "Ependymoma"],
      correctIndex: 4,
      explanation: "Ependymoma is the most common intramedullary spinal cord tumor in adults, arising from ependymal cells lining the central canal. In the spinal cord, ependymomas are well-circumscribed and may be amenable to gross total resection. The myxopapillary ependymoma variant specifically occurs at the filum terminale/conus medullaris region. In contrast, astrocytomas are the most common intramedullary tumors in children. Schwannomas and meningiomas are the most common intradural extramedullary tumors.",
      optionExplanations: ["Incorrect: Meningiomas are intradural extramedullary tumors, not intramedullary.", "Incorrect: Schwannomas are intradural extramedullary tumors arising from nerve roots, not from within the cord.", "Incorrect: Metastatic disease is the most common overall spinal tumor but typically presents as extradural (epidural), not intramedullary.", "Incorrect: Astrocytoma is the most common intramedullary tumor in children, not adults.", "Correct: Ependymoma is the most common intramedullary spinal cord tumor in adults."],
      highYieldPoint: "Spinal cord tumors: intramedullary — ependymoma (adults), astrocytoma (children); extramedullary intradural — schwannoma, meningioma; extradural — metastases (#1 overall)."
    },
    {
      vignette: "A 55-year-old woman presents with bitemporal hemianopia, amenorrhea, and galactorrhea. MRI reveals a 2.5-cm sellar mass with suprasellar extension compressing the optic chiasm. Serum prolactin is 350 ng/mL.",
      question: "What is the most appropriate initial treatment?",
      options: ["Transsphenoidal surgical resection", "External beam radiation therapy", "Cabergoline (dopamine agonist)", "Octreotide (somatostatin analog)", "Observation with serial imaging"],
      correctIndex: 2,
      explanation: "Prolactinomas are the most common functioning pituitary adenomas. Even large macroprolactinomas (>1 cm) with visual field compromise are initially treated medically with dopamine agonists (cabergoline or bromocriptine), as these medications effectively reduce both prolactin secretion and tumor size in the vast majority of patients. Cabergoline is preferred due to superior efficacy and fewer side effects. Surgery is reserved for cases refractory to medical therapy. A serum prolactin >200 ng/mL strongly suggests a prolactinoma.",
      optionExplanations: ["Incorrect: Surgery is not first-line for prolactinomas; dopamine agonists are effective even for macroadenomas.", "Incorrect: Radiation therapy is reserved for refractory cases after both medical and surgical options have been exhausted.", "Correct: Cabergoline (dopamine agonist) is the first-line treatment for prolactinomas regardless of size, as it reduces tumor volume and normalizes prolactin.", "Incorrect: Octreotide is used for GH-secreting adenomas (acromegaly), not prolactinomas.", "Incorrect: Observation is not appropriate with visual field compromise from optic chiasm compression."],
      highYieldPoint: "Prolactinoma: most common pituitary adenoma; first-line = dopamine agonist (cabergoline) even for macroprolactinomas; surgery only if medication fails."
    },
    {
      vignette: "A 4-year-old boy presents with progressive difficulty walking, truncal ataxia, and morning vomiting. MRI shows a fourth ventricle mass arising from the floor of the ventricle, extending through the foramen of Luschka into the cerebellopontine angle. Histology shows perivascular pseudorosettes.",
      question: "What is the most likely diagnosis?",
      options: ["Medulloblastoma", "Pilocytic astrocytoma", "Ependymoma", "Choroid plexus carcinoma", "Hemangioblastoma"],
      correctIndex: 2,
      explanation: "Ependymoma is the third most common posterior fossa tumor in children. It arises from ependymal cells lining the fourth ventricle and characteristically extends through the foramina of Luschka ('plastic' growth pattern). Histology shows perivascular pseudorosettes (tumor cells arranged around blood vessels with an eosinophilic, fibrillary zone) and occasionally true ependymal rosettes. Unlike medulloblastoma, ependymoma is typically more lateral and has a lower rate of CSF dissemination.",
      optionExplanations: ["Incorrect: Medulloblastoma typically arises from the vermis (midline), shows Homer Wright rosettes, and does not characteristically extend through the foramina.", "Incorrect: Pilocytic astrocytoma is typically a cystic cerebellar hemisphere mass with a mural nodule, showing Rosenthal fibers.", "Correct: Ependymoma arises from the fourth ventricle floor, extends through foramina, and shows perivascular pseudorosettes on histology.", "Incorrect: Choroid plexus carcinoma is rare, arises from choroid plexus epithelium, and typically presents in the lateral ventricles of infants.", "Incorrect: Hemangioblastoma is primarily an adult tumor associated with VHL, not a pediatric fourth ventricle mass."],
      highYieldPoint: "Ependymoma: fourth ventricle, 'plastic' extension through foramina of Luschka; perivascular pseudorosettes; myxopapillary variant at filum terminale."
    },
    {
      vignette: "A 48-year-old woman presents with a seizure. MRI shows a well-circumscribed, homogeneously enhancing extra-axial mass at the left cerebellopontine angle. Audiometry reveals right-sided sensorineural hearing loss. She has no features of NF2.",
      question: "From which cell type does this tumor most likely arise?",
      options: ["Arachnoid cap cells", "Schwann cells", "Ependymal cells", "Astrocytes", "Oligodendrocytes"],
      correctIndex: 1,
      explanation: "Schwannomas (also called neurilemmomas) arise from Schwann cells of the peripheral nerve sheath. Vestibular schwannomas (acoustic neuromas) are the most common cerebellopontine angle tumors, arising from the vestibular portion of CN VIII. They present with progressive unilateral sensorineural hearing loss, tinnitus, and vestibular dysfunction. Histologically, they show Antoni A (compact, organized cells with Verocay bodies) and Antoni B (loose, myxoid) patterns. Sporadic unilateral schwannomas are not associated with NF2.",
      optionExplanations: ["Incorrect: Arachnoid cap cells give rise to meningiomas, the second most common cerebellopontine angle tumor.", "Correct: Schwannomas arise from Schwann cells; vestibular schwannomas are the most common cerebellopontine angle tumor.", "Incorrect: Ependymal cells give rise to ependymomas, which are intraventricular tumors.", "Incorrect: Astrocytes give rise to astrocytomas, which are intra-axial tumors.", "Incorrect: Oligodendrocytes give rise to oligodendrogliomas, which are cortical intra-axial tumors."],
      highYieldPoint: "Vestibular schwannoma: Schwann cells, CN VIII, cerebellopontine angle; Antoni A (Verocay bodies) + Antoni B patterns; bilateral = NF2."
    },
    {
      vignette: "A 15-year-old boy presents with diabetes insipidus, visual field defects, and delayed puberty. MRI shows a suprasellar enhancing mass with an infundibular stalk lesion. Biopsy reveals a germinoma. Serum beta-hCG is mildly elevated.",
      question: "What is the most common location for intracranial germ cell tumors?",
      options: ["Posterior fossa", "Cerebellopontine angle", "Spinal cord", "Intraventricular (lateral ventricle)", "Pineal and suprasellar regions"],
      correctIndex: 4,
      explanation: "Intracranial germ cell tumors (GCTs) most commonly arise in the pineal and suprasellar regions. Germinomas are the most common type and are highly radiosensitive with an excellent prognosis. They are more common in males, particularly for pineal lesions (10:1 male predominance). Pineal germinomas can cause Parinaud syndrome (dorsal midbrain syndrome: vertical gaze palsy, convergence-retraction nystagmus, light-near dissociation). Suprasellar germinomas present with diabetes insipidus and hypopituitarism.",
      optionExplanations: ["Incorrect: Posterior fossa is the most common location for medulloblastoma and pilocytic astrocytoma, not germ cell tumors.", "Incorrect: The cerebellopontine angle is the location for schwannomas and meningiomas.", "Incorrect: Spinal cord germ cell tumors are extremely rare.", "Incorrect: Lateral ventricle tumors include choroid plexus papillomas and subependymal giant cell astrocytomas (tuberous sclerosis).", "Correct: The pineal and suprasellar regions are the most common locations for intracranial germ cell tumors."],
      highYieldPoint: "Intracranial GCTs: pineal (male predominance, Parinaud syndrome) and suprasellar (DI, hypopituitarism); germinoma = radiosensitive, excellent prognosis."
    }
  ]

};

const NEURO_SUMMARIES = {

  "Neuroanatomy & pathways": {
    sections: [
      {
        heading: "Spinal Cord Tracts",
        bullets: [
          "Dorsal columns (fasciculus gracilis/cuneatus): proprioception, vibration, fine touch, 2-point discrimination; ascend ipsilaterally → synapse in nucleus gracilis/cuneatus → decussate as medial lemniscus → VPL thalamus",
          "Lateral corticospinal tract: voluntary motor; descends from motor cortex → decussates at medullary pyramids → synapses on anterior horn cells",
          "Spinothalamic tract: pain and temperature; enter cord → synapse in dorsal horn → decussate in anterior white commissure (1-2 levels above entry) → ascend contralaterally → VPL thalamus",
          "Spinocerebellar tracts: unconscious proprioception to cerebellum for coordination"
        ]
      },
      {
        heading: "Spinal Cord Lesion Syndromes",
        bullets: [
          "Brown-Séquard (hemisection): ipsilateral UMN paralysis + dorsal column loss; contralateral pain/temp loss 1-2 levels below",
          "Anterior cord syndrome: bilateral motor + pain/temp loss; spared proprioception; anterior spinal artery occlusion",
          "Central cord syndrome: UE > LE weakness (hands/arms), cape-like pain/temp loss; syringomyelia or hyperextension injury in elderly",
          "Posterior cord syndrome: bilateral proprioception/vibration loss; tabes dorsalis (tertiary syphilis), B12 deficiency",
          "Complete transection: bilateral loss of all modalities below lesion; spinal shock initially (flaccid), then UMN signs develop",
          "Cauda equina syndrome: LMN signs, saddle anesthesia, bowel/bladder dysfunction; nerve roots below L2"
        ]
      },
      {
        heading: "Key Brainstem and Thalamic Anatomy",
        bullets: [
          "Internal capsule posterior limb: corticospinal tract (pure motor hemiparesis if infarcted)",
          "Thalamic nuclei: VPL (body sensation), VPM (face sensation), VL (motor — cerebellum/basal ganglia input), LGN (vision), MGN (hearing), anterior (memory — Papez circuit)",
          "Brainstem cranial nerve levels: midbrain (III, IV), pons (V, VI, VII, VIII), medulla (IX, X, XI, XII)",
          "MLF: connects CN VI to contralateral CN III for conjugate gaze; lesion → internuclear ophthalmoplegia"
        ]
      },
      {
        heading: "Visual Pathway Lesions",
        bullets: [
          "Optic nerve: ipsilateral monocular blindness",
          "Optic chiasm: bitemporal hemianopia (pituitary adenoma compressing crossing nasal fibers)",
          "Optic tract: contralateral homonymous hemianopia",
          "Meyer loop (temporal): contralateral superior quadrantanopia ('pie in the sky')",
          "Dorsal optic radiation (parietal): contralateral inferior quadrantanopia ('pie on the floor')",
          "Occipital cortex: contralateral homonymous hemianopia with macular sparing"
        ]
      }
    ],
    table: {
      title: "Spinal Cord Lesion Syndromes",
      headers: ["Syndrome","Tracts Affected","Key Findings","Classic Cause"],
      rows: [
        ["Brown-Séquard","Ipsi CST + DC; contra STT","Ipsi paralysis + proprioception loss; contra pain/temp loss","Penetrating trauma"],
        ["Anterior cord","Bilateral CST + STT","Bilateral motor + pain/temp loss; spared proprioception","Anterior spinal artery occlusion"],
        ["Central cord","Central gray + crossing STT fibers","UE > LE weakness; cape-like pain/temp loss","Syringomyelia, hyperextension injury"],
        ["Posterior cord","Dorsal columns","Bilateral proprioception/vibration loss","Tabes dorsalis, B12 deficiency"],
        ["Cauda equina","Nerve roots below L2","LMN signs, saddle anesthesia, bowel/bladder dysfunction","Disc herniation, tumor"]
      ]
    },
    mnemonic: "Dorsal column modalities — 'Don't Very Precisely Touch': Discriminative touch, Vibration, Pressure, propriocepTion. Spinothalamic — 'Pain And Temperature': PAT on the anterolateral cord."
  },

  "Cerebrovascular disease": {
    sections: [
      {
        heading: "Major Stroke Syndromes",
        bullets: [
          "MCA (most common): contralateral face/arm > leg hemiparesis and hemisensory loss, homonymous hemianopia; dominant = aphasia; non-dominant = neglect",
          "ACA: contralateral leg > arm/face weakness, personality changes (abulia, disinhibition), urinary incontinence",
          "PCA: contralateral homonymous hemianopia with macular sparing; also supplies thalamus (Déjerine-Roussy thalamic pain syndrome)",
          "PICA/Wallenberg (lateral medullary): vertigo, dysphagia, ipsilateral Horner, ipsilateral facial pain/temp loss, contralateral body pain/temp loss; NO motor deficit",
          "Basilar artery: locked-in syndrome (ventral pons); consciousness preserved, communication via vertical eye movements/blinking"
        ]
      },
      {
        heading: "Lacunar Stroke Syndromes",
        bullets: [
          "Pure motor hemiparesis: posterior limb of internal capsule or basis pontis",
          "Pure sensory stroke: VPL/VPM thalamus → may develop Déjerine-Roussy thalamic pain",
          "Ataxic hemiparesis: pons or internal capsule",
          "Dysarthria-clumsy hand: pons or internal capsule",
          "Caused by lipohyalinosis of small penetrating arteries; associated with chronic hypertension and diabetes"
        ]
      },
      {
        heading: "Hemorrhagic Stroke",
        bullets: [
          "Hypertensive hemorrhage: putamen (#1) > thalamus > pons > cerebellum; lenticulostriate artery Charcot-Bouchard microaneurysms",
          "Subarachnoid hemorrhage: thunderclap headache; 85% from berry aneurysms (AComm most common); vasospasm peaks at days 4-12, treat/prevent with nimodipine",
          "Epidural hematoma: middle meningeal artery, biconvex/lenticular, lucid interval; does NOT cross suture lines",
          "Subdural hematoma: bridging veins, crescent-shaped; crosses suture lines; elderly, anticoagulants, trauma",
          "Cerebellar hemorrhage >3 cm: emergency posterior fossa decompression; LP contraindicated"
        ]
      },
      {
        heading: "Acute Stroke Management",
        bullets: [
          "IV tPA (alteplase): within 4.5 hours of ischemic stroke onset; exclude hemorrhage on CT",
          "Mechanical thrombectomy: large vessel occlusion, up to 24 hours in select patients with salvageable penumbra",
          "Aspirin within 24-48 hours (after excluding hemorrhage and if not given tPA within 24 hours)",
          "Secondary prevention: anticoagulation for AFib (DOAC preferred); CEA for symptomatic ICA stenosis ≥70%",
          "Blood pressure: permissive hypertension in acute ischemic stroke (do not lower unless >220/120 or if tPA given)"
        ]
      }
    ],
    table: {
      title: "Arterial Stroke Syndromes",
      headers: ["Artery","Territory","Key Deficits","Distinguishing Feature"],
      rows: [
        ["MCA","Lateral cortex, basal ganglia","Face/arm > leg weakness, aphasia/neglect","Most common embolic stroke"],
        ["ACA","Medial frontal/parietal","Leg > arm weakness, abulia","Personality changes"],
        ["PCA","Occipital, inferior temporal","Homonymous hemianopia","Macular sparing"],
        ["PICA","Lateral medulla","Wallenberg syndrome","No motor deficit"],
        ["Basilar","Ventral pons","Locked-in syndrome","Preserved consciousness"],
        ["Lenticulostriate","Basal ganglia, internal capsule","Pure motor or lacunar syndromes","Hypertensive hemorrhage site"]
      ]
    },
    mnemonic: "SAH complications — 'RASH-V': Re-bleeding, Anosmia (subfrontal injury), Seizures, Hydrocephalus, Vasospasm (days 4-12, treat with nimodipine)."
  },

  "Neurodegenerative disease": {
    sections: [
      {
        heading: "Alzheimer Disease",
        bullets: [
          "Most common cause of dementia; progressive memory loss → language → visuospatial → executive function decline",
          "Pathology: extracellular amyloid-β (Aβ) plaques (from APP cleavage by β- and γ-secretase) and intracellular neurofibrillary tangles (hyperphosphorylated tau protein)",
          "Neurotransmitter: ↓ acetylcholine (nucleus basalis of Meynert degeneration)",
          "Treatment: AChE inhibitors (donepezil, rivastigmine, galantamine) for mild-moderate; add memantine (NMDA antagonist) for moderate-severe",
          "Genetics: early-onset = presenilin-1 (chr 14, most common), presenilin-2 (chr 1), APP (chr 21); late-onset risk = ApoE4 (chr 19)",
          "Down syndrome (trisomy 21): virtually all develop AD pathology by age 40 (APP gene on chromosome 21)"
        ]
      },
      {
        heading: "Parkinson Disease & Related Disorders",
        bullets: [
          "Parkinson: loss of dopaminergic neurons in substantia nigra pars compacta; Lewy bodies (α-synuclein); TRAP = Tremor (resting, pill-rolling), Rigidity (cogwheel), Akinesia/bradykinesia, Postural instability",
          "Treatment: carbidopa-levodopa (gold standard); dopamine agonists (pramipexole, ropinirole); MAO-B inhibitors (selegiline, rasagiline); COMT inhibitors (entacapone, tolcapone)",
          "Levodopa complications: wearing-off, on-off, peak-dose dyskinesia; carbidopa prevents peripheral decarboxylation",
          "Dementia with Lewy bodies: visual hallucinations + fluctuating cognition + parkinsonism + REM sleep behavior disorder; cortical Lewy bodies; antipsychotic sensitivity",
          "Multiple system atrophy: parkinsonism + autonomic failure (orthostatic hypotension) + cerebellar ataxia; glial cytoplasmic inclusions (α-synuclein)",
          "Progressive supranuclear palsy: vertical gaze palsy (especially downgaze), early falls, axial rigidity; tau pathology"
        ]
      },
      {
        heading: "Other Neurodegenerative Diseases",
        bullets: [
          "Huntington disease: CAG repeats on chr 4 (huntingtin gene); autosomal dominant with anticipation; caudate atrophy; chorea, dementia, psychiatric symptoms; ↓ GABA/ACh in striatum",
          "ALS: UMN + LMN signs, spares sensation/eye movements/bowel/bladder; ~10% familial (SOD1 most known); riluzole modestly extends survival; edaravone as adjunct",
          "MS: autoimmune CNS demyelination; relapsing-remitting most common; Dawson fingers, oligoclonal bands in CSF; optic neuritis, INO, Lhermitte sign; treat with disease-modifying therapies (interferons, natalizumab, ocrelizumab)",
          "Friedreich ataxia: GAA repeat in frataxin (chr 9); autosomal recessive; dorsal columns + spinocerebellar + corticospinal degeneration; hypertrophic cardiomyopathy (#1 cause of death)",
          "CJD: prion disease (PrPSc); rapidly progressive dementia + myoclonus + periodic sharp waves on EEG; spongiform degeneration; death within 1 year"
        ]
      },
      {
        heading: "Demyelinating & Autoimmune Conditions",
        bullets: [
          "GBS: ascending paralysis, areflexia, albuminocytologic dissociation; molecular mimicry (Campylobacter #1); IVIG or plasmapheresis",
          "NMOSD (Devic): anti-AQP4 antibodies; optic neuritis + longitudinally extensive transverse myelitis (≥3 segments); do NOT treat with interferon-β",
          "Myasthenia gravis: anti-AChR antibodies (85%); fatigable weakness; thymoma association; treat with AChE inhibitors, immunosuppression, thymectomy",
          "Lambert-Eaton: anti-VGCC antibodies; proximal weakness that improves with use; associated with small cell lung cancer"
        ]
      }
    ],
    table: {
      title: "Neurodegenerative Disease Comparison",
      headers: ["Disease","Key Pathology","Gene/Protein","Classic Presentation"],
      rows: [
        ["Alzheimer","Amyloid plaques + tau tangles","APP, presenilin, ApoE4","Progressive memory loss"],
        ["Parkinson","Lewy bodies (α-synuclein), SNpc loss","SNCA, LRRK2, parkin","TRAP: tremor, rigidity, akinesia, postural instability"],
        ["Huntington","Caudate atrophy","Huntingtin (CAG, chr 4)","Chorea, dementia, psychiatric symptoms"],
        ["ALS","UMN + LMN degeneration","SOD1 (familial)","Mixed UMN/LMN signs, spared sensation"],
        ["MS","Periventricular demyelinating plaques","HLA-DR2 associated","Optic neuritis, INO, relapsing-remitting course"],
        ["CJD","Spongiform degeneration","PrPSc (prion)","Rapid dementia, myoclonus, death < 1 year"]
      ]
    },
    mnemonic: "Parkinson TRAP: Tremor (resting), Rigidity (cogwheel), Akinesia/bradykinesia, Postural instability. Huntington: 'Caudate + Chorea on Chromosome 4 with CAG.'"
  },

  "Seizure disorders": {
    sections: [
      {
        heading: "Seizure Classification",
        bullets: [
          "Focal (partial): originates in one hemisphere; aware (simple partial) vs. impaired awareness (complex partial); may secondarily generalize",
          "Generalized: involves both hemispheres from onset; includes absence, tonic-clonic, myoclonic, tonic, atonic, clonic",
          "Absence: 3-Hz spike-and-wave, staring spells in children, no postictal state; provoked by hyperventilation",
          "Tonic-clonic (grand mal): tonic phase (stiffening) → clonic phase (rhythmic jerking) → postictal confusion; tongue biting, incontinence",
          "Myoclonic: sudden brief muscle jerks; JME = morning myoclonic jerks in adolescents",
          "Atonic (drop attacks): sudden loss of muscle tone → falls; Lennox-Gastaut syndrome"
        ]
      },
      {
        heading: "Epilepsy Syndromes",
        bullets: [
          "Childhood absence epilepsy: 4-10 years, 3-Hz spike-and-wave, responds to ethosuximide or valproate",
          "Juvenile myoclonic epilepsy: adolescence, morning myoclonic jerks + GTCs, 4-6 Hz polyspike-and-wave, lifelong treatment needed",
          "West syndrome (infantile spasms): infantile spasms + hypsarrhythmia + developmental regression; treat with ACTH or vigabatrin",
          "Lennox-Gastaut: multiple seizure types (tonic, atonic, atypical absence), slow (<2.5 Hz) spike-and-wave, intellectual disability",
          "Benign rolandic epilepsy (BECTS): centrotemporal spikes, nocturnal facial/arm seizures, self-limited",
          "Temporal lobe epilepsy: most common focal epilepsy; olfactory/gustatory aura, automatisms, postictal confusion; mesial temporal sclerosis"
        ]
      },
      {
        heading: "Antiepileptic Drug Mechanisms",
        bullets: [
          "Na⁺ channel blockers: phenytoin, carbamazepine, lamotrigine, oxcarbazepine, lacosamide — use-dependent blockade of rapidly firing neurons",
          "GABA-A enhancers: benzodiazepines (↑ frequency of Cl⁻ channel opening), barbiturates (↑ duration of Cl⁻ channel opening)",
          "GABA metabolism: vigabatrin (irreversible GABA transaminase inhibitor), tiagabine (GABA reuptake inhibitor), valproate (↑ GABA levels + Na⁺ channel block)",
          "T-type Ca²⁺ channel blocker: ethosuximide — first-line for absence seizures",
          "SV2A binding: levetiracetam — broad-spectrum, minimal CYP interactions, safe in pregnancy",
          "Glutamate antagonist: perampanel (AMPA receptor antagonist)"
        ]
      },
      {
        heading: "Important AED Side Effects & Pharmacology",
        bullets: [
          "Phenytoin: zero-order kinetics (narrow therapeutic window), gingival hyperplasia, hirsutism, megaloblastic anemia (↓ folate), teratogenic (fetal hydantoin syndrome), SJS/TEN, CYP inducer",
          "Carbamazepine: SIADH (hyponatremia), SJS/TEN (screen HLA-B*15:02), agranulocytosis, aplastic anemia, CYP inducer; autoinduces own metabolism",
          "Valproate: neural tube defects (#1 teratogenic AED), hepatotoxicity, pancreatitis, thrombocytopenia, weight gain; CYP inhibitor",
          "Lamotrigine: SJS/TEN (risk ↑ with rapid titration, especially with concurrent valproate), generally well-tolerated",
          "Levetiracetam: behavioral changes (irritability, aggression); minimal drug interactions",
          "Status epilepticus protocol: 1st line = IV benzodiazepines → 2nd line = fosphenytoin/valproate/levetiracetam → refractory = propofol/midazolam/pentobarbital"
        ]
      }
    ],
    table: {
      title: "Antiepileptic Drug Quick Reference",
      headers: ["Drug","Mechanism","Primary Use","Key Side Effects"],
      rows: [
        ["Ethosuximide","T-type Ca²⁺ channel blocker","Absence seizures only","GI upset, Steven-Johnson (rare)"],
        ["Phenytoin","Na⁺ channel blocker","Focal + GTC","Gingival hyperplasia, zero-order kinetics, SJS"],
        ["Carbamazepine","Na⁺ channel blocker","Focal + GTC, trigeminal neuralgia","SIADH, SJS, agranulocytosis"],
        ["Valproate","↑ GABA, Na⁺ block, T-Ca²⁺ block","Broad-spectrum (all types)","Neural tube defects, hepatotoxicity, pancreatitis"],
        ["Lamotrigine","Na⁺ channel blocker","Focal + GTC, bipolar","SJS (slow titration required)"],
        ["Levetiracetam","SV2A binding","Broad-spectrum","Behavioral changes, minimal interactions"],
        ["Lorazepam","GABA-A enhancer (↑ Cl⁻ frequency)","Status epilepticus (1st line)","Sedation, respiratory depression"]
      ]
    },
    mnemonic: "Absence seizure first-line — 'ETHOSuximide for ETHOS (staring into space).' Status epilepticus: 'BEfore PHEnomenal REsults' = BEnzodiazepine → PHEnytoin → REfractory agents."
  },

  "Ophthalmology & otology": {
    sections: [
      {
        heading: "Glaucoma",
        bullets: [
          "Open-angle (POAG): painless, insidious peripheral vision loss, elevated IOP, optic disc cupping (↑ cup-to-disc ratio); risk factors: age, African American, family history",
          "POAG treatment: prostaglandin analogs (latanoprost — ↑ uveoscleral outflow, 1st line), β-blockers (timolol — ↓ aqueous production), α-agonists (brimonidine), carbonic anhydrase inhibitors (dorzolamide)",
          "Acute angle-closure: sudden severe eye pain, nausea/vomiting, mid-dilated non-reactive pupil, hazy cornea; emergency treatment with pilocarpine + timolol + IV acetazolamide → definitive = laser iridotomy",
          "Avoid mydriatics in angle-closure glaucoma (anticholinergics, sympathomimetics); can precipitate acute attack"
        ]
      },
      {
        heading: "Retinal Conditions",
        bullets: [
          "Central retinal artery occlusion: sudden painless monocular vision loss, pale retina with cherry-red spot; embolic source (carotid, heart)",
          "Central retinal vein occlusion: sudden painless vision loss, 'blood and thunder' fundus (diffuse hemorrhages); risk factors: hypertension, diabetes, glaucoma",
          "Retinal detachment: flashes → floaters → 'curtain' visual field loss; emergency surgical repair (pneumatic retinopexy, scleral buckle, vitrectomy)",
          "Diabetic retinopathy: non-proliferative (microaneurysms, dot-blot hemorrhages, hard exudates, cotton-wool spots) → proliferative (neovascularization → vitreous hemorrhage/tractional detachment)",
          "AMD: dry (drusen, geographic atrophy, 90%) vs. wet (choroidal neovascularization, rapid central vision loss, 10%); wet AMD: anti-VEGF treatment"
        ]
      },
      {
        heading: "Other Eye Conditions",
        bullets: [
          "Anterior uveitis: pain, photophobia, ciliary flush, cells/flare; HLA-B27 association (ankylosing spondylitis, reactive arthritis, IBD)",
          "Retinoblastoma: leukocoria in children; RB1 gene (13q14); Knudson two-hit hypothesis",
          "Mucormycosis: DKA + black nasal eschar + rhinocerebral invasion; wide non-septate hyphae branching at 90°; treat with amphotericin B + surgical debridement",
          "Optic neuritis: painful monocular vision loss with pain on eye movement; afferent pupillary defect; strongly associated with MS"
        ]
      },
      {
        heading: "Otology",
        bullets: [
          "Sensorineural hearing loss (SNHL): cochlea/CN VIII dysfunction; Weber lateralizes to unaffected ear, Rinne: AC > BC (same as normal but decreased)",
          "Conductive hearing loss (CHL): external/middle ear; Weber lateralizes to affected ear, Rinne: BC > AC",
          "Otosclerosis: stapes fixation → CHL + paracusis of Willis + normal otoscopy; treat with stapedectomy",
          "Ménière disease: endolymphatic hydrops → episodic vertigo (20 min–hrs) + fluctuating SNHL (low-frequency) + tinnitus + aural fullness; low-salt diet, diuretics",
          "BPPV: otoconia in posterior semicircular canal → brief positional vertigo; Dix-Hallpike test → Epley maneuver",
          "Vestibular neuritis: post-viral acute constant vertigo, no hearing loss; vs. labyrinthitis (vertigo + hearing loss)"
        ]
      }
    ],
    table: {
      title: "Causes of Vertigo",
      headers: ["Condition","Duration","Hearing Loss","Key Feature","Treatment"],
      rows: [
        ["BPPV","Seconds","No","Positional, Dix-Hallpike positive","Epley maneuver"],
        ["Ménière disease","20 min – hours","Yes (fluctuating, low-freq)","Aural fullness, tinnitus","Low-salt diet, diuretics"],
        ["Vestibular neuritis","Days","No","Post-viral, constant","Vestibular rehab, short-term suppressants"],
        ["Labyrinthitis","Days","Yes","Post-viral, constant + hearing loss","Supportive, corticosteroids"],
        ["Acoustic neuroma","Progressive","Yes (unilateral SNHL)","CPA mass, CN V/VII involvement","Surgery or radiosurgery"]
      ]
    },
    mnemonic: "Glaucoma drugs — 'Please Trust A Community Doctor': Prostaglandin analogs (latanoprost), Timolol (β-blocker), Alpha agonists (brimonidine), Carbonic anhydrase inhibitors (dorzolamide), Direct miotic (pilocarpine — for angle-closure)."
  },

  "Neuro-oncology": {
    sections: [
      {
        heading: "Adult Brain Tumors",
        bullets: [
          "Glioblastoma (GBM, WHO grade IV): most common malignant primary brain tumor in adults; butterfly lesion, pseudopalisading necrosis, microvascular proliferation; median survival ~15 months; temozolomide + radiation",
          "Meningioma: most common primary intracranial tumor overall; extra-axial, dural-based, dural tail sign, psammoma bodies; mostly benign; associated with NF2 and radiation",
          "Oligodendroglioma: 'fried egg' cells, 'chicken wire' capillaries, cortical calcifications; 1p/19q co-deletion = better prognosis + chemo-responsive; IDH mutant",
          "Schwannoma: Schwann cells, Antoni A (Verocay bodies) + Antoni B; vestibular schwannoma at CPA = most common CPA tumor; bilateral = NF2",
          "Primary CNS lymphoma: periventricular, homogeneously enhancing; EBV-associated in AIDS; vs. toxoplasmosis (multiple ring-enhancing, basal ganglia)",
          "Brain metastases: most common intracranial tumors overall; gray-white junction, multiple; lung > breast > melanoma > RCC > colon"
        ]
      },
      {
        heading: "Pediatric Brain Tumors",
        bullets: [
          "Pilocytic astrocytoma (WHO grade I): most common pediatric brain tumor; cystic + enhancing mural nodule, posterior fossa; Rosenthal fibers; excellent prognosis; associated with NF1",
          "Medulloblastoma: most common malignant pediatric brain tumor; posterior fossa midline, small round blue cells, Homer Wright rosettes; CSF dissemination (drop mets); craniospinal irradiation",
          "Ependymoma: fourth ventricle, extends through foramina of Luschka; perivascular pseudorosettes; myxopapillary variant at filum terminale",
          "Craniopharyngioma: Rathke pouch remnant; suprasellar, calcified, cystic ('machinery oil'); bimodal age; bitemporal hemianopia + hypopituitarism + DI",
          "Atypical teratoid/rhabdoid tumor (ATRT): infants, aggressive, INI1/SMARCB1 deletion"
        ]
      },
      {
        heading: "Pituitary and Sellar Region Tumors",
        bullets: [
          "Prolactinoma: most common functioning pituitary adenoma; first-line = dopamine agonist (cabergoline) even for macroprolactinomas",
          "GH-secreting adenoma: acromegaly (adults) or gigantism (children); treat with surgery, octreotide, pegvisomant",
          "ACTH-secreting adenoma: Cushing disease; transsphenoidal resection",
          "Non-functioning adenomas: mass effect → bitemporal hemianopia, hypopituitarism",
          "Craniopharyngioma: calcified suprasellar cyst; adamantinomatous (children) vs. papillary (adults)"
        ]
      },
      {
        heading: "Neurocutaneous Syndromes & Brain Tumors",
        bullets: [
          "NF1 (chr 17, neurofibromin): neurofibromas, optic glioma, café-au-lait spots, Lisch nodules, axillary/inguinal freckling",
          "NF2 (chr 22, merlin): bilateral vestibular schwannomas (pathognomonic), meningiomas, ependymomas",
          "Tuberous sclerosis (TSC1/TSC2): cortical tubers, subependymal giant cell astrocytoma (SEGA), cardiac rhabdomyoma, renal angiomyolipoma, ash-leaf spots, seizures",
          "VHL (chr 3p25): hemangioblastomas (cerebellum/retina/spinal cord), bilateral clear cell RCC, pheochromocytoma; ↑ HIF/VEGF",
          "Li-Fraumeni (TP53): sarcomas, breast cancer, leukemias, brain tumors (early-onset, multiple primary cancers)"
        ]
      }
    ],
    table: {
      title: "Primary Brain Tumors — Key Features",
      headers: ["Tumor","WHO Grade","Location","Histology","Molecular/Genetic"],
      rows: [
        ["Glioblastoma","IV","Cerebral hemispheres (adults)","Pseudopalisading necrosis, microvascular proliferation","IDH-wildtype; MGMT methylation predicts temozolomide response"],
        ["Meningioma","I-III","Extra-axial, dural-based","Whorled pattern, psammoma bodies","NF2 (merlin) loss"],
        ["Oligodendroglioma","II-III","Cortex (frontal lobe)","Fried egg cells, chicken wire vessels","1p/19q co-deletion, IDH mutant"],
        ["Pilocytic astrocytoma","I","Posterior fossa (children)","Rosenthal fibers, eosinophilic granular bodies","BRAF fusion; NF1 associated"],
        ["Medulloblastoma","IV","Posterior fossa midline (children)","Small round blue cells, Homer Wright rosettes","WNT, SHH, Group 3/4 subgroups"],
        ["Schwannoma","I","CPA (CN VIII)","Antoni A (Verocay bodies), Antoni B","NF2 (bilateral)"],
        ["Ependymoma","II-III","Fourth ventricle, spinal cord","Perivascular pseudorosettes","RELA fusion (supratentorial)"],
        ["Craniopharyngioma","I","Suprasellar","Wet keratin, calcification (adamantinomatous)","CTNNB1 (adamantinomatous), BRAF V600E (papillary)"]
      ]
    },
    mnemonic: "Posterior fossa tumors in children — 'Please Eat My Ependymoma': Pilocytic astrocytoma (#1 overall), Ependymoma, Medulloblastoma (#1 malignant). Adult brain tumor frequency: Metastases > Meningioma > GBM."
  }

};
