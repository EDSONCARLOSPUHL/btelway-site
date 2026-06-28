# Brainstorm de Design - Edson IA MSP + IA Privada

## Contexto
Site profissional para Edson Carlos Puhl, focado em serviços de Data Center de IA Privada e Gestão de Rede (MSP). Público-alvo: empresas que precisam de privacidade de dados, infraestrutura própria e IA local. Diferencial: dados não saem da empresa, custo fixo previsível, sem dependência de APIs de nuvem.

---

## Três Abordagens de Design

### 1. **Tech-Forward Minimalist**
Estética limpa, monochromática com acentos de azul/ciano, tipografia sans-serif moderna, muitos espaços em branco. Comunica confiança técnica e clareza. Inspirado em startups de infraestrutura (Vercel, Netlify).
**Probabilidade:** 0.07

### 2. **Enterprise Security Shield**
Design corporativo com elementos de segurança (cadeados, escudos, camadas), paleta azul-escuro + verde/ouro, tipografia sólida. Comunica proteção, conformidade, solidez. Inspirado em empresas de cibersegurança (CrowdStrike, Fortinet).
**Probabilidade:** 0.04

### 3. **Data-Centric Organic**
Design moderno com elementos de fluxo de dados (linhas, nós, conexões), paleta quente (laranja/âmbar + azul-profundo), tipografia com contraste (serif display + sans-serif body). Comunica movimento, inteligência, conexão. Inspirado em plataformas de IA (Anthropic, OpenAI).
**Probabilidade:** 0.08

---

## Abordagem Escolhida: **Tech-Forward Minimalist**

### Design Movement
**Minimalismo Técnico + Brutalismo Digital** — Simplicidade radical na forma, sofisticação na substância. Inspirado em design de infraestrutura de código aberto e startups B2B de alto valor.

### Core Principles
1. **Clareza Radical**: Cada elemento serve um propósito. Sem decoração supérflua.
2. **Hierarquia Tipográfica Forte**: Contraste claro entre títulos, subtítulos e corpo.
3. **Espaço Negativo Generoso**: Respiro visual que comunica confiança e estabilidade.
4. **Funcionalidade Visível**: Componentes técnicos (arquitetura, fluxos) são parte da narrativa visual.

### Color Philosophy
- **Primária**: Azul-profundo (`#0F172A` / `oklch(0.15 0.08 260)`) — confiança, segurança, tecnologia.
- **Secundária**: Ciano (`#06B6D4` / `oklch(0.65 0.15 200)`) — IA, inovação, movimento.
- **Neutra**: Branco (`#FFFFFF`) e Cinza-claro (`#F8FAFC`) — espaço, clareza.
- **Accent**: Verde-esmeralda (`#10B981` / `oklch(0.65 0.15 160)`) — sucesso, operação, privacidade.
- **Destaque**: Laranja-âmbar (`#F97316` / `oklch(0.65 0.18 40)`) — atenção em CTAs críticas.

**Raciocínio**: Azul comunica segurança corporativa; ciano adiciona modernidade tech; verde reforça privacidade/proteção; laranja cria urgência em ações.

### Layout Paradigm
- **Hero Assimétrico**: Texto à esquerda (grande, bold), diagrama técnico à direita (minimalista, animado).
- **Seções em Camadas**: Cada serviço/feature em card com borda sutil, sem sombra pesada.
- **Grid Flexível**: Máximo 2-3 colunas em desktop; 1 coluna em mobile. Respira.
- **Diagrama de Arquitetura Centralizado**: Seção dedicada mostrando control-plane, nós, segurança.

### Signature Elements
1. **Linha Divisória Minimalista**: Linhas horizontais finas (1-2px) em ciano separando seções.
2. **Ícones Geométricos**: Formas simples (círculos, quadrados, linhas) para representar conceitos (privacidade = escudo, IA = neurônio, rede = nós).
3. **Código/Terminal Visual**: Snippets de código ou pseudo-código em monospace, com syntax highlighting sutil (azul + ciano).

