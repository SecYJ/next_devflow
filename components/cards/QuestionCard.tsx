import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import TagCard from "./TagCard";
import Metric from "../Metric";
import { getTimeStamp } from "@/lib/utils";

const QuestionCard = ({ question }: { question: Question }) => {
    const { title, tags, author, upvotes, answers, views, createdAt, _id } =
        question;

    return (
        <div className="card-wrapper rounded-lg px-11 py-9">
            <Link
                href={ROUTES.QUESTIONS(_id)}
                className="text-xl font-semibold text-dark-200 dark:text-white"
            >
                {title}
            </Link>
            <ul className="mb-6 mt-3.5 flex gap-2">
                {tags.map((tag) => (
                    <li key={tag._id} className="text-primary-500">
                        <TagCard
                            _id={tag._id}
                            name={tag.name}
                            topic={tag.name}
                            key={tag._id}
                        />
                    </li>
                ))}
            </ul>
            <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2.5">
                <Metric
                    imgUrl={author.image}
                    alt={title}
                    title={getTimeStamp(createdAt)}
                    value={author.name}
                    textStyles="dark:text-light-700 text-xs text-dark-400"
                    imgStyles="rounded-full"
                />
                <Metric
                    imgUrl="/icons/like.svg"
                    alt="like"
                    value={upvotes}
                    title=" Votes"
                    textStyles="small-medium text-dark400_light800"
                />
                <Metric
                    imgUrl="/icons/message.svg"
                    alt="answers"
                    value={answers}
                    title=" Answers"
                    textStyles="small-medium text-dark400_light800"
                />
                <Metric
                    imgUrl="/icons/eye.svg"
                    alt="views"
                    value={views}
                    title=" Views"
                    textStyles="small-medium text-dark400_light800"
                />
            </div>
        </div>
    );
};

export default QuestionCard;
