import { Component } from '@angular/core';
import { AboutMeComponent } from "../../sections/about-me/about-me.component";
import { EducationComponent } from "../../sections/education/education.component";
import { ProjectsComponent } from "../../sections/projects/projects.component";
import { TechnologiesComponent } from "../../sections/technologies/technologies.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AboutMeComponent, EducationComponent, ProjectsComponent, TechnologiesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
