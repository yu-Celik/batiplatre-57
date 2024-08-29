"use client"

import { Box, Typography, Grid, Card, CardContent, CardActionArea } from "@mui/material";
import Link from "next/link";
import SubtitleTitle from "@/app/components/SubtitleTitle";
import EmblaCarouselWithTabs from "@/app/components/Slider/EmblaCarouselWithTabs";
import { CardActions } from "@mui/material";
import { IconButton } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { useRouter } from "next/navigation";

type MetierType = {
    id: number;
    title: string;
    description: string;
    link: string;
};

const metiers: MetierType[] = [
    { id: 1, title: "Plâtrerie et isolation", description: "Transformez votre espace", link: "/services/renovation" },
    { id: 2, title: "Menuiserie et pose de sol", description: "Optimisez votre intérieur", link: "/services/amenagement" },
    { id: 3, title: "Débarras et nettoyage", description: "Donnez du style à votre habitat", link: "/services/decoration" },
    { id: 4, title: "Aménagement et décoration", description: "Donnez du style à votre habitat", link: "/services/decoration" },
    { id: 5, title: "Peinture et carrelage", description: "Donnez du style à votre habitat", link: "/services/decoration" },
];

function RenderDesktop() {
    const router = useRouter();
    return (
        <Box component="section" sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'center' }}>
            <SubtitleTitle href="/nos-realisations" text="Nos réalisations" sx={{ textAlign: 'center' }} />

            <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Découvrez nos projets
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', mb: 6 }}>
                Nous offrons une gamme complète de services pour répondre à tous vos besoins en matière de rénovation et d&apos;aménagement.
            </Typography>

            <Grid container spacing={4} justifyContent="center" mb={8}>
                {metiers.map((metier) => (
                    <Grid item md={4} key={metier.id}>
                        <Card>
                            <CardActionArea onClick={() => router.push(metier.link)}>
                                <CardContent sx={{}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {metier.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mr: '56px' }}>
                                        {metier.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'flex-end', position: 'absolute', bottom: 0, right: 0 }}>
                                    <IconButton component={Link} href={metier.link} sx={{ color: 'var(--mui-palette-primary-main)' }}>
                                        <ArrowOutward />
                                    </IconButton>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <EmblaCarouselWithTabs />
        </Box>
    );
}

export default RenderDesktop;