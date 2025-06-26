<script lang="ts">
	import * as Card from "@ui/card/";
	import FormExample from "./form-example.svelte";
	import type { RootProps } from "@ui/card/";

	type Variant = RootProps["variant"];
	type Border = RootProps["border"];
	type Radius = RootProps["radius"];

	const variants: { title: string; variant: Variant }[] = [
		{ title: "Surface", variant: "surface" },
		{ title: "Primary", variant: "primary" },
		{ title: "Secondary", variant: "secondary" },
		{ title: "Tertiary", variant: "tertiary" }
	];

	const borders: Border[] = ["none", "outside", "full"];
	const radiuses: Radius[] = ["none", "sm", "md", "lg", "xl", "xxl"];
</script>

<div class="flex flex-col gap-10 px-20">
	{#each variants as { title, variant }}
		<div class="flex flex-col gap-2.5">
			<span>{title}</span>
			<div class="grid grid-cols-3 gap-2.5">
				{#each borders as border}
					{@render card({ variant, border })}
				{/each}

				{#each radiuses as radius}
					{@render card({ variant, border: "outside", radius })}
				{/each}
			</div>
		</div>
	{/each}
</div>

{#snippet card(args: Card.RootProps)}
	<FormExample {...args} />
{/snippet}