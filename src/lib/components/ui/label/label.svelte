<script lang="ts">
    import { cn } from "@/lib/shared/utils/classes";
    import type { LabelProps } from ".";
    import { Label as LabelPrimitive } from "bits-ui";

    let {
        children,
        class: className,
        ref = $bindable(null),
        for: forProps,
        invalid,
        ...rest
    }: LabelProps = $props();
</script>

<LabelPrimitive.Root
    bind:ref
    for={forProps}
    class={cn("font-medium text-sm inline-flex gap-1", invalid && "text-error", className)}
    {...rest}
>
    {@render children?.()}
    {#if rest["aria-required"]}
        <span class="text-error">*</span>
    {/if}
</LabelPrimitive.Root>
