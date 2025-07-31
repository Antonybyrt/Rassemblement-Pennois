import { useState } from "react";
import { Geist } from "next/font/google";

// Import des composants
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BackgroundImage from "@/components/BackgroundImage";
import Programme from "@/components/Programme";
import AVosCotes from "@/components/AVosCotes";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`${geist.variable} font-sans`}>
      <SEOHead 
        title="Rassemblement Pennois - Les Pennes-Mirabeau"
        description="Maximilien Fusone, candidat aux élections municipales 2026. Conseiller municipal des Pennes-Mirabeau depuis 2014. Conseiller régional de Provence-Alpes-Côte-d'Azur depuis 2021."
        canonicalUrl="https://www.rassemblementpennois.com/"
      />
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <BackgroundImage />
      <Hero />
      <Programme />
      <AVosCotes />
      <Footer />
    </div>
  );
}
