import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SECTION_IDS } from '@core/navigation/sections';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { TechBadgeComponent } from '@shared/components/tech-badge/tech-badge.component';
import { SKILLS_CONTENT } from './skills.config';

@Component({
  selector: 'app-skills',
  imports: [SectionHeadingComponent, TechBadgeComponent],
  templateUrl: './skills.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Fondo verde (secondary) alternando con el fondo principal de "Sobre mí".
  host: { id: SECTION_IDS.skills, class: 'block bg-secondary' }
})
export class SkillsComponent {
  protected readonly content = SKILLS_CONTENT;
}
