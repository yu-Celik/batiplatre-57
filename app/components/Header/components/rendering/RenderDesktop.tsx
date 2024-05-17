'use client'
import { heightHeader } from '@/libs/theme';
import Grid from '@mui/material/Unstable_Grid2'; // Assurez-vous que ce composant est correctement importé.
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { LocalPhoneOutlined, EmailOutlined } from '@mui/icons-material';
import MenuAnimate from '@/components/Header/components/MenuAnimate'; // Assurez-vous que le chemin d'importation est correct.
import Link from 'next/link';
import { Fragment, useState } from 'react';
type Props = {
    pages: { label: string, path: string, display: string }[]
};

export default function RenderDesktop({ pages }: Props) {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const handleClickServices = () => {
        setIsServicesOpen(true);
    };
    const handleCloseServices = () => {
        setIsServicesOpen(false);
    };
    return (
        <Fragment>
            <Grid xs={0} sm={0} md={4} display={{ xs: 'none', md: 'flex' }} alignItems="center" minHeight={heightHeader} justifyContent="center">
                <Stack direction="row" position="relative" >
                    <MenuAnimate
                        isOpen={isServicesOpen}
                        pages={pages.map(page => ({ path: page.path, title: page.label }))}
                        title="Nos services"
                        ariaLabelNav="Menu des services secondaires"
                        ariaControlButton="menu-button"
                        labelledby="menu-button"
                        onMouseEnter={handleClickServices}
                        onMouseLeave={handleCloseServices}
                        onClick={handleClickServices}
                    />
                    <Button
                        component={Link}
                        href="/nos-partenaires"
                        sx={{
                            '&.MuiButtonBase-root': {
                                textAlign: 'center',
                                '&:hover': {
                                    // color: 'primary.main' // Utilisez des valeurs de thème directement.
                                }
                            }
                        }}
                        aria-label="Voir nos partenaires"
                    >
                        Nos partenaires
                    </Button>
                </Stack>
            </Grid>
            <Grid xs={0} sm={0} md={4.5} display={{ xs: 'none', md: 'flex' }} alignItems="center" justifyContent="flex-end" minHeight={heightHeader}>
                <Button
                    variant="contained"
                    sx={{ margin: 1 }}
                    href="tel:+1234567890"
                    startIcon={<LocalPhoneOutlined />}
                    aria-label="Appeler"
                    aria-controls="header"
                >
                    Appeler
                </Button>
                <Button
                    component={Link}
                    href="/contact"
                    variant="contained"
                    color="secondary"
                    sx={{ margin: 1 }}
                    startIcon={<EmailOutlined />}
                    aria-label="Prendre rendez-vous"
                    aria-controls="header"
                >
                    Prendre RDV
                </Button>
            </Grid>
        </Fragment>
    );
}