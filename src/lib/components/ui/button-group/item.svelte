<script lang="ts">
    import { buttonGroupItemVariants, type ButtonGroupItemProps } from ".";
    import { Button as ButtonPrimitive } from "bits-ui";
    import { cn } from "../../../shared/utils/classes";
    import { ButtonGroupContext } from "./root.svelte";
    import Variant from "../button/variant";
    import { type ClassNameValue } from "tailwind-merge";
    import { onMount } from "svelte";

    let {
        children,
        class: className,
        ref = $bindable(null),
        ...rest
    }: ButtonGroupItemProps = $props();

    const context = ButtonGroupContext.getCtx();
    onMount(() => {
        console.log("mounted");
    });
</script>

<ButtonPrimitive.Root
    class={cn(
        buttonGroupItemVariants({
            variant: context().variant,
            color: context().color,
            size: context().size,
            className: className as ClassNameValue,
        }),
        Variant[`${context().variant!}Hover`][context().color!],
    )}
    {...rest}
>
    {@render children?.()}
</ButtonPrimitive.Root>
