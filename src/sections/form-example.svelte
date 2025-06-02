<script lang="ts">
    import * as Card from "@ui/card/";
    import * as Form from "@ui/form/";
    import { createForm } from "@tanstack/svelte-form";
    import z from "zod/v4";
    import { Label } from "@/lib/components/ui/label";
    import { Input, InputGroup } from "@/lib/components/ui/input";
    import {
        EyeIcon,
        EyeOffIcon,
        LockIcon,
        MailIcon,
        UserIcon,
    } from "@lucide/svelte";
    import { ICON_SIZE } from "@/lib/shared/constants";
    import Button from "@/lib/components/ui/button/button.svelte";

    let showPassword = $state(false);
    let showPasswordConfirm = $state(false);
    let props: Card.RootProps = $props();
    let uuid = crypto.randomUUID();

    const exampleSchema = z
        .object({
            username: z
                .string()
                .min(8, { error: "Username is too short" })
                .max(50, { error: "Username is too long" }),
            email: z.email({ error: "Email is not valid" }),
            password: z.string().min(8, { error: "Password is too short" }),
            passwordConfirm: z.string(),
        })
        .refine(
            (ctx) => {
                if (
                    ctx.password !== ctx.passwordConfirm ||
                    ctx.passwordConfirm === ""
                ) {
                    return false;
                }

                return true;
            },
            { error: "Password confirm is invalid", path: ["passwordConfirm"] },
        );

    const form = createForm(() => ({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
        },
        validators: {
            onChange: exampleSchema,
        },
        onSubmit: async (data) => {
            console.log({ data });
        },
    }));
</script>

