<script lang="ts">
	import { ICON_SIZE } from "@/lib/shared/constants";
	import { InfoIcon } from "@lucide/svelte";
	import * as Alert from "@ui/alert";
	import type { VariantProps } from "@ui/alert/variant";

	type Radius = VariantProps["radius"];
	type Variant = VariantProps["variant"];

	const variants: { title: string; variant: Variant }[] = [
		{ title: "Surface", variant: "surface" },
		{ title: "Primary", variant: "primary" },
		{ title: "Secondary", variant: "secondary" },
		{ title: "Tertiary", variant: "tertiary" },
		{ title: "Error", variant: "error" }
	];

	const radiuses: Radius[] = ["none", "xs", "sm", "md", "lg", "xl", "xxl"];
</script>

<div class="flex w-1/2 flex-col gap-10 px-20">
	{#each variants as { title, variant }}
		<div class="flex flex-col gap-2.5">
			<span>{title}</span>
			<div class="flex flex-col gap-2.5">
				<Alert.Root {variant}>
					<Alert.Icon>
						<InfoIcon size={ICON_SIZE} />
					</Alert.Icon>
					<Alert.Content>
						<Alert.Title>Browser update is available</Alert.Title>
						<Alert.Description
							>For the best experience, please update to the latest version.</Alert.Description
						>
					</Alert.Content>
				</Alert.Root>
				<Alert.Root {variant} border="outside">
					<Alert.Icon>
						<InfoIcon size={ICON_SIZE} />
					</Alert.Icon>
					<Alert.Content>
						<Alert.Title>Browser update is available</Alert.Title>
						<Alert.Description
							>For the best experience, please update to the latest version.</Alert.Description
						>
					</Alert.Content>
				</Alert.Root>
				{#each radiuses as radius}
					<Alert.Root {variant} border="outside" {radius}>
						<Alert.Icon>
							<InfoIcon size={ICON_SIZE} />
						</Alert.Icon>
						<Alert.Content>
							<Alert.Title>Browser update is available</Alert.Title>
							<Alert.Description
								>For the best experience, please update to the latest version.</Alert.Description
							>
						</Alert.Content>
					</Alert.Root>
				{/each}
			</div>
		</div>
	{/each}
</div>