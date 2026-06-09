import { groq } from "next-sanity";

export const worksQuery = groq`
  *[_type == "work"]{
    _id,
    title,
    slug,
    description,
    serviceCategory,
    subcategory,
    coverImage,
    location,
    youtubeUrl,
    featured,
    publishedAt,
  }
`;
