# Deployment

## Target platform

El proyecto está preparado para desplegar en Vercel.

## Deployment flow

1. Conecta el repositorio a Vercel.
2. Define las variables de entorno del proyecto.
3. Revisa los preview deployments antes de fusionar cambios.
4. Publica la rama principal como producción.
5. Comprueba home, portfolio, sitemap, robots, contacto y Studio tras cada despliegue importante.

## Runtime checks

- El formulario de contacto depende de `RESEND_API_KEY` y `CONTACT_TO_EMAIL`.
- Sanity necesita `NEXT_PUBLIC_SANITY_PROJECT_ID` y `NEXT_PUBLIC_SANITY_DATASET`.
- La URL canónica del sitio se resuelve a partir de `NEXT_PUBLIC_SITE_URL`.

## Operational notes

- Vercel Analytics y Speed Insights se cargan automáticamente desde el layout raíz.
- Los previews de Vercel son útiles para validar cambios de contenido y de SEO antes de publicar.
- Si cambia el dominio, actualiza también `NEXT_PUBLIC_SITE_URL` para mantener consistencia en metadata y sitemap.
