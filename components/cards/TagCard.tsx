import { ROUTES } from "@/constants/routes";
import { cn, getDeviconClassName } from "@/lib/utils";
import Link from "next/link";
import { badgeVariants } from "../ui/badge";

interface Props {
    _id: string;
    name: string;
    count?: number;
    topic: string;
    compact?: boolean;
    question?: number;
}

const TagCard = ({ _id, name, count, topic }: Props) => {
    const icon = getDeviconClassName(name);

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
