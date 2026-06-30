import Header from "@/components/Header";
import TechBackground from "@/components/TechBackground";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock, Loader2, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// CONFIGURAÇÃO DE E-MAIL
// O envio do formulário usa o Formspree (sem necessidade de servidor próprio).
// 1. Crie uma conta gratuita em https://formspree.io
// 2. Crie um novo formulário apontando para edsonpuhl@gmail.com
// 3. Copie o ID do formulário (ex: "xyzabcd") e cole abaixo.
// Enquanto o ID for "SEU_FORM_ID", o formulário abrirá o e-mail/WhatsApp como alternativa.
const FORMSPREE_ID = "SEU_FORM_ID";
const CONTACT_EMAIL = "edsonpuhl@gmail.com";
const WHATSAPP_NUMBER = "5554933806130"; // +55 (54) 9 3380-6130

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fallbackEmail = () => {
    const subject = encodeURIComponent(`Contato pelo site - ${form.name || "Novo lead"}`);
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\nEmpresa: ${form.company}\n\nMensagem:\n${form.message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Preencha nome, e-mail e mensagem.");
      return;
    }

    // Sem ID configurado: usa o cliente de e-mail do usuário como alternativa.
    if (FORMSPREE_ID === "SEU_FORM_ID") {
      toast.info("Abrindo seu aplicativo de e-mail para enviar a mensagem...");
      fallbackEmail();
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nome: form.name,
          email: form.email,
          empresa: form.company,
          mensagem: form.message,
          _subject: `Novo contato pelo site - ${form.name}`,
        }),
      });

      if (res.ok) {
        toast.success("Mensagem enviada! Retornaremos em breve.");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        toast.error("Não foi possível enviar. Tente pelo e-mail ou WhatsApp.");
        fallbackEmail();
      }
    } catch {
      toast.error("Erro de conexão. Abrindo seu e-mail como alternativa.");
      fallbackEmail();
    } finally {
      setSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Olá! Vim pelo site da IA BTELWAY e gostaria de agendar uma demonstração.",
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <TechBackground />
      <Header />
      <Seo
        title="Contato | IA BTELWAY - IA Privada e Soberana"
        description="Fale com a BTELWAY e descubra como implantar IA privada e soberana na sua empresa, com custo fixo e conformidade com a LGPD."
        path="/contato"
      />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-20 px-4 border-b border-border">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Vamos Conversar
            </h1>
            <p className="text-xl text-foreground/85 max-w-2xl">
              Fale com a gente e descubra como a IA privada transforma seu negócio.
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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Nome *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Empresa</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Sua empresa"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Mensagem *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Enviando...
                      </span>
                    ) : (
                      "Enviar Mensagem"
                    )}
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
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground/85 hover:text-accent transition-colors">
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border border-border">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                        <a href="tel:+5554933806130" className="text-foreground/85 hover:text-accent transition-colors">
                          +55 (54) 9 3380-6130
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border border-border">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                        <p className="text-foreground/85 text-sm">
                          Segunda a Sexta<br />
                          09:00 - 18:00 (Horário de Brasília)
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border border-border bg-accent/5">
                    <h3 className="font-semibold text-foreground mb-3">Fale agora no WhatsApp</h3>
                    <p className="text-foreground/85 text-sm mb-4">
                      Prefere uma conversa rápida? Chame nosso time direto no WhatsApp.
                    </p>
                    <Button
                      size="sm"
                      onClick={openWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" /> Abrir WhatsApp
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
                <p className="text-foreground/85 text-sm">
                  Normalmente entre 2-4 semanas, dependendo da complexidade da sua infraestrutura.
                </p>
              </Card>
              <Card className="p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Vocês oferecem suporte técnico?</h3>
                <p className="text-foreground/85 text-sm">
                  Sim, todos os planos incluem suporte. O plano Enterprise tem suporte 24/7.
                </p>
              </Card>
              <Card className="p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Como funciona a migração?</h3>
                <p className="text-foreground/85 text-sm">
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
