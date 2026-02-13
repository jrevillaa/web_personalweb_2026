---
title: 'Moodle Migrations (Cloud ↔ On-Premise)'
description: 'Complete Moodle migration with a focus on continuity, data integrity, and security.'
icon: 'fa-solid fa-cloud-arrow-up'
order: 10
lang: 'en'
---

## What a real migration includes
It's not just “copying files”: there are data, permissions, queues, cron, caches, domains, and certificates.

## Process

### 1. Preparation
* Change freeze and maintenance window.
* Verified backups (DB + `moodledata` + code).
* Cutover plan and communication.

### 2. Execution
* Transfer and controlled restoration.
* Adjustments of paths, permissions, and dependencies.
* **Domain + SSL** configuration.
* Validation of cron and jobs.

### 3. Post-migration
* Functional tests (login, courses, evaluations).
* Base performance adjustment.
* Reinforced monitoring in the first 24–72h.

## Benefits
* Migration with minimal friction for users.
* Data integrity preserved.
* Platform ready to scale or upgrade.
