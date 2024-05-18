import { AssignmentOutlined, EmailOutlined, LocalPhoneOutlined } from "@mui/icons-material";
import { AppBar, Button, Toolbar } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Link from "next/link";

const FooterFixed = () => {
    return (
        <AppBar
            position="fixed"
            sx={{ top: 'auto', bottom: 0, display: { md: 'none' } }}
            aria-label="Barre de navigation inférieure"
        >
            <Toolbar
                component={Grid}
                container
                spacing={{ xs: 0, sm: 2 }}
                sx={{
                    py: { xs: 0, sm: 2 },
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 0.5, sm: 0 },
                    justifyContent: { xs: 'space-evenly', sm: 'center' },
                    '& .MuiButtonBase-root': {
                        textAlign: 'center',
                        fontSize: '0.875rem',
                        margin: { xs: 1, sm: 0 },
                        width: { xs: 'min-content', sm: '100%' },
                    }
                }}
            >
                <Grid sm={4} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', }}>
                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        href="tel:+1234567890"
                        aria-label="Appeler"
                        size="large"
                    >
                        <LocalPhoneOutlined sx={{ mr: 0.5, fontSize: '1.25rem' }} />
                        <span className="hidden sm:block">Appeler</span>
                    </Button>
                </Grid>
                <Grid sm={4} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', }}>
                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        component={Link}
                        href={'/contact'}
                        aria-label="Prendre rendez-vous"
                        size="large"
                    >
                        <EmailOutlined sx={{ mr: 0.5, fontSize: '1.25rem' }} />
                        <span className="hidden sm:block">Prendre RDV</span>
                    </Button>
                </Grid>
                <Grid sm={4} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', }}>
                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        component={Link}
                        href={'/demander-un-devis'}
                        aria-label="Demander un devis"
                        size="large"
                    >
                        <AssignmentOutlined sx={{ mr: 0.5, fontSize: '1.25rem' }} />
                        <span className="hidden sm:block">Devis</span>
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default FooterFixed;

