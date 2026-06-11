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
- La revalidación on-demand de contenido depende de `SANITY_REVALIDATE_SECRET`.

## Sanity webhook (on-demand revalidation)

Objetivo: refrescar contenido en producción justo después de publicar, actualizar o eliminar documentos `work`.

### 1) Endpoint en Next.js

- Ruta: `/api/revalidate`
- Método: `POST`
- Seguridad: header `Authorization: Bearer <SANITY_REVALIDATE_SECRET>`
- Archivo: `src/app/api/revalidate/route.ts`

### 2) Variable de entorno en Vercel

- Nombre: `SANITY_REVALIDATE_SECRET`
- Valor: cadena larga aleatoria (mínimo recomendado: 32 caracteres)
- Entornos: `Production` (y `Preview` si quieres validar webhooks en previews)

### 3) Configuración exacta del webhook en Sanity

En Sanity Manage > API > Webhooks crea un webhook con:

- Name: `Next revalidate work`
- URL: `https://natalia-drone.vercel.app/api/revalidate`
- HTTP method: `POST`
- Filter: `_type == "work"`
- Trigger on: `Create`, `Update`, `Delete`
- Projection:

```groq
{
	"_type": _type,
	"slug": slug.current
}
```

- HTTP Headers:

```text
Authorization: Bearer <SANITY_REVALIDATE_SECRET>
```

### 4) Verificación rápida

1. Publica o edita un documento `work` en Studio.
2. Comprueba que el webhook responde `200` en el historial de Sanity.
3. Abre `/portfolio` en producción y valida que el cambio aparece sin redeploy.
4. Si cambias slug, valida también la nueva ruta `/portfolio/<slug>`.

## Operational notes

- Vercel Analytics y Speed Insights se cargan automáticamente desde el layout raíz.
- Los previews de Vercel son útiles para validar cambios de contenido y de SEO antes de publicar.
- Si cambia el dominio, actualiza también `NEXT_PUBLIC_SITE_URL` para mantener consistencia en metadata y sitemap.
