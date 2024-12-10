import QuestionForm from "@/components/forms/QuestionForm";
import { ValidationError } from "@/lib/http-errors";

// const testString = {
//     username: ["Invalid username", "Username already exists", "testing123"],
//     email: ["Invalid email", "Email already exists", "testing123"],
// };

const AskQuestionPage = () => {
    return (
        <>
            <h1 className="mb-9 text-3xl font-bold text-black dark:text-white">
                Ask a public question
            </h1>

            <QuestionForm />
        </>
    );
};

export default AskQuestionPage;
