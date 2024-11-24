"use client";

import {
    BoldItalicUnderlineToggles,
    ChangeCodeMirrorLanguage,
    codeBlockPlugin,
    codeMirrorPlugin,
    ConditionalContents,
    CreateLink,
    diffSourcePlugin,
    headingsPlugin,
    imagePlugin,
    InsertCodeBlock,
    InsertImage,
    InsertTable,
    InsertThematicBreak,
    linkDialogPlugin,
    linkPlugin,
    listsPlugin,
    ListsToggle,
    markdownShortcutPlugin,
    MDXEditor,
    MDXEditorMethods,
    quotePlugin,
    Separator,
    tablePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
    UndoRedo,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { basicDark } from "cm6-theme-basic-dark";
import { useTheme } from "next-themes";
import { ForwardedRef } from "react";
import "./dark-editor.css";

interface Props {
    value: string;
    onChange: (value: string) => void;
    ref: ForwardedRef<MDXEditorMethods> | null;
}

const Editor = ({ onChange, value, ref, ...props }: Props) => {
    const { resolvedTheme } = useTheme();

    const theme = resolvedTheme === "dark" ? [basicDark] : [];

    console.log("theme", theme);

    return (
        <MDXEditor
            key={resolvedTheme}
            className="background-light800_dark200 light-border-2 markdown-editor dark-editor w-full border"
            markdown={value}
            onChange={onChange}
            ref={ref}
            plugins={[
                headingsPlugin(),
                listsPlugin(),
                linkPlugin(),
                linkDialogPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                markdownShortcutPlugin(),
                tablePlugin(),
                imagePlugin(),
                codeBlockPlugin({ defaultCodeBlockLanguage: "" }),
                codeMirrorPlugin({
                    codeBlockLanguages: {
                        css: "css",
                        txt: "txt",
                        sql: "sql",
                        html: "html",
                        saas: "saas",
                        scss: "scss",
                        bash: "bash",
                        json: "json",
                        js: "javascript",
                        ts: "typescript",
                        "": "unspecified",
                        tsx: "TypeScript (React)",
                        jsx: "JavaScript (React)",
                    },
                    autoLoadLanguageSupport: true,
                    codeMirrorExtensions: theme,
                }),
                diffSourcePlugin({ viewMode: "rich-text", diffMarkdown: "" }),
                toolbarPlugin({
                    toolbarContents: () => (
                        <ConditionalContents
                            options={[
                                {
                                    when(editor) {
                                        return (
                                            editor?.editorType === "codeblock"
                                        );
                                    },
                                    contents() {
                                        return <ChangeCodeMirrorLanguage />;
                                    },
                                },
                                {
                                    fallback() {
                                        return (
                                            <>
                                                <UndoRedo />
                                                <Separator />

                                                <BoldItalicUnderlineToggles />
                                                <Separator />

                                                <ListsToggle />
                                                <Separator />

                                                <CreateLink />
                                                <InsertImage />
                                                <Separator />

                                                <InsertTable />
                                                <InsertThematicBreak />

                                                <InsertCodeBlock />
                                            </>
                                        );
                                    },
                                },
                            ]}
                        />
                    ),
                }),
                { ...props },
            ]}
        />
    );
};

export default Editor;
