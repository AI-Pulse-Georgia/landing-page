import { Card, CardContent } from "@/components/ui/card";
import { Brain, Lightbulb, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Deep dives into cutting-edge AI technologies and their real-world applications"
    },
    {
      icon: Users,
      title: "Industry Leaders",
      description: "Conversations with Georgia's AI pioneers, entrepreneurs, and researchers"
    },
    {
      icon: Lightbulb,
      title: "Future Insights",
      description: "Analysis of emerging trends and their impact on business and society"
    },
    {
      icon: Zap,
      title: "Local Focus",
      description: "Spotlighting Georgia's growing AI ecosystem and startup community"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-tech">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">AI Pulse Georgia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI Pulse Georgia is your gateway to understanding artificial intelligence's transformative impact on business, 
            society, and innovation in the Peach State. Join us as we explore the stories, insights, and breakthroughs 
            shaping our AI-powered future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-slide-up glow-cyan hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-pulse rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;