import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { providePrimeNG } from 'primeng/config';

import { AppPreset } from '@core/theme/app.preset';
import { DARK_MODE_CLASS } from '@core/theme/theme.constants';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(
      routes,
      // Navegación por secciones: /#fragment hace scroll al elemento con ese id.
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      // Permite volver a una sección aunque la URL ya tenga ese fragment.
      withRouterConfig({ onSameUrlNavigation: 'reload' })
    ),

    // HTTP (formulario de contacto → Formspree)
    provideHttpClient(withFetch()),

    provideAnimationsAsync(),

    providePrimeNG({
      theme: {
        preset: AppPreset,
        options: {
          darkModeSelector: `.${DARK_MODE_CLASS}`,
          // Debe coincidir con el orden declarado en src/styles/tailwind.css
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng, components, utilities'
          }
        }
      }
    })
  ]
};
