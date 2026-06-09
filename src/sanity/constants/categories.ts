export type Subcategory = {
  title: string;
  value: string;
};

export type Category = {
  title: string;
  value: string;
  subcategories: Subcategory[];
};

export const categories: Category[] = [
  {
    title: "Eventos",
    value: "eventos",
    subcategories: [
      { title: "Bodas", value: "bodas" },
      { title: "Corporativos", value: "corporativos" },
      { title: "Deportivos", value: "deportivos" },
      { title: "Celebraciones", value: "celebraciones" },
    ],
  },
  {
    title: "Inmobiliaria",
    value: "inmobiliaria",
    subcategories: [
      { title: "Viviendas", value: "viviendas" },
      { title: "Chalets", value: "chalets" },
      { title: "Hoteles", value: "hoteles" },
      { title: "Apartamentos turísticos", value: "apartamentos" },
    ],
  },
  {
    title: "Parcelas y Terrenos",
    value: "parcelas",
    subcategories: [
      { title: "Parcelas urbanas", value: "parcelas_urbanas" },
      { title: "Terrenos rústicos", value: "terrenos_rusticos" },
      { title: "Fincas", value: "fincas" },
      { title: "Inspección visual", value: "inspeccion" },
    ],
  },
  {
    title: "Fotografía Aérea",
    value: "fotografia",
    subcategories: [
      { title: "Marketing", value: "marketing" },
      { title: "Turismo", value: "turismo" },
      { title: "Redes Sociales", value: "redes" },
      { title: "Empresas", value: "empresas" },
    ],
  },
];
