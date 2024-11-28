import { model, models, Schema, Types } from "mongoose";

interface ITag {
    question: number;
    name: string;
}

const tagSchema = new Schema<ITag>(
    {
        question: { type: Number, default: 0 },
        name: { type: String, required: true },
    },
    { timestamps: true },
);

const Tag = models?.tag ?? model<ITag>("Tag", tagSchema);

export default Tag;
