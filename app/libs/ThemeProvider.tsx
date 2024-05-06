'use client';
import React, { ReactNode, createContext, useContext } from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline, useMediaQuery, createTheme } from '@mui/material';
import { useCustomTheme } from './theme'; // Correction du chemin relatif

const ThemeContext = createContext({ toggleTheme: () => {} });

export const useThemeContext = () => useContext(ThemeContext);

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = createTheme(useCustomTheme(prefersDarkMode ? 'dark' : 'light'));
    return (
        <ThemeContext.Provider value={{ toggleTheme: () => {} }}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};

export default CustomThemeProvider;