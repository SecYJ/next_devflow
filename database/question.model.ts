import { model, models, Schema, Types } from "mongoose";

interface IQuestion {
    author: Types.ObjectId;
    title: string;
    content: string;
    upvotes: number;
    downvotes: number;
    answers: number;
    tags: Types.ObjectId[];
    views: number;
}

const questionSchema = new Schema<IQuestion>(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "Account",
            required: true,
        },
        title: { type: String, required: true },
        content: { type: String, required: true },
        upvotes: { type: Number, default: 0 },
        downvotes: { type: Number, default: 0 },
        answers: { type: Number, default: 0 },
        tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: true }],
        views: { type: Number, default: 0 },
    },
    { timestamps: true },
);

const Question = models?.question ?? model("Question", questionSchema);

export default Question;
