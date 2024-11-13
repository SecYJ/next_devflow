"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import { ROUTES } from "@/constants/routes";

const buttonClass =
    "flex items-center gap-2.5 rounded-lg bg-white px-9 py-3.5 text-sm font-medium text-dark-200 dark:bg-dark-400 dark:text-light-800";

const SocialAuthForm = () => {
    const { toast } = useToast();

    const handleSignIn = async (provider: "github" | "google") => {
        try {
            await signIn(provider, {
                redirect: false,
                redirectTo: ROUTES.HOME,
            });
        } catch (error) {
            toast({
                variant: "destructive",
                description:
                    error instanceof Error
                        ? error.message
                        : "An error occurred during sign-in",
            });
        }
    };

    return (
        <div className="mt-10 grid grid-cols-2 gap-2.5">
            <Button
                type="button"
                className={buttonClass}
                onClick={() => handleSignIn("github")}
            >
                <Image
                    src="/icons/github.svg"
                    width={20}
                    height={20}
                    alt="Github Logo"
                />
                <span>Login with GitHub</span>
            </Button>
            <Button
                type="button"
                className={buttonClass}
                onClick={() => handleSignIn("google")}
            >
                <Image
                    src="/icons/google.svg"
                    width={20}
                    height={20}
                    alt="Google Logo"
                />
                <span>Login with Google</span>
            </Button>
        </div>
    );
};

export default SocialAuthForm;
