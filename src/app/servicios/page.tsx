const serviceTypes = [
  {
    id: "01",
    title: "Eventos",
    description:
      "Cobertura audiovisual para momentos clave con tomas dinamicas y narrativa visual cinematografica.",
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
      "Produccion orientada a venta y alquiler para destacar propiedades con imagenes de alto valor comercial.",
    types: [
      "Viviendas",
      "Chalets",
      "Apartamentos turisticos",
      "Hoteles",
      "Promociones inmobiliarias",
    ],
  },
  {
    id: "03",
    title: "Parcelas y Terrenos",
    description:
      "Documentacion visual precisa para seguimiento de superficie, estado del terreno e inspeccion inicial.",
    types: [
      "Fincas",
      "Terrenos rusticos",
      "Parcelas urbanas",
      "Inspeccion visual",
    ],
  },
  {
    id: "04",
    title: "Fotografia y Video Aereo",
    description:
      "Contenido visual para marca y comunicacion digital, adaptado a objetivos de negocio y canales.",
    types: ["Redes sociales", "Marketing", "Turismo", "Empresas"],
  },
];

export default function Servicios() {
  return (
    <main className="bg-white px-6 pb-20 pt-24 lg:pt-28">
      <section className="mx-auto max-w-7xl">
        <div>
          <h1 className="max-w-[12ch] text-5xl leading-[1.03] tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            Servicios
          </h1>
          <p className="mt-8 max-w-[55ch] text-xl leading-relaxed text-zinc-500">
            Soluciones audiovisuales con dron pensadas para mostrar, documentar
            y comunicar cada proyecto con una perspectiva unica.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {serviceTypes.map((service) => (
            <article
              key={service.title}
              className="border-t border-zinc-300 pt-8"
            >
              <p className="text-6xl font-light leading-none text-zinc-300">
                {service.id}
              </p>
              <h2 className="mt-6 text-4xl tracking-tight text-zinc-900">
                {service.title}
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-zinc-500">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2 text-base text-zinc-600">
                {service.types.map((type) => (
                  <li key={type}>- {type}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-14 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
          No publicamos precios en web. Cada proyecto se trabaja con presupuesto
          personalizado segun objetivos, ubicacion y complejidad.
        </p>
      </section>
    </main>
  );
}
