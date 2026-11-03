import {chromium} from '@playwright/test';
import {deployment} from '../src/config/deployment.mjs';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});const checks=[];
try{
 for(const width of [320,390]){
  const page=await browser.newPage({viewport:{width,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});await page.goto(new URL(deployment.base,'http://localhost:4321').href);
  for(const selector of ['[data-hero-next]','[data-window-next]','#phone','button[type=submit]']){
   await page.locator(selector).evaluate(e=>{const r=e.getBoundingClientRect();scrollTo(0,scrollY+r.y+r.height/2-802);});await page.waitForTimeout(60);
   const hit=await page.locator(selector).evaluate(e=>{const r=e.getBoundingClientRect();const f=document.querySelector('.floating-whatsapp').getBoundingClientRect();const overlap=r.x<f.right&&r.right>f.x&&r.y<f.bottom&&r.bottom>f.y;const x=r.right-18,y=r.y+r.height/2;return {overlap,hit:e.contains(document.elementFromPoint(x,y))||e===document.elementFromPoint(x,y)};});
   assert(!hit.overlap&&hit.hit,`${width}: ${selector} coberto`);checks.push(`${width}px: ${selector} disponível na faixa inferior`);
  }
  await page.evaluate(()=>scrollTo(0,0));await page.locator('.mobile-toggle').click();
  const collisions=await page.evaluate(()=>{const f=document.querySelector('.floating-whatsapp').getBoundingClientRect();return ['.mobile-toggle','.logo'].filter(s=>{const r=document.querySelector(s).getBoundingClientRect();return r.x<f.right&&r.right>f.x&&r.y<f.bottom&&r.bottom>f.y;});});assert(collisions.length===0);checks.push(`${width}px: cabeçalho sem colisão com Menu/Fechar menu e logo`);
  await page.close();
 }
 console.log(checks.join('\n'));fs.writeFileSync('reports/floating.json',JSON.stringify({passed:checks.length,checks},null,2));
}finally{await browser.close();}
