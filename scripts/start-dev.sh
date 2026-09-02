#!/usr/bin/env bash
# Per-boot startup: start the Vite dev server if it is not already healthy, then return.
set -euo pipefail

PORT="${STUDYMLE_PORT:-5173}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG="${STUDYMLE_LOG:-/tmp/studymle-dev.log}"
HEALTH_URL="http://127.0.0.1:${PORT}"

is_ready() {
  curl -sf "$HEALTH_URL" >/dev/null
}

if is_ready; then
  echo "StudyMLE already serving on ${HEALTH_URL}"
  exit 0
fi

cd "$ROOT"

if [[ ! -d node_modules ]]; then
  echo "node_modules missing; run the install command first" >&2
  exit 1
fi

nohup npm run dev -- --host 0.0.0.0 --port "$PORT" >"$LOG" 2>&1 &

for _ in $(seq 1 60); do
  if is_ready; then
    echo "StudyMLE ready on ${HEALTH_URL}"
    exit 0
  fi
  sleep 1
done

echo "StudyMLE failed to become ready on ${HEALTH_URL}" >&2
tail -n 80 "$LOG" >&2 || true
exit 1
