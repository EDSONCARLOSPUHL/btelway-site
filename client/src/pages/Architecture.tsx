import Header from "@/components/Header";
import TechBackground from "@/components/TechBackground";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Server, Database, Shield, Zap, Network, Code } from "lucide-react";

export default function Architecture() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <TechBackground />
      <Header />
      <Seo
        title="Arquitetura | IA BTELWAY - IA Privada e Soberana"
        description="A arquitetura da IA privada BTELWAY: infraestrutura dedicada e segura, dados que nunca saem da sua empresa e conformidade nativa com a LGPD."
        path="/arquitetura"
      />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-20 px-4 border-b border-border">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Arquitetura Técnica
            </h1>
            <p className="text-xl text-foreground/85 max-w-2xl">
              Infraestrutura robusta, segura e escalável. Dados privados e processamento local — sem dependências externas.
            </p>
          </div>
        </section>

        {/* Diagrama Arquitetura */}
        <section className="py-20 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Fluxo de Dados e Componentes
            </h2>
            <Card className="p-8 border border-border bg-accent/5">
              <img 
                src="/architecture-diagram-v2.webp" 
                alt="Arquitetura Técnica IA BTELWAY" 
                className="w-full rounded-lg"
              />
              <p className="text-foreground/85 text-sm mt-6 text-center">
                A orquestração gerencia as requisições e os nós com GPU processam a IA localmente. Um roteador inteligente decide, a cada pergunta, entre resposta privada (local) ou escalada externa quando não há dados sensíveis.
              </p>
            </Card>
          </div>
        </section>

        {/* Hardware */}
        <section className="py-20 px-4 bg-accent/5 border-y border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Hardware em Produção
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border border-border">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Control-Plane</h3>
                <p className="text-foreground/85 mb-6">
                  <strong>Servidor Dell</strong> — Orquestração, interface e gerenciamento de IA.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>CPU:</strong> DELL Intel Xeon</li>
                  <li><strong>RAM:</strong> 128 GB</li>
                  <li><strong>Disco 1:</strong> RAID 10 (sistema + serviços)</li>
                  <li><strong>Disco 2:</strong> Storage (modelos, RAG, dados)</li>
                  <li><strong>SO:</strong> Ubuntu Server 24.04 LTS</li>
                  <li><strong>Papel:</strong> Orquestração, sem inferência pesada</li>
                </ul>
              </Card>

              <Card className="p-8 border border-border">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Nós de Inferência</h3>
                <p className="text-foreground/85 mb-6">
                  <strong>Servidor com GPU</strong> — Executa os modelos de IA em tempo real.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li><strong>Processador:</strong> CPU de alto desempenho + GPU dedicada</li>
                  <li><strong>RAM:</strong> 128 GB (escalável)</li>
                  <li><strong>GPU:</strong> Acelerador de IA (ROCm ou CUDA)</li>
                  <li><strong>Modelos suportados:</strong> Até 128GB de modelos simultâneos</li>
                  <li><strong>Escalabilidade:</strong> Múltiplos nós para crescimento</li>
                  <li><strong>Redundância:</strong> Suporte a alta disponibilidade</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Stack de Software */}
        <section className="py-20 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Stack de Software (100% Open Source)
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  layer: "Sistema Operacional",
                  tool: "Linux (Ubuntu LTS)",
                  desc: "Base sólida, suporte de longo prazo, comunidade ativa",
                },
                {
                  layer: "Contêineres",
                  tool: "Docker",
                  desc: "Isolamento, portabilidade, fácil deploy",
                },
                {
                  layer: "Motor de IA",
                  tool: "Engine de IA Privada",
                  desc: "Gerencia modelos, execução local, sem envio de dados",
                },
                {
                  layer: "Interface Web",
                  tool: "Dashboard Privado",
                  desc: "Chat interativo, gerenciamento de modelos, histórico",
                },
                {
                  layer: "Banco Vetorial (RAG)",
                  tool: "Vector Database",
                  desc: "Indexa documentos, busca semântica, contexto para IA",
                },
                {
                  layer: "Automação",
                  tool: "Workflow Engine",
                  desc: "Fluxos de trabalho, integrações, automação",
                },
                {
                  layer: "Busca Privada",
                  tool: "Search Engine",
                  desc: "Busca sem rastrear usuário, cache distribuído",
                },
                {
                  layer: "Monitoramento",
                  tool: "Monitoring Stack",
                  desc: "Métricas em tempo real, alertas, dashboard",
                },
              ].map((item, idx) => (
                <Card key={idx} className="p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <Code className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.layer}</h4>
                      <p className="text-accent font-semibold text-sm mb-2">{item.tool}</p>
                      <p className="text-foreground/85 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Segurança */}
        <section className="py-20 px-4 bg-accent/5 border-y border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Segurança e Conformidade
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Firewall e Segurança",
                  desc: "Camada de proteção local, acesso seguro, bloqueio padrão de entrada",
                  icon: Shield,
                },
                {
                  title: "Processamento Local",
                  desc: "Dados sensíveis nunca saem da infraestrutura. Zero APIs externas para dados privados.",
                  icon: Database,
                },
                {
                  title: "LGPD Compliant",
                  desc: "Conformidade com Lei Geral de Proteção de Dados. Operador responsável, dados sob seu controle.",
                  icon: Network,
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <Card key={idx} className="p-8 border border-border">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-500 flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-foreground/85">{item.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Roteador de IA em Cascata */}
        <section className="py-20 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Roteador de IA em Cascata
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Pergunta Recebida",
                    desc: "O usuário envia uma pergunta pela interface privada da plataforma",
                  },
                  {
                    step: "2",
                    title: "Análise de Sensibilidade",
                    desc: "Sistema avalia: é sensível? É complexa? Requer contexto externo?",
                  },
                  {
                    step: "3",
                    title: "Decisão Local",
                    desc: "Se sensível ou simples → resolvida LOCALMENTE (custo marginal: energia)",
                  },
                  {
                    step: "4",
                    title: "Escalação Opcional",
                    desc: "Se complexa e não sensível → pode escalar para API externa, sem expor dados",
                  },
                  {
                    step: "5",
                    title: "Resposta Citada",
                    desc: "Resultado devolvido ao usuário com fonte (RAG, busca, modelo local ou externo)",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-foreground/85">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
