import { defineField, defineType } from "sanity";
import { SubcategoryInput } from "../components/SubCategoryInput";

export const workType = defineType({
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
    }),

    defineField({
      name: "serviceCategory",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Eventos", value: "eventos" },
          { title: "Inmobiliaria", value: "inmobiliaria" },
          { title: "Parcelas y Terrenos", value: "parcelas" },
          { title: "Fotografía Aérea", value: "fotografia" },
        ],
      },
    }),

    defineField({
      name: "subcategory",
      title: "Subcategoría",
      type: "string",
      components: {
        input: SubcategoryInput,
      },
    }),

    defineField({
      name: "location",
      title: "Ubicación",
      type: "string",
    }),

    defineField({
      name: "coverImage",
      title: "Imagen principal",
      type: "image",
    }),

    defineField({
      name: "gallery",
      title: "Galería",
      description:
        "Para poder publicar en Studio, pulsa 'Add item' aunque no subas ninguna imagen.",
      type: "array",
      of: [{ type: "image" }],
    }),

    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
    }),

    defineField({
      name: "publishedAt",
      title: "Fecha publicación",
      type: "datetime",
    }),

    defineField({
      name: "featured",
      title: "Destacado",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
