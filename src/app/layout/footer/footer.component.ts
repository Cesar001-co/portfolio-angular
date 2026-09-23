import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROFILE } from '@core/profile/profile';
import { SocialLinksComponent } from '@shared/components/social-links/social-links.component';

@Component({
  selector: 'app-footer',
  imports: [SocialLinksComponent],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class FooterComponent {
  protected readonly name = PROFILE.name;
  protected readonly year = new Date().getFullYear();
}
