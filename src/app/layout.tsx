import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Mui_provider from "./libs/mui_provider";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bati Plâtre 57 | Entreprise de rénovation à Metz",
  description: "Entreprise de rénovation à Metz spécialisée en travaux de rénovation intérieure, isolation, aménagement intérieur et extérieur. Devis gratuit pour vos projets de maison et appartement.",
  keywords: "rénovation, Metz, travaux, maison, isolation, aménagement intérieur, rénovation énergétique, artisans",
  openGraph: {
    title: "Bati Plâtre 57 | Votre partenaire rénovation à Metz",
    description: "Experts en travaux de rénovation, isolation et aménagement pour votre maison ou appartement à Metz. Devis gratuit et service personnalisé.",
    url: "https://www.batiplatre57.fr",
    siteName: "Bati Plâtre 57",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Mui_provider>
          <Header />
          <Container component="main" sx={{
            marginTop: 10,
            overflow: "hidden",
          }}>
            {children}
          </Container>
          <Footer />
        </Mui_provider>
      </body>
    </html>
  );
}