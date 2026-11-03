const track = document.querySelector<HTMLElement>('.window-track')!;
const windows = Array.from(track.querySelectorAll<HTMLElement>('[data-window]'));
const filters = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-window-filter]'));
const prev = document.querySelector<HTMLButtonElement>('[data-window-prev]')!;
const next = document.querySelector<HTMLButtonElement>('[data-window-next]')!;
let visible = windows;
let index = 0;
const reduced = matchMedia('(prefers-reduced-motion:reduce)');
function position(w:HTMLElement){return w.getBoundingClientRect().left-track.getBoundingClientRect().left+track.scrollLeft;}
function update(){
 document.querySelector('[data-window-count]')!.textContent=`${String(index+1).padStart(2,'0')} / ${String(visible.length).padStart(2,'0')}`;
 prev.disabled=index===0;next.disabled=index===visible.length-1;
}
function go(i:number){index=Math.max(0,Math.min(visible.length-1,i));track.scrollTo({left:position(visible[index]),behavior:reduced.matches?'instant':'smooth'});update();}
function filter(audience:string, save=false){
 if(!['Todos','Empresas','Profissionais'].includes(audience)) audience='Todos';
 windows.forEach(w=>{
  let matches=0;
  w.querySelectorAll<HTMLElement>('[data-window-service]').forEach(s=>{s.hidden=audience!=='Todos'&&s.dataset.windowService!==audience;if(!s.hidden)matches++;});
  w.hidden=matches===0;
 });
 visible=windows.filter(w=>!w.hidden);index=0;
 filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.windowFilter===audience)));
 track.scrollTo({left:0,behavior:'instant'});update();
 if(save){const url=new URL(location.href);if(audience==='Todos')url.searchParams.delete('publico');else url.searchParams.set('publico',audience.toLowerCase());url.hash='janelas';history.replaceState(null,'',url);}
}
filters.forEach(b=>b.addEventListener('click',()=>filter(b.dataset.windowFilter!,true)));
prev.addEventListener('click',()=>go(index-1));next.addEventListener('click',()=>go(index+1));
track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();go(index+1);}else if(e.key==='ArrowLeft'){e.preventDefault();go(index-1);}else if(e.key==='Home'){e.preventDefault();go(0);}else if(e.key==='End'){e.preventDefault();go(visible.length-1);}});
let scrollTimer:ReturnType<typeof setTimeout>;
track.addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{index=visible.reduce((best,w,i)=>Math.abs(position(w)-track.scrollLeft)<Math.abs(position(visible[best])-track.scrollLeft)?i:best,0);update();},100);});
let drag:{x:number,left:number,id:number,moved:boolean}|null=null;
track.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0||(e.target as HTMLElement).closest('a,button'))return;drag={x:e.clientX,left:track.scrollLeft,id:e.pointerId,moved:false};});
track.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x;if(Math.abs(dx)>8&&!drag.moved){drag.moved=true;track.setPointerCapture(e.pointerId);track.dataset.dragging='';}if(drag.moved){e.preventDefault();track.scrollLeft=drag.left-dx;}});
function endDrag(){if(!drag)return;const old=drag;drag=null;delete track.dataset.dragging;if(track.hasPointerCapture(old.id))track.releasePointerCapture(old.id);if(old.moved){index=visible.reduce((best,w,i)=>Math.abs(position(w)-track.scrollLeft)<Math.abs(position(visible[best])-track.scrollLeft)?i:best,0);go(index);}}
track.addEventListener('pointerup',endDrag);track.addEventListener('pointercancel',endDrag);track.addEventListener('lostpointercapture',endDrag);window.addEventListener('blur',endDrag);
track.addEventListener('focusin',e=>{const w=(e.target as HTMLElement).closest<HTMLElement>('[data-window]');if(w&&visible.includes(w))go(visible.indexOf(w));});
document.querySelectorAll<HTMLAnchorElement>('[data-filter-target]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();filter(a.dataset.filterTarget!,true);document.getElementById('janelas')!.scrollIntoView({behavior:reduced.matches?'instant':'smooth'});}));
function fromURL(){const a=new URL(location.href).searchParams.get('publico');filter(a==='empresas'?'Empresas':a==='profissionais'?'Profissionais':'Todos');}
fromURL();window.addEventListener('popstate',fromURL);
