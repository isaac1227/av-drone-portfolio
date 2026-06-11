"use client";

import { useMemo, useState } from "react";

import WorkCard from "@/components/portfolio/WorkCard";
import type { Work } from "@/types/works";

const categoryLabels: Record<string, string> = {
  eventos: "Eventos",
  inmobiliaria: "Inmobiliaria",
  parcelas: "Parcelas y terrenos",
  fotografia: "Fotografía aérea",
};

function formatCategory(category: string) {
  return categoryLabels[category] ?? category;
}

interface PortfolioClientProps {
  works: Work[];
}

export default function PortfolioClient({ works }: PortfolioClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("Mostrar todos");

  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          works
            .map((work) => work.serviceCategory)
            .filter((category): category is string =>
              Boolean(category?.trim()),
            ),
        ),
      ),
    [works],
  );

  const allCategories = ["Mostrar todos", ...categories];
  const activeCategory = allCategories.includes(selectedCategory)
    ? selectedCategory
    : "Mostrar todos";

  const filteredWorks =
    activeCategory === "Mostrar todos"
      ? works
      : works.filter((work) => work.serviceCategory === activeCategory);

  return (
    <>
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
                {category === "Mostrar todos"
                  ? category
                  : formatCategory(category)}
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
    </>
  );
}
