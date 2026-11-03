# Prompt: home da UNION3D em Astro com a skill Impeccable

## 0. Como ler este prompt

Este prompt divide o trabalho em duas zonas.

ZONA LIVRE: tudo que é aparência e experiência visual. Layout, grid, composição, hierarquia visual, escala tipográfica, espaçamento, ritmo, animações, motion, transições, efeitos de rolagem, microinterações, estados de hover e foco, tratamento de imagens, uso de vídeo, ritmo entre seções claras e escuras. Nesta zona a autoridade é exclusivamente da skill Impeccable. Não peça minha aprovação para decisões visuais. Decida, aplique e registre a decisão.

ZONA FIXA: conteúdo, estrutura de informação, funcionalidades, regras de negócio, stack, paleta, fonte, acessibilidade mínima e entregáveis. Nesta zona você segue este prompt à risca e não improvisa.

Se em algum momento uma decisão não couber claramente em nenhuma das duas zonas, trate como ZONA FIXA: não decida sozinho, registre a dúvida em NOTAS-DE-IMPLEMENTACAO.md e siga com o restante.

## 1. Fontes de instrução e hierarquia

Existem exatamente três fontes para este projeto:

1. A skill Impeccable, já instalada neste repositório.
2. Este prompt.
3. O arquivo de conteúdo docs/copy/HOME.md.

Não use nenhuma outra referência de design, template, tema pronto, kit de UI, biblioteca de componentes visuais ou framework CSS. Não copie o visual de nenhum site existente.

Hierarquia em caso de conflito:
1. Regras de conteúdo e negócio deste prompt (seções 5, 6 e 9) vencem tudo.
2. Na ZONA LIVRE, a Impeccable vence qualquer preferência sua.
3. Se a Impeccable pedir algo que conflite com a ZONA FIXA, a ZONA FIXA vence, e você registra o conflito em NOTAS-DE-IMPLEMENTACAO.md.

## 2. Primeira tarefa obrigatória, antes de qualquer código

1. Localize no repositório todos os arquivos da skill Impeccable e leia cada um deles por inteiro, incluindo arquivos de referência, comandos, checklists e exemplos que ela tenha.
2. Se a Impeccable tiver uma etapa de configuração de contexto do projeto (perguntas sobre tema, público, objetivo, referências), responda usando a seção 3 deste prompt. Não me pergunte de novo o que já está respondido aqui.
3. Leia docs/copy/HOME.md por inteiro.
4. Crie NOTAS-DE-IMPLEMENTACAO.md e escreva nele, antes de codar:
   a. Um resumo, em suas palavras, do que a Impeccable exige.
   b. A lista de processos, comandos ou checklists da Impeccable que você vai rodar e em que momento.
   c. A direção visual que você escolheu para a UNION3D, com justificativa baseada na Impeccable e no contexto da seção 3.
   d. Dúvidas encontradas.
5. Faça o primeiro commit só com essas notas.

## 3. Contexto do projeto

Empresa: UNION3D, de Balneário Camboriú, Santa Catarina. Está dentro de obra desde 2005, entrou no as-built em 2016 e trabalha com laser scanner de ponta desde 2019. Sede na Rua 801, Centro, Balneário Camboriú.

O que faz: escaneamento a laser 3D, topografia e as-built de obras, com laser scanner FARO Focus Premium e drone DJI Matrice 4E com RTK. A lógica central do negócio é medir cada etapa da obra antes de ela ser coberta, para que ninguém precise quebrar depois para descobrir o que tem embaixo.

Organização dos serviços: 10 serviços distribuídos em 6 janelas do cronograma da obra (antes do projeto, antes da primeira estaca, antes do bloco, antes de concretar a laje, antes do fechamento, antes da mobília) e uma janela fora do relógio da obra (retrofit e vendas).

Públicos:
1. Empresas: construtoras, incorporadoras e escritórios de engenharia. Querem proteger margem e cronograma, evitar retrabalho, obra parada e discussão sobre quem errou.
2. Profissionais: arquitetos, designers de interiores e marcenarias. Querem medir uma vez e projetar sem voltar ao imóvel.

Região: Vale do Itajaí e litoral de Santa Catarina. Atendimento em São Paulo sob consulta, só para grandes projetos.

