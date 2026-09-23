export type ThemeMode = 'dark' | 'light';

/** Clase aplicada en <html> para activar el esquema oscuro (PrimeNG darkModeSelector). */
export const DARK_MODE_CLASS = 'app-dark';

export const THEME_STORAGE_KEY = 'app-theme';

/** La marca es dark-first: se usa si el usuario no ha elegido un tema. */
export const DEFAULT_THEME: ThemeMode = 'dark';
