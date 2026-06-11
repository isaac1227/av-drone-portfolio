export default function SobreMi() {
  return (
    <main className="bg-white px-6 pb-20 pt-24 lg:pt-28">
      <section className="mx-auto max-w-7xl">
        <div>
          <h1 className="max-w-[12ch] text-5xl leading-[1.03] tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            Sobre mi
          </h1>
          <p className="mt-8 max-w-[55ch] text-xl leading-relaxed text-zinc-500">
            Natalia, creadora audiovisual especializada en fotografía y video
            aéreo con dron. Combino técnica, sensibilidad visual y enfoque
            comercial para proyectos que necesitan impacto real.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <article className="border-t border-zinc-300 pt-8">
            <h2 className="text-3xl tracking-tight text-zinc-900">Historia</h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              Inicié este camino para mostrar lugares y proyectos desde una
              perspectiva diferente. Con cada vuelo busco transformar espacios
              en narrativas visuales que conecten con las personas.
            </p>
          </article>

          <article className="border-t border-zinc-300 pt-8">
            <h2 className="text-3xl tracking-tight text-zinc-900">
              Experiencia
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              He trabajado con inmobiliarias, alojamientos turísticos,
              organizadores de eventos y negocios que necesitan contenido
              audiovisual profesional para vender mejor sus servicios.
            </p>
          </article>

          <article className="border-t border-zinc-300 pt-8">
            <h2 className="text-3xl tracking-tight text-zinc-900">
              Servicios clave
            </h2>
            <ul className="mt-4 space-y-2 text-lg text-zinc-600">
              <li>- Fotografía aérea profesional</li>
              <li>- Video aéreo para marketing y eventos</li>
              <li>- Cobertura para parcelas y terrenos</li>
              <li>- Producción para redes sociales y marca</li>
            </ul>
          </article>

          <article className="border-t border-zinc-300 pt-8">
            <h2 className="text-3xl tracking-tight text-zinc-900">
              Equipo y medios
            </h2>
            <ul className="mt-4 space-y-2 text-lg text-zinc-600">
              <li>- Dron propio para producción audiovisual</li>
              <li>- Grabación en alta definición</li>
              <li>- Edición y entrega optimizada para digital</li>
              <li>- Canal de YouTube con trabajos publicados</li>
            </ul>
          </article>

          <article className="border-t border-zinc-300 pt-8 md:col-span-2">
            <h2 className="text-3xl tracking-tight text-zinc-900">
              Confianza profesional
            </h2>
            <div className="mt-4 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-lg leading-relaxed text-zinc-600">
                  Cuento con experiencia en operaciones de vuelo y documentación
                  visual orientada a negocio. Actualmente amplio mi formación en
                  diseño gráfico para complementar cada proyecto audiovisual.
                </p>
              </div>
              <div className="space-y-2 text-lg text-zinc-600">
                <p>- Certificaciones y práctica continua de vuelo</p>
                <p>- Cobertura nacional en España</p>
                <p>- Contacto directo para briefing y presupuesto</p>
                <p>- Publicación activa de trabajos en redes y YouTube</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
