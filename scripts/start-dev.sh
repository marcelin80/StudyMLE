#!/usr/bin/env bash
set -euo pipefail

PORT="${STUDYMLE_PORT:-8080}"
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

nohup python3 -m http.server "$PORT" --bind 0.0.0.0 >"$LOG" 2>&1 &

for _ in $(seq 1 30); do
  if is_ready; then
    echo "StudyMLE ready on ${HEALTH_URL}"
    exit 0
  fi
  sleep 1
done

echo "StudyMLE failed to become ready on ${HEALTH_URL}" >&2
tail -n 40 "$LOG" >&2 || true
exit 1
