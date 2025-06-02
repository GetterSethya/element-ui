<script lang="ts">
    import { cn } from "@/lib/shared/utils/classes";
    import type { DescriptionProps } from ".";

    let {
        children,
        class: className,
        ref = $bindable(null),
        ...rest
    }: DescriptionProps = $props();
</script>

<p
    data-alert="description"
    {...rest}
    bind:this={ref}
    class={cn("text-sm text-inherit", className)}
>
    {@render children?.()}
</p>
