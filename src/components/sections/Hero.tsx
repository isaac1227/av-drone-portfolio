import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white px-6 pb-20 pt-24 lg:pt-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="max-w-[12ch] text-5xl leading-[1.03] tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            Perspectivas aéreas únicas
          </h1>
          <p className="mt-8 max-w-[55ch] text-xl leading-relaxed text-zinc-500">
            Captura historias desde una nueva perspectiva. Combinamos
            tecnología, precisión y creatividad para elevar la forma en que el
            mundo ve tu proyecto.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="inline-flex h-14 min-w-40 items-center justify-center border border-zinc-950 bg-zinc-950 px-8 text-lg font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Ver trabajos
            </Link>
            <Link
              href="/contacto"
              className="inline-flex h-14 min-w-40 items-center justify-center border border-zinc-900 bg-transparent px-8 text-lg font-medium text-zinc-900 transition-colors hover:bg-zinc-950 hover:text-white"
            >
              Contactar
            </Link>
          </div>
        </div>

        <div className="group relative h-[520px] overflow-hidden bg-zinc-100 lg:h-[500px]">
          <Image src="/images/drones/drone1.jpg" alt="Drone" fill />
        </div>
      </div>
    </section>
  );
}
