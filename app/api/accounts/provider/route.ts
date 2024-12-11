import Account from "@/database/account.model";
import { handleError } from "@/lib/handlers/error";
import { NotFoundError, ValidationError } from "@/lib/http-errors";
import { accountSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { provider } = await request.json();
    try {
        const result = accountSchema.partial().safeParse({ provider });

        if (!result.success)
            throw new ValidationError(result.error.flatten().fieldErrors);

        const providers = await Account.findOne({
            provider: result.data.provider,
        });

        if (!provider) throw new NotFoundError("Provider");

        return NextResponse.json(
            { success: true, data: providers },
            { status: 200 },
        );
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}
