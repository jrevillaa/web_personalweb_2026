---
name: 'Bulk Course Backup to Object Storage'
type: 'local'
version: '1.0.0'
description: 'Massive course backups (MBZ) with automatic upload to bucket (Huawei OBS / AWS S3) and integrity verification.'
features:
  - 'Cron tasks with queue and retries'
  - 'Huawei OBS and AWS S3 support'
  - 'Integrity verification (checksum) and logs'
  - 'Retention and versioning policies'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-cloud-arrow-up'
---

## General Description

**Bulk Course Backup to Object Storage** generates backups at scale and deposits them in object storage, ideal for DR and continuity.

### Technical Implementation

1. **MBZ Generation**
   * Orchestration by scheduled tasks to avoid blocking.
   * Concurrency control (prevents disk/IO saturation).

2. **Upload to Bucket**
   * Integration with S3/OBS using secure credentials.
   * Multipart upload when applicable for large files.
   * Checksum to validate integrity post-upload.

3. **Governance**
   * Configurable retention (days/last N backups).
   * Detailed logs per course and execution.

---

## Main Features

1. **DR-ready**
2. **Scalable**
3. **Auditability**
