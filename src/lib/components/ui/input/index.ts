import type { TypedComponent, WithRef } from "@/lib/shared/types";
import { tv } from "tailwind-variants";
import { type VariantProps as VP } from "tailwind-variants";
import type {
  HTMLInputAttributes,
  HTMLInputTypeAttribute,
} from "svelte/elements";
import Input from "./input.svelte";
import Group from "./group.svelte";
import type { Component, Snippet } from "svelte";

const inputVariants = tv({
  base: "w-full",
  variants: {
    variant: {
      styled:
        "border border-outline/20 px-3 py-2 focus-visible:outline-2 focus-visible:border-primary focus-visible:outline-primary text-sm",
      borderless:
        "focus-visible:outline-none text-sm group-focus-visible:bg-red-500",
    },
    radius: {
      none: "",
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
      xxl: "",
      full: "",
    },
  },
  compoundVariants: [
    {
      variant: "styled",
      radius: "none",
    },
    {
      variant: "styled",
      radius: "xs",
      class: "rounded-[4px]",
    },
    {
      variant: "styled",
      radius: "sm",
      class: "rounded-[8px]",
    },
    {
      variant: "styled",
      radius: "sm",
      class: "rounded-[10px]",
    },
    {
      variant: "styled",
      radius: "md",
      class: "rounded-[12px]",
    },
    {
      variant: "styled",
      radius: "lg",
      class: "rounded-[12px]",
    },
    {
      variant: "styled",
      radius: "xl",
      class: "rounded-[14px]",
    },
    {
      variant: "styled",
      radius: "xxl",
      class: "rounded-[16px]",
    },
    {
      variant: "styled",
      radius: "full",
      class: "rounded-full",
    },
  ],
  defaultVariants: {
    radius: "md",
    variant: "styled",
  },
});

const groupVariants = tv({
  base: "w-full inline-flex gap-2 border border-outline/20 px-3 py-2 focus-within:outline-2 focus-within:border-primary focus-within:outline-primary text-sm",
  variants: {
    radius: {
      none: "rounded-none",
      xs: "rounded-[4px]",
      sm: "rounded-[8px]",
      md: "rounded-[10px]",
      lg: "rounded-[12px]",
      xl: "rounded-[14px]",
      xxl: "rounded-[16px]",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    radius: "md",
  },
});

type InputVariantProps = VP<typeof inputVariants>;
type InputProps = Omit<HTMLInputAttributes, "children"> & {
  ref?: HTMLInputElement;
  type?: HTMLInputTypeAttribute;
  radius?: InputVariantProps["radius"];
  variant?: InputVariantProps["variant"];
  invalid?: boolean;
};

type GroupVariantProps = VP<typeof groupVariants>;
type GroupProps<
  StartContent extends Component,
  EndContent extends Component,
> = Omit<WithRef<HTMLDivElement>, "children"> & {
  startContent?: Snippet<[]> | TypedComponent<StartContent>;
  endContent?: Snippet<[]> | TypedComponent<EndContent>;
  radius?: GroupVariantProps["radius"];
  invalid?: boolean;
  children?: Snippet<
    [
      {
        radius?: GroupVariantProps["radius"];
        invalid?: boolean;
      },
    ]
  >;
};

export {
  type InputProps,
  type GroupProps,
  Input,
  Group as InputGroup,
  inputVariants,
  groupVariants,
};
