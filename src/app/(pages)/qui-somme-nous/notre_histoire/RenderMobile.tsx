import SubtitleTitle from "@/app/components/SubtitleTitle"
import { Card, Paper, Typography } from "@mui/material"
import Image from "next/image"
import maison from "/public/maison_.png"
type Props = {}
function RenderMobile({ }: Props) {
    return (
        <>
            <Paper component="section" sx={{ paddingY: 4, paddingX: 2, mt: 8 }}>
                <SubtitleTitle text="Une Tradition Familiale" href="#" sx={{ textAlign: 'center' }} />
                <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: 4 }}>
                    Notre histoire
                </Typography>
                <Typography gutterBottom>
                    J&apos;ai hérité de ce savoir-faire de mon père, perpétuant ainsi l&apos;expertise et la passion pour le bâtiment au sein de notre entreprise familiale.
                </Typography>
                <Typography gutterBottom>
                    Au fil des années, cette transmission de connaissances et de compétences a façonné notre réputation et notre succès.
                </Typography>
                <Card>
                    <Image
                        src={maison}
                        alt="maison"
                        height="300"
                    />
                </Card>
            </Paper>
        </>
    )
}
export default RenderMobile