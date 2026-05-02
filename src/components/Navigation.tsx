import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let rafId = 0;
    let target = 0;
    let current = 0;

    const computeTarget = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      target = docHeight > 0 ? Math.min(Math.max(window.scrollY / docHeight, 0), 1) : 0;

      setScrolled(window.scrollY > 80);

      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    const tick = () => {
      // Lerp toward target for smooth motion
      current += (target - current) * 0.18;
      if (Math.abs(target - current) < 0.0005) current = target;
      setScrollProgress(current);
      rafId = requestAnimationFrame(tick);
    };

    const onScroll = () => computeTarget();

    computeTarget();
    current = target;
    setScrollProgress(target);
    rafId = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  // Conic gradient that fills the ring border clockwise
  const progressDeg = Math.round(scrollProgress * 360);
  const ringBackground = `conic-gradient(from 0deg, hsl(var(--primary)) ${progressDeg}deg, hsl(var(--border)) ${progressDeg}deg 360deg)`;

  // Initial logo-only badge
  const LogoBadge = ({ inCapsule = false }: { inCapsule?: boolean }) => (
    <button
      onClick={() => scrollToSection("home")}
      className={`relative flex items-center justify-center rounded-full font-bold text-gradient transition-all duration-300 hover:scale-105 ${
        inCapsule ? "w-9 h-9 text-base" : "w-12 h-12 text-lg"
      }`}
      aria-label="Home"
      style={{
        background: ringBackground,
        padding: "2px",
      }}
    >
      <span className="w-full h-full rounded-full bg-card flex items-center justify-center">
        <span className="text-gradient">KG</span>
      </span>
    </button>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* INITIAL: logo-only badge top-left */}
      <div
        className={`absolute top-3 left-4 transition-all duration-[400ms] ease-out ${
          scrolled ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100 translate-y-0 pointer-events-auto"
        }`}
      >
        <LogoBadge />
      </div>

      {/* SCROLLED: floating capsule, centered */}
      <div
        className={`absolute top-3 left-1/2 -translate-x-1/2 transition-all duration-[400ms] ease-out ${
          scrolled
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
        }`}
      >
        {/* Conic progress ring wrapper */}
        <div
          className="rounded-full p-[2px] shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.45)]"
          style={{ background: ringBackground }}
        >
          <nav
            className="flex items-center gap-2 md:gap-4 rounded-full backdrop-blur-xl px-2 md:px-3 py-1.5"
            style={{ backgroundColor: "hsl(var(--card) / 0.9)" }}
          >
            <LogoBadge inCapsule />

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1 px-1">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center pl-1 border-l border-border/60 ml-1">
              <ThemeToggle />
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-1">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
                className="w-9 h-9 rounded-full flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile dropdown panel */}
        {mobileOpen && (
          <div
            className="md:hidden mt-2 mx-auto w-[min(92vw,320px)] rounded-2xl p-2 backdrop-blur-xl border border-primary/20 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)] animate-fade-in"
            style={{ backgroundColor: "hsl(var(--card) / 0.95)" }}
          >
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
