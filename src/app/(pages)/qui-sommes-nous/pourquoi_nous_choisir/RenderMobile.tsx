import SubtitleTitle from "@/app/components/SubtitleTitle"
import { Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import VerifiedOutlined from '@mui/icons-material/VerifiedOutlined';
import { ArrowForwardIos } from "@mui/icons-material"
import ButtonLink from "@/app/components/ButtonLink"

type Props = {}
function RenderMobile({ }: Props) {
    return (
        <>
            <Box component="section" sx={{ marginY: 8 }} aria-labelledby="section-title">
                <SubtitleTitle href="#" text="Qualité, Prix, et Satisfaction" sx={{ textAlign: { xs: 'center', md: 'left' } }} />
                <Typography id="section-title" variant="h2" color="text.primary" sx={{ textAlign: { xs: 'center', md: 'left' }, marginBottom: 4, maxWidth: { xs: '310px', md: 'none' }, marginX: 'auto' }}>
                    Pourquoi nous choisir ?
                </Typography>
                <Typography variant="body1" gutterBottom color="text.secondary" sx={{ maxWidth: { md: '700px' }, marginX: { xs: 'auto', md: 0 } }}>
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
                            <VerifiedOutlined color="success" />
                        </ListItemIcon>
                        <ListItemText primary="Chaque projet est unique" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <VerifiedOutlined color="success" />
                        </ListItemIcon>
                        <ListItemText primary="Solutions sur mesure." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon >
                            <VerifiedOutlined color="success" />
                        </ListItemIcon>
                        <ListItemText primary="Un espace qui vous est propre." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon >
                            <VerifiedOutlined color="success" />
                        </ListItemIcon>
                        <ListItemText primary="Réputation solide et recommandations positives." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon >
                            <VerifiedOutlined color="success" />
                        </ListItemIcon>
                        <ListItemText primary="Expertise et savoir-faire dans le domaine de la rénovation." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <VerifiedOutlined color="success" />
                        </ListItemIcon>
                        <ListItemText primary="Respect des délais, des budgets et des normes de qualité." />
                    </ListItem>
                </List>
                <ButtonLink
                    link="/devis"
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 3, width: { xs: '100%', md: '60%' } }}
                    aria-label="Demander un devis"
                    endIcon={<ArrowForwardIos />}
                >
                    Demander un devis
                </ButtonLink>
            </Box>
        </>
    )
}
export default RenderMobile