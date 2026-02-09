import ContactSection from "@/components/ContactSection";
import FeaturedPetsSection from "@/components/FeaturedPetsSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturedPetsSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
