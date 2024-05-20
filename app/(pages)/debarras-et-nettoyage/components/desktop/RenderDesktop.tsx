import ContactCard from "@/components/Contact/Contact"
import { Container } from "@mui/material"
import Image from "next/image"
import accueil7 from "../../../../../public/accueil7.webp";
import { CardDecoration } from "@/components/ui/CardDecoration";

type Props = {}
export default function RenderDesktop({ }: Props) {
  return (
    <>
      <Container sx={{
        mt: '100px'
      }}>
        <Container sx={{
          display: 'flex',
        }}>
          <Container sx={{
            width: '70%',
            minHeight: 650
          }}>
            <Image src={accueil7} alt="Débarras et nettoyage" loading="eager" priority style={{
              objectFit: 'cover',
              height: '100%',
              width: '100%',
              maxHeight: 470
            }} />
          </Container>
          <div>
            <CardDecoration className="w-1/3 h-full -top-3 bg-amber-500 dark:bg-amber-600 -z-10">
              <ContactCard />
            </CardDecoration>
          </div>
        </Container>
      </Container >
    </>
  )
}