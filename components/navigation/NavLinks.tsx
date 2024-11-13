"use client";

import { NAVIGATIONS } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "../ui/sheet";

interface Props {
    isMobileNav?: true;
}

const NavLinks = ({ isMobileNav }: Props) => {
    const pathname = usePathname();

    const userId = 1;

    return (
        <ul className="space-y-3.5">
            {NAVIGATIONS.map((item) => {
                const isActive = pathname === item.href;

                let href = item.href;

                if (item.href === "/profile") {
                    href = `/profile/${userId}`;

                    if (!userId) return null;
                }
                // TODO: should close the menu if it's mobile

                const linkComponent = (
                    <Link
                        className={cn(
                            "flex items-center gap-4 rounded-lg p-4 font-semibold text-dark-300 dark:text-white",
                            isActive && "primary-gradient text-white",
                        )}
                        href={href}
                    >
                        <Image
                            className={cn(
                                "invert dark:invert-0",
                                isActive && "invert-0",
                            )}
                            src={item.icon}
                            alt={item.label}
                            width={24}
                            height={24}
                        />
                        <span>{item.label}</span>
                    </Link>
                );
                return (
                    <li key={item.href}>
                        {isMobileNav ? (
                            <SheetClose asChild>{linkComponent}</SheetClose>
                        ) : (
                            linkComponent
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default NavLinks;
