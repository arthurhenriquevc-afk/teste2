import fs from 'node:fs';
import {parse} from 'parse5';
import {home} from '../src/data/home.ts';
import {services} from '../src/data/services.ts';
import {windows} from '../src/data/windows.ts';
import {cities} from '../src/data/cities.ts';
const doc=parse(fs.readFileSync('dist/index.html','utf8'));
const texts=[];
const walk=n=>{if(n.nodeName==='#text')texts.push(n.value);if(n.tagName!=='script'&&n.tagName!=='style')(n.childNodes||[]).forEach(walk);};walk(doc);
const normalize=s=>s.replace(/\s+/g,' ').trim();
const html=normalize(texts.join(' '));
const expected=[];
const add=v=>{if(typeof v==='string')expected.push(v);else if(Array.isArray(v))v.forEach(add);};
Object.entries(home).forEach(([key,value])=>{
 if(['hero','problems','tech','faq'].includes(key))value.forEach(row=>Object.entries(row).forEach(([k,v])=>{if(!['image','alt'].includes(k))add(v);}));else add(value);
});
services.forEach(s=>add([s.name,s.description]));windows.forEach(w=>add([w.label,w.title,w.scan]));add(cities);
let failures=0;for(const text of expected){if(!html.includes(normalize(text))){console.error('COPY ausente ou alterada:',text);failures++;}}
if(failures)process.exit(1);console.log(`Copy conferida: ${expected.length} textos integrais de HOME.md nos dados e no HTML.`);
