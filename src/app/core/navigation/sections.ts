/**
 * Identificadores de las secciones navegables del home.
 * Se usan como `id` del host de cada sección y como `fragment` en la navegación,
 * por lo que forman parte de la URL pública (/#about, /#projects, ...).
 */
export const SECTION_IDS = {
  home: 'home',
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  experience: 'experience',
  contact: 'contact',
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
