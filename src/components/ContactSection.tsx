import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send, Twitter, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      link: "https://www.youtube.com/@AIPulseGeorgia",
      color: "text-red-500 hover:text-red-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "#",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "#",
      color: "text-blue-600 hover:text-blue-500"
    },
    {
      name: "Email",
      icon: Mail,
      link: "mailto:contact@aipulsegeorgia.com",
      color: "text-primary hover:text-primary/80"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-tech">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a story to share? Questions about AI? Want to be featured on the podcast? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 animate-slide-up glow-cyan">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text flex items-center">
                <MessageCircle className="mr-3 h-6 w-6" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full hero-button">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 glow-purple">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Connect With Us</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <span>contact@aipulsegeorgia.com</span>
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
                        if (social.link.startsWith('http')) {
                          window.open(social.link, '_blank');
                        } else if (social.link.startsWith('mailto')) {
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
                  Are you working on innovative AI projects in Georgia? We'd love to feature your story on AI Pulse Georgia.
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
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border/30 text-center">
        <p className="text-muted-foreground">
          © 2024 AI Pulse Georgia. All rights reserved. | Exploring Georgia's AI Future
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;