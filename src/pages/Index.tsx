import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HostSection from "@/components/HostSection";
import SubscribeSection from "@/components/SubscribeSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <HostSection />
      <SubscribeSection />
      <ContactSection />
    </div>
  );
};

export default Index;
