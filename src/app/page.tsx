import { Metadata } from 'next';
import Accueil from "./(pages)/accueil/page";

export const metadata: Metadata = {
  title: "Accueil | Bati Plâtre 57 - Rénovation à Metz",
  description: "Bati Plâtre 57, votre entreprise de rénovation à Metz. Experts en travaux de rénovation intérieure, isolation, et aménagement pour votre maison ou appartement.",
};

export default function Home() {
  return (
    <>
      <Accueil />
    </>
  );
}