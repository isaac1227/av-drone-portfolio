"use server";

import { Resend } from "resend";
import type { ContactFormState } from "./contact-form-state";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const mensaje = String(formData.get("mensaje") ?? "").trim();

  if (!nombre || !email || !mensaje) {
    return {
      status: "error",
      message: "Completa nombre, email y mensaje.",
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return {
      status: "error",
      message: "Introduce un email valido.",
    };
  }

  if (mensaje.length < 10) {
    return {
      status: "error",
      message: "El mensaje debe tener al menos 10 caracteres.",
    };
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    return {
      status: "error",
      message: "El formulario no esta configurado en el servidor.",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Nuevo contacto de ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        `Email: ${email}`,
        "",
        "Mensaje:",
        mensaje,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend send error", error);
      return {
        status: "error",
        message:
          "No se pudo enviar el mensaje. Revisa la configuracion de Resend.",
      };
    }

    console.info("Resend email sent", data?.id);

    return {
      status: "success",
      message: "Gracias. Tu mensaje se ha enviado correctamente.",
    };
  } catch (error) {
    console.error("Resend unexpected error", error);
    return {
      status: "error",
      message: "No se pudo enviar el mensaje. Intentalo de nuevo.",
    };
  }
}
