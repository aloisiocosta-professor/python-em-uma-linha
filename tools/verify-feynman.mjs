import fs from 'node:fs';
import path from 'node:path';
export function verifyFeynman(root,lessons){
 const questions=new Set(),gaps=new Set(),comparisons=new Set();
 const reports=[];
 for(const l of lessons){
  const f=l.feynman;
  if(!f)throw Error('Sem ciclo Feynman: '+l.id);
  for(const key of ['question','plain','analogy','analogyLimit','gapQuestion','gapAnswer','repair'])if(typeof f[key]!=='string'||f[key].trim().length<20)throw Error('Conteúdo incompleto: '+l.id+'/'+key);
  if(!Array.isArray(f.steps)||f.steps.length<3||f.steps.some(step=>typeof step!=='string'||step.length<20))throw Error('Rastreamento ausente: '+l.id);
  for(const [seen,value,kind] of [[questions,f.question,'pergunta'],[gaps,f.gapQuestion,'diagnóstico'],[comparisons,f.analogy,'analogia']]){if(seen.has(value))throw Error('Conteúdo genérico repetido: '+l.id+'/'+kind);seen.add(value);}
  const html=fs.readFileSync(path.join(root,'docs',`aula-${l.id}.html`),'utf8');
  for(const value of ['id="material"','id="first-explanation"','id="knowledge-gap"','id="revised-explanation"','class="gap-answer"','class="transfer-answer"','id="toggle-study"','name="own-words"'])if(!html.includes(value))throw Error('Etapa indisponível ao estudante: '+l.id+'/'+value);
  if(/<details[^>]*\bopen(?:\s|>)/.test(html))throw Error('Resposta revelada antes da tentativa: '+l.id);
  reports.push({id:l.id,question:f.question,uniqueDiagnostic:true,boundedAnalogy:true,workedSteps:f.steps.length,firstGapRevisionFields:true,transferExercise:true});
 }
 const report={recordedAt:new Date().toISOString(),protocol:'2.0',lessons:reports,total:reports.length,scope:'Cobertura editorial e presença do ciclo na página; não avalia a qualidade das explicações nem a aprendizagem. Ver browser-results.json para testes de interação.'};
 fs.writeFileSync(path.join(root,'research/feynman-results.json'),JSON.stringify(report,null,2)+'\n');
 return report.total;
}
