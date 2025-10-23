import { useState, useEffect } from "react";
import { Home, User, Briefcase, Award, FileText, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Award },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-gradient hover:scale-110 transition-transform duration-300"
          >
            KG
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 ${
                  activeSection === id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-4">
            {navItems.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`transition-all duration-300 hover:scale-125 ${
                  activeSection === id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
