import { groq } from "next-sanity";

export const worksQuery = groq`
  *[_type == "work"]{
    _id,
    title,
    "slug": slug.current,
    description,
    "serviceCategory": coalesce(serviceCategory),
    subcategory,
    "coverImage": select(defined(coverImage.asset) => coverImage, null),
    location,
    youtubeUrl,
    featured,
    publishedAt,
  }
`;

export const workBySlugQuery = groq`
  *[_type == "work" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    description,
    "serviceCategory": coalesce(serviceCategory),
    subcategory,
    "coverImage": select(defined(coverImage.asset) => coverImage, null),
    location,
    "gallery": coalesce(gallery[defined(asset)], []),
    youtubeUrl,
    publishedAt,
    featured,
  }
`;
