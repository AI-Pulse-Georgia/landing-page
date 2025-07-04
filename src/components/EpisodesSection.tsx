import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Play, Clock } from "lucide-react";

const EpisodesSection = () => {
  const episodes = [
    {
      title: "The Future of AI in Healthcare",
      description: "Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment in Georgia's healthcare system.",
      duration: "42 min",
      date: "Dec 15, 2024"
    },
    {
      title: "AI Startups in Atlanta",
      description: "Meet the entrepreneurs building the next generation of AI companies in Georgia's thriving tech hub.",
      duration: "38 min", 
      date: "Dec 8, 2024"
    },
    {
      title: "Machine Learning in Agriculture",
      description: "How Georgia's farmers are using AI to optimize crop yields and sustainable farming practices.",
      duration: "35 min",
      date: "Dec 1, 2024"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Episodes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive into our latest conversations about AI innovation, technology trends, and the future of artificial intelligence.
          </p>
        </div>

        {/* YouTube Channel Embed */}
        <div className="mb-12 animate-slide-up">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 glow-cyan">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gradient-text">Watch on YouTube</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground mb-4">
                    Latest episodes available on our YouTube channel
                  </p>
                  <Button 
                    className="hero-button"
                    onClick={() => window.open('https://www.youtube.com/@AIPulseGeorgia', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit YouTube Channel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Episode List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode, index) => (
            <Card 
              key={episode.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 animate-slide-up hover:scale-105 glow-purple"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{episode.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{episode.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground line-clamp-2">
                  {episode.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {episode.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;