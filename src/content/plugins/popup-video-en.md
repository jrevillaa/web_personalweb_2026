---
name: 'Popup Video'
type: 'mod'
version: '1.0.0'
description: 'Activity to insert videos (YouTube/Vimeo) with display modes: modal popup, embedded iframe, or expandable toggle.'
features:
  - 'Secure validation of URLs and providers'
  - 'Popup Mode (modal) with lazy loading'
  - 'Iframe Mode with security policies'
  - 'Toggle Mode to save page space'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-circle-play'
---

## General Description

**Popup Video** allows incorporating audiovisual content without relying on blocks or HTML hacks, with UX options for different course methodologies.

### Implemented Best Practices

1. **Embed Security**
   * URL sanitization and provider whitelist.
   * Use of secure parameters and autoplay restrictions according to policy.
   * Configuration of `referrerpolicy` and iframe attributes when applicable.

2. **Performance**
   * **Lazy loading**: the iframe is created when opening popup or expanding toggle.
   * Avoids loading dozens of iframes when rendering a page with many resources.

3. **Accessibility**
   * Focus control when opening/closing modal.
   * Keyboard navigation and ARIA labels for components.

---

## Main Features

1. **Modal Popup**
   * Ideal for clean course pages: video loads only when user requests it.
2. **Embedded Iframe**
   * For always-visible content.
3. **Expandable Toggle**
   * For long lessons where video is optional.
