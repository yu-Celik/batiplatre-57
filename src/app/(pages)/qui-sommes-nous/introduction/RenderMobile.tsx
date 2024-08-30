import React from 'react';
import { Typography, Box } from '@mui/material';
import SubtitleTitle from '@/app/components/SubtitleTitle';
import Image from 'next/image';
import salleDeBain from '/public/salle_de_bain.png';

const IntroductionPage = () => {
    return (
        <>
            <Box component="section">
                <Typography variant="h1" gutterBottom sx={{ textAlign: { xs: 'center' }, mt: { md: 8 } }}>
                    Qui sommes-nous
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', my: { xs: 0, md: 16 }, gap: { xs: 0, md: 4 } }}>
                    <Box>
                        <SubtitleTitle href="#" text="Bienvenue chez batiplatre57" sx={{ textAlign: { xs: 'center', md: 'left' } }} />
                        <Typography variant="h2" sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 2, md: 4 } }}>
                            Introduction
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Artisan du bâtiment avec plus de 15 ans d’expérience, je vous propose une large gamme de services pour transformer et embellir votre espace.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Découvrez notre savoir-faire et notre passion pour la rénovation et l’aménagement.
                        </Typography>
                    </Box>
                    <Box sx={{ width: { xs: '100%', md: '90%' } }}>
                        <Image
                            src={salleDeBain}
                            alt="Rénovation"
                            width={540}
                            height={360}
                            priority
                            style={{ width: '100%', height: 'auto', borderRadius: 'var(--mui-shape-borderRadius)', boxShadow: 'var(--mui-shadows-3)', marginTop: '1rem' }}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default IntroductionPage;