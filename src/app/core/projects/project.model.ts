import { TechId } from '@core/tech/tech-catalog';

export interface ProjectImage {
  src: string;
  /** Dimensiones reales del archivo (NgOptimizedImage las exige para evitar saltos de layout). */
  width: number;
  height: number;
}

export interface Project {
  id: string;
  name: string;
  /** Tipo de proyecto: "Página web", "Aplicación móvil", ... */
  category: string;
  description: string;
  image: ProjectImage;
  techs: readonly TechId[];
  links: {
    github?: string;
    web?: string;
  };
  /** Se muestra en "Proyectos destacados" del home. */
  featured: boolean;
}
