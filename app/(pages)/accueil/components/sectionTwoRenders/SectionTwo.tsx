'use client'
import { Box, Container } from "@mui/material";
import CircleScrollAnimation, { TextDecoration } from "@/components/ui/CircleScrollAnimation";
import SlideParallax from "@/components/Slider/SlideParallax";

type Props = {}
export default function SectionTwo({ }: Props) {
    return (
        <Box component={'section'}>
            <TextDecoration variant={'h2'} styles={{ mb: 2 }} text={"Les étapes de votre projet"} />
            <Container disableGutters sx={{
                py: 2
            }}>
                <SlideParallax />
            </Container>
        </Box>
    )
}