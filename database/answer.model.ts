import { model, models, Schema, Types } from "mongoose";

interface IAnswer {
    author: Types.ObjectId;
    question: Types.ObjectId;
    content: string;
    upvotes?: number;
    downvotes?: number;
}

const answerSchema = new Schema<IAnswer>(
    {
        author: { type: Schema.ObjectId, ref: "User", required: true },
        question: { type: Schema.ObjectId, ref: "Question", required: true },
        content: { type: String, requried: true },
        upvotes: { type: Number, default: 0 },
        downvotes: { type: Number, default: 0 },
    },
    { timestamps: true },
);

const Answer = models?.answer ?? model<IAnswer>("Answer", answerSchema);

export default Answer;