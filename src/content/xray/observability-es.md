---
title: 'Moodle Observability'
description: 'Monitoreo real de Moodle: métricas, logs, trazas y alertas accionables.'
icon: 'fa-solid fa-chart-line'
order: 4
lang: 'es'
---

## El problema
Sin visibilidad, Moodle “se cae de sorpresa”. La observabilidad permite anticipar degradación antes de que afecte a usuarios.

## Qué implementamos

### 1. Métricas de Infraestructura
* **CPU, RAM, Disco, IO, Red** por nodo.
* **PHP-FPM**: workers, colas, latencias.
* **Redis**: memoria, hits/misses, latencia.

### 2. Base de Datos
* **Slow query log** y análisis de consultas críticas.
* **Conexiones y locks**: detección de cuellos de botella.
* **Tamaño y crecimiento**: planeamiento de capacidad.

### 3. Moodle y Experiencia Usuario
* **Tiempos de respuesta** por rutas clave (login, curso, quiz).
* **Errores de aplicación**: logs correlacionados por timestamp.
* **Alertas**: umbrales definidos y notificación por canal.

## Resultado
* Menos caídas “misteriosas”.
* Decisiones basadas en datos para optimizar rendimiento.
* MTTD/MTTR reducidos (detección y recuperación más rápidas).
