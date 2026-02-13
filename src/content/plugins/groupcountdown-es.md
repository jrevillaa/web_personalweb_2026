---
name: 'Group Enrollment Countdown'
type: 'local'
version: '1.0.0'
description: 'Controla el tiempo de vigencia de una matrícula por grupo, mostrando contador en tiempo real dentro del curso.'
features:
  - 'TTL por grupo (reglas diferenciadas)'
  - 'Contador en tiempo real visible al usuario'
  - 'Acciones al vencer: restringir acceso / desmatricular'
  - 'Sincronización por cron + eventos'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-hourglass-half'
---

## Descripción General

**Group Enrollment Countdown** permite vender accesos por tiempo o gestionar cohorts con vigencia, con una UX clara del tiempo restante.

### Implementación Técnica

1. **Modelo de Tiempo por Grupo**
   * TTL configurable por grupo.
   * Inicio del conteo por evento (matrícula / primera visita / fecha fija).

2. **Render y Tiempo Real**
   * Render del contador por bloque/renderer.
   * Cálculo seguro server-side (evita manipulación del cliente).

3. **Acciones de Expiración**
   * Restricción de acceso o desmatrícula controlada.
   * Jobs por cron con idempotencia y logs.

---

## Características Principales

1. **Control de vigencias**
2. **Experiencia transparente**
3. **Operación automática**
