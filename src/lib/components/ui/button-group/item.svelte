<script lang="ts">
    import { buttonGroupItemVariants, type ButtonGroupItemProps } from ".";
    import { Button as ButtonPrimitive } from "bits-ui";
    import { cn } from "@lib/shared/utils/classes";
    import { ButtonGroupContext } from "./root.svelte";
    import Variant from "@ui/button/variant";
    import { type ClassNameValue } from "tailwind-merge";

    let {
        children,
        class: className,
        ref = $bindable(null),
        size = "md",
        ...rest
    }: ButtonGroupItemProps = $props();

    const context = ButtonGroupContext.getCtx();
</script>

<ButtonPrimitive.Root
    class={cn(
        buttonGroupItemVariants({
            variant: context().variant,
            color: context().color,
            size,
            className: className as ClassNameValue,
        }),
        Variant[`${context().variant!}Hover`][context().color!],
    )}
    {...rest}
>
    {@render children?.()}
</ButtonPrimitive.Root>
