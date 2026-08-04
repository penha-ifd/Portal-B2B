# Portal Comer Fora B2B

Portal de gestão para restaurantes que operam salão físico, usando dados do iFood (delivery, pagamento, cardápio) para gerar inteligência acionável no canal presencial.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS 4 (CSS variables IFDS)
- Radix UI + shadcn/ui components
- React Router 7
- Recharts (gráficos)
- Motion (animações)
- pnpm

## Como rodar

```bash
pnpm install
pnpm dev
```

## Design System

IFDS (iFood Design System):
- Fonte: "iFood RC Textos"
- CSS variables: `--text-primario`, `--font-size-20`, etc.
- Setup obrigatório descrito em `guidelines/Guidelines.md`
- Pacotes: `@ifood/ifds-make-kit-web-components`, `@ifood/ifdl-css-themes`, `@ifood/ifdl-fonts`, `@ifood/ifdl-icons`

## Estrutura

```
src/
├── app/
│   ├── App.tsx          # Router principal
│   ├── components/      # Componentes compartilhados
│   ├── pages/           # Páginas do portal
│   └── state/           # Estado global
├── assets/
├── styles/
└── main.tsx
```

## Páginas implementadas

- Landing Page (plano "Novo") — hero, prova social, módulos, FAQ
- Dashboard (planos pagos) — gráfico 8 semanas, KPIs, narrativa AI, ROI
- Composer AI — barra fixa bottom, chips de sugestão
- Clientes — tabs Pessoas/Empresas, drawer detalhes
- Promoções, Reservas, Avaliações, Cardápio
- Configurações — subpáginas PDV e Agregador
- Módulos — grid de módulos disponíveis

## Sidebar

- Plan-aware: módulos aparecem conforme plano ativo
- Bloqueados com borda tracejada → redirecionam para /modulos
- Grupos: "Seus clientes" / "Seu salão" / "Disponíveis"
- Multi-loja no topbar (seletor de unidade)
- Simulador de plano na barra inferior (Novo → Essencial → Profissional → Premium)

## Padrão de header

Todas as páginas usam:
```
Ícone 32px (badge vermelho rounded-[8px]) | Título font-size-20 medium
                                           | Texto de apoio font-size-14 text-[#666]
```
Sem divider abaixo.

## Decisões de design

1. Hierarquia temporal-primeiro no dashboard: tendência → números → contexto AI → agir → retorno
2. Progressive disclosure: módulos bloqueados visíveis para criar desejo
3. AI como contexto, não destino: composer acoplado ao dado sendo visto
4. Cross-channel como conceito: badge vermelho, dado acionável, CTA direto
5. Subpáginas de setup (PDV, Agregador) dentro de Configurações, não na sidebar

## Documentação

- `docs/` — benchmark, transcrições de reuniões, apresentações, roteiro
- `guidelines/` — guidelines do design system (Figma Make)
