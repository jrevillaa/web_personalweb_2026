---
title: 'High Availability Architecture'
description: 'HA designs for Moodle: fault tolerance, load balancing, redundancy, and operational continuity.'
icon: 'fa-solid fa-network-wired'
order: 2
lang: 'en'
---

## Objective
Keep Moodle available even in the face of infrastructure failures, demand peaks, or scheduled maintenance, without compromising the experience of students and teachers.

## Key Components

### 1. Balancing and Web Layer
* **Load Balancer (L4/L7)**: Intelligent distribution and health checks.
* **Horizontal scaling**: Multiple web nodes (Nginx/Apache + PHP-FPM).
* **Sticky sessions (when applicable)**: Controlled, avoiding unnecessary coupling.

### 2. Data and Persistence
* **Replicated DB**: Primary/secondary or cluster depending on criticality.
* **Verified backups**: Restoration tests (not just “having backups”).
* **Failover strategy**: Procedures and monitoring for switching.

### 3. Storage
* **Shared storage** (NFS/objects): For `moodledata` according to architecture.
* **IO Separation**: Prevent file uploads from degrading DB performance.

## Expected Results
* Greater service continuity in case of incidents.
* Better support for user peaks (enrolment, exams).
* Lower operational risk in updates.
