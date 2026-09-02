const GI_QUESTIONS = {
  "GI physiology": [
    {
      vignette: "A research team is studying the regulation of gastric acid secretion. They isolate parietal cells from the gastric fundus and expose them to various ligands. One particular ligand binds to a receptor on the basolateral membrane, activates adenylyl cyclase, and increases intracellular cAMP, resulting in maximal acid secretion.",
      question: "Which of the following ligands is most likely responsible for this effect?",
      options: ["Acetylcholine","Gastrin","Prostaglandin E2","Somatostatin","Histamine"],
      correctIndex: 4,
      explanation: "Histamine, released from enterochromaffin-like (ECL) cells, binds to H2 receptors on parietal cells and activates the Gs–adenylyl cyclase–cAMP–protein kinase A pathway. This is the dominant pathway for acid secretion and the basis for H2 blocker therapy. Acetylcholine and gastrin use different intracellular signaling cascades (IP3/Ca2+).",
      optionExplanations: ["Incorrect. Acetylcholine binds M3 muscarinic receptors on parietal cells and signals through the Gq–PLC–IP3–Ca2+ pathway, not cAMP.","Incorrect. Gastrin binds CCK-B receptors on parietal cells and ECL cells, activating the Gq–PLC–IP3–Ca2+ pathway. Its main effect is indirect, stimulating histamine release from ECL cells.","Incorrect. Prostaglandin E2 inhibits acid secretion and promotes mucosal protection via Gi-coupled EP3 receptors on parietal cells.","Incorrect. Somatostatin inhibits acid secretion by binding to Gi-coupled receptors, decreasing cAMP.","Correct. Histamine acts via H2 receptors coupled to Gs, activating adenylyl cyclase and increasing cAMP, which stimulates H+/K+-ATPase insertion and acid secretion."],
      highYieldPoint: "Histamine → H2 receptor → Gs → cAMP ↑ → acid secretion. This is the basis for H2 blocker (ranitidine, famotidine) therapy."
    },
    {
      vignette: "A 50-year-old man with refractory peptic ulcer disease is found to have a fasting serum gastrin level of 1,200 pg/mL (normal <100 pg/mL). A secretin stimulation test shows a paradoxical increase in serum gastrin above 200 pg/mL. CT scan of the abdomen reveals a 2 cm mass in the duodenal wall.",
      question: "Which of the following cells is the most likely source of the excess gastrin in this patient?",
      options: ["G cells of the gastric antrum","D cells of the pancreatic islets","Enterochromaffin-like cells of the gastric fundus","Tumor cells of a gastrinoma","S cells of the duodenal mucosa"],
      correctIndex: 3,
      explanation: "This patient has Zollinger-Ellison syndrome caused by a gastrin-secreting neuroendocrine tumor (gastrinoma). Most gastrinomas are located in the 'gastrinoma triangle' (duodenum/pancreas). The secretin stimulation test is diagnostic: in gastrinomas, secretin paradoxically increases gastrin (normal G cells are inhibited by secretin).",
      optionExplanations: ["Incorrect. Normal G cells in the antrum produce gastrin physiologically, but their secretion is inhibited by secretin and by low intraluminal pH. They are not the source in Zollinger-Ellison syndrome.","Incorrect. D cells produce somatostatin, which inhibits gastrin release and acid secretion.","Incorrect. ECL cells release histamine in response to gastrin; they do not produce gastrin themselves.","Correct. The duodenal mass is a gastrinoma producing autonomous gastrin secretion. The paradoxical increase with secretin is pathognomonic for gastrinoma.","Incorrect. S cells in the duodenum produce secretin in response to acid, not gastrin."],
      highYieldPoint: "Zollinger-Ellison syndrome: gastrinoma → massive gastrin → refractory ulcers. Secretin stimulation test: paradoxical gastrin rise is diagnostic."
    },
    {
      vignette: "A 32-year-old woman eats a large meal. Shortly after, a hormone is released from the duodenal mucosa in response to the acidic chyme entering the small intestine. This hormone stimulates bicarbonate-rich secretion from the pancreas and inhibits gastric acid secretion.",
      question: "Which of the following hormones is most likely responsible for these actions?",
      options: ["Motilin","Cholecystokinin","Gastric inhibitory peptide","Secretin","Vasoactive intestinal peptide"],
      correctIndex: 3,
      explanation: "Secretin is released by S cells in the duodenum in response to acidic chyme (pH <4.5). Its primary actions are stimulating pancreatic ductal bicarbonate secretion and inhibiting gastric acid production. This creates a negative feedback loop: acid in duodenum → secretin release → bicarbonate neutralizes acid → secretin secretion stops.",
      optionExplanations: ["Incorrect. Motilin is released cyclically during fasting and stimulates the migrating motor complex (interdigestive housekeeping contractions).","Incorrect. CCK is released by I cells in response to fatty acids and amino acids, stimulating gallbladder contraction and pancreatic enzyme secretion — not primarily bicarbonate.","Incorrect. GIP (glucose-dependent insulinotropic peptide) is released by K cells in response to glucose/fat and stimulates insulin release. It also inhibits acid but does not stimulate bicarbonate.","Correct. Secretin is released by S cells in response to duodenal acid and stimulates pancreatic bicarbonate secretion while inhibiting gastric acid.","Incorrect. VIP stimulates pancreatic and intestinal secretion but is a neurocrine, not a hormone released in response to acid."],
      highYieldPoint: "Secretin: released by duodenal S cells in response to acid → stimulates pancreatic HCO3⁻ secretion, inhibits gastric acid."
    },
    {
      vignette: "A 45-year-old man undergoes a vagotomy and pyloroplasty for treatment of peptic ulcer disease. Postoperatively, he experiences early satiety, nausea, bloating, and delayed gastric emptying of solid foods.",
      question: "Which of the following best explains the impaired gastric motility after this procedure?",
      options: ["Loss of sympathetic stimulation to the stomach","Excessive motilin-driven migrating motor complex activity","Denervation hypersensitivity of the gastric smooth muscle","Increased somatostatin secretion from D cells","Disruption of parasympathetic-mediated gastric relaxation and antral contraction"],
      correctIndex: 4,
      explanation: "The vagus nerve provides parasympathetic innervation essential for coordinated gastric motility. Vagal tone mediates receptive relaxation of the fundus (via VIP/NO), coordinates antral peristalsis for grinding and emptying solid food, and stimulates pyloric relaxation. Vagotomy disrupts these coordinated motor functions, resulting in gastroparesis for solids.",
      optionExplanations: ["Incorrect. Sympathetic innervation (celiac ganglion) inhibits gastric motility; loss of sympathetic input would increase motility, not decrease it.","Incorrect. Motilin drives the interdigestive migrating motor complex during fasting; its excessive activity would not explain postprandial gastroparesis.","Incorrect. Denervation hypersensitivity would increase responsiveness to circulating stimulants, not explain impaired coordinated emptying.","Incorrect. While somatostatin inhibits gastric motility, vagotomy does not cause excessive somatostatin release.","Correct. Vagotomy eliminates parasympathetic coordination of fundic relaxation, antral peristalsis, and pyloric opening, causing impaired gastric emptying."],
      highYieldPoint: "Vagus nerve coordinates gastric motility: receptive relaxation (fundus), antral peristalsis, pyloric relaxation. Vagotomy → gastroparesis."
    },
    {
      vignette: "A researcher studies fat absorption in the small intestine. After ingestion of a fatty meal, she traces the path of long-chain fatty acids from the intestinal lumen to the systemic circulation. She observes that the fatty acids are re-esterified into triglycerides within enterocytes and packaged into large lipoprotein particles.",
      question: "By which route do these lipoprotein particles primarily enter the systemic circulation?",
      options: ["Portal venous system directly to the liver","Intestinal capillaries via fenestrated endothelium","Intestinal lacteals into the lymphatic system","Paracellular transport into the submucosal venous plexus","Direct absorption into the thoracic duct without lymphatic transit"],
      correctIndex: 2,
      explanation: "Long-chain fatty acids are re-esterified into triglycerides within enterocytes and packaged into chylomicrons. These large particles (80–1000 nm) are too big to enter blood capillaries directly. Instead, they are exocytosed into intestinal lacteals (lymphatic vessels in villi), travel through mesenteric lymphatics, the cisterna chyli, and the thoracic duct before entering the systemic venous circulation at the left subclavian vein.",
      optionExplanations: ["Incorrect. Short- and medium-chain fatty acids enter the portal vein directly, but long-chain fatty acids packaged as chylomicrons are too large and must use the lymphatic route.","Incorrect. Intestinal capillaries absorb water-soluble nutrients (amino acids, monosaccharides) but chylomicrons are too large for capillary entry.","Correct. Chylomicrons enter the lacteals → mesenteric lymphatics → cisterna chyli → thoracic duct → left subclavian vein → systemic circulation.","Incorrect. Paracellular transport handles small ions and water; it cannot accommodate large chylomicron particles.","Incorrect. The lymphatic system is the required intermediate; chylomicrons must transit through lacteals and lymphatic vessels before reaching the thoracic duct."],
      highYieldPoint: "Long-chain fatty acids → chylomicrons → lacteals → lymphatics → thoracic duct → systemic circulation. Short/medium-chain → portal vein directly."
    },
    {
      vignette: "A 28-year-old woman presents with watery diarrhea and abdominal cramping after drinking milk. Symptoms resolve when she avoids dairy. A hydrogen breath test after oral lactose ingestion shows a significant rise in exhaled hydrogen.",
      question: "Which of the following best describes the mechanism underlying this patient's symptoms?",
      options: ["Autoimmune destruction of intestinal brush border enzymes","Defective SGLT1 transporter causing glucose-galactose malabsorption","IgE-mediated hypersensitivity to casein protein","Bacterial overgrowth in the small intestine metabolizing lactose","Deficiency of a brush border disaccharidase leading to osmotic diarrhea"],
      correctIndex: 4,
      explanation: "Lactose intolerance results from deficiency of lactase, a brush border disaccharidase in the small intestinal epithelium. Undigested lactose remains in the intestinal lumen, creating an osmotic load that draws water into the lumen (osmotic diarrhea). Colonic bacteria then ferment lactose into short-chain fatty acids, CO2, and H2, causing bloating, flatulence, and a positive hydrogen breath test.",
      optionExplanations: ["Incorrect. Lactase deficiency is typically primary (genetic downregulation after weaning) or secondary (mucosal damage), not autoimmune.","Incorrect. Glucose-galactose malabsorption is a rare congenital disorder affecting SGLT1; it would cause diarrhea with any glucose- or galactose-containing food, not just dairy.","Incorrect. IgE-mediated allergy to milk proteins (casein, whey) causes urticaria, angioedema, or anaphylaxis, not isolated diarrhea with positive H2 breath test.","Incorrect. Small intestinal bacterial overgrowth (SIBO) can cause hydrogen breath test positivity, but this patient's symptoms are specifically triggered by lactose and resolve with avoidance.","Correct. Lactase deficiency prevents lactose hydrolysis → undigested lactose → osmotic diarrhea + bacterial fermentation → hydrogen gas."],
      highYieldPoint: "Lactose intolerance: lactase deficiency → undigested lactose → osmotic diarrhea + colonic fermentation (H2, CO2). Diagnose with hydrogen breath test."
    },
    {
      vignette: "A 60-year-old man with a history of chronic alcohol use undergoes liver biopsy that shows steatosis and mild fibrosis. His physician explains that bile salts are crucial for fat absorption and are efficiently recycled. Under normal physiology, approximately 95% of bile salts secreted into the duodenum are reabsorbed.",
      question: "At which location in the gastrointestinal tract does the majority of bile salt reabsorption occur?",
      options: ["Duodenum","Jejunum","Terminal ileum","Ascending colon","Hepatic sinusoids"],
      correctIndex: 2,
      explanation: "The terminal ileum contains specific Na+-dependent bile acid transporters (ASBT/IBAT) that actively reabsorb ~95% of bile salts. These are returned to the liver via the portal circulation and re-secreted (enterohepatic circulation). Diseases or resection of the terminal ileum (e.g., Crohn disease) disrupt this recycling, leading to bile salt malabsorption, fat malabsorption, and steatorrhea.",
      optionExplanations: ["Incorrect. The duodenum is where bile salts are delivered and act on dietary fat; they are not significantly reabsorbed here.","Incorrect. Minimal passive bile salt absorption occurs in the jejunum, but active transport in the terminal ileum accounts for the vast majority.","Correct. The terminal ileum has specific active bile acid transporters (ASBT) responsible for ~95% of bile salt reabsorption (enterohepatic circulation).","Incorrect. A small fraction of bile salts escapes to the colon, where bacterial deconjugation occurs. Colonic absorption is minimal and passive.","Incorrect. Hepatic sinusoids are where bile salts are extracted from portal blood by hepatocytes for re-secretion, not where intestinal reabsorption occurs."],
      highYieldPoint: "Bile salt reabsorption: 95% in terminal ileum (active transport via ASBT). Ileal disease/resection → bile salt malabsorption → steatorrhea."
    },
    {
      vignette: "A physiologist is studying intestinal ion transport. She finds that a specific channel on the apical membrane of enterocytes in the duodenum and proximal jejunum is responsible for the absorption of iron in its ferrous (Fe2+) form. This channel is upregulated when body iron stores are depleted.",
      question: "Which of the following proteins mediates the apical uptake of ferrous iron into enterocytes?",
      options: ["Divalent metal transporter 1 (DMT1)","Ferroportin","Transferrin receptor","Hepcidin","Ferritin"],
      correctIndex: 0,
      explanation: "DMT1 (divalent metal transporter 1) on the apical brush border membrane of duodenal enterocytes is the primary transporter for Fe2+ absorption. Dietary iron (often Fe3+) is first reduced to Fe2+ by duodenal cytochrome b (Dcytb) before DMT1 uptake. On the basolateral side, ferroportin exports iron into the blood, where it binds transferrin.",
      optionExplanations: ["Correct. DMT1 is the apical transporter that mediates ferrous iron (Fe2+) uptake from the intestinal lumen into enterocytes.","Incorrect. Ferroportin is the basolateral iron exporter that releases Fe2+ from enterocytes into the blood. It is regulated by hepcidin.","Incorrect. Transferrin receptor mediates cellular iron uptake from transferrin-bound iron in the blood, not intestinal absorption.","Incorrect. Hepcidin is a hepatic peptide hormone that regulates iron by promoting ferroportin degradation, thereby blocking iron export from enterocytes.","Incorrect. Ferritin is the intracellular iron storage protein; it does not transport iron across membranes."],
      highYieldPoint: "Iron absorption: Fe3+ → Fe2+ (Dcytb) → DMT1 (apical entry) → ferroportin (basolateral exit) → transferrin (blood). Hepcidin degrades ferroportin."
    },
    {
      vignette: "A 55-year-old man presents with severe epigastric pain that worsens with meals. Endoscopy reveals multiple ulcers in the duodenum and jejunum. Serum gastrin level is 900 pg/mL. A CT scan shows a 1.5 cm pancreatic mass. His father had primary hyperparathyroidism and a pituitary adenoma.",
      question: "Which of the following genetic syndromes is most likely responsible for this patient's presentation?",
      options: ["Multiple endocrine neoplasia type 1 (MEN1)","Multiple endocrine neoplasia type 2A (MEN2A)","Von Hippel-Lindau syndrome","Familial adenomatous polyposis","Lynch syndrome"],
      correctIndex: 0,
      explanation: "MEN1 (Wermer syndrome) involves tumors of the parathyroids (hyperparathyroidism), anterior pituitary, and pancreatic islets. This patient has a gastrinoma (Zollinger-Ellison syndrome) with a family history of hyperparathyroidism and pituitary adenoma — the classic MEN1 triad. MEN1 is caused by loss-of-function mutations in the menin gene on chromosome 11q13.",
      optionExplanations: ["Correct. MEN1 = Parathyroid + Pituitary + Pancreatic tumors (3 P's). Gastrinoma is the most common pancreatic tumor in MEN1.","Incorrect. MEN2A involves medullary thyroid carcinoma, pheochromocytoma, and parathyroid hyperplasia — no pancreatic or pituitary tumors.","Incorrect. VHL involves hemangioblastomas, clear cell renal carcinoma, and pheochromocytoma, not the presented constellation.","Incorrect. FAP involves hundreds of colonic polyps and colorectal cancer due to APC mutations, not endocrine tumors.","Incorrect. Lynch syndrome causes hereditary nonpolyposis colorectal cancer and other carcinomas, not neuroendocrine tumors."],
      highYieldPoint: "MEN1 (3 P's): Parathyroid, Pituitary, Pancreas. Gastrinoma is the most common pancreatic islet tumor in MEN1. Gene: menin (11q13)."
    },
    {
      vignette: "A newborn presents with bilious vomiting, abdominal distension, and failure to pass meconium within the first 48 hours of life. A rectal biopsy shows absence of ganglion cells in the submucosal and myenteric plexuses. The infant's colon appears narrowed distally with proximal dilation on barium enema.",
      question: "Which of the following embryologic processes is most likely defective in this condition?",
      options: ["Recanalization of the intestinal lumen","Migration of neural crest cells to the distal colon","Rotation and fixation of the midgut","Closure of the vitelline duct","Formation of the urorectal septum"],
      correctIndex: 1,
      explanation: "Hirschsprung disease results from failure of neural crest cell migration to the distal colon during weeks 4–7 of embryonic development. The aganglionic segment (always includes the rectum and extends proximally to a variable extent) cannot relax, causing functional obstruction. The proximal, normally innervated bowel dilates. It is associated with RET gene mutations and Down syndrome.",
      optionExplanations: ["Incorrect. Failure of intestinal recanalization during week 8 causes intestinal atresia (duodenal atresia in Down syndrome), not Hirschsprung disease.","Correct. Hirschsprung disease is caused by failure of neural crest cell migration, resulting in absence of ganglion cells (Meissner and Auerbach plexuses) in the distal bowel.","Incorrect. Malrotation results from abnormal midgut rotation during weeks 6–10 and predisposes to volvulus, not aganglionosis.","Incorrect. Failure of vitelline duct closure causes Meckel diverticulum (rule of 2s), not absent ganglion cells.","Incorrect. Defective urorectal septum formation causes anorectal malformations (imperforate anus), not Hirschsprung disease."],
      highYieldPoint: "Hirschsprung disease: failed neural crest cell migration → absent ganglion cells (always includes rectum). Associated with RET mutations and Down syndrome."
    },
    {
      vignette: "A 38-year-old woman with irritable bowel syndrome asks her gastroenterologist about the interdigestive motility pattern that cleans the stomach and small bowel between meals. She notes that her symptoms worsen during fasting periods.",
      question: "Which of the following hormones is the primary stimulator of the migrating motor complex (MMC)?",
      options: ["Cholecystokinin","Gastrin","Motilin","Secretin","Somatostatin"],
      correctIndex: 2,
      explanation: "Motilin, released from enterochromaffin cells in the duodenum and jejunum during fasting, is the primary hormonal driver of the migrating motor complex. The MMC produces cyclical peristaltic waves every 90–120 minutes during fasting that sweep residual food, bacteria, and debris from the stomach and small intestine distally. Eating interrupts the MMC.",
      optionExplanations: ["Incorrect. CCK is released postprandially in response to fat and protein and actually inhibits the MMC by promoting the fed pattern of motility.","Incorrect. Gastrin stimulates acid secretion and is primarily a postprandial hormone; it does not drive the MMC.","Correct. Motilin is released during fasting and initiates the migrating motor complex, the 'interdigestive housekeeper' of the GI tract.","Incorrect. Secretin is released in response to duodenal acid and primarily stimulates pancreatic bicarbonate secretion.","Incorrect. Somatostatin is a broad inhibitor of GI secretion and motility; it does not specifically drive the MMC."],
      highYieldPoint: "Motilin drives the migrating motor complex (MMC) during fasting — cyclical peristalsis every 90–120 min to clear residual material. Erythromycin is a motilin agonist."
    },
    {
      vignette: "A 22-year-old medical student is studying the physiology of salivary secretion. He learns that saliva is initially produced as an isotonic fluid by acinar cells and is subsequently modified as it passes through the ductal system.",
      question: "Which of the following best describes how the ductal cells modify the primary salivary secretion?",
      options: ["Na+ and Cl⁻ are absorbed; K+ and HCO3⁻ are secreted, producing a hypotonic fluid","K+ and Na+ are absorbed; Cl⁻ and HCO3⁻ are secreted, producing a hypertonic fluid","Water is absorbed, concentrating salivary proteins and producing a hypertonic fluid","Na+ and HCO3⁻ are secreted; Cl⁻ and K+ are absorbed, producing an isotonic fluid","Only mucin is added without ion modification, maintaining isotonicity"],
      correctIndex: 0,
      explanation: "Salivary ductal cells reabsorb Na+ and Cl⁻ from the primary secretion and secrete K+ and HCO3⁻ into it. Since the ducts are relatively impermeable to water, this net removal of solute without corresponding water reabsorption produces a final saliva that is hypotonic. At high flow rates (stimulated secretion), there is less time for ductal modification, so saliva becomes more isotonic.",
      optionExplanations: ["Correct. Ductal cells absorb Na+/Cl⁻ and secrete K+/HCO3⁻; water impermeability of ducts makes the final saliva hypotonic.","Incorrect. Ductal cells secrete K+, not absorb it. Also, the final product is hypotonic, not hypertonic.","Incorrect. Salivary ducts are relatively impermeable to water; they modify the ionic composition, not the water content.","Incorrect. Na+ is absorbed by ductal cells, not secreted. HCO3⁻ is secreted, not Na+.","Incorrect. Ductal cells significantly modify the ionic composition of saliva; it is not simply mucin addition."],
      highYieldPoint: "Salivary ducts: absorb Na+/Cl⁻, secrete K+/HCO3⁻. Ducts impermeable to water → hypotonic saliva. High flow → less modification → more isotonic."
    },
    {
      vignette: "A 40-year-old woman undergoes an extensive ileal resection for Crohn disease. Six months later, she develops steatorrhea, diarrhea, and is found to have deficiency of a fat-soluble vitamin. Her prothrombin time is prolonged.",
      question: "Deficiency of which of the following vitamins best explains the prolonged prothrombin time in this patient?",
      options: ["Vitamin A","Vitamin D","Vitamin E","Vitamin K","Vitamin B12"],
      correctIndex: 3,
      explanation: "Ileal resection disrupts bile salt reabsorption (enterohepatic circulation), leading to bile salt depletion and fat malabsorption (steatorrhea). Fat-soluble vitamins (A, D, E, K) require bile salts for absorption. Vitamin K is an essential cofactor for gamma-carboxylation of clotting factors II, VII, IX, and X (and proteins C and S). Its deficiency prolongs both PT and INR.",
      optionExplanations: ["Incorrect. Vitamin A deficiency causes night blindness and squamous metaplasia but does not prolong prothrombin time.","Incorrect. Vitamin D deficiency causes osteomalacia/rickets due to impaired calcium absorption, not coagulopathy.","Incorrect. Vitamin E deficiency causes hemolytic anemia and neurologic dysfunction (spinocerebellar degeneration), not prolonged PT.","Correct. Vitamin K is required for gamma-carboxylation of factors II, VII, IX, X. Its deficiency prolongs PT/INR.","Incorrect. Vitamin B12 is water-soluble and absorbed in the terminal ileum via intrinsic factor. Its deficiency causes megaloblastic anemia, not prolonged PT."],
      highYieldPoint: "Ileal resection → bile salt malabsorption → fat/fat-soluble vitamin malabsorption. Vitamin K deficiency → prolonged PT (factors II, VII, IX, X)."
    },
    {
      vignette: "A 48-year-old obese man is prescribed a medication that inhibits pancreatic lipase for weight management. He is warned about potential side effects related to fat malabsorption.",
      question: "Which of the following is the primary product of pancreatic lipase activity on dietary triglycerides?",
      options: ["Free fatty acids and glycerol","2-monoacylglycerol and free fatty acids","Cholesterol esters and phospholipids","Diacylglycerol and one free fatty acid","Medium-chain fatty acids and short-chain fatty acids"],
      correctIndex: 1,
      explanation: "Pancreatic lipase, with its cofactor colipase, hydrolyzes triglycerides at the sn-1 and sn-3 positions, yielding 2-monoacylglycerol and two free fatty acids. These products are then incorporated into mixed micelles with bile salts for absorption. Orlistat inhibits this enzyme, preventing fat digestion and causing steatorrhea.",
      optionExplanations: ["Incorrect. Complete hydrolysis to glycerol and free fatty acids occurs to a lesser extent; the primary products are 2-monoacylglycerol and two free fatty acids.","Correct. Pancreatic lipase cleaves at sn-1 and sn-3 positions of triglycerides → 2-monoacylglycerol + 2 free fatty acids.","Incorrect. Cholesterol ester hydrolase acts on cholesterol esters; phospholipase A2 acts on phospholipids. These are separate enzymes.","Incorrect. Diacylglycerol is an intermediate step; pancreatic lipase efficiently hydrolyzes both sn-1 and sn-3 positions.","Incorrect. Pancreatic lipase acts on long-chain triglycerides. Medium- and short-chain fatty acids are not primary products of lipase action."],
      highYieldPoint: "Pancreatic lipase + colipase: cleaves TG at sn-1 and sn-3 → 2-monoacylglycerol + 2 FFAs. Orlistat inhibits pancreatic lipase → steatorrhea."
    },
    {
      vignette: "A 35-year-old woman with celiac disease presents with chronic diarrhea, weight loss, and an itchy vesicular rash on her elbows and knees. Small bowel biopsy shows villous atrophy, crypt hyperplasia, and increased intraepithelial lymphocytes in the duodenum and jejunum.",
      question: "Which of the following is the primary mechanism by which villous atrophy leads to diarrhea in this patient?",
      options: ["Increased intestinal permeability causing secretory diarrhea","Decreased absorptive surface area leading to osmotic diarrhea","Bacterial overgrowth in the damaged mucosa","Loss of enteric neurons causing dysmotility","Increased bile acid delivery to the colon"],
      correctIndex: 1,
      explanation: "Villous atrophy in celiac disease dramatically reduces the absorptive surface area of the small intestine. Unabsorbed nutrients (carbohydrates, fats, amino acids) remain in the intestinal lumen, creating an osmotic load that draws water into the lumen. This osmotic diarrhea is the primary mechanism. The rash described is dermatitis herpetiformis, an extraintestinal manifestation with IgA deposits at the dermal papillae.",
      optionExplanations: ["Incorrect. While intestinal permeability may increase, the dominant mechanism of diarrhea is osmotic due to malabsorption from surface area loss.","Correct. Villous atrophy markedly reduces absorptive surface area → unabsorbed solutes in lumen → osmotic water retention → diarrhea.","Incorrect. Bacterial overgrowth is not a primary feature of celiac disease; the pathology is immune-mediated villous destruction.","Incorrect. Celiac disease affects the epithelium, not the enteric nervous system.","Incorrect. Bile acid malabsorption occurs with ileal disease; celiac primarily affects the proximal small bowel (duodenum/jejunum)."],
      highYieldPoint: "Celiac disease: villous atrophy in duodenum/jejunum → decreased absorptive surface → osmotic diarrhea. Triggered by gliadin in wheat/barley/rye. Anti-tTG IgA is the screening test."
    }
  ],
  "Esophageal & gastric disease": [
    {
      vignette: "A 52-year-old obese man with a 10-year history of heartburn undergoes upper endoscopy that reveals salmon-colored mucosa extending 4 cm above the gastroesophageal junction. Biopsy of this area shows replacement of the normal esophageal epithelium with intestinal-type columnar epithelium containing goblet cells.",
      question: "This histologic finding is best classified as which of the following?",
      options: ["Intestinal metaplasia (Barrett esophagus)","Hyperplasia","Dysplasia","Squamous cell carcinoma in situ","Heterotopia"],
      correctIndex: 0,
      explanation: "Barrett esophagus is defined by the replacement of normal esophageal stratified squamous epithelium with intestinal-type columnar epithelium containing goblet cells (intestinal metaplasia). It is a complication of chronic GERD and represents a premalignant condition with increased risk of esophageal adenocarcinoma. Surveillance endoscopy with systematic biopsies is recommended.",
      optionExplanations: ["Correct. Barrett esophagus is intestinal metaplasia of the esophagus — goblet cell-containing columnar epithelium replacing squamous epithelium due to chronic acid reflux.","Incorrect. Hyperplasia is an increase in cell number without a change in cell type. Here, the cell type has changed from squamous to columnar.","Incorrect. Dysplasia involves disordered growth with architectural and cytologic abnormalities. This biopsy shows metaplasia without mention of dysplastic features.","Incorrect. Squamous cell carcinoma in situ would show full-thickness epithelial dysplasia of squamous cells, not columnar replacement.","Incorrect. Heterotopia refers to normal tissue in an abnormal location (e.g., gastric heterotopia in Meckel diverticulum). Barrett is an acquired metaplastic change."],
      highYieldPoint: "Barrett esophagus = intestinal metaplasia (goblet cells) of the distal esophagus due to chronic GERD. Premalignant: squamous → metaplasia → dysplasia → adenocarcinoma."
    },
    {
      vignette: "A 65-year-old man with a history of heavy alcohol and tobacco use presents with progressive dysphagia initially for solids and then liquids, along with a 15-pound weight loss over 3 months. Barium swallow shows an irregular, narrowing lesion in the mid-esophagus. Biopsy reveals nests of malignant cells with keratin pearl formation and intercellular bridges.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Esophageal adenocarcinoma","Gastrointestinal stromal tumor (GIST)","Esophageal leiomyoma","Esophageal squamous cell carcinoma","Esophageal lymphoma"],
      correctIndex: 3,
      explanation: "The mid-esophageal location, risk factors (alcohol and tobacco), and histologic features (keratin pearls and intercellular bridges) are classic for esophageal squamous cell carcinoma. This is the most common type of esophageal cancer worldwide. In contrast, adenocarcinoma arises in the distal esophagus/GEJ in the setting of Barrett esophagus.",
      optionExplanations: ["Incorrect. Adenocarcinoma arises in the distal esophagus in the setting of Barrett esophagus and shows glandular differentiation, not keratin pearls.","Incorrect. GISTs arise from interstitial cells of Cajal and are most common in the stomach, not the mid-esophagus. They express c-KIT (CD117).","Incorrect. Leiomyoma is the most common benign esophageal tumor; it is a submucosal smooth muscle tumor, not a mucosal epithelial malignancy.","Correct. Mid-esophageal location, alcohol/tobacco risk factors, and keratin pearls with intercellular bridges are pathognomonic for squamous cell carcinoma.","Incorrect. Primary esophageal lymphoma is extremely rare and would show lymphoid tissue on histology, not keratin pearls."],
      highYieldPoint: "Esophageal SCC: mid-esophagus, alcohol + tobacco, keratin pearls. Adenocarcinoma: distal esophagus, Barrett/GERD, glandular differentiation."
    },
    {
      vignette: "A 30-year-old woman presents with intermittent dysphagia to both solids and liquids, regurgitation of undigested food, and nocturnal cough. Barium swallow reveals a dilated esophagus with a smooth tapering at the gastroesophageal junction ('bird's beak' sign). Esophageal manometry shows absent peristalsis in the esophageal body and failure of the lower esophageal sphincter to relax.",
      question: "Which of the following best describes the underlying pathology of this condition?",
      options: ["Autoimmune destruction of esophageal squamous epithelium","Fibrosis and collagen deposition in the esophageal submucosa","Extrinsic compression of the esophagus by a vascular ring","Eosinophilic infiltration of the esophageal mucosa","Loss of inhibitory neurons in the myenteric (Auerbach) plexus"],
      correctIndex: 4,
      explanation: "Achalasia is caused by loss of inhibitory neurons (VIP and NO-releasing) in the myenteric (Auerbach) plexus of the esophagus. This results in failure of LES relaxation and aperistalsis. In South America, Chagas disease (Trypanosoma cruzi) causes secondary achalasia by destroying myenteric ganglion cells. Treatment includes pneumatic dilation or Heller myotomy.",
      optionExplanations: ["Incorrect. Autoimmune epithelial destruction is not the mechanism of achalasia; the pathology involves the myenteric plexus neurons.","Incorrect. Submucosal fibrosis is characteristic of scleroderma esophagus, which causes low LES pressure (not failure to relax) and absent peristalsis.","Incorrect. Vascular rings cause extrinsic dysphagia, not the manometric findings of aperistalsis and LES failure described here.","Incorrect. Eosinophilic esophagitis causes concentric rings ('trachealization'), dysphagia to solids, and food impaction, not bird's beak sign.","Correct. Achalasia results from degeneration of inhibitory myenteric neurons → LES fails to relax + absent peristalsis."],
      highYieldPoint: "Achalasia: loss of inhibitory myenteric neurons → LES fails to relax + absent peristalsis. Bird's beak on barium swallow. Chagas can cause secondary achalasia."
    },
    {
      vignette: "A 45-year-old man presents with epigastric pain that improves with eating and worsens 2–3 hours after meals. He reports that antacids provide relief. Endoscopy reveals a 1.5 cm ulcer in the duodenal bulb. Biopsy of the gastric antrum reveals curved, gram-negative bacilli on the mucosal surface.",
      question: "Which of the following enzymes produced by this organism is most important for its survival in the gastric environment?",
      options: ["Coagulase","Hyaluronidase","Catalase","Urease","Collagenase"],
      correctIndex: 3,
      explanation: "Helicobacter pylori produces urease, which hydrolyzes urea into ammonia and CO2. The ammonia creates an alkaline microenvironment around the bacterium, neutralizing gastric acid and allowing it to survive in the harsh acidic stomach. Urease activity is the basis of multiple diagnostic tests: urea breath test, rapid urease test (CLO test), and stool antigen testing.",
      optionExplanations: ["Incorrect. Coagulase is produced by Staphylococcus aureus and is not relevant to H. pylori pathogenesis.","Incorrect. Hyaluronidase is a virulence factor of some streptococci and staphylococci that degrades connective tissue, not relevant here.","Incorrect. While H. pylori does produce catalase and oxidase, urease is the key enzyme for gastric acid survival.","Correct. H. pylori urease converts urea → ammonia + CO2, creating an alkaline buffer that protects the organism from gastric acid.","Incorrect. Collagenase breaks down collagen in tissues; it is not the primary survival mechanism of H. pylori."],
      highYieldPoint: "H. pylori urease: urea → NH3 + CO2. Alkaline microenvironment protects from gastric acid. Basis of urea breath test and CLO test."
    },
    {
      vignette: "A 70-year-old Japanese man presents with early satiety, unintentional weight loss, and a palpable supraclavicular lymph node (Virchow node). Endoscopy reveals a large ulcerated mass in the gastric antrum. Biopsy shows signet ring cells with eccentric nuclei displaced by intracytoplasmic mucin.",
      question: "Which of the following best characterizes the histologic subtype of this gastric cancer?",
      options: ["Intestinal type gastric adenocarcinoma","Gastric carcinoid tumor","Gastric lymphoma (MALToma)","Gastrointestinal stromal tumor","Diffuse type gastric adenocarcinoma"],
      correctIndex: 4,
      explanation: "Signet ring cells are the hallmark of diffuse-type gastric adenocarcinoma (Lauren classification). Intracytoplasmic mucin pushes the nucleus to the periphery, creating the 'signet ring' appearance. Diffuse type infiltrates the gastric wall broadly (linitis plastica or 'leather bottle stomach'), has a poorer prognosis than intestinal type, and is associated with loss of E-cadherin (CDH1 mutations).",
      optionExplanations: ["Incorrect. Intestinal type forms glandular structures, is associated with H. pylori, intestinal metaplasia, and chronic atrophic gastritis, and does not feature signet ring cells.","Incorrect. Gastric carcinoids are neuroendocrine tumors that stain for chromogranin and synaptophysin, not mucin-containing signet ring cells.","Incorrect. MALToma is a B-cell lymphoma of mucosa-associated lymphoid tissue caused by chronic H. pylori infection. It is not characterized by signet ring cells.","Incorrect. GISTs arise from interstitial cells of Cajal, are submucosal, and express c-KIT (CD117). They are mesenchymal, not epithelial.","Correct. Diffuse type gastric adenocarcinoma features signet ring cells, loss of E-cadherin, and diffuse infiltration (linitis plastica)."],
      highYieldPoint: "Diffuse gastric adenocarcinoma: signet ring cells, loss of E-cadherin (CDH1), linitis plastica. Poor prognosis. Krukenberg tumor = ovarian metastasis."
    },
    {
      vignette: "A 35-year-old woman with long-standing GERD is started on a proton pump inhibitor (PPI). She asks how the medication works. The physician explains that the drug irreversibly inhibits a specific enzyme on the apical surface of gastric parietal cells.",
      question: "Which of the following is the target of proton pump inhibitors?",
      options: ["Na+/K+-ATPase","M3 muscarinic receptor","Carbonic anhydrase","H2 histamine receptor","H+/K+-ATPase"],
      correctIndex: 4,
      explanation: "PPIs (omeprazole, lansoprazole, esomeprazole, pantoprazole) irreversibly inhibit the H+/K+-ATPase (proton pump) on the apical membrane of parietal cells. This is the final common step of acid secretion, regardless of the stimulus (histamine, ACh, gastrin). PPIs provide more complete acid suppression than H2 blockers.",
      optionExplanations: ["Incorrect. Na+/K+-ATPase is found on the basolateral membrane of most cells and maintains the sodium-potassium gradient; it is not the target of PPIs.","Incorrect. M3 muscarinic receptors mediate acetylcholine-stimulated acid secretion. Pirenzepine (antimuscarinic) blocks M3, but this is not the PPI mechanism.","Incorrect. Carbonic anhydrase generates H+ and HCO3⁻ within parietal cells. Acetazolamide inhibits carbonic anhydrase in the kidney but is not the mechanism of PPIs.","Incorrect. H2 histamine receptors are the target of H2 blockers (ranitidine, famotidine), not PPIs.","Correct. PPIs irreversibly block the H+/K+-ATPase (proton pump), the final step of acid secretion on the parietal cell apical membrane."],
      highYieldPoint: "PPIs irreversibly inhibit H+/K+-ATPase on parietal cells — the final common pathway of acid secretion. More potent acid suppression than H2 blockers."
    },
    {
      vignette: "A 28-year-old man presents with dysphagia to solids and recurrent food impactions. He has a history of asthma and eczema. Endoscopy shows stacked concentric rings giving a 'trachealized' appearance of the esophagus. Biopsy reveals >15 eosinophils per high-power field in the esophageal mucosa.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Eosinophilic esophagitis","Gastroesophageal reflux disease","Esophageal candidiasis","Pill esophagitis","Schatzki ring"],
      correctIndex: 0,
      explanation: "Eosinophilic esophagitis (EoE) is an immune-mediated condition characterized by eosinophilic infiltration of the esophageal mucosa (≥15 eosinophils/HPF). It is strongly associated with atopic conditions (asthma, eczema, food allergies). Endoscopic findings include concentric rings ('trachealization'), linear furrows, and white exudates. Treatment involves PPIs, swallowed topical corticosteroids, and dietary elimination.",
      optionExplanations: ["Correct. EoE: dysphagia + food impaction + atopy + concentric rings + ≥15 eosinophils/HPF on biopsy.","Incorrect. GERD causes heartburn and can have eosinophils on biopsy, but typically <15/HPF and without the ringed appearance.","Incorrect. Esophageal candidiasis shows white plaques and is seen in immunocompromised patients; biopsy shows pseudohyphae, not eosinophils.","Incorrect. Pill esophagitis causes discrete ulcers at points of esophageal narrowing (aortic arch level), not diffuse rings.","Incorrect. Schatzki ring is a single thin mucosal ring at the GEJ causing intermittent dysphagia for solids, not multiple concentric rings."],
      highYieldPoint: "Eosinophilic esophagitis: young man + atopy + dysphagia + food impaction + ringed esophagus + ≥15 eos/HPF. Treat: swallowed fluticasone, PPI, dietary elimination."
    },
    {
      vignette: "A 55-year-old woman undergoes endoscopy for evaluation of iron-deficiency anemia. An incidental 2 cm submucosal nodule is found in the gastric body. Immunohistochemistry of the biopsy specimen is positive for CD117 (c-KIT) and DOG1.",
      question: "From which of the following cell types does this tumor most likely originate?",
      options: ["Gastric parietal cells","Mucosal epithelial cells","Interstitial cells of Cajal","Smooth muscle cells","Neuroendocrine cells"],
      correctIndex: 2,
      explanation: "Gastrointestinal stromal tumors (GISTs) are the most common mesenchymal tumors of the GI tract and arise from the interstitial cells of Cajal (GI pacemaker cells). They characteristically express CD117 (c-KIT receptor tyrosine kinase) and DOG1. Activating mutations in KIT or PDGFRA drive tumor growth. Imatinib (a tyrosine kinase inhibitor) is the targeted therapy.",
      optionExplanations: ["Incorrect. Parietal cells are epithelial acid-secreting cells; they do not give rise to mesenchymal tumors.","Incorrect. Mucosal epithelial cells give rise to adenocarcinomas, not submucosal mesenchymal tumors positive for CD117.","Correct. GISTs originate from interstitial cells of Cajal and characteristically express CD117 (c-KIT) and DOG1. Treat with imatinib.","Incorrect. Smooth muscle tumors (leiomyoma/leiomyosarcoma) express desmin and smooth muscle actin, not CD117.","Incorrect. Neuroendocrine cells give rise to carcinoid tumors expressing chromogranin and synaptophysin."],
      highYieldPoint: "GIST: most common GI mesenchymal tumor. From interstitial cells of Cajal. CD117+, DOG1+. KIT mutation. Treat with imatinib."
    },
    {
      vignette: "A 62-year-old man with a history of chronic NSAID use presents with sudden-onset severe epigastric pain that rapidly becomes diffuse. On examination, his abdomen is rigid with diffuse rebound tenderness. An upright chest X-ray reveals free air under the diaphragm.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Acute pancreatitis","Perforated peptic ulcer","Acute cholecystitis","Small bowel obstruction","Ruptured abdominal aortic aneurysm"],
      correctIndex: 1,
      explanation: "Free air under the diaphragm (pneumoperitoneum) on upright chest X-ray in a patient with sudden severe abdominal pain and peritoneal signs indicates a perforated hollow viscus. In the setting of chronic NSAID use, the most likely etiology is a perforated peptic ulcer. NSAIDs inhibit COX-1, reducing protective prostaglandin synthesis, which leads to decreased mucus and bicarbonate secretion and impaired mucosal blood flow.",
      optionExplanations: ["Incorrect. Acute pancreatitis causes severe epigastric pain radiating to the back with elevated lipase but does not produce pneumoperitoneum.","Correct. Perforated peptic ulcer causes sudden severe abdominal pain, peritonitis, and pneumoperitoneum on imaging. NSAIDs are a major risk factor.","Incorrect. Cholecystitis causes RUQ pain, positive Murphy sign, and gallbladder wall thickening; it does not typically cause pneumoperitoneum.","Incorrect. Small bowel obstruction causes colicky abdominal pain, vomiting, distension, and air-fluid levels — not free air under diaphragm.","Incorrect. Ruptured AAA causes sudden abdominal/back pain with hypotension but does not produce pneumoperitoneum."],
      highYieldPoint: "Pneumoperitoneum (free air under diaphragm) = perforated hollow viscus until proven otherwise. NSAIDs → peptic ulcers via COX-1 inhibition → ↓ prostaglandins."
    },
    {
      vignette: "A 42-year-old woman presents with progressive difficulty swallowing both solids and liquids over 6 months. She also has Raynaud phenomenon, tight skin on her fingers, and telangiectasias on her face. Esophageal manometry shows decreased lower esophageal sphincter pressure and absent peristalsis in the lower two-thirds of the esophagus.",
      question: "Which of the following is the most likely underlying diagnosis?",
      options: ["Systemic sclerosis (scleroderma)","Achalasia","Myasthenia gravis","Dermatomyositis","Polymyositis"],
      correctIndex: 0,
      explanation: "Scleroderma (systemic sclerosis) frequently involves the esophagus, causing fibrosis and atrophy of the smooth muscle in the lower two-thirds of the esophagus. This leads to decreased LES pressure (unlike achalasia, where LES fails to relax due to high pressure) and absent peristalsis, causing dysphagia and severe GERD. The clinical features (Raynaud, sclerodactyly, telangiectasias) are classic for CREST syndrome.",
      optionExplanations: ["Correct. Scleroderma causes esophageal smooth muscle fibrosis → low LES pressure + absent peristalsis in lower 2/3. CREST features are present.","Incorrect. Achalasia has increased LES pressure with failure to relax; scleroderma has decreased LES pressure.","Incorrect. Myasthenia gravis affects the neuromuscular junction of skeletal muscle, causing oropharyngeal dysphagia (upper 1/3 of esophagus), not lower esophageal dysmotility.","Incorrect. Dermatomyositis can cause proximal skeletal muscle weakness and oropharyngeal dysphagia but does not cause Raynaud or sclerodactyly.","Incorrect. Polymyositis causes proximal skeletal muscle weakness and can cause oropharyngeal dysphagia but does not explain the distal esophageal or skin findings."],
      highYieldPoint: "Scleroderma esophagus: fibrosis of smooth muscle → ↓ LES pressure + absent peristalsis (lower 2/3). Achalasia = ↑ LES pressure (failure to relax)."
    },
    {
      vignette: "A 58-year-old man with pernicious anemia is found to have chronic atrophic gastritis affecting the gastric body and fundus. Serum gastrin is markedly elevated. He is at increased risk for developing a specific type of gastric cancer.",
      question: "Which of the following pathologic processes is the most important precursor to carcinogenesis in this patient?",
      options: ["Foveolar hyperplasia","Intestinal metaplasia of the gastric mucosa","Acute erosive gastritis","Helicobacter pylori colonization of the antrum","Parietal cell hyperplasia"],
      correctIndex: 1,
      explanation: "In pernicious anemia, autoimmune destruction of parietal cells leads to chronic atrophic gastritis. The chronic inflammatory environment promotes intestinal metaplasia (replacement of gastric epithelium with intestinal-type epithelium), which is a premalignant condition that can progress through dysplasia to intestinal-type gastric adenocarcinoma. The elevated gastrin results from loss of acid negative feedback on G cells.",
      optionExplanations: ["Incorrect. Foveolar hyperplasia is a reactive change seen with chemical gastropathy (e.g., NSAID use) and is not the key premalignant step here.","Correct. Intestinal metaplasia is the critical premalignant change: chronic atrophic gastritis → intestinal metaplasia → dysplasia → intestinal-type adenocarcinoma.","Incorrect. Acute erosive gastritis (stress ulcers) is a separate condition and not part of the metaplasia-dysplasia-carcinoma sequence.","Incorrect. H. pylori is the most common cause of chronic gastritis and intestinal metaplasia overall, but this patient has autoimmune (pernicious anemia) gastritis.","Incorrect. Parietal cell hyperplasia does not occur in pernicious anemia; parietal cells are destroyed by autoimmune attack."],
      highYieldPoint: "Pernicious anemia: autoimmune → atrophic gastritis → intestinal metaplasia → dysplasia → intestinal-type gastric adenocarcinoma. Also increased risk of gastric carcinoid."
    },
    {
      vignette: "A 25-year-old woman presents with iron-deficiency anemia. She reports no GI symptoms. Physical examination reveals glossitis and koilonychia. Upper endoscopy shows a thin web in the postcricoid region of the upper esophagus.",
      question: "Which of the following syndromes best describes this patient's presentation?",
      options: ["Mallory-Weiss syndrome","Boerhaave syndrome","Plummer-Vinson syndrome","Zenker diverticulum","Schatzki ring"],
      correctIndex: 2,
      explanation: "Plummer-Vinson (Paterson-Brown-Kelly) syndrome is the triad of iron-deficiency anemia, esophageal web (postcricoid), and dysphagia. It predominantly affects middle-aged women and is associated with an increased risk of squamous cell carcinoma of the upper esophagus and hypopharynx. Treatment involves iron supplementation and endoscopic web dilation.",
      optionExplanations: ["Incorrect. Mallory-Weiss syndrome involves longitudinal mucosal tears at the GEJ due to severe retching/vomiting, causing upper GI bleeding.","Incorrect. Boerhaave syndrome is transmural esophageal rupture (perforation) due to severe vomiting, causing subcutaneous emphysema and mediastinitis.","Correct. Plummer-Vinson syndrome: iron-deficiency anemia + esophageal web + dysphagia. Risk factor for upper esophageal squamous cell carcinoma.","Incorrect. Zenker diverticulum is a false diverticulum (outpouching of mucosa/submucosa) at the pharyngoesophageal junction (Killian triangle), causing halitosis and regurgitation.","Incorrect. Schatzki ring is a mucosal ring at the GEJ (squamocolumnar junction) associated with intermittent dysphagia to solids, not iron-deficiency anemia."],
      highYieldPoint: "Plummer-Vinson: iron-deficiency anemia + esophageal web + dysphagia. Increased risk of esophageal squamous cell carcinoma."
    },
    {
      vignette: "A 48-year-old man presents to the emergency department with hematemesis after forceful vomiting following a night of heavy alcohol consumption. Endoscopy reveals a longitudinal mucosal tear at the gastroesophageal junction that is not actively bleeding.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Esophageal varices","Boerhaave syndrome","Dieulafoy lesion","Mallory-Weiss tear","Erosive esophagitis"],
      correctIndex: 3,
      explanation: "Mallory-Weiss syndrome involves longitudinal mucosal lacerations at the GEJ caused by forceful or prolonged vomiting or retching. The tears involve the mucosa and submucosa but do not penetrate the muscularis (transmural rupture = Boerhaave syndrome). It is a common cause of upper GI bleeding and most tears heal spontaneously.",
      optionExplanations: ["Incorrect. Esophageal varices are dilated submucosal veins due to portal hypertension, typically presenting with painless massive hematemesis, not preceded by forceful vomiting.","Incorrect. Boerhaave syndrome is transmural esophageal perforation with pneumomediastinum and mediastinitis — much more severe than a mucosal tear.","Incorrect. Dieulafoy lesion is an abnormally large submucosal artery that erodes the overlying epithelium, causing massive GI bleeding without an associated ulcer.","Correct. Mallory-Weiss tear: longitudinal mucosal laceration at GEJ from forceful vomiting. Most resolve spontaneously.","Incorrect. Erosive esophagitis shows diffuse mucosal erosions, not a single longitudinal tear at the GEJ after vomiting."],
      highYieldPoint: "Mallory-Weiss: mucosal tear at GEJ from vomiting/retching → hematemesis. Boerhaave: transmural rupture → pneumomediastinum, mediastinitis."
    },
    {
      vignette: "A 60-year-old man presents with worsening dysphagia. He previously had episodes of transient ischemic attacks. A barium swallow shows a smooth-walled outpouching in the posterior hypopharynx, just above the upper esophageal sphincter. The patient reports halitosis and occasionally regurgitates undigested food eaten days earlier.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Epiphrenic diverticulum","Traction diverticulum","Zenker diverticulum","Esophageal duplication cyst","Killian-Jamieson diverticulum"],
      correctIndex: 2,
      explanation: "Zenker diverticulum is a false (pulsion) diverticulum that herniates through Killian triangle, an area of weakness in the posterior hypopharynx between the thyropharyngeus and cricopharyngeus muscles (inferior constrictor). It occurs due to increased intraluminal pressure from upper esophageal sphincter dysfunction. Classic symptoms include dysphagia, halitosis, and regurgitation of undigested food.",
      optionExplanations: ["Incorrect. Epiphrenic diverticula are pulsion diverticula near the distal esophagus above the diaphragm, associated with esophageal motility disorders.","Incorrect. Traction diverticula are true diverticula (all layers) in the mid-esophagus caused by pulling from adjacent mediastinal inflammation (e.g., TB lymphadenitis).","Correct. Zenker diverticulum: posterior hypopharyngeal false diverticulum through Killian triangle → halitosis, dysphagia, regurgitation of undigested food.","Incorrect. Esophageal duplication cysts are congenital and typically asymptomatic, found incidentally on imaging.","Incorrect. Killian-Jamieson diverticulum occurs anterolaterally below the cricopharyngeus, not posteriorly above it."],
      highYieldPoint: "Zenker diverticulum: false pulsion diverticulum through Killian triangle (posterior hypopharynx). Halitosis + regurgitation of old food + dysphagia."
    },
    {
      vignette: "A 40-year-old woman presents with dyspepsia. She is found to be positive for H. pylori on urea breath test. Her physician recommends triple therapy. The patient asks about the consequences of untreated chronic H. pylori infection.",
      question: "Chronic H. pylori infection is most strongly associated with the development of which of the following conditions?",
      options: ["Esophageal adenocarcinoma","Gastric MALT lymphoma","Hepatocellular carcinoma","Pancreatic adenocarcinoma","Colonic adenocarcinoma"],
      correctIndex: 1,
      explanation: "Chronic H. pylori infection is the strongest risk factor for gastric MALT (mucosa-associated lymphoid tissue) lymphoma, a low-grade B-cell lymphoma. The stomach normally lacks organized lymphoid tissue; chronic H. pylori infection drives MALT formation. Remarkably, early-stage gastric MALT lymphoma can regress with H. pylori eradication alone. H. pylori also increases risk for gastric adenocarcinoma and peptic ulcer disease.",
      optionExplanations: ["Incorrect. Esophageal adenocarcinoma is linked to GERD and Barrett esophagus, not H. pylori. H. pylori may actually be protective against GERD.","Correct. H. pylori drives gastric MALT formation; MALT lymphoma can regress with H. pylori eradication. Also associated with gastric adenocarcinoma.","Incorrect. Hepatocellular carcinoma is associated with hepatitis B, hepatitis C, alcoholic cirrhosis, and aflatoxins.","Incorrect. Pancreatic adenocarcinoma risk factors include smoking, chronic pancreatitis, and BRCA2/KRAS mutations.","Incorrect. Colonic adenocarcinoma is linked to APC mutations, Lynch syndrome, and inflammatory bowel disease, not H. pylori."],
      highYieldPoint: "H. pylori: associated with peptic ulcers, gastric adenocarcinoma (intestinal type), and gastric MALT lymphoma. MALT lymphoma may regress with H. pylori eradication."
    }
  ],
  "Liver pathology": [
    {
      vignette: "A 35-year-old man who recently returned from Southeast Asia presents with jaundice, dark urine, and fatigue of 2 weeks duration. He recalls eating shellfish from a street vendor. Serologic testing reveals positive IgM antibodies against a non-enveloped, single-stranded RNA virus. Liver enzymes are markedly elevated.",
      question: "Which of the following hepatitis viruses is most likely responsible for this patient's illness?",
      options: ["Hepatitis A virus","Hepatitis B virus","Hepatitis C virus","Hepatitis D virus","Hepatitis E virus"],
      correctIndex: 0,
      explanation: "Hepatitis A virus (HAV) is a non-enveloped, single-stranded RNA picornavirus transmitted via the fecal-oral route, commonly through contaminated food (especially shellfish) and water. It causes acute hepatitis that does not progress to chronic disease. Anti-HAV IgM indicates acute infection. HAV has no carrier state and confers lifelong immunity after infection.",
      optionExplanations: ["Correct. HAV: fecal-oral transmission (shellfish), non-enveloped ssRNA virus, acute hepatitis only, no chronicity. IgM anti-HAV confirms acute infection.","Incorrect. HBV is an enveloped, partially double-stranded DNA hepadnavirus transmitted parenterally/sexually. It is not transmitted by the fecal-oral route.","Incorrect. HCV is an enveloped, single-stranded RNA flavivirus transmitted parenterally. It has high chronicity (~80%) but is not fecal-orally transmitted.","Incorrect. HDV (delta virus) is a defective RNA virus requiring HBV coinfection. It does not fit the epidemiologic or serologic picture.","Incorrect. HEV is also fecal-orally transmitted and is a non-enveloped RNA virus, but the classic scenario of shellfish in Southeast Asia is most associated with HAV."],
      highYieldPoint: "HAV: fecal-oral (shellfish), picornavirus, acute only (no chronicity). HEV: fecal-oral, water-borne, dangerous in pregnant women (high mortality)."
    },
    {
      vignette: "A 42-year-old man presents with fatigue and is found to have elevated liver enzymes. Serologic workup reveals: HBsAg (+), HBeAg (+), anti-HBc IgM (+), anti-HBs (−). HBV DNA is highly elevated.",
      question: "Which of the following best describes this patient's hepatitis B status?",
      options: ["Acute hepatitis B infection","Chronic hepatitis B with high replication","Resolved hepatitis B infection","Hepatitis B immunization","Window period of hepatitis B"],
      correctIndex: 0,
      explanation: "The combination of HBsAg(+), HBeAg(+), and anti-HBc IgM(+) indicates acute hepatitis B infection with active viral replication. Anti-HBc IgM is the hallmark of acute infection. HBeAg positivity indicates high viral replication and infectivity. In chronic HBV, anti-HBc would be IgG class, not IgM.",
      optionExplanations: ["Correct. HBsAg(+) + HBeAg(+) + anti-HBc IgM(+) = acute HBV with active replication. IgM anti-HBc is the key marker of acute infection.","Incorrect. Chronic HBV would show anti-HBc IgG (not IgM) and HBsAg persistence for >6 months.","Incorrect. Resolved HBV would show anti-HBs(+) and anti-HBc IgG(+) with HBsAg(−).","Incorrect. Vaccination produces only anti-HBs(+); all other markers are negative.","Incorrect. The window period shows anti-HBc IgM(+) as the only positive marker, with HBsAg(−) and anti-HBs(−)."],
      highYieldPoint: "Acute HBV: HBsAg(+), anti-HBc IgM(+), HBeAg(+). Chronic: HBsAg(+) >6 months + anti-HBc IgG. Resolved: anti-HBs(+), anti-HBc IgG(+). Vaccinated: anti-HBs(+) only."
    },
    {
      vignette: "A 50-year-old woman with a 20-year history of heavy alcohol use presents with jaundice, ascites, and spider angiomata. Liver biopsy shows bridging fibrosis with regenerative nodules surrounded by dense fibrous bands. She develops confusion and asterixis.",
      question: "Which of the following best explains the pathogenesis of this patient's confusion?",
      options: ["Direct toxic effects of ethanol on the cerebral cortex","Cerebral edema from hyponatremia","Accumulation of ammonia due to impaired hepatic metabolism","Wernicke encephalopathy from thiamine deficiency","Subdural hematoma from coagulopathy-related hemorrhage"],
      correctIndex: 2,
      explanation: "Hepatic encephalopathy in cirrhosis is primarily caused by accumulation of ammonia (and other neurotoxins) due to the liver's inability to convert ammonia to urea via the urea cycle. Portal-systemic shunting further bypasses hepatic ammonia metabolism. Ammonia crosses the blood-brain barrier, where astrocytes convert it to glutamine, causing astrocyte swelling and cerebral dysfunction. Asterixis (flapping tremor) is characteristic.",
      optionExplanations: ["Incorrect. While chronic alcohol use causes brain damage, the acute confusion with asterixis in the setting of cirrhosis points to hepatic encephalopathy, not direct ethanol toxicity.","Incorrect. While cirrhotic patients can develop hyponatremia, the combination of asterixis and cirrhosis is most suggestive of hepatic encephalopathy.","Correct. Hepatic encephalopathy: impaired ammonia metabolism → brain accumulation → astrocyte glutamine accumulation → cerebral edema and dysfunction. Asterixis is classic.","Incorrect. Wernicke encephalopathy (confusion, ataxia, ophthalmoplegia) is from thiamine deficiency in alcoholics but does not typically present with asterixis.","Incorrect. While coagulopathy from cirrhosis increases bleeding risk, subdural hematoma would present with focal neurologic deficits and not asterixis."],
      highYieldPoint: "Hepatic encephalopathy: ↑ ammonia → astrocyte glutamine accumulation → cerebral edema. Presents with confusion, asterixis. Treat with lactulose, rifaximin."
    },
    {
      vignette: "A 45-year-old man of Northern European descent presents with fatigue, arthralgia in the MCP joints, and new-onset diabetes mellitus. His skin has a bronze discoloration. Liver biopsy shows hepatocytes laden with golden-brown pigment that stains positive with Prussian blue. Serum ferritin is 2,500 ng/mL and transferrin saturation is 85%.",
      question: "Which of the following genetic mutations is most likely responsible for this patient's condition?",
      options: ["ATP7B gene (Wilson disease)","SERPINA1 gene (alpha-1 antitrypsin deficiency)","HFE gene (C282Y mutation)","CFTR gene (cystic fibrosis)","ABCB4 gene (progressive familial intrahepatic cholestasis)"],
      correctIndex: 2,
      explanation: "Hereditary hemochromatosis is an autosomal recessive disorder most commonly caused by the C282Y mutation in the HFE gene on chromosome 6. This mutation leads to increased intestinal iron absorption and iron deposition in organs (liver, pancreas, heart, skin, joints). The classic triad is 'bronze diabetes' (skin hyperpigmentation + diabetes) plus hepatomegaly. Prussian blue stain confirms tissue iron deposition.",
      optionExplanations: ["Incorrect. ATP7B mutations cause Wilson disease, a copper storage disorder presenting with liver disease, neuropsychiatric symptoms, and Kayser-Fleischer rings.","Incorrect. SERPINA1 mutations cause alpha-1 antitrypsin deficiency, presenting with panacinar emphysema and liver cirrhosis with PAS-positive, diastase-resistant globules.","Correct. HFE C282Y mutation causes hereditary hemochromatosis → iron overload → bronze diabetes, cirrhosis, cardiomyopathy. Prussian blue(+) on biopsy.","Incorrect. CFTR mutations cause cystic fibrosis, affecting lungs, pancreas, and sweat glands, not iron overload.","Incorrect. ABCB4 mutations cause impaired biliary phospholipid secretion leading to cholestasis, not iron deposition."],
      highYieldPoint: "Hemochromatosis: HFE C282Y → ↑ iron absorption → deposits in liver, pancreas, heart, skin, joints. 'Bronze diabetes.' Prussian blue stain(+). Treat: phlebotomy."
    },
    {
      vignette: "A 14-year-old boy presents with behavioral changes, declining school performance, and tremor. Slit-lamp examination reveals golden-brown deposits in the Descemet membrane of the cornea. Liver biopsy shows hepatocyte necrosis with copper deposition. Serum ceruloplasmin is low and 24-hour urine copper is elevated.",
      question: "Which of the following best describes the mechanism of copper accumulation in this disorder?",
      options: ["Increased intestinal copper absorption from dietary excess","Accumulation of copper-binding metallothionein in hepatocytes","Autoimmune destruction of hepatocytes releasing stored copper","Defective incorporation of copper into ceruloplasmin and impaired biliary copper excretion","Mutations in the copper transporter CTR1 on the apical enterocyte membrane"],
      correctIndex: 3,
      explanation: "Wilson disease is an autosomal recessive disorder caused by mutations in ATP7B, a copper-transporting ATPase in hepatocytes. ATP7B normally incorporates copper into ceruloplasmin and excretes excess copper into bile. When defective, copper accumulates in the liver (hepatitis/cirrhosis), brain (basal ganglia → neuropsychiatric symptoms), and cornea (Kayser-Fleischer rings from copper in Descemet membrane).",
      optionExplanations: ["Incorrect. Copper absorption is not increased; the defect is in hepatic copper processing and excretion.","Incorrect. Metallothionein binds copper intracellularly but is not the primary defect; the problem is defective ATP7B function.","Incorrect. The copper accumulation is not autoimmune; it is caused by a genetic defect in copper transport.","Correct. ATP7B deficiency → failed copper incorporation into ceruloplasmin + impaired biliary copper excretion → hepatic and extrahepatic copper accumulation.","Incorrect. CTR1 is involved in intestinal copper absorption but is not mutated in Wilson disease."],
      highYieldPoint: "Wilson disease: ATP7B mutation → impaired biliary Cu excretion → Cu accumulates in liver, brain (basal ganglia), cornea (Kayser-Fleischer rings). Low ceruloplasmin."
    },
    {
      vignette: "A 55-year-old woman with primary biliary cholangitis has progressive jaundice and pruritus. Laboratory studies show elevated alkaline phosphatase, elevated conjugated bilirubin, and positive anti-mitochondrial antibodies. Liver biopsy shows destruction of small intrahepatic bile ducts with granulomatous inflammation.",
      question: "Which of the following is the primary target of the autoimmune response in this patient's condition?",
      options: ["Hepatocyte nuclear antigens","Collagen type IV of the hepatic sinusoidal basement membrane","Smooth muscle actin of the portal tracts","The E2 component of the pyruvate dehydrogenase complex on biliary epithelial cells","LKM-1 (liver-kidney microsomal) antigen on hepatocytes"],
      correctIndex: 3,
      explanation: "Primary biliary cholangitis (PBC, formerly primary biliary cirrhosis) is an autoimmune disease characterized by destruction of small intrahepatic bile ducts. Anti-mitochondrial antibodies (AMA) target the E2 subunit of the pyruvate dehydrogenase complex (PDC-E2) on the inner mitochondrial membrane of biliary epithelial cells. This leads to granulomatous destruction of bile ducts, cholestasis, and eventual cirrhosis.",
      optionExplanations: ["Incorrect. Antinuclear antibodies may be present in PBC but are not the defining autoantibody; hepatocyte nuclear antigens are not the primary target.","Incorrect. Collagen type IV antibodies are associated with Goodpasture syndrome (anti-GBM disease), not liver disease.","Incorrect. Anti-smooth muscle antibodies are characteristic of autoimmune hepatitis type 1, not PBC.","Correct. AMA in PBC targets PDC-E2 (pyruvate dehydrogenase E2 component) on biliary epithelial cell mitochondria → bile duct destruction.","Incorrect. Anti-LKM-1 antibodies target CYP2D6 and are characteristic of autoimmune hepatitis type 2."],
      highYieldPoint: "PBC: AMA targets PDC-E2 → small bile duct destruction → cholestasis. Middle-aged women. Ursodeoxycholic acid is first-line treatment."
    },
    {
      vignette: "A 30-year-old man with ulcerative colitis presents with fatigue, jaundice, and pruritus. MRCP reveals multifocal strictures and dilations of the intrahepatic and extrahepatic bile ducts giving a 'beaded' appearance. Serum p-ANCA is positive. Liver biopsy shows concentric periductal fibrosis ('onion-skin' pattern).",
      question: "Which of the following complications is this patient at greatest risk for developing?",
      options: ["Hepatocellular carcinoma","Hepatic adenoma","Gallbladder adenocarcinoma","Cholangiocarcinoma","Focal nodular hyperplasia"],
      correctIndex: 3,
      explanation: "Primary sclerosing cholangitis (PSC) is a chronic cholestatic disease characterized by inflammation and fibrosis of intrahepatic and extrahepatic bile ducts. It is strongly associated with ulcerative colitis (~70% of PSC patients have UC). The 'onion-skin' periductal fibrosis is pathognomonic. PSC carries a significantly increased risk of cholangiocarcinoma (~10-15% lifetime risk), and all PSC patients require surveillance.",
      optionExplanations: ["Incorrect. While cirrhosis from any cause increases HCC risk, cholangiocarcinoma is the most feared malignancy specifically associated with PSC.","Incorrect. Hepatic adenomas are associated with oral contraceptive use and anabolic steroids, not PSC.","Incorrect. Gallbladder cancer risk is modestly increased in PSC but is far less common than cholangiocarcinoma.","Correct. PSC carries a 10-15% lifetime risk of cholangiocarcinoma. Also increased risk of colorectal cancer (due to UC association).","Incorrect. Focal nodular hyperplasia is a benign hepatic lesion not associated with PSC."],
      highYieldPoint: "PSC: onion-skin fibrosis of bile ducts, associated with UC, p-ANCA(+). Major risk: cholangiocarcinoma. MRCP: beaded bile ducts."
    },
    {
      vignette: "A 60-year-old man with a history of hepatitis C cirrhosis presents with increasing abdominal girth and shifting dullness on examination. Diagnostic paracentesis reveals a serum-ascites albumin gradient (SAAG) of 1.8 g/dL and total protein of 1.5 g/dL in the ascitic fluid.",
      question: "Which of the following is the most important pathophysiologic mechanism driving ascites formation in this patient?",
      options: ["Decreased oncotic pressure from hypoalbuminemia alone","Renal artery stenosis causing secondary hyperaldosteronism","Lymphatic obstruction by tumor emboli","Peritoneal inflammation increasing capillary permeability","Increased portal hydrostatic pressure with splanchnic vasodilation and renal sodium retention"],
      correctIndex: 4,
      explanation: "Ascites in cirrhosis results from portal hypertension (SAAG ≥1.1 indicates portal HTN) combined with splanchnic vasodilation (from increased NO production), decreased effective arterial blood volume, and compensatory activation of the RAAS, sympathetic nervous system, and ADH, causing renal sodium and water retention. Hypoalbuminemia contributes but is not the primary driver.",
      optionExplanations: ["Incorrect. Hypoalbuminemia contributes to ascites but alone does not cause it; portal hypertension is the primary driver.","Incorrect. Renal artery stenosis can cause secondary hyperaldosteronism but is not the mechanism of ascites in cirrhosis.","Incorrect. Lymphatic obstruction causes chylous ascites (milky fluid with high triglycerides), not the typical transudative ascites of cirrhosis.","Incorrect. Peritoneal inflammation produces exudative ascites with SAAG <1.1 (e.g., TB peritonitis). This patient has SAAG ≥1.1.","Correct. Portal HTN → splanchnic vasodilation → decreased effective arterial volume → RAAS/ADH activation → renal Na+/H2O retention → ascites."],
      highYieldPoint: "Cirrhotic ascites: portal HTN (SAAG ≥1.1) + splanchnic vasodilation + RAAS activation → Na/H2O retention. Treat with spironolactone + furosemide, sodium restriction."
    },
    {
      vignette: "A 25-year-old woman with a history of oral contraceptive use undergoes abdominal ultrasound for right upper quadrant discomfort. A 5 cm well-circumscribed, solitary hepatic mass is found. Contrast-enhanced CT shows a hypervascular mass with centripetal enhancement. The patient's AFP level is normal.",
      question: "Which of the following hepatic tumors is most likely present in this patient?",
      options: ["Hepatocellular carcinoma","Hepatoblastoma","Focal nodular hyperplasia","Hemangioma","Hepatic adenoma"],
      correctIndex: 4,
      explanation: "Hepatic adenoma is a benign liver tumor strongly associated with oral contraceptive use (exogenous estrogen) and anabolic steroids. It is typically a solitary, well-circumscribed, hypervascular lesion. The main risks include hemorrhage (rupture with intraperitoneal bleeding) and, rarely, malignant transformation to hepatocellular carcinoma. Management includes discontinuing OCPs and surgical resection for lesions >5 cm.",
      optionExplanations: ["Incorrect. HCC typically occurs in the setting of chronic liver disease/cirrhosis with elevated AFP. This young woman has no cirrhosis and normal AFP.","Incorrect. Hepatoblastoma is the most common malignant liver tumor in children <3 years, associated with elevated AFP and Beckwith-Wiedemann syndrome.","Incorrect. FNH has a central stellate scar on imaging, is not associated with OCP use (though can enlarge with estrogen), and has no malignant potential.","Incorrect. Hemangioma is the most common benign liver tumor and shows peripheral nodular enhancement with centripetal fill-in, but is not specifically OCP-associated.","Correct. Hepatic adenoma: associated with OCPs, solitary, hypervascular. Risk of hemorrhage and rare malignant transformation."],
      highYieldPoint: "Hepatic adenoma: OCPs/estrogen, risk of rupture and hemorrhage, rare malignant transformation. Stop OCPs; resect if >5 cm."
    },
    {
      vignette: "A 58-year-old man with known hepatitis B cirrhosis presents with worsening ascites, weight loss, and right upper quadrant pain. Serum alpha-fetoprotein (AFP) is 800 ng/mL (normal <10 ng/mL). CT scan reveals a large, heterogeneous mass in the right hepatic lobe with arterial hyperenhancement.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Metastatic colorectal cancer to the liver","Focal nodular hyperplasia","Cholangiocarcinoma","Hepatic adenoma","Hepatocellular carcinoma"],
      correctIndex: 4,
      explanation: "Hepatocellular carcinoma (HCC) is the most common primary malignant liver tumor. Major risk factors include hepatitis B (even without cirrhosis), hepatitis C cirrhosis, alcoholic cirrhosis, hemochromatosis, and aflatoxin B1 exposure. Elevated AFP (>400 ng/mL) is highly suggestive. HCC characteristically shows arterial phase hyperenhancement on CT/MRI. HBV can cause HCC through direct DNA integration even without cirrhosis.",
      optionExplanations: ["Incorrect. Metastatic colorectal cancer would typically show multiple lesions; also AFP would not be this elevated (CEA is the marker for colorectal cancer).","Incorrect. FNH is a benign lesion with a central scar; it does not present with elevated AFP or occur in the setting of cirrhosis.","Incorrect. Cholangiocarcinoma arises from bile duct epithelium and is associated with PSC, liver flukes, and Caroli disease; AFP is typically normal (CA 19-9 elevated).","Incorrect. Hepatic adenoma is benign, occurs in young women on OCPs, and AFP is normal.","Correct. HCC: hepatitis B cirrhosis + elevated AFP + arterial hyperenhancing mass. HBV is the #1 cause of HCC worldwide."],
      highYieldPoint: "HCC: #1 primary liver malignancy. Risk: HBV, HCV cirrhosis, alcohol, aflatoxin B1, hemochromatosis. Elevated AFP. Arterial hyperenhancement on imaging."
    },
    {
      vignette: "A 40-year-old woman presents with jaundice, elevated aminotransferases (ALT 1,200 U/L, AST 900 U/L), and positive anti-smooth muscle antibodies (ASMA) and anti-nuclear antibodies (ANA). Serum IgG is markedly elevated. Liver biopsy shows interface hepatitis with prominent plasma cell infiltration.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Autoimmune hepatitis type 1","Primary biliary cholangitis","Primary sclerosing cholangitis","Hepatitis C infection","Drug-induced liver injury"],
      correctIndex: 0,
      explanation: "Autoimmune hepatitis type 1 is characterized by positive ANA and/or ASMA, elevated IgG, and interface hepatitis with plasma cell infiltration on biopsy. It is most common in young to middle-aged women and responds to immunosuppression (corticosteroids + azathioprine). Type 2 autoimmune hepatitis is characterized by anti-LKM-1 antibodies.",
      optionExplanations: ["Correct. AIH type 1: ANA/ASMA(+), elevated IgG, interface hepatitis with plasma cells. Responds to steroids + azathioprine.","Incorrect. PBC shows AMA(+), elevated ALP (not aminotransferases), and bile duct destruction, not interface hepatitis.","Incorrect. PSC shows p-ANCA, beaded bile ducts on MRCP, and periductal onion-skin fibrosis, not interface hepatitis with ASMA.","Incorrect. HCV can cause chronic hepatitis but is diagnosed by anti-HCV antibodies and HCV RNA; ASMA is not the defining feature.","Incorrect. DILI can mimic autoimmune hepatitis but requires a history of offending drug exposure and typically improves with drug withdrawal."],
      highYieldPoint: "AIH type 1: ANA/ASMA, ↑IgG, interface hepatitis + plasma cells. Type 2: anti-LKM-1 (targets CYP2D6). Treat: prednisone + azathioprine."
    },
    {
      vignette: "A 48-year-old man with alcoholic cirrhosis presents with fever, abdominal pain, and worsening ascites. Diagnostic paracentesis of the ascitic fluid reveals an absolute neutrophil count of 450 cells/mm³ and a positive culture for E. coli.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Secondary bacterial peritonitis","Spontaneous bacterial peritonitis","Tuberculous peritonitis","Peritoneal carcinomatosis","Pancreatic ascites"],
      correctIndex: 1,
      explanation: "Spontaneous bacterial peritonitis (SBP) is defined by an ascitic fluid absolute PMN count ≥250 cells/mm³ in the absence of a surgically treatable intra-abdominal source of infection. It occurs most commonly in cirrhotic patients with ascites due to bacterial translocation from the gut. Common organisms include E. coli, Klebsiella, and pneumococcus. Empiric treatment is IV ceftriaxone or cefotaxime.",
      optionExplanations: ["Incorrect. Secondary peritonitis would show very high protein, low glucose, multiple organisms, and evidence of a surgical source (perforation, abscess).","Correct. SBP: ascitic PMN ≥250/mm³ in cirrhotic ascites, usually monomicrobial (E. coli, Klebsiella). Treat with IV third-generation cephalosporin.","Incorrect. TB peritonitis causes exudative ascites with SAAG <1.1, lymphocyte predominance, and elevated adenosine deaminase.","Incorrect. Peritoneal carcinomatosis causes exudative ascites with SAAG <1.1 and positive cytology for malignant cells.","Incorrect. Pancreatic ascites shows elevated amylase in the fluid and is associated with pancreatitis or pancreatic duct disruption."],
      highYieldPoint: "SBP: ascitic PMN ≥250/mm³, usually monomicrobial. Treat empirically with ceftriaxone. Prophylaxis with fluoroquinolones in high-risk patients."
    },
    {
      vignette: "A 50-year-old man with decompensated alcoholic cirrhosis presents with massive hematemesis. Endoscopy reveals actively bleeding dilated tortuous veins in the distal esophagus. His platelet count is 65,000/μL and splenomegaly is noted on examination.",
      question: "Which of the following best explains the pathophysiology of the esophageal varices in this patient?",
      options: ["Hepatic vein thrombosis (Budd-Chiari syndrome)","Increased portal venous pressure with portosystemic shunting","Superior vena cava obstruction","Splenic artery aneurysm","Arteriovenous malformation in the gastric wall"],
      correctIndex: 1,
      explanation: "Cirrhosis causes increased intrahepatic resistance to portal blood flow, raising portal venous pressure (portal hypertension, defined as portal pressure gradient >5 mmHg, clinically significant >10 mmHg). Blood is diverted through portosystemic anastomoses, including esophageal submucosal veins (→ esophageal varices), rectal veins (→ hemorrhoids), and periumbilical veins (→ caput medusae). Variceal bleeding occurs when portal pressure gradient exceeds 12 mmHg.",
      optionExplanations: ["Incorrect. Budd-Chiari syndrome (hepatic vein thrombosis) causes post-sinusoidal portal hypertension but is not the mechanism in alcoholic cirrhosis, which is sinusoidal.","Correct. Cirrhosis → sinusoidal portal hypertension → portosystemic shunting through esophageal submucosal veins → varices.","Incorrect. SVC obstruction causes upper body edema and collateral veins on the chest wall, not esophageal varices.","Incorrect. Splenic artery aneurysm does not cause esophageal varices; it may cause splenic hemorrhage.","Incorrect. AVMs cause focal bleeding but do not explain the diffuse varices and portal hypertensive findings (splenomegaly, thrombocytopenia)."],
      highYieldPoint: "Portal HTN varices: esophageal (L gastric → esophageal veins), caput medusae (paraumbilical veins), hemorrhoids (superior → inferior rectal veins)."
    },
    {
      vignette: "A 22-year-old man presents with progressive dyspnea and is found to have panacinar emphysema predominantly affecting the lower lung lobes. Liver biopsy reveals PAS-positive, diastase-resistant globules within hepatocytes. He is a nonsmoker.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Cystic fibrosis","Alpha-1 antitrypsin deficiency","Wilson disease","Hemochromatosis","Non-alcoholic fatty liver disease"],
      correctIndex: 1,
      explanation: "Alpha-1 antitrypsin (AAT) deficiency is an autosomal codominant disorder (SERPINA1 gene, PiZZ phenotype) causing misfolded AAT protein to accumulate in hepatocyte ER (PAS+, diastase-resistant globules) and decreased circulating AAT. In the lungs, uninhibited neutrophil elastase destroys alveolar walls, causing panacinar emphysema of the lower lobes. Liver disease progresses to cirrhosis.",
      optionExplanations: ["Incorrect. Cystic fibrosis causes obstructive lung disease and pancreatic insufficiency but does not produce PAS-positive, diastase-resistant hepatic globules.","Correct. AAT deficiency: PAS(+)/diastase-resistant hepatic globules (misfolded AAT) + panacinar emphysema (lower lobes) + liver cirrhosis.","Incorrect. Wilson disease shows copper deposition (rhodanine stain positive), not PAS-positive globules.","Incorrect. Hemochromatosis shows Prussian blue-positive iron deposition in hepatocytes.","Incorrect. NAFLD shows hepatic steatosis (fat droplets) on biopsy, not PAS-positive globules."],
      highYieldPoint: "AAT deficiency (PiZZ): liver (PAS+/diastase-resistant globules → cirrhosis) + lungs (panacinar emphysema, lower lobes). Treat: IV AAT augmentation."
    },
    {
      vignette: "A 35-year-old woman develops fulminant hepatic failure after acetaminophen overdose. She took approximately 15 grams of acetaminophen 3 days ago. She is jaundiced, confused, and has an INR of 6.5. ALT is 8,000 U/L.",
      question: "Which of the following metabolic pathways is most directly responsible for the hepatotoxicity in this patient?",
      options: ["Glucuronidation of acetaminophen in hepatocytes","Sulfation of acetaminophen to a water-soluble metabolite","Formation of NAPQI by cytochrome P450 (CYP2E1) overwhelming glutathione stores","Renal excretion of unchanged acetaminophen","Direct mitochondrial toxicity by the parent compound"],
      correctIndex: 2,
      explanation: "At therapeutic doses, acetaminophen is primarily metabolized by glucuronidation and sulfation. A small fraction is oxidized by CYP2E1 to NAPQI (N-acetyl-p-benzoquinoneimine), a toxic metabolite normally neutralized by conjugation with glutathione. In overdose, glucuronidation/sulfation pathways are saturated, more NAPQI is produced, glutathione stores are depleted, and free NAPQI causes hepatocellular necrosis (centrilobular/zone 3 necrosis). N-acetylcysteine (NAC) replenishes glutathione.",
      optionExplanations: ["Incorrect. Glucuronidation is a normal detoxification pathway; it is not hepatotoxic. It becomes overwhelmed in overdose.","Incorrect. Sulfation is also a normal, non-toxic conjugation pathway that is saturated in overdose.","Correct. CYP2E1 produces NAPQI → glutathione depletion → NAPQI binds hepatocyte proteins → centrilobular necrosis. NAC replenishes glutathione.","Incorrect. Very little acetaminophen is excreted unchanged renally; this is not relevant to hepatotoxicity.","Incorrect. Acetaminophen itself is not directly toxic; toxicity is caused by the NAPQI metabolite."],
      highYieldPoint: "Acetaminophen toxicity: CYP2E1 → NAPQI → glutathione depletion → centrilobular (zone 3) necrosis. Antidote: N-acetylcysteine (replenishes glutathione)."
    }
  ],
  "Pancreatic & biliary disease": [
    {
      vignette: "A 45-year-old woman with a BMI of 38 presents with sudden-onset severe right upper quadrant pain radiating to the right scapula after eating a fatty meal. She is febrile (38.5°C) with a positive Murphy sign. Ultrasound reveals gallbladder wall thickening (6 mm), pericholecystic fluid, and multiple gallstones. Labs show WBC 14,000/μL.",
      question: "Which of the following is the most appropriate next step in management?",
      options: ["IV antibiotics and laparoscopic cholecystectomy within 72 hours","Elective cholecystectomy in 6 weeks","ERCP with sphincterotomy","Ursodeoxycholic acid to dissolve the gallstones","CT scan of the abdomen with contrast"],
      correctIndex: 0,
      explanation: "This patient presents with acute cholecystitis — gallstone impaction in the cystic duct causing gallbladder inflammation. The presentation (RUQ pain after fatty meal, fever, positive Murphy sign, thickened gallbladder wall with pericholecystic fluid) is classic. Management involves IV antibiotics and early laparoscopic cholecystectomy (ideally within 72 hours), which has been shown to be superior to delayed surgery.",
      optionExplanations: ["Correct. Acute cholecystitis: IV antibiotics + early laparoscopic cholecystectomy (within 72 hours) is standard of care.","Incorrect. Delayed cholecystectomy is associated with increased recurrence and complications. Current guidelines favor early cholecystectomy within 72 hours.","Incorrect. ERCP is indicated for choledocholithiasis (common bile duct stones) or cholangitis, not isolated acute cholecystitis.","Incorrect. Ursodeoxycholic acid can dissolve small cholesterol stones but is not appropriate for acute cholecystitis requiring surgical treatment.","Incorrect. Ultrasound (already performed) is the first-line imaging for suspected cholecystitis. CT is not the primary diagnostic modality."],
      highYieldPoint: "Acute cholecystitis: cystic duct obstruction → RUQ pain, fever, Murphy sign. Dx: US (thickened wall, pericholecystic fluid). Tx: IV antibiotics + early cholecystectomy."
    },
    {
      vignette: "A 38-year-old man presents to the emergency department with severe epigastric pain radiating to the back, nausea, and vomiting after a night of heavy drinking. His serum lipase is 1,500 U/L (normal <60 U/L). CT scan shows pancreatic edema with peripancreatic fat stranding but no necrosis.",
      question: "Which of the following is the most important initial management step for this patient?",
      options: ["Aggressive intravenous fluid resuscitation","Emergent ERCP","Prophylactic broad-spectrum antibiotics","NPO status with total parenteral nutrition","Emergent surgical necrosectomy"],
      correctIndex: 0,
      explanation: "Aggressive IV fluid resuscitation is the cornerstone of acute pancreatitis management. Early fluid replacement with lactated Ringer solution (goal-directed, ~250-500 mL/hr initially) combats the massive third-space fluid losses and hypovolemia that drive multi-organ failure. Additional management includes pain control, NPO if unable to tolerate oral intake, and monitoring for complications.",
      optionExplanations: ["Correct. Aggressive IV fluid resuscitation is the most critical initial intervention in acute pancreatitis to prevent hypovolemic shock and organ failure.","Incorrect. ERCP is indicated for gallstone pancreatitis with biliary obstruction or concurrent cholangitis, not alcohol-induced pancreatitis without biliary pathology.","Incorrect. Prophylactic antibiotics are NOT recommended in acute pancreatitis without evidence of infected necrosis.","Incorrect. Current guidelines recommend early oral feeding as tolerated rather than prolonged NPO with TPN, which is associated with increased infections.","Incorrect. Surgical necrosectomy is reserved for infected pancreatic necrosis refractory to antibiotics, typically ≥4 weeks into the disease course."],
      highYieldPoint: "Acute pancreatitis: aggressive IV fluids (LR preferred), pain control, early oral feeding when tolerated. No prophylactic antibiotics. ERCP only for biliary obstruction."
    },
    {
      vignette: "A 60-year-old man presents with painless jaundice, a palpable nontender gallbladder, and a 20-pound weight loss over 2 months. CT scan shows a mass in the head of the pancreas with dilation of both the common bile duct and pancreatic duct ('double duct sign'). CA 19-9 is elevated.",
      question: "Which of the following clinical signs describes the finding of a palpable, nontender gallbladder in the setting of painless obstructive jaundice?",
      options: ["Courvoisier sign","Murphy sign","Cullen sign","Grey Turner sign","Charcot triad"],
      correctIndex: 0,
      explanation: "Courvoisier sign is a palpable, nontender gallbladder in the setting of painless jaundice, suggesting malignant obstruction of the common bile duct (typically by pancreatic head carcinoma). Courvoisier's law states that in the presence of painless obstructive jaundice, a palpable gallbladder is unlikely to be caused by gallstones (because chronic gallstone disease causes a fibrotic, non-distensible gallbladder).",
      optionExplanations: ["Correct. Courvoisier sign: palpable, nontender gallbladder + painless jaundice → suggests malignant biliary obstruction (pancreatic head cancer).","Incorrect. Murphy sign is inspiratory arrest during RUQ palpation, classic for acute cholecystitis.","Incorrect. Cullen sign is periumbilical ecchymosis seen in severe hemorrhagic pancreatitis (retroperitoneal hemorrhage tracking to the umbilicus).","Incorrect. Grey Turner sign is flank ecchymosis, also seen in severe hemorrhagic pancreatitis.","Incorrect. Charcot triad (fever, RUQ pain, jaundice) is the classic presentation of ascending cholangitis."],
      highYieldPoint: "Courvoisier sign: palpable, nontender gallbladder + painless jaundice = malignant CBD obstruction (pancreatic head CA). Gallstones cause fibrotic gallbladder (not palpable)."
    },
    {
      vignette: "A 52-year-old man with a history of chronic alcohol use presents with recurrent episodes of epigastric pain, steatorrhea, and new-onset diabetes mellitus. An abdominal X-ray shows pancreatic calcifications. Fecal elastase level is markedly low.",
      question: "Which of the following best explains the steatorrhea in this patient?",
      options: ["Bile duct obstruction preventing bile flow to the duodenum","Bacterial overgrowth deconjugating bile salts","Villous atrophy of the small intestine reducing absorptive surface","Insufficient pancreatic lipase secretion due to exocrine pancreatic insufficiency","Lymphatic obstruction preventing chylomicron transport"],
      correctIndex: 3,
      explanation: "Chronic pancreatitis causes progressive destruction of the pancreatic parenchyma with fibrosis and calcification. Loss of exocrine function leads to insufficient secretion of pancreatic lipase and other digestive enzymes. Since lipase is required to hydrolyze dietary triglycerides, its deficiency results in fat malabsorption (steatorrhea). Steatorrhea typically occurs when >90% of exocrine function is lost. Low fecal elastase confirms exocrine insufficiency.",
      optionExplanations: ["Incorrect. Bile duct obstruction causes pale, acholic stools and conjugated hyperbilirubinemia, not isolated steatorrhea with calcifications and low fecal elastase.","Incorrect. SIBO can cause fat malabsorption, but the constellation of pancreatic calcifications, diabetes, and low fecal elastase indicates pancreatic insufficiency.","Incorrect. Villous atrophy (e.g., celiac disease) affects the proximal small bowel; pancreatic calcifications and low fecal elastase point to pancreatic origin.","Correct. Chronic pancreatitis → pancreatic exocrine insufficiency → ↓ lipase → fat malabsorption (steatorrhea). Low fecal elastase confirms diagnosis.","Incorrect. Lymphatic obstruction (e.g., intestinal lymphangiectasia) causes protein-losing enteropathy and steatorrhea but does not explain pancreatic calcifications."],
      highYieldPoint: "Chronic pancreatitis: calcifications, exocrine insufficiency (steatorrhea when >90% lost), endocrine insufficiency (diabetes). Most common cause: alcohol."
    },
    {
      vignette: "A 65-year-old woman presents with fever (39°C), right upper quadrant pain, and jaundice. She appears toxic and is hypotensive (BP 85/50 mmHg) with altered mental status. Ultrasound shows common bile duct dilation to 12 mm with a 1.5 cm stone in the distal CBD. Total bilirubin is 8 mg/dL.",
      question: "Which of the following describes the pentad of findings in this patient's condition?",
      options: ["Virchow triad","Beck triad","Charcot triad plus hypotension and altered mental status (Reynolds pentad)","Cushing triad","Whipple triad"],
      correctIndex: 2,
      explanation: "This patient has acute ascending cholangitis with septic shock (Reynolds pentad). Charcot triad (fever, RUQ pain, jaundice) characterizes cholangitis. When cholangitis progresses to suppurative cholangitis, hypotension and altered mental status are added (Reynolds pentad). This is a surgical emergency requiring emergent biliary decompression (ERCP with sphincterotomy) and IV antibiotics.",
      optionExplanations: ["Incorrect. Virchow triad (stasis, endothelial injury, hypercoagulability) describes risk factors for venous thromboembolism.","Incorrect. Beck triad (hypotension, JVD, muffled heart sounds) characterizes cardiac tamponade.","Correct. Reynolds pentad = Charcot triad (fever, RUQ pain, jaundice) + hypotension + altered mental status → suppurative cholangitis, a surgical emergency.","Incorrect. Cushing triad (hypertension, bradycardia, irregular respirations) indicates increased intracranial pressure.","Incorrect. Whipple triad describes hypoglycemia: low blood glucose, symptoms of hypoglycemia, resolution with glucose administration."],
      highYieldPoint: "Cholangitis: Charcot triad (fever, RUQ pain, jaundice). Reynolds pentad adds hypotension + AMS → suppurative cholangitis. Emergent ERCP."
    },
    {
      vignette: "A 55-year-old woman with a history of gallstones develops sudden severe epigastric pain, nausea, and vomiting. Lipase is elevated at 2,000 U/L. Three days later, she develops flank ecchymosis and periumbilical discoloration. Her hematocrit drops from 42% to 28%.",
      question: "Which of the following complications of pancreatitis do the physical examination findings suggest?",
      options: ["Pancreatic pseudocyst","Infected pancreatic necrosis","Hemorrhagic pancreatitis with retroperitoneal hemorrhage","Pancreatic abscess","Pancreatic duct disruption"],
      correctIndex: 2,
      explanation: "Flank ecchymosis (Grey Turner sign) and periumbilical discoloration (Cullen sign) indicate retroperitoneal hemorrhage tracking to the skin, a feature of severe hemorrhagic necrotizing pancreatitis. The dropping hematocrit confirms significant blood loss. These signs indicate severe, necrotizing pancreatitis with a poor prognosis. They are classic but uncommon findings.",
      optionExplanations: ["Incorrect. Pseudocysts develop weeks after pancreatitis as encapsulated fluid collections; they do not cause ecchymosis or acute hematocrit drop.","Incorrect. Infected necrosis presents with fever and sepsis, typically ≥7 days into the course; it does not specifically cause flank/periumbilical ecchymosis.","Correct. Grey Turner sign (flank) + Cullen sign (periumbilical) = hemorrhagic pancreatitis with retroperitoneal hemorrhage. Dropping hematocrit confirms.","Incorrect. Pancreatic abscess is a late complication presenting with persistent fever and leukocytosis, not skin ecchymosis.","Incorrect. Pancreatic duct disruption causes pancreatic ascites or pleural effusion (amylase-rich), not ecchymosis."],
      highYieldPoint: "Grey Turner sign (flank ecchymosis) + Cullen sign (periumbilical ecchymosis) = hemorrhagic pancreatitis. Poor prognostic indicators."
    },
    {
      vignette: "A 42-year-old woman presents with colicky right upper quadrant pain that began 2 hours after eating fried chicken. The pain lasts 4 hours and then resolves. Labs show normal bilirubin, normal liver enzymes, and normal lipase. Ultrasound reveals multiple gallstones with a normal-caliber common bile duct.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Acute cholecystitis","Acute cholangitis","Choledocholithiasis","Acute pancreatitis","Biliary colic"],
      correctIndex: 4,
      explanation: "Biliary colic is caused by transient gallstone impaction in the cystic duct during gallbladder contraction (stimulated by CCK after fatty meal ingestion). The pain is typically steady (despite the name 'colic'), lasts 30 minutes to 6 hours, and resolves spontaneously when the stone dislodges. Normal labs (no elevation of bilirubin, liver enzymes, or lipase) and no gallbladder wall changes distinguish it from cholecystitis or choledocholithiasis.",
      optionExplanations: ["Incorrect. Acute cholecystitis involves persistent cystic duct obstruction with inflammation (fever, leukocytosis, Murphy sign, gallbladder wall thickening). This patient's pain resolved and labs are normal.","Incorrect. Cholangitis requires Charcot triad (fever, RUQ pain, jaundice) and implies biliary infection; none of these features are present.","Incorrect. Choledocholithiasis (CBD stone) would elevate bilirubin and liver enzymes (especially ALP/GGT) and dilate the CBD.","Incorrect. Acute pancreatitis would show elevated lipase; this patient's lipase is normal.","Correct. Biliary colic: transient cystic duct obstruction → self-limited RUQ pain after fatty meals, normal labs, no gallbladder wall thickening."],
      highYieldPoint: "Biliary colic: transient cystic duct obstruction, resolves <6 hours, normal labs. Cholecystitis: persistent obstruction, inflammation, fever, leukocytosis."
    },
    {
      vignette: "A 70-year-old man undergoes a Whipple procedure (pancreaticoduodenectomy) for pancreatic head adenocarcinoma. Pathology reveals a 3 cm moderately differentiated ductal adenocarcinoma with KRAS mutation.",
      question: "Which of the following genetic alterations is most commonly found in pancreatic ductal adenocarcinoma?",
      options: ["BRAF V600E mutation","RB1 deletion","APC loss of function","BCR-ABL translocation","KRAS point mutation"],
      correctIndex: 4,
      explanation: "KRAS oncogene activating mutations (most commonly at codon 12) are present in >90% of pancreatic ductal adenocarcinomas, making it the most common genetic alteration in this cancer. Other frequent alterations include inactivation of tumor suppressors CDKN2A (p16), TP53, and SMAD4 (DPC4). The molecular progression from PanIN (pancreatic intraepithelial neoplasia) to invasive cancer follows these stepwise genetic changes.",
      optionExplanations: ["Incorrect. BRAF V600E is common in melanoma, hairy cell leukemia, and papillary thyroid carcinoma, not pancreatic cancer.","Incorrect. RB1 deletion is associated with retinoblastoma and some small cell carcinomas, not pancreatic adenocarcinoma.","Incorrect. APC mutations are the initiating event in colorectal cancer (familial adenomatous polyposis), not pancreatic cancer.","Incorrect. BCR-ABL t(9;22) is the hallmark of chronic myeloid leukemia, not solid tumors.","Correct. KRAS mutations occur in >90% of pancreatic ductal adenocarcinomas — the most common genetic alteration in this cancer."],
      highYieldPoint: "Pancreatic ductal adenocarcinoma: KRAS mutation (>90%), CDKN2A/p16 loss, TP53 loss, SMAD4/DPC4 loss. Progression: PanIN → invasive cancer."
    },
    {
      vignette: "A 50-year-old woman with gallstones undergoes ERCP. During the procedure, contrast is injected into the biliary tree. She develops fever, chills, and hypotension within hours of the procedure. Blood cultures grow gram-negative rods.",
      question: "Which of the following organisms is the most common cause of ascending cholangitis?",
      options: ["Staphylococcus aureus","Enterococcus faecium","Bacteroides fragilis","Clostridium difficile","Escherichia coli"],
      correctIndex: 4,
      explanation: "E. coli is the most common organism causing ascending cholangitis, followed by Klebsiella, Enterococcus, and Enterobacter. Cholangitis occurs when biliary obstruction (usually by gallstones) leads to bile stasis and bacterial ascent from the duodenum. The high intraluminal pressure facilitates bacteremia and sepsis. Treatment requires IV antibiotics and biliary decompression.",
      optionExplanations: ["Incorrect. S. aureus is a common cause of skin/soft tissue and bloodstream infections but is not the typical pathogen in cholangitis.","Incorrect. Enterococcus species can cause cholangitis but are less common than E. coli.","Incorrect. Bacteroides fragilis is an anaerobe found in complicated biliary infections and polymicrobial infections but is not the most common primary pathogen.","Incorrect. C. difficile causes pseudomembranous colitis from antibiotic use, not biliary tract infections.","Correct. E. coli is the most common pathogen in ascending cholangitis, along with Klebsiella and Enterococcus."],
      highYieldPoint: "Ascending cholangitis: E. coli is #1 cause. Bile stasis + bacterial ascent → sepsis. Treatment: antibiotics + biliary decompression (ERCP)."
    },
    {
      vignette: "A 48-year-old man presents with recurrent episodes of epigastric pain, weight loss, and greasy stools over the past year. CT abdomen shows a pancreatic duct dilated to 8 mm with diffuse parenchymal calcifications. He has a 15-year history of heavy alcohol use.",
      question: "Which of the following cells within the pancreas is primarily responsible for the fibrotic changes seen in chronic pancreatitis?",
      options: ["Acinar cells","Ductal epithelial cells","Islet beta cells","Pancreatic stellate cells","Centroacinar cells"],
      correctIndex: 3,
      explanation: "Pancreatic stellate cells (PSCs), analogous to hepatic stellate cells, are the primary effectors of fibrosis in chronic pancreatitis. When activated by chronic injury (alcohol, oxidative stress, cytokines from acinar cell necrosis), PSCs transform from a quiescent, vitamin A-storing phenotype to an activated myofibroblast phenotype that produces excessive collagen and extracellular matrix, driving fibrosis.",
      optionExplanations: ["Incorrect. Acinar cells produce digestive enzymes and are damaged in pancreatitis, but they do not drive fibrosis.","Incorrect. Ductal cells line the pancreatic ducts and can be damaged in pancreatitis; they are not the primary source of fibrotic tissue.","Incorrect. Beta cells produce insulin and are destroyed in chronic pancreatitis (causing diabetes), but do not produce fibrosis.","Correct. Pancreatic stellate cells, when activated, produce collagen and ECM, driving fibrosis in chronic pancreatitis — analogous to hepatic stellate cells in liver fibrosis.","Incorrect. Centroacinar cells secrete bicarbonate-rich fluid; they are not responsible for fibrotic changes."],
      highYieldPoint: "Pancreatic stellate cells drive fibrosis in chronic pancreatitis (analogous to hepatic stellate cells/Ito cells in liver cirrhosis). Both produce collagen when activated."
    },
    {
      vignette: "A 35-year-old woman presents with recurrent episodes of sharp abdominal pain. Ultrasound shows a solitary gallstone measuring 2.5 cm. She is interested in understanding why she developed gallstones. Her BMI is 32 and she has been on oral contraceptives for 10 years.",
      question: "Which of the following best describes the primary risk factors for cholesterol gallstone formation?",
      options: ["Biliary infection and parasite infestation","Cholesterol supersaturation of bile, gallbladder hypomotility, and accelerated nucleation","Chronic hemolysis and bilirubin overproduction","Excessive calcium carbonate precipitation","Increased bile salt concentration in the gallbladder"],
      correctIndex: 1,
      explanation: "Cholesterol gallstones (80% of gallstones in Western countries) form when bile becomes supersaturated with cholesterol relative to bile salts and lecithin. Three factors contribute: (1) cholesterol supersaturation (obesity, estrogen, fibrates), (2) gallbladder hypomotility (stasis from fasting, pregnancy, TPN, vagotomy), and (3) accelerated nucleation. The classic risk factors are the '4 F's': Female, Forty, Fat (obese), Fertile (estrogen).",
      optionExplanations: ["Incorrect. Biliary infection (e.g., Clonorchis sinensis) is a risk factor for pigment stones in Asian populations, not cholesterol stones.","Correct. Cholesterol stones: supersaturation + hypomotility + nucleation. Risk factors: 4 F's (Female, Forty, Fat, Fertile), plus OCP use and rapid weight loss.","Incorrect. Chronic hemolysis (sickle cell, spherocytosis) leads to black pigment gallstones from excess unconjugated bilirubin, not cholesterol stones.","Incorrect. Calcium carbonate stones are very rare; calcium bilirubinate is a component of pigment stones.","Incorrect. Increased bile salt concentration would actually keep cholesterol in solution (prevent stone formation), not cause it."],
      highYieldPoint: "Cholesterol gallstones: 4 F's (Female, Forty, Fat, Fertile). Pigment stones: black (hemolysis, cirrhosis) vs. brown (biliary infection, Clonorchis)."
    },
    {
      vignette: "A 7-year-old boy with sickle cell disease presents with right upper quadrant pain. Ultrasound shows multiple small gallstones. His total bilirubin is mildly elevated with a predominance of indirect (unconjugated) bilirubin.",
      question: "Which of the following best describes the type of gallstones most likely present in this patient?",
      options: ["Cholesterol stones","Black pigment stones","Brown pigment stones","Calcium oxalate stones","Mixed stones"],
      correctIndex: 1,
      explanation: "Black pigment stones are composed of calcium bilirubinate and form in conditions of chronic hemolysis (sickle cell disease, hereditary spherocytosis, thalassemia) or cirrhosis. Chronic hemolysis increases unconjugated bilirubin production, which is conjugated by the liver and excreted in bile. The excess bilirubin in bile precipitates as calcium bilirubinate. Black pigment stones are typically small, multiple, and radiopaque.",
      optionExplanations: ["Incorrect. Cholesterol stones are associated with obesity, estrogen, and the 4 F's. They are radiolucent and not caused by hemolysis.","Correct. Black pigment stones: calcium bilirubinate, caused by hemolysis (sickle cell) or cirrhosis. Small, multiple, radiopaque.","Incorrect. Brown pigment stones form in the bile ducts (not gallbladder) and are associated with biliary infection and stasis, not hemolysis.","Incorrect. Calcium oxalate stones are renal stones, not gallstones.","Incorrect. Mixed stones contain both cholesterol and pigment but are not the characteristic stone type in sickle cell disease."],
      highYieldPoint: "Black pigment stones: hemolysis (sickle cell, spherocytosis), cirrhosis → ↑ unconjugated bilirubin → calcium bilirubinate. Brown pigment: biliary infection."
    },
    {
      vignette: "A 55-year-old man presents with sudden severe abdominal pain radiating to the back. He consumes 8–10 alcoholic drinks daily. CT shows acute pancreatic inflammation with a well-defined 6 cm encapsulated fluid collection adjacent to the pancreas that developed 5 weeks after his initial episode of pancreatitis.",
      question: "Which of the following best describes this fluid collection?",
      options: ["Pancreatic abscess","Acute peripancreatic fluid collection","Walled-off necrosis","Pancreatic pseudocyst","Pancreatic serous cystadenoma"],
      correctIndex: 3,
      explanation: "A pancreatic pseudocyst is an encapsulated collection of pancreatic fluid rich in amylase and lipase, surrounded by a fibrous wall (no epithelial lining — hence 'pseudo'). It typically develops ≥4 weeks after an episode of acute pancreatitis. Unlike true cysts, pseudocysts lack an epithelial lining. Most resolve spontaneously; symptomatic pseudocysts are drained endoscopically or surgically.",
      optionExplanations: ["Incorrect. Pancreatic abscess is infected necrosis with pus; it would present with fever, leukocytosis, and gas on imaging.","Incorrect. Acute peripancreatic fluid collections occur early (<4 weeks) and lack a defined wall. This is encapsulated at 5 weeks.","Incorrect. Walled-off necrosis is an encapsulated collection containing solid necrotic debris, not purely fluid. It follows necrotizing pancreatitis.","Correct. Pseudocyst: encapsulated, amylase-rich fluid collection ≥4 weeks post-pancreatitis, no epithelial lining. Most resolve; drain if symptomatic.","Incorrect. Serous cystadenomas are benign cystic neoplasms typically found in older women; they have an epithelial lining and are unrelated to pancreatitis."],
      highYieldPoint: "Pancreatic pseudocyst: encapsulated fluid collection ≥4 weeks post-pancreatitis, no epithelial lining, high amylase. Drain if >6 cm or symptomatic."
    },
    {
      vignette: "A 45-year-old woman with hypertriglyceridemia (triglycerides 1,800 mg/dL) presents with acute epigastric pain and elevated lipase. She has no history of alcohol use or gallstones.",
      question: "Which of the following mechanisms best explains how hypertriglyceridemia causes acute pancreatitis?",
      options: ["Direct toxic effect of cholesterol crystals on pancreatic acinar cells","Hydrolysis of excess triglycerides by pancreatic lipase generating toxic free fatty acids","Thrombosis of pancreatic microvessels by lipid emboli","Cholesterol supersaturation of pancreatic juice causing stone formation","Autoimmune activation triggered by lipoprotein particles"],
      correctIndex: 1,
      explanation: "Hypertriglyceridemia (typically >1,000 mg/dL) is the third most common cause of acute pancreatitis after gallstones and alcohol. Excess triglycerides in the pancreatic capillary bed are hydrolyzed by pancreatic lipase, releasing high concentrations of free fatty acids. These free fatty acids are directly toxic to acinar cells and capillary endothelium, causing local inflammation, ischemia, and pancreatitis.",
      optionExplanations: ["Incorrect. Cholesterol crystals are not the mechanism; triglycerides (not cholesterol) are the culprit in hypertriglyceridemia-induced pancreatitis.","Correct. Pancreatic lipase hydrolyzes excess TG → toxic FFAs → acinar cell injury and local inflammation → pancreatitis.","Incorrect. While hyperviscosity may contribute, the primary mechanism is FFA toxicity from TG hydrolysis, not lipid embolism.","Incorrect. Cholesterol supersaturation causes gallstones, not pancreatic duct stones. Hypertriglyceridemia acts through a different mechanism.","Incorrect. The mechanism is not autoimmune; it is direct chemical toxicity from FFAs generated by lipase activity."],
      highYieldPoint: "Hypertriglyceridemia-induced pancreatitis (TG >1,000): lipase hydrolyzes TG → toxic FFAs → acinar cell injury. #3 cause of pancreatitis after gallstones, alcohol."
    },
    {
      vignette: "A 62-year-old man undergoes evaluation for new-onset jaundice. ERCP reveals a 2 cm mass at the ampulla of Vater causing biliary and pancreatic duct obstruction. Biopsy confirms adenocarcinoma of the ampulla.",
      question: "Compared to pancreatic head adenocarcinoma, which of the following is true regarding ampullary carcinoma?",
      options: ["It has a worse 5-year survival rate","It typically presents later with larger tumors","It has a better prognosis and higher resectability rate","It is more commonly associated with KRAS mutations","It is not amenable to surgical resection"],
      correctIndex: 2,
      explanation: "Ampullary carcinomas have a significantly better prognosis than pancreatic head adenocarcinoma because they present earlier (early biliary obstruction causes jaundice when the tumor is still small and resectable). The 5-year survival rate after Whipple procedure for ampullary carcinoma is approximately 30-40%, compared to 5-10% for pancreatic ductal adenocarcinoma. Both are treated with pancreaticoduodenectomy (Whipple procedure).",
      optionExplanations: ["Incorrect. Ampullary carcinoma has a better 5-year survival (~30-40%) than pancreatic adenocarcinoma (~5-10%).","Incorrect. Ampullary carcinoma presents earlier because the ampullary location causes early biliary obstruction and jaundice.","Correct. Ampullary carcinoma has better prognosis due to earlier presentation (early jaundice) and higher surgical resectability rate.","Incorrect. KRAS mutations are more universal in pancreatic ductal adenocarcinoma (>90%) than in ampullary carcinoma.","Incorrect. Ampullary carcinoma is highly amenable to surgical resection (Whipple procedure), especially given its earlier presentation."],
      highYieldPoint: "Ampullary carcinoma: earlier presentation (jaundice), higher resectability, better prognosis (~30-40% 5-yr survival) vs. pancreatic head CA (~5-10%)."
    }
  ],
  "Inflammatory bowel disease": [
    {
      vignette: "A 22-year-old woman presents with bloody diarrhea (10-15 episodes per day), abdominal cramping, urgency, and tenesmus for the past 4 weeks. Colonoscopy shows continuous, circumferential mucosal inflammation extending from the rectum to the splenic flexure with loss of normal vascular pattern, erythema, and superficial ulcerations. The terminal ileum appears normal.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Ulcerative colitis","Crohn disease","Ischemic colitis","Infectious colitis due to C. difficile","Microscopic colitis"],
      correctIndex: 0,
      explanation: "This presentation is classic for ulcerative colitis (UC): bloody diarrhea with urgency/tenesmus, continuous mucosal inflammation always starting from the rectum and extending proximally, and limitation to the colon (no ileal involvement). UC affects only the mucosa and submucosa (superficial), unlike Crohn disease which is transmural.",
      optionExplanations: ["Correct. UC: bloody diarrhea, continuous inflammation from rectum proximally, mucosal/submucosal only, no ileal involvement.","Incorrect. Crohn disease is characterized by skip lesions, transmural inflammation, and can affect any part of the GI tract (terminal ileum most common). It typically does NOT start in the rectum.","Incorrect. Ischemic colitis affects watershed areas (splenic flexure, rectosigmoid junction) in elderly patients with vascular disease, not continuous rectal inflammation in a young woman.","Incorrect. C. difficile colitis follows antibiotic use and shows pseudomembranes on colonoscopy. Bloody diarrhea is less common.","Incorrect. Microscopic colitis (collagenous or lymphocytic) causes chronic watery (non-bloody) diarrhea with normal-appearing mucosa on colonoscopy."],
      highYieldPoint: "UC: continuous inflammation from rectum, bloody diarrhea, mucosal/submucosal only. Crohn: skip lesions, transmural, any GI location, granulomas."
    },
    {
      vignette: "A 28-year-old man presents with right lower quadrant abdominal pain, non-bloody diarrhea, weight loss, and perianal fistulas. Colonoscopy reveals discontinuous areas of deep, serpiginous ulceration ('cobblestone' mucosa) in the terminal ileum and ascending colon with skip areas of normal mucosa. Biopsy shows transmural inflammation with non-caseating granulomas.",
      question: "Which of the following complications is this patient at greatest risk of developing?",
      options: ["Fistula formation","Toxic megacolon","Pseudopolyps","Primary sclerosing cholangitis","Colorectal carcinoma within 5 years"],
      correctIndex: 0,
      explanation: "Crohn disease is characterized by transmural inflammation, which predisposes to fistula formation (enteroenteric, enterovesical, enterocutaneous, perianal). This patient already has perianal fistulas. Other transmural complications include strictures (from chronic inflammation and fibrosis) and abscesses. Fistulas are a hallmark complication of Crohn disease and are rare in UC.",
      optionExplanations: ["Correct. Transmural inflammation in Crohn disease → fistulas (enteroenteric, perianal, enterovesical, rectovaginal), strictures, and abscesses.","Incorrect. Toxic megacolon is more commonly a complication of UC (though it can occur in Crohn colitis). It involves acute colonic dilation with systemic toxicity.","Incorrect. Pseudopolyps (inflammatory polyps) are more characteristic of UC and represent regenerating mucosa in areas of prior ulceration.","Incorrect. PSC is associated with UC (~70% of PSC patients have UC), not typically Crohn disease.","Incorrect. While Crohn disease increases colorectal cancer risk, it is more gradual. UC has a higher and earlier risk, especially with pancolitis."],
      highYieldPoint: "Crohn: transmural → fistulas, strictures, abscesses. UC: mucosal → bloody diarrhea, toxic megacolon, colorectal cancer risk."
    },
    {
      vignette: "A 35-year-old woman with ulcerative colitis presents with acute severe bloody diarrhea, fever (39.5°C), tachycardia, and abdominal distension. Abdominal X-ray shows dilation of the transverse colon to 8 cm. She has had 12 bloody bowel movements in the past 24 hours.",
      question: "Which of the following is the most appropriate initial management for this patient?",
      options: ["IV corticosteroids, bowel rest, and broad-spectrum antibiotics","Emergent colonoscopy with biopsy","Oral 5-aminosalicylic acid","Emergent total colectomy","Anti-TNF therapy with infliximab"],
      correctIndex: 0,
      explanation: "This patient has toxic megacolon (colonic dilation >6 cm with systemic toxicity), a life-threatening complication of UC. Initial management includes aggressive medical therapy: IV corticosteroids, NPO with NG decompression, IV fluids, and broad-spectrum antibiotics (to prevent/treat perforation). If no improvement in 48-72 hours, emergent colectomy is required.",
      optionExplanations: ["Correct. Toxic megacolon: IV steroids + bowel rest + antibiotics + serial abdominal exams. Surgery if no improvement in 48-72 hours.","Incorrect. Colonoscopy is contraindicated in toxic megacolon due to risk of perforation.","Incorrect. Oral 5-ASA is used for mild-moderate UC maintenance, not acute toxic megacolon.","Incorrect. Emergent colectomy is indicated if medical therapy fails (48-72 hours) or if perforation occurs, but initial medical management is attempted first.","Incorrect. Anti-TNF therapy may be used as rescue therapy if IV steroids fail, but it is not the first-line acute management."],
      highYieldPoint: "Toxic megacolon: colon >6 cm + systemic toxicity. IV steroids + bowel rest + antibiotics. No colonoscopy! Surgery if no response in 48-72 hours."
    },
    {
      vignette: "A 30-year-old woman with Crohn disease has been on long-term corticosteroid therapy. She presents with a painful, red nodular lesion on her anterior shin. Biopsy shows septal panniculitis with inflammation of subcutaneous fat.",
      question: "Which of the following extraintestinal manifestations of inflammatory bowel disease does this patient most likely have?",
      options: ["Pyoderma gangrenosum","Aphthous stomatitis","Sweet syndrome","Erythema nodosum","Episcleritis"],
      correctIndex: 3,
      explanation: "Erythema nodosum is the most common skin manifestation of IBD, characterized by tender, erythematous nodules on the anterior shins. Histologically, it shows septal panniculitis (inflammation of the fibrous septa in subcutaneous fat). It typically correlates with disease activity and resolves when the underlying bowel disease is treated. It is more common in Crohn disease than UC.",
      optionExplanations: ["Incorrect. Pyoderma gangrenosum presents as painful ulcers with undermined, violaceous borders, not nodules. It does NOT correlate with disease activity.","Incorrect. Aphthous stomatitis (oral ulcers) is an extraintestinal manifestation of IBD but appears in the oral cavity, not on the shins.","Incorrect. Sweet syndrome (acute febrile neutrophilic dermatosis) presents with painful red plaques with neutrophilic infiltration, more commonly in hematologic malignancies.","Correct. Erythema nodosum: tender red nodules on shins, septal panniculitis, correlates with IBD disease activity. Most common cutaneous manifestation.","Incorrect. Episcleritis is an ocular manifestation of IBD causing eye redness and pain, not a skin lesion."],
      highYieldPoint: "IBD extraintestinal: Erythema nodosum (correlates with activity) vs. Pyoderma gangrenosum (does NOT correlate). Both more common in Crohn."
    },
    {
      vignette: "A 45-year-old man with a 20-year history of ulcerative colitis involving the entire colon undergoes surveillance colonoscopy. Biopsies from the ascending colon reveal low-grade dysplasia on flat mucosa confirmed by a second pathologist.",
      question: "Which of the following is the most appropriate next step in management?",
      options: ["Repeat colonoscopy in 5 years","Increase mesalamine dose","Initiate anti-TNF therapy","Endoscopic mucosal resection of the dysplastic area only","Proctocolectomy with ileal pouch-anal anastomosis"],
      correctIndex: 4,
      explanation: "Long-standing extensive UC (>8-10 years of pancolitis) significantly increases colorectal cancer risk. Flat (non-polypoid) dysplasia anywhere in the colon in the setting of UC is an indication for proctocolectomy, as multifocal dysplasia or synchronous cancer is common. Proctocolectomy with ileal pouch-anal anastomosis (IPAA) is the procedure of choice, which is also curative for UC.",
      optionExplanations: ["Incorrect. Dysplasia in UC is a marker for concurrent or imminent carcinoma; a 5-year delay is inappropriate.","Incorrect. Mesalamine may have a modest chemopreventive effect but does not adequately address confirmed dysplasia.","Incorrect. Anti-TNF therapy treats inflammation but does not address dysplasia or cancer risk.","Incorrect. Endoscopic resection may be appropriate for raised dysplastic lesions (adenoma-like) in UC, but flat dysplasia warrants colectomy due to high risk of multifocal or synchronous malignancy.","Correct. Flat dysplasia in long-standing UC → proctocolectomy with IPAA (curative for UC and eliminates cancer risk)."],
      highYieldPoint: "UC colorectal cancer risk: increases after 8-10 years of pancolitis. Flat dysplasia → proctocolectomy. Surveillance colonoscopy every 1-2 years."
    },
    {
      vignette: "A 26-year-old man with newly diagnosed Crohn disease affecting the terminal ileum is started on mesalamine. Three months later, he continues to have diarrhea, abdominal pain, and elevated CRP. He has lost 10 pounds. Colonoscopy shows persistent deep ulceration in the terminal ileum.",
      question: "Which of the following is the most appropriate next step in management?",
      options: ["Add loperamide for symptomatic relief","Initiate total parenteral nutrition","Continue mesalamine at higher dose","Start oral budesonide for induction of remission","Start methotrexate monotherapy"],
      correctIndex: 3,
      explanation: "For mild-to-moderate ileal Crohn disease unresponsive to 5-ASA, oral budesonide (a locally active corticosteroid with high first-pass metabolism and fewer systemic side effects than prednisone) is appropriate for induction of remission. For moderate-to-severe disease, systemic corticosteroids or biologic agents (anti-TNF) may be needed. Budesonide is specifically effective for ileal and right-sided colonic Crohn disease.",
      optionExplanations: ["Incorrect. Loperamide provides symptomatic relief only and does not address the underlying active inflammation.","Incorrect. TPN is reserved for severely malnourished patients or perioperative settings; it is not a treatment for active Crohn disease.","Incorrect. Mesalamine has already failed; increasing the dose is unlikely to achieve remission in active ileal Crohn disease.","Correct. Oral budesonide is effective for induction in mild-to-moderate ileal Crohn disease that fails 5-ASA. Targeted release with fewer systemic steroid side effects.","Incorrect. Methotrexate is a steroid-sparing maintenance agent, not typically first-line for induction of remission."],
      highYieldPoint: "Crohn induction: budesonide (ileal/right colon), systemic steroids (moderate-severe), anti-TNF (steroid-refractory/fistulizing). 5-ASA mainly effective in UC."
    },
    {
      vignette: "A 33-year-old woman with Crohn disease is being treated with infliximab. Prior to starting therapy, she had a negative tuberculin skin test and negative hepatitis B serology. She asks about the mechanism of action of her medication.",
      question: "Which of the following best describes the mechanism of action of infliximab?",
      options: ["Inhibition of interleukin-12 and interleukin-23","Inhibition of Janus kinase (JAK) signaling","Blockade of alpha-4 integrin preventing leukocyte trafficking","Chimeric monoclonal antibody against tumor necrosis factor-alpha","Blockade of interleukin-6 receptor"],
      correctIndex: 3,
      explanation: "Infliximab is a chimeric (mouse/human) monoclonal antibody that binds and neutralizes TNF-alpha, a key pro-inflammatory cytokine in Crohn disease pathogenesis. It induces and maintains remission in moderate-to-severe Crohn disease and is particularly effective for fistulizing disease. Pre-treatment screening for TB and hepatitis B is mandatory due to immunosuppression risk.",
      optionExplanations: ["Incorrect. IL-12/23 inhibition is the mechanism of ustekinumab, used in both Crohn disease and psoriasis.","Incorrect. JAK inhibition is the mechanism of tofacitinib, used in UC and rheumatoid arthritis.","Incorrect. Alpha-4 integrin blockade is the mechanism of natalizumab. Vedolizumab blocks α4β7 integrin (gut-specific).","Correct. Infliximab is a chimeric anti-TNF-alpha monoclonal antibody. Other anti-TNFs: adalimumab (fully human), certolizumab (PEGylated Fab fragment).","Incorrect. IL-6 receptor blockade is the mechanism of tocilizumab, used in rheumatoid arthritis and giant cell arteritis."],
      highYieldPoint: "Anti-TNF agents: infliximab (chimeric), adalimumab (human), certolizumab (PEGylated). Screen for TB and HBV before starting. Risk of reactivation."
    },
    {
      vignette: "A 40-year-old man with long-standing Crohn disease develops colicky abdominal pain, vomiting, abdominal distension, and inability to pass gas. Abdominal X-ray shows dilated loops of small bowel with multiple air-fluid levels. A CT scan shows a stricture in the terminal ileum with proximal bowel dilation.",
      question: "Which of the following is the most likely cause of this patient's symptoms?",
      options: ["Adhesive small bowel obstruction from prior surgery","Gallstone ileus from a cholecystoduodenal fistula","Intussusception caused by a lead point lesion","Volvulus of the small bowel around a Meckel band","Fibrostenotic stricture from chronic transmural inflammation"],
      correctIndex: 4,
      explanation: "Fibrostenotic strictures are a common complication of Crohn disease, resulting from chronic transmural inflammation leading to fibrosis and narrowing of the intestinal lumen. The terminal ileum is the most common site. Strictures cause obstructive symptoms (colicky pain, vomiting, distension). Management may include strictureplasty or resection for symptomatic strictures unresponsive to medical therapy.",
      optionExplanations: ["Incorrect. While adhesions are the most common cause of SBO overall, this patient has known Crohn disease with a terminal ileal stricture, making fibrostenotic stricture the most likely etiology.","Incorrect. Gallstone ileus causes SBO from a large gallstone entering through a cholecystoduodenal fistula, typically obstructing at the ileocecal valve. Not related to Crohn strictures.","Incorrect. Intussusception is uncommon in adults and typically occurs due to a mass as a lead point (e.g., polyp, tumor), not a stricture.","Incorrect. Meckel band complications occur from a persistent vitelline duct remnant, not from Crohn disease stricturing.","Correct. Crohn transmural inflammation → fibrosis → stricture → small bowel obstruction. Terminal ileum is the most common location."],
      highYieldPoint: "Crohn strictures: chronic transmural inflammation → fibrosis → obstruction. Treatment: strictureplasty (preserves bowel length) or resection."
    },
    {
      vignette: "A 19-year-old man with recently diagnosed Crohn disease presents with a painful, swollen right knee and bilateral uveitis. His ESR and CRP are elevated. Knee aspirate shows a sterile inflammatory effusion. His bowel symptoms are also flaring with increased diarrhea.",
      question: "Which of the following best characterizes this patient's joint manifestation?",
      options: ["Septic arthritis from bacterial translocation","Type 1 (pauciarticular) peripheral arthropathy that correlates with disease activity","Ankylosing spondylitis","Rheumatoid arthritis","Reactive arthritis from enteric infection"],
      correctIndex: 1,
      explanation: "Type 1 (pauciarticular) peripheral arthropathy in IBD is an acute, asymmetric, self-limited arthritis affecting fewer than 5 large joints (commonly knees). It correlates with intestinal disease activity and improves when the bowel disease is treated. Type 2 (polyarticular) affects ≥5 small joints and does NOT correlate with disease activity. Uveitis is another extraintestinal manifestation.",
      optionExplanations: ["Incorrect. The sterile effusion rules out septic arthritis. IBD-associated arthropathy is sterile and inflammatory.","Correct. Type 1 peripheral arthropathy: <5 large joints, asymmetric, correlates with IBD flares. Resolves with treatment of bowel disease.","Incorrect. Ankylosing spondylitis is an axial spondyloarthropathy (sacroiliitis, bamboo spine) that does NOT correlate with IBD activity.","Incorrect. Rheumatoid arthritis is a symmetric small joint polyarthritis with RF/anti-CCP positivity, not related to IBD flares.","Incorrect. Reactive arthritis follows urethritis or enteric infection (Shigella, Salmonella), not IBD itself."],
      highYieldPoint: "IBD arthropathy: Type 1 (pauciarticular, large joints, correlates with activity) vs. Type 2 (polyarticular, small joints, does NOT correlate). Ankylosing spondylitis: independent of activity."
    },
    {
      vignette: "A 28-year-old woman with ulcerative colitis undergoes total proctocolectomy with ileal pouch-anal anastomosis (IPAA). Two years postoperatively, she develops watery diarrhea, urgency, and lower abdominal cramping. Pouchoscopy shows diffuse inflammation of the ileal pouch mucosa.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Recurrence of ulcerative colitis in the pouch","Crohn disease of the pouch","Irritable pouch syndrome","Cytomegalovirus colitis","Pouchitis"],
      correctIndex: 4,
      explanation: "Pouchitis is the most common complication after IPAA for UC, occurring in up to 50% of patients. It presents with increased stool frequency, urgency, and pelvic pain. Diagnosis requires the triad of symptoms, endoscopic inflammation, and histologic acute inflammation of the pouch. First-line treatment is antibiotics (metronidazole or ciprofloxacin). Recurrent pouchitis may suggest an underlying Crohn disease diagnosis.",
      optionExplanations: ["Incorrect. UC cannot technically recur after proctocolectomy since all colonic mucosa has been removed. The ileal pouch undergoes colonic metaplasia but this is classified as pouchitis.","Incorrect. While Crohn disease should be considered if pouchitis is refractory or if fistulas develop, de novo pouchitis is the most common diagnosis.","Incorrect. Irritable pouch syndrome causes symptoms without endoscopic or histologic inflammation; this patient has documented mucosal inflammation.","Incorrect. CMV colitis occurs in immunocompromised patients and shows characteristic owl's eye intranuclear inclusions on biopsy.","Correct. Pouchitis: most common complication after IPAA for UC (~50%). Treat with metronidazole or ciprofloxacin."],
      highYieldPoint: "Pouchitis: most common complication of IPAA for UC. Symptoms + endoscopic + histologic inflammation. First-line: antibiotics (metronidazole/ciprofloxacin)."
    },
    {
      vignette: "A 25-year-old woman with Crohn disease presents with perianal pain and drainage. Examination under anesthesia reveals a complex perianal fistula with an external opening lateral to the anus and an internal opening in the anal canal.",
      question: "Which of the following medications has the strongest evidence for inducing closure of perianal fistulas in Crohn disease?",
      options: ["Oral metronidazole alone","Oral mesalamine","Infliximab (anti-TNF therapy)","Oral budesonide","Azathioprine monotherapy"],
      correctIndex: 2,
      explanation: "Infliximab has the strongest evidence for closure of perianal fistulas in Crohn disease. The landmark ACCENT II trial demonstrated that infliximab significantly reduces draining fistulas and maintains fistula closure. Management of complex perianal Crohn disease typically requires a combination of surgical drainage (seton placement) and anti-TNF therapy. Adalimumab also has evidence for fistulizing Crohn disease.",
      optionExplanations: ["Incorrect. Metronidazole can reduce fistula drainage but rarely achieves complete closure; recurrence is common after discontinuation.","Incorrect. Mesalamine is effective for mild-moderate mucosal UC but has no role in fistulizing Crohn disease.","Correct. Infliximab is the most effective medical therapy for perianal fistulas in Crohn disease (ACCENT II trial).","Incorrect. Budesonide is effective for induction of ileal Crohn disease but does not treat fistulas.","Incorrect. Azathioprine is a steroid-sparing maintenance agent; it has modest fistula-healing potential but is inferior to anti-TNF therapy."],
      highYieldPoint: "Fistulizing Crohn disease: anti-TNF (infliximab) is first-line medical therapy. Combine with seton placement for complex perianal fistulas."
    },
    {
      vignette: "A pathologist examines two colonic biopsy specimens. Specimen A shows crypt abscesses, mucosal and submucosal inflammation, and pseudopolyps. Specimen B shows transmural inflammation, non-caseating granulomas, and deep fissuring ulcers extending to the serosa.",
      question: "Which of the following statements correctly distinguishes these two specimens?",
      options: ["Specimen A is Crohn disease and Specimen B is ulcerative colitis","Both specimens are consistent with ulcerative colitis","Specimen A is ulcerative colitis and Specimen B is Crohn disease","Both specimens are consistent with Crohn disease","Specimen A is ischemic colitis and Specimen B is diverticulitis"],
      correctIndex: 2,
      explanation: "Specimen A (crypt abscesses, mucosal/submucosal inflammation, pseudopolyps) is consistent with UC, which is limited to the mucosa and submucosa. Specimen B (transmural inflammation, non-caseating granulomas, deep fissuring ulcers) is consistent with Crohn disease. Granulomas are found in ~30% of Crohn biopsies and are not seen in UC.",
      optionExplanations: ["Incorrect. This reverses the diagnoses. Crypt abscesses and mucosal inflammation are UC; granulomas and transmural disease are Crohn.","Incorrect. Transmural inflammation and non-caseating granulomas are not features of UC.","Correct. Specimen A = UC (mucosal, crypt abscesses, pseudopolyps). Specimen B = Crohn (transmural, granulomas, fissuring ulcers).","Incorrect. Pseudopolyps and mucosal-limited inflammation in Specimen A are characteristic of UC, not Crohn.","Incorrect. Neither specimen is consistent with ischemic colitis (watershed area necrosis) or diverticulitis (pericolic inflammation around diverticula)."],
      highYieldPoint: "UC histology: mucosal/submucosal, crypt abscesses, pseudopolyps. Crohn histology: transmural, non-caseating granulomas (~30%), creeping fat, fissuring ulcers."
    },
    {
      vignette: "A 32-year-old man with Crohn disease involving the terminal ileum presents with macrocytic anemia. His serum vitamin B12 level is low. Folate level is normal. Peripheral blood smear shows hypersegmented neutrophils.",
      question: "Which of the following best explains the vitamin B12 deficiency in this patient?",
      options: ["Inadequate dietary intake of vitamin B12","Autoimmune destruction of parietal cells reducing intrinsic factor","Impaired B12-intrinsic factor complex absorption in the diseased terminal ileum","Bacterial overgrowth in the jejunum consuming B12","Increased urinary B12 excretion from renal tubular damage"],
      correctIndex: 2,
      explanation: "Vitamin B12 (cobalamin) bound to intrinsic factor is specifically absorbed in the terminal ileum via the cubam receptor (cubilin-amnionless complex). Crohn disease commonly affects the terminal ileum, damaging the absorptive epithelium and preventing B12-IF complex uptake. This leads to megaloblastic anemia with hypersegmented neutrophils. Folate, in contrast, is absorbed in the proximal jejunum.",
      optionExplanations: ["Incorrect. B12 is found in animal products; dietary deficiency is seen in strict vegans, not explained by Crohn disease alone.","Incorrect. Autoimmune parietal cell destruction causes pernicious anemia (Type A chronic gastritis), not Crohn disease.","Correct. Crohn terminal ileitis → impaired B12-IF absorption in ileum → B12 deficiency → megaloblastic anemia.","Incorrect. SIBO can consume B12, but the clinical scenario points to terminal ileal disease as the primary mechanism.","Incorrect. B12 is not significantly excreted renally; renal tubular damage does not cause B12 deficiency."],
      highYieldPoint: "B12 absorbed in terminal ileum (via IF-cubam receptor). Crohn ileal disease → B12 deficiency. Folate absorbed in jejunum. Both → megaloblastic anemia."
    },
    {
      vignette: "A 50-year-old woman with a 25-year history of pancolonic ulcerative colitis is diagnosed with colorectal adenocarcinoma. Her tumor demonstrates microsatellite stability and a TP53 mutation. She asks about the molecular pathway by which her cancer developed.",
      question: "Which of the following molecular pathways is most likely responsible for colorectal carcinogenesis in the setting of long-standing ulcerative colitis?",
      options: ["Adenoma-carcinoma sequence (APC → KRAS → TP53)","Inflammation-dysplasia-carcinoma sequence with early TP53 mutation","Microsatellite instability pathway from defective mismatch repair","CpG island methylator phenotype (CIMP) pathway","Chromosomal instability from BRCA1 mutation"],
      correctIndex: 1,
      explanation: "Colitis-associated colorectal cancer follows a distinct molecular pathway from sporadic colorectal cancer. In UC-associated carcinogenesis, chronic inflammation leads to early TP53 mutations (not APC, which occurs early in sporadic CRC), followed by dysplasia and carcinoma. The sequence is inflammation → indefinite dysplasia → low-grade dysplasia → high-grade dysplasia → carcinoma, with TP53 mutations being an early driver.",
      optionExplanations: ["Incorrect. The classic adenoma-carcinoma sequence (APC → KRAS → TP53) applies to sporadic colorectal cancer, not colitis-associated cancer.","Correct. UC-associated CRC: chronic inflammation → early TP53 mutation → dysplasia → carcinoma. Different from the sporadic APC-driven pathway.","Incorrect. MSI from mismatch repair defects (Lynch syndrome) is a separate pathway for hereditary nonpolyposis CRC, not typically UC-associated.","Incorrect. CIMP pathway involves epigenetic silencing and is associated with sessile serrated polyps, not UC-associated cancer.","Incorrect. BRCA1 mutations are associated with breast and ovarian cancer, not colorectal carcinogenesis."],
      highYieldPoint: "UC-associated CRC: inflammation → TP53 mutation (early) → dysplasia → carcinoma. Sporadic CRC: APC (early) → KRAS → TP53 (late)."
    },
    {
      vignette: "A 27-year-old woman with Crohn disease presents with a painful red skin lesion on her right leg. Physical examination reveals a deep ulcer with a violaceous, undermined border. The surrounding skin is edematous and erythematous. The ulcer does not respond to antibiotics.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Erythema nodosum","Pyoderma gangrenosum","Cutaneous Crohn disease (metastatic)","Venous stasis ulcer","Necrotizing fasciitis"],
      correctIndex: 1,
      explanation: "Pyoderma gangrenosum (PG) is a neutrophilic dermatosis presenting as painful ulcers with violaceous, undermined (overhanging) borders. It is associated with IBD (both UC and Crohn), rheumatoid arthritis, and hematologic malignancies. Unlike erythema nodosum, PG does NOT necessarily correlate with IBD disease activity. Importantly, PG exhibits pathergy (worsening with debridement). Treatment includes immunosuppression.",
      optionExplanations: ["Incorrect. Erythema nodosum presents as tender red nodules on the shins (septal panniculitis), not deep ulcers with undermined borders.","Correct. Pyoderma gangrenosum: deep ulcer with violaceous undermined borders, associated with IBD, does NOT correlate with disease activity, exhibits pathergy.","Incorrect. Metastatic Crohn disease refers to granulomatous skin lesions distant from the GI tract; it does not present as ulcers with undermined borders.","Incorrect. Venous stasis ulcers occur on the medial malleolus in patients with chronic venous insufficiency, not in young patients with IBD.","Incorrect. Necrotizing fasciitis is a rapidly progressing soft tissue infection with crepitus and systemic sepsis, requiring surgical debridement."],
      highYieldPoint: "Pyoderma gangrenosum: painful ulcer with undermined violaceous border. Associated with IBD, RA, hematologic malignancy. Exhibits pathergy. Does NOT correlate with IBD activity."
    }
  ],
  "GI neoplasms": [
    {
      vignette: "A 45-year-old man undergoes colonoscopy for screening because his father was diagnosed with colon cancer at age 42. Genetic testing reveals a germline mutation in the APC gene on chromosome 5q21. Colonoscopy shows over 500 adenomatous polyps carpeting the colon.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Familial adenomatous polyposis (FAP)","Lynch syndrome","Peutz-Jeghers syndrome","Juvenile polyposis syndrome","Cowden syndrome"],
      correctIndex: 0,
      explanation: "Familial adenomatous polyposis (FAP) is an autosomal dominant disorder caused by germline mutations in the APC tumor suppressor gene on chromosome 5q21. Patients develop hundreds to thousands of adenomatous polyps in the colon, with near 100% progression to colorectal cancer by age 40 if untreated. Prophylactic colectomy is recommended. APC normally promotes beta-catenin degradation in the Wnt signaling pathway.",
      optionExplanations: ["Correct. FAP: APC mutation (5q21), autosomal dominant, >100 polyps, 100% CRC risk by age 40. Prophylactic colectomy.","Incorrect. Lynch syndrome (HNPCC) involves mismatch repair gene mutations causing microsatellite instability; patients develop few polyps but at high cancer risk.","Incorrect. Peutz-Jeghers syndrome has STK11/LKB1 mutations, hamartomatous polyps, and mucocutaneous pigmentation.","Incorrect. Juvenile polyposis has SMAD4/BMPR1A mutations causing hamartomatous polyps, not adenomatous.","Incorrect. Cowden syndrome has PTEN mutations causing hamartomatous polyps and increased risk of breast, thyroid, and endometrial cancers."],
      highYieldPoint: "FAP: APC mutation (5q21) → 100s-1000s of adenomatous polyps → 100% CRC risk by age 40. APC regulates beta-catenin/Wnt pathway. Prophylactic colectomy."
    },
    {
      vignette: "A 38-year-old woman is diagnosed with colorectal cancer. She has a family history of colorectal cancer in her mother (age 45), maternal aunt (endometrial cancer, age 50), and maternal grandfather (colorectal cancer, age 48). Tumor testing reveals microsatellite instability-high (MSI-H) and loss of MLH1/PMS2 expression on immunohistochemistry.",
      question: "Which of the following is the most likely hereditary cancer syndrome in this patient?",
      options: ["Lynch syndrome (hereditary nonpolyposis colorectal cancer)","Familial adenomatous polyposis","Li-Fraumeni syndrome","BRCA2-associated cancer syndrome","Muir-Torre syndrome"],
      correctIndex: 0,
      explanation: "Lynch syndrome (HNPCC) is the most common hereditary colorectal cancer syndrome, caused by autosomal dominant germline mutations in DNA mismatch repair (MMR) genes: MLH1, MSH2, MSH6, or PMS2. It causes microsatellite instability (MSI-H). Lynch syndrome increases risk of CRC, endometrial, ovarian, gastric, and urothelial cancers. Amsterdam criteria and Bethesda guidelines help identify patients. MLH1/PMS2 loss suggests MLH1 mutation.",
      optionExplanations: ["Correct. Lynch syndrome: MMR gene mutation → MSI-H → CRC (right-sided), endometrial, ovarian cancers. This patient meets Amsterdam criteria.","Incorrect. FAP causes hundreds of polyps from APC mutations, not MSI-H from MMR gene defects.","Incorrect. Li-Fraumeni involves TP53 germline mutations causing sarcomas, breast cancer, brain tumors, and adrenocortical carcinoma, not MSI-H CRC.","Incorrect. BRCA2 mutations increase risk of breast, ovarian, pancreatic, and prostate cancer, not typically MSI-H colorectal cancer.","Incorrect. Muir-Torre syndrome is actually a variant of Lynch syndrome with sebaceous skin tumors and internal malignancies; this patient does not have skin tumors described."],
      highYieldPoint: "Lynch syndrome: MMR gene mutations (MLH1, MSH2, MSH6, PMS2) → MSI-H. Right-sided CRC, endometrial cancer. Amsterdam criteria: 3-2-1 rule."
    },
    {
      vignette: "A 60-year-old man undergoes colonoscopy for iron-deficiency anemia. A 4 cm fungating mass is found in the cecum. Biopsy shows adenocarcinoma. Staging CT reveals no distant metastases. He undergoes right hemicolectomy.",
      question: "Which of the following molecular events is most likely the initiating step in the adenoma-carcinoma sequence that led to this patient's cancer?",
      options: ["APC tumor suppressor inactivation","TP53 tumor suppressor loss","KRAS oncogene activation","DCC/SMAD4 loss","BRAF V600E mutation"],
      correctIndex: 0,
      explanation: "The classic adenoma-carcinoma sequence for sporadic colorectal cancer begins with biallelic loss of the APC tumor suppressor gene (both alleles by the 'two-hit' hypothesis). APC normally promotes degradation of beta-catenin in the Wnt signaling pathway. APC loss → beta-catenin accumulation → constitutive Wnt signaling → increased cell proliferation → small adenoma. Subsequent mutations (KRAS → SMAD4/DCC → TP53) drive progression to carcinoma.",
      optionExplanations: ["Correct. APC loss is the initiating ('gatekeeper') event in the adenoma-carcinoma sequence → loss of beta-catenin degradation → Wnt pathway activation.","Incorrect. TP53 loss is a late event, driving the transition from adenoma to carcinoma.","Incorrect. KRAS activation is the second step in the adenoma-carcinoma sequence, driving progression from small to large adenoma.","Incorrect. DCC/SMAD4 loss occurs in the intermediate step, contributing to adenoma growth.","Incorrect. BRAF V600E is associated with the serrated neoplasia pathway (sessile serrated polyps → CRC), not the classic adenoma-carcinoma sequence."],
      highYieldPoint: "Adenoma-carcinoma sequence: APC loss (initiating) → KRAS activation → SMAD4/DCC loss → TP53 loss. APC = 'gatekeeper' of the Wnt/beta-catenin pathway."
    },
    {
      vignette: "A 55-year-old woman presents with abdominal pain and a 30-pound weight loss. CT scan shows a mass in the tail of the pancreas. She has recently been diagnosed with migratory superficial thrombophlebitis (Trousseau syndrome) affecting her upper and lower extremities.",
      question: "Which of the following best explains the hypercoagulable state in this patient?",
      options: ["Protein C deficiency from liver metastases","Antiphospholipid antibody syndrome triggered by the tumor","Disseminated intravascular coagulation from tumor lysis","Tumor production of mucin and tissue factor activating the coagulation cascade","Factor V Leiden mutation unmasked by malignancy"],
      correctIndex: 3,
      explanation: "Trousseau syndrome (migratory superficial thrombophlebitis) is a paraneoplastic phenomenon classically associated with mucin-secreting adenocarcinomas, particularly pancreatic cancer. Tumor cells release mucin (which activates factor X and platelets) and tissue factor (which activates the extrinsic coagulation pathway), causing a chronic hypercoagulable state with recurrent migratory venous thrombosis.",
      optionExplanations: ["Incorrect. Protein C deficiency from liver dysfunction could cause thrombosis but would not present as migratory thrombophlebitis specific to malignancy.","Incorrect. Antiphospholipid syndrome is an autoimmune condition not typically triggered by solid tumors.","Incorrect. DIC from tumor lysis would present with both bleeding and thrombosis with consumptive coagulopathy, not isolated migratory thrombophlebitis.","Correct. Mucin-secreting tumors (especially pancreatic) release mucin and tissue factor → activate coagulation → Trousseau syndrome.","Incorrect. Factor V Leiden is a hereditary condition; migratory thrombophlebitis specifically in the setting of a pancreatic mass points to paraneoplastic Trousseau syndrome."],
      highYieldPoint: "Trousseau syndrome: migratory thrombophlebitis from mucin-secreting tumors (pancreatic CA). Mucin + tissue factor → hypercoagulability."
    },
    {
      vignette: "A 16-year-old boy presents with perioral hyperpigmented macules and recurrent abdominal pain. His mother had similar pigmentation. Colonoscopy reveals multiple hamartomatous polyps throughout the small intestine and colon. Genetic testing reveals a mutation in the STK11/LKB1 gene.",
      question: "Which of the following is this patient at increased risk of developing?",
      options: ["Colorectal cancer only","No increased cancer risk","Renal cell carcinoma","Medullary thyroid carcinoma","Breast, ovarian, pancreatic, and GI cancers"],
      correctIndex: 4,
      explanation: "Peutz-Jeghers syndrome (PJS) is an autosomal dominant disorder caused by STK11/LKB1 gene mutations. It is characterized by mucocutaneous melanotic macules (lips, buccal mucosa, hands) and hamartomatous polyps (pathognomonic arborizing smooth muscle pattern). PJS confers a markedly increased lifetime risk of multiple cancers: breast (45-50%), CRC (39%), pancreatic (11-36%), gastric, ovarian (including sex cord tumors with annular tubules), and others.",
      optionExplanations: ["Incorrect. The cancer risk in PJS extends well beyond colorectal cancer to include breast, ovarian, pancreatic, and gastric cancers.","Incorrect. PJS significantly increases lifetime cancer risk across multiple organ systems.","Incorrect. Renal cell carcinoma is associated with VHL syndrome, not PJS.","Incorrect. Medullary thyroid carcinoma is associated with MEN2 (RET mutation), not Peutz-Jeghers syndrome.","Correct. PJS (STK11/LKB1) → increased risk of breast, ovarian, pancreatic, GI, and other cancers. Lifetime cancer risk approaches 85%."],
      highYieldPoint: "Peutz-Jeghers: STK11/LKB1 mutation, melanotic macules, hamartomatous polyps. High cancer risk: breast, GI, ovarian, pancreatic. Lifetime risk ~85%."
    },
    {
      vignette: "A 70-year-old man presents with fatigue and microcytic iron-deficiency anemia. Colonoscopy reveals a large exophytic mass in the ascending colon. He has no family history of colorectal cancer.",
      question: "Which of the following is the most common location for colorectal cancer to present with occult bleeding and iron-deficiency anemia rather than obstruction?",
      options: ["Rectum","Sigmoid colon","Descending colon","Right (ascending) colon","Transverse colon"],
      correctIndex: 3,
      explanation: "Right-sided (ascending) colon cancers tend to be large, exophytic (polypoid) masses that cause occult blood loss and iron-deficiency anemia because the cecum and ascending colon have a larger diameter, and stool is still liquid, so obstruction is less common. Left-sided colon cancers tend to be annular, constricting ('napkin ring') lesions causing obstructive symptoms (changes in bowel habits, pencil-thin stools) because the lumen is narrower and stool is more formed.",
      optionExplanations: ["Incorrect. Rectal cancers present with hematochezia (bright red blood), tenesmus, and changes in stool caliber.","Incorrect. Sigmoid colon cancers present with obstructive symptoms (constipation, changes in bowel habits) due to the narrow lumen.","Incorrect. Descending colon cancers, like sigmoid, tend to be annular lesions causing obstruction.","Correct. Right-sided CRC: exophytic, occult bleeding → iron-deficiency anemia. Left-sided CRC: annular/constricting → obstruction, altered bowel habits.","Incorrect. Transverse colon cancers are less common and can present with either pattern, but right-sided is the classic location for iron-deficiency anemia."],
      highYieldPoint: "Right-sided CRC: exophytic, occult bleeding, iron-deficiency anemia. Left-sided CRC: annular ('napkin ring'), obstructive symptoms, pencil-thin stools."
    },
    {
      vignette: "A 65-year-old man presents with obstructive jaundice and is found to have an unresectable pancreatic adenocarcinoma. His oncologist recommends palliative chemotherapy. Molecular profiling of the tumor shows a KRAS G12D mutation.",
      question: "Which of the following signaling pathways is directly activated by the KRAS mutation in this tumor?",
      options: ["JAK-STAT pathway","PI3K/AKT/mTOR and RAS/RAF/MEK/ERK (MAPK) pathways","Wnt/beta-catenin pathway","Notch signaling pathway","Hedgehog signaling pathway"],
      correctIndex: 1,
      explanation: "KRAS is a GTPase that, when mutated, becomes constitutively active (locked in GTP-bound state) and continuously stimulates downstream signaling through the RAS/RAF/MEK/ERK (MAPK) pathway and the PI3K/AKT/mTOR pathway. These promote cell proliferation, survival, and metabolic reprogramming. KRAS mutations (especially G12D) are the most common oncogenic drivers in pancreatic ductal adenocarcinoma.",
      optionExplanations: ["Incorrect. JAK-STAT signaling is activated by cytokine receptors (e.g., EPO, growth hormone), not directly by KRAS.","Correct. Mutant KRAS constitutively activates RAS/RAF/MEK/ERK (MAPK) and PI3K/AKT/mTOR pathways → uncontrolled proliferation and survival.","Incorrect. The Wnt/beta-catenin pathway is regulated by APC, not KRAS. APC loss drives colorectal cancer initiation.","Incorrect. Notch signaling is involved in cell fate determination and some cancers, but is not directly activated by KRAS.","Incorrect. Hedgehog signaling is important in development and some cancers (basal cell carcinoma) but is not directly downstream of KRAS."],
      highYieldPoint: "KRAS mutation → constitutive GTPase activity → activates MAPK (RAF/MEK/ERK) and PI3K/AKT/mTOR pathways. Most common in pancreatic cancer (>90%)."
    },
    {
      vignette: "A 50-year-old man with long-standing Barrett esophagus undergoes surveillance endoscopy. Biopsies show high-grade dysplasia with focal areas suspicious for invasive adenocarcinoma. He is referred for esophagectomy.",
      question: "Which of the following is the correct sequence of histologic progression from normal esophagus to esophageal adenocarcinoma?",
      options: ["Normal squamous → hyperplasia → low-grade dysplasia → high-grade dysplasia → adenocarcinoma","Normal squamous → intestinal metaplasia → low-grade dysplasia → high-grade dysplasia → adenocarcinoma","Normal squamous → squamous dysplasia → carcinoma in situ → invasive squamous cell carcinoma","Normal squamous → gastric metaplasia → intestinal metaplasia → squamous cell carcinoma","Normal squamous → Barrett metaplasia → gastric heterotopia → adenocarcinoma"],
      correctIndex: 1,
      explanation: "Esophageal adenocarcinoma develops through the metaplasia-dysplasia-carcinoma sequence: chronic GERD → Barrett esophagus (intestinal metaplasia with goblet cells) → low-grade dysplasia → high-grade dysplasia → invasive adenocarcinoma. The key step is the metaplastic change from squamous to intestinal-type columnar epithelium driven by chronic acid exposure.",
      optionExplanations: ["Incorrect. Hyperplasia without metaplasia is not the established pathway; intestinal metaplasia (Barrett) is the critical intermediate step.","Correct. GERD → Barrett (intestinal metaplasia with goblet cells) → LGD → HGD → adenocarcinoma.","Incorrect. This sequence describes esophageal squamous cell carcinoma development, not adenocarcinoma.","Incorrect. Gastric metaplasia without goblet cells (cardiac-type metaplasia) does not carry the same malignant risk as intestinal metaplasia.","Incorrect. Gastric heterotopia is congenital ectopic gastric mucosa (inlet patch) and is not part of the Barrett-adenocarcinoma sequence."],
      highYieldPoint: "Barrett → adenocarcinoma: normal squamous → intestinal metaplasia (goblet cells) → LGD → HGD → adenocarcinoma. Surveillance: every 3-5 years if no dysplasia."
    },
    {
      vignette: "A 58-year-old woman presents with early satiety and is found to have a 6 cm submucosal gastric mass. CT shows a well-defined, heterogeneous mass arising from the gastric wall. Biopsy shows spindle cells positive for CD117 and DOG1. Molecular testing reveals a KIT exon 11 mutation.",
      question: "Which of the following is the most appropriate targeted therapy for this tumor?",
      options: ["Trastuzumab","Bevacizumab","Cetuximab","Rituximab","Imatinib"],
      correctIndex: 4,
      explanation: "Imatinib is a tyrosine kinase inhibitor that targets the KIT (CD117) receptor tyrosine kinase, which is constitutively activated by mutations in GISTs. KIT exon 11 mutations are the most common (~70%) and most responsive to imatinib. Imatinib is used as adjuvant therapy for high-risk GISTs after resection and as first-line therapy for unresectable or metastatic GISTs. It also inhibits BCR-ABL (CML) and PDGFRA.",
      optionExplanations: ["Incorrect. Trastuzumab targets HER2 (ErbB2) and is used in HER2-positive breast and gastric adenocarcinomas, not GISTs.","Incorrect. Bevacizumab is an anti-VEGF antibody used in colorectal, renal, and other cancers, not GISTs.","Incorrect. Cetuximab targets EGFR and is used in KRAS wild-type colorectal cancer and head/neck cancers.","Incorrect. Rituximab targets CD20 on B cells and is used in B-cell lymphomas and autoimmune diseases.","Correct. Imatinib targets the KIT tyrosine kinase mutated in GISTs. KIT exon 11 mutations are most common and most responsive."],
      highYieldPoint: "GIST: KIT mutation → imatinib (TKI). Also targets BCR-ABL (CML) and PDGFRA. Exon 11 mutation most common and most responsive."
    },
    {
      vignette: "A 55-year-old man with a 30-year history of untreated celiac disease presents with abdominal pain, weight loss, and a small bowel mass on CT. Biopsy shows atypical lymphoid cells expressing CD3 and CD103. The cells are large with irregular nuclei.",
      question: "Which of the following malignancies is most likely present in this patient?",
      options: ["Adenocarcinoma of the small bowel","Enteropathy-associated T-cell lymphoma (EATL)","MALT lymphoma","Carcinoid tumor","Gastrointestinal stromal tumor"],
      correctIndex: 1,
      explanation: "Enteropathy-associated T-cell lymphoma (EATL) is a rare but aggressive T-cell lymphoma arising in the setting of long-standing celiac disease (refractory or untreated). The malignant cells are T cells expressing CD3 (T-cell marker) and CD103 (mucosal homing integrin). EATL has a poor prognosis. A strict gluten-free diet in celiac disease reduces the risk of EATL development.",
      optionExplanations: ["Incorrect. While celiac disease slightly increases risk of small bowel adenocarcinoma, the CD3+/CD103+ immunophenotype indicates a T-cell lymphoma.","Correct. EATL: T-cell lymphoma complicating untreated/refractory celiac disease. CD3+, CD103+. Aggressive with poor prognosis.","Incorrect. MALT lymphoma is a B-cell lymphoma associated with H. pylori in the stomach, not celiac disease in the small bowel.","Incorrect. Carcinoid tumors are neuroendocrine tumors expressing chromogranin and synaptophysin, not T-cell markers.","Incorrect. GISTs express CD117/DOG1 and arise from interstitial cells of Cajal, not lymphoid cells."],
      highYieldPoint: "EATL: T-cell lymphoma complicating long-standing celiac disease. CD3+, CD103+. Poor prognosis. Gluten-free diet reduces risk."
    },
    {
      vignette: "A 62-year-old man presents with flushing, watery diarrhea, and wheezing. He has been experiencing these symptoms intermittently for 6 months. A CT scan reveals a 3 cm mass in the terminal ileum and multiple liver metastases. 24-hour urine 5-HIAA is markedly elevated.",
      question: "Which of the following is the most likely diagnosis?",
      options: ["Pancreatic VIPoma","Small bowel adenocarcinoma","Systemic mastocytosis","Zollinger-Ellison syndrome","Carcinoid tumor with carcinoid syndrome"],
      correctIndex: 4,
      explanation: "Carcinoid syndrome occurs when serotonin (5-HT) and other vasoactive substances from a carcinoid tumor bypass hepatic metabolism and reach the systemic circulation. This typically requires liver metastases (as hepatic metastases secrete serotonin directly into the hepatic vein, bypassing first-pass metabolism). The classic triad is flushing, diarrhea, and bronchospasm. Right-sided cardiac valvular disease (tricuspid regurgitation, pulmonary stenosis) occurs from serotonin-induced fibrosis. Diagnosis: elevated 24-hour urine 5-HIAA.",
      optionExplanations: ["Incorrect. VIPoma causes watery diarrhea, hypokalemia, and achlorhydria (WDHA syndrome) but not flushing, wheezing, or elevated 5-HIAA.","Incorrect. Small bowel adenocarcinoma would not produce 5-HIAA or cause flushing/bronchospasm.","Incorrect. Systemic mastocytosis can cause flushing and diarrhea from histamine release but would show elevated serum tryptase, not 5-HIAA.","Incorrect. ZES causes peptic ulcers from excess gastrin, not flushing or bronchospasm.","Correct. Carcinoid syndrome: flushing + diarrhea + wheezing + liver metastases + elevated 5-HIAA. Serotonin-producing neuroendocrine tumor."],
      highYieldPoint: "Carcinoid syndrome: flushing, diarrhea, bronchospasm, right heart valvular disease. Requires liver metastases. Diagnose: ↑ urine 5-HIAA. Tumor: chromogranin A+."
    },
    {
      vignette: "A 72-year-old man undergoes colonoscopy for rectal bleeding. A 3 cm sessile polyp is found in the sigmoid colon and removed. Pathology shows a villous adenoma with high-grade dysplasia. The resection margins are negative.",
      question: "Which of the following histologic types of colorectal polyps carries the highest risk of malignant transformation?",
      options: ["Hyperplastic polyp","Tubular adenoma","Villous adenoma","Juvenile polyp","Inflammatory pseudopolyp"],
      correctIndex: 2,
      explanation: "Villous adenomas have the highest malignant potential among colorectal polyps (~40% risk of harboring carcinoma if >4 cm). The malignant risk correlates with: (1) villous histology (villous > tubulovillous > tubular), (2) size (>2 cm), and (3) degree of dysplasia. Tubular adenomas are most common but have lower malignant potential (~5%). Tubulovillous adenomas are intermediate (~20%).",
      optionExplanations: ["Incorrect. Hyperplastic polyps are the most common non-neoplastic polyps and carry no significant malignant potential (except sessile serrated polyps).","Incorrect. Tubular adenomas are the most common adenomatous polyps (~80%) but have lower malignant potential (~5%) compared to villous.","Correct. Villous adenomas have the highest malignant potential (~40% if large). Risk increases with size, villous component, and dysplasia grade.","Incorrect. Juvenile polyps are hamartomatous and typically benign in isolated cases (syndromic juvenile polyposis has cancer risk).","Incorrect. Inflammatory pseudopolyps are non-neoplastic regenerative tissue in UC and do not have intrinsic malignant potential."],
      highYieldPoint: "Malignant risk of polyps: villous > tubulovillous > tubular. Increases with size (>2 cm) and dysplasia. Villous adenoma: ~40% if >4 cm."
    },
    {
      vignette: "A 48-year-old man presents with early satiety, nausea, and a 15-pound weight loss. Upper endoscopy reveals diffuse thickening of the gastric wall without a discrete mass. Multiple biopsies show diffuse infiltration of signet ring cells. CT shows thickened gastric wall ('leather bottle' stomach).",
      question: "Which of the following tumor suppressor gene losses is most closely associated with this type of gastric cancer?",
      options: ["APC","TP53","CDH1 (E-cadherin)","RB1","VHL"],
      correctIndex: 2,
      explanation: "Diffuse-type gastric adenocarcinoma (linitis plastica) is characterized by signet ring cells that diffusely infiltrate the gastric wall without forming a discrete mass. Loss of E-cadherin (CDH1 gene) is the hallmark genetic alteration. E-cadherin is a cell adhesion molecule; its loss allows individual tumor cells to infiltrate widely. Hereditary diffuse gastric cancer (HDGC) is caused by germline CDH1 mutations and carries a ~70% lifetime risk of diffuse gastric cancer.",
      optionExplanations: ["Incorrect. APC mutations drive the adenoma-carcinoma sequence in colorectal cancer, not diffuse gastric cancer.","Incorrect. TP53 mutations are found in many cancers including gastric, but CDH1 loss is specifically associated with the diffuse/signet ring cell type.","Correct. CDH1 (E-cadherin) loss → loss of cell adhesion → signet ring cells infiltrating diffusely (linitis plastica). Germline CDH1 = HDGC.","Incorrect. RB1 mutations are associated with retinoblastoma and small cell carcinomas.","Incorrect. VHL mutations cause von Hippel-Lindau syndrome with renal cell carcinoma and hemangioblastomas."],
      highYieldPoint: "Diffuse gastric cancer (linitis plastica): CDH1 (E-cadherin) loss → signet ring cells, diffuse infiltration. Germline CDH1 → HDGC (~70% lifetime risk)."
    },
    {
      vignette: "A 68-year-old man with a history of chronic hepatitis B infection and cirrhosis presents with right upper quadrant pain and weight loss. A triphasic CT scan shows a 5 cm mass in the right lobe of the liver with arterial hyperenhancement and portal venous phase washout. AFP is 650 ng/mL.",
      question: "Which of the following risk factors is the leading cause of hepatocellular carcinoma worldwide?",
      options: ["Alcoholic cirrhosis","Hepatitis C virus infection","Non-alcoholic steatohepatitis (NASH)","Chronic hepatitis B virus infection","Aflatoxin B1 exposure"],
      correctIndex: 3,
      explanation: "Chronic hepatitis B infection is the leading cause of hepatocellular carcinoma worldwide, accounting for over 50% of cases globally. HBV can cause HCC even without cirrhosis because it integrates into the host genome, causing insertional mutagenesis and genomic instability. In Western countries, HCV and alcoholic cirrhosis are more common causes. Aflatoxin B1 (from Aspergillus in stored grains/nuts) causes a specific TP53 mutation (codon 249, R249S).",
      optionExplanations: ["Incorrect. Alcoholic cirrhosis is a significant risk factor, especially in Western countries, but is not the #1 cause worldwide.","Incorrect. HCV is the leading cause of HCC in developed countries (US, Europe, Japan) but not worldwide.","Incorrect. NASH-related HCC is increasing in incidence but is not the leading cause globally.","Correct. Chronic HBV is the #1 cause of HCC worldwide. Can cause HCC even without cirrhosis (DNA integration into host genome).","Incorrect. Aflatoxin B1 synergizes with HBV to increase HCC risk, especially in sub-Saharan Africa and Southeast Asia, but HBV is the primary driver."],
      highYieldPoint: "HCC: #1 cause worldwide = HBV (can cause HCC without cirrhosis). #1 in West = HCV. Aflatoxin B1 → TP53 R249S mutation. Screen with US + AFP every 6 months."
    },
    {
      vignette: "A 12-year-old girl presents with rectal bleeding. Colonoscopy reveals a solitary pedunculated polyp in the rectum. Histology shows dilated, mucin-filled glands with abundant lamina propria and no dysplasia. The surrounding mucosa is normal.",
      question: "Which of the following is the most likely type of polyp?",
      options: ["Tubular adenoma","Hyperplastic polyp","Juvenile (retention) polyp","Peutz-Jeghers hamartomatous polyp","Inflammatory pseudopolyp"],
      correctIndex: 2,
      explanation: "Juvenile (retention) polyps are the most common polyps in children. They are hamartomatous polyps characterized by dilated, mucin-filled (cystic) glands with an expanded lamina propria and a smooth surface. Solitary juvenile polyps are benign with no malignant potential. However, juvenile polyposis syndrome (≥5 juvenile polyps, or any juvenile polyps with family history) carries increased cancer risk due to SMAD4/BMPR1A mutations.",
      optionExplanations: ["Incorrect. Tubular adenomas are neoplastic polyps with dysplastic glands and are rare in children.","Incorrect. Hyperplastic polyps show a serrated glandular architecture without cystic glands or expanded lamina propria; they are more common in adults.","Correct. Juvenile polyp: hamartomatous, dilated mucin-filled glands, expanded lamina propria. Most common polyp in children. Solitary = benign.","Incorrect. Peutz-Jeghers polyps have a distinctive arborizing smooth muscle core, not dilated cystic glands.","Incorrect. Inflammatory pseudopolyps are islands of regenerating mucosa in ulcerative colitis, not found in children with normal surrounding mucosa."],
      highYieldPoint: "Juvenile polyps: most common in children, hamartomatous, cystic glands. Solitary = benign. Juvenile polyposis syndrome (≥5) = cancer risk (SMAD4/BMPR1A)."
    }
  ]
};

