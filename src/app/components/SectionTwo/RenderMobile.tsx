import { Box, Typography } from "@mui/material"
import Onde from "./Onde"

type Props = {}
function RenderMobile({ }: Props) {
    return (
        <>
            <Box>
                <Typography variant="h2" textAlign="center">
                    Découvrez nos services
                </Typography>
                <Typography variant="h6" textAlign="center">
                    Transformez votre espace avec notre expertise
                </Typography>
                <Typography variant="body1" textAlign="center">
                    Nous offrons une gamme complète de services pour revitaliser votre maison. Que ce soit pour une cuisine fonctionnelle, une salle de bains raffinée ou un salon accueillant, nous sommes là pour concrétiser vos idées avec créativité et savoir-faire.
                </Typography>
                <Typography variant="h6" textAlign="center">
                    Agrandissez et optimisez votre habitat
                </Typography>
                <Typography variant="body1" textAlign="center">
                    Profitez de nos compétences en extension pour ajouter de l&apos;espace à votre domicile. Nous créons des solutions qui complètent harmonieusement votre environnement existant, tout en maximisant la fonctionnalité et l&apos;esthétique.
                </Typography>
                <Typography variant="h6" textAlign="center">
                    Engagement envers la qualité et votre satisfaction
                </Typography>
                <Typography variant="body1" textAlign="center">
                    Notre engagement est de réaliser vos projets de rénovation et d&apos;extension avec le plus haut niveau de qualité. Nous travaillons à vos côtés pour garantir que chaque détail répond à vos attentes.
                </Typography>
                <Typography variant="h6" textAlign="center">
                    Nos spécialités
                </Typography>
                <Typography variant="body1" textAlign="center">
                    Nous sommes experts en plâtrerie et isolation, débarras et nettoyage, menuiserie, pose de sols, aménagement intérieur, décoration, peinture et carrelage. Chaque projet est une opportunité de mettre en œuvre notre expertise pour embellir votre espace.
                </Typography>
            </Box>
        </>
    )
}
export default RenderMobile