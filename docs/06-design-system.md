# Design System

## Typography

| Role                 | Font          |
| -------------------- | ------------- |
| Primary text         | Manrope       |
| Secondary / headings | Space Grotesk |

La tipografía principal se usa para lectura general y la secundaria para títulos, cifras y jerarquía editorial.

## Color palette

| Token        | Hex     |
| ------------ | ------- |
| Background   | #0D0F12 |
| Surface      | #2A2D31 |
| Text muted   | #9DA3A8 |
| Brand accent | #1EA7FF |

## Visual principles

- Fondo oscuro con alto contraste y acentos azules controlados.
- Jerarquía muy clara entre títulos, descripciones y CTAs.
- Tarjetas redondeadas, sobrias y con sombras suaves.
- Sensación premium sin saturar de efectos ni motion innecesario.
- Espacio negativo abundante para reforzar el tono cinematográfico.

## Spacing

- Las secciones principales usan una respiración amplia en vertical.
- El layout base trabaja con padding lateral de 6 y 10 unidades de Tailwind según breakpoint.
- Las cards usan padding contenido, normalmente 6 unidades, para mantener legibilidad.
- Los radios grandes ayudan a dar coherencia visual entre hero, cards y botones.

## Reusable components

- `Navbar` y `Footer` para la estructura global.
- `Hero`, `ServicePreview`, `FeatureWorks` y `ContactCTA` para bloques de contenido.
- `Button`, `Card`, `Input`, `Textarea` y `Dialog` como base UI.
- `WorkCard` y `PortfolioClient` para la capa de portfolio.

## Maintenance guidance

- Si cambia un color o una fuente, actualiza primero los tokens globales.
- No introduzcas estilos nuevos fuera del sistema salvo que exista una razón funcional clara.
- Mantén las cards y los botones consistentes entre páginas para evitar fragmentación visual.
