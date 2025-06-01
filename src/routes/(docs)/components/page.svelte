<script module lang="ts">
    export type ComponentDocsPageProps = {
        componentName: string;
    };
</script>

<script lang="ts">
    import ButtonGroupShowcase from "@/sections/button-group-showcase.svelte";
    import ButtonShowcase from "@/sections/button-showcase.svelte";
    import LoadingIndicatorShowcase from "@/sections/loading-indicator-showcase.svelte";
    import CardShowcase from "@/sections/card-showcase.svelte";

    let { componentName }: ComponentDocsPageProps = $props();
</script>

{#if componentName === "button"}
    <ButtonShowcase />
{/if}

{#if componentName === "button_group"}
    <ButtonGroupShowcase />
{/if}

{#if componentName === "loading_indicator"}
    <LoadingIndicatorShowcase />
{/if}

{#if componentName === "card"}
    <CardShowcase />
{/if}
