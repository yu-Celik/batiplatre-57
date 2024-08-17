import { Box } from "@mui/material";
import RenderMobile1 from "@/app/(pages)/accueil/components/HeroSection/RenderMobile";
import RenderMobile2 from "@/app/(pages)/accueil/components/SectionOne/RenderMobile";
import RenderMobile3 from "@/app/(pages)/accueil/components/SectionTwo/RenderMobile";
import RenderMobile4 from "@/app/(pages)/accueil/components/SectionThree/RenderMobile";
import RenderMobile5 from "@/app/(pages)/accueil/components/SectionFour/RenderMobile";
import RenderMobile6 from "@/app/(pages)/accueil/components/SectionFive/RenderMobile";
import RenderMobile7 from "@/app/(pages)/accueil/components/SectionSix/RenderMobile";
import RenderMobile8 from "@/app/(pages)/accueil/components/LastSection/RenderMobile";
type Props = {}
function Accueil({ }: Props) {
    return (
        <>
            <RenderMobile1 />
            <RenderMobile2 />
            <RenderMobile3 />
            <RenderMobile4 />
            <RenderMobile5 />
            <RenderMobile6 />
            <RenderMobile7 />
            <RenderMobile8 />
        </>
    )
}
export default Accueil