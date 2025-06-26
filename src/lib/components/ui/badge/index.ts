import type { WithRef } from "@/lib/shared/types";
import Badge from "./badge.svelte";
import { tv } from "tailwind-variants";
import type { VariantProps as VP } from "tailwind-variants";

const badgeVariants = tv({
  base: "w-fit rounded-full inline-flex items-center justify-center text-xs whitespace-nowrap shrink-0 font-medium",
  variants: {
    color: {
      primary: "bg-primary-container text-on-primary-container",
      secondary: "bg-secondary-container text-on-primary-container",
      tertiary: "bg-tertiary-container text-on-tertiary-container",
      error: "bg-error-container text-on-error-container",
    },
    size: {
      indicator: "w-2 h-2",
      sm: "h-5 min-w-5 px-1",
      md: "h-7 min-w-7 px-1.5",
      lg: "h-8 min-w-8 px-2",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "error",
  },
});

type VariantProps = VP<typeof badgeVariants>;
type BadgeProps = WithRef<HTMLDivElement> & {
  size?: VariantProps["size"];
  color?: VariantProps["color"];
};

export { Badge, badgeVariants, type BadgeProps, type VariantProps };
