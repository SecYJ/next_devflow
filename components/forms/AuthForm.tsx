"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, Path, useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: DefaultValues<T>;
    formType: "sign-in" | "sign-up";
    onSubmit: (data: T) => void;
}

const AuthForm = <T extends FieldValues>({
    schema,
    defaultValues,
    formType,
    onSubmit,
}: Props<T>) => {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const isSignIn = formType === "sign-in";
    const isSignUp = formType === "sign-up";

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-10 space-y-6"
            >
                {Object.keys(defaultValues).map((key) => (
                    <FormField
                        key={key}
                        name={key as Path<T>}
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="paragraph-medium capitalize text-dark-400 dark:text-light-700">
                                    {key === "email" ? "email address" : key}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...(key === "email" && {
                                            placeholder: "Email Address",
                                            type: "email",
                                        })}
                                        {...(key === "password" && {
                                            type: "password",
                                            placeholder: "Password",
                                        })}
                                        {...(key === "username" && {
                                            placeholder: "Username",
                                        })}
                                        {...field}
                                        className="bg-light-900 paragraph-regular min-h-12 rounded-sm border-light-700 dark:border-dark-400 dark:bg-dark-300"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}

                <Button
                    type="submit"
                    className="primary-gradient paragraph-medium rounded-2 !text-light-900 min-h-12 w-full px-4 py-3 font-inter"
                >
                    {isSignIn && form.formState.isSubmitting
                        ? "Signing in..."
                        : isSignUp && form.formState.isSubmitting
                          ? "Signing up..."
                          : isSignIn
                            ? "Sign In"
                            : "Sign Up"}
                </Button>

                {isSignIn && (
                    <p className="text-center font-semibold dark:text-light-700">
                        Don't have an account?{" "}
                        <Link
                            href={ROUTES.SIGN_UP}
                            className="primary-text-gradient bg-clip-text font-normal text-transparent"
                        >
                            Sign up
                        </Link>
                    </p>
                )}
                {isSignUp && (
                    <p className="text-center font-semibold dark:text-light-700">
                        Already have an account?{" "}
                        <Link
                            href={ROUTES.SIGN_IN}
                            className="primary-text-gradient bg-clip-text font-normal text-transparent"
                        >
                            Sign in
                        </Link>
                    </p>
                )}
            </form>
        </Form>
    );
};

export default AuthForm;
