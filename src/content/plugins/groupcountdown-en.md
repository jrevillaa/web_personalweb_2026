---
name: 'Group Enrollment Countdown'
type: 'local'
version: '1.0.0'
description: 'Controls the validity time of an enrollment by group, showing a real-time countdown within the course.'
features:
  - 'TTL per group (differentiated rules)'
  - 'Real-time countdown visible to user'
  - 'Actions on expiration: restrict access / unenroll'
  - 'Synchronization via cron + events'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-hourglass-half'
---

## General Description

**Group Enrollment Countdown** allows selling time-based access or managing cohorts with expiration, with a clear UX of remaining time.

### Technical Implementation

1. **Time per Group Model**
   * TTL configurable per group.
   * Count start by event (enrolment / first visit / fixed date).

2. **Render and Real Time**
   * Render of countdown by block/renderer.
   * Secure server-side calculation (avoids client manipulation).

3. **Expiration Actions**
   * Controlled access restriction or unenrolment.
   * Jobs via cron with idempotency and logs.

---

## Main Features

1. **Validity control**
2. **Transparent experience**
3. **Automatic operation**
