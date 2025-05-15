import { Button as ButtonPrimitive } from "bits-ui";
import { tv, type VariantProps } from "tailwind-variants";
import Variant from "./variant";
import type { Component, Snippet } from "svelte";
import type { TypedComponent } from "@lib/shared/types";

export const buttonVariants = tv({
  base: "inline-flex gap-1 items-center justify-center whitespace-nowrap text-sm cursor-pointer ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      elevated: "shadow-md/20",
      filled: "",
      tonal: "",
      outlined: "outline-2",
      text: "",
    },
    color: {
      primary: "",
      secondary: "",
      tertiary: "",
      error: "",
    },
    size: {
      icon: "h-10 w-10",
      xs: "h-6 px-2 text-xs",
      sm: "h-8 px-2.5",
      md: "h-10 px-2.5",
      lg: "h-12 px-4",
      xl: "h-16 px-8",
      xxl: "h-20 px-10",
    },
    radius: {
      none: "rounded-none",
      xs: "rounded-[4px]",
      sm: "rounded-[8px]",
      md: "rounded-[12px]",
      lg: "rounded-[16px]",
      xl: "rounded-[20px]",
      xxl: "rounded-[26px]",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    color: "primary",
    radius: "md",
    size: "md",
    variant: "filled",
  },

  compoundVariants: [
    //filled
    {
      variant: "filled",
      color: "primary",
      class: [Variant.filled.primary, Variant.filledHover.primary],
    },
    {
      variant: "filled",
      color: "secondary",
      class: [Variant.filled.secondary, Variant.filledHover.secondary],
    },
    {
      variant: "filled",
      color: "tertiary",
      class: [Variant.filled.tertiary, Variant.filledHover.tertiary],
    },
    {
      variant: "filled",
      color: "error",
      class: [Variant.filled.error, Variant.filledHover.error],
    },

    //elevated
    {
      variant: "elevated",
      color: "primary",
      class: [Variant.elevated.primary, Variant.elevatedHover.primary],
    },
    {
      variant: "elevated",
      color: "secondary",
      class: [Variant.elevated.secondary, Variant.elevatedHover.secondary],
    },
    {
      variant: "elevated",
      color: "tertiary",
      class: [Variant.elevated.tertiary, Variant.elevatedHover.tertiary],
    },
    {
      variant: "elevated",
      color: "error",
      class: [Variant.elevated.error, Variant.elevatedHover.error],
    },

    //tonal
    {
      variant: "tonal",
      color: "primary",
      class: [Variant.tonal.primary, Variant.tonalHover.primary],
    },
    {
      variant: "tonal",
      color: "secondary",
      class: [Variant.tonal.secondary, Variant.tonalHover.secondary],
    },
    {
      variant: "tonal",
      color: "tertiary",
      class: [Variant.tonal.tertiary, Variant.tonalHover.tertiary],
    },
    {
      variant: "tonal",
      color: "error",
      class: [Variant.tonal.error, Variant.tonalHover.error],
    },

    //outlined
    {
      variant: "outlined",
      color: "primary",
      class: [Variant.outlined.primary, Variant.outlinedHover.primary],
    },
    {
      variant: "outlined",
      color: "secondary",
      class: [Variant.outlined.secondary, Variant.outlinedHover.secondary],
    },
    {
      variant: "outlined",
      color: "tertiary",
      class: [Variant.outlined.tertiary, Variant.outlinedHover.tertiary],
    },
    {
      variant: "outlined",
      color: "error",
      class: [Variant.outlined.error, Variant.outlinedHover.error],
    },

    //text
    {
      variant: "text",
      color: "primary",
      class: [Variant.text.primary, Variant.textHover.primary],
    },
    {
      variant: "text",
      color: "secondary",
      class: [Variant.text.secondary, Variant.textHover.secondary],
    },
    {
      variant: "text",
      color: "tertiary",
      class: [Variant.text.tertiary, Variant.textHover.tertiary],
    },
    {
      variant: "text",
      color: "error",
      class: [Variant.text.error, Variant.textHover.error],
    },
  ],
});

export type ButtonProps<
  StartContent extends Component,
  EndContent extends Component,
  LoadingComponent extends Component,
> = ButtonPrimitive.RootProps & {
  loadingSide?: "start" | "end";
  loadingComponent?: Snippet | TypedComponent<LoadingComponent>;
  startContent?: Snippet | TypedComponent<StartContent>;
  endContent?: Snippet | TypedComponent<EndContent>;
  isLoading?: boolean;
  variant?: ButtonVariantProps["variant"];
  color?: ButtonVariantProps["color"];
  size?: ButtonVariantProps["size"];
  radius?: ButtonVariantProps["radius"];
};

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
