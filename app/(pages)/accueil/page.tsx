import { Typography, Box } from "@mui/material";
import HeroSection from "(pages)/accueil/components/HeroSection";
import SectionOne from "(pages)/accueil/components/SectionOne";
import SectionTwo from "(pages)/accueil/components/SectionTwo";
import SectionThree from "(pages)/accueil/components/SectionThree";
import SectionFour from "(pages)/accueil/components/SectionFour";
import ContactCard from "@/components/Contact/Contact";

type Props = {}
export default function page({ }: Props) {
  return (
    <>
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <ContactCard />
    </>

  )
}

