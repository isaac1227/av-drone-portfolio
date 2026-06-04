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

          <form
            className="border-t border-zinc-300 pt-8"
            method="post"
            action="#"
          >
            <h2 className="text-3xl tracking-tight text-zinc-900">
              Formulario
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="nombre"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-900"
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="asunto"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  Asunto
                </label>
                <input
                  id="asunto"
                  name="asunto"
                  type="text"
                  required
                  placeholder="Tipo de proyecto"
                  className="w-full border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="mensaje"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  placeholder="Cuéntanos qué necesitas y cuándo te gustaría realizarlo"
                  className="w-full border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-900"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex h-14 w-full items-center justify-center border border-zinc-950 bg-zinc-950 px-8 text-lg font-medium text-white transition-colors hover:bg-zinc-800 sm:w-auto"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
