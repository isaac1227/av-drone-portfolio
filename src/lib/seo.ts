import type { Metadata } from "next";
import type { SanityImageSource } from "@sanity/image-url";

import { safeUrlFor } from "@/sanity/lib/image";

const defaultSiteUrl = "https://nattaerialstudio.com";

function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl).replace(
    /\/$/,
    "",
  );
}

export const siteConfig = {
  name: "NATT Aerial Studio",
  author: "Natalia Mora",
  siteUrl: getSiteUrl(),
  description:
    "Fotografía y vídeo con dron para inmobiliaria, eventos, parcelas y marcas en España.",
  keywords: [
    "fotografía aérea",
    "vídeo con dron",
    "vídeo aéreo",
    "fotografía con dron",
    "dron inmobiliaria",
    "dron eventos",
    "parcelas y terrenos",
    "fotografía aérea Elche",
    "vídeo con dron España",
  ],
  locale: "es_ES",
};

export type SeoPage = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
};

export const seoPages = {
  home: {
    title: "Fotografía y vídeo con dron en España",
    description:
      "Fotografía aérea y vídeo con dron para inmobiliaria, eventos, parcelas y marcas. Producción audiovisual desde Elche con cobertura en toda España.",
    path: "/",
    keywords: [
      "fotografía aérea España",
      "vídeo con dron España",
      "fotografía aérea Elche",
      "vídeo aéreo profesional",
    ],
  },
  portfolio: {
    title: "Portfolio de fotografía y vídeo con dron",
    description:
      "Selección de trabajos de fotografía aérea y vídeo con dron para inmobiliaria, eventos, parcelas y marcas con enfoque visual premium.",
    path: "/portfolio",
  },
  services: {
    title: "Servicios de fotografía y vídeo con dron",
    description:
      "Servicios de fotografía aérea, vídeo con dron y cobertura audiovisual para eventos, inmuebles, parcelas y contenido de marca en España.",
    path: "/servicios",
  },
  about: {
    title: "Sobre mí y mi trabajo con dron",
    description:
      "Natalia Mora, creadora audiovisual especializada en fotografía y vídeo aéreo con dron para proyectos comerciales en España.",
    path: "/sobre-mi",
  },
  contact: {
    title: "Contacto y presupuesto para tu proyecto",
    description:
      "Pide presupuesto para fotografía aérea, vídeo con dron y cobertura audiovisual para inmobiliaria, eventos, parcelas o marcas.",
    path: "/contacto",
  },
} satisfies Record<string, SeoPage>;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function buildImageUrl(
  source?: SanityImageSource | null,
  width = 1200,
  height = 630,
) {
  const builder = safeUrlFor(source);

  if (!builder) {
    return "/images/logo/logo-principal-blanco-sin-fondo.png";
  }

  return (
    builder.width(width).height(height).fit("crop").auto("format").url() ??
    "/images/logo/logo-principal-blanco-sin-fondo.png"
  );
}

export function buildPageMetadata(page: SeoPage): Metadata {
  const canonicalUrl = absoluteUrl(page.path);
  const imageUrl = page.image
    ? page.image.startsWith("/")
      ? absoluteUrl(page.image)
      : page.image
    : absoluteUrl("/images/logo/logo-principal-blanco-sin-fondo.png");

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords ?? siteConfig.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: page.type ?? "website",
      locale: siteConfig.locale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: page.title,
      description: page.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: page.imageAlt ?? page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [imageUrl],
    },
  };
}

export function getBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    areaServed: "España",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Elche",
      addressRegion: "Alicante",
      addressCountry: "ES",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["es"],
    },
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    jobTitle: "Creadora audiovisual especializada en dron",
    url: absoluteUrl("/sobre-mi"),
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

function getYouTubeEmbedId(url: string) {
  try {
    const parsedUrl = new URL(url);
    const shortId = parsedUrl.hostname.includes("youtu.be")
      ? parsedUrl.pathname.slice(1)
      : null;
    const watchId = parsedUrl.searchParams.get("v");
    const embedId = parsedUrl.pathname.split("/").filter(Boolean).at(-1);

    return shortId ?? watchId ?? embedId ?? url;
  } catch {
    return url;
  }
}

export function getWorkJsonLd(work: {
  title: string;
  description: string;
  slug: string;
  youtubeUrl?: string;
  publishedAt?: string;
  coverImage?: SanityImageSource | null;
}) {
  const pageUrl = absoluteUrl(`/portfolio/${work.slug}`);
  const imageUrl = buildImageUrl(work.coverImage, 1200, 630);
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "ImageObject",
      name: work.title,
      description: work.description,
      contentUrl: imageUrl,
      url: pageUrl,
      representativeOfPage: true,
    },
  ];

  if (work.youtubeUrl) {
    graph.unshift({
      "@type": "VideoObject",
      name: work.title,
      description: work.description,
      thumbnailUrl: [imageUrl],
      uploadDate: work.publishedAt,
      contentUrl: work.youtubeUrl,
      embedUrl: `https://www.youtube.com/embed/${getYouTubeEmbedId(work.youtubeUrl)}`,
      url: pageUrl,
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
