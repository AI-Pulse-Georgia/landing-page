import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Smartphone, Headphones, Radio, Rss } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to AI Pulse Georgia updates.",
      });
      setEmail("");
    }
  };

  const platforms = [
    {
      name: "Spotify",
      icon: Headphones,
      color: "text-green-500",
      description: "Listen on Spotify"
    },
    {
      name: "Apple Podcasts",
      icon: Smartphone,
      color: "text-primary",
      description: "Available on Apple Podcasts"
    },
    {
      name: "YouTube",
      icon: Radio,
      color: "text-red-500",
      description: "Watch on YouTube",
      link: "https://www.youtube.com/@AIPulseGeorgia"
    },
    {
      name: "RSS Feed",
      icon: Rss,
      color: "text-secondary",
      description: "Subscribe via RSS"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Subscribe & <span className="gradient-text">Stay Connected</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Never miss an episode! Subscribe on your favorite platform and join our community of AI enthusiasts.
          </p>
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-pulse mb-12 animate-slide-up">
          <CardContent className="p-8">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Get AI Pulse Updates
              </h3>
              <p className="text-white/90 mb-6">
                Subscribe to our newsletter for episode alerts, AI news, and exclusive content.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-white text-brand-navy hover:bg-white/90 font-semibold"
                >
                  Subscribe Now
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>

        {/* Platform Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <Card 
              key={platform.name}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-slide-up hover:scale-105 cursor-pointer glow-cyan"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                if (platform.link) {
                  window.open(platform.link, '_blank');
                } else {
                  toast({
                    title: "Coming Soon!",
                    description: `${platform.name} integration will be available soon.`,
                  });
                }
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-full mb-4">
                  <platform.icon className={`h-8 w-8 ${platform.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-slide-up">
          <p className="text-2xl font-semibold gradient-text mb-4">
            Subscribe & Stay Updated on Georgia's AI Future
          </p>
          <p className="text-muted-foreground">
            Join thousands of AI enthusiasts exploring the future of technology in Georgia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;