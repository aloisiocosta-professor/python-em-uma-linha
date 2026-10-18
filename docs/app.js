const search=document.querySelector('#busca');
if(search){let timer;search.addEventListener('input',()=>{const query=search.value.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/\p{Diacritic}/gu,'');let count=0;document.querySelectorAll('.lesson-card').forEach(card=>{const text=card.dataset.search.normalize('NFD').replace(/\p{Diacritic}/gu,'');card.hidden=!text.includes(query);if(!card.hidden)count++;});document.querySelectorAll('.module').forEach(group=>{group.hidden=![...group.querySelectorAll('.lesson-card')].some(card=>!card.hidden);});clearTimeout(timer);timer=setTimeout(()=>{document.querySelector('#resultados').textContent=`${count} aula${count===1?'':'s'} encontrada${count===1?'':'s'}`;},250);});}
document.querySelectorAll('.copy').forEach(button=>button.addEventListener('click',async()=>{const code=document.getElementById(button.dataset.target).textContent;try{await navigator.clipboard.writeText(code);document.querySelector('#status').textContent='Código copiado: uma linha física.';}catch{document.querySelector('#status').textContent='Selecione o código e use a função copiar do navegador.';}setTimeout(()=>{document.querySelector('#status').textContent='';},4000);}));
const journal=document.querySelector('#journal');
if(journal){
 const status=document.querySelector('#status');
 const fields=[...journal.querySelectorAll('textarea,input[type="checkbox"]')];
 const storageKey=`python-uma-linha:feynman:2:${journal.dataset.lesson}`;
 const collect=()=>Object.fromEntries(fields.map(field=>[field.name,field.type==='checkbox'?field.checked:field.value]));
 const fill=values=>fields.forEach(field=>{if(field.type==='checkbox')field.checked=values[field.name]===true;else field.value=typeof values[field.name]==='string'?values[field.name]:'';});
 try{const saved=localStorage.getItem(storageKey);if(saved)fill(JSON.parse(saved));}catch{/* A prática funciona também sem armazenamento. */}
 document.querySelector('#journal-actions').hidden=false;
 const toggle=document.querySelector('#toggle-study');toggle.hidden=false;
 const reveal=()=>{document.querySelectorAll('[data-study]').forEach(section=>{section.hidden=false;});toggle.setAttribute('aria-expanded','true');toggle.textContent='Ocultar explicações e ensinar';};
 toggle.addEventListener('click',()=>{
  if(toggle.getAttribute('aria-expanded')==='true'){
   document.querySelectorAll('[data-study]').forEach(section=>{section.hidden=true;});
   toggle.setAttribute('aria-expanded','false');toggle.textContent='Reabrir explicações para investigar';
   document.querySelector('#first-explanation').focus();status.textContent='Explicações, código e respostas ocultos. Ensine com suas palavras.';
  }else{reveal();document.querySelector('#modelo').focus();status.textContent='Material reaberto. Investigue o ponto que faltou explicar.';}
 });
 document.querySelectorAll('.review-study').forEach(link=>link.addEventListener('click',()=>{reveal();document.querySelector('#modelo').focus();}));
 journal.addEventListener('submit',event=>{event.preventDefault();try{localStorage.setItem(storageKey,JSON.stringify(collect()));status.textContent='Anotações desta aula salvas somente neste navegador.';}catch{status.textContent='O navegador não permitiu salvar. Use Baixar minhas explicações para conservar seu texto.';}});
 document.querySelector('#clear-journal').addEventListener('click',()=>{try{localStorage.removeItem(storageKey);}catch{}fill({});status.textContent='Anotações desta aula apagadas neste navegador.';document.querySelector('#first-explanation').focus();});
 document.querySelector('#download-journal').addEventListener('click',()=>{const data=collect();const text=`Aula ${journal.dataset.lesson}: ${document.querySelector('h1').textContent}\nProtocolo Feynman da wiki v2\n\nPRIMEIRA EXPLICAÇÃO\n${data.first}\n\nLACUNA E INVESTIGAÇÃO\n${data.gap}\n\nEXPLICAÇÃO REVISADA\n${data.revision}\n\nCONFERÊNCIA PESSOAL (NÃO É CERTIFICADO)\n${fields.filter(field=>field.type==='checkbox').map(field=>`${field.checked?'[x]':'[ ]'} ${field.parentElement.textContent.trim()}`).join('\n')}\n`;const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download=`aula-${journal.dataset.lesson}-feynman.txt`;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='Arquivo de explicações preparado para download.';});
}
