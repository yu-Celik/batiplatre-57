import React from 'react';
import { Typography, Paper, Box, Button, Stack } from '@mui/material';
import SubtitleTitle from "@/app/components/SubtitleTitle";
import { ArrowForwardIos } from "@mui/icons-material";
import Image from 'next/image';
import service from '@/app/assets/service.png';
import ButtonLink from '@/app/components/ButtonLink';

function RenderMobile() {
    return (
        <Box component="section" sx={{
            borderRadius: 'var(--mui-shape-borderRadius)',
            marginY: { xs: 8, md: 16 }
        }}>
            <Stack direction="column" justifyContent="center" alignItems="start">
                <SubtitleTitle href="/processus-realisation" text="Nos expertises" sx={{ textAlign: { xs: 'center'} }} />
                <Typography variant="h2" sx={{ width: '100%', mb: 4, textAlign: { xs: 'center'} }} >
                    Votre partenaire pour tous vos travaux
                </Typography>
            </Stack>

            <Typography variant="body1" gutterBottom>
                Que vous souhaitiez rénover votre maison, votre appartement ou entreprendre des travaux de rénovation dans votre rue, notre entreprise de rénovation à Metz est là pour vous accompagner. Nous sommes spécialisés dans l&apos;aménagement intérieur et extérieur, la rénovation intérieure, l&apos;isolation thermique, et la rénovation énergétique.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Notre équipe d&apos;artisans professionnels maîtrise tous les corps de métiers nécessaires pour transformer votre intérieur. De l&apos;aménagement des combles à la rénovation complète des pièces de vie, en passant par la pose de revêtements et la construction, nous réalisons vos projets sur mesure pour optimiser votre espace de vie.
            </Typography>
            <Typography variant="body1" gutterBottom >
                Chaque chantier est unique, c&apos;est pourquoi nous proposons un service personnalisé. Que ce soit pour des travaux dans une maison individuelle ou un projet de rénovation immobilière plus conséquent, notre savoir-faire et notre expérience nous permettent de répondre à tous vos besoins.
            </Typography>
        </Box>
    );
}

export default RenderMobile; 