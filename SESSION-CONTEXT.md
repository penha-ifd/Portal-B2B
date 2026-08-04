# CRM Portal — Contexto consolidado da sessão anterior

> Use este arquivo como briefing ao iniciar uma nova sessão de trabalho no projeto.
> Gerado em: 2026-08-03

---

## Projeto

**Portal Comer Fora B2B** — Painel de controle para restaurantes gerenciarem a ponte delivery → salão usando dados do iFood.

- **Path:** `/Users/tiago.penha/comer-fora-b2b/`
- **Stack:** React + TypeScript + Vite + Tailwind (CSS variables IFDS)
- **Design System:** IFDS (iFood Design System), fonte "iFood RC Textos", paleta restrita

---

## Estado atual do portal

### Estrutura de páginas implementadas
- **Landing Page** (plano "Novo", sem módulos) — hero vermelho, prova social, 4 passos, grid de módulos, FAQ
- **Dashboard** (planos pagos) — gráfico 8 semanas, KPIs, alerta pacote, narrativa AI, ações recomendadas, ROI, público, módulos ativos, upsell
- **Composer AI** — barra fixa no bottom, placeholder dinâmico, chips de sugestão, tipos: answer/action/nudge
- **Clientes** — tabs "Pessoas" / "Empresas", drawer de detalhes, coluna "Canais" (cross-channel)
- **Promoções** — página com novo padrão de header
- **Reservas** — página com novo padrão de header
- **Avaliações** — página com novo padrão de header
- **Cardápio** — placeholder com novo padrão de header
- **Configurações** — com subpáginas PDV e Agregador de Pedidos (link "← Configurações" acima do header)
- **Módulos** — grid de módulos disponíveis

### Sidebar
- Plan-aware: módulos aparecem/desaparecem conforme plano
- Bloqueados com borda tracejada, redirecionam para /modulos
- Grupos semânticos: "Seus clientes" / "Seu salão" / "Disponíveis"
- Multi-loja no topbar (seletor de unidade)

### Simulador de plano
- Barra inferior permite trocar entre Novo → Essencial → Profissional → Premium ao vivo

---

## Padrão de header (NOVO — aplicado em todas as páginas)

```
Ícone 32px (badge vermelho rounded-[8px]) | Título font-size-20 medium
                                           | Texto de apoio font-size-14 text-[#666]
```

- Sem divider abaixo
- Aplicado em: Cardápio, Promoções, Reservas, Avaliações, Clientes, Configurações, PDV, Agregador, Jornada, Conciliação, Módulos, Perfil, Home

---

## Decisões de design documentadas

1. **Hierarquia temporal-primeiro** no dashboard: tendência → números → contexto AI → agir → retorno
2. **Progressive disclosure**: módulos bloqueados visíveis para criar desejo
3. **AI como contexto, não destino**: composer acoplado ao dado sendo visto
4. **Cross-channel como conceito**: badge vermelho, dado acionável, CTA direto
5. **Subpáginas de setup** (PDV, Agregador) dentro de Configurações, não na sidebar
6. **CSS variables IFDS**: `--text-primario`, `--font-size-20`, etc.

---

## Último trabalho realizado

1. Replicou o novo padrão de header (ícone + título + texto de apoio, sem divider) para todas as páginas
2. Corrigiu erro de JSX em `clientes.tsx` (div structure issues)
3. Moveu link "← Configurações" para acima do header nas páginas PDV e Agregador
4. Gerou roteiro de apresentação (arquivo: `.claude/plans/sparkling-squishing-dusk.md`)

---

## Tarefa pendente (onde parou)

O usuário pediu para **integrar na narrativa do roteiro as decisões tomadas a partir de feedbacks e benchmarks** — a sessão encontrou dados de benchmark (comparação com OlgaTech, Repediu, Falaê) e feedbacks de iterações anteriores, mas a conexão caiu repetidamente antes de entregar o roteiro atualizado.

### Dados já identificados (de benchmark):
- Comparação com concorrentes: OlgaTech, Repediu, Falaê
- Relatório de benchmark existente no histórico da sessão

### O que falta:
- Reescrever o roteiro (`sparkling-squishing-dusk.md`) integrando quais decisões vieram de feedback vs benchmark
- Exemplo: "Decidimos X porque no benchmark vimos que Y" / "Iteramos Z após feedback que apontou W"

---

## Arquivos-chave

| Arquivo | O que é |
|---------|---------|
| `src/app/App.tsx` | Router principal, define rotas |
| `src/app/pages/` | Páginas do portal |
| `src/app/components/` | Componentes compartilhados |
| `.claude/plans/sparkling-squishing-dusk.md` | Roteiro de apresentação |

---

## Como usar este arquivo

Ao iniciar uma nova sessão, cole ou referencie este arquivo:
> "Leia SESSION-CONTEXT.md para entender o projeto e o que ficou pendente"
