/**
 * Estructura de "Sobre mí" y "Servicios". Los textos viven en public/assets/i18n/*.json:
 * - about.paragraphs: lista de párrafos con **énfasis** (ver RichTextComponent).
 * - services.items.<id>.title / .description
 */
export type ServiceIcon = 'code' | 'support' | 'web';

export interface ServiceItem {
  /** Id estable: también es la clave de sus textos en services.items.<id>. */
  id: string;
  icon: ServiceIcon;
}

export const ABOUT_CONTENT = {
  heading: { title: 'about.title', subtitle: 'about.subtitle' },
  paragraphsKey: 'about.paragraphs',
} as const;

export const SERVICES_CONTENT = {
  heading: { title: 'services.title', subtitle: 'services.subtitle' },
  items: [
    { id: 'custom-development', icon: 'code' },
    { id: 'support', icon: 'support' },
    { id: 'informative-sites', icon: 'web' },
  ] satisfies ServiceItem[],
} as const;
