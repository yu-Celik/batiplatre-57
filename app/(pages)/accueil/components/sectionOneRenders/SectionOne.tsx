import { LeftCardDecoration } from "@/components/ui/CardDecoration";
import RenderMobile from "./RenderMobile"
import RenderTablet from "./RenderTablet"
import CircleScrollAnimation, { TextDecoration } from '@/components/ui/CircleScrollAnimation';
import { Box } from '@mui/material';
type Props = {}
export default function SectionOne({ }: Props) {
    return (
        <>
            <Box component={'section'} display={'flex'} flexDirection={'column'} >
                <TextDecoration variant={'h2'} styles={{ mb: 2 }} text={"Pourquoi choisir BatiPlatre57 ?"} />
                <RenderTablet />
                <RenderMobile />
            </Box>
        </>
    )
}

