import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Serviços", href: "#services" },
    { label: "Arquitetura", href: "#architecture" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/manus-storage/logo-edson-ia_c9b074bd.png"
            alt="Edson IA Logo"
            className="w-8 h-8 transition-transform group-hover:scale-110"
          />
          <span className="font-bold text-lg text-primary hidden sm:inline">
            IA BtewAy
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/solucoes" className="text-foreground/70 hover:text-foreground transition-colors">Soluções</Link>
          <Link href="/casos-de-uso" className="text-foreground/70 hover:text-foreground transition-colors">Casos de Uso</Link>
          <Link href="/seguranca" className="text-foreground/70 hover:text-foreground transition-colors">Segurança</Link>
          <Link href="/precos" className="text-foreground/70 hover:text-foreground transition-colors">Preços</Link>
          <Link href="/blog" className="text-foreground/70 hover:text-foreground transition-colors">Blog</Link>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-destructive hover:bg-destructive/90 text-white rounded-full px-6"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Solicitar Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="bg-destructive hover:bg-destructive/90 text-white rounded-full w-full mt-2"
              onClick={() => {
                setMobileMenuOpen(false);
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Solicitar Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
