import ButtonLink from "@/app/components/ButtonLink"
import SubtitleTitle from "@/app/components/SubtitleTitle"
import { ArrowForwardIos } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"

type Props = {}
function RenderMobile({ }: Props) {
    return (
        <>
            <Box component="section" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', my: { xs: 8, md: 16 } }}>
                <SubtitleTitle text="Expertise Complète en Bâtiment" href="#" sx={{ textAlign: 'center' }} />
                <Typography variant="h2" sx={{ textAlign: 'center', mb: 4 }}>Nos services</Typography>
                <Typography textAlign="center" maxWidth={700}>
                    Notre mission est de fournir des services de haute qualité tout en restant abordables. Nous sommes conscients de l&apos;importance de trouver un équilibre entre la qualité et le prix, et nous nous engageons à offrir les meilleurs produits au meilleur prix possible.
                </Typography>
                <ButtonLink
                    link="/nos-services"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, width: { xs: '100%', md: '45%' } }}
                    endIcon={<ArrowForwardIos />}
                >
                    Découvrez nos services complets
                </ButtonLink>
            </Box>
        </>
    )
}
export default RenderMobile