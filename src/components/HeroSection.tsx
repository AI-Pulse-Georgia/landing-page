import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Radio } from "lucide-react";
import heroImage from "@/assets/ai-pulse-hero.jpg";
import { YOUTUBE_URL } from "@/lib/const";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
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

      {/* Magical Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Regular floating particles */}
        <div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-float glow-cyan"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-2 h-2 bg-secondary/50 rounded-full animate-float glow-purple"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-accent/35 rounded-full animate-float"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float glow-cyan"
          style={{ animationDelay: "3s", animationDuration: "3.5s" }}
        />

        {/* Pulsing particles */}
        <div
          className="absolute top-1/6 right-1/6 w-2 h-2 bg-brand-purple/40 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-1/6 left-1/6 w-1.5 h-1.5 bg-brand-cyan/40 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-2/3 left-1/5 w-1 h-1 bg-secondary/50 rounded-full animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />

        {/* Shooting stars */}
        <div
          className="absolute top-1/4 right-0 w-px h-px bg-primary animate-ping"
          style={{ animationDelay: "3s" }}
        >
          <div className="absolute inset-0 bg-primary/30 blur-sm w-8 h-0.5 transform -translate-x-full animate-pulse" />
        </div>
        <div
          className="absolute bottom-1/3 left-0 w-px h-px bg-secondary animate-ping"
          style={{ animationDelay: "6s" }}
        >
          <div className="absolute inset-0 bg-secondary/30 blur-sm w-6 h-0.5 transform translate-x-full animate-pulse" />
        </div>

        {/* Glowing orbs */}
        <div
          className="absolute top-1/3 left-1/6 w-4 h-4 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full animate-glow opacity-60"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/6 w-3 h-3 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full animate-glow opacity-50"
          style={{ animationDelay: "4s" }}
        />

        {/* Twinkling stars */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Spinning elements */}
        <div
          className="absolute top-1/5 left-1/2 w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full"
          style={{ animation: "float-rotate 6s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/5 right-1/2 w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full"
          style={{ animation: "float-rotate 8s ease-in-out infinite reverse" }}
        />

        {/* Color-shifting particles */}
        <div
          className="absolute top-1/2 left-1/5 w-1.5 h-1.5 rounded-full animate-color-shift"
          style={{ background: "currentColor", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/5 w-1 h-1 rounded-full animate-color-shift"
          style={{ background: "currentColor", animationDelay: "3s" }}
        />

        {/* Interactive hover particles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:scale-110 cursor-pointer animate-interactive-pulse" />
        </div>
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
            Exploring AI trends, innovation, and the people shaping the future of artificial
            intelligence in Georgia and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="hero-button px-8 py-4 text-lg font-semibold"
              onClick={() => window.open(YOUTUBE_URL, "_blank")}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Latest Episode
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="hero-button-secondary px-8 py-4 text-lg font-semibold border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => window.open(YOUTUBE_URL, "_blank")}
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
