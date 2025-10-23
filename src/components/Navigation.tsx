import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Award, FileText, Mail } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: User },
  { path: "/projects", label: "Projects", icon: Briefcase },
  { path: "/skills", label: "Skills", icon: Award },
  { path: "/resume", label: "Resume", icon: FileText },
  { path: "/contact", label: "Contact", icon: Mail },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gradient">
            KG
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-4">
            {navItems.map(({ path, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`transition-colors ${
                  location.pathname === path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
