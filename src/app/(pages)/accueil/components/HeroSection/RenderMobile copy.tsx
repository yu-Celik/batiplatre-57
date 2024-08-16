import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Box, Button } from "@mui/material"
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import BatimentImg from "./BatimentImg"
import styles from './RenderMobile.module.css'

const features = [
    <>Travaux de <i>Rénovation Complète</i> à <i>Metz</i></>,
    <>Entreprise <i>RGE</i> | <i>Haute Qualité</i> | <i>Metz & Moselle</i></>,
    <><i>Devis gratuit</i> sous 48h et bénéficiez d&apos;un <i>accompagnement personnalisé</i> de A à Z.</>
];

function FeatureList() {
    return (
        <List sx={{ p: 0 }} >
            {features.map((feature, index) => (
                <ListItem key={index} disableGutters >
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                        <VerifiedOutlinedIcon color="success" aria-hidden="true" />
                    </ListItemIcon>
                    <Typography variant="body1" component="p" sx={{ fontSize: '0.875rem' }} >
                        {feature}
                    </Typography>
                </ListItem>
            ))}
        </List>
    );
}

function RenderMobile() {
    return (
        <Container component="section" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} >
            <Typography variant="h1" component="h1" sx={{ lineHeight: 1.2 }} >
                <span className="text-sm"><i>Entreprise de Rénovation à Metz - </i> </span>
                <i>Transformez</i> Votre <span style={{ color: 'var(--mui-palette-primary-main)' }}>Habitat</span>
            </Typography>
            <Typography variant="body1" component="p" >
                <i>Entreprise de rénovation</i> à <i>Metz</i>, spécialisée en <i>agencement intérieur</i>, <i>isolation thermique</i>, <i>pose de carrelage</i>, <i>rénovation de salles de bains</i>, <i>toiture</i>, <i>maçonnerie</i>, <i>plomberie</i>, et <i>peinture</i>.
            </Typography>
            <FeatureList />
            <Button variant="contained" color="primary" sx={{ width: '100%' }} >
                Demandez votre devis gratuit sous 48h
            </Button>
            <Box >
                <BatimentImg />
            </Box>
        </Container>
    )
}

export default RenderMobile