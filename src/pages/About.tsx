import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, User } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Get to know me better
          </p>
        </div>

        <Card className="p-8 md:p-12 card-hover">
          <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
            <div className="mx-auto md:mx-0">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <User size={80} className="text-primary" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Kunwar Gupta</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm an aspiring data analyst with a passion for uncovering insights from data 
                  and creating meaningful visualizations. My journey in tech began with a curiosity 
                  about how data shapes decisions, and it has evolved into a dedication to mastering 
                  tools like Python, SQL, and various data visualization platforms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not analyzing datasets or building dashboards, you can find me learning 
                  new technologies, working on personal projects, or exploring ways to apply data 
                  science to real-world problems. I believe in continuous learning and always strive 
                  to improve my skills.
                </p>
              </div>

              <div className="pt-4">
                <Button className="gap-2 glow-effect">
                  <Download size={20} />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "Projects", value: "10+" },
            { label: "Skills", value: "15+" },
            { label: "Certificates", value: "5+" },
          ].map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
