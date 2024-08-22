import { Box, Typography } from "@mui/material";
import ButtonLink from "../../../components/ButtonLink";
import SubtitleTitle from "@/app/components/SubtitleTitle";
import CardAccordionService from "./CardAccordionService";
import { StaticImageData } from "next/image";

type ServiceCardProps = {
    titleH1?: string;
    titleH2?: string;
    subTitle?: string;
    description?: string[];
    buttonText?: string;
    href?: string;
    card?: {
        imageUrl?: StaticImageData;
        title?: string;
        description?: string[];
        text?: string[];
    }[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({ titleH1, titleH2, subTitle, description, buttonText, href, card }) => {
    return (
        <Box component="section" sx={{}}>
            <Typography variant="h1" gutterBottom textAlign="center">
                {titleH1}
            </Typography>
            <Box my={4}>
                <SubtitleTitle href="#" text={subTitle ?? ""} sx={{ textAlign: 'center' }} />
                <Typography variant="h2" sx={{ textAlign: 'center', mb: 4 }}>
                    {titleH2}
                </Typography>
                {description?.map((line, index) => (
                    <Typography variant="body1" gutterBottom key={index}>
                        {line}
                    </Typography>
                ))}
                <ButtonLink href={href ?? ""} variant="contained" color="primary" text={buttonText ?? ""} sx={{ mb: 4 }} />
                {card && (
                    card.map((card) => (
                        <CardAccordionService card={card} key={card.title} />
                    ))
                )}
            </Box>
        </Box>
    );
};

export default ServiceCard;