import Header from "./header.svelte";
import Title from "./title.svelte";
import Description from "./description.svelte";
import Body from "./body.svelte";
import Footer from "./footer.svelte";
import Root from "./root.svelte";
import { tv, type VariantProps as VP } from "tailwind-variants";
import type { WithRef } from "@/lib/shared/types";

const cardVariants = tv({
  base: "w-full",
  variants: {
    variant: {
      surface:
        "bg-surface-container text-on-surface [&_[data-card=description]]:text-on-surface/70",
      primary:
        "bg-primary-container/50 text-on-primary-container [&_[data-card=description]]:text-on-primary-container/70",
      secondary:
        "bg-secondary-container/50 text-on-secondary-container [&_[data-card=description]]:text-on-secondary-container/70",
      tertiary:
        "bg-tertiary-container/50 text-on-tertiary-container [&_[data-card=description]]:text-on-tertiary-container/70",
    },
    border: {
      none: "",
      outside: "border-outline/20 border-1",
      full: "border-outline/20 border-1 divide-y-1",
    },
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
    border: "outside",
    radius: "md",
    variant: "surface",
  },
});

type VariantProps = VP<typeof cardVariants>;
type RootProps = WithRef<HTMLDivElement> & {
  variant?: VariantProps["variant"];
  border?: VariantProps["border"];
  radius?: VariantProps["radius"];
};
type HeaderProps = WithRef<HTMLDivElement>;
type TitleProps = WithRef<HTMLParagraphElement>;
type DescriptionProps = WithRef<HTMLParagraphElement>;
type BodyProps = WithRef<HTMLDivElement>;
type FooterProps = WithRef<HTMLDivElement>;

export {
  Header,
  Title,
  Description,
  Body,
  Root,
  Footer,
  cardVariants,
  type RootProps,
  type VariantProps,
  type HeaderProps,
  type TitleProps,
  type DescriptionProps,
  type BodyProps,
  type FooterProps,
};
