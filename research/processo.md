# Registro do processo

Data de início: 18/10/2026. Autor da solicitação: proprietário do repositório. Execução assistida por IA, sem coavaliador humano ou agente independente.

1. Confirmada a preferência: no máximo uma linha física por arquivo Python; sem objetivo de otimização de desempenho ou memória.
2. Lidas as instruções locais e skills de pesquisa acadêmica, Sites e orientação web. Selecionado GitHub Pages para hospedar a wiki no mesmo repositório pedido pelo usuário.
3. Registrados problema, hipóteses, critérios e limites em protocolo.md antes da seleção final.
4. Realizadas buscas dirigidas: artigos do ecossistema científico Python, educação em uma linha e documentação primária. Não houve busca exaustiva em bases pagas.
5. Selecionados dois artigos para leitura integral, explicitando a versão do manuscrito NumPy. Quatro outras categorias/candidatos foram excluídos nesta rodada; ver triagem.csv.
6. Baixados HTML NumPy v1 e PDF JMLR; extraídos texto completo, tabela, referências e descrições de figuras. Conferência das figuras registrada em leitura.md. Textos integrais externos permanecem apenas em cache local ignorado.
7. Desenvolvidas 51 aulas autorais em cinco trilhas com exemplos, saída esperada, exercício, resposta e limites. Gerados arquivos Python de uma linha e downloads idênticos.
8. Criado ambiente Python 3.14 isolado e instaladas bibliotecas científicas. Versões fixadas em requirements.txt; captura completa do ambiente em environment.txt.
9. Executados testes de cada exemplo, comparação com oráculos, propriedades de ordenação, distâncias BFS e leis de junção. Primeira execução encontrou links para páginas de pesquisa e projetos ainda não geradas; ambas foram implementadas antes da execução final. Não houve falha nas saídas dos 51 exemplos nessa primeira execução.
10. Construída wiki estática responsiva com busca local, downloads e respostas expansíveis. Verificada em Chromium a 1280 e 320 pixels; resultados em browser-results.json. Não foi realizado teste com leitores de tela ou usuários.
11. Salvos código, evidências, decisões e resultados no Git. Criado repositório público autorizado e configurada publicação por GitHub Pages; estado final de publicação é conferido pela API e por HTTP, com registro separado.

## Reproduzir a parte técnica

Use os comandos do README. `node tools/acquire.mjs` recupera os dois artefatos primários se o cache estiver ausente e gera seus hashes. Extração textual utiliza os pacotes opcionais de requirements-research.txt. A leitura crítica é julgamento documentado, não um procedimento automaticamente reproduzível pelo script. Não há promessa de que a busca atual retornará os mesmos resultados ou de que o host preservará os mesmos bytes de HTML.

## Decisões e limitações materiais

A regra foi aplicada também aos arquivos .py de download, não apenas ao texto exibido. Os scripts de construção e verificação são JavaScript e não precisam dessa restrição. O código não foi comprimido em base64: a representação mantém a lógica inspecionável.

O curso contém introduções a tópicos avançados; uma formação de domínio extremo exige continuidade, leitura adicional e projetos extensos. A bibliografia aceita não valida automaticamente cada afirmação do currículo. H2 permanece aberta. Não se afirmou revisão sistemática, ausência global de retratações, replicação dos benchmarks originais ou aprovação por todos os testes possíveis da metodologia científica.
