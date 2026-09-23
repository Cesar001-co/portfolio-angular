import { Component } from '@angular/core';

import { SECTION_IDS } from '@core/navigation/sections';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  host: { id: SECTION_IDS.about, class: 'block' }
})
export class AboutComponent {

}
