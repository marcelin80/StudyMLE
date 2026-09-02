const BEHAV_QUESTIONS = {

  "Psychiatric disorders": [
    {
      vignette: "A 24-year-old woman is brought to the emergency department by her roommate who reports the patient has not slept in 4 days, has been spending excessively on credit cards, and was recently fired from her job after an argument with her supervisor. On examination, the patient speaks rapidly, jumps between topics, and states she is starting a tech company that will 'change the world.' She has no history of substance use.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Bipolar I disorder, manic episode","Major depressive disorder","Cyclothymic disorder","Schizoaffective disorder","Bipolar II disorder, hypomanic episode"],
      correctIndex: 0,
      explanation: "This patient presents with a classic manic episode: decreased need for sleep, grandiosity, pressured speech, flight of ideas, excessive involvement in risky activities (spending sprees), and functional impairment (job loss). A manic episode lasting ≥7 days (or requiring hospitalization) defines bipolar I disorder. Bipolar II involves hypomanic episodes, which do not cause marked functional impairment.",
      optionExplanations: ["Correct: The combination of grandiosity, decreased sleep, pressured speech, flight of ideas, and risky behavior for more than a week with functional impairment meets DSM-5 criteria for a manic episode, establishing bipolar I disorder.","Incorrect: Major depressive disorder does not include manic episodes. This patient's predominant symptoms are mania, not depression.","Incorrect: Cyclothymic disorder involves chronic fluctuating mood disturbance with hypomanic and depressive symptoms that never meet full criteria for manic or major depressive episodes.","Incorrect: Schizoaffective disorder requires concurrent psychotic symptoms with mood episodes, plus psychotic symptoms occurring for ≥2 weeks in the absence of mood symptoms. There is no evidence of psychosis here.","Incorrect: Bipolar II involves hypomanic episodes that do not cause marked functional impairment or require hospitalization. This patient's symptoms are clearly impairing her functioning."],
      highYieldPoint: "Bipolar I = at least one manic episode (≥7 days or hospitalization); Bipolar II = hypomania + major depressive episodes, never full mania."
    },
    {
      vignette: "A 32-year-old man presents to his primary care physician reporting persistent low mood, anhedonia, difficulty concentrating, insomnia, and a 15-pound weight loss over the past 3 months. He has lost interest in activities he once enjoyed and reports feeling worthless. He denies suicidal ideation but states, 'I just don't see the point in anything anymore.'",
      question: "How many of the DSM-5 criteria for a major depressive episode must be present for at least 2 weeks to make the diagnosis?",
      options: ["3 or more","5 or more","4 or more","6 or more","7 or more"],
      correctIndex: 1,
      explanation: "A major depressive episode requires ≥5 of the following 9 symptoms present during the same 2-week period, with at least one being depressed mood or anhedonia: (SIG E CAPS) Sleep changes, Interest loss, Guilt/worthlessness, Energy loss, Concentration difficulty, Appetite/weight change, Psychomotor agitation/retardation, Suicidal ideation. This patient meets criteria with depressed mood, anhedonia, insomnia, weight loss, concentration difficulty, and worthlessness.",
      optionExplanations: ["Incorrect: Three symptoms would be insufficient for a major depressive episode diagnosis.","Correct: DSM-5 requires ≥5 of 9 symptoms over ≥2 weeks, including depressed mood or anhedonia, for a major depressive episode.","Incorrect: Four symptoms do not meet the diagnostic threshold for major depressive disorder.","Incorrect: Six symptoms exceed the minimum threshold; only 5 are required.","Incorrect: Seven is above the diagnostic minimum; only 5 are necessary."],
      highYieldPoint: "MDD diagnosis: ≥5/9 SIG E CAPS symptoms for ≥2 weeks, must include depressed mood or anhedonia."
    },
    {
      vignette: "A 19-year-old college student is brought to the psychiatric emergency room by campus police. Over the past 2 weeks, he has become increasingly withdrawn, is heard talking to himself in his dormitory, and has told his RA that the CIA has implanted a tracking device in his brain. His academic performance has declined sharply. Physical examination and toxicology screen are unremarkable.",
      question: "Which of the following neurotransmitter pathways is most directly implicated in this patient's positive symptoms?",
      options: ["Serotonin deficiency in the raphe nuclei","Mesocortical dopamine hypoactivity","Mesolimbic dopamine hyperactivity","Norepinephrine excess in the locus coeruleus","GABA deficiency in the prefrontal cortex"],
      correctIndex: 2,
      explanation: "Positive symptoms of schizophrenia (hallucinations, delusions, disorganized speech) are attributed to mesolimbic dopamine pathway hyperactivity. The mesolimbic pathway projects from the ventral tegmental area (VTA) to the nucleus accumbens and limbic structures. Typical antipsychotics block D2 receptors in this pathway to reduce positive symptoms.",
      optionExplanations: ["Incorrect: Serotonin deficiency is primarily associated with depression and anxiety disorders, not schizophrenia positive symptoms.","Incorrect: Mesocortical dopamine hypoactivity is associated with negative symptoms (flat affect, social withdrawal, cognitive deficits) and cognitive symptoms, not the positive symptoms described.","Correct: Mesolimbic dopamine hyperactivity is the primary neurochemical basis for positive symptoms (delusions, hallucinations) in schizophrenia.","Incorrect: Norepinephrine excess in the locus coeruleus is associated with anxiety and panic, not psychotic symptoms.","Incorrect: GABA deficiency in the prefrontal cortex may contribute to some aspects of schizophrenia pathophysiology, but mesolimbic dopamine hyperactivity is the primary mechanism for positive symptoms."],
      highYieldPoint: "Positive symptoms of schizophrenia = mesolimbic dopamine excess; Negative symptoms = mesocortical dopamine deficit."
    },
    {
      vignette: "A 45-year-old woman presents with a 6-month history of excessive worry about multiple life domains including her health, finances, and her children's safety. She reports muscle tension, restlessness, difficulty concentrating, and insomnia. She states, 'I know I worry too much but I just can't stop.' She has no history of panic attacks, obsessions, or trauma.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Panic disorder","Social anxiety disorder","Obsessive-compulsive disorder","Generalized anxiety disorder","Adjustment disorder with anxiety"],
      correctIndex: 3,
      explanation: "Generalized anxiety disorder (GAD) is characterized by excessive, uncontrollable worry about multiple domains occurring more days than not for ≥6 months, accompanied by ≥3 of 6 somatic/cognitive symptoms: restlessness, fatigue, difficulty concentrating, irritability, muscle tension, and sleep disturbance. This patient's chronic, diffuse worry with multiple somatic symptoms is classic for GAD.",
      optionExplanations: ["Incorrect: Panic disorder features recurrent unexpected panic attacks with worry about future attacks, not the chronic diffuse worry seen here.","Incorrect: Social anxiety disorder involves marked fear of social situations and scrutiny by others, not generalized worry across multiple domains.","Incorrect: OCD involves intrusive, unwanted thoughts (obsessions) and repetitive behaviors (compulsions). This patient has worry, not obsessions.","Correct: Excessive worry about multiple life domains for ≥6 months with ≥3 associated symptoms (muscle tension, restlessness, poor concentration, insomnia) meets DSM-5 criteria for GAD.","Incorrect: Adjustment disorder requires an identifiable stressor within 3 months and symptoms that resolve within 6 months of the stressor's termination. This patient's chronic symptoms without a clear precipitant favor GAD."],
      highYieldPoint: "GAD = excessive worry about multiple domains for ≥6 months + ≥3 of 6 somatic symptoms (restlessness, fatigue, concentration, irritability, muscle tension, sleep)."
    },
    {
      vignette: "A 28-year-old combat veteran presents 8 months after returning from deployment. He reports recurrent nightmares of an explosion that killed his squad member, avoids loud noises and crowded places, feels emotionally detached from his family, and is constantly hypervigilant. He startles easily at unexpected sounds and has difficulty sleeping.",
      question: "Which of the following symptom clusters is NOT required for the diagnosis of this patient's condition?",
      options: ["Intrusion symptoms","Avoidance of stimuli associated with the trauma","Negative alterations in cognition and mood","Alterations in arousal and reactivity","Dissociative symptoms such as depersonalization"],
      correctIndex: 4,
      explanation: "PTSD requires symptoms from four clusters: (1) intrusion/re-experiencing, (2) avoidance, (3) negative alterations in cognition and mood, and (4) alterations in arousal and reactivity, persisting >1 month with functional impairment. While dissociative symptoms (depersonalization, derealization) can occur and specify a dissociative subtype, they are not a required diagnostic cluster.",
      optionExplanations: ["Incorrect: Intrusion symptoms (nightmares, flashbacks, distressing memories) are required for PTSD diagnosis.","Incorrect: Avoidance of trauma-related stimuli (places, people, thoughts) is a required criterion for PTSD.","Incorrect: Negative alterations in cognition and mood (emotional detachment, inability to feel positive emotions, distorted blame) are required for PTSD.","Incorrect: Alterations in arousal and reactivity (hypervigilance, exaggerated startle, sleep disturbance) are a required cluster for PTSD diagnosis.","Correct: Dissociative symptoms are not a required diagnostic cluster. They define a dissociative subtype of PTSD but are not mandatory for the diagnosis."],
      highYieldPoint: "PTSD requires all 4 clusters: intrusion, avoidance, negative cognition/mood, arousal/reactivity; symptoms >1 month; dissociation is a subtype specifier, not required."
    },
    {
      vignette: "A 35-year-old woman is evaluated for episodes of sudden, intense fear accompanied by palpitations, sweating, trembling, and a feeling that she is 'going to die.' These episodes occur unexpectedly, peak within minutes, and last about 20 minutes. Between episodes, she constantly worries about having another attack and has stopped taking the subway.",
      question: "Which of the following medications is the most appropriate first-line pharmacotherapy for this patient's condition?",
      options: ["A selective serotonin reuptake inhibitor","Buspirone","A benzodiazepine as monotherapy","A typical antipsychotic","A tricyclic antidepressant"],
      correctIndex: 0,
      explanation: "This patient has panic disorder with agoraphobia (avoiding the subway due to fear of panic attacks). SSRIs are the first-line pharmacotherapy for panic disorder. They reduce both the frequency and severity of panic attacks and are effective for the anticipatory anxiety component. Benzodiazepines may be used short-term as adjunctive therapy but are not recommended as monotherapy due to dependence risk.",
      optionExplanations: ["Correct: SSRIs (e.g., sertraline, paroxetine) are first-line pharmacotherapy for panic disorder due to efficacy, safety, and no dependence risk.","Incorrect: Buspirone is a first-line agent for generalized anxiety disorder but has limited efficacy in panic disorder.","Incorrect: Benzodiazepines provide rapid relief but carry risks of dependence and tolerance; they are used short-term as adjunctive therapy, not as first-line monotherapy.","Incorrect: Typical antipsychotics are not indicated for panic disorder and carry significant side effects (EPS, tardive dyskinesia).","Incorrect: TCAs (e.g., imipramine) are effective but are second-line due to side effects (anticholinergic effects, cardiac toxicity, lethality in overdose)."],
      highYieldPoint: "First-line for panic disorder: SSRIs; CBT is equally effective. Benzodiazepines are adjunctive only."
    },
    {
      vignette: "A 22-year-old woman is referred for evaluation of a pattern of unstable interpersonal relationships, impulsivity, and recurrent self-harm. She describes intense fear of abandonment, chronic feelings of emptiness, and rapid mood shifts lasting hours to days. She idealizes her new therapist after one session, stating, 'You're the only person who understands me,' after having described her previous therapist as 'completely useless.'",
      question: "Which personality disorder is most consistent with this presentation?",
      options: ["Histrionic personality disorder","Borderline personality disorder","Narcissistic personality disorder","Antisocial personality disorder","Dependent personality disorder"],
      correctIndex: 1,
      explanation: "Borderline personality disorder (BPD) is characterized by a pervasive pattern of instability in interpersonal relationships, self-image, and affects, with marked impulsivity. Key features include frantic efforts to avoid abandonment, identity disturbance, chronic emptiness, splitting (idealization/devaluation), self-harm, and transient stress-related paranoia or dissociation. The rapid shift from idealization to devaluation (splitting) is particularly characteristic.",
      optionExplanations: ["Incorrect: Histrionic personality disorder involves excessive emotionality and attention-seeking behavior but lacks the self-harm, chronic emptiness, and fear of abandonment seen in BPD.","Correct: The combination of abandonment fears, splitting (idealization/devaluation), chronic emptiness, impulsivity, self-harm, and affective instability is classic for borderline personality disorder.","Incorrect: Narcissistic personality disorder involves grandiosity, need for admiration, and lack of empathy, without the abandonment fears and self-harm characteristic of BPD.","Incorrect: Antisocial personality disorder involves disregard for and violation of others' rights, deceitfulness, and lack of remorse, typically beginning before age 15 as conduct disorder.","Incorrect: Dependent personality disorder involves excessive need to be taken care of with submissive, clinging behavior but lacks the impulsivity, self-harm, and splitting seen in BPD."],
      highYieldPoint: "Borderline PD: splitting (idealization/devaluation), abandonment fear, chronic emptiness, self-harm, identity disturbance. Cluster B."
    },
    {
      vignette: "A 70-year-old man is brought to the emergency department by his wife who states he became acutely confused overnight. He is disoriented to time and place, has difficulty sustaining attention, and his mental status fluctuates throughout the examination. His medical history includes a recent urinary tract infection treated with antibiotics. He was at his baseline cognition yesterday.",
      question: "Which of the following best distinguishes this patient's condition from dementia?",
      options: ["Presence of memory impairment","Gradual onset over weeks to months","Fluctuating level of consciousness and attention","Progressive cognitive decline","Presence of language difficulties"],
      correctIndex: 2,
      explanation: "Delirium is characterized by acute onset, fluctuating course, impaired attention and consciousness, and is usually caused by an underlying medical condition. The key distinguishing features from dementia are the acute onset, fluctuating level of consciousness, and impaired attention. Dementia typically has an insidious onset, is progressive, and consciousness is preserved until late stages.",
      optionExplanations: ["Incorrect: Memory impairment occurs in both delirium and dementia; it is not a distinguishing feature.","Incorrect: Gradual onset is characteristic of dementia, not delirium. Delirium has an acute onset.","Correct: Fluctuating level of consciousness and impaired attention are hallmarks of delirium that distinguish it from dementia, where consciousness is typically preserved.","Incorrect: Progressive cognitive decline is characteristic of dementia, not delirium. Delirium is typically acute and reversible.","Incorrect: Language difficulties can occur in both delirium (disorganized speech) and dementia (aphasia in Alzheimer disease)."],
      highYieldPoint: "Delirium = acute onset, fluctuating consciousness, impaired attention, reversible. Dementia = insidious onset, progressive, alert until late stages."
    },
    {
      vignette: "A 16-year-old girl is brought by her parents for a 6-month history of restricting food intake. She is 5'5\" and weighs 92 pounds (BMI 15.3 kg/m²). She exercises 3 hours daily and insists she is 'too fat.' She has been amenorrheic for 4 months. Physical examination reveals lanugo hair, bradycardia, and hypothermia. Labs show hypokalemia and metabolic alkalosis.",
      question: "Which of the following endocrine findings is most likely in this patient?",
      options: ["Decreased growth hormone and increased IGF-1","Decreased cortisol and increased estrogen","Elevated thyroid hormones and decreased TSH","Elevated cortisol and decreased GnRH","Elevated insulin and decreased glucagon"],
      correctIndex: 3,
      explanation: "Anorexia nervosa causes a stress-mediated increase in cortisol (elevated CRH/ACTH axis) and a decrease in GnRH pulsatility due to low body fat/leptin, leading to hypogonadotropic hypogonadism and amenorrhea. Other findings include low T3 (euthyroid sick syndrome), elevated growth hormone with low IGF-1, and low leptin.",
      optionExplanations: ["Incorrect: Growth hormone is elevated (due to GH resistance), and IGF-1 is decreased in anorexia nervosa, the opposite of what is stated here.","Incorrect: Cortisol is elevated, not decreased, in anorexia nervosa. Estrogen is decreased due to suppressed GnRH.","Incorrect: T3 is typically low (sick euthyroid/low T3 syndrome) in anorexia nervosa, not elevated. The body downregulates metabolism to conserve energy.","Correct: Starvation increases cortisol (stress response) while decreasing GnRH pulsatility (due to low leptin/body fat), causing hypogonadotropic hypogonadism and amenorrhea.","Incorrect: Insulin is decreased in the fasting/starved state of anorexia nervosa, while glucagon is increased to maintain blood glucose."],
      highYieldPoint: "Anorexia nervosa: ↑ cortisol, ↓ GnRH (amenorrhea), ↓ T3, ↑ GH with ↓ IGF-1, ↓ leptin."
    },
    {
      vignette: "A 30-year-old man presents with recurrent, intrusive thoughts that he may have left the stove on, which leads to severe anxiety. To alleviate this anxiety, he checks the stove repeatedly, sometimes returning home from work multiple times a day. He recognizes these thoughts are excessive but cannot control them. The checking rituals take approximately 3 hours daily and have caused him to be late to work repeatedly.",
      question: "Which of the following defense mechanisms is this patient's checking behavior most analogous to?",
      options: ["Intellectualization","Reaction formation","Sublimation","Projection","Undoing"],
      correctIndex: 4,
      explanation: "Undoing is a defense mechanism in which a person attempts to reverse or 'undo' an unacceptable thought, feeling, or action by performing a ritualistic behavior. The patient's repetitive checking of the stove represents an attempt to undo the anxiety-provoking intrusive thought. This concept is closely linked to the compulsive behaviors seen in OCD.",
      optionExplanations: ["Incorrect: Intellectualization involves using abstract thinking or logic to avoid emotional distress rather than engaging in ritualistic behavior.","Incorrect: Reaction formation involves adopting attitudes or behaviors opposite to one's true feelings (e.g., excessive friendliness toward someone one dislikes).","Incorrect: Sublimation is a mature defense mechanism involving channeling unacceptable impulses into socially acceptable activities.","Incorrect: Projection involves attributing one's own unacceptable thoughts or feelings to another person.","Correct: Undoing involves ritualistic behaviors meant to reverse or negate an unacceptable thought or impulse, directly analogous to OCD compulsions."],
      highYieldPoint: "OCD compulsions are analogous to the defense mechanism of undoing. OCD is ego-dystonic (patient recognizes thoughts as excessive)."
    },
    {
      vignette: "A 55-year-old woman presents to her physician with a 1-year history of persistent sadness, fatigue, and poor concentration. She has tried two adequate trials of different SSRIs, each for at least 8 weeks at therapeutic doses, without significant improvement. She denies suicidal ideation.",
      question: "Which of the following is the most appropriate next step in pharmacologic management?",
      options: ["Switch to an SNRI or augment with an atypical antipsychotic","Increase the current SSRI to maximum dose","Start electroconvulsive therapy immediately","Prescribe a monoamine oxidase inhibitor concurrently with the current SSRI","Discontinue all medications and recommend psychotherapy alone"],
      correctIndex: 0,
      explanation: "Treatment-resistant depression (TRD) is defined as failure to respond to ≥2 adequate antidepressant trials. Appropriate next steps include switching to a different class (e.g., SNRI, bupropion, mirtazapine) or augmenting the current regimen with an atypical antipsychotic (e.g., aripiprazole, quetiapine), lithium, or thyroid hormone (T3). ECT is reserved for severe or refractory cases.",
      optionExplanations: ["Correct: Switching to an SNRI or augmenting with an atypical antipsychotic (e.g., aripiprazole) is appropriate after failure of two SSRIs. This addresses treatment-resistant depression.","Incorrect: Two adequate SSRI trials have already failed. Simply increasing the dose of the same class is unlikely to be effective and does not constitute an adequate change in strategy.","Incorrect: ECT is highly effective but is typically reserved for severe depression with psychotic features, active suicidality, or failure of multiple medication strategies—not as the immediate next step after two SSRI failures.","Incorrect: Combining an MAOI with an SSRI is contraindicated due to the risk of serotonin syndrome, a potentially fatal condition.","Incorrect: Discontinuing all medications is inappropriate for treatment-resistant depression. Psychotherapy (especially CBT) may be added but should not replace pharmacotherapy entirely."],
      highYieldPoint: "Treatment-resistant depression: switch class (SNRI, bupropion) or augment (atypical antipsychotic, lithium, T3). NEVER combine MAOI + SSRI."
    },
    {
      vignette: "A 25-year-old woman presents to the emergency department unable to move her legs after witnessing a car accident. Neurological examination shows normal reflexes and tone, and MRI of the spine is unremarkable. She appears relatively unconcerned about her inability to walk, smiling during the examination.",
      question: "Which of the following terms best describes the patient's apparent lack of concern about her symptoms?",
      options: ["Anosognosia","La belle indifférence","Alexithymia","Flat affect","Dissociative amnesia"],
      correctIndex: 1,
      explanation: "La belle indifférence refers to a patient's apparent lack of concern about symptoms that would normally be distressing. It is classically associated with conversion disorder (functional neurological symptom disorder). This patient has a neurological deficit (paralysis) without an organic cause, and her relative indifference to the symptom is characteristic.",
      optionExplanations: ["Incorrect: Anosognosia is unawareness of a neurological deficit, typically seen with right parietal lobe lesions. This patient is aware of her deficit but unconcerned.","Correct: La belle indifférence is a classic feature of conversion disorder—inappropriate lack of concern about a seemingly significant neurological symptom.","Incorrect: Alexithymia is difficulty identifying and describing one's emotions, often associated with psychosomatic disorders and autism spectrum disorder.","Incorrect: Flat affect refers to absent or diminished emotional expression, characteristic of schizophrenia, not conversion disorder.","Incorrect: Dissociative amnesia involves inability to recall important personal information, not paralysis or indifference to symptoms."],
      highYieldPoint: "Conversion disorder: neurological symptoms without organic cause, often triggered by stress. La belle indifférence = lack of concern about symptoms."
    },
    {
      vignette: "A 40-year-old man with a history of schizophrenia managed on haloperidol for 5 years presents with involuntary, repetitive movements of his lips, tongue, and jaw. He makes chewing motions and his tongue protrudes intermittently. These movements worsen with stress and diminish during sleep.",
      question: "Which of the following best describes the pathophysiology of this patient's movement disorder?",
      options: ["Blockade of muscarinic receptors in the basal ganglia","Acute dystonic reaction from dopamine antagonism","Dopamine receptor upregulation and supersensitivity in the nigrostriatal pathway","Serotonin toxicity from drug interaction","Degeneration of the subthalamic nucleus"],
      correctIndex: 2,
      explanation: "Tardive dyskinesia (TD) results from chronic blockade of D2 receptors in the nigrostriatal pathway, leading to compensatory receptor upregulation and dopamine supersensitivity. This manifests as involuntary choreiform movements, particularly of the orofacial muscles. TD typically appears after months to years of antipsychotic use, unlike acute dystonia which occurs within days.",
      optionExplanations: ["Incorrect: Muscarinic blockade causes anticholinergic side effects (dry mouth, urinary retention, constipation) but not tardive dyskinesia.","Incorrect: Acute dystonic reactions occur within hours to days of starting antipsychotics and involve sustained muscle contractions, not the choreiform orofacial movements seen here.","Correct: Chronic D2 blockade in the nigrostriatal pathway leads to compensatory dopamine receptor upregulation and supersensitivity, causing the involuntary movements of tardive dyskinesia.","Incorrect: Serotonin toxicity (serotonin syndrome) presents with hyperthermia, clonus, agitation, and autonomic instability, not chronic choreiform movements.","Incorrect: Degeneration of the subthalamic nucleus causes hemiballismus, not the orofacial choreiform movements of tardive dyskinesia."],
      highYieldPoint: "Tardive dyskinesia: chronic D2 blockade → receptor upregulation in nigrostriatal pathway → orofacial choreiform movements. Treat with VMAT2 inhibitors (valbenazine)."
    },
    {
      vignette: "A 7-year-old boy is brought by his parents for evaluation because his teacher reports he cannot sit still in class, frequently interrupts others, and has difficulty completing assignments. These behaviors have been present since kindergarten and occur both at home and at school. His developmental milestones were normal, and there is no history of trauma.",
      question: "According to DSM-5, symptoms must be present before what age to diagnose this condition?",
      options: ["Age 5","Age 7","Age 10","Age 12","Age 15"],
      correctIndex: 3,
      explanation: "ADHD diagnosis per DSM-5 requires that several inattentive or hyperactive-impulsive symptoms were present before age 12. This was changed from the DSM-IV requirement of age 7. Symptoms must be present in ≥2 settings (e.g., home and school), cause functional impairment, and not be better explained by another mental disorder.",
      optionExplanations: ["Incorrect: Age 5 is not the DSM-5 age-of-onset criterion for ADHD.","Incorrect: Age 7 was the cutoff in DSM-IV but was revised to age 12 in DSM-5.","Incorrect: Age 10 is not the specified cutoff in either DSM-IV or DSM-5.","Correct: DSM-5 requires several ADHD symptoms to be present before age 12 (updated from age 7 in DSM-IV).","Incorrect: Age 15 exceeds the DSM-5 criterion. An older age of onset would suggest alternative diagnoses."],
      highYieldPoint: "ADHD (DSM-5): symptoms before age 12, present in ≥2 settings, ≥6 months duration. Two subtypes: inattentive and hyperactive-impulsive."
    },
    {
      vignette: "A 38-year-old woman is hospitalized after a suicide attempt by medication overdose. She has a history of recurrent major depressive episodes and two prior suicide attempts. She currently expresses hopelessness and reports giving away her belongings last week. She lives alone and recently lost her job.",
      question: "Which of the following is the strongest risk factor for completed suicide in this patient?",
      options: ["Female sex","Age less than 40 years","Living alone","Unemployment","History of prior suicide attempts"],
      correctIndex: 4,
      explanation: "The strongest predictor of completed suicide is a history of prior suicide attempts. This patient has two previous attempts, placing her at very high risk. While all listed factors contribute to suicide risk, previous attempts are consistently shown to be the most significant predictor across studies. Other major risk factors include male sex, older age, psychiatric illness, substance use, and access to lethal means.",
      optionExplanations: ["Incorrect: Female sex is a risk factor for suicide attempts but not completed suicide. Males complete suicide at higher rates (approximately 3-4:1).","Incorrect: While suicide occurs across all ages, older age (especially elderly white males) is a stronger risk factor for completed suicide than being under 40.","Incorrect: Social isolation (living alone) increases risk but is not as strong a predictor as prior attempts.","Incorrect: Unemployment is a risk factor but is less predictive than prior attempts.","Correct: Prior suicide attempts are the single strongest predictor of future completed suicide. Each attempt increases subsequent risk."],
      highYieldPoint: "Strongest risk factor for completed suicide: prior attempts. SAD PERSONS scale: Sex, Age, Depression, Previous attempt, Ethanol, Rational thinking loss, Social support lacking, Organized plan, No spouse, Sickness."
    }
  ],

  "Biostatistics & epidemiology": [
    {
      vignette: "A new rapid diagnostic test for tuberculosis is evaluated in a population where 10% of individuals have active TB. The test has a sensitivity of 90% and a specificity of 95%. A patient from this population tests positive.",
      question: "What is the approximate positive predictive value (PPV) of this test in this population?",
      options: ["67%","50%","75%","90%","95%"],
      correctIndex: 0,
      explanation: "PPV = TP / (TP + FP). In a population of 1000 with 10% prevalence: 100 have TB, 900 do not. TP = 0.90 × 100 = 90. FP = 0.05 × 900 = 45. PPV = 90 / (90 + 45) = 90/135 = 66.7% ≈ 67%. PPV increases with prevalence; even with high sensitivity and specificity, a low-prevalence population yields a moderate PPV.",
      optionExplanations: ["Correct: PPV = 90/(90+45) = 66.7%. This demonstrates that even good tests have moderate PPV when prevalence is low.","Incorrect: 50% would result from a lower prevalence or lower specificity.","Incorrect: 75% would require either higher prevalence or higher specificity.","Incorrect: 90% would require much higher prevalence for these test characteristics.","Incorrect: 95% is the specificity, not the PPV. PPV and specificity are related but not equal."],
      highYieldPoint: "PPV depends on prevalence: ↑ prevalence → ↑ PPV, ↓ prevalence → ↓ PPV. NPV has the inverse relationship."
    },
    {
      vignette: "A researcher wants to study the association between oral contraceptive use and deep vein thrombosis. She identifies 200 women diagnosed with DVT at a hospital and 200 age-matched women without DVT from the same hospital. She then reviews their medical records for prior oral contraceptive use.",
      question: "What type of study design is this?",
      options: ["Randomized controlled trial","Case-control study","Cohort study","Cross-sectional study","Ecological study"],
      correctIndex: 1,
      explanation: "This is a case-control study: the researcher starts by identifying individuals with the outcome (DVT cases) and without the outcome (controls), then looks backwards to compare exposure (oral contraceptive use) between the two groups. Case-control studies measure odds ratios and are useful for studying rare diseases.",
      optionExplanations: ["Incorrect: An RCT would randomly assign women to oral contraceptive use or placebo and follow them for DVT outcomes.","Correct: A case-control study identifies cases (DVT) and controls (no DVT) and compares prior exposures. It is retrospective and measures the odds ratio.","Incorrect: A cohort study would start with exposed (OCP users) and unexposed groups, then follow them forward for DVT development.","Incorrect: A cross-sectional study measures exposure and outcome at the same time point in a population, assessing prevalence.","Incorrect: An ecological study examines correlations between exposure and outcome at the population level, not the individual level."],
      highYieldPoint: "Case-control: starts with outcome → looks back at exposure → odds ratio. Cohort: starts with exposure → follows for outcome → relative risk."
    },
    {
      vignette: "A clinical trial compares a new statin to placebo for prevention of myocardial infarction. After 5 years, 2% of patients in the treatment group and 4% of patients in the placebo group had an MI. The absolute risk reduction is 2%.",
      question: "What is the number needed to treat (NNT) to prevent one MI?",
      options: ["2","10","50","25","100"],
      correctIndex: 2,
      explanation: "NNT = 1 / ARR = 1 / 0.02 = 50. This means 50 patients need to be treated with the statin for 5 years to prevent one additional MI. NNT is clinically intuitive and helps determine the practical benefit of a treatment.",
      optionExplanations: ["Incorrect: NNT = 2 would require an ARR of 50%, far greater than seen here.","Incorrect: NNT = 10 would require an ARR of 10%.","Correct: NNT = 1/ARR = 1/0.02 = 50. Fifty patients must be treated for 5 years to prevent one MI.","Incorrect: NNT = 25 would require an ARR of 4%.","Incorrect: NNT = 100 would correspond to an ARR of 1%."],
      highYieldPoint: "NNT = 1/ARR. NNH = 1/ARI. Lower NNT = more effective treatment. ARR = |risk in control – risk in treatment|."
    },
    {
      vignette: "An investigator conducts a cohort study following 10,000 smokers and 10,000 nonsmokers for 20 years to assess lung cancer incidence. Among smokers, 500 develop lung cancer (incidence = 5%). Among nonsmokers, 50 develop lung cancer (incidence = 0.5%).",
      question: "What is the relative risk of lung cancer in smokers compared to nonsmokers?",
      options: ["0.1","2","4.5","10","50"],
      correctIndex: 3,
      explanation: "Relative risk (RR) = incidence in exposed / incidence in unexposed = 5% / 0.5% = 10. Smokers are 10 times more likely to develop lung cancer than nonsmokers in this cohort. RR is used in cohort studies and RCTs where incidence can be calculated.",
      optionExplanations: ["Incorrect: RR = 0.1 would mean smoking is protective against lung cancer.","Incorrect: RR = 2 would mean smokers are only twice as likely—much lower than the observed 10-fold increase.","Incorrect: RR = 4.5 would require an incidence of 2.25% in smokers for this nonsmoker rate.","Correct: RR = 5%/0.5% = 10. Smokers have 10 times the risk of developing lung cancer compared to nonsmokers.","Incorrect: RR = 50 would require a much larger difference in incidence rates."],
      highYieldPoint: "Relative risk = incidence in exposed/incidence in unexposed. Used in cohort studies and RCTs. RR > 1 = increased risk; RR < 1 = protective."
    },
    {
      vignette: "A screening mammography study reports sensitivity of 85% and specificity of 90%. A 50-year-old woman in a population with a 1% breast cancer prevalence receives a positive screening result.",
      question: "Compared to a population with 10% prevalence, the positive predictive value of the same test in this 1% prevalence population will be:",
      options: ["Significantly higher","Slightly higher","Approximately the same","Cannot be determined without additional information","Significantly lower"],
      correctIndex: 4,
      explanation: "PPV is directly related to disease prevalence. At 1% prevalence (per 1000): TP = 0.85 × 10 = 8.5, FP = 0.10 × 990 = 99. PPV = 8.5/107.5 ≈ 7.9%. At 10% prevalence: TP = 0.85 × 100 = 85, FP = 0.10 × 900 = 90. PPV = 85/175 ≈ 48.6%. The PPV drops dramatically from ~49% to ~8% as prevalence decreases from 10% to 1%.",
      optionExplanations: ["Incorrect: Lower prevalence decreases, not increases, PPV.","Incorrect: The change is dramatic, not slight—PPV drops from approximately 49% to 8%.","Incorrect: PPV is highly dependent on prevalence; a 10-fold change in prevalence greatly alters PPV.","Incorrect: PPV can be calculated from sensitivity, specificity, and prevalence using Bayes' theorem; no additional information is needed.","Correct: PPV decreases significantly with lower prevalence because more false positives occur relative to true positives in a population with fewer diseased individuals."],
      highYieldPoint: "PPV ↑ with prevalence; NPV ↑ as prevalence ↓. Sensitivity and specificity are intrinsic test properties unaffected by prevalence."
    },
    {
      vignette: "A pharmaceutical company conducts a randomized controlled trial of a new antihypertensive drug. They randomize 500 patients each to the drug and placebo groups. After 1 year, mean systolic BP is 130 mmHg in the drug group and 140 mmHg in the placebo group, with a p-value of 0.03.",
      question: "Which of the following is the correct interpretation of the p-value in this study?",
      options: ["If the null hypothesis were true, there is a 3% probability of obtaining results this extreme or more extreme","There is a 97% probability that the drug lowers blood pressure","There is a 3% probability that the drug is ineffective","The drug reduces systolic BP by exactly 3%","There is a 3% chance the results are due to confounding"],
      correctIndex: 0,
      explanation: "A p-value of 0.03 means that if the null hypothesis (no difference between drug and placebo) were true, there is a 3% probability of observing a difference as extreme as or more extreme than what was found. It does NOT indicate the probability that the drug works, the probability the null hypothesis is true, or the probability of confounding.",
      optionExplanations: ["Correct: The p-value is the probability of obtaining the observed results (or more extreme) assuming the null hypothesis is true.","Incorrect: The p-value is not the probability that the alternative hypothesis is true. This is a common misinterpretation.","Incorrect: The p-value does not give the probability that the drug is ineffective or the probability that the null hypothesis is true.","Incorrect: The p-value is a probability statement about the data, not a measure of effect size.","Incorrect: The p-value does not account for confounding; it only addresses random sampling error under the null hypothesis."],
      highYieldPoint: "P-value = probability of observing results as extreme as (or more than) observed, given H₀ is true. It is NOT the probability H₀ is true."
    },
    {
      vignette: "A researcher studying diabetes in a community surveys 5,000 residents and finds that 400 have been diagnosed with type 2 diabetes. She also measures fasting glucose levels and discovers an additional 100 residents with undiagnosed diabetes. The community has a population of 50,000.",
      question: "What is the prevalence of type 2 diabetes in this community based on the surveyed sample?",
      options: ["2%","10%","8%","4%","15%"],
      correctIndex: 1,
      explanation: "Prevalence = total number of existing cases / total population at a point in time. Total cases = 400 (diagnosed) + 100 (undiagnosed) = 500. Prevalence = 500/5,000 = 0.10 = 10%. Prevalence includes both new and existing cases at a single point in time, unlike incidence which counts only new cases.",
      optionExplanations: ["Incorrect: 2% would equal 100/5,000, counting only undiagnosed cases.","Correct: Prevalence = (400 + 100)/5,000 = 500/5,000 = 10%. Prevalence includes all existing cases (diagnosed + undiagnosed).","Incorrect: 8% = 400/5,000, including only diagnosed cases. Prevalence should include all existing cases.","Incorrect: 4% would be an incorrect calculation not corresponding to any meaningful numerator/denominator combination here.","Incorrect: 15% does not correspond to any correct calculation from these data."],
      highYieldPoint: "Prevalence = existing cases/total population (snapshot). Incidence = new cases/at-risk population over time. Prevalence ≈ incidence × duration."
    },
    {
      vignette: "A study evaluates a new blood test for detecting ovarian cancer. In 500 women with confirmed ovarian cancer, the test is positive in 450. In 1,000 women without ovarian cancer, the test is negative in 950.",
      question: "What is the specificity of this test?",
      options: ["85%","90%","95%","93%","97%"],
      correctIndex: 2,
      explanation: "Specificity = TN / (TN + FP) = ability to correctly identify those WITHOUT disease. TN = 950, FP = 1,000 - 950 = 50. Specificity = 950 / (950 + 50) = 950/1,000 = 95%. Sensitivity = TP / (TP + FN) = 450/500 = 90%.",
      optionExplanations: ["Incorrect: 85% does not correspond to any correct calculation from these data.","Incorrect: 90% is the sensitivity (450/500), not the specificity.","Correct: Specificity = TN/(TN+FP) = 950/1,000 = 95%. This test correctly identifies 95% of women without ovarian cancer.","Incorrect: 93% is not derived from the given data.","Incorrect: 97% exceeds the actual specificity of this test."],
      highYieldPoint: "Sensitivity = TP/(TP+FN) = 'rule out' (SnNout). Specificity = TN/(TN+FP) = 'rule in' (SpPin). High sensitivity → fewer FN; high specificity → fewer FP."
    },
    {
      vignette: "A researcher is analyzing data from a study on cholesterol levels and cardiovascular events. She notices that older patients have both higher cholesterol and more cardiovascular events. When she controls for age in her analysis, the association between cholesterol and cardiovascular events weakens but remains significant.",
      question: "What role does age play in this analysis?",
      options: ["Effect modifier","Collider","Mediator","Confounder","Random error"],
      correctIndex: 3,
      explanation: "Age is a confounder: it is associated with both the exposure (cholesterol levels) and the outcome (cardiovascular events), it is not on the causal pathway between them, and controlling for it changes the magnitude of the observed association. A confounder distorts the true relationship between exposure and outcome. Controlling for confounders (stratification, multivariate analysis, randomization) reduces this distortion.",
      optionExplanations: ["Incorrect: An effect modifier changes the strength of the association between exposure and outcome across strata (interaction). If age were an effect modifier, the cholesterol-CVD association would differ significantly at different ages, not just weaken overall.","Incorrect: A collider is a variable that is caused by both the exposure and the outcome. Age is not caused by either cholesterol or cardiovascular events.","Incorrect: A mediator lies on the causal pathway between exposure and outcome. Age is not caused by cholesterol level.","Correct: Age is associated with both exposure and outcome, is not on the causal pathway, and controlling for it changes the association—classic criteria for confounding.","Incorrect: Random error produces unpredictable variation in results, not a systematic distortion correctable by statistical adjustment."],
      highYieldPoint: "Confounders: associated with exposure AND outcome, NOT on causal pathway. Control by: randomization, restriction, matching, stratification, multivariate analysis."
    },
    {
      vignette: "A clinical trial studying a new cancer drug uses overall survival as the primary endpoint. After interim analysis at 18 months, the data safety monitoring board stops the trial because the drug group shows significantly better survival. All placebo patients are offered the drug.",
      question: "Which type of bias is introduced by this early termination?",
      options: ["Lead-time bias","Selection bias","Recall bias","Observer bias","Overestimation of treatment effect"],
      correctIndex: 4,
      explanation: "Trials stopped early for benefit tend to overestimate the treatment effect. Small numbers of events at interim analysis can produce larger apparent effect sizes that would regress toward the true effect with longer follow-up. This is an increasingly recognized statistical phenomenon, not a traditional 'bias' category, but is functionally an overestimation of the treatment effect due to early stopping.",
      optionExplanations: ["Incorrect: Lead-time bias occurs when earlier detection of disease appears to increase survival without actually changing the disease course.","Incorrect: Selection bias involves systematic differences in the comparison groups, not an issue here given randomization.","Incorrect: Recall bias occurs when subjects differentially recall past exposures—not relevant to an RCT measuring survival.","Incorrect: Observer bias occurs when knowledge of group assignment affects outcome measurement. Survival is an objective endpoint less susceptible to this.","Correct: Trials stopped early for benefit tend to overestimate treatment effects because interim analyses with fewer events can show exaggerated differences."],
      highYieldPoint: "Trials stopped early for benefit often overestimate treatment effect. Key biases: selection, information (recall, observer), lead-time, length-time, confounding."
    },
    {
      vignette: "A medical student is analyzing data from a study and obtains a 95% confidence interval for the mean difference in blood pressure between two groups: (2.5 mmHg, 8.3 mmHg).",
      question: "Which of the following is the correct interpretation of this confidence interval?",
      options: ["If the study were repeated many times, 95% of the calculated confidence intervals would contain the true mean difference","95% of individual patients will have a blood pressure difference between 2.5 and 8.3 mmHg","There is a 95% probability that the true mean difference lies between 2.5 and 8.3 mmHg","The p-value for this result is exactly 0.05","The mean difference in the population is definitely between 2.5 and 8.3 mmHg"],
      correctIndex: 0,
      explanation: "A 95% confidence interval means that if the study were repeated many times under identical conditions, 95% of the constructed intervals would contain the true population parameter. It does NOT mean there is a 95% probability that the true value lies within any specific calculated interval. Since this CI does not include 0, the difference is statistically significant at α = 0.05.",
      optionExplanations: ["Correct: The frequentist interpretation is that 95% of CIs constructed from repeated sampling would contain the true population parameter.","Incorrect: The CI describes the estimated mean difference, not the distribution of individual patient values.","Incorrect: This is a common misinterpretation. The true mean is a fixed value, and a specific CI either contains it or does not—we cannot assign a probability to a single interval.","Incorrect: Since the CI does not include 0, the p-value is <0.05, but the exact p-value cannot be determined from the CI alone.","Incorrect: No single CI can guarantee it contains the true parameter; we can only say the method produces intervals that contain the truth 95% of the time."],
      highYieldPoint: "95% CI: 95% of intervals from repeated sampling contain the true parameter. If CI for difference excludes 0 → statistically significant (p < 0.05)."
    },
    {
      vignette: "A researcher is evaluating a new screening test for colorectal cancer. She collects data and constructs an ROC curve, which shows an area under the curve (AUC) of 0.92.",
      question: "What does an AUC of 0.92 indicate about the test?",
      options: ["The test has 92% sensitivity","There is a 92% probability that the test will correctly discriminate between a randomly chosen diseased and non-diseased individual","The test has 92% specificity","92% of patients will be correctly diagnosed","The false positive rate is 8%"],
      correctIndex: 1,
      explanation: "The AUC of an ROC curve represents the probability that the test will correctly rank a randomly chosen diseased individual higher than a randomly chosen non-diseased individual. An AUC of 0.92 indicates excellent discrimination. AUC ranges from 0.5 (no discrimination, equivalent to random chance) to 1.0 (perfect discrimination).",
      optionExplanations: ["Incorrect: The AUC is not equivalent to sensitivity, which varies with the chosen threshold.","Correct: The AUC represents the probability that the test correctly ranks (discriminates between) a randomly selected positive case higher than a randomly selected negative case.","Incorrect: The AUC is not equivalent to specificity, which also varies with the threshold.","Incorrect: The proportion correctly diagnosed depends on the chosen cutoff and prevalence, not the AUC alone.","Incorrect: The false positive rate (1 − specificity) varies with the chosen threshold and is not directly equal to 1 − AUC."],
      highYieldPoint: "ROC AUC: 0.5 = no discrimination (random), 1.0 = perfect. AUC = probability of correctly ranking diseased > non-diseased individual."
    },
    {
      vignette: "A medical journal publishes a meta-analysis of 15 randomized controlled trials examining the effect of aspirin on stroke prevention. The forest plot shows a pooled odds ratio of 0.75 with a 95% CI of (0.65, 0.87), and the I² statistic is 72%.",
      question: "What does the I² statistic of 72% indicate?",
      options: ["72% of the studies showed a significant benefit of aspirin","The pooled effect size is 72% reliable","72% of the variability in effect sizes across studies is due to heterogeneity rather than chance","There is a 72% probability of publication bias","72% of the confidence interval falls below the null value"],
      correctIndex: 2,
      explanation: "The I² statistic quantifies the proportion of total variability in study results that is attributable to heterogeneity (true differences between studies) rather than within-study sampling error (chance). I² = 72% indicates substantial heterogeneity. Values of 25%, 50%, and 75% are considered low, moderate, and high heterogeneity, respectively.",
      optionExplanations: ["Incorrect: I² does not represent the proportion of studies reaching statistical significance.","Incorrect: I² measures heterogeneity between studies, not the reliability of the pooled estimate.","Correct: I² = 72% means 72% of the variability among effect estimates is due to true differences between studies (heterogeneity), not chance.","Incorrect: Publication bias is assessed by funnel plots and Egger's test, not I².","Incorrect: I² is unrelated to the proportion of the confidence interval below the null value."],
      highYieldPoint: "I² measures heterogeneity in meta-analyses: 25% = low, 50% = moderate, 75% = high. High heterogeneity → explore sources (subgroup analysis, random-effects model)."
    },
    {
      vignette: "A new cervical cancer screening protocol detects cancer 3 years earlier than the previous method. A study comparing survival from the time of diagnosis shows improved 5-year survival with the new protocol, but total mortality from cervical cancer in the population remains unchanged.",
      question: "Which of the following biases best explains these findings?",
      options: ["Selection bias","Information bias","Measurement bias","Lead-time bias","Attrition bias"],
      correctIndex: 3,
      explanation: "Lead-time bias occurs when earlier detection by screening appears to increase survival time without actually changing the natural history or time of death from the disease. The apparent improvement in 5-year survival is because the diagnosis was simply made 3 years earlier, adding lead time to the measured survival. Since total mortality is unchanged, no true benefit has occurred.",
      optionExplanations: ["Incorrect: Selection bias involves systematic differences in groups being compared, not an artifact of early detection.","Incorrect: Information bias involves errors in measuring exposure or outcome, not a systematic time shift in diagnosis.","Incorrect: Measurement bias refers to inaccurate measurement of study variables, not the early detection phenomenon described.","Correct: Lead-time bias occurs when screening advances the time of diagnosis without changing the time of death, creating an artificial improvement in survival statistics.","Incorrect: Attrition bias occurs when participants are lost to follow-up differentially between groups."],
      highYieldPoint: "Lead-time bias: early detection ↑ apparent survival without changing mortality. Length-time bias: screening preferentially detects slow-growing tumors."
    },
    {
      vignette: "A hospital reviews its quality metrics and finds that among 1,000 patients treated for pneumonia, 50 developed hospital-acquired infections during their stay. Meanwhile, 5,000 patients were treated during the same period for all conditions.",
      question: "What is the attack rate of hospital-acquired infections among pneumonia patients during this period?",
      options: ["1%","2%","50%","10%","5%"],
      correctIndex: 4,
      explanation: "The attack rate (a form of incidence) = number of new cases / population at risk during the period. Among pneumonia patients: 50 infections / 1,000 pneumonia patients = 5%. The 5,000 total patients are a distractor—the question specifically asks about the attack rate among pneumonia patients.",
      optionExplanations: ["Incorrect: 1% = 50/5,000, which uses the total hospital population rather than the at-risk group (pneumonia patients).","Incorrect: 2% does not correspond to any correct calculation from the given data.","Incorrect: 50% would mean 500 infections among 1,000 patients—far greater than observed.","Incorrect: 10% would require 100 infections among 1,000 patients.","Correct: Attack rate = 50/1,000 = 5% among pneumonia patients."],
      highYieldPoint: "Attack rate = new cases/population at risk. Incidence rate = new cases/person-time at risk. Prevalence = existing cases/total population."
    }
  ],

  "Ethics & legal issues": [
    {
      vignette: "A 78-year-old man with metastatic pancreatic cancer tells his physician that he wants to stop chemotherapy because the side effects are unbearable and he wants to spend his remaining time comfortably at home. His adult children disagree and insist the physician continue treatment. The patient is alert, oriented, and understands the consequences of his decision.",
      question: "Which ethical principle most supports the physician's obligation to honor this patient's wish?",
      options: ["Autonomy","Beneficence","Justice","Non-maleficence","Paternalism"],
      correctIndex: 0,
      explanation: "Autonomy is the ethical principle that a competent patient has the right to make decisions about their own medical care, including the right to refuse treatment, even if others disagree. This patient is competent (alert, oriented, understands consequences) and has made an informed decision. The physician should respect the patient's wishes despite family objection.",
      optionExplanations: ["Correct: Autonomy—the right of competent patients to make their own medical decisions—is the overriding principle here. A competent patient's refusal of treatment must be honored.","Incorrect: Beneficence (acting in the patient's best interest) might support continuing treatment, but autonomy takes precedence when a competent patient makes an informed refusal.","Incorrect: Justice involves fair distribution of resources and equal treatment. It does not directly apply to this individual treatment decision.","Incorrect: Non-maleficence (do no harm) could support either decision, but the patient's right to self-determination (autonomy) is paramount when the patient is competent.","Incorrect: Paternalism (overriding patient wishes for their perceived benefit) is ethically inappropriate when dealing with a competent adult patient."],
      highYieldPoint: "Autonomy overrides beneficence for competent patients. Competent adults can refuse any treatment, even life-saving. Family cannot override patient wishes."
    },
    {
      vignette: "A 14-year-old girl presents to the clinic requesting treatment for a sexually transmitted infection. She asks the physician not to inform her parents. State law permits minors to consent to STI treatment.",
      question: "What is the most appropriate course of action for the physician?",
      options: ["Refuse to treat until parental consent is obtained","Treat the patient and maintain confidentiality","Treat the patient but inform the parents due to her age","Refer the patient to another physician","Report the case to child protective services immediately"],
      correctIndex: 1,
      explanation: "Minors can consent to treatment for STIs, substance abuse, contraception, and prenatal care without parental involvement in most jurisdictions. When state law specifically permits minor consent for STI treatment, the physician should provide treatment and maintain confidentiality. This is an exception to the general rule requiring parental consent for minor treatment.",
      optionExplanations: ["Incorrect: Parental consent is not required for STI treatment in minors under most state laws. Refusing treatment could harm the patient.","Correct: When state law permits minor consent for STI treatment, the physician should treat and maintain confidentiality to encourage minors to seek necessary care.","Incorrect: Informing parents without the patient's consent violates the minor's confidentiality rights under the applicable law.","Incorrect: Referral delays necessary treatment and does not address the consent issue—any physician should be able to provide this care.","Incorrect: An STI in a 14-year-old does not automatically require a CPS report unless there is evidence of abuse. Consensual sexual activity between minors does not mandate reporting in most jurisdictions."],
      highYieldPoint: "Minors can consent without parents for: STIs, substance abuse, contraception, prenatal care, psychiatric emergencies. Exceptions to parental consent."
    },
    {
      vignette: "A psychiatrist is treating a patient who reveals during a session that he has specific plans to kill his former business partner. The patient names the intended victim and describes a detailed plan including purchasing a weapon.",
      question: "What is the psychiatrist's primary legal obligation in this situation?",
      options: ["Maintain patient confidentiality as this was disclosed during therapy","Prescribe medication to reduce the patient's violent impulses","Warn the identifiable intended victim and notify law enforcement","Hospitalize the patient involuntarily for psychiatric evaluation","Document the threat in the medical record and continue monitoring"],
      correctIndex: 2,
      explanation: "The Tarasoff duty (established by Tarasoff v. Regents of the University of California, 1976) requires mental health professionals to protect identifiable third parties when a patient makes a credible threat of violence. This duty to warn/protect overrides patient confidentiality. The psychiatrist must warn the intended victim and may also need to notify law enforcement.",
      optionExplanations: ["Incorrect: Confidentiality is not absolute. The duty to protect identifiable third parties from serious harm supersedes the therapist-patient privilege.","Incorrect: While medication management may be appropriate, it does not fulfill the legal duty to warn and protect the identified victim.","Correct: Under the Tarasoff ruling, therapists have a duty to warn identifiable intended victims and may need to notify police when a patient makes a credible, specific threat.","Incorrect: Involuntary hospitalization may be warranted but does not replace the duty to warn the specific intended victim.","Incorrect: Documentation alone is insufficient when there is an identifiable victim with a specific, credible threat."],
      highYieldPoint: "Tarasoff duty: duty to warn/protect identifiable third parties from credible patient threats. Exceptions to confidentiality: Tarasoff, child/elder abuse, reportable diseases."
    },
    {
      vignette: "A 65-year-old man is brought to the emergency department after a motor vehicle accident. He is unconscious and requires emergency surgery. His wife cannot be reached, and there is no advance directive on file. No healthcare proxy has been designated.",
      question: "Under which doctrine can the surgical team proceed with the operation?",
      options: ["Therapeutic privilege","Mature minor doctrine","Informed consent from next of kin","Implied consent","Emancipated minor exception"],
      correctIndex: 3,
      explanation: "Implied (emergency) consent allows physicians to provide life-saving treatment when a patient is unable to consent and no surrogate decision-maker is available. The assumption is that a reasonable person would consent to life-saving treatment in an emergency. This doctrine applies when: (1) the patient cannot consent, (2) no advance directive or surrogate is available, and (3) delay would jeopardize the patient's life or health.",
      optionExplanations: ["Incorrect: Therapeutic privilege allows withholding information from a patient when disclosure would cause significant harm, but it does not authorize treatment without consent.","Incorrect: The mature minor doctrine applies to minors who demonstrate maturity to make medical decisions, not to adult patients.","Incorrect: While next of kin may serve as surrogate decision-makers, the wife cannot be reached. In her absence, implied consent governs.","Correct: Implied (emergency) consent permits treatment when the patient is incapacitated, no surrogate is available, and delay would endanger the patient's life.","Incorrect: The emancipated minor exception applies to minors who are legally independent, which is irrelevant to this 65-year-old patient."],
      highYieldPoint: "Emergency implied consent: treat when patient incapacitated + no surrogate available + delay = danger. Informed consent requires: disclosure, comprehension, voluntariness, competence, consent."
    },
    {
      vignette: "A physician-researcher discovers that a pharmaceutical company funded study she is reviewing shows that 30% of enrolled participants had their data excluded from the final analysis because they did not respond to the drug. The published results show only the responders.",
      question: "Which of the following research ethics violations does this scenario most clearly represent?",
      options: ["Lack of informed consent","Breach of patient confidentiality","Violation of equipoise","Failure to obtain IRB approval","Reporting bias through selective outcome reporting"],
      correctIndex: 4,
      explanation: "Excluding non-responders from the final analysis is selective outcome reporting (a form of reporting bias), which artificially inflates the apparent efficacy of the drug. Intention-to-treat analysis, which includes all randomized participants regardless of outcome, is the gold standard to prevent this bias. This violates research ethics by misrepresenting results.",
      optionExplanations: ["Incorrect: The scenario describes data manipulation, not failure to obtain informed consent from participants.","Incorrect: There is no indication that patient confidentiality was breached.","Incorrect: Violation of equipoise refers to continuing a trial when one treatment is clearly superior. The issue here is biased reporting, not lack of equipoise.","Incorrect: The scenario does not mention failure to obtain IRB approval. The violation is in how data was analyzed and reported.","Correct: Excluding 30% of non-responders from analysis is selective outcome reporting, artificially inflating the drug's apparent efficacy. This violates principles of honest scientific reporting."],
      highYieldPoint: "Intention-to-treat analysis includes all randomized patients to prevent reporting bias. Per-protocol analysis excludes non-adherent patients and can inflate treatment effects."
    },
    {
      vignette: "A 42-year-old woman with breast cancer is considering enrollment in a clinical trial for a new targeted therapy. She asks her oncologist about the trial. The oncologist explains the potential risks and benefits, alternative treatments, the right to withdraw at any time, and the experimental nature of the treatment.",
      question: "Which of the following additional elements is essential for valid informed consent in this research context?",
      options: ["Disclosure that participation is voluntary and refusal will not affect standard care","A guarantee that the treatment will be effective","Written consent from the patient's spouse","Approval from the hospital ethics committee witnessed by the patient","A promise of financial compensation"],
      correctIndex: 0,
      explanation: "Valid informed consent for research requires: disclosure of risks/benefits/alternatives, the experimental nature of the study, the right to withdraw at any time, and explicit statement that participation is voluntary and that declining will not affect the patient's standard medical care. This last element ensures freedom from coercion.",
      optionExplanations: ["Correct: Voluntary participation and assurance that refusal will not compromise standard care are essential elements of research informed consent, protecting against coercion.","Incorrect: No guarantee of efficacy can be made for experimental treatments. Informed consent requires honest disclosure of uncertainty.","Incorrect: Spousal consent is not required for a competent adult's medical decisions or research participation.","Incorrect: While IRB approval is required for the study, the patient does not need to witness this approval for informed consent to be valid.","Incorrect: Financial compensation is not required for valid informed consent, though any compensation should be disclosed."],
      highYieldPoint: "Research informed consent: risks/benefits/alternatives, voluntary participation, right to withdraw, no penalty for refusal, experimental nature, IRB oversight."
    },
    {
      vignette: "An attending physician discovers that a surgical resident performed a procedure on a patient that was beyond her level of training, resulting in a complication. The resident did not inform the attending or seek supervision. When asked, the resident says she felt pressured because the attending was unavailable and the patient's condition was deteriorating.",
      question: "From an ethical standpoint, which principle was most directly violated by the resident's actions?",
      options: ["Autonomy","Non-maleficence","Beneficence","Justice","Veracity"],
      correctIndex: 1,
      explanation: "Non-maleficence ('do no harm') was most directly violated. By performing a procedure beyond her competency level without supervision, the resident exposed the patient to an unreasonable risk of harm. While the intent may have been beneficent (helping a deteriorating patient), the primary violation was performing a procedure she was not trained to do, increasing the risk of harm.",
      optionExplanations: ["Incorrect: Patient autonomy (right to make informed decisions) was not the primary issue here, though the patient may not have been informed of the resident's level of experience.","Correct: Non-maleficence was violated by performing a procedure beyond competency, which directly increased the risk of harm to the patient.","Incorrect: Beneficence (acting in the patient's best interest) was the resident's intent, but acting outside one's competency is not beneficent—it is negligent.","Incorrect: Justice (fair distribution of resources and treatment) is not the central issue in this scenario.","Incorrect: Veracity (truthfulness) may have been violated if the resident misrepresented her qualifications, but the primary ethical violation was the risk of harm from acting beyond competency."],
      highYieldPoint: "Non-maleficence: first, do no harm. Physicians should not perform procedures beyond their competency. Always seek appropriate supervision."
    },
    {
      vignette: "A 50-year-old man with end-stage renal disease on dialysis tells his nephrologist that he has completed an advance directive designating his sister as healthcare proxy and stating he does not want to be placed on mechanical ventilation if his condition worsens. Three weeks later, he becomes unresponsive. His wife, who is present, demands the patient be intubated.",
      question: "What should the physician do?",
      options: ["Intubate the patient per the wife's request as she is the next of kin","Convene a hospital ethics committee before making a decision","Follow the advance directive and do not intubate","Wait until the designated healthcare proxy arrives to make a decision","Intubate the patient as an emergency measure and address the directive later"],
      correctIndex: 2,
      explanation: "A valid advance directive takes precedence over the wishes of family members who are not the designated healthcare proxy. The patient clearly stated he does not want mechanical ventilation, and this written directive must be honored. The wife, though next of kin, is not the designated decision-maker. The healthcare proxy (sister) would be consulted only for decisions not covered by the advance directive.",
      optionExplanations: ["Incorrect: The wife's status as next of kin does not override a valid advance directive. The patient's written wishes take priority.","Incorrect: Ethics committee consultation is appropriate for ambiguous situations, but this directive is clear and unambiguous. Following it should not require committee review.","Correct: The advance directive clearly states no mechanical ventilation. This valid, written expression of the patient's wishes must be followed regardless of family objections.","Incorrect: The advance directive itself specifies no intubation. The healthcare proxy is consulted for decisions not addressed in the directive, not to override what the directive states.","Incorrect: Emergency treatment is provided only when the patient's wishes are unknown. Here, the patient's wishes are clearly documented."],
      highYieldPoint: "Decision hierarchy: competent patient > advance directive > healthcare proxy > next of kin (spouse > adult children > parents > siblings). Advance directive = patient's own voice."
    },
    {
      vignette: "During routine laboratory testing, a physician discovers that his patient, a 30-year-old school bus driver, has a new diagnosis of epilepsy with recurrent unprovoked seizures. The patient is started on anticonvulsant medication. The patient states he intends to continue driving his bus and asks the physician not to report his condition.",
      question: "What is the physician's most appropriate action?",
      options: ["Respect the patient's confidentiality and do not report","Report the diagnosis to the patient's employer directly","Discharge the patient from the practice for non-compliance","Advise the patient to stop driving and report to the appropriate state agency as required by law","Prescribe medication and assume the patient will self-report"],
      correctIndex: 3,
      explanation: "Physicians have an obligation to report conditions that pose a public safety risk, as required by state law. Epilepsy is a reportable condition in most states due to driving safety concerns. The physician should advise the patient to stop driving, counsel about the medical and legal risks, and report to the appropriate state agency (e.g., DMV) as mandated. This is a legally required exception to patient confidentiality.",
      optionExplanations: ["Incorrect: Confidentiality does not apply when there is a legal reporting obligation and public safety risk.","Incorrect: The physician should report to the state agency (DMV), not directly to the employer. Reporting to the employer would be a breach of confidentiality beyond what is legally required.","Incorrect: Discharging the patient is punitive and does not address the public safety concern or legal obligation.","Correct: The physician should counsel the patient to stop driving and report to the appropriate state agency as required by law. This balances patient counseling with the legal duty to protect public safety.","Incorrect: Simply prescribing medication without addressing the driving issue fails to meet the physician's legal reporting obligation."],
      highYieldPoint: "Reportable conditions override confidentiality: certain infectious diseases, seizures (driving safety), suspected child/elder abuse, gunshot wounds. Report to appropriate agency, not employer."
    },
    {
      vignette: "A pharmaceutical company approaches a physician to participate in a study of their new arthritis drug. They offer the physician $500 for each patient enrolled and an additional $10,000 bonus if enrollment targets are met. The company also provides an all-expenses-paid trip to a medical conference.",
      question: "Which ethical concept is most at risk of being violated in this arrangement?",
      options: ["Equipoise","Autonomy of research subjects","Distributive justice","Therapeutic privilege","Conflict of interest compromising scientific integrity"],
      correctIndex: 4,
      explanation: "Financial incentives tied to enrollment create a conflict of interest that can compromise scientific integrity and patient welfare. Per-patient payments and enrollment bonuses may incentivize the physician to enroll patients who may not be appropriate candidates, prioritize study enrollment over clinical judgment, or bias the conduct and reporting of the study.",
      optionExplanations: ["Incorrect: Equipoise (genuine uncertainty about which treatment is superior) is a concern in trial design, not directly related to the financial incentive structure.","Incorrect: While patient autonomy could be affected if informed consent is compromised, the primary ethical issue is the physician's financial conflict of interest.","Incorrect: Distributive justice (fair allocation of resources) is not the primary concern in this financial arrangement.","Incorrect: Therapeutic privilege (withholding information to prevent harm) is unrelated to financial conflicts in research.","Correct: Per-patient payments and enrollment bonuses create a financial conflict of interest that can bias enrollment decisions, study conduct, and data integrity."],
      highYieldPoint: "Conflicts of interest in research: financial ties to companies, per-enrollment payments, gifts. Must be disclosed. IRBs oversee research ethics."
    },
    {
      vignette: "A 25-year-old man is brought to the emergency department by police after being found wandering in traffic and talking to himself. He is agitated, disorganized, and believes government agents are following him. He refuses psychiatric evaluation and attempts to leave the hospital.",
      question: "Under what legal standard can this patient be held involuntarily for psychiatric evaluation?",
      options: ["He poses a danger to himself or others, or is gravely disabled","He is expressing unusual beliefs that differ from social norms","He has refused medical treatment","A family member has requested his hospitalization","He is under police custody"],
      correctIndex: 0,
      explanation: "Involuntary psychiatric commitment requires that the patient poses a danger to self, a danger to others, or is gravely disabled (unable to provide for basic needs). Wandering in traffic demonstrates danger to self, and psychotic disorganization may indicate grave disability. Simply having unusual beliefs or refusing treatment is not sufficient grounds for involuntary commitment without evidence of danger or grave disability.",
      optionExplanations: ["Correct: The legal standard for involuntary commitment requires danger to self, danger to others, or grave disability. This patient demonstrates danger to self by wandering in traffic.","Incorrect: Unusual beliefs alone do not justify involuntary commitment. The threshold requires dangerousness or grave disability.","Incorrect: Refusing medical treatment alone does not meet criteria for involuntary commitment if the patient is competent.","Incorrect: Family request alone is insufficient; the legal criteria (danger to self/others or grave disability) must be met.","Incorrect: Police custody does not automatically authorize psychiatric holds; clinical criteria must still be met."],
      highYieldPoint: "Involuntary commitment criteria: danger to self, danger to others, or gravely disabled. Requires physician certification and judicial review within specified timeframe."
    },
    {
      vignette: "A 45-year-old woman presents with chronic back pain and requests an MRI. Her physician believes the MRI is not clinically indicated based on the history and physical examination and that it would represent an unnecessary cost to the healthcare system. The patient insists and says she will pay out of pocket.",
      question: "Which ethical principle creates the primary tension in this scenario?",
      options: ["Beneficence versus justice","Patient autonomy versus physician's obligation of non-maleficence","Veracity versus fidelity","Confidentiality versus duty to warn","Informed consent versus implied consent"],
      correctIndex: 1,
      explanation: "The primary tension is between the patient's autonomy (right to request care, willingness to pay) and the physician's non-maleficence obligation (avoiding unnecessary tests that expose the patient to no benefit and potential harms including false positives, unnecessary follow-up procedures, and radiation in some imaging). While cost concerns involve justice, the direct ethical tension is autonomy vs. non-maleficence.",
      optionExplanations: ["Incorrect: Beneficence (doing good) and justice (fair resource allocation) are relevant but secondary. The core tension is between what the patient wants and what the physician judges to be non-harmful care.","Correct: Patient autonomy (wanting the MRI) directly conflicts with non-maleficence (physician's judgment that the test is not indicated and could lead to harm from unnecessary follow-up).","Incorrect: Veracity (truthfulness) and fidelity (faithfulness to promises) are not the primary competing principles here.","Incorrect: Confidentiality and duty to warn are unrelated to this scenario.","Incorrect: Informed consent and implied consent are not in tension; the issue is about the appropriateness of the requested test."],
      highYieldPoint: "Ethical tensions: autonomy vs. beneficence/non-maleficence are the most commonly tested conflicts. Physician should not perform futile or harmful interventions solely because patient requests them."
    },
    {
      vignette: "A clinical trial for a new cancer drug randomizes patients to either the experimental drug or the current standard of care. During the trial, preliminary data from an outside study strongly suggests the new drug is significantly superior. The trial investigators consider whether to continue their study.",
      question: "Which ethical concept is most relevant to the decision of whether to continue this trial?",
      options: ["Therapeutic privilege","Informed consent","Clinical equipoise","Autonomy","Confidentiality"],
      correctIndex: 2,
      explanation: "Clinical equipoise is the state of genuine uncertainty within the expert medical community about which treatment is superior. It is the ethical basis for randomizing patients in clinical trials. If accumulating evidence eliminates equipoise (i.e., one treatment is clearly superior), it may become unethical to continue randomizing patients to the inferior arm. The data safety monitoring board typically evaluates whether equipoise has been lost.",
      optionExplanations: ["Incorrect: Therapeutic privilege (withholding information to prevent harm) is unrelated to the decision to continue a trial.","Incorrect: While informed consent is essential and participants should be informed of new data, the core ethical concept governing whether to continue the trial is equipoise.","Correct: Clinical equipoise (genuine uncertainty about which treatment is better) is the ethical prerequisite for randomized trials. If equipoise is lost, continuing the trial may be unethical.","Incorrect: Autonomy is important but does not directly address whether it is ethical for investigators to continue the trial when new evidence favors one arm.","Incorrect: Confidentiality is not relevant to the decision of whether to continue a clinical trial."],
      highYieldPoint: "Clinical equipoise: genuine uncertainty about treatment superiority is required to ethically randomize patients. Lost equipoise → consider stopping trial."
    },
    {
      vignette: "A 17-year-old girl who is married and lives independently with her husband presents to the emergency department with a fractured wrist after a fall. She consents to treatment. The emergency physician is unsure whether he can treat her without parental consent.",
      question: "What is this patient's legal status regarding medical decision-making?",
      options: ["She is a mature minor and requires a maturity assessment","She requires both her consent and her husband's consent","She requires parental consent because she is under 18","She is an emancipated minor and can consent to her own treatment","She requires a court order to be treated"],
      correctIndex: 3,
      explanation: "An emancipated minor is a person under 18 who is legally recognized as independent of their parents. Marriage is one of the criteria for emancipation (others include military service, financial independence, and having children). Emancipated minors can consent to all medical treatment without parental involvement.",
      optionExplanations: ["Incorrect: The mature minor doctrine requires assessment of maturity for specific medical decisions. This patient is emancipated by marriage, granting broader consent rights.","Incorrect: A spouse's consent is not required for an adult or emancipated minor's medical treatment.","Incorrect: Emancipated minors do not require parental consent for any medical treatment.","Correct: Marriage confers emancipated minor status, allowing full authority to consent to medical treatment without parental involvement.","Incorrect: No court order is needed to treat an emancipated minor who provides consent."],
      highYieldPoint: "Emancipated minor (marriage, military, financial independence, parenthood) = can consent to ALL treatment. Mature minor = case-by-case maturity assessment."
    },
    {
      vignette: "A physician receives laboratory results showing that a patient has tested positive for HIV. The patient asks the physician not to tell his wife, who is also a patient at the same practice. The physician is aware that the couple is sexually active and the wife has not been tested.",
      question: "What is the most appropriate action for the physician?",
      options: ["Immediately disclose the diagnosis to the wife without further discussion","Respect the patient's confidentiality and take no further action","Report the patient to the police for endangerment","Transfer the wife to another physician's practice","Counsel the patient on the importance of disclosure to his partner, and if he refuses, consider notifying the at-risk partner through appropriate channels"],
      correctIndex: 4,
      explanation: "HIV disclosure involves balancing patient confidentiality with the duty to protect identifiable third parties at risk of serious harm. The physician should first strongly encourage the patient to disclose to his partner. If the patient refuses, many states have partner notification laws that permit or require the physician to notify at-risk partners, either directly or through the public health department.",
      optionExplanations: ["Incorrect: Immediate disclosure without first counseling the patient and attempting voluntary disclosure violates the patient's confidentiality and standard ethical practice.","Incorrect: Taking no action may leave the wife at risk of a serious, preventable infection. Confidentiality is not absolute when identifiable third parties face serious harm.","Incorrect: Reporting to police is not the appropriate legal mechanism. Public health departments handle partner notification for HIV.","Incorrect: Transferring the wife does not address the public health concern or the at-risk partner.","Correct: The physician should first counsel the patient and encourage voluntary disclosure. If the patient refuses, the physician may notify the at-risk partner through appropriate legal channels (partner notification laws)."],
      highYieldPoint: "HIV disclosure: counsel patient first → encourage voluntary disclosure → if refused, partner notification through public health/legal channels. Balance confidentiality with duty to protect."
    }
  ],

  "Substance use disorders": [
    {
      vignette: "A 45-year-old man with a long history of heavy alcohol use is brought to the emergency department 48 hours after his last drink. He is tremulous, diaphoretic, and agitated. He reports seeing insects crawling on the walls. His vital signs show a heart rate of 120 bpm, blood pressure 160/100 mmHg, and temperature 38.5°C (101.3°F). He subsequently has a generalized tonic-clonic seizure.",
      question: "Which of the following is the most appropriate initial pharmacotherapy for this patient's condition?",
      options: ["Long-acting benzodiazepine (e.g., diazepam or chlordiazepoxide)","Phenytoin","Haloperidol","Disulfiram","Naltrexone"],
      correctIndex: 0,
      explanation: "This patient is experiencing delirium tremens (DTs), the most severe form of alcohol withdrawal, characterized by autonomic instability, visual hallucinations, agitation, and seizures, typically occurring 2-5 days after the last drink. Long-acting benzodiazepines (diazepam, chlordiazepoxide) are the first-line treatment as they enhance GABA activity to compensate for the loss of alcohol's GABA-ergic effects and prevent seizures.",
      optionExplanations: ["Correct: Long-acting benzodiazepines are first-line for alcohol withdrawal and delirium tremens. They provide GABA-A receptor agonism, prevent seizures, and can be tapered gradually.","Incorrect: Phenytoin is not effective for alcohol withdrawal seizures. Benzodiazepines are the treatment of choice for withdrawal-related seizures.","Incorrect: Haloperidol may worsen seizure threshold by lowering it and does not address the underlying GABA deficit in alcohol withdrawal. It may be used adjunctively for severe agitation but is not first-line.","Incorrect: Disulfiram is used for maintenance treatment of alcohol use disorder (causes acetaldehyde accumulation with alcohol consumption) and has no role in acute withdrawal management.","Incorrect: Naltrexone is an opioid receptor antagonist used for maintenance treatment of alcohol use disorder, not for acute withdrawal."],
      highYieldPoint: "Alcohol withdrawal timeline: 6-24h = tremor, anxiety, insomnia; 12-48h = seizures; 48-96h = delirium tremens. Treat with benzodiazepines."
    },
    {
      vignette: "A 22-year-old college student is brought to the emergency department after being found unresponsive at a party. His respiratory rate is 6 breaths/min, pupils are pinpoint, and he is cyanotic. A tourniquet and syringe are found in his pocket.",
      question: "What is the most appropriate immediate intervention?",
      options: ["Flumazenil","Naloxone","Activated charcoal","N-acetylcysteine","Physostigmine"],
      correctIndex: 1,
      explanation: "This patient presents with the classic opioid overdose triad: respiratory depression, miosis (pinpoint pupils), and decreased level of consciousness. The tourniquet and syringe suggest IV heroin use. Naloxone is a competitive opioid receptor antagonist that rapidly reverses opioid effects. It should be administered immediately, as respiratory failure is the primary cause of death in opioid overdose.",
      optionExplanations: ["Incorrect: Flumazenil is the antidote for benzodiazepine overdose. Benzodiazepine overdose does not typically cause pinpoint pupils.","Correct: Naloxone is a competitive opioid antagonist that rapidly reverses the respiratory depression, miosis, and CNS depression of opioid overdose.","Incorrect: Activated charcoal is used for GI decontamination in oral ingestions and is not appropriate for IV drug overdose or an unresponsive patient (aspiration risk).","Incorrect: N-acetylcysteine is the antidote for acetaminophen overdose, not opioid overdose.","Incorrect: Physostigmine is the antidote for anticholinergic toxicity, which presents with mydriasis, tachycardia, and dry skin—the opposite of this presentation."],
      highYieldPoint: "Opioid overdose triad: respiratory depression + miosis + ↓ consciousness. Naloxone = competitive antagonist. Repeat doses may be needed (short half-life vs. long-acting opioids)."
    },
    {
      vignette: "A 30-year-old man presents to the emergency department with severe agitation, mydriasis, tachycardia (HR 140 bpm), hypertension (BP 200/110 mmHg), diaphoresis, and hyperthermia (39.2°C). His friend reports that the patient snorted 'several lines of coke' about 2 hours ago.",
      question: "Which of the following is the most dangerous acute complication of this patient's intoxication?",
      options: ["Serotonin syndrome","Rhabdomyolysis","Coronary artery vasospasm and myocardial infarction","Hepatic failure","Diabetes insipidus"],
      correctIndex: 2,
      explanation: "Cocaine causes potent sympathomimetic effects through blockade of norepinephrine and dopamine reuptake. The most dangerous acute complication is coronary artery vasospasm leading to myocardial infarction, even in young patients with normal coronary arteries. Cocaine is also associated with aortic dissection, intracranial hemorrhage, and arrhythmias. Beta-blockers are contraindicated (unopposed alpha stimulation); treat with benzodiazepines and phentolamine.",
      optionExplanations: ["Incorrect: Serotonin syndrome is associated with serotonergic drugs (SSRIs, MAOIs, tramadol), not cocaine. While cocaine has some serotonergic activity, coronary vasospasm is the primary concern.","Incorrect: Rhabdomyolysis can occur with severe agitation and hyperthermia but is not the most dangerous acute complication of cocaine.","Correct: Coronary artery vasospasm causing MI is the most feared acute complication of cocaine intoxication and can occur in young patients with normal coronaries.","Incorrect: Hepatic failure is not a typical acute complication of cocaine intoxication.","Incorrect: Diabetes insipidus is not associated with cocaine use."],
      highYieldPoint: "Cocaine: sympathomimetic toxidrome + coronary vasospasm → MI. NO beta-blockers (unopposed alpha). Use benzodiazepines, phentolamine, nitroglycerin."
    },
    {
      vignette: "A 35-year-old heroin-dependent man enrolls in an opioid treatment program. He is started on a medication that is a partial opioid agonist at mu receptors and an antagonist at kappa receptors. It can be prescribed in an office-based setting.",
      question: "Which medication is being described?",
      options: ["Methadone","Naloxone","Naltrexone","Buprenorphine","Clonidine"],
      correctIndex: 3,
      explanation: "Buprenorphine is a partial mu-opioid receptor agonist and kappa-receptor antagonist used for medication-assisted treatment (MAT) of opioid use disorder. Unlike methadone (which requires dispensing through specialized clinics), buprenorphine can be prescribed in office-based settings. It has a ceiling effect on respiratory depression, making it safer than full agonists.",
      optionExplanations: ["Incorrect: Methadone is a full mu-opioid agonist used for opioid maintenance therapy, but it must be dispensed through licensed opioid treatment programs, not office-based settings.","Incorrect: Naloxone is a short-acting opioid antagonist used for overdose reversal, not maintenance treatment.","Incorrect: Naltrexone is a full opioid antagonist used for relapse prevention; it has no agonist activity and causes withdrawal if given to opioid-dependent patients.","Correct: Buprenorphine is a partial mu-agonist/kappa-antagonist that can be prescribed in office settings. Its ceiling effect improves safety.","Incorrect: Clonidine is an alpha-2 agonist used to manage autonomic symptoms of opioid withdrawal but is not a partial opioid agonist."],
      highYieldPoint: "Buprenorphine: partial mu agonist, kappa antagonist, ceiling effect, office-based. Methadone: full agonist, specialized clinic. Naltrexone: full antagonist, relapse prevention."
    },
    {
      vignette: "A 19-year-old man is brought to the emergency department after a rave. He is agitated, euphoric, and has been grinding his teeth. His temperature is 40.1°C (104.2°F), heart rate is 130 bpm, and blood pressure is 160/95 mmHg. He reports feeling intense empathy and connection with everyone around him. Laboratory results show hyponatremia (Na 118 mEq/L).",
      question: "Which substance is most likely responsible for this presentation?",
      options: ["Lysergic acid diethylamide (LSD)","Gamma-hydroxybutyrate (GHB)","Phencyclidine (PCP)","Marijuana","MDMA (ecstasy)"],
      correctIndex: 4,
      explanation: "MDMA (3,4-methylenedioxymethamphetamine, 'ecstasy') causes release of serotonin, dopamine, and norepinephrine. Classic presentation includes euphoria, empathogenesis (feelings of emotional closeness), bruxism (teeth grinding), hyperthermia, tachycardia, and hyponatremia (due to SIADH and excessive water intake). Severe hyponatremia and hyperthermia are life-threatening complications.",
      optionExplanations: ["Incorrect: LSD causes visual hallucinations, synesthesia, and altered perception but does not typically cause the severe hyperthermia, bruxism, and hyponatremia seen here.","Incorrect: GHB causes euphoria followed by CNS depression, respiratory depression, and amnesia, not the sympathomimetic picture and empathy seen here.","Incorrect: PCP causes dissociative anesthesia, violent behavior, nystagmus, and superhuman strength. It does not typically cause empathy or hyponatremia.","Incorrect: Marijuana causes euphoria, red eyes, increased appetite, and impaired coordination but not hyperthermia, bruxism, or severe hyponatremia.","Correct: MDMA causes empathogenesis, bruxism, hyperthermia, tachycardia, and hyponatremia (SIADH + excessive water intake)—all present in this patient."],
      highYieldPoint: "MDMA: serotonin release → empathy, bruxism, hyperthermia, hyponatremia (SIADH). Life-threatening: hyperthermia, hyponatremia, serotonin syndrome."
    },
    {
      vignette: "A 28-year-old woman presents to the clinic wanting to quit smoking. She has smoked one pack per day for 10 years and has tried quitting multiple times without success. She is motivated but concerned about withdrawal symptoms.",
      question: "Which of the following is the most effective pharmacologic approach for smoking cessation?",
      options: ["Varenicline","Bupropion alone","Nicotine patch alone","Clonidine","Fluoxetine"],
      correctIndex: 0,
      explanation: "Varenicline (Chantix) is the most effective single pharmacologic agent for smoking cessation. It is a partial nicotinic acetylcholine receptor agonist that reduces cravings (partial agonism provides some dopamine release) and blocks the rewarding effects of smoking (prevents nicotine binding). Clinical trials show superior quit rates compared to bupropion or nicotine replacement therapy alone.",
      optionExplanations: ["Correct: Varenicline is the most effective single agent for smoking cessation. It partially activates nicotinic receptors (reducing cravings) while blocking nicotine's full effect.","Incorrect: Bupropion (an NDRI antidepressant) is effective for smoking cessation but has lower efficacy than varenicline.","Incorrect: Nicotine replacement therapy (patch, gum, lozenge) is effective but has lower quit rates compared to varenicline.","Incorrect: Clonidine is a second-line agent for smoking cessation with more side effects and lower efficacy.","Incorrect: Fluoxetine (an SSRI) is not approved for or effective in smoking cessation."],
      highYieldPoint: "Smoking cessation pharmacotherapy efficacy: varenicline > combination NRT > bupropion > single NRT. Varenicline = partial nicotinic agonist."
    },
    {
      vignette: "A 40-year-old man who has been drinking heavily for 15 years presents with confusion, horizontal nystagmus, and ataxia. He is malnourished and admits to eating poorly. On examination, he also has bilateral lateral rectus palsy (cranial nerve VI).",
      question: "Which vitamin deficiency is most directly responsible for this patient's neurological findings?",
      options: ["Vitamin B12 (cobalamin)","Vitamin B1 (thiamine)","Vitamin B6 (pyridoxine)","Vitamin B3 (niacin)","Folate"],
      correctIndex: 1,
      explanation: "This patient presents with Wernicke encephalopathy, characterized by the classic triad of confusion (encephalopathy), oculomotor dysfunction (nystagmus, lateral rectus palsy), and ataxia. It is caused by thiamine (vitamin B1) deficiency, common in chronic alcoholism due to poor nutrition, impaired absorption, and decreased hepatic storage. Thiamine must be given BEFORE glucose to prevent worsening.",
      optionExplanations: ["Incorrect: Vitamin B12 deficiency causes subacute combined degeneration (posterior columns, lateral corticospinal tracts), megaloblastic anemia, and peripheral neuropathy, not the triad described.","Correct: Thiamine (B1) deficiency causes Wernicke encephalopathy (confusion, oculomotor dysfunction, ataxia). If untreated, it can progress to Korsakoff syndrome (irreversible memory impairment, confabulation).","Incorrect: Pyridoxine (B6) deficiency causes peripheral neuropathy, sideroblastic anemia, and seizures (in infants), not the Wernicke triad.","Incorrect: Niacin (B3) deficiency causes pellagra (diarrhea, dermatitis, dementia, death), not the oculomotor findings described.","Incorrect: Folate deficiency causes megaloblastic anemia and neural tube defects in pregnancy but not Wernicke encephalopathy."],
      highYieldPoint: "Wernicke encephalopathy: confusion + oculomotor dysfunction + ataxia → thiamine deficiency. Give thiamine BEFORE glucose. Untreated → Korsakoff syndrome (confabulation, memory loss)."
    },
    {
      vignette: "A 25-year-old man presents with severe anxiety, muscle cramps, piloerection, lacrimation, rhinorrhea, diarrhea, and mydriasis. He reports he ran out of his prescription pain medication (oxycodone) 24 hours ago. His vital signs show tachycardia and mild hypertension.",
      question: "Which of the following is true regarding opioid withdrawal?",
      options: ["It is frequently life-threatening and requires ICU admission","It presents with pinpoint pupils and respiratory depression","It is intensely uncomfortable but rarely life-threatening in healthy adults","It causes seizures and delirium similar to alcohol withdrawal","It requires treatment with a benzodiazepine taper"],
      correctIndex: 2,
      explanation: "Opioid withdrawal is extremely uncomfortable but rarely life-threatening in healthy adults, unlike alcohol or benzodiazepine withdrawal which can be fatal. Symptoms are opposite to intoxication: mydriasis (vs. miosis), hyperactive bowel (vs. constipation), piloerection, lacrimation, rhinorrhea, myalgias, and anxiety. Treatment includes clonidine (for autonomic symptoms), buprenorphine, or methadone.",
      optionExplanations: ["Incorrect: Opioid withdrawal is rarely life-threatening in healthy adults. Alcohol and benzodiazepine withdrawal are the substance withdrawals that can be fatal (seizures, delirium tremens).","Incorrect: Pinpoint pupils and respiratory depression are signs of opioid intoxication, not withdrawal. Withdrawal causes mydriasis (dilated pupils).","Correct: Opioid withdrawal is extremely unpleasant (flu-like symptoms, GI distress, anxiety) but is rarely fatal in otherwise healthy individuals, unlike alcohol or sedative withdrawal.","Incorrect: Seizures and delirium are characteristic of alcohol and benzodiazepine withdrawal, not opioid withdrawal.","Incorrect: Benzodiazepines are not the primary treatment for opioid withdrawal. Treatment options include clonidine, buprenorphine, or methadone."],
      highYieldPoint: "Opioid withdrawal: NOT life-threatening (unlike alcohol/benzo). Symptoms opposite to intoxication: mydriasis, diarrhea, piloerection, yawning, lacrimation."
    },
    {
      vignette: "A 20-year-old man is brought to the emergency department after being found acting bizarre at a music festival. He exhibits vertical nystagmus, violent behavior when approached, appears impervious to pain, and has a blank stare. Physical examination reveals hypertension, tachycardia, and diaphoresis.",
      question: "Which substance is most likely responsible for this presentation?",
      options: ["Cocaine","LSD","Methamphetamine","Phencyclidine (PCP)","Ketamine"],
      correctIndex: 3,
      explanation: "PCP (phencyclidine, 'angel dust') is an NMDA receptor antagonist that causes a unique presentation of dissociative anesthesia with violent behavior, vertical nystagmus (highly specific for PCP), apparent insensitivity to pain, and a blank stare. It also produces sympathomimetic effects (hypertension, tachycardia). Rotary nystagmus may also occur.",
      optionExplanations: ["Incorrect: Cocaine causes sympathomimetic effects but does not typically cause vertical nystagmus, dissociative behavior, or insensitivity to pain.","Incorrect: LSD causes visual hallucinations and altered perception but not violence, vertical nystagmus, or insensitivity to pain. LSD users are typically non-violent.","Incorrect: Methamphetamine causes sympathomimetic effects and can cause aggression but does not typically cause vertical nystagmus or the dissociative state described.","Correct: PCP intoxication classically presents with vertical nystagmus, violent/bizarre behavior, apparent analgesia, and sympathomimetic effects. Vertical nystagmus is nearly pathognomonic.","Incorrect: Ketamine is also an NMDA antagonist and can cause dissociative effects, but it more commonly produces a tranquil 'K-hole' state rather than violent behavior. Vertical nystagmus is much more characteristic of PCP."],
      highYieldPoint: "PCP: NMDA antagonist → vertical nystagmus (key finding), violence, insensitivity to pain, dissociation, blank stare. Treat agitation with benzodiazepines."
    },
    {
      vignette: "A 55-year-old man with a history of alcohol use disorder has been sober for 6 months. He is prescribed a medication by his physician and is warned that drinking alcohol while on this medication will cause an extremely unpleasant reaction. Two weeks later, he drinks a beer at a party and develops facial flushing, nausea, vomiting, headache, and hypotension.",
      question: "Which enzyme does this medication inhibit?",
      options: ["Alcohol dehydrogenase","Catechol-O-methyltransferase","Cytochrome P450 2E1","Monoamine oxidase","Aldehyde dehydrogenase"],
      correctIndex: 4,
      explanation: "Disulfiram inhibits aldehyde dehydrogenase, blocking the conversion of acetaldehyde to acetate in alcohol metabolism. This leads to accumulation of acetaldehyde when alcohol is consumed, causing the 'disulfiram reaction': flushing, nausea, vomiting, headache, and hypotension. This aversive reaction is meant to deter alcohol consumption.",
      optionExplanations: ["Incorrect: Alcohol dehydrogenase converts ethanol to acetaldehyde. Inhibiting this enzyme would decrease acetaldehyde production, not increase it.","Incorrect: COMT is involved in catecholamine metabolism and is not the target of disulfiram.","Incorrect: CYP2E1 is involved in alcohol metabolism at high concentrations but is not the target of disulfiram.","Incorrect: MAO inhibitors are used for depression and interact with tyramine-containing foods, not directly with alcohol metabolism via this mechanism.","Correct: Disulfiram inhibits aldehyde dehydrogenase → acetaldehyde accumulates → flushing, nausea, vomiting, headache, hypotension when alcohol is consumed."],
      highYieldPoint: "Disulfiram: inhibits aldehyde dehydrogenase → acetaldehyde accumulation with alcohol → aversive reaction. Alcohol metabolism: ethanol → (ADH) → acetaldehyde → (ALDH) → acetate."
    },
    {
      vignette: "A 17-year-old boy is brought to the emergency department after being found at home with slurred speech, nystagmus, incoordination, and the smell of a chemical solvent on his clothing. Empty containers of model airplane glue are found nearby. He is confused but arousable.",
      question: "What is the most serious acute complication of this type of substance abuse?",
      options: ["Sudden cardiac death from fatal arrhythmia","Tardive dyskinesia","Hepatocellular carcinoma","Serotonin syndrome","Chronic renal failure"],
      correctIndex: 0,
      explanation: "Inhalant abuse (volatile solvents such as toluene in model glue) can cause 'sudden sniffing death syndrome' due to sensitization of the myocardium to catecholamines, leading to fatal cardiac arrhythmias (especially ventricular fibrillation). This can occur even on the first use. Other acute risks include asphyxiation and CNS depression.",
      optionExplanations: ["Correct: 'Sudden sniffing death syndrome' occurs due to catecholamine-sensitized myocardium causing fatal arrhythmias. This is the most feared acute complication of inhalant abuse.","Incorrect: Tardive dyskinesia is caused by chronic antipsychotic use, not inhalant abuse.","Incorrect: While chronic inhalant abuse can cause liver damage, hepatocellular carcinoma is not the most serious acute complication.","Incorrect: Serotonin syndrome is caused by excess serotonergic activity from drug interactions, not inhalant abuse.","Incorrect: While toluene can cause renal tubular acidosis with chronic use, acute cardiac death is the most serious immediate concern."],
      highYieldPoint: "Inhalant abuse: sudden sniffing death (fatal arrhythmia), CNS depression, renal tubular acidosis (chronic toluene). Most abused by young adolescents due to accessibility."
    },
    {
      vignette: "A 32-year-old woman presents to the clinic after deciding to stop using benzodiazepines (alprazolam), which she has taken daily for 3 years for anxiety. She abruptly stopped the medication 2 days ago and now reports tremors, anxiety, insomnia, and had a seizure this morning.",
      question: "Which of the following is true about benzodiazepine withdrawal?",
      options: ["It is uncomfortable but never life-threatening","It can cause seizures and should be managed with a gradual taper","It causes pinpoint pupils and respiratory depression","It should be treated with naloxone","It only occurs after at least 10 years of use"],
      correctIndex: 1,
      explanation: "Benzodiazepine withdrawal can be life-threatening due to seizures and, in severe cases, delirium and autonomic instability—similar to alcohol withdrawal (both act on GABA-A receptors). Abrupt discontinuation after chronic use should be avoided. Treatment involves reinstatement and slow taper, often switching to a long-acting benzodiazepine (diazepam or chlordiazepoxide) for controlled tapering.",
      optionExplanations: ["Incorrect: Benzodiazepine withdrawal CAN be life-threatening—seizures and status epilepticus can be fatal. It is similar to alcohol withdrawal in this regard.","Correct: Benzodiazepine withdrawal can cause seizures, anxiety, tremors, insomnia, and autonomic instability. Gradual taper is essential to prevent life-threatening complications.","Incorrect: Pinpoint pupils and respiratory depression are features of opioid intoxication, not benzodiazepine withdrawal.","Incorrect: Naloxone is an opioid antagonist. Benzodiazepine overdose is treated with flumazenil; withdrawal is treated with reinstatement and gradual taper.","Incorrect: Benzodiazepine dependence and withdrawal can develop after weeks to months of regular use, not requiring 10 years."],
      highYieldPoint: "Life-threatening withdrawals: alcohol, benzodiazepines, barbiturates (all GABA-ergic). Treat with gradual taper. NOT life-threatening: opioid, cocaine, nicotine withdrawal."
    },
    {
      vignette: "A 26-year-old man presents to the emergency department with extreme euphoria, grandiosity, pressured speech, tachycardia (HR 135 bpm), and dilated pupils. He has been awake for 3 days. He reports smoking 'crystal' regularly. Physical examination reveals dental erosion, skin excoriations from picking, and a BMI of 17.",
      question: "Which neurotransmitter's release is most directly responsible for the reinforcing effects of this substance?",
      options: ["Serotonin","Norepinephrine","Dopamine","GABA","Glutamate"],
      correctIndex: 2,
      explanation: "Methamphetamine's primary reinforcing effect comes from massive dopamine release in the mesolimbic pathway (especially the nucleus accumbens). Methamphetamine enters nerve terminals and reverses the dopamine transporter, causing non-exocytotic release of dopamine. It also releases norepinephrine and serotonin, but dopamine is responsible for the addictive properties.",
      optionExplanations: ["Incorrect: Serotonin release contributes to mood effects but is not the primary mediator of reinforcement/addiction.","Incorrect: Norepinephrine release causes sympathomimetic effects (tachycardia, hypertension) but is not the primary reinforcing neurotransmitter.","Correct: Dopamine release in the mesolimbic reward pathway is the primary mechanism of reinforcement for methamphetamine and most drugs of abuse.","Incorrect: GABA is the target of alcohol, benzodiazepines, and barbiturates, not methamphetamine.","Incorrect: Glutamate is involved in excitatory neurotransmission and plays a role in addiction neuroplasticity but is not the primary target of methamphetamine."],
      highYieldPoint: "Dopamine in the mesolimbic pathway (VTA → nucleus accumbens) = final common pathway for reward/reinforcement of all drugs of abuse."
    },
    {
      vignette: "A 60-year-old man with chronic pain has been taking increasing doses of his prescription opioid over the past year. He notes that the same dose no longer provides adequate pain relief, requiring higher amounts. His physician is concerned about this pattern.",
      question: "Which pharmacologic phenomenon best describes this patient's need for increasing doses?",
      options: ["Sensitization","Dependence","Addiction","Tolerance","Tachyphylaxis"],
      correctIndex: 3,
      explanation: "Tolerance is the pharmacologic phenomenon where repeated exposure to a drug results in a decreased response, necessitating higher doses to achieve the same effect. It occurs through receptor downregulation, desensitization, and increased drug metabolism. Tolerance to opioid analgesia develops readily, while tolerance to constipation and miosis develops slowly. Tolerance is distinct from dependence (withdrawal on cessation) and addiction (compulsive use despite harm).",
      optionExplanations: ["Incorrect: Sensitization is the opposite of tolerance—an increased response to a drug with repeated exposure. This occurs with stimulants, not typically with opioid analgesia.","Incorrect: Dependence is characterized by withdrawal symptoms when the drug is discontinued—the body has adapted to the drug's presence. The question describes reduced efficacy, not withdrawal.","Incorrect: Addiction involves compulsive drug-seeking behavior and use despite harmful consequences. Needing higher doses for pain relief alone does not constitute addiction.","Correct: Tolerance is the decreased response to a drug requiring increased doses over time. It is a predictable pharmacologic phenomenon distinct from addiction.","Incorrect: Tachyphylaxis is an acute, rapid form of tolerance that develops after just a few doses, often within hours. The gradual decrease over a year is standard tolerance, not tachyphylaxis."],
      highYieldPoint: "Tolerance = ↓ response, need more drug. Dependence = withdrawal on cessation. Addiction = compulsive use despite harm. These are three distinct concepts."
    },
    {
      vignette: "A 38-year-old woman presents to an outpatient clinic requesting help with her alcohol use disorder. She recently completed a medically supervised detoxification program and has been sober for 2 weeks. She has a history of depression that predates her alcohol use. She is interested in a medication that will reduce her craving for alcohol.",
      question: "Which of the following medications works by modulating glutamate neurotransmission to reduce alcohol craving?",
      options: ["Naltrexone","Disulfiram","Gabapentin","Topiramate","Acamprosate"],
      correctIndex: 4,
      explanation: "Acamprosate is thought to modulate glutamate neurotransmission (possibly as a partial NMDA antagonist and GABA agonist) to reduce the neuronal hyperexcitability associated with chronic alcohol use and withdrawal. It reduces craving and helps maintain abstinence. It is most effective in patients who have already achieved initial abstinence, making it appropriate for this patient who completed detox.",
      optionExplanations: ["Incorrect: Naltrexone is an opioid receptor antagonist that reduces the pleasurable effects of alcohol and reduces craving through opioidergic mechanisms, not glutamate modulation.","Incorrect: Disulfiram inhibits aldehyde dehydrogenase and works through aversion (unpleasant reaction with alcohol), not craving reduction or glutamate modulation.","Incorrect: Gabapentin modulates calcium channels and is used off-label for alcohol use disorder but does not directly modulate glutamate transmission in the manner described for acamprosate.","Incorrect: Topiramate has some glutamatergic effects but primarily works through multiple mechanisms (GABA enhancement, glutamate inhibition) and is not FDA-approved for alcohol use disorder, though used off-label.","Correct: Acamprosate modulates glutamate (NMDA) neurotransmission to reduce cravings and maintain abstinence. It is started after initial detoxification."],
      highYieldPoint: "Alcohol use disorder maintenance: naltrexone (↓ pleasure, opioid antagonist), acamprosate (↓ craving, glutamate modulation), disulfiram (aversion, aldehyde dehydrogenase inhibitor)."
    }
  ]

};

