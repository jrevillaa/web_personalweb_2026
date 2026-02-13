---
title: 'High Performance Moodle'
description: 'Optimización de rendimiento para Moodle de alta concurrencia (50k+ usuarios): arquitectura, tuning y observabilidad para picos de matrícula y exámenes.'
icon: 'fa-solid fa-rocket'
order: 1
lang: 'es'
---

## Enfoque
Cuando Moodle se vuelve crítico (picos de matrícula, evaluaciones simultáneas, reportes masivos), el rendimiento no se “mejora” con un solo cambio: se **diseña** con una estrategia completa. Este servicio optimiza Moodle de extremo a extremo para reducir latencia, aumentar throughput y evitar caídas por saturación.

## Estrategias de Optimización

Para lograr un rendimiento superior en instalaciones masivas de Moodle, implementamos una arquitectura de múltiples capas:

### 1. Capa de Base de Datos
* **Arquitectura HA/Scale**: Replicación y/o clúster según el caso (**Galera / Aurora** u opciones equivalentes), separando lecturas cuando aplica.
* **Query Tuning**: Activación y análisis de *slow queries*, reescritura de consultas lentas (reportes, cohorts, enrolments) y optimización de índices.
* **Connection Pooling**: **ProxySQL** (u opción equivalente) para reducir overhead de conexiones y estabilizar picos.
* **Mantenimiento controlado**: housekeeping, limpieza de tablas grandes, revisión de locks y transacciones.

### 2. Caching y Sesiones
* **Redis (segregado por propósito)**: configuración separada para **Sesiones**, **MUC (Moodle Universal Cache)** y caché de aplicación, evitando “contaminación” entre cargas.
* **Opcache tuning**: ajuste de **PHP Opcache** (memoria, revalidación, strings) para evitar recompilación y mejorar el tiempo de respuesta.
* **Estrategia MUC**: selección de stores y TTLs para caches críticos (course modinfo, strings, config, etc.).

### 3. PHP-FPM y Capa Web
* **PHP-FPM tuning**: `pm.*`, límites de workers, timeouts, colas y tamaño de procesos para maximizar concurrencia sin thrashing.
* **Web server optimizado**: Nginx/Apache con compresión, keep-alive, límites y buffers alineados al perfil real de Moodle.
* **Offloading**: separación de tareas pesadas (cron, adhoc tasks) para que el tráfico de usuarios no compita con procesos batch.

### 4. Frontend y Experiencia de Usuario
* **Lazy Loading real**: carga diferida de recursos pesados, iframes y multimedia para mejorar TTFB y LCP en cursos extensos.
* **Asset Optimization**: minificación, cache headers, control de versiones, y validación de que no existan assets bloqueando render.
* **Reducir “páginas pesadas”**: revisión de widgets/bloques que disparan consultas excesivas (especialmente en home y dashboards).

### 5. Observabilidad y Pruebas
* **Métricas + alertas**: latencia, throughput, errores, PHP-FPM, Redis y DB para detectar degradación antes del incidente.
* **Pruebas de carga**: escenarios representativos (login masivo, navegación, quiz simultáneo, reportes) y comparación antes/después.
* **Checklist de picos**: runbook para eventos críticos (matrícula/exámenes) con parámetros y acciones de contingencia.

## Resultados Esperables
* Reducción significativa de latencia y tiempos de carga en rutas críticas (login, curso, quiz).
* Mayor tolerancia a picos de concurrencia sin caídas por saturación.
* Plataforma “operable”: con monitoreo, alertas y capacidad de respuesta rápida ante incidentes.
