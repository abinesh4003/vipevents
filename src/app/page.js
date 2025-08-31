import Image from "next/image";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import SpecialHighlightsSection from "./components/Special";
import Stalls from "./components/Stalls";
import WhyChooseUsSection from "./components/WhyChooseUs";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutUs />
      <Services />
      <SpecialHighlightsSection />
      <Stalls/>
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
