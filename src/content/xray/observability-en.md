---
title: 'Moodle Observability'
description: 'Real monitoring of Moodle: metrics, logs, traces, and actionable alerts.'
icon: 'fa-solid fa-chart-line'
order: 4
lang: 'en'
---

## The problem
Without visibility, Moodle “goes down by surprise”. Observability allows anticipating degradation before it affects users.

## What we implement

### 1. Infrastructure Metrics
* **CPU, RAM, Disk, IO, Network** per node.
* **PHP-FPM**: workers, queues, latencies.
* **Redis**: memory, hits/misses, latency.

### 2. Database
* **Slow query log** and critical query analysis.
* **Connections and locks**: bottleneck detection.
* **Size and growth**: capacity planning.

### 3. Moodle and User Experience
* **Response times** for key routes (login, course, quiz).
* **Application errors**: logs correlated by timestamp.
* **Alerts**: defined thresholds and notification per channel.

## Result
* Fewer “mysterious” crashes.
* Data-driven decisions to optimize performance.
* Reduced MTTD/MTTR (faster detection and recovery).
