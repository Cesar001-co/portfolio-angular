import { Component } from '@angular/core';

import { SECTION_IDS } from '@core/navigation/sections';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  host: { id: SECTION_IDS.experience, class: 'block' }
})
export class ExperienceComponent {

}
