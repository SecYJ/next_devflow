"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Image
                    src="/icons/hamburger.svg"
                    alt="Navigation Menu Button"
                    width={24}
                    height={24}
                />
            </SheetTrigger>
            <SheetContent
                side="left"
                className="grid grid-rows-[1fr_auto] bg-white px-5 py-16 pb-9 dark:bg-dark-200"
            >
                <SheetTitle className="hidden">Navigation</SheetTitle>
                <NavLinks isMobileNav />

                <div className="grid grid-rows-2 gap-2.5 *:text-center">
                    <SheetClose asChild>
                        <Link
                            href={ROUTES.SIGN_IN}
                            className="primary-text-gradient w-full rounded-lg py-3 text-sm font-semibold dark:bg-dark-400"
                        >
                            Login
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link
                            href={ROUTES.SIGN_UP}
                            className="w-full rounded-lg bg-light-700 py-3 text-sm font-semibold text-dark-400 dark:bg-dark-300 dark:text-white"
                        >
                            Signup
                        </Link>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavigation;
