import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, signal } from '@angular/core';

import { Project } from '@core/projects/project.model';
import { TechBadgeComponent } from '@shared/components/tech-badge/tech-badge.component';

/** Tiempo que se muestra cada imagen del carrusel en hover. */
const SLIDE_INTERVAL_MS = 1600;

/**
 * Tarjeta de proyecto: imagen, categoría, título, descripción, tecnologías y enlaces.
 * Con hover/foco alterna las imágenes del proyecto (crossfade) y vuelve a la portada al salir.
 */
@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage, TechBadgeComponent],
  templateUrl: './project-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block h-full',
    '(mouseenter)': 'startSlideshow()',
    '(mouseleave)': 'stopSlideshow()',
    '(focusin)': 'startSlideshow()',
    '(focusout)': 'stopSlideshow()',
  },
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();

  protected readonly activeIndex = signal(0);
  /** Las imágenes extra se descargan solo tras el primer hover (no penalizan la carga inicial). */
  protected readonly galleryRequested = signal(false);

  private timer?: ReturnType<typeof setInterval>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearInterval(this.timer));
  }

  protected startSlideshow(): void {
    const total = this.project().images.length;
    if (total < 2 || this.timer) return;

    this.galleryRequested.set(true);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.timer = setInterval(() => this.activeIndex.update(i => (i + 1) % total), SLIDE_INTERVAL_MS);
  }

  protected stopSlideshow(): void {
    clearInterval(this.timer);
    this.timer = undefined;
    this.activeIndex.set(0);
  }
}
