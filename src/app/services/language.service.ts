import { effect, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translateService = inject(TranslateService);

  private readonly supportedLangs = ['es', 'en'];
  private browserLang = this.translateService.getBrowserLang();

  languageSignal = signal<string>(
    JSON.parse(window.localStorage.getItem('lang') ?? '"en"')
  );

  constructor() {
    effect(() => {
      window.localStorage.setItem('lang', JSON.stringify(this.languageSignal()));
      this.translateService.use(this.languageSignal());
    });
  }

  updateLanguage(language: string) {
    this.languageSignal.update(() => {
      switch (language) {
        case "en":
          return "en";
        case "es":
          return "es";
        default:
          return "en";
      }
    });
  }

  getLanguage(): string {
    return this.languageSignal();
  }
}