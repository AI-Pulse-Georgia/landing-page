import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Linkedin, Youtube } from "lucide-react";
import { EMAIL, LINKEDIN_URL, YOUTUBE_URL } from "@/lib/const";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      link: YOUTUBE_URL,
      color: "text-red-500 hover:text-red-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: LINKEDIN_URL,
      color: "text-blue-600 hover:text-blue-500",
    },
    {
      name: "Email",
      icon: Mail,
      link: `mailto:${EMAIL}`,
      color: "text-secondary hover:text-secondary/80",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-tech">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a story to share? Questions about AI? Want to be featured on the podcast? We'd love
            to hear from you.
          </p>
        </div>

        <div
          className="grid lg:grid-cols-2 animate-slide-up gap-12"
          style={{ animationDelay: "0.2s" }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 glow-purple">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Connect With Us</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <span>{EMAIL}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MessageCircle className="h-5 w-5 mr-3 text-secondary" />
                  <span>DM us on social media</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    className="justify-start border-border/50 hover:border-primary/50"
                    onClick={() => {
                      if (social.link.startsWith("http")) {
                        window.open(social.link, "_blank");
                      } else if (social.link.startsWith("mailto")) {
                        window.location.href = social.link;
                      }
                    }}
                  >
                    <social.icon className={`h-4 w-4 mr-2 ${social.color}`} />
                    {social.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Guest Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                Are you working on innovative AI projects in Georgia? We'd love to feature your
                story on AI Pulse Georgia.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• AI researchers and academics</li>
                <li>• Tech entrepreneurs and founders</li>
                <li>• Industry leaders and innovators</li>
                <li>• AI ethics and policy experts</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border/30 text-center">
        <p className="text-muted-foreground">
          © 2025 AI Pulse Georgia. All rights reserved. | Exploring Georgia's AI Future
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;
