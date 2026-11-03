# UNION3D

Home de teste em Astro, com saída totalmente estática e sem rastreamento. Apenas `/` e `/404.html` são gerados. Os links de serviços apontam para páginas futuras, documentadas em ROTAS-PENDENTES.md.

## Requisitos e instalação

Node 24.22.1 e npm 11.9.0 foram utilizados. A versão está em .nvmrc e package.json.

```sh
nvm use
npm ci
npm run dev
```

O servidor informa a porta e o caminho configurado. A base atual para GitHub Pages é `/teste2/`. Comandos npm usam sintaxe POSIX para desativar a telemetria de desenvolvimento do Astro. No Windows, use WSL ou Git Bash. Não há telemetria no site publicado.

A fonte vem do pacote oficial `geist` 1.9.0. O WOFF2 oficial foi copiado para src/assets/fonts, com sua licença OFL. Não há Google Fonts, CDN ou chamadas de fonte externas. O pacote tem peer dependency de Next; .npmrc usa legacy-peer-deps para não instalar um framework que o projeto não utiliza. npm ci preserva essa decisão.

## Build e verificações

```sh
npm run build
npm run preview -- --port 4321
npm run test:browser
npm run test:lighthouse
node scripts/test-motion.mjs
node scripts/test-gestures.mjs
node scripts/test-floating.mjs
node scripts/test-html-check.mjs
```

