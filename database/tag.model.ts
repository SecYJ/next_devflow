import { model, Document, models, Schema } from "mongoose";

export interface ITag {
    question: number;
    name: string;
}

export interface ITagDoc extends ITag, Document {}

const tagSchema = new Schema<ITag>(
    {
        question: { type: Number, default: 0 },
        name: { type: String, required: true },
    },
    { timestamps: true },
);

const Tag = models?.tag ?? model<ITag>("Tag", tagSchema);

export default Tag;
