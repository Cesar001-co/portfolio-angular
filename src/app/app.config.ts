import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom } from 'rxjs';

import { providePrimeNG } from 'primeng/config';

import { DEFAULT_LANGUAGE, I18N_ASSETS_PREFIX } from '@core/i18n/language.constants';
import { LanguageService } from '@core/i18n/language.service';
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

    // HTTP (formulario de contacto → Formspree, archivos de traducción)
    provideHttpClient(withFetch()),

    // i18n en tiempo de ejecución (ngx-translate): textos en public/assets/i18n/<lang>.json
    provideTranslateService({
      loader: provideTranslateHttpLoader({ prefix: I18N_ASSETS_PREFIX, suffix: '.json' }),
      fallbackLang: DEFAULT_LANGUAGE,
    }),
    // Espera el idioma inicial antes de pintar: evita mostrar claves sin traducir.
    provideAppInitializer(() => firstValueFrom(inject(LanguageService).init())),

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
