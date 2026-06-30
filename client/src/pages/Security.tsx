import { Link } from "wouter";
import Header from "@/components/Header";
import TechBackground from "@/components/TechBackground";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Lock, Shield, FileText } from "lucide-react";

export default function Security() {
  const certifications = [
    { icon: CheckCircle2, title: "ISO 27001", description: "Gestão de segurança da informação" },
    { icon: Shield, title: "SOC 2 Type II", description: "Conformidade de segurança e privacidade" },
    { icon: Lock, title: "LGPD Compliant", description: "Lei Geral de Proteção de Dados" },
    { icon: FileText, title: "HIPAA Ready", description: "Pronto para healthcare" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <TechBackground />
      <Header />
      <Seo
        title="Segurança | IA BTELWAY - IA Privada e Soberana"
        description="Segurança e soberania de dados na IA privada BTELWAY: suas informações nunca saem da empresa, com conformidade total com a LGPD."
        path="/seguranca"
      />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <PageHero
          eyebrow="Proteção de Nível Empresarial"
          title={<>Segurança & <span className="text-green-500">Conformidade</span></>}
          subtitle="Segurança de nível empresarial, com as certificações que sua empresa precisa."
        />

        {/* Certifications */}
        <section className="py-20 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground">Certificações & Conformidade</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {certifications.map((cert, idx) => {
                const Icon = cert.icon;
                const isCyan = idx % 2 === 1;
                return (
                  <Card key={idx} className={`p-6 text-center border border-border transition-all ${isCyan ? "hover:border-cyan-500/50" : "hover:border-green-500/50"}`}>
                    <div className="flex justify-center mb-4">
                      <Icon className={`w-8 h-8 ${isCyan ? "text-cyan-400" : "text-green-400"}`} />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{cert.title}</h3>
                    <p className="text-sm text-foreground/80">{cert.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 px-4 bg-accent/5 border-y border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground">Arquitetura de Segurança</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">Dados em Repouso</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">Criptografia AES-256</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">Armazenamento isolado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">Backup criptografado</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-8 border border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">Dados em Trânsito</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">TLS 1.3 obrigatório</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">VPN segura fim-a-fim</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">Certificados válidos</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 border-t border-border">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Quer conhecer nossa política de segurança completa?
            </h2>
            <Link href="/contato">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Solicitar Whitepaper
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
