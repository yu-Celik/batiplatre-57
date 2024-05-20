import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import Image from "next/image";
import accueil7 from "../../../../../public/accueil7.webp";
import ScrollButton from "../ScrollButton";

export default function ServiceList() {
    return (
        <Container>
            <Typography variant="h2" fontSize={28}>
                Nos Services
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'start', my: 1.25, mb: 3 }}>
                <Box sx={{ width: '30%', height: '4px', backgroundColor: 'secondary.main', mb: 1 }}></Box>
                <Box sx={{ width: '10%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
                <Box sx={{ width: '5%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
                <Box sx={{ width: '2%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
            </Box>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Card raised>
                        <Image src={accueil7} alt="Débarras de maisons" priority={false} loading="lazy" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                        <CardContent>
                            <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Débarras de maisons</Typography>
                            <Typography variant="body2">
                                Nous débarrassons votre maison de tous les objets encombrants, en veillant à respecter vos biens et à recycler autant que possible.
                            </Typography>
                            <ScrollButton variant="outlined" color="primary" sx={{ mt: 2 }} id="debarras-de-maisons" fullWidth>
                                En savoir plus
                            </ScrollButton>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card raised>
                        <Image src={accueil7} alt="Nettoyage après travaux" priority={false} loading="lazy" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                        <CardContent>
                            <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Nettoyage après travaux</Typography>
                            <Typography variant="body2">
                                Après des travaux de rénovation, nous assurons un nettoyage en profondeur pour que votre espace soit prêt à être utilisé immédiatement.
                            </Typography>
                            <ScrollButton variant="outlined" color="primary" sx={{ mt: 2 }} id="nettoyage-apres-travaux" fullWidth>
                                En savoir plus
                            </ScrollButton>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card raised>
                        <Image src={accueil7} alt="Entretien régulier" priority={false} loading="lazy" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                        <CardContent>
                            <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Entretien régulier</Typography>
                            <Typography variant="body2">
                                Nous proposons des services d&apos;entretien régulier pour maintenir vos espaces toujours propres et accueillants.
                            </Typography>
                            <ScrollButton variant="outlined" color="primary" sx={{ mt: 2 }} id="entretien-regulier" fullWidth>
                                En savoir plus
                            </ScrollButton>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
