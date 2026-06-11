import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-18">
        <div className="relative">
          <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-brand/20 blur-3xl" />
          <p className="font-heading text-xs uppercase tracking-[0.44em] text-brand/80">
            Fotografía y vídeo aéreo premium
          </p>
          <h1 className="mt-6 max-w-[11ch] font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.8rem]">
            Perspectivas aéreas para marcas que necesitan impacto real.
          </h1>
          <p className="mt-8 max-w-[56ch] text-lg leading-8 text-text-soft sm:text-xl">
            Dirección visual, precisión de vuelo y estética cinematográfica para
            convertir espacios, eventos y proyectos en piezas visuales de alto
            valor.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/portfolio">Ver portfolio</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contacto">Pedir propuesta</Link>
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
            {[
              "Imágenes cinematográficas",
              "Entrega optimizada para digital",
              "Atención directa y cercana",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-text-soft"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-8 top-8 h-36 w-36 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/80 shadow-[0_30px_90px_-42px_rgba(0,0,0,0.95)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,15,18,0.08),rgba(13,15,18,0.72))]" />
            <Image
              src="/images/drones/drone1.jpg"
              alt="Toma aérea con dron"
              width={1200}
              height={1400}
              className="h-[560px] w-full object-cover object-center"
              priority
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-background/65 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-brand/80">
                Plano destacado
              </p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <div>
                  <p className="font-heading text-2xl tracking-tight text-foreground">
                    Cinemática aérea
                  </p>
                  <p className="mt-1 text-sm text-text-subtle">
                    Movimiento limpio, color controlado y composición precisa.
                  </p>
                </div>
                <div className="rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm text-brand">
                  4K + edición
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
