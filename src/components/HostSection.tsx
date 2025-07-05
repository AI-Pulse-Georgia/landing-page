import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import hostImage from "@/assets/host.jpeg";
import { Link } from "react-router-dom";

const HostSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-tech">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Your <span className="gradient-text">Host</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn about the voice behind AI Pulse Georgia and their passion for artificial
            intelligence innovation.
          </p>
        </div>

        <a href="https://www.linkedin.com/in/tornike-bolokadze/" target="_blank">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 animate-slide-up glow-cyan max-w-2xl mx-auto card-hover">
            <CardContent className="p-8 text-center">
              <div className="w-32 h-32 bg-gradient-pulse rounded-full mx-auto mb-6 flex items-center justify-center animate-float group">
                <img
                  src={hostImage}
                  alt="Host"
                  className="w-28 h-28 bg-background rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground">AI Pulse Georgia Host</h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your guide through Georgia's AI landscape, bringing you insights from industry
                leaders, researchers, and innovators who are shaping the future of artificial
                intelligence. With a passion for technology and storytelling, we explore the human
                side of AI innovation.
              </p>

              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </CardContent>
          </Card>
        </a>
      </div>
    </section>
  );
};

export default HostSection;