Objetivo principal da página: fazer o visitante pedir orçamento, pelo formulário ou pelo WhatsApp.

Tom que o site precisa transmitir: precisão técnica, controle, confiabilidade, equipamento de ponta, empresa local que está dentro da obra. Nada de exagero publicitário.

Natureza deste site: é um site teste, construído do zero. Não existe código anterior a reaproveitar.

Referências visuais: nenhuma. A direção visual é sua, guiada pela Impeccable.

## 4. Escopo

Nesta etapa você constrói somente a home (/).

As 10 páginas de serviço serão construídas em etapa posterior. Mesmo assim, a arquitetura já deve estar pronta para elas:
1. Os dados dos 10 serviços ficam num único arquivo de dados (seção 7).
2. O layout base, header, rodapé, botão flutuante e tokens devem ser reutilizáveis por qualquer página futura sem alteração.

Não crie nenhuma outra página além da home e da página 404.

## 5. Regras de conteúdo (ZONA FIXA, prioridade máxima)

1. Use os textos de docs/copy/HOME.md exatamente como estão. Não reescreva, não resuma, não complete, não "melhore", não corrija estilo, não traduza, não acrescente frases de efeito, títulos, subtítulos, rótulos, legendas ou microcopy que não estejam no arquivo.
2. As únicas exceções permitidas são textos puramente funcionais de interface que não carregam mensagem de marca e que o arquivo não cobre, como rótulos de acessibilidade (aria-label), mensagens de validação de formulário e texto da página 404. Liste cada um desses textos criados em NOTAS-DE-IMPLEMENTACAO.md, na seção "Textos funcionais criados", para eu revisar.
3. As marcações estruturais do arquivo (H1, H2, H3, "Texto:", "Botões:", "Nota para implantação:", "O que escaneamos:" como rótulo, etc.) indicam estrutura. A palavra "Texto:" e as notas para implantação não aparecem no site. Rótulos como "O que escaneamos", "O desafio", "A solução UNION3D" e "Resultado" aparecem, porque fazem parte do conteúdo.
4. Qualquer trecho que contenha [a confirmar] não pode aparecer no site. A seção 9 diz o que fazer com cada caso.
5. Nunca use travessão (—), meia risca (–) ou hífen com espaços para separar frases ou orações, em nenhum texto, incluindo os textos funcionais que você criar. Hífens dentro de palavras (as-built, ar-condicionado) e o ponto médio (·) usado nos rótulos do arquivo são permitidos.
6. Nenhuma menção a preço, valor, tabela de preços, R$ ou desconto.
7. Nunca mencione custo de deslocamento.
8. Nunca publique a expressão "o mais pedido" ou qualquer variação ("mais procurado", "favorito dos clientes").
9. Os nomes FARO Focus Premium e DJI Matrice 4E aparecem exatamente como estão no arquivo.
10. Números de precisão e capacidade aparecem somente como estão no arquivo. Não acrescente nenhum outro número técnico.
11. Idioma: português do Brasil, com acentuação correta. lang="pt-BR".
12. O nome da empresa é sempre UNION3D, em maiúsculas, sem espaço.

## 6. Identidade fixa (ZONA FIXA)

### Paleta
1. Primária: #002e40
2. Canvas: #ffffff
3. Canvas parchment: #f5f5f7
4. Surface pearl: #fafafc
5. Surface section dark: #002e40

