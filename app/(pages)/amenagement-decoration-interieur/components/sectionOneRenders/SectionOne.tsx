import RenderMobile from "./RenderMobile"
import RenderTablet from "./RenderTablet"
import { TextDecoration } from '@/components/ui/CircleScrollAnimation';
import { Box } from '@mui/material';
type Props = {}
export default function SectionOne({ }: Props) {
    return (
        <>
            <Box component={'section'} display={'flex'} flexDirection={'column'} >
                <TextDecoration styles={{ mb: 2 }} variant={'h2'} text={"Pourquoi choisir BatiPlatre57 ?"} />
                <RenderTablet />
                <RenderMobile />
            </Box>
        </>
    )
}

