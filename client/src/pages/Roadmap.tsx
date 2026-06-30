import Header from "@/components/Header";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

export default function Roadmap() {
  const phases = [
    {
      phase: 1,
      title: "Núcleo de IA",
      status: "Em Andamento",
      completed: [
        "Sistema operacional instalado e seguro",
        "Segurança (firewall, acesso endurecido)",
        "Contêineres e orquestração operacionais",
        "Primeiro modelo de IA respondendo",
        "Monitoramento e alertas ativos",
      ],
      pending: [
        "Vector database + RAG (responder sobre documentos)",
        "Workflow automation",
        "Busca privada integrada",
        "Backup e disaster recovery",
      ],
      timeline: "Junho - Julho 2026",
      color: "from-cyan-500 to-blue-500",
    },
    {
      phase: 2,
      title: "Inferência e Exposição",
      status: "Planejado",
      completed: [],
      pending: [
        "Adquirir servidor com GPU dedicada",
        "Migrar inferência para acelerador",
        "Separar control-plane de processamento",
        "Instalar roteador de segurança",
        "HTTPS e VPN para acesso remoto",
        "Modelos de IA maiores rodando localmente",
      ],
      timeline: "Agosto - Setembro 2026",
      color: "from-purple-500 to-pink-500",
    },
    {
      phase: 3,
      title: "Escala e Robustez",
      status: "Futuro",
      completed: [],
      pending: [
        "Expandir parque de servidores",
        "Alta disponibilidade (HA) do control-plane",
        "Múltiplos nós de IA para redundância",
        "Modelos de IA de última geração",
        "Monitoramento centralizado",
        "SLA de cliente com garantias",
      ],
      timeline: "Outubro 2026+",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Seo
        title="Roadmap | IA BTELWAY - IA Privada e Soberana"
        description="O roteiro de evolução da IA privada e soberana da BTELWAY: capacidades planejadas com foco em segurança de dados e conformidade com a LGPD."
        path="/roadmap"
      />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-20 px-4 border-b border-border">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Roadmap de Implantação
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Três fases: do núcleo de IA à escala. Crescimento puxado pela demanda, não pelo capital.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="space-y-12">
              {phases.map((phase, idx) => (
                <div key={phase.phase}>
                  <Card className="p-8 border border-border">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-2xl font-bold text-white">{phase.phase}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            phase.status === "Em Andamento"
                              ? "bg-accent/20 text-accent"
                              : phase.status === "Planejado"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-foreground/10 text-foreground/70"
                          }`}>
                            {phase.status}
                          </span>
                        </div>
                        <p className="text-foreground/70 mb-6">{phase.timeline}</p>

                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-accent" />
                              Concluído
                            </h4>
                            <ul className="space-y-2">
                              {phase.completed.length > 0 ? (
                                phase.completed.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-foreground/80 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                    {item}
                                  </li>
                                ))
                              ) : (
                                <p className="text-foreground/50 text-sm italic">Aguardando início...</p>
                              )}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                              <Circle className="w-5 h-5 text-foreground/40" />
                              Pendente
                            </h4>
                            <ul className="space-y-2">
                              {phase.pending.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-foreground/70 text-sm">
                                  <Circle className="w-4 h-4 text-foreground/40 flex-shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {idx < phases.length - 1 && (
                    <div className="flex justify-center my-8">
                      <ArrowRight className="w-6 h-6 text-accent rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Princípio Condutor */}
        <section className="py-20 px-4 bg-accent/5 border-y border-border">
          <div className="container max-w-2xl">
            <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
              Princípio Condutor
            </h2>
            <Card className="p-8 border border-accent/30 bg-accent/10">
              <p className="text-lg text-foreground leading-relaxed">
                A infraestrutura cresce <strong>puxada pela demanda</strong>, não pelo capital. Compramos hardware quando um contrato justifica. <strong>Sem enterrar capital antes da receita.</strong>
              </p>
            </Card>
          </div>
        </section>

        {/* Capacidades de IA */}
        <section className="py-20 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Capacidades de IA
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Raciocínio e Análise",
                  desc: "Problemas complexos, lógica e análise profunda.",
                },
                {
                  title: "Conversá Geral (PT-BR)",
                  desc: "Português nativo, conversas naturais, atendimento.",
                },
                {
                  title: "Programação e Desenvolvimento",
                  desc: "Código, debugging e revisão de software.",
                },
                {
                  title: "Visão e Imagens",
                  desc: "Análise de imagens, OCR e geração visual.",
                },
                {
                  title: "Respostas Rápidas",
                  desc: "Classificação e respostas instantâneas de baixa latência.",
                },
                {
                  title: "Busca e Contexto (RAG)",
                  desc: "Indexação de documentos e busca semântica.",
                },
                {
                  title: "Audio e Transcrição",
                  desc: "Transcrição de áudio e reconhecimento de fala.",
                },
                {
                  title: "Automação e Workflows",
                  desc: "Fluxos inteligentes, integrações e orquestração.",
                },
              ].map((item, idx) => (
                <Card key={idx} className="p-6 border border-border">
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-foreground/70 text-sm">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
