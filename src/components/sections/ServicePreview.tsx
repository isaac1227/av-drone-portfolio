export default function ServicePreview() {
  return (
    <section className="bg-zinc-50 px-6 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <h2 className="text-4xl tracking-tight text-zinc-950 sm:text-5xl">
          Servicios
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
          <article>
            <p className="text-6xl font-light leading-none text-zinc-300">01</p>
            <h3 className="mt-6 text-4xl tracking-tight text-zinc-950">
              Video aereo
            </h3>
            <p className="mt-4 text-xl leading-relaxed text-zinc-500">
              Producciones cinematograficas con drones para publicidad,
              documentales y eventos corporativos.
            </p>
          </article>

          <article>
            <p className="text-6xl font-light leading-none text-zinc-300">02</p>
            <h3 className="mt-6 text-4xl tracking-tight text-zinc-950">
              Fotografia aerea
            </h3>
            <p className="mt-4 text-xl leading-relaxed text-zinc-500">
              Captura de imagenes aereas para arquitectura, bienes raices y
              paisajes naturales.
            </p>
          </article>

          <article>
            <p className="text-6xl font-light leading-none text-zinc-300">03</p>
            <h3 className="mt-6 text-4xl tracking-tight text-zinc-950">
              Inspecciones
            </h3>
            <p className="mt-4 text-xl leading-relaxed text-zinc-500">
              Levantamientos tecnicos y documentacion visual de infraestructuras
              y terrenos.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
