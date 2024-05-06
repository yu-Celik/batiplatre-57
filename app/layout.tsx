import type { Metadata } from "next";
import "globals.css";
import ThemeProvider from "@/libs/ThemeProvider"; // Assurez-vous que le chemin d'importation est correct
import Header from "components/Header/Header";
import FooterFixed from "components/Footer/FooterFixed";
// import Footer from "components/Footer/Footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Footer from "components/Footer/Footer";
export type ExtendedMetadata = Metadata & {
  title: string;
  description: string;
  keywords: string;
  robots: string;
  lang: string;
  author: string;
  publisher: string;
  og: {
      type: string;
      site_name: string;
      locale: string;
      image: string;
      url: string;
      description: string;
  };
  twitter: {
      card: string;
      site: string;
      images: string;
      description: string;
  };
  openGraph: {
      type: string;
      locale: string;
      url: string;
      siteName: string;
  };
}
export const metadata: ExtendedMetadata = {
  title: "BatiPlatre57 - Expertise en Plâtrerie et Rénovation à Metz",
  description: "BatiPlatre57 offre des services professionnels de plâtrerie, isolation et rénovation pour des projets résidentiels et commerciaux à Metz. Découvrez nos solutions sur mesure pour valoriser votre espace.",
  keywords: "Plâtrerie, Rénovation, Isolation, Peinture, Décoration intérieure, Metz, Lorraine",
  lang: "fr",
  robots: "index, follow",
  author: "BatiPlatre57",
  publisher: "BatiPlatre57",
  og: {
    type: "website",
    site_name: "BatiPlatre57",
    locale: "fr_FR",
    image: "/images/og-image.jpg",
    url: "https://www.batiplatre57.com",
    description: "Services professionnels de rénovation et décoration à Metz."
  },
  twitter: {
    card: "summary_large_image",
    site: "@batiplatre57",
    images: "/images/twitter-image.jpg",
    description: "Expertise en plâtrerie et rénovation à Metz."
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.batiplatre57.com",
    siteName: "BatiPlatre57"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
            <FooterFixed />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}