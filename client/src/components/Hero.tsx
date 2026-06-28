import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/manus-storage/hero-background_d8b14c74.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">
              Infraestrutura de IA Privada
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
              Seus dados,
              <br />
              sua infraestrutura.
            </h1>
          </div>

          <p className="text-lg text-foreground/80 max-w-lg leading-relaxed">
            IA local que não sai de casa. Processamento privado, custo fixo, sem dependência de APIs de nuvem. Para empresas que não podem terceirizar segurança.
          </p>

          {/* Key Benefits */}
          <div className="space-y-3 pt-4">
            {[
              "Dados permanecem na sua infraestrutura",
              "Modelos de IA rodando localmente (Llama, Qwen, DeepSeek)",
              "Custo fixo previsível, sem surpresas de token",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground/80">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 group"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Solicitar Demo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 rounded-full px-8"
              onClick={() => {
                const archSection = document.getElementById("architecture");
                archSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver Arquitetura
            </Button>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-full h-96">
            {/* Animated circles representing data flow */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer ring */}
              <div
                className="absolute w-64 h-64 rounded-full border-2 border-accent/20 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              {/* Middle ring */}
              <div
                className="absolute w-48 h-48 rounded-full border-2 border-accent/40 animate-spin"
                style={{ animationDuration: "15s", animationDirection: "reverse" }}
              />
              {/* Center node */}
              <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">IA</div>
                  <div className="text-xs opacity-80">Privada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
