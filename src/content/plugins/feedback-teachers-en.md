---
name: 'Feedback Teachers (Blind Feedback)'
type: 'mod'
version: '1.0.0'
description: 'Feedback activity with selective visibility: students respond, but the teacher (or other roles) cannot see it or access results.'
features:
  - 'Real hiding by role/capability (not just “hidden”)'
  - 'Capabilities per instance: rules per activity'
  - 'Protection against direct URL access'
  - 'Audit of accesses and events'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-user-shield'
---

## General Description

**Feedback Teachers (Blind Feedback)** was born from a frequent requirement in institutions: applying surveys where **the teacher must not know the activity exists**, nor access responses, even with elevated permissions within the course.

### Technical Approach and Security

1. **Capability Control**
   * Specific capabilities are defined to *view*, *attempt*, and *report*.
   * Visibility is resolved by `has_capability()` with **course context** and **module context**, avoiding fragile global rules.

2. **Defense in Depth**
   * Removes the module from `course_modinfo` for restricted roles.
   * Protects endpoints: `view.php`, `complete.php`, `analysis.php` with `require_login()` + capability validation.
   * Blocks access via URL, internal indexing, and course listings.

3. **Privacy and Traceability**
   * Emits Moodle events (`\core\event\`) for audit.
   * **Privacy API** (GDPR) support for data export/erasure when applicable.

---

## Main Features

1. **“Invisible by Role” Mode**
   * For each activity, select the role(s) that should not see it.
2. **Protected Results**
   * Strict separation between responding vs. viewing reports permissions.
3. **Backup/Restore Compatibility**
   * Includes `backup_moodle2` and `restore_moodle2` for migration between sites.
