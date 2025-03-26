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
    const currentLang = this.languageService.getCurrentNavigationLang();
    const currentPath = window.location.pathname;
    console.log(!currentPath.startsWith(`/${currentLang}/`));

    if (currentPath.startsWith(`/${currentLang}/`)) {
      const localStorageLang = this.languageService.getLocalStorageLang();
      // verify if the language is in the local storage
      if (localStorageLang && localStorageLang !== this.languageService.getCurrentNavigationLang()) {
        this.languageService.redirectToLang(currentLang);
      } else if (localStorageLang !== null) {
        this.languageService.redirectToLang(localStorageLang);
      }
    }
  }
}
