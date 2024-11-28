import { Document, model, models, Schema, Types } from "mongoose";

export interface IInteraction {
    user: Types.ObjectId;
    action: string;
    actinoId: Types.ObjectId;
    actionType: "question" | "answer";
}

export interface IInteractionDoc extends IInteraction, Document {}

const interactionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    action: {
        type: String,
        // enum: ["view", "upvote", "downvote"],
        required: true,
    },
    actionId: {
        type: Schema.Types.ObjectId,
        // NOTE: This could point to question, answer, or comment schma, will come back to this later
        required: true,
    },
    actionType: {
        type: String,
        enum: ["question", "answer"],
        required: true,
    },
});

const Interaction =
    models?.interaction ??
    model<IInteraction>("Interaction", interactionSchema);

export default Interaction;
