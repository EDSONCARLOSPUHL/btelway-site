import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-4 border-b border-border">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Vamos Conversar
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Entre em contato conosco para conhecer como IA Privada pode transformar seu negócio.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-foreground">Envie uma Mensagem</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Nome</label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Empresa</label>
                    <input
                      type="text"
                      placeholder="Sua empresa"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Mensagem</label>
                    <textarea
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent resize-none"
                    />
                  </div>
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-foreground">Informações de Contato</h2>
                <div className="space-y-6">
                  <Card className="p-6 border border-border">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a href="mailto:edsonpuhl@gmail.com" className="text-foreground/70 hover:text-accent transition-colors">
                          edsonpuhl@gmail.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border border-border">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                        <a href="tel:+5554999632518" className="text-foreground/70 hover:text-accent transition-colors">
                          +55 (54) 9 9603-2518
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border border-border">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                        <p className="text-foreground/70 text-sm">
                          Segunda a Sexta<br />
                          09:00 - 18:00 (Horário de Brasília)
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border border-border bg-accent/5">
                    <h3 className="font-semibold text-foreground mb-3">Agende uma Demo</h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      Prefere uma conversa rápida? Agende uma demo de 30 minutos com nosso time.
                    </p>
                    <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                      Agendar no Calendário
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-accent/5 border-t border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
              Perguntas Frequentes
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <Card className="p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Qual é o tempo de implementação?</h3>
                <p className="text-foreground/70 text-sm">
                  Normalmente entre 2-4 semanas, dependendo da complexidade da sua infraestrutura.
                </p>
              </Card>
              <Card className="p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Vocês oferecem suporte técnico?</h3>
                <p className="text-foreground/70 text-sm">
                  Sim, todos os planos incluem suporte. Enterprise tem suporte 24/7.
                </p>
              </Card>
              <Card className="p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Como funciona a migração?</h3>
                <p className="text-foreground/70 text-sm">
                  Ajudamos com todo o processo, incluindo backup dos seus dados atuais.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