<Card.Root {...props}>
    {#snippet children(cardProps)}
        <Card.Header>
            <Card.Title>Create Your Account</Card.Title>
            <Card.Description>
                Please fill the form bellow to continue
            </Card.Description>
        </Card.Header>
        <form
            onsubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
            id={`example-form-${uuid}`}
        >
            <Card.Body>
                <div class="flex flex-col gap-1">
                    <form.Field name={"username"}>
                        {#snippet children(field)}
                            <Label
                                invalid={field.state.meta.errors.length > 0}
                                aria-required
                                for={`${field.name}-${uuid}`}
                            >
                                Username
                            </Label>
                            <Form.Description>
                                Your account username
                            </Form.Description>
                            <InputGroup
                                invalid={field.state.meta.errors.length > 0}
                                startContent={{
                                    component: UserIcon,
                                    props: {
                                        size: ICON_SIZE,
                                        class: "text-outline",
                                    },
                                }}
                                radius={cardProps.radius}
                            >
                                <Input
                                    id={`${field.name}-${uuid}`}
                                    name={field.name}
                                    value={field.state.value}
                                    onblur={() => field.handleBlur()}
                                    oninput={(e: Event) => {
                                        const target =
                                            e.target as HTMLInputElement;
                                        field.handleChange(target.value);
                                    }}
                                    placeholder="Input your username"
                                    variant="borderless"
                                />
                            </InputGroup>
                            <Form.Message
                                errors={field.state.meta.errors.map(
                                    (e) => e?.message,
                                )}
                            />
                        {/snippet}
                    </form.Field>
                </div>
                <div class="flex flex-col gap-1">
                    <form.Field name="email">
                        {#snippet children(field)}
                            <Label
                                aria-required
                                invalid={field.state.meta.errors.length > 0}
                                for={`${field.name}-${uuid}`}
                            >
                                Email
                            </Label>
                            <Form.Description>
                                This will be use as your recovery email
                            </Form.Description>
                            <InputGroup
                                invalid={field.state.meta.errors.length > 0}
                                aria-required
                                startContent={{
                                    component: MailIcon,
                                    props: {
                                        size: ICON_SIZE,
                                        class: "text-outline",
                                    },
                                }}
                                radius={cardProps.radius}
                            >
                                <Input
                                    id={`${field.name}-${uuid}`}
                                    name={field.name}
                                    value={field.state.value}
                                    onblur={() => field.handleBlur()}
                                    oninput={(e: Event) => {
                                        const target =
                                            e.target as HTMLInputElement;
                                        field.handleChange(target.value);
                                    }}
                                    placeholder="Input your email"
                                    type="email"
                                    variant="borderless"
                                />
                            </InputGroup>
                            <Form.Message
                                errors={field.state.meta.errors.map(
                                    (e) => e?.message,
                                )}
                            />
                        {/snippet}
                    </form.Field>
                </div>
                <div class="flex flex-col gap-1">
                    <form.Field name="password">
                        {#snippet children(field)}
                            <Label
                                aria-required
                                invalid={field.state.meta.errors.length > 0}
                                for={`${field.name}-${uuid}`}
                            >
                                Password
                            </Label>
                            <Form.Description
                                >Make sure your password is secure</Form.Description
                            >
                            <InputGroup
                                invalid={field.state.meta.errors.length > 0}
                                startContent={{
                                    component: LockIcon,
                                    props: {
                                        size: ICON_SIZE,
                                        class: "text-outline",
                                    },
                                }}
                                endContent={{
                                    component: showPassword
                                        ? EyeIcon
                                        : EyeOffIcon,
                                    props: {
                                        size: ICON_SIZE,
                                        class: "text-outline",
                                        onclick: () =>
                                            (showPassword = !showPassword),
                                    },
                                }}
                                radius={cardProps.radius}
                            >
                                <Input
                                    id={`${field.name}-${uuid}`}
                                    name={field.name}
                                    value={field.state.value}
                                    onblur={() => field.handleBlur()}
                                    oninput={(e: Event) => {
                                        const target =
                                            e.target as HTMLInputElement;
                                        field.handleChange(target.value);
                                    }}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    variant="borderless"
                                />
                            </InputGroup>
                            <Form.Message
                                errors={field.state.meta.errors.map(
                                    (e) => e?.message,
                                )}
                            />
                        {/snippet}
                    </form.Field>
                </div>
                <div class="flex flex-col gap-1">
                    <form.Field name="passwordConfirm">
                        {#snippet children(field)}
                            <Label
                                aria-required
                                invalid={field.state.meta.errors.length > 0}
                                for={`${field.name}-${uuid}`}
                                >Confirm Password</Label
                            >
                            <Form.Description>
                                Confirm your password
                            </Form.Description>
                            <InputGroup
                                invalid={field.state.meta.errors.length > 0}
                                startContent={{
                                    component: LockIcon,
                                    props: {
                                        size: ICON_SIZE,
                                        class: "text-outline",
                                    },
                                }}
                                endContent={{
                                    component: showPasswordConfirm
                                        ? EyeIcon
                                        : EyeOffIcon,
                                    props: {
                                        size: ICON_SIZE,
                                        class: "text-outline",
                                        onclick: () =>
                                            (showPasswordConfirm =
                                                !showPasswordConfirm),
                                    },
                                }}
                                radius={cardProps.radius}
                            >
                                <Input
                                    id={`${field.name}-${uuid}`}
                                    name={field.name}
                                    value={field.state.value}
                                    onblur={() => field.handleBlur()}
                                    oninput={(e: Event) => {
                                        const target =
                                            e.target as HTMLInputElement;
                                        field.handleChange(target.value);
                                    }}
                                    type={showPasswordConfirm
                                        ? "text"
                                        : "password"}
                                    placeholder="********"
                                    variant="borderless"
                                />
                            </InputGroup>
                            <Form.Message
                                errors={field.state.meta.errors.map(
                                    (e) => e?.message,
                                )}
                            />
                        {/snippet}
                    </form.Field>
                </div>
            </Card.Body>
        </form>
        <Card.Footer>
            <form.Subscribe>
                {#snippet children(props)}
                    <Button
                        form={`example-form-${uuid}`}
                        disabled={!props.canSubmit}
                        isLoading={props.isSubmitting}
                        class="w-full"
                        color={cardProps.variant === "surface"
                            ? "primary"
                            : cardProps.variant}
                        radius={cardProps.radius}
                    >
                        Continue
                    </Button>
                {/snippet}
            </form.Subscribe>
        </Card.Footer>
    {/snippet}
</Card.Root>
