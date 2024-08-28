import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Stack,
    SxProps,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ArrowForwardIos, Handshake } from '@mui/icons-material';
import SubtitleTitle from '@/app/components/SubtitleTitle';
import ButtonLink from '@/app/components/ButtonLink';


const PartenaireDeConfiance = ({ sx }: { sx?: SxProps }) => {
    return (
        <Box sx={{ marginY: { xs: 8, md: 16 }, position: "relative", ...sx }} component="section" >
            <SubtitleTitle href="/qui-sommes-nous" text="Pourquoi nous choisir ?" sx={{ textAlign: "center" }} />
            <Typography variant="h2" align="center" gutterBottom sx={{ mb: 4 }}>
                Votre partenaire de confiance
            </Typography>
            <Stack spacing={{ xs: 2, md: 0 }} gap={{ xs: 0, md: 2 }} flexDirection={{ xs: "column", md: "row" }} alignItems={{ xs: "center", md: "flex-start" }}>
                {[
                    {
                        icon: <BuildIcon color="warning" />, title: "Expertise Polyvalente", description: "Une maîtrise complète de tous les métiers de la rénovation : agencement, isolation, carrelage, et plus encore.", svg: <svg width="358" height="14" viewBox="0 0 358 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-60 27C9.63066 7.37979 202.914 -20.0885 419 27" stroke="var(--mui-palette-warning-main)" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    },
                    {
                        icon: <CheckCircleIcon color="success" />, title: "Qualité Certifiée", description: "Intervention conforme aux normes RGE, garantissant des travaux durables, performants, et éligibles aux aides énergétiques.", svg: <svg width="358" height="14" viewBox="0 0 358 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-60 27C9.63066 7.37979 202.914 -20.0885 419 27" stroke="var(--mui-palette-success-main)" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    },
                    {
                        icon: <Handshake color="primary" />, title: "Accompagnement Personnalisé", description: "Suivi personnalisé de votre projet, de la conception à la réalisation, avec un engagement de respect des délais et du budget.", svg: <svg width="358" height="14" viewBox="0 0 358 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-60 27C9.63066 7.37979 202.914 -20.0885 419 27" stroke="var(--mui-palette-primary-main)" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    },
                ].map((item, index) => (
                    <Card key={index} elevation={2} sx={{ display: "flex", flexDirection: { md: "column" }, justifyContent: 'center', borderRadius: 2, minHeight: { md: 255, lg: 205 }, width: { sm: '100%' }, position: "relative", alignItems: { md: "center" } }}>
                        <CardContent >
                            <Box display="flex" flexDirection="column" alignItems="center" mb={{ xs: 1, md: 1.5 }}>
                                {item.icon}
                                <Typography variant="h6" textAlign="center">
                                    {item.title}
                                </Typography>
                            </Box>
                            <Typography variant="body2" textAlign="center" color="text.secondary" gutterBottom>
                                {item.description}
                            </Typography>
                        </CardContent>
                        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
                            {item.svg}
                        </Box>
                    </Card>
                ))}
            </Stack>

            <ButtonLink
                link="/devis"
                variant="contained"
                fullWidth
                sx={{ mt: 4, display: { md: "none" } }}
                endIcon={<ArrowForwardIos />}
            >
                Demander un devis
            </ButtonLink>

        </Box>
    );
};

export default PartenaireDeConfiance;