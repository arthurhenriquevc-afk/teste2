import { motion, enterList } from './motion-utils';
document.documentElement.dataset.enhanced = '';
const header = document.querySelector<HTMLElement>('.site-header')!;
const nav = document.querySelector<HTMLElement>('#main-nav')!;
const mobile = document.querySelector<HTMLButtonElement>('.mobile-toggle')!;
const mega = document.querySelector<HTMLElement>('#mega-menu')!;
const triggers = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-mega]'));
const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>('[role=tab]'));
let opener: HTMLElement | null = null;
function closeMega(restore = true) {
 mega.hidden = true;
 triggers.forEach(t=>t.setAttribute('aria-expanded','false'));
 if(restore) opener?.focus();
}
function selectTab(index: number, focus = false) {
 tabs.forEach((t,i)=>{
  t.setAttribute('aria-selected',String(i===index));t.tabIndex=i===index ? 0 : -1;
  document.getElementById(t.getAttribute('aria-controls')!)!.hidden=i!==index;
 });
 const panel = document.getElementById(tabs[index].getAttribute('aria-controls')!)!;
 enterList(panel, '.service-card');
 if(focus) tabs[index].focus();
}
triggers.forEach(t=>{
 t.setAttribute('aria-expanded','false');
 t.addEventListener('click',e=>{
  e.preventDefault();
  if(!mega.hidden && opener===t) {closeMega();return;}
  opener=t;mega.hidden=false;
  motion(mega, [{ clipPath: 'inset(0 0 100% 0)', transform: 'translateY(-8px)' }, { clipPath: 'inset(0 0 0 0)', transform: 'translateY(0)' }], { duration: 420 });
  triggers.forEach(a=>a.setAttribute('aria-expanded',String(a===t)));
  selectTab(t.dataset.mega==='Empresas'?0:1,true);
 });
});
tabs.forEach((t,i)=>{
 t.addEventListener('click',()=>selectTab(i));
 t.addEventListener('keydown',e=>{
  let next=i;
  if(e.key==='ArrowRight') next=(i+1)%tabs.length;
  else if(e.key==='ArrowLeft') next=(i+tabs.length-1)%tabs.length;
  else if(e.key==='Home') next=0;
  else if(e.key==='End') next=tabs.length-1;
  else return;
  e.preventDefault();selectTab(next,true);
 });
});
function closeMobile(restore=false) {nav.removeAttribute('data-open');mobile.setAttribute('aria-expanded','false');mobile.querySelector('span')!.textContent='Menu';if(restore)mobile.focus();}
mobile.addEventListener('click',()=>{
 const open=mobile.getAttribute('aria-expanded')!=='true';
 if(!open){closeMega(false);closeMobile(true);return;}
 nav.dataset.open='';mobile.setAttribute('aria-expanded','true');mobile.querySelector('span')!.textContent='Fechar menu';
 motion(nav, [{ opacity: .4, transform: 'translateY(-10px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 260 });
});
document.querySelector('[data-close-mega]')?.addEventListener('click',()=>closeMega());
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!mega.hidden)closeMega();else closeMobile(true);}});
document.addEventListener('click',e=>{if(!header.contains(e.target as Node)){if(!mega.hidden)closeMega();closeMobile();}});
header.querySelectorAll<HTMLAnchorElement>('a:not([data-mega])').forEach(a=>a.addEventListener('click',()=>{if(!mega.hidden)closeMega();closeMobile();}));
header.addEventListener('focusout',()=>{requestAnimationFrame(()=>{if(!header.contains(document.activeElement)){closeMega(false);closeMobile();}});});
matchMedia('(min-width:961px)').addEventListener('change',()=>{closeMega(false);closeMobile();});
