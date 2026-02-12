# Especificación y Lineamientos — Web Personal de Jair Revilla (Astro + GitHub Pages)
Fecha: 2026-02-12  
Objetivo: sitio personal **profesional, vendedor, formal, ligero, multi-idioma y con SEO fuerte**, construido en **Astro** y desplegado en **GitHub Pages**.  
Fuente de verdad del CV: `cv.json` (ya creado).

---

## 1) Propuesta de estructura de la web (visión de producto)

### 1.1. Mensaje central (en 10 segundos)
- **Qué hago**: Moodle Engineer (desde 2012): plugins, integraciones, personalizaciones, performance y arquitectura.
- **Prueba**: casos reales (ej. Aprendo en Casa offline/online).
- **Confianza**: credenciales, stack, principios, reputación.
- **SEO**: contenido indexable por páginas (case studies y “áreas Moodle”).

### 1.2. Secciones “estrella” (combinación de ideas)
1) **Confianza instantánea** (arriba, visible sin scroll excesivo)
   - micro-credenciales + badges por sector + enlaces verificables.
2) **Moodle X-Ray** (radiografía técnica)
   - mapa/diagrama por dominios de Moodle con contenido real detrás (páginas).
3) **Mapa de Plugins** (por tipo de plugin, no mapa geográfico)
   - nodos: `mod`, `local`, `block`, `report`, `format`, `auth`, `enrol`, `theme`, `tool`, `qtype`, etc.
   - cada nodo filtra la lista de proyectos/plugins.
4) **Página “Yo hice esto” (Case Studies)** (portada)
   - grilla de casos indexables con plantilla uniforme.
5) **Stack real + Principios**
   - claridad y seniority (stack) + forma de trabajar (principios).

---

## 2) Arquitectura de información (IA) y rutas (SEO-first)

### 2.1. Rutas principales (ES + EN)
Se recomienda estructura por idioma:
- Español: `/es/...`
- Inglés: `/en/...`
- Home por idioma:
  - `/es/`
  - `/en/`

Rutas:
- Home:
  - `/es/` — portada (con secciones resumidas)
  - `/en/` — portada en inglés
- Case studies:
  - `/es/casos/` — listado
  - `/es/casos/<slug>/` — detalle
  - `/en/case-studies/`
  - `/en/case-studies/<slug>/`
- Plugins & Integraciones:
  - `/es/plugins/`
  - `/es/plugins/<tipo>/` (ej. `/es/plugins/mod/`)
  - `/en/plugins/`
  - `/en/plugins/<type>/`
- Moodle X-Ray:
  - `/es/moodle-xray/` — mapa general
  - `/es/moodle-xray/<area>/` — páginas por área (indexables)
  - `/en/moodle-xray/`
  - `/en/moodle-xray/<area>/`
- Sobre mí:
  - `/es/sobre-mi/`
  - `/en/about/`
- Contacto:
  - `/es/contacto/`
  - `/en/contact/`
- Archivos machine-readable:
  - `/cv.json` (single source)
  - `/sitemap-index.xml` o `/sitemap.xml`
  - `/robots.txt`
  - `/llms.txt` (ver sección 6.3)

> Nota SEO: evita “páginas solo con JS”. Todo lo esencial debe renderearse como HTML estático.

### 2.2. Slugs y convenciones
- Slugs en minúscula, guiones: `aprendo-en-casa-offline`
- Evitar caracteres raros (ñ/acentos): normalizar.
- Nunca cambiar slugs ya publicados sin redirects.

### 2.3. Plantilla de Case Study (uniforme y vendible)
Cada caso debe tener:
- `title`
- `dateRange` (o `startDate/endDate`)
- `context` (1 párrafo)
- `challenge` (bullets)
- `solution` (bullets)
- `architecture` (mini diagrama o bullets)
- `tech` (tags)
- `outcome` (si hay métricas, sin datos sensibles)
- `role` (tu rol)
- `links` (si aplica)
- `seo` (title/description/canonical)

---

## 3) Stack recomendado: Astro + GitHub Pages (cero servidor)

