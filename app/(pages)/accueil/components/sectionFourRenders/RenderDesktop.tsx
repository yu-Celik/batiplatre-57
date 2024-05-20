import { Tabs } from "@/components/motion/Tabs";
import { Box, Button, Container, Typography } from "@mui/material"
import Image, { StaticImageData } from "next/image";
import { peintureImg, platerieImg, amenagementCombleImg, carrelageImg, poseDeSolImg } from "@/data/imageSlideHome";
import { SpringUpFadeInBox } from "@/components/motion/SpringUpFadeInBox";
import { LiveHelp } from "@mui/icons-material";
import Link from "next/link";
import SlideGallery from "@/components/Slider/SlideGallery";
import img21 from '@/assets/chantier photo/plat.jpg';

type ImageType = {
    id: string;
    img: StaticImageData;
    alt: string;
};

type DummyContentProps = {
    images: ImageType[];
};

const DummyContent = ({ images }: DummyContentProps) => {
    return <SlideGallery items={images} />;
};



const tabs = [
    {
        title: "Peinture",
        value: "peinture",
        content: <DummyContent images={peintureImg} />,

    },
    {
        title: "Platerie",
        value: "platerie",
        content: <DummyContent images={platerieImg} />,
    },
    {
        title: "Amenagement de combles",
        value: "amenagementComble",
        content: <DummyContent images={amenagementCombleImg} />,
    },
    {
        title: "Carrelage",
        value: "carrelage",
        content: <DummyContent images={carrelageImg} />,
    },
    {
        title: "Pose de sol",
        value: "poseDeSol",
        content: <DummyContent images={poseDeSolImg} />,
    },
];


type Props = {}
export default function RenderDesktop({ }: Props) {
    return (
        <Container component={'section'} className="relative dark:bg-grey-800" sx={{
            display: { xs: 'none', md: 'block' }
        }} >
            <Typography variant="h2" color='text' py={16} textAlign='center' gutterBottom>Découvrez nos prestations</Typography>

            <Container disableGutters className="" sx={{
                position: 'relative',
                minHeight: '40rem',

            }} >
                <div className="h-full [perspective:1000px] flex flex-col max-w-5xl mx-auto  items-start justify-start shadow-2xl">
                    <Tabs tabs={tabs} />
                </div>
            </Container>
            <Container disableGutters component={SpringUpFadeInBox} sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                my: 6,
            }}>
                <Box component={'article'} display={'flex'} justifyContent={'space-between'} maxWidth={'1024px'} className="bg-grey-50 dark:bg-grey-900 rounded-xl pl-12 shadow-xl " sx={{
                }}>
                    <Container sx={{ maxHeight: '22.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', mr: 10 }}>
                        <LiveHelp color='secondary' sx={{ fontSize: 100, position: 'absolute', top: 0, right: 0, bottom: 0, transform: 'translate(0, -50%)', zIndex: 10 }} />
                        <Typography variant="h3" color={'secondary'} fontSize={32} gutterBottom sx={{ mt: 2, textAlign: 'left', maxWidth: '22rem' }}>
                            Des questions ?
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ mt: 1, textAlign: 'left', maxWidth: '26rem' }}>
                            Nous mettrons tout en œuvre pour vous fournir toutes les informations nécessaires et vous guider dans vos choix.
                        </Typography>
                        <Button
                            variant="contained"
                            component={Link}
                            size="large"
                            color="primary"
                            sx={{ mt: 2 }}
                            href="/contact"
                        >
                            Parlez à un conseiller
                        </Button>
                    </Container>
                    <Container disableGutters sx={{ maxHeight: '22.5rem', width: '55%', position: 'relative' }}>
                        <Image src={img21} alt="chantier" style={{
                            // position: 'absolute',
                            // top: '50%',
                            // transform: 'translate(0, -50%)',
                            // right: -200,
                            objectFit: 'cover',
                            objectPosition: 'center',
                            // width: '500px',
                            // height: '500px',
                            width: '100%',
                            height: '100%',
                            aspectRatio: '1/1',
                            borderRadius: '0.25rem',
                        }} />
                    </Container>
                </Box>
            </Container>
        </Container>
    )
}


