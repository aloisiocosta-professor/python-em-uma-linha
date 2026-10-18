# Diretrizes da wiki Python em uma linha

Leia e aplique [research/protocolo-feynman.md](research/protocolo-feynman.md) ao alterar o material de ensino.

- Cada arquivo `.py`, inclusive em `docs/examples`, deve ter no máximo uma linha física. Não aplique formatadores que expandam essas linhas.
- Fonte das contas e exemplos: `tools/build.mjs`. Fonte pedagógica específica de cada aula: `tools/feynman-content.mjs`. Componentes do ciclo: `tools/feynman.mjs`.
- Toda aula precisa de pergunta concreta, explicação simples, analogia limitada, rastreamento dos valores, diagnóstico com reparação, ensino sem consulta, registro de lacuna, revisão e transferência. Não use apenas títulos Feynman com conteúdo genérico.
- Preserve a diferença entre fontes científicas, documentação e orientação institucional. Não declare eficácia pedagógica sem estudo.
- Após editar, execute `node tools/build.mjs` e `node tools/verify.mjs`. Para alterações na prática interativa, execute `node tools/browser-check.mjs` quando Chromium e Node >=22 estiverem disponíveis.
- Não envie anotações dos estudantes a serviços externos. Salvamento e exportação devem continuar locais e opcionais.
- Atualize o registro de revisão e os testes pertinentes antes de publicar. A autorização do proprietário para atualizar esta wiki e seu repositório já consta na conversa.
