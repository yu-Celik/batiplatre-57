import { Box, Typography, Grid, Card, CardContent, CardActionArea } from "@mui/material";
import Link from "next/link";
import SubtitleTitle from "@/app/components/SubtitleTitle";
import { CardActions } from "@mui/material";
import { IconButton } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";

type MetierType = {
    id: number;
    title: string;
    description: string;
    link: string;
};


const metiers: MetierType[] = [
    { id: 1, title: "Maçonnerie et extension", description: "Construction de maison, rénovation générale, térasse, véranda, pisçine", link: "/services/maconnerie-extension" },
    { id: 2, title: "Façade isolation ext et toiture", description: "Charpente, couverture, bardage, isolation thermique, filet, crépris, peinture, lavage de façade", link: "/services/facade-isolation-ext-toiture" },
    { id: 5, title: "Électricité et sol chauffant", description: "Tableau électrique, luminaire, prise électrique, alarme, contrôle d'accès, dépannage", link: "/services/electricite-sol-chauffant" },
    { id: 3, title: "Plâtrerie et isolation intérieur", description: "Plafond, doublage, cloison placostil, cloison vitrée, staff, enduis", link: "/services/platrerie-isolation-interieur" },
    { id: 4, title: "Menuiserie et plomberie", description: "Bloc Porte, porte, fênetre, rénovation d'ancienne porte, pose de douche à l'italienne, sol flottant", link: "/services/menuiserie-plomberie" },
    { id: 6, title: "Peinture, pose de sol et carrelage", description: "Peinture intérieur, extérieur, sol vinylique, mosaique, carrelage 30/60/120, faillence, sol massif", link: "/services/peinture-pose-de-sol-carrelage" },
];

function RenderDesktop() {
    return (
        <Box component="section" sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <SubtitleTitle href="/nos-realisations" text="Nos réalisations" sx={{ textAlign: 'center' }} />

            <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Engagement et Qualité
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', mb: 6 }}>
                Chez Bâti Plâtre 57, nous nous engageons à fournir des services de haute qualité qui répondent aux besoins spécifiques de chaque client.
            </Typography>
            <Grid container spacing={4} justifyContent="center" mb={8}>
                {metiers.map((metier) => (
                    <Grid item md={4} key={metier.id}>
                        <Card sx={{ position: 'relative' }}>
                            <CardActionArea sx={{
                                '&:hover': {
                                    '& .MuiIconButton-root': {
                                        transform: 'rotate(45deg)',
                                    }
                                }
                            }}>
                                <Box component={Link} href={metier.link} sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
                                <CardContent sx={{}}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {metier.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mr: '56px' }}>
                                        {metier.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'flex-end', position: 'absolute', bottom: 0, right: 0 }}>
                                    <IconButton component={Link} href={metier.link} sx={{ color: 'var(--mui-palette-primary-main)', transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                        <ArrowOutward />
                                    </IconButton>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default RenderDesktop;