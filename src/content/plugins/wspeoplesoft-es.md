---
name: 'WS to PeopleSoft'
type: 'local'
version: '1.0.0'
description: 'Integración completa Moodle ↔ PeopleSoft Oracle mediante REST: sincronización de usuarios, cursos y matrículas con trazabilidad.'
features:
  - 'Sincronización de alumnos/docentes'
  - 'Creación/actualización de cursos y secciones'
  - 'Enrolment automatizado + reglas'
  - 'Colas, reintentos y reportes de errores'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-arrows-rotate'
---

## Descripción General

**WS to PeopleSoft** conecta Moodle con PeopleSoft para automatizar alta/actualización de usuarios, cursos y matrículas con enfoque enterprise.

### Implementación Técnica

1. **Jobs Asíncronos**
   * Cron como motor de integración: estable y escalable.
   * Reintentos y “dead-letter queue” para casos no recuperables.

2. **Consistencia de Datos**
   * Mapeo de identificadores externos.
   * Validaciones previas al enrolment: existencia de curso, estado del usuario, periodo.

3. **Seguridad**
   * Validación de credenciales/token.
   * Registros de auditoría y control de acceso a pantallas del plugin.

---

## Características Principales

1. **Integración enterprise**
2. **Menos carga operativa**
3. **Mayor confiabilidad**
