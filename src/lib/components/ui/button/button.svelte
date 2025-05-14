<script lang="ts">
    import { buttonVariants, type ButtonProps } from ".";
    import { Button as ButtonPrimitive } from "bits-ui";
    import { cn } from "../../../shared/utils/classes";
    import { type ClassNameValue } from "tailwind-merge";

    let {
        children,
        class: className,
        ref,
        variant,
        size,
        radius,
        color,
        ...rest
    }: ButtonProps = $props();
</script>

<ButtonPrimitive.Root
    bind:ref
    class={cn(
        buttonVariants({
            variant,
            size,
            radius,
            color,
            className: className as ClassNameValue,
        }),
    )}
    {...rest}
>
    {@render children?.()}
</ButtonPrimitive.Root>
