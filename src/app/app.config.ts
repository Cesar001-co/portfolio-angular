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
          // Debe coincidir con el orden declarado en src/styles/tailwind.css
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng, components, utilities'
          }
          // darkModeSelector: se configura junto al servicio de temas
        }
      }
    })
  ]
};
