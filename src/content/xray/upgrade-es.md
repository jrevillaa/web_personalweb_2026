---
title: 'Moodle Upgrade Seguro (Zero Drama)'
description: 'Actualizaciones controladas de Moodle con compatibilidad de plugins, QA y plan de rollback.'
icon: 'fa-solid fa-rotate'
order: 5
lang: 'es'
---

## Enfoque
Un upgrade exitoso no es solo “subir versión”: es asegurar continuidad, compatibilidad y desempeño post-migración.

## Metodología

### 1. Diagnóstico Previo
* Inventario de **plugins** (contribuidos + custom).
* Evaluación de compatibilidad por versión.
* Identificación de riesgos: tema, integraciones, reportes, jobs.

### 2. Ejecución Controlada
* **Ambientes DEV/UAT/PROD** con datos representativos.
* Actualización por etapas con verificación funcional.
* Ajustes de tema/plantillas y scripts asociados.

### 3. QA + Rollback
* Checklist funcional (roles, matriculación, cursos, quiz, tareas).
* Pruebas de rendimiento base.
* **Plan de rollback** probado (no teórico).

## Entregables
* Informe de compatibilidad y cambios.
* Evidencia de QA.
* Procedimiento de despliegue reproducible.
