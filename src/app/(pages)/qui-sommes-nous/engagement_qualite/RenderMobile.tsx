import { Box, Typography, List, ListItem, ListItemIcon, Paper, Button } from '@mui/material';
import paint_brunsh from '@/app/assets/paint_brunsh.png';
import square from '@/app/assets/square.png';
import star from '@/app/assets/star.png';
import trowel from '@/app/assets/trowel.png';
import broom from '@/app/assets/broom.png';
import Image from 'next/image';
import SubtitleTitle from '@/app/components/SubtitleTitle';
import Link from 'next/link';
import { ArrowForwardIos } from '@mui/icons-material';
import Insulation from '@/app/components/Insulation_svg';
import ButtonLink from '@/app/components/ButtonLink';

type Props = {
}


const RenderMobile: React.FC<Props> = () => {
    return (
        <Box component="section" display={{ xs: 'block', md: 'none' }}>
            <SubtitleTitle href="/nos-realisations" text="Nos réalisations" sx={{ textAlign: 'center' }} />
            <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: 4 }}>
                Engagement et Qualité
            </Typography>
            <Typography variant="body1" gutterBottom>
                Chez Bâti Plâtre 57, nous nous engageons à fournir des services de haute qualité qui répondent aux besoins spécifiques de chaque client.
            </Typography>
            <Typography variant="body1" color="var(--mui-palette-secondary-light)">
                Nous mettons tout en œuvre pour garantir votre satisfaction et réaliser vos projets avec excellence.
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
                Chaque projet est une opportunité pour nous de démontrer notre expertise
            </Typography>
            <ButtonLink
                link="/nos-realisations"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 3 }}
                endIcon={<ArrowForwardIos />}
            >
                Voir toutes nos réalisations
            </ButtonLink>
        </Box>
    );
}

export default RenderMobile;