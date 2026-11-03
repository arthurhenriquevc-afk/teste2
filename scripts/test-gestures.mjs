import {chromium} from '@playwright/test';
import {deployment} from '../src/config/deployment.mjs';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
const checks=[];const check=(v,m)=>{assert(v,m);checks.push(m);};
try{
 const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 const page=await context.newPage();await page.goto(new URL(deployment.base,'http://localhost:4321').href);
 const track=page.locator('.window-track');await track.scrollIntoViewIfNeeded();
 const box=await track.boundingBox();const x=box.x+box.width*.43,y=Math.max(120,box.y+50);
 await page.mouse.move(x,y);await page.mouse.down();await page.mouse.move(x-box.width*.65,y,{steps:15});await page.mouse.up();await page.waitForTimeout(200);
 check((await track.evaluate(e=>e.scrollLeft))>500,'Arraste real com mouse avança janela');
 await page.locator('[data-window-filter="Todos"]').click();await track.scrollIntoViewIfNeeded();
 await track.dispatchEvent('pointerdown',{pointerType:'mouse',button:0,pointerId:30,clientX:500});
 await track.dispatchEvent('pointercancel',{pointerType:'mouse',pointerId:30});
 check(await track.getAttribute('data-dragging')===null,'Cancelamento limpa estado de arraste');
 await track.dispatchEvent('pointerdown',{pointerType:'mouse',button:0,pointerId:31,clientX:500});await track.dispatchEvent('lostpointercapture',{pointerId:31});
 check(await track.getAttribute('data-dragging')===null,'Perda de captura limpa estado de arraste');
 await page.locator('[data-mega="Empresas"]').click();await page.mouse.click(5,990);
 check(await page.locator('#mega-menu').isHidden(),'Clique fora fecha mega menu');
 const mobileContext=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});
 const mobile=await mobileContext.newPage();await mobile.goto(new URL(deployment.base,'http://localhost:4321').href);
 const mt=mobile.locator('.window-track');await mt.scrollIntoViewIfNeeded();
 const mb=await mt.boundingBox();const ty=Math.min(500,Math.max(150,mb.y+120));
 const cdp=await mobileContext.newCDPSession(mobile);
 
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:330,y:ty}]});
 for(let x=310;x>=40;x-=30){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y:ty}]});await mobile.waitForTimeout(25);}
 await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await mobile.waitForTimeout(600);
 check(await mt.evaluate(e=>e.scrollLeft)>100,'Gesto de toque real desloca carrossel');
 await mobile.locator('[data-window-filter="Empresas"]').click();
 check(await mobile.locator('[data-window]:visible').count()===6,'Filtro empresas mostra seis janelas');
 check(await mobile.locator('[data-window-service]:visible').count()===8,'Filtro empresas mostra oito serviços');
 await mobile.goto(new URL(deployment.base+'?publico=profissionais#janelas','http://localhost:4321').href);
 check(await mobile.locator('[data-window]:visible').count()===2,'Filtro ativado diretamente por URL');
 const touches=await mobile.locator('a,button,summary,input,select,textarea').evaluateAll(es=>es.filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0&&getComputedStyle(e).visibility!=='hidden'&&(r.width<43.9||r.height<43.9);}).map(e=>({tag:e.tagName,text:e.textContent?.trim().slice(0,60),w:e.getBoundingClientRect().width,h:e.getBoundingClientRect().height})));
 check(touches.length===0,'Todos os controles visíveis medem pelo menos 44 por 44');
 console.log(checks.join('\n'));fs.writeFileSync('reports/gestures.json',JSON.stringify({passed:checks.length,checks},null,2));
}finally{await browser.close();}
