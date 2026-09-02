# StudyMLE

A local study studio for machine learning engineering: short tracks on supervised models, production systems, and practical probability.

## Development

Requires Node.js 22+.

```bash
npm install
npm run dev
```

The Vite app listens on [http://127.0.0.1:5173](http://127.0.0.1:5173).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Typecheck and produce a production bundle |
| `npm run preview` | Serve the production bundle |
| `npm run typecheck` | Typecheck only |

Cloud Agent environments run `npm install` during snapshot setup and `bash scripts/start-dev.sh` on each boot. That script starts Vite if port 5173 is not already healthy, waits for a successful HTTP response, and then returns.
