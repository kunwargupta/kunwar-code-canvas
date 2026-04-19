import { useState, useEffect } from "react";
import { Home, User, Briefcase, Award, FileText, Mail, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Award },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0);

      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
        <div
          className="h-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)] transition-[width] duration-150 ease-linear"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <nav
        className={`fixed top-[2px] left-0 right-0 z-50 backdrop-blur-xl bg-background/80 transition-all duration-300 ${
          scrolled
            ? "border-b border-primary/20 shadow-[0_2px_20px_hsl(var(--primary)/0.12)]"
            : "border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold text-gradient hover:scale-105 transition-transform"
            >
              KG
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 ${
                    activeSection === id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary)/0.7)]" />
                  )}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
                className="text-foreground hover:text-primary transition-colors"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {mobileOpen && (
            <div className="md:hidden pb-4 pt-2 space-y-1 animate-fade-in">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-card hover:text-primary"
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
