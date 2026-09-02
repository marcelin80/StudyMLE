const PHARM_QUESTIONS = {

  "Pharmacokinetics": [
    {
      vignette: "A 58-year-old man with heart failure is started on a new oral medication. The drug has a bioavailability of 25%. The physician decides to switch him to the intravenous formulation to achieve the same steady-state plasma concentration. The oral dose was 400 mg every 8 hours.",
      question: "What intravenous dose should be administered every 8 hours to achieve the equivalent systemic exposure?",
      options: ["100 mg","25 mg","200 mg","400 mg","1600 mg"],
      correctIndex: 0,
      explanation: "Bioavailability (F) is the fraction of an oral dose that reaches systemic circulation. If F = 0.25 and the oral dose is 400 mg, the effective systemic dose is 400 × 0.25 = 100 mg. The IV dose needed to match this is 100 mg, since IV bioavailability is 100%.",
      optionExplanations: ["Correct: IV dose = oral dose × F = 400 mg × 0.25 = 100 mg.","Incorrect: 25 mg would underdose the patient significantly; this incorrectly applies F twice.","Incorrect: 200 mg assumes 50% bioavailability, not 25%.","Incorrect: 400 mg IV would deliver four times the effective oral dose, risking toxicity.","Incorrect: 1600 mg incorrectly divides by F instead of multiplying; this would be the required oral dose if the effective dose were 400 mg."],
      highYieldPoint: "IV dose = Oral dose × Bioavailability (F). IV bioavailability is always 1 (100%)."
    },
    {
      vignette: "A clinical pharmacologist is studying a new anxiolytic drug. After IV administration of 500 mg, the plasma concentration immediately after injection is 10 mg/L. The drug distributes rapidly into adipose tissue.",
      question: "What is the apparent volume of distribution (Vd) of this drug?",
      options: ["50 L","10 L","5 L","100 L","500 L"],
      correctIndex: 0,
      explanation: "Vd = Dose / Plasma concentration = 500 mg / 10 mg/L = 50 L. A Vd of 50 L exceeds total body water (~42 L), indicating significant distribution into tissues, consistent with the drug's lipophilicity and adipose sequestration.",
      optionExplanations: ["Correct: Vd = 500 mg ÷ 10 mg/L = 50 L, indicating extensive tissue distribution.","Incorrect: 10 L would suggest distribution limited to extracellular fluid with minimal tissue uptake.","Incorrect: 5 L would correspond to plasma volume only, implying the drug stays entirely intravascular.","Incorrect: 100 L would require the plasma concentration to be 5 mg/L.","Incorrect: 500 L would imply a plasma concentration of only 1 mg/L."],
      highYieldPoint: "Vd = Dose/[Plasma]. Low Vd (3–5 L) = intravascular; high Vd (>42 L) = extensive tissue binding."
    },
    {
      vignette: "A 45-year-old woman with epilepsy is on phenytoin. Her serum level is 25 µg/mL (therapeutic range 10–20 µg/mL). She reports nystagmus and ataxia. Her physician reduces the dose by 10%, but her next level drops to 8 µg/mL.",
      question: "Which pharmacokinetic principle best explains the disproportionately large decrease in phenytoin level after a small dose reduction?",
      options: ["Zero-order (saturation) kinetics","First-order elimination kinetics","Increased renal tubular secretion","Enzyme induction by phenytoin","Decreased protein binding"],
      correctIndex: 0,
      explanation: "Phenytoin exhibits zero-order (saturation) kinetics at therapeutic concentrations because hepatic enzymes become saturated. Small changes in dose cause disproportionately large changes in plasma concentration. When the dose is reduced, metabolism is no longer saturated and the drug is eliminated much faster than expected.",
      optionExplanations: ["Correct: Phenytoin saturates hepatic CYP2C9 at therapeutic doses, leading to zero-order kinetics where small dose changes cause large swings in plasma levels.","Incorrect: First-order kinetics produce proportional changes in concentration with dose changes; the disproportionate drop argues against this.","Incorrect: Phenytoin is primarily hepatically metabolized; renal tubular secretion is not a significant elimination pathway.","Incorrect: While phenytoin can induce CYP enzymes, autoinduction alone would not explain the dramatic drop from a 10% dose reduction.","Incorrect: A decrease in protein binding would transiently increase free drug but would not cause such a large drop in total levels from a minor dose change."],
      highYieldPoint: "Phenytoin and ethanol follow zero-order kinetics at therapeutic doses: rate of elimination is constant regardless of concentration."
    },
    {
      vignette: "A 70-year-old man is started on a drug with a half-life of 12 hours. He takes it at a fixed dose every 12 hours. After how long will his plasma concentration reach approximately 97% of steady state?",
      question: "Approximately how many hours will it take to reach steady state?",
      options: ["12 hours","60 hours","36 hours","48 hours","24 hours"],
      correctIndex: 1,
      explanation: "Steady state is reached in approximately 4–5 half-lives. With a half-life of 12 hours, 97% steady state (~5 half-lives) is reached in 5 × 12 = 60 hours. At 4 half-lives (48 h) the concentration is ~94% of steady state.",
      optionExplanations: ["Incorrect: One half-life reaches only 50% of steady-state concentration.","Correct: Five half-lives (5 × 12 = 60 hours) reach ~96.9% of steady state.","Incorrect: Three half-lives reach 87.5% of steady state.","Incorrect: Four half-lives reach ~93.75% of steady state, close but not 97%.","Incorrect: Two half-lives reach 75% of steady state."],
      highYieldPoint: "Steady state ≈ 4–5 half-lives. This applies regardless of dose, frequency, or route of administration."
    },
    {
      vignette: "A pharmacokinetics researcher measures the area under the plasma concentration-time curve (AUC) for a new antibiotic. The IV AUC is 200 mg·h/L. After oral administration of the same dose, the AUC is 150 mg·h/L.",
      question: "What is the oral bioavailability of this antibiotic?",
      options: ["25%","75%","50%","100%","133%"],
      correctIndex: 1,
      explanation: "Oral bioavailability (F) = AUC(oral) / AUC(IV) = 150 / 200 = 0.75, or 75%. This means 75% of the oral dose reaches the systemic circulation. The 25% loss may be due to incomplete absorption or first-pass metabolism.",
      optionExplanations: ["Incorrect: 25% would be 50/200, not matching the given AUC values.","Correct: F = 150/200 = 0.75 = 75%.","Incorrect: 50% would require an oral AUC of 100 mg·h/L.","Incorrect: 100% bioavailability would require equal AUC values for IV and oral routes.","Incorrect: Bioavailability cannot exceed 100%; 133% would imply the oral AUC exceeds the IV AUC."],
      highYieldPoint: "Bioavailability (F) = AUC(oral) / AUC(IV). First-pass metabolism is the most common cause of reduced oral bioavailability."
    },
    {
      vignette: "A 32-year-old woman takes an overdose of an unknown drug. Her blood work reveals a plasma drug concentration of 80 mg/L. The drug has a Vd of 0.5 L/kg (patient weighs 60 kg) and is highly protein-bound in plasma.",
      question: "Which elimination strategy would be most effective for removing this drug?",
      options: ["Forced alkaline diuresis","Hemodialysis","Whole bowel irrigation","Lipid emulsion therapy","Activated charcoal only"],
      correctIndex: 1,
      explanation: "A low Vd (0.5 L/kg × 60 kg = 30 L) indicates the drug remains primarily in the plasma compartment. High plasma protein binding does not preclude hemodialysis if the drug has a low Vd, as dialysis can effectively remove drugs that remain intravascular. Drugs with very large Vd are sequestered in tissues and poorly removed by dialysis.",
      optionExplanations: ["Incorrect: Forced alkaline diuresis is useful for weak acids with renal elimination (e.g., salicylates) but is not the best general approach for low-Vd drugs.","Correct: Low Vd drugs remain primarily in the plasma and are amenable to removal by hemodialysis.","Incorrect: Whole bowel irrigation is useful for sustained-release formulations or drug packets, not for drugs already absorbed.","Incorrect: Lipid emulsion therapy is reserved for severe local anesthetic toxicity or lipophilic drug overdoses with cardiovascular collapse.","Incorrect: Activated charcoal is most effective within 1–2 hours of ingestion and does not remove drug already in the plasma."],
      highYieldPoint: "Low Vd = drug stays in plasma → amenable to dialysis. High Vd = tissue-bound → dialysis ineffective."
    },
    {
      vignette: "A new antihypertensive is being studied. Its clearance is 6 L/h and its Vd is 42 L. The research team needs to determine dosing intervals for a clinical trial.",
      question: "What is the approximate half-life of this drug?",
      options: ["2 hours","7 hours","5 hours","10 hours","14 hours"],
      correctIndex: 2,
      explanation: "Half-life (t½) = (0.693 × Vd) / Clearance = (0.693 × 42 L) / 6 L/h = 29.1 / 6 = 4.85 hours ≈ 5 hours. This formula relates the two independent pharmacokinetic parameters (Vd and CL) to the dependent parameter (t½).",
      optionExplanations: ["Incorrect: 2 hours would require a clearance of ~14.5 L/h.","Incorrect: 7 hours would correspond to a clearance of ~4.2 L/h.","Correct: t½ = 0.693 × 42/6 ≈ 4.85 hours ≈ 5 hours.","Incorrect: 10 hours would require a clearance of ~2.9 L/h.","Incorrect: 14 hours would require a clearance of ~2.1 L/h."],
      highYieldPoint: "t½ = (0.693 × Vd) / CL. Half-life depends on BOTH volume of distribution and clearance."
    },
    {
      vignette: "A 55-year-old man with chronic kidney disease (GFR 25 mL/min) is prescribed gentamicin. The drug's normal clearance is 100 mL/min, almost entirely via glomerular filtration. The physician adjusts the dose.",
      question: "Which approach is most appropriate for adjusting gentamicin dosing in this patient?",
      options: ["Double the loading dose and halve the maintenance dose","Give a reduced dose at the usual interval","Give the usual dose at longer intervals","No adjustment needed; gentamicin is hepatically metabolized","Increase the dose to compensate for decreased absorption"],
      correctIndex: 2,
      explanation: "For aminoglycosides like gentamicin, which have concentration-dependent killing, it is preferable to maintain peak concentrations for efficacy while extending the dosing interval to allow adequate clearance. Since gentamicin is eliminated almost entirely by glomerular filtration, a GFR of 25% of normal means the half-life is approximately four times longer, necessitating longer intervals.",
      optionExplanations: ["Incorrect: While a loading dose may be appropriate, the recommended approach for aminoglycosides is interval extension rather than arbitrary dose halving.","Incorrect: Reducing the dose while keeping the interval would lower peak concentrations, decreasing the bactericidal efficacy of this concentration-dependent antibiotic.","Correct: Aminoglycosides exhibit concentration-dependent killing; maintaining peak levels with extended intervals preserves efficacy while preventing accumulation.","Incorrect: Gentamicin is cleared renally, not hepatically; dose adjustment is essential in renal impairment.","Incorrect: Renal impairment does not affect drug absorption; increasing the dose would worsen toxicity risk."],
      highYieldPoint: "Concentration-dependent drugs (aminoglycosides): extend interval in renal failure. Time-dependent drugs (β-lactams): reduce dose."
    },
    {
      vignette: "A patient is given a drug by continuous IV infusion. The infusion rate is 50 mg/h and the drug's clearance is 5 L/h. The patient is at steady state.",
      question: "What is the steady-state plasma concentration of this drug?",
      options: ["0.1 mg/L","1 mg/L","10 mg/L","50 mg/L","250 mg/L"],
      correctIndex: 2,
      explanation: "At steady state during continuous IV infusion, the rate of drug input equals the rate of drug elimination. Css = Infusion rate / Clearance = 50 mg/h / 5 L/h = 10 mg/L.",
      optionExplanations: ["Incorrect: 0.1 mg/L would require a clearance of 500 L/h.","Incorrect: 1 mg/L would require a clearance of 50 L/h.","Correct: Css = Infusion rate ÷ Clearance = 50/5 = 10 mg/L.","Incorrect: 50 mg/L confuses the infusion rate with concentration.","Incorrect: 250 mg/L incorrectly multiplies rate and clearance."],
      highYieldPoint: "Css = Infusion rate / Clearance. At steady state, input rate = elimination rate."
    },
    {
      vignette: "A researcher is comparing two formulations of the same drug. Formulation A reaches peak plasma concentration at 1 hour with Cmax of 20 mg/L. Formulation B reaches peak at 4 hours with Cmax of 10 mg/L. Both have identical AUC values.",
      question: "What can be concluded about these two formulations?",
      options: ["Formulation B has lower bioavailability","Formulation A has lower bioavailability","Formulation B has a faster absorption rate","The formulations are bioequivalent","The formulations differ in clearance"],
      correctIndex: 3,
      explanation: "Bioavailability is determined by AUC, not by Cmax or Tmax alone. Since both formulations have identical AUC values, they deliver the same total amount of drug to the systemic circulation and are bioequivalent. The differences in Cmax and Tmax reflect different rates of absorption, not different extents of absorption.",
      optionExplanations: ["Incorrect: Bioavailability is measured by AUC; since AUCs are equal, bioavailability is equal.","Incorrect: Same reasoning; equal AUC means equal bioavailability.","Incorrect: Formulation B has a later Tmax and lower Cmax, indicating slower absorption.","Correct: Equal AUC indicates equal extent of absorption, making the formulations bioequivalent despite different absorption rates.","Incorrect: Both formulations contain the same drug; clearance is a property of the drug and patient, not the formulation."],
      highYieldPoint: "Bioequivalence = same AUC (extent of absorption). Cmax and Tmax reflect rate of absorption."
    },
    {
      vignette: "A clinical trial is evaluating a drug that is 98% protein-bound. A patient in the trial is also taking warfarin (99% protein-bound). After adding the new drug, the patient's INR increases significantly.",
      question: "What is the most likely mechanism for the increased INR?",
      options: ["Inhibition of CYP2C9 by the new drug","Increased warfarin absorption from the gut","Induction of vitamin K epoxide reductase","Displacement of warfarin from albumin binding sites","Decreased renal clearance of warfarin"],
      correctIndex: 3,
      explanation: "When two highly protein-bound drugs compete for the same binding sites on albumin, the displaced drug (warfarin) has a transiently increased free fraction. This free warfarin is pharmacologically active, leading to enhanced anticoagulant effect and elevated INR. Though clinically the effect is often transient as clearance adjusts, this is the classic board-tested mechanism.",
      optionExplanations: ["Incorrect: While CYP2C9 inhibition can increase warfarin levels, the vignette emphasizes both drugs being highly protein-bound, pointing to displacement.","Incorrect: Drug interactions at the absorption level are less likely to cause an acute INR increase in a patient already on stable warfarin therapy.","Incorrect: Induction of vitamin K epoxide reductase would decrease warfarin's effect (this is warfarin's target).","Correct: Displacement of warfarin from albumin increases the free (active) fraction, transiently increasing anticoagulant effect.","Incorrect: Warfarin is primarily hepatically metabolized, not renally cleared."],
      highYieldPoint: "Protein-binding displacement increases the free fraction of highly bound drugs, transiently increasing their effect."
    },
    {
      vignette: "A 62-year-old man with cirrhosis is started on a drug that undergoes extensive first-pass hepatic metabolism. Despite receiving a standard oral dose, he develops signs of drug toxicity.",
      question: "Which pharmacokinetic parameter is most directly altered by hepatic cirrhosis to cause this toxicity?",
      options: ["Volume of distribution","Renal clearance","Absorption rate constant","Oral bioavailability","Protein binding in plasma"],
      correctIndex: 3,
      explanation: "In cirrhosis, reduced hepatic function and portosystemic shunting decrease first-pass metabolism. This increases oral bioavailability, as more drug escapes hepatic extraction and reaches systemic circulation. The result is supratherapeutic plasma levels from a standard oral dose.",
      optionExplanations: ["Incorrect: While Vd may change with ascites, the primary cause of toxicity from standard oral dosing in cirrhosis is reduced first-pass metabolism.","Incorrect: Renal clearance is not directly affected by liver disease (hepatorenal syndrome aside).","Incorrect: The absorption rate constant relates to gut absorption kinetics, which is less directly affected by cirrhosis.","Correct: Cirrhosis decreases first-pass metabolism and creates portosystemic shunts, dramatically increasing oral bioavailability.","Incorrect: While cirrhosis decreases albumin synthesis (reducing protein binding), this alone would not explain toxicity from a drug with high first-pass metabolism."],
      highYieldPoint: "Cirrhosis ↑ oral bioavailability of high-extraction drugs by ↓ first-pass metabolism + portosystemic shunting."
    },
    {
      vignette: "An anesthesiologist administers a bolus of thiopental IV for rapid sequence induction. The patient loses consciousness within 30 seconds. After 5 minutes, the patient begins to awaken despite the drug not having been significantly metabolized.",
      question: "What pharmacokinetic process best explains the rapid termination of thiopental's CNS effect?",
      options: ["Rapid hepatic metabolism","Renal excretion of unchanged drug","Enzymatic degradation in cerebrospinal fluid","Plasma protein binding trapping the drug intravascularly","Redistribution from brain to muscle and fat"],
      correctIndex: 4,
      explanation: "Thiopental is highly lipophilic and rapidly crosses the blood-brain barrier, causing quick onset. However, the drug then redistributes from the well-perfused brain to less-perfused tissues (muscle, then fat), causing brain concentrations to fall and consciousness to return. Actual elimination by hepatic metabolism takes much longer.",
      optionExplanations: ["Incorrect: Thiopental has a long elimination half-life; hepatic metabolism is slow and does not account for the rapid awakening.","Incorrect: Thiopental is not significantly excreted unchanged by the kidneys.","Incorrect: There are no significant drug-metabolizing enzymes in cerebrospinal fluid.","Incorrect: While thiopental is protein-bound, it is the tissue redistribution that explains the rapid offset of CNS effect.","Correct: Redistribution from the brain to peripheral tissues (muscle, fat) rapidly lowers CNS drug levels."],
      highYieldPoint: "Redistribution (not metabolism) terminates the action of single doses of lipophilic IV anesthetics like thiopental."
    },
    {
      vignette: "A pharmacologist plots the plasma concentration of a drug over time after an oral dose on a semi-log graph. She observes a straight-line decline in the elimination phase. Doubling the dose produces a parallel line at exactly twice the concentration.",
      question: "Which type of elimination kinetics does this drug follow?",
      options: ["Zero-order kinetics","Nonlinear kinetics","Mixed-order kinetics","Michaelis-Menten kinetics at saturation","First-order kinetics"],
      correctIndex: 4,
      explanation: "A straight line on a semi-log plot during elimination indicates first-order kinetics, where a constant fraction of drug is eliminated per unit time. Doubling the dose doubles concentrations proportionally at all time points, confirming linearity. In zero-order kinetics, the line would be straight on a linear (not semi-log) plot.",
      optionExplanations: ["Incorrect: Zero-order kinetics produce a straight line on a linear plot, not a semi-log plot.","Incorrect: The proportional response to dose doubling confirms linear (not nonlinear) kinetics.","Incorrect: Mixed-order kinetics would show deviation from linearity at higher concentrations.","Incorrect: Michaelis-Menten kinetics at saturation approximate zero-order kinetics, not first-order.","Correct: First-order kinetics produce a straight line on a semi-log concentration-time plot, and concentrations are proportional to dose."],
      highYieldPoint: "First-order: straight line on semi-log plot, constant fraction eliminated/time. Zero-order: straight line on linear plot, constant amount eliminated/time."
    },
    {
      vignette: "A loading dose of digoxin is given IV to a 75-year-old man with new-onset atrial fibrillation and heart failure. His weight is 70 kg. The target plasma concentration is 1.5 ng/mL and digoxin's Vd is 500 L.",
      question: "What loading dose of IV digoxin is most appropriate?",
      options: ["0.075 mg","0.25 mg","0.50 mg","1.50 mg","0.75 mg"],
      correctIndex: 4,
      explanation: "Loading dose = Cp(target) × Vd = 1.5 ng/mL × 500 L = 750 ng = 0.75 mg. The large Vd of digoxin (due to extensive tissue binding, especially cardiac and skeletal muscle) necessitates a loading dose to rapidly achieve therapeutic concentrations.",
      optionExplanations: ["Incorrect: 0.075 mg is 10-fold too low; this would achieve a plasma level of only 0.15 ng/mL.","Incorrect: 0.25 mg would achieve a plasma level of only 0.5 ng/mL.","Incorrect: 0.50 mg would achieve a plasma level of 1.0 ng/mL, below the target.","Incorrect: 1.50 mg would produce a level of 3.0 ng/mL, risking digoxin toxicity.","Correct: Loading dose = 1.5 ng/mL × 500 L = 750 ng = 0.75 mg."],
      highYieldPoint: "Loading dose = Cp(target) × Vd / F. Large Vd drugs (digoxin, chloroquine) require loading doses."
    }
  ],

  "Pharmacodynamics": [
    {
      vignette: "A researcher performs an experiment comparing Drug A and Drug B on isolated smooth muscle tissue. Drug A produces 100% maximal relaxation at 10 nM, while Drug B produces only 60% maximal relaxation even at very high concentrations.",
      question: "What is the most accurate comparison of these two drugs?",
      options: ["Drug A has greater efficacy than Drug B","Drug B is more potent than Drug A","Drug A is more potent than Drug B","Drug B has greater efficacy than Drug A","Drug A and Drug B have equal efficacy but different potency"],
      correctIndex: 0,
      explanation: "Efficacy refers to the maximal response a drug can produce. Drug A achieves 100% maximal relaxation, while Drug B can only achieve 60%, even at high concentrations. Therefore, Drug A has greater efficacy. Potency refers to the concentration needed to produce a given effect (EC50) and cannot be compared here since they achieve different maxima.",
      optionExplanations: ["Correct: Drug A produces a higher maximal response (100% vs. 60%), indicating greater efficacy.","Incorrect: Same reasoning; potency comparison requires EC50 data at the same effect level.","Incorrect: Potency relates to the concentration needed for a given effect (EC50); the vignette does not provide enough data to compare potency at the same effect level.","Incorrect: Drug B has lower maximal response, meaning lower efficacy.","Incorrect: The drugs have different maximal responses, so they do not have equal efficacy."],
      highYieldPoint: "Efficacy = maximal effect (top of dose-response curve). Potency = dose/concentration needed for a given effect (position along x-axis)."
    },
    {
      vignette: "A pharmacology student plots dose-response curves for morphine, fentanyl, and codeine on pain relief in a standardized assay. All three drugs produce 100% maximal analgesic effect, but fentanyl achieves this at 0.1 mg, morphine at 10 mg, and codeine at 200 mg.",
      question: "Which statement best describes the relationship among these three drugs?",
      options: ["All three drugs have equal efficacy but different potencies","Codeine has the greatest potency","Fentanyl has the greatest efficacy","Morphine is a partial agonist","Fentanyl has the lowest therapeutic index"],
      correctIndex: 0,
      explanation: "Since all three drugs achieve the same maximal effect (100% analgesia), they have equal efficacy. However, fentanyl requires the smallest dose (highest potency), morphine is intermediate, and codeine requires the largest dose (lowest potency). Potency differs, but efficacy is the same.",
      optionExplanations: ["Correct: Equal maximal response = equal efficacy; different doses for the same effect = different potencies.","Incorrect: Codeine requires the highest dose, making it the least potent.","Incorrect: All three reach the same maximal effect; they have equal efficacy.","Incorrect: Morphine is a full agonist at mu-opioid receptors; it achieves 100% maximal effect.","Incorrect: The therapeutic index (TD50/ED50) cannot be determined from the given information."],
      highYieldPoint: "Full agonists with equal Emax have equal efficacy. The one requiring the lowest dose is the most potent."
    },
    {
      vignette: "A patient with chronic pain is switched from morphine to buprenorphine. Despite escalating the buprenorphine dose, the patient cannot achieve the same level of pain relief as with morphine. Adding morphine to the buprenorphine regimen paradoxically worsens analgesia.",
      question: "What is the best explanation for buprenorphine's pharmacodynamic behavior?",
      options: ["Buprenorphine is a partial agonist at mu-opioid receptors","Buprenorphine is a full agonist with low potency","Buprenorphine is a competitive antagonist at opioid receptors","Buprenorphine induces rapid tachyphylaxis","Buprenorphine is an inverse agonist at mu-opioid receptors"],
      correctIndex: 0,
      explanation: "Buprenorphine is a partial agonist at mu-opioid receptors. It has high affinity but lower intrinsic activity than morphine, so it has a ceiling effect for analgesia. When combined with morphine (a full agonist), buprenorphine's high receptor affinity displaces morphine, and its lower intrinsic activity reduces the net effect—acting functionally as an antagonist.",
      optionExplanations: ["Correct: Partial agonists have a ceiling effect and can antagonize full agonists when given together.","Incorrect: A full agonist with low potency would still achieve the same maximal effect at higher doses.","Incorrect: A competitive antagonist would provide no analgesia at all; buprenorphine does produce partial pain relief.","Incorrect: Tachyphylaxis implies rapid tolerance with repeated dosing, not an inherent ceiling on maximal response.","Incorrect: An inverse agonist would produce the opposite effect (increase pain signaling), which is not described."],
      highYieldPoint: "Partial agonists: ceiling effect (lower Emax than full agonists) + can antagonize full agonists by occupying receptors."
    },
    {
      vignette: "An experiment measures the effect of a neuromuscular blocking agent on acetylcholine-induced muscle contraction. Increasing concentrations of acetylcholine can fully overcome the block, shifting the dose-response curve to the right without reducing the maximal response.",
      question: "What type of antagonism does this neuromuscular blocking agent exhibit?",
      options: ["Irreversible antagonism","Competitive antagonism","Noncompetitive antagonism","Uncompetitive antagonism","Physiologic antagonism"],
      correctIndex: 1,
      explanation: "A rightward shift of the dose-response curve with preserved maximal response is the hallmark of competitive (reversible) antagonism. The antagonist competes with the agonist for the same binding site, and a sufficiently high agonist concentration can overcome the block. Nondepolarizing neuromuscular blockers (e.g., tubocurarine) are classic competitive antagonists.",
      optionExplanations: ["Incorrect: Irreversible antagonism would reduce the maximal response because some receptors are permanently inactivated.","Correct: Competitive antagonism produces a rightward shift with preserved Emax; excess agonist can overcome the block.","Incorrect: Noncompetitive antagonism reduces Emax and cannot be overcome by increasing agonist concentration.","Incorrect: Uncompetitive antagonism binds only the agonist-receptor complex and is not overcome by simply increasing agonist.","Incorrect: Physiologic antagonism involves two agonists acting on different receptors with opposing effects (e.g., epinephrine vs. histamine)."],
      highYieldPoint: "Competitive antagonist: rightward shift, same Emax. Noncompetitive antagonist: decreased Emax, no rightward shift."
    },
    {
      vignette: "Phenoxybenzamine is administered to a patient with pheochromocytoma before surgery. Despite a massive catecholamine surge during tumor manipulation, the blood pressure response is significantly blunted. Adding more norepinephrine IV does not fully restore the pressor response.",
      question: "What type of antagonism does phenoxybenzamine exhibit at alpha-adrenergic receptors?",
      options: ["Competitive antagonism","Irreversible (noncompetitive) antagonism","Chemical antagonism","Physiologic antagonism","Partial agonism"],
      correctIndex: 1,
      explanation: "Phenoxybenzamine forms a covalent bond with alpha-adrenergic receptors, making its blockade irreversible. Even high concentrations of norepinephrine cannot displace it. The maximal response is reduced because a fraction of receptors is permanently inactivated. New receptors must be synthesized to restore full function.",
      optionExplanations: ["Incorrect: Competitive antagonism would be overcome by high agonist concentrations; phenoxybenzamine's block cannot be surmounted.","Correct: Phenoxybenzamine covalently alkylates alpha receptors, producing irreversible blockade that reduces Emax.","Incorrect: Chemical antagonism involves direct chemical inactivation of the agonist (e.g., protamine neutralizing heparin).","Incorrect: Physiologic antagonism involves a different receptor system producing the opposite effect.","Incorrect: Partial agonism produces a submaximal response but is reversible and does not involve covalent receptor modification."],
      highYieldPoint: "Phenoxybenzamine = irreversible alpha-blocker (covalent bond). Used preoperatively in pheochromocytoma."
    },
    {
      vignette: "A new drug has an ED50 of 5 mg and a TD50 of 50 mg. Another drug in the same class has an ED50 of 50 mg and a TD50 of 100 mg.",
      question: "Which drug has a greater therapeutic index, and what is its value?",
      options: ["First drug; TI = 45","First drug; TI = 10","Second drug; TI = 2","Second drug; TI = 50","Both drugs have equal therapeutic indices"],
      correctIndex: 1,
      explanation: "Therapeutic index (TI) = TD50/ED50. For the first drug: TI = 50/5 = 10. For the second drug: TI = 100/50 = 2. The first drug has a wider safety margin (TI of 10 vs. 2), meaning the toxic dose is 10 times the effective dose.",
      optionExplanations: ["Incorrect: 45 is the difference (TD50 − ED50), not the ratio.","Correct: TI of Drug 1 = 50/5 = 10, which is greater than Drug 2's TI of 100/50 = 2.","Incorrect: While TI = 2 is correct for Drug 2, the question asks which is greater; Drug 1 has TI = 10.","Incorrect: 50 is not the TI of Drug 2; TI = 100/50 = 2.","Incorrect: The therapeutic indices differ (10 vs. 2)."],
      highYieldPoint: "Therapeutic index (TI) = TD50/ED50. Higher TI = safer drug. Drugs with low TI (e.g., warfarin, lithium, digoxin) require monitoring."
    },
    {
      vignette: "A researcher exposes cultured cells to a drug and measures the response over time. Despite continuous drug exposure at a constant concentration, the cellular response gradually diminishes over 48 hours. Increasing the drug concentration partially restores the response.",
      question: "Which mechanism most likely accounts for the diminished response?",
      options: ["Physiologic antagonism by an endogenous mediator","Pharmacokinetic tolerance from increased metabolism","Receptor downregulation (decreased receptor number)","Chemical degradation of the drug in culture medium","Competitive binding by a metabolite"],
      correctIndex: 2,
      explanation: "In a cell culture system, pharmacokinetic factors (metabolism, distribution) are minimized. The gradual loss of response despite constant drug concentration indicates pharmacodynamic tolerance. Receptor downregulation (internalization and degradation of receptors) reduces the number of available receptors, decreasing the maximal response. Partial restoration with higher concentrations is consistent with fewer available receptors.",
      optionExplanations: ["Incorrect: Physiologic antagonism by an endogenous mediator is less likely in a controlled cell culture system.","Incorrect: In cell culture, there is no hepatic metabolism to induce pharmacokinetic tolerance.","Correct: Receptor downregulation reduces receptor density on the cell surface, diminishing maximal response over time.","Incorrect: While possible, chemical degradation would not be restored by simply increasing concentration (no new drug-receptor interactions expected).","Incorrect: In cell culture with a defined drug, metabolite formation is minimal."],
      highYieldPoint: "Tachyphylaxis/tolerance mechanisms: receptor downregulation, receptor desensitization (phosphorylation), depletion of mediators."
    },
    {
      vignette: "A new drug for hypertension is administered to 100 patients. The dose-response curve shows an ED50 of 40 mg. In safety studies, the TD50 is 200 mg and the LD1 (dose lethal to 1% of subjects) is 80 mg.",
      question: "What is the certain safety factor (CSF) of this drug?",
      options: ["0.5","5","2","10","50"],
      correctIndex: 2,
      explanation: "The certain safety factor (CSF) = LD1/ED99. While ED99 is not directly given, LD1/ED50 approximates the clinical risk. However, the standard CSF = LD1/ED99. Since the question provides LD1 = 80 mg and ED50 = 40 mg, and recognizing that ED99 is typically close to but higher than ED50, CSF ≈ LD1/ED50 = 80/40 = 2. This is a more conservative safety measure than the TI.",
      optionExplanations: ["Incorrect: 0.5 would mean the lethal dose is lower than the effective dose, which is inconsistent with the values.","Incorrect: TI = TD50/ED50 = 200/40 = 5, but that is the therapeutic index, not the CSF.","Correct: CSF ≈ LD1/ED99 ≈ 80/40 = 2 (using ED50 as an approximation of ED99 for this question).","Incorrect: 10 does not correspond to any ratio of the given values.","Incorrect: 50 does not correspond to any ratio of the given values."],
      highYieldPoint: "Certain safety factor (LD1/ED99) is more conservative than TI (TD50/ED50). CSF accounts for overlap of dose-response curves."
    },
    {
      vignette: "After prolonged use of albuterol for asthma, a patient notices the drug is less effective. His physician explains that the beta-2 receptors have been phosphorylated by a kinase, uncoupling them from their G-protein signaling pathway.",
      question: "Which kinase is most likely responsible for this receptor desensitization?",
      options: ["Protein kinase A (PKA)","Protein kinase C (PKC)","G-protein-coupled receptor kinase (GRK)","Tyrosine kinase","Janus kinase (JAK)"],
      correctIndex: 2,
      explanation: "G-protein-coupled receptor kinases (GRKs, formerly beta-adrenergic receptor kinase/BARK) phosphorylate agonist-occupied GPCRs. This promotes binding of beta-arrestin, which uncouples the receptor from its G-protein and targets it for internalization. This is the primary mechanism of homologous desensitization.",
      optionExplanations: ["Incorrect: PKA mediates heterologous desensitization (phosphorylation of receptors regardless of agonist occupancy) but is not the primary kinase for homologous desensitization.","Incorrect: PKC can contribute to receptor regulation but is not the principal kinase in agonist-specific GPCR desensitization.","Correct: GRKs phosphorylate agonist-bound GPCRs, leading to beta-arrestin binding, G-protein uncoupling, and receptor internalization.","Incorrect: Tyrosine kinases are associated with growth factor receptors (e.g., insulin, EGF), not GPCR desensitization.","Incorrect: JAKs signal downstream of cytokine receptors, not GPCRs."],
      highYieldPoint: "Homologous desensitization: GRK phosphorylates agonist-bound GPCR → β-arrestin binds → receptor internalized."
    },
    {
      vignette: "A researcher studies a new drug that binds to the allosteric site of a GABA-A receptor. Alone, it produces no chloride current. In the presence of GABA, it dramatically enhances the chloride current produced by GABA.",
      question: "This drug is best classified as which of the following?",
      options: ["GABA-A receptor full agonist","GABA-A receptor competitive antagonist","GABA-A receptor inverse agonist","GABA-A receptor positive allosteric modulator","GABA-A receptor partial agonist"],
      correctIndex: 3,
      explanation: "A drug that has no effect alone but enhances the response to the endogenous ligand (GABA) when given together is a positive allosteric modulator (PAM). It binds to a site distinct from the GABA binding site and increases the receptor's response to GABA. Benzodiazepines are classic PAMs at GABA-A receptors.",
      optionExplanations: ["Incorrect: A full agonist would produce chloride current on its own; this drug has no effect alone.","Incorrect: A competitive antagonist would block GABA's effect, not enhance it.","Incorrect: An inverse agonist would produce the opposite effect of GABA (decrease chloride conductance).","Correct: Positive allosteric modulators enhance agonist response without producing an effect when given alone.","Incorrect: A partial agonist would produce a submaximal chloride current on its own."],
      highYieldPoint: "Benzodiazepines = positive allosteric modulators of GABA-A (increase frequency of Cl⁻ channel opening). No effect without GABA."
    },
    {
      vignette: "Two antihypertensive drugs are tested. Drug X alone lowers MAP by 10 mmHg. Drug Y alone lowers MAP by 15 mmHg. When given together, MAP decreases by 40 mmHg.",
      question: "What type of drug interaction is demonstrated?",
      options: ["Additive","Tachyphylaxis","Antagonistic","Synergistic (potentiation)","Chemical interaction"],
      correctIndex: 3,
      explanation: "If the effects were additive, the combined reduction would be 10 + 15 = 25 mmHg. The observed reduction of 40 mmHg exceeds the sum of individual effects, indicating synergism (potentiation). Synergism means the combined effect is greater than the sum of individual effects.",
      optionExplanations: ["Incorrect: Additive effects would produce exactly 25 mmHg reduction (10 + 15).","Incorrect: Tachyphylaxis refers to rapid tolerance with repeated dosing of a single drug.","Incorrect: Antagonism would produce an effect less than either drug alone.","Correct: The combined effect (40 mmHg) exceeds the sum of individual effects (25 mmHg), defining synergism.","Incorrect: Chemical interaction involves direct drug-drug chemical reaction, not enhanced pharmacologic effect."],
      highYieldPoint: "Synergism: combined effect > sum of individual effects. Additive: combined = sum. Antagonism: combined < individual effects."
    },
    {
      vignette: "A patient on long-term prednisone therapy has her dose abruptly discontinued. She develops hypotension, weakness, and hypoglycemia. Her endogenous cortisol level is undetectable.",
      question: "Which pharmacodynamic principle best explains the patient's adrenal insufficiency?",
      options: ["Receptor upregulation from chronic agonist exposure","Desensitization of glucocorticoid receptors","Tachyphylaxis due to receptor internalization","Downregulation of the hypothalamic-pituitary-adrenal axis","Physiologic antagonism by endogenous mineralocorticoids"],
      correctIndex: 3,
      explanation: "Chronic exogenous corticosteroid administration suppresses CRH and ACTH secretion via negative feedback, leading to adrenal atrophy. Upon abrupt withdrawal, the HPA axis cannot respond appropriately, and endogenous cortisol production is insufficient. This represents downregulation of the regulatory axis, not the receptor.",
      optionExplanations: ["Incorrect: Chronic agonist exposure typically causes receptor downregulation, not upregulation. Moreover, the issue here is axis suppression.","Incorrect: Receptor desensitization would reduce the response to cortisol but would not explain absent cortisol production.","Incorrect: Tachyphylaxis is a rapid onset phenomenon, not a chronic suppression of an endocrine axis.","Correct: Chronic exogenous steroids suppress the HPA axis (↓CRH, ↓ACTH), causing adrenal atrophy and inability to produce cortisol.","Incorrect: Mineralocorticoids do not antagonize glucocorticoid function in this context."],
      highYieldPoint: "Chronic steroid use suppresses HPA axis → adrenal atrophy. Taper slowly to allow recovery. Abrupt withdrawal → adrenal crisis."
    },
    {
      vignette: "A pharmacologist tests a new compound at muscarinic receptors. The drug produces maximal salivation at low doses. At increasing doses, salivation paradoxically decreases despite continued receptor binding.",
      question: "Which concept best explains the biphasic dose-response relationship?",
      options: ["Spare receptors at low occupancy","Non-receptor-mediated toxicity at high doses","Desensitization only at high concentrations","Autoinhibition via presynaptic receptors","Hormesis"],
      correctIndex: 4,
      explanation: "Hormesis is a biphasic dose-response phenomenon where low doses produce a stimulatory effect and high doses produce an inhibitory effect (or vice versa). This results in an inverted U-shaped dose-response curve. While the mechanisms vary, this biphasic pattern is the defining feature of hormesis.",
      optionExplanations: ["Incorrect: Spare receptors explain why a submaximal receptor occupancy produces a full response, but do not explain a decrease in response at higher doses.","Incorrect: Non-receptor toxicity could cause adverse effects but would not specifically reduce salivation through the same receptor mechanism.","Incorrect: Desensitization could reduce effect at high concentrations but usually occurs with prolonged exposure, not with dose escalation in a single experiment.","Incorrect: Presynaptic autoinhibition could reduce neurotransmitter release but would not apply to direct muscarinic agonist effects on salivary glands.","Correct: Hormesis describes the biphasic (inverted U-shaped) dose-response relationship where low doses stimulate and high doses inhibit."],
      highYieldPoint: "Hormesis: biphasic dose-response (stimulatory at low dose, inhibitory at high dose). Results in inverted U-shaped curve."
    },
    {
      vignette: "An experimental drug achieves 80% of its maximal receptor-mediated effect when only 20% of receptors are occupied. After irreversible inactivation of 50% of the total receptor population with an alkylating agent, the drug still achieves 80% of the original maximal response, but at a higher concentration.",
      question: "What concept best explains the maintained response despite loss of 50% of receptors?",
      options: ["Receptor upregulation","Signal amplification by new receptor synthesis","Increased drug potency","Allosteric modulation","Spare receptors (receptor reserve)"],
      correctIndex: 4,
      explanation: "Spare receptors (receptor reserve) exist when the maximal response can be achieved without full receptor occupancy. In this case, since 80% effect requires only 20% occupancy, there is a large receptor reserve. Even after 50% of receptors are destroyed, enough receptors remain to produce the same maximal effect, though more drug is needed (lower apparent potency).",
      optionExplanations: ["Incorrect: Receptor upregulation implies new receptor synthesis in response to reduced signaling, which takes days and is not the explanation for an acute experiment.","Incorrect: New receptor synthesis occurs over days; this is an acute experiment.","Incorrect: Potency actually decreases (higher concentration needed) after receptor loss; it does not increase.","Incorrect: Allosteric modulation involves a modulatory binding site and is not described here.","Correct: Spare receptors mean Emax is achieved at submaximal occupancy; destroying some receptors reduces potency but preserves Emax until the reserve is exhausted."],
      highYieldPoint: "Spare receptors: maximal response at <100% occupancy. Loss of spare receptors → ↓potency (rightward shift) before ↓Emax."
    },
    {
      vignette: "A Phase I clinical trial tests escalating doses of a new analgesic. At low doses (1–10 mg), the dose-response curve follows a classic sigmoid shape. The drug shows no additional benefit above 50 mg and the ED50 is 15 mg. The dose-response curve for sedation (an adverse effect) has an ED50 of 45 mg.",
      question: "At what dose is the best balance of analgesic efficacy and safety?",
      options: ["1 mg","60 mg","30 mg","45 mg","15 mg"],
      correctIndex: 4,
      explanation: "The ED50 for the therapeutic effect (analgesia) is 15 mg, which produces 50% of maximal pain relief. At this dose, the risk of sedation is low since the sedation ED50 is 45 mg (the dose at which 50% of patients experience sedation). The optimal dose balances therapeutic effect with minimal adverse effects.",
      optionExplanations: ["Incorrect: 1 mg is far below the ED50 and would provide minimal analgesia.","Incorrect: 60 mg exceeds both the analgesic plateau and the sedation ED50.","Incorrect: While 30 mg provides more analgesia, it approaches the sedation ED50, increasing adverse effect risk.","Incorrect: 45 mg is the sedation ED50; 50% of patients would experience sedation.","Correct: 15 mg (analgesic ED50) provides significant pain relief while remaining well below the sedation ED50 of 45 mg."],
      highYieldPoint: "Optimal dosing maximizes therapeutic response while minimizing adverse effects. Wider separation of dose-response curves = safer."
    }
  ],

  "Autonomic drugs": [
    {
      vignette: "A 28-year-old woman presents with acute angle-closure glaucoma. The ophthalmologist instills a miotic agent that directly stimulates muscarinic receptors on the pupillary sphincter muscle, causing pupil constriction and opening the trabecular meshwork.",
      question: "Which drug was most likely administered?",
      options: ["Pilocarpine","Tropicamide","Phenylephrine","Timolol","Atropine"],
      correctIndex: 0,
      explanation: "Pilocarpine is a direct-acting muscarinic agonist (cholinomimetic) that causes miosis (pupillary constriction) by contracting the sphincter pupillae muscle and ciliary muscle. This opens the trabecular meshwork, facilitating aqueous humor drainage and reducing intraocular pressure in acute angle-closure glaucoma.",
      optionExplanations: ["Correct: Pilocarpine is a direct muscarinic agonist causing miosis; first-line for acute angle-closure glaucoma.","Incorrect: Tropicamide is a muscarinic antagonist that causes mydriasis (pupil dilation), worsening angle closure.","Incorrect: Phenylephrine is an alpha-1 agonist causing mydriasis, which would worsen angle closure.","Incorrect: Timolol is a beta-blocker that reduces aqueous humor production but does not cause miosis.","Incorrect: Atropine is a muscarinic antagonist causing mydriasis, contraindicated in angle-closure glaucoma."],
      highYieldPoint: "Pilocarpine (muscarinic agonist) → miosis → opens trabecular meshwork → ↓IOP. First-line for acute angle-closure glaucoma."
    },
    {
      vignette: "A 65-year-old man with myasthenia gravis is being treated with a medication that inhibits acetylcholinesterase. He develops excessive salivation, lacrimation, urination, and diarrhea. He also has bradycardia and miosis.",
      question: "Which drug is most likely responsible for these symptoms?",
      options: ["Neostigmine","Succinylcholine","Tubocurarine","Atropine","Scopolamine"],
      correctIndex: 0,
      explanation: "Neostigmine is a reversible acetylcholinesterase inhibitor used to treat myasthenia gravis. By inhibiting AChE, it increases acetylcholine at both nicotinic (neuromuscular junction) and muscarinic synapses. Excessive muscarinic stimulation causes the SLUDGE/DUMBBELSS symptoms: salivation, lacrimation, urination, diarrhea, bradycardia, and miosis.",
      optionExplanations: ["Correct: Neostigmine inhibits AChE, increasing ACh at muscarinic and nicotinic sites, causing cholinergic excess (SLUDGE symptoms).","Incorrect: Succinylcholine is a depolarizing neuromuscular blocker, not an AChE inhibitor.","Incorrect: Tubocurarine is a nondepolarizing neuromuscular blocker (competitive antagonist at nicotinic receptors).","Incorrect: Atropine is a muscarinic antagonist that would cause the opposite effects (dry mouth, tachycardia, mydriasis).","Incorrect: Scopolamine is also a muscarinic antagonist used for motion sickness."],
      highYieldPoint: "AChE inhibitors (neostigmine, pyridostigmine) → ↑ACh → muscarinic excess (SLUDGE/DUMBBELSS). Treat toxicity with atropine."
    },
    {
      vignette: "A 72-year-old man with urinary retention secondary to benign prostatic hyperplasia is started on a medication that selectively blocks alpha-1A adrenergic receptors in the prostate. He reports improved urinary flow but no significant change in blood pressure.",
      question: "Which drug was most likely prescribed?",
      options: ["Tamsulosin","Prazosin","Phentolamine","Propranolol","Clonidine"],
      correctIndex: 0,
      explanation: "Tamsulosin is a selective alpha-1A adrenergic antagonist. The alpha-1A subtype predominates in prostate smooth muscle. By selectively blocking this subtype, tamsulosin relaxes prostatic smooth muscle and improves urine flow with minimal effect on vascular alpha-1B receptors, thus causing less orthostatic hypotension than nonselective alpha-blockers.",
      optionExplanations: ["Correct: Tamsulosin selectively blocks alpha-1A receptors in the prostate, improving urine flow with minimal blood pressure effect.","Incorrect: Prazosin is a nonselective alpha-1 blocker (blocks all alpha-1 subtypes), causing significant orthostatic hypotension.","Incorrect: Phentolamine is a nonselective alpha-blocker (alpha-1 and alpha-2), causing significant cardiovascular effects.","Incorrect: Propranolol is a nonselective beta-blocker with no direct effect on prostatic smooth muscle.","Incorrect: Clonidine is a central alpha-2 agonist that lowers blood pressure but does not target prostatic alpha-1A receptors."],
      highYieldPoint: "Tamsulosin = selective α1A-blocker for BPH. Less orthostatic hypotension than nonselective α1-blockers (prazosin, doxazosin)."
    },
    {
      vignette: "A 5-year-old boy is brought to the ED after eating wild mushrooms. He presents with profuse salivation, tearing, vomiting, diarrhea, bradycardia, and wheezing. His pupils are pinpoint.",
      question: "Which drug is the most appropriate initial treatment?",
      options: ["Neostigmine","Atropine","Pralidoxime","Physostigmine","Epinephrine"],
      correctIndex: 1,
      explanation: "The symptoms describe muscarinic toxicity from muscarinic mushroom poisoning (likely Amanita muscaria or Inocybe/Clitocybe species). Atropine is a competitive muscarinic antagonist that blocks the effects of excessive acetylcholine at muscarinic receptors, reversing bradycardia, bronchospasm, secretions, and miosis.",
      optionExplanations: ["Incorrect: Neostigmine is an AChE inhibitor that would worsen cholinergic toxicity.","Correct: Atropine blocks muscarinic receptors, reversing the life-threatening effects of muscarinic agonist poisoning.","Incorrect: Pralidoxime reactivates AChE in organophosphate poisoning by regenerating the enzyme; it is not indicated for direct muscarinic agonist poisoning.","Incorrect: Physostigmine is an AChE inhibitor (crosses BBB); it would worsen symptoms.","Incorrect: Epinephrine is used for anaphylaxis; it would not address the underlying muscarinic toxicity."],
      highYieldPoint: "Muscarinic poisoning (mushrooms, organophosphates) → SLUDGE/DUMBBELSS → treat with atropine (muscarinic antagonist)."
    },
    {
      vignette: "A 50-year-old woman undergoing general anesthesia receives a neuromuscular blocker for intubation. After surgery, the anesthesiologist wants to reverse residual neuromuscular blockade. The blocker used was rocuronium, a nondepolarizing agent.",
      question: "Which drug is most appropriate to reverse the neuromuscular blockade?",
      options: ["Atropine alone","Neostigmine with glycopyrrolate","Succinylcholine","Dantrolene","Ephedrine"],
      correctIndex: 1,
      explanation: "Neostigmine (an AChE inhibitor) increases ACh at the neuromuscular junction, which competes with the nondepolarizing blocker (rocuronium) for nicotinic receptors, reversing the block. Glycopyrrolate (a muscarinic antagonist) is co-administered to prevent the muscarinic side effects of increased ACh (bradycardia, excessive secretions).",
      optionExplanations: ["Incorrect: Atropine alone blocks muscarinic receptors but does not increase ACh at the NMJ to reverse the block.","Correct: Neostigmine ↑ACh at NMJ to overcome nondepolarizing block; glycopyrrolate prevents muscarinic side effects.","Incorrect: Succinylcholine is a depolarizing NMJ blocker that would add to, not reverse, the paralysis.","Incorrect: Dantrolene acts on the ryanodine receptor in skeletal muscle and is used for malignant hyperthermia, not reversal of NMJ block.","Incorrect: Ephedrine is a sympathomimetic used for hypotension; it has no role in reversing neuromuscular blockade."],
      highYieldPoint: "Reverse nondepolarizing NMJ block: neostigmine + glycopyrrolate (or atropine). Sugammadex is an alternative for rocuronium."
    },
    {
      vignette: "A 35-year-old woman is undergoing a diagnostic procedure that requires mydriasis. The ophthalmologist instills a short-acting muscarinic antagonist. Two hours later, her pupils have returned to normal size.",
      question: "Which drug was most likely used?",
      options: ["Atropine","Tropicamide","Scopolamine","Cyclopentolate","Homatropine"],
      correctIndex: 1,
      explanation: "Tropicamide is a short-acting muscarinic antagonist used for diagnostic mydriasis. Its effect lasts 2–6 hours, making it ideal for routine eye exams. Atropine and scopolamine produce mydriasis lasting days, while cyclopentolate and homatropine have intermediate durations.",
      optionExplanations: ["Incorrect: Atropine causes mydriasis lasting 7–14 days and is not used for routine diagnostic exams.","Correct: Tropicamide provides short-acting mydriasis (2–6 hours), ideal for diagnostic procedures.","Incorrect: Scopolamine has a long duration of action and is typically used transdermally for motion sickness.","Incorrect: Cyclopentolate causes mydriasis lasting 24 hours, longer than described.","Incorrect: Homatropine causes mydriasis lasting 1–3 days."],
      highYieldPoint: "Mydriatic agents by duration: tropicamide (shortest, 2–6h) < cyclopentolate (24h) < homatropine (1–3d) < atropine (7–14d)."
    },
    {
      vignette: "A 40-year-old man with pheochromocytoma is prepared for surgery. His preoperative regimen includes an alpha-blocker started 10–14 days before surgery, followed by a beta-blocker only after adequate alpha-blockade is achieved.",
      question: "Why must alpha-blockade precede beta-blockade in pheochromocytoma management?",
      options: ["Beta-blockers worsen hyperglycemia from catecholamine excess","Alpha-blockers cannot be used concurrently with beta-blockers","Unopposed alpha-stimulation after beta-blockade can cause hypertensive crisis","Beta-blockers reduce catecholamine secretion from the tumor","Alpha-blockers must be loaded for 2 weeks to reach therapeutic levels"],
      correctIndex: 2,
      explanation: "In pheochromocytoma, excess catecholamines stimulate both alpha and beta receptors. If a beta-blocker is given first, it removes beta-2-mediated vasodilation, leaving alpha-mediated vasoconstriction unopposed. This can precipitate a severe hypertensive crisis. Alpha-blockade must be established first to prevent this, after which beta-blockers can be safely added to control reflex tachycardia.",
      optionExplanations: ["Incorrect: While catecholamines affect glucose, this is not the reason for sequencing alpha- before beta-blockade.","Incorrect: Alpha- and beta-blockers are routinely used together; the issue is the sequence of initiation.","Correct: Beta-blockade alone removes β2 vasodilation → unopposed α1 vasoconstriction → hypertensive crisis.","Incorrect: Beta-blockers do not reduce catecholamine secretion from the tumor.","Incorrect: Alpha-blockers do not require 2 weeks for pharmacologic action; the preoperative period allows volume expansion and blood pressure optimization."],
      highYieldPoint: "Pheochromocytoma: α-blockade FIRST (phenoxybenzamine), then β-blocker. Never β-blocker alone → unopposed α → hypertensive crisis."
    },
    {
      vignette: "A 62-year-old man with COPD and open-angle glaucoma needs an ocular beta-blocker to reduce intraocular pressure. His ophthalmologist chooses a beta-1 selective agent to minimize pulmonary side effects.",
      question: "Which beta-blocker eye drop is most appropriate for this patient?",
      options: ["Timolol","Carteolol","Betaxolol","Levobunolol","Metipranolol"],
      correctIndex: 2,
      explanation: "Betaxolol is a selective beta-1 adrenergic antagonist. While it reduces aqueous humor production to lower IOP, its beta-1 selectivity minimizes the risk of bronchospasm in COPD patients. Timolol, carteolol, levobunolol, and metipranolol are nonselective beta-blockers that can precipitate bronchospasm via beta-2 blockade.",
      optionExplanations: ["Incorrect: Timolol is a nonselective beta-blocker; even topical use can cause systemic beta-2 blockade and bronchospasm in COPD patients.","Incorrect: Carteolol is a nonselective beta-blocker with intrinsic sympathomimetic activity but still carries bronchospasm risk.","Correct: Betaxolol is beta-1 selective, reducing the risk of bronchoconstriction in patients with COPD or asthma.","Incorrect: Levobunolol is a nonselective beta-blocker with significant beta-2 blocking activity.","Incorrect: Metipranolol is a nonselective beta-blocker."],
      highYieldPoint: "Betaxolol = β1-selective ophthalmic beta-blocker → safer in COPD/asthma. All other ophthalmic β-blockers are nonselective."
    },
    {
      vignette: "A 24-year-old man is brought to the ER after a cocaine overdose. He is agitated, hypertensive (BP 210/130), tachycardic (HR 150), and diaphoretic. His ECG shows ST elevations in leads II, III, and aVF.",
      question: "Which antihypertensive should be AVOIDED in this patient?",
      options: ["Phentolamine","Nitroprusside","Propranolol","Benzodiazepines","Nitroglycerin"],
      correctIndex: 2,
      explanation: "Propranolol (nonselective beta-blocker) should be avoided in cocaine-induced hypertensive crisis. Cocaine blocks norepinephrine reuptake, causing intense alpha and beta stimulation. Blocking beta-2 vasodilation with propranolol leaves alpha-mediated vasoconstriction unopposed, which can paradoxically worsen hypertension and coronary vasospasm.",
      optionExplanations: ["Incorrect: Phentolamine (alpha-blocker) is appropriate for cocaine-induced hypertension as it directly opposes alpha-vasoconstriction.","Incorrect: Nitroprusside is a direct vasodilator that can safely lower BP in this setting.","Correct: Propranolol causes unopposed alpha stimulation in the setting of cocaine use, worsening hypertension and coronary vasospasm.","Incorrect: Benzodiazepines are first-line for cocaine toxicity—they reduce sympathetic drive centrally.","Incorrect: Nitroglycerin is appropriate for cocaine-associated chest pain and coronary vasospasm."],
      highYieldPoint: "NEVER give nonselective β-blockers for cocaine-induced hypertension → unopposed α → worsened HTN and coronary spasm. Use benzos first."
    },
    {
      vignette: "A 68-year-old woman with Alzheimer disease is started on a centrally-acting acetylcholinesterase inhibitor to improve cognitive function. Her family reports modest improvement in memory and attention after several weeks.",
      question: "Which drug was most likely prescribed?",
      options: ["Neostigmine","Edrophonium","Echothiophate","Donepezil","Pyridostigmine"],
      correctIndex: 3,
      explanation: "Donepezil is a centrally-acting, reversible AChE inhibitor that crosses the blood-brain barrier to increase ACh levels in the CNS. It is a first-line treatment for mild to moderate Alzheimer disease. Neostigmine and pyridostigmine do not cross the BBB. Edrophonium is ultra-short-acting (diagnostic use only). Echothiophate is an irreversible AChE inhibitor used topically for glaucoma.",
      optionExplanations: ["Incorrect: Neostigmine does not cross the blood-brain barrier (quaternary amine); used for myasthenia gravis and NMJ block reversal.","Incorrect: Edrophonium is ultra-short-acting and used diagnostically for myasthenia gravis (Tensilon test), not for chronic treatment.","Incorrect: Echothiophate is an irreversible AChE inhibitor applied topically to the eye for glaucoma.","Correct: Donepezil crosses the BBB and reversibly inhibits AChE centrally, improving cholinergic transmission in Alzheimer disease.","Incorrect: Pyridostigmine does not cross the BBB significantly; used for myasthenia gravis."],
      highYieldPoint: "Alzheimer drugs: donepezil, rivastigmine, galantamine (AChE inhibitors that cross BBB); memantine (NMDA antagonist for moderate-severe)."
    },
    {
      vignette: "A 30-year-old man with seasonal allergies takes a first-generation antihistamine. He complains of dry mouth, blurred vision, constipation, and urinary hesitancy in addition to drowsiness.",
      question: "These side effects are best explained by which pharmacologic property of first-generation antihistamines?",
      options: ["Alpha-adrenergic blockade","Serotonin receptor antagonism","Dopamine receptor blockade","Muscarinic receptor antagonism (anticholinergic effect)","Nicotinic receptor blockade"],
      correctIndex: 3,
      explanation: "First-generation antihistamines (e.g., diphenhydramine, chlorpheniramine) have significant muscarinic (anticholinergic) activity in addition to H1 blockade. This causes dry mouth (decreased salivation), blurred vision (cycloplegia), constipation (decreased GI motility), and urinary retention (detrusor relaxation). Their CNS penetration causes sedation.",
      optionExplanations: ["Incorrect: Alpha-blockade would cause orthostatic hypotension, not the described anticholinergic symptoms.","Incorrect: Serotonin antagonism is associated with some antiemetics (ondansetron) but does not explain these symptoms.","Incorrect: Dopamine blockade is associated with antipsychotics (extrapyramidal symptoms), not antihistamines.","Correct: Antimuscarinic activity of first-generation antihistamines causes dry mouth, blurred vision, constipation, and urinary retention.","Incorrect: Nicotinic blockade would cause skeletal muscle weakness, not the described autonomic symptoms."],
      highYieldPoint: "First-generation antihistamines: cross BBB (sedation) + antimuscarinic (dry mouth, blurred vision, constipation, urinary retention)."
    },
    {
      vignette: "A 55-year-old man undergoes a cardiac stress test. To pharmacologically increase heart rate and contractility, the cardiologist administers a drug that acts on beta-1 adrenergic receptors. The patient's heart rate increases from 70 to 110 bpm and blood pressure rises from 120/80 to 150/90 mmHg.",
      question: "Which drug was most likely administered?",
      options: ["Isoproterenol","Norepinephrine","Phenylephrine","Dobutamine","Albuterol"],
      correctIndex: 3,
      explanation: "Dobutamine is a synthetic catecholamine that primarily stimulates beta-1 adrenergic receptors, increasing heart rate and contractility (positive chronotropic and inotropic effects). It is used in pharmacologic stress testing and acute heart failure. Isoproterenol stimulates both beta-1 and beta-2 receptors and is rarely used for stress testing.",
      optionExplanations: ["Incorrect: Isoproterenol is a nonselective beta-agonist (β1 + β2) that causes vasodilation (β2) and tachycardia, typically decreasing diastolic BP.","Incorrect: Norepinephrine is an α1 + β1 agonist used for septic shock; it causes significant vasoconstriction with reflex bradycardia.","Incorrect: Phenylephrine is a pure alpha-1 agonist that increases blood pressure via vasoconstriction but causes reflex bradycardia.","Correct: Dobutamine primarily stimulates β1 receptors, increasing HR and contractility; commonly used in pharmacologic stress tests.","Incorrect: Albuterol is a β2-selective agonist used for bronchospasm; it has minimal β1 effects at therapeutic doses."],
      highYieldPoint: "Dobutamine = β1 agonist (↑HR, ↑contractility). Used for cardiac stress tests and acute decompensated heart failure."
    },
    {
      vignette: "A 45-year-old woman presents to the ER with symptomatic bradycardia (HR 35 bpm) following an overdose of her beta-blocker medication. IV fluids and atropine have been ineffective.",
      question: "Which drug is the most appropriate next step to manage this refractory bradycardia?",
      options: ["Epinephrine","Calcium chloride","Isoproterenol","Dopamine","Glucagon"],
      correctIndex: 4,
      explanation: "Glucagon is the antidote for beta-blocker overdose with refractory bradycardia and hypotension. It activates cardiac adenylyl cyclase via a non-beta-receptor mechanism (glucagon receptor), increasing cAMP and improving heart rate and contractility independent of beta-adrenergic receptors, thereby bypassing the blockade.",
      optionExplanations: ["Incorrect: Epinephrine works via beta receptors, which are blocked; it may be used but is less reliable when beta receptors are saturated with antagonist.","Incorrect: Calcium chloride is used for calcium channel blocker overdose, not primarily for beta-blocker toxicity.","Incorrect: Isoproterenol acts on beta receptors, which are blocked; it would be ineffective.","Incorrect: Dopamine's cardiac effects are partly beta-receptor dependent and would be blunted by beta-blocker overdose.","Correct: Glucagon bypasses beta receptors by activating the glucagon receptor → adenylyl cyclase → ↑cAMP → ↑HR and contractility."],
      highYieldPoint: "Beta-blocker overdose → glucagon (bypasses β-receptors via glucagon receptor → ↑cAMP). CCB overdose → calcium + glucagon."
    },
    {
      vignette: "A 22-year-old man with a history of severe anaphylaxis carries an epinephrine auto-injector. During an allergic reaction at a restaurant, he self-administers the device into his lateral thigh.",
      question: "Which combination of adrenergic receptor effects is most critical for epinephrine's life-saving action in anaphylaxis?",
      options: ["α1 mydriasis and β1 chronotropy","β1 chronotropy and β2 bronchodilation only","α2 presynaptic inhibition and β1 inotropy","β2 bronchodilation and β2 vasodilation","α1 vasoconstriction and β2 bronchodilation"],
      correctIndex: 4,
      explanation: "In anaphylaxis, epinephrine's most critical actions are: (1) α1-mediated vasoconstriction, which reverses hypotension and reduces mucosal edema, and (2) β2-mediated bronchodilation, which reverses bronchospasm. β1 effects (increased HR and contractility) provide additional cardiac support. The α1 + β2 combination addresses the two most life-threatening manifestations.",
      optionExplanations: ["Incorrect: α1 mydriasis is an ocular effect irrelevant to anaphylaxis treatment.","Incorrect: β1 chronotropy helps but does not address the vasodilatation and edema; β2 alone is incomplete.","Incorrect: α2 presynaptic inhibition reduces NE release and is not a beneficial effect in anaphylaxis.","Incorrect: β2 vasodilation would worsen the hypotension of anaphylaxis.","Correct: α1 vasoconstriction (reverses hypotension/edema) + β2 bronchodilation (reverses bronchospasm) are the critical life-saving effects."],
      highYieldPoint: "Epinephrine in anaphylaxis: α1 → vasoconstriction (↑BP, ↓edema); β2 → bronchodilation; β1 → ↑cardiac output. IM injection preferred."
    },
    {
      vignette: "A 60-year-old man on clonidine for hypertension abruptly stops taking his medication after running out of refills. Over the next 24 hours, he develops severe rebound hypertension with headache, diaphoresis, and tachycardia.",
      question: "What is the mechanism of clonidine's antihypertensive action, and why does abrupt withdrawal cause rebound hypertension?",
      options: ["Blocks α1 receptors peripherally; withdrawal unmasks receptor upregulation","Inhibits angiotensin-converting enzyme; withdrawal causes renin rebound","Blocks β1 receptors centrally; withdrawal causes reflex tachycardia","Stimulates peripheral β2 receptors for vasodilation; withdrawal removes vasodilation","Stimulates central α2 receptors to reduce sympathetic outflow; withdrawal causes sympathetic surge from receptor upregulation"],
      correctIndex: 4,
      explanation: "Clonidine is a central alpha-2 adrenergic agonist. By stimulating presynaptic alpha-2 receptors in the brainstem (locus coeruleus and vasomotor center), it reduces sympathetic outflow, lowering blood pressure. Chronic use leads to receptor adaptations. Abrupt withdrawal causes a sudden surge in sympathetic activity (rebound), producing severe hypertension, tachycardia, and diaphoresis.",
      optionExplanations: ["Incorrect: Clonidine acts centrally on α2 receptors, not peripherally on α1 receptors.","Incorrect: Clonidine is not an ACE inhibitor.","Incorrect: Clonidine is not a beta-blocker; it acts on α2 receptors.","Incorrect: Clonidine does not stimulate β2 receptors; its mechanism is central α2 agonism.","Correct: Central α2 stimulation ↓sympathetic outflow; abrupt withdrawal causes reflex sympathetic surge and rebound hypertension."],
      highYieldPoint: "Clonidine = central α2 agonist. Abrupt withdrawal → rebound hypertension (sympathetic surge). Must taper slowly."
    }
  ],

  "Toxicology & antidotes": [
    {
      vignette: "A 19-year-old college student is brought to the ER 4 hours after intentionally ingesting an entire bottle of acetaminophen. His serum acetaminophen level is 250 µg/mL, which is above the treatment line on the Rumack-Matthew nomogram. Liver function tests are currently normal.",
      question: "What is the most appropriate treatment?",
      options: ["N-acetylcysteine (NAC)","Fomepizole","Activated charcoal only","Hemodialysis","Flumazenil"],
      correctIndex: 0,
      explanation: "N-acetylcysteine (NAC) is the specific antidote for acetaminophen toxicity. It works by replenishing hepatic glutathione stores (which detoxify the toxic metabolite NAPQI) and by serving as a direct glutathione substitute. NAC is most effective within 8 hours of ingestion but can be beneficial up to 24 hours. The Rumack-Matthew nomogram guides treatment decisions based on time and level.",
      optionExplanations: ["Correct: NAC replenishes glutathione to detoxify NAPQI, the hepatotoxic metabolite of acetaminophen. Most effective if given within 8 hours.","Incorrect: Fomepizole is the antidote for methanol and ethylene glycol poisoning, not acetaminophen.","Incorrect: Activated charcoal is useful within 1–2 hours of ingestion but is insufficient alone when the acetaminophen level is above the treatment line.","Incorrect: Hemodialysis can remove acetaminophen but is reserved for massive ingestions with metabolic acidosis, not first-line therapy.","Incorrect: Flumazenil reverses benzodiazepine overdose; it has no role in acetaminophen toxicity."],
      highYieldPoint: "Acetaminophen OD → NAPQI accumulation → hepatic necrosis. Antidote: NAC (replenishes glutathione). Use Rumack-Matthew nomogram."
    },
    {
      vignette: "A 3-year-old boy is brought to the ER after eating his grandmother's iron supplement pills. He has vomiting, bloody diarrhea, and abdominal pain. An abdominal X-ray shows radiopaque tablets in the stomach. Serum iron level is 600 µg/dL (normal <150).",
      question: "What is the most appropriate antidote for this patient?",
      options: ["Deferoxamine","Dimercaprol (BAL)","Succimer (DMSA)","Calcium disodium EDTA","Penicillamine"],
      correctIndex: 0,
      explanation: "Deferoxamine is the specific chelating agent for iron poisoning. It binds free iron in the serum, forming ferrioxamine, which is renally excreted (turns urine vin rosé/orange-red). Iron poisoning causes direct corrosive injury to GI mucosa and cellular toxicity via free radical generation. Serum iron >500 µg/dL or symptomatic patients require chelation.",
      optionExplanations: ["Correct: Deferoxamine specifically chelates free iron, forming water-soluble ferrioxamine for renal excretion.","Incorrect: Dimercaprol (BAL) chelates arsenic, gold, and inorganic mercury, not iron.","Incorrect: Succimer (DMSA) is an oral chelator for lead poisoning in children, not for acute iron toxicity.","Incorrect: Calcium disodium EDTA is used for severe lead poisoning, not iron.","Incorrect: Penicillamine chelates copper (Wilson disease) and can be used for lead, but not iron."],
      highYieldPoint: "Iron poisoning → deferoxamine. GI symptoms first (corrosive), then hepatotoxicity. X-ray shows radiopaque pills."
    },
    {
      vignette: "A 45-year-old homeless man is found obtunded with pinpoint pupils and a respiratory rate of 4 breaths/min. A needle and syringe are found nearby. EMS administers an intranasal medication, and the patient rapidly regains consciousness and normal breathing.",
      question: "Which drug was administered by EMS?",
      options: ["Naloxone","Flumazenil","Atropine","Physostigmine","Glucagon"],
      correctIndex: 0,
      explanation: "Naloxone is a competitive opioid receptor antagonist that rapidly reverses opioid-induced respiratory depression, CNS depression, and miosis. The clinical triad of opioid toxicity is: CNS depression (coma), respiratory depression, and miosis (pinpoint pupils). Naloxone can be given IV, IM, intranasal, or subcutaneously.",
      optionExplanations: ["Correct: Naloxone rapidly reverses opioid toxicity (respiratory depression, miosis, CNS depression) by competitive antagonism at mu-opioid receptors.","Incorrect: Flumazenil reverses benzodiazepine overdose; it would not address opioid toxicity.","Incorrect: Atropine is a muscarinic antagonist used for organophosphate/muscarinic poisoning, not opioid overdose.","Incorrect: Physostigmine reverses anticholinergic toxicity; it would not help in opioid overdose.","Incorrect: Glucagon is the antidote for beta-blocker overdose, not opioid toxicity."],
      highYieldPoint: "Opioid toxicity triad: CNS depression + respiratory depression + miosis. Antidote: naloxone (short t½ → may need repeat doses)."
    },
    {
      vignette: "A 2-year-old girl is brought to the ER with altered mental status. She was found with an open bottle of her mother's benzodiazepine sleeping pills. Her vital signs show normal blood pressure but slow respirations. A reversal agent is considered but withheld due to risk of seizures.",
      question: "Which reversal agent was being considered, and why is seizure risk a concern?",
      options: ["Naloxone; it lowers the seizure threshold in children","Flumazenil; it may precipitate seizures in patients with benzodiazepine dependence or co-ingestion of proconvulsant drugs","Physostigmine; it can cause cholinergic seizures","Naltrexone; it causes excitatory rebound","Atropine; it can cause anticholinergic delirium with seizures"],
      correctIndex: 1,
      explanation: "Flumazenil is a competitive antagonist at the benzodiazepine binding site on GABA-A receptors. While it reverses benzodiazepine sedation, it can precipitate seizures in patients who are benzodiazepine-dependent (withdrawal seizures) or who have co-ingested proconvulsant drugs (e.g., tricyclic antidepressants). This risk limits its routine use in unknown overdoses.",
      optionExplanations: ["Incorrect: Naloxone reverses opioid effects and does not lower seizure threshold.","Correct: Flumazenil reverses BZD sedation but can precipitate seizures in BZD-dependent patients or those with TCA co-ingestion.","Incorrect: Physostigmine reverses anticholinergic toxicity, not benzodiazepine effects.","Incorrect: Naltrexone is a long-acting opioid antagonist, not a benzodiazepine reversal agent.","Incorrect: Atropine treats cholinergic excess, not benzodiazepine toxicity."],
      highYieldPoint: "Flumazenil reverses BZD effects but AVOID in BZD-dependent patients or mixed OD with TCAs/seizure risk. Seizure risk is the main concern."
    },
    {
      vignette: "A farmer is brought to the ER after accidental organophosphate pesticide exposure. He presents with excessive salivation, lacrimation, urination, defecation, miosis, bradycardia, and muscle fasciculations. His serum cholinesterase level is markedly reduced.",
      question: "In addition to atropine, which drug should be administered to reactivate acetylcholinesterase?",
      options: ["Physostigmine","Pralidoxime (2-PAM)","Neostigmine","Edrophonium","Donepezil"],
      correctIndex: 1,
      explanation: "Pralidoxime (2-PAM) reactivates acetylcholinesterase by cleaving the organophosphate-enzyme bond before it undergoes 'aging' (permanent bond formation). It must be given early (within 24–48 hours) before aging occurs. Atropine treats muscarinic symptoms but does not reactivate the enzyme. 2-PAM is particularly important for reversing nicotinic effects (muscle weakness/fasciculations) that atropine cannot address.",
      optionExplanations: ["Incorrect: Physostigmine is an AChE inhibitor that would worsen organophosphate toxicity.","Correct: Pralidoxime nucleophilically attacks the OP-AChE bond, regenerating active enzyme. Must be given before 'aging' occurs.","Incorrect: Neostigmine is an AChE inhibitor; it would worsen cholinergic crisis.","Incorrect: Edrophonium is an ultra-short-acting AChE inhibitor for diagnostic use; it would worsen OP toxicity.","Incorrect: Donepezil is an AChE inhibitor for Alzheimer disease; it would worsen OP toxicity."],
      highYieldPoint: "Organophosphate poisoning: Atropine (muscarinic symptoms) + Pralidoxime/2-PAM (reactivates AChE before aging). 2-PAM treats nicotinic effects too."
    },
    {
      vignette: "A 55-year-old man with atrial fibrillation on digoxin presents with nausea, vomiting, visual disturbances (yellow-green halos), and a new cardiac arrhythmia. His serum digoxin level is 4.5 ng/mL (therapeutic 0.8–2.0). His potassium is 5.8 mEq/L.",
      question: "What is the most appropriate treatment for life-threatening digoxin toxicity?",
      options: ["Calcium gluconate IV","Digoxin-specific antibody fragments (Digibind)","Lidocaine","Amiodarone","Magnesium sulfate"],
      correctIndex: 1,
      explanation: "Digoxin-specific antibody fragments (Digibind/DigiFab) are the definitive treatment for life-threatening digoxin toxicity. They bind free digoxin in the serum, preventing it from reaching tissue binding sites. Indications include life-threatening arrhythmias, hyperkalemia >5.5, and serum digoxin >10 ng/mL. IV calcium is contraindicated in digoxin toxicity as it may worsen cardiac toxicity.",
      optionExplanations: ["Incorrect: IV calcium is CONTRAINDICATED in digoxin toxicity; it can worsen cardiac arrhythmias and cause 'stone heart.'","Correct: Digoxin-specific Fab fragments bind and neutralize digoxin; definitive treatment for life-threatening toxicity.","Incorrect: Lidocaine may treat some digoxin-induced arrhythmias but is not the definitive antidote.","Incorrect: Amiodarone can worsen digoxin toxicity by increasing digoxin levels and has proarrhythmic effects.","Incorrect: Magnesium may help with some arrhythmias but is not the specific antidote for digoxin toxicity."],
      highYieldPoint: "Digoxin toxicity: Fab fragments (Digibind). AVOID IV calcium. Signs: GI symptoms, visual changes (yellow-green halos), arrhythmias, hyperkalemia."
    },
    {
      vignette: "A 30-year-old man is brought to the ER after ingesting antifreeze (ethylene glycol) at a party. He is confused with slurred speech. Labs show a high anion-gap metabolic acidosis, osmolal gap of 40 mOsm/kg, and calcium oxalate crystals in his urine.",
      question: "Which of the following is the most appropriate pharmacologic treatment?",
      options: ["N-acetylcysteine","Deferoxamine","Ethanol or fomepizole","Pralidoxime","Hydroxocobalamin"],
      correctIndex: 2,
      explanation: "Ethylene glycol is metabolized by alcohol dehydrogenase to toxic metabolites (glycolaldehyde → glycolic acid → oxalic acid), which cause metabolic acidosis and calcium oxalate crystal deposition in kidneys. Fomepizole (preferred) or ethanol competitively inhibit alcohol dehydrogenase, preventing formation of toxic metabolites. Hemodialysis may also be needed for severe cases.",
      optionExplanations: ["Incorrect: NAC is the antidote for acetaminophen toxicity, not ethylene glycol.","Incorrect: Deferoxamine chelates iron, not ethylene glycol.","Correct: Fomepizole or ethanol inhibit alcohol dehydrogenase, blocking toxic metabolite formation from ethylene glycol.","Incorrect: Pralidoxime reactivates AChE in organophosphate poisoning.","Incorrect: Hydroxocobalamin is the antidote for cyanide poisoning."],
      highYieldPoint: "Ethylene glycol/methanol → fomepizole (preferred) or ethanol (inhibit alcohol dehydrogenase). Calcium oxalate crystals = ethylene glycol."
    },
    {
      vignette: "A 6-year-old child presents with abdominal pain, constipation, and irritability. Examination reveals a blue-black 'lead line' on his gingiva and wrist drop. His blood lead level is 70 µg/dL. A peripheral blood smear shows basophilic stippling of red blood cells.",
      question: "What is the most appropriate initial chelation therapy for this child?",
      options: ["Oral penicillamine","IV calcium disodium EDTA alone","IM dimercaprol (BAL) followed by calcium disodium EDTA","Oral succimer (DMSA) alone","IV deferoxamine"],
      correctIndex: 2,
      explanation: "For severe lead poisoning (blood lead ≥70 µg/dL or encephalopathy), the standard protocol is IM dimercaprol (BAL) first, followed by calcium disodium EDTA. BAL is given first because EDTA alone can transiently increase brain lead levels by redistributing lead from bones. BAL chelates lead in soft tissues and CNS, making subsequent EDTA therapy safer.",
      optionExplanations: ["Incorrect: Oral penicillamine is a second-line agent for mild-moderate lead poisoning when succimer is unavailable.","Incorrect: EDTA alone can worsen CNS symptoms by redistributing lead; BAL must be given first in severe cases.","Correct: BAL first (chelates soft tissue/CNS lead) → then EDTA (chelates blood/bone lead). Standard for severe lead poisoning.","Incorrect: Succimer (DMSA) is used for moderate lead poisoning (45–69 µg/dL) without encephalopathy; this child's level of 70 requires parenteral therapy.","Incorrect: Deferoxamine is the iron chelator, not appropriate for lead."],
      highYieldPoint: "Severe lead poisoning (≥70 or encephalopathy): Dimercaprol (BAL) first, then CaNa₂EDTA. Moderate (45–69): Succimer (DMSA) oral."
    },
    {
      vignette: "A 35-year-old man working in a chemical plant is rescued after a fire in an enclosed space. He is obtunded with cherry-red skin discoloration. His SpO2 reads 100% but his venous blood gas shows a lactate of 15 mmol/L. Coworkers report the fire involved burning plastics.",
      question: "What is the most appropriate antidote?",
      options: ["100% O₂ via nonrebreather mask only","Methylene blue","Hydroxocobalamin","Sodium thiosulfate only","Amyl nitrite only"],
      correctIndex: 2,
      explanation: "The clinical picture (enclosed fire with plastics, obtundation, cherry-red skin, normal SpO2 but severe lactic acidosis) suggests cyanide poisoning. Burning plastics (polyurethane, nylon) releases hydrogen cyanide. Hydroxocobalamin is the preferred antidote; it directly binds cyanide to form cyanocobalamin (vitamin B12), which is renally excreted. It is safer than the older cyanide antidote kit (nitrites + thiosulfate).",
      optionExplanations: ["Incorrect: High-flow O₂ is supportive but insufficient alone for significant cyanide poisoning.","Incorrect: Methylene blue is the antidote for methemoglobinemia, not cyanide poisoning.","Correct: Hydroxocobalamin binds CN⁻ to form cyanocobalamin, directly detoxifying cyanide. Preferred first-line antidote.","Incorrect: Sodium thiosulfate provides sulfur for rhodanese-mediated CN⁻ conversion to thiocyanate but acts slowly and is usually combined with nitrites in the older kit.","Incorrect: Amyl nitrite (part of the older cyanide kit) induces methemoglobin to bind CN⁻, but it is not used alone and is less preferred than hydroxocobalamin."],
      highYieldPoint: "Cyanide poisoning: hydroxocobalamin (preferred) or nitrites + thiosulfate. Cherry-red skin, lactic acidosis, normal SpO2. Fires with plastics."
    },
    {
      vignette: "A 22-year-old woman presents to the ER with tachycardia, hyperthermia (41°C), agitation, clonus, hyperreflexia, and diaphoresis. She recently started an SSRI and took an herbal supplement containing St. John's wort.",
      question: "What is the most likely diagnosis, and which drug should be used to manage her symptoms?",
      options: ["Neuroleptic malignant syndrome; dantrolene","Anticholinergic toxicity; physostigmine","Malignant hyperthermia; dantrolene","Serotonin syndrome; cyproheptadine","Sympathomimetic toxicity; phentolamine"],
      correctIndex: 3,
      explanation: "The combination of an SSRI and St. John's wort (which has serotonergic activity) can precipitate serotonin syndrome. The classic triad includes: mental status changes (agitation), autonomic instability (tachycardia, hyperthermia, diaphoresis), and neuromuscular abnormalities (clonus, hyperreflexia). Cyproheptadine is a serotonin (5-HT2A) antagonist used as the specific pharmacologic treatment.",
      optionExplanations: ["Incorrect: NMS presents with rigidity (lead-pipe), not clonus/hyperreflexia, and is associated with dopamine antagonists, not serotonergic drugs.","Incorrect: Anticholinergic toxicity causes dry skin (not diaphoretic), mydriasis, and decreased bowel sounds — 'dry as a bone, red as a beet.'","Incorrect: Malignant hyperthermia occurs during anesthesia with volatile agents/succinylcholine, not serotonergic drugs.","Correct: Serotonin syndrome (agitation + clonus/hyperreflexia + autonomic instability) from SSRI + St. John's wort → treat with cyproheptadine (5-HT2A antagonist).","Incorrect: Sympathomimetic toxicity can present similarly but would not cause clonus/hyperreflexia; the drug history points to serotonergic excess."],
      highYieldPoint: "Serotonin syndrome: clonus + hyperreflexia + agitation + hyperthermia + diaphoresis. Treat: cyproheptadine (5-HT2A antagonist). Distinguish from NMS (rigidity, ↓reflexes)."
    },
    {
      vignette: "A factory worker is accidentally exposed to carbon monoxide from a faulty heater. He presents with headache, confusion, and nausea. His carboxyhemoglobin (COHb) level is 35%. Pulse oximetry reads 98%.",
      question: "What is the most appropriate initial treatment?",
      options: ["Methylene blue IV","Hyperbaric oxygen only if COHb >50%","Hydroxocobalamin IV","100% oxygen via nonrebreather mask","N-acetylcysteine IV"],
      correctIndex: 3,
      explanation: "The treatment for carbon monoxide poisoning is 100% oxygen via a nonrebreather mask (or endotracheal intubation if needed). CO has 240× greater affinity for hemoglobin than O₂. High-flow 100% O₂ competitively displaces CO, reducing COHb half-life from ~5 hours (room air) to ~60–90 minutes. Pulse oximetry is unreliable because it cannot distinguish COHb from oxyhemoglobin. Hyperbaric oxygen is considered for severe cases.",
      optionExplanations: ["Incorrect: Methylene blue treats methemoglobinemia, not CO poisoning.","Incorrect: Hyperbaric O₂ is considered for severe cases (syncope, seizures, cardiac ischemia, pregnancy) but 100% O₂ should be started immediately regardless.","Incorrect: Hydroxocobalamin is the antidote for cyanide poisoning, not CO poisoning.","Correct: 100% O₂ displaces CO from hemoglobin. COHb t½ drops from ~5h (room air) to ~60–90 min (100% O₂).","Incorrect: NAC is the antidote for acetaminophen toxicity."],
      highYieldPoint: "CO poisoning: 100% O₂ immediately. Pulse ox is falsely normal (reads COHb as O₂Hb). CO has 240× affinity for Hb vs. O₂."
    },
    {
      vignette: "A 28-year-old man is brought to the ER after a suicide attempt with warfarin. His INR is 9.5 and he has no active bleeding. He has bruising on his extremities.",
      question: "What is the most appropriate management?",
      options: ["Aminocaproic acid","Fresh frozen plasma only","Protamine sulfate","Vitamin K (phytonadione) IV and monitoring","Prothrombin complex concentrate (PCC) immediately"],
      correctIndex: 3,
      explanation: "For warfarin overdose with elevated INR but no active life-threatening bleeding, IV vitamin K (phytonadione) is the appropriate treatment. Vitamin K enables the liver to synthesize functional (carboxylated) clotting factors II, VII, IX, and X. Its effect takes 6–24 hours as new factors are synthesized. PCC or FFP would be added if there were life-threatening bleeding.",
      optionExplanations: ["Incorrect: Aminocaproic acid is an antifibrinolytic used for bleeding from fibrinolysis, not warfarin reversal.","Incorrect: FFP provides immediate clotting factors but is reserved for active bleeding; vitamin K addresses the underlying cause.","Incorrect: Protamine sulfate reverses heparin, not warfarin.","Correct: Vitamin K reverses warfarin by enabling synthesis of functional clotting factors. Appropriate for high INR without major bleeding.","Incorrect: PCC provides rapid factor replacement but is reserved for life-threatening bleeding or urgent surgery, not asymptomatic INR elevation."],
      highYieldPoint: "Warfarin reversal: Vitamin K (slow, 6–24h). Active bleeding: PCC or FFP (immediate) + Vitamin K. Heparin reversal: protamine sulfate."
    },
    {
      vignette: "A 4-year-old child presents with altered mental status after getting into a medicine cabinet. Exam reveals dry mucous membranes, flushed skin, mydriasis, tachycardia (140 bpm), absent bowel sounds, and urinary retention. His temperature is 39.5°C.",
      question: "Which antidote should be administered for this toxidrome?",
      options: ["Naloxone","Flumazenil","Atropine","N-acetylcysteine","Physostigmine"],
      correctIndex: 4,
      explanation: "The presentation (dry skin, flushed, mydriasis, tachycardia, decreased bowel sounds, urinary retention, hyperthermia, altered mental status) is classic anticholinergic (antimuscarinic) toxicity: 'Blind as a bat, mad as a hatter, red as a beet, hot as a hare, dry as a bone.' Physostigmine is a reversible AChE inhibitor that crosses the BBB, increasing ACh centrally and peripherally to reverse the toxidrome.",
      optionExplanations: ["Incorrect: Naloxone reverses opioid toxicity (miosis, respiratory depression), which is the opposite presentation.","Incorrect: Flumazenil reverses benzodiazepine toxicity (sedation), not anticholinergic toxicity.","Incorrect: Atropine is a muscarinic antagonist that would WORSEN anticholinergic toxicity.","Incorrect: NAC is for acetaminophen toxicity.","Correct: Physostigmine crosses BBB and inhibits AChE, increasing ACh to reverse central and peripheral anticholinergic effects."],
      highYieldPoint: "Anticholinergic toxidrome: 'blind, mad, red, hot, dry.' Antidote: physostigmine (crosses BBB). Use only for severe symptoms."
    },
    {
      vignette: "A 40-year-old man with bipolar disorder presents with coarse tremor, hyperreflexia, nausea, vomiting, and confusion. His lithium level is 3.5 mEq/L (therapeutic 0.6–1.2). He recently started a thiazide diuretic for hypertension.",
      question: "What is the most important intervention for this patient's severe lithium toxicity?",
      options: ["Activated charcoal","Kayexalate (sodium polystyrene sulfonate)","Dimercaprol chelation","Forced alkaline diuresis","Hemodialysis"],
      correctIndex: 4,
      explanation: "Severe lithium toxicity (level >2.5 with neurological symptoms) requires hemodialysis. Lithium is a small, water-soluble ion with low protein binding and a small Vd, making it ideal for hemodialysis. The toxicity was precipitated by the thiazide diuretic, which decreases lithium clearance by enhancing proximal tubule sodium (and lithium) reabsorption. Activated charcoal does not bind lithium.",
      optionExplanations: ["Incorrect: Activated charcoal does NOT adsorb lithium, iron, or alcohols.","Incorrect: Kayexalate exchanges potassium for sodium in the GI tract; while sodium polystyrene has been theoretically proposed, it is not standard treatment.","Incorrect: Dimercaprol chelates heavy metals (arsenic, mercury, lead), not lithium.","Incorrect: Forced alkaline diuresis is used for salicylate poisoning; it does not significantly enhance lithium excretion.","Correct: Hemodialysis effectively removes lithium (small, water-soluble, low Vd, low protein binding). Indicated for severe toxicity."],
      highYieldPoint: "Lithium: low Vd, no protein binding → dialyzable. Thiazides ↓lithium clearance. Activated charcoal does NOT bind lithium, iron, or alcohols."
    },
    {
      vignette: "A 50-year-old man presents to the ER with methemoglobinemia (MetHb 40%) after exposure to dapsone. He appears cyanotic with chocolate-brown blood that does not turn red when exposed to oxygen. His SpO₂ reads 85% despite adequate PaO₂.",
      question: "What is the appropriate treatment?",
      options: ["100% supplemental oxygen alone","Hydroxocobalamin","Hyperbaric oxygen","Exchange transfusion immediately","Methylene blue IV"],
      correctIndex: 4,
      explanation: "Methylene blue is the antidote for symptomatic methemoglobinemia. It acts as an electron carrier in the NADPH-methemoglobin reductase pathway, converting methemoglobin (Fe³⁺) back to functional hemoglobin (Fe²⁺). Note: methylene blue is contraindicated in G6PD deficiency (cannot generate NADPH). SpO₂ is unreliable in methemoglobinemia.",
      optionExplanations: ["Incorrect: Supplemental O₂ has limited benefit because the problem is impaired oxygen delivery by oxidized hemoglobin, not inadequate inspired O₂.","Incorrect: Hydroxocobalamin is the cyanide antidote; it does not treat methemoglobinemia.","Incorrect: Hyperbaric oxygen is for CO poisoning; it does not address the oxidized hemoglobin in methemoglobinemia.","Incorrect: Exchange transfusion is reserved for refractory cases or G6PD deficiency where methylene blue cannot be used.","Correct: Methylene blue donates electrons via NADPH-MetHb reductase to reduce Fe³⁺ back to Fe²⁺ in hemoglobin."],
      highYieldPoint: "Methemoglobinemia: chocolate-brown blood, SpO₂ ~85%. Treat: methylene blue (needs NADPH → contraindicated in G6PD deficiency). Causes: dapsone, nitrites, benzocaine."
    }
  ]

};

