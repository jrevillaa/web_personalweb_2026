---
name: 'Culqi Enrollment Gateway'
type: 'enrol'
version: '1.0.0'
description: 'Enrolment plugin via payment with Culqi (Peru): checkout, payment validation, enrolment, and receipts.'
features:
  - 'Payment confirmation webhook'
  - 'Basic anti-fraud validation (replay protection)'
  - 'Automatic enrolment upon payment confirmation'
  - 'Logs and transaction reconciliation'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-credit-card'
---

## General Description

**Culqi Enrollment Gateway** converts Moodle into a sellable platform: pay and get automatically enrolled, with security controls and traceability.

### Technical Implementation

1. **Payments and Webhooks**
   * Flow checkout → payment intent → confirmation webhook.
   * Webhook signature validation and `replay protection` by timestamp/nonce.

2. **Security**
   * Sensitive card data is never stored in Moodle.
   * Amount/currency/product validation before enrolling.
   * Idempotency: a confirmed transaction does not execute double enrolment.

3. **Operation**
   * Logs panel for reconciliation (paid / pending / failed).
   * Retries via cron for temporary failures.

---

## Main Features

1. **Immediate purchase and access**
2. **Evidence and audit**
3. **Ready to scale**
