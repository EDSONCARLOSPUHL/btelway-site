/**
 * About (Quem Somos) — IA BTELWAY
 * Estrutura inspirada na Redrive: propósito, o problema que resolvemos, nossos
 * valores/diferenciais, como trabalhamos e CTA. Identidade verde BTELway, sem
 * inventar números de clientes ou depoimentos.
 */
import { Link } from "wouter";
import Header from "@/components/Header";
import TechBackground from "@/components/TechBackground";
import Seo from "@/components/Seo";
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
  Award,
  Network,
  TrendingUp,
  MapPin,
} from "lucide-react";

export default function About() {
  const valores = [
    {
      icon: Lock,
      title: "Privacidade em primeiro lugar",
      desc: "Os dados da sua empresa pertencem a você. Nossa arquitetura garante que eles nunca saiam da sua infraestrutura.",
    },
    {
      icon: ShieldCheck,
      title: "Segurança sem terceirização",
      desc: "Atendemos quem não pode entregar a segurança da informação às Big Techs. Soberania de dados é a nossa base.",
    },
    {
      icon: Server,
      title: "Infraestrutura própria",
      desc: "Não revendemos nuvem. Infraestrutura dedicada, com custo fixo e previsível.",
    },
    {
      icon: Handshake,
      title: "Parceria de longo prazo",
      desc: "Atuamos lado a lado com sua equipe, do diagnóstico à operação contínua.",
    },
  ];

  const comoTrabalhamos = [
    {
      step: "01",
      title: "Diagnóstico",
      desc: "Mapeamos sua infraestrutura, dados e casos de uso prioritários.",
    },
    {
      step: "02",
      title: "Implantação",
      desc: "Instalamos a rede e a IA privada, integradas aos seus sistemas.",
    },
    {
      step: "03",
      title: "Operação Gerenciada",
      desc: "Monitoramento e suporte contínuos — você foca no negócio.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <TechBackground />
      <Header />
      <Seo
        title="Quem Somos | IA BTELWAY - IA Privada e Soberana"
        description="Conheça a BTELWAY: 25 anos de infraestrutura crítica levando IA privada e soberana às empresas, com soberania de dados e conformidade total com a LGPD."
        path="/quem-somos"
      />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-24 px-4 bg-[#08160f] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#22c55e,transparent_55%)]" />
          <div className="container relative">
            <span className="inline-block text-green-500 font-semibold text-sm tracking-wide uppercase mb-4">
              Quem Somos
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              Tecnologia a serviço da{" "}
              <span className="text-green-500">soberania dos seus dados</span>.
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Nascemos para resolver um problema crítico: usar o poder da IA sem entregar dados
              confidenciais a terceiros.
            </p>
          </div>
        </section>

        {/* Propósito / Manifesto */}
        <section className="py-20 px-4">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-green-500 font-semibold text-sm tracking-wide uppercase mb-4">
                Nosso Propósito
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Trazer a IA de ponta para dentro da sua empresa.
              </h2>
              <p className="text-foreground/85 mb-4 leading-relaxed">
                A maioria das soluções de IA exige enviar documentos e dados de clientes para a
                nuvem — um risco jurídico, financeiro e de imagem.
              </p>
              <p className="text-foreground/85 leading-relaxed">
                Fazemos o contrário: IA privada, gerenciada e 100% LGPD. Autonomia de verdade — sem
                depender de Big Techs e sem custos imprevisíveis.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 border border-border">
                <Cpu className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-bold text-foreground mb-2">IA Privada</h3>
                <p className="text-sm text-foreground/85">
                  Modelos rodando localmente, dentro da sua infraestrutura.
                </p>
              </Card>
              <Card className="p-6 border border-border mt-8">
                <Lock className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-bold text-foreground mb-2">Dados Seguros</h3>
                <p className="text-sm text-foreground/85">
                  Informações sensíveis nunca saem da sua empresa.
                </p>
              </Card>
              <Card className="p-6 border border-border">
                <ShieldCheck className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-bold text-foreground mb-2">LGPD</h3>
                <p className="text-sm text-foreground/85">
                  Conformidade nativa com a proteção de dados.
                </p>
              </Card>
              <Card className="p-6 border border-border mt-8">
                <Server className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-bold text-foreground mb-2">Custo Fixo</h3>
                <p className="text-sm text-foreground/85">
                  Investimento previsível, sem cobrança por uso.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Missão e Visão */}
        <section className="py-20 px-4 bg-muted/20 border-y border-border">
          <div className="container grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-border">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-500 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Missão</h3>
              <p className="text-foreground/85 leading-relaxed">
Levar IA de alto desempenho, privada e segura, a empresas de qualquer porte — com controle total dos dados.
              </p>
            </Card>
            <Card className="p-8 border border-border">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Visão</h3>
              <p className="text-foreground/85 leading-relaxed">
Ser referência em IA privada no Brasil. Provar que dá para inovar sem abrir mão da privacidade.
              </p>
            </Card>
          </div>
        </section>

        {/* Valores / Diferenciais */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block text-green-500 font-semibold text-sm tracking-wide uppercase mb-4">
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
                      <Icon className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{valor.title}</h3>
                      <p className="text-foreground/85 leading-relaxed">{valor.desc}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Como Trabalhamos */}
        <section className="py-20 px-4 bg-muted/20 border-y border-border">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block text-green-500 font-semibold text-sm tracking-wide uppercase mb-4">
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
                  <p className="text-foreground/85 leading-relaxed relative">{item.desc}</p>
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
                <Users className="w-7 h-7 text-green-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Para quem trabalhamos
                </h2>
              </div>
              <p className="text-foreground/85 mb-6 max-w-3xl">
Para quem leva a segurança da informação a sério e vê IA como vantagem competitiva.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Gestores que não podem arriscar vazamento de dados",
                  "Operações que precisam de conformidade com a LGPD",
                  "Empresas que querem previsibilidade de custos",
                  "Quem busca autonomia e não dependência de Big Techs",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* O Fundador */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block text-green-500 font-semibold text-sm tracking-wide uppercase mb-4">
                Liderança
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">O Fundador</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-3xl blur-2xl" />
                <img
                  src="/founder.webp"
                  alt="Edson Carlos Puhl, fundador da BTELWAY, ao lado de seu filho Samuel"
                  className="relative w-full rounded-2xl border border-green-500/20 shadow-2xl shadow-green-900/30"
                />
                <p className="relative text-center text-foreground/50 text-sm mt-4">
                  Edson Carlos Puhl e seu filho Samuel.
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Edson Carlos Puhl
                </h3>
                <p className="text-green-500 font-semibold mb-6">
                  Fundador &middot; Engenheiro de Redes &middot; Investidor
                </p>
                <p className="text-foreground/85 leading-relaxed mb-4">
                  Engenheiro de redes e operador de telecomunicações há 25 anos, Edson construiu e
                  manteve infraestrutura crítica em quatro estados — da fronteira gaúcha à Amazônia.
                  É essa veterania em redes de missão crítica que sustenta a engenharia da BTELWAY.
                </p>
                <p className="text-foreground/85 leading-relaxed mb-8">
                  Investidor com formação em Value Investing, enxerga a IA privada como ativo
                  estratégico de longo prazo: soberania de dados, custo previsível e autonomia real,
                  sem dependência de Big Techs.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl border border-border bg-white/[0.03]">
                    <Network className="w-6 h-6 text-green-500" />
                    <span className="text-xs text-foreground/85">Engenharia de Redes</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl border border-border bg-white/[0.03]">
                    <Server className="w-6 h-6 text-green-500" />
                    <span className="text-xs text-foreground/85">25 anos em Telecom</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl border border-border bg-white/[0.03]">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                    <span className="text-xs text-foreground/85">Value Investing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reconhecimentos */}
        <section className="py-16 px-4 bg-muted/20 border-y border-border">
          <div className="container">
            <div className="flex items-center justify-center gap-3 mb-10">
              <Award className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Reconhecimentos</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 border border-border flex items-start gap-4 bg-white/[0.03]">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Empreendedor Destaque &amp; Mérito Empresarial
                  </h3>
                  <p className="text-sm text-foreground/85 mb-2">Instituto Fênix</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <MapPin className="w-4 h-4 text-green-500" />
                    Ariquemes – RO &middot; 2018
                  </div>
                </div>
              </Card>
              <Card className="p-6 border border-border flex items-start gap-4 bg-white/[0.03]">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Empreendedor Destaque &amp; Mérito Empresarial
                  </h3>
                  <p className="text-sm text-foreground/85 mb-2">Instituto Fênix</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <MapPin className="w-4 h-4 text-green-500" />
                    Chapecó – SC &middot; 2020–2022
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="relative py-20 px-4 bg-[#08160f] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_50%,#22c55e,transparent_55%)]" />
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos trazer a sua IA para casa?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
15 minutos, sem compromisso. Descubra como implantar IA privada na sua empresa.
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
