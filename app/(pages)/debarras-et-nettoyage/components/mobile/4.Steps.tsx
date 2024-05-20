import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { CardDecoration } from "@/components/ui/CardDecoration";

export default function Steps() {
    return (
        <Container sx={{ marginY: 4 }}>
            <Typography variant="h2" fontSize={28} gutterBottom>
                Démarches pour Débarras et Nettoyage
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'start', my: 1.25, mb: 3 }}>
                <Box sx={{ width: '30%', height: '4px', backgroundColor: 'secondary.main', mb: 1 }}></Box>
                <Box sx={{ width: '10%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
                <Box sx={{ width: '5%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
                <Box sx={{ width: '2%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
            </Box>
            <CardDecoration className=" h-full w-1/3 bg-amber-500 dark:bg-amber-600 rounded -z-10 ">
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Card raised sx={{ my: 1 }}>
                            <CardContent>
                                <Typography variant="h6" pb={1} className='max-[400px]:max-w-[300px]'>Étape 1: Évaluation</Typography>
                                <Typography variant="body2">
                                    Nous commençons par une évaluation complète de l&apos;espace à nettoyer et à débarrasser pour comprendre vos besoins spécifiques.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card raised sx={{ my: 1 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Étape 2: Planification</Typography>
                                <Typography variant="body2">
                                    Nous élaborons un plan détaillé en tenant compte de vos contraintes de temps et de budget.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card raised sx={{ my: 1 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Étape 3: Exécution</Typography>
                                <Typography variant="body2">
                                    Notre équipe procède au débarras et au nettoyage en utilisant des techniques et des équipements professionnels pour garantir un résultat optimal.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card raised sx={{ my: 1 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Étape 4: Vérification</Typography>
                                <Typography variant="body2">
                                    Une fois le travail terminé, nous effectuons une vérification minutieuse pour nous assurer que tout est conforme à vos attentes.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </CardDecoration>
        </Container>
    );
}