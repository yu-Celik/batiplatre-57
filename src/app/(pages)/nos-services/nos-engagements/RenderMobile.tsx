import SubtitleTitle from "@/app/components/SubtitleTitle"
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import homme_handcheck from "@/app/assets/homme_handcheck.png"
import Homme_handcheck_svg from "../components/homme_handcheck_svg"

type Props = {}
function RenderMobile({ }: Props) {
    return (
        <Box component="section">
            <Typography variant="h1" gutterBottom textAlign="center">
                Nos Services
            </Typography>
            <Box my={4}>
                <SubtitleTitle href="#" text="Promesse de qualité" sx={{ textAlign: 'center' }} />
                <Typography variant="h2" component="h3" sx={{ textAlign: 'center', mb: 4 }}>
                    Nos engagements
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Chez Bâti Plâtre 57, nous nous engageons à offrir une gamme complète de services de bâtiment pour répondre à tous vos besoins.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Découvrez ci-dessous nos prestations détaillées et laissez-nous transformer votre vision en réalité.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Homme_handcheck_svg />
            </Box>
        </Box>)
}
export default RenderMobile