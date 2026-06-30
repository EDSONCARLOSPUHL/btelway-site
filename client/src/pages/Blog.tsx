import Header from "@/components/Header";
import TechBackground from "@/components/TechBackground";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "Por que IA Privada é Essencial para Fintech",
      excerpt: "Descubra como empresas financeiras estão protegendo dados sensíveis com IA local.",
      author: "Edson Puhl",
      date: "28 de Junho, 2026",
      category: "Fintech",
      readTime: "5 min"
    },
    {
      title: "LGPD e IA: Conformidade Garantida",
      excerpt: "Guia completo sobre como manter conformidade com LGPD ao usar IA em sua empresa.",
      author: "Edson Puhl",
      date: "25 de Junho, 2026",
      category: "Compliance",
      readTime: "8 min"
    },
    {
      title: "Comparativo: IA em Nuvem vs IA Privada",
      excerpt: "Análise detalhada dos custos, segurança e performance de cada abordagem.",
      author: "Edson Puhl",
      date: "20 de Junho, 2026",
      category: "Análise",
      readTime: "10 min"
    },
    {
      title: "Automação Inteligente: ROI em 6 Meses",
      excerpt: "Case study de como uma empresa de e-commerce aumentou eficiência em 40%.",
      author: "Edson Puhl",
      date: "15 de Junho, 2026",
      category: "Case Study",
      readTime: "7 min"
    },
    {
      title: "Segurança de Rede com MikroTik",
      excerpt: "Entenda como implementar firewall inteligente e VPN segura em sua infraestrutura.",
      author: "Edson Puhl",
      date: "10 de Junho, 2026",
      category: "Segurança",
      readTime: "9 min"
    },
    {
      title: "Manutenção Preditiva com IA",
      excerpt: "Reduza downtime e custos operacionais com previsão de falhas baseada em IA.",
      author: "Edson Puhl",
      date: "5 de Junho, 2026",
      category: "Manufatura",
      readTime: "6 min"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <TechBackground />
      <Header />
      <Seo
        title="Blog | IA BTELWAY - IA Privada e Soberana"
        description="Artigos sobre IA privada, soberania de dados, segurança da informação e LGPD para empresas que levam a proteção de dados a sério."
        path="/blog"
      />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <PageHero
          eyebrow="Conhecimento & Insights"
          title={<>Blog & <span className="text-green-500">Recursos</span></>}
          subtitle="Artigos, guias e case studies sobre IA Privada, segurança e transformação digital."
        />

        {/* Blog Posts */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post, idx) => (
                <Card key={idx} className="p-8 border border-border hover:border-accent/50 transition-all cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground/80">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-foreground/85 mb-6 text-sm">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-foreground/80 border-t border-border pt-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-4 bg-accent/5 border-t border-border">
          <div className="container max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 text-foreground text-center">
              Receba Novidades
            </h2>
            <p className="text-foreground/85 text-center mb-8">
              Inscreva-se para receber artigos, dicas e atualizações sobre IA Privada direto no seu email.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/[0.04] border border-green-500/20 text-white placeholder:text-white/40 focus:outline-none focus:border-green-500/60 focus:ring-1 focus:ring-green-500/40 transition-colors"
              />
              <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