### Interaction Philosophy
- **Hover Subtil**: Cards levantam ligeiramente (1-2px shadow), texto muda para ciano.
- **Scroll Reveal**: Elementos entram suavemente (fade + slide) conforme o usuário desce.
- **CTA Responsiva**: Botões mudam de cor (laranja → laranja-escuro) e escalam (scale 1 → 1.05) ao hover.
- **Nenhuma Animação Desnecessária**: Movimento serve propósito (guiar atenção, confirmar ação).

### Animation Guidelines
- **Entrance**: 300ms ease-out, fade + slide-up de 20px.
- **Hover**: 150ms ease-out, scale 1.02, shadow aumento sutil.
- **CTA Press**: 100ms ease-out, scale 0.98 (confirmação tátil).
- **Scroll Trigger**: Elementos revelam em cascata (stagger 50-80ms).
- **Respecto a `prefers-reduced-motion`**: Desativa todas as animações não-críticas.

### Typography System
- **Display (Títulos Principais)**: `Poppins` Bold (700) / 48-56px — impacto, modernidade.
- **Heading (Subtítulos)**: `Poppins` SemiBold (600) / 28-32px — hierarquia clara.
- **Body (Corpo)**: `Inter` Regular (400) / 16px — legibilidade, neutralidade.
- **Small (Labels/Meta)**: `Inter` Medium (500) / 12-14px — informação secundária.
- **Code**: `Fira Code` Regular (400) / 13-14px — técnico, monospace.

**Hierarquia**: Contraste forte entre Poppins (bold, display) e Inter (neutral, body) cria estrutura visual clara.

### Brand Essence
**Posicionamento**: Infraestrutura de IA privada que mantém dados na empresa, com custo fixo e operação gerenciada — para empresas que não podem terceirizar segurança.

**3 Adjetivos de Personalidade**:
1. **Sólido** — Confiável, estável, sem surpresas.
2. **Técnico** — Profundo, preciso, feito por engenheiros.
3. **Protetor** — Defende seus dados, sua privacidade, sua autonomia.

### Brand Voice
- **Tons**: Direto, sem jargão desnecessário. Técnico mas acessível.
- **Headlines**: Comunicam benefício imediato, não buzzwords.
- **CTAs**: Ação clara, sem pressão.

**Exemplos**:
- ✅ "Seus dados permanecem em sua infraestrutura. Sempre."
- ❌ "Transforme sua estratégia de IA com soluções inovadoras."
- ✅ "Setup em 2 semanas. Suporte gerenciado 24/7."
- ❌ "Junte-se à revolução da IA."

### Wordmark & Logo
**Conceito**: Símbolo geométrico minimalista — um escudo com um neurônio/nó dentro (representando proteção + IA). Sem texto no logo, apenas o símbolo em azul-profundo + ciano.

**Logo Marca**: Letras `Edson IA` em Poppins Bold, com o símbolo à esquerda. Usado em header e favicon.

### Signature Brand Color
**Azul-Profundo** (`#0F172A` / `oklch(0.15 0.08 260)`) — cor primária, imediatamente reconhecível como "Edson IA". Usado em headers, CTAs principais, bordas.

---

## Implementação
Após aprovação desta abordagem, o site incluirá:
1. Header com logo + nav (Serviços, Arquitetura, Roadmap, Contato)
2. Hero section com texto bold + diagrama técnico animado
3. Seção de Serviços (3 cards: Rede, IA Privada, Combo)
4. Arquitetura Técnica (diagrama interativo: control-plane, nós, segurança)
5. Roadmap (Fase 1, 2, 3 em timeline visual)
6. Diferenciais vs. APIs de nuvem (comparação lado-a-lado)
7. Contato/CTA (formulário simples + email)
8. Footer com links e informações legais

---

**Próximo passo**: Implementar design com React + Tailwind 4, gerando imagens customizadas para hero e diagrama técnico.
