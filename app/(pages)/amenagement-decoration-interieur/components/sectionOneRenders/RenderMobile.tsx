'use client'
import { Box, Container, Typography, Button } from '@mui/material';
import { RightCardDecoration } from '@/components/ui/CardDecoration';
import img21 from '@/assets/chantier photo/plat.jpg';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import RenderTablet from './RenderTablet';




type Props = {}
export default function RenderMobile({ }: Props) {
    return (
        <article className={cn(` brightness-100 dark:backdrop-brightness-100 bg-gradientToBottomLight dark:bg-gradientToBottom mb-8 block sm:hidden `)}>
            <Container >
                <Typography variant="h3" gutterBottom >
                    Découvrez comment BatiPlatre57 transforme chaque espace en un lieu de vie unique et personnalisé.
                </Typography>
                <RightCardDecoration height={'100%'} width={'20%'} marginBottom={2}>
                    <Image width={400} height={400} src={img21} alt="Design intérieur élégant" className="w-full h-80 object-cover rounded " />
                </RightCardDecoration>
                <Typography variant="body1" paragraph>
                    Avec une attention particulière aux détails et une passion pour la qualité, nous nous assurons que chaque projet reflète parfaitement vos attentes et votre style personnel.
                </Typography>
                <Typography variant="body1" paragraph>
                    Nous comprenons l&apos;importance de respecter les délais et les budgets, c&apos;est pourquoi nous nous engageons à fournir des estimations précises.
                </Typography>
                <Button component={Link} href={'/services'} variant="contained" fullWidth color="primary" sx={{ marginTop: 2 }}>
                    Découvrez nos réalisations
                </Button>
            </Container>
        </article>
    )
}