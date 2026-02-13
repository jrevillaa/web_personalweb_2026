---
name: 'Sync Certificates to SGA'
type: 'local'
version: '1.0.0'
description: 'Sincroniza certificados emitidos en Moodle hacia el SGA del cliente con firma, auditoría y reintentos.'
features:
  - 'Envío automático al emitir certificado'
  - 'Reintentos por cron y cola persistente'
  - 'Firma/validación de payload (HMAC/token)'
  - 'Evidencia: logs, estados y correlación'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-certificate'
---

## Descripción General

**Sync Certificates to SGA** evita procesos manuales: cuando un alumno obtiene un certificado, el SGA lo recibe automáticamente para registrar logros.

### Diseño Técnico

1. **Trigger confiable**
   * Escucha eventos de emisión de certificado (o finalización del curso).
   * Verifica consistencia: usuario, curso, identificadores externos.

2. **Integración Segura**
   * Payload firmado y validación de timestamp.
   * Manejo de errores y reintentos con backoff.

3. **Auditoría**
   * Estado por certificado: pendiente/enviado/error.
   * Historial de intentos y response codes.

---

## Características Principales

1. **Automatización total**
2. **Trazabilidad audit-ready**
3. **Menos carga operativa**
