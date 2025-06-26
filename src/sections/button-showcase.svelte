<script lang="ts">
    import { MoonIcon, SunIcon } from "@lucide/svelte";
    import Button from "@ui/button/button.svelte";
    import { ICON_SIZE } from "@lib/shared/constants";
    import LoadingIndicator from "@lib/components/ui/loading-indicator/";
    import type { ButtonProps } from "@ui/button";

    type Variant = ButtonProps<never, never, never>["variant"];
    type Color = ButtonProps<never, never, never>["color"];
    type Size = ButtonProps<never, never, never>["size"];
    type Radius = ButtonProps<never, never, never>["radius"];

    const variants: Variant[] = [
        "elevated",
        "filled",
        "tonal",
        "outlined",
        "text",
    ];
    const colors: Color[] = ["primary", "secondary", "tertiary", "error"];
    const sizes: { name: string; value: Size }[] = [
        { name: "icon", value: "icon" },
        { name: "extra small", value: "xs" },
        { name: "small", value: "sm" },
        { name: "medium", value: "md" },
        { name: "large", value: "lg" },
        { name: "extra large", value: "xl" },
        { name: "extra extra large", value: "xxl" },
    ];
    const radiuses: { name: string; value: Radius }[] = [
        { name: "none", value: "none" },
        { name: "extra small", value: "xs" },
        { name: "small", value: "sm" },
        { name: "medium", value: "md" },
        { name: "large", value: "lg" },
        { name: "extra large", value: "xl" },
        { name: "extra extra large", value: "xxl" },
        { name: "full", value: "full" },
    ];
    const loadingIndicators = [
        { name: "dot", component: LoadingIndicator.Dot },
        { name: "fan", component: LoadingIndicator.Fan },
        { name: "circular", component: LoadingIndicator.Circular },
        { name: "dot wave", component: LoadingIndicator.DotWave },
    ];
</script>

<div class="flex flex-col gap-10 px-20">
    {#each variants as variant}
        <div class="flex flex-col gap-2.5">
            <span>{variant}</span>
            <div class="flex flex-col gap-2.5">
                <div class="flex items-center gap-2.5">
                    <Button
                        {variant}
                        color="primary"
                        startContent={{
                            component: SunIcon,
                            props: { size: ICON_SIZE },
                        }}
                        endContent={{
                            component: MoonIcon,
                            props: { size: ICON_SIZE },
                        }}
                    >
                        comp
                    </Button>
                    <Button {variant} color="primary">
                        {#snippet startContent()}
                            <SunIcon size={ICON_SIZE} />
                        {/snippet}
                        {#snippet endContent()}
                            <MoonIcon size={ICON_SIZE} />
                        {/snippet}
                        snippet
                    </Button>
                    {#each colors as color}
                        <Button {variant} {color}>{color}</Button>
                    {/each}
                </div>

                {#each loadingIndicators as indicator}
                    <div class="flex items-center gap-2.5">
                        {#each colors as color}
                            <Button
                                {variant}
                                {color}
                                isLoading
                                loadingSide="end"
                                loadingComponent={{
                                    component: indicator.component,
                                }}
                            >
                                {indicator.name}
                            </Button>
                        {/each}
                    </div>
                {/each}

                <div class="flex items-center gap-2.5">
                    <Button
                        {variant}
                        isLoading
                        loadingSide="start"
                        color="primary">start</Button
                    >
                    <Button
                        {variant}
                        isLoading
                        loadingSide="end"
                        color="primary">end</Button
                    >
                </div>

                <div class="flex items-center gap-2.5">
                    {#each sizes as size}
                        <Button {variant} size={size.value}>
                            {#if size.value === "icon"}
                                <SunIcon />
                            {:else}
                                {size.name}
                            {/if}
                        </Button>
                    {/each}
                </div>

                <div class="flex items-center gap-2.5">
                    {#each radiuses as radius}
                        <Button
                            {variant}
                            radius={radius.value}
                            size={radius.value === "full" ? "xxl" : "xl"}
                        >
                            {radius.name}
                        </Button>
                    {/each}
                </div>
            </div>
        </div>
    {/each}
</div>

