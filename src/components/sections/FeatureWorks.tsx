export default function FeatureWorks() {
  const stats = [
    { value: "150+", label: "PROYECTOS" },
    { value: "8", label: "AÑOS" },
    { value: "50+", label: "CLIENTES" },
    { value: "4K", label: "CALIDAD" },
  ];

  return (
    <section className="border-b border-zinc-200 bg-[#f5f5f5] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <h2 className="text-5xl font-semibold tracking-tight text-zinc-950">
          Trabajos realizados
        </h2>
        <p className="mt-4 max-w-[42ch] text-xl leading-relaxed text-zinc-500">
          Resultados acumulados en proyectos audiovisuales con cobertura aerea.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-7xl font-medium tracking-tight text-zinc-950">
                {stat.value}
              </p>
              <p className="mt-4 text-xl font-medium tracking-wide text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
