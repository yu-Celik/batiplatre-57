'use client'

import { AppBar, Container, Grid, Toolbar, Box, Button } from "@mui/material"
import Logo from "../Logo"
import RenderMobileMenu from "@/app/components/header/mobile/RenderMobileMenu"
import RenderDesktopMenu from "@/app/components/header/desktop/RenderDesktopMenu"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material";

function Header() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <AppBar role="banner" sx={{ backgroundColor: 'background.default', zIndex: 1000 }}>
            <Toolbar component="nav">
                <Container maxWidth="lg">
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Logo sx={{ width: '48px', height: '48px' }} />
                        </Grid>
                        <Grid item>
                            {isDesktop ? (
                                <RenderDesktopMenu />
                            ) : (
                                <RenderMobileMenu />
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Header