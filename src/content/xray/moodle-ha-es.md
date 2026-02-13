---
title: 'Arquitectura High Availability'
description: 'Diseños HA para Moodle: tolerancia a fallos, balanceo, redundancia y continuidad operativa.'
icon: 'fa-solid fa-network-wired'
order: 2
lang: 'es'
---

## Objetivo
Mantener Moodle disponible incluso ante fallas de infraestructura, picos de demanda o mantenimiento programado, sin comprometer la experiencia de alumnos y docentes.

## Componentes Clave

### 1. Balanceo y Capa Web
* **Load Balancer (L4/L7)**: Distribución inteligente y health checks.
* **Escalado horizontal**: Múltiples nodos web (Nginx/Apache + PHP-FPM).
* **Sticky sessions (cuando aplica)**: Controlado, evitando acoplamientos innecesarios.

### 2. Datos y Persistencia
* **BD replicada**: Primario/secundario o clúster según criticidad.
* **Backups verificados**: Pruebas de restauración (no solo “tener backups”).
* **Estrategia de failover**: Procedimientos y monitoreo para conmutación.

### 3. Almacenamiento
* **Shared storage** (NFS/objetos): Para `moodledata` según arquitectura.
* **Separación de IO**: Evitar que cargas de archivos degraden la BD.

## Resultados Esperables
* Mayor continuidad del servicio ante incidentes.
* Mejor soporte a picos de usuarios (matrículas, exámenes).
* Menor riesgo operativo en actualizaciones.
