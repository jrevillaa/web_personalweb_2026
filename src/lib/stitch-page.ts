import cotizacionHtml from "../stitch/cotizacion.html?raw";
import experienciaHtml from "../stitch/experiencia.html?raw";
import homeHtml from "../stitch/home.html?raw";
import proyectoScalelmsHtml from "../stitch/proyecto-scalelms.html?raw";
import serviciosHtml from "../stitch/servicios.html?raw";
import utilidadesHtml from "../stitch/utilidades.html?raw";
import tokensCss from "../styles/tokens.css?raw";

const stitchPages = {
  "cotizacion.html": cotizacionHtml,
  "experiencia.html": experienciaHtml,
  "home.html": homeHtml,
  "proyecto-scalelms.html": proyectoScalelmsHtml,
  "servicios.html": serviciosHtml,
  "utilidades.html": utilidadesHtml,
} as const;

const topNavByPage = {
  "cotizacion.html": "contacto",
  "experiencia.html": "experiencia",
  "home.html": "inicio",
  "proyecto-scalelms.html": "experiencia",
  "servicios.html": "servicios",
  "utilidades.html": "utilidades",
} as const;

const topNavItems = [
  { key: "inicio", label: "Inicio", href: "/es/" },
  { key: "servicios", label: "Servicios", href: "/es/servicios" },
  { key: "xray", label: "X-Ray", href: "/es/xray" },
  { key: "experiencia", label: "Experiencia", href: "/es/experiencia" },
  { key: "casos", label: "Casos", href: "/es/casos" },
  { key: "utilidades", label: "Utilidades", href: "/es/utilidades" },
  { key: "contacto", label: "Contacto", href: "/es/contacto" },
];

function buildUnifiedNav(filename: keyof typeof stitchPages) {
  const activeKey = topNavByPage[filename];
  const desktopLinks = topNavItems
    .map(({ key, label, href }) => {
      const active =
        key === activeKey
          ? "text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-700 dark:border-blue-400 pb-1"
          : "text-slate-600 dark:text-slate-400 font-medium";

      return `<a class="${active} hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200" href="${href}">${label}</a>`;
    })
    .join("");

  const mobileLinks = topNavItems
    .map(({ key, label, href }) => {
      const active =
        key === activeKey
          ? "text-primary bg-primary/10"
          : "text-on-surface";

      return `<a class="stitch-mobile-link ${active}" href="${href}">${label}</a>`;
    })
    .join("");

  return `
<header class="stitch-topbar fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
  <nav class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
    <a class="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100" href="/es/">Jair Revilla</a>
    <div class="hidden md:flex items-center gap-8">
      ${desktopLinks}
      <a class="bg-gradient-to-r from-primary to-primary-container text-white px-6 py-2.5 rounded-xl font-bold hover:opacity-90 transition-all active:scale-95" href="/es/contacto">Solicitar Cotización</a>
    </div>
    <button class="md:hidden text-on-surface transition-transform duration-300" type="button" aria-label="Abrir menú" data-stitch-menu-toggle>
      <span class="material-symbols-outlined">menu</span>
    </button>
  </nav>
  <div class="stitch-mobile-panel md:hidden" data-stitch-mobile-panel>
    <div class="stitch-mobile-inner">
      ${mobileLinks}
      <a class="stitch-mobile-cta" href="/es/contacto">Solicitar Cotización</a>
    </div>
  </div>
</header>`.trim();
}

const animationStyles = `
<style id="stitch-global-motion">
  ${tokensCss}

  html {
    scroll-behavior: smooth;
  }

  body {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity .55s ease, transform .55s ease;
  }

  body.stitch-ready {
    opacity: 1;
    transform: translateY(0);
  }

  body.stitch-leaving {
    opacity: 0;
    transform: translateY(12px);
  }

  .stitch-topbar {
    transition: background-color .35s ease, box-shadow .35s ease, transform .35s ease;
  }

  .stitch-mobile-panel {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height .35s ease, opacity .25s ease;
    border-top: 1px solid var(--outline-soft);
    background: var(--bg-glass-strong);
    backdrop-filter: blur(20px);
  }

  .stitch-mobile-panel.is-open {
    max-height: 360px;
    opacity: 1;
  }

  .stitch-mobile-inner {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 32px 24px;
  }

  .stitch-mobile-link,
  .stitch-mobile-cta {
    border-radius: 12px;
    padding: 12px 14px;
    font-weight: 700;
    transition: transform .25s ease, background-color .25s ease, color .25s ease;
  }

  .stitch-mobile-link:hover,
  .stitch-mobile-cta:hover {
    transform: translateX(4px);
  }

  .stitch-mobile-cta {
    background: var(--gradient-primary);
    color: var(--surface-lowest);
    text-align: center;
  }

  .stitch-reveal {
    opacity: 0;
    transform: translateY(32px) scale(.985);
    transition: opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1);
    will-change: opacity, transform;
  }

  .stitch-reveal.stitch-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .stitch-lift {
    transition: transform .35s ease, box-shadow .35s ease, opacity .35s ease;
  }

  .stitch-lift:hover {
    transform: translateY(-6px);
  }

  .stitch-profile-card {
    transform-style: preserve-3d;
    transition: transform .22s ease, box-shadow .28s ease;
    will-change: transform;
  }

  .stitch-profile-card img {
    transition: transform .35s ease;
    will-change: transform;
  }

  .stitch-profile-card:hover img {
    transform: scale(1.035);
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    body,
    .stitch-topbar,
    .stitch-mobile-panel,
    .stitch-reveal,
    .stitch-lift,
    .stitch-profile-card,
    .stitch-profile-card img {
      transition: none !important;
      animation: none !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
</style>`.trim();

const animationScript = `
<script id="stitch-global-motion-script">
  (() => {
    const start = () => {
      document.body.classList.add("stitch-ready");

      const menuButton = document.querySelector("[data-stitch-menu-toggle]");
      const mobilePanel = document.querySelector("[data-stitch-mobile-panel]");

      if (menuButton && mobilePanel) {
        menuButton.addEventListener("click", () => {
          mobilePanel.classList.toggle("is-open");
        });
      }

      const revealTargets = Array.from(
        document.querySelectorAll("main > section, main > header, main > div, section > div, article, .group, .rounded-xl, .rounded-2xl, .rounded-3xl")
      ).filter((element, index) => {
        if (!(element instanceof HTMLElement)) return false;
        if (element.closest("[data-stitch-mobile-panel]")) return false;
        if (element.dataset.stitchAnimated === "true") return false;
        element.dataset.stitchAnimated = "true";
        element.classList.add("stitch-reveal");
        element.style.transitionDelay = (index % 6) * 55 + "ms";
        return true;
      });

      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("stitch-visible");
            observer.unobserve(entry.target);
          }
        }
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

      revealTargets.forEach((element) => observer.observe(element));

      const profileCard = document.querySelector(".stitch-profile-card");
      if (profileCard instanceof HTMLElement) {
        profileCard.addEventListener("pointermove", (event) => {
          const rect = profileCard.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width;
          const py = (event.clientY - rect.top) / rect.height;
          const rotateY = (px - 0.5) * 14;
          const rotateX = (0.5 - py) * 14;
          profileCard.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) translateY(-6px)\`;
          profileCard.style.boxShadow = "var(--shadow-primary-strong)";
        });

        const resetProfileCard = () => {
          profileCard.style.transform = "";
          profileCard.style.boxShadow = "";
        };

        profileCard.addEventListener("pointerleave", resetProfileCard);
        profileCard.addEventListener("pointerup", resetProfileCard);
      }

      document.querySelectorAll("a[href^='/']").forEach((link) => {
        link.addEventListener("click", (event) => {
          const anchor = event.currentTarget;
          if (!(anchor instanceof HTMLAnchorElement)) return;
          if (anchor.target === "_blank") return;
          const href = anchor.getAttribute("href");
          if (!href || href.startsWith("#")) return;
          document.body.classList.add("stitch-leaving");
        });
      });
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", start, { once: true });
    } else {
      start();
    }
  })();
</script>`.trim();

const sharedReplacements: Array<[string | RegExp, string]> = [
  ['<html class="light" lang="en">', '<html class="light" lang="es">'],
  ['<title>Services | Jair Revilla - Solutions Architect</title>', '<title>Servicios | Jair Revilla - Arquitecto de Soluciones</title>'],
  ['<title>ScaleLMS Framework - Jair Revilla</title>', '<title>Detalle de Proyecto - ScaleLMS | Jair Revilla</title>'],
  ['href="#">Servicios</a>', 'href="/es/servicios">Servicios</a>'],
  ['href="#">Services</a>', 'href="/es/servicios">Servicios</a>'],
  ['href="#">Utilidades</a>', 'href="/es/utilidades">Utilidades</a>'],
  ['href="#">Utilities</a>', 'href="/es/utilidades">Utilidades</a>'],
  ['href="#">Experiencia</a>', 'href="/es/experiencia">Experiencia</a>'],
  ['href="#">Experience</a>', 'href="/es/experiencia">Experiencia</a>'],
  ['href="#">X-Ray</a>', 'href="/es/xray">X-Ray</a>'],
  ['href="#">Casos</a>', 'href="/es/casos">Casos</a>'],
  ['href="#">Solicitar Cotización</a>', 'href="/es/contacto">Solicitar Cotización</a>'],
  [
    /<button([^>]*)>\s*Solicitar Cotización\s*<\/button>/g,
    '<a$1 href="/es/contacto">Solicitar Cotización</a>',
  ],
  ['href="#">Request Quote</a>', 'href="/es/contacto">Solicitar Cotización</a>'],
  [
    /<button([^>]*)>\s*Request Quote\s*<\/button>/g,
    '<a$1 href="/es/contacto">Solicitar Cotización</a>',
  ],
  ['href="#">Contacto</a>', 'href="/es/contacto">Contacto</a>'],
  ['href="#">Contact</a>', 'href="/es/contacto">Contacto</a>'],
  ['href="#">LinkedIn</a>', 'href="https://linkedin.com/in/jrevillaa/" target="_blank" rel="noopener noreferrer">LinkedIn</a>'],
  ['href="#">GitHub</a>', 'href="https://github.com/jrevillaa" target="_blank" rel="noopener noreferrer">GitHub</a>'],
  ['href="#">Privacidad</a>', 'href="/es/contacto">Privacidad</a>'],
  ['href="#">Privacy</a>', 'href="/es/contacto">Privacidad</a>'],
  ['© 2024 Jair Revilla. Solutions Architect.', '© 2024 Jair Revilla. Arquitecto de Soluciones.'],
  ['Solutions Architect.', 'Arquitecto de Soluciones.'],
  ['ENGINEERING SCALE', 'INGENIERÍA A ESCALA'],
  ['Advanced Moodle <br/><span class="text-primary-container">Architecture &amp; Strategy.</span>', 'Arquitectura Moodle <br/><span class="text-primary-container">y Estrategia.</span>'],
  ['High-performance educational ecosystems designed for institutional scale. From deep SGA integrations to seamless cloud migrations, we build the technical foundations for global learning.', 'Ecosistemas educativos de alto rendimiento diseñados para escala institucional. Desde integraciones profundas con SGA hasta migraciones cloud sin fricción, construyo las bases técnicas para el aprendizaje a gran escala.'],
  ['Moodle Solutions Architecture', 'Arquitectura de Soluciones Moodle'],
  ['A bespoke architectural blueprint tailored to your institutional goals. We define the tech stack, server topology, and database optimization strategies required to support thousands of concurrent users without performance degradation.', 'Un plano arquitectónico a medida alineado con los objetivos de tu institución. Defino el stack tecnológico, la topología de servidores y las estrategias de optimización de base de datos necesarias para soportar miles de usuarios concurrentes sin degradación.'],
  ['Custom server-side optimization &amp; caching strategies (Redis/Memcached).', 'Optimización avanzada del servidor y estrategias de caché (Redis/Memcached).'],
  ['High-availability cluster design and multi-tier environment planning.', 'Diseño de clústeres de alta disponibilidad y planificación de entornos multinivel.'],
  ['SGA &amp; ERP Integrations', 'Integraciones SGA y ERP'],
  ['Bridge the gap between your student management systems and the virtual classroom. We specialize in real-time data synchronization between Moodle and systems like SAP, Oracle, and Banner.', 'Conecto tus sistemas de gestión académica con el aula virtual. Me especializo en sincronización de datos en tiempo real entre Moodle y sistemas como SAP, Oracle y Banner.'],
  ['Analyze Integration', 'Analizar Integración'],
  ['Unified Data Ecosystems', 'Ecosistemas de Datos Unificados'],
  ['Eliminate manual administrative overhead. Our integration frameworks ensure that enrollment, grading, and reporting flow seamlessly across your entire digital infrastructure.', 'Elimina la carga administrativa manual. Estos marcos de integración aseguran que matrícula, calificaciones y reportes fluyan sin fricción en toda tu infraestructura digital.'],
  ['Data Integrity', 'Integridad de Datos'],
  ['Manual Entry', 'Ingreso Manual'],
  ['Service 03', 'Servicio 03'],
  ['Scalability &amp; Resource Planning', 'Escalabilidad y Planificación de Recursos'],
  ['Engineering for the peak. We perform rigorous load testing and resource modeling to ensure your Moodle instance handles final exam surges and global rollouts with ease.', 'Ingeniería preparada para los picos. Realizo pruebas de carga rigurosas y modelado de recursos para asegurar que tu Moodle soporte campañas globales y picos de exámenes con solvencia.'],
  ['Load Testing Protocols', 'Protocolos de Pruebas de Carga'],
  ['Service 04', 'Servicio 04'],
  ['Technical Migrations', 'Migraciones Técnicas'],
  ['Risk-free transition of legacy data and custom plugins to cloud-native or updated Moodle core versions.', 'Transición sin riesgos de datos legados y plugins personalizados hacia arquitecturas cloud-native o versiones actualizadas del core de Moodle.'],
  ['Cloud Lift &amp; Shift', 'Migración Cloud Lift &amp; Shift'],
  ['DB Normalization', 'Normalización de BD'],
  ['Need an architectural audit of your current LMS?', '¿Necesitas una auditoría arquitectónica de tu LMS actual?'],
  ['Get a comprehensive report on your system\'s performance bottlenecks, security vulnerabilities, and scalability readiness.', 'Obtén un informe completo sobre cuellos de botella de rendimiento, vulnerabilidades de seguridad y nivel de preparación para escalar.'],
  ['Schedule Audit', 'Agendar Auditoría'],
  [
    /<button class="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-primary\/20 transition-all active:scale-95">Explorar Servicios<\/button>/g,
    '<a class="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-primary/20 transition-all active:scale-95" href="/es/xray">Explorar Mis Servicios</a>',
  ],
  [
    'class="text-xl text-primary-container mb-12 max-w-2xl mx-auto">Reserve una sesión de descubrimiento técnico hoy mismo y construyamos algo extraordinario juntos.</p>',
    'class="text-xl text-white/85 mb-12 max-w-2xl mx-auto">Reserve una sesión de descubrimiento técnico hoy mismo y construyamos algo extraordinario juntos.</p>',
  ],
  [
    /<button class="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold transition-all hover:bg-surface-container-highest">Casos de Éxito<\/button>/g,
    '<a class="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold transition-all hover:bg-surface-container-highest" href="/es/casos">Casos de Éxito</a>',
  ],
  ['href="#">Ver Todos los Servicios', 'href="/es/xray">Ver Todos los Servicios'],
  ['CASO DE ESTUDIO ARCHITECTURAL', 'CASO DE ESTUDIO ARQUITECTÓNICO'],
  ['AWS Architecture', 'Arquitectura AWS'],
  ['DB Overload', 'Sobrecarga de BD'],
  ['Auto-Scaling &amp; Load Balancing', 'Autoescalado y Balanceo de Carga'],
  ['High Availability', 'Alta Disponibilidad'],
  ['Horizontal Scaling', 'Escalado Horizontal'],
  ['Métricas clave después de la implementación de la arquitectura ScaleLMS.', 'Métricas clave después de implementar la arquitectura ScaleLMS.'],
  ['ScaleLMS Framework', 'ScaleLMS'],
  ['Contactar Ahora', 'Contactar Ahora'],
  ['Project Card 1', 'Proyecto 1'],
  ['Project Card 2', 'Proyecto 2'],
  ['Ver Caso de Estudio', 'Ver Caso de Estudio'],
  ['Ver Proyecto', 'Ver Proyecto'],
];

export function loadStitchHtml(
  filename: keyof typeof stitchPages,
  extraReplacements: Array<[string | RegExp, string]> = [],
) {
  let html = stitchPages[filename];

  for (const [searchValue, replaceValue] of [
    ...sharedReplacements,
    ...extraReplacements,
  ]) {
    html = html.replaceAll(searchValue, replaceValue);
  }

  html = html.replace(
    /<header class="fixed top-0[\s\S]*?<\/header>|<nav class="fixed top-0[\s\S]*?<\/nav>/,
    buildUnifiedNav(filename),
  );

  if (filename === "home.html") {
    html = html.replace(
      'class="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"',
      'class="stitch-profile-card relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"',
    );
  }

  html = html.replace("</head>", `${animationStyles}\n</head>`);
  html = html.replace("</body>", `${animationScript}\n</body>`);

  return html;
}
