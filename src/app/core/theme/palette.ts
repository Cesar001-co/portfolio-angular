/**
 * Paleta de marca KAPULUS Portfolio.
 * Única fuente de verdad de colores: el preset de PrimeNG y Tailwind
 * consumen estos valores a través de las variables CSS generadas (--p-*).
 */

export type ColorScale = Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950, string>;

/** Colores base definidos por diseño. */
export const BRAND = {
  primary: '#73D586',
  secondary: '#1B2B1D',
  background: '#111210',
} as const;

/** Escala primaria generada desde BRAND.primary (tono 131.6°, anclado en 400). */
export const PRIMARY_SCALE: ColorScale = {
  50: '#f2fcf4',
  100: '#e2f8e6',
  200: '#c6f0ce',
  300: '#a0e4ad',
  400: BRAND.primary,
  500: '#4abf61',
  600: '#3c9a4e',
  700: '#337640',
  800: '#2b5a34',
  900: '#234329',
  950: '#162719',
};

/** Escala de superficies oscuras generada desde BRAND.background (tono 90°, anclado en 950). */
export const DARK_SURFACE_SCALE: ColorScale = {
  50: '#f7f8f7',
  100: '#ebece9',
  200: '#d6d9d4',
  300: '#b8bcb3',
  400: '#999f93',
  500: '#757c6e',
  600: '#575c52',
  700: '#3d413a',
  800: '#292b26',
  900: '#1b1c19',
  950: BRAND.background,
};
