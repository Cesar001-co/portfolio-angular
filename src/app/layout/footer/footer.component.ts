import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { PROFILE } from '@core/profile/profile';
import { BUILT_WITH } from './footer.config';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class FooterComponent {
  protected readonly name = PROFILE.name;
  protected readonly location = PROFILE.location;
  protected readonly builtWith = BUILT_WITH.join(', ');
  protected readonly year = new Date().getFullYear();
}
