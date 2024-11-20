"use client";

import { formUrlQuery, removeKeysFromUrl } from "@/lib/url";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const filters = [
    { label: "React", value: "react" },
    { label: "JavaScript", value: "javascript" },
] as const;

const schema = z.union([z.literal("react"), z.literal("javascript")]);

const HomeFilter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [active, setActive] = useState<z.infer<typeof schema> | null>(() => {
        const result = schema.safeParse(searchParams.get("filter"));
        return result.success ? result.data : null;
    });

    return (
        <div className="hidden flex-wrap gap-3 sm:flex">
            {filters.map((filter) => (
                <Button
                    key={filter.value}
                    className={cn(
                        "rounded-lg bg-light-800 px-6 py-3 text-light-500 shadow-none hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300",
                        filter.value === active &&
                            "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400",
                    )}
                    onClick={() => {
                        let url = "";

                        const isSameActive = active === filter.value;

                        if (isSameActive) {
                            url = removeKeysFromUrl({
                                params: searchParams,
                                keys: ["filter"],
                            });
                        } else {
                            url = formUrlQuery({
                                params: searchParams,
                                key: "filter",
                                value: filter.value,
                            });
                        }

                        setActive(isSameActive ? null : filter.value);
                        router.push(url);
                    }}
                >
                    {filter.label}
                </Button>
            ))}
        </div>
    );
};

export default HomeFilter;
