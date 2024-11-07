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
    menuiserieTitle?: string;
    plomberieTitle?: string;
    façadeIsolationExtToitureTitle?: string;
    charpenteToitureTitle?: string;
    card?: {
        id: string;
        imageUrl?: StaticImageData;
        title?: string;
        description?: string[];
        text?: string[];
        category?: 'menuiserie' | 'plomberie' | string;
    }[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({
    titleH1,
    titleH2,
    subTitle,
    description,
    buttonText,
    href,
    menuiserieTitle,
    plomberieTitle,
    façadeIsolationExtToitureTitle,
    charpenteToitureTitle,
    card
}) => {
    const menuiserieCards = card?.filter(c => c.category === 'menuiserie') || [];
    const plomberieCards = card?.filter(c => c.category === 'plomberie') || [];
    const otherCards = card?.filter(c => c.category !== 'menuiserie' && c.category !== 'plomberie') || [];
    const charpenteToitureCards = card?.filter(c => c.category === 'charpente-toiture') || [];
    const façadeIsolationExtToitureCards = card?.filter(c => c.category === 'façade-isolation-ext-toiture') || [];

    return (
        <Box component="section">
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
                <ButtonLink endIcon={<ArrowForwardIos />} link={href ?? ""} variant="contained" color="primary" sx={{ marginTop: 2, mb: { xs: 8, md: 16 }, width: { xs: '100%', md: '45%' } }} >
                    {buttonText}
                </ButtonLink>

                {charpenteToitureTitle && (
                    <>
                        <Typography variant="h2" variantMapping={{ h2: 'h3' }} gutterBottom sx={{ textAlign: 'center', marginBottom: 4, maxWidth: { xs: '310px', md: 'none' }, marginX: { xs: 'auto', md: '0' } }}>
                            {charpenteToitureTitle}
                        </Typography>
                        <CardGrid cards={charpenteToitureCards} />
                    </>
                )}

                {menuiserieTitle && (
                    <>
                        <Typography variant="h2" variantMapping={{ h2: 'h3' }} gutterBottom sx={{ textAlign: 'center', marginBottom: 4, maxWidth: { xs: '310px', md: 'none' }, marginX: { xs: 'auto', md: '0' } }}>
                            {menuiserieTitle}
                        </Typography>
                        <CardGrid cards={menuiserieCards} />
                    </>
                )}

                {façadeIsolationExtToitureTitle && (
                    <>
                        <Typography variant="h2" variantMapping={{ h2: 'h3' }} gutterBottom sx={{ textAlign: 'center', marginBottom: 4, maxWidth: { xs: '310px', md: 'none' }, marginX: { xs: 'auto', md: '0' }, mt: 8 }}>
                            {façadeIsolationExtToitureTitle}
                        </Typography>
                        <CardGrid cards={façadeIsolationExtToitureCards} />
                    </>
                )}

                {plomberieTitle && (
                    <>
                        <Typography variant="h2" variantMapping={{ h2: 'h3' }} gutterBottom sx={{ textAlign: 'center', marginBottom: 4, maxWidth: { xs: '310px', md: 'none' }, marginX: { xs: 'auto', md: '0' }, mt: 8 }}>
                            {plomberieTitle}
                        </Typography>
                        <CardGrid cards={plomberieCards} />
                    </>
                )}

                {(!menuiserieTitle && !plomberieTitle && !façadeIsolationExtToitureTitle && !charpenteToitureTitle) && <CardGrid cards={otherCards} />}
            </Box>
        </Box>
    );
};

const CardGrid: React.FC<{ cards: ServiceCardProps['card'] }> = ({ cards }) => (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" flexWrap="wrap" gap={{ xs: 4, md: 0 }} alignItems="stretch">
        {cards?.map((card) => (
            <Box sx={{ width: { xs: '100%', md: '45%' }, mb: 4, display: 'flex', flexDirection: 'column' }} key={card.id}>
                <CardAccordionService card={card} />
            </Box>
        ))}
    </Box>
);

export default ServiceCard;