import Fan from "./fan.svelte";
import Dot from "./dot.svelte";
import DotWave from "./dot-wave.svelte";
import Circular from "./circular.svelte";
import CircularGradient from "./circular-gradient.svelte";
import type { IconProps } from "@lucide/svelte";
import { tv, type VariantProps } from "tailwind-variants";
import type { iconSizeSemantic } from "../../../shared/utils/icon";

export const spinnerVariants = tv({
  variants: {
    animation: {
      none: "",
      pulse: "animate-pulse",
      spin: "animate-spin",
    },
    color: {
      default: "text-outline/50",
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
      error: "text-error",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});

export type SpinnerVariantProps = VariantProps<typeof spinnerVariants>;

export type SpinnerProps = IconProps & {
  color?: SpinnerVariantProps["color"];
  animation?: SpinnerVariantProps["animation"];
  size?: (typeof iconSizeSemantic)[number];
};

export default { Fan, Dot, DotWave, Circular, CircularGradient };
