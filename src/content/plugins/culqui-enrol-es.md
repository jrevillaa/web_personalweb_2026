---
name: 'Culqi Enrollment Gateway'
type: 'enrol'
version: '1.0.0'
description: 'Plugin de matrícula por pago con Culqi (Perú): checkout, validación de pago, enrolment y recibos.'
features:
  - 'Webhook de confirmación de pago'
  - 'Validación anti-fraude básica (replay protection)'
  - 'Matrícula automática al confirmar pago'
  - 'Logs y reconciliación de transacciones'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-credit-card'
---

## Descripción General

**Culqi Enrollment Gateway** convierte Moodle en una plataforma vendible: paga y queda matriculado automáticamente, con controles de seguridad y trazabilidad.

### Implementación Técnica

1. **Pagos y Webhooks**
   * Flujo checkout → intento de pago → webhook de confirmación.
   * Validación de firma del webhook y `replay protection` por timestamp/nonce.

2. **Seguridad**
   * Nunca se almacenan datos sensibles de tarjeta en Moodle.
   * Validación de monto/moneda/producto antes de enrolar.
   * Idempotencia: una transacción confirmada no ejecuta matrícula doble.

3. **Operación**
   * Panel de logs para conciliación (pagado / pendiente / fallido).
   * Reintentos por cron ante fallas temporales.

---

## Características Principales

1. **Compra y acceso inmediato**
2. **Evidencia y auditoría**
3. **Listo para escalar**
