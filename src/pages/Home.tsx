import { TypeWriter } from "@/components/TypeWriter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">Kunwar Gupta</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground h-8">
            <TypeWriter 
              texts={[
                "Aspiring Data Analyst",
                "Problem Solver",
                "Lifelong Learner",
                "Creator"
              ]}
            />
          </div>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Passionate about turning data into insights and building solutions that make a difference.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link to="/projects">
            <Button size="lg" className="gap-2 glow-effect">
              View My Work <ArrowRight size={20} />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="gap-2">
              Get in Touch
            </Button>
          </Link>
        </div>

        <div className="flex gap-6 justify-center pt-8">
          <a 
            href="https://github.com/kunwargupta" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors glow-effect"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/kunwargupta" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors glow-effect"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:kunwar@example.com"
            className="text-muted-foreground hover:text-primary transition-colors glow-effect"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
