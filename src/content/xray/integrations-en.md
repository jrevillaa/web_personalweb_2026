---
title: 'Integrations with Academic Systems (SGA/ERP)'
description: 'Moodle ↔ SGA/ERP Synchronization: students, courses, sections, and enrolments without double entry.'
icon: 'fa-solid fa-plug-circle-bolt'
order: 6
lang: 'en'
---

## What it enables
Automate the academic cycle: user registration, course creation, enrolments, and business rules from the SGA.

## Capabilities

### 1. Data Synchronization
* **Students/Teachers**: creation, update, and deactivation.
* **Courses/Sections**: creation and structural maintenance.
* **Enrolments**: enrol/unenrol according to SGA rules.

### 2. Integration Modes
* **Moodle Web Services API**.
* **Scheduled jobs** (batch) or near-real-time integration.
* **Logs and traceability** with controlled retries.

### 3. Governance
* Error handling and queues.
* Change audit (who/when/what).
* Idempotency to avoid duplicates.

## Benefits
* Less operational load on IT.
* Consistent data between systems.
* Scalable processes in enrolment and closures.
