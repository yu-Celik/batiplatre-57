import { Button, Paper, Stack, Typography, SxProps, Box, Container } from "@mui/material"
import Image, { StaticImageData } from "next/image"
import service from '@/app/assets/service.png';
import { ArrowForwardIos } from "@mui/icons-material";
import SubtitleTitle from "@/app/components/SubtitleTitle";
import ButtonLink from "@/app/components/ButtonLink";
import plan from '@/app/assets/plan.png';
import { Handshake, Calculate, AssignmentTurnedIn, Headset } from '@mui/icons-material';

type Props = { sx?: SxProps }

/**
 * Composant pour afficher la section des services sur mobile.
 * Ce composant est conçu pour être accessible et conforme aux normes WCAG.
 */
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
                            <Image src={service} alt="Construction, Rénovation, Extension" width={32} height={32} style={{ display: 'inline-block' }} />
                            Construction, Rénovation, Extension
                        </Typography>
                    </Stack>
                    <Typography variant="body1" gutterBottom>
                        Avec plus de 17 ans d&apos;expérience dans le secteur du bâtiment, nous avons établi des partenariats solides pour réaliser tous vos travaux. Que ce soit pour des rénovations, des constructions neuves ou des extensions, notre expertise nous permet de répondre à toutes vos attentes avec précision et efficacité.

                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        Répondant à la demande croissante de nos clients, nous proposons des projets clé en main, prenant en charge la totalité de vos travaux. Vous n&apos;avez plus à vous soucier de rien, même sans connaissances techniques. De la conception initiale à la livraison finale, nous nous occupons de tout.

                    </Typography>

                    <Typography variant="body1" gutterBottom sx={{ color: 'var(--mui-palette-secondary-light)' }}>
                        Nous garantissons une honnêteté irréprochable et une bienveillance constante. Approchez vous de votre artisan comme jamais auparavant ! Nous sommes transparents sur les coûts, les délais et les matériaux utilisés, assurant ainsi une relation de confiance avec nos clients.
                    </Typography>
                    <ButtonLink
                        link="/nos-services"
                        variant="outlined"
                        color="primary"
                        endIcon={<ArrowForwardIos />}
                        fullWidth
                        aria-label="Découvrez nos services complets"
                    >
                        Découvrez nos services complets
                    </ButtonLink>
                </Paper>
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
                    <CardDetails 
                        icon={<Handshake fontSize="large" aria-hidden="true" />}
                        alt="Présentation des partenaires" 
                        title="Présentation" 
                        description="Mise en relation avec nos partenaires pour votre projet de construction." 
                        sx={{}} 
                    />
                    <CardDetails 
                        icon={<Calculate fontSize="large" aria-hidden="true" />}
                        alt="Estimation des travaux" 
                        title="Estimation" 
                        description="Estimation précise des travaux selon vos exigences et votre budget." 
                        sx={{}} 
                    />
                    <CardDetails 
                        icon={<AssignmentTurnedIn fontSize="large" aria-hidden="true" />}
                        alt="Suivi des travaux" 
                        title="Suivi personnalisé" 
                        description="Suivi rigoureux de l'avancement avec des comptes rendus réguliers." 
                        sx={{}} 
                    />
                    <CardDetails 
                        icon={<Headset fontSize="large" aria-hidden="true" />}
                        alt="Assistance après livraison" 
                        title="Assistance" 
                        description="Service d'assistance et post-livraison pour assurer votre satisfaction continue." 
                        sx={{}} 
                    />
                </Container>
            </Box>
        </>
    )
}

/**
 * Composant pour afficher les détails des cartes de services.
 * Assure la compatibilité avec les technologies d'assistance grâce aux balises ARIA appropriées.
 */
const CardDetails = ({ icon, alt, title, description, sx }: { icon: React.ReactNode, alt: string, title: string, description: string, sx: SxProps }) => {
    return (
        <Paper
            component="article"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                // aspectRatio: '16 / 9',
                width: '100%',
                maxWidth: '300px',
                overflow: 'hidden',
                paddingY: 2,
                paddingX: 4,
                ...sx
            }}
        >
            <Box sx={{ color: 'primary.main', mb: 2 }}>
                {icon}
            </Box>
            <Typography variant="h3" gutterBottom>{title}</Typography>
            <Typography variant="body2" textAlign="center">{description}</Typography>
        </Paper>
    )
}
export default RenderMobile