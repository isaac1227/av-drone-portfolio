# Architecture

## MVP goals

- Lanzar una web profesional con el menor número posible de piezas móviles.
- Mostrar el trabajo de forma convincente sin sacrificar velocidad ni SEO.
- Dejar preparada la base para ampliar contenido sin rehacer la arquitectura.

## Technical decisions

- Next.js App Router para mezclar páginas estáticas, server components y metadata por ruta.
- Sanity para gestionar trabajos, imágenes y vídeos desde un panel editable.
- Resend para resolver el formulario de contacto con una integración simple.
- YouTube para alojar el vídeo externo y evitar costes de hosting propios.
- Vercel para despliegues, previews y observabilidad ligera.

## Why Next.js

Next.js encaja bien porque permite unificar contenido estático, rutas dinámicas, metadata, sitemap y JSON-LD sin introducir otra capa de framework. También simplifica el despliegue en Vercel y facilita mantener un rendimiento alto con una base de código pequeña.

## Why not a complex CMS

Se evitó un CMS complejo porque el volumen editorial del proyecto no lo justifica. El contenido necesario es limitado, el flujo de publicación es simple y Sanity ya cubre la edición de trabajos sin añadir infraestructura de backend propia.

## Alternatives discarded

- CMS personalizado: descartado por coste y mantenimiento.
- Vídeo autoalojado: descartado por peso, complejidad y coste.
- Monolito con routing clásico: descartado porque el App Router aporta más claridad para SEO y composición.
- Formularios con lógica manual en el cliente: descartados por menor fiabilidad.

## Future scalability strategy

- Mantener el modelo de datos pequeño y explícito.
- Migrar más contenido a Sanity solo cuando exista necesidad real.
- Añadir nuevas secciones reutilizando componentes y tokens ya definidos.
- Escalar el portfolio con nuevos trabajos sin cambiar la estructura base.
- Mantener las integraciones externas desacopladas para poder sustituirlas sin reescribir la web.
