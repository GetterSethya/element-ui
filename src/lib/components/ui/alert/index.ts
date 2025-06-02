import Root from "./root.svelte";
import Title from "./title.svelte";
import Description from "./description.svelte";
import Icon from "./icon.svelte";
import Content from "./content.svelte";
import { tv } from "tailwind-variants";
import type { VariantProps as VP } from "tailwind-variants";
import type { WithRef } from "@/lib/shared/types";
import variant from "./variant";

const alertVariants = tv({
  base: "p-5 flex inline-flex items-start gap-2",
  variants: {
    variant: {
      surface:
        "bg-surface-container text-on-surface [&_[data-alert=icon]]:text-on-surface [&_[data-alert=title]]:text-on-surface [&_[data-alert=description]]:text-on-surface/70",
      primary:
        "bg-primary-container text-on-primary-container [&_[data-alert=icon]]:text-on-primary-container [&_[data-alert=title]]:text-on-primary-container [&_[data-alert=description]]:text-on-primary-container/70",
      secondary:
        "bg-secondary-container text-on-secondary-container [&_[data-alert=icon]]:text-on-secondary-container [&_[data-alert=title]]:text-on-secondary-container [&_[data-alert=description]]:text-on-secondary-container/70",
      tertiary:
        "bg-tertiary-container text-on-tertiary-container [&_[data-alert=icon]]:text-on-tertiary-container [&_[data-alert=title]]:text-on-tertiary-container [&_[data-alert=description]]:text-on-tertiary-container/70",
      error:
        "bg-error-container text-on-error-container [&_[data-alert=icon]]:text-on-error-container [&_[data-alert=title]]:text-on-error-container [&_[data-alert=description]]:text-on-error-container/70",
    },
    border: { none: "", outside: "border" },
    radius: {
      none: "rounded-none",
      xs: "rounded-[4px]",
      sm: "rounded-[8px]",
      md: "rounded-[10px]",
      lg: "rounded-[12px]",
      xl: "rounded-[14px]",
      xxl: "rounded-[16px]",
    },
  },
  defaultVariants: {
    variant: "surface",
    radius: "md",
    border: "none",
  },
  compoundVariants: [
    {
      border: "outside",
      variant: "surface",
      className: [variant.border.surface],
    },
    {
      border: "outside",
      variant: "primary",
      className: [variant.border.primary],
    },

    {
      border: "outside",
      variant: "secondary",
      className: [variant.border.secondary],
    },
    {
      border: "outside",
      variant: "tertiary",
      className: [variant.border.tertiary],
    },
    {
      border: "outside",
      variant: "error",
      className: [variant.border.error],
    },
  ],
});

type VariantProps = VP<typeof alertVariants>;
type RootProps = WithRef<HTMLDivElement> & {
  variant?: VariantProps["variant"];
  radius?: VariantProps["radius"];
  border?: VariantProps["border"];
};
type TitleProps = WithRef<HTMLParagraphElement>;
type DescriptionProps = WithRef<HTMLParagraphElement>;
type IconProps = WithRef<HTMLDivElement>;
type ContentProps = WithRef<HTMLDivElement>;

export {
  Title,
  Icon,
  Description,
  Root,
  Content,
  alertVariants,
  type VariantProps,
  type RootProps,
  type TitleProps,
  type DescriptionProps,
  type IconProps,
  type ContentProps,
};
