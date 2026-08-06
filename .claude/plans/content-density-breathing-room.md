# Plano: reduzir densidade e dar mais respiro ao Portal

## Objetivo
Melhorar a legibilidade e a escaneabilidade do portal sem remover informação importante nem alterar os fluxos de negócio. A intervenção deve criar hierarquia, ritmo vertical e agrupamento visual antes de considerar esconder ou colapsar conteúdo.

## Diagnóstico heurístico

### 1. Hierarquia visual e carga cognitiva
Várias telas apresentam muitos cards, métricas, badges, explicações e CTAs no mesmo nível visual. Isso dificulta identificar o que é principal, contexto e ação.

### 2. Estética e minimalismo
O produto frequentemente usa sequências longas de cards com pouco espaço entre seções. Mesmo quando cada card é individualmente legível, o conjunto parece compacto e contínuo.

### 3. Escaneabilidade
Dashboard, Avaliações e Clientes exigem leitura em múltiplas direções: títulos, números, causas, tags, filtros e botões. Falta uma separação mais evidente entre blocos de decisão.

### 4. Consistência
Há espaçamentos diferentes entre páginas, além de estilos inline e grids com densidades distintas. Isso aumenta a sensação de que algumas páginas estão apertadas ou improvisadas.

### 5. Responsividade
Em notebooks, a largura disponível é suficiente para exibir muita coisa lado a lado, mas não necessariamente suficiente para manter bons comprimentos de linha e áreas de toque confortáveis. No mobile, algumas grades precisam mudar para uma leitura vertical mais progressiva.

### 6. Scroll e orientação
Como o portal usa um scroll interno no AppShell, uma página muito longa pode parecer uma parede de conteúdo. O usuário precisa de marcos visuais, seções bem nomeadas e áreas de descanso para entender onde está.

## Princípios de solução

1. **Mais respiro antes de remover conteúdo**: aumentar espaçamento, separar grupos e reforçar títulos.
2. **Uma decisão principal por bloco**: cada seção deve ter um objetivo e um CTA dominante.
3. **Hierarquia por níveis**: resumo → contexto → detalhe → ação.
4. **Densidade adaptativa**: desktop amplo pode usar grids; notebook deve priorizar legibilidade; mobile deve empilhar.
5. **Menos ruído visual**: reduzir bordas, badges e textos auxiliares quando repetitivos.
6. **Preservar descoberta**: conteúdo bloqueado e recursos disponíveis continuam visíveis, mas com agrupamento mais claro.
7. **Consistência via primitives**: consolidar espaçamentos recorrentes em classes/tokens, evitando ajustes isolados por página.

## Escala de espaçamento proposta

Criar uma escala semântica para páginas:

- `page`: 32px desktop / 20px mobile
- `section`: 32px desktop / 24px mobile
- `card-group`: 24px
- `card`: 20–24px interno
- `related`: 12–16px
- `text`: 4–8px entre label, valor e descrição

A escala não deve ser aplicada de forma cega: cards compactos de tabela e controles pequenos podem manter densidade menor.

## Priorização por tela

### Fase 1 — Avaliações e Visão Geral
É a tela mais extensa e com maior acúmulo de conteúdo após a referência HTML.

- Manter o header compartilhado, mas criar mais separação entre header, resumo e análises.
- Transformar cada grupo em uma seção clara:
  - reputação consolidada
  - canais/distribuição
  - sentimento
  - resumo de respostas
  - Google
  - temporalidade
  - unidades
- Aumentar gaps verticais para 24–32px.
- Usar `padding` de 20–24px nos cards principais.
- Evitar cinco KPIs comprimidos em notebooks; usar 3 + 2 ou 2 + 2 + 1 conforme largura.
- No feed de avaliações, separar toolbar, filtros e lista com espaçamento próprio.
- Em mobile, empilhar controles e tornar as ações de resposta claramente separadas do texto.

### Fase 2 — Dashboard/Home
O dashboard tem muitos blocos simultâneos e composer fixo.

