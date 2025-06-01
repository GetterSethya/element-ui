<script
    lang="ts"
    generics="StartContent extends Component, EndContent extends Component"
>
    import { type Component } from "svelte";
    import { groupVariants, type GroupProps } from ".";
    import { cn } from "@/lib/shared/utils/classes";
    import ContentRenderer from "@/lib/shared/utils/content-renderer.svelte";

    let {
        startContent,
        endContent,
        class: className,
        invalid,
        radius,
        children,
        ...rest
    }: GroupProps<StartContent, EndContent> = $props();
</script>

<div
    class={cn(
        groupVariants({
            radius: radius,
        }),
        invalid && "border-error text-error",
    )}
    {...rest}
>
    <ContentRenderer content={startContent} />
    {@render children?.()}
    <ContentRenderer content={endContent} />
</div>
