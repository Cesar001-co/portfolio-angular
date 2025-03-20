import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { SettingsButtonComponent } from '../../design/settings-button/settings-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SettingsButtonComponent],
  template: '<router-outlet></router-outlet><settings-button></settings-button>',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private languageService = inject(LanguageService);


  ngOnInit(): void {
    const currentLang = this.languageService.currentLang;
    const currentPath = window.location.pathname;

    // Si no hay idioma válido en URL ni localStorage, redirigir
    if (!currentLang) {
      this.handleNoLanguageFallback();
      return;
    }

    // Si la URL no incluye el idioma, redirigir
    if (!currentPath.startsWith(`/${currentLang}/`)) {
      this.languageService.redirectToLang(currentLang);
    }
  }

  private handleNoLanguageFallback(): void {
    // Opción 1: Redirigir a un idioma basado en el navegador
    const browserLang = navigator.language.split('-')[0]; // Ej: "es" de "es-ES"
    const lang = ['es', 'en'].includes(browserLang) ? browserLang : 'es'; // Fallback opcional

    // Opción 2: Redirigir a una página de selección de idioma
    // window.location.href = '/select-language';

    this.languageService.redirectToLang(lang);
  }
}
