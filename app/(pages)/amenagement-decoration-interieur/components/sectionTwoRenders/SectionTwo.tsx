'use client'
import { Box, Container } from "@mui/material";
import SlideParallax from "@/components/Slider/SlideParallax";

type Props = {}
export default function SectionTwo({ }: Props) {
    return (
        <Box component={'section'}>
            {/* <CircleScrollAnimation text={"Les étapes de votre projet"} /> */}
            <Container disableGutters sx={{
                py: 2
            }}>
                <SlideParallax />
            </Container>
        </Box>
    )
}