<script lang="ts">
    import * as Card from "@ui/card/";
    import FormExample from "./form-example.svelte";
</script>

<div class="flex px-20 flex-col gap-10">
    <div class="flex flex-col gap-2.5">
        <span>Surface</span>
        <div class="flex flex-col gap-2.5">
            <div class="grid grid-cols-3 gap-2.5">
                {@render card({ variant: "surface", border: "none" })}
                {@render card({ variant: "surface", border: "outside" })}
                {@render card({ variant: "surface", border: "full" })}

                {@render card({
                    variant: "surface",
                    border: "outside",
                    radius: "none",
                })}
                {@render card({
                    variant: "surface",
                    border: "outside",
                    radius: "sm",
                })}
                {@render card({
                    variant: "surface",
                    border: "outside",
                    radius: "md",
                })}
                {@render card({
                    variant: "surface",
                    border: "outside",
                    radius: "lg",
                })}
                {@render card({
                    variant: "surface",
                    border: "outside",
                    radius: "xl",
                })}
                {@render card({
                    variant: "surface",
                    border: "outside",
                    radius: "xxl",
                })}
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2.5">
        <span>Primary</span>
        <div class="flex flex-col gap-2.5">
            <div class="grid grid-cols-3 gap-2.5">
                {@render card({ variant: "primary", border: "none" })}
                {@render card({ variant: "primary", border: "outside" })}
                {@render card({ variant: "primary", border: "full" })}

                {@render card({
                    variant: "primary",
                    border: "outside",
                    radius: "none",
                })}
                {@render card({
                    variant: "primary",
                    border: "outside",
                    radius: "sm",
                })}
                {@render card({
                    variant: "primary",
                    border: "outside",
                    radius: "md",
                })}
                {@render card({
                    variant: "primary",
                    border: "outside",
                    radius: "lg",
                })}
                {@render card({
                    variant: "primary",
                    border: "outside",
                    radius: "xl",
                })}
                {@render card({
                    variant: "primary",
                    border: "outside",
                    radius: "xxl",
                })}
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-2.5">
        <span>Secondary</span>
        <div class="flex flex-col gap-2.5">
            <div class="grid grid-cols-3 gap-2.5">
                {@render card({ variant: "secondary", border: "none" })}
                {@render card({ variant: "secondary" })}
                {@render card({ variant: "secondary", border: "full" })}

                {@render card({
                    variant: "secondary",
                    border: "outside",
                    radius: "none",
                })}
                {@render card({
                    variant: "secondary",
                    border: "outside",
                    radius: "sm",
                })}
                {@render card({
                    variant: "secondary",
                    border: "outside",
                    radius: "md",
                })}
                {@render card({
                    variant: "secondary",
                    border: "outside",
                    radius: "lg",
                })}
                {@render card({
                    variant: "secondary",
                    border: "outside",
                    radius: "xl",
                })}
                {@render card({
                    variant: "secondary",
                    border: "outside",
                    radius: "xxl",
                })}
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-2.5">
        <span>Tertiary</span>
        <div class="flex flex-col gap-2.5">
            <div class="grid grid-cols-3 gap-2.5">
                {@render card({ variant: "tertiary", border: "none" })}
                {@render card({ variant: "tertiary" })}
                {@render card({ variant: "tertiary", border: "full" })}

                {@render card({
                    variant: "tertiary",
                    border: "outside",
                    radius: "none",
                })}
                {@render card({
                    variant: "tertiary",
                    border: "outside",
                    radius: "sm",
                })}
                {@render card({
                    variant: "tertiary",
                    border: "outside",
                    radius: "md",
                })}
                {@render card({
                    variant: "tertiary",
                    border: "outside",
                    radius: "lg",
                })}
                {@render card({
                    variant: "tertiary",
                    border: "outside",
                    radius: "xl",
                })}
                {@render card({
                    variant: "tertiary",
                    border: "outside",
                    radius: "xxl",
                })}
            </div>
        </div>
    </div>

    {#snippet card(args: Card.RootProps)}
        <FormExample {...args} />
    {/snippet}
</div>
