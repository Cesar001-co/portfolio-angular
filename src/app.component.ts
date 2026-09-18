import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  template: `
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <router-outlet />
  `,
  styles: ``
})
export class AppComponent {
  title = 'portfolio';
}
