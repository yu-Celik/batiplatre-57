import { PropsWithChildren, FC, memo, useMemo } from "react";
import { CssBaseline, Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from "./theme";

const Providers: FC<PropsWithChildren> = ({ children }) => {
    const memoizedTheme = useMemo(() => theme, []);

    return (
        <>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                <CssVarsProvider attribute="class" defaultMode="system" theme={memoizedTheme} modeStorageKey="data-theme">
                    <CssBaseline />
                    {children}
                </CssVarsProvider>
            </AppRouterCacheProvider>
        </>
    );
};

export default memo(Providers);