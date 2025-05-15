<script lang="ts">
    import { spinnerVariants, type SpinnerProps } from ".";
    import { cn } from "../../../shared/utils/classes";
    import { type ClassNameValue } from "tailwind-merge";
    import { IconSize } from "../../../shared/utils/icon";

    let {
        size = "md",
        animation = "none",
        color,
        class: className,
        ...rest
    }: SpinnerProps = $props();
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    width={IconSize.fromSemantic(size) * 2}
    height={IconSize.fromSemantic(size) * 2}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class={cn(
        spinnerVariants({
            className: className as ClassNameValue,
            animation,
            color,
        }),
    )}
    {...rest}
>
    <circle
        class="animate-dot_wave origin-center ease-in-out"
        cx="5"
        cy="12"
        r="1"
        style="transform-box: fill-box; animation-delay: 0ms;"
    />
    <circle
        class="animate-dot_wave origin-center ease-in-out"
        cx="12"
        cy="12"
        r="1"
        style="transform-box: fill-box; animation-delay: 300ms;"
    />
    <circle
        class="animate-dot_wave origin-center ease-in-out"
        cx="19"
        cy="12"
        r="1"
        style="transform-box: fill-box; animation-delay: 600ms;"
    />
</svg>
