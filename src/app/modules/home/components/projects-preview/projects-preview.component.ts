import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { featuredProjects } from '@core/projects/projects.data';
import { ProjectCardComponent } from '@shared/components/project-card/project-card.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { PROJECTS_PREVIEW_CONTENT } from './projects-preview.config';

@Component({
  selector: 'app-projects-preview',
  imports: [RouterLink, TranslatePipe, SectionHeadingComponent, ProjectCardComponent],
  templateUrl: './projects-preview.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Fondo principal: alterna con el verde de Skills.
  // El id de ancla (#projects) lo pone el home: esta sección se carga con @defer.
  host: { class: 'block bg-app-background' }
})
export class ProjectsPreviewComponent {
  protected readonly content = PROJECTS_PREVIEW_CONTENT;
  protected readonly projects = featuredProjects(PROJECTS_PREVIEW_CONTENT.limit);
}
