import { TechId } from '@core/tech/tech-catalog';

/**
 * Estructura de Experiencia y Educación. Los textos traducibles viven en public/assets/i18n/*.json:
 * - experience.items.<id>.role / .period / .highlights (lista)
 * - education.items.<id>.title / .period
 * Aquí quedan solo nombres propios, enlaces y datos no traducibles.
 */
export interface Company {
  name: string;
  /** Sitio de la empresa: si existe, el nombre se muestra como enlace. */
  url?: string;
}

export interface ExperienceItem {
  /** Id estable: también es la clave de sus textos i18n. */
  id: string;
  company?: Company;
  location?: string;
}

export interface EducationItem {
  /** Id estable: también es la clave de sus textos i18n. */
  id: string;
  institution: string;
  location?: string;
  techs?: readonly TechId[];
}

export const EXPERIENCE_CONTENT = {
  heading: { title: 'experience.title', subtitle: 'experience.subtitle' },
  items: [
    {
      id: 'kapulus',
      company: { name: 'Kapulus International', url: 'https://kapulusinternational.com/' },
      location: 'Colombia',
    },
    { id: 'freelance' },
  ] satisfies ExperienceItem[],
} as const;

export const EDUCATION_CONTENT = {
  heading: { title: 'education.title', subtitle: 'education.subtitle' },
  items: [
    {
      id: 'computer-engineering',
      institution: 'Institución Universitaria Colegio Mayor del Cauca',
      location: 'Colombia',
    },
    {
      id: 'online-courses',
      institution: 'DevTalles, Udemy, Academia X, Platzi',
      techs: [
        'nestjs', 'nodejs', 'fastapi', 'typescript', 'angular', 'claude-code', 'java',
        'spring-boot', 'javascript', 'html', 'css', 'postgresql', 'tailwind', 'python',
      ],
    },
  ] satisfies EducationItem[],
} as const;
