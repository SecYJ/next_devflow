import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

const questions = [
    {
        _id: "1",
        title: "How to learn React?",
        description: "I want to learn React, can anyone help me?",
        tags: [
            { _id: "1", name: "React" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 100,
        createdAt: new Date(),
    },
    {
        _id: "2",
        title: "How to learn JavaScript?",
        description: "I want to learn JavaScript, can anyone help me?",
        tags: [
            { _id: "1", name: "JavaScript" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 100,
        createdAt: new Date(),
    },
];

interface Props {
    searchParams: Promise<Record<string, string | undefined>>;
}

const Home = async ({ searchParams }: Props) => {
    const { query = "", filter = "" } = await searchParams;

    const filteredQueryQuestions = questions.filter((question) => {
        const matchQuery = question.title
            .toLowerCase()
            .includes(query.toLowerCase());
        const matchFilter = filter
            ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
            : true;
        return matchQuery && matchFilter;
    });

    return (
        <>
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h1 className="h1-bold">All Questions</h1>
                    <Button
                        asChild
                        className="primary-gradient rounded-lg px-7 py-3 !text-white"
                    >
                        <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
                    </Button>
                </div>
                <div>
                    <LocalSearch
                        icon="/icons/search.svg"
                        placeholder="Search for Questions Here..."
                        url="/"
                    />
                </div>
                <div>
                    <HomeFilter />
                </div>
            </section>
            <ul className="space-y-6">
                {filteredQueryQuestions.map((question) => (
                    <li key={question._id}>{question.title}</li>
                ))}
            </ul>
        </>
    );
};

export default Home;
