import Header from "@/components/Header";
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
        "Ubuntu Server 24.04 LTS instalado",
        "Segurança (firewall UFW, SSH endurecido)",
        "Docker + Ollama + Open WebUI operacional",
        "Primeiro modelo (llama3.2:3b) respondendo",
        "Monitoramento (Netdata) ativo",
      ],
      pending: [
        "Qdrant + RAG (responder sobre documentos)",
        "n8n / Node-RED (automação)",
        "SearXNG (busca web privada)",
        "Backup das configurações",
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
        "Adquirir GMKtec EVO-X2 128GB",
        "Migrar inferência para GPU (ROCm)",
        "R530 passa a ser puro control-plane",
        "Instalar MikroTik CCR1072 na frente",
        "HTTPS no Open WebUI (domínio + VPN)",
        "Modelos 70B rodando localmente",
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
        "Ligar parque de servidores (R610, G7)",
        "Alta disponibilidade (HA) do control-plane",
        "Segundo nó de IA (Spark) ou par (256GB)",
        "Modelos classe 405B",
        "Monitoramento central (Zabbix)",
        "SLA de cliente a cumprir",
      ],
      timeline: "Outubro 2026+",
      color: "from-green-500 to-emerald-500",
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
              Roadmap de Implantação
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Três fases de evolução: do núcleo de IA até escala e robustez. Crescimento puxado pela demanda, não pelo capital.
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
                A infraestrutura cresce <strong>puxada pela demanda</strong> (cliente pagante), não pela disponibilidade de capital. As máquinas extras ficam de prontidão; o hardware de IA é adquirido quando um contrato justifica. <strong>Não enterramos capital antes da receita.</strong>
              </p>
            </Card>
          </div>
        </section>

        {/* Modelos de IA */}
        <section className="py-20 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Modelos de IA Planejados
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold text-foreground">Categoria</th>
                    <th className="text-left py-4 px-4 font-bold text-foreground">Modelo</th>
                    <th className="text-left py-4 px-4 font-bold text-foreground">Tamanho</th>
                    <th className="text-left py-4 px-4 font-bold text-foreground">VRAM Q4</th>
                    <th className="text-left py-4 px-4 font-bold text-foreground">Caso de Uso</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "Raciocínio", model: "DeepSeek-R1 70B Distill", size: "70B", vram: "~42 GB", use: "Problemas complexos, análise" },
                    { cat: "Geral PT-BR", model: "Llama 3.3 70B", size: "70B", vram: "~42 GB", use: "Conversas gerais, suporte" },
                    { cat: "Programação", model: "Qwen 2.5 Coder 32B", size: "32B", vram: "~20 GB", use: "Código, debugging, arquitetura" },
                    { cat: "Visão", model: "Qwen 2.5 VL 72B", size: "72B", vram: "~46 GB", use: "Análise de imagens, OCR" },
                    { cat: "Ação Rápida", model: "Llama 3.1 8B / Qwen 2.5 7B", size: "7-8B", vram: "~6 GB", use: "Respostas rápidas, classificação" },
                    { cat: "RAG (Embedding)", model: "BGE-M3", size: "0.5B", vram: "~2 GB", use: "Indexação de documentos" },
                    { cat: "RAG (Reranker)", model: "BGE-Reranker-v2-m3", size: "0.5B", vram: "~2 GB", use: "Ordenação de resultados" },
                    { cat: "Imagem", model: "Flux.1 [dev] (ComfyUI)", size: "12B", vram: "~24 GB", use: "Geração de imagens" },
                    { cat: "Áudio", model: "Whisper Large-v3", size: "1.5B", vram: "~8 GB", use: "Transcrição de áudio" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border/50">
                      <td className="py-4 px-4 text-foreground font-semibold">{row.cat}</td>
                      <td className="py-4 px-4 text-foreground">{row.model}</td>
                      <td className="py-4 px-4 text-foreground/70">{row.size}</td>
                      <td className="py-4 px-4 text-accent">{row.vram}</td>
                      <td className="py-4 px-4 text-foreground/70">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
