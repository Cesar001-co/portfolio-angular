import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { filterProjectsByTech, isTechId, techsUsedIn } from '@core/projects/project-filters';
import { PROJECTS } from '@core/projects/projects.data';
import { TechId } from '@core/tech/tech-catalog';
import { ProjectCardComponent } from '@shared/components/project-card/project-card.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { TechFilterComponent } from '../../components/tech-filter/tech-filter.component';

/** Parámetro de URL con la tecnología seleccionada (enlace compartible: /projects?tech=angular). */
const TECH_QUERY_PARAM = 'tech';

/** Vista general de todos los proyectos con filtro por tecnología. */
@Component({
  selector: 'app-projects',
  imports: [RouterLink, TranslatePipe, SectionHeadingComponent, ProjectCardComponent, TechFilterComponent],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Mismo recurso que el hero: se extiende bajo el header fijo para que el degradado se vea tras él.
  host: { class: 'block -mt-(--app-header-height) pt-(--app-header-height) bg-linear-to-b from-primary/15 via-transparent to-transparent' },
})
export class ProjectsComponent {
  private readonly location = inject(Location);

  protected readonly techs = techsUsedIn(PROJECTS);
  protected readonly selectedTech = signal<TechId | null>(this.readTechFromUrl());
  protected readonly projects = computed(() => filterProjectsByTech(PROJECTS, this.selectedTech()));

  constructor() {
    // Refleja el filtro en la URL sin navegar: el router haría scroll al inicio en cada cambio.
    effect(() => {
      const tech = this.selectedTech();
      this.location.replaceState('/projects', tech ? `${TECH_QUERY_PARAM}=${tech}` : '');
    });
  }

  /** Solo acepta tecnologías que aparecen en los proyectos; cualquier otro valor se ignora. */
  private readTechFromUrl(): TechId | null {
    const value = inject(ActivatedRoute).snapshot.queryParamMap.get(TECH_QUERY_PARAM);
    return isTechId(value) && this.techs.includes(value) ? value : null;
  }
}
