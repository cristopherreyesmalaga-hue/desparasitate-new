#!/bin/bash
# Prepara el entorno de las sesiones en la nube para el flujo /crear-web.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# playwright-cli para abrir la página y sacar capturas.
if ! command -v playwright-cli >/dev/null 2>&1; then
  npm install -g @playwright/cli@latest >/dev/null 2>&1
fi

# Navegador para los scripts de design-taste-frontend (inspect.mjs, capturas).
if [ -n "${CLAUDE_ENV_FILE:-}" ] && [ -x /opt/pw-browsers/chromium ]; then
  echo "export CHROME_PATH=$CLAUDE_PROJECT_DIR/.claude/hooks/chrome-no-sandbox.sh" >> "$CLAUDE_ENV_FILE"
fi
