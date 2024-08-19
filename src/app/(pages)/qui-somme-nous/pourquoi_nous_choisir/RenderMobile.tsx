import SubtitleTitle from "@/app/components/SubtitleTitle"
import { Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/VerifiedOutlined'
import { ArrowForwardIos } from "@mui/icons-material"

type Props = {}
function RenderMobile({ }: Props) {
    return (
        <>
            <Box component="section" sx={{ marginY: 8 }} aria-labelledby="section-title">
                <SubtitleTitle href="#" text="Qualité, Prix, et Satisfaction" sx={{ textAlign: 'center' }} />
                <Typography id="section-title" variant="h2" color="text.primary" sx={{ textAlign: 'center', marginBottom: 4 }}>
                    Pourquoi nous choisir ?
                </Typography>
                <Typography variant="body1" gutterBottom color="text.secondary">
                    Choisir Bâti Plâtre 57, c&apos;est opter pour un partenaire fiable qui s&apos;engage à fournir un service de haute qualité sans compromettre le prix abordable.
                </Typography>
                <Typography variant="body1" color="secondary.light">
                    Vous pouvez compter sur nous pour vous offrir une excellente valeur pour votre investissement.
                </Typography>
                <List sx={{
                    '& .MuiListItem-root': {
                        paddingX: 0
                    },
                    '& .MuiListItemIcon-root': {
                        minWidth: 32
                    },
                }}>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary="Chaque projet est unique" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary="Solutions sur mesure." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon >
                            <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary="Un espace qui vous est propre." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon >
                            <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary="Réputation solide et recommandations positives." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon >
                            <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary="Expertise et savoir-faire dans le domaine de la rénovation." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary="Respect des délais, des budgets et des normes de qualité." />
                    </ListItem>
                </List>
                <Button variant="contained" color="primary" sx={{ marginTop: 3 }} fullWidth aria-label="Demander un devis" endIcon={<ArrowForwardIos />}>
                    Demander un devis
                </Button>
            </Box>
        </>
    )
}
export default RenderMobile