'use client'
import ImagesSlider from "@/components/motion/ImagesSlider"
import { cn } from "utils/cn"
import { Stack, useTheme, Box, Typography, Button } from "@mui/material"
import { ArrowRightAlt, CheckCircle } from "@mui/icons-material"
import { motion } from "framer-motion"
import Link from "next/link"
import accueil7 from "../../../../public/accueil7.webp"
import accueil8 from "../../../../public/accueil8.webp"
import accueil9 from "../../../../public/accueil9.webp"
import ContactCard from "@/components/Contact/Contact"
import Image from "next/image"
import SectionOne from "./sectionOneRenders/SectionOne"

const ImagesSliding = [
  { img: accueil7, alt: "Description de l'image accueil7" },
  { img: accueil8, alt: "Description de l'image accueil8" },
  { img: accueil9, alt: "Description de l'image accueil9" }
];

type Props = {}
export default function HeroSection({ }: Props) {
  const theme = useTheme();
  return (
    <>
      <Box mt={9}>
        <Image src={accueil7} alt="Description de l'image accueil7" />
        {/* <SectionOne /> */}
      </Box>
    </>
  )
}