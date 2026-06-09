import Image from "next/image";
import { Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Work } from "@/types/works";
import { urlFor } from "@/sanity/lib/image";

interface WorkCardProps {
  work: Work;
}

function urlForImage(source?: string | null) {
  if (source == null) {
    return "/images/placeholder-work.jpg";
  }
  return urlFor(source).url() ?? "/images/placeholder-work.jpg";
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <Card className="overflow-hidden border border-zinc-200 bg-white pt-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-56 w-full overflow-hidden border-b border-zinc-200">
        <Image
          src={urlForImage(work.coverImage)}
          alt={work.title}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-2xl tracking-tight text-zinc-900">
          {work.title}
        </CardTitle>
        <p className="text-sm font-medium tracking-wide text-zinc-400 uppercase">
          {work.serviceCategory}
        </p>
        <p className="text-xs tracking-wide text-zinc-300 uppercase">
          {work.subcategory}
        </p>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-base leading-relaxed text-zinc-500">
          Produccion audiovisual aerea orientada a resultados visuales de alto
          impacto.
        </p>
        <a
          href={work.youtubeUrl}
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
