import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { LanguageService } from '../services/language.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    {
      provide: APP_BASE_HREF,
      useFactory: (languageService: LanguageService) => {
        const lang = languageService.currentLang;
        return lang ? `/${lang}/` : '/'; // BaseHref dinámico
      },
      deps: [LanguageService],
    },]
};
