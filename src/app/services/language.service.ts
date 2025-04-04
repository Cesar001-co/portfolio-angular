import { effect, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translateService = inject(TranslateService);

  private readonly supportedLangs = ['es', 'en']; // Supported Languages

  /* Verifys if there is a language in localStorage, if not look up for browser language */
  private getInitialLanguage(): string {
    const storedLang = window.localStorage.getItem('language'); // Get Language from localStorage
    if (storedLang) {
      return JSON.parse(storedLang);
    }

    const browserLang = this.translateService.getBrowserLang(); // Get language from browser
    return this.supportedLangs.includes(browserLang ?? '') ? browserLang! : 'en'; // use language from browser if is supported, if not use 'en'
  }

  languageSignal = signal<string>(this.getInitialLanguage());// Signal for language

  constructor() {
    effect(() => {
      window.localStorage.setItem('language', JSON.stringify(this.languageSignal()));
      this.translateService.use(this.languageSignal());
    });
  }

  /* Returns language from signal */
  getLanguage(): string {
    return this.languageSignal();
  }

  /* Uptdates language */
  updateLanguage(language: string) {
    if (this.supportedLangs.includes(language)) {
      this.languageSignal.set(language);
    }
  }
}