import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  const navItems = [
    { label: "Serviços", href: "/servicos" },
    { label: "Arquitetura", href: "/arquitetura" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Casos de Uso", href: "/casos-de-uso" },
    { label: "Segurança", href: "/seguranca" },
    { label: "Preços", href: "/precos" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ];

  const goToDemo = () => {
    setMobileMenuOpen(false);
    navigate("/contato");
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/btelway-logo.png"
            alt="BTELway Logo"
            className="h-11 w-auto transition-transform group-hover:scale-105"
          />
          <span className="font-bold text-lg text-primary hidden sm:inline">
            IA BTELWAY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-destructive hover:bg-destructive/90 text-white rounded-full px-6"
            onClick={goToDemo}
          >
            Solicitar Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="bg-destructive hover:bg-destructive/90 text-white rounded-full w-full mt-2"
              onClick={goToDemo}
            >
              Solicitar Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
