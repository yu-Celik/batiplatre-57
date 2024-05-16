import type { Metadata } from "next";
import "globals.css";
import Header from "components/Header/Header";
import FooterFixed from "components/Footer/FooterFixed";
// import Footer from "components/Footer/Footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Footer from "components/Footer/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import CustomThemeProvider from 'libs/ThemeProvider';

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
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true, key: 'css' }}>
          <CustomThemeProvider>
            <Header />
            {children}
            <SpeedInsights />
            <Footer />
            <FooterFixed />
          </CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}