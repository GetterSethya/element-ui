<script lang="ts">
    import { cn } from "@/lib/shared/utils/classes";
    import type { FooterProps } from ".";

    let {
        children,
        class: className,
        ref = $bindable(null),
        ...rest
    }: FooterProps = $props();
</script>

<div class={cn("p-4", className)} {...rest}>{@render children?.()}</div>
