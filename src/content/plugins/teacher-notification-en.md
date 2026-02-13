---
name: 'Teacher Notifications Center'
type: 'local'
version: '1.0.0'
description: 'Notification center for teachers based on rules: alerts about ungraded assignments, inactivity, risk, and follow-up.'
features:
  - 'Configurable rules per course/category'
  - 'Alerts for ungraded tasks (Grading SLA)'
  - 'Alerts for student inactivity'
  - 'Risk alerts (low participation / low grades / no submissions)'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-bell'
---

## General Description

**Teacher Notifications Center** helps teachers and academic coordination detect “early signals” in the virtual classroom to act before the student drops out or the course gets messy.

### Implemented Scenarios (configurable)

1. **Pending Grading**
   * Assignments submitted **ungraded** for X days.
   * Staggered reminders (X / X+2 / X+5 days).
   * View per course and per activity.

2. **Student Inactivity**
   * Students who haven't entered the course for X days.
   * Students without interaction in key activities.
   * Segmentation by group/cohort.

3. **Academic Risk**
   * Accumulated low grades or downward trend.
   * Consecutive non-submission of assignments.
   * Minimal participation in forums (if applicable).

4. **Operational Events**
   * Recurrent quiz attempt failures.
   * Upcoming activities without participation.

### Technical Implementation

* Cron jobs to evaluate rules at scale without loading the frontend.
* Result cache per course for fast dashboards.
* Capabilities: teacher sees theirs, coordination sees aggregates.

---

## Main Features

1. **Dropout prevention**
2. **Better operational control**
3. **Data-driven action**
