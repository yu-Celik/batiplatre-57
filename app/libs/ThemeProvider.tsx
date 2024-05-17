import { PropsWithChildren, FC } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { CssBaseline, Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";
import theme from "./theme";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const Providers: FC<PropsWithChildren> = ({ children }) => {

    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <NextUIProvider>
                <NextThemesProvider attribute="class" defaultTheme="system" enableSystem enableColorScheme disableTransitionOnChange>
                    <CssVarsProvider theme={theme} attribute="class">
                        <CssBaseline />
                        {children}
                    </CssVarsProvider>
                </NextThemesProvider>
            </NextUIProvider>
        </AppRouterCacheProvider>
    );
};

export default Providers;