Não introduza nenhuma outra cor de marca. Variações derivadas destas cores (opacidades, tons mais claros ou mais escuros de #002e40, cor de texto sobre fundo escuro, bordas, estados de foco) são permitidas somente se forem necessárias para contraste, acessibilidade ou estados de interação. Cada cor derivada vai para os tokens e para NOTAS-DE-IMPLEMENTACAO.md com a justificativa.

Todas as combinações de texto e fundo precisam passar no contraste WCAG 2.2 nível AA.

### Tipografia
Fonte única: Geist. Pode usar Geist Mono se a Impeccable justificar, para números, rótulos técnicos ou dados.
A fonte deve ser servida pelo próprio site, sem chamada a Google Fonts ou outro CDN em tempo de execução. Escolha um pacote ou arquivo oficial da Geist e verifique na documentação atual do pacote o nome exato e a forma de importação antes de instalar. Não invente nome de pacote.

### Tokens
Cores, tipografia, espaçamentos, raios, sombras, durações e curvas de animação ficam centralizados em tokens, num único lugar, consumidos por todos os componentes. Nenhum valor de cor ou fonte escrito direto em componente.

## 7. Dados centralizados (ZONA FIXA)

Crie estes arquivos de dados, e todo componente consome deles:

### 7.1 Dados da empresa
1. Nome: UNION3D
2. CNPJ: 02.897.854/0001-48
3. Endereço: Rua 801, nº 95, Centro, Balneário Camboriú, SC, CEP 88330-717
4. Telefone e WhatsApp: (47) 99649-0312
5. Número para link de WhatsApp: 5547996490312
6. Link base de WhatsApp: https://wa.me/5547996490312
7. E-mail: contato@union3d.com.br
8. Redes: Instagram, YouTube e WhatsApp. URLs de Instagram e YouTube: [a confirmar]. Enquanto não houver URL, o ícone não aparece. LinkedIn não aparece.

### 7.2 Serviços

Os 10 serviços, com o nome usado na home, a janela, o público e a URL final da futura página:

| Nº | Nome na home | Janela | Público | URL futura |
|---|---|---|---|---|
| 01 | Conferência de topografia | 01 Antes do projeto | Empresas | /servicos/conferencia-de-topografia/ |
| 02 | Mapeamento aéreo com drone | 01 Antes do projeto | Empresas | /servicos/mapeamento-com-drone/ |
| 03 | Locação de estacas | 02 Antes da primeira estaca | Empresas | /servicos/conferencia-de-locacao-das-estacas/ |
| 04 | Locação de linhas de eixo | 02 Antes da primeira estaca | Empresas | /servicos/locacao-de-linhas-de-eixo-das-estacas/ |
| 05 | Excentricidade de estacas | 03 Antes do bloco | Empresas | /servicos/conferencia-de-excentricidade-das-estacas/ |
| 06 | As-built de laje protendida | 04 Antes de concretar a laje | Empresas | /servicos/as-built-de-laje-protendida/ |
| 07 | As-built de infraestrutura | 05 Antes do fechamento | Empresas | /servicos/as-built-de-infraestrutura/ |
| 08 | Levantamento arquitetônico de interiores | 06 Antes da mobília | Profissionais | /servicos/levantamento-arquitetonico/ |
| 09 | Escaneamento de fachada | Fora do relógio da obra | Empresas | /servicos/escaneamento-de-fachada-para-retrofit/ |
| 10 | Tour virtual de decorado | Fora do relógio da obra | Profissionais | /servicos/tour-virtual-do-apartamento-decorado/ |

Cada serviço também guarda: a descrição curta da seção Janelas de obra do HOME.md, o caminho da imagem do card e o texto alternativo.

### 7.3 Janelas da obra

Cada janela guarda: número ou rótulo ("01 · Fase inicial e terreno" etc.), título (H3), texto de "O que escaneamos", lista de serviços, público dos serviços e imagem. Os textos vêm do HOME.md.

### 7.4 Cidades atendidas
As cidades da seção Área atendida do HOME.md, com os complementos entre parênteses exatamente como estão.

## 8. Estrutura da home, seção por seção

A ordem das seções é a do HOME.md. A forma visual de cada seção é ZONA LIVRE. O conteúdo, os comportamentos funcionais e os destinos de links abaixo são ZONA FIXA.

Cada seção recebe um id estável para âncora: destaques, numeros, problemas, janelas, tecnologia, sobre, cases, clientes, nuvem, area-atendida, perguntas, contato.

### 8.1 Header
1. Logo UNION3D à esquerda, linkando para o topo da home. Usar a versão horizontal do logo (arquivo será enviado, ver seção 11).
2. Link "Pular para o conteúdo" como primeiro elemento focável, visível ao receber foco.
3. Itens de menu, na ordem do HOME.md: Para empresas, Para profissionais, Tecnologia e precisão, Cases, Sobre, Contato.
4. "Para empresas" e "Para profissionais" abrem o mega menu de serviços, já na aba correspondente.
5. "Tecnologia e precisão", "Sobre" e "Contato" levam às âncoras #tecnologia, #sobre e #contato.
6. "Cases" só aparece no menu se a seção Cases estiver visível (ver seção 9).
7. Botão "Solicitar orçamento" leva à âncora #contato.
8. Mobile: botão "Menu" abre a navegação mobile, com botão "Fechar menu". Os serviços ficam acessíveis no mobile com as mesmas abas.
9. O header permanece acessível durante a rolagem. Comportamento visual (fixo, transparente, compacto, escondendo ao rolar) é ZONA LIVRE.

### 8.2 Mega menu de serviços
1. Abas: Para empresas e Para profissionais.
2. Para empresas: serviços 01, 02, 03, 04, 05, 06, 07 e 09. Para profissionais: serviços 08 e 10. Ordem crescente pelo número.
3. Cada card: imagem, número, nome, botão "Saiba mais" (URL futura do serviço) e botão "Agendar" (abre o WhatsApp).
4. Abre por clique e por teclado. Pode abrir por hover no desktop se a Impeccable recomendar, mas precisa funcionar sem hover.
5. Fecha com Esc, com clique fora e ao navegar. O foco volta para o item que abriu.
6. Abas implementadas com o padrão de abas acessível (role tablist, tab, tabpanel, setas do teclado).

### 8.3 Destaques (carrossel de 3 slides)
1. Três slides com os textos do HOME.md. O H1 da página é o título do Slide 1, e só ele é H1.
2. Destinos dos botões:
   a. Receber proposta em 24h: #contato
   b. Ver as janelas de obra: #janelas
   c. Serviços para empresas: #janelas com o filtro Empresas ativo
   d. Serviços para profissionais: #janelas com o filtro Profissionais ativo
   e. Solicitar orçamento: #contato
3. Controles: Slide anterior, Próximo slide, e indicadores para escolher o slide, com os aria-label do HOME.md.
4. Se houver avanço automático, ele pausa com hover, com foco e com um botão de pausa visível, e fica desligado quando prefers-reduced-motion estiver ativo.
5. Cada slide é um article com aria-label "1 de 3", "2 de 3", "3 de 3".
6. Sem JavaScript, o conteúdo do Slide 1 aparece completo e os outros slides continuam acessíveis no documento.

### 8.4 Números
1. Três itens: +40 construtoras atendidas, +140 empreendimentos atendidos, +100.000 escaneamentos realizados.
2. Animação de contagem é permitida (ZONA LIVRE), mas o número final correto precisa estar no HTML desde o carregamento, para leitores de tela, buscadores e quem desativa animação.

### 8.5 Problemas
H2 e quatro cards, cada um com H3, texto e imagem. Os textos alternativos das imagens estão no HOME.md. Associe cada imagem ao problema que ela representa:
1. A parede aberta de novo: martelete quebrando o concreto.
2. A segunda visita: profissional voltando à obra para medir com trena.
3. A obra parada e A discussão sobre quem errou: as associações das outras imagens ficam a seu critério entre os textos alternativos disponíveis. Registre a escolha nas notas.

### 8.6 Janelas de obra
1. H2, texto, filtros e as 7 janelas, com os textos do HOME.md.
2. Filtros "Ver serviços para empresas" e "Ver serviços para profissionais" filtram as janelas e os serviços pelo público definido na seção 7.2. Deve existir forma clara de voltar a ver todos, usando apenas rótulos funcionais.
3. Navegação Voltar e Avançar, com contador no formato 01 / 07, que se ajusta à quantidade de janelas visíveis quando há filtro.
4. Funciona por arraste, por setas na tela e por setas do teclado. aria-label do contêiner: "Janelas de escaneamento, arraste ou use as setas".
5. Cada janela é um article com o aria-label do HOME.md original ("Janela 01, antes do projeto" etc.).
6. Cada serviço dentro da janela mostra número, nome e descrição, e linka para a URL futura do serviço.
7. O filtro pode ser ativado por URL (por exemplo #janelas com parâmetro ou estado), para os botões do carrossel funcionarem.

### 8.7 Tecnologia
H2, texto e os seis blocos (FARO Focus Premium, DJI Matrice 4E, Conferência em campo, Calibração, Drone regularizado, Tour 2GO), com as imagens do técnico com o FARO e do drone em voo.

### 8.8 Sobre
H2, texto, os dois marcos (2016 e 2019) e a imagem do operador sobre a armação da laje. O link "Conhecer a UNION3D ›" aponta para uma página que ainda não existe: não o renderize por enquanto e registre em ROTAS-PENDENTES.md.

### 8.9 Cases
Ver seção 9. Construa o componente completo (comparador entre foto real e nuvem de pontos com controle deslizante acessível, rótulo "Comparar foto e nuvem de pontos", janela, título, local, construtora, desafio, solução, resultado), mas a seção inteira fica desligada.

### 8.10 Clientes
Ver seção 9. Construa o componente de logos (pode ser faixa em movimento contínuo se a Impeccable aprovar, com pausa e respeito a prefers-reduced-motion, sem duplicar conteúdo para leitores de tela), mas a seção fica desligada.

### 8.11 Visualizador da nuvem de pontos
1. H2, texto, instrução de uso e botões "Abrir a nuvem" e "Quero isso na minha obra" (este leva a #contato).
2. O visualizador real depende de arquivo ou link que vou fornecer. Enquanto não houver, mostre um espaço reservado com o rótulo "Visualizador da nuvem de pontos" e não renderize o botão "Abrir a nuvem".
3. Não simule um visualizador falso nem gere nuvem de pontos fictícia.

### 8.12 Área atendida
1. H2, texto, lista de cidades e a nota de São Paulo, como no HOME.md.
2. Mapa: incorporação do Google My Maps. O link de incorporação será fornecido. Enquanto isso, espaço reservado com o rótulo "Mapa do Google My Maps".
3. O mapa só carrega quando o visitante chega perto da seção ou clica, para não pesar o carregamento inicial.

### 8.13 Perguntas frequentes
H2 e as quatro perguntas, em acordeão acessível (button com aria-expanded, ou details e summary). As respostas ficam no HTML desde o carregamento.

### 8.14 Contato e orçamento (formulário)
1. H2, texto e o formulário com exatamente estes campos, rótulos e placeholders do HOME.md:
   a. Em que etapa a obra está (select obrigatório, com as 7 opções)
   b. Nome (obrigatório)
   c. WhatsApp (obrigatório, com máscara (47) 90000-0000)
   d. E-mail (opcional, validado se preenchido)
   e. Cidade da obra (select obrigatório, com as 9 opções)
   f. Conte sobre a obra (textarea opcional)
2. Botões: "Solicitar orçamento da minha obra" (envio) e "Falar pelo WhatsApp agora" (abre o WhatsApp direto, sem preencher nada).
3. Nota "Sem compromisso." junto aos botões.
4. Envio, nesta etapa: como o site é estático e o envio por e-mail será configurado depois, o botão de envio valida os campos e abre o WhatsApp da UNION3D com uma mensagem montada apenas com os rótulos e os valores preenchidos, um por linha, sem nenhuma frase adicional. Exemplo de estrutura:
   Em que etapa a obra está: Antes do fechamento
   Nome: (valor)
   WhatsApp: (valor)
   E-mail: (valor, se houver)
   Cidade da obra: (valor)
   Conte sobre a obra: (valor, se houver)
5. Isole a lógica de envio num único módulo, com uma função de envio substituível, para que depois eu troque por envio via e-mail (por exemplo um script PHP na KingHost) sem mexer no componente.
6. Validação acessível: mensagens de erro associadas ao campo, foco no primeiro campo com erro, sem depender só de cor.
7. Sem JavaScript, o formulário deve ao menos exibir os campos e o botão "Falar pelo WhatsApp agora" deve funcionar como link comum.
8. Não colete nada além desses campos. Não grave dados em lugar nenhum.

### 8.15 Rodapé
1. Logo UNION3D na versão normal (não a horizontal).
2. CNPJ, endereço, CEP, telefone e e-mail, com telefone como link tel: e e-mail como link mailto:.
3. Coluna Serviços: os 10 serviços, na ordem de 01 a 10, linkando para as URLs futuras.
4. Coluna Cidades: "Vale do Itajaí e litoral de SC".
5. Coluna Selo: desligada (ver seção 9).
6. "© 2026 UNION3D. Todos os direitos reservados."
7. Redes: Instagram, YouTube e WhatsApp, cada uma só aparece se tiver URL definida. LinkedIn não aparece.
8. "Política de privacidade": a página ainda não existe. Não renderize o link e registre em ROTAS-PENDENTES.md.

### 8.16 Botão flutuante de WhatsApp
1. Presente em toda página, com o texto ou aria-label "Fale no WhatsApp".
2. Abre https://wa.me/5547996490312 em nova aba, com rel="noopener".
3. Não pode cobrir conteúdo essencial nem os controles dos carrosséis no mobile.
4. Sem mensagem pré preenchida.

### 8.17 Página 404
Página simples, no mesmo layout, com link para a home. Texto funcional mínimo, listado nas notas.

## 9. Conteúdo pendente: o que fazer com cada [a confirmar]

Crie um arquivo de configuração de visibilidade de seções (feature flags), com cada item abaixo desligado por padrão. Quando eu fornecer o conteúdo, eu ligo o item e preencho os dados, sem mexer nos componentes.

| Item | Situação | Comportamento agora |
|---|---|---|
| Seção Cases inteira | Local, construtora e valores X pendentes | Componente pronto, seção desligada, item "Cases" fora do menu |
| Seção Clientes | Lista final de 10 a 15 construtoras pendente | Componente pronto, seção desligada |
| Coluna Selo no rodapé | Selo a definir | Desligada |
| Instagram e YouTube | URLs pendentes | Ícones ocultos até haver URL |
| Visualizador da nuvem | Arquivo ou link pendente | Espaço reservado, sem botão "Abrir a nuvem" |
| Mapa | Link do My Maps pendente | Espaço reservado |
| Conhecer a UNION3D, Ver case, Política de privacidade | Páginas inexistentes | Links não renderizados |

Nenhuma string "[a confirmar]" pode chegar ao HTML gerado, nem em comentário, nem em atributo.

## 10. Stack, build e hospedagem (ZONA FIXA)

1. Astro, versão estável mais recente no momento da instalação. Confirme na documentação oficial atual qualquer opção de configuração antes de usar.
2. Saída 100% estática. Nada de renderização em servidor, endpoints, funções serverless ou adaptadores de servidor.
3. Hospedagem: KingHost, por upload da pasta gerada no build via FTP ou gerenciador de arquivos.
4. O site teste pode ser publicado numa subpasta do domínio union3d.com.br, e não na raiz. Configure o caminho base de forma que eu troque o caminho em um único lugar e todos os links, imagens, fontes e scripts continuem funcionando. Confirme na documentação atual do Astro as opções site e base antes de aplicar.
5. URLs com barra final.
6. JavaScript só onde há interação real (menu, mega menu, carrosséis, filtros, comparador, acordeão se necessário, formulário). Prefira JavaScript nativo e leve. Toda biblioteca de animação ou interação que você quiser instalar precisa de justificativa nas notas, ligada a uma recomendação da Impeccable, e não pode ser carregada de CDN.
7. Imagens otimizadas pelo próprio Astro quando possível, com largura e altura definidas para não haver salto de layout, e carregamento tardio fora da primeira dobra.
8. Sem cookies, sem rastreamento, sem analytics, sem scripts de terceiros, exceto o mapa do Google My Maps quando eu ligar.
9. Gerenciador de pacotes: npm. Inclua o arquivo de lock.
10. Node: declare a versão usada no package.json (engines) e num arquivo .nvmrc.

## 11. Imagens, vídeos e logos

Os arquivos visuais serão enviados aos poucos.

1. Onde houver imagem, vídeo ou logo, use um espaço reservado neutro, nas cores da paleta, com proporção definida e um rótulo discreto descrevendo o que vai ali.
2. Os textos alternativos são os do HOME.md, já aplicados desde agora.
3. Logos necessários: horizontal (header) e normal (rodapé), em SVG de preferência.
4. Comparadores dos cases: foto real e nuvem de pontos em 1400 por 1000.
5. Cards de serviço do mega menu: proporção 16:9.
6. Crie ASSETS-PENDENTES.md com uma linha por arquivo esperado: caminho exato onde colocar, página, seção, proporção ou tamanho recomendado, formato recomendado e texto alternativo. Trocar o espaço reservado pelo arquivo real deve ser só colocar o arquivo no caminho indicado.

## 12. SEO nesta etapa

O SEO será refeito por mim depois. Agora:
1. title: "UNION3D".
2. meta robots: noindex, nofollow, porque é um site teste.
3. Não escreva meta description, Open Graph com texto, dados estruturados ou textos de SEO. Deixe a estrutura pronta num único arquivo de configuração, com os campos vazios, para eu preencher.
4. Estrutura semântica correta: um único H1, hierarquia de títulos sem saltos, landmarks header, nav, main, footer.

## 13. Acessibilidade mínima (ZONA FIXA)

Além do que a Impeccable exigir:
1. WCAG 2.2 nível AA.
2. Tudo operável por teclado, com foco sempre visível.
3. prefers-reduced-motion respeitado em todas as animações: com a preferência ativa, nada se move sozinho, nada faz parallax, e transições ficam instantâneas ou quase.
4. Áreas de toque de no mínimo 44 por 44 px.
5. Nenhuma informação transmitida só por cor ou só por animação.
6. Conteúdo legível e utilizável com zoom de 200%.

## 14. Performance (metas)

1. Lighthouse mobile: Performance 90 ou mais, Acessibilidade 100, Boas práticas 100.
2. Nenhuma animação pode causar salto de layout.
3. Animações usando apenas transform e opacity sempre que possível.
4. Registre os resultados obtidos nas notas. Se alguma meta não for atingida, explique por quê.

## 15. Verificação automática

Crie um script que roda após o build e falha se encontrar no HTML gerado:
1. [a confirmar]
2. "a preencher"
3. "o mais pedido"
4. "MEP" no nome de serviço
5. "drywall e shafts"
6. "deslocamento" acompanhado de "custo"
7. "R$" ou a palavra "preço"
8. Travessão (—) ou meia risca (–)
9. LinkedIn
10. Mais de um H1 na página
11. Imagem sem atributo alt
12. Link com href vazio ou "#" sozinho

E que liste como aviso, sem falhar, os links internos que apontam para rotas ainda inexistentes, conferindo com ROTAS-PENDENTES.md.

Rode o build e esse script ao final de cada etapa.

## 16. Ordem de trabalho e commits

Trabalhe em etapas. Um commit ao final de cada uma, com mensagem descritiva em português.

1. Leitura da Impeccable e do HOME.md, NOTAS-DE-IMPLEMENTACAO.md inicial (seção 2).
2. Projeto Astro, configuração estática, caminho base, fonte, tokens, arquivos de dados e de visibilidade.
3. Layout base, header, mega menu, navegação mobile, rodapé, botão flutuante, página 404.
4. Seções Destaques, Números e Problemas.
5. Seção Janelas de obra com filtros e navegação.
6. Seções Tecnologia, Sobre, Visualizador, Área atendida e Perguntas frequentes.
7. Componentes de Cases e Clientes, desligados.
8. Formulário de contato e módulo de envio.
9. Passada de motion e refinamento visual completo pela Impeccable.
10. Auditoria final: rode todos os checklists e processos de revisão que a Impeccable define, corrija o que for apontado, rode Lighthouse e o script da seção 15.

## 17. Entregáveis

1. Código do site.
2. README.md, em português, com: requisitos, como instalar, como rodar localmente, como gerar o build, onde fica a pasta gerada, como trocar o caminho base, como publicar na KingHost passo a passo, como ligar seções desligadas, como trocar espaços reservados por arquivos reais, como trocar o envio do formulário.
3. NOTAS-DE-IMPLEMENTACAO.md com: resumo da Impeccable, direção visual escolhida e justificativas, cores derivadas, dependências instaladas e justificativas, textos funcionais criados, conflitos entre Impeccable e prompt, resultados de Lighthouse, dúvidas.
4. ASSETS-PENDENTES.md
5. ROTAS-PENDENTES.md

## 18. Critérios de aceite

A etapa só está concluída quando:
1. O build gera site estático sem erros.
2. O script da seção 15 passa sem falhas.
3. Todos os textos do HOME.md que não estão pendentes aparecem no site, sem alteração.
4. Nenhum texto de marca foi criado por você.
5. Header, mega menu, carrossel, filtros das janelas, acordeão, formulário e botão flutuante funcionam com mouse, toque e teclado.
6. O site funciona servido a partir de uma subpasta.
7. As metas da seção 14 foram atingidas ou justificadas.
8. Os cinco entregáveis da seção 17 existem e estão completos.

Ao terminar, me apresente: um resumo do que foi feito, a direção visual adotada, a lista de dúvidas e a lista do que depende de mim.
