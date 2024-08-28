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


function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children ?? <div />}
        </Slide>
    );
}
function Header(props: Props) {
    return (
        <>
            <HideOnScroll {...props}>
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
            </HideOnScroll>
        </>
    )
}

export default Header