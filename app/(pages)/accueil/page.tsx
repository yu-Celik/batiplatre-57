const HeroSection = dynamic(() => import('(pages)/accueil/components/HeroSection'), {
  loading: () => <CircularProgress />
})
const SectionOne = dynamic(() => import('(pages)/accueil/components/sectionOneRenders/SectionOne'), {
  loading: () => <CircularProgress />
})
const SectionTwo = dynamic(() => import('(pages)/accueil/components/sectionTwoRenders/SectionTwo'), {
  loading: () => <CircularProgress />
})
const SectionThree = dynamic(() => import('(pages)/accueil/components/sectionThreeRenders/SectionThree'), {
  loading: () => <CircularProgress />
})
const SectionFour = dynamic(() => import('(pages)/accueil/components/sectionFourRenders/SectionFour'), {
  loading: () => <CircularProgress />
})

import { Metadata } from "next";
import dynamic from "next/dynamic";
import { CircularProgress } from "@mui/material";
export const metadata: Metadata = {
  metadataBase: new URL('https://www.batiplatre57.fr/accueil'),
  title: 'BatiPlatre57 - Expertise en Plâtrerie, Peinture et Rénovation à Metz',
  description: 'BatiPlatre57 offre des services professionnels de plâtrerie, peinture, et rénovation. Découvrez nos solutions personnalisées pour valoriser votre espace.',
  keywords: 'Plâtrerie, Peinture, Rénovation, Isolation, Décoration intérieure, Metz, Lorraine',
  robots: 'index, follow',
  publisher: 'BatiPlatre57',
  twitter: {
    card: 'summary_large_image',
    site: '@batiplatre57',
    description: 'Expertise en plâtrerie et rénovation à Metz.',
    images: '/assets/Gallery/20150528_231208.jpg',
  },
  openGraph: {
    title: 'BatiPlatre57 - Expertise en Plâtrerie, Peinture et Rénovation à Metz',
    description: 'Services professionnels de rénovation et décoration à Metz.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.batiplatre57.fr',
    siteName: 'BatiPlatre57',
    images: [
      {
        url: '/assets/Gallery/20150528_231208.jpg',
        width: 1200,
        height: 630,
        alt: 'BatiPlatre57 - Expertise en Plâtrerie, Peinture et Rénovation à Metz',
      },
    ],
  },
}
type Props = {}
export default function Page({ }: Props) {
  return (
    <>
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>

  )
}