### 3.1. Por qué Astro
- HTML estático de primera (SEO + performance)
- Componentes modernos, pero solo donde haga falta hidratación
- Ideal para “sitio de autoridad” (contenido + velocidad)

### 3.2. Hosting gratuito y dominio
- GitHub Pages: hosting estático gratis.
- Dominio propio: se configura en GitHub Pages y DNS (CNAME / A records).

---

## 4) Estructura de proyecto (carpetas)

Ejemplo de árbol recomendado:

```txt
/
├─ public/
│  ├─ robots.txt
│  ├─ llms.txt
│  ├─ cv.json
│  ├─ assets/
│  │  ├─ images/
│  │  └─ icons/
├─ src/
│  ├─ pages/
│  │  ├─ es/
│  │  │  ├─ index.astro
│  │  │  ├─ casos/
│  │  │  │  ├─ index.astro
│  │  │  │  └─ [slug].astro
│  │  │  ├─ plugins/
│  │  │  │  ├─ index.astro
│  │  │  │  └─ [type].astro
│  │  │  ├─ moodle-xray/
│  │  │  │  ├─ index.astro
│  │  │  │  └─ [area].astro
│  │  │  ├─ sobre-mi.astro
│  │  │  └─ contacto.astro
│  │  └─ en/
│  │     ├─ index.astro
│  │     ├─ case-studies/
│  │     │  ├─ index.astro
│  │     │  └─ [slug].astro
│  │     ├─ plugins/
│  │     │  ├─ index.astro
│  │     │  └─ [type].astro
│  │     ├─ moodle-xray/
│  │     │  ├─ index.astro
│  │     │  └─ [area].astro
│  │     ├─ about.astro
│  │     └─ contact.astro
│  ├─ content/
│  │  ├─ case-studies/        # MD/MDX o JSON por caso
│  │  ├─ plugins/             # lista de plugins o integración
│  │  └─ xray-areas/          # contenido de áreas
│  ├─ components/
│  │  ├─ layout/
│  │  ├─ sections/
│  │  ├─ ui/
│  │  └─ seo/
│  ├─ styles/
│  │  ├─ tokens.css
│  │  ├─ base.css
│  │  └─ components.css
│  ├─ i18n/
│  │  ├─ es.json
│  │  └─ en.json
│  └─ utils/
│     ├─ seo.ts
│     ├─ schema.ts
│     └─ slugs.ts
├─ astro.config.mjs
├─ package.json
└─ README.md
````

---

## 5) Lineamientos de diseño (para que se vea coherente)

### 5.1. Principios visuales

* **Limpio**: mucho espacio en blanco, tipografía clara.
* **Jerarquía consistente**: mismos tamaños para H1/H2/H3 en todo el sitio.
* **Componentes repetibles**: una sola “Card”, una sola “Badge”, una sola “Button”.
* **Nada “pegado”**: usar espaciados por tokens.
* **Accesibilidad**: contraste, focus visible, navegación por teclado.

### 5.2. Design system mínimo (tokens)

Crear tokens CSS (sin colores fijos “a mano” en cada componente):

* Espaciado:

  * `--space-1: 4px`, `--space-2: 8px`, `--space-3: 12px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 32px`, `--space-12: 48px`
* Radios:

  * `--radius-1: 8px`, `--radius-2: 12px`
* Tipografía:

  * `--font-sans: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`
  * tamaños escalados (ej. 14/16/18/24/32/40)
* Ancho máximo:

  * `--container: 1120px`
* Sombras sutiles:

  * `--shadow-1`, `--shadow-2`

### 5.3. Componentes base (UI kit)

Definir una sola vez:

* `Container`
* `Section` (con padding vertical fijo)
* `Card` (para casos y plugins)
* `Badge` (tags)
* `Button` (primario/secundario)
* `Icon` (set coherente)
* `Header/Nav` y `Footer`

> Reglas:

* Nunca crear un botón nuevo “similar”.
* Todo usa tokens.
* Sin estilos inline.
* Una sola forma de listar tags.
* Las cards siempre con mismo padding/radio/sombra.

### 5.4. Layout (estructura repetible)

* `BaseLayout`: `<Header /> <main> <Footer />`
* `PageHero`: título + subtítulo + CTAs (reutilizable)
* Secciones de Home:

  * Hero
  * Confianza instantánea
  * Moodle X-Ray (preview)
  * Mapa de plugins (preview)
  * Case studies (3–6 destacados)
  * Stack + Principios
  * CTA final (contacto)

---

## 6) SEO técnico: metadatos, sitemap, robots, llms.txt

### 6.1. Metadatos por página

Cada página debe tener:

* `<title>` único (máx ~60)
* `meta description` (máx ~155)
* `canonical`
* OpenGraph / Twitter cards
* `hreflang` (ES/EN)

Estructura recomendada:

* Title pattern:

  * ES: `Caso: Aprendo en Casa Offline — Jair Revilla (Moodle Engineer)`
  * EN: `Case Study: Aprendo en Casa Offline — Jair Revilla (Moodle Engineer)`
* Description: incluir “Moodle”, “plugins”, “integraciones”, “performance” según página.

### 6.2. Sitemap

Generar `sitemap.xml` automáticamente en build.

* Incluir rutas ES/EN.
* Excluir páginas no públicas (drafts).

### 6.3. robots.txt

Ejemplo:

* Permitir indexación del sitio.
* Bloquear rutas internas si existieran (admin, preview, etc.).

`public/robots.txt`:

```txt
User-agent: *
Allow: /
Sitemap: https://TU-DOMINIO.com/sitemap.xml
```

### 6.4. llms.txt (para LLMs)

Es un archivo sugerido por la comunidad para facilitar a modelos/agents entender el sitio (no es un estándar oficial, pero se usa).
Ubicación: `public/llms.txt`

Contenido recomendado:

* Quién eres
* Qué hace el sitio
* Dónde está `cv.json`
* Dónde están case studies
* URLs principales
* Reglas de uso (si quieres)

Ejemplo:

```txt
# Jair Revilla — Personal Site
This site contains professional information about Jair Revilla, a Moodle Engineer.

