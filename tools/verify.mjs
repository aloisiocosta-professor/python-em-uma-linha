import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {verifyFeynman} from './verify-feynman.mjs';
const root=path.resolve(import.meta.dirname,'..');
const py=process.env.PYTHON||path.join(root,'.venv/bin/python');
const lessons=JSON.parse(fs.readFileSync(path.join(root,'lessons.json')));
const feynmanLessons=verifyFeynman(root,lessons);
const results=[];
const run=(code)=>{const r=spawnSync(py,['-c',code],{cwd:root,encoding:'utf8',timeout:30000,env:{...process.env,OPENBLAS_NUM_THREADS:'1',OMP_NUM_THREADS:'1'}});if(r.error||r.status!==0)throw Error(r.error?.message||r.stderr||'Processo falhou');return r.stdout.trim();};
for(const l of lessons){const file=path.join(root,'examples',l.id+'.py');const code=fs.readFileSync(file,'utf8');if(code.split(/\r\n|\n|\r/).filter((s,i,a)=>i<a.length-1||s!=='').length!==1)throw Error('Mais de uma linha: '+file);if(code.trim()!==l.code)throw Error('Exemplo divergente: '+l.id);if(fs.readFileSync(path.join(root,'docs/examples',l.id+'.py'),'utf8')!==code)throw Error('Download divergente: '+l.id);const output=run(code);if(output!==l.expected)throw Error(`${l.id}: esperado ${l.expected}; obtido ${output}`);results.push({id:l.id,physicalLines:1,compileAndRun:'pass',expectedOutput:'pass'});}
const q=lessons.find(l=>l.title==='Ordenação por partição');
run(`import contextlib,io,itertools\nwith contextlib.redirect_stdout(io.StringIO()):exec(${JSON.stringify(q.code)})\nfor n in range(7):\n for xs in itertools.product(range(3),repeat=n):assert q(list(xs))==sorted(xs)\nassert q([])==[]`);
const bfs=lessons.find(l=>l.title==='Grafo e busca em largura');
run(`import contextlib,io\nwith contextlib.redirect_stdout(io.StringIO()):exec(${JSON.stringify(bfs.code)})\nassert d=={0:0,1:1,2:1,3:2}`);
const merge=lessons.find(l=>l.title==='Modelo de consistência por semirreticulado');
run(`import contextlib,io,itertools\nwith contextlib.redirect_stdout(io.StringIO()):exec(${JSON.stringify(merge.code)})\nxs=list(itertools.product(range(3),repeat=2))\nfor a,b,c in itertools.product(xs,repeat=3):\n assert merge(a,b)==merge(b,a)\n assert merge(merge(a,b),c)==merge(a,merge(b,c))\n assert merge(a,a)==a`);
const pages=fs.readdirSync(path.join(root,'docs')).filter(f=>f.endsWith('.html'));
let linkCount=0;
for(const page of pages){const html=fs.readFileSync(path.join(root,'docs',page),'utf8');for(const m of html.matchAll(/(?:href|src)="([^"#]+)"/g)){if(/^(?:https?:|mailto:)/.test(m[1]))continue;const target=m[1].split('#')[0];if(!fs.existsSync(path.join(root,'docs',target)))throw Error(`Link quebrado ${page} → ${target}`);linkCount++;}if(!html.includes('lang="pt-BR"')||!html.includes('id="conteudo"'))throw Error('Estrutura ausente: '+page);}
const report={recordedAt:new Date().toISOString(),python:run('import sys;print(sys.version)'),examples:results,feynmanLessons,additionalChecks:{quicksort:'1093 entradas finitas comparadas com sorted',bfs:'mapa completo de distâncias do exemplo',join:'comutatividade, associatividade e idempotência em 729 triplas'},htmlPages:pages.length,localLinks:linkCount,browserQA:'Ver registro separado; este verificador não simula navegador.'};
fs.writeFileSync(path.join(root,'research/test-results.json'),JSON.stringify(report,null,2)+'\n');
console.log(`${results.length} exemplos executados, uma linha por arquivo; ${pages.length} páginas; ${linkCount} links locais válidos; propriedades adicionais passaram.`);
