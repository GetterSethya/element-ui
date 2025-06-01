<script lang="ts">
    import {
        MoonIcon,
        SunIcon,
        ThumbsDownIcon,
        ThumbsUpIcon,
        UserIcon,
    } from "@lucide/svelte";
    import ButtonGroup from "@ui/button-group/";
    import { ICON_SIZE } from "@lib/shared/constants";
</script>

<div class="flex px-20 flex-col gap-10">
    <div class="flex flex-col gap-2.5">
        <span>elevated</span>
        <div class="flex flex-col gap-2.5">
            <div class="flex items-center gap-2.5">
                <ButtonGroup.Root
                    radius="full"
                    variant="elevated"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <ThumbsUpIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <ThumbsDownIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    radius="xl"
                    variant="elevated"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    radius="lg"
                    variant="elevated"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    radius="md"
                    variant="elevated"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    radius="sm"
                    variant="elevated"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    radius="xs"
                    variant="elevated"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    radius="none"
                    variant="elevated"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
            </div>
            <span>Filled</span>
            <div class="flex items-center gap-2.5">
                <ButtonGroup.Root
                    radius="full"
                    variant="filled"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="xl" variant="filled" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="lg" variant="filled" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="md" variant="filled" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="sm" variant="filled" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="xs" variant="filled" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    radius="none"
                    variant="filled"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
            </div>
            <span>Tonal</span>
            <div class="flex items-center gap-2.5">
                <ButtonGroup.Root radius="full" variant="tonal" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="xl" variant="tonal" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="lg" variant="tonal" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="md" variant="tonal" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="sm" variant="tonal" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="xs" variant="tonal" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="none" variant="tonal" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
            </div>
            <span>Outlined</span>
            <div class="flex items-center gap-2.5">
                <ButtonGroup.Root
                    radius="full"
                    variant="outlined"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    radius="xl"
                    variant="outlined"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    radius="lg"
                    variant="outlined"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    radius="md"
                    variant="outlined"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    radius="sm"
                    variant="outlined"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    radius="xs"
                    variant="outlined"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    radius="none"
                    variant="outlined"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
            </div>
            <span>Text</span>
            <div class="flex items-center gap-2.5">
                <ButtonGroup.Root radius="full" variant="text" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="xl" variant="text" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="lg" variant="text" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="md" variant="text" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="sm" variant="text" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="xs" variant="text" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root radius="none" variant="text" color="primary">
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
            </div>

            <span>Filled</span>
            <div class="flex items-center gap-2.5">
                <ButtonGroup.Root
                    direction="vertical"
                    variant="filled"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    direction="vertical"
                    variant="filled"
                    color="secondary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    direction="vertical"
                    variant="filled"
                    color="tertiary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    direction="vertical"
                    variant="filled"
                    color="error"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
            </div>

            <span>Tonal</span>
            <div class="flex items-center gap-2.5">
                <ButtonGroup.Root
                    direction="vertical"
                    variant="tonal"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    direction="vertical"
                    variant="tonal"
                    color="secondary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    direction="vertical"
                    variant="tonal"
                    color="tertiary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    direction="vertical"
                    variant="tonal"
                    color="error"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
            </div>

            <span>Outlined</span>
            <div class="flex items-center gap-2.5">
                <ButtonGroup.Root
                    direction="vertical"
                    variant="outlined"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    direction="vertical"
                    variant="outlined"
                    color="secondary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    direction="vertical"
                    variant="outlined"
                    color="tertiary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    direction="vertical"
                    variant="outlined"
                    color="error"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
            </div>

            <span>Text</span>
            <div class="flex items-center gap-2.5">
                <ButtonGroup.Root
                    direction="vertical"
                    variant="text"
                    color="primary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    direction="vertical"
                    variant="text"
                    color="secondary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    direction="vertical"
                    variant="text"
                    color="tertiary"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
                <ButtonGroup.Root
                    direction="vertical"
                    variant="text"
                    color="error"
                >
                    <ButtonGroup.Item>
                        <SunIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <MoonIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                    <ButtonGroup.Item>
                        <UserIcon size={ICON_SIZE} />
                    </ButtonGroup.Item>
                </ButtonGroup.Root>
            </div>
        </div>
    </div>
</div>
