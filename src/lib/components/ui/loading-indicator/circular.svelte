<script lang="ts">
    import { LoaderCircleIcon } from "@lucide/svelte";
    import { spinnerVariants, type SpinnerProps } from ".";
    import { cn } from "../../../shared/utils/classes";
    import { type ClassNameValue } from "tailwind-merge";
    import { IconSize } from "../../../shared/utils/icon";

    let {
        size = "md",
        animation = "spin",
        color,
        class: className,
        ...rest
    }: SpinnerProps = $props();
</script>

<LoaderCircleIcon
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
