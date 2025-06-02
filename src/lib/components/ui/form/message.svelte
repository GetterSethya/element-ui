<script lang="ts">
    import { cn } from "@/lib/shared/utils/classes";
    import type { MessageProps } from ".";

    let {
        errors,
        class: className,
        children,
        ...rest
    }: MessageProps = $props();
</script>

<div class="flex flex-col gap-1">
    {#each errors as e}
        {#if e}
            <span class={cn("text-xs text-error", className)} {...rest}
                >{e}</span
            >
        {/if}
    {/each}
</div>
