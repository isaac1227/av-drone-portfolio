import type { Metadata } from "next";
import Image from "next/image";

import { buildPageMetadata, seoPages } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata(seoPages.about);
}

export default function SobreMi() {
  return (
    <main className="px-6 pb-20 pt-16 lg:px-10 lg:pt-20">
      <section className="mx-auto max-w-7xl">
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.36em] text-brand/80">
            Sobre mí
          </p>
          <h1 className="mt-4 max-w-[18ch] font-heading text-5xl leading-[0.92] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
            Sobre mí y mi trabajo con dron
          </h1>
          <p className="mt-8 max-w-[55ch] text-lg leading-8 text-text-soft sm:text-xl">
            Natalia, creadora audiovisual especializada en fotografía y video
            aéreo con dron. Combino técnica, sensibilidad visual y enfoque
            comercial para proyectos que necesitan impacto real.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.75rem] border border-white/10 bg-surface/90 p-6 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.8)]">
            <h2 className="font-heading text-3xl tracking-tight text-foreground">
              Historia
            </h2>
            <p className="mt-4 text-base leading-7 text-text-soft">
              Inicié este camino para mostrar lugares y proyectos desde una
              perspectiva diferente. Con cada vuelo busco transformar espacios
              en narrativas visuales que conecten con las personas.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-white/10 bg-surface/90 p-6 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.8)]">
            <h2 className="font-heading text-3xl tracking-tight text-foreground">
              Experiencia
            </h2>
            <p className="mt-4 text-base leading-7 text-text-soft">
              He trabajado con inmobiliarias, alojamientos turísticos,
              organizadores de eventos y negocios que necesitan contenido
              audiovisual profesional para vender mejor sus servicios.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-white/10 bg-surface/90 p-6 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.8)]">
            <h2 className="font-heading text-3xl tracking-tight text-foreground">
              Servicios clave
            </h2>
            <ul className="mt-4 space-y-2 text-base text-text-soft">
              <li>- Fotografía aérea profesional</li>
              <li>- Video aéreo para marketing y eventos</li>
              <li>- Cobertura para parcelas y terrenos</li>
              <li>- Producción para redes sociales y marca</li>
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-white/10 bg-surface/90 p-6 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.8)]">
            <h2 className="font-heading text-3xl tracking-tight text-foreground">
              Equipo y medios
            </h2>
            <ul className="mt-4 space-y-2 text-base text-text-soft">
              <li>- Dron propio para producción audiovisual</li>
              <li>- Grabación en alta definición</li>
              <li>- Edición y entrega optimizada para digital</li>
              <li>- Canal de YouTube con trabajos publicados</li>
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-white/10 bg-surface/90 p-6 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.8)] md:col-span-2">
            <h2 className="font-heading text-3xl tracking-tight text-foreground">
              Confianza profesional
            </h2>
            <div className="mt-4 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-base leading-7 text-text-soft">
                  Cuento con experiencia en operaciones de vuelo y documentación
                  visual orientada a negocio. Actualmente amplio mi formación en
                  diseño gráfico para complementar cada proyecto audiovisual.
                </p>
              </div>
              <div className="space-y-2 text-base text-text-soft">
                <p>- Certificaciones y práctica continua de vuelo</p>
                <p>- Cobertura nacional en España</p>
                <p>- Contacto directo para briefing y presupuesto</p>
                <p>- Publicación activa de trabajos en redes y YouTube</p>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface/90 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.8)] md:col-span-2">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/drones/drone2.jpg"
                alt="Dron de producción audiovisual en operación"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority={false}
              />
            </div>
            <div className="p-6">
              <h2 className="font-heading text-3xl tracking-tight text-foreground">
                Dron en uso
              </h2>
              <p className="mt-3 text-base leading-7 text-text-soft">
                Este es el segundo dron del equipo, dedicado a tomas estables y
                producción audiovisual para proyectos comerciales.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
