"use client";

import { ROUTES } from "@/constants/routes";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import NavLinks from "./NavLinks";

const DesktopNavigation = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleLogout = async () => {
        await signOut({ redirect: false });

        router.push(ROUTES.SIGN_IN);
    };

    return (
        <aside className="shadow-light100_dark100 sticky bottom-0 left-0 top-0 grid h-screen grid-rows-[1fr_auto] gap-[72px] overflow-y-auto border-r border-[#C8CBD954] bg-white px-6 py-12 pt-36 dark:bg-dark-200">
            <NavLinks />

            {session ? (
                <Button
                    className="grid size-14 place-items-center gap-4 rounded-lg bg-light-700 py-3 text-sm font-semibold text-dark-400 dark:bg-dark-300 dark:text-white lg:size-auto"
                    onClick={() => handleLogout()}
                >
                    <Image
                        src="/icons/au.svg"
                        alt="Logout button"
                        width={24}
                        height={24}
                        className="lg:hidden"
                    />
                    <span className="hidden lg:block">Logout</span>
                </Button>
            ) : (
                <div className="space-y-4 *:grid *:size-14 *:place-items-center *:rounded-lg lg:*:size-auto lg:*:py-3">
                    <Link
                        href={ROUTES.SIGN_IN}
                        className="bg-light-800 dark:bg-dark-400"
                    >
                        <Image
                            src="/icons/account.svg"
                            alt="Sign in button"
                            width={24}
                            height={24}
                            className="invert dark:invert-0 lg:hidden"
                        />
                        <span className="primary-text-gradient hidden lg:block">
                            Login
                        </span>
                    </Link>
                    <Link
                        href={ROUTES.SIGN_UP}
                        className="bg-light-700 dark:bg-dark-300"
                    >
                        <Image
                            src="/icons/sign-up.svg"
                            alt="Sign up button"
                            width={24}
                            height={24}
                            className="invert dark:invert-0 lg:hidden"
                        />
                        <span className="hidden lg:block">Sign up</span>
                    </Link>
                </div>
            )}
        </aside>
    );
};

export default DesktopNavigation;
