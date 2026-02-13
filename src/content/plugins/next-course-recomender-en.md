---
name: 'Next Course Recommender'
type: 'block'
version: '1.0.0'
description: 'Block that detects 100% progress, notifies the SGA, and recommends next courses with automatic enrollment.'
features:
  - 'Rules based on progress and completion'
  - 'Notification to SGA via REST with signature/HMAC'
  - 'Next course recommendation from catalog'
  - 'Automatic enrollment with transactional control'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-forward'
---

## General Description

**Next Course Recommender** automates the student’s “next step”: upon completing a course, it sends the event to the SGA and suggests learning paths.

### Architecture and Security

1. **Completion Detection**
   * Hooks into completion events and validates consistency (avoids false positives).
   * Supports retries: if the SGA does not respond, it queues and re-executes via cron.

2. **Secure Integration**
   * REST with **HMAC signature** (or rotating token) and timestamp validation.
   * Full traceability (request id, status, retries, error codes).

3. **Reliable Enrollment**
   * Enrolment as a logical transaction: does not suggest if it cannot enrol.
   * Idempotency control to avoid double enrolment.

---

## Main Features

1. **Cycle automation**
   * Less friction: the student doesn't get “lost” upon finishing.
2. **Conversion-oriented**
   * Actionable recommendations + immediate enrolment.
