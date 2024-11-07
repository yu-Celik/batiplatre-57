'use client';
import { Fira_Sans } from "next/font/google";
import { PaletteColor, PaletteColorOptions, experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { amber, blue, green, grey } from '@mui/material/colors';


export const heightHeader = '56px';
export const contactCardHeight = '450px';

declare module '@mui/material/styles' {
    interface Palette {
        whiteAndBlue: PaletteColor;
        whiteAndAmber: PaletteColor;
        blueAndAmber: PaletteColor;
    }
    interface PaletteOptions {
        whiteAndBlue?: PaletteColorOptions;
        whiteAndAmber?: PaletteColorOptions;
        blueAndAmber?: PaletteColorOptions;
    }
}
declare module '@mui/material' {
    interface Color {
        whiteAndBlue: true;
        whiteAndAmber: true;
        blueAndAmber: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        whiteAndBlue: true;
        whiteAndAmber: true;
        blueAndAmber: true;
    }
}

declare module '@mui/material/AppBar' {
    interface AppBarPropsColorOverrides {
        whiteAndBlue: true;
        whiteAndAmber: true;
        blueAndAmber: true;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsColorOverrides {
        whiteAndBlue: true;
        whiteAndAmber: true;
        blueAndAmber: true;
    }
}



const fira = Fira_Sans({
    weight: ['300', '400', '500'],
    subsets: ['latin'],
});



const theme = extendTheme({
    shape: {
        borderRadius: 12, // Ceci définira --mui-shape-borderRadius à 12px
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: blue[500],
                    dark: blue[600],
                    contrastText: '#fff',
                },
                secondary: {
                    main: '#5D7074',
                    dark: '#59656E',
                    contrastText: '#fff',
                },
                divider: blue[200],
                background: {
                    default: '#f2f2f2',
                    paper: '#F7F9FA',
                },
                text: {
                    primary: '#0B0804',
                    secondary: '#0B0804',
                },
                success: {
                    main: '#23AD5C',
                    dark: '#2C9457',
                    contrastText: '#fff',
                },
                whiteAndBlue: {
                    main: blue[500],
                    dark: blue[600],
                },
            },
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: ({ theme }) => ({

                }),
            },
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    // fontFamily: fira.style.fontFamily,
                    // fontWeight: 500,
                    // transition: 'all 0.3s ease-in-out',
                    textTransform: 'none',
                    borderRadius: 'var(--mui-shape-borderRadius)',
                    '@media (min-width:900px)': {
                        fontSize: '1rem',
                    },
                    // color: 'var(--mui-palette-grey-900)',
                    // '[class="dark"] &': {
                    //     color: 'var(--mui-palette-grey-50)',
                    // },
                    // '&:hover': {
                    //     borderRadius: `10px 10px 10px 10px`,
                    // }
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
                    fontFamily: fira.style.fontFamily,
                },
                gutterBottom: {
                    marginBottom: '1rem',
                },
                h1: ({ theme }) => ({
                    fontFamily: fira.style.fontFamily,
                    fontWeight: 300,
                    fontSize: '2rem',
                    lineHeight: '2.8rem',
                    letterSpacing: '0.03125rem', // 0.5px équivalent en rem
                    color: theme.vars.palette.text.primary,
                    '@media (min-width:600px)': {
                        fontSize: '3rem',
                        lineHeight: '4rem',
                        letterSpacing: '0.046875rem', // 0.75px équivalent en rem
                    },
                    '@media (min-width:900px)': {
                        fontSize: '3rem',
                        lineHeight: '4rem',
                        letterSpacing: '0.046875rem', // 0.75px équivalent en rem
                    },
                }),
                h2: ({ theme }) => ({
                    fontFamily: fira.style.fontFamily,
                    fontWeight: 400,
                    fontSize: '2rem',
                    lineHeight: '2.8rem',
                    letterSpacing: '0.03125rem', // 0.5px équivalent en rem
                    color: theme.vars.palette.text.primary,
                    '@media (min-width:600px)': {
                        fontSize: '2.5rem',
                        lineHeight: '3rem',
                        letterSpacing: '0.0375rem', // 0.6px équivalent en rem
                    },
                }),
                h3: ({ theme }) => ({
                    fontFamily: fira.style.fontFamily,
                    fontWeight: 400,
                    fontSize: '1.5rem',
                    letterSpacing: '0.03125rem', // 0.5px équivalent en rem
                    lineHeight: '2.1rem',
                    color: theme.vars.palette.text.primary,
                }),
                h4: {
                    fontFamily: fira.style.fontFamily,
                    fontWeight: 400,
                    letterSpacing: '0.03125rem', // 0.5px équivalent en rem
                },
                h5: {
                    fontFamily: fira.style.fontFamily,
                    fontWeight: 400,
                    letterSpacing: '0.03125rem', // 0.5px équivalent en rem
                },
                h6: {
                    fontFamily: fira.style.fontFamily,
                    fontWeight: 500,
                    fontSize: '1.25rem',
                    lineHeight: '1.75rem',
                    letterSpacing: '0.03125rem', // 0.5px équivalent en rem
                },
                body1: {
                    fontFamily: fira.style.fontFamily,
                    fontWeight: 400,
                    fontSize: '1rem',
                    lineHeight: '1.4rem',
                    letterSpacing: '0.03125rem', // 0.5px équivalent en rem
                },
                body2: {
                    fontFamily: fira.style.fontFamily,
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    lineHeight: '1.225rem',
                    letterSpacing: '0.03125rem', 
                    '@media (min-width:900px)': {
                        fontSize: '1rem',
                        lineHeight: '1.4rem',
                        letterSpacing: '0.03125rem', 
                    },
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
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: 'var(--mui-shadows-3)',
                },
            }
        },
    },
});

export default theme;
