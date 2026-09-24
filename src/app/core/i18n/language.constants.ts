export const SUPPORTED_LANGUAGES = ['es', 'en'] as const;

export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: AppLanguage = 'es';

export const LANGUAGE_STORAGE_KEY = 'app-lang';

/** Archivos de traducción: public/assets/i18n/<lang>.json */
export const I18N_ASSETS_PREFIX = 'assets/i18n/';

export const isAppLanguage = (value: unknown): value is AppLanguage =>
  SUPPORTED_LANGUAGES.includes(value as AppLanguage);
