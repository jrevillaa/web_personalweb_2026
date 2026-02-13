---
name: 'SSO SAML2 Bridge'
type: 'auth'
version: '1.0.0'
description: 'SAML2 SSO authentication: direct entry if the user is already authenticated in the client IdP.'
features:
  - 'SAML2 with strict assertion validation'
  - 'Attribute mapping and provisioning'
  - 'Multi-IdP support (depending on configuration)'
  - 'Session control and logout'
repoUrl: ''
lang: 'en'
icon: 'fa-solid fa-id-card-clip'
---

## General Description

**SSO SAML2 Bridge** allows Moodle to trust the client's Identity Provider: if you are already logged in, you enter without friction.

### Security Best Practices

1. **Assertion Validation**
   * Verification of signature, audience, issuer, and expiration.
   * Controlled clock skew and rejection of expired tokens.

2. **Mapping and Provisioning**
   * Mapping of `NameID`/attributes to Moodle user.
   * Controlled creation/update with domain rules.

3. **Governance**
   * SSO logs and interpretable errors for IT.
   * Support for logout and session control.

---

## Main Features

1. **Frictionless entry**
2. **Compliance and security**
3. **Less password support**
