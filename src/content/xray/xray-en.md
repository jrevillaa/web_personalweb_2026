---
title: 'Xray Moodle Audit'
description: 'Technical and functional audit of Moodle with prioritized findings and executable action plan (quick wins + roadmap).'
icon: 'fa-solid fa-x-ray'
order: 12
lang: 'en'
---

## What it is
A comprehensive diagnosis of your Moodle to identify **bottlenecks**, **risks**, **technical debt**, and opportunities for improvement in performance, security, and operation.

## What we evaluate

### 1. Infrastructure & Performance
* Architecture review (web, PHP-FPM, caches, sessions, storage).
* Current metrics vs. demand (concurrency, peaks, IO).
* Identification of saturation and degradation points.

### 2. Database
* Analysis of **slow queries** and recurring queries.
* parameters and engine health review.
* Tuning and index recommendations (when applicable).

### 3. Moodle & Configuration
* Roles/capabilities review, session policies, and authentication.
* Cron, tasks, queues, MUC caches configuration.
* Theme and dependency review (UX/performance impact).

### 4. Plugins & Integrations
* Complete inventory and compatibility with current version.
* Risks: discontinued plugins, forks, custom without change control.
* Impact of integrations on load and security.

## Deliverables
* Report with **prioritized findings** (Critical / High / Medium / Low).
* List of **quick wins** (applicable in 1–3 days).
* 30/60/90-day roadmap with estimated effort and risks.
* Hardening and operation checklist (base runbook).

## Result
Clear decisions to improve Moodle without guessing: what to do first, why, and with what impact.
