import React from 'react';
import { Typography, Paper, Box, Button, Stack } from '@mui/material';
import SubtitleTitle from "@/app/components/SubtitleTitle";
import { ArrowForwardIos } from "@mui/icons-material";
import Image from 'next/image';
import service from '@/app/assets/service.png';

function RenderMobile() {
    return (
        <Paper component="section" elevation={3} sx={{
            paddingY: 4,
            paddingX: 2,
            borderRadius: 'var(--mui-shape-borderRadius)',
            marginBottom: 8
        }}>
            <Stack direction="column" justifyContent="center" alignItems="start">
                <SubtitleTitle href="/nos-expertises" text="Nos expertises" />
                <Typography variant="h2" textAlign="left" gutterBottom sx={{ fontSize: { xs: '1.25rem' }, lineHeight: { xs: '2rem' } }}>
                    <Image src={service} alt="Rénovation / Extension" width={32} height={32} style={{ display: 'inline-block' }} />
                    Votre partenaire pour tous vos travaux
                </Typography>
            </Stack>

            <Typography variant="body1" gutterBottom>
                Que vous souhaitiez rénover votre maison, votre appartement ou entreprendre des travaux de rénovation dans votre rue, notre entreprise de rénovation à Metz est là pour vous accompagner. Nous sommes spécialisés dans l&apos;aménagement intérieur et extérieur, l&apos;isolation thermique, et la rénovation énergétique.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Notre équipe d&apos;artisans professionnels maîtrise tous les corps de métiers nécessaires pour transformer votre intérieur. De l&apos;aménagement des combles à la rénovation complète des pièces de vie, en passant par la pose de revêtements et la construction, nous réalisons vos projets sur mesure pour optimiser votre espace de vie.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: 'var(--mui-palette-secondary-light)' }}>
                Chaque chantier est unique, c&apos;est pourquoi nous proposons un service personnalisé. Que ce soit pour des travaux dans une maison individuelle ou un projet de rénovation immobilière plus conséquent, notre savoir-faire et notre expérience nous permettent de répondre à tous vos besoins.
            </Typography>
            <Button variant="outlined" color="primary" endIcon={<ArrowForwardIos />} fullWidth >
                Découvrez nos expertises
            </Button>
        </Paper>
    );
}

export default RenderMobile; 