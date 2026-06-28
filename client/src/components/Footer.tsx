import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container py-16">
        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/manus-storage/logo-edson-ia_c9b074bd.png"
                alt="Edson IA Logo"
                className="w-8 h-8"
              />
              <span className="font-bold text-lg">Edson IA</span>
            </div>
            <p className="text-white/70 text-sm">
              Infraestrutura de IA privada para empresas que não podem terceirizar segurança.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-white/70 hover:text-white transition-colors">
                  Arquitetura
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-white/70 hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  LGPD
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <Separator className="bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
          <p>&copy; {currentYear} Edson IA. Todos os direitos reservados.</p>
          <p>
            Desenvolvido com ❤️ para empresas que valorizam privacidade e inovação.
          </p>
        </div>
      </div>
    </footer>
  );
}
