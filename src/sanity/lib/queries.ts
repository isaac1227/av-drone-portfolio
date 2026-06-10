/* 
Fetch queries para el tipo de documento "work" en Sanity, incluyendo proyecciones 
para campos específicos y ordenamientos. 
*/
import { groq } from "next-sanity";

// Proyección común para los campos de "work" que se reutiliza en varias consultas.
const workProjection = `
  _id,
  title,
  "slug": slug.current,
  description,
  "serviceCategory": coalesce(serviceCategory, ""),
  "subcategory": coalesce(subcategory, ""),
  "coverImage": select(defined(coverImage.asset) => coverImage, null),
  "location": coalesce(location, ""),
  "gallery": coalesce(gallery[defined(asset)], []),
  "youtubeUrl": coalesce(youtubeUrl, ""),
  featured,
  publishedAt,
`;

// Fetch para recoger todos los documentos de tipo "work" que tengan
// un slug definido, ordenados por fecha de publicación descendente.
export const worksQuery = groq`
  *[_type == "work" && defined(slug.current)]
  | order(coalesce(publishedAt, _createdAt) desc){
    ${workProjection}
  }
`;

// Fetch para recoger un único documento donde el campo "slug.current"
// coincida con el valor proporcionado en la variable $slug.
export const workBySlugQuery = groq`
  *[_type == "work" && slug.current == $slug][0]{
    ${workProjection}
  }
`;

// Fetch para recoger los documentos donde "featured" sea true, ordenados
// por fecha de publicación descendente, limitando a los 3 más recientes.
export const featuredWorksQuery = groq`
  *[
    _type == "work" &&
    featured == true &&
    defined(slug.current)
  ]
  | order(coalesce(publishedAt, _createdAt) desc)[0...3]{
    ${workProjection}
  }
`;
