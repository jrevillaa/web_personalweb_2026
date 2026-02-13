---
name: 'Bulk Course Delete'
type: 'local'
version: '1.0.0'
description: 'Eliminación masiva de cursos en background mediante cron, evitando lentitud y bloqueo del usuario final.'
features:
  - 'Cola de borrado por lotes'
  - 'Ejecución segura por cron (no UI blocking)'
  - 'Logs y estados por curso'
  - 'Control de permisos y confirmaciones'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-trash-can'
---

## Descripción General

**Bulk Course Delete** resuelve el problema de borrar cursos a escala sin afectar el rendimiento del sitio.

### Implementación Técnica

1. **Cola y Batches**
   * Encola cursos a borrar con estados (pendiente/en proceso/hecho/error).
   * Procesa por lotes configurables para controlar carga.

2. **Seguridad**
   * Solo roles autorizados pueden encolar tareas.
   * Doble validación antes de borrar: contexto y permisos.

3. **Operación**
   * Logs por curso con causa de error y reintentos.
   * Integración con tareas programadas (`\core\task\scheduled_task`) según versión.

---

## Características Principales

1. **No afecta usuarios**
2. **Operación segura**
3. **Escalable**
