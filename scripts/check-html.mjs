import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { deployment } from '../src/config/deployment.mjs';
const root = path.resolve('dist');
const files = fs.readdirSync(root, { recursive: true }).filter(p => p.endsWith('.html'));
const pending = fs.existsSync('ROTAS-PENDENTES.md') ? fs.readFileSync('ROTAS-PENDENTES.md','utf8') : '';
let errors = 0;
const warned = new Set();
const fail = (f, msg) => { console.error(`FALHA ${f}: ${msg}`); errors++; };
for (const f of files) {
 const html = fs.readFileSync(path.join(root,f),'utf8');
 const bans = [/\[a confirmar\]/i, /a preencher/i, /o mais pedido/i, /drywall e shafts/i, /deslocamento[^.!?]{0,120}custo|custo[^.!?]{0,120}deslocamento/i, /R\$|\bpreço\b/i, /[—–]/u, /LinkedIn/i];
 bans.forEach(re => { if(re.test(html)) fail(f,`conteúdo proibido: ${re}`); });
 let h1 = 0;
 const walk = node => {
  if(node.tagName === 'h1') h1++;
  const attrs = Object.fromEntries((node.attrs || []).map(a => [a.name,a.value]));
  if(node.tagName === 'img' && !Object.hasOwn(attrs,'alt')) fail(f,'imagem sem alt');
  if(node.tagName === 'a') {
   if(!attrs.href || attrs.href === '#') fail(f,'link vazio');
   else if(attrs.href.startsWith(deployment.base)) {
    const url = attrs.href.slice(deployment.base.length).split(/[?#]/)[0];
    if(url && !fs.existsSync(path.join(root,url)) && !fs.existsSync(path.join(root,url,'index.html'))) {
     const route = '/'+url;
     if(!warned.has(route)){console.warn(`AVISO ${route} ${pending.includes(route) ? '(registrada)' : '(não registrada)'}`);warned.add(route);}
    }
   }
  }
  if(Object.hasOwn(attrs,'data-service-name') && /MEP/.test(node.childNodes?.map(n=>n.value||'').join(''))) fail(f,'MEP em serviço');
  (node.childNodes||[]).forEach(walk);
 };
 walk(parse(html));
 if(h1 !== 1) fail(f,`esperado um H1, encontrados ${h1}`);
}
if(!files.length) { console.error('Sem HTML gerado'); errors++; }
if(errors) process.exit(1);
console.log(`HTML verificado: ${files.length} página(s), sem falhas.`);
