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

<span
    class={cn("text-xs text-on-surface/70", className)}
    bind:this={ref}
    {...rest}>{@render children?.()}</span
>
