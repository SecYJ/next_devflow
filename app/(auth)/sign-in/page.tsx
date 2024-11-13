"use client";

import AuthForm from "@/components/forms/AuthForm";
import { signInSchema } from "@/lib/validations";
import { z } from "zod";

const SignInPage = () => {
    const defaultValues: z.infer<typeof signInSchema> = {
        email: "",
        password: "",
    };

    return (
        <AuthForm
            formType="sign-in"
            schema={signInSchema}
            defaultValues={defaultValues}
            onSubmit={(data) => {
                console.log(data);
            }}
        />
    );
};

export default SignInPage;
