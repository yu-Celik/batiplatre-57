import { Typography, List, ListItem, ListItemIcon, Box, Paper, SxProps } from "@mui/material"
import VerifiedOutlined from '@mui/icons-material/VerifiedOutlined';
import { ArrowForwardIos } from "@mui/icons-material";
import Image, { StaticImageData } from "next/image";
import villa from '/public/villa.png';
import ButtonLink from "@/app/components/ButtonLink";
import handCheck from '@/app/assets/hand_check.png';
import docWrite from '@/app/assets/doc_write.png';
import plan from '@/app/assets/plan.png';


const features = [
    <>Travaux de <i>rénovation complète</i> à <i>Metz</i></>,
    <>17 ans d&apos;expérience</>,
    <><i>Devis gratuit</i> sous 48h</>
];

function FeatureList() {
    return (
        <List sx={{ p: 0 }} >
            {features.map((feature, index) => (
                <ListItem key={index} disableGutters >
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                        <VerifiedOutlined color="success" aria-hidden="true" />
                    </ListItemIcon>
                    <Typography variant="body1" component="p" sx={{ fontSize: { xs: '0.875rem', md: '1rem', lg: '1.125rem' } }} >
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
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, position: 'relative', marginTop: { xs: 0, md: 16 }, gap: { xs: 0, md: 4 } }} >
                <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: 2, position: 'relative', flex: 1.25 }} >
                    <Typography variant="h1" component="h1" >
                        Transformez votre habitat
                    </Typography>
                    <FeatureList />
                    <ButtonLink link="/devis" variant="contained" color="primary" endIcon={<ArrowForwardIos />} sx={{ width: { xs: '100%', md: '50%' } }} >
                        Demandez votre devis gratuit
                    </ButtonLink>
                    <ButtonLink link="/zones-intervention" variant="outlined" color="secondary" endIcon={<ArrowForwardIos />} sx={{ width: { xs: '100%', md: '50%' }, backgroundColor: 'background.default' }} >
                        Voir nos zones d&apos;intervention
                    </ButtonLink>
                </Box>
                <Box sx={{ marginTop: '1rem', width: '100%', height: 'auto', flex: 0.9, alignSelf: 'center', position: 'relative' }} >
                    <CardDecor src={handCheck} alt="belle villa avec piscine" title="8400" description="Clients satisfaits" sx={{
                        position: 'absolute',
                        top: 0,
                        right: 20,
                        transform: 'translateY(-50%)',
                    }} />

                    <CardDecor src={docWrite} alt="belle villa avec piscine" title="124" description="Projets réalisés" sx={{
                        position: 'absolute',
                        top: 0,
                        transform: 'translateY(125%) translateX(-50%)',
                    }} />

                    <CardDecor src={plan} alt="belle villa avec piscine" title="17 ans" description="D'expérience" sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        transform: 'translateX(125%) translateY(50%)',
                    }} />

                    <Image src={villa} width={540} height={350} blurDataURL={villa.blurDataURL} priority alt="belle villa avec piscine" style={{
                        borderRadius: 'var(--mui-shape-borderRadius)',
                        boxShadow: 'var(--mui-shadows-3)',
                        width: '100%',
                        height: 'auto'
                    }} />
                </Box>
            </Box>
        </>
    )
}

const CardDecor = ({ src, alt, title, description, sx }: { src: StaticImageData, alt: string, title: string, description: string, sx: SxProps }) => {
    return (

        <Paper sx={{ position: 'absolute', padding: 2, height: 'auto', display: { xs: 'none', md: 'block' }, ...sx }}>
            <Typography variant="body1" sx={{ fontSize: '1.5rem', fontWeight: 600 }} >
                {title}
            </Typography>
            <Typography variant="caption" sx={{ fontSize: '0.875rem', borderLeft: '2px solid var(--mui-palette-primary-main)', pl: 1 }} >
                {description}
            </Typography>
            <Image src={src} alt={alt} width={60} height={60} quality={100} style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(50%, -50%)' }} />
        </Paper>
    )
}

export default RenderMobile