import type { SanityImageSource } from "@sanity/image-url";

export interface Work {
  _id: string;
  title: string;
  slug: string;
  description: string;
  serviceCategory: string;
  subcategory: string;
  coverImage: SanityImageSource | null;
  location?: string;
  gallery: SanityImageSource[];
  youtubeUrl: string;
  publishedAt: string;
  featured: boolean;
}
