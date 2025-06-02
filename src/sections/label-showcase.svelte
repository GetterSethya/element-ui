<script lang="ts">
    import Input from "@/lib/components/ui/input/input.svelte";
    import Label from "@/lib/components/ui/label/label.svelte";
</script>

<div class="flex px-20 flex-col gap-10 w-1/2">
    <div class="flex flex-col gap-2.5">
        <span>Default</span>
        <div class="flex flex-col gap-2.5">
            <Label for={"default-input"}>Username</Label>
            <Input id={"default-input"} placeholder="Input your username" />
        </div>

        <span>Invalid</span>
        <div class="flex flex-col gap-2.5">
            <Label for={"invalid-input"} invalid>Username</Label>
            <Input
                id={"invalid-input"}
                invalid
                placeholder="Input your username"
            />
        </div>
    </div>
</div>
