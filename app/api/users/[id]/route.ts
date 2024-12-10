import User from "@/database/user.model";
import { handleError } from "@/lib/handlers/error";
import { NotFoundError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { userSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

export async function GET(
    _: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    if (!id) throw new NotFoundError("User");

    try {
        await dbConnect();

        const user = await User.findById(id);

        if (!user) throw new NotFoundError("User");

        return NextResponse.json(
            { success: true, data: user },
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
    if (!id) throw new NotFoundError("User");
    const body = await request.json();

    try {
        await dbConnect();
        const userData = userSchema.partial().parse(body);
        const user = await User.findByIdAndUpdate(id, userData, { new: true });

        if (!user) throw new NotFoundError("User");

        return NextResponse.json(
            { success: true, data: user },
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
    if (!id) throw new NotFoundError("User");

    try {
        await dbConnect();
        const user = await User.findByIdAndDelete(id);
        if (!user) throw new NotFoundError("User");

        return NextResponse.json(
            { success: true, data: user },
            { status: 200 },
        );
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}
