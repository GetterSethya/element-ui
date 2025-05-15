<script lang="ts">
    import { LoaderIcon } from "@lucide/svelte";
    import { spinnerVariants, type SpinnerProps } from ".";
    import { cn } from "@lib/shared/utils/classes";
    import { type ClassNameValue } from "tailwind-merge";
    import { IconSize } from "@lib/shared/utils/semantic";

    let {
        size = "md",
        animation = "spin",
        color,
        class: className,
        ...rest
    }: SpinnerProps = $props();
</script>

<LoaderIcon
    size={IconSize.fromSemantic(size)}
    class={cn(
        spinnerVariants({
            animation,
            color,
            className: className as ClassNameValue,
        }),
    )}
    {...rest}
/>
