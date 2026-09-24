import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Skeleton } from 'primeng/skeleton';

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
  imports: [NgOptimizedImage, TranslatePipe, Skeleton, TechBadgeComponent],
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

  /** Imágenes ya cargadas (load o error); mientras la activa no lo esté, se muestra el skeleton. */
  private readonly loadedImages = signal<ReadonlySet<string>>(new Set());
  protected readonly activeImageLoaded = computed(() =>
    this.loadedImages().has(this.project().images[this.activeIndex()].src),
  );

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

  protected markLoaded(src: string): void {
    this.loadedImages.update(loaded => new Set(loaded).add(src));
  }

  protected stopSlideshow(): void {
    clearInterval(this.timer);
    this.timer = undefined;
    this.activeIndex.set(0);
  }
}
