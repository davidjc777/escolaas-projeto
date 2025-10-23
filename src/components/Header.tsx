import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Infantil", href: "#infantil" },
    { label: "Aulas Grátis", href: "#aulas-gratis" },
    { label: "Contato", href: "#contato" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--jjt-blue))] backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <div className="hidden sm:block">
              <div className="font-bold text-foreground">Escola Ailton Simões</div>
              <div className="text-xs text-jjt-red">de Jiu-Jitsu</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a 
              href="https://wa.me/5571996862235?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20as%20aulas."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                Aula Experimental
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="https://wa.me/5571996862235?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20as%20aulas."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg" className="mt-4">
                  Aula Experimental
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;