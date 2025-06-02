<script lang="ts">
    import { InputGroup } from "@/lib/components/ui/input";
    import Input from "@/lib/components/ui/input/input.svelte";
    import { ICON_SIZE } from "@/lib/shared/constants";
    import { CheckIcon, SearchIcon, UserIcon } from "@lucide/svelte";
</script>

<div class="flex px-20 flex-col gap-10 w-1/2">
    <div class="flex flex-col gap-2.5">
        <span>Default</span>
        <div class="flex flex-col gap-2.5">
            <Input placeholder="Default input" />
        </div>

        <span>Invalid</span>
        <div class="flex flex-col gap-2.5">
            <Input invalid placeholder="Invalid input" />
        </div>

        <span>Borderless</span>
        <div class="flex flex-col gap-2.5">
            <Input variant="borderless" value="Iam borderless input🥶" />
        </div>
    </div>
    <div class="flex flex-col gap-2.5">
        <span>Start content</span>
        <div class="flex flex-col gap-2.5">
            <InputGroup
                startContent={{
                    component: UserIcon,
                    props: { size: ICON_SIZE, class: "text-outline/70" },
                }}
            >
                <Input variant="borderless" placeholder="Username" />
            </InputGroup>
        </div>

        <span>End content</span>
        <div class="flex flex-col gap-2.5">
            <InputGroup
                endContent={{
                    component: SearchIcon,
                    props: { size: ICON_SIZE, class: "text-outline/70" },
                }}
            >
                <Input variant="borderless" placeholder="Search..." />
            </InputGroup>
        </div>

        <span>Start & end content</span>
        <div class="flex flex-col gap-2.5">
            <InputGroup
                startContent={{
                    component: SearchIcon,
                    props: { size: ICON_SIZE, class: "text-outline/70" },
                }}
                endContent={{
                    component: CheckIcon,
                    props: { size: ICON_SIZE, class: "text-outline/70" },
                }}
            >
                <Input variant="borderless" placeholder="Find user" />
            </InputGroup>
        </div>
    </div>
</div>
