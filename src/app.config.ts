import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';

import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(routes),

    provideAnimationsAsync(),

    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
            darkModeSelector: '.my-app-dark'
        }
      }
    })
  ]
};
