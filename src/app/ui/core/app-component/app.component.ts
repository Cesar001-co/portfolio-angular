import { Component } from '@angular/core';
import { MainComponent } from "../../layout/main/main.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { HeaderComponent } from "../../layout/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent, FooterComponent, HeaderComponent],
  template: '<app-header></app-header> <app-main></app-main> <app-footer></app-footer>',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
