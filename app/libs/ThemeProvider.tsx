'use client';
import React, { ReactNode, createContext, useContext, useMemo } from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import theme from './theme';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

const ThemeContext = createContext({ toggleTheme: () => { } });

export const useThemeContext = () => useContext(ThemeContext);

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const appliedTheme = useMemo(() => {
        return {
            ...theme,
            palette: {
                mode: prefersDarkMode ? 'dark' : 'light',
            },
        };
    }, [prefersDarkMode]);

    return (
        <ThemeContext.Provider value={{ toggleTheme: () => { } }}>
            <CssVarsProvider theme={appliedTheme} disableTransitionOnChange={true}>
                <CssBaseline />
                {children}
            </CssVarsProvider>
        </ThemeContext.Provider>
    );
};

export default CustomThemeProvider;