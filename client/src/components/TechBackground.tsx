/**
 * TechBackground — atmosfera tecnológica das páginas internas.
 * Reproduz a profundidade/leveza da home: degradê escuro (nunca preto chapado),
 * textura de rede de pontos + linhas em baixa opacidade e brilhos radiais verdes.
 * É puramente decorativo (fixo, atrás do conteúdo) e não afeta a leitura.
 */
export default function TechBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Degradê base: escuro -> tom levemente azulado-esverdeado */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#11271b] via-[#0e2417] to-[#0c2014]" />

      {/* Brilhos radiais discretos (verde da marca) para dar profundidade */}
      <div
        className="absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full opacity-[0.18] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.55) 0%, rgba(34,197,94,0) 70%)",
        }}
      />
      <div
        className="absolute top-1/3 right-[-10rem] w-[36rem] h-[36rem] rounded-full opacity-[0.12] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.45) 0%, rgba(34,197,94,0) 70%)",
        }}
      />

      {/* Rede de pontos (grid) em baixa opacidade */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(74,222,128,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Linhas finas em diagonal para sugerir conexões de rede */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="tech-lines"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(25)"
          >
            <line x1="0" y1="0" x2="0" y2="120" stroke="#4ade80" strokeWidth="1" />
            <line x1="0" y1="0" x2="120" y2="0" stroke="#4ade80" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-lines)" />
      </svg>

      {/* Vinheta suave nas bordas para foco no conteúdo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(2,10,7,0.55) 100%)",
        }}
      />
    </div>
  );
}
