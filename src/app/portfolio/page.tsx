import type { Metadata } from "next";

import { buildPageMetadata, seoPages } from "@/lib/seo";
import { getWorks } from "@/sanity/lib/works";
import PortfolioClient from "../../components/portfolio/PortfolioClient";

export function generateMetadata(): Metadata {
  return buildPageMetadata(seoPages.portfolio);
}

export default async function Portfolio() {
  const works = await getWorks();

  return (
    <main className="px-6 pb-20 pt-16 lg:px-10 lg:pt-20">
      <section className="mx-auto max-w-7xl">
        <p className="font-heading text-xs uppercase tracking-[0.36em] text-brand/80">
          Portfolio
        </p>
        <h1 className="mt-4 max-w-[14ch] font-heading text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
          Portfolio de fotografía y vídeo con dron
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-text-soft sm:text-xl">
          Selección de trabajos audiovisuales capturados desde una perspectiva
          aérea limpia, premium y alineada con objetivos de marca.
        </p>

        <PortfolioClient works={works} />
      </section>
    </main>
  );
}
