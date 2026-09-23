import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  template: `
  <app-header></app-header>
  <main>
    <router-outlet />
  </main>
  <app-footer></app-footer>
  `,
  styles: ``
})
export class AppComponent {

  private readonly previusTitle: string = 'Cesar.dev';
  
  constructor (
    private titleService: Title
  ) {}

  @HostListener('window:blur')
  onBlur() {
    this.titleService.setTitle(`¡No te vayas! ¡Vuelve! 😱`);
  }

  @HostListener('window:focus')
  onFocus() {
    this.titleService.setTitle(this.previusTitle);
  }
}
