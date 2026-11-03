---
name: UNION3D
description: Sistema visual documental para apresentar serviços de levantamento e escaneamento 3D.
colors:
  primary: "#002e40"
  canvas: "#fff"
  parchment: "#f5f5f7"
  pearl: "#fafafc"
  dark: "#002e40"
  muted: "#496672"
  line: "#becbd0"
  line-dark: "#78909a"
  hover: "#174758"
typography:
  display:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(2.2rem,4.3vw,4.4rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(2rem,4vw,3.75rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-.035em"
  title:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(1.7rem,3vw,2.5rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-.035em"
  service-title:
    fontFamily: "Geist, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-.02em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: "Geist, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  body-small:
    fontFamily: "Geist, sans-serif"
    fontSize: ".9375rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Geist, sans-serif"
    fontSize: ".8125rem"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "Geist, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.4
  statistic:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(2.5rem,5vw,4.8rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-.035em"
  navigation:
    fontFamily: "Geist, sans-serif"
    fontSize: ".9375rem"
    fontWeight: 400
    lineHeight: 1.3
  menu-title:
    fontFamily: "Geist, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0"
  data:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(2rem,4vw,3.75rem)"
    fontWeight: 400
    lineHeight: 1.2
  brand-fallback:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(1.7rem,3vw,2.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-.035em"
rounded:
  sm: "4px"
  card: "12px"
  circle: "50%"
spacing:
  "1": ".25rem"
  "2": ".5rem"
  "3": ".75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4rem"
  "9": "6rem"
  section: "clamp(4rem,8vw,8rem)"
  gutter: "clamp(1.25rem,4vw,4rem)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: ".75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.hover}"
  button-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: ".75rem 1.5rem"
  button-light-hover:
    backgroundColor: "{colors.parchment}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "inherit"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: ".75rem 1.5rem"
  button-outline-hover:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.primary}"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: ".75rem 1rem"
  filter-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
  field:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: ".75rem 1rem"
  window:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    rounded: "{rounded.card}"
    padding: "3rem"
  media:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.muted}"
    width: "100%"
  navigation:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    padding: "4rem 0 2rem"
---

# Design System: UNION3D

## Overview

**Creative North Star: "Folha de acompanhamento executivo"**

A interface organiza serviços e etapas como um registro de obra: campos amplos de azul profundo, texto preciso, números alinhados e divisões finas. A presença técnica vem da hierarquia e da sequência das informações, com controles explícitos e mídia em áreas próprias. Botões, campos e cartões têm desenho sóbrio e estados legíveis.

Este documento registra o sistema implementado em src/pages/index.astro, src/styles/tokens.css, src/styles/global.css e componentes relacionados. A fonte única e a paleta são compromissos fixos do briefing; decisões descritivas seguem a direção já delegada em PRODUCT.md. Fotos, logos, mapa e visualizador reais ainda não foram recebidos. As áreas neutras atuais são reservas de conteúdo: não estabelecem tratamento fotográfico, composição de fotos futuras ou uma prova comercial. A gramática de imagens reais permanece em aberto até existirem arquivos.

**Key Characteristics:**

- Geist única, títulos fluidos de peso médio e números tabulares.
- Azul profundo, branco e superfícies neutras com bordas discretas.
- Áreas de mídia proporcionais, com rótulos acessíveis enquanto faltam arquivos.
- Janelas de obra sequenciais, filtros por público e navegação sincronizada.
- Movimento nativo, manual e reduzido conforme a preferência do usuário.

## Colors

A paleta fixa combina azul profundo e neutros frios; as derivações sustentam contraste, linhas e interação.

### Primary

- **Azul profundo**: primary dá cor ao texto, botões e blocos principais; dark conserva o mesmo valor no papel de fundo invertido.
- **Azul de interação**: hover aparece no estado de botão e na reserva de mídia do destaque.

### Neutral

- **Branco de canvas**: canvas sustenta o fundo da página, campos e cartões; torna-se texto em campos escuros.
- **Papel frio**: parchment separa faixas e serve de base às reservas de mídia.
- **Pérola**: pearl diferencia a reserva do visualizador sobre a faixa clara.
- **Texto secundário azul**: muted atende descrições de mídia e identificadores secundários em fundos claros.
- **Linha clara e linha sobre azul**: line separa conteúdo claro; line-dark divide blocos invertidos e a base do rodapé.

### Named Rules

**The Paleta Fixa Rule.** Use os tokens existentes; novas cores de marca não pertencem ao sistema. Derivações precisam atender contraste ou estado funcional e permanecer centralizadas.

## Typography

**Display Font:** Geist, com fallback sans-serif.

**Body Font:** Geist, com fallback sans-serif.

**Character:** Uma única família variável, auto-hospedada, faz títulos, leitura, controles e números. O peso médio e o espaçamento ligeiramente fechado distinguem títulos; corpo e descrições mantêm ritmo aberto.

### Hierarchy

- **Display:** títulos dos destaques; o primeiro é H1 e os demais H2. Em até 960px, usa clamp(2.2rem,4.5vw,3.6rem); em até 600px, clamp(2rem,7.7vw,3rem).
- **Headline:** títulos das seções e janelas amplas; limite global de 26ch, ajustado localmente para 18ch nas janelas e 24ch na seção de problemas.
- **Title:** títulos de equipamento e títulos de janela em até 960px.
- **Service title:** nomes de serviço nas janelas; perguntas e títulos menores usam o mesmo tamanho com entrelinha própria conforme o componente.
- **Body / lead:** texto de leitura limitado globalmente a 72ch; introduções usam lead, e o destaque limita sua mensagem a 45ch.
- **Body small / label:** descrições, campos, controles e rótulos de mídia. Os rótulos são descritivos, em caixa normal, sem tratamento de chamada promocional.
- **Statistic:** números de evidência, com algarismos tabulares; em até 600px usam a escala title. Anos e contadores também empregam números tabulares. Não há contador animado.
- **Navigation / menu title / data / brand fallback:** papéis compactos reais da navegação, dos nomes de serviço no mega menu, dos anos da seção Sobre e da marca textual provisória. As entrelinhas unit, number, data, dense, caption, control e compact e os trackings title, subheading e normal estão centralizados em tokens.css; os papéis do frontmatter registram os valores efetivamente combinados.

### Named Rules

**The Voz Única Rule.** Use Geist em toda a interface; reserve peso 600 para seleção e informações funcionais, e 700 para a assinatura textual provisória da marca.

## Layout

O contêiner central tem largura máxima de 1440px, incluindo o gutter fluido. O espaçamento de seção varia entre 4rem e 8rem. A escala de espaçamento do frontmatter governa margens, padding e gaps. Cabeçalhos de seção usam duas colunas (1.15fr e 1fr), gap de 4rem e passagem para coluna única em até 600px. A ordem do conteúdo continua a de HOME.md.

O destaque usa duas colunas (1.55fr e 1fr), altura mínima de 690px e faixa de controles separada da mídia. Em até 960px a altura torna-se natural e a proporção passa a 1.4fr e 1fr; em até 600px, texto e mídia empilham. Os números formam três colunas no desktop e linhas horizontais empilhadas no mobile. Problemas combinam mídia e texto em lista de duas colunas, passando a uma coluna de artigos em até 960px e empilhando seu conteúdo em até 480px.

Os pontos de mudança são os que os componentes realmente usam:

| Limite máximo | Comportamento |
| --- | --- |
| 1180px | Cabeçalho reduz gaps, texto e padding do CTA. |
| 960px | Navegação mobile, cabeçalho de 76px, serviços do mega menu em duas colunas, janelas empilhadas e rodapé em duas colunas. |
| 900px | Introdução e formulário de contato passam a uma coluna. |
| 800px | Qualidade passa de quatro para duas colunas; seção Sobre compacta seus gaps e texto. |
| 700px | Área atendida e FAQ passam a uma coluna. |
| 600px | Cabeçalhos, destaque, tecnologia, Sobre, números e rodapé empilham; serviços do mega menu mantêm duas colunas. |
| 480px | Formulário e conteúdo interno das janelas passam a uma coluna; filtros ocupam a largura. |

O header é sticky, de 88px no desktop. Em até 960px, o atalho WhatsApp ocupa uma faixa reservada à direita do header, com área de 44px e padding compensatório no contêiner; menu e logo conservam espaço próprio. No desktop, o atalho circular de 52px fica fixo no canto inferior direito. Novas superfícies precisam preservar essa reserva e os alvos mínimos de 44px.

## Elevation & Depth

A profundidade vem principalmente da alternância de fundos, espaços e linhas. Cartões e reservas de mídia ficam planos. A sombra difusa sinaliza os painéis de navegação que abrem sobre o conteúdo; o header usa apenas uma linha inferior. Botões se deslocam discretamente ao hover.

### Shadow Vocabulary

- **Menu:** o token shadow-menu fica restrito ao mega menu e ao painel mobile; seu valor exato está na extensão shadows do sidecar.
- **Header:** uma linha inferior em line, também registrada no sidecar.

### Named Rules

**The Painel em Primeiro Plano Rule.** Reserve a sombra de menu para navegação sobreposta; cartões de conteúdo obtêm separação por fundo, borda ou espaçamento.

## Shapes

Controles retangulares e campos usam cantos discretos (sm). A janela de obra usa o raio maior (card). Mídia preserva recortes retangulares, e os controles exclusivamente icônicos são círculos. Bordas finas desenham linhas de serviço, estatísticas, perguntas e regiões de mídia. As pequenas quinas abertas nas reservas de imagem identificam o espaço disponível; não representam um scanner ou uma medição.

O token radius-pill está declarado na fonte, mas não é consumido pela home; não se torna uma receita normativa. A forma circular de ícones e WhatsApp usa o token circle.

## Components

### Buttons

Controles compactos, com rótulo explícito e setas SVG quando usadas no código. O botão primary combina azul e branco; light inverte os papéis, e outline acompanha a cor do contexto com borda visível. Todos usam raio sm e padding do frontmatter. Hover muda o fundo e desloca o botão 2px para cima (160ms, ease-out). O foco usa contorno de 3px em currentColor, afastado 4px. Controles desabilitados usam opacidade de 0.5.

Links usam o token underline-default (0.22em) como afastamento do sublinhado; a seleção de filtro usa underline-active (0.25em), e os títulos de serviço no hover usam underline-compact (0.2em).

### Filters / Chips

Os filtros de janelas são botões retangulares de corpo pequeno, borda line e padding de 0.75rem por 1rem. A seleção acrescenta fundo primary, texto canvas, peso 600 e sublinhado, além de aria-pressed. Hover reforça a borda. Em até 480px os filtros formam uma coluna de largura total. Não há uma categoria independente de badges decorativos.

### Cards / Containers

A janela é a receita principal de cartão: fundo canvas sobre parchment, raio card, padding de 3rem, duas colunas de conteúdo e linhas separando serviços. Em até 960px usa padding de 2rem; em até 480px, 1.5rem. Cada serviço combina identificador tabular, nome, descrição e seta, com sublinhado no título ao hover. Artigos de problemas e qualidade usam linhas em vez de caixas elevadas.

### Inputs / Fields

Campos claros dentro da seção escura de contato, borda muted, raio sm, padding de 0.75rem por 1rem e altura mínima de 50px. O formulário usa duas colunas, com etapa, mensagem e ações ocupando a largura inteira; em até 480px tudo empilha. Labels permanecem visíveis; placeholders não os substituem. Textarea aceita redimensionamento vertical.

Foco e erro usam contorno branco no contexto escuro. Erros acrescentam mensagem textual, aria-invalid e associação ao campo; no envio inválido o primeiro campo recebe foco. O estado de envio é anunciado em uma região de status. A validação e a máscara de telefone são nativas; o envio prepara uma conversa no WhatsApp, sem persistência. Sem JavaScript, os campos permanecem disponíveis e o link comum de WhatsApp continua sendo a ação de contato.

### Navigation / Mega menu

Header branco sticky, logo à esquerda, navegação e CTA à direita. Links usam corpo pequeno, sublinhado no hover e foco visível. Em até 960px o CTA de orçamento do header fica oculto e Menu abre um painel branco abaixo dele, rolável até 70dvh.

O mega menu é um painel absoluto abaixo do header, com sombra menu, padding vertical de 2rem, altura limitada ao viewport e rolagem própria. Alterna Empresas e Profissionais por abas com borda inferior ativa e peso 600. Serviços têm mídia 16:9, ID, nome e duas ações; o grid passa de quatro para duas colunas. Setas, Home e End navegam as abas; Escape, fechamento explícito, clique externo e saída de foco fecham os painéis com gestão de foco. Sem JavaScript, os links por público levam às janelas e a navegação fica visível.

### Destaques / Motion

Três slides manuais, sem autoplay. Indicadores numerados e botões anterior/próximo ficam na faixa inferior, com estado atual sublinhado e anúncio de slide. A troca usa hidden, sem inventar transição de entrada. Sem JavaScript, os slides permanecem em sequência.

O movimento implementado usa CSS e APIs nativas: hover de botão, rolagem suave das janelas e âncoras, rotação do sinal de FAQ e reposicionamento do skip link ao foco. Não há biblioteca de animação, parallax, revelação no scroll nem números progressivos. Com prefers-reduced-motion, rolagem vira imediata e durações passam a 0.01ms. Os tokens duration-normal e duration-slow estão declarados, mas não geram comportamento nesta superfície.

### Janelas de obra

Entidades reais: sete janelas, dez serviços numerados e dois públicos. O rótulo da janela é conteúdo identificador da etapa, não um eyebrow decorativo. A janela relaciona etapa, o que se escaneia, mídia e serviços correspondentes. A última reúne demandas fora do relógio da obra.

Com JavaScript, a lista vira um trilho horizontal com snap, filtro por público, contador e anterior/próximo desabilitados nos limites. O filtro oculta serviços incompatíveis e janelas sem resultados; mantém o estado no parâmetro publico da URL. Setas, Home e End funcionam com o trilho em foco, e o foco em um serviço traz sua janela para a área visível. Toque usa rolagem nativa; mouse permite arraste após deslocamento de 8px e termina com snap para a janela mais próxima. Sem JavaScript, as sete janelas permanecem empilhadas e legíveis.

### Media / Reservas

Reserva neutra com proporção declarada, rótulo discreto e nome acessível. A receita padrão é 16:9; destaque usa 4:5 e passa a 16:7 no mobile; janelas usam 4:5 e passam a 16:7 em até 480px; problemas variam entre 4:5, 4:3 e 16:7. Sobre usa 4:5 e 4:3 em até 600px. O visualizador reservado é 21:8, tornando-se 4:3 em até 600px; mapa é 4:3. Cada reserva mantém sua função e proporção sem simular dados.

O componente já prevê imagens locais com dimensões, carregamento tardio fora do primeiro destaque e object-fit cover; isso é comportamento técnico, não aprovação do recorte de fotos ainda ausentes. Logos reais, quando entregues, têm object-fit contain; hoje o fallback é a palavra UNION3D. A forma de marca normal está prevista no rodapé e a horizontal no header, mas nenhum arquivo real foi recebido. A gramática de fotografia e os ajustes finais de marca deverão ser documentados a partir desses arquivos.

### FAQ

Details e summary nativos, perguntas separadas por linhas, alvo mínimo de 44px e ícone SVG de mais. Abrir gira o ícone 45 graus (160ms, ease-out), sem animar a altura do conteúdo. O texto da resposta permanece no documento.

### Footer

Campo azul contínuo com marca, dados de contato, lista dos dez serviços na ordem e cidades. Grid de três colunas (1.3fr, 1.5fr e 1fr), duas em até 960px e uma em até 600px. A lista de serviços tem duas colunas internas e passa a uma em até 600px. Copyright fica abaixo de linha line-dark; links mantêm alvos de 44px e foco claro. WhatsApp aparece como texto; redes sem URL, selo e links pendentes não são fabricados.

Cases e Clientes têm componentes preparados, mas as flags estão desligadas: não são evidência visual de conteúdo publicado. O comparador previsto nos cases usa input range e recorte controlado, sem impor um tratamento de imagem enquanto não houver mídia e dados reais.

## Do's and Don'ts

### Do:

- **Do** reutilize a paleta e Geist auto-hospedada dos tokens existentes.
- **Do** mantenha números tabulares em IDs, contadores, anos e estatísticas.
- **Do** preserve rótulos, estados textuais, foco visível e alvos de pelo menos 44px.
- **Do** use mídia proporcional e neutra enquanto faltar o arquivo real.
- **Do** mantenha a reserva do WhatsApp no header mobile e controles dos trilhos acessíveis.
- **Do** respeite movimento reduzido e a leitura sequencial sem JavaScript.

### Don't:

- **Don't** acrescente cores de marca, outra família tipográfica ou referências visuais externas.
- **Don't** transforme placeholders, provas pendentes ou imagens ainda ausentes em decisões fotográficas estabelecidas.
- **Don't** simule scanner, visualizador de nuvem ou resultados comerciais para preencher conteúdo ausente.
- **Don't** aplique sombras de menu aos cartões de conteúdo nem sobreponha controles essenciais à mídia.
- **Don't** substitua os ícones SVG por caracteres de texto ou deixe estados dependerem somente de cor.

Não canonizado nem reparado nesta documentação: o raio pill e as durações normal/slow existem apenas como declarações não consumidas; a marca textual e as reservas de mídia continuam provisórias. Nenhuma dessas pendências autoriza inferir um novo padrão visual. A colisão anterior do WhatsApp mobile foi corrigida pela faixa reservada do header e não é uma receita a herdar.
