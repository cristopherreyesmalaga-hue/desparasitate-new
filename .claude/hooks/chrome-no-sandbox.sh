#!/bin/bash
# Chromium del entorno en la nube; corre como root, así que necesita --no-sandbox.
exec /opt/pw-browsers/chromium --no-sandbox "$@"
