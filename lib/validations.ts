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
