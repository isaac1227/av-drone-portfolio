# SEO Strategy

## Metadata

La metadata se centraliza en `src/lib/seo.ts` y se reutiliza por ruta mediante `generateMetadata`. Esto mantiene títulos, descripciones, canonical URLs y keywords alineados en todo el sitio.

## Open Graph and social previews

- Cada página importante tiene título y descripción propios.
- Se define una imagen por defecto para compartir enlaces.
- La web usa `metadataBase` para generar URLs absolutas consistentes.

## Sitemap

- `src/app/sitemap.ts` combina rutas estáticas y trabajos publicados en Sanity.
- Cada trabajo público genera su propia URL en el sitemap.
- La frecuencia de actualización se mantiene simple y realista.

## Robots

- `src/app/robots.ts` permite indexación completa del sitio.
- El archivo apunta al sitemap para facilitar el rastreo.

## Structured data

- `JsonLd` inyecta datos de `LocalBusiness` y `ProfessionalService` en la raíz.
- Las páginas de trabajos incluyen `ImageObject` y, si existe vídeo, `VideoObject`.
- La página de perfil añade contexto de persona con `Person`.

## Performance as SEO support

- `next/image` reduce el coste de las imágenes.
- `next/font` evita depender de cargas de fuentes externas manuales.
- Los embeds de YouTube se cargan solo cuando el contenido lo requiere.
- La estructura del sitio favorece páginas rápidas y fáciles de rastrear.
