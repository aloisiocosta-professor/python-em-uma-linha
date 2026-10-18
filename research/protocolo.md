# Protocolo de pesquisa — versão 1

Registrado em 18/10/2026 antes da seleção final. Revisão exploratória dirigida, realizada por um agente; não é revisão sistemática exaustiva, revisão por pares ou certificação de artigos.

## Problema, hipótese e objetivo

Problema: aprender Python aplicado à ciência e engenharia da computação sob a restrição de no máximo uma linha física por arquivo .py. Hipótese técnica H1: os exemplos deste curso podem preservar o comportamento esperado com essa restrição. Hipótese pedagógica H2: o formato ajuda este estudante a aprender; permanece não testada. Objetivo: produzir wiki progressiva, exemplos verificáveis e rastreabilidade entre fontes e afirmações. Oportunidade: estudar expressões, composição e representação de programas. Limite: uma linha física não implica uma expressão, simplicidade semântica ou domínio integral de uma área.

## Busca e elegibilidade

Busca dirigida na web: artigos originais do ecossistema científico Python e documentação primária dos mantenedores. Consultas: `site.jmlr.org scikit-learn machine learning Python 2011 Pedregosa`; `Array programming with NumPy Harris 2020`; `one-line Python programming education study readability`; consultas de sintaxe e APIs nos domínios docs.python.org, numpy.org e scikit-learn.org. Data: 18/10/2026. Sem limite inferior de data; APIs atuais conferidas separadamente dos artigos históricos.

Artigo elegível: identidade verificável; texto completo acessível e lido; correspondência explícita com uma unidade curricular; questão, desenho, evidência e limites extraíveis; ausência de extrapolação necessária para justificar o uso. Seleção é por adequação à afirmação, não por aprovação universal de uma publicação. Documentação técnica entra em categoria separada. Blogs, metadados isolados, resumos sem íntegra e fontes sem relação direta não entram na bibliografia científica aceita.

## Etapas de avaliação

1. Identificar fonte e versão.
2. Examinar elegibilidade e acesso à íntegra.
3. Ler texto, referências, tabelas e descrições de figuras; registrar limites de extração.
4. Extrair questão, desenho, resultados e ameaças à validade.
5. Vincular a uma afirmação restrita do curso.
6. Implementar exemplos autorais e testar saídas, casos extremos e linha física.
7. Publicar decisões, resultados e incertezas; registrar mudanças no Git.

Uma fonte que não passa fica fora da bibliografia aceita. O registro de exclusões é um artefato metodológico separado, não recomendação de leitura. Não se declara que um artigo passou por todos os testes possíveis da ciência: não houve replicação integral dos experimentos dos autores, segunda triagem independente ou investigação exaustiva de retratações.

## Critérios de teste do curso

Cada arquivo Python deve ter uma linha física não vazia, compilar e executar isoladamente em até 30 segundos. Comparar a saída com um oráculo registrado. Para algoritmos, testar casos adicionais e invariantes. Para cálculos aproximados, usar tolerância e residual. Para aprendizado de máquina, separar treino e teste e impedir ajuste do pré-processamento com dados de teste. Registrar versões efetivamente instaladas.

H2 exigiria estudo próprio: consentimento dos participantes, tarefas equivalentes com formatos compacto e convencional, ordem contrabalançada, teste de conhecimento anterior, desfecho primário de acertos em problemas novos, retenção posterior, tamanho de amostra planejado, intervalos de confiança e divulgação de resultados negativos. Nenhum participante foi recrutado e nenhum dado pedagógico foi coletado.

## Emenda editorial de 18/10/2026 — versão 2

Por solicitação do proprietário, o desenho pedagógico passa a seguir research/protocolo-feynman.md em todas as aulas e projetos. H1 e H2 mantêm seus significados e limites; a adoção do ciclo de Feynman não equivale a testar H2. A orientação institucional do Caltech foi lida integralmente e é classificada separadamente dos artigos científicos. As decisões e verificações da refatoração estão em revisao-feynman.md e nos relatórios correspondentes.
