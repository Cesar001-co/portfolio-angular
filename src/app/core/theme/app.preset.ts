import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';

import { BRAND, DARK_SURFACE_SCALE, PRIMARY_SCALE } from './palette';

/**
 * Preset de la app basado en Lara.
 * - primary: común a ambos esquemas.
 * - colorScheme.dark: superficies y tokens propios (--p-app-*).
 * - colorScheme.light: pendiente de definir.
 */
export const AppPreset = definePreset(Lara, {
  semantic: {
    primary: PRIMARY_SCALE,
    colorScheme: {
      dark: {
        surface: {
          0: '#ffffff',
          ...DARK_SURFACE_SCALE,
        },
        extend: {
          app: {
            background: BRAND.background,
            secondary: BRAND.secondary,
          },
        },
      },
    },
  },
});
