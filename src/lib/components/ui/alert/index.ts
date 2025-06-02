import Root from "./root.svelte";
import Title from "./title.svelte";
import Description from "./description.svelte";
import Icon from "./icon.svelte";
import { tv } from "tailwind-variants";
import type { VariantProps as VP } from "tailwind-variants";
import type { WithRef } from "@/lib/shared/types";

const alertVariants = tv({
  base: "",
  variants: {
    variant: {
      surface: "",
      primary: "",
      secondary: "",
      tertiary: "",
      error: "",
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
    variant: "surface",
    radius: "md",
  },
});

type VariantProps = VP<typeof alertVariants>;
type RootProps = WithRef<HTMLDivElement> & {
  variant?: VariantProps["variant"];
  radius?: VariantProps["radius"];
};
type TitleProps = WithRef<HTMLParagraphElement>;
type DescriptionProps = WithRef<HTMLParagraphElement>;
type IconProps = WithRef<HTMLDivElement>;

export {
  Title,
  Icon,
  Description,
  Root,
  alertVariants,
  type VariantProps,
  type RootProps,
  type TitleProps,
  type DescriptionProps,
  type IconProps,
};
