import Header from "@/components/Header";
import LanguageToggle from "@/components/LanguageToggle";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import RequirementsSection from "@/components/RequirementsSection";
import FunnelSection from "@/components/FunnelSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <RequirementsSection />
      <FunnelSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <LanguageToggle />
    </div>
  );
};

export default Index;
