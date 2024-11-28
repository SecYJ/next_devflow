import { model, models, Schema, Types } from "mongoose";

interface IAccount {
    userId: Types.ObjectId;
    name: string;
    profileImage?: string;
    password?: string;
    provider: string;
    providerAccountId: string;
}

const accountSchema = new Schema<IAccount>(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        name: { type: String, required: true },
        profileImage: { type: String },
        password: { type: String },
        provider: {
            type: String,
            required: true,
        },
        providerAccountId: { type: String, required: true },
    },
    { timestamps: true },
);

const Account = models?.account ?? model("Account", accountSchema);

export default Account;
