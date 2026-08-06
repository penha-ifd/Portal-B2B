# Plano: alinhar Avaliações à referência HTML

## Objetivo
Adaptar as rotas `/avaliacoes/visao-geral` e `/avaliacoes/avaliacoes` à hierarquia e ao layout do arquivo HTML de referência em `/Users/tiago.penha/Downloads/Avaliacoes - Portal do Salao.html`, sem alterar a shell global além do necessário.

## Diagnóstico
- O HTML de referência representa um portal completo, mas seu conteúdo renderizável está empacotado em `__bundler/template`; a estrutura visível foi extraída para comparação.
- A referência usa uma hierarquia compartilhada: header contextual com período/exportar, conteúdo em container central de aproximadamente 1240px, cards com espaçamento uniforme, e duas áreas de Avaliações: Visão Geral e lista.
- A referência traz conteúdo adicional que não está refletido integralmente nas telas atuais: reputação consolidada, nota por canal, NSS, KPIs de resposta, desempenho do Google, distribuição temporal, ranking por unidade, nuvem de palavras, temas, insight e feed.
- A implementação atual já possui `src/app/pages/avaliacoes/index.tsx`, `visao-geral.tsx`, `avaliacoes-feed.tsx` e `shared.ts`, mas parte da hierarquia está duplicada entre layout e páginas e os dados/ordem ainda divergem da referência.

## Implementação proposta
1. Refatorar `avaliacoes/index.tsx` para ser o layout compartilhado da área:
   - header único com ícone, título contextual, subtítulo, seletor de período e exportação;
   - tabs/navegação interna Visão Geral e Avaliações;
   - container responsivo alinhado ao padrão do portal.
2. Ajustar `visao-geral.tsx`:
   - seguir a ordem da referência: reputação consolidada → nota por canal/distribuição → indicador de sentimento → KPIs → desempenho Google → distribuição temporal → ranking por unidade;
   - reaproveitar os dados de `shared.ts` e preservar animações e acessibilidade;
   - manter os cards sem os ícones removidos anteriormente.
3. Ajustar `avaliacoes-feed.tsx`:
   - seguir a ordem da referência: nuvem de palavras → temas → insight → toolbar de resposta/filtros → feed;
   - manter busca, filtros e resposta inline;
   - alinhar labels, badges, canais, unidade, atenção e estados vazios à referência.
4. Consolidar estilos locais em classes/tokens do projeto, evitando copiar o HTML empacotado ou introduzir a fonte Figtree; usar a fonte IFDS/iFood RC Textos e os tokens existentes.
5. Remover duplicações e manter as rotas atuais funcionando:
   - `/avaliacoes/visao-geral`
   - `/avaliacoes/avaliacoes`
   - `/avaliacoes` redirecionando para Visão Geral.
6. Validar em desktop e mobile, incluindo scroll, troca de abas, filtros e resposta inline; executar `pnpm build`.

## Arquivos prováveis
- `src/app/pages/avaliacoes/index.tsx`
- `src/app/pages/avaliacoes/visao-geral.tsx`
- `src/app/pages/avaliacoes/avaliacoes-feed.tsx`
- `src/app/pages/avaliacoes/shared.ts`
- possivelmente `src/app/components/sidebar-nav.tsx` apenas se a navegação interna precisar de ajuste.

## Fora do escopo
- Não modificar o HTML de referência.
- Não adicionar o HTML empacotado, fontes Figtree ou scripts do bundler ao projeto.
- Não alterar a navegação global, o AppShell ou outros módulos sem necessidade comprovada.
