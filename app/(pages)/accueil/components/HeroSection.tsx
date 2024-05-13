import ImagesSlider from "@/components/motion/ImagesSlider"
import { cn } from "utils/cn"
import { Stack, Box, Typography, Button } from "@mui/material"
import { ArrowRightAlt, CheckCircle } from "@mui/icons-material"
import Link from "next/link"
import accueil7 from "../../../../public/accueil7.webp"
import accueil8 from "../../../../public/accueil8.webp"
import accueil9 from "../../../../public/accueil9.webp"
import FadeInUpBox from "@/components/motion/FadeInUpBox"

const ImagesSliding = [
  { img: accueil7, alt: "Description de l'image accueil7" },
  { img: accueil8, alt: "Description de l'image accueil8" },
  { img: accueil9, alt: "Description de l'image accueil9" }
];

type Props = {}
export default function HeroSection({ }: Props) {
  return (
    <Stack
      id={'hero'}
      component={'section'}
      margin={{
        md: '0 auto',
      }}
      marginTop={{
        xs: '70px', sm: '165px', md: '165px'
      }}
      width={'100%'}
      minWidth={{
        sm: '600px',
        md: '900px',
        lg: '1200px'
      }}
      maxWidth={1200}
      sx={{
        '& h1, & h2, & h3,& p': {
          textShadow: '2px 2px 4px #000000ba'
        },
      }}>
      <Box>
        <FadeInUpBox>
          <Typography
            px={{ xs: 2, sm: 2, md: 0 }}
            py={{ xs: 2, sm: 4, md: 4 }}
            variant="h1"
            maxWidth={{
              xs: '600px',
            }}
            color="secondary"
            marginTop={{
              xs: '3rem',
              sm: '3rem',
              md: '2rem'
            }}
          >
            Votre artisan pour tous travaux d&apos;intérieur
          </Typography>
        </FadeInUpBox>
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
            zIndex={9999}
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
            <FadeInUpBox>
              <Typography color="white" >
                <CheckCircle color="success" />
                Chaque projet est unique.
              </Typography>
            </FadeInUpBox>
            <FadeInUpBox>
              <Typography color="white" >
                <CheckCircle color="success" />
                Solutions sur mesure.
              </Typography>
            </FadeInUpBox>
            <FadeInUpBox>
              <Typography color="white" >
                <CheckCircle color="success" />
                Un espace qui vous est propre.
              </Typography>
            </FadeInUpBox>
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
            <FadeInUpBox>

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
            </FadeInUpBox>
            <FadeInUpBox>
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
            </FadeInUpBox>

          </Stack>
        </Stack>
      </Box >
    </Stack >
    // <ImagesSlider className={cn(`min-h-[calc(100svh-56px)] sm:min-h-[calc(100svh-69px)] md:min-h-svh justify-center xs:justify-start xs:mb-4 sm:mb-8 md:mb-0`)} images={ImagesSliding}>
    // </ImagesSlider >
  )
}