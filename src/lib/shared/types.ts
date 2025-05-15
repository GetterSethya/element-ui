import type { Component, ComponentProps } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export type WithRef<T extends HTMLElement> = HTMLAttributes<T> & {
  ref?: T | null;
};

export type TypedComponent<Comp extends Component<any> = any> = {
  component: Comp;
  props?: ComponentProps<Comp>;
};
