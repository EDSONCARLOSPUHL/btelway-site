import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Zap, TrendingUp, CheckCircle2, ArrowRight, Shield, Database, Network } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section — Premium Dark Futuristic */}
        <section className="relative py-32 px-4 border-b border-border overflow-hidden">
          {/* Background gradient + glow effects */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500 to-green-500 rounded-full blur-3xl opacity-20" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-10 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Hero Background Image */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <img 
              src="/manus-storage/hero-bg-datacenter_863969f0.png" 
              alt="Datacenter Background" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-full mb-6 backdrop-blur-sm">
                <span className="text-green-400 text-sm font-semibold">IA PRIVADA PARA EMPRESAS</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight bg-gradient-to-r from-foreground via-green-400 to-cyan-400 bg-clip-text text-transparent">
                IA que Fica em Casa
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl leading-relaxed">
                Privacidade total. Controle completo. Sem surpresas de custo. Infraestrutura de IA local para empresas que não podem terceirizar segurança.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white flex items-center gap-2 w-full sm:w-auto shadow-lg shadow-green-500/30"
                  >
                    Agendar Demo <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/servicos">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-green-500/50 hover:bg-green-500/10 hover:border-green-400 w-full sm:w-auto"
                  >
                    Explorar Serviços
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Pilares — Premium Cards with Glow */}
        <section id="services" className="py-20 px-4">
          <div className="container">
            <h2 className="text-4xl font-bold mb-4 text-foreground text-center">
              Por Que IA BTELWAY?
            </h2>
            <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
              Três pilares que definem nossa solução: segurança, autonomia e previsibilidade.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: Privacidade */}
              <Card className="p-8 border border-green-500/30 hover:border-green-400/50 transition-all bg-gradient-to-br from-background to-green-500/5 hover:shadow-lg hover:shadow-green-500/20">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Privacidade Total</h3>
                <p className="text-foreground/70 mb-6">
                  Seus dados sensíveis nunca saem da sua infraestrutura. Conformidade LGPD garantida.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Processamento local</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Zero APIs externas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Criptografia fim-a-fim</span>
                  </li>
                </ul>
              </Card>

              {/* Card 2: Controle */}
              <Card className="p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all bg-gradient-to-br from-background to-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Controle Completo</h3>
                <p className="text-foreground/70 mb-6">
                  Você gerencia sua infraestrutura. Nenhuma dependência de terceiros.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Arquitetura customizável</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Sem vendor lock-in</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Suporte 24/7</span>
                  </li>
                </ul>
              </Card>

              {/* Card 3: Custos */}
              <Card className="p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all bg-gradient-to-br from-background to-purple-500/5 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Custos Previsíveis</h3>
                <p className="text-foreground/70 mb-6">
                  Sem surpresas. Sem taxas por token. Sem escaladas inesperadas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Preço fixo mensal</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">Sem taxas ocultas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">ROI em 6 meses</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section id="architecture" className="py-20 px-4 bg-gradient-to-b from-accent/5 to-background border-y border-border">
          <div className="container">
            <h2 className="text-4xl font-bold mb-4 text-foreground text-center">
              Como Funciona
            </h2>
            <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
              Três etapas simples para transformar sua operação com IA privada.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    num: "1",
                    title: "Avaliação",
                    desc: "Entendemos sua infraestrutura e necessidades específicas.",
                    icon: Shield,
                  },
                  {
                    num: "2",
                    title: "Implementação",
                    desc: "Instalamos e configuramos sua solução de IA privada.",
                    icon: Database,
                  },
                  {
                    num: "3",
                    title: "Suporte",
                    desc: "Gerenciamento contínuo e otimização da sua plataforma.",
                    icon: Network,
                  },
                ].map((step, idx) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={idx} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 text-white flex items-center justify-center mx-auto mb-6 font-bold text-2xl shadow-lg shadow-green-500/30">
                        {step.num}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Casos de Uso */}
        <section id="roadmap" className="py-20 px-4">
          <div className="container">
            <h2 className="text-4xl font-bold mb-4 text-foreground text-center">
              Indústrias que Confiam em Nós
            </h2>
            <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
              Soluções adaptadas para diferentes setores, sempre com privacidade em primeiro lugar.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {["Fintech", "Healthcare", "E-commerce", "Manufatura"].map((industry) => (
                <Card 
                  key={industry} 
                  className="p-8 border border-green-500/20 hover:border-green-400/50 transition-all text-center cursor-pointer hover:shadow-lg hover:shadow-green-500/10 bg-gradient-to-br from-background to-green-500/5"
                >
                  <p className="font-bold text-lg text-foreground">{industry}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final — Premium */}
        <section id="contact" className="py-20 px-4 border-t border-border">
          <div className="container text-center">
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Pronto para Transformar Sua Operação?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Comece com um teste gratuito de 14 dias. Sem cartão de crédito necessário.
            </p>
            <Link href="/contato">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/30"
              >
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
