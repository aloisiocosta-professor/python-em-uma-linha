# Verificação de publicação

Em 18/10/2026, o repositório público foi criado e recebeu a branch main. GitHub Pages foi configurado para servir /docs dessa branch.

- Repositório: https://github.com/aloisiocosta-professor/python-em-uma-linha
- Wiki: https://aloisiocosta-professor.github.io/python-em-uma-linha/
- Commit de conteúdo e registro de leitura conferido: 519812ebcc4a894dd1c0efa57820e29ad4332ea2.
- API de build de Pages: status built, sem mensagem de erro, para esse commit.
- Consulta HTTP da página inicial: 200; título esperado e 51 links de aulas presentes.
- Workflow de verificação da primeira versão: concluído com sucesso, execução https://github.com/aloisiocosta-professor/python-em-uma-linha/actions/runs/39172515465.
- Testes locais: 51 exemplos executados, 54 páginas e 631 links locais válidos; ordenação em 1.093 entradas e leis de junção em 729 triplas.
- Chromium local: layout em larguras 1280 e 320; busca com resultado e sem resultado; uma linha no código exibido; expansão da resposta.

Este registro documenta o estado observado, não garante disponibilidade futura do host. Alterações posteriores devem repetir as verificações pertinentes.

## Versão 2 — refatoração Feynman verificada

Em 18/10/2026, o commit de conteúdo `2a764c0c5409795d0bbfb9e1bbfcb6c7273b7b5a` foi publicado. As 51 aulas, os quatro projetos e a orientação de estudo passaram a seguir protocolo-feynman.md.

- Verificação remota concluída com sucesso: https://github.com/aloisiocosta-professor/python-em-uma-linha/actions/runs/39176187095.
- Publicação de Pages concluída com sucesso: https://github.com/aloisiocosta-professor/python-em-uma-linha/actions/runs/39176186642.
- API de Pages: built, sem mensagem de erro, para o mesmo commit.
- HTTP 200 e conteúdo versão 2 conferidos em metodo-feynman.html e aula-51.html, incluindo o campo de explicação revisada.
- Validação local: 51 exemplos de uma linha, 55 páginas, 760 links locais; cobertura editorial e testes de interação descritos em revisao-feynman.md.

A página do método está disponível em https://aloisiocosta-professor.github.io/python-em-uma-linha/metodo-feynman.html. Os commits posteriores deste registro apenas documentam a publicação observada.

## Versão 3 — percurso do absoluto zero

Conteúdo verificado no commit `2d65bc4171c55da17dba24222a44a29f8da419d0`: 76 aulas em nove trilhas, vocabulário e pré-requisitos locais, orientação inicial, ponte matemática e página de evidências.

- Verificação remota: https://github.com/aloisiocosta-professor/python-em-uma-linha/actions/runs/39177574158 — sucesso.
- Publicação: https://github.com/aloisiocosta-professor/python-em-uma-linha/actions/runs/39177573989 — sucesso.
- HTTP 200 e conteúdo conferidos em comece-aqui.html e aula-p06.html.
- Verificação local: 76 exemplos de uma linha, 84 páginas e 1.758 links; sequência e pré-requisitos declarados conferidos em curriculum-results.json.
- Testes de leitura e interação no navegador registrados em browser-results.json; limites pedagógicos e leitura das fontes em zero-absoluto.md.

O registro posterior a esse commit documenta o estado observado; a disponibilidade futura depende do host.
