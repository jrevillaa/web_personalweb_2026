# Plan de Implementación: Home Page y Componentes Core

## Objetivo
Implementar la estructura de la página de inicio (Home Page) utilizando componentes de Astro reutilizables y optimizados, siguiendo el sistema de diseño (tokens).

## Componentes a Desarrollar

### 1. HeroIntro (`src/components/sections/HeroIntro.astro`)
- **Propósito**: Primera impresión, mensaje central ("Moodle Engineer").
- **Props**: `title`, `subtitle`, `ctaText`, `ctaLink`.
- **Diseño**:
    - Contenedor centrado.
    - H1 grande con tipografía de sistema.
    - Subtítulo descriptivo.
    - Botón de llamada a la acción (CTA) primario.
- **Best Practices**: Usar HTML semántico (`<section>`, `<h1>`).

### 2. TrustSignals (`src/components/sections/TrustSignals.astro`)
- **Propósito**: Mostrar credenciales rápidas (años de experiencia, badges, clientes/proyectos clave).
- **Datos**: Se pueden pasar como props o definirse internamente si son estáticos por ahora.
- **Diseño**:
    - Grid o Flexbox para los items.
    - Iconos o textos cortos resaltados.

### 3. Actualización de Home (`src/pages/[lang]/index.astro`)
- Importar y usar `HeroIntro` y `TrustSignals`.
- Pasar textos desde los archivos i18n (`src/i18n/*.json`).

## Estructura de i18n
Actualizar `es.json` y `en.json` con las claves necesarias para estos componentes:
- `hero.title`
- `hero.subtitle`
- `hero.cta`
- `trust.years`
- `trust.clients`
- `trust.plugins`

## Verificación
- Comprobar renderizado en rutas `/es/` y `/en/`.
- Verificar consistencia de espaciado y tipografía.
