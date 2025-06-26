<script lang="ts">
    import LoadingIndicator, {
        type SpinnerProps,
    } from "@ui/loading-indicator/";

    type Size = SpinnerProps["size"];
    type Color = SpinnerProps["color"];

    const indicators = [
        { name: "Circular", component: LoadingIndicator.Circular },
        { name: "Fan", component: LoadingIndicator.Fan },
        { name: "Dot", component: LoadingIndicator.Dot },
        { name: "dot wave", component: LoadingIndicator.DotWave },
    ];

    const sizes: Size[] = ["sm", "md", "lg", "xl", "xxl"];
    const colors: Color[] = [
        "default",
        "primary",
        "secondary",
        "tertiary",
        "error",
    ];
</script>

<div class="flex flex-col gap-10 px-20">
    {#each indicators as indicator}
        <div class="flex flex-col gap-2.5">
            <span>{indicator.name}</span>
            <div class="flex flex-col gap-2.5">
                <div class="flex items-center gap-2.5">
                    {#each sizes as size}
                        <svelte:component this={indicator.component} {size} />
                    {/each}
                </div>
                <div class="flex items-center gap-2.5">
                    {#each colors as color}
                        <svelte:component this={indicator.component} {color} />
                    {/each}
                </div>
            </div>
        </div>
    {/each}
</div>

