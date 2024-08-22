import { Typography } from "@mui/material";
import CardProcess from "./components/CardProcess"
import { cardProcessData } from "@/app/data/cardProcessData"
import ContactSection from "@/app/components/ContactSection/RenderMobile"

type Props = {}
function Page({ }: Props) {
    return (
        <>
            <Typography variant="h1" textAlign="center" sx={{ mb: 4 }}> 
                Notre processus de réalisation
            </Typography>
            <Typography variant="body1" gutterBottom >
                Chez Bâti Plâtre 57, nous suivons un processus structuré et rigoureux pour garantir la réussite de chaque projet.
            </Typography>
            <Typography variant="body1" gutterBottom mb={4} >
                Découvrez les étapes clés de notre méthode de travail.
            </Typography>
            {cardProcessData.map((card, index) => (
                <CardProcess key={index} {...card} />
            ))}
            <ContactSection />
        </>
    )
}
export default Page;