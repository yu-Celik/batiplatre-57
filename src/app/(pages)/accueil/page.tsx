import { Metadata } from 'next';
import RenderMobile1 from "@/app/(pages)/accueil/components/HeroSection/RenderMobile";
import RenderMobile2 from "@/app/(pages)/accueil/components/SectionOne/RenderMobile";
import RenderMobile3 from "@/app/(pages)/accueil/components/SectionTwo/RenderMobile";
import RenderMobile4 from "@/app/(pages)/accueil/components/SectionThree/RenderMobile";
import RenderMobile5 from "@/app/(pages)/accueil/components/SectionFour/RenderMobile";
import RenderDesktop from "@/app/(pages)/accueil/components/SectionFour/RenderDesktop";
import RenderMobile6 from "@/app/(pages)/accueil/components/SectionFive/RenderMobile";
import RenderMobile7 from "@/app/(pages)/accueil/components/SectionSix/RenderMobile";
import RenderMobile8 from "@/app/components/ContactSection/RenderMobile"
import { Box } from '@mui/material';

export const metadata: Metadata = {
    title: "Accueil | Bati Plâtre 57 - Entreprise de rénovation à Metz",
    description: "Découvrez Bati Plâtre 57, votre partenaire pour tous vos travaux de rénovation à Metz. Isolation, aménagement intérieur et extérieur, rénovation énergétique pour maison et appartement.",
    keywords: "entreprise de rénovation Metz, Plâtrerie Metz, travaux maison, isolation, aménagement intérieur, rénovation énergétique, artisans Metz",
};

export default function Accueil() {
    return (
        <>
            <RenderMobile1 />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'column' }, gap: { xs: 0, md: 4 } }}>
                <RenderMobile2 sx={{
                    flex: 1.25,
                }} />
                <RenderMobile3 sx={{
                    flex: 1,
                    alignSelf: { md: 'center' }
                }} />
            </Box>
            <RenderMobile4 />
            <RenderMobile5 />
            <RenderDesktop />
            <RenderMobile6 />
            <RenderMobile7 />
            <RenderMobile8 />
        </>
    )
}