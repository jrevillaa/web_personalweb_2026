---
name: 'WS to PeopleSoft'
type: 'local'
version: '1.0.0'
description: 'Complete Moodle ↔ Oracle PeopleSoft integration via REST: synchronization of users, courses, and enrolments with traceability.'
features:
  - 'Student/Teacher synchronization'
  - 'Creation/update of courses and sections'
  - 'Automated enrolment + rules'
  - 'Queues, retries, and error reports'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-arrows-rotate'
---

## General Description

**WS to PeopleSoft** connects Moodle with PeopleSoft to automate user, course, and enrolment creation/update with an enterprise approach.

### Technical Implementation

1. **Asynchronous Jobs**
   * Cron as integration engine: stable and scalable.
   * Retries and “dead-letter queue” for non-recoverable cases.

2. **Data Consistency**
   * External identifier mapping.
   * Pre-enrolment validations: course existence, user status, period.

3. **Security**
   * Credentials/token validation.
   * Audit logs and access control to plugin screens.

---

## Main Features

1. **Enterprise integration**
2. **Less operational load**
3. **Higher reliability**
