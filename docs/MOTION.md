# UNION3D: medir antes de cobrir

## Orientação vigente

O usuário pediu a retirada das travas do prompt original, exceto cores e fonte, e delegou a análise e a aplicação de animações na home existente. As proibições antigas de animações, diagramas, efeitos, referências ou técnicas não governam esta evolução. A paleta de tokens e Geist auto-hospedada são preservadas. O conteúdo foi estudado e mantido como informação comercial; liberdade visual não transforma uma ilustração em prova real.

## Tese de movimento

A abertura transforma pontos em um registro espacial: uma geometria arquitetônica explicitamente ilustrativa é construída por uma passagem de leitura. É uma metáfora visual para o serviço, sem fingir ser uma captura da UNION3D. Os três destaques compartilham a cena e suas mudanças coordenam recorte de texto, ações e perspectiva.

As sete janelas são a sequência real do trabalho. A nova linha de etapas mostra posição, permite saltar a uma janela e acompanha os filtros. Menu, abas, FAQ e formulário usam transições curtas para explicar abertura e estado. Os números contam uma única vez, mantendo os totais reais no HTML e no nome acessível. Não se aplica a mesma entrada a todas as seções.

## Implementação e orçamento

- Canvas 2D com geometria definida em código, sem dependências extras ou chamadas externas. Densidade limitada a 1,5; desenho em requestAnimationFrame apenas durante a entrada, troca ou resposta ao ponteiro.
- A cena interrompe o desenho fora da tela e em abas ocultas. Ao repousar, não mantém um loop de renderização.
- Web Animations API com cancelamento em novas ações. CSS para estados e abertura nativa de details, com fallback quando a interpolação de tamanho não existe.
- Nenhum sequestro de rolagem, som ou avanço automático de carrossel. Movimento reduzido oferece geometria estática e mudanças imediatas de estado; conteúdo e controles continuam disponíveis sem JavaScript.
- `src/scripts/motion-utils.ts` centraliza curva e execução. As cores e a fonte continuam exclusivamente nos tokens existentes.

## Validação

Os relatórios da execução ficam em `reports/` e as capturas em `.impeccable/review/`. Resultados medidos são registrados em NOTAS-DE-IMPLEMENTACAO.md após a execução.
