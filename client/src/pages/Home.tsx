/**
 * HOME — IA BTELWAY
 * Design philosophy: estrutura de alta conversão (inspirada na arquitetura da Redrive),
 * adaptada à identidade BTELway (verde único da marca, tema escuro contínuo com textura técnica).
 * Fluxo: Hero imersivo -> Agitação do problema -> Métricas -> Narrativa da solução
 *        -> Método em fases -> Comparação 2 caminhos -> Qualificador -> CTA final.
 * Sem depoimentos/logos fictícios (content policy). Provas reais: LGPD, tecnologias, princípios.
 */
import { Link } from "wouter";
import Header from "@/components/Header";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Lock,
  Zap,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Shield,
  Database,
  Network,
  Cloud,
  Server,
  AlertTriangle,
  Cpu,
  Building2,
  Stethoscope,
  ShoppingCart,
  Factory,
  Award,
  MapPin,
  BadgeCheck,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5554933806130?text=" +
  encodeURIComponent("Olá! Quero um diagnóstico de IA privada para minha empresa.");

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Seo
        title="IA BTELWAY - IA Privada e Soberana para Empresas | LGPD"
        description="Inteligência artificial privada e soberana rodando na sua própria infraestrutura. Custo fixo, dados protegidos e 100% em conformidade com a LGPD."
        path="/"
      />
      <main className="flex-1">
        {/* ========================= HERO ========================= */}
        <section className="relative px-4 pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/hero-bg-datacenter.webp"
              alt="Datacenter de IA privada"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay for text contrast (low-key image -> light text) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#04140c]/95 via-[#04140c]/80 to-[#04140c]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04140c] via-transparent to-transparent" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/15 border border-green-400/30 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
                <span className="text-green-500 text-sm font-semibold tracking-wide">
                  INFRAESTRUTURA DE IA PRIVADA
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-[1.05]">
                Sua IA.{" "}
                <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                  Seus dados.
                </span>{" "}
                Seu controle.
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                Sua empresa não precisa entregar dados sensíveis a servidores de terceiros. Rode IA
                de ponta na sua própria infraestrutura — custo fixo e 100% LGPD.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold flex items-center gap-2 w-full sm:w-auto shadow-xl shadow-green-500/30 text-base h-13 px-8"
                  >
                    Quero meu diagnóstico gratuito <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/arquitetura">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:border-white/50 w-full sm:w-auto text-base h-13 px-8 backdrop-blur-sm"
                  >
                    Ver como funciona
                  </Button>
                </Link>
              </div>

              <p className="text-white/80 text-sm mt-8 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                Para empresas que não podem terceirizar a segurança dos seus dados.
              </p>
            </div>
          </div>
        </section>

        {/* ========================= PROVA SOCIAL (1ª dobra) ========================= */}
        <section className="bg-[#04140c] border-y border-green-500/15 px-4 py-6 md:py-7">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4">
              {[
                {
                  icon: Award,
                  title: "25 anos",
                  desc: "de infraestrutura crítica",
                },
                {
                  icon: MapPin,
                  title: "4 estados",
                  desc: "da fronteira gaúcha à Amazônia",
                },
                {
                  icon: BadgeCheck,
                  title: "Reconhecida",
                  desc: "em RO e SC",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-center justify-center gap-3 text-center md:text-left ${
                      i < 2 ? "md:border-r md:border-green-500/15" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-400/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-sm md:text-[0.95rem] leading-tight">
                      <span className="font-bold text-white">{item.title}</span>{" "}
                      <span className="text-white/80">{item.desc}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================= AGITAÇÃO DO PROBLEMA ========================= */}
        <section className="py-20 md:py-28 px-4 bg-[#04140c] text-white relative">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Seus dados estão saindo pela porta.{" "}
                <span className="text-green-500">E você nem percebe.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Toda vez que a equipe usa IA pública, contratos e dados de clientes saem para fora.
                Risco técnico, jurídico e financeiro.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Cloud,
                  title: "Dados em servidores alheios",
                  desc: "Informações sensíveis em nuvens estrangeiras, fora do seu controle.",
                },
                {
                  icon: TrendingUp,
                  title: "Custo que só cresce",
                  desc: "Cobrança por token vira uma conta imprevisível todo mês.",
                },
                {
                  icon: Lock,
                  title: "Dependência total",
                  desc: "Mudou preço ou política? Você fica refém da Big Tech.",
                },
                {
                  icon: AlertTriangle,
                  title: "Exposição jurídica",
                  desc: "Vazamento pode gerar multa de até 2% do faturamento (LGPD).",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-green-400/30 hover:bg-white/[0.06] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-400/20 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <p className="text-center text-white/75 mt-12 text-lg">
              Não é falta de tecnologia. É falta de{" "}
              <span className="text-white font-semibold">infraestrutura própria.</span>
            </p>
          </div>
        </section>

        {/* ========================= MÉTRICAS / PROVA DE VALOR ========================= */}
        <section className="px-4 -mt-px">
          <div className="container">
            <div className="max-w-6xl mx-auto -translate-y-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                  { value: "100%", label: "Processamento local" },
                  { value: "Zero", label: "Dados em terceiros" },
                  { value: "LGPD", label: "Conformidade nativa" },
                  { value: "Fixo", label: "Custo mensal previsível" },
                ].map((stat) => (
                  <Card
                    key={stat.label}
                    className="p-6 text-center border border-green-500/20 bg-white/[0.04] shadow-xl shadow-green-900/20"
                  >
                    <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </p>
                    <p className="text-foreground/80 text-sm">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================= NARRATIVA DA SOLUÇÃO ========================= */}
        <section className="py-12 md:py-20 px-4">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <span className="text-green-500 font-semibold text-sm tracking-wide uppercase">
                  A solução
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground leading-tight">
                  Existe um jeito de ter IA de ponta sem entregar seus dados.
                </h2>
                <p className="text-foreground/85 text-lg leading-relaxed mb-6">
                  Instalamos uma IA privada dentro da sua empresa. Os modelos rodam local, os dados
                  ficam no seu ambiente e você paga valor fixo — sem cobrança por uso.
                </p>
                <ul className="space-y-4">
                  {[
                    "Modelos de IA rodando 100% na sua infraestrutura",
                    "Integração com seus sistemas e documentos internos",
                    "Gerenciamento completo: nós cuidamos, você foca no negócio",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{line}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/servicos">
                  <Button
                    size="lg"
                    className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold flex items-center gap-2 shadow-lg shadow-green-500/25"
                  >
                    Conhecer os serviços <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* 3 pilares em coluna */}
              <div className="space-y-4">
                {[
                  {
                    icon: Lock,
                    color: "green",
                    title: "Privacidade Total",
                    desc: "Dados sensíveis nunca saem da sua infraestrutura. LGPD garantida.",
                  },
                  {
                    icon: Zap,
                    color: "green",
                    title: "Controle Completo",
                    desc: "Sua infraestrutura, suas regras. Sem dependência de terceiros.",
                  },
                  {
                    icon: TrendingUp,
                    color: "green",
                    title: "Custos Previsíveis",
                    desc: "Preço fixo mensal. Sem taxas por token, sem surpresas.",
                  },
                ].map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <Card
                      key={pillar.title}
                      className="p-6 flex items-start gap-5 border border-border hover:border-green-400/40 hover:shadow-lg hover:shadow-green-500/10 transition-all bg-gradient-to-br from-background to-green-500/[0.03]"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-1">{pillar.title}</h3>
                        <p className="text-foreground/80 text-sm leading-relaxed">{pillar.desc}</p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================= MÉTODO EM FASES ========================= */}
        <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-green-950/30 to-background border-y border-border">
          <div className="container">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-green-500 font-semibold text-sm tracking-wide uppercase">
                Como funciona
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
                IA privada implantada em 3 etapas
              </h2>
              <p className="text-foreground/80 mt-4 text-lg">
                Processo claro. A parte técnica fica com a gente.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  num: "01",
                  phase: "Diagnóstico",
                  title: "Avaliação",
                  desc: "Mapeamos sua infraestrutura, seus dados e os casos de uso prioritários.",
                  icon: Shield,
                },
                {
                  num: "02",
                  phase: "Implantação",
                  title: "Implementação",
                  desc: "Instalamos a IA privada, integrada aos seus sistemas.",
                  icon: Database,
                },
                {
                  num: "03",
                  phase: "Operação",
                  title: "Suporte Gerenciado",
                  desc: "Monitoramento, suporte e otimização contínua.",
                  icon: Network,
                },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="relative">
                    <Card className="p-8 h-full border border-border hover:border-green-400/40 hover:shadow-xl hover:shadow-green-500/10 transition-all">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-5xl font-bold text-green-500/15">{step.num}</span>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <span className="text-green-500 text-xs font-semibold tracking-wide uppercase">
                        {step.phase}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mt-1 mb-3">{step.title}</h3>
                      <p className="text-foreground/80 text-sm leading-relaxed">{step.desc}</p>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================= COMPARAÇÃO 2 CAMINHOS ========================= */}
        <section className="py-20 md:py-28 px-4">
          <div className="container">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Você tem duas escolhas agora
              </h2>
              <p className="text-foreground/80 mt-4 text-lg">
                O caminho da exposição ou o caminho do controle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Caminho 1 */}
              <Card className="p-8 border border-white/10 bg-white/[0.03] relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-white/60" />
                  </div>
                  <h3 className="text-xl font-bold text-white/85">IA Pública na Nuvem</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Seus dados saem da empresa",
                    "Custo por token imprevisível",
                    "Dependência de terceiros (vendor lock-in)",
                    "Risco de não-conformidade com a LGPD",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{line}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Caminho 2 */}
              <Card className="p-8 border-2 border-green-500/40 bg-gradient-to-br from-green-500/[0.06] to-green-500/[0.04] relative shadow-xl shadow-green-500/10">
                <div className="absolute -top-3 right-6 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                  Recomendado
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">IA Privada BTELWAY</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Dados 100% dentro da sua infraestrutura",
                    "Custo fixo mensal, sem surpresas",
                    "Controle total, sem dependência externa",
                    "Conformidade LGPD nativa",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/85 font-medium">{line}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contato">
                  <Button className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-green-500/25">
                    Quero o caminho do controle <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* ========================= INDÚSTRIAS ========================= */}
        <section className="py-20 md:py-24 px-4 bg-gradient-to-b from-background to-green-950/30 border-t border-border">
          <div className="container">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Feito para setores onde dado é ativo crítico
              </h2>
              <p className="text-foreground/80 mt-4 text-lg">
                Privacidade em primeiro lugar, em todo segmento.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
              {[
                { name: "Fintech", icon: Building2 },
                { name: "Saúde", icon: Stethoscope },
                { name: "E-commerce", icon: ShoppingCart },
                { name: "Indústria", icon: Factory },
              ].map((ind) => {
                const Icon = ind.icon;
                return (
                  <Card
                    key={ind.name}
                    className="p-8 border border-border hover:border-green-400/50 transition-all text-center hover:shadow-lg hover:shadow-green-500/10 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-400/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7 text-green-500" />
                    </div>
                    <p className="font-bold text-foreground">{ind.name}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================= QUALIFICADOR ========================= */}
        <section className="py-20 md:py-24 px-4">
          <div className="container">
            <Card className="max-w-4xl mx-auto p-8 md:p-12 border border-green-500/20 bg-gradient-to-br from-green-500/[0.04] to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-7 h-7 text-green-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  A IA BTELWAY não é para todos.
                </h2>
              </div>
              <p className="text-foreground/85 text-lg mb-8 leading-relaxed">
                Trabalhamos com quem leva segurança da informação a sério e vê IA como vantagem
                competitiva — não como brinquedo.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Para gestores que não podem arriscar vazamento de dados.",
                  "Para empresas que querem previsibilidade de custos.",
                  "Para operações que precisam de conformidade com a LGPD.",
                  "Para quem busca autonomia e não dependência de Big Techs.",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{line}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* ========================= CTA FINAL ========================= */}
        <section className="px-4 pb-24">
          <div className="container">
            <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[#04140c]" />
              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600 rounded-full blur-3xl opacity-20" />
              </div>
              <div className="relative z-10 text-center px-6 py-16 md:py-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-5 text-white leading-tight">
                  Pronto para trazer sua IA para casa?
                </h2>
                <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                  15 minutos, sem compromisso. Receba um diagnóstico de como implantar IA privada na
                  sua empresa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contato">
                    <Button
                      size="lg"
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold flex items-center gap-2 w-full sm:w-auto shadow-xl shadow-green-500/30 h-13 px-8 text-base"
                    >
                      Agendar diagnóstico gratuito <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:border-white/50 w-full sm:w-auto backdrop-blur-sm h-13 px-8 text-base"
                    >
                      Falar no WhatsApp
                    </Button>
                  </a>
                </div>
                <p className="text-white/75 text-sm mt-6">
                  Sem pressão, sem truques. Só uma conversa estratégica.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
