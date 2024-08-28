import SubtitleTitle from "@/app/components/SubtitleTitle"
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import businessHandshake from "/public/business-handshake.png"

type Props = {}
function RenderMobile({ }: Props) {
    return (
        <>
            <Box component="section" sx={{ marginY: { xs: 8, md: 16 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }} aria-labelledby="section-title">
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <SubtitleTitle href="#" text="Ce Que Disent Nos Clients" sx={{ textAlign: { xs: 'center', md: 'left' } }} />
                    <Typography variant="h2" color="text.primary" sx={{ textAlign: { xs: 'center', md: 'left' }, marginBottom: 4 }}>
                        Témoignages
                    </Typography>
                    <Typography variant="body1" gutterBottom color="text.secondary">
                        Nos clients apprécient notre attention aux détails et notre capacité à répondre à leurs attentes.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Leur satisfaction totale est notre plus grande fierté et la preuve de notre engagement envers l&apos;excellence.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: { xs: '100%', md: '90%' } }}>
                    <Image
                        src={businessHandshake}
                        alt="Poignée de main"
                        style={{ width: '100%', height: 'auto', borderRadius: 'var(--mui-shape-borderRadius)', boxShadow: 'var(--mui-shadows-3)', marginTop: '1rem' }}
                    />
                </Box>
            </Box >
        </>
    )
}
export default RenderMobile