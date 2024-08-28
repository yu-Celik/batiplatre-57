import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ButtonLink from "@/app/components/ButtonLink";
import GoogleMapComponent from '@/app/components/GoogleMap';
import VerifiedOutlined from '@mui/icons-material/VerifiedOutlined';
import ContactSection from "@/app/components/ContactSection/RenderMobile"

const ZoneInterventionPage = () => {
    return (
        <Box component="section" mb={{ xs: 8, md: 16 }} mt={{ xs: 0, md: 8 }}>
            <Typography variant="h1" sx={{ textAlign: { xs: 'center' }, mt: { md: 8 }, mb: { xs: 8, md: 16 } }}>
                Zones d&apos;Intervention de Bâti Plâtre 57
            </Typography>

            <Paper elevation={3} sx={{ p: 3, mb: { xs: 8, md: 16 } }}>
                <Typography variant="h6" fontWeight="400" sx={{ mb: 2 }}>
                    Votre expert en rénovation à Metz et ses environs
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Bâti Plâtre 57 intervient dans toute la région de Metz et ses alentours. Notre équipe de professionnels est mobile et prête à se déplacer pour réaliser vos projets de rénovation, que vous soyez en ville ou dans les communes environnantes. Découvrez nos principales zones d&apos;intervention :
                </Typography>
                <List sx={{
                    '& .MuiListItem-root': {
                        paddingX: 0
                    },
                    '& .MuiListItemIcon-root': {
                        minWidth: 32
                    },
                }}>
                    {[
                        "Metz et son agglomération",
                        "Thionville et ses environs",
                        "Nancy et sa périphérie",
                        "Tout le département de la Moselle"
                    ].map((item, index) => (
                        <ListItem key={index} >
                            <ListItemIcon>
                                <LocationOnIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </Paper>

            <GoogleMapComponent />

            <Typography variant="h3" gutterBottom sx={{ mt: { xs: 8, md: 16 } }}>
                Pourquoi choisir Bâti Plâtre 57 pour vos travaux ?
            </Typography>
            <List sx={{
                '& .MuiListItem-root': {
                    paddingX: 0
                },
                '& .MuiListItemIcon-root': {
                    minWidth: 32
                },
            }}>
                {[
                    "Intervention rapide dans toute la région",
                    "Équipe locale connaissant parfaitement le territoire",
                    "Adaptabilité à tous types de chantiers",
                    "Respect des spécificités architecturales locales"
                ].map((item, index) => (
                    <ListItem key={index}>
                        <ListItemIcon>
                            <VerifiedOutlined color="success" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>

            <ButtonLink
                link="/contact"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 1 }}
            >
                Contactez-nous pour votre projet
            </ButtonLink>
            <ContactSection />
        </Box>
    );
};

export default ZoneInterventionPage;