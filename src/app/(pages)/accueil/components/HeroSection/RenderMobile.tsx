import { Typography, List, ListItem, ListItemIcon, Box, Button, Card } from "@mui/material"
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { ArrowForwardIos } from "@mui/icons-material";
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
            <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: 2, position: 'relative' }} >
                <Typography variant="h1" component="h1" sx={{ lineHeight: 1.2 }} >
                    Transformez votre habitat
                </Typography>
                <FeatureList />
                <Button variant="contained" color="primary" endIcon={<ArrowForwardIos />} >
                    Demandez votre devis gratuit
                </Button>
                <Button variant="outlined" color="secondary" endIcon={<ArrowForwardIos />} sx={{ width: '100%', backgroundColor: 'background.default' }} >
                    Voir nos zones d&apos;intervention
                </Button>
            </Box>
            <Card sx={{ my: 2 }} >
                <Image src={villa} priority alt="belle villa avec piscine" />
            </Card>
        </>
    )
}

export default RenderMobile