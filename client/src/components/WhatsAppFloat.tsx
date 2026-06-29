/**
 * WhatsAppFloat — botão flutuante global de WhatsApp.
 * Identidade BTELway: verde, canto inferior direito, sempre visível.
 */
import { useEffect, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5554933806130?text=" +
  encodeURIComponent("Olá! Vim pelo site e quero saber mais sobre a IA privada da BTELWAY.");

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-5 py-3 text-white shadow-xl shadow-green-900/30 transition-all duration-300 hover:scale-105 hover:bg-[#1fb955] active:scale-95 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-60" />
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white relative"
          aria-hidden="true"
        >
          <path d="M16.004 2.667c-7.36 0-13.333 5.973-13.333 13.333 0 2.347.613 4.64 1.781 6.667L2.667 29.333l6.84-1.792a13.27 13.27 0 0 0 6.497 1.677h.005c7.36 0 13.333-5.973 13.333-13.333S23.364 2.667 16.004 2.667zm0 24.32h-.004a11.03 11.03 0 0 1-5.62-1.539l-.403-.239-4.06 1.064 1.083-3.957-.263-.406a10.98 10.98 0 0 1-1.685-5.91c0-6.112 4.973-11.085 11.092-11.085 2.963 0 5.747 1.155 7.841 3.251a11.01 11.01 0 0 1 3.247 7.843c0 6.113-4.973 11.086-11.085 11.086zm6.084-8.301c-.333-.167-1.973-.973-2.279-1.085-.305-.111-.528-.167-.75.167-.222.333-.861 1.084-1.056 1.306-.195.222-.389.25-.722.083-.333-.167-1.408-.519-2.681-1.654-.991-.884-1.66-1.976-1.854-2.31-.195-.333-.021-.513.146-.679.15-.149.333-.389.5-.583.167-.195.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.75-1.806-1.027-2.473-.27-.649-.545-.561-.75-.572l-.639-.011a1.23 1.23 0 0 0-.889.417c-.305.333-1.166 1.139-1.166 2.778s1.194 3.222 1.361 3.444c.167.222 2.35 3.588 5.694 5.031.796.344 1.417.549 1.9.703.799.254 1.526.218 2.101.132.641-.096 1.973-.806 2.251-1.584.278-.778.278-1.445.195-1.584-.083-.139-.305-.222-.639-.389z" />
        </svg>
      </span>
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">Fale conosco</span>
    </a>
  );
}
