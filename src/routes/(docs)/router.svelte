<script lang="ts">
    import { Router, Route, Link } from "@wjfe/n-savant";
    import ComponentPage from "@/routes/(docs)/components/page.svelte";
    import { GithubIcon, MoonIcon, SunIcon } from "@lucide/svelte";
    import { ICON_SIZE } from "@/lib/shared/constants";
    import Button from "@/lib/components/ui/button/button.svelte";
    import { mode, setMode } from "mode-watcher";
    import { UseColorScheme } from "@/lib/hooks/useColorScheme.svelte";
    import { CssVarMap } from "@/lib/shared/utils/css-map.svelte";
    import Theme from "@lib/shared/theme/";
    import { cn } from "@/lib/shared/utils/classes";
    import { location } from "@wjfe/n-savant/core";

    let colorScheme = UseColorScheme.getCtx()();

    const sidebarDocsData = [
        {
            name: "Button",
            href: "button",
        },
        {
            name: "Button Group",
            href: "button_group",
        },
        {
            name: "Loading Indicator",
            href: "loading_indicator",
        },
        {
            name: "Card",
            href: "card",
        },
    ];

    function handleChangeMode() {
        if (mode.current === "dark") {
            setMode("light");
            colorScheme = CssVarMap.fromObject(Theme.light);
        } else {
            setMode("dark");
            colorScheme = CssVarMap.fromObject(Theme.dark);
        }
    }
</script>

<div class="min-h-screen flex flex-col">
    <div
        class="z-10 flex flex-row px-10 sticky top-0 py-2.5 border-b bg-surface-variant/10 items-center justify-between border-x border-outline/20 w-full lg:max-w-[80%] mx-auto"
    >
        <div>
            <span class="text-lg font-bold">Element UI</span>
        </div>
        <div>
            <Button size="icon" variant="text">
                <GithubIcon size={ICON_SIZE} />
            </Button>
            <Button size="icon" variant="text" onclick={handleChangeMode}>
                {#if mode.current === "dark"}
                    <MoonIcon size={ICON_SIZE} />
                {:else}
                    <SunIcon size={ICON_SIZE} />
                {/if}
            </Button>
        </div>
    </div>

    <div
        class="flex flex-1 flex-row border-e border-outline/20 w-full lg:max-w-[80%] max-h-[93.7vh] mx-auto"
    >
        <div
            class="border-x border-outline/20 bg-surface-variant/10 py-6 min-w-[350px] flex-shrink-0 overflow-y-auto"
        >
            <div class="flex flex-col gap-2">
                {#each sidebarDocsData as s}
                    <Link
                        class={cn(
                            "w-[80%] line-clamp-1 text-sm mx-auto px-2.5 py-2 hover:bg-primary hover:text-on-primary transition-all ease-in-out font-medium rounded-lg",
                            location.url.pathname === `/docs/${s.href}` &&
                                "bg-primary text-on-primary",
                        )}
                        href={`/docs/${s.href}`}
                    >
                        {s.name}
                    </Link>
                {/each}
            </div>
        </div>
        <div class="flex-grow overflow-y-auto py-10">
            <Router basePath="/docs/*">
                <Route key="component" path="/:component/">
                    {#snippet children(rp)}
                        <ComponentPage
                            componentName={rp?.component as string}
                        />
                    {/snippet}
                </Route>
            </Router>
        </div>
    </div>
</div>
