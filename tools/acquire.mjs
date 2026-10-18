import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
const cache=path.join(root,'research/cache');fs.mkdirSync(cache,{recursive:true});
const sources=[{id:'N1',title:'Array Programming with NumPy',version:'arXiv:2006.10256v1',url:'https://arxiv.org/html/2006.10256v1',file:'numpy.html',kind:'author_manuscript',publishedDOI:'10.1038/s41586-020-2649-2'},{id:'S1',title:'Scikit-learn: Machine Learning in Python',version:'JMLR 12 (2011), 2825–2830',url:'https://www.jmlr.org/papers/volume12/pedregosa11a/pedregosa11a.pdf',file:'scikit.pdf',kind:'published_article',pages:6}];
for(const source of sources){const target=path.join(cache,source.file);if(!fs.existsSync(target)){const response=await fetch(source.url);if(!response.ok)throw Error('Download falhou: '+source.url);fs.writeFileSync(target,Buffer.from(await response.arrayBuffer()));}const bytes=fs.readFileSync(target);source.bytes=bytes.length;source.sha256=crypto.createHash('sha256').update(bytes).digest('hex');source.accessedOn='2026-10-18';source.localCacheIgnored=true;source.assessment='incluir somente para afirmações técnicas delimitadas em bibliografia.md';}
fs.writeFileSync(path.join(root,'research/fontes.json'),JSON.stringify({method:'Identificação e hashes dos arquivos efetivamente consultados; a íntegra não é redistribuída no repositório.',sources},null,2)+'\n');console.log('Manifesto de duas fontes gravado com SHA-256; cache excluído do Git.');
