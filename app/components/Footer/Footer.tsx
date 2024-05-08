import { Box, Container, Grid, Typography, useTheme, Link as MuiLink } from "@mui/material";
import { contactCardHeight } from "@/libs/theme";
import Link from "next/link";
import { grey } from "@mui/material/colors";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: grey[900],
                color: grey[200],
                py: 3,
                mt: 8,
            }}
            role="contentinfo"
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            BatiPlatre57
                        </Typography>
                        <Typography variant="body2">
                            Spécialistes en rénovation et décoration d&apos;intérieur.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Liens Utiles
                        </Typography>
                        <MuiLink component={Link} href="/contact" color="inherit" variant="body2" aria-label="Contactez-nous">Contactez-nous</MuiLink>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2">
                            123 Rue Exemple, 57000 Metz<br/>
                            contact@batiplatre57.com
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                    © {new Date().getFullYear()} BatiPlatre57. Tous droits réservés.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;