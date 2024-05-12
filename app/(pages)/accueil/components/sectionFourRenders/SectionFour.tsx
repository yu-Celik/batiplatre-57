'use client'
import { Box, Container, Typography, Button, Tabs, Tab, Stack, useTheme, Card, CardContent, Grid, IconButton, styled, Collapse, CardActions, IconButtonProps } from '@mui/material';
import CircleScrollAnimation, { TextDecoration } from '@/components/ui/CircleScrollAnimation';
import CustomSwiper from '@/components/Slider/SimpleSlide';
import { tabsClasses } from '@mui/material/Tabs';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { peintureImg, platerieImg, amenagementCombleImg, carrelageImg, poseDeSolImg } from "@/data/imageSlideHome";
import { AddCircleOutline, ArrowBackIos, ArrowForwardIos, LiveHelp } from '@mui/icons-material';
import { useInView } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation';
import { RightCardDecoration } from '@/components/ui/CardDecoration';
import { SpringUpFadeInBox } from '@/components/motion/SpringUpFadeInBox';
import RenderDesktop from './RenderDesktop';
import RenderMobile from './RenderMobile';


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const services = [
    {
        path: '/debarras-et-nettoyage',
        title: "Débarras et néttoyage",
        description: "Nous vous proposons des services de débarras et de nettoyage pour vos projets de rénovation. Que ce soit pour des espaces résidentiels ou commerciaux, notre équipe expérimentée assure un nettoyage approfondi et professionnel, en utilisant des équipements de pointe et des techniques respectueuses de l'environnement."
    },
    {
        path: '/platerie-et-isolation',
        title: "Plâtrerie et isolation",
        description: "Création et aménagement de divisions intérieures selon vos besoins. Nos solutions d'isolation thermique et acoustique sont conçues pour améliorer le confort et l'efficacité énergétique de votre bâtiment, tout en respectant les normes de sécurité et de durabilité les plus strictes."
    },
    {
        path: '/amenagement-decoration-interieur',
        title: "Aménagement de combles et décoration",
        description: "Nous vous proposons des services d'aménagement de combles et de décoration pour optimiser l'espace de votre maison. Transformez vos combles en espaces de vie attrayants et fonctionnels avec nos solutions sur mesure, qui allient esthétique et praticité."
    },
    {
        path: '/peinture',
        title: "Peinture",
        description: "Nous vous proposons des services de peinture intérieure et extérieure pour rafraîchir et embellir votre espace. Choisissez parmi une large gamme de couleurs et de finitions pour donner une nouvelle vie à vos murs, avec des peintures de haute qualité qui garantissent durabilité et résistance aux intempéries."
    },
    {
        path: '/pose-de-sol',
        title: "Pose de sols",
        description: "Nous vous proposons des services de pose de sols pour un intérieur moderne et élégant. Que vous préfériez le parquet, le carrelage ou le vinyle, nos experts vous aideront à choisir le meilleur matériau pour votre espace et s'assureront d'une installation impeccable et durable."
    },
    {
        path: '/nos-services',
        title: "Tous nos Services",
        description: "Découvrez la gamme complète de nos services de rénovation et d'aménagement. Chez BatiPlatre57, nous couvrons tous les aspects de votre projet, de la conception à la réalisation. Nos experts sont à votre disposition pour vous fournir des solutions personnalisées et adaptées à vos besoins spécifiques, garantissant qualité et satisfaction."
    }
];

type Props = {}
export default function SectionFour({ }: Props) {


    return (
        <>
            <RenderMobile />
            <RenderDesktop />
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