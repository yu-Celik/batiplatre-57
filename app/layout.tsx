import type { Metadata } from "next";
const Header = dynamic(() => import('components/Header/Header'));
const FooterFixed = dynamic(() => import('components/Footer/FooterFixed'));
const Footer = dynamic(() => import('components/Footer/Footer'));
import { SpeedInsights } from '@vercel/speed-insights/next';
import Box from "@mui/material/Box";
import "./globals.css";
import 'components/Slider/stylesSimpleSlide.css';
import 'components/Slider/stylesSlideGallery.css'
import 'components/Slider/stylesSlideHeroSection.css'
import 'components/Slider/stylesSlideParallax.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import Providers from "./libs/ThemeProvider";
import { Analytics } from "@vercel/analytics/react"
import React from 'react';
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.batiplatre57.fr'),
  title: {
    default: 'BatiPlatre57 - Expertise en Plâtrerie, Peinture et Rénovation à Metz',
    template: '%s | BatiPlatre57 - Expertise en Plâtrerie, Peinture et Rénovation à Metz'
  },
  description: "BatiPlatre57 offre des services professionnels de plâtrerie, isolation et rénovation pour des projets résidentiels et commerciaux à Metz. Découvrez nos solutions sur mesure pour valoriser votre espace.",
  keywords: "Plâtrerie, Rénovation, Isolation, Peinture, Décoration intérieure, Metz, Lorraine",
  robots: "index, follow",
  publisher: "BatiPlatre57",
  openGraph: {
    title: 'BatiPlatre57 - Expertise en Plâtrerie, Peinture et Rénovation à Metz',
    type: "website",
    siteName: "BatiPlatre57",
    locale: "fr_FR",
    url: "https://www.batiplatre57.fr",
    description: "Services professionnels de rénovation et décoration à Metz.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const clientScript = `
  (function() {
    try {
      // Récupère les valeurs de thème stockées dans le localStorage
      const dataTheme = localStorage.getItem('data-theme');

      // Applique les valeurs récupérées aux attributs correspondants
      if (dataTheme) {
        if (dataTheme === 'system') {
          const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (prefersDarkScheme) {
            document.documentElement.setAttribute('class', 'dark');
          } else {
            document.documentElement.setAttribute('class', 'light');
          }
        } else {
          document.documentElement.setAttribute('class', dataTheme);
        }
      }
    } catch (e) {
      console.error(e);
    }
  })();
`;

  return (
    <html lang="fr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: clientScript }} />
      </head>
      <body>
        <Providers>
          <Header />
          <Box component="main">{children}</Box>
          <SpeedInsights />
          <Analytics />
          <FooterFixed />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}