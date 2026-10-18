# Python em uma linha física

Wiki em português aplicada à ciência e engenharia da computação, com 51 aulas organizadas pelo ciclo de Feynman: explicar, identificar lacunas, investigar e explicar de novo. Cada arquivo `.py` contém exatamente uma linha física. Quando um bloco é necessário, o código autoral usa `exec` com `\n` escapado.

- Wiki: https://aloisiocosta-professor.github.io/python-em-uma-linha/
- Comece: [aula 01](https://aloisiocosta-professor.github.io/python-em-uma-linha/aula-01.html)
- Método: [protocolo](research/protocolo.md), [triagem](research/triagem.csv), [bibliografia aceita](research/bibliografia.md), [mapa de afirmações](research/afirmacoes.csv).

## Estudar e reproduzir

Requisitos: Python 3.14 e Node.js >=22. Exemplos das primeiras trilhas usam somente a biblioteca padrão; a trilha científica usa as dependências fixadas.

```sh
git clone https://github.com/aloisiocosta-professor/python-em-uma-linha.git
cd python-em-uma-linha
python -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python examples/01.py
node tools/build.mjs
node tools/verify.mjs
```

No Windows use `.venv\Scripts\python.exe` e defina `PYTHON` para esse executável ao rodar o verificador. O site é HTML estático em `docs/`; pode ser lido abrindo `docs/index.html` localmente. Não executa código Python enviado pelo visitante. Os exemplos são baixados para execução local.

## Organização e contribuição

`tools/build.mjs` é a fonte editorial das aulas e gera `lessons.json`, páginas e downloads. `tools/verify.mjs` executa cada exemplo, verifica saídas, linha física, propriedades selecionadas e links locais. `research/` registra decisões e resultados, sem redistribuir as íntegras dos artigos. Edite a fonte, regenere, verifique e faça um commit. Não formate os arquivos Python em várias linhas.

GitHub Pages serve a pasta `/docs` da branch `main`. O workflow verifica exemplos e páginas em pushes e pull requests. Publicação e verificação são processos distintos: o resultado da verificação deve ser consultado antes de integrar mudanças.

## Escopo e limites

Esta é a versão 2 de um curso progressivo, do básico a introduções em tópicos de fronteira. Não equivale a uma formação completa em toda ciência e engenharia da computação. A bibliografia científica aceita contém apenas as fontes efetivamente examinadas, não cobre ainda todas as áreas. Não foi realizado estudo que demonstre superioridade pedagógica do formato. Os projetos incluem entregáveis e critérios de avaliação para aprofundamento autônomo.

Conteúdo e código autorais disponibilizados sob MIT; artigos e documentação externos conservam seus próprios termos. Consulte [LICENSE](LICENSE).

## Versão 2: estudar pelo ciclo de Feynman

As 51 aulas e os quatro projetos foram refatorados. Cada aula parte de uma pergunta concreta e de uma explicação simples, apresenta uma analogia com limite e acompanha os valores do código. Depois você esconde o material, ensina com suas palavras, registra uma lacuna, investiga e escreve uma segunda explicação. Um caso alterado testa se sua explicação se sustenta.

- [Como aplicar o ciclo na wiki](https://aloisiocosta-professor.github.io/python-em-uma-linha/metodo-feynman.html)
- [Protocolo editorial obrigatório](research/protocolo-feynman.md)
- [Decisões e alcance da refatoração](research/revisao-feynman.md)

A referência pedagógica é a orientação institucional [The Power of Teaching, CTLO/Caltech](https://ctlo.caltech.edu/aboutctlo/whoweserve/undergraduates/learning-resources/learning/power-of-teaching), lida integralmente e classificada separadamente dos artigos científicos. As regras de edição desta wiki são uma adaptação autoral. A eficácia desta implementação ainda não foi testada com estudantes.

O diário opcional conserva primeira explicação, lacuna e revisão somente neste navegador, após clicar em **Salvar neste dispositivo**. É possível baixar os textos. A wiki não envia as anotações a servidores nem atribui nota por IA. O ciclo também pode ser realizado em um caderno.

A fonte pedagógica específica está em `tools/feynman-content.mjs`; os componentes estão em `tools/feynman.mjs`. `lessons.json` e as páginas HTML são gerados: edite as fontes, não apenas os arquivos finais. Para alterações interativas, verifique também `node tools/browser-check.mjs` (Chromium local e Node >=22).