A pasta publicável é **dist/**. O build executa scripts/check-html.mjs e scripts/check-copy.mjs. O primeiro rejeita conteúdo proibido, estrutura de H1, imagens sem alt e links vazios; avisa sobre rotas ausentes. O segundo confere 104 textos integrais do conteúdo ativo. Os testes de gesto e colisão exigem o mesmo preview local. O teste negativo do verificador usa fixtures temporárias e não altera dist. Os testes de navegador usam Chromium em /usr/bin/chromium; ajuste executablePath caso o sistema use outro local. Relatórios e capturas ficam em reports/ e .impeccable/review/, fora do Git e do site.

Nenhum servidor Node é necessário na KingHost. O servidor local serve somente para desenvolvimento e verificação.

## Publicação de teste no GitHub Pages

O destino está configurado em src/config/deployment.mjs: site https://arthurhenriquevc-afk.github.io e base padrão /teste2/. O workflow .github/workflows/deploy.yml usa a ação oficial do Astro, executa npm run build:pages e publica as duas versões no mesmo artefato a cada push em main. Em Settings > Pages, a fonte deve ser GitHub Actions.

- Home original: https://arthurhenriquevc-afk.github.io/teste2/
- Home com motion: https://arthurhenriquevc-afk.github.io/teste2/motion/

O script scripts/build-pages.mjs recompõe a home original a partir do commit fixo 60a6e9a9017723ea8a182c7516ee15d5133181ac e gera a versão atual com UNION3D_BASE=/teste2/motion/. A versão antiga conserva seus próprios arquivos; a nova tem HTML e recursos no subdiretório motion. O checkout da CI carrega o histórico para acessar o commit original. O script confirma igualdade do lockfile e verifica a separação das duas homes antes de montar dist/. Nenhum arquivo da aplicação é trocado para gerar a versão antiga.

Para reproduzir a publicação, execute npm run build:pages. Para desenvolver somente a versão atual, os comandos npm run dev e npm run build continuam usando a base padrão; use UNION3D_BASE para testar outra base.

## Caminho base e publicação na KingHost

1. Em **src/config/deployment.mjs**, ajuste `site` para a origem do domínio e `base` para a pasta de destino. Exemplo: `base: '/teste/'`. Para a raiz, use `/`.
2. Execute `npm run build` novamente. Não altere caminhos manualmente no HTML gerado.
3. Faça backup dos arquivos já publicados no destino.
4. Abra o gerenciador de arquivos da KingHost ou conecte seu cliente FTP/SFTP usando os dados da hospedagem. Não coloque credenciais no projeto.
5. Dentro da pasta pública do domínio, crie a pasta correspondente à base. Para `/teste/`, use a subpasta `teste`.
6. Envie **o conteúdo de dist/**, incluindo `_astro`, `index.html` e `404.html`, para essa pasta. Não envie a própria pasta dist, node_modules, src, docs, reports ou .agents.
7. Confira a home na subpasta, os menus, as fontes e o WhatsApp. Os arquivos `_astro` têm nomes gerados; substitua-os junto com o HTML a cada publicação.
8. Para usar a 404 personalizada em Apache, configure no painel da hospedagem o documento de erro para `/teste/404.html`. Se usar .htaccess, adicione `ErrorDocument 404 /teste/404.html` na pasta do teste. Ajuste o caminho se mudar a base. O build não altera configurações da hospedagem.

O noindex, nofollow permanece ativo. Não há canonical, descrição, Open Graph textual ou dados estruturados preenchidos. A estrutura para esses campos está em src/config/visibility.ts, em `seo`.

## Motion da home

A orientação atual substitui as travas visuais do prompt histórico, mantendo cores e Geist. A home possui estudo espacial ilustrativo em Canvas 2D, transições canceláveis dos destaques, contagem única dos totais reais, linha de etapas sincronizada com filtros e respostas animadas de navegação, FAQ e formulário. A cena encerra a renderização em repouso e fora da tela; movimento reduzido e conteúdo sem JavaScript têm alternativas estáticas. Não há nova dependência nem chamada externa. Detalhes em docs/MOTION.md. As imagens dos destaques foram substituídas intencionalmente por essa ilustração compartilhada; as demais mídias reais ainda usam as reservas documentadas.

## Conteúdo e arquitetura

- docs/copy/HOME.md: fonte editorial recebida, preservada sem alterações.
- src/data/home.ts: textos integrais das seções.
- src/data/company.ts: dados da empresa e WhatsApp.
- src/data/services.ts: os 10 serviços, públicos, descrições, URLs e imagens.
- src/data/windows.ts: janelas, rótulos, descrições e associações de serviços.
- src/data/cities.ts: cidades e complementos originais.
- src/data/proof.ts: cases e lista de clientes.
- src/styles/tokens.css: cores, fonte, escala, espaçamentos, raios, sombra e motion.
- src/layouts/BaseLayout.astro: layout compartilhado para futuras páginas.

Edite os dados para futuras alterações editoriais aprovadas. Os componentes não guardam cópias das descrições dos serviços.

## Como ativar conteúdo pendente

Em **src/config/visibility.ts**, `visibility` controla as seções e integrações. Todos os itens pendentes começam em false.

- Cases: complete local, construtora, desafio e qualquer solução vazia em src/data/proof.ts, forneça as seis imagens e só então ligue `cases`. O menu passa a mostrar Cases. O comparador usa um range nativo operável por teclado. `url` vazio mantém Ver case oculto.
- Clientes: cadastre somente marcas confirmadas em `clients`, com nome e caminho da imagem, e ligue `clients`. A faixa é estática, sem duplicação ou autoplay.
- Instagram e YouTube: preencha a URL em `integrations` e ligue a flag correspondente. Sem URL não há link. WhatsApp já está configurado.
- Selo: preencha sealImage e sealAlt, depois ligue `seal`.
- Nuvem: preencha `integrations.cloud` com o link verdadeiro e ligue `cloud`. O botão Abrir a nuvem aparece; a área permanece reservada, sem visualizador fictício. Um visualizador embutido dependerá do formato real fornecido e de uma integração posterior.
- My Maps: preencha a URL de incorporação, não a URL de compartilhamento, em `integrations.map` e ligue `map`. O iframe só é criado perto da seção ou por clique, com título e dimensões definidos.

Não habilite conteúdo incompleto. Strings pendentes nunca são serializadas no HTML. As páginas sobre, cases individuais e privacidade serão uma etapa posterior.

## Como trocar os espaços reservados

Consulte **ASSETS-PENDENTES.md**. Coloque o arquivo no caminho exato e reconstrua. `Media.astro` identifica os arquivos em src/assets por import.meta.glob e usa astro:assets para definir dimensões, formatos e variantes. Sem arquivo, mostra um bloco neutro com o alt já associado. Logos SVG seguem o mesmo mecanismo; até lá, UNION3D aparece como texto, sem marca gráfica inventada. Nenhuma imagem de teste foi publicada como prova real.

Para logos de clientes, é necessário cadastrar a marca em `clients`, pois a lista ainda não foi fornecida. A imagem de cada serviço pode ser substituída independentemente da imagem de sua janela.

## Formulário e futura troca do envio

O formulário coleta somente etapa, nome, WhatsApp, e-mail opcional, cidade e descrição opcional. Não grava dados, não usa storage e não envia a nenhum backend. Ao enviar, valida, mantém os valores e abre uma conversa no WhatsApp com rótulos e valores, sem frase de apresentação. A pessoa confirma o envio no WhatsApp. Se o navegador bloquear a nova aba, o link Falar pelo WhatsApp agora continua disponível.

Toda a função de envio fica em **src/scripts/submit-quote.ts**. Para integrar um script PHP na KingHost, substitua `submitQuote` por uma chamada ao endpoint real. Se a integração for assíncrona, o contrato e o feedback em contact.ts precisarão tratar sucesso e falha da Promise, sem alterar o componente de campos. Não acrescente endpoint ao Astro estático. Validação no servidor, antispam e política de privacidade pertencem à futura integração.

## Estado e limitações

Direção, conflitos da skill, textos funcionais, auditoria e resultados reais estão em NOTAS-DE-IMPLEMENTACAO.md. A publicação de teste passou a usar GitHub Pages por solicitação do usuário; KingHost continua como alternativa de upload estático. Os resultados de desempenho correspondem aos placeholders e precisarão de nova medição após fotos e integrações reais.
