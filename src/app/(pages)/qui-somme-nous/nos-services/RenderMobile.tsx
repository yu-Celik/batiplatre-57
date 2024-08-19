import SubtitleTitle from "@/app/components/SubtitleTitle"
import { ArrowForwardIos } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"

type Props = {}
function RenderMobile({ }: Props) {
    return (
        <>
            <Box component="section" marginY={8}>
                <SubtitleTitle text="Expertise Complète en Bâtiment" href="#" sx={{ textAlign: 'center' }} />
                <Typography variant="h2" sx={{ textAlign: 'center', mb: 4 }}>Nos services</Typography>
                <Typography textAlign="center" >
                    Notre mission est de fournir des services de haute qualité tout en restant abordables. Nous sommes conscients de l&apos;importance de trouver un équilibre entre la qualité et le prix, et nous nous engageons à offrir les meilleurs produits au meilleur prix possible.
                </Typography>
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }} endIcon={<ArrowForwardIos />}>
                    Découvrez nos services complets
                </Button>
            </Box>
        </>
    )
}
export default RenderMobile