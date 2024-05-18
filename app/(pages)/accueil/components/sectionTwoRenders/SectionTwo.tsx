import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { TextDecoration } from "@/components/ui/CircleScrollAnimation";
import dynamic from "next/dynamic";

const SlideParallax = dynamic(() => import("@/components/Slider/SlideParallax"), {
    loading: () => <CircularProgress />,
})
const RenderDesktop = dynamic(() => import('./RenderDesktop'), {
    loading: () => <CircularProgress />,
})
type Props = {}
export default function SectionTwo({ }: Props) {
    return (
        <>
            <Box component={'section'} display={{ xs: 'flex', md: 'none' }} flexDirection={'column'}>
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

            <RenderDesktop />

        </>
    )
}

