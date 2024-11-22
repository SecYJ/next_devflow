"use client";

import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "../ui/form";
import { z } from "zod";
import { askQuestionSchema } from "@/lib/validations";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

type FormValues = z.infer<typeof askQuestionSchema>;

const QuestionForm = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(askQuestionSchema),
        defaultValues: {
            title: "",
            content: "",
            tags: [],
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log("data", data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-9">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-semibold text-dark-400 dark:text-light-800">
                                Question Title
                            </FormLabel>
                            <FormControl>
                                <Input {...field} className="min-h-14" />
                            </FormControl>
                            <FormDescription className="text-sm text-light-500">
                                Introduce the problem and expand on what you put
                                in the title. Minimum 20 characters.
                            </FormDescription>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-semibold text-dark-400 dark:text-light-800">
                                Detailed explanation of your problem?
                            </FormLabel>
                            <FormControl>
                                <Input {...field} className="min-h-14" />
                            </FormControl>
                            <FormDescription className="text-sm text-light-500">
                                Be specific and imagine you're asking a question
                                to another person
                            </FormDescription>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-semibold text-dark-400 dark:text-light-800">
                                Tags
                            </FormLabel>
                            <FormControl>
                                <Input {...field} className="min-h-14" />
                            </FormControl>
                            <FormDescription className="text-sm text-light-500">
                                Add up to 3tags to describe what your question
                                is about. Start typing to see suggestions.
                            </FormDescription>
                        </FormItem>
                    )}
                />

                <Button type="submit" className="primary-gradient !text-white">
                    Ask a Question
                </Button>
            </form>
        </Form>
    );
};

export default QuestionForm;
