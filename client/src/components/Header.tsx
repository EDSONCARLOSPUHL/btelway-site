/**
 * Header — IA BTELWAY
 * Transparente sobre o hero escuro; vira sólido (branco) ao rolar para garantir contraste.
 * Logo de asas BTELway + wordmark "IA BTELWAY". CTA verde (cor da marca).
 * Menu com submenus suspensos: "A Empresa" e "Soluções" (hover no desktop, toque no mobile).
 */
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

type NavLink = { label: string; href: string };
type NavGroup = { label: string; items: NavLink[] };
type NavEntry = NavGroup | NavLink;

const isGroup = (e: NavEntry): e is NavGroup => "items" in e;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const [location, navigate] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navEntries: NavEntry[] = [
    {
      label: "A Empresa",
      items: [
        { label: "Quem Somos", href: "/quem-somos" },
        { label: "Roadmap", href: "/roadmap" },
      ],
    },
    {
      label: "Soluções",
      items: [
        { label: "Casos de Uso", href: "/casos-de-uso" },
        { label: "Arquitetura", href: "/arquitetura" },
        { label: "Segurança", href: "/seguranca" },
      ],
    },
    { label: "Serviços", href: "/servicos" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ];

  const goToDemo = () => {
    setMobileMenuOpen(false);
    navigate("/contato");
  };

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setOpenMobile(null);
  };

  const solid = scrolled || mobileMenuOpen || !isHome;
  const linkColor = solid
    ? "text-white/75 hover:text-green-500"
    : "text-white/80 hover:text-white";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        solid
          ? "bg-[#08160f]/95 backdrop-blur-md border-b border-green-500/15 shadow-sm shadow-black/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img
            src="/logo-btelway.png"
            alt="BTELway"
            className="h-11 w-auto transition-transform group-hover:scale-105"
          />
          <span
            className="font-bold text-lg hidden sm:inline transition-colors text-white"
          >
            IA BTELWAY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 ml-8">
          {navEntries.map((entry) =>
            isGroup(entry) ? (
              <div
                key={entry.label}
                className="relative"
                onMouseEnter={() => setOpenDesktop(entry.label)}
                onMouseLeave={() => setOpenDesktop((cur) => (cur === entry.label ? null : cur))}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap ${linkColor}`}
                  aria-haspopup="true"
                  aria-expanded={openDesktop === entry.label}
                >
                  {entry.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDesktop === entry.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 top-full pt-3 transition-all duration-200 origin-top ${
                    openDesktop === entry.label
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="min-w-[200px] rounded-xl bg-[#0c1f15] border border-green-500/15 shadow-xl shadow-black/40 p-2">
                    {entry.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm font-medium text-white/75 hover:text-green-500 hover:bg-green-500/10 transition-colors rounded-lg px-3 py-2.5"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={entry.label}
                href={entry.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${linkColor}`}
              >
                {entry.label}
              </Link>
            ),
          )}
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
          className="lg:hidden p-2 rounded-lg transition-colors hover:bg-white/10 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-green-500/15 bg-[#08160f]">
          <nav className="container py-4 flex flex-col gap-1">
            {navEntries.map((entry) =>
              isGroup(entry) ? (
                <div key={entry.label}>
                  <button
                    className="w-full flex items-center justify-between text-sm font-semibold text-white hover:text-green-500 hover:bg-white/5 transition-colors py-3 px-2 rounded-lg"
                    onClick={() =>
                      setOpenMobile((cur) => (cur === entry.label ? null : entry.label))
                    }
                    aria-expanded={openMobile === entry.label}
                  >
                    {entry.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMobile === entry.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobile === entry.label && (
                    <div className="flex flex-col gap-1 pl-3 mb-1 border-l-2 border-green-500/30 ml-2">
                      {entry.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-sm font-medium text-white/65 hover:text-green-500 hover:bg-white/5 transition-colors py-2.5 px-2 rounded-lg"
                          onClick={closeMobile}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={entry.label}
                  href={entry.href}
                  className="text-sm font-semibold text-white hover:text-green-500 hover:bg-white/5 transition-colors py-3 px-2 rounded-lg"
                  onClick={closeMobile}
                >
                  {entry.label}
                </Link>
              ),
            )}
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
