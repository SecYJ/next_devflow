"use client";

import { formUrlQuery } from "@/lib/url";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import qs from "query-string";

interface Props {
    icon: string;
    placeholder: string;
    url: string;
    className?: string;
}

const LocalSearch = ({ icon, placeholder, url }: Props) => {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("query") ?? "";
    const [search, setSearch] = useState(searchQuery);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if (search) {
            timer = setTimeout(() => {
                const url = formUrlQuery({
                    params: searchParams,
                    key: "query",
                    value: search,
                });

                router.push(url, { scroll: false });
            }, 400);
        } else {
            if (pathname === url) {
                router.push(url, { scroll: false });
                console.log("work here once");
            }
        }

        return () => clearTimeout(timer);
    }, [search, searchQuery]);

    return (
        <div className="relative">
            <Image
                src={icon}
                width={24}
                height={24}
                alt="Search Logo"
                className="absolute left-4 top-4"
            />
            <Input
                className="dark:dark-gradient min-h-14 rounded-lg border-none bg-light-800 p-4 pl-14 text-light-400 dark:text-light-500"
                placeholder={placeholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default LocalSearch;
