/** Small, interruptible transitions. The DOM always contains the usable final state. */
export const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
export const motionEase = 'cubic-bezier(.16, 1, .3, 1)';
const animations = new Map<Element, Animation>();

export function motion(element: Element | null, frames: Keyframe[], options: KeyframeAnimationOptions = {}) {
 if (!element) return;
 animations.get(element)?.cancel();
 if (reducedMotion.matches || !element.animate) return;
 const animation = element.animate(frames, { duration: 360, easing: motionEase, ...options });
 animations.set(element, animation);
 const cleanup = () => { if (animations.get(element) === animation) animations.delete(element); };
 animation.onfinish = cleanup;
 animation.oncancel = cleanup;
 return animation;
}

export function enterList(container: Element, selector: string) {
 container.querySelectorAll(selector).forEach((element, i) => motion(element, [
  { opacity: .35, transform: 'translateY(12px)' },
  { opacity: 1, transform: 'translateY(0)' },
 ], { duration: 380, delay: Math.min(i * 35, 175), fill: 'backwards' }));
}

reducedMotion.addEventListener('change', () => {
 if (reducedMotion.matches) {
  animations.forEach(animation => animation.cancel());
  animations.clear();
 }
});
