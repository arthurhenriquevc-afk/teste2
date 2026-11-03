import lighthouse from 'lighthouse';
import {launch} from 'chrome-launcher';
import fs from 'node:fs';
import { deployment } from '../src/config/deployment.mjs';
const chrome=await launch({chromePath:'/usr/bin/chromium',chromeFlags:['--headless','--no-sandbox','--disable-dev-shm-usage']});
try{
 const result=await lighthouse(new URL(deployment.base,'http://localhost:4321').href,{port:chrome.port,output:['json','html'],onlyCategories:['performance','accessibility','best-practices'],logLevel:'error'});
 fs.mkdirSync('reports',{recursive:true});
 fs.writeFileSync('reports/lighthouse-mobile.json',result.report[0]);fs.writeFileSync('reports/lighthouse-mobile.html',result.report[1]);
 console.log(JSON.stringify(Object.fromEntries(Object.entries(result.lhr.categories).map(([k,c])=>[k,Math.round(c.score*100)]))));
 console.log(result.lhr.audits['largest-contentful-paint'].displayValue,result.lhr.audits['cumulative-layout-shift'].displayValue);
}finally{await chrome.kill();}
