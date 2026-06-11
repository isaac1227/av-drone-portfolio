# NATT Aerial Studio

Portfolio web para NATT Aerial Studio, un estudio especializado en fotografía y vídeo aéreo con dron. El proyecto está construido como un MVP real, con foco en presencia visual, captación de leads, SEO y mantenimiento sencillo.

![Vista principal del proyecto](public/images/drones/drone1.jpg)

## Overview

El proyecto resuelve una necesidad concreta: presentar servicios audiovisuales con una web clara, premium y orientada a conversión. La propuesta sustituye una comunicación dispersa por una experiencia centralizada que combina portfolio, servicios, sobre mí y contacto.

Los objetivos principales son mostrar trabajos reales, explicar el valor del servicio, facilitar solicitudes de briefing y dejar una base técnica lista para crecer sin sobredimensionar la solución.

El público objetivo son marcas, inmobiliarias, organizadores de eventos, negocios turísticos y clientes que necesitan contenido aéreo profesional para vender mejor, comunicar mejor o documentar mejor.

## Features

- Home con hero, servicios resumidos y trabajos destacados.
- Portfolio con filtrado por categoría.
- Páginas de detalle por trabajo con metadatos SEO y vídeo embebido cuando existe URL de YouTube.
- Página de servicios con segmentos de uso claros y sin publicar precios.
- Página de sobre mí con contexto profesional y señales de confianza.
- Formulario de contacto con validación y envío de correo mediante Resend.
- Sitemap dinámico y robots configurados.
- Structured data para negocio y trabajos.
- Integración de analítica de Vercel.
- Studio de Sanity disponible en la ruta interna del proyecto.

## Tech Stack

| Tecnología     | Uso                                                                                    |
| -------------- | -------------------------------------------------------------------------------------- |
| Next.js        | Framework principal, App Router, rendering híbrido, metadata, sitemap y rutas públicas |
| TypeScript     | Tipado de componentes, acciones del servidor, consultas y modelos de contenido         |
| TailwindCSS    | Sistema visual y composición de UI                                                     |
| Vercel         | Hosting, despliegue, analytics y speed insights                                        |
| Resend         | Envío del formulario de contacto                                                       |
| YouTube Embeds | Reproducción de vídeo en trabajos con URL disponible                                   |
| Analytics      | Sí: Vercel Analytics y Speed Insights                                                  |

## Architecture

Flujo principal:

Usuario
↓
Next.js
↓
Contenido
↓
Formulario
↓
Servicios externos

Diagrama textual:

```text
Browser
	↓
Next.js App Router
	↓
Páginas, componentes y SEO
	↓
Sanity / datos locales / URLs de YouTube
	↓
Action del servidor del formulario
	↓
Resend
```

La arquitectura prioriza renderizado rápido, contenido accesible y una separación clara entre presentación, contenido y servicios externos. El contenido de portfolio ya está modelado en Sanity; el envío de contacto se resuelve con una server action; y la capa SEO se centraliza en utilidades compartidas.

## Project Structure

- `src/app`: rutas de la aplicación, páginas públicas, sitemap, robots y Studio.
- `src/components`: componentes reutilizables por secciones, layout, UI y portfolio.
- `src/lib`: utilidades transversales, incluida la capa SEO.
- `src/sanity`: configuración, consultas, esquema y helpers de Sanity.
- `src/types`: tipos de dominio, especialmente para trabajos del portfolio.
- `public/images`: assets estáticos del proyecto, incluyendo logos, drones y placeholder.
- `docs`: documentación de arquitectura, contenido, SEO, despliegue y diseño.

## SEO Strategy

- Metadata: cada página pública define título y descripción específicos mediante helpers compartidos.
- Open Graph: la configuración global y por página reutiliza imágenes y descripciones coherentes.
- Sitemap: se genera de forma dinámica para rutas estáticas y trabajos publicados.
- Robots: permite indexación completa y referencia el sitemap.
- Structured Data: se inyecta JSON-LD para la entidad del negocio y para cada trabajo con datos suficientes.
- Performance: imágenes optimizadas con `next/image`, estructura estática donde aplica y métricas de Vercel activadas.

## Performance

- Uso de `next/image` en hero, portada de trabajos y páginas de detalle.
- Carga prioritaria solo en la imagen principal del hero.
- Páginas mayoritariamente server-rendered, con cliente solo en interacción necesaria.
- Componentes reutilizables para reducir duplicación y tamaño mental del mantenimiento.
- Analítica sin instrumentación adicional compleja.

## Local Development

1. Instala dependencias.

```bash
npm install
```

2. Arranca el entorno local.

```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000).

4. Valida la calidad básica antes de publicar cambios.

```bash
npm run lint
npm run build
```

## Environment Variables

| Variable                         | Requerida                      | Uso                               |
| -------------------------------- | ------------------------------ | --------------------------------- |
| `NEXT_PUBLIC_SITE_URL`           | No                             | URL canónica del sitio para SEO   |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | Sí si se usa Sanity localmente | Identificador del proyecto Sanity |
| `NEXT_PUBLIC_SANITY_DATASET`     | Sí si se usa Sanity localmente | Dataset activo de Sanity          |
| `NEXT_PUBLIC_SANITY_API_VERSION` | No                             | Versión de API para Sanity        |
| `RESEND_API_KEY`                 | Sí para enviar formularios     | Autenticación contra Resend       |
| `CONTACT_TO_EMAIL`               | Sí para enviar formularios     | Destinatario de los mensajes      |
| `CONTACT_FROM_EMAIL`             | No                             | Remitente visible en los correos  |

## Deployment

El despliegue está pensado para Vercel. El flujo es simple: conectar el repositorio, configurar las variables de entorno, dejar que Vercel ejecute el build de Next.js y publicar la rama principal. Las preview deployments sirven para revisar cambios visuales, SEO y contenido antes de pasar a producción.

## Future Improvements

- Completar la migración operativa de contenido a Sanity para que trabajos y servicios no dependan de cambios en código.
- Añadir más casos reales al portfolio y enriquecer las páginas de detalle.
- Ampliar el sistema de leads con más trazabilidad comercial.
- Incorporar testimonios cuando existan piezas verificables.
- Mejorar la estrategia de contenido local a medida que crezca el catálogo.

## Lessons Learned

La decisión principal fue mantener el producto en formato MVP real y no convertirlo en un portal sobredimensionado. Next.js permite cubrir SEO, rutas, contenido y server actions con una sola base técnica; Sanity aporta edición de trabajos sin acoplar el frontend a un CMS complejo; y Resend resuelve el contacto con una integración simple y mantenible. El resultado es una web preparada para crecer sin perder claridad ni rendimiento.
