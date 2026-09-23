import { Component } from '@angular/core';

import { SECTION_IDS } from '@core/navigation/sections';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  host: { id: SECTION_IDS.contact, class: 'block' }
})
export class ContactComponent {

}
