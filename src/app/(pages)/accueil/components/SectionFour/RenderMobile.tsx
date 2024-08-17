import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Button } from '@mui/material';
import paint_brunsh from '@/app/assets/paint_brunsh.png';
import square from '@/app/assets/square.png';
import star from '@/app/assets/star.png';
import trowel from '@/app/assets/trowel.png';
import broom from '@/app/assets/broom.png';
import { peintureImg, platerieImg, amenagementCombleImg, carrelageImg, poseDeSolImg } from "@/app/data/imagesSlideHome";

import Image from 'next/image';
import SubtitleTitle from '@/app/components/SubtitleTitle';
import Link from 'next/link';
import villa from './../../../../../../public/villa.png';

import EmblaCarousel, { EmblaCarouselWithTabs } from '@/app/components/Slider/EmblaCarousel';
import { ArrowForwardIos } from '@mui/icons-material';
import Insulation from './Insulation_svg';

type Props = {
}

const RenderMobile: React.FC<Props> = () => {
    return (
        <Box sx={{ padding: 2 }} component="section">
            <SubtitleTitle href="/nos-realisations" text="Nos réalisations" sx={{ textAlign: 'center' }} />
            <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>
                Découvrez nos projets
            </Typography>
            <Typography variant="body1">
                Nous offrons une gamme complète de services pour répondre à tous vos besoins en matière de rénovation et d&apos;aménagement.
            </Typography>
            <Paper sx={{
                marginY: 3,
                position: 'relative',
                overflow: 'hidden',
            }}>
                <List>
                    <Typography variant="body1" color="var(--mui-palette-secondary-light)" sx={{ textAlign: 'left', marginX: 2 }}>
                        Nous proposons :
                    </Typography>
                    <ListItem>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                            <Image src={trowel} alt="trowel" width={24} height={24} />
                        </ListItemIcon>
                        <Typography component={Link} href="/services" sx={{ color: 'var(--mui-palette-primary-light)' }}>
                            Plâtrerie et isolation
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                            <Image src={broom} alt="broom" width={24} height={24} />
                        </ListItemIcon>
                        <Typography component={Link} href="/services" sx={{ color: 'var(--mui-palette-primary-light)' }}>
                            Menuiserie et pose de sol
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                            <Image src={square} alt="square" width={24} height={24} />
                        </ListItemIcon>
                        <Typography component={Link} href="/services" sx={{ color: 'var(--mui-palette-primary-light)' }}>
                            Débarras et nettoyage
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                            <Image src={star} alt="star" width={24} height={24} />
                        </ListItemIcon>
                        <Typography component={Link} href="/services" sx={{ color: 'var(--mui-palette-primary-light)' }}>
                            Aménagement et décoration
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                            <Image src={paint_brunsh} alt="paint_brunsh" width={24} height={24} />
                        </ListItemIcon>
                        <Typography component={Link} href="/services" sx={{ color: 'var(--mui-palette-primary-light)' }}>
                            Peinture et carrelage
                        </Typography>
                    </ListItem>
                </List>
                <Box sx={{ position: 'absolute', bottom: -5, right: -5 }}>
                    <Insulation />
                </Box>
            </Paper>
            <Typography variant="body2" gutterBottom sx={{ textAlign: 'center', color: 'var(--mui-palette-secondary-light)' }}>
                Notre équipe de professionnels est à votre disposition pour transformer vos espaces selon vos envies.
            </Typography>
            <EmblaCarouselWithTabs />
            <Button variant="contained" color="primary" fullWidth sx={{ marginY: 3 }} endIcon={<ArrowForwardIos />}>
                Voir toutes nos réalisations
            </Button>
        </Box>
    );
}

export default RenderMobile;