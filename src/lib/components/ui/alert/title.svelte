<script lang="ts">
    import { cn } from "@/lib/shared/utils/classes";
    import type { TitleProps } from ".";

    let {
        children,
        class: className,
        ref = $bindable(null),
        ...rest
    }: TitleProps = $props();
</script>

<p
    data-alert="title"
    {...rest}
    bind:this={ref}
    class={cn("font-medium text-md", className)}
>
    {@render children?.()}
</p>
