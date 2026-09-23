import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SECTION_IDS } from '@core/navigation/sections';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { ABOUT_CONTENT, SERVICES_CONTENT } from './about.config';

@Component({
  selector: 'app-about',
  imports: [SectionHeadingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Fondo principal sólido: marca la separación con el degradado del hero.
  host: { id: SECTION_IDS.about, class: 'block bg-app-background' }
})
export class AboutComponent {
  protected readonly about = ABOUT_CONTENT;
  protected readonly services = SERVICES_CONTENT;
}
