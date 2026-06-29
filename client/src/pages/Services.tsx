import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Network, Brain, Zap } from "lucide-react";

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
      price: "A partir de R$ 1.500/mês",
      color: "from-cyan-500 to-blue-500",
      cta: "Solicitar Orçamento",
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
      price: "A partir de R$ 3.000/mês",
      color: "from-purple-500 to-pink-500",
      cta: "Agendar Demo",
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
      price: "A partir de R$ 5.500/mês",
      color: "from-green-500 to-emerald-500",
      cta: "Começar Agora",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-20 px-4 border-b border-border">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nossos Serviços
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Três níveis de solução para sua empresa: desde segurança de rede até IA privada completa.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.id}
                    className="p-8 border border-border hover:border-accent/50 transition-all flex flex-col"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-border pt-6">
                      <p className="text-accent font-bold mb-4">{service.price}</p>
                      <Link href="/contato">
                        <Button className="w-full bg-accent hover:bg-accent/90 flex items-center justify-center gap-2">
                          {service.cta} <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparação Detalhada */}
        <section className="py-20 px-4 bg-accent/5 border-y border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Comparação de Planos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold text-foreground">Recurso</th>
                    <th className="text-center py-4 px-4 font-bold text-foreground">MikroTik</th>
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
                          <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-foreground/30">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.ia ? (
                          <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-foreground/30">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.combo ? (
                          <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
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

        {/* CTA Final */}
        <section className="py-20 px-4 border-t border-border">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Qual é o melhor plano para você?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Fale com nosso time. Vamos entender sua infraestrutura e recomendar a melhor solução.
            </p>
            <Link href="/contato">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Agendar Consulta Gratuita
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
