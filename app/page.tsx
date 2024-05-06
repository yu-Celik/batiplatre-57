import Accueil from '(pages)/accueil/page';
import { Metadata } from 'next';
import img from '@/assets/Gallery/20150528_231208.jpg'
import { ExtendedMetadata } from 'layout';

export const metadata: ExtendedMetadata = {
    title: 'BatiPlatre57 - Expertise en Plâtrerie, Peinture et Rénovation à Metz',
    description: 'BatiPlatre57 offre des services professionnels de plâtrerie, peinture, et rénovation. Découvrez nos solutions personnalisées pour valoriser votre espace.',
    keywords: 'Plâtrerie, Peinture, Rénovation, Isolation, Décoration intérieure, Metz, Lorraine',
    robots: 'index, follow',
    publisher: 'BatiPlatre57',
    lang: 'fr',
    author: 'BatiPlatre57',
    og: {
        type: 'website',
        site_name: 'BatiPlatre57',
        locale: 'fr_FR',
        image: '/images/og-image.jpg',
        url: 'https://www.batiplatre57.com',
        description: 'Services professionnels de rénovation et décoration à Metz.'
    },
    twitter: {
        card: 'summary_large_image',
        site: '@batiplatre57',
        images: img.src,
        description: 'Expertise en plâtrerie et rénovation à Metz.'
    },
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: 'https://www.batiplatre57.com',
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