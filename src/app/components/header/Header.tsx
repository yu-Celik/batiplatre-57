import { AppBar, Grid, Toolbar } from "@mui/material"
import Logo from "../Logo"
import { blue } from "@mui/material/colors"
import RenderMobileMenu from "./mobile/RenderMobileMenu"

type Props = {}
function Header({ }: Props) {
    return (
        <AppBar role="banner" sx={{ backgroundColor: 'background.default', zIndex: 1000 }}>
            <Toolbar component="nav">
                <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0' }}>
                    <Grid item>
                        <Logo sx={{ width: '48px', height: '48px', margin: '0rem 0 0rem 0.75rem' }} />
                    </Grid>
                    <Grid item sx={{ position: 'relative', zIndex: 1300 }}>
                        <RenderMobileMenu />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default Header