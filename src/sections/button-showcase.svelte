<script>
    import { MoonIcon, SunIcon } from "@lucide/svelte";

    import Button from "../lib/components/ui/button/button.svelte";
    import { ICON_SIZE } from "../lib/shared/constants";
    import LoadingIndicator from "../lib/components/ui/loading-indicator/";
</script>

<div class="flex px-20 flex-col gap-10">
    <div class="flex flex-col gap-2.5">
        <span>elevated</span>
        <div class="flex flex-col gap-2.5">
            <div class="flex items-center gap-2.5">
                <Button
                    variant="elevated"
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
                <Button variant="elevated" color="primary">
                    {#snippet startContent()}
                        <SunIcon size={ICON_SIZE} />
                    {/snippet}
                    {#snippet endContent()}
                        <MoonIcon size={ICON_SIZE} />
                    {/snippet}
                    snippet
                </Button>
                <Button variant="elevated" color="primary">primary</Button>
                <Button variant="elevated" color="secondary">secondary</Button>
                <Button variant="elevated" color="tertiary">tertiary</Button>
                <Button variant="elevated" color="error">error</Button>
            </div>

            <div class="flex items-center gap-2.5">
                <Button
                    variant="elevated"
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Dot,
                    }}
                    color="primary"
                >
                    dot
                </Button>
                <Button
                    variant="elevated"
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Dot,
                    }}
                    color="secondary"
                >
                    dot
                </Button>
                <Button
                    variant="elevated"
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Dot,
                    }}
                    color="tertiary"
                >
                    dot
                </Button>
                <Button
                    variant="elevated"
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Dot,
                    }}
                    color="error"
                >
                    dot
                </Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button
                    variant="elevated"
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Fan,
                    }}
                    color="primary"
                >
                    fan
                </Button>
                <Button
                    variant="elevated"
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Fan,
                    }}
                    color="secondary"
                >
                    fan
                </Button>
                <Button
                    variant="elevated"
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Fan,
                    }}
                    color="tertiary"
                >
                    fan
                </Button>
                <Button
                    variant="elevated"
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Fan,
                    }}
                    color="error"
                >
                    fan
                </Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button
                    variant="elevated"
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Circular,
                    }}
                    color="primary"
                >
                    cicular
                </Button>
                <Button
                    variant="elevated"
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Circular,
                    }}
                    color="secondary"
                >
                    circular
                </Button>
                <Button
                    variant="elevated"
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Circular,
                    }}
                    color="tertiary"
                >
                    circular
                </Button>
                <Button
                    variant="elevated"
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Circular,
                    }}
                    color="error"
                >
                    circular
                </Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button
                    variant="elevated"
                    loadingSide="start"
                    isLoading
                    color="primary"
                >
                    start
                </Button>
                <Button
                    variant="elevated"
                    loadingSide="end"
                    isLoading
                    color="primary"
                >
                    end
                </Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button variant="elevated" size="icon">
                    <SunIcon />
                </Button>
                <Button variant="elevated" size="xs">extra small</Button>
                <Button variant="elevated" size="sm">small</Button>
                <Button variant="elevated" size="md">medium</Button>
                <Button variant="elevated" size="lg">large</Button>
                <Button variant="elevated" size="xl">extra large</Button>
                <Button variant="elevated" size="xxl">extra extra large</Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button variant="elevated" radius="none" size="xl">none</Button>
                <Button variant="elevated" radius="xs" size="xl"
                    >extra small</Button
                >
                <Button variant="elevated" radius="sm" size="xl">small</Button>
                <Button variant="elevated" radius="md" size="xl">medium</Button>
                <Button variant="elevated" radius="lg" size="xl">large</Button>
                <Button variant="elevated" radius="xl" size="xl"
                    >extra large</Button
                >
                <Button variant="elevated" radius="xxl" size="xxl"
                    >extra extra large</Button
                >
                <Button variant="elevated" radius="full" size="xxl">full</Button
                >
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2.5">
        <span>filled</span>
        <div class="flex flex-col gap-2.5">
            <div class="flex items-center gap-2.5">
                <Button
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
                    content
                </Button>
                <Button color="primary">
                    {#snippet startContent()}
                        <SunIcon size={ICON_SIZE} />
                    {/snippet}
                    {#snippet endContent()}
                        <MoonIcon size={ICON_SIZE} />
                    {/snippet}
                    snippet
                </Button>
                <Button color="primary">primary</Button>
                <Button color="secondary">secondary</Button>
                <Button color="tertiary">tertiary</Button>
                <Button color="error">error</Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Dot,
                    }}
                    color="primary"
                >
                    dot
                </Button>
                <Button
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Dot,
                    }}
                    color="secondary"
                >
                    dot
                </Button>
                <Button
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Dot,
                    }}
                    color="tertiary"
                >
                    dot
                </Button>
                <Button
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Dot,
                    }}
                    color="error"
                >
                    dot
                </Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Fan,
                    }}
                    color="primary"
                >
                    fan
                </Button>
                <Button
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Fan,
                    }}
                    color="secondary"
                >
                    fan
                </Button>
                <Button
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Fan,
                    }}
                    color="tertiary"
                >
                    fan
                </Button>
                <Button
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Fan,
                    }}
                    color="error"
                >
                    fan
                </Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Circular,
                    }}
                    color="primary"
                >
                    cicular
                </Button>
                <Button
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Circular,
                    }}
                    color="secondary"
                >
                    circular
                </Button>
                <Button
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Circular,
                    }}
                    color="tertiary"
                >
                    circular
                </Button>
                <Button
                    loadingSide="end"
                    isLoading
                    loadingComponent={{
                        component: LoadingIndicator.Circular,
                    }}
                    color="error"
                >
                    circular
                </Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button loadingSide="start" isLoading color="primary">
                    start
                </Button>
                <Button loadingSide="end" isLoading color="primary">end</Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button size="icon">
                    <SunIcon />
                </Button>
                <Button size="xs">extra small</Button>
                <Button size="sm">small</Button>
                <Button size="md">medium</Button>
                <Button size="lg">large</Button>
                <Button size="xl">extra large</Button>
                <Button size="xxl">extra extra large</Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button radius="none" size="xl">none</Button>
                <Button radius="xs" size="xl">extra small</Button>
                <Button radius="sm" size="xl">small</Button>
                <Button radius="md" size="xl">medium</Button>
                <Button radius="lg" size="xl">large</Button>
                <Button radius="xl" size="xl">extra large</Button>
                <Button radius="xxl" size="xxl">extra extra large</Button>
                <Button radius="full" size="xxl">full</Button>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2.5">
        <span>tonal</span>
        <div class="flex flex-col gap-2.5">
            <div class="flex items-center gap-2.5">
                <Button
                    variant="tonal"
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
                    content
                </Button>
                <Button variant="tonal" color="primary">
                    {#snippet startContent()}
                        <SunIcon size={ICON_SIZE} />
                    {/snippet}
                    {#snippet endContent()}
                        <MoonIcon size={ICON_SIZE} />
                    {/snippet}
                    snippet
                </Button>
                <Button
                    variant="tonal"
                    loadingSide="start"
                    isLoading
                    color="primary"
                >
                    start
                </Button>
                <Button
                    variant="tonal"
                    loadingSide="end"
                    isLoading
                    color="primary"
                >
                    end
                </Button>
                <Button variant="tonal" color="primary">primary</Button>
                <Button variant="tonal" color="secondary">secondary</Button>
                <Button variant="tonal" color="tertiary">tertiary</Button>
                <Button variant="tonal" color="error">error</Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button variant="tonal" size="icon">
                    <SunIcon />
                </Button>
                <Button variant="tonal" size="xs">extra small</Button>
                <Button variant="tonal" size="sm">small</Button>
                <Button variant="tonal" size="md">medium</Button>
                <Button variant="tonal" size="lg">large</Button>
                <Button variant="tonal" size="xl">extra large</Button>
                <Button variant="tonal" size="xxl">extra extra large</Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button variant="tonal" radius="none" size="xl">none</Button>
                <Button variant="tonal" radius="xs" size="xl"
                    >extra small</Button
                >
                <Button variant="tonal" radius="sm" size="xl">small</Button>
                <Button variant="tonal" radius="md" size="xl">medium</Button>
                <Button variant="tonal" radius="lg" size="xl">large</Button>
                <Button variant="tonal" radius="xl" size="xl"
                    >extra large</Button
                >
                <Button variant="tonal" radius="xxl" size="xxl"
                    >extra extra large</Button
                >
                <Button variant="tonal" radius="full" size="xxl">full</Button>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2.5">
        <span>outlined</span>
        <div class="flex flex-col gap-2.5">
            <div class="flex items-center gap-2.5">
                <Button
                    variant="outlined"
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
                    content
                </Button>
                <Button variant="outlined" color="primary">
                    {#snippet startContent()}
                        <SunIcon size={ICON_SIZE} />
                    {/snippet}
                    {#snippet endContent()}
                        <MoonIcon size={ICON_SIZE} />
                    {/snippet}
                    snippet
                </Button>
                <Button
                    variant="outlined"
                    loadingSide="start"
                    isLoading
                    color="primary"
                >
                    start
                </Button>
                <Button
                    variant="outlined"
                    loadingSide="end"
                    isLoading
                    color="primary"
                >
                    end
                </Button>
                <Button variant="outlined" color="primary">primary</Button>
                <Button variant="outlined" color="secondary">secondary</Button>
                <Button variant="outlined" color="tertiary">tertiary</Button>
                <Button variant="outlined" color="error">error</Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button variant="outlined" size="icon">
                    <SunIcon />
                </Button>
                <Button variant="outlined" size="xs">extra small</Button>
                <Button variant="outlined" size="sm">small</Button>
                <Button variant="outlined" size="md">medium</Button>
                <Button variant="outlined" size="lg">large</Button>
                <Button variant="outlined" size="xl">extra large</Button>
                <Button variant="outlined" size="xxl">extra extra large</Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button variant="outlined" radius="none" size="xl">none</Button>
                <Button variant="outlined" radius="xs" size="xl"
                    >extra small</Button
                >
                <Button variant="outlined" radius="sm" size="xl">small</Button>
                <Button variant="outlined" radius="md" size="xl">medium</Button>
                <Button variant="outlined" radius="lg" size="xl">large</Button>
                <Button variant="outlined" radius="xl" size="xl"
                    >extra large</Button
                >
                <Button variant="outlined" radius="xxl" size="xxl"
                    >extra extra large</Button
                >
                <Button variant="outlined" radius="full" size="xxl">full</Button
                >
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2.5">
        <span>text</span>
        <div class="flex flex-col gap-2.5">
            <div class="flex items-center gap-2.5">
                <Button
                    variant="text"
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
                    content
                </Button>
                <Button variant="text" color="primary">
                    {#snippet startContent()}
                        <SunIcon size={ICON_SIZE} />
                    {/snippet}
                    {#snippet endContent()}
                        <MoonIcon size={ICON_SIZE} />
                    {/snippet}
                    snippet
                </Button>
                <Button
                    variant="text"
                    loadingSide="start"
                    isLoading
                    color="primary"
                >
                    start
                </Button>
                <Button
                    variant="text"
                    loadingSide="end"
                    isLoading
                    color="primary"
                >
                    end
                </Button>
                <Button variant="text" color="primary">primary</Button>
                <Button variant="text" color="secondary">secondary</Button>
                <Button variant="text" color="tertiary">tertiary</Button>
                <Button variant="text" color="error">error</Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button variant="text" size="icon">
                    <SunIcon />
                </Button>
                <Button variant="text" size="xs">extra small</Button>
                <Button variant="text" size="sm">small</Button>
                <Button variant="text" size="md">medium</Button>
                <Button variant="text" size="lg">large</Button>
                <Button variant="text" size="xl">extra large</Button>
                <Button variant="text" size="xxl">extra extra large</Button>
            </div>
            <div class="flex items-center gap-2.5">
                <Button variant="text" radius="none" size="xl">none</Button>
                <Button variant="text" radius="xs" size="xl">extra small</Button
                >
                <Button variant="text" radius="sm" size="xl">small</Button>
                <Button variant="text" radius="md" size="xl">medium</Button>
                <Button variant="text" radius="lg" size="xl">large</Button>
                <Button variant="text" radius="xl" size="xl">extra large</Button
                >
                <Button variant="text" radius="xxl" size="xxl"
                    >extra extra large</Button
                >
                <Button variant="text" radius="full" size="xxl">full</Button>
            </div>
        </div>
    </div>
</div>
