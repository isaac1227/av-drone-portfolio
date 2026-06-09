import { useEffect } from "react";
import { Select, Card, Stack, Text } from "@sanity/ui";
import { set, unset, useFormValue } from "sanity";
import type { StringInputProps } from "sanity";
import { categories } from "../constants/categories";

export function SubcategoryInput(props: StringInputProps) {
  const { value, onChange } = props;

  // Accede al valor de serviceCategory del mismo documento en tiempo real
  const serviceCategory = useFormValue(["serviceCategory"]) as
    | string
    | undefined;

  const selectedCategory = categories.find((c) => c.value === serviceCategory);
  const options = selectedCategory?.subcategories ?? [];

  // Limpia la subcategoría automáticamente si ya no pertenece a la categoría actual
  useEffect(() => {
    if (!value || !serviceCategory) return;

    const validValues =
      categories
        .find((c) => c.value === serviceCategory)
        ?.subcategories.map((s) => s.value) ?? [];

    if (!validValues.includes(value)) {
      onChange(unset());
    }
  }, [serviceCategory, value, onChange]);

  if (!serviceCategory) {
    return (
      <Card padding={3} tone="caution" border radius={2}>
        <Text size={1}>Selecciona primero una categoría</Text>
      </Card>
    );
  }

  return (
    <Stack space={2}>
      <Card padding={2}>
        <Select
          value={value ?? ""}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onChange(
              event.currentTarget.value
                ? set(event.currentTarget.value)
                : unset(),
            )
          }
        >
          <option value="">Selecciona una subcategoría</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </Select>
      </Card>
    </Stack>
  );
}
