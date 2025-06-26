<script lang="ts">
    import { Tooltip } from "bits-ui";
    import type { TooltipTriggerProps } from ".";
    import { cn } from "@/lib/shared";

    let {
        class: className,
        ref = $bindable(null),
        ...rest
    }: TooltipTriggerProps = $props();
</script>

<Tooltip.Trigger bind:ref class={cn(className)} {...rest} />
