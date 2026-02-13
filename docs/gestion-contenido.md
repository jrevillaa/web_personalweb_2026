# Guía de Gestión de Contenido

Este sitio web utiliza **Markdown** y **Content Collections** de Astro para gestionar el contenido dinámico. No necesitas base de datos, todo está en archivos locales.

## 1. Plugins
Los plugins se encuentran en `src/content/plugins/`.
Para agregar un nuevo plugin, crea un archivo `.md` (ej: `nuevo-plugin-es.md`) con la siguiente estructura:

```markdown
---
name: "Nombre del Plugin"
type: "block" # Opciones: block, mod, theme, local, report, auth, enrol
version: "1.0.0"
description: "Descripción corta para las tarjetas."
features:
  - "Característica 1"
  - "Característica 2"
  - "Característica 3"
repoUrl: "https://github.com/usuario/repo" # Opcional
downloadUrl: "https://moodle.org/plugins/..." # Opcional
lang: "es" # 'es' o 'en'
---

Aquí va el contenido detallado del plugin en formato Markdown.
Puedes usar **negritas**, listas, imágenes, etc.

## Instalación
1. Paso uno...
2. Paso dos...
```

### Campos Importantes:
- **slug**: El nombre del archivo define la URL. `mi-plugin-es.md` será `/es/plugins/mi-plugin`.
- **lang**: Define si aparece en la versión en inglés o español. Debes crear dos archivos si quieres ambos idiomas (ej: `plugin-es.md` y `plugin-en.md`).

## 2. Casos de Estudio (Case Studies)
Se encuentran en `src/content/case-studies/`.
Estructura similar a los plugins:

```markdown
---
title: "Título del Caso"
description: "Resumen del proyecto."
date: 2023-10-15
client: "Nombre Cliente"
tags: ["Performance", "Migration"]
lang: "es"
---

Contenido del caso de estudio...
```

## 3. Moodle X-Ray
Se encuentran en `src/content/xray/`.
Estos son los ítems de la sección de expertise técnico.

## 4. Textos Generales (Traducciones)
Los textos fijos (botones, títulos de secciones, menú) están en:
- `src/i18n/es.json` (Español)
- `src/i18n/en.json` (Inglés)

Formato JSON estándar:
```json
{
  "nav.home": "Inicio",
  "contact.title": "Contáctame"
}
```
