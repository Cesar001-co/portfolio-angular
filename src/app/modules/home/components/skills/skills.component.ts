import { Component } from '@angular/core';

import { SECTION_IDS } from '@core/navigation/sections';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  host: { id: SECTION_IDS.skills, class: 'block' }
})
export class SkillsComponent {

}
