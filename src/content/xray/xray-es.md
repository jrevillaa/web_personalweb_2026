---
title: 'Xray Moodle Audit'
description: 'Auditoría técnica y funcional de Moodle con hallazgos priorizados y plan de acción ejecutable (quick wins + roadmap).'
icon: 'fa-solid fa-x-ray'
order: 12
lang: 'es'
---

## Qué es
Un diagnóstico integral de tu Moodle para identificar **cuellos de botella**, **riesgos**, **deuda técnica** y oportunidades de mejora en rendimiento, seguridad y operación.

## Qué evaluamos

### 1. Infraestructura & Rendimiento
* Revisión de arquitectura (web, PHP-FPM, cachés, sesiones, almacenamiento).
* Métricas actuales vs. demanda (concurrencia, picos, IO).
* Identificación de puntos de saturación y degradación.

### 2. Base de Datos
* Análisis de **slow queries** y consultas recurrentes.
* Revisión de parámetros y salud del motor.
* Recomendaciones de tuning e índices (cuando aplica).

### 3. Moodle & Configuración
* Revisión de roles/capacidades, políticas de sesión y autenticación.
* Configuración de cron, tareas, colas, cachés MUC.
* Revisión del tema y dependencias (impacto en UX/performance).

### 4. Plugins & Integraciones
* Inventario completo y compatibilidad con versión actual.
* Riesgos: plugins descontinuados, forks, custom sin control de cambios.
* Impacto de integraciones en carga y seguridad.

## Entregables
* Informe con **hallazgos priorizados** (Crítico / Alto / Medio / Bajo).
* Lista de **quick wins** (aplicables en 1–3 días).
* Roadmap 30/60/90 días con esfuerzo estimado y riesgos.
* Checklist de hardening y operación (runbook base).

## Resultado
Decisiones claras para mejorar Moodle sin adivinar: qué hacer primero, por qué y con qué impacto.
