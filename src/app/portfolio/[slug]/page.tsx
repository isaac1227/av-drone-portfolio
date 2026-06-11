import type { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import {
  buildImageUrl,
  buildPageMetadata,
  getWorkJsonLd,
  seoPages,
} from "@/lib/seo";
import { safeUrlFor } from "@/sanity/lib/image";
import { getWorkBySlug } from "@/sanity/lib/works";

export async function generateStaticParams() {
  const { getWorks } = await import("@/sanity/lib/works");
  const works = await getWorks();

  return works
    .filter((work) => Boolean(work.slug))
    .map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);

  if (!work) {
    return buildPageMetadata({
      ...seoPages.portfolio,
      title: "Proyecto no encontrado | NATT Aerial Studio",
      description: "El proyecto solicitado no existe o no está publicado.",
      path: "/portfolio",
    });
  }

  return buildPageMetadata({
    title: `${work.title} | NATT Aerial Studio`,
    description: `${work.description} Proyecto de ${work.serviceCategory} en ${work.location || "España"}.`,
    path: `/portfolio/${work.slug}`,
    type: "article",
    image: buildImageUrl(work.coverImage),
    imageAlt: `${work.title} - fotografía aérea con dron`,
  });
}

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
    <main className="px-6 pb-20 pt-16 lg:px-10 lg:pt-20">
      <JsonLd data={getWorkJsonLd(work)} />
      <section className="mx-auto max-w-7xl">
        <Link
          href="/portfolio"
          className="text-sm uppercase tracking-[0.24em] text-text-subtle transition-colors hover:text-foreground"
        >
          Volver al portfolio
        </Link>

        <div className="mt-8 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,1.2fr)_22rem] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs uppercase tracking-[0.2em] text-text-subtle">
                {formatCategory(work.serviceCategory)}
              </span>
              {work.subcategory && (
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs uppercase tracking-[0.2em] text-text-subtle">
                  {work.subcategory}
                </span>
              )}
              {work.featured && (
                <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-foreground">
                  Destacado
                </span>
              )}
            </div>

            <h1 className="mt-6 max-w-[12ch] font-heading text-5xl leading-[0.92] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
              {work.title}
            </h1>

            <p className="mt-8 max-w-[56ch] text-lg leading-8 text-text-soft sm:text-xl">
              {work.description}
            </p>
          </div>

          <aside className="rounded-[1.75rem] border border-white/10 bg-surface/90 p-6 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.8)] lg:pt-6">
            <dl className="space-y-6">
              {work.location && (
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-text-subtle">
                    Ubicación
                  </dt>
                  <dd className="mt-2 text-lg text-foreground">
                    {work.location}
                  </dd>
                </div>
              )}
              {work.publishedAt && (
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-text-subtle">
                    Publicado
                  </dt>
                  <dd className="mt-2 text-lg text-foreground">
                    {formatPublishedAt(work.publishedAt)}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-text-subtle">
                  Proyecto
                </dt>
                <dd className="mt-2 text-lg text-foreground">{work._id}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-surface/90 shadow-[0_24px_80px_-46px_rgba(0,0,0,0.8)]">
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
            <p className="text-xs uppercase tracking-[0.2em] text-text-subtle">
              Resumen
            </p>
            <p className="mt-4 max-w-[60ch] text-lg leading-8 text-text-soft">
              Este proyecto combina planificacion de vuelo, criterio visual y
              ejecucion en campo para producir una pieza que muestra el espacio
              desde una perspectiva aérea clara, atractiva y útil para su
              comunicación.
            </p>
            <p className="mt-5 max-w-[60ch] text-lg leading-8 text-text-soft">
              La seleccion visual se ha planteado para dar contexto, escala y
              recorrido al trabajo, manteniendo una lectura limpia tanto en
              escritorio como en movil.
            </p>
          </section>

          {youtubeEmbedUrl ? (
            <section>
              <p className="text-xs uppercase tracking-[0.2em] text-text-subtle">
                Video
              </p>
              <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
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
          <section className="mt-16 border-t border-white/10 pt-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-text-subtle">
                  Galeria
                </p>
                <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
                  Seleccion visual del proyecto
                </h2>
              </div>
              <p className="hidden text-sm text-text-subtle md:block">
                {gallery.length} imagenes
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {gallery.map((image, index) => (
                <div
                  key={`${work._id}-gallery-${index}`}
                  className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-surface/80"
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

        <section className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-heading text-2xl tracking-tight text-foreground">
                ¿Necesitas una pieza similar para tu proyecto?
              </p>
              <p className="mt-2 text-text-subtle">
                Puedo adaptar el enfoque visual al tipo de espacio, evento o
                activo que quieras mostrar.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-all hover:-translate-y-0.5 hover:bg-[#49b8ff]"
            >
              Solicitar información
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
