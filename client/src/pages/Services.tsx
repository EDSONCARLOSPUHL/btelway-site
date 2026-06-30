/**
 * Services — IA BTELWAY
 * Página unificada: Serviços + Preços. Mantém os 3 níveis de serviço, a tabela
 * comparativa e os planos de assinatura num só lugar. Identidade verde BTELway.
 */
import { Link } from "wouter";
import Header from "@/components/Header";
import TechBackground from "@/components/TechBackground";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Network, Brain, Zap, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Rede MikroTik Gerenciada",
      icon: Network,
      description: "Infraestrutura de rede segura e otimizada para sua empresa.",
      features: [
        "Firewall gerenciado com controle de origem",
        "VPN para acesso remoto seguro",
        "Configuração e gestão contínua",
        "Suporte técnico especializado",
        "Relatórios de segurança mensais",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "IA Privada / RAG Hospedada",
      icon: Brain,
      description: "Assistente de IA que fica dentro da sua empresa, processando seus dados.",
      features: [
        "Modelos de IA rodando localmente (sem enviar dados para nuvem)",
        "RAG (Retrieval-Augmented Generation) para documentos",
        "Indexação de PDFs, DOCs e bases de conhecimento",
        "Interface web privada (acesso por VPN)",
        "Conformidade LGPD garantida",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Combo Gerenciado (Rede + IA)",
      icon: Zap,
      description: "Solução completa: segurança de rede + IA privada + suporte 24/7.",
      features: [
        "Tudo do plano MikroTik + IA Privada",
        "Suporte 24/7 dedicado",
        "Monitoramento contínuo da infraestrutura",
        "Backup automático de dados e configurações",
        "Escalabilidade conforme sua demanda cresce",
      ],
      color: "from-green-500 to-green-500",
    },
  ];

  const plans = [
    {
      name: "Rede Gerenciada",
      price: "Sob consulta",
      period: "",
      description: "Segurança de rede MikroTik para sua operação.",
      features: [
        "Firewall e VPN gerenciados",
        "Gestão e monitoramento da rede",
        "Suporte técnico especializado",
        "Relatórios de segurança mensais",
      ],
      cta: "Solicitar Orçamento",
      highlighted: false,
    },
    {
      name: "IA Privada",
      price: "Sob consulta",
      period: "",
      description: "Inteligência artificial rodando dentro da sua empresa.",
      features: [
        "Modelos de IA 100% locais",
        "RAG sobre seus documentos",
        "Interface privada por VPN",
        "Conformidade LGPD nativa",
        "Custo mensal fixo e previsível",
      ],
      cta: "Agendar Demonstração",
      highlighted: true,
    },
    {
      name: "Combo Gerenciado",
      price: "Sob consulta",
      period: "",
      description: "Rede + IA privada + gestão completa.",
      features: [
        "Tudo da Rede Gerenciada + IA Privada",
        "Suporte 24/7 dedicado",
        "Monitoramento contínuo",
        "Backup e disaster recovery",
        "Escalabilidade sob demanda",
      ],
      cta: "Falar com Especialista",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <TechBackground />
      <Header />
      <Seo
        title="Serviços e Planos | IA BTELWAY - IA Privada e Soberana"
        description="Rede gerenciada, IA privada e combo gerenciado. Infraestrutura de IA soberana com custo fixo, dados protegidos e conformidade com a LGPD."
        path="/servicos"
      />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-20 px-4 border-b border-border">
          <div className="container">
            <span className="inline-block text-green-500 font-semibold text-sm tracking-wide uppercase mb-4">
              Serviços & Planos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Serviços e Investimento
            </h1>
            <p className="text-xl text-foreground/85 max-w-2xl">
              Três níveis — da segurança de rede à IA privada completa. Custo fixo e previsível.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4 text-foreground">O que entregamos</h2>
            <p className="text-foreground/80 mb-12 max-w-2xl">
              Tudo gerenciado de ponta a ponta. Você foca no negócio, nós na infraestrutura.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.id}
                    className="p-8 border border-border hover:border-green-500/50 hover:shadow-lg transition-all flex flex-col"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-foreground/85 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparação Detalhada */}
        <section className="py-20 px-4 bg-muted/20 border-y border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Comparação de Recursos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-background/50 rounded-xl overflow-hidden">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left py-4 px-4 font-bold text-foreground">Recurso</th>
                    <th className="text-center py-4 px-4 font-bold text-foreground">Rede</th>
                    <th className="text-center py-4 px-4 font-bold text-foreground">IA Privada</th>
                    <th className="text-center py-4 px-4 font-bold text-foreground">Combo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Firewall Gerenciado", mikrotik: true, ia: false, combo: true },
                    { feature: "VPN Segura", mikrotik: true, ia: false, combo: true },
                    { feature: "IA Local (Privada)", mikrotik: false, ia: true, combo: true },
                    { feature: "RAG / Documentos", mikrotik: false, ia: true, combo: true },
                    { feature: "Suporte 24/7", mikrotik: false, ia: false, combo: true },
                    { feature: "Monitoramento Contínuo", mikrotik: false, ia: false, combo: true },
                    { feature: "Backup Automático", mikrotik: false, ia: false, combo: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border/50">
                      <td className="py-4 px-4 text-foreground">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {row.mikrotik ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-foreground/30">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.ia ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-foreground/30">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.combo ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-foreground/30">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Planos / Preços */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block text-green-500 font-semibold text-sm tracking-wide uppercase mb-4">
                Planos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Investimento sob medida
              </h2>
              <p className="text-foreground/85 max-w-2xl mx-auto">
                O valor é definido após um diagnóstico gratuito. Sem taxas ocultas, custo mensal
                previsível.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {plans.map((plan, idx) => (
                <Card
                  key={idx}
                  className={`p-8 border flex flex-col transition-all ${
                    plan.highlighted
                      ? "border-green-500 shadow-xl shadow-green-500/10 md:-translate-y-2"
                      : "border-border hover:border-green-500/50"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="inline-block self-start px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-4">
                      MAIS PROCURADO
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-foreground/80 text-sm mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-foreground/80">{plan.period}</span>}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contato">
                    <Button
                      size="lg"
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-foreground/10 hover:bg-foreground/20 text-foreground"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-muted/20 border-y border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Perguntas Frequentes
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <Card className="p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Como é definido o valor?</h3>
                <p className="text-foreground/85 text-sm">
                  Após um diagnóstico gratuito, montamos uma proposta com custo mensal fixo, sem
                  cobrança por uso.
                </p>
              </Card>
              <Card className="p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">
                  Meus dados saem da minha empresa?
                </h3>
                <p className="text-foreground/85 text-sm">
                  Não. Os modelos rodam localmente. Dados sensíveis nunca vão para terceiros.
                </p>
              </Card>
              <Card className="p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Posso começar só com a rede?</h3>
                <p className="text-foreground/85 text-sm">
                  Sim. Comece pela Rede Gerenciada e evolua para IA Privada ou Combo quando quiser.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Qual é a melhor solução para você?
            </h2>
            <p className="text-xl text-foreground/85 mb-8 max-w-2xl mx-auto">
              Fale com a gente e receba um diagnóstico gratuito.
            </p>
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 mx-auto"
              >
                Agendar Diagnóstico Gratuito <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
