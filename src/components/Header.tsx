import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <span className="text-xl font-bold font-[var(--font-heading)] text-foreground tracking-tight flex flex-col leading-none">
          <span className="text-primary text-2xl">Shiva</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-sans">Conexões em PVC</span>
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Início", id: "hero" },
            { label: "Sobre", id: "about" },
            { label: "Vagas", id: "jobs" },
            { label: "Candidatar-se", id: "form" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4">
          {[
            { label: "Início", id: "hero" },
            { label: "Sobre", id: "about" },
            { label: "Vagas", id: "jobs" },
            { label: "Candidatar-se", id: "form" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
