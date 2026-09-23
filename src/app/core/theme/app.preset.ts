import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';

import { BRAND, DARK_SURFACE_SCALE, PRIMARY_SCALE } from './palette';

/**
 * Preset de la app basado en Lara.
 * - primary: común a ambos esquemas.
 * - colorScheme.dark: superficies y tokens propios (--p-app-*).
 * - colorScheme.light: valores provisionales hasta definir la paleta clara.
 */
export const AppPreset = definePreset(Lara, {
  semantic: {
    primary: PRIMARY_SCALE,
    colorScheme: {
      light: {
        // TODO(theme): reemplazar por la paleta clara definitiva.
        extend: {
          app: {
            background: '#ffffff',
            secondary: PRIMARY_SCALE[50],
            accent: BRAND.accent,
          },
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          ...DARK_SURFACE_SCALE,
        },
        extend: {
          app: {
            background: BRAND.background,
            secondary: BRAND.secondary,
            accent: BRAND.accent,
          },
        },
      },
    },
  },
});
