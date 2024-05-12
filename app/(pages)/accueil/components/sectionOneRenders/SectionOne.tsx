import RenderMobile from "./RenderMobile"
import RenderTablet from "./RenderTablet"
import CircleScrollAnimation, { TextDecoration } from '@/components/ui/CircleScrollAnimation';
import { Box, Typography } from '@mui/material';
import RenderDesktop from "./RenderDesktop";
type Props = {}
export default function SectionOne({ }: Props) {
    return (
        <>
            <Box component={'section'} display={'flex'} flexDirection={'column'} className="md:bg-grey-100 md:dark:bg-grey-900">
                <TextDecoration variant={'h2'} styles={{ my: 6, display: {xs:'flex', md:'none'} }} text={"Pourquoi choisir BatiPlatre57 ?"} />
                <RenderTablet />
                <RenderMobile />
                <RenderDesktop />
            </Box>
        </>
    )
}

