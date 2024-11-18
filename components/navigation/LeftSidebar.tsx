"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import DesktopNavigation from "./navbar/DesktopNavigation";
import MobileNavigation from "./navbar/MobileNavigation";

const LeftSidebar = () => {
    const media = useMediaQuery("(min-width: 640px)");
    return media ? <DesktopNavigation /> : <MobileNavigation />;
};

export default LeftSidebar;
