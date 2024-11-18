export const ROUTES = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    COMMUNITY: "/community",
    COLLECTION: "/collection",
    JOBS: "/jobs",
    QUESTION: "/ask-question",
    PROFILE(id: string) {
        return `/question/${id}`;
    },
    TAGS(id: string) {
        return `/tags/${id}`;
    },
};
