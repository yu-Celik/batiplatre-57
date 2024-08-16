import { Box } from "@mui/material";
import RenderMobile1 from "./components/HeroSection/RenderMobile";
import RenderMobile2 from "./components/SectionOne/RenderMobile";
import RenderMobile3 from "./components/SectionTwo/RenderMobile";
import RenderMobile4 from "./components/SectionThree/RenderMobile";
import Onde from "./components/SectionTwo/Onde";

type Props = {}
function Accueil({ }: Props) {
    return (
        <>
            <RenderMobile1 />
            <RenderMobile2 />
            <RenderMobile3 />
            <RenderMobile4 />
        </>
    )
}
export default Accueil