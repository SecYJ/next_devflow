import { z } from "zod";

export const signInSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please provide valid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(100, "Password exceed 100 characters"),
});

export const signUpSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please provide valid email address"),
    username: z.string().min(1, "Username is required"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(100, "Password exceed 100 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(
            /[^A-Za-z0-9]/,
            "Password must contain at least one special character",
        ),
});

export const askQuestionSchema = z.object({
    title: z.string().min(1, "Title is required").max(100, "Title is too long"),
    content: z.string().min(1, "Body is required"),
    tags: z
        .array(
            z
                .string()
                .min(1, "At least one character")
                .max(30, "Tag cannot exceed 30 characters"),
        )
        .min(1, "At least one tag is required")
        .max(3, "Maximum 3 tags are allowed"),
});

export const userSchema = z.object({
    name: z.string().min(1, "Name is required"),
    username: z.string().min(3, "Username msut be at least 3 characters long."),
    email: z.string().email("Invalid email address"),
    bio: z.string().optional(),
    image: z
        .string()
        .url({ message: "Please provide a valid URL." })
        .optional(),
    location: z.string().optional(),
    portfolio: z.string().url("Please provide a valid URL").optional(),
    reputation: z.number().optional(),
});

export const accountSchema = z.object({
    userId: z.string().min(1, { message: "User ID is required." }),
    name: z.string().min(1, { message: "Name is required." }),
    image: z
        .string()
        .url({ message: "Please provide a valid URL." })
        .optional(),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long." })
        .max(100, { message: "Password cannot exceed 100 characters." })
        .regex(/[A-Z]/, {
            message: "Password must contain at least one uppercase letter.",
        })
        .regex(/[a-z]/, {
            message: "Password must contain at least one lowercase letter.",
        })
        .regex(/[0-9]/, {
            message: "Password must contain at least one number.",
        })
        .regex(/[^a-zA-Z0-9]/, {
            message: "Password must contain at least one special character.",
        })
        .optional(),
    provider: z.string().min(1, { message: "Provider is required." }),
    providerAccountId: z
        .string()
        .min(1, { message: "Provider Account ID is required." }),
});
