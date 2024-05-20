import Image from "next/image";
import { Box } from "@mui/material";
import accueil7 from "../../../../../public/accueil7.webp";
import { TextDecoration } from "@/components/ui/CircleScrollAnimation";

export default function HeaderImage() {
    return (
        <Box sx={{ marginTop: '72px' }}>
            <Image src={accueil7} alt="Débarras et nettoyage" loading="eager" priority style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%'
            }} />
            <TextDecoration text="Débarras et nettoyage" variant="h1" styles={{ marginTop: 8, marginBottom: 4, fontWeight: 500 }} />
        </Box>
    );
}