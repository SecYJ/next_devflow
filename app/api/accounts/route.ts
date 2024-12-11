import Account from "@/database/account.model";
import { handleError } from "@/lib/handlers/error";
import { ForbiddenError, ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { accountSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();
        const accounts = await Account.find();

        return NextResponse.json(
            { success: true, data: accounts },
            { status: 200 },
        );
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();

        const body = await request.json();
        const result = accountSchema.safeParse(body);

        if (!result.success) {
            throw new ValidationError(result.error.flatten().fieldErrors);
        }

        const { provider, providerAccountId } = result.data;

        const existingAccount = await Account.findOne({
            provider,
            providerAccountId,
        });

        if (existingAccount) {
            throw new ForbiddenError(
                "Account with same provider already exists",
            );
        }

        const newAccount = await Account.create(result.data);

        return NextResponse.json(
            { success: true, data: newAccount },
            { status: 201 },
        );
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}
