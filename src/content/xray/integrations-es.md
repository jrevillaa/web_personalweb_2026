---
title: 'Integraciones con Sistemas Académicos (SGA/ERP)'
description: 'Sincronización Moodle ↔ SGA/ERP: alumnos, cursos, secciones y matrículas sin doble digitación.'
icon: 'fa-solid fa-plug-circle-bolt'
order: 6
lang: 'es'
---

## Qué habilita
Automatizar el ciclo académico: altas de usuarios, creación de cursos, matrículas, y reglas de negocio desde el SGA.

## Capacidades

### 1. Sincronización de Datos
* **Alumnos/Docentes**: alta, actualización y desactivación.
* **Cursos/Secciones**: creación y mantenimiento estructural.
* **Matrículas**: enrol/unenrol según reglas del SGA.

### 2. Modos de Integración
* **Web Services API de Moodle**.
* **Jobs programados** (batch) o integración near-real-time.
* **Logs y trazabilidad** con reintentos controlados.

### 3. Gobernanza
* Manejo de errores y colas.
* Auditoría de cambios (quién/cuándo/qué).
* Idempotencia para evitar duplicados.

## Beneficios
* Menos carga operativa en TI.
* Datos consistentes entre sistemas.
* Procesos escalables en matrícula y cierres.
