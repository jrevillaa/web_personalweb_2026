---
name: 'Bulk Course Backup to Object Storage'
type: 'local'
version: '1.0.0'
description: 'Backups masivos (MBZ) por curso con envío automático a bucket (Huawei OBS / AWS S3) y verificación de integridad.'
features:
  - 'Tareas por cron con cola y reintentos'
  - 'Soporte Huawei OBS y AWS S3'
  - 'Verificación de integridad (checksum) y logs'
  - 'Políticas de retención y versionado'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-cloud-arrow-up'
---

## Descripción General

**Bulk Course Backup to Object Storage** genera backups a escala y los deposita en almacenamiento de objetos, ideal para DR y continuidad.

### Implementación Técnica

1. **Generación de MBZ**
   * Orquestación por tareas programadas para evitar bloqueos.
   * Control de concurrencia (evita saturar disco/IO).

2. **Subida a Bucket**
   * Integración con S3/OBS usando credenciales seguras.
   * Multipart upload cuando aplica para archivos grandes.
   * Checksum para validar integridad post-upload.

3. **Gobernanza**
   * Retención configurable (días/últimos N backups).
   * Logs detallados por curso y ejecución.

---

## Características Principales

1. **DR-ready**
2. **Escalable**
3. **Auditabilidad**
