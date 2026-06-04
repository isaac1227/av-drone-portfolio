# Architecture

## Overview

- Client: browser users.
- Frontend: Next.js App Router + React + TypeScript.
- Styling: TailwindCSS + shadcn/ui.
- CMS: Sanity.
- Video: YouTube embeds and links.
- Email: Resend.
- Hosting: Vercel.

## Main Flows

### 1. Public browsing

Cliente -> Next.js -> pages and sections

### 2. Portfolio content

Cliente -> Portfolio -> YouTube

### 3. Contact form

Cliente -> Next.js Route Handler -> Resend

### 4. Content management

Equipo -> Sanity CMS -> Works, services and categories

## Data Model

### Work

- title
- slug
- description
- category
- coverImage
- gallery
- youtubeUrl
- publishedAt
- featured

### Category

- Eventos
- Inmobiliaria
- Parcelas y Terrenos
- Fotografia Aerea

### Service

- title
- description
- icon
- order

## Delivery Principles

- Keep the site minimal and premium.
- Prioritize SEO and performance.
- Use reusable sections and data-driven components.
- Keep the structure ready for CMS integration.
