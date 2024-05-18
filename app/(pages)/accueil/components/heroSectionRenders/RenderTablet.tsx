import { Stack, Box, Typography, Button, Container } from "@mui/material";
import { ArrowRightAlt, CheckCircle } from "@mui/icons-material";
import Link from "next/link";
import accueil7 from "../../../../../public/accueil7.webp";
import accueil8 from "../../../../../public/accueil8.webp";
import accueil9 from "../../../../../public/accueil9.webp";
import SlideHeroSection from "@/components/Slider/SlideHeroSection";

const ImagesSliding = [
    { image: accueil7, alt: "Description de l'image accueil7" },
    { image: accueil8, alt: "Description de l'image accueil8" },
    { image: accueil9, alt: "Description de l'image accueil9" }
];

type Props = {};
export default function RenderTablet({ }: Props) {
    return (
        <Box
            position="relative"
            minHeight="calc(100svh - 100px)"
            display={{ xs: 'none', sm: 'block', md: 'none' }}
            paddingTop="165px"
        >
            <SlideHeroSection images={ImagesSliding} styleSlide={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: "100%",
            }} />
            <Stack
                id="hero"
                component="section"
                width="100%"
                sx={{
                    '& h1, & h2, & h3, & p': {
                        textShadow: '2px 2px 4px #000000ba'
                    },
                }}
            >
                <Container maxWidth="md" sx={{
                    position: 'relative',
                    zIndex: 2,
                    paddingBottom: 6,
                }}>
                    <Typography
                        py={4}
                        variant="h1"
                        maxWidth="600px"
                        color="secondary"
                        fontSize={{sm: "3rem" }}
                        marginTop={'2rem'}
                    >
                        Votre artisan pour tous travaux d&apos;intérieur
                    </Typography>
                    <Stack
                        component="article"
                        flexDirection="column"
                        flexGrow={1}
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            gap={2}
                            flexGrow={1}
                            width="fit-content"
                            sx={{
                                '& .MuiTypography-root': {
                                    fontSize: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    backdropFilter: 'blur(10px) brightness(0.5)',
                                    paddingY: '0.5rem',
                                    px: 2
                                },
                                '& .MuiSvgIcon-root': {
                                    fontSize: '1.75rem',
                                    marginRight: '0.5rem'
                                }
                            }}
                        >
                            <Typography color="grey.100">
                                <CheckCircle color="success" />
                                Chaque projet est unique.
                            </Typography>
                            <Typography color="grey.100">
                                <CheckCircle color="success" />
                                Solutions sur mesure.
                            </Typography>
                            <Typography color="grey.100">
                                <CheckCircle color="success" />
                                Un espace qui vous est propre.
                            </Typography>
                        </Box>
                        <Stack flexDirection="column" justifyContent="flex-start" marginTop={2} marginBottom={2} px={2} sx={{
                            '& .MuiButtonBase-root': {
                                minWidth: '100%',
                                textAlign: 'center',
                                marginTop: 3,
                                '@keyframes moveHorizontal': {
                                    '0%': { transform: 'translateX(0)' },
                                    '100%': { transform: 'translateX(-10px)' }
                                },
                                '& .MuiButton-startIcon': {
                                    animation: '1s linear 0s infinite alternate moveHorizontal'
                                },
                                '& .MuiButton-startIcon>*:nth-of-type(1)': {
                                    fontSize: '2rem'
                                }
                            }
                        }}>
                            <Button
                                component={Link}
                                href="/contact"
                                variant="contained"
                                color="secondary"
                                className="pointer-events-auto"
                                aria-label="Contactez-nous pour un devis"
                                startIcon={<ArrowRightAlt />}
                            >
                                Demandez un devis
                            </Button>
                            <Button
                                component={Link}
                                href="/gallery"
                                variant="contained"
                                className="pointer-events-auto"
                                aria-label="Voir nos services"
                                startIcon={<ArrowRightAlt />}
                            >
                                Voir nos services
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Stack>
        </Box>
    );
}