import { photos } from "@/app/data/galeriePhotos"
import GaleriePhotos from "./components/GaleriePhotos"
import { Box, Typography } from "@mui/material"
type Props = {}
function page({ }: Props) {
    return (
        <>
            <Box component="section" mb={{ xs: 8, md: 16 }} >
                <Typography variant="h1" textAlign="center" sx={{ textAlign: { xs: 'center' }, my: { xs: 0, md: 8} , mb: { xs: 4 } }}>
                    Nos réalisations
                </Typography>
                <GaleriePhotos photos={photos} />
            </Box>
        </>
    )
}
export default page