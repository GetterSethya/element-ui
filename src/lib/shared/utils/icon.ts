import { ICON_SIZE } from "../constants";

export const iconSizeSemantic = ["sm", "md", "lg", "xl","xxl"] as const;
export class IconSize {
  public static size = ICON_SIZE;

  public static fromSemantic(semantic: (typeof iconSizeSemantic)[number]) {
    switch (semantic) {
      case "sm":
        return this.size * 0.8;
      case "md":
        return this.size;
      case "lg":
        return this.size * 1.2;
      case "xl":
        return this.size * 1.5;
      case "xxl":
        return this.size * 2;

      default:
        return this.size;
    }
  }
}
