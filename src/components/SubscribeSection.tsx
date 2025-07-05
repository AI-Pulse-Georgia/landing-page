import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Radio } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { SPOTIFY_URL, YOUTUBE_URL } from "@/lib/const";

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
      description: "Listen on Spotify",
      link: SPOTIFY_URL,
    },
    {
      name: "YouTube",
      icon: Radio,
      color: "text-red-500",
      description: "Watch on YouTube",
      link: YOUTUBE_URL,
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Subscribe & <span className="gradient-text">Stay Connected</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Never miss an episode! Subscribe on your favorite platform and join our community of AI
            enthusiasts.
          </p>
        </div>

        {/* Platform Links */}
        <div className="grid md:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <Card
              key={platform.name}
              className={`bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-slide-up card-hover cursor-pointer glow-cyan stagger-${
                index + 1
              } group`}
              onClick={() => {
                if (platform.link) {
                  window.open(platform.link, "_blank");
                } else {
                  toast({
                    title: "Coming Soon!",
                    description: `${platform.name} integration will be available soon.`,
                  });
                }
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <platform.icon
                    className={`h-8 w-8 ${platform.color} group-hover:animate-pulse`}
                  />
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
