export interface Work {
  _id: string;
  title: string;
  slug: string;
  description: string;
  serviceCategory: string;
  subcategory: string;
  coverImage: string;
  location?: string;
  gallery: string[];
  youtubeUrl: string;
  publishedAt: string;
  featured: boolean;
}
