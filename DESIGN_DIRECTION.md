# Direção de Design — IA BTELWAY v3 (Redesign Premium)

## Análise de Referências Visuais

Pesquisei sites de **IA privada, datacenter, MSP e cybersecurity** premium. Padrões identificados:

### Tendências Visuais (2025)
1. **Dark Mode Dominante** — Fundo preto/cinza escuro com acentos neon (cyan, verde, roxo)
2. **Gradientes Futuristas** — Gradientes suaves cyan→roxo, verde→azul, com glow effects
3. **Tipografia Ousada** — Headlines em sans-serif bold (Poppins, Inter Bold), corpo em sans-serif leve
4. **Ícones 3D/Glow** — Ícones com sombras suaves, efeitos de brilho, animações de entrada
5. **Layouts Assimétricos** — Hero com imagem/gráfico grande à direita, texto à esquerda
6. **Cards com Borda Neon** — Bordas com cor de acento (verde, cyan), fundo semi-transparente
7. **Animações Sutis** — Fade-in, slide-in, hover effects em 200-300ms, sem excesso
8. **Seções com Fundo Gradiente** — Alternar entre fundo sólido e gradiente suave

### Paleta de Cores Proposta (compatível com logo verde)
- **Primária**: Verde BTELway (#22C55E ou #16A34A) — já na logo
- **Secundária**: Cyan/Azul (#06B6D4) — para contraste e tecnologia
- **Terciária**: Roxo/Magenta (#A855F7) — para destaque
- **Fundo Base**: #0F172A (azul-escuro quase preto)
- **Fundo Secundário**: #1E293B (cinza-azul escuro)
- **Texto Primário**: #F1F5F9 (branco suave)
- **Texto Secundário**: #94A3B8 (cinza claro)
- **Acentos**: Gradientes cyan→verde, roxo→magenta

## Estrutura de Páginas (Restauradas + Novas)

### Menu Principal (Restaurar + Manter)
1. **Home** — Hero premium + pilares + CTA
2. **Serviços** — 3 níveis (Rede MikroTik, IA Privada, Combo Gerenciado) — RESTAURAR
3. **Arquitetura** — Diagrama técnico, stack, componentes — RESTAURAR
4. **Roadmap** — Fases 1, 2, 3 com timeline — RESTAURAR
5. **Casos de Uso** — Indústrias (Fintech, Healthcare, E-commerce, Manufatura)
6. **Segurança** — Conformidade LGPD, criptografia, compliance
7. **Preços** — Planos (Starter, Professional, Enterprise)
8. **Blog** — Artigos técnicos
9. **Contato** — Formulário + WhatsApp

## Componentes Visuais a Gerar

1. **Hero Background** — Abstrato futurista com verde/cyan, efeito de partículas ou linhas
2. **Ícones Customizados** — Privacidade, Controle, Custos, Arquitetura, Roadmap (6-8 ícones)
3. **Diagrama de Arquitetura** — Control-plane R530, nós EVO-X2, roteador de IA, fluxo de dados
4. **Ilustração de Datacenter** — Servidor com glow, conexões, rede privada
5. **Timeline Roadmap** — Fases com ícones, cores, animações

## Estilo de Código (Tailwind 4 + Shadcn/UI)

- Usar `bg-gradient-to-r from-green-600 to-cyan-500` para gradientes
- Bordas com `border-green-500/30` para efeito neon suave
- Shadows: `shadow-lg shadow-green-500/20` para glow
- Animações: `transition-all duration-300 ease-out`
- Hover: `hover:border-green-400 hover:shadow-green-500/40`
- Cores semânticas: `bg-background`, `text-foreground`, com overrides para seções

## Próximas Ações

1. Gerar assets visuais (hero, ícones, diagrama, ilustrações)
2. Criar páginas: Serviços, Arquitetura, Roadmap (restauradas)
3. Redesenhar Home com novo visual
4. Implementar animações e interações
5. Testar responsividade e performance
6. Deploy via GitHub → Cloudflare

---
**Filosofia**: Premium, técnico, confiável. Visual que comunica "infraestrutura séria, segura, privada" — não genérico, não corporativo chato.
