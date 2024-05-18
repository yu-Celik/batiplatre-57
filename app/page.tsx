const HeroSection = dynamic(() => import('(pages)/accueil/components/HeroSection'), {
    loading: () => <CircularProgress />,
    ssr: false
})
const SectionOne = dynamic(() => import('(pages)/accueil/components/sectionOneRenders/SectionOne'), {
    loading: () => <CircularProgress />,
    ssr: false
})
const SectionTwo = dynamic(() => import('(pages)/accueil/components/sectionTwoRenders/SectionTwo'), {
    loading: () => <CircularProgress />,
    ssr: false
})
const SectionThree = dynamic(() => import('(pages)/accueil/components/sectionThreeRenders/SectionThree'), {
    loading: () => <CircularProgress />,
    ssr: false
})
const SectionFour = dynamic(() => import('(pages)/accueil/components/sectionFourRenders/SectionFour'), {
    loading: () => <CircularProgress />,
    ssr: false
})

import { Metadata } from "next";
import dynamic from "next/dynamic";
import { CircularProgress } from "@mui/material";

export const metadata: Metadata = {
    title: 'Accueil',
    description: 'BatiPlatre57 offre des services professionnels de plâtrerie, peinture, et rénovation. Découvrez nos solutions personnalisées pour valoriser votre espace.',
    keywords: 'Plâtrerie, Peinture, Rénovation, Isolation, Décoration intérieure, Metz, Lorraine',
    robots: 'index, follow',
    publisher: 'BatiPlatre57',
    openGraph: {
        title: 'BatiPlatre57 - Expertise en Plâtrerie, Peinture et Rénovation à Metz',
        description: 'Services professionnels de rénovation et décoration à Metz.',
        type: 'website',
        locale: 'fr_FR',
        url: 'https://www.batiplatre57.fr/accueil',
        siteName: 'BatiPlatre57',
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

