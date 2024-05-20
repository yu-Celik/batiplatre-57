import { Container, Typography, Button } from "@mui/material";

export default function ServiceDescription() {
    return (
        <Container sx={{ marginBottom: 4, display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <Container>
                <Typography variant="body1" gutterBottom>
                    Des services de débarras et de nettoyage de haute qualité pour un espace impeccable
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Nous offrons des solutions complètes pour le débarras et le nettoyage de vos espaces, qu&apos;ils soient résidentiels ou commerciaux. Notre équipe expérimentée utilise des techniques avancées et des équipements de pointe pour garantir un résultat impeccable.
                </Typography>
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Contactez-nous dès maintenant
                </Button>
            </Container>
        </Container>
    );
}