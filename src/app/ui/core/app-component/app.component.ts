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

    // if there is no language, redirect
    if (!currentLang) {
      this.handleNoLanguageFallback();
      return;
    }

    // if the language is not in the URL, redirect
    if (!currentPath.startsWith(`/${currentLang}/`)) {
      this.languageService.redirectToLang(currentLang);
    }
  }

  private handleNoLanguageFallback(): void {
    // Use the browser's language
    const browserLang = navigator.language.split('-')[0];
    const lang = ['es', 'en'].includes(browserLang) ? browserLang : 'en';

    this.languageService.redirectToLang(lang);
  }
}
