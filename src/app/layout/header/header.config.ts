import { SECTION_IDS, SectionId } from '@core/navigation/sections';

export interface NavItem {
  label: string;
  section: SectionId;
}

// TODO(i18n): reemplazar `label` por claves de traducción al integrar el servicio de idioma.
export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Inicio', section: SECTION_IDS.home },
  { label: 'Sobre mí', section: SECTION_IDS.about },
  { label: 'Skills', section: SECTION_IDS.skills },
  { label: 'Proyectos', section: SECTION_IDS.projects },
  { label: 'Experiencia', section: SECTION_IDS.experience },
  { label: 'Contacto', section: SECTION_IDS.contact },
];
