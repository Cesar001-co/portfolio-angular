import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { LanguageService } from '../services/language.service';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
=======
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
    
  ]
>>>>>>> feature-language-button
};
