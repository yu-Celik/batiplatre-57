import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DevisForm from './components/DevisForm';
import VerifiedOutlined from '@mui/icons-material/VerifiedOutlined';
import Link from 'next/link';

const DevisPage = () => {
    return (
        <Box component="section" mb={{ xs: 8, md: 16 }}>
            <Typography variant="h1" gutterBottom sx={{ textAlign: { xs: 'center' }, mt: { md: 8 }, mb: { xs: 8, md: 16 } }}>
                Demandez Votre Devis Gratuit
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: 'var(--mui-palette-primary-main)' }}>
                Pour tous vos travaux de rénovation à Metz et ses environs. <Typography component={Link} href="/zones-interventions" sx={{ textDecoration: 'underline' }}>Voir nos zones d&apos;interventions</Typography>
            </Typography>
            <Typography variant="body1" gutterBottom>
                Vous avez un projet de rénovation pour votre maison ou appartement ? Vous souhaitez moderniser votre intérieur ou améliorer l&apos;isolation de votre habitat ? Bâti Plâtre 57 est là pour vous accompagner !
            </Typography>
            <Typography variant="body1" gutterBottom>
                Notre équipe d&apos;experts en rénovation est à votre écoute pour transformer vos idées en réalité. Que ce soit pour des travaux de plâtrerie, d&apos;isolation, de peinture, ou une rénovation complète, nous sommes votre partenaire de confiance.
            </Typography>

            <Box component="article" sx={{ mt: { xs: 8, md: 16 } }}>
                <Typography variant="h3" sx={{ mb: 1.5 }}>
                    Pourquoi choisir Bâti Plâtre 57 ?
                </Typography>
                <List sx={{ '&.MuiList-root': { py: 0 } }}>
                    {[
                        "Expertise polyvalente dans tous les domaines de la rénovation",
                        "Équipe qualifiée avec plus de 15 ans d'expérience",
                        "Devis détaillé et transparent",
                        "Respect des délais et du budget",
                        "Accompagnement personnalisé tout au long de votre projet"
                    ].map((item, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                                <VerifiedOutlined color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Typography variant="h3" sx={{ mt: { xs: 8, md: 16 }, mb: 2 }}>
                Demandez votre devis gratuit dès maintenant
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                Remplissez le formulaire ci-dessous et nous vous contacterons sous 48h pour discuter de votre projet en détail.
            </Typography>
            <DevisForm />
        </Box>
    );
};

export default DevisPage;