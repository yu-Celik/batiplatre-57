'use client'
import { AssignmentOutlined, EmailOutlined, LocalPhoneOutlined } from "@mui/icons-material";
import { AppBar, Button, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Link from "next/link";

const FooterFixed = () => {
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <AppBar
            position="sticky"
            sx={{ top: 'auto', bottom: 0, display: { md: 'none' } }}
            aria-label="Barre de navigation inférieure"
        >
            <Toolbar
                component={Grid}
                container
                sx={{
                    py: 1,
                    display: 'flex',
                    alignItems: 'center',
                    ...(isSmUp ? { gap: 0, justifyContent: 'center' } : { gap: 0.5, justifyContent: 'space-evenly' }),
                    '& .MuiButtonBase-root': {
                        textAlign: 'center',
                        ...(isSmUp ? { margin: 1, width: '100%' } : { margin: 0, width: 'min-content' })
                    }
                }}
            >
                <Grid sm={4} sx={{ display: 'flex', flexDirection: isSmUp ? 'row' : 'column', alignItems: 'center', }}>
                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        href="tel:+1234567890"
                        aria-label="Appeler"
                        {...(isSmUp ? { startIcon: <LocalPhoneOutlined /> } : {})}
                    >
                        {isSmUp ? "Appeler" : <LocalPhoneOutlined />}
                    </Button>
                </Grid>
                <Grid sm={4} sx={{ display: 'flex', flexDirection: isSmUp ? 'row' : 'column', alignItems: 'center', }}>
                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        component={Link}
                        href={'/contact'}
                        aria-label="Prendre rendez-vous"
                        {...(isSmUp ? { startIcon: <EmailOutlined /> } : {})}
                    >
                        {isSmUp ? "Prendre RDV" : <EmailOutlined />}
                    </Button>
                </Grid>
                <Grid sm={4} sx={{ display: 'flex', flexDirection: isSmUp ? 'row' : 'column', alignItems: 'center', }}>
                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        component={Link}
                        href={'/demander-un-devis'}
                        aria-label="Demander un devis"
                        {...(isSmUp ? { startIcon: <AssignmentOutlined /> } : {})}
                    >
                        {isSmUp ? "DEMANDER UN DEVIS" : <AssignmentOutlined />}
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default FooterFixed;

