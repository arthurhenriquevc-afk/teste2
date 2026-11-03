# Notas de implementação da UNION3D

## Antes do código

O briefing e HOME.md foram lidos integralmente. A leitura integral da skill está dividida entre o agente principal e agentes de leitura, incluindo referências, comandos, checklists, exemplos, scripts e agentes. O catálogo vetorial de fontes é lido e validado mecanicamente por inteiro; metadados e entradas Geist foram examinados textualmente. Não é uma fonte adicional de design. Os agentes não alteram arquivos do projeto.

## O que a Impeccable exige

Registrar a verdade do produto antes de decidir a aparência. Escolher uma direção concreta, específica ao trabalho do público, com tese de primeira dobra e uma interação marcante. Construir a direção inteira, preservando semântica, acessibilidade e desempenho. Inspecionar o resultado renderizado em desktop e mobile, acionar interações e estados reais, executar detector mecânico uma vez e obter revisão independente. Encerrar somente com veredito e documentação dos tokens em DESIGN.md e .impeccable/design.json. Não substituir prova real por decoração, nem inventar fatos comerciais.

## Processos e momentos

1. Leitura integral e registro inicial: esta etapa, antes do código e do primeiro commit.
2. Context: executado nesta sessão. Detectou projeto vazio, sem PRODUCT.md, sem hook e com detector manual obrigatório.
3. Init: preencher PRODUCT.md com a seção 3 do briefing, sem repetir perguntas respondidas.
4. New-work e concept-seed: executar após PRODUCT.md; manter paleta, Geist, conteúdo e placeholders obrigatórios. Registrar candidatos e resultado no contrato da superfície.
5. Craft-floor: ler antes de editar UI; checar contraste, foco, ritmo, escala, estados, conteúdo, ausência de efeitos gratuitos e leitura sem JS.
6. Build e verificação de HTML: ao fim de cada etapa a partir da criação do projeto. A etapa inicial não tem build.
7. Polish, adapt, harden e animate: revisão do código, mouse, teclado, toque, zoom, movimento reduzido, gesto, validação e estados. Sem bibliotecas de interação.
8. Audit: acessibilidade, desempenho, tokens, responsividade e integridade; severidades e evidências nas notas finais.
9. Detect --json: uma execução sobre src ao final da UI, com correção de problemas mecânicos e justificativa de falsos positivos.
10. Revisão final independente: screenshots desktop/mobile, contrato, briefing, checks e achados. Corrigir a lista material e obter veredito.
11. Documenter: após revisão, gerar DESIGN.md e .impeccable/design.json a partir do que foi construído.
12. Lighthouse mobile, build, teste em subpasta e verificação automática: registrar resultados reais, nunca estimados.

## Direção visual inicial e justificativa

Registro de obra em sequência: campos largos de azul profundo alternados com branco, títulos Geist em grande escala e composição assimétrica. A primeira dobra é um painel de leitura direta com o título integral, ação evidente e área de mídia neutra. O percurso fica progressivamente mais documental: problemas, cronograma navegável, tecnologia, equipe e formulário. A interação assinatura é o avanço das janelas, cuja posição e filtro ficam claros sem depender de animação. A enumeração das janelas representa sequência real, não decoração.

O público consulta o site no escritório e no canteiro, inclusive sob luz intensa: contraste alto, alvos grandes, corpo legível e ausência de texto sobre imagens. Superfícies amplas dão ritmo sem recobrir toda a home com cartões iguais. Bordas e espaçamento organizam os dados. Não se usa Geist Mono como fantasia técnica. Sem ilustrações falsas, nuvens fictícias, fotos externas ou maquetes de equipamento.

A direção final será registrada antes da UI após o procedimento de direção da skill. Nenhum site, template, kit visual ou biblioteca CSS será referência.

## Conflitos resolvidos pelo briefing

- Init e new-work pedem perguntas e escolha visual pelo usuário. O briefing já responde produto, público, stack, fonte, paleta, metas e delega expressamente decisões visuais. Usar essas respostas, sem nova rodada de aprovação.
- A skill recomenda catálogo externo e imagens de calibração. O briefing limita as fontes a skill, prompt e HOME.md. Não consultar catálogo ou sites como referência de design.
- A skill recomenda comps e autoria de imagens para novas landing pages. O briefing determina placeholders neutros e proíbe simular prova. Construção diretamente em código, sem comp aprovada ficticiamente ou imagem gerada.
- O craft-floor proíbe kicker decorativo, mas os rótulos das janelas são conteúdo sequencial obrigatório. Preservar os rótulos como estrutura informativa.
- HOME.md menciona uma rede social que o briefing proíbe e links de páginas ausentes. Aplicar as regras explícitas do briefing e não renderizar essas entradas.

## Associações de imagens dos problemas

- A parede aberta de novo: martelete quebrando o concreto.
- A segunda visita: profissional com trena.
- A obra parada: vista aérea de Balneário Camboriú entre a neblina.
- A discussão sobre quem errou: silhueta de pessoa em obra.

## Cores derivadas

Tokens derivados: #496672 para texto secundário sobre branco e superfícies claras; #becbd0 para divisórias não essenciais; #78909a para divisórias e detalhes sobre azul; #174758 para hover de superfície escura. Todos derivados do azul primário. Branco sobre #002e40: 14,34:1; texto #496672 sobre branco: 6,13:1, sobre parchment: 5,63:1 e pearl: 5,88:1. Bordas de campos usam #496672, foco usa o azul primário ou branco. Somente a sombra de menu usa rgb(0 46 64 / .14). Divisórias #becbd0 não carregam informação nem delimitam campos; não são texto. #78909a sobre azul: 4,27:1, usado somente em linhas/detalhes. Texto branco sobre hover #174758: 10,10:1. O nome Geist em @font-face é o registro obrigatório da família, não uma segunda fonte; os componentes consomem --font-body.

## Dependências e documentação consultada

- Astro estável consultado no npm: 7.4.5. Configurações site, base, trailingSlash e output confirmadas na documentação oficial withastro/docs em src/content/docs/en/reference/configuration-reference.mdx. O site de documentação respondeu 403; utilizada a fonte oficial no GitHub.
- Geist: pacote oficial geist, documentação atual obtida por npm view geist readme. Os exports geist/font/sans são específicos de Next; Astro usará o arquivo WOFF2 oficial do pacote via @font-face local, após inspeção do conteúdo distribuído.
- Node disponível: 24.22.1. npm: 11.9.0.

## Textos funcionais criados

- UNION3D, início (aria-label do logo).
- Navegação principal; Público dos serviços; Fechar serviços; Fechar menu.
- Saiba mais: {nome do serviço}; Agendar: {nome do serviço} (nomes acessíveis de links).
- Ir para o slide {n}; Slide {n} de 3; 1 de 3; 2 de 3; 3 de 3; Slide anterior; Próximo slide.
- Ver todos os serviços; Filtrar serviços por público; Janelas de escaneamento, arraste ou use as setas.
- Janela {n}, {título em minúsculas}; Fora do relógio da obra, retrofit e vendas.
- Carregar mapa (somente quando o mapa for habilitado).
- Página não encontrada.; O endereço solicitado não está disponível.; Voltar para a home.
- Escolha a etapa da obra.; Informe seu nome.; Informe o WhatsApp com DDD e 11 dígitos.; Informe um e-mail válido.; Escolha a cidade da obra.
- Revise os campos indicados.
- A solicitação foi preparada para abrir no WhatsApp. Confirme o envio na conversa.

Rótulos exigidos pelo próprio briefing, como Comparar foto e nuvem de pontos e Fale no WhatsApp, foram preservados. Placeholders de mídia usam somente os textos alternativos fornecidos. Não há nova frase de marca.

## Dúvidas e dependências do usuário

- Não há URLs de Instagram e YouTube, arquivo/link de nuvem, incorporação My Maps, logos, fotografias, lista final de clientes ou dados completos de cases. Tratar conforme flags e placeholders, sem impedir a home.
- O briefing cita aria-labels originais de carrossel e janelas que não constam literalmente no HOME.md recebido. Serão rótulos funcionais documentados, preservando os exemplos especificados.
- As páginas futuras de serviços, sobre, cases e privacidade não existem. Registrar os destinos em ROTAS-PENDENTES.md; só os serviços terão links desde agora.
- Nenhuma outra dúvida bloqueia a implementação.

## Validação e resultados

Antes do código: repositório sem commits, somente skill instalada e não rastreada. GitHub remoto sem referências confirmado na instalação anterior. Nenhum código de aplicação existente a preservar.

## Direção final e leitura concluída

Leituras concluídas antes do primeiro código: referências e scripts textuais em blocos, sem truncamento. Dados vetoriais de fonte examinados estruturalmente por inteiro, conforme ressalva acima. Integridade dos 63 arquivos da skill idêntica ao ZIP. Motor validado pelo SHA-256 do manifesto.

Concept-seed executado após PRODUCT.md, índice 6, referência seed:90dcf11a8d6b7fab. Lista e contrato em .impeccable/surfaces. Resultado degradado sem challengers ou boards externos; não houve nova consulta ao catálogo, que o briefing proíbe. Construção em código com a composição de folha de acompanhamento executivo, paleta e conteúdo preservados.

## Implementação e dependências

Astro 7.4.5, Geist 1.9.0. Sem framework CSS, componentes de terceiros, biblioteca de animação, adaptador ou endpoint. Desenvolvimento: parse5 para inspecionar HTML; Playwright e axe para fluxos e acessibilidade; Lighthouse para as metas. Essas ferramentas ficam fora dos bundles publicados. O peer de Next do pacote Geist não é instalado (.npmrc). O WOFF2 oficial é copiado para src/assets/fonts e servido pelo Astro; a licença acompanha o fonte.

## Motion

Tese: o momento focal é a troca de janela, cuja continuidade usa scroll-snap nativo e contador sincronizado. Feedback de botões usa transform curto; FAQ gira somente o ícone. Não há autoplay, animação de números, parallax ou loops. Conteúdo começa visível. prefers-reduced-motion torna rolagem e transições instantâneas. Nenhuma animação altera medidas do layout.

## Verificações durante as etapas

Build estático e verificação de HTML passaram nas etapas 2 a 8. O primeiro build do layout identificou export WOFF2 bloqueado no pacote Geist; corrigido com arquivo oficial local. A validação em 320px encontrou excesso de largura na navegação de janelas; gaps e controles foram ajustados. O Lighthouse inicial marcou 100/100/96, com 404 de favicon como única falha de boas práticas. A referência vazia de favicon evita uma chamada inexistente até haver identidade gráfica real. Não houve relaxamento de checks.

## Auditoria técnica final

- Acessibilidade 4/4: axe desktop e mobile com menu aberto, zero violações WCAG A/AA; foco, abas, Esc, erros associados, teclado, FAQ nativo e controles de pelo menos 44 × 44 px verificados. Isso não substitui auditoria manual com pessoas ou equipamentos físicos.
- Performance 4/4: Lighthouse mobile 100, LCP 0,9 s e CLS 0 no build com placeholders. Não há movimento automático, requisições externas iniciais, cookies ou storage. A fonte é local e pré-carregada.
- Tokens 4/4: paleta e estados derivados em tokens.css, corpo e componentes usam variáveis; contrastes de texto AA calculados. Não há tema alternativo.
- Responsividade 4/4: 320, 390, 768, 1280 e 1600 px sem overflow, reflow equivalente a zoom 200% e alvos de toque verificados.
- Integridade 4/4: build estático, duas páginas, 104 textos integrais conferidos, links futuros registrados, ausência de conteúdo pendente no HTML. Verificador negativo testado contra 15 violações; rotas ausentes só avisam.

Total técnico: 20/20 no escopo verificado. Não há P0/P1 técnico aberto. Safari, Firefox e dispositivos físicos não foram executados; o teste de toque usa eventos reais do protocolo Chromium em contexto mobile. A implantação e as mídias reais não foram validadas.

Lighthouse mobile final: Performance 100; Acessibilidade 100; Boas práticas 100. Relatórios atuais em reports/lighthouse-mobile.json e .html. Metas atingidas nesta instância, antes das imagens/integrações finais.

Teste principal: 35 verificações passadas. Gesto: 9 verificações adicionais passadas, incluindo arraste real de mouse e touchStart/move/end (382 px de deslocamento), cancelamento, perda de captura, clique fora, filtro por URL e público.

Detector Impeccable executado uma única vez: um warning overused-font por Geist. Mantido por determinação expressa do briefing, sem trocar fonte nem executar detector duplicado. Sem outros achados. Não foi instalado hook automático.

## Pendências concretas

Do usuário: logos, fotos listadas em ASSETS-PENDENTES.md, dados completos de cases, lista final de clientes, definição de selo, URLs sociais, link real da nuvem e URL de incorporação My Maps. Não há pergunta de produto bloqueante.

Etapas futuras: dez páginas de serviço, sobre, cases individuais e privacidade; integração de e-mail com backend real. Nesta etapa o WhatsApp funciona sem backend. Nenhuma publicação, envio de formulário a destinatário real, push Git ou upload FTP foi realizado.

## Correção da revisão independente

Primeiro veredito: fix, exclusivamente por colisão do WhatsApp flutuante com controles durante a rolagem mobile. Confirmado por hit-testing em 390 × 844: o toque em parte do botão Avançar retornava Fale no WhatsApp. Corrigido com faixa reservada no header em até 960px: o atalho permanece fixo e acessível no topo, sem ocupar a faixa de conteúdo. Mantida a posição inferior no desktop.

Regressão específica: 10 testes de hit-testing em 320px e 390px, envolvendo os dois carrosséis, telefone, envio e o cabeçalho com menu aberto. Todos passaram. As 35 verificações gerais também passaram novamente. Lighthouse após correção: 100/100/100, LCP 0,9s e CLS 0. Capturas finais recapturadas nos mesmos tamanhos para o veredito do revisor.

Configuração reutilizável do ambiente: install_script com npm ci e build, start_skill com diretório, inicialização, readiness e checks. Salvar o rascunho não publica a configuração nem a home na KingHost.

## Encerramento da revisão e reprodutibilidade

O revisor pontuou a única correção material como resolvida e retornou disposition: ship no escopo dela. O primeiro review cobriu a superfície e não solicitou rebuild. DESIGN.md e .impeccable/design.json documentam o sistema implementado, sem referências visuais externas.

Foram concluídas 54 verificações funcionais (35 gerais, 9 de gestos, 10 de colisões) e 15 testes negativos do verificador de HTML. npm ci foi executado com o lockfile e o build passou novamente. O modo dev também foi iniciado e respondeu com título e conteúdo corretos em /teste/.

Constantes de entrelinha, tracking secundário, círculo e afastamento de sublinhado foram promovidas a tokens preservando exatamente seus valores; nenhum componente declara fonte ou cor fora dos tokens. A declaração @font-face registra o nome oficial da família.

Rascunho do ambiente confirmado como salvo. Requer revisão, salvamento e publicação nas configurações do ambiente para ativar uma nova versão; isso não publica o site na KingHost. A restauração em uma tarefa nova ainda não foi testada.

Documenter concluído: DESIGN.md normativo e sidecar schemaVersion 2 validados, com dez receitas reais e sem rampas de cores sintéticas. Build final preserva somente home/404; a pasta dist é a entrega para upload.

## Publicação de teste pelo GitHub

Solicitada pelo usuário após a entrega. Base alterada de /teste/ para /teste2/ e site para https://arthurhenriquevc-afk.github.io em um único arquivo. Workflow segue a documentação oficial atual do Astro em guides/deploy/github.mdx: checkout v7, withastro/action v6 e deploy-pages v5, Node24.22.1 e npm. Não há domínio personalizado nem alteração visual.

Acesso Git ao repositório confirmado; API api.github.com bloqueada pela política de saída do ambiente. Foram salvos no rascunho os domínios api.github.com e arthurhenriquevc-afk.github.io para configuração do Pages e validação HTTPS. Essa gravação não aplica a política à instância.


## Evolução de motion autorizada na home existente

O usuário revogou as travas do prompt original, exceto cores e fonte, e pediu a análise do conteúdo seguida de aplicação de animações pela Impeccable. O prompt anterior passa a ser histórico; a orientação atual está em docs/MOTION.md e PRODUCT.md. Essa autorização também cobre a atualização dos registros do sistema visual. A paleta e os arquivos Geist não foram alterados.

Tese: medir antes de cobrir. Uma passagem de leitura constrói um estudo arquitetônico sintético em pontos e contornos na abertura. A legenda o identifica como ilustração 3D e o nome acessível esclarece que não representa levantamento real. Os três destaques compartilham a cena, com títulos recortados direcionalmente e ações coordenadas. A linha de sete etapas navega diretamente pelas janelas reais e acompanha os filtros. Menus, abas, FAQ, totais e formulário recebem movimentos ligados a estado, relação e feedback.

Implementação nativa: Canvas 2D, Web Animations API e CSS. Nenhuma dependência nova, chamada externa, fonte ou cor adicionada. A cena termina o loop em repouso e suspende fora da tela e em aba oculta; a densidade é limitada a 1,5. Mudança de preferência para movimento reduzido cancela animações e conserva a geometria estática. Sem JavaScript, os três destaques, as sete janelas e o contato continuam disponíveis.

A primeira auditoria Lighthouse identificou CLS 0,793 decorrente do aprimoramento tardio do cabeçalho e dos slides. Corrigido com marcador de aprimoramento síncrono no head e slides inativos ocultos no HTML inicial, com fallback noscript para todos os destaques. A nova medição voltou a CLS 0, sem retirar as animações. A revisão independente identificou alvos pequenos na linha de etapas mobile; os sete controles passaram a quebrar em linhas e têm mínimo explícito de 44 por 44px.

Validação final em Chromium: 86 verificações funcionais aprovadas (35 gerais, 9 gestos, 10 colisões, 32 de motion), incluindo todas as sete etapas em 320px e 390px, interrupção por trocas rápidas, repouso da renderização, teclado, movimento reduzido e versão sem JavaScript. Nenhuma violação axe AA nos cenários desktop, mobile e modo animado. Build estático aprovado, 104 textos conferidos e 15 fixtures negativas de HTML rejeitadas como esperado.

Lighthouse mobile final: desempenho 100, acessibilidade 100, boas práticas 100; LCP 0,9s, CLS 0, TBT 0ms. São medições da instância de desenvolvimento com mídias ainda pendentes, não validação de dispositivos físicos, Safari/Firefox ou produção. Relatórios em reports/ e capturas em .impeccable/review/. A demonstração real das interações está em reports/union3d-motion.webm e .mp4.

Detector mecânico executado uma vez nesta evolução. Restam somente os dois avisos de variantes responsivas de tamanho já descritas em DESIGN.md e o warning sobre Geist, que é obrigatória por orientação do usuário. Não houve silenciamento de regras. DESIGN.md e .impeccable/design.json registram o movimento implementado. Nenhum push ou publicação no GitHub Pages foi realizado nesta tarefa.

Revisão independente concluída: o veredito `ship` pontuou o único ajuste solicitado, os alvos de etapas mobile, como resolvido e não encontrou regressões nesse lote. Esse veredito se limita à correção pontuada. Registro em reports/motion-review.md.
