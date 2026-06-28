import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Zap, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 px-4 border-b border-border overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-20" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full mb-6">
                <span className="text-accent text-sm font-semibold">IA PRIVADA PARA EMPRESAS</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                IA que Fica em Casa
              </h1>
              <p className="text-xl text-foreground/70 mb-8 max-w-2xl leading-relaxed">
                Privacidade total. Controle completo. Sem surpresas de custo. Infraestrutura de IA local para empresas que não podem terceirizar segurança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 flex items-center gap-2">
                    Agendar Demo <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/solucoes">
                  <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/5">
                    Explorar Soluções
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Pilares */}
        <section id="services" className="py-20 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Por Que IA BtelWay?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border border-border hover:border-accent/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Privacidade Total</h3>
                <p className="text-foreground/70 mb-4">
                  Seus dados sensíveis nunca saem da sua infraestrutura. Conformidade LGPD garantida.
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    Processamento local
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    Zero APIs externas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    Criptografia fim-a-fim
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border border-border hover:border-accent/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Controle Completo</h3>
                <p className="text-foreground/70 mb-4">
                  Você gerencia sua infraestrutura. Nenhuma dependência de terceiros.
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    Arquitetura customizável
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    Sem vendor lock-in
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    Suporte 24/7
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border border-border hover:border-accent/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Custos Previsíveis</h3>
                <p className="text-foreground/70 mb-4">
                  Sem surpresas. Sem taxas por token. Sem escaladas inesperadas.
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    Preço fixo mensal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    Sem taxas ocultas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    ROI em 6 meses
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section id="architecture" className="py-20 px-4 bg-accent/5 border-y border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Como Funciona
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    1
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Avaliação</h3>
                  <p className="text-foreground/70 text-sm">
                    Entendemos sua infraestrutura e necessidades específicas.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    2
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Implementação</h3>
                  <p className="text-foreground/70 text-sm">
                    Instalamos e configuramos sua solução de IA privada.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    3
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Suporte</h3>
                  <p className="text-foreground/70 text-sm">
                    Gerenciamento contínuo e otimização da sua plataforma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Casos de Uso */}
        <section id="roadmap" className="py-20 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Indústrias que Confiam em Nós
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {["Fintech", "Healthcare", "E-commerce", "Manufatura"].map((industry) => (
                <Card key={industry} className="p-6 border border-border hover:border-accent/50 transition-all text-center cursor-pointer">
                  <p className="font-semibold text-foreground">{industry}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="contact" className="py-20 px-4 border-t border-border">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Pronto para Transformar Sua Operação?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Comece com um teste gratuito de 14 dias. Sem cartão de crédito necessário.
            </p>
            <Link href="/contato">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Agendar Demo Agora
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
