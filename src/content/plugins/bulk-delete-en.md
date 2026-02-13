---
name: 'Bulk Course Delete'
type: 'local'
version: '1.0.0'
description: 'Massive background course deletion via cron, avoiding slowness and end-user blocking.'
features:
  - 'Batch deletion queue'
  - 'Secure execution via cron (non-UI blocking)'
  - 'Logs and status per course'
  - 'Permission control and confirmations'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-trash-can'
---

## General Description

**Bulk Course Delete** solves the problem of deleting courses at scale without affecting site performance.

### Technical Implementation

1. **Queue and Batches**
   * Queues courses to delete with status (pending/in process/done/error).
   * Processes in configurable batches to control load.

2. **Security**
   * Only authorized roles can queue tasks.
   * Double validation before deletion: context and permissions.

3. **Operation**
   * Logs per course with error cause and retries.
   * Integration with scheduled tasks (`\core\task\scheduled_task`) depending on version.

---

## Main Features

1. **Does not affect users**
2. **Secure operation**
3. **Scalable**
