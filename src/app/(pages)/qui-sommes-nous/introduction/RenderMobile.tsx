import React from 'react';
import { Typography, Box } from '@mui/material';
import SubtitleTitle from '@/app/components/SubtitleTitle';
import Image from 'next/image';
import salleDeBain from '/public/salle_de_bain.png';

const IntroductionPage = () => {
    return (
        <>
            <Box component="section">
                <Typography variant="h1" gutterBottom textAlign="center">
                    Qui sommes-nous
                </Typography>
                <Box my={4}>
                    <SubtitleTitle href="#" text="Bienvenue chez batiplatre57" sx={{ textAlign: 'center' }} />
                    <Typography variant="h2" sx={{ textAlign: 'center', mb: 4 }}>
                        Introduction
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Artisan du bâtiment avec plus de 15 ans d’expérience, je vous propose une large gamme de services pour transformer et embellir votre espace.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Découvrez notre savoir-faire et notre passion pour la rénovation et l’aménagement.
                    </Typography>
                </Box>
                <Image
                    src={salleDeBain}
                    alt="Rénovation"
                    style={{ width: '100%', height: 'auto', borderRadius: 'var(--mui-shape-borderRadius)', boxShadow: 'var(--mui-shadows-3)', marginTop: '1rem' }}
                />
            </Box>
        </>
    );
};

export default IntroductionPage;