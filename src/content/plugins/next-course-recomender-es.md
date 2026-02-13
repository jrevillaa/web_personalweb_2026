---
name: 'Next Course Recommender'
type: 'block'
version: '1.0.0'
description: 'Bloque que detecta avance 100%, notifica al SGA y recomienda cursos siguientes con enrolment automático.'
features:
  - 'Reglas por progreso y finalización'
  - 'Notificación a SGA vía REST con firma/HMAC'
  - 'Recomendación de próximos cursos por catálogo'
  - 'Enrolment automático con control transaccional'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-forward'
---

## Descripción General

**Next Course Recommender** automatiza el “siguiente paso” del estudiante: al completar un curso, envía el evento al SGA y sugiere rutas de aprendizaje.

### Arquitectura y Seguridad

1. **Detección de Finalización**
   * Se engancha a eventos de completion y valida consistencia (evita falsos positivos).
   * Soporta reintentos: si el SGA no responde, se encola y re-ejecuta por cron.

2. **Integración Segura**
   * REST con **firma HMAC** (o token rotativo) y validación de timestamp.
   * Trazabilidad completa (request id, status, reintentos, error codes).

3. **Enrolment Confiable**
   * Enrolment como transacción lógica: no sugiere si no puede matricular.
   * Control de idempotencia para evitar doble matrícula.

---

## Características Principales

1. **Automatización del ciclo**
   * Menos fricción: el estudiante no “se pierde” al finalizar.
2. **Orientado a conversión**
   * Recomendaciones accionables + matrícula inmediata.
