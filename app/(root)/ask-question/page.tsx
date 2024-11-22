import QuestionForm from "@/components/forms/QuestionForm";

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
