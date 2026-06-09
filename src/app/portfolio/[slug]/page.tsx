import type { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { safeUrlFor } from "@/sanity/lib/image";
import { getWorkBySlug } from "@/sanity/lib/works";

const categoryLabels: Record<string, string> = {
  eventos: "Eventos",
  inmobiliaria: "Inmobiliaria",
  parcelas: "Parcelas y terrenos",
  fotografia: "Fotografia aerea",
};

function formatCategory(category: string) {
  return categoryLabels[category] ?? category;
}

function formatPublishedAt(dateString: string) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

function getImageUrl(
  source?: SanityImageSource | null,
  width = 1800,
  height = 1200,
) {
  const builder = safeUrlFor(source);
  if (!builder) {
    return "/images/placeholder-work.jpg";
  }

  return (
    builder.width(width).height(height).fit("crop").auto("format").url() ??
    "/images/placeholder-work.jpg"
  );
}

function getYouTubeEmbedUrl(url?: string) {
  if (!url) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);
    const shortId = parsedUrl.hostname.includes("youtu.be")
      ? parsedUrl.pathname.slice(1)
      : null;
    const watchId = parsedUrl.searchParams.get("v");
    const embedId = parsedUrl.pathname.split("/").filter(Boolean).at(-1);
    const videoId = shortId ?? watchId ?? embedId;

    if (!videoId) {
      return null;
    }

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return null;
  }
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  const heroImage = getImageUrl(work.coverImage);
  const gallery = (work.gallery ?? []).filter(
    (image): image is SanityImageSource => Boolean(safeUrlFor(image)),
  );
  const youtubeEmbedUrl = getYouTubeEmbedUrl(work.youtubeUrl);

  return (
    <main className="bg-white pb-20 pt-24 lg:pt-28">
      <section className="mx-auto max-w-7xl px-6">
        <Link
          href="/portfolio"
          className="text-sm uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-zinc-900"
        >
          Volver al portfolio
        </Link>

        <div className="mt-8 grid gap-10 border-t border-zinc-200 pt-10 lg:grid-cols-[minmax(0,1.2fr)_22rem] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center border border-zinc-300 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                {formatCategory(work.serviceCategory)}
              </span>
              {work.subcategory && (
                <span className="inline-flex items-center border border-zinc-300 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {work.subcategory}
                </span>
              )}
              {work.featured && (
                <span className="inline-flex items-center bg-zinc-950 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
                  Destacado
                </span>
              )}
            </div>

            <h1 className="mt-6 max-w-[12ch] text-5xl leading-[0.95] tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
              {work.title}
            </h1>

            <p className="mt-8 max-w-[56ch] text-xl leading-relaxed text-zinc-500 sm:text-2xl">
              {work.description}
            </p>
          </div>

          <aside className="border-t border-zinc-200 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
            <dl className="space-y-6">
              {work.location && (
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Ubicacion
                  </dt>
                  <dd className="mt-2 text-lg text-zinc-800">
                    {work.location}
                  </dd>
                </div>
              )}
              {work.publishedAt && (
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Publicado
                  </dt>
                  <dd className="mt-2 text-lg text-zinc-800">
                    {formatPublishedAt(work.publishedAt)}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Proyecto
                </dt>
                <dd className="mt-2 text-lg text-zinc-800">{work._id}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="relative mt-14 overflow-hidden border border-zinc-200 bg-zinc-100">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={heroImage}
              alt={work.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 1120px, 100vw"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <section>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Resumen
            </p>
            <p className="mt-4 max-w-[60ch] text-lg leading-8 text-zinc-600">
              Este proyecto combina planificacion de vuelo, criterio visual y
              ejecucion en campo para producir una pieza que muestra el espacio
              desde una perspectiva aérea clara, atractiva y útil para su
              comunicación.
            </p>
            <p className="mt-5 max-w-[60ch] text-lg leading-8 text-zinc-600">
              La seleccion visual se ha planteado para dar contexto, escala y
              recorrido al trabajo, manteniendo una lectura limpia tanto en
              escritorio como en movil.
            </p>
          </section>

          {youtubeEmbedUrl ? (
            <section>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                Video
              </p>
              <div className="mt-4 overflow-hidden border border-zinc-200 bg-zinc-950">
                <iframe
                  className="aspect-video w-full"
                  src={youtubeEmbedUrl}
                  title={`Video del proyecto ${work.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </section>
          ) : null}
        </div>

        {gallery.length > 0 && (
          <section className="mt-16 border-t border-zinc-200 pt-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Galeria
                </p>
                <h2 className="mt-3 text-3xl tracking-tight text-zinc-950 sm:text-4xl">
                  Seleccion visual del proyecto
                </h2>
              </div>
              <p className="hidden text-sm text-zinc-400 md:block">
                {gallery.length} imagenes
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {gallery.map((image, index) => (
                <div
                  key={`${work._id}-gallery-${index}`}
                  className="relative overflow-hidden border border-zinc-200 bg-zinc-100"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={getImageUrl(image, 1200, 900)}
                      alt={`${work.title} imagen ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16 border-t border-zinc-200 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl tracking-tight text-zinc-950">
                ¿Necesitas una pieza similar para tu proyecto?
              </p>
              <p className="mt-2 text-zinc-500">
                Puedo adaptar el enfoque visual al tipo de espacio, evento o
                activo que quieras mostrar.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center border border-zinc-950 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-950 hover:text-white"
            >
              Solicitar informacion
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
