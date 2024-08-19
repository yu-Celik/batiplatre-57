import SubtitleTitle from "@/app/components/SubtitleTitle"
import { Box, Typography, Card, CardMedia } from "@mui/material"
import Image from "next/image"
import businessHandshake from "/public/business-handshake.png"

type Props = {}
function RenderMobile({ }: Props) {
    return (
        <>
            <Box component="section" sx={{ marginY: 8 }} aria-labelledby="section-title">
                <SubtitleTitle href="#" text="Ce Que Disent Nos Clients" sx={{ textAlign: 'center' }} />
                <Typography variant="h2" color="text.primary" sx={{ textAlign: 'center', marginBottom: 4 }}>
                    Témoignages
                </Typography>
                <Typography variant="body1" gutterBottom color="text.secondary">
                    Nos clients apprécient notre attention aux détails et notre capacité à répondre à leurs attentes.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Leur satisfaction totale est notre plus grande fierté et la preuve de notre engagement envers l&apos;excellence.
                </Typography>
                <Card sx={{ marginTop: 4 }}>
                    <Image
                        alt="Poignée de main"
                        src={businessHandshake}
                        title="Poignée de main"
                    />
                </Card>
            </Box>
        </>
    )
}
export default RenderMobile