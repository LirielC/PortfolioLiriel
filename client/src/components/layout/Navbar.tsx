import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Sobre", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-heading uppercase tracking-wider text-sm font-bold",
        scrolled ? "bg-foreground/95 py-4 shadow-lg backdrop-blur-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center text-white">
        <a href="#" className="text-lg md:text-2xl font-display text-accent hover:text-accent/80 transition-colors">
          LirielC
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-primary transition-colors duration-300 border-b-2 border-transparent hover:border-primary pb-1"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-foreground border-t border-white/10 p-4 md:hidden flex flex-col space-y-4 shadow-xl animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-center py-2 hover:bg-white/5 rounded hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
