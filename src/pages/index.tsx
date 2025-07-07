import { useState } from "react";
import { Geist } from "next/font/google";

// Import des composants
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BackgroundImage from "@/components/BackgroundImage";
import Programme from "@/components/Programme";
import Actualites from "@/components/Actualites";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`${geist.variable} font-sans`}>
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <BackgroundImage />
      <Hero />
      <Programme />
      <Actualites />
      <Contact />
      <Footer />
    </div>
  );
}
