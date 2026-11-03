import { reducedMotion } from './motion-utils';

const scene = document.querySelector<HTMLElement>('[data-survey-scene]');
if (scene) {
 const canvas = scene.querySelector('canvas')!;
 const ctx = canvas.getContext('2d');
 if (ctx) initialize(scene, canvas, ctx);
}

function initialize(scene: HTMLElement, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
 type Point = [number, number, number];
 const points: Point[] = [];
 const lines: [Point, Point][] = [];
 // A deliberately synthetic architectural study: floor, two walls, and three frames.
 for (let x = -1; x <= 1.001; x += .08) {
  for (let z = -1; z <= 1.001; z += .08) points.push([x, .65, z]);
  for (let y = -.8; y <= .651; y += .08) points.push([x, y, -1]);
 }
 for (let z = -1; z <= 1.001; z += .08)
  for (let y = -.8; y <= .651; y += .08) points.push([1, y, z]);
 function line(a: Point, b: Point) { lines.push([a, b]); }
 for (const x of [-1, 0, 1]) {
  line([x, .65, -1], [x, -.8, -1]);
  line([x, -.8, -1], [x, -.8, 1]);
  line([x, -.8, 1], [x, .65, 1]);
  line([x, .65, 1], [x, .65, -1]);
 }
 for (const y of [-.8, .65]) for (const z of [-1, 1]) line([-1, y, z], [1, y, z]);
 // Door opening and interior partition, as line geometry rather than a claimed scan.
 line([-.48, .65, -1], [-.48, -.35, -1]);
 line([-.48, -.35, -1], [.05, -.35, -1]);
 line([.05, -.35, -1], [.05, .65, -1]);
 const styles = getComputedStyle(document.documentElement);
 const ink = styles.getPropertyValue('--color-canvas').trim();
 const secondary = styles.getPropertyValue('--color-line-dark').trim();
 let width = 0, height = 0, frame = 0, inView = false;
 let start = performance.now(), progress = reducedMotion.matches ? 1 : 0;
 let rotation = -.48, targetRotation = -.48, tilt = -.18, targetTilt = -.18;
 let last = 0;
 function project([x, y, z]: Point) {
  const rx = x * Math.cos(rotation) - z * Math.sin(rotation);
  const rz = x * Math.sin(rotation) + z * Math.cos(rotation);
  const ry = y * Math.cos(tilt) - rz * Math.sin(tilt);
  const depth = y * Math.sin(tilt) + rz * Math.cos(tilt);
  const scale = Math.min(width * .31, height * .34) * (3.8 / (3.8 + depth * .25));
  return [width * .5 + rx * scale, height * .49 + ry * scale, depth];
 }
 function draw(now: number) {
  frame = 0;
  if (!inView || document.hidden) return;
  const dt = Math.min(64, now - (last || now)); last = now;
  if (reducedMotion.matches) { rotation = targetRotation; tilt = targetTilt; }
  const easing = 1 - Math.exp(-dt / 110);
  rotation += (targetRotation - rotation) * easing;
  tilt += (targetTilt - tilt) * easing;
  progress = reducedMotion.matches ? 1 : Math.min(1, (now - start) / 1350);
  ctx.clearRect(0, 0, width, height);
  const scan = -1.12 + progress * 2.4;
  // Points resolve into an architectural record; no continuous idle animation.
  for (const point of points) {
   const [x, y, depth] = project(point);
   const distance = scan - point[0];
   ctx.globalAlpha = progress === 1 ? .38 + (1 - depth / 3) * .2 : distance >= 0 ? .55 : .09;
   ctx.fillStyle = distance >= 0 && distance < .13 && progress < 1 ? ink : secondary;
   ctx.fillRect(x, y, distance >= 0 && distance < .13 ? 1.8 : 1.15, distance >= 0 && distance < .13 ? 1.8 : 1.15);
  }
  ctx.strokeStyle = ink; ctx.lineWidth = 1;
  ctx.globalAlpha = .16 + .6 * Math.min(1, progress * 1.8);
  for (const [a, b] of lines) {
   const pa = project(a), pb = project(b);
   ctx.beginPath(); ctx.moveTo(pa[0], pa[1]); ctx.lineTo(pa[0] + (pb[0] - pa[0]) * progress, pa[1] + (pb[1] - pa[1]) * progress); ctx.stroke();
  }
  if (progress < 1) {
   ctx.globalAlpha = .7; ctx.strokeStyle = ink;
   const plane: Point[] = [[scan, -.9, -1.1], [scan, -.9, 1.1], [scan, .72, 1.1], [scan, .72, -1.1]];
   ctx.beginPath(); plane.forEach((p, i) => { const [x, y] = project(p); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.closePath(); ctx.stroke();
  }
  ctx.globalAlpha = 1;
  scene.dataset.ready = '';
  scene.dataset.motion = reducedMotion.matches ? 'reduced' : 'full';
  const moving = progress < 1 || Math.abs(targetRotation - rotation) > .0003 || Math.abs(targetTilt - tilt) > .0003;
  if (moving && !reducedMotion.matches) schedule();
 }
 function schedule() { if (!frame && inView && !document.hidden) frame = requestAnimationFrame(draw); }
 function resize() {
  const box = canvas.getBoundingClientRect(); width = box.width; height = box.height;
  const density = Math.min(devicePixelRatio || 1, 1.5);
  canvas.width = Math.round(width * density); canvas.height = Math.round(height * density);
  ctx.setTransform(density, 0, 0, density, 0, 0); schedule();
 }
 new ResizeObserver(resize).observe(canvas);
 new IntersectionObserver(entries => {
  inView = entries[0].isIntersecting;
  if (inView) { last = 0; schedule(); }
  else { cancelAnimationFrame(frame); frame = 0; }
 }, { threshold: .05 }).observe(scene);
 scene.addEventListener('pointermove', event => {
  if (reducedMotion.matches || event.pointerType !== 'mouse') return;
  const box = scene.getBoundingClientRect();
  targetRotation = -.48 + ((event.clientX - box.left) / box.width - .5) * .42;
  targetTilt = -.18 + ((event.clientY - box.top) / box.height - .5) * .18;
  schedule();
 });
 scene.addEventListener('pointerleave', () => { targetRotation = -.48; targetTilt = -.18; schedule(); });
 document.addEventListener('hero:change', (event: Event) => {
  const detail = (event as CustomEvent<{ index: number }>).detail;
  targetRotation = [-.48, .28, -.85][detail.index];
  start = performance.now(); last = 0; schedule();
 });
 document.addEventListener('visibilitychange', () => {
  if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
  else { last = 0; schedule(); }
 });
 reducedMotion.addEventListener('change', () => {
  cancelAnimationFrame(frame); frame = 0;
  rotation = targetRotation; tilt = targetTilt; start = performance.now() - 1400; schedule();
 });
 resize();
}
