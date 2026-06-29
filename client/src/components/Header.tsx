/**
 * Header — IA BTELWAY
 * Transparente sobre o hero escuro; vira sólido (branco) ao rolar para garantir contraste.
 * Logo de asas BTELway + wordmark "IA BTELWAY". CTA verde (cor da marca).
 */
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Arquitetura", href: "/arquitetura" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Casos de Uso", href: "/casos-de-uso" },
    { label: "Segurança", href: "/seguranca" },
    { label: "Serviços", href: "/servicos" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ];

  const goToDemo = () => {
    setMobileMenuOpen(false);
    navigate("/contato");
  };

  const solid = scrolled || mobileMenuOpen || !isHome;
  const linkColor = solid
    ? "text-foreground/70 hover:text-green-600"
    : "text-white/80 hover:text-white";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img
            src="/btelway-logo.png"
            alt="BTELway"
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
          <span
            className={`font-bold text-lg hidden sm:inline transition-colors ${
              solid ? "text-primary" : "text-white"
            }`}
          >
            IA BTELWAY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 ml-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors whitespace-nowrap ${linkColor}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block shrink-0">
          <Button
            className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 font-semibold shadow-lg shadow-green-500/25"
            onClick={goToDemo}
          >
            Solicitar Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            solid ? "hover:bg-muted text-foreground" : "hover:bg-white/10 text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-green-600 hover:bg-muted/50 transition-colors py-3 px-2 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="bg-green-500 hover:bg-green-600 text-white rounded-full w-full mt-3"
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
