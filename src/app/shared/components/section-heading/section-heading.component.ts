import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Encabezado estándar de sección: título + subtítulo opcional. */
@Component({
  selector: 'app-section-heading',
  imports: [],
  template: `
    <h2 class="text-3xl font-bold tracking-tight text-color sm:text-4xl">{{ title() }}</h2>
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
