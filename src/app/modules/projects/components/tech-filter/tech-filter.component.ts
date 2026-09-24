import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { TECH_CATALOG, TechId } from '@core/tech/tech-catalog';

/**
 * Filtro de proyectos por tecnología: un chip por tecnología disponible.
 * `selected` es bidireccional ([(selected)]); null = sin filtro.
 */
@Component({
  selector: 'app-tech-filter',
  imports: [TranslatePipe],
  templateUrl: './tech-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class TechFilterComponent {
  readonly selected = model<TechId | null>(null);
  /** Tecnologías ofrecidas como chips (normalmente las usadas en los proyectos). */
  readonly techs = input.required<readonly TechId[]>();

  protected readonly catalog = TECH_CATALOG;

  /** Clic en un chip: filtra por esa tecnología; un segundo clic quita el filtro. */
  protected toggle(tech: TechId): void {
    this.selected.update(current => (current === tech ? null : tech));
  }
}
