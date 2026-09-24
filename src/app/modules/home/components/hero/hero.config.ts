import { SECTION_IDS, SectionId } from '@core/navigation/sections';

/** Los campos `label`/`title` son claves i18n (public/assets/i18n/*.json). */
export interface HeroCta {
  label: string;
  section: SectionId;
  variant: 'primary' | 'ghost';
}

export interface HeroStat {
  /** Número final de la animación de conteo (0 → value). */
  value: number;
  suffix?: string;
  label: string;
}

export const HERO_CONTENT = {
  title: {
    lead: 'hero.title.lead',
    highlight: 'hero.title.highlight',
    trail: 'hero.title.trail',
  },
  ctas: [
    { label: 'hero.ctas.projects', section: SECTION_IDS.projects, variant: 'primary' },
    { label: 'hero.ctas.contact', section: SECTION_IDS.contact, variant: 'ghost' },
  ] satisfies HeroCta[],
  /** Indicador inferior: baja a la sección siguiente al hero. */
  scrollCta: { label: 'hero.scroll', section: SECTION_IDS.about },
  /** Nombres propios: no se traducen. */
  technologies: ['NestJS', 'Angular', 'Spring Boot', 'IA'],
  stats: [
    { value: 2, suffix: '+', label: 'hero.stats.years' },
    { value: 8, suffix: '+', label: 'hero.stats.projects' },
  ] satisfies HeroStat[],
} as const;
