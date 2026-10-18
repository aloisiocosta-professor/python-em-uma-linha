import fs from 'node:fs';
import path from 'node:path';
export function verifyCurriculum(root,lessons){
 const seen=new Set(),groups=new Set();const report=[];
 if(lessons[0]?.id!=='z01')throw Error('O percurso precisa começar sem pré-requisitos');
 for(const l of lessons){
  if(seen.has(l.id))throw Error('Identificador duplicado: '+l.id);
  if(!l.scaffold||!l.scaffold.terms?.length||!l.scaffold.skill)throw Error('Sem vocabulário/objetivo: '+l.id);
  for(const id of l.scaffold.prerequisites)if(!seen.has(id))throw Error('Conhecimento usado antes de ensinado: '+l.id+' → '+id);
  seen.add(l.id);groups.add(l.group);
  const html=fs.readFileSync(path.join(root,'docs',`aula-${l.id}.html`),'utf8');
  for(const marker of ['Palavras desta aula','Antes desta aula','Você vai praticar:','comece-aqui.html#executar'])if(!html.includes(marker))throw Error('Apoio ausente da página: '+l.id);
  report.push({id:l.id,position:l.position,prerequisites:l.scaffold.prerequisites,definedTerms:l.scaffold.terms.length,thinkingSkill:l.scaffold.skill});
 }
 const home=fs.readFileSync(path.join(root,'docs/index.html'),'utf8');
 const catalog=[...home.matchAll(/<li class="lesson-card"[^>]*><a href="aula-([^".]+)\.html"/g)].map(m=>m[1]);
 if(JSON.stringify(catalog)!==JSON.stringify(lessons.map(l=>l.id)))throw Error('Catálogo discorda da sequência de estudo');
 fs.writeFileSync(path.join(root,'research/curriculum-results.json'),JSON.stringify({recordedAt:new Date().toISOString(),total:lessons.length,tracks:groups.size,firstLesson:'z01',oldURLsPreserved:[...Array(51)].every((_,i)=>seen.has(String(i+1).padStart(2,'0'))),lessons:report,limits:'Verifica ordem declarada e apoios presentes. Não prova que todo termo possível foi explicado nem mede aprendizagem.'},null,2)+'\n');
 return lessons.length;
}
