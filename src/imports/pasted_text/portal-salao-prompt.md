# Prompt para Figma Make — Portal do Salão (Proposta B + mecânica operacional)

**Como usar:** no Figma Make, selecione/anexe o frame `Visão geral - Novos` (node `3869-63047`) do arquivo `Comer Fora B2B` como referência visual e cole tudo abaixo da linha como prompt.

**Antes de colar, confira:** os valores de plano (R$ 600 / R$ 1.200) são uma interpretação do briefing — ajuste se a Bel já tiver a tabela fechada.

---

## Contexto

Construa um protótipo navegável (não funcional, sem backend) do **Portal do Salão** do iFood — painel B2B para donos de restaurante que operam salão físico. Todo o conteúdo em português do Brasil.

A tese do produto: **o portal inteiro é agêntico**. Não existe chat lateral nem widget de assistente. A caixa de conversa é o motor principal da interface — o usuário pergunta sobre os dados ou pede uma ação, e o resultado vira conteúdo permanente na tela.

Use o frame anexado apenas como referência de **chrome** (header, sidebar, sub-header, densidade). O conteúdo da home é totalmente novo — ignore o checklist de onboarding, o card de promoção e o FAQ que existem lá hoje.

## Design tokens (usar exatamente estes)

**Cores**
- Texto primário `#141414` · secundário `#666666` · desabilitado `#A3A3A3`
- Marca `#EB0033` — usar **apenas** como acento: botão de envio do agente, indicador ativo, links. Nunca como fundo de área grande.
- Fundo primário `#FFFFFF` · secundário `#F5F5F5` · terciário `#E0E0E0`
- Borda padrão `#EBEBEB`, largura 1px
- Sucesso `#1FAD68` (texto sobre: `#FFFFFF`)
- Atenção `#FFC347` (texto sobre: `#141414`)
- Invertido `#141414` (texto sobre: `#FFFFFF`)

**Tipografia** — família `iFood RC Textos`, fallback `Inter`, letter-spacing 0. Somente pesos 400 e 500.
- H1 24 · H3 18/24 medium
- P1 16/24 · P2 14/16 · P3 12/16

**Espaçamento** — escala 4, 8, 12, 16, 20, 24, 40. **Raio** — 8 (controles), 12 (cards), 9999 (pill). **Elevação** — `0 1px 6px rgba(21,21,21,0.08)`, usar só em elementos flutuantes.

## Estrutura base (todas as telas)

Viewport 1440px.

- **Header** 1440×48 — marca iFood à esquerda, seletor de loja ("Cantina Bela Vista · Vila Madalena"), à direita: chip do plano atual, notificações, avatar.
- **Sidebar** 276px de largura, altura total abaixo do header.
- **Main** 1164px, com **sub-header** de 56px no topo e conteúdo com padding 24.

### Sub-header como faixa de assinatura
Ocupa os 56px. À esquerda, o plano e os módulos ativos ("Plano Essencial · Reservas, PDV"). À direita, link `Mudar assinatura`. Quando o usuário estiver no Plano Base (nenhum módulo), a faixa ganha fundo `#FFC347` com texto `#141414` e a mensagem "Ative um módulo para liberar inteligência e CRM".

### Sidebar progressiva — esta é a mecânica central
Dois grupos, com rótulos em P3 `#A3A3A3`:

1. **Ativos** — itens normais e clicáveis. Item selecionado com fundo `#F5F5F5` e barra de 2px `#EB0033` à esquerda.
2. **Disponíveis** — itens dos módulos não contratados, com borda tracejada 1px `#E0E0E0`, texto `#A3A3A3` e ícone `+` à direita. Clicáveis: levam para a landing de módulos.

Módulos e onde caem:
- `Início` e `Analytics` — sempre em Ativos, para qualquer plano.
- `Reservas`, `Pagamentos na mesa` — migram de Disponíveis para Ativos quando contratados.
- `Clientes`, `CRM` — migram para Ativos quando **qualquer** módulo estiver contratado.

**Implemente um estado global `modulosAtivos`** com um seletor discreto de demonstração no canto inferior da sidebar ("Simular plano: Base / Essencial / Avançado"). Trocar o plano deve reordenar a sidebar e destravar as áreas em tempo real. Esse controle é para a apresentação — deixe visualmente sutil, texto P3 `#A3A3A3`.

---

## Tela 1 — Início (canvas generativo)

Sem dashboard fixo. A home é um **canvas de blocos** que o usuário constrói conversando.

**Composer no topo**, largura total do conteúdo, altura 56, borda 1px `#EBEBEB`, raio 12, fundo branco:
- Placeholder: "O que você quer saber ou fazer hoje?"
- À direita: ícone de microfone e botão circular de envio 40×40 com fundo `#EB0033`, seta branca.
- Abaixo, uma linha de chips-sugestão (pill, borda 1px, P3 `#666666`): "Como foi meu fim de semana", "Por que a sexta caiu", "Abrir mais mesas sexta às 20h", "Quem são meus clientes recorrentes".

**Grade de blocos abaixo**, 3 colunas, gap 16, raio 12, fundo `#F5F5F5`, sem borda. Cada bloco tem no canto superior direito um ícone de fixar e um menu de três pontos.

Blocos iniciais (já fixados, dados de PDV — iguais para todos os planos):
1. `Faturamento` — R$ 48.240, variação +12% vs. semana anterior em `#1FAD68`
2. `Ocupação por dia` — gráfico de barras, 7 barras, pico na sexta
3. `Ticket médio` — R$ 40, subtítulo "1.204 pedidos no PDV"
4. `Horário de pico` — 20h–22h, subtítulo "38% do faturamento"

Um último card tracejado com `+ Novo bloco`.

