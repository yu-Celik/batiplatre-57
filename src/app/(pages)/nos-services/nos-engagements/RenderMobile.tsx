import SubtitleTitle from "@/app/components/SubtitleTitle"
import { Box, Typography } from "@mui/material"
import Homme_handcheck_svg from "../components/homme_handcheck_svg"

type Props = {}
function RenderMobile({ }: Props) {
    return (
        <Box component="section" >
            <Typography variant="h1" gutterBottom sx={{ textAlign: { xs: 'center' }, mt: { md: 8 } }}>
                Nos Services
            </Typography>
            <Box sx={{ mt: { xs: 0, md: 16 }, gap: { xs: 0, md: 4 } }}>
                <SubtitleTitle href="#" text="Promesse de qualité" sx={{ textAlign: { xs: 'center', md: 'left' } }} />
                <Typography variant="h2" sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 2, md: 4 } }}>
                    Nos engagements
                </Typography>
                <Typography variant="body1" gutterBottom maxWidth={{ md: '700px' }}>
                    Chez Bâti Plâtre 57, nous nous engageons à offrir une gamme complète de services de bâtiment pour répondre à tous vos besoins.
                </Typography>
                <Typography variant="body1" gutterBottom maxWidth={{ md: '700px' }}>
                    Découvrez ci-dessous nos prestations détaillées et laissez-nous transformer votre vision en réalité.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Homme_handcheck_svg />
            </Box>
        </Box>
    )
}
export default RenderMobile