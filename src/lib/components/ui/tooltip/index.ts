import { Tooltip } from "bits-ui";
import Root from "./root.svelte";
import Trigger from "./trigger.svelte";
import Portal from "./portal.svelte";
import Content from "./content.svelte";
import { tv, type VariantProps as VP } from "tailwind-variants";

export const tooltipVariants = tv({
  base: "[&_[data-tooltip=content]]:p-2.5 [&_[data-tooltip=content]]:z-50 [&_[data-tooltip=content]]:shadow-md",
  variants: {
    variant: {
      surface: "[&_[data-tooltip=content]]:bg-surface text-on-surface",
      primary:
        "[&_[data-tooltip=content]]:bg-primary-container text-on-primary-container",
      secondary:
        "[&_[data-tooltip=content]]:bg-secondary-container text-on-secondary-container",
      tertiary:
        "[&_[data-tooltip=content]]:bg-tertiary-container text-on-tertiary-container",
    },
    border: {
      none: "",
      outside:
        "[&_[data-tooltip=content]]:border-outline/20 [&_[data-tooltip=content]]:border-1",
    },
    radius: {
      none: "[&_[data-tooltip=content]]:rounded-none",
      xs: "[&_[data-tooltip=content]]:rounded-[4px]",
      sm: "[&_[data-tooltip=content]]:rounded-[8px]",
      md: "[&_[data-tooltip=content]]:rounded-[10px]",
      lg: "[&_[data-tooltip=content]]:rounded-[12px]",
      xl: "[&_[data-tooltip=content]]:rounded-[14px]",
      xxl: "[&_[data-tooltip=content]]:rounded-[16px]",
    },
  },
  defaultVariants: {
    border: "outside",
    radius: "md",
    variant: "surface",
  },
});

export type VariantProps = VP<typeof tooltipVariants>;
export type TooltipRootProps = Tooltip.RootProps & {
  variant?: VariantProps["variant"];
  border?: VariantProps["border"];
  radius?: VariantProps["radius"];
};
export type TooltipTriggerProps = Tooltip.TriggerProps;
export type TooltipContentProps = Tooltip.ContentProps;
export type TooltipPortalProps = Tooltip.PortalProps;

export { Root, Trigger, Portal, Content };
