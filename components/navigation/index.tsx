"use client";

import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";

const Navbar = () => {
    return (
        <nav className="bg-light-900 fixed left-0 right-0 grid grid-cols-[1fr_auto_auto_auto] p-6 px-3 shadow-light-300 dark:bg-dark-200">
            <Link href="/" className="flex gap-1">
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
        </nav>
    );
};

export default Navbar;
