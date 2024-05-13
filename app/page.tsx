import Accueil from '(pages)/accueil/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.batiplatre57.fr'),
    title: 'Accueil',
    description: 'BatiPlatre57 offre des services professionnels de plâtrerie, peinture, et rénovation. Découvrez nos solutions personnalisées pour valoriser votre espace.',
    keywords: 'Plâtrerie, Peinture, Rénovation, Isolation, Décoration intérieure, Metz, Lorraine',
    robots: 'index, follow',
    publisher: 'BatiPlatre57',
    openGraph: {
        title: 'BatiPlatre57 - Expertise en Plâtrerie, Peinture et Rénovation à Metz',
        description: 'Services professionnels de rénovation et décoration à Metz.',
        type: 'website',
        locale: 'fr_FR',
        url: 'https://www.batiplatre57.fr',
        siteName: 'BatiPlatre57',
    },
}


type Props = {}
export default function page({ }: Props) {
    return (
        <>
            <Accueil />
        </>
    )
}