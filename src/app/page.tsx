import Image from "next/image";
import { Typography, Container } from "@mui/material";
import RenderMobile1 from "./components/HeroSection/RenderMobile";
import RenderMobile2 from "./components/SectionOne/RenderMobile";
import RenderMobile3 from "./components/SectionTwo/RenderMobile";
export default function Home() {
  return (
    <>
      <RenderMobile1 />
      <RenderMobile2 />
      <RenderMobile3 />
    </>

  );
}
