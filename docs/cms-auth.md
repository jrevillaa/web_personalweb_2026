# Configuración de Autenticación para CMS (GitHub Pages)

Dado que GitHub Pages es un host estático, no puede manejar el intercambio de llaves secretas de OAuth por sí mismo. Para que el panel de administración (`/admin`) funcione en producción y te permita hacer login con GitHub, tienes dos opciones:

## Opción A: Netlify Identity (Recomendada/Gratis)
Si mueves tu hosting a **Netlify** (que también es gratis como GitHub Pages), la autenticación funciona con un solo clic habilitando "Git Gateway".

## Opción B: Auth Server Externo (Para GitHub Pages)
Si deseas mantenerte en GitHub Pages, necesitas un pequeño servidor intermedio para la autenticación. Puedes usar servicios gratuitos o configurar el backend de Decap CMS para apuntar a un servicio de OAuth.

### Flujo de Desarrollo Local (Sin Auth Server)
Puedes probar el CMS en tu máquina local sin configurar servidores OAuth:

1. Abrir una terminal en el proyecto.
2. Ejecutar:
   ```bash
   npx decap-server
   ```
3. En otra terminal, iniciar Astro:
   ```bash
   npm run dev
   ```
4. Navegar a `http://localhost:3000/admin`.
5. Esto usará tu configuración local de Git para guardar cambios directos en tu disco duro, que luego puedes subir con `git push`.

**Nota Importante**: El archivo `config.yml` actual está configurado para `git-gateway`. Si usas el modo local, el `local_backend: true` debe activarse o el proxy se encargará automáticamente.

Para producción puro en GitHub Pages sin servidor intermedio, la edición de contenido vía web requeriría una solución como **Staticman** o un servicio OAuth externo, lo cual añade complejidad. La opción de `npx decap-server` es perfecta para un flujo de "editar localmente con UI y pushear".
