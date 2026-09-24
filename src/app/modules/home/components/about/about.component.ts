import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { SECTION_IDS } from '@core/navigation/sections';
import { RichTextComponent } from '@shared/components/rich-text/rich-text.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { ABOUT_CONTENT, SERVICES_CONTENT } from './about.config';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, SectionHeadingComponent, RichTextComponent],
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
