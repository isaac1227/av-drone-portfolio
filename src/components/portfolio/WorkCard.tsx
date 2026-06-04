import Image from "next/image";
import { Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WorkCardProps {
  title: string;
  category: string;
  subcategory: string;
  youtubeUrl: string;
}

export default function WorkCard({
  title,
  category,
  subcategory,
  youtubeUrl,
}: WorkCardProps) {
  const imageByCategory: Record<string, string> = {
    Bodas:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    Inmobiliaria:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    Eventos:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    Turismo:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1200&q=80",
  };

  const coverImage =
    imageByCategory[category] ??
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80";

  return (
    <Card className="overflow-hidden border border-zinc-200 bg-white pt-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-56 w-full overflow-hidden border-b border-zinc-200">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-2xl tracking-tight text-zinc-900">
          {title}
        </CardTitle>
        <p className="text-sm font-medium tracking-wide text-zinc-400 uppercase">
          {subcategory}
        </p>
        <p className="text-xs tracking-wide text-zinc-300 uppercase">
          {category}
        </p>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-base leading-relaxed text-zinc-500">
          Produccion audiovisual aerea orientada a resultados visuales de alto
          impacto.
        </p>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 border border-zinc-900 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
        >
          Ver video
          <Play className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
}
