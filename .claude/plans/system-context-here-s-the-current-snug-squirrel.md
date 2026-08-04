# Plano: Tela principal do CRM (Início) + navegação com placeholders

## Contexto

O usuário está montando um sistema de CRM (iFood / "Comer Fora") para apresentar a líderes. Ele importou do Figma a tela **Início** (`src/imports/Web1350X690/index.tsx`) e quer que ela seja a tela principal inicial do sistema, com navegação já pronta para incluir outras abas depois. Na pergunta de escopo, ele escolheu: **Início + navegação com telas placeholder**.

Estado atual do projeto:
- `src/app/App.tsx` está vazio.
- O design system `@ifood/*` está instalado, mas o **setup ainda não foi feito**: `src/styles/index.css` só importa `fonts.css` e `tailwind.css`; não há `DesignSystemProvider`; fontes e ícones não estão carregados; o `@theme inline` do make-kit não está no `tailwind.css`.
- O pacote `@ifood/ifds-make-kit-web-components` exporta um bundle pronto em `./style.css` (contém tokens do tema + classes de tipografia `.paragraph-*`, `.heading-*`, `.title-*`, mas **não** inclui `@font-face` nem classes de ícone).
- Fontes: `@ifood/ifdl-fonts` (css/index.css). Ícones: `@ifood/ifdl-icons` (css/index.css, classes `.ifdl-icon-line`/`.ifdl-icon-filled` + `.ifdl-icon-{nome}`). `react-router@7.13.0` disponível.

Resultado esperado: app rodando com a tela Início fiel ao screenshot, construída com componentes/tokens do design system, dentro de um shell (sidebar + topbar) navegável, com páginas placeholder para as demais abas.

## Abordagem

Reconstruir a tela usando o design system (obrigatório neste projeto) em vez de renderizar o código bruto importado — o código importado tem fontes/SVGs hardcoded e não é extensível. Reaproveitar apenas os **assets rasterizados** (megafone) e os **SVGs** do import quando fizer sentido. Montar um shell de navegação com `react-router` para permitir adicionar abas facilmente.

### 1. Completar o setup do design system

**`src/styles/index.css`** — adicionar no topo o bundle do make-kit e os CSS de fontes/ícones do design system:
```css
@import '@ifood/ifds-make-kit-web-components/style.css';
@import '@ifood/ifdl-fonts';
@import '@ifood/ifdl-icons';
@import './fonts.css';
@import './tailwind.css';
```
(O bundle já traz os tokens de tema e classes de tipografia. Fontes e ícones vêm dos pacotes `ifdl-fonts`/`ifdl-icons`.)

**`src/styles/tailwind.css`** — acrescentar o bloco `@theme inline` de mapeamento de cores/sidebar exatamente como consta em `node_modules/@ifood/ifds-make-kit-web-components/guidelines/setup.md` (passo 3), para habilitar `bg-sidebar`, `bg-primary`, `border-border`, etc.

Não criar `tailwind.config.js` nem `postcss.config.js` (Tailwind v4). Não modificar nomes de variáveis CSS.

### 2. Shell da aplicação com navegação

**`src/app/App.tsx`** (default export): envolver tudo em `DesignSystemProvider` (`locale="pt-br" theme="light"`) e configurar `react-router` (`createBrowserRouter`/`RouterProvider` ou `BrowserRouter` + `Routes`). Layout raiz = `<AppShell>` com `<Outlet/>`.

Rotas:
- `/` → `HomePage` (Início — a tela importada reconstruída)
- `/promocoes` → `PlaceholderPage title="Promoções"`
- `/clientes` → `PlaceholderPage title="Clientes"`
- `/configuracoes` → `PlaceholderPage title="Configurações"`
- `/perfil` → `PlaceholderPage title="Perfil"`

### 3. Componentes (em `src/app/components/`)

