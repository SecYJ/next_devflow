import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

const Home = async () => {
    const session = await auth();

    if (!session) return null;

    return (
        <div className="pt-32">
            <p className="text-red-600">
                Welcome to DevFlow! This is the home page.
            </p>
            <form
                action={async () => {
                    "use server";
                    await signOut({
                        redirectTo: ROUTES.SIGN_IN,
                    });
                }}
            >
                <Button type="submit">Sign Out</Button>
            </form>
        </div>
    );
};

export default Home;
