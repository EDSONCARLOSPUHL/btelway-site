import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Heart, ShoppingCart, Wrench } from "lucide-react";

export default function UseCases() {
  const cases = [
    {
      icon: TrendingUp,
      title: "Fintech",
      description: "Análise de risco e detecção de fraude com dados privados",
      benefits: [
        "Análise de risco em tempo real",
        "Detecção de padrões fraudulentos",
        "Conformidade com regulações financeiras",
        "Redução de riscos em 60%"
      ]
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Processamento de registros médicos com conformidade HIPAA",
      benefits: [
        "Análise de históricos médicos",
        "Diagnóstico auxiliado por IA",
        "Conformidade HIPAA garantida",
        "Privacidade do paciente protegida"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Recomendações personalizadas processadas localmente",
      benefits: [
        "Recomendações em tempo real",
        "Análise de comportamento do cliente",
        "Aumento de conversão em 35%",
        "Dados de clientes seguros"
      ]
    },
    {
      icon: Wrench,
      title: "Manufatura",
      description: "Manutenção preditiva com dados operacionais privados",
      benefits: [
        "Previsão de falhas de equipamento",
        "Redução de downtime em 45%",
        "Otimização de produção",
        "Segredos industriais protegidos"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-20 px-4 border-b border-border">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Casos de Uso por Indústria
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Veja como empresas em diferentes setores estão transformando suas operações com IA Privada.
            </p>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {cases.map((useCase, idx) => {
                const Icon = useCase.icon;
                return (
                  <Card key={idx} className="p-8 border border-border hover:border-accent/50 transition-all">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{useCase.title}</h3>
                        <p className="text-foreground/60 text-sm mt-1">{useCase.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {useCase.benefits.map((benefit, i) => (
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
              Seu caso de uso é diferente?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Converse com nossos especialistas para encontrar a solução ideal para sua indústria.
            </p>
            <Link href="/contato">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Agendar Consulta
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
