import { CssVarMap } from "@lib/shared/utils/css-map.svelte";
import { getContext, setContext } from "svelte";

export class UseColorScheme {
  public static key = Symbol("useColorScheme");

  public static setCtx(cssMap: () => CssVarMap) {
    return setContext(this.key, cssMap);
  }

  public static getCtx() {
    return getContext<ReturnType<typeof this.setCtx>>(this.key);
  }
}
