import ContactCard from "@/components/Contact/Contact"
import { Box, Container } from "@mui/material"
import Image from "next/image"
import accueil7 from "../../../../../public/accueil7.webp";
import { CardDecoration } from "@/components/ui/CardDecoration";
import FormCard from "@/components/Contact/Contact";

type Props = {}
export default function RenderDesktop({ }: Props) {
  return (
    <>
      <Container disableGutters maxWidth="xl" sx={{
        mt: '100px',
        display: { xs: 'none', md: 'block' },
      }}>
        <Container disableGutters maxWidth="xl" sx={{
          display: 'flex',
        }}>
          <Container sx={{
            width: '70%',
            minHeight: 650,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
          }}>
            <Image src={accueil7} alt="Débarras et nettoyage" loading="eager" placeholder="blur" priority style={{
              objectFit: 'cover',
              height: '100%',
              width: '100%',
              maxHeight: 525,
              borderRadius: 'var(--mui-shape-borderRadius)'
            }} />
          </Container>
          <div className="flex items-start justify-start ml-2 py-4 px-6">
            <CardDecoration className="w-1/3 h-full -left-8 bg-amber-500 dark:bg-amber-600 -z-10">
              <FormCard />
            </CardDecoration>
          </div>
        </Container>
      </Container >
    </>
  )
}