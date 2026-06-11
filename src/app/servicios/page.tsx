import type { Metadata } from "next";

import { buildPageMetadata, seoPages } from "@/lib/seo";

const serviceTypes = [
  {
    id: "01",
    title: "Eventos",
    description:
      "Cobertura audiovisual para momentos clave con tomas dinámicas y narrativa visual cinematográfica.",
    types: [
      "Bodas",
      "Eventos corporativos",
      "Eventos deportivos",
      "Celebraciones",
    ],
  },
  {
    id: "02",
    title: "Inmobiliaria",
    description:
      "Producción orientada a venta y alquiler para destacar propiedades con imágenes de alto valor comercial.",
    types: [
      "Viviendas",
      "Chalets",
      "Apartamentos turísticos",
      "Hoteles",
      "Promociones inmobiliarias",
    ],
  },
  {
    id: "03",
    title: "Parcelas y Terrenos",
    description:
      "Documentación visual precisa para seguimiento de superficie, estado del terreno e inspección inicial.",
    types: [
      "Fincas",
      "Terrenos rústicos",
      "Parcelas urbanas",
      "Inspección visual",
    ],
  },
  {
    id: "04",
    title: "Fotografía y Video aéreo",
    description:
      "Contenido visual para marca y comunicación digital, adaptado a objetivos de negocio y canales.",
    types: ["Redes sociales", "Marketing", "Turismo", "Empresas"],
  },
];

export function generateMetadata(): Metadata {
  return buildPageMetadata(seoPages.services);
}

export default function Servicios() {
  return (
    <main className="px-6 pb-20 pt-16 lg:px-10 lg:pt-20">
      <section className="mx-auto max-w-7xl">
        <p className="font-heading text-xs uppercase tracking-[0.36em] text-brand/80">
          Servicios
        </p>
        <div className="mt-4">
          <h1 className="max-w-[16ch] font-heading text-5xl leading-[0.92] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
            Servicios de fotografía y vídeo con dron
          </h1>
          <p className="mt-8 max-w-[55ch] text-lg leading-8 text-text-soft sm:text-xl">
            Soluciones audiovisuales con dron pensadas para mostrar, documentar
            y comunicar cada proyecto con una perspectiva única.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {serviceTypes.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.75rem] border border-white/10 bg-surface/90 p-6 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.8)]"
            >
              <p className="font-heading text-5xl tracking-[-0.04em] text-white/15">
                {service.id}
              </p>
              <h2 className="mt-8 font-heading text-2xl tracking-tight text-foreground sm:text-3xl">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-text-soft sm:text-lg">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-text-soft">
                {service.types.map((type) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-14 border-t border-white/10 pt-6 text-sm text-text-subtle">
          No publicamos precios en web. Cada proyecto se trabaja con presupuesto
          personalizado según objetivos, ubicación y complejidad.
        </p>
      </section>
    </main>
  );
}
