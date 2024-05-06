'use client'
import ImagesSlider from "@/components/Slider/ImagesSlider"
import { cn } from "utils/cn"
import { Stack, useTheme, Box, Typography, Button } from "@mui/material"
import { ArrowRightAlt, CheckCircle } from "@mui/icons-material"
import { motion } from "framer-motion"
import Link from "next/link"
import accueil7 from "../../../../public/accueil7.webp"
import accueil8 from "../../../../public/accueil8.webp"
import accueil9 from "../../../../public/accueil9.webp"

const ImagesSliding = [
  { img: accueil7, alt: "Description de l'image accueil7" },
  { img: accueil8, alt: "Description de l'image accueil8" },
  { img: accueil9, alt: "Description de l'image accueil9" }
];

type Props = {}
export default function HeroSection({ }: Props) {
  const theme = useTheme();
  return (
    <ImagesSlider className={cn(`min-h-[80dvh] justify-center xs:justify-start mb-8`)} images={ImagesSliding}>
      <Stack
        id={'hero'}
        component={motion.section}
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        margin={{
          md: '0 auto',
        }}
        marginTop={{
          xs: '80px', sm: '175px', md: '72px'
        }}
        sx={{
          minWidth: {
            sm: theme.breakpoints.values.sm,
            md: theme.breakpoints.values.md,
            lg: theme.breakpoints.values.lg,
          },
          zIndex: 1,
          '& h1, & h2, & h3,& p': {
            textShadow: '2px 2px 4px #000000ba'
          },
        }}>
        <Box>
          <Typography
            p={{ xs: 2, sm: 4 }}
            variant="h1"
            maxWidth={{
              xs: theme.breakpoints.values.sm,
            }}
            sx={{
              color: theme.palette.secondary.main,
              marginTop: {
                xs: theme.spacing(2.5),
                sm: theme.spacing(2.5),
                md: theme.spacing(10)
              }
            }}
          >
            Votre artisan pour tous travaux d&apos;intérieur
          </Typography>
          <Stack
            component={motion.article}
            flexDirection={'column'}
            gap={4}
            p={{ xs: 2, sm: 4 }}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={2}
              maxWidth={{
                xs: theme.breakpoints.values.sm,
                sm: theme.breakpoints.values.md
              }}
              sx={{
                '& .MuiTypography-root': {
                  fontSize: { xs: theme.typography.pxToRem(20), sm: theme.typography.pxToRem(24) },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  color: theme.palette.grey[200]
                },
                '& .MuiSvgIcon-root': {
                  fontSize: { xs: theme.typography.pxToRem(28), sm: theme.typography.pxToRem(32) },
                  marginRight: theme.spacing(1)
                }
              }}
            >
              <Typography variant="h3">
                <CheckCircle color="success" />
                Chaque projet est unique.
              </Typography>
              <Typography variant="h3">
                <CheckCircle color="success" />
                Solutions sur mesure.
              </Typography>
              <Typography variant="h3">
                <CheckCircle color="success" />
                Un espace qui vous est propre.
              </Typography>

            </Box>
            <Stack flexDirection={{ xs: 'column', md: 'row' }} gap={{ xs: 4 }} justifyContent={'flex-start'} marginTop={4} marginBottom={2} sx={{
              '& .MuiButtonBase-root': {
                minWidth: { md: '15rem' },
                textAlign: 'center',
                '@keyframes moveHorizontal': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-10px)' }
                },
                '& .MuiButton-startIcon': {
                  animation: '1s linear 0s infinite alternate moveHorizontal'
                },
                '& .MuiButton-startIcon>*:nth-of-type(1)': {
                  fontSize: theme.typography.pxToRem(32)
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
        </Box>
      </Stack>
    </ImagesSlider>
  )
}