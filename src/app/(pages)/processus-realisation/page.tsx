import { Box, Typography } from "@mui/material";
import CardProcess from "./components/CardProcess"
import { cardProcessData } from "@/app/data/cardProcessData"
import ContactSection from "@/app/components/ContactSection/RenderMobile"

type Props = {}
function Page({ }: Props) {
    return (
        <>
            <Typography variant="h1" gutterBottom sx={{ textAlign: { xs: 'center' }, mt: { md: 8 } }}>
                Notre processus de réalisation
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mt: { xs: 0, md: 8 } }}>
                Chez Bâti Plâtre 57, nous suivons un processus structuré et rigoureux pour garantir la réussite de chaque projet.
            </Typography>
            <Typography variant="body1" gutterBottom mb={4} >
                Découvrez les étapes clés de notre méthode de travail :
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: { xs: 0, md: 4 }, flexWrap: 'wrap', my: { xs: 0, md: 8 } }}>
                {cardProcessData.map((card) => (
                    <CardProcess key={card.id} {...card} />
                ))}
            </Box>
            <ContactSection />
        </>
    )
}
export default Page;