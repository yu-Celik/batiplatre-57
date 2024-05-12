'use client';
import { Poppins, Saira } from "next/font/google";
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { amber, blue, grey } from '@mui/material/colors';
import { useMediaQuery, createTheme, PaletteMode } from '@mui/material';
import { useMemo } from 'react';

export const heightHeader = '56px';
export const contactCardHeight = '450px';

const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const saira = Saira({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});
export const useCustomTheme = (mode: PaletteMode) => ({
    palette: {
        mode,
        primary: {
            main: mode === 'light' ? blue[500] : blue[600], // ou une autre couleur pour le mode sombre si nécessaire
            dark: mode === 'light' ? blue[600] : blue[700], // ajustez selon vos préférences
        },
        secondary: {
            main: mode === 'light' ? amber[500] : amber[600],
            dark: mode === 'light' ? amber[600] : amber[700],
        },
        divider: mode === 'light' ? blue[200] : blue[700],
        background: {
            default: mode === 'light' ? grey[200] : grey[800],
            paper: mode === 'light' ? grey[100] : grey[900],
        },
        text: {
            primary: mode === 'light' ? grey[900] : grey[50],
            secondary: mode === 'light' ? grey[800] : grey[100],
        },
        white: grey[50],

    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: mode === 'light' ? grey[100] : grey[900],
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',

                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 500,
                    borderRadius: `0 10px 0 10px`,
                    transition: 'all 0.3s ease-in-out',
                    textTransform: 'capitalize', // Transforme la première lettre en majuscule
                    fontSize: '1rem',
                    color: mode === 'light' ? grey[900] : grey[200], // Couleur adaptative selon le mode
                    '&:hover': {
                        borderRadius: `10px 10px 10px 10px`,
                    }
                },
                containedPrimary: { // Styles spécifiques pour les boutons 'contained' avec la couleur 'primary'
                    // boxShadow: `0 0.5px 5px 0.5px ${blue[500]}`,
                    color: grey[100],
                },
                containedSecondary: { // Styles spécifiques pour les boutons 'contained' avec la couleur 'secondary'
                    // boxShadow: `0 0.5px 5px 0.5px ${amber[500]}`,
                    color: grey[900],

                },
                outlinedPrimary: { // Styles spécifiques pour les boutons 'contained' avec la couleur 'primary'
                    boxShadow: `0 0.5px 5px 0.5px ${blue[500]}`,
                },
                outlinedSecondary: { // Styles spécifiques pour les boutons 'contained' avec la couleur 'secondary'
                    boxShadow: `0 0.5px 5px 0.5px ${amber[500]}`,
                },
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
                h1: {
                    fontFamily: poppins.style.fontFamily, // Police spécifique pour les titres h1
                    fontWeight: 700,
                    fontSize: '2.5rem', // Taille par défaut pour xs
                    lineHeight: '1.2',
                    letterSpacing: '0.02em',
                    color: mode === 'light' ? grey[900] : '#fff',
                    '@media (min-width:600px)': { // sm
                        fontSize: '3.5rem',
                    },
                },
                h2: {
                    fontFamily: poppins.style.fontFamily, // Police spécifique pour les titres h1
                    fontWeight: 500,
                    fontSize: '2rem', // Taille par défaut pour xs
                    lineHeight: '1',
                    letterSpacing: '0.02em',
                    color: mode === 'light' ? grey[900] : '#fff',
                    '@media (min-width:600px)': { // sm
                        fontSize: '2.5rem',
                    },
                },
                h3: {
                    fontFamily: poppins.style.fontFamily, // Police spécifique pour les titres h1
                    fontWeight: 500,
                    fontSize: '1.125rem', // Taille par défaut pour xs
                    letterSpacing: '0.02em',
                    lineHeight: '1.75rem',
                    color: mode === 'light' ? grey[900] : '#fff',
                },
                h4: {
                    fontFamily: poppins.style.fontFamily, // Police spécifique pour les titres h1
                    fontWeight: 400,
                },
                h5: {
                    fontFamily: poppins.style.fontFamily, // Police spécifique pour les titres h1
                    fontWeight: 400,
                },
                h6: {
                    fontFamily: poppins.style.fontFamily, // Police spécifique pour les titres h1
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
})


