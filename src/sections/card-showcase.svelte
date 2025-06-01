<script lang="ts">
    import * as Card from "@ui/card/";
    import Button from "@/lib/components/ui/button/button.svelte";
    import Label from "@/lib/components/ui/label/label.svelte";
    import { Input, InputGroup } from "@/lib/components/ui/input";
    import { EyeOffIcon, LockIcon, MailIcon, UserIcon } from "@lucide/svelte";
    import { ICON_SIZE } from "@/lib/shared/constants";
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
        {@const uuid = crypto.randomUUID()}
        <Card.Root {...args}>
            <Card.Header>
                <Card.Title>Create Your Account</Card.Title>
                <Card.Description>
                    Please fill the form bellow to continue
                </Card.Description>
            </Card.Header>
            <Card.Body>
                <div class="flex flex-col gap-1">
                    <Label aria-required for={`username-${uuid}`}>
                        Username
                    </Label>
                    <InputGroup
                        startContent={{
                            component: UserIcon,
                            props: { size: ICON_SIZE, class: "text-outline" },
                        }}
                        radius={args.radius}
                    >
                        <Input
                            id={`username-${uuid}`}
                            name="username"
                            type="text"
                            placeholder="Input your username"
                            variant="borderless"
                        />
                    </InputGroup>
                </div>
                <div class="flex flex-col gap-1">
                    <Label aria-required for={`email-${uuid}`}>Email</Label>
                    <InputGroup
                        startContent={{
                            component: MailIcon,
                            props: { size: ICON_SIZE, class: "text-outline" },
                        }}
                        radius={args.radius}
                    >
                        <Input
                            id={`email-${uuid}`}
                            name="email"
                            placeholder="Input your email"
                            type="email"
                            variant="borderless"
                        />
                    </InputGroup>
                </div>
                <div class="flex flex-col gap-1">
                    <Label aria-required for={`password-${uuid}`}
                        >Password</Label
                    >
                    <InputGroup
                        startContent={{
                            component: LockIcon,
                            props: { size: ICON_SIZE, class: "text-outline" },
                        }}
                        endContent={{
                            component: EyeOffIcon,
                            props: { size: ICON_SIZE, class: "text-outline" },
                        }}
                        radius={args.radius}
                    >
                        <Input
                            id={`password-${uuid}`}
                            name="password"
                            type="password"
                            placeholder="********"
                            variant="borderless"
                        />
                    </InputGroup>
                </div>
                <div class="flex flex-col gap-1">
                    <Label aria-required for={`passwordConfirm-${uuid}`}
                        >Confirm Password</Label
                    >
                    <InputGroup
                        startContent={{
                            component: LockIcon,
                            props: { size: ICON_SIZE, class: "text-outline" },
                        }}
                        endContent={{
                            component: EyeOffIcon,
                            props: { size: ICON_SIZE, class: "text-outline" },
                        }}
                        radius={args.radius}
                    >
                        <Input
                            id={`passwordConfirm-${uuid}`}
                            name="passwordConfirm"
                            type="password"
                            placeholder="********"
                            variant="borderless"
                        />
                    </InputGroup>
                </div>
            </Card.Body>
            <Card.Footer>
                <Button
                    class="w-full"
                    color={args.variant === "surface"
                        ? "primary"
                        : args.variant}
                    radius={args.radius}
                >
                    Continue
                </Button>
            </Card.Footer>
        </Card.Root>
    {/snippet}
</div>
