---
name: 'AMAG Auth Gateway'
type: 'auth'
version: '1.0.0'
description: 'Autenticación contra SGA en tiempo real: login transparente y reconocimiento automático de usuario en Moodle.'
features:
  - 'Validación de credenciales contra SGA'
  - 'Provisioning automático (si no existe en Moodle)'
  - 'Mapeo de atributos y roles'
  - 'Logs y protección contra brute force'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-right-to-bracket'
---

## Descripción General

**AMAG Auth Gateway** permite iniciar sesión en Moodle usando credenciales del SGA, con provisionamiento seguro y trazable.

### Enfoque Técnico

1. **Autenticación**
   * Validación en tiempo real contra endpoint del SGA.
   * Timeouts y circuit breaker para evitar degradación si el SGA cae.

2. **Provisioning**
   * Si el usuario no existe, se crea con atributos mínimos + sincronización de perfil.
   * Mapeo controlado de roles y campos.

3. **Seguridad**
   * Rate limiting y bloqueo por intentos fallidos.
   * Logs de autenticación con correlación sin exponer secretos.

---

## Características Principales

1. **SSO-like experiencia**
2. **Menos cuentas duplicadas**
3. **Operación segura**
