<script lang="ts">
    import type { IconProps } from ".";

    let {
        class: className,
        children,
        ref = $bindable(null),
        ...rest
    }: IconProps = $props();
</script>

<div data-alert="icon" {...rest} bind:this={ref} class={className}>
    {@render children?.()}
</div>
