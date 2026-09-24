import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ComingSoonComponent } from '@shared/components/coming-soon/coming-soon.component';

// TODO(projects): reemplazar por el listado completo (PROJECTS de @core/projects/projects.data).
@Component({
  selector: 'app-projects',
  imports: [ComingSoonComponent],
  template: `<app-coming-soon message="comingSoon.projects" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {}
