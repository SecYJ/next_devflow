import User from "@/database/user.model";
import { handleError } from "@/lib/handlers/error";
import { NotFoundError, ValidationError } from "@/lib/http-errors";
import { userSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        const result = userSchema.partial().safeParse({ email });

        if (!result.success)
            throw new ValidationError(result.error.flatten().fieldErrors);

        const user = await User.findOne({ email });

        if (!user) throw new NotFoundError("User");

        return NextResponse.json(
            { success: true, data: user },
            { status: 200 },
        );
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}
