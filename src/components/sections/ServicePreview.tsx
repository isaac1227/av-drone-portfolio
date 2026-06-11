export default function ServicePreview() {
  const services = [
    {
      id: "01",
      title: "Video aéreo",
      description:
        "Producciones cinematográficas con drones para publicidad, documentales y eventos corporativos.",
    },
    {
      id: "02",
      title: "Fotografía aérea",
      description:
        "Captura de imágenes aéreas para arquitectura, bienes raíces y paisajes naturales.",
    },
    {
      id: "03",
      title: "Inspecciones",
      description:
        "Levantamientos técnicos y documentación visual de infraestructuras y terrenos.",
    },
  ];

  return (
    <section className="px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.36em] text-brand/80">
              Servicios
            </p>
            <h2 className="mt-4 font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
              Soluciones visuales limpias y directas.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-text-subtle">
            Cada servicio se presenta con una jerarquía clara y una presencia
            sobria para mantener coherencia con el tono premium del estudio.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-[1.75rem] border border-white/10 bg-surface/90 p-6 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.8)]"
            >
              <p className="font-heading text-5xl tracking-[-0.04em] text-white/15">
                {service.id}
              </p>
              <h3 className="mt-8 font-heading text-2xl tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-text-soft">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
