import { ArrowForwardIos } from "@mui/icons-material"
import { Card, CardContent, Container, Typography, CardHeader, Avatar, IconButton, CardMedia } from "@mui/material"
import name from '@/assets/chantier photo/2nd/IMG_20210107_162721.jpg';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SlideParallax from "@/components/Slider/SlideParallax";

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
                className="bg-grey-100 dark:bg-grey-900"

            >
                Les étapes de votre projet
            </Typography>
            <div className="xs:hidden md:flex">
                <SlideParallax />
            </div>
        </>
    )
}

