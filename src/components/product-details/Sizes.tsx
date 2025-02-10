import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Sizes() {
  return (
    <ToggleGroup type="single" size="sm">
      <ToggleGroupItem value="xs" aria-label="xs">
        XS
      </ToggleGroupItem>
      <ToggleGroupItem value="s" aria-label="s">
        S
      </ToggleGroupItem>
      <ToggleGroupItem value="m" aria-label="m">
        M
      </ToggleGroupItem>
      <ToggleGroupItem value="l" aria-label="l">
        L
      </ToggleGroupItem>
      <ToggleGroupItem value="xl" aria-label="xl">
        XL
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
