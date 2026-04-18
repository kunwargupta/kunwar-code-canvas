import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026 <span className="text-foreground font-medium">Kunwar Ji Gupta</span> | Data Analyst
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/kunwargupta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.7)]"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/kunwarjigupta/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.7)]"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:Kunwargupta7@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.7)]"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
