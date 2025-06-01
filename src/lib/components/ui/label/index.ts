import Label from "./label.svelte";
import { Label as LabelPrimitive } from "bits-ui";

type LabelProps = LabelPrimitive.RootProps & { invalid?: boolean };

export { Label, type LabelProps };
