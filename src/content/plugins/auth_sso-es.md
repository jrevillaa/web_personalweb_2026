---
name: 'SSO SAML2 Bridge'
type: 'auth'
version: '1.0.0'
description: 'Autenticación SSO por SAML2: ingreso directo si el usuario ya está autenticado en el IdP del cliente.'
features:
  - 'SAML2 con validación estricta de assertions'
  - 'Mapeo de atributos y provisioning'
  - 'Soporte multi-IdP (según configuración)'
  - 'Control de sesión y logout'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-id-card-clip'
---

## Descripción General

**SSO SAML2 Bridge** permite que Moodle confíe en el Identity Provider del cliente: si ya estás logueado, entras sin fricción.

### Buenas Prácticas de Seguridad

1. **Validación de Assertions**
   * Verificación de firma, audiencia, issuer y expiración.
   * Clock skew controlado y rechazo de tokens vencidos.

2. **Mapeo y Provisioning**
   * Mapeo de `NameID`/atributos a usuario Moodle.
   * Creación/actualización controlada con reglas por dominio.

3. **Gobernanza**
   * Logs de SSO y errores interpretables para TI.
   * Soporte de logout y control de sesión.

---

## Características Principales

1. **Ingreso sin fricción**
2. **Cumplimiento y seguridad**
3. **Menos soporte por contraseñas**
