<script lang="ts">
    import { Tooltip } from "bits-ui";
    import type { TooltipContentProps } from ".";
    import { cn } from "@/lib/shared";

    let {
        class: className,
        children,
        ref = $bindable(null),
        sideOffset = 10,
        ...rest
    }: TooltipContentProps = $props();
</script>

<Tooltip.Content
    data-tooltip="content"
    class={cn(className)}
    bind:ref
    {sideOffset}
    {...rest}
>
    {@render children?.()}
</Tooltip.Content>
