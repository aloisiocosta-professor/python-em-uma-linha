# Protocolo editorial Feynman — versão 2.0

Emenda vigente: versão 3, orientação para o absoluto zero descrita ao final. O texto abaixo registra a base da versão 2.

Vigência: 18/10/2026. Aplica-se a todas as 51 aulas, à orientação inicial, aos projetos e às contribuições futuras. Atende à solicitação de refatorar a wiki para ensinar pelo ciclo de Feynman, preservando uma linha física por arquivo Python.

## Referência e natureza da adaptação

Fonte institucional lida integralmente: CALIFORNIA INSTITUTE OF TECHNOLOGY, Center for Teaching, Learning, & Outreach. *The Power of Teaching*. Sem data de publicação informada na página. Disponível em: https://ctlo.caltech.edu/aboutctlo/whoweserve/undergraduates/learning-resources/learning/power-of-teaching. Acesso em 18/10/2026.

A orientação recomenda leitura inicial, explicação sem notas, identificação e reparação de lacunas, simplificação, exemplos próprios e ensino a outra pessoa. É uma orientação pedagógica institucional, não um experimento sobre este curso. Não se atribuem a Feynman citações populares sem origem verificada, uma norma oficial ou uma lista única de passos obrigatórios.

As decisões abaixo são regras editoriais autorais desta wiki. Perguntas, analogias, mecanismos e atividades foram escritos especificamente para cada aula; não são transcrições da fonte.

## Ciclo obrigatório em cada aula

1. **Escolher uma pergunta concreta.** Especificar o que se quer explicar e imaginar um ouvinte iniciante.
2. **Construir o significado.** Começar com linguagem cotidiana, antes da terminologia técnica. Usar uma comparação familiar e declarar onde ela deixa de representar o mecanismo. Rastrear valores ou estados do exemplo em pelo menos três passos.
3. **Ensinar sem consultar.** Pedir ao estudante que reconstrua a explicação em voz alta, no papel ou em texto. A interface deve poder esconder explicações, código e respostas, sem esconder o espaço de escrita.
4. **Localizar e reparar uma lacuna.** Fazer uma pergunta específica que diferencie entender o mecanismo de repetir palavras. Oferecer uma resposta inicialmente recolhida e um caminho concreto de retorno ao conceito. Pedir registro da dúvida, da investigação e da correção.
5. **Simplificar e revisar.** Produzir uma segunda explicação com termos definidos, relações causais e um exemplo próprio. Comparar a versão inicial com a revisão; declarar também o limite da analogia criada pelo estudante.
6. **Transferir.** Alterar uma entrada ou hipótese, prever o resultado e justificar a mudança antes de consultar a resposta. Se houver dificuldade, voltar à lacuna. Quando possível, ensinar a uma pessoa que possa questionar a explicação.

## Regras de redação

- Explicar o que a operação faz, por que faz e em quais condições funciona.
- Não substituir explicação por nomes como recursão, relaxamento, broadcasting ou closure. Dar o significado acessível e conectá-lo ao nome técnico depois.
- Não infantilizar o leitor nem apagar hipóteses necessárias para parecer simples.
- Usar exemplos com números ou estados intermediários verificáveis. O texto da aula não tem limite de uma linha.
- Manter a compactação dos arquivos Python. `exec` pode representar blocos com escapes, sem esconder que há várias linhas lógicas internas.
- Distinguir analogia, mecanismo, contrato e evidência. Uma comparação não é prova.
- Evitar afirmações de eficácia do curso sem dados. A completude editorial e os testes de software não demonstram compreensão do estudante.

## Revisão e aceitação

Todas as aulas precisam de material específico: pergunta, explicação simples, analogia e limite, rastreamento, diagnóstico, resposta e ação de reparação. O aluno deve poder guardar primeira explicação, lacuna e revisão. As respostas ficam recolhidas até serem abertas; não há bloqueio que obrigue o estudante a seguir uma ordem.

A conferência pessoal verifica uso de palavras próprias, justificativa do mecanismo, reparação da lacuna e exemplo próprio com limite. Não fornece certificado automático. Projetos exigem versões da explicação, contraexemplos e revisão além do programa final.

Verificação técnica: regenerar páginas, executar exemplos, verificar uma linha física e links, testar ocultação/retorno, salvamento e recuperação por aula, exportação e funcionamento quando o armazenamento falhar. Testar larguras de desktop e celular e navegação por teclado. Registrar o alcance real das verificações, sem afirmar auditoria completa de acessibilidade.

## Armazenamento do estudo

O diário é opcional, por aula, salvo apenas mediante ação explícita no navegador do estudante. Não há envio de respostas, coleta de dados pedagógicos ou avaliação por IA. Sem JavaScript, conteúdo e campos permanecem disponíveis e o ciclo pode ser feito no caderno. Exportar oferece uma cópia em texto.

## Emenda versão 3 — público sem conhecimentos anteriores

O percurso passa a ter 76 aulas em nove trilhas, iniciando com computação e raciocínio em situações cotidianas. Toda aula deve declarar o que usa de aulas anteriores, definir termos localmente e identificar a habilidade de raciocínio praticada. A matemática adicional deve ter preparação explícita. As regras anteriores de explicar, diagnosticar e revisar permanecem.

Antes de exigir um comando, explicar arquivo, editor, terminal e interpretador. Antes de exigir um paradigma ou uma arquitetura, apresentar estados, funções, responsabilidades e contratos. A regra de uma linha física organiza o arquivo, sem obrigar o estudante a aprender pela memorização de código compactado.

Evidência deve ser classificada: orientação institucional, fundamento conceitual, experimento externo ou teste local. Não somar essas categorias como se provassem a mesma coisa. Decisões e leitura integral das fontes desta emenda: zero-absoluto.md. A cobertura de pré-requisitos declarados é conferida em curriculum-results.json; não substitui avaliação com iniciantes reais.
