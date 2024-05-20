import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { CardDecoration } from "@/components/ui/CardDecoration";
import StepCard from "@/components/Card/StepCard";
import DecorationH3 from "@/components/DecorationTitle/DecorationH3";

export default function Steps() {
    return (
        <Container sx={{ marginY: 4 }}>
            <Typography variant="h2" fontSize={28} gutterBottom>
                Démarches pour Débarras et Nettoyage
            </Typography>
            <DecorationH3 />
            <CardDecoration className=" h-full w-1/3 bg-amber-500 dark:bg-amber-600 rounded -z-10 ">
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <StepCard title="Étape 1: Évaluation" description="Nous commençons par une évaluation complète de l&apos;espace à nettoyer et à débarrasser pour comprendre vos besoins spécifiques." />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StepCard title="Étape 2: Planification" description="Nous élaborons un plan détaillé en tenant compte de vos contraintes de temps et de budget." />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StepCard title="Étape 3: Exécution" description="Notre équipe procède au débarras et au nettoyage en utilisant des techniques et des équipements professionnels pour garantir un résultat optimal." />

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StepCard title="Étape 4: Vérification" description="Une fois le travail terminé, nous effectuons une vérification minutieuse pour nous assurer que tout est conforme à vos attentes." />
                    </Grid>
                </Grid>
            </CardDecoration>
        </Container>
    );
}