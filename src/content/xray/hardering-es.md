---
title: 'Hardening & Seguridad para Moodle'
description: 'Endurecimiento de plataforma: controles, configuración segura y reducción de superficie de ataque.'
icon: 'fa-solid fa-shield-halved'
order: 3
lang: 'es'
---

## Qué resolvemos
Moodle suele operar con datos sensibles (notas, evaluaciones, información personal). Un hardening correcto reduce riesgos sin romper la operación.

## Prácticas Implementadas

### 1. Seguridad de Servidor
* **Actualizaciones y parches** controlados por ventana.
* **Políticas de firewall** (solo puertos necesarios).
* **SSH hardening**: llaves, usuarios limitados, bloqueo por intentos.

### 2. Seguridad Web
* **TLS/SSL** con configuración recomendada.
* **Headers de seguridad** (CSP, HSTS cuando aplica, etc.).
* **Rate limiting** en endpoints expuestos.

### 3. Moodle Seguro
* **Revisión de roles y capacidades**: minimización de privilegios.
* **Auditoría de plugins**: control de origen, versiones y permisos.
* **Políticas de contraseñas y sesión**: ajuste a compliance institucional.

## Beneficios
* Menos incidentes y exposición a vulnerabilidades comunes.
* Mayor confianza institucional (TI, auditoría, compliance).
* Base sólida para integraciones y crecimiento.
