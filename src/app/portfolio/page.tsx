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
    <main className="bg-zinc-100 px-6 pb-20 pt-24 lg:pt-28">
      <section className="mx-auto max-w-7xl">
        <h1 className="text-6xl tracking-tight text-zinc-950">Portfolio</h1>
        <p className="mt-12 text-4xl leading-[1.25] text-zinc-500">
          Seleccion de proyectos audiovisuales capturados desde una perspectiva
          aerea unica.
        </p>

        <div className="mt-14 border-b border-zinc-300 pb-4">
          <div className="flex flex-wrap items-center gap-7">
            {allCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`border-b-2 pb-2 text-lg tracking-wide transition-colors ${
                    isActive
                      ? "border-zinc-950 font-semibold text-zinc-950"
                      : "border-transparent text-zinc-400 hover:text-zinc-700"
                  }`}
                >
                  {category.toUpperCase()}
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
