import { SvelteMap } from "svelte/reactivity";

export type SetArgs = {
  key: string;
  value: any;
};
export type RemoveArgs = { key: string };
export type FromObjectArgs = Record<string, any>;

export class CssVarMap {
  cssMap = $state(new SvelteMap<string, any>());

  public refresh() {
    let values: Array<string> = [];
    for (const [key, val] of this.cssMap) {
      values.push(`--${key}:${val}`);
    }

    document.documentElement.style.cssText = values.join(";");
  }

  public set(args: SetArgs) {
    this.cssMap.set(args.key, args.value);
    this.refresh();
  }

  public remove(args: RemoveArgs) {
    this.cssMap.delete(args.key);
    this.refresh();
  }

  static fromObject(args: FromObjectArgs) {
    const map = new CssVarMap();
    for (const key in args) {
      map.set({ key, value: args[key] });
    }

    return map;
  }
}
