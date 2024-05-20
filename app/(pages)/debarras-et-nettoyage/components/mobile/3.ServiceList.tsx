import { Container, Typography, Box, Grid } from "@mui/material";
import ServiceCard from "@/components/Card/ServiceCard";
import accueil7 from "../../../../../public/accueil7.webp";

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
                    <ServiceCard
                        imageSrc={accueil7}
                        imageAlt="Débarras de maisons"
                        title="Débarras de maisons"
                        description="Nous débarrassons votre maison de tous les objets encombrants, en veillant à respecter vos biens et à recycler autant que possible."
                        buttonId="debarras-de-maisons"
                        buttonText="En savoir plus"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ServiceCard
                        imageSrc={accueil7}
                        imageAlt="Nettoyage après travaux"
                        title="Nettoyage après travaux"
                        description="Après des travaux de rénovation, nous assurons un nettoyage en profondeur pour que votre espace soit prêt à être utilisé immédiatement."
                        buttonId="nettoyage-apres-travaux"
                        buttonText="En savoir plus"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ServiceCard
                        imageSrc={accueil7}
                        imageAlt="Entretien régulier"
                        title="Entretien régulier"
                        description="Nous proposons des services d'entretien régulier pour maintenir vos espaces toujours propres et accueillants."
                        buttonId="entretien-regulier"
                        buttonText="En savoir plus"
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

