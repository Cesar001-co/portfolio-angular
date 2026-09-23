import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';

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
export class AppComponent {}
