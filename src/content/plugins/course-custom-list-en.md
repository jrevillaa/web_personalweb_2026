---
name: 'Courses Custom List'
type: 'block'
version: '1.0.0'
description: 'Enrolled courses list block with custom view and advanced presentation criteria.'
features:
  - 'Custom view like “dashboard” per client'
  - 'Grouping by status (in progress/finished/upcoming)'
  - 'Compatibility with filters and pagination'
  - 'Cached per user for performance'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-layer-group'
---

## General Description

**Courses Custom List** replicates a “my courses” experience distinct from Moodle native, maintaining consistency with enrolments and completion models.

### Technical Implementation

1. **Core APIs Integration**
   * Retrieves courses by enrolment and real user visibility.
   * Reads progress/activity using Completion API (depending on configuration).

2. **Performance**
   * Cache per-user (MUC) with invalidation by events (enrol/unenrol, course update).
   * Queries with pagination: avoids loading huge lists in a single request.

3. **Extensibility**
   * Renderable templates with `renderer` and `mustache` (depending on version).
   * Hook for sorting rules and labels per client.

---

## Main Features

1. **Business-oriented UX**
   * Adapts to corporate academy or course sales models.
2. **Scalable**
   * Designed for hundreds or thousands of enrolled courses without degradation.
