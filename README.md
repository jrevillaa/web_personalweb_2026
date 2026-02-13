# Jair Revilla - Moodle Engineer Portfolio

Sitio web personal profesional desarrollado con **Astro**, enfocado en SEO técnico, performance y gestión de contenido estático.

## 🛠 Tech Stack

- **Framework**: Astro 5.0
- **Lenguajes**: TypeScript, CSS (Vanilla Tokens), HTML5
- **Icons**: FontAwesome 6 Free
- **CMS**: Decap CMS (Open Source)
- **i18n**: Soporte nativo para Español e Inglés
- **Deployment**: GitHub Pages (via GitHub Actions)

## 🚀 Inicio Rápido

1.  **Clonar el repositorio:**
    ```bash
    git clone <tu-repo-url>
    cd <tu-repo-nombre>
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Visita `http://localhost:4321`.

## 📝 Gestión de Contenido (CMS) - ¡Nuevo!

Este proyecto incluye **Decap CMS** para gestionar el contenido (Plugins, Casos de Estudio, X-Ray) a través de una interfaz gráfica, sin necesidad de editar código ni pagar servicios externos.

**Pasos para editar contenido:**

1.  Abre una terminal y ejecuta el servidor local del CMS:
    ```bash
    npx decap-server
    ```

2.  En **otra** terminal, asegúrate de que tu sitio esté corriendo:
    ```bash
    npm run dev
    ```

3.  Abre tu navegador en:
    👉 **http://localhost:4321/admin**

4.  ¡Listo! Usa la interfaz para crear, editar o borrar contenido. Al guardar, el CMS hará automáticamente el **commit** y **push** a tu rama actual en GitHub.

## 📂 Estructura del Proyecto

```text
/
├── public/
│   ├── admin/          # Configuración del CMS
│   └── ...
├── src/
│   ├── components/     # Componentes Astro reutilizables
│   ├── content/        # Colecciones de contenido (MD/MDX)
│   ├── i18n/           # Archivos de traducción (JSON)
│   ├── layouts/        # Plantillas de página
│   └── pages/          # Rutas del sitio
└── astro.config.mjs
```

## 📄 Licencia

Este proyecto es propiedad de Jair Revilla.
