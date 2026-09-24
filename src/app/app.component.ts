import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  template: `
  <app-header />
  <!-- El header es fijo: el padding reserva su altura para que no tape el contenido -->
  <main class="pt-(--app-header-height)">
    <router-outlet />
  </main>
  <app-footer />
  `,
  styles: ``
})
export class AppComponent {
  private readonly titleService = inject(Title);
  private readonly translate = inject(TranslateService);

  // Título de la pestaña traducido: cambia al perder/recuperar el foco de la ventana.
  @HostListener('window:blur')
  onBlur() {
    this.titleService.setTitle(this.translate.instant('app.blurTitle'));
  }

  @HostListener('window:focus')
  onFocus() {
    this.titleService.setTitle(this.translate.instant('app.title'));
  }
}
