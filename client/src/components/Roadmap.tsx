import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const phases = [
  {
    phase: 1,
    title: "Núcleo de IA",
    status: "em-andamento",
    statusLabel: "Em Andamento",
    timeline: "Junho 2026",
    color: "from-blue-500 to-cyan-500",
    completed: [
      "Ubuntu Server 24.04 LTS",
      "Docker + Ollama + Open WebUI",
      "Primeiro modelo respondendo (llama3.2:3b)",
      "Netdata (monitoramento)",
      "Firewall UFW endurecido",
    ],
    pending: [
      "Qdrant + RAG sobre documentos",
      "n8n / Node-RED (automação)",
      "SearXNG (busca web privada)",
      "Backup das configurações",
    ],
  },
  {
    phase: 2,
    title: "Inferência & Exposição",
    status: "planejado",
    statusLabel: "Planejado",
    timeline: "Q3 2026",
    color: "from-cyan-500 to-emerald-500",
    completed: [],
    pending: [
      "Adquirir GMKtec EVO-X2 128GB",
      "Migrar inferência para GPU/ROCm",
      "Instalar MikroTik CCR1072",
      "HTTPS no Open WebUI (Let's Encrypt)",
      "Acesso via VPN segura",
    ],
  },
  {
    phase: 3,
    title: "Escala & Robustez",
    status: "futuro",
    statusLabel: "Futuro",
    timeline: "Q4 2026+",
    color: "from-emerald-500 to-amber-500",
    completed: [],
    pending: [
      "Ligar parque de servidores (R610, G7)",
      "Alta disponibilidade (HA)",
      "Segundo nó de IA (Spark) ou par",
      "Monitoramento central (Zabbix)",
      "Suporte a múltiplos clientes",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Evolução Planejada
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Roadmap de Implantação
          </h2>
          <p className="text-lg text-foreground/70">
            Três fases de crescimento, puxadas pela demanda e validadas em produção.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {phases.map((phase, idx) => {
            const isCompleted = phase.status === "concluido";
            const isInProgress = phase.status === "em-andamento";

            return (
              <div key={idx} className="relative">
                {/* Timeline connector */}
                {idx < phases.length - 1 && (
                  <div className="absolute left-8 top-24 w-1 h-12 bg-gradient-to-b from-accent to-accent/20" />
                )}

                {/* Phase Card */}
                <div className="flex gap-6 md:gap-8">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center pt-1">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                        isCompleted
                          ? "bg-secondary"
                          : isInProgress
                            ? "bg-accent"
                            : "bg-muted"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      ) : isInProgress ? (
                        <Clock className="w-8 h-8 text-white animate-spin" />
                      ) : (
                        <Circle className="w-8 h-8 text-foreground/40" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      {/* Header */}
                      <div className={`h-24 bg-gradient-to-r ${phase.color} flex items-end p-6`}>
                        <div className="flex items-center justify-between w-full">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              Fase {phase.phase}: {phase.title}
                            </h3>
                            <p className="text-white/80 text-sm">{phase.timeline}</p>
                          </div>
                          <Badge
                            className={`${
                              isCompleted
                                ? "bg-secondary text-white"
                                : isInProgress
                                  ? "bg-accent text-white"
                                  : "bg-muted text-foreground"
                            }`}
                          >
                            {phase.statusLabel}
                          </Badge>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-8 space-y-6">
                        {/* Completed Items */}
                        {phase.completed.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4" />
                              Concluído
                            </h4>
                            <ul className="space-y-2">
                              {phase.completed.map((item, iidx) => (
                                <li key={iidx} className="flex items-start gap-3 text-sm">
                                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                  <span className="text-foreground/80">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Pending Items */}
                        {phase.pending.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Circle className="w-4 h-4" />
                              {phase.completed.length > 0 ? "Próximas" : "Planejado"}
                            </h4>
                            <ul className="space-y-2">
                              {phase.pending.map((item, iidx) => (
                                <li key={iidx} className="flex items-start gap-3 text-sm">
                                  <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                                  <span className="text-foreground/70">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Principle */}
        <div className="mt-16 bg-primary/5 rounded-lg p-8 border border-primary/10">
          <p className="text-foreground/80 text-center max-w-3xl mx-auto">
            <span className="font-semibold text-primary">Princípio Condutor:</span> A infraestrutura cresce puxada pela demanda (cliente pagante), não pela disponibilidade. As máquinas extras ficam de prontidão; o hardware de IA é adquirido quando um contrato justifica. Não enterramos capital antes da receita.
          </p>
        </div>
      </div>
    </section>
  );
}
