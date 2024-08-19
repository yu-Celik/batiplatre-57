import SubtitleTitle from "@/app/components/SubtitleTitle"
import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material"
import Image from 'next/image';
import symbols_lightbulb from '@/app/assets/material-symbols_lightbulb-outline.png';
import symbols_map from '@/app/assets/material-symbols_map-outline.png';
import mdi_comments from '@/app/assets/mdi_comments-outline.png';
import tabler_zoom from '@/app/assets/tabler_zoom-exclamation.png';
import fluent_mdl2 from '@/app/assets/fluent-mdl2_bullseye.png';
import { ArrowForwardIos } from "@mui/icons-material";

type Props = {}

function RenderMobile({ }: Props) {
    return (
        <>
            <SubtitleTitle href="/notre-processus-de-realisation" text="NOTRE PROCESSUS DE RÉALISATION" sx={{ textAlign: 'center', mt: 8 }} />
            <Typography variant="h2" color="text.primary" sx={{ textAlign: 'center' }}>
                Les étapes de votre projet
            </Typography>
            <Paper elevation={3} sx={{ padding: 1.5, my: 4, borderRadius: 'var(--mui-shape-borderRadius)' }}>
                <Typography variant="h6" color="text.primary" sx={{ marginBottom: 0.5 }}>
                    Planification Initiale
                </Typography>
                <Typography variant="body2" color="secondary.main" sx={{ marginBottom: 0.75 }}>
                    La première étape vers la réussite
                </Typography>
                <List>
                    {[

                        { icon: mdi_comments, alt: "comments", text: "Consultation détaillée pour comprendre vos besoins et attentes" },
                        { icon: fluent_mdl2, alt: "bullseye", text: "Discussion de vos objectifs" },
                        { icon: tabler_zoom, alt: "zoom", text: "Évaluation des contraintes" },
                        { icon: symbols_lightbulb, alt: "lightbulb", text: "Proposition de solutions personnalisées" },
                        { icon: symbols_map, alt: "map", text: "Établissement d'un plan solide pour guider toutes les phases suivantes du projet" },
                    ].map((item, index) => (
                        <ListItem key={index} sx={{ padding: '4px 0' }}>
                            <ListItemIcon sx={{ minWidth: 32, color: 'primary.main' }}>
                                <Image src={item.icon} alt={item.alt} width={24} height={24} />
                            </ListItemIcon>
                            <ListItemText primary={item.text} primaryTypographyProps={{ variant: 'body2' }} />
                        </ListItem>
                    ))}
                </List>
                <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<ArrowForwardIos />}
                    sx={{ mt: 0.5 }}
                    fullWidth
                >
                    Découvrez notre processus complet
                </Button>
            </Paper>
        </>
    )
}

export default RenderMobile