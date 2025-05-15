<script lang="ts">
    import { ModeWatcher, mode } from "mode-watcher";
    import { CssVarMap } from "@lib/shared/utils/css-map.svelte";
    import Theme from "@lib/shared/theme/";
    import { UseColorScheme } from "@lib/hooks/useColorScheme.svelte";
    import RootRouter from "@/routes/router.svelte";

    let theme = $state(
        CssVarMap.fromObject(Theme[mode.current as keyof typeof Theme]),
    );

    UseColorScheme.setCtx(() => theme);
</script>

<ModeWatcher />
<RootRouter />
