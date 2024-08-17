import { Button, Paper, Stack, Typography } from "@mui/material"
import Image from "next/image"
import service from '@/app/assets/service.png';
import { ArrowForwardIos } from "@mui/icons-material";
import SubtitleTitle from "@/app/components/SubtitleTitle";
type Props = {}
function RenderMobile({ }: Props) {
    return (
        <>
            <Paper component="section" elevation={3} sx={{
                paddingY: 4,
                paddingX: 2,
                borderRadius: 'var(--mui-shape-borderRadius)',
                marginBottom: 8
            }}>
                <Stack direction="column" justifyContent="center" alignItems="start">
                    <SubtitleTitle href="/services" text="Nos Services à Metz" />
                    <Typography variant="h2" textAlign="left" gutterBottom sx={{ fontSize: { xs: '1.25rem' }, lineHeight: { xs: '2rem' } }}>
                        <Image src={service} alt="Rénovation / Extension" width={32} height={32} style={{ display: 'inline-block' }} />
                        Rénovation / Extension
                    </Typography>
                </Stack>
                <Typography variant="body1" textAlign="left" gutterBottom>
                    Améliorez l&apos;isolation thermique et acoustique de votre maison à Metz. Nos travaux d&apos;isolation et de plâtrerie assurent confort et efficacité énergétique. Proposez un espace de vie propre grâce à nos services de débarras et nettoyage.
                </Typography>

                <Typography variant="body1" textAlign="left" gutterBottom>
                    Faites appel à notre expertise pour la pose de sols et la menuiserie sur mesure. Transformez votre intérieur avec nos services d&apos;aménagement et décoration. Nous concevons des espaces de vie personnalisés, répondant à vos envies et besoins.
                </Typography>

                <Typography variant="body1" textAlign="left" gutterBottom sx={{ color: 'var(--mui-palette-secondary-light)' }}>
                    Offrez une nouvelle vie à votre logement avec nos prestations de peinture et pose de carrelage. Nous proposons des solutions adaptées pour la rénovation de vos murs, sols, et salles de bains, avec des matériaux de haute qualité.
                </Typography>
                <Button variant="outlined" color="primary" endIcon={<ArrowForwardIos />} sx={{ width: '100%' }}>
                    Découvrez nos services complets
                </Button>
            </Paper >
        </>
    )
}
export default RenderMobile