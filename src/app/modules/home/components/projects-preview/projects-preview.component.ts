import { Component } from '@angular/core';

import { SECTION_IDS } from '@core/navigation/sections';

@Component({
  selector: 'app-projects-preview',
  imports: [],
  templateUrl: './projects-preview.component.html',
  styleUrl: './projects-preview.component.scss',
  host: { id: SECTION_IDS.projects, class: 'block' }
})
export class ProjectsPreviewComponent {

}
