import ImagesSlider from "@/components/motion/ImagesSlider"
import { Stack, Box, Typography, Button, Container } from "@mui/material"
import { ArrowRightAlt, CheckCircle } from "@mui/icons-material"
import Link from "next/link"
import accueil7 from "../../../../public/accueil7.webp"
import accueil8 from "../../../../public/accueil8.webp"
import accueil9 from "../../../../public/accueil9.webp"
import SlideHeroSection from "@/components/Slider/SlideHeroSection"

const ImagesSliding = [
  { image: accueil7, alt: "Description de l'image accueil7" },
  { image: accueil8, alt: "Description de l'image accueil8" },
  { image: accueil9, alt: "Description de l'image accueil9" }
];
// 71
type Props = {}
export default function HeroSection({ }: Props) {
  return (
    <>
      <Box
        position="relative"
        minHeight={{ xs: 'calc(100svh - 70px)', sm: 'calc(100svh - 165px)', md: 'calc(100svh - 100px)' }}
      >
        <SlideHeroSection images={ImagesSliding} styleSlide={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "100%",
        }} />
        <Stack
          id={'hero'}
          component={'section'}
          margin={{
            md: '0 auto',
          }}
          marginTop={{
            xs: '70px', sm: '165px', md: '72px'
          }}
          width={'100%'}
          minWidth={{
            sm: '600px',
            md: '900px',
            lg: '1200px'
          }}
          maxWidth={1200}
          minHeight={{ md: 'calc(100svh - 100px)' }}
          justifyContent={{ md: "center" }}
        sx={{
          '& h1, & h2, & h3,& p': {
            textShadow: '2px 2px 4px #000000ba'
          },
        }}>
        <Container maxWidth="lg" sx={{
          position: 'relative',
          zIndex: 2,
          paddingBottom: 6,
        }}>
          <Typography
            py={{ xs: 2, sm: 4, md: 4 }}
            variant="h1"
            maxWidth={{
              xs: '600px',
            }}
            color="secondary"
          // marginTop={{
          //   xs: '0rem',
          //   sm: '3rem',
          //   md: '10rem'
          // }}
          >
            Votre artisan pour tous travaux d&apos;intérieur
          </Typography>
          <Stack
            component={'article'}
            flexDirection={'column'}
            flexGrow={1}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={2}
              flexGrow={1}
              width={{ xs: '100%', md: '40%' }}
              sx={{
                '& .MuiTypography-root': {
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  backdropFilter: 'blur(10px) brightness(0.5)',
                  paddingY: '0.5rem',
                  px: 2
                },
                '& .MuiSvgIcon-root': {
                  fontSize: { xs: '1.75rem', sm: '2rem' },
                  marginRight: '0.5rem'
                }
              }}
            >
              <Typography color="white" >
                <CheckCircle color="success" />
                Chaque projet est unique.
              </Typography>
              <Typography color="white" >
                <CheckCircle color="success" />
                Solutions sur mesure.
              </Typography>
              <Typography color="white" >
                <CheckCircle color="success" />
                Un espace qui vous est propre.
              </Typography>
            </Box>
            <Stack flexDirection={{ xs: 'column', md: 'row' }} justifyContent={'flex-start'} marginTop={{ xs: 2, md: 6 }} marginBottom={2} px={{ xs: 2, md: 0 }} sx={{
              '& .MuiButtonBase-root': {
                minWidth: { md: '15rem' },
                textAlign: 'center',
                marginTop: { xs: 3, md: 0 },
                marginRight: { xs: 0, md: 3 },
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
            }} >
              <Button
                component={Link}
                href={'/contact'}
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
                href={'/gallery'}
                variant="contained"
                className="pointer-events-auto"
                aria-label="Voir nos services"
                startIcon={<ArrowRightAlt />}
              >
                Voir nos services
              </Button>

            </Stack>
          </Stack>
        </Container >
      </Stack >
    </Box >

    </>
  )
}

