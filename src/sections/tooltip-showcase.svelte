<script lang="ts">
    import { ICON_SIZE } from "@/lib/shared/constants";
    import { InfoIcon } from "@lucide/svelte";
    import * as Tooltip from "@ui/tooltip/";
</script>

<div class="flex px-20 flex-col gap-10 w-1/2">
    <div class="flex flex-col gap-2.5">
        <span>Surface</span>
        <div class="flex flex-row gap-2.5">
            <Tooltip.Root open={true}>
                <Tooltip.Trigger>
                    <InfoIcon size={ICON_SIZE} />
                </Tooltip.Trigger>
                <Tooltip.Content>Make some magic!</Tooltip.Content>
            </Tooltip.Root>
            <Tooltip.Root border="none">
                <Tooltip.Trigger>
                    <InfoIcon size={ICON_SIZE} />
                </Tooltip.Trigger>
                <Tooltip.Content>Border none</Tooltip.Content>
            </Tooltip.Root>
            <Tooltip.Root border="outside" radius="none">
                <Tooltip.Trigger>
                    <InfoIcon size={ICON_SIZE} />
                </Tooltip.Trigger>
                <Tooltip.Content>Radius none</Tooltip.Content>
            </Tooltip.Root>
            <Tooltip.Root border="outside" radius="xs">
                <Tooltip.Trigger>
                    <InfoIcon size={ICON_SIZE} />
                </Tooltip.Trigger>
                <Tooltip.Content>Radius xs</Tooltip.Content>
            </Tooltip.Root>
            <Tooltip.Root border="outside" radius="sm">
                <Tooltip.Trigger>
                    <InfoIcon size={ICON_SIZE} />
                </Tooltip.Trigger>
                <Tooltip.Content>Radius sm</Tooltip.Content>
            </Tooltip.Root>
            <Tooltip.Root border="outside" radius="md">
                <Tooltip.Trigger>
                    <InfoIcon size={ICON_SIZE} />
                </Tooltip.Trigger>
                <Tooltip.Content>Radius md</Tooltip.Content>
            </Tooltip.Root>
            <Tooltip.Root border="outside" radius="lg">
                <Tooltip.Trigger>
                    <InfoIcon size={ICON_SIZE} />
                </Tooltip.Trigger>
                <Tooltip.Content>Radius lg</Tooltip.Content>
            </Tooltip.Root>
            <Tooltip.Root border="outside" radius="xl">
                <Tooltip.Trigger>
                    <InfoIcon size={ICON_SIZE} />
                </Tooltip.Trigger>
                <Tooltip.Content>Radius xl</Tooltip.Content>
            </Tooltip.Root>
            <Tooltip.Root border="outside" radius="xxl">
                <Tooltip.Trigger>
                    <InfoIcon size={ICON_SIZE} />
                </Tooltip.Trigger>
                <Tooltip.Content>Radius xxl</Tooltip.Content>
            </Tooltip.Root>
        </div>
    </div>

    <div class="flex flex-col gap-2.5">
        <span>Primary</span>
        <div class="flex flex-col gap-2.5">
            <Tooltip.Root variant="primary">
                <Tooltip.Trigger>
                    <InfoIcon size={ICON_SIZE} />
                </Tooltip.Trigger>
                <Tooltip.Content>Make some magic!</Tooltip.Content>
            </Tooltip.Root>
        </div>
    </div>

    <div class="flex flex-col gap-2.5">
        <span>Secondary</span>
        <div class="flex flex-col gap-2.5">
            <Tooltip.Root variant="secondary">
                <Tooltip.Trigger>
                    <InfoIcon size={ICON_SIZE} />
                </Tooltip.Trigger>
                <Tooltip.Content>Make some magic!</Tooltip.Content>
            </Tooltip.Root>
        </div>
    </div>

    <div class="flex flex-col gap-2.5">
        <span>Tertiary</span>
        <div class="flex flex-col gap-2.5">
            <Tooltip.Root variant="tertiary">
                <Tooltip.Trigger>
                    <InfoIcon size={ICON_SIZE} />
                </Tooltip.Trigger>
                <Tooltip.Content>Make some magic!</Tooltip.Content>
            </Tooltip.Root>
        </div>
    </div>
</div>
