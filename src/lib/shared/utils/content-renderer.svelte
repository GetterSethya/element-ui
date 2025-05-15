<script module lang="ts">
    import type { Snippet } from "svelte";
    import type { TypedComponent } from "../types";

    export type ContentRendererProps = {
        content?: Snippet | TypedComponent;
    };
</script>

<script lang="ts">
    let { content }: ContentRendererProps = $props();
</script>

{#if content}
    {#if typeof content === "function"}
        {@render content()}
    {:else if typeof content === "object"}
        {@const StartContent = content.component}
        <StartContent {...content.props} />
    {/if}
{/if}
