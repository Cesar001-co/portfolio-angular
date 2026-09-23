import { SECTION_IDS, SectionId } from '@core/navigation/sections';

export interface HeroCta {
  label: string;
  section: SectionId;
  variant: 'primary' | 'ghost';
}

export interface HeroStat {
  value: string;
  label: string;
}

// TODO(i18n): reemplazar textos por claves de traducción.
export const HERO_CONTENT = {
  title: {
    lead: 'Transformando tus ideas en',
    highlight: 'soluciones web',
    trail: '.',
  },
  ctas: [
    { label: 'Ver proyectos', section: SECTION_IDS.projects, variant: 'primary' },
    { label: 'Contactarme', section: SECTION_IDS.contact, variant: 'ghost' },
  ] satisfies HeroCta[],
  /** Indicador inferior: baja a la sección siguiente al hero. */
  scrollCta: { label: 'Desliza', section: SECTION_IDS.about },
  technologies:['NestJS', 'Angular', 'Spring Boot', 'IA'],
  stats: [
    { value: '2+', label: 'Años de experiencia' },
    { value: '8+', label: 'Proyectos entregados' },
  ] satisfies HeroStat[],
} as const;
