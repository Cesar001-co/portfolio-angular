import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Encabezado estándar de sección: título + subtítulo opcional.
 * Ícono opcional proyectado: <app-section-heading ...><svg sectionIcon>...</svg></app-section-heading>
 */
@Component({
  selector: 'app-section-heading',
  imports: [],
  template: `
    <h2 class="flex items-center gap-3 text-3xl font-bold tracking-tight text-color sm:text-4xl">
      <ng-content select="[sectionIcon]" />
      {{ title() }}
    </h2>
    @if (subtitle()) {
      <p class="mt-2 text-muted-color">{{ subtitle() }}</p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class SectionHeadingComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
}
