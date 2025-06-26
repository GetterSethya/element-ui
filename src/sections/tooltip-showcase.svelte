<script lang="ts">
	import { ICON_SIZE } from "@/lib/shared/constants";
	import { InfoIcon } from "@lucide/svelte";
	import * as Tooltip from "@ui/tooltip/";
	import type { VariantProps } from "@ui/tooltip/";

	type Radius = VariantProps["radius"];
	type Variant = VariantProps["variant"];

	const variants: { title: string; variant: Variant }[] = [
		{ title: "Surface", variant: "surface" },
		{ title: "Primary", variant: "primary" },
		{ title: "Secondary", variant: "secondary" },
		{ title: "Tertiary", variant: "tertiary" }
	];

	const radiuses: { name: string; value: Radius }[] = [
		{ name: "Radius none", value: "none" },
		{ name: "Radius xs", value: "xs" },
		{ name: "Radius sm", value: "sm" },
		{ name: "Radius md", value: "md" },
		{ name: "Radius lg", value: "lg" },
		{ name: "Radius xl", value: "xl" },
		{ name: "Radius xxl", value: "xxl" }
	];
</script>

<div class="flex flex-col gap-10 px-20 w-1/2">
	{#each variants as { title, variant }}
		<div class="flex flex-col gap-2.5">
			<span>{title}</span>
			<div class="flex flex-row gap-2.5">
				<Tooltip.Root {variant}>
					<Tooltip.Trigger>
						<InfoIcon size={ICON_SIZE} />
					</Tooltip.Trigger>
					<Tooltip.Content>Make some magic!</Tooltip.Content>
				</Tooltip.Root>
				<Tooltip.Root border="none" {variant}>
					<Tooltip.Trigger>
						<InfoIcon size={ICON_SIZE} />
					</Tooltip.Trigger>
					<Tooltip.Content>Border none</Tooltip.Content>
				</Tooltip.Root>
				{#each radiuses as { name, value }}
					<Tooltip.Root border="outside" radius={value} {variant}>
						<Tooltip.Trigger>
							<InfoIcon size={ICON_SIZE} />
						</Tooltip.Trigger>
						<Tooltip.Content>{name}</Tooltip.Content>
					</Tooltip.Root>
				{/each}
			</div>
		</div>
	{/each}
</div>
