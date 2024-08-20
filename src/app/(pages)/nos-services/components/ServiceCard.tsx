import EmblaCarousel from "@/app/components/Slider/EmblaCarousel";
import { Typography, Button, Paper } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";
import CircleSvg from "./CircleSvg";
import { Box } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

type ServiceCardProps = {
    title: string;
    subtitle: string[];
    description: string[];
    imageUrl: { src: StaticImageData, alt: string }[];
    buttonText: string;
    href: string;
};

const OPTIONS: EmblaOptionsType = {
    align: 'center',
    containScroll: 'trimSnaps',
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, description, imageUrl, buttonText, href }) => {
    return (
        <Paper component="article" sx={{ paddingY: 4, paddingX: 2, marginBottom: 4, position: 'relative' }}>
            <Typography variant="h3" gutterBottom>{title}</Typography>
            <Typography variant="body1" gutterBottom>
                Nous proposons :
            </Typography>
            <Typography variant="h6" sx={{ fontSize: '0.95rem' }}>
                {subtitle[0]}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
                {description[0]}
            </Typography>
            <Typography variant="h6" sx={{ fontSize: '0.95rem' }}>
                {subtitle[1]}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
                {description[1]}
            </Typography>
            <Typography component={Link} color="primary" href={href} variant="body1" sx={{ fontSize: '0.85rem', marginBottom: '0.75rem', display: 'inline-block' }}>
                Voir plus...
            </Typography>
            <Box sx={{ position: 'absolute', top: 0, right: 0, transform: 'translateY(300%)' }}>
                <CircleSvg />
            </Box>
            <EmblaCarousel images={imageUrl.map(img => ({ img: img.src, alt: img.alt }))} options={OPTIONS} />
            <Button variant="outlined" color="primary" endIcon={<ArrowForwardIos />} fullWidth sx={{ marginTop: '1rem' }}>
                {buttonText}
            </Button>
        </Paper>
    );
};

export default ServiceCard;