import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const pageLinks = [
        { text: 'Qui sommes-nous', href: '/qui-sommes-nous' },
        { text: 'Nos réalisations', href: '/nos-realisations' },
        { text: 'Nos services', href: '/nos-services' },
        { text: 'Devis', href: '/devis' },
        { text: 'Notre processus de réalisation', href: '/notre-processus-de-realisation' }
    ];

    return (
        <Box component="footer" sx={{ bgcolor: 'var(--mui-palette-secondary-main)', color: 'grey.300', py: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Nos services
                        </Typography>
                        {['Plâtrerie et isolation', 'Débarras et nettoyage', 'Menuiserie et pose de sol', 'Aménagement et décoration', 'Peinture et carrelage'].map((item) => (
                            <Typography variant="body2" key={item} sx={{ paddingX: 1 }}>
                                {item}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2" sx={{ paddingX: 1 }}>Tel : +33 (0)6 77 95 15 23</Typography>
                        <Typography variant="body2" sx={{ paddingX: 1 }}>Email : batiplatre57@hotmail.com</Typography>
                        <Typography variant="body2" sx={{ paddingX: 1 }}>Adresse : 3 rue Louis Hestaux 57070 Metz</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Pages
                        </Typography>
                        {pageLinks.map((item) => (
                            <Typography
                                component={Link}
                                href={item.href}
                                key={item.text}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        paddingX: 1,
                                        '&:hover': {
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" align="center">
                        Nous suivre
                    </Typography>
                    <Box display="flex" justifyContent="center" mt={2}>
                        <IconButton sx={{ color: 'primary.light' }} aria-label="Facebook">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'primary.light' }} aria-label="LinkedIn">
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Typography variant="body2" color="inherit" align="center" mt={2}>
                    © {currentYear} BatiPlatre57. Tous droits réservés.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;