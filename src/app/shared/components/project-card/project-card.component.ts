import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Project } from '@core/projects/project.model';
import { TechBadgeComponent } from '@shared/components/tech-badge/tech-badge.component';

/** Tarjeta de proyecto: imagen, categoría, título, descripción, tecnologías y enlaces. */
@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage, TechBadgeComponent],
  templateUrl: './project-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block h-full' },
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
