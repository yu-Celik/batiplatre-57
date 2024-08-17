import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Stack,
    Container
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ArrowForwardIos, Handshake } from '@mui/icons-material';
import SubtitleTitle from '@/app/components/SubtitleTitle';

const PartenaireDeConfiance = () => {
    return (
        <Container sx={{ marginY: 8, position: "relative" }} component="section">
            <SubtitleTitle href="/Pourquoi-nous-choisir" text="Pourquoi nous choisir ?" sx={{ textAlign: "center" }} />
            <Typography variant="h2" align="center" gutterBottom sx={{ mb: 4 }}>
                Votre partenaire de confiance
            </Typography>
            <Stack spacing={2}>
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
                    <Card key={index} elevation={2} sx={{ borderRadius: 2 }}>
                        <CardContent sx={{ position: 'relative' }}>
                            <Box display="flex" flexDirection="column" alignItems="center" mb={1}>
                                {item.icon}
                                <Typography variant="h6" sx={{ ml: 1 }} textAlign="center">
                                    {item.title}
                                </Typography>
                            </Box>
                            <Typography variant="body2" textAlign="center" color="text.secondary">
                                {item.description}
                            </Typography>
                            <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
                                {item.svg}
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Stack>

            <Button
                variant="contained"
                fullWidth
                sx={{ mt: 4 }}
                endIcon={<ArrowForwardIos />}
            >
                Demander un devis
            </Button>

        </Container>
    );
};

export default PartenaireDeConfiance;