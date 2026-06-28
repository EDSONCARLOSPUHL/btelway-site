import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Zap, Package } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Rede MikroTik",
    description: "Segurança de rede profissional com firewall gerenciado, VPN e controle de origem.",
    features: [
      "Setup e configuração",
      "Firewall gerenciado",
      "VPN segura",
      "Monitoramento 24/7",
    ],
    price: "Sob consulta",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "IA Privada (RAG)",
    description: "Assistente de documentos rodando localmente. Seus dados não saem da empresa.",
    features: [
      "Ollama + Open WebUI",
      "Qdrant (banco vetorial)",
      "RAG sobre seus documentos",
      "Modelos 70B+ locais",
    ],
    price: "Sob consulta",
    color: "from-cyan-500 to-emerald-500",
    featured: true,
  },
  {
    icon: Package,
    title: "Combo Gerenciado",
    description: "Solução completa: Rede + IA Privada + Suporte técnico integrado.",
    features: [
      "Tudo acima +",
      "Suporte prioritário",
      "Automação (n8n)",
      "Backup e redundância",
    ],
    price: "Sob consulta",
    color: "from-emerald-500 to-amber-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Nossas Ofertas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Três Níveis de Serviço
          </h2>
          <p className="text-lg text-foreground/70">
            Escolha a solução que melhor se adequa ao seu negócio. Todas com suporte técnico dedicado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isFeature = service.featured;
            const scaleClass = isFeature ? "md:scale-105 md:shadow-xl" : "";

            return (
              <Card
                key={idx}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${scaleClass}`}
              >
                {/* Featured Badge */}
                {isFeature && (
                  <Badge className="absolute top-4 right-4 bg-destructive text-white">
                    Mais Popular
                  </Badge>
                )}

                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <Icon className="w-16 h-16 text-white opacity-80" />
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-accent/30 flex-shrink-0 mt-1" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-foreground/60 mb-1">A partir de:</p>
                    <p className="text-2xl font-bold text-primary">{service.price}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-4">
            Quer saber mais sobre como implementar? Agende uma conversa com nosso time técnico.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Solicitar Consultoria
          </button>
        </div>
      </div>
    </section>
  );
}
