---
name: 'Responsive Slides'
type: 'block'
version: '1.0.0'
description: 'Bloque de slides responsive: permite configurar imágenes por dispositivo y orientación para mejorar performance y UX.'
features:
  - 'Imágenes por breakpoint: desktop/tablet/phone'
  - 'Orientación: portrait/landscape'
  - 'Carga optimizada (evita bajar imágenes pesadas en móvil)'
  - 'Admin UI simple con preview'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-images'
---

## Descripción General

**Responsive Slides** optimiza la presentación visual del Moodle sin penalizar móviles: cada dispositivo descarga el asset adecuado.

### Implementación Técnica

1. **Detección y Breakpoints**
   * Selección de imagen por tamaño/orientación.
   * Reglas consistentes para evitar layout shifts.

2. **Performance**
   * Evita descargar banners desktop en teléfonos.
   * Compatibilidad con lazy loading.

3. **Operación**
   * UI de administración por slide con validación de dimensiones/peso.
   * Cacheado de configuración para render rápido.

---

## Características Principales

1. **Mejor UX**
2. **Más performance en móvil**
3. **Branding controlado**
