# StudyMLE — USMLE Step 1 Study App

A self-contained, single-HTML-file study app for USMLE Step 1 preparation.

## Features

- 15 organ systems with topic-level question banks
- UWorld-style clinical vignettes with 5-option MCQs
- First Aid-style high-yield summary notes per topic
- Per-option explanations and high-yield point flashcards
- Progress tracking with accuracy stats per system/topic
- Works offline — all pre-generated questions are embedded in the HTML
- localStorage persistence for study progress

## Development

```bash
python3 -m http.server 8080
```

Open [http://127.0.0.1:8080/usmle-step1-study.html](http://127.0.0.1:8080/usmle-step1-study.html).

## Deployment (GitHub Pages)

1. Push this repo to GitHub
2. Enable GitHub Pages (Settings -> Pages -> deploy from branch)
3. Access at `https://<username>.github.io/<repo>/usmle-step1-study.html`
