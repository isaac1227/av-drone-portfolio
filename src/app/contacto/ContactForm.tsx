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
      className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition-all hover:-translate-y-0.5 hover:bg-[#49b8ff] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
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
    <form
      className="rounded-[1.75rem] border border-white/10 bg-surface/90 p-6 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.8)]"
      action={formAction}
    >
      <h2 className="font-heading text-3xl tracking-tight text-foreground">
        Formulario
      </h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="nombre"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle"
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
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-foreground outline-none transition focus:border-brand/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-brand/20"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-foreground outline-none transition focus:border-brand/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-brand/20"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="mensaje"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            minLength={10}
            rows={5}
            placeholder="Cuéntanos qué necesitas y cuándo te gustaría realizarlo"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-foreground outline-none transition focus:border-brand/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      {state.status !== "idle" ? (
        <p
          aria-live="polite"
          className={`mt-4 text-sm ${
            state.status === "success" ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}
