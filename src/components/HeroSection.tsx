import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Radio } from "lucide-react";
import heroImage from "@/assets/ai-pulse-hero.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Animated Pulse Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="pulse-ring w-32 h-32 animate-pulse-ring" />
        <div className="pulse-ring-secondary w-48 h-48 animate-pulse-ring" style={{ animationDelay: '1s' }} />
        <div className="pulse-ring w-64 h-64 animate-pulse-ring" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">AI PULSE</span>
            <br />
            <span className="text-foreground">GEORGIA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Exploring AI trends, innovation, and the people shaping the future of artificial intelligence in Georgia and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="hero-button px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('https://www.youtube.com/@AIPulseGeorgia', '_blank')}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Latest Episode
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="hero-button-secondary px-8 py-4 text-lg font-semibold border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <Radio className="mr-2 h-5 w-5" />
              Subscribe Now
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe & Stay Updated on Georgia's AI Future
            </p>
            
            <button 
              onClick={scrollToAbout}
              className="text-primary hover:text-primary/80 transition-colors animate-float"
              aria-label="Scroll to about section"
            >
              <ChevronDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;