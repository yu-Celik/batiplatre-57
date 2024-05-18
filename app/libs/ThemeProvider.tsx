import { PropsWithChildren, FC } from "react";
import { CssBaseline, Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from "./theme";

const Providers: FC<PropsWithChildren> = ({ children }) => {

    return (
        <>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                <CssVarsProvider  attribute="class" defaultMode="system" theme={theme} modeStorageKey="data-theme">
                    <CssBaseline />
                    {children}
                </CssVarsProvider >
            </AppRouterCacheProvider >
        </>
    );
};

export default Providers;