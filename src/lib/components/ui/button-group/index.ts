import Root from "./root.svelte";
import Item from "./item.svelte";
import { tv, type VariantProps } from "tailwind-variants";
import type { WithRef } from "@lib/shared/types";
import { Button as ButtonPrimitive } from "bits-ui";
import Variant from "@ui/button/variant";

export const buttonGroupVariants = tv({
  base: "inline-flex transition-all ease-in-out items-center cursor-pointer",
  variants: {
    variant: {
      elevated: "shadow-md/10",
      filled: "",
      tonal: "",
      outlined: "outline-1",
      text: "",
    },
    color: {
      primary: "",
      secondary: "",
      tertiary: "",
      error: "",
    },
    radius: {
      none: "",
      xs: "rounded-[4px]",
      sm: "rounded-[8px]",
      md: "rounded-[12px]",
      lg: "rounded-[16px]",
      xl: "rounded-[24px]",
      full: "rounded-full",
    },
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    color: "primary",
    radius: "md",
    size: "md",
    variant: "filled",
    direction: "horizontal",
  },

  compoundVariants: [
    // horizontal
    {
      direction: "horizontal",
      radius: "full",
      class:
        "[&>button]:first:rounded-l-full [&>button]:first:pl-3 [&>button]:last:rounded-r-full [&>button]:last:pr-3",
    },
    {
      direction: "horizontal",
      radius: "xl",
      class:
        "[&>button]:first:rounded-l-[20px] [&>button]:first:pl-3 [&>button]:last:rounded-r-[20px] [&>button]:last:pr-3",
    },
    {
      direction: "horizontal",
      radius: "lg",
      class:
        "[&>button]:first:rounded-l-[16px] [&>button]:first:pl-3 [&>button]:last:rounded-r-[16px] [&>button]:last:pr-3",
    },
    {
      direction: "horizontal",
      radius: "md",
      class:
        "[&>button]:first:rounded-l-[12px] [&>button]:first:pl-3 [&>button]:last:rounded-r-[12px] [&>button]:last:pr-3",
    },
    {
      direction: "horizontal",
      radius: "sm",
      class:
        "[&>button]:first:rounded-l-[8px] [&>button]:first:pl-3 [&>button]:last:rounded-r-[8px] [&>button]:last:pr-3",
    },
    {
      direction: "horizontal",
      radius: "xs",
      class:
        "[&>button]:first:rounded-l-[4px] [&>button]:first:pl-3 [&>button]:last:rounded-r-[4px] [&>button]:last:pr-3",
    },

    // vertical
    {
      direction: "vertical",
      radius: "full",
      class:
        "[&>button]:first:rounded-l-full [&>button]:first:pl-3 [&>button]:last:rounded-r-full [&>button]:last:pr-3",
    },
    {
      direction: "vertical",
      radius: "xl",
      class:
        "[&>button]:first:rounded-l-[20px] [&>button]:first:pl-3 [&>button]:last:rounded-r-[20px] [&>button]:last:pr-3",
    },
    {
      direction: "vertical",
      radius: "lg",
      class:
        "[&>button]:first:rounded-l-[16px] [&>button]:first:pl-3 [&>button]:last:rounded-r-[16px] [&>button]:last:pr-3",
    },
    {
      direction: "vertical",
      radius: "md",
      class:
        "[&>button]:first:rounded-t-[12px] [&>button]:first:pl-3 [&>button]:last:rounded-b-[12px] [&>button]:last:pr-3 [&>button]:w-full",
    },
    {
      direction: "vertical",
      radius: "sm",
      class:
        "[&>button]:first:rounded-l-[8px] [&>button]:first:pl-3 [&>button]:last:rounded-r-[8px] [&>button]:last:pr-3",
    },
    {
      direction: "vertical",
      radius: "xs",
      class:
        "[&>button]:first:rounded-l-[4px] [&>button]:first:pl-3 [&>button]:last:rounded-r-[4px] [&>button]:last:pr-3",
    },

    // outlined
    {
      variant: "outlined",
      direction: "horizontal",
      class: "divide-x-1",
    },
    {
      variant: "outlined",
      direction: "vertical",
      class: "divide-y-1",
    },
  ],
});

export const buttonGroupItemVariants = tv({
  base: "inline-flex transition-all ease-in-out items-center cursor-pointer",
  variants: {
    variant: {
      elevated: "",
      filled: "",
      tonal: "",
      outlined: "",
      text: "",
    },
    color: {
      primary: "",
      secondary: "",
      tertiary: "",
      error: "",
    },
    size: {
      icon: "h-10 px-2",
      xs: "h-6 px-2 text-xs",
      sm: "h-8 px-2.5",
      md: "h-10 px-2.5",
      lg: "h-12 !px-4",
      xl: "h-16 !px-8",
      xxl: "h-20 !px-10",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    variant: "filled",
  },

  compoundVariants: [
    //filled
    {
      variant: "filled",
      color: "primary",
      class: [Variant.filled.primary],
    },
    {
      variant: "filled",
      color: "secondary",
      class: [Variant.filled.secondary],
    },
    {
      variant: "filled",
      color: "tertiary",
      class: [Variant.filled.tertiary],
    },
    {
      variant: "filled",
      color: "error",
      class: [Variant.filled.error],
    },

    //elevated
    {
      variant: "elevated",
      color: "primary",
      class: [Variant.elevated.primary],
    },
    {
      variant: "elevated",
      color: "secondary",
      class: [Variant.elevated.secondary],
    },
    {
      variant: "elevated",
      color: "tertiary",
      class: [Variant.elevated.tertiary],
    },
    {
      variant: "elevated",
      color: "error",
      class: [Variant.elevated.error],
    },

    //tonal
    {
      variant: "tonal",
      color: "primary",
      class: [Variant.tonal.primary],
    },
    {
      variant: "tonal",
      color: "secondary",
      class: [Variant.tonal.secondary],
    },
    {
      variant: "tonal",
      color: "tertiary",
      class: [Variant.tonal.tertiary],
    },
    {
      variant: "tonal",
      color: "error",
      class: [Variant.tonal.error],
    },

    //outlined
    {
      variant: "outlined",
      color: "primary",
      class: [Variant.outlined.primary],
    },
    {
      variant: "outlined",
      color: "secondary",
      class: [Variant.outlined.secondary],
    },
    {
      variant: "outlined",
      color: "tertiary",
      class: [Variant.outlined.tertiary],
    },
    {
      variant: "outlined",
      color: "error",
      class: [Variant.outlined.error],
    },

    //text
    {
      variant: "text",
      color: "primary",
      class: [Variant.text.primary],
    },
    {
      variant: "text",
      color: "secondary",
      class: [Variant.text.secondary],
    },
    {
      variant: "text",
      color: "tertiary",
      class: [Variant.text.tertiary],
    },
    {
      variant: "text",
      color: "error",
      class: [Variant.text.error],
    },
  ],
});

export type ButtonGroupVariantProps = VariantProps<typeof buttonGroupVariants>;

export type ButtonGroupRootProps = WithRef<HTMLDivElement> & {
  variant?: ButtonGroupVariantProps["variant"];
  color?: ButtonGroupVariantProps["color"];
  radius?: ButtonGroupVariantProps["radius"];
  direction?: ButtonGroupVariantProps["direction"];
};

export type ButtonGroupItemVariantProps = VariantProps<
  typeof buttonGroupItemVariants
>;
export type ButtonGroupItemProps = ButtonPrimitive.RootProps & {
  size?: ButtonGroupItemVariantProps["size"];
};

export default { Root, Item };
