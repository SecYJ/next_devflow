import Navbar from "@/components/navigation/Navbar";
import { PropsWithChildren } from "react";

const PageLayout = ({ children }: PropsWithChildren) => (
    <>
        <Navbar />
        <p>you bodoh ke</p>
        {children}
    </>
);

export default PageLayout;
