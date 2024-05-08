import { Box, Container } from "@mui/material";
import { TextDecoration } from "@/components/ui/CircleScrollAnimation";
import SlideParallax from "@/components/Slider/SlideParallax";

type Props = {}
export default function SectionTwo({ }: Props) {
    return (
        <Box component={'section'}>
            <TextDecoration variant={'h2'} styles={{ my: 6 }} text={"Les étapes de votre projet"} />
            <Container disableGutters sx={{
                py: 2,
                '& .MuiTypography-root': {
                    textShadow: '2px 2px 4px #000000ba'
                },
                '& strong': {
                    fontWeight: '500'
                }
            }}>
                <SlideParallax />
            </Container>
        </Box>
    )
}