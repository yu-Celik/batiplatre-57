import SubtitleTitle from "@/app/components/SubtitleTitle"
import { Box, Paper, Typography } from "@mui/material"
import Image from "next/image"
import maison from "/public/maison_.png"
type Props = {}
function RenderMobile({ }: Props) {
    return (
        <>
            <Paper component="section" sx={{ paddingY: 4, paddingX: 2, mt: { xs: 8, md: 16 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center' }}>
                <Box>
                    <SubtitleTitle text="Une Tradition Familiale" href="#" sx={{ textAlign: { xs: 'center', md: 'left' } }} />
                    <Typography variant="h2" sx={{ textAlign: { xs: 'center', md: 'left' }, marginBottom: 4 }}>
                        Notre histoire
                    </Typography>
                    <Typography gutterBottom>
                        J&apos;ai hérité de ce savoir-faire de mon père, perpétuant ainsi l&apos;expertise et la passion pour le bâtiment au sein de notre entreprise familiale.
                    </Typography>
                    <Typography gutterBottom>
                        Au fil des années, cette transmission de connaissances et de compétences a façonné notre réputation et notre succès.
                    </Typography>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '70%' } }}>
                    <Image
                        src={maison}
                        alt="maison"
                        width={540}
                        height={360}
                        priority
                        style={{ width: '100%', height: 'auto', borderRadius: 'var(--mui-shape-borderRadius)', boxShadow: 'var(--mui-shadows-3)', marginTop: '1rem' }}
                    />
                </Box>
            </Paper>
        </>
    )
}
export default RenderMobile