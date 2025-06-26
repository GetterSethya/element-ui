<script lang="ts">
    import Badge from "@/lib/components/ui/badge/badge.svelte";
    import type { VariantProps } from "@/lib/components/ui/badge/";

    type Size = VariantProps["size"];
    type Color = VariantProps["color"];

    const sizes: { name: string; value: Size }[] = [
        { name: "indicator", value: "indicator" },
        { name: "sm", value: "sm" },
        { name: "md", value: "md" },
        { name: "lg", value: "lg" },
    ];

    const colors: Color[] = ["primary", "secondary", "tertiary"];
</script>

<div class="flex w-1/2 flex-col gap-10 px-20">
    {#each sizes as size}
        <div class="flex flex-col gap-2.5">
            <span>{size.name}</span>
            <div class="flex flex-col gap-2.5">
                {#if size.value === "indicator"}
                    <Badge size="indicator" />
                    {#each colors as color}
                        <Badge {color} size="indicator" />
                    {/each}
                {:else}
                    <Badge size={size.value}>1</Badge>
                    <Badge size={size.value}>999+</Badge>

                    {#each colors as color}
                        <Badge {color} size={size.value}>999+</Badge>
                    {/each}
                {/if}
            </div>
        </div>
    {/each}
</div>

