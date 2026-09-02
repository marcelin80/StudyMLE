export type TrackId = "supervised" | "systems" | "stats";

export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  summary: string;
  notes: string[];
};

export type Question = {
  id: string;
  prompt: string;
  choices: string[];
  answer: number;
  explain: string;
};

export type Track = {
  id: TrackId;
  label: string;
  title: string;
  blurb: string;
  lessons: Lesson[];
  quiz: Question[];
};

export const tracks: Track[] = [
  {
    id: "supervised",
    label: "Track 01",
    title: "Supervised models",
    blurb: "Bias-variance, regularization, and the models you actually ship.",
    lessons: [
      {
        id: "bias-variance",
        title: "Bias, variance, and the split you forgot",
        minutes: 8,
        summary:
          "A model that looks brilliant on the training fold is often just memorizing noise.",
        notes: [
          "Bias is error from an overly simple hypothesis. Variance is sensitivity to the particular sample.",
          "Hold out a validation set before you touch hyperparameters. Keep a final test set untouched until the last report.",
          "If training loss is low and validation loss is high, regularize, collect more data, or simplify the model.",
          "If both losses are high, the hypothesis class is too weak or the features do not carry the signal.",
        ],
      },
      {
        id: "regularization",
        title: "Regularization that you can defend",
        minutes: 7,
        summary: "L2, dropout, and early stopping are different knobs for the same goal.",
        notes: [
          "L2 (weight decay) shrinks parameters toward zero and is usually the first lever on linear models.",
          "L1 encourages sparsity and can double as cheap feature selection when you can afford the bias.",
          "Early stopping treats the number of passes as a hyperparameter. Plot both curves; do not stop on a hunch.",
          "Write down why you chose the penalty. Interviewers and future-you both ask.",
        ],
      },
      {
        id: "trees",
        title: "Trees, boosting, and when to stop stacking",
        minutes: 9,
        summary: "Gradient boosting still wins a surprising number of tabular problems.",
        notes: [
          "A single deep tree overfits; a shallow forest averages that noise away.",
          "Boosting fits residuals in sequence. Learning rate and tree depth are the two knobs that matter first.",
          "Watch feature leakage: a column that is only available after the label is not a feature, it is a spoiler.",
          "Do not stack five models because a blog said so. Start with one strong baseline and a dumb majority classifier.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Training loss is 0.04 and validation loss is 0.41. What is the most useful next move?",
        choices: [
          "Add more capacity until training loss reaches zero",
          "Regularize, gather more data, or simplify the model",
          "Report the training metric as the launch number",
          "Switch immediately to an unsupervised pipeline",
        ],
        answer: 1,
        explain:
          "A large train/validation gap is overfitting. Capacity increases make that worse.",
      },
      {
        id: "q2",
        prompt: "Why keep a final test set untouched during tuning?",
        choices: [
          "It speeds up gradient descent",
          "It prevents the validation set from leaking into model selection",
          "It is required by every GPU driver",
          "It replaces the need for cross-validation",
        ],
        answer: 1,
        explain:
          "Repeated peeking at the test set turns it into another validation set and inflates reported skill.",
      },
    ],
  },
  {
    id: "systems",
    label: "Track 02",
    title: "ML systems",
    blurb: "Features, training jobs, and the production path that actually stays up.",
    lessons: [
      {
        id: "features",
        title: "Feature stores and training-serving skew",
        minutes: 8,
        summary: "The same feature computed two ways is two features, and one of them will bite you.",
        notes: [
          "Training-serving skew is the silent killer: offline notebooks use a join the online path cannot afford.",
          "Compute features once, store the definition, and serve that definition from training and inference.",
          "Log the feature vector that produced each prediction. You cannot debug a model you cannot replay.",
          "Point-in-time joins matter. A label from Tuesday must not see a feature that arrived Wednesday.",
        ],
      },
      {
        id: "pipelines",
        title: "Training pipelines that fail loudly",
        minutes: 7,
        summary: "A green dashboard that hides a silent data drop is worse than a red one.",
        notes: [
          "Version code, data, and the trained artifact together. A model file alone is not reproducible.",
          "Validate schemas at the door: missing columns, sudden null rates, and label leakage.",
          "Prefer idempotent jobs. A retry should not double-write labels or scramble splits.",
          "Alert on input drift and on output drift. Accuracy a week later is not an alerting strategy.",
        ],
      },
      {
        id: "serving",
        title: "Serving, rollback, and the 2 a.m. page",
        minutes: 8,
        summary: "If you cannot roll back in minutes, you do not have a release process.",
        notes: [
          "Shadow traffic and canaries catch more production bugs than another offline notebook.",
          "Keep the previous model artifact warm. Rollback is a config change, not a retraining job.",
          "Measure latency at p95 and p99, not just the mean. Tail latency is what users feel.",
          "Write a one-page runbook: how to disable the model, who owns the feature, and what 'good' looks like.",
        ],
      },
    ],
    quiz: [
      {
        id: "q3",
        prompt: "What is training-serving skew?",
        choices: [
          "A GPU that overheats during backprop",
          "A mismatch between features used to train and features used to serve",
          "A learning rate that is too high on the first epoch",
          "A validation set that is larger than the training set",
        ],
        answer: 1,
        explain:
          "If the online feature path does not match the training path, the live model sees a different world.",
      },
      {
        id: "q4",
        prompt: "Which pair should be versioned together for a reproducible training run?",
        choices: [
          "Only the Python version",
          "Code, data snapshot, and the resulting model artifact",
          "Only the cloud region",
          "The laptop hostname and the Slack channel",
        ],
        answer: 1,
        explain:
          "Reproducing a run means you can recover the exact code and data that produced that artifact.",
      },
    ],
  },
  {
    id: "stats",
    label: "Track 03",
    title: "Probability in practice",
    blurb: "The stats that show up in reviews, not just in textbooks.",
    lessons: [
      {
        id: "bayes",
        title: "Bayes, base rates, and a calm prior",
        minutes: 8,
        summary: "A 99% precise test is still noisy when the event is rare.",
        notes: [
          "Write the problem as P(cause | evidence). Expand it with Bayes before you reach for a library.",
          "Base rates dominate. A rare defect plus a 'very accurate' classifier still yields many false alarms.",
          "A prior is a documented belief, not a confession. Update it when the data arrives.",
          "Calibration matters: a score of 0.8 should be right about 80% of the time if you treat it as a probability.",
        ],
      },
      {
        id: "ab",
        title: "A/B tests that do not lie to you",
        minutes: 9,
        summary: "Peeking every hour and stopping at the first star is not a design.",
        notes: [
          "Pre-register the metric, the minimum effect you care about, and the sample size.",
          "Optional stopping inflates false positives. If you must peek, use a sequential design on purpose.",
          "Segment after you have a global effect, and treat those cuts as exploratory until you replicate.",
          "A non-significant result is information. It is not a failed experiment.",
        ],
      },
      {
        id: "metrics",
        title: "Metrics that match the decision",
        minutes: 6,
        summary: "Accuracy on an imbalanced label is a participation trophy.",
        notes: [
          "Precision, recall, and a threshold chosen for the cost of each error beat a single F1 headline.",
          "For ranking, look at the metric that matches how results are shown: precision@k, NDCG, or calibration.",
          "Offline metrics must correlate with the product decision. If they do not, the offline suite is theater.",
          "Always include a baseline: last week’s model, a heuristic, or a stratified random guess.",
        ],
      },
    ],
    quiz: [
      {
        id: "q5",
        prompt: "A defect occurs in 1% of units. A test is 99% accurate both ways. A unit tests positive. About how likely is it defective?",
        choices: [
          "About 99%",
          "About 50%",
          "About 1%",
          "Exactly 0%",
        ],
        answer: 1,
        explain:
          "Among 10,000 units, expect 100 defects (99 caught) and 99 false alarms from the healthy units. Roughly half of positives are real.",
      },
      {
        id: "q6",
        prompt: "Why is repeatedly peeking at an A/B test and stopping at the first significant p-value a problem?",
        choices: [
          "It uses too much memory",
          "It inflates the false-positive rate",
          "It makes the control variant illegal",
          "It prevents you from using a GPU",
        ],
        answer: 1,
        explain:
          "Each peek is another chance to get a lucky star. Optional stopping without a sequential plan lies about Type I error.",
      },
    ],
  },
];

export function getTrack(id: TrackId): Track {
  const track = tracks.find((item) => item.id === id);
  if (!track) {
    throw new Error(`Unknown track: ${id}`);
  }
  return track;
}
