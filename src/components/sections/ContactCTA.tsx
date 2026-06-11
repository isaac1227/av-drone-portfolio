/* Esta es la pagina de ContactCTA, es una seccion que se muestra al final de la pagina de inicio, antes del footer. Es un llamado a la accion para que los usuarios se pongan en contacto con la empresa. */

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-zinc-100 dark:bg-zinc-800 py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        ¿Tienes un proyecto en mente?
      </h2>
      <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
        Contáctanos para ver cómo podemos ayudarte a llevar tu proyecto al
        siguiente nivel.
      </p>
      <Link
        href="/contacto"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        Contáctanos
      </Link>
    </section>
  );
}
