import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SECTION_IDS } from '@core/navigation/sections';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectsPreviewComponent } from '../../components/projects-preview/projects-preview.component';
import { SectionSkeletonComponent } from '../../components/section-skeleton/section-skeleton.component';
import { SkillsComponent } from '../../components/skills/skills.component';

/**
 * Home. El hero se pinta de inmediato; el resto de secciones se cargan con @defer
 * (cada una en su propio chunk) y muestran un skeleton con su forma mientras llegan.
 *
 * - prefetch on idle: el código se descarga en segundo plano tras el primer pintado.
 * - on viewport: se renderiza al acercarse a la pantalla.
 * - Los ids de ancla (#about, #contact…) van en el envoltorio y no en la sección, para que
 *   el menú y los enlaces /#seccion funcionen aunque la sección aún no se haya cargado.
 */
@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsPreviewComponent,
    ExperienceComponent,
    ContactComponent,
    SectionSkeletonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />

    <div [id]="sections.about">
      @defer (on viewport; prefetch on idle) {
        <app-about />
      } @placeholder {
        <app-section-skeleton variant="about" />
      } @loading {
        <app-section-skeleton variant="about" />
      }
    </div>

    <div [id]="sections.skills">
      @defer (on viewport; prefetch on idle) {
        <app-skills />
      } @placeholder {
        <app-section-skeleton variant="skills" />
      } @loading {
        <app-section-skeleton variant="skills" />
      }
    </div>

    <div [id]="sections.projects">
      @defer (on viewport; prefetch on idle) {
        <app-projects-preview />
      } @placeholder {
        <app-section-skeleton variant="projects" />
      } @loading {
        <app-section-skeleton variant="projects" />
      }
    </div>

    <div [id]="sections.experience">
      @defer (on viewport; prefetch on idle) {
        <app-experience />
      } @placeholder {
        <app-section-skeleton variant="experience" />
      } @loading {
        <app-section-skeleton variant="experience" />
      }
    </div>

    <div [id]="sections.contact">
      @defer (on viewport; prefetch on idle) {
        <app-contact />
      } @placeholder {
        <app-section-skeleton variant="contact" />
      } @loading {
        <app-section-skeleton variant="contact" />
      }
    </div>
  `,
})
export class HomeComponent {
  protected readonly sections = SECTION_IDS;
}
