import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Box, Button } from "@mui/material"
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import BatimentImg from "./BatimentImg"
import styles from './RenderMobile.module.css'
import { ArrowForwardIos } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import villa from '/public/villa.png';
const features = [
    <>Travaux de <i>Rénovation Complète</i> à <i>Metz</i></>,
    <>Entreprise <i>RGE</i> | <i>Haute Qualité</i> | <i>Metz & Moselle</i></>,
    <><i>Devis gratuit</i> sous 48h</>
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
        <>
            <Container component="section" sx={{ display: 'flex', flexDirection: 'column', gap: 2, position: 'relative'}} >
                <Typography variant="h1" component="h1" sx={{ lineHeight: 1.2 }} >
                    Transformez Votre Habitat à <i>Metz</i>
                </Typography>
                <Typography variant="body1" component="p" >
                    <Typography component={Link} sx={{ color: 'primary.light' }} href="/platrerie">Platrerie</Typography>, <Typography component={Link} sx={{ color: 'primary.light' }} href="/isolation">Isolation</Typography>, <Typography component={Link} sx={{ color: 'primary.light' }} href="/carrelage">Carrelage</Typography>, <Typography component={Link} sx={{ color: 'primary.light' }} href="/peinture">Peinture</Typography>, <Typography component={Link} sx={{ color: 'primary.light' }} href="/menuiserie">Menuiserie</Typography>, <Typography component={Link} sx={{ color: 'primary.light' }} href="/pose-de-sol">Pose de sol</Typography>.
                </Typography>
                <FeatureList />
                <Button variant="contained" color="primary" endIcon={<ArrowForwardIos />} sx={{ width: '100%' }} >
                    Demandez votre devis gratuit
                </Button>
                <Button variant="outlined" color="secondary" endIcon={<ArrowForwardIos />} sx={{ width: '100%', backgroundColor: 'background.default' }} >
                    Voir nos zones d&apos;intervention
                </Button>
                <Box sx={{ position: 'absolute', bottom: -5, right: -50, zIndex: -1 }} >
                    <BatimentImg />
                </Box>
            </Container>
            <Image src={villa} priority alt="belle villa avec piscine" />
        </>
    )
}

export default RenderMobile