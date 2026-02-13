---
title: 'Optimización de Quizzes & Exámenes'
description: 'Preparación de Moodle para evaluaciones con alta concurrencia: rendimiento, estabilidad y control.'
icon: 'fa-solid fa-clipboard-check'
order: 7
lang: 'es'
---

## Qué atacamos
Los exámenes estresan Moodle: picos simultáneos, autoguardado, logs intensivos y consultas frecuentes.

## Acciones Clave

### 1. Infra y Rendimiento
* Ajustes de **PHP-FPM** y límites de procesos.
* Optimización de **cachés** para navegación y preguntas.
* Revisión de IO en `moodledata` y sesiones.

### 2. Base de Datos
* Identificación de queries críticas en quizzes.
* Ajustes de índices/parametrización cuando corresponde.
* Reducción de locks y colisiones en picos.

### 3. Operación de Exámenes
* Ventanas y estrategias de carga (si aplica).
* Monitoreo reforzado durante evaluación.
* Plan de contingencia y soporte de incidentes.

## Resultado
* Evaluaciones más estables.
* Menos caídas por saturación.
* Mejor experiencia del alumno durante el examen.
