import { AppLanguage } from '@core/i18n/language.constants';

/**
 * Datos públicos del perfil. Única fuente para footer, hero, contacto, etc.
 * Los textos visibles (rol, etiquetas) están en public/assets/i18n/*.json.
 */
export interface SocialLink {
  id: 'github' | 'linkedin';
  label: string;
  url: string;
}

export interface ResumeFile {
  label: string;
  path: string;
}

export const PROFILE = {
  name: 'Cesar Rodriguez',
  /** Clave i18n del rol. */
  roleKey: 'profile.role',
  avatar: 'assets/avatar.jpg',
  /** Muestra la insignia "Disponible" en el hero. */
  availableForWork: true,
  email: 'cesarcamilo001@gmail.com',
  /** Hoja de vida según idioma: HV en español, CV en inglés. */
  resume: {
    es: { label: 'HV', path: 'assets/cv/HV_Cesar_Rodriguez.pdf' },
    en: { label: 'CV', path: 'assets/cv/CV_Cesar_Rodriguez.pdf' },
  } satisfies Record<AppLanguage, ResumeFile>,
  socials: [
    { id: 'github', label: 'GitHub', url: 'https://github.com/Cesar001-co' },
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/cesar-rodriguez-b04451220' },
  ] satisfies SocialLink[],
} as const;
