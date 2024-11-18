import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import TagCard from "../cards/TagCard";

const hotQuestions = [
    { _id: "1", title: "How to create a custom hook in React?" },
    { _id: "2", title: "How to use React Query?" },
    { _id: "3", title: "How to use Redux?" },
    { _id: "4", title: "How to use React Router?" },
    { _id: "5", title: "How to use React Context?" },
];

const popularTags = [
    { _id: "1", name: "react", questions: 100 },
    { _id: "2", name: "javascript", questions: 200 },
    { _id: "3", name: "typescript", questions: 150 },
    { _id: "4", name: "nextjs", questions: 50 },
    { _id: "5", name: "react-query", questions: 75 },
];

const RightSidebar = () => {
    return (
        <section className="sticky bottom-0 right-0 top-0 hidden h-screen w-[330px] space-y-16 overflow-y-auto px-6 pt-36 dark:bg-dark-200 xl:block">
            <div className="space-y-6">
                <h2 className="h3-bold">Hot Questions</h2>
                <ul className="space-y-8">
                    {hotQuestions.map((question) => (
                        <li key={question._id}>
                            <Link
                                href={ROUTES.PROFILE(question._id)}
                                className="grid grid-cols-[1fr_auto] items-center gap-2.5"
                            >
                                <span className="text-sm font-medium text-dark-500 dark:text-light-700">
                                    {question.title}
                                </span>
                                <Image
                                    src="/icons/chevron-right.svg"
                                    alt="Chevon right icon"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="space-y-6">
                <h2 className="h3-bold">Hot Questions</h2>
                <div className="space-y-4">
                    {popularTags.map((tag) => (
                        <TagCard
                            key={tag._id}
                            _id={tag._id}
                            count={tag.questions}
                            iconUrl={tag.name}
                            topic={tag.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RightSidebar;