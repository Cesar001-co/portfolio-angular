import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsPreviewComponent } from '../../components/projects-preview/projects-preview.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsPreviewComponent, ContactComponent],
  styles: ``,
  template: `
  <app-hero />
  <app-about />
  <app-skills />
  <app-projects-preview />
  <app-experience />
  <app-contact />
  `,
})
export class HomeComponent {

}