- **`app-shell.tsx`** — layout com fundo cinza claro, `TopBar` no topo e `Sidebar` à esquerda + área de conteúdo (`<Outlet/>`) em card branco arredondado com sombra. Usa componentes `Sidebar`/`TopBar`/`Box`/`Flex` de `@ifood/ifds-web` se a API servir; caso contrário, layout com Tailwind + tokens (`bg-sidebar`, `rounded-*`, tokens de spacing) e ícones `.ifdl-icon-*`.
- **`sidebar-nav.tsx`** — itens: Início, Promoções, Clientes (grupo superior) e Configurações, Perfil (rodapé), usando `NavLink` do react-router para estado ativo (texto em negrito + ícone preenchido no ativo). Ícones verificados via grep em `ifdl-icons/css/index.css` antes de usar (ex.: `home`/`house`, `promotion`/`tag`, `2-people`/`profile`, `settings`/`config`, `profile`).
- **`top-bar.tsx`** — logo iFood (reaproveitar SVG do import `../imports/Web1350X690/svg-0c0o9n4wno`), pill "Mc Donald's - Faria Lima", à direita "Comer Fora" com dot verde e botões de ícone.
- **`home/profile-status-card.tsx`** — bloco cinza com título "Seu perfil está **inativo** no app" (destaque em vermelho `--ifdl-color-ifood-48`), subtítulo, botão "Ver perfil", "0 de 3 etapas completas" e 3 `TaskRow` (badge verde check / badge amarelo `!`, título, descrição à direita, `% completo`, chevron). Usar componente `Card`/`Alert` do design system quando encaixar.
- **`home/promo-banner.tsx`** — banner cinza com imagem do megafone (import `figma:asset` OU o png do import via ES module) usando `ImageWithFallback`, título "Atraia, fidelize e recupere seus clientes", subtítulo e botão preto "Criar promoção".
- **`home/faq-section.tsx`** — título "Tire suas dúvidas" + lista de 7 itens colapsáveis (usar `Collapse` de `@ifood/ifds-web` ou `<details>` estilizado) + rodapé de termos/feedback.
- **`home/home-page.tsx`** — compõe os 3 blocos acima com o sub-header "Início".
- **`placeholder-page.tsx`** — usa `EmptyState` do design system com título da aba e mensagem "Em breve", para as abas futuras.
- **`figma/ImageWithFallback.tsx`** — usar o existente se já houver; caso não exista, criar conforme guideline (não recriar se já presente).

### 4. Tipografia e tokens (regras do design system)

- Usar SOMENTE classes de tipografia do design system (`.heading-h*`, `.paragraph-p*`, `.title-t*`, `.caption-c*`) — não usar utilitários Tailwind de `text-*`/`font-*`/`leading-*`.
- Cores/espaçamentos via tokens (`bg-sidebar`, `bg-primary`, `--ifdl-color-ifood-48`, `--spacing/scale*`, `--border/radius/*`), sem hex hardcoded.
- Verificar cada nome de ícone com `grep "ifdl-icon-<nome>:" node_modules/@ifood/ifdl-icons/css/index.css` antes de usar; se não existir, escolher outro e re-verificar.

## Arquivos principais
- Editar: `src/styles/index.css`, `src/styles/tailwind.css`, `src/app/App.tsx`
- Criar: `src/app/components/app-shell.tsx`, `sidebar-nav.tsx`, `top-bar.tsx`, `placeholder-page.tsx`, `home/home-page.tsx`, `home/profile-status-card.tsx`, `home/promo-banner.tsx`, `home/faq-section.tsx`
- Reaproveitar: assets em `src/imports/Web1350X690/` (megafone `.png`, SVGs `svg-0c0o9n4wno.ts`)

## Verificação
1. App carrega sem erros no preview (dev server já roda; não executar build/`vite`).
2. Fontes iFood RC aplicadas (texto não usa fallback), ícones `.ifdl-icon-*` renderizam.
3. Tela Início visualmente fiel ao screenshot: status do perfil com 3 etapas, banner do megafone, FAQ com 7 itens colapsáveis funcionando.
4. Clicar nos itens da sidebar navega e mostra a página placeholder correspondente; item ativo destacado.
5. Layout responsivo/estável em largura desktop (~1350px) — foco de apresentação.
6. Usar o skill `make:run` ou tirar screenshot para confirmar a renderização.
