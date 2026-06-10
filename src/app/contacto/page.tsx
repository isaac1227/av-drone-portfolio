import ContactForm from "./ContactForm";

export default function Contacto() {
  return (
    <main className="bg-white px-6 pb-20 pt-24 lg:pt-28">
      <section className="mx-auto max-w-7xl">
        <div>
          <h1 className="max-w-[12ch] text-5xl leading-[1.03] tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            Contacto
          </h1>
          <p className="mt-8 max-w-[55ch] text-xl leading-relaxed text-zinc-500">
            Cuentame tu proyecto y te respondere con una propuesta ajustada a
            tus objetivos.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <article className="border-t border-zinc-300 pt-8">
            <h2 className="text-3xl tracking-tight text-zinc-900">
              Informacion
            </h2>
            <div className="mt-4 space-y-3 text-lg text-zinc-600">
              <p>Email: hola@nataliadrone.com</p>
              <p>Telefono: +34 600 123 456</p>
              <p>Ubicacion: Valencia, Espana</p>
              <p>Horario: Lunes a Viernes de 09:00 a 18:00</p>
            </div>
          </article>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
