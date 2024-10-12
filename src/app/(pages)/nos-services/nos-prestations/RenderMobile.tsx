import SubtitleTitle from "@/app/components/SubtitleTitle"
import { Box, Typography } from "@mui/material"
import ServiceCard from "../components/ServiceCard"
import { servicesData } from '@/app/data/servicesData';
import { peintureImg } from "@/app/data/imagesSlideHome";

type Props = {}

function RenderMobile({ }: Props) {
    return (
        <>
            <Box component="section" mt={{ xs: 8, md: 16 }}>
                <Box>
                    <SubtitleTitle href="#" text="Ce que nous offrons" sx={{ marginTop: '1.5rem', textAlign: 'center' }} />
                    <Typography variant="h2" textAlign="center" sx={{ marginBottom: 4 }}>
                        Nos prestations
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', gap: { xs: 0, md: 4 }, flexWrap: 'wrap' }}>
                    {servicesData.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.titleH1}
                            subtitle={getServiceSubtitles(service.id)}
                            description={getServiceDescriptions(service.id)}
                            imageUrl={peintureImg}
                            buttonText="En savoir plus"
                            href={`/nos-services/${service.id}`}
                        />
                    ))}
                </Box>
            </Box>
        </>
    )
}

function getServiceSubtitles(serviceId: string): string[] {
    switch (serviceId) {
        case "maconnerie-extension":
            return ["Fondations et gros œuvre", "Extensions et rénovations"];
        case "platrerie-isolation":
            return ["Isolation thermique et acoustique", "Finitions intérieures"];
        case "facade-isolation-ext-toiture":
            return ["Rénovation de façades", "Isolation extérieure"];
        case "electricite-sol-chauffant":
            return ["Installations électriques", "Systèmes de chauffage innovants"];
        case "menuiserie-plomberie":
            return ["Menuiserie sur mesure", "Plomberie et sanitaires"];
        case "peinture-pose-de-sol-carrelage":
            return ["Peinture et décoration", "Revêtements de sol"];
        case "platrerie-isolation-interieur":
            return ["Isolation thermique et acoustique", "Finitions intérieures"];
        default:
            return ["", ""];
    }
}

function getServiceDescriptions(serviceId: string): string[] {
    switch (serviceId) {
        case "maconnerie-extension":
            return ["Construction solide et durable pour vos projets", "Agrandissement et modernisation de votre espace de vie"];
        case "platrerie-isolation":
            return ["Optimisation du confort thermique et acoustique", "Création d'espaces intérieurs esthétiques et fonctionnels"];
        case "facade-isolation-ext-toiture":
            return ["Embellissement et protection de l'extérieur de votre maison", "Amélioration de l'efficacité énergétique de votre bâtiment"];
        case "electricite-sol-chauffant":
            return ["Solutions électriques modernes et sécurisées", "Confort thermique optimal avec des systèmes de chauffage efficaces"];
        case "menuiserie-plomberie":
            return ["Création et installation de menuiseries personnalisées", "Systèmes de plomberie fiables et économes en eau"];
        case "peinture-pose-de-sol-carrelage":
            return ["Finitions de qualité pour un intérieur raffiné", "Installation experte de divers revêtements de sol"];
        case "platrerie-isolation-interieur":
            return ["Optimisation du confort thermique et acoustique", "Création d'espaces intérieurs esthétiques et fonctionnels"];
        default:
            return ["", ""];
    }
}

export default RenderMobile