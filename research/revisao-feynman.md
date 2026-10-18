# Refatoração pedagógica — versão 2

Solicitação: o proprietário apontou que a versão inicial tinha explicações e exercícios, mas não aplicava o ciclo de Feynman. A deficiência era estrutural e de conteúdo, não apenas de nomenclatura.

## Decisões

Foram reescritos os caminhos de ensino das 51 aulas com material específico: pergunta cotidiana, explicação simples, comparação familiar, limite da comparação, três passos de acompanhamento dos valores, pergunta diagnóstica e caminho de reparação. O conceito técnico anterior permanece como aprofundamento recolhido. Os códigos e seus resultados são preservados; a restrição de uma linha física continua valendo.

Foi introduzido um ciclo ativo: ocultar material para explicar, registrar uma primeira versão, localizar lacuna, investigar, escrever uma revisão e aplicar a explicação a outro caso. Saídas, diagnóstico e respostas de transferência começam recolhidos. A página do método demonstra uma explicação fraca, uma lacuna e sua revisão num exemplo de busca.

Foram refatorados os quatro projetos para exigir explicação, contraexemplo ou diagnóstico, revisão e justificativa dos testes. A página inicial, README, referências e instruções de contribuição passaram a descrever o mesmo protocolo.

## Referência pesquisada

Busca dirigida: `site.caltech.edu Feynman technique learning explain simple teaching`; `site.feynman.com learning technique explain understand`; busca exploratória sobre autoexplicação. Selecionada como orientação institucional a página *The Power of Teaching*, do CTLO/Caltech, lida integralmente. Sua natureza e alcance estão em protocolo-feynman.md. O artigo de Chi et al. apareceu na descoberta, mas não foi incluído como estudo aceito: não houve leitura integral nem avaliação empírica nessa rodada. Nenhum efeito numérico ou promessa de aprendizagem foi inferido a partir dele.

A nova orientação institucional fica separada dos dois artigos científicos anteriormente aceitos e da documentação técnica. É uma referência para o desenho do ciclo; as perguntas e explicações são autorais. Não se afirma que essa fonte valide o formato de uma linha física ou que a implementação reproduza um protocolo único oficial de Feynman.

## Experiência do estudante

O diário usa três campos: primeira explicação, lacuna e revisão. Salvar é uma ação explícita e local por aula. Recuperação, download em texto e remoção são controlados pelo estudante. Não há análise automática da qualidade do texto. Sem JavaScript, é possível ler o conteúdo, abrir respostas, escrever nos campos durante a visita e executar o ciclo no papel; os controles que dependem de JavaScript não são exibidos.

## Validação

O relatório feynman-results.json verifica cobertura editorial das 51 aulas; não mede qualidade de aprendizagem. test-results.json registra 51 exemplos executados, 55 páginas e 760 links locais válidos. Permaneceram aprovadas as propriedades selecionadas de ordenação, BFS e junção. A comparação no Git confirmou que os arquivos Python de exemplo e download não mudaram.

browser-results.json registra testes em Chromium a 1280 e 320 pixels: modo ensinar acionado por teclado e foco no campo correto, ocultação e retorno às explicações, salvamento e recuperação do diário, separação entre aulas, download, remoção, alternativa quando o armazenamento é negado, busca e leitura sem JavaScript. O primeiro teste de teclado usou uma sequência CDP incompleta; o acionamento foi corrigido para enviar Enter com o texto correspondente e trazer a página ao foco, sem mudar o controle nativo do produto. A execução final passou. As capturas foram inspecionadas visualmente. Nenhum estudo com estudantes ou teste com leitor de tela foi realizado.

A publicação será registrada depois que o conteúdo e as verificações forem concluídos. O histórico anterior é preservado para comparar a versão inicial com a refatoração.
