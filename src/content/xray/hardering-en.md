---
title: 'Moodle Hardening & Security'
description: 'Platform hardening: controls, secure configuration, and attack surface reduction.'
icon: 'fa-solid fa-shield-halved'
order: 3
lang: 'en'
---

## What we solve
Moodle often operates with sensitive data (grades, assessments, personal information). Proper hardening reduces risks without breaking operations.

## Implemented Practices

### 1. Server Security
* **Updates and patches** controlled by maintenance windows.
* **Firewall policies** (only necessary ports).
* **SSH hardening**: keys, limited users, blocking after failed attempts.

### 2. Web Security
* **TLS/SSL** with recommended configuration.
* **Security headers** (CSP, HSTS when applicable, etc.).
* **Rate limiting** on exposed endpoints.

### 3. Secure Moodle
* **Roles and capabilities review**: privilege minimization.
* **Plugin audit**: source control, versions, and permissions.
* **Password and session policies**: adjustment to institutional compliance.

## Benefits
* Fewer incidents and exposure to common vulnerabilities.
* Greater institutional trust (IT, audit, compliance).
* Solid foundation for integrations and growth.
