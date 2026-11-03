import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {deployment} from '../src/config/deployment.mjs';
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'union-html-check-'));
const script=path.resolve('scripts/check-html.mjs');
const fixtures=[
 ['pendência','[a confirmar]'],['campo provisório','a preencher'],['superlativo','o mais pedido'],['serviço MEP','<h3 data-service-name>Serviço MEP</h3>'],['redação proibida','drywall e shafts'],['custo','custo de deslocamento'],['moeda','R$'],['valor','preço'],['travessão','—'],['meia risca','–'],['rede proibida','LinkedIn'],['H1 duplicado','<h1>Outro</h1>'],['imagem sem alt','<img src="teste.webp">'],['link vazio','<a href="">Link</a>'],['âncora vazia','<a href="#">Link</a>'],
];
try{
 fs.mkdirSync(path.join(dir,'dist'));
 for(const [label,body] of fixtures){fs.writeFileSync(path.join(dir,'dist/index.html'),`<!doctype html><html lang="pt-BR"><head><title>UNION3D</title></head><body><h1>UNION3D</h1>${body}</body></html>`);const r=spawnSync(process.execPath,[script],{cwd:dir,encoding:'utf8'});if(r.error)throw r.error;if(r.status!==1)throw Error(`Verificador não rejeitou ${label}`);}
 fs.writeFileSync(path.join(dir,'dist/index.html'),`<h1>UNION3D</h1><a href="${deployment.base}rota-futura/">Serviço</a>`);
 const r=spawnSync(process.execPath,[script],{cwd:dir,encoding:'utf8'});if(r.error)throw r.error;if(r.status!==0||!r.stderr.includes('AVISO'))throw Error('Rota futura deve apenas avisar: '+r.stdout+' '+r.stderr+' status='+r.status+' signal='+r.signal+' error='+r.error);
 console.log(`${fixtures.length} violações rejeitadas; rota futura gera aviso sem falhar.`);
}finally{fs.rmSync(dir,{recursive:true,force:true});}