Key machine-readable sources:
- CV JSON: https://TU-DOMINIO.com/cv.json
- Case studies (ES): https://TU-DOMINIO.com/es/casos/
- Case studies (EN): https://TU-DOMINIO.com/en/case-studies/
- Plugins (ES): https://TU-DOMINIO.com/es/plugins/
- Moodle X-Ray (ES): https://TU-DOMINIO.com/es/moodle-xray/

Preferred citation:
- Link back to the specific page when referencing content.
```

---

## 7) Schema.org (JSON-LD) para autoridad y resultados enriquecidos

### 7.1. Tipos recomendados

* `Person` (tú)
* `WebSite` + `WebPage`
* `Organization` (si tienes marca/empresa personal; opcional)
* `CreativeWork` o `Project` (para case studies)
* `BreadcrumbList` (para páginas internas)

### 7.2. Dónde insertar JSON-LD

En el `<head>` de cada página (con un componente `<Seo />`).

* Home: Person + WebSite
* Case Study: CreativeWork/Project + Breadcrumb
* Sobre mí: Person + WebPage

### 7.3. Mapeo desde cv.json

* `Person.name` ← `basics.name`
* `Person.jobTitle` ← `basics.label`
* `Person.address` ← `basics.location`
* `Person.email/telephone` ← `basics.email/phone`
* `Person.knowsAbout` ← `skills`
* `Person.sameAs` ← links a LinkedIn/GitHub (agregar en `cv.json` si no está)

---

## 8) Multi-idioma (i18n) con consistencia

### 8.1. Estrategia recomendada

* Rutas por idioma (`/es/`, `/en/`) para SEO.
* Diccionario UI (labels) en `src/i18n/es.json` y `src/i18n/en.json`.
* Contenido largo (case studies) idealmente en `src/content` con variantes por idioma:

  * `case-studies/es/<slug>.md`
  * `case-studies/en/<slug>.md`

### 8.2. Hreflang y alternates

En cada página incluir:

* `link rel="alternate" hreflang="es" href=".../es/..."`
* `link rel="alternate" hreflang="en" href=".../en/..."`
* `hreflang="x-default"` (opcional)

---

## 9) Performance y “ligereza” (reglas de oro)

* Cero frameworks pesados en cliente salvo donde sea vital.
* Evitar carousels pesados; preferir grids y tabs livianas.
* Imágenes en `webp/avif`, lazy-load.
* Fuentes: preferir system fonts (rápido) o una sola familia variable.
* CSS: tokens + componentes; evitar librerías gigantes si no son necesarias.
* JS: solo para interacción puntual (filtros del “Mapa de Plugins”, por ejemplo).

---

## 10) Componentes clave (qué construir)

### 10.1. Home sections (componentes)

* `HeroIntro`
* `TrustSignals`
* `MoodleXRayPreview`
* `PluginMapPreview`
* `CaseStudyGridFeatured`
* `StackAndPrinciples`
* `FinalCTA`

### 10.2. Páginas core

* `CaseStudyIndex`
* `CaseStudyDetail`
* `PluginsIndex`
* `PluginsByType`
* `XRayIndex`
* `XRayAreaDetail`

### 10.3. “Mapa de Plugins” (UX)

* Vista tipo “graph” o “grid de nodos”
* Cada tipo muestra:

  * explicación
  * tags
  * lista filtrada de ejemplos
* Mantenerlo simple y rápido:

  * **primero** un grid bonito (HTML)
  * **luego** mejoras de interacción (JS mínimo)

---

## 11) Convenciones de contenido (para que todo suene a una sola voz)

### 11.1. Tono (formal + vendedor + técnico)

* Formal, directo, sin exageraciones.
* Siempre incluir evidencia: casos, tecnologías, decisiones técnicas.
* Estructuras repetibles: “Reto → Solución → Resultado”.

### 11.2. Reglas de copy

* H1 único por página.
* Primer párrafo con keywords naturales:

  * “Moodle”, “plugins”, “integraciones”, “arquitectura”, “performance”.
* No usar muletillas. Frases cortas.
* Evitar superlativos vacíos (“el mejor”, “increíble”) sin prueba.

### 11.3. Estandarización (checklist de calidad)

Antes de publicar una página:

* Tiene title + description + canonical
* Tiene H1
* Tiene breadcrumbs (si aplica)
* Tiene JSON-LD (Person/Project)
* Tiene enlazado interno (al menos 2 links)
* Imágenes con alt
* Contenido en ES y EN (o marcado como pending con noindex temporal)

---

## 12) GitHub Pages: despliegue y dominio

### 12.1. Build estático

* `npm run build` genera `dist/`

### 12.2. Publicación

* GitHub Actions para build y deploy a Pages.
* Configurar custom domain desde Settings → Pages.
* Crear `CNAME` en repo o configuración Pages.

### 12.3. DNS (resumen)

* Usar CNAME apuntando a `TUUSUARIO.github.io` o A records según guía.
* Activar HTTPS en Pages.

---

## 13) Roadmap sugerido (para construir sin caos)

### Fase 1 (MVP SEO)

* Home ES/EN (sin animaciones pesadas)
* Case Studies index + 3 casos detallados
* Sobre mí + Contacto
* `robots.txt`, `sitemap.xml`, `llms.txt`
* JSON-LD Person + Project

### Fase 2 (Autoridad técnica)

* Moodle X-Ray completo con páginas por área
* Plugins & Integraciones (filtrable)
* Más casos y cross-linking interno

### Fase 3 (Conversión)

* Testimonios
* CTA refinado
* Newsletter / RSS (opcional)
* Página “Servicios” (si decides vender paquetes)

---

## 14) Notas finales

* El sitio debe ser **consistente**: mismos componentes, mismos tokens, mismo tono.
* Evitar meter 3 librerías UI distintas. Mantenerlo minimal.
* `cv.json` es “la verdad”, pero los case studies deben tener su propio contenido editorial (más SEO).

Fin.
