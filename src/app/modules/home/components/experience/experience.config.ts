import { TechId } from '@core/tech/tech-catalog';

export interface Company {
  name: string;
  /** Sitio de la empresa: si existe, el nombre se muestra como enlace. */
  url?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company?: Company;
  period: string;
  location?: string;
  highlights: readonly string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  location?: string;
  techs?: readonly TechId[];
}

// TODO(i18n): reemplazar textos por claves de traducción.
export const EXPERIENCE_CONTENT = {
  heading: {
    title: 'Experiencia',
    subtitle: 'Más de 2 años construyendo software que corre en producción.',
  },
  items: [
    {
      id: 'kapulus',
      role: 'Coordinador de Tecnología · Full Stack Developer',
      company: { name: 'Kapulus International', url: 'https://kapulusinternational.com/' },
      period: '2025 – 2026',
      location: 'Colombia',
      highlights: [
        'Lideré el desarrollo del sistema de registro de eventos de la compañía, escalándolo de 4.000 a más de 100.000 usuarios sin degradación de rendimiento.',
        'Impulsé la modernización técnica de la plataforma (migraciones de stack, refuerzo de seguridad y biometría) y la evolución del producto hacia analítica en tiempo real.',
      ],
    },
    {
      id: 'freelance',
      role: 'Freelance',
      period: '2023 – Actualidad',
      highlights: [
        'Diseño, implementación y despliegue de aplicaciones web, SPAs y microservicios personalizados para clientes independientes.',
      ],
    },
  ] satisfies ExperienceItem[],
} as const;

export const EDUCATION_CONTENT = {
  heading: {
    title: 'Educación',
    subtitle: 'Formación académica y aprendizaje continuo.',
  },
  items: [
    {
      id: 'computer-engineering',
      title: 'Ingeniero en Informática',
      institution: 'Institución Universitaria Colegio Mayor del Cauca',
      period: '08/2018 – 01/2025',
      location: 'Colombia',
    },
    {
      id: 'online-courses',
      title: 'FullStack Developer · Backend Development',
      institution: 'DevTalles, Udemy, Academia X, Platzi',
      period: '2023 – Actualidad',
      techs: [
        'nestjs', 'nodejs', 'fastapi', 'typescript', 'angular', 'claude-code', 'java',
        'spring-boot', 'javascript', 'html', 'css', 'postgresql', 'tailwind', 'python',
      ],
    },
  ] satisfies EducationItem[],
} as const;
