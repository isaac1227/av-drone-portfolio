"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { sendContactEmail } from "./actions";
import { initialContactFormState } from "./contact-form-state";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-6 inline-flex h-14 w-full items-center justify-center border border-zinc-950 bg-zinc-950 px-8 text-lg font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Enviando..." : "Enviar solicitud"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(
    sendContactEmail,
    initialContactFormState,
  );

  return (
    <form className="border-t border-zinc-300 pt-8" action={formAction}>
      <h2 className="text-3xl tracking-tight text-zinc-900">Formulario</h2>

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
            minLength={2}
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
            htmlFor="mensaje"
            className="mb-1 block text-sm font-medium text-zinc-700"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            minLength={10}
            rows={5}
            placeholder="Cuentanos que necesitas y cuando te gustaria realizarlo"
            className="w-full border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-900"
          />
        </div>
      </div>

      {state.status !== "idle" ? (
        <p
          aria-live="polite"
          className={`mt-4 text-sm ${
            state.status === "success" ? "text-emerald-700" : "text-red-700"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}
