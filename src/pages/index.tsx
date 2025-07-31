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
import CanonicalRedirect from "@/components/CanonicalRedirect";
import { SEO_CONFIG } from "@/config/seo";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <CanonicalRedirect expectedPath="/" />
      <SEOHead
        title={SEO_CONFIG.pages.home.title}
        description={SEO_CONFIG.pages.home.description}
        canonicalUrl={SEO_CONFIG.pages.home.canonicalUrl}
      />
      <div className={`${geist.variable} font-sans`}>
        <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <BackgroundImage />
        <Hero />
        <Programme />
        <AVosCotes />
        <Footer />
      </div>
    </>
  );
}
