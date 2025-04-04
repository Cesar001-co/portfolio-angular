import { Component, Input } from '@angular/core';
import { Project } from '../../../domain/models/projects.interface';
import { TechIconsComponent } from "../tech-icons/tech-icons.component";

@Component({
  selector: 'project',
  standalone: true,
  imports: [TechIconsComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input()
  project!: Project;

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
