# Content Management

## How to add new works

1. Abre Sanity Studio en `/studio`.
2. Crea un documento del tipo `work`.
3. Completa título, slug, descripción, categoría, subcategoría, ubicación y fecha de publicación.
4. Sube la imagen principal en `coverImage`.
5. Añade imágenes a `gallery` si el trabajo las necesita.
6. Pega la URL de YouTube en `youtubeUrl` solo si existe vídeo asociado.
7. Marca `featured` si quieres que aparezca en la sección de destacados de la home.

## How to update services

Los servicios están definidos de forma estática en `src/app/servicios/page.tsx` y el bloque resumen de la home vive en `src/components/sections/ServicePreview.tsx`.

Para actualizar texto, tipos de trabajo o jerarquía visual, edita esos dos archivos. Si en el futuro se decide mover los servicios a Sanity, conviene hacerlo solo cuando exista una necesidad clara de edición frecuente.

## How to change social links

Los enlaces sociales del footer están en `src/components/layout/Footer.tsx`.

## How to update YouTube videos

- Edita el campo `youtubeUrl` en el documento `work` correspondiente.
- La ficha de trabajo construye automáticamente el embed a partir de esa URL.
- Si no hay URL, la página simplemente no renderiza el bloque de vídeo.

## How to add images

- Para trabajos editables, sube imágenes en `coverImage` y `gallery` desde Sanity.
- Para recursos estáticos del sitio, usa `public/images/`.
- El hero principal usa una imagen local en `public/images/drones/drone1.jpg`.
- El bloque “Sobre mí” usa `public/images/drones/drone2.jpg`.

## Maintenance notes

- Mantén los slugs estables para no romper rutas públicas.
- Revisa que cada trabajo tenga categoría y fecha antes de publicarlo.
- Si un trabajo no tiene imagen principal, el sitio usa una imagen de respaldo.
- Evita duplicar contenido entre home, servicios y portfolio salvo que sea necesario.
- Al publicar/editar/eliminar `work` en Sanity, el webhook dispara revalidación on-demand en Next.js para actualizar producción sin esperar intervalos.
