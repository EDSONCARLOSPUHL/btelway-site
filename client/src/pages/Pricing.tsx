import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Startup",
      price: "R$ 2.990",
      period: "/mês",
      description: "Perfeito para começar",
      features: [
        "Até 5 usuários",
        "10GB de armazenamento",
        "IA Privada básica",
        "Suporte por email",
        "Atualização mensal"
      ],
      cta: "Começar Teste Gratuito",
      highlighted: false
    },
    {
      name: "Profissional",
      price: "R$ 9.990",
      period: "/mês",
      description: "Para empresas em crescimento",
      features: [
        "Até 50 usuários",
        "500GB de armazenamento",
        "IA Privada avançada",
        "Rede Segura gerenciada",
        "Suporte prioritário",
        "Atualização semanal",
        "API completa"
      ],
      cta: "Agendar Demo",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Customizado",
      period: "",
      description: "Solução completa",
      features: [
        "Usuários ilimitados",
        "Armazenamento ilimitado",
        "IA Privada customizada",
        "Infraestrutura dedicada",
        "Suporte 24/7",
        "Atualização em tempo real",
        "Integração customizada",
        "SLA garantido"
      ],
      cta: "Conversar com Especialista",
      highlighted: false
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
              Preços Transparentes
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Sem surpresas. Sem taxas ocultas. Escolha o plano que faz sentido para seu negócio.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <Card
                  key={idx}
                  className={`p-8 border transition-all ${
                    plan.highlighted
                      ? "border-accent bg-accent/5 scale-105 md:scale-100"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold rounded-full mb-4">
                      MAIS POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-foreground/60">{plan.period}</span>}
                  </div>
                  <Link href="/contato">
                    <Button
                      size="lg"
                      className={`w-full mb-8 ${
                        plan.highlighted
                          ? "bg-accent hover:bg-accent/90"
                          : "bg-foreground/10 hover:bg-foreground/20 text-foreground"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-accent/5 border-y border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Perguntas Frequentes
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <Card className="p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Posso cancelar a qualquer momento?</h3>
                <p className="text-foreground/70 text-sm">Sim, sem penalidades. Você pode cancelar sua assinatura a qualquer momento.</p>
              </Card>
              <Card className="p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Há período de teste gratuito?</h3>
                <p className="text-foreground/70 text-sm">Sim, 14 dias de teste gratuito para planos Startup e Profissional.</p>
              </Card>
              <Card className="p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Posso fazer upgrade ou downgrade?</h3>
                <p className="text-foreground/70 text-sm">Sim, você pode mudar de plano a qualquer momento. Ajustamos o valor proporcionalmente.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 border-t border-border">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ainda tem dúvidas?
            </h2>
            <Link href="/contato">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Fale com Nosso Time
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
