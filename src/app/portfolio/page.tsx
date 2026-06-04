"use client";

import WorkCard from "@/components/portfolio/WorkCard";
import { works } from "@/data/works";
import { useMemo, useState } from "react";

export default function Portfolio() {
  const categories = useMemo(
    () => [
      "TODOS",
      ...Array.from(new Set(works.map((work) => work.serviceCategory))),
    ],
    [],
  );
  const [selectedCategory, setSelectedCategory] = useState("TODOS");

  const filteredWorks = useMemo(
    () =>
      selectedCategory === "TODOS"
        ? works
        : works.filter((work) => work.serviceCategory === selectedCategory),
    [selectedCategory],
  );

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
            {categories.map((category) => {
              const isActive = selectedCategory === category;

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
            <WorkCard
              key={work.id}
              title={work.title}
              category={work.serviceCategory}
              subcategory={work.subcategory}
              youtubeUrl={work.youtubeUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
