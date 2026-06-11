"use client";

"use client";

import WorkCard from "@/components/portfolio/WorkCard";
import { useEffect, useState } from "react";
import { getWorks } from "@/sanity/lib/works";

export default function Portfolio() {
  const [worksData, setWorksData] = useState<
    Awaited<ReturnType<typeof getWorks>>
  >([]);

  useEffect(() => {
    const loadWorks = async () => {
      const data = await getWorks();
      setWorksData(data);
    };

    loadWorks();
  }, []);

  const categories = Array.from(
    new Set(
      worksData
        .map((work) => work.serviceCategory)
        .filter((category): category is string =>
          Boolean(category && category.trim()),
        ),
    ),
  );
  const allCategories = ["Mostrar todos", ...categories];
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Mostrar todos");
  const activeCategory = allCategories.includes(selectedCategory)
    ? selectedCategory
    : "Mostrar todos";

  const filteredWorks =
    activeCategory === "Mostrar todos"
      ? worksData
      : worksData.filter((work) => work.serviceCategory === activeCategory);

  return (
    <main className="px-6 pb-20 pt-16 lg:px-10 lg:pt-20">
      <section className="mx-auto max-w-7xl">
        <p className="font-heading text-xs uppercase tracking-[0.36em] text-brand/80">
          Portfolio
        </p>
        <h1 className="mt-4 max-w-[10ch] font-heading text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
          Proyectos con precisión visual y presencia cinematográfica.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-text-soft sm:text-xl">
          Selección de trabajos audiovisuales capturados desde una perspectiva
          aérea limpia, premium y alineada con objetivos de marca.
        </p>

        <div className="mt-14 border-b border-white/10 pb-4">
          <div className="flex flex-wrap items-center gap-3">
            {allCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "border-brand/40 bg-brand/10 text-brand"
                      : "border-white/10 bg-white/[0.02] text-text-subtle hover:border-white/20 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work) => (
            <WorkCard key={work._id} work={work} />
          ))}
        </div>
      </section>
    </main>
  );
}
