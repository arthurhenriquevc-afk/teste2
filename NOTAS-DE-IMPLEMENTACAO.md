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

Tokens derivados: #496672 para texto secundário sobre branco e superfícies claras; #becbd0 para divisórias não essenciais; #78909a para divisórias e detalhes sobre azul; #174758 para hover de superfície escura. Todos derivados do azul primário. Branco sobre #002e40: 14,3:1; texto #496672 sobre branco: 6,1:1. Bordas de campos usam #496672, foco usa o azul primário ou branco. Somente a sombra de menu usa rgb(0 46 64 / .14). Contrastes exatos serão recalculados na auditoria.

## Dependências e documentação consultada

- Astro estável consultado no npm: 7.4.5. Configurações site, base, trailingSlash e output confirmadas na documentação oficial withastro/docs em src/content/docs/en/reference/configuration-reference.mdx. O site de documentação respondeu 403; utilizada a fonte oficial no GitHub.
- Geist: pacote oficial geist, documentação atual obtida por npm view geist readme. Os exports geist/font/sans são específicos de Next; Astro usará o arquivo WOFF2 oficial do pacote via @font-face local, após inspeção do conteúdo distribuído.
- Node disponível: 24.22.1. npm: 11.9.0.

## Textos funcionais criados

Lista será preenchida com cada rótulo funcional efetivamente implementado.

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
