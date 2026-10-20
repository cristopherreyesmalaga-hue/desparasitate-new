# desparasitate-new

Página web estática (`index.html`). Responde siempre en español.

## Crear o rediseñar la web

Usa la skill `/crear-web`: encadena getdesign.md (`DESIGN.md`), `design-taste-frontend`,
`image-to-code`, `playwright-cli` y `web-design-guidelines`.

Las referencias del usuario (imágenes, vídeos, enlaces) llegan adjuntas en el chat o en la carpeta
`referencias/`; revísalas antes de diseñar.

## Entorno

- El hook `.claude/hooks/session-start.sh` instala `playwright-cli` y define `CHROME_PATH` al abrir
  cada sesión en la nube.
- Ejecuta `playwright-cli` desde la raíz del repositorio para que use `.playwright/cli.config.json`.
- La red bloquea sitios externos y CDN: prueba la página en `http://localhost` y copia las librerías
  a `assets/vendor/` en vez de enlazarlas por CDN.
- Los cambios se suben directamente a `main` salvo que se pida otra cosa.
