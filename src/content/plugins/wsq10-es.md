---
name: 'WS to Q10'
type: 'local'
version: '1.0.0'
description: 'Integración completa Moodle ↔ Q10 por REST: sincroniza estudiantes, cursos, periodos y matrículas con control de cambios.'
features:
  - 'Sincronización por periodo académico'
  - 'Delta sync y normalización de datos'
  - 'Logs detallados y panel de ejecución'
  - 'Idempotencia y reintentos por cron'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-link'
---

## Descripción General

**WS to Q10** implementa una integración estable y operable entre Q10 y Moodle, orientada a instituciones con alta rotación de matrículas.

### Capacidades Técnicas

1. **Sincronización por Periodo**
   * Ejecuta jobs por periodo/semestre con control de estados.
   * Reglas de creación/actualización de estructura.

2. **Normalización**
   * Manejo de caracteres, códigos, formatos de sección.
   * Validaciones antes de aplicar cambios.

3. **Operación y Auditoría**
   * Panel de últimas ejecuciones, tiempos, errores, reintentos.
   * Export de logs para soporte y auditoría.

---

## Características Principales

1. **Automatización robusta**
2. **Operable por TI**
3. **Listo para escala**
