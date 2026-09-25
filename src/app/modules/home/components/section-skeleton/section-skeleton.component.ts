import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

export type SectionSkeletonVariant = 'about' | 'skills' | 'projects' | 'experience' | 'contact';

interface VariantConfig {
  /** Fondo igual al de la sección real, para que el color no parpadee al cambiar. */
  tone: 'plain' | 'green';
  /**
   * Alto mínimo ≈ alto real de la sección (móvil / escritorio), medido en el navegador.
   * Evita saltos de layout al reemplazar el skeleton por el contenido.
   * Clases literales: Tailwind solo genera las que encuentra escritas en el código.
   */
  minHeight: string;
}

const VARIANTS: Record<SectionSkeletonVariant, VariantConfig> = {
  about: { tone: 'plain', minHeight: 'min-h-[1449px] lg:min-h-[694px]' },
  skills: { tone: 'green', minHeight: 'min-h-[1114px] lg:min-h-[619px]' },
  projects: { tone: 'plain', minHeight: 'min-h-[1610px] lg:min-h-[1011px]' },
  experience: { tone: 'green', minHeight: 'min-h-[1352px] lg:min-h-[628px]' },
  contact: { tone: 'plain', minHeight: 'min-h-[866px] lg:min-h-[617px]' },
};

/**
 * Placeholder de las secciones del home cargadas con @defer: imita la forma de cada una
 * (encabezado, texto, tarjetas) mientras llega su código.
 */
@Component({
  selector: 'app-section-skeleton',
  imports: [NgTemplateOutlet, Skeleton],
  templateUrl: './section-skeleton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
    '[class]': 'hostClasses()',
    'aria-hidden': 'true',
  },
})
export class SectionSkeletonComponent {
  readonly variant = input.required<SectionSkeletonVariant>();

  protected readonly hostClasses = computed(() => {
    const { tone, minHeight } = VARIANTS[this.variant()];
    return `${minHeight} ${tone === 'green' ? 'bg-secondary' : 'bg-app-background'}`;
  });
}
