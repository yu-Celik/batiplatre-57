import SubtitleTitle from "@/app/components/SubtitleTitle"
import { Box, Typography } from "@mui/material"
import ServiceCard from "../components/ServiceCard"
import { amenagementCombleImg, peintureImg, platerieImg, poseDeSolImg } from '@/app/data/imagesSlideHome';

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
                    <ServiceCard title="Platrerie et isolation" subtitle={["Isolation des Plafonds, Murs et Sols :", "Rénovation de Pièces Existantes :"]} description={["Réduction des nuisances sonores et optimisation du confort thermique.", "Amélioration et modernisation de vos espaces actuels."]} imageUrl={peintureImg} buttonText="Voir tous nos services en plâtrerie et isolation" href="#" />
                    <ServiceCard title="Platrerie et isolation" subtitle={["Subtitle 1", "Subtitle 2"]} description={["Description de la platrerie et isolation", "Description de la platrerie et isolation"]} imageUrl={peintureImg} buttonText="En savoir plus" href="#" />
                    <ServiceCard title="Platrerie et isolation" subtitle={["Subtitle 1", "Subtitle 2"]} description={["Description de la platrerie et isolation", "Description de la platrerie et isolation"]} imageUrl={peintureImg} buttonText="En savoir plus" href="#" />
                    <ServiceCard title="Platrerie et isolation" subtitle={["Subtitle 1", "Subtitle 2"]} description={["Description de la platrerie et isolation", "Description de la platrerie et isolation"]} imageUrl={peintureImg} buttonText="En savoir plus" href="#" />
                    <ServiceCard title="Platrerie et isolation" subtitle={["Subtitle 1", "Subtitle 2"]} description={["Description de la platrerie et isolation", "Description de la platrerie et isolation"]} imageUrl={peintureImg} buttonText="En savoir plus" href="#" />
                </Box>
            </Box>
        </>
    )
}
export default RenderMobile