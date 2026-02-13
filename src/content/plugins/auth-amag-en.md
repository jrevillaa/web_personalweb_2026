---
name: 'AMAG Auth Gateway'
type: 'auth'
version: '1.0.0'
description: 'Real-time authentication against SGA: transparent login and automatic user recognition in Moodle.'
features:
  - 'Credentials validation against SGA'
  - 'Automatic provisioning (if user does not exist in Moodle)'
  - 'Attribute and role mapping'
  - 'Logs and brute force protection'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-right-to-bracket'
---

## General Description

**AMAG Auth Gateway** allows logging into Moodle using SGA credentials, with secure and traceable provisioning.

### Technical Approach

1. **Authentication**
   * Real-time validation against SGA endpoint.
   * Timeouts and circuit breaker to avoid degradation if SGA fails.

2. **Provisioning**
   * If the user does not exist, it is created with minimal attributes + profile sync.
   * Controlled mapping of roles and fields.

3. **Security**
   * Rate limiting and blocking based on failed attempts.
   * Authentication logs with correlation without exposing secrets.

---

## Main Features

1. **SSO-like experience**
2. **Fewer duplicate accounts**
3. **Secure operation**
