import { Component, effect, inject } from '@angular/core';
import { Project } from '../../../domain/models/projects.interface';
import { ProjectComponent } from '../../design/project/project.component';
import { mainProjects_en, mainProjects_es } from '../../../domain/proyects/en_projects';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [ProjectComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  mainProyects: Project[] = [];

  private languageService = inject(LanguageService);

  constructor() {
    effect(() => {
      this.mainProyects = this.languageService.getLanguage() === 'es' ? mainProjects_es : mainProjects_en;
    })
  }
}
