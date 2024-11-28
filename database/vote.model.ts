import { Document, model, models, Schema, Types } from "mongoose";

export interface IVote {
    author: Types.ObjectId;
    actionId: Types.ObjectId;
    actionType: "answer" | "question";
    voteType: "upvote" | "downvote";
}

export interface IVoteDoc extends IVote, Document {}

const voteSchema = new Schema<IVote>({
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    actionType: {
        type: String,
        enum: ["answer", "question"],
        required: true,
    },
    voteType: {
        type: String,
        enum: ["upvote", "downvote"],
        required: true,
    },
    actionId: { type: Schema.Types.ObjectId, ref: "Question", required: true },
});

const Vote = models.vote ?? model<IVote>("Vote", voteSchema);

export default Vote;
