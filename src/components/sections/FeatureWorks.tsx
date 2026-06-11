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
    featuredWorks.length > 0 && (
      <section className="border-y border-white/10 bg-white/[0.02] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.36em] text-brand/80">
                Portfolio
              </p>
              <h2 className="mt-4 font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
                Trabajos destacados
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-text-subtle">
              Selección de piezas realizadas para proyectos que necesitan una
              imagen sólida, clara y con presencia cinematográfica.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredWorks.map((work) => (
              <article
                key={work._id}
                className="group/card overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface/90 shadow-[0_24px_80px_-46px_rgba(0,0,0,0.8)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={getImageUrl(work.coverImage)}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,15,18,0.1),rgba(13,15,18,0.6))]" />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.26em] text-brand/80">
                    {formatCategory(work.serviceCategory)}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl tracking-tight text-foreground">
                    {work.title}
                  </h3>

                  <Link
                    href={`/portfolio/${work.slug}`}
                    className="mt-6 inline-flex items-center rounded-full border border-brand/25 bg-brand/10 px-4 py-2 text-sm font-medium text-brand transition-all hover:border-brand/40 hover:bg-brand/15"
                  >
                    Ver más
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  );
}
