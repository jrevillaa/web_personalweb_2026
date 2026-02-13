---
name: 'MercadoPago Enrollment Gateway'
type: 'enrol'
version: '1.0.0'
description: 'Plugin de matrícula por pago con MercadoPago: confirmación por webhook, control de estados y enrolment automático.'
features:
  - 'Soporte para estados de pago (approved/pending/rejected)'
  - 'Webhook seguro con validación de origen'
  - 'Matrícula y desmatrícula según reglas de negocio'
  - 'Reconciliación y reportes operativos'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-money-check-dollar'
---

## Descripción General

**MercadoPago Enrollment Gateway** permite vender cursos y automatizar matrículas en Moodle, con manejo robusto de estados de pago.

### Buenas Prácticas

1. **Estado de Pago**
   * Matrícula solo con estado confirmado.
   * Manejo de pagos pendientes con expiración configurable.
   * Validación de orden: producto, precio, usuario.

2. **Seguridad y Trazabilidad**
   * Verificación de firma/origen de notificaciones.
   * Registro de requests y respuestas con correlación.

3. **Escalabilidad**
   * Procesamiento asíncrono por cron para evitar timeouts.
   * Cola de eventos y reintentos controlados.

---

## Características Principales

1. **Checkout confiable**
2. **Matrícula automática y segura**
3. **Control operativo completo**
