import type { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

import { safeUrlFor } from "@/sanity/lib/image";
import { getFeaturedWorks } from "@/sanity/lib/works";

function getImageUrl(source?: SanityImageSource | null) {
  const builder = safeUrlFor(source);
  if (!builder) {
    return "/images/placeholder-work.jpg";
  }

  return (
    builder.width(1200).height(900).fit("crop").auto("format").url() ??
    "/images/placeholder-work.jpg"
  );
}

function formatCategory(category: string) {
  if (!category) {
    return "Sin categoria";
  }

  return category.charAt(0).toUpperCase() + category.slice(1);
}

export default async function FeatureWorks() {
  const featuredWorks = await getFeaturedWorks();

  return (
    <section className="bg-white border-b border-zinc-200 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <h2 className="text-4xl tracking-tight text-zinc-950 sm:text-5xl">
          Trabajos destacados
        </h2>

        {featuredWorks.length === 0 ? (
          <div className="mt-14 border border-zinc-300 bg-white p-8 sm:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Sin destacados
            </p>
            <p className="mt-4 max-w-[48ch] text-2xl leading-relaxed text-zinc-600">
              Aun no hay trabajos marcados como destacados en Sanity. Activa el
              campo featured para mostrarlos aqui automaticamente.
            </p>
            <Link
              href="/portfolio"
              className="mt-8 inline-flex items-center border border-zinc-900 px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              Ver portfolio completo
            </Link>
          </div>
        ) : (
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredWorks.map((work) => (
              <article
                key={work._id}
                className="overflow-hidden border border-zinc-200 bg-white"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={getImageUrl(work.coverImage)}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {formatCategory(work.serviceCategory)}
                  </p>
                  <h3 className="mt-3 text-2xl tracking-tight text-zinc-950">
                    {work.title}
                  </h3>

                  <Link
                    href={`/portfolio/${work.slug}`}
                    className="mt-6 inline-flex items-center border border-zinc-900 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
                  >
                    Ver mas
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