const BEHAV_SUMMARIES = {

  "Psychiatric disorders": {
    sections: [
      {
        heading: "Major Depressive Disorder (MDD)",
        bullets: ["Diagnosis requires ≥5/9 SIG E CAPS symptoms for ≥2 weeks, including depressed mood or anhedonia","SIG E CAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidal ideation","First-line treatment: SSRIs (e.g., sertraline, fluoxetine) + CBT","Treatment-resistant depression: switch class or augment (atypical antipsychotic, lithium, T3)","Serotonin syndrome risk: NEVER combine SSRI + MAOI (must have 2-week washout)"]
      },
      {
        heading: "Bipolar Disorder",
        bullets: ["Bipolar I: ≥1 manic episode (≥7 days or hospitalization); may have depressive episodes","Bipolar II: hypomanic episodes + major depressive episodes; never full mania","Mania: DIG FAST — Distractibility, Impulsivity/Indiscretion, Grandiosity, Flight of ideas, Activity increase, Sleep decrease, Talkativeness","First-line treatment: mood stabilizers (lithium, valproate); atypical antipsychotics (quetiapine, olanzapine)","Lithium toxicity: tremor, ataxia, seizures; monitor levels (0.6–1.2 mEq/L); nephrogenic DI, hypothyroidism, Ebstein anomaly (teratogenic)"]
      },
      {
        heading: "Schizophrenia",
        bullets: ["Positive symptoms (mesolimbic excess): hallucinations, delusions, disorganized thought/behavior","Negative symptoms (mesocortical deficit): flat affect, alogia, avolition, anhedonia, social withdrawal","Diagnosis requires ≥2 symptoms (≥1 must be positive) for ≥6 months with functional decline","First-line treatment: atypical antipsychotics (risperidone, olanzapine, quetiapine); clozapine for treatment-resistant","Typical antipsychotic side effects: EPS (acute dystonia, akathisia, parkinsonism), tardive dyskinesia, neuroleptic malignant syndrome"]
      },
      {
        heading: "Anxiety Disorders",
        bullets: ["GAD: excessive worry ≥6 months + ≥3 somatic symptoms; first-line: SSRIs, buspirone, CBT","Panic disorder: recurrent unexpected panic attacks + worry about future attacks; first-line: SSRIs + CBT","Social anxiety disorder: fear of scrutiny/embarrassment in social situations; first-line: SSRIs, CBT","PTSD: 4 symptom clusters after trauma (intrusion, avoidance, negative cognition/mood, arousal); >1 month","OCD: obsessions (ego-dystonic intrusive thoughts) + compulsions (ritualistic behaviors); first-line: SSRIs (high dose), CBT with exposure/response prevention"]
      },
      {
        heading: "Personality Disorders & Other Key Disorders",
        bullets: ["Cluster A (odd/eccentric): paranoid, schizoid, schizotypal","Cluster B (dramatic/emotional): antisocial, borderline, histrionic, narcissistic","Cluster C (anxious/fearful): avoidant, dependent, obsessive-compulsive","Borderline PD: splitting, abandonment fear, self-harm, identity disturbance, chronic emptiness","Anorexia nervosa: ↑ cortisol, ↓ GnRH, ↓ T3, ↑ GH/↓ IGF-1; most lethal psychiatric disorder","Delirium vs. dementia: delirium = acute, fluctuating consciousness, reversible; dementia = insidious, progressive, alert until late"]
      }
    ],
    table: {
      title: "Key Psychiatric Disorders Comparison",
      headers: ["Disorder","Key Features","Duration Criteria","First-Line Treatment"],
      rows: [
        ["MDD","≥5/9 SIG E CAPS, depressed mood or anhedonia","≥2 weeks","SSRIs + CBT"],
        ["Bipolar I","Manic episode (DIG FAST)","≥7 days (mania)","Lithium, valproate, atypical antipsychotics"],
        ["GAD","Excessive worry, multiple domains","≥6 months","SSRIs, buspirone, CBT"],
        ["Panic Disorder","Unexpected panic attacks + anticipatory anxiety","Recurrent attacks","SSRIs + CBT"],
        ["PTSD","Intrusion, avoidance, neg. cognition, hyperarousal",">1 month after trauma","SSRIs (sertraline, paroxetine) + CBT"],
        ["OCD","Ego-dystonic obsessions + compulsions","Time-consuming (>1 hr/day)","High-dose SSRIs + ERP"],
        ["Schizophrenia","Positive + negative symptoms + functional decline","≥6 months","Atypical antipsychotics"],
        ["Anorexia Nervosa","Restriction, low BMI, body image distortion","Persistent","Nutritional rehab, CBT, family therapy"]
      ]
    },
    mnemonic: "SIG E CAPS (depression): Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidal ideation | DIG FAST (mania): Distractibility, Impulsivity, Grandiosity, Flight of ideas, Activity, Sleep, Talkativeness"
  },

  "Biostatistics & epidemiology": {
    sections: [
      {
        heading: "Test Characteristics",
        bullets: ["Sensitivity = TP/(TP+FN) = probability of positive test given disease (rule OUT: SnNout)","Specificity = TN/(TN+FP) = probability of negative test given no disease (rule IN: SpPin)","PPV = TP/(TP+FP); depends on prevalence (↑ prevalence → ↑ PPV)","NPV = TN/(TN+FN); depends on prevalence (↓ prevalence → ↑ NPV)","Sensitivity and specificity are intrinsic test properties; PPV and NPV vary with prevalence"]
      },
      {
        heading: "Study Designs",
        bullets: ["Case-control: starts with disease outcome → looks back at exposures → odds ratio; good for rare diseases","Cohort: starts with exposure → follows for outcomes → relative risk, attributable risk; prospective or retrospective","Cross-sectional: measures exposure and outcome simultaneously → prevalence, not incidence","RCT: gold standard; random assignment → minimizes confounding → measures RR, ARR, NNT","Meta-analysis: pools data from multiple studies → highest level of evidence; assess heterogeneity with I²"]
      },
      {
        heading: "Measures of Association",
        bullets: ["Relative risk (RR) = incidence exposed / incidence unexposed (cohort studies, RCTs)","Odds ratio (OR) = (a×d)/(b×c) in 2×2 table (case-control studies); approximates RR when disease is rare","Absolute risk reduction (ARR) = risk in control − risk in treatment; NNT = 1/ARR","Attributable risk = incidence in exposed − incidence in unexposed"]
      },
      {
        heading: "Bias Types",
        bullets: ["Selection bias: non-random selection distorts sample (Berkson, healthy worker, non-response)","Information bias: systematic error in measuring exposure or outcome (recall, observer/Hawthorne)","Lead-time bias: early detection ↑ apparent survival without changing mortality","Length-time bias: screening preferentially detects slow-growing (less aggressive) disease","Confounding: third variable associated with both exposure and outcome; control with randomization, matching, stratification"]
      },
      {
        heading: "Statistical Concepts",
        bullets: ["P-value: probability of observing results as extreme as (or more than) observed, assuming H₀ is true","95% CI: if study repeated many times, 95% of CIs would contain the true parameter; excludes null → significant","Type I error (α): rejecting H₀ when it is true (false positive); typically set at 0.05","Type II error (β): failing to reject H₀ when it is false (false negative); Power = 1 − β","Increase power by: ↑ sample size, ↑ expected effect size, ↑ α, ↓ variance"]
      }
    ],
    table: {
      title: "2×2 Table for Diagnostic Testing",
      headers: ["","Disease +","Disease −","Total"],
      rows: [
        ["Test +","TP (a)","FP (b)","a + b"],
        ["Test −","FN (c)","TN (d)","c + d"],
        ["Total","a + c","b + d","a+b+c+d"],
        ["Sensitivity = a/(a+c)","Specificity = d/(b+d)","PPV = a/(a+b)","NPV = d/(c+d)"]
      ]
    },
    mnemonic: "SnNout (Sensitive test, Negative result rules OUT disease) | SpPin (Specific test, Positive result rules IN disease) | Study hierarchy: Meta-analysis > RCT > Cohort > Case-control > Cross-sectional > Case report"
  },

  "Ethics & legal issues": {
    sections: [
      {
        heading: "Core Ethical Principles",
        bullets: ["Autonomy: competent patients have the right to make their own medical decisions, including refusing treatment","Beneficence: acting in the patient's best interest; duty to help","Non-maleficence: 'first, do no harm'; avoid unnecessary risk","Justice: fair distribution of resources and equal treatment; relevant in organ allocation, triage","When competent patient's wishes conflict with beneficence, autonomy takes precedence"]
      },
      {
        heading: "Informed Consent",
        bullets: ["Five elements: disclosure, comprehension, voluntariness, competence, consent","Exceptions to informed consent: emergencies (implied consent), therapeutic privilege, patient waiver, incompetent patient","Minors require parental consent EXCEPT: STIs, substance abuse, contraception, prenatal care, psychiatric emergencies","Emancipated minors (married, military, financially independent, parents) = full consent rights","Research consent: additional requirements include voluntary participation, right to withdraw, no penalty for refusal, IRB oversight"]
      },
      {
        heading: "Confidentiality & Its Exceptions",
        bullets: ["Patient information is generally confidential under HIPAA","Exceptions: Tarasoff duty (warn identifiable victims of credible threats), reportable diseases, child/elder abuse, gunshot/stab wounds","HIV: counsel patient to disclose to partner; if refused, may notify through public health channels","Reportable conditions that affect driving (e.g., seizures) must be reported to appropriate state agencies"]
      },
      {
        heading: "End-of-Life & Advance Directives",
        bullets: ["Decision hierarchy: competent patient > advance directive > healthcare proxy > next of kin","Next of kin order: spouse > adult children > parents > siblings","Living will: specifies treatments desired/refused in specific clinical scenarios","Durable power of attorney for healthcare: designates a surrogate decision-maker","Do Not Resuscitate (DNR): applies only to cardiopulmonary arrest; does not limit other treatments"]
      },
      {
        heading: "Research Ethics",
        bullets: ["Clinical equipoise: genuine uncertainty required to ethically randomize patients","IRB oversight: required for all human subjects research; reviews risks/benefits, informed consent","Conflicts of interest (financial incentives, industry ties) must be disclosed and managed","Intention-to-treat analysis: gold standard; includes all randomized patients regardless of adherence","Vulnerable populations (prisoners, children, pregnant women) have additional research protections"]
      }
    ],
    table: {
      title: "Exceptions to Patient Confidentiality",
      headers: ["Exception","Duty","Report To"],
      rows: [
        ["Tarasoff (threat to identifiable third party)","Warn and protect","Intended victim, law enforcement"],
        ["Child/elder abuse","Mandatory reporting","Child/Adult Protective Services"],
        ["Reportable infectious diseases","Mandatory reporting","Public health department"],
        ["Gunshot/stab wounds","Mandatory reporting","Law enforcement"],
        ["Seizures/driving safety conditions","Mandatory reporting","State DMV/licensing agency"],
        ["Partner notification (HIV/STIs)","Counsel patient; may report if refused","Public health department"]
      ]
    },
    mnemonic: "Informed consent = DCVCC: Disclosure, Comprehension, Voluntariness, Competence, Consent | Decision hierarchy: Patient > Paper (advance directive) > Proxy > People (next of kin)"
  },

  "Substance use disorders": {
    sections: [
      {
        heading: "Alcohol",
        bullets: ["Withdrawal timeline: 6-24h tremor/anxiety → 12-48h seizures → 48-96h delirium tremens (DTs)","DTs: autonomic instability, visual hallucinations, agitation, seizures; can be fatal","Treatment of withdrawal: long-acting benzodiazepines (diazepam, chlordiazepoxide)","Wernicke encephalopathy: confusion + ataxia + oculomotor dysfunction → thiamine deficiency; give thiamine BEFORE glucose","Korsakoff syndrome: irreversible anterograde amnesia + confabulation (untreated Wernicke)","Maintenance: naltrexone (↓ pleasure), acamprosate (↓ craving via glutamate), disulfiram (aversion via aldehyde dehydrogenase inhibition)"]
      },
      {
        heading: "Opioids",
        bullets: ["Intoxication triad: respiratory depression + miosis + CNS depression; antidote = naloxone","Withdrawal: mydriasis, lacrimation, rhinorrhea, piloerection, diarrhea, muscle cramps, yawning (NOT life-threatening)","Medication-assisted treatment: buprenorphine (partial mu agonist, office-based), methadone (full agonist, specialized clinic), naltrexone (antagonist, relapse prevention)","Tolerance ≠ dependence ≠ addiction: three distinct pharmacologic/behavioral concepts"]
      },
      {
        heading: "Stimulants (Cocaine, Amphetamines)",
        bullets: ["Cocaine: blocks norepinephrine/dopamine/serotonin reuptake → sympathomimetic toxidrome","Most dangerous cocaine complication: coronary vasospasm → MI (even in young patients with normal arteries)","Cocaine chest pain: NO beta-blockers (unopposed alpha); use benzodiazepines, nitroglycerin, phentolamine","Methamphetamine: reverses dopamine transporter → massive dopamine release; dental erosion ('meth mouth'), skin picking","Dopamine in mesolimbic pathway = final common pathway for reward/reinforcement of all drugs of abuse"]
      },
      {
        heading: "Sedative-Hypnotics & Other Substances",
        bullets: ["Benzodiazepine withdrawal: CAN be life-threatening (seizures, like alcohol); treat with gradual taper","Life-threatening withdrawals: alcohol, benzodiazepines, barbiturates (all GABA-ergic)","PCP: NMDA antagonist → vertical nystagmus, violence, insensitivity to pain, dissociation","MDMA (ecstasy): serotonin release → empathy, bruxism, hyperthermia, hyponatremia (SIADH)","Inhalants: 'sudden sniffing death' (fatal arrhythmia); most common in young adolescents","Smoking cessation efficacy: varenicline > combination NRT > bupropion > single NRT"]
      }
    ],
    table: {
      title: "Substance Intoxication vs. Withdrawal",
      headers: ["Substance","Intoxication","Withdrawal","Life-Threatening Withdrawal?"],
      rows: [
        ["Alcohol","Disinhibition, slurred speech, ataxia, nystagmus","Tremor, seizures, DTs, autonomic instability","YES"],
        ["Opioids","Miosis, respiratory depression, CNS depression, constipation","Mydriasis, lacrimation, diarrhea, piloerection, yawning","No"],
        ["Cocaine","Euphoria, mydriasis, tachycardia, hypertension, chest pain","Crash (fatigue, depression, hypersomnia, increased appetite)","No"],
        ["Benzodiazepines","Sedation, ataxia, amnesia, respiratory depression","Anxiety, tremor, seizures, insomnia","YES"],
        ["PCP","Vertical nystagmus, violence, analgesia, dissociation","Rarely clinically significant","No"],
        ["MDMA","Empathy, bruxism, hyperthermia, hyponatremia","Depression, fatigue, anxiety","No"],
        ["Cannabis","Euphoria, ↑ appetite, red eyes, impaired coordination","Irritability, insomnia, decreased appetite","No"]
      ]
    },
    mnemonic: "Life-threatening withdrawals = ABB: Alcohol, Benzos, Barbiturates (all enhance GABA) | Opioid overdose triad: Respiratory depression, Miosis, CNS depression → Naloxone | Wernicke triad: Confusion, Ataxia, Oculomotor dysfunction → Thiamine"
  }

};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { BEHAV_QUESTIONS, BEHAV_SUMMARIES };
}
