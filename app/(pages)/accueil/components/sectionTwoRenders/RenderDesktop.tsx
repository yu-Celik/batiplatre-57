import SlideParallax from "@/components/Slider/SlideParallax";
import { Typography } from "@mui/material";

type Props = {}
export default function RenderDesktop({ }: Props) {
    return (
        <>
            <Typography
                variant={'h2'}
                display={{ xs: 'none', md: 'block' }}
                py={16}
                textAlign={'center'}
                sx={{
                    width: '100%',
                }}
                // className="bg-grey-200 dark:bg-grey-900"

            >
                Les étapes de votre projet
            </Typography>
            <div className="xs:hidden md:flex">
                <SlideParallax />
            </div>
        </>
    )
}

