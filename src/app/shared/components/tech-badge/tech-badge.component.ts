import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { TECH_CATALOG, TechId, techIconUrl } from '@core/tech/tech-catalog';

/**
 * Insignia de tecnología: ícono + nombre.
 * El ícono se pinta con máscara CSS sobre `bg-current`, así toma el color del texto
 * (primary en oscuro, verde oscuro en claro) sin inyectar SVG con innerHTML.
 */
@Component({
  selector: 'app-tech-badge',
  imports: [],
  template: `
    @if (tech().hasIcon) {
      <span class="tech-icon size-5 shrink-0 bg-current" [style.mask-image]="iconMask()" aria-hidden="true"></span>
    } @else {
      <svg viewBox="0 0 24 24" class="size-5 shrink-0" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    }
    <span>{{ tech().name }}</span>
  `,
  styles: `
    .tech-icon {
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'chip chip-accent gap-2 font-semibold' },
})
export class TechBadgeComponent {
  readonly id = input.required<TechId>();

  protected readonly tech = computed(() => TECH_CATALOG[this.id()]);
  protected readonly iconMask = computed(() => `url(${techIconUrl(this.id())})`);
}
