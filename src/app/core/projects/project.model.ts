import { TechId } from '@core/tech/tech-catalog';

export interface ProjectImage {
  src: string;
}

export interface Project {
  id: string;
  name: string;
  /** Tipo de proyecto: "Página web", "Aplicación móvil", ... */
  category: string;
  description: string;
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
