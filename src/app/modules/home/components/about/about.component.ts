import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

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
  // El id de ancla (#about) lo pone el home: esta sección se carga con @defer.
  host: { class: 'block bg-app-background' }
})
export class AboutComponent {
  protected readonly about = ABOUT_CONTENT;
  protected readonly services = SERVICES_CONTENT;
}
