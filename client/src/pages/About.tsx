/**
 * About (Quem Somos) — IA BTELWAY
 * Estrutura inspirada na Redrive: propósito, o problema que resolvemos, nossos
 * valores/diferenciais, como trabalhamos e CTA. Identidade verde BTELway, sem
 * inventar números de clientes ou depoimentos.
 */
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Server,
  Lock,
  Handshake,
  Target,
  Eye,
  ArrowRight,
  Cpu,
  Users,
} from "lucide-react";

export default function About() {
  const valores = [
    {
      icon: Lock,
      title: "Privacidade em primeiro lugar",
      desc: "Acreditamos que os dados da sua empresa pertencem a você. Toda a nossa arquitetura é desenhada para que informações sensíveis nunca saiam da sua infraestrutura.",
    },
    {
      icon: ShieldCheck,
      title: "Segurança sem terceirização",
      desc: "Atendemos empresas que não podem — ou não querem — entregar a segurança da informação para Big Techs. Soberania de dados é a base do que fazemos.",
    },
    {
      icon: Server,
      title: "Infraestrutura própria",
      desc: "Não revendemos nuvem de terceiros. Construímos e gerenciamos infraestrutura dedicada, com custo fixo e previsível, sem cobrança por uso.",
    },
    {
      icon: Handshake,
      title: "Parceria de longo prazo",
      desc: "Não somos um fornecedor distante. Atuamos lado a lado com sua equipe, do diagnóstico à operação contínua.",
    },
  ];

  const comoTrabalhamos = [
    {
      step: "01",
      title: "Diagnóstico",
      desc: "Entendemos sua infraestrutura, seus dados e os casos de uso prioritários da operação.",
    },
    {
      step: "02",
      title: "Implantação",
      desc: "Instalamos e configuramos a infraestrutura de rede e IA privada, integrada aos seus sistemas.",
    },
    {
      step: "03",
      title: "Operação Gerenciada",
      desc: "Monitoramento, suporte e otimização contínua — você foca no negócio, nós cuidamos da tecnologia.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-24 px-4 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#22c55e,transparent_55%)]" />
          <div className="container relative">
            <span className="inline-block text-green-400 font-semibold text-sm tracking-wide uppercase mb-4">
              Quem Somos
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              Tecnologia a serviço da{" "}
              <span className="text-green-400">soberania dos seus dados</span>.
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              A IA BTELWAY nasceu para resolver um problema cada vez mais crítico: como usar o poder
              da inteligência artificial sem entregar informações confidenciais para servidores de
              terceiros.
            </p>
          </div>
        </section>

        {/* Propósito / Manifesto */}
        <section className="py-20 px-4">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-green-600 font-semibold text-sm tracking-wide uppercase mb-4">
                Nosso Propósito
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Trazer a IA de ponta para dentro da sua empresa.
              </h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Vivemos uma corrida pela inteligência artificial. Mas a maioria das soluções exige
                que você envie documentos, contratos e dados de clientes para a nuvem de grandes
                provedores — criando riscos jurídicos, financeiros e de imagem.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Nós fazemos o caminho contrário: implantamos infraestrutura de IA privada,
                gerenciada e em conformidade com a LGPD, para que sua empresa tenha autonomia
                tecnológica de verdade — sem depender de Big Techs e sem custos imprevisíveis.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 border border-border">
                <Cpu className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold text-foreground mb-2">IA Privada</h3>
                <p className="text-sm text-foreground/70">
                  Modelos rodando localmente, dentro da sua infraestrutura.
                </p>
              </Card>
              <Card className="p-6 border border-border mt-8">
                <Lock className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold text-foreground mb-2">Dados Seguros</h3>
                <p className="text-sm text-foreground/70">
                  Informações sensíveis nunca saem da sua empresa.
                </p>
              </Card>
              <Card className="p-6 border border-border">
                <ShieldCheck className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold text-foreground mb-2">LGPD</h3>
                <p className="text-sm text-foreground/70">
                  Conformidade nativa com a proteção de dados.
                </p>
              </Card>
              <Card className="p-6 border border-border mt-8">
                <Server className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold text-foreground mb-2">Custo Fixo</h3>
                <p className="text-sm text-foreground/70">
                  Investimento previsível, sem cobrança por uso.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Missão e Visão */}
        <section className="py-20 px-4 bg-muted/40 border-y border-border">
          <div className="container grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-border">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Missão</h3>
              <p className="text-foreground/70 leading-relaxed">
                Democratizar o acesso à inteligência artificial de alto desempenho de forma privada,
                segura e economicamente viável, para que empresas de qualquer porte mantenham o
                controle total sobre seus dados.
              </p>
            </Card>
            <Card className="p-8 border border-border">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Visão</h3>
              <p className="text-foreground/70 leading-relaxed">
                Ser a referência em infraestrutura de IA privada no Brasil, provando que é possível
                inovar com inteligência artificial sem abrir mão da privacidade e da soberania
                tecnológica.
              </p>
            </Card>
          </div>
        </section>

        {/* Valores / Diferenciais */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block text-green-600 font-semibold text-sm tracking-wide uppercase mb-4">
                No que acreditamos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Os valores que guiam cada projeto
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {valores.map((valor, idx) => {
                const Icon = valor.icon;
                return (
                  <Card key={idx} className="p-8 border border-border flex gap-5">
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{valor.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{valor.desc}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Como Trabalhamos */}
        <section className="py-20 px-4 bg-muted/40 border-y border-border">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block text-green-600 font-semibold text-sm tracking-wide uppercase mb-4">
                Como Trabalhamos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Do diagnóstico à operação contínua
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {comoTrabalhamos.map((item, idx) => (
                <Card key={idx} className="p-8 border border-border relative">
                  <span className="text-5xl font-bold text-green-500/15 absolute top-6 right-6">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3 relative">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed relative">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Para quem é */}
        <section className="py-20 px-4">
          <div className="container">
            <Card className="p-10 border border-border bg-gradient-to-br from-green-500/5 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-7 h-7 text-green-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Para quem trabalhamos
                </h2>
              </div>
              <p className="text-foreground/70 mb-6 max-w-3xl">
                Somos a escolha de empresas que levam a segurança da informação a sério e enxergam a
                IA como vantagem competitiva — não como brinquedo.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Gestores que não podem arriscar vazamento de dados",
                  "Operações que precisam de conformidade com a LGPD",
                  "Empresas que querem previsibilidade de custos",
                  "Quem busca autonomia e não dependência de Big Techs",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos trazer a sua IA para casa?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Agende uma conversa de 15 minutos, sem compromisso, e descubra como implantar IA
              privada na sua empresa.
            </p>
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 mx-auto"
              >
                Falar com a BTELWAY <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
