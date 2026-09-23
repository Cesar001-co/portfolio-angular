/**
 * Datos públicos del perfil. Única fuente para footer, hero, contacto, etc.
 */
export interface SocialLink {
  id: 'github' | 'linkedin';
  label: string;
  url: string;
}

export const PROFILE = {
  name: 'Cesar Rodriguez',
  email: 'cesarcamilo001@gmail.com',
  // TODO(i18n): elegir el documento según el idioma activo (es → HV, en → CV).
  resume: {
    es: { label: 'HV', path: 'assets/cv/HV_Cesar_Rodriguez.pdf' },
    en: { label: 'CV', path: 'assets/cv/CV_Cesar_Rodriguez.pdf' },
  },
  socials: [
    { id: 'github', label: 'GitHub', url: 'https://github.com/Cesar001-co' },
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/cesar-rodriguez-b04451220' },
  ] satisfies SocialLink[],
} as const;
