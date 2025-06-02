<script module lang="ts">
    export class ButtonGroupContext {
        public static key = Symbol("ButtonGroupContext");
        public static setCtx(variant: () => ButtonVariantProps) {
            return setContext(this.key, variant);
        }
        public static getCtx() {
            return getContext<ReturnType<typeof this.setCtx>>(this.key);
        }
    }
</script>

<script lang="ts">
    import { buttonGroupVariants, type ButtonGroupRootProps } from ".";
    import { cn } from "@lib/shared/utils/classes";
    import { getContext, setContext } from "svelte";
    import type { ButtonVariantProps } from "@ui/button";

    let {
        children,
        ref = $bindable(null),
        class: className,
        variant = "filled",
        color = "primary",
        radius = "md",
        direction = "horizontal",
        ...rest
    }: ButtonGroupRootProps = $props();

    ButtonGroupContext.setCtx(() => ({
        color,
        radius,
        variant,
    }));
</script>

<div
    class={cn(
        "flex",
        buttonGroupVariants({
            color,
            direction,
            radius,
            variant,
        }),
        className,
    )}
    {...rest}
>
    {@render children?.({ color, direction, radius, variant })}
</div>
