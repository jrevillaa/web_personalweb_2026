---
name: 'Courses Custom List'
type: 'block'
version: '1.0.0'
description: 'Bloque de listado de cursos matriculados con vista a medida y criterios avanzados de presentación.'
features:
  - 'Vista personalizada tipo “dashboard” por cliente'
  - 'Agrupación por estado (en curso/finalizado/próximo)'
  - 'Compatibilidad con filtros y paginación'
  - 'Cacheado por usuario para rendimiento'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-layer-group'
---

## Descripción General

**Courses Custom List** replica una experiencia de “mis cursos” distinta a la nativa de Moodle, manteniendo consistencia con el modelo de enrolments y completitud.

### Implementación Técnica

1. **Integración con APIs Core**
   * Obtiene cursos por enrolment y visibilidad real del usuario.
   * Lee progreso/actividad usando Completion API (según configuración).

2. **Rendimiento**
   * Cache per-user (MUC) con invalidación por eventos (enrol/unenrol, course update).
   * Consultas con paginación: evita cargar listas enormes en una sola request.

3. **Extensibilidad**
   * Plantillas renderizables con `renderer` y `mustache` (según versión).
   * Hook para reglas de ordenamiento y etiquetas por cliente.

---

## Características Principales

1. **UX orientada a negocio**
   * Se adapta a modelos de academia corporativa o venta de cursos.
2. **Escalable**
   * Pensado para cientos o miles de cursos matriculados sin degradación.
