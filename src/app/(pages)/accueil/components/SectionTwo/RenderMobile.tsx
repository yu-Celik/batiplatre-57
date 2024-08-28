import { Button, Paper, Stack, Typography, SxProps, Box, Container } from "@mui/material"
import Image, { StaticImageData } from "next/image"
import service from '@/app/assets/service.png';
import { ArrowForwardIos } from "@mui/icons-material";
import SubtitleTitle from "@/app/components/SubtitleTitle";
import ButtonLink from "@/app/components/ButtonLink";
import plan from '@/app/assets/plan.png';

type Props = { sx?: SxProps }
function RenderMobile({ sx }: Props) {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                marginBottom: { xs: 8, md: 16 },
            }}>
                <Paper component="section" elevation={3} sx={{
                    paddingY: 4,
                    paddingX: { xs: 2, md: 4 },
                    paddingRight: { md: 12 },
                    borderRadius: 'var(--mui-shape-borderRadius)',
                    maxWidth: { md: '60%', xs: '100%', lg: '50%' },
                    ...sx
                }}>
                    <Stack direction="column" justifyContent="center" alignItems="start">
                        <SubtitleTitle href="/nos-services" text="Nos Services à Metz" />
                        <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '1.25rem' }, lineHeight: { xs: '2rem' } }}>
                            <Image src={service} alt="Rénovation / Extension" width={32} height={32} style={{ display: 'inline-block' }} />
                            Rénovation / Extension
                        </Typography>
                    </Stack>
                    <Typography variant="body1" gutterBottom>
                        Améliorez l&apos;isolation thermique et acoustique de votre maison à Metz. Nos travaux d&apos;isolation et de plâtrerie assurent confort et efficacité énergétique. Proposez un espace de vie propre grâce à nos services de débarras et nettoyage.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        Faites appel à notre expertise pour la pose de sols et la menuiserie sur mesure. Transformez votre intérieur avec nos services d&apos;aménagement et décoration. Nous concevons des espaces de vie personnalisés, répondant à vos envies et besoins.
                    </Typography>

                    <Typography variant="body1" gutterBottom sx={{ color: 'var(--mui-palette-secondary-light)' }}>
                        Offrez une nouvelle vie à votre logement avec nos prestations de peinture et pose de carrelage. Nous proposons des solutions adaptées pour la rénovation de vos murs, sols, et salles de bains, avec des matériaux de haute qualité.
                    </Typography>
                    <ButtonLink
                        link="/nos-services"
                        variant="outlined"
                        color="primary"
                        endIcon={<ArrowForwardIos />}
                        fullWidth
                    >
                        Découvrez nos services complets
                    </ButtonLink>
                </Paper >
                <Container component="section" sx={{
                    position: { xs: 'relative', lg: 'absolute' },
                    right: { md: 0 },
                    padding: { xs: 0 },
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: { xs: 'center', lg: 'flex-end' },
                    width: { lg: '60%', md: '40%', xs: '100%' },
                    marginTop: { xs: 8, md: 0 },
                }}>
                    <CardDetails src={plan} alt="Plan d'ecriture" title="Installer & Finir" description="Installation précise et finitions de haute qualité pour chaque détail." sx={{}} />
                    <CardDetails src={plan} alt="Rénovation / Extension" title="Peindre & Revêtir" description="Application experte de peintures et revêtements pour transformer votre espace." sx={{}} />
                    <CardDetails src={plan} alt="Rénovation / Extension" title="Nettoyer & Préparer" description="Préparation et nettoyage post-chantier pour un espace impeccable." sx={{}} />
                    <CardDetails src={plan} alt="Rénovation / Extension" title="Concevoir & Isoler" description="Des solutions sur mesure pour optimiser votre espace et confort." sx={{}} />
                </Container>
            </Box>
        </>
    )
}

const CardDetails = ({ src, alt, title, description, sx }: { src: StaticImageData, alt: string, title: string, description: string, sx: SxProps }) => {
    return (
        <Paper
            component="article"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                aspectRatio: '16 / 9',
                width: '100%',
                maxWidth: '300px',
                overflow: 'hidden',
                paddingY: 1,
                paddingX: 2,
                ...sx
            }}
        >
            <Image src={src} alt={alt} width={62} height={62} quality={100} style={{ display: 'inline-block', marginBottom: 12 }} />
            <Typography variant="body1" variantMapping={{ body1: 'h2' }}>{title}</Typography>
            <Typography variant="body2" textAlign="center" gutterBottom>{description}</Typography>
        </Paper>
    )
}
export default RenderMobile