import Account from "@/database/account.model";
import { handleError } from "@/lib/handlers/error";
import { NotFoundError, ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { accountSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

export async function GET(
    _: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    if (!id) throw new Error("Account");

    try {
        await dbConnect();

        const account = await Account.findById(id);

        if (!account) throw new NotFoundError("User");

        return NextResponse.json(
            { success: true, data: account },
            { status: 200 },
        );
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    if (!id) throw new Error("Account");
    const body = await request.json();

    try {
        await dbConnect();

        const result = accountSchema.partial().safeParse(body);

        if (!result.success) {
            throw new ValidationError(result.error.flatten().fieldErrors);
        }

        const updatedAccount = await Account.findByIdAndUpdate(
            id,
            result.data,
            {
                new: true,
            },
        );

        if (!updatedAccount) throw new NotFoundError("User");

        return NextResponse.json(
            { success: true, data: updatedAccount },
            { status: 200 },
        );
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}

export async function DELETE(
    _: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    if (!id) throw new Error("Account");
    try {
        await dbConnect();

        const account = await Account.findByIdAndDelete(id);

        if (!account) throw new NotFoundError("User");

        return NextResponse.json(
            { success: true, data: account },
            { status: 200 },
        );
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}
