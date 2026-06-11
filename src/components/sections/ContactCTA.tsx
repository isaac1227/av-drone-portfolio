import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-6 lg:px-10">
      <div className="rounded-[2rem] border border-white/10 bg-surface/90 px-6 py-12 text-center shadow-[0_22px_70px_-42px_rgba(0,0,0,0.8)] sm:px-10">
        <p className="font-heading text-xs uppercase tracking-[0.36em] text-brand/80">
          Contacto
        </p>
        <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-soft sm:text-lg">
          Contáctanos para definir una propuesta visual precisa, sobria y
          pensada para elevar la percepción de tu marca.
        </p>
        <Link
          href="/contacto"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition-all hover:-translate-y-0.5 hover:bg-[#49b8ff]"
        >
          Contáctanos
        </Link>
      </div>
    </section>
  );
}
