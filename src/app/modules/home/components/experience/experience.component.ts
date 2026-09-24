import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { SECTION_IDS } from '@core/navigation/sections';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { TechBadgeComponent } from '@shared/components/tech-badge/tech-badge.component';
import { EDUCATION_CONTENT, EXPERIENCE_CONTENT } from './experience.config';

@Component({
  selector: 'app-experience',
  imports: [TranslatePipe, SectionHeadingComponent, TechBadgeComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Fondo verde (secondary): alterna con el fondo principal de Proyectos.
  host: { id: SECTION_IDS.experience, class: 'block bg-secondary' }
})
export class ExperienceComponent {
  protected readonly experience = EXPERIENCE_CONTENT;
  protected readonly education = EDUCATION_CONTENT;
}
