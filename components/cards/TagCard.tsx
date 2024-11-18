import { cn, getDeviconClassName } from "@/lib/utils";
import Link from "next/link";
import { badgeVariants } from "../ui/badge";
import Image from "next/image";
import { ROUTES } from "@/constants/routes";

interface Props {
    _id: string;
    iconUrl: string;
    count: number;
    topic: string;
}

const TagCard = ({ _id, iconUrl, count, topic }: Props) => {
    const icon = getDeviconClassName(iconUrl);

    return (
        <div className="flex items-center justify-between">
            <Link
                className={cn(
                    badgeVariants({ variant: "outline" }),
                    "flex items-center gap-1 bg-light-800 px-4 py-2 font-medium dark:bg-dark-300",
                )}
                href={ROUTES.TAGS(_id)}
            >
                <i className={icon} />
                <span>{topic}</span>
            </Link>
            <p className="text-sm font-medium text-dark-500 dark:text-light-700">
                {count}
            </p>
        </div>
    );
};

export default TagCard;
