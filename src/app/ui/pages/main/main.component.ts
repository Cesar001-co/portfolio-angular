import { Component } from '@angular/core';
import { FooterComponent } from "../../layout/footer/footer.component";
import { SectionsComponent } from "../../layout/sections/sections.component";
import { NavBarComponent } from "../../layout/nav-bar/nav-bar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, SectionsComponent, NavBarComponent],
  template: `
  <app-nav-bar></app-nav-bar>
  <app-sections></app-sections>
  <app-footer></app-footer>
  `,
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
