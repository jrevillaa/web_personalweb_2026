---
name: 'Evaluation 360'
type: 'mod'
version: '1.0.0'
description: '360° evaluation activity in Moodle with weighting rules, optional anonymity, and consolidated reports.'
features:
  - 'Multiple evaluators per user (manager/peers/self/client)'
  - 'Weighting by dimension and evaluator role'
  - 'Configurable anonymity with minimum threshold'
  - 'Exportable individual and aggregated reports'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-clipboard-list'
---

## General Description

**Evaluation 360** implements a complete performance evaluation as a **Moodle activity**, allowing evaluation campaigns with advanced rules for evaluator assignment and result consolidation.

### Technical Design

1. **Data Model**
   * Normalized tables for campaigns, participants, assignments, and answers.
   * Indexes on frequently queried fields (campaignid, userid, evaluatorid, status) for performance in large cohorts.

2. **Robust Business Rules**
   * Weighting by dimension and evaluator type.
   * Deterministic and auditable calculation: reproducible and traceable results.
   * Edit blocking rules when evaluation is submitted.

3. **Security and Privacy**
   * Optional anonymity with **minimum threshold** (prevents re-identification by few evaluators).
   * Separate capabilities: create campaign, assign evaluators, view reports, export.
   * Support for Privacy API and audit events.

---

## Main Features

1. **Smart Assignment**
   * Manual or by rules (groups, cohorts, profiles).
2. **Reports and Export**
   * Aggregated views + export (CSV/XLSX depending on stack).
3. **Performance**
   * Paginated queries, incremental calculation, and caching on heavy reports.
