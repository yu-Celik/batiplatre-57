'use client'

import { AppBar, Container, Grid, Toolbar, Box, Button, useScrollTrigger } from "@mui/material"
import Logo from "../Logo"
import RenderMobileMenu from "@/app/components/header/mobile/RenderMobileMenu"
import RenderDesktopMenu from "@/app/components/header/desktop/RenderDesktopMenu"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material";
import { Slide } from "@mui/material"
import { ReactElement } from "react"

type Props = {
    window?: () => Window;
    children: ReactElement;
}


function Header() {

    return (
        <AppBar role="banner" sx={{ backgroundColor: 'background.default', zIndex: 1000 }}>
            <Toolbar component="nav">
                <Container maxWidth="lg">
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Logo sx={{ width: '48px', height: '48px' }} />
                        </Grid>
                        <Grid item sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'flex-end' }}>
                            <RenderDesktopMenu />
                            <RenderMobileMenu />
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Header