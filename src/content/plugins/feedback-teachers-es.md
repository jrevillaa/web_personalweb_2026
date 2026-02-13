---
name: 'Feedback Teachers (Blind Feedback)'
type: 'mod'
version: '1.0.0'
description: 'Actividad tipo feedback con visibilidad selectiva: estudiantes responden, pero el docente (u otros roles) no pueden verla ni acceder a resultados.'
features:
  - 'Ocultamiento real por rol/capability (no solo “oculto”)'
  - 'Capacidades por instancia: reglas por actividad'
  - 'Protección contra acceso directo por URL'
  - 'Auditoría de accesos y eventos'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-user-shield'
---

## Descripción General

**Feedback Teachers (Blind Feedback)** nace de un requerimiento frecuente en instituciones: aplicar encuestas donde **el docente no debe saber que existe la actividad**, ni poder acceder a respuestas, aun cuando tenga permisos elevados dentro del curso.

### Enfoque Técnico y Seguridad

1. **Control por Capacidades (capabilities)**
   * Se definen capacidades específicas para *ver*, *intentar* y *reportar*.
   * La visibilidad se resuelve por `has_capability()` con **contexto de curso** y **contexto de módulo**, evitando reglas globales frágiles.

2. **Defensa en Profundidad**
   * Remueve el módulo del `course_modinfo` para roles restringidos.
   * Protege endpoints: `view.php`, `complete.php`, `analysis.php` con `require_login()` + validación de capability.
   * Bloquea accesos por URL, indexación interna y listados del curso.

3. **Privacidad y Trazabilidad**
   * Emite eventos Moodle (`\core\event\`) para auditoría.
   * Soporte de **Privacy API** (GDPR) para export/erase de datos cuando aplica.

---

## Características Principales

1. **Modo “Invisible por Rol”**
   * Por cada actividad se selecciona el/los roles que no deben verla.
2. **Resultados Protegidos**
   * Separación estricta entre permisos de responder vs. ver reportes.
3. **Compatibilidad con Backup/Restore**
   * Incluye `backup_moodle2` y `restore_moodle2` para migración entre sitios.
