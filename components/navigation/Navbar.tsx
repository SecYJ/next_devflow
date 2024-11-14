"use client";

import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import DesktopNavigation from "./DesktopNavigation";
import { ROUTES } from "@/constants/routes";

const Navbar = () => {
    const media = useMediaQuery("(min-width: 640px)");

    return (
        <nav className="bg-light-900 fixed left-0 right-0 grid grid-cols-[1fr_auto_auto] gap-2.5 border-b border-[#C8CBD954] px-5 py-4 shadow-light-300 dark:bg-dark-200 sm:grid-cols-[1fr_auto] sm:p-8">
            <Link href={ROUTES.HOME} className="flex w-max items-center gap-1">
                <Image
                    src="/images/site-logo.svg"
                    alt="DevFlow Logo"
                    width={24}
                    height={24}
                />
                <p className="hidden font-space-grotesk font-medium text-[#373129] dark:text-white md:block">
                    <span>Dev</span>
                    <span className="font-bold text-primary-500">Overflow</span>
                </p>
            </Link>

            <Theme />
            {media ? <DesktopNavigation /> : <MobileNavigation />}
        </nav>
    );
};

export default Navbar;