---
title: 'Quiz & Exam Optimization'
description: 'Preparing Moodle for high-concurrency assessments: performance, stability, and control.'
icon: 'fa-solid fa-clipboard-check'
order: 7
lang: 'en'
---

## What we tackle
Exams stress Moodle: simultaneous peaks, autosave, intensive logs, and frequent queries.

## Key Actions

### 1. Infra and Performance
* **PHP-FPM** adjustments and process limits.
* **Caching** optimization for navigation and questions.
* IO review in `moodledata` and sessions.

### 2. Database
* Identification of critical queries in quizzes.
* Index/parameterization adjustments when appropriate.
* Reduction of locks and collisions in peaks.

### 3. Exam Operation
* Windows and loading strategies (if applicable).
* Reinforced monitoring during assessment.
* Contingency plan and incident support.

## Result
* More stable assessments.
* Fewer crashes due to saturation.
* Better student experience during the exam.
