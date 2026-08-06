# Plano: mover “Ver todos os módulos” para Configurações

## Objetivo
Remover o item “Ver todos os módulos” da sidebar e adicionar em Configurações um banner de destaque que leve o usuário à página de módulos e planos.

## Implementação
1. Remover o `<ActiveItem>` de `/modulos` do final da sidebar.
2. Manter a rota `/modulos` funcionando e acessível pelo novo banner.
3. Adicionar no topo do conteúdo de Configurações um banner destacado, antes de Integrações, com:
   - ícone de descoberta/loja;
   - título “Veja todos os módulos e planos”;
   - descrição orientada a benefício;
   - plano atual como contexto;
   - CTA “Ver módulos e planos”;
   - navegação para `/modulos` com click e teclado acessíveis.
4. Usar tokens do projeto, foco visível, hover discreto, responsive layout e mais respiro entre seções.
5. Não alterar regras dos planos nem o conteúdo da página `/modulos`.
6. Validar visualmente em desktop/notebook/mobile e executar `pnpm build`.

## Arquivos
- `src/app/components/sidebar-nav.tsx`
- `src/app/pages/configuracoes.tsx`

## Critérios
- Sidebar fica mais enxuta.
- Banner é claramente descobrível em Configurações.
- CTA leva à página existente de módulos/planos.
- Acessibilidade e comportamento de navegação preservados.
