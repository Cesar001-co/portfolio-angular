import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ComingSoonComponent } from '@shared/components/coming-soon/coming-soon.component';

@Component({
  selector: 'app-not-found',
  imports: [ComingSoonComponent],
  template: `<app-coming-soon message="comingSoon.notFound" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
