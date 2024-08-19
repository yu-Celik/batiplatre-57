import React from 'react';
import { Typography, Box, Card } from '@mui/material';
import SubtitleTitle from '@/app/components/SubtitleTitle';
import Image from 'next/image';
import salleDeBain from '/public/salle_de_bain.png';

const IntroductionPage = () => {
    return (
        <>
            <Box component="section">
                <Typography variant="h1" gutterBottom textAlign="center">
                    Qui somme-nous
                </Typography>
                <Box my={4}>
                    <SubtitleTitle href="#" text="Bienvenue chez batiplatre57" sx={{ textAlign: 'center' }} />
                    <Typography variant="h2" component="h3" sx={{ textAlign: 'center', mb: 4 }}>
                        Introduction
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Artisan du bâtiment avec plus de 15 ans d’expérience, je vous propose une large gamme de services pour transformer et embellir votre espace.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Découvrez notre savoir-faire et notre passion pour la rénovation et l’aménagement.
                    </Typography>
                </Box>
                <Image
                    src={salleDeBain}
                    alt="Rénovation"
                    style={{ boxShadow: 'var(--mui-shadows-3)', width: '100%', height: 'auto' }}
                />
            </Box>
        </>
    );
};

export default IntroductionPage;