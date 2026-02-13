---
name: 'Popup Video'
type: 'mod'
version: '1.0.0'
description: 'Actividad para insertar videos (YouTube/Vimeo) con modos de visualización: popup modal, iframe embebido o toggle expandible.'
features:
  - 'Validación segura de URLs y providers'
  - 'Modo Popup (modal) con lazy loading'
  - 'Modo Iframe con políticas de seguridad'
  - 'Modo Toggle para ahorrar espacio en página'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-circle-play'
---

## Descripción General

**Popup Video** permite incorporar contenido audiovisual sin depender de bloques o hacks de HTML, con opciones UX para distintas metodologías de curso.

### Buenas Prácticas Implementadas

1. **Seguridad de Embeds**
   * Sanitización de URL y whitelist de proveedores.
   * Uso de parámetros seguros y restricciones de autoplay según política.
   * Configuración de `referrerpolicy` y atributos de iframe cuando aplica.

2. **Rendimiento**
   * **Lazy loading**: el iframe se crea al abrir popup o expandir toggle.
   * Evita cargar decenas de iframes al renderizar una página con muchos recursos.

3. **Accesibilidad**
   * Control de foco al abrir/cerrar modal.
   * Navegación por teclado y labels ARIA para componentes.

---

## Características Principales

1. **Popup Modal**
   * Ideal para páginas de curso limpias: el video se carga solo cuando el usuario lo solicita.
2. **Iframe Embebido**
   * Para contenidos siempre visibles.
3. **Toggle Expandible**
   * Para lecciones largas donde el video es opcional.
