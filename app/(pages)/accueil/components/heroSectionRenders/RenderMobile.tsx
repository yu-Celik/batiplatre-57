import { Stack, Box, Typography, Button, Container } from "@mui/material";
import { ArrowRightAlt, CheckCircle, HandymanOutlined, AssignmentOutlined } from "@mui/icons-material";
import Link from "next/link";
import accueil7 from "../../../../../public/accueil7.webp";
import accueil8 from "../../../../../public/accueil8.webp";
import accueil9 from "../../../../../public/accueil9.webp";
import SlideHeroSection from "@/components/Slider/SlideHeroSection";
import Image from "next/image";

const ImagesSliding = [
    { image: accueil7, alt: "Description de l'image accueil7" },
    { image: accueil8, alt: "Description de l'image accueil8" },
    { image: accueil9, alt: "Description de l'image accueil9" }
];

type Props = {};
export default function RenderMobile({ }: Props) {
    return (
        <Box
            position="relative"
            minHeight="calc(100svh - 60px)"
            display={{ xs: 'block', sm: 'none' }}
            paddingTop='72px'
        >
            <Image
                src={accueil7}
                alt="Description de l'image accueil7"
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                    position: "absolute",
                    objectFit: "cover",
                    top: 0,
                    bottom: 0,
                    left: 0,
                }} />
            <Stack
                id="hero"
                component="section"
                // marginTop="72px"
                width="100%"
                // height="max-content"
                sx={{
                    '& h1, & h2, & h3, & p': {
                        textShadow: '2px 2px 4px #000000ba'
                    },
                }}
            >
                <Container maxWidth="sm" sx={{
                    position: 'relative',
                    zIndex: 2,
                    paddingBottom: 6,
                }}>
                    <Typography
                        py={2}
                        variant="h1"
                        maxWidth="600px"
                        color="secondary"
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
                                    fontSize: '1rem',
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
                            <Typography color="white">
                                <CheckCircle color="success" />
                                Chaque projet est unique.
                            </Typography>
                            <Typography color="white">
                                <CheckCircle color="success" />
                                Solutions sur mesure.
                            </Typography>
                            <Typography color="white">
                                <CheckCircle color="success" />
                                Un espace qui vous est propre.
                            </Typography>
                        </Box>
                        <Stack flexDirection="column" justifyContent="flex-start" marginBottom={2} sx={{
                            '& .MuiButtonBase-root': {
                                minWidth: '100%',
                                textAlign: 'center',
                                marginTop: 3,
                            }
                        }}>
                            <Button
                                component={Link}
                                href="/contact"
                                variant="contained"
                                color="secondary"
                                size="large"

                                className="pointer-events-auto"
                                aria-label="Contactez-nous pour un devis"
                                // startIcon={<ArrowRightAlt />}
                                endIcon={<AssignmentOutlined />}

                            >
                                Demandez un devis
                            </Button>
                            <Button
                                component={Link}
                                href="/gallery"
                                size="large"
                                variant="contained"
                                className="pointer-events-auto"
                                aria-label="Voir nos services"
                                // startIcon={<ArrowRightAlt />}
                                endIcon={<HandymanOutlined />}
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