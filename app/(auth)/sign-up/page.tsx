"use client";

import AuthForm from "@/components/forms/AuthForm";
import { signUpSchema } from "@/lib/validations";
import { z } from "zod";

const SignupPage = () => {
    const defaultValues: z.infer<typeof signUpSchema> = {
        username: "",
        email: "",
        password: "",
    };

    return (
        <AuthForm
            formType="sign-up"
            schema={signUpSchema}
            defaultValues={defaultValues}
            onSubmit={(data) => {
                console.log(data);
            }}
        />
    );
};

export default SignupPage;
