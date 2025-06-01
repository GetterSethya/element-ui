<script lang="ts">
    import { cn } from "@/lib/shared/utils/classes";
    import type { DescriptionProps } from ".";

    let {
        class: className,
        children,
        ref = $bindable(null),
        ...rest
    }: DescriptionProps = $props();
</script>

<p
    bind:this={ref}
    data-card="description"
    class={cn("text-sm", className)}
    {...rest}
>
    {@render children?.()}
</p>
