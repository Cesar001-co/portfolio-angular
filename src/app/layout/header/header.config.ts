import { SECTION_IDS, SectionId } from '@core/navigation/sections';

export interface NavItem {
  /** Clave i18n (public/assets/i18n/*.json). */
  label: string;
  section: SectionId;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'nav.home', section: SECTION_IDS.home },
  { label: 'nav.about', section: SECTION_IDS.about },
  { label: 'nav.skills', section: SECTION_IDS.skills },
  { label: 'nav.projects', section: SECTION_IDS.projects },
  { label: 'nav.experience', section: SECTION_IDS.experience },
  { label: 'nav.contact', section: SECTION_IDS.contact },
];
