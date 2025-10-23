import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            I'd love to hear from you. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 card-hover animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full glow-effect">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Card className="p-6 card-hover">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:kunwar@example.com" 
                      className="hover:text-primary transition-colors"
                    >
                      kunwar@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a 
                      href="tel:+1234567890" 
                      className="hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>India</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-hover">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/kunwargupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <Github size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">@kunwargupta</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/kunwargupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <Linkedin size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Kunwar Gupta</p>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
