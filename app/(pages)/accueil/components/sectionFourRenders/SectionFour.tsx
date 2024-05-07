'use client'
import { Box, Container, Typography, Button, Tabs, Tab, Stack, useTheme } from '@mui/material';
import CircleScrollAnimation, { TextDecoration } from '@/components/ui/CircleScrollAnimation';
import CustomSwiper from '@/components/Slider/SimpleSlide';
import { tabsClasses } from '@mui/material/Tabs';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { peintureImg, platerieImg, cloisonImg, carrelageImg, poseDeSolImg } from "@/data/imageSlideHome";
import { LiveHelp } from '@mui/icons-material';
import { useInView } from 'framer-motion';
type Props = {}
export default function SectionFour({ }: Props) {
    const theme = useTheme();
    const [value, setValue] = useState(1);
    const refBox = useRef(null);
    const isInView = useInView(refBox, { once: true });


    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box component={'section'} position={'relative'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mb={2}>
                <TextDecoration styles={{ mb: 2 }} variant={'h2'} text={"Découvrez nos prestations"} />
                <Container>
                        <Typography variant="body1" paragraph>
                            Chez BatiPlatre57, nous offrons une gamme complète de services de rénovation, allant de la conception initiale à la réalisation finale.
                        </Typography>
                </Container>
                <Container
                    sx={{
                        flexGrow: 1,
                        backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[900],
                        borderRadius: theme.spacing(1, 1, 0, 0),
                        p: 0
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Catégories de services de rénovation"
                        variant="scrollable"
                        allowScrollButtonsMobile
                        scrollButtons='auto'
                        textColor={theme.palette.mode === 'light' ? 'primary' : 'secondary'}
                        indicatorColor={theme.palette.mode === 'light' ? 'primary' : 'secondary'}
                        aria-labelledby=""
                        TabScrollButtonProps={{
                            'aria-label': 'scroll tabs',
                        }}
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                            },
                        }}
                    >
                        <Tab label="Peinture" value={0} />
                        <Tab label="Plâtrerie" value={1} />
                        <Tab label="Cloison" value={2} />
                        <Tab label="Carrelage" value={3} />
                        <Tab label="Pose de sol" value={4} />
                    </Tabs>
                    <CustomTabPanel value={value} index={0} aria-label="Peinture" aria-controls="peinture" >
                        <CustomSwiper images={peintureImg} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1} aria-label="Plâtrerie" aria-controls="plâtrerie" >
                        <CustomSwiper images={platerieImg} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2} aria-label="Cloison" aria-controls="cloison" >
                        <CustomSwiper images={cloisonImg} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3} aria-label="Carrelage" aria-controls="carrelage" >
                        <CustomSwiper images={carrelageImg} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={4} aria-label="Pose de sol" aria-controls="pose-de-sol" >
                        <CustomSwiper images={poseDeSolImg} />
                    </CustomTabPanel>
                </Container>
                <Container>
                        <Typography variant="body1" paragraph>
                            Nos spécialistes travaillent avec des matériaux de haute qualité pour garantir durabilité et esthétique.
                        </Typography>
                    <Button
                        component={Link}
                        href={'/contact'}
                        variant="contained"
                        sx={{ mt: 2 }}
                        fullWidth
                    >
                        Découvrir nos prestations
                    </Button>
                </Container>
            </Box>
            <Container sx={{
                position: 'relative',
                p: theme.spacing(6),
                mt: 6,
                // boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                boxShadow: theme.shadows[10],
                width: '93%',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.background.paper,
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 20,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"

            }}>
                <LiveHelp color='secondary' sx={{ fontSize: 100, position: 'absolute', top: 0, right: 0, bottom: 0, transform: 'translate(0, -50%)' }} />
                <Typography variant="h3" gutterBottom sx={{ mt: 2, textAlign: 'left', maxWidth: '22rem' }}>
                    Avez-vous des questions spécifiques ou besoin d&apos;une consultation personnalisée ?
                </Typography>
                <Typography variant="body1" paragraph sx={{ mt: 1, textAlign: 'left', maxWidth: '26rem' }}>
                    Notre équipe d&apos;experts est prête à vous fournir toutes les informations nécessaires et à vous guider dans vos choix.
                </Typography>
                <Button
                    variant="contained"
                    component={Link}
                    size="large"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    href="/contact"
                    ref={refBox}
                    >
                    Parlez à un conseiller
                </Button>
            </Container>
        </>
    )
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}