const PHARM_SUMMARIES = {

  "Pharmacokinetics": {
    sections: [
      {
        heading: "Volume of Distribution (Vd)",
        bullets: [
          "Vd = Dose / [Plasma concentration at time 0]; reflects apparent space into which a drug distributes",
          "Low Vd (3–5 L) → drug stays in plasma (e.g., warfarin, heparin); high Vd (>42 L) → extensive tissue binding (e.g., digoxin, chloroquine)",
          "Clinically: determines loading dose → Loading dose = Cp(target) × Vd / F",
          "Affected by body composition, protein binding, lipophilicity, and disease states"
        ]
      },
      {
        heading: "Clearance (CL)",
        bullets: [
          "CL = Rate of elimination / Plasma concentration; volume of plasma cleared of drug per unit time",
          "Total clearance = Renal CL + Hepatic CL + Other CL",
          "Determines maintenance dose: Maintenance dose rate = Css × CL / F",
          "Steady-state concentration: Css = (F × Dose/τ) / CL, or Css = Infusion rate / CL for IV infusion",
          "Renal disease → ↓ renal CL; liver disease → ↓ hepatic CL (adjust doses accordingly)"
        ]
      },
      {
        heading: "Half-Life (t½)",
        bullets: [
          "t½ = (0.693 × Vd) / CL — depends on BOTH Vd and clearance",
          "Time to steady state = 4–5 half-lives (regardless of dose, route, or frequency)",
          "Time to eliminate ~97% of drug after stopping = 5 half-lives",
          "Half-life determines dosing interval for maintaining therapeutic levels"
        ]
      },
      {
        heading: "Zero-Order vs. First-Order Kinetics",
        bullets: [
          "First-order: constant FRACTION eliminated per unit time; rate ∝ [drug]; straight line on semi-log plot",
          "Zero-order: constant AMOUNT eliminated per unit time; rate is independent of [drug]; straight line on linear plot",
          "Most drugs follow first-order kinetics at therapeutic doses",
          "Zero-order examples: phenytoin (at therapeutic doses), ethanol, aspirin (at toxic doses)",
          "Zero-order → small dose changes cause large concentration changes; no true half-life"
        ]
      },
      {
        heading: "Bioavailability & First-Pass Metabolism",
        bullets: [
          "Bioavailability (F) = AUC(oral) / AUC(IV); fraction of oral dose reaching systemic circulation",
          "IV bioavailability = 1 (100%) by definition",
          "First-pass metabolism in liver/gut wall is the primary cause of reduced oral bioavailability",
          "Cirrhosis and portosystemic shunts increase bioavailability of high-extraction drugs",
          "Bioequivalence: same F (AUC), not necessarily same Cmax or Tmax"
        ]
      }
    ],
    table: {
      title: "Key Pharmacokinetic Equations",
      headers: ["Parameter", "Equation", "Clinical Use"],
      rows: [
        ["Vd", "Dose / Cp₀", "Determines loading dose"],
        ["Clearance", "Rate of elimination / Cp", "Determines maintenance dose"],
        ["Half-life", "0.693 × Vd / CL", "Determines dosing interval and time to steady state"],
        ["Loading dose", "Cp(target) × Vd / F", "Rapidly achieve therapeutic level"],
        ["Maintenance dose", "Css × CL / F", "Maintain steady-state level"],
        ["Bioavailability", "AUC(oral) / AUC(IV)", "Compare oral vs. IV exposure"],
        ["Steady-state (infusion)", "Infusion rate / CL", "Predict concentration at steady state"]
      ]
    },
    mnemonic: "Half-life depends on Vd and CL: 'Hallway Very Clean' → t½ = 0.693 × Vd / CL. Steady state in 4–5 half-lives: 'Four to Five For Steady State.'"
  },

  "Pharmacodynamics": {
    sections: [
      {
        heading: "Potency vs. Efficacy",
        bullets: [
          "Potency: amount of drug needed for a given effect (EC50); position on the x-axis of dose-response curve",
          "Efficacy: maximal effect a drug can produce (Emax); height of the dose-response curve",
          "More potent = lower EC50; more efficacious = higher Emax",
          "Clinically, efficacy is generally more important than potency (can always give more drug)"
        ]
      },
      {
        heading: "Agonists and Antagonists",
        bullets: [
          "Full agonist: binds receptor and produces maximal response (high intrinsic activity)",
          "Partial agonist: binds receptor, produces submaximal response (ceiling effect); can antagonize full agonists (e.g., buprenorphine)",
          "Competitive antagonist: binds same site, surmountable by ↑ agonist → rightward shift, same Emax",
          "Noncompetitive/irreversible antagonist: cannot be overcome by ↑ agonist → ↓ Emax (e.g., phenoxybenzamine)",
          "Inverse agonist: binds receptor and produces opposite effect of agonist"
        ]
      },
      {
        heading: "Therapeutic Index and Safety",
        bullets: [
          "Therapeutic Index (TI) = TD50/ED50 (or LD50/ED50 in animal studies)",
          "Higher TI = safer drug; lower TI = narrower safety margin",
          "Low-TI drugs requiring monitoring: warfarin, lithium, digoxin, theophylline, aminoglycosides",
          "Certain Safety Factor (CSF) = LD1/ED99 — more conservative measure"
        ]
      },
      {
        heading: "Receptor Concepts",
        bullets: [
          "Spare receptors: maximal response at <100% receptor occupancy; loss of spare receptors → ↓ potency before ↓ Emax",
          "Receptor desensitization: GRK phosphorylation → β-arrestin binding → receptor internalization (homologous desensitization)",
          "Tachyphylaxis: rapid tolerance (minutes-hours); tolerance: gradual loss of response (days-weeks)",
          "Positive allosteric modulator (e.g., benzodiazepines on GABA-A): enhances agonist effect without direct activation"
        ]
      },
      {
        heading: "Dose-Response Relationships",
        bullets: [
          "Graded dose-response: measures effect in a single system as dose increases (yields EC50, Emax)",
          "Quantal dose-response: measures proportion of population responding at each dose (yields ED50, TD50, LD50)",
          "Log dose-response curve is typically sigmoidal (S-shaped)",
          "Synergism: combined effect > sum of individual effects; additive: combined = sum; antagonism: combined < individual"
        ]
      }
    ],
    table: {
      title: "Drug-Receptor Interactions Summary",
      headers: ["Type", "Binding Site", "Effect on Dose-Response Curve", "Example"],
      rows: [
        ["Full agonist", "Orthosteric", "Maximal Emax", "Morphine (μ receptor)"],
        ["Partial agonist", "Orthosteric", "Submaximal Emax (ceiling)", "Buprenorphine (μ receptor)"],
        ["Competitive antagonist", "Orthosteric", "Rightward shift, same Emax", "Naloxone, atropine"],
        ["Noncompetitive antagonist", "Orthosteric/allosteric", "Decreased Emax", "Phenoxybenzamine"],
        ["Positive allosteric modulator", "Allosteric", "Enhanced agonist response", "Benzodiazepines (GABA-A)"],
        ["Inverse agonist", "Orthosteric", "Opposite effect of agonist", "Certain β-carboline compounds"]
      ]
    },
    mnemonic: "Potency vs. Efficacy: 'Potency is Position (on x-axis), Efficacy is Elevation (height of curve).' TI = TD50/ED50: 'Toxic over Effective.'"
  },

  "Autonomic drugs": {
    sections: [
      {
        heading: "Cholinergic Agonists (Parasympathomimetics)",
        bullets: [
          "Direct-acting muscarinic agonists: bethanechol (urinary retention, ileus), pilocarpine (glaucoma, dry mouth), carbachol, methacholine (asthma challenge test)",
          "Cholinesterase inhibitors (indirect): neostigmine/pyridostigmine (myasthenia gravis), donepezil/rivastigmine/galantamine (Alzheimer), physostigmine (anticholinergic toxicity), edrophonium (diagnostic)",
          "Muscarinic effects (SLUDGE/DUMBBELSS): Salivation, Lacrimation, Urination, Defecation/Diarrhea, GI upset, Emesis; bradycardia, miosis, bronchoconstriction",
          "Nicotinic effects: muscle fasciculations, then paralysis (depolarizing block)"
        ]
      },
      {
        heading: "Cholinergic Antagonists (Parasympatholytics)",
        bullets: [
          "Muscarinic antagonists: atropine (bradycardia, organophosphate poisoning), scopolamine (motion sickness), ipratropium/tiotropium (COPD/asthma), oxybutynin (overactive bladder), tropicamide (mydriasis)",
          "Anticholinergic toxidrome: 'Blind as a bat (mydriasis), mad as a hatter (delirium), red as a beet (flushed), hot as a hare (hyperthermia), dry as a bone (no secretions)'",
          "Ganglionic blockers: hexamethonium, mecamylamine (block nicotinic receptors at autonomic ganglia)",
          "Neuromuscular blockers: nondepolarizing (tubocurarine, rocuronium) vs. depolarizing (succinylcholine)"
        ]
      },
      {
        heading: "Adrenergic Agonists (Sympathomimetics)",
        bullets: [
          "α1 agonists: phenylephrine (nasal decongestant, hypotension, mydriasis) → vasoconstriction",
          "α2 agonists: clonidine, methyldopa (centrally acting antihypertensives) → ↓ sympathetic outflow",
          "β1 agonists: dobutamine (acute heart failure, cardiac stress test) → ↑ HR, ↑ contractility",
          "β2 agonists: albuterol, terbutaline (asthma/COPD) → bronchodilation, vasodilation, tocolysis",
          "Mixed: epinephrine (α1 + β1 + β2: anaphylaxis), norepinephrine (α1 + β1: septic shock)",
          "Indirect: amphetamine, cocaine (↑ NE/DA release or block reuptake)"
        ]
      },
      {
        heading: "Adrenergic Antagonists (Sympatholytics)",
        bullets: [
          "Nonselective α-blockers: phentolamine (pheochromocytoma diagnosis), phenoxybenzamine (preop pheochromocytoma — irreversible)",
          "Selective α1-blockers: prazosin, doxazosin, terazosin (HTN, BPH); tamsulosin (α1A-selective for BPH)",
          "Nonselective β-blockers: propranolol (migraine, performance anxiety, thyroid storm, essential tremor) — AVOID in asthma, cocaine",
          "β1-selective: metoprolol, atenolol, esmolol (HTN, heart failure, post-MI)",
          "Mixed α/β-blocker: carvedilol, labetalol (HTN, heart failure, hypertensive emergency in pregnancy)"
        ]
      },
      {
        heading: "Key Clinical Pearls",
        bullets: [
          "Pheochromocytoma: α-blockade first (phenoxybenzamine), then β-blocker; never β-blocker alone → unopposed α → hypertensive crisis",
          "Cocaine hypertension: benzodiazepines first-line; AVOID nonselective β-blockers → unopposed α",
          "Beta-blocker overdose: glucagon (bypasses β-receptor via glucagon receptor → ↑ cAMP)",
          "Epinephrine reversal: after α-blockade, epi causes hypotension (β2 vasodilation unopposed)"
        ]
      }
    ],
    table: {
      title: "Autonomic Receptor Effects Summary",
      headers: ["Receptor", "Location", "Agonist Effect", "Key Agonist(s)", "Key Antagonist(s)"],
      rows: [
        ["α1", "Vascular smooth muscle, eye", "Vasoconstriction, mydriasis", "Phenylephrine, NE", "Prazosin, tamsulosin"],
        ["α2", "Presynaptic nerve terminals, CNS", "↓ Sympathetic outflow, ↓ NE release", "Clonidine, methyldopa", "Yohimbine"],
        ["β1", "Heart, kidney (JGA)", "↑ HR, ↑ contractility, ↑ renin", "Dobutamine, isoproterenol", "Metoprolol, atenolol"],
        ["β2", "Bronchial smooth muscle, vasculature", "Bronchodilation, vasodilation, ↓ K⁺", "Albuterol, terbutaline", "Propranolol (nonselective)"],
        ["M1–M3", "Heart (M2), smooth muscle, glands", "↓ HR (M2), ↑ secretions, miosis, bronchoconstriction", "Bethanechol, pilocarpine", "Atropine, ipratropium"],
        ["Nn (nicotinic, ganglia)", "Autonomic ganglia", "Stimulates both sympathetic and parasympathetic ganglia", "Nicotine", "Hexamethonium"],
        ["Nm (nicotinic, NMJ)", "Neuromuscular junction", "Skeletal muscle contraction", "Succinylcholine", "Rocuronium, tubocurarine"]
      ]
    },
    mnemonic: "Muscarinic effects (SLUDGE): Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis. Anticholinergic toxidrome: 'Blind, Mad, Red, Hot, Dry.' Pheochromocytoma: 'Alpha Always Before Beta' (α-block before β-block)."
  },

  "Toxicology & antidotes": {
    sections: [
      {
        heading: "Acetaminophen Toxicity",
        bullets: [
          "Mechanism: CYP2E1 converts acetaminophen → NAPQI (toxic metabolite); glutathione normally conjugates NAPQI, but stores deplete in overdose",
          "Phases: GI symptoms (0–24h) → apparent improvement (24–72h) → hepatic necrosis (72–96h) → recovery or death",
          "Antidote: N-acetylcysteine (NAC) — replenishes glutathione, most effective within 8 hours",
          "Use Rumack-Matthew nomogram (plot level vs. time) to determine need for treatment"
        ]
      },
      {
        heading: "Opioid Toxicity",
        bullets: [
          "Triad: CNS depression (coma), respiratory depression, miosis (pinpoint pupils)",
          "Antidote: naloxone (competitive μ-receptor antagonist); short t½ → may need repeat doses or continuous infusion",
          "Naltrexone: longer-acting oral opioid antagonist for relapse prevention in alcohol/opioid use disorder",
          "Caution: naloxone can precipitate acute withdrawal in opioid-dependent patients"
        ]
      },
      {
        heading: "Organophosphate/Cholinergic Toxicity",
        bullets: [
          "Mechanism: irreversible AChE inhibition → ACh accumulation at muscarinic, nicotinic, and CNS synapses",
          "Symptoms: SLUDGE/DUMBBELSS (muscarinic) + fasciculations, weakness, paralysis (nicotinic) + seizures (CNS)",
          "Treatment: Atropine (blocks muscarinic effects; titrate to dry secretions) + Pralidoxime/2-PAM (reactivates AChE before 'aging')",
          "2-PAM must be given early (within 24–48h); treats nicotinic symptoms that atropine cannot"
        ]
      },
      {
        heading: "Toxic Alcohols (Methanol & Ethylene Glycol)",
        bullets: [
          "Both metabolized by alcohol dehydrogenase → toxic metabolites: methanol → formic acid (retinal toxicity, blindness); ethylene glycol → oxalic acid (calcium oxalate crystals, renal failure)",
          "Labs: high anion-gap metabolic acidosis + osmolal gap",
          "Antidote: fomepizole (preferred) or ethanol — competitive alcohol dehydrogenase inhibitors",
          "Hemodialysis for severe cases (remove parent compound and metabolites)"
        ]
      },
      {
        heading: "Heavy Metal Poisoning",
        bullets: [
          "Lead: abdominal pain, lead lines, wrist/foot drop, basophilic stippling, encephalopathy. Chelation: succimer (mild-moderate), dimercaprol + CaNa₂EDTA (severe)",
          "Iron: GI corrosion, hemorrhagic gastritis, hepatotoxicity. Chelation: deferoxamine (turns urine vin rosé). X-ray shows radiopaque pills",
          "Arsenic/mercury: dimercaprol (BAL) for acute; succimer for less severe arsenic",
          "Copper (Wilson disease): penicillamine or trientine"
        ]
      },
      {
        heading: "Other Important Antidotes",
        bullets: [
          "Benzodiazepines → flumazenil (caution: seizure risk in BZD-dependent or TCA co-ingestion)",
          "Beta-blocker OD → glucagon (bypasses β-receptors via glucagon receptor)",
          "Digoxin → Digoxin-specific Fab fragments (Digibind); AVOID IV calcium",
          "Cyanide → hydroxocobalamin (preferred) or nitrite + thiosulfate kit",
          "Carbon monoxide → 100% O₂ (reduces COHb t½ from 5h to 60–90 min)",
          "Methemoglobinemia → methylene blue (needs NADPH; contraindicated in G6PD deficiency)",
          "Warfarin → vitamin K (slow) ± PCC/FFP (immediate, for major bleeding); Heparin → protamine sulfate",
          "Serotonin syndrome → cyproheptadine (5-HT2A antagonist)",
          "Anticholinergic toxicity → physostigmine (AChE inhibitor that crosses BBB)",
          "Lithium → hemodialysis (low Vd, no protein binding; activated charcoal does NOT bind lithium)"
        ]
      }
    ],
    table: {
      title: "Toxin–Antidote Quick Reference",
      headers: ["Toxin", "Antidote", "Mechanism of Antidote"],
      rows: [
        ["Acetaminophen", "N-acetylcysteine (NAC)", "Replenishes glutathione to detoxify NAPQI"],
        ["Opioids", "Naloxone", "Competitive μ-opioid receptor antagonist"],
        ["Benzodiazepines", "Flumazenil", "Competitive GABA-A BZD-site antagonist"],
        ["Organophosphates", "Atropine + Pralidoxime", "Atropine blocks muscarinic effects; 2-PAM reactivates AChE"],
        ["Methanol/Ethylene glycol", "Fomepizole (or ethanol)", "Inhibits alcohol dehydrogenase"],
        ["Iron", "Deferoxamine", "Chelates free iron → ferrioxamine (renally excreted)"],
        ["Lead (severe)", "Dimercaprol (BAL) + CaNa₂EDTA", "Chelation of lead from soft tissues and blood"],
        ["Lead (moderate)", "Succimer (DMSA)", "Oral chelator for outpatient management"],
        ["Digoxin", "Digoxin-specific Fab fragments", "Binds and neutralizes free digoxin"],
        ["Beta-blockers", "Glucagon", "Activates glucagon receptor → ↑cAMP (bypasses β-receptor)"],
        ["Warfarin", "Vitamin K ± PCC/FFP", "Restores functional clotting factors II, VII, IX, X"],
        ["Heparin", "Protamine sulfate", "Positively charged protein binds negatively charged heparin"],
        ["Cyanide", "Hydroxocobalamin", "Binds CN⁻ to form nontoxic cyanocobalamin"],
        ["Carbon monoxide", "100% O₂ (± hyperbaric)", "Competitively displaces CO from hemoglobin"],
        ["Methemoglobinemia", "Methylene blue", "Electron carrier in NADPH-MetHb reductase pathway"],
        ["Anticholinergic toxicity", "Physostigmine", "AChE inhibitor; ↑ACh centrally and peripherally"],
        ["Serotonin syndrome", "Cyproheptadine", "5-HT2A receptor antagonist"],
        ["Lithium", "Hemodialysis", "Removes lithium (small, water-soluble, not protein-bound)"]
      ]
    },
    mnemonic: "Charcoal does NOT bind: 'PHAILS' — Pesticides (heavy metals), Hydrocarbons, Acids/Alkalis, Iron, Lithium, Solvents. NAC for APAP: 'NAC Neutralizes APAP's Catastrophe.' Opioid triad: 'CRM — Coma, Respiratory depression, Miosis.'"
  }

};
