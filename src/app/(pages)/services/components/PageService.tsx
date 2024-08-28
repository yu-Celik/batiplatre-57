import { Box, Typography } from "@mui/material";
import ButtonLink from "../../../components/ButtonLink";
import SubtitleTitle from "@/app/components/SubtitleTitle";
import CardAccordionService from "./CardAccordionService";
import { StaticImageData } from "next/image";
import { ArrowForwardIos } from "@mui/icons-material";

type ServiceCardProps = {
    titleH1?: string;
    titleH2?: string;
    subTitle?: string;
    description?: string[];
    buttonText?: string;
    href?: string;
    card?: {
        id: string;
        imageUrl?: StaticImageData;
        title?: string;
        description?: string[];
        text?: string[];
    }[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({ titleH1, titleH2, subTitle, description, buttonText, href, card }) => {
    return (
        <Box component="section" sx={{}}>
            <Typography variant="h1" gutterBottom sx={{ textAlign: { xs: 'center' }, mt: { md: 8 }, mb: { xs: 8, md: 16 } }}>
                {titleH1}
            </Typography>
            <Box my={{ xs: 8, md: 16 }}>
                <SubtitleTitle href="#" text={subTitle ?? ""} sx={{ textAlign: { xs: 'center', md: 'left' } }} />
                <Typography variant="h2" sx={{ textAlign: { xs: 'center', md: 'left' }, marginBottom: 4, maxWidth: { xs: '310px', md: 'none' }, marginX: { xs: 'auto', md: '0' } }}>
                    {titleH2}
                </Typography>
                {description?.map((line, index) => (
                    <Typography variant="body1" gutterBottom key={index} maxWidth={{ md: '700px' }} marginX={{ xs: 'auto', md: '0' }}>
                        {line}
                    </Typography>
                ))}
                <ButtonLink endIcon={<ArrowForwardIos />} link={href ?? ""} variant="contained" color="primary" sx={{ marginTop: 2, mb: { xs: 8, md: 16 }, width: { xs: '100%', md: '60%' } }} >
                    {buttonText}
                </ButtonLink>
                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" flexWrap="wrap" gap={{ xs: 4, md: 0 }} alignItems="stretch">
                    {card && (
                        card.map((card) => (
                            <Box sx={{ width: { xs: '100%', md: '45%' }, mb: 4, display: 'flex', flexDirection: 'column' }} key={card.id} >
                                <CardAccordionService card={card} />
                            </Box>
                        ))
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default ServiceCard;