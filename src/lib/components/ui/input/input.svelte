<script lang="ts">
    import { cn } from "@/lib/shared/utils/classes";
    import { inputVariants, type InputProps } from ".";

    let {
        class: className,
        radius,
        invalid,
        variant,
        ...rest
    }: InputProps = $props();
</script>

<input
    class={cn(
        inputVariants({
            radius,
            variant
        }),
        invalid && "border-error",
        className,
    )}
    {...rest}
/>
