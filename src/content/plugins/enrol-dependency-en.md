---
name: 'Enrollment Dependency'
type: 'enrol'
version: '1.0.0'
description: 'Enrollment conditioned by form: the user answers configurable questions and Moodle decides on enrolment/segmentation.'
features:
  - 'Question builder (text/option/multiple)'
  - 'Rules and branching by answers'
  - 'Segmentation by group/cohort upon enrolling'
  - 'Audit of answers and decisions'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-diagram-project'
---

## General Description

**Enrollment Dependency** turns enrolment into an intelligent flow: the user completes a form and, based on rules, is enrolled and segmented.

### Technical Design

1. **Configurable Form**
   * Questions per enrolment instance, with server-side validation.
   * Support for conditions and rules per answer.

2. **Decision and Segmentation**
   * Enrols according to rule and assigns **group/cohort** automatically.
   * Idempotency: does not re-apply rules if valid enrolment already exists.

3. **Privacy**
   * Implementation compatible with Privacy API.
   * Access control: only administrators see full answers.

---

## Main Features

1. **Smart onboarding**
2. **Automatic segmentation**
3. **Better conversion and operational order**