### Comportamento do composer
Ao enviar uma pergunta, **insira um novo bloco no topo da grade** ocupando 2 colunas, com borda 1px `#EB0033` e um rótulo P3 em `#EB0033`: "Gerado agora · «pergunta do usuário»". Dentro, a resposta em P2 e dois chips de ação: `Fixar no canvas` e uma ação contextual.

Nunca renderize histórico de conversa, bolhas de chat ou avatar de assistente. A resposta é sempre um bloco no canvas — é isso que diferencia de um chatbot.

Roteirize estas respostas:
- "Por que a sexta caiu" → "Queda concentrada no jantar. 14 mesas ficaram vagas entre 20h e 22h, contra 3 na sexta anterior." Ação: `Criar campanha`.
- "Como foi meu fim de semana" → bloco com mini-gráfico sáb/dom e comparativo. Ação: `Fixar no canvas`.
- "Abrir mais mesas sexta às 20h" → ver "Ações de operação" abaixo.

### Entrada por voz
Clicar no microfone troca o composer para estado de gravação: fundo `#141414`, texto branco "Ouvindo…", uma waveform simples animada e botão de parar. Ao parar, o texto transcrito aparece no campo e a ação segue o fluxo normal.

### Ações de operação (não só leitura)
Quando o pedido for uma ação e não uma pergunta, o bloco gerado vira um **card de confirmação**: resumo do que será feito ("Abrir 4 mesas adicionais na sexta, 20h–22h"), e dois botões — `Confirmar` (fundo `#141414`, texto branco) e `Cancelar` (texto `#666666`). Após confirmar, o card colapsa para uma linha com check `#1FAD68` e o texto "Feito".

### Nudge dentro do agente
Se o pedido depender de um módulo não contratado, **o agente não recusa**. Ele responde com um bloco de nudge: uma prévia real do dado com as informações borradas (barras cinza `#E0E0E0` no lugar de nomes e valores), o texto "Você já atendeu 3.482 pessoas neste salão. Ative a identificação para saber quem são." e um botão `Ver módulos`. Use "Quem são meus clientes recorrentes" para demonstrar isso no Plano Base.

---

## Tela 2 — Reservas (área de módulo)

Só acessível com o módulo ativo. Prova que todas as áreas são agênticas, não só a home.

- Topo: mesmo composer da home, com placeholder contextual "Peça algo sobre suas reservas" e chips próprios ("Bloquear mesa 12 hoje", "Quantos no-shows esta semana").
- Abaixo: visão operacional real — lista de reservas do dia com hora, nome, número de pessoas, mesa e status (`Confirmada` `#1FAD68`, `Aguardando` `#FFC347`, `No-show` `#666666`). Mínimo 8 linhas com dados verossímeis.
- Uma aba secundária `Configurações` com controles básicos: janela de reserva, tamanho máximo de grupo, política de no-show. Campos desabilitados visualmente não são necessários — só mostre os controles.

O composer aqui gera cards de confirmação inline acima da lista, com o mesmo padrão da home.

---

## Tela 3 — Clientes (estado bloqueado)

Renderiza sempre, nunca uma tela vazia ou um cadeado em tela cheia.

- Título "Clientes" (H3) e subtítulo "Você já atendeu 3.482 pessoas neste salão. Ative a identificação para saber quem são."
- Tabela com 6 linhas de estrutura visível mas conteúdo mascarado: avatar circular `#E0E0E0`, e barras cinza de larguras variadas no lugar de nome, frequência e ticket. As duas primeiras linhas em `#E0E0E0`, as demais em cinza mais claro, criando um degradê de opacidade descendente.
- Rodapé fixo da seção: faixa com fundo `#F5F5F5`, raio 12, título "Ative a identificação de clientes", subtítulo "Incluso no módulo de reservas ou pagamento na mesa" e botão `Ver módulos` com fundo `#141414` e texto branco.

Quando `modulosAtivos` tiver ao menos um módulo, a mesma tela renderiza com dados reais e um composer no topo.

---

## Tela 4 — Módulos e planos (landing)

Acessada pelos itens tracejados da sidebar, pelos botões `Ver módulos` e pelo link `Mudar assinatura`.

- Três cards de plano lado a lado: **Base** (R$ 0 — só analytics de PDV), **Essencial** (R$ 600/mês — 1 módulo + inteligência + CRM) e **Avançado** (R$ 1.200/mês — todos os módulos). Destaque o Essencial com borda 2px `#EB0033` e um badge pill "Mais contratado".
- Abaixo, uma seção `Módulos` com 4 cards explicativos: `Reservas`, `Pagamento na mesa`, `PDV`, `Agregador de pedidos`. Cada um com título, 2 linhas de descrição do que destrava e um toggle de ativação.
- Cada card de módulo deve dizer explicitamente o que ele libera no portal — é a explicação que hoje falta e que causa confusão.

Ativar um toggle atualiza o estado global e a sidebar imediatamente.

---

## Restrições

- Nada de chat lateral, drawer de assistente, bolhas de conversa ou histórico de mensagens. A conversa sempre vira bloco ou card.
- Nada de tela de estado vazio genérica com ilustração e "nenhum dado ainda". Todo vazio mostra a prévia do que existe, borrada.
- Vermelho `#EB0033` só em acento. Sem gradientes, sem sombras decorativas, sem ilustrações 3D.
- Sentence case em todos os rótulos e botões. Sem exclamação em texto de sistema.
- Não use dados reais de clientes — invente nomes brasileiros comuns.
- Priorize densidade de dado sobre respiro decorativo: é um painel operacional, não uma landing page.

## Entregar

Quatro telas navegáveis entre si pela sidebar, com o seletor de plano funcionando e alterando sidebar, sub-header e áreas bloqueadas em tempo real.