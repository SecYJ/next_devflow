import { ThemeProvider, ThemeProviderProps } from "next-themes";

const Theme = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <ThemeProvider {...props} enableSystem>
            {children}
        </ThemeProvider>
    );
};

export default Theme;
