import type { Metadata } from "next";

import { buildPageMetadata, seoPages } from "@/lib/seo";
import ContactForm from "./ContactForm";

export function generateMetadata(): Metadata {
  return buildPageMetadata(seoPages.contact);
}

export default function Contacto() {
  return (
    <main className="px-6 pb-20 pt-16 lg:px-10 lg:pt-20">
      <section className="mx-auto max-w-7xl">
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.36em] text-brand/80">
            Contacto
          </p>
          <h1 className="mt-4 max-w-[18ch] font-heading text-5xl leading-[0.92] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
            Contacto y presupuesto para tu proyecto
          </h1>
          <p className="mt-8 max-w-[55ch] text-lg leading-8 text-text-soft sm:text-xl">
            Cuéntame tu proyecto y te responderé con una propuesta ajustada a
            tus objetivos.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.75rem] border border-white/10 bg-surface/90 p-6 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.8)]">
            <h2 className="font-heading text-3xl tracking-tight text-foreground">
              NATT Aerial Studio
            </h2>
            <h6 className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand/80">
              Vídeo & fotografía aérea
            </h6>
            <div className="mt-6 space-y-3 text-base leading-7 text-text-soft">
              <p>nattaerialstudio@gmail.com</p>
              <p>Elche, España</p>
              <p>+34 600 123 456</p>
            </div>
          </article>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
