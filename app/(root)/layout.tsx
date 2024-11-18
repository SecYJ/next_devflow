import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar/Navbar";
import RightSidebar from "@/components/navigation/RightSidebar";
import Head from "next/head";
import { PropsWithChildren } from "react";

const PageLayout = ({ children }: PropsWithChildren) => (
    <>
        <Navbar />
        <div className="background-light850_dark100">
            <div className="sm:grid sm:grid-cols-[auto_1fr] sm:gap-14 lg:grid-cols-[266px_1fr] xl:grid-cols-[266px_1fr_330px]">
                <LeftSidebar />
                <main className="min-h-screen pt-36">{children}</main>
                <RightSidebar />
            </div>
        </div>
    </>
);

export default PageLayout;
