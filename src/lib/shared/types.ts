import type { Component, ComponentProps } from "svelte";

export type TypedComponent<Comp extends Component<any> = any> = {
  component: Comp;
  props?: ComponentProps<Comp>;
};