const GI_SUMMARIES = {
  "GI physiology": {
    sections: [
      {
        heading: "GI Hormones and Their Actions",
        bullets: ["Gastrin: produced by G cells (antrum), stimulated by amino acids/vagal input/stomach distension, stimulates acid secretion and trophic to gastric mucosa","Secretin: produced by S cells (duodenum) in response to acid (pH <4.5), stimulates pancreatic HCO3⁻ secretion, inhibits gastric acid","CCK: produced by I cells (duodenum/jejunum) in response to fatty acids/amino acids, stimulates gallbladder contraction, pancreatic enzyme secretion, and sphincter of Oddi relaxation","GIP (glucose-dependent insulinotropic peptide): produced by K cells, stimulated by glucose/fat, potentiates insulin release (incretin effect)","Motilin: produced by enterochromaffin cells during fasting, drives the migrating motor complex (MMC); erythromycin is a motilin agonist (prokinetic)","Somatostatin: produced by D cells throughout GI tract, inhibits virtually all GI secretion (acid, pepsin, gastrin, CCK, secretin, insulin, glucagon)","VIP: neurocrine agent stimulating water and electrolyte secretion, pancreatic HCO3⁻ secretion, and intestinal relaxation; VIPoma causes WDHA syndrome"]
      },
      {
        heading: "Gastric Acid Secretion and Regulation",
        bullets: ["Parietal cells secrete HCl via H+/K+-ATPase (proton pump) on the apical membrane","Three stimulators: histamine (H2 → Gs → cAMP), acetylcholine (M3 → Gq → IP3/Ca2+), gastrin (CCK-B → Gq → IP3/Ca2+)","Histamine from ECL cells is the most potent direct stimulant (basis for H2 blocker therapy)","Somatostatin from D cells and prostaglandins (PGE2) inhibit acid secretion","PPIs irreversibly inhibit H+/K+-ATPase — the final common pathway; most potent acid suppression","Chief cells secrete pepsinogen → activated to pepsin by acid (pH <4)","Mucosal defense: mucus-bicarbonate barrier, prostaglandins (PGE2 → blood flow, mucus, HCO3⁻), epithelial tight junctions"]
      },
      {
        heading: "Nutrient Absorption and Transport",
        bullets: ["Carbohydrates: brush border enzymes (maltase, sucrase, lactase) → monosaccharides absorbed via SGLT1 (Na+ cotransport, apical) and GLUT2 (basolateral)","Proteins: pepsin (stomach) + pancreatic proteases (trypsin, chymotrypsin, carboxypeptidase) → amino acids absorbed via Na+-dependent cotransporters","Fats: pancreatic lipase + colipase → 2-monoacylglycerol + FFAs → mixed micelles → absorbed; re-esterified → chylomicrons → lacteals → lymph","Short/medium-chain fatty acids bypass micelles and lacteals; absorbed directly into portal blood","Iron (Fe2+): absorbed in duodenum via DMT1 (apical), exported by ferroportin (basolateral), regulated by hepcidin","Vitamin B12: absorbed in terminal ileum bound to intrinsic factor via cubam receptor","Folate: absorbed in proximal jejunum","Bile salts: 95% reabsorbed in terminal ileum via ASBT (enterohepatic circulation)"]
      }
    ],
    table: {
      headers: ["Hormone","Source","Stimulus","Key Actions"],
      rows: [
        ["Gastrin","G cells (antrum)","Amino acids, vagus, distension","↑ acid secretion, ↑ mucosal growth"],
        ["Secretin","S cells (duodenum)","Acid (pH <4.5)","↑ pancreatic HCO3⁻, ↓ gastric acid"],
        ["CCK","I cells (duodenum/jejunum)","Fatty acids, amino acids","Gallbladder contraction, ↑ pancreatic enzymes"],
        ["GIP","K cells (duodenum/jejunum)","Glucose, fatty acids","↑ insulin release (incretin)"],
        ["Motilin","Enterochromaffin cells","Fasting (cyclical)","Migrating motor complex (MMC)"],
        ["Somatostatin","D cells (throughout GI)","Acid in lumen","Inhibits all GI hormones and secretion"],
        ["VIP","Enteric neurons","Neural stimulation","↑ water/electrolyte secretion, relaxes smooth muscle"]
      ]
    },
    mnemonic: "GI Hormone Cells: 'G I S D K' = G cells (Gastrin), I cells (CCK), S cells (Secretin), D cells (Somatostatin), K cells (GIP). Salivary ducts absorb Na/Cl and secrete K/HCO3 → hypotonic saliva."
  },
  "Esophageal & gastric disease": {
    sections: [
      {
        heading: "GERD and Barrett Esophagus",
        bullets: ["GERD: caused by decreased LES pressure → acid reflux → heartburn, regurgitation. Risk factors: obesity, hiatal hernia, pregnancy, smoking","Complications: erosive esophagitis, stricture, Barrett esophagus, adenocarcinoma","Barrett esophagus: intestinal metaplasia (goblet cells) replacing squamous epithelium in distal esophagus due to chronic GERD","Barrett → dysplasia → adenocarcinoma sequence; surveillance every 3-5 years if no dysplasia","Treatment: PPIs (first-line), H2 blockers, lifestyle modifications. Fundoplication for refractory cases"]
      },
      {
        heading: "Esophageal Cancers",
        bullets: ["Squamous cell carcinoma: mid-esophagus, risk factors = alcohol + tobacco + hot beverages + achalasia + Plummer-Vinson, keratin pearls","Adenocarcinoma: distal esophagus/GEJ, risk factors = GERD + Barrett + obesity, glandular differentiation","SCC more common worldwide; adenocarcinoma more common in Western countries and rising in incidence"]
      },
      {
        heading: "Esophageal Motility Disorders",
        bullets: ["Achalasia: loss of myenteric inhibitory neurons → LES fails to relax + absent peristalsis; bird's beak on barium swallow; secondary causes include Chagas disease (T. cruzi)","Scleroderma esophagus: smooth muscle fibrosis → decreased LES pressure + absent peristalsis in lower 2/3 → severe GERD","Eosinophilic esophagitis: young atopic patient, dysphagia, food impaction, ringed esophagus, ≥15 eos/HPF. Treat: swallowed steroids, PPI, dietary elimination"]
      },
      {
        heading: "Gastric Pathology",
        bullets: ["H. pylori: gram-negative, urease(+), causes gastritis, peptic ulcers, gastric adenocarcinoma (intestinal type), MALT lymphoma","Autoimmune (type A) gastritis: anti-parietal cell antibodies → atrophic gastritis of body/fundus → pernicious anemia (↓ IF → B12 deficiency), ↑ gastrin → carcinoid risk","Gastric cancer: intestinal type (H. pylori, intestinal metaplasia, glandular) vs. diffuse type (signet ring, CDH1/E-cadherin loss, linitis plastica, Krukenberg tumor)","GISTs: from interstitial cells of Cajal, CD117+ (c-KIT), DOG1+, treat with imatinib"]
      }
    ],
    table: {
      headers: ["Feature","Achalasia","Scleroderma Esophagus","Eosinophilic Esophagitis"],
      rows: [
        ["LES pressure","↑ (fails to relax)","↓ (low)","Normal"],
        ["Peristalsis","Absent (entire esophagus)","Absent (lower 2/3)","Normal or mild dysmotility"],
        ["Barium swallow","Bird's beak","Dilated, patulous LES","Rings (trachealization)"],
        ["Dysphagia","Solids and liquids","Solids and liquids","Solids (food impaction)"],
        ["Key association","Chagas (T. cruzi)","Raynaud, CREST syndrome","Atopy (asthma, eczema)"],
        ["Treatment","Myotomy or dilation","PPI (manage GERD)","Swallowed steroids, PPI"]
      ]
    },
    mnemonic: "Barrett sequence: 'SMDC' = Squamous → Metaplasia (intestinal) → Dysplasia → Carcinoma (adenocarcinoma). Plummer-Vinson triad: 'IWD' = Iron deficiency + Web + Dysphagia."
  },
  "Liver pathology": {
    sections: [
      {
        heading: "Hepatitis Viruses",
        bullets: ["HAV: fecal-oral, ssRNA picornavirus, acute only (no chronicity), IgM anti-HAV = acute, IgG = resolved/immune","HBV: parenteral/sexual, partially dsDNA hepadnavirus, 5% chronic (adults), 90% chronic (neonates). HBsAg = active, anti-HBs = immune/recovered, anti-HBc IgM = acute, HBeAg = high replication","HCV: parenteral, ssRNA flavivirus, ~80% chronicity, #1 cause of liver transplant in US, associated with cryoglobulinemia and membranoproliferative GN","HDV: defective RNA virus, requires HBV coinfection. Superinfection (HDV on chronic HBV) is worse than coinfection","HEV: fecal-oral, water-borne, ssRNA hepevirus. High mortality in pregnant women (up to 20%)"]
      },
      {
        heading: "Cirrhosis and Complications",
        bullets: ["Portal hypertension: ↑ portal pressure → varices (esophageal, hemorrhoidal, caput medusae), splenomegaly, ascites","Ascites: SAAG ≥1.1 = portal HTN. Treat with sodium restriction + spironolactone ± furosemide","Spontaneous bacterial peritonitis: ascitic PMN ≥250/mm³, usually E. coli/Klebsiella, treat with ceftriaxone","Hepatic encephalopathy: ↑ ammonia → astrocyte glutamine accumulation → confusion, asterixis. Treat with lactulose + rifaximin","Hepatorenal syndrome: functional renal failure in advanced cirrhosis from extreme splanchnic vasodilation","Coagulopathy: decreased synthesis of clotting factors → prolonged PT/INR"]
      },
      {
        heading: "Metabolic and Autoimmune Liver Disease",
        bullets: ["Hemochromatosis: HFE C282Y mutation → iron overload → bronze diabetes, cirrhosis, cardiomyopathy. Prussian blue stain. Treat: phlebotomy","Wilson disease: ATP7B mutation → copper overload → liver disease, basal ganglia degeneration, Kayser-Fleischer rings. Low ceruloplasmin, high urine copper. Treat: penicillamine, zinc","Alpha-1 antitrypsin deficiency: PiZZ → PAS+/diastase-resistant globules in hepatocytes + panacinar emphysema (lower lobes)","Autoimmune hepatitis type 1: ANA/ASMA+, ↑IgG, interface hepatitis with plasma cells. Treat: prednisone + azathioprine","Primary biliary cholangitis (PBC): AMA+ (anti-PDC-E2), middle-aged women, small bile duct destruction, ↑ALP. Treat: ursodeoxycholic acid","Primary sclerosing cholangitis (PSC): p-ANCA+, associated with UC, onion-skin fibrosis, beaded bile ducts on MRCP, risk of cholangiocarcinoma"]
      }
    ],
    table: {
      headers: ["Marker","Acute HBV","Chronic HBV","Resolved HBV","Vaccinated","Window Period"],
      rows: [
        ["HBsAg","+","+","−","−","−"],
        ["Anti-HBs","−","−","+","+","−"],
        ["Anti-HBc IgM","+","−","−","−","+"],
        ["Anti-HBc IgG","−/+","+","+","−","+"],
        ["HBeAg","+","+/−","−","−","−"]
      ]
    },
    mnemonic: "Hepatitis vowels: A and E are 'vowels' = fecal-oral ('bowel'). B, C, D are 'consonants' = blood-borne. Cirrhosis complications: 'HAVE' = Hepatic encephalopathy, Ascites/SBP, Varices, Esophageal bleeding."
  },
  "Pancreatic & biliary disease": {
    sections: [
      {
        heading: "Gallstone Disease",
        bullets: ["Cholesterol stones (80%): 4 F's = Female, Forty, Fat, Fertile. Also OCP use, rapid weight loss, fibrates, Native American descent","Black pigment stones: chronic hemolysis (sickle cell, spherocytosis, thalassemia), cirrhosis → ↑ unconjugated bilirubin → calcium bilirubinate","Brown pigment stones: biliary infection/stasis (E. coli, Clonorchis sinensis, Ascaris), form in bile ducts","Biliary colic: transient cystic duct obstruction → RUQ pain after fatty meals, resolves <6 hours, normal labs","Acute cholecystitis: persistent cystic duct obstruction → inflammation, fever, Murphy sign, ↑WBC. US: thickened wall, pericholecystic fluid. Treat: IV antibiotics + cholecystectomy within 72 hours","Choledocholithiasis: CBD stone → ↑bilirubin (conjugated), ↑ALP/GGT, dilated CBD. Treat: ERCP with sphincterotomy","Cholangitis: Charcot triad (fever, RUQ pain, jaundice). Reynolds pentad adds hypotension + AMS → surgical emergency. Most common organism: E. coli"]
      },
      {
        heading: "Acute and Chronic Pancreatitis",
        bullets: ["Acute pancreatitis: #1 gallstones, #2 alcohol, #3 hypertriglyceridemia (>1,000). Also: drugs (azathioprine, valproic acid, didanosine), ERCP, scorpion stings","Presents with epigastric pain radiating to back, nausea/vomiting, elevated lipase (more specific than amylase)","Cullen sign (periumbilical ecchymosis) and Grey Turner sign (flank ecchymosis) = hemorrhagic necrotizing pancreatitis","Treatment: aggressive IV fluids (LR), pain control, early oral feeding. No prophylactic antibiotics. ERCP only for biliary obstruction","Complications: pseudocyst (≥4 weeks, no epithelial lining), infected necrosis, ARDS, hypocalcemia (fat saponification)","Chronic pancreatitis: alcohol (#1), recurrent episodes → fibrosis → calcifications, exocrine insufficiency (steatorrhea), endocrine insufficiency (diabetes)","Pancreatic stellate cells drive fibrosis (analogous to hepatic stellate cells)"]
      },
      {
        heading: "Pancreatic Cancer",
        bullets: ["Pancreatic ductal adenocarcinoma: poor prognosis (5-year survival ~10%), typically head of pancreas","Presents with painless obstructive jaundice, weight loss, Courvoisier sign (palpable, nontender gallbladder)","Double duct sign: dilation of both CBD and pancreatic duct","Genetics: KRAS mutation (>90%), CDKN2A/p16, TP53, SMAD4/DPC4 losses","Risk factors: smoking (#1 modifiable), chronic pancreatitis, diabetes, family history, BRCA2","Trousseau syndrome: migratory thrombophlebitis from mucin-secreting tumors","Whipple procedure (pancreaticoduodenectomy) for resectable tumors"]
      }
    ],
    table: {
      headers: ["Feature","Biliary Colic","Acute Cholecystitis","Choledocholithiasis","Ascending Cholangitis"],
      rows: [
        ["Pain duration","<6 hours","Persistent (>6 hours)","Variable","Variable"],
        ["Fever/WBC","No","Yes","± Mild","Yes (high fever)"],
        ["Jaundice","No","Uncommon","Yes","Yes"],
        ["Murphy sign","±","+","−","±"],
        ["Bilirubin/ALP","Normal","Normal or mildly ↑","↑↑","↑↑"],
        ["CBD on US","Normal","Normal","Dilated","Dilated"],
        ["Treatment","Elective cholecystectomy","IV Abx + early cholecystectomy","ERCP + sphincterotomy","IV Abx + emergent ERCP"]
      ]
    },
    mnemonic: "Gallstone risk: '4 F's' = Female, Forty, Fat, Fertile. Pancreatitis causes: 'I GET SMASHED' = Idiopathic, Gallstones, Ethanol, Trauma, Steroids, Mumps, Autoimmune, Scorpion stings, Hyperlipidemia/Hypercalcemia, ERCP, Drugs."
  },
  "Inflammatory bowel disease": {
    sections: [
      {
        heading: "Crohn Disease vs. Ulcerative Colitis: Key Differences",
        bullets: ["Crohn: any part of GI tract (mouth to anus), terminal ileum most common, skip lesions, transmural inflammation, granulomas (~30%), cobblestone mucosa, creeping fat, string sign on imaging","UC: colon only, always involves rectum, continuous (no skips), mucosal/submucosal only, crypt abscesses, pseudopolyps, bloody diarrhea","Crohn complications: fistulas (perianal, enteroenteric, enterovesical), strictures → obstruction, abscesses, B12 deficiency (ileal disease)","UC complications: toxic megacolon (colon >6 cm + systemic toxicity), colorectal cancer (↑risk after 8-10 years of pancolitis), PSC association","Smoking: protective in UC, worsens Crohn"]
      },
      {
        heading: "IBD Extraintestinal Manifestations",
        bullets: ["Correlate with disease activity: erythema nodosum, type 1 (pauciarticular) arthropathy, oral aphthous ulcers, episcleritis","Do NOT correlate with disease activity: pyoderma gangrenosum, type 2 (polyarticular) arthropathy, ankylosing spondylitis/sacroiliitis, uveitis, PSC","PSC: strongly associated with UC (~70% of PSC patients have UC), risk of cholangiocarcinoma","Pyoderma gangrenosum: painful deep ulcers with undermined violaceous borders, exhibits pathergy (worsens with surgery/debridement)"]
      },
      {
        heading: "IBD Treatment",
        bullets: ["5-ASA (mesalamine): primarily effective in UC (mild-moderate); limited role in Crohn. Can also be given as sulfasalazine (5-ASA + sulfapyridine)","Corticosteroids: induction of remission (budesonide for ileal Crohn; prednisone for moderate-severe). NOT for maintenance","Immunomodulators: azathioprine/6-MP (maintenance, steroid-sparing), methotrexate (Crohn maintenance)","Biologics: anti-TNF (infliximab, adalimumab) for moderate-severe and fistulizing Crohn. Screen for TB and HBV before starting","Other biologics: vedolizumab (anti-α4β7 integrin, gut-selective), ustekinumab (anti-IL-12/23), tofacitinib (JAK inhibitor, UC)","Surgery: UC — proctocolectomy with IPAA is curative. Crohn — reserved for complications (strictures, fistulas, abscesses); recurrence is common","Pouchitis: most common complication after IPAA (~50%). Treat with metronidazole or ciprofloxacin"]
      }
    ],
    table: {
      headers: ["Feature","Crohn Disease","Ulcerative Colitis"],
      rows: [
        ["Location","Mouth to anus (terminal ileum most common)","Colon only (always involves rectum)"],
        ["Distribution","Skip lesions","Continuous from rectum"],
        ["Depth","Transmural","Mucosa and submucosa"],
        ["Histology","Non-caseating granulomas (~30%)","Crypt abscesses, pseudopolyps"],
        ["Gross appearance","Cobblestone mucosa, creeping fat","Friable, erythematous, pseudopolyps"],
        ["Bloody diarrhea","Less common","Very common (hallmark)"],
        ["Fistulas/strictures","Common (transmural)","Rare"],
        ["Cancer risk","Modest ↑ (especially with colonic involvement)","High (↑ with duration and extent)"],
        ["Smoking","Worsens disease","Protective"],
        ["Surgery","Not curative (recurrence common)","Curative (total proctocolectomy)"]
      ]
    },
    mnemonic: "Crohn = 'CHRISTMAS': Cobblestones, High temperature, Reduced lumen (strictures), Intestinal fistulae, Skip lesions, Transmural, Mesentery (creeping fat), Abscesses, Submucosal fibrosis. UC = 'CUP': Continuous, Ulcers (superficial), Pseudopolyps."
  },
  "GI neoplasms": {
    sections: [
      {
        heading: "Colorectal Cancer Genetics and Pathways",
        bullets: ["Adenoma-carcinoma sequence (sporadic, ~80%): APC loss (initiating/gatekeeper) → KRAS activation → SMAD4/DCC loss → TP53 loss → carcinoma. Chromosomal instability pathway.","Lynch syndrome (HNPCC, ~5%): germline mismatch repair gene mutations (MLH1, MSH2, MSH6, PMS2) → microsatellite instability (MSI-H). Right-sided CRC. Amsterdam criteria: 3-2-1 rule.","FAP (<1%): germline APC mutation (5q21), >100 adenomatous polyps, 100% CRC risk by age 40. Variants: Gardner (osteomas, desmoid tumors), Turcot (brain tumors/medulloblastoma).","Serrated pathway: BRAF V600E mutation → CpG island methylation → sessile serrated polyps → CRC (usually right-sided, MSI-H from MLH1 methylation).","Colitis-associated CRC: inflammation → early TP53 mutation → dysplasia → carcinoma (different from sporadic APC-first pathway)."]
      },
      {
        heading: "GI Tumor Presentations",
        bullets: ["Right-sided CRC: exophytic, iron-deficiency anemia (occult bleeding), often asymptomatic until advanced","Left-sided CRC: annular/napkin ring, obstructive symptoms (constipation, pencil-thin stools, bowel habit changes), hematochezia","Gastric cancer: intestinal type (H. pylori, intestinal metaplasia, glandular, better prognosis) vs. diffuse type (CDH1/E-cadherin loss, signet ring cells, linitis plastica, Krukenberg tumor to ovary)","HCC: #1 primary liver malignancy. Risk: HBV, HCV, alcohol, aflatoxin B1. ↑AFP. Arterial hyperenhancement on CT/MRI","Cholangiocarcinoma: associated with PSC, liver flukes (Clonorchis), Caroli disease. ↑CA 19-9","Carcinoid syndrome: flushing, diarrhea, bronchospasm, right-sided valvular heart disease. Requires liver mets. ↑5-HIAA"]
      },
      {
        heading: "Polyposis Syndromes",
        bullets: ["FAP: APC mutation → adenomatous polyps (>100) → 100% CRC. Gardner = FAP + osteomas + desmoids. Turcot = FAP + CNS tumors","Lynch (HNPCC): MMR gene → MSI-H → CRC + endometrial + ovarian + other. Few polyps. Amsterdam criteria 3-2-1 rule","Peutz-Jeghers: STK11/LKB1 → hamartomatous polyps (arborizing smooth muscle) + melanotic macules. ↑ risk: breast, GI, ovarian, pancreatic","Juvenile polyposis: SMAD4/BMPR1A → hamartomatous (cystic glands + expanded lamina propria). Solitary = benign; syndrome (≥5) = cancer risk","Cowden syndrome: PTEN mutation → hamartomatous polyps. ↑ risk: breast, thyroid, endometrial cancer. Trichilemmomas"]
      }
    ],
    table: {
      headers: ["Syndrome","Gene/Pathway","Polyp Type","Key Features","Cancer Risk"],
      rows: [
        ["FAP","APC (5q21)","Adenomatous",">100 polyps, autosomal dominant","100% CRC by age 40"],
        ["Lynch (HNPCC)","MLH1/MSH2/MSH6/PMS2 (MMR)","Adenomatous (few)","MSI-H, right-sided CRC","~80% CRC, endometrial, ovarian"],
        ["Peutz-Jeghers","STK11/LKB1","Hamartomatous","Melanotic macules, arborizing smooth muscle core","~85% lifetime (breast, GI, pancreas)"],
        ["Juvenile polyposis","SMAD4/BMPR1A","Hamartomatous","Cystic glands, expanded lamina propria","~50% CRC (if syndrome)"],
        ["Cowden","PTEN","Hamartomatous","Trichilemmomas, macrocephaly","Breast, thyroid, endometrial"]
      ]
    },
    mnemonic: "Sporadic CRC pathway: 'APC Kicks Some TP' = APC loss → KRAS activation → SMAD4 loss → TP53 loss. FAP variants: 'Gardner Goes for Bones (osteomas) and Bands (desmoids)'; 'Turcot has Tumors in the Turret (brain)'."
  }
};
