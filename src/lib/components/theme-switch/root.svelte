<script module lang="ts">
    export type ThemeSwitchRootProps = {};
</script>

<script lang="ts">
    import { UseColorScheme } from "@lib/hooks/useColorScheme.svelte";

    let {}: ThemeSwitchRootProps = $props();

    const colorScheme = UseColorScheme.getCtx();
</script>
