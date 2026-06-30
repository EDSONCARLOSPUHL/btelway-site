/**
 * NotFound (404) — IA BTELWAY
 * Tema escuro contínuo com textura técnica. Verde único da marca (green-500).
 * Texto branco/cinza-claro com contraste forte. Sem fundo claro nem preto chapado.
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home as HomeIcon, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import TechBackground from "@/components/TechBackground";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 text-white">
      <TechBackground />
      <Card className="w-full max-w-lg border border-green-500/20 bg-white/[0.04] backdrop-blur-sm shadow-2xl shadow-black/40">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-green-500" />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-white mb-2">404</h1>

          <h2 className="text-xl font-semibold text-white/90 mb-4">
            Página não encontrada
          </h2>

          <p className="text-white/75 mb-8 leading-relaxed">
            A página que você procura não existe.
            <br />
            Ela pode ter sido movida ou removida.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => setLocation("/")}
              className="bg-green-500 hover:bg-green-600 text-white px-6 font-semibold flex items-center gap-2 shadow-lg shadow-green-500/25"
            >
              <HomeIcon className="w-4 h-4" />
              Voltar ao início
            </Button>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:border-white/50 px-6 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Página anterior
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
