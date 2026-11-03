import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { deployment } from '../src/config/deployment.mjs';

const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
const root = new URL(deployment.base, 'http://localhost:4321').href;
const checks = [];
const check = (condition, label) => { assert(condition, label); checks.push(label); };
try {
 const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'no-preference' });
 await context.addInitScript(() => {
  const clear = CanvasRenderingContext2D.prototype.clearRect;
  CanvasRenderingContext2D.prototype.clearRect = function (...args) {
   this.canvas.dataset.frames = String(Number(this.canvas.dataset.frames || 0) + 1);
   return clear.apply(this, args);
  };
 });
 const page = await context.newPage();
 const errors = []; page.on('pageerror', error => errors.push(error.message));
 await page.goto(root);
 const scene = page.locator('[data-survey-scene]');
 await scene.locator('canvas').waitFor({ state: 'visible' });
 await page.waitForFunction(() => document.querySelector('[data-survey-scene]')?.hasAttribute('data-ready'));
 await page.waitForTimeout(1800);
 const frameCount = () => scene.locator('canvas').getAttribute('data-frames').then(Number);
 const inkedPixels = await scene.locator('canvas').evaluate(canvas => {
  const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
  let visible = 0; for (let i = 3; i < pixels.length; i += 4) if (pixels[i] > 0) visible++;
  return visible;
 });
 check(inkedPixels > 1000, 'A cena espacial desenha geometria visível');
 check((await scene.locator('figcaption').textContent()).includes('Ilustração 3D'), 'A cena é identificada como ilustração');
 const settledFrames = await frameCount(); await page.waitForTimeout(300);
 check(await frameCount() === settledFrames, 'A cena não mantém loop de renderização em repouso');
 await scene.hover({ position: { x: 70, y: 100 } }); await page.waitForTimeout(180);
 check(await frameCount() > settledFrames, 'O ponteiro altera a perspectiva espacial');
 await page.mouse.move(15, 15); await page.waitForTimeout(1100);
 const pointerSettled = await frameCount(); await page.waitForTimeout(250);
 check(await frameCount() === pointerSettled, 'O movimento do ponteiro se encerra ao estabilizar');

 // Rapid use interrupts old transitions, rather than leaving invisible or duplicated slides.
 await page.locator('[data-hero-next]').evaluate(button => { button.click(); button.click(); button.click(); button.click(); });
 await page.waitForTimeout(1600);
 check(await page.locator('[data-slide]:visible').count() === 1, 'Trocas rápidas mantêm somente um destaque ativo');
 check(await page.locator('[data-slide]:visible').getAttribute('aria-label') === '2 de 3', 'Trocas rápidas terminam no destaque solicitado');
 check(await page.locator('[data-slide]:visible h2').evaluate(element => getComputedStyle(element).opacity === '1' && getComputedStyle(element).clipPath === 'none'), 'Título volta ao estado final legível após interrupções');
 const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
 fs.writeFileSync('reports/axe-motion.json', JSON.stringify(axe, null, 2));
 check(axe.violations.length === 0, 'Modo animado: nenhuma violação axe AA');

 await page.locator('[data-window-step="6"]').click(); await page.waitForTimeout(800);
 check(await page.locator('[data-window-count]').textContent() === '07 / 07', 'Linha de etapas navega diretamente para a última janela');
 check(await page.locator('[data-window-step="6"]').getAttribute('aria-current') === 'step', 'Linha de etapas anuncia a posição atual');
 await page.waitForTimeout(350); const offscreenFrames = await frameCount(); await page.waitForTimeout(350);
 check(await frameCount() === offscreenFrames, 'A cena suspende o desenho fora da tela');
 await page.locator('[data-window-filter="Profissionais"]').click();
 check(await page.locator('[data-window-step]:visible').count() === 2, 'Linha de etapas acompanha as duas janelas do filtro');
 await page.locator('[data-window-step]:visible').last().focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(800);
 check(await page.locator('[data-window-count]').textContent() === '02 / 02', 'Etapas filtradas funcionam pelo teclado');
 await page.locator('summary').first().click(); await page.waitForTimeout(500);
 check(await page.locator('details').first().locator('p').isVisible(), 'FAQ apresenta a resposta após a abertura animada');
 await page.locator('summary').first().click(); await page.waitForTimeout(500);
 check(await page.locator('details').first().getAttribute('open') === null, 'FAQ encerra a abertura e mantém o estado nativo fechado');

 await page.emulateMedia({ reducedMotion: 'reduce' });
 await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' })); await page.waitForTimeout(400);
 check(await scene.getAttribute('data-motion') === 'reduced', 'Alteração de preferência ativa a cena estática');
 await page.locator('[data-hero-next]').click(); await page.waitForTimeout(100);
 check(await page.evaluate(() => document.getAnimations().filter(animation => animation.playState === 'running').length) === 0, 'Movimento reduzido não deixa animações em execução');
 const reducedFrames = await frameCount(); await page.waitForTimeout(200);
 check(await frameCount() === reducedFrames, 'Cena reduzida permanece em repouso depois da troca');

 const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: 'no-preference' });
 await mobile.goto(root); await mobile.waitForTimeout(1600);
 await mobile.locator('.mobile-toggle').click();
 for (const width of [320, 390]) {
  await mobile.setViewportSize({ width, height: 844 });
  const targets = await mobile.locator('[data-window-step]').evaluateAll(buttons => buttons.map(button => {
   const { width, height } = button.getBoundingClientRect(); return { width, height };
  }));
  check(targets.length === 7 && targets.every(target => target.width >= 44 && target.height >= 44), `As sete etapas têm alvos de pelo menos 44 por 44 em ${width}px`);
 }
 await mobile.locator('[data-mega="Empresas"]').click();
 await mobile.waitForTimeout(500);
 check(await mobile.locator('#panel-Empresas').isVisible(), 'Menu animado mantém serviços acessíveis no mobile');
 await mobile.keyboard.press('Escape');
 check(await mobile.locator('#mega-menu').isHidden(), 'Escape interrompe e fecha o menu animado');
 await mobile.locator('.mobile-toggle').click();
 for (const width of [320, 390, 768, 1280, 1600]) {
  await mobile.setViewportSize({ width, height: 844 }); await mobile.waitForTimeout(100);
  check(await mobile.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Motion sem overflow em ${width}px`);
 }

 const nojs = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
 await nojs.goto(root);
 check(await nojs.locator('.survey-fallback').isVisible(), 'Sem JavaScript: diagrama estático visível');
 check(await nojs.locator('[data-slide]:visible').count() === 3, 'Sem JavaScript: os três destaques permanecem disponíveis');
 check(await nojs.locator('[data-window]:visible').count() === 7, 'Sem JavaScript: as sete janelas permanecem disponíveis');
 check(errors.length === 0, 'Motion sem erros JavaScript');
 fs.writeFileSync('reports/motion.json', JSON.stringify({ passed: checks.length, checks, errors }, null, 2));
 console.log(checks.join('\n'));
} finally { await browser.close(); }
