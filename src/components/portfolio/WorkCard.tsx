import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Work } from "@/types/works";
import { safeUrlFor } from "@/sanity/lib/image";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url";

interface WorkCardProps {
  work: Work;
}

function urlForImage(source?: SanityImageSource | null) {
  const builder = safeUrlFor(source);
  if (!builder) {
    return "/images/placeholder-work.jpg";
  }
  return builder.url() ?? "/images/placeholder-work.jpg";
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <Card className="overflow-hidden pt-0">
      <div className="relative h-56 w-full overflow-hidden border-b border-white/10">
        <Image
          src={urlForImage(work.coverImage)}
          alt={`${work.title} - fotografía aérea con dron`}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,15,18,0.08),rgba(13,15,18,0.58))]" />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-2xl tracking-tight text-foreground">
          {work.title}
        </CardTitle>
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand/80">
          {work.serviceCategory}
        </p>
        <p className="text-xs uppercase tracking-[0.18em] text-text-subtle">
          {work.subcategory}
        </p>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-base leading-relaxed text-text-soft">
          Producción audiovisual aérea orientada a resultados visuales de alto
          impacto.
        </p>
        <Link
          href={`/portfolio/${work.slug}`}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-4 py-2 text-sm font-medium text-brand transition-all hover:border-brand/40 hover:bg-brand/15"
        >
          Ver más
        </Link>
      </CardContent>
    </Card>
  );
}
