<script lang="ts">
    import { cn } from "@/lib/shared";
    import { tooltipVariants, type TooltipRootProps } from ".";
    import { Tooltip } from "bits-ui";

    let { children, variant, border, radius, ...rest }: TooltipRootProps =
        $props();
</script>

<Tooltip.Provider>
    <Tooltip.Root {...rest}>
        <div class={cn(tooltipVariants({ variant, border, radius }))}>
            {@render children?.()}
        </div>
    </Tooltip.Root>
</Tooltip.Provider>