- Preservar a hierarquia temporal: tendência → números → contexto → ação.
- Aumentar a distância entre “O Salão”, gráfico, impacto, narrativa e ações.
- Dar mais altura e padding aos cards de ação para evitar textos e CTAs colados.
- Manter a linha de cards em 3 colunas em desktop, mas com largura e altura confortáveis.
- Separar visualmente cards de dados, cards de recomendação e cards de módulos.
- Garantir que o composer fixo não cubra conteúdo e que tenha margem inferior compatível com o scroll.
- Em notebook, evitar cinco métricas horizontais muito estreitas.

### Fase 3 — Clientes
A tabela e os filtros concentram muita informação.

- Aumentar a distância entre header, tabs, métricas, banner de comunicação, filtros e tabela.
- Agrupar filtros por contexto em uma área de filtros com título/label, em vez de três linhas visualmente equivalentes.
- Dar mais altura às linhas da tabela e mais espaço entre nome, tags e dados secundários.
- Preservar `overflow-x-auto`, mas melhorar indicação de que a tabela pode rolar horizontalmente.
- Aumentar o respiro do drawer de perfil, especialmente entre blocos de comportamento, preferências e permissões.

### Fase 4 — Promoções, Reservas e demais telas operacionais
- Padronizar headers e distância entre tabs, banners, filtros e tabelas.
- Separar resumo, filtros e dados operacionais em blocos com `section gap`.
- Manter tabelas compactas apenas onde a comparação rápida for o objetivo principal.
- Dar mais espaço a empty states e cards de ativação.

## Regras responsivas

- Acima de 1200px: grids de 3–5 colunas apenas quando cada item mantiver largura mínima confortável.
- Entre 900px e 1200px: preferir 2–3 colunas e quebrar grupos de KPIs.
- Abaixo de 760px: uma coluna para seções analíticas; controles ocupam largura disponível; ações podem quebrar linha.
- Garantir largura mínima e `min-width: 0` em todos os filhos de grid/flex.
- Não resolver densidade apenas reduzindo fonte; preservar tamanho de texto e aumentar espaço.

## Implementação técnica

1. Criar classes compartilhadas de layout/densidade, por exemplo:
   - `.page-section`
   - `.page-section-header`
   - `.content-stack`
   - `.card-grid-comfortable`
   - `.card-content-comfortable`
2. Adicionar tokens semânticos de espaçamento para seção e card.
3. Migrar primeiro Avaliações, Dashboard e Clientes para essas classes.
4. Remover apenas estilos inline redundantes durante a migração; não fazer uma grande reescrita funcional.
5. Preservar estados, rotas, filtros, animações e regras de plano.
6. Manter o scroll interno do AppShell e testar a área útil em notebooks.

## Validação

### Visual
Testar em:

- 1366×768 — notebook/desktop prioritário
- 1280×720 — notebook compacto
- 1024×768 — largura intermediária
- 390×844 — mobile

### Funcional

- Troca entre `/avaliacoes/visao-geral` e `/avaliacoes/avaliacoes`
- Filtros, busca e resposta inline
- Scroll vertical e horizontal da tabela de Clientes
- Drawer de Cliente
- Composer fixo da Home
- Troca de plano Novo/Essencial/Profissional/Premium
- Sidebar condicional do plano Novo

### Critérios de aceite

- O usuário identifica o título e o objetivo de cada seção em menos tempo.
- Nenhuma seção crítica parece uma parede contínua de cards.
- Cards não ficam comprimidos em notebook.
- Controles permanecem acessíveis e com áreas de toque confortáveis.
- O scroll não muda de container nem volta a apresentar regressões.
- `pnpm build` passa sem erros.

## Fora do escopo nesta fase

- Não remover dados ou funcionalidades.
- Não trocar a arquitetura de rotas.
- Não alterar regras comerciais dos planos.
- Não adicionar onboarding ou novos fluxos.
- Não aplicar mudanças até aprovação explícita deste plano.
