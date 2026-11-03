(() => {
  "use strict";

  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Idioma ----------
  // El inglés vive en el HTML; aquí solo el español. Se guarda la elección de cada visitante.
  const ES = {
    docTitle: "LProdigy Cabinet & Granite — Gabinetes y encimeras de cocina",
    docDesc: "LProdigy Cabinet & Granite instala gabinetes de cocina, encimeras de piedra, herrajes decorativos y organizadores. Mira una instalación real, de la obra a la cocina terminada.",
    skip: "Saltar al contenido",
    navLabel: "Principal",
    navProcess: "La instalación",
    navServices: "Servicios",
    navStone: "Encimeras",
    navWork: "Trabajos",
    ctaHeader: "Presupuesto gratis",
    heroEyebrow: "Instalación de gabinetes y granito",
    heroTitle: "Mira cómo se arma una cocina",
    heroLead: "Imágenes reales de una de nuestras instalaciones: del piso en obra a la cocina terminada.",
    scroll: "Desliza",
    alt1: "La sala antes de la instalación: piso en obra, paredes desnudas y una escalera",
    s1Eyebrow: "Gabinetes",
    s1Title: "Hasta el techo",
    s1Text: "Nuestro equipo cuelga cada gabinete nivelado y a plomo, con vitrinas superiores que llegan hasta el techo.",
    alt2: "Un instalador colgando gabinetes blancos tipo shaker con vitrinas superiores",
    s2Eyebrow: "La base",
    s2Title: "A escuadra y lista para la piedra",
    s2Text: "Bases e isla en su sitio, listas para recibir la encimera.",
    alt3: "Gabinetes base instalados, listos para la encimera",
    s3Eyebrow: "La piedra",
    s3Title: "Llega la encimera",
    s3Text: "La isla y los mesones reciben su piedra: aquí, una superficie negra con vetas blancas marcadas.",
    alt4: "Instalador junto a la isla con su nueva encimera de piedra negra",
    s4Eyebrow: "Detalles y luz",
    s4Title: "Herrajes, grifo y luz",
    s4Text: "Tiradores y grifo en negro mate, y luz escondida bajo los gabinetes.",
    alt5: "Grifo extraíble negro mate sobre un fregadero de acero",
    s5Eyebrow: "La cocina terminada",
    s5Title: "Lista para cocinar",
    s5Text: "La misma sala, terminada. La tuya puede ser la siguiente.",
    alt6: "La cocina terminada: gabinetes blancos, encimeras negras con vetas y taburetes en la isla",
    ctaStart: "Empieza tu cocina",
    wayEyebrow: "Así trabaja LProdigy",
    wayTitle: "Cuidado en cada instalación",
    wayText: "De cocinas modernas y minimalistas a estilos clásicos y detallados, diseñamos cada una para su espacio, y la instalamos nosotros.",
    p1Word: "Servicio",
    p1Label: "Excepcional",
    p2Word: "Precios",
    p2Label: "Exclusivos",
    p3Word: "Experiencia",
    p3Label: "En la industria",
    svcEyebrow: "Lo que hacemos",
    svcTitle: "La cocina completa",
    svcIntro: "Gabinetes, piedra, herrajes y organización: los eliges con nosotros y los instala nuestro equipo.",
    altSvc1: "Cocina blanca tipo shaker con gabinetes altos y una isla en cascada",
    svc1Title: "Gabinetes y estilos de puerta",
    svc1Text: "Modelos de gabinete pensados para aprovechar cada centímetro, de minimalistas y contemporáneos a tradicionales y detallados, en colores de puerta elegidos para tu diseño.",
    altSwatches: "Muestras de puertas en blanco, madera natural, espresso, carbón y gris",
    altSvc2: "Isla con encimera de piedra de vetas marcadas en una cocina blanca",
    svc2Title: "Encimeras de piedra",
    svc2Text: "Mármol, granito, cuarcita, cuarzo, porcelana y piedras semipreciosas: duraderas, elegantes y fáciles de mantener.",
    altSvc3: "Tirador dorado cepillado y pomos redondos en cajones blancos",
    svc3Title: "Herrajes decorativos",
    svc3Text: "Tiradores y pomos de diseño para cada estilo: la pieza que completa tu espacio.",
    svc4Title: "Organizadores",
    svc4Text: "Almacenaje práctico y bonito que mantiene la cocina en orden:",
    o1: "Basureros",
    o2: "Cajones",
    o3: "Extraíbles",
    o4: "Esquineros",
    o5: "Almacenaje de pared",
    o6: "Despensa",
    o7: "Portacopas",
    o8: "Cuchilleros extraíbles",
    o9: "Bandejas en puerta",
    o10: "Toalleros",
    stoneEyebrow: "Encimeras",
    stoneTitle: "Elige tu piedra",
    stoneTabs: "Materiales de encimera",
    mMarble: "Mármol",
    mGranite: "Granito",
    mQuartzite: "Cuarcita",
    mQuartz: "Cuarzo",
    mPorcelain: "Porcelana",
    mGem: "Semipreciosas",
    mGemFull: "Piedras semipreciosas",
    mMarbleText: "Una de las superficies más populares y elegantes desde hace años. Un material natural que da a tu cocina un toque sofisticado y exclusivo.",
    mGraniteText: "Una de las piedras más resistentes y atractivas de la naturaleza: una gran elección dentro y fuera de casa, con elegancia y calidad sin igual.",
    mQuartziteText: "Más resistente que el granito, con el aspecto de un mármol exótico. Su dureza la mantiene bonita por años, sin rayas ni marcas.",
    mQuartzText: "90 % mineral de cuarzo y 10 % resina: resiste manchas y grietas y no necesita mantenimiento. Las placas jumbo (127×64) incluyen Calacatta Bergamo y Calacatta Girgi.",
    mPorcelainText: "Hecha de caolín rico en caolinita, sílice y feldespato, que le dan una resistencia excepcional, para superficies elegantes y duraderas.",
    mGemText: "Cuarzo, amatista y ágata natural, valoradas desde la antigüedad, para diseñar superficies que convierten la cocina en protagonista.",
    altVideo: "Recorrido por una cocina blanca terminada con encimeras y piso tipo mármol",
    capVideo: "Una cocina LProdigy terminada",
    videoPause: "Pausar video",
    videoPlay: "Reproducir video",
    workEyebrow: "Cocinas recientes",
    workTitle: "Cocinas a la medida de tus sueños",
    workIntro: "Modernas y minimalistas, clásicas y detalladas: cada una diseñada para su espacio.",
    altF1: "Cocina blanca tipo shaker con vitrinas iluminadas, isla grande y piso tipo mármol",
    capF1: "Shaker blanco · vitrinas iluminadas",
    altF2: "Pared del fregadero con salpicadero tipo mármol de piso a techo enmarcando la ventana",
    capF2: "Salpicadero de altura completa",
    altF3: "Cocina blanca con isla espresso y encimeras de piedra",
    capF3: "Isla espresso",
    altG1: "Gabinetes color topo con una isla de vetas blancas",
    capG1: "Topo y piedra blanca",
    altG2: "Isla oscura con encimera de cuarzo blanco y fregadero bajo encimera",
    capG2: "Isla oscura, encimera clara",
    altG3: "Isla de madera natural con encimera de granito",
    capG3: "Isla de madera natural",
    altG4: "Gabinetes grises enmarcando una ventana, con vitrinas",
    capG4: "Gris y vidrio",
    altG5: "Cocina en U color topo con campana de acero",
    capG5: "En U, color topo",
    altG6: "Cocina blanca con campana de acero y largas filas de cajones",
    capG6: "Blanca, de pared a pared",
    contactEyebrow: "Contáctanos",
    contactTitle: "Construyamos tu cocina",
    contactLead: "Cuéntanos sobre tu espacio y lo que tienes en mente: gabinetes, piedra, herrajes. Te respondemos con un presupuesto gratis.",
    dtForm: "Formulario en línea",
    ddForm: "lprodigy.com",
    estEyebrow: "Presupuesto gratis",
    estTitle: "Pide tu cotización",
    estText: "Envía una foto de tu cocina como está hoy y una idea de lo que quieres: colores, piedra, con isla o sin ella.",
    estCta: "Pedir mi presupuesto gratis",
    shopLink: "Visita nuestra tienda",
  };

  const KINDS = [
    ["[data-i18n]", "i18n", (el) => el.textContent, (el, v) => { el.textContent = v; }],
    ["[data-i18n-html]", "i18nHtml", (el) => el.innerHTML, (el, v) => { el.innerHTML = v; }],
    ["[data-i18n-alt]", "i18nAlt", (el) => el.alt, (el, v) => { el.alt = v; }],
    ["[data-i18n-aria]", "i18nAria", (el) => el.getAttribute("aria-label"), (el, v) => { el.setAttribute("aria-label", v); }],
  ];
  const EN = new Map();
  let onLang = null;
  const meta = document.querySelector('meta[name="description"]');
  const enDoc = { title: document.title, desc: meta ? meta.content : "" };

  function setLang(lang) {
    for (const [sel, key, get, set] of KINDS) {
      for (const el of document.querySelectorAll(sel)) {
        if (!EN.has(el)) EN.set(el, {});
        const store = EN.get(el);
        if (!(key in store)) store[key] = get(el);
        const k = el.dataset[key];
        set(el, lang === "es" && ES[k] != null ? ES[k] : store[key]);
      }
    }
    root.lang = lang;
    document.title = lang === "es" ? ES.docTitle : enDoc.title;
    if (meta) meta.content = lang === "es" ? ES.docDesc : enDoc.desc;
    for (const b of document.querySelectorAll("[data-lang]")) b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    try { localStorage.setItem("lp-lang", lang); } catch (e) { /* sin almacenamiento: no pasa nada */ }
    if (onLang) onLang();
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  }

  let saved = null;
  try { saved = localStorage.getItem("lp-lang"); } catch (e) { /* idem */ }
  const initial = saved || ((navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en");
  if (initial === "es") setLang("es");
  for (const b of document.querySelectorAll("[data-lang]")) b.addEventListener("click", () => setLang(b.dataset.lang));

  // ---------- Selector de piedras ----------
  const tabs = [...document.querySelectorAll('.stone-tabs [role="tab"]')];
  const panels = tabs.map((t) => document.getElementById(t.getAttribute("aria-controls")));
  function selectTab(i, focus) {
    tabs.forEach((t, j) => {
      const on = i === j;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      panels[j].hidden = !on;
      panels[j].classList.toggle("is-shown", on);
    });
    if (focus) tabs[i].focus();
  }
  if (tabs.length) {
    document.querySelector(".stone-tabs").classList.add("is-live");
    for (const p of panels) p.querySelector("h3").classList.add("visually-hidden");
    selectTab(0, false);
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => selectTab(i, false));
      t.addEventListener("keydown", (e) => {
        const n = tabs.length;
        const next = { ArrowRight: (i + 1) % n, ArrowLeft: (i - 1 + n) % n, Home: 0, End: n - 1 }[e.key];
        if (next != null) { e.preventDefault(); selectTab(next, true); }
      });
    });
  }

  // ---------- Video de la cocina terminada ----------
  const video = document.querySelector(".stone-media video");
  const vbtn = document.querySelector(".video-toggle");
  if (video && vbtn) {
    let userPaused = reduced;
    const label = () => {
      const playing = !video.paused;
      vbtn.setAttribute("aria-pressed", String(!playing));
      const es = root.lang === "es";
      vbtn.setAttribute("aria-label", playing ? (es ? ES.videoPause : "Pause video") : (es ? ES.videoPlay : "Play video"));
    };
    video.addEventListener("play", label);
    video.addEventListener("pause", label);
    vbtn.addEventListener("click", () => {
      if (video.paused) { userPaused = false; video.play().catch(() => {}); } else { userPaused = true; video.pause(); }
    });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !userPaused) video.play().catch(() => {});
        else if (!e.isIntersecting) video.pause();
      }, { threshold: 0.25 }).observe(video);
    }
    onLang = label;
    label();
  }

  if (reduced) return;

  // ---------- Apariciones al hacer scroll ----------
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    const els = [...document.querySelectorAll(".reveal")];
    const inView = els.map((el) => el.getBoundingClientRect().top < window.innerHeight);
    els.forEach((el, i) => (inView[i] ? el.classList.add("is-in") : io.observe(el)));
    root.classList.add("motion");
  }

  // ---------- La instalación: la escena se fija y las etapas avanzan con el scroll ----------
  const { gsap, ScrollTrigger } = window;
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  root.classList.add("scene");

  const stage = document.querySelector(".build-stage");
  const steps = [...document.querySelectorAll(".build .step")];
  const bgs = [...document.querySelectorAll(".build-bg img")];
  const rail = [...document.querySelectorAll(".build-rail li")];
  const parts = (step) => ({ media: step.querySelector(".step-media"), box: step.querySelector(".step-copy"), copy: [...step.querySelector(".step-copy").children] });
  const headerH = () => document.querySelector(".site-header").offsetHeight;

  // Entrada de la primera pantalla.
  const intro = parts(steps[0]);
  gsap.from(intro.media, { opacity: 0, scale: 1.08, duration: 1.2, ease: "power3.out" });
  gsap.from(intro.copy, { opacity: 0, y: 34, duration: 0.7, stagger: 0.08, ease: "power3.out", delay: 0.05 });

  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    scrollTrigger: {
      trigger: stage,
      start: () => `top top+=${headerH()}`,
      end: () => `+=${(steps.length - 1) * window.innerHeight * 0.85}`,
      pin: true,
      scrub: 0.6,
      snap: { snapTo: "labels", inertia: false, duration: { min: 0.2, max: 0.7 }, delay: 0.12, ease: "power1.inOut" },
      invalidateOnRefresh: true,
      onUpdate(self) {
        const idx = Math.round(self.progress * (steps.length - 1));
        steps.forEach((s, i) => s.classList.toggle("is-active", i === idx));
        rail.forEach((r, i) => r.classList.toggle("is-on", i <= idx));
      },
    },
  });

  tl.addLabel("s0", 0);
  for (let i = 1; i < steps.length; i++) {
    const prev = parts(steps[i - 1]);
    const cur = parts(steps[i]);
    const t = i - 1;
    tl.to(prev.copy, { autoAlpha: 0, y: -26, duration: 0.3, stagger: 0.03 }, t + 0.1)
      .to(prev.box, { autoAlpha: 0, duration: 0.3 }, t + 0.2)
      .fromTo(cur.box, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, t + 0.45)
      .to(prev.media, { autoAlpha: 0, scale: 0.94, duration: 0.45 }, t + 0.2)
      .to(bgs[i - 1], { autoAlpha: 0, duration: 0.6 }, t + 0.2)
      .fromTo(bgs[i], { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, t + 0.2)
      .fromTo(cur.media, { autoAlpha: 0, scale: 1.08 }, { autoAlpha: 1, scale: 1, duration: 0.55 }, t + 0.4)
      .fromTo(cur.copy, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.06 }, t + 0.55)
      .addLabel(`s${i}`, i);
  }
  steps[0].classList.add("is-active");
  rail[0]?.classList.add("is-on");
})();
