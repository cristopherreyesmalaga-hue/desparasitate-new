---
name: crear-web
description: >-
  Flujo completo para crear o rediseñar una página web profesional con un efecto visual llamativo:
  elige un estilo de getdesign.md (DESIGN.md), dirige el arte con design-taste-frontend, genera el
  diseño con image-to-code cuando haya generador de imágenes, añade animaciones, comprueba el
  resultado en el navegador con playwright-cli, audita con web-design-guidelines y sube los cambios.
  Úsala cuando el usuario escriba /crear-web o pida "crear una web", "hacer una landing", "rediseñar
  la página" o "dejarla espectacular", también cuando adjunte imágenes, vídeos o enlaces de webs
  como referencia.
---

# crear-web

Encadena las skills del repositorio en un solo flujo. Sigue los pasos en orden y no te saltes la
revisión visual: una página no está terminada hasta que la has visto en capturas.

## 0. Brief

Del mensaje del usuario saca: tema o producto, público, la única acción que debe hacer el visitante
(comprar, escribir por WhatsApp, reservar…), idioma y si hay estilo de marca o fotos propias.
Si falta algo que bloquea (por ejemplo, el nombre del producto), pregunta una sola vez y en una sola
pregunta. Lo demás, decídelo y dilo en una línea.

Por defecto la página es `index.html` en la raíz, en HTML + CSS + JS sin framework.

## 0.5 Referencias del usuario

El usuario puede dar referencias de tres formas: adjuntas en el chat, subidas a la carpeta
`referencias/` del repositorio, o como enlaces (en el mensaje o en `referencias/enlaces.md`).
Revisa siempre las tres fuentes antes de elegir estilo.

- **Imágenes** (capturas de webs, fotos de producto, logos): míralas una a una. Las adjuntas en el
  chat cópialas a `referencias/` con un nombre descriptivo para que queden en el proyecto.
- **Vídeos** (grabaciones de pantalla de una web, reels): extrae fotogramas y míralos. Si existe la
  skill `video-frame-extractor`, úsala; si no:

  ```bash
  mkdir -p referencias/fotogramas
  ffmpeg -loglevel error -i referencias/<video> -vf "select='gt(scene,0.25)',scale=1280:-2" \
    -vsync vfr referencias/fotogramas/<video>-%03d.jpg
  ```

  Si salen menos de 6 fotogramas, repite con `-vf "fps=1/2,scale=1280:-2"`. Fíjate sobre todo en el
  movimiento: qué se anima, cómo entra el contenido, qué pasa al hacer scroll.
- **Enlaces**: intenta leerlos con WebFetch. La red de la sesión bloquea muchos sitios; si falla,
  dilo y pide al usuario una captura de pantalla completa o una grabación de pantalla de esa web.
  No describas una web que no has podido ver.

De cada referencia apunta en `referencias/notas.md`: qué tomar (paleta, tipografía, composición,
un efecto concreto) y qué no. Las referencias **mandan sobre el estilo de getdesign.md**: si el
usuario trae referencias claras, elige en el paso 1 el `DESIGN.md` más parecido a ellas y ajústalo,
o sáltate getdesign y extrae el estilo de las referencias.

Nunca copies textos, logos ni imágenes de una web de referencia en la página final: inspírate en
ellas. Las imágenes propias del usuario (fotos de su producto, su logo) sí se usan, copiadas a
`assets/`.

## 1. Estilo base (getdesign.md)

Si el usuario nombra un estilo, úsalo. Si no, ejecuta `npx -y getdesign list`, elige el que mejor
encaje con el tema y explica por qué en una línea. Después:

```bash
npx -y getdesign add <estilo> --force
```

Esto crea `DESIGN.md`. Es una plantilla **inspirada** en una marca: usa sus colores, tipografía,
espaciado y componentes, pero nunca su nombre, logo ni textos.

Reparto de autoridad: `DESIGN.md` manda en colores, tipografía y componentes;
`design-taste-frontend` manda en idea, composición y orden de secciones. Pásale a `draw.mjs`
`--keep palette,type` para que no los sustituya.

## 2. Dirección de arte (design-taste-frontend)

Carga la skill `design-taste-frontend` y sigue su "run" completo: inventario del tema, argumento por
secciones, `draw.mjs` con tres direcciones, elección justificada. El navegador ya está configurado
por el hook de inicio (`CHROME_PATH`).

La red de la sesión bloquea la mayoría de sitios externos, así que `assets.mjs` (descarga de fotos
de archivos públicos) puede fallar. En ese caso usa las fotos del usuario o genera las imágenes con
el generador conectado (paso 3), y dilo.

## 3. Diseño visual previo (image-to-code), opcional

Si hay un generador de imágenes conectado (por ejemplo Higgsfield; búscalo con ToolSearch), carga
`image-to-code` y genera primero el hero y las secciones clave como imágenes grandes, una por
sección. Después impleméntalas lo más fielmente posible. Si no hay generador, sáltate este paso y
dilo.

Las imágenes que la página use de verdad (fotos de producto, fondos) guárdalas en `assets/`.

## 4. Construir con efecto visual

Construye la página siguiendo la dirección y `DESIGN.md`. Para el efecto llamativo, elige **dos o
tres** recursos que sirvan a la idea, no todos:

- Entrada del hero coreografiada (titular por líneas, imagen que se revela).
- Animaciones al hacer scroll (aparición escalonada, parallax suave, secciones fijadas).
- Textos o números grandes que se animan.
- Transiciones de color de fondo entre secciones.
- Microinteracciones en botones y tarjetas (hover, pulsación).

Reglas:
- Librerías (por ejemplo GSAP o Lenis): instálalas con `npm install` y copia el archivo a
  `assets/vendor/`. La red de la sesión bloquea los CDN, así que un `<script>` de CDN no cargaría
  en las capturas.
- Respeta `prefers-reduced-motion`: sin animaciones grandes para quien las desactiva.
- Anima solo `transform` y `opacity` y no bloquees el contenido: la página debe leerse aunque falle
  el JavaScript.
- El botón principal visible en el primer pantallazo, en móvil y escritorio.

## 5. Mirar y corregir (playwright-cli)

Sirve la página en local y ejecuta `playwright-cli` desde la raíz del repositorio, donde está
`.playwright/cli.config.json`:

```bash
python3 -m http.server 8765 &
playwright-cli open http://localhost:8765/
playwright-cli resize 1440 900 && playwright-cli screenshot --filename=.playwright-cli/desktop.png
playwright-cli resize 390 844  && playwright-cli screenshot --filename=.playwright-cli/mobile.png
playwright-cli close
```

Mira las capturas (también a mitad de scroll para ver las animaciones), aplica la rúbrica de
`design-taste-frontend` y su `inspect.mjs`, corrige y repite. Máximo tres vueltas; si algo sigue
mal, dilo. Al terminar, detén el servidor.

## 6. Auditoría (web-design-guidelines)

Carga `web-design-guidelines`, revisa `index.html` y corrige los fallos de accesibilidad y
usabilidad: contraste, textos alternativos, foco visible, tamaños táctiles, etiquetas de formulario,
`lang`, metaetiquetas y título.

## 7. Entrega

- Muestra al usuario las capturas finales de escritorio y móvil.
- Haz commit en `main` y `git push origin main`, salvo que el usuario pida una rama o un pull
  request.
- Resume en pocas líneas: estilo elegido, idea de la página, efectos usados y lo que quedó pendiente.
