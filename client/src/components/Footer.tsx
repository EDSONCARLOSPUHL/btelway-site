/**
 * Footer — IA BTELWAY
 * Fundo escuro (primary), logo BTELway, navegação real por rotas (wouter) e contato direto.
 */
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { Mail, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5554933806130?text=" +
  encodeURIComponent("Olá! Vim pelo site e quero saber mais sobre a IA privada da BTELWAY.");

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const produto = [
    { label: "Serviços", href: "/servicos" },
    { label: "Arquitetura", href: "/arquitetura" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Preços", href: "/precos" },
  ];

  const empresa = [
    { label: "Casos de Uso", href: "/casos-de-uso" },
    { label: "Segurança", href: "/seguranca" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/btelway-logo.png"
                alt="BTELway"
                className="h-11 w-auto bg-white rounded-md p-1"
              />
              <span className="font-bold text-lg">IA BTELWAY</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Infraestrutura de IA privada para empresas que não podem terceirizar a segurança dos seus dados.
            </p>
            <div className="space-y-2 pt-2 text-sm">
              <a
                href="mailto:edsonpuhl@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-green-400" />
                edsonpuhl@gmail.com
              </a>
              <a
                href="tel:+5554933806130"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-green-400" />
                +55 (54) 9 3380-6130
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              {produto.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              {empresa.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal & Conformidade</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/seguranca" className="text-white/70 hover:text-white transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/seguranca" className="text-white/70 hover:text-white transition-colors">
                  Conformidade LGPD
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>&copy; {currentYear} IA BTELWAY. Todos os direitos reservados.</p>
          <p>Infraestrutura de IA privada · Dados sob seu controle</p>
        </div>
      </div>
    </footer>
  );
}
