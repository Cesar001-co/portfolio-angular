import { TechId } from '@core/tech/tech-catalog';

export interface ProjectImage {
  src: string;
}

/**
 * Textos traducibles en public/assets/i18n/*.json → projects.items.<id>.category / .description
 */
export interface Project {
  /** Id estable: también es la clave de sus textos i18n. */
  id: string;
  /** Nombre propio: no se traduce. */
  name: string;
  /** La primera es la portada; el resto se alterna en la tarjeta al hacer hover. */
  images: readonly [ProjectImage, ...ProjectImage[]];
  techs: readonly TechId[];
  links: {
    github?: string;
    web?: string;
  };
  /** Se muestra en "Proyectos destacados" del home. */
  featured: boolean;
}
