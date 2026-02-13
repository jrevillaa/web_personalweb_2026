---
title: 'Migraciones Moodle (Cloud ↔ On-Premise)'
description: 'Migración completa de Moodle con enfoque en continuidad, integridad de datos y seguridad.'
icon: 'fa-solid fa-cloud-arrow-up'
order: 10
lang: 'es'
---

## Qué incluye una migración real
No es solo “copiar archivos”: hay datos, permisos, colas, cron, cachés, dominios y certificados.

## Proceso

### 1. Preparación
* Congelamiento de cambios y ventana.
* Backups verificados (BD + `moodledata` + código).
* Plan de cutover y comunicación.

### 2. Ejecución
* Traslado y restauración controlada.
* Ajustes de rutas, permisos y dependencias.
* Configuración de **dominio + SSL**.
* Validación de cron y jobs.

### 3. Post-migración
* Pruebas funcionales (login, cursos, evaluaciones).
* Ajuste de rendimiento base.
* Monitoreo reforzado en las primeras 24–72h.

## Beneficios
* Migración con mínima fricción para usuarios.
* Integridad de datos preservada.
* Plataforma lista para escalar o actualizar.
