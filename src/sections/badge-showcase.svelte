<script lang="ts">
    import Badge from "@/lib/components/ui/badge/badge.svelte";
</script>

<div class="flex px-20 flex-col gap-10 w-1/2">
    <div class="flex flex-col gap-2.5">
        <span>Indicator</span>
        <div class="flex flex-col gap-2.5">
            <Badge size="indicator" />
            <Badge color="primary" size="indicator" />
            <Badge color="secondary" size="indicator" />
            <Badge color="tertiary" size="indicator" />
        </div>

        <span>sm</span>
        <div class="flex flex-col gap-2.5">
            <Badge size="sm">1</Badge>
            <Badge size="sm">999+</Badge>

            <Badge color="primary" size="sm">999+</Badge>
            <Badge color="secondary" size="sm">999+</Badge>
            <Badge color="tertiary" size="sm">999+</Badge>
        </div>

        <span>md</span>
        <div class="flex flex-col gap-2.5">
            <Badge size="md">1</Badge>
            <Badge size="md">999+</Badge>

            <Badge color="primary" size="md">999+</Badge>
            <Badge color="secondary" size="md">999+</Badge>
            <Badge color="tertiary" size="md">999+</Badge>
        </div>

        <span>lg</span>
        <div class="flex flex-col gap-2.5">
            <Badge size="lg">1</Badge>
            <Badge size="lg">999+</Badge>

            <Badge color="primary" size="lg">999+</Badge>
            <Badge color="secondary" size="lg">999+</Badge>
            <Badge color="tertiary" size="lg">999+</Badge>
        </div>
    </div>
</div>
