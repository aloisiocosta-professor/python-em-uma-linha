import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import {spawn} from 'node:child_process';
const root=path.resolve(import.meta.dirname,'..');
const expectedLessonCount=JSON.parse(fs.readFileSync(path.join(root,'lessons.json'),'utf8')).length;
const server=http.createServer((req,res)=>{const url=new URL(req.url,'http://localhost');const relative=url.pathname==='/'?'index.html':decodeURIComponent(url.pathname.slice(1));const file=path.resolve(root,'docs',relative);if(!file.startsWith(path.join(root,'docs')+path.sep)){res.writeHead(403);res.end();return;}try{const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.py':'text/plain'};res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));}catch{res.writeHead(404);res.end();}});
await new Promise(resolve=>server.listen(8766,'127.0.0.1',resolve));
const profile=fs.mkdtempSync('/tmp/python-wiki-chrome-');
const chrome=spawn('/usr/bin/chromium',['--headless','--no-sandbox','--disable-gpu','--disable-dev-shm-usage','--remote-debugging-port=9226','--remote-allow-origins=*','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'});
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
let ws;const pending=new Map();let sequence=0;
try{
 let targets;for(let i=0;i<60;i++){try{targets=await (await fetch('http://127.0.0.1:9226/json')).json();break;}catch{await pause(250);}}
 if(!targets)throw Error('Chromium não iniciou');
 ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
 await new Promise((resolve,reject)=>{ws.onopen=resolve;ws.onerror=reject;});
 ws.onmessage=e=>{const message=JSON.parse(e.data);if(message.id){const callbacks=pending.get(message.id);if(callbacks){pending.delete(message.id);message.error?callbacks.reject(Error(JSON.stringify(message.error))):callbacks.resolve(message.result);}}};
 const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++sequence;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
 const evaluate=async expression=>{const result=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(result.exceptionDetails)throw Error(JSON.stringify(result.exceptionDetails));return result.result.value;};
 const navigate=async page=>{await send('Page.navigate',{url:'http://127.0.0.1:8766/'+page});for(let i=0;i<40;i++){await pause(100);if(await evaluate(`document.readyState==='complete'&&location.pathname.endsWith(${JSON.stringify(page)})`))return;}throw Error('Navegação expirou');};
 const checks=[];
 const downloads=fs.mkdtempSync('/tmp/python-wiki-downloads-');
 await send('Browser.setDownloadBehavior',{behavior:'allow',downloadPath:downloads});
 for(const width of [1280,320]){
  await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<600});
  await navigate('index.html');
  const layout=await evaluate('({width:innerWidth,scroll:document.documentElement.scrollWidth,cards:document.querySelectorAll(".lesson-card").length})');
  if(layout.scroll>width||layout.cards!==expectedLessonCount)throw Error('Layout inválido '+JSON.stringify(layout));
  if(await evaluate(`document.querySelector('.lesson-card a').getAttribute('href')`)!=='aula-z01.html')throw Error('Início do percurso fora de ordem');
  for(const page of ['comece-aqui.html','glossario.html','ponte-matematica.html','evidencias.html','aula-z01.html','aula-p06.html']){
   await navigate(page);
   if(await evaluate(`document.documentElement.scrollWidth`)>width)throw Error('Página do iniciante transborda: '+page);
   if(page.startsWith('aula-')&&!await evaluate(`document.querySelector('.lesson-terms')&&document.querySelector('.preparation')`))throw Error('Apoio do iniciante ausente: '+page);
   if(page==='aula-z01.html'){const image=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('/tmp/python-wiki-zero-'+width+'.png',Buffer.from(image.data,'base64'));}
  }
  await navigate('index.html');
  await evaluate(`document.querySelector('#busca').value='dijkstra';document.querySelector('#busca').dispatchEvent(new Event('input'))`);
  await pause(350);
  const search=await evaluate(`({count:document.querySelectorAll('.lesson-card:not([hidden])').length,text:document.querySelector('#resultados').textContent})`);
  if(search.count!==1)throw Error('Busca falhou');
  await evaluate(`document.querySelector('#busca').value='tema-inexistente';document.querySelector('#busca').dispatchEvent(new Event('input'))`);
  if(await evaluate(`document.querySelectorAll('.lesson-card:not([hidden])').length`)!==0)throw Error('Busca vazia falhou');
  await navigate('aula-16.html');
  const lesson=await evaluate(`({scroll:document.documentElement.scrollWidth,lines:document.querySelector('#codigo').textContent.split('\\n').length,details:document.querySelector('details').open})`);
  if(lesson.scroll>width||lesson.lines!==1||lesson.details)throw Error('Aula inválida '+JSON.stringify(lesson));
  await evaluate(`document.querySelector('summary').click()`);
  if(!await evaluate(`document.querySelector('details').open`))throw Error('Resposta não abriu');
  await evaluate(`document.querySelector('#toggle-study').focus()`);
  await send('Page.bringToFront');
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',text:'\r',unmodifiedText:'\r',windowsVirtualKeyCode:13,nativeVirtualKeyCode:13});
  await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
  await pause(100);
  const teaching=await evaluate(`({hidden:[...document.querySelectorAll('[data-study]')].every(x=>x.hidden),focus:document.activeElement.id,expanded:document.querySelector('#toggle-study').getAttribute('aria-expanded')})`);
  if(!teaching.hidden||teaching.focus!=='first-explanation'||teaching.expanded!=='false')throw Error('Modo ensinar por teclado falhou: '+JSON.stringify(teaching));
  await evaluate(`document.querySelector('#first-explanation').value='Visito os lugares por camadas.';document.querySelector('#knowledge-gap').value='Por que marcar ao inserir?';document.querySelector('#revised-explanation').value='Marco antes de inserir para evitar descoberta repetida.';document.querySelector('[name="mechanism"]').checked=true;document.querySelector('#journal').requestSubmit()`);
  if(!await evaluate(`document.querySelector('#status').textContent.includes('salvas')`))throw Error('Salvar falhou');
  await navigate('aula-17.html');
  if(await evaluate(`document.querySelector('#first-explanation').value`)!=='')throw Error('Diário vazou para outra aula');
  await navigate('aula-16.html');
  if(!await evaluate(`document.querySelector('#first-explanation').value==='Visito os lugares por camadas.'&&document.querySelector('[name="mechanism"]').checked`))throw Error('Restaurar diário falhou');
  await evaluate(`document.querySelector('#download-journal').click()`);
  let exported;for(let i=0;i<40;i++){await pause(100);const file=path.join(downloads,'aula-16-feynman.txt');if(fs.existsSync(file)){exported=fs.readFileSync(file,'utf8');break;}}
  if(!exported?.includes('Marco antes de inserir')||!exported.includes('PRIMEIRA EXPLICAÇÃO'))throw Error('Exportação incompleta');
  await evaluate(`window.originalSetItem=Storage.prototype.setItem;Storage.prototype.setItem=function(){throw new DOMException('Negado','SecurityError')};document.querySelector('#journal').requestSubmit()`);
  if(!await evaluate(`document.querySelector('#status').textContent.includes('não permitiu salvar')`))throw Error('Falha de armazenamento sem alternativa');
  await evaluate(`Storage.prototype.setItem=window.originalSetItem;document.querySelector('#clear-journal').click()`);
  await navigate('aula-16.html');
  if(await evaluate(`document.querySelector('#first-explanation').value`)!=='')throw Error('Apagar diário falhou');
  await evaluate(`document.querySelector('#toggle-study').click();document.querySelector('#toggle-study').click()`);
  if(!await evaluate(`!document.querySelector('#material').hidden&&document.activeElement.id==='modelo'`))throw Error('Retorno à revisão falhou');
  await navigate('metodo-feynman.html');
  if(await evaluate(`document.documentElement.scrollWidth`)>width)throw Error('Página do método transborda');
  await navigate('aula-16.html');
  await evaluate('window.scrollTo(0,0)');
  const shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('/tmp/python-wiki-'+width+'.png',Buffer.from(shot.data,'base64'));
  checks.push({width,home:layout,beginnerPages:'start/glossary/maths/evidence/zero/architecture: pass',search,lesson,disclosure:'pass',teaching,journal:'save/restore/isolation/export/delete/storage-denied: pass',reviewReturn:'pass',methodLayout:'pass'});
 }
 await send('Emulation.setScriptExecutionDisabled',{value:true});
 await navigate('aula-16.html');
 const noJavaScript=await evaluate(`({material:!document.querySelector('#material').hidden,fields:document.querySelectorAll('textarea').length,buttonsHidden:document.querySelector('#toggle-study').hidden&&document.querySelector('#journal-actions').hidden})`);
 if(!noJavaScript.material||noJavaScript.fields!==3||!noJavaScript.buttonsHidden)throw Error('Alternativa sem JS falhou');
 fs.writeFileSync(path.join(root,'research/browser-results.json'),JSON.stringify({recordedAt:new Date().toISOString(),browser:await send('Browser.getVersion'),checks,noJavaScript,limits:'Sem ensaio com leitor de tela ou usuários; não é auditoria WCAG completa. Os testes de formulário usam perfil temporário local.'},null,2)+'\n');
 console.log('Chromium: desktop/celular, busca, ensino sem consulta por teclado, retorno, diário por aula, exportação, falha de armazenamento e alternativa sem JS passaram.');
}finally{ws?.close();chrome.kill('SIGTERM');server.close();}
