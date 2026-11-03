import { motion, reducedMotion } from './motion-utils';

const header = document.querySelector<HTMLElement>('.site-header')!;
let scrollFrame = 0;
function updateProgress() {
 scrollFrame = 0;
 const max = document.documentElement.scrollHeight - innerHeight;
 header.style.setProperty('--reading-progress', String(max > 0 ? scrollY / max : 0));
 header.toggleAttribute('data-scrolled', scrollY > 24);
}
addEventListener('scroll', () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateProgress); }, { passive: true });
addEventListener('resize', updateProgress);
updateProgress();

const numbers = document.querySelector('#numeros');
if (numbers) {
 const observer = new IntersectionObserver(entries => {
  if (!entries.some(entry => entry.isIntersecting)) return;
  observer.disconnect();
  numbers.querySelectorAll('strong').forEach((element, i) => {
   if (reducedMotion.matches) return;
   const finalText = element.textContent!;
   const target = Number(finalText.replace(/\D/g, ''));
   const spoken = document.createElement('span'); spoken.className = 'sr-only'; spoken.textContent = finalText;
   const visual = document.createElement('span'); visual.setAttribute('aria-hidden', 'true'); visual.textContent = finalText;
   element.replaceChildren(spoken, visual);
   const started = performance.now() + i * 70;
   let frame = 0;
   const finish = () => { cancelAnimationFrame(frame); visual.textContent = finalText; reducedMotion.removeEventListener('change', finish); document.removeEventListener('visibilitychange', onVisibility); };
   const onVisibility = () => { if (document.hidden) finish(); };
   function tick(now: number) {
    const time = Math.max(0, Math.min(1, (now - started) / 1000));
    visual.textContent = '+' + Math.round(target * (1 - Math.pow(1 - time, 3))).toLocaleString('pt-BR');
    if (time < 1) frame = requestAnimationFrame(tick); else finish();
   }
   reducedMotion.addEventListener('change', finish);
   document.addEventListener('visibilitychange', onVisibility);
   frame = requestAnimationFrame(tick);
  });
 }, { threshold: .4 });
 observer.observe(numbers);
}

// One related list is introduced together: field check, calibration, flight and tour.
const quality = document.querySelector('.quality');
if (quality) {
 const observer = new IntersectionObserver(entries => {
  if (!entries.some(entry => entry.isIntersecting)) return;
  observer.disconnect();
  quality.querySelectorAll('article').forEach((element, i) => motion(element, [
   { clipPath: 'inset(0 100% 0 0)', opacity: .5 },
   { clipPath: 'inset(0 0 0 0)', opacity: 1 },
  ], { duration: 500, delay: i * 60, fill: 'backwards' }));
 }, { threshold: .2 });
 observer.observe(quality);
}
