/**
 * PageHero — cabeçalho tecnológico das páginas internas (IA BTELWAY).
 * Transmite "alta tecnologia" de forma consistente: grade técnica em perspectiva,
 * brilhos radiais verdes (cor da marca), linha de varredura (scanline) e badge opcional.
 * Tema escuro contínuo; texto branco com contraste forte. Verde único = green-500 (#22c55e).
 */
import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Conteúdo extra opcional (botões, badges, etc.) renderizado abaixo do subtítulo. */
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pt-28 pb-20 md:pt-32 md:pb-24 border-b border-green-500/15">
      {/* Camada de profundidade: degradê escuro -> base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b2417]/90 via-[#0c2014]/60 to-transparent" />

      {/* Grade técnica em perspectiva (piso de datacenter) */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to top, black, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent 85%)",
          transform: "perspective(520px) rotateX(58deg)",
          transformOrigin: "bottom",
        }}
      />

      {/* Brilho radial verde no canto */}
      <div
        className="absolute -top-24 right-[-6rem] w-[34rem] h-[34rem] rounded-full blur-3xl opacity-[0.22]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.6) 0%, rgba(34,197,94,0) 70%)",
        }}
      />

      {/* Linha de varredura animada (scanline) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-scanline absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/60 to-transparent" />
      </div>

      <div className="container relative z-10">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-semibold text-xs tracking-[0.15em] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-soft" />
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-[1.08] text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
