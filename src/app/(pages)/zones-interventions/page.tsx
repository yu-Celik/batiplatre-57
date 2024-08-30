import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import GoogleMapComponent from '@/app/components/GoogleMap';
import ContactSection from "@/app/components/ContactSection/RenderMobile"

const ZoneInterventionPage = () => {
    return (
        <Box component="section" mb={{ xs: 8, md: 16 }} mt={{ xs: 0, md: 8 }}>
            <Typography variant="h1" sx={{ textAlign: { xs: 'center' }, mt: { md: 8 }, mb: { xs: 8, md: 16 } }}>
                Zones d&apos;Intervention de Bâti Plâtre 57
            </Typography>
            <Typography variant="h2" sx={{ mb: 4 }}>
                Votre expert en rénovation à Metz et ses environs
            </Typography>
            <Typography variant="body1" gutterBottom>
                Bâti Plâtre 57 intervient dans toute la région de Metz et ses alentours. Notre équipe de professionnels est mobile et prête à se déplacer pour réaliser vos projets de rénovation, que vous soyez en ville ou dans les communes environnantes. Découvrez nos principales zones d&apos;intervention :
            </Typography>
            <List sx={{
                mb: 4,
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
                            <LocationOnOutlined color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>

            <GoogleMapComponent />

            <ContactSection />
        </Box>
    );
};

export default ZoneInterventionPage;