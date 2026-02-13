---
name: 'Enrollment Dependency'
type: 'enrol'
version: '1.0.0'
description: 'Matrícula condicionada por formulario: el usuario responde preguntas configurables y Moodle decide enrolment/segmentación.'
features:
  - 'Constructor de preguntas (texto/opción/múltiple)'
  - 'Reglas y ramificaciones por respuestas'
  - 'Segmentación por grupo/cohorte al enrolar'
  - 'Auditoría de respuestas y decisiones'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-diagram-project'
---

## Descripción General

**Enrollment Dependency** convierte el enrolment en un flujo inteligente: el usuario completa un formulario y, según reglas, se matricula y queda segmentado.

### Diseño Técnico

1. **Formulario Configurable**
   * Preguntas por instancia del enrolment, con validación server-side.
   * Soporte para condiciones y reglas por respuesta.

2. **Decisión y Segmentación**
   * Matricula según regla y asigna **grupo/cohorte** automáticamente.
   * Idempotencia: no re-aplica reglas si ya existe enrolment válido.

3. **Privacidad**
   * Implementación compatible con Privacy API.
   * Control de acceso: solo administradores ven respuestas completas.

---

## Características Principales

1. **Onboarding inteligente**
2. **Segmentación automática**
3. **Mejor conversión y orden operativo**
