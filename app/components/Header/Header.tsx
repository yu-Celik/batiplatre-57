import { AppBar, Toolbar, CircularProgress } from '@mui/material';
import HideOnScroll from 'components/Header/components/Slide';
import Grid from '@mui/material/Unstable_Grid2';
import LogoBatiPlatre from 'components/Logo/LogoBatiPlatre';
import { heightHeader } from 'libs/theme';
import dynamic from 'next/dynamic';
import ModeToggle from '../Switcher/Switcher';
// import RenderMobile from 'components/Header/components/rendering/RenderMobile';
// import RenderTablet from 'components/Header/components/rendering/RenderTablet';
// import RenderDesktop from 'components/Header/components/rendering/RenderDesktop';

const RenderMobile = dynamic(() => import('./components/rendering/RenderMobile'), {
    loading: () => <CircularProgress />
})
const RenderTablet = dynamic(() => import('./components/rendering/RenderTablet'), {
    loading: () => <CircularProgress />
})
const RenderDesktop = dynamic(() => import('./components/rendering/RenderDesktop'), {
    loading: () => <CircularProgress />
})


const pages = [
    { label: 'Débarras & Néttoyage ', path: '/debarras-et-nettoyage', display: 'sm' },
    { label: 'Plâtrerie & Isolation ', path: '/platrerie-et-isolation', display: 'sm' },
    { label: 'Aménagement & Décoration', path: '/amenagement-decoration-interieur', display: 'sm' },
    { label: 'Peinture', path: '/peinture', display: 'sm' },
    { label: 'Pose de sol', path: '/pose-de-sol', display: 'sm' },
    { label: 'Nos Partenaires ', path: '/nos-partenaires', display: 'md' },
    { label: 'Nos services', path: '/nos-services', display: 'md' }
];
type Props = {};

export default function Header({ }: Props) {
    return (
        <>
            <HideOnScroll>
                <AppBar role="banner" sx={{ zIndex: 1000 }}>
                    <Toolbar
                        component={'nav'}
                        sx={{
                            transition: 'all .3s ease-in-out',
                            paddingY: '0.5rem',
                            justifyContent: { md: 'center' }
                        }}>
                        <Grid container width={'100%'} maxWidth={1200} role="navigation" aria-label="Navigation principale" >
                            <Grid xs={10} sm={12} md={3.5} id={'logo-container'} justifyContent={{ xs: 'flex-start', sm: 'center', md: 'flex-start' }}>
                                <LogoBatiPlatre sx={{ width: 'auto', height: heightHeader }} />
                            </Grid>
                            <ModeToggle />

                            <RenderMobile pages={pages.filter(page => page.display === 'sm')} />
                            <RenderTablet pages={pages.filter(page => page.display === 'sm')} />
                            <RenderDesktop pages={pages.filter(page => page.display === 'sm')} />
                        </Grid>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    );
}
