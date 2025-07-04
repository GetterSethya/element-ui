<script
    lang="ts"
    generics="StartContent extends  Component,EndContent extends Component, LoadingComponent extends Component"
>
    import { buttonVariants, type ButtonProps } from ".";
    import { Button as ButtonPrimitive } from "bits-ui";
    import { cn } from "@lib/shared/utils/classes";
    import { type ClassNameValue } from "tailwind-merge";
    import { type Component } from "svelte";
    import ContentRenderer from "@lib/shared/utils/content-renderer.svelte";
    import LoadingIndicator from "@ui/loading-indicator/";

    let {
        children,
        class: className,
        ref = $bindable(null),
        variant,
        size,
        radius,
        color,
        isLoading,
        loadingComponent,
        loadingSide = "start",
        startContent,
        endContent,
        ...rest
    }: ButtonProps<StartContent, EndContent, LoadingComponent> = $props();
</script>

<ButtonPrimitive.Root
    bind:ref
    disabled={isLoading || rest.disabled}
    class={cn(
        buttonVariants({
            variant,
            size,
            radius,
            color,
            className: className as ClassNameValue,
        }),
    )}
    {...rest}
>
    <ContentRenderer content={startContent} />
    {#if isLoading && loadingSide === "start"}
        {@const LoadingComponent = loadingComponent ?? {
            component: LoadingIndicator.Circular,
        }}
        <ContentRenderer content={LoadingComponent} />
    {/if}
    {@render children?.({
        variant,
        size,
        radius,
        color,
    })}
    {#if isLoading && loadingSide === "end"}
        {@const LoadingComponent = loadingComponent ?? {
            component: LoadingIndicator.Circular,
        }}
        <ContentRenderer content={LoadingComponent} />
    {/if}
    <ContentRenderer content={endContent} />
</ButtonPrimitive.Root>
