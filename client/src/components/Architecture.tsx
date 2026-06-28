import { Card } from "@/components/ui/card";
import { Server, Shield, Zap } from "lucide-react";

export default function Architecture() {
  return (
    <section id="architecture" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Arquitetura Técnica
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Infraestrutura Robusta
          </h2>
          <p className="text-lg text-foreground/70">
            Separação clara entre orquestração, processamento e segurança.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-16">
          <img
            src="/manus-storage/architecture-diagram_7f7ac9d8.png"
            alt="Arquitetura Técnica"
            className="w-full rounded-lg shadow-lg border border-border"
          />
        </div>

        {/* Components Breakdown */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Control-Plane */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Control-Plane</h3>
            </div>
            <p className="text-foreground/70 mb-4 text-sm">
              Orquestração, interface web, automação e RAG. Não faz inferência pesada.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-foreground/60">
                <span className="font-semibold text-foreground">Hardware:</span> Dell IA
              </p>
              <p className="text-foreground/60">
                <span className="font-semibold text-foreground">OS:</span> Ubuntu Server
              </p>
              <p className="text-foreground/60">
                <span className="font-semibold text-foreground">Serviços:</span> Ollama, Open WebUI, Qdrant, n8n
              </p>
            </div>
          </Card>

          {/* Inference Nodes */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 border-accent">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent">Nós de Inferência</h3>
            </div>
            <p className="text-foreground/70 mb-4 text-sm">
              Onde os modelos de IA realmente rodam. GPU/ROCm para processamento pesado.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-foreground/60">
                <span className="font-semibold text-foreground">Principal:</span> GMKtec AI
              </p>
              <p className="text-foreground/60">
                <span className="font-semibold text-foreground">Modelos:</span> Llama, Qwen, DeepSeek
              </p>
              <p className="text-foreground/60">
                <span className="font-semibold text-foreground">Futuro:</span> NVIDIA AI
              </p>
            </div>
          </Card>

          {/* Security Layer */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-secondary">Segurança</h3>
            </div>
            <p className="text-foreground/70 mb-4 text-sm">
              Firewall gerenciado, VPN, controle de origem e acesso restrito.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-foreground/60">
                <span className="font-semibold text-foreground">Roteador:</span> MikroTik CCR1072
              </p>
              <p className="text-foreground/60">
                <span className="font-semibold text-foreground">Firewall:</span> UFW + MikroTik
              </p>
              <p className="text-foreground/60">
                <span className="font-semibold text-foreground">Acesso:</span> VPN + SSH endurecido
              </p>
            </div>
          </Card>
        </div>

        {/* Data Flow */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Fluxo de Dados</h3>
          <img
            src="/manus-storage/data-flow-visual_7d35267d.png"
            alt="Fluxo de Dados"
            className="w-full rounded-lg shadow-lg border border-border"
          />
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 border border-primary/10">
          <h3 className="text-2xl font-bold text-primary mb-6">Diferenciais Técnicos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Dados Privados",
                description: "Nenhum dado sensível sai da sua infraestrutura. Tudo processa localmente.",
              },
              {
                title: "Custo Fixo",
                description: "Sem surpresas de token. Você paga um valor mensal fixo pela infraestrutura.",
              },
              {
                title: "Modelos Locais",
                description: "Llama 70B, Qwen, DeepSeek-R1 rodando na sua máquina. Sem dependência de APIs.",
              },
              {
                title: "RAG Integrado",
                description: "Indexe seus documentos e faça perguntas sobre eles com contexto local.",
              },
              {
                title: "Automação",
                description: "n8n para workflows automáticos, integrações e orquestração de processos.",
              },
              {
                title: "Monitoramento",
                description: "Netdata + Zabbix para visibilidade total da infraestrutura 24/7.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-1 h-auto bg-accent rounded-full flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-foreground/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
