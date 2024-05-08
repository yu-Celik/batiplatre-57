'use client'
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { RightCardDecoration } from '@/components/ui/CardDecoration';
import CircleScrollAnimation from '@/components/ui/CircleScrollAnimation';
import img21 from '@/assets/chantier photo/plat.jpg';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'framer-motion';
import { forwardRef, useRef } from 'react';


type Props = {}
export default function RenderTablet({ }: Props) {
    const refBox = useRef<HTMLDivElement>(null);
    const isInView = useInView(refBox, { once: true });
    const refImg = useRef<HTMLAnchorElement>(null);
    const isInView2 = useInView(refImg, { once: true });
    const theme = useTheme();

    return (
        <>
            <Container disableGutters sx={{
                my: 5,
                display: { xs: 'none', sm: 'block', md: 'none' }
            }}>
                <article className={cn(` brightness-100 dark:backdrop-brightness-100 bg-gradientToBottomLight dark:bg-gradientToBottom mb-8  `)}>
                    <Container ref={refBox} id='section-one' sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 4,
                        padding: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 },
                        paddingX: { xs: 0, sm: 2, md: 0, lg: 0, xl: 0 },
                        [theme.breakpoints.up(630)]: {
                            paddingY: 2,
                            paddingX: 3
                        }
                    }}>
                        <Container disableGutters>
                            <Typography
                                variant="h3"
                                color={isInView ? 'primary' : 'inherit'}
                                style={{
                                    transform: isInView ? "none" : "translateX(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                }}
                                gutterBottom
                            >
                                Découvrez la transformation unique et personnalisée de chaque espace par BatiPlatre57.
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{
                                    transform: isInView ? "none" : "translateX(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                }}
                                paragraph
                            >
                                Avec une attention particulière aux détails et une passion pour la qualité, nous nous assurons que chaque projet reflète parfaitement vos attentes et votre style personnel.
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{
                                    transform: isInView ? "none" : "translateX(-200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                }}
                                paragraph>
                                Nous comprenons l&apos;importance de respecter les délais et les budgets, c&apos;est pourquoi nous nous engageons à fournir des estimations précises.
                            </Typography>
                        </Container>
                        <Container
                            disableGutters
                            sx={{
                                position: 'relative',
                            }}
                        >
                            <RightCardDecoration
                                height={'100%'}
                                width={'20%'}
                                marginBottom={2}
                                sx={{
                                    opacity: isInView2 ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                }}
                            >
                                <Image
                                    src={img21}
                                    width={400}
                                    height={400}
                                    alt="Design intérieur élégant"
                                    placeholder="blur"
                                    quality={100}
                                    className='bg-cover min-[680px]:aspect-square'
                                />
                            </RightCardDecoration>
                        </Container>
                    </Container>
                    <Container>
                        <Button
                            ref={refImg}
                            component={Link}
                            href={'/services'}
                            variant="contained"
                            fullWidth
                            color="primary"
                            sx={{
                                opacity: isInView2 ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            Découvrez nos réalisations
                        </Button>
                    </Container>
                </article >
            </Container >
        </>
    )
}