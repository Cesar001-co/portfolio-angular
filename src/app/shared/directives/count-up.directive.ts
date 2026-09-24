import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/** Duración por defecto de la animación. */
const DEFAULT_DURATION_MS = 1600;

/** easeOutCubic: arranca rápido y frena al llegar al valor final. */
const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

/**
 * Anima un número desde 0 hasta `appCountUp` cuando el elemento entra en pantalla.
 * Uso: <dd [appCountUp]="8" suffix="+"></dd>
 *
 * - Con prefers-reduced-motion muestra directamente el valor final.
 * - aria-label con el valor final: los lectores de pantalla no leen los números intermedios.
 */
@Directive({
  selector: '[appCountUp]',
  host: {
    '[attr.aria-label]': 'target() + (suffix() ?? "")',
  },
})
export class CountUpDirective {
  readonly target = input.required<number>({ alias: 'appCountUp' });
  /** Texto tras el número (p. ej. "+"). Acepta undefined para stats sin sufijo. */
  readonly suffix = input<string | undefined>('');
  readonly duration = input(DEFAULT_DURATION_MS);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private frame = 0;
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion || typeof IntersectionObserver === 'undefined') {
        this.render(this.target());
        return;
      }

      this.render(0);
      this.observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          this.observer?.disconnect();
          this.animate();
        }
      });
      this.observer.observe(this.host);
    });

    inject(DestroyRef).onDestroy(() => {
      this.observer?.disconnect();
      cancelAnimationFrame(this.frame);
    });
  }

  private animate(): void {
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / this.duration(), 1);
      this.render(Math.round(easeOutCubic(progress) * this.target()));
      if (progress < 1) this.frame = requestAnimationFrame(step);
    };
    this.frame = requestAnimationFrame(step);
  }

  private render(value: number): void {
    this.host.textContent = `${value}${this.suffix() ?? ''}`;
  }
}
