import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white px-6 pb-20 pt-24 lg:pt-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="max-w-[12ch] text-5xl leading-[1.03] tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            Perspectivas aereas unicas
          </h1>
          <p className="mt-8 max-w-[55ch] text-xl leading-relaxed text-zinc-500">
            Creacion audiovisual especializada en captura de imagenes aereas con
            drones. Transformo espacios en historias visuales desde el cielo.
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

        <div className="group relative h-[520px] overflow-hidden bg-zinc-100 lg:h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBkcm9uZSUyMGNpbmVtYXRvZ3JhcGh5fGVufDF8fHx8MTc4MDU2MDQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cinematografia aerea con dron"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
              <Play className="ml-1 h-6 w-6 text-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
