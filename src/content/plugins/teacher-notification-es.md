---
name: 'Teacher Notifications Center'
type: 'local'
version: '1.0.0'
description: 'Centro de notificaciones para docentes basado en reglas: alerta sobre tareas sin calificar, inactividad, riesgo y seguimiento.'
features:
  - 'Reglas configurables por curso/categoría'
  - 'Alertas por tareas sin calificar (SLA de calificación)'
  - 'Alertas por inactividad de estudiantes'
  - 'Alertas de riesgo (baja participación / bajas notas / no entregas)'
repoUrl: ''
lang: 'es'
icon: 'fa-solid fa-bell'
---

## Descripción General

**Teacher Notifications Center** ayuda a docentes y coordinación académica a detectar “señales tempranas” en el aula virtual para actuar antes de que el alumno abandone o el curso se desordene.

### Escenarios Implementados (configurables)

1. **Pendientes de Calificación**
   * Tareas entregadas **sin calificar** por X días.
   * Recordatorios escalonados (X / X+2 / X+5 días).
   * Vista por curso y por actividad.

2. **Inactividad del Estudiante**
   * Estudiantes que no ingresan al curso por X días.
   * Estudiantes sin interacción en actividades clave.
   * Segmentación por grupo/cohorte.

3. **Riesgo Académico**
   * Bajas calificaciones acumuladas o tendencia a la baja.
   * No entrega de tareas consecutivas.
   * Participación mínima en foros (si aplica).

4. **Eventos Operativos**
   * Fallos recurrentes de intento en quiz.
   * Actividades con fechas próximas sin participación.

### Implementación Técnica

* Jobs por cron para evaluar reglas a escala sin cargar el frontend.
* Cache de resultados por curso para dashboards rápidos.
* Capabilities: docente ve lo suyo, coordinación ve agregados.

---

## Características Principales

1. **Prevención de abandono**
2. **Mejor control operativo**
3. **Acción basada en datos**
