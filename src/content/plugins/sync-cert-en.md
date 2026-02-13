---
name: 'Sync Certificates to SGA'
type: 'local'
version: '1.0.0'
description: 'Synchronizes certificates issued in Moodle to the client SGA with signature, audit, and retries.'
features:
  - 'Automatic sending upon certificate issuance'
  - 'Retries via cron and persistent queue'
  - 'Payload signature/validation (HMAC/token)'
  - 'Evidence: logs, status, and correlation'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-certificate'
---

## General Description

**Sync Certificates to SGA** avoids manual processes: when a student obtains a certificate, the SGA receives it automatically to register achievements.

### Technical Design

1. **Reliable Trigger**
   * Listens to certificate issuance events (or course completion).
   * Verifies consistency: user, course, external identifiers.

2. **Secure Integration**
   * Signed payload and timestamp validation.
   * Error handling and retries with backoff.

3. **Audit**
   * Status per certificate: pending/sent/error.
   * History of attempts and response codes.

---

## Main Features

1. **Total automation**
2. **Audit-ready traceability**
3. **Less operational load**
