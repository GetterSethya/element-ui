<script lang="ts">
    import { ModeWatcher, setMode, mode } from "mode-watcher";
    import { CssVarMap } from "./lib/shared/utils/css-map.svelte";
    import Theme from "./lib/shared/theme/";
    import { UseColorScheme } from "./lib/hooks/useColorScheme.svelte";
    import { MoonIcon } from "@lucide/svelte";
    import { SunIcon } from "@lucide/svelte";
    import { ICON_SIZE } from "./lib/shared/constants";
    import ButtonShowcase from "./sections/button-showcase.svelte";
    import LoadingIndicatorShowcase from "./sections/loading-indicator-showcase.svelte";
    import ButtonGroupShowcase from "./sections/button-group-showcase.svelte";

    let theme = $state(
        CssVarMap.fromObject(Theme[mode.current as keyof typeof Theme]),
    );

    UseColorScheme.setCtx(() => theme);
</script>

<ModeWatcher />
<main class="p-5">
    <button
        onclick={() => {
            if (mode.current === "dark") {
                setMode("light");
                theme = CssVarMap.fromObject(Theme.light);
            } else {
                setMode("dark");
                theme = CssVarMap.fromObject(Theme.dark);
            }
        }}
    >
        {#if mode.current === "dark"}
            <MoonIcon size={ICON_SIZE} />
        {:else}
            <SunIcon size={ICON_SIZE} />
        {/if}
    </button>
    <ButtonShowcase />
    <LoadingIndicatorShowcase />
    <ButtonGroupShowcase />
</main>
