import { model, models, Schema, Types } from "mongoose";

interface IVote {
    author: Types.ObjectId;
    type: "answer" | "question";
    voteType: "upvote" | "downvote";
    id: Types.ObjectId;
}

const voteSchema = new Schema<IVote>({
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: {
        type: String,
        enum: ["answer", "question"],
        required: true,
    },
    voteType: {
        type: String,
        enum: ["upvote", "downvote"],
        required: true,
    },
    id: { type: Schema.Types.ObjectId, ref: "Question", required: true },
});

const Vote = models.vote ?? model<IVote>("Vote", voteSchema);

export default Vote;
