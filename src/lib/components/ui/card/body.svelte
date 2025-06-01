<script lang="ts">
    import type { BodyProps } from ".";

    let {
        class: className,
        children,
        ref = $bindable(null),
        ...rest
    }: BodyProps = $props();
</script>

<div bind:this={ref} {...rest} class="flex flex-col gap-2 p-4">
    {@render children?.()}
</div>
