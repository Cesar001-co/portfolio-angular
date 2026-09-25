import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { TechBadgeComponent } from '@shared/components/tech-badge/tech-badge.component';
import { SKILLS_CONTENT } from './skills.config';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe, SectionHeadingComponent, TechBadgeComponent],
  templateUrl: './skills.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Fondo verde (secondary) alternando con el fondo principal de "Sobre mí".
  // El id de ancla (#skills) lo pone el home: esta sección se carga con @defer.
  host: { class: 'block bg-secondary' }
})
export class SkillsComponent {
  protected readonly content = SKILLS_CONTENT;
}
