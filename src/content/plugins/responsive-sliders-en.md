---
name: 'Responsive Slides'
type: 'block'
version: '1.0.0'
description: 'Responsive slides block: allows configuring images per device and orientation to improve performance and UX.'
features:
  - 'Images per breakpoint: desktop/tablet/phone'
  - 'Orientation: portrait/landscape'
  - 'Optimized loading (avoids downloading heavy images on mobile)'
  - 'Simple admin UI with preview'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-images'
---

## General Description

**Responsive Slides** optimizes the visual presentation of Moodle without penalizing mobile: each device downloads the appropriate asset.

### Technical Implementation

1. **Detection and Breakpoints**
   * Image selection by size/orientation.
   * Consistent rules to avoid layout shifts.

2. **Performance**
   * Avoids downloading desktop banners on phones.
   * Compatibility with lazy loading.

3. **Operation**
   * Administration UI per slide with dimension/weight validation.
   * Cached configuration for fast rendering.

---

## Main Features

1. **Better UX**
2. **More performance on mobile**
3. **Controlled branding**
