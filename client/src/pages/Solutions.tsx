import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Shield, Zap } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: Lock,
      title: "IA Privada para Documentos",
      description: "Processe seus documentos sensíveis localmente. Seus dados nunca saem da sua infraestrutura.",
      benefits: [
        "RAG (Retrieval-Augmented Generation) local",
        "Conformidade LGPD garantida",
        "Zero dependência de APIs externas",
        "Análise de documentos confidenciais"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Rede Segura Gerenciada",
      description: "Infraestrutura de rede robusta com segurança de ponta a ponta, gerenciada 24/7.",
      benefits: [
        "Firewall inteligente com MikroTik",
        "VPN segura para acesso remoto",
        "Monitoramento contínuo",
        "Suporte técnico 24/7"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Workflows de IA que aprendem com seus processos e aumentam a eficiência operacional.",
      benefits: [
        "Automação de processos repetitivos",
        "Integração com seus sistemas",
        "Aprendizado contínuo",
        "ROI comprovado em 6 meses"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-4 border-b border-border">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Soluções Completas de IA Privada
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Três pilares que transformam sua operação: privacidade total, controle absoluto e custos previsíveis.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, idx) => {
                const Icon = solution.icon;
                return (
                  <Card key={idx} className="p-8 border border-border hover:border-accent/50 transition-all">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{solution.title}</h3>
                    <p className="text-foreground/70 mb-6">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-foreground/80 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-accent/5 border-t border-border">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Pronto para transformar sua operação?
            </h2>
            <Link href="/contato">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Agendar Demo
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
