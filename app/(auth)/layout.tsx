import SocialAuthForm from "@/components/forms/SocialAuthForm";
import Image from "next/image";
import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <main className="grid min-h-screen place-content-center bg-auth-light bg-cover dark:bg-auth-dark">
            <section className="border border-light-800 bg-light-800 px-8 py-10 shadow-light-300 dark:border-dark-300 dark:bg-dark-200">
                <div className="grid grid-cols-[1fr_auto] items-center gap-2.5">
                    <h1 className="text-2xl font-bold text-black dark:text-white">
                        Join DevFlow
                    </h1>
                    <Image
                        src="/images/site-logo.svg"
                        width={48}
                        height={48}
                        alt="DevFlow logo"
                        className="row-span-2"
                    />
                    <p className="text-dark-500 dark:text-light-400">
                        To get your answer questioned
                    </p>
                </div>

                {children}
                <SocialAuthForm />
            </section>
        </main>
    );
};
export default AuthLayout;
