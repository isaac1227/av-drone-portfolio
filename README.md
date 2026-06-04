# av-drone-portfolio

Web portfolio para Natalia Mora, creadora audiovisual especializada en fotografia y video aereo con dron.

Creado por el desarrollador de software Isaac Marroqui.

Estado del proyecto: version 1 de diseno.

## Objetivo

Captar nuevos clientes, mostrar trabajos reales y centralizar la presencia profesional en una web clara, visual y preparada para evolucionar hacia contenido gestionado con CMS.

## Stack

- Next.js App Router
- React
- TypeScript
- TailwindCSS
- shadcn/ui
- Vercel como destino de despliegue

## Estructura actual

- Inicio con hero, servicios y resumen de trabajos realizados.
- Portfolio con selector de categorias y cards visuales.
- Servicios organizados por tipo de cliente y necesidad.
- Sobre mi con perfil, experiencia, equipo y confianza profesional.
- Contacto con formulario e informacion de contacto.

## Rutas

- `/` Inicio
- `/portfolio` Portfolio
- `/servicios` Servicios
- `/sobre-mi` Sobre mi
- `/contacto` Contacto

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Comprobaciones

```bash
npm run lint
npm run build
```

## Notas de la version 1

- Se ha fijado una base visual minimalista y coherente entre todas las paginas.
- El portfolio usa categorias madre y subcategorias para mantener la relacion con servicios.
- La imagen del card de portfolio ocupa todo el header superior.
- La web esta lista para conectar CMS, formularios y contenido dinamico en fases posteriores.

## Siguiente fase

- Sanity CMS para trabajos y servicios.
- Resend para el formulario de contacto.
- Integracion completa de YouTube y contenido dinamico.
- SEO local, sitemap y metadatos por pagina.
