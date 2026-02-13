---
name: 'Evaluation 360'
type: 'mod'
version: '1.0.0'
description: 'Actividad de evaluación 360° en Moodle con reglas de ponderación, anonimato opcional y reportes consolidados.'
features:
  - 'Múltiples evaluadores por usuario (jefe/pares/auto/cliente)'
  - 'Ponderaciones por dimensión y por rol evaluador'
  - 'Anonimato configurable con umbral mínimo'
  - 'Reportes individuales y agregados exportables'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-clipboard-list'
---

## Descripción General

**Evaluation 360** implementa una evaluación de desempeño completa como **actividad Moodle**, permitiendo campañas de evaluación con reglas avanzadas de asignación de evaluadores y consolidación de resultados.

### Diseño Técnico

1. **Modelo de Datos**
   * Tablas normalizadas para campañas, participantes, asignaciones y respuestas.
   * Índices en campos de consulta frecuente (campaignid, userid, evaluatorid, status) para rendimiento en cohortes grandes.

2. **Reglas de Negocio Robustas**
   * Ponderación por dimensión y tipo de evaluador.
   * Cálculo determinístico y auditable: resultados reproducibles y trazables.
   * Reglas de bloqueo de edición cuando la evaluación se envía.

3. **Seguridad y Privacidad**
   * Anonimato opcional con **umbral mínimo** (evita re-identificación por pocos evaluadores).
   * Capabilities separadas: crear campaña, asignar evaluadores, ver reportes, exportar.
   * Soporte de Privacy API y eventos para auditoría.

---

## Características Principales

1. **Asignación Inteligente**
   * Manual o por reglas (grupos, cohortes, perfiles).
2. **Reportes y Exportación**
   * Vistas agregadas + export (CSV/XLSX según stack).
3. **Performance**
   * Consultas paginadas, cálculo incremental y caché en reportes pesados.
