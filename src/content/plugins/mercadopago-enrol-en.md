---
name: 'MercadoPago Enrollment Gateway'
type: 'enrol'
version: '1.0.0'
description: 'Enrollment plugin via MercadoPago payment: webhook confirmation, status control, and automatic enrollment.'
features:
  - 'Support for payment statuses (approved/pending/rejected)'
  - 'Secure webhook with origin validation'
  - 'Enrolment and unenrolment based on business rules'
  - 'Reconciliation and operational reports'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-money-check-dollar'
---

## General Description

**MercadoPago Enrollment Gateway** allows selling courses and automating enrolments in Moodle, with robust payment status handling.

### Best Practices

1. **Payment Status**
   * Enrolment only with confirmed status.
   * Handling of pending payments with configurable expiration.
   * Order validation: product, price, user.

2. **Security and Traceability**
   * Signature/origin verification of notifications.
   * Request and response logging with correlation.

3. **Scalability**
   * Asynchronous processing via cron to avoid timeouts.
   * Event queue and controlled retries.

---

## Main Features

1. **Reliable checkout**
2. **Automatic and secure enrolment**
3. **Complete operational control**
