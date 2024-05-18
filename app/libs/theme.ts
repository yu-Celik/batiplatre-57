'use client';
import { Poppins, Saira } from "next/font/google";
import {experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { amber, blue, green, grey } from '@mui/material/colors';


export const heightHeader = '56px';
export const contactCardHeight = '450px';


const poppins = Poppins({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const saira = Saira({
    weight: ['300', '400', '500'],
    subsets: ['latin'],
    display: 'swap',
});


const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: blue[500],
                    dark: blue[600],
                },
                secondary: {
                    main: amber[500],
                    dark: amber[600],
                },
                divider: blue[200],
                background: {
                    default: grey[200],
                    paper: grey[100],
                },
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
                success: {
                    main: green[400],
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: blue[600],
                    dark: blue[700],
                },
                secondary: {
                    main: amber[600],
                    dark: amber[700],
                },
                divider: blue[700],
                background: {
                    default: grey[800],
                    paper: grey[900],
                },
                text: {
                    primary: grey[50],
                    secondary: grey[100],
                },
                success: {
                    main: green[400],
                },
            },
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: 'var(--mui-palette-grey-50)',
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
                    '[class="dark"] &': {
                        backgroundColor: 'var(--mui-palette-grey-900)',
                    },
                }),
            },
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 500,
                    transition: 'all 0.3s ease-in-out',
                    textTransform: 'none',
                    fontSize: '1rem',
                    color: 'var(--mui-palette-grey-900)',
                    '[class="dark"] &': {
                        color: 'var(--mui-palette-grey-50)',
                    },
                    '&:hover': {
                        borderRadius: `10px 10px 10px 10px`,
                    }
                }),
                containedPrimary: ({ theme }) => ({
                    // color: 'var(--mui-palette-grey-50)',
                    borderRadius: `10px 0px 10px 0px`,
                }),
                containedSecondary: ({ theme }) => ({
                    color: 'var(--mui-palette-grey-900)',
                    '[class="dark"] &': {
                        color: 'var(--mui-palette-grey-900)',
                    },
                    borderRadius: `10px 0px 10px 0px`,
                }),
                outlinedPrimary: {},
                outlinedSecondary: {},
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontWeight: 300,
                    fontFamily: saira.style.fontFamily,
                },
                gutterBottom: {
                    marginBottom: '1rem',
                },
                h1: ({ theme }) => ({
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 700,
                    fontSize: '2.5rem',
                    lineHeight: '1.2',
                    letterSpacing: '0.02em',
                    color: theme.vars.palette.text.primary,
                    '@media (min-width:600px)': {
                        fontSize: '3.5rem',
                    },
                }),
                h2: ({ theme }) => ({
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 500,
                    fontSize: '2rem',
                    lineHeight: '1',
                    letterSpacing: '0.02em',
                    color: theme.vars.palette.text.primary,
                    '@media (min-width:600px)': {
                        fontSize: '2.5rem',
                    },
                }),
                h3: ({ theme }) => ({
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 500,
                    fontSize: '1.125rem',
                    letterSpacing: '0.02em',
                    lineHeight: '1.75rem',
                    color: theme.vars.palette.text.primary,
                }),
                h4: {
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 400,
                },
                h5: {
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 400,
                },
                h6: {
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 400,
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    padding: '1rem',
                },
                disableGutters: {
                    padding: '0rem',
                },
            },
        },
        MuiCircularProgress: {
            styleOverrides: {
                root: {
                    color: blue[500],
                    "--CircularProgress-size": "58px",
                    "--CircularProgress-trackThickness": "3px",
                    "--CircularProgress-progressThickness": "1px"
                },
            }
        },
    },
});

export default theme